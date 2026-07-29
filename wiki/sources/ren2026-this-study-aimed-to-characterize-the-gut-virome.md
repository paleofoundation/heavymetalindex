---
type: source
raw_handle: RPMEHG_10-1186-s12967-025-06923-3
cite_key: ren2026-this-study-aimed-to-characterize-the-gut-virome
title: "This study aimed to characterize the gut virome in SCZ and identify potential viral biomarkers associated with the"
authors: ["https://doi.org/./s--- Medicine RESEARCH Open Access Metagenome-based characterization of the gut virome in patients with schizophrenia Yi Ren", "Pan Zhang", "Hailong Yu", "Shenghui Li", "Hongli Jiang"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1186/s12967-025-06923-3
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1186/s12967-025-06923-3"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/Autism spectrum disorder (ASD)/Virome Autism spectrum disorder (ASD)/s12967-025-06923-3.pdf"
raw_sha256: "109d5eacbc1275dd3beccba6677b2fac92e71ee7ad5a14cc87b9e064f6427c1b"
metals: [Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# Ren et al. 2026 - This study aimed to characterize the gut virome in SCZ and identify potential vi

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Ren et al. Journal of Translational Medicine (2025) 23:895 Journal of Translational
- Methods We analyzed fecal metagenomic data from 171 individuals (90 SCZ patients and 81 controls) using the
- Results We identified 171 vOTUs that differed significantly between SCZ patients and controls, with 124 enriched in
- virome features achieved an AUC of 93.2%, outperforming the bacterial model. External validation using ASD and PD
- cohorts yielded lower AUCs (61.2–67.0%), suggesting disease specificity. In follow-up samples collected after three
- Affiliated Hospital of Xi’an Jiaotong University, West Yanta Road 277,
- Jiaotong University, Xi’an 710004, China
- © The Author(s) 2025. Open Access This article is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
- Ren et al. Journal of Translational Medicine (2025) 23:895 Page 2 of 10
- dysfunction, and social withdrawal (1–3). Despite sig-
- nificant advances in pharmacological treatments (4), the Methods
- remain unclear (5). Increasing evidence suggests that To compare the gut virome between patients with SCZ
- alterations in the gut microbiome may play a crucial role and healthy controls, 90 untreated SCZ patients and 81
- ric conditions, including SCZ (6). The human gut micro- National GeneBank (CNGB) Nucleotide Sequence
- biome, which encompasses bacteria, fungi, viruses, and Archive (CNSA) under accession code ERP111403 (7).
- other microorganisms, is increasingly recognized as a key Additionally, 38 flow-up samples were collected from
- (6). While the role of the bacterial microbiome in SCZ quent assessments. Detailed medication information and
- has been the focus of numerous studies (7, 8), the contri- clinical metadata for these patients have been provided in
- bution of the gut virome remains underexplored. Supplementary Table S1.
- the gut microbiome and their implications for human sample were processed using fastp v0.23.0 (18), with the
- health. The virome is closely associated with the gut parameters ‘-w 8 -q 20 -u 30 -n 5 -y -Y 30–trim_poly_g–
- microbiota, and recent studies have highlighted its link to trim_poly_x -l 40’ to remove low-quality sequences. The
- various diseases, particularly inflammatory bowel disease remaining reads were aligned to the GRCh38 reference
- (IBD) (9), type 2 diabetes mellitus (10) and autoimmune genome using bowtie2 v2.5.0 (19), withing the settings
- diseases (11). Additionally, there is growing evidence that ‘-end-to-end–no-head -p 8–mm–fast’ to exclude human
- interactions with the immune system (12, 13). Notably, reads for further analysis.
- composition (14). Given these findings, it makes sense to 67,096 unique vOTUs. The cnGVC was constructed
- investigate the association between SCZ and the virome from more than 10,000 publicly available fecal metage-
- (VLP) metagenomic sequencing (15–17). By integrating identification, decontamination, and dereplication of
- we aimed to investigate the composition and diversity v1.0.1 (22). Taxonomic classification, host prediction, and
- controls using a large-scale metagenomic sequencing out as described in previous research (23).
- units (vOTUs) in the gut virome of 117 individuals (81 Taxonomic profiling of the gut virome
- HC and 90 SCZ), we sought to identify viral species that To generate taxonomic profiles of gut viral communities,
- the relationship between viral signatures and gut bacte- to the cnGVC using bowtie2 v2.5.0, with the param-
- healthy states. Through this exploration of the gut virome the same sequencing amount (1.2 million) to standardize
- Ren et al. Journal of Translational Medicine (2025) 23:895 Page 3 of 10
- abundance of each vOTU was calculated by determin- vOTUs with adjusted P-values < 0.05 were considered
- nal Genome (UHGG) database (24). For homology-based dances of SCZ-associated viral or bacterial markers using
- assignment, viral sequences were aligned to the UHGG the randomForest package (v4.7.1.1). Model performance
- parameters: -evalue 1e-2 -num_alignments 999,999 (25). tion. The area under the receiver operating characteris-
- A host was assigned when more than 30% of the viral tic curve (AUC) was computed using the roc function.
- sequence aligned to a host genome with > 90% nucleo- Feature importance was assessed using the importance

## Methods (brief)

- follow-up samples from SCZ patients to assess the impact of antipsychotic treatment on the gut virome.
- cohorts yielded lower AUCs (61.2–67.0%), suggesting disease specificity. In follow-up samples collected after three
- exact pathophysiological mechanisms underlying SCZ Sample information
- in the development and progression of various psychiat- healthy controls (HC) were collected from the China
- other microorganisms, is increasingly recognized as a key Additionally, 38 flow-up samples were collected from
- the gut microbiome and their implications for human sample were processed using fastp v0.23.0 (18), with the
- atric disorders, including SCZ. For example, patients To characterize the gut virome in metagenomic samples,
- In general, viruses with low abundance or that are reads from each metagenomic sample were assembled
- may be associated with SCZ. Furthermore, we examined clean reads from each metagenomic sample were mapped
- these microbial signatures in distinguishing SCZ from reads from all samples were randomly subsampled to
- the sequencing coverage across all samples. The relative Benjamini–Hochberg method (p.adjust, method = ”BH”).
- sequencing of 171 stool samples—comprising 90 SCZ
- Gut prokaryotic composition was taxonomically resolved high-quality clean reads per sample. These clean reads
- age of the gut virome across samples.
- multivariate analysis of variance (PERMANOVA) was samples (PERMANOVA, P > 0.05; Fig. 1E). Taxonomic
- number of vOTUs observed as the number of random samples increased. B, C and D Boxplot showing the observed vOTUs (B), the Shannon diversity
- level for all samples. The samples are plotted along the first and second principal coordinates (PCoA 1 and PCoA 2), with the variance explained by each
- of these coordinates indicated. Circles are drawn to cover the samples near the center of gravity for each group. F Bar chart depicting the composition of

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
