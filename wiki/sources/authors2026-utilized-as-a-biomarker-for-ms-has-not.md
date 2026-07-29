---
type: source
raw_handle: RPMEHG_10-1186-s13073-024-01364-x
cite_key: authors2026-utilized-as-a-biomarker-for-ms-has-not
title: "utilized as a biomarker for MS has not been resolved. To Data processing of 16S rRNA sequences"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1186/s13073-024-01364-x
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1186/s13073-024-01364-x"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/Multiple Sclerosis/Metagenomic analysis Multiple Sclerosis/s13073-024-01364-x.pdf"
raw_sha256: "f954d72b8035ee37b5e3c79860e302727944c2fa8503f031ffef0f12c137e21c"
metals: [Pb, Ni, Al, Sn]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]", "[[products/shellfish]]"]
matrices: [fish-marine-non-predatory, shellfish]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - utilized as a biomarker for MS has not been resolved. To Data processing of 16S 

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Lin et al. Genome Medicine (2024) 16:94 Genome Medicine
- Qingqi Lin1,2, Yair Dorsett2, Ali Mirza3, Helen Tremlett3, Laura Piccio4,5, Erin E. Longbrake6, Siobhan Ni Choileain6,
- David A. Hafler6, Laura M. Cox7, Howard L. Weiner7, Takashi Yamamura8, Kun Chen9, Yufeng Wu1 and
- Methods To answer this, we performed a meta-analysis based on the 16S rRNA gene sequencing data from seven
- geographically and technically diverse studies comprising a total of 524 adult subjects (257 MS and 267 healthy
- © The Author(s) 2024. Open Access This article is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
- view a copy of this licence, visit http://creativecommons.org/licenses/by-nc-nd/4.0/.
- Lin et al. Genome Medicine (2024) 16:94 Page 2 of 13
- of the central nervous system affecting 2.8 million peo- animal studies, non-sequencing-based microbiota stud-
- MS (1). A number of case-control studies have demon- numbers provided in the publications and downloaded
- duration (2–17). These include depletion or enrichment led to seven case-control microbiome studies using 16S
- ferences of overall microbial community structure, and, file 1: Fig. S1). Demographic categories (sex, age, Body
- rate (DMF), displayed distinct microbiota composition 16S rRNA gene, and sequencing platforms were sum-
- compared to non-treated patients (3). marized in Additional file 2: Table S1. For patients with
- This is not surprising, given that analyses can be affected (in Zeng’s study (11) from China), or any other MS drug
- tion, regions of 16S rRNA gene sequencing, downstream lection was obtained from published paper or directly
- data processing pipeline, and sequencing platform can all provided by authors. In two studies (Chen and Zeng) (5,
- tistical power (19). Moreover, findings of gut microbiota ment was defined as no MS related treatment for at least
- differences are challenging to interpret, as different taxo- 3 months prior to stool collections in four studies (2, 4, 6,
- nomical levels have been used to express results. Con- 7). Details on treatment and disease activity in each study
- sequently, the fundamental question of whether there can be found in Additional file 2: Table S2.
- utilized as a biomarker for MS has not been resolved. To Data processing of 16S rRNA sequences
- covery in MS, a meta-analysis leveraging existing studies rately using the DADA2 pipeline to generate the taxo-
- The goal of our study is to understand the degrees of trimmomatic (V.38) (21), and paired reads were merged
- microbiota variation across MS studies and determine by fastq_mergepairs of VSEARCH (V2.4.3) (22) with
- using publicly available datasets. We were able to obtain 20 were trimmed using Filter and Trim function with pre-
- raw 16S rRNA gene sequences of the gut microbiota from determined parameters “trimLeft” and “truncLen.” Reads
- conducted across different countries from 2008 to 2020. and then taxonomic classification. “Silva_v138” was used
- related gut microbiota by analyzing each study separately Samples with less than 1000 reads were removed from
- from 2008 to 2020 in PubMed with key words (multiple and controls, we compared alpha diversity (richness and
- Lin et al. Genome Medicine (2024) 16:94 Page 3 of 13
- visualize differences in overall microbial community that were present in more than 50% of participants in
- cal approaches (23). We applied both non-parametric reported by combining results (union) from both blocked
- Wilcoxon rank-sum test and DESeq2 differential abun- Wilcoxon rank-sum test and linear mixed-effects regres-
- DESeq2 analysis. Adjusted p-values with a false discov- meta-analysis. Adjusted p-values with a FDR of < 0.1
- ery rate (FDR) of < 0.05 were considered as statistically were considered as statistically significant.
- significant. Significant genera identified by DESeq2 can
- to potentially high false positive rate (24). We manually We chose random forest (RF) classifier for MS and con-
- results that were driven by one or two outlier values, as microbiota data (28). We performed classification using
- we have done previously (25). The final differential genera three different strategies with “randomForest” package in
- the Wilcoxon rank-sum test and DSEseq2 test. train RF model and assess the performance of the classi-
- To view microbiota variation across studies, PCA analy- out data set. Third, we randomly selected 3/4 of microbi-

## Methods (brief)

- addition, patients treated with disease modifying thera- identifier (PMID) and sample size of each study, country
- contribute to the observed discordance (18). In addition, 11), stool samples were considered from an active status
- a small sample size is likely to cause false positive/nega- if they were collected within a month of a relapse; other-
- related gut microbiota by analyzing each study separately Samples with less than 1000 reads were removed from
- ling for major confounding variables (26). Two-group strap samples. Correlations with values larger than 0.2
- stool sample collection. The rest were treated with dis- This result suggests that the decreased relative abun-
- A PCA plot was used to visualize sample clustering PC10 (p = 0.002), but the differences or effect sizes were
- abundant genera are labeled in the plot. b Principal component analysis of samples from all seven studies based on Bray-Curtis distance; different
- large sample size did not achieve higher prediction AUCs in the iMSMS study, it identified unique presence of
- sample size, we did not perform a comparison between cation of increased Streptococcus or Actinomyces in MS
- with rheumatoid arthritis, indicating that the immu- besides increasing sample size to train the classifier, we
- coccus is a dominant genus in the oral cavity but also part to even smaller sample size for each specific treatment
- tococcus was significantly increased in MS compared to Future studies with standardized sample collec-
- controls, and it remained significant in most iterations tion, sample processing, sequencing approach, and
- of the colonic microbiome in patients with multiple sclerosis and their 36. Shahi SK, Freedman SN, Murra AC, Zarei K, Sompallae R, Gibson-Corley
- DADA2: high-resolution sample inference from Illumina amplicon data. in multiple sclerosis. Sci Adv. 2017;3:e1700492.
- ential expression methods when analyzing human population samples. 46. Herrmann I, Kellert M, Schmidt H, Mildner A, Hanisch UK, Bruck W, Prinz
- 30. Friedman J, Alm EJ. Inferring correlation networks from genomic survey

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[products/shellfish]]
- [[metals/lead]]
- [[metals/nickel]]
- [[metals/aluminum]]
- [[metals/tin]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
