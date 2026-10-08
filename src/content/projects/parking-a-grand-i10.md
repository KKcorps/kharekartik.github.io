---
title: Parking a Grand i10
summary: I am learning to drive and I always park too far from everything. So I built a 3D parking simulator of my own car to learn how close I can actually get.
status: Shipping
startedOn: 2026-10-08
stack:
  - three.js
  - JavaScript
  - Codex image generation
featured: true
demo: https://kharekartik.dev/play/parking/
---

I recently started learning to drive. I have one habit that makes my wife angry. Every time I park, I stop way too far from everything. Too far from the wall, too far from the footpath, too far from the car in front. There is always a gap big enough to park a second car in. She always notices.

The honest answer is that from the driver seat I have no idea how far that is. So I did what any engineer does with a skill they are bad at. I built a simulator instead of practising.

[Play it here](/play/parking/). It runs in the browser and works best with a keyboard.

## Why the gap always looks smaller than it is

The thing nobody tells you when you start driving is that you never actually see the gap. Sitting in a hatchback, the bonnet hides the ground in front of you. By the time the foot of a wall is under your nose, it has already vanished.

I wanted to know how much road I was losing, so I modelled the car properly. It is a Grand i10 at its real size, 3.77 m long and 1.66 m wide with a 2.43 m wheelbase and a 4.9 m turning radius. The driver's eye sits where an average driver's would, on the right since this is an Indian car. Run a sight line from that eye over the edge of the bonnet and it meets the ground about 3.6 m ahead of the bumper. That is a whole car length of floor I cannot see. It is exactly why I kept stopping early.

## Only the driver seat and mirrors that actually work

The rule I set for myself was that while driving you only get the view from the seat. You get no top view and no chase camera, because I do not get one in real life.

That meant the mirrors had to be real mirrors. Each one is a camera placed at your eye's reflection behind the glass, looking through the mirror as if it were a window. What you see in it changes when you turn your head or tilt the mirror, the same way it does in the car. The side mirrors are slightly convex like real ones, so things in them look further away than they are, which is its own small lesson.

Once you stop, you can step out of the car. The camera walks you round to the gap and the sim measures it to the centimetre against the real shape of the car, its bumpers, tyres and mirror housings. That moment of stepping out and seeing a metre of empty floor where you were sure there were a few centimetres is the whole point.

## Parking the way it actually happens in India

The first version had a tidy car park with a brick wall. It looked nice and taught me nothing, because I will never count bricks in real life.

So the levels moved to places I actually park. Four are in a mall basement with concrete pillars, a low slab overhead, tube lights and the yellow and black band painted round every wall and pillar. Two are on a market street with a tall footpath, shops, people, scooters parked at the edge and an auto rickshaw taking up half the space you wanted. Every attempt starts from a slightly different spot and angle, because you never arrive at a real space perfectly lined up.

The levels go from rolling up to a wall, to pulling in close to a footpath, to reversing into a bay between an SUV and a car, to parallel parking between an auto and a car. The last one is a tight basement spot where a pillar eats into the bay.

## A coach that tells me what to look at

Getting a score after the fact helped, but what I actually needed was the instructor in the passenger seat. So the sim has a coach mode. Its whole job is to say where to look and what to watch for.

It does not just say "stop now". It points at something I can see and tells me how it will change. Nose in to a basement wall, it tells me how much of the hazard band still shows above the bonnet. About 34 cm shows at a metre away. Only 17 cm shows at 20 cm. Reversing, it draws a green line on the wall inside the rear mirror and tells me to stop when the boot edge meets it. At a footpath it tells me where the kerb seems to meet the bonnet. Then it tells me to dip the left mirror and watch the strip of road beside the rear tyre get thin.

For parallel parking it teaches the instructor's method. Reverse until the back of the auto is level with a certain part of your car, then go to full left lock until you reach the right angle. Remember what your mirrors look like at that moment, reverse straight until your front clears the auto, then go to full right lock until you are straight. The coach works that whole path out from wherever you actually stopped and checks it against every obstacle before it suggests it.

To check that the advice actually works, I wrote a script that obeys the coach exactly and nothing else. That script found two of my bugs. The first version of the parallel parking plan swept the car's front corner straight into the auto. My first footpath advice turned in so eagerly that it put a tyre into the kerb. The script now parks cleanly in every level I ran it on.

## Making it look like a game

I started with a hand drawn ink look that matches my other little sims. It felt like a diagram, not a car. I wanted the colours of an open world racing game instead. That means a bright midday sky with a real sun and soft shadows. It means glossy maroon paint like our car and a dark glass HUD with one hot pink accent.

The textures are photographs that never existed. I generated the asphalt, concrete floor, brick, pavers, grass, the apartment fronts and the rows of Indian shopfronts with Codex image generation. Each tile was generated at a known real size, so a concrete tile or a footpath paver still reads at the right scale from the seat.

## What I learned so far

The biggest lesson is that closeness is never something you see directly. It is always a picture you learn to read, like the stripe on the wall or the line in the mirror. Once I knew that the bonnet hides most of a car length, stopping early stopped feeling like caution and started feeling like a habit I could fix.

I still have to do it in the real car, with my wife in the passenger seat. Wish me luck.
