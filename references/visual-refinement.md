# Post-render visual refinement

Use this guide after a functional first implementation exists. The goal is not to decorate the scene indiscriminately; it is to make the subject more recognizable, the environment more supportive, and the complete animation feel deliberately illustrated rather than assembled from generic primitives.

Keep the selected static reference available during review. This pass refines its SVG execution; it does not replace the prior visual selection and still-SVG comparison in [reference-first-design.md](reference-first-design.md). If basic silhouette, proportions, or expression drifted from that reference, restore them first. A material change of illustration direction returns to static visual selection.

## Inspect before editing

Open the actual page. Inspect the same representative states that will be checked again after refinement:

- completed composition at the intended desktop width;
- active subject-specific loop;
- semantic interaction near its visual peak;
- narrow mobile composition;
- paused or static frame when motion makes shape quality hard to judge.

View the composition both at normal size and as a small thumbnail. At thumbnail size, the subject, direction of action, and accent should still read. Write down no more than three high-impact problems. Prefer issues such as a weak silhouette, awkward proportions, competing background, accidental intersections, or an undersized mobile subject over minor ornamental imperfections.

Do not begin by changing everything. Preserve the functional baseline and refine the largest visual weakness first.

## Pass 1: refine the subject

The subject receives the first and deepest pass because it carries the story, accent, motion, and interaction.

### Silhouette and recognition

- Judge the outer contour before interior detail. It should identify the subject without relying on labels or animation.
- Preserve the subject's characteristic masses and recognition cues: for example, a locomotive needs a believable relationship among boiler, cab, chimney, wheels, and front; an airplane needs a readable fuselage, wing, tail, cockpit, and propulsion element.
- Replace a visibly assembled collection of rectangles and circles with a smaller number of intentional curves and joined contours where the subject calls for them.
- Allow slight hand-drawn asymmetry, but remove kinks, flat spots, and accidental bumps that look like path mistakes.

### Proportion and construction

- Check the relative size, alignment, and overlap of major parts before polishing small details.
- Keep repeated parts consistent without making them mechanically perfect.
- Make joints and contact points believable: wheels meet the chassis, wings attach to the fuselage, feet meet the ground, and rotating pieces use plausible pivots.
- Avoid accidental tangencies where two contours barely touch; either separate them clearly or overlap them intentionally.

### Stroke and detail hierarchy

- Keep the subject's outer contour strongest, structural divisions secondary, and small interior marks lightest.
- Use detail only when it improves recognition, expression, or motion. Remove seams, windows, textures, or decorative marks that become clutter at delivery size.
- Keep line caps, joins, and perceived weight coherent after responsive scaling.
- Prefer a few expressive paths to many small fragments.

### Accent and interaction

- Preserve the selected palette. When an accent is part of it, keep the accent on one identifying region, usually about 20%–40% of the visible subject; keep explicitly monochrome artwork monochrome.
- Ensure the accent shape follows the subject's construction instead of appearing pasted on top.
- Keep sufficient ink contrast across the accent fill.
- Confirm the interactive part is visually understandable, remains attached during motion, and has a generous invisible hit target.

### Motion-aware shape review

- Inspect the subject at extreme positions in its loop, not only at rest.
- Correct clipping, implausible pivots, gaps, and collisions exposed by rotation or translation.
- Make natural subject motion carry more visual energy than generic body bobbing.
- On narrow screens, enlarge or simplify the subject before increasing stroke weight or adding detail.

## Pass 2: refine the background

Refine the environment only after the subject reads well. The background should establish place, depth, and travel without matching the subject's contrast.

### Depth and line hierarchy

- Separate foreground, middle ground, and far background through line weight, opacity, density, scale, or movement speed.
- Keep the subject at full visual strength. As a starting relationship, middle-ground strokes may feel roughly 65%–80% as strong and distant strokes roughly 40%–60%, adjusted for the actual scene.
- Avoid using identical outlines for the subject, mountains, clouds, furniture, and tiny texture.

### Composition and spacing

- Preserve negative space around the face, front, direction of travel, or interaction effect.
- Move or simplify scenery that forms tangencies with the subject or appears to pass through it.
- Avoid evenly distributing every element. Use rhythm and asymmetry so the scene feels composed rather than filled.
- Remove low-value decorations before adding new ones.
- Keep the horizon, ground, table, or other anchor consistent with the subject's scale and contact points.

### Background motion

- Keep environmental motion quieter than the subject's natural action.
- When travel is implied through parallax, use clearly different layer speeds and prevent wrap points from exposing empty gaps or visible jumps.
- Do not animate distant scenery merely because it exists.

## Pass 3: integrate the whole scene

After subject and background edits, check them together:

- The subject should be the first read; the interaction response should be the second read when active.
- Accent color should not leak into unrelated decoration.
- Background lines should frame rather than cross the important silhouette.
- Motion hierarchy should match visual hierarchy: primary action strongest, supporting motion quieter, background slowest or still.
- Page typography and controls should not compete with the illustration.
- Desktop and mobile should tell the same story even when secondary scenery is reduced or cropped.

## Compare and stop

Reinspect the same states used before editing. A refinement pass succeeds only when at least one important quality is visibly improved: subject recognition, proportion, line confidence, hierarchy, spacing, mobile legibility, or motion clarity.

Run the functional interactions again after geometry or grouping changes. Do not trade away working keyboard access, reduced-motion behavior, hit targets, or stable animation timing for visual polish.

Default to no more than two meaningful passes. Stop when the high-impact issues are resolved and the scene reads cleanly at its delivery sizes. If a remaining problem would require a different illustration direction or a material scope change, describe it to the user rather than performing endless micro-adjustments.
