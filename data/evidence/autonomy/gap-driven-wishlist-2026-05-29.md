# Gap-driven wishlist v2 — 2026-05-29

## Summary

- Path A (pooling-engine-driven thin cells): 1474 candidate queries
- Path B (empty product + thin ingredient pages): 10977 candidate queries
- Total candidates (after dedup): 16363
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 16363
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
| P1 | ingredient:flavoring × Cr | flavoring chromium contamination occurrence |
| P1 | ingredient:hazelnuts × Sn | hazelnuts tin contamination occurrence |
| P1 | ingredient:non-soy-protein-source × Pb | non soy protein source lead contamination occurrence |
| P1 | ingredient:cheddar-cheese × Sn | cheddar cheese tin contamination occurrence |
| P1 | ingredient:onions × Sn | onions heavy metals tin contamination occurrence |
| P1 | ingredient:chicken-potpie × iAs | chicken potpie heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:ground-beef × Al | ground beef heavy metals aluminum contamination occurrence |
| P1 | ingredient:fruit-purees × Ni | fruit purees heavy metals nickel contamination occurrence |
| P1 | ingredient:fresh-herbs × Sn | fresh herbs heavy metals tin contamination occurrence |
| P1 | ingredient:sunflower-oil × Sn | sunflower oil heavy metals tin contamination occurrence |
| P1 | ingredient:baby-cereals-dry × Cr | baby cereals dry heavy metals chromium contamination occurrence |
| P1 | ingredient:skim-milk × iAs | skim milk heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:infant-formula-rtf-liquid × tHg | infant formula rtf liquid total mercury contamination occurrence |
| P1 | ingredient:chicken-noodle-soup × Sn | chicken noodle soup heavy metals tin contamination occurrence |
| P1 | ingredient:fish-containing-baby-foods × iAs | fish containing baby foods heavy metals inorganic arsenic contamination occurrence |
| P1 | ingredient:watermelon × iAs | watermelon inorganic arsenic contamination occurrence |
| P1 | ingredient:melon × Cr | melon heavy metals chromium contamination occurrence |
| P1 | ingredient:fruit-purees × Ni | fruit purees nickel contamination occurrence |
| P1 | ingredient:fish-containing-baby-foods × Al | fish containing baby foods heavy metals aluminum contamination occurrence |
| P1 | ingredient:breastmilk × iAs | breastmilk heavy metals inorganic arsenic contamination occurrence |

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