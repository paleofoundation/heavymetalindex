---
type: source
raw_handle: RPMEHG_10-1038-s41598-017-11237-6
cite_key: cancer2026-www-nature-com-scientificreports
title: "www.nature.com/scientificreports"
authors: ["OPEN Distinct gut microbiome patterns associate with consensus molecular subtypes of colorectal cancer"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1038/s41598-017-11237-6
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1038/s41598-017-11237-6"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/colon cancer/Microbiome signature colon cancer/s41598-017-11237-6.pdf"
raw_sha256: "73b5ca83249eb8ace1fcfc9d6200894ce1c1c7672d7e7aaca179ec9c81530fb4"
metals: [Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# cancer et al. 2026 - www.nature.com/scientificreports

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- , Martina Visnovska2, Patrick J. Biggs3, Sebastian Schmeier 2
- 34 tumours into CRC subtypes using RNA-sequencing derived gene expression and determined relative
- abundances of bacterial taxonomic groups using 16S rRNA amplicon metabarcoding. 16S rRNA
- Proteobacteria in CMS1. A more detailed analysis of bacterial taxa using non-human RNA-sequencing
- highly enriched species associated with CMS1 included Fusobacterium hwasookii and Porphyromonas
- gingivalis. CMS2 was enriched for Selenomas and Prevotella species, while CMS3 had few significant
- Fusobacterium nucleatum, Parvimonas micra and Peptostreptococcus stomatis in CMS1. In this study, we
- tality worldwide1. CRC is a highly heterogeneous disease, with varying clinical outcomes, response to therapy,
- TP53 mutation status, microsatellite instability (MSI), CpG island methylator phenotype (CIMP), somatic copy
- used with some success to stratify CRC into subgroups2–7. The advent of large-scale sequencing technologies has
- on tumour gene expression8. The strong association of these CMS subtypes with distinct molecular features and
- The human colon plays host to a vast and complex microbial community of <1012 microorganisms9, and a grow-
- ing body of evidence points to a role for gut microbial dysbiosis in the development of CRC10. Comparison of
- faecal microbiomes from CRC patients and healthy controls11–14 has identified particular bacterial species that are
- changes in local communities of potentially interacting bacterial taxa are associated with different disease states14,
- tional remodelling associated with specific bacteria have recently been described in CRC16, 17. However, a global
- Department of Surgery, University of Otago, Christchurch, New Zealand. 2Institute of Natural and Mathematical
- Sciences, Massey University, Auckland, New Zealand. 3Hopkirk Institute, Institute of Veterinary, Animal and
- Mean = 74 years
- Lymphovascular invasion 16
- Extramural venous invasion 7
- Perineural invasion 5
- Table 1. Patient cohort characteristics. *Post-operative; **including one large adenoma; n, number of patients.
- Here, we looked at gene expression and related CMS subtypes of a cohort of 34 CRC patients using data derived
- through RNA-sequencing, and use both bacterial 16S rRNA gene analysis and interrogation of non-human RNA
- Patient cohort and samples. Colorectal cancer tumour samples were collected from 34 patients during
- approval number: H16/037), and all experiments were performed in accordance with relevant guidelines and
- Twenty of the patients were female, and patient ages at the time of surgery ranged from 44–88 years (mean age,
- 74 years, see Table 1). One tumour sample was from the rectum, 21 tumours were from the right side of the colon,
- and 12 from the left side. One sample was of a large colorectal adenoma, not an adenocarcinoma. Histologically,
- four tumours were described as well differentiated, 20 were moderately and nine were poorly differentiated. Two
- tumours were stage 1, 14 and 13 tumours were stage 2 and 3, respectively, while only one tumour was stage 4.
- Patient characteristics are given in more detail in Table 1.
- Nucleic acid extraction. Samples were immediately frozen in liquid nitrogen and initially stored at −80 °C.
- They were subsequently transferred to RNAlater ICE (Qiagen), and stored at −20 °C, prior to nucleic acid
- with RNAse A. Purified nucleic acids were quantified using the NanoDrop 2000c spectrophotometer (Thermo
- Scientific, Asheville, NC, USA), and stored at −80 °C. Nucleic acids were extracted from all tumour samples in a
- RiboZero Gold) was carried out using Illumina TruSeq V2 reagents. RNA-sequencing was carried out using the
- (TPM). Last, the CMS classifier8 was used to assign a molecular subtype of the disease to each sample based on
- Adapter sequences were removed using utility fastq-mcf (v1.1.2.537) from EA Utils18. Next, SolexaQA++
- (v3.1.6)19 was used to trim low-quality segments of the reads and only sufficiently long reads were kept for further
- such that the probability of a base being called in error was less than 0.01. Afterwards, segments shorter than

## Methods (brief)

- sequences from tumour tissue to establish metagenomic profiles for each tumour sample. The combination of
- Patient cohort and samples. Colorectal cancer tumour samples were collected from 34 patients during
- surgical resection of previously untreated tumours. Samples were collected with patients’ written, informed con-
- 74 years, see Table 1). One tumour sample was from the rectum, 21 tumours were from the right side of the colon,
- and 12 from the left side. One sample was of a large colorectal adenoma, not an adenocarcinoma. Histologically,
- Nucleic acid extraction. Samples were immediately frozen in liquid nitrogen and initially stored at −80 °C.
- Scientific, Asheville, NC, USA), and stored at −80 °C. Nucleic acids were extracted from all tumour samples in a
- RNA sequencing. Sample preparation, including library creation and ribosomal RNA depletion (with
- each sample library was split equally to the two lanes. Sequences from the two lanes were merged for each sample
- for each sequenced sample and later on to classify the samples into CMS subtypes, the raw sequenced reads were
- a reference human genome sequence and a read count for every annotated gene was calculated for each sample.
- (TPM). Last, the CMS classifier8 was used to assign a molecular subtype of the disease to each sample based on
- using htseq-count (v0.6.1p1)22 for each sample and the raw read counts were transformed to TPM values using R
- were collected from various public and proprietary datasets. The profiles were classified due to each of the pre-
- Besides the random forest classifier, the authors made a Single Sample Predictor (SSP) method available in the
- classify our samples into molecular subtypes of colorectal cancer. The SPP method is less sensitive to differences
- In order to classify a sample to one of the four subtypes, the SSP method calculates similarity of the sample to
- a centroid of each subtype. If the sample shows acceptable level of similarity to exactly one of the centroids, the

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
