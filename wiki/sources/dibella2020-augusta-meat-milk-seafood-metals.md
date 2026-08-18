---
type: source
raw_handle: AUTO_ing-cow-milk-infant-formula-iAs
cite_key: dibella2020-augusta-meat-milk-seafood-metals
title: "Heavy Metals and PAHs in Meat, Milk, and Seafood From Augusta Area (Southern Italy): Contamination Levels, Dietary Intake, and Human Exposure Assessment"
authors: [Di Bella C, Traina A, Giosue C, Carpintieri D, Lo Dico GM, Bellante A, Del Core M, Falco F, Gherardi S, Uccello MM, Ferrantelli V]
year: 2020
publication: "Frontiers in Public Health 8:273"
doi: 10.3389/fpubh.2020.00273
access_url: "https://www.frontiersin.org/articles/10.3389/fpubh.2020.00273/pdf"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-cow-milk-infant-formula-ias_2020_10-3389-fpubh-2020-00273.pdf"
sha256: a2737f202b6180b06c15b0f55ffdeaf5dc617cae8a262864c93b924c8426787a
metals: [tAs, Cd, Cr, tHg, Ni, Pb, Zn]
ingredients: ["[[ingredients/milk-and-dairy]]", "[[ingredients/beef]]", "[[ingredients/meat]]", "[[ingredients/fish]]", "[[ingredients/seafood]]", "[[ingredients/shellfish]]"]
products: ["[[products/beef-product]]", "[[products/pork-product]]", "[[products/seafood]]", "[[products/fish-marine-non-predatory]]", "[[products/fish-marine-predatory]]", "[[products/shellfish]]", "[[products/fresh-fish]]"]
matrices: [beef, pork, cow-milk, sheep-goat-milk, fish, molluscs, crustaceans, seafood]
jurisdictions: [IT, EU]
sample_n: "Seafood from the Augusta Bay/Sicily study area plus terrestrial animal products from 26 farms: 5 bovine milk, 11 sheep/goat milk, 11 beef, and 3 pork samples."
sample_population: "Meat, milk, and seafood from the Augusta-Melilli-Priolo industrial area in Southern Italy; seafood pooled across fish, mollusc, and crustacean categories for some exposure calculations."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-25
---

# Di Bella et al. 2020 - Augusta Meat, Milk, and Seafood Metals

## Overview

Di Bella et al. measured heavy metals and PAHs in seafood, meat, and milk from the Augusta area in Southern Italy. The paper is direct occurrence evidence for seafood, beef, pork, and raw milk in a polluted-area context. It is not infant-formula evidence; the wishlist hit came from infant-formula comparison terms in the paper rather than sampled formula products.

## Key numbers

Table 5 reports concentrations in ug/g.

| Matrix | tAs mean +/- SD | Cd mean +/- SD | Cr mean +/- SD | tHg mean +/- SD | Ni mean +/- SD | Pb mean +/- SD | Zn mean +/- SD |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Beef | 0.012 +/- 0.008 | <LOD | <LOD | <LOD | <LOD | 0.019 +/- 0.027 | 48.94 +/- 11.94 |
| Pork | 0.015 +/- 0.012 | <LOD | <LOD | <LOD | <LOD | 0.024 +/- 0.034 | 44.91 +/- 13.43 |
| Cow milk | <LOD | <LOD | <LOD | <LOD | <LOD | 0.002 +/- 0.001 | 2.92 +/- 0.96 |
| Sheep/goat milk | <LOD | <LOD | <LOD | <LOD | <LOD | 0.002 +/- 0.002 | 2.77 +/- 1.18 |
| Total seafood products | 7.06 +/- 6.17 | 0.002 +/- 0.002 | 0.019 +/- 0.011 | 0.99 +/- 1.02 | 0.010 +/- 0.014 | 0.09 +/- 0.18 | 6.36 +/- 5.27 |

The authors report that all heavy metals were detected in seafood products, while most were below LOD in beef, pork, and milk. Seafood had the highest measured total arsenic, mercury, and lead means. Mercury drove the main non-cancer risk signal across consumption-weighted exposure: TTHQ-Hg exceeded 1 in every age class, with both cow milk and seafood contributing per the paper's narrative. Seafood-only THQ-Hg was greater than 1 for babies (2.38), children (2.23), and teenagers (1.68). Cow milk THQ-Hg also exceeded 1 in babies (10.19) and children (1.90), but that cow milk signal is an artifact of half-LOD substitution because every cow milk Hg measurement was below the 0.041 mg/kg LOD; the seafood THQ-Hg values rest on measured concentrations and are the more defensible reading of mercury risk in this dataset.

## Methods (brief)

Seafood edible tissues were digested and analyzed for As, Cd, Cr, Ni, Pb, and Zn by ICP-MS; mercury was measured by direct mercury analysis. Milk and meat heavy-metal methods were validated against matrix-specific criteria and certified reference materials. The authors converted some seafood concentrations to wet-weight basis for exposure assessment and used half-LOD substitution for values below detection.

## Implications

This source contributes polluted-area occurrence evidence for seafood and terrestrial animal products. It should route to seafood, marine fish/shellfish, beef, pork, and milk/dairy contexts, with a clear jurisdiction and contamination-source caveat. It should not fill infant-formula rows, because no infant formula was sampled.

## Wiki pages this source may touch

- [[products/seafood]]
- [[products/fish-marine-non-predatory]]
- [[products/fish-marine-predatory]]
- [[products/shellfish]]
- [[products/beef-product]]
- [[products/pork-product]]
- [[ingredients/seafood]]
- [[ingredients/fish]]
- [[ingredients/shellfish]]
- [[ingredients/milk-and-dairy]]
- [[ingredients/beef]]
- [[ingredients/meat]]
- [[metals/arsenic]]
- [[metals/mercury]]
- [[metals/lead]]
- [[metals/cadmium]]

## Verification notes

- Batch 2 auto-fetched ingest, 2026-05-25. The wishlist filename targeted cow-milk/infant-formula inorganic arsenic, but the actual paper reports meat, raw milk, and seafood occurrence data; it is not a formula source.
- Speciation: As and Hg concentrations are total/unspecified measurements. Risk calculations estimate inorganic arsenic fractions (2 percent of total As in seafood, 70 percent in terrestrial foodstuffs per EFSA) and treat methylmercury as the relevant Hg form in fish, but the measured concentration table is not speciated iAs or MeHg.
- Half-LOD substitution artifact: cow milk Hg was below the 0.041 mg/kg LOD in every sample, yet the paper's THQ and EWI calculations substitute ½ LOD and report a Hg THQ of 10.19 for babies and 1.90 for children from cow milk. Downstream syntheses should treat the milk Hg risk numbers as method artifacts, not as measured occurrence evidence, and weight the seafood Hg signal accordingly.
- Pork sampling: 3 pork samples were collected from farm slaughterhouses as generic pork meat, not as a specific cut; the ingredient list maps to `meat` rather than `pork-chop`.
- Predatory species: Sphyraena sphyrena (European barracuda, n=1, Hg 0.78 µg/g) is a predatory marine fish; routing therefore includes `fish-marine-predatory` in addition to `fish-marine-non-predatory` for the seabream and mullet samples.
- Market/geography: this is a local polluted-area dataset from Southern Italy (Augusta-Melilli-Priolo Site of National Interest) and should not be pooled silently with general-market US or EU benchmark data.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [55a3e39d1](https://github.com/paleofoundation/heavymetalindex/commit/55a3e39d1) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [db181df75](https://github.com/paleofoundation/heavymetalindex/commit/db181df75) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
