---
type: source
raw_handle: AUTO_ing-non-root-vegetables-pb-2025-10-1007-s43621-025-01930-2
cite_key: mohammadi2025-iran-carrot-cucumber-metals
title: "Health risk assessment of heavy metals in root and fruit vegetables in Iran using Monte Carlo simulation"
authors: ["Hamed Mohammadi", "Mohammad Ansarizadeh", "Masoud Yousefi", "Rozhan Feizi", "Navid Alinejad", "Fereshteh Talebi"]
year: 2025
publication: "Discover Sustainability"
doi: "10.1007/s43621-025-01930-2"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-non-root-vegetables-pb_2025_10-1007-s43621-025-01930-2.pdf"
metals: [Pb, Cd, Cr, Ni]
ingredients: ["[[ingredients/carrot]]", "[[ingredients/cucumber]]", "[[ingredients/root-vegetables]]", "[[ingredients/non-root-vegetables]]"]
products: ["[[products/root-tuber-vegetables]]", "[[products/non-root-vegetables]]"]
matrices: [carrot, cucumber, root-vegetables, fruit-vegetables]
jurisdictions: [IR]
near_duplicates: []
sample_n: 42
sample_population: "Three carrot samples and three cucumber samples from each of seven cities or sampling points in Fars Province, Iran, for a total of 21 carrot and 21 cucumber samples."
updated: 2026-06-01
---

# Mohammadi et al. 2025 - Pb, Cd, Cr, and Ni in carrots and cucumbers from Iran

## Overview

Mohammadi and colleagues measured Pb, Cd, total Cr, and Ni in carrots and cucumbers collected across seven Fars Province sampling points in Iran, then used those concentrations in deterministic and Monte Carlo dietary-risk calculations. The source reports carrot concentrations higher than cucumber concentrations for all four metals, with carrot Pb averaging 0.303 mg/kg and carrot Cr averaging 0.654 mg/kg.

## Key numbers

All concentrations below are source-reported mean values in mg/kg after the paper's dry-to-fresh conversion step.

| Matrix | Pb | Cd | Cr | Ni |
|---|---:|---:|---:|---:|
| Carrot, across seven sampling points | 0.303 | 0.004 | 0.654 | 0.409 |
| Cucumber, across seven sampling points | 0.075 | 0.003 | 0.175 | 0.136 |

Selected sampling-point means from Table 1 show the range of reported values:

| Matrix and site | Pb | Cd | Cr | Ni |
|---|---:|---:|---:|---:|
| Carrot SP1 | 0.295 | 0.003 | 0.715 | 0.356 |
| Carrot SP2 | 0.325 | 0.004 | 0.682 | 0.472 |
| Carrot SP7 | 0.319 | 0.003 | 0.662 | 0.391 |
| Cucumber SP1 | 0.109 | 0.002 | 0.211 | 0.152 |
| Cucumber SP4 | 0.092 | 0.002 | 0.192 | 0.146 |
| Cucumber SP6 | 0.046 | 0.003 | 0.201 | 0.137 |

The paper reports total metal sums of 1.296-1.483 mg/kg in carrots and 0.343-0.474 mg/kg in cucumbers. It cites comparison limits of 0.1 mg/kg Pb, 0.05 mg/kg Cd for cucumber, 0.1 mg/kg Cd for carrot, 0.5 mg/kg Cr, and 1.5 mg/kg Ni; carrot Pb and carrot Cr exceeded those cited limits, while cucumber means were below them.

For risk outputs, the paper reports non-carcinogenic HI values of 8.20E-03 for carrots and 2.31E-03 for cucumbers, both below 1.0. It also reports carcinogenic-risk values, but the abstract and later text do not match; see Verification notes.

## Methods (brief)

Carrot and cucumber samples were purchased from supermarkets in seven cities in Fars Province, Iran. Samples were washed under domestic-style conditions, dried, ground, digested with nitric acid, and measured by ICP. The source states that measured dry-weight concentrations were converted to fresh-weight values using each sample's moisture content. Risk calculations used Iranian vegetable-consumption assumptions and a 1000-iteration Monte Carlo simulation in Excel.

## Implications

- Certification: Adds Iran-market carrot and cucumber occurrence data for Pb, Cd, total Cr, and Ni. These are non-US market data and should support context or sensitivity checks unless a benchmark pool explicitly admits Iran-market samples.
- Courses: Good example of basis handling because the analytical workflow begins with dried samples but the published occurrence values are converted to fresh-weight vegetable concentrations.
- App: Contributes separate concentration rows for [[ingredients/carrot]] and [[ingredients/cucumber]] rather than a pooled vegetable-only result.

## Wiki pages this source may touch

- [[ingredients/carrot]]
- [[ingredients/cucumber]]
- [[ingredients/root-vegetables]]
- [[ingredients/non-root-vegetables]]
- [[products/root-tuber-vegetables]]
- [[products/non-root-vegetables]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/nickel]]

## Verification notes

- Chromium is total Cr, not Cr(VI).
- The paper's abstract reports carcinogenic risks of 2.32E-05 for cucumber and 1.00E-04 for carrot, while later results/conclusion text reports 3.01E-04 and 2.56E-04. Concentration tables are internally usable; carcinogenic-risk values should be treated as source-discrepant until re-audit.
- The source is not a US-market benchmark source. Jurisdiction should remain visible if these values are admitted into any pooled product-category distribution.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [c3909aad7](https://github.com/paleofoundation/heavymetalindex/commit/c3909aad7) | 2026-06-02 | major | 1 section added |
| [6c3798180](https://github.com/paleofoundation/heavymetalindex/commit/6c3798180) | 2026-06-02 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
