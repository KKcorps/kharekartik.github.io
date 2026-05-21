---
title: "I Gave RocksDB 1 Billion Primary Keys. Here's What Broke"
summary: "What started breaking once RocksDB crossed from useful embedded store into a scale-sensitive production subsystem."
publishedOn: 2026-05-20
draft: false
tags:
  - database
  - distributed-systems
  - rocksdb
  - software-engineering
featured: false
---

I remember the first RocksDB log line that made the scale problem impossible to ignore.

At smaller scale, RocksDB had mostly done what I needed. It kept large key state out of the JVM heap, gave me local persistence and made point lookups fast enough that I could treat it like a solid embedded store.

Then the workload crossed a line: more logical partitions per server, more column families, more keys, more files, more cleanup work and more state to recover on restart. None of those changes sounded dramatic in isolation. Together, they turned RocksDB's internal housekeeping into production behavior I had to care about directly.

The first obvious symptom was boring. One server was hot, writes were slowing down and reads were starting to look unhealthy. Production systems get overloaded all the time, so the first version of every incident story is usually some useless sentence like "the box is unhappy."

Then I looked at the RocksDB event log and saw that it was flushing only a couple of entries at a time.

That should have been impossible in the practical sense, even if it was perfectly legal in the technical one. RocksDB was doing the thing I wanted it to do, flushing memory to disk, but the flushes were so tiny that they were not relieving pressure. They were creating more files, more metadata and more future work.

That is the shape of this whole story. RocksDB did not suddenly become bad. The workload got large enough that its internal tradeoffs stopped being hidden.

---

## A flush can be correct and still useless

Instead of healthy flushes writing meaningful chunks of data, the event log showed flushes triggered by `Write Buffer Manager` that wrote only a handful of entries.

This is the sanitized shape of the log that made me stop treating this as a generic slow node:

```text
EVENT_LOG_v1 {
  "event": "flush_started",
  "num_memtables": 1,
  "num_entries": 3,
  "total_data_size": 114,
  "memory_usage": 16778104,
  "flush_reason": "Write Buffer Manager"
}
```

That is the kind of log line that looks small until it explains the whole incident.

In the healthy case, a column family fills its local write buffer and flushes because it is full. That produces an SST file that represents real progress. The engine drains useful memory, writes a sensible file and moves on.

The healthy comparison was not subtle:

```text
EVENT_LOG_v1 {
  "event": "flush_started",
  "num_memtables": 1,
  "num_entries": 1732966,
  "total_data_size": 65852708,
  "memory_usage": 104598264,
  "flush_reason": "Write Buffer Full"
}
```

That contrast changed the investigation. I was no longer looking at "flushes are happening." I was looking at the difference between flushing three entries because a global manager was under pressure and flushing more than a million entries because one column family had actually filled its write buffer.

In the unhealthy case, the shared DB write buffer budget gets hit first and RocksDB starts flushing because of global pressure. With enough column families, that can make it choose memtables that are technically flushable but practically useless to flush.

The engine is doing work, but the work is pointed at the wrong thing.

```mermaid
flowchart TB
  A[Many logical partitions on one server] --> B[Many RocksDB column families]
  B --> C[Global write buffer limit is hit first]
  C --> D[Write Buffer Manager starts choosing flushes]
  D --> E[Tiny SST files]
  E --> F[File count rises]
  F --> G[Reads, cache and compactions get worse]
  G --> C
```

<iframe src="/widgets/me-vs-rocksdb-in-production/flush-pressure-loop.html" width="100%" height="590" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

That loop is the dangerous part. Tiny flushes become a file count problem and file count problems never stay local.

Once RocksDB starts generating a large number of small SST files, reads have more files to search, filters and indexes multiply, compactions get heavier, cache composition changes and tail latency starts drifting. Background maintenance begins competing harder with foreground work, which makes the next round of maintenance more expensive.

In one of the more memorable incidents I worked through, a sick server had an absurdly higher SST count than a healthy peer. That single difference explained a lot of behavior that had looked mysterious from the outside. The server was not cursed, it was carrying around a fragmented, metadata heavy view of the world.

That was the moment file count stopped being trivia for me and became a direct signal for whether RocksDB was still in a healthy physical shape.

## Averages hid the worst partition

The next scale problem was skew.

It is easy to miss because the cluster level graph can still look reasonable while one logical partition is quietly becoming a different storage problem from all its peers. The average says the system is fine. The outlier is where the incident lives.

I saw cases where one partition had more than 130 files sitting at L6 while other partitions looked normal. The expected number for that shape was closer to four or five files, and one column family had crossed 900 SSTs in total. That meant more metadata, more filter and index footprint, worse cache pressure, more compaction backlog and uglier long tail reads for that one slice of the workload.

There was an even louder version of the same lesson in another comparison, where a healthy peer had 49 SST files and the unhealthy node had 571,850. That number is absurd enough that it almost stops looking real, but it was exactly why average cluster graphs were useless for this failure mode.

This was not just "more data." It was a deeper LSM shape, with more files to search and more background work waiting to happen.

The fix path changed once I saw the skew clearly. Bigger cache might help, but it was not the whole answer. I had to care about `max_open_files`, background thread count, compaction thresholds, target file sizes, level count and whether the data distribution itself was making one partition carry a completely different physical layout.

That is the part averages hide. RocksDB performance is often dictated by the worst shaped partition, not the median one.

<iframe src="/widgets/me-vs-rocksdb-in-production/lsm-skew-map.html" width="100%" height="590" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

## Capacity math was hiding in plain sight

The setup behind the tiny flush pattern was simple in retrospect.

The server had many logical partitions. Each partition mapped to a RocksDB column family. Each column family had a local write buffer budget. The DB also had a shared global write buffer budget.

As long as flushes happened because a column family hit its own local threshold, things were mostly sane. Once the shared global budget was hit, RocksDB started flushing because of `Write Buffer Manager` instead.

That led to the rule of thumb I now reach for whenever this shape shows up:

```text
number_of_partitions * partition_buffer_size ~= db_buffer_size
```

The equation is not magic, but it is useful because it forces the uncomfortable question: is the global write buffer budget compatible with the number of column families I am asking RocksDB to manage?

The numbers from the incident made the mismatch hard to ignore:

```text
global DB write buffer limit:       5.37 GiB
sum of column family settings:      >113 GiB
actual RocksDB memory observed:     ~18 GiB
actual/global ratio:                ~334%
estimated total memory demand:      ~45 GiB on a 32 GiB node
active column families observed:    74 to 107
```

That was the proof that the JVM graphs were not lying, they were just answering the wrong question. The dangerous memory was in the embedded native engine, table readers, caches and memtables, not only in Java heap.

The same lesson shows up in more dramatic form with memory overcommit. If thousands of partitions each imply a memtable budget, the total demand can exceed server memory before the table ever takes real traffic. That is not a runtime mystery. It is arithmetic that should have happened at admission time.

```text
required_memory = partitions * memtable_budget * safety_factor

if required_memory > server_budget:
  reject("RocksDB memtable budget does not fit on this server")
```

The best version of this incident is not a page. It is a failed config update with a structured error that names the shortfall and the knob that created it.

That was one of the places where my thinking moved from tuning to control loops. A lot of RocksDB pain was not unknowable. The system already had the inputs. The missing part was code that made the decision before a human had to stare at a dashboard.

## The cache lied in three different ways

After flushes, cache was the next thing that taught me not to trust the obvious story.

I used to carry a simple assumption: if a system is slow because it is missing cache, the fix is to make the cache bigger.

With RocksDB, that assumption is only useful after you prove which cache problem you have.

One incident started as restart slowness. A server was taking far too long to come back even after reducing the number of active tables. Flamegraphs showed RocksDB `get()` dominating the profile. I saw a lot of decompression work. We disabled compression and still saw too much random file access.

That forced the obvious question: why is RocksDB going to files so often if we gave it a large cache?

The answer was painful because the effective cache was tiny.

The cluster config said the block cache was large. The RocksDB stats dump showed only a few megabytes of capacity:

```text
Block cache LRUCache ... capacity: 8.00 MB
```

Once I saw that line, the incident changed category. This was no longer a tuning problem because it was an integration bug. The block based table format options were not being propagated correctly into the effective column family options, so the config everyone trusted was not the config RocksDB was actually running with.

That changed how I debug storage issues. If a RocksDB knob matters, I want to see it reflected in the options dump, the stats log, the effective cache capacity and the bloom filter counters. Otherwise it does not exist, no matter what the control plane says.

The second cache failure was subtler. The cache setting was real, but the useful cache was not. Reads were still expensive because filter and index blocks were taking most of the space, leaving data blocks unable to stay hot.

The cache evidence looked like this:

```text
Bloom/filter blocks: 88.68% of cache
Data blocks:         0.003% of cache
CPU:                 ~20% -> 80-100%
```

A healthier sample had a completely different shape:

```text
DataBlock:   619.58 MB, 60.5%
FilterBlock: 183.93 MB, 17.9%
IndexBlock:  184.59 MB, 18.0%
```

| Cache resident | What it helps | How it can hurt |
|---|---|---|
| Data blocks | Point lookups and repeated reads | Starves when metadata dominates the cache. |
| Filter blocks | Avoiding files that cannot contain a key | Grows with SST file count and can crowd out data. |
| Index blocks | Finding data blocks inside files | Also grows with file count and can dominate under fragmentation. |

<iframe src="/widgets/me-vs-rocksdb-in-production/cache-composition.html" width="100%" height="610" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

That made point lookups more expensive than I had imagined. A cache miss was not just one more disk read. It could be disk read, decompression, block level index reconstruction and immediate eviction because the cache was full of metadata.

Native profiling around `BlockPrefixIndex` made this concrete. Once I saw CPU burning inside block level index creation, I understood that "cache miss" was a much larger sentence than I had been saying out loud.

The third cache failure was bloom filters showing up on both sides of the ledger.

In some incidents, bloom filters were not being used or not being honored the way I expected. That meant point lookups paid too much file level search cost, which made the fix matter materially.

In other incidents, bloom filters were present and working but had become part of the problem. Bloom filters live per SST file. If file count explodes, filter count and filter footprint explode with it. The same mechanism that should accelerate lookups can help crowd out the data blocks that make those lookups cheap.

That is why "increase block cache" and "enable bloom filters" are not wrong, but they are incomplete. The real questions are whether the cache exists, what lives inside it, whether filters are actually used and whether the dominant pain is still foreground reads at all.

Sometimes the real bottleneck had already moved to compaction, cleanup or pending background work. At that point, a bigger cache can help locally while failing to move the system.

## The hot path was not always the foreground path

Some of the later incidents corrected my instinct in a different way.

I would look at high CPU and start by asking whether reads were too expensive or whether `get()` and `put()` were doing too much work. That was often the right first question, but it was not always where the answer lived.

There were cases where increasing cache did not move CPU enough, with profiling also failing to support a clean foreground read story. The system was sick because background compaction, tombstones and cleanup debt had become the dominant work.

One compaction curve captured the shape better than any CPU graph:

```text
pending_compaction_bytes = 2.7 GiB
pending_compaction_bytes = 7.6 GiB
pending_compaction_bytes = 14.3 GiB
pending_compaction_bytes = 20.2 GiB
```

That climb happened over only a few minutes. There was no useful Java heap OOM trail, no clean last gasp in the JVM and no comforting heap graph that explained the node pressure. RocksDB was building up native storage debt faster than the background workers could burn it down.

That shifted the tuning direction away from only chasing cache hit rate. I had to make the LSM shape more stable: larger write buffers where safe, more levels when the tree was too shallow, higher L0 thresholds where appropriate, larger target file sizes and fewer paths that created tiny files or tombstone heavy cleanup work.

The uncomfortable lesson was that RocksDB can make the foreground path look guilty while the real bill is being collected by background maintenance.

## Cleanup was wearing a fake mustache

The most expensive mistake I made around cleanup was treating it like housekeeping.

I assumed retention, shard deletion, TTL removal and stale state cleanup lived in the background. Important, yes, but still secondary to reads and writes.

That assumption did not survive contact with real production workloads.

One of the first incidents that forced this on me was a periodic CPU spike tied to retention activity. At first, it looked like a mystery. CPU would spike on a cadence, writes would feel worse and progress would stall in places where it should not stall.

Then we looked at thread activity and the answer stopped being mysterious. State transition threads were burning CPU while removing old shards.

That sounds harmless until you understand what shard removal meant. It did not just mark metadata and move on. It iterated valid records in the shard, reconstructed each key, called RocksDB `get()`, checked whether the mapping still pointed at the shard being removed, possibly called RocksDB `delete()` and repeated that path millions of times.

That is not cleanup in the colloquial sense. That is a storage workload running on a critical control plane thread.

The metric only version of the proof was boring in the best possible way:

```text
delete heavy operation family A: 569394 keys
delete heavy operation family B: 19635 keys
successful async cleanup:       4236 stale keys in 22 ms
post restart stale key warning: 45 keys
```

Those numbers made cleanup visible as a workload, not a moral category. The expensive part was not deciding that old keys should go away. The expensive part was asking RocksDB to delete enough of them while the rest of the system still needed to make progress.

```mermaid
flowchart TB
  A[Shard removal] --> B[State transition thread]
  B --> C[Iterate valid records]
  C --> D[Rebuild keys]
  D --> E[RocksDB get and delete calls]
  E --> F[Locks held longer]
  F --> G[Writes and transitions wait]

  A --> H[Better shape]
  H --> I[Do minimal synchronous state work]
  I --> J[Queue RocksDB cleanup]
  J --> K[Dedicated cleanup manager]
```

<iframe src="/widgets/me-vs-rocksdb-in-production/cleanup-critical-path.html" width="100%" height="610" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

The fix was not "optimize cleanup harder" in the narrow sense. The fix was to move expensive cleanup work off the critical path.

That led to a much better framing. Perform the minimum required state transition work synchronously, defer heavy RocksDB cleanup into a separate manager, free critical threads sooner and let writes continue.

There is still a tradeoff because deferred cleanup can leave garbage state around longer. But that is a better trade than letting old state removal block critical runtime progress.

The deeper lesson was that background work is only harmless if it is actually isolated, paced correctly, unable to starve the critical path and unable to accumulate into a backlog that changes the storage shape.

With RocksDB backed local state, those conditions were not automatic.

## The restart path collected every unpaid bill

I used to think of restarts as reset buttons.

If a RocksDB backed server got into a bad state, a restart felt like a clean escape hatch. Rebuild, warm up and move on. Operationally, that can be true, which is part of why the trap is easy.

Over time, I learned the harsher version: restarts do not erase storage debt, they reveal it.

A live RocksDB server can limp along with too many SST files, poor cache composition, tombstone debt, too many primary keys, snapshots that are not as complete as I think and cleanup that has already fallen behind.

As long as the process stays up, those costs are distributed over time. The server can remain technically alive while carrying a terrible internal shape.

The bill arrives the moment I restart it.

```mermaid
flowchart TB
  A[Live server carries storage debt] --> B[Restart begins]
  B --> C{Snapshot complete?}
  C -->|yes| D[Load snapshot]
  C -->|no| E[Rebuild state from persisted data]
  D --> F[Open files and warm metadata]
  E --> G[Recreate primary key state]
  G --> H[Long recovery window]
  F --> I[Server returns]
  H --> I
```

<iframe src="/widgets/me-vs-rocksdb-in-production/restart-debt.html" width="100%" height="600" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

Primary key count stopped being a side metric for me and became a capacity metric. It predicted restart time, snapshot usefulness, cleanup cost, compaction burden and memory pressure.

That lesson hit especially hard when restart cost was much more tightly coupled to total key state and key size than to the raw data bytes users usually think about.

The proof was not subtle here either:

```text
dataset family size:       ~3B keys
time to come online:       ~30h
major CPU time:            RocksDB
effective block cache:     8 MiB instead of intended 1 GiB

different startup case:
keys per node:             ~310M
startup before tuning:     >3h
startup after tuning:      <1h
```

That changed how I looked at readiness timeouts. Increasing patience around startup can be operationally necessary, but it does not change the fact that recovery has become a data structure problem.

Snapshots changed category too because they were not just a performance optimization. They were part of the recovery contract. When snapshots were complete and trustworthy, restarts could be manageable. When snapshots were missing data, stale, skipped by fallback paths or built with regressions, restart quietly turned into rebuild from first principles.

The other sharp edge here was newer RocksDB compaction behavior. RocksDB's `level_compaction_dynamic_level_bytes` option is the recommended default starting in 8.4 and it changes how level targets are computed. Instead of trying to keep every level populated in the old fixed ladder shape, RocksDB can keep lower levels effectively empty and push data straight toward the first level with a valid target, which often means the bottom level.

That is a good default for many workloads because it controls space amplification, but it surprised me at this scale. After restart, I could see files sitting at L6 and not getting compacted into the shape I expected. The database was not broken, it was following the newer leveled compaction model while my operational expectation still assumed the older layout.

The latency symptom looked like a read problem, but the fix was not another cache tweak. The only practical way out was to raise `max_open_files` enough that RocksDB could keep the large working set of SSTs open instead of constantly paying file open and table cache churn. That made `max_open_files` stop feeling like a boring resource limit and start feeling like part of the recovery budget.

The phrase I use in my head now is the primary key wall. It is not one clean threshold where everything instantly fails. It is the point after which every operational activity gets more expensive: cleanup touches more state, compaction has more to reorganize, snapshots become more critical, restart becomes more punishing and memory budgets get tighter.

You can operate past that point for a while. The danger is that the system remains serviceable just long enough for everyone to normalize the growing cost.

Then one day a restart or rebuild path needs to succeed inside a real operational window and all the hidden debt is due.

## The right answer started looking like a controller

After enough of these incidents, I became less interested in one off tuning advice.

The pattern was too repeatable because every incident eventually collapsed into someone changing one number: `db_write_buffer_size`, `max_open_files`, `max_background_jobs`, `level0_file_num_compaction_trigger`, cache size or some related knob.

The frustrating part was that the system often had enough signal before the page. L0 file count was rising, compaction pending bytes were visible, flush reasons were in logs, effective cache capacity was dumpable, primary key count was measurable and snapshot coverage could be checked.

The missing piece was a deterministic loop.

I do not mean asking a model what `max_background_jobs` should be. A stateful store taking live writes does not need a nondeterministic model in the decision path. Same inputs should produce the same output, with a rollback story and an audit trail.

The controller shape I trust is boring:

| Primitive | Why it matters |
|---|---|
| Admission math | Reject impossible configs before runtime turns them into incidents. |
| Hysteresis | Require repeated bad samples before changing a live database knob. |
| Cooldown | Let RocksDB settle before acting on the next metric sample. |
| Kill switch | Give on call a boring way to stop automation without a redeploy. |
| Action log | Record previous value, next value and reason before every mutation. |

LLMs can still help around that loop. They can draft controller code, summarize prior incidents and write human readable explanations for why a controller acted.

But the loop itself needs deterministic code because the thing being tuned is holding live state.

That is the cleanest way I can state the lesson: deterministic in the loop, language at the edges.

## Native crashes were a different warning

The later class of problems did not look like tuning at all.

I started seeing shutdown and safe close issues where the process could hit native `SIGSEGV` paths around RocksDB lifecycle handling. That is a different category of pain from slow reads or compaction debt. It is what happens when an embedded native engine lives inside a larger managed process and the ownership rules are not perfectly boring.

The details varied, but the shape was familiar: handles, iterators, shared native resources and async work all needed to agree on who was allowed to close each resource and at what point. If that contract was wrong, the failure mode was not a nice Java exception or a slow graph. It was the process falling over in native code.

I would not make this the center of the story, because most of my RocksDB pain was still scale and performance. But native lifecycle risk belongs in the accounting. It is one more way RocksDB stops being just a storage library and becomes an operational surface.

## The abstraction boundary had collapsed

The hardest question after all this was not which RocksDB knob to tune next.

It was whether we should still be paying this complexity tax at all.

That is not the same as saying RocksDB is bad. RocksDB solved real problems by moving large state out of the JVM heap, enabling high cardinality local state workloads and giving us an embedded store with serious write throughput.

But it also made more of the system's behavior legible in terms of storage engine internals. Flush policy, file count, cache composition, bloom filter behavior, cleanup scheduling, compaction debt, snapshot correctness, restart cost and native memory budgeting all became normal engineering vocabulary.

Any one of those is survivable. The question is what it means when they become the recurring language of your incidents.

At that point, I am not just tuning a component anymore. I am carrying an engine shaped tax through every operational discussion.

The right answer is not always to replace RocksDB. In many systems, the right path is to fix integration bugs, move expensive work off critical paths, improve snapshot discipline, budget memory honestly and own the engine properly.

But I do think teams should ask the question directly. What exact requirement forces this embedded LSM engine to remain here? Which incidents would disappear if the state model were simpler? Which incidents would remain no matter what storage engine we used? Are we still getting enough value to justify the operational ownership cost?

Those questions are about fit, not brand.

My honest answer is not that RocksDB was the wrong choice. My honest answer is that RocksDB kept solving real problems while making the cost of owning it visible.

Once that happens, the mature question is not how to tune it more. It is whether this is still the layer we want to become experts in.

A boring footnote I keep next to all of this: memory budgeting has to be done for the whole process, not one knob at a time. JVM heap, block cache, write buffers and native overhead all spend from the same envelope, even if every config page pretends they are separate worlds.
