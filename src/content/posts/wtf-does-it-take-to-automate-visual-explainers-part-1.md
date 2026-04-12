---
title: "WTF Does It Take to Automate Visual Explainers? Part 1: The Harness"
summary: "I spent a year hand-building visual explainers in Cursor. Then I tried to automate it with AI. The first month was all agent infrastructure and zero visuals."
publishedOn: 2026-04-11
draft: true
tags:
  - ai
  - agents
  - software-engineering
  - build-in-public
featured: true
---

For about a year I had been hand-building interactive visual explainers using Cursor IDE. p5.js animations on a canvas with interactive controls on the right. The kind where you take a complex system like Apache Kafka's consumer group protocol or an LSM tree's compaction cycle and turn it into something you can actually watch and poke at. They work well for teaching. They also take days to build by hand, and most of that time is not creative work. It is mechanical: laying out shapes, wiring up sliders and buttons to state, tweaking animation timing until it feels right.

Every time I finished one, the same thought: this is way too much manual effort for something an AI should be able to do. The plan was simple. Automate the same thing I was doing manually. Point an agent at a codebase, have it understand the system, have it spit out a p5.js animation with controls. That was it.

The project, `spec_sim`, would eventually grow into something completely different from what I set out to build. But this post is not about the polished version. This is about the first month. The month where I built zero visual explainers and instead spent every waking hour fighting a runtime that could not keep an AI agent from lying to itself.

At the time, tools like Codex and Claude Code didn't exist yet or weren't widely available. There was no off-the-shelf agent runtime I could point at the problem. If I wanted an AI agent that could reliably generate visual explainers I'd have to build the harness myself.

This is Part 1 of a series where I walk through the actual build. The dead ends, the things that did not work, and the specific moments where I wanted to throw my laptop out the window. It was not easy.

---

## The default loop is fucked

Here is what actually happens when you point a model at a codebase and say "build me a visual explainer." It generates something. Something that looks plausible. You ask it to improve and it rewrites half the file. The layout breaks. It explains why the layout is actually fine. You start over.

That loop of generate, drift, rationalize, restart is the default behavior of every AI coding workflow I have tried. The project only became interesting once I stopped tolerating it.

---

## Starting from zero

The first thing I built was not a visual. It was scaffolding. LLM client wrappers, sandbox utilities, logging helpers. Then `driver.py`, a bare-bones turn-based agent loop with `shell` and `apply_patch` as the only tools. The model was `gpt-5-mini` because I was broke. The prompt was one line:

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

Yes, "creater" is a typo. It shipped. The design doc guidelines asked the model to specify things like what controls the user should have, what state the simulator should maintain, whether there should be a clock. Reasonable questions. Completely insufficient for what I was actually trying to build. But you do not know that until you run it.

The philosophy at this point was deliberate: start with the dumbest possible thing and see where it breaks. I did not want to design an elaborate prompt upfront because I had no idea what failure modes I would actually hit. Every guardrail, every constraint, every line added to the prompt later was a response to something that went wrong in a real run. Not speculation. Not best practices. Just pain.

---

## The five days that felt like five weeks

There was a gap between the initial scaffolding and the next meaningful commit. That gap was not vacation. It was me running the driver over and over, watching it fail in ways I did not anticipate, and trying to figure out what the actual problems were before writing more code.

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

The same week the conversation history management switched from raw string concatenation to XML-tagged structured entries. Small change. Mattered a lot. The model could now distinguish between its own reasoning, the tool it called and the result it got back:

```python
{"role": "user", "content":
    f"<action>{e.get('action', '')}</action>\n"
    f"<result>{e.get('result', '')}</result>\n---\n"
}
```

Then everything went to shit for a bit. In the span of a single day I went through three distinct failure modes.

First the planner would read a few files, produce a shallow design document and declare itself done. So I nudged the prompt to be more thorough. Then it would not stop. It would read every file in the project, update its understanding after each one, and never converge on an actual design. I tried multiple prompt variations to find the sweet spot between premature completion and endless exploration. None of them worked.

The fix was not in the prompt. It was in the output configuration.

The model's responses were getting truncated by the max_tokens limit. It was generating a reasonable plan but the plan was getting cut off mid-sentence. The truncated output looked like the model giving up. The model was not giving up. I was cutting it off. I was debugging a prompt problem that was actually a configuration problem. This will not be the last time this happens in this story.

---

## The tool surface had to shrink before it could grow

Within the first week the agent had five tools: `shell`, `apply_patch`, `browse_and_screenshot`, `read_file` and `update_understanding`. The last one was a persistent in-memory scratchpad. The agent could write notes to itself that would survive across turns without stuffing the conversation history.

I did not design these tool interfaces from scratch. There is a repo on GitHub, [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools), that collects system prompts from various AI coding tools. I spent a while browsing through those to understand how tools like Codex and Claude Code structured their `read_file` and planning interfaces. The tool schemas, the parameter constraints, the way they scoped what the model could and could not do in each mode. My `read_file` and `update_plan` tools were directly modeled after the patterns I found there. No point reinventing something when someone has already leaked the good version.

The `read_file` tool forced view ranges. You could not read an entire file. You had to specify a start and end line. If you did not know the range, the prompt told you to run `rg -n` first to find it, then read the smallest slice:

```markdown
## read_file
- ALWAYS provide `view_range="start:end"`, <= 250 lines per call.
  If you don't know the lines, first `shell: rg -n` to find them,
  then read the smallest slice.
- Never request a whole file.
- Don't re-read the same range unless the file changed.
```

The `apply_patch` tool was more consequential. It used a custom patch format. Not unified diff, not git diff. A bespoke format with `$$ context_line` markers, `+` for additions, `-` for deletions and space-prefixed context lines. The prompt included multiple correct and incorrect examples. Getting the model to produce valid patches was its own multi-day mess. The format went through several iterations before the model could reliably produce parseable patches.

The biggest headache was that OpenAI's models were absolutely burnt into using `@@` as the hunk marker, because that is what their own prompting guide uses. My format used `$$`. No matter how many examples I put in the prompt, the model would keep emitting `@@` markers and the parser would reject them. I eventually gave up fighting it and just made the parser accept both `$$` and `@@` as valid anchors. Sometimes the pragmatic fix is admitting the model is not going to change its habits and meeting it where it is.

The patch format mattered more than I expected. When the model has unlimited freedom to edit files, its favorite recovery strategy is regeneration. Something broke? Here is a brand new version of the whole file. More things break? Another completely new version. You get motion without convergence. Structured patches forced a different question: what exactly needs to change? Once this clicked, patch accuracy jumped dramatically. That single change refined the patch format definition and rewrote the build prompt. Getting the patch format right changed the economics of every fix from that point forward.

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

This split was the first real architectural decision. Plan mode is about understanding. Build mode is about construction. Letting the agent do both at once produced chaos because it would optimize for whatever looked like progress, which usually meant writing code before understanding the problem.

---

## The build prompt: PixiJS and a prayer

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

Next.js with shadcn components and PixiJS. For a single-file HTML simulator. That lasted about one day before I realized the agent could not manage a multi-file React project within its step budget. The stack simplified to what actually worked: PixiJS for rendering, GSAP for animation, Tailwind for layout, all in one `index.html` file loaded from CDN.

But the real story is the workflow structure that emerged over the next couple weeks. The build prompt grew from 26 lines to over 400. It specified a four-phase workflow:

**Phase 1, Engine + Model.** Build a `SimulationEngine` with `update(delta)` and `render()`. Build a neutral model with entities and at least one state machine. Set up DOM scaffolding only: `#world`, `#hud`, `#timeline`, `#controls`.

**Phase 2, Multi-View Scaffolding.** Wire the world view to the model. PixiJS renders, model drives. HUD reads model fields. Timeline appends entries on state changes. No choreography yet.

**Phase 3, Storyboard + Controls.** Implement animation sequences from the design doc with `gsap.timeline()`. Wire play/pause, speed and reset controls.

**Phase 4, Instrumentation.** Expose `window.SIM_PROBE` with metrics, deterministic stepping and FPS tracking.

Each phase had explicit deliverables and the prompt told the agent not to jump ahead. Phase gating was the blunt force mechanism that stopped the agent from doing its favorite thing: writing animation code before the model existed. Without it, the agent would skip straight to making things move on screen, and the result would be a pretty animation with no data model backing it. Looks great for 10 seconds. Falls apart the moment you try to wire controls.

---

## The browser test that was not enough

The `browse_and_screenshot` tool worked. It was also nowhere near enough. Here is what actually happens when you screenshot a PixiJS canvas: you get a static image of a dynamic thing. The agent would look at the screenshot, see shapes on a dark background and say "looks good." It had no way to tell if the animation was smooth, if elements overlapped when things moved, if controls actually did anything.

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

It checked for clipped elements, undersized touch targets, contrast failures, overlap pairs. The kind of mechanical validation that the model was terrible at eyeballing from a screenshot. The model could look at overlapping buttons and hallucinate that the layout was balanced. It could not argue with an IoU overlap score of 0.34.

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

This was the first time I understood something that would become the central thesis of the entire project: **every deterministic check you add to the harness removes a failure mode the model would otherwise rationalize away.** The model cannot argue with 4.2 when the threshold is 4.5.

---

## The play_and_screenshot pivot

`play_and_screenshot` was the next evolution. Unlike `browse_and_screenshot` which took a single static screenshot, this tool clicked the play button on the simulator, then captured screenshots at fixed intervals as the animation ran. It returned a sequence of images that the agent could compare frame to frame.

The same iteration introduced a judge rubric. The agent was told to score its own output across seven dimensions, each rated 1 to 5. Not vague labels. Explicit anchors with red flags and fix-first instructions for every level:

| Dimension | 5 (Exceptional) | 3 (Mediocre) | 1 (Bad) |
|---|---|---|---|
| **Clarity** | Story obvious at a glance, single focal path | Understandable after a second, mild clutter | No idea what's happening |
| **Smoothness** | Glide, natural ease in/out, nothing jolts | Serviceable, occasional stiffness | Stop-go, painful to watch |
| **Rhythm** | Hypnotic beat, waves feel musical | Flat or slightly uneven | Random, exhausting |
| **Consistency** | Cohesive timing/easing across all elements | Noticeable mix of floaty vs snappy | Patchwork of styles |
| **Feedback** | State changes announce themselves with pulse/glow | Functional, some changes abrupt | Silent or confusing transitions |
| **Balance** | Eye is guided, space used intentionally | Adequate, a bit cramped | Messy and incoherent |
| **Delight** | Memorable, you want to rewatch | Plain, utilitarian | Ugly or annoying |

Each level also included red flags ("background noise competes with flow", "sudden speed shifts", "everything moves same speed") and specific fix-first instructions ("reduce simultaneous motion, dim background, brighten flow"). The idea was that even a mediocre score should tell the agent exactly what to fix next.

The scoring rules were calibrated to be harsh:

- Default to 3 (Mediocre) unless there is strong evidence to go higher
- 5 should be very rare, only if it would impress a professional
- Any jitter, clutter or ugly pacing scores 2 or lower
- GREAT only if: no dimension at or below 2, at least two 5s, median at or above 4

Without this rubric the agent would screenshot its output, say "looks good" and move on. Every fucking time. It did not matter how bad the output was. The model would find something positive to say about it and declare victory. With the anchored rubric, the agent would actually identify specific problems and attempt fixes. Self-assessment without anchored criteria is just the model jerking itself off. You need to define "good" with enough precision that it cannot wiggle out.

---

## Planning as a control plane

The `update_plan` tool was not a scratchpad. It was a gate on execution. The status model was deliberately constrained:

```python
class StepStatus(str, Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
```

At most one step could be `in_progress` at a time. The tool schema enforced this at the API level so the model could not quietly skip ahead or mark multiple steps active. The runtime could inspect the plan, enforce completion gates and prevent the agent from declaring itself done while items were still pending.

Before this, the agent's workflow was: understand everything, build everything, judge everything, all in one turn. It felt productive. It was chaos. The philosophy shift that actually mattered was making the agent behave more like an architect and less like a frontend dev who just wants to see pixels on screen.

After planning became operational the loop was:

1. Read the request
2. Scope one concrete step
3. Act through tools
4. Validate
5. Advance or retry the failed step

Boring loop. Boring loops converge.

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

There were also nudges. When the agent had not attempted a patch in a while the runtime would inject a message into the context: try writing something. And a deadline nudge when past 80% of the step budget. These are not elegant. They work the same way pressure works on people: stop overthinking, start shipping.

---

## Context management: the quiet money pit

This is the boring part that nobody writes about but that eats your budget alive. Every turn, the full conversation history goes back to the API. Tool outputs, reasoning, patch text, screenshot base64 strings. It adds up fast on a mini model budget.

The first thing I did was cap tool output to 80 lines. Truncate the rest, append a "N more lines truncated" message. For `shell` output this was fine. For `read_file` it was fine because I already forced view ranges. But for `apply_patch` it was a disaster. Successful patches were being included verbatim in the conversation history. The model would read back its own patches every turn, burning tokens on content it already knew. So I started stripping patch content from the history after successful application, replacing it with a short "apply_patch (patch omitted after successful application)" stub.

The second problem was more subtle. I had an `update_understanding` tool that let the agent persist notes across turns. And a `update_plan` tool for the build checklist. Both got injected into the system prompt every turn. The question was: where in the prompt do you put them?

This matters because of prefix caching. OpenAI caches the prefix of your prompt, so if the first N tokens are identical across turns, you get a cache hit and pay less. If your system prompt keeps changing at the top because the understanding or plan is shifting, you bust the cache every turn. I ended up structuring the prompt so the static instructions came first (the big 400-line build prompt, tool schemas, aesthetics guidelines) and the dynamic state (current understanding, current plan, step budget) came at the end. That way the expensive static prefix gets cached and only the tail changes between turns.

I also bumped `MAX_CONVERSATION_HISTORY` from 10 to 20 to 50 over the course of the month, and eventually added support for OpenAI's `previous_response_id` field so I could send only the latest tool output instead of the entire conversation. The model still had access to the full history through the response chain, but I was not paying to resend it every turn.

None of this is glamorous. But when you are running a mini model and each run is 30-50 turns, the difference between smart context management and naive context management is the difference between a $2 run and a $15 run.

---

## What bad runs actually looked like

The concrete patterns that kept forcing the architecture forward:

**The planner solved everything at once.** First step assumed a finished architecture. Remaining steps were filler. Fix: one active step at a time, forced status progression.

**The edit surface exploded.** Fixing one label rewrote unrelated animation code. New drift introduced while solving old bugs. Fix: structured patches with bounded operations.

**Source confidence was false confidence.** Code that looked coherent rendered into overlapping chaos. Fix: screenshot validation and layout audit as non-negotiable phases.

**The model re-read everything constantly.** Same file, same range, same expensive tokens. Fix: read caching with mtime comparison. The runtime checked whether a file had actually changed on disk before serving it again:

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

**Recovery meant scorched earth.** Every failure triggered a full rewrite instead of a targeted fix. Fix: a patch grammar that made repair cheaper than regeneration.

---

## Three weeks, zero visuals

The first month of this project produced no visual explainers. None. What it produced was infrastructure. A driver loop. A tool registry. A custom patch format. A plan tool with status gating. A browser screenshot tool that was not good enough, which spawned a layout auditor and a flow guardrails checker that were. A play-and-screenshot tool with a seven-dimension judge rubric. Loop detection. Read caching. Efficiency nudges. A build prompt that grew from 26 lines to 400+ lines.

After all of that I had exactly one run good enough to preserve as a reference. One. I saved the full HTML output, the execution trace and a design doc explaining why that particular run was good. That bundle became the standard. Every future iteration had something concrete to beat instead of a feeling to chase.

The instinct when starting a project like this is to go straight at the visual output. Point the model at a codebase, give it PixiJS, tell it to build something beautiful. That does not work. Not because the model cannot write PixiJS code, it absolutely can, but because without infrastructure to constrain, validate and iterate, every run is a coin flip. And I do not know about you, but I am not interested in a system where quality is determined by luck.

The first month taught me that the interesting engineering is not in the generation. It is in everything that wraps the generation:

**Tool boundaries beat prompt engineering.** Every tool I added that performed a deterministic check (layout audit, flow guardrails, schema validation) reduced the model's error rate more than any prompt refinement I tried. The pattern: if a check can be done mechanically, do it mechanically. Do not ask the model to be careful. Make carelessness fail loudly.

**Separation of concerns applies to agent workflows too.** Plan mode and build mode exist for the same reason you separate reads and writes in a database. Letting the agent explore and construct simultaneously produces the AI equivalent of a dirty read. It builds on assumptions it has not validated.

**The model will rationalize visual quality.** Screenshots alone do not work. The agent looks at a broken layout and explains why it is actually fine. You need structured audits that return numbers. Overlap IoU. Contrast ratios. FPS samples. Numbers do not negotiate.

The system did not start with a visual. It started with a harness. And that harness took a solid month to build before it could produce anything worth looking at.

The single `index.html` outputs from this era were promising at first glance. Some of them actually ran. Some of them even looked decent. But they were a nightmare to maintain. The agent would load PixiJS, GSAP, Tailwind, and AlpineJS all from CDN in one file, and half the time the CDN imports would fail or conflict. The files got huge, which meant the agent needed enormous context windows just to patch them. And because everything lived in one file, a fix to the animation code could break the control wiring three hundred lines away. These problems were already obvious by the end of the first month, but I did not have a good answer yet.

In Part 2 I will cover what happened when the agent started actually generating simulators with this harness, and why the single-file PixiJS approach turned out to be the wrong architecture for what I was trying to build.
