---
title: "Chicken"
type: ingredient
commodity: chicken
label: "Chicken"
aliases: [chicken]
category: meat-poultry
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 10
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 3]
    p95_ppb: 6
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 1.4
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1065]
    p95_ppb: 1300
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [20, 200]
    p95_ppb: null
    confidence: low
    n_studies: 5
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 27.8]
    p95_ppb: 28.6
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 7
---

# Chicken

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Chicken muscle meat is generally a low accumulator of heavy metals relative to plant foods and organ meats. The primary contamination pathway for muscle is dietary transfer: metals ingested through feed accumulate predominantly in liver and kidney, with muscle tissue retaining only a small fraction. Cadmium and lead in commercial poultry muscle are consistently low in global surveillance data. The notable exception for US broiler chicken is arsenic, which was historically elevated due to the veterinary use of roxarsone (an organoarsenic growth promotant) until its voluntary withdrawal by Pfizer in 2011 and subsequent FDA ban on arsenical veterinary drugs in 2015. Post-withdrawal monitoring indicates residual total arsenic and inorganic arsenic remain detectable at low levels in some commercial US broiler chicken muscle, reflecting the persistence of arsenical compounds in soil and feed supply chains [[sources/lasky2013-arsenic-chicken-correspondence]]. Spanish-market processed chicken baby purees measured by ICP-MS showed tAs, tHg, Pb, Cd, Ni, Al, and Cr across 39 products; exact values for chicken muscle purees are in progress pending structured extraction [[sources/henriquez-hernandez2023-baby-purees-spain-elements]]. A Bangladesh study measured heavy metals and trace elements in edible body parts of chicken with results pending extraction [[sources/hossain2023-bangladesh-chicken-metals]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0 | medium | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Cd | n=5 | 0–3 | medium | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| iAs | n=1 | 0 | low | [[sources/lasky2013-arsenic-chicken-correspondence\|1]] |
| tAs | n=2 | 1–20 | low | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]], [[sources/lasky2013-arsenic-chicken-correspondence\|2]] |
| tHg | n=1 | 0–1 | high | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|1]] |
| Ni | n=2 | 10–100 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|2]] |
| Al | n=2 | 0–1065 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]], [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|2]] |
| Cr | n=5 | 20–200 | low | [[sources/altalib2025-frozen-meat-libya\|1]], [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Sn | n=1 | 0–27.8 | medium | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 UK survey includes chicken as a measured food matrix [[sources/fsa2016-infant-food-formula-metals-survey]]; exact values are pending structured extraction. Henriquez-Hernandez et al. 2023 measured 39 processed chicken baby purees from Spanish retail by ICP-MS and found detectable concentrations of multiple metals [[sources/henriquez-hernandez2023-baby-purees-spain-elements]]; exact values are pending synthesis. Hossain et al. 2023 measured metals in chicken body parts in Bangladesh [[sources/hossain2023-bangladesh-chicken-metals]]; values pending extraction. Lasky et al. 2013 provides context on the US broiler arsenic situation following the veterinary drug withdrawal, noting that residual arsenic in US commercial chicken muscle remained detectable post-withdrawal [[sources/lasky2013-arsenic-chicken-correspondence]]. Geographic variation in chicken metal burdens is expected to be moderate for Pb and Cd (driven by regional feed quality and environmental conditions) and to differ materially between US and non-US markets for arsenic given the US-specific history of arsenical veterinary drug use.

## Processing effects

Whole muscle chicken carries very low cadmium and lead; cooking (roasting, boiling, grilling) does not substantially increase or decrease the metal content of the muscle tissue itself. Boiling chicken in water causes some leaching of water-soluble metal species into the broth; the broth therefore concentrates metals from bone surfaces (which can carry lead from skeletal sequestration) as well as from the muscle. Bone broth and chicken stock should be treated as potentially carrying higher lead than muscle meat alone. Skin, which may carry higher surface contamination from environmental sources, is typically consumed alongside muscle in many preparations. Processed chicken products (nuggets, patties, deli meats) that include mechanically separated chicken or added ingredients introduce additional metal pathways from non-muscle tissues and additives; these products are not characterised separately in the current corpus.

## Ingredient-derivative risk

Chicken liver and kidney accumulate cadmium and lead at substantially higher concentrations than muscle; this page covers muscle meat only. Chicken bone broth, as noted above, may carry elevated lead leached from the skeletal calcium matrix; the bone-lead pathway is a distinct concern from muscle-meat lead. Chicken powder and chicken flavouring concentrates used in soups, ramen, and seasoning blends derive from a combination of muscle, bone, and skin extraction; their metal profiles are not individually characterised in the current corpus. Chicken fat (schmaltz) carries metals primarily from dietary intake in the adipose tissue; this pathway is expected to be low but is not quantified.

## Mitigation options

### Sourcing levers

Selecting chicken from suppliers whose feed formulations have been verified for cadmium and lead content reduces muscle-meat metal burden. In the US context, confirming that suppliers have discontinued all arsenical veterinary drug use is relevant; given the FDA ban enacted in 2015, compliance with US-licensed product restrictions is expected but confirmatory documentation may be requested from importers sourcing from markets where arsenical drugs remain licensed. EU-certified chicken is subject to regulatory maxima for Pb and Cd in muscle meat.

### Agronomic levers

Feed composition is the primary agronomic lever: low-cadmium grain and soy feeds reduce dietary cadmium intake by the bird and therefore muscle cadmium. Water quality at the production site influences metal uptake through drinking water. Environmental contamination of land (proximity to former industrial sites) can elevate soil ingestion pathways for birds raised in outdoor systems.

_No quantified data on cultivar or breed selection effects on muscle metal content in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Removing skin before consumption eliminates one surface-contamination pathway. Cooking broth separately and discarding rather than consuming reduces bone-lead exposure in preparations that include bone-in chicken. For processed chicken products, minimising inclusion of mechanically separated chicken or by-product tissues reduces the contribution of organ-associated metals.

### Formulation levers

For composite products incorporating chicken (soups, ready meals), reducing the fraction of the final product derived from high-risk organ or bone-adjacent tissues and increasing the proportion of clean white-muscle meat is the most relevant formulation lever.

### Testing and QC levers

For chicken-containing prepared foods, particularly those marketed to children or including chicken liver as an ingredient, ICP-MS testing for Cd, Pb, and iAs is appropriate. For plain chicken muscle destined for retail, periodic surveillance testing is sufficient given the low baseline concentrations; routine lot-level testing is most warranted for US-origin broiler products tested for arsenic species where residual historical contamination may be relevant.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the associated contaminants regulation ([[regulations/eu2023-contaminants-maximum-levels]]) set a lead maximum of 0.10 mg/kg and a cadmium maximum of 0.050 mg/kg for poultry muscle meat. These limits apply to chicken as placed on the market. No specific US FDA action level for Pb or Cd applies to chicken muscle meat; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories rather than raw poultry. For inorganic arsenic in chicken, FDA has not established a specific action level for poultry muscle; the monitoring and regulatory response to arsenical veterinary drug residues is addressed through the veterinary drug residue program rather than a food contaminant limit. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides international cadmium limits for meat; the applicable limit for poultry muscle is 0.050 mg/kg.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/altalib2025-frozen-meat-libya\|Altalib et al. 2025]]. *Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market*, Mediterranean Journal of Medical Research | 2025 | Peer-reviewed | Pb, Cd, and Cr in imported frozen chicken muscle from the Tripoli market |
| 2 | [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|Morshed et al. 2024]]. *Heavy Metals Accumulation in Different Organs of Poultry and Hypothetical Risk Analysis: Evidence from Experimental Feeding with Assorted Metal Feed*, Research Square (preprint) | 2024 | Peer-reviewed | Pb, Cd, and Cr organ-distribution data in broiler chicken muscle, bone, liver, kidney, and lung from a controlled-feeding experiment |
| 3 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | tAs, tHg, Pb, Cd, Ni, Al, Cr, and U in 39 chicken baby purees from Spanish retail by ICP-MS; multi-metal occurrence for processed chicken complementary foods |
| 4 | [[sources/hossain2023-bangladesh-chicken-metals\|Hossain et al. 2023]]. *Human health risk assessment of edible body parts of chicken through heavy metals and trace elements quantitative analysis*, PLoS ONE | 2023 | Peer-reviewed | BD Pb, Cd, Cr occurrence in 108 samples from 18 broiler chickens (6 body parts × 3 chickens × 6 Dhaka North City Corporation... (n=108) |
| 5 | [[sources/kamaly2023-egypt-poultry-metals\|Kamaly et al. 2023]]. *Health risk assessment of metals in chicken meat and liver in Egypt*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | Al, Cd, Pb, Ni, and Cr in 360 Egyptian broiler chicken chest, thigh, and liver samples by ICP-MS, with Pb exceeding FAO/WHO limits in 94% of samples |
| 6 | [[sources/lasky2013-arsenic-chicken-correspondence\|Lasky et al. 2013]]. *Arsenic Levels in Chicken (correspondence: Lasky letter and Nachman et al. response)*, Environmental Health Perspectives | 2013 | Peer-reviewed | Commentary on roxarsone/Nitarsone veterinary drug withdrawal and residual tAs/iAs in US broiler chicken muscle; arsenic-in-poultry supply-chain context |
| 7 | [[sources/mahmud2011-crvi-chicken-pakistan\|Mahmud et al. 2011]]. *Estimation of Chromium (VI) in various body parts of Local Chicken*, Journal of the Chemical Society of Pakistan | 2011 | Peer-reviewed | Speciated Cr-VI (not total Cr) in Pakistani local chicken muscle and bone, evidencing leather-tanning waste in feed as a supply-chain contamination pathway |
<!-- END: hmi-source-legend -->

