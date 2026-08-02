---
type: source
raw_handle: MFK_determination-of-some-minerals-and-heavy-metals-in
cite_key: yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus
title: "Determination of Some Minerals and Heavy metals in Raw Cow's Milk Collected from Different Regions of Muş Province"
authors: [Yildiz Kucuk N, Gokcek R]
year: 2024
publication: "Afyon Kocatepe University – Journal of Science and Engineering (AKU J. Sci. Eng.)"
doi: 10.35414/akufemubid.1391478
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: "raw/Manual Fetch Kimi /05_Dairy_Eggs_and_Alternatives/05_Dairy_Eggs_and_Alternatives/Determination of Some Minerals and Heavy metals in Raw Cow's Milk Collected from Different Regions of Muş Province.pdf"
raw_sha256: ef8e2fd59b6be1c8693db24ab1ab6a7f32bae4af519178e8558d864c05286a0b
metals: [Pb, Cd, Fe, Cu, Mn, Mg, Zn]
ingredients: ["[[ingredients/milk-and-dairy]]", "[[ingredients/whole-milk]]"]
products: []
matrices: [cow-milk]
jurisdictions: [TR]
near_duplicates: []
sample_n: 10
sample_population: "10 raw cow milk samples from different regions of Muş province, eastern Turkey"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

## Overview

This study measured Pb, Cd, Fe, Cu, Mn, Ca, Mg, Na, K, and Zn in 10 raw cow milk samples collected from different locations in Muş province in eastern Türkiye using atomic absorption spectrometry (AAS). Lead and cadmium were the heavy metals of primary concern; essential minerals were also characterized. Table 2 reports Pb from 0.19 to 0.44 mg/L and Cd from 0.20 to 0.38 mg/L. The authors compare Pb against the Turkish Food Codex raw-milk lead limit of 0.020 mg/kg and state that all samples exceed that limit; they also state that the Turkish regulation did not specify limits for the other measured elements.

## Key numbers

All values in mg/L (wet weight), n = 10 samples from distinct locations in Muş province, Turkey. Analyzed by AAS (Agilent 240FS AA).

- Pb (lead): range 0.19 ± 0.01 to 0.44 ± 0.01 mg/L (Table 2). The source-cited Turkish Food Codex comparator for raw milk is 0.020 mg/kg; all samples exceed it under the authors' comparison.
- Cd (cadmium): range 0.20 ± 0.00 to 0.38 ± 0.00 mg/L. The authors state that no Turkish regulatory residue limit was specified for the other measured elements.
- Fe: range 0.24 ± 0.01 to 1.96 ± 0.01 mg/L
- Cu: range 0.11 ± 0.00 to 0.50 ± 0.00 mg/L
- Mn: range 0.12 ± 0.00 to 0.20 ± 0.00 mg/L
- Mg: range 197.81 ± 0.00 to 294.19 ± 0.00 mg/L
- Zn: range 8.25 ± 0.00 to 14.51 ± 0.00 mg/L
- Ca (highest): up to 433.45 ± 0.00 mg/L (in sample S10)
- Na (highest): up to 2498.99 ± 0.01 mg/L (in sample S6)
- K (highest): up to 1146.25 ± 0.02 mg/L (in sample S10)

Note: Table 2 gives S10 Pb as 0.44 ± 0.01 mg/L, while the bilingual abstract summarizes the Pb range as 0.40 ± 0.01 to 0.19 ± 0.01 mg/L. This page follows Table 2 for the full range and preserves the discrepancy as a source-internal note.

## Methods (brief)

Raw cow milk samples from Muş province were collected in 100 mL containers and stored at -20°C until analysis. The sample preparation modified Kılıç and Bozkaya 2017: 27 mL milk was mixed with 23 mL 20% trichloroacetic acid, centrifuged, digested with nitric acid plus hydrogen peroxide, sulfuric acid, and perchloric acid steps, diluted to 20 mL, centrifuged again, and analyzed by AAS (Agilent 240FS AA). Calibration curves used a 1000 mg/L multi-element stock solution for Pb, Cd, Fe, Cu, Mn, Ca, Mg, Na, K, and Zn. No LOD/LOQ values, certified reference material recovery, spike recovery, or reagent-blank results are reported in this paper.

## Implications

Standards work: This source is a small regional occurrence study for raw cow milk in Muş province. It can support geographic-context discussion for [[ingredients/milk-and-dairy]] and [[ingredients/whole-milk]], but the small sample size and limited method-validation reporting mean the absolute Pb and Cd values should be treated cautiously in quantitative synthesis.

Courses: Useful as a teaching example for regional raw-milk monitoring, AAS sample preparation, and the difference between source-cited legal comparators and independent standards math.

App: Supports raw-milk geographic context only; it does not provide finished dairy product or infant formula values.

Microbiome: Not addressed in this study.

## Wiki pages updated on ingest

- [[ingredients/milk-and-dairy]]
- [[ingredients/whole-milk]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/iron]]
- [[metals/copper]]
- [[metals/manganese]]
- [[metals/magnesium]]
- [[metals/zinc]]
- [[regulations/turkey-food-codex-contaminants-2023-lead-raw-milk]]

## Verification notes

- Merge-enhanced 2026-05-18 from the full manual-fetch PDF path and SHA-256 recorded in frontmatter.
- DOI identity check matched the existing source page; no duplicate source page was found.
- Replaced the older `manual-fetch-kimi` handle, truncated raw path, invalid `ingredients/milk` link, and non-vocabulary `raw-cow-milk` matrix.
- Corrected Pb range to Table 2's full 0.19-0.44 mg/L range; the abstract's 0.40 mg/L maximum appears to omit S10.
- Removed unsupported EU cadmium-limit language; the paper says the Turkish regulation specifies the Pb raw-milk comparator and not limits for the other measured elements.
- The cited 2011 Turkish Food Codex Contaminants Regulation was repealed by the 2023 regulation. The current Turkish raw-milk Pb anchor is [[regulations/turkey-food-codex-contaminants-2023-lead-raw-milk]].
- Inline audit (Claude Opus 4.7, 2026-05-18): PROMOTE. Codex ingest stopped before its fresh-context audit sub-task could spawn (agent thread limit reached); Claude audited inline as carry-over clearance. Numerical fidelity matches body Key numbers, slug vocabulary all valid against current taxonomy, speciation discipline correct (Pb/Cd as bulk metals), Methods names instrument vendor per Exception 2 of strict brand-firewall, zero consumer-brand naming, no Part 2 firewall violations.
- Fresh-context audit (v2 skill subagent, 2026-05-19): PROMOTE. All five checks ✅: numerical fidelity confirmed for Pb/Cd/Fe/Cu/Mn/Mg/Zn ranges and Ca/Na/K maxima against Table 2 p. 3; slug vocabulary all in taxonomy snapshot; speciation correct (no As/Hg measured, no false speciation); brand firewall clean (only instrument-vendor mention is Agilent 240FS AA, permitted per Exception 2); wiki/HMTc firewall clean. No corrections required.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [ef380b8d3](https://github.com/paleofoundation/heavymetalindex/commit/ef380b8d3) | 2026-05-19 | minor | Narrative text revised |
| [4477417ed](https://github.com/paleofoundation/heavymetalindex/commit/4477417ed) | 2026-05-18 | major | 1 section added; narrative text revised |
| [19f640f31](https://github.com/paleofoundation/heavymetalindex/commit/19f640f31) | 2026-05-14 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
