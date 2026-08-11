---
type: source
raw_handle: FM_13012491
cite_key: jaramillo-mazo2026-cacao-cd-bacteria
title: "Integrating natural gradients and controlled assays to reveal bacterial responses to cadmium in Theobroma cacao L., soils"
authors: [Jaramillo-Mazo C, Bravo D, Villanueva-Mejía DF, Correa-Alvarez J]
year: 2026
publication: "PLoS One"
doi: "10.1371/journal.pone.0345645"
access_url: https://doi.org/10.1371/journal.pone.0345645
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: raw/markdown/FM_13012491/FM_13012491.md
metals: [Cd]
products: []
ingredients: ["[[ingredients/cocoa]]"]
matrices: [rhizosphere-soil, cacao-soil]
jurisdictions: [CO]
near_duplicates: []
sample_n: 225
sample_population: "225 rhizosphere soil samples from 16 plots across 5 cacao farms in Antioquia and Santander departments, Colombia; natural soil Cd gradient 0–4.3 mg kg-1; collected 2020 and 2022"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Jaramillo-Mazo et al. 2026 — Bacterial community responses to cadmium in Colombian cacao soils

## Overview

A large-scale field and laboratory study integrating 16S rDNA amplicon sequencing (225 rhizosphere samples from 5 Colombian cacao farms) with isothermal microcalorimetry (IMC) Cd-spiking assays finds that approximately 28% of the soil bacterial community responds to high cadmium concentrations, with distinct taxa enriched under natural elevated Cd versus experimental Cd addition. Both farm location and Cd soil concentration independently shape bacterial community composition (PERMANOVA p < 0.001 for both). The study identifies Flavobacterium as a newly reported Cd-tolerant genus in cacao soils, and several genera (Novosphingobium, Caulobacter, Lysobacter, Rhizobium, Clostridium sensu stricto 12) were detected as Cd-responsive across multiple geographically distant farms.

This paper is directly relevant to the cocoa Cd supply-chain question: prior work by the same group (Jaramillo-Mazo et al. 2024, Microbiol Spectr) showed that bacterial community composition is associated with Cd translocation from soil to cacao beans; this 2026 study extends that mechanistic picture by characterizing which taxa are specifically Cd-responsive under natural and spiked conditions, and by demonstrating that Cd soil concentrations ranged up to 4.3 mg kg-1 in Antioquia and Santander farms.

## Key numbers

Soil Cd concentrations across farms (DTPA-extractable or total, units mg Cd kg-1 dry soil):

- Low category: 0–1 mg kg-1
- Medium category: 1–2 mg kg-1
- High category: 2–4.3 mg kg-1
- Farm 1 (Antioquia, Urabá): minimal variation in soil Cd but large variation in bean Cd (per prior companion study)
- IMC metabolic activity samples with Cd metabolic response: soil Cd concentrations ranged 1.5–3.13 mg kg-1

Bacterial community response metrics:

- 28% of phyla responded (differential abundance) to the high natural soil Cd category versus low; 13% increased, 15% decreased
- 27% of taxa changed between start and end of IMC experiment; among responsive taxa, 16% increased abundance, 11% decreased
- 386 ASVs shared across all three Cd categories (core community stable regardless of Cd)
- 97 core ASVs detected across all five farms (stable regardless of geographic location)
- 49,019 total ASVs detected; 2,788–25,083 non-chimeric denoised sequences per sample

Taxa positively enriched under high natural Cd (vs low): Thaumarchaeota, Gal15, Armatimonadetes, Actinobacteria, Chloroflexi, Planctomycetes. Taxa negatively associated: Bacteroidetes, Gemmatimonadetes, Latescibacteria, Nitrospirae, Rokubacteria, Zixibacteria.

Taxa positively enriched under experimental Cd spiking (1 mg L-1 CdCl2): Firmicutes, Bacteroidetes, Patescibacteria, Proteobacteria, Cyanobacteria, Actinobacteria. Genera: Flavobacterium (new), Rhizobium, Enterobacter, Brevundimonas, Novosphingobium, Caulobacter, Lysobacter, Clostridium sensu stricto 12.

Method: 16S rDNA amplicon sequencing (V3-V4 region, Illumina MiSeq, 300 bp paired-end); DADA2/Qiime2 pipeline; SILVA v132 reference database; ANCOM-BC differential abundance analysis. IMC: 8-channel TAM Air, 80 h at 25 °C, 1 mg L-1 CdCl2 spiking, Mergeay selective medium, 30 spiked + 30 control samples; DNA extracted at start, peak, and end of assay.

## Methods (brief)

225 rhizosphere soil samples collected at 0–20 cm depth from 5 cacao farms, 16 plots, Antioquia and Santander (Colombia), 2020 and 2022. Composite samples per plant from 3 equidistant points. IMC experiment: 60 soil samples (6 per farm), paired design (same sample with and without 1 mg L-1 CdCl2 in Mergeay medium). Bacterial community composition assessed by 16S rDNA at three time points during IMC. Statistical analyses: Kruskal-Wallis/Dunn with Benjamini-Hochberg correction (alpha diversity); PERMANOVA/Adonis with Bray-Curtis distances (beta diversity); CAP ordination; ANCOM-BC (differential abundance). Limitation: single time-point field sampling per plant; no direct measurement of bean Cd in this study (bean Cd link established in prior companion study); IMC Cd spiking uses soluble CdCl2 rather than soil-matrix Cd, which may not replicate natural speciation. No LOD/LOQ reported; Cd values are soil concentrations, not food concentrations.

## Implications

Certification: The cocoa Cd contamination problem has a bacterial dimension: specific taxa (including some unculturable lineages) mediate Cd transformation and mobilization in rhizosphere soils, and community composition varies significantly across farms in ways that correlate with Cd translocation to cacao beans (per companion study). Supply-chain Cd risk in cocoa cannot be fully captured by soil chemistry alone; the microbial community is a co-driver of farm-level variability. This mechanistic understanding supports origin-specific sourcing and farm-level screening rather than commodity-level averages.

Courses: Provides a concrete illustration of the metals-microbiome-food-safety nexus for cocoa: bacterial communities are not just passive bystanders to Cd contamination but active participants in determining how much Cd moves from soil to bean. The genera identified (Rhizobium, Enterobacter, Lysobacter, Novosphingobium) are familiar to microbiology-trained audiences and make the supply-chain story concrete.

App: Cocoa origin data, where available, should be weighted by both soil Cd measurements and microbial community risk indicators where those exist. The farm-level variability in bacterial Cd-response activity documented here is consistent with the high geographic variance in cocoa Cd noted across the wiki corpus.

Microbiome: Establishes Flavobacterium as a newly identified Cd-tolerant genus in cacao soils. Genera with cross-farm detection (Novosphingobium, Caulobacter, Lysobacter, Rhizobium) are candidates for bioaugmentation strategies aimed at Cd immobilization. Provides phylum-level taxa lists for both natural Cd gradient and experimental Cd addition conditions that can anchor WikiBiome crosswalk pages on the metals-soil-microbiome pathway.

## Wiki pages updated on ingest

- [[ingredients/cocoa]]
- [[metals/cadmium]]
- [[microbiome/soil-cd-bacteria]]
- [[supply-chain/agricultural-mitigation]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
