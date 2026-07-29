---
type: source
raw_handle: RPMEHG_10-3389-fgene-2021-617505
cite_key: authors2026-component-is-also-multifactorial-ranging-from-toxicological
title: "component is also multifactorial, ranging from toxicological"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.3389/fgene.2021.617505
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.3389/fgene.2021.617505"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/colon cancer/Microbiome composition colon cancer/Gene-microbiome co-expression networks in colon cancer.pdf"
raw_sha256: "15eb243919798e376ccbd03aa48307836bab3445fba2a07c715e9628bc952f00"
metals: [Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - component is also multifactorial, ranging from toxicological

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Computational Genomics Division, National Institute of Genomic Medicine, Mexico City, Mexico, 2 Centro de Ciencias de la
- Complejidad, Universidad Nacional Autónoma de México, Mexico City, Mexico, 3 Conacyt Research Chairs, National Council
- Accepted: 22 January 2021 Keywords: colorectal cancer, microbiome, tumor progression, probabilistic multilayer networks, information
- Networks in Colon Cancer. (Bray et al., 2018). Its incidence and mortality are rapidly rising in developing countries, possibly
- doi: 10.3389/fgene.2021.617505 actually further increase according to recent studies (Arnold et al., 2017).
- components (Raskov et al., 2020) whereas the environmental
- exposure (Fernández-Martínez et al., 2020), physical activity
- (Friedenreich et al., 2020), dietary habits and more. A more
- toxins (Fiorentini et al., 2020), altered microbiome composition
- (Xu et al., 2020), and the non-rational use of antibiotics (Simin
- et al., 2020). Among these, microbome-host interactions are
- (Yang et al., 2020). For instance, experimental evidence has been
- involved in colon cancer progression (Yu et al., 2020). It
- biology approach (Peñalver Bernabé et al., 2018).
- Jáuregui et al., 2018, 2019).
- FIGURE 1 | Network analysis pipeline.
- in associated biological functions. This work hence aims to characterization and functional enrichment analysis. In Figure 1,
- by Poore et al. (2020), for the same 269 samples. We classified using STAR (Dobin et al., 2012), and reads mapped to each gene
- these samples into early (n = 150) and late (n = 119) colon cancer are counted using HT-SEQ (Anders et al., 2014); Read counts
- Due to some samples being discarded from the microbiome measured microorganisms (N = 4, 450) and protein-coding
- quantification pipeline by the original authors (Poore et al., genes (N = 16, 593), even if they do not participate in any
- 64 late stage samples (see Supplementary File 1 for the TCGA threshold was selected based on previous analyses of multi-
- identificators of the used samples). omic bipartite networks (de Anda-Jáuregui et al., 2018, 2019);
- We used the public dataset generated in Poore et al. (2020) the structure and composition of these networks will not
- (WGS) data and analyzed the nearly 0.9% of total sequencing We characterized the topology of each of the generated using
- reads were classified as non-human and assigned to bacteria, a combination of the igraph (Csardi and Nepusz, 2006) in R
- archaea, or viruses at the genus level using Kraken (Wood and and networkx (Hagberg et al., 2008) in Python. Additionally,
- Salzberg, 2014); which matches k-mers to taxa in a reference we used Cytoscape (Shannon, 2003) to generate network
- batch effects, discrete taxonomical counts are converted to log- redundancy coefficients (Latapy et al., 2008). Comparisons
- counts per million per sample using Voom (Law et al., 2014), between appropriate distributions were evaluated using the
- model SourceTracker2 (Knights et al., 2011). Based on their Microorganism Gene Neighborhoods
- Quantification database) using the WebgestaltR (Liao et al., 2019) package.
- set, and a false discovery rate (FDR) threshold of 0.05. It should
- (see Figure 2). We further used natural language processing
- Jáuregui et al., 2016; He et al., 2017). It has also been previously
- tools from the tm package in R (Meyer et al., 2008) to compare
- (de Anda-Jáuregui et al., 2018, 2019). In this work, we calculated
- above the 99.5 quantile to be considered as links on a bipartite
- belonging to the same set (Barabási et al., 2016). For mutual and Late Colon Cancer
- frequency method (Meyer 2008), which assigns each observation some possible ways in which the presence of microorganisms
- changes in the projection (Latapy et al., 2008).
- FIGURE 2 | Enrichment of host biological functions associated to of “triangles” (technically “closed triplets”) formed by links

## Methods (brief)

- For this work, we collected gene expression data from TCGA, at https://docs.gdc.cancer.gov/Data/Bioinformatics_Pipelines/
- by Poore et al. (2020), for the same 269 samples. We classified using STAR (Dobin et al., 2012), and reads mapped to each gene
- these samples into early (n = 150) and late (n = 119) colon cancer are counted using HT-SEQ (Anders et al., 2014); Read counts
- Based on the available metadata, samples with tumor stages I the empirical probability distribution. Both of these calculations
- and II were grouped as early colon cancer, while samples with were performed using the infotheo package for R.
- Due to some samples being discarded from the microbiome measured microorganisms (N = 4, 450) and protein-coding
- 64 late stage samples (see Supplementary File 1 for the TCGA threshold was selected based on previous analyses of multi-
- identificators of the used samples). omic bipartite networks (de Anda-Jáuregui et al., 2018, 2019);
- abundance in TCGA tumor samples via a novel bioinformatics
- database. Normalization was performed considering sample visualizations. In this work, we focused mainly on centrality
- number within a cancer type and sample type. To correct for measures including degree, bipartite clustering coefficient, and
- counts per million per sample using Voom (Law et al., 2014), between appropriate distributions were evaluated using the
- sample size is adequate for probabilistic network reconstruction
- urine and tissue samples. Sci. Rep. 10, 1–10. doi: 10.1038/s41598-020- Tan, P. J., Lau, B. F., Krishnasamy, G., Ng, M. F., Husin, L. S., Ruslan, N.,

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
