---
type: source
raw_handle: RPMEHG_10-3389-fnut-2024-1422617
cite_key: authors2026-open-access-metal-exposure-on-osteoarthritis
title: "OPEN ACCESS metal exposure on osteoarthritis"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.3389/fnut.2024.1422617
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.3389/fnut.2024.1422617"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/2. Analyzing the impact of heavy metal exposure on osteoarthritis and rheumatoi.pdf"
raw_sha256: "5d36bff5e60789fed5c3edc6ffd834d70b625cd8ada9224b3296f4241e5de2e9"
metals: [tHg, Cd, Pb, tAs, Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]", "[[products/seaweed-kelp-foods]]"]
matrices: [fish-marine-non-predatory, seaweed-kelp-foods]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - OPEN ACCESS metal exposure on osteoarthritis

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Ninth People’s Hospital, Shanghai Jiaotong University School of Medicine, Shanghai, China, 2 School
- Zhang J and Li H (2024) Analyzing the impact techniques to dissect the complex relationship between heavy metal exposure
- Front. Nutr. 11:1422617. (NHANES) spanning from 2003 to 2020, this study aims to elucidate the roles specific
- doi: 10.3389/fnut.2024.1422617 heavy metals play in the incidence and differentiation of OA and RA.
- rheumatoid arthritis (RA) (1). Arthritis represents a significant global health concern. In the
- United States alone, 54 million people suffer from arthritis, and projections indicate that by
- 2040, nearly half of the population (49%) will be affected by this condition (2). Globally, the
- Fan et al. 10.3389/fnut.2024.1422617
- age-standardized point prevalence rates for osteoarthritis (3) and 2 Methods
- In recent years, the potential contributory role of heavy metals 2.1 Participants of study
- oxidative stress, leading to sustained inflammation (5)—a recognized examinations to collect comprehensive health data from the US
- factor in the pathogenesis of RA (6). Several epidemiological studies population. The methodologies pertaining to these survey strategies
- have corroborated a positive correlation between cadmium exposure have been extensively delineated in prior literature (13). For the
- and the incidence of RA (7, 8). However, the investigation into OA, purposes of our analysis, we included data from eight consecutive
- another subtype of arthritis, and its association with heavy metal cycles of NHANES, covering the period from 2003 to 2020, to ensure
- suggested a potential link between heavy metal levels and OA, these (1) Participants must be at least 20 years old.
- studies have either relied on traditional statistical methods or chosen (2) Participants must have taken part in the NHANES sub-study
- a limited sample size (9). Additionally, approaches based on machine focusing on heavy metal analysis through blood and urine tests.
- learning have not focused on the interpretability of the models (10). (3) Participants must have confirmable arthritis status information
- Research into the correlation between heavy metals and arthritis (1) Participants with missing data for more than two heavy metals
- remains nascent, and existing studies predominantly rely on out of a panel of 19.
- traditional statistical methods (11). These conventional approaches (2) Participants with an arthritis status coded as 7 or 9 according
- across various domains, including medical research. Machine comprised 14,319 participants.
- analyzing large datasets, ML algorithms are adept at uncovering 2.2 Data collection
- undetected, thereby bolstering medical decision-making and 2.2.1 Demographic characteristics of the study
- 2003 to 2020 to examine the link between heavy metal exposure and provided by NHANES. The collected characteristics encompass a
- techniques, designed to discern the presence of arthritis attributable expressed as kg/m2), racial/ethnic background (categorized broadly,
- Additive exPlanations (SHAP)-based methodologies (12) to quantify and below high school), and the poverty income ratio (PIR), which
- the contribution of individual heavy metals to the accurate detection was segmented into three groups for analytical purposes: below 1,
- identify arthritis patients and distinguish between OA and 2.2.2 Heavy metals
- RA. Additionally, it explores the correlation between heavy metal In our study, we conducted an analysis of 19 heavy metals present
- Fan et al. 10.3389/fnut.2024.1422617
- spectrometry (ICP-DRCMS) (14). This technique is renowned for its arthritis, ensuring that the research efforts are both efficient and
- 2.2.3 Outcome ascertainment the predictive model. The integration of LASSO-selected variables into
- relationship between heavy metal exposure and specific 2.4 SMOTE sampling
- 2.3 Pre-processing and extraction of ML oversampling technique (SMOTE) (16). This method is renowned for
- The dataset underpinning our study comprised 25 features, with These instances are created via linear interpolation between existing
- 21 being continuous variables and the remaining four categorized as minority class samples and their nearest neighbors, thus enriching the
- Our analysis leveraged the minimum absolute shrinkage and (17, 18).
- selection operator (LASSO) regression technique. LASSO (15) is The utility of SMOTE is particularly pronounced in our
- identified through a 5-fold cross-validation process. This approach to
- against its performance, ensuring that the selected variables are 2.5 Machine learning strategy

## Methods (brief)

- a limited sample size (9). Additionally, approaches based on machine focusing on heavy metal analysis through blood and urine tests.
- 2003 to 2020 to examine the link between heavy metal exposure and provided by NHANES. The collected characteristics encompass a
- exposure and the incidence of arthritis, as well as determining which in the blood and urine samples of participants. The quantification of
- spectrometry (ICP-DRCMS) (14). This technique is renowned for its arthritis, ensuring that the research efforts are both efficient and
- samples. The application of such rigorous analytical steps ensures the The variables selected via the LASSO method were subsequently
- 21 being continuous variables and the remaining four categorized as minority class samples and their nearest neighbors, thus enriching the
- A crucial step in the application of LASSO regression in our study be accurately assessed on an untouched, representative sample of real-
- configurations and methodologies. This preliminary phase aimed to we employed the Wilcoxon two-sample test for continuous variables
- step entailed higher computational demands, the benefits in terms of positive and negative samples—the average precision (AP) metric was
- samples across each data release cycle from the U.S. National Health
- levels in blood samples. to illuminate the impact of each variable within the XGBoost model
- Wilcoxon rank-sum test for complex survey samples; chi-squared test with Rao & Scott’s second-order correction.
- Wilcoxon rank-sum test for complex survey samples.
- features. Each point in the figure represents the SHAP value for each sample, the color represents the feature value (the red high, the blue low), and the

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[products/seaweed-kelp-foods]]
- [[metals/mercury]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
