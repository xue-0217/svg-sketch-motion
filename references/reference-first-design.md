# Reference-first illustration workflow

Use this before drawing a new subject or changing its visual identity. A weak character design is not fixed by repeatedly tweaking SVG coordinates: settle the still image, translate it faithfully, then add motion.

## 1. Establish a visual target

- Inspect the user's images and the intended display area. Distinguish a selected illustration reference from screenshots describing a workflow or showing an unsuccessful attempt.
- If the user has already chosen a reference for recreation, use it directly. A reference video may also establish timing; a still image establishes appearance, not exact motion.
- For existing artwork, a motion-only or minor style-preserving correction can keep the current approved design. A new subject or material redesign needs a visual target.

## 2. Make static concept images

Use an available image-generation tool and its applicable skill to produce visual drafts, or use the user's supplied drawings. Keep tool selection portable; do not embed local credentials or depend on a specific installed provider.

When direction is open, normally show 2–3 distinct options, changing silhouette, proportions, or illustration language rather than only color. For example, a cat might be a sparse doodle, a round mochi character, or a soft picture-book drawing. These are examples, not presets required for every subject. If the user already specifies a clear visual language, show one focused draft instead.

Design at the delivery aspect ratio and scale. Each draft should show:

- a readable subject with intentional outline and part connections;
- characteristic proportions, face or identifying details, and a resting pose;
- the intended line hierarchy and selective color, respecting explicit monochrome requests;
- the key prop and enough environment to judge their relationship, with generous negative space.

Prefer shapes that can survive vector recreation: coherent contours, restrained fills, few textures, and clearly separated movable parts. Do not promise exact SVG fidelity to raster textures that cannot reasonably be recreated.

Show the actual images inline or in a usable preview, label them, and briefly explain how they differ. A text-only description or unseen file is not a visual selection. Do not show completed animations as substitutes for the still-image stage.

If no image-generation tool is available, request a reference or agreement on a static SVG sketch as an alternative. Clearly label such a sketch as a design draft, render it for selection, and keep motion disabled.

## 3. Select and preserve the design

Ask the user which shown draft to develop, or what to change in it. Wait before production SVG implementation unless the user has already selected a supplied reference or explicitly delegated the selection and continuation. Do not treat silence or the initial animation request as selection of a new draft.

Revise the still image when its basic shape is rejected. Focus the next draft on the stated problem rather than producing many near-identical options. Preserve prior decisions that remain accepted.

Save the selected reference and a short design note in the animation output project, following existing project conventions. Record the image path, chosen direction, major proportions, silhouette, facial placement, accent regions, prop overlaps, and intended moving parts. Keep these project-specific materials out of the skill's reusable assets. If an attachment cannot be copied, record its accessible source and the defining features; do not invent a saved path.

## 4. Recreate and compare a still SVG

Map the image into a stable viewBox. Draw the outer silhouette first, major masses and overlapping parts second, face and identifying details third. Use expressive curves and deliberate contour joins rather than assembling unrelated circles and rectangles.

Keep neutral fills, accents, outlines, and moving parts separate. Hide internal construction seams when a single body contour should read smoothly. Put tails, paws, wings, wheels, or other articulated pieces on plausible pivots without changing the approved resting shape.

Render the still SVG at the intended desktop and narrow sizes. Compare it side by side with the selected image at similar subject sizes, checking:

- overall silhouette and width-to-height ratio;
- head/body or major-part proportions;
- eye, nose, mouth, and expression placement when present;
- limb/body connections, overlaps, and ground contact;
- accent shape, line weight, and negative space;
- the subject's relationship to its key prop and environment.

Correct visible drift before adding animation. Display the still SVG preview and summarize the comparison; no extra selection is needed when it faithfully implements the already selected design. If an unavoidable simplification materially changes the character or style, show the difference and get the user's choice before continuing. A still-image generation result alone does not verify the SVG recreation.

## 5. Add motion, then refine

Animate only after the static silhouette reads well. Derive motion from the subject and story, preserve the selected pose and identity, and keep secondary motion restrained. For the mochi-cat example, breathing, blinks, small tail swings, and a paw response support the character; this motion set is not a universal rule for other scenes.

The approved still image is a design checkpoint, not permission to omit the final drawing animation. Add progressive path drawing, followed by selective fill/color reveal and the living loop, unless the user explicitly asks to skip drawing. Replay resets stroke offsets, fill opacity, draw cursor, interaction state, and motion time together. In still-review and reduced-motion modes, show the completed illustration immediately.

Then follow the existing post-render sequence: whole-scene diagnosis → subject → background → motion integration → comparison. Use the selected image throughout subject refinement. If the character still requires a fundamentally different design, return to the visual target stage instead of hiding the problem with more movement or endless path adjustments.
