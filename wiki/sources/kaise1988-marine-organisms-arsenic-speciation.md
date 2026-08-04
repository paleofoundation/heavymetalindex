---
type: source
raw_handle: MFK_kaise1988
cite_key: kaise1988-marine-organisms-arsenic-speciation
title: "Distribution of inorganic arsenic and methylated arsenic in marine organisms"
authors: [Kaise T, Hanaoka K, Tagawa S, Hirayama T, Fukui S]
year: 1988
publication: "Applied Organometallic Chemistry"
doi: "10.1002/aoc.590020607"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/kaise1988.pdf"
raw_sha256: "6d3affea35f34dae68a1f9ec028722ad1185331a1122591c1fce259042ef6d72"
access_url: null
metals: [tAs, iAs]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/fish]]", "[[ingredients/shellfish]]", "[[ingredients/seaweed]]"]
products: ["[[products/seafood]]", "[[products/shellfish]]", "[[products/seaweed-kelp-foods]]", "[[products/fresh-fish]]", "[[products/fish-marine-non-predatory]]", "[[products/fish-marine-predatory]]"]
matrices: [seafood, shellfish, seaweed, fish, arsenic-speciation, as-received]
jurisdictions: [Japan]
near_duplicates: []
sample_n: 60
sample_population: "Sixty marine-organism specimens collected from the Miura Peninsula and Shimonoseki coasts in Japan, plus some market samples; fish and shellfish were separated into muscle and viscera where applicable."
updated: 2026-06-08
---

# Kaise 1988 - Marine-organism arsenic speciation

## Overview

Kaise, Hanaoka, Tagawa, Hirayama, and Fukui measured total arsenic and hydride-generation species in 60 marine-organism specimens including edible seaweeds, bivalves, gastropods, crustaceans, and fish. The paper separates water-soluble and lipid-soluble fractions and reports inorganic arsenic, methylated arsenic, dimethylated arsenic, trimethylated arsenic, and total arsenic as arsenic. It is useful for speciation context because total arsenic was often high while inorganic arsenic was not detected in most rows.

## Key numbers

Table 1 reports arsenic as As in `ug g-1`; the extracted PDF text renders the micro sign inconsistently as `p`. Parenthetical percentages in the source are species shares of total arsenic and are not repeated here.

| Matrix row | Tissue | Water-soluble iAs | Water-soluble DMA | Water-soluble TMA | Lipid-soluble DMA | Lipid-soluble TMA | Total arsenic |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| *Laminaria japonica* | whole | `ND` | `36.48` | `1.07` | `0.14` | `ND` | `44.25` |
| *Hizikia fusiforme* | whole | `1.47` | `33.01` | `3.86` | `ND` | `0.17` | `41.31` |
| *Hizikia fusiforme* | whole | `8.69` | `17.68` | `0.36` | `ND` | `ND` | `36.07` |
| *Ecklonia cava* | whole | `ND` | `12.59` | `7.24` | `ND` | `ND` | `33.05` |
| *Undaria pinnatifida* | whole | `ND` | `2.74` | `0.34` | `4.75` | `ND` | `38.27` |
| *Porphyra tenera* | whole | `ND` | `47.39` | not reported in extracted text | `0.55` | `ND` | `69.85` |
| *Gloiopeltis tenax* | whole | `ND` | `0.10` | not reported in extracted text | `0.23` | `ND` | `35.36` |

The Results text states that `14` of the `60` specimens contained total arsenic above `30 ug g-1`: seven seaweeds, four carnivorous gastropods, and three crustaceans. Of six Phaeophyceae seaweeds, five contained total arsenic over `30 ug g-1`.

High total-arsenic animal rows in Table 1 were dominated by trimethylated arsenic rather than inorganic arsenic:

| Matrix row | Tissue | Water-soluble iAs | Water-soluble TMA | Total arsenic |
| --- | --- | ---: | ---: | ---: |
| *Kellettia lischkei* | muscle | `ND` | `90.39` | `125.92` |
| *Reishia bronni* | muscle | `ND` | `109.86` | `123.79` |
| *Reishia bronni* | viscera | `ND` | `122.43` | `130.30` |
| *Babylonia japonica* | muscle | `ND` | `51.66` | `61.61` |
| *Babylonia japonica* | viscera | `ND` | `114.45` | `153.00` |
| *Penaeus japonicus* | muscle | `ND` | `59.87` | `65.83` |
| *Panulirus japonicus* | muscle | `ND` | `42.22` | `48.94` |
| *Plagusia dentipes* | muscle | `ND` | `44.99` | `46.87` |

The discussion states that the arsenic content of fish was generally low, `under 10 ug g-1`. Table 1 fish rows with higher totals included *Oplegnathus fasciatus* muscle at `9.38`, *Stephanolepis cirrhifer* viscera at `9.28`, and *Pleuronichthys cornutus* viscera at `8.08`.

The source states that water-soluble inorganic arsenic was almost at the undetectable level in most marine organisms except *Hizikia fusiforme*. The two *Hizikia fusiforme* rows listed iAs `1.47` and `8.69 ug g-1`; those are not interchangeable with total arsenic or methylated arsenic species.

## Methods (brief)

Samples were collected from the Miura Peninsula in Kanagawa Prefecture and the coast of Shimonoseki in Yamaguchi Prefecture from March to October 1987, with some specimens obtained from a market. Each fish and shellfish was dissected into muscle and viscera. Total arsenic was measured after nitric/sulfuric/perchloric acid digestion by continuous arsine generation atomic absorption spectrophotometry. Speciation used chloroform/methanol extraction, water/lipid fractionation, alkaline digestion, hydride generation with sodium borohydride, and cold-trap GC-MS selected-ion monitoring for arsine, methylarsine, dimethylarsine, and trimethylarsine.

## Implications

This paper provides historical primary speciation evidence showing why seafood and seaweed total arsenic must not be treated as inorganic arsenic. Seaweeds and some carnivorous gastropods or crustaceans had high total arsenic, but most rows reported inorganic arsenic as `ND`; *Hizikia fusiforme* was the main inorganic-arsenic exception. Routing should keep total arsenic and inorganic arsenic separate and treat the methylated arsenic species as source-reported speciation context, not as elemental arsenic thresholds.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; title/byline, Materials and Methods, Table 1, and Results/Discussion were checked in `/tmp/f3_unrepresented_texts/kaise1988.txt`.
- DOI text was not found in the extracted PDF; DOI is therefore left `null`. Raw-handle, raw-path, and cite-key searches found no existing source page before creation.
- Units are preserved as source-reported `ug g-1`; the extracted text renders the micro sign as `p`, so no conversion to mg/kg or another basis was made.
- Speciation is preserved: total arsenic (`tAs`) is not promoted to inorganic arsenic (`iAs`), and methylated arsenic species are listed separately in Key numbers.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no narrower species-level ingredient slugs exist for the named marine organisms, so broad seafood, fish, shellfish, and seaweed routing is used.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [ae1444148](https://github.com/paleofoundation/heavymetalindex/commit/ae1444148) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
