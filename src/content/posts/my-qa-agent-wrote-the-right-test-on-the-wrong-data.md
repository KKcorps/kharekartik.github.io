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

<figure class="wbw-explainer qa-wrong-data" role="img" aria-label="The pruner trusts a stale label while the mask deletes rows behind its back">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 470" font-family="'Chalkboard SE','Comic Sans MS','Segoe Print',cursive">
  <!-- card -->
  <rect x="4" y="4" width="772" height="462" rx="14" fill="var(--wbw-paper)" stroke="var(--wbw-rule)" stroke-width="2"/>
  <!-- speech bubble -->
  <path d="M38,52 q-8,-26 24,-30 q90,-10 180,-2 q34,3 30,30 q4,44 -6,62 q-4,20 -32,20 q-80,8 -164,0 q-30,-2 -30,-26 q-8,-30 -2,-54 Z"
        fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M120,132 q-4,22 -18,34 q26,-8 40,-30" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linejoin="round"/>
  <text x="58" y="62" font-size="17" fill="var(--wbw-ink)" transform="rotate(-0.6 58 62)">Need 50 rows.</text>
  <text x="58" y="86" font-size="17" fill="var(--wbw-ink)" transform="rotate(0.4 58 86)">This box says 55.</text>
  <text x="58" y="110" font-size="17" fill="var(--wbw-ink)" transform="rotate(-0.5 58 110)">One box is plenty!</text>
  <!-- pruner stick figure -->
  <circle cx="120" cy="212" r="17" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6"/>
  <circle cx="114" cy="209" r="1.8" fill="var(--wbw-ink)"/>
  <circle cx="126" cy="209" r="1.8" fill="var(--wbw-ink)"/>
  <path d="M113,220 q7,5 14,0" fill="none" stroke="var(--wbw-ink)" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M120,229 q-2,38 0,62" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M120,246 q-20,10 -30,26" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M120,244 q24,4 40,-6" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M120,291 q-12,26 -20,40" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M120,291 q12,26 18,40" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <!-- clipboard -->
  <rect x="156" y="222" width="30" height="40" rx="3" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.4" transform="rotate(8 171 242)"/>
  <path d="M162,236 l18,2 M161,245 l18,2 M160,254 l14,2" stroke="var(--wbw-ink)" stroke-width="1.6" stroke-linecap="round"/>
  <text x="78" y="360" font-size="16" fill="var(--wbw-ink)" transform="rotate(-1 78 360)">THE PRUNER</text>
  <text x="60" y="381" font-size="12.5" fill="var(--wbw-pencil)">(only ever reads the label)</text>
  <!-- segment box -->
  <path d="M300,168 q80,-5 168,0 q6,90 0,182 q-88,6 -168,0 q-6,-92 0,-182 Z"
        fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="3" stroke-linejoin="round"/>
  <!-- sticky label -->
  <rect x="306" y="138" width="160" height="50" rx="4" fill="var(--wbw-highlight)" stroke="var(--wbw-ink)" stroke-width="2.2" transform="rotate(-2 386 163)"/>
  <text x="322" y="160" font-size="17" fill="var(--wbw-ink)" transform="rotate(-2 322 160)">55 ROWS</text>
  <text x="322" y="180" font-size="11.5" fill="var(--wbw-highlight-ink)" transform="rotate(-2 322 180)">(printed at build time)</text>
  <!-- rows inside: 11 rows, 6 struck -->
  <g stroke="var(--wbw-ink)" stroke-width="2" stroke-linecap="round">
    <path d="M318,196 q66,2 132,0"/>
    <path d="M318,210 q66,-2 132,0"/>
    <path d="M318,224 q66,2 132,0"/>
    <path d="M318,238 q66,-2 132,0"/>
    <path d="M318,252 q66,2 132,0"/>
    <path d="M318,266 q66,-2 132,0"/>
    <path d="M318,280 q66,2 132,0"/>
    <path d="M318,294 q66,-2 132,0"/>
    <path d="M318,308 q66,2 132,0"/>
    <path d="M318,322 q66,-2 132,0"/>
    <path d="M318,336 q66,2 132,0"/>
  </g>
  <g stroke="var(--wbw-red)" stroke-width="2.6" stroke-linecap="round">
    <path d="M312,262 q70,6 144,2"/>
    <path d="M312,276 q70,4 144,2"/>
    <path d="M312,290 q70,6 144,2"/>
    <path d="M312,304 q70,4 144,2"/>
    <path d="M312,318 q70,6 144,2"/>
    <path d="M312,332 q70,4 144,2"/>
  </g>
  <!-- mask note -->
  <path d="M352,398 q4,-24 6,-40" fill="none" stroke="var(--wbw-red)" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M358,358 l-8,10 M358,358 l4,12" stroke="var(--wbw-red)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <text x="252" y="420" font-size="14" fill="var(--wbw-red)" transform="rotate(-1 252 420)">deleted by the mask</text>
  <text x="252" y="440" font-size="12.5" fill="var(--wbw-red)">(invisible from out here)</text>
  <!-- arrow to answer -->
  <path d="M478,220 q60,-12 118,-4" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M596,216 l-14,-7 M596,216 l-12,10" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <!-- answer box -->
  <path d="M606,182 q62,-4 128,0 q5,32 0,64 q-66,5 -128,0 q-5,-32 0,-64 Z"
        fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.8" stroke-linejoin="round"/>
  <text x="626" y="212" font-size="16" fill="var(--wbw-ink)">THE ANSWER</text>
  <text x="640" y="236" font-size="17" fill="var(--wbw-red)" transform="rotate(-1 640 236)">25 rows</text>
  <!-- user stick figure -->
  <circle cx="672" cy="308" r="15" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6"/>
  <circle cx="666" cy="305" r="1.7" fill="var(--wbw-ink)"/>
  <circle cx="678" cy="305" r="1.7" fill="var(--wbw-ink)"/>
  <path d="M666,316 q6,-4 12,0" fill="none" stroke="var(--wbw-ink)" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M672,323 q-2,32 0,52" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M672,338 q-16,8 -24,20 M672,338 q16,8 24,20" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M672,375 q-10,22 -16,34 M672,375 q10,22 16,34" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <text x="548" y="330" font-size="15" fill="var(--wbw-ink)" transform="rotate(-1 548 330)">...I asked</text>
  <text x="548" y="350" font-size="15" fill="var(--wbw-ink)" transform="rotate(-1 548 350)">for 50.</text>
</svg>
<figcaption>The pruner, doing correct arithmetic on a number that stopped being true.</figcaption>
</figure>

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

<figure class="wbw-explainer qa-wrong-data" role="img" aria-label="One fat segment with a shallow mask passes while many small heavily masked segments starve the answer">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 470" font-family="'Chalkboard SE','Comic Sans MS','Segoe Print',cursive">
  <rect x="4" y="4" width="812" height="462" rx="14" fill="var(--wbw-paper)" stroke="var(--wbw-rule)" stroke-width="2"/>
  <!-- divider -->
  <path d="M410,28 q-6,110 4,210 q-6,100 -2,196" fill="none" stroke="var(--wbw-pencil)" stroke-width="2" stroke-dasharray="7 9"/>
  <!-- LEFT: the data my tests got -->
  <text x="60" y="52" font-size="18" fill="var(--wbw-ink)" transform="rotate(-0.8 60 52)">THE DATA MY TESTS GOT</text>
  <path d="M56,84 q140,-6 292,0 q7,105 0,214 q-152,7 -292,0 q-7,-109 0,-214 Z"
        fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="3" stroke-linejoin="round"/>
  <rect x="70" y="66" width="130" height="32" rx="4" fill="var(--wbw-highlight)" stroke="var(--wbw-ink)" stroke-width="2" transform="rotate(-2 135 82)"/>
  <text x="82" y="88" font-size="15.5" fill="var(--wbw-ink)" transform="rotate(-2 82 88)">1,000 ROWS</text>
  <!-- lots of live rows -->
  <g stroke="var(--wbw-ink)" stroke-width="1.9" stroke-linecap="round">
    <path d="M76,120 q116,3 252,0"/><path d="M76,136 q116,-3 252,0"/>
    <path d="M76,152 q116,3 252,0"/><path d="M76,168 q116,-3 252,0"/>
    <path d="M76,184 q116,3 252,0"/><path d="M76,200 q116,-3 252,0"/>
    <path d="M76,216 q116,3 252,0"/><path d="M76,232 q116,-3 252,0"/>
    <path d="M76,248 q116,3 252,0"/>
  </g>
  <!-- one struck stripe -->
  <path d="M76,268 q120,4 252,0" stroke="var(--wbw-ink)" stroke-width="1.9" stroke-linecap="round" fill="none"/>
  <path d="M70,268 q124,7 264,2" stroke="var(--wbw-red)" stroke-width="2.6" stroke-linecap="round" fill="none"/>
  <text x="120" y="292" font-size="13" fill="var(--wbw-red)">100 masked. barely a dent.</text>
  <text x="66" y="342" font-size="15" fill="var(--wbw-ink)">900 still alive.</text>
  <text x="66" y="364" font-size="15" fill="var(--wbw-ink)">A LIMIT of 50 never notices.</text>
  <path d="M62,398 l14,16 l26,-30" fill="none" stroke="var(--wbw-green)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="116" y="416" font-size="16" fill="var(--wbw-green)" transform="rotate(-1 116 416)">test passes. honestly!</text>
  <!-- RIGHT: the data the bug needs -->
  <text x="452" y="52" font-size="18" fill="var(--wbw-ink)" transform="rotate(0.6 452 52)">THE DATA THE BUG NEEDS</text>
  <!-- three small boxes, mostly struck -->
  <g>
    <path d="M446,84 q46,-4 96,0 q5,38 0,80 q-50,5 -96,0 q-5,-42 0,-80 Z" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.8" stroke-linejoin="round"/>
    <g stroke="var(--wbw-ink)" stroke-width="1.8" stroke-linecap="round">
      <path d="M458,104 q34,2 72,0"/><path d="M458,118 q34,-2 72,0"/><path d="M458,132 q34,2 72,0"/><path d="M458,146 q34,-2 72,0"/>
    </g>
    <g stroke="var(--wbw-red)" stroke-width="2.4" stroke-linecap="round">
      <path d="M452,116 q40,5 84,2"/><path d="M452,130 q40,4 84,2"/><path d="M452,144 q40,5 84,2"/>
    </g>
  </g>
  <g>
    <path d="M566,84 q46,-4 96,0 q5,38 0,80 q-50,5 -96,0 q-5,-42 0,-80 Z" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.8" stroke-linejoin="round"/>
    <g stroke="var(--wbw-ink)" stroke-width="1.8" stroke-linecap="round">
      <path d="M578,104 q34,2 72,0"/><path d="M578,118 q34,-2 72,0"/><path d="M578,132 q34,2 72,0"/><path d="M578,146 q34,-2 72,0"/>
    </g>
    <g stroke="var(--wbw-red)" stroke-width="2.4" stroke-linecap="round">
      <path d="M572,116 q40,5 84,2"/><path d="M572,130 q40,4 84,2"/><path d="M572,144 q40,5 84,2"/>
    </g>
  </g>
  <g>
    <path d="M686,84 q46,-4 96,0 q5,38 0,80 q-50,5 -96,0 q-5,-42 0,-80 Z" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.8" stroke-linejoin="round"/>
    <g stroke="var(--wbw-ink)" stroke-width="1.8" stroke-linecap="round">
      <path d="M698,104 q34,2 72,0"/><path d="M698,118 q34,-2 72,0"/><path d="M698,132 q34,2 72,0"/><path d="M698,146 q34,-2 72,0"/>
    </g>
    <g stroke="var(--wbw-red)" stroke-width="2.4" stroke-linecap="round">
      <path d="M692,116 q40,5 84,2"/><path d="M692,130 q40,4 84,2"/><path d="M692,144 q40,5 84,2"/>
    </g>
  </g>
  <text x="452" y="192" font-size="14" fill="var(--wbw-ink)">each label says 55.</text>
  <text x="452" y="212" font-size="14" fill="var(--wbw-red)">each really holds ~25.</text>
  <!-- pruner math -->
  <path d="M452,238 q160,-6 330,0 q6,34 0,70 q-170,6 -330,0 q-6,-36 0,-70 Z"
        fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.4" stroke-linejoin="round"/>
  <text x="470" y="266" font-size="14.5" fill="var(--wbw-ink)">pruner math: "55 &#8805; 50,</text>
  <text x="470" y="288" font-size="14.5" fill="var(--wbw-ink)">keep one box, done"</text>
  <path d="M610,318 q4,20 0,34" fill="none" stroke="var(--wbw-ink)" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M610,352 l-8,-11 M610,352 l9,-10" fill="none" stroke="var(--wbw-ink)" stroke-width="2.4" stroke-linecap="round"/>
  <text x="500" y="388" font-size="17" fill="var(--wbw-red)" transform="rotate(-1 500 388)">25 rows come back.</text>
  <text x="452" y="428" font-size="14.5" fill="var(--wbw-pencil)">same code. same query. this shape</text>
  <text x="452" y="448" font-size="14.5" fill="var(--wbw-pencil)">was written down nowhere.</text>
</svg>
<figcaption>My tests got the left. The bug needs the right.</figcaption>
</figure>

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

<figure class="wbw-explainer qa-wrong-data" role="img" aria-label="The model shines a flashlight on everything the diff touches while the pruner sits in the dark">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 440" font-family="'Chalkboard SE','Comic Sans MS','Segoe Print',cursive">
  <rect x="4" y="4" width="812" height="432" rx="14" fill="var(--wbw-paper)" stroke="var(--wbw-rule)" stroke-width="2"/>
  <!-- the dark region (left) -->
  <path d="M22,24 q120,-8 218,6 q14,90 8,190 q6,110 -6,196 q-110,10 -220,0 q-8,-100 -2,-196 q-6,-100 2,-196 Z"
        fill="var(--wbw-card)" stroke="var(--wbw-pencil)" stroke-width="2" stroke-linejoin="round"/>
  <text x="46" y="58" font-size="15" fill="var(--wbw-pencil)" transform="rotate(-1 46 58)">NOT IN THE DIFF</text>
  <text x="46" y="80" font-size="12.5" fill="var(--wbw-pencil)">(no light reaches here)</text>
  <!-- pruner box in the dark -->
  <path d="M52,150 q66,-5 138,0 q6,52 0,104 q-72,6 -138,0 q-6,-52 0,-104 Z"
        fill="var(--wbw-rule)" stroke="var(--wbw-pencil)" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="102" cy="188" r="3.4" fill="var(--wbw-card)"/>
  <circle cx="134" cy="188" r="3.4" fill="var(--wbw-card)"/>
  <path d="M100,212 q18,6 36,0" fill="none" stroke="var(--wbw-ink)" stroke-width="2.4" stroke-linecap="round"/>
  <text x="64" y="286" font-size="15" fill="var(--wbw-pencil)" transform="rotate(-1 64 286)">THE PRUNER</text>
  <text x="46" y="308" font-size="12.5" fill="var(--wbw-pencil)">still trusting the row counts,</text>
  <text x="46" y="326" font-size="12.5" fill="var(--wbw-pencil)">which just stopped being true</text>
  <!-- the model stick figure -->
  <circle cx="320" cy="176" r="17" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6"/>
  <circle cx="326" cy="172" r="1.8" fill="var(--wbw-ink)"/>
  <circle cx="315" cy="172" r="1.8" fill="var(--wbw-ink)"/>
  <path d="M315,184 q6,4 13,1" fill="none" stroke="var(--wbw-ink)" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M320,193 q-2,40 0,64" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M320,210 q-18,12 -26,26" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M320,208 q26,-4 44,-10" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M320,257 q-12,26 -18,40" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M320,257 q12,26 18,40" fill="none" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linecap="round"/>
  <text x="272" y="330" font-size="15" fill="var(--wbw-ink)" transform="rotate(-1 272 330)">THE MODEL</text>
  <text x="252" y="352" font-size="12.5" fill="var(--wbw-pencil)">(auditing very hard, one way)</text>
  <!-- flashlight -->
  <rect x="362" y="188" width="30" height="14" rx="4" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.4" transform="rotate(-3 377 195)"/>
  <!-- floodlit region -->
  <path d="M436,34 q180,-14 348,8 q16,178 0,368 q-168,16 -348,4 q-14,-188 0,-380 Z" fill="var(--wbw-highlight)" opacity="0.7" stroke="var(--wbw-highlight-ink)" stroke-width="2"/>
  <g stroke="var(--wbw-highlight-ink)" stroke-width="2.4" stroke-linecap="round">
    <path d="M398,182 q22,-16 40,-26"/>
    <path d="M402,192 q24,-4 44,-6"/>
    <path d="M402,202 q24,6 44,12"/>
    <path d="M398,210 q22,18 38,30"/>
  </g>
  <text x="642" y="60" font-size="13.5" fill="var(--wbw-highlight-ink)" transform="rotate(-0.6 642 60)">IN THE DIFF (floodlit)</text>
  <!-- boxes in the light -->
  <g>
    <path d="M470,96 q76,-5 150,0 q5,24 0,48 q-74,5 -150,0 q-5,-24 0,-48 Z" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linejoin="round"/>
    <text x="486" y="126" font-size="14.5" fill="var(--wbw-ink)">the new mask code</text>
    <path d="M636,112 l8,10 l16,-18" fill="none" stroke="var(--wbw-green)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g>
    <path d="M486,168 q76,-4 150,0 q5,24 0,48 q-74,4 -150,0 q-5,-24 0,-48 Z" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linejoin="round"/>
    <text x="510" y="198" font-size="14.5" fill="var(--wbw-ink)">path 1: hooked</text>
    <path d="M652,184 l8,10 l16,-18" fill="none" stroke="var(--wbw-green)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g>
    <path d="M498,240 q76,-4 150,0 q5,24 0,48 q-74,4 -150,0 q-5,-24 0,-48 Z" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linejoin="round"/>
    <text x="522" y="270" font-size="14.5" fill="var(--wbw-ink)">path 2: hooked</text>
    <path d="M664,256 l8,10 l16,-18" fill="none" stroke="var(--wbw-green)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g>
    <path d="M506,312 q80,-4 158,0 q5,24 0,48 q-78,4 -158,0 q-5,-24 0,-48 Z" fill="var(--wbw-card)" stroke="var(--wbw-ink)" stroke-width="2.6" stroke-linejoin="round"/>
    <text x="520" y="336" font-size="13.5" fill="var(--wbw-ink)">join path: found a real</text>
    <text x="520" y="354" font-size="13.5" fill="var(--wbw-ink)">gap! (good work, honestly)</text>
  </g>
  <text x="470" y="408" font-size="14" fill="var(--wbw-pencil)" transform="rotate(-0.5 470 408)">every box in the light got line level scrutiny</text>
</svg>
<figcaption>The flashlight is real work. So is the dark.</figcaption>
</figure>

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
