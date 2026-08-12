---
type: source
raw_handle: RPMEHG_10-1007-s12672-025-04207-2
cite_key: authors2026-chromium-particulate-matter-2-5-and-cigarette
title: "chromium, particulate matter 2.5, and cigarette"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1007/s12672-025-04207-2
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1007/s12672-025-04207-2"
raw_path: "/Volumes/HMI-Library/research-pulls/metal-deep-dive-hexavalent-chromium-cr-vi/_background/Chromium lung cancer/10-1007-s12672-025-04207-2.pdf"
raw_sha256: "27807a1eceb4e0ea77edaa35cd74bdb4eb56fa829c0d87129a0a1a6fb23a895d"
metals: [tHg, Cd, Ni, Cr]
ingredients: []
products: ["[[products/fish-marine-predatory]]"]
matrices: [fish-marine-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-08-03
---

# authors et al. 2026 - chromium, particulate matter 2.5, and cigarette

## Overview

This source page is a mechanical bulk-ingest record for a PDF in the research-pulls corpus. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- for 75% of deaths due to occupational exposure (4). Another study from the UK also
- was 14.5% (30). Hexavalent chromium (Cr(VI)) was identified as one of the occupa-
- Air pollution has always been a threat to public health. All over the world, 80% of the
- every year (16). About 85% of lung cancers were caused by smoking, with an additional
- (20). Through calculating the standard deviation of each gene, the top 25% of genes were
- c-means algorithm performed in R (Version 4.3.1, Mfuzz package, ​h​t​t​p​:​/​/​m​f​u​z​z​.​s​y​s​b​i​o​l​a​
- old was adjusted P-value (FDR) < 0.05 and |log2FC| >(mean(|log2FC|) + 2sd(|log2FC|)).
- tion matrix. According to the scale independence (Fig. 1A) and the mean connectivity
- K-means clustering algorithm, 8 was considered as the optimal number of subgroups
- ing K-means partitions based on gene expression profiles from GSE14383. B Clustering analysis of gene expression
- 4 Boffetta P, Autier P, Boniol M, Boyle P, Hill C, Aurengo A, et al. An estimate of cancers attributable to occupational exposures

## Methods (brief)

- 2.6 The single sample gene set enrichment analysis (ssGSEA)
- (MSigDB) in each sample by using GSVA R package (v1.34.0) (14). The threshold was
- GDNF, IL7R, ITGA4, KIT and PRKAA2 (Fig. 3E). Moreover, single sample gene set
- map below is the PI3K_AKT_MTOR_SIGNALING pathway score of each sample calculated by ssGSEA
- Based on the gene expression profiles of cigarette smoking exposure samples with differ-
- cells from small sample sizes, and the analysis results lack experimental validation and
- validation from patient samples. Based on multi-center data, the analysis results contain
- ssGSEA Single sample gene set enrichment analysis
- XYX and RWW designed the study. WXN collected data. XYX and LGQ carried out data analysis. XYX wrote the

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-predatory]]
- [[metals/mercury]]
- [[metals/cadmium]]
- [[metals/nickel]]
- [[metals/chromium]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no certification limit, status, or ratchet calculation is stated; any occurrence values remain descriptive only.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [880cf9722](https://github.com/paleofoundation/heavymetalindex/commit/880cf9722) | 2026-08-12 | minor | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sections added |
| [39e962871](https://github.com/paleofoundation/heavymetalindex/commit/39e962871) | 2026-08-03 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
