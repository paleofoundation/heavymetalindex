# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1208 candidate queries
- Path B (empty product + thin ingredient pages): 8174 candidate queries
- Total candidates (after dedup): 9382
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9382
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
| P1 | canned-fish × MeHg | canned fish methyl mercury occurrence |
| P1 | infant-porridges-dairy × tAs | infant porridges dairy total arsenic |
| P1 | baby-oil × Cd | baby oil Cd occurrence |
| P1 | baby-oil × Cd | baby oil heavy metals Cd occurrence |
| P1 | carpet-cleaners × Pb | carpet cleaners heavy metals lead |
| P1 | pacifiers-and-sucking-teething-aids × tAs | pacifiers and sucking teething aids arsenic occurrence |
| P1 | salt × Cd | salt food contact material Cd |
| P1 | supplements-oral-liquids-droppers × tHg | oral liquids: droppers mercury |
| P1 | toys-battery-electronic × tAs | battery-operated/electronic toys arsenic |
| P1 | salt × tAs | salt cookware leaching arsenic |
| P1 | sensor-puff-releasers × tAs | sensor puff releasers heavy metals total arsenic |
| P1 | infant-cereal × tHg | infant cereal mercury occurrence |
| P1 | baby-powder-cornstarch × Cd | baby powder cornstarch cosmetic safety cadmium |
| P1 | infant-bottles × tAs | infant bottles arsenic |
| P1 | home-air-emission-products-other × tAs | home air emission products other total arsenic |
| P1 | food-packaging-foils-wraps × Cd | food packaging foils wraps Cd |
| P1 | supplements-teas-labeled × Cd | supplements teas labeled heavy metals cadmium occurrence |
| P1 | plant-milks-non-soy-non-rice × Cd | plant milks non soy non rice heavy metals Cd occurrence |
| P1 | infant-formula-dairy × Sn | infant formula dairy heavy metals tin occurrence |
| P1 | clasps-fasteners-infant-products × Pb | clasps fasteners infant products heavy metals Pb |

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