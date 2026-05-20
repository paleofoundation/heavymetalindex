# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1376 candidate queries
- Path B (empty product + thin ingredient pages): 8178 candidate queries
- Total candidates (after dedup): 9554
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9554
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
| P1 | kitchen-countertop-cleaners × Pb | kitchen/countertop cleaners lead |
| P1 | anti-static-products × tHg | anti static products heavy metals total mercury |
| P1 | feminine-deodorants × tHg | feminine deodorants (leave-on and rinse-off) total mercury |
| P1 | baby-oil × Pb | baby oil heavy metals Pb occurrence |
| P1 | plant-milks-rice-based × iAs | plant milks rice based heavy metals inorganic arsenic occurrence |
| P1 | food-packaging-cans-lids × Cd | food packaging cans lids Cd |
| P1 | infant-bottles × Cd | infant bottles Cd |
| P1 | toy-pacifiers × tHg | toy pacifiers heavy metals total mercury |
| P1 | toys-attached-cribs-playpens × tHg | toys attached cribs playpens total mercury |
| P1 | supplements-oral-solids-lozenges × Cd | supplements oral solids lozenges heavy metals Cd |
| P1 | cereal-meals × Pb | cereal meals lead |
| P1 | pasta-rice-based × tAs | pasta (rice-based) arsenic |
| P1 | douches-vaginal-irrigation × tHg | douches and vaginal irrigation solutions/apparatus components total mercury |
| P1 | baby-sunscreen-mineral × Cd | baby sunscreen mineral Cd occurrence |
| P1 | oven-grill-bbq-cleaners × Cd | oven grill bbq cleaners Cd |
| P1 | swings-and-bouncers × tHg | swings and bouncers heavy metals mercury |
| P1 | menstrual-intimate-products-other × tAs | menstrual intimate products other total arsenic |
| P1 | water-filters × Cd | water filters Cd |
| P1 | infant-formula-dairy × iAs | infant formula dairy heavy metals speciated arsenic occurrence |
| P1 | food-storage-lids-gaskets × tAs | food storage lids gaskets arsenic |

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