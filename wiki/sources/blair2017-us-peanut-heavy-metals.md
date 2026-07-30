---
type: source
raw_handle: MFK_blair2017
cite_key: blair2017-us-peanut-heavy-metals
title: "Evaluating Concentrations of Pesticides and Heavy Metals in the U.S. Peanut Crop in the Presence of Detection Limits"
authors: [Blair BF, Lamb MC]
year: 2017
publication: "Peanut Science"
doi: null
no_doi_assigned: true
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/blair2017.pdf"
raw_sha256: "2bf3844985ea5d031114b109808ad20d11280fe05e937037724213d99f39e86f"
access_url: null
metals: [tHg, Cd, Pb, tAs]
ingredients: ["[[ingredients/peanuts]]"]
products: ["[[products/peanuts]]"]
matrices: [peanuts]
jurisdictions: [US]
near_duplicates: []
sample_n: 290
sample_population: "Randomly selected farmer-stock peanut samples from 16 buying points in the Southeast, Southwest, and Virginia-Carolina U.S. growing regions across crop years 2013-2015; each laboratory sample was a 2 kg composite and homogenized sample."
updated: 2026-06-08
---

# Blair 2017 - U.S. peanut heavy metals

Blair and Lamb analyzed mercury, cadmium, lead, and arsenic in U.S. peanut crop samples collected at farmer-stock buying points during the 2013-2015 crop years. The sampling design covered three major U.S. growing regions and used censored-data methods for analytes with results below detection limits. The arsenic testing did not differentiate organic from inorganic forms, so arsenic is treated here as total/unspecified arsenic.

## Key numbers

Table 1 reports `290` heavy-metal samples across `16` buying points: Southeast runner peanuts from `10` buying points (`71` samples in each of 2013, 2014, and 2015), Southwest runner/Virginia/Spanish peanuts from `3` buying points (`15`, `12`, and `16` samples by year), and Virginia-Carolina runner/Virginia peanuts from `3` buying points (`12`, `12`, and `10` samples by year).

Table 8 summarizes population mean estimates and 95% upper confidence limits in `ppm`:

| Year / region | Cd mean | Cd UCL95 | As mean | As UCL95 | Pb mean | Pb UCL95 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| All / all | `0.0768` | `0.0814` | `0.0282` | `0.0308` | `0.0322` | `0.0367` |
| 2013 / all | `0.0766` | `0.0847` | `0.0263` | `0.0288` | `0.0305` | `0.0420` |
| 2014 / all | `0.0764` | `0.0839` | `0.0330` | `0.0358` | `0.0334` | `0.0408` |
| 2015 / all | `0.0772` | `0.0853` | `0.0233` | `0.0306` | `0.0319` | `0.0358` |

Cadmium had no censored observations. Table 2 reports the all-year/all-region Cd minimum `0.020 ppm`, maximum `0.328 ppm`, mean `0.0768 ppm`, 95% confidence interval `( 0.0714, 0.0821 )`, and UCL95 `0.0814`.

Arsenic was censored below `0.02 ppm`. Table 3 reports all-year/all-region arsenic with `109` censored observations out of `290`, maximum `0.41 ppm`, ROS mean `0.0282 ppm`, 95% confidence interval `( 0.0258, 0.0312 )`, and UCL95 `0.0308`. The article states that the `0.41 ppm` sample in 2015 was a Southwest-region outlier.

Lead was censored below `0.02 ppm`. Table 5 reports all-year/all-region lead with `94` censored observations out of `290`, maximum `0.64 ppm`, ROS mean `0.0322 ppm`, 95% confidence interval `( 0.0282, 0.0377 )`, and UCL95 `0.0367`. The `0.64 ppm` value was a 2013 Virginia-Carolina outlier.

Mercury was too heavily censored for a mean estimate. Table 7 reports probability intervals for testing below the `0.01 ppm` detection limit: 2013 all-region samples had `98` censored results out of `98`, with interval `( 0.970, 1.00 )`; 2014 had `88` out of `95`, with interval `( 0.854, 0.970 )`; 2015 had `95` out of `97`, with interval `( 0.927, 0.997 )`.

## Methods (brief)

Samples were collected during farmer-stock grading at 16 buying points across three crop years. Each `2 kg` sample was composited and homogenized by Eurofins. Heavy metals were measured by ICP-MS on a Perkin Elmer NexION 300D after microwave-assisted acid digestion with nitric acid and hydrogen peroxide. NIST SRM 1568B and 1515 were analyzed as laboratory control samples, and recoveries for analytes of interest were within `10%` of `100`. For arsenic, the testing did not differentiate between organic and inorganic forms. The analysis used Kaplan-Meier, regression on order statistics (ROS), and maximum likelihood estimation for censored observations, with discussion focused on ROS results.

## Implications

This source provides U.S.-market peanut occurrence evidence for Cd, total/unspecified As, Pb, and heavily censored total/unspecified Hg. The routeable peanut values are national crop-level mean estimates and UCL95 summaries, not single-state or product-brand measurements. Mercury should remain as censored total-Hg context because the source does not provide a concentration distribution suitable for mean estimation and does not measure methylmercury.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; Tables 1, 2, 3, 5, 7, 8, and 9 were checked in extracted text.
- No DOI for the Blair/Lamb article was found in the source text; the DOI-looking string in the extracted text belongs to a cited USGS reference, not this paper.
- Raw handle `MFK_blair2017`, raw SHA, and cite-key checks found no existing source page before creation.
- Units are preserved as source-reported `ppm`; no conversion to `mg/kg` was performed.
- Speciation: arsenic testing did not differentiate organic and inorganic forms, so arsenic is routed as `tAs`. Mercury is total/unspecified Hg; methylmercury was not measured.
- Brand firewall: no product brands are tied to contamination values. Acknowledged industry entities are sample-logistics acknowledgements only, not contamination rankings.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [f304ce8b1](https://github.com/paleofoundation/heavymetalindex/commit/f304ce8b1) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
