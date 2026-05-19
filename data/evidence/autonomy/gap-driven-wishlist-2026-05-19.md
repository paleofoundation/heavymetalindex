# Gap-driven wishlist v2 — 2026-05-19

## Summary

- Path A (pooling-engine-driven thin cells): 1280 candidate queries
- Path B (empty product + thin ingredient pages): 8172 candidate queries
- Total candidates (after dedup): 9452
- Dropped as low-yield by query-history filter: 0
- Eligible after filtering: 9452
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
| P1 | cookware-specialty-alloy × Cd | cookware specialty alloy Cd |
| P1 | baby-powder-cornstarch × Cd | baby powder cornstarch heavy metals Cd occurrence |
| P1 | douches-vaginal-irrigation × tAs | douches vaginal irrigation total arsenic |
| P1 | pet-food-freeze-dried × tHg | pet food freeze dried heavy metals mercury |
| P1 | food-prep-processor-bowls × Cd | food processor bowls Cd |
| P1 | douches-vaginal-irrigation × tAs | douches and vaginal irrigation solutions/apparatus components arsenic |
| P1 | hand-soap × tAs | hand soap heavy metals arsenic |
| P1 | baby-powder-cornstarch × Cd | baby powder cornstarch Cd occurrence |
| P1 | diaper-cream-zno × Cd | diaper cream zno Cd occurrence |
| P1 | pet-supplements-botanical-herbal × Pb | botanical/herbal blends Pb |
| P1 | tomato-sauce × tAs | tomato sauce arsenic occurrence |
| P1 | makeup-body-paints-bases-fixatives × tAs | makeup body paints bases fixatives arsenic |
| P1 | infant-food-puree × iAs | infant food puree heavy metals speciated arsenic occurrence |
| P1 | pet-supplements-other × tHg | pet supplements other mercury |
| P1 | pet-supplements-probiotics-digestive × tHg | pet supplements probiotics digestive total mercury |
| P1 | food-packaging-caps-closures × tHg | caps/closures total mercury |
| P1 | pet-supplements-other × tAs | other pet ingestibles (case-by-case) total arsenic |
| P1 | high-chairs-and-booster-seats × tHg | high chairs and booster seats total mercury |
| P1 | baby-talcum-powder × tHg | baby talcum powder heavy metals mercury occurrence |
| P1 | infant-food-puree × Cd | infant food puree heavy metals Cd occurrence |

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