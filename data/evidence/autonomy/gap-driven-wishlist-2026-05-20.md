# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1374 candidate queries
- Path B (empty product + thin ingredient pages): 8218 candidate queries
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
| P1 | blankets-and-sleep-sacks × Cd | blankets and sleep sacks heavy metals cadmium |
| P1 | carpet-spot-removers × tHg | carpet spot removers mercury |
| P1 | tableware-plastic-drinkware × Pb | tableware plastic drinkware heavy metals Pb |
| P1 | toys-balls × tAs | balls total arsenic |
| P1 | pet-supplements-other × Pb | pet supplements other lead |
| P1 | feminine-wipes × tHg | feminine wipes mercury |
| P1 | art-craft-materials × tHg | art craft materials heavy metals mercury |
| P1 | tongue-cleaners-scrapers × Cd | tongue cleaners scrapers cadmium |
| P1 | supplements-oral-solids-effervescent × Cd | supplements oral solids effervescent heavy metals cadmium |
| P1 | oral-irrigators-water-flossers × tAs | oral irrigators water flossers heavy metals arsenic |
| P1 | tableware-glassware × Cd | tableware glassware heavy metals Cd |
| P1 | childrens-makeup × Pb | childrens makeup heavy metals Pb occurrence |
| P1 | drain-maintainers-cleaners × Cd | drain maintainers cleaners heavy metals cadmium |
| P1 | food-packaging-foils-wraps × Pb | food packaging foils wraps heavy metals Pb |
| P1 | canned-fish × tAs | canned fish heavy metals arsenic occurrence |
| P1 | pet-treats-snacks × iAs | pet treats/snacks speciated arsenic |
| P1 | pet-milk-replacers-specialty-liquids × Cd | pet milk replacers specialty liquids heavy metals Cd |
| P1 | plant-milks-non-soy-non-rice × Pb | plant milks non soy non rice lead occurrence |
| P1 | infant-food-powder × Cd | infant food powder cadmium |

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