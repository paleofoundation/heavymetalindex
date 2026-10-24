# Generic page builder (source-first engine, parts C and D)

One builder turns a page's findings into a gate-checked candidate for any ingredient or product page. Contract: [docs/contracts/source-first-engine.md](../../../docs/contracts/source-first-engine.md).

```sh
node tools/engine/page/build.mjs ingredient/honey          # build one page
node tools/engine/page/build.mjs ingredient/honey --check  # compiled outputs unchanged?
node tools/engine/page/build-all.mjs [--family ingredient|product] [--only-ready] [--pages a,b]
node --test tools/engine/page/engine.test.mjs
```

Outputs per page, in `data/evidence/engine/<family>/<slug>/`: `candidate/<slug>.md`, `synthesis.json`, `question-record.json`, `faq-bank-dispositions.json`, `comparator-admission.json`, `evidence-ledger.json`, `fullness-scorecard.json`, `references/`, `thin-page.json`, `gates.json` and, for single builds, `preview/`. `build-all` previews pages in batches under `data/evidence/engine/preview/` and writes `data/evidence/engine/status.json`.

## Inputs

`inputs.mjs` reads a page's evidence. A page that already has a reviewed per-ingredient build keeps that evidence as data: its extraction files, the holds and finding-to-row map in `row-parity.json`, the scope and period decisions and every item decision in its ledger, its monitoring records, verified limits and control records. Pages without one read the findings store (`data/evidence/findings/by-page/`), with monitoring dataset rows aggregated into page results and decisions taken from the store only where it supports them. No module names a food.

## Rules applied to every page

- One row per finding, ids `hmi-occurrence-<slug>-<analyte>-<i>`, shown in the canonical grouped table: metal, then food form, with spread figures folded into their mean or median row as hidden rows (`docs/contracts/ingredient-canonical-style.md`, canonical contamination-profile table).
- Reference scope is form × state × basis. Monitoring records become subgroup medians per reporting region, sampling type and year; composites and printed sample values are single observations; printed subgroup medians from ordinary settings enter once. Means, ranges, maxima, minima and percentiles never enter. Targeted sampling and mining, industrial, wastewater, experimental, fertiliser and manufacturer settings are compared but never set a reference. Families have equal weight; a rating needs at least four units (shared `applyHmiBaselines`).
- Comparisons run HMI reference → within-study contrast (contaminated site against its control, targeted against random sampling, a prepared form against the unprocessed form) → bounded, with the owner's terminal reason codes.
- Collection period comes from the study, never the publication year.
- Prose is templated from the evidence with sentence-level citations; missing evidence is stated, never padded. Up to 20 FAQs from the question bank, each answered from cited data. Quick Read holds source citations only.
- The published page keeps its hero, title, URL and frontmatter; pages listed in `data/evidence/engine/locked-surfaces.json` (default Rice) keep their hero chrome verbatim.

## Gates (`tools/engine/gates/`)

Ingredient pages run the shared fullness audit and presentation check unchanged. Product mode wraps the same code: product discovery adds product aliases, the product slug is the ledger subject, and the presentation check is applied through the canonical marker. Every build also checks the preserved hero and that no output under `data/evidence` reads as a source × food index to the discovery scan.
