# DESIGN.md — w7-knowbase Design System

Semantic design system for **w7-knowbase**, a bilingual static documentation site
on RAG architectures. This file is the source of truth for visual decisions and
the brief consumed by **Google Stitch** when generating or editing screens.

> **Status:** starter system, carried over from the previous site (`oldsite/`).
> Refine it through the `stitch-design` / `design-md` skills as the rewrite
> progresses.

---

## 1. Brand & Atmosphere

- **Personality:** technical, precise, calm, authoritative — a reference an
  engineer trusts. Not playful, not marketing-y.
- **Mood:** dark, focused, "developer console at night." High contrast for long
  reading sessions.
- **Density:** information-rich but breathable — generous whitespace between
  sections, tight within components.
- **Motion:** subtle only — 0.15s–0.25s ease transitions on hover/toggle. No
  decorative animation.

## 2. Color Tokens

### Surfaces & text (dark theme)

| Token | Hex | Use |
|-------|-----|-----|
| `--bg-primary` | `#0a0e17` | Page background |
| `--bg-secondary` | `#111827` | Sidebar, diagram boxes |
| `--bg-card` | `#1a2035` | Cards |
| `--bg-card-hover` | `#1e2640` | Card hover |
| `--border` | `#2a3450` | Default borders |
| `--border-light` | `#354160` | Emphasized borders |
| `--text-primary` | `#e8edf5` | Body text, headings |
| `--text-secondary` | `#8b97b0` | Subtitles, secondary text |
| `--text-muted` | `#5a6580` | Captions, metadata |

### Architecture accent colors

Each RAG architecture owns one signature color. Each has a `-dim` variant
(same hue at 12% opacity) for tinted backgrounds.

| Token | Hex | Architecture |
|-------|-----|--------------|
| `--flat-color` | `#f59e42` | Flat RAG (orange) |
| `--hier-color` | `#4d9fff` | Hierarchical RAG (blue) |
| `--graph-color` | `#b07fff` | Graph RAG (purple) |
| `--agent-color` | `#43d17a` | Agentic RAG (green) |
| `--self-color` | `#f25c54` | Self-RAG / CRAG (red) |
| `--adapt-color` | `#f472b6` | Adaptive RAG (pink) |
| `--raptor-color` | `#fbbf24` | RAPTOR (yellow) |
| `--cyan` | `#36d6c3` | Accent + reference pages |

**Rule:** a page uses exactly one architecture color as its accent. Reference
pages (embedding models, reranking, evaluation, …) use `--cyan`.

**Exception — categorical card grids.** On a reference page, a *card grid* may
color individual cards with the architecture palette as a categorical cue —
one color per provider / model / trend — via the `card--<arch>` variants. The
page accent stays `--cyan` for all page chrome (section titles, tags, chips,
links); only the catalog cards carry per-card color. This keeps the
single-accent rule for the page while letting dense catalog grids stay
scannable. First applied on `reference/embedding-models.html`.

## 3. Typography

| Token | Family | Use |
|-------|--------|-----|
| `--font-sans` | `Inter` | Body text |
| `--font-display` | `Space Grotesk` | Headings, titles |
| `--font-mono` | `JetBrains Mono` | Code, stats, tags |

- Base body size ~16px, line-height `1.65`.
- Headings use the display font, tighter line-height.
- Tags, code, and numeric stats use the mono font.
- Loaded from Google Fonts; weights 300–800.

## 4. Spacing & Radius

Spacing scale (`--space-*`): `4 · 8 · 16 · 24 · 32 · 48 · 64` px
(`xs · sm · md · lg · xl · 2xl · 3xl`).

Radius: `--radius-sm 6px`, `--radius-md 10px`, `--radius-lg 14px`.

Transitions: `--transition-fast 0.15s ease`, `--transition-base 0.25s ease`.

## 5. Layout

- **Shell:** fixed left **sidebar** (navigation) + scrollable **main content**.
- **Mobile:** sidebar collapses behind a hamburger; a mobile header bar holds the
  menu button and language toggle.
- **Content width:** centered container, comfortable measure for reading.
- **Breakpoints:** `1200px` (4-col → 2-col), `1024px` (sidebar → mobile menu),
  `768px` (grids → 1-col), `480px` (minimal padding).
- Grid helpers: `grid-2`, `grid-3`, `grid-4`.

## 6. Core Components

| Component | Notes |
|-----------|-------|
| **Sidebar nav** | Grouped: Overview · Architectures · Reference. Active state in the page's accent color. |
| **Page header** | Architecture title + subtitle, tinted with the accent color. |
| **Section** | Numbered label (mono tag) + title in accent color + description. |
| **Card** | `--bg-card`, accent top-border, tag, title, body. Hover lifts to `--bg-card-hover`. |
| **Rich card** | `card--rich` + a `card--<arch>` color: mono `card__tag` pill, optional `card__spec` line, body, and a bleeding 2-cell `card__stats` footer. For reference catalog grids. |
| **Tag / pill** | Mono, uppercase, accent-tinted background. |
| **Comparison table** | Dark rows, accent header, used on the landing page. |
| **Mermaid diagram** | Rendered in a `--bg-secondary` box; theme matched to dark palette. |
| **Pipeline / flow** | Step nodes connected by arrows, each step accent-colored. |
| **Info box** | Callout with accent left-border and tinted background. |
| **Language toggle** | `HU / EN` segmented control; persists choice. |

## 7. Bilingual Requirement (hard constraint)

Every user-visible string ships **both** languages:

```html
<span lang="hu">Magyar szöveg</span>
<span lang="en">English text</span>
```

CSS hides the inactive language; a JS toggle switches `body.lang-en` and persists
to `localStorage` (`knowbase-lang`). Stitch-generated screens MUST keep this
pattern — never emit a single-language string.

## 8. Accessibility

- Maintain WCAG AA contrast against the dark surfaces (text tokens already pass).
- Semantic HTML: `nav`, `main`, `aside`, `section`, headings in order.
- All interactive elements keyboard-reachable with a visible focus ring.
- Diagrams and images carry meaningful `alt` text (bilingual where shown).

## 9. For Stitch generations

When prompting Stitch, always include:
1. This design system (tokens, fonts, components above).
2. The target page's **single accent color**.
3. The **bilingual** constraint (§7).
4. "Dark theme, static HTML/CSS, no framework, no build step."
