---
title: "Automating Visual Explainers, Part 2: The Single File Trap"
summary: "The harness could finally build something, but the first real simulators taught me that better prompts do not fix a visual system with too much freedom."
publishedOn: 2026-05-16
draft: false
tags:
  - ai
  - agents
  - software-engineering
  - build-in-public
featured: false
---

In Part 1, I covered the month where I thought I was building visual explainers and mostly ended up building an agent harness that could stop itself from lying quite so confidently.

The next phase looked more satisfying from the outside because the system finally produced actual simulators. There were dark canvases, glowing nodes, moving particles, side panels, play buttons and enough motion that I could convince myself I had crossed the line from infrastructure into product.

That feeling lasted right up until I tried to make the outputs consistently good.

The painful lesson was that a simulator can run, animate and still be structurally wrong. The code can be valid, the screenshots can look busy and the model can write a very confident review of its own work, but none of that means the thing teaches well.

The single file era was where I learned that visual quality is not one problem. It is layout, labeling, motion, state, pacing, runtime validation, stale context and the model's endless willingness to rationalize whatever it just made.

---

## A working simulator is not the same thing as a useful one

The first successful outputs were all `index.html` files.

That decision made sense at the time partly because the public demos were advertising the same shape. OpenAI had a [single page website example](https://platform.openai.com/docs/examples/default-single-page-website) where the output was an HTML file with embedded JavaScript and CSS while Anthropic's artifact docs listed [websites as single page HTML](https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them). A single file meant no build system, no dependency install, no project scaffolding and no place for the agent to get lost. I wanted the shortest path between a design document and pixels on screen.

The stack was intentionally boring:

```markdown
# Tech Stack
  - Tailwind via CDN
  - GSAP 3.12.2 + PixiPlugin
  - PixiJS 7.4.2
  - pixi-filters@5 (GlowFilter)
  - AlpineJS 3.x
  - No build step; everything in one file with CDN imports.
```

This was the correct move for proving that the harness could generate something at all. It was also the wrong long term architecture, but I only learned that after I watched the agent try to maintain those files.

A single `index.html` starts clean and then quietly turns into mud. Rendering logic sits next to control wiring, state transitions sit next to CSS and animation timelines sit next to DOM lookup code. A fix to label placement can break playback because both live three hundred lines apart inside the same blob.

The agent also had to read huge chunks of the same file to make any change. That made context expensive and brittle. If it missed one earlier helper or one global variable, it would patch the wrong layer and then explain why the new behavior was intentional.

A single file was a great demo format and a terrible editing surface.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-2/single-file-trap.html" width="100%" height="560" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## The visual contract started as taste and became law

At first I kept adding adjectives: cleaner, more polished, more cinematic, better spacing, darker background, stronger hierarchy.

That barely worked because adjectives are not contracts. The model would satisfy them locally while violating the thing I actually cared about. It would make the background moodier and make the labels harder to read. It would add motion and lose the causal path. It would make things pretty and turn the explanation into a screensaver.

So the visual guidance stopped sounding like taste and started sounding like law. Some of it came from browsing product prompts for v0, Lovable, Cursor and similar tools in [`x1xhlol/system-prompts-and-models-of-ai-tools`](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools), but the useful parts only stuck after they mapped to failures I had actually seen.

```markdown
## Quality Bar (hard gates)

* **Hierarchy:** panels/FX above nodes; grid always subtle.
* **Readability:** zero label overlap; AA+ contrast; crisp at 1x/2x DPR.
* **Label coverage:** every world component, control, and metric readout displays a legible text label or legend; unlabeled objects fail review.
* **Motion:** no linear primary moves; clear 3-stage staging per key sequence.
* **Rhythm:** staggered reveals; no mass pop-in.
* **Performance:** >=55 FPS desktop reference without stutter.
```

This is one of those changes that looks like prompt tweaking if you skim it, but it was the beginning of treating the visual output as a constrained artifact with failure conditions.

The key phrase is `unlabeled objects fail review`. That line exists because the model loved naked geometry. It would draw circles, pills, packets and rings, then assume the viewer could infer what they meant from a side panel. That is not how educational visuals work. If something matters or moves, the viewer needs to know what it is while it is moving.

The guidance eventually became blunt:

```markdown
* Every world component (nodes, lanes, particles, controls, readouts) carries an always-visible text label or badge pinned to it. No naked geometry. If it matters or moves, the viewer sees its name/state in words.
```

I did not add this because I enjoy writing strict rules. I added it because every soft version failed. The model will treat "label important things" as optional, but it does not treat "unlabeled objects fail review" the same way.

---

## Layout needed a geometry policy

The first layout fixes were reactive. A label overlapped a node, so I would add a nudge. A panel overflowed, so I would add a clamp. A connection crossed text, so I would route it differently.

That style of repair felt natural because that is how you debug a normal UI. You inspect the current bad case, patch it and move on.

It does not work well with an agent that keeps generating new scenes. Every local nudge becomes a precedent. The model learns that layout is a bag of offsets and special cases, then it starts adding more of them.

The shift was a grid policy:

```markdown
## GRID-FIRST + NO-OVERLAP + LABEL LANES (COMBINED, MANDATORY)

0) Non-negotiables
- All x/y/width/height come from the computed grid - never absolute px.
- No per-item "nudge" offsets; only grid rows/cols and whole-cell sizes.

1) Grid model
- N = item count; cols = max(1, ceil(sqrt(N))); rows = ceil(N/cols)
- slotW = canvas.width/cols; slotH = canvas.height/rows
- stationCols = 4
- stationRows >= 8
```

The important part was not the exact grid math. The important part was forbidding the escape hatch.

There would be no absolute pixel placement for world geometry, no little `+8` offsets because one label felt cramped and no iterative search. The model had to place objects into a small set of lanes and cells. If the layout still failed, the scene had to reflow deterministically instead of accumulating tiny lies.

This made the outputs less clever and much more reliable. I would rather have a slightly rigid layout that never overlaps than a "creative" one where every second run makes the labels fight each other.

---

## The model kept confusing visual richness with explanatory richness

The funniest failure mode from this era was how often the model would make something visually richer and educationally worse.

It would add rails, then labels to the rails, then labels to the labels, then particles flowing over everything. The result looked like a futuristic dashboard from a movie where nobody has to actually use the software.

So I started turning visual preferences into exclusions.

```markdown
# Animation Guardrails
- Keyboard shortcut for Play/Pause.
- Flow-over-Fill: prefer granular, path-traversing motion along links; use gauges only for summaries.
- Curved continuity: connectors are smooth arcs with eased turns. The curves should never cut off each other.
- Asynchronous rhythm: stagger timings/phases; avoid lock-step motion.
- Fluid Animation is Key: The primary goal is a smooth, real-time visual experience that accurately reflects the simulation's state as it changes over time.
```

The interesting phrase there is `Flow-over-Fill`. I had seen too many outputs where a progress bar or gauge became the entire explanation. A gauge can summarize state, but it cannot show why the state changed.

For these explainers, the motion had to carry causality. Packets needed to travel, work needed to accumulate and messages needed to fan out or queue up. The viewer should not have to read a metric and imagine the process because the process should be visible.

This is why the prompt became so opinionated about curves, stagger and rhythm. Those are not just aesthetic choices. They are how the user follows the story without reading every caption.

---

## Browser tools had to move closer to the runtime

The original browser screenshot tool returned images to the model. That helped, but it also created a weird review loop where the model saw frames, narrated what it thought they meant and then patched based on that interpretation.

The browser work moved toward a tool server shape where the runtime could own more of the observation path. The browser helper stopped being just a screenshot wrapper and became part of the validation surface.

```python
def play_and_screenshot(
    url: str,
    play_selector: str = "#playPause",
    wait_ms: int = 800,
    frames: int = 4,
    frame_gap_ms: int = 900,
    viewport_width: int = 1280,
    viewport_height: int = 800,
    out_dir: Optional[str] = None,
) -> Dict[str, Any]:
```

The tool clicked play, captured a sequence and made the temporal behavior inspectable. That changed the review task from "does this screenshot look nice?" to "does the state change over time in a way that matches the claimed story?"

That sounds subtle but it mattered. A static screenshot can hide a lot because a simulator can look correct at rest and fail as soon as playback starts. Capturing multiple frames forced the system to confront motion, not just composition.

The next step was even more useful: route some of that visual review through a dedicated tool path instead of putting all the images back into the main conversation. The more the harness could inspect deterministically, the less the model could turn review into vibes.

---

## I stopped trusting the model's eye

The biggest mindset change in this phase was that I stopped asking the model whether the output was good.

I still used the model to reason about quality, but I stopped treating its self review as evidence by itself. The evidence had to come from somewhere firmer: layout checks, frame sequences, labels, contrast, runtime state and explicit acceptance criteria.

The model is very good at producing a plausible critique and less good at caring whether the critique is anchored to the artifact. If you ask it to review a screenshot, it will review the screenshot. If you ask it whether the screenshot is acceptable, it will often decide that it is close enough.

I eventually realized that close enough was exactly what this system could not tolerate.

The simulator either communicates the causal path or it does not. The labels either stay readable or they do not. The controls either affect the model or they do not. The animation either shows state changing or it decorates a static picture.

Once I framed quality that way, a lot of prompt work became easier. The job was not to make the model more tasteful. The job was to remove places where taste could hide structural failure.

---

## The single file era did its job

I am being harsh on the single file approach because it eventually hit a wall, but it was still the right wall to hit first.

It proved that the harness could generate, patch, run, inspect and improve a visual artifact without me hand editing every frame. It forced the visual rules to become explicit, exposed where screenshots were insufficient and taught me that layout needed deterministic lanes instead of local nudges.

Most importantly, it taught me that the output format was becoming the bottleneck.

The next version needed a real project structure. Not because React or TypeScript magically make explainers better, but because the agent needed a stable environment where the shell, renderer, validation and scene logic were no longer renegotiated on every run.

The single file had been useful as a proving ground, but it was not a foundation.

In Part 3, the project starts moving toward Codex based harness, a seeded workspace and the first version of a real template.
