# Brief and storyboard

Use this guide for a new scene or a recreation from visual references.

## Inputs to extract

Build a compact internal brief from the user's words, reference, and target project:

| Decision | Examples | Default when unspecified |
|---|---|---|
| Subject | cat at a desk, train crossing hills, hand writing a logo | the user's named subject |
| Environment | full scene, isolated object, website hero | a single uncluttered scene |
| Primary action | walk, draw, wave, transform, orbit | progressive hand-drawing, restrained color reveal, then a natural living loop |
| Playback | autoplay once, loop, scroll-triggered, click-triggered | autoplay drawing once, loop the living detail; replay redraws from the first stroke |
| Visual style | black ink, colored fills, marker, technical sketch | dark rounded line on a light background with one accent color |
| Accent region | train cab, scarf, flower head, active button | one identifying part of the main subject, about 20%–40% of its area |
| Motion logic | wheels turn, tail swings, steam rises | behavior natural to the named subject |
| Density | icon, vignette, full-width environment | enough context to read the story without decorative filler |
| Interaction | chimney makes smoke, lamp turns on, flower blooms | one cause-and-response pair tied to a meaningful part |
| Destination | standalone page, component, hero section | standalone page for a new project; preserve an existing framework |

Ask a question only when multiple reasonable answers would produce materially different deliverables. A reference image usually resolves style and composition; a reference video also resolves timing and action.

## State the direction before visual drafting

Show a compact direction in this form:

```text
主体 + 强调色：暖红色火车车身，其余部分保留黑白线稿
环境：黑白山谷、轨道、云朵
动作：火车前进，车轮旋转，烟雾向后飘
交互 + 交付：点击烟囱冒出红色爱心；独立响应式网页
```

Use concrete content rather than these exact labels when natural. If the user explicitly asked to discuss the brief first, stop here. Otherwise continue to the static visual selection in [reference-first-design.md](reference-first-design.md), not directly to production SVG paths. A verbal brief does not select a newly proposed character design; a user-selected reference or explicit delegation of visual selection does.

## Convert the idea into layers

Separate the scene before writing paths:

1. **Background/static anchors:** horizon, room outline, table, terrain, or framing marks.
2. **Draw-on story:** the strokes that should visibly appear in sequence.
3. **Primary actor:** the object or character whose transform or geometry changes continuously.
4. **Accent region:** one identifying part of the primary actor, separate from the neutral outline and fill.
5. **Secondary motion:** tail, steam, leaves, blink, antenna, shadow, or a story-specific effect.
6. **Interaction layer:** a meaningful part-level hit target, visible fallback control when needed, and focus/keyboard behavior.

Do not place every SVG path into the draw-on sequence. Filled shapes, tiny repeated texture, hit areas, and continuous actors often belong outside it.

## Create animation beats

Describe 3–7 beats with approximate durations. Example:

| Beat | Time | What changes |
|---|---:|---|
| Establish | 0.0–0.4 s | empty or lightly seeded frame |
| Draw anchors | 0.4–2.2 s | large outline paths reveal |
| Draw details | 2.2–4.0 s | interior and supporting lines reveal |
| Enter | 3.3–5.0 s | actor moves into the scene |
| Living loop | after 5.0 s | subtle repeating motion continues |
| Response | on input | one short impulse with a cooldown |

Overlap beats deliberately when it improves flow. Do not make the viewer wait through a long blank or nearly static opening.

## Reference recreation rules

- Preserve the reference's silhouette and negative space before adding detail.
- Use a limited path vocabulary: long structural curves, short detail strokes, simple filled accents.
- Match perceived line weight at the final display size, not only at the raw SVG size.
- Preserve the reference's color hierarchy. If the reference is monochrome and the user asked for the skill's default style, introduce only one restrained subject accent rather than recoloring the scene.
- If only one still image exists, animate a plausible interpretation but label it as an interpretation; do not claim exact timing fidelity.
- When a reference contains copyrighted characters or logos, reproduce only within the user's authorized scope and do not quietly expand the asset into unrelated templates.
