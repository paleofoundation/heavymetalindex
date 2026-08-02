---
type: source
raw_handle: MFK_li2017
cite_key: li2017-jiangsu-rice-cadmium-transfer
title: "Cadmium transfer from contaminated soils to the human body through rice consumption in southern Jiangsu Province, China"
authors: [Li T, Chang Q, Yuan X, Li J, Ayoko GA, Frost RL, Chen H, Zhang X, Song Y, Song W]
year: 2017
publication: "Environmental Science: Processes & Impacts"
doi: "10.1039/C6EM00631K"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/li2017.pdf"
raw_sha256: "1e74aff554b0fa0edfec5da152591bc71969fcfdaa6426e2db5305abbf479742"
access_url: "https://doi.org/10.1039/C6EM00631K"
metals: [Cd]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]"]
matrices: [rice-grain, paddy-soil, dry-weight]
jurisdictions: [CN]
near_duplicates: []
sample_n: 70
sample_population: "Seventy paired Indica rice-grain and 0-15 cm soil samples collected at maturity in July 2014 from five areas of southern Jiangsu Province, China: Yifeng, Dingshu, Ehu, Wangting, and Taicang, with 14 paired samples per area."
updated: 2026-06-08
---

# Li et al. 2017 — Cadmium transfer from Jiangsu soils into rice

## Overview

Li and colleagues studied cadmium transfer through a soil-rice-human chain in southern Jiangsu Province, China. The authors collected 70 paired Indica rice-grain and surface-soil samples, measured Cd and Zn by ICP-MS, and used RIVM in vitro digestion to estimate bioaccessible Cd in rice grain. The source is a supply-chain occurrence paper: rice-grain Cd is the product-facing evidence, while soil chemistry and extractable Cd/Zn are context for predicting rice Cd and bioaccessible rice Cd.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Paired samples | 70 rice-grain/soil pairs, 14 from each of five southern Jiangsu areas |
| Rice type | All rice samples were Indica rice |
| Rice-grain Cd rank by area | DS > YF > EH > TC > WT |
| Rice samples above the source-cited 0.2 mg kg-1 staple-rice criterion | DS 100%, YF 42.86%, EH 14.29%, TC 7.14%, WT 0% |
| Total soil Cd range | 0.17 to 10.50 mg kg-1 |
| Mean soil Cd across studied areas | 1.45 mg kg-1 |
| CaCl2-Cd fraction of total soil Cd | 0.40-26.92%, with mean value 9.06% |
| Soil-to-rice transfer fraction | About 14.89% of total Cd concentration in soils transferred from soil to rice grain |
| Soil-to-human bioaccessible fraction via rice | Cd Bio in rice accounted for about 3.19% of total Cd concentration in soil |
| Total rice Cd prediction model | Cd rice grains = 0.167 + 2.547·CaCl2-Cd -0.532·CaCl2-Zn; R2=0.862 |
| Total rice Cd simple model | Y = -0.033 + 2.245X1; R2=0.785, where X1 is CaCl2 extracted Cd concentration in soil |
| Total rice Cd vs bioaccessible rice Cd | Y = 0.13X - 0.0015; R2 = 0.82, p<0.05, where X is total Cd and Y is Cd Bio in rice |
| Bioaccessible rice Cd MLR model 1 | Y = 0.011 + 0.086X1; R2=0.307 |
| Bioaccessible rice Cd MLR model 2 | Y = -0.035 + 0.083X1 - 6.580-5X2; R2=0.511 |
| Bioaccessible rice Cd curve models | Quadratic R2=0.862; cubic R2=0.892; the authors chose the cubic model as best fit |
| Rice-grain concentration table availability | Exact rice-grain Cd concentrations by sample or area were not reported as a readable numeric table in the extracted text |

The rice-grain exceedance percentages are product-facing occurrence evidence for rice-bulk-grain. Soil Cd, CaCl2-extractable Cd/Zn, and regression equations are retained as supply-chain context and should not be entered as product concentration values.

## Methods (brief)

The authors collected paired rice grains and 0-15 cm soils from Yifeng, Dingshu, Ehu, Wangting, and Taicang in southern Jiangsu Province. Soil samples were air-dried, ground, and sieved; rice grains were oven-dried at 105 deg C for 1 h and then at 70 deg C to constant weight, ground, and sieved. Rice samples were digested with HClO4 and HNO3 for 6 hours, and Cd/Zn concentrations were determined by ICP-MS (XSERIES, Thermo Electron). CaCl2-extractable Cd and Zn were obtained with 0.01 M CaCl2 shaken for 16 hours at a 10:1 solution-to-soil ratio. Cd bioaccessibility in rice grain was measured with the RIVM in vitro digestion model. QA/QC used certified reference materials GBW10010 for rice plants and GBW07442, GBW07443, GBW07402, GBW07403, GBW07404, and GBW07406 for soils; recoveries were 93-105% for GSB-1 and 95-105% for the soil CRMs, with replicate relative difference below 5%.

## Implications

This source supports rice-bulk-grain cadmium routing for a Chinese contaminated-soil supply-chain setting. It provides an unusually explicit bridge between soil phytoavailable Cd, total rice-grain Cd, and bioaccessible rice Cd, but the source page should keep those compartments separate: soil numbers describe the field environment, rice exceedance percentages describe the edible product, and RIVM outputs describe digestive bioaccessibility. Because the extracted text does not provide a clean sample-level or area-level numeric rice Cd table, downstream pooling should use this paper cautiously unless the formatted final article or figure data are retrieved.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the accepted-manuscript text, methods, soil Table 1, regression Tables 2-4, and Results prose were readable.
- DOI verified from the accepted-manuscript cover and running headers as `10.1039/C6EM00631K`; DOI, raw handle `MFK_li2017`, and cite-key checks found no existing source page before creation.
- All numbers above were checked against the extracted abstract, sampling/methods text, Results sections 3.1-3.5, and Tables 1-4.
- Units are preserved as reported (`mg kg-1`, percentages, R2 values); no dry-weight to wet-weight or food-basis conversion was performed.
- Speciation: cadmium is reported as Cd; no arsenic, mercury, or chromium speciation issue applies.
- Rice occurrence vs soil context: soil Cd and CaCl2-extractable values are not product concentration values. This page routes to rice because the source reports rice-grain Cd exceedance percentages and rice-grain Cd models from paired soil/rice sampling.
- Exact sample-level or area-mean rice Cd concentrations were not cleanly available in the extracted text; the page therefore does not invent or visually estimate them from figures.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new product or ingredient slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [c12da7209](https://github.com/paleofoundation/heavymetalindex/commit/c12da7209) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
