---
type: ingredient
commodity: cucumbers
title: "Cucumbers"
label: "Cucumbers"
aliases: [cucumber, pickled-cucumbers]
category: vegetable-fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [88, 220]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 20]
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
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [10, 19]
    p95_ppb: 74
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [60, 160]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, irrigation-water, can-lining, pickling-brine]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/pickled-vegetables]]", "[[products/canned-vegetables]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Cucumbers

Cucumbers (Cucumis sativus) is a fruiting vegetable from the gourd family consumed both fresh and in processed forms, principally pickled. The contamination profile splits cleanly along the processing axis: fresh cucumber from agricultural production carries the metals it takes up from soil and irrigation water, while pickled and canned cucumber additionally carries metals introduced by canning, brining, and packaging. The available evidence in the current corpus is regionally narrow (one Iranian fresh-cucumber survey, one Iranian canned-pickle survey, one Polish chromium survey) and the cucumber-specific sample counts are small in every case, so all per-analyte confidence ratings on this page are low.

## Why this commodity accumulates heavy metals

Cucumbers accumulate heavy metals through three primary routes. Soil uptake through the root system delivers Pb, Cd, Cr, and Ni from agricultural soils into the fruit; cucumber is generally a lower-uptake crop than leafy vegetables but is not in the lowest-uptake category. Irrigation water is a significant route in regions where wastewater or surface water carries dissolved metals; the Iranian Babol survey of vegetables from the Mazandaran agricultural region documented detectable Pb and Cd in fresh cucumber attributable to irrigation and soil sources ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour Alamdari et al. 2023]]). Atmospheric deposition contributes a smaller surface load that washing partially removes.

The processed-cucumber metal profile is dominated by a different pathway. Pickled cucumbers in cans or jars pick up Pb from canning processes and brining steps; the Iranian Tehran-market survey of five popular brands found Pb in pickled cucumber at a mean of 0.22 mg/kg, more than twice the Codex Alimentarius canned-product limit of 0.10 mg/kg ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-gilani et al. 2025]]). Tin migration from tinplate can linings contributes additional Sn at lower levels (mean 0.11 mg/kg in pickled cucumber, well below the EU 200 mg/kg ceiling).

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2 | 88–220 | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|2]] |
| Cd  | n=2 | 0–20 | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | n=1 | <LOD | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]] |
| tHg | n=1 | <LOD | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]] |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | n=1 | 10–19 | 74 | low | [[sources/reczajska2005-chromium-plant-foods-poland\|3]] |
| Sn  | n=1 | 60–160 | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]] |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Iranian Tehran-market survey of canned pickled cucumbers (five most-popular brands) reports Pb at 0.22 ± 0.08 mg/kg and Sn at 0.11 ± 0.05 mg/kg, with Cd, As, Fe, Zn, Hg, and Cu all below the analytical LOD ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-gilani et al. 2025]]). The Pb finding exceeds the Codex 0.10 mg/kg limit for canned products across all surveyed brands and represents the dominant analyte of concern for canned cucumber.

The Babol fresh-vegetable survey reports fresh cucumber at Pb 0.088 ± 0.052 mg/kg and Cd 0.02 ± 0.036 mg/kg on a fresh-weight basis, both below the Iranian National Standard limits for fruit vegetables (Pb 0.1 mg/kg, Cd 0.1 mg/kg) ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour Alamdari et al. 2023]]). The four-sample-per-vegetable design limits statistical inference but the order-of-magnitude comparison with the canned pickled form is meaningful: fresh cucumber Pb runs roughly one-half to one-third of the canned-pickle Pb level, with the additional Pb in pickled product attributable to the canning and brining process rather than to the raw cucumber.

The Polish chromium survey reports cucumber total Cr at n=23, range 1 to 74 µg/kg fresh weight, mean 19 µg/kg, median 10 µg/kg, and 90th percentile 40 µg/kg ([[sources/reczajska2005-chromium-plant-foods-poland|Reczajska et al. 2005]]). Total Cr is reported, not Cr-VI; per the CLAUDE.md Part 14 speciation rule, total Cr must never be substituted for Cr-VI without speciated measurement, and Cr-VI evidence belongs on [[metals/chromium-hexavalent]] rather than on this page. Regional variation across Polish provinces was reported for strawberries but the cucumber sub-cohort was not stratified by region in the source.

## Processing effects

The processing effect on cucumber metal load is dominated by the fresh-to-pickled transformation. The Iranian dataset directly evidences a Pb increase of roughly 2.5-fold from fresh (mean 88 ppb) to canned pickled (mean 220 ppb), with the additional Pb attributable to the canning process, brining additives, and can-lining migration. Tin enters the pickled product through tinplate can linings, with the acidic brine accelerating Sn migration relative to neutral-pH canned products. Mercury was below detection in the canned pickled product, suggesting that neither the raw cucumber nor the canning process is a material Hg source. Cd and total As fell below detection in canned pickled cucumber despite being detectable in fresh cucumber, suggesting that the canning process is not a net Cd or As source and that the dominant Cd and As pathways for cucumber are agricultural rather than processing-related. Washing fresh cucumber and peeling the skin removes a portion of surface-deposited Pb but does not affect systemically-taken-up metals.

## Ingredient-derivative risk

Cucumber as an ingredient produces a narrow set of derivatives. Fresh cucumber is the lowest-metal-load form. Pickled cucumber (jarred or canned in brine) is the dominant derivative and carries the canning-related Pb increase documented above. Pickled cucumber slices and relishes follow the same processing path with similar contamination profiles. Cucumber juice and cucumber-based cosmetic ingredients are out of scope for the food-chain wiki but follow the fresh-cucumber baseline. Dried cucumber is unusual in food applications. The principal derivative-related risk is therefore the pickled form, where can-lining choice and brine formulation drive the Pb and Sn load.

## Mitigation options

Sourcing levers operate at the agricultural and brand procurement level. Fresh cucumber sourcing from regions without documented irrigation-water contamination or industrial soil pollution reduces the inherent Pb, Cd, and Cr load. The Babol dataset documents that even cucumbers from a non-mining-region irrigated agricultural area can carry detectable Pb and Cd, so sourcing specifications need to be quantitative rather than categorical. For canned pickled cucumbers, brand selection matters: the Iranian dataset showed all five surveyed brands exceeding the Codex Pb limit, indicating systemic canning-process issues rather than supplier-quality variability.

Agronomic levers operate on the cucumber producer. Irrigation-water testing to exclude wastewater-contaminated supplies is the highest-leverage agronomic intervention given the documented role of irrigation in Iranian cucumber Pb and Cd contamination. Soil amendment to reduce metal bioavailability and cultivar selection for low-uptake variants are secondary controls.

Processing levers are limited for fresh cucumber. Washing removes surface deposition. Peeling removes the skin where atmospheric deposition concentrates. For pickled cucumber, switching from tinplate to lacquered cans, modern epoxy-based interior coatings, or glass jars eliminates the Sn migration pathway and reduces but does not eliminate the Pb pathway. Brine formulation with lower-Pb water and acidic-environment-stable can linings reduces total Pb load.

Formulation levers operate on the brand for pickled products. Adjusting brine acidity, reducing brine-to-cucumber ratio, and selecting non-tin packaging are the available adjustments.

Testing and QC levers are critical given the documented exceedance pattern. Lot-level ICP-MS testing of canned pickled cucumber against the Codex 0.10 mg/kg Pb ceiling catches process drift before product release. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are the load-bearing control for the pickled form. Lacquered tinplate, epoxy-lined cans, or glass packaging reduces Pb and Sn migration. Shorter shelf life and lower storage temperature both reduce accumulated migration from packaging into the brined cucumber.

## Regulatory limits that apply

The Codex Alimentarius general standard for contaminants establishes a 0.10 mg/kg (100 ppb) maximum level for Pb in canned products including pickled vegetables, the reference point used in the Iranian exceedance finding ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-gilani et al. 2025]]). The European Union Regulation (EU) 2023/915 establishes Pb in fruiting vegetables at 0.05 mg/kg (50 ppb) and Cd in fruiting vegetables at 0.05 mg/kg (50 ppb) on a wet-weight basis as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]); the same regulation sets a Sn maximum of 200 mg/kg (200,000 ppb) for canned foods other than beverages. The Iranian National Standard limits for fruit vegetables (Pb 0.1 mg/kg, Cd 0.1 mg/kg) are the reference for the Babol fresh-cucumber finding ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour Alamdari et al. 2023]]). The United States FDA has no commodity-specific action level for Pb, Cd, or Sn in fresh or pickled cucumber under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers*, Scientific Reports | 2025 | Peer-reviewed | Primary occurrence data for canned pickled cucumber (5 popular Iranian brands); Pb mean 220 ppb (exceeds Codex 100 ppb canned-product limit), Sn mean 110 ppb, Cd/As/Hg below LOD |
| 2 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Primary occurrence data for fresh cucumber from Babol Iranian agricultural region (n=4); Pb mean 88 ppb, Cd mean 20 ppb on fresh-weight basis |
| 3 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | Primary total Cr occurrence data for cucumber (n=23 Polish samples, ZETAAS); mean 19 ppb, median 10 ppb, 90th percentile 40 ppb, range 1–74 ppb; total Cr only, not Cr-VI |
<!-- END: hmi-source-legend -->
