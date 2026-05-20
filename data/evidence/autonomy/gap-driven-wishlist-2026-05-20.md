# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1448 candidate queries
- Path B (empty product + thin ingredient pages): 8314 candidate queries
- Total candidates (after dedup): 9762
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9762
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
| P1 | scented-candles × Pb | scented candles Pb |
| P1 | fermented-beverages-non-tea-based × Pb | fermented beverages non tea based Pb occurrence |
| P1 | fish-marine-non-predatory × tHg | fish — marine, non-predatory (sardines, anchovies, salmon, cod) total mercury |
| P1 | baby-powder-cornstarch × Cr | baby powder cornstarch heavy metals chromium occurrence |
| P1 | infant-formula-powder-dairy × Cr-VI | infant formula powder dairy Cr(VI) occurrence |
| P1 | supplements-bars-labeled × tAs | food-like forms: bars (when labeled as supplement) total arsenic |
| P1 | canned-fruit × tAs | canned fruit arsenic occurrence |
| P1 | cookware-metal-alloy × tAs | metal and alloy cookware (cast iron, stainless steel, aluminum) arsenic |
| P1 | food-packaging-glass-jars × Pb | food packaging glass jars heavy metals lead |
| P1 | toothbrushes × Cd | toothbrushes cadmium |
| P1 | supplements-algae-seaweed-based × tAs | ingredient class — algae/seaweed-based total arsenic |
| P1 | baby-powder-cornstarch × Cr | baby powder cornstarch heavy metals chromium |
| P1 | infant-formula-powder-dairy × MeHg | infant formula powder dairy methyl mercury occurrence |
| P1 | bleaching-whitening-additives × tAs | bleaching/whitening additives arsenic |
| P1 | canned-vegetables × Pb | canned vegetables heavy metals Pb occurrence |
| P1 | douches-vaginal-irrigation × Cd | douches vaginal irrigation Cd |
| P1 | infant-formula-stage1 × Ni | infant formula stage1 nickel |
| P1 | pet-food-semi-moist × Cd | pet food semi moist heavy metals cadmium |
| P1 | clasps-fasteners-infant-products × Pb | clasps fasteners infant products lead |
| P1 | conditioner-adult-rinse-out × Cd | conditioner adult rinse out heavy metals Cd |

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