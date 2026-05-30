# Gap-driven wishlist v2 — 2026-05-30

## Summary

- Path A (pooling-engine-driven thin cells): 1474 candidate queries
- Path B (empty product + thin ingredient pages): 10913 candidate queries
- Total candidates (after dedup): 16299
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 16299
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 1384
- P2: 1116

### By source path

- ingredient: 2500

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 48 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | ingredient:plums × iAs | plums heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:coconut × Ni | coconut nickel contamination occurrence |
| P1 | ingredient:canned-tomatoes × tAs | canned tomatoes total arsenic contamination occurrence |
| P1 | ingredient:applesauce × Sn | applesauce heavy metals tin contamination occurrence |
| P1 | ingredient:vegetable-juice × Cr | vegetable juice heavy metals chromium contamination occurrence |
| P1 | ingredient:coconut × Sn | coconut tin contamination occurrence |
| P1 | ingredient:vegetable-purees × Pb | vegetable purees lead contamination occurrence |
| P1 | ingredient:melon × Sn | melon heavy metals tin contamination occurrence |
| P1 | ingredient:root-vegetable-purees × tHg | root vegetable purees heavy metals total mercury contamination occurrence |
| P1 | ingredient:fresh-herbs × Sn | fresh herbs heavy metals tin contamination occurrence |
| P1 | ingredient:grape-juice × Cr | grape juice heavy metals chromium contamination occurrence |
| P1 | ingredient:blueberries × iAs | blueberries heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:rice-cakes × tAs | rice cakes heavy metals total arsenic contamination occurrence |
| P1 | ingredient:olives × Al | olives aluminum contamination occurrence |
| P1 | ingredient:pork-chop × Sn | pork chop tin contamination occurrence |
| P1 | ingredient:custard × Ni | custard nickel contamination occurrence |
| P1 | ingredient:vegetable-juice × Sn | vegetable juice heavy metals tin contamination occurrence |
| P1 | ingredient:coffee × Sn | coffee heavy metals tin contamination occurrence |
| P1 | ingredient:plums × tHg | plums total mercury contamination occurrence |
| P1 | ingredient:rice-puffs × tAs | rice puffs total arsenic contamination occurrence |

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