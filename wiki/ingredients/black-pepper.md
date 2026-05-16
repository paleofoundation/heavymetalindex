---
type: ingredient
commodity: black-pepper
title: "Black Pepper"
label: "Black Pepper"
aliases: [piper-nigrum, ground-pepper, peppercorns]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [8, 130]
    p95_ppb: 370
    confidence: medium
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [7, 180]
    p95_ppb: 1700
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [850, 2080]
    p95_ppb: 4800
    confidence: medium
    n_studies: 1
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
drivers: [soil-uptake, geography, processing-contamination, supply-chain-handling]
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

# Black Pepper

Black pepper is dried unripe fruit of Piper nigrum, principally cultivated in Vietnam, India, Indonesia, Brazil, and Sri Lanka, and used globally as a culinary spice and as a functional ingredient in commercial seasoning blends and processed foods. The metal profile in the available evidence is dominated by nickel, with mean concentrations of approximately 2,080 ppb across a 13-sample Australian market survey (range 850 to 4,800 ppb) placing black pepper at the high end of the spice category for Ni ([[sources/tinggi2025-spices-herbs-queensland|Tinggi et al. 2025]]). Lead in commercially traded black pepper is generally moderate (Tinggi mean 130 ppb, Cicero Vietnam single-sample 8 ppb) but with wider individual variation than nickel; arsenic was generally low but one Australian-market black pepper sample reached 1,700 ppb total arsenic, the single highest tAs in the 13-sample Australian dataset. The geographic concentration of black pepper production into a handful of countries means that origin-based sourcing specifications carry significant leverage.

## Why this commodity accumulates heavy metals

Black pepper accumulates heavy metals through three pathways. The first is soil uptake by the Piper nigrum vine, which delivers Pb, Cd, Ni, and arsenic from agricultural soils into the developing fruit during the growing season. Vietnam and India, which together account for the majority of global black pepper production, both have growing regions with documented variable soil-metal baselines; the Tinggi 2025 dataset's highest tAs value (1,700 ppb in a single sample) is consistent with sourcing from a contaminated-soil pepper-growing region rather than processing-related introduction.

The second pathway is processing-contamination. Black pepper is dried after harvest, then milled or sold whole as peppercorns. The drying process concentrates all components including metals by water loss; the milling step introduces metal contact through the grinding equipment. Black pepper's status as a high-Ni spice reflects both soil-source Ni and supply-chain handling through Ni-containing equipment.

The third pathway is post-harvest contamination during international handling, blending, and packaging. Black pepper is one of the most globally traded spices, with substantial volume passing through multiple processors and packagers between source farm and consumer. Each handling step is a potential metal-contact point.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2 | 8–130 | 370 | medium | [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]], [[sources/tinggi2025-spices-herbs-queensland\|1]] |
| Cd  | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | n=1 | 7–180 | 1,700 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]] |
| tHg | n=1 | <LOD | — | low | [[sources/tinggi2025-spices-herbs-queensland\|1]] |
| Ni  | n=1 | 850–2,080 | 4,800 | medium | [[sources/tinggi2025-spices-herbs-queensland\|1]] |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Australian Queensland market survey of 69 commercial spice and herb samples, including 13 black pepper samples imported from multiple origins, provides the most comprehensive black pepper dataset in the current corpus ([[sources/tinggi2025-spices-herbs-queensland|Tinggi et al. 2025]]). Black pepper reported Pb mean 0.13 ± 0.09 mg/kg (range 0.016 to 0.37 mg/kg), Ni mean 2.08 ± 1.07 mg/kg (range 0.85 to 4.8 mg/kg), and tAs mean 0.18 ± 0.46 mg/kg (range 0.007 to 1.7 mg/kg). The wide arsenic range, with a single sample at 1.7 mg/kg and the mean dragged up by that single outlier, reflects either a contaminated-soil source for one batch or a single-sample analytical anomaly. The Hg LOR was 0.005 mg/kg with approximately 75 percent of all 69 samples below LOR, indicating that Hg in commercial spice products including black pepper is generally below detection.

The Italian Cicero 2022 study of 13 international-market spice samples included a single Vietnamese black pepper sample with Pb 0.008 ± 0.001 mg/kg (8 ppb), substantially below the Australian dataset mean ([[sources/cicero2022-minerals-spices-aromatic-herbs|Cicero et al. 2022]]). The same sample reported Sn at 1.174 ± 0.027 mg/kg, the second-highest Sn value among the 13 spices in that study. Single-sample data is low confidence; the Sn value is reported here for context but not promoted to the per-analyte table values pending corroboration.

Regional and varietal variation across the multiple production countries (Vietnam, India, Indonesia, Brazil, Sri Lanka) is not resolved beyond the country-of-origin labels in the Australian dataset. Origin-stratified per-analyte values for black pepper would require a larger dataset than the current corpus contains.

## Processing effects

Processing-state effects on black pepper metal load are dominated by drying-related concentration and milling-related introduction. The drying step concentrates source-fruit metals proportionally with water loss. Whole peppercorns and ground black pepper carry essentially the same per-mass metal load, since the milling step does not remove metals; however, the milling equipment can introduce additional Ni and Fe through metal contact. Pre-ground black pepper from industrial mills with stainless steel equipment carries a lower processing-related metal addition than products ground in older mills with carbon steel or iron equipment. White pepper, produced from ripe Piper nigrum fruit with the outer fruit layer removed, carries a different metal profile because the removed outer layer concentrates surface-deposited metals; white pepper typically carries lower Pb than black pepper from the same source, though the contributing sources do not provide a direct comparison.

## Ingredient-derivative risk

Black pepper produces a limited set of derivatives. Whole peppercorns are the lowest-handling form. Ground black pepper is the standard culinary form with the milling-related metal addition described above. Pepper oleoresin, produced by solvent extraction of the volatile flavor compounds, concentrates lipophilic components while leaving most metals in the spent pepper material; this is the lowest-metal-load black pepper-derived ingredient. Pepper oil (essential oil distillate) similarly carries minimal metal load. Black pepper seasoning blends (steak seasoning, pepper blends) carry the black pepper metal load proportionally to the formulation percentage. Industrially processed pepper-containing seasonings often include flow agents and anticaking compounds that can contribute additional metals depending on the specific additive grade.

## Mitigation options

Sourcing levers operate at the brand level. Origin specification (Vietnamese vs Indian vs Brazilian vs Sri Lankan black pepper) is the primary discriminant. The Australian dataset documents wide per-origin variability; brand-level sourcing decisions matter as much as type-level decisions. Supplier-level COA testing of each lot against a sourcing specification is the load-bearing control.

Agronomic levers operate on the black pepper producer. Soil testing of pepper-growing fields to identify and avoid contaminated soils, irrigation-water testing, and avoidance of phosphate fertilizers contaminated with Cd are the documented practices in the broader plant-food agronomic literature. These require supplier engagement to verify.

Processing levers are partial. Selecting stainless steel grinding equipment over carbon steel reduces Ni introduction during milling. Pre-grinding by reputable industrial mills with documented equipment and QC programs reduces brand-level variability relative to in-house grinding from whole peppercorns of unknown processing history. White pepper substitution where the culinary application permits reduces Pb load.

Formulation levers operate on the brand for products using black pepper as an ingredient. Reducing the pepper percentage in seasonings, substituting lower-metal-load spices, or replacing whole pepper with pepper oleoresin (which carries minimal metal load) are the available adjustments depending on flavor requirements.

Testing and QC levers are critical given the documented wide individual variability. Lot-level ICP-MS testing against a black pepper specification catches outlier batches before they enter production. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for black pepper in the current evidence base. Glass, food-grade plastic, and metal-free tin containers dominate the market.

## Regulatory limits that apply

The European Union Regulation (EU) 2023/915 establishes Pb in spices including pepper at 2.0 mg/kg (2,000 ppb), substantially above the Australian dataset mean and maximum, and Cd in spices at 0.5 mg/kg (500 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). The Codex Alimentarius CXS 193-1995 does not currently set a specific maximum level for Pb in pepper; the EU value is the dominant international reference. The Australian FSANZ Food Standards Code establishes Pb in spices at 0.1 mg/kg (100 ppb), which the Tinggi 2025 dataset documented being exceeded in approximately 60 percent of black pepper samples; the same dataset's dietary exposure modeling using typical Australian spice consumption of 1.9 g/day showed all exposures remaining below EFSA health-based guidance values despite the exceedances, because per-serving consumption is low. The EFSA Tolerable Daily Intake for Ni is 2.8 µg/kg bw/day, with black pepper contributing 0.23 percent of TDI under typical Australian consumption ([[sources/efsa2015-nickel-food-water|EFSA 2015]]). The United States FDA has no commodity-specific action level for Pb, Cd, or Ni in black pepper under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | Primary Pb, Ni, tAs, tHg occurrence data for black pepper (n=13 Queensland market samples); Pb mean 130 ppb (range 16–370), Ni mean 2,080 ppb (range 850–4,800), tAs mean 180 ppb (range 7–1,700), Hg <LOR in ~75% of samples |
| 2 | [[sources/cicero2022-minerals-spices-aromatic-herbs\|Cicero et al. 2022]]. *Mineral and Microbiological Analysis of Spices and Aromatic Herbs*, Foods | 2022 | Peer-reviewed | Pb and Sn for Vietnamese black pepper (n=1); Pb 8 ppb (substantially below Australian dataset mean), Sn 1,174 ppb (second-highest Sn among 13 spices in study) |
<!-- END: hmi-source-legend -->
