---
type: source
raw_handle: RPMEHG_10-3389-fmicb-2022-951782
cite_key: authors2026-type-original-research-38
title: "TYPE Original Research"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.3389/fmicb.2022.951782
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.3389/fmicb.2022.951782"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/Female Infertility/Metagenomic-based characterization of the gut virome in patients with polycystic ovary syndrome.pdf"
raw_sha256: "1e2957215a9460083b6b08ac08937e701d4f70c360f5dc28aca8b1adfb1c1430"
metals: [Pb, Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - TYPE Original Research

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Alberto Sola-Leyva, Peng Zhou 2, Guangrong Huang 3, Zuzhen Duan 3 and
- University of Chinese Medicine, Shenzhen, China, 2 Department of Acupuncture, Shenzhen Bao'an
- sunwen@bucm.edu.cn of Chinese Medicine, Shenzhen, China, 4 Key Laboratory of Health Cultivation of the Ministry of
- Education, Beijing University of Chinese Medicine, Beijing, China, 5 Beijing key Laboratory of Health
- This article was submitted to Cultivation, Beijing University of Chinese Medicine, Beijing, China, 6 School of Traditional Chinese
- ACCEPTED 27 July 2022 Background: Polycystic ovary syndrome (PCOS) is a complex disease that
- Front. Microbiol. 13:951782. Methods: In this study, we profiled and compared the gut viral community of
- 50 patients with PCOS and 43 healthy women based on the analysis of their
- Quimbyviridae was enriched. We identified 1,089 viral operational taxonomic
- curve (AUC) of 0.938, demonstrating the potential of the gut virome in the
- Frontiers in Microbiology 01 frontiersin.org
- Huang et al. 10.3389/fmicb.2022.951782
- Introduction et al., 2017; Beller and Matthijnssens, 2019; Cao et al., 2022). In
- endocrine disease characterized by a disorder of androgen secretion be observed (Santiago-Rodriguez and Hollister, 2019). The
- (Patel, 2018), which affects 6–20% of women of reproductive age structure of the gut bacterial microbiota in PCOS patients is
- worldwide (Meier, 2018). The syndrome leads to an increased risk significantly different from that in healthy people (Liu et al., 2017;
- of infertility, high blood pressure, obesity, metabolic disorders, and Torres et al., 2018; Qi et al., 2019), which may also lead to changes
- insulin resistance (Gilbert et al., 2018). Presently, many studies have in the gut virome. Investigating these changes will help us
- environmental factors (Goodarzi et al., 2011; Cui et al., 2013; the combination of metagenomic sequencing and virus sequence
- McAllister et al., 2015; Merkin et al., 2016; Kshetrimayum et al., recognition algorithms, re-mining past metagenomic data may
- (Visconti et al., 2019; Lee et al., 2020; Ruff et al., 2020), suggesting metagenome dataset from a recent PCOS study comprising 50
- that it may play an important role in the development and patients and 43 healthy subjects (Qi et al., 2019). We profiled
- progression of a variety of diseases (Carding et al., 2015; Fan and the whole gut virome from fecal metagenomes and identified
- Pedersen, 2021). Recent studies have highlighted the potential role the variations in gut viral composition and functions between
- PCOS (Qi et al., 2019). Mechanistically, the gut microbiota of PCOS correlation analyses between PCOS-associated gut viruses and
- immune cytokines such as interleukin-22 (IL-22) that are beneficial
- IL-22 axis also suggests that modulation of gut microbiota could Materials and methods
- be of great value for the treatment of PCOS (Qi et al., 2019).
- health state of humans (Cadwell, 2015). In the gut, viral biological The metagenomic dataset of 93 samples from 50 PCOS
- entities are thought to be in the same range as bacterial patients and 43 healthy controls was downloaded from the
- populations (Kim et al., 2011; Cadwell, 2015). They consist of a Sequence Read Archive (NCBI-SRA) database under project
- eukaryotic viruses (Shkoporov et al., 2019). The healthy human matched in their age, body mass index, and waist-hip ratio, as
- gut virome is highly specific to the individual and temporally described in the original study (Qi et al., 2019). Quality control
- stable (Reyes et al., 2010; Minot et al., 2013; Shkoporov et al., of raw metagenomic reads was performed using fastp (Chen
- 2019). Gut viruses coevolved with gut bacteria to play an et al., 2018). Briefly, low-quality (> 45 bases with quality score
- important role in intestinal homeostasis (Virgin, 2014; De Sordi < 20, or > 5 “N” bases), low-complexity, and adapter-
- et al., 2017). Recent studies have confirmed that enterovirus containing reads were removed, and the remaining reads were
- populations are associated with autoimmune diseases and trimmed at the tails for low-quality (< Q20) or “N” bases.
- inflammatory bowel diseases (Liang et al., 2021). Gut viruses may Human genomic reads were removed by mapping to the
- be the direct cause of diseases or indirectly affect the development reference human genome (GRCh38) using Bowtie2 (Langmead
- of diseases by regulating the structure of the bacteria (Carding and Salzberg, 2012).
- Frontiers in Microbiology 02 frontiersin.org

## Methods (brief)

- within-sample viral diversity and a remarkable alteration of the overall virome
- health state of humans (Cadwell, 2015). In the gut, viral biological The metagenomic dataset of 93 samples from 50 PCOS
- metagenomic samples, we used a non-redundant gut virus catalog (GTDB; Chaumeil et al., 2019). High-quality metagenomic reads
- derived from over 10,000 publicly available fecal metagenomes from of the samples of PCOS patients and healthy controls were
- contigs using MEGAHIT (Li et al., 2015) with the options “--kmer improve the comparison of samples with vastly different read
- 21,33,55” (for samples with read length < 100 bp or less) or “--kmer counts, we randomly subsampled 20,000,000 mapped reads per
- 21,33,55,77” (for samples with read length > 100 bp). Potential viral sample to recalculate the read count of each gut species. The
- sequences were identified from the contigs based on any of the relative abundance of each gut species in every sample was its read
- High-quality metagenomic reads of the samples of PCOS forest models were analyzed with the R randomForest package
- vOTUs in each sample was generated by aggregating the number The Wilcoxon rank-sum test was used to measure significant
- was divided by the number of total mapped reads in each sample. evaluate the false discovery rate (FDR) for correction of multiple
- evenness of the vOTU composition for each sample. The number correlation between viruses and bacteria. Correlations with an
- each sample. Shannon’s diversity index was calculated using the test q < 0.05 were shown in the correlation network. The network
- method described by a previous study (Kieft et al., 2020). samples of 50 patients and 43 healthy individuals (Qi et al., 2019).
- For all samples, the gut viral compositions were profiled by
- phylum level. (C) Bar plot showing the gut viral composition of all samples at the family level. Only the top 10 viral families with the highest
- within 1.5 times the range of the first and third quartiles, respectively; dots represent outlier samples beyond the whiskers. Wilcoxon rank-sum test
- reads from the samples of the patient and control expected, Siphoviridae (average relative abundance 9.5 ± 3.4%) and

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/lead]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
