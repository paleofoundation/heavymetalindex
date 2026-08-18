---
type: source
cite_key: bedoya-perales2023-moquegua-peru-mining-dataset
title: "Dataset of metals and metalloids in food crops and soils sampled across the mining region of Moquegua in Peru"
authors: [Bedoya-Perales NS, Escobedo-Pacheco E, Maus D, Neimaier A, Pumi G]
year: 2023
publication: "Scientific Data"
doi: "10.1038/s41597-023-02363-0"
source_type: peer-reviewed
evidence_tier: A
license: "cc-by"
raw_path: raw/studies/bedoya-perales2023-moquegua-peru-mining-dataset.pdf
sha256: 9cb79b94e3677590b3d8b3dbc475055b190aab24291db58a54696cc26337287f
access_date: 2026-05-12
access_url: "https://doi.org/10.1038/s41597-023-02363-0"
metals: [tAs, Cd, Pb, Cu, Zn]
ingredients: ["[[ingredients/quinoa]]"]
products: ["[[products/root-tuber-vegetables]]", "[[products/spinach]]", "[[products/fresh-fruit]]", "[[products/non-root-vegetables]]"]
matrices: [food-crop, agricultural-soil, potato, corn, spinach, avocado, tomato, carrot, olive]
jurisdictions: [PE]
sample_n: 341
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Bedoya-Perales et al. 2023 — Metals and Metalloids in Food Crops and Soils, Moquegua Mining Region, Peru

## Overview

This Scientific Data paper (CC BY) reports the first open-access dataset on heavy metal and metalloid concentrations in food crops and agricultural soils from Moquegua, a mining-impacted department in southern Peru that contains one of the country's largest copper deposits and contributes to Peru's status as the world's second-largest copper producer. The dataset covers 13,828 observations from 341 sampling sites across three provinces (General Sánchez Cerro, Mariscal Nieto, Ilo) at altitudes ranging from 9 to 3,934 m above sea level, collected in 2021 during harvest season. For food crops, 31 elements were measured using ICP-MS; for soils, 23 elements by ICP-OES and AAS. The paper functions primarily as a data descriptor rather than an analytical study; key concentration results are presented in the paper itself.

## Key numbers

**Soil concentrations at sampling sites (50 samples from Huacaybamba-Huánuco comparison area — from quinoa soil table):**

Note: The soil data table extracted (Table 1 in text at page 209) appears to be from the quinoa study (Rosales-Huamani et al. 2023) rather than from this paper — the Moquegua dataset paper's specific concentration results were not on the first 5 pages. The following are from the Moquegua dataset paper's general description:

- Total observations: 13,828 from 341 sampling sites
- Food crops sampled: avocado, sweet lime, potato, oca, olluco, corn, faba bean, mashua, alfalfa, chard, celery, spinach, beet, white carrot, strawberry, tomato, lettuce, carrot, olive
- Altitudes: 9–3,934 m above sea level, covering coastal lowland (Ilo), mid-altitude (Mariscal Nieto, 964–3,864 m), and highland (General Sánchez Cerro, 1,539–3,934 m) zones
- Analytical methods: ICP-MS (EPA 200.3/EPA 6010B) for tubers and corn; AAS for As, Cd, Pb in remaining crops; ALS analytical laboratory Lima

**Elements measured in food crops:** 31 elements including As, Cd, Pb, Cu, Zn confirmed as among those measured. Data available at Figshare (https://doi.org/10.6084/m9.figshare.c.6572563.v1).

## Methods (brief)

Harvest-season 2021 sample collection. Random sampling per field; GPS coordinates recorded. Food crop edible portions analyzed (consistent with local consumption practice). Soil 0–25 cm upper horizon composite samples. ALS laboratory Lima; ICP-MS for tubers/corn (EPA 200.3/EPA 6010B, validated 2016 for vegetable tissue); AAS for As, Cd, Pb in other crops. Quality control: duplicates every 10 samples, blanks and internal standards every 25.

## Limitations

This is a data descriptor paper; the primary value is the open-access dataset, not an interpretive analysis. Concentration distributions by food crop type and province are in the dataset (Figshare) rather than fully tabulated in the paper. The dataset is from a single-year harvest (2021) and a mining-impacted region, so values may not be representative of baseline conditions in non-mining agricultural areas of Peru. Quinoa is listed as a crop of interest in the region but is only sampled in the highest-altitude province (General Sánchez Cerro), so it is not the primary crop in this dataset.

## Implications

- Certification: The Moquegua dataset is directly relevant as geographic baseline data for Peruvian-sourced ingredients (potato, avocado, olive, spinach, corn) from mining-adjacent regions. Any HMT&C certification of Peruvian-origin ingredients should consider whether source farms are in Moquegua or comparably mining-impacted zones.
- Courses: Good case study for altitude × mining geography interaction with food crop contamination.
- App: Geographic context for Peruvian crop sourcing risk. Specific concentrations need to be pulled from the Figshare dataset.
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[metals/arsenic]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[ingredients/quinoa]]
- [[supply-chain/soil-contamination-mining]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [96966651f](https://github.com/paleofoundation/heavymetalindex/commit/96966651f) | 2026-05-12 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
