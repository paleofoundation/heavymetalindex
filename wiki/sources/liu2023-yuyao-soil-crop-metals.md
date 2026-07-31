---
type: source
raw_handle: MFK_enrichment-characteristics-and-health-risk-assessm
cite_key: liu2023-yuyao-soil-crop-metals
title: "Enrichment Characteristics and Health Risk Assessment of Heavy Metals in Soil-Crop Systems"
authors: [Liu F, Yang Z, Li Q, Li T]
year: 2023
publication: "KSCE Journal of Civil Engineering"
doi: 10.1007/s12205-023-2459-9
access_url: https://doi.org/10.1007/s12205-023-2459-9
source_type: peer-reviewed
evidence_tier: B
license: "All rights reserved"
raw_path: "raw/Manual Fetch Kimi /June 9/Enrichment-Characteristics-and-Health-Risk-Assessment-of-Heavy-Metals-in-Soil-Crop-Systems.pdf"
metals: [tAs, Cr, Cu, Pb, Cd, tHg]
ingredients: ["[[ingredients/rice]]", "[[ingredients/fruit]]", "[[ingredients/leafy-vegetables]]"]
products: ["[[products/rice-bulk-grain]]", "[[products/fresh-fruit]]", "[[products/leafy-vegetables-other]]"]
matrices: [rice, fruit, leafy-vegetables, agricultural-soil]
jurisdictions: [CN]
near_duplicates: []
sample_n: 216
sample_population: "Paired crop and soil samples from Yuyao City, Zhejiang Province: 88 rice/root-soil pairs, 68 bayberry/topsoil pairs, and 60 mustard/topsoil pairs."
wiki_doi: null
sampling_locations: ["Yuyao City, Zhejiang Province, China"]
sampling_year_range: null
updated: 2026-06-09
---

# Liu et al. 2023 - Yuyao soil-crop heavy metals

Liu et al. (2023) measured total arsenic, chromium, copper, lead, cadmium, and total mercury in paired crop and soil samples from Yuyao City, Zhejiang Province, China. The routeable occurrence values are the crop concentrations for rice, bayberry, and mustard; paired soil concentrations are useful supply-chain context but should not be routed as product occurrence. The paper reports average crop concentrations in `mg/kg` and variation coefficients for each metal.

## Key numbers

Table 3 reports average crop metal contents in `mg/kg`; values in parentheses are the source-reported variation coefficients in `%`. The paper labels As and Hg without speciation, so they are recorded here as tAs and tHg. The crop basis is not fully harmonized in the text: rice was described as a `500 g dry sample`, while bayberry and mustard were collected as fresh samples and rinsed before storage.

| Crop | Crop sample count | tAs | Cr | Cu | Pb | Cd | tHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Bayberry | 68 | 0.024 (23.42) | 0.119 (49.89) | 0.521 (40.52) | 0.062 (43.95) | 0.007 (37.01) | 0.0017 (22.19) |
| Mustard | 60 | 0.026 (17.48) | 0.036 (19.25) | 0.432 (21.42) | 0.038 (45.01) | 0.0132 (28.10) | 0.0009 (16.23) |
| Rice | 88 | 0.107 (24.74) | 0.23 (34.69) | 2.838 (20.48) | 0.057 (56.89) | 0.095 (111.80) | 0.0045 (26.67) |

Table 4 reports crop exceedance counts against the paper's cited Chinese food-contaminant standards: bayberry Pb exceeded in `3 (8.8%)` samples, mustard crop samples had no reported exceedances, and rice Cd exceeded in `5 (11.4%)` samples. Soil exceedances were separate context: bayberry soil As `2 (5.9%)`, mustard soil Cu `1 (3.3%)`, and paddy soil Cu `3 (6.8%)`, Cd `1 (2.3%)`, and Hg `2 (4.5%)`.

Table 5 reports source-modeled non-carcinogenic HQ/HI values for crop ingestion. Bayberry HQ values were tAs `0.398`, Cr `0.197`, Cu `0.065`, Pb `0.077`, Cd `0.035`, and tHg `0.028`, with HI `0.801`; mustard HQ values were tAs `0.067`, Cr `0.009`, Cu `0.008`, Pb `0.007`, Cd `0.010`, and tHg `0.002`, with HI `0.105`; rice HQ values were tAs `1.387`, Cr `0.298`, Cu `0.276`, Pb `0.055`, Cd `0.369`, and tHg `0.058`, with HI `2.444`.

## Methods (brief)

The study collected crop samples at harvest time and paired them with nearby `0-0.2 m` soil samples. Rice ears were collected around each sampling point and mixed into a `500 g` dry sample; mustard plants were collected as `2-3 kg` fresh samples with roots removed; bayberry samples were collected from multiple positions on selected trees and mixed into a `1 kg` fresh sample. Crop samples were digested with nitric acid for Cr, Cu, Pb, and Cd and with `HNO3-HClO4` for As and Hg, then analyzed by ICP-MS and atomic fluorescence spectrometry. Soil samples were digested separately and analyzed by ICP-OES, ICP-MS, and atomic fluorescence spectrometry.

## Implications

This source supports a local China occurrence route for rice grain, fresh fruit, and leafy vegetable matrices in a paired soil-crop setting. The crop averages should stay separated by matrix because bayberry, mustard, and rice show different metal patterns and different exceedance signals. Soil values can help explain source pathways and bioconcentration but should not be pooled with crop occurrence values.

## Wiki pages this source may touch

- [[ingredients/rice]]
- [[ingredients/fruit]]
- [[ingredients/leafy-vegetables]]
- [[products/rice-bulk-grain]]
- [[products/fresh-fruit]]
- [[products/leafy-vegetables-other]]
- [[metals/arsenic-total]]
- [[metals/chromium]]
- [[metals/copper]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/mercury]]

## Verification notes

- Identity checks before writing found no existing DOI, raw-handle, or cite-key page for `10.1007/s12205-023-2459-9`, `MFK_enrichment-characteristics-and-health-risk-assessm`, or `liu2023-yuyao-soil-crop-metals`.
- Speciation: As and Hg are reported without speciation. Frontmatter and text therefore use tAs and tHg; no iAs or MeHg values were inferred.
- Units preserved: crop and soil values remain in `mg/kg`; no wet/dry conversion was performed.
- Basis caveat: the paper states rice samples were mixed into a `500 g dry sample`, while mustard and bayberry were collected as fresh/rinsed samples. It does not cleanly state one common dry-weight or fresh-weight basis for Table 3, so this page preserves the source unit and flags the ambiguity.
- Detection-limit caveat: Table 2 lists crop detection limits in `mg/kg` as Cr `0.5`, Cu `1`, Pb `0.1`, Cd `0.1`, As `0.3`, and Hg `0.01`, yet Table 3 reports several crop means below those values. The page preserves the published means and records the inconsistency rather than applying censoring.
- Source-side narrative caveat: the Results text says rice HI reached `2.44`, but a later discussion/conclusion sentence says there were no non-carcinogenic and carcinogenic risks associated with rice intake. This page reports Table 5 values and notes the contradiction.
- Matrix separation: soil rows are excluded from product occurrence values; they are only soil-crop pathway context.
- Missing slug note: the taxonomy snapshot has no exact `bayberry` or fresh-mustard crop slug. Frontmatter uses broad existing `[[ingredients/fruit]]`, `[[ingredients/leafy-vegetables]]`, `[[products/fresh-fruit]]`, and `[[products/leafy-vegetables-other]]` slugs.
- No brand names were present.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [44a2b20a5](https://github.com/paleofoundation/heavymetalindex/commit/44a2b20a5) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
