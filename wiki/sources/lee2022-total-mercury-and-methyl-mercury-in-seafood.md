---
type: source
raw_handle: RPMEHG_10-12729-jbtr-2022-23-1-7
cite_key: lee2022-total-mercury-and-methyl-mercury-in-seafood
title: "Quantitative analysis and risk assessment on total mercury and methyl mercury in seafood distributed in Daejeon"
authors: [Lee S, Oh S, Shin S, Kim D, Lee J, Kang H, Jo G]
year: 2022
publication: "Journal of Biomedical Translational Research"
doi: 10.12729/jbtr.2022.23.1.7
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.12729/jbtr.2022.23.1.7"
raw_path: "/Volumes/HMI-Library/research-pulls/metal-deep-dive-mercury-hg/Fish marine non-predatory sardines anchovies salmon cod/JECFA methylmercury/quantitative-analysis-and-risk-assessment-on-total-mercury-and-methyl-mercury-in-seafood-d.pdf"
raw_sha256: "eda40784d7f1119d424bfa6f79fe3c76a87c029ffa49dd577d92685492769b86"
metals: [MeHg, tHg]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]", "[[products/shellfish]]"]
matrices: [fish-marine-non-predatory, shellfish]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-08-03
---

# Lee et al. 2022 - total mercury and methyl mercury in seafood

## Overview

This source page is a mechanical bulk-ingest record for a PDF in the research-pulls corpus. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- 34142, Korea seafood (16 species, n = 97) commonly consumed in Daejeon, using a gold amalgamation
- Tel: +82-42-270-6806 method. The average concentration (Hg/MeHg mean ± S.D. (minimum–maximun) mg/kg) of
- by-nc/4.0/) which permits unrestricted no sample that exceeded the maximum residual limit. The total %provisional tolerable weekly
- non-commercial use, distribution, and intake (%PTWI) value of MeHg for all of the samples was 3.76%, compared with the JECFA’s
- 분석에 사용된 수은 표준원액은 Mercury standard solution(1,000 mg/L, Kanto, Tokyo,
- DMA-80, Milestone, Bergamo, Italy)에 주입하여 분석하였다. 기기분석 조건은 Table 1과
- Table 1. Analytical conditions of DMA-80
- CRM에서 제시한 인증값(Hg-0.128 ± 0.017 mg/kg)과 비교하여 구하였으며, 메틸수은의
- Table 2. Parameters of Hg and MeHg analysis by DMA-80
- Table 3. Analytical conditions of GC-NPD (unit, mg/kg)
- Table 4. Summary of Hg and MeHg concentrations in seafood (unit, mg/kg)
- Table 5. Estimated weekly intake of MeHg in each species
- Daily intake MeHg (mean) EWI1) %PTWI
- Estimated weekly intake = (Mean MeHg in each food × Daily food intake × 7) / 61.6 (b.w.).
- 9. National Institute of Agricultural Sciences. 9th revision Korean food composition table
- Available from: https://database.ich.org/sites/default/files/Q2%28R1%29%20Guideline.pdf
- https://www.khidi.or.kr/kps/dhraStat/result10?menuId=MENU01663&gubun=ageall&ye

## Methods (brief)

- total Hg and MeHg in the samples was as follows; Fish 0.038 ± 0.058 (0.004 – 0.272) / 0.028
- by-nc/4.0/) which permits unrestricted no sample that exceeded the maximum residual limit. The total %provisional tolerable weekly
- non-commercial use, distribution, and intake (%PTWI) value of MeHg for all of the samples was 3.76%, compared with the JECFA’s
- 하였다. 균질화한 시료를 약 0.03 g을 자동수은분석기(Automatic Mercury analyzer, Model
- DMA-80, Milestone, Bergamo, Italy)에 주입하여 분석하였다. 기기분석 조건은 Table 1과
- 범위를 확인하였으며, 각각의 검출한계(LOD, limit of detection)와 정량한계(LOQ, limit of
- Table 1. Analytical conditions of DMA-80
- 검출한계(limit of detection, LOD) = 3.3δ × S–1
- 정량한계(limit of quantification, LOQ) = 10δ × S–1
- Table 2. Parameters of Hg and MeHg analysis by DMA-80
- LOD (μg/kg) LOQ (μg/kg) Recovery (mean ± RSD) (%)
- LOD, limit of detection, LOQ, limit of quantitation; RSD, relative standard deviation.
- Sample N Mean ± S.D. Mean ± S.D.
- N, number of sample; D, dried.
- Group Sample name N %MeHg
- board/read.do?menuId=286&boardMasterId=1&boardCategoryId=39&boardId=389860

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[products/shellfish]]
- [[metals/mercury]]
- [[metals/mercury]]

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
| [621be2545](https://github.com/paleofoundation/heavymetalindex/commit/621be2545) | 2026-07-29 | correction | 5 sections removed; narrative text revised |
| [e5b540f81](https://github.com/paleofoundation/heavymetalindex/commit/e5b540f81) | 2026-07-29 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
