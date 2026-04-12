---
title: "How I Performance Maxxed Apache Arrow for Map Reduce"
summary: "The art of removing costs you didn't know you were paying on every row."
publishedOn: 2026-04-12
draft: true
tags:
  - distributed-systems
  - data-engineering
  - java
  - apache-arrow
  - software-engineering
featured: false
---

I was building a custom map-reduce pipeline where [Apache Arrow](https://arrow.apache.org/) was the intermediate format. Mappers write Arrow files, reducers read them. Clean premise. Arrow has the cleanest elevator pitch in data infra: columnar format, zero-copy reads, cross-language interop, cheap serialization. All true. None of it prepared me for how many specific ways you can get taxed when you sit down with the [Java APIs](https://arrow.apache.org/docs/java/) and try to make a real reader and writer that's both correct *and* fast.

This post is about the traps I hit. The ones that cost days. The ones that only surfaced after I thought I was done.

---

## The setup

The outputs could be sorted. Mappers didn't just dump rows. They produced data in a specific order, and reducers sometimes needed to merge several sorted Arrow outputs into one globally ordered stream without loading everything into memory.

That sorted merge requirement turned a "just serialize some columns" job into a full negotiation with Arrow's internals. The traps here aren't specific to my setup. They show up wherever Arrow starts doing real work.

---

## The mmap mirage

Arrow talks a lot about memory-mapped I/O. Zero-copy reads off disk. mmap as a first-class citizen. I went in expecting to back my readers and writers with `MappedByteBuffer`s and get that path for free.

That story is true for the Python API. [PyArrow](https://arrow.apache.org/docs/python/) has clean mmap integration. The Java API does not. There is no built-in mmap-backed reader or writer in Arrow's Java libraries. The capability just isn't there.

So I tried building it myself. Backed the write channel with `MappedByteBuffer`s from `FileChannel.map()`. It worked. It was also brutally slow. Arrow's IPC format issues many small irregular writes: metadata blocks, record batch headers, body buffers, dictionary blocks, the footer. `MappedByteBuffer` is not designed for that access pattern. You're paying page fault overhead on every small write, and the OS page cache strategy doesn't line up with Arrow's write sequencing.

I abandoned mmap on the write path and went with buffered channels instead.

The read side was a different story. Once an Arrow file is fully written and closed, its access pattern is much friendlier to memory mapping. Large sequential scans and random-access seeks into known offsets. That is exactly what mmap is good at:

```java
MappedByteBuffer mappedByteBuffer =
    fileChannel.map(FileChannel.MapMode.READ_ONLY, 0, fileChannel.size());
ArrowFileReader reader = new ArrowFileReader(seekableByteChannel, rootAllocator);
```

The same I/O strategy can be terrible or excellent depending on which side of the pipeline you're on. mmap for writes was a dead end. mmap for reads was a real win.

---

## What the buffered writer does

Arrow's IPC writer is chatty. A single `writeBatch()` call doesn't produce one contiguous write to disk. It emits a metadata block, then the record batch body, which is itself a sequence of buffers: one per column, plus validity bitmaps, plus offset buffers for variable-width types, then alignment padding. At the end there's a footer with the schema and block index. Each of these is a separate write call to the underlying channel.

Through a raw `FileOutputStream`, every one of those becomes a system call. The OS gets hit with dozens of small writes per batch, some of them a handful of bytes for alignment padding. That's a lot of kernel transitions for data going to the same file anyway.

<iframe src="/widgets/arrow-perf/write-syscalls.html" width="100%" height="500" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

A `BufferedOutputStream` absorbs those small writes into a userspace buffer. Nothing goes to the kernel until the buffer fills up or you explicitly flush. Instead of thirty syscalls per batch you get one or two:

```java
int bufferSize = 8 * 1024 * 1024;
ArrowFileWriter writer = new ArrowFileWriter(
    vectorRoot,
    null,
    Channels.newChannel(
        new BufferedOutputStream(Channels.newOutputStream(channel), bufferSize)),
    Collections.emptyMap(),
    IpcOption.DEFAULT,
    _compressionFactory,
    _codecType,
    _compressionLevel);
```

An 8 MB buffer was the sweet spot. Too small and you're still issuing too many writes. Too large and you're holding memory for no reason. This path outperformed the mmap write attempt by a wide margin. Less clever, more effective.

---

## Compression

The writer supports `LZ4_FRAME` and `ZSTD`. I tried multiple codecs and different ZSTD levels. In a pipeline optimizing for throughput on cold datasets, compression pays for itself. But this path was latency-sensitive. The files are intermediate, written by mappers, read by reducers and discarded. They don't live long enough for smaller file sizes to matter.

```java
ArrowFilesWriter.ArrowCompressionType.NONE
```

That's not because compression was unavailable. It's because shaving latency off the hot path mattered more than squeezing the files. Compression is there for when the economics change.

---

## Arrow is not row serialization with better marketing

First thing I had to unlearn: thinking of Arrow as a fancier way to serialize rows. If you approach it that way the code still compiles. Your design instincts are just wrong.

Arrow's model is genuinely columnar. A batch is a `VectorSchemaRoot`, a collection of `FieldVector`s with one per column. The natural rhythm is to fill all values for column A, then all values for column B. When you fight that model with row-by-row logic in the hot path, Arrow lets you do it and then quietly makes you pay.

First design decision that reflected this: split sort columns and non-sort columns into separate `VectorSchemaRoot`s. The immediate benefit was cleaner sorting. Narrower schemas are easier to reason about and less likely to corrupt unrelated fields when you permute rows to reorder them.

But the bigger reason was the read path. In the sorted merge the reader needs to reconstruct ordering state across multiple files. It only needs the sort columns to do that. By keeping sort columns in their own root, the reader could load *just* the sort columns, reconstruct the heap state first, then defer loading the much wider non-sort columns until it actually needed to emit rows. Three sort columns and forty data columns is a massive difference in memory footprint during the merge.

Null handling required the same deliberateness. Row-oriented systems let you bluff through null semantics. Arrow forces you to be honest. The implementation stores null fields as integer column positions, not field names:

```java
for (int i = 0; i < fieldSpecs.size(); i++) {
  if (nullFields.contains(fieldSpecs.get(i).getName())) {
    listWriter.writeInt(i);
  }
}
```

Integer positions shrink the null metadata per row, avoid repeating strings and map directly back to column indices on the read side without a name lookup.

---

## The per-row tax problem

Once structure was right, the next class of problems came from a different place: small assumptions that looked harmless in isolation and turned out to be very much not harmless multiplied by millions of rows.

I think of these as **per-row taxes**. A tax isn't something expensive once. It's something small enough to ignore once and large enough to hurt when it runs on every value of every column of every row in your dataset.

**String handling.** `fieldValue.toString().getBytes()` looks like plumbing. In a write loop it's doing a redundant cast and an implicit charset lookup via `Charset.defaultCharset()` on every string field of every row:

```java
// before
bytes = fieldValue.toString().getBytes();

// after
bytes = ((String) fieldValue).getBytes(StandardCharsets.UTF_8);
```

**Column metadata lookup.** Original code mapped field names to vectors using a `HashMap<String, ColumnInfo>`. Every row did a string hash and map lookup for every column. The fields are always processed in the same order. There was never a reason to hash:

```java
private static class ColumnInfo {
  final FieldVector _fieldVector;
  final boolean _isSortColumn;
}

// positional access, not hash lookup
ColumnInfo columnInfo = columnInfoMap.get(i);  // ArrayList, not HashMap
FieldVector fieldVector = columnInfo._fieldVector;
```

**Type-specialized encode and decode.** The generic path where you cast everything through a common abstraction is clean and slow. Both the reader and writer branch explicitly on concrete Arrow vector types:

```java
switch (fieldSpec.getDataType().getStoredType()) {
  case INT: ...
  case LONG: ...
  case STRING: ...
}
```

Once the code knows the concrete type, it goes straight to the right vector operation without repeated casting through slower abstract paths.

**UnionListWriter reuse.** Multi-value columns are easy places to add repeated setup overhead. Cache the writer once per field instead of asking the `ListVector` for a new writer on every row:

```java
UnionListWriter listWriter =
    listWriters.computeIfAbsent(fieldSpec.getName(),
        k -> ((ListVector) fieldVector).getWriter());
```

**Vector root reuse.** Don't treat every flush as a reason to rebuild the Arrow world. Reuse the roots:

```java
if (vectorRoot == null) {
  vectorRoot = VectorSchemaRoot.create(schema, allocator);
} else {
  vectorRoot.clear();
}
```

None of these individually sounds like much. Together they're the difference between a write path that respects Arrow's model and one that sneaks per-row overhead back in through a hundred small decisions.

---

## The root allocator problem

Arrow's Java library manages all off-heap memory through a `RootAllocator`. You create one, give it a byte limit, and every `FieldVector`, every `VectorSchemaRoot`, every buffer allocation draws from that pool.

The limit you set at construction time is the limit you're stuck with. `RootAllocator` cannot be resized at runtime. Too low and you get `OutOfMemoryException`s from Arrow's own accounting, not the JVM heap. Too high and you've reserved off-heap memory the JVM thinks is available for other things.

The answer wasn't one number. Writers and readers have fundamentally different allocation profiles. Writers allocate vectors that grow as rows accumulate within a batch. Readers allocate vectors that get filled from disk and released on batch boundaries. The peak memory shapes are different.

Arrow doesn't give you great observability into allocator usage at runtime either. You can query allocated bytes but there's no built-in way to track high water marks or allocation rates. I ended up adding custom instrumentation to size the allocators correctly.

There was even a bug where an all-memory-released assertion was placed after creating a *new* allocator instead of being tied to the lifecycle that just ended. And when the process couldn't determine the direct memory limit, the config fell back to a default 2 GB off-heap budget. That default fed the knobs controlling batching and sorted read window sizes. Wrong default, wrong budget, entire bounded design mis-sized before the first batch even loaded.

The rule: be conservative on initial sizing. Instrument early. Treat the allocator limit as a hard constraint that your batch sizes and window sizes need to respect. Not the other way around.

---

## Sorting

Sorting Arrow-backed data is where this project became genuinely difficult. A sorted pipeline has to keep memory bounded *and* present rows in the right global order. Those goals fight each other.

Compute order on the captured sort values, then apply the resulting indices across both vector roots. Two levels of parallelism made this tractable. The sort indices come from `Arrays.parallelSort(...)`. The actual permutation is applied to both roots concurrently:

```java
private void sortAllColumns() {
    int[] sortIndices = getSortIndices();
    CompletableFuture<Void> f1 = CompletableFuture.runAsync(() ->
        ArrowSortUtils.inPlaceSortAll(_sortColumnsVectorRoot, sortIndices));
    CompletableFuture<Void> f2 = CompletableFuture.runAsync(() ->
        ArrowSortUtils.inPlaceSortAll(_nonSortColumnsVectorRoot, sortIndices));
    CompletableFuture.allOf(f1, f2).join();
}
```

Compute order once on the lightweight structure. Apply to both column groups concurrently. Arrow's columnar layout makes in-place permutation efficient because you're operating on column buffers, not row objects.

**Type-specialized comparison** mattered a lot. The sorted reader has explicit comparison logic for `Integer`, `Long`, `Float`, `Double`, `Text` and `String`. The `Text` comparator goes character by character on the raw representation to avoid materializing Java strings:

```java
private int compareBetweenText(Text cmp1, Text cmp2) {
  long minLen = Math.min(cmp1.getLength(), cmp2.getLength());
  for (int i = 0; i < minLen; i++) {
    int diff = cmp1.charAt(i) - cmp2.charAt(i);
    if (diff != 0) return diff;
  }
  return 0;
}
```

In the sorted merge, comparison runs on every heap operation, which means every row emitted. A slow comparator doesn't just slow down sorting. It slows down the entire read path.

---

## The read side

Everything above was about discipline. The read side introduced a different category: **state management under bounded memory** with correctness invariants that span batch boundaries.

Multiple sorted Arrow files merge into one globally ordered stream. Natural algorithm: min-heap, seed it with the first element from each file, pull minimum, advance that file's pointer, push next candidate back. Clean when everything fits in memory.

The constraint was that it had to work when everything did not fit. Each file could only keep a limited window of rows resident. When a window ran out, the next window had to load from disk without disrupting the global ordering the heap was maintaining.

<iframe src="/widgets/arrow-perf/sorted-merge.html" width="100%" height="560" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

One less obvious requirement was **lookahead**. The heap sometimes needed to peek at the *next* row beyond the current batch boundary:

```java
// regular columns: load exactly what you need
endIndex = Math.min(startIndex + batchSize, totalRows);

// sort columns: one extra row for heap lookahead
if (endIndex < totalSortedRows) {
    endIndex++;
}
```

Miss that by one and the last row of every batch becomes a landmine. Arrow doesn't throw when you read past a loaded window. It returns whatever is in the buffer at that offset. Silently wrong sort order, only at batch boundaries, only sometimes.

One of the nastier failures was at exactly that boundary. The logic for fetching the next sort value was doing `(indexInChunk + 1) % rowsPerLoad`. Worked until the current row was the last row of the window. The modulo wrapped to zero and the reader looked at the first row again instead of the real next row. Out-of-order rows, only at specific `rowsPerLoad` values.

Rewinds had a similar vibe. The code path resetting reader state looked simple: clear counters, reset pointers. But the sorted path maintained heap state that needed full reinitialization. The local batch pointer and the global row counter served different purposes and had to reset independently. That bug was consistent in integration tests, invisible in unit tests because unit tests never exercise rewind-then-read under sorted merge conditions.

**Disabling Arrow's null checks** was deliberate here:

```java
System.setProperty("arrow.enable_null_check_for_get", "false");
```

I already know how nulls are represented because I built the encoding on the write side. Arrow doing extra guard work on every `get()` in the hot loop is a per-row tax I can opt out of.

---

## The field vector caching problem

One of the more instructive interactions between correctness and performance.

`VectorSchemaRoot.getFieldVectors()` is not free. Calling it every row in a tight read loop is measurable. Obvious optimization: resolve the list once, pass it around.

```java
// before — resolves on every row
FieldVector fv = vectorSchemaRoot.getFieldVectors().get(i);

// after — cached list resolved once per batch load
FieldVector fv = cachedFieldVectors.get(i);
```

This optimization is correct. It is also *only* correct if you understand one thing. When a batch reloads from disk, you get a new `VectorSchemaRoot` with new `FieldVector` references. The old cached list points at the previous batch's vectors. Update the root without updating the cache and you silently read from the wrong batch.

<iframe src="/widgets/arrow-perf/field-vector-cache.html" width="100%" height="500" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

```java
if (loadedBatchChanged) {
  dataFieldVectors = dataVectorSchemaRoot.getFieldVectors();
  sortFieldVectors = sortVectorSchemaRoot != null
      ? sortVectorSchemaRoot.getFieldVectors() : null;
}
```

This is a very Arrow-shaped failure. The optimization is valid. The assumption that cached references outlive batch boundaries is not. Once I treated field vector cache as batch-scoped instead of eternal, the reader stabilized.

---

## The string decoding trap

Arrow's `VarCharVector.getObject()` returns an Arrow `Text` object, not a Java `String`. Calling `.toString()` on a `Text` looks natural. It's also more work than the name suggests. Internally Arrow constructs the `Text` representation then serializes it back through `new String(bytes)` with extra indirection.

On dense string columns at high throughput, this shows up in flame graphs:

```java
// before — indirect path through Text representation
String result = ((VarCharVector) fieldVector).getObject(rowId).toString();

// after — directly from the underlying byte array
String result = new String(
    ((VarCharVector) fieldVector).getObject(rowId).getBytes());
```

Similar issue in row object allocation. The read loop was creating a new row object on every `next()` call, layering heap allocation and GC pressure on top of what's supposed to be an off-heap zero-copy read:

```java
private GenericRow convertToGenericRow(..., @Nullable GenericRow reuse) {
  GenericRow genericRow = reuse != null ? reuse : new GenericRow();
  genericRow.clear();
  ...
  return genericRow;
}
```

One allocation per loop instead of one per row. This doesn't show up as a clever Arrow trick. It shows up as heap usage no longer fighting the off-heap path.

---

## Memory pressure lives off heap

Most of Arrow's memory is off heap. Your heap metrics look calm while Arrow's buffer allocations are the real pressure. Standard GC intuition gets you about halfway.

Variable-width columns like strings and byte arrays are the worst offenders. Buffers grow unpredictably. Reloads cost more. The hot stack traces kept pointing at `BaseVariableWidthVector.copyFromSafe(...)` while loading the next batch of sorted data.

`VectorSchemaRoot.slice()` looked appealing as a logical view over an already-loaded batch. It is not a free view. Under the hood it goes through `splitAndTransfer`, which allocates new vectors. Used carelessly it manufactures more memory pressure and bets that old allocations get released in time.

At one point I still saw Arrow OOMs after reducing `rowsPerLoad` to 10K and increasing buffer capacity to 8 GB. The deeper issue was resource lifetime.

Rule that emerged: **previous batch resources get explicitly released before loading the next ones.** Exception paths release too. Not just the happy path. A bounded memory design is only bounded if old buffers actually die.

---

## You need numbers not feelings

I added [JMH](https://github.com/openjdk/jmh) benchmarks early and kept a baseline on the previous format so Arrow wasn't being evaluated against vibes. Paired with [async-profiler](https://github.com/async-profiler/async-profiler) because benchmarks tell you *that* something is expensive, profiles tell you *where*.

Most important discipline: separate the no-sort path from the sort-heavy path in benchmarks. Sorting dominates everything else. Without that separation you can't tell if a regression belongs to Arrow serialization or the ordering layer.

JMH told me whether a change was real. async-profiler showed me which path was still wasting time. That's how things like repeated vector lookups and `Text.toString()` stopped being guesses and became obvious targets.

Going straight into Arrow's codebase helped a lot too. A few of the weirdest slowdowns came from operations that looked like simple bookkeeping from the outside. Reading the implementation was often the fastest way to understand what was actually happening.

---

## The dumb mistakes

Some problems were subtle interactions between correctness and performance. This one was just wrong.

The writer needs to know how big the current batch is to know when to flush. An early version summed `fieldVector.getBufferSize()` after every row. Looks reasonable until you read what `getBufferSize()` actually returns: the vector's *total allocated capacity*, not the bytes this write added. Accumulate that after every row and your count grows O(n²). Flush threshold fires way too early.

The fix went through iterations. An intermediate version tracked per-column sizes:

```java
private long getBatchByteCount() {
  return Arrays.stream(_sortColumnsBatchByteCount).sum()
      + Arrays.stream(_nonSortColumnsBatchByteCount).sum();
}
```

Better, but more moving parts than necessary. The final version tracked only incremental growth:

```java
long currentFieldVectorBufferSize = fieldVector.getBufferSize();
// write row value
_nonSortColumnsBatchByteCount +=
    (fieldVector.getBufferSize() - currentFieldVectorBufferSize);
```

And:

```java
private long getBatchByteCount() {
  return _sortColumnsBatchByteCount + _nonSortColumnsBatchByteCount;
}
```

Fewer structures. Less recomputation. Better threshold behavior.

---

## My take

Every problem in this work had the same shape. Arrow is explicit about everything: what's materialized, what's buffered, what's cached, what becomes invalid when a batch boundary moves, what a size number actually means, where memory lives.

The Java APIs don't hide complexity from you the way the Python APIs sometimes do. That's not a criticism. The spec delivers on its promises. The implementation just expects you to understand every detail of the contract and will not warn you when you violate one.

If you're using Arrow in Java for anything past toy examples, expect to spend time in Arrow's source code. The Javadoc tells you what methods exist. The source tells you what they actually cost.
