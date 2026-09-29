# QA checklist

## Functional

- The first frame is intentional and not accidentally blank.
- Draw-on paths appear in the intended order and finish cleanly.
- The pen/cursor follows the active path and disappears when drawing ends.
- Loop boundaries do not visibly jump unless the design calls for a snap.
- Replay resets every dependent state, not only elapsed time.
- Pause and resume do not accumulate a large delta.
- Click/tap/keyboard interactions work and respect their cooldown.
- The main motion is specific to the subject rather than an unexplained generic float.
- The interaction starts from the part that conceptually causes it and from that part's current position.
- Only one animation frame loop is active.

## Lifecycle and accessibility

- The loop pauses when the tab is hidden and when the scene is off-screen.
- `prefers-reduced-motion` shows a complete static composition.
- Interactive SVGs or hit areas have an accessible name and keyboard path.
- A labeled HTML equivalent exists when the SVG part control is not reliably exposed by the browser.
- Buttons have accurate names, pressed states where appropriate, and visible focus.
- Decorative SVG groups are hidden from assistive technology when needed.

## Visual

- Composition reads at the intended desktop width.
- A narrow mobile viewport keeps the main actor and story legible without horizontal page overflow.
- The first working render received a real browser-based refinement pass before final verification.
- The subject remains recognizable from its silhouette and at thumbnail size without depending on labels or motion.
- Major subject parts have deliberate proportions, alignment, overlaps, and contact points rather than looking like unrelated geometric primitives.
- Curves and joints look intentional; there are no obvious path kinks, accidental bumps, or ambiguous near-tangencies.
- The subject's outer contour, structural divisions, and small details form a clear stroke hierarchy.
- Small details improve recognition or expression and do not turn into clutter at delivery size.
- Line weights, caps, joins, fills, and accent colors are coherent.
- The environment remains neutral unless the brief requires otherwise.
- One identifying subject region carries the default accent; the entire subject or scene is not colored accidentally.
- The accent usually covers about 20%–40% of the subject and related effects reuse it only when meaningful.
- The accent follows the subject's construction and retains readable outline contrast.
- Background layers are quieter than the subject and communicate depth through weight, opacity, density, scale, or motion speed.
- Scenery does not accidentally cross, merge with, or form distracting tangencies against the important subject silhouette.
- Negative space remains around the subject's face, front, direction of action, or interaction effect.
- Decorative elements have been removed or simplified when they compete with the main story.
- Primary, secondary, and background motion remain visually distinct.
- Important elements do not clip unexpectedly during jumps, rotation, or overshoot.
- Text remains selectable/real HTML when it is interface copy rather than artwork.
- Mobile composition keeps the subject and hit target usable; secondary detail is reduced or recomposed when scaling alone would make them too small.
- The same representative desktop, interaction, paused, and mobile states were compared again after refinement.

## Technical

- Project build/check commands pass.
- Browser console contains no new errors.
- No animation library or large dependency was added without a real need.
- Cleanup removes observers, listeners, and frame requests in component-based projects.
- Output paths and local/published status are reported accurately.
- Transparent/component outputs do not contain accidental page chrome or a forced opaque background.

Capture or inspect at least: early draw state, completed composition, selective color balance, active subject-specific loop, semantic interaction peak, paused state, reduced-motion state, desktop viewport, and narrow viewport. If a state cannot be checked, say so rather than marking it passed.
