# Gap-driven wishlist v2 — 2026-05-20

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
| P1 | food-packaging-glass-jars × Pb | food packaging glass jars lead |
| P1 | vegetable-juices-root-vegetable-containing × Cd | vegetable juices root vegetable containing Cd |
| P1 | tableware-glassware × Cd | tableware glassware cadmium |
| P1 | menstrual-discs × Pb | menstrual discs Pb |
| P1 | infant-bottles × tAs | infant bottles arsenic |
| P1 | anti-wrinkle-wrinkle-release-products × tAs | anti-wrinkle/wrinkle-release products total arsenic |
| P1 | all-purpose-cleaners × Pb | all purpose cleaners Pb |
| P1 | oral-electrolyte-solutions × Cd | oral electrolyte solutions Cd occurrence |
| P1 | infant-formula-stage1 × iAs | infant formula stage1 heavy metals speciated arsenic occurrence |
| P1 | bathroom-tub-tile-cleaners × tHg | bathroom/tub/tile cleaners mercury |
| P1 | whitening-products × Cd | whitening products (strips/gels/powders/pens) Cd |
| P1 | food-packaging-paperboard-cartons × tAs | food packaging paperboard cartons arsenic |
| P1 | pet-milk-replacers-specialty-liquids × tAs | milk replacers and specialty pet liquids arsenic |
| P1 | fragrance-preparations × tHg | fragrance preparations heavy metals mercury |
| P1 | pet-supplements-other × Pb | pet supplements other heavy metals Pb |
| P1 | infant-cereal × Cd | infant cereal Cd occurrence |
| P1 | herbal-botanical-infusions × Al | herbal botanical infusions heavy metals aluminium occurrence |
| P1 | supplements-oral-liquids-droppers × Pb | supplements oral liquids droppers lead |
| P1 | fabric-contact-products-other × tHg | other fabric-contact home products (case-by-case) mercury |
| P1 | meat-and-poultry-purees × Pb | meat and poultry purees lead occurrence |

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