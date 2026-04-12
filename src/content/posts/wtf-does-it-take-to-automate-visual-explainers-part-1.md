---
title: "Automating Visual Explainers, Part 1: Building the Harness That Stops the Agent from Bullshitting"
summary: "I spent a year hand-building visual explainers in Cursor. Then I tried to automate it with AI. The first month was all agent infrastructure and zero visuals."
publishedOn: 2026-04-11
draft: false
tags:
  - ai
  - agents
  - software-engineering
  - build-in-public
featured: true
---

For about a year I had been hand-building interactive visual explainers using Cursor IDE. p5.js animations on a canvas with interactive controls on the right. The kind where you take a complex system like Apache Kafka's consumer group protocol or an LSM tree's compaction cycle and turn it into something you can actually watch and poke at.

They work well for teaching. They also take days to build by hand and most of that time isn't creative work. It's mechanical: laying out shapes, wiring up sliders and buttons to state, tweaking animation timing until it feels right.

Every time I finished one, the same thought: this is way too much manual effort for something an AI should be able to do. The plan was simple. Automate the same thing I was doing manually. Point an agent at a codebase, have it understand the system, have it spit out a p5.js animation with controls. That was it.

The project, `spec_sim`, would eventually grow into something completely different from what I set out to build. But this post isn't about the polished version. This is about the first month. The month where I built zero visual explainers and instead spent every waking hour fighting a runtime that could not keep an AI agent from lying to itself.

At the time, tools like Codex and Claude Code didn't exist yet or weren't widely available. There was no off-the-shelf agent runtime I could point at the problem. If I wanted an AI agent that could reliably generate visual explainers I'd have to build the harness myself.

This is Part 1 of a series where I walk through the actual build. The dead ends, the things that didn't work and the specific moments where I wanted to throw my laptop out the window. It wasn't easy.

---

## The default loop is fucked

Here's what actually happens when you point a model at a codebase and say "build me a visual explainer." It generates something. Something that looks plausible. You ask it to improve and it rewrites half the file. The layout breaks. It explains why the layout is actually fine. You start over.

That loop of generate, drift, rationalize, restart is the default behavior of every AI coding workflow I've tried. The project only became interesting once I stopped tolerating it.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-1/default-loop.html" width="100%" height="500" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## Starting from zero

The first thing I built wasn't a visual. It was scaffolding. LLM client wrappers, sandbox utilities, logging helpers. Then `driver.py`, a bare-bones turn-based agent loop with `shell` and `apply_patch` as the only tools. The model was `gpt-5-mini` because I was broke. The prompt was one line:

```
You are an AI agent skilled in creating fully-functioning simulators
with PixiJS to understand a feature in codebase
```

That was the entire system prompt. The task prompt was slightly more detailed but not by much:

```markdown
You are a creater game designer that helps people understand features
of complex codebases with the help of simulators.

<mission_outline>
- Find the relevant class/method that aligns with the user ask
- Explore the codebase until you form the understanding of code's
  happy path, edge cases, failure scenarios, interaction with other
  components, state machines etc.
- At each step, keep on updating your current understanding in a
  document called design.md
- Once you have understood, translate your understanding to a
  design doc
</mission_outline>
```

Yes, "creater" is a typo. It shipped. The design doc guidelines asked the model to specify things like what controls the user should have, what state the simulator should maintain, whether there should be a clock. Reasonable questions. Completely insufficient for what I was actually trying to build. But you don't know that until you run it.

The philosophy at this point was deliberate: start with the dumbest possible thing and see where it breaks. I didn't want to design an elaborate prompt upfront because I had no idea what failure modes I would actually hit. Every guardrail, every constraint, every line added to the prompt later was a response to something that went wrong in a real run. Not speculation. Not best practices. Just pain.

The workflow for the first few weeks was: run a session, watch the agent flail, then go through the logs manually after it finished. The driver had a logger from day one so I had full traces of every tool call, every model response, every patch attempt.

I would read through a failed run, form a theory about what went wrong, then paste the relevant chunks of the log into Cursor along with my notes and let it help me figure out the fix. AI debugging AI, mediated by me staring at logs.

---

## The five days that felt like five weeks

There was a gap between the initial scaffolding and the next meaningful commit. That gap wasn't vacation. It was me running the driver over and over, watching it fail in ways I didn't anticipate and trying to figure out what the actual problems were before writing more code.

Then the browser tool landed. Playwright-based, headless Chromium, captures screenshots and returns them as base64 images. The idea was simple: the agent needed to see what it built. 169 lines of Python wrapping `sync_playwright` to open a URL, wait for network idle, screenshot the page, optionally screenshot specific CSS selectors, optionally scroll and capture more.

```python
def browse_and_screenshot(
    url: str,
    wait_ms: int = 2000,
    full_page: bool = True,
    viewport_width: Optional[int] = None,
    viewport_height: Optional[int] = None,
    selector_screenshots: Optional[List[str]] = None,
    num_scrolls: int = 0,
    out_dir: Optional[str] = None,
) -> Dict[str, Any]:
```

The function accepted local file paths and coerced them to `file://` URLs. Each run got its own timestamped output directory so screenshots would not clobber each other. The full page screenshot went back to the model as a base64-encoded image in the conversation history.

The same week the conversation history management switched from raw string concatenation to XML-tagged structured entries. Every leaked system prompt I could find from Cursor, Lovable, v0 used XML to structure tool calls and results. Small change. Mattered a lot. The model could now distinguish between its own reasoning, the tool it called and the result it got back:

```python
{"role": "user", "content":
    f"<action>{e.get('action', '')}</action>\n"
    f"<result>{e.get('result', '')}</result>\n---\n"
}
```

Then everything went to shit for a bit. In the span of a single day I went through three distinct failure modes.

First the planner would read a few files, produce a shallow design document and declare itself done. So I rewrote the prompt. Added step constraints, a two-tier memory system (ephemeral "working notes" vs persistent understanding), confidence thresholds (≥0.7 with ≥2 evidence points before persisting a fact), stability checks before each commit to understanding. The works. Then it wouldn't stop. It would read every file in the project, update its understanding after each one and never converge on an actual design. The heavyweight prompt had swung the pendulum the other way.

So I stripped the prompt back down. Removed working notes, removed stability checks, removed confidence thresholds. Simplified the understanding management to just "persist facts after every read_file." Still broken. The agent would either race through exploration or get stuck in an infinite reading loop. Three prompt rewrites in a single day, none of them fixed it.

The fix wasn't in the prompt. It was in the output configuration. And the conversation window.

The model's responses were getting truncated by the default `max_tokens` limit. It was generating a reasonable plan but the plan was getting cut off mid-sentence. The truncated output looked like the model giving up early. The model wasn't giving up. I was cutting it off. Once I bumped `max_tokens` to 8096 and set `truncation` to `"auto"`, the outputs stopped getting clipped. The conversation history was also too short — the agent was losing its own recent context and re-exploring things it had already seen.

And I had to unwind the prompt complexity I'd added while chasing the wrong problem: the forced "you must call update_understanding before any other action" nudge that burned a tool call every turn, the `Developer:` role prefix that confused the model, the step-efficiency warnings that added noise without changing behavior. The final working version was simpler than any of the three failed rewrites.

Three commits of prompt engineering to fix something that needed a bigger number in a function call. This won't be the last time this happens in this story.

---

## The tool surface had to shrink before it could grow

Within the first week the agent had five tools: `shell`, `apply_patch`, `browse_and_screenshot`, `read_file` and `update_understanding`. The last one was a persistent in-memory scratchpad. The agent could write notes to itself that would survive across turns without stuffing the conversation history.

I didn't design these tool interfaces from scratch. There's a repo on GitHub, [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools), that collects system prompts from various AI coding tools. I spent a while browsing through those to understand how tools like Cursor, Lovable and v0 structured their `read_file` and planning interfaces. The tool schemas, the parameter constraints, the way they scoped what the model could and could not do in each mode. My `read_file` and `update_plan` tools were directly modeled after the patterns I found there. No point reinventing something when someone has already leaked the good version.

The `read_file` tool forced view ranges. You couldn't read an entire file. You had to specify a start and end line. If you didn't know the range, the prompt told you to run `rg -n` first to find it, then read the smallest slice:

```markdown
## read_file
- ALWAYS provide `view_range="start:end"`, <= 250 lines per call.
  If you don't know the lines, first `shell: rg -n` to find them,
  then read the smallest slice.
- Never request a whole file.
- Don't re-read the same range unless the file changed.
```

The `apply_patch` tool was more consequential. It used a custom patch format. Not unified diff, not git diff. A bespoke format with `$$ context_line` markers, `+` for additions, `-` for deletions and space-prefixed context lines. The prompt included multiple correct and incorrect examples. Getting the model to produce valid patches was its own multi-day mess. The format went through several iterations before the model could reliably produce parseable patches.

The biggest headache was that OpenAI's models were absolutely burnt into using `@@` as the hunk marker, because that is what their own prompting guide uses. My format used `$$`. No matter how many examples I put in the prompt, the model would keep emitting `@@` markers and the parser would reject them. I eventually gave up fighting it and just made the parser accept both `$$` and `@@` as valid anchors. Sometimes the pragmatic fix is admitting the model isn't going to change its habits and meeting it where it is.

The tool registry also controlled access by task mode. Plan mode got exploration tools. Build mode got construction and validation tools:

```python
def get_tools(task_mode: str = "plan"):
    base_tools = [SHELL_TOOL_SCHEMA, APPLY_PATCH_TOOL, READ_FILE_SCHEMA]

    if task_mode == "build":
        base_tools.append(PLAN_TOOL)
        base_tools.append(validate_html_schema())
    else:
        base_tools.append(UPDATE_KNOWLEDGE_TOOL)

    return base_tools
```

Why tools were scoped per mode is explained in the next section.

---

## Plan, build, then phases inside build

This is probably the most important architectural story of the first month and it happened in layers.

A note on terminology before diving in: the word "plan" shows up in two completely different contexts in this post. The **design document** (produced by plan mode) is the spec that describes what to build. The **plan checklist** (managed by the `update_plan` tool in build mode) is a todo list that tracks progress through the build phases. They serve different purposes but I ended up calling both of them "plan" in the code, which is confusing. I'll try to be explicit about which one I mean.

### The plan/build split

The initial driver ran a single session. You gave it a codebase and a request and the agent was supposed to explore the code, understand the system, design a simulator and build it. All in one run.

That didn't work. The agent would read two files, form a half-baked understanding and immediately start writing PixiJS code. It was like asking someone to read a textbook and write an exam in the same sitting while they're still on chapter 2. The exploration was shallow because the agent was in a hurry to start building and the building was bad because the exploration was shallow.

The fix was separating the workflow into two distinct runs with a design document as the handoff artifact.

**Plan mode** (`--task plan`): the agent explores the codebase, reads files, builds understanding incrementally using the `update_knowledge` scratchpad and produces a design document in `docs/`. It has no access to build tools like `validate_html` or the plan checklist. Its only job is to understand the system and write a spec.

The design document had to cover specific sections:

- Overview and learning goals
- Controls available to the user (buttons, sliders, toggles)
- Simulator state model
- Clock and tick semantics (what changes each frame)
- Every screen element and its position
- How the simulator reacts to user interactions
- Failure and edge cases
- Traceability table mapping code elements to simulator elements

It also required a PixiJS plan: scenes, ticker behavior, a display tree layout with no overlap, an interaction map from controls to reactions and a performance budget covering target FPS, max sprites and draw call strategy.

If the design doc was vague on any of these the build agent would fill in the gaps with hallucinations, so the plan prompt was strict about non-placeholder text in every section.

**Build mode** (`--task build`): a fresh agent session starts from scratch. It reads the design document produced by the plan run and implements it. It has no access to `update_knowledge` because it doesn't need to explore anymore. Instead it gets the `update_plan` tool for tracking its checklist and `validate_html` for checking its output. The design document is the contract. The build agent's job is to fulfill it.

Two runs. Two prompts. Two different tool sets. The design document was the only thing that crossed the boundary. This forced the plan agent to actually commit its understanding to paper instead of carrying it as vague context in the conversation history. And it forced the build agent to work from a spec instead of making things up as it went.

One thing I noticed almost immediately in the build runs was the agent re-reading the same files constantly. It would read a file, do something and three turns later read the exact same file again. Same problem as before: the conversation history was too short and the model was losing its own context. This is also where I started thinking about read caching, but stuffing old file contents into the context would bloat it and defeat the purpose. The right fix was just giving the model enough history to remember what it had already seen.

### The first build prompt

The first build prompt was 26 lines:

```markdown
You are a game and simulator developer tasked with turning an existing
design document into a working experience.

# Workflow
- Locate and read the design document in the `docs/` directory before coding.
- Implement the simulator using Next.js with shadcn components and PixiJS
  for rendering.
- After code changes, run tests with `uv run pytest`.

# Deliverable & Exit Criteria
- Functioning simulator/game matching the design document.
- Respond with "AGENT COMPLETED EXECUTION" when done.
```

Next.js with shadcn components and PixiJS. For a single-file HTML simulator. That lasted about one day before I realized the agent couldn't manage a multi-file React project within its step budget. The stack simplified to what actually worked: PixiJS for rendering, GSAP for animation, Tailwind for layout, all in one `index.html` file loaded from CDN.

One decision that might sound insane but actually helped: I deliberately downgraded library versions to match what GPT-5 had seen most during training. The model was hallucinating API calls from newer versions it hadn't trained on. Older versions meant deeper pattern memory and fewer bogus calls. I still had to add prompt warnings about not mixing APIs across versions, but the hallucination rate dropped noticeably. You're not optimizing for the best library. You're optimizing for the library the model actually knows.

### Before phases: the free-for-all

The plan/build split solved the exploration-vs-construction problem. But build mode itself had no internal structure. The prompt was basically "here is a design doc, build it, tell me when you are done." No ordering. The agent could do whatever it wanted in whatever order it wanted.

What it wanted to do was write animation code first. Every single time. Ask it to build a house and it picks the curtains first. It would skip the data model, skip the engine, skip the controls and go straight to making things move on screen. The result looked like a demo for about 10 seconds. Then you would click play/pause and nothing would happen because there was no engine. You would look at the HUD and it would show hardcoded values because nothing was wired to a model. The animation was a screensaver, not a simulator.

When I told the agent to fix the controls, it would patch them in as an afterthought. But by then the animation code had assumptions baked in about how state worked and the control wiring would contradict those assumptions. The agent would fix one contradiction and introduce two more. The whole thing would spiral into a mess where every fix created new problems because the foundation was never there.

The core issue was that the agent was treating the task as one big blob. It had no sense of what needed to exist before what. It didn't understand that a simulator needs a model before it needs a view and a view before it needs choreography. It optimizes for whatever looks like progress and animated pixels on screen look like progress even when they're sitting on nothing.

### Phases inside build

The build prompt existed for exactly one day before I realized it needed structure. I watched the agent produce screensaver after screensaver and the pattern was obvious: it had no concept of dependency ordering. The fix was to decompose the build task into phases with explicit dependencies. The build prompt grew from 26 lines to over 400 and the core of it was a four-phase workflow:

**Phase 1, Engine + Model.** Build a `SimulationEngine` with `update(delta)` and `render()`. Build a neutral model with entities and at least one state machine. Set up DOM scaffolding only: `#world`, `#hud`, `#timeline`, `#controls`. The prompt explicitly said: finish this in under 3 steps. Do not use `play_and_screenshot` in this phase.

**Phase 2, Multi-View Scaffolding.** Wire the world view to the model. PixiJS renders, model drives. HUD reads model fields. Timeline appends entries on state changes. No choreography yet. Finish in under 10 steps. Still no `play_and_screenshot`.

**Phase 3, Storyboard + Controls.** This is where animation actually happens. Implement sequences from the design doc with `gsap.timeline()`. Wire play/pause, speed and reset controls. The prompt said: spend most of your steps here.

**Phase 4, Instrumentation.** Expose `window.SIM_PROBE`, a global object the simulator writes to so that external tools can read its runtime state. `SIM_PROBE.metrics()` returns a snapshot of things like current FPS, entity counts, connection counts and traversal rates. The harness's validation tools (covered in the next section) poll this object through Playwright to check whether the simulator is actually running correctly, not just rendering something on screen.

Each phase had explicit step budgets. The prompt told the agent exactly how many steps to allocate to each phase, which forced it to blow through the boring infrastructure fast and save its budget for the part that actually needed iteration. Without step budgets the agent would spend 15 turns on Phase 1 doing unnecessary exploration and run out of steps before reaching Phase 3.

### Enforcing it mechanically

Telling the agent about phases in the prompt wasn't enough. The agent kept calling `play_and_screenshot` to admire its half-finished work before the engine logic was even wired. So I added a hard gate in the driver. A function called `_phases_1_to_3_completed()` would parse the plan checklist, look for items tagged with `[Phase 1]` through `[Phase 3]` and check if they were all marked completed. If the agent tried to call any visual assessment tool before that, the driver returned a fake error:

```
"You are not allowed to call these tools until all items
 till Phase 3 are completed."
```

Not a prompt suggestion. A mechanical block. The agent couldn't assess visuals until it had finished building. Without it the agent would write two lines of HTML, screenshot it, decide it was bad, rewrite everything, screenshot again and burn through its entire step budget without building anything real.

The plan tool itself became the enforcement mechanism. Each item in the checklist had to be tagged with its phase number like `[Phase 1] Engine + Model`. The driver could parse these tags and verify ordering. At most one item could be `in_progress` at a time. The agent couldn't mark Phase 3 items as in_progress while Phase 1 items were still pending. And the driver would reject any attempt to emit "AGENT COMPLETED EXECUTION" while the plan had incomplete items.

This is essentially a state machine imposed on the agent from the outside. The agent doesn't decide when it's done. The harness does, based on the agent's own plan. It is a pattern I would later see described in Anthropic's [building effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) post: break a complex task into subtasks with explicit gates, control tool access per phase and use structured state to prevent the agent from skipping ahead or bailing early. I arrived at essentially the same architecture by watching the agent fail repeatedly and plugging the holes one at a time.

### The plan checklist as a control plane

The `update_plan` tool (the build-mode checklist, not the design document) wasn't a scratchpad. It was a gate on execution. The status model was deliberately constrained:

```python
class StepStatus(str, Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
```

At most one step could be `in_progress` at a time. The tool schema enforced this at the API level so the model couldn't quietly skip ahead or mark multiple steps active. The runtime could inspect the checklist, enforce completion gates and prevent the agent from declaring itself done while items were still pending.

Before this, the agent's workflow was: understand everything, build everything, judge everything, all in one turn. It felt productive. It was chaos. The philosophy shift that actually mattered was making the agent behave more like an architect and less like a frontend dev who just wants to see pixels on screen.

After the checklist became operational the loop was:

1. Read the request
2. Scope one concrete step
3. Act through tools
4. Validate
5. Advance or retry the failed step

Boring loop. Boring loops converge.

So the full structure by the end of the first month was three layers of control. The outer layer was plan vs build: separate runs with a design document as the handoff. The middle layer was phases inside build: four ordered stages with step budgets. The inner layer was the plan checklist as mechanical enforcement: hard gates in the driver that prevented the agent from skipping ahead, burning steps on premature screenshots, or declaring victory with unfinished work.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-1/phase-gates.html" width="100%" height="540" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## The browser test that wasn't enough

The `browse_and_screenshot` tool worked. It was also nowhere near enough. Here's what actually happens when you screenshot a PixiJS canvas: you get a static image of a dynamic thing. The agent had no way to tell if the animation was smooth, if elements overlapped when things moved, if controls actually did anything.

So `browse_and_screenshot` got replaced in the build prompt by two new tools that could actually catch problems: `layout_audit` and `flow_guardrails`.

**`layout_audit`** was a Playwright-based tool that opened the page, queried every significant DOM node (headings, buttons, inputs, images, canvas elements, anything with card/hero/modal in the class name), extracted their bounding boxes, computed overlap IoU between pairs, checked text contrast ratios against WCAG AA thresholds, measured spacing consistency and calculated visual balance via center of mass. No images returned. Just structured JSON with specific findings:

```python
def layout_audit(
    url: str,
    wait_ms: int = 1500,
    viewport_width: int = 1280,
    viewport_height: int = 800,
    focus_selectors: Optional[List[str]] = None,
    min_touch_target: int = 40,       # px
    min_text_contrast: float = 4.5,   # WCAG AA normal text
) -> Dict[str, Any]:
```

It checked for clipped elements, undersized touch targets, contrast failures, overlap pairs. The kind of mechanical validation that the model was terrible at eyeballing from a screenshot. The model could look at overlapping buttons and hallucinate that the layout was balanced. It couldn't argue with an IoU overlap score of 0.34.

**`flow_guardrails`** went after runtime behavior. It opened the page, waited for `window.SIM_PROBE.metrics()` to become available, sampled metrics every 200ms for 5 seconds, then checked density and performance thresholds: median FPS >= 45, connections >= 12, flow elements >= 200, traversal rate > 0, at least two distinct motion tempos observable. It returned a pass/fail JSON with a weighted flow-dominance score.

```python
checks = {
    "fps": med_fps >= t["min_fps"],
    "nodes": max_nodes >= t["min_nodes"],
    "connections": max_conns >= t["min_connections"],
    "flow_elements": max_flow >= t["min_flow_elements"],
    "traversal_rate": med_trav >= t["min_traversal_rate"],
    "tempos": est_tempos >= t["min_tempos"],
}
```

This was the first time I understood something that would become the central thesis of the entire project: **every deterministic check you add to the harness removes a failure mode the model would otherwise rationalize away.** The model can't argue with 4.2 when the threshold is 4.5.

---

## The play_and_screenshot pivot

`play_and_screenshot` was the next evolution. Unlike `browse_and_screenshot` which took a single static screenshot, this tool clicked the play button on the simulator, then captured screenshots at fixed intervals as the animation ran. It returned a sequence of images that the agent could compare frame to frame.

The same iteration introduced a judge rubric. The agent was told to score its own output across seven dimensions, each rated 1 to 5. Not vague labels. Explicit anchors with red flags and fix-first instructions for every level:

<div style="overflow-x: auto;">

| <span style="white-space: nowrap;">Dimension</span> | 5 (Exceptional) | 3 (Mediocre) | 1 (Bad) |
|---|---|---|---|
| <span style="white-space: nowrap;">**Clarity**</span> | Story obvious at a glance, single focal path | Understandable after a second, mild clutter | No idea what's happening |
| <span style="white-space: nowrap;">**Smoothness**</span> | Glide, natural ease in/out, nothing jolts | Serviceable, occasional stiffness | Stop-go, painful to watch |
| <span style="white-space: nowrap;">**Rhythm**</span> | Hypnotic beat, waves feel musical | Flat or slightly uneven | Random, exhausting |
| <span style="white-space: nowrap;">**Consistency**</span> | Cohesive timing/easing across all elements | Noticeable mix of floaty vs snappy | Patchwork of styles |
| <span style="white-space: nowrap;">**Feedback**</span> | State changes announce themselves with pulse/glow | Functional, some changes abrupt | Silent or confusing transitions |
| <span style="white-space: nowrap;">**Balance**</span> | Eye is guided, space used intentionally | Adequate, a bit cramped | Messy and incoherent |
| <span style="white-space: nowrap;">**Delight**</span> | Memorable, you want to rewatch | Plain, utilitarian | Ugly or annoying |

</div>

Each level also included red flags ("background noise competes with flow", "sudden speed shifts", "everything moves same speed") and specific fix-first instructions ("reduce simultaneous motion, dim background, brighten flow"). The idea was that even a mediocre score should tell the agent exactly what to fix next.

The scoring rules were calibrated to be harsh:

- Default to 3 (Mediocre) unless there is strong evidence to go higher
- 5 should be very rare, only if it would impress a professional
- Any jitter, clutter or ugly pacing scores 2 or lower
- GREAT only if: no dimension at or below 2, at least two 5s, median at or above 4

Without this rubric the agent would screenshot its output, say "looks good" and move on. Every fucking time. It didn't matter how bad the output was. The model would find something positive to say about it and declare victory. With the anchored rubric, the agent would actually identify specific problems and attempt fixes. Self-assessment without anchored criteria is just the model jerking itself off. You need to define "good" with enough precision that it can't wiggle out.

---

## Loop detection: because the agent will absolutely get stuck

The driver included loop detection. It compared the last N normalized action signatures against the preceding N. If they matched, the agent was stuck in a cycle and the driver would terminate:

```python
def detect_loop(history: list[dict], pattern_length: int = 3) -> bool:
    if len(history) < pattern_length * 2:
        return False
    recent = history[-pattern_length:]
    prev = history[-2 * pattern_length : -pattern_length]
    recent_sig = [_normalize_action_for_loop(h.get("action", "")) for h in recent]
    prev_sig = [_normalize_action_for_loop(h.get("action", "")) for h in prev]
    return recent_sig == prev_sig
```

The normalization stripped call IDs, extracted tool names and salient arguments and reduced each action to a stable signature. A `read_file` call became `read_file|path|view_range`. A `shell` call kept the command text. `apply_patch` collapsed to just `apply_patch`. This meant the detector caught semantic loops like reading the same file three times or patching and re-patching the same section, not just identical API calls.

There were also nudges. When the agent hadn't attempted a patch in a while the runtime would inject a message into the context: try writing something. And a deadline nudge when past 80% of the step budget. These aren't elegant. They work the same way pressure works on people: stop overthinking, start shipping.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-1/loop-detection.html" width="100%" height="560" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## Tool feedback: errors that teach instead of just failing

This one took me longer to appreciate than it should have. Early on, when a tool failed, the error that went back to the model was whatever Python threw. A raw traceback, a generic `ValueError`, sometimes just `"error": "Unknown error"`. Helpful. The model would see that, have no idea what went wrong and either retry the exact same thing or give up and try something completely different. Both responses wasted steps.

The turning point was `apply_patch`. The patch parser would reject a malformed patch with something like `"Invalid line in update section at line 47"`. That is technically correct and completely useless to the model. It doesn't know what was expected at line 47. It doesn't know if it used the wrong marker, the wrong prefix, or referenced a context line that doesn't exist. So it would guess, produce another broken patch, get another cryptic error and burn through five turns accomplishing nothing.

I rewrote every error path in the patch parser to include three things: what went wrong, why it went wrong and what to do instead. Every single `DiffError` became a mini instruction:

```python
raise DiffError(
    f"Update File Error - missing file: {path}. "
    "The file you're trying to update doesn't exist. "
    "Either create the file first, or use "
    f"'*** Add File: {path}' instead of '*** Update File: {path}'."
)
```

```python
raise DiffError(
    f"Invalid line in update section at line {self.index+1} "
    f"('{self._cur_line()}').\n"
    "Expected a context marker ($$ or @@ ...) or start of "
    "section, but got an unexpected line.\n"
    "Each section should start with '$$ <context_line>' or "
    "'@@ <context_line>' where <context_line> is a line from "
    "the original file."
)
```

Same thing for `read_file`. If the model asked for a file that didn't exist, the error didn't just say "file not found." It said what file was missing and suggested running `rg` to find the right path. If the model asked to read a file it had already read and the file hadn't changed, the result said so explicitly: "this file was already read and has not changed, reuse the cached content instead." That alone cut redundant reads dramatically.

For `shell`, I capped output at 80 lines but made sure the truncation message told the model how many lines were cut: "N more lines truncated." Before that fix, the model would see truncated output, assume it had the full picture and make decisions based on incomplete information. With the count, it at least knew something was missing and could decide whether to dig deeper.

A raw traceback gets you three more failed attempts before the model stumbles into the right approach by accident. Multiply that by 30-50 turns per run and bad error messages are one of the most expensive things in the whole system.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-1/tool-feedback.html" width="100%" height="520" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## Context management: the quiet money pit

This is the boring part that nobody writes about but that eats your budget alive. Every turn, the full conversation history goes back to the API. Tool outputs, reasoning, patch text, screenshot base64 strings. It adds up fast on a mini model budget.

The first thing I did was cap tool output to 80 lines. Truncate the rest, append a "N more lines truncated" message. For `shell` output this was fine. For `read_file` it was fine because I already forced view ranges. But for `apply_patch` it was a disaster. Successful patches were being included verbatim in the conversation history. The model would read back its own patches every turn, burning tokens on content it already knew. So I started stripping patch content from the history after successful application, replacing it with a short "apply_patch (patch omitted after successful application)" stub.

The second problem was more subtle. I had an `update_understanding` tool that let the agent persist notes across turns. And a `update_plan` tool for the build checklist. Both got injected into the system prompt every turn. The question was: where in the prompt do you put them?

This matters for prefix caching. I structured the prompt so static instructions came first (build prompt, tool schemas, aesthetics guidelines) and dynamic state (current understanding, current plan, step budget) came at the end. Static prefix gets cached, only the tail changes between turns.

`MAX_CONVERSATION_HISTORY` went from 10 to 20 to 50 over the course of the month as I kept finding cases where the agent was losing its own context. I eventually added support for OpenAI's `previous_response_id` field so I could send only the latest tool output instead of the entire conversation. The model still had access to the full history through the response chain, but I wasn't paying to resend it every turn.

None of this is glamorous. But when you're running a mini model and each run is 30-50 turns, the difference between smart context management and naive context management is the difference between a $2 run and a $15 run.

---

## Read caching

The re-reading problem I mentioned earlier eventually got a proper fix. The runtime started checking whether a file had actually changed on disk before serving it again:

```python
def _should_skip_read_file(
    conversation_history, normalized_path, normalized_view_range
) -> bool:
    snapshot, entry = _find_recent_read_history_entry(
        conversation_history, normalized_path, normalized_view_range
    )
    if not snapshot or not entry:
        return False
    if not _read_entry_has_cached_content(entry):
        return False
    previous_mtime = snapshot.get("mtime")
    current_mtime = _get_file_mtime_if_exists(normalized_path)
    return abs(current_mtime - previous_mtime) < 1e-9
```

If the file hadn't changed since the last read, the runtime returned the cached content instead of burning another tool call. Simple mtime comparison. Cut redundant reads dramatically.

---

## Three weeks, zero visuals

After a full month I had exactly one run good enough to preserve as a reference. One. I saved the full HTML output, the execution trace and a design doc explaining why that particular run was good. That bundle became the standard. Every future iteration had something concrete to beat instead of a feeling to chase.

The instinct when starting a project like this is to go straight at the visual output. Point the model at a codebase, give it PixiJS, tell it to build something beautiful. That doesn't work. Not because the model can't write PixiJS code, it absolutely can, but because without infrastructure to constrain, validate and iterate, every run is a coin flip. And I don't know about you, but I'm not interested in a system where quality is determined by luck.

The interesting engineering isn't in the generation. It's in everything that wraps the generation:

**Tool boundaries beat prompt engineering.** Every tool I added that performed a deterministic check (layout audit, flow guardrails, schema validation) reduced the model's error rate more than any prompt refinement I tried. The pattern: if a check can be done mechanically, do it mechanically. Don't ask the model to be careful. Make carelessness fail loudly.

**Separation of concerns applies to agent workflows too.** Plan mode and build mode exist for the same reason you separate reads and writes in a database. Letting the agent explore and construct simultaneously produces the AI equivalent of a dirty read. It builds on assumptions it hasn't validated.

**The model will rationalize visual quality.** Screenshots alone don't work. The agent looks at a broken layout and explains why it is actually fine. You need structured audits that return numbers. Overlap IoU. Contrast ratios. FPS samples. Numbers don't negotiate.

The system didn't start with a visual. It started with a harness. And that harness took a solid month to build before it could produce anything worth looking at.

The single `index.html` outputs from this era were promising at first glance. Some of them actually ran. Some of them even looked decent. But they were a nightmare to maintain. CDN imports would fail or conflict. The files got huge, which meant the agent needed enormous context windows just to patch them. And because everything lived in one file, a fix to the animation code could break the control wiring three hundred lines away.

These problems were already obvious by the end of the first month, but I didn't have a good answer yet.

In Part 2 I will cover what happened when the agent started actually generating simulators with this harness and why the single-file PixiJS approach turned out to be the wrong architecture for what I was trying to build.
