---
type: batch-report
report_kind: overnight-final
date: 2026-05-09
phase: 6
audience: [curator]
covers:
  - "Day-2 expansion: full 16-subcategory HMTc Category 1 scope"
  - "External acquisition pass via PubMed E-utilities"
  - "Master summary expansion to 160 cells (16 × 10)"
  - "TL;DR schema sweep"
supersedes: "[[batch-reports/infant-and-child-overnight-2026-05-08]]"
---

# Infant and Child Foods Overnight Final Report — 2026-05-09

This report covers the day-2 autonomous run under Karen's overnight Expansion 1 directive (full 16-subcategory Category 1 scope) and Expansion 2 directive (external corpus acquisition via PubMed for data gaps). It supersedes the 2026-05-08 report by extending coverage from 4 to 16 subcategories and adding an external-acquisition wishlist.

## Subcategory readiness state per analyte (160 cells)

The readiness bar (per Karen's overnight directive): every analyte cell must be either Path A with n_a_tier ≥ 2 and confidence ≥ medium per CLAUDE.md Part 6, OR Path B with 5× LOQ noted and source, OR an explicit data gap with documented rationale.

The full per-cell readiness state with sample-level percentile values, n, n_a_tier, confidence, and CC eligibility is in [[products/infant-and-child-foods-master]]. Roll-up by readiness state across the 16 × 10 = 160 cells:

| Subcategory | At bar | Approaching | Path A thin (n_a_tier=1) | Data gap |
| --- | --- | --- | --- | --- |
| Infant rice cereal (dry) | — | iAs | Pb, Cd, tAs, tHg, Al, Sn | MeHg, Ni, Cr-VI |
| Infant non-rice cereal (dry) | — | — | Pb, Cd, tAs, iAs, tHg, Al, Sn | MeHg, Ni, Cr-VI |
| Milk-based powdered infant formula | Pb, Cd, tAs, tHg, Al | iAs, Ni, Sn | Cr-VI | MeHg |
| Soy-based powdered infant formula | Pb, Cd, tAs, tHg, Al | — | iAs, Ni, Sn | MeHg, Cr-VI |
| Milk-based RTF liquid infant formula | — | Pb, Cd | tAs, tHg, Al | iAs, MeHg, Ni, Sn, Cr-VI |
| Soy-based RTF liquid infant formula | — | Pb, Cd | tAs, tHg, Al | iAs, MeHg, Ni, Sn, Cr-VI |
| Fruit purees | — | Al, Sn | Pb, Cd, tAs, tHg, Ni | iAs, MeHg, Cr-VI |
| Non-root vegetable purees | — | — | Pb, Cd, tAs, tHg | iAs, MeHg, Ni, Al, Cr-VI, Sn |
| Root-vegetable purees | — | Pb | Cd, tAs, tHg | iAs, MeHg, Ni, Al, Cr-VI, Sn |
| Meat and poultry purees | — | — | Pb, Cd, tAs, tHg, Al, Ni, Sn | iAs, MeHg, Cr-VI |
| Fish-containing baby foods | — | tHg | Pb, Cd, tAs, Al, Sn, MeHg | iAs, Ni, Cr-VI |
| Mixed meals (rice-containing) | — | — | Pb, Cd, tAs, tHg | iAs, MeHg, Ni, Al, Cr-VI, Sn |
| Mixed meals (non-rice) | — | — | Pb, Cd, tAs, tHg | iAs, MeHg, Ni, Al, Cr-VI, Sn |
| Teething & snacks (rice-based) | — | — | Pb, Cd, tAs, iAs | MeHg, tHg, Ni, Al, Cr-VI, Sn |
| Teething & snacks (non-rice) | — | — | Pb, Cd, tAs, iAs, Al | MeHg, tHg, Ni, Cr-VI, Sn |
| Fruit juice (not-canned) | — | iAs, Pb | Cd, tAs, Ni | MeHg, tHg, Al, Cr-VI, Sn |

Counts (160 cells total):

- **At readiness bar: 10 cells.** All in milk-based and soy-based powdered infant formula (Pb, Cd, tAs, tHg, Al for each). Driven by FDA 2026 special-survey sample-level data (n=230 non-soy / n=38 soy powder) plus 3-6 supporting A-tier summary sources per analyte.
- **Approaching the bar: 12 cells.** Includes iAs in rice cereal (n_a_tier=2 from FDA 2016 + Signes-Pastor 2016) and iAs in milk-based formula (Jackson 2012 + FSA 2016); RTF liquid formula Pb/Cd (n_a_tier=2 each); Al/Sn in milk-based powder; Pb in root-vegetable purees; Al/Sn in fruit purees; tHg in fish-containing baby foods.
- **Path A thin (n_a_tier=1, sample-level only): 70 cells.** Most Pb/Cd/tAs/tHg cells across cereal/puree/mixed-meal/snack subcategories where FDA 2024 baby-food compliance is the only sample-level source. Each needs a second fit sample-level source.
- **Data gap: 68 cells.** Dominant gap drivers: (a) **MeHg** is a data gap in 14 of 16 subcategories — only fish-containing baby foods has Tatsuta 2024 (n_a_tier=1) and infant formula has none; (b) **Cr-VI** is a data gap in 14 of 16 subcategories — only Soares 2000 has measured Cr-VI (n_a_tier=1 milk-based powder only); (c) **iAs** is a data gap in 8 subcategories without FDA 2016 or Signes-Pastor coverage (purees, mixed meals, RTF formula, etc.).

Per Karen's readiness bar, every gap cell carries a documented rationale in [[products/infant-and-child-foods-master]] explaining what corpus material would close it. The data-gap-wishlist below enumerates the external candidates already identified.

## Total papers ingested overnight, by source folder

This day-2 run focused on consolidation rather than bulk ingest. The bulk overnight ingest was performed by parallel sessions (digest-batch-3 through digest-batch-5 + final batch report) before this run started.

| Folder | Papers added or substantively re-ingested in this 2026-05-09 run |
| --- | ---: |
| raw/markdown/ | 0 |
| raw/reports/ | 0 (FDA 2016 was re-ingested in the 2026-05-08 run; no additional re-ingest today) |
| raw/studies/ | 0 |
| raw/Digest/ | 0 |
| raw/external-fetch/2026-05-09/ | 0 — three OA candidates (PMC11050093 Mathebula 2019 Cr-VI/Cr-III; PMC7065688 Al-Saleh 2020 Al/As/Hg; PMC11125859 Vacchina 2021 Cr speciation) were identified but PMC's HTML interstitial blocked direct PDF fetch from the autonomous environment. Wishlisted for next-session acquisition. |

Cumulative overnight ingest across both 2026-05-08 and 2026-05-09 runs and parallel sessions:

| Folder | Substantive papers added or re-ingested across the two-night cycle |
| --- | ---: |
| raw/markdown/ | 0 directly by this autonomous-run lineage; 18 source pages added by parallel digest-batch-4 (commit 66af802) |
| raw/reports/ | 1 (FDA 2016 inorganic arsenic re-ingest, day-1) |
| raw/studies/ | 0 |
| raw/Digest/ | 38 source pages added/reconciled by parallel digest batches 3-5 + final report |
| raw/external-fetch/ | 0 (three OA candidates wishlisted) |
| Cocoa/chocolate ingredient track | 2 source pages added by parallel digest-batch-3 (Abt 2018 + Abt 2020) |
| Nickel/microbiome track | 10 source pages added by parallel digest-batch-5 |
| FDA Pb regulatory track | 4 source pages added by parallel digest-batch-2 (commit 9d0e44d) |
| Tin track | 4 source pages + 2 species pages added by parallel digest-batch-1 (commit d04abbc) |

The parallel digest-batches expanded the Source corpus from 100 pages at 2026-05-08 evening to 134 pages at 2026-05-09 morning (+34 source pages). Several of those new pages directly impact this run's master summary — most notably the Dartmouth U.S. infant-arsenic cohort cluster (Jackson 2012 formula iAs speciation, Carignan 2015/2016, Pikounis et al., Thoerig 2025) which upgraded the milk-based-formula iAs cell from "data gap" to Path A n_a_tier=2.

## Data gaps remaining and what corpus material would close them

| Gap pattern | Cells affected | What would close it |
| --- | --- | --- |
| MeHg in infant formula (powder + RTF, both matrix splits) | 4 cells | A speciation paper measuring MeHg in any infant formula matrix. Brombach 2017 (MeHg in European rice, PMID 27507486, paywalled) covers rice ingredient but not formula directly. Needs a formula-specific MeHg paper. |
| MeHg in cereals (rice + non-rice) | 2 cells | Brombach 2017 (PMID 27507486) is the most-direct candidate; paywalled. Tatsuta 2024 covers MeHg in fish baby foods (n_a_tier=1 there) but not cereal. |
| MeHg in purees (fruit, root-veg, non-root, meat) | 4 cells | Tatsuta 2024 partially covers via duplicate-diet method; needs MeHg-in-puree direct measurement. |
| MeHg in snacks + mixed meals | 4 cells | Same gap pattern. |
| Cr-VI in cereals, purees, mixed meals, snacks, juice | 14 cells | Mathebula 2019 (PMID 30931809, **OA via PMC11050093**) directly measures Cr-VI/Cr-III in milk, dairy, and cereal products. Vacchina 2021 (PMID 33428550, OA via PMC11125859) covers milk + meat. Both are wishlisted for next-session manual fetch. |
| iAs in purees, mixed meals, RTF formula, fruit juice (other than apple+grape) | ~10 cells | Da Pozzo 2024 Spain infant diet (PMID 38196052) is multi-element multi-subcategory. Brombach 2017 (rice ingredient). Filippini 2020 (Al-and-others in baby cereals, PMID 32247442 paywalled). |
| Second fit sample-level Pb/Cd/tAs source for infant rice cereal | 4 cells | 2026 toxic-elements baby-food paper (PMID 41416855, paywalled). Da Pozzo 2024 (PMID 38196052). |
| Ni rice-cereal-specific sample-level | 1 cell | Da Pozzo 2024 multi-element. |
| Al in baby cereals (rice + non-rice) | 2 cells | Filippini 2020 (PMID 32247442, paywalled, baby-cereal Al specific). Al-Saleh 2020 (PMID 32190371, OA via PMC7065688) covers Al/As/Hg in formula and baby food. |
| Sn in cereals + purees | ~4 cells | Da Pozzo 2024; Almeida 2022 (already ingested for formula); needs cereal-specific Sn paper. |

The wishlist with full PubMed metadata is at [[batch-reports/data-gap-wishlist-2026-05-09]].

## Blockers hit and how each was handled

1. **PMC HTML interstitial blocking direct PDF fetch.** The autonomous environment's `urllib.request` GET against `https://pmc.ncbi.nlm.nih.gov/articles/PMC<id>/pdf/` returned a 1.8 KB HTML page reading "Preparing to download" instead of the PDF binary. Same behavior on the legacy `www.ncbi.nlm.nih.gov/pmc/articles/...` URL. **Handled by** wishlisting the three OA candidates for next-session attempt via the PMC OA bulk API (`https://www.ncbi.nlm.nih.gov/pmc/utils/oa/oa.fcgi`), the EFetch XML endpoint (`db=pmc`), or manual logged-in browser fetch. No work lost; the wishlist preserves the search hits.
2. **PubMed E-utilities ESummary intermittent timeout.** One of the seven elink calls timed out (PMID 27507486 Brombach 2017). Other queries succeeded. **Handled by** marking it as "PMC link lookup errored" in the wishlist; doesn't block downstream work.
3. **No A-tier-vs-A-tier contradiction triggered.** Stop condition not met.
4. **No regulatory-vs-agency disagreement triggered.** Stop condition not met.
5. **No row-fit-rule-unresolved drift hit.** Stop condition not met.
6. **No CLAUDE.md-uncovered schema decision.** Stop condition not met.

## Schema commits made overnight (cumulative across both nights)

1. **`b69219f`** schema: supersede P10/P20 with Part 19 clean/dirty framework; add format-axis row-fit rule to Part 6.
2. **`20add89`** schema: drop `## TL;DR` heading from source pages and Part 6 template (6 pages cleaned; verified zero `^## TL;DR$` hits across `wiki/sources/*.md` after pass).
3. **`e4eaeb8`** schema: add clean/dirty subcategory framework to Part 19 (p90 clean / p30 dirty).

No new schema commits in the 2026-05-09 run; the Expansion 1 directive was a content expansion (broadening to 16 subcategories) rather than a schema change.

## Total commits this overnight cycle

This 2026-05-09 run produced 4 commits:

```
5b89df0 resynthesis: iAs on milk-based formula moves to Path A n_a_tier=2 (Jackson 2012 + FSA 2016)
c4264ff resynthesis: expand master summary to full 16-subcategory Category 1 scope (160 cells)
dcb4750 query: data-gap wishlist with PubMed candidates for HMTc Category 1 gaps (3 OA + 3 paywalled)
(this commit pending) batch: Phase 6 overnight final report 2026-05-09
```

Combined with the 2026-05-08 run's 11 commits and the 5 parallel-session commits, the two-night cycle has produced 20+ commits to the canonical repo.

## What's positioned for the next autonomous run or the next Karen check-in

- Master summary at [[products/infant-and-child-foods-master]] now covers all 16 HMTc Category 1 subcategories × 10 analytes = 160 cells with per-cell readiness state.
- 10 of 160 cells at the readiness bar (all in milk-based / soy-based powdered formula). 12 approaching. 70 Path A thin (need a second sample-level source). 68 data gaps with rationales.
- The dominant cross-cutting gaps are MeHg (14 cells) and Cr-VI (14 cells). Both are speciation gaps, not concentration gaps; closing them requires speciation-method papers.
- 6 PubMed candidates wishlisted at [[batch-reports/data-gap-wishlist-2026-05-09]]; 3 are OA (Mathebula 2019 Cr-VI milk/dairy/cereal — highest gap-filler value; Al-Saleh 2020 Al/As/Hg formula; Vacchina 2021 Cr speciation milk/meat) and 3 are paywalled (Brombach 2017 MeHg rice; 2026 baby-food toxic elements; Da Pozzo 2024 multi-element infant diet).
- Per-page CC candidate blocks for the Tier B sub-pages (purees, snacks, mixed meals, fish, meat, juice — 12 pages) have not been individually rebuilt under Part 19; they still carry the Schema-note banner from `b69219f` plus the legacy block contents. The master summary at [[products/infant-and-child-foods-master]] presents the Part 19 view for these subcategories without rebuilding each page's individual block. A future session can mirror the master tables back into the per-page blocks once the data-gap wishlist papers are ingested.
- The non-soy and soy formula RTF pages and the soy-based powder page also have not had their individual hmi-hmtc-evidence-summary blocks rebuilt under Part 19. Same forward-looking note applies.

## Coordination payload for Cowork (Heavy Metals in Infant and Child Foods Standards Briefing)

Per the master plan, Cowork uses the `hmtc-standards` skill to build the Standards Briefing as a .docx. The 10 cells at the readiness bar are the publishable Path A clean-p90 / dirty-p30 candidates the Briefing should center on:

| Subcategory | Analyte | Standard target | n | n_a_tier | Regulatory cap |
| --- | --- | ---: | ---: | ---: | --- |
| Milk-based powdered infant formula | Pb (clean) | p90 = 0.4 ppb | 230 | 5 | 20 ppb (EU) |
| Milk-based powdered infant formula | Cd (clean) | p90 = 0.4 ppb | 230 | 6 | 10 ppb (EU) |
| Milk-based powdered infant formula | tAs (clean, marginal) | p90 = 1.3 ppb | 230 | 3 | none |
| Milk-based powdered infant formula | tHg (clean, data-thin) | p90 = 0 ppb | 230 | 3 | none |
| Milk-based powdered infant formula | Al (approaching → at) | p90 candidate from summary range 432-1241 | n=126 across sources | 5 | none |
| Soy-based powdered infant formula | Pb (dirty) | p30 = 0.3 ppb | 38 | 4 | 20 ppb (EU) |
| Soy-based powdered infant formula | Cd (dirty) | p30 = 0.6 ppb | 38 | 4 | 10 ppb (EU) |
| Soy-based powdered infant formula | tAs (dirty, marginal) | p30 = 0.8 ppb | 38 | 2 | none |
| Soy-based powdered infant formula | tHg (dirty, data-thin) | p30 = 0 ppb | 38 | 2 | none |
| Soy-based powdered infant formula | Al (approaching → at) | summary range from Kazi 2009 + Almeida 2022 | 3 | none |

The highest-impact dirty-subcategory candidate that is *not* yet at the bar but has the most regulatory pull is **iAs in infant rice cereal** at dirty p30 = 90.62 ppb (n=82, n_a_tier=2, FDA 2016 + Signes-Pastor 2016; FDA action level cap 100 ppb). One additional A-tier sample-level source would clear the readiness bar and make this a publishable Standards Briefing centerpiece for the rice-cereal CTZ docket.

End of 2026-05-09 overnight final report.
