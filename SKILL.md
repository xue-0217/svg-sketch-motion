---
name: svg-sketch-motion
description: Create or refine responsive hand-drawn web animations with inline SVG artwork, selective accent color on the main subject, subject-specific JavaScript motion, semantic interactions, requestAnimationFrame timing, CSS layout, and a post-render visual refinement pass. Use for 简笔画动画, 线稿动效, 手绘 SVG, path drawing, animated doodles, interactive SVG scenes, or converting a visual reference into a lightweight web animation; do not use for prerecorded video, GIF-only output, Canvas/WebGL scenes, or ordinary static icons unless the user asks to animate them this way.
---

# SVG Sketch Motion

Build a real, inspectable web animation rather than a prerecorded imitation. SVG owns the drawing, JavaScript owns state and motion, one `requestAnimationFrame` loop owns continuous refresh, and CSS owns layout plus non-essential presentation. The result should read first as a hand-drawn scene, with color and motion guiding attention to the main subject.

## Choose the delivery mode

- **Existing project:** inspect its instructions and structure first, then preserve its framework, conventions, and working behavior. In React/Vue/Svelte, keep per-frame values outside reactive render state and clean up the loop on unmount.
- **New standalone animation:** default to semantic HTML, inline SVG, one JavaScript file, and one CSS file. Copy `assets/standalone-starter/` as a starting point when useful, then replace its sample scene rather than presenting the sample as the requested result.
- **Reference recreation:** inspect every supplied reference before drawing. Match composition, line weight, timing, palette, and visible actions; do not invent detailed geometry that the reference does not support.
- **Embed/component output:** when requested, deliver only the reusable scene/component and its required styles; omit demo controls and page chrome unless they are part of the brief.

If the output location is not specified, create a clearly named new folder without overwriting an unrelated page. Do not add an animation library unless the request or existing project already requires one.

## Resolve and state the animation brief

Read [references/brief-and-storyboard.md](references/brief-and-storyboard.md) when starting a new scene or recreating a reference.

Infer ordinary details and ask only about a missing choice that would materially change the result. At minimum, know or choose:

- subject and environment;
- the main action and whether it loops, plays once, or responds to input;
- visual language: line weight, fill, palette, density, and mood;
- the subject's identifying accent region and natural motion;
- an interaction whose cause and response are meaningfully related;
- destination: standalone page, section, component, or transparent/embed-ready scene.

Before coding, state a compact four-line direction: **subject + accent**, **environment**, **motion**, and **interaction + delivery**. For a complex scene, add its layers and 3–7 animation beats. If the user asked to discuss or confirm first, pause after this direction; otherwise treat it as a visible working assumption and continue. Preserve exact user-specified objects, colors, timing, interactions, and scope.

## Direct color, motion, and interaction

Read [references/visual-direction.md](references/visual-direction.md) whenever choosing the palette, motion language, interaction, density, or responsive composition.

- Default to dark line art on a white or neutral background.
- Apply one accent color to a representative part of the main subject, usually about 20%–40% of its visible area. Do not automatically color the whole subject or the environment.
- Reuse the accent for a related response when appropriate, such as a red train producing red hearts.
- Give the main subject the clearest motion, supporting details quieter secondary motion, and the background little or no continuous motion.
- Derive motion from the subject: wheels rotate, tails swing, wings flap, steam rises. Do not use generic bobbing as the only idea for every object.
- Tie interaction to a meaningful part: chimney → smoke/hearts, lamp → light, flower → bloom, animal head → ear reaction.

## Implement the scene

Read [references/animation-architecture.md](references/animation-architecture.md) before implementation or substantial editing.

1. Establish one stable `viewBox` coordinate system and sketch the composition there.
2. Group SVG by responsibility: neutral environment, draw-on paths, selectively colored subject parts, moving actors, secondary effects, cursor/pen, and hit targets.
3. Define line, paper, and accent colors as reusable tokens rather than scattering hex values.
4. Give JavaScript stable selectors or refs. Prefer classes for groups and IDs/refs for unique actors.
5. Prepare draw-on paths with `getTotalLength()`, `stroke-dasharray`, and `stroke-dashoffset`. Use `getPointAtLength()` when a pen or spark must follow the active stroke.
6. Run continuous motion from a single elapsed-time state. Derive position, rotation, limb phase, secondary motion, and interactions from time rather than accumulating arbitrary pixel changes.
7. Mutate SVG `transform`, `d`, opacity, stroke offset, or other visual attributes inside the frame loop. Do not trigger a framework rerender every frame.
8. Use CSS for viewport placement, responsive composition, controls, focus styling, and small non-continuous transitions.
9. On narrow screens, recompose or reduce secondary detail when simple scaling would make the subject or hit target too small.

Keep artwork readable: use `round` line caps/joins for friendly sketches, maintain a coherent stroke hierarchy, avoid excessive nodes, and keep important subjects inside the safe area at narrow widths.

## Refine the rendered scene

Read [references/visual-refinement.md](references/visual-refinement.md) after the first working implementation and before final verification. A technically correct first render is a draft, not the finished visual.

Open the actual page and inspect the completed composition, active loop, interaction peak, and a narrow viewport. Then refine in this order:

1. **Whole-scene diagnosis:** identify at most three issues that most weaken recognition, hierarchy, balance, or polish.
2. **Subject pass:** improve silhouette and proportions first, then curves, joints, stroke hierarchy, accent placement, and motion pivots. Simplify or enlarge the subject before adding decorative detail.
3. **Background pass:** make the environment support the subject through quieter strokes, clearer depth, cleaner spacing, and fewer tangencies or collisions. Remove distracting detail before adding more scenery.
4. **Motion integration:** confirm primary, secondary, and background motion match the refined visual hierarchy and do not compete.
5. **Comparison:** revisit the same desktop and narrow states and confirm the changes are visibly better without breaking behavior.

Preserve the working interaction and accessibility contract while refining. Default to no more than two meaningful visual passes. If a material problem remains after that, report it instead of hiding it behind endless micro-adjustments.

## Motion and interaction requirements

- Clamp frame delta after tab stalls so actors do not teleport.
- Cancel duplicate frame requests before restarting.
- Pause when the document is hidden or the scene is outside the viewport.
- Respect `prefers-reduced-motion`; show a complete, meaningful static state rather than a blank first frame.
- Give replay/pause controls accurate labels and states when controls are present.
- Make pointer interactions keyboard-operable when the SVG itself is interactive.
- Add a cooldown to repeated impulses such as jump, wave, bounce, or burst.
- Avoid per-frame randomness. Seed randomness once if organic variation is required.
- Keep hit targets attached to the visual part they represent. Provide a normal HTML control as an accessible equivalent when an SVG target is not exposed reliably.

## Verify the result

Read and follow [references/qa-checklist.md](references/qa-checklist.md) after visual refinement and before reporting completion.

Run the project checks, open the actual page, observe both the start and completed/looping state, exercise every interaction, inspect the console, and check at least one desktop and one narrow mobile viewport. A successful build alone is not proof that the animation works.

Report the output location, what the animation does, the controls/interactions, and what was actually verified. Distinguish a local preview from a published page.
