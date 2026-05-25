# Gap-driven wishlist v2 — 2026-05-25

## Summary

- Path A (pooling-engine-driven thin cells): 1448 candidate queries
- Path B (empty product + thin ingredient pages): 8294 candidate queries
- Total candidates (after dedup): 9742
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9742
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
| P1 | fabric-contact-combination-products × Cd | combination products serving multiple functions cadmium |
| P1 | food-packaging-foils-wraps × tHg | foils/wraps total mercury |
| P1 | play-yards-and-gates × tHg | play yards and gates/enclosures mercury |
| P1 | makeup-body-paints-bases-fixatives × tAs | makeup body paints bases fixatives arsenic |
| P1 | dietary-supplements × iAs | dietary supplements speciated arsenic occurrence |
| P1 | infant-cereal × tAs | infant cereal arsenic occurrence |
| P1 | baby-oil × Pb | baby oil heavy metals Pb occurrence |
| P1 | pre-treaters-stain-removers × tHg | pre-treaters (spray/gel/stick) and stand-alone stain/spot removers mercury |
| P1 | food-packaging-plastic-tubs × Cd | plastic tubs cadmium |
| P1 | infant-formula-dairy-free × Pb | infant formula dairy free Pb occurrence |
| P1 | baby-sunscreen-chemical × Pb | baby sunscreen chemical Pb occurrence |
| P1 | infant-food-puree-fish × Pb | infant food puree fish heavy metals Pb |
| P1 | food-packaging-cans-lids × tAs | food packaging cans lids heavy metals arsenic |
| P1 | infant-rice-cereal × Pb | infant rice cereal heavy metals Pb occurrence |
| P1 | fish-marine-non-predatory × tHg | fish marine non predatory heavy metals mercury |
| P1 | rice-snacks-crackers × iAs | rice snacks crackers heavy metals speciated arsenic occurrence |
| P1 | teething-and-snacks-non-rice × Cd | teething and snacks non rice Cd occurrence |
| P1 | hair-removal-products × tAs | hair removal products arsenic |
| P1 | toys-squeeze × tAs | toys squeeze heavy metals total arsenic |
| P1 | tableware-metal-bottles-tumblers × Cd | metal bottles/tumblers cadmium |

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