---
type: source
raw_handle: FM_9947119
cite_key: cheng2023-cadmium-rice-cultivars-root-microbiome
title: "Metagenomic and machine learning-aided identification of biomarkers driving distinctive Cd accumulation features in the root-associated microbiome of two rice cultivars"
authors: [Cheng Z, Zheng Q, Shi J, He Y, Yang X, Huang X, Wu L, Xu J]
year: 2023
publication: "ISME Communications"
doi: 10.1038/s43705-023-00213-z
access_url: "https://doi.org/10.1038/s43705-023-00213-z"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_9947119/FM_9947119.md
metals: [Cd]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice-grain, rhizosphere, soil]
jurisdictions: [CN]
near_duplicates: []
sample_n: null
sample_population: "Two rice cultivars (XS14 low-Cd and YY17 hybrid) grown under five soil amendment treatments in Cd-contaminated farmland, China; 16S amplicon n=84 samples across 4 niches, metagenome n=12 CK samples"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Cheng et al. 2023 — Root microbiome biomarkers predict Cd grain accumulation differences between low-Cd and hybrid rice cultivars

## Overview

Comparing low-Cd rice cultivar XS14 (Xiushui14) and hybrid cultivar YY17 grown under five soil amendment conditions in Cd-contaminated farmland, this study demonstrates that XS14 consistently accumulates significantly lower Cd in grains across amendment treatments (lower bioaccumulation factor, p<0.01). Machine learning (random forest) applied to 16S amplicon data identifies taxon-level biomarkers predictive of cultivar identity with >94% accuracy in three of four root-associated niches. Desulfobacteria enrichment in XS14 (sulfur-cycling pathway) and Nitrospiraceae enrichment in YY17 (nitrogen-cycling pathway) emerge as keystone indicator taxa. Metagenome functional profiling shows XS14 rhizosphere has higher diversity in amino acid and carbohydrate transport, sulfur cycling genes. The study provides mechanistic insight into how root-associated microbiome recruitment strategies differ between low-Cd and standard cultivars, with implications for microbiome-assisted breeding and soil amendment selection.

## Key numbers

- Grain Cd: XS14 significantly lower than YY17 under biochar (BC), commercial Mg-Ca-Si conditioner (CMC), and control (CK) treatments (Student's t-tests p<0.05 to p<0.01)
- Bioaccumulation factor: YY17 significantly higher than XS14 (Student's t-test t=2.859, df=20.25, p<0.01)
- Random forest prediction accuracy: bulk soil 94.1%, rhizosphere 88.2%, rhizoplane 94.1%, endosphere 100%
- XS14 stochastic assembly in rhizosphere: ~25%; YY17: ~12% (stochastic processes indicate higher resistance to edaphic change)
- 16S amplicon: 11,231,141 high-quality reads; 14,369 ASVs at 97% DADA2 clustering
- Four root-associated niches studied: bulk soil, rhizosphere, rhizoplane, endosphere
- Soil amendments: lime (LM), pig manure (PM), biochar (BC), commercial Mg-Ca-Si conditioner (CMC), control (CK)
- Metagenome: 12 control samples (6 XS14, 6 YY17) from rhizosphere and endosphere; KO, COG, CAZy, ResFam databases

## Methods (brief)

16S rRNA gene amplicon sequencing (V3/V4, MiSeq); DADA2 clustering; alpha diversity (Shannon, Chao1); NMDS on Bray-Curtis; PERMANOVA; null model for assembly processes; co-occurrence networks; machine learning (random forest, plus 5 other models, 5-fold cross-validation). Shotgun metagenomics on 12 selected samples. No direct quantitative grain Cd concentrations reported (comparisons are relative); exact ppb values not extractable from the text for contamination_profile purposes.

## Implications

Certification: Confirms that cultivar choice is a high-leverage lever for reducing grain Cd; root microbiome manipulation (via soil amendments or inoculants) represents a companion strategy. Relevant to supply-chain sourcing guidance for rice.
Courses: Strong pedagogical example of microbiome-cultivar interaction in Cd uptake; illustrates why "rice" is not a monolithic risk category.
App: Supports ingredient-level risk differentiation between rice types (hybrid vs low-Cd cultivar) as a supply-chain metadata flag. No quantitative ppb values for contamination_profile.
Microbiome: Core reference for the rice-Cd–root microbiome axis. Candidate for [[microbiome/cadmium-rice-rhizosphere]] page.

## Wiki pages updated on ingest

- [[ingredients/rice]]
- [[metals/cadmium]]
- [[microbiome/cadmium-rice-rhizosphere]]
- [[mitigation/rice-cultivar-selection]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [7df819dbc](https://github.com/paleofoundation/heavymetalindex/commit/7df819dbc) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
