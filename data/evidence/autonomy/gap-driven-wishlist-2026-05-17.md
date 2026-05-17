# Gap-driven wishlist — 2026-05-17

## Summary

- Cells flagged as thin: 163.25
- Total OpenAlex queries emitted: 653
- By verdict:
  - BLOCKED: 295 cells
  - PROVISIONAL: 14 cells

## Top 20 priority queries

| Priority | Product × Metal | Query |
|---|---|---|
| P1 | baby-lotion-cream × Pb | baby lotion cream lead occurrence |
| P1 | baby-lotion-cream × Pb | baby lotion cream Pb occurrence |
| P1 | baby-lotion-cream × Cd | baby lotion cream cadmium occurrence |
| P1 | baby-lotion-cream × Cd | baby lotion cream Cd occurrence |
| P1 | baby-oil × Pb | baby oil lead occurrence |
| P1 | baby-oil × Pb | baby oil Pb occurrence |
| P1 | baby-oil × Cd | baby oil cadmium occurrence |
| P1 | baby-oil × Cd | baby oil Cd occurrence |
| P1 | baby-powder-cornstarch × Pb | baby powder cornstarch lead occurrence |
| P1 | baby-powder-cornstarch × Pb | baby powder cornstarch Pb occurrence |
| P1 | baby-powder-cornstarch × Cd | baby powder cornstarch cadmium occurrence |
| P1 | baby-powder-cornstarch × Cd | baby powder cornstarch Cd occurrence |
| P1 | baby-powder-cornstarch × Ni | baby powder cornstarch nickel occurrence |
| P1 | baby-powder-cornstarch × Cr | baby powder cornstarch Cr occurrence |
| P1 | baby-shampoo-body-wash × Pb | baby shampoo body wash lead occurrence |
| P1 | baby-shampoo-body-wash × Pb | baby shampoo body wash Pb occurrence |
| P1 | baby-shampoo-body-wash × Cd | baby shampoo body wash cadmium occurrence |
| P1 | baby-shampoo-body-wash × Cd | baby shampoo body wash Cd occurrence |
| P1 | baby-sunscreen-chemical × Pb | baby sunscreen chemical lead occurrence |
| P1 | baby-sunscreen-chemical × Pb | baby sunscreen chemical Pb occurrence |

## How this feeds the corpus

Run `npm run wishlist:fetch` to consume this file. The existing wishlist pipeline:
1. Reads queries from this CSV
2. Hits OpenAlex with each query + the OA-only filter
3. Downloads matching OA PDFs to `raw/manual-fetch/auto-fetched/`
4. Logs decisions to `data/evidence/wishlist-fetch-audit.csv`

Downloaded PDFs are then picked up by the next routine ingest cycle (the agent's batch-ingest pipeline). The loop closes: thin cells trigger fetches, fetches feed ingest, ingest expands the pool, pool refresh refreshes briefings.