---
title: "Automating Visual Explainers, Part 3: What Was My Agent Actually For?"
summary: "Moving the coding work to Codex left an awkward question about what my own harness still needed to do. Following one explainer through the workflow gave me an answer."
publishedOn: 2026-09-05
draft: false
tags:
  - ai
  - agents
  - software-engineering
  - build-in-public
featured: false
---

<link rel="stylesheet" href="/illustrations/visual-explainers-part-3/figures.css">

I had started this project because I wanted an agent to make visual explainers. By this point I had my own code for reading files, applying patches, running shell commands, taking browser screenshots and keeping track of a plan.

Which is a fairly roundabout way to get a picture of a database onto a screen.

The tools were necessary for the first version. They let the agent build a simulator, inspect it and try to repair what it had made. But I was now moving the implementation work onto Codex, which could already edit a repository and run commands. My Python program no longer had to sit in the middle of every file edit.

That left a question I had managed to avoid while building all those tools. If another coding agent could do the coding, what was my agent actually for?

This is the next part of the project that became [ToySims](https://codexsims.com/). [Part 2](/writing/wtf-does-it-take-to-automate-visual-explainers-part-2/) ended with generated simulators outgrowing a single HTML file. Moving to a real app would give the code some structure. Moving to Codex would change who was responsible for writing it. Neither decision, by itself, said what the next run should build.

I still had to turn a request for an explanation into work that a coding agent could pick up, make progress on and leave in a state another run could understand.

## What exactly are we asking it to make?

Take a work queue as an example. Jobs arrive, wait for a worker and eventually leave. Ask a coding agent to visualize that and it has enough information to make boxes move from left to right.

Now imagine watching those boxes for a minute. You have seen a queue. Have you learned why it grows?

That depends on what the animation chose to show. If jobs arrive and disappear at a fixed pace, the reader can watch the whole thing without confronting the condition that makes work accumulate. The code might be doing precisely what the request allowed it to do.

To make the question visible, let jobs arrive faster than workers can finish them. The waiting area starts filling up. Give the reader a control for the arrival rate and they can bring it back below the rate at which work gets completed. The queue starts shrinking.

Those are different explanations built from almost the same drawing. The second one has a relationship the reader can investigate. Choosing that relationship has to happen somewhere before we congratulate the agent for drawing the boxes.

<figure class="wbw-explainer toysims-workshop" role="img" aria-label="Two conceptual queue explainers. In the first, a reader watches boxes move at a fixed pace. In the second, five jobs arrive each second while workers finish three, so two more jobs wait each second.">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 490" aria-hidden="true" focusable="false">
  <path class="wbw-paper" d="M8 8 L591 11 L589 480 L10 483 Z"/>
  <text x="300" y="45" text-anchor="middle" font-size="28">what do the moving boxes tell me?</text>
  <path class="wbw-card" d="M32 73 L569 76 L566 236 L34 233 Z"/>
  <text x="57" y="110" font-size="27">version A</text>
  <path class="wbw-blue" d="M62 137 L98 137 L98 173 L62 173 Z M116 136 L152 137 L152 173 L116 173 Z M170 137 L206 136 L206 173 L170 173 Z M226 156 L321 156 M309 146 L321 156 L309 166"/>
  <circle class="wbw-line" cx="460" cy="149" r="19"/>
  <path class="wbw-thin" d="M454 146 L455 147 M467 146 L468 147 M454 158 L468 158"/>
  <path class="wbw-line" d="M460 168 L460 198 L446 219 M460 198 L478 218 M460 179 L437 190 M460 179 L483 190"/>
  <text x="60" y="213" font-size="25" class="wbw-muted">boxes go this way. noted.</text>
  <path class="wbw-card" d="M33 254 L567 257 L569 450 L32 447 Z"/>
  <text x="57" y="292" font-size="27">version B</text>
  <text x="164" y="331" text-anchor="middle" font-size="26" class="wbw-blue-text">5 jobs arrive</text>
  <text x="438" y="331" text-anchor="middle" font-size="26" class="wbw-green-text">3 jobs finish</text>
  <path class="wbw-blue" d="M61 348 L92 348 L92 381 L61 381 Z M101 348 L132 348 L132 381 L101 381 Z M141 348 L172 348 L172 381 L141 381 Z M181 348 L212 348 L212 381 L181 381 Z M221 348 L252 348 L252 381 L221 381 Z"/>
  <path class="wbw-thin" d="M280 364 L319 364 M308 355 L319 364 L307 373"/>
  <path class="wbw-green" d="M380 348 L411 348 L411 381 L380 381 Z M422 348 L453 348 L453 381 L422 381 Z M464 348 L495 348 L495 381 L464 381 Z"/>
  <text x="300" y="422" text-anchor="middle" font-size="27" class="wbw-red-text">every second, 2 more jobs have to wait</text>
</svg>
<figcaption>A teaching example, with rates chosen to make the buildup visible.</figcaption>
</figure>

This was the job of the design phase. I gave it a separate invocation before implementation planning. It had to inspect the relevant project and describe the experience the explainer should create. It was explicitly told not to start coding.

The design prompt required a mapping between the objects on screen and the real system. It also asked what each control changed in the simulation and how the explanation would unfold through a normal case and its variations.

For our queue, that means being able to say what a box represents, what makes it enter the waiting area and what makes it leave. A rate control needs a connection to arrivals or completed work. It cannot just change the number printed beside the slider.

I was asking the design run to settle those questions while they were still cheap to change. Once the coding run had built a scene around the wrong idea, changing the idea also meant undoing code.

That sounds like enough to hand to Codex. It was enough to tell it what I wanted. There was still a difference between describing the finished experience and knowing which piece to implement next.

## The design still isn't a next step

A design document can describe the queue growing, the reader slowing arrivals and the workers catching up. It does not necessarily tell a coding run how to get there from the files currently on disk.

There may be no simulation state yet. The scene may draw boxes but have nothing connecting them to that state. The slider may exist without changing arrivals. These are separate pieces of work, even though the reader will eventually experience them as one action.

The initializer's job was to turn the design into a feature list. Each feature had a description, dependencies, acceptance criteria and a status. The prompt required each piece to be independently implementable and testable.

The acceptance criteria mattered because a title like “add playback” leaves a lot of room for a generous interpretation. For the queue example, I would want to distinguish pressing a button from actually advancing the simulated work. Pausing should stop that advancement. Resuming should continue from the same state. Those are behaviors a coding run can check.

Dependencies mattered for a different reason. If the queue state does not exist, wiring playback to it is not the next useful job. Recording that relationship gave the coding run an explicit constraint to follow. The list did not enforce the order by itself.

This also gave me a place to put browser review. The initializer was instructed to include dedicated work for visual inspection and QA. That work would appear in the plan instead of being a sentence at the bottom of a long coding prompt that everyone hoped would still matter by the end.

I did not need a committee of agents debating the queue. These were different invocations with different assignments. One described the experience. Another broke it into work. The coding run would take a feature from that list.

But there was an obvious problem with the first item on almost any such list. Before implementing any of the interesting behavior, the agent would need to set up the app around it.

I had just moved away from a single file because everything was tangled together. Making the agent invent a fresh application structure for every explainer would give it a larger space in which to create the next tangle.

## Why is the canvas still on the to do list?

The queue needed new behavior. It did not need a new way to mount a React app, start a development server or put a camera in front of a scene.

So I put those recurring decisions into a template. It used Vite to run the app, React for the interface and React Three Fiber for the Three.js scene. The starter already had a canvas, camera, lighting and rotating cubes, along with a panel and a row of controls.

This is where the move to 3D entered the workflow. At this point the useful property of the starter was that the rendering setup already existed. Whether glowing cubes were a good language for explaining every system was a question I had not settled by choosing a renderer.

The driver copied the starter into the session after initialization and invoked the dependency installer there. The coding agent could then work inside that project instead of assembling the surrounding stack from its instructions.

I still needed to draw a boundary around what had been supplied. The template contained a button labeled Run sim. It did not contain the queue simulation that button would eventually control.

<figure class="wbw-explainer toysims-workshop" role="img" aria-label="A coding agent receives an app with a canvas, camera and Run sim control already supplied. Inside the canvas, the queue behavior remains unfinished and is the work the agent must add.">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 465" aria-hidden="true" focusable="false">
  <path class="wbw-paper" d="M10 9 L590 7 L593 455 L8 457 Z"/>
  <text x="300" y="44" text-anchor="middle" font-size="28">the app arrives with the assignment</text>
  <path class="wbw-card" d="M37 77 L426 73 L430 368 L35 371 Z"/>
  <path class="wbw-thin" d="M39 109 Q231 111 425 106"/>
  <circle class="wbw-thin" cx="58" cy="93" r="4"/>
  <circle class="wbw-thin" cx="74" cy="93" r="4"/>
  <circle class="wbw-thin" cx="90" cy="93" r="4"/>
  <text x="232" y="149" text-anchor="middle" font-size="27" class="wbw-green-text">canvas + camera already here</text>
  <path class="wbw-dash" d="M75 181 L389 177 L388 278 L73 281 Z"/>
  <text x="233" y="215" text-anchor="middle" font-size="28" class="wbw-blue-text">your queue goes here</text>
  <text x="233" y="253" text-anchor="middle" font-size="25" class="wbw-muted">including the part where it works</text>
  <path class="wbw-green" d="M139 308 L321 310 L321 348 L137 347 Z"/>
  <text x="230" y="335" text-anchor="middle" font-size="26">Run sim</text>
  <path class="wbw-card" d="M476 203 Q499 196 523 204 L522 238 Q498 244 477 237 Z"/>
  <path class="wbw-thin" d="M487 215 L492 215 M508 215 L513 215 M489 227 Q501 238 512 227 M500 199 L500 183"/>
  <path class="wbw-line" d="M500 243 L499 300 L480 340 M499 300 L520 339 M500 258 L462 241 L445 215 M500 261 L535 277"/>
  <path class="wbw-blue" d="M439 215 L451 204 M447 199 L455 210"/>
  <text x="300" y="414" text-anchor="middle" font-size="27">less setup to invent</text>
  <text x="300" y="445" text-anchor="middle" font-size="25" class="wbw-muted">still an explanation to build</text>
</svg>
<figcaption>The template supplies the surroundings. The feature work supplies the behavior.</figcaption>
</figure>

If you are thinking that this is a fairly ordinary use of a project template, yes. The important change was where the responsibility lived. “Use the template” had become something the driver did before the coding run, rather than another instruction for the coding run to carry out.

There was a detail in the copier that became important as soon as the workspace contained real work. For each file, after handling directories, it checked the destination before copying.

```python
if dest.exists():
    continue
dest.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(src, dest)
copied.append(dest)
```

If setup ran again, an existing scene stayed in place. The starter would not overwrite it with the original cubes.

That also meant an existing session would not automatically receive changes made to the template later. This was initialization, not an upgrade mechanism. I had a predictable way to fill an empty workspace without treating an occupied one as empty.

Now the coding run had a design, a feature to implement and an app to modify. The remaining question was what would be left when that run stopped.

## The next invocation needs more than encouragement

Suppose the queue is drawing correctly but playback is still unfinished when execution ends. Starting another run with “keep going” leaves it to work out which parts are deliberate, which are incomplete and what the last run actually checked.

Keeping the conversation can help. But I also wanted the work to be legible from the workspace itself.

The design phase created a session directory. Initialization and coding then used the latest session. Its design document, feature list and progress log lived alongside the generated app inside the session's design folder.

The coding instructions asked the agent to read those artifacts before editing. It would mark a feature in progress, implement it and record the changed files and command results in the log. It would then mark the feature done or blocked.

Each artifact answered a different question for the next run. The design explained why the feature existed. The feature list said where the work stood. The log explained what had been attempted. The files contained the actual implementation, which still had to be inspected.

For the unfinished playback example, the next invocation should be able to find the existing queue code, see that playback remains in progress and read what the previous run tried. It should not need to redesign the explainer to discover its next task.

<figure class="wbw-explainer toysims-workshop" role="img" aria-label="An unfinished playback feature passes between coding runs. The handoff includes the existing app, an in-progress feature record and a log of attempted work. The next run continues from those artifacts.">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" aria-hidden="true" focusable="false">
  <path class="wbw-paper" d="M8 8 L591 11 L589 470 L10 473 Z"/>
  <text x="300" y="45" text-anchor="middle" font-size="28">please leave more than a good luck note</text>
  <text x="101" y="94" text-anchor="middle" font-size="26">run one</text>
  <text x="498" y="94" text-anchor="middle" font-size="26">next run</text>
  <path class="wbw-card" d="M76 126 Q100 119 125 126 L124 163 Q99 169 76 161 Z M473 126 Q498 119 523 126 L522 163 Q498 169 474 161 Z"/>
  <path class="wbw-thin" d="M88 138 L93 138 M109 138 L114 138 M88 152 L114 152 M486 139 L490 139 M507 139 L511 139 M486 151 Q499 161 511 151"/>
  <path class="wbw-line" d="M100 169 L100 220 L81 257 M100 220 L120 257 M100 182 L66 199 M100 183 L137 194 M498 169 L498 220 L478 257 M498 220 L519 257 M498 183 L462 195 M498 183 L530 200"/>
  <path class="wbw-blue" d="M155 177 Q296 148 443 176 M429 163 L443 176 L425 183"/>
  <text x="300" y="213" text-anchor="middle" font-size="25" class="wbw-muted">same unfinished work</text>
  <path class="wbw-card" d="M44 283 L556 287 L553 427 L47 425 Z"/>
  <text x="75" y="322" font-size="27" class="wbw-green-text">app files</text>
  <text x="274" y="322" font-size="26">queue already draws</text>
  <text x="75" y="364" font-size="27" class="wbw-blue-text">feature record</text>
  <text x="274" y="364" font-size="26">playback in progress</text>
  <text x="75" y="406" font-size="27">progress log</text>
  <text x="274" y="406" font-size="26">what was tried</text>
  <text x="300" y="458" text-anchor="middle" font-size="25" class="wbw-muted">a restart should not become a fresh invention</text>
</svg>
<figcaption>An example handoff using the artifacts the workflow required.</figcaption>
</figure>

This is a familiar problem in work that spans multiple agent sessions. Anthropic's account of [building harnesses for longer tasks](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) describes the same need to leave a usable environment and a record of unfinished work. In my case, those records also gave the driver something it could act on.

After an invocation returned, the driver could read the feature list. An unfinished feature could trigger a resume of the last Codex session. Once that item left the active work, the driver could select another incomplete feature.

That is why I wanted structured status in addition to a progress paragraph. Python could make a continuation decision from the feature record without interpreting the tone of the agent's final message.

It still needed a way to stop asking the same thing forever. The resume loop saved the pending feature record as JSON and compared it with the next attempt.

```python
snapshot = json.dumps(pending_feature, sort_keys=True)
if snapshot == last_snapshot:
    print("[driver_codex] Feature status unchanged after resume attempt; stopping auto-resume loop.")
    break
```

An unchanged record stopped automatic resumption. A blocked feature also stopped that retry path, leaving a reason for someone to inspect.

You can probably see the limitation. A changed record proves that the record changed. It does not prove that the queue now pauses correctly. The driver had gained a way to manage continuation, but it still needed evidence about the app.

## Done according to whom?

The workflow added a QA invocation for newly completed features. Its prompt asked the agent to run the app, load it in a browser and iterate until there were no console errors.

That checked a real boundary. Code on disk had to become an app running in a browser. But the end condition was narrower than the word done could make it sound.

Our queue could animate without console errors while ignoring the arrival rate control. It could respond to that control while leaving the reader unable to tell why the queue was growing. Those are different failures, requiring different observations.

This is where the design work at the beginning became useful again. I could return to the relationship the explainer was supposed to expose. If arrivals exceed completed work, does waiting work visibly accumulate? When the reader reduces arrivals, does the simulation respond in a way that makes the relationship understandable?

A completed feature record would tell the workflow that the coding run considered its assignment finished. Checking the actual behavior would tell me whether to believe it. The design gave that check a specific target.

The template had not solved this part. Neither had changing the coding agent. What I had built was a workflow that could carry the intended explanation into implementation and bring a concrete artifact back for inspection.

That was a much more useful job for my own code than wrapping every file read. Codex could handle the mechanics of editing. I could concentrate on what an explainer needed to inherit and what it had to demonstrate before I accepted it.

With the surrounding app supplied, the next source of repeated invention was inside the scene. Every queue, cache or cluster still needed visual objects with labels and behavior. I had stopped asking the agent to invent the application around each explanation. In Part 4, I started asking whether it needed to invent every piece of the explanation too.
