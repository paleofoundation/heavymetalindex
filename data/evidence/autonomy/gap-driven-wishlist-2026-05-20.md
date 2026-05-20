# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1420 candidate queries
- Path B (empty product + thin ingredient pages): 8210 candidate queries
- Total candidates (after dedup): 9630
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9630
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
| P1 | toy-pacifiers × Pb | toy pacifiers heavy metals lead |
| P1 | kitchen-countertop-cleaners × Pb | kitchen countertop cleaners Pb |
| P1 | conditioner-adult-rinse-out × tHg | conditioner adult rinse out heavy metals mercury |
| P1 | baby-wipes × Pb | baby wipes heavy metals lead occurrence |
| P1 | capillary-reed-wood-diffusers × Pb | capillary reed/wood diffusers lead |
| P1 | art-craft-materials × tAs | art craft materials arsenic |
| P1 | toys-stuffing-materials × Cd | stuffing materials Cd |
| P1 | infant-food-puree-vegetable × tAs | infant food puree vegetable arsenic |
| P1 | baby-lotion-cream × Pb | baby lotion cream Pb occurrence |
| P1 | childrens-lip-balm-mineral-bearing × Ni | childrens lip balm mineral bearing heavy metals nickel occurrence |
| P1 | cookware-nonstick-coated × tAs | nonstick-coated cookware arsenic |
| P1 | instant-air-refreshment-sprays × Pb | instant air refreshment sprays Pb |
| P1 | baby-shampoo-body-wash × Pb | baby shampoo body wash heavy metals Pb occurrence |
| P1 | teething-and-snacks-non-rice × Cd | teething and snacks non rice Cd occurrence |
| P1 | baby-shampoo-body-wash × Pb | baby shampoo body wash Pb occurrence |
| P1 | infant-formula-rtf-soy × Al | infant formula rtf soy aluminium occurrence |
| P1 | infant-formula-stage1 × Pb | infant formula stage1 heavy metals Pb occurrence |
| P1 | supplements-probiotics × Pb | ingredient class — live microbials/probiotics lead |
| P1 | infant-bottle-nipples × tAs | infant bottle nipples toy heavy metals total arsenic |
| P1 | food-storage-silicone × Pb | food storage silicone heavy metals Pb |

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