# w7-knowbase

> A bilingual (🇭🇺 Hungarian / 🇬🇧 English) documentation site on
> **Retrieval-Augmented Generation (RAG) architectures** — for engineers who
> need to choose, compare, and build RAG systems.

`w7-knowbase` is a dark-themed, build-free static site. It explains seven RAG
architectures in depth, compares them side by side, and covers the cross-cutting
concerns of production RAG in 2026 — reranking, hybrid search, evaluation, and
more. Every page is fully bilingual.

## Status

🚧 **In active rewrite.** The repository was just reset to a clean slate. The
previous version of the site is preserved locally in `oldsite/` (not tracked) and
is the source material for the new build. The new UI is being designed with
**Google Stitch**.

## The architectures covered

| # | Architecture | Color |
|---|--------------|-------|
| 1 | Flat RAG | 🟠 orange |
| 2 | Hierarchical RAG | 🔵 blue |
| 3 | Graph RAG | 🟣 purple |
| 4 | Agentic RAG | 🟢 green |
| 5 | Self-RAG / CRAG | 🔴 red |
| 6 | Adaptive RAG | 🩷 pink |
| 7 | RAPTOR | 🟡 yellow |

Plus reference pages: embedding models, reranking, hybrid search, evaluation,
agent architecture, and more.

## Tech

- Pure static **HTML / CSS / JS** — no build step, no npm, no framework
- [Mermaid](https://mermaid.js.org/) for diagrams
- Design system: see [`.stitch/DESIGN.md`](.stitch/DESIGN.md)
- UI designed with [Google Stitch](https://stitch.withgoogle.com/)

## Running locally

No build needed — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Contributing

- Read [`CLAUDE.md`](CLAUDE.md) and the rules in [`.claude/rules/`](.claude/rules/).
- Every user-visible string must ship both Hungarian and English variants.
- Commits follow `type(scope): description (#issue)` and reference an open issue.
- Branch off `main` as `<type>/<scope-slug>`.

## Repository layout

| Path | What |
|------|------|
| `index.html`, `architectures/`, `reference/` | The site pages |
| `assets/` | CSS, JS, images |
| `.stitch/` | Design system for Google Stitch |
| `.claude/` | Governance — rules, skills, agents, hooks |
| `oldsite/` | Previous site (local-only, rewrite source) |
| `.feature/` | Reference codebases (local-only knowledge) |

## License

TBD.
