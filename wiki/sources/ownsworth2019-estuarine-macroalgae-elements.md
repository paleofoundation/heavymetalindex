---
type: source
raw_handle: MFK_ownsworth2019
cite_key: ownsworth2019-estuarine-macroalgae-elements
title: "Tracing the natural and anthropogenic influence on the trace elemental chemistry of estuarine macroalgae and the implications for human consumption"
authors: [Ownsworth E, Selby D, Ottley CJ, Unsworth E, Raab A, Feldmann J, Sproson AD, Kuroda J, Faidutti C, Bucker P]
year: 2019
publication: "Science of the Total Environment"
doi: "10.1016/j.scitotenv.2019.05.263"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/ownsworth2019.pdf"
raw_sha256: "e0988a194de39354b97d0d66f628471aa954eeda457b6bf7b99aad1dd6cbbc7a"
access_url: "https://doi.org/10.1016/j.scitotenv.2019.05.263"
metals: [tAs, iAs, Pb, Cd, Ni, U, Co, Cu, Zn, Ag]
ingredients: ["[[ingredients/seaweed]]"]
products: ["[[products/seaweed-kelp-foods]]"]
matrices: [macroalgae, seaweed, kelp, brown-seaweed, dry-weight, arsenic-speciation]
jurisdictions: [GB, JP]
near_duplicates: []
sample_n: 55
sample_population: "Fifty brown macroalgae samples collected from 25 Forth Estuary/Firth of Forth locations in Scotland, plus four Laminaria japonica samples purchased from Hokkaido, Japan, and one additional commercial Japanese macroalgae sample used as a reference material."
updated: 2026-06-08
---

# Ownsworth 2019 - Estuarine macroalgae elements

## Overview

Ownsworth and colleagues measured trace elements and arsenic species in brown macroalgae from the Forth Estuary and Firth of Forth in Scotland, with Japanese *Laminaria japonica* samples used for comparison. The occurrence-relevant results are dry-weight seaweed values for total arsenic, inorganic arsenic, lead, cadmium, and other trace elements. The paper also tests hot-water, cold-water, and soup-style leaching of selected seaweed samples.

## Key numbers

The abstract reports overall macroalgal abundance order `Os << Re < Ag < U < Cd < Co < Ni < Pb < Cu < As < Zn << I`. It reports iodine `67-5061 ppm`, lead `0.047-4.1 ppm`, cadmium `0.006-0.93 ppm`, and inorganic arsenic `0-67 ppm` in macroalgae. The abstract states that many samples exceeded the source-cited American `3 ppm` and Australian `1 ppm` inorganic-arsenic limits for macroalgae; this page records that comparison as source context and does not treat it as an HMTc threshold.

The Results section reports total arsenic and speciation:

| Matrix/species context | Source-reported arsenic values |
| --- | --- |
| Forth Estuary total As, all macroalgae | `8.0-134.5 ppm`; average `50.64 +/- 34.30 ppm, 1SD` |
| *Fucus vesiculosus* total As | increased from `8 ppm (3.7° W)` to `35 ppm (2.5° W)`, `R2 = 0.69; p-value = 0.005` |
| *Laminaria digitata* total As | `41-135 ppm` |
| Japanese *Laminaria japonica* total As | `25-74 ppm` |
| *Laminaria digitata* iAs | `4.21-66.86 ppm`; text states iAs was the highest contributor to total As in LD |
| *Fucus vesiculosus* iAs | `0.07-0.44 ppm`; total As `8.0-35 ppm`; arsenosugars `4.39-33.31 ppm`; DMA `0.46-2.10 ppm` |
| Japanese *Laminaria japonica* iAs | `0-0.2 ppm`; total As `25-74 ppm`; arsenosugars `21-49 ppm`; DMA `0.6-1.9 ppm` |

The iodine Results report overall iodine `67-5061 ppm; Average = 1193 +/- 1676 ppm, 1SD`. Japanese *Laminaria japonica* iodine ranged `1205-4076 ppm`, with average `1974 +/- 1717 ppm, 1SD`; the RMJK reference material averaged `2308 +/- 63.5 ppm, 1SD, n = 7`.

Cooking/leaching experiments used about `2 g` of KB-2, KB-3, and HOK2. For total and inorganic arsenic, the soup experiment produced the greatest losses from the solid seaweed: total As `87-91%` and iAs `75-96%`. Hot water gave the least loss: total As `21-39%` and iAs `3.4-61%`. Cold water caused moderate loss: total As `45-91%` and iAs `65-66%`. The remaining liquids had their highest As and iAs abundances in the soup experiment.

The trace-element discussion uses the highest abundances of Pb `0.94 ppm` and Cd `0.029 ppm` in Scottish *Laminaria digitata* and the highest Pb `0.2 ppm` and Cd `0.9 ppm` in Japanese *Laminaria japonica* for source risk calculations. It also notes that lead abundance was reduced in all leach experiments.

## Methods (brief)

The study collected `50` brown macroalgal samples from `25` Scottish Forth locations and added Japanese comparison material from Hokkaido and a commercial reference sample. Samples were washed, dried, cut or crushed to less than `5 mm`, and stored in glass vials; holdfast and stipe were excluded. Trace metals were measured after `16 N HNO3` digestion by quadrupole ICP-MS. Total arsenic was measured after microwave-assisted digestion by ICP-MS, and arsenic speciation used HPLC-ICP-MS methods described by Bralatei et al. (2017). Cold, hot-water, and soup experiments used about `2 g` macroalgae portions.

## Implications

This source provides seaweed-food occurrence evidence for total arsenic, inorganic arsenic, lead, cadmium, and other trace metals across Scottish and Japanese brown macroalgae. It is especially useful for preserving species-level differences: *Laminaria digitata* carried much higher inorganic arsenic fractions than *Fucus vesiculosus* or Japanese *Laminaria japonica*. Downstream extraction should keep total arsenic, inorganic arsenic, dry-weight basis, and leached-solid versus remaining-liquid values separate.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; title/byline, abstract, sample collection, analytical details, iodine Results, total-As Results, As-speciation Results, leach-experiment Results, and food-implications trace-element paragraphs were checked in `/tmp/f3_unrepresented_texts/ownsworth2019.txt`.
- DOI `10.1016/j.scitotenv.2019.05.263`, raw handle `MFK_ownsworth2019`, and cite-key searches found no existing source page before creation.
- Units are preserved as source-reported `ppm`, `ppb`, `ppt`, and percentages; no conversion was performed.
- Speciation: total arsenic and inorganic arsenic are separate. Arsenosugars and DMA are documented in Key numbers but not collapsed into inorganic arsenic.
- Brand firewall: a commercial Japanese sample was used as reference material in the source, but no brand name is attached to a contamination value in this page.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; species-level slugs for *Laminaria digitata*, *Fucus vesiculosus*, and *Laminaria japonica* are absent, so broad seaweed/kelp routing is used.

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
