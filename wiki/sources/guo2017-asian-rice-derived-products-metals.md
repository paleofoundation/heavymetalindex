---
type: source
raw_handle: MFK_guo2017
cite_key: guo2017-asian-rice-derived-products-metals
title: "Trace Elements and Heavy Metals in Asian Rice-Derived Food Products"
authors: [Guo K, Wells S, Han FX, Arslan Z, Sun H, Zhang J]
year: 2017
publication: "Water, Air, & Soil Pollution"
doi: "10.1007/s11270-017-3262-3"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/guo2017.pdf"
raw_sha256: "4d495698e0532feea9259f845caca0c2d0d957e9d4332c182de3793fc8c2d564"
access_url: "https://doi.org/10.1007/s11270-017-3262-3"
metals: [Cr, Cu, Zn, tAs, Se, Cd, tHg, Pb]
ingredients: ["[[ingredients/rice]]", "[[ingredients/noodles]]", "[[ingredients/vinegar]]"]
products: ["[[products/rice-noodles]]", "[[products/rice-snacks-crackers]]", "[[products/vinegar]]"]
matrices: [rice-products, rice-noodles, rice-snacks, rice-vinegar, as-sold]
jurisdictions: [US, CN, VN, TH, IN, JP, TW, KR]
near_duplicates: [MFK_guo2017-1]
sample_n: 16
sample_population: "Six rice-noodle products, five rice vinegar/wine products, and five rice-snack products purchased from local oriental markets in Jackson, Mississippi, USA; product countries listed by the source include China, Vietnam, Thailand, India, Japan, USA, Taiwan, and Korea."
updated: 2026-06-08
---

# Guo 2017 - Asian rice-derived products metals

## Overview

Guo and colleagues measured trace elements and heavy metals in Asian rice-derived food products purchased from oriental markets in Jackson, Mississippi. The study covered rice noodles, rice vinegar/wine, and rice snacks, with product origins spanning several Asian countries and one USA-labeled vinegar/wine product. The source reports category-level findings and brand-labeled figures; this page preserves the category findings and does not attach contamination values to brand names.

## Key numbers

The study analyzed Cr, Cu, Zn, As, Se, Cd, Hg, and Pb by ICP-MS after acid digestion. Arsenic and mercury are reported as total/unspecified elements; no inorganic arsenic or methylmercury speciation was measured in the rice-product samples.

| Product category | Source-reported occurrence finding |
| --- | --- |
| Rice noodles | Zn, Cu, Se, Cr, Cd, and Hg were found; As and Pb were not found. |
| Rice noodles | Highest Se and Cr concentrations were around `1 mg/kg`; highest Cu and Zn concentrations were around `1.25 mg/kg`. |
| Rice noodles | Yearly-intake estimates based on `100 g` daily intake were As `0` and Pb `0` for all tested noodle products; Cd ranged from `0` to `5 +- 0.4 mg` per capita per year; Hg ranged from `0` to `6 +- 8 mg` per capita per year. |
| Rice vinegar/wine | Only Cr and Se were detected. |
| Rice vinegar/wine | Cr and Se were on or below `0.008 mg/kg`; the authors state that if `1 g` of each product was consumed, only several micrograms of Se or Cr would be taken in a year. |
| Rice snacks | None of the products contained Hg, Pb, or As. |
| Rice snacks | Cr and Cd were at low level of `0.1 mg/kg`; highest Se was `0.3 mg/kg`; Cu and Zn were up to `3 mg/kg`. |
| Rice snacks | Yearly-intake estimates based on `50 g` daily intake were As `0`, Hg `0`, and Pb `0` for all tested snack products; Cd ranged from `0` to `0.1 +- 0.1 mg` per capita per year; Cr ranged from `0` to `2 +- 1.4 mg` per capita per year. |

The abstract states that As, Cd, Hg, and Pb in the tested Asian rice-derived products were within the authors' EPA safety comparison level, and that rice-derived products showed lower toxic heavy metal and metalloid levels than raw-rice literature comparisons. The conclusion states that all rice-product types had positive results for some of the most toxic elements As, Hg, Cd, and Pb, but the category-specific Results text reports As/Pb not found in noodles, only Cr/Se detected in vinegar/wine, and Hg/Pb/As absent in snacks; downstream extraction should rely on the category-specific Results statements.

## Methods (brief)

Three rice-product categories were collected from local oriental markets in Jackson, Mississippi, USA. About `1.0 g` of each sample was digested by EPA Method `3050B`; samples were refluxed with nitric acid, treated with hydrogen peroxide, refluxed with hydrochloric acid, filtered through `0.45-µm` filter paper, diluted to `50 mL`, and analyzed by ICP-MS. Triplicate preparations were made for each sample.

## Implications

This source provides small-sample occurrence context for rice noodles, rice snacks/crackers, and rice vinegar/wine sold in a US market. It is useful for routing rice-derived processed foods but should be treated as thin category evidence because the source reports few products and much of the primary figure output is brand-labeled. Arsenic remains `tAs`/not detected context for these products; the introduction discusses inorganic arsenic in rice literature, but the study did not speciate arsenic in the tested rice-derived products.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; abstract, Table 1, Results sections 3.1-3.3, Table 2, Table 4, and the conclusion were checked in `/tmp/f3_texts/guo2017.txt`.
- DOI `10.1007/s11270-017-3262-3`, raw handle `MFK_guo2017`, and cite-key checks found no existing source page before creation. `guo2017 (1).pdf` has the same SHA-256 and is recorded as a within-folder duplicate, not separately ingested.
- Values are preserved as the source reports them (`mg/kg`, `mg` per capita per year, `g` daily intake, and microgram annual intake language); no conversions were performed.
- Speciation: arsenic and mercury were measured only as total/unspecified elements. The introduction discusses inorganic arsenic in other rice literature, but those values are not occurrence data from this study.
- Brand firewall: the source contains brand names in Table 1 and figure legends. This page reports only product-category findings and does not attach contamination values to any brand.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; a specific rice-wine product slug is not available, so the rice vinegar/wine category routes through the broad vinegar product row.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [4f218cf51](https://github.com/paleofoundation/heavymetalindex/commit/4f218cf51) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
