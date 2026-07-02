# tools/central-library

A functional implementation of the **Central Library** design
(`Central Library.dc.html`, exported from claude.ai/design). One unified library
over the three builds — Heavy Metal Index, Microbiome Medicine, WikiBiome — with
a combined-corpus view, per-build routing, dedup provenance, and preset PubMed
call groups.

## Run it

```bash
npm run central-library      # then open http://127.0.0.1:8092
```

The page is self-contained (sample data inline), so `public/index.html` also
opens directly. Local-only; override the port with `HMI_CENTRAL_LIBRARY_PORT`.

## What's implemented

Pixel-faithful to the mockup (exact colors/dimensions transcribed from source),
with every interaction working:

- **Library tab** — build filter rail (All / HMI / Microbiome Medicine /
  WikiBiome / Unfiled), metal · category · condition chips, combined-corpus
  stat cards, live search, Recent / A–Z / Status sort, paper table with
  per-build routing squares, click-through **provenance drawer** (PMID/PMCID/DOI,
  routed builds, PDF status, dedup note), and the ingest drop-zone with toast.
- **Presets tab** — preset call groups per build; a query-template editor
  (domain filter, date window, max results, SERP recall toggle); editable preset
  terms; and the **live-resolved PubMed term** + SERP recall query that recompute
  as you edit synonyms / MeSH / domain.
- **Pulls / Coverage** — the mockup's placeholder screens.

## Notes

- The medium is HTML/CSS/JS. The mockup used a custom `<x-dc>` reactive
  framework; this is a plain-JS recreation of the same visual output and
  behavior (per the handoff README: match the output, don't copy the framework).
- Events use **document-level delegation** (`data-act` / `data-input`), not
  inline `onclick=`/`oninput=`. Inline handlers get stripped by strict
  Content-Security-Policy on some preview/embed surfaces, which makes a page
  render but not respond; delegation avoids that.
- **Data is the mockup's sample set** (13 papers, illustrative counts). Wiring
  this to the real corpus (`data/evidence/discovery/corpus-index.json`,
  `wiki/sources/`) and the real fetch/dedup pipeline is the next phase.

## Files

```
tools/central-library/
├── server.mjs           static server (node:http, 127.0.0.1:8092)
├── README.md
└── public/
    ├── index.html       shell + font loading
    ├── styles.css       global base (verbatim from the mockup <helmet>)
    └── app.js           ported logic + render + delegated events + sample data
```
