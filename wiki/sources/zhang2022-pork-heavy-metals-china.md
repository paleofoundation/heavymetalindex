---
type: source
raw_handle: MFK_risk-assessment-of-heavy-metals-contamination-in
cite_key: zhang2022-pork-heavy-metals-china
title: "Risk assessment of heavy metals contamination in pork"
authors: [Zhang H, Zhou G, Zhang S, Yang Y, Dev S, Su Q, Deng X, Chen Q, Niu B]
year: 2022
publication: "Food Control"
doi: 10.1016/j.foodcont.2021.108793
access_url: https://doi.org/10.1016/j.foodcont.2021.108793
source_type: peer-reviewed
evidence_tier: C
license: "All rights reserved"
raw_path: "raw/Manual Fetch Kimi /June 9/Risk-assessment-of-heavy-metals-contamination-in-pork.pdf"
metals: [Pb, tAs, Cd, tHg]
ingredients: ["[[ingredients/meat]]"]
products: ["[[products/pork-product]]"]
matrices: [pork, meat]
jurisdictions: [CN]
near_duplicates: []
sample_n: 126
sample_population: "Secondary aggregation of previously published Chinese pork heavy-metal concentration records from CNKI: 42 Pb records, 36 Cd records, 22 Hg records, and 26 As records. The paper does not report a single primary sampling frame or individual sample table."
wiki_doi: null
sampling_locations: ["China"]
sampling_year_range: "not reported in extracted text"
updated: 2026-06-09
---

# Zhang et al. 2022 - Chinese pork heavy metals risk assessment

## Overview

Zhang et al. (2022) assessed Pb, As, Cd, and Hg contamination in Chinese pork using 126 previously published concentration records collected from CNKI. The routeable product values are the paper's fitted pork-concentration summaries in `mg kg-1`; individual pork sample records are not reproduced in the extracted PDF text. Arsenic and mercury are treated here as total-element context (`tAs`, `tHg`) because the paper does not report inorganic arsenic or methylmercury speciation.

## Key numbers

The paper reports the concentration-record panel as 42 Pb, 36 Cd, 22 Hg, and 26 As records, for 126 records total. The authors fitted concentration distributions about `10,000` times and reported the resulting pork concentrations in `mg kg-1`.

| Analyte label used here | Source label | Source-fitted concentration in pork | Source-listed Chinese residue limit | Single pollution index (Pi) | Source classification |
| --- | --- | ---: | ---: | ---: | --- |
| Pb | Pb | 6.4 x 10^-2 mg kg-1 | 0.2 mg/kg | 0.318 | Safe |
| tAs | As | 2.8 x 10^-2 mg kg-1 | 0.5 mg/kg | 0.114 | Safe |
| Cd | Cd | 1.2 x 10^-2 mg kg-1 | 0.1 mg/kg | 0.146 | Safe |
| tHg | Hg | 0.7 x 10^-2 mg kg-1 | 0.05 mg/kg | 0.053 | Safe |

Table 3 reports non-carcinogenic THQ values by age and sex. The largest total THQ values were in the `[2,4)` age group: male TTHQ `0.797` and female TTHQ `0.745`. The table's total row reports THQ values of Pb `0.198`, As `0.143`, Hg `0.111`, and Cd `0.018`, with total TTHQ `0.470`.

The source reports contribution rates to TTHQ of Pb `42.2%`, As `30.4%`, Hg `23.6%`, and Cd `3.8%`. For carcinogenic risk, the paper states that ILCR followed As > Cd > Pb for the same age group and that the ILCR of As in the `[2,4]` age group exceeded `1 x 10^-4`; no exact numeric ILCR table is extractable from the text layer beyond the plotted figure.

The fault-tree section uses a 2011 Nanjing Farmers Market lead-exceedance case as an example. It describes feed heavy metals exceeding standards, insufficient qualification inspection, processing-enterprise traceability limits, and overlapping regulatory supervision as supply-chain context; those case details are not additional pork occurrence values.

## Methods (brief)

The authors collected previously published pork heavy-metal concentration data from `www.cnki.net` and combined the concentration panel with Chinese body-weight and pork-intake data from national nutrition and health monitoring reports. They evaluated Pb, As, Cd, and Hg with a single pollution index, estimated daily intake, target hazard quotient, incremental lifetime cancer risk, and fault-tree analysis. The paper states that reagent blanks were used to correct analytical values and that standard reference materials from the National Research Center of Certified Reference Materials were within `+/- 10 percent` of certified values for all target metals, but the source page should still treat the occurrence dataset as secondary because the authors did not newly sample pork in this paper.

## Implications

This source contributes a China-market pork occurrence summary for Pb, total arsenic, Cd, and total mercury. It should be used as a secondary, summary-level input rather than a sample-level pork survey because the individual CNKI records, regions, years, and wet/dry/as-sold bases are not exposed in the extracted text. The source's own pollution-index and risk-assessment outputs can support pork supply-chain context, but they should not be treated as HMTc thresholds or as a substitute for primary pork occurrence studies.

## Wiki pages this source may touch

- [[products/pork-product]]
- [[ingredients/meat]]
- [[metals/lead]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/mercury-total]]

## Verification notes

- Identity checks before writing found no existing DOI, raw-handle, title, or cite-key page for `10.1016/j.foodcont.2021.108793`, `MFK_risk-assessment-of-heavy-metals-contamination-in`, or `zhang2022-pork-heavy-metals-china`.
- The occurrence table above was re-opened from `/tmp/hmi-june9-063.txt` before drafting. The fitted pork concentrations, residue-limit comparators, and Pi values are transcribed from the Results text and Table 2 without unit conversion.
- Units preserved: concentrations remain in `mg kg-1` / `mg/kg` exactly as the source expresses them. The wet-weight, dry-weight, raw, or cooked basis is not reported in the extracted text.
- Speciation: the paper reports only As and Hg. This page labels them `tAs` and `tHg`; it does not promote total As to inorganic arsenic or total Hg to methylmercury.
- Evidence tier C reflects secondary aggregation from CNKI records and absence of an extractable individual-sample table, despite peer-reviewed publication.
- Source-side risk context: Table 3 THQs and the plotted ILCR results are reported as the paper's risk-assessment outputs, not consumer guidance and not HMTc certification thresholds.
- Brand firewall: no pork brands were present. The Nanjing Farmers Market example is a regulatory/supply-chain event, not a brand-level contamination table.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [e8199017a](https://github.com/paleofoundation/heavymetalindex/commit/e8199017a) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
