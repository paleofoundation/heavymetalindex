# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1200 candidate queries
- Path B (empty product + thin ingredient pages): 8116 candidate queries
- Total candidates (after dedup): 9316
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9316
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
| P1 | electric-plug-in-evaporators × Pb | electric plug-in evaporators Pb |
| P1 | supplements-teas-labeled × Pb | supplements teas labeled heavy metals lead occurrence |
| P1 | pet-supplements-botanical-herbal × tAs | pet supplements botanical herbal total arsenic |
| P1 | fabric-softeners × tAs | fabric softeners heavy metals total arsenic |
| P1 | baby-powder-cornstarch × Pb | baby powder cornstarch Pb occurrence |
| P1 | infant-formula-dairy × iAs | infant formula dairy speciated arsenic occurrence |
| P1 | carpet-cleaners × Cd | carpet cleaners cadmium |
| P1 | pet-toppers-mixers-broths × tAs | pet toppers mixers broths heavy metals total arsenic |
| P1 | infant-food-puree × iAs | infant food puree speciated arsenic occurrence |
| P1 | infant-bottles × Cd | infant bottles toy heavy metals cadmium |
| P1 | baby-shampoo-body-wash × Pb | baby shampoo body wash heavy metals Pb occurrence |
| P1 | baby-powder-cornstarch × Ni | baby powder, cornstarch-based nickel |
| P1 | oral-products-other × Cd | oral products other heavy metals cadmium |
| P1 | floss-interdental-cleaners × tAs | floss interdental cleaners heavy metals arsenic |
| P1 | childrens-lip-balm-mineral-bearing × Pb | childrens lip balm mineral bearing Pb occurrence |
| P1 | menstrual-discs × tHg | menstrual discs heavy metals total mercury |
| P1 | canned-fish × tAs | canned fish arsenic occurrence |
| P1 | menstrual-intimate-products-other × tHg | menstrual intimate products other mercury |
| P1 | nuts-seeds-other × Pb | nuts seeds other heavy metals Pb occurrence |
| P1 | deep-conditioning-treatments-rinse-off × tHg | deep conditioning treatments/hair masks (rinse-off) mercury |

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