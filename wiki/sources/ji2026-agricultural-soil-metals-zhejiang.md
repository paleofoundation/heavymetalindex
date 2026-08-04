---
type: source
raw_handle: FM_12962467
cite_key: ji2026-agricultural-soil-metals-zhejiang
title: "Assessing spatial variability and source identification of heavy metals in agricultural soils: A geostatistical and multivariate analysis of coastal eastern Zhejiang, China"
authors: [Ji J, Wu X]
year: 2026
publication: "PLOS ONE"
doi: 10.1371/journal.pone.0344184
access_url: https://doi.org/10.1371/journal.pone.0344184
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_12962467/FM_12962467.md
metals: [Cr, Pb, Cd, tHg, As]
ingredients: ["[[ingredients/rice]]", "[[ingredients/camellia-sinensis]]", "[[ingredients/vegetables]]"]
products: []
matrices: [agricultural-soil]
jurisdictions: [CN]
near_duplicates: []
sample_n: 877
sample_population: "877 agricultural soil samples from four cities in coastal eastern Zhejiang Province, China (Ningbo, Taizhou, Shaoxing, Jinhua); paddy fields (48.35%), upland fields (27.94%), tea gardens, orchards"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Ji and Wu 2026 — Heavy metal spatial variability and source apportionment in agricultural soils of eastern Zhejiang

## Overview

This study applied geostatistics, principal component analysis (PCA), positive matrix factorization (PMF), and finite mixture modeling (FMM) to characterize the spatial distribution and source contributions of five heavy metals (Cr, Pb, Cd, Hg, As) across 877 agricultural soil sampling sites in coastal eastern Zhejiang Province, China. The study area spans four cities (Ningbo, Jinhua, Shaoxing, Taizhou) and encompasses paddy fields, upland fields, tea gardens, orchards, bamboo plantations, and forests. Overall soil quality was classified as good at most sites, but notable exceedances of environmental background values were detected at a subset of locations.

Mean concentrations in agricultural topsoil were: Cr 65.17 mg/kg, Pb 35.08 mg/kg, Cd 0.18 mg/kg, Hg 0.10 mg/kg, and As 5.44 mg/kg. Maximum observed concentrations exceeded environmental background values for Zhejiang Province by 3.96× (Cr), 11.73× (Pb), 7.42× (Cd), 12.65× (Hg), and 7.29× (As). All five metals fall below national Grade II standards (GB 15618) at the mean, but hotspot sites substantially exceed them. Mercury showed extreme spatial variability (coefficient of variation 127.5%) and Pb showed high variability (83.1%), both consistent with dominant anthropogenic input.

PMF-based source apportionment attributed the dominant fraction to traffic/mobile sources (52.5%), followed by industrial sources (30.4%) and agricultural sources (17.1%). The spatial pattern shows lower contamination in the southern subregion and higher contamination in the northern plains, consistent with industrial and traffic density gradients. Paddy fields account for 48.35% of sampling area, making this dataset directly relevant to rice and vegetable supply-chain contamination in a major food-producing coastal province.

## Key numbers

- Sample count: n = 877 surface soil samples (0–20 cm plow layer; 0–60 cm for fruit trees and forests)
- Cr mean: 65.17 mg/kg; max: 374 mg/kg (3.96× background, 1.87× Grade II limit)
- Pb mean: 35.08 mg/kg; max: 623 mg/kg (11.73× background, 2.08× Grade II limit)
- Cd mean: 0.18 mg/kg; max: 1.56 mg/kg (7.42× background, 2.6× Grade II limit)
- Hg mean: 0.10 mg/kg; max: 2.91 mg/kg (12.65× background, 5.82× Grade II limit)
- As mean: 5.44 mg/kg; max: 62.0 mg/kg (7.29× background, 2.07× Grade II limit)
- Source apportionment: traffic 52.5%, industrial 30.4%, agricultural 17.1%
- Land use at sampling sites: paddy field 48.35%, upland field 27.94%, tea/orchard/other remainder
- Analytical methods: ICP-OES (Cr), ICP-MS (Pb, Cd), CV-AFS (Hg), HG-AFS (As)
- Detection limits: Cr 3.60 µg/g, Pb 0.91 µg/g, Cd 0.019 µg/g, Hg 0.53 ng/g, As 0.069 µg/g
- Reference materials: GSS-1 and GSS-4

## Methods (brief)

Soil samples collected 2013 (Zhejiang Province Agricultural Land Soil Heavy Metal Pollution Survey) and analyzed retrospectively. Composite samples from ≥3 collection points per site. Ordinary Kriging interpolation for spatial analysis (ArcGIS). PCA for exploratory source identification. PMF for quantitative source apportionment. FMM via Gaussian mixture modeling for probabilistic source clustering. Sampling protocol varied by field size: spot (small irregular), grid (medium regular), serpentine (large uniform).

Note: Sampling conducted in 2013; paper published 2026. Concentrations reflect the 2013 state of agricultural soils in eastern Zhejiang.

## Implications

Certification: Provides supply-chain context for ingredients sourced from Zhejiang Province, one of China's major rice, tea, and vegetable producing regions. Maximum soil Cd and Hg values indicate hotspot risk that could transfer to crops. Traffic is the dominant anthropogenic source, with implications for roadside agricultural land.

Courses: Demonstrates geostatistical and receptor-modeling approaches for soil contamination source apportionment; good illustration of how traffic emissions dominate soil Pb and Hg in industrialized agricultural zones.

App: Supports geographic risk adjustment for ingredients grown in eastern Zhejiang, particularly paddy rice where Cd and As soil levels exceed background at hotspot sites.

Microbiome: Not directly addressed.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[metals/mercury]]
- [[metals/chromium]]
- [[ingredients/rice]]
- [[supply-chain/soil]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [15eca2e78](https://github.com/paleofoundation/heavymetalindex/commit/15eca2e78) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
