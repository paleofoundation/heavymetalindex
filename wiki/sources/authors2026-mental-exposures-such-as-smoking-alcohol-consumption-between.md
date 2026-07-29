---
type: source
raw_handle: RPMEHG_10-1186-s12967-025-06404-7
cite_key: authors2026-mental-exposures-such-as-smoking-alcohol-consumption-between
title: "mental exposures such as smoking, alcohol consumption, between the gut virome and colorectal adenomas."
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1186/s12967-025-06404-7
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1186/s12967-025-06404-7"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/colon cancer/Virome colon cancer/s12967-025-06404-7.pdf"
raw_sha256: "e8deb0af83575e9213a619f0dd508ef564d795b386eebe753088be4e2e4a5910"
metals: [Cd, Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - mental exposures such as smoking, alcohol consumption, between the gut virome an

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Zhang et al. Journal of Translational Medicine (2025) 23:597 Journal of
- Methods Based on the Metagenomic Gut Virus catalogue (MGV) containing 54,118 non-redundant gut viral
- sequencing data from 419 individuals with premalignant colorectal adenoma and 552 healthy controls. Furthermore,
- dae. At the viral operational taxonomic unit (vOTU) level, we identified 479 vOTU signatures showing significant
- forest models trained on gut viral and bacterial signatures demonstrated area under the curve (AUC) scores of 0.68,
- 0.82, and 0.76 for classifying healthy individuals versus patients with tubular adenomas, patients with sessile serrated
- lilu0505@aliyun.com
- © The Author(s) 2025. Open Access This article is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
- view a copy of this licence, visit http://​creat​iveco​mmons.​org/​licen​ses/​by-​nc-​nd/4.​0/.
- Zhang et al. Journal of Translational Medicine (2025) 23:597 Page 2 of 12
- representing a major cause of morbidity and mortality, disease (IBD) (22), autoimmune disorders (23, 24, 25),
- particularly in low- and middle-income countries (1, 2, and liver diseases (26). Typically, alterations in the gut
- 3). In 2018 alone, a staggering 1.85 million individuals virome of individuals with these diseases manifest as a
- globally were diagnosed with CRC (4). Projected on the reduction in diversity and changes in specific viral taxon-
- will surge to 3.2 million by the year 2040 (5). The genesis predictive models based on gut bacterial composition
- adenomas (SSA), play integral roles in this progression (6, large-scale dataset comprising fecal metagenomes from
- colorectal adenomas is vital, given their pivotal role in the with TA, and 36 patients with both conditions, along
- incremental journey toward malignancy. Factors contrib- with 552 healthy controls. The dataset was sourced from
- uting to the development of colorectal adenomas include a recently published study (14), providing a comprehen-
- obesity, and unhealthy dietary habits (8, 9, 10).
- the gut bacteriome and colorectal cancer and adenoma prising samples from 419 adenoma patients and 522
- (11, 12, 13, 14). Typical findings include a decrease in controls, was obtained from the NCBI Sequence Read
- microbial diversity in cancer and adenoma patients, Archive (SRA) with accession code PRJNA784939 (14).
- pathogens, such as Fusobacterium nucleatum (15, 16). each metagenome using fastp with the following param-
- This pathogen has been demonstrated to be causative in eters “-l 90 -q 20 u 30 -y --trim_poly_g” (27). The human
- animal models of CRC carcinogenesis and progression reads were then removed by aligning against the GRCh38
- (17, 18). Importantly, recent meta-analysis studies have human reference genome using Bowtie 2 with default
- identified a high consistency of CRC bacterial signatures parameters (28). The reads that did not map to the
- choline degradation (16, 19). However, despite the exten- subsequent analyses.
- mas is relatively limited (20). A representative study by Analyses of the gut virome
- pared to healthy controls, indicating that viral signatures Metagenomic Gut Virus catalogue (MGV) (29), which
- contribute to distinguishing cancer cases (21). Nonethe- is constructed from over 11,000 publicly available fecal
- face challenges, including sample size limitations, diverse MGV, comprising nearly 190,000 viral genomes, was
- analysis methods, and the subdivision of disease subtypes grouped into 54,118 viral operational taxonomic units
- Zhang et al. Journal of Translational Medicine (2025) 23:597 Page 3 of 12
- threshold of 95%. Total clean reads of all samples were diversity function with the options index = "shannon"
- (20 million), and then were mapped to 54,118 vOTUs tis distances between samples were calculated using the
- using Bowtie 2 with default parameters. The relative vegdist function. Distance-based redundancy analysis
- using Prodigal with the option “-p meta” (30). Taxo- test function from the R stats package. The resulting P
- through protein sequence alignment against a compre- option “method = BH.” A vOTU with a P value of < 0.05
- Virus-Host DB (31) and viral proteins from crAss-like Additionally, the same statistical testing methods and
- (32), Flandersviridae, Quimbyviridae, and Gratiaviridae filtering criteria were applied to identify disease-associ-

## Methods (brief)

- the gut bacteriome and colorectal cancer and adenoma prising samples from 419 adenoma patients and 522
- in the gut virome of cancer and adenoma patients com- the remaining data from all samples were aligned to the
- face challenges, including sample size limitations, diverse MGV, comprising nearly 190,000 viral genomes, was
- threshold of 95%. Total clean reads of all samples were diversity function with the options index = "shannon"
- randomly subsampled to the same sequencing amount and index = "simpson", respectively (38). The Bray–Cur-
- (20 million), and then were mapped to 54,118 vOTUs tis distances between samples were calculated using the
- abundances of taxa identified in the sample. The analy- Gut viral compositions of all samples were generated
- each fecal sample to calculate the relative abundance of healthy controls, accounting for 10.6% (± 2.2%) of their
- ative abundance greater than 0. The Shannon and Simp- all samples, while Microviridae viruses demonstrated
- of vOTUs in all samples tends to saturate at the current to unknown viral families (Fig. 2E). This was consistent
- Number of mapped reads Number of samples on th on th on th on th
- of viral operational taxonomic units (vOTUs) as a function of the number of reads for each sample. B Rarefaction analysis showing an increase
- in the number of vOTUs observed as the number of random samples increased. C Boxplot showing the comparison of alpha diversity indexes
- D Distance-based redundancy analysis (dbRDA) of the Bray–Curtis distance of the gut virome of all samples at the vOTU level. Samples are
- is shown. Upper and left boxplots show the sample scores in CAP1 and CAP2, respectively. E Bar plot showing the gut viral composition of fecal
- dominant families in all fecal samples, with no signifi- Siphoviridae (corresponding to 27.5% of the 131 SSA-
- noma and healthy controls. These findings suggest that to population heterogeneity; therefore, a larger sample
- samples obtained from individuals exhibiting a healthy this study focused solely on the association between

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/cadmium]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
