---
type: source
raw_handle: MFK_cat21-07-semanticscholar-cadmium
cite_key: jalal2020-modeling-clay-metals
title: "Estimation of Some Metals in Children's Colorful Modeling Clay Sold in the Markets of Erbil City, Kurdistan Region, Iraq"
authors: [Jalal A F, Khalid H S, Yasin I T, Xanamir M R]
year: 2020
publication: "ZANCO Journal of Pure and Applied Sciences 32(5):134-145"
source_type: peer-reviewed
doi: 10.21271/zjpas.32.5.13
evidence_tier: B
license: "unknown"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_may31_cat21_toys/cat21_toys/cat21_07_semanticscholar_cadmium.pdf"
raw_sha256: "4354add1758e09f9c866ae0b63eb7a729722759b89a55343fdb1bcb8c7b95153"
metals: [Cd, Cr, Cu, Ni]
ingredients: []
products: ["[[products/art-craft-materials]]", "[[products/toys-crafts-other]]"]
matrices: []
jurisdictions: [IQ, EU]
near_duplicates: []
sample_n: 54
sample_population: "54 colorful modeling-clay samples from nine brands purchased in Erbil city markets, Kurdistan Region, Iraq, during January 2018"
sampling_locations: ["Erbil city markets, Kurdistan Region, Iraq"]
sampling_year_range: "2018"
updated: 2026-06-09
---

# Jalal 2020 - cadmium, chromium, copper, and nickel in children's modeling clay

## Overview

Jalal and colleagues measured Cd, total Cr, Cu, and Ni in colorful children's modeling clay sold in Erbil city markets. The paper is routeable for art and craft materials because it reports finished-product clay concentrations in `mg/kg` after acid digestion and FAAS analysis. The source uses brand tables; this page keeps values at aggregate or de-identified sample/category level under the brand firewall.

## Key numbers

- Sample frame: nine modeling-clay brands bought from Erbil city markets in January 2018, with `54` color samples analyzed. Seven main colors were collected for most brands; Italian- and German-origin brands had fewer available colors.
- Table 2 and the abstract report detection counts across `54` clay samples: total Cr detected in `0`; Cd in `5`; Cu in `36`; Ni in `40`.
- Table 3 aggregate concentration ranges, all copied as `mg/kg`: Cu `ND - 819.20`; Cd `ND - 0.87`; total Cr `ND`; Ni `ND - 61.10`.
- The paper states that Cr speciation as Cr(III) versus Cr(VI) was not performed or identified. The chromium result is therefore total Cr context only, not Cr(VI).
- Brand-level total detected-metal load ranged from `23.31 mg/kg` to `221.41 mg/kg` across the nine de-identified brand groups. The brand/order labels are suppressed here because the source's table is brand-coded.
- Regulatory comparison quoted by the authors: for EN 71-3:2013 Category I pliable toy materials, the paper lists Cu `622.5 mg/kg`, Ni `75 mg/kg`, Cd `1.3 mg/kg`, Cr(III) `37.5 mg/kg`, and Cr(VI) `0.02 mg/kg`.
- The authors state that all `54` samples were below those EU Category-I migration limits for the investigated metals except `1` colorful pliable clay sample.
- The single exceedance was a blue clay sample with Cu `819.2 mg/kg`, above the source-listed Cu Category-I limit of `622.5 mg/kg`. The consumer brand name is not repeated on this page.
- The highest Ni value reported was `61.10 mg/kg`, below the source-listed Ni Category-I limit of `75 mg/kg`.
- Cd was reported as `0.87 mg/kg` in one mixed-color sample, `0.21 mg/kg` in two red/mixed-color samples from another group, and `0.20 - 0.21 mg/kg` in two red/mixed-color samples from a third group; all are below the source-listed Cd Category-I limit of `1.3 mg/kg`.
- ANOVA across seven brand groups reported no statistically significant difference among mean concentrations at `95 %` confidence: `p-value > 0.05`, with `p-value` `0.057`, `F` `3.14`, and `F(critical)` `3.287`. Two groups were excluded because only a few colors were available.

## Methods (brief)

The study wet-digested `1.0 g` portions of modeling clay with `15 ml` concentrated `HNO3 65%` followed by `5 ml` concentrated `HClO4 70%`, then diluted digests to `50 ml`. Cd, Ni, Cu, and Cr were measured by flame atomic absorption spectrometry using wavelengths Cd `228.8 nm`, Ni `232.0 nm`, Cu `324.8 nm`, and Cr `357.9 nm`. Blank solutions were prepared and repeated three times for samples and working solutions. Results are reported in `mg/kg` (`ppm`) as content in the clay material; no migration test or bioaccessibility experiment was performed.

## Implications

Certification (HMTc): This source supports occurrence evidence for children's modeling clay within the broader art and craft materials row. It should not be interpreted as a U.S.-market benchmark source, and its chromium result cannot support Cr(VI) standards because speciation was not performed.

Courses: The paper is a compact example of why total-content screening, migration limits, and speciation labels need to be separated for toy materials.

App: The source can support an Erbil/Iraq market context flag for modeling clay, especially the single high-Cu finished-product sample and the lack of detected total Cr.

## Wiki pages this source may touch

- [[products/art-craft-materials]]
- [[products/toys-crafts-other]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/copper]]
- [[metals/nickel]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/ingest.txt`; the abstract, Table 1, methods, Tables 2-3, discussion, and conclusion were checked against this page.
- Identity checks before creation: DOI `10.21271/ZJPAS.32.5.13`, exact title, raw handle `MFK_cat21-07-semanticscholar-cadmium`, raw SHA-256 `4354add1758e09f9c866ae0b63eb7a729722759b89a55343fdb1bcb8c7b95153`, and candidate cite key `jalal2020-modeling-clay-metals` were searched in `wiki/sources/` and `data/evidence/audit-queue.csv`; no existing source page was found. A broad grep for `10.21271/zjpas` hit a different ZANCO paper and was not treated as a duplicate.
- Units are copied exactly as reported (`mg/kg`, `ppm`, `mg/kg` Category-I limits). No unit conversion was performed.
- Speciation: chromium is total Cr. The paper explicitly says Cr(III) and Cr(VI) were not identified, so the source does not support Cr(VI) occurrence.
- Brand firewall: the source tables name and code brands. This page records aggregate ranges, detection counts, regulatory comparison values, and de-identified exceedance facts, but does not attach consumer brand names to contamination values.
- Product slug note: the current taxonomy has `art-craft-materials`, which explicitly includes modeling clay, but no exact modeling-clay product or matrix slug. The page therefore uses broad product routing and leaves `matrices` empty.
- Evidence tier: `B` because this is a peer-reviewed local market survey with primary measurements but limited QA/QC detail and small geography-specific sample frame.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [50336a4d0](https://github.com/paleofoundation/heavymetalindex/commit/50336a4d0) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
