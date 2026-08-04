---
type: source
raw_handle: FM_11489518
cite_key: huang2023-ml-rice-cadmium-soil
title: "Machine learning-based prediction of cadmium concentration in rice grain from soil properties"
authors: [Huang Y]
year: 2023
publication: "Fundamental Research"
doi: 10.1016/j.fmre.2023.02.016
access_url: "https://doi.org/10.1016/j.fmre.2023.02.016"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: raw/markdown/FM_11489518/FM_11489518.md
metals: [Cd]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice-grain, paddy-soil]
jurisdictions: [CN]
near_duplicates: []
sample_n: 601
sample_population: "601 paired soil-rice grain samples from Xiangtan County, Hunan Province, China, collected in 2016, 2019, and 2020; major rice-producing region with known Cd contamination history"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Huang et al. 2023 — Machine learning predicts rice grain Cd from soil properties in Hunan, China

## Overview

This study uses machine learning (support vector machine, SVM) to predict cadmium (Cd) concentration in rice grain from soil physicochemical properties, using 601 paired soil-rice grain samples from Xiangtan County, Hunan Province, one of China's most severely Cd-contaminated rice-producing regions. The SVM model achieved R² of 0.87 on the test set. The most important predictor was the iron-manganese oxide bound Cd fraction (55.5 percent feature importance), followed by soil pH (22.2 percent), soil moisture (13 percent), and reducible Mn (8.4 percent). The practical significance of the pH finding is underscored by the soil liming scenario analysis: raising soil pH to 6.5 through liming would reduce the proportion of rice grain samples exceeding China's maximum permissible limit (MPL, 0.2 mg/kg) from 36.5 percent to 2 percent, demonstrating that pH management is the highest-leverage mitigation lever for Cd in rice in this region.

## Key numbers

Sample size: n=601 paired soil-rice samples over 3 years (2016, 2019, 2020). SVM model R²=0.87 (test set). 53.9 percent of rice grain samples exceeded China MPL for Cd (0.2 mg/kg = 200 ppb). Feature importance: Fe-Mn oxide-bound Cd 55.5%; soil pH 22.2%; moisture 13.0%; reducible Mn 8.4%. Liming scenario: raising soil pH to 6.5 reduces exceedance rate from 36.5% to 2%. China MPL for Cd in rice: 0.2 mg/kg (GB 2762). Study area: Xiangtan, Hunan Province, historically contaminated from mining and smelting operations.

## Methods (brief)

SVM with radial basis function kernel; cross-validation used for model selection; feature importance via SHapley Additive exPlanations (SHAP) values. Soil Cd fractionation by sequential extraction (BCR protocol). Rice grain Cd by ICP-MS after acid digestion. pH measured in 1:2.5 soil-water suspension. Liming scenario modelled by adjusting soil pH inputs to the trained SVM. Limitation: model trained on Xiangtan data; generalisability to other Cd-contaminated regions with different soil types requires validation.

## Implications

Certification: High value for rice Cd risk characterisation and mitigation. Quantifies the pH threshold for substantial Cd exceedance reduction in a high-risk Chinese origin region. Supports sourcing specifications (avoid rice from Hunan regions with low soil pH and high Fe-Mn-bound Cd) and agronomic mitigation recommendations (liming to pH 6.5).

Courses: Core reference for modules on cadmium in rice, soil-to-grain transfer factors, machine learning in food safety risk assessment, and pH management as a mitigation lever.

App: Supports the rice ingredient Cd profile; documents that over half of sampled Xiangtan rice exceeds China MPL, providing a geographic breakdown data point for the ingredient page's `geographic_breakdown` variance sub-fields. Hunan rice-origin flag in the app model should carry elevated Cd risk weighting.

Microbiome: Not addressed.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[ingredients/rice]]
- [[supply-chain/soil]]
- [[regulations/cn-gb-2762]]
- [[mitigation/agronomic-cadmium-rice]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [5028098bf](https://github.com/paleofoundation/heavymetalindex/commit/5028098bf) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
