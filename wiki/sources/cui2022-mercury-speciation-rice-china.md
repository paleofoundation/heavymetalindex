---
type: source
raw_handle: FM_10125373
cite_key: cui2022-mercury-speciation-rice-china
title: "Source apportionment of speciated mercury in Chinese rice grain using a high-resolution model"
authors: [Cui Y, Wu Q, Liu K, Wang S, Wang X, Jiang T, Meng B, Wu Y, Guo J]
year: 2022
publication: "ACS Environmental Au"
doi: 10.1021/acsenvironau.1c00061
access_url: "https://doi.org/10.1021/acsenvironau.1c00061"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_10125373/FM_10125373.md
metals: [tHg, MeHg]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [grain-tissue, rice]
jurisdictions: [CN]
near_duplicates: []
sample_n: null
sample_population: "Model-simulated distribution across 464,368 Chinese rice paddy grids (1 km × 1 km), validated against field measurements"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Cui et al. 2022 — Source apportionment of mercury in Chinese rice grain

## Overview

This study develops and applies a high-resolution (1 km × 1 km grid) rice paddy mercury transport and transformation model (RMTTM) to simulate total mercury (THg) and methylmercury (MeHg) concentrations across all Chinese rice paddies in 2017. The model quantifies source contributions (atmospheric deposition, soil mercury, irrigation water) to rice grain mercury and identifies heavily polluted regions. Simulated values are validated against published field measurements from multiple Chinese provinces.

## Key numbers

Simulated rice grain THg (China, 2017):

- Range: 0.08–243.6 µg/kg (ppb), wet weight
- Median: 5.65 µg/kg (ppb)
- Mean national average below the Chinese regulatory limit of 20 µg/kg for rice grain
- 0.72% of grids classified as heavily polluted (THg > 20 µg/kg); these correspond to areas of nonferrous metal smelting, cement production, and Hg/metal mining
- Highest-polluted provinces: Guizhou, Guangxi, Hunan, Guangdong, Jiangxi (all in South China)

Simulated rice grain MeHg (China, 2017):

- Range: 0.03–238.6 µg/kg (ppb)
- Median: 1.30 µg/kg (ppb)
- Highest provincial averages: Guizhou (5.54 µg/kg), Heilongjiang (2.93 µg/kg), Hunan (2.64 µg/kg)
- Approximately 0.27% of grids exceeded 100 µg/kg MeHg; maximum exceeded 238.6 µg/kg in Guizhou

Source apportionment (national average for THg):

- Atmospheric mercury deposition: 81.3% of rice grain THg
- Soil mercury: 17.8%
- Irrigation water mercury: 0.9%

Source apportionment (national average for MeHg):

- Soil mercury: 64.8%
- Atmospheric deposition: ~35%

In-situ methylation in paddy soil is the dominant pathway increasing rice grain MeHg, with soil organic matter (SOM) a key driver of methylation potential.

Model validation: NMB = −9.8%, NME = 40.3% for THg; NMB = −13.3%, NME = 41.6% for MeHg — acceptable performance for a national-scale model.

## Methods (brief)

Rice paddy mercury transport and transformation model (RMTTM) using unit cell mass conservation at 1 km × 1 km resolution. Model inputs: atmospheric GEM/RGM/PBM deposition, soil Hg distribution (national soil survey), irrigation water Hg, rice growth phenology, Hg methylation and demethylation rates. Validated against published field observations from Chinese rice monitoring programs. ACS Environmental Au: gold open access (CC BY 4.0). DOI: 10.1021/acsenvironau.1c00061.

Note: this is a modeling study. The simulated distributions are probabilistic and should be treated as modeled estimates validated against—but not identical to—direct field measurements. The study is peer-reviewed and published in a reputable ACS journal.

## Implications

Certification: The national-scale THg and MeHg distribution data for Chinese rice is directly relevant to HMT&C. Median grain MeHg of 1.30 µg/kg and THg of 5.65 µg/kg for Chinese rice provide context for the rice ingredient page. The geographic breakdown identifies Guizhou/South China as high-risk origin regions, consistent with industrial-activity hot spots.

Courses: Excellent for the mercury-in-rice module: source attribution data (81% from atmospheric deposition) is counterintuitive and important for understanding why reducing soil contamination alone may be insufficient to reduce rice mercury in China.

App: Contributes to contamination_profile for rice, MeHg and tHg sub-blocks. Median values (THg 5.65 ppb, MeHg 1.30 ppb) are model-derived but validated against field data from China. Should be flagged as China-specific modeled values with geographic_breakdown noting elevated concentrations in Guizhou/South China provinces.

Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[ingredients/rice]]
- [[metals/mercury-total]]
- [[metals/mercury-methyl]]
- [[supply-chain/atmospheric-mercury-deposition-rice]]
- [[regulations/china-gb-2762-mercury-rice]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [8c1225ead](https://github.com/paleofoundation/heavymetalindex/commit/8c1225ead) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
