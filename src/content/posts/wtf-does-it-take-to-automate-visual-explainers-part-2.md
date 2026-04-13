---
title: "Automating Visual Explainers, Part 2: Why PixiJS Was the Right Wrong Choice"
summary: "The agent could finally generate simulators. They looked great and nobody understood them. This is the story of fighting PixiJS layouts, inventing a grid system from scratch and discovering that spatial correctness and explanatory correctness are completely different problems."
publishedOn: 2026-04-14
draft: true
tags:
  - ai
  - agents
  - software-engineering
  - build-in-public
featured: false
---

In [Part 1](/blog/wtf-does-it-take-to-automate-visual-explainers-part-1) I built the harness: plan/build separation, phased execution, mechanical gates, loop detection, tool feedback that teaches instead of just failing. By the end of that first month I had exactly one good run to show for it. The harness worked. The output was a single `index.html` file loaded from CDN with PixiJS for rendering, GSAP for animation and Tailwind for layout.

That output was promising at first glance. Some of the simulators actually ran. Some of them even looked decent. But the architecture was already creaking under its own weight in ways I didn't fully appreciate yet.

This post is about what happened when the agent started generating simulators for real and why PixiJS turned out to be the most educational dead end of the entire project.

---

## Everything in one file was a terrible idea

The initial architecture was a single `index.html` file that loaded everything from CDN. PixiJS v8, GSAP with the PixiPlugin, Tailwind via CDN, AlpineJS for reactive controls. The entire simulator lived in one file: the DOM layout, the control panel markup, the CSS, the simulation engine, the world view, the storyboard choreography and all the GSAP timelines. A typical output looked like this at the top:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/PixiPlugin.min.js"></script>
<script src="https://unpkg.com/pixi.js@8.x/dist/pixi.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

Five CDN imports before the page even starts. And the problems cascaded from there in ways that each made the others worse.

CDN imports would fail or conflict. The `@8.x` version tag meant that a PixiJS update could silently break a simulator that worked yesterday. GSAP's PixiPlugin had to load after both GSAP and PixiJS, and the agent would occasionally reorder the script tags during a patch and break the initialization sequence. AlpineJS's deferred loading interacted poorly with PixiJS's async `app.init()`, leading to races where the control panel would try to read simulation state before the renderer had finished setting up.

The files got enormous. My best preserved run from this era was over 750 lines of HTML, and that was one of the simpler simulators. A more complex scene with multiple edge case scenarios could easily push past 1,200 lines. The agent needed massive context windows just to patch these files, and because everything lived in one file, a fix to the animation choreography on line 600 could break the control wiring on line 200. The agent couldn't see the blast radius of its own patches because the dependencies were implicit and scattered across hundreds of lines of inline JavaScript.

I also discovered something counterintuitive about model capabilities and library versions that became a lasting lesson. I deliberately downgraded library versions to match what GPT-5 had seen most during training. The model was hallucinating API calls from newer versions it hadn't trained on. Older versions meant deeper pattern memory and fewer bogus calls. You're not optimizing for the best library. You're optimizing for the library the model actually knows.

---

## PixiJS doesn't hold your hand on layout

This was the problem I was least prepared for. If you've spent most of your time in web development, you take CSS layout for granted. Flexbox, grid, margins, padding, percentage widths. You put two divs next to each other and they don't overlap because the browser's layout engine handles it. PixiJS has none of that.

PixiJS gives you a scene graph of containers and display objects. It gives you an x coordinate and a y coordinate. It gives you complete freedom to place anything anywhere. And that freedom was catastrophic when an AI agent was the one doing the placing.

The coordinate system starts at (0,0) in the top left. Increasing x moves right, increasing y moves down. Every position is in pixels by default. There is no built-in grid, no flexbox, no constraint system. The [PixiJS Layout plugin](https://pixijs.com/blog/layout-v3) exists and brings Yoga-based flexbox to containers, but it's designed for UI overlays and menus, not for the kind of custom simulation world layout I needed. I had to build a layout system from scratch.

The first attempts were brutal. The agent would place nodes at hardcoded pixel coordinates. Two nodes would overlap because their positions were chosen independently without any awareness of what else was on screen. Labels would collide with shapes because the agent placed text as an afterthought, wherever there happened to be space (or not). Elements would drift off canvas entirely because the agent had no sense of the viewport bounds. And every time I fixed one layout issue, the agent would introduce new absolute pixel positions in the next patch.

I spent days watching the same failure pattern: the agent generates a plausible looking layout, the layout audit tool flags overlapping elements, the agent nudges one element by 30 pixels, which pushes it into a label, the agent nudges the label, which pushes it off screen. An infinite game of whack a mole where every fix created a new problem because there was no underlying system governing where things could go.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-2/layout-whack-a-mole.html" width="100%" height="520" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## The grid system that saved my sanity

The fix was to build a grid system and make it the only legal way to position anything. No freehand coordinates. No pixel nudges. Every x, y, width and height had to derive from a computed grid.

The system worked like this. The canvas gets divided into major slots based on how many nodes need to be placed. If there are N nodes, you get `cols = ceil(sqrt(N))` columns and `rows = ceil(N/cols)` rows. Each slot is further subdivided into a finer station grid with named rows and columns for specific purposes. I used 4 station columns and 8 station rows per slot, with named indices like `COL_SRC`, `COL_SEG`, `COL_CTRL`, `COL_STORE` for columns and `ROW_LABEL_NORTH`, `ROW_LABEL`, `ROW_LABEL_SOUTH` for dedicated label lanes.

Everything snapped to a base grid constant of 16 pixels:

```javascript
const GRID = 16;
const snap = v => Math.round(v / GRID) * GRID;
```

The best run from this era used three horizontal shelves at specific Y positions and four vertical lanes at specific X positions, all derived from grid constants:

```javascript
_buildLayout() {
  const GRID = CONFIG.stage.grid;
  const SHELF_Y = [180, 420, 660];
  const LANE_X = [240, 520, 800, 1080];
  const snap = v => Math.round(v / GRID) * GRID;
  const nodes = {
    stream:    { x: snap(LANE_X[0]), y: snap(SHELF_Y[0]) },
    decoder:   { x: snap(LANE_X[1]), y: snap(SHELF_Y[0]) },
    transform: { x: snap(LANE_X[1]), y: snap(SHELF_Y[1]) },
    dedup:     { x: snap(LANE_X[2]), y: snap(SHELF_Y[1]) },
    upsert:    { x: snap(LANE_X[3]), y: snap(SHELF_Y[1]) },
    dicts:     { x: snap(LANE_X[1]), y: snap(SHELF_Y[2]) },
    fwd:       { x: snap(LANE_X[2]), y: snap(SHELF_Y[2]) },
    inv:       { x: snap(LANE_X[3]), y: snap(SHELF_Y[2]) },
  };
  return { nodes, connectors };
}
```

Nodes were assigned to a shelf and lane based on their function in the system: ingestion on the top shelf, processing in the middle, storage on the bottom. All shapes were drawn centered at (0,0) so that setting `node.x` and `node.y` placed the visual center on the grid. Circle radii were derived from cell size (`0.4 to 0.5 * min(cellW, cellH)`), rectangles spanned whole cell multiples. No fractional alignment, no sub pixel shimmer.

The grid system worked, but it required a staggering amount of specification to make it work. The design document for a single simulator run was 194 lines of detailed layout contracts, specifying exact coordinates, z order values, shape grammars and connector routing for every node. That level of specification was necessary because PixiJS gave the agent zero guardrails by default. Every constraint had to be invented and then enforced externally.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-2/grid-snap-system.html" width="100%" height="540" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## Labels were the worst part

I cannot overstate how much pain labels caused in the PixiJS era. Every world component needed a visible text label: nodes, connections, metrics, controls. The PixiJS design guidance eventually mandated that no geometry could exist without an accompanying label because the agent would routinely create beautiful shapes that nobody could identify. Naked geometry was a review failure.

The problem was that text in PixiJS occupies space in the same coordinate system as everything else. There's no CSS `z-index: 999` that magically floats text above the scene. There's no `position: absolute` that takes text out of the flow. A label is just another display object competing for the same pixels as the nodes and connectors.

The agent handled this badly in every way you'd expect. Labels overlapping nodes. Labels overlapping other labels. Labels sitting behind shapes because the z order was wrong. Labels placed at hardcoded pixel offsets that worked for one node size but broke when the next node used a different shape. The layout audit tool would flag these every single run, and the agent would patch them one at a time, creating new collisions with each fix.

The solution was **label lanes**: dedicated sub rows of the grid reserved exclusively for text. `ROW_LABEL_NORTH` was a lane above the node for badges and status indicators. `ROW_LABEL` was for the main title, centered on the node. `ROW_LABEL_SOUTH` was a lane below for secondary labels. Node shapes were forbidden from extending into these rows. If a shape was tall enough to intrude into a label lane, the rules said to either shrink the shape or move it to another slot.

```
Label lanes:
  Title        -> ROW_LABEL (centered)
  Badges       -> ROW_LABEL_NORTH or ROW_LABEL_SOUTH (one global profile)
  Connector chips also occupy these lanes; reserve capacity first.
```

The global profile rule was important. All badges had to go either above or below consistently across the entire scene, not mixed. If one node's title collided with its badge, the fix was to swap the badge direction for all nodes, not just that one. Consistency was more important than local optimization because the agent would otherwise create a different label arrangement for every node and the scene would look chaotic.

Even connectors between nodes became label problems. The original approach was to draw actual lines between nodes, but connector lines added visual noise and competed with labels for space. I ended up replacing drawn connectors with invisible conceptual paths and placing small label chips at the midpoint of each connection's route, anchored to the nearest label lane. The connections existed only as labeled relationships, not as visible geometry. This was counterintuitive but it dramatically reduced clutter and the agent could finally produce scenes where you could actually read what connected to what.

---

## Aesthetics as rules, not adjectives

Early on I tried to get better looking output by asking for "cleaner" or "more polished" or "tighter spacing." The model would give me something different every time but different is not the same as better. Aesthetic quality only started improving when I stopped using adjectives and started writing rules.

The visual design guidance document eventually codified everything from color palettes to motion timing into hard policy. The color system was capped at 5 to 10 colors total, explicitly counted before finalizing any design. The background had to be ultra dark (hex in the `#01030d` to `#0a1627` range) with at least 7:1 contrast between body text and the immediate surface. One primary energy color (neon cyan, azure, or magenta) was reserved for active states and progress arcs. Supporting accents were limited to one cool complement and one warm alert hue.

The motion grammar was equally specific. Non linear easing for all primary actions, never linear. Every animation sequence had to follow anticipation, main action, resolution staging. Stagger offsets of 60 to 140 milliseconds between elements to create rhythm. Micro animations between 0.18 and 0.6 seconds, macro animations between 0.8 and 1.4 seconds. No synchronous dumps where everything moves at once.

```
Motion Grammar (feel before features)

  Easing:     non-linear (sine/power2 inOut); never linear
              for primary actions.
  Staging:    every sequence follows anticipation -> main action
              -> resolution.
  Stagger:    60-140 ms offsets to create rhythm;
              no synchronous dumps.
  Durations:  micro 0.18-0.6 s; macro 0.8-1.4 s.
```

These rules emerged from watching specific failures. Linear easing made everything feel robotic, so the guidance banned it. Synchronous motion made scenes feel like PowerPoint transitions, so the guidance mandated stagger offsets. The agent would default to making everything glow at maximum brightness, so the guidance capped glow strength and limited filter usage to economical applications. Every rule traced back to a concrete rendering failure that the agent had produced in a real run.

The PixiJS filter ecosystem was a mixed blessing here. DropShadowFilter, GlowFilter, OutlineFilter, AdvancedBloomFilter, MotionBlurFilter. These looked incredible when used correctly and they gave the dark themed scenes a genuine sense of depth and energy. My learnings doc literally says "using pixi filters is an instant aura gain." But filters are expensive, the agent would stack three or four on a single element, and performance would crater. The guidance ended up prescribing which filters could be used where and with what parameter bounds, essentially turning filter application into a constrained vocabulary rather than an open ended creative choice.

---

## The API surface was a minefield

PixiJS v8 is a significant rewrite from earlier versions, and the model had been trained on code from multiple generations of the library. The result was a constant stream of phantom API calls that looked plausible but didn't exist.

The model would reach for `PIXI.utils.*` which was removed in v8. It would try `PIXI.BLEND_MODES.*` with the old constant names. It would use `app.view` instead of the v8 `app.canvas`. It would call `beginFill` and `endFill` on Graphics objects using the old chainable API when v8 changed the drawing semantics. Every one of these would fail silently or throw at runtime, and the agent would waste turns debugging API errors that were fundamentally about training data contamination.

The common pitfalls section of the build prompt grew into a litany of "don't do this" instructions that existed solely because the model kept doing exactly those things:

```
CRITICAL: Common Pitfalls to Avoid
- Don't rely on legacy Pixi APIs (PIXI.utils.*, PIXI.BLEND_MODES.*,
  or app.view) when targeting Pixi v8.
- Don't reference the Pixi world or register plugins before the PIXI
  global has fully loaded.
- Don't append or clear canvases/graphics before await app.init(...)
  has completed.
- Don't tween, clear, or mutate any display object after it's been
  removed, destroyed, or nulled.
- Don't leave timers, GSAP tweens, or callbacks alive across resets
  or scene rebuilds.
```

I also included the entire PixiJS v8 documentation, all 29,000 lines of it, as a prompt guideline file. The idea was that if the model had the real API reference in context, it would stop hallucinating methods from older versions. This helped, but it also bloated the prompt significantly and I was never sure the model was actually consulting the reference versus pattern matching from its training data.

On top of PixiJS itself, the agent had to coordinate multiple libraries with different conventions. PixiJS for rendering, `@pixi/layout` (Yoga based) for any CSS like container positioning, `pixi-filters` for visual effects, GSAP for animation, GSAP's PixiPlugin for bridging tween properties to Pixi display objects. Each library had its own initialization sequence, its own lifecycle, its own way of handling cleanup. A scene rebuild required killing all GSAP tweens, clearing all Pixi containers, resetting all filter state and reinitializing the application, in the right order. The agent would routinely leave zombie tweens alive after a scene reset, causing visual glitches and memory leaks that only manifested after the third or fourth play/pause cycle.

---

## Clean layout, zero comprehension

By the time the grid system was working, the label lanes were enforced and the visual guidance was codified into hard policy, the PixiJS outputs genuinely looked good. Scenes stopped collapsing under density. Labels were readable. Motion had rhythm and easing. The bloom filters added a sense of depth that made the dark themed scenes feel professional. The layout audit tool was passing. The flow guardrails were passing. The rubric scores were climbing.

I posted some of the Pixi era outputs and the response was consistently polite and consistently the same question: "what am I looking at?"

The scenes were cleaner than anything the project had produced before. The compositions were calmer. The labels were legible. And people still couldn't tell what the system was trying to teach them. I had spent weeks fighting layout problems, label collisions and API hallucinations, and now I was confronting a problem that no amount of spatial correctness could fix.

This distinction became the single most important insight of the entire project. **Spatial correctness** answers the question "can I see where things are?" Readable labels, clear hierarchy, non overlapping elements, consistent motion. **Explanatory correctness** answers a completely different question: "do I understand what this visual is trying to teach me?" Can I connect the shapes to concepts? Does the motion represent a process I can follow? Am I learning or just looking at pretty animations?

PixiJS got me dramatically better at the first one. And in doing so, it exposed how catastrophically far the project was from the second one. The scenes were polished metaphors. They suggested an idea. They hinted at a process. They created atmosphere around a system. But they still asked the viewer to perform too much interpretation before understanding could begin.

<iframe src="/widgets/wtf-does-it-take-to-automate-visual-explainers-part-2/spatial-vs-explanatory.html" width="100%" height="520" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>

---

## Pretty conveyor belts are still conveyor belts

I tried to solve the comprehension gap by using more creative visual metaphors as the seeds for each explainer. I would ask models for evocative metaphors for a concept: a "Segment Loom" for a Kafka consumer group, a "gantry" for data ingestion. These sounded great in design documents. They generated atmospheric, beautifully composed scenes.

Nobody understood what they meant because poetic metaphors create semantic distance. A conveyor belt metaphor for a data pipeline sounds intuitive until you realize the viewer has to first understand the metaphor, then map the metaphor back to the actual system, then track the state changes through that double layer of abstraction. A "Segment Loom" doesn't teach you anything about Kafka consumer groups unless you already know what a Kafka consumer group does, which defeats the purpose of the explainer.

My learnings doc from this era captures the realization: "What's lacking is a SEED idea that gets expanded to the doc. The SEED should define at high level what sim we are trying to build." I was on the right track about needing a seed concept, but the seeds themselves needed to be much closer to the actual data structures, not poetic interpretations of them.

One constraint from this era did survive into everything that came later: **generate left to right pipelines where each stage is one visual object.** That discipline was born from Pixi era failures where unconstrained compositions became spatial puzzles. The left to right pipeline gave every explainer a clear reading direction and a natural narrative flow. It was the one layout decision that translated directly from spatial correctness into explanatory value.

---

## The constraints that outlived the renderer

The renderer didn't survive. Almost everything else did.

**Grid first placement as a non negotiable constraint.** This principle outlasted PixiJS and carried into every subsequent rendering approach. The idea that positions must be derived from a system, never placed freehand, became foundational. It's the single most effective layout rule for AI generated visuals because it eliminates the entire class of drift and collision bugs that come from the agent improvising coordinates.

**Label lanes and reserved text space.** Treating text as a first class layout citizen that gets its own reserved real estate, rather than an afterthought squeezed into whatever gaps remain, solved a problem I've seen in every visual tool that lets an AI generate layouts. Text always gets shoved aside unless you protect its space structurally.

**No overlap as a structural rule.** The habit of converting recurring visual failures into upstream constraints, rather than fixing each instance after the fact, was the most durable pattern the PixiJS phase produced. Instead of fixing overlapping labels in each run, I made overlap impossible by construction. That inversion from fix after to prevent before changed how I thought about every subsequent phase of the project.

**Aesthetic rules over aesthetic adjectives.** "Make it cleaner" is not a stable interface for an AI agent. "Non linear easing, 60 to 140 millisecond stagger, 5 to 10 color palette with 7:1 contrast minimum" is a stable interface. Every qualitative preference I could convert into a quantitative rule produced more consistent results than any amount of prompt wordsmithing.

**The three phase pipeline.** The two step pipeline of design then build wasn't enough. My learnings doc from this era: "Instead of two step pipeline: design, code, we need a 3 step pipeline: design, code, qa. We might also need one step after design to expand/cleanup the doc." That's four phases total. The project was learning, commit by commit, that more structured phases beat fewer ambitious ones.

---

## Solving the wrong problem with the right tools

PixiJS was never the wrong tool in the traditional sense. It's a powerful rendering library and the PixiJS era outputs were the best looking things the project had produced. The problem was that I was solving the wrong problem with the right tools.

I spent weeks building a grid system, inventing label lanes, codifying motion grammars, writing a 389 line layout guide, creating validation tools that checked overlap IoU scores and WCAG contrast ratios. All of that work was necessary and I don't regret any of it. But all of it was answering the question "how do I make the output look correct?" when the question I should have been asking was "how do I make the output teach something?"

A clean scene can still be semantically distant from the thing it represents. Layout clarity reduces visual friction but it does not automatically reduce cognitive friction. Pretty conveyor belts are still conveyor belts, not the data structures they're supposed to represent.

Two things pushed me out of the PixiJS era. Gemini 3 launched around this time and the internet went wild over its Three.js game generation. I played with AI Studio and it honestly generated some impressive voxel art. I asked around and people preferred the Three.js aesthetic over PixiJS. But more importantly, I realized the PixiJS era problem wasn't about the renderer at all. The metaphors were too abstract. The scenes looked great and communicated nothing.

The renderer needed to change, but the deeper shift was realizing I needed visual units that were semantically tighter: units that looked like what they represented, not poetic allusions to what they represented. That realization is what set up the Three.js pivot, which turned out to be less about graphics and more about rebuilding the entire workflow around a seeded template and constrained visual vocabulary.

In Part 3 I'll cover what happened when the project moved to Three.js and why the renderer change was actually the least interesting part of that transition.
