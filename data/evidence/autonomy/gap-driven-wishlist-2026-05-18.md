# Gap-driven wishlist v2 — 2026-05-18

## Summary

- Path A (pooling-engine-driven thin cells): 1192 candidate queries
- Path B (empty product + thin ingredient pages): 7954 candidate queries
- Total candidates (after dedup): 9146
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9146
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
| P1 | pacifiers-and-sucking-teething-aids × tAs | pacifiers and sucking teething aids total arsenic |
| P1 | fabric-refresher-products × tAs | fabric refresher products heavy metals total arsenic |
| P1 | baby-talcum-powder × tAs | baby talcum powder arsenic occurrence |
| P1 | car-seats × Pb | car seats heavy metals Pb |
| P1 | nebula-diffusers × Cd | nebula diffusers cadmium |
| P1 | bibs × tHg | bibs heavy metals mercury |
| P1 | canned-fruit × tAs | canned fruit heavy metals arsenic occurrence |
| P1 | pet-supplements-calming-behavioral × tHg | pet supplements calming behavioral heavy metals total mercury |
| P1 | infant-formula-powder × Cr-VI | infant formula powder heavy metals hexavalent chromium occurrence |
| P1 | infant-bottle-nipples × Pb | bottle nipples and spouts lead |
| P1 | cutting-boards × tHg | cutting boards (wood, plastic) mercury |
| P1 | supplements-oral-solids-gummies × Pb | oral solids: gummies/chewables lead |
| P1 | capillary-reed-wood-diffusers × tHg | capillary reed wood diffusers mercury |
| P1 | fabric-protectants × tHg | fabric protectants heavy metals mercury |
| P1 | sensor-puff-releasers × Pb | sensor puff releasers heavy metals lead |
| P1 | baby-lotion-cream × Cd | baby lotion cream Cd occurrence |
| P1 | food-packaging-foils-wraps × tHg | food packaging foils wraps mercury |
| P1 | pet-supplements-probiotics-digestive × Pb | pet supplements probiotics digestive heavy metals Pb |
| P1 | baby-oil × Cd | baby oil Cd occurrence |
| P1 | sports-energy-drinks × Pb | sports energy drinks Pb occurrence |

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