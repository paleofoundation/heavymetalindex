---
type: source
raw_handle: MFK_cot-2003-arsenic-statement
cite_key: cot2003-arsenic-food-tds
title: "Statement on arsenic in food: results of the 1999 Total Diet Study"
authors: [Committee on Toxicity of Chemicals in Food, Consumer Products and the Environment]
year: 2003
publication: "Committee on Toxicity statement"
doi: null
no_doi_assigned: true
access_url: null
source_type: gov-report
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Global Heavy Metal Reports/reports/UK/COT_2003_arsenic_statement.pdf"
raw_sha256: "5699d4dcba1a8c8b4ae15df888b5cda33b00140fd9660a0dc161b7afb8401c21"
metals: [tAs, iAs]
ingredients: ["[[ingredients/fish]]", "[[ingredients/seafood]]", "[[ingredients/poultry]]", "[[ingredients/cereals]]", "[[ingredients/water]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/canned-fish]]", "[[products/poultry-product]]", "[[products/breakfast-cereals]]", "[[products/other-grain-products]]", "[[products/bottled-drinking-water]]"]
matrices: [total-diet-study, fish, poultry, miscellaneous-cereals, drinking-water]
jurisdictions: [GB]
near_duplicates: []
sample_n: 480
sample_population: "1999 UK Total Diet Study arsenic analysis: 119 food categories collected from 24 towns and combined into 20 composite food groups; 24 samples of each food group analysed in duplicate."
sampling_locations: ["24 towns throughout the United Kingdom"]
sampling_year_range: "1999-2002"
updated: 2026-06-09
---

# COT 2003 - total and inorganic arsenic in the 1999 UK Total Diet Study

## Overview

The UK Committee on Toxicity reviewed the Food Standards Agency's 1999 Total Diet Study analysis of total and inorganic arsenic in food. The statement is an A-tier agency interpretation of occurrence and exposure data across UK total-diet food groups. It is especially useful because it reports total arsenic and inorganic arsenic separately and explicitly states that fish arsenic was predominantly organic rather than inorganic.

## Key numbers

- Study design: `119` food categories were collected from `24` UK towns and made into `20` composite food groups.
- Analytical frame: each of the `24` samples of the `20` food groups was analysed in duplicate for total and inorganic arsenic.
- Limits of detection: inorganic arsenic LOD was `0.01mg/kg` in all food groups; total arsenic LOD ranged from `0.0005` to `0.004 mg/kg` across food groups.
- Fish total arsenic from the earlier 1998 multi-element survey: commonly consumed cod, haddock, salmon, and tuna had `1.9 mg/kg - 8.4 mg/kg fresh weight`, with mean `4.6 mg/kg`.
- 1999 TDS total arsenic: highest mean levels were fish `3214 µg/kg` with range `1106-8423 µg/kg`, poultry `73.1 µg/kg` with range `<2.1-167 µg/kg`, and miscellaneous cereals `13 µg/kg` with range `<2.1-26 µg/kg`.
- Inorganic arsenic detections: detected in `20` of `24` fish samples, `10` of `24` miscellaneous-cereals samples, and `3` of `24` poultry samples.
- Upper-bound mean inorganic arsenic: fish `15.9 µg/kg`, poultry `12.5 µg/kg`, and miscellaneous cereals `11.6 µg/kg`.
- The mean inorganic-arsenic concentration in fish was less than `0.5%` of total arsenic.
- Adults: total-arsenic mean exposure `1.33 µg/kg body-weight/day`; inorganic-arsenic mean exposure `0.018 - 0.082 µg/kg body-weight/day`; total-arsenic 97.5th percentile `4.37`; inorganic-arsenic 97.5th percentile `0.043 - 0.14`.
- Toddlers aged 1.5-4.5 years: total-arsenic mean exposure `2.43 - 2.46 µg/kg body-weight/day`; inorganic-arsenic mean exposure `0.049 - 0.2`; total-arsenic 97.5th percentile `11.31 - 11.34`; inorganic-arsenic 97.5th percentile `0.11 - 0.34`.
- Upper-bound population mean exposure was `0.83 µg/kg bw/day` for total arsenic and `0.09 µg/kg bw/day` for inorganic arsenic.
- Drinking-water context: the statement notes that water at `10 µg/L` arsenic and `2 L/day` consumption would contribute up to `20 µg/day`, or `0.28 µg/kg bw/day` for a `70kg` adult.

## Methods (brief)

The FSA collected UK total-diet food categories and composited them into food groups reflecting average UK consumption. Total arsenic was measured by direct-nebulisation ICP-MS and hydride-generation ICP-MS; inorganic arsenic was measured by high-resolution ICP-MS. Specific organic arsenic compounds were not measured.

## Implications

Certification (HMTc): This source contributes A-tier UK total-diet arsenic evidence for fish, poultry, and cereal food groups, with iAs and tAs separated. Fish total arsenic should not be used as inorganic arsenic; the source reports fish iAs as less than `0.5%` of total arsenic on average.

Courses: The statement is a clean example of how seafood can dominate total arsenic exposure while miscellaneous cereals may be more important for inorganic-arsenic exposure.

App: The source can support UK arsenic context for fish/seafood, poultry, miscellaneous cereals, and drinking-water contribution notes.

## Wiki pages this source may touch

- [[products/seafood]]
- [[products/fresh-fish]]
- [[products/canned-fish]]
- [[products/poultry-product]]
- [[products/breakfast-cereals]]
- [[metals/arsenic-total]]
- [[metals/arsenic-inorganic]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/hmi_row_1452.txt`; paragraphs 15-23 and Table 1 were re-read before writing.
- Identity checks before creation: title phrase, raw handle `MFK_cot-2003-arsenic-statement`, raw SHA-256 `5699d4dcba1a8c8b4ae15df888b5cda33b00140fd9660a0dc161b7afb8401c21`, and cite key `cot2003-arsenic-food-tds` were searched in `wiki/sources/`; no existing source page was found.
- Units and basis are preserved as printed: `mg/kg fresh weight`, `µg/kg`, and `µg/kg body-weight/day`.
- Speciation: the page keeps `tAs` and `iAs` separate and does not infer iAs from total arsenic except where the source explicitly states the upper-bound assumptions.
- Closed vocabulary: no exact miscellaneous-cereals product slug exists, so the frontmatter uses broad breakfast/other-grain product rows.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
<!-- END: hmi-page-history -->
