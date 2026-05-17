---
title: Potatoes
type: ingredient
commodity: potatoes
aliases: [white potato, russet potato, yukon gold, red potato, potato flakes, potato starch, dehydrated potato, french fries, potato chips]
category: starchy-root
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [15, 34]
    p95_ppb: 37.7
    confidence: high
    n_studies: 17
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [2, 15]
    p95_ppb: 25
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [0, 48]
    p95_ppb: 79.4
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200, 1000]
    p95_ppb: 2500
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 50
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 2.7
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: [soil-uptake, tuber-formation-in-soil, geography, peel-versus-flesh]
lower_risk_variants: ["[[ingredients/peeled-potato]]", "[[ingredients/potato-starch]]"]
higher_risk_variants: ["[[ingredients/unpeeled-potato]]", "[[ingredients/potato-skin]]", "[[ingredients/potato-peel-heavy-products]]"]
used_in_products: ["[[products/baby-food-vegetables]]", "[[products/french-fries]]", "[[products/potato-chips]]", "[[products/mashed-potato-products]]", "[[products/potato-starch-containing-baked-goods]]"]
audience: [regulator, educator, consumer, app]
sources: 25
updated: 2026-05-16
---

# Potatoes

Potatoes are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as one of the population-level dietary cadmium contributors, placed in a joint "starchy roots and potatoes" category alongside other root vegetables. The commodity is distinct from the root-vegetables-for-babies category that the FDA CTZ Pb guidance treats under a dedicated 20 ppb action level.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=11 | 0 | high | [[sources/samma2024-bangladesh-vegetable-metals\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|3]] |
| Cd | n=17 | 15–34 | high | [[sources/mohammadian-hafshejani2024-cadmium-prostate-cancer-meta\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|3]] |
| iAs | n=4 | 2–15 | low | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| tAs | n=9 | 0 | medium | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/romero-crespo2023-ecuador-mining-crops-metals\|3]] |
| tHg | n=5 | 0 | medium | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]], [[sources/mawari2022-heavy-metals-fruits-vegetables-india\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=8 | 0–48 | medium | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|1]], [[sources/romero-crespo2023-ecuador-mining-crops-metals\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| Al | n=5 | 200–1000 | medium | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|1]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| Cr | n=9 | 0 | medium | [[sources/samma2024-bangladesh-vegetable-metals\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/romero-crespo2023-ecuador-mining-crops-metals\|3]] |
| Sn | n=3 | 0–20 | low | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| U | n=2 | 0 | high | — |

## Why this commodity accumulates cadmium

Potatoes are tubers that form and mature in direct soil contact, with cadmium uptake driven by soil cadmium concentration, soil pH, and tuber surface area. Cadmium concentrations tend to be modestly higher in potato peel than in potato flesh, though the gradient is less pronounced than for some other root-crop commodities. Regional variation in finished-potato cadmium reflects soil cadmium in the growing region, with phosphate-fertilizer-amended soils and hotspot areas producing elevated potato cadmium.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration in potatoes of 0.021 mg/kg across European samples, which is at the lower end of the starchy-roots category mean but still meaningful in population-exposure terms given high consumption volume._

## Processing effects

_Pending. Peeling removes a modest fraction of total potato cadmium because cadmium is distributed through the tuber rather than concentrated in the surface layer; peel-containing products (potato-skin-heavy dishes, processed products retaining peel) carry somewhat more cadmium than peeled-flesh products. Frying, baking, and boiling do not remove cadmium from the food._

## Ingredient-derivative risk

Potato-derived products (potato starch, potato flakes, dehydrated potato) inherit the cadmium concentration of the source potatoes. Potato starch, being isolated from flesh rather than from peel, tends to carry cadmium at the flesh-only concentration and therefore slightly below the whole-potato mean.

## Mitigation options

_Pending. Cultivar selection, soil management, and peeling are the primary mitigation levers. Note that peeling is in tension with the nutrient-retention rationale that keeps potato skin on in many modern preparations._

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **Pb**: the FDA Closer to Zero 20 ppb Pb action level for single-ingredient root vegetables in processed baby food covers carrots and sweet potatoes specifically ([[sources/fda-ctz-Pb-babyfood-2025|FDA CTZ Pb 2025]]; see [[regulations/fda-ctz-Pb-rootveg-20ppb]]); white potatoes are not in the targeted category but the framing is adjacent.
- **iAs**: not a top staple-iAs contributor (rice dominates, [[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]]). See [[metals/arsenic]].

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for potatoes and starchy roots (pending ingest of CXS 193-1995).
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU maximum levels for root and tuber vegetables are 0.10 mg/kg (100 ug/kg) for Cd and 0.10 mg/kg (100 ug/kg) for Pb; for potatoes, the maximum levels apply to peeled potatoes after washing and edible-part separation.
- [[regulations/fda-ctz-Pb-rootveg-20ppb]] — FDA CTZ 20 ppb lead action level for single-ingredient root vegetables in processed baby food covers carrots and sweet potatoes specifically and does not apply to potatoes, but the adjacent framing is worth noting for any future Cd analogue.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 136, "Potato, peeled, boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Potato, peeled, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 13 | 15 | 25 | 34 | 37.7 | 42 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 63 | in profile |
| Ni | 27 | 0 | 0 | 0 | 48 | 79.4 | 91 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 2.66 | 4.8 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|Kumar et al. 2024]]. *High Arsenic Contamination in the Breast Milk of Mothers Inhabiting the Gangetic Plains of Bihar: A Major Health Risk to Infants*, Environmental Health 23(1) | 2024 | Peer-reviewed | tAs and iAs in breast milk, child urine, drinking water, rice, wheat, and potato from 11 arsenic-affected Bihar districts (n=513 women); potatoes included as a dietary arsenic-exposure pathway in a high-groundwater-arsenic region |
| 4 | [[sources/mohammadian-hafshejani2024-cadmium-prostate-cancer-meta\|Mohammadian-Hafshejani et al. 2024]]. *Investigating the Relationship between Cadmium Exposure and the Risk of Prostate Cancer: A Systematic Review and Dose-Response Meta-Analysis*, Journal of Health (Tehran University of Medical Sciences) | 2024 | Peer-reviewed | IR/US/EU Cd occurrence in 16 observational studies (case-control, cross-sectional, cohort) on Cd exposure and prostate cancer risk; searches up to May 2022 (n=16) |
| 5 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | Cu, Cr, and Pb in potatoes and four other vegetables paired with soils from six upazilas in industrial Bogura, Bangladesh; Pb contamination factor >6 and HI >1 across all sites |
| 6 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Cd and Pb in potatoes (mean 0.03 Cd, 0.20 Pb mg/kg fw) alongside seven other vegetables from Babol, Iran by AAS; HQs below 1 for potatoes, in contrast to leafy variants exceeding Iran National Standards |
| 7 | [[sources/romero-crespo2023-ecuador-mining-crops-metals\|Romero-Crespo et al. 2023]]. *Heavy metals in soils and crops in a mining area of Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | As, Cd, Cr, Cu, Ni, Pb, and Zn in soils and food crops (potato, leafy vegetables, corn) adjacent to active mining operations in Ecuador; mining-related soil contamination transfer into potato edible portions, with As and Pb showing the most pronounced elevations |
| 8 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 9 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Pb, Cd, tAs, iAs, tHg, Ni, and Cr in baked potato (with peel) and potato chips across 29,148 analytical rows from 90 US prepared TDS foods (FY2018–2020); potato chips ranked highest for Cd among TDS foods at P95 190 ppb |
| 10 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | German MEAL TDS occurrence of tHg, Cd, Pb, and Ni in potato-containing food group composites among 869 pooled samples covering 90%+ of German consumption; all measured levels below applicable EU MLs |
| 11 | [[sources/mawari2022-heavy-metals-fruits-vegetables-india\|Mawari et al. 2022]]. *Heavy metal accumulation in fruits and vegetables in Maharashtra, India*, Environmental Health Insights | 2022 | Peer-reviewed | Pb, Cd, tAs, and tHg in potato and 23 other commodities from Maharashtra, India by ICP-MS with native soils; potato among the top accumulators after garlic, with anthropogenic soil Pb elevation at several sites |
| 12 | [[sources/sitek2022-cd-toxicity-antioxidant-vitamins\|Sitek et al. 2022]]. *The role of antioxidant vitamins in cadmium toxicity prevention*, Nutrients | 2022 | Peer-reviewed | EU/WHO/global Cd occurrence in Review of human and animal studies on dietary Cd exposure and antioxidant vitamin interactions |
| 13 | [[sources/zhao2022-china-sixth-tds-pb-cd\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | China's Sixth TDS Pb and Cd concentrations in potato food category among 288 composite samples across 24 provincial divisions; supports national dietary exposure context for potato as a measured contributor |
| 14 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | *[awaiting synthesis]* |
| 15 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA/CFSAN Cd mitigation review citing potato chips at 93 µg/kg (FDA TDS 2014–2016) as the third-ranked food by mean lower-bound Cd; emphasizes soil pH, cultivar selection, and fertilizer choice as the dominant pre-harvest Cd levers |
| 16 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Al, Sb, tAs, Cd, Cr, Ni, and Sn in 291 French infant and toddler foods including potato-containing vegetable meals, soups, and purees; occurrence data for potato-based baby food matrices across the first French infant TDS |
| 17 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | FSAI Irish TDS — Al, tAs, iAs, Cd, Cr, Pb, tHg, and Sn occurrence in potato food category among 141 samples representing the Irish diet, prepared as consumed for adults and children |
| 18 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency (FERA) Report for UK Food Standards Agency | 2015 | Government report | UK FERA/FSA TDS occurrence of Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, and Sb in the potatoes food group, composited from 3,312 retail samples across 24 UK locations on an as-consumed basis |
| 19 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical textbook chapter on Cd toxicology covering toxicokinetics, renal tubular endpoint, carcinogenicity, and risk assessment, with food occurrence data citing potatoes and root vegetables as significant Cd contributors in European diets |
| 20 | [[sources/stasinos2014-heavy-metals-tubers-review\|Stasinos et al. 2014]]. *The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review*, Journal of Food Science | 2014 | Review | Cross-country review of Pb, Cd, tAs, Cr, Ni, and Al bioaccumulation in potato tubers from polluted-irrigation contexts in Greece, Latvia, US, Spain, Morocco, and Poland; argues for an EFSA regulatory gap between water and tuber limits |
| 21 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week; identifies potatoes as a major absolute dietary Cd contributor in Europe despite moderate concentrations, due to high consumption volumes |
| 22 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | Total Cr in potato among 272 Polish plant-origin food samples by ZETAAS; regional variation across three Polish provinces with potato as part of the dietary chromium baseline |
| 23 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | California OEHHA hazard identification for Cd reproductive and developmental toxicity, providing the scientific basis for the Proposition 65 reproductive-toxicity listing of Cd (effective 1997); potatoes and root vegetables cited as dietary Cd exposure sources underpinning the exposure assessment context |
| 24 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Ni concentrations in 2,221 food samples from the Danish National Food Institute literature survey (AAS/PIXE, 1969–1982), reporting Ni content of potatoes and estimating contribution to total dietary Ni intake via load factor analysis in the Danish average diet model |
<!-- END: hmi-source-legend -->
