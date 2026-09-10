---
type: source
raw_handle: RPMEHG_10-1038-s41598-024-82297-8
cite_key: noval2024-of-hexavalent-chromium
title: "of hexavalent chromium"
authors: ["OPEN Spatial-temporal analysis of groundwater well features from neural network prediction of hexavalent chromium concentration Alejandro J. De La Noval", "Himanshu Upadhyay", "Leonel Lagos", "Jayesh Soni & Nagarajan Prabakar"]
year: 2024
publication: "Peer-reviewed article"
doi: 10.1038/s41598-024-82297-8
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1038/s41598-024-82297-8"
raw_path: "/Volumes/HMI-Library/research-pulls/metal-deep-dive-hexavalent-chromium-cr-vi/_background/Hexavalent chromium groundwater/10-1038-s41598-024-82297-8.pdf"
raw_sha256: "ffa71cd379736205a9b021657e527ea11b199dd6f0b42c01654d55556c008a77"
metals: [Cr]
ingredients: []
products: ["[[products/fish-marine-predatory]]", "[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-predatory, fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-08-03
---

# Noval et al. 2024 - of hexavalent chromium

## Overview

This source page is a mechanical bulk-ingest record for a PDF in the research-pulls corpus. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- concentration to 10 µg/L, the Ambient Water Quality Standard for CrVI in Washington, to protect aquatic life in
- A training set is determined from a sample-shuffled 80% of the given data, with the other 20% reserved for
- variables are passed through the sigmoid σ activation function that maps them to a range between 0 and 1, hence
- with the most meaningful time steps as deemed by the decoder yt−1 as shown Equation (12).
- smallest errors of 0.51 and 0.71 for MSE and RMSE, respectively, which means it is the most accurate and reliable
- the other hand, the POLY SVM has a significantly negative R2 score of -73.74, meaning it does not suffice for the
- Figure 14 shows the heatmap of pairwise well distances that assess spatial proximities and relationships. Table
- approximated by taking the mean explanation values of the wells, as demonstrated in Fig. 15. Thus, the top five
- 199-D8-94, and 199-D2-10. These wells are spatially visualized with links to the target well in Fig. 16, with Table
- The attention scores in Table 2 provide insight into each well’s influence on CrVI concentration levels at
- Fig. 16. Explanations on target well 199-D5-127 using the mean attentions of all the time steps in the testing
- Table 2. Top average attention scores with respect to well 199-D5-127 on testing year. References Fig. 16. The
- Figure 20 spatially visualizes the driving wells at November 5th, with attention values displayed in Table
- explanation value change from the previous time step, with Table 4 displaying respective values. As expected,
- Table 5 displays the respective delta values. Now, we can compare Table 4 and Table 5 to find the set of matching
- are essential for training a generalized network (preventing over-fitting)30. Varying performance means differing
- Table 4. Most positive (head) and negative (tail) attention deltas with respect to well 199-D5-127 on
- Table 5. Most positive (head) and negative (tail) contribution deltas with respect to well 199-D5-127 on
- instantaneous impact (for November 5th) as indicated by the explanation values here and in Table 4.
- Hanford site’s 100-HRD area, which is necessary to maintain the 10 µg/L water quality standard for CrVI.

## Methods (brief)

- telemetry sensors, but contaminant values are gathered by the sample after laboratory analysis2. The data is
- reducing the sample size. As a result, balancing the time range of the data, the number of wells included, and the
- After imputation, the data is scaled to unit variance with standard scaling using the mean training samples
- samples have a stride of 1 day through the time series.
- A training set is determined from a sample-shuffled 80% of the given data, with the other 20% reserved for
- testing validation. The training data consists of samples from 2015 through 2018, with 2019 being the inspected
- • xi+j is the CrVI sample sequence at position i+j,
- represents the weights of neurons within their residing gate with b as biases. x is a CrVI value within a sample
- and T is the total amount of time steps in CrVI sample sequence.
- in ′the encoder, the decoder makes its final sample prediction by taking yt−1
- a given sample, unlike the feature importance scores.
- CrVI with even better performance28,29. However, these algorithms take in samples irrespective of time.
- is similar across most sample sequences. The time steps are most important as they approach the time step
- random weight initialization of building neural networks and the shuffling of samples in the training set. These
- from inconsistency across model instances, emphasizing the impact of random weight initialization and sample

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-predatory]]
- [[products/fish-marine-non-predatory]]
- [[metals/chromium]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing the linked reference record pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 2 sections added |
| [39e962871a](https://github.com/paleofoundation/heavymetalindex/commit/39e962871a) | 2026-08-03 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
