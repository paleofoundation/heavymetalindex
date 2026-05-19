# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1374 candidate queries
- Path B (empty product + thin ingredient pages): 8238 candidate queries
- Total candidates (after dedup): 9612
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9612
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
| P1 | tomato-sauce × Cd | tomato sauce heavy metals Cd occurrence |
| P1 | pet-supplements-probiotics-digestive × tAs | probiotics/digestive aids arsenic |
| P1 | baby-oil × Cd | baby oil Cd occurrence |
| P1 | appliance-cleaners × tHg | appliance cleaners heavy metals mercury |
| P1 | menstrual-discs × tAs | menstrual discs total arsenic |
| P1 | supplements-bars-labeled × tAs | food-like forms: bars (when labeled as supplement) total arsenic |
| P1 | anti-static-products × tHg | anti static products mercury |
| P1 | infant-cereal × Sn | infant cereal heavy metals tin occurrence |
| P1 | canned-tomatoes × Cd | canned tomatoes Cd occurrence |
| P1 | toys-stroller-carriage × Cd | toys stroller carriage heavy metals cadmium |
| P1 | baby-powder-cornstarch × Ni | baby powder cornstarch heavy metals nickel occurrence |
| P1 | household-specialty-cleaners-other × tHg | household specialty cleaners other mercury |
| P1 | baby-talcum-powder × tAs | baby talcum powder arsenic occurrence |
| P1 | toys-squeeze × Cd | toys squeeze heavy metals cadmium |
| P1 | tea-infusions × tAs | tea infusions arsenic occurrence |
| P1 | childrens-lip-balm-mineral-bearing × iAs | childrens lip balm mineral bearing heavy metals speciated arsenic occurrence |
| P1 | oral-irrigators-water-flossers × iAs | oral irrigators water flossers inorganic arsenic occurrence |
| P1 | childrens-makeup × Cr | childrens makeup heavy metals chromium occurrence |
| P1 | fabric-softeners × tAs | fabric softeners arsenic |
| P1 | bleaching-whitening-additives × Pb | bleaching/whitening additives lead |

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