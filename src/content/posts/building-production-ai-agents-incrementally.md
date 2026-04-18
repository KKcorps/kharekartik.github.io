---
title: "Build notes: the zero shot trap"
summary: "In-progress notes from building a JIRA-to-PR agent for Apache Pinot — the overengineering instinct I started with, the signals that told me when to add each layer and the things I'm still figuring out."
publishedOn: 2026-04-16
draft: true
tags:
  - ai
  - llm
  - software-engineering
  - build-in-public
featured: false
---

These are build notes, not a postmortem. I'm a few weeks into an AI agent that takes an Apache Pinot JIRA ticket and tries to turn it into a reviewed pull request. It isn't shipped, probably won't be for a while and there are pieces I know I still need to rip out or rebuild. What I have is a running list of what keeps breaking and a pile of opinions I didn't have when I started. This post is the dump.

The **zero shot trap** is the reflex I started with: design a complex agent upfront by imagining what could go wrong and expect it to work in production. It doesn't. The complexity of a real domain is discovered through usage not predicted through design.

Everything below came from the Pinot agent breaking in ways I hadn't imagined, from watching teammates who don't share this bias ship agent systems that actually work and from a few side projects where my wife was the primary user. Nothing cures overengineering faster than someone who doesn't care about your architecture telling you the thing just doesn't work.

---

## Start with the smallest thing that runs end to end

The temptation on day zero is to build everything you think you'll eventually need. A planner that decomposes the ticket, an orchestrator routing between your skills, retry logic wrapped around every tool call and an eval harness watching the output, all wired up before a single ticket has run through the pipeline. This is the fastest way to waste weeks on problems that never materialize.

Start with the absolute minimum the agent needs to complete one real run. For the Pinot agent that meant pulling a ticket, editing code, running the Maven build, running the affected tests and opening a PR. Wire those up, point Claude Code at a real bug and watch it break. Every breakage teaches you what the next piece of tooling needs to be, grounded in a problem that just happened rather than one you imagined. Build the tool for the problem you just hit, not the one you imagine hitting next month.

The clearest place I've applied this for the Pinot agent is the harness itself. My default would be to write my own agent loop, tool dispatcher and context manager from scratch because that's the kind of control I usually reach for. Instead I'm leaning on Claude Code as the harness and will only pivot to something custom when I hit a limit I can't work around. So far I haven't, and every time I catch myself reaching for custom infrastructure the question I ask is whether Claude Code already handles that part either via MCP, Skills or some hook. It usually does.

---

## Knowledge grows from doing, not planning

The same principle applies to the knowledge you hand the agent. Your first instruction file should be tiny. Resist the urge to document every convention, pattern and pipeline upfront because you don't yet know which of those the agent actually needs versus what it can figure out from context.

Modern models infer a lot on their own. What they can't infer is the tribal stuff: where things live, how you're supposed to file something, what exists that isn't obvious from the code. The Pinot agent's KB had entries on how to correctly create a JIRA with the right labels and epic, which GitHub repos exist and what each is for, which internal APIs are available and what they return, what metrics are emitted and what they mean, where test data lives in AWS. None of that is in any training corpus. None of it is in the codebase either. Every entry came from the agent getting one of these things wrong and me writing down the fix so it didn't happen again.

The entries themselves I mostly scribble rough in vim the moment the agent screws up, then hand them to Claude and ask it to turn them into proper KB entries later. That keeps me from either skipping the write up because it feels like chore work or spending ten minutes polishing prose when I should be fixing the actual agent.

---

## If the brief is thin, the agent invents the rest

The single biggest lever on output quality in the Pinot agent wasn't the prompt or the tooling, it was the input. Most JIRAs at every tech company are barebones. A two line description, a stack trace if you're lucky, filed because a commit needs a ticket number attached, not because anyone sat down to write a spec. A TPM driven ticket with clean acceptance criteria is the exception. Hand the raw ticket to the agent and you get confident nonsense: a fix for the symptom the reporter pasted in, not the underlying change someone would actually merge.

So before any scoping or coding, the agent's first real job is pulling context from everywhere it isn't in the ticket. The Slack thread where someone actually debugged the issue. The internal Google Doc that spells out the real change. The GitHub comments on the related PR where a reviewer called out the gotcha someone hit last time. The ticket is a pointer to the context, not the context itself, and the agent is no better than a new engineer handed the same two line description with no backchannel. Spend the tokens on retrieval. A run that starts with the full picture is cheaper than three runs that start with half of it and produce three different wrong answers.

This is the one place I'd push back against the rest of the post's advice about not overinvesting early. Context gathering is where I'd start thick, not thin. Every other layer compounds on top of what the agent understood the task to be, so a weak input poisons everything downstream. Build the dumbest possible tool on day one, but build it on top of the best context pipeline you can manage.

---

## Extract a skill only when plain prose keeps failing

The signal to promote something into a skill is boring. The same clarification keeps showing up in the instruction file, or the agent keeps getting the same multi step procedure slightly wrong in slightly different ways. For the Pinot agent, the first thing that hit this bar was launching a local cluster. The agent kept screwing up the startup sequence of the various components, bringing things up in the wrong order, forgetting a service or wiring the Java classpath for a binary slightly wrong so the process booted and then failed on the first query. It did eventually get everything up and running correctly, but a launch that should have taken two minutes was eating twenty on every run while the agent flailed through the same class of mistakes. Prose instructions couldn't pin any of that down. Promoting it into a skill with an explicit startup procedure and a classpath helper script fixed it, and brought the time back down. Before that point, any earlier extraction would have been premature.

And a skill that actually works ships with scripts, not just prose. The prose captures the judgment calls: when to use it, what to watch for, how to decide between options. The scripts handle everything mechanical: fetching the right inputs, running things in the right order, producing structured output. If your skill is entirely prose, you're hoping the model executes consistently, which is the same failure mode as writing everything in the instruction file.

---

## Extract anything the agent keeps reinventing

The signal shows up in two flavors. One is the agent's output reinventing the same helper every run, each version slightly different and each with its own subtle bugs. The other is the agent spending tokens in the reasoning trail rederiving a fixed procedure it should be able to just call. Every unnecessary reasoning step is a place where the model gets creative in ways you don't want, and every handrolled helper is a place where the output is 90% right but the 10% is different every run.

For the Pinot agent the clearest case was generating test datasets. Pinot supports a wide matrix of column types: single value and multi value, every primitive from int to bytes, JSON with and without nulls, timestamps in a handful of formats. Reproducing a bug often needed a dataset that hit a specific combination, and the agent kept handrolling a generator every time. Each version covered whatever types the current ticket mentioned and silently skipped the rest. Null handling was the worst offender because a generator that never produced nulls would happily report the bug as not reproducible. Cardinality was the second worst, especially for upserts. A generator that produced unique primary keys on every row isn't testing upsert at all, it's testing append, and the agent would sometimes not even notice the bug had never actually triggered. Packaging it into a proper dataset generator, with flags for which types to include, explicit null density and a configurable primary key cardinality, meant one source of truth for what a representative Pinot table looked like, and repro runs stopped drifting based on whatever the model felt like generating that day.

The rule of thumb across both flavors: if you're writing prompt text that describes a fixed sequence of steps, those steps should be a tool. If the agent's output keeps containing the same handrolled helper, that helper should be a library. Don't try to predict which pieces you'll need, just watch for the same pattern showing up for the third or fourth time. The model's intelligence is expensive and belongs on the parts that actually need it, choosing an approach, noticing something suspicious in a result, deciding whether the output matches intent. Not reconstructing the same procedure every run.

---

## Don't phase the work until one shot fails the same way twice

As soon as a task looks complicated, the reflex is to split it into design, plan and build with review gates between each. This is the same overengineering instinct as everything else. Phases add overhead, extra artifacts to maintain and more places for context to get lost in handoff. Wait for the signal before you split.

The Pinot agent is a case study in not splitting yet. I've had the itch a few times, especially when a run spends five minutes reasoning about design and then jumps straight into shoddy implementation that keeps breaking because the design wasn't actually thought through. But the tickets I'm feeding it are small, the kinds of pesky bug fixes and minor improvements that eat into our devs' time, not feature rewrites. For work at that size a design phase would produce an artifact nobody needs to review, and the extra handoff cost outweighs any benefit. If I ever point the agent at a full feature rewrite, I'll probably split. Right now the whole point of this agent is to take this specific category of work off devs' plates so they can spend their time on the things that actually need a design session.

What took me embarrassingly long to notice is that this is just the age old exploration vs exploitation tradeoff in new clothes. Design is exploration, broad and uncertain and willing to throw away options you don't pick. Build is exploitation, narrow and committed and focused on making one path work. Jamming them into the same run means the agent tries to do both at once and does both badly. That's the cost phasing is paying to fix, and why you shouldn't reach for it until the failure is actually repeating.

---

## Pull logic out of the instruction file every time it creeps in

The signal is catching yourself writing procedural logic in the instruction file. Steps to follow in order, conditions to check, fallback chains. When that happens, those things belong in a tool, a script or a skill, not in prose the model reasons through every run. The instruction file should be the thinnest part of your system and should shrink relative to the rest as the system matures, not grow with it.

The Pinot agent's CLAUDE.md had half a page on how to reproduce a reported bug: prefer a unit test first, fall back to an integration test, only spin up a live cluster as a last resort. That's a procedure, not orientation, and it kept drifting between runs because prose doesn't execute deterministically. Moving it into the `repro-bug` skill, where the fallback chain lived as actual script logic rather than instructions the model had to reinterpret, fixed the drift and let CLAUDE.md shrink back to pointers.

Expect to rewrite it a dozen times because the final version describes a system that didn't exist yet when you started. Keep it to two things: which tools handle which tasks and which raw operations the agent must never run directly. The never list matters as much as the must list. And make the agent write intermediate state to files, not just conversation context, so the work survives when the context compresses during a long run.

---

## The first silent failure is the signal to instrument

The signal is catching a run that looked fine but quietly produced the wrong thing. Agents are frustratingly good at producing plausible output even when they've gone completely off the rails, and a run that quietly does the wrong thing is worse than one that stops and asks. The first one ships. The second one you fix.

The run that convinced me for the Pinot agent looked clean on every surface. The diff compiled, the tests passed, the commit message was reasonable. I was already mentally moving on when I read the runtime logs and saw that the feature flag the agent had added to gate the new behavior never actually came into effect. Every run was still taking the existing happy path. The new code existed, it just wasn't being exercised. Without pulling those logs I'd have shipped a PR that touched the right file and changed nothing in production. That's when to invest in logging what the agent decided, what it checked and what it ruled out, not the polished final answer but the reasoning trail behind it. Before the first silent failure you don't know what's worth logging. After, you do. And from then on, every similar failure costs you the same investigation only once.

Once the logs start piling up, point Claude Code or Codex at a month of them and ask what the agent keeps getting wrong. Models are surprisingly good at spotting repeated failure patterns across runs you'd miss eyeballing one at a time. A real chunk of the knowledge base entries I added in the last stretch came from doing this every few weeks rather than from me reviewing individual failures live.

---

## Don't optimize cost or latency until correctness is locked in

The signal that you're optimizing too early is catching yourself reaching for a smaller model, prompt caching or context trimming to save tokens while the agent still makes mistakes you don't fully understand. Cost and latency feel like legitimate engineering problems, but they're almost never the bottleneck that matters first. An agent that produces wrong output faster is worse, not better. Cheaper wrong output is the same story.

Lock correctness first. Run the expensive model, put everything it needs in context, let it produce the right answer repeatedly. I'm still running the most capable model available on every step of the Pinot agent and haven't seriously looked at cost yet. Once I get a good enough merge rate across PR raised by agent I'll start looking at what could move to a cheaper model without regressing. Measure where the cost is actually going and attack that specific line, not the category. Smaller models, shorter prompts and aggressive caching all work, but each one shifts behavior in ways you need your logs and your correctness baseline to catch. Without that baseline, cost optimizations silently break the system in ways you won't notice until a user points one out.

---

## Use it yourself, get users, learn what actually breaks

This one matters more than everything above it combined. The Pinot agent isn't shipped yet, but I've been running it on real tickets myself day after day, and that alone has been enough to make every lesson above go from theory to reflex. The failure modes I'd designed for barely ever showed up. The ones I never anticipated hit on every third run. A couple of weeks in, I had a list of issues and not a single one was on my original roadmap.

Getting other people on an agent is the force multiplier I've watched teammates benefit from on their own projects. It surfaces workflows and edge cases you'd never hit yourself. I haven't got the Pinot agent to that stage yet, but even solo use has been enough to demolish the plan I started with.

This also means the system gets better through subtraction. Steps I'd wasted the model's reasoning on early on got moved into tools. Elaborate handling for theoretical problems got ripped out. If you're only adding and never removing, you're accumulating complexity faster than you're learning from usage.

---

## I haven't figured out trust packets yet

The biggest unresolved problem with the Pinot agent is reviewer trust. When it produces a diff that passes the tests, I still spend a nontrivial amount of time reading it back before I'd be comfortable handing it to anyone else, and I don't have a clean way to skip that step. What I want is a trust packet shipped alongside every PR: a bundle that proves the change did what it claimed. The reproducer, the before and after behavior, the coverage delta, whatever else a reviewer would want before signing off. The reviewer then verifies the packet instead of rederiving whether the change is sound.

I haven't built this properly yet and it's probably too early to try. For now I'm leaning on tests as a cheap proxy: if the agent produces a new test that fails on main and passes on the patch, that's the minimum artifact I trust, and it catches a surprising amount. It isn't enough for anything subtle because a test that reproduces the wrong invariant will happily pass on a patch that doesn't actually fix the bug, but it's where I'm landing until I have a better sense of what a reviewer actually needs to see. Note to self for a few months from now: this is almost certainly the section I'll write next.

---

None of the layers above were in the plan I started with. Each one got added because the agent had already broken in that specific way on a real run, and most of them I wouldn't have thought to build upfront. That's the zero shot trap in one line: the complexity you're designing around doesn't exist until you start running the thing. Build the dumbest version that works, point it at something real and let each failure tell you what the next layer has to be.
