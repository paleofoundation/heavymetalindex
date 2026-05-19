# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1192 candidate queries
- Path B (empty product + thin ingredient pages): 8174 candidate queries
- Total candidates (after dedup): 9366
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9366
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
| P1 | floor-cleaners-hard-surface × Pb | floor cleaners hard surface Pb |
| P1 | automatic-puff-releasers × Cd | automatic puff releasers heavy metals Cd |
| P1 | cookware-ceramic-coated × Cd | cookware ceramic coated cadmium |
| P1 | infant-formula-dairy-free × MeHg | infant formula dairy free heavy metals methylmercury |
| P1 | makeup-body-paints-bases-fixatives × Cd | makeup — body/leg paints, bases, fixatives (including airbrush) Cd |
| P1 | plant-milks-rice-based × Pb | plant milks rice based heavy metals Pb occurrence |
| P1 | childrens-makeup × Cr | childrens makeup heavy metals chromium occurrence |
| P1 | sports-energy-drinks × Pb | sports energy drinks heavy metals Pb |
| P1 | feminine-wipes × Pb | feminine wipes Pb |
| P1 | drain-maintainers-cleaners × tAs | drain maintainers/cleaners (including biological-based) total arsenic |
| P1 | childrens-lip-balm-mineral-bearing × Cr | childrens lip balm mineral bearing heavy metals chromium occurrence |
| P1 | baby-wipes × Pb | baby wipes Pb occurrence |
| P1 | nut-seed-butters-other × Ni | nut seed butters other nickel occurrence |
| P1 | pet-supplements-botanical-herbal × tHg | pet supplements botanical herbal mercury |
| P1 | oral-products-other × Cd | oral products other cadmium |
| P1 | pet-treats-snacks × tAs | pet treats snacks arsenic occurrence |
| P1 | feminine-wipes × tHg | feminine wipes/towelettes mercury |
| P1 | bottled-drinking-water × Pb | bottled drinking water heavy metals Pb occurrence |
| P1 | window-glass-mirror-cleaners × tAs | window glass mirror cleaners total arsenic |
| P1 | fruit-snacks × tAs | fruit snacks arsenic occurrence |

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