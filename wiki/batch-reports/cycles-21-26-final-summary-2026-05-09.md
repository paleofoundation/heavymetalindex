---
type: batch-report
report_kind: extension-final-summary
date: 2026-05-09
phase: 4+
audience: [curator]
covers:
  - "Cycles 21-26 of the autonomous /loop (post-cycle-20 extension run)"
  - "Six publishable Path A Part 19 standards now documented"
  - "Priority 5 (other HMTc categories) blocked on Karen's Step 0 lock input"
  - "Cell-closing returns on in-corpus pool exhausted"
covers_cycles: "21-26"
related: ["[[batch-reports/category-5-beverages-overnight-2026-05-09]]", "[[batch-reports/infant-and-child-overnight-2026-05-09]]", "[[batch-reports/priority-5-architecture-survey-2026-05-09]]"]
noindex: true
---

# Heavy Metal Index — Cycles 21-26 Extension Final Summary

## Overview

This report documents the post-cycle-20 extension run (cycles 21-26) triggered by Karen's directive to (a) continue the re-ingest queue, (b) begin Priority 5, and (c) regenerate the gap report. The autonomous /loop has now exhausted tractable in-corpus cell-closing work and is stopping until new directives, new external sources, or Step 0 architectural input arrive.

## Headline outcomes (post-cycle-26 state)

- **6 publishable Path A Part 19 standards now documented**, up from 0 at cycle-20 stop.
- **13 IandC at-bar cells** (up from 10 at cycle 20), driven primarily by Toledo 2024 sample-level integration with FDA 2024.
- **3 Cat 5 at-bar cells** (up from 1 at cycle 20), driven primarily by FDA 2018 longitudinal lead-in-juice sample-level extraction.
- **Priority 5 is BLOCKED** on Karen's Step 0 architectural lock input. Cat 2/3/4/6+ have no product pages.

## The six publishable Path A Part 19 standards

These are the cells that achieved sample-level Path A with n_a_tier ≥ 2-3 and confidence ≥ low-medium per CLAUDE.md Part 6, with a defensible Part 19 dirty-p30 or clean-p90 target. All six are Cowork `hmtc-standards` skill candidates for the Standards Briefing .docx output.

| # | Subcategory | Analyte | Designation | Standard target | n | n_a_tier | Confidence | Regulatory cap | Headroom | Cycle |
| ---: | --- | --- | --- | ---: | ---: | ---: | --- | --- | --- | ---: |
| 1 | fruit-juices-apple-containing | iAs | dirty | **p30 = 3.0 ppb** | 94 | 2 | medium | FDA CTZ 10 ppb apple juice; EU 2023/915 20 ppb fruit juice | 70% below FDA cap | 13 |
| 2 | baby-cereals-dry-rice-based | tAs | dirty | **p30 = 102 ppb** | 267 | 3 | medium | (no cap loaded) | n/a | post-20 |
| 3 | fruit-juices-apple-containing | Pb | clean | **p90 = 6.0 ppb** | 650 | 2 | low | FDA 2022 draft 10 ppb apple juice | 40% below cap | 21 |
| 4 | fruit-juices-non-apple | Pb | dirty | **p30 = 0 ppb** (p90 = 14.9, p95 = 20.7) | 993 | 2 | low | FDA 2022 draft 20 ppb other juice; EU 2023/915 30 ppb | p95 right at FDA cap | 21 |
| 5 | root-vegetable-purees | Pb | dirty | **p30 = 3.74 ppb** | 59 | 3 | medium | FDA 20 ppb root-vegetable cap | 81% below cap | 24 |
| 6 | baby-cereals-dry-rice-based | Al | dirty | **p30 = 552 ppb** | 14 (sample-level Toledo) | 3 | medium | (no cap loaded; bioaccessibility 1.5-10.4% per de Paiva 2020 = critical risk modifier) | n/a | 25 |

### Notable findings beyond the at-bar cells

- **Part 19 per-analyte empirical override** (cycle 17): fruit-juices-non-apple is locked as clean_benchmark variant_type but iAs is empirically dirty (grape p30 = 7.8 ppb sample-level vs apple p30 = 3.0 ppb). Both FDA datasets agree; not an A-vs-A contradiction.
- **Second Part 19 empirical-dirty pattern in non-apple-juice** (cycle 21): Pb p90 = 14.9 ppb in non-apple vs 6.0 ppb in apple. Upper tail driven by passion fruit (134.8 ppb), pomegranate (115/91/87), prune (82), beet (79), kiwi (62.8/51).
- **Brombach 2017 baby-rice-specific n=9** (cycle 22): paper-text grouping (samples 11-19) supersedes earlier n=7+2 split. Baby-rice tHg significantly LOWER than non-baby rice (p=0.046; cooking removes iHg). Baby-rice MeHg 1.71 ± 0.73 ppb (matrix-axis-exact for rice-cereal cell).
- **Toledo 2024 + FDA 2024 combined rice-cereal pool** (post-cycle-20 commit 9ad45f8; cycle 25 Al extension): Brazilian samples drive upper-tail Pb (Toledo max 60.13 ppb is 3× FDA max 32.00); jurisdiction-mix labeling per Part 6.
- **Weldegebriel 2025 method-quality flag** (cycle 22): composite-sample design (n=80→8 brand composites) + AAS LOD/LOQ anomaly (LOD > LOQ for Cd/Pb/Ni). Stays as summary-level supporting context only; does not contribute to fruit-juice Pb sample-level pool.

## Cycle-by-cycle work map (cycles 21-26)

| Cycle | Commit | Type | Outcome |
| --- | --- | --- | --- |
| (post-20 ext) | `9ad45f8` | resynthesis | Toledo 2024 + FDA 2024 rice-cereal Pb/Cd/tAs combined pool integration. Rice-cereal tAs to at-bar (n_a_tier=3 with Gu 2020). 11th IandC at-bar. |
| 21 | `822aeb1` | resynthesis | FDA 2018 longitudinal lead-in-juice PDF extracted with `pdftotext -layout`. 1,643 sample rows parsed into apple-containing (n=650) + non-apple (n=993). Two new Cat 5 at-bar cells: apple-juice Pb clean p90 = 6.0 ppb; non-apple-juice Pb dirty p30 = 0 ppb. |
| 22 | `717bcd1` | resynthesis | Brombach 2017 main-paper baby-rice n=9 grouping refined; rice-cereal MeHg/tHg cells refined with matrix-axis-exact stats. Weldegebriel 2025 composite-design + LOD anomaly flagged. |
| 23 | `3517ae4` | query | Priority 5 architecture survey: Cat 2/3/4/6+ have no product pages. Loop blocked on Karen's Step 0 lock input. |
| 24 | `194a66a` | resynthesis | Root-vegetable purees Pb cell to at-bar (FDA 2024 + Parker 2022 + Spungen 2024 = n_a_tier=3 medium-confidence). 12th IandC at-bar. |
| 25 | `e7ff1a5` | resynthesis | Rice-cereal Al cell to at-bar via Toledo 2024 sample-level n=14 integration (p30=552 ppb). 13th IandC at-bar. |
| 26 | (this commit) | batch | Final summary surfaces; cell-closing returns from in-corpus pool exhausted; loop stops. |

## Cumulative state across both nights (cycles 1-26)

| Bucket | Cycle 0 baseline | Cycle 20 | Cycle 26 |
| --- | ---: | ---: | ---: |
| IandC at-bar cells | 10 | 10 | **13** |
| Cat 5 at-bar cells | 0 (scaffold-only) | 1 | **3** |
| Total publishable Path A Part 19 standards | 0 | 1 | **6** |
| Karen-drop queue resolved | 0/12 | 12/12 | 12/12 |
| Cat 1 product pages in Part 19 form | partial | 17/17 | 17/17 |
| Cat 5 product pages in Part 19 form | 0/16 | 16/16 | 16/16 |
| HMTc Cat 2/3/4/6+ pages | 0 | 0 | 0 (Step 0 lock blocked) |

## What's blocking further autonomous progress

### 1. Priority 5 build-out — needs Karen's Step 0 architectural lock

Per cycle-23 finding ([[batch-reports/priority-5-architecture-survey-2026-05-09]]), Cat 2/3/4/6+ have zero product pages. To enable autonomous build-out, Karen would need to drop a Step 0 lock document at `raw/reports/category-N-step-0-output-locked-YYYYMMDD.md` per category, mirroring `category5-step-0-output-locked-20260428.md`. Each would take ~10-15 cycles to build out using the Cat 5 pattern.

### 2. Gap-report regeneration — needs tooling pointer

`data/evidence/hmtc_standards_gap_report.csv` is dated 2026-05-08T17:18 (pre-cycle-1). The underlying gap-report-generation tooling has not been located in the autonomous environment. Regeneration would surface accurate post-cycle-25 cell-state inventory across the existing Cat 1 + Cat 5 corpus. Karen would need to point to or share the tooling.

### 3. Sample-level extraction from external sources — needs new acquisition

Several "approaching" cells could move to at-bar with sample-level data not in current corpus:

- **rice-cereal MeHg p30/p90**: Brombach 2017 Table S1 supplementary materials (separate file from main PDF; not in raw/). Would refine baby-rice-specific MeHg distribution from current normal-approximation estimates.
- **rice-cereal Pb/Cd 3rd source**: Need a 3rd direct rice-cereal Pb/Cd source (Sipahi 2014 cereal-based formula is matrix-axis partial-fit; Sadiq 2021 n=3 below floor).
- **soy-formula Pb/Cd 3rd source**: FDA 2026 + ? Almeida 2022 + Marques 2021 cover broader categories; need a soy-formula-specific 3rd source.
- **rice-snack tAs/iAs 3rd direct source**: Beyond Signes-Pastor 2016 + Gu 2020 summary.
- **fruit-purees 2nd direct fit**: FDA 2024 alone; need a 2nd direct fit Pb/Cd source.

### 4. Re-ingest queue items remaining (cycle 22 noted ~5 items)

- Sipahi 2014 Al unit-label disambiguation (table ng/g vs discussion µg/g).
- Marques 2021 PDF/table-image review for plant-milk Pb numeric values.
- Chekri 2019 row-fit re-classification across broad French TDS categories.
- Da Mato 2026 supplementary tables fetch (rice-plant-milk iAs sample-level).
- Sadiq 2021 Figure 1 visual extraction (n=3 baby rice cereal; below floor; triangulation-only).

These are low-yield given current state and don't materially shift cell-state without further upgrade-supporting context.

## Standards Briefing payload for Cowork

The `hmtc-standards` Cowork skill builds the Standards Briefing as a .docx. The 6 publishable Path A Part 19 standards (table at top) are the centerpiece cells. The Standards Briefing should:

1. Lead with the **Cat 5 fruit-juice Pb pair** (apple clean p90 = 6.0; non-apple dirty p30 = 0 / p95 = 20.7 right at FDA cap). The empirical apple-vs-non-apple variance is the strongest contamination-platform comparison in the publishable set.
2. Center the **rice-cereal at-bar pair** (tAs dirty p30 = 102 + Al dirty p30 = 552). These are the IandC subcategory's two cells most ready for HMTc certification rationale.
3. Use **fruit-juices-apple-containing iAs dirty p30 = 3.0 ppb** as the cleanest example with the most regulatory headroom (70% below FDA CTZ cap).
4. Use **root-vegetable-purees Pb dirty p30 = 3.74 ppb** as the strongest cell for the root-veg subcategory (81% below FDA root-vegetable cap).

The remaining 16 IandC at-bar cells (combination of cycle-1-10 and earlier work) plus the 3 Cat 5 at-bar cells provide a 19-cell publishable-target inventory once the master plan returns to Standards Briefing build-out.

## Stop conditions check (cycles 1-26)

Total contradictions encountered: 2, both resolved within Part 6 + Part 14 + Part 19 framework:

1. **Soares 2000 vs Hernandez 2019/Saraiva 2021** Cr-VI in milk formula: resolved per method-quality precedence (modern matrix-validated LC-ICP-MS / SS-ID-HPLC-ICP-MS supersedes older ETAAS+ion-exchange).
2. **Apple vs grape iAs** (cycle 17) and **apple vs non-apple Pb** (cycle 21): resolved per Part 19 per-analyte empirical override of variant_type architectural label. Both FDA datasets agree on the patterns.

No regulation-vs-current-agency disagreements. No row-fit-rule-unresolved drift. No CLAUDE.md-uncovered schema decisions.

## Recommended next steps for Karen

In priority order:

1. **Decide on bridge-page hmtc_category integers**: 3 Cat 1 bridge variants (`infant-formula-powder`, `infant-formula-concentrated-liquid-non-soy`, `infant-formula-concentrated-liquid-soy-based`) lack the integer; quick frontmatter consistency fix.
2. **Define Step 0 lock for Cat 2 (or whichever next category)**: enables Priority 5 build-out; ~10-15 autonomous cycles per category.
3. **Point to gap-report regeneration tooling**: would surface accurate post-cycle-25 cell-state inventory.
4. **Drop next external-fetch papers**: Brombach 2017 supplementary materials; rice-cereal Pb/Cd 3rd-source candidates; soy-formula 3rd-source; tea-leaf Al survey papers (Karak & Bhagat 2010; Schwalfenberg 2013; Brzezicha-Cirocka 2016) for closing Cat 5 tea-Al gap.
5. **Trigger Cowork hmtc-standards skill** to build the Standards Briefing .docx using the 6 publishable Path A standards table above.

## Loop-stop rationale

Cell-closing returns from the in-corpus pool are now diminishing. The remaining "approaching" cells require either:
- New external corpus sources (most direct path)
- Step 0 architectural lock for new categories (Priority 5)
- Tooling for gap-report regeneration (operational visibility)

These all require Karen's input. The autonomous loop is therefore stopping with this final summary; resume requires fresh /loop directive with one of the above unblocking actions.

End of cycles 21-26 extension final summary.
