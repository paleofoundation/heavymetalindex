---
type: source
raw_handle: FM_8809552
cite_key: wade2022-cacao-cadmium-drivers
title: "Drivers of cadmium accumulation in Theobroma cacao L. beans: A quantitative synthesis of soil-plant relationships across the Cacao Belt"
authors: [Wade J, Ac-Pangan M, Favoretto VR, Taylor AJ, Engeseth N, Margenot AJ]
year: 2022
publication: "PLOS ONE"
doi: 10.1371/journal.pone.0261989
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_8809552/FM_8809552.md
metals: [Cd]
ingredients: ["[[ingredients/cocoa]]", "[[ingredients/chocolate]]"]
products: []
matrices: [food, agricultural-soil, plant-tissue]
jurisdictions: [EC, PE, CO, CR, CIV, GH, ID, PG, VE, DO]
near_duplicates: []
sample_n: 2127
sample_population: "489 site-years from 31 studies across 10 cacao-producing countries; 2,127 observations compiled from systematic literature search"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Wade et al. 2022 — Drivers of cacao bean cadmium across the Cacao Belt

## Overview

This systematic review and quantitative synthesis compiles soil, leaf, and bean cadmium data from 31 studies across 489 site-years and 10 countries within the global Cacao Belt (roughly 20 degrees latitude on either side of the equator). Using boosted regression trees (BRTs), the authors identify total soil cadmium concentration and soil pH as the dominant predictors of bean Cd content, with leaf Cd as a secondary predictor, while available (extractable) soil Cd has negligible explanatory power independent of total soil Cd. The practical implication is that soil-based remediation strategies are less promising than plant physiology approaches such as low-Cd-accumulating rootstocks or cultivar breeding.

## Key numbers

Dataset: 31 eligible studies (screened from 785 abstracts), 489 site-years, 2,127 observations from 10 countries. Country representation: Central and South America 71% of studies (Ecuador particularly overrepresented); West Africa 23%; Southeast Asia 6%. Côte d'Ivoire, which produces 40–45% of global cacao, is absent from the literature, a gap the authors flag explicitly.

EU regulatory threshold: 0.8 mg/kg Cd for high-cocoa-solid products (e.g., dark chocolate); threshold scales from 0.1 to 0.8 mg/kg Cd depending on cocoa-solids content of the product (EU Regulation cited throughout). The authors use 0.8 mg/kg as the conservative threshold for whole beans.

Total soil Cd: available-Cd concentrations typically <1 mg Cd/kg soil; total Cd typically <3 mg Cd/kg soil at surface (0–30 cm). Both available and total Cd increase markedly at depths below 25–35 cm, suggesting surface-biased soil sampling may underestimate the Cd available for deep cacao taproot uptake.

Bioconcentration factor (BCF, bean Cd / total soil Cd): values >1 indicate bioaccumulation. Total soil Cd effect on bean Cd plateaus at approximately 1.5 mg Cd/kg soil.

Soil pH effect: Cd bioavailability (as reflected in bean Cd) increases at lower pH, with the decline in bioavailability beginning at a lower pH than model systems predict; effects above pH 5.5–6.0 are variable, possibly due to antagonism from calcium.

BRT variable importance: total soil Cd and soil pH are the top two predictors; leaf Cd is the third; available soil Cd and soil organic carbon (SOC) have negligible independent effects, though soil pH and SOC reduce the degree of bioconcentration of total soil Cd.

## Methods (brief)

Systematic literature search across Web of Science, Scopus, and CAB Abstracts (September–October 2020). Eligibility: studies measuring soil Cd in cacao cropping systems or measuring both leaf and bean Cd. Inter-rater reliability for abstract screening: Cohen's kappa 0.73–1.00. Data extraction used WebPlotDigitizer for continuous data from figures. Boosted regression trees implemented in R using the gbm, rsample, caret, and xgboost packages; 2,000 trees with tuning across 10,098 parameter permutations, selecting the model with lowest RMSE on an 80% training split. Soil pH harmonized to water-measured pH; SOC converted from loss-on-ignition organic matter using factor 1.74. GPS coordinates linked to WorldClim MAP and MAT estimates. Key limitation: West Africa (the dominant cacao-producing region) is severely underrepresented.

## Implications

Certification: This paper is directly relevant to HMT&C cocoa and chocolate product-category thresholds. The EU 0.8 mg/kg Cd limit for dark chocolate products is the operative regulatory cap; the study documents that this limit is frequently exceeded across much of the Cacao Belt, particularly in Central and South America. The finding that total soil Cd and soil pH, not available Cd, drive bean Cd has sourcing implications: soil remediation is unlikely to be cost-effective; origin-based and rootstock-based supplier specifications are the more tractable mitigation levers.

Courses: Strong case study for supply-chain sourcing decisions; illustrates why soil Cd measurements alone are insufficient to predict harvest Cd without pH information, and why West African origin cocoa may carry lower Cd risk than South American high-altitude origins (though direct West Africa data gaps need flagging).

App: For cocoa and cacao-derivative ingredients, the quantitative synthesis supports a geographic breakdown in the contamination profile: South American (especially Ecuadorian high-altitude) origins carry higher Cd risk than West African origins for reasons explicable by soil chemistry, though the West African data gap limits quantitative confidence.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[ingredients/cocoa-beans]]
- [[ingredients/cocoa]]
- [[products/chocolate]]
- [[supply-chain/soil-cadmium]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [e4c0b2340](https://github.com/paleofoundation/heavymetalindex/commit/e4c0b2340) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
