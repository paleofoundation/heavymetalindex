---
type: source
raw_handle: MFK_efsa-journal-2017-update-use-of-the-benchmark-dose
cite_key: efsa-sc-2017-bmd-update
title: "Update: use of the benchmark dose approach in risk assessment"
authors: ["EFSA Scientific Committee", "Hardy A", "Benford D", "Halldorsson T", "Jeger MJ", "Knutsen KH", "More S", "Mortensen A", "Naegeli H", "Noteborn H", "Ockleford C", "Ricci A", "Rychen G", "Silano V", "Solecki R", "Turck D", "Aerts M", "Bodin L", "Davis A", "Edler L", "Gundert-Remy U", "Sand S", "Slob W", "Bottex B", "Cortiñas Abrahantes J", "Court Marques D", "Kass G", "Schlatter JR"]
year: 2017
publication: "EFSA Journal 2017;15(1):4658"
doi: 10.2903/j.efsa.2017.4658
source_type: gov-report
evidence_tier: A
raw_path: "raw/Manual Fetch Kimi /June 3 Folder/EFSA Journal - 2017 -  - Update  use of the benchmark dose approach in risk assessment.pdf"
raw_sha256: 740c1e1281e847be444ced2e1430f4da490e103af102282e2c2c2e8ba3f97229
access_date: 2026-06-03
access_url: https://www.efsa.europa.eu/en/efsajournal/pub/4658
license: CC-BY-ND
metals: []
ingredients: []
products: []
matrices: []
jurisdictions: [EU]
superseded_by: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
near_duplicates: []
sample_n: null
sample_population: "Methodology guidance, not occurrence data. Illustrative dose-response examples drawn from previously published JMPR (2000-2003) and EFSA (2004-2007) evaluations of pesticides, mycotoxins, food additives, and veterinary residues (10 substances, Table 1) plus three step-by-step worked examples (NTP subchronic rat body-weight study; gastric-impaction quantal data; human eye-hand coordination epidemiological dataset)."
audience: [regulator, educator]
updated: 2026-06-03
---

# EFSA Scientific Committee 2017 — Update on the use of the benchmark dose approach in risk assessment

The EFSA Scientific Committee's 41-page guidance document (adopted 17 November 2016, published EFSA Journal 2017;15(1):4658, question EFSA-Q-2014-00747) updates the Committee's 2009 BMD guidance (EFSA 2009a) on the basis of seven years of in-house application experience and methodological developments. The opinion reconfirms that the benchmark dose (BMD) approach is scientifically more advanced than the no-observed-adverse-effect level (NOAEL) approach for deriving a Reference Point (RP), introduces model averaging as the preferred method for calculating the BMD confidence interval (with rejection-on-AIC as a suboptimal fallback while model-averaging tools mature), replaces the log-likelihood with the Akaike Information Criterion (AIC) for goodness-of-fit characterisation across mathematical models, narrows the default set of recommended dose-response models, and locks in the requirement to report the BMD confidence interval (BMDL as the potential RP, BMDU for the BMDU/BMDL uncertainty ratio) rather than the point BMD. The opinion does not call for general re-evaluation of past NOAEL- or BMD-based assessments, but updates downstream guidance for risk assessors performing dose-response analyses on quantal, continuous, and epidemiological data. Appendix A summarises differences between the BMDS (US EPA) and PROAST (RIVM) software; Appendix B is the BMD analysis reporting template.

This guidance is the methodological backbone behind EFSA's BMDL-anchored heavy-metal opinions for lead (CONTAM 2010, blood-lead BMDL₀₁ values for developmental neurotoxicity, blood pressure, and chronic kidney disease), cadmium (CONTAM 2009 urinary-cadmium BMDL₅), inorganic arsenic (CONTAM 2009 lung/skin/bladder cancer BMDL₀₁ range), chromium VI (CONTAM 2014 NTP-derived BMDL₁₀ and BMDL₀₅ values), nickel (CONTAM 2015/2020 BMDL₁₀ for post-implantation loss and BMDL₁₀ for eczematous flare-up), and aluminium-related JECFA evaluations. The PDF retrieved 2026-06-03 carries an "OBSOLETE" watermark on every page; the Scientific Committee has since issued a further update of this guidance, but the 2017 document remains the historical RP-derivation methodology for EFSA's pre-2022 contaminant opinions and is required reading for reconstructing the dose-response logic those opinions are built on.

## Key numbers

Default benchmark response (BMR) values recommended for RP derivation (Section 2.5.2, Conclusions):

| Data type | Default BMR | Notation | Notes |
| --- | --- | --- | --- |
| Quantal (incidence) data | 10% extra risk | BMDL₁₀ | Recommended default; "extra risk" defined as additional risk above background divided by 1 − background response |
| Continuous (graded) data | 5% change in mean response | BMDL₀₅ | Recommended default; 5% per-cent change in mean response relative to fitted background |
| Epidemiological data | Lower BMR values may be used | — | Because observed response is often lower than 10% (Section 2.5.8) |
| Substances both genotoxic and carcinogenic | BMDL₁₀ as RP for MOE numerator | BMDL₁₀ | Per EFSA 2005 harmonised approach (reaffirmed) |

Illustrative upper bounds on the effect size at the NOAEL (Section 2.3.3, Table 1; selection of 10 substances previously evaluated by JMPR or EFSA):

| Substance (source, year) | Endpoint | Quantal: upper-bound extra risk (%) | Continuous: upper-bound per-cent change (%) |
| --- | --- | --- | --- |
| Thiodicarb (JMPR 2000) | Splenic extramedullary haematopoiesis | 21 | — |
| Carbaryl (JMPR 2001) | Vascular tumours | 15 | — |
| Spinosad (JMPR 2001) | Thyroid epithelial cell vacuolation | 2.7 | — |
| Flutolanil (JMPR 2002) | Erythrocyte volume fraction | — | 9 |
| Flutolanil (JMPR 2002) | Haemoglobin concentration | — | 9.7 |
| Flutolanil (JMPR 2002) | Mean corpuscular haemoglobin | — | 3 |
| Flutolanil (JMPR 2002) | Decreased cellular elements in spleen | 30 | — |
| Metalaxyl (JMPR 2002) | Serum alkaline phosphatase activity | — | 260 |
| Metalaxyl (JMPR 2002) | Serum AST | — | 100 |
| Cyprodinil (JMPR 2003) | Spongiosis hepatis | 5.1 | — |
| Famoxadone (JMPR 2003) | Cataracts | 29 | — |
| Famoxadone (JMPR 2003) | Microscopic lenticular degeneration | 29 | — |
| Tributyltin (EFSA 2004) | Testis weight | — | 9.1 |
| Fumonisin (EFSA 2005) | Nephrosis | 8.6 | — |
| Deoxynivalenol (EFSA 2004) | Body weight | — | 10.5 |
| Ethyl lauroyl arginate (EFSA 2007) | White blood cell counts | — | 23 |

Two-sided 90% confidence interval (one-sided 95%) for the effect size at the NOAEL is the Scientific Committee's chosen reporting convention (Table 1 footnotes a-c).

Worked Example 1 — NTP subchronic rat body-weight study (Section 2.3.4, Table 2; doses 0, 8, 25, 76, 215, 419 mg/kg b.w., n=10 per group):

| Dose (mg/kg bw) | n | Geometric mean (g) | ES (%) | Lower 95% CI of ES (%) | Upper 95% CI of ES (%) | t-statistic | p-value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 10 | 26.3 | — | — | — | — | — |
| 8 | 10 | 26.0 | −1.3 | −5.7 | 3.3 | 0.491 | 0.31 |
| 25 | 10 | 25.7 | −2.6 | −6.9 | 2.0 | 0.962 | 0.17 |
| 76 | 10 | 26.3 | −0.24 | −4.7 | 4.4 | 0.087 | 0.47 |
| 215 | 10 | 25.0 | −5.1 | −9.4 | −0.71 | 1.93 | 0.029 |
| 419 | 10 | 20.8 | −21 | −25 | −17 | 8.64 | 0.000 |

NOAEL = 76 mg/kg (highest dose without statistically significant body-weight depression); upper 95% confidence bound on the effect size at the NOAEL = 4.7% body-weight decrease. Applying BMR = 5% to a fitted exponential model y = a·exp(bxᵈ) (PROAST v. 61.5) yields BMDL₀₅ = 170 mg/kg with associated effect-size upper bound of 1.3% (vs the 4.7% bound at the NOAEL). The BMDL₀₅ (170 mg/kg) is therefore *higher* than the NOAEL (76 mg/kg) in this example, while the effect-size guarantee at the BMDL₀₅ is *tighter* than at the NOAEL.

Worked Example 2 — gastric-impaction quantal data (Section 2.3.4, Figure 3; pairwise NOAEL = 450 mg/kg with upper 95% CI of ≈ 47% extra risk; BMR = 10% extra risk; log-logistic dose-response model fitted via PROAST and BMDS): BMDL₁₀ = 171 mg/kg, i.e. 2.6-fold lower than the NOAEL of 450 mg/kg.

Worked Example 3 — human epidemiological dose-response (Section 2.3.4, Figure 4; eye-hand coordination scores 0/1 in workers, individual exposure CRD; one-stage model y = a + (1−a)(1−exp(−x/b)) fitted via PROAST v. 61.4; BMR = 10% extra risk): BMD₁₀ = 173 (units = log₁₀ CRD), BMDL₁₀ = 92.

Model-averaging weights example (Appendix's worked thyroid epithelial cell vacuolation analysis, PROAST v. 62.3, BMR = 0.10 extra risk):

| Model | AIC weight | AIC |
| --- | --- | --- |
| Log-probit | 0.411 | 189.73 |
| Log-logistic | 0.395 | 189.81 |
| Gamma | 0.080 | 192.99 |
| Weibull | 0.061 | 193.54 |
| Multistage 2° | 0.044 | 194.20 |
| Logistic | 0.005 | 198.47 |
| Probit | 0.004 | 199.07 |

Model-averaged BMDL = 1.5 mg/kg. Surrogate-method confidence interval using log-probit and log-logistic (the two models within two AIC units of the lowest) = (1.8, 5.1) mg/kg; the model-averaged BMDL is slightly lower because the other five models carry residual weight.

## Methods (brief)

Guidance document, not an experimental study. Three statistical approaches are explicitly compared and constrained:

- **Goodness-of-fit selection.** AIC (Akaike 1974; Burnham & Anderson 2004) replaces the log-likelihood for ranking dose-response models. Two AIC units is the locked threshold for "indistinguishable fit" — models whose AIC is within two units of the lowest AIC are considered to fit the data equally well.
- **Model averaging.** Preferred method for the BMD confidence interval. Weights derived from AIC (MADr-BMD program; Wheeler & Bailer 2007, 2008, 2009 are cited as the implementing references). When model-averaging software is unavailable, the surrogate method is to take the lowest BMDL and highest BMDU from models within two AIC units of the lowest AIC (suboptimal fallback explicitly flagged).
- **Default recommended model set.** Reduced relative to the 2009 guidance, with nested-family handling (full Exponential and Hill four-parameter models for continuous data following Slob and Setzer 2014) re-specified.

Two software platforms are recommended and Appendix A documents their differences: BMDS (US EPA, www.epa.gov/bmds, version-controlled) and PROAST (RIVM, www.rivm.nl/proast, version-controlled). The opinion explicitly notes that BMDS and PROAST yield numerically equivalent BMD estimates when the same models, BMRs, and assumptions are applied; differences are in defaults, output format, and modelling options.

Confidence-interval convention: two-sided 90% (equivalent to one-sided 95%) for the BMD confidence interval, applied throughout the worked examples.

Uncertainty factors: the opinion concludes that the default uncertainty factors currently applied to the NOAEL (typically 100 for inter- and intra-species variation) are equally applicable to the BMDL. No additional uncertainty factor is required for BMDL-derived health-based guidance values, because the BMDL on average coincides with the NOAEL when default BMR values are used. For LOAEL situations where pairwise comparison shows a statistically significant effect at the lowest tested dose, the opinion notes that the BMD approach can derive a BMDL at the desired BMR without applying a separate LOAEL-to-NOAEL uncertainty factor, unless extrapolation outside the observed dose-range forces a higher BMR.

Per-cent change vs extra-risk distinction: for continuous data, BMR is expressed as a per-cent change in mean response with two-sided 90% confidence interval calculated on log-scale and back-transformed (footnote c, Table 1). For quantal data, BMR is expressed as "extra risk" — the additional risk above background divided by (100 minus the background response in %) — with the upper bound calculated by the likelihood profile method (footnote b, Table 1).

Reporting template: Appendix B is a standardised template for documenting a BMD analysis, covering (A) data summary, (B) selection of BMR, (C) recommended dose-response models, (D) fitting results per model, (E) BMD confidence interval, (F) sensitivity / model-averaging output, and (G) conclusion. The template is mandatory for assessments submitted to EFSA for peer review and is strongly recommended for all dose-response analyses underpinning EFSA opinions.

## Implications

Certification: provides the methodological floor under EFSA-derived heavy-metal Reference Points used in HBGV-vs-exposure margin-of-exposure (MOE) reasoning. Any HMTc threshold rationale that cites an EFSA BMDL (e.g., the children's blood-lead BMDL₀₁ of 12 µg/L from EFSA CONTAM 2010, the cadmium urinary BMDL₅ from EFSA CONTAM 2009, the inorganic-arsenic BMDL₀₁ range from EFSA CONTAM 2009) is implicitly relying on the methodology locked in this guidance for the meaning of the confidence-interval bound. The wiki should cite this opinion whenever a downstream metal page describes a BMDL or BMDU as the basis for a TWI, TDI, or MOE threshold.

Courses: BMD-vs-NOAEL is the central methodological concept in the "How heavy-metal risk assessment works" educational module. The three worked examples (continuous body-weight, quantal gastric impaction, epidemiological eye-hand coordination) are pedagogically useful for showing how the same conceptual machine handles three very different data types. Figure 1 (key concepts) is the canonical teaching diagram.

App: no contamination occurrence data, no consumer-facing thresholds, no per-product values. The guidance is invisible to the app surface.

Microbiome: not applicable.

## Verification notes

- Document carries an "OBSOLETE" watermark on every page of the retrieved PDF, indicating it has been superseded by a subsequent EFSA Scientific Committee BMD guidance update. The exact successor citation was not verified inside this paper; downstream pages should cite the current EFSA BMD guidance for prospective dose-response work and cite this 2017 document only as the historical methodology backbone for pre-2022 EFSA contaminant opinions. `superseded_by:` left null pending verified citation of the successor; can be filled when the successor source page is ingested.
- Metals, ingredients, products, and matrices arrays are intentionally empty. This is a pure methodology guidance document; it measures no contamination, identifies no food matrix, and proposes no metal-specific or product-specific limits. Routing audit will report empty `products:` and `ingredients:` as advisory-level (non-blocking) rather than malformed.
- License `CC-BY-ND` corrected on the basis of the licence-statement page (page 2 of the PDF): "Creative Commons Attribution-NoDerivs License, which permits use and distribution in any medium, provided the original work is properly cited and no modifications or adaptations are made." Not the looser CC-BY used by many later EFSA opinions.
- Sample size `null` because the document is methodological. The `sample_population` field documents the illustrative substances used as worked examples (drawn from earlier JMPR/EFSA evaluations) so that downstream synthesis is not misled into treating Table 1 as primary occurrence data.
- Author list reflects the full Scientific Committee membership plus working-group members and EFSA staff per the suggested-citation block on page 2 of the PDF.
