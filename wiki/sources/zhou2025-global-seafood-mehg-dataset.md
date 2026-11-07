---
type: source
raw_handle: FM_11814070
cite_key: zhou2025-global-seafood-mehg-dataset
title: "Global mercury dataset with predicted methylmercury concentrations in seafoods during 1995-2022"
authors: [Zhou H, Li Y, Zhong Q, Wu X, Liang S]
year: 2025
publication: "Scientific Data"
doi: "10.1038/s41597-025-04570-3"
access_url: https://doi.org/10.1038/s41597-025-04570-3
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: machine_extracted
claim_classes: [literature_finding, exposure_model]
raw_path: raw/pdf/FM_11814070/10.1038_s41597-025-04570-3.pdf
sha256: 0ed50b2a897216edde760458824912e15f67bcde04e80248b188c9a09ac8edfa
access_date: 2026-11-04
license: "CC BY"
metals: [MeHg, tHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/seafood]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]"]
matrices: [marine-fish, seafood]
jurisdictions: []
sample_n: null
sample_population: "Global dataset constructed from peer-reviewed literature (1950 to 2024, Web of Science) plus machine learning methods; covers all FAO fishing areas; national-scale MeHg estimates weighted by national fishing structure; 1995 to 2022 time series"
wiki_doi: null
sampling_locations: []
sampling_year_range: [1995, 2022]
updated: 2026-11-06
---

# Zhou et al. 2025 : Global seafood MeHg concentration dataset 1995 to 2022

## Summary

Zhou et al. (2025) construct a global dataset of predicted seafood MeHg concentrations during 1995 to 2022 using a bottom-up approach. The authors first compile a long-term time series dataset of seafood MeHg concentrations from all FAO fishing areas using published literature and statistical imputation, then estimate national-scale seafood MeHg concentrations weighted by each country's fishing structure. The dataset is designed to support continuous and dynamic assessment of global MeHg-related health risks under the Minamata Convention on Mercury (Articles 12 and 19). Key methodological features include standardization to ng/g wet weight (using 80 percent water content assumption for dry-to-wet conversion), exclusion of point-source-polluted sites, exclusion of non-muscle tissue data, exclusion of data with unspecified weight type, and removal of 5 percent of outliers using the interquartile range rule. Literature review confirms that 87 to 95 percent of total Hg exposure among U.S. adults is attributed to fish consumption.

## Key numbers

- U.S. adults: 87 to 95 percent of total Hg exposure attributed to fish consumption (cited from existing literature).
- Global economic loss from MeHg-related health risks: approximately 117 billion U.S. dollars annually (cited from Zhang et al.).
- Dataset coverage: FAO fishing areas globally, 1995 to 2022, national scale.
- Dry-to-wet conversion assumed: 80 percent water content (1 unit DW = 0.2 units WW; WW = (1 minus 0.8) times DW).
- Standard deviation assumed for studies reporting only means: 65 percent of the mean.
- Outlier removal: 5 percent of data removed using IQR rule.
- Specific national MeHg concentration values are in the published dataset (not extracted in this record from the methods paper alone).

## Evidence Fitness

Modeled or limited evidence. The dataset is model-derived using machine learning applied to literature data; it is not a primary monitoring survey. It provides global coverage where primary data are sparse but introduces model uncertainty that primary studies do not. Suitable for characterizing global trends and comparing national-level exposure drivers; not suitable for precise occurrence-percentile estimates in specific product categories without access to the underlying literature data it aggregates.

## Methods (brief)

Bottom-up construction: (1) compile raw seafood MeHg concentrations from Web of Science literature 1950 to 2024; (2) standardize to ng/g WW; (3) classify by FAO fishing area; (4) apply machine learning to estimate time series values for data-sparse regions and years; (5) weight by national fishing structure to estimate national MeHg concentrations. Exclusion criteria: duplicates, point-source-contaminated sites, non-muscle tissue, unspecified weight type, below detection limit, outliers (5% IQR removal). Data sources: FishBase trophic levels, FAO capture data, FAO fishing area boundaries.

## Implications

- Certification: confirms global scale of MeHg exposure through seafood; supports Minamata Convention monitoring obligations.
- Courses: the statistic that 87 to 95 percent of U.S. adult Hg exposure comes from fish consumption quantifies the dominance of the dietary pathway.
- App: global temporal trend data may inform ingredient-level contamination profile updates as the dataset becomes more widely used.
- Microbiome: not applicable.

## Provenance notes

Open access under CC BY. Retrieved from PMC OA (PMC11814070). Published in Scientific Data (Nature Publishing Group); dataset deposited with associated data descriptor. No retraction flags at time of deposit (2026-11-04). Model-derived estimates carry inherent uncertainty beyond primary monitoring data.

## Wiki pages updated on ingest

- [[metals/mercury-methyl]]
- [[metals/mercury-total]]
