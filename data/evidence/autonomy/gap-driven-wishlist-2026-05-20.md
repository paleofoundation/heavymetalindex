# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1382 candidate queries
- Path B (empty product + thin ingredient pages): 8210 candidate queries
- Total candidates (after dedup): 9592
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9592
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
| P1 | baby-lotion-cream × Pb | baby lotion cream Pb occurrence |
| P1 | fish-marine-non-predatory × tHg | fish marine non predatory cleaning product safety mercury |
| P1 | laundry-starch-sizing-fabric-finish × Cd | laundry starch/sizing/fabric finish products Cd |
| P1 | biscuits × tHg | biscuits heavy metals total mercury |
| P1 | carpet-spot-removers × Cd | carpet spot removers Cd |
| P1 | tableware-glassware × tAs | tableware glassware arsenic |
| P1 | toys-attached-cribs-playpens × tHg | toys attached cribs playpens heavy metals total mercury |
| P1 | pet-supplements-functional-blends × Cd | joint/skin/coat functional blends cadmium |
| P1 | feminine-wipes × Cd | feminine wipes heavy metals Cd |
| P1 | art-craft-materials × tAs | art & craft materials (paints, markers, crayons, colored pencils, inks, adhesives/glues, modeling clay, putties/gels/slimes, glitter/pigments, jewelry/craft kits) arsenic |
| P1 | tattoo-inks × Cd | tattoo inks cadmium |
| P1 | supplements-oral-liquids-tinctures × tHg | supplements oral liquids tinctures total mercury |
| P1 | tableware-ceramicware × tHg | tableware ceramicware mercury |
| P1 | childrens-makeup × Ni | childrens makeup heavy metals nickel occurrence |
| P1 | drain-maintainers-cleaners × Pb | drain maintainers/cleaners (including biological-based) lead |
| P1 | food-packaging-flexible-pouches-films × tHg | flexible pouches/films mercury |
| P1 | canned-fish × tAs | canned fish heavy metals arsenic occurrence |
| P1 | toys-stuffed-bean-bag × tHg | stuffed toys and bean bag-type toys total mercury |
| P1 | pet-supplements-vitamin-mineral × tHg | pet supplements vitamin mineral heavy metals mercury |
| P1 | pet-food-raw × tHg | pet food raw mercury |

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