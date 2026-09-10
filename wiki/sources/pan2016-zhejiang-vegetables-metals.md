---
type: source
raw_handle: MFK_pan2016
cite_key: pan2016-zhejiang-vegetables-metals
title: "Levels and potential health risk of heavy metals in marketed vegetables in Zhejiang, China"
authors: [Pan X-D, Wu P-G, Jiang X-G]
year: 2016
publication: "Scientific Reports"
doi: "10.1038/srep20317"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/pan2016.pdf"
raw_sha256: "7b6124e5696e26f57ea801fe351954e21fedc646d5133169a1ff33cd82858ac5"
access_url: "https://doi.org/10.1038/srep20317"
metals: [tAs, Cd, Cr, tHg, Ni, Pb]
ingredients: ["[[ingredients/vegetables]]", "[[ingredients/leafy-vegetables]]", "[[ingredients/root-vegetables]]", "[[ingredients/non-root-vegetables]]", "[[ingredients/legumes]]"]
products: ["[[products/leafy-vegetables-other]]", "[[products/non-root-vegetables]]", "[[products/root-tuber-vegetables]]", "[[products/legumes-pulses-other]]"]
matrices: [fresh-vegetables, fresh-weight]
jurisdictions: [CN]
near_duplicates: []
sample_n: 5785
sample_population: "Five thousand seven hundred eighty-five vegetable samples of 28 species collected from Zhejiang province, China, from March to October 2014."
updated: 2026-06-08
---

# Pan et al. 2016 — Heavy metals in marketed vegetables from Zhejiang

## Overview

Pan and colleagues measured As, Cd, Cr, Hg, Ni, and Pb in 5,785 marketed vegetable samples representing 28 species from Zhejiang province, China. The paper reports overall mean, P97.5, range, and exceedance counts in `mg/kg, fresh weight`, plus selected species-level highlights from the supplementary table. Arsenic and mercury are reported as total As and total Hg only; no inorganic arsenic or methylmercury speciation is provided.

## Key numbers

Table 1 reports concentrations of heavy metals in vegetables from Zhejiang province in `mg/kg, fresh weight`:

| Element | n | Mean | P97.5 | Range | MAC | No. of > MAC |
| --- | ---: | ---: | ---: | --- | ---: | ---: |
| tAs | 1115 | 0.013 | 0.060 | < LOD-0.331 | 0.7 | 0 |
| Cd | 1196 | 0.017 | 0.081 | < LOD-0.340 | 0.2 | 3 |
| Cr | 769 | 0.057 | 0.250 | < LOD-0.463 | 0.5 | 0 |
| tHg | 999 | 0.0020 | 0.0081 | < LOD-0.0159 | 0.02 | 0 |
| Ni | 768 | 0.094 | 0.410 | < LOD-1.900 | - | - |
| Pb | 1155 | 0.034 | 0.170 | < LOD-0.661 | 0.2 | 18 |

The paper reports that Cd exceeded the Chinese maximum allowable concentration in 0.25% of samples and Pb exceeded it in 1.56% of samples. Target analytes below LOD were treated as one-half of LOD for mean calculations.

Selected species-level highlights reported in the Results text:

| Finding | Value |
| --- | --- |
| Highest total mean level across the six analytes | coriander, 0.550 mg/kg |
| Lowest total mean level across the six analytes | cucumber, 0.120 mg/kg |
| Highest average tAs | coriander, 0.037 mg/kg |
| Highest average Pb | coriander, 0.114 mg/kg |
| Highest average Cd | romaine lettuce, 0.041 mg/kg |
| Highest average Cr | spinach, 0.142 mg/kg |
| Highest average Ni | kidney bean, 0.331 mg/kg |
| Highest average tHg | swamp cabbage, 0.0034 m/kg |

Table 2 exposure estimates for vegetable intake:

| Element | Safe value, μg/kg bw/day | Mean daily intake, μg/kg bw/day | P97.5 daily intake, μg/kg bw/day | Mean HI | P97.5 HI |
| --- | ---: | ---: | ---: | ---: | ---: |
| tAs | 3.0 | 0.063 | 0.293 | 0.02 | 0.10 |
| Cd | 0.8 | 0.083 | 0.396 | 0.10 | 0.49 |
| Cr | 1500 | 0.278 | 1.221 | 0.00 | 0.00 |
| tHg | 0.14 | 0.010 | 0.040 | 0.07 | 0.28 |
| Ni | 20 | 0.459 | 2.002 | 0.02 | 0.10 |
| Pb | 1.5 | 0.166 | 0.830 | 0.11 | 0.55 |

## Methods (brief)

Vegetable samples were collected from 11 cities in Zhejiang from March to October 2014 and analyzed within 24 h of storage at 4 C. A 5-10 g sample was digested with 10 mL concentrated nitric acid at 220 C with periodic hydrogen peroxide additions, then diluted to 50 mL. Cd, Cr, Pb, and Ni were measured by Thermo SOLAAR iCE3000 graphite-furnace AAS, while As and Hg were measured by hydride generation-atomic fluorescence (HG-AFS 9230). LODs for As, Cd, Cr, Ni, Hg, and Pb were 0.005, 0.001, 0.005, 0.004, 0.005, and 0.005 mg/kg, respectively.

## Implications

This source contributes a large Zhejiang-market vegetable occurrence dataset for total As, Cd, total Cr, total Hg, Ni, and Pb. The overall Table 1 statistics are directly usable for broad vegetable routing, while species-specific values are limited in the extracted PDF to narrative highlights because Table S1 is referenced as supplementary information rather than embedded in the extracted text. The source is not suitable for iAs, MeHg, or Cr-VI pooling because it does not report those species.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the title page, DOI, Table 1, Table 2, methods, validation text, and license statement were readable.
- DOI verified from the first-page footer and citation note as `10.1038/srep20317`; DOI, raw handle `MFK_pan2016`, and cite-key checks found no existing source page before creation.
- All Table 1 and Table 2 values in Key numbers were checked against the extracted text. Units are preserved as `mg/kg, fresh weight` for occurrence and `μg/kg bw/day` for exposure; no conversion to ppb or dry-weight basis was performed.
- Speciation: arsenic is total As and mercury is total Hg. Chromium is total Cr. The source does not report iAs, MeHg, or Cr-VI.
- The source references Table S1 for all 28 species, but the supplementary table was not present in the extracted PDF text; only narrative species-level highlights visible in the extracted text were captured.
- source metadata slugs were checked against the editorial record; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155a](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155a) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
