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

Local-only; override the port with `HMI_CENTRAL_LIBRARY_PORT`.

## The research tool (real — the Presets tab)

The **Presets tab** is the real, working research tool — a rebuild of the old
Microbiome Medicine research tool. You pick a preset set, enter a **condition**,
and it substitutes the condition into every preset query, searches the
literature, dedupes each query's results, and downloads the open-access PDFs
into a folder per query:

```
~/Desktop/<Condition>/<query with condition substituted>/<paper>.pdf
```

(e.g. `~/Desktop/Multiple Sclerosis/Systematic review Multiple Sclerosis/…`).
This reproduces the output of the old tool — see the `Multiple Sclerosis` folder
on the Desktop. A `_manifest.csv` records every query, decision, source, and file.

**Presets** live in `presets/<set>.json` as `{ groups: [{ name, queries: […] }] }`
where each query is a template containing `[Condition]`. Shipped:
`microbiome-medicine.json` — the 10 Microbiome Medicine groups (Overview,
Mechanistic Insights, Signatures, Diet, Metabolites, Interventions, Heavy Metals,
Drug Repurposing, Associated Conditions, Causal Studies), 74 queries, verbatim
from Karen's notes and verified to reproduce all 69 real Multiple Sclerosis
folders. Edit the JSON to change queries; add a new file for a Heavy Metal Index
preset set (its old set was lost and will be rebuilt from the analyte panel +
taxonomy).

Run it from the UI (Presets tab → enter condition → Run), or headless:

```bash
npm run central-library:run -- --condition "Multiple Sclerosis"
node tools/central-library/run-condition.mjs --condition "Endometriosis" \
     --preset microbiome-medicine --from-year 2010 --max-per-query 10
node tools/central-library/run-condition.mjs --list-presets
```

The runner reuses the fetch-app engine wholesale (the source adapters + the
PDF-download-with-rescue chain), so there is one fetch/dedupe/download stack.
Unlike the HMI fetch-app it applies no food/HMI relevance gate — a research pull
downloads what each query returns. PubMed uses Karen's NCBI key if set (faster);
everything works key-less at lower rate limits.

The **Library / Pulls / Coverage** tabs remain the mockup design (sample data);
wiring the combined-corpus view to the real corpus is the next phase.

The page's static assets are self-contained, but the research tool needs the
server (`npm run central-library`) for its API.

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
