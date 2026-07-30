---
title: "Tomato"
type: ingredient
commodity: tomato
label: "Tomato"
aliases: [Tomato, raw, tomato, tomato-products]
category: vegetable-fruit
tds_food:
  number: 117
  description: "Tomato, raw"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 80]
    p95_ppb: 240
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-06-11
  Cd:
    status: populated
    typical_ppb: [0.6, 6.7]
    p95_ppb: 7.2
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 35]
    p95_ppb: 389
    confidence: medium
    n_studies: 5
    basis: raw-tomato-fruit-wet-weight
    speciation_note: total-As-only; no inorganic-As speciation in corpus
    last_reviewed: 2026-06-23
  tHg:
    status: populated
    typical_ppb: [0, 4]
    p95_ppb: 14
    confidence: medium
    n_studies: 4
    basis: raw-tomato-fruit-wet-weight
    last_reviewed: 2026-06-23
  Ni:
    status: populated
    typical_ppb: [16, 230]
    p95_ppb: 250
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [32, 410]
    p95_ppb: 410
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
  Sn:
    status: populated
    typical_ppb: [50, 400]
    p95_ppb: 600
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-23
sources: 43
---

# Tomato

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 6/10 HMTc analytes, total n=35 | labeled data-gaps: iAs, Al |
| D2 Regional coverage | OK | 23 jurisdictions, top EU 12% | — |
| D3 Anthropogenic evidence | GAP | 4 soil + 1 irrigation-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 4 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE, tHg POOLABLE, Ni THIN, Cr THIN, Sn POOLABLE | Ni: THIN; Cr: THIN |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 2/10 populated cells declare a basis token | 8 populated cell(s) lack a basis token: Pb, Cd, iAs, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 55 claims checked, 55 supported; 16 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming tomato: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, Sn; pairing 0 paired, 7 single, 0 unpaired | Ni: THIN; Cr: THIN; basis: 8 populated cell(s) lack a basis token: Pb, Cd, iAs, Ni, Al, Cr, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 117, "Tomato, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Tomato is a botanical fruit grown close to the soil surface, and its metal burden is determined primarily by the chemical composition of the growing medium. Lead and cadmium enter tomato tissue through root uptake from contaminated soils; both metals are taken up passively along with nutrients, with Cd uptake facilitated by the same membrane transporters that move zinc and calcium into root cells. Tomatoes are generally considered a low-to-moderate accumulator for both Pb and Cd relative to leafy vegetables or root crops, because the fruit forms a physical separation from the root system and metals must be transported through multiple plant compartments to reach the edible portion. However, tomatoes are a dietary staple consumed in large volumes by diverse populations, meaning that even low per-gram concentrations contribute meaningfully to aggregate dietary exposure across the population. Soil organic matter, pH, and proximity to industrial or road-traffic Pb sources are the primary drivers of field-level variance.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 0–80 | medium | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|1]], [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|2]], [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|3]] |
| Cd | n=9 | 0.6–6.7 | medium | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|1]], [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 0–35 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/muniz2018-tomato-sauce-packaging-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=4 | 0–4 | medium | [[sources/li2017-mercury-vegetables-grains-coal-power-china\|1]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|2]], [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|3]] |
| Ni | n=4 | 16–230 | low | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|1]], [[sources/fatai2024-african-spinach-tomato-nigeria\|2]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|3]] |
| Al | data gap | — | — | — |
| Cr | n=4 | 32–410 | low | — |
| Sn | n=3 | 50–400 | medium | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/kangre2024-canned-tomato-pb-sn-ghana\|2]], [[sources/muniz2018-tomato-sauce-packaging-metals\|3]] |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on the native basis of this page, fresh (raw) tomato fruit. Most of the primary occurrence literature reports dry-weight produce concentrations; those values run several-fold higher than the fresh-weight figures because the fruit is roughly 94 percent water, so dry-weight anchors are read as upper-bounding corroboration rather than as the headline distribution. Chromium and nickel are reported as total elemental concentrations throughout the contributing corpus; no hexavalent-chromium measurement exists for tomato, so the chromium cell is total chromium only and no Cr-VI value is inferred from it.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead, nickel, chromium, and uranium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study composites for "Tomato, raw," in which every one of the 27 samples fell below the reporting limit (lead 4 µg/kg, nickel 40 µg/kg, chromium 50 µg/kg, uranium 1 µg/kg) and the reported zeros were pooled as literal zeros. The resynthesis replaces the literal zeros with the detected fresh-weight distributions from the broader literature, in which lead, nickel, and total chromium are all low but non-zero, and records the lower bound of each cell as a left-censored zero rather than as a measured zero. The applicable FDA reporting limit (4 µg/kg for lead) is stated here in prose rather than carried in the machine-readable cell, where the censored lower bound is encoded as the numeric value 0.

**Lead** in tomato is low in clean retail production but non-zero. The central distribution rests on fresh-weight retail surveys: Iranian Hamadan-market tomato at a mean of 7 µg/kg fresh weight ([[sources/heshmati2020-iran-vegetables-cereals-pb-cd|Heshmati et al. 2020]], n=50 composites), Polish retail fresh tomato at a mean of 16 µg/kg and a fresh-tomato maximum of 52 µg/kg ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]]), and a Polish multi-variety survey averaging 21 µg/kg fresh weight across 25 fresh and processed samples ([[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland|Grochowska-Niedworok et al. 2020]]). The upper tail is set by the Tehran supermarket survey, which reports fresh tomato at 79 µg/kg (summer) and 241 µg/kg (autumn) fresh weight ([[sources/alimohammadi2018-tehran-supermarket-vegetables|Alimohammadi et al. 2018]]), corroborated by Nigerian field tomato at 167 µg/kg ([[sources/fatai2024-african-spinach-tomato-nigeria|Fatai et al. 2024]]); the Fatai values were reported after the tomato was dried and ground, and the source does not state whether its mg/kg figures are on a fresh-weight or dry-weight basis, so this corroboration is read with that basis ambiguity in mind. The 95th-percentile anchor of 240 µg/kg reflects the Alimohammadi autumn value. A single Polish frozen-tomato sample at 537 µg/kg fresh weight ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]], a one-sample frozen outlier) and the documented wastewater-irrigated and industrial-soil stratum (Bangladeshi Bogura-district tomato at 3,120 to 21,690 µg/kg dry weight, [[sources/samma2024-bangladesh-vegetable-metals|Samma et al. 2024]]; Quito market tomato at 460 to 650 µg/kg dry weight, [[sources/vela2023-quito-vegetables-cd-pb|Vela et al. 2023]]; wastewater-irrigated Cairo tomato, [[sources/ahmed2023-trace-metals-tomato-wastewater|Ahmed et al. 2023]]) are held out of the central estimate and reported separately below as a contaminated-production stratum.

**Nickel** in tomato is reported as total nickel and rests on a thin fresh-weight pool. The Tehran supermarket survey reports tomato Ni at 161 µg/kg (summer) and 232 µg/kg (autumn) fresh weight ([[sources/alimohammadi2018-tehran-supermarket-vegetables|Alimohammadi et al. 2018]]), Nigerian field tomato at 133 µg/kg ([[sources/fatai2024-african-spinach-tomato-nigeria|Fatai et al. 2024]]), and a Chinese-market all-vegetable category aggregate (n=114; leafy greens, edible mushrooms, solanaceous fruits, tubers, and kale combined) at a mean of 16 µg/kg and a maximum of 86 µg/kg fresh weight, used here as a broad cross-vegetable proxy rather than a tomato-specific value ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]). The typical range spans this low Chinese-market cross-vegetable central tendency to the Tehran autumn central value; the 95th-percentile anchor of 250 µg/kg sits just above the Alimohammadi autumn figure. Egyptian tomato grown in heavily contaminated, non-remediated soil reached 1,000 µg/kg ([[sources/salem2024-tomato-remediated-soil-egypt|Salem et al. 2024]], untreated control) and is reported separately as a contaminated-soil stratum rather than folded into the central estimate. Confidence is low given the four-source pool and the wide geographic spread.

**Chromium** is reported as total chromium at low confidence; no tomato hexavalent-chromium measurement exists in the corpus. The Tehran supermarket survey reports tomato total Cr at 234 µg/kg (summer) and 412 µg/kg (autumn) fresh weight ([[sources/alimohammadi2018-tehran-supermarket-vegetables|Alimohammadi et al. 2018]]), the Chinese-market all-vegetable category aggregate (n=114; leafy greens, edible mushrooms, solanaceous fruits, tubers, and kale combined) at a mean of 32 µg/kg and a maximum of 278 µg/kg fresh weight, used here as a broad cross-vegetable proxy rather than a tomato-specific value ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]), and Nigerian field tomato at 99 µg/kg ([[sources/fatai2024-african-spinach-tomato-nigeria|Fatai et al. 2024]]). The typical range runs from the Chinese-market cross-vegetable central tendency to the Tehran autumn value, with the 95th-percentile anchor set at 410 µg/kg. Bangladeshi industrial-district tomato reached 5,440 µg/kg dry weight ([[sources/samma2024-bangladesh-vegetable-metals|Samma et al. 2024]]) and is held out as a contaminated-soil stratum.

**Total arsenic** in tomato is reported as total arsenic throughout the corpus; no inorganic-arsenic speciation exists for this commodity, so the cell is total arsenic only and no iAs fraction is inferred. The distribution is strongly left-censored at the clean end and reconciled with the resynthesis on 2026-06-23. The FDA Total Diet Study reported all 27 "Tomato, raw" composites below its 3 µg/kg total-arsenic reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), and a Spanish greenhouse trial found arsenic below the limit of quantification in tomato fruit from both biofertilizer-treated and control plots ([[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements|Rodríguez-Rodríguez et al. 2026]], wet weight). Against that below-limit cluster, a Romanian ICP-MS survey reported genuine total-arsenic detects in ordinary market and amateur-farm tomato at 374 to 389 µg/kg fresh weight for standard tomato and 255 to 334 µg/kg fresh weight for cherry varieties ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]]); these are not mining or wastewater samples but routine produce, and they set the upper tail. Brazilian retail tomato sauce sat between the two, at 29 to 35 µg/kg total arsenic ([[sources/muniz2018-tomato-sauce-packaging-metals|Muniz et al. 2018]]), and a Chinese-market all-vegetable category aggregate (n=114, used as a broad cross-vegetable proxy rather than a tomato-specific value) averaged 6 µg/kg with a maximum of 107 µg/kg fresh weight ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]). The typical range is recorded as a left-censored zero lower bound through an upper-typical of 35 µg/kg anchored on the sauce and cross-vegetable central values, with the 95th-percentile anchor of 389 µg/kg set by the Bora et al. market-tomato detect. Confidence is medium across the five-source pool, tempered by the wide divergence between the below-limit North American and Spanish data and the Romanian detects.

**Total mercury** in tomato is low and predominantly below analytical limits in clean production. The FDA Total Diet Study reported all 27 "Tomato, raw" composites below its 1 µg/kg mercury reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), and canned Iranian tomato paste returned mercury below detection at a 0.5 µg/kg detection limit ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-Gilani et al. 2025]], wet weight). Where mercury was detected, a Chinese study of farmland remote from coal-fired power plants measured control tomato fruit at 0.73 µg/kg fresh weight ([[sources/li2017-mercury-vegetables-grains-coal-power-china|Li et al. 2017]]), and the Chinese-market all-vegetable category aggregate (used as a broad cross-vegetable proxy) averaged 4 µg/kg with a maximum of 14 µg/kg fresh weight ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]). The typical range is recorded as a left-censored zero lower bound through an upper-typical of 4 µg/kg, with the 95th-percentile anchor of 14 µg/kg set by the cross-vegetable maximum. The same Li et al. study measured tomato fruit at 9.79 to 76.33 µg/kg fresh weight at sites within 10 km of two coal-fired power plants, where atmospheric mercury deposition elevated soil and crop concentrations; those values are held out of the central estimate as an atmospheric-deposition stratum and are not folded into the typical range or the tail. Confidence is medium across the four-source pool, which converges on sub-detect to low-single-digit concentrations for clean tomato.

**Uranium** is recorded as a reviewed data gap. The FDA Total Diet Study reported all 27 tomato samples below its 1 µg/kg uranium reporting limit, and no routed non-FDA source in the corpus reports an extractable quantitative uranium value for tomato fruit. Consistent with the uranium treatment on [[ingredients/rice]], no distribution is published; the cell is left as a gap rather than recorded as a measured zero.

### Contaminated-production stratum (not pooled into the central estimates)

Several sources document tomato grown under wastewater irrigation or on industrially contaminated soil at concentrations one to two orders of magnitude above the clean-retail distributions above. These are stratified out so they do not set the central estimate, but they bound the supply-chain risk for tomato sourced from such regions. Bangladeshi Bogura-district tomato reached 3.12 to 21.69 mg/kg dry weight lead and up to 5.44 mg/kg dry weight total chromium ([[sources/samma2024-bangladesh-vegetable-metals|Samma et al. 2024]]); Ecuadorian Quito-market tomato reached 0.46 to 0.65 mg/kg dry weight lead ([[sources/vela2023-quito-vegetables-cd-pb|Vela et al. 2023]]); wastewater-irrigated Cairo tomato carried elevated lead, chromium, and nickel ([[sources/ahmed2023-trace-metals-tomato-wastewater|Ahmed et al. 2023]]); and Egyptian tomato grown on contaminated soil reached 1.00 mg/kg nickel before remediation ([[sources/salem2024-tomato-remediated-soil-egypt|Salem et al. 2024]]). Irrigation-water source and growing-region soil history are the sourcing levers that distinguish this stratum from clean-retail production.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Tomato, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0.6 | 3.3 | 6.68 | 7.22 | 7.6 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Processing effects

Fresh tomato transitions into several processed forms that concentrate or dilute metals in different proportions. Dicing, crushing, and cooking in water do not significantly change metal concentrations on a wet-weight basis, but evaporation during sauce or paste production concentrates all solutes proportionally. Tomato paste, which undergoes substantial water removal, will carry higher ppb values for any metal present in the raw fruit simply because the same mass of metal is distributed across less water. Canning introduces a separate concern: the heat sterilisation step required for shelf-stable canned tomatoes in tinplate cans can drive tin (Sn) migration from the can lining into the acidic tomato matrix; this pathway is documented for canned tomato products more broadly and is discussed on the [[ingredients/tomato-soup]] page. Lacquer-lined or BPA-free can coatings substantially reduce Sn migration.

## Ingredient-derivative risk

The primary derivatives of tomato in food manufacturing are tomato paste (concentrated), tomato puree, crushed tomatoes, tomato sauce, ketchup, tomato juice, sun-dried tomatoes, and tomato powder. Because metals do not volatilize during cooking, any derivative that reduces water content relative to fresh tomato will show proportionally elevated concentrations on a wet-weight basis. Sun-dried tomatoes and tomato powder, which remove nearly all free water, would be expected to carry the highest per-gram concentrations of any metal present in the raw fruit. Tomato soup and tomato-based sauces occupy an intermediate position. Ketchup, which is typically made from concentrated paste diluted with vinegar and other ingredients, presents a blended metal profile. The [[ingredients/tomato-soup]] page carries occurrence data specific to the canned condensed soup form.

## Mitigation options

### Sourcing levers

Tomatoes grown in soils with low background Pb and Cd concentrations, verified by supplier soil testing, represent the primary sourcing lever. Industrial or peri-urban cultivation sites near smelters, highways, or legacy industrial land carry higher Pb risk. Specification of growing-region origin and soil metal testing at supplier qualification is the upstream control.

### Agronomic levers

Soil pH management (maintaining pH above 6.5) reduces Cd and Pb bioavailability through adsorption to soil particles. Liming contaminated soils is an established agronomic practice for reducing Cd uptake across vegetable crops. Organic matter additions similarly reduce metal bioavailability. These interventions are most relevant where supplier soils are moderately elevated rather than severely contaminated.

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Because tomato is a high-volume dietary staple, lot-level testing of raw tomato paste or puree used in high-volume products is warranted for Pb and Cd. Third-party ICP-MS testing of finished paste concentrates provides the most actionable signal for downstream product manufacturers.

### Packaging and storage levers

For canned tomato products, specifying lacquer-lined or polymer-coated cans eliminates the Sn migration pathway from tinplate. This is addressed in more detail on [[ingredients/tomato-soup]].

## Regulatory limits that apply

The European Union sets maximum levels for Pb and Cd in fresh tomatoes under [[regulations/eu2023-contaminants-maximum-levels]]: Pb at 0.10 mg/kg (100 ppb) and Cd at 0.050 mg/kg (50 ppb) on a fresh-weight basis. These limits apply to tomato as a fresh fruit or vegetable placed on the EU market. Processed tomato products such as paste or sauce are governed by separate matrix-specific provisions in EU contaminant regulations. No FDA action level specific to raw tomato is currently in force; [[regulations/fda-closer-to-zero]] guidance addresses Pb in processed baby foods rather than raw commodities. [[regulations/codex-cadmium-mls]] provides the international Codex Cd maximum for vegetables.

<!-- BEGIN: hmi-page-references -->
## References

The 16 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Ali Heshmati, Fereshteh Mehri, Javad Karami-Momtaz, and Amin Mousavi Khaneghah (2020). *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*. Journal of Food Protection 83(1):101-107. [https://doi.org/10.4315/0362-028X.JFP-19-312](https://doi.org/10.4315/0362-028X.JFP-19-312). Peer-reviewed, B-tier. [[sources/heshmati2020-iran-vegetables-cereals-pb-cd|Source record]]
3. Rusin M, Domagalska J, Rogala D, Razzaghi M, and Szymala I (2021). *Concentration of cadmium and lead in vegetables and fruits*. Scientific Reports. [https://doi.org/10.1038/s41598-021-91554-z](https://doi.org/10.1038/s41598-021-91554-z). Peer-reviewed, A-tier. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Source record]]
4. Grochowska-Niedworok E, Nieć J, and Baranowska R (2020). *Assessment of cadmium and lead content in tomatoes and tomato products*. Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene). [https://doi.org/10.32394/rpzh.2020.0126](https://doi.org/10.32394/rpzh.2020.0126). Peer-reviewed, A-tier. [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland|Source record]]
5. Alimohammadi M, Younesian M, Madihi-Bidgoli S, Nabizadeh Nodehi R, Jahed Khaniki GR, Hadi M, et al. (2018). *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*. Toxin Reviews. [https://doi.org/10.1080/15569543.2018.1522644](https://doi.org/10.1080/15569543.2018.1522644). Peer-reviewed, B-tier. [[sources/alimohammadi2018-tehran-supermarket-vegetables|Source record]]
6. Fatai MI, Ibrahim M, Ibrahim MA, Ndriza BJ, Matthew EO, Saheed MB, et al. (2024). *Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria*. Journal of Chemistry and Nutritional Biochemistry. [https://doi.org/10.48185/jcnb.v5i2.1175](https://doi.org/10.48185/jcnb.v5i2.1175). Peer-reviewed, A-tier. [[sources/fatai2024-african-spinach-tomato-nigeria|Source record]]
7. Samma S, Islam Khan MS, Islam Chowdhury MT, Islam MA, Fick J, and Kaium A (2024). *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*. Environmental Health Insights. [https://doi.org/10.1177/11786302241282601](https://doi.org/10.1177/11786302241282601). Peer-reviewed, A-tier. [[sources/samma2024-bangladesh-vegetable-metals|Source record]]
8. Vela Doris, Simbana-Farinango Karina, Navarrete Hugo, and Romero-Estevez David (2023). *Determination of cadmium and lead in vegetables marketed in Quito, Ecuador*. Revista Internacional de Contaminacion Ambiental. [https://doi.org/10.20937/rica.54656](https://doi.org/10.20937/rica.54656). Peer-reviewed, B-tier. [[sources/vela2023-quito-vegetables-cd-pb|Source record]]
9. Ahmed A, Hassan I, Abd-Elrahman S, and ElSayed M (2023). *Trace metal concentrations in tomato fruits irrigated with industrial wastewater in Cairo and health risk assessment*. Environmental Science and Pollution Research. [https://doi.org/10.1007/s11356-023-25157-8](https://doi.org/10.1007/s11356-023-25157-8). Peer-reviewed, A-tier. [[sources/ahmed2023-trace-metals-tomato-wastewater|Source record]]
10. Wu Z (2024). *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*. International Journal of Natural Resources and Environmental Studies, 2(1): 180-200. [https://doi.org/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/ijnres.v2n1.21). Peer-reviewed, B-tier. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Source record]]
11. Salem SH, Saber M, Gadow S, Kabary H, and Zaghloul A (2024). *Influence of the use of remediated soil and agricultural drainage water on the safety of tomato fruits*. Environmental Science and Pollution Research. [https://doi.org/10.1007/s11356-024-33187-z](https://doi.org/10.1007/s11356-024-33187-z). Peer-reviewed, A-tier. [[sources/salem2024-tomato-remediated-soil-egypt|Source record]]
12. Rodríguez-Rodríguez R, Sánchez-García A, Ruiz-Lozano JM, and Aroca R (2026). *Trace Element Content in Tomato Fruit Grown with Sargassum-Based Biofertilizer*. Agronomy. [https://doi.org/10.3390/agronomy16050976](https://doi.org/10.3390/agronomy16050976). Peer-reviewed, A-tier. [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements|Source record]]
13. Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. (2022). *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*. Horticulturae. [https://doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034). Peer-reviewed, A-tier. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Source record]]
14. Muniz LP, Santos LMG, Couto KLM, and Jacob SC (2018). *Evaluation of metals in tomato sauces stored in different types of packaging*. Food Science and Technology. [https://doi.org/10.1590/fst.27916](https://doi.org/10.1590/fst.27916). Peer-reviewed, A-tier. [[sources/muniz2018-tomato-sauce-packaging-metals|Source record]]
15. Shavali-gilani P, Abedini A, Irshad N, Maleknezhad S, Yazdanfar N, and Sadighara P (2025). *Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers*. Scientific Reports. [https://doi.org/10.1038/s41598-025-06896-9](https://doi.org/10.1038/s41598-025-06896-9). Peer-reviewed, A-tier. [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Source record]]
16. Li R, Wu H, Ding J, Fu W, Gan L, and Li Y (2017). *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*. Scientific Reports. [https://doi.org/10.1038/srep46545](https://doi.org/10.1038/srep46545). Peer-reviewed, A-tier. [[sources/li2017-mercury-vegetables-grains-coal-power-china|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|Rodríguez-Rodríguez et al. 2026]]. *Trace Element Content in Tomato Fruit Grown with Sargassum-Based Biofertilizer*, Agronomy | 2026 | Peer-reviewed | Measured tAs, Cd, Pb, Ni, and Cr in greenhouse tomatoes grown with Sargassum biofertilizer vs controls (Spain); all five metals below LOQ in tomato fruit from both treatment groups |
| 2 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 3 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 4 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 5 | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cd, tHg, Sn occurrence in 49 samples of canned tomato paste, canned olives, and pickled cucumbers from the 5 most popular brands, purchased... (n=49) |
| 6 | [[sources/fatai2024-african-spinach-tomato-nigeria\|Fatai et al. 2024]]. *Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria*, Journal of Chemistry and Nutritional Biochemistry | 2024 | Peer-reviewed | NG Cu, Ni, Zn, Cd, Cr, Pb occurrence in African spinach and tomato composite samples collected around Ashaka community, Gombe State, Nigeria (n=2) |
| 7 | [[sources/kangre2024-canned-tomato-pb-sn-ghana\|Kangre 2024]]. *Heavy metal migration, exposure, and health risk through canned tomato mix under different marketing display models*, MPhil Thesis, University of Education Winneba, Ghana | 2024 | Thesis | GH Pb, Sn occurrence in 32 canned Tasty Tom tomato mix samples from Effutu Municipality (Winneba), Ghana: 16 from sunlight-exposed shops, 16 from... (n=32) |
| 8 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | ES As, Cd, Pb, Ni, Cr, Cu, Co, Ba, B, Mo, Zn occurrence in Edible vegetables and topsoils from urban gardens in Seville, Cordoba, Huelva, and Riotinto mining area, Andalusia, Spain; 2021–2023 (n=282) |
| 9 | [[sources/salem2024-tomato-remediated-soil-egypt\|Salem et al. 2024]]. *Influence of the use of remediated soil and agricultural drainage water on the safety of tomato fruits*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | EG Cd, Ni, Cu, Zn, Pb occurrence in Tomato fruits (Solanum lycopersicum var. cerasiforme) grown in contaminated soil with different bioremediation treatments; greenhouse and field experiments;... |
| 10 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | BD Pb, Cr, Cu occurrence in Composite vegetable and soil samples from 5 vegetable species across 6 upazilas in Bogura district, Bangladesh (northern industrial... (n=30) |
| 11 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 12 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 13 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | IR Pb, Cd, Cu, Zn occurrence in Eight vegetable types (parsley, spinach, basil, tomatoes, cucumbers, potatoes, onions, beans) from Babol, Mazandaran Province, northern Iran; 4... (n=32) |
| 14 | [[sources/ahmed2023-trace-metals-tomato-wastewater\|Ahmed et al. 2023]]. *Trace metal concentrations in tomato fruits irrigated with industrial wastewater in Cairo and health risk assessment*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | EG Pb, Cd, Cr, Ni, Cu, Fe, Mn, Zn, Co occurrence in Tomato fruits from wastewater-irrigated farms in Cairo, Egypt |
| 15 | [[sources/ammar2023-element-migration-aluminum-cookware\|Ammar et al. 2023]]. *Investigation of Element Migration from Aluminum Cooking Pots Using ICP-MS*, Applied Sciences (MDPI) | 2023 | Peer-reviewed | SA Al, Fe, As, Cd, Pb occurrence in Eight cooked-food test conditions (AC-1 through APP-5) using four aluminum cooking pots — two traditional pots (codes AC,... (n=16) |
| 16 | [[sources/vela2023-quito-vegetables-cd-pb\|Doris et al. 2023]]. *Determination of cadmium and lead in vegetables marketed in Quito, Ecuador*, Revista Internacional de Contaminacion Ambiental | 2023 | Peer-reviewed | EC Cd, Pb occurrence in Tomato, carrot, and lettuce samples marketed in Quito, Ecuador |
| 17 | [[sources/bazie2022-burkina-faso-foodstuffs-metals\|Bazie et al. 2022]]. *Evaluation of metallic trace elements contents in some major raw foodstuffs in Burkina Faso and health risk assessment*, Scientific Reports | 2022 | Peer-reviewed | BF Cd, Pb, Cr, Ni occurrence in rice, maize, peanut, tomato, and dried fish samples in Burkina Faso (n=222) |
| 18 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 19 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in tomato (TDS food item; n varies by analyte) |
| 20 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 21 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | BF tAs occurrence in Greenhouse-cultivated vegetables (7 species × 4 As irrigation concentrations × 6 replicates) at 2iE, Ouagadougou, Burkina Faso (dry... (n=168) |
| 22 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 23 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 24 | [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland\|Grochowska-Niedworok et al. 2020]]. *Assessment of cadmium and lead content in tomatoes and tomato products*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Pb, Cd occurrence in Fresh and processed tomato products purchased in Polish retail and local markets; variety includes conventional, organic, multiple varieties,... (n=25) |
| 25 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 26 | [[sources/uroko2020-ubani-canned-tomato-paste-metals\|Uroko et al. 2020]]. *Quantification of Heavy Metals in Canned Tomato Paste Sold in Ubani-Umuahia, Nigeria*, Journal of Bio-Science | 2020 | Peer-reviewed | NG Pb, Ni, Cu, Co, Fe, Cr, Cd, Mn, Zn occurrence in Ten coded canned tomato-paste products purchased from Ubani-Umuahia market, Nigeria. (n=10) |
| 27 | [[sources/vaishali2020-tomato-ketchup-delhi-ncr-pb-cd\|Vaishali et al. 2020]]. *A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street Vendors of Delhi NCR*, Journal of Advanced Research in Medical Science & Technology | 2020 | Peer-reviewed | IN Pb, Cd occurrence in Tomato ketchup from street vendors in Delhi, Noida, Gurugram, and Faridabad (3 samples per locale) (n=12) |
| 28 | [[sources/dordevic2019-aluminum-foil-culinary-baking-czech\|Dordevic et al. 2019]]. *Aluminum contamination of food during culinary preparation: Case study with aluminum foil and consumers' preferences*, Food Science & Nutrition | 2019 | Peer-reviewed | CZ/EU Al occurrence in Eleven food types (Atlantic salmon fillet, mackerel, duck breasts with and without skin, cheese Hermelín, fresh tomato, fresh... (n=11) |
| 29 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 30 | [[sources/ametepey2018-ghana-vegetables-heavy-metals\|Ametepey et al. 2018]]. *Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana*, International Journal of Food Contamination | 2018 | Peer-reviewed | Measured Cd, Pb, Cr, and Ni in tomato from three markets in Tamale, Ghana (n=75 total samples across 5 vegetables); provides West African occurrence context |
| 31 | [[sources/muniz2018-tomato-sauce-packaging-metals\|Muniz et al. 2018]]. *Evaluation of metals in tomato sauces stored in different types of packaging*, Food Science and Technology | 2018 | Peer-reviewed | BR tAs, Cd, Pb, Cr, Ni, Sb, Sn occurrence in 20 retail tomato sauce samples in 4 packaging types (plastic, metallic/canned, cellulosic, glass), 2 brands, Rio de Janeiro... (n=20) |
| 32 | [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Vegetables (lettuce, amaranth, water spinach, tomato, eggplant, pepper, cucumber, cowpea), grains (rice, maize), and soils sampled from 6... (n=120) |
| 33 | [[sources/li2017-mercury-vegetables-grains-coal-power-china\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Pooled vegetable, grain, and soil samples from six open-field locations within 10 km of two coal-fired power plants... |
| 34 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=ten vegetables and fruits) |
| 35 | [[sources/jaishree2015-effluent-irrigated-crops-metals\|Jaishree et al. 2015]]. *Heavy metal accumulation in vegetables irrigated with industrial effluent*, International Journal of Innovative Research in Science, Engineering and Technology | 2015 | Peer-reviewed | IN Cd, Ni, Pb, Cu, Cr, Mn, Zn occurrence in Vegetables and wheat grown under industrial-effluent irrigation conditions in India |
| 36 | [[sources/mohod2015-spinach-tomato-metals\|Mohod 2015]]. *A review on the concentration of the heavy metals in vegetable samples like spinach and tomato grown near the area of Amba Nalla of Amravati City*, International Journal of Innovative Research in Science, Engineering and Technology | 2015 | Peer-reviewed | IN Pb, Cd, Cu, Zn occurrence in spinach leaf and tomato grown near Amba Nalla, Amravati City, India (n=not reported in abstract) |
| 37 | [[sources/hobbie2014-stainless-steel-ni-cr-leaching\|Hobbie et al. 2014]]. *Stainless Steel Leaches Nickel and Chromium into Foods During Cooking*, Society of Toxicology 2014 Annual Meeting (poster) | 2014 | Conference proceedings | US Ni, Cr occurrence in Laboratory-controlled cooking trials using three NIST stainless-steel reference materials (NIST 121d and 123c, both grade-304 equivalents; NIST 160b,... |
| 38 | [[sources/bassioni2012-aluminum-foil-meat-cooking-uae\|Bassioni et al. 2012]]. *Risk Assessment of Using Aluminum Foil in Food Preparation*, International Journal of Electrochemical Science | 2012 | Peer-reviewed | AE/EG Al occurrence in Six experimental cooking-solution recipes (variants on 40% minced-beef extract + tomato juice + citric acid + NaCl, with... (n=6) |
| 39 | [[sources/buculei2012-tin-iron-migration-canned-food-romania\|Buculei et al. 2012]]. *Study regarding the tin and iron migration from metallic cans into foodstuff during storage*, Journal of Agroalimentary Processes and Technologies, 18(4), 299-303 | 2012 | Peer-reviewed | RO Sn, Fe occurrence in Four canned product types (peas, tomato paste, pork in own juice, pork liver pate) packed in three-piece tinplate... (n=4) |
| 40 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
| 41 | [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|David et al. 2008]]. *The heavy metals analyses in canned tomato paste*, Journal of Agroalimentary Processes and Technologies | 2008 | Peer-reviewed | RO/IT Pb, Cd, Sn, Al, Cr, Fe, Zn, tAs occurrence in Five commercial canned tomato paste and tomato sauce products sampled from the Romanian retail market in 2008: three... (n=5) |
| 42 | [[sources/jecfa-64th-cadmium-tin-2006\|JECFA 2006]]. *Evaluation of certain food contaminants — Sixty-fourth report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 930 (Sixty-fourth meeting of JECFA, Rome, 8-17 February 2005) | 2006 | Government report | international Cd, Sn occurrence in Cadmium: raw or aggregated occurrence data submitted to GEMS/Food by Australia, Canada, Germany, Japan, New Zealand, Norway, USA,... |
| 43 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | 7 sources added; contamination-profile values revised; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d626a623b](https://github.com/paleofoundation/heavymetalindex/commit/d626a623b) | 2026-06-11 | correction | 10 sources added; contamination-profile values revised; 2 sections added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
