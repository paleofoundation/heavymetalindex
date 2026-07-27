---
type: source
raw_handle: FM_7763862
cite_key: abstract2020-content-dietary-exposure-toxic
title: Content and Dietary Exposure Assessment of Toxic Elements in Infant Formulas from the Chinese Market
authors:
  - Chuanyou Su
  - Nan Zheng
  - Yanan Gao
  - Shengnan Huang
  - Xue Yang
  - Ziwei Wang
  - Hongjian Yang
  - Jiaqi Wang
year: 2020
publication: Foods
volume: 9
issue: 12
article: 1839
doi: 10.3390/foods9121839
published: 2020-12-10
source_type: peer_reviewed_journal
evidence_tier: A
license: CC-BY-4.0
raw_path: raw/markdown/FM_7763862
metals:
  - Pb
  - Cd
  - tAs
  - Cr
ingredients:
  - dairy
  - infant-formula
products:
  - infant-formula-powder-non-soy
  - infant-formula-powder-soy
matrices:
  - infant-formula-powder
jurisdictions:
  - CN
  - EU
  - CAC
sample_n: 93
sample_population: infant formula products purchased from Beijing China market; stratified by infant-feeding stage (stage 1–4)
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
ingest_method: marker_conversion
created_by: claude-haiku-4-5-20251001
---

## Key Numbers

| Metal | N Samples | Range (µg/kg) | Mean (µg/kg) | Std Dev | Domestic Mean | Imported Mean |
|-------|-----------|---------------|--------------|---------|---------------|---------------|
| Pb | 93 | 0.36–5.57 | 2.07 | 1.59 | 1.48 | 2.37 |
| Cd | 93 | 0.13–3.58 | 1.21 | 0.94 | 0.80 | 1.43 |
| tAs | 93 | 0.89–7.87 | 3.53 | 2.08 | 2.95 | 3.86 |
| Cr | 93 | 2.51–83.80 | 32.95 | 25.41 | 24.07 | 37.81 |

### Regulatory Comparison

| Jurisdiction | Analyte | Limit | Regulatory Body | Chinese Formulas Median | Exceedance |
|--------------|---------|-------|-----------------|------------------------|------------|
| China | Pb | 150 µg/kg | National standard GB 10765 | 2.07 µg/kg | None |
| EU | Pb | 50 µg/kg | Commission Directive 2006/141/EC | 2.07 µg/kg | None |
| CAC | Pb | 10 µg/kg | Codex Alimentarius | 2.07 µg/kg | None |
| EU | Cd | 10 µg/kg | Commission Directive 2006/141/EC | 1.21 µg/kg | None |

### Risk Assessment: Target Hazard Quotient (THQ)

| Metal | THQ Range | Max THQ | Acceptable Threshold | Status |
|-------|-----------|---------|----------------------|--------|
| Pb | 0.00–0.45 | 0.45 | <1.0 | Safe |
| Cd | 0.00–0.38 | 0.38 | <1.0 | Safe |
| tAs | 0.00–0.28 | 0.28 | <1.0 | Safe |
| Cr | 0.00–0.22 | 0.22 | <1.0 | Safe |

Hazard Index (HI, sum of all THQs) ranged 0.00–0.98; all <1.0, indicating no non-carcinogenic risk from combined chronic exposure.

## Methods

Study enrolled 93 infant formula samples purchased from markets in Beijing, China: 27 domestic products and 66 imported formulas. Samples stratified by feeding stage (stage 1 for 0–6 months: n=28; stage 2 for 6–12 months: n=27; stage 3 for 1–3 years: n=24; stage 4 for 3–6 years: n=14). Analysis by inductively coupled plasma mass spectrometry (ICP-MS) following sample digestion in high-purity nitric acid (microwave digestion, 180°C, 60 minutes).

Dietary exposure quantified as estimated daily intake (EDI) computed from measured metal concentration × average daily consumption for each feeding stage (per Chinese dietary guidelines). Risk assessment applied Target Hazard Quotient (THQ) methodology: THQ = (EDI × exposure frequency × exposure duration) / (reference dose × average body weight). Carcinogenic risk not addressed (carcinogenicity classification of these metals not standardized in Chinese regulatory framework at publication date). Statistical analysis included descriptive statistics, comparison of domestic vs. imported formulas (t-test), and stage-stratified analysis.

## Implications for Heavy Metal Index

This source documents measured total-arsenic (tAs) occurrence and chromium (Cr) occurrence in a major feeding-stage-stratified survey of both domestic and imported infant formulas sold in China. All measured values fall well below applicable regulatory limits (China, EU, CAC). Risk assessment via THQ methodology found no non-carcinogenic concern from chronic dietary exposure to measured metals at observed concentrations. Study does not distinguish inorganic arsenic (iAs) from total arsenic; values reported as tAs and should be annotated as such in contamination profiles.

Cr speciation (total Cr vs. Cr-VI) not determined; measured Cr should be stored as total chromium.

## Wiki pages that should link this source

- `products/infant-formula-powder-non-soy.md`
- `products/infant-formula-powder-soy.md`
- `ingredients/infant-formula.md`
- `metals/lead.md`
- `metals/cadmium.md`
- `metals/arsenic.md`
- `metals/chromium.md`
- `testing/icp-ms.md`

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [8fca52098](https://github.com/paleofoundation/heavymetalindex/commit/8fca52098) | 2026-05-19 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
