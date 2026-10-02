# Visual and motion direction

Read this guide when choosing color, movement, interaction, scene density, responsive behavior, or delivery form.

## Selective accent color

The default visual language is dark hand-drawn line art on a white or quiet neutral background, with one accent color focused on the main subject.

Settle the visual target through [reference-first-design.md](reference-first-design.md) before drawing new artwork. An explicitly requested black-and-white scene or selected monochrome reference stays monochrome; the accent rules below are defaults, not overrides of the user's chosen image.

Choose the accent region by recognition value, not by convenience:

- vehicle: cab, boiler, body panel, stripe, or light;
- character: shirt, hat, scarf, bag, or another identifying accessory;
- animal: collar, patch, tail tip, or one body region;
- plant: flower head, fruit, or pot;
- object: door, button, screen, label, or active surface.

Default to one accent color covering roughly 20%–40% of the subject's visible area. A second accent is acceptable only when it has a distinct semantic role or the user/reference requires it. Keep environment, outlines, shadows, and most repeated details neutral. Avoid coloring the entire scene merely because color is available.

Select the accent in this order:

1. explicit user choice;
2. supplied reference or brand palette;
3. subject meaning and mood;
4. a restrained default with sufficient contrast.

Reuse the accent for a causally related response when it strengthens the story. Examples: a red train emits red hearts; a yellow lamp casts a pale yellow glow; a blue watering can produces blue droplets. Do not reuse it for unrelated background decoration.

Prefer flat fills. Use gradients, textured brushes, or multiple shades only when the requested style needs them. Keep black outlines readable across colored fills.

## Motion hierarchy

| Layer | Motion priority | Typical behavior |
|---|---|---|
| Main subject | strongest and clearest | travel, articulate, transform, act |
| Secondary detail | quieter support | smoke, tail, steam, leaves, blink, shadow |
| Environment | mostly stable | draw-on reveal, rare subtle response |

Do not animate every layer continuously. The subject should remain the first thing the viewer notices after the scene is established.

Derive motion from the object:

| Subject | Natural primary motion | Useful secondary motion |
|---|---|---|
| Train/vehicle | translate along route; wheels rotate | body bounce, smoke trails, light blink |
| Cat/dog | walk or sit with weight shift | tail, ears, blink, shadow |
| Bird | flap and glide | body pitch, tail spread |
| Flower/plant | grow, open, or sway | leaf lag, pollen, pot wobble |
| Cup/kettle | settle, pour, or tilt | steam, liquid ripple |
| Pencil/hand | follow a path | tip pressure, small rotation |
| Machine/tool | rotate, press, scan, or extend | indicator light, vibration, output |

Generic bobbing may support an action but should not be the only motion idea unless the subject truly floats.

## Semantic interaction

Make the trigger and response feel causally connected:

- chimney → smoke ring, whistle, heart;
- wheel → speed change or short spin;
- lamp/switch → light state;
- flower → bloom or petals;
- cloud → rain;
- character head → blink, ear, expression;
- door/window → open, reveal, peek;
- cup → steam or small face reaction.

Attach the hit target to the moving SVG part. Mirror it with a labeled HTML button when browser accessibility for the SVG target is unreliable. Use a cooldown for impulses and preserve keyboard activation.

## Scene density

Choose the smallest density that tells the story:

- **Object:** one isolated subject; suitable for a small decoration or transparent embed.
- **Vignette:** one subject plus two or three contextual elements; default for most prompts.
- **Full scene:** distinct foreground, middle ground, and background; use when environment is essential.

Do not promote a simple request into a full illustrated landscape without a reason. Keep negative space around the subject and reserve the strongest contrast and accent for it.

## Hand-drawn character

- Use rounded line caps and joins for friendly sketches.
- Make structural contours slightly heavier than interior detail.
- Permit small intentional asymmetry in organic shapes.
- Prefer a few expressive curves over many tiny fragments.
- Do not randomize geometry every frame; flickering outlines look broken rather than handmade.
- Avoid synthetic decoration such as generic sparkles or particles unless the story calls for them.

## Responsive composition

Do not assume desktop scaling is enough. At narrow widths:

- keep the subject and interaction target inside a defined safe area;
- remove or simplify distant detail before shrinking the subject too far;
- crop expendable side decoration only when the main action remains understandable;
- enlarge hit targets independently of visible line weight;
- keep controls clear of the subject and avoid horizontal page overflow.

Choose between full-scene scaling and intentional center cropping based on which keeps the story more legible. Verify the actual result rather than relying on the CSS breakpoint alone.

## Delivery forms

- **Standalone page:** full document, scene, minimal controls, and local preview.
- **Existing-framework component:** preserve framework lifecycle and expose only useful props or controller methods.
- **Hero/section:** integrate with surrounding content and keep the animation subordinate to page hierarchy.
- **Transparent embed:** transparent root, no page chrome, bounded viewBox, optional autoplay.
- **Automatic loop:** omit controls only when the loop is unobtrusive and the host page provides an accessible motion policy.
