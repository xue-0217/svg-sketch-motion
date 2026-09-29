# Animation architecture

## Scene ownership

- **SVG:** geometry, grouping, masks/clips, fills, strokes, and accessible title/description.
- **JavaScript:** clock, state, easing, interactions, and SVG attribute/style updates.
- **`requestAnimationFrame`:** the only continuous scheduler.
- **CSS:** layout, responsive presentation, controls, focus, and small state transitions.

Avoid mixing responsibilities without a concrete reason. In particular, do not animate continuous SVG geometry through React state or a collection of unrelated timers.

## Color tokens and SVG groups

Define reusable colors in CSS so the subject accent can be revised without editing many SVG nodes:

```css
:root {
  --sketch-paper: #ffffff;
  --sketch-ink: #171717;
  --sketch-accent: #d9674f;
}

.scene-line { stroke: var(--sketch-ink); }
.subject-accent { fill: var(--sketch-accent); }
```

Keep neutral subject parts and the accent region in separate SVG elements or groups. Do not set an accent fill on a parent group when that unintentionally colors the entire subject. Effects may reuse the accent only when they are semantically connected.

## Stable SVG structure

Use a structure similar to:

```html
<svg viewBox="0 0 1200 500" role="img" aria-labelledby="scene-title scene-desc">
  <title id="scene-title">...</title>
  <desc id="scene-desc">...</desc>
  <g class="scene-draw">...</g>
  <g id="actor">
    <g class="subject-neutral">...</g>
    <g class="subject-accent">...</g>
  </g>
  <g id="pen" aria-hidden="true">...</g>
  <g class="part-control" role="button" tabindex="0" aria-label="...">...</g>
</svg>
```

Place pivot points near the local origin of the part they rotate. Nest groups when transform order matters: world translation outside, body bounce inside, limb rotation deeper inside.

## Sequential line drawing

Measure once after SVG geometry exists:

```js
const paths = [...svg.querySelectorAll('.js-draw')];
const lengths = paths.map(path => path.getTotalLength());
const totalLength = lengths.reduce((sum, value) => sum + value, 0);

paths.forEach((path, index) => {
  path.style.strokeDasharray = `${lengths[index]} ${lengths[index]}`;
  path.style.strokeDashoffset = String(lengths[index]);
});
```

For a global draw progress `p` from 0 to 1, allocate `p * totalLength` across the ordered paths. This keeps drawing speed approximately constant even when path lengths differ. When a pen follows the active path:

```js
const point = activePath.getPointAtLength(drawnOnActivePath);
pen.setAttribute('transform', `translate(${point.x} ${point.y})`);
```

Use an explicit path order. DOM order is acceptable only when it also expresses the intended drawing order.

## Frame loop

Keep one mutable state object:

```js
const state = {
  elapsed: 0,
  last: 0,
  raf: 0,
  paused: false,
  visible: true,
};

function tick(now) {
  state.raf = 0;
  if (state.paused || !state.visible || document.hidden) return;
  const dt = state.last ? Math.min((now - state.last) / 1000, 0.05) : 0;
  state.last = now;
  state.elapsed += dt;
  paint(state.elapsed);
  state.raf = requestAnimationFrame(tick);
}
```

`paint(time)` should be deterministic: the same time produces the same frame. This makes replay, reduced motion, testing, and pause/resume predictable.

Use normalized progress and easing helpers for staged motion:

```js
const clamp01 = value => Math.max(0, Math.min(1, value));
const range = (time, start, duration) => clamp01((time - start) / duration);
const smooth = value => value * value * (3 - 2 * value);
```

For a walk cycle, use one phase for opposing limbs and derive secondary motion at different frequencies:

```js
const phase = time * speed;
const step = Math.sin(phase);
const bob = Math.abs(Math.sin(phase)) * amplitude;
const tail = Math.sin(phase * 0.45 + 0.8) * tailAngle;
```

Prefer `transform` for movement. Change `d` only when the silhouette genuinely needs to articulate and keep its command structure understandable.

## Semantic interactions

Place each hit target in the same local coordinate group as the part it represents so it follows transforms automatically. Keep the visible part and its larger transparent hit geometry separate. Drive the response from the current scene state; for example, a heart emitted from a moving chimney should begin at the chimney's current world position rather than a fixed page coordinate.

Use `Enter` and `Space` for keyboard activation. If the browser does not expose the SVG control reliably to assistive technology, provide a labeled HTML button that calls the same controller method. Do not create two independent implementations of the response.

## Lifecycle and scheduling

Create a `schedule()` function that cancels any pending frame, clears the stale timestamp, and starts a new frame only when motion is allowed. Call it after pause changes, visibility changes, intersection changes, and reduced-motion changes.

- Observe the scene with `IntersectionObserver`.
- Listen for `visibilitychange`.
- Listen to `matchMedia('(prefers-reduced-motion: reduce)')`.
- On reduced motion, call `paint()` with a meaningful completed/static state and hide motion-only cursors.
- In a component, disconnect observers, remove listeners, and cancel the frame on unmount.

## Framework notes

- **React:** store SVG nodes, animation state, and controller methods in refs; initialize in one effect; never call `setState` per frame. State is appropriate for visible button labels such as paused/playing.
- **Vue/Svelte:** use element refs and lifecycle hooks; keep frame state in plain local objects, not reactive stores.
- **Vanilla:** initialize after the DOM exists and expose only the minimal controller needed by visible controls.

For transparent or component delivery, keep scene state and controls separable. Do not bake page background, demo copy, or fixed viewport positioning into the reusable SVG component.

## Performance and visual quality

- Measure path lengths and query moving parts once, not every frame.
- Update only properties that change.
- Prefer a few expressive paths over hundreds of tiny fragments.
- Avoid expensive filters, huge blur regions, and layout reads during frames.
- Keep vector strokes crisp at target sizes; use `vector-effect="non-scaling-stroke"` only when constant screen-space width is truly desired.
- Do not use CSS keyframes for the same property that JavaScript mutates.
