---
type: source
cite_key: kisalaei2026-turmeric-adulteration-spectroscopy
title: "Machine Learning and the Use of Spectroscopy for Adulteration Detection in Turmeric Powder"
authors: [Kisalaei A, Bakhshi N, Feizy J, Farhoodi M]
year: 2026
publication: "Molecules"
doi: 10.3390/molecules31101774
pmcid: PMC13209246
access_url: "https://doi.org/10.3390/molecules31101774"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: "raw/deposits/HMI-TOPIC-0065/10.3390_molecules31101774.pdf"
metals: [Pb, Cr]
ingredients: ["[[ingredients/turmeric]]"]
products: ["[[products/spices]]"]
matrices: [turmeric-powder]
jurisdictions: []
sample_n: null
sample_population: "Turmeric powder samples spiked with four bulking agents (at 10-40%) and two synthetic dyes (at 0.5-3%) for spectroscopy model development; no field-collected contaminated samples"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-11-06
---

# Kisalaei et al. 2026 - Machine learning and spectroscopy for turmeric adulteration detection

## Overview

This methods paper evaluates UV/Vis spectroscopy (430-870 nm range) and near-infrared (NIR) spectroscopy (900-2170 nm range) combined with machine learning classifiers for the detection of turmeric powder adulteration. The study used controlled spiking experiments rather than field-collected adulterated samples. Lead chromate is discussed as one of the documented adulterants in turmeric from prior literature, providing context for why detection tools are needed. The paper does not measure lead or chromium concentrations in food samples and does not contribute occurrence data to the turmeric contamination profile.

## Key numbers (detection performance)

NIR (900-2170 nm) models with 100% test accuracy:
- Decision tree (DT) with deviance criterion, max depth = 10: accuracy 1.00 on test, 0.946 on train, 0.947 on validation
- SVM with RBF kernel, Quadratic LDA (10 or 11 components): test accuracy 0.944 or higher

UV/Vis (430-870 nm) models:
- SVM with RBF kernel: 100% test accuracy
- MLP model: 98.21%, 100%, 100% on three datasets

Bulking agents tested: 10-40% spiking levels.
Synthetic dyes tested: 0.5-3% spiking levels.

## Lead chromate context (from prior literature, cited in paper)

The paper summarizes prior literature indicating that lead chromate adulteration of turmeric is associated with neurological damage and kidney disorders. It does not report original lead or chromium measurements.

## Methods

Controlled laboratory experiment. Turmeric powder purchased commercially; spiked with four bulking agents at 10%, 20%, 30%, 40% by weight, and two synthetic dyes at 0.5%, 1%, 2%, 3% by weight. UV/Vis spectra acquired at 430-870 nm; NIR spectra at 900-2170 nm. Machine learning classifiers evaluated: SVM (linear, polynomial, RBF kernels), LDA (linear, quadratic variants with different component counts), decision tree (entropy and deviance criteria, depths 1-10), MLP (varying layer widths and counts). Performance reported as accuracy, precision, recall, F1 on train/validation/test splits.

## Implications

This paper is relevant to the testing section of the turmeric wiki page as a demonstration of rapid spectroscopic screening methods that do not require laboratory ICP-MS. The NIR and UV/Vis approaches are non-destructive, rapid, and potentially deployable at points of entry or in field surveys. Performance results suggest that NIR with an appropriate machine learning classifier can distinguish adulterated from unadulterated turmeric powder with high accuracy under laboratory conditions.

The paper does not provide occurrence data, regulatory limit assessments, or exposure estimates. It is evidence-tier B (methods/detection context) rather than A (occurrence data) for the purpose of the contamination profile.

## Related evidence
- [[ingredients/turmeric]]
- [[sources/forsyth2026-turmeric-lead-chromate-india]]
- [[sources/gafner2026-turmeric-adulteration-six-continents]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
<!-- END: hmi-page-history -->
