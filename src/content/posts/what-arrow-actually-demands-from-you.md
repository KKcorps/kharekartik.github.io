---
title: How I performance maxxed Apache Arrow for map reduce
summary: The art of removing costs you didn't know you were paying on every row
publishedOn: 2025-07-16
tags:
  - distributed-systems
  - data-engineering
  - java
  - apache-arrow
featured: false
draft: false
---

[Apache Arrow](https://arrow.apache.org/) has maybe the cleanest elevator pitch in all of data infra. Columnar format. Zero copy reads. Cross language interop. Cheap serialization. All true. Arrow is not lying to you about any of this. But there is a gap between what the spec promises and what you actually encounter when you sit down with the [Java APIs](https://arrow.apache.org/docs/java/) try to build a real reader and writer and make both of them correct *and* fast.

That gap is filled with very specific traps. This post is about the traps we hit. The ones that cost us days. The ones that only surfaced after we thought we were done.

---

## The setup

I was building a custom map reduce pipeline where Arrow was the intermediate format. Mappers write Arrow files, reducers read them. Clean premise. Ship it.

Except outputs could be sorted. Mappers didn't just dump rows. They produced data in a specific order. And reducers sometimes needed to merge several sorted Arrow outputs into one globally ordered stream without loading everything into memory.

That sorted merge requirement is what turned a just serialize some columns job into a full negotiation with Arrow's internals. If you've built anything with Arrow that went past toy examples, you've hit a version of this negotiation. The traps are not specific to my setup. They show up wherever Arrow starts doing real work.

---

## The mmap mirage and where it actually worked

Before we even got to the real problems, we lost time to a wrong assumption. Arrow talks a lot about memory mapped I/O. Zero copy reads off disk. mmap as a first class citizen. We went in expecting to back our readers and writers with `MappedByteBuffer`s and get that path for free.

That story is true for the Python API. [PyArrow](https://arrow.apache.org/docs/python/) has clean, well supported mmap integration. The Java API does not. There is no built in mmap backed reader or writer in Arrow's Java libraries. The capability just isn't there.

So we tried building it ourselves. Backed the write channel with `MappedByteBuffer`s from `FileChannel.map()`. It worked. It was also brutally slow. The problem is that Arrow's IPC format issues many small irregular writes. Metadata blocks. Record batch headers. Body buffers. Dictionary blocks. The footer. `MappedByteBuffer` is not designed for that access pattern. You're paying page fault overhead on every small write. The OS page cache strategy also doesn't line up well with Arrow's write sequencing. The throughput was significantly worse than a properly buffered `FileOutputStream`.

We abandoned mmap on the write path and went with buffered channels instead.

The read side was a different story. Reads *did* benefit from mmap. Once an Arrow file is fully written and closed, its access pattern is much friendlier to memory mapping. You're doing large sequential scans and random access seeks into known offsets. That is exactly what mmap is good at. The reader opens files through `FileChannel.map(READ_ONLY, ...)` and wraps the result for Arrow consumption:

```java
MappedByteBuffer mappedByteBuffer =
    fileChannel.map(FileChannel.MapMode.READ_ONLY, 0, fileChannel.size());
ArrowFileReader reader = new ArrowFileReader(seekableByteChannel, rootAllocator);
```

So mmap for writes was a dead end. Mmap for reads was a real win. The lesson was that the same I/O strategy can be terrible or excellent depending on which side of the pipeline you're on and what the access pattern looks like.

---

## What the buffered writer actually does

Arrow's IPC writer is chatty. A single `writeBatch()` call doesn't produce one contiguous write to disk. It emits a metadata block, then the record batch body. That body is itself a sequence of buffers. One per column. Plus validity bitmaps. Plus offset buffers for variable width types. Then alignment padding. At the end of the file there's a footer with the schema and block index. Each of these is a separate write call to the underlying channel.

Through a raw `FileOutputStream`, every one of those writes becomes a system call. The OS gets hit with dozens of small writes per batch, some of them a handful of bytes for alignment padding. That's a lot of kernel transitions for data that's going to the same file anyway.

A `BufferedOutputStream` sits between Arrow's writer and the OS and absorbs those small writes into a userspace buffer. Nothing goes to the kernel until the buffer fills up or you explicitly flush. Instead of thirty syscalls per batch you get one or two. The writes coalesce in memory and hit disk as large sequential writes. That is what the I/O subsystem actually wants.

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

An 8 MB buffer was the sweet spot for our workload. Too small and you're still issuing too many writes. Too large and you're holding memory for no reason.

This is the path that outperformed our mmap write attempt by a wide margin. Less clever, more effective.

---

## Compression: we tried it then chose not to

The writer supports multiple compression modes. `LZ4_FRAME` and `ZSTD`. The ZSTD path even allows tuning the compression level. That flexibility was useful because it let us explore the classic Arrow tradeoff. Smaller files and lower downstream I/O versus extra CPU spent compressing and decompressing.

We tried multiple codecs and different ZSTD levels. In a pipeline where you're optimizing for throughput on large cold datasets, compression pays for itself. But this path was latency sensitive. The files are intermediate, written by mappers, read by reducers and discarded. They don't live long enough for smaller file sizes to matter much.

So the default stayed:

```java
ArrowFilesWriter.ArrowCompressionType.NONE
```

That's not because compression was unavailable. It's because for this use case, shaving latency off the hot path mattered more than squeezing the Arrow files further. Compression is there for when the economics change.

---

## Arrow is not row serialization with better marketing

First thing I had to unlearn: thinking of Arrow as a fancier way to serialize rows. If you approach it that way the code still compiles. Your design instincts are just wrong.

Arrow's model is genuinely columnar. A batch of data is a `VectorSchemaRoot`. It is a collection of `FieldVector`s with one per column. The natural rhythm is to fill all values for column A. Then all values for column B. Not push row objects through one at a time. When you fight that model with row by row logic in the hot path, Arrow lets you do it and then quietly makes you pay at scale.

First design decision that reflected this properly: split sort columns and non sort columns into separate `VectorSchemaRoot`s. The immediate benefit was cleaner sorting. Narrower schemas are easier to reason about and less likely to corrupt unrelated fields when you permute rows to reorder them.

But the bigger reason was the read path. In the sorted merge the reader needs to reconstruct ordering state across multiple files. It doesn't need all the columns to do that. It only needs the sort columns. By keeping sort columns in their own root the reader could load *just* the sort columns into memory. It could reconstruct the heap state and merge order first. Then it could defer loading the much wider non sort columns until it actually needed to emit rows. When you have three sort columns and forty data columns that is a massive difference in memory footprint during the merge.

Null handling required the same deliberateness. Row-oriented systems let you bluff through null semantics because they're often implicit. Arrow forces you to be honest. If nullability isn't encoded at the schema and writer level, the read path has no reliable way to reconstruct row state.

The implementation deliberately stores null fields as integer column positions, not field names:

```java
for (int i = 0; i < fieldSpecs.size(); i++) {
  if (nullFields.contains(fieldSpecs.get(i).getName())) {
    listWriter.writeInt(i);
  }
}
```

That's a real optimization. It shrinks the null metadata per row. It avoids repeating strings. It keeps the side channel for null reconstruction compact. On the read side integer positions map directly back to column indices without a name lookup. The representation matches the access pattern.

---

## The per row tax problem

Once structure was right, the next class of problems came from a different place: small assumptions that looked harmless in isolation and turned out to be very much not harmless when multiplied by millions of rows.

I think of these as **per row taxes**. A tax isn't something expensive once. It's something small enough to ignore once and large enough to hurt when it runs on every value of every column of every row in your dataset.

**String handling.** A line like `fieldValue.toString().getBytes()` looks like plumbing. In a write loop it's doing a redundant cast, an implicit charset lookup via `Charset.defaultCharset()`, on every string field of every row. Fix isn't hard. You just have to accept that nothing is free in a hot path.

```java
// before
bytes = fieldValue.toString().getBytes();

// after
bytes = ((String) fieldValue).getBytes(StandardCharsets.UTF_8);
```

**Column metadata lookup.** Original code mapped field names to vectors using a `HashMap<String, ColumnInfo>`. Every row was doing a string hash and map lookup for every column. The fields are always processed in the same order. There was never a reason to hash. Precompute the mapping once, consume it positionally:

```java
private static class ColumnInfo {
  final FieldVector _fieldVector;
  final boolean _isSortColumn;
}

// then in the hot loop:
ColumnInfo columnInfo = columnInfoMap.get(i);  // ArrayList, not HashMap
FieldVector fieldVector = columnInfo._fieldVector;
```

**Type specialized encode and decode.** The generic path where you cast everything through a common abstraction and let Java figure it out is clean and slow. Both the reader and writer branch explicitly on concrete Arrow vector types instead:

```java
// writer side
switch (fieldSpec.getDataType().getStoredType()) {
  case INT:
    ...
  case LONG:
    ...
  case STRING:
    ...
}

// reader side
if (fieldVector instanceof IntVector) {
  ...
} else if (fieldVector instanceof BigIntVector) {
  ...
} else if (fieldVector instanceof VarCharVector) {
  ...
}
```

This isn't verbosity for its own sake. The point is to avoid paying a generic per row tax in the hottest part of the system. Once the code knows the concrete type, it goes straight to the right vector operation without repeated casting through slower abstract paths.

**UnionListWriter reuse.** Multi-value columns are easy places to accidentally add repeated setup overhead. Instead of asking the `ListVector` for a new writer on every row, cache the `UnionListWriter` once per field and reset between batches:

```java
UnionListWriter listWriter =
    listWriters.computeIfAbsent(fieldSpec.getName(),
        k -> ((ListVector) fieldVector).getWriter());
```

Then on batch flush:

```java
for (UnionListWriter writer : listWriters.values()) {
  writer.setValueCount(0);
}
listWriters.clear();
```

Arrow rewards not repeating expensive setup for every row when the same writer can live for the whole batch.

**Vector root reuse.** One subtle optimization in the writer: don't treat every flush as a reason to rebuild the whole Arrow world. Once the vector roots have been created, the next batch can start by clearing and reusing them:

```java
if (vectorRoot == null) {
  vectorRoot = VectorSchemaRoot.create(schema, allocator);
} else {
  vectorRoot.clear();
}
```

Arrow structure creation is not free. Reusing roots reduces allocator churn, keeps the batch shape stable, and avoids one more layer of setup at every flush boundary.

None of these individually sounds like much. Together they're the difference between a write path that respects Arrow's model and one that sneaks per-row overhead back in through a hundred small decisions.

---

## The root allocator problem

Arrow's Java library manages all its off heap memory through a `RootAllocator`. You create one, give it a byte limit, and every `FieldVector`, every `VectorSchemaRoot`, every buffer allocation draws from that pool.

The problem is that the limit you set at construction time is the limit you're stuck with. `RootAllocator` cannot be resized at runtime. You can't grow it when load increases. You can't shrink it when you're done with a heavy phase. You pick a number at init time and that number is your ceiling forever.

Get it wrong and you hit one of two failure modes. Too low and you get `OutOfMemoryException`s from Arrow's allocator. Not the JVM heap but Arrow's own accounting. Too low also means failures in the middle of a batch load or write. Too high and you've reserved off heap memory the JVM thinks is available for other things. That can cause pressure elsewhere or just waste address space.

We went through a lot of iterations to find the right values. The answer wasn't one number. It was different numbers for the write path and the read path. Those two paths have fundamentally different allocation profiles. Writers allocate vectors that grow as rows accumulate within a batch. Readers allocate vectors that get filled from disk and then released on batch boundaries. The peak memory shapes are different.

What made it harder is that Arrow doesn't give you great observability into allocator usage at runtime. You can query the allocated bytes on a root allocator. But there's no built in way to track high water marks or allocation rates over time. We ended up adding our own instrumentation to size the allocators correctly for production workloads.

There was even a bug where an all memory released assertion was placed after creating a *new* allocator. That is the wrong time to ask that question. Allocator sanity checks have to be tied to the lifecycle that just ended, not the one you just started.

When the process couldn't determine the direct memory limit the Arrow config fell back to a default off heap budget of 2 GB. That sounds harmless. But it was feeding the knobs that controlled batching and sorted read window sizes. If the default was wrong for the environment then the entire bounded design could be mis sized before the first batch even loaded. In one of the later failures simply setting the off heap limit explicitly was enough to get the run through.

The rule that emerged was simple. Be conservative on initial sizing. Instrument early. Treat the allocator limit as a hard constraint that your batch sizes and window sizes need to respect. Not the other way around.

---

## Sorting: where correctness and throughput collide

Sorting Arrow backed data is where this project became genuinely difficult. A sorted pipeline has to keep memory bounded *and* present rows in the right global order. Those goals fight each other.

The writer side needed a sort strategy that didn't spend unnecessary time touching full rows. Compute order on the captured sort values, then apply the resulting indices across both vector roots. Two levels of parallelism made this tractable. First, the sort indices themselves are computed with `Arrays.parallelSort(...)`. Then the actual permutation is applied to both roots concurrently:

```java
private void sortAllColumns() {
    int[] sortIndices = getSortIndices();  // uses Arrays.parallelSort
    CompletableFuture<Void> f1 = CompletableFuture.runAsync(() ->
        ArrowSortUtils.inPlaceSortAll(_sortColumnsVectorRoot, sortIndices));
    CompletableFuture<Void> f2 = CompletableFuture.runAsync(() ->
        ArrowSortUtils.inPlaceSortAll(_nonSortColumnsVectorRoot, sortIndices));
    CompletableFuture.allOf(f1, f2).join();
}
```

Compute order once on the lightweight structure. Apply it to both column groups concurrently. Arrow's columnar layout makes in place permutation efficient because you're operating on column buffers, not row objects.

**Type specialized comparison** mattered a lot here. The sorted reader doesn't treat comparison as a generic let Java figure it out problem. It has explicit comparison logic for `Integer`, `Long`, `Float`, `Double`, `Text` and `String`. The `Text` comparator goes character by character on the raw representation to avoid materializing Java strings at all:

```java
private int compareBetweenText(Text cmp1, Text cmp2) {
  long minLen = Math.min(cmp1.getLength(), cmp2.getLength());
  for (int i = 0; i < minLen; i++) {
    int diff = cmp1.charAt(i) - cmp2.charAt(i);
    if (diff != 0) {
      return diff;
    }
  }
  return 0;
}
```

If a comparison can be done without allocating strings, without routing through a generic `Comparable` path and without repeated casting at row comparison time, Arrow benefits immediately. In the sorted merge comparison runs on every heap operation. That means it runs on *every row emitted*. A slow comparator doesn't just slow down sorting. It slows down the entire read path.

---

## The read side is where it gets genuinely hard

Everything above was about discipline. The read side introduced a different category of problem: **state management under bounded memory** with correctness invariants that span batch boundaries.

The sorted merge drove this complexity. Multiple sorted Arrow files need to merge into one globally ordered stream. Natural algorithm: min heap, seed it with the first element from each file, pull minimum, advance that file's pointer, push the next candidate back into the heap. Clean when everything fits in memory.

The constraint was that it had to work when everything did not fit in memory. Each file could only keep a limited window of rows resident. When a window ran out, the next window had to load from disk without disrupting the global ordering the heap was maintaining. That requirement touched nearly everything: batch loading, heap seeding, pointer advancement, cache maintenance and edge cases around rewinds and partial batches.

One of the less obvious requirements was **lookahead**. The heap sometimes needed to peek at the *next* row of a file to decide what to push back. Sort column windows needed one extra row beyond the current batch boundary:

```java
// regular columns: load exactly what you need
endIndex = Math.min(startIndex + batchSize, totalRows);

// sort columns: one extra row for heap lookahead
if (endIndex < totalSortedRows) {
    endIndex++;
}
```

> Miss that by one and the last row of every batch becomes a landmine. Arrow doesn't throw when you read past a loaded window. It returns whatever is in the buffer at that offset. You get silently wrong sort order only at batch boundaries and only sometimes.

One of the nastier failures was at exactly that boundary. The logic for fetching the next sort value in a loaded window was doing `(indexInChunk + 1) % rowsPerLoad`. That worked until the current row was the last row of the window. The modulo wrapped to zero and the reader looked at the first row of the window again instead of the real next row. That gave us out of order rows only at specific `rowsPerLoad` values. The fix was to simplify when the next element got pushed into the priority queue so that the update aligned naturally with `next()` and with batch reload boundaries.

Rewinds had a similar vibe. The code path that reset reader state to the beginning looked simple. Clear counters. Reset pointers. But the sorted path maintained heap state that needed full reinitialization. Not partial reset. The local batch pointer and the global row counter served different purposes and had to reset independently. That bug showed up consistently in integration tests. It stayed invisible in unit tests because unit tests never exercise the rewind then read path under sorted merge conditions.

**Disabling Arrow's null checks** was a deliberate choice on this path. The reader explicitly sets:

```java
System.setProperty("arrow.enable_null_check_for_get", "false");
```

Once I already know how nulls are represented and reconstructed because I built the null field encoding on the write side, I don't need Arrow doing extra guard work on every `get()` in the hot loop. It's not a correctness feature at that point. It's a per row tax I can opt out of.

---

## The field vector caching problem

One of the more instructive interactions between correctness and performance in this whole project.

`VectorSchemaRoot.getFieldVectors()` is not free. Calling it every row in a tight read loop is measurable. Obvious optimization: resolve the list once, pass it around.

```java
// before — resolves on every row
FieldVector fv = vectorSchemaRoot.getFieldVectors().get(i);

// after — cached list resolved once per batch load
FieldVector fv = cachedFieldVectors.get(i);
```

This optimization is correct. It is also *only* correct if you understand one thing. When a batch reloads from disk, you get a new `VectorSchemaRoot` with new `FieldVector` references. The old cached list points at the previous batch's vectors. Update the root without updating the cache and you silently read from the wrong batch.

```java
if (loadedBatchChanged) {
  dataFieldVectors = dataVectorSchemaRoot.getFieldVectors();
  sortFieldVectors = sortVectorSchemaRoot != null
      ? sortVectorSchemaRoot.getFieldVectors() : null;
}
```

This is a very Arrow shaped failure. The optimization is valid. The assumption that cached references outlive batch boundaries is not. Once I treated field vector cache as batch scoped instead of eternal, the entire reader stabilized.

---

## The string decoding trap

Arrow's `VarCharVector.getObject()` returns an Arrow `Text` object, not a Java `String`. Calling `.toString()` on a `Text` looks natural. It's also more work than the name suggests. Internally Arrow constructs the `Text` representation then serializes it back through `new String(bytes)` with extra indirection along the way.

On dense string columns at high throughput, this shows up in flame graphs. Bypass the intermediate representation entirely:

```java
// before — indirect path through Text representation
String result = ((VarCharVector) fieldVector).getObject(rowId).toString();

// after — directly from the underlying byte array
String result = new String(
    ((VarCharVector) fieldVector).getObject(rowId).getBytes());
```

Similar issue in row object allocation. The read loop was creating a new row object on every `next()` call, layering JVM heap allocation and GC pressure on top of what is supposed to be an off heap zero copy read. The safer pattern:

```java
private GenericRow convertToGenericRow(..., @Nullable GenericRow reuse) {
  GenericRow genericRow = reuse != null ? reuse : new GenericRow();
  genericRow.clear();
  ...
  return genericRow;
}
```

One allocation per loop instead of one per row. This kind of change doesn't show up as a clever Arrow trick. It shows up as heap usage no longer fighting the off heap path.

---

## Memory pressure lives off heap

The deeper I got into bounded memory reads, the more I had to reckon with where Arrow's memory actually lives. Most of it is off heap. Your heap metrics look calm while Arrow's buffer allocations are the real pressure. Standard GC intuition gets you about halfway.

Variable width columns like strings and byte arrays are the worst offenders. Buffers grow unpredictably. Reloads cost more. The difference between tight windowing and sloppy windowing shows up most dramatically there. The hot stack traces kept pointing at `BaseVariableWidthVector.copyFromSafe(...)` while loading the next batch of sorted data. The expensive part wasn't just reading another window. It was materializing that window for variable width data while earlier buffers were still alive.

`VectorSchemaRoot.slice()` looked appealing as a logical view over an already-loaded batch portion. It is not a free view. Under the hood it goes through `splitAndTransfer`, which allocates new vectors. Used carelessly it manufactures more memory and bets that old allocations get released in time.

At one point we still saw Arrow OOMs even after reducing `rowsPerLoad` to 10K and increasing buffer capacity to 8 GB. The problem wasn't just smaller batches. The deeper issue was resource lifetime and reload behavior.

Rule that emerged: **previous batch resources get explicitly released before loading the next ones**. Exception paths release too. Not just the happy path. A bounded memory design is only bounded if old buffers actually die.

---

## You need numbers not feelings

I added [JMH](https://github.com/openjdk/jmh) benchmarks early and kept them with a baseline on the previous format so Arrow wasn't being evaluated against vibes. I paired that with [async-profiler](https://github.com/async-profiler/async-profiler) because benchmarks tell you *that* something is expensive. Profiles tell you *where* the cost is actually hiding.

Most important discipline: separate the no sort path from the sort heavy path in benchmarks. Sorting dominates everything else. Without that separation you can't tell if a regression belongs to Arrow serialization or the ordering layer on top of it.

That combination gave me a much clearer workflow. JMH told me whether a change was real. async-profiler showed me which path was still wasting time. That is how things like repeated vector lookups, `Text.toString()` and other small per row costs stopped being guesses. They started becoming obvious targets.

The other thing that helped a lot was going straight into Arrow's codebase. A few of the weirdest slowdowns came from operations that looked like simple bookkeeping from the outside. Reading the implementation was often the fastest way to understand what work was actually happening. It also explained why it showed up in the profile.

---

## The dumb mistakes

Some problems in this project were subtle interactions between correctness and performance. This one was just wrong.

**Batch size tracking.** The writer needs to know how big the current batch is so it knows when to flush. An early version summed `fieldVector.getBufferSize()` after every row write. Looks reasonable until you read what `getBufferSize()` actually returns. It is the vector's *total allocated capacity*. Not the bytes this write added. Accumulate that after every row and your count grows O(n²). Flush threshold fires way too early. Downstream behavior gets shaped by numbers that have nothing to do with reality.

The fix went through iterations. An intermediate version tracked per-column buffer sizes and recomputed the total by summing arrays:

```java
private long getBatchByteCount() {
  return Arrays.stream(_sortColumnsBatchByteCount).sum()
      + Arrays.stream(_nonSortColumnsBatchByteCount).sum();
}
```

Better than naive overcounting, but still more moving parts than necessary. The final version switched to tracking only incremental growth:

```java
long currentFieldVectorBufferSize = fieldVector.getBufferSize();
// write row value
_nonSortColumnsBatchByteCount +=
    (fieldVector.getBufferSize() - currentFieldVectorBufferSize);
```

And `getBatchByteCount()` became:

```java
private long getBatchByteCount() {
  return _sortColumnsBatchByteCount + _nonSortColumnsBatchByteCount;
}
```

Fewer structures. Less recomputation. Easier reasoning. Better threshold behavior.

---

Every problem in this work had the same shape. Arrow is explicit about everything. What's materialized. What's buffered. What's cached. What becomes invalid when a batch boundary moves. What a size number actually means. Where memory lives. The Java APIs don't hide complexity from you the way the Python APIs sometimes do. That's not a criticism of Arrow. The spec delivers on its promises. It's just that the Java implementation expects you to understand every detail of the contract and it will not warn you when you violate one.
