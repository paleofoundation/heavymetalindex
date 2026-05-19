# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1204 candidate queries
- Path B (empty product + thin ingredient pages): 8116 candidate queries
- Total candidates (after dedup): 9320
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9320
- Final wishlist (capped at 600): 600

### By priority

- P1: 600

### By source path

- product: 600

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 148 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | herbal-botanical-infusions × Al | herbal botanical infusions aluminium occurrence |
| P1 | infant-bottle-nipples × Pb | bottle nipples and spouts lead |
| P1 | rice-noodles × tAs | rice noodles heavy metals arsenic |
| P1 | baby-sunscreen-mineral × Pb | baby sunscreen mineral Pb occurrence |
| P1 | baby-oil × Pb | baby oil heavy metals Pb occurrence |
| P1 | canned-vegetables × Pb | canned vegetables Pb occurrence |
| P1 | supplements-vitamin-mineral × Cd | ingredient class — vitamin/mineral (single, multi-mineral, multi-vitamin/mineral) cadmium |
| P1 | fabric-softeners × tAs | fabric softeners (liquids and sheets) arsenic |
| P1 | baby-powder-cornstarch × Pb | baby powder cornstarch Pb occurrence |
| P1 | supplements-oral-liquids-shots × Cd | oral liquids: liquid shots Cd |
| P1 | nebula-diffusers × Cd | nebula diffusers heavy metals Cd |
| P1 | anti-static-products × Pb | anti static products Pb |
| P1 | toothbrushes × Pb | toothbrushes (manual, electric heads) Pb |
| P1 | tableware-metal-bottles-tumblers × Cd | metal bottles/tumblers cadmium |
| P1 | sports-energy-drinks × Pb | sports energy drinks heavy metals Pb occurrence |
| P1 | baby-powder-cornstarch × Cd | baby powder, cornstarch-based Cd |
| P1 | food-storage-glass-containers × Cd | food storage glass containers heavy metals cadmium |
| P1 | food-storage-glass-containers × tHg | food storage glass containers heavy metals mercury |
| P1 | instant-air-refreshment-sprays × Pb | instant air refreshment sprays heavy metals Pb |
| P1 | baby-sunscreen-mineral × Cd | baby sunscreen mineral Cd occurrence |

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