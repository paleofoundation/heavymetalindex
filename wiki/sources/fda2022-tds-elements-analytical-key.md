---
type: source
cite_key: fda2022-tds-elements-analytical-key
title: "FY2018-FY2020 TDS Elements Analytical Results Key"
authors: ["U.S. Food and Drug Administration"]
year: 2022
publication: "FDA Total Diet Study supporting documentation"
source_type: government_documentation
no_doi_assigned: true
evidence_tier: A
license: us-government-work
raw_path: "raw/Digest/TDS-ElementsAnalyticalResultsKey-TDS-Report-FY2018toFY2020-07082022_0.pdf"
metals: [Pb, Cd, tAs, iAs, tHg, Ni, Al, Cr, Sn, U, Cu, Fe, Mn, Mo, Se, Zn, V, Sb]
ingredients: []
products: []
matrices: [total-diet-study-prepared-food]
jurisdictions: [US]
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-08
---

# FDA 2022 — TDS Elements Analytical Results Key (FY2018-FY2020)

## Summary

This FDA documentation file is the field-definition key for the FY2018-FY2020 Total Diet Study elements analytical results dataset that powers the wiki's structured evidence layer for ~90 ingredient pages (`data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv` and the supporting sample-level CSV). The key defines each column in the published TDS analytical results: FiscalYear, CalendarYear, Collection (regional vs national vs special), TDSFoodNumber, TDSFoodDescription, Season, TDSFoodListType, Region, Analyte, Units, Concentration, ReportingLimit. The document is essential methodology context for any wiki claim that draws on FDA TDS values; it is the operational definition of the basis ("FDA TDS prepared food/composite") that the structured-evidence layer carries on every TDS-derived value record.

## Companion source

This key accompanies and documents [[sources/fda2022-tds-elements-fy2018-fy2020]], which is the actual TDS analytical results dataset that the structured ingest extracted into `data/evidence/`. The two should be read together: the dataset carries the values, the key carries the field definitions and methodology context.

## Key methodology elements

| Field | Operational meaning per FDA |
| --- | --- |
| FiscalYear | October 1 of prior year through September 30 of named year (FY2018 = 2017-10-01 to 2018-09-30) |
| Collection | Regional (ORA, 3 cities per region), National (KCL, 1 location), or Special (project-specific) |
| TDSFoodListType | Regional list, National list, or Special list governing what foods are sampled in a given collection |
| Region | Geographic stratification within Regional collections |
| Concentration | Reported analyte concentration; the key documents reporting-limit handling and the substitution conventions that distinguish reported zero from below-LOD |
| ReportingLimit | Per-sample analytical reporting limit (varies by year and analyte) |

The "FDA TDS prepared food/composite; reported concentration values retained" basis label that appears on TDS-derived row_fit notes and value records throughout `data/evidence/` is the operational summary of these field definitions: foods are prepared/cooked composites assembled from the TDS food list, sampled by ORA for regional collections and KCL for national collections, with reported concentrations preserved as FDA reported them and reporting limits preserved separately rather than substituted into the concentration field.

## Implications

- Certification: This key documents the methodology basis on which the FDA TDS values flow into HMTc product and ingredient rows. Any HMTc threshold or product-row claim that draws on FDA TDS values inherits the prepared-food/composite basis defined here and the regional/national/special collection structure. The per-fiscal-year stratification matters for trend analysis; the regional stratification matters when evaluating geographic representativeness.
- Courses: Useful for teaching the ORA/KCL collection split and the regional-versus-national TDS list distinction, which together define what "the FDA TDS reports" means operationally for any given food and analyte.

## Wiki pages updated on ingest

- [[sources/fda2022-tds-elements-fy2018-fy2020]] — companion dataset; the key documents the field definitions for the analytical results that source page summarizes

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
<!-- END: hmi-page-history -->
