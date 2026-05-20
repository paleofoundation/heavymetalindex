# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1382 candidate queries
- Path B (empty product + thin ingredient pages): 8230 candidate queries
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
| P1 | intimate-washes-cleansers × tAs | intimate washes cleansers total arsenic |
| P1 | food-packaging-foils-wraps × tAs | food packaging foils wraps heavy metals total arsenic |
| P1 | kitchen-countertop-cleaners × Cd | kitchen countertop cleaners heavy metals Cd |
| P1 | vacuum-cleaner-fragrance-additives × Pb | vacuum cleaner fragrance additives Pb |
| P1 | pasta-rice-based × tAs | pasta rice based food contaminant total arsenic |
| P1 | tableware-ceramicware × tAs | ceramicware total arsenic |
| P1 | infant-bottles × Cd | bottles (plastic, glass, stainless steel) Cd |
| P1 | anti-wrinkle-wrinkle-release-products × Cd | anti wrinkle wrinkle release products cadmium |
| P1 | air-product-refill-materials × tAs | air product refill materials heavy metals arsenic |
| P1 | infant-food-puree × tAs | infant food puree heavy metals arsenic occurrence |
| P1 | nuts-seeds-other × Cd | nuts seeds other heavy metals Cd occurrence |
| P1 | infant-formula-stage1 × Pb | infant formula stage1 heavy metals Pb occurrence |
| P1 | bathroom-tub-tile-cleaners × tAs | bathroom tub tile cleaners arsenic |
| P1 | window-glass-mirror-cleaners × tHg | window glass mirror cleaners heavy metals total mercury |
| P1 | walkers × Pb | walkers Pb |
| P1 | food-packaging-paperboard-cartons × Pb | food packaging paperboard cartons heavy metals Pb |
| P1 | pet-food-raw × tHg | pet food raw heavy metals mercury |
| P1 | pet-treats-snacks × Cd | pet treats snacks heavy metals Cd |
| P1 | fragrance-preparations × tAs | fragrance preparations (perfumes, colognes, body sprays) arsenic |
| P1 | pet-supplements-functional-blends × tAs | pet supplements functional blends arsenic |

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