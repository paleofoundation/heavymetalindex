# Gap-driven wishlist v2 — 2026-05-28

## Summary

- Path A (pooling-engine-driven thin cells): 1490 candidate queries
- Path B (empty product + thin ingredient pages): 11097 candidate queries
- Total candidates (after dedup): 16497
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 16497
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 1384
- P2: 1116

### By source path

- ingredient: 2500

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 104 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | ingredient:semi-skimmed-milk × Ni | semi skimmed milk nickel contamination occurrence |
| P1 | ingredient:honey × Sn | honey tin contamination occurrence |
| P1 | ingredient:cinnamon × Sn | cinnamon tin contamination occurrence |
| P1 | ingredient:non-soy-protein-source × iAs | non soy protein source heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:rice-flour × Ni | rice flour heavy metals nickel contamination occurrence |
| P1 | ingredient:chapattis × Ni | chapattis heavy metals nickel contamination occurrence |
| P1 | ingredient:fermented-beverage-bases × iAs | fermented beverage bases inorganic arsenic contamination occurrence |
| P1 | ingredient:grapefruit × Sn | grapefruit heavy metals tin contamination occurrence |
| P1 | ingredient:lettuce × Sn | lettuce heavy metals tin contamination occurrence |
| P1 | ingredient:non-root-vegetables × Cr | non-root vegetables chromium contamination occurrence |
| P1 | ingredient:organ-meats × iAs | organ meats inorganic arsenic contamination occurrence |
| P1 | ingredient:cauliflower × iAs | cauliflower inorganic arsenic contamination occurrence |
| P1 | ingredient:organ-meats × tAs | organ meats (kidney and liver) total arsenic contamination occurrence |
| P1 | ingredient:non-root-vegetable-purees × Pb | non root vegetable purees lead contamination occurrence |
| P1 | ingredient:turmeric × iAs | turmeric heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:peaches × Ni | peaches nickel contamination occurrence |
| P1 | ingredient:butternut-squash × tAs | butternut squash total arsenic contamination occurrence |
| P1 | ingredient:noodles × Cr | noodles heavy metals chromium contamination occurrence |
| P1 | ingredient:chicken-noodle-soup × Sn | chicken noodle soup heavy metals tin contamination occurrence |
| P1 | ingredient:custard × tAs | custard heavy metals total arsenic contamination occurrence |

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