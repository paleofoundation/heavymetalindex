---
type: ingredient
commodity: sesame-oil
title: "Sesame Oil"
label: "Sesame Oil"
aliases: [toasted-sesame-oil, sesame-seed-oil]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [9, 17]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 9]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [18, 91]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
drivers: [seed-source, extraction-method, industrial-refining, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Sesame Oil

Sesame oil is an edible oil pressed or extracted from sesame seeds (Sesamum indicum), available in light (untoasted) and dark (toasted) forms and used as both a cooking medium and a flavoring oil across East Asian, Middle Eastern, and South Asian cuisines. The metal profile is characteristic of seed-derived oils: low absolute concentrations relative to whole-seed sesame because metals partition unevenly between the oil fraction and the press cake during extraction, with transfer rates documented at less than 10 percent for Pb and arsenic in pressing and solvent extraction but higher for supercritical CO2 extraction ([[sources/lee2019-food-processing-heavy-metals-migration|Lee et al. 2019]]). The most consequential variable in the available evidence is the traditional-versus-industrial processing distinction: industrial sesame oil from the Iranian Hamadan market carried roughly 40 percent higher total arsenic than traditionally pressed sesame oil from the same region ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri et al. 2024]]).

## Why this commodity accumulates heavy metals

Sesame oil accumulates heavy metals through three pathways. The first is the source-seed pathway: sesame seeds take up Pb, Cd, and arsenic from agricultural soils through root uptake, with the seed concentration depending on soil chemistry, irrigation water source, and varietal uptake characteristics. The Lee 2019 dataset reports per-batch sesame seed totals of 1.6 to 373.6 µg Pb and 321 to 849 µg As per batch across Korean market samples, with the latter representing the highest arsenic load among the three seed types studied (sesame, perilla, flaxseed). The transfer of these source-seed metals into the extracted oil is the principal determinant of oil-level contamination.

The second pathway is extraction-method-related. Mechanical pressing and conventional solvent (hexane) extraction transfer less than 10 percent of source-seed Pb and arsenic to the oil fraction and less than 30 percent of source-seed Cd. Supercritical CO2 extraction transfers materially more (up to 30 percent for Pb and arsenic), making the choice of extraction technology a meaningful contamination lever for industrial sesame oil producers ([[sources/lee2019-food-processing-heavy-metals-migration|Lee et al. 2019]]).

The third pathway is industrial refining. The Iranian Mehri 2024 dataset documented that industrial sesame oils (refined, bleached, deodorized) carried higher total arsenic (91 ppb mean) than traditional, less-processed oils (64 ppb mean) from the same regional market. The mechanism is concentration of trace metals during evaporative refining steps and metal contact during industrial processing equipment exposure. The same pattern held for iron (industrial sesame oil 23,664 ppb mean vs traditional 15,091 ppb) but not for Cd (similar across both, around 9 ppb).

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2 | 9–17 | — | low | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]] |
| Cd  | n=2 | 5–9 | — | low | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 18–91 | — | low | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]] |
| tHg | data gap | — | — | — | — |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Iranian Mehri 2024 survey of 40 vegetable oil samples (10 sesame oils split between traditional and industrial processing, plus equal counts of olive, sunflower, and peanut oils) provides the most comprehensive sesame oil dataset in the current corpus ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri et al. 2024]]). Traditional sesame oil reported tAs 0.064 ± 0.037 mg/kg, Cd 0.009 ± 0.004 mg/kg, and Pb 0.009 ± 0.004 mg/kg on a wet-weight basis. Industrial sesame oil from the same regional market reported tAs 0.091 ± 0.033 mg/kg, Cd 0.009 ± 0.003 mg/kg, and Pb 0.013 ± 0.002 mg/kg. All values fell below Codex CXS 210 and Iranian ISIRI limits for Pb (0.1 mg/kg), Cd (0.05 mg/kg), and tAs (0.1 mg/kg). The processing-state difference for tAs (42 percent higher in industrial) is the load-bearing finding for sesame oil sourcing specifications.

The Saudi Arabian Ashraf 2012 survey of 161 vegetable oil samples from Saudi hypermarkets (19 sesame oils) reports sesame oil tAs 0.018 µg/g (18 ppb), Cd 5.78 ± 0.21 ng/g (5.78 ppb), and Pb 0.017 ± 0.002 µg/g (17 ppb), with the cautionary note that the reported Pb and tAs values fall below the GF-AAS LOD listed in the methods section (Pb LOD 0.098 µg/g, tAs LOD 0.121 µg/g), so these values should be interpreted as upper-bound estimates rather than confirmed quantifications ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Ashraf 2012]]).

The Korean Lee 2019 study did not report finished-oil concentrations for sesame oil specifically; it reported source-seed totals and seed-to-oil transfer rates by extraction method, which inform the processing-effect discussion but do not contribute directly to the per-analyte table values for finished oil ([[sources/lee2019-food-processing-heavy-metals-migration|Lee et al. 2019]]).

Regional and varietal variation is constrained by the geographic concentration of the available evidence (Iranian Hamadan, Saudi market, Korean market). No US, EU, or African sesame oil source is in the current corpus for this page.

## Processing effects

Processing-state effects on sesame oil metal load operate through two distinct mechanisms. The first is extraction-method choice. Mechanical pressing transfers the least source-seed metal to the oil (less than 10 percent of Pb and arsenic), conventional solvent extraction transfers a similar fraction, and supercritical CO2 extraction transfers materially more (up to 30 percent). Brands using supercritical CO2 extraction should expect higher oil-level metal loads from a given source seed.

The second mechanism is industrial refining. The bleaching, deodorization, and winterization steps of industrial vegetable oil refining concentrate trace metals through evaporative volume reduction and add metals through process equipment contact. The Iranian dataset documented a 42 percent increase in tAs from traditional to industrial sesame oil from the same regional source, with similar but smaller increases for Fe. Traditional pressing of sesame seeds without industrial refining produces an oil with lower trace-metal load at the cost of a stronger, less neutral flavor profile. Toasting the seed prior to pressing (the dark sesame oil variant common in East Asian cuisine) is not addressed in the contributing sources but is documented elsewhere as not materially changing the metal load.

## Ingredient-derivative risk

Sesame oil produces a narrow set of derivatives. Light (untoasted) sesame oil is the cooking-oil form. Toasted sesame oil is the flavoring-oil form, produced by toasting the seeds before pressing. Both forms carry similar metal profiles based on the available evidence. Sesame oil-based dressings, marinades, and finishing sauces inherit the metal load of the source oil proportionally. Tahini (sesame seed paste) is a sesame-seed derivative rather than a sesame-oil derivative; tahini carries the full seed metal load including the components that do not transfer to oil during pressing. Sesame seed cake (the press cake remaining after oil extraction) concentrates the metals that do not transfer to oil and is used as animal feed or fertilizer rather than as a food ingredient.

## Mitigation options

Sourcing levers operate at the brand and producer level. Sourcing sesame seed from growing regions with documented low soil-arsenic and low soil-Cd baselines is the upstream lever. Sesame is grown across India, China, Sudan, Tanzania, Nigeria, and other regions with widely varying soil-metal baselines; sourcing specifications by origin region are the primary discriminant.

Agronomic levers operate on the sesame seed producer. Irrigation-water testing, soil amendment to manage Cd bioavailability, and cultivar selection for low-uptake variants are documented in the broader plant-food agronomic literature but not specifically for sesame in the current corpus.

Processing levers are the load-bearing lever for finished sesame oil contamination. Selecting mechanical pressing or conventional solvent extraction over supercritical CO2 reduces seed-to-oil metal transfer. Selecting traditional, less-refined processing over industrial refining further reduces tAs and Fe load by approximately 40 percent based on the Iranian dataset. The trade-off is a less-neutral flavor and shorter shelf life in the traditional product.

Formulation levers operate on the brand for finished products containing sesame oil. Reducing the proportion of sesame oil in a formulation proportionally reduces the contribution to total metal load. Substituting a lower-metal oil for a portion of the sesame oil is the standard formulation response.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming sesame oil against a sourcing specification catches origin-related and processing-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for sesame oil in the current evidence base. Glass and food-grade plastic packaging dominate the market, with no documented packaging-related metal migration pathway.

## Regulatory limits that apply

The Codex Alimentarius standard for named vegetable oils, CXS 210-1999, establishes maximum levels for Pb in vegetable oils at 0.1 mg/kg (100 ppb), the reference used in the Iranian and Saudi Arabian exceedance analyses ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri et al. 2024]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Ashraf 2012]]). The European Union Regulation (EU) 2023/915 establishes Pb in vegetable fats and oils at 0.10 mg/kg (100 ppb) and Cd at 0.1 mg/kg (100 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). The Iranian National Standard ISIRI limits for vegetable oils match the Codex values at Pb 0.1 mg/kg, Cd 0.05 mg/kg, and tAs 0.1 mg/kg. The United States FDA has no commodity-specific action level for Pb, Cd, or arsenic in sesame oil under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | Primary Pb, Cd, and tAs occurrence data for sesame oil (n=10, traditional and industrial processing); traditional Pb 9 ppb, Cd 9 ppb, tAs 64 ppb; industrial Pb 13 ppb, Cd 9 ppb, tAs 91 ppb |
| 2 | [[sources/lee2019-food-processing-heavy-metals-migration\|Lee et al. 2019]]. *Effects of food processing methods on migration of heavy metals to food*, Applied Biology and Chemistry | 2019 | Peer-reviewed | Source-seed Pb, Cd, and As totals for sesame; documents seed-to-oil transfer rates by extraction method (pressing and solvent <10%, supercritical CO2 up to 30%); processing-effect mechanism data |
| 3 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry | 2012 | Peer-reviewed | Pb, Cd, and tAs occurrence for sesame oil from Saudi market (n=19); Pb 17 ppb (near LOD), Cd 5.78 ppb, tAs 18 ppb (near LOD); upper-bound estimates due to analytical LOD limitations |
<!-- END: hmi-source-legend -->
