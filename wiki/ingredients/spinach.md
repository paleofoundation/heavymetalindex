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
sources: 15
updated: 2026-05-16
---

# Spinach

Spinach is a representative leafy vegetable for which the EFSA 2009 occurrence data place cadmium concentrations in the range characteristic of leafy greens generally, reflecting the plant family's efficient leaf-accumulation of cadmium from soil.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 30–300 | medium | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/seyfferth2024-spinach-cd-pb-review\|3]] |
| Cd | n=10 | 100–500 | medium | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 10–100 | low | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|3]] |
| tHg | n=2 | 1–20 | low | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/kurniawati2021-jakarta-staple-foods-naa\|2]] |
| Ni | n=4 | 200–1500 | low | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/sultana2022-dhaka-root-leafy-vegetables\|3]] |
| Al | n=4 | 2000–10000 | low | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/efsa2021-aluminium-food-qa\|3]] |
| Cr | n=6 | 100–800 | medium | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Leafy vegetables as a category concentrate cadmium in their leaves through transpiration-driven translocation from root uptake. Spinach is a more efficient cadmium accumulator than most leafy species because of its characteristic short harvest cycle, high water content, and leaf morphology that maximizes transpiration. Regional variation in finished-spinach cadmium concentrations reflects soil cadmium concentrations and phosphate-fertilizer use in the growing region.

## Ranges by source, region, and variety

The dominant axis of variance in spinach cadmium is soil-Cd loading at the growing site, mediated by soil pH and zinc status. Spinach is among the most efficient cadmium accumulators in the leafy-vegetable category — [[sources/efsa-cadmium-contam-2009|EFSA 2009]] places spinach mean Cd at the upper end of leafy-greens, with the broad leafy-vegetables category mean substantially lower in the same survey. Within spinach specifically, cultivar effects are documented: some commercial varieties accumulate cadmium more efficiently than others, and breeding programs have identified low-Cd-accumulator lines.

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|Cardini et al. 2025]]. *A novel approach for the identification of cadmium-chelating compounds in plant-based foods using SEC-ICP-MS/MS and SEC-QTOF-MS*, Analytical and Bioanalytical Chemistry | 2025 | Peer-reviewed | Cd occurrence in Seven plant-based food matrices: black-eyed beans, beluga lentils, tigernuts, basmati rice, sweet potato (cooked, dried, ground), beetroot leaves;... (n=7) |
| 2 | [[sources/saleem2025-nd-vegetables-hra\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/seyfferth2024-spinach-cd-pb-review\|Seyfferth et al. 2024]]. *Mitigating Toxic Metal Exposure Through Leafy Greens: A Comprehensive Review Contrasting Cadmium and Lead in Spinach*, GeoHealth | 2024 | Peer-reviewed | US Pb, Cd occurrence in Review of U.S. spinach surveys including USDA-FDA-EPA 1980s paired soil-plant study (n=105), FDA Total Diet Study 1991-2017 and... |
| 5 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 7 | [[sources/ali2022-lead-wastewater-crops-meta\|Ali et al. 2022]]. *Meta-analysis of public health risks of lead accumulation in wastewater, irrigated soil, and crops nexus*, Frontiers in Public Health | 2022 | Peer-reviewed | IN/PK/CN Pb occurrence in 24 studies from 13 countries (India, Pakistan, Iran, China, Egypt, Ethiopia, Kenya, Iraq, Morocco, Nigeria, North Korea, South... (n=24) |
| 8 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 10 | [[sources/efsa2021-aluminium-food-qa\|EFSA 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Safety Authority | 2021 | Government report | *[awaiting synthesis]* |
| 11 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 12 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | *[awaiting synthesis]* |
| 13 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for vegetable purees including spinach-containing products (as-consumed); multi-element context not available in FDA TDS |
| 14 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA dietary Cd exposure assessment; spinach identified as high-Cd vegetable (up to 0.2 mg/kg FW in EU surveys); Cd-exposure-driver framing for leafy greens |
<!-- END: hmi-source-legend -->

