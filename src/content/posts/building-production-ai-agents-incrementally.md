---
title: "Escaping the zero shot build trap"
summary: "In-progress notes from building a JIRA-to-PR agent for Apache Pinot, the over engineering instinct I started with, the signals that told me when to add each layer and the things I'm still figuring out."
publishedOn: 2026-04-16
draft: false
tags:
  - ai
  - llm
  - software-engineering
  - build-in-public
featured: false
---

I'm a few weeks into building an AI agent that takes a [JIRA](https://www.atlassian.com/software/jira) ticket from our [Apache Pinot](https://pinot.apache.org/) repo and tries to turn it into a high grade pull request. It isn't shipped and probably won't be for a while and there are already pieces I know I need to rip out or rebuild. What I do have is a running list of what keeps breaking and a pile of opinions I didn't have when I started. What follows is those opinions in roughly the order each one hit me.

The thing I'm mostly trying to fix here though is my complexity bias. Most of my side projects get stuck in the **zero shot trap**. The name is half a joke lifted from ML where it means handing a model a task with no examples and no feedback and just hoping it lands first try. Designing a side project upfront is the same move on myself. I sit down and try to imagine every possible failure mode and end up with something wired for how cool it looks rather than whether anyone can actually use it to get something done.

Why am I trying to cure this now? Because my wife is the default beta tester for every side project I build and nothing cures over engineering faster than someone who doesn't care about your architecture telling you the thing just doesn't work. That's the load bearing idea for the whole post. Every section below is me relearning it.

Here's the stack the agent has grown into so far in the order each layer was forced on me by a real failure. Each of those triggers is its own story which I'll cover next.


<iframe src="/widgets/building-production-ai-agents-incrementally/agent-growth-timeline.html" width="100%" height="640" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## Start with the smallest thing that runs end to end

The temptation on day zero is to build everything you think you'll eventually need. A planner that decomposes the ticket and an orchestrator routing between your skills and retry logic wrapped around every tool call and an eval harness watching the output all wired up before a single ticket has run through the pipeline. This is the fastest way to waste weeks on problems that never materialize.

Three months ago I'd have started this project by sketching the whole system upfront. A custom agent loop because it's cool. A context manager sitting on top of it because I'd already be thinking about long runs and compaction. A planner module that decomposes the ticket into subtasks before any code run because the tickets are varied enough that a single prompt won't cut it. An eval harness wrapping the whole thing because I'd want to track regressions as I iterate. Probably a ton of scaffolding before a single ticket ran end to end. Most of it would have been solving problems I hadn't actually hit yet and some of it would have been solving problems that never materialize.

What I actually did this time was the absolute minimum the agent needs to complete one real run. [Claude Code](https://www.anthropic.com/claude-code) as the harness, no custom loop. Pull a ticket, edit code, run the [Maven](https://maven.apache.org/) build, run the affected tests, open a PR. That's it. Point it at a real bug and watch it break. Every breakage since has taught me what the next piece of tooling needs to be grounded in a problem that just happened rather than one I imagined. Every time I catch myself reaching for custom infrastructure the question I ask is whether Claude Code already handles that part either via [MCP](https://modelcontextprotocol.io/), [Skills](https://www.anthropic.com/news/skills) or some hook. It usually does and the one or two cases where it doesn't are the only places I've actually had to build anything from scratch.

---

## If the brief is thin, the agent invents the rest

The single biggest lever on output quality in the Pinot agent wasn't the prompt or the tooling, it was the input. Most JIRAs at every tech company are barebones. A two line description and a stack trace if you're lucky filed because a commit needs a ticket number attached not because anyone sat down to write a spec. A TPM driven ticket with clean acceptance criteria is the exception. Hand the raw ticket to the agent and you get confident nonsense e.g. a fix for the symptom the reporter pasted in not the underlying change someone would actually merge.

So before any scoping or coding, the agent's first real job is pulling context from everywhere it isn't in the ticket. The Slack thread where someone actually debugged the issue. The internal Google Doc that spells out the real change. The GitHub comments on the related PR where a reviewer called out the gotcha someone hit last time. The ticket is a pointer to the context not the context itself and the agent is no better than a new engineer handed the same two line description with no backchannel. Spend the tokens on retrieval. A run that starts with the full picture is cheaper than three runs that start with half of it and produce three different wrong answers.

This is the one place I'd push back against the rest of the post's advice about not overinvesting early. Context gathering is where I'd start thick, not thin. Every other layer compounds on top of what the agent understood the task to be, so a weak input poisons everything downstream. Build the dumbest possible tool on day one, but build it on top of a decent context pipeline you can manage. For the Pinot agent that was a single fetch step. Pull the ticket and walk every link in the description and comments (Slack permalinks, internal GDocs, related PRs and referenced incidents) and dump everything into context raw. No ranking, no summarization, no cleverness. Just follow every pointer the ticket hands you and pay the tokens.

Here's a concrete example. A ticket lands titled "Fix upsert inconsistency bug" with no description. What bug? Hand that to the agent cold and it'll spend twenty minutes spelunking through the upsert code path and form a theory about what "inconsistency" probably means and ship a fix for a bug that may or may not be the one anyone cares about. The actual bug lives in a Slack thread from the oncall rotation two weeks ago where someone walked through exactly what they saw and which segment it happened on and why the existing retry logic didn't catch it. The ticket is the pointer. The thread is the spec. An agent that can't follow the pointer is just guessing more confidently than a human would.

---

## Extract a skill only when plain prompt keeps failing

The signal for a skill is specific e.g. a fixed multi step procedure the agent keeps executing slightly wrong in slightly different ways. Not a single wrong answer but a sequence of steps that have to happen in the right order with the right arguments under the right conditions that the model keeps fucking up because prompts don't execute deterministically. For the Pinot agent the first thing that hit this bar was launching a local cluster. The agent kept screwing up the startup sequence of the various components by bringing things up in the wrong order or forgetting a service or wiring the Java classpath for a binary slightly wrong so the process booted and then failed on the first query. It did eventually get everything up and running correctly but a launch that should have taken two minutes was eating twenty on every run while the agent flailed through the same class of mistakes. Promoting it into a skill with an explicit startup procedure and a classpath helper script fixed it and brought the time back down. Before that point any earlier extraction would have been premature.

---

## Package components the agent keeps reinventing

Sometimes you'll notice your agent keeps on reinventing the same helper every run — the same generator or parser or loader — each version slightly different and each with its own subtle bugs. The output is 90% right but the 10% moves every run usually in the places a bug loves to hide. That is the signal that you should probably already package these either with a skill or in the project itself.

For the Pinot agent the clearest case was generating test datasets. Pinot supports a wide matrix of column types, e.g. single value and multi value, every primitive from int to bytes, JSON with and without nulls and timestamps in a handful of formats. Reproducing a bug often needed a dataset that hit a specific combination and the agent kept handrolling a generator every time. Each version covered whatever types the current ticket mentioned and silently skipped the rest. Null handling was the worst offender because a generator that never produced nulls would happily report the bug as not reproducible. Cardinality was the second worst especially for upserts. A generator that produced unique primary keys on every row isn't testing upsert at all. It's testing append and the agent would sometimes not even notice the bug had never actually triggered. Packaging it into a proper dataset generator with flags for which types to include and explicit null density and a configurable primary key cardinality meant one source of truth for what a representative Pinot table looked like and repro runs stopped drifting based on whatever the model felt like generating that day.

Don't try to predict which helpers you'll need. Watch for the same one showing up in three or four runs then extract. The model's intelligence is expensive and belongs on the parts that actually need it — choosing an approach or noticing something suspicious in a result or deciding whether the output matches intent. Not reconstructing the same sixty lines every run.

---

## Don't phase the work until one shot fails the same way twice

As soon as a task looks complicated the reflex is to split it into design and plan and build with review gates between each. This is the same over engineering instinct as everything else. Phases add overhead and extra artifacts to maintain and more places for context to get lost in handoff. Wait for the signal before you split.

The Pinot agent is a case study in not splitting yet. I've had the itch a few times especially when a run spends five minutes reasoning about design and then jumps straight into shoddy implementation that keeps breaking because the design wasn't actually thought through. But the tickets I'm feeding it are small — the kinds of pesky bug fixes and minor improvements that eat into our devs' time not feature rewrites. For work at that size a design phase would produce an artifact nobody needs to review and the extra handoff cost outweighs any benefit. If I ever point the agent at a full feature rewrite I'll probably split. Right now the whole point of this agent is to take this specific category of work off devs' plates so they can spend their time on the things that actually need a design session.

What took me embarrassingly long to notice is that this is just the age old exploration vs exploitation tradeoff in new clothes. Design is exploration, broad and uncertain and willing to throw away options you don't pick. Build is exploitation, narrow and committed and focused on making one path work. Jamming them into the same run means the agent tries to do both at once and does both badly. That's the cost phasing is paying to fix and why you shouldn't reach for it until the failure is actually repeating.

---

## Don't optimize cost or latency until correctness is locked in

The signal you're optimizing too early is catching yourself reaching for a smaller model, prompt caching or context trimming while the agent still makes mistakes you don't fully understand. Cost and latency feel like legitimate engineering problems but they're almost never the bottleneck that matters first. Fast wrong output is fine while you're still learning what breaks which is how every section above got written. It's not fine for a system real users depend on. Optimize before correctness is locked in and you ship wrong output cheaper which is the same problem with a smaller bill.

I'm still running the most capable model available (Claude Opus 4.6 high) on every step of the Pinot agent and haven't seriously looked at cost yet. Once the merge rate is good enough I'll start measuring where the cost is actually going and attack that specific line not the category. Smaller models and shorter prompts and aggressive caching all work but each one shifts behavior in ways your logs and your correctness baseline need to catch. Without that baseline cost optimizations silently break the system in ways you won't notice until a user points one out.

---

## Use it yourself, get users, learn what actually breaks

This one matters more than everything above it combined. The Pinot agent isn't shipped yet but I've been running it on real tickets myself day after day and that alone has been enough to make every lesson above go from theory to reflex. The failure modes I'd designed for barely ever showed up. The ones I never anticipated hit on every third run. A couple of weeks in I had a list of issues and not a single one was on my original roadmap.

Getting other people on an agent is the force multiplier I've watched teammates benefit from on their own projects. It surfaces workflows and edge cases you'd never hit yourself. I haven't got the Pinot agent to that stage yet but even solo use has been enough to demolish the plan I started with.

This also means the system gets better through subtraction. Steps I'd wasted the model's reasoning on early on got moved into tools. Elaborate handling for theoretical problems got ripped out. If you're only adding and never removing you're accumulating complexity faster than you're learning from usage.

---

## I still need to win over the reviewers

The biggest unresolved problem with the Pinot agent is reviewer trust. The run that made this concrete was one I almost shipped. The code compiled and every test passed and I was mentally moving on when I opened the logs and saw that the feature flag the agent had added to gate the new behavior never actually came into effect. Every run was still taking the existing happy path. The suite was green because nothing it checked had changed.

"Tests pass" is doing almost none of the work I need it to do. A test that reproduces the wrong invariant passes on a patch that doesn't fix the bug. A test that never exercises the new code path passes whether the patch works or not. Green CI is necessary but not sufficient and the gap is what my review time is filling.

What I want is a trust packet shipped with every PR. The agent states up front what success means for this specific change, then produces evidence for each claim. For a bug fix, a reproducer that fails on main and passes on the patch, plus logs showing the corrected branch is now taken. For a flagged feature, evidence the flag switches behavior in both positions. For a config change, a diff of the resolved config showing the new field appears and defaults correctly. For an API change, request and response of old and new shapes side by side. For anything user visible, before and after captures of the actual surface. Every claim needs an artifact and the failure the packet catches is the one where the artifact doesn't support the claim. 

I haven't built this properly yet. The hard part isn't collecting evidence. It's getting the agent to identify what evidence matters for this particular change which is most of the work a good engineer does during self review. What I do have is a cheap proxy: a new test that fails on main and passes on the patch. It turns "probably correct" into "verifiably correct" more often than anything else I've tried but it wouldn't have caught the flag bug which is why I know it isn't the destination.

---

None of the layers above were in the plan I started with. Each one got added because the agent had already broken in that specific way on a real run and most of them I wouldn't have thought to build upfront. The complexity you're designing around doesn't exist until you start running the thing. Let each failure tell you what the next layer has to be.

Or a shorter path is to build the dumbest version and hand it to your wife and listen. There's no greater eval than wife bench.

<a href="https://x.com/difficultyang/status/2045320282198385012?s=20"><img src="/images/building-production-ai-agents-incrementally/wife-bench-tweet.png" alt="Tweet from @difficultyang: Opus 4.7 fails wife bench (wife got fed up and switched back to Sonnet)" /></a>
