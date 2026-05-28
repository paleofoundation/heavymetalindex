# Gap-driven wishlist v2 — 2026-05-28

## Summary

- Path A (pooling-engine-driven thin cells): 1490 candidate queries
- Path B (empty product + thin ingredient pages): 8169 candidate queries
- Total candidates (after dedup): 13199
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 13199
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 2500

### By source path

- ingredient: 365
- product: 2135

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 156 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | ingredient:plums × tHg | plums total mercury contamination occurrence |
| P1 | conditioner-adult-rinse-out × Pb | conditioner (general adult, rinse-out) Pb |
| P1 | dietary-supplements × tHg | dietary supplements mercury occurrence |
| P1 | tableware-metal-bottles-tumblers × tHg | metal bottles/tumblers mercury |
| P1 | ingredient:soybean-oil × Sn | soybean oil heavy metals tin contamination occurrence |
| P1 | infant-formula-dairy × iAs | infant formula dairy speciated arsenic occurrence |
| P1 | sports-energy-drinks × tAs | sports energy drinks heavy metals arsenic occurrence |
| P1 | ingredient:canned-mushrooms × Sn | canned mushrooms heavy metals tin contamination occurrence |
| P1 | clasps-fasteners-infant-products × tHg | clasps/fasteners (snaps, zippers, buttons) used in infant products mercury |
| P1 | food-packaging-glass-jars × tHg | glass jars mercury |
| P1 | utensils-metal × Cd | utensils metal Cd |
| P1 | canned-tomatoes × Sn | canned tomatoes heavy metals tin occurrence |
| P1 | baby-shampoo-body-wash × Cd | baby shampoo body wash Cd occurrence |
| P1 | toys-balls × Cd | toys balls cadmium |
| P1 | infant-formula-powder-dairy × Cr-VI | infant formula powder dairy heavy metals hexavalent chromium occurrence |
| P1 | menstrual-tampons × Pb | menstrual tampons (scented/unscented; applicator tested as distinct component) Pb |
| P1 | cookware-nonstick-coated × Cd | cookware nonstick coated heavy metals Cd |
| P1 | all-purpose-cleaners × Cd | all purpose cleaners heavy metals Cd |
| P1 | food-packaging-caps-closures × Pb | caps/closures Pb |
| P1 | ingredient:melon × Sn | melon heavy metals tin contamination occurrence |

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
- **Per-run cap (2500)**: bounded query volume so single days don't emit unbounded OpenAlex requests.