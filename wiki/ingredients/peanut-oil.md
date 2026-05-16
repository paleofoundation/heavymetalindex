---
type: ingredient
commodity: peanut-oil
title: "Peanut Oil"
label: "Peanut Oil"
aliases: [groundnut-oil, arachis-oil]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [25, 27]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [6, 9]
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
    typical_ppb: [5, 89]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
drivers: [peanut-source, extraction-method, industrial-refining, soil-arsenic]
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

# Peanut Oil

Peanut oil is an edible oil pressed or solvent-extracted from peanuts (Arachis hypogaea), used as a cooking oil with high smoke point and as a flavoring oil in roasted (toasted) form in East Asian cuisines. The metal profile mirrors the source-peanut metal load partitioned by extraction efficiency: peanuts as a category carry the highest Pb and Cd among common nuts per the Ćwieląg-Drabek 2025 Polish dataset (peanut Pb mean 229 ppb, peanut Cd mean 92 ppb, both substantially higher than tree nut values), but the seed-to-oil transfer rates for Pb and arsenic are documented at less than 10 percent for pressing and solvent extraction per the Korean Lee 2019 dataset cited on the [[ingredients/sesame-oil]] page. The result is that peanut oil carries materially lower per-mass metal load than whole peanuts. Industrial refining produces a documented increase in tAs relative to traditional processing per the Iranian Mehri 2024 dataset.

## Why this commodity accumulates heavy metals

Peanut oil accumulates heavy metals through three pathways. The first is the source-peanut metal load. Peanuts have an unusual contamination profile because they grow underground (the peg-pod system places the developing peanut in direct contact with soil), exposing the kernel to soil-metal uptake more directly than most other oilseeds. The Polish multi-nut dataset documented that peanuts carry the highest Pb and second-highest Cd among five nut types, with one Polish peanut sample reaching 818 µg/kg Pb (above the EU peanut ML of 200 µg/kg). The source-peanut metals partition into the oil during extraction.

The second pathway is extraction-method choice. Mechanical pressing and conventional solvent extraction transfer less than 10 percent of source-peanut Pb and arsenic to the oil fraction. Supercritical CO2 extraction transfers materially more (up to 30 percent). The choice of extraction technology is a meaningful contamination lever.

The third pathway is industrial refining. The Iranian Mehri 2024 dataset documented that industrial peanut oil carried 18-fold higher total arsenic (89 ppb) than traditional peanut oil (5 ppb) from the same regional source, while Pb and Cd values were similar across traditional and industrial preparation. The mechanism is concentration of trace arsenic during evaporative refining steps. The same pattern was reported for sesame oil in the same study.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | 25–27 | — | low | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]] |
| Cd  | n=2 | 6–9 | — | low | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | n=1 | 5–89 | — | low | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]] |
| tHg | data gap | — | — | — | — |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Iranian Mehri 2024 survey reports peanut oil values for both traditional and industrial preparation. Traditional peanut oil: tAs 0.005, Cd 0.006, Pb 0.025, Fe 5.655, Zn 2.863 mg/kg wet weight. Industrial peanut oil: tAs 0.089, Cd 0.009, Pb 0.027, Fe 11.323, Zn 8.835 mg/kg ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri et al. 2024]]). The 18-fold tAs increase from traditional to industrial is the most striking processing-effect signal; Pb and Cd ran roughly equivalent across the two processing categories. All values fell well below Codex CXS 210 limits for Pb (0.1 mg/kg), Cd (0.05 mg/kg), and tAs (0.1 mg/kg). Carcinogenic risk modeling for tAs in industrial peanut oil exceeded the 1×10⁻⁶ threshold for both adults and children.

The Saudi Arabian Ashraf 2012 survey of 161 vegetable oil samples from Saudi hypermarkets included 17 peanut oil samples ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Ashraf 2012]]). Peanut oil Cd was in the 2 to 7 ng/g range typical of the dataset; Pb and tAs values fell below the GF-AAS LODs (Pb LOD 0.098 µg/g, tAs LOD 0.121 µg/g), making the reported numbers upper-bound estimates rather than confirmed quantifications.

The source-peanut metal context comes from the Polish Ćwieląg-Drabek 2025 dataset (cited on [[ingredients/cashew-nuts]] for the cross-nut comparison) and is relevant for understanding the high seed-load that the extraction process must partition. The Polish dataset reports peanut Pb mean 229 µg/kg (range up to 818) and Cd mean 92 µg/kg in the source seed; the oil values reported here at 25 to 27 ppb Pb are consistent with the documented less-than-10-percent seed-to-oil transfer rate.

Regional and varietal variation across major peanut-producing regions (China, India, Nigeria, US, Argentina) is not resolved in the current corpus beyond the two Middle Eastern market datasets.

## Processing effects

The processing-effect pattern for peanut oil follows the same two-axis structure documented in detail on [[ingredients/sesame-oil]]: extraction-method choice (pressing and solvent < 10 percent transfer for Pb and arsenic, supercritical CO2 up to 30 percent) and industrial-versus-traditional refining (industrial refining concentrates tAs by approximately 18-fold relative to traditional pressing in the Iranian dataset for peanut oil specifically). Roasting the peanuts before pressing (the traditional Chinese toasted-peanut-oil practice) does not materially change metal content. Selecting raw vs roasted source peanuts, and traditional vs industrial processing, are the available processing levers.

## Ingredient-derivative risk

Peanut oil produces a narrow set of derivatives. Refined peanut oil is the standard cooking-oil form, sold for high-temperature frying and as a general-purpose vegetable oil in some markets. Unrefined or cold-pressed peanut oil carries lower trace metal load than refined per the Iranian dataset's traditional-versus-industrial contrast. Toasted (Chinese-style) peanut oil is the flavoring-oil form. Peanut butter is a peanut-seed derivative rather than peanut-oil derivative and carries the full source-seed metal load. Peanut oil-based dressings and marinades inherit the source-oil metal load proportionally.

## Mitigation options

Sourcing levers operate at the brand and producer level. Sourcing peanuts from regions with documented low soil-metal baselines is the upstream lever; the high source-seed Pb and Cd documented in the Polish dataset emphasizes that brand-level sourcing specifications matter for peanuts more than for most tree nuts.

Agronomic levers operate on the peanut producer. Soil-Cd testing of peanut plots, irrigation-water management, and cultivar selection for low-uptake variants are documented in the broader agronomic literature.

Processing levers are the load-bearing lever for finished peanut oil contamination. Selecting mechanical pressing or conventional solvent extraction over supercritical CO2 reduces seed-to-oil metal transfer. Selecting traditional, less-refined processing over industrial refining reduces tAs by approximately 18-fold based on the Iranian dataset, at the cost of a less-neutral flavor and shorter shelf life.

Formulation levers operate on the brand for products using peanut oil as an ingredient. Reducing the peanut oil percentage or substituting a lower-metal oil for a portion of the formulation are available adjustments.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming peanut oil against a sourcing specification catches origin-related and processing-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for peanut oil in the current evidence base.

## Regulatory limits that apply

The Codex Alimentarius standard for named vegetable oils, CXS 210-1999, establishes maximum levels for Pb in vegetable oils at 0.1 mg/kg (100 ppb). The European Union Regulation (EU) 2023/915 establishes Pb in vegetable fats and oils at 0.10 mg/kg (100 ppb) and Cd at 0.1 mg/kg (100 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). The Iranian National Standard ISIRI limits for vegetable oils match the Codex values at Pb 0.1 mg/kg, Cd 0.05 mg/kg, and tAs 0.1 mg/kg. The United States FDA has no commodity-specific action level for Pb, Cd, or arsenic in peanut oil under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | Primary Pb, Cd, and tAs occurrence data for peanut oil (n=10, traditional and industrial); traditional Pb 25 ppb, Cd 6 ppb, tAs 5 ppb; industrial Pb 27 ppb, Cd 9 ppb, tAs 89 ppb (18-fold processing-related tAs increase) |
| 2 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry | 2012 | Peer-reviewed | Saudi-market peanut oil values (n=17) with Cd in 2–7 ng/g range; Pb and tAs values below GF-AAS LODs and treated as upper-bound estimates |
<!-- END: hmi-source-legend -->
