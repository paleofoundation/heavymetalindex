# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1420 candidate queries
- Path B (empty product + thin ingredient pages): 8230 candidate queries
- Total candidates (after dedup): 9650
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9650
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
| P1 | supplements-enzymes × Cd | supplements enzymes cadmium |
| P1 | food-storage-lids-gaskets × Pb | food storage lids gaskets heavy metals Pb |
| P1 | bibs × tAs | bibs heavy metals total arsenic |
| P1 | hand-soap × Pb | hand soap (liquid and bar) lead |
| P1 | deep-conditioning-treatments-rinse-off × tHg | deep conditioning treatments/hair masks (rinse-off) total mercury |
| P1 | infant-food-puree-poultry × tAs | infant food puree poultry heavy metals total arsenic |
| P1 | swings-and-bouncers × Cd | swings and bouncers cadmium |
| P1 | supplements-bars-labeled × tAs | food-like forms: bars (when labeled as supplement) arsenic |
| P1 | cribs-and-bassinets × tAs | cribs and bassinets arsenic |
| P1 | leave-on-preparations-other × tHg | other leave-on preparations (case-by-case) mercury |
| P1 | cutting-boards × Cd | cutting boards heavy metals Cd |
| P1 | toys-stuffed-bean-bag × tAs | toys stuffed bean bag heavy metals arsenic |
| P1 | hand-soap × tAs | hand soap heavy metals total arsenic |
| P1 | nut-seed-butters-other × Pb | nut seed butters other Pb occurrence |
| P1 | canned-tomatoes × Sn | canned tomatoes heavy metals tin occurrence |
| P1 | cookware-specialty-alloy × Pb | cookware specialty alloy Pb |
| P1 | baby-shampoo-body-wash × Cd | baby shampoo body wash Cd occurrence |
| P1 | toilet-bowl-cleaners × tAs | toilet bowl cleaners total arsenic |
| P1 | fabric-contact-products-other × Pb | fabric contact products other heavy metals Pb |
| P1 | food-packaging-flexible-pouches-films × Cd | flexible pouches/films cadmium |

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