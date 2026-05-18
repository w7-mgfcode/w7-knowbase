# Changelog

All notable changes to `w7-knowbase` are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this
project follows [Semantic Versioning](https://semver.org/) — see
[`.claude/rules/versioning.md`](.claude/rules/versioning.md).

## [Unreleased]

### Added
- Landing page (`index.html`): RAG comparison table, decision flow, and a
  card grid for the seven architectures.
- Seven architecture pages under `architectures/` (flat, hierarchical, graph,
  agentic, self-rag-crag, adaptive, raptor), each with its signature accent
  colour and full deep-dive content: overview, working pipeline, a rendered
  architecture diagram, strengths/trade-offs, and a code example.
- Four reference pages under `reference/` (embedding models, reranking, hybrid
  search, evaluation) — cyan-accented, matching the architecture-page depth.
- Mermaid architecture diagrams, rendered from a version-pinned, SRI-hashed CDN
  build; each diagram ships bilingual HU/EN variants.
- `assets/css/knowbase.css` — hand-written design-system stylesheet built from
  `.stitch/DESIGN.md` tokens.
- `assets/js/knowbase.js` — sidebar generation, bilingual HU/EN toggle
  (persisted to `localStorage`), mobile navigation, and Mermaid rendering.
- OpenAI API compatibility reference page
  (`reference/openai-compatibility.html`) — Chat Completions vs Responses API,
  the 2026 model lineup, streaming, function calling, structured outputs,
  built-in tools/MCP, the OpenAI-compatible server ecosystem, and best
  practices. Wired into the sidebar nav and the reference pager chain.

### Changed
- Embedding Models reference page deep-refreshed with mid-2026 data: MMTEB
  leaderboard, API-provider models and consolidated pricing, an open-source
  model catalog, MRL/quantization, late interaction and multimodality, a
  model-selection guide, and 2026 trends.
- Embedding Models reference page card grids redesigned (via the Google Stitch
  workflow): per-architecture-colored cards with monospace tag pills, spec
  lines, and a two-cell stat footer. Adds reusable `card--rich`, `card__tag`,
  `card__spec`, and `card__stats` components to `assets/css/knowbase.css`;
  `.stitch/DESIGN.md` now permits categorical per-card color on reference-page
  card grids.
- Embedding Models reference page expanded with researched mid-2026 data: a
  ranked MMTEB Borda leaderboard, a benchmark-category card grid, provider
  cards rebuilt as model-spec blocks, and MRL/quantization pipeline ladders
  plus a quantization storage table. Adds a `model-list` / `model-line`
  component to `assets/css/knowbase.css`.

## [0.1.0] - 2026-05-18

### Added
- Repository scaffold for the static-site rewrite: `.gitignore`, directory
  structure (`architectures/`, `reference/`, `assets/`), `.stitch/DESIGN.md`,
  and static-site CI.
- `.claude/` governance adapted to this repo (rules, hook, agent).

### Changed
- Repository reset to a clean slate; all previously tracked files untracked.
  The old site moved to `oldsite/` (now git-ignored) as rewrite source material.
