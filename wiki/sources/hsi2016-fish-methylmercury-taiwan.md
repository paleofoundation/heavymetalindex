---
type: source
raw_handle: auto-fetched
cite_key: hsi2016-fish-methylmercury-taiwan
title: "Methylmercury Concentration in Fish and Risk-Benefit Assessment of Fish Intake among Pregnant versus Infertile Women in Taiwan"
authors: ["Hsi HC", "Hsu YW", "Chang TC", "Chien LC"]
year: 2016
publication: "PLOS ONE"
doi: 10.1371/journal.pone.0155704
source_type: peer-reviewed
evidence_tier: B
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-swordfish-mehg_2016_10-1371-journal-pone-0155704.pdf"
metals: ["MeHg"]
ingredients: ["[[ingredients/swordfish]]", "[[ingredients/fish]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/fish-marine-predatory]]"]
matrices: ["fish", "swordfish", "tuna"]
jurisdictions: ["TW"]
sample_population: "224 women (62 pregnant, 162 infertile) in Northern and Central Taiwan recruited Aug 2007 – May 2010; 30 fish muscle samples (3 per species, 10 species) from Taipei City markets March – June 2014"
wiki_doi: null
sampling_locations: ["Taipei City"]
sampling_year_range: "2007-2014"
updated: 2026-06-09
---

# Hsi et al. 2016 - Methylmercury Concentration in Fish and Risk-Benefit Assessment of Fish Intake among Pregnant versus Infertile Women in Taiwan

## Overview

This study measured methylmercury in fish and used those values in a risk-benefit assessment for pregnant and infertile women in Taiwan.

## Key numbers

Fish MeHg values are reported as mean ± SD across triplicate samples per species in mg/kg wet weight (Table 3, body text page 6). Hair MeHg values are geometric mean ± standard error in mg/kg (Table 1 footnote e, body text page 6).

Fish MeHg by species (mg/kg wet wt., n = 3 per species):

- Swordfish (Xiphias gladius): 0.28 ± 0.23.
- Tuna (Thunnus alalunga): 0.14 ± 0.13.
- Cod: 0.130.
- Greater amberjack: 0.110.
- Salmon: 0.097.
- Hairtail: 0.065.
- Tilapia: 0.050.
- Mackerel: 0.017.
- Milkfish: 0.006.
- Anchovy: 0.002.

Diet-group aggregates (mg/kg wet wt.):

- Carnivorous fish: 0.11 ± 0.13.
- Omnivorous fish (milkfish only): 0.006 ± 0.01.
- Filter-feeding fish (anchovy only): 0.002 ± 0.001.

All measured fish MeHg concentrations were below the Codex guideline level of 1 mg/kg (CAC/GL 7, FAO/WHO 1991).

Hair MeHg (mg/kg, geometric mean ± SE):

- Infertile women (n = 162): 1.82 ± 0.14.
- Pregnant women (n = 62): 1.24 ± 0.18.
- P = 0.01 (Wilcoxon rank-sum).
- 80% of infertile women and 68% of pregnant women had hair MeHg exceeding the USEPA reference-dose hair concentration of 1 mg/kg.

Daily MeHg exposure dose (µg/kg body weight/day, arithmetic mean ± SD):

- Pregnant women: 0.34 ± 0.34.
- Infertile women: 0.51 ± 0.49.
- 76.7% of pregnant women and 90.9% of infertile women exceeded the USEPA RfD of 0.1 µg/kg/day.

## Methods

Hair samples (~2 cm, occipital scalp, stainless-steel surgical scissors) and 1-g fish muscle samples were prepared for MeHg analysis following the Brooks Rand BRL Method BR-0011 and USEPA Method 1630 with minor modifications. Hair was sonicated 30 min in neutral detergent, rinsed three times with deionized water, and oven-dried at 37 °C for 24 h. Fish was alkaline-digested in 25% KOH/methanol at 75 °C for 5.5 h, then liquid-liquid extracted with CH2Cl2 and HCl, filtered, and purged. Sodium acetate buffer and 1.0% NaBEt4 were added for ethylation prior to analysis on a MERX integrated automated MeHg analyzer (Brooks Rand). Quality control used IAEA-085 (human hair) and BCR-465 (tuna fish) certified reference materials; average recovery 94.7%, coefficient of variation 4.27%, accuracy 89.2%. Each sample was analyzed in triplicate.

The daily MeHg exposure dose was estimated from a species-weighted intake calculation referencing USEPA Eq. 1, with hazard quotient and allowable-daily-intake calculations against the USEPA MeHg RfD of 0.1 µg/kg/day. Statistical analysis used SPSS version 17.0; Wilcoxon rank-sum, chi-square, Fisher exact, Kruskal-Wallis, and Spearman rank correlation tests as appropriate.

## Implications

Per-species MeHg values for all 10 species are routeable to seafood occurrence context, with the predatory species (swordfish, tuna, cod, greater amberjack, salmon, hairtail) most relevant to fish-marine-predatory occurrence routing. Human hair MeHg and daily-exposure-dose values are biomonitoring/exposure context for Taiwanese women of childbearing age, not product occurrence.

## Wiki pages this source may touch

- [[ingredients/swordfish]]
- [[ingredients/fish]]
- [[products/seafood]]
- [[products/fresh-fish]]
- [[products/fish-marine-predatory]]
- [[metals/mercury-methyl]]

## Verification notes

- Source identity checked against DOI 10.1371/journal.pone.0155704 and the downloaded PDF.
- Speciation: paper analyzed MeHg directly via USEPA Method 1630 ethylation/GC-CVAFS workflow; `metals: ["MeHg"]` is correct, do not collapse to tHg.
- Statistic-type discipline: fish values are mean ± SD across triplicate samples in mg/kg wet weight (Table 3); hair values are geometric mean ± standard error in mg/kg (Table 1 footnote e). The two statistic types must not be conflated in downstream pooling.
- Method/vendor names retained in Methods (Brooks Rand BR-0011, MERX analyzer, IAEA-085, BCR-465, SPSS) are scientific-reproducibility identifiers under the locked 2026-05-17 Part 12 reading; none are attached to a contamination value.
- 2026-06-09: GPT-style 5-check audit applied. Findings applied: fish-basis qualifier and statistic-type labels added; Methods expanded with Brooks Rand BR-0011 / USEPA Method 1630 / MERX / IAEA-085 / BCR-465 detail; per-species values for all 10 species added; fish-marine-predatory added to products. Findings rejected: Check 2 ❌ severity (every slug verified present in the taxonomy snapshot; the auditor's concern was under-routing, not vocabulary, so the level was reduced to ⚠️ and addressed by adding fish-marine-predatory). Independent verification caught: sampling_year_range was null; updated to 2007-2014 to span both fish (2014) and women (2007-2010) sampling windows; daily MeHg exposure dose and RfD-exceedance percentages were absent from Key numbers; added.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [3bc764833](https://github.com/paleofoundation/heavymetalindex/commit/3bc764833) | 2026-06-09 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
