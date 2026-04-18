---
title: "The Zero Shot Trap and How to Escape It"
summary: "Why designing your AI agent system upfront based on theoretical problems doesn't work, and how to build one that does through incremental iteration on real usage."
publishedOn: 2026-04-16
draft: true
tags:
  - ai
  - llm
  - software-engineering
  - build-in-public
featured: false
---

I spent the last several months building an AI agent that takes an Apache Pinot JIRA ticket and tries to turn it into a reviewed pull request. I never shipped it, but I used it heavily on real tickets. I have a problem with complexity: my first instinct on any task is to design the whole system upfront, every failure mode anticipated, every layer in place before anything real runs. So that's what I did. The architecture looked beautiful on a whiteboard. Then I ran it on a real ticket and almost none of the problems I'd designed for were the problems that actually happened.

This is the **zero shot trap**: you design a complex agent upfront by imagining what could go wrong and expect it to work in production. It doesn't. The complexity of a real domain is discovered through usage, not predicted through design.

Everything below came from the Pinot agent breaking in ways I hadn't imagined, from watching teammates who don't share my complexity bias ship agent systems that actually work and from a few side projects where my wife was the primary user. Nothing cures overengineering faster than someone who doesn't care about your architecture telling you the thing just doesn't work.

---

## Start with the smallest thing that runs end to end

The temptation on day zero is to build everything you think you'll eventually need. Elaborate integrations, comprehensive knowledge bases, retry logic, quality gates. This is the fastest way to waste months on problems that never materialize.

Start with the absolute minimum the agent needs to complete one real run. For the Pinot agent that meant pulling a ticket, editing code, running the Maven build, running the affected tests and opening a PR. Wire those up, point Claude Code at a real bug and watch it break. Every breakage teaches you what the next piece of tooling needs to be, grounded in a problem that just happened rather than one you imagined. Build the tool for the problem you just hit, not the one you imagine hitting next month.

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

The signal to promote something into a skill is boring. The same clarification keeps showing up in the instruction file, or the agent keeps getting the same multi step procedure slightly wrong in slightly different ways. For the Pinot agent, the first thing that hit this bar was ticket scoping: reading the JIRA ticket, figuring out which of the three repos and which module it belonged to, identifying the candidate files to touch. Prose instructions weren't pinning the agent down, so every run scoped tickets slightly differently. Promoting it into a skill with an explicit procedure fixed that. Before that point, any earlier extraction would have been premature.

And a skill that actually works ships with scripts, not just prose. The prose captures the judgment calls: when to use it, what to watch for, how to decide between options. The scripts handle everything mechanical: fetching the right inputs, running things in the right order, producing structured output. If your skill is entirely prose, you're hoping the model executes consistently, which is the same failure mode as writing everything in the instruction file.

---

## If the agent keeps handrolling the same thing, package it

Watch for patterns in what the agent produces. If every run reinvents the same validation helper, retry wrapper, config loader or error formatter, each slightly different and each with its own subtle bugs, you're paying the model to reinvent something that should be a dependency. Package it. Ship it as a library the agent imports, or bundle it with the skill that needs it.

For the Pinot agent the cleanest example was generating test datasets. Pinot supports a wide matrix of column types: single value and multi value, every primitive from int to bytes, JSON with and without nulls, timestamps in a handful of formats. Reproducing a bug often needed a dataset that hit a specific combination, and the agent kept handrolling a generator every time. Each version covered whatever types the current ticket mentioned and silently skipped the rest. Null handling was the worst offender because a generator that never produced nulls would happily report the bug as not reproducible. Packaging it into a proper dataset generator, with flags for which types to include and explicit null density, meant one source of truth for what a representative Pinot table looked like, and repro runs stopped drifting based on whatever the model felt like generating that day.

This does two things. It removes an entire category of failure where the output is 90% right but the 10% is different every time. And it compounds over months because the components you ship keep getting used and improved, while hand rolled versions rot one copy at a time inside individual runs. As with everything else, don't try to predict which components you'll need. Extract them when you notice the same pattern rewritten for the third or fourth time.

---

## If the agent reasons through the same mechanics twice, turn it into a tool

The signal is watching the agent spend tokens figuring out how to do something that should always happen the same way. Fetching inputs, running checks, producing summaries of known artifacts. These aren't places you want the model to be creative, but if there's no tool for them, it will be. Every unnecessary reasoning step is a place where the model gets creative in ways you don't want.

The worst offender in the Pinot agent was the Maven command itself. The three target repos don't share a convention: one uses `./mvnw`, another expects system `mvn`, each has its own module layout. Without a tool the agent reasoned through the right invocation every run and sometimes skipped `-pl` scoping entirely, kicking off twenty minute full repo builds for a two line change. Wrapping all of it into a `test_module` helper that took a repo and a module and produced the right command killed the whole category of failure. The agent stopped deciding how to run the build and started deciding whether the build result mattered.

When you notice the same mechanical sequence going through the model twice, extract it. The rule of thumb: if you're writing prompt text that describes a fixed sequence of steps, those steps should be a tool, not a prompt. The model's intelligence is expensive and belongs on the parts that actually need it. Choosing an approach, noticing something suspicious in a result, deciding whether the output matches intent. Not reconstructing the same procedure every run.

---

## Don't phase the work until one shot fails the same way twice

As soon as a task looks complicated, the reflex is to split it into design, plan and build with review gates between each. This is the same overengineering instinct as everything else. Phases add overhead, extra artifacts to maintain and more places for context to get lost in handoff. Wait for the signal before you split.

The signal that finally made me split was watching the Pinot agent spend five minutes thinking about design at the start of a run, then jump straight into implementation that turned out shoddy and kept breaking because the design hadn't actually been thought through. The run after that ended the same way. And the one after that. Splitting design into its own phase with its own artifact fixed it, because design now got uninterrupted focus and the build phase ran against a spec that had already been reviewed. The phase boundary belongs exactly where the failure keeps happening, not everywhere it might in theory.

What took me embarrassingly long to notice is that this is just the age old exploration vs exploitation tradeoff in new clothes. Design is exploration, broad and uncertain and willing to throw away options you don't pick. Build is exploitation, narrow and committed and focused on making one path work. Jamming them into the same run means the agent tries to do both at once and does both badly.

---

## Pull logic out of the instruction file every time it creeps in

The signal is catching yourself writing procedural logic in the instruction file. Steps to follow in order, conditions to check, fallback chains. When that happens, those things belong in a tool, a script or a skill, not in prose the model reasons through every run. The instruction file should be the thinnest part of your system and should shrink relative to the rest as the system matures, not grow with it.

The Pinot agent's CLAUDE.md had half a page on how to reproduce a reported bug: prefer a unit test first, fall back to an integration test, only spin up a live cluster as a last resort. That's a procedure, not orientation, and it kept drifting between runs because prose doesn't execute deterministically. Moving it into the `reproduce-issue` skill, where the fallback chain lived as actual script logic rather than instructions the model had to re-interpret, fixed the drift and let CLAUDE.md shrink back to pointers.

Expect to rewrite it a dozen times because the final version describes a system that didn't exist yet when you started. Keep it to two things: which tools handle which tasks and which raw operations the agent must never run directly. The never list matters as much as the must list. And make the agent write intermediate state to files, not just conversation context, so the work survives when the context compresses during a long run.

---

## The first silent failure is the signal to instrument

The signal is catching a run that looked fine but quietly produced the wrong thing. Agents are frustratingly good at producing plausible output even when they've gone completely off the rails, and a run that quietly does the wrong thing is worse than one that stops and asks. The first one ships. The second one you fix.

The run that convinced me for the Pinot agent was one where tests passed, the diff looked clean and I was about to move on, until a closer read showed the agent had quietly worked around a codebase constraint rather than respecting it. I had no trail to explain how it got there. That's when to invest in logging what the agent decided, what it checked and what it ruled out. Not the polished final answer but the reasoning trail behind it. Before the first silent failure you don't know what's worth logging. After, you do. And from then on, every similar failure costs you the same investigation only once.

Once the logs start piling up, point Claude Code or Codex at a month of them and ask what the agent keeps getting wrong. Models are surprisingly good at spotting repeated failure patterns across runs you'd miss eyeballing one at a time. A real chunk of the knowledge base entries I added in the last stretch came from doing this every few weeks rather than from me reviewing individual failures live.

---

## Don't optimize cost or latency until correctness is locked in

The signal that you're optimizing too early is catching yourself reaching for a smaller model, prompt caching or context trimming to save tokens while the agent still makes mistakes you don't fully understand. Cost and latency feel like legitimate engineering problems, but they're almost never the bottleneck that matters first. An agent that produces wrong output faster is worse, not better. Cheaper wrong output is the same story.

Lock correctness first. Run the expensive model, put everything it needs in context, let it produce the right answer repeatedly. For months I ran the most capable model available on every step of the Pinot agent and didn't think about cost at all. Only once correctness was stable across dozens of tickets did I start looking at what could move to a cheaper model without regressing, and even then I kept the full logs and compared outputs side by side before making the switch. Measure where the cost is actually going and attack that specific line, not the category. Smaller models, shorter prompts and aggressive caching all work, but each one shifts behavior in ways you need your logs and your correctness baseline to catch. Without that baseline, cost optimizations silently break the system in ways you won't notice until a user points one out.

---

## Use it yourself, get users, learn what actually breaks

I saved this for last because it matters more than everything above it combined. I never shipped the Pinot agent. I did use it myself, on real tickets, day after day, and that alone was enough to make every lesson above go from theory to reflex. The failure modes I'd designed for barely ever showed up. The ones I never anticipated hit on every third run. Within a few weeks I had a list of issues and not a single one was on my original roadmap.

Getting other people on an agent is the force multiplier I've watched teammates benefit from on their own projects. It surfaces workflows and edge cases you'd never hit yourself. I didn't get the Pinot agent to that stage, but even solo use was enough to demolish the plan I'd started with.

This also means the system gets better through subtraction. Steps I'd wasted the model's reasoning on early on got moved into tools. Elaborate handling for theoretical problems got ripped out. If you're only adding and never removing, you're accumulating complexity faster than you're learning from usage.

The Pinot agent I use today looks nothing like the one I designed on that first whiteboard. It's the one that survived contact with real tickets, real breakages and real reruns, built one layer at a time. If you're about to start your own agent, save yourself the whiteboard.
