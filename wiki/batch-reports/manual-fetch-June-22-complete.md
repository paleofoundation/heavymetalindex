---
type: batch-report
folder: "raw/Manual Fetch Kimi /June 22"
date: 2026-06-22
skill: ingest-next-manual-fetch-pdf
outcome: no-new-pages (all candidates are duplicates of already-ingested documents)
noindex: true
---

# Manual-fetch folder close — June 22 (nickel regulatory/reference set)

## Overview

Karen added three PDFs to `raw/Manual Fetch Kimi /June 22` and requested ingest. All
three are duplicates of documents already present in the corpus under different file
copies. No new source pages were created; doing so would duplicate existing content and
violate corpus dedup discipline (Part 5; DOI-collision-dedup work).

## Per-PDF determination

| PDF | sha256 (June 22 copy) | Identity | Existing page | Match basis | Action |
| --- | --- | --- | --- | --- | --- |
| `scientific-opinion-on-the-risks-to-public-health-related-to-the--2015.pdf` | `47bfb0c4` | EFSA CONTAM Panel 2015 Scientific Opinion on nickel in food and drinking water, EFSA Journal 2015;13(2):4002, DOI 10.2903/j.efsa.2015.4002 | [[sources/efsa2015-nickel-food-water]] (clean, updated 2026-05-28) | DOI primary match | Skip (duplicate) |
| `maximum-levels-of-nickel-in-certain-foods.pdf` | `db52612b` | AGRINFO/COLEAD plain-language summary of Commission Regulation (EU) 2024/1987 (30 July 2024) | [[sources/eu-2024-1987-nickel-maximum-levels]] (clean, primary Official Journal text, updated 2026-06-22) | Same regulation; existing page is the authoritative primary OJ source. The AGRINFO PDF is a tier-C secondary explainer that adds nothing the primary text lacks. | Skip (duplicate / secondary-of-primary) |
| `Nickel_and_Compounds_Fact_Sheet.pdf` | `dc02668f` | CA OEHHA Proposition 65 "Nickel and Nickel Compounds" fact sheet, posted February 2025 (3-page consumer capture) | [[sources/oehha-nickel-prop65-factsheet-2025]] (created 2026-06-03 from a fuller 7-page capture, sha256 `33600709`) | raw_handle + title + content match | Skip (duplicate; existing page better-sourced) |

## Note on the OEHHA page malformed advisory

`oehha-nickel-prop65-factsheet-2025` appears in `routing_malformed.csv` as an **advisory**
(missing optional `products`/`ingredients`/`matrices`). This is the correct state for the
page, not a defect: the Prop 65 fact sheet catalogues no occurrence values and explicitly
excludes the dietary pathway from its exposure-route enumeration (inhalation, dust
ingestion, tobacco/cannabis smoke only). There are no food matrices to route. No
merge-enhance was warranted.

## Dedup-hardening note for future sessions

The June 22 OEHHA copy has a different filename (`Nickel_and_Compounds_Fact_Sheet.pdf`)
than the ingested copy, so a future raw_handle-based identity check on the June 22 file
would not auto-match the existing page (the OEHHA fact sheet has no DOI). Title/content
match resolves it. If the June 22 folder is re-swept, this report is the record that the
file is already covered by `oehha-nickel-prop65-factsheet-2025`.
