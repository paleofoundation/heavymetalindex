# Gap-driven wishlist v2 — 2026-05-18

## Summary

- Path A (pooling-engine-driven thin cells): 1192 candidate queries
- Path B (empty product + thin ingredient pages): 7962 candidate queries
- Total candidates (after dedup): 9154
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9154
- Final wishlist (capped at 600): 600

### By priority

- P1: 600

### By source path

- product: 600

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 148 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | exfoliants-scrubs × Pb | exfoliants/scrubs (body, facial) Pb |
| P1 | baby-talcum-powder × Pb | baby talcum powder heavy metals lead occurrence |
| P1 | food-storage-glass-containers × tHg | food storage glass containers heavy metals mercury |
| P1 | toys-stroller-carriage × Cd | toys stroller carriage cadmium |
| P1 | infant-porridges-dairy-free × Pb | infant porridges dairy free heavy metals Pb |
| P1 | baby-talcum-powder × Cd | baby talcum powder Cd occurrence |
| P1 | pet-supplements-vitamin-mineral × Pb | pet supplements vitamin mineral lead |
| P1 | supplements-oral-solids-softgels × Cd | supplements oral solids softgels cadmium |
| P1 | infant-formula-dairy-free × iAs | infant formula dairy free heavy metals speciated arsenic occurrence |
| P1 | body-wash-shower-gel × tHg | body wash/shower gel mercury |
| P1 | true-tea-camellia-sinensis × Pb | true tea camellia sinensis Pb occurrence |
| P1 | supplements-teas-labeled × Cd | supplements teas labeled cadmium occurrence |
| P1 | rice-snacks-crackers × tAs | rice snacks crackers heavy metals arsenic occurrence |
| P1 | odor-removers-hard-surfaces × tHg | odor removers hard surfaces total mercury |
| P1 | toys-sound-producing × Pb | toys sound producing lead |
| P1 | carpet-spot-removers × tAs | carpet spot removers total arsenic |
| P1 | infant-formula-dairy-free × Sn | infant formula dairy free heavy metals tin occurrence |
| P1 | bottled-drinking-water × tAs | bottled drinking water arsenic occurrence |
| P1 | pet-chews-dental × tAs | pet chews dental total arsenic |
| P1 | descalers × Pb | descalers heavy metals Pb |

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