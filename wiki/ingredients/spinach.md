---
title: Spinach
type: ingredient
commodity: spinach
aliases: [baby spinach, mature spinach, frozen spinach, spinach puree]
category: leafy-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [30, 300]
    p95_ppb: 800
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: 1100
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 1500]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [2000, 10000]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [100, 800]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, leaf-accumulation, geography, growing-season]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/mature-leaf-spinach]]"]
used_in_products: ["[[products/baby-food-vegetables]]", "[[products/salad-mixes]]", "[[products/smoothies]]", "[[products/frozen-vegetable-mixes]]", "[[products/baby-leafy-purees]]"]
audience: [regulator, educator, consumer, app]
sources: 44
wiki_doi: null
updated: 2026-05-16
---

# Spinach

Spinach is a representative leafy vegetable for which the EFSA 2009 occurrence data place cadmium concentrations in the range characteristic of leafy greens generally, reflecting the plant family's efficient leaf-accumulation of cadmium from soil.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 30–300 | medium | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/seyfferth2024-spinach-cd-pb-review\|3]] |
| Cd | n=10 | 100–500 | medium | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 10–100 | low | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|3]] |
| tHg | n=2 | 1–20 | low | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|1]], [[sources/kurniawati2021-jakarta-staple-foods-naa\|2]] |
| Ni | n=4 | 200–1500 | low | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/sultana2022-dhaka-root-leafy-vegetables\|3]] |
| Al | n=4 | 2000–10000 | low | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/efsa2021-aluminium-food-qa\|3]] |
| Cr | n=6 | 100–800 | medium | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Leafy vegetables as a category concentrate cadmium in their leaves through transpiration-driven translocation from root uptake. Spinach is a more efficient cadmium accumulator than most leafy species because of its characteristic short harvest cycle, high water content, and leaf morphology that maximizes transpiration. Regional variation in finished-spinach cadmium concentrations reflects soil cadmium concentrations and phosphate-fertilizer use in the growing region.

## Ranges by source, region, and variety

The dominant axis of variance in spinach cadmium is soil-Cd loading at the growing site, mediated by soil pH and zinc status. Spinach is among the most efficient cadmium accumulators in the leafy-vegetable category; [[sources/efsa-cadmium-contam-2009|EFSA 2009]] places spinach mean Cd at the upper end of leafy-greens, with the broad leafy-vegetables category mean substantially lower in the same survey. Within spinach specifically, cultivar effects are documented: some commercial varieties accumulate cadmium more efficiently than others, and breeding programs have identified low-Cd-accumulator lines.

Growing-region effects in spinach track regional soil-Cd inheritance: regions with historic phosphate-fertilizer use, mining legacy, or naturally Cd-rich sedimentary rocks produce higher-Cd spinach than regions with cleaner agricultural-soil baselines. Hydroponic and greenhouse spinach can be substantially lower in Cd than soil-grown spinach because the nutrient solution is the controllable input rather than the soil; for HMTc-relevant supply chains targeting low-Cd spinach, hydroponic sourcing is a documented intervention.

Lead in spinach is a secondary concern. Surface Pb (from atmospheric deposition near roadways or industrial sources) is partially removable by washing; root-uptake Pb is bound in the leaf tissue. Spinach grown near historic Pb sources (lead-arsenate-pesticide-treated orchards, leaded-gasoline-era roadside contamination, industrial-zone proximity) can carry elevated Pb. The intervention is geographic provenance more than processing.

## Processing effects

Spinach cadmium is incorporated into the leaf tissue during growth and is not removed by ordinary processing. Washing does not reduce leaf-Cd (surface dust contributes negligibly to total Cd). Drying or wilting concentrates the metals per unit dry mass without changing total mass-balance. Freezing does not change Cd content. Canning slightly concentrates per-serving Cd because of water loss during the canning process.

Cooking does not reduce spinach cadmium. Some water-soluble metals leach into the cooking water, but the leach fraction for Cd is small and the cooking-water-discard practice is not standard for spinach. For populations consuming large quantities of spinach (high-greens dietary patterns, infants on pureed greens, some traditional diets), the geographic-provenance lever upstream is the dominant intervention rather than processing.

For Pb specifically, washing removes the surface-deposited fraction and can reduce total leaf-Pb modestly where atmospheric or dust deposition is the dominant Pb source. Multi-rinse protocols reduce Pb more than single-rinse protocols. For Cd, the same washing operations have negligible effect.

## Ingredient-derivative risk

Spinach-based baby food purees and infant-targeted leafy-vegetable products inherit the spinach cadmium concentration essentially unchanged after processing. Spinach is a relevant ingredient in the FDA Closer to Zero program for Pb (which applies to processed baby food generally) and would be relevant for any future Cd analogue of the CTZ processed-baby-food action levels.

## Mitigation options

_Pending. Cultivar selection, soil management, and rotational practices are the primary mitigation levers on the production side; blanching and discarding cooking water have limited effect on cadmium in leaf tissue._

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **Pb**: baby food made from spinach is captured by the FDA Closer to Zero processed-baby-food Pb action level of 10 ppb for fruit and vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA CTZ Pb 2025]]). See [[metals/lead]] and [[regulations/fda-ctz-Pb-babyfood-10ppb]].

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for leafy vegetables (pending ingest of CXS 193-1995).
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU maximum levels for leaf vegetables are 0.10 mg/kg (100 ug/kg) Cd and 0.30 mg/kg (300 ug/kg) Pb; spinaches and similar leaves, mustard seedlings, and fresh herbs have a specific Cd maximum level of 0.20 mg/kg (200 ug/kg).

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/hossen2026-noakhali-vegetables-heavy-metals\|Hossen et al. 2026]]. *Assessment of heavy metal levels and associated health risks linked to vegetables grown in Noakhali region of Bangladesh*, Environmental Health Insights | 2026 | Peer-reviewed | BD tAs, Pb, Cd, Cr, Fe, Cu occurrence in Fifty-four samples from nine integrated farms in Noakhali, Bangladesh: nine vegetable samples and nine corresponding soil samples, each... (n=54) |
| 2 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 3 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 4 | [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|Cardini et al. 2025]]. *A novel approach for the identification of cadmium-chelating compounds in plant-based foods using SEC-ICP-MS/MS and SEC-QTOF-MS*, Analytical and Bioanalytical Chemistry | 2025 | Peer-reviewed | Cd occurrence in Seven plant-based food matrices: black-eyed beans, beluga lentils, tigernuts, basmati rice, sweet potato (cooked, dried, ground), beetroot leaves;... (n=7) |
| 5 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 6 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | Pb, Cd, tAs, tHg, Ni, and Cr in 5 spinach samples among 82 vegetables from a Grand Forks, ND farmer's market; spinach the highest accumulator across Cd, Cr, Pb, and Hg with 100% of samples exceeding FAO/WHO Cd limits |
| 7 | [[sources/saleem2025-nd-vegetables-hra\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Pb, Cd, tAs, tHg, Ni, Cr occurrence in 82 samples across 13 locally grown vegetable species (potato n=8, onion n=7, tomato n=7, sugar beet n=7, green... (n=82) |
| 8 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | Al, Cd, Cr, Pb, and Fe by ICP-OES in 3 spinach samples alongside cabbage, mustard, and pak choi from Pasar Borong Selangor wet market; Cd, Cr, and Pb all below detection limits while Al and Fe highest in spinach (Al 41.37 mg/kg) within FAO/WHO limits |
| 9 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 10 | [[sources/fatai2024-african-spinach-tomato-nigeria\|Fatai et al. 2024]]. *Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria*, Journal of Chemistry and Nutritional Biochemistry | 2024 | Peer-reviewed | NG Cu, Ni, Zn, Cd, Cr, Pb occurrence in African spinach and tomato composite samples collected around Ashaka community, Gombe State, Nigeria (n=2) |
| 11 | [[sources/seyfferth2024-spinach-cd-pb-review\|Seyfferth et al. 2024]]. *Mitigating Toxic Metal Exposure Through Leafy Greens: A Comprehensive Review Contrasting Cadmium and Lead in Spinach*, GeoHealth | 2024 | Peer-reviewed | US Pb, Cd occurrence in Review of U.S. spinach surveys including USDA-FDA-EPA 1980s paired soil-plant study (n=105), FDA Total Diet Study 1991-2017 and... |
| 12 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 13 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 14 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Cd and Pb by AAS in spinach (mean 0.04 Cd, 0.48 Pb mg/kg fw) among eight vegetables from Babol, Iran; spinach exceeded Iran National Standards for both Pb and Cd leafy-vegetable limits |
| 15 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 16 | [[sources/martin-leon2023-canary-leafy-vegetables-elements\|Martin-Leon et al. 2023]]. *Evaluation of essential, toxic and potentially toxic elements in leafy vegetables grown in the Canary Islands*, Toxics | 2023 | Peer-reviewed | ES Cd, tAs, Pb, Al, Cr, Ni, V, Sr occurrence in Two hundred forty-four ready-to-eat leafy-vegetable samples from the Canary Islands, including spinach, watercress, chard, lettuces, arugula, and lamb's... (n=244) |
| 17 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 18 | [[sources/ali2022-lead-wastewater-crops-meta\|Ali et al. 2022]]. *Meta-analysis of public health risks of lead accumulation in wastewater, irrigated soil, and crops nexus*, Frontiers in Public Health | 2022 | Peer-reviewed | IN/PK/CN Pb occurrence in 24 studies from 13 countries (India, Pakistan, Iran, China, Egypt, Ethiopia, Kenya, Iraq, Morocco, Nigeria, North Korea, South... (n=24) |
| 19 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 20 | [[sources/sadee2022-erbil-vegetables\|Sadee 2022]]. *Determination of trace metals in vegetables using ICP-MS*, ZANCO Journal of Pure and Applied Sciences | 2022 | Peer-reviewed | IQ tAs, Cd, Cr, Pb, Cu occurrence in ten common vegetables from local markets in Erbil, Kurdistan Region, Iraq (n=10) |
| 21 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | Pb, Cd, Cr, and Ni in spinach alongside other root and leafy vegetables from Kawran Bazar market, Dhaka, across four seasonal sampling phases; leafy vegetables including spinach exceeded FAO/WHO MPLs for Cr, Cd, and Ni with HI >1 |
| 22 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 23 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | Greenhouse tAs uptake in spinach across four irrigation-water As concentrations (0, 100, 500, 1,000 µg/L) in Burkina Faso; spinach had the highest edible-part As at 6.6 µg/g dw at 500 µg/L, with steaming reducing cooked-food As 8- to 18-fold vs boiling |
| 24 | [[sources/efsa2021-aluminium-food-qa\|EUFIC 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Information Council (EUFIC) | 2021 | NGO report | EFSA aluminium-in-food factsheet identifying spinach as a natural high-Al food source alongside tea, cocoa, herbs, and mushrooms; provides EFSA TWI of 1 mg Al/kg bw/week and JECFA PTWI of 2 mg/kg bw/week regulatory context |
| 25 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 26 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | Cr and tHg in spinach (including water spinach) by neutron activation analysis among 14 Jakarta staple foods from five traditional markets; spinach included as a vegetable matrix in the dietary HRI context |
| 27 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 28 | [[sources/adebayo2020-wastewater-irrigated-spinach\|Adebayo et al. 2020]]. *Levels of heavy metals and their health risk assessment from wastewater irrigated spinach in railway quarters, Bauchi, Bauchi state, Nigeria*, International Journal of Advanced Chemistry Research | 2020 | Peer-reviewed | NG Cd, Cr, Cu, Mn, Ni, Pb occurrence in Wastewater and African spinach (Amarantus caudatus) samples from Railway Quarters irrigation farm, Bauchi, Nigeria (n=3) |
| 29 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA/CFSAN Cd-mitigation review citing boiled spinach at 117 µg/kg (FDA TDS 2014–2016) as the second-ranked food by mean lower-bound Cd; identifies leafy vegetables including spinach as a primary dietary Cd contributor |
| 30 | [[sources/ahmed2019-irrigation-water-bangladesh-seasonal\|Ahmed et al. 2019]]. *Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables and the Difference between Dry and Wet Seasons Near a Multi-Industry Zone in Bangladesh*, Water | 2019 | Peer-reviewed | BD Pb, Cd, tAs, Cr, Cu, Zn occurrence in Irrigation water, soil, and mixed vegetables from 3 industrial zone areas (Banglabazar, Kashimpur, Chandra) in Gazipur District, Bangladesh.... (n=243) |
| 31 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for vegetable purees including spinach-containing products (as-consumed); multi-element context not available in FDA TDS |
| 32 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | IR Pb, tHg occurrence in Ten species of green leafy vegetables and herbs (Allium ampeloprasum L. [leek], A. wakegi L. [Welsh/Japanese bunching onion],... (n=160) |
| 33 | [[sources/naser2018-leafy-vegetables-bangladesh-metals\|Naser et al. 2018]]. *Heavy metal accumulation in leafy vegetables grown in industrial areas under varying levels of pollution*, Bangladesh Journal of Agricultural Research | 2018 | Peer-reviewed | BD Pb, Cd, Ni, Co, Cr occurrence in spinach, red amaranth, and amaranth from Gazipur industrial and non-industrial areas, Bangladesh (n=three leafy vegetables across three pollution levels) |
| 34 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 35 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=ten vegetables and fruits) |
| 36 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
| 37 | [[sources/sharma2016-spinach-wastewater-metals\|Sharma et al. 2016]]. *Heavy metals in vegetables: screening health risks involved in cultivation along wastewater drain and irrigating with wastewater*, SpringerPlus | 2016 | Peer-reviewed | IN Cd, Pb, Cu, Co, Fe occurrence in Edible portions of 12 common vegetable types from three Amritsar, Punjab agricultural sites, collected in triplicate per vegetable/site. (n=108) |
| 38 | [[sources/mohod2015-spinach-tomato-metals\|Mohod 2015]]. *A review on the concentration of the heavy metals in vegetable samples like spinach and tomato grown near the area of Amba Nalla of Amravati City*, International Journal of Innovative Research in Science, Engineering and Technology | 2015 | Peer-reviewed | IN Pb, Cd, Cu, Zn occurrence in spinach leaf and tomato grown near Amba Nalla, Amravati City, India (n=not reported in abstract) |
| 39 | [[sources/salawu2015-spinach-irrigation-metals\|Salawu et al. 2015]]. *Determination of some selected heavy metals in spinach and irrigated water from Samaru Area within Gusau Metropolis in Zamfara State, Nigeria*, Journal of Toxicology and Environmental Health Sciences | 2015 | Peer-reviewed | NG Pb, Cd, Fe, Cu, Zn occurrence in spinach and irrigation water from Samaru Area, Gusau Metropolis, Zamfara State, Nigeria (n=triplicate measurements) |
| 40 | [[sources/zemanova2015-spinach-cadmium-amino-fatty-acids\|Zemanova et al. 2015]]. *Changes in the contents of amino acids and the profile of fatty acids in response to cadmium contamination in spinach*, Plant, Soil and Environment | 2015 | Peer-reviewed | CZ Cd occurrence in Spinach cv. Matador grown in a controlled pot experiment in Prague with four Cd soil-dose treatments and four... (n=96) |
| 41 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA dietary Cd exposure assessment; spinach identified as high-Cd vegetable (up to 0.2 mg/kg FW in EU surveys); Cd-exposure-driver framing for leafy greens |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [1ca3eb02b](https://github.com/paleofoundation/heavymetalindex/commit/1ca3eb02b) | 2026-06-06 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [93c0fbc2e](https://github.com/paleofoundation/heavymetalindex/commit/93c0fbc2e) | 2026-05-17 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
