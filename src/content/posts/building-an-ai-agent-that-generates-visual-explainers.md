---
title: "I Built an AI Agent That Generates Visual Explainers. Here's What Actually Worked."
summary: "The real engineering behind spec_sim: an agentic system that turns repository specs into interactive Three.js explainer apps"
publishedOn: 2026-04-10
draft: true
tags:
  - ai-agents
  - llm-engineering
  - three-js
  - developer-tools
  - software-engineering
featured: false
---

The pitch sounds simple. Point an AI agent at a codebase, tell it what to explain, and get back an interactive visual walkthrough of how that system works -- stage by stage, with animated data structures, an explanation panel, and navigation controls. A teaching tool generated from source code.

The reality involved building a custom agent runtime, a structured planning system, a visual QA pipeline with automated screenshot grading, a Three.js voxel rendering framework, a catalog of 60+ reusable data portrait components, a JSON schema contract for stage specs, and a code generation workflow that went through at least four complete architectural rewrites before it started producing outputs I was not embarrassed by.

This is the story of `spec_sim`. Not the polished version. The version where half the interesting work was figuring out what the agent should not be allowed to do.

---

## Why I started this

I maintain visual explainer content for open source projects. The process was always the same: read the spec, sketch a mental model, hand-build an interactive animation that walks through the system stage by stage. It took days per explainer. Most of that time was not creative work. It was mechanical: laying out data structures, wiring up transitions, making sure labels did not overlap.

The hypothesis was that an LLM with access to the right tools could do the mechanical parts. Give it the spec, give it a shell, give it a browser, give it the ability to edit files, and let it build the visual. I would handle the creative direction.

That hypothesis was right in principle and wrong in every implementation detail.

---

## The agent runtime came before the visuals

The first thing I built was not a visual. It was a driver loop. `driver.py` is the core of `spec_sim` -- a turn-based agent runtime that manages conversation history, tool dispatch, token tracking, and exit conditions.

```python
def run_agent(
    user_request: str,
    provider: str,
    model: str | None,
    max_turns: int,
    project_path: str,
    prompt_file: str,
    task_mode: str = "plan",
    ...
) -> None:
    """Interaction loop with conversation history and tool management."""
    conversation_history: list[dict] = []

    for _ in range(max_turns):
        turn_num = _ + 1
        response = get_next_command_with_execution(
            conversation_history,
            system_prompt,
            provider, model, task_mode,
            ...
            turn_num=turn_num,
            max_turns=max_turns,
        )

        if response.get("done"):
            break
        # ... history management, loop detection, etc.
```

Two modes: **plan** and **build**. Plan mode lets the agent explore, reason, and produce a design document. Build mode gives it patching tools and a visual QA loop. The separation matters because letting a model plan and build simultaneously produces chaos. It optimizes for whatever looks like progress, which usually means writing code before understanding the problem.

### The tool surface

The agent gets a constrained set of tools, not an open terminal:

| Tool | What it does | Why it exists |
|------|-------------|---------------|
| `shell` | Execute commands | The escape hatch. Necessary but monitored. |
| `apply_patch` | Structured file edits | Safer than raw writes. Parsing catches malformed patches. |
| `read_file` | Read with caching | Avoids redundant re-reads when files haven't changed. |
| `update_plan` | Structured plan updates | Forces the agent to track progress explicitly. |
| `play_and_screenshot` | Run app, capture frames | The visual QA gate. |
| `validate_html` | Headless browser validation | Catches JS errors, console noise, structural problems. |
| `update_knowledge` | Persistent scratchpad | Lets the agent carry context across turns without stuffing the conversation. |

The key insight was that every tool I added to the agent was a responsibility I was removing from it. `apply_patch` means it does not need to figure out how to write files safely. `update_plan` means it does not need to remember what it already did. `validate_html` means it does not need to guess whether the output compiles.

---

## Planning as a control surface

The planning system is not a prompt trick. It is a structured tool with an explicit schema:

```python
class StepStatus(str, Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

PLAN_TOOL = {
    "type": "function",
    "name": "update_plan",
    "description": (
        "Updates the task plan.\n"
        "At most one step can be in_progress at a time."
    ),
    "parameters": {
        "type": "object",
        "properties": {
            "plan": {
                "type": "array",
                "items": {
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

The constraint that only one step can be in progress at a time is doing real work. Without it, the agent marks three things in progress, works on whichever feels easiest, and abandons the rest. With the constraint, the plan becomes a state machine. The driver can inspect it, enforce completion gates, and prevent the agent from declaring itself done while items are still pending:

```python
def _can_exit_now() -> bool:
    if task_mode == "plan":
        return True
    return _phases_1_to_3_completed() or not _plan_has_incomplete_items()
```

If the agent tries to emit a completion signal while the plan has pending items, the driver rejects it and tells it to keep going. This is not sophisticated. It is a mechanical check. It caught the agent trying to bail early on roughly 40% of runs.

---

## Read caching: the boring optimization that mattered

One of the more tedious problems was the agent re-reading the same files every turn. An LLM does not have a great sense of what it already knows. So it would call `read_file` on `index.html` every single turn, burning context window and tokens.

The fix was a file modification time cache:

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

If the file has not been modified since the last read, the driver returns a "use cached content" message instead of re-reading. Simple. Saved about 15-20% of token budget on longer runs.

---

## Visual QA: the hard part

Here is the thing nobody tells you about AI-generated visual output: you cannot prompt your way to quality. I tried. Better prompts made the agent write better code. The output still looked mediocre because the agent had no way to see what it built.

The breakthrough was `play_and_screenshot`. This tool launches the generated app in a headless browser, captures a sequence of screenshots as the animation plays, and sends them back to the agent as images. The agent then scores the output against a rubric with seven dimensions:

```
1) Clarity (story/readability)         -- 1-5
2) Smoothness (feel of motion)         -- 1-5
3) Rhythm & Cadence (tempo/beat)       -- 1-5
4) Consistency of Style                -- 1-5
5) Feedback & Responsiveness           -- 1-5
6) Balance & Composition               -- 1-5
7) Delight Factor (polish/finish)      -- 1-5
```

The scoring rules were calibrated to be harsh:

- Default to 3 (Mediocre) unless there is strong evidence to go higher.
- 5 should be very rare -- only if it would wow a professional.
- Any jitter, clutter, or ugly pacing scores 2 or lower.
- GREAT only if: no dimension at or below 2, at least two 5s, median at or above 4.

This sounds like a lot of ceremony for an automated process. It is. And it was necessary. Without the rubric, the agent would screenshot its output, say "looks good", and move on. With the rubric, it would actually identify specific problems and attempt fixes.

### The phase gate

The driver enforces a hard rule: the agent cannot call `play_and_screenshot` until phases 1 through 3 of the plan are complete. If it tries, the tool returns a blocked response:

```python
if task_mode == "build" and not _phases_1_to_3_completed():
    blocked_msg = (
        "You are not allowed to call these tools until all items "
        "till Phase 3 are completed."
    )
    return {..., "user_feedback": blocked_msg, "executed": False}
```

This prevents a common failure mode: the agent writes two lines of HTML, screenshots it, decides it is bad, rewrites everything, screenshots again, and burns through its turn budget without making real progress. Build first, then inspect.

---

## The Three.js pivot

The early versions of spec_sim generated vanilla HTML/CSS/JS. PixiJS was the first real rendering layer. It worked for simple animations. It fell apart for anything with depth, camera control, or material complexity.

The pivot to Three.js was not a cosmetic upgrade. It was a workflow change. With the old system, every generated output was a standalone HTML file. With Three.js, the agent works inside a **seeded Vite + React + Three.js template** called `bloom_vite_template`. The template ships with:

- A React Three Fiber canvas with post-processing (bloom, tone mapping)
- A split-pane explainer shell (3D stage + explanation panel + navigation)
- A data portrait component catalog
- A shared animation engine
- Camera fitting utilities
- Typography and design tokens

The agent does not create this infrastructure. It fills it in. That is the single biggest architectural decision in the project: **constrain what the agent generates** so that quality comes from the framework, not the model's taste.

### The Codex driver

The Three.js era also introduced `driver_codex.py`, a separate driver optimized for working with OpenAI's Codex execution environment. It adds:

- **Session directories**: Each run gets a timestamped directory under the target repo. Design artifacts, progress logs, and feature files live there. Runs are resumable.
- **Phase separation**: Design, build, and QA are distinct phases with explicit handoffs via `spec_sim_features.json` and `spec_sim_progress.md`.
- **Template bootstrapping**: The Bloom Vite template is auto-copied into the session directory with npm install already run.
- **Dev server management**: A Vite dev server is spun up for live preview, with PID tracking for cleanup.

```python
TEMPLATE_DIR = ROOT / "templates" / "bloom_vite_template"

def _bootstrap_design_dir(design_dir: Path) -> None:
    copied = _copy_template_into_design_dir(design_dir)
    _npm_install(design_dir)
```

The Codex driver also inlines the full visual guidance document into the system prompt. No external file references. The agent gets the complete design language -- tokens, typography, material defaults, camera rules, bloom settings -- every turn.

---

## Data portraits: the semantic layer

The early Three.js outputs were voxel scenes. They looked interesting. They did not explain anything. A cluster of glowing cubes does not communicate "this is a B+ tree doing a range scan."

**Data portraits** solved this. Each portrait is a React Three Fiber component that knows how to render a specific data structure with animation:

| Portrait | What it shows |
|----------|-------------|
| `BloomFilter` | Bit-array hashing, false positives |
| `LSMTree` | Memtable flush, level compaction |
| `BPlusTree` | Range scans, leaf chain linking |
| `ConsistentHashRing` | Key routing, virtual nodes, rebalancing |
| `DAG` | Dependency graphs, topological sort |
| `MergeSort` | Divide-and-conquer splits, merge passes |
| `Pipeline` | Multi-stage data flow |
| `Queue` / `Stack` / `Deque` | Standard structure operations |
| `Heatmap` / `Histogram` | Distribution and density |

There are 60+ of these in the catalog at `/templates/bloom_vite_template/src/scenes/data-portraits/`. Each one is a self-contained TSX component that accepts `portraitProps` and renders an animated visualization. The `VoxelBlock` primitive underpins most of them:

```tsx
export function VoxelBlock({
  hue,
  size = [2.6, 1.6, 2.6],
  position = [0, 0, 0],
  label,
  highlighted = false,
  opacity = 0.92,
  emissive = { idle: 0.8, active: 1.35 },
}: VoxelBlockProps) {
  const palette = useMemo(
    () => buildPalette(hue, highlighted ? 0.12 : 0),
    [hue, highlighted]
  );
  // ...
}
```

The critical rule from the visual guidance: **each focused stage should visually answer "what does the data look like at this step?"** Not what machine processes it. Not what server holds it. What the data itself looks like. That reframing is what turned the outputs from abstract art into actual explanations.

---

## The stage spec contract

The final form of spec_sim's output is not code. It is a JSON stage spec. The agent generates a JSON file conforming to a strict schema, and the runtime materializes it into a full interactive explainer.

```json
{
  "pipelineName": "SQLite Query Execution",
  "pipelineDescription": "How a SQL query travels through SQLite...",
  "stages": [
    {
      "id": "tokenize",
      "title": "Tokenizer",
      "subtitle": "Breaking SQL text into tokens",
      "hue": "#39ff14",
      "portraitType": "TextBlock",
      "portraitProps": {
        "text": "SELECT * FROM users WHERE id = 42",
        "highlightRanges": [[0, 6], [7, 8], [14, 19]]
      },
      "explanation": {
        "summary": "The tokenizer scans the raw SQL string...",
        "whatHappens": ["Characters are consumed left to right", "..."],
        "keyConcepts": ["Lexical analysis", "Token classification"],
        "inputData": "Raw SQL string",
        "outputData": "Token stream",
        "deepDive": "SQLite's tokenizer is hand-written..."
      }
    }
  ]
}
```

The schema is strict. Every stage needs an `id`, `title`, `subtitle`, `hue`, `portraitType` (from the fixed catalog), `portraitProps`, and a full `explanation` block. The driver validates the generated spec before the runtime touches it:

```python
def _validate_stage_spec_file(path: Path) -> None:
    raw = json.loads(path.read_text(encoding="utf-8"))

    for idx, stage in enumerate(stages):
        for field in required_stage_fields:
            if field not in stage:
                raise ValueError(f"stages[{idx}].{field} is required.")
        stage_id = stage["id"]
        if stage_id in seen_ids:
            raise ValueError(f"Duplicate stage id: {stage_id}")
        # ... text normalization, field type checks, etc.
```

The validation is deliberately pedantic. It catches escaped newlines in text fields. It rejects duplicate stage IDs. It requires every explanation field to be non-empty. The agent gets a clear error message and can fix the spec in the next turn.

This is the shift that mattered most: **the agent generates a spec, not an app**. The app already exists as a template. The spec tells it what to show. The validation ensures the spec is correct before anything renders. The portrait catalog ensures the visuals are consistent. The agent's creative scope is constrained to choosing the right portrait for each stage, writing good explanations, and picking sensible props.

---

## The app generator: one-shot from request to explainer

The `app_generator/driver.py` is the productized version. Given a GitHub repo URL and a natural language request, it:

1. Creates a new session directory
2. Bootstraps the Bloom Vite template
3. Reads the target repo's README and source code
4. Generates a JSON stage spec in one pass
5. Validates the spec against the schema
6. Syncs the spec to the public runtime path

```python
def generate_app_payload(
    *, user_request: str, target_repo: str, session_dir: Path,
) -> Dict[str, Any]:
    prompt = codex_driver._append_visual_guidance(
        load_prompt(
            PROMPT_PATH,
            user_request=user_request,
            target_repo=str(target_path),
            stage_spec_path=str(stage_spec_path),
            stage_schema_path=str(codex_driver.STAGE_SCHEMA_PATH),
        )
    )
    # ...
```

The prompt forces the agent to read source code, not just docs. The available portrait types are listed exhaustively in the prompt with descriptions of what each one is good for. The agent picks from the menu rather than inventing from scratch.

---

## The trigger UI: operator surface

The last piece is a Next.js operator UI (`trigger-ui/`) that lets you submit jobs and watch them run. You paste a GitHub URL, describe what you want explained, and the system queues a generation job. The UI shows live progress events, job status, and download links for the generated output.

```tsx
type Job = {
  id: string;
  githubUrl: string;
  userRequest: string;
  status: JobStatus;  // "queued" | "running" | "completed" | "failed"
  progress: number;
  events: JobEvent[];
  outputs: JobOutput[];
  previewAvailable: boolean;
};
```

This is not sophisticated infrastructure. It is a thin wrapper that makes the system usable by someone who is not me, running from a terminal, remembering CLI flags.

---

## Loop detection and efficiency nudges

One of the less glamorous but important pieces is making sure the agent does not get stuck. Two mechanisms handle this.

**Loop detection** compares the last N actions to the preceding N. If the normalized signatures match, the agent is repeating itself:

```python
def detect_loop(history, pattern_length=3) -> bool:
    recent = history[-pattern_length:]
    prev = history[-2 * pattern_length : -pattern_length]
    recent_sig = [_normalize_action_for_loop(h.get("action", "")) for h in recent]
    prev_sig = [_normalize_action_for_loop(h.get("action", "")) for h in prev]
    return recent_sig == prev_sig
```

**Efficiency nudges** are injected into the context when the agent hasn't patched in a while:

```python
actions_since_patch = 0
for entry in reversed(conversation_history or []):
    if "apply_patch" in (entry.get("tool_action") or "").lower():
        break
    actions_since_patch += 1
    if actions_since_patch >= 6:
        _send_efficiency_reminder(
            "You haven't attempted an apply_patch in a while. "
            "If you feel confident about the fix, draft a small change now."
        )
        break
```

There is also a deadline nudge when the agent is past 80% of its turn budget:

```python
if turn_num / max_turns > 0.8:
    context.append({
        "role": "user",
        "content": f"Turn {turn_num}/{max_turns}. If you can finalize now, do so."
    })
```

These are not elegant. They are effective. The agent responds to pressure the same way a human does: it stops over-thinking and starts shipping.

---

## The visual design language

The generated outputs follow a strict design system defined in `threejs_visual_guidance.md`. This is not optional aesthetic preference. It is a set of hard rules:

**Color tokens**: Neon green (`#39ff14`), hot pink (`#ff2d95`), electric blue (`#00f0ff`), warning yellow (`#ffe600`) over a void-dark background (`#0a0a0f`). Every accent maps to a semantic purpose.

**Material defaults**: Roughness `0.1-0.25`, metalness `0.65-0.85`. Emissive as state signal with a shared ladder: idle `0.6`, focused `1.0`, peak `1.2`, dimmed `0.2`.

**Bloom post-processing**: `intensity={0.42}`, `luminanceThreshold={0.22}`, `luminanceSmoothing={0.35}`, `mipmapBlur`. These values are not suggestions. They are the defaults in the template.

**Camera contract**: Front-on default. Distance multiplier `0.3` on fitted distance. Compute from canvas render area, not window dimensions. Lock azimuth for explainer views.

**Voxel policy**: Build from `BoxGeometry` cubes only. No smooth primitives for stage-defining forms. Shapes represent data, not machines.

The entire guidance document is inlined into the system prompt every turn. The agent cannot claim it forgot the rules.

---

## What I got wrong

**Trusting the model's visual taste.** The first few months were spent trying to make the agent produce good-looking output through prompting alone. That does not work. Visual quality came from framework constraints, not model capability.

**Not separating plan and build early enough.** Letting the agent plan and build in the same turn creates a feedback loop where it plans around what it knows how to build rather than what needs to be built. The plan/build separation should have been day one.

**Underestimating the importance of validation utilities.** Every tool I added that performed deterministic checks -- HTML validation, layout audits, flow guardrails, schema validation -- reduced the model's error rate more than any prompt engineering I did. The pattern is simple: if a check can be done mechanically, do it mechanically. Do not ask the model to be careful. Make carelessness fail loudly.

**Free-form code generation was the wrong output format.** Generating full applications from scratch meant the agent was responsible for infrastructure, styling, animation, data modeling, and content -- all at once. Moving to JSON stage spec generation meant the agent was only responsible for content decisions. Everything else was handled by the template. That single change improved output quality more than anything else.

---

## My take

The strongest technical thesis from building spec_sim is not about AI or agents. It is about **constraints as leverage**. Every time I removed a degree of freedom from what the agent could do -- restricting tools, enforcing plan schemas, requiring phase gates, providing a seeded template, limiting output to a JSON spec -- the quality of the output went up.

This runs counter to the instinct most people have about AI systems, which is that more capability equals better results. In practice, the opposite was true. A less capable agent with tighter constraints produced better work than a more capable agent with freedom.

The second insight is that **visual output needs visual QA**. You cannot assess visual quality from code. You have to render it, screenshot it, and judge it. Building that feedback loop into the agent was the difference between output I threw away and output I could actually use.

The third is that the real product is the framework, not the generation. spec_sim started as "an AI that builds visuals." It ended as "a framework for interactive explainers that an AI can fill in." The distinction matters because the framework is what carries quality. The AI is what carries speed.

The codebase lives at `/projects/spec_sim` inside a larger experiment repo. It is not a product. It is a working system that taught me more about AI engineering than any paper I have read. The main lesson: the hard part of building with LLMs is not the LLM. It is everything around it.
