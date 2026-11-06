---
type: source
raw_handle: HMI-FILL-0025_10.1016_j.ebiom.2017.06.005
cite_key: linhart2017-antiperspirant-breast-cancer-case-control
title: "Use of Underarm Cosmetic Products in Relation to Risk of Breast Cancer: A Case-Control Study"
authors: [Linhart C, Talasz H, Morandi EM, Exley C, Lindner HH, Taucher S, Egle D, Hubalek M, Concin N, Ulmer H]
year: 2017
publication: "EBioMedicine"
doi: 10.1016/j.ebiom.2017.06.005
access_url: https://doi.org/10.1016/j.ebiom.2017.06.005
retrieval_date: "2026-11-04"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 4.0"
raw_path: "raw/HMI-FILL-0025/10.1016_j.ebiom.2017.06.005.pdf"
raw_sha256: "d71388f51245afce996228a1fdd6c64c73231327d64bc1581c08be55327ecf10"
metals: [Al]
ingredients: []
products: ["[[products/antiperspirant]]"]
matrices: [breast-tissue, antiperspirants, case-control-epidemiology]
jurisdictions: [AT]
near_duplicates: []
sample_n: 418
sample_population: "Hospital-based 1:1 age-matched case-control study: 209 female breast cancer cases and 209 healthy surgical controls recruited at the Medical University of Innsbruck, Austria, January 2010 to October 2016. Breast tissue biopsies collected from 100 cases and 52 controls."
sampling_locations: ["Innsbruck, Austria"]
sampling_year_range: "2010-2016"
updated: 2026-11-04
sources: 0
audience: [regulator, researcher, brand-legal, brand-qa]
evidence_fitness:
  supports: [breast-tissue-aluminum-concentration, antiperspirant-use-and-breast-cancer-association, underarm-cosmetic-product-epidemiology]
  does_not_support: [causal-inference, population-level-breast-cancer-incidence, non-Austrian-populations]
---

# Linhart et al. 2017: Antiperspirant use and breast cancer, Austrian case-control study

Linhart and colleagues conducted a 1:1 age-matched hospital-based case-control study at the Medical University of Innsbruck comparing 209 female breast cancer patients with 209 healthy surgical controls. The study measured aluminum concentration in breast tissue biopsies (100 cases, 52 controls) and collected structured self-report data on underarm cosmetic product (UCP) use history. It is the only study in this evidence set that links tissue aluminum measurement with both a cancer diagnosis and self-reported UCP use frequency in a matched design.

## Key numbers

**Aluminum in breast tissue (Table 3, p. 81; units: nmol per gram dry weight)**

All samples combined:
- Cases (n equals 100): median 5.77, interquartile range 2.29 to 12.90
- Controls (n equals 52): median 3.77, interquartile range 2.47 to 5.78
- p equals 0.0014 (independent samples t-test on log-transformed values)

Upper outer quadrant subgroup (cases n equals 55, controls n equals 52; Table 4, p. 82):
- Cases: median 10.92, interquartile range 3.19 to 24.87
- Controls: median 3.77, interquartile range 2.47 to 5.78
- p equals 0.0003

Tissue aluminum was significantly associated with self-reported UCP use frequency (p equals 0.0344 for use under age 30; p equals 0.0093 for use in the five years before diagnosis or interview; Table 3, p. 81).

**Epidemiological association between UCP use and breast cancer (Table 2, p. 82)**

Multivariable logistic regression adjusted for age, menarcheal age, parity, age at first birth, menopausal status, hormone replacement therapy, body mass index, alcohol use, and family history:

- UCP use "several times per day" before age 30: adjusted odds ratio 3.88, 95 percent confidence interval 1.03 to 14.66, p equals 0.0456
- UCP use "several times per day" in the five years before diagnosis or interview: adjusted odds ratio 3.16, 95 percent confidence interval 0.90 to 11.15, p equals 0.0736 (not statistically significant at the 0.05 threshold)
- Less frequent UCP use categories did not show statistically significant associations in the multivariable model

## Methods (brief)

Hospital-based case-control study. Cases: breast cancer patients attending a referral breast center in Innsbruck, January 2010 to October 2016. Controls: age-matched healthy women undergoing elective general or plastic surgery. Tissue biopsies collected intraoperatively; biopsy specimens air-dried and digested for inductively coupled plasma mass spectrometry analysis of aluminum. Self-reported UCP use frequency captured by structured personal interview: never, several times per week, daily, and several times per day, separately for under age 30 and the five years before recruitment. All biopsies were from cases and controls who agreed to provide a tissue sample; not all 209 participants in each group had biopsies (100 and 52, respectively). Mean age: cases 51.9 plus or minus 12.0 years; controls 51.8 plus or minus 12.1 years; p equals 0.2994.

## Evidence fitness

This source supports a statistically significant association between very frequent UCP use in early life and breast cancer risk (adjusted odds ratio 3.88 for several-times-per-day use before age 30), and significantly higher aluminum concentrations in breast tissue of cancer cases versus controls. The tissue aluminum measurement confirms that aluminum, presumed from UCP use, accumulates preferentially in the outer quadrant of the breast nearest the application site. This source cannot establish causality; reverse causation (cancer changes tissue aluminum dynamics) cannot be excluded. The study is limited to one Austrian referral center, which may select for more advanced cases. Recall bias for UCP frequency decades earlier is not adjustable. The several-times-per-day subcategory is small (n equals 20 cases, 13 controls).

## Limitations

Hospital-based design selects on healthcare access; cases may differ from population-incident cancers on unmeasured variables. Self-reported UCP exposure decades before recruitment is subject to recall bias. The several-times-per-day subcategory has wide confidence intervals (1.03 to 14.66) reflecting small cell counts. All controls had measurable aluminum in breast tissue, so a truly unexposed reference group was unavailable. The study did not measure UCP brand, formulation type (deodorant versus antiperspirant), or aluminum compound concentration. Reverse causation from physiological changes around breast cancer cannot be excluded. Single-center Austrian sample; generalizability to other populations is uncertain.

## Related evidence

- [[products/antiperspirant]]
- [[metals/aluminum]]
- [[sources/sawicka2024-aluminum-metalloestrogen-breast-cancer]]
- [[sources/mandriota2016-aluminum-tumorigenesis-mammary-cells]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| initial | 2026-11-04 | major | Source page created for HMI-FILL-0025 |
<!-- END: hmi-page-history -->
