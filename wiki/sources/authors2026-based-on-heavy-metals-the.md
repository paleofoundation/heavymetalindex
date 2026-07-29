---
type: source
raw_handle: RPMEHG_10-1038-s41598-024-78412-4
cite_key: authors2026-based-on-heavy-metals-the
title: "based on heavy metals: The"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1038/s41598-024-78412-4
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1038/s41598-024-78412-4"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/food_heavy_metal_contamination_CLEAN 2/FM_11541880_Machine_learning_model_for_age-related_macular_degeneration.pdf"
raw_sha256: "4ae37cd6a42fd8caac9e5908ea23aeec8ae2a9af3e1aeab7e93c116bb0c392c1"
metals: [tHg, Cd, Pb, tAs, Ni, Al, Sn, Cr]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]", "[[products/seaweed-kelp-foods]]"]
matrices: [fish-marine-non-predatory, seaweed-kelp-foods]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - based on heavy metals: The

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- study, we analyzed the relationship between 13 urinary heavy metal concentrations and AMD using
- NHANES data between 2005 and 2008. We constructed and compared 11 machine learning models
- (SHAP) analysis. 216 AMD patients out of 2380 participants. The random forest (RF) model performed
- optimally in predicting the risk of AMD, with an AUC value of 0.970. PFI analyses revealed that age
- disease in the developed world and the leading cause of blindness in the elderly1. The socio-economic costs of
- are estimated to exceed $4.6 billion2. Wet AMD, characterised by neovascularisation and vascular exudates,
- for dry AMD, and early screening and intervention can help to prevent the progression of advanced AMD3.
- found that individuals carrying AMD risk genes, including CFH and ARMS2, showed significant differences
- play an integral role in the development of AMD4. Mrowicka et al. suggested that increased intake of dietary
- macular degeneration, cataract and other ocular diseases5. There is evidence that heavy metals may play an
- important role in the development and progression of AMD. As early as 2000, the Age-Related Eye Disease
- that intake of high levels of zinc reduced the risk of advanced AMD6. However heavy metal concentrations have
- not been considered as potential predictors of AMD risk by other studies and included in the analyses4,7.
- Heavy metals are metals with densities greater than 5 g/cm3 and include chromium (Cr), lead (Pb), cadmium
- Department of Ophthalmology, The First Affiliated Hospital of Bengbu Medical University, 287 Changhuai Road,
- others8. Due to the chronic cumulative toxicity of heavy metals, long-term exposure can cause irreversible
- degeneration9. Recent evidence suggested the link between cadmium and AMD, possibly because exposure to
- common metabolic pathways involved (e.g., mitogen-activated protein kinase pathway)10. Pamphlett et al.
- of age-related macular degeneration11. However, traditional studies have tended to limit themselves to estimating
- the effect of a single metal on AMD risk, ignoring the complex pattern of co-exposure to heavy metals12,13.
- Tao et al. suggested that heavy metals can affect the ocular microenvironment through synergistic effects14.
- relationship between heavy metal exposure and the risk of developing AMD15. Moreover, machine learning
- mechanism, which helps to understand which heavy metals best influence AMD risk16. Building machine
- To our knowledge, only Erie et al.17 and Wu et al.9 focused on the relationship between urinary cadmium
- al.18 paid attention to the relationship between blood heavy metal concentrations and AMD. However, the half-
- chemical exposure. Data on AMD patients over 40 years of age were primarily obtained for this study from
- urinary heavy metal concentrations for participants from two cycles of NHANES (2005–2006, 2007–2008),
- from urine samples to avoid potential bias14. In addition, urinary metal measurements are more widely used in
- exposure14,19. A total of 13 heavy metals, including arsenic (As), barium (Ba), cadmium (Cd), cesium (Cs),
- 2005 to 2008 using a dynamic reaction cell for Inductively Coupled Plasma Mass Spectrometry (ICP-DRC-MS)
- obtained from the CDC website (NHANES), and values below the LOD rate were calculated as LOD/2. Urinary
- obtained using the Canon CR6-45NM Ophthalmic Digital Imaging System and Canon EOS 10D digital camera
- Maculopathy Grading System20. AMD was defined as drusen with macular area greater than a 500-μm circle
- atrophy. All 2380 participants were divided into AMD (n = 216) and non-AMD (n = 2164) groups based on this
- predisposition and lifestyle21. In addition, we included socioeconomic variables such as income, education
- defined as below the poverty line (< 1.00) or above the poverty line (≥ 1.00) according to the poverty-to-income
- mass index (BMI, kg/m2), total energy intake, and urinary creatinine levels were also included in this study.
- Our dataset incorporated 37 variables, described as features in ML. 23 features were continuous variables, 14
- variables, where a VIF value below 10 indicates no multicollinearity between variables.
- data were randomly divided into two parts, 80% as the training set (n = 1904) and 20% as the test set (n = 476).
- predictive value (NPV), positive likelihood ratio (PLR), negative likelihood ratio (NLR)22.
- analysis of the contribution of features to the model output23. On the one hand, SHAP analysis allows the

## Methods (brief)

- and AMD diagnostic data collected from the National Health and Nutrition Examination Survey (NHANES)
- from urine samples to avoid potential bias14. In addition, urinary metal measurements are more widely used in
- (Sn) and platinum (Pt) were detected in urine samples of the participants in NHANES surveys conducted from
- 2005 to 2008 using a dynamic reaction cell for Inductively Coupled Plasma Mass Spectrometry (ICP-DRC-MS)
- performance. This process separates the arsenic species, which are then combined with ICP-DRC-MS to reveal
- and Quality Assurance Performance Standards. Limit of detection (LOD) values for each heavy metal were
- obtained from the CDC website (NHANES), and values below the LOD rate were calculated as LOD/2. Urinary
- exposure and AMD outcomes. We also collected and categorised similar demographics, such as economic status
- the Wilcoxon two-sample test or chi-square test. Heavy metal mercury levels were expressed as mean ± SD
- DMA, ng/mL − 3.22 (− 3.66, − 2.76) − 3.25 (− 3.67, − 2.76) − 3.17 (− 3.46, − 2.72) 0.041
- Table 1. Baseline characteristics of Participantsa. DMA, Dimethylamine; MMA, Methylmalonic Acid; UCr,
- levels that were not sufficiently high to have a significant effect on AMD in the samples in our study.
- However, there are limitations to this study. First, although NHANES has a nationally representative sample
- exposure assessment than other biomarkers (e.g., blood or tissue samples). Future studies may need to combine
- consider more diverse samples to increase the generalizability of the study.
- model output is measured by averaging the absolute SHAP values across all samples, sorted from top to bottom

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[products/seaweed-kelp-foods]]
- [[metals/mercury]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic]]
- [[metals/nickel]]
- [[metals/aluminum]]
- [[metals/tin]]
- [[metals/chromium]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
