---
type: source
raw_handle: MFK_schoof2007
cite_key: schoof2007-seafood-arsenic-speciation
title: "Variation of total and speciated arsenic in commonly consumed fish and seafood"
authors: [Schoof RA, Yager JW]
year: 2007
publication: "Human and Ecological Risk Assessment"
doi: "10.1080/10807030701506454"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/schoof2007.pdf"
raw_sha256: "74bfcf740d320af1e936d6753580d44f1dfda939597239c18e188a357ca4deca"
access_url: "https://doi.org/10.1080/10807030701506454"
metals: [tAs, iAs]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/fish]]", "[[ingredients/freshwater-fish]]", "[[ingredients/shellfish]]", "[[ingredients/molluscs]]", "[[ingredients/bivalve-molluscs]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/fish-freshwater]]", "[[products/fish-marine-non-predatory]]", "[[products/fish-marine-predatory]]", "[[products/shellfish]]"]
matrices: [seafood, fish, freshwater-fish, marine-fish, shellfish, molluscs, wet-weight, arsenic-speciation]
jurisdictions: [US, ES, NO, TH]
near_duplicates: []
sample_n: 437
sample_population: "Compiled fish and seafood arsenic-speciation results from 20 studies, summarized into freshwater finfish, anadromous fish, marine fish, crustaceans, and molluscs; Table 3 includes 437 total-arsenic/inorganic-arsenic sample records across those groups."
updated: 2026-06-08
---

# Schoof 2007 - Seafood arsenic speciation

## Overview

Schoof and Yager reviewed total arsenic and speciated arsenic data for commonly consumed fish and seafood. The review summarizes total arsenic (`Astot`) and inorganic arsenic (`Asi`) on a wet-weight basis for freshwater finfish, anadromous fish, marine fish, crustaceans, and molluscs. The paper also separately summarizes DMA and MMA, so those organic arsenic species must not be collapsed into inorganic arsenic.

## Key numbers

The abstract reports mean inorganic arsenic concentrations of approximately `10 to 20 ng/g wet weight (ww)` in freshwater, anadromous, and marine fish, and `40 to 50 ng/g ww` in crustaceans and molluscs. It also reports that MMA was seldom detected, while DMA averaged `10 ng/g ww` in freshwater fish and `45 to 95 ng/g ww` in anadromous fish, marine fish, crustaceans, and molluscs. At the `75th percentile` of the dataset, the paper reports inorganic arsenic as `2-3%` of total arsenic in anadromous/estuarine/marine fish and crustaceans/molluscs, and `10%` of total arsenic in freshwater fish.

Table 3 summarizes total arsenic and inorganic arsenic in `ng/g, ww`.

| Seafood group | All-sample count | All-sample mean tAs | All-sample mean iAs | All-sample iAs % total | All-sample tAs range | All-sample iAs range | Raw-sample count | Raw-sample mean tAs | Raw-sample mean iAs |
| --- | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: |
| Freshwater finfish | `42` | `304` | `18` | `6.8` | `25-1,793` | `0.2-50` | `38` | `319` | `20` |
| Anadromous fish | `18` | `873` | `11` | `1.0` | `289-3,623` | `0.62-100` | `17` | `881` | `12` |
| Marine fish | `253` | `3,584` | `21` | `1.1` | `156-44,000` | `0.1-142` | `128` | `4,770` | `21` |
| Crustaceans | `44` | `10,743` | `40` | `1.5` | `330-67,000` | `1-193` | `30` | `13,767` | `40` |
| Molluscs | `80` | `2,479` | `50` | `2.0` | `266-6,820` | `1.2-264` | `57` | `2,413` | `41` |

Table 3 also reports all-sample `75th percentile` values for tAs / iAs / iAs percent of total: freshwater finfish `409 / 36 / 10`; anadromous fish `956 / 10 / 2.0`; marine fish `4,359 / 26 / 1.6`; crustaceans `12,000 / 57 / 2.0`; and molluscs `3,094 / 68 / 2.7`. The all-sample `90th percentile` values are freshwater finfish `558 / 43 / 16`; anadromous fish `1,235 / 18 / 2.7`; marine fish `7,948 / 62 / 2.8`; crustaceans `26,222 / 97 / 5.3`; and molluscs `3,740 / 132 / 4.3`.

Table 4 summarizes organic arsenic species in `ng/g ww, as As`. DMA means were freshwater finfish `10.3`, anadromous fish `95.5`, marine fish `79.9`, crustaceans `56`, and molluscs `45`. MMA means were freshwater finfish `0.9`, anadromous fish `40.4`, marine fish `4.6`, crustaceans `1.8`, and molluscs `15.4`.

## Methods (brief)

The review assembled total arsenic and arsenic-speciation data from `20` published studies and grouped seafood by habitat and product type. The authors also used U.S. seafood consumption information from USEPA based on USDA CSFII 1994-1996 and 1998 data, including a `17.5 g/day` freshwater and estuarine fish consumption value used in arsenic ambient-water-quality-criterion calculations. Table 3 includes both all samples and raw samples only; cooked samples and paired raw/cooked results are identified in the group counts.

## Implications

This source is useful for routing seafood arsenic evidence because it preserves total arsenic and inorganic arsenic in the same wet-weight table, with separate review summaries for DMA and MMA. The source-reported percentiles are review-summary descriptors from Schoof and Yager's assembled dataset; they are not HMTc aggregate percentiles and should not be treated as certification thresholds. Downstream extraction should keep fish, freshwater fish, marine fish, crustaceans, and molluscs separated where row fit matters.

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/f3_resolve_texts/schoof2007.txt`; the abstract, seafood-consumption section, Tables 3-5, and discussion of the inorganic-arsenic adjustment were checked.
- DOI `10.1080/10807030701506454`, raw handle `MFK_schoof2007`, and cite-key checks found no existing source page before creation.
- Units are preserved as source-reported `ng/g, ww`, `ng/g ww, as As`, `g/day`, and percentages; no conversion was performed.
- Speciation: total arsenic and inorganic arsenic remain separate. DMA and MMA are documented in Key numbers as organic arsenic species and are not counted as inorganic arsenic.
- Brand firewall: the review reports category and literature-study summaries, not retail brand contamination values.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; narrow slugs for crustaceans as a standalone ingredient/product are absent, so the source is routed through broad seafood and shellfish slugs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
