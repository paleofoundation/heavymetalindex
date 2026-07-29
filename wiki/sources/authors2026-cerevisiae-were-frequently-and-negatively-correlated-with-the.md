---
type: source
raw_handle: RPMEHG_10-1186-s12967-024-05004-1
cite_key: authors2026-cerevisiae-were-frequently-and-negatively-correlated-with-the
title: "cerevisiae, were frequently and negatively correlated with the levels of various toxic metabolites in the feces."
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1186/s12967-024-05004-1
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1186/s12967-024-05004-1"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/Chronic Kidney Disease (CKD)/Fungal dysbiosis Chronic Kidney Disease (CKD)/s12967-024-05004-1.pdf"
raw_sha256: "93a0878e015d49a18596fd4968730b89076116b6f03d13360a3dd16213634259"
metals: [Ni, Al, Sn, Cr]
ingredients: []
products: ["[[products/fish-marine-predatory]]"]
matrices: [fish-marine-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - cerevisiae, were frequently and negatively correlated with the levels of various

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Ren et al. Journal of Translational Medicine (2024) 22:202 Journal of
- Methods In this study, we compared the gut fungal populations of 223 ESRD patients and 69 healthy controls
- Jiaotong University, No. 157 Xiwu Road, Xi’an 710004, Shaanxi, People’s
- Department of Critical Care Nephrology and Blood Purification, the 7
- First Affiliated Hospital of Xi’an Jiaotong University, 277 West Yanta Road,
- © The Author(s) 2024. Open Access This article is licensed under a Creative Commons Attribution 4.0 International License, which
- licence, visit http://​creat​iveco​mmons.​org/​licen​ses/​by/4.​0/. The Creative Commons Public Domain Dedication waiver (http://​creat​iveco​
- mmons.​org/​publi​cdoma​in/​zero/1.​0/) applies to the data made available in this article, unless otherwise stated in a credit line to the data.
- Ren et al. Journal of Translational Medicine (2024) 22:202 Page 2 of 11
- sive renal injury that impacts more than 800 million indi-
- viduals worldwide (1). At the end stage of CKD, known Methods
- apy, such as dialysis or transplantation, which not only All fecal metagenomic sequencing samples from 223
- imposes a significant economic burden but also leads to a ESRD patients and 69 healthy individuals used in this
- dramatic fall in their quality of life (2). This highlights the study are available at the NCBI Sequence Read Archive
- patients, exacerbating the progression of the disease (5).
- severity of glomerulosclerosis and renal fibrosis (5). Sev- National Center of Biotechnology Information (NCBI)
- gut bacteria and CKD clinical characteristics such as 6000 fungal genomes available until April 2020. Subse-
- cytokines, and increasing galactose-deficient IgA1 (6–8). on their metadata records in the BioSample or original
- body. Recent studies have highlighted the association criteria: (1) the genome size < 100 Mb and N50 length > 20
- between alterations in the gut fungal community and kb, (2) documentation of the relevant species colonizing
- immune-related disorders such as rheumatoid arthritis or infecting a specific human body site, and (3) exclu-
- (9), multiple sclerosis (10), and inflammatory bowel dis- sion of non-diet derived fungi such as Agaricus bisporus,
- ease (11). In the context of CKD, patients with impaired Auricularia auricula-judae, Ganoderma lucidum, and
- immune function and prolonged use of immunosuppres- so on. A total of 1503 human-associated genomes were
- sive drugs are particularly susceptible to fungal infec- retained and clustered into 106 nonredundant genome
- tions (12). Importantly, the gut fungal community in species-level clusters (hereinafter referred to as “species”)
- CKD patients has been linked to their immunological using dRep v3.4.0 with the parameters ’dereplicate -pa 0.9
- profiles (13), suggesting a possible influence of gut fungi -sa 0.96 -nc 0.3 -S_algorithm fastANI’ (16). For each fun-
- on immune dysfunction in CKD patients. On the other gal species, the genome with the longest N50 length was
- contributed to the translocation of gut microbes or their of 106 species were employed to construct our catalog of
- toxins into the bloodstream (14). A study with uremic gut fungal references.
- in systemic infection, although such cases have not been To ensure data quality, we employed fastp v0.20.164 to
- reported in humans (15). Overall, accumulating evi- process each metagenomic sample (17). The raw reads
- Currently, the relationship between the gut mycobiome lows: (1) reads shorter than 90bp; (2) reads with a mean
- and chronic kidney disease especially ESRD, remains Phred quality score lower than 20; (3) reads with over
- largely unexplored. Given that ESRD patients have a 30% of their bases having a Phred quality score lower
- higher risk of fungal infections, we performed a multi- than 20; (4) reads with a mean complexity below 30%;
- omics analysis based on the gut mycobiome, fecal metab- and (5) unpaired-end reads. To minimize the impact of
- olome, and serum metabolome datasets from 69 healthy non-specific mapping of reads to fungal genomes in sub-
- controls and 223 ESRD patients. The analysis aimed to sequent analysis, we mapped the quality-filtered reads
- Ren et al. Journal of Translational Medicine (2024) 22:202 Page 3 of 11
- against three databases: the GRCh38 genome, the Uni- Explanatory power

## Methods (brief)

- apy, such as dialysis or transplantation, which not only All fecal metagenomic sequencing samples from 223
- cytokines, and increasing galactose-deficient IgA1 (6–8). on their metadata records in the BioSample or original
- reported in humans (15). Overall, accumulating evi- process each metagenomic sample (17). The raw reads
- For each sample, the remaining reads were aligned power of the gut mycobiome on the serum metabolome,
- ized read counts in a sample. This process defined the ate. (3) A second PERMANOVA analysis was executed
- relative abundance of each population in the sample. For using the first variate and each remaining fungal spe-
- zero in each sample. Shannon’s index and Simpson’s
- Sample information and fungal database obiome, we developed a customized fungi database
- sequencing metagenomic samples. The dataset threshold of 96% average nucleotide identity (ANI)
- included samples from 223 ESRD patients and 69 from a pool of 1503 human-associated genomes (Addi-
- average high-quality read data of 11.2 ± 1.7 Gb. The ity reads from each sample were mapped against the
- and gender (Student’s t-test, p < 0.001) but not in BMI taxa were detected in the study samples, representing
- of the fungal profiles at the species level. The plot displayed the distribution of samples along PCoA1 and PCoA2, with ellipsoids indicating the 80%
- confidence interval for each group. The bottom and left boxplots displayed the sample scores in PCoA1 and PCoA2. B Comparison of alpha
- of the top 10 abundant genera across all samples. E Boxplots showing the relative abundances of the genera Aspergillus and Hortaea in each
- mation available for the samples, we did not consider of chronic kidney disease and end-stage renal disease. Semin Nephrol.
- Additional file 1. Supplementary Table 1 Sample information from 223 6. Sabatino A, Regolisti G, Cosola C, Gesualdo L, Fiaccadori E. Intestinal
- 30. Sokol H, Leducq V, Aschard H, Pham HP, Jegou S, Landman C, Cohen D,

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-predatory]]
- [[metals/nickel]]
- [[metals/aluminum]]
- [[metals/tin]]
- [[metals/chromium]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
