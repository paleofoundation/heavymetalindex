# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1420 candidate queries
- Path B (empty product + thin ingredient pages): 8190 candidate queries
- Total candidates (after dedup): 9610
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9610
- Final wishlist (capped at 600): 600

### By priority

- P1: 600

### By source path

- product: 600

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 0 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | pacifiers-and-sucking-teething-aids × iAs | pacifiers and sucking/teething aids speciated arsenic |
| P1 | diaper-cream-non-zno × Pb | diaper cream non zno Pb occurrence |
| P1 | cookware-specialty-alloy × Pb | cookware specialty alloy lead |
| P1 | hair-removal-products × tHg | hair removal products (depilatory creams) mercury |
| P1 | baby-oil × Cd | baby oil Cd occurrence |
| P1 | baby-wipes × Pb | baby wipes Pb occurrence |
| P1 | hand-soap × tHg | hand soap (liquid and bar) mercury |
| P1 | fabric-protectants × Cd | fabric protectants (excluding waterproofing/flame-retardant per gs-48 boundaries) Cd |
| P1 | automatic-puff-releasers × tAs | automatic puff releasers total arsenic |
| P1 | pet-food-semi-moist × tAs | semi-moist pet foods total arsenic |
| P1 | filter-media-and-housings × Pb | filter media and housings Pb |
| P1 | dish-soaps-manual × Cd | dish soaps (manual dishwashing) Cd |
| P1 | toy-pacifiers × tHg | toy pacifiers total mercury |
| P1 | childrens-lip-balm-mineral-bearing × iAs | childrens lip balm mineral bearing heavy metals speciated arsenic occurrence |
| P1 | food-packaging-caps-closures × Pb | food packaging caps closures heavy metals lead |
| P1 | infant-formula-powder-soy × Cr-VI | infant formula powder soy heavy metals chromium(VI) occurrence |
| P1 | infant-food-puree-vegetable × Pb | infant food puree vegetable Pb |
| P1 | infant-rice-cereal × tHg | infant rice cereal mercury occurrence |
| P1 | infant-rice-cereal × tHg | infant rice cereal total mercury occurrence |
| P1 | rice-noodles × tAs | rice noodles total arsenic |

## Coverage rotation

Queries are shuffled with a day-seeded deterministic order, so different cells get priority on different days. Over consecutive days, all eligible cells should receive query-pool attention.

## How this feeds the corpus

Run `npm run wishlist:fetch` to consume this CSV. The existing wishlist pipeline:
1. Reads queries from this file
2. Hits OpenAlex with each query + the OA-only filter
3. Downloads matching OA PDFs to `raw/manual-fetch/auto-fetched/`
4. Logs decisions to `data/evidence/wishlist-fetch-audit.csv` (read by this generator on next run)

Downloaded PDFs are picked up by the autonomy daemon's ingest-marker-batch and ingest-manual-fetch-batch steps on subsequent ticks. The full loop: empty-page detector → wishlist generator (this script) → OpenAlex fetch → PDF download → autonomy daemon ingest → routing audit → empty-page count decreases on next tick.

## v2 changes from v1 (2026-05-18, in response to Karen's "fetching for the same thing yields diminishing returns" observation)

- **Path B added**: empty/thin product and ingredient pages now trigger wishlist queries directly, not just via the pooling-engine output. Closes the 191-empty-product-page gap.
- **Smart keyword generation**: replaces 15-entry hardcoded keyword map. Now derives keywords from slug tokenization + page title + HMTc-category context modifier + generic safety modifier for any product/ingredient slug.
- **Query-history-aware deprioritization**: reads wishlist-fetch-audit.csv, drops queries that have run >=5 times with <2 successful downloads. Substitutes alternative queries via the multi-keyword generation per page.
- **Coverage rotation**: day-seeded deterministic shuffle ensures no cell is permanently starved by always-higher-priority cells.
- **Per-run cap (600)**: bounded query volume so single days don't emit unbounded OpenAlex requests.