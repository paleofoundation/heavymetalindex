---
routing_input_gaps: []
routing_input_disposition: "AI scope adjudication from existing source text; existing declarations preserved. All originally missing declarations resolved, including intentional empty context-only fields where applicable."
matrices: ["blood", "biomonitoring"]
type: source
cite_key: huang-2020-pb-alad-threshold
title: "Use of Generalized Additive Model to Detect the Threshold of delta-Aminolevulinic Acid Dehydratase Activity Reduced by Lead Exposure"
authors: [Huang CC, Yang CC, Liu TY, Dai CY, Wang CL, Chuang HY]
year: 2020
publication: "International Journal of Environmental Research and Public Health"
doi: 10.3390/ijerph17165712
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: "Modeled or limited evidence"
review_state: machine_extracted
claim_classes: [toxicology_reference_value, literature_finding]
raw_path: raw/reports/Biochem_Lead_Yeh_2020.pdf
sha256: ad126fd95c8f8cbf200af6e0657383293f636172fd749865767ea5ea5ea3d995
access_date: 2026-04-25
access_url: https://doi.org/10.3390/ijerph17165712
license: public-redistribute
metals: [Pb]
ingredients: []
products: []
jurisdictions: [TW]
superseded_by: null
wiki_doi: null
sample_n: 238
sample_population: "121 lead workers and 117 non-exposed age-and-sex-matched controls from the same industrial area; Kaohsiung, Taiwan; examined during annual occupational health screenings."
sampling_locations: ["Kaohsiung, Taiwan"]
sampling_year_range: null
updated: 2026-11-07
routing_input_adjudication: data/evidence/audits/2026-09-10-fda-tds/routing-input-adjudication.json
---

# Huang et al. 2020: Lead threshold for ALAD activity inhibition, occupational cohort Taiwan

Huang and colleagues at Kaohsiung Medical University enrolled 121 lead factory workers and 117 non-exposed controls during routine annual health examinations in Kaohsiung, Taiwan, to identify the blood lead level at which delta-aminolevulinic acid dehydratase (ALAD) activity becomes detectably inhibited. Using generalized additive models (GAMs) with loess smoothing curves as well as multiple linear regression with categorized blood lead groups, the study identified a threshold around 5 micrograms per deciliter (ug/dL) of blood lead, above which ALAD activity begins to decline. ALAD is the second enzyme in the heme biosynthesis pathway; lead displaces zinc at the enzyme's metal-binding site, suppressing activity stoichiometrically. This study is relevant to the wiki as a source for the dose-response characteristics of lead's hematotoxicity and to the mechanistic context supporting use of ALAD activity as a biomarker of lead exposure.

## Key numbers

**Group characteristics (Table 1, mean +/- standard deviation):**

| Characteristic | Control (n = 117) | Lead-exposed (n = 121) | p-value |
| --- | --- | --- | --- |
| Age (years) | 41.7 +/- 11.8 | 41.5 +/- 8.3 | 0.916 |
| Gender (male %) | 61.1% | 81.0% | 0.01 |
| BMI (kg/m2) | 24.9 +/- 4.1 | 24.4 +/- 3.5 | 0.310 |
| Blood lead (ug/dL) | 2.9 +/- 1.8 | 19.7 +/- 14.7 | <0.001 |
| Hemoglobin (mg/dL) | 14.7 +/- 1.5 | 14.9 +/- 1.4 | 0.168 |
| Hematocrit (%) | 43.5 +/- 3.8 | 44.4 +/- 3.5 | 0.060 |
| ALAD activity (U/L) | 63.32 +/- 14.01 | 41.58 +/- 22.07 | <0.001 |
| ALAD 1-1 genotype (%) | 96.6% | 95.9% | 0.773 |
| ALAD 1-2 genotype (%) | 3.4% | 4.1% | n/a |
| Fasting glucose (mg/dL) | 106.7 +/- 38.6 | 101.8 +/- 32.3 | 0.309 |
| Alcohol use (%) | 7.7% | 26.4% | <0.001 |
| Smoking (%) | 13.7% | 40.5% | <0.001 |

No ALAD 2-2 homozygotes were identified in the sample; 229 subjects (96.2%) carried the ALAD 1-1 genotype and 9 (3.8%) carried ALAD 1-2.

**Multiple linear regression for ALAD activity (Table 2, all 238 workers):**

Each additional 1 ug/dL of blood lead was associated with a 1.04 U/L decrease in ALAD activity (SE 0.08, p < 0.001). Male gender was associated with an 8.08 U/L decrease (SE 2.27, p < 0.001). Each additional 1 mg/dL of fasting blood glucose was associated with a 0.11 U/L decrease (SE 0.03, p < 0.001). Drinking alcohol more than twice per week was associated with a 5.47 U/L decrease (SE 2.69, p = 0.04). ALAD genotype (1-2 vs. 1-1) showed no significant difference (coefficient -4.12, SE 4.75, p = 0.39). Adjusted R-squared was 0.639 for the full cohort and 0.644 for the ALAD 1-1 subset (n = 229). The correlation coefficient between blood lead and ALAD activity was -0.760 (R-squared = 0.58, p < 0.001).

**Threshold analysis by categorized blood lead groups (Table 3, ALAD 1-1 type only, n = 229):**

| Group | Blood lead range (ug/dL) | n | Mean ALAD activity (U/L) | Mean blood lead (ug/dL) | Beta | SE | p-value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 (reference) | <=5.00 | 128 | 64.21 +/- 15.04 | 2.74 +/- 1.11 | n/a | n/a | n/a |
| 2 | 5.01-10.00 | 26 | 60.49 +/- 14.15 | 6.48 +/- 0.93 | -1.099 | 2.925 | 0.708 |
| 3 | 10.01-15.00 | 12 | 44.64 +/- 13.30 | 12.15 +/- 1.60 | -16.328 | 4.004 | <0.001 |
| 4 | 15.01-20.00 | 11 | 37.76 +/- 5.36 | 17.65 +/- 1.24 | -23.710 | 4.237 | <0.001 |
| 5 | 20.01-25.00 | 8 | 28.18 +/- 11.40 | 22.66 +/- 1.15 | -33.514 | 5.041 | <0.001 |
| 6 | 25.01-30.00 | 13 | 28.89 +/- 13.65 | 27.58 +/- 1.77 | -31.159 | 3.996 | <0.001 |
| 7 | 30.01-35.00 | 9 | 29.92 +/- 9.27 | 31.73 +/- 1.55 | -34.900 | 4.569 | <0.001 |
| 8 | 35.01-40.00 | 11 | 22.33 +/- 9.14 | 37.05 +/- 1.58 | -38.096 | 4.271 | <0.001 |
| 9 | >=40.01 | 11 | 13.20 +/- 5.17 | 48.84 +/- 4.88 | -45.991 | 4.594 | <0.001 |

Group 2 (5.01 to 10.00 ug/dL) did not differ significantly from the reference group (p = 0.708). Statistically significant inhibition first appeared in group 3 (10.01 to 15.00 ug/dL, p < 0.001). The GAM smoothing curve identified an inflection point around 5 ug/dL; the multiple regression categorization shows the first statistically detectable inhibition between 10 and 15 ug/dL. The authors characterize the zone of 5 to 10 ug/dL as an inflection region and propose a cut-off of 5 ug/dL based on the GAM curve.

Akaike information criterion (AIC): 38,397.6 for the multiple regression model, 36,688.9 for the GAM model; the lower AIC for GAM indicates better model fit.

## Methods (brief)

**Study design:** Cross-sectional. Subjects were recruited at a lead factory in Kaohsiung during mandatory annual occupational health examinations. IRB approval from Kaohsiung Medical University (KMUH-IRB-950305). Written informed consent obtained from all 238 participants.

**Subjects:** 121 lead workers and 117 age-and-sex-matched non-exposed controls from plants without occupational lead use in the same geographic area. Exclusion criteria: renal or liver dysfunction, diabetes, pregnancy. Lead workers had a mean job tenure of 11.7 +/- 5.3 years.

**Blood lead measurement:** Blood drawn by venipuncture into heparin-containing tubes; centrifuged at 3,000 rpm for 10 minutes. Specific analytical instrument for blood lead not named in the paper; blood lead was part of the standard regulatory health examination for lead workers in Taiwan.

**ALAD activity assay:** Measured within 6 hours of sample collection. European Community standardized method (Berlin and Schaller 1974, Berlin et al. 1977). Spectrophotometric determination at 555 nm using a Unicam Helios UV-VIS spectrophotometer (Thermo Spectronic, Cambridge, UK). The assay quantifies porphobilinogen produced when erythrocyte enzyme is incubated with excess delta-aminolevulinic acid substrate. Activity expressed as U/L of erythrocytes per minute. All samples measured in triplicate; coefficients of variation less than 5% required for acceptance. The specific ALAD activity equation applied: ALAD activity = (Absorbance x 100 x 2 x dilution factor) / (hematocrit x 60 x 0.062), where the dilution factor was 35.

**ALAD genotyping:** PCR-RFLP using primers targeting the G177C (rs1800435) polymorphism. DNA extracted from venous blood using QIAamp Blood Mini Kit. PCR amplification (95 degrees C denaturation 5 min; 35 cycles of 95/56/72 degrees C for 30 s each; final extension 72 degrees C 10 min) generating a 916 bp fragment, cleaved with endonuclease MspI.

**Statistical analysis:** Independent t-tests for continuous variables; chi-square or Fisher's exact for categorical variables; multiple linear regression with adjustment for age, gender, BMI, fasting blood glucose, smoking, and alcohol consumption; GAM with loess smoothing (70% span). Software: R, SAS 9.4, SPSS 20.

**LOD/LOQ:** Not reported for the ALAD activity assay or blood lead measurement.

**CRM recovery:** Not reported.

## Evidence fitness

This source provides direct quantitative evidence for the dose-response relationship between blood lead concentration and ALAD enzyme activity inhibition in an adult occupational cohort. The key findings are the GAM-identified inflection threshold around 5 ug/dL and the multiple-regression-categorized threshold of significant inhibition above 10 ug/dL blood lead.

The source supports the following uses: (1) characterizing the hematotoxic dose-response profile of lead in occupationally exposed adults; (2) establishing that ALAD inhibition begins at blood lead concentrations in the low-to-mid single-digit ug/dL range, overlapping with levels achievable through dietary and environmental exposure; (3) supporting the use of ALAD activity as a biomarker for lead exposure monitoring in occupational settings.

The source does not support direct food occurrence claims. It is an occupational biomonitoring study, not a dietary exposure study. Blood lead concentrations in the lead-worker group (mean 19.7 ug/dL) substantially exceed blood lead levels typically observed in the general population through dietary routes. The threshold values identified here apply to the range of blood lead where biochemical effects on the heme biosynthesis pathway become measurable; they are not dietary exposure limits and should not be treated as equivalent to regulatory food maximum levels. The paper uses a cross-sectional design, which precludes causal inference about individual-level trajectories.

## Limitations

The study population is occupationally exposed Taiwanese adults, predominantly male; the results may not generalize to other populations, to children, or to general-population dietary exposures at much lower blood lead levels. Only two ALAD genotype classes were present (229 ALAD 1-1, 9 ALAD 1-2); the rarity of ALAD 1-2 and absence of ALAD 2-2 precluded testing of genotype-by-lead interaction on ALAD activity. The analytical instrument used for blood lead measurement is not specified in the paper. LOD, LOQ, and CRM recovery data are not reported for either ALAD activity or blood lead. Smoking and alcohol consumption were assessed by questionnaire, which the authors acknowledge as a precision limitation.

The threshold identified by GAM (approximately 5 ug/dL) is derived from visual inspection of a smoothing curve; the study does not compute a formal benchmark dose or confidence limit. The multiple regression categorization shows the first statistically significant inhibition in the 10 to 15 ug/dL group, leaving some ambiguity about the precise threshold.

## Provenance notes

The original filename in the raw/ directory is `Biochem_Lead_Yeh_2020.pdf`, which is misleading; the lead author is Huang, not Yeh. The cite key uses the actual lead author. The SHA-256 of the deposit PDF is ad126fd95c8f8cbf200af6e0657383293f636172fd749865767ea5ea5ea3d995, matching the MANIFEST.csv entry. License is CC BY 4.0 (MDPI open access).

## Related evidence

- [[metals/lead]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
| [9a3fa9ddf1](https://github.com/paleofoundation/heavymetalindex/commit/9a3fa9ddf1) | 2026-04-30 | major | 1 section added and 1 removed |
| [36ff5c84ab](https://github.com/paleofoundation/heavymetalindex/commit/36ff5c84ab) | 2026-04-25 | major | 3 sections added; narrative text revised |
<!-- END: hmi-page-history -->
