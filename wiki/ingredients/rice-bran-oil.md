---
type: ingredient
commodity: rice-bran-oil
title: "Rice Bran Oil"
label: "Rice Bran Oil"
aliases: [rbo]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
drivers: [source-bran-fraction, bran-arsenic-concentration, extraction-method, refining]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/rice-bran]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Rice Bran Oil

Rice bran oil is an edible oil extracted from the bran fraction of rice (Oryza sativa), used as a high-smoke-point cooking oil and as a functional ingredient in industrial food preparation. The metal profile is fundamentally driven by the source bran fraction's contamination, which itself reflects the source-rice metal accumulation. The bran fraction of rice concentrates iAs and other metals at substantially higher levels than the polished endosperm (white rice), which is why rice bran and rice bran derivatives carry the highest per-mass metal loads in the rice-derivative spectrum. The available evidence in the current corpus does not include direct rice bran oil occurrence values; the two routed sources are review papers ([[sources/scutarasu2023-heavy-metals-foods-beverages|Scutarasu and Trincă 2023]] and [[sources/silva2025-edible-oils-health-sustainability|Silva et al. 2025]]) that cross-reference rice bran oil in their broader vegetable oil discussions but do not tabulate specific per-analyte concentration values for rice bran oil itself in the accessible data slices.

## Why this commodity accumulates heavy metals

Rice bran oil accumulates heavy metals through three principal pathways. The first is the source-rice bran metal load. Rice bran (the outer layer of the rice grain removed during polishing) is documented as the metal-concentrated fraction of the rice grain, with iAs concentrations typically 5- to 10-fold higher than in white rice and Cd similarly elevated. The [[ingredients/rice-bran]] page covers the source-bran metal profile in detail. The metals partition during oil extraction, with the bulk of metals remaining in the spent bran cake while a fraction transfers into the extracted oil.

The second pathway is extraction-method choice. Solvent extraction (typically hexane) is the dominant industrial method for rice bran oil production; the same seed-to-oil transfer rates documented by [[sources/lee2019-food-processing-heavy-metals-migration|Lee et al. 2019]] for sesame and other oilseeds (less than 10 percent for Pb and arsenic, up to 30 percent for Cd, higher with supercritical CO2) are expected to apply to rice bran oil, though direct measurement is not in the corpus.

The third pathway is industrial refining. Rice bran oil typically undergoes degumming, neutralization, bleaching, and deodorization steps before reaching the consumer market. The Iranian Mehri 2024 dataset documented that industrial refining of sesame and peanut oils concentrated tAs by 18- to 42-fold relative to traditional processing, and the same mechanism would be expected to apply to industrially refined rice bran oil; direct measurement for rice bran oil specifically is not in the corpus.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | data gap | — | — | — | — |
| Cd  | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

The all-data-gap profile reflects the absence of primary occurrence sources for rice bran oil in the current corpus. The two routed sources are review papers that cross-reference rice bran oil in their broader vegetable-oil discussions but do not tabulate per-analyte concentration values for rice bran oil specifically in the accessible data slices. The Scutarasu 2023 Table 4 documents extensive cross-oil cross-country occurrence data including rice bran oil cross-references but the specific rice-bran-oil tabular entries are not in the data slice extracted for this synthesis pass. Primary rice bran oil occurrence sources (Mohajer 2020 is cited in Scutarasu's review) need to be added to the corpus before the contamination profile can be populated.

## Ranges by source, region, and variety

The Scutarasu 2023 review identifies rice bran oil within its broader edible oil discussion but does not tabulate rice-bran-oil-specific values in the accessible data slice ([[sources/scutarasu2023-heavy-metals-foods-beverages|Scutarasu and Trincă 2023]]). The review cross-references Mohajer 2020 for rice bran oil values; that primary source is not currently in the routed corpus for this page. The Silva 2025 review of edible oils covers production processes and quality considerations including rice bran oil but similarly does not contribute primary per-analyte occurrence data in the accessible data slice ([[sources/silva2025-edible-oils-health-sustainability|Silva et al. 2025]]).

Regional and varietal variation across major rice bran oil producing countries (India, Japan, Thailand, China, Vietnam) is therefore not resolved in the current corpus. Adding the cited Mohajer 2020 primary source or other rice-bran-oil-specific occurrence surveys would substantially improve this page's per-analyte content.

## Processing effects

Processing-state effects on rice bran oil metal load are expected to follow the documented patterns for other seed-derived vegetable oils: extraction method choice (mechanical pressing and conventional solvent extraction transfer less than 10 percent of source-bran Pb and arsenic; supercritical CO2 transfers up to 30 percent) and industrial refining (refining steps concentrate tAs and Fe relative to unrefined oil). Rice bran oil is almost universally industrially refined for the consumer market; cold-pressed unrefined rice bran oil is uncommon, in part because the high free fatty acid content of crude rice bran oil requires industrial neutralization for shelf stability.

## Ingredient-derivative risk

Rice bran oil produces a narrow set of derivatives. Refined rice bran oil is the standard consumer form. Crude (unrefined) rice bran oil is sometimes used as an industrial feedstock for further processing into rice bran wax, fatty acids, and squalene. Rice bran oil-derived gamma-oryzanol and tocotrienol concentrates are functional-ingredient derivatives that concentrate the bran-derived antioxidants while leaving most metals in the spent oil; these specialty derivatives carry a different metal partition than the bulk oil. Rice bran cake (the residue after oil extraction) carries the bulk of source-bran metals not transferred to the oil; it is used as animal feed or fertilizer rather than as a food ingredient.

## Mitigation options

Sourcing levers operate at the brand and producer level. Sourcing rice bran from rice produced in low-iAs growing regions (the same sourcing variables that govern [[ingredients/rice]] contamination) is the upstream lever. Indian basmati and California rice are documented as lower-iAs sources than Chinese-mainland or Bangladeshi rice; rice bran oil sourced from these origins would be expected to carry lower iAs than oil from high-iAs-rice origins.

Agronomic levers operate on the rice producer. Water management of paddies to limit iAs uptake, cultivar selection for low-uptake variants, and avoidance of arsenic-contaminated groundwater irrigation are documented practices in the broader rice agronomic literature.

Processing levers are partial. Selecting mechanical pressing over solvent extraction reduces seed-to-oil metal transfer (at the cost of much lower yield). Crude oil rather than fully refined oil reduces refining-related arsenic concentration but is shelf-life-limited.

Formulation levers operate on the brand. Substituting rice bran oil with other vegetable oils (sunflower, canola) with lower expected source-grain metals is the available adjustment where the functional and flavor requirements permit.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming rice bran oil against a sourcing specification catches origin- and processing-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for rice bran oil in the current evidence base.

## Regulatory limits that apply

The Codex Alimentarius standard for named vegetable oils, CXS 210-1999, establishes maximum levels for Pb in vegetable oils at 0.1 mg/kg (100 ppb). The European Union Regulation (EU) 2023/915 establishes Pb in vegetable fats and oils at 0.10 mg/kg (100 ppb) and Cd at 0.1 mg/kg (100 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). Codex does not currently establish a specific iAs maximum level for vegetable oils; the source-rice iAs regulations apply to the rice bran rather than to the extracted oil. The United States FDA has no commodity-specific action level for Pb, Cd, or arsenic in rice bran oil under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]); the framework's rice and rice product action levels (iAs in infant rice cereal at 100 ppb) apply to the source-rice products rather than to extracted oil.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | Review of edible oil production processes including rice bran oil; covers refining-related quality and contamination considerations |
| 2 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Review | Broad review of heavy metals in foods and beverages including a dedicated edible oils section; cross-references rice bran oil but does not tabulate rice-bran-oil-specific per-analyte values in accessible data slice |
<!-- END: hmi-source-legend -->
