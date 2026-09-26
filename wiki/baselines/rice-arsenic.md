---
title: "Rice arsenic by country and year"
description: "Scaffold for a public baseline of inorganic arsenic and total arsenic in rice by sampling country and sampling year. China by province is not yet filled from the ledger."
type: baseline
status: scaffold
license: "© 2026 Paleo Certified, Inc. All rights reserved."
audience: [regulator, educator, consumer, researcher]
updated: 2026-09-26
data_downloads:
  - label: Qualifying ledger rows (JSON)
    path: static/data/rice-arsenic-ground-truth.json
  - label: Qualifying ledger rows (CSV)
    path: static/data/rice-arsenic-ground-truth.csv
---

# Rice arsenic by country and year

Operated by the Institute of Contaminant Standards.

This page is a scaffold for a public baseline of inorganic arsenic and total arsenic in rice, arranged by the country and year where the sample was taken, with a separate section for China by province. The concentration baseline is not yet filled from the ledger. The download lists each ledger row that already has a sampling country, a sampling year, and inorganic or total arsenic on a rice matrix. Rows are not pooled. A year span is not split into single years. No government limit is stated on this page.

© 2026 Paleo Certified, Inc. All rights reserved.

## What the ledger can support today

The qualifying set has 133 rows. 28 are inorganic arsenic (iAs). 105 are total arsenic (tAs). 117 rows name a single sampling year. 16 rows name a year span and stay as one row. Sampling region is filled on 0 qualifying rows. Sampling country CN is filled on 0 qualifying rows.

| Sampling country | Inorganic arsenic rows | Total arsenic rows | Single-year rows | Year-span rows |
| --- | ---: | ---: | ---: | ---: |
| BR | 0 | 14 | 0 | 14 |
| IT | 1 | 1 | 0 | 2 |
| KR | 1 | 0 | 1 | 0 |
| US | 26 | 90 | 116 | 0 |

| Matrix class | Rows | Inorganic arsenic | Total arsenic |
| --- | ---: | ---: | ---: |
| rice_grain | 56 | 2 | 54 |
| rice_cereal | 64 | 25 | 39 |
| rice_product | 5 | 1 | 4 |
| rice_containing_mixture | 8 | 0 | 8 |

Matrix class keeps rice grain, rice cereal, other rice products, and mixed meals that name rice apart from one another. A mixed meal is not a rice-grain result.

Downloads: [qualifying rows (JSON)](/static/data/rice-arsenic-ground-truth.json) · [qualifying rows (CSV)](/static/data/rice-arsenic-ground-truth.csv)

## Country by year

A cited country-by-year concentration baseline is not yet filled from the ledger. The table above counts rows. Concentration statistics stay in the download, in the form the ledger stored, on the basis the ledger stored.

## China by province

Not yet filled from the ledger. No qualifying row has an admin-1 region, and no qualifying row has sampling country CN. A collection region on a United States market-basket file is not a province and is not in the download.

## Inorganic and total arsenic

Inorganic arsenic and total arsenic stay in separate fields. The download contains those two species. Among the rice-matrix arsenic rows in the geography ledger, 426 have no sampling country. Those rows stay outside the qualifying download. The largest of those groups are the FDA baby-food compliance samples, the WHO GEMS/Food rice summaries, and the FDA 2016 infant-cereal inorganic arsenic samples. See [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]], [[sources/who-gemsfood-heavy-metal-contaminants]], and [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]].

## Related pages

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[ingredients/rice]]
