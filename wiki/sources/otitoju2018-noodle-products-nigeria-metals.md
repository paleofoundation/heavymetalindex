---
type: source
raw_handle: MFK_11
cite_key: otitoju2018-noodle-products-nigeria-metals
title: "Heavy Metal Quantification of Noodle Products Commonly Consumed in Nigeria"
authors: [Otitoju O, Otitoju GTO, Boyi RN, Baiyeri SO, Ezenwa CP]
year: 2018
publication: "Journal of Home Economics Research"
doi: null
no_doi_assigned: true
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/11.pdf"
raw_sha256: "ec8ae60e407aa9a076339d73d10b3fdc08f7741788c8116391024e7a8460fe2c"
access_url: null
metals: [tAs, Cd, Cr, Pb, tHg]
ingredients: ["[[ingredients/noodles]]", "[[ingredients/wheat]]"]
products: ["[[products/pasta-wheat-based]]", "[[products/other-grain-products]]"]
matrices: [instant-noodles, noodles, cereal-grain, dry-weight]
jurisdictions: [NG]
near_duplicates: []
sample_n: 11
sample_population: "Eleven instant-noodle products sold in Nigerian markets, collected from a major market in Enugu State and anonymized in the paper as samples A-K."
updated: 2026-06-08
---

# Otitoju et al. 2018 — Heavy metals in Nigerian instant noodles

## Overview

Otitoju and colleagues measured As, Cd, Cr, Pb, and Hg in eleven instant-noodle products sold in Nigerian markets. The paper reports the sampled products as anonymized samples A-K rather than public product names, and results are presented mostly as figure ranges plus a health-risk table. The occurrence finding is that As, Cd, Cr, and Pb were detected in all eleven samples, while mercury was not detected. The paper reports total metals only; it does not distinguish inorganic arsenic, methylmercury, or hexavalent chromium.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Sample count | 11 instant-noodle samples sold in Nigerian markets |
| Total As range | 0.13 +/- 0.04 to 0.34 +/- 0.05 mg/kg |
| Cd range | 0.55 +/- 0.12 to 0.77 +/- 0.02 mg/kg |
| Cr range | 0.18 +/- 0.05 to 0.46 +/- 0.21 mg/kg |
| Pb range | 0.55 +/- 0.08 to 1.46 +/- 0.17 mg/kg |
| Hg | Not detected in any of the samples |
| Source-reported mean Cd | 0.65 mg/kg |
| Source-reported mean Cr | 0.27 mg/kg |
| Source-reported mean Pb | 1.06 mg/kg |
| Figure comparator for As | WHO PTWI 0.015 mg/kg BW |
| Figure comparator for Cd | WHO PTWI 0.007 mg/kg BW |
| Figure comparator for Cr | WHO PTWI 0.050 mg/kg BW |
| Figure comparator for Pb | WHO PTWI 0.025 mg/kg BW |
| Table 4 risk calculation | ADIe and THQ calculated for As, Cd, Cr, and Pb using adult noodle intake of 0.310 kg/person/day, 365 days/year, 70 years, and 60 kg body weight |

Table 4 reports THQ values above 1 for As and Cd in every sample, and Pb THQ values from 0.81 to 2.15. Cr THQ values are printed in scientific notation and are mostly below 0.002; the sample K Cr entry appears as `9.99E4` in extracted text and is treated here as a table-transcription/typographic defect rather than a usable risk value. No Hg concentration range or Hg detection limit was reported in the extracted text.

## Methods (brief)

The authors collected eleven instant-noodle products from a major market in Enugu State, Nigeria, sealed them in polythene bags, and transported them to the laboratory. Samples were ground and sieved through a 0.5 m mesh, then 1 g was digested with 50 mL of 2 molar HNO3 for 1 hour before dilution to 100 mL. Heavy metals were determined by direct aspiration into a UNICAM 939 atomic absorption spectrophotometer with an acetylene flame and element-specific hollow-cathode lamps, using ASTM method references for As, Cd, Cr, Pb, and Hg. The paper does not report arsenic, mercury, or chromium speciation.

## Implications

This source contributes Nigerian market occurrence data for instant noodles, with direct routing value for processed non-rice grain pasta/noodle products. Its strongest occurrence contribution is the set of total As, Cd, Cr, and Pb ranges; the Hg finding is useful only as non-detect context because the source does not provide a detection limit in the extracted text. The paper is not suitable for inorganic-arsenic, methylmercury, or Cr-VI pooling because it reports only total As, total Hg non-detect, and total Cr.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the extracted text contained a readable title page, methods, Figures 1-4, Table 4, discussion, conclusion, and references.
- No DOI was reported in the extracted text; `doi` is null and `no_doi_assigned: true` is set. Raw handle `MFK_11`, title/author text, and cite-key checks found no existing source page before creation.
- Concentration ranges were checked against the abstract and the figure-adjacent Results text. Source-reported mean Cd, Cr, and Pb values were checked against the Discussion text.
- Internal discrepancy: the abstract gives the upper Cd range as `0.77+/-0.04`, while the Results text for Figure 2 gives `0.77 +/- 0.02`; the Key numbers table follows the Results/Figure text and records the discrepancy here.
- Units are preserved as reported (`mg/kg`, `mg/kg BW`, `kg/person/day`); no conversion to ppb or µg/kg was performed.
- Speciation: arsenic is recorded as total As; mercury is recorded as tHg non-detect; chromium is total Cr. The source does not report iAs, MeHg, or Cr-VI.
- Brand firewall: the source describes "eleven brands" but the extracted text uses anonymized sample letters A-K and does not expose product names. This page keeps the sample set anonymized and reports only aggregate ranges.
- Table 4 appears to contain at least one typographic/transcription issue (`9.99E4` for sample K Cr THQ). That value is not used as a key number.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [3488ede66](https://github.com/paleofoundation/heavymetalindex/commit/3488ede66) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
