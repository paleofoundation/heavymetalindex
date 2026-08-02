---
type: source
raw_handle: MFK_cadmium-and-lead-content-in-gluten-and-gluten-free
cite_key: gacal2023-cadmium-lead-bread-gluten-free-poland
title: "Cadmium and lead content in gluten and gluten-free bread available on Polish market - potential health risk to consumers"
authors: [Gacal M, Gut-Pietrasz K, Cwielag-Drabek M]
year: 2023
publication: "Annales Academiae Medicae Silesiensis"
doi: 10.18794/aams/172906
no_doi_assigned: false
access_url: "https://doi.org/10.18794/aams/172906"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-SA 4.0"
raw_path: "raw/Manual Fetch Kimi /03_Grains_and_Grain_Products/03_Grains_and_Grain_Products/Cadmium and lead content in gluten and gluten-free bread.pdf"
raw_sha256: 83e76c74efe28246742514850941b5a12262945654f9069dd59d5c7ec92052b4
near_duplicates: []
metals: [Cd, Pb]
ingredients: ["[[ingredients/wheat]]", "[[ingredients/non-rice-grains]]", "[[ingredients/rice-flour]]", "[[ingredients/corn]]", "[[ingredients/bread]]"]
products: ["[[products/bread-and-baked-goods]]"]
matrices: [cereal-grain, dietary-intake]
jurisdictions: [PL, EU]
sample_n: 50
sample_population: "50 bread samples purchased in Silesia Province, Poland: 10 gluten-free, 12 wheat-rye, 20 wheat, and 8 rye."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# Gacal et al. 2023 - Cadmium and lead in gluten and gluten-free bread, Poland

## Overview

Gacal et al. (2023) measured cadmium and lead in 50 bread samples purchased in Silesia Province, Poland, then estimated non-cancer and cancer risk across eight age groups. The study is a finished-product bread occurrence source for Cd and Pb, with separate rows for gluten-free, wheat-rye, wheat, and rye bread. The authors' initial hypothesis was that gluten-free bread would be more contaminated because many gluten-free formulations use rice or maize flour, but measured Cd was lowest in the gluten-free group and Pb was above LOQ in only one wheat-bread sample.

## Key numbers

Table VI reports Cd and Pb concentrations in mg/kg for the tested bread samples.

| Bread type | n | Cd min mg/kg | Cd mean mg/kg | Cd max mg/kg | Pb result |
| --- | ---: | ---: | ---: | ---: | --- |
| Gluten-free | 10 | < LOQ | 0.021 | 0.040 | all < LOQ |
| Wheat-rye | 12 | 0.030 | 0.072 | 0.164 | all < LOQ |
| Wheat | 20 | 0.022 | 0.050 | 0.090 | one sample above LOQ; max 0.152 mg/kg |
| Rye | 8 | 0.008 | 0.041 | 0.088 | all < LOQ |

Cd ranking by mean concentration: wheat-rye > wheat > rye > gluten-free.

Method limits:

| Metal | LOD | LOQ | Wavelength |
| --- | ---: | ---: | ---: |
| Cd | 0.0043 mg/kg | 0.008 mg/kg | 228.8 nm |
| Pb | 0.044 mg/kg | 0.08 mg/kg | 217 nm |

Regulatory comparators cited by the source:

- EU Regulation 2021/1323 set Cd maximum levels for cereals at 0.10 mg/kg wet weight, with rye and barley at 0.050 mg/kg.
- EU Regulation 2021/1317 set Pb maximum levels for cereals and pulses at 0.20 mg/kg wet weight.
- In this study, Cd exceeded the rye-specific 0.050 mg/kg comparator in 2 of 8 rye samples, and one wheat-rye sample exceeded the 0.10 mg/kg general cereal comparator. The single detectable Pb sample did not exceed 0.20 mg/kg.

Risk-model inputs and selected outputs:

| Parameter | Value |
| --- | --- |
| Consumption assumption | 100 g bread/day, described as approximately 4 slices |
| Cd RfD | 0.0010 mg/kg/day |
| Pb RfD | 0.0036 mg/kg/day |
| Cd slope factor | 6.1 mg/kg/day |
| Pb slope factor | 8.5 mg/kg/day |
| Age groups | 6-11 months, 1-<2 years, 2-<3 years, 3-<6 years, 6-<11 years, 11-<16 years, 16-<21 years, adult |

Selected risk results:

- For maximum Cd in wheat-rye bread, Cd HQ exceeded 1 for children aged 6-11 months (1.78), 1-<2 years (1.44), and 2-<3 years (1.19). Older age groups were below 1.
- For mean Cd in wheat-rye bread, Cd CR was 1.3 x 10^-4 for children aged 6-11 months and 1.0 x 10^-4 for children aged 1-<2 years.
- For maximum Cd in wheat-rye bread, Cd CR exceeded 10^-4 for children aged 6 months to <6 years.
- For maximum Cd in wheat bread, Cd CR exceeded 10^-4 for children aged 6 months to <3 years.
- For the single maximum Pb wheat-bread sample, Pb HQ did not exceed 1 in any age group, but Pb CR exceeded 10^-4 for children aged 6 months to <3 years.
- For combined maximum Pb and Cd in wheat bread, HI exceeded 1 for children aged 6-11 months (1.43) and 1-<2 years (1.16); CRI exceeded 10^-4 for children aged 6 months to <11 years.

## Methods

The study analyzed 50 bread samples purchased in various cities in Silesia Province, Poland. The sample set consisted of 10 gluten-free breads, 12 wheat-rye breads, 20 wheat breads, and 8 rye breads. The authors homogenized the bread and prepared 1 g (+/- 3%) analytical portions.

Samples were mineralized in a closed microwave system with 8 mL ultrapure nitric acid and 1 mL hydrogen peroxide, then diluted to 25 mL. Cd and Pb were determined by electrothermal atomic absorption spectrometry (ET-AAS). The Pb method used a matrix modifier containing ammonium dihydrogen phosphate and magnesium nitrate in nitric acid. The authors monitored validity with duplicate samples and standard-addition checks.

Health-risk calculations followed US EPA ingestion equations. Average daily dose (ADD), hazard quotient (HQ), hazard index (HI), cancer risk (CR), and cancer risk index (CRI) were calculated from the measured concentrations, assumed ingestion rate, age-specific body weights, RfDs, and slope factors.

## Speciation and methods caveats

- Cd and Pb are reported as total element concentrations in finished bread. No chemical species are distinguished.
- The study did not measure arsenic, mercury, nickel, or gluten concentration. The source discusses gluten-free formulation and literature on arsenic/mercury in gluten-free diets as background only.
- The 100 g/day ingestion assumption was applied to every age group. The authors explicitly note that this is high for the youngest groups, though not impossible.
- The EU 2021 amendment regulations cited by the source have since been superseded by Regulation (EU) 2023/915; they remain relevant here because they are the comparators used in the paper.

## Implications

Standards work: This source contributes Polish/EU finished-bread Cd and Pb occurrence evidence for bread-and-baked-goods routing. It is especially useful for distinguishing wheat-rye, wheat, rye, and gluten-free bread within one sampling frame.

Courses: The study is a strong teaching case for age-stratified exposure math. A concentration that produces HQ below 1 in adults can exceed or approach risk-screen values in small children when the same serving assumption is applied across body weights.

App: The bread-type Cd means can support occurrence-context displays for Polish/EU bread products. They are not certification limits, and the risk-model outputs depend heavily on the 100 g/day assumption.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[metals/lead]]
- [[ingredients/wheat]]
- [[ingredients/non-rice-grains]]
- [[ingredients/rice-flour]]
- [[ingredients/corn]]
- [[ingredients/bread]]
- [[products/bread-and-baked-goods]]
- [[regulations/eu-2021-1323-cadmium-cereals-superseded]]
- [[regulations/eu-2021-1317-lead-cereals-superseded]]

## Verification notes

- Merge-enhanced 2026-05-18 from the full manual-fetch PDF path and SHA-256 recorded in frontmatter.
- Replaced invalid/nonexistent regulation links with source-specific superseded EU 2021 amendment pages created during this ingest.
- Replaced non-vocabulary matrix labels such as wheat-bread and gluten-free-bread with common matrix labels; bread subtype details remain in `sample_population` and the Key numbers table.
- Strict brand-firewall check: no consumer brands are named. The source says gluten-free samples considered brand availability/dissemination, but this wiki page does not identify those brands.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [22a69e60d](https://github.com/paleofoundation/heavymetalindex/commit/22a69e60d) | 2026-05-19 | minor | Narrative text revised |
| [9a863c736](https://github.com/paleofoundation/heavymetalindex/commit/9a863c736) | 2026-05-18 | major | 3 sections added and 1 removed; narrative text revised |
| [c3a27e230](https://github.com/paleofoundation/heavymetalindex/commit/c3a27e230) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
