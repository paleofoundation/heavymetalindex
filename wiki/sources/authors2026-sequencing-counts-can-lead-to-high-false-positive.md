---
type: source
raw_handle: RPMEHG_10-1038-s41593-023-01361-0
cite_key: authors2026-sequencing-counts-can-lead-to-high-false-positive
title: "sequencing counts can lead to high false-positive and false-negative total sequencing depth for each microbe (Extended Data Fig. 2a–d)."
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1038/s41593-023-01361-0
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1038/s41593-023-01361-0"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/Autism spectrum disorder (ASD)/Microbiome and gut-brain axis Autism spectrum disorder (ASD)/s41593-023-01361-0.pdf"
raw_sha256: "4a664c287676cbb5553c9de52d19e4ce5bb51e814141bf1ceb2b2f33cdf44cca"
metals: [Pb, Ni, Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - sequencing counts can lead to high false-positive and false-negative total seque

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- ASD-associated molecular and taxa profiles across 10 cross-sectional
- microbiome datasets and 15 other datasets, including dietary patterns,
- velopmental conditions defined by heterogeneous cognitive, behavioral causal insights remain elusive5. Mechanistically, much research has
- and communication impairments that manifest early in childhood1. To been focused on the interplay between the GI system and processes
- date, over 100 genes have been identified as putatively associated with controlled by the neuroendocrine, neuroimmune and autonomous
- ASD, with some genotypes now having a standardized clinical diagnosis2. nervous systems, all of which converge around the GI tract and together
- However, most of the genetic variants are still associated with heteroge- modulate the gut–brain axis (GBA)6.
- that might be responsible for particular impairments3. Some studies have gut and the brain, contributing to brain homeostasis and helping
- also looked at the presence of abnormalities in different brain regions in regulate cognitive and emotional functions7,8. Over the past decade,
- children with ASD4. However, whether such neuroanatomical features research on the factors modulating the GBA has revealed the central
- factors could induce analogous ASD-like symptoms, remain unresolved1. colonize the gut—in regulating neuroimmune networks, modifying
- In addition to risk factors, one comorbidity that has been linked neural networks and directly communicating with the brain9. Dys-
- still unclear10. and dependent omic datasets in one integrated analysis19. To mini-
- Several dozen autism gut metagenomics studies have revealed mize issues of compositionality and sequencing depth20, we mod-
- many, albeit inconsistent, variations in microbial diversity in indi- eled sequencing count data using a negative binomial distribution21
- viduals with ASD compared to neurotypical individuals10. Similarly, (Extended Data Fig. 1, ‘Study approach’). Our differential ranking
- viduals with ASD and neurotypical individuals11. Comparative analyses neurotypical control children within each study cohort to adjust for
- ies12, raising the question of whether the results obtained so far reflect tion). Finally, we cross-referenced the microbial differential rankings
- intrinsic biological differences among cohorts, insufficient statistical estimated from 16S rRNA gene (16S) amplicon data obtained from seven
- power or experimental biases that preclude meaningful comparisons13. age-matched and sex-matched cohorts against 15 other omic datasets
- interpretation14. Microbiome datasets, like other omic datasets, are for the 16S and shotgun metagenomics sequencing (SMS) differentials
- sequencing counts can lead to high false-positive and false-negative total sequencing depth for each microbe (Extended Data Fig. 2a–d).
- rates when identifying differentially abundant microbes15. Microbiome In both analyses, we observed that the models could use sequencing
- ing ASD subtypes and constructing reliable diagnostics, but is typically Fig. 2b,d). Furthermore, rare taxa (with fewer than 100 reads total)
- not measured or controlled for1. were not among the most differentially abundant ASD-associated taxa
- Understanding the functional architecture—the network of (Extended Data Fig. 2a,c).
- the different omic levels contributing to it16. Traditionally focused on estimates between rarefied (9,000 threshold) and non-rarefied
- the human genomic, metabolic and cellular components, mounting data from our 16S cross-sectional datasets showed that rarefaction
- evidence of the role the GBA plays in phenotype determination raises did not substantially affect our results (Extended Data Fig. 2e). We
- architecture of autism17. despite the sequencing depth confounder, our differential abun-
- ferentials, or relative log fold changes15, across multiple potential ASD standard group-averaged differential ranking analysis across seven
- subtypes implicit in 25 omic datasets (Table 1). Ranking microbes by out of the 11 16S studies22–29 (Extended Data Fig. 2g). A side-by-side
- their log fold changes allows us to simultaneously (1) cancel out the comparison with a commonly used differential abundance approach,
- compositional bias inherent in microbiome datasets and (2) minimize ANCOM-BC (ref. 30), was then conducted to highlight the differences
- (FDR)-corrected statistical tests15. A key feature of our approach was to abundance methods (Extended Data Fig. 2i–k).
- protocols, because within-study fold change calculations are insen- MicroBiome Quality Control (MBQC) study (Sinha et al. 2017 (ref. 31))
- sitive to batch effects18 (Extended Data Fig. 2). The preponderance to evaluate the extent to which within-study differential analysis
- proposed. Furthermore, the development of the microbiome during on the microbial abundance datasets (16S microbial counts) gener-
- analysis reveals strong associations among omic levels along the GBA processing two identical MBQC microbiome samples (samples ‘4’
- and in particular of the microbiome in the context of ASD. Ultimately, and ‘6’), we calculated the differentials between microbial counts for
- Table 1 | ASD omic datasets included in this study. All sequencing datasets were retrieved from the SRA
- Human Postmortem RNAseq 4 49 Velmeshev et al. 2019 (ref. 59); Wright et al. 2017 (ref. 60); Herrero

## Methods (brief)

- analysis reveals strong associations among omic levels along the GBA processing two identical MBQC microbiome samples (samples ‘4’
- our analysis highlights the inherent limitations of cross-sectional stud- these samples for each laboratory. An initial assessment of overall
- ies for understanding the dynamics of the functional architecture of variability between the two samples (principal coordinate analysis
- defining the causal relationship between the microbiome and other showed a reasonable separation between both samples just based on
- the metagenomic samples by each laboratory were identical, the high children with ASD and neurotypical children within age-matched and
- experimental and laboratory-specific batch effects. Consistent with the when we trained one classifier across all 1,193 samples across all of the
- and SMS samples. Abundances obtained after mapping reads to the AUC = 0.69; David et al.37 AUC = 0.46; Elliot et al.38 AUC = 0.38). Similarly
- No. of samples M:F AUC
- Zurita2020 (24) No. of samples M:F Avg age (years) AUC
- and sex-matched ASD–control pair across all cohorts. Microbes are binned into were computed for each sample. The x axis represents the case–control
- b, Sample size, male:female (M:F) ratio and average ages across all 16S and sizes of different omics levels: viral, 16S, SMS and RNA-seq.
- Our understanding of how the gut microbiome is connected versus untargeted and liquid chromatography–mass spectrometry
- to dietary preferences, host immunity and GI and ASD behavioral (LC–MS) versus gas chromatography–mass spectrometry (GC–MS))
- multiple sites and potentially centralizing some aspects of sample pro- 1. Lord, C. et al. Autism spectrum disorder. Nat. Rev. Dis. Primers 6,
- plasma and urine samples between autistic and typically associated with changes in gut microbiota composition
- Search strategy and inclusion criteria clinical diagnosis. DNA was extracted from stool samples, and 16S
- MassIVE resource, the PsychENCODE consortium and the American tains 15,953 bacterial and archaeal genomes sampled from the NCBI
- and multi-omics meta-analysis framework that allowed us to combine con sequencing variants from public and private samples Qiita using

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/lead]]
- [[metals/nickel]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
