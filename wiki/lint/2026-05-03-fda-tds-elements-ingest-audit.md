---
type: lint-audit
title: "FDA TDS FY2018-FY2020 elements ingest audit"
audience: [researcher, regulator, app]
updated: 2026-05-03
sources: 1
---

# FDA TDS FY2018-FY2020 Elements Ingest Audit

## Inputs

- Raw CSV: `raw/reports/fda-tds-elements-fy2018-fy2020-results.csv`
- FDA key PDF: `raw/reports/fda-tds-elements-analytical-results-key-fy2018-fy2020.pdf`
- Source page: [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Deterministic Checks

| Check | Result |
| --- | ---: |
| CSV rows read | 29,148 |
| Normalized sample rows written | 29,148 |
| TDS food descriptions routed | 90 |
| New ingredient pages created | 68 |
| Existing ingredient pages updated | 22 |
| Analytes present | 24 |
| Fiscal years | 2018, 2019, 2020 |
| Calendar years | 2017, 2018, 2019, 2020 |
| Regions/list locations | Mid-Atlantic, National, North Central, Northeast, Southeast, Southwest, West |
| Inorganic arsenic rows | 4 |

## Scope Decisions

- Raw source preservation: the CSV and key PDF were copied into `raw/reports/` and are not edited by the ingest.
- Censoring: FDA-reported zero concentrations remain zero-valued rows. The reporting-limit field is retained separately and no `<LOD` flag is invented.
- Unit normalization: ppb-equivalent values are added for screening and summary only. The original units and values remain the primary source fields.
- Speciation: total arsenic, inorganic arsenic, dimethylarsinic acid, and monomethylarsonic acid remain separate analytes. Total arsenic is not substituted for inorganic arsenic.
- Routing: all 90 TDS foods have ingredient-page destinations. Apple and grapefruit juice also update juice product-row context because those rows already exist.
- Claims firewall: no brand ranking, certified-brand claim, HMTc threshold, or regulatory exceedance finding was added.

## Generated Files

- `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`
- `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`
- `data/evidence/fda_tds_fy2018_2020_ingredient_routes.csv`

## Follow-Up Queue

- Decide whether the app schema should formally include `tAs` and `U` in every ingredient `contamination_profile` or keep them as structured evidence fields only.
- Add matrix-specific regulatory comparisons only where species, basis, product scope, and regulatory status match. Apple-juice total arsenic from TDS is not an inorganic-arsenic comparison.
- Consider a future synthesis pass that fills selected ingredient profiles from the summary file once source coverage and censoring policy are reviewed.
