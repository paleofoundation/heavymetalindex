# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1436 candidate queries
- Path B (empty product + thin ingredient pages): 8298 candidate queries
- Total candidates (after dedup): 9734
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9734
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
| P1 | floor-cleaners-hard-surface × tAs | floor cleaners hard surface arsenic |
| P1 | anti-wrinkle-wrinkle-release-products × Pb | anti wrinkle wrinkle release products heavy metals Pb |
| P1 | infant-and-child-foods-master × iAs | infant and child foods master inorganic arsenic occurrence |
| P1 | category-5-beverages × Cd | category 5 beverages beverage contaminants Cd |
| P1 | degreasers × Cd | degreasers heavy metals Cd |
| P1 | dietary-supplements × tHg | dietary supplements mercury occurrence |
| P1 | sunflower-seed-butter × Cd | sunflower seed butter cadmium |
| P1 | infant-formula-rtf-soy × Cd | infant formula rtf soy Cd occurrence |
| P1 | floor-cleaners-hard-surface × tAs | floor cleaners hard surface total arsenic |
| P1 | sensor-puff-releasers × tAs | sensor puff releasers heavy metals total arsenic |
| P1 | infant-formula-powder-dairy × Al | infant formula powder dairy aluminium occurrence |
| P1 | pet-food-semi-moist × tHg | pet food semi moist mercury |
| P1 | toys-projectile-guns × tAs | toys projectile guns arsenic |
| P1 | exfoliants-scrubs × tAs | exfoliants/scrubs (body, facial) arsenic |
| P1 | cookware-specialty-alloy × tHg | specialty alloy cookware (copper, carbon steel) mercury |
| P1 | peanuts × Cd | peanuts heavy metals Cd occurrence |
| P1 | toys-stuffed-bean-bag × tHg | stuffed toys and bean bag-type toys total mercury |
| P1 | supplements-algae-seaweed-based × tHg | ingredient class — algae/seaweed-based mercury |
| P1 | laundry-detergent-boosters-additives × Pb | laundry detergent boosters/additives Pb |
| P1 | infant-formula-stage1 × Sn | infant formula stage1 tin |

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