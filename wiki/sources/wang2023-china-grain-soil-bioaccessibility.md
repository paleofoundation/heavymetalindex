---
type: source
cite_key: wang2023-china-grain-soil-bioaccessibility
title: "Heavy metal(loid)s in agricultural soil from main grain production regions of China: Bioaccessibility and health risks to humans"
authors: [Wang CC, Zhang QC, Kang SG, Li MY, Zhang MY, Xu WM, Xiang P, Ma LQ]
year: 2023
publication: "Science of the Total Environment"
doi: "10.1016/j.scitotenv.2022.159819"
source_type: peer-reviewed
evidence_tier: A
license: "cc-by-nc-nd"
raw_path: raw/studies/wang2023-china-grain-soil-bioaccessibility.pdf
sha256: a441452f8411fd838a2bf32044d4d866f06fa18730177290d2726d8747362b92
access_date: 2026-05-12
access_url: "https://doi.org/10.1016/j.scitotenv.2022.159819"
metals: [tAs, Cd, Cr, Cu, Ni, Pb, Zn, tHg]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [agricultural-soil, farmland-soil]
jurisdictions: [CN]
sample_n: 509
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Wang et al. 2023 — Heavy metal(loid)s in Chinese grain-production agricultural soils: bioaccessibility and health risks

## Overview

This is a systematic meta-analysis of 509 agricultural soil datasets from 13 Chinese grain-producing provinces (Heilongjiang, Henan, Shandong, Anhui, Jilin, Hebei, Jiangsu, Inner Mongolia, Sichuan, Hunan, Hubei, Liaoning, and Jiangxi), integrating published data from 2000–2022. The paper's primary contribution is applying bioaccessibility correction factors to soil metal concentrations to derive more accurate human health risk estimates for incidental soil ingestion — the dominant non-dietary exposure pathway for Chinese grain-region agricultural workers and children. Cadmium emerged as the priority pollutant: mean soil Cd was 0.47 mg/kg (versus Chinese background of 0.097 mg/kg), with a geo-accumulation index up to 5.24, and children faced higher carcinogenic risk than adults from Cd ingestion across all regions.

## Key numbers

Summary statistics across 269 compiled farmland soil samples (Table 2, mg/kg):
- As: median 8.83, mean 9.68, max 38.70 (Chinese background 11.20)
- Cd: median 0.18, mean 0.47, max 10.50 (Chinese background 0.097)
- Cr: median 61.20, mean 56.82, max 135.00 (background 61.00)
- Cu: median 24.71, mean 26.99, max 75.72 (background 22.60)
- Ni: median 29.00, mean 29.87, max 74.30 (background 26.90)
- Pb: median 25.84, mean 30.60, max 145.99 (background 26.00)
- Zn: median 78.40, mean 88.18, max 295.30 (background 74.20)
- Hg: median 0.08, mean 0.13, max 1.60 (background 0.065)

Bioaccessibility (SBRC gastric phase): Cd 57.37% (highest), Cr 17.51% (lowest), Pb and Cu intermediate
29.2% of soils exceeded GB 15618-2018 Soil Environmental Quality Control Standard for Cd
Cd geo-accumulation index range: 0 to 5.24 (indicating unpolluted to extremely polluted across sites)

## Methods (brief)

Literature meta-analysis; data extracted from Web of Science, China National Knowledge Internet, and PubMed (2000–2022 search). Bioaccessibility data from PBET, SBRC, UBM, and IVG in vitro assays, selecting SBRC gastric phase (SBRC-GP) for As and PBET for Cd, Cr, Cu, Ni, Zn, Pb. Monte Carlo simulation (Oracle Crystal Ball, 10,000 iterations) for uncertainty quantification of health risk.

## Limitations

Soil data, not food grain data; dietary exposure via grain ingestion is a separate pathway. Bioaccessibility estimates span multiple in vitro methods with known inter-method variability (CVs 33.3–213% cited). Data density is highest in Jiangsu province (54 samples) and lower in other regions. This paper does not report metal concentrations in grain itself.

## Implications

- Certification: Establishes the soil baseline for Chinese grain-producing provinces. Cadmium soil contamination is severe (mean 0.47 mg/kg vs. background 0.097 mg/kg) across these provinces, which produce 75% of China's grain output. This is the upstream driver of Cd in Chinese-origin rice, wheat, and maize.
- Courses: Key reference for soil-to-crop transfer pathway discussion; illustrates why bioaccessibility-based risk assessment produces different results than total-concentration models.
- App: Contextualises elevated Cd risk in Chinese-origin rice and grain ingredients. Soil data does not directly translate to grain ppb values; use in conjunction with grain-level studies.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[metals/arsenic]]
- [[supply-chain/soil-contamination]]
- [[ingredients/rice]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [96966651f](https://github.com/paleofoundation/heavymetalindex/commit/96966651f) | 2026-05-12 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
