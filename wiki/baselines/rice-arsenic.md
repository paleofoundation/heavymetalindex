---
title: "Rice arsenic by country and year"
description: "Public baseline of inorganic arsenic and total arsenic in rice by sampling country and sampling year. Concentration rows and count-only rows are marked. China by province is not in this version."
type: baseline
status: partial
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

This page lists inorganic arsenic and total arsenic in rice by the country and year where the sample was taken. A concentration row copies a printed statistic. A count-only row copies a sample count and does not carry a concentration. Rows are not pooled. A year span is not split into single years. China by province is not in this version. No government limit is stated on this page.

© 2026 Paleo Certified, Inc. All rights reserved.

## What the ledger can support today

The qualifying set has 223 rows. 168 are concentration rows. 55 are count-only rows. 60 are inorganic arsenic (iAs). 163 are total arsenic (tAs). 202 rows name a single sampling year. 21 rows name a year span and stay as one row. Sampling region is filled on 0 qualifying rows. Sampling country CN is filled on 0 qualifying rows.

Sum of stated n adds the sample counts printed on the rows in that country. It is a sum of stated sample counts. It is not a pooled concentration, and a sample that appears in more than one source can be counted more than once.

| Sampling country | Inorganic arsenic rows | Total arsenic rows | Concentration rows | Count-only rows | Sum of stated n |
| --- | ---: | ---: | ---: | ---: | ---: |
| AT | 0 | 1 | 0 | 1 | 4 |
| AU | 1 | 2 | 3 | 0 | 12 |
| BE | 0 | 2 | 0 | 2 | 4 |
| BR | 1 | 14 | 14 | 1 | 1 |
| CA | 0 | 12 | 12 | 0 | 12 |
| DE | 1 | 2 | 0 | 3 | 49 |
| EE | 0 | 1 | 0 | 1 | 1 |
| ES | 1 | 1 | 0 | 2 | 47 |
| FR | 1 | 1 | 0 | 2 | 10 |
| GB | 0 | 1 | 0 | 1 | 2 |
| GH | 1 | 1 | 0 | 2 | 2 |
| GR | 0 | 2 | 0 | 2 | 2 |
| HU | 0 | 1 | 0 | 1 | 15 |
| IN | 2 | 4 | 0 | 6 | 90 |
| IT | 3 | 4 | 2 | 5 | 134 |
| JP | 13 | 2 | 15 | 0 | 6,698 |
| KH | 1 | 2 | 0 | 3 | 15 |
| KR | 1 | 0 | 1 | 0 | 239 |
| LT | 0 | 1 | 0 | 1 | 2 |
| ME | 0 | 1 | 0 | 1 | 1 |
| MM | 1 | 3 | 3 | 1 | 229 |
| NL | 1 | 1 | 0 | 2 | 10 |
| NP | 0 | 1 | 1 | 0 | 170 |
| PK | 1 | 2 | 0 | 3 | 17 |
| PL | 0 | 1 | 0 | 1 | 2 |
| PT | 1 | 1 | 0 | 2 | 8 |
| TH | 2 | 4 | 0 | 6 | 46 |
| US | 28 | 92 | 116 | 4 | 867 |
| VN | 0 | 3 | 1 | 2 | 74 |

| Matrix class | Rows | Inorganic arsenic | Total arsenic |
| --- | ---: | ---: | ---: |
| rice_grain | 146 | 34 | 112 |
| rice_cereal | 64 | 25 | 39 |
| rice_product | 5 | 1 | 4 |
| rice_containing_mixture | 8 | 0 | 8 |

Matrix class keeps rice grain, rice cereal, other rice products, and mixed meals that name rice apart from one another. A mixed meal is not a rice-grain result.

Downloads: [qualifying rows (JSON)](/static/data/rice-arsenic-ground-truth.json) · [qualifying rows (CSV)](/static/data/rice-arsenic-ground-truth.csv)

## Country by year

Each download row is one ledger record with a sampling country and a sampling year. Concentration statistics stay in the form the ledger stored, on the basis the ledger stored. Count-only rows have an empty concentration. United States state counts from the 2013 rice sampling report are one national count per species, with the state split kept in the row note.

## China by province

China by province is not in this version. No qualifying row has sampling country CN. Guo et al. (2025), Journal of Environmental Management, 388, 126024, https://doi.org/10.1016/j.jenvman.2025.126024, is the lead for a later province pass. A collection region on a United States market-basket file is not a province and is not in the download.

## Inorganic and total arsenic

Inorganic arsenic and total arsenic stay in separate fields. The download contains those two species. Among the rice-matrix arsenic rows in the geography ledger, 426 have no sampling country. Those rows stay outside the qualifying download. The largest of those groups are the FDA baby-food compliance samples, the WHO GEMS/Food rice summaries, and the FDA 2016 infant-cereal inorganic arsenic samples. See [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]], [[sources/who-gemsfood-heavy-metal-contaminants]], and [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]].

## Related pages

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[ingredients/rice]]
