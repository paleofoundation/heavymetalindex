# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1420 candidate queries
- Path B (empty product + thin ingredient pages): 8246 candidate queries
- Total candidates (after dedup): 9666
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9666
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
| P1 | laundry-detergents × tHg | laundry detergents total mercury |
| P1 | dietary-supplements × Cd | dietary supplements Cd occurrence |
| P1 | sparkling-carbonated-water × Pb | sparkling carbonated water heavy metals Pb |
| P1 | bleaching-whitening-additives × Cd | bleaching whitening additives Cd |
| P1 | dietary-supplements × Pb | dietary supplements heavy metals Pb occurrence |
| P1 | soft-drinks-carbonated-beverages × Pb | soft drinks carbonated beverages heavy metals Pb occurrence |
| P1 | infant-bottles × tHg | infant bottles toy heavy metals mercury |
| P1 | infant-food-powder × tAs | infant food powder total arsenic |
| P1 | dish-soaps-manual × Cd | dish soaps manual Cd |
| P1 | infant-formula-rtf-soy × Ni | infant formula rtf soy nickel occurrence |
| P1 | food-storage-plastic-containers × tAs | plastic food storage containers arsenic |
| P1 | whitening-products × Cd | whitening products Cd |
| P1 | makeup-body-paints-bases-fixatives × tAs | makeup body paints bases fixatives heavy metals arsenic |
| P1 | cleaning-wipes-household × Pb | cleaning wipes (household surface wipes) Pb |
| P1 | tableware-glassware × Cd | tableware glassware cadmium |
| P1 | meat-and-poultry-purees × Pb | meat and poultry purees heavy metals Pb occurrence |
| P1 | baby-sunscreen-chemical × Pb | baby sunscreen chemical Pb occurrence |
| P1 | water-filters × tAs | water filters arsenic occurrence |
| P1 | rice-noodles × Pb | rice noodles dietary exposure Pb |
| P1 | food-packaging-cans-lids × Pb | food packaging cans lids lead |

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