---
type: source
raw_handle: FM_10196951
cite_key: amarh2023-ghana-infant-food-heavy-metals
title: "Health risk assessment of some selected heavy metals in infant food sold in Wa, Ghana"
authors: ["Flora Amerley Amarh", "Eric Selorm Agorku", "Ray Bright Voegborlo", "Gerheart Winfred Ashong", "George Atiah Atongo"]
year: 2023
publication: "Heliyon"
doi: "10.1016/j.heliyon.2023.e16225"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 4.0"
raw_path: "raw/markdown/FM_10196951/FM_10196951.md"
access_url: https://doi.org/10.1016/j.heliyon.2023.e16225
raw_sha256: "13b4df3103222e2c0a1dc1dd51485129a9cc7f9619eb46abfd2b7d539e1dee57"
metals: [tAs, Cd, Cr, tHg, Mn, Ni, Pb, Sb]
ingredients: ["[[ingredients/baby-food]]", "[[ingredients/infant-formula-ingredients]]"]
products: ["[[products/infant-food-general]]", "[[products/baby-food]]"]
matrices: [baby-foods-and-formulas, baby-food, infant-formula, as-sold]
jurisdictions: [GH]
sample_n: 22
sample_population: "Locally and internationally produced infant formula and baby-food samples sold in Wa, Ghana"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
near_duplicates: [MFK_health-risk-assessment-of-some-selected-heavy-meta]
updated: 2026-06-08
---

# Amarh et al. 2023 — Ghana Infant Food Heavy Metals

## Overview

Amarh and colleagues measured eight metals in 22 locally and internationally produced infant formula and baby-food samples purchased from markets and baby-care centers in Wa, Ghana. The study used ICP-MS after acid digestion and reported sample-level concentrations in mg/kg, plus EDI, THQ, HI, and cancer-risk calculations for infants aged 6-12 months. The occurrence finding is broad infant-food/formula evidence: the paper does not provide enough product-code decoding in the extracted text to assign each sample to a specific formula, cereal, puree, snack, or mixed-meal row. The paper reports total metals only; it does not distinguish inorganic arsenic, methylmercury, or Cr-VI.

## Key numbers

| Metal | Mean, mg/kg | Source-reported range, mg/kg | Notes |
| --- | ---: | --- | --- |
| tAs | 0.028 | 0.006-0.057 | Table 1 and section 3.1.1 |
| Cd | 0.051 | 0.043-0.064 | Table 1 and abstract; section 3.1.2 has a likely typo `0.0043-0.064` |
| Cr | 0.211 | 0.113-0.339 | Total Cr; no Cr-VI speciation. The abstract prints the upper bound as `0.33`; Table 1 and section 3.1.4 give `0.339`. |
| tHg | 0.001 | not detected-0.002 | Total Hg; no methylmercury speciation |
| Mn | 2.117 | 1.720-3.568 | Included because the source measured it and used it in HI |
| Ni | 0.100 | 0.065-0.183 | Table 1 and section 3.1.7 |
| Pb | 0.137 | 0.061-0.368 | Table 1 and section 3.1.5 |
| Sb | 0.056 | 0.017-0.100 | Section 3.1.6; Table 1 does not print an Sb mean |

Additional source-reported values:

- Sample count: 22 baby food and infant-formula samples sold in Wa, Ghana.
- Daily intake assumption for EDI: 160 g/day for infants 6-12 months; reference body weight 9.3 kg.
- Matrix-spike recoveries: 98.0 +/- 1.2% for As, 102.0 +/- 1.1% for Cd, 99.6 +/- 4.3% for Cr, 100.0 +/- 1.2% for Hg, 102.0 +/- 1.6% for Sb, 99.6 +/- 1.5% for Pb, 108.0 +/- 4.8% for Ni, and 108.0 +/- 4.2% for Mn.
- Table 4 reports HI values from 2.68 to 7.66. The abstract reports HI as 2.68-6.83, but the table value for TL1 is 7.66.
- Table 4 reports sample-level THQ values for As, Cd, Cr, Hg, Mn, Ni, and Pb. Several abstract/conclusion percentages and maxima differ from Table 4, so Table 4 should be used directly for any risk-table extraction.
- Table 5 reports cancer-risk values for As and Pb, with total CR values mostly between 1.66E-04 and 1.51E-03; at least one printed row appears arithmetically inconsistent, so row-level CR values should be rechecked before reuse.

## Methods (brief)

The authors randomly purchased 22 locally and internationally produced infant formula and baby-food samples from retailers, vendors, markets, and baby-care centers in Wa, Upper West Region, Ghana. Samples were stored at room temperature without milling or drying, then 1.0 g was digested with 10 mL HNO3:HCl (1:1) at 250 degrees C until clear, diluted to 50 mL, filtered through 0.45 µm membrane or Whatman No. 1 paper, and analyzed by ICP-MS (PerkinElmer, 2000 series). Quality control used reagent blanks, triplicate analyses against NIST certified reference material, and matrix spike / matrix spike duplicate recovery checks for each batch of ten samples. The paper reports total metals only.

## Implications

This source is high-value broad Category 1 evidence for infant foods and formula sold in Ghana, especially for Pb, Cd, total As, total Hg, Ni, Cr, Sb, and Mn occurrence in the same sample set. It should route to broad infant-food pages, but the extracted text does not decode the sample IDs into formula, cereal, puree, snack, or mixed-meal rows, so row-specific standards pooling would require source-level product-code review first. Total As cannot be used as inorganic arsenic, total Hg cannot be used as methylmercury, and total Cr cannot be used as Cr-VI. The paper is useful for courses as a teachable example of why infant-food occurrence papers need a product-code dictionary before standards math can safely use them.

## Verification notes

- This was a DOI duplicate of an existing source page (`amarh2023-ghana-infant-food-heavy-metals.md`) that had `updated: 2026-04-29`, legacy headings, converted ppb equivalents, and bare product slugs. The page was merge-enhanced from the manual-fetch PDF at `raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/Health-risk-assessment-of-some-selected-heavy-metals-in-infant-food-sold-in-Wa-Ghana.pdf`; the MFK handle was added to `near_duplicates`.
- PDF text extracted with `pdftotext -layout`; the extracted text contained readable methods, Tables 1-6, conclusion, DOI, and license statement.
- DOI verified from the PDF title page and metadata as `10.1016/j.heliyon.2023.e16225`.
- Concentration means and ranges were checked against Table 1 and sections 3.1.1-3.1.8. The Cd range in Key numbers follows Table 1 / abstract (`0.043-0.064 mg/kg`); section 3.1.2 prints `0.0043-0.064 mg/kg`, which appears inconsistent with the table.
- Units are preserved as reported (`mg/kg`, `mg/kg/day`, `g/day`); the previous page's approximate ppb conversions were removed.
- Speciation: arsenic is total As, mercury is total Hg, and chromium is total Cr. The source does not report iAs, MeHg, or Cr-VI.
- Brand firewall: the paper states that 22 brands were sampled, but the extracted text uses coded sample IDs. This page does not attach brand names to contamination values.
- Frontmatter product and ingredient slugs were corrected to existing taxonomy-snapshot slugs. The source mentions infant formula broadly, but powder/liquid and soy/non-soy status are not resolved in the extracted text, so formula is kept as matrix context rather than overspecified as a formula product row.
- Audited 2026-06-09 against `raw/markdown/FM_10196951/FM_10196951.md`: all eight per-metal means and ranges, EDI assumptions, recovery values, and methods text reproduce the source. Cr upper-bound abstract/table discrepancy is now noted in Key numbers alongside the existing Cd and HI notes. Audit also flagged `products/baby-food` as missing from the taxonomy snapshot; verified false positive — `wiki/products/baby-food.md` exists and the slug is in the canonical product list.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [94b95d8c1](https://github.com/paleofoundation/heavymetalindex/commit/94b95d8c1) | 2026-06-09 | minor | Narrative text revised |
| [8a682f8af](https://github.com/paleofoundation/heavymetalindex/commit/8a682f8af) | 2026-06-08 | major | 1 source removed; 3 sections added and 5 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
