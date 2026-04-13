---
name: blog-widget
description: >
  Create interactive SVG widgets (single-file HTML) for kharekartik.dev blog posts. Each widget
  is a self-contained dark-themed interactive visualization with IBM Plex Mono typography, dynamic
  accent color synced from the blog's rotating palette, and vanilla JS. Use when the user asks to
  add diagrams, visualizations, or interactive figures to a blog post.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Blog Widget Skill

Build interactive, self-contained HTML widget files that embed in blog posts on kharekartik.dev
via `<iframe>`. Each widget teaches one concept through a visualization the reader can manipulate.

---

## 1. Output shape

Every widget is a **single `.html` file** containing inline `<style>` and `<script>`. No external
dependencies except the Google Fonts CDN import for IBM Plex Mono.

Place finished files at:

```
public/widgets/<post-slug>/<widget-name>.html
```

Embed in the blog post markdown with:

```html
<iframe src="/widgets/<post-slug>/<widget-name>.html" width="100%" height="<H>" style="border: 1px solid #222; border-radius: 6px; background: #0a0a0a;" loading="lazy"></iframe>
```

Height `<H>` should be the SVG viewBox height + ~140px for title, subtitle, controls, and legend.
Typical range: 460-580px. Prefer the tightest value that avoids scrollbars.

---

## 2. Visual design system

### Dynamic accent color

The blog cycles through 21 accent palettes, stored in `localStorage` under key `home-accent-palette`.
Widgets **must** read this palette and derive all accent-related colors from it. Never hardcode
`#c8e64a` (or any accent hex) in JS render logic — always use the `ACCENT` variable and its
computed derivatives.

Every widget `<script>` must start with this accent loader:

```javascript
// ── Sync accent with the blog's dynamic palette ──
const ACCENT = (() => {
  try {
    const p = JSON.parse(localStorage.getItem('home-accent-palette'));
    return p?.dark?.hex || '#c8e64a';
  } catch { return '#c8e64a'; }
})();
function _hexRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function _mix(rgb, t) {
  return '#' + rgb.map(c => Math.round(10 + (c - 10) * t).toString(16).padStart(2, '0')).join('');
}
const _ac = _hexRgb(ACCENT);
const ACCENT_DIM = _mix(_ac, 0.16);    // dim border for past/completed items
const ACCENT_MID = _mix(_ac, 0.50);    // medium text for completed items
const ACCENT_SOFT = _mix(_ac, 0.30);   // soft text for grid numbers
const ACCENT_FILL = _mix(_ac, 0.08);   // very dark tinted bg under accent items
const ACCENT_FILL_DARK = _mix(_ac, 0.04); // extremely subtle fill
const ACCENT_FAINT = _mix(_ac, 0.10);  // faint stroke for tiny elements
document.documentElement.style.setProperty('--w-accent', ACCENT);
```

The `_mix(rgb, t)` function blends the accent color with `#0a0a0a` (the widget bg) at the given
ratio. This produces solid colors that work for any accent hue — cyan, orange, purple, etc.

The CSS custom property `--w-accent` is set from JS so that all CSS-styled elements (buttons,
titles, sliders) automatically pick up the dynamic accent. SVG elements created in JS use the
`ACCENT` / `ACCENT_DIM` / etc. variables directly in `setAttribute()` calls.

**The `:root` fallback:** CSS must declare `:root { --w-accent: #c8e64a; }` as the initial value.
The JS loader overrides it immediately. The `#c8e64a` fallback only appears in:
1. The `:root` CSS declaration
2. The JS fallback strings in the accent loader

Nowhere else in the file should `#c8e64a` (or any hardcoded accent hex) appear.

### Color palette

```
ROLE                 VALUE              USAGE
──────────────────────────────────────────────────────────
bg                   #0a0a0a            body background
text-primary         #e0e0e0            primary readable text
text-secondary       #888               secondary / muted labels
text-tertiary        #666               hints, subtitles, section headers inside SVG
text-faint           #444               quaternary, barely visible labels
text-disabled        #333               inactive / struck-through items
border               #222               panels, dividers, tracks, inactive outlines
subtle-bg            #1a1a1a            hidden/excluded element backgrounds

accent               ACCENT             primary interactive — active states, success, healthy
accent-fill          ACCENT_FILL        dark tinted bg under accent-bordered items
accent-fill-dark     ACCENT_FILL_DARK   extremely subtle fill
accent-dim           ACCENT_DIM         muted stroke for past/completed items
accent-mid           ACCENT_MID         medium text for completed checkmarks
accent-soft          ACCENT_SOFT        softer text for grid/cell numbers
accent-faint         ACCENT_FAINT       barely visible stroke on tiny elements

error                #e64a4a            delete, failure, critical, invalid  (FIXED — not accent-derived)
error-fill           #1a0a0a            dark red fill under error-bordered items
warn                 #e6a64a            caution, in-progress writer, transient states
info                 #4a9ee6            reader role, informational highlights
```

Error, warning, and info colors are **fixed** — they are semantic and don't change with the accent.

### Semantic color rules

| State | Stroke | Fill | Text |
|---|---|---|---|
| Active / current | `ACCENT` 1.5-2px | `none` | `ACCENT` |
| Completed / past | `ACCENT_DIM` 1px | `ACCENT_FILL_DARK` | `ACCENT_MID` |
| Inactive / future | `#222` 1px | `none` | `#333` |
| Error / deleted | `#e64a4a` 1.5px | `#1a0a0a` | `#e64a4a` |
| Warning / caution | `#e6a64a` | `none` | `#e6a64a` |
| Replaced / superseded | `#222` dashed `4,3` | `none` | `#333` + strikethrough |

### Typography

**Single font family everywhere:** `IBM Plex Mono`, monospace.

```
ELEMENT              SIZE    WEIGHT   COLOR       EXTRA
─────────────────────────────────────────────────────────
.widget-title        11px    400      #c8e64a     uppercase, letter-spacing: 2px
.widget-subtitle     12px    400      #666        sentence case
SVG section labels   10px    —        #666        uppercase inside SVG
SVG body text        11-12px —        #888        status messages, descriptions
SVG small text       8-9px   —        #444-#555   secondary detail, tags
Button text          12px    400      #e0e0e0     IBM Plex Mono
Stats / legend       11px    400      #666        accent-colored values inline
```

Import at the top of every `<style>`:

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');
```

### Layout

```
max-width: 720px (the .widget container)
body padding: 24px 16px
SVG viewBox: always 720 wide, height varies (280-420 typical)
Controls gap: 8px, flex-wrap for mobile
Legend / stats margin-top: 14-16px
```

---

## 3. HTML structure template

Every widget follows this exact anatomy:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Widget Title</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');
  :root { --w-accent: #c8e64a; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #0a0a0a; color: #e0e0e0;
    font-family: 'IBM Plex Mono', monospace;
    display: flex; flex-direction: column; align-items: center;
    padding: 24px 16px;
  }
  .widget { width: 100%; max-width: 720px; }
  .widget-title {
    font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--w-accent); margin-bottom: 6px;
  }
  .widget-subtitle { font-size: 12px; color: #666; margin-bottom: 20px; }
  svg { width: 100%; height: auto; display: block; }
  .controls {
    display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; align-items: center;
  }
  button {
    background: transparent; border: 1px solid #333; color: #e0e0e0;
    font-family: 'IBM Plex Mono', monospace; font-size: 12px;
    padding: 6px 14px; cursor: pointer; transition: all 0.15s;
  }
  button:hover { border-color: var(--w-accent); color: var(--w-accent); }
  button.active { border-color: var(--w-accent); color: #0a0a0a; background: var(--w-accent); }
  /* Add .danger and .warn classes only if the widget needs them */
</style>
</head>
<body>
<div class="widget">
  <div class="widget-title">// widget name here</div>
  <div class="widget-subtitle">one-line instruction telling the reader what to do</div>

  <svg id="main-svg" viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
    <!-- static labels go here -->
    <g id="content"></g>
    <!-- status panel at bottom of SVG -->
    <rect x="40" y="260" width="640" height="45" rx="3" fill="none" stroke="#222" stroke-width="1"/>
    <text x="360" y="288" text-anchor="middle" fill="#888" font-size="11"
          font-family="IBM Plex Mono" id="status-text">initial status message</text>
  </svg>

  <div class="controls">
    <!-- buttons, sliders, mode toggles -->
  </div>
  <!-- optional: .legend or .stats div -->
</div>
<script>
// ── Sync accent with the blog's dynamic palette ──
const ACCENT = (() => {
  try {
    const p = JSON.parse(localStorage.getItem('home-accent-palette'));
    return p?.dark?.hex || '#c8e64a';
  } catch { return '#c8e64a'; }
})();
function _hexRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function _mix(rgb, t) {
  return '#' + rgb.map(c => Math.round(10 + (c - 10) * t).toString(16).padStart(2, '0')).join('');
}
const _ac = _hexRgb(ACCENT);
const ACCENT_DIM = _mix(_ac, 0.16);
const ACCENT_MID = _mix(_ac, 0.50);
const ACCENT_SOFT = _mix(_ac, 0.30);
const ACCENT_FILL = _mix(_ac, 0.08);
const ACCENT_FILL_DARK = _mix(_ac, 0.04);
const ACCENT_FAINT = _mix(_ac, 0.10);
document.documentElement.style.setProperty('--w-accent', ACCENT);

// 1. State
// 2. DOM refs
// 3. render() function — use ACCENT, ACCENT_DIM, etc. in setAttribute() calls
// 4. Event handlers
// 5. Init call
</script>
</body>
</html>
```

### Widget title format

Always prefixed with `//` in lowercase:
- `// snapshot timeline`
- `// delete vector visualizer`
- `// concurrent read/write isolation`

### Widget subtitle

A short imperative sentence telling the reader how to interact:
- "drag the slider to time-travel between table versions"
- "toggle between how a raw lake reader and a metadata-aware reader see the same files"
- "watch metadata bloat accumulate — compact to clean up"

---

## 4. Interaction patterns

Pick the interaction pattern(s) that best teach the concept. You can combine them.

### A. Timeline / scrubber

Best for: showing state across versions or time.

- Horizontal track with circular markers at snap points
- Range `<input>` below SVG synced to SVG scrubber handle
- Play/pause button with `setInterval` (1500ms default)
- Scrubber handle: triangle + vertical line in `#c8e64a`
- Active marker: fill `#c8e64a`, r=8; inactive: fill `#222`, stroke `#444`, r=6

### B. Mode toggle

Best for: comparing two approaches (before/after, raw/managed, safe/unsafe).

- Two (or three) buttons, one `.active` at a time
- State variable: `mode = 'a' | 'b'`
- Full re-render on mode switch
- Mode label at right: `mode: <span style="color:#c8e64a">current</span>`

### C. Step-through sequencer

Best for: showing a pipeline, workflow, or commit sequence.

- `next step ->` and `<- prev step` buttons
- Stage boxes drawn left-to-right with connector arrows
- Current stage: bright accent border + text. Past: dim green + checkmark. Future: dark
- Optional `inject failure` button to demo atomicity / error handling

### D. Accumulate + action

Best for: showing buildup/pressure (files, metadata, queues) and cleanup.

- Action buttons that mutate counters or sets: `delete 10 rows`, `add files`
- A `compact` / `clean` / `reset` button to reverse accumulation
- Gauge bars or grid cells that visually show accumulation
- Status panel text changes color as pressure rises (green -> orange -> red)

### E. Animated loop

Best for: showing a continuous process (writes, compaction pressure, replication).

- `accumulate` / `pause` toggle button
- `setInterval(tick, speed * 150)` where speed comes from a range slider
- `tick()` mutates state + calls `render()`
- Speed slider: `input[type=range]` min=1 max=10 value=5

### F. Cell grid

Best for: showing row-level operations on a data file.

- Grid of small rectangles (20 cols typical), each representing a row
- Cells can be active (green border), deleted (red border + strikethrough), or compacted
- Stats bar below: `base file rows: N`, `visible rows: N`, `delete vector: N`

---

## 5. SVG construction rules

### Coordinate system

- viewBox always starts at `0 0 720 <height>`
- Content inset: x starts at 40-60, ends at 660-680
- Top zone (y 0-50): section labels, small header text
- Main zone (y 50-280): primary visualization
- Status panel zone (y ~280-360): bordered rect with centered status text

### Creating SVG elements in JS

Always use `document.createElementNS` with dynamic accent variables:

```javascript
const el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
el.setAttribute('x', x);
el.setAttribute('y', y);
el.setAttribute('width', w);
el.setAttribute('height', h);
el.setAttribute('rx', 2);        // subtle rounding, always 2-3
el.setAttribute('fill', 'none');
el.setAttribute('stroke', ACCENT);      // dynamic accent — never hardcode a hex here
el.setAttribute('stroke-width', '1.5');
container.appendChild(el);
```

For text:

```javascript
const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
txt.setAttribute('x', x);
txt.setAttribute('y', y);
txt.setAttribute('text-anchor', 'middle');
txt.setAttribute('font-size', '11');
txt.setAttribute('font-family', 'IBM Plex Mono');
txt.setAttribute('fill', '#888');   // neutral colors like #888, #666, #333 ARE hardcoded
txt.textContent = label;
container.appendChild(txt);
```

**Rule:** Use `ACCENT`, `ACCENT_DIM`, `ACCENT_MID`, etc. for any color that should match the
blog's theme. Use literal hex only for neutral grays (`#222`, `#333`, `#666`, `#888`, `#e0e0e0`)
and fixed semantic colors (`#e64a4a` error, `#e6a64a` warn, `#4a9ee6` info).

### Common geometries

| Element | Typical size |
|---|---|
| Clickable marker circle | r: 6-8px |
| Cell in a grid | 32x40px, 1px gap |
| File / box element | 50-130px wide, 22-70px tall, rx 2-3 |
| Timeline track | stroke-width 2, horizontal line |
| Gauge bar track | height 18px, full width, rx 2 |
| Connector arrow | line + triangle polygon, 4px head |
| Status panel | x:40 width:640 height:45-55 rx:3 |

### Strikethrough for removed/deleted items

```javascript
const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', x + 3);
line.setAttribute('y1', y + h / 2);
line.setAttribute('x2', x + w - 3);
line.setAttribute('y2', y + h / 2);
line.setAttribute('stroke', '#e64a4a');
line.setAttribute('stroke-width', '1');
```

### Dashed borders for superseded / uncertain items

```javascript
rect.setAttribute('stroke-dasharray', '4,3');
```

---

## 6. JavaScript architecture

### State-driven rendering

```javascript
// ── Accent loader goes first (see section 2) ──

// 1. Declare all state as top-level variables
let currentIdx = 0;
let mode = 'raw';
let playing = false;
let deleted = new Set();

// 2. Cache DOM refs once
const svg = document.getElementById('main-svg');
const content = document.getElementById('content');
const statusText = document.getElementById('status-text');

// 3. render() is the single source of truth for visuals
function render() {
  content.innerHTML = '';  // clear and rebuild
  // Use ACCENT, ACCENT_DIM, etc. for colors:
  el.setAttribute('stroke', isCurrent ? ACCENT : '#222');
  el.setAttribute('fill', isPast ? ACCENT_FILL_DARK : 'none');
  txt.setAttribute('fill', isPast ? ACCENT_MID : '#333');
}

// 4. Event handlers mutate state, then call render()
document.getElementById('btn-action').addEventListener('click', () => {
  currentIdx++;
  render();
});

// 5. Init
render();
```

### Key principles

- **Never store visual state in the DOM.** All truth lives in JS variables.
- **render() is idempotent.** Calling it twice with the same state produces the same output.
- **Clear and rebuild.** Use `container.innerHTML = ''` then rebuild. Don't try to diff.
- **No frameworks.** Vanilla JS only. No build step.
- **No external JS dependencies.** Everything inline.

### Play/pause pattern

```javascript
let playing = false;
let interval;

document.getElementById('btn-play').addEventListener('click', function () {
  playing = !playing;
  this.textContent = playing ? '⏸ pause' : '▶ play';
  this.classList.toggle('active', playing);
  if (playing) {
    interval = setInterval(() => {
      // advance state
      render();
    }, 1500);
  } else {
    clearInterval(interval);
  }
});
```

### Drag-on-SVG pattern

```javascript
let dragging = false;
handle.addEventListener('mousedown', () => (dragging = true));
handle.addEventListener('touchstart', () => (dragging = true));
document.addEventListener('mouseup', () => (dragging = false));
document.addEventListener('touchend', () => (dragging = false));

function handleDrag(clientX) {
  if (!dragging) return;
  const rect = svg.getBoundingClientRect();
  const svgX = ((clientX - rect.left) / rect.width) * 720;
  // snap to nearest marker
  let closest = 0, minDist = Infinity;
  markerXs.forEach((mx, i) => {
    const d = Math.abs(svgX - mx);
    if (d < minDist) { minDist = d; closest = i; }
  });
  setVersion(closest);
}
document.addEventListener('mousemove', (e) => handleDrag(e.clientX));
document.addEventListener('touchmove', (e) => handleDrag(e.touches[0].clientX));
```

---

## 7. CSS classes reference

Only include the classes the widget actually uses. Don't add unused styles.

```css
/* Always present */
.widget              /* outer container: max-width 720px */
.widget-title        /* // prefixed title, color: var(--w-accent) */
.widget-subtitle     /* instruction text */
.controls            /* flex row of buttons/inputs */

/* Add only if needed */
button.active        /* selected: bg var(--w-accent), text #0a0a0a */
button.danger        /* destructive: border #e64a4a */
button.danger:hover  /* hover: color #e64a4a */
button.warn          /* caution: border #e6a64a */
button.warn:hover    /* hover: color #e6a64a */
button.warn.active   /* active caution: bg #e6a64a */

.legend              /* flex row, gap 16px, font-size 11px, color #666 */
.legend-dot          /* 8x8 circle, inline-block, margin-right 4px — use var(--w-accent) for accent dots */

.stats               /* flex row, gap 24px, font-size 11px, color #666 */
.stats span          /* accent-colored value: color var(--w-accent) */
.stats .del          /* error-colored value: #e64a4a */

.mode-label          /* right-aligned mode indicator */
.mode-label span     /* color: var(--w-accent) */

.slider-labels       /* flex, space-between, font-size 10px, #555 */
.slider-wrap         /* flex row for label + range input */

input[type="range"]  /* height 4px, bg #222, thumb var(--w-accent) 16px */
```

**Important:** All CSS accent references use `var(--w-accent)`, never a hardcoded hex.
The JS accent loader sets `--w-accent` from the blog palette on page load.

---

## 8. Range slider styling

```css
input[type="range"] {
  -webkit-appearance: none;
  height: 4px;
  background: #222;
  border-radius: 2px;
  outline: none;
  margin: 0 4px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px; height: 16px;
  background: var(--w-accent);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #0a0a0a;
}
input[type="range"]::-moz-range-thumb {
  width: 16px; height: 16px;
  background: var(--w-accent);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #0a0a0a;
}
```

---

## 9. Workflow

When the user asks to create widgets for a blog post:

1. **Read the blog post** to understand the concepts being explained.
2. **Identify 3-8 key concepts** that benefit from interactive visualization. Not every section
   needs a widget — only add them where interactivity teaches something text alone cannot.
3. **For each widget, decide which interaction pattern(s)** from section 4 to use.
4. **Write each widget** as a single HTML file following the template in section 3.
5. **Place files** at `public/widgets/<post-slug>/<widget-name>.html`.
6. **Embed iframes** at the appropriate locations in the markdown.

### Choosing what to visualize

Good candidates:
- State transitions over time (timelines, version chains)
- Before/after comparisons (raw vs managed, safe vs unsafe)
- Pipelines and sequences (commit flow, query execution)
- Accumulation effects (small files, metadata bloat, queue depth)
- Row/cell-level operations (deletes, compaction, partitioning)
- Concurrent processes (reader vs writer, leader vs follower)

Bad candidates:
- Static facts that a table or list handles fine
- Code snippets (just use code blocks)
- Simple hierarchies (use mermaid or a static diagram)

### Naming conventions

- Widget file: lowercase-kebab-case describing the concept: `snapshot-timeline.html`, `delete-vector.html`
- Post slug directory: match the markdown filename minus the `.md` extension
- SVG group IDs: descriptive, kebab-case: `#file-area`, `#reader-lane`, `#snap42-files`
- JS variables: camelCase for state and DOM refs, UPPER_CASE for constants

---

## 10. Quality checklist

Before delivering a widget, verify:

- [ ] Single HTML file, no external dependencies (except Google Fonts CDN)
- [ ] Body background is `#0a0a0a`, max-width 720px
- [ ] Uses IBM Plex Mono exclusively
- [ ] Title starts with `//`, is lowercase, accent-colored via `var(--w-accent)`
- [ ] Subtitle tells reader what to do
- [ ] SVG viewBox is `0 0 720 <height>`
- [ ] **Accent loader is present** at the top of `<script>` — reads `home-accent-palette` from localStorage
- [ ] **No hardcoded accent hex** anywhere except the `:root` CSS fallback and the JS fallback strings
- [ ] CSS uses `var(--w-accent)` for all accent-colored elements (buttons, title, slider thumb)
- [ ] JS uses `ACCENT` / `ACCENT_DIM` / `ACCENT_MID` / etc. in all `setAttribute` calls
- [ ] Error (`#e64a4a`), warning (`#e6a64a`), info (`#4a9ee6`) colors stay hardcoded (not accent-derived)
- [ ] Interactive — reader can manipulate something
- [ ] Status/result panel updates on interaction
- [ ] Buttons have hover and active states
- [ ] Renders correctly at widths from 320px to 720px (viewport scales SVG)
- [ ] No console errors
- [ ] `render()` is idempotent and state-driven
- [ ] Iframe embed height is tight (no excessive whitespace or scrollbars)

---

## 11. Common failure modes

Mistakes that have caused real bugs in past widgets. Check for these proactively.

### Mode toggles with variable-height content shift controls

When a widget has mode buttons (e.g. IntVector / VarCharVector / ListVector) and each mode renders
different amounts of SVG content, the viewBox height changes per mode. This pushes the controls and
legend up or down every time the user clicks a button — terrible UX.

**Fix:** Use a **fixed viewBox height** across all modes. Pick the tallest mode's requirement and
use that for every mode. Empty space at the bottom of shorter modes is invisible on a dark
background and far preferable to jumping controls.

```javascript
// Bad — controls shift on every mode switch
if (mode === 'int') svg.setAttribute('viewBox', '0 0 720 260');
else if (mode === 'varchar') svg.setAttribute('viewBox', '0 0 720 360');

// Good — fixed height, controls stay put
svg.setAttribute('viewBox', '0 0 720 360');
```

### Iframe height too short clips controls and legend

The iframe `height` in the blog markdown must account for: body padding (48px) + title (~21px) +
subtitle (~36px) + SVG (viewBox height scaled to width) + controls (~52px) + legend (~34px).
A viewBox of 360 in a 720-max container typically needs **560px** iframe height. When in doubt,
open the widget in a browser at the iframe width and check for scrollbars or clipped buttons.

### Null entries in packed buffers create phantom gaps

For variable-width types (VarChar, List), a null value has a zero-length offset range (e.g.
offsets [8, 8]). The packed data buffer should contain **no characters** for that entry. A common
bug is inserting spaces or placeholder chars for null slots, which misaligns all subsequent bracket
annotations and offset labels.

```javascript
// Bad — inserts spaces for null
dataChars: 'abchello  gorust'   // 16 chars, offsets don't match

// Good — null has zero length, offsets [8,8] means no chars
dataChars: 'abchellogorust'     // 14 chars, brackets align correctly
```

### Adding a third mode to an if/else creates a syntax error

When extending a two-mode widget (if/else) to three modes, the second branch must change from
`else {` to `else if (mode === 'second') {` before adding `else if (mode === 'third') {`.
Otherwise you get `Unexpected token 'else'`.

```javascript
// Bad — "else" already consumed the branch
if (mode === 'int') { ... }
else { /* varchar */ ... }
else if (mode === 'list') { ... }  // SyntaxError

// Good — explicit conditions for each mode
if (mode === 'int') { ... }
else if (mode === 'varchar') { ... }
else if (mode === 'list') { ... }
```
