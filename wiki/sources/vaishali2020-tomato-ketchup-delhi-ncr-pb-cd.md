---
type: source
raw_handle: MFK_a-comparative-study-on-presence-of-heavy-metals-le
cite_key: vaishali2020-tomato-ketchup-delhi-ncr-pb-cd
title: "A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street Vendors of Delhi NCR"
authors: [Vaishali, Negi S]
year: 2020
publication: "Journal of Advanced Research in Medical Science & Technology"
doi: 10.24321/2394.6539.202007
no_doi_assigned: false
access_url: "https://doi.org/10.24321/2394.6539.202007"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY-NC"
raw_path: "raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street V.pdf"
raw_sha256: 62db191be9174ae487b847b8a3a7d9f559d640f9c88ad09c6675d71cddf4ed39
metals: [Pb, Cd]
ingredients: ["[[ingredients/tomato]]", "[[ingredients/ketchup]]"]
products: ["[[products/condiments-general]]"]
matrices: [ketchup]
jurisdictions: [IN]
near_duplicates: []
sample_n: 12
sample_population: "Tomato ketchup from street vendors in Delhi, Noida, Gurugram, and Faridabad (3 samples per locale)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-28
---

# Vaishali & Negi 2020 — Lead and cadmium in tomato ketchup from Delhi NCR street vendors

This short research article reports Pb and Cd concentrations in 12 tomato ketchup samples collected from street food vendors across four locales in the Delhi NCR region of India. Lead was reported in all four locale summaries, with mean concentrations in Delhi (0.183 ppm), Noida (0.096 ppm), and Faridabad (0.089 ppm) exceeding the FAO/WHO Codex limit of 0.05 mg/kg; only Gurugram samples (0.031 ppm mean) fell below. Cadmium was below detectable limit in all 12 samples.

## Key numbers

Pb concentrations by locale (mg/kg, wet weight, mean ± SD):
- Delhi: 0.183 ± 0.11 (range 0.10–0.311)
- Noida: 0.096 ± 0.08 (range BDL–0.148)
- Faridabad: 0.089 ± 0.15 (range BDL–0.266)
- Gurugram: 0.031 ± 0.05 (range BDL–0.093)

Cd: BDL in all 12 samples across all four locales.

FAO/WHO Codex limit for Pb in tomato products: 0.05 mg/kg (at time of study). ANOVA across locales: not significant (p = 0.42).

n = 12 samples (3 per locale). Method: Atomic Absorption Spectrophotometry (AAS). No LOD/LOQ values reported.

## Methods (brief)

Samples were collected in sterilised sealed glass containers from street vendors and transported to the laboratory within two days. Analysis was by AAS; sample preparation and digestion chemistry are not specified. Statistical analysis was by one-way ANOVA in Microsoft Excel. No LOD or LOQ values are specified, and BDL is not numerically defined; this limits quantitative utility. The study does not distinguish branded vs. unbranded ketchup or report processing/storage conditions.

## Implications

**Certification:** The Delhi, Noida, and Faridabad mean Pb values exceed the Codex limit; this is a small-n study in an informal market setting in India and carries B-tier weight. It provides contextual evidence that tomato ketchup can concentrate Pb above regulatory thresholds depending on sourcing and handling, but does not anchor HMT&C threshold setting on its own.

**Courses:** Useful illustration of urban-market lead burden in processed condiments; suitable for modules on informal supply-chain contamination pathways.

**App:** Contributes context for ketchup/tomato sauce as a Pb-relevant condiment category in informal-market settings; Cd signal here is null (BDL), consistent with the study's tomato-ketchup matrix.

## Wiki pages updated on ingest

- [[products/condiments-general]]
- [[ingredients/tomato]]
- [[ingredients/ketchup]]

## Verification notes

- 2026-05-18 Codex merge-enhance against the source PDF in `condiment_papers`: corrected `raw_path`, changed unsupported `license: "CC BY"` to `unknown` because the PDF states open access but does not state a Creative Commons license, and replaced missing `[[products/ketchup]]` with live product route `[[products/condiments-general]]`.
- Numerical table checked against Table 1 and Table 2: Pb means/ranges for Delhi, Gurugram, Faridabad, and Noida match the source; Cd is BDL in all four locales; ANOVA p = 0.42 matches Table 1.
- Cross-vendor audit (Codex, 2026-05-18) retained `matrices: [ketchup]` as a source-specific matrix label because the common matrices vocabulary does not include a clean tomato-ketchup or condiment matrix; routing is carried by live `[[ingredients/ketchup]]` and `[[products/condiments-general]]` links.
- 2026-05-28 Claude Opus 4.7 merge-enhance against the source PDF: (1) replaced placeholder `raw_handle: manual-fetch-kimi` with the MFK_-prefixed slug `MFK_a-comparative-study-on-presence-of-heavy-metals-le` per the manual-fetch handle convention; (2) added `raw_sha256` computed from the local PDF; (3) added `access_url` from the DOI; (4) restored `license: "CC BY-NC"` after re-reading the source — the Creative Commons BY-NC mark is rendered as an icon in the page-1 footer below the "Copyright (c) 2020: Advanced Research Publications" line, which the 2026-05-18 text-only pass missed. Body content was unchanged because the 2026-05-18 numerical table check still holds against Tables 1 and 2.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [099c229aa](https://github.com/paleofoundation/heavymetalindex/commit/099c229aa) | 2026-05-28 | minor | Narrative text revised |
| [01de84b17](https://github.com/paleofoundation/heavymetalindex/commit/01de84b17) | 2026-05-18 | minor | Narrative text revised |
| [eb3c1adf9](https://github.com/paleofoundation/heavymetalindex/commit/eb3c1adf9) | 2026-05-18 | major | 1 section added; narrative text revised |
| [f3c079bf9](https://github.com/paleofoundation/heavymetalindex/commit/f3c079bf9) | 2026-05-14 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
