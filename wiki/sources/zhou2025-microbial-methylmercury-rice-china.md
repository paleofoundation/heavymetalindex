---
type: source
raw_handle: FM_12130583
cite_key: zhou2025-microbial-methylmercury-rice-china
title: "Microbial potential to mitigate neurotoxic methylmercury accumulation in farmlands and rice"
authors: [Zhou XQ, Chen KH, Yu RQ, Yang M, Liu Q, Hao YY, Li J, Liu HW, Feng J, Tan W, Huang Q, Gu B, Liu YR]
year: 2025
publication: "Nature Communications"
doi: 10.1038/s41467-025-60458-1
access_url: https://doi.org/10.1038/s41467-025-60458-1
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: raw/markdown/FM_12130583/FM_12130583.md
metals: [MeHg, tHg]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice, paddy-soil]
jurisdictions: [CN]
near_duplicates: []
sample_n: null
sample_population: "Paddy soils and upland soils with high or low background Hg contamination, China; rice grain MeHg projections across main Chinese rice-producing areas"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

Zhou et al. (2025) used ¹³CH₃Hg⁺ DNA stable-isotope probing (SIP) combined with shotgun metagenomics to identify microbial taxa responsible for methylmercury (MeHg) degradation in paddy and upland soils in China, then estimated how microbial demethylation activity reduces MeHg accumulation in rice grains across the country. The study found that three taxa — Pseudarthrobacter, Methylophilaceae (MM2), and Dechloromonas — are the primary degraders of MeHg in paddy soil under high background Hg contamination, and estimated that microbial degradation contributes to 0.08–0.64-fold decreases in rice grain MeHg accumulation nationally, reducing associated hazard quotients (HQ) by 0.62–13.75%.

## Key numbers

- Microbial degradation efficiencies of spiked MeHg (50 µg/kg spiked) over 28 days:
  - High Hg–paddy soil (High-P): 86% degradation; post-incubation concentration 5.16 µg/kg
  - High Hg–upland soil (High-U): 37% degradation; post-incubation concentration 23.16 µg/kg
  - Low Hg–paddy soil (Low-P): 40% degradation; post-incubation concentration 28.05 µg/kg
  - Low Hg–upland soil (Low-U): 64% degradation; post-incubation concentration 14.10 µg/kg
- Peak degradation rates: 5.30 µg/kg/day (Low-P, day 3); 2.95 µg/kg/day (High-P, day 14)
- National-scale estimate: microbial MeHg degradation in soil reduces rice grain MeHg accumulation by 0.08–0.64-fold across China's main rice-producing areas
- Associated HQ reduction: 0.62–13.75% decrease in hazard quotient from microbial activity
- Dominant candidate taxa in high-Hg paddy soil: Pseudarthrobacter, Dechloromonas denitrificans, Methylovorus menthalis (MM2); confirmed MeHg degradation in pure culture
- Dominant metabolic pathways: Wood-Ljungdahl, dicarboxylate-hydroxybutyrate cycle, methanogenesis, denitrification; merB and merA genes largely absent (non-mer-operon pathway)

## Methods (brief)

Microcosm incubation experiments with ¹³C-labeled CH₃Hg⁺ in paddy and upland soils (high and low background Hg contamination). ¹³C-DNA SIP using CsCl gradient ultracentrifugation and PacBio RS II long-read 16S rRNA sequencing to identify degrading taxa. Metagenome-assembled genomes (MAGs) used to infer metabolic pathways. National-scale projection used HQ modeling across main Chinese rice-producing provinces. Units for soil MeHg: µg/kg dry weight.

Note: This paper reports soil MeHg (not rice grain concentrations directly measured); rice grain MeHg accumulation projections are model-derived. The hazard quotient estimates reference measured rice grain MeHg in Chinese rice from prior literature.

## Implications

Certification: Microbial demethylation capacity in paddy soils provides a partial but incomplete natural buffer on rice grain MeHg. Even with maximum biological attenuation, HQ reduction is only 0.62–13.75% — insufficient to fully mitigate MeHg risk from high-contamination paddy fields. Bioremediation via inoculation of degrader taxa is a future mitigation pathway.

Courses: Illustrates soil–crop MeHg pathway; good case study for why paddy conditions (hypoxic, sulfate-reducing) are hotspots for MeHg production and why rice carries higher MeHg than other grains.

App: Supports elevated MeHg flag for rice (especially from high-Hg paddy regions in China). Does not provide direct food-matrix concentration values but provides mechanism and quantitative estimate of soil-to-grain transfer modulation.

## Wiki pages updated on ingest

- [[metals/mercury]]
- [[ingredients/rice]]
- [[microbiome/methylmercury-soil-microbiome]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [22b1fec](https://github.com/paleofoundation/heavymetalindex/commit/22b1fec) | 2026-05-31 | autonomy: self-heal recovery of prior tick's uncommitted work — 2026-05-31T15-22-11Z |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
<!-- END: hmi-page-history -->
