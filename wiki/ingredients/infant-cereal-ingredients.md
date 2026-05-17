---
title: Infant Cereal Ingredients
type: ingredient
commodity: infant-cereal-ingredients
aliases: [baby cereal, cereal flour, infant biscuit, cereal-based foods, cereal-based infant foods]
category: cereal-ingredient
contamination_profile:
  Pb: { status: populated, typical_ppb: [23, 54], p95_ppb: 125, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [3, 13], p95_ppb: 17, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [3, 16], p95_ppb: 48, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [grain-source, rice-status, cocoa-addition, fortification, processing]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/rice]]", "[[ingredients/cocoa]]", "[[ingredients/chocolate]]"]
used_in_products: ["[[products/baby-cereals-dry-non-rice]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/teething-and-snacks-non-rice]]", "[[products/teething-and-snacks-rice-based]]"]
audience: [regulator, educator, consumer, app]
sources: 3
updated: 2026-05-16
---

# Infant Cereal Ingredients

Chekri et al. 2019 reports a cereal-based infant-food category and notes high aluminum values in infant biscuits and baby cereal with biscuit and cocoa. Collado-Lopez et al. 2025 reports cereals as the baby-food group with the highest median Cd concentration in the review, but the source does not split rice-based from non-rice cereal products in a way that maps directly to the HMTc rows. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 23–54 | low | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/original2020-original-a\|2]] |
| Cd | n=3 | 3–13 | low | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/original2020-original-a\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 3–16 | low | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/original2020-original-a\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

_Pending cereal-ingredient extraction, including rice, wheat, oats, mixed grains, cocoa-containing cereals, and fortified cereal formulas._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods); cereal-based baby foods had highest Cd median among processed-food groups (0.013 mg/kg) with 17% exceedance rate |
| 2 | [[sources/original2020-original-a\|Alharbi et al. 2023]]. *Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition (Wiley) | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for cereal-based infant foods (n=17, as-consumed); rice and non-rice combined; Sn data fills gap not covered by FDA TDS |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

_Pending synthesis. The soil, plant biology, processing, or sourcing reasons this commodity carries heavy-metal load will be populated as contributing sources accumulate per CLAUDE.md Part 9._

## Processing effects

_Pending synthesis. Polishing, rinsing, fermentation, drying, milling, and refining effects on per-analyte concentration will be populated from contributing sources._

## Ingredient-derivative risk

_Pending synthesis. When this commodity is processed into syrups, concentrates, flours, brans, or other derivatives, the per-derivative concentration shifts will be populated here._

## Mitigation options

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing source pages and cross-linked `mitigation/` pages._

## Regulatory limits that apply

_Pending synthesis. Operative Codex, EU, FDA, and other regulatory limits for this commodity or its derived products will be populated from `regulations/` pages and source evidence._


