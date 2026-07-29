---
type: source
raw_handle: RPMEHG_10-1371-journal-pone-0257911
cite_key: authors2026-otic-exposure-while-assays-at-a-single-drug
title: "otic exposure. While assays at a single drug concentration are susceptible to noise and can"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1371/journal.pone.0257911
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1371/journal.pone.0257911"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/metal_chelation_T4/T4_8486102_An_improved_statistical_method_to_identify_chemical-genetic.pdf"
raw_sha256: "7449f60e732698c9a6a489158989a164f5cbd6113280725cfd7e786349e8b123"
metals: [Pb, Al]
ingredients: []
products: ["[[products/fish-marine-predatory]]", "[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-predatory, fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - otic exposure. While assays at a single drug concentration are susceptible to no

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Esha Dutta1, Michael A. DeJesus ID2, Nadine Ruecker3, Anisha Zaveri3, Eun-Ik Koh4,
- Christopher M. Sassetti4, Dirk Schnappinger3, Thomas R. Ioerger ID1*
- 1 Department of Computer Science, Texas A&M University, College Station, TX, United States of America,
- 2 Laboratory of Host-Pathogen Biology, The Rockefeller University, New York, NY, United States of America,
- 3 Department of Microbiology and Immunology, Weill Cornell Medical College, New York, NY, United States
- of America, 4 Department of Microbiology & Physiological Systems, University of Massachusetts Medical
- a1111111111 School, Worchester, MA, United States of America
- A, Koh E-I, Sassetti CM, et al. (2021) An improved
- doi.org/10.1371/journal.pone.0257911
- Accepted: September 13, 2021 method based on Linear Mixed Models, called CGA-LMM, for analyzing C-G data. The
- Copyright: © 2021 Dutta et al. This is an open
- author and source are credited. library do not interact with a given inhibitor). We applied the method to analyze 3 indepen-
- within the manuscript and its Supporting lar activity, and we identify known target genes or expected interactions for 7 out of 9 drugs
- PLOS ONE | https://doi.org/10.1371/journal.pone.0257911 October 1, 2021 1 / 24
- down or over-expression) of a gene (1). Such interactions could implicate the gene as a poten-
- system (tagging genes with C-terminal DAS peptides) (3, 4), to CRISPRi (transcriptional
- blockade) (5). Typically, a set of essential genes is selected, and each is knocked down individu-
- tifying genetic (gene-gene) interactions (e.g. epistasis, super-additivity of fitness effects (6, 7))
- and pharmacological (drug-drug) interactions (e.g. Chou-Tulaly Combination Index, (8)).
- In previous work, Johnson et al (9) described an approach to statistical analysis of C-G data
- PLOS ONE | https://doi.org/10.1371/journal.pone.0257911 October 1, 2021 2 / 24
- whether a coefficient in the model is significantly different from zero (10). However, the linear
- PLOS ONE | https://doi.org/10.1371/journal.pone.0257911 October 1, 2021 3 / 24
- and the vector of errors e � Nð0; s2err Þ are assumed to be normally-distributed with some vari-
- the concentration and a constant (1) representing the intercept. For control conditions (i.e.,
- where D ¼ s12 Σ is a scaled covariance matrix among the random effects.
- PLOS ONE | https://doi.org/10.1371/journal.pone.0257911 October 1, 2021 4 / 24
- mum likelihood estimates of B and U could be estimated as (12):
- cedure (13), as implemented in the lmer function in the lme4 package in R. The resulting
- (intercept) (14), and this decoupling has been shown to produce more reliable estimates of
- pare it to the rest of the population to look for outliers. This differs from a Wald test (10),
- statistics. Zrobust (also called Modified-Z; (16)) is similar to a Z-score for samples from a Nor-
- PLOS ONE | https://doi.org/10.1371/journal.pone.0257911 October 1, 2021 5 / 24
- approximately to the 25% and 75% quartiles (interquartile range). Iglewicz and Hoaglin sug-
- gest using |Zrobust|>3.5 as a cutoff to define outliers, which we adopt to identify genes in a
- generated a hypomorph library of ClpXP-mediated depletion mutants for 162 essential genes
- in M. tuberculosis H37Rv by allelic replacement, where the native copy of each gene was
- deleted, and a C-terminal DAS-tagged copy was integrated into the L5 phage attachment site
- in the M. tuberculosis genome, as described in (17). The sspB gene, needed for recognition of
- ClpXP protease, was also integrated at the L5 site and controlled by a “reverse” Tetracycline
- Single strain cultures were grown to mid-log phase for 7 days in Middlebrook 7H9 medium
- 500ng/ml ATC at 37C with 5% CO2. ATC was replenished on 4th day of preculture.

## Methods (brief)

- we want to model the population of slopes as a sample from a Normal distribution, with a cen-
- statistics. Zrobust (also called Modified-Z; (16)) is similar to a Z-score for samples from a Nor-
- ing counts for each gene in each sample, according to the nucleotide barcode assignments
- demultiplex the samples in each lane.
- morph library in each sample. The metadata for each sample includes drug, concentration,
- source in medium, sspB promoter strength, etc.). Genes or samples with less than an average
- that sample. This step is done to adjust for the different numbers of reads sequenced for each
- sample, represented as another matrix Ag,s, where the values range between 0 and 1 (e.g. frac-
- In the analysis of the data we collected from a hypomorph library with 162 essential genes,

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-predatory]]
- [[products/fish-marine-non-predatory]]
- [[metals/lead]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
