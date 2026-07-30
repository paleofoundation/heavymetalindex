---
type: source
raw_handle: FM_12198073
cite_key: lin2025-taiwan-blood-metals-urothelial-carcinoma
title: "LINE-1 DNA methylation mediates smoking-related risk in site-specific urothelial carcinoma: a Taiwan case-control study"
authors: [Lin CH, Hung PH, Chang CH, Chang H, Chung MC, Chang WC, Chung CJ]
year: 2025
publication: "Archives of Toxicology"
doi: 10.1007/s00204-025-04051-x
access_url: https://doi.org/10.1007/s00204-025-04051-x
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 4.0"
raw_path: raw/markdown/FM_12198073/FM_12198073.md
metals: [As, Cd, Pb, Cr, Ni]
ingredients: []
products: []
matrices: [blood, biomonitoring]
jurisdictions: [TW]
near_duplicates: []
sample_n: 1047
sample_population: "478 urothelial carcinoma cases (266 bladder, 204 upper tract) and 569 hospital controls; central Taiwan; recruited 2011–2019; mean age ~68 years"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Lin et al. 2025 — Blood metals and urothelial carcinoma risk in Taiwan

This hospital-based case-control study measured whole-blood concentrations of arsenic, cadmium, chromium, nickel, and lead in 478 urothelial carcinoma (UC) patients and 569 controls recruited at a medical center in central Taiwan between 2011 and 2019. The primary finding relevant to food safety is that blood arsenic was significantly elevated in UC cases compared with controls, independently associated with bladder cancer (UB) risk after adjustment for confounders (adjusted OR = 1.05 per µg/L; 95% CI: 1.02–1.08; p = 0.002), and selected by LASSO regression as the most important metal for both UB and upper tract UC. The authors explicitly note that seafood consumption is a recognized driver of blood arsenic in this population and was not captured in the questionnaire, constituting a measurement-bias limitation.

## Key numbers

Blood arsenic (µg/L): controls mean 6.05 ± 4.45; UC cases mean 7.47 ± 6.86; bladder cancer cases mean 7.66 ± 7.48; upper tract UC cases mean 7.21 ± 6.03.

Blood cadmium (µg/L): controls 1.05 ± 0.66; UC cases 1.14 ± 0.77; bladder cancer cases 1.25 ± 0.88; upper tract UC cases 0.98 ± 0.57.

Blood lead (µg/dL): controls 27.55 ± 20.79; UC cases 27.48 ± 15.63; bladder cancer 28.30 ± 16.26; upper tract UC 26.45 ± 14.92. Lead was not significantly associated with any UC subtype.

Blood chromium (µg/dL): controls 18.11 ± 25.30; UC cases 15.42 ± 19.86. Not significantly associated.

Blood nickel (µg/dL): controls 7.65 ± 14.99; UC cases 7.76 ± 9.52. Not significantly associated.

ATSDR reference for "normal" blood arsenic: below 1 µg/L. The study population's mean control blood arsenic of 6.05 µg/L is substantially higher than this reference, consistent with Taiwan's documented dietary arsenic exposure from rice and seafood.

LODs: As 0.03 ppb, Cd 0.007 ppb, Pb 0.067 ppb; values below LOD were divided by √2. Analytical instrument: Agilent 7700c ICP-MS with nitric acid digestion; calibration R ≥ 0.99; recovery 85–115%; CV 5–10% per metal.

## Methods (brief)

Hospital-based case-control study, n=1047. Whole blood digested with nitric acid; ICP-MS (Agilent 7700c) quantified As, Cd, Cr, Ni, and Pb simultaneously. Reference material: Seronorm Trace Elements Whole Blood. Analysis used LASSO regression for metal variable selection, logistic regression for risk estimation, random forest for variable importance ranking, and causal mediation analysis to assess LINE-1 DNA methylation as a potential mediator. The study was designed primarily to investigate epigenetic mediation of smoking-UC risk; metal measurements were secondary exposures evaluated alongside smoking, Chinese herbal medicine use, and comorbidities.

Key limitation for dietary attribution: the study did not capture seafood consumption frequency. In Taiwan, dietary seafood is a major contributor to blood arsenic elevation (predominantly organic arsenobetaine and dimethylarsinic acid species), which would inflate total blood arsenic without contributing meaningfully to inorganic arsenic exposure. The study measured total arsenic in blood, not speciated arsenic. This limits inference about inorganic arsenic-specific risk from this dataset.

## Implications

Certification: This is a biomonitoring study, not a food concentration study, so it does not directly support product-level limits. It documents the magnitude of arsenic body burden in a general Taiwanese adult population and provides context for why inorganic arsenic exposure from dietary rice and seafood is a public-health priority.

Courses: Useful for illustrating that even general populations in moderate-arsenic-exposure settings exhibit blood arsenic well above ATSDR's nominal "normal" reference, and for explaining the distinction between total blood arsenic (dominated by organic species from seafood) versus inorganic arsenic exposure as the relevant toxicological metric.

App: No direct ingredient concentration data. Not applicable to contamination-profile updates.

## Wiki pages updated on ingest

- [[metals/arsenic]]
- [[metals/cadmium]]
- [[health/urothelial-carcinoma-arsenic]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [a05bf3eb5](https://github.com/paleofoundation/heavymetalindex/commit/a05bf3eb5) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
