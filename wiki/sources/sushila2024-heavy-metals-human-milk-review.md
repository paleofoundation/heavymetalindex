---
type: source
raw_handle: papers-cube
cite_key: sushila2024-heavy-metals-human-milk-review
title: "Literature review and health risks assessment of heavy metal contamination in human milk"
authors: [Sushila S, Balda A, Balhara N, Aarushi A, Giri A]
year: 2024
publication: "Discover Minerals"
doi: 10.1007/s44346-024-00002-z
source_type: review
evidence_tier: B
license: "CC BY-NC-ND 4.0"
raw_path: "raw/Papers Cube Manual Fetch/Literature review and health risks assessment of heavy metal contamination in human milk.pdf"
metals: [Pb, Cd, tHg, tAs, Ni, Cr, Al]
ingredients: ["[[ingredients/breastmilk]]"]
products: []
matrices: [breast-milk]
jurisdictions: [IR, CY, PK, CN, IN, TR, NG, PL, IT, SE, ES]
near_duplicates: []
sample_n: null
sample_population: "Systematic review of 22 studies on heavy metals in human breast milk, multiple countries (Iran, Cyprus, Pakistan, China, India, Turkey, Nigeria, Poland, Italy, Sweden, Spain)"
quarantined: true
quarantine_reason: "Source text has an unresolved Cd country-label contradiction: highest Cd concentration is reported for Iraq, but the matching EDI/HQ/CR values are assigned to Iran; do not use country-specific Cd outlier values until manually checked against figures/source data."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-17
---

## Overview

Sushila et al. (2024) conducted a PRISMA-guided systematic review of 22 primary studies reporting metal concentrations in human breast milk across multiple countries, supplementing the literature survey with estimated daily intake (EDI), hazard quotient (HQ), and cancer risk (CR) calculations. This source is quarantined for country-specific Cd outlier use: the Cd section reports Iraq as having the highest Cd concentration (Ci=57.33 mg/L), but assigns the matching EDI/HQ/CR values (EDI=4.7 mg/kg/day, HQ=4.7, CR=3.62) to Iran, and then states that Lebanon, Cyprus, and Iraq exceeded the recommended allowance. Other clearly labeled values can be used cautiously as source-reported review values, but the Cd outlier should not be used for downstream synthesis until the figures or underlying study data are manually checked.

## Key numbers

| Metal | Country/Region | Reported Ci | EDI (mg/kg/day) | HQ | CR | Notes |
|---|---|---|---|---|---|---|
| Cd | Iraq/Iran label conflict | 57.33 mg/L is reported for Iraq; matching EDI/HQ/CR are assigned to Iran | 4.7 | 4.7 | 3.62 | Quarantined country-specific outlier; do not use without manual figure/data check |
| Cd | Cyprus | 0.45 mg/L | 0.037 | 0.037 | 0.0018 | Clearly labeled in source text; CR is above 1E-04 |
| As | Cyprus | 0.73 mg/L | NR | 0.20 | 9.86E-05 | CR below 1E-04 threshold |
| Pb | Cyprus | 1.19 mg/L | 0.097 | 0.024 | 1.8E-07 | Highest source-reported Pb concentration; unit corrected from mg/kg to mg/L |
| Hg | Ghana | 0.0076 mg/L | 0.00062 | 8.93E-07 | NR | Highest source-reported Hg concentration among countries listed |
| Ni | Multiple | Varies | NR | NR | NR | Less frequently reported |
| Cr | Multiple | Varies | NR | NR | NR | Less frequently reported |

Number of primary sources included: 22. Approximately 380 records were retrieved, 107 duplicates removed, 181 excluded at initial screening, 92 full texts reviewed, and 70 excluded for insufficient or insignificant data. Countries represented include Iran, Cyprus, Pakistan, China, India, Turkey, Nigeria, Poland, Italy, Sweden, Spain, South Africa, Brazil, Egypt, Ghana, Lebanon, Saudi Arabia, South Korea, Iraq, and Australia. Arsenic was not speciated in the review-level extraction; concentrations cited here should be treated as total arsenic unless an underlying primary study specifies otherwise. The Cd outlier is internally inconsistent in the source text and should not be generalized to any country until manually reconciled.

## Methods (brief)

Systematic review following PRISMA guidelines. Studies were collected from ScienceDirect, PubMed, and Google Scholar for 2013-2023 using trace-metal/heavy-metal/toxic-metal/trace-element terms combined with mothers' milk, human milk, and breast milk. Included studies were English full-text articles reporting mean metal concentrations in breast milk; duplicate articles, books, review articles, and papers lacking mean values were excluded. Reported units were converted to mg/L, and country means were averaged when more than one study was available. EDI used Ci x 0.67 L/day divided by infant body weight 8.15 kg; HQ used EDI/RfD with a 10^-3 conversion factor; CR used exposure frequency, duration, average time, EDI, and cancer slope factor.

## Implications

**Certification:** This source is not suitable for HMT&C threshold setting or country-specific Cd claims until the Cd country-label contradiction is resolved. It remains useful as a cautionary biomonitoring review showing that breast-milk metal risk estimates are highly sensitive to geography, study selection, and unit harmonization.

**Courses:** Useful for teaching how EDI, HQ, and CR are calculated from review-level concentration data, and for showing why country labels, unit harmonization, and source-level limitations must be checked before using outlier values.

**App:** Breast milk is a biomonitoring and health-context matrix rather than a certification product benchmark. Do not promote the Cd outlier into app-facing data unless manually reconciled.

## Related evidence

- [[ingredients/breastmilk]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic-total]]
- [[metals/mercury-total]]
- [[metals/nickel]]
- [[metals/chromium]]
- [[metals/aluminum]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
