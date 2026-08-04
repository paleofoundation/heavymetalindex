---
type: source
raw_handle: MFK_jopas-v23i2-3111
cite_key: elziani2024-instant-noodles-libya-metals
title: "Assessment of Heavy Metal Concentrations in Instant Noodles from Local Markets in Benghazi, Libya"
authors: [El Ziani N, Ben ghazi R, Yaghi M]
year: 2024
publication: "Sebha University Journal of Pure & Applied Sciences"
doi: "10.51984/JOPAS.V23I2.3111"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/JOPAS.V23I2.3111.pdf"
raw_sha256: "6d11e7b8d9d263fad67a8e45c2061278e7329616d90919eecc971b0e67788d67"
access_url: "https://doi.org/10.51984/JOPAS.V23I2.3111"
metals: [Cd, Cr, Pb, tAs, Sn]
ingredients: ["[[ingredients/noodles]]", "[[ingredients/wheat]]"]
products: ["[[products/pasta-wheat-based]]", "[[products/other-grain-products]]"]
matrices: [instant-noodles, noodles, cereal-grain, dry-weight]
jurisdictions: [LY]
near_duplicates: []
sample_n: 7
sample_population: "Seven instant-noodle samples randomly collected from local markets in Benghazi, Libya. The source discusses imported noodle origins but reports results as numbered samples rather than public product names."
updated: 2026-06-08
---

# El Ziani et al. 2024 — Heavy metals in instant noodles from Benghazi, Libya

## Overview

El Ziani and colleagues measured Cd, Cr, Pb, As, and Sn in seven instant-noodle samples collected from local markets in Benghazi, Libya. Dried and powdered noodle samples were digested and analyzed by triple-quadrupole ICP-MS, with results reported in ppb. The occurrence finding is that sample 2 had the highest value for every measured metal, and the table-average concentration order was Pb > Cd > Sn > Cr > As. The paper reports total As and total Cr only; it does not distinguish inorganic arsenic or Cr-VI.

## Key numbers

| Metal | Min, ppb | Max, ppb | Average, ppb | Table comparator |
| --- | ---: | ---: | ---: | ---: |
| Cd | 1.75 | 33.63 | 9.028 | WHO 3.00 |
| Cr | 0.46 | 15.47 | 3.780 | WHO 50.00 |
| Pb | 2.11 | 47.48 | 13.268 | WHO 25.00 |
| tAs | 0.22 | 3.54 | 0.864 | WHO 10.00 |
| Sn | 2.01 | 8.04 | 5.064 | WHO 25.00 |

Sample-level values from Table 1:

| Sample | Cd, ppb | Cr, ppb | Pb, ppb | tAs, ppb | Sn, ppb |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 | 5.14 | 1.25 | 9.98 | 0.64 | 4.87 |
| 2 | 33.63 | 15.47 | 47.48 | 3.54 | 8.04 |
| 3 | 1.75 | 0.46 | 2.11 | 0.28 | 2.01 |
| 4 | 8.95 | 2.65 | 12.89 | 0.73 | 6.25 |
| 5 | 5.12 | 3.14 | 7.92 | 0.39 | 5.47 |
| 6 | 4.71 | 1.87 | 7.19 | 0.22 | 4.35 |
| 7 | 3.90 | 1.62 | 5.31 | 0.25 | 4.46 |

The abstract states that measured concentrations were "within the WHO permissible limits, except for Sample No. 2" for cadmium. Table 1, however, prints a WHO Cd comparator of 3.00 ppb and shows samples 1, 2, 4, 5, 6, and 7 above 3.00 ppb. The lead discussion also contains inconsistent prose: it says samples 2 and 4 exceeded 40 ppb and that none conformed to the 25.00 ppb standard, while Table 1 shows only sample 2 above 25.00 ppb. For occurrence routing, Table 1 values are the controlling extracted numbers.

## Methods (brief)

Seven noodle samples were randomly collected from local markets in Benghazi, Libya, removed from packaging, sorted, numbered 1-7, and stored in plastic containers. Dried and powdered samples were digested from 0.5 +/- 0.0005 g portions with 10 mL HNO3 and 3 mL 60% HClO4, gently heated until perchloric-acid fumes appeared, cooled, treated with 10 mL HCl, and transferred to 50 mL volumetric flasks. Metals were measured using an iCAP triple-quadrupole ICP-MS from Thermo Scientific with Qtegra software. The paper reports total elements only and does not provide arsenic or chromium speciation.

## Implications

This source contributes Libya-market instant-noodle occurrence data for Cd, Pb, total As, total Cr, and Sn. The sample-level table is compact and directly extractable, but the regulatory-comparator prose has internal inconsistencies, so any compliance discussion should be rebuilt from Table 1 rather than quoted from the narrative. It is useful for pasta/noodle product routing and for tin occurrence in a non-canned processed-food matrix. It is not suitable for iAs or Cr-VI pooling because the study reports total As and total Cr.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the extracted text contained a readable bilingual title page, DOI, methods, Table 1, discussion, and conclusion.
- DOI verified from the title page as `10.51984/JOPAS.V23I2.3111`; DOI, raw handle `MFK_jopas-v23i2-3111`, and cite-key checks found no existing source page before creation.
- All concentration values in Key numbers were checked against Table 1. Units are preserved as `ppb`; no conversion to mg/kg or µg/kg was performed.
- Speciation: arsenic is total As and chromium is total Cr. The source does not report iAs or Cr-VI.
- Brand firewall: samples are numbered 1-7; no consumer brand names are attached to contamination values.
- Internal consistency: Table 1 conflicts with parts of the Cd and Pb comparator prose. This page treats Table 1 as the occurrence source of truth and records the prose conflicts above.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [3807a04d1](https://github.com/paleofoundation/heavymetalindex/commit/3807a04d1) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
