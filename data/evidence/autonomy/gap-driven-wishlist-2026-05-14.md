# Gap-driven wishlist — 2026-05-14

## Summary

- Cells flagged as thin: 102
- Total OpenAlex queries emitted: 408
- By verdict:
  - BLOCKED: 172 cells
  - PROVISIONAL: 7 cells

## Top 20 priority queries

| Priority | Product × Metal | Query |
|---|---|---|
| P1 | baby-talcum-powder × Pb | baby talcum powder lead occurrence |
| P1 | baby-talcum-powder × Pb | baby talcum powder Pb occurrence |
| P1 | baby-talcum-powder × Cd | baby talcum powder cadmium occurrence |
| P1 | baby-talcum-powder × Cd | baby talcum powder Cd occurrence |
| P1 | baby-talcum-powder × tHg | baby talcum powder total mercury occurrence |
| P1 | baby-talcum-powder × tHg | baby talcum powder mercury occurrence |
| P1 | baby-talcum-powder × tAs | baby talcum powder total arsenic occurrence |
| P1 | baby-talcum-powder × tAs | baby talcum powder arsenic occurrence |
| P1 | baby-talcum-powder × Ni | baby talcum powder nickel occurrence |
| P1 | baby-talcum-powder × Cr | baby talcum powder Cr occurrence |
| P1 | canned-fish × tAs | canned fish total arsenic occurrence |
| P1 | canned-fish × tAs | canned fish arsenic occurrence |
| P1 | canned-fish × MeHg | canned fish methylmercury occurrence |
| P1 | canned-fish × MeHg | canned fish methyl mercury occurrence |
| P1 | canned-fruit × Pb | canned fruit lead occurrence |
| P1 | canned-fruit × Pb | canned fruit Pb occurrence |
| P1 | canned-fruit × Cd | canned fruit cadmium occurrence |
| P1 | canned-fruit × Cd | canned fruit Cd occurrence |
| P1 | canned-fruit × tAs | canned fruit total arsenic occurrence |
| P1 | canned-fruit × tAs | canned fruit arsenic occurrence |

## How this feeds the corpus

Run `npm run wishlist:fetch` to consume this file. The existing wishlist pipeline:
1. Reads queries from this CSV
2. Hits OpenAlex with each query + the OA-only filter
3. Downloads matching OA PDFs to `raw/manual-fetch/auto-fetched/`
4. Logs decisions to `data/evidence/wishlist-fetch-audit.csv`

Downloaded PDFs are then picked up by the next routine ingest cycle (the agent's batch-ingest pipeline). The loop closes: thin cells trigger fetches, fetches feed ingest, ingest expands the pool, pool refresh refreshes briefings.