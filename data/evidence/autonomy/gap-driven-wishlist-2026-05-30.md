# Gap-driven wishlist v2 — 2026-05-30

## Summary

- Path A (pooling-engine-driven thin cells): 1502 candidate queries
- Path B (empty product + thin ingredient pages): 10769 candidate queries
- Total candidates (after dedup): 16183
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 16183
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 2031
- P2: 437
- P3: 32

### By source path

- product: 2500

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 174 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | sippy-cups-toddler-drinkware × Cd | sippy cups and toddler drinkware components Cd |
| P1 | feeding-accessories-child-sized × tAs | feeding accessories child sized arsenic |
| P1 | feeding-accessories-child-sized × tHg | feeding accessories child sized total mercury |
| P1 | feeding-accessories-child-sized × Cd | feeding accessories child sized cadmium |
| P1 | pacifiers-and-sucking-teething-aids × Pb | pacifiers and sucking teething aids heavy metals Pb occurrence |
| P1 | sippy-cups-toddler-drinkware × Cd | sippy cups toddler drinkware Cd |
| P1 | feeding-accessories-child-sized × tHg | feeding accessories (spoons, plates, bowls — child-sized) mercury |
| P1 | pacifiers-and-sucking-teething-aids × Pb | pacifiers and sucking/teething aids lead |
| P1 | feeding-accessories-child-sized × tAs | feeding accessories child sized children product safety arsenic |
| P1 | infant-bottles × tHg | infant bottles children product safety mercury |
| P1 | pacifiers-and-sucking-teething-aids × Pb | pacifiers and sucking teething aids Pb occurrence |
| P1 | pacifiers-and-sucking-teething-aids × Cd | pacifiers and sucking teething aids heavy metals Cd occurrence |
| P1 | feeding-accessories-child-sized × tAs | feeding accessories (spoons, plates, bowls — child-sized) total arsenic |
| P1 | infant-bottles × Pb | infant bottles Pb |
| P1 | pacifiers-and-sucking-teething-aids × tAs | pacifiers and sucking teething aids arsenic occurrence |
| P1 | infant-bottle-nipples × Cd | infant bottle nipples toy heavy metals Cd |
| P1 | sippy-cups-toddler-drinkware × tAs | sippy cups toddler drinkware heavy metals total arsenic |
| P1 | infant-bottles × Pb | infant bottles heavy metals Pb |
| P1 | pacifiers-and-sucking-teething-aids × Cd | pacifiers and sucking teething aids heavy metals cadmium occurrence |
| P1 | sippy-cups-toddler-drinkware × Pb | sippy cups toddler drinkware children product safety Pb |

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
- **Per-run cap (2500)**: bounded query volume so single days don't emit unbounded OpenAlex requests.