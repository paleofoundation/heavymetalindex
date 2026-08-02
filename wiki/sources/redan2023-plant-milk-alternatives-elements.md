---
type: source
raw_handle: MFK_nihms-1907158
cite_key: redan2023-plant-milk-alternatives-elements
title: "Analysis of Eight Types of Plant-based Milk Alternatives from the United States Market for Target Minerals and Trace Elements"
authors: [Redan BW, Zuklic J, Hryshko J, Boyer M, Wan J, Sandhu A, Jackson LS]
year: 2023
publication: "Journal of Food Composition and Analysis"
doi: "10.1016/j.jfca.2023.105457"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/nihms-1907158.pdf"
raw_sha256: "c0e039e34145a5b7785e3353449ee5bd11b82f659689e79440b0cf4cca5edade"
access_url: "https://doi.org/10.1016/j.jfca.2023.105457"
metals: [tAs, Cd, Pb]
ingredients: ["[[ingredients/plant-milk]]", "[[ingredients/almond]]", "[[ingredients/cashews]]", "[[ingredients/coconut]]", "[[ingredients/oat]]", "[[ingredients/rice]]", "[[ingredients/soy]]", "[[ingredients/milk-and-dairy]]"]
products: ["[[products/plant-milks-non-soy-non-rice]]", "[[products/plant-milks-rice-based]]", "[[products/plant-milks-soy-based]]", "[[products/rice-beverages-rice-milk]]"]
matrices: [plant-based-drink, dairy-alternative, plant-milk, rice-milk, soy-milk, as-consumed]
jurisdictions: [US]
near_duplicates: []
sample_n: 85
sample_population: "Eighty-five plant-based milk alternative product units from 19 brands purchased from 10 retail markets and an online retailer within a 50-mile radius of Bedford Park, Illinois, USA; types were almond, cashew, coconut, hemp, oat, pea, rice, and soy."
updated: 2026-06-08
---

# Redan 2023 - U.S. plant-milk alternatives elements

## Overview

Redan and colleagues measured target minerals and trace elements in eight types of plant-based milk alternatives from the U.S. market. The occurrence-relevant contaminant elements were total arsenic, cadmium, and lead, measured after microwave-assisted acid digestion by ICP-MS. The arsenic result is total arsenic only; the paper explicitly states that it did not differentiate organic and inorganic arsenic species.

## Key numbers

Table 1 reports the product-unit sample frame:

| PBMA type | Brands | Product units |
| --- | ---: | ---: |
| Almond | `3` | `18` |
| Cashew | `2` | `9` |
| Coconut | `2` | `9` |
| Hemp | `2` | `8` |
| Oat | `3` | `12` |
| Pea | `2` | `8` |
| Rice | `2` | `8` |
| Soy | `3` | `13` |
| Total | `19` | `85` |

Method LOQs for the contaminant elements were `9.9 ug/kg` for arsenic, `2.3 ug/kg` for cadmium, and `6.0 ug/kg` for lead.

The source reports these contaminant findings:

| Analyte | Source-reported result |
| --- | --- |
| Total arsenic | Quantifiable in only three of the eight PBMA types. Rice PBMAs had the highest mean total arsenic concentration, `15.8 ug/kg`, significantly higher than hemp and coconut PBMAs (`P<0.05`). All other PBMA types and milk had arsenic concentrations `<LOQ`, insufficient for statistical comparison. |
| Lead | Only `5` samples had quantifiable lead. The mean amount of lead across all PBMA types was less than `4.2 ug/kg`; the authors did not perform statistical comparisons for lead because of the low number of samples above LOQ. |
| Cadmium | Soy PBMAs had the highest mean cadmium value, `3.9 ug/kg`; all other PBMA types and milk contained less than `2.3 ug/kg`. |

In the discussion, the authors state that rice PBMAs had the highest total arsenic concentrations and hemp PBMAs were second highest. Both hemp brands were formulated with a rice-based sweetener, brown rice syrup. The paper also states that all sampled products had arsenic amounts below `100 ug/L`, a Health Canada ready-to-serve beverage total-arsenic limit cited by the authors.

## Methods (brief)

Samples were chosen from commonly consumed PBMA types in the U.S. market as of September 2022 and purchased around Bedford Park, Illinois. Product units were mixed, aliquoted, and stored at `-20 °C` until analysis. Samples were digested with concentrated nitric acid using a CEM Discover SP-D microwave digestion system and analyzed on an Agilent 8800 ICP-MS. The method was adapted from FDA Elemental Analysis Manual 4.7; SRM 1643f was used for As, Cd, and Pb quality control, and trace-element recovery was between `95-105%` of certified values.

## Implications

This source provides direct finished-product occurrence evidence for U.S. plant-based milk alternatives, especially the rice-based plant-milk row. Rice PBMAs are the only row with a source-reported mean total arsenic value in the extracted text, while soy PBMAs carry the highest reported cadmium mean. Because arsenic speciation was not performed, the rice PBMA arsenic signal remains `tAs` and must not be pooled as inorganic arsenic.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; title/byline, abstract, sampling methods, ICP-MS methods, Table 1, contaminant Results, Discussion, and Conclusions were checked in `/tmp/f3_unrepresented_texts/nihms-1907158.txt`.
- DOI `10.1016/j.jfca.2023.105457`, raw handle `MFK_nihms-1907158`, and cite-key searches found no existing source page before creation.
- Units are preserved as source-reported `ug/kg`; no conversion to `ug/L` or serving basis was made.
- Speciation: the source reports total arsenic only and states that it did not differentiate organic and inorganic arsenic species. Frontmatter therefore uses `tAs`, not `iAs`.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; hemp and pea ingredient slugs are not present, so those product types remain represented by the broad plant-milk product rows.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [2809b0696](https://github.com/paleofoundation/heavymetalindex/commit/2809b0696) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
