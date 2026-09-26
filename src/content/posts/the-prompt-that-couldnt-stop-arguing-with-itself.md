---
title: "The Prompt That Couldn't Stop Arguing With Itself"
summary: "What I learned after months of building an LLM-powered performance advisor and discovering that half the failures were my fault, not the model's."
publishedOn: 2026-06-11
draft: true
tags:
  - software-engineering
  - ai
  - llm
  - build-in-public
featured: false
---

I was building an LLM-powered performance advisor, a system that takes a slow query, its execution plan and runtime telemetry and produces a ranked list of actionable recommendations. Structural changes, query rewrites, configuration fixes, that kind of thing. The idea felt clean and the model was clearly capable of the reasoning. What I didn't appreciate was how much of the actual challenge would have nothing to do with the model.

Eval work does that to you. You go in thinking the hard part is getting the model to reason correctly, and you come out realizing the hard part is figuring out whether you're measuring the right thing, sending the right inputs and asking the model to follow rules that don't secretly contradict each other.

## The Rule-Writing Spiral

My first instinct, shared I suspect by most teams building LLM advisors, was to write rules. Detailed, numbered rules. By the time the system was working the prompt was several hundred lines long with dozens of mandatory checks. It felt rigorous because it was explicit. There was a rule for every failure mode I'd seen and a check to enforce every invariant I cared about.

When I ran it against real customer cases that hadn't been used during prompt development, coverage was poor.

The deeper problem took longer to see: **the taxonomy of recommendation types was doing double duty as both generator and validator**. The model could only produce recommendations whose type appeared in my predefined list. The eval judged the model against that same list. If a customer's actual problem belonged to a category I hadn't named, there was no expressible recommendation type, no way to pass the case and no signal in the metrics that I'd missed an entire class of issue. The system could never enumerate its way to coverage. Every new customer incident would require a new rule, and the next one after that would require another, and the prompt would keep growing while still failing the cases no one had seen before.

## The Most Sobering Number

Once I had a proper eval suite and a deterministic scorer computing true positives, false positives and false negatives against expected recommendation types, I ran an actual baseline comparison: an older prompt version versus the latest, on the cases both runs had in common.

The result was a dead heat. Identical average score. Zero net improvement.

Months of prompt work, new rules, tightened gates, refined examples and new guides, had moved exactly zero cases from failure to success. It had only changed *which* cases failed.

A regression is easier to sit with than this. A regression at least points somewhere. A dead heat tells you the approach is structurally wrong, which is harder to hear and harder to act on.

## Half the Failures Were Mine

Once I started digging into the individual failures, I found that roughly half of them weren't model failures at all. They were dataset bugs.

One case expected a particular recommendation type, but the query had no features that would make that recommendation valid. It was a point lookup with zero documents scanned, fully pruned, already fast. The model correctly produced nothing. The dataset's own root cause field described a refusal as the right answer. I had written the gold label wrong.

Another case expected one recommendation type and got a different type that described the exact same physical change. Same fix, different name. I'd penalized the model for not matching my vocabulary when my vocabulary was inconsistent.

Several cases were built to exercise a class of recommendations that require the query to actually run. When I ran them against real infrastructure, all of them hit a hard resource limit and produced no output. The root cause descriptions in the dataset talked about successful but slow executions that never actually happened. Because the prompt explicitly forbids structural recommendations on failed runs, the expected answers were unreachable by design. I had written gold labels for an execution that didn't occur.

The lesson is uncomfortable: your eval dataset encodes your assumptions, and your assumptions can be wrong. Strict label matching penalizes the model for using synonyms and rewards it for matching your vocabulary even when the vocabulary is inconsistent with itself.

## The Model Argued With a Wrong Rule

One of the most useful things I did was add a thinking budget to eval runs so I could read the model's internal reasoning alongside its final output. This turned out to be essential for debugging.

I had a rule that restricted a particular optimization to a specific query shape. The restriction was intended to prevent over prescription, but it turned out to be factually incorrect because the optimization was valid for a broader class of queries than the rule acknowledged. The model, presented with a query that didn't match the restriction but clearly qualified for the optimization, produced the recommendation anyway and explained itself in its thinking:

> "The stated restriction doesn't apply here. The optimization works for this query shape too, per the underlying semantics."

The model was right. I verified it against source code. Once I corrected the rule, the model stopped fighting it.

A wrong rule doesn't fail silently. The model argues with it in its own reasoning, finds the loophole, and proceeds. You need visibility into that reasoning to catch it, because the output alone just looks like a spurious recommendation and the thinking is where the real diagnosis lives.

## Silent Failures, Contradictory Rules and a Metric That Wasn't in the Payload

The problems I've described so far were at least visible in the eval output. What bothered me more was the category of failures that left no clear signal at all.

The prompt's central gating mechanic said that a stage was bottleneck-relevant only if its execution time exceeded a threshold percentage of the total broker-measured query time. The broker-measured query time was never in the payload. It was collected by the data layer and just not forwarded to the model. The model silently substituted a proxy metric, close but not the same, and on failed or partial runs the proxy was missing entirely. The prompt was asking the model to compute a threshold against a field it couldn't read. This discovered during a basic audit: list every field in the collected telemetry and check whether the prompt actually references each one. The gap was larger than I expected.

There were also rich per stage diagnostic fields in the telemetry, self time versus cumulative time per operator, GC pressure per stage, actual group counts at aggregation stages, explicit table attribution on leaf nodes, that weren't mentioned anywhere in the prompt. The model was doing cardinality guesswork for certain sizing recommendations when the exact answer was sitting in the payload. It was working through several paragraphs of attribution heuristics when a direct table name field was right there.

On top of the missing signal, I had two rules that said opposite things. One said to always flag a particular pattern regardless of how fast the query was running. The other said that if the query is already fast and fully pruned, empty recommendations is the correct output. On a query running in single-digit milliseconds, the model's thinking said:

> "Even though the query is fast, this is a structural optimization issue that should be flagged. Per the rules, I should recommend the fix regardless of current performance."

It chose one rule over the other, which was a reasonable thing to do with no tie-breaker. The output looked like a false positive. The actual problem was that I had written two rules pointing in opposite directions and given the model nothing to resolve the conflict with.

There was a third version of this: the prompt described specific physical operator names that the model should look for in the execution plan as evidence of index usage. The actual plan being sent was a logical plan produced at the query broker. Physical operators are computed per shard at execution time and cannot appear in a broker-side logical plan by construction. The model was told to look for something that structurally couldn't be there. One missing option when issuing the plan query was the entire root cause. Without it, the system returns a logical plan. With it, the system returns per shard physical plans showing exactly which indexes fired. One parameter. The prompt had been describing a different mode for the entire development cycle.

## The Findings That Were Not Problems

I had a rule that said a finding's description must describe a problem. The intent was to keep the model from filling its output with observations about things working correctly. That seems reasonable until you realize that sometimes an observation about something working correctly is the most important thing to say.

I had a finding type for recording that a particular optimization was already active and doing its job. A benign observation, not a problem. Under the "findings must describe a problem" rule, the model's thinking on an already optimal query said:

> "This finding describes a benefit rather than a problem, which violates the rule that findings must identify issues... I could frame it as 'no additional optimization needed' to satisfy the rule."

The model was contemplating disguising an observation as a problem because I had told it that's what findings are. On another case it went the other way:

> "Since this is more of an observation than something that needs fixing, I'll drop it."

It then dropped the most important signal for a correct refusal: the evidence that the existing optimization was already doing its job. Without that evidence, the model had nothing to anchor an empty recommendation list to, so it reached for a structural recommendation instead to justify having output at all.

The related problem was that the analysis path I was working in had no endorsed way to say nothing. A different path had a rule that said if there are no high or medium severity issues, return empty recommendation arrays. This path didn't. The "already optimal" outcome wasn't in its valid outputs table. A model that correctly concluded the query was already fast had no permission to express that conclusion, so it reached for something to recommend anyway.

## Adding Rules Doesn't Fix Over Prescription

At the peak of the over prescription problem, the prompt had over a dozen rules, nine negative examples and multiple mandatory checks all targeting the same failure mode: the model recommending a heavy, expensive structural change when the query didn't warrant it. After adding all of those, a rerun on previously-failed cases showed:

> "The over prescription did not go away. The model just found a fresh rationalization to emit the same heavy recommendations."

One case: the structural recommendation was justified by a metric the model inferred from indirect evidence because the direct evidence couldn't appear in the plan type being sent, the same plan mode problem from earlier causing a downstream rationalization. Another case: justified by "as the customer's data volume grows," a hypothetical future scenario that had nothing to do with the current query. Another: justified as a "medium-priority recommendation for high-QPS environments" despite the model having already concluded the current query was fast.

What finally worked was **two deletions**. The "When to Use" section for that recommendation type had two phrases that made it salient in the model's priors. Removing them proved more effective than ten gates added on top. The model wasn't looking for loopholes. It was starting from permissive language and working forward to justify a recommendation that the language had made seem appropriate. Remove the permission and the rationalizations don't form.

## Format Requirements Are Semantic Requirements

Without explicit instruction, recommendation descriptions were paragraphs. One description before adding brevity rules: 572 characters. After: 194. The tradeoffs field: 422 characters down to 113.

I added a rule: descriptions must be one sentence, aim for 35 words or fewer, the tradeoffs field should be null unless there's a real caveat worth mentioning. I added negative examples. I added a mandatory check.

Then I rewrote the prompts in another iteration and accidentally dropped the brevity rules. They were in a different section from what I was editing. Outputs became verbose again. I didn't notice until a brevity metric in the eval surfaced the regression.

The lesson isn't "add brevity rules." It's that format requirements are semantic requirements and they degrade invisibly across prompt iterations. If you don't measure them, they'll quietly disappear the next time someone touches the sections around them.

## Teaching a Methodology Instead of a Pattern List

After enough failed attempts to cover the next uncovered case by adding a rule for it, I had to acknowledge what the dead heat result had already suggested: the approach was structurally wrong. Adding rules only perpetuates the ceiling. The model finds what a rule names. Every new customer incident requires a new rule. The prompt grows to a thousand lines and still fails the case no one has seen before.

The shift: instead of teaching the model a list of patterns to match, teach it **a first principles analysis methodology**. Reconstruct the user's intent. Estimate the minimum physical work required to satisfy that intent given the data. Read what work was actually done. Every material gap between actual and minimum is a finding, classified by where in the execution lifecycle the waste occurs.

The existing rules don't disappear. They become validity gates rather than generators, and they still kill false positives: wrong index type, semantics-changing rewrite, duplicate recommendation. But they no longer need to be the source of findings, which means they no longer need to enumerate every possible category of problem. The model can generalize to cases no one has seen yet because it's reasoning from first principles instead of matching named patterns.

The coverage ceiling was architectural. So was the fix.

## What I'd Do Differently From the Start

**Audit the payload before writing rules.** List every field in the input and check whether the prompt actually references each one. The primary gating metric wasn't in the payload. Physical operator names were in the prompt but couldn't appear in the plan type being sent. Neither of these required a complex fix because they were discovery failures, not engineering failures. I should have done this first.

**Write the eval dataset with assertions, not labels.** Distinguish "this fix is correct" from "this fix must use exactly this label." Strict label matching is appropriate for validating your taxonomy but punishing for validating reasoning quality.

**Add thinking budget to eval runs from day one.** You cannot debug prompt logic from outputs alone. The thinking shows which rule the model decided to follow and why, including when it's overriding a rule because the rule is factually wrong. Without it, a wrong rule looks like a model failure.

**Measure format requirements.** If your output has a description field, measure its length in every eval run. Brevity rules will silently disappear across prompt edits if nothing is watching for them.

**Prefer deletions over additions when fixing over prescription.** Permissive language generates rationalizations. A gate on top of a permission is weaker than removing the permission. If the model is finding creative paths around your rules, ask what's making the behavior attractive in the first place and remove that.

**Take the dead heat seriously.** A before/after comparison showing no net improvement is telling you something structural, not just that a particular fix didn't work. The prompt version that gets you from X to X points at the ceiling, not a bad edit.

The hardest thing about LLM eval work is that failure is quiet. A contradictory rule doesn't throw an exception. A missing field doesn't produce a 404. A wrong label in the dataset scores a zero and looks like a model mistake. A factually incorrect rule gets overridden and shows up as a spurious recommendation. The signal is all there, in the eval metrics, the thinking tokens and the failures you're willing to actually dig into.
