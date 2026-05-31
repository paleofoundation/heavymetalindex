# Manual-fetch ingest stops — 2026-05-31

Stop reports for PDFs the autonomous ingest loop chose not to ingest. Each entry
names the PDF, the slug it was auto-fetched under, why it was rejected, and the
destination folder it was moved to.

## auto-fruit-snacks-pb-product_2025_10-3389-fnut-2025-1513343.pdf

- **Source folder:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`
- **Auto-fetch slug intent:** fruit snacks × Pb × product-level occurrence
- **DOI:** 10.3389/fnut.2025.1513343
- **Actual paper:** Shyam S, Salas-Salvadó J (2025). "The impact of investigator
  bias in nutrition research." *Frontiers in Nutrition* 12:1513343. Article type:
  **Opinion** (meta-research / research ethics).
- **Why rejected:** Off-topic. The paper is an opinion piece on cognitive and
  positional biases in nutrition research methodology. It contains zero heavy-
  metal measurements, zero analytical chemistry, zero food-occurrence data, and
  zero mention of fruit snacks. The discover keyword matcher false-positived on
  the journal name + nutrition keywords; the slug `fruit-snacks-pb-product` has
  no relationship to the paper's content.
- **Action:** Moved PDF to
  `raw/manual-fetch/seasonal-geographic-variance/skipped/skip_no-heavy-metal-data/`.
  Not ingested, not committed, no wiki source page created.
- **Upstream signal:** The auto-fetch slug-to-PDF matching logic in the discover
  pipeline produced a wrong match here. If this pattern recurs (Frontiers
  opinion pieces being grabbed under occurrence slugs), the discover scorer may
  need a filter against article-type Opinion / Editorial / Perspective for
  occurrence-intent queries.
