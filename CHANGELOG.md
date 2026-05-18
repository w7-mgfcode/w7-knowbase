# Changelog

All notable changes to `w7-knowbase` are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this
project follows [Semantic Versioning](https://semver.org/) — see
[`.claude/rules/versioning.md`](.claude/rules/versioning.md).

## [Unreleased]

## [0.2.0] - 2026-05-18

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
- All 7 architecture pages extended from 5 to 11 sections — Core Principles,
  Use Cases, Routing Strategy, Recommended Frameworks, Expected Results, and
  Evaluation — with content refreshed to mid-2026 practice (named frameworks,
  cited benchmark numbers, 2025-2026 developments such as LazyGraphRAG,
  LightRAG, HippoRAG2, and RAGRouter-Bench).
- Gemini API compatibility reference page
  (`reference/gemini-compatibility.html`) — the native `google-genai` SDK vs
  the OpenAI-compatibility layer, the mid-2026 Gemini 3.x model lineup,
  streaming, function calling, structured outputs, the RAG-relevant features
  (long context, context caching, search grounding, embeddings, Batch API),
  and an OpenAI→Gemini migration guide. Cyan-accented, wired into the sidebar
  nav and the reference pager chain.
- LLM Wiki page (`architectures/llm-wiki.html`) — a 15-section bilingual
  deep-dive on Karpathy's "compile, don't retrieve" knowledge pattern: the
  compilation analogy, the three-layer architecture, the three operations
  (ingest / query / lint), the compounding property, a head-to-head
  *LLM Wiki vs RAG* comparison with when-to-use-which guidance, a hands-on
  step-by-step walkthrough for building one, and a closing trio of sections
  restating the core idea, the three layers and the three operations with
  diagram blocks. Presented as an architecture page — explicitly framed as an
  alternative to RAG, not a RAG variant. Adds a new `--wiki-*` accent token
  family (lime `#a3e635`) to `assets/css/knowbase.css`; wired into the sidebar
  nav, the landing page, and the architecture pager chain.

### Changed
- OpenAI compatibility reference page §04 expanded with a per-model detail
  card grid — one `card--rich` per model (GPT-5.5, GPT-5.5-pro, GPT-5.4 /
  mini / nano, GPT-5.3-Codex, o3, o4-mini) showing input/output modalities,
  context window, max output, knowledge cutoff, reasoning mode and key
  capabilities. Data sourced from the `developers.openai.com` model pages.
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
