---
type: source
cite_key: hands2024-multiyear-dark-chocolate-cocoa-usa
sample_population: "72 consumer cocoa-containing products (dark chocolate, cocoa powder, and related products) purchased in the US from retail and online sources across four cohorts: 2014 (n=17), 2016 (n=17), 2019 (n=21), 2022 (n=17)"
raw_handle: FM_11321977
title: "A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA"
authors: [Hands JM, Anderson ML, Cooperman T, Balsky JE, Frame LA]
year: 2024
publication: "Frontiers in Nutrition"
doi: "10.3389/fnut.2024.1366231"
source_type: peer-reviewed
evidence_tier: A
license: "cc-by"
raw_path: raw/studies/hands2024-multiyear-dark-chocolate-cocoa-usa.pdf
sha256: 817bb032242a39581ddd1845bb8c384d2cd0f9ddb80510444ba02eb55cd92bb0
access_date: 2026-05-12
access_url: "https://doi.org/10.3389/fnut.2024.1366231"
metals: [Pb, Cd, tAs]
ingredients: ["[[ingredients/cocoa]]", "[[ingredients/chocolate]]"]
products: ["[[products/chocolate]]"]
matrices: [dark-chocolate, cocoa-powder, cocoa-products]
jurisdictions: [US]
sample_n: 72
near_duplicates: [FM_11321977]
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Hands et al. 2024 — Multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA

## Overview

This study analyzed 72 consumer cocoa-containing products (primarily dark chocolate) purchased from US retail and online sources in four cohorts (2014, 2016, 2019, 2022) for lead (Pb), cadmium (Cd), and arsenic (As), using ICP-MS after acid or microwave digestion, assessed against California Proposition 65 maximum allowable dose levels (MADLs: Pb 0.5 mcg/day, Cd 4.1 mcg/day, As 10 mcg/day). Mean Pb concentration per serving (0.615 mcg/serving) and mean Cd per serving (4.358 mcg/serving) both exceeded Prop 65 MADLs across all products, while 97.2% (70 of 72) fell below FDA IRL limits for Pb. Organic-certified products were significantly more likely to have elevated Cd (0.4 mcg/g higher) and Pb (0.02 mcg/g higher) concentrations. Concentrations of all three metals declined significantly across cohort years (2022 lower than 2014).

## Key numbers

**Table 1 — Summary statistics across all 72 products and four cohorts:**

| Analyte | N | Mean (mcg/g) | Median (mcg/g) | Min (mcg/g) | Max (mcg/g) |
|---|---|---|---|---|---|
| Lead | 72 | 0.062 | 0.05 | 0.009 | 0.269 |
| Cadmium | 72 | 0.396 | 0.239 | 0.016 | 2.2 |
| Arsenic | 55 | 0.094 | 0.05 | 0.017 | 0.2 |

Per serving (mcg/serving): Pb mean 0.615, median 0.375; Cd mean 6.986, median 3.03; As mean 0.931, median 0.75.

**By cohort (mcg/g):**

| Year | n | Pb mean (median) | Cd mean (median) | As mean (median) |
|---|---|---|---|---|
| 2014 | 17 | 0.098 (0.1) | 0.512 (0.224) | NA |
| 2016 | 17 | 0.06 (0.05) | 0.593 (0.288) | 0.196 (0.2) |
| 2019 | 21 | 0.044 (0.03) | 0.295 (0.225) | 0.058 (0.05) |
| 2022 | 17 | 0.05 (0.055) | 0.208 (0.24) | 0.038 (0.037) |

Prop 65 MADL exceedance: 43% of products exceed Pb MADL (0.5 mcg/day), 35% exceed Cd MADL (4.1 mcg/day), 0% exceed As MADL (10 mcg/day) on a per-serving basis. 97.2% (70/72) fall below FDA IRL for Pb. Organic products: significantly higher Cd by Welch T-test (t=−2.1, p=0.02); not significantly higher Pb by T-test.

Reporting limits: Pb 0.01 µg/g, Cd and As 0.02 µg/g.

## Methods (brief)

72 consumer cocoa-containing products purchased 2014–2022 from ConsumerLab.com via third-party online retailers, physical retailers, and manufacturer websites. Four distinct cohorts. Two independent US commercial laboratories; ICP-MS (PerkinElmer Nexlon 350X) after acid/microwave digestion (0.5 g sample for Pb in concentrated HNO₃, HCl, H₂O₂; 1 g for As and Cd in concentrated HNO₃ on hotplate). AOAC 2015.01 methods. QC: 75–125% spike recoveries. Multivariate linear regressions with fixed and random effects, Bonferroni correction for multiple comparisons. Welch T-test for organic vs non-organic comparison. Panel regression with robust standard errors for year-on-year trends.

## Limitations

Product selection was influenced by prior testing results (products with higher metals were often excluded from subsequent cohorts), which may bias apparent temporal improvement. Not a random population sample; ConsumerLab product surveys reflect consumer popularity rankings. Arsenic not tested in 2014. Total arsenic reported, not speciated iAs/organic As. N varies by cohort (17–21 products). The study uses per-serving mcg/day units for compliance comparison; concentrations in mcg/g (ppm) are the more portable metric for ingredient-level comparison.

## Implications

- Certification: Highly relevant to HMT&C cocoa/chocolate category. Median Pb 0.05 mcg/g (50 ppb) and median Cd 0.239 mcg/g (239 ppb) across all 72 products. Organic certification associated with statistically significantly higher Cd — contradicts naive assumption that organic products are lower in heavy metals. Declining trend across years (2014→2022) is relevant for selecting which cohort year best represents current market baseline.
- Courses: Excellent multi-year trend dataset for teaching how market-level contamination evolves; notable organic/conventional finding.
- App: Note only — contamination_profile for chocolate/cocoa. Pb median 50 ppb, Cd median 239 ppb, tAs median 50 ppb. These are as-sold product concentrations, not cocoa-ingredient concentrations.
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[ingredients/cocoa]]
- [[ingredients/chocolate]]

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
