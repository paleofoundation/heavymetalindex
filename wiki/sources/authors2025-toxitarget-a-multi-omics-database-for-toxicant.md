---
type: source
raw_handle: RPMEHG_10-1038-s41467-026-73695-9
cite_key: authors2025-toxitarget-a-multi-omics-database-for-toxicant
title: "ToxiTaRGET: a multi-omics database for toxicant-responsive molecular targets"
authors: [Kumar R, Fu T, Kuntala PK, Miao B, Fu S, Li D, "TaRGET II Consortium", Tyson FL, Bartolomei MS, Walker CL, Wang T, Zhang BA]
year: 2025
publication: "Nature Communications"
doi: 10.1038/s41467-026-73695-9
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1038/s41467-026-73695-9"
raw_path: "/Volumes/HMI-Library/research-pulls/metal-deep-dive-inorganic-arsenic-ias/_background/Arsenic DNA methylation/10-1038-s41467-026-73695-9.pdf"
raw_sha256: "9cdda740f97ba2542944d11e63a1d922468831d3e68c72d9ea6e263e7bbb1bfc"
metals: [Pb, tAs]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-08-03
---

# authors et al. 2025 - ToxiTaRGET: a multi-omics database for toxicant-

## Overview

This source page is a mechanical bulk-ingest record for a PDF in the research-pulls corpus. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- toxicants such as arsenic (As, 10 ppb), lead (Pb, 32 ppm), endocrine-disrupting chemicals
- including bisphenol A (BPA, 10mg/kg and 10µg/kg), tributyltin (TBT, 0.5 mg/kg), and di-2-
- ethylhexyl phthalate (DEHP, 25 mg/kg), as well as dioxin (TCDD, 1 ug/kg) and fine particulate
- well covered across all early-life exposures, accounting for 49% of the total TaRGET II dataset.
- Laboratory, Bar Harbor, ME) and wild-type non-agouti (a/a) mice (total n=531). All procedures
- methylation level difference of at least 0.1 (a 10% absolute difference in methylation between
- 9. Lagunas-Rangel, F.A., Liu, W. & Schioth, H.B. Can Exposure to Environmental Pollutants Be
- 10. Lagunas-Rangel, F.A. et al. Role of the Synergistic Interactions of Environmental Pollutants in the
- TCDD Heart 35% 27% 21% 62%

## Methods (brief)

- II) Consortium generated a landmark resource comprising 3,607 multi-omics datasets from
- contained 243,271 data series, representing 7.5 million biological samples. Such a vast dataset
- normal and exposure samples were calculated by featureCounts51 (v1.5.1) within the pipeline
- regions of OCRs across all exposure and control samples were generated with Index
- Differentially expressed genes (DEGs) between control and exposure samples under varying
- read count data were used to identify the DEGs between the exposed and control samples.
- Differentially accessible regions (DARs) between control and exposure samples were identified
- Differential methylation regions (DMRs) between control and exposure samples were identified
- calculated in both control samples and exposed samples, and then a Chi-squared test was
- 26. Roadmap Epigenomics, C. et al. Integrative analysis of 111 reference human epigenomes.
- control genes or samples. Nat Biotechnol 32, 896–902 (2014).

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/lead]]
- [[metals/arsenic]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sections added |
| [d5eece090](https://github.com/paleofoundation/heavymetalindex/commit/d5eece090) | 2026-08-03 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
