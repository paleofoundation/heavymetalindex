# Gap-driven wishlist v2 — 2026-05-30

## Summary

- Path A (pooling-engine-driven thin cells): 1474 candidate queries
- Path B (empty product + thin ingredient pages): 10873 candidate queries
- Total candidates (after dedup): 16259
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 16259
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 2079
- P2: 397
- P3: 24

### By source path

- product: 2500

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 137 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | infant-bottle-nipples × tAs | infant bottle nipples toy heavy metals arsenic |
| P1 | feeding-accessories-child-sized × Pb | feeding accessories child sized Pb |
| P1 | sippy-cups-toddler-drinkware × Pb | sippy cups toddler drinkware Pb |
| P1 | pacifiers-and-sucking-teething-aids × Pb | pacifiers and sucking/teething aids Pb |
| P1 | infant-bottles × tAs | bottles (plastic, glass, stainless steel) arsenic |
| P1 | feeding-accessories-child-sized × tAs | feeding accessories child sized heavy metals total arsenic |
| P1 | pacifiers-and-sucking-teething-aids × Cd | pacifiers and sucking teething aids heavy metals Cd occurrence |
| P1 | feeding-accessories-child-sized × tHg | feeding accessories child sized children product safety mercury |
| P1 | pacifiers-and-sucking-teething-aids × iAs | pacifiers and sucking teething aids speciated arsenic occurrence |
| P1 | infant-bottles × tHg | infant bottles heavy metals mercury |
| P1 | sippy-cups-toddler-drinkware × tAs | sippy cups toddler drinkware toy heavy metals arsenic |
| P1 | feeding-accessories-child-sized × Pb | feeding accessories child sized toy heavy metals Pb |
| P1 | infant-bottles × Cd | infant bottles heavy metals cadmium |
| P1 | infant-bottles × tAs | infant bottles children product safety arsenic |
| P1 | infant-bottles × Pb | infant bottles lead |
| P1 | pacifiers-and-sucking-teething-aids × tAs | pacifiers and sucking teething aids children product safety arsenic |
| P1 | infant-bottle-nipples × Pb | infant bottle nipples children product safety Pb |
| P1 | sippy-cups-toddler-drinkware × Pb | sippy cups toddler drinkware children product safety lead |
| P1 | infant-bottles × tAs | infant bottles toy heavy metals arsenic |
| P1 | infant-bottles × Pb | infant bottles toy heavy metals Pb |

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