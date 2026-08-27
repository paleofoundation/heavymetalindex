---
type: ingredient
commodity: lettuce
title: "Lettuce"
label: "Lettuce"
aliases: [iceberg-lettuce, romaine-lettuce, green-leaf-lettuce, head-lettuce]
category: leafy-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 300]
    p95_ppb: 800
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 250]
    p95_ppb: 600
    confidence: medium
    n_studies: 7
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
    typical_ppb: [5, 150]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 1000]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 400]
    p95_ppb: null
    confidence: medium
    n_studies: 5
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
drivers: [soil-uptake, irrigation-water, atmospheric-deposition, geography, urban-siting]
lower_risk_variants: ["[[ingredients/iceberg-lettuce]]"]
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 24
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 9
---

# Lettuce

## Overview

Lettuce (Lactuca sativa) is the most-consumed leafy vegetable globally and a frequent target of heavy-metals surveys because it sits at the intersection of three exposure variables: short growing cycle, high water content (making it an efficient transpiration-driven metal carrier), and frequent urban or peri-urban siting. Within the leafy-vegetable category ([[ingredients/leafy-vegetables]]), lettuce is one of the lower-Cd accumulators relative to spinach and amaranth, but it remains a meaningful Pb and Cd source in retail dietary surveys. The current corpus loads 9 sources spanning Iran (Behbahan probabilistic risk modeling), South Africa (Johannesburg roadside-vs-store comparison), Ghana (Kumasi anthropogenic-activity sites), Spain (Andalusia urban gardens), Ecuador (mining-influenced farmland), Burkina Faso (arsenic-irrigated vegetables), Hungary (developmental-stage uptake mechanism), and a Cd-mitigation systematic review.

## Why this commodity accumulates heavy metals

Lettuce takes metals from soil predominantly through root uptake and from atmospheric sources through leaf-surface deposition. The plant's high transpiration rate during the growing cycle pulls water and dissolved cadmium, nickel, and chromium from the root zone into the leaf tissue at higher rates than fruit or root vegetables. Lead behaves differently: less mobile within plant tissue, lead enters lettuce primarily via direct atmospheric deposition onto the leaf surface, which makes urban and roadside production a documented elevated-Pb pathway. The Johannesburg paired-market study compared 20 leafy-vegetable samples from roadside open-air markets versus large stores and found measurably higher Pb in the roadside subset ([[sources/adhikari2024-leafy-vegetables-johannesburg]]). The Ghanaian Kumasi study sampled 90 lettuce and spring onion samples from anthropogenic-activity sites and found Pb, Cr, Ni at concentrations of regulatory concern in a substantial fraction of urban-cultivated product ([[sources/owusuadoma2024-ghana-lettuce-metals]]). The Andalusian urban-garden study sampled 282 vegetable items from Spanish urban garden settings and quantified the cumulative exposure pathway specifically for urban-grown produce ([[sources/rossini-oliva2024-urban-garden-vegetables-spain]]). The Hungarian developmental-stage work documented arsenic uptake increasing with plant age, suggesting earlier-harvest practices reduce per-leaf metal load ([[sources/sandil2023-arsenic-bean-lettuce]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 10–300 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|2]], [[sources/owusuadoma2024-ghana-lettuce-metals\|3]] |
| Cd | n=7 | 20–250 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 5–150 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]], [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|3]] |
| tHg | n=2 | 0–10 | low | [[sources/adhikari2024-leafy-vegetables-johannesburg\|1]] |
| Ni | n=5 | 50–1000 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|2]], [[sources/owusuadoma2024-ghana-lettuce-metals\|3]] |
| Al | n=1 | — | — | — |
| Cr | n=5 | 10–400 | medium | [[sources/armand2026-lettuce-cabbage-behbahan\|1]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|2]], [[sources/owusuadoma2024-ghana-lettuce-metals\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The corpus spans subsistence and commercial production systems across four continents. The Behbahan Iran Monte Carlo risk assessment (n=40 lettuce-and-cabbage samples) found Pb, Cd, Cr, Ni above EU 2023/915 fresh-vegetable limits in probabilistic-worst-case consumption scenarios ([[sources/armand2026-lettuce-cabbage-behbahan]]). The Andalusian urban-garden cohort is the largest single dataset at 282 samples across 11 metals from Spanish urban gardens ([[sources/rossini-oliva2024-urban-garden-vegetables-spain]]). The Ecuadorian mining-influenced farmland data (Romero-Crespo 2023, n=17) provides the high-end of the loaded distribution for Pb, Cd, and Cr where mining contamination pathways apply. The Cardini 2025 Cd-speciation work (n=7, SEC-ICP-MS/MS) is methodological rather than occurrence-survey but contributes to the mechanism understanding of cadmium-chelating compounds in plant tissue. Variety-level pattern: iceberg lettuce (compact head, lower surface-to-volume ratio) consistently carries lower Pb than open-leaf varieties (romaine, green leaf, butterhead). Hydroponic-grown lettuce with controlled irrigation eliminates the soil-uptake pathway and the irrigation-water pathway, though the loaded corpus does not characterise hydroponic product specifically.

## Processing effects

Washing whole-head lettuce before consumption removes surface particulate Pb (atmospheric deposition) but does not affect internalised Cd, Cr, or Ni. The Burkina Faso work measured cooked-versus-raw vegetable arsenic uptake and found cooking did not change the per-sample arsenic content meaningfully ([[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina]]). Discarding outer leaves before consumption reduces per-serving Pb when those outer leaves are the primary atmospheric-deposition target. Pre-washed bagged salad has undergone surface decontamination at the processor level but inherits the internalised metal load. Freezing is not typically applied to lettuce (texture incompatibility). Drying for lettuce-powder applications (rare) would concentrate metals on a dry-weight basis 8-10×.

## Ingredient-derivative risk

Fresh whole-head lettuce represents the baseline. Pre-washed bagged salads carry the same per-mass load with surface contamination reduced. Lettuce juice (cold-pressed green juice) extracts soluble metals; per-serving exposure tracks the fresh-weight concentration at the juice-yield ratio. Wild-foraged or community-garden-grown lettuce carries siting-dependent risk if the garden soil has industrial or roadside contamination history.

## Mitigation options

### Sourcing levers

Source from production regions and operations with documented soil-and-water screening, away from roadsides (≥ 200 m setback), and away from industrial-corridor settings. The Ghanaian, South African, Iranian, and Ecuadorian datasets all show urban-and-near-mining production carrying measurably elevated metal loads relative to controlled commercial cropland. For urban-garden growers, the Andalusian dataset documents the population-scale risk magnitude and supports siting-and-soil-testing recommendations before planting.

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability. Avoid phosphate fertilisers with elevated Cd impurity. The Schaefer 2020 cadmium mitigation review covers the full agronomic-intervention vocabulary for leafy crops ([[sources/schaefer2020-cadmium-mitigation-strategies]]). Irrigation source: switch from wastewater or untreated industrial-corridor groundwater to municipal-treated or rain-harvested water; the Burkina Faso work documents the irrigation-water arsenic pathway directly. Earlier-harvest practices reduce per-leaf metal load when growing in elevated-metal contexts (Sandil 2023 developmental-stage mechanism).

### Processing levers

Discard outer leaves before sale or processing. Wash with potable water to remove surface particulate Pb. Hydroponic production eliminates the soil-uptake pathway entirely and is the highest-control processing-stage intervention available.

### Formulation levers

For blended-salad and pre-washed-bag formulations, weighting toward iceberg-and-head varieties over open-leaf varieties modestly reduces aggregate Pb per serving. For finished-product formulations using lettuce as one ingredient, inclusion-ratio limits cap per-serving exposure.

### Testing and QC levers

Lot-level ICP-MS testing for Pb, Cd, Cr, and Ni at detection floors ≤ 10 ppb is appropriate for commodity lettuce buyers. For urban-garden or community-supported-agriculture supply chains, intake-level testing at harvest is the meaningful intervention.

### Packaging and storage levers

Standard food-grade packaging does not contribute to the lettuce metal load. For pre-washed bagged product, the wash-water quality matters as a separate (small) load pathway.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 applies the leafy-vegetable Pb maximum of 0.30 mg/kg fresh weight and the Cd maximum of 0.20 mg/kg fresh weight to lettuce. The EU Regulation 2023/915 sets the same Pb maximum of 0.30 mg/kg fresh weight for leafy vegetables and fresh herbs (lettuce included) and Cd at 0.20 mg/kg fresh weight for leafy vegetables excluding celery and salsify. The FDA does not set a fresh-lettuce-specific action level. The Behbahan probabilistic risk modeling found cumulative-intake exposure metrics above thresholds of concern under reasonable-worst-case consumption assumptions ([[sources/armand2026-lettuce-cabbage-behbahan]]), and the Andalusian urban-garden data similarly found cumulative exposure considerations for the urban-garden consumption pattern.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/adhikari2024-leafy-vegetables-johannesburg|Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa]]<span class="hmi-ref-meta">Adhikari S and Struwig M · 2024 · [doi.org/10.1007/s10661-023-12283-6](https://doi.org/10.1007/s10661-023-12283-6)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/owusuadoma2024-ghana-lettuce-metals|Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana]]<span class="hmi-ref-meta">Owusu Adoma M, Nyarko G, Boateng A, and Darko G · Environmental Health Insights · 2024 · [doi.org/10.1177/11786302241285737](https://doi.org/10.1177/11786302241285737)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/rossini-oliva2024-urban-garden-vegetables-spain|Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain]]<span class="hmi-ref-meta">Rossini-Oliva S and López Nuñez R · Environmental Science and Pollution Research · 2024 · [doi.org/10.1007/s11356-024-33500-w](https://doi.org/10.1007/s11356-024-33500-w)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/sandil2023-arsenic-bean-lettuce|Arsenic uptake and accumulation in bean and lettuce plants at different developmental stages]]<span class="hmi-ref-meta">Sandil S, Záray G, Endrédi A, Füzy A, Takács T, Óvári M, et al. · Environmental Science and Pollution Research · 2023 · [doi.org/10.1007/s11356-023-30593-7](https://doi.org/10.1007/s11356-023-30593-7)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/armand2026-lettuce-cabbage-behbahan|Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation]]<span class="hmi-ref-meta">Armand R, Rafati L, Mohammadi H, and Armand N · Scientific Reports · 2026 · [doi.org/10.1038/s41598-026-40958-w](https://doi.org/10.1038/s41598-026-40958-w)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina|Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso]]<span class="hmi-ref-meta">Clair-Caliot G, Marks SJ, Hug SJ, Bretzler A, N'guessan ND, Tihe SFK, et al. · Frontiers in Water · 2021 · [doi.org/10.3389/frwa.2021.667308](https://doi.org/10.3389/frwa.2021.667308)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/schaefer2020-cadmium-mitigation-strategies|Cadmium: Mitigation strategies to reduce dietary exposure]]<span class="hmi-ref-meta">Schaefer HR, Dennis S, and Fitzpatrick S · Journal of Food Science · 2020 · [doi.org/10.1111/1750-3841.14997](https://doi.org/10.1111/1750-3841.14997)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/armand2026-lettuce-cabbage-behbahan\|Armand et al. 2026]]. *Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation*, Scientific Reports | 2026 | Peer-reviewed | Iranian Behbahan lettuce-and-cabbage Pb, Cd, Cr, Ni Monte Carlo probabilistic risk model (n=40) |
| 2 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 3 | [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|Cardini et al. 2025]]. *A novel approach for the identification of cadmium-chelating compounds in plant-based foods using SEC-ICP-MS/MS and SEC-QTOF-MS*, Analytical and Bioanalytical Chemistry | 2025 | Peer-reviewed | Cadmium-speciation methodology in plant-tissue Cd-chelating compounds (n=7) |
| 4 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 5 | [[sources/adhikari2024-leafy-vegetables-johannesburg\|Adhikari et al. 2024]]. *Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa* | 2024 | Peer-reviewed | Johannesburg roadside-vs-store leafy vegetable 10-metal panel (n=20); urban-Pb deposition evidence |
| 6 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 7 | [[sources/owusuadoma2024-ghana-lettuce-metals\|Owusu et al. 2024]]. *Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana*, Environmental Health Insights | 2024 | Peer-reviewed | Ghanaian Kumasi lettuce-and-onion 6-metal panel at anthropogenic-activity sites (n=90) |
| 8 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | Andalusian urban-garden 11-metal panel cumulative-exposure assessment (n=282) |
| 9 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 10 | [[sources/zhang2024-lettuce-cadmium-greenhouse-amendments\|Zhang et al. 2024]]. *Impact of Physical Interventions, Phosphorus Fertilization, and the Utilization of Soil Amendments on the Absorption of Cadmium by Lettuce Grown in a Solar-Powered Greenhouse*, Biology | 2024 | Peer-reviewed | CN Cd occurrence in One-cycle randomized-block solar-greenhouse field trial in Nanying Village, Wuquan Town, Yangling District, Shaanxi Province, China; each treatment had... (n=3) |
| 11 | [[sources/bambara2023-loumbila-vegetables-heavy-metals\|Luc et al. 2023]]. *Evaluation of the Metallic Contamination of Market Garden Products around the Loumbila Dam*, Open Journal of Applied Sciences | 2023 | Peer-reviewed | BF Cu, Ni, Zn, Cr, Pb occurrence in Market-garden vegetables around Loumbila Dam, Burkina Faso |
| 12 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 13 | [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|Romero-Crespo et al. 2023]]. *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | Ecuadorian mining-influenced farmland 5-metal panel with probabilistic health risk (n=17) |
| 14 | [[sources/sandil2023-arsenic-bean-lettuce\|Sandil et al. 2023]]. *Arsenic uptake and accumulation in bean and lettuce plants at different developmental stages*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | Hungarian arsenic-uptake mechanism; developmental-stage-dependent accumulation |
| 15 | [[sources/vela2023-quito-vegetables-cd-pb\|Doris et al. 2023]]. *Determination of cadmium and lead in vegetables marketed in Quito, Ecuador*, Revista Internacional de Contaminacion Ambiental | 2023 | Peer-reviewed | EC Cd, Pb occurrence in Tomato, carrot, and lettuce samples marketed in Quito, Ecuador |
| 16 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 17 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 18 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 19 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | Burkina Faso irrigation-water arsenic pathway in lettuce and other vegetables (n=168) |
| 20 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 21 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 22 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | Cadmium dietary-exposure mitigation review covering agronomic and processing levers for leafy crops |
| 23 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 24 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 6 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
