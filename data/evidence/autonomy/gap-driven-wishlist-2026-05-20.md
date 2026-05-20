# Gap-driven wishlist v2 — 2026-05-20

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
| P1 | fabric-contact-products-other × tHg | other fabric-contact home products (case-by-case) total mercury |
| P1 | food-storage-glass-containers × tAs | food storage glass containers heavy metals total arsenic |
| P1 | plant-milks-non-soy-non-rice × Cd | plant milks non soy non rice Cd occurrence |
| P1 | glucose-solutions × Pb | glucose solutions lead occurrence |
| P1 | body-wash-shower-gel × Cd | body wash shower gel Cd |
| P1 | high-chairs-and-booster-seats × tAs | high chairs and booster seats heavy metals arsenic |
| P1 | kitchen-countertop-cleaners × tAs | kitchen countertop cleaners heavy metals total arsenic |
| P1 | infant-juice × tAs | infant juice arsenic |
| P1 | seaweed-kelp-foods × Cd | seaweed kelp foods Cd |
| P1 | peanuts × Ni | peanuts heavy metals nickel occurrence |
| P1 | sparkling-carbonated-water × Pb | sparkling carbonated water textile heavy metals Pb |
| P1 | toy-chests × Cd | toy chests heavy metals Cd |
| P1 | baby-lotion-cream × Cd | baby lotion cream Cd occurrence |
| P1 | food-packaging-plastic-tubs × Cd | food packaging plastic tubs heavy metals Cd |
| P1 | supplements-oral-liquids-syrups × tAs | supplements oral liquids syrups heavy metals total arsenic |
| P1 | food-packaging-plastic-tubs × Pb | food packaging plastic tubs heavy metals Pb |
| P1 | true-tea-camellia-sinensis × Al | true tea camellia sinensis aluminium occurrence |
| P1 | infant-rice-cereal × tHg | infant rice cereal heavy metals mercury occurrence |
| P1 | soy-products × Al | soy products aluminium occurrence |
| P1 | infant-cereal × Sn | infant cereal heavy metals tin occurrence |

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