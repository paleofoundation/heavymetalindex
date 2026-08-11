---
type: source
raw_handle: FM_10475452
cite_key: kagawa2023-fish-arsenic-hypertension-japan
title: "Elevated arsenic level in fasting serum via ingestion of fish meat increased the risk of hypertension in humans and mice"
authors: [Kagawa T, Ohgami N, He T, Tazaki A, Ohnuma S, Naito H, Yajima I, Chen D, Deng Y, Tamura T, Kondo T, Wakai K, Kato M]
year: 2023
publication: "European Heart Journal Open"
doi: 10.1093/ehjopen/oead074
access_url: "https://doi.org/10.1093/ehjopen/oead074"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_10475452/FM_10475452.md
metals: [tAs]
ingredients: ["[[ingredients/fish]]"]
products: []
matrices: [fish-muscle, serum-biomarker]
jurisdictions: [JP]
near_duplicates: []
sample_n: 2709
sample_population: "2709 Japanese adults aged 39–75 years from Nagoya City; second cross-sectional survey of Japan Multi-Institutional Collaborative Cohort (J-MICC); Daiko Study; fasting serum collected in the morning after overnight fast (mean 14.1 ± 2.5 h)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Kagawa et al. 2023 — Fish meat arsenic and hypertension in Japanese adults

## Overview

This cross-sectional epidemiological study of 2,709 Japanese adults (Daiko Study, J-MICC) examines associations among dietary fish consumption, fasting serum total arsenic, and hypertension prevalence. Using logistic regression and mediation analysis, the authors demonstrate that higher fish-meat ingestion frequency is associated with elevated fasting serum arsenic, which in turn is associated with increased hypertension prevalence in a dose-dependent manner. A mouse experimental study confirmed that oral exposure to a mixture of arsenic species at concentrations matching those in common Japanese fish meat elevated systolic blood pressure. The species composition reported for the fish meat used in the animal experiment (Tinu, black seabream *Acanthopagrus schlegelii*) provides explicit arsenic species data for a commonly consumed Japanese fish.

## Key numbers

Fasting serum arsenic (human cohort, n=2709):
- Overall median (IQR): 0.7 µg/L (range to 2.2 µg/L)
- Hypertensive group median (IQR): 1.1 µg/L (range to 2.9 µg/L) vs normotensive 0.5 µg/L (range to 2.0 µg/L); P<0.001
- ROC-derived cut-off for hypertension risk: 1.7 µg/L (maximum Youden index)

Fish meat arsenic species composition (Tinu/black seabream, reported from prior publication, µg/g dry weight):
- Total As: 10.8 ± 1.1 µg/g (10,800 ± 1,100 ppb dry weight)
- As(V): 0.07 µg/g
- DMA: 0.13 µg/g
- AsB (arsenobetaine): 10.6 µg/g (dominant species, ~98% of total)
- TMAO: 0.10 µg/g
- Sum of species: 10.9 ± 1.9 µg/g (consistent with total As)

Hypertension prevalence among 2,709 participants: 697/2709 (25.8% not explicitly stated but calculable from n=301 male HT + 396 female HT implied by data).

Mouse study: Dose equivalent to 200 g/day fish meat consumption in a 60 kg human, scaled to mice by body surface area × 10 safety factor, elevated systolic blood pressure and fasting serum arsenic vs controls.

## Methods (brief)

Total arsenic in fasting serum measured by ICP-MS (Agilent 7500cx). Food intake assessed by validated food-frequency questionnaire (54 diet items, 6 categories including seafood subcategories: fish meat, bone-edible small fish, seaweed, fish-paste products, canned tuna, squid/octopus/shrimp/crab, shellfish, fish roe). Analyses adjusted for sex, age, BMI, smoking, alcohol, and estimated 24-hour sodium excretion. Logistic regression and restricted cubic spline used for dose-response. Mediation analysis confirmed fish meat → serum As → hypertension pathway.

Limitation: Cross-sectional design precludes causal inference in humans. Arsenic in fish meat is predominantly arsenobetaine, classified as low toxicity; the biological mechanism by which this mixture increases blood pressure is not fully established. Total arsenic in serum is the biomarker, not speciated inorganic arsenic.

## Implications

Certification: Establishes that total arsenic in fish muscle is predominantly arsenobetaine (AsB, ~98% in black seabream), but the mixture including minor inorganic and methylated species may nonetheless carry cardiovascular risk in heavy fish consumers. This supports the wiki's distinction between tAs and iAs in seafood matrices.

Courses: Strong teaching case for why arsenic speciation matters in seafood risk assessment and why total arsenic in serum (a biomarker reflecting dietary exposure) behaves differently from groundwater/inorganic arsenic.

App: Fish-meat arsenic (primarily AsB) contributes to elevated serum arsenic; risk model should note that total As in fish is not equivalent to iAs in grains. The dose data here (10,800 ppb total As dw in black seabream) is a reference concentration for fatty marine fish species.

Microbiome: Not addressed in this paper.

## Wiki pages updated on ingest
- [[ingredients/fish]]
- [[metals/lead]] (not applicable here)
- [[health/arsenic-cardiovascular]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
