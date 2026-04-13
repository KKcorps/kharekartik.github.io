---
title: "How I Performance Maxxed Apache Arrow for Map Reduce"
summary: "The art of removing costs you didn't know you were paying on every row."
publishedOn: 2026-04-12
draft: false
tags:
  - distributed-systems
  - data-engineering
  - java
  - apache-arrow
  - software-engineering
featured: false
---

So in 2024, I was building a custom map-reduce framework and I needed an intermediate format for shuffling data between mappers and reducers. I picked [Apache Arrow](https://arrow.apache.org/) because it has maybe the cleanest elevator pitch in all of data infra: columnar format, zero-copy reads, cross-language interop and cheap serialization. I read all that and thought this would be the easy part of the project. Little did I know.

---

## The setup

The map-reduce path itself was already not simple. I needed Arrow to write efficiently, manage off-heap memory correctly, avoid per-row overhead in tight loops and handle nulls in a columnar format that doesn't let you bluff through the semantics. The write path, the buffered I/O, the allocator sizing, the type-specialized codecs, all of that had to work before I could even think about the next problem.

And the next problem was sorting. The outputs could be sorted, which meant mappers didn't just dump rows but produced data in a specific order and reducers sometimes needed to merge several sorted Arrow outputs into one globally ordered stream without loading everything into memory. That added an entirely separate layer on top of what was already a full project: bounded memory windows, heap-based merging, lookahead across batch boundaries, cache invalidation on reload.

What follows is every trap I hit across both layers. Most of them only surfaced after I thought I was done.

---

## The mmap mirage

Before I even got to the real problems I lost time chasing a wrong assumption. Arrow talks a lot about memory-mapped I/O and zero-copy reads off disk, so I went in expecting to back my readers and writers with `MappedByteBuffer`s and get that path for free.

That story is true if you're using [PyArrow](https://arrow.apache.org/docs/python/), which has clean and well-supported mmap integration. But the Java API simply doesn't have a built-in mmap-backed reader or writer and the capability just isn't there.

So I tried building it myself. Backed the write channel with `MappedByteBuffer`s from `FileChannel.map()`. It worked, but it was also brutally slow. Arrow's IPC format issues many small irregular writes: metadata blocks, record batch headers, body buffers, dictionary blocks, the footer. `MappedByteBuffer` is not designed for that access pattern. You're paying page fault overhead on every small write and the OS page cache strategy doesn't line up well with Arrow's write sequencing. The throughput was significantly worse than a properly buffered `FileOutputStream`, so I abandoned mmap on the write path entirely.

The read side was a different story. Once an Arrow file is fully written and closed, its access pattern is much friendlier to memory mapping. You're doing large sequential scans and random-access seeks into known offsets, which is exactly what mmap is good at:

```java
MappedByteBuffer mappedByteBuffer =
    fileChannel.map(FileChannel.MapMode.READ_ONLY, 0, fileChannel.size());
ArrowFileReader reader = new ArrowFileReader(seekableByteChannel, rootAllocator);
```

The lesson was that the same I/O strategy can be terrible or excellent depending on which side of the pipeline you're on and what the access pattern looks like.

---

## What the buffered writer does

I didn't realize how chatty Arrow's IPC writer actually is until I looked at what a single `writeBatch()` call does under the hood. It doesn't produce one contiguous write to disk. It emits a metadata block, then the record batch body which is itself a sequence of buffers: one per column, plus validity bitmaps, plus offset buffers for variable-width types, then alignment padding. At the end of the file there's a footer with the schema and block index. Each of these is a separate write call to the underlying channel.

Through a raw `FileOutputStream`, every one of those writes becomes a system call. The OS gets hit with dozens of small writes per batch, some of them a handful of bytes for alignment padding. That is a lot of kernel transitions for data that's going to the same file anyway.

<iframe src="/widgets/arrow-perf/write-syscalls.html" width="100%" height="510" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

A `BufferedOutputStream` sits between Arrow's writer and the OS and absorbs those small writes into a userspace buffer. Nothing goes to the kernel until the buffer fills up or you explicitly flush. Instead of thirty syscalls per batch you get one or two. The writes coalesce in memory and hit disk as large sequential writes, which is what the I/O subsystem actually wants.

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

An 8 MB buffer was the sweet spot for our workload. Too small and you're still issuing too many writes, too large and you're holding memory for no reason. This is the path that outperformed our mmap write attempt by a wide margin despite being conceptually much simpler.

---

## Not every byte deserves to be squeezed

The writer supports multiple compression modes including `LZ4_FRAME` and `ZSTD`. I tried multiple codecs and different ZSTD levels. In a pipeline where you're optimizing for throughput on large cold datasets, compression pays for itself. But this particular path was latency-sensitive. The files are intermediate, written by mappers, read by reducers and discarded. They don't live long enough for smaller file sizes to matter much.

```java
ArrowFilesWriter.ArrowCompressionType.NONE
```

That's not because compression was unavailable. It's because for this use case, shaving latency off the hot path mattered more than squeezing the Arrow files further. Compression is there for when the economics change.

---

## The columnar mindset shift

The first thing I had to unlearn was thinking of Arrow as a fancier way to serialize rows. If you approach it that way the code still compiles but your design instincts end up fighting the format at every turn.

Arrow is genuinely columnar. A batch of data is a `VectorSchemaRoot` which is a collection of `FieldVector`s with one per column. The natural rhythm is to fill all values for column A then all values for column B, not push row objects through one at a time. I started with row-by-row logic in the hot path because it felt natural and Arrow let me do it, but it quietly made me pay at scale.

The first design decision that reflected this properly was splitting sort columns and non-sort columns into separate `VectorSchemaRoot`s. The immediate benefit was cleaner sorting since narrower schemas are easier to reason about and less likely to corrupt unrelated fields when you permute rows to reorder them.

But the bigger reason was the read path. In the sorted merge the reader needs to reconstruct ordering state across multiple files and it doesn't need all the columns to do that, only the sort columns. By keeping sort columns in their own root the reader could load *just* the sort columns into memory, reconstruct the heap state and merge order first, then defer loading the much wider non-sort columns until it actually needed to emit rows. When you have three sort columns and forty data columns that is a massive difference in memory footprint during the merge.

Null handling required the same deliberateness. Row-oriented systems let you bluff through null semantics because they're often implicit, but Arrow forces you to be honest. If nullability isn't encoded at the schema and writer level, the read path has no reliable way to reconstruct row state. The implementation deliberately stores null fields as integer column positions, not field names:

```java
for (int i = 0; i < fieldSpecs.size(); i++) {
  if (nullFields.contains(fieldSpecs.get(i).getName())) {
    listWriter.writeInt(i);
  }
}
```

That's a real optimization. It shrinks the null metadata per row, avoids repeating strings and keeps the side channel for null reconstruction compact. On the read side integer positions map directly back to column indices without a name lookup.

---

## Death by a thousand casts

Once the structure was right, the next class of problems came from a different place: small assumptions that looked harmless in isolation and turned out to be very much not harmless when multiplied by millions of rows.

I think of these as **per-row taxes**. A tax isn't something expensive once. It's something small enough to ignore once and large enough to hurt when it runs on every value of every column of every row in your dataset.

**String handling.** A line like `fieldValue.toString().getBytes()` looks like plumbing. In a write loop it's doing a redundant cast and an implicit charset lookup via `Charset.defaultCharset()` on every string field of every row. The fix isn't hard, you just have to accept that nothing is free in a hot path.

```java
// before
bytes = fieldValue.toString().getBytes();

// after
bytes = ((String) fieldValue).getBytes(StandardCharsets.UTF_8);
```

**Column metadata lookup.** The original code mapped field names to vectors using a `HashMap<String, ColumnInfo>`. Every row was doing a string hash and map lookup for every column, even though the fields are always processed in the same order. There was never a reason to hash. Precompute the mapping once and consume it positionally:

```java
private static class ColumnInfo {
  final FieldVector _fieldVector;
  final boolean _isSortColumn;
}

// positional access, not hash lookup
ColumnInfo columnInfo = columnInfoMap.get(i);  // ArrayList, not HashMap
FieldVector fieldVector = columnInfo._fieldVector;
```

**Type-specialized encode and decode.** The generic path where you cast everything through a common abstraction and let Java figure it out is clean and slow. Both the reader and writer branch explicitly on concrete Arrow vector types instead:

```java
switch (fieldSpec.getDataType().getStoredType()) {
  case INT: ...
  case LONG: ...
  case STRING: ...
}
```

This isn't verbosity for its own sake. The point is to avoid paying a generic per-row tax in the hottest part of the system. Once the code knows the concrete type it goes straight to the right vector operation without repeated casting through slower abstract paths.

**UnionListWriter reuse.** Multi-value columns are easy places to accidentally add repeated setup overhead. Instead of asking the `ListVector` for a new writer on every row, cache the `UnionListWriter` once per field and reset between batches:

```java
UnionListWriter listWriter =
    listWriters.computeIfAbsent(fieldSpec.getName(),
        k -> ((ListVector) fieldVector).getWriter());
```

**Vector root reuse.** One subtle optimization in the writer: don't treat every flush as a reason to rebuild the whole Arrow world. Once the vector roots have been created, the next batch can start by clearing and reusing them:

```java
if (vectorRoot == null) {
  vectorRoot = VectorSchemaRoot.create(schema, allocator);
} else {
  vectorRoot.clear();
}
```

None of these individually sounds like much. Together they're the difference between a write path that respects Arrow's model and one that sneaks per-row overhead back in through a hundred small decisions.

---

## The off-heap roulette

Arrow's Java library manages all its off-heap memory through a `RootAllocator` where you create one with a byte limit and every `FieldVector`, every `VectorSchemaRoot` and every buffer allocation draws from that pool.

The thing I didn't expect is that the limit you set at construction time is the limit you're stuck with forever. `RootAllocator` cannot be resized at runtime so you can't grow it when load increases or shrink it when you're done with a heavy phase. You pick a number at init time and hope you got it right.

Get it wrong and you hit one of two failure modes. Too low and you get `OutOfMemoryException`s from Arrow's own accounting, not the JVM heap. Too high and you've reserved off-heap memory the JVM thinks is available for other things, which can cause pressure elsewhere.

The answer wasn't one number. It was different numbers for the write path and the read path because those two have fundamentally different allocation profiles. Writers allocate vectors that grow as rows accumulate within a batch. Readers allocate vectors that get filled from disk and then released on batch boundaries. What made it harder is that Arrow doesn't give you great observability into allocator usage at runtime. You can query the allocated bytes on a root allocator but there's no built-in way to track high water marks or allocation rates over time. I ended up adding custom instrumentation to size the allocators correctly for production workloads.

There was even a bug where an all-memory-released assertion was placed after creating a *new* allocator, which is the wrong time to ask that question. Allocator sanity checks have to be tied to the lifecycle that just ended, not the one you just started. And when the process couldn't determine the direct memory limit, the Arrow config fell back to a default off-heap budget of 2 GB. That sounds harmless, but it was feeding the knobs that controlled batching and sorted read window sizes. If the default was wrong for the environment then the entire bounded design could be mis-sized before the first batch even loaded.

The rule that emerged was simple: be conservative on initial sizing, instrument early and treat the allocator limit as a hard constraint that your batch sizes and window sizes need to respect rather than the other way around.

---

## Sorting under a memory ceiling

Sorting is where this project became genuinely difficult. A sorted pipeline has to keep memory bounded *and* present rows in the right global order and those two goals fight each other constantly.

On the writer side I needed a sort strategy that didn't spend unnecessary time touching full rows. The idea was to compute order on the captured sort values and then apply the resulting indices across both vector roots. Two levels of parallelism made this tractable: first the sort indices themselves are computed with `Arrays.parallelSort(...)` and then the actual permutation is applied to both roots concurrently:

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

The key insight is that you compute order once on the lightweight sort-only structure and apply it to both column groups concurrently. Arrow's columnar layout makes in-place permutation efficient because you're operating on column buffers, not row objects.

**Type-specialized comparison** mattered a lot here too. Instead of treating comparison as a generic "let Java figure it out" problem, I wrote explicit comparison logic for `Integer`, `Long`, `Float`, `Double`, `Text` and `String`. The `Text` comparator goes character by character on the raw representation to avoid materializing Java strings at all:

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

If a comparison can be done without allocating strings, without routing through a generic `Comparable` path and without repeated casting at row comparison time, Arrow benefits immediately. In the sorted merge comparison runs on every heap operation, which means it runs on *every row emitted*. A slow comparator doesn't just slow down sorting, it slows down the entire read path.

---

## Bounded memory, unbounded edge cases

Everything I described so far was about discipline on the write path. The read side introduced a completely different category of problem: **state management under bounded memory** where correctness invariants span batch boundaries.

The sorted merge is what drove most of this complexity. I needed to merge multiple sorted Arrow files into one globally ordered stream and the natural algorithm for that is a min-heap where you seed it with the first element from each file, pull the minimum, advance that file's pointer and push the next candidate back into the heap. That works cleanly when everything fits in memory.

The constraint I was working under was that everything did not fit in memory. Each file could only keep a limited window of rows resident. When a window ran out, the next window had to load from disk without disrupting the global ordering the heap was maintaining. That requirement touched nearly everything: batch loading, heap seeding, pointer advancement, cache maintenance and edge cases around rewinds and partial batches.

<iframe src="/widgets/arrow-perf/sorted-merge.html" width="100%" height="590" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

One of the less obvious requirements was **lookahead**. The heap sometimes needed to peek at the *next* row of a file to decide what to push back, which meant sort column windows needed one extra row beyond the current batch boundary:

```java
// regular columns: load exactly what you need
endIndex = Math.min(startIndex + batchSize, totalRows);

// sort columns: one extra row for heap lookahead
if (endIndex < totalSortedRows) {
    endIndex++;
}
```

Miss that by one and the last row of every batch becomes a landmine. Arrow doesn't throw when you read past a loaded window. It returns whatever is in the buffer at that offset, which gives you silently wrong sort order only at batch boundaries and only sometimes.

One of the nastier failures was at exactly that boundary. The logic for fetching the next sort value in a loaded window was doing `(indexInChunk + 1) % rowsPerLoad`. That worked until the current row was the last row of the window. The modulo wrapped to zero and the reader looked at the first row of the window again instead of the real next row, which gave out-of-order results only at specific `rowsPerLoad` values. The fix was to simplify when the next element got pushed into the priority queue so that the update aligned naturally with `next()` and with batch reload boundaries.

Rewinds had a similar vibe. The code path that reset reader state to the beginning looked simple: clear counters, reset pointers. But the sorted path maintained heap state that needed full reinitialization, not partial reset. The local batch pointer and the global row counter served different purposes and had to reset independently. That bug showed up consistently in integration tests but stayed invisible in unit tests because unit tests never exercise the rewind-then-read path under sorted merge conditions.

**Disabling Arrow's null checks** was a deliberate choice on this path. The reader explicitly sets:

```java
System.setProperty("arrow.enable_null_check_for_get", "false");
```

Once I already know how nulls are represented and reconstructed because I built the null field encoding on the write side, I don't need Arrow doing extra guard work on every `get()` in the hot loop. It's not a correctness feature at that point, it's a per-row tax I can opt out of.

---

## The field vector caching problem

This was one of the more instructive interactions between correctness and performance in the whole project.

I discovered that `VectorSchemaRoot.getFieldVectors()` is not free and calling it every row in a tight read loop adds up to measurable overhead. The obvious optimization was to resolve the list once and pass it around:

```java
// before — resolves on every row
FieldVector fv = vectorSchemaRoot.getFieldVectors().get(i);

// after — cached list resolved once per batch load
FieldVector fv = cachedFieldVectors.get(i);
```

This optimization is correct. It is also *only* correct if you understand one thing: when a batch reloads from disk, you get a new `VectorSchemaRoot` with new `FieldVector` references. The old cached list points at the previous batch's vectors. Update the root without updating the cache and you silently read from the wrong batch.

<iframe src="/widgets/arrow-perf/field-vector-cache.html" width="100%" height="560" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

```java
if (loadedBatchChanged) {
  dataFieldVectors = dataVectorSchemaRoot.getFieldVectors();
  sortFieldVectors = sortVectorSchemaRoot != null
      ? sortVectorSchemaRoot.getFieldVectors() : null;
}
```

This is a very Arrow-shaped failure. The optimization is valid but the assumption that cached references outlive batch boundaries is not. Once I treated field vector cache as batch-scoped instead of eternal, the entire reader stabilized.

---

## The string decoding trap

I found out the hard way that Arrow's `VarCharVector.getObject()` returns an Arrow `Text` object, not a Java `String`. Calling `.toString()` on a `Text` looks natural but it's doing more work than the name suggests because internally Arrow constructs the `Text` representation and then serializes it back through `new String(bytes)` with extra indirection along the way.

On dense string columns at high throughput, this shows up in flame graphs. The bypass is to skip the intermediate representation entirely:

```java
// before — indirect path through Text representation
String result = ((VarCharVector) fieldVector).getObject(rowId).toString();

// after — directly from the underlying byte array
String result = new String(
    ((VarCharVector) fieldVector).getObject(rowId).getBytes());
```

There was a similar issue in row object allocation. The read loop was creating a new row object on every `next()` call, layering JVM heap allocation and GC pressure on top of what is supposed to be an off-heap zero-copy read. The safer pattern is to reuse a single object:

```java
private GenericRow convertToGenericRow(..., @Nullable GenericRow reuse) {
  GenericRow genericRow = reuse != null ? reuse : new GenericRow();
  genericRow.clear();
  ...
  return genericRow;
}
```

One allocation per loop instead of one per row. This kind of change doesn't show up as a clever Arrow trick, it shows up as heap usage no longer fighting the off-heap path.

---

## Memory pressure lives off heap

The deeper I got into bounded memory reads, the more I had to reckon with where Arrow's memory actually lives. Most of it is off heap, which means your heap metrics look calm while Arrow's buffer allocations are the real pressure and standard GC intuition only gets you about halfway.

Variable-width columns like strings and byte arrays are the worst offenders. Buffers grow unpredictably and reloads cost more. The difference between tight windowing and sloppy windowing shows up most dramatically there. The hot stack traces kept pointing at `BaseVariableWidthVector.copyFromSafe(...)` while loading the next batch of sorted data. The expensive part wasn't just reading another window, it was materializing that window for variable-width data while earlier buffers were still alive.

I also tried `VectorSchemaRoot.slice()` thinking it would give me a cheap logical view over an already-loaded batch portion, but it turns out that under the hood it goes through `splitAndTransfer` which allocates new vectors. Used carelessly it manufactures more memory pressure and bets that old allocations get released in time.

At one point I still saw Arrow OOMs even after reducing `rowsPerLoad` to 10K and increasing buffer capacity to 8 GB. The problem wasn't just batch size. The deeper issue was resource lifetime and reload behavior.

The rule that emerged: **previous batch resources get explicitly released before loading the next ones.** Exception paths release too, not just the happy path. A bounded memory design is only bounded if old buffers actually die.

---

## You need numbers not feelings

I added [JMH](https://github.com/openjdk/jmh) benchmarks early and kept them with a baseline on the previous format so Arrow wasn't being evaluated against vibes. I paired that with [async-profiler](https://github.com/async-profiler/async-profiler) because benchmarks tell you *that* something is expensive while profiles tell you *where* the cost is actually hiding.

The most important discipline was separating the no-sort path from the sort-heavy path in benchmarks. Sorting dominates everything else and without that separation you can't tell if a regression belongs to Arrow serialization or the ordering layer on top of it.

That combination gave me a much clearer workflow. JMH told me whether a change was real, async-profiler showed me which path was still wasting time. That is how things like repeated vector lookups and `Text.toString()` stopped being guesses and started becoming obvious targets.

The other thing that helped a lot was going straight into Arrow's codebase. A few of the weirdest slowdowns came from operations that looked like simple bookkeeping from the outside. Reading the implementation was often the fastest way to understand what work was actually happening and it also explained why it showed up in the profile.

---

## The dumb mistakes

Some problems in this project were subtle interactions between correctness and performance, but this one was just me being wrong.

**Batch size tracking.** The writer needs to know how big the current batch is so it knows when to flush. An early version summed `fieldVector.getBufferSize()` after every row write. Looks reasonable until you read what `getBufferSize()` actually returns: the vector's *total allocated capacity*, not the bytes this write added. Accumulate that after every row and your count grows O(n²), which means the flush threshold fires way too early and downstream behavior gets shaped by numbers that have nothing to do with reality.

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

Fewer structures, less recomputation, easier reasoning, better threshold behavior all around.

---

## My take

Looking back, every problem in this work had the same shape. Arrow is explicit about everything: what's materialized, what's buffered, what's cached, what becomes invalid when a batch boundary moves, what a size number actually means and where memory lives. The Java APIs don't hide complexity from you the way the Python APIs sometimes do and that's not a criticism of Arrow because the spec genuinely delivers on its promises. It's just that the Java implementation expects you to understand every detail of the contract and it will not warn you when you violate one.

If you're using Arrow in Java for anything past toy examples, expect to spend time in Arrow's source code. The Javadoc tells you what methods exist. The source tells you what they actually cost.
