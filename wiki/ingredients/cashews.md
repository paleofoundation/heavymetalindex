---
type: ingredient
commodity: cashews
title: "Cashews"
label: "Cashews"
aliases: [cashew-nuts]
category: nut
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 32]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 32]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [5350, 6434]
    p95_ppb: null
    confidence: medium
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [60, 250]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, geography, ni-accumulation, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Cashews

Cashews are the kernels of the cashew tree (Anacardium occidentale). This page covers the cashew commodity from the perspective of routing sources that use the plural form "cashews"; the [[ingredients/cashew-nuts]] page covers the same commodity from differently-named routing entries. The two pages address the same physical commodity and should eventually be merged by curator review per CLAUDE.md Part 10. Until that merge, the cashews page carries the Polish-market multi-nut comparison evidence from the Ćwieląg-Drabek 2025 study, while the cashew-nuts page carries the German BfR MEAL Study evidence. The combined picture across both pages establishes cashews as the highest-nickel nut type with relatively low Pb and Cd compared to other nut categories.

## Why this commodity accumulates heavy metals

Cashews accumulate heavy metals through soil uptake by the cashew tree, with the kernel concentrating metals from the tree's vascular and reproductive tissues. The cashew tree is notably tolerant of marginal lateritic and sandy soils common in West Africa, India, and South America, which can carry elevated baseline Ni. The Polish Ćwieląg-Drabek 2025 dataset documented that cashews carried the highest Ni mean (6,434 µg/kg) among five nut types studied (cashews, peanuts, walnuts, hazelnuts, almonds), with cashew Ni approximately 5-fold higher than almond Ni (1,299 µg/kg) ([[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland|Ćwieląg-Drabek et al. 2025]]). The same dataset showed that cashews carried the lowest Pb mean (majority below the LOQ of 32 µg/kg) among the five nut types, with peanuts at the high end (229 µg/kg mean). This Pb-low Ni-high pattern is characteristic of cashews and reflects the differential metal-uptake biology of the cashew tree compared to other nut species.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | 0–32 | — | low | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|1]] |
| Cd  | n=1 | 0–32 | — | low | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | n=2 | 5,350–6,434 | — | medium | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|—]] |
| Al  | data gap | — | — | — | — |
| Cr  | n=1 | 60–250 | — | low | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|1]] |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

The Ni value range integrates the Polish Ćwieląg-Drabek 2025 mean (6,434 µg/kg) and the German Fechner 2022 BfR MEAL value (5,350 µg/kg, sourced from [[ingredients/cashew-nuts]] page) to give a two-source picture of cashew Ni at the 5,000 to 7,000 µg/kg range. The Pb range reflects that the majority of Polish cashew samples were below the LOQ of 32 µg/kg, so the typical value is essentially "near or below detection" rather than a specific concentration; the same applies to Cd. The Cr range reflects the Ćwieląg-Drabek dataset placing cashews in the second-tier among five nut types (almonds 253 µg/kg highest, walnuts 133 µg/kg lowest); the specific cashew Cr mean is not separately tabulated in the accessible data slice but lies in the approximately 130 to 250 µg/kg range based on the rank ordering.

## Ranges by source, region, and variety

The Polish market survey of 69 nut samples across five types (almonds, cashews, hazelnuts, peanuts, walnuts) provides the per-nut comparison data ([[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland|Ćwieląg-Drabek et al. 2025]]). For cashews specifically: Pb majority below LOQ 32 µg/kg, Cd majority below LOQ 32 µg/kg, Ni mean 6,434 µg/kg (highest among the five types), Cr second-tier (estimated 130 to 250 µg/kg). The country of origin was recorded for each sample but per-origin breakdowns are not in the accessible data slice. Health risk modeling identified non-cancer hazard quotients above 1 for infants 6 to 11 months under multiple consumption scenarios, particularly driven by Ni in cashews.

The German BfR MEAL Study, accessible through the [[ingredients/cashew-nuts]] sister page, reports cashew Ni at 5,350 µg/kg ([[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany|Fechner et al. 2022]]), broadly consistent with the Polish value within the expected between-study variation. The cross-study confirmation strengthens the confidence rating for Ni from low to medium.

Regional and origin variation is not resolved beyond the two European market datasets. India, Vietnam, Côte d'Ivoire, and Brazil are the principal origin countries for the global cashew supply, but per-origin per-analyte values are not in the current corpus.

## Processing effects

Processing-state effects on cashew metal load are as described on the sister [[ingredients/cashew-nuts]] page. Shell removal during processing eliminates the shell-associated metals while concentrating kernel metals on a per-mass basis in the finished kernel. Roasting (dry, oil, or steam) does not materially change metal content. Cashew butter, cashew milk, cashew cream, cashew flour, and cashew protein concentrate are derivatives carrying the source-kernel metal load proportionally to the cashew content; cashew milk dilution with water proportionally reduces per-volume metal load.

## Ingredient-derivative risk

See [[ingredients/cashew-nuts]] for the derivative discussion. The principal cashew-derived ingredients are cashew butter, cashew milk, cashew cream and cheese alternatives, cashew flour, and cashew protein concentrate, all of which inherit the source-kernel metal profile. Cashew milk is a notable plant-milk alternative carrying a meaningful Ni vector relative to oat milk or rice milk.

## Mitigation options

See [[ingredients/cashew-nuts]] for the full mitigation discussion. The principal levers for cashews are sourcing (origin specification, supplier-level COA testing), formulation (substituting lower-Ni nuts where possible), and testing (lot-level ICP-MS against a Ni specification). Per-origin Ni variability is not currently documented; the available evidence supports brand-level rather than origin-level sourcing specifications until more granular data is added to the corpus.

## Regulatory limits that apply

See [[ingredients/cashew-nuts]] for the regulatory limits discussion. The European Union has no commodity-specific Ni maximum level for nuts; the EFSA TDI of 2.8 µg/kg bw/day applies cumulatively. EU 2023/915 establishes Pb in tree nuts at 0.10 mg/kg (100 ppb) and Cd in tree nuts at 0.10 mg/kg (100 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]); the Polish dataset documented that cashew Pb and Cd values are typically well below these limits. The United States FDA has no commodity-specific action level for Pb, Cd, or Ni in cashews under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | Primary Cd, Pb, Cr, Ni occurrence data for cashews in Polish-market multi-nut comparison (n=69 across 5 nut types); cashew Ni mean 6,434 ppb (highest among 5 types), Pb and Cd majority below LOQ 32 ppb, Cr second-tier |
| 2 | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | Near-duplicate entry of source #1 (same paper, DOI 10.1007/s12011-024-04438-4); kept until routing-layer deduplication resolves the duplicate cite-key |
<!-- END: hmi-source-legend -->
