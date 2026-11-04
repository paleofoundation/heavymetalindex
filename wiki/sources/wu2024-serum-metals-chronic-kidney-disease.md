---
type: source
cite_key: wu2024-serum-metals-chronic-kidney-disease
title: "Comparative mathematical modeling of causal association between metal exposure and development of chronic kidney disease"
authors: [Wu M, Hou W, Qin R, Wang G, Sun D, Geng Y, Du Y]
year: 2024
publication: "Frontiers in Endocrinology 15: 1362085"
doi: 10.3389/fendo.2024.1362085
access_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11094205/
retrieval_date: "2026-11-04"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: /Users/kmfp/hmi-evidence-deposits/deposits/HMI-METAL-GALLIUM-1/10.3389_fendo.2024.1362085.pdf
raw_sha256: "1dac7a8e88e520014ef431eed23c79c883d719edaa5dc26579207cfb0c080f19"
metals: [Ga]
ingredients: []
products: []
matrices: [human serum]
jurisdictions: [CN]
near_duplicates: []
sample_n: 543
sample_population: "443 chronic kidney disease patients and 100 people attending health examinations in Shenyang, China, November 2021 to August 2022"
evidence_fitness:
  supports: [serum-gallium-at-detection-floor]
  does_not_support: [gallium-causes-kidney-disease, dietary-intake, regulatory-limits]
audience: [regulator, researcher, food-safety]
sources: 0
updated: 2026-11-04
ingest: HMI-METAL-GALLIUM-1
---
# Wu et al. 2024: Serum metals and chronic kidney disease

This cross-sectional study measured serum metals in 443 people with chronic kidney disease and 100 people attending health examinations in Shenyang. Serum gallium medians were zero in both groups. The comparison group's upper quartile was 0.02 µg/L.

## Key numbers

- Serum gallium, median (interquartile range), µg/L (Table 1, case vs control columns): chronic kidney disease 0 (0, 0), n = 443; comparison group 0 (0, 0.02), n = 100; P < 0.001.
- The same table prints 0 (0, 0) vs 0 (0, 0) for the creatinine split (P = 0.001) and the cystatin C split (P < 0.001). A significant rank test with identical printed quartiles does not describe a concentration difference.
- Values below the detection limit were replaced with half the limit for analysis (Methods). The table still prints zeros, so the reported gallium distribution sits at the detection floor.

## Methods (brief)

Recruitment was November 2021 to August 2022 at the First Hospital Affiliated to China Medical University. Serum was digested and analyzed on an Agilent 7700x ICP-MS. Associations used regression, machine learning, and Bayesian kernel machine regression. The outcome models in the paper center on other elements.

## Evidence fitness

Supports that serum gallium in this sample is at or below the detection floor, with a comparison-group upper quartile of 0.02 µg/L. Does not support a kidney effect of gallium. The significant P value is a rank difference at that floor, not a measured excess in patients.

## Limitations

One city and one hospital system. Detection-limit substitution and printed zeros make the gallium contrast hard to interpret. The paper's disease models are not a gallium dose-response.

## Related evidence

- [[metals/gallium]]
- [[testing/icp-ms]]
