# Gap-driven wishlist — 2026-05-14

## Summary

- Cells flagged as thin: 60.5
- Total OpenAlex queries emitted: 242
- By verdict:
  - BLOCKED: 81 cells
  - PROVISIONAL: 10 cells

## Top 20 priority queries

| Priority | Product × Metal | Query |
|---|---|---|
| P1 | coffee × tAs | coffee total arsenic occurrence |
| P1 | coffee × tAs | coffee arsenic occurrence |
| P1 | fermented-beverages-non-tea-based × Pb | fermented beverages non tea based lead occurrence |
| P1 | fermented-beverages-non-tea-based × Pb | fermented beverages non tea based Pb occurrence |
| P1 | fermented-beverages-non-tea-based × Cd | fermented beverages non tea based cadmium occurrence |
| P1 | fermented-beverages-non-tea-based × Cd | fermented beverages non tea based Cd occurrence |
| P1 | fish-containing-baby-foods × MeHg | fish baby food methylmercury occurrence |
| P1 | fish-containing-baby-foods × MeHg | fish baby food methyl mercury occurrence |
| P1 | fish-containing-baby-foods × MeHg | salmon baby food methylmercury occurrence |
| P1 | fish-containing-baby-foods × MeHg | salmon baby food methyl mercury occurrence |
| P1 | fish-containing-baby-foods × MeHg | tuna infant food methylmercury occurrence |
| P1 | fish-containing-baby-foods × MeHg | tuna infant food methyl mercury occurrence |
| P1 | flavored-waters × Pb | flavored waters lead occurrence |
| P1 | flavored-waters × Pb | flavored waters Pb occurrence |
| P1 | glucose-solutions × Al | glucose solutions aluminum occurrence |
| P1 | glucose-solutions × Al | glucose solutions aluminium occurrence |
| P1 | glucose-solutions × Cd | glucose solutions cadmium occurrence |
| P1 | glucose-solutions × Cd | glucose solutions Cd occurrence |
| P1 | glucose-solutions × Pb | glucose solutions lead occurrence |
| P1 | glucose-solutions × Pb | glucose solutions Pb occurrence |

## How this feeds the corpus

Run `npm run wishlist:fetch` to consume this file. The existing wishlist pipeline:
1. Reads queries from this CSV
2. Hits OpenAlex with each query + the OA-only filter
3. Downloads matching OA PDFs to `raw/manual-fetch/auto-fetched/`
4. Logs decisions to `data/evidence/wishlist-fetch-audit.csv`

Downloaded PDFs are then picked up by the next routine ingest cycle (the agent's batch-ingest pipeline). The loop closes: thin cells trigger fetches, fetches feed ingest, ingest expands the pool, pool refresh refreshes briefings.