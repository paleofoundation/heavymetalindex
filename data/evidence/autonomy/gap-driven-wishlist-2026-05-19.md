# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1192 candidate queries
- Path B (empty product + thin ingredient pages): 8006 candidate queries
- Total candidates (after dedup): 9198
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9198
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
| P1 | baby-shampoo-body-wash × Pb | baby shampoo body wash Pb occurrence |
| P1 | automatic-dishwasher-detergents × Pb | automatic dishwasher detergents heavy metals lead |
| P1 | mineral-water × tAs | mineral water total arsenic occurrence |
| P1 | cookware-metal-alloy × Pb | cookware metal alloy heavy metals Pb |
| P1 | toys-stroller-carriage × tHg | stroller/carriage toys mercury |
| P1 | pacifiers-and-sucking-teething-aids × iAs | pacifiers and sucking teething aids inorganic arsenic |
| P1 | supplements-teas-labeled × tAs | food-like forms: teas (when labeled as supplement) total arsenic |
| P1 | tableware-glassware × Pb | glassware Pb |
| P1 | pet-food-semi-moist × tAs | pet food semi moist heavy metals total arsenic |
| P1 | period-underwear-reusable-garments × Cd | period underwear reusable garments heavy metals cadmium |
| P1 | food-prep-processor-bowls × Cd | food processor bowls cadmium |
| P1 | hand-soap × Pb | hand soap heavy metals Pb |
| P1 | pasta-rice-based × Pb | pasta rice based dietary exposure lead |
| P1 | infant-food-powder × tHg | infant food powder heavy metals total mercury |
| P1 | all-purpose-cleaners × Pb | all purpose cleaners Pb |
| P1 | toys-crafts-other × Pb | toys crafts other lead |
| P1 | dish-soaps-manual × tAs | dish soaps (manual dishwashing) arsenic |
| P1 | tableware-glassware × Pb | glassware lead |
| P1 | fish-marine-non-predatory × Cd | fish marine non predatory cleaning product safety Cd |
| P1 | sunflower-seeds × Cd | sunflower seeds Cd occurrence |

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