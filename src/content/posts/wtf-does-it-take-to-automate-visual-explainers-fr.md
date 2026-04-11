---
title: "WTF Does It Take to Automate Visual Explainers fr"
summary: "I spent a year hand-building visual explainers in Cursor. Then I tried to automate it with AI. The first month was all agent infrastructure and zero visuals."
publishedOn: 2026-04-05
draft: true
tags:
  - ai
  - agents
  - software-engineering
  - build-in-public
featured: true
---

For about a year I'd been hand-building interactive visual explainers for blog posts and showcasing systems at work using Cursor IDE. These are the kind of things where you take a complex system like Apache Kafka's consumer group protocol or an LSM tree's compaction cycle and turn it into a guided animated walkthrough. One stage at a time, a 3D visual showing the data structure on the left, a structured explanation panel on the right, audio narration tying it together. They're effective for teaching. They're also very time-consuming to build by hand.

Every time I finished one, the same thought: this is a lot of manual effort for something an AI should be able to do.

So in August 2025 I decided to find out. The project — `spec_sim` — would eventually grow into a spec-driven framework with 62 reusable visual components, a semantic validator, a portrait registry, audio integration and a request-to-app generation pipeline. Seven months, 326 commits across 90+ branches, 77,000+ lines of code. But I'm getting ahead of myself.

At the time, tools like Codex and Claude Code didn't exist yet or weren't widely available. There was no off-the-shelf agent runtime I could point at the problem. If I wanted an AI agent that could reliably generate visual explainers I'd have to build the harness myself.

This is the story of that build — the architectural dead ends, the workflow pivots, the moments where the right abstraction changed everything and the long stretches where nothing looked like progress from the outside. I'll be writing it as the project continues to evolve.

This first post covers the least glamorous part: the month I spent building none of the visual stuff and instead built a runtime that could keep an AI agent from lying to itself.

## The default loop is broken

Here's what actually happens when you point a model at a codebase and say "build me a visual explainer." It generates something. Something that looks plausible. You ask it to improve and it rewrites half the file. The layout breaks. It explains why the layout is actually fine. You start over.

That loop — generate, drift, rationalize, restart — is the default behavior of every AI coding workflow I've tried. The project only became interesting once I stopped tolerating it.

## Starting from zero

The project started on Aug 16, 2025 with LLM clients, sandbox utilities and logging helpers. Pretty standard scaffolding. By Aug 22, four days and several painful iterations later, one commit message finally read: *"Increase token limit to get non truncated output, the agent finally works."* Between those two points were messages like *"Working spec_sim planner but gives up too fast"* and *"Neat logging but keeps on going for too long."*

That's what early agent development actually looks like. Not a montage. Just a lot of "it works except it doesn't."

## The tool surface had to shrink

The first real architectural decision was making the agent operate through a narrow set of explicit tools. Each tool was defined as a strict JSON schema and registered with the model at runtime. No freeform code generation, no open-ended file manipulation:

- **Shell execution** with visible commands and capped output (`MAX_OUTPUT_LINES_FOR_TOOL_CALL = 80`)
- **Structured patches** with add, update, delete and move operations instead of freeform rewrites
- **File reads** with view ranges so the model couldn't read 10,000 lines to "understand context"
- **Plan updates** with discrete steps and explicit statuses
- **Browser inspection** where rendered output served as evidence, not assumption

The tool registry made the boundaries concrete. A single function selected which tools the agent could access based on its current task mode:

```python
def get_tools(task_mode: str = "plan"):
    """Get the list of available tools based on the task mode."""
    base_tools = [
        SHELL_TOOL_SCHEMA,
        APPLY_PATCH_TOOL,
        READ_FILE_SCHEMA,
    ]

    if task_mode == "build":
        base_tools.append(PLAN_TOOL)
        base_tools.append(PLAY_AND_SCREENSHOT_SCHEMA)
        base_tools.append(validate_html_schema())
    else:
        base_tools.append(UPDATE_KNOWLEDGE_TOOL)

    return base_tools
```

When the model has unlimited freedom to edit, its favorite recovery strategy is regeneration. Something broke? Here's a new version of the whole file. More things break? Another new version. You get motion without convergence.

Structured patches forced a different question: what exactly needs to change? The moment this clicked, patch accuracy jumped dramatically. The change refined the patch format definition and rewrote the build prompt — 70 lines in the patch logic, 137 in the prompt. Getting the patch format right changed the economics of every fix from that point forward.

## Planning as a control plane

The plan tool was not a scratchpad. It was a gate on execution. The status model was deliberately constrained to an enum with exactly three values:

```python
class StepStatus(str, Enum):
    """Enumeration of allowed step statuses."""

    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
```

At most one step could be `in_progress` at a time. The tool schema enforced this at the API level so the model couldn't quietly skip ahead or mark multiple steps active:

```python
PLAN_TOOL = {
    "type": "function",
    "name": "update_plan",
    "description": (
        "Updates the task plan.\n"
        "Provide an optional explanation and a list of plan items, "
        "each with a step and status.\n"
        "At most one step can be in_progress at a time."
    ),
    "parameters": {
        "type": "object",
        "additionalProperties": False,
        "required": ["plan"],
        "properties": {
            "explanation": {"type": "string"},
            "plan": {
                "type": "array",
                "items": {
                    "type": "object",
                    "required": ["step", "status"],
                    "properties": {
                        "step": {"type": "string"},
                        "status": {
                            "type": "string",
                            "enum": ["pending", "in_progress", "completed"],
                        },
                    },
                },
            },
        },
    },
}
```

The runtime could now distinguish between a planning failure, an execution failure and a validation failure.

Before this the agent's workflow was: understand everything, build everything, judge everything — all in one turn. It felt productive. It was chaos. One commit message captures the entire philosophy: *"Make agent behave more like architect and less like frontend dev."*

After planning became operational the loop was simple:

1. Read the request
2. Scope one concrete step
3. Act through tools
4. Validate
5. Advance or retry the failed step

Boring loop. Boring loops converge.

## The browser had to see what the model couldn't

The browser tool and screenshot integration arrived in late August. This was when rendered inspection became its own phase.

Here's the trap with visual software: the code can parse, compile and look internally consistent while rendering into complete visual garbage. The agent couldn't just check the source and declare victory. It had to actually look at the output through Playwright screenshots.

This split a vague "the model messed up" into specific failures:

| Failure type | What went wrong |
|---|---|
| Planning failure | Wrong step scoped |
| Context failure | Wrong files read |
| Patch failure | Edit too broad |
| Render failure | Source looks fine, output is broken |

Once failures got specific, fixes got specific.

## What bad runs actually looked like

The concrete patterns that kept forcing the architecture forward:

**The planner solved everything at once.** First step assumed a finished architecture. Remaining steps were filler. Fix: one active step, forced status progression.

**The edit surface exploded.** Fixing one label rewrote unrelated animation code. New drift introduced while solving old bugs. Fix: structured patches with bounded operations.

**Source confidence was false confidence.** Code that looked coherent rendered into overlapping chaos. Fix: screenshot validation as a non-negotiable phase.

**The model re-read everything constantly.** Same file, same range, same expensive tokens. Fix: read caching with mtime comparison. The runtime checked whether a file had actually changed on disk before serving it again, skipping redundant reads when the modification timestamp matched:

```python
def _should_skip_read_file(
    conversation_history, normalized_path, normalized_view_range
) -> bool:
    """Determine if a read_file request can be skipped because it is cached."""
    snapshot, entry = _find_recent_read_history_entry(
        conversation_history, normalized_path, normalized_view_range
    )
    if not snapshot or not entry:
        return False
    if not _read_entry_has_cached_content(entry):
        return False
    previous_mtime = snapshot.get("mtime")
    if previous_mtime is None:
        return False
    current_mtime = _get_file_mtime_if_exists(normalized_path)
    if current_mtime is None:
        return False
    return abs(current_mtime - previous_mtime) < 1e-9
```

**Recovery meant scorched earth.** Every failure triggered a full rewrite instead of a targeted fix. Fix: patch grammar that made repair cheaper than regeneration.

## Eighteen days of tightening the loop

From late August through mid-September I didn't ship a single new feature or visual improvement. The entire focus was making the system controllable enough to iterate on.

It started with the output quality problem. I added aesthetic criteria to the prompt then simplified the build prompt and bolted on a judge rubric so the agent could score its own output instead of vibes-checking. The same week I overhauled the patch format — that's when patch accuracy jumped and every subsequent fix became cheaper than regeneration.

Then came the quality anchoring work. I preserved the best run the system had produced — the full HTML output, the execution trace and a design rationale doc explaining why that run was good. That bundle became the reference standard. Every future iteration had something concrete to beat instead of a feeling to chase.

Next I started cataloguing failure patterns. Common pitfalls like overlapping elements, labels fighting with geometry and animations that competed instead of sequencing got extracted into design guidelines. Not suggestions. Rules. The kind of rules that prevent the same class of bug from recurring across runs.

The last piece was separating the monolithic prompt into three independent concerns: build instructions (what to do), visual design guidance (how things should look) and the judging rubric (how to score the result). That separation meant I could tighten layout rules without touching the build sequence or harden the rubric without changing generation behavior. Each concern could evolve on its own.

## Why this came before the visuals

This phase has no pretty screenshots. It produced 9,331 lines of infrastructure across 59 files. The visible artifact was an agent that could plan, patch, validate and self-correct without spiraling.

Looking back this is the part of the project that's easiest to miss from the outside. Later there are obvious things to point at — 3D scenes, the explainer shell, 62 data portrait components. This phase has none of that. But without it everything that came after would have been volatility cosplaying as creativity.

I didn't start by building an explainer generator. I started by building a runtime that could keep an agent honest. Every run would look different without this work. That's not the same thing as the system improving.
