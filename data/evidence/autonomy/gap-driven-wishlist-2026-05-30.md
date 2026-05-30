# Gap-driven wishlist v2 — 2026-05-30

## Summary

- Path A (pooling-engine-driven thin cells): 1502 candidate queries
- Path B (empty product + thin ingredient pages): 10809 candidate queries
- Total candidates (after dedup): 16223
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 16223
- Final wishlist (capped at 2500): 2500

### By priority

- P1: 1384
- P2: 1116

### By source path

- ingredient: 2500

## Query-history-aware deprioritization

Threshold: a (query × cell) attempted >=5 times with <2 successful downloads is dropped from this run.

Audit-log scale: 22 (query × cell) histories tracked.

## Top 20 priority queries this run

| Priority | Product/Ingredient × Metal | Query |
|---|---|---|
| P1 | ingredient:rapeseed-oil × Sn | rapeseed oil heavy metals tin contamination occurrence |
| P1 | ingredient:dill-pickles × iAs | dill pickles heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:olives × Al | olives heavy metals aluminum contamination occurrence |
| P1 | ingredient:soybean-oil × Al | soybean oil heavy metals aluminum contamination occurrence |
| P1 | ingredient:soy-based-infant-formula × Sn | soy based infant formula tin contamination occurrence |
| P1 | ingredient:rice-flour × Cr | rice flour heavy metals chromium contamination occurrence |
| P1 | ingredient:soybean-oil × iAs | soybean oil inorganic arsenic contamination occurrence |
| P1 | ingredient:skim-milk × Al | skim milk heavy metals aluminum contamination occurrence |
| P1 | ingredient:reduced-fat-milk × Sn | reduced fat milk tin contamination occurrence |
| P1 | ingredient:lima-beans × iAs | lima beans inorganic arsenic contamination occurrence |
| P1 | ingredient:vegetable-purees × tHg | vegetable purees total mercury contamination occurrence |
| P1 | ingredient:chapattis × Cr | chapattis chromium contamination occurrence |
| P1 | ingredient:peanuts × Sn | peanuts tin contamination occurrence |
| P1 | ingredient:meat-and-poultry-purees × Pb | meat and poultry purees heavy metals lead contamination occurrence |
| P1 | ingredient:canned-tomatoes × Cr | canned tomatoes chromium contamination occurrence |
| P1 | ingredient:apple-cider-vinegar × Sn | apple cider vinegar heavy metals tin contamination occurrence |
| P1 | ingredient:hazelnuts × Al | hazelnuts heavy metals aluminum contamination occurrence |
| P1 | ingredient:pork-sausages × iAs | pork sausages inorganic arsenic contamination occurrence |
| P1 | ingredient:rice-flour × Cr | rice flour chromium contamination occurrence |
| P1 | ingredient:orange-juice × tAs | orange juice heavy metals total arsenic contamination occurrence |

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