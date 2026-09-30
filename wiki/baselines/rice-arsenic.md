---
title: "Rice arsenic by country and year"
description: "Public baseline of inorganic arsenic and total arsenic in rice by sampling country and sampling year. Concentration rows and count-only rows are marked. China by province is not in this version."
type: baseline
status: populated
license: "© 2026 Paleo Certified, Inc. All rights reserved."
audience: [regulator, educator, consumer, researcher]
updated: 2026-09-30
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

The counts in the country table are counts of ledger rows, or the sum of the stated n on those rows. Each download row names its source page. A sum of stated n can count the same physical sample more than once when two sources report it.

## Cited concentration rows

The table below copies summary statistics that already have a sampling country and a sampling year. Sample-level composites are listed after the table and are not averaged here. A count-only row is in the download and is absent from this table because it has no concentration.

| Sampling country | Sampling year | Analyte | n | Copied statistic | Source |
| --- | --- | --- | ---: | --- | --- |
| AU | 2008 | tAs | 4 | mean 88 µg/kg; median 82 µg/kg; range 70 to 120 µg/kg; original unit mg/kg | [[sources/fsanz2011-23rd-atds-appendices-arsenic]] |
| AU | 2013 to 2014 | iAs | 4 | mean 30 µg/kg; median 30 µg/kg; range 20 to 40 µg/kg; original unit mg/kg | [[sources/fsanz2019-25th-atds-appendices-arsenic]] |
| AU | 2013 to 2014 | tAs | 4 | mean 41 µg/kg; median 41 µg/kg; range 31 to 52 µg/kg; original unit mg/kg | [[sources/fsanz2019-25th-atds-appendices-arsenic]] |
| CA | 2004 | tAs | 1 | composite 63.6 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2005 | tAs | 1 | composite 99.2 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2006 | tAs | 1 | composite 92.5 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2007 | tAs | 1 | composite 90 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2008 | tAs | 1 | composite 32.1 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2009 | tAs | 1 | composite 53.05 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2010 | tAs | 1 | composite 45.8 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2011 | tAs | 1 | composite 66.90511452 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2012 | tAs | 1 | composite 63.72882227 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2016 | tAs | 1 | composite 59.04939407 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2017 | tAs | 1 | composite 67.90907378 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| CA | 2018 | tAs | 1 | composite 56.41075816 µg/kg; original unit ng/g | [[sources/hc2018-canadian-tds-trace-elements-white-rice]] |
| IT | 2022 to 2023 | iAs | 25 | Mean 15; median 15; range 7-24; 100% quantifiable; no sample exceeded 30 | [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |
| IT | 2022 to 2023 | tAs | 25 | Mean 23; median 22; range 9-58 | [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |
| JP | 2012 | iAs | 600 | mean 210 µg/kg; median 200 µg/kg; original unit mg/kg | [[sources/maff2014-japan-rice-arsenic-fy2012]] |
| JP | 2012 | iAs | 600 | mean 120 µg/kg; median 120 µg/kg; original unit mg/kg | [[sources/maff2014-japan-rice-arsenic-fy2012]] |
| JP | 2012 | tAs | 600 | mean 230 µg/kg; median 210 µg/kg; original unit mg/kg | [[sources/maff2014-japan-rice-arsenic-fy2012]] |
| JP | 2012 | tAs | 600 | mean 140 µg/kg; median 130 µg/kg; original unit mg/kg | [[sources/maff2014-japan-rice-arsenic-fy2012]] |
| JP | 2017 | iAs | 500 | mean 150 µg/kg; median 140 µg/kg; original unit mg/kg | [[sources/maff2022-japan-rice-inorganic-arsenic-2017-2019]] |
| JP | 2017 | iAs | 500 | mean 92 µg/kg; median 80 µg/kg; original unit mg/kg | [[sources/maff2022-japan-rice-inorganic-arsenic-2017-2019]] |
| JP | 2018 | iAs | 500 | mean 150 µg/kg; median 140 µg/kg; original unit mg/kg | [[sources/maff2022-japan-rice-inorganic-arsenic-2017-2019]] |
| JP | 2018 | iAs | 500 | mean 98 µg/kg; median 100 µg/kg; original unit mg/kg | [[sources/maff2022-japan-rice-inorganic-arsenic-2017-2019]] |
| JP | 2019 | iAs | 500 | mean 170 µg/kg; median 160 µg/kg; original unit mg/kg | [[sources/maff2022-japan-rice-inorganic-arsenic-2017-2019]] |
| JP | 2022 | iAs | 300 | mean 130 µg/kg; median 120 µg/kg; original unit mg/kg | [[sources/maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024]] |
| JP | 2022 | iAs | 300 | mean 90 µg/kg; median 80 µg/kg; original unit mg/kg | [[sources/maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024]] |
| JP | 2023 | iAs | 300 | mean 120 µg/kg; median 120 µg/kg; original unit mg/kg | [[sources/maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024]] |
| JP | 2023 | iAs | 300 | mean 90 µg/kg; median 90 µg/kg; original unit mg/kg | [[sources/maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024]] |
| JP | 2024 | iAs | 299 | mean 130 µg/kg; median 120 µg/kg; original unit mg/kg | [[sources/maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024]] |
| JP | 2024 | iAs | 299 | mean 90 µg/kg; median 90 µg/kg; original unit mg/kg | [[sources/maff2025-japan-rice-cadmium-inorganic-arsenic-2022-2024]] |
| KR | 2019 | iAs | 239 | mean 30.9 µg/kg | [[sources/noh2023-arsenic-rice-snacks-korea]] |
| MM | 2016 to 2018 | iAs | 50 | mean 86 µg/kg; original unit µg/kg | [[sources/alrashdi2024-myanmar-rice-arsenic]] |
| MM | 2016 to 2018 | tAs | 50 | mean 110 µg/kg; original unit µg/kg | [[sources/alrashdi2024-myanmar-rice-arsenic]] |
| MM | 2018 | tAs | 120 | mean 160 µg/kg; original unit mg/kg | [[sources/myatsoe2023-myanmar-rice-metals]] |
| NP | 2019 | tAs | 170 | geometric mean 43.4 µg/kg; range 6.43 to 121 µg/kg; original unit µg/kg | [[sources/shao2023-nepal-rice-heavy-metals]] |
| VN | 2018 to 2019 | tAs | 70 | mean 115 µg/kg; original unit mg/kg | [[sources/chu2021-vietnam-rice-arsenic]] |

[[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil]] contributes 14 sample rows. Each concentration is the value stored for that sample. Those rows are not averaged into a country mean on this page. [[sources/fda2022-tds-elements-fy2018-fy2020]] contributes 116 sample rows. Each concentration is the value stored for that sample. Those rows are not averaged into a country mean on this page.

Count-only rows, including the EFSA origin-year counts in [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] and the 2013 United States sampling counts in [[sources/fda2013-ias-rice-products-sampling]], copy n and no concentration. United States state counts from that 2013 report are one national count per species. The state split stays in the row note.

## What is not in this version

A printed number stays out of the country-year rows when the sampling year is missing, the origin is not a country, the inorganic figure was calculated rather than measured, or the paper prints site means and no country mean. Those facts are listed here so the absence is visible.

| Country or label | Years | Analyte | Why it is not a country-year row | Source |
| --- | --- | --- | --- | --- |
| unknown origin (EFSA XX) | 2016 | tAs | Origin code is not a sampling country. The count stays out of the country-year rows. | [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] |
| unknown origin (EFSA XX) | 2017 | tAs | Origin code is not a sampling country. The count stays out of the country-year rows. | [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] |
| unknown origin (EFSA XX) | 2018 | tAs | Origin code is not a sampling country. The count stays out of the country-year rows. | [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] |
| unknown origin (EFSA XX) | 2018 | iAs | Origin code is not a sampling country. The count stays out of the country-year rows. | [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] |
| unknown origin (EFSA XD) | 2018 | tAs | Origin code is not a sampling country. The count stays out of the country-year rows. | [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] |
| unknown origin (EFSA XD) | 2018 | iAs | Origin code is not a sampling country. The count stays out of the country-year rows. | [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] |
| EU (unspecified) | 2018 | tAs | Origin code is not a sampling country. The count stays out of the country-year rows. | [[sources/efsa2021-rice-arsenic-annex-a-origin-year]] |
| Indonesia | not stated | tAs | Table 2 prints an Indonesia total-arsenic mean of 106 µg/kg dry basis, with a printed standard deviation of 93. Table 3 gives the same mean and a range from below the limit of detection (30 µg/kg) to 609 µg/kg. The sampling year is not stated. The 2022 production statistics choose the provinces. They are not a sampling year. Province rows are not copied. | [[sources/yuliani2025-indonesia-rice-metals]] |
| Indonesia | not stated | iAs | Inorganic arsenic is estimated from a linear regression on 13 published pairs from other countries. Table 3 prints a calculated mean of 63 µg/kg. That figure is not a measurement of these samples and is not a country-year row. | [[sources/yuliani2025-indonesia-rice-metals]] |
| Cambodia | not stated | tAs | The abstract states 105 rice samples. No sampling year is stated, so the count is not a country-year row. | [[sources/murphy2018-cambodia-rice-arsenic]] |
| Cambodia | 2016 | tAs | Most samples are described as 2016. The concentration and the exact n were not extracted. | [[sources/murphy2019-cambodia-rice-arsenic]] |
| Cambodia | 2016 | tAs; iAs | Total arsenic and inorganic arsenic are not split into separate numeric rows. DMA is also discussed. Most samples are 2016. | [[sources/murphy2020-cambodia-rice-arsenic-species]] |
| Bangladesh | 2021 | tAs | Table 2 prints rice arsenic means of 0.075 mg/kg at Savar, 0.031 mg/kg at Gazipur, and 0.048 mg/kg at Ashulia. Samples were collected from April to August 2021. The paper does not print one Bangladesh mean. The site means are not averaged. | [[sources/hasan2022-bangladesh-industrial-rice-metals]] |
| Bangladesh | not stated | tAs | The results text prints an average arsenic of 0.18 mg/kg fresh weight, with a printed figure of 0.18 plus or minus 0.003, and a range of 0.04 to 0.35 mg/kg fresh weight. Ten cultivars were purchased in Dhaka markets. The purchase year is not stated. | [[sources/shaheen2024-dhaka-rice-cultivars]] |
| India | 2023 | tAs | Field trial of genotypes at two sites. The concentration was not extracted. | [[sources/saini2025-india-rice-grain-arsenic]] |
| United States | not stated | tAs | The abstract prints median total arsenic of 131 µg/kg in United States white rice, 217 µg/kg in United States brown rice, and 155 µg/kg in white rice pooled across Thailand, India, and Italy. The pooled group is not split by country. n=39 rice samples were purchased in Louisiana. The sampling year is not stated, so the medians are not country-year rows. | [[sources/tatahmentan2020-rice-grains-elements]] |
| United States | 2013; 2014 | iAs | Irrigation trial. The concentration was not extracted. Practice is not a launch-cut split. | [[sources/fernandezbaca2020-rice-ias-irrigation]] |
| United States | 2016; 2017 | tAs; iAs | Total and inorganic arsenic are not split into separate extracted rows. The concentration was not extracted. | [[sources/seyfferth2025-rice-water-management-as-hg-cd]] |
| Bangladesh | 2014 | tAs | Cultivar and water-management trial. The concentration was not extracted. | [[sources/norton2017-bangladesh-awd-rice]] |
| India | not stated | tAs; iAs | Year not stated. Total and inorganic arsenic were not extracted as separate country-year rows. | [[sources/majumder2021-west-bengal-rice-water-regimes]] |
| China | post-v1 | iAs | Guo et al. (2025). Journal of Environmental Management, 388, 126024. https://doi.org/10.1016/j.jenvman.2025.126024. Province rows are a later pass. No coauthor list is recorded here. | see the Guo et al. (2025) citation below |

China by province is not in this version. Guo et al. (2025), Journal of Environmental Management, 388, 126024, https://doi.org/10.1016/j.jenvman.2025.126024, is the lead for a later province pass.

## Country by year

Each download row is one ledger record with a sampling country and a sampling year. The copied statistic stays in the unit the source printed, on the basis the source printed. Count-only rows have an empty concentration.

## China by province

China by province is not in this version. No qualifying row has sampling country CN. Guo et al. (2025), Journal of Environmental Management, 388, 126024, https://doi.org/10.1016/j.jenvman.2025.126024, is the lead for a later province pass. A collection region on a United States market-basket file is not a province and is not in the download.

## Inorganic and total arsenic

Inorganic arsenic and total arsenic stay in separate fields. The download contains those two species. Among the rice-matrix arsenic rows in the geography ledger, 426 have no sampling country. Those rows stay outside the qualifying download. The largest of those groups are the FDA baby-food compliance samples, the WHO GEMS/Food rice summaries, and the FDA 2016 infant-cereal inorganic arsenic samples. See [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]], [[sources/who-gemsfood-heavy-metal-contaminants]], and [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]].

## Related pages

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[ingredients/rice]]
