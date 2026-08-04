---
type: source
raw_handle: MFK_lehel2018
cite_key: lehel2018-hungary-seafood-metals
title: "Heavy metals in seafood purchased from a fishery market in Hungary"
authors: [Lehel J, Bartha A, Danko D, Lanyi K, Laczay P]
year: 2018
publication: "Food Additives & Contaminants: Part B"
doi: "10.1080/19393210.2018.1505781"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/lehel2018.pdf"
raw_sha256: "993475da76d4d63952c67febfb5821516dfa0305f54f5eae5e0d74650c29cf37"
access_url: "https://doi.org/10.1080/19393210.2018.1505781"
metals: [tAs, Cd, Pb, tHg]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/shellfish]]", "[[ingredients/molluscs]]", "[[ingredients/bivalve-molluscs]]"]
products: ["[[products/seafood]]", "[[products/shellfish]]"]
matrices: [seafood, shellfish, bivalves, oysters, squid, wet-weight, market-samples]
jurisdictions: [HU, DK, IT, FR, AR]
near_duplicates: []
sample_n: 114
sample_population: "Seafood purchased weekly for 20 weeks from a fishery product market in Hungary: shellfish n=42 from Denmark and Italy, oysters n=34 from France, and squid n=38 from Argentina."
updated: 2026-06-08
---

# Lehel 2018 - Hungary seafood market metals

## Overview

Lehel, Bartha, Danko, Lanyi, and Laczay measured arsenic, cadmium, lead, and mercury in shellfish, oysters, and squids purchased from a Hungarian fishery product market. The samples represented imported seafood origins: shellfish from Denmark and Italy, oysters from France, and squids from Argentina. Arsenic is reported as total/unspecified arsenic; mercury is reported as total mercury and was below the method limit of detection in every sample.

## Key numbers

Table 3 reports heavy-metal content in `mg kg-1 ww` as mean +/- SD and range:

| Food | Full sample n | Element | Reported n | Mean +/- SD | Range / censoring |
| --- | ---: | --- | ---: | --- | --- |
| Shellfish | `42` | As | `42` | `3.01 +/- 1.46` | `1.04-7.89` |
| Shellfish | `42` | Cd | `42` | `0.26 +/- 0.12` | `0.11-0.71` |
| Shellfish | `42` | Pb | `23` | `0.95 +/- 1.12` | `< 0.2-5.46` |
| Shellfish | `42` | Hg | `42` | `< 0.5` | below LOD in each sample |
| Oysters | `34` | As | `34` | `2.88 +/- 1.12` | `1.48-6.47` |
| Oysters | `34` | Cd | `34` | `0.28 +/- 0.08` | `0.15-0.46` |
| Oysters | `34` | Pb | `13` | `0.66 +/- 0.56` | `< 0.2-2.35` |
| Oysters | `34` | Hg | `34` | `< 0.5` | below LOD in each sample |
| Squids | `38` | As | `38` | `1.28 +/- 0.52` | `0.43-2.42` |
| Squids | `38` | Cd | `38` | `0.30 +/- 0.16` | `0.10-0.80` |
| Squids | `38` | Pb | `12` | `0.59 +/- 0.33` | `< 0.2-1.47` |
| Squids | `38` | Hg | `38` | `< 0.5` | below LOD in each sample |

The abstract states that the average concentration of arsenic in shellfish, `3.01 +/- 1.46 mg kg-1`, was significantly higher than in oysters (`2.88 +/- 1.12 mg kg-1`) and squids (`1.28 +/- 0.52 mg kg-1`). Cadmium was detected in all samples, but the source reports no statistical difference among shellfish, oysters, and squids (`p = 0.351`). Lead was detected above the `0.2 mg kg-1` LOD in `54.8%` of shellfish samples, `38.2%` of oyster samples, and `31.6%` of squid samples; the source reports no statistical difference among species (`p = 0.412`).

Table 4 reports exposure-context intake calculations in `ug kg-1`. Calculated arsenic intake ranges were shellfish `24.3-184.1` (average `70.2`), oyster `34.5-151.0` (average `67.2`), and squid `10.0-56.5` (average `29.8`). Calculated cadmium intake ranges were shellfish `10.3-66.3` (average `24.3`), oyster `14.0-42.9` (average `26.1`), and squid `9.3-74.7` (average `28.0`). Calculated lead intake ranges were shellfish `< 4.7-127.4` (average `22.1`), oyster `< 4.7-54.8` (average `15.4`), and squid `< 4.7-34.3` (average `13.8`).

## Methods (brief)

Samples were collected weekly for `20` weeks from March to July `2015` at a local fishery product market in Hungary. Soft tissues of shellfish and oysters and squid tubes without gastrointestinal tract were homogenized, frozen at `-70 °C`, microwave-digested with nitric acid and hydrogen peroxide, and analyzed by ICP-OES. Method validation used bovine liver reference material NIST SRM 1577c; reported LODs were As `0.5 mg kg-1`, Cd `0.05 mg kg-1`, Hg `0.5 mg kg-1`, and Pb `0.2 mg kg-1`.

## Implications

This source supplies direct seafood-market occurrence evidence for shellfish, oysters, and squid sold in Hungary, with imported seafood origins documented in the sampling section. It is useful for shellfish and broad seafood routing, but the arsenic values are total arsenic and should not be used as measured inorganic arsenic. The mercury result is total mercury below LOD; it should not be promoted to methylmercury.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; abstract, sample collection, analytical method, Table 1, Table 2, Table 3, Table 4, and Results text were checked in `/tmp/f3_texts/lehel2018.txt`.
- DOI `10.1080/19393210.2018.1505781`, raw handle `MFK_lehel2018`, and cite-key checks found no existing source page before creation.
- Table 3 values are preserved as `mg kg-1 ww`; no dry-weight conversion or unit normalization was performed.
- Speciation: arsenic is total/unspecified As and mercury is total Hg; no inorganic arsenic or methylmercury speciation was measured.
- Brand firewall: the study sampled a fishery product market, but no brand-level contamination values are reported.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no ingredient slug exists for squid or oyster, so broad seafood/shellfish/mollusc routing is used.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [3eea5692d](https://github.com/paleofoundation/heavymetalindex/commit/3eea5692d) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
