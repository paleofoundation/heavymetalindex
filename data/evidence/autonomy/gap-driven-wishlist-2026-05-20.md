# Gap-driven wishlist v2 — 2026-05-20

## Summary

- Path A (pooling-engine-driven thin cells): 1376 candidate queries
- Path B (empty product + thin ingredient pages): 8218 candidate queries
- Total candidates (after dedup): 9594
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9594
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
| P1 | supplements-oral-solids-gummies × tHg | oral solids: gummies/chewables total mercury |
| P1 | dish-soaps-manual × tAs | dish soaps manual heavy metals arsenic |
| P1 | infant-formula-rtf-dairy × Ni | infant formula rtf dairy heavy metals nickel occurrence |
| P1 | toys-pompoms-fibrous-craft × tAs | toys pompoms fibrous craft heavy metals total arsenic |
| P1 | supplements-oral-solids-effervescent × tHg | supplements oral solids effervescent heavy metals total mercury |
| P1 | childrens-nail-polish × Pb | childrens nail polish Pb occurrence |
| P1 | cribs-and-bassinets × Cd | cribs and bassinets cadmium |
| P1 | fish-freshwater × Pb | fish freshwater Pb occurrence |
| P1 | infant-formula-powder-dairy × Cr-VI | infant formula powder dairy heavy metals chromium(VI) occurrence |
| P1 | pet-supplements-functional-blends × Pb | pet supplements functional blends lead |
| P1 | fish-marine-non-predatory × Pb | fish marine non predatory cleaning product safety Pb |
| P1 | oral-electrolyte-solutions × Pb | oral electrolyte solutions Pb occurrence |
| P1 | childrens-nail-polish × Pb | childrens nail polish heavy metals Pb occurrence |
| P1 | clasps-fasteners-infant-products × tHg | clasps/fasteners (snaps, zippers, buttons) used in infant products total mercury |
| P1 | fabric-softeners × tHg | fabric softeners mercury |
| P1 | pacifiers-and-sucking-teething-aids × tAs | pacifiers and sucking teething aids heavy metals arsenic |
| P1 | childrens-lip-balm-mineral-bearing × Cr | childrens lip balm mineral bearing heavy metals chromium occurrence |
| P1 | toys-yo-yo-elastic-tether × tAs | yo-yo elastic tether toys arsenic |
| P1 | dietary-supplements × Cd | dietary supplements Cd occurrence |
| P1 | infant-formula-powder-soy × tAs | infant formula powder soy arsenic occurrence |

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