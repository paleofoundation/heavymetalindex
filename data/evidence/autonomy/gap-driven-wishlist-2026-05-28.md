# Gap-driven wishlist v2 — 2026-05-28

## Summary

- Path A (pooling-engine-driven thin cells): 1452 candidate queries
- Path B (empty product + thin ingredient pages): 8057 candidate queries
- Total candidates (after dedup): 9509
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9509
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 2500

### By source path

- product: 2500

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 118 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | snack-bars-energy-bars × Cd | snack bars energy bars cadmium occurrence |
| P1 | pet-food-freeze-dried × tHg | freeze-dried/dehydrated pet foods (including freeze-dried raw) total mercury |
| P1 | bleaching-whitening-additives × tHg | bleaching whitening additives total mercury |
| P1 | supplements-amino-acids-isolates × Pb | supplements amino acids isolates heavy metals Pb |
| P1 | infant-formula-powder-dairy × tAs | infant formula powder dairy heavy metals arsenic occurrence |
| P1 | baby-oil × Pb | baby oil Pb occurrence |
| P1 | makeup-body-paints-bases-fixatives × Cd | makeup — body/leg paints, bases, fixatives (including airbrush) Cd |
| P1 | infant-formula-stage1 × MeHg | infant formula stage1 heavy metals methyl mercury occurrence |
| P1 | pet-food-raw × Cd | pet food raw cadmium |
| P1 | toys-stroller-carriage × tAs | stroller/carriage toys total arsenic |
| P1 | baby-lotion-cream × Cd | baby lotion cream heavy metals Cd occurrence |
| P1 | infant-food-puree × Cd | infant food puree heavy metals Cd occurrence |
| P1 | infant-formula-rtf-liquid-soy-based × Ni | infant formula rtf liquid soy based heavy metals nickel occurrence |
| P1 | infant-rice-cereal × Pb | infant rice cereal heavy metals Pb occurrence |
| P1 | toy-chests × Pb | toy chests Pb |
| P1 | pet-supplements-probiotics-digestive × Cd | probiotics/digestive aids cadmium |
| P1 | floor-cleaners-hard-surface × tAs | floor cleaners hard surface total arsenic |
| P1 | tableware-metal-bottles-tumblers × Cd | metal bottles/tumblers Cd |
| P1 | pet-chews-dental × Cd | pet chews (including dental chews) cadmium |
| P1 | supplements-enzymes × tAs | supplements enzymes arsenic |

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