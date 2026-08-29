---
title: "My QA Agent Wrote the Right Test on the Wrong Data"
summary: "A wrong results bug turned up in a feature my QA agent had already tested four times. I walked through everything those runs left behind to find out whether any of its tests would ever have caught it. The answer got worse at every layer."
seoDescription: "A QA agent planned the right LIMIT test, but the data, answer key and system shape made it unable to catch a real wrong results bug."
publishedOn: 2026-08-29
draft: false
tags:
  - software-engineering
  - build-in-public
  - ai
  - testing
  - verification
featured: false
---

The [first post](/writing/i-am-building-a-qa-agent-because-coding-got-too-fast/) about my QA agent was about teaching it to distrust green checks. This one starts with a bug.

Midway through the summer, a wrong results bug turned up in a feature my agent had tested four times over the preceding weeks. A teammate's test suite caught it in our weekly release certification run, the standing set of scripts the team reruns against a real cluster before anything ships. A query with a LIMIT was returning fewer rows than the data held. No exception, no failed request, no spike on any graph. The answer was just short, the kind of answer someone bases a decision on without ever learning it was wrong.

My agent gates nothing. It is not wired into CI, no teammate depends on it and the test suites it generates are for my own QA work, so the bug was never its miss to own. But it had tested exactly this feature. Every run left its plans, its test data and its recorded results on my laptop. That made the bug a controlled experiment on generated tests. Would any of them ever have caught this?

I spent a day finding out. Walk it with me. The answer got worse at every layer.

## A query comes back short

To see the bug you need three words, all simpler than they sound. A table's data lives in **segments**, immutable files, each holding a slice of rows and a little metadata that records how many. The feature under test adds a **mask**, a way to mark rows as deleted at read time without rewriting those files, so a query on a masked table silently skips the dead rows. And on the **broker**, the node a query lands on first, there is a **pruner**, an old piece of planning code whose whole job is to avoid work. A query asking for 50 rows does not need every segment. The pruner adds up the per segment row counts the cluster already tracks, keeps the smallest set of segments that covers 50 and sends the query only there.

Now run the new feature through that old pruner. The row counts it reads were written when the segments were built, so they still say what they said before the mask existed. The mask is applied later, on the servers, after the pruner has already chosen. So the pruner counts masked rows as available rows. It keeps too small a set of segments. The servers then apply the mask honestly inside that set. The answer comes back short. Rows that should be in it are sitting in segments the pruner threw away.

![The pruner trusts a stale label while the mask deletes rows behind its back](/images/my-qa-agent-wrote-the-right-test-on-the-wrong-data/wbw-pruner-trusts-the-label.svg)

*The pruner, doing correct arithmetic on a number that stopped being true.*

Nothing threw. Every line of the new feature behaved correctly. A component nobody touched, a few layers down, started producing wrong answers.

The bug itself is ordinary database engineering. What makes it worth a post is those four QA runs, because they had every chance to catch it first.

## The first suspect is the test list

My first guess was the comfortable one. The agent never thought to try a LIMIT query, the plan was twenty happy path tests, case closed, better prompts next time.

Choosing tests was the first thing I ever had to fix about this agent, exactly because a model pointed at a diff hands back tests that prove the feature works when used correctly. So a plan here is not free generation. Every test traces to a guarantee that must always hold, results match a reference answer, rows in equal rows out. Every test also names the actor who can create the breaking condition, a user, an operator, a job racing another job. Planning runs one pass per risk category, so the pass that owns operational risk cannot decide restarts are boring. A checker refuses the plan while any required risk area has no test.

The plan from the closest run does not read lazy. It contains this, quoted from the plan file.

```text
For a non-trivial correctness check, also compare a sample of live row IDs:
  SELECT id FROM <masked table> ORDER BY id LIMIT 50
from the broker vs the reference reader's scan of the same snapshot.
Assert the 50 IDs are the same set.
```

Read it again. An ORDER BY with a LIMIT of 50, on a masked table, checked row by row against a reference reader. That is the query that triggers the bug, planned weeks before the bug was found.

The agent planned it. A human approved it. The run executed it and it passed. The human was me. I remember feeling good about that plan. What my approval was worth comes up again later.

## So why did the test pass?

The run's data record answers that. Two entries from it, with only the feature's internal names changed.

```json
"data_file_layout": "1 data file (1000 rows);
                     1 mask deleting positions 0..99"
"data_file_layout": "2 data files (file_a 250, file_b 250);
                     old mask deletes file_a 0..49 (live 450),
                     new mask deletes file_b 0..49 (cumulative live 400)"
```

Run the pruner's arithmetic on that yourself. The query wants 50 rows. The pruner reads a row count of 1,000, keeps that one segment and stops. The mask removes 100 rows on the server. The 900 that remain cover the LIMIT eighteen times over. The row by row comparison agrees with the reference reader and the test passes. Nothing about that pass is fake.

The bug needs the opposite data. Many small segments whose live counts sit near the LIMIT, so the segments the pruner keeps do not hold 50 real rows between them. My test data was a few fat segments with shallow masks. Right query, wrong data.

![One fat segment with a shallow mask passes while many small heavily masked segments starve the answer](/images/my-qa-agent-wrote-the-right-test-on-the-wrong-data/wbw-two-shapes-of-data.svg)

*My tests got the left. The bug needs the right.*

The plan said which query to run and what to compare, nothing more. The shape of data the test needed, the one claim that decided whether it could ever fail, was written down nowhere. So the mismatch was invisible to every reader of the plan, including the one who approved it.

## Was the data the only hole?

The plan's answer key compares the exact rows that came back against the reference reader. On the right data, that comparison catches the bug immediately. Then I opened the recorded result of the test. It ends this way.

```json
"controller_log_evidence": [
  {"note": "controller mask sync DONE for the test table"},
  {"note": "server opened the mask files from object storage"}
],
"witness_verdict": "PASS",
"differential": {
  "reference": "oracle",
  "result": "match",
  "detail": "reference reader 400 == broker 400"
}
```

A count. The plan promised a comparison of which rows. The record holds a comparison of how many, the one query shape the pruner never touches, since counting needs every segment anyway. Nothing in my tooling flagged the downgrade. Even on data built to trigger the bug, this check stays green.

The witness verdict at the top is a separate trap. A witness is a side check my agent attaches to every test. It watches logs and live metrics to prove the new code actually executed, because a test can go green without touching the code it claims to test. This one is accurate. The code ran, the logs show the mask being fetched and applied. For months I had read that verdict as more than it is. It only ever answers a narrower question than a green PASS suggests. The code ran and the answer was wrong at the same time.

## Why did nobody ask about the pruner?

That leaves the risk analysis, the document where the agent reasons about what a change could break before any test is written. Maybe execution was sloppy and the thinking was still sound.

The analysis is genuinely impressive. Its framing question and its verdicts, with only the internal names changed.

```text
For each broker path that serves a query, does the change
invoke mask pruning, or is at least one path left unhooked?

Path 1: regular and split queries: HOOKED
Path 2: regular: HOOKED. split: UNHOOKED, falls back, mask still applied
Path 3: single table: HOOKED. colocated join: a real gap, testable
Path 4: covered by paths 1 and 2
```

Behind each verdict sit file and line citations, traced through the source. The gap on path 3 is real. I have watched human reviews do far less.

The framing question contains the whole miss. It only ever asks whether the new code reaches every path. Nobody asks the dual. Which old code consumes the row counts the mask just made stale? Ask that and the pruner is one grep away, an existing consumer of per segment row counts sitting directly upstream of every LIMIT. Across four runs of analysis, the component that caused the bug is mentioned zero times.

![The model shines a flashlight on everything the diff touches while the pruner sits in the dark](/images/my-qa-agent-wrote-the-right-test-on-the-wrong-data/wbw-flashlight.svg)

*The flashlight is real work. So is the dark.*

The model audited everything the diff touches and nothing the diff makes stale. That is not a bug in my prompts. It is the default direction of a model's attention. The diff is visible, so the diff gets audited. The old code that consumes what the diff changed is invisible, so it gets nothing.

## Was this bug just bad luck?

Whether this bug is a one off or the normal case is a checkable question. I mined our incident channels and oncall threads for every confirmed product bug from the first half of the year, about 170 after deduplication. Each got a tag for how it worked.

It is the normal case. The trigger is state, an overlap or a threshold far more often than a plain wrong line of code. A reload reads a stretch of shared memory just as a background migration unmaps it and the process dies, two operations that are each safe alone. An expiry setting is accepted with a 200 and silently does nothing on one storage engine. A schema cache keyed only by a name drops every incoming row after a schema change, for eight hours, until a restart. A readiness endpoint loops over every segment in the system until the controller times out, fine at ten thousand segments and dead at sixty thousand.

Almost none of these announce themselves. That is the thread connecting them to my pruner. A typical service bug is an event. An exception lands in a tracker, a request fails, a graph spikes, somebody gets paged. Bugs like these produce no event. The query succeeds and the answer is wrong, the config applies and nothing changes, the rows vanish and every dashboard stays green. A database's behavior is the query times the state underneath it, so the same code is right on one data shape and wrong on another. That is how a correct looking test stays green while the bug it was written to catch never fires.

The mining changed how plans get written. Operations get tested in pairs instead of alone, a config test has to check the behavior actually changed rather than trusting the 200 and an error test has to check the message blames the real cause. The mining also produced a second table, about who catches these bugs. I am saving that one for the end.

## The obvious fix is more rules

The morning after the retrospective I turned every layer of the miss into a new check. The feature description gained fields for the old guarantees a change bends. Plans gained a block spelling out the shape of the test data, plus a five field description of which limits each test pushes against. The coverage checker gained a required entry per guarantee. Every hole got its own rule. It all felt like diligence.

By the same evening I was deleting a good part of it. The per guarantee coverage entries went, because they were brittle. Three of the five limit fields went, because the test's own SQL already carried them. The whole data shape block went, because the plan already declares its data as numbers, rows, files, seed. A second copy of the same numbers is just a second thing that can drift.

A rule encodes the answer to the last bug. The next bug arrives with a shape the rule did not enumerate, which is what makes it the next bug. And every rule is a field some future run has to fill, a check some future plan has to satisfy, a line of tooling someone has to read. Patch enough misses this way and you get a heavier framework with the same blind spots. So the test for a fix became simple. Would it have caught a bug I have not seen yet? Everything that survived the deletion passes that test. None of it mentions this bug. The best fix for a bug never mentions the bug.

## What survived the deletion

Every test now names the limit it leans on. The plan already carries its data as numbers, so the checker holds the two against each other and rejects a LIMIT test whose data dwarfs the LIMIT. Nobody has to remember the pruner. The check runs on every future plan.

A test that promises to compare rows can no longer record a count, because the recording step refuses it. A degraded comparison is a loud failure instead of a quiet edit to what the test means.

And the analysis gained one required question. Which old facts does this change bend and who consumed those facts? That is not a pruner rule. Asked of any feature, its answer contains the pruner and its whole family, every old consumer of a number whose meaning just changed.

My approval was the last hole, the question from earlier. The approval screen used to put 30 to 50 tests in front of me and I caught myself scrolling to the bottom and typing yes. A gate like that is decorative. A rule saying review harder would have changed nothing, so the screen changed instead. Every test carries a severity and one sentence naming who feels its failure, the five costliest come first in full detail and the whole thing ends with a single line I have to say yes to.

```text
Approving accepts: 2 areas missing, 3 signals unverified, 4 assumptions
```

I review five tests properly instead of skimming fifty. What my yes covers is written down.

The four layers are one lesson. A test is four claims, the query, the data, the answer key and the shape of the system it runs on. Generation gets you the first claim at best, because the query is the part visible in the diff and the docs. The other three live outside anything the model reads. A test whose other three claims are wrong is not a weaker test. It is a pass that checks nothing.

## Nobody needs a fifth opinion

None of these fixes reaches the deeper problem. The bends question is answered by the same model whose attention runs one way, so a mandatory question is a patch on attention, not a cure for it. The checks catch this bug's family, the mismatches a machine can compute from declared numbers. A bug that needs a question nobody has written down yet walks past all of it. So if careful thinking keeps missing these bugs, what actually catches them? The table I postponed has the answer. Who caught those 170 bugs.

| Found by | Share of the 170 |
| --- | --- |
| Customers in production | ~60% |
| Internal testing | ~19% |
| Dedicated perf and scale tests | ~8% |
| PR review | ~5% |
| POC clusters | ~4% |
| Release certification | ~3% |

Customers first, by a mile, including the worst incidents in the set. A failure that throws gets caught by the first test that touches it. A failure that quietly returns wrong data gets caught by whoever has enough data, enough concurrency and enough time for it to become visible. Now read the table again with that in mind. Catch rate follows runtime. The more data and hours a stage runs, the more it catches, no matter how much thought went into it. The one stage that only reads, PR review, catches one bug in twenty, even though a PR at work already collects three or four AI reviews before a human gets to it. These bugs are not caught by reading. They are caught by running.

The smallest row is the proof. Release certification's 3 percent looks like a rounding error until you check which bugs those were. Some of the worst in the set, including a data wrongness race that fired once in 700 runs. Nothing that runs once catches those odds. A suite that reruns every week eventually catches it for free. It is also the row that caught my pruner bug, through a teammate's suite that compares full results against a reference reader every single week.

My agent sits on the wrong side of that split. Plans, analyses, reviews, all of it is reading. What is scarce is a receipt, runtime evidence that a specific behavior held on a real system, produced by something that keeps running when nobody is watching. A test aimed at a risk that actually ships, whose four claims all hold, whose failure means something and which a human actually vetted, produces one. Everything short of that is one more opinion.

If an AI writes tests for you, the experiment that produced this post is sitting in your backlog too. The next time a real bug lands in something it tested, do not stop at fixing the bug. Pull up the test that should have caught it and check the other three claims, the data underneath it, the answer key it compared against, the system it ran on. The query will be right. It usually is.

So this story does not end solved. The pruner bug is fixed and its family cannot come back, but both things that let it through are still standing. My agent's tests still run once and stop existing when the run ends. The model still looks only where the diff points. The next post attacks the first problem, getting the agent's tests into that weekly suite. It took much more than a commit, because the agent first had to learn to touch the running system instead of reading about it.
