# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1200 candidate queries
- Path B (empty product + thin ingredient pages): 8144 candidate queries
- Total candidates (after dedup): 9344
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9344
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
| P1 | infant-formula-dairy × Cr-VI | infant formula dairy heavy metals hexavalent chromium occurrence |
| P1 | fabric-contact-products-other × tHg | other fabric-contact home products (case-by-case) mercury |
| P1 | infant-cereal × Al | infant cereal aluminium occurrence |
| P1 | toothbrushes × tHg | toothbrushes heavy metals mercury |
| P1 | high-chairs-and-booster-seats × tHg | high chairs and booster seats mercury |
| P1 | whitening-products × tHg | whitening products mercury |
| P1 | tableware-glassware × Cd | tableware glassware heavy metals cadmium |
| P1 | pet-supplements-calming-behavioral × tHg | calming/behavioral supplements mercury |
| P1 | conditioner-adult-rinse-out × Pb | conditioner adult rinse out heavy metals lead |
| P1 | menstrual-tampons × Pb | menstrual tampons heavy metals lead |
| P1 | cutting-boards × tAs | cutting boards arsenic |
| P1 | douches-vaginal-irrigation × Cd | douches vaginal irrigation Cd |
| P1 | baby-shampoo-body-wash × Cd | baby shampoo body wash Cd occurrence |
| P1 | supplements-oral-solids-powders × tHg | oral solids: powders (bulk tubs, sachets, stick packs) mercury |
| P1 | pet-treats-snacks × Cd | pet treats/snacks cadmium |
| P1 | cookware-nonstick-coated × tAs | nonstick-coated cookware arsenic |
| P1 | cashews × Pb | cashews Pb occurrence |
| P1 | fish-marine-non-predatory × tHg | fish — marine, non-predatory (sardines, anchovies, salmon, cod) total mercury |
| P1 | breath-fresheners × Pb | breath fresheners heavy metals Pb |
| P1 | hair-removal-products × Pb | hair removal products Pb |

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