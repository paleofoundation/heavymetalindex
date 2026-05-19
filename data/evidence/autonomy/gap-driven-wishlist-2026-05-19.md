# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1238 candidate queries
- Path B (empty product + thin ingredient pages): 8202 candidate queries
- Total candidates (after dedup): 9440
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9440
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
| P1 | scented-wax-blocks-melts × Pb | scented wax blocks melts heavy metals lead |
| P1 | biscuits × tHg | biscuits mercury |
| P1 | pet-supplements-calming-behavioral × tAs | calming/behavioral supplements arsenic |
| P1 | window-glass-mirror-cleaners × Pb | window glass mirror cleaners lead |
| P1 | pet-supplements-functional-blends × Cd | pet supplements functional blends Cd |
| P1 | dried-fruit × Cd | dried fruit heavy metals Cd occurrence |
| P1 | baby-talcum-powder × Cd | baby talcum powder heavy metals cadmium occurrence |
| P1 | food-storage-silicone × Pb | food storage silicone Pb |
| P1 | infant-and-child-foods-master × iAs | infant and child foods master inorganic arsenic occurrence |
| P1 | infant-formula-stage1 × Cd | infant formula stage1 Cd occurrence |
| P1 | bottled-drinking-water × Pb | bottled drinking water lead occurrence |
| P1 | infant-food-puree-poultry × Cd | infant food puree poultry Cd |
| P1 | pet-supplements-oils × Cd | pet supplements oils heavy metals cadmium |
| P1 | oral-products-other × Pb | other oral products (case-by-case) lead |
| P1 | fruit-snacks × Pb | fruit snacks Pb occurrence |
| P1 | infant-food-puree-fruit × Cd | infant food puree fruit heavy metals cadmium |
| P1 | supplements-oral-solids-softgels × tAs | supplements oral solids softgels arsenic |
| P1 | utensils-plastic-silicone-tools × tHg | utensils plastic silicone tools mercury |
| P1 | fermented-beverages-non-tea-based × Cd | fermented beverages non tea based Cd occurrence |
| P1 | cookware-specialty-alloy × Pb | cookware specialty alloy heavy metals Pb |

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