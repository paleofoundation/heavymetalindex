---
type: source
raw_handle: AUTO_auto-mineral-water-ias-product-2021-10-1007-s13201-021-01495-1
cite_key: saha2021-rangpur-aquifer-arsenic
title: "Arsenic geochemistry of the sediments of the shallow aquifer and its correlation with the groundwater, Rangpur, Bangladesh"
authors: ["Sudip Saha", "A. H. M. Selim Reza", "Mrinal Kanti Roy"]
year: 2021
publication: "Applied Water Science"
doi: "10.1007/s13201-021-01495-1"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-mineral-water-ias-product_2021_10-1007-s13201-021-01495-1.pdf"
metals: [tAs, Cu, Zn, Fe]
ingredients: []
products: []
matrices: [aquifer-sediment, groundwater, drinking-water, geogenic-source-attribution]
jurisdictions: [BD]
near_duplicates: []
sample_n: 12
sample_population: "Twelve shallow-aquifer sediment locations and associated groundwater arsenic context from the Rangpur division, Bangladesh, sampled during 2014 fieldwork."
updated: 2026-06-10
---

# Saha et al. 2021 - Rangpur aquifer sediment and groundwater arsenic

Saha and colleagues analyzed shallow-aquifer sediments from the Rangpur division of Bangladesh and correlated sediment geochemistry with groundwater arsenic. This is in-scope a3/a4 evidence for groundwater-source attribution and exposure context, not mineral-water product occurrence.

## Key numbers

The abstract reports that the sediment deposits were acidic, with mean electrical conductivity 1.16 dS/m. It reports median total organic carbon 0.20%, median total nitrogen 0.02%, and median sulphur 58.68 mg/kg. The average heavy-metal trend in the investigated sediments was Fe > As > Cu > Zn.

Table 2 reports sediment summary values across 12 locations:

| Parameter | Minimum | Mean | Median | Maximum |
| --- | ---: | ---: | ---: | ---: |
| EC (dS/m) | 0.44 | 1.16 | 1.05 | 2.39 |
| pH | 4.40 | 4.93 | 4.70 | 5.50 |
| TOC (%) | 0.12 | 0.31 | 0.20 | 0.71 |
| TN (%) | 0.01 | 0.03 | 0.02 | 0.06 |
| S (mg/kg) | 2.58 | 58.38 | 58.68 | 143.55 |
| P (mg/kg) | 4.19 | 6.86 | 5.59 | 15.03 |
| Cu (mg/kg) | 0.22 | 2.13 | 2.11 | 5.62 |
| Zn (mg/kg) | 0.24 | 0.64 | 0.50 | 1.92 |
| Fe (mg/kg) | 24,367.40 | 26,310.77 | 26,261.80 | 27,891.00 |
| As (mg/kg) | 2.19 | 3.52 | 3.31 | 5.77 |

The abstract and results text report mean groundwater arsenic as 1.1793 μg/L. The groundwater arsenic range was 0.6704 to 1.8692 μg/L, and all water samples were below the WHO 10 μg/L limit cited by the authors.

Table 3 reports that sediment arsenic correlated significantly with iron at p < 0.05, with Pearson r = 0.648. Figure 3f gives R2 = 0.4199 for sediment As versus Fe, and Figure 4 gives R2 = 0.0902 for groundwater As versus sediment As. The authors interpret the positive correlations with sediment As, Fe, and Cu as evidence that groundwater arsenic derived from geogenic dissolution of arsenic-bearing aquifer minerals such as pyrite and arsenopyrite.

The abstract notes that contemporary arsenic-speciation work in Bangladesh shows As(III) is common in natural water and foodstuffs and that arsenic is inorganic from source, but this study's own sediment and groundwater measurements are reported as arsenic without a study-specific species split. The frontmatter therefore uses `tAs`.

## Methods (brief)

The authors collected groundwater in acidified 100 mL polythene bottles and collected sediment samples in polythene bags. Sediments were air dried, oven dried at 105 degrees C, and analyzed for pH, electrical conductance, sulphur, total organic carbon, total nitrogen, phosphorus, and aqua-regia-extractable As, Cu, Zn, and Fe. Arsenic was measured by AAS with graphite furnace using a Shimadzu AA6800. Groundwater arsenic was measured by AAS, and standard QA/QC protocols included replicate sample analysis.

## Implications

Certification: Do not use these values as bottled mineral-water occurrence or finished water-product occurrence. They are aquifer sediment and groundwater-source values.

Courses: Strong example of geogenic source attribution: low groundwater arsenic in the measured samples, but a mechanistic link between sediment Fe/As mineralogy and arsenic release into groundwater.

App: Context only. The source can support groundwater-source due-diligence flags for Bangladesh, not finished-product scoring.

## Wiki pages this source may touch

- [[supply-chain/irrigation-and-soil-amendments]]
- [[supply-chain/source-attribution-environmental-burden-apportionment]]
- [[metals/arsenic-total]]
- [[metals/iron]]
- [[metals/copper]]
- [[metals/zinc]]

## Verification notes

Recovered from `skip:not-target-cell` under the 2026-06-10 inclusion-by-default rule. The old skip treated the paper as outside the target cell because it measured groundwater and aquifer sediment rather than mineral-water product occurrence. On reading, it is in-scope a3/a4 source-attribution and groundwater exposure-context evidence with measured arsenic and sediment values.

Numbers were checked against the abstract, Table 2, Table 3, Figures 3-4 text, the groundwater arsenic results paragraph, and methods in the extracted PDF. Arsenic is recorded as `tAs` because the study measured total arsenic in sediments and groundwater without separating inorganic species in its own analytical results. Products and ingredients are intentionally empty.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [a9b5a0ec1](https://github.com/paleofoundation/heavymetalindex/commit/a9b5a0ec1) | 2026-06-10 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
