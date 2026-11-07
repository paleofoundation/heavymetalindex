---
routing_input_gaps: []
routing_input_disposition: "AI scope adjudication from existing source text; existing declarations preserved. All originally missing declarations resolved, including intentional empty context-only fields where applicable."
matrices: ["saliva", "oral-microbiome"]
type: source
cite_key: davis-2021-salivary-metals-oral-microbiome
title: "Low levels of salivary metals, oral microbiome composition and dental decay"
authors: [Davis E, Bakulski KM, Goodrich JM, Peterson KE, Marazita ML, Foxman B]
year: 2020
publication: "Scientific Reports"
doi: 10.1038/s41598-020-71495-9
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: "Modeled or limited evidence"
review_state: approved_for_internal
claim_classes: [literature_finding]
raw_path: raw/studies/FM_7474081_Low_levels_of_salivary_metals_oral_microbiome_composition_an.pdf
sha256: 33a7b7de28f73584989a99747e6101f67453360c60694b6b4cffab60572803bd
access_date: 2026-04-25
access_url: https://doi.org/10.1038/s41598-020-71495-9
license: public-redistribute
metals: [Cd, Pb, Hg, Sb, As, Ni, Cr]
ingredients: []
products: []
jurisdictions: [US]
superseded_by: null
wiki_doi: null
sample_n: 61
sample_population: "61 children and adults from 37 families recruited through the Center for Oral Health Research in Appalachia (COHRA1) study; 13 children aged 7-17 and 48 adults aged 18-45; Appalachian Pennsylvania and West Virginia, samples collected 2006-2009, metals measured 2018"
sampling_locations: []
sampling_year_range: "2006-2009"
updated: 2026-11-07
routing_input_adjudication: data/evidence/audits/2026-09-10-fda-tds/routing-input-adjudication.json
---

# Davis et al. 2020: Salivary metals, oral microbiome composition, and dental decay

## Overview

Davis and colleagues at the University of Michigan measured 21 metals in stimulated saliva from 61 children and adults participating in the Center for Oral Health Research in Appalachia (COHRA1) study and assessed associations between salivary metal concentrations, oral microbiome composition (16S rRNA V6 region sequencing), and the presence of untreated dental caries. The study used inductively coupled plasma mass spectrometry (ICP-MS) for metal quantification and the ALDEx2 method for compositional microbiome analysis. After Benjamini-Hochberg correction for multiple testing, marked differences in salivary bacterial taxa were found for three metals: antimony, arsenic, and mercury. Antimony levels were also associated with the presence of an untreated carious lesion. The authors characterize this as the first study to comprehensively measure 21 essential minerals and metals in human saliva and directly compare them to oral microbiome composition.

## Study design

Cross-sectional subsample nested within the COHRA1 study, a family-based oral health cohort in Appalachian Pennsylvania and West Virginia. Dental examinations and stimulated saliva collection were conducted in person by calibrated dental professionals between 2006 and 2009. Participants were instructed to refrain from eating, drinking, or tooth-brushing for at least two hours before collection. Saliva samples were stored in cryogenic tubes at -80 degrees Celsius. DNA was extracted and sequenced in 2012; metal concentrations were measured in 2018. The final analytic sample comprised 61 individuals from 37 families: 13 children aged 7-17 and 48 adults aged 18-45. Sixty percent were female; 43% came from West Virginia. About 24.6% reported annual household income below $10,000 and 38.6% reported income of $10,000 to $35,000. Dental decay was common: 98% of adults and 69% of children had one or more decayed, missing, or filled teeth, and 75% of adults and 31% of children had an untreated carious lesion at enrollment.

## Analytes measured

Twenty-one metals were quantified and classified by the authors into three functional groups:

- Essential minerals (5): cobalt, copper, manganese, molybdenum, zinc.
- Metals with some evidence of physiological function (4): chromium, nickel, tungsten, vanadium.
- Metals with known toxicity (12): antimony, arsenic, barium, beryllium, cadmium, cesium, lead, mercury, platinum, thallium, tin, uranium.

## Key numbers

Salivary metal concentrations are expressed in parts per billion (micrograms per liter). The table below reproduces the limits of detection and the distribution reported in Table 1 of the paper.

| Metal | LOD (ppb) | 33rd pctile | Median | 66th pctile | Maximum |
|---|---|---|---|---|---|
| Cobalt | 0.1 | 0.42 | 0.55 | 0.64 | 1.87 |
| Copper | 10 | 27.42 | 37.28 | 52.79 | 394.79 |
| Manganese | 5 | 10.74 | 14.46 | 21.76 | 94.37 |
| Molybdenum | 0.2 | 0.82 | 0.95 | 1.20 | 4.49 |
| Zinc | 30 | 265.72 | 303.69 | 382.77 | 10,198.95 |
| Antimony | 0.1 | 2.43 | 2.73 | 3.40 | 13.33 |
| Arsenic | 0.2 | below LOD | 0.14 | 0.25 | 2.65 |
| Barium | 0.5 | 5.58 | 15.71 | 29.24 | 69.86 |
| Beryllium | 0.5 | below LOD | below LOD | below LOD | 2.49 |
| Cadmium | 0.5 | 0.30 | 0.49 | 0.58 | 7.16 |
| Cesium | 0.2 | 0.44 | 0.50 | 0.66 | 1.98 |
| Lead | 0.1 | 2.64 | 4.12 | 7.25 | 252.07 |
| Mercury | 0.1 | below LOD | 0.33 | 1.03 | 446.90 |
| Platinum | 0.1 | below LOD | below LOD | below LOD | 0.29 |
| Thallium | 0.5 | below LOD | below LOD | below LOD | 1.74 |
| Tin | 0.5 | 0.77 | 1.62 | 3.08 | 195.03 |
| Uranium | 0.1 | below LOD | below LOD | below LOD | 0.51 |
| Chromium | 0.2 | 1.49 | 1.81 | 2.26 | 10.78 |
| Nickel | 2 | 6.63 | 7.83 | 8.71 | 26.07 |
| Tungsten | 0.1 | 0.11 | 0.20 | 0.25 | 19.34 |
| Vanadium | 0.1 | 0.20 | 0.36 | 0.41 | 1.60 |

The minimum values reported in the paper for most metals were below the LOD; the minimum column is omitted above because LOD/sqrt(2) substitution was applied to sub-LOD values in the analysis. Detection rates ranged from 5% (platinum) to 100% (cobalt, molybdenum, zinc, barium, chromium, nickel). Sixteen of 21 metals had a detection rate of 54% or higher. Four metals were detected in fewer than 30% of participants (thallium 7%, beryllium 10%, platinum 5%, uranium 20%) and were excluded from the ALDEx2 microbiome analyses.

Antimony was detected in all 61 participants (minimum 0.16 ppb, Table 1). The median salivary antimony concentration was 2.73 ppb. The mean overall salivary lead was 14.94 +/- 38.5 ppb.

Microbiome findings: After Benjamini-Hochberg correction at false discovery rate < 0.1, the relative abundance of bacterial taxa differed significantly by tertile of exposure for three metals (Table 2):

- Antimony: increased relative abundance of four unclassified Lactobacillus oligotypes (ALDEx2 effect sizes +0.65 to +0.69) and Escherichia coli (+0.69); decreased relative abundance of Granulicatella elegans (-0.46). The Lactobacillus oligotypes were tentatively identified as Lactobacillus acidipiscis (most probable for all four), with Lactobacillus pobuzihii and Lactobacillus salitolerans as alternatives for two oligotypes.
- Arsenic: decreased relative abundance of Prevotella pleuritidis (effect size -0.70).
- Mercury: decreased relative abundance of Abiotrophia defectiva (-0.52), Granulicatella elegans (-0.46), and Neisseria meningitidis/polysaccharea (-0.45); increased relative abundance of Prevotella sp. 9409 (+0.49), Prevotella sp. 9421 (+0.54), and Streptococcus GU045364 (+0.33).

No significant association was found between any metal and alpha diversity (Shannon index or Chao1) in the full or rarefied analysis, with one exception: barium showed a significant alpha diversity association before but not after rarefaction.

Dental caries findings: Logistic regression models adjusted for participant age estimated the odds ratio for an untreated carious lesion by tertile of metal exposure (Figure 1). Antimony in the upper tertile versus lowest tertile: OR 3.91 (95% CI 0.99, 15.40). Antimony in the middle tertile versus lowest tertile: OR 3.99 (95% CI 1.00, 15.94). Confidence intervals for most other metals overlapped one. The directionality was consistent after adding income as a covariate, though confidence intervals widened.

## Methods

Salivary metal quantification was performed in 2018 by NSF International (Ann Arbor, Michigan) using ICP-MS on a Thermo Fisher ICAPRQ spectrometer with a CETAC ASX-520 autosampler. The analytical protocol was adapted from a validated urinary ICP-MS method. Samples with at least 1,000 microliters of saliva were run at existing dilution (n = 44); 28 samples with less than 1,000 microliters were supplemented with deionized water to the target volume, and detected concentrations were adjusted for dilution.

Standards with known purity and identity were used for calibration curves and quality control. The percent nominal concentration across standards of known concentration ranged from 94 to 106%. The LOD was defined as three times the standard deviation of the instrument response from ten replicate blank runs. LOD values ranged from 0.1 ppb (cobalt, antimony, arsenic, lead, mercury, platinum, thallium, tungsten, vanadium, uranium) to 30 ppb (zinc), with most metals between 0.1 and 0.5 ppb (Table 1). LOQ values are not reported separately; no certified reference material or recovery data are reported for the salivary matrix.

Concentrations below the LOD were assigned LOD divided by the square root of 2. One participant had an extreme mercury value (446.90 ppb, likely attributable to dental amalgam) and one had an extreme lead value (252.07 ppb); formal outlier testing using Box-Cox transformation and Grubb's test found no statistically significant outliers, so both values were retained.

Microbial DNA was extracted from saliva using DNeasy Blood and Tissue kits with the QIAcube system and an enzyme cocktail to lyse microbial cell walls. The V6 region of the 16S rRNA gene was amplified using 8-bp error-correcting barcodes. Sequencing was performed on an Illumina HiSeq platform at the University of Michigan DNA Sequencing Core. After FLASH assembly, QIIME 1.9.0 quality filtering and demultiplexing, the combined read count was 178,682,752 (range per sample 2,745 to 1,726,317). Oligotypes were assigned using Minimum Entropy Decomposition with taxonomy from the CORE oral microbiome database.

Microbiome-metal associations were estimated using ALDEx2 (analysis of variance-like differential expression), which uses 1,000 Monte-Carlo Dirichlet simulations to infer absolute abundance from observed relative abundance. Only metals with more than 30% of participants above the LOD were included in ALDEx2 analyses. Benjamini-Hochberg multiple-testing correction was applied. For taxa identified in ALDEx2 as significantly associated with antimony, linear mixed models with a random effect for family clustering (lme4 package) were used to confirm directionality while accounting for the family-based sampling design.

## Evidence fitness

The study provides evidence for associations between low-level salivary metal concentrations and oral microbiome composition and dental caries in a small Appalachian cohort. Sample size (n = 61) limits statistical power and prevents simultaneous adjustment for age, income, and history of dental decay. The confidence intervals on the dental caries odds ratios are wide and cross one, so the antimony-caries finding is suggestive rather than confirmatory. The authors could not distinguish intracellular metals from free-floating metal in saliva. Salivary ICP-MS, while analytically valid, has no published reference ranges for clinical interpretation. The study population represents a predominantly low-income Appalachian population and may not generalize to other populations. No certified reference material or recovery data are reported for the salivary ICP-MS method, which limits the ability to assess analytical accuracy.

The study's principal contribution is the comprehensive characterization of 21 salivary metals in a human cohort with concurrent microbiome profiling and dental examination, enabling a first look at metal-microbiome-oral health associations that prior work had addressed only partially or not at all.

## Limitations

The paper lists the following limitations directly: (1) relatively small sample size, limiting simultaneous confounder adjustment; (2) inability to distinguish intracellular from extracellular salivary metals; (3) salivary microbiome data may give weaker caries signals than dental plaque microbiome data; (4) cross-sectional design prevents causal inference.

## Regulatory context

No regulatory guidelines exist for salivary metal concentrations. The authors note that blood and urine are the conventional biological matrices for regulatory comparison (blood for lead; urine for chronic arsenic, cadmium, chromium, and inorganic mercury). Salivary levels are not directly comparable to blood or urine reference values and have no established clinical reference ranges.

## Implications

- Certification: This study supports including antimony as a monitored analyte in contexts where antimony exposure (from flame retardants, batteries, water) may occur, and contextualizes the relationship between salivary toxic metals and oral microbiome shifts. It does not provide occurrence data for food matrices.
- Courses: Provides accessible evidence for the oral metal-microbiome interaction pathway. The antimony-Lactobacillus-dental caries chain is a teachable sequence: antimony increases acid-producing Lactobacillus species and decreases Granulicatella, with upstream association to untreated caries.
- App: Not directly applicable; this study measures metal in saliva, not food.
- Microbiome: Primary reference for the salivary metal-oral microbiome axis. Crosswalks to WikiBiome for antimony, arsenic, and mercury. Notes that the oral and gut microbiomes are predictive of each other; arsenic-induced changes in the oral microbiome may reflect or amplify arsenic effects on the gut microbiome documented in other sources.

## Related evidence

- [[metals/arsenic-inorganic]]
- [[metals/mercury]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[microbiome/arsenic-biotransformation-axis]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
| [9a3fa9ddf1](https://github.com/paleofoundation/heavymetalindex/commit/9a3fa9ddf1) | 2026-04-30 | major | 1 section added and 1 removed |
| [7c398715cb](https://github.com/paleofoundation/heavymetalindex/commit/7c398715cb) | 2026-04-25 | major | 2 sections added; narrative text revised |
<!-- END: hmi-page-history -->
