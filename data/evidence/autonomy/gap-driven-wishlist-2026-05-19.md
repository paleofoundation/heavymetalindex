# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1276 candidate queries
- Path B (empty product + thin ingredient pages): 8224 candidate queries
- Total candidates (after dedup): 9500
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9500
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
| P1 | pet-supplements-probiotics-digestive × tHg | pet supplements probiotics digestive heavy metals total mercury |
| P1 | tableware-metal-bottles-tumblers × Pb | metal bottles/tumblers lead |
| P1 | cribs-and-bassinets × Cd | cribs and bassinets cadmium |
| P1 | cookware-metal-alloy × tHg | metal and alloy cookware (cast iron, stainless steel, aluminum) total mercury |
| P1 | pasta-rice-based × Cd | pasta rice based food contaminant Cd |
| P1 | baby-powder-cornstarch × Pb | baby powder cornstarch personal care product Pb |
| P1 | feeding-accessories-child-sized × tAs | feeding accessories (spoons, plates, bowls — child-sized) arsenic |
| P1 | matcha × Al | matcha aluminum occurrence |
| P1 | children-personal-care × Cd | children personal care Cd occurrence |
| P1 | supplements-probiotics × tAs | supplements probiotics heavy metals arsenic |
| P1 | infant-formula-powder-soy × Pb | infant formula powder soy heavy metals Pb occurrence |
| P1 | exfoliants-scrubs × tHg | exfoliants/scrubs (body, facial) mercury |
| P1 | instant-air-refreshment-sprays × Pb | instant air refreshment sprays (aerosol cans, trigger sprays) Pb |
| P1 | floss-interdental-cleaners × tAs | floss interdental cleaners heavy metals arsenic |
| P1 | toys-projectile-guns × Cd | toys projectile guns heavy metals Cd |
| P1 | infant-porridges-dairy-free × tHg | infant porridges dairy free heavy metals mercury |
| P1 | fish-freshwater × iAs | fish freshwater heavy metals speciated arsenic occurrence |
| P1 | leafy-vegetables-other × Pb | leafy vegetables other heavy metals Pb occurrence |
| P1 | tomato-paste × Cd | tomato paste Cd occurrence |
| P1 | dietary-supplements × Cr-VI | dietary supplements Cr(VI) occurrence |

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