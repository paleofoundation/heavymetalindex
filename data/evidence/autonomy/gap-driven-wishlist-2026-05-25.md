# Gap-driven wishlist v2 — 2026-05-25

## Summary

- Path A (pooling-engine-driven thin cells): 1448 candidate queries
- Path B (empty product + thin ingredient pages): 8101 candidate queries
- Total candidates (after dedup): 9549
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9549
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 2500

### By source path

- product: 2500

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 41 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | supplements-oil-based × tAs | supplements oil based heavy metals arsenic |
| P1 | supplements-vitamin-mineral × Cd | supplements vitamin mineral heavy metals Cd |
| P1 | oral-irrigators-water-flossers × iAs | oral irrigators water flossers inorganic arsenic occurrence |
| P1 | food-storage-silicone × Cd | food storage silicone heavy metals Cd |
| P1 | infant-porridges-dairy-free × Cd | infant porridges dairy free heavy metals cadmium |
| P1 | dish-soaps-manual × Cd | dish soaps manual Cd |
| P1 | scented-wax-blocks-melts × Pb | scented wax blocks melts heavy metals Pb |
| P1 | toys-projectile-guns × tAs | toys projectile guns heavy metals total arsenic |
| P1 | supplements-enzymes × tAs | supplements enzymes heavy metals arsenic |
| P1 | floor-cleaners-hard-surface × Cd | floor cleaners (hard surface) cadmium |
| P1 | fish-freshwater × Pb | fish freshwater Pb occurrence |
| P1 | plant-milks-rice-based × Cd | plant milks rice based Cd occurrence |
| P1 | baby-powder-cornstarch × Cd | baby powder cornstarch Cd occurrence |
| P1 | fruit-snacks × Pb | fruit snacks lead occurrence |
| P1 | makeup-body-paints-bases-fixatives × Pb | makeup body paints bases fixatives heavy metals Pb |
| P1 | infant-bottle-nipples × tAs | infant bottle nipples toy heavy metals arsenic |
| P1 | sunflower-seeds × Ni | sunflower seeds nickel occurrence |
| P1 | supplements-oral-solids-lozenges × tHg | supplements oral solids lozenges total mercury |
| P1 | children-personal-care × Pb | children personal care Pb occurrence |
| P1 | matcha × Pb | matcha heavy metals Pb occurrence |

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