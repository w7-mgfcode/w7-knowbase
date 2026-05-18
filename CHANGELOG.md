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
  colour. `graph-rag.html` carries full content; the other six are scaffolds
  pending content migration from `oldsite/`.
- `assets/css/knowbase.css` — hand-written design-system stylesheet built from
  `.stitch/DESIGN.md` tokens.
- `assets/js/knowbase.js` — sidebar generation, bilingual HU/EN toggle
  (persisted to `localStorage`), and mobile navigation.

## [0.1.0] - 2026-05-18

### Added
- Repository scaffold for the static-site rewrite: `.gitignore`, directory
  structure (`architectures/`, `reference/`, `assets/`), `.stitch/DESIGN.md`,
  and static-site CI.
- `.claude/` governance adapted to this repo (rules, hook, agent).

### Changed
- Repository reset to a clean slate; all previously tracked files untracked.
  The old site moved to `oldsite/` (now git-ignored) as rewrite source material.
