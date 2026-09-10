---
type: source
cite_key: fda2018-lead-in-juice-fy2005-fy2018
title: "Analytical Results for Lead in Juice Sampled Under the FDA's Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic Compliance Program (FY2005-FY2018)"
authors: ["U.S. Food and Drug Administration"]
year: 2018
publication: "FDA analytical results table"
source_type: government_dataset
no_doi_assigned: true
evidence_tier: A
license: us-government-work
raw_path: "raw/Digest/Analytical Results for Lead in Juice-Toxic Elements Food and Foodware Program (FY2005-FY2018).pdf"
metals: [Pb]
ingredients: ["[[ingredients/apple-juice]]", "[[ingredients/grapefruit-juice]]"]
products: ["[[products/fruit-juice-not-canned]]", "[[products/fruit-juices-apple-containing]]", "[[products/fruit-juices-non-apple]]"]
matrices: [juice, apple-juice, pomegranate-juice, mixed-juice]
jurisdictions: [US]
sample_n_total: 1643
sample_n_notes: "1,643 juice samples from FY2005-FY2018, single-strength (ready-to-drink) basis. LOQs ranged from 0.1 to 50 ppb depending on method and matrix. Three pomegranate samples (IDs 580054, 680530, third unspecified in extraction) reported at 115, 91, and additional ppb at the 95th percentile."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-08
---

# FDA 2018 — Lead in Juice (FY2005-FY2018)

## Summary

This FDA compliance-program table reports lead concentrations in 1,643 juice samples collected from fiscal year 2005 through fiscal year 2018 under the Toxic Elements in Food and Foodware, and Radionuclides in Food import and domestic compliance program. The dataset is the principal sample-level evidence base behind the FDA Closer to Zero juice lead action level development and the Draft Supporting Document for Establishing FDA's Action Levels for Lead in Juice. Concentrations are reported on a single-strength (ready-to-drink) basis. Lead was quantified by the FDA EAM method documented at https://www.fda.gov/media/87509/download with LOQs ranging from 0.1 to 50 ppb depending on the year and matrix.

## Key numbers

A deterministic parse of the published table (n=1,648 numeric concentration values, slightly above the stated 1,643 because of header/footnote artifacts in the PDF extraction) gives the following summary distribution across all juice types:

| Statistic | Value (ppb) |
| ---: | ---: |
| Minimum | 0 |
| Median (p50) | 1.0 |
| Mean | 4.2 |
| 90th percentile | 12.0 |
| Maximum | 134.8 |

Pomegranate juice carries the upper tail: three samples reported at the 95th percentile range with values of 115 ppb (sample 580054), 91 ppb (sample 680530), and an additional sample in the table footnote. Apple juice is the most-sampled juice type; the bulk of apple-juice samples report Pb at or below the LOQ for the relevant year, with periodic samples in the 4-37 ppb range. Distinct juice types covered include acerola, apple, apricot, banana, beet, bilberry, black currant, blackberry, blueberry, broccoli sprouts, carrot, cherry, grape, grapefruit, Indian gooseberry, mixed-type juice (more than one fruit/vegetable), pomegranate, and additional categories not enumerated here.

## Methods (brief)

Samples were collected under the FDA Toxic Elements in Food and Foodware, and Radionuclides in Food compliance program. Both import and domestic samples are included. Lead was quantified by FDA EAM method (Method 4.7 family). Reporting limits varied across the 14-year span as method sensitivity improved; the published table preserves per-sample LOQ context where it differs. Single-strength basis means concentrate samples are reported on a reconstituted ready-to-drink basis; canned and bottled finished products are reported as packaged.

## Limitations

The dataset is a compliance program rather than a market-representative survey, so samples are weighted toward products that triggered review under import or domestic compliance criteria. The 14-year time span covers a period of substantial improvement in juice lead concentrations and the underlying agronomic and supply-chain practices, so per-fiscal-year stratification is recommended for trend analysis rather than pooling across the full FY2005-FY2018 range. The PDF table is sample-level but reports only Sample ID, Fiscal Year, Juice Type, and Lead Concentration; it does not report brand, geographic origin, or the full FDA EAM method version used per sample.

## Implications

- Certification: Direct primary-evidence basis for HMTc juice lead occurrence rows under [[products/fruit-juice-not-canned]], [[products/fruit-juices-apple-containing]], and [[products/fruit-juices-non-apple]]. Sample-level distribution is admissible for benchmark-pool percentile math after appropriate per-juice-type and per-fiscal-year stratification. The pomegranate upper-tail values (91-115 ppb) materially differ from apple-juice central tendency (mostly below LOQ) and should not be pooled into a single juice-category benchmark without subcategory disaggregation.
- Courses: Strong example of a regulatory-development dataset where the sampling frame is compliance-driven rather than market-representative, and why that distinction matters for benchmark-pool admission.
- App: Supports per-juice-type Pb risk profiles; pomegranate is the highest-risk juice category in this dataset and should receive corresponding ingredient-page and recipe-inference treatment.

## Related evidence
- [[regulations/fda-juice-haccp-lead-50ppb]]
- [[regulations/fda2022-draft-lead-juice]]
- [[products/fruit-juice-not-canned]]
- [[products/fruit-juices-apple-containing]]
- [[products/fruit-juices-non-apple]]
- [[ingredients/apple-juice]]
- [[ingredients/grapefruit-juice]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
| [20add894b7](https://github.com/paleofoundation/heavymetalindex/commit/20add894b7) | 2026-05-08 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
