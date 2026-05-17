---
title: Infant Formula Ingredients
type: ingredient
commodity: infant-formula-ingredients
aliases: [formula ingredients, formula powder ingredients, infant formula constituents, mineral premix, vitamin premix]
category: formulated-food-system
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 5], p95_ppb: 100, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [0, 5], p95_ppb: 15, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [0, 5], p95_ppb: 20, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [0, 3], p95_ppb: 5, confidence: low, n_studies: 5, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [10, 80], p95_ppb: 200, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [150, 1000], p95_ppb: 2700, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 5], p95_ppb: 10, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [5, 35], p95_ppb: 100, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [0, 50], p95_ppb: 100, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [ingredient-inputs, mineral-premix, processing-equipment, storage, packaging, powder-homogeneity]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/soy]]"]
used_in_products: ["[[products/infant-formula-powder-non-soy]]", "[[products/infant-formula-powder-soy-based]]", "[[products/infant-formula-rtf-liquid-non-soy]]", "[[products/infant-formula-rtf-liquid-soy-based]]"]
audience: [regulator, educator, consumer, app]
sources: 12
updated: 2026-05-16
---

# Infant Formula Ingredients

_Stub page. Burrell and Exley 2010 argues that aluminum in infant formula is likely contamination from formula constituents, processing equipment, storage, and packaging rather than an intentionally added ingredient. Chuchu et al. 2013 repeats the ingredient and processing concern and highlights aluminum-based packaging as a plausible contamination route. Dabeka et al. 2011 adds Canada-market format, formula-type, and packaging context for Al, Cd, and Pb in formula and infant-support liquids. Astolfi et al. 2021 adds an Italian powder-only multi-element survey in which nickel, cadmium, lead, tin, zinc, and manganese support powdered-formula evidence, while aluminum, arsenic, and chromium are retained only as detection-limit context because more than 30% of results were below LOD. Kazi et al. 2009 adds milk-based versus soy-based formula variance for Al, Cd, and Pb in imported formulae purchased in Pakistan. This page is a graph anchor for formula-input and processing-driver evidence, not a claim that a single ingredient explains all formula metal findings. [[sources/burrell2010-aluminium-in-infant-formulas]] [[sources/chuchu2013-aluminium-in-infant-formulas]] [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] [[sources/astolfi2021-italy-powdered-infant-formula-elements]] [[sources/kazi2009-toxic-elements-in-infant-formulae]]_

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 1–5 | medium | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/astolfi2021-italy-powdered-infant-formula-elements\|3]] |
| Cd | n=7 | 0–5 | medium | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/astolfi2021-italy-powdered-infant-formula-elements\|3]] |
| iAs | n=2 | 0–5 | low | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=3 | 1–5 | low | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/astolfi2021-italy-powdered-infant-formula-elements\|2]], [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation\|3]] |
| tHg | n=5 | 0–3 | low | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet\|3]] |
| Ni | n=2 | 10–80 | low | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|1]], [[sources/astolfi2021-italy-powdered-infant-formula-elements\|2]] |
| Al | n=7 | 150–1000 | medium | [[sources/astolfi2021-italy-powdered-infant-formula-elements\|1]], [[sources/chuchu2013-aluminium-in-infant-formulas\|2]], [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|3]] |
| Cr | n=2 | 5–35 | low | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|1]], [[sources/astolfi2021-italy-powdered-infant-formula-elements\|2]] |
| Sn | n=2 | 0–50 | low | [[sources/astolfi2021-italy-powdered-infant-formula-elements\|1]], [[sources/codex-cxs-193-1995\|2]] |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

_Pending input-level occurrence extraction. Current evidence supports product-format differences between powders and ready-made formulas, but does not isolate individual formula constituents._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review synthesizing Pb, Cd, As, Hg in 251 infant formulas and 580 baby foods, providing broad-formula-context evidence for the metal burden attributable to formula ingredient inputs |
| 2 | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|Höpfner et al. 2025]]. *The contribution of infant formula to the food survey-based dietary exposure of nine selected elements*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0-5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | MeHg and tHg in Japanese infant and toddler duplicate diets across formula-milk, baby-food, and toddler-meal stages, with formula-stage MeHg as context for Hg in formula ingredient blends |
| 4 | [[sources/astolfi2021-italy-powdered-infant-formula-elements\|Astolfi et al. 2021]]. *Determination of 40 Elements in Powdered Infant Formulas and Related Risk Assessment*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | 40-element survey of 22 Italian powdered infant formula samples, providing Al, Cd, Pb, Ni, Sn, Cr, and As occurrence data with risk assessment and discussion of ingredient inputs and processing as contamination routes |
| 5 | [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation\|Pacquette et al. 2016]]. *Simultaneous Determination of Arsenic, Cadmium, Mercury, and Lead in Raw Ingredients, Nutritional Products, and Infant Formula by Inductively Coupled Plasma Mass Spectrometry: Single-Laboratory Validation*, Journal of AOAC International, Vol. 99, No. 3, pp. 766-779 | 2016 | Peer-reviewed | Single-laboratory ICP-MS method validation for As, Cd, Hg, Pb in raw formula ingredients (acid casein, maltodextrin, skim milk powder) and finished infant formula, establishing the analytical basis for ingredient-level heavy metal compliance testing |
| 6 | [[sources/chuchu2013-aluminium-in-infant-formulas\|Chuchu et al. 2013]]. *The aluminium content of infant formulas remains too high*, BMC Pediatrics | 2013 | Peer-reviewed | Al in 30 UK infant formulas attributing high concentrations to formula constituents, processing equipment, and aluminum-based packaging as contamination routes |
| 7 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|Dabeka et al. 2011]]. *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*, Food Additives & Contaminants: Part A | 2011 | Peer-reviewed | Pb, Cd, Al in Canadian infant formulas across powder, concentrated liquid, and RTF formats, providing format-level and type-level context for ingredient-input variance |
| 8 | [[sources/burrell2010-aluminium-in-infant-formulas\|Burrell et al. 2010]]. *There is (still) too much aluminium in infant formulas*, BMC Pediatrics | 2010 | Peer-reviewed | Al in UK infant formulas arguing that formula constituent ingredients, processing equipment, and aluminum-based packaging are the primary Al contamination routes rather than intentionally added components |
| 9 | [[sources/kazi2009-toxic-elements-in-infant-formulae\|Kazi et al. 2009]]. *Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer*, Food and Chemical Toxicology | 2009 | Peer-reviewed | Al, Cd, Pb in 17 milk-based and soy-based infant formulas purchased in Pakistan, documenting higher means in soy-based than milk-based products across all three metals |
| 10 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | ATSDR MRL of 1 mg Al/kg/day for chronic oral Al exposure, with infant formula ingredients identified as a relevant Al exposure source for non-breastfed infants |
| 11 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal (2008) 754, 1-34 | 2008 | Government report | EFSA TWI of 1 mg Al/kg b.w./week with infants on certain formulas explicitly identified as a population at risk of exceeding the TWI from Al in formula ingredient inputs |
| 12 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd, Pb, Hg, and iAs in food matrices including infant formula, the international regulatory floor applicable to formula ingredient-level screening programs |
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


