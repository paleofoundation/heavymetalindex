---
title: "Tomato"
dek: "A fruit used fresh and in sauces, pastes, juices and dried products. Explore the evidence on soil uptake, measured metals and processing effects."
rail_highlights:
  - label: Key distinction
    text: Raw tomato lead was below FDA reporting limits
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
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
    typical_ppb: [0, 5]
    p95_ppb: 15
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-08-09
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
    typical_ppb: [0, 3]
    p95_ppb: 5
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 40
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 50
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [50, 400]
    p95_ppb: 600
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  U:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::117::uranium","role":"value","food_id":"117","food_name":"Tomato, raw","metal_species":"U","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 41
hero_image: /static/heroes/garden-vegetables-tomato-cucumber-asparagus.webp
hero_image_alt: "Tomato, cucumber, green bell pepper, celery and asparagus illustrating tomato ingredient context."
---

# Tomato

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 117, "Tomato, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Tomato is a botanical fruit grown close to the soil surface, and its metal burden is determined primarily by the chemical composition of the growing medium. Lead and cadmium enter tomato tissue through root uptake from contaminated soils; both metals are taken up passively along with nutrients, with Cd uptake facilitated by the same membrane transporters that move zinc and calcium into root cells. Tomatoes are generally considered a low-to-moderate accumulator for both Pb and Cd relative to leafy vegetables or root crops, because the fruit forms a physical separation from the root system and metals must be transported through multiple plant compartments to reach the edible portion. However, tomatoes are a dietary staple consumed in large volumes by diverse populations, meaning that even low per-gram concentrations contribute meaningfully to aggregate dietary exposure across the population. Soil organic matter, pH, and proximity to industrial or road-traffic Pb sources are the primary drivers of field-level variance.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–5 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|2]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|3]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|4]] |
| Cd | n=9 | 0.6–6.7 | medium | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|1]], [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 0–3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|2]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|3]] |
| tHg | n=3 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|3]] |
| Ni | n=3 | 0–30 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|2]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|3]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 0–30 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|2]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|3]] |
| Sn | n=3 | 50–400 | medium | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/kangre2024-canned-tomato-pb-sn-ghana\|2]], [[sources/muniz2018-tomato-sauce-packaging-metals\|3]] |
| U | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |

## Synthesis basis and censoring treatment

The FDA Total Diet Study reported every flagged analyte below its reporting limit in all 27 raw-tomato composites: lead below 4 ppb, total arsenic below 3 ppb, total mercury below 1 ppb, nickel below 40 ppb, and total chromium below 50 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). These non-detects were coded as zeros and are corrected here to left-censored bounds. Tomato fruit is a low accumulator: a Spanish greenhouse trial found lead, total arsenic, nickel, and total chromium all below the limit of quantification in tomato fruit even under seaweed biofertilizer amendment ([[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements|Rodriguez-Rodriguez et al. 2026]]), the Jiaozuo survey placed solanaceous fruits at the low end of the vegetable distribution ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]), and the New Zealand survey found Solanum lead and mercury below the detection limit ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]).

The synthesized central ranges are lead 0 to 5 ppb, total arsenic 0 to 3 ppb, total mercury 0 to 1 ppb, nickel 0 to 30 ppb, and total chromium 0 to 30 ppb, all fresh weight. Lead carries medium confidence because four datasets agree on a near-zero value; the other analytes stay low because their commercial evidence is largely censored. The Tehran supermarket survey reported markedly higher tomato lead of 79 to 241 ppb, nickel of 161 to 232 ppb, and chromium of 234 to 412 ppb fresh weight ([[sources/alimohammadi2018-tehran-supermarket-vegetables|Alimohammadi et al. 2018]]), and coal-plant-adjacent mercury appears in hotspot surveys; both are treated as elevated right-tail context and are excluded from the central estimates.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This ingredient is listed in the ingredient index and in the FDA Total Diet Study source list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 117: Tomato, raw | tAs | 27 | 0 | ND in all composites | 3 |
| 117: Tomato, raw | Cd | 27 | 24 | 1–7.6 | 1 |
| 117: Tomato, raw | Cr | 27 | 0 | ND in all composites | 50 |
| 117: Tomato, raw | Pb | 27 | 0 | ND in all composites | 4 |
| 117: Tomato, raw | tHg | 27 | 0 | ND in all composites | 1 |
| 117: Tomato, raw | Ni | 27 | 0 | ND in all composites | 40 |
| 117: Tomato, raw | U | 27 | 0 | ND in all composites | 1 |
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

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**U.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements|Trace Element Content in Tomato Fruit Grown with Sargassum-Based Biofertilizer]]<span class="hmi-ref-meta">Rodríguez-Rodríguez R, Sánchez-García A, Ruiz-Lozano JM, and Aroca R · Agronomy · 2026 · [doi.org/10.3390/plants15060901](https://doi.org/10.3390/plants15060901)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment]]<span class="hmi-ref-meta">Wu Z · International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 · 2024 · [doi.org/10.62051/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/10.62051/ijnres.v2n1.21)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/alimohammadi2018-tehran-supermarket-vegetables|Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment]]<span class="hmi-ref-meta">Alimohammadi M, Younesian M, Madihi-Bidgoli S, Nabizadeh Nodehi R, Jahed Khaniki GR, Hadi M, et al. · Toxin Reviews · 2018 · [doi.org/10.1080/15569543.2018.1522644](https://doi.org/10.1080/15569543.2018.1522644)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/joseph2025-gobbiya-dam-vegetable-metals|Assessment of the Level of Heavy Metals in Irrigation Water, Farm Soil, and Vegetables Grown in Gobbiya Dam, Bogoro Local Government Area Bauchi State, Nigeria]]<span class="hmi-ref-meta">John Joseph, Toma Buba, Jalo Enoch, and Ayuba Kaluri · Journal of Energy Technology and Environment 7(4):79–92 · 2025 · [doi.org/10.37933/jete/7.4.2025.2568](https://doi.org/10.37933/jete/7.4.2025.2568)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/chen2024-shanghai-hydroponic-vegetables|Occurrence and Risk Assessment of Pesticides, Phthalates, and Heavy Metal Residues in Vegetables from Hydroponic and Conventional Cultivation]]<span class="hmi-ref-meta">Shanshan Chen, Chunxia Yao, Jiaxin Zhou, Haiyao Ma, Jing Jin, Weiguo Song, et al. · Foods 13, 1151 · 2024 · [doi.org/10.3390/foods13081151](https://doi.org/10.3390/foods13081151)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|Rodríguez-Rodríguez et al. 2026]]. *Trace Element Content in Tomato Fruit Grown with Sargassum-Based Biofertilizer*, Agronomy | 2026 | Peer-reviewed | Measured tAs, Cd, Pb, Ni, and Cr in greenhouse tomatoes grown with Sargassum biofertilizer vs controls (Spain); all five metals below LOQ in tomato fruit from both treatment groups |
| 2 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 3 | [[sources/joseph2025-gobbiya-dam-vegetable-metals\|Joseph et al. 2025]]. *Assessment of the Level of Heavy Metals in Irrigation Water, Farm Soil, and Vegetables Grown in Gobbiya Dam, Bogoro Local Government Area Bauchi State, Nigeria*, Journal of Energy Technology and Environment 7(4):79–92 | 2025 | Peer-reviewed | NG tAs, Fe, Cd, Cu, Cr, Pb, Ni occurrence in Four vegetable species and associated soil/water at Gobbiya Dam, Bauchi State; n=3 replicate measurements, independent field sample count... |
| 4 | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cd, tHg, Sn occurrence in 49 samples of canned tomato paste, canned olives, and pickled cucumbers from the 5 most popular brands, purchased... (n=49) |
| 5 | [[sources/chen2024-shanghai-hydroponic-vegetables\|Chen et al. 2024]]. *Occurrence and Risk Assessment of Pesticides, Phthalates, and Heavy Metal Residues in Vegetables from Hydroponic and Conventional Cultivation*, Foods 13, 1151 | 2024 | Peer-reviewed | CN Pb, Cd occurrence in Shanghai farms, 2022–2023: hydroponic/conventional lettuce 32/26, celery 15/20, tomato 20/22, cucumber 19/23; total 86/91. (n=177) |
| 6 | [[sources/fatai2024-african-spinach-tomato-nigeria\|Fatai et al. 2024]]. *Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria*, Journal of Chemistry and Nutritional Biochemistry | 2024 | Peer-reviewed | NG Cu, Ni, Zn, Cd, Cr, Pb occurrence in African spinach and tomato composite samples collected around Ashaka community, Gombe State, Nigeria (n=2) |
| 7 | [[sources/kangre2024-canned-tomato-pb-sn-ghana\|Kangre 2024]]. *Heavy metal migration, exposure, and health risk through canned tomato mix under different marketing display models*, MPhil Thesis, University of Education Winneba, Ghana | 2024 | Thesis | GH Pb, Sn occurrence in 32 canned Tasty Tom tomato mix samples from Effutu Municipality (Winneba), Ghana: 16 from sunlight-exposed shops, 16 from... (n=32) |
| 8 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | ES As, Cd, Pb, Ni, Cr, Cu, Co, Ba, B, Mo, Zn occurrence in Edible vegetables and topsoils from urban gardens in Seville, Cordoba, Huelva, and Riotinto mining area, Andalusia, Spain; 2021–2023 (n=282) |
| 9 | [[sources/salem2024-tomato-remediated-soil-egypt\|Salem et al. 2024]]. *Influence of the use of remediated soil and agricultural drainage water on the safety of tomato fruits*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | EG Cd, Ni, Cu, Zn, Pb occurrence in Tomato fruits (Solanum lycopersicum var. cerasiforme) grown in contaminated soil with different bioremediation treatments; greenhouse and field experiments;... |
| 10 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | BD Pb, Cr, Cu occurrence in Composite vegetable and soil samples from 5 vegetable species across 6 upazilas in Bogura district, Bangladesh (northern industrial... (n=30) |
| 11 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 12 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | IR Pb, Cd, Cu, Zn occurrence in Eight vegetable types (parsley, spinach, basil, tomatoes, cucumbers, potatoes, onions, beans) from Babol, Mazandaran Province, northern Iran; 4... (n=32) |
| 13 | [[sources/ahmed2023-trace-metals-tomato-wastewater\|Ahmed et al. 2023]]. *Trace metal concentrations in tomato fruits irrigated with industrial wastewater in Cairo and health risk assessment*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | EG Pb, Cd, Cr, Ni, Cu, Fe, Mn, Zn, Co occurrence in Tomato fruits from wastewater-irrigated farms in Cairo, Egypt |
| 14 | [[sources/ammar2023-element-migration-aluminum-cookware\|Ammar et al. 2023]]. *Investigation of Element Migration from Aluminum Cooking Pots Using ICP-MS*, Applied Sciences (MDPI) | 2023 | Peer-reviewed | SA Al, Fe, As, Cd, Pb occurrence in Eight cooked-food test conditions (AC-1 through APP-5) using four aluminum cooking pots — two traditional pots (codes AC,... (n=16) |
| 15 | [[sources/vela2023-quito-vegetables-cd-pb\|Doris et al. 2023]]. *Determination of cadmium and lead in vegetables marketed in Quito, Ecuador*, Revista Internacional de Contaminacion Ambiental | 2023 | Peer-reviewed | EC Cd, Pb occurrence in Tomato, carrot, and lettuce samples marketed in Quito, Ecuador |
| 16 | [[sources/bazie2022-burkina-faso-foodstuffs-metals\|Bazie et al. 2022]]. *Evaluation of metallic trace elements contents in some major raw foodstuffs in Burkina Faso and health risk assessment*, Scientific Reports | 2022 | Peer-reviewed | BF Cd, Pb, Cr, Ni occurrence in rice, maize, peanut, tomato, and dried fish samples in Burkina Faso (n=222) |
| 17 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 18 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in tomato (TDS food item; n varies by analyte) |
| 19 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 20 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | BF tAs occurrence in Greenhouse-cultivated vegetables (7 species × 4 As irrigation concentrations × 6 replicates) at 2iE, Ouagadougou, Burkina Faso (dry... (n=168) |
| 21 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 22 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 23 | [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland\|Grochowska-Niedworok et al. 2020]]. *Assessment of cadmium and lead content in tomatoes and tomato products*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Pb, Cd occurrence in Fresh and processed tomato products purchased in Polish retail and local markets; variety includes conventional, organic, multiple varieties,... (n=25) |
| 24 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 25 | [[sources/uroko2020-ubani-canned-tomato-paste-metals\|Uroko et al. 2020]]. *Quantification of Heavy Metals in Canned Tomato Paste Sold in Ubani-Umuahia, Nigeria*, Journal of Bio-Science | 2020 | Peer-reviewed | NG Pb, Ni, Cu, Co, Fe, Cr, Cd, Mn, Zn occurrence in Ten coded canned tomato-paste products purchased from Ubani-Umuahia market, Nigeria. (n=10) |
| 26 | [[sources/vaishali2020-tomato-ketchup-delhi-ncr-pb-cd\|Vaishali et al. 2020]]. *A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street Vendors of Delhi NCR*, Journal of Advanced Research in Medical Science & Technology | 2020 | Peer-reviewed | IN Pb, Cd occurrence in Tomato ketchup from street vendors in Delhi, Noida, Gurugram, and Faridabad (3 samples per locale) (n=12) |
| 27 | [[sources/dordevic2019-aluminum-foil-culinary-baking-czech\|Dordevic et al. 2019]]. *Aluminum contamination of food during culinary preparation: Case study with aluminum foil and consumers' preferences*, Food Science & Nutrition | 2019 | Peer-reviewed | CZ/EU Al occurrence in Eleven food types (Atlantic salmon fillet, mackerel, duck breasts with and without skin, cheese Hermelín, fresh tomato, fresh... (n=11) |
| 28 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 29 | [[sources/ametepey2018-ghana-vegetables-heavy-metals\|Ametepey et al. 2018]]. *Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana*, International Journal of Food Contamination | 2018 | Peer-reviewed | Measured Cd, Pb, Cr, and Ni in tomato from three markets in Tamale, Ghana (n=75 total samples across 5 vegetables); provides West African occurrence context |
| 30 | [[sources/muniz2018-tomato-sauce-packaging-metals\|Muniz et al. 2018]]. *Evaluation of metals in tomato sauces stored in different types of packaging*, Food Science and Technology | 2018 | Peer-reviewed | BR tAs, Cd, Pb, Cr, Ni, Sb, Sn occurrence in 20 retail tomato sauce samples in 4 packaging types (plastic, metallic/canned, cellulosic, glass), 2 brands, Rio de Janeiro... (n=20) |
| 31 | [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Pooled vegetable, grain, and soil samples from six open-field locations within 10 km of two coal-fired power plants... |
| 32 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=ten vegetables and fruits) |
| 33 | [[sources/jaishree2015-effluent-irrigated-crops-metals\|Jaishree et al. 2015]]. *Heavy metal accumulation in vegetables irrigated with industrial effluent*, International Journal of Innovative Research in Science, Engineering and Technology | 2015 | Peer-reviewed | IN Cd, Ni, Pb, Cu, Cr, Mn, Zn occurrence in Vegetables and wheat grown under industrial-effluent irrigation conditions in India |
| 34 | [[sources/mohod2015-spinach-tomato-metals\|Mohod 2015]]. *A review on the concentration of the heavy metals in vegetable samples like spinach and tomato grown near the area of Amba Nalla of Amravati City*, International Journal of Innovative Research in Science, Engineering and Technology | 2015 | Peer-reviewed | IN Pb, Cd, Cu, Zn occurrence in spinach leaf and tomato grown near Amba Nalla, Amravati City, India (n=not reported in abstract) |
| 35 | [[sources/hobbie2014-stainless-steel-ni-cr-leaching\|Hobbie et al. 2014]]. *Stainless Steel Leaches Nickel and Chromium into Foods During Cooking*, Society of Toxicology 2014 Annual Meeting (poster) | 2014 | Conference proceedings | US Ni, Cr occurrence in Laboratory-controlled cooking trials using three NIST stainless-steel reference materials (NIST 121d and 123c, both grade-304 equivalents; NIST 160b,... |
| 36 | [[sources/bassioni2012-aluminum-foil-meat-cooking-uae\|Bassioni et al. 2012]]. *Risk Assessment of Using Aluminum Foil in Food Preparation*, International Journal of Electrochemical Science | 2012 | Peer-reviewed | AE/EG Al occurrence in Six experimental cooking-solution recipes (variants on 40% minced-beef extract + tomato juice + citric acid + NaCl, with... (n=6) |
| 37 | [[sources/buculei2012-tin-iron-migration-canned-food-romania\|Buculei et al. 2012]]. *Study regarding the tin and iron migration from metallic cans into foodstuff during storage*, Journal of Agroalimentary Processes and Technologies, 18(4), 299-303 | 2012 | Peer-reviewed | RO Sn, Fe occurrence in Four canned product types (peas, tomato paste, pork in own juice, pork liver pate) packed in three-piece tinplate... (n=4) |
| 38 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
| 39 | [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|David et al. 2008]]. *The heavy metals analyses in canned tomato paste*, Journal of Agroalimentary Processes and Technologies | 2008 | Peer-reviewed | RO/IT Pb, Cd, Sn, Al, Cr, Fe, Zn, tAs occurrence in Five commercial canned tomato paste and tomato sauce products sampled from the Romanian retail market in 2008: three... (n=5) |
| 40 | [[sources/jecfa-64th-cadmium-tin-2006\|JECFA 2006]]. *Evaluation of certain food contaminants — Sixty-fourth report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 930 (Sixty-fourth meeting of JECFA, Rome, 8-17 February 2005) | 2006 | Government report | international Cd, Sn occurrence in Cadmium: raw or aggregated occurrence data submitted to GEMS/Food by Australia, Canada, Germany, Japan, New Zealand, Norway, USA,... |
| 41 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5552206e60](https://github.com/paleofoundation/heavymetalindex/commit/5552206e60) | 2026-09-10 | major | Contamination-profile values revised; 2 sections added and 1 removed; narrative text revised |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 4 sources removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 4 sources added; narrative text revised |
| [0a907f56a4](https://github.com/paleofoundation/heavymetalindex/commit/0a907f56a4) | 2026-08-09 | correction | Narrative text revised |
| [942bc6b1bb](https://github.com/paleofoundation/heavymetalindex/commit/942bc6b1bb) | 2026-08-09 | correction | 5 sources added; contamination-profile values revised; 1 section added |
<!-- END: hmi-page-history -->

## Additional geographic and remediation evidence

**[[sources/joseph2025-gobbiya-dam-vegetable-metals|John Joseph, 2025]].** Joseph and colleagues measured seven metals in kenaf, chili pepper, tomato and spinach plant parts, with associated soil and irrigation water from Gobbiya Dam in Nigeria. The paper separates edible leaves or fruits from roots and stems. Its concentration tables are preserved independently of several inconsistent safety comparisons and a soil-index calculation that uses water standards. The organ-resolved dry-weight values support local occurrence and irrigation-pathway analysis. Roots, stems and non-edible leaves are retained as pathway context rather than assigned to edible-product distributions. Broad leafy-vegetable and herb/spice ingredient routes retain kenaf and chili identity in the structured record without substituting a named cultivar.

**[[sources/chen2024-shanghai-hydroponic-vegetables|Shanshan Chen, 2024]].** Shanghai farm samples had lower reported lead and cadmium concentrations under hydroponic cultivation than conventional soil cultivation. The element-specific summaries combine four vegetables, while commodity-specific means combine lead with cadmium; neither split can be reconstructed into commodity-by-element concentrations from the preserved main paper. Supports a local cultivation-system comparison and the soil/irrigation pathway. It does not establish commodity-specific Pb or Cd distributions or universal hydroponic safety. Mixed-contaminant hazard indices include pesticides and phthalates; their interpretation remains source-reported.
