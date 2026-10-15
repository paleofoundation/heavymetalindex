---
title: Spinach
type: ingredient
commodity: spinach
aliases: [baby spinach, mature spinach, frozen spinach, spinach puree]
category: leafy-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [30, 300]
    p95_ppb: 800
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: 1100
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 1500]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [2000, 10000]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [100, 800]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, leaf-accumulation, geography, growing-season]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/mature-leaf-spinach]]"]
used_in_products: ["[[products/baby-food-vegetables]]", "[[products/salad-mixes]]", "[[products/smoothies]]", "[[products/frozen-vegetable-mixes]]", "[[products/baby-leafy-purees]]"]
audience: [regulator, educator, consumer, app]
sources: 46
wiki_doi: null
updated: 2026-10-15
---

# Spinach

## Overview

Spinach (*Spinacia oleracea*) is a leafy commodity with measurements for several metals. Counsel, brands, retailers, and ingredient suppliers can use this page to see which metals have a source-native number, which jurisdictions set a maximum level, and which claims the routed notes leave unsupported. This page does not set a certification threshold.

The supply-chain point is basis and pathway. Fresh-weight market and surveillance results, including US Total Diet Study raw spinach, are not on the same scale as oven-dried leaves from wastewater-irrigated plots. A dry-weight result is not an exceedance of a fresh-weight maximum level unless that study reports moisture and performs the conversion. African spinach (*Amaranthus*), red spinach, and water spinach are different plants and are labeled as such below.

Cadmium has the widest fresh-weight surveillance range in the US reviews on this page and the most crop-specific maximum levels. Lead in recent US composites is lower than in the 1980s survey compiled by Seyfferth and colleagues, and lead is the metal with a non-binding US action level for certain baby foods. Total arsenic, mercury, nickel, aluminum, chromium, and uranium each have at least one routed measurement. Inorganic arsenic, methylmercury, hexavalent chromium, and tin do not have a spinach concentration in the notes used here.

## Heavy metal contamination profile

The table is the compiled snapshot already carried in this page's machine-readable profile. It is a band. The metal sections below give the source-native values, with place, basis, and sample size. A data-gap row means this snapshot has no synthesized typical range. It does not mean every surveillance file is silent. Uranium is the clear case: the fiscal year 2018 to 2020 Total Diet Study detected uranium in raw spinach, and the snapshot still has no typical range.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Lead (Pb) | n=7 | 30–300 | medium | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/seyfferth2024-spinach-cd-pb-review\|3]] |
| Cadmium (Cd) | n=10 | 100–500 | medium | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|3]] |
| Inorganic arsenic (iAs) | data gap | — | — | — |
| Total arsenic (tAs) | n=4 | 10–100 | low | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|3]] |
| Total mercury (tHg) | n=2 | 1–20 | low | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/kurniawati2021-jakarta-staple-foods-naa\|2]] |
| Nickel (Ni) | n=4 | 200–1500 | low | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/sultana2022-dhaka-root-leafy-vegetables\|3]] |
| Aluminum (Al) | n=4 | 2000–10000 | low | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/efsa2021-aluminium-food-qa\|3]] |
| Chromium (Cr) | n=6 | 100–800 | medium | [[sources/saleem2025-nd-vegetables-hra\|1]], [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|2]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|3]] |
| Tin (Sn) | data gap | — | — | — |
| Uranium (U) | data gap | — | — | — |

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 408: Spinach, raw | tAs | 27 | 27 | 3.1–8.8 | 3 |
| 408: Spinach, raw | Cd | 27 | 27 | 100–400 | 1 |
| 408: Spinach, raw | Cr | 27 | 19 | 67–400 | 50 |
| 408: Spinach, raw | Pb | 27 | 21 | 5.1–18 | 4 |
| 408: Spinach, raw | tHg | 27 | 3 | 1–1.1 | 1 |
| 408: Spinach, raw | Ni | 27 | 24 | 46–220 | 40 |
| 408: Spinach, raw | U | 27 | 27 | 1.1–12 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Regulatory limits that apply

Binding maximum levels and non-binding guidance are different instruments. A fresh or frozen spinach lot is not judged by a canned-food tin row or by a baby-food action level unless the product is actually in that scope. Figures below are copied from the cited wiki record. Where a source note's selected extract omits a row that the regulation page prints, the page says so.

Commission Regulation (EU) 2023/915, in the source note, sets cadmium in leaf vegetables other than the spinach row at 0.10 mg/kg and cadmium in spinaches and similar leaves, mustard seedlings, and fresh herbs at 0.20 mg/kg, wet weight unless a row remark says otherwise. The same note sets lead in baby food and processed cereal-based food for infants and young children at 0.020 mg/kg, cadmium in that baby-food row at 0.040 mg/kg, inorganic arsenic in baby food at 0.020 mg/kg, and inorganic tin in canned food other than the listed beverage, formula, and infant rows at 200 mg/kg. [[sources/eu-2023-915-contaminants-maximum-levels]] The regulation page also transcribes lead in leaf vegetables at 0.30 mg/kg (300 µg/kg), wet weight after washing and separation of the edible part. The source note's selected lead table names leafy vegetables in the section scope and does not reprint that numeric row. [[regulations/eu2023-contaminants-maximum-levels]]

Commission Regulation (EU) 2024/1987 sets nickel in leafy vegetables other than fresh herbs at 0.50 mg/kg, wet weight after washing and separation of the edible part, applying from 1 July 2025. Fresh herbs are a separate row at 1.2 mg/kg. [[sources/eu-2024-1987-nickel-maximum-levels]]

The Korean Food Code excerpt records maximum residue limits of 0.3 mg/kg lead and 0.2 mg/kg cadmium for spinach. [[sources/mfds2012-food-code-heavy-metals]] Codex CXS 193-1995, as transcribed, sets cadmium in leafy vegetables at 0.2 mg/kg, including Brassica leafy vegetables, and lead in leafy vegetables at 0.3 mg/kg, including leafy Brassica vegetables and excluding spinach. [[sources/codex-cxs-193-1995]]

The Australia New Zealand Schedule 19 regulation page transcribes lead at 0.1 mg/kg for vegetables except brassicas and cadmium at 0.1 mg/kg for leafy vegetables, on the portion ordinarily consumed, with dried foods calculated before drying unless the Schedule says otherwise. The companion source note's shorter extract does not repeat those two vegetable rows, so they are cited from the regulation page only. Tin in that source note is 250 mg/kg for all canned foods, which is not a fresh-spinach row. [[regulations/au-nz-food-standards-code-schedule-19-contaminants]] [[sources/fsanz2024-schedule-19-contaminants]]

Hong Kong Cap. 132V, on its regulation page, sets cadmium in leafy vegetables, including Brassica leafy vegetables, at 0.2 mg/kg. Spinach-specific lead, mercury, and chromium rows are not among the representative anchors printed on that page, so they are not stated here. [[regulations/hong-kong-cap-132v-metallic-contamination]]

The Israel Ministry of Health directive, as transcribed on its regulation page, sets lead at 0.3 mg/kg for leafy vegetables, celery, mushrooms, edible plants, herbs, brassicas, and horseradish, and cadmium at 0.2 mg/kg for leafy vegetables, celery, mushrooms, edible plants, herbs, and horseradish. For fruits and vegetables, including mushrooms, edible plants, and herbs, the same page transcribes total mercury at 0.03 mg/kg, total arsenic at 1 mg/kg, and inorganic arsenic at 0.06 mg/kg, product as placed on the market. The source note describes the instrument and does not reprint those produce figures. [[regulations/israel-moh-fcs-2016-heavy-metals-tin-food-guidelines]] [[sources/israelmoh2016-heavy-metals-tin-food-guidelines]]

US Food and Drug Administration action levels for lead in processed food intended for babies and young children are non-binding guidance. The action level for the category that includes fruits, vegetables other than single-ingredient root vegetables, mixtures, yogurts, custards, puddings, and single-ingredient meats is 10 µg/kg. It applies to packaged foods represented for children under two years of age. It does not apply to raw agricultural commodities. [[sources/fda-ctz-Pb-babyfood-2025]] [[regulations/fda-ctz-Pb-babyfood-10ppb]] No raw-spinach lead or cadmium maximum level for the general US market is transcribed in the records used for this section.

| Instrument | Matrix named in the record | Metal | Limit | Force on spinach |
| --- | --- | --- | --- | --- |
| EU 2023/915 | Leaf vegetables except the spinach row | Cadmium | 0.10 mg/kg | Binding maximum level, wet weight |
| EU 2023/915 | Spinaches and similar leaves, mustard seedlings, fresh herbs | Cadmium | 0.20 mg/kg | Binding maximum level, wet weight |
| EU regulation page | Leaf vegetables | Lead | 0.30 mg/kg (300 µg/kg) | Transcribed on the regulation page; numeric row absent from the source note's selected lead table |
| EU 2024/1987 | Leafy vegetables except fresh herbs | Nickel | 0.50 mg/kg | Binding from 1 July 2025, wet weight after washing |
| EU 2023/915 | Baby food and processed cereal-based food for infants and young children | Lead | 0.020 mg/kg | Binding for that food; not raw spinach |
| EU 2023/915 | Baby food and processed cereal-based food for infants and young children | Cadmium | 0.040 mg/kg | Binding for that food; not raw spinach |
| EU 2023/915 | Baby food | Inorganic arsenic | 0.020 mg/kg | Binding for baby food; not a raw-spinach inorganic-arsenic measurement |
| EU 2023/915 | Canned food except listed beverage, formula, and infant rows | Inorganic tin | 200 mg/kg | Binding for canned food; not fresh spinach |
| Codex CXS 193-1995 | Leafy vegetables | Cadmium | 0.2 mg/kg | International standard; includes Brassica leafy vegetables |
| Codex CXS 193-1995 | Leafy vegetables | Lead | 0.3 mg/kg | International standard; excludes spinach |
| Schedule 19 regulation page | Vegetables except brassicas | Lead | 0.1 mg/kg | Binding in Australia and New Zealand on the portion ordinarily consumed; row not repeated in the shorter source extract |
| Schedule 19 regulation page | Leafy vegetables | Cadmium | 0.1 mg/kg | Binding in Australia and New Zealand; row not repeated in the shorter source extract |
| Korean Food Code excerpt, 2012 | Spinach | Lead | 0.3 mg/kg | Maximum residue limit in the excerpt |
| Korean Food Code excerpt, 2012 | Spinach | Cadmium | 0.2 mg/kg | Maximum residue limit in the excerpt |
| Hong Kong Cap. 132V page | Leafy vegetables, including Brassica leafy vegetables | Cadmium | 0.2 mg/kg | Binding maximum level on that page |
| Israel directive, regulation page | Leafy vegetables and the listed companions | Lead | 0.3 mg/kg | Maximum level, product as placed on the market |
| Israel directive, regulation page | Leafy vegetables and the listed companions | Cadmium | 0.2 mg/kg | Maximum level, product as placed on the market |
| Israel directive, regulation page | Fruits and vegetables, including herbs | Total mercury | 0.03 mg/kg | Maximum level, product as placed on the market |
| Israel directive, regulation page | Fruits and vegetables, including herbs | Total arsenic | 1 mg/kg | Maximum level, product as placed on the market |
| Israel directive, regulation page | Fruits and vegetables, including herbs | Inorganic arsenic | 0.06 mg/kg | Maximum level; no spinach inorganic-arsenic concentration is paired to it on this page |
| FDA Closer to Zero, 2025 | Processed baby food, including non-root vegetables | Lead | 10 µg/kg | Non-binding guidance; not raw spinach |

## Why spinach accumulates metals

Entry is not the same for every metal. Seyfferth and colleagues describe cadmium moving from root to shoot in spinach, and they describe lead as behaving differently. The review proposes lower chloride in irrigation water as a way to limit cadmium bioavailability. It is a review of datasets and mechanisms, not a field trial with a measured removal percentage. Modern paired soil and plant data for US production are limited in that review, and regional Total Diet Study composites have no paired soil. [[sources/seyfferth2024-spinach-cd-pb-review]]

Irrigation water is a documented entry route where the study measures it. Salawu and colleagues report irrigation water and spinach together in Gusau, Nigeria. Adebayo and colleagues report wastewater and African spinach together in Bauchi. Abubakar and colleagues report sewage water, soil, and dried spinach leaves together in Faisalabad. Clair-Caliot and colleagues dosed greenhouse irrigation with arsenate and measured total arsenic in spinach leaves. Those designs support a pathway. They do not assign a share of a US retail lot to fertilizer, soil, or water. [[sources/salawu2015-spinach-irrigation-metals]] [[sources/adebayo2020-wastewater-irrigated-spinach]] [[sources/abubakar2025-faisalabad-sewage-vegetables]] [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina]]

Ali and colleagues' meta-analysis of lead in wastewater, irrigated soil, and crops lists spinach among the crops studied most often and states that edible parts of crops produced with untreated wastewater exceeded the edibility limits the review used. The source note does not print a spinach-only lead concentration. [[sources/ali2022-lead-wastewater-crops-meta]]

A fertilizer or soil-chemistry effect that is actually measured is the zinc trial of Hussain and colleagues. In cadmium-spiked glasshouse soil, leaf cadmium was 3.29 mg/kg at 3 mg cadmium per kg soil, 3.67 mg/kg when zinc was added at a 1:10 cadmium-to-zinc ratio, and 1.96 mg/kg at a 1:100 ratio. The source states that 300 mg zinc per kg soil lowered leaf cadmium by 46.2 percent relative to the 1:10 treatment, and that 30 mg zinc per kg did not. These are spiked-pot leaves, not market spinach, and the note does not state a fresh-weight conversion. [[sources/hussain2016-spinach-cadmium-zinc]]

Processing changes the denominator more often than it removes metal from the leaf. Seyfferth and colleagues state a spinach dry-matter factor of 7.7 percent (92 percent water) for converting a dry-weight result to fresh weight by multiplying by 0.077. Kurniawati and colleagues report spinach water content of 93.4 ± 1.36 percent in Jakarta market samples. Those two moisture figures are not the same conversion, so this page does not apply either factor to another study's dry-weight table. [[sources/seyfferth2024-spinach-cd-pb-review]] [[sources/kurniawati2021-jakarta-staple-foods-naa]]

## Ranges by source, region, and variety

Each metal section reports the spinach-specific figures the notes actually print. Means, ranges, and maxima are left in the source unit, with µg/kg shown only where the conversion is a unit identity (1 mg/kg = 1000 µg/kg; 1 µg/g = 1000 µg/kg; 1 ng/g = 1 µg/kg). Wet and dry bases are not pooled. Greenhouse doses and spiked soils are not market surveys. Where a paper names spinach inside a mixed vegetable set and does not split it out, the mixed set is not given a spinach concentration.

## Lead

Recent US fresh-weight lead is a low µg/kg surveillance result. Seyfferth and colleagues report 1980s survey lead of 0.016 to 0.166 mg/kg fresh weight (mean 0.045, median 0.038) and fiscal year 2018 to 2020 raw-spinach lead from below detection to 0.018 mg/kg fresh weight (mean and median 0.006), with about 15 percent of those composites above 0.01 mg/kg. Boiled spinach in the 1991 to 2017 Total Diet Study ran from below detection to 0.062 mg/kg fresh weight (mean and median 0.008). [[sources/seyfferth2024-spinach-cd-pb-review]] The generated Total Diet Study table on this page is the detected slice of the later raw composites: 21 of 27 detected, detected values 5.1 to 18 µg/kg, reporting limit 4 µg/kg. [[sources/fda2022-tds-elements-fy2018-fy2020]]

Market and plot studies that report lead in spinach specifically disagree once basis is respected. Saleem and colleagues report a North Dakota farmer's-market mean of 0.081 ± 0.013 µg/g dry weight (81 ± 13 µg/kg), n=5, the highest lead among 13 vegetables in that survey. See and colleagues did not detect lead in three Selangor spinach purchases; the detection limit stated for lead is under 0.004 mg/kg fresh weight. [[sources/saleem2025-nd-vegetables-hra]] [[sources/see2025-malaysia-leafy-vegetables-icp-oes]]

| Source | Setting | n | Basis | Spinach lead |
| --- | --- | --- | --- | --- |
| Seyfferth review of 1980s survey | US, four states | 105 in the source-page sample description | Fresh weight | 0.016 to 0.166 mg/kg; mean 0.045; median 0.038 |
| Seyfferth review of TDS 2018–2020 | US, raw | Composites; count in the FDA table | Fresh weight | Below detection to 0.018 mg/kg; mean and median 0.006 |
| FDA TDS table | Food 408, raw | 27 composites; 21 detected | FDA sample basis | Detected 5.1 to 18 µg/kg; reporting limit 4 µg/kg |
| Saleem 2025 | Grand Forks, North Dakota, farmer's market | 5 | Dry weight | 0.081 ± 0.013 µg/g |
| See 2025 | Pasar Borong Selangor | 3 | Fresh weight | Not detected; lead detection limit under 0.004 mg/kg |
| Abdolahpour 2023 | Babol, Iran | 4 | Fresh weight | 0.48 ± 0.16 mg/kg |
| Sultana 2022 | Kawran Bazar, Dhaka, four phases | Four phase values | Dry weight | Phase values 0, 0, 0.68, 0 mg/kg; mean 0.67 mg/kg |
| Ghasemidehkordi 2018 | Markazi, Iran | 10 | Dry weight | Mean 1733.62 µg/kg; SD 2264.74; minimum 870.28; maximum 8171.75 |
| Abubakar 2025 | Faisalabad sewage irrigation | Three plants; three figure replicates | Dry weight, dried leaves | Mean 6.13 mg/kg |
| Codex CXS 193-1995 | Leafy vegetables | Not a survey | mg/kg as transcribed | Lead maximum level 0.3 mg/kg, and the row excludes spinach |

Abdolahpour and colleagues compare their spinach lead mean with an Iran national standard value they state as 0.2 mg/kg for parsley, spinach, and beans, and the mean 0.48 mg/kg fresh weight is above that comparator. Sultana and colleagues print spinach lead phase values of 0, 0, 0.68, and 0 mg/kg dry weight and a mean of 0.67 mg/kg. That printed mean is not the arithmetic mean of the four phase values. Both figures are left as printed. [[sources/sultana2022-dhaka-root-leafy-vegetables]] The cadmium standard deviation in the Abdolahpour table is discussed under cadmium. [[sources/abdolahpour2023-heavy-metals-babol-vegetables]] Wu's Jiaozuo market note says spinach had the highest lead median among leaf greens on a boxplot, read by the source note as approximately 0.05 mg/kg with a maximum approaching 0.08 mg/kg, and it also records a paper-internal conflict about whether vegetable lead stayed within the standard. That figure reading is not treated here as a printed table statistic. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo]]

## Cadmium

US fresh-weight cadmium is the surveillance anchor. Seyfferth and colleagues report 1980s values of 0.012 to 0.195 mg/kg fresh weight (geometric mean 0.065, median 0.061), 1991 to 2017 boiled spinach of 0.03 to 1.09 mg/kg fresh weight (mean 0.16, median 0.11), and 2018 to 2020 raw spinach of 0.1 to 0.4 mg/kg fresh weight (mean 0.222, median 0.200). The review states that 37 percent of the 2018 to 2020 samples would exceed the EU spinach maximum level of 0.2 mg/kg fresh weight, that 40 to 50 percent of recent California and Arizona samples would exceed it, and that none of the 1980s samples would. The review attributes the rise to a geographic shift toward the Salinas Valley. It does not print a fertilizer dose. [[sources/seyfferth2024-spinach-cd-pb-review]] Schaefer and colleagues, citing FDA Total Diet Study 2014 to 2016, list boiled spinach at 117 µg/kg as the second food by mean lower-bound cadmium, as consumed. [[sources/schaefer2020-cadmium-mitigation-strategies]] The generated table for raw spinach, fiscal years 2018 to 2020, is 27 of 27 composites detected, 100 to 400 µg/kg, reporting limit 1 µg/kg, which matches the review's 0.1 to 0.4 mg/kg range. [[sources/fda2022-tds-elements-fy2018-fy2020]]

The 2009 EFSA opinion is cited on this page for its tolerable weekly intake in the health section. The source note routed to spinach does not transcribe a spinach occurrence value, so no EFSA spinach concentration is stated. [[sources/efsa-cadmium-contam-2009]]

| Source | Setting | n | Basis | Spinach cadmium |
| --- | --- | --- | --- | --- |
| Seyfferth review of TDS 2018–2020 | US, raw | Composites | Fresh weight | 0.1 to 0.4 mg/kg; mean 0.222; median 0.200 |
| Schaefer 2020, citing TDS 2014–2016 | US, boiled | Not restated in the note | as consumed | Mean lower bound 117 µg/kg |
| FDA TDS table | Food 408, raw | 27 of 27 detected | FDA sample basis | 100 to 400 µg/kg; reporting limit 1 µg/kg |
| Saleem 2025 | Grand Forks farmer's market | 5 | Dry weight | 0.985 ± 0.223 µg/g, highest of 13 vegetables |
| See 2025 | Selangor wet market | 3 | Fresh weight | Not detected; cadmium detection limit under 0.004 mg/kg |
| Abdolahpour 2023 | Babol | 4 | Fresh weight | 0.04 ± 0.44 mg/kg |
| Sultana 2022 | Dhaka, four phases | Four phase values | Dry weight | 0.90, 0.60, 0.50, 0 mg/kg; mean 0.50 mg/kg |
| EU 2023/915 | Spinaches and similar leaves | Not a survey | Wet weight | Maximum level 0.20 mg/kg |
| Korean Food Code excerpt | Spinach | Not a survey | mg/kg | Maximum residue limit 0.2 mg/kg |

Saleem and colleagues warn that their dry-weight results are not directly comparable to fresh-weight FAO/WHO limits. See and colleagues' non-detects are three purchases from one wholesale market over three weeks. Abdolahpour's printed cadmium standard deviation, 0.44 mg/kg, is larger than the mean, 0.04 mg/kg. The source note states that spinach cadmium of 0.04 mg/kg is below the 0.05 mg/kg leafy comparator the authors cite, and that parsley at 0.06 mg/kg is the leafy mean above that comparator. [[sources/saleem2025-nd-vegetables-hra]] [[sources/see2025-malaysia-leafy-vegetables-icp-oes]] [[sources/abdolahpour2023-heavy-metals-babol-vegetables]] [[sources/sultana2022-dhaka-root-leafy-vegetables]]

Zemanova and colleagues grew spinach cv. Matador in pots with 0, 30, 60, or 90 mg cadmium per kg soil and report leaf cadmium from 0.60 to 72.38 mg/kg dry matter. That range is a dose response, not retail occurrence. [[sources/zemanova2015-spinach-cadmium-amino-fatty-acids]] Cardini and colleagues are routed to spinach in frontmatter, and the transcribed matrices are other plants, with beetroot leaves at 570 µg/kg dry weight the highest. No spinach concentration from that paper is used here. [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp]]

## Arsenic

No note used on this page reports inorganic arsenic in spinach. Total arsenic is what the studies measured. Israel's transcribed inorganic-arsenic maximum level for fruits and vegetables is 0.06 mg/kg, and it cannot be checked against these spinach results. [[regulations/israel-moh-fcs-2016-heavy-metals-tin-food-guidelines]]

The US surveillance figure is total arsenic in raw spinach: 27 of 27 composites detected, 3.1 to 8.8 µg/kg, reporting limit 3 µg/kg. [[sources/fda2022-tds-elements-fy2018-fy2020]] Saleem and colleagues measured total arsenic and do not print a spinach mean. The highest total arsenic in that survey was cucumber, 0.436 ± 0.145 µg/g dry weight. The methods state that inorganic and organic arsenic were not separated. [[sources/saleem2025-nd-vegetables-hra]]

Clair-Caliot and colleagues grew spinach in a greenhouse in Ouagadougou and irrigated with arsenate at 0, 100, 500, and 1000 µg/L. At 500 µg/L, spinach leaves were 6.6 ± 0.5 µg/g dry mass. Across the spiked irrigation levels the spinach edible-part average was 8.1 ± 5.6 µg/g dry mass. The design used six replicates. The note states that speciation was not performed. These are experimental doses, not market spinach. Cooking results are under processing. [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina]]

Joseph and colleagues report spinach-leaf total arsenic of 0.025 ± 0.011 mg/kg in oven-dried material at Gobbiya Dam, with n=3 replicate measurements and the independent field-sample count unspecified. Arsenic species were not separated. [[sources/joseph2025-gobbiya-dam-vegetable-metals]] Martin-Leon and colleagues analyzed 30 spinach samples among 244 ready-to-eat leafy vegetables in the Canary Islands. The abstract ranks cadmium, then arsenic, then lead among toxic elements in that leafy set, and it does not print a spinach median for arsenic. [[sources/martin-leon2023-canary-leafy-vegetables-elements]] Wang and colleagues report a vegetable category of cabbage, cauliflower, and spinach together (n=18) and do not split spinach out, so that category mean is not a spinach concentration. [[sources/wang2023-toxic-metals-daily-diet-ningxia]] Sadee measured arsenic in ten Erbil vegetables including spinach and prints only the cross-vegetable dry-weight range, 0.160 to 0.436 µg/g, plus recoveries on a spinach certified reference material. That range is not a spinach result. [[sources/sadee2022-erbil-vegetables]]

| Source | Setting | n | Basis | What was measured |
| --- | --- | --- | --- | --- |
| FDA TDS table | US, raw spinach | 27 of 27 detected | FDA sample basis | Total arsenic 3.1 to 8.8 µg/kg; reporting limit 3 µg/kg |
| Clair-Caliot 2021 | Greenhouse, arsenate irrigation at 500 µg/L | 6 replicates in the design | Dry mass | Total arsenic 6.6 ± 0.5 µg/g in leaves |
| Joseph 2025 | Gobbiya Dam, Nigeria | 3 replicate measurements | Oven-dried leaves | Total arsenic 0.025 ± 0.011 mg/kg |
| Saleem 2025 | North Dakota | 5 spinach samples for other metals | Dry weight | No spinach total-arsenic mean printed |
| Martin-Leon 2023 | Canary Islands, ready to eat | 30 spinach samples | Not stated for the toxic elements | No spinach arsenic median printed |
| Israel regulation page | Fruits and vegetables | Not a survey | Product as placed on the market | Inorganic arsenic maximum level 0.06 mg/kg; total arsenic 1 mg/kg |

## Mercury

Total mercury in US raw spinach is mostly not detected. The Total Diet Study table shows 3 of 27 composites detected, detected values 1 to 1.1 µg/kg, reporting limit 1 µg/kg. Not detected is not a measured zero. [[sources/fda2022-tds-elements-fy2018-fy2020]] Saleem and colleagues report spinach mercury of 0.0113 ± 0.0035 µg/g dry weight (11.3 ± 3.5 µg/kg), n=5, the highest of 13 vegetables, by direct mercury analysis rather than the ICP-MS panel. [[sources/saleem2025-nd-vegetables-hra]]

Other notes are higher and are not fresh-weight US composites. Kurniawati and colleagues report Jakarta market spinach at 0.07 ± 0.003 mg/kg total mercury on a wet basis (70 µg/kg), with water spinach a separate row at 0.04 ± 0.03 mg/kg. Ghasemidehkordi and colleagues report *Spinacia oleracea* in Markazi at a dry-weight mean of 36.13 µg/kg (SD 20.45, minimum 10.00, maximum 69.28, n=10). Abubakar and colleagues report a dried-leaf mean of 3.83 mg/kg mercury in sewage-irrigated Faisalabad spinach, not speciated. [[sources/kurniawati2021-jakarta-staple-foods-naa]] [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg]] [[sources/abubakar2025-faisalabad-sewage-vegetables]] No methylmercury concentration in spinach is printed in these notes. The Israel regulation page's fruit-and-vegetable total-mercury maximum level is 0.03 mg/kg (30 µg/kg) as placed on the market. [[regulations/israel-moh-fcs-2016-heavy-metals-tin-food-guidelines]]

| Source | Setting | n | Basis | Spinach mercury |
| --- | --- | --- | --- | --- |
| FDA TDS table | US, raw | 27 composites; 3 detected | FDA sample basis | Detected 1 to 1.1 µg/kg; reporting limit 1 µg/kg |
| Saleem 2025 | North Dakota | 5 | Dry weight | 0.0113 ± 0.0035 µg/g |
| Kurniawati 2021 | Jakarta markets | Mean ± SD; five markets in the study | Wet weight | 0.07 ± 0.003 mg/kg; water spinach is a different row |
| Ghasemidehkordi 2018 | Markazi | 10 | Dry weight | Mean 36.13 µg/kg; maximum 69.28 µg/kg |
| Abubakar 2025 | Faisalabad | Three plants | Dry weight | Mean 3.83 mg/kg; species not separated |

## Nickel

EU nickel for leafy vegetables other than fresh herbs is 0.50 mg/kg wet weight from 1 July 2025, which is 500 µg/kg. [[sources/eu-2024-1987-nickel-maximum-levels]] US raw spinach in the Total Diet Study was detected in 24 of 27 composites, detected values 46 to 220 µg/kg, reporting limit 40 µg/kg. [[sources/fda2022-tds-elements-fy2018-fy2020]] Saleem and colleagues report spinach nickel of 0.342 ± 0.070 µg/g dry weight, n=5, which is the low end of that survey's vegetable range, not the high end. [[sources/saleem2025-nd-vegetables-hra]]

Sultana and colleagues report a four-phase dry-weight mean of 0.73 mg/kg in Dhaka spinach (phase values 1.70, 0, 0.30, 0.90). Naser and colleagues report spinach-leaf nickel of 5.48 ± 0.47 µg/g dry weight in a low-pollution Gazipur field, 24.6 ± 2.23 µg/g in a medium-pollution area, and 31.9 ± 3.38 µg/g in a high-pollution area. Pal and colleagues report spinach nickel of 2.45 ± 0.86 mg/kg from domestic-wastewater irrigation in Hisar, on oven-dried tissue, five samples assayed in triplicate. [[sources/sultana2022-dhaka-root-leafy-vegetables]] [[sources/naser2018-leafy-vegetables-bangladesh-metals]] [[sources/pal2017-wastewater-vegetables-heavy-metals]]

Imongben and colleagues report a spinach row of 0.79 ± 0.08 mg/kg nickel. The note says the basis is not explicit and treats the values as dry weight because the vegetables were oven-dried and pelletized for X-ray fluorescence. Martin-Leon and colleagues say spinach had the highest nickel in their Canary Islands leafy set and do not print the spinach median. Wang's mixed cabbage, cauliflower, and spinach category is not used as a spinach nickel number. [[sources/imongben2026-kaduna-vegetables-hra]] [[sources/martin-leon2023-canary-leafy-vegetables-elements]] [[sources/wang2023-toxic-metals-daily-diet-ningxia]]

| Source | Setting | n | Basis | Spinach nickel |
| --- | --- | --- | --- | --- |
| FDA TDS table | US, raw | 27 composites; 24 detected | FDA sample basis | Detected 46 to 220 µg/kg; reporting limit 40 µg/kg |
| Saleem 2025 | North Dakota | 5 | Dry weight | 0.342 ± 0.070 µg/g |
| Sultana 2022 | Dhaka | Four phases | Dry weight | Mean 0.73 mg/kg |
| Naser 2018 | Gazipur gradient | Triplicate analysis | Dry weight | 5.48, 24.6, and 31.9 µg/g from low to high pollution |
| EU 2024/1987 | Leafy vegetables except fresh herbs | Not a survey | Wet weight | Maximum level 0.50 mg/kg from 1 July 2025 |

## Aluminum

See and colleagues report spinach aluminum of 41.37 ± 8.53 mg/kg fresh weight, n=3, the highest of four leafy vegetables from Pasar Borong Selangor, with iron also highest in spinach at 13.59 ± 4.73 mg/kg fresh weight. Cadmium, chromium, and lead were not detected in that set. [[sources/see2025-malaysia-leafy-vegetables-icp-oes]] Martin-Leon and colleagues state that spinach had the highest concentration of potentially toxic elements including aluminum, chromium, and nickel in 30 spinach samples among 244 ready-to-eat leafy vegetables. The transcribed spinach medians are for iron (38,743 ng/g), zinc (3748 ng/g), and copper (698.1 ng/g). No aluminum median and no wet-versus-dry statement for those medians are in the note. [[sources/martin-leon2023-canary-leafy-vegetables-elements]]

The EUFIC question-and-answer page lists spinach, with mushrooms, radish, and lettuce, among vegetables that take aluminum up from soil and water. It prints no spinach concentration. It does print the EFSA tolerable weekly intake of 1 mg aluminum per kg body weight per week and the JECFA provisional tolerable weekly intake of 2 mg per kg body weight per week. [[sources/efsa2021-aluminium-food-qa]] No spinach aluminum maximum level is transcribed on the regulation pages used for the limits section. The Total Diet Study block on this page does not include aluminum. Wang's mixed vegetable category is not used as a spinach aluminum number. [[sources/wang2023-toxic-metals-daily-diet-ningxia]]

| Source | Setting | n | Basis | Spinach aluminum |
| --- | --- | --- | --- | --- |
| See 2025 | Selangor | 3 | Fresh weight | 41.37 ± 8.53 mg/kg |
| Martin-Leon 2023 | Canary Islands | 30 | Not stated for aluminum | Named as the highest in the leafy set; median not transcribed |
| EUFIC 2021 Q&A | Dietary-source summary | No samples | Not a concentration | Spinach listed as a soil-uptake food; no µg/kg value |

## Chromium

Chromium in these notes is total chromium. None of them report hexavalent chromium in spinach, so a total-chromium result is not a hexavalent-chromium result.

US raw spinach in the Total Diet Study was detected in 19 of 27 composites, detected values 67 to 400 µg/kg, reporting limit 50 µg/kg. [[sources/fda2022-tds-elements-fy2018-fy2020]] Saleem and colleagues report a spinach row of 0.179 ± 0.063 µg/g dry weight, n=5, labeled the highest total chromium of 13 vegetables. The same note's survey-wide sentence prints a total-chromium maximum in kale of 0.114 µg/g and a range whose upper end is 0.179 µg/g. Both statements stay in the record. See and colleagues did not detect chromium in three fresh-weight spinach samples; the detection limit stated for chromium is under 0.01 mg/kg. [[sources/saleem2025-nd-vegetables-hra]] [[sources/see2025-malaysia-leafy-vegetables-icp-oes]]

Sultana and colleagues report a four-phase dry-weight mean of 2.23 mg/kg (phase values 1.40, 2.50, 1.70, 3.30). Kurniawati and colleagues report 0.10 ± 0.05 mg/kg wet weight in Jakarta spinach, and 0.02 ± 0.01 mg/kg in water spinach, which is a different plant. Imongben and colleagues report 28.8 ± 0.26 mg/kg on the presumed dry-weight X-ray fluorescence basis. That figure is not pooled with the Total Diet Study. [[sources/sultana2022-dhaka-root-leafy-vegetables]] [[sources/kurniawati2021-jakarta-staple-foods-naa]] [[sources/imongben2026-kaduna-vegetables-hra]]

| Source | Setting | n | Basis | Spinach chromium |
| --- | --- | --- | --- | --- |
| FDA TDS table | US, raw | 27 composites; 19 detected | FDA sample basis | Detected 67 to 400 µg/kg; reporting limit 50 µg/kg; total chromium |
| Saleem 2025 | North Dakota | 5 | Dry weight | 0.179 ± 0.063 µg/g total chromium |
| See 2025 | Selangor | 3 | Fresh weight | Not detected; detection limit under 0.01 mg/kg |
| Sultana 2022 | Dhaka | Four phases | Dry weight | Mean 2.23 mg/kg |
| Kurniawati 2021 | Jakarta | Mean ± SD | Wet weight | 0.10 ± 0.05 mg/kg; water spinach 0.02 ± 0.01 mg/kg |
| Imongben 2026 | Kaduna markets | Mean ± SD | Presumed dry weight | 28.8 ± 0.26 mg/kg |

## Tin

No spinach tin concentration is printed in the notes used here. Chekri and colleagues report tin in French infant-food categories, including a fruit-puree mean, and the source note does not isolate spinach, so those means are not spinach results. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] EU inorganic tin at 200 mg/kg applies to canned food other than the listed exceptions, and the Australia New Zealand source note sets 250 mg/kg for all canned foods. Neither row is a fresh or frozen spinach maximum level. [[sources/eu-2023-915-contaminants-maximum-levels]] [[sources/fsanz2024-schedule-19-contaminants]] The snapshot data gap for tin matches that absence. It is not filled from a canned-food limit or from a mixed puree.

## Uranium

The fiscal year 2018 to 2020 Total Diet Study detected uranium in all 27 raw-spinach composites, at 1.1 to 12 µg/kg, reporting limit 1 µg/kg. [[sources/fda2022-tds-elements-fy2018-fy2020]] That is a surveillance range, not a synthesized typical or upper-tail value, which is why the snapshot still reads as a data gap. No vegetable uranium maximum level is transcribed on the regulation pages used above. No second spinach uranium dataset is cited here.

## Other reported metals

Iron, copper, zinc, cobalt, and manganese are outside the ten-metal snapshot and are reported only where a note gives a spinach row. See and colleagues: iron 13.59 ± 4.73 mg/kg fresh weight, n=3. Salawu and colleagues: spinach iron 25.666 ± 0.0011, copper 1.934 ± 0.0007, and zinc 1.842 ± 0.0003 mg/kg dry weight, triplicate measurements, with irrigation-water lead 1.639 ± 0.0016 mg/L and cadmium 0.037 ± 0.0021 mg/L. Adebayo and colleagues, African spinach (*Amaranthus caudatus* in the source note), dried analytical basis: copper 7.70 ± 0.00 and manganese 12.65 ± 0.00 mg/kg, with lead 6.60 ± 0.00 mg/kg. Sharma and colleagues: spinach cobalt 92 mg/kg at site 1 and 130.67 mg/kg at site 3, and copper 80.33 mg/kg at site 1, dry weight, wastewater and drain-side fields in Amritsar, triplicate edible portions. [[sources/see2025-malaysia-leafy-vegetables-icp-oes]] [[sources/salawu2015-spinach-irrigation-metals]] [[sources/adebayo2020-wastewater-irrigated-spinach]] [[sources/sharma2016-spinach-wastewater-metals]]

Fatai and colleagues report African spinach (*Amaranthus hybridus*) at 0.206 mg/kg copper, 0.619 mg/kg nickel, 0.231 mg/kg zinc, 0.210 mg/kg cadmium, 0.073 mg/kg chromium, and 0.290 mg/kg lead. Samples were dried before digestion. The note does not state a fresh-weight conversion. Two locations are described, not a distribution. [[sources/fatai2024-african-spinach-tomato-nigeria]] Hossain and colleagues measured red spinach, a separate leafy crop in a 64-district Bangladesh survey. Red-spinach lead was above the authors' comparison standard in 22 of 61 samples, and the dry-weight lead maximum was 38.439 µg/g. The dry-weight cadmium maximum was 5.323 µg/g. Those figures are not *Spinacia oleracea*. [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr]]

## Processing effects

Drying changes concentration per unit mass without a study having to move metal into or out of the leaf. The two moisture figures on this page, 7.7 percent dry matter in the Seyfferth review and 93.4 ± 1.36 percent water in Jakarta spinach, are study-specific. They are not applied to anyone else's table. [[sources/seyfferth2024-spinach-cd-pb-review]] [[sources/kurniawati2021-jakarta-staple-foods-naa]]

Cooking evidence that is actually in the notes is about arsenic under experimental conditions, not about cadmium in market spinach. Clair-Caliot and colleagues report that cooking contaminated vegetables in arsenic-free water reduced arsenic content by an average of 39 percent, and that steaming reduced arsenic 8-fold to 18-fold compared with boiling. Irrigation water in that trial was dosed with arsenate. The values are total arsenic. The note does not give a spinach-only steaming factor separate from the study-wide contrast. [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina]] Schaefer and colleagues list boiled spinach at 117 µg/kg mean lower-bound cadmium. That is an as-consumed concentration in a ranked food list, not a before-and-after cooking trial. [[sources/schaefer2020-cadmium-mitigation-strategies]]

Washing is part of the EU vegetable-row basis (wet weight after washing and separation of the edible part) and part of several study methods. The Seyfferth review does not print a percent removal of lead or cadmium by washing. This page does not add one. [[sources/seyfferth2024-spinach-cd-pb-review]] [[sources/eu-2023-915-contaminants-maximum-levels]]

## Ingredient-derivative risk

Spinach that is pureed for babies is a different legal object from raw spinach. The FDA lead action level of 10 µg/kg covers processed foods represented for children under two, including vegetables other than single-ingredient root vegetables, and it does not cover raw agricultural commodities. [[sources/fda-ctz-Pb-babyfood-2025]] EU 2023/915 sets lead at 0.020 mg/kg and cadmium at 0.040 mg/kg for baby food and processed cereal-based food for infants and young children, product as placed on the market, and inorganic arsenic at 0.020 mg/kg for baby food. [[sources/eu-2023-915-contaminants-maximum-levels]]

Barber and colleagues, in a 2023 US convenience survey of foods for babies, young children, and pregnant or nursing people, report that 18 of 20 puree or mixture products above the 95th percentile for cadmium contained tomato, spinach, or carrot. The note does not give a spinach-only concentration, and the survey was not weighted by sales. [[sources/barber2025-baby-food-elements-us]] Chekri and colleagues name spinach among ingredient drivers of a French infant total diet study and publish category means for soups, purees, and vegetable meals. Those means are not a spinach row and are not used as spinach concentrations. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]

## Mitigation options

Sourcing is the lever the US review can actually point at. Seyfferth and colleagues tie higher cadmium in newer Total Diet Study spinach to where the crop is grown, and they separate that pattern from lead, which fell over the same decades in the datasets they compile. A buyer comparing a fresh-weight specification with a dry-weight plot study is not yet comparing the same lot. [[sources/seyfferth2024-spinach-cd-pb-review]]

Agronomic evidence is real and narrow. The same review proposes chloride reduction in irrigation to limit cadmium bioavailability and does not deliver a field percent. Hussain and colleagues' high zinc rate lowered leaf cadmium relative to a lower zinc rate in spiked pots and is not a retail intervention with a finished-food endpoint. Sheikh and colleagues report that acidified biochar at the 1.20BC treatment improved growth and biochemical measures under cadmium stress in a four-replicate pot design. The source note supplies no edible-leaf cadmium concentration, so improved growth is not a harvest specification. [[sources/seyfferth2024-spinach-cd-pb-review]] [[sources/hussain2016-spinach-cadmium-zinc]] [[sources/sheikh2025-spinach-biochar-cadmium]]

Processing evidence that changes a measured food concentration is the Clair-Caliot cooking contrast for total arsenic, described above, under dosed irrigation. It is not a cadmium or lead process control. Testing is the control that matches the legal rows: the metal, the species, the basis, and the food form have to be the ones named in the limit. A total-arsenic result does not answer an inorganic-arsenic maximum level. A dry-weight plot result does not answer a wet-weight maximum level. [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina]]

## Testing notes

The US surveillance method detail lives in the Total Diet Study source record behind the table on this page. What this page can say from the generated table is the reporting limit and the detect count for each metal. A composite below the reporting limit is not a measured zero. [[sources/fda2022-tds-elements-fy2018-fy2020]]

Saleem and colleagues used microwave digestion and ICP-MS for most metals and direct mercury analysis for mercury, with NIST SRM 1567b wheat flour recovery above 85 percent for most elements. They did not speciate arsenic or chromium. See and colleagues used ICP-OES on fresh-weight tissue and state detection limits under 0.004 mg/kg for cadmium and lead and under 0.01 mg/kg for chromium and copper. [[sources/saleem2025-nd-vegetables-hra]] [[sources/see2025-malaysia-leafy-vegetables-icp-oes]] Sadee validated an ICP-MS method with spinach certified reference material GBW10015 and reports recoveries of 103, 105, 104, 96, and 109 percent for arsenic, cadmium, chromium, copper, and lead. That is method control, not a market-spinach concentration. [[sources/sadee2022-erbil-vegetables]]

Ghasemidehkordi and colleagues' note records an internal conflict between the printed lead detection limit and the limit of quantification. The spinach lead mean, standard deviation, and maximum are still the numbers in the table, and the quality-control conflict is why that row should not be averaged with a fresh-weight surveillance mean. [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg]] Species to keep split in any lot packet are inorganic arsenic versus total arsenic, methylmercury versus total mercury, and hexavalent chromium versus total chromium. This page has total-arsenic, total-mercury, and total-chromium numbers only.

## Evidence strength and disagreements

The strongest fresh-weight picture is the US Total Diet Study, read through the generated composite table and through the Seyfferth review's means and medians. Those two presentations answer different questions. The table's lead range is the detected composites. The review's mean includes results below detection. Both can be true. Neither is a dry-weight sewage-irrigation mean.

Direct conflicts, once basis is held still, are still large. Selangor fresh spinach (n=3) did not detect cadmium, lead, or chromium at the stated detection limits, while North Dakota dry spinach (n=5) sits at the top of that local survey for cadmium, lead, chromium, and mercury, and while US raw composites sit in a fresh-weight cadmium band of 100 to 400 µg/kg. Jakarta wet-weight total mercury, 0.07 mg/kg, is not the US detected band of 1 to 1.1 µg/kg. Markazi dry-weight lead has a standard deviation larger than its mean and a maximum of 8171.75 µg/kg. Those are different places, methods, and bases. They are not a single spinach distribution.

Legal rows also differ, and that is not a laboratory disagreement. EU spinach cadmium is 0.20 mg/kg. EU leaf-vegetable cadmium other than that row is 0.10 mg/kg. The Schedule 19 regulation page transcribes leafy-vegetable cadmium at 0.1 mg/kg. Codex leafy-vegetable cadmium is 0.2 mg/kg. Korea's excerpt is 0.2 mg/kg for spinach. Codex leafy-vegetable lead excludes spinach. The EU regulation page transcribes leaf-vegetable lead at 0.30 mg/kg. Korea's excerpt is 0.3 mg/kg for spinach. Schedule 19's regulation page transcribes 0.1 mg/kg lead for vegetables except brassicas.

Several routed notes do not contain a spinach-only concentration and are not used to fill a cell. Ullah and colleagues measured nine vegetables including spinach in D.I. Khan and print ranges for wastewater-irrigated sectors, not a spinach row. [[sources/ullah2022-khyber-vegetables-metals]] Ali and colleagues do not print a spinach-only lead value. Sadee, Chekri, Wang, Martin-Leon's toxic-element medians, and the EFSA 2009 occurrence tables are in the same class: the note names spinach, and the number a reader would want is not transcribed. Emmanuel and colleagues print one spinach row at Nomans-Land (cadmium 0.31, nickel 0.03, lead 0.13, manganese 1.72, chromium 0.42 mg/kg) in an edible-matrix table whose wet-versus-dry basis is not stated, beside other crops with a printed nickel value of -0.01 mg/kg. The negative values are a source-note problem for that table, so the spinach row is local context only. [[sources/emmanuel2025-kano-urban-vegetables-metals]]

## Health basis

Reference intakes are not spinach maximum levels. The 2009 EFSA opinion sets a cadmium tolerable weekly intake of 2.5 µg per kg body weight per week. [[sources/efsa-cadmium-contam-2009]] The Codex cadmium schedule, as transcribed, cites a JECFA provisional tolerable monthly intake of 25 µg per kg body weight per month. Those are different values. This page does not convert one into the other. [[sources/codex-cxs-193-1995]]

For lead, the Codex transcription records that JECFA withdrew the provisional tolerable weekly intake in 2010. The FDA baby-food guidance page states an interim reference level of 2.2 µg per day for children and states that no safe level of lead exposure has been identified for children's health. The interim reference level is an intake benchmark for that guidance. It is not a concentration limit for raw spinach. [[sources/codex-cxs-193-1995]] [[sources/fda-ctz-Pb-babyfood-2025]] For aluminum, the EUFIC page reports the EFSA weekly intake of 1 mg per kg body weight and the JECFA weekly intake of 2 mg per kg body weight. [[sources/efsa2021-aluminium-food-qa]] Hazard quotients in the field papers use those papers' own body weights and diets. They are not repeated here as pass-fail rules.

## Geographic evidence on spinach contamination

The studies below measured spinach, or a plant sold as spinach, together with soil or irrigation water, or along a pollution gradient. They support pathway questions. They are not a map of the retail supply, and crop is sometimes confounded with site. [[sources/abubakar2025-faisalabad-sewage-vegetables]] [[sources/joseph2025-gobbiya-dam-vegetable-metals]] [[sources/salawu2015-spinach-irrigation-metals]] [[sources/adebayo2020-wastewater-irrigated-spinach]] [[sources/naser2018-leafy-vegetables-bangladesh-metals]] [[sources/sharma2016-spinach-wastewater-metals]]

<table class="hmi-evidence-table">
<thead><tr><th scope="col">Study / location</th><th scope="col">Material / design</th><th scope="col">Main finding</th><th scope="col">Interpretation / limitation</th></tr></thead>
<tbody>
<tr><td data-label="Study / location"><a href="/sources/abubakar2025-faisalabad-sewage-vegetables">Abubakar et al., 2025</a> / Faisalabad, Pakistan</td><td data-label="Material / design">Sewage irrigation; dried spinach leaves, ICP-OES; three plants and three figure replicates. Spinach and cauliflower were at different sites.</td><td data-label="Main finding">Dried-leaf means, mg/kg: cadmium 3.58, cobalt 4.71, lead 6.13, chromium 9.43, mercury 3.83, copper 3.11, nickel 4.77.</td><td data-label="Interpretation / limitation">Dry weight only. No fresh-weight result, detection limit, recovery, or certified reference material. Mercury and chromium are not speciated.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/joseph2025-gobbiya-dam-vegetable-metals">Joseph et al., 2025</a> / Gobbiya Dam, Nigeria</td><td data-label="Material / design">Washed, oven-dried spinach leaves; atomic absorption; n=3 replicate measurements.</td><td data-label="Main finding">Leaf means, mg/kg dry material: total arsenic 0.025 ± 0.011, cadmium 0.075 ± 0.002, chromium 0.079 ± 0.008, lead 0.052 ± 0.004, nickel 0.298 ± 0.020.</td><td data-label="Interpretation / limitation">Independent field-sample count is unspecified. Arsenic and chromium species were not separated. Detection limits are absent.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/salawu2015-spinach-irrigation-metals">Salawu et al., 2015</a> / Gusau, Nigeria</td><td data-label="Material / design">Spinach and irrigation water; triplicate AAS; spinach shade-dried.</td><td data-label="Main finding">Spinach, mg/kg dry weight: lead 0.613 ± 0.0009, cadmium 0.022 ± 0.0014. Water, mg/L: lead 1.639 ± 0.0016, cadmium 0.037 ± 0.0021.</td><td data-label="Interpretation / limitation">Paired local context. Not a market distribution. Iron and copper in the leaf are higher than in the water; lead, cadmium, and zinc are higher in the water.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/adebayo2020-wastewater-irrigated-spinach">Adebayo et al., 2020</a> / Bauchi, Nigeria</td><td data-label="Material / design">Wastewater and African spinach (*Amaranthus caudatus*); edible parts washed, air-dried, and digested.</td><td data-label="Main finding">Spinach, mg/kg: cadmium 1.00, chromium 1.65, nickel 7.70, lead 6.60, each ± 0.00 as printed. Wastewater lead 0.02 µg/cm3.</td><td data-label="Interpretation / limitation">Not *Spinacia oleracea*. Dried analytical basis. No detection limit, replicate count, or moisture conversion.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/naser2018-leafy-vegetables-bangladesh-metals">Naser et al., 2018</a> / Gazipur, Bangladesh</td><td data-label="Material / design">*Spinacia oleracea* leaves on a three-level pollution gradient; oven-dried; AAS in triplicate.</td><td data-label="Main finding">Leaf nickel 5.48, 24.6, and 31.9 µg/g dry weight from low to high pollution. High-pollution lead 5.97 ± 0.30 and cadmium 1.02 ± 0.15 µg/g.</td><td data-label="Interpretation / limitation">Gradient evidence for leaves. Whole-plant means are a different tissue pool. Comparisons use the limits the authors cite, including a 1984 Codex figure, not the current CXS 193 rows above.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/sharma2016-spinach-wastewater-metals">Sharma et al., 2016</a> / Amritsar, India</td><td data-label="Material / design">Twelve vegetables, three sites, edible portions in triplicate; oven-dried before digestion.</td><td data-label="Main finding">Spinach cadmium 0.6 mg/kg at site 1, behind fenugreek at 0.8 mg/kg. Spinach cobalt 92 mg/kg at site 1 and 130.67 mg/kg at site 3.</td><td data-label="Interpretation / limitation">Dry-weight, contaminated-site context. Lead is discussed by the paper from a figure and is not given a spinach-only prose value in the note.</td></tr>
</tbody>
</table>

## Remediation studies: findings and limitations

Mitigation evidence is separated from the occurrence table above. A growth response, a spiked-pot zinc effect, and a reviewer's irrigation proposal do not establish a concentration in spinach offered for sale. [[sources/seyfferth2024-spinach-cd-pb-review]] [[sources/sheikh2025-spinach-biochar-cadmium]] [[sources/hussain2016-spinach-cadmium-zinc]] [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina]]

<table class="hmi-evidence-table">
<thead><tr><th scope="col">Study / location</th><th scope="col">Material / design</th><th scope="col">Main finding</th><th scope="col">Interpretation / limitation</th></tr></thead>
<tbody>
<tr><td data-label="Study / location"><a href="/sources/seyfferth2024-spinach-cd-pb-review">Seyfferth et al., 2024</a> / United States</td><td data-label="Material / design">Review of occurrence sets, including a 1980s paired survey described as n=105 and FDA Total Diet Study composites.</td><td data-label="Main finding">Cadmium moves root to shoot. Lead does not follow the same pattern in the review. Lower irrigation chloride is proposed to limit cadmium bioavailability.</td><td data-label="Interpretation / limitation">Not a treatment trial. No universal effect size. Paired modern soil data are limited.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/hussain2016-spinach-cadmium-zinc">Hussain et al., 2016</a> / Faisalabad glasshouse</td><td data-label="Material / design">Cadmium-spiked soil at 3 mg/kg, with zinc at 1:10 and 1:100 cadmium-to-zinc ratios.</td><td data-label="Main finding">Leaf cadmium 3.29, 3.67, and 1.96 mg/kg across those three treatments. The note states a 46.2 percent decrease for the high-zinc rate relative to the 1:10 rate.</td><td data-label="Interpretation / limitation">Spiked pots, not market spinach. Fresh-weight conversion is not stated. The moderate zinc rate did not lower leaf cadmium.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/sheikh2025-spinach-biochar-cadmium">Sheikh et al., 2025</a></td><td data-label="Material / design">Pot trial, cadmium stress, acidified biochar, completely randomized design, four replications.</td><td data-label="Main finding">The 1.20BC treatment improved growth and biochemical parameters under cadmium stress.</td><td data-label="Interpretation / limitation">No edible-leaf concentration is in the source note. Growth is not a food specification.</td></tr>
<tr><td data-label="Study / location"><a href="/sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina">Clair-Caliot et al., 2021</a> / Ouagadougou greenhouse</td><td data-label="Material / design">Arsenate irrigation at four concentrations; cooking comparisons on the experimental vegetables.</td><td data-label="Main finding">Arsenic-free cooking water reduced arsenic by an average of 39 percent. Steaming reduced arsenic 8-fold to 18-fold versus boiling. Spinach leaves at 500 µg/L were 6.6 ± 0.5 µg/g dry mass.</td><td data-label="Interpretation / limitation">Total arsenic under a dosed irrigation regime. Not a market process and not a cadmium result. The steaming contrast is study-wide in the note.</td></tr>
</tbody>
</table>

## What remains uncertain

Independent field-sample counts, detection limits, and moisture are missing from several local studies, so their dry-weight means cannot be ranked against a wet-weight maximum level. Total arsenic, total mercury, and total chromium remain unspeciated in the spinach measurements on this page. Spinach medians for aluminum, chromium, and nickel in the Canary Islands set, and spinach-only rows for Erbil, D.I. Khan, the French infant total diet categories, and the 2009 EFSA occurrence opinion, are not in the notes. The biochar growth result still has no harvested-leaf cadmium figure. A retail specification that needs inorganic arsenic, methylmercury, hexavalent chromium, or tin in spinach does not yet have a concentration in this record.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to a source record with bibliographic details, reported findings, and document provenance.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/eu-2023-915-contaminants-maximum-levels|Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006]]<span class="hmi-ref-meta">European Commission · Official Journal of the European Union · 2023 · [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915)</span><span class="hmi-ref-tag">Regulation</span>
3. [[sources/eu-2024-1987-nickel-maximum-levels|Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs]]<span class="hmi-ref-meta">European Commission · Official Journal of the European Union, L series, 2024/1987 (31.7.2024) · 2024 · [data.europa.eu](http://data.europa.eu/eli/reg/2024/1987/oj)</span><span class="hmi-ref-tag">Regulation</span>
4. [[sources/mfds2012-food-code-heavy-metals|Article 2. Common Standards and Specifications for General Foods]]<span class="hmi-ref-meta">Korea Food and Drug Administration · Korean Food Code · 2012</span><span class="hmi-ref-tag">Regulation</span>
5. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/fsanz2024-schedule-19-contaminants|Australia New Zealand Food Standards Code - Schedule 19 - Maximum levels of contaminants and natural toxicants]]<span class="hmi-ref-meta">Food Standards Australia New Zealand · Federal Register of Legislation, Authorised Version F2024C00908 · 2024 · [www.legislation.gov.au](https://www.legislation.gov.au/F2015L00454/latest)</span><span class="hmi-ref-tag">Regulation</span>
7. [[sources/israelmoh2016-heavy-metals-tin-food-guidelines|עדכון קווים מנחים לכמות מרבית של מתכות כבדות ובדיל במזון מיום 01.05.2016]]<span class="hmi-ref-meta">Israel Ministry of Health - National Food Service · Israel Ministry of Health Food Control Services · 2016 · [www.gov.il](https://www.gov.il/BlobFolder/policy/fcs-reg-01022007/he/files_databases_fcs_regulations_Reg_01022007.pdf)</span><span class="hmi-ref-tag">Regulation</span>
8. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
9. [[sources/seyfferth2024-spinach-cd-pb-review|Mitigating Toxic Metal Exposure Through Leafy Greens: A Comprehensive Review Contrasting Cadmium and Lead in Spinach]]<span class="hmi-ref-meta">Seyfferth AL, Limmer MA, Runkle BRK, and Chaney RL · GeoHealth · 2024 · [doi.org/10.1029/2024GH001081](https://doi.org/10.1029/2024GH001081)</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/salawu2015-spinach-irrigation-metals|Determination of some selected heavy metals in spinach and irrigated water from Samaru Area within Gusau Metropolis in Zamfara State, Nigeria]]<span class="hmi-ref-meta">Salawu K, Barau MM, Mohammed D, Mikailu DA, Abdullahi BH, and Uroko RI · Journal of Toxicology and Environmental Health Sciences · 2015 · [doi.org/10.5897/JTEHS2015.0339](https://doi.org/10.5897/JTEHS2015.0339)</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/adebayo2020-wastewater-irrigated-spinach|Levels of heavy metals and their health risk assessment from wastewater irrigated spinach in railway quarters, Bauchi, Bauchi state, Nigeria]]<span class="hmi-ref-meta">Adebayo RK, Hassan UF, Adamu HM, Hassan HF, Baba H, and Ajiya DA · International Journal of Advanced Chemistry Research · 2020 · [doi.org/10.33545/26646781.2020.v2.i2a.22](https://doi.org/10.33545/26646781.2020.v2.i2a.22)</span><span class="hmi-ref-tag">Peer-reviewed</span>
12. [[sources/abubakar2025-faisalabad-sewage-vegetables|Effects of sewage water irrigation on heavy metals accumulation in vegetables in peri-urban areas of Faisalabad, Pakistan]]<span class="hmi-ref-meta">Muhammad Abubakar, Basit Haider, Hadeeqa Arshad, Tufail Shah, Ameer Khan, Hummera Nawaz, et al. · Agricultural Research Reports 3(1):46–57 · 2025 · [doi.org/10.54219/arr.03.1.2025.418](https://doi.org/10.54219/arr.03.1.2025.418)</span><span class="hmi-ref-tag">Peer-reviewed</span>
13. [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina|Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso]]<span class="hmi-ref-meta">Clair-Caliot G, Marks SJ, Hug SJ, Bretzler A, N'guessan ND, Tihe SFK, et al. · Frontiers in Water · 2021 · [doi.org/10.3389/frwa.2021.667308](https://doi.org/10.3389/frwa.2021.667308)</span><span class="hmi-ref-tag">Peer-reviewed</span>
14. [[sources/ali2022-lead-wastewater-crops-meta|Meta-analysis of public health risks of lead accumulation in wastewater, irrigated soil, and crops nexus]]<span class="hmi-ref-meta">Ali AS, Bayih AA, and Gari SR · Frontiers in Public Health · 2022 · [doi.org/10.3389/fpubh.2022.977721](https://doi.org/10.3389/fpubh.2022.977721)</span><span class="hmi-ref-tag">Peer-reviewed</span>
15. [[sources/hussain2016-spinach-cadmium-zinc|The Cd:Zn ratio in a soil affects Cd toxicity in spinach (Spinacea oleracea L.)]]<span class="hmi-ref-meta">Tajammal Hussain, Ghulam Murtaza, Abdul Ghafoor, and Mumtaz Akhtar Cheema · Pakistan Journal of Agricultural Sciences · 2016 · [doi.org/10.21162/PAKJAS/16.5216](https://doi.org/10.21162/PAKJAS/16.5216)</span><span class="hmi-ref-tag">Peer-reviewed</span>
16. [[sources/kurniawati2021-jakarta-staple-foods-naa|Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis]]<span class="hmi-ref-meta">Kurniawati S, Damastuti E, Adventini N, Syahfitri WYN, Kusmartini I, Lestiani DD, et al. · AIP Conference Proceedings (4th International Seminar on Chemistry) · 2021 · [doi.org/10.1063/5.0053376](https://doi.org/10.1063/5.0053376)</span><span class="hmi-ref-tag">Peer-reviewed</span>
17. [[sources/saleem2025-nd-vegetables-hra|Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables]]<span class="hmi-ref-meta">Saleem M, Wang Y, Pierce D, Sens DA, Somji S, and Garrett SH · Foods · 2025 · [doi.org/10.3390/foods14132264](https://doi.org/10.3390/foods14132264)</span><span class="hmi-ref-tag">Peer-reviewed</span>
18. [[sources/see2025-malaysia-leafy-vegetables-icp-oes|Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia]]<span class="hmi-ref-meta">See SN, Pak Dek MS, Sanny M, Shukri R, and Ramli NS · Pertanika Journal of Tropical Agricultural Science · 2025 · [doi.org/10.47836/pjtas.48.1.12](https://doi.org/10.47836/pjtas.48.1.12)</span><span class="hmi-ref-tag">Peer-reviewed</span>
19. [[sources/sultana2022-dhaka-root-leafy-vegetables|Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks]]<span class="hmi-ref-meta">Sultana R, Tanvir RU, Hussain KA, Chamon AS, and Mondol MN · Environmental Systems Research · 2022 · [doi.org/10.1186/s40068-022-00261-9](https://doi.org/10.1186/s40068-022-00261-9)</span><span class="hmi-ref-tag">Peer-reviewed</span>
20. [[sources/abdolahpour2023-heavy-metals-babol-vegetables|The health risk assessment of heavy metals in vegetables grown in Babol city, Iran]]<span class="hmi-ref-meta">Abdolahpour Alamdari H, Sleman Ali H, Sadighara P, Jahed Khaniki G, Shahsavanpoor Landeh K, and Dehghani MH · International Archives of Health Sciences · 2023 · [doi.org/10.48307/IAHSJ.2023.177176](https://doi.org/10.48307/IAHSJ.2023.177176)</span><span class="hmi-ref-tag">Peer-reviewed</span>
21. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment]]<span class="hmi-ref-meta">Wu Z · International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 · 2024 · [doi.org/10.62051/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/10.62051/ijnres.v2n1.21)</span><span class="hmi-ref-tag">Peer-reviewed</span>
22. [[sources/schaefer2020-cadmium-mitigation-strategies|Cadmium: Mitigation strategies to reduce dietary exposure]]<span class="hmi-ref-meta">Schaefer HR, Dennis S, and Fitzpatrick S · Journal of Food Science · 2020 · [doi.org/10.1111/1750-3841.14997](https://doi.org/10.1111/1750-3841.14997)</span><span class="hmi-ref-tag">Review</span>
23. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
24. [[sources/zemanova2015-spinach-cadmium-amino-fatty-acids|Changes in the contents of amino acids and the profile of fatty acids in response to cadmium contamination in spinach]]<span class="hmi-ref-meta">Zemanova V, Pavlik M, Pavlikova D, and Kyjakova P · Plant, Soil and Environment · 2015 · [doi.org/10.17221/274/2015-PSE](https://doi.org/10.17221/274/2015-PSE)</span><span class="hmi-ref-tag">Peer-reviewed</span>
25. [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp|A novel approach for the identification of cadmium-chelating compounds in plant-based foods using SEC-ICP-MS/MS and SEC-QTOF-MS]]<span class="hmi-ref-meta">Cardini J, Sloth JJ, and Loeschner K · Analytical and Bioanalytical Chemistry · 2025 · [doi.org/10.1007/s00216-025-05931-y](https://doi.org/10.1007/s00216-025-05931-y)</span><span class="hmi-ref-tag">Peer-reviewed</span>
26. [[sources/joseph2025-gobbiya-dam-vegetable-metals|Assessment of the Level of Heavy Metals in Irrigation Water, Farm Soil, and Vegetables Grown in Gobbiya Dam, Bogoro Local Government Area Bauchi State, Nigeria]]<span class="hmi-ref-meta">John Joseph, Toma Buba, Jalo Enoch, and Ayuba Kaluri · Journal of Energy Technology and Environment 7(4):79–92 · 2025 · [doi.org/10.37933/jete/7.4.2025.2568](https://doi.org/10.37933/jete/7.4.2025.2568)</span><span class="hmi-ref-tag">Peer-reviewed</span>
27. [[sources/martin-leon2023-canary-leafy-vegetables-elements|Evaluation of essential, toxic and potentially toxic elements in leafy vegetables grown in the Canary Islands]]<span class="hmi-ref-meta">Veronica Martin-Leon, Carmen Rubio, Angel Rodriguez-Hernandez, Manuel Zumbado, Andrea Acosta-Dacal, Luis Alberto Henriquez-Hernandez, et al. · Toxics · 2023 · [doi.org/10.3390/toxics11050442](https://doi.org/10.3390/toxics11050442)</span><span class="hmi-ref-tag">Peer-reviewed</span>
28. [[sources/wang2023-toxic-metals-daily-diet-ningxia|Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China]]<span class="hmi-ref-meta">Wang Y, Cao D, Qin J, Zhao S, Lin J, Zhang X, et al. · Archives of Environmental Contamination and Toxicology · 2023 · [doi.org/10.1007/s12011-022-03538-3](https://doi.org/10.1007/s12011-022-03538-3)</span><span class="hmi-ref-tag">Peer-reviewed</span>
29. [[sources/sadee2022-erbil-vegetables|Determination of trace metals in vegetables using ICP-MS]]<span class="hmi-ref-meta">Sadee B A · ZANCO Journal of Pure and Applied Sciences · 2022 · [doi.org/10.21271/zjpas.34.3.9](https://doi.org/10.21271/zjpas.34.3.9)</span><span class="hmi-ref-tag">Peer-reviewed</span>
30. [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg|Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment]]<span class="hmi-ref-meta">Bahareh Ghasemidehkordi, Ali Akbar Malekirad, Habibollah Nazem, Mohammad Fazilati, Hossein Salavati, Nabi Shariatifar, et al. · Food and Chemical Toxicology 113:204-210 · 2018 · [doi.org/10.1016/j.fct.2018.01.048](https://doi.org/10.1016/j.fct.2018.01.048)</span><span class="hmi-ref-tag">Peer-reviewed</span>
31. [[sources/naser2018-leafy-vegetables-bangladesh-metals|Heavy metal accumulation in leafy vegetables grown in industrial areas under varying levels of pollution]]<span class="hmi-ref-meta">Naser HM, Rahman MZ, Sultana S, Quddus MA, and Hossain MA · Bangladesh Journal of Agricultural Research · 2018 · [doi.org/10.3329/bjar.v43i1.36157](https://doi.org/10.3329/bjar.v43i1.36157)</span><span class="hmi-ref-tag">Peer-reviewed</span>
32. [[sources/pal2017-wastewater-vegetables-heavy-metals|Heavy Metals in Soil and Vegetables and their Effect on Health]]<span class="hmi-ref-meta">Pal Jitender, Bishnoi Mukal, and Kaur Mandeep · International Journal of Engineering Science Technologies · 2017 · [doi.org/10.29121/IJOEST.v2.i1.2017.03](https://doi.org/10.29121/IJOEST.v2.i1.2017.03)</span><span class="hmi-ref-tag">Peer-reviewed</span>
33. [[sources/imongben2026-kaduna-vegetables-hra|Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria]]<span class="hmi-ref-meta">Imongben CO, Tomori WB, Umoru PE, and Oyerinde WA · World Nutrition · 2026 · [doi.org/10.26596/wn.20261718-18](https://doi.org/10.26596/wn.20261718-18)</span><span class="hmi-ref-tag">Peer-reviewed</span>
34. [[sources/efsa2021-aluminium-food-qa|Aluminium in Food (Q&A): Sources, Safety and Regulations]]<span class="hmi-ref-meta">EUFIC · 2021 · [www.eufic.org](https://www.eufic.org/en/food-safety/article/aluminium-in-food-qa-sources-safety-and-regulations)</span><span class="hmi-ref-tag">NGO</span>
35. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Peer-reviewed</span>
36. [[sources/sharma2016-spinach-wastewater-metals|Heavy metals in vegetables: screening health risks involved in cultivation along wastewater drain and irrigating with wastewater]]<span class="hmi-ref-meta">Sharma A, Katnoria J K, and Nagpal A K · SpringerPlus · 2016 · [doi.org/10.1186/s40064-016-2129-1](https://doi.org/10.1186/s40064-016-2129-1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
37. [[sources/fatai2024-african-spinach-tomato-nigeria|Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria]]<span class="hmi-ref-meta">Fatai MI, Ibrahim M, Ibrahim MA, Ndriza BJ, Matthew EO, Saheed MB, et al. · Journal of Chemistry and Nutritional Biochemistry · 2024 · [doi.org/10.48185/jcnb.v5i2.1175](https://doi.org/10.48185/jcnb.v5i2.1175)</span><span class="hmi-ref-tag">Peer-reviewed</span>
38. [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr|Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh]]<span class="hmi-ref-meta">Hossain AMMM, Islam MS, Mamun MM, Al-Jonaed HM, Imran M, Rahman MH, et al. · SpringerPlus · 2016 · [doi.org/10.1186/s40064-016-3458-9](https://doi.org/10.1186/s40064-016-3458-9)</span><span class="hmi-ref-tag">Peer-reviewed</span>
39. [[sources/barber2025-baby-food-elements-us|Toxic elements in baby and young children's foods in the US and correlation to ingredients]]<span class="hmi-ref-meta">Charles A. Barber, Marc Boyer, Jake A. Carter, Patrick J. Gray, Jennifer Fong Sam, and Mesay M. Wolle · Food Additives & Contaminants: Part B · 2025 · [doi.org/10.1080/19393210.2025.2591749](https://doi.org/10.1080/19393210.2025.2591749)</span><span class="hmi-ref-tag">Peer-reviewed</span>
40. [[sources/sheikh2025-spinach-biochar-cadmium|Minimization of cadmium toxicity and improvement in growth and biochemical attributes of spinach by using acidified biochar]]<span class="hmi-ref-meta">Laraib Sheikh, Nargis Naz, Sadaf Oranab, Uzma Younis, Abdullah A. Alarfaj, Sulaiman Ali Alharbi, et al. · Scientific Reports · 2025 · [doi.org/10.1038/s41598-025-90746-1](https://doi.org/10.1038/s41598-025-90746-1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
41. [[sources/ullah2022-khyber-vegetables-metals|Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan]]<span class="hmi-ref-meta">Ullah H, Khaliq M, Ullah N, Iqbal A, Fozia, and Ullah I · Biological Trace Element Research · 2022 · [doi.org/10.1007/s12011-021-02892-y](https://doi.org/10.1007/s12011-021-02892-y)</span><span class="hmi-ref-tag">Peer-reviewed</span>
42. [[sources/emmanuel2025-kano-urban-vegetables-metals|Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria]]<span class="hmi-ref-meta">Bernard Emmanuel · ChemClass Journal · 2025 · [doi.org/10.33003/chemclass-2025-0902/184](https://doi.org/10.33003/chemclass-2025-0902/184)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/hossen2026-noakhali-vegetables-heavy-metals\|Hossen et al. 2026]]. *Assessment of heavy metal levels and associated health risks linked to vegetables grown in Noakhali region of Bangladesh*, Environmental Health Insights | 2026 | Peer-reviewed | BD tAs, Pb, Cd, Cr, Fe, Cu occurrence in Fifty-four samples from nine integrated farms in Noakhali, Bangladesh: nine vegetable samples and nine corresponding soil samples, each... (n=54) |
| 2 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 3 | [[sources/abubakar2025-faisalabad-sewage-vegetables\|Abubakar et al. 2025]]. *Effects of sewage water irrigation on heavy metals accumulation in vegetables in peri-urban areas of Faisalabad, Pakistan*, Agricultural Research Reports 3(1):46–57 | 2025 | Peer-reviewed | PK Cd, Co, Pb, Cr, tHg, Cu, Ni occurrence in Three representative plants per sampled crop/site; spinach at Ghulam Muhammad Abad and cauliflower at Chokera, Faisalabad |
| 4 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 5 | [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|Cardini et al. 2025]]. *A novel approach for the identification of cadmium-chelating compounds in plant-based foods using SEC-ICP-MS/MS and SEC-QTOF-MS*, Analytical and Bioanalytical Chemistry | 2025 | Peer-reviewed | Cd occurrence in Seven plant-based food matrices: black-eyed beans, beluga lentils, tigernuts, basmati rice, sweet potato (cooked, dried, ground), beetroot leaves;... (n=7) |
| 6 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 7 | [[sources/joseph2025-gobbiya-dam-vegetable-metals\|Joseph et al. 2025]]. *Assessment of the Level of Heavy Metals in Irrigation Water, Farm Soil, and Vegetables Grown in Gobbiya Dam, Bogoro Local Government Area Bauchi State, Nigeria*, Journal of Energy Technology and Environment 7(4):79–92 | 2025 | Peer-reviewed | NG tAs, Fe, Cd, Cu, Cr, Pb, Ni occurrence in Four vegetable species and associated soil/water at Gobbiya Dam, Bauchi State; n=3 replicate measurements, independent field sample count... |
| 8 | [[sources/saleem2025-nd-vegetables-hra\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | Dry-weight spinach means, n=5: cadmium 0.985 ± 0.223, lead 0.081 ± 0.013, chromium 0.179 ± 0.063, mercury 0.0113 ± 0.0035, nickel 0.342 ± 0.070 µg/g. The note warns that a dry-weight result is not a fresh-weight limit comparison |
| 9 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | Fresh-weight spinach, n=3: aluminum 41.37 ± 8.53 mg/kg and iron 13.59 ± 4.73 mg/kg. Cadmium, chromium, and lead were not detected. Detection limits stated as under 0.004 mg/kg for cadmium and lead and under 0.01 mg/kg for chromium |
| 10 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 11 | [[sources/fatai2024-african-spinach-tomato-nigeria\|Fatai et al. 2024]]. *Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria*, Journal of Chemistry and Nutritional Biochemistry | 2024 | Peer-reviewed | NG Cu, Ni, Zn, Cd, Cr, Pb occurrence in African spinach and tomato composite samples collected around Ashaka community, Gombe State, Nigeria (n=2) |
| 12 | [[sources/seyfferth2024-spinach-cd-pb-review\|Seyfferth et al. 2024]]. *Mitigating Toxic Metal Exposure Through Leafy Greens: A Comprehensive Review Contrasting Cadmium and Lead in Spinach*, GeoHealth | 2024 | Peer-reviewed | US Pb, Cd occurrence in Review of U.S. spinach surveys including USDA-FDA-EPA 1980s paired soil-plant study (n=105), FDA Total Diet Study 1991-2017 and... |
| 13 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 14 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Fresh-weight spinach means, n=4: lead 0.48 ± 0.16 mg/kg and cadmium 0.04 ± 0.44 mg/kg. The note states lead is above the authors' 0.2 mg/kg comparator and cadmium 0.04 mg/kg is below the 0.05 mg/kg leafy comparator |
| 15 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 16 | [[sources/martin-leon2023-canary-leafy-vegetables-elements\|Martin-Leon et al. 2023]]. *Evaluation of essential, toxic and potentially toxic elements in leafy vegetables grown in the Canary Islands*, Toxics | 2023 | Peer-reviewed | ES Cd, tAs, Pb, Al, Cr, Ni, V, Sr occurrence in Two hundred forty-four ready-to-eat leafy-vegetable samples from the Canary Islands, including spinach, watercress, chard, lettuces, arugula, and lamb's... (n=244) |
| 17 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 18 | [[sources/ali2022-lead-wastewater-crops-meta\|Ali et al. 2022]]. *Meta-analysis of public health risks of lead accumulation in wastewater, irrigated soil, and crops nexus*, Frontiers in Public Health | 2022 | Peer-reviewed | IN/PK/CN Pb occurrence in 24 studies from 13 countries (India, Pakistan, Iran, China, Egypt, Ethiopia, Kenya, Iraq, Morocco, Nigeria, North Korea, South... (n=24) |
| 19 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 20 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 21 | [[sources/sadee2022-erbil-vegetables\|Sadee 2022]]. *Determination of trace metals in vegetables using ICP-MS*, ZANCO Journal of Pure and Applied Sciences | 2022 | Peer-reviewed | IQ tAs, Cd, Cr, Pb, Cu occurrence in ten common vegetables from local markets in Erbil, Kurdistan Region, Iraq (n=10) |
| 22 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | Pb, Cd, Cr, and Ni in spinach alongside other root and leafy vegetables from Kawran Bazar market, Dhaka, across four seasonal sampling phases; leafy vegetables including spinach exceeded FAO/WHO MPLs for Cr, Cd, and Ni with HI >1 |
| 23 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 24 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | Greenhouse tAs uptake in spinach across four irrigation-water As concentrations (0, 100, 500, 1,000 µg/L) in Burkina Faso; spinach had the highest edible-part As at 6.6 µg/g dw at 500 µg/L, with steaming reducing cooked-food As 8- to 18-fold vs boiling |
| 25 | [[sources/efsa2021-aluminium-food-qa\|EUFIC 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Information Council (EUFIC) | 2021 | NGO report | EFSA aluminium-in-food factsheet identifying spinach as a natural high-Al food source alongside tea, cocoa, herbs, and mushrooms; provides EFSA TWI of 1 mg Al/kg bw/week and JECFA PTWI of 2 mg/kg bw/week regulatory context |
| 26 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 27 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | Cr and tHg in spinach (including water spinach) by neutron activation analysis among 14 Jakarta staple foods from five traditional markets; spinach included as a vegetable matrix in the dietary HRI context |
| 28 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 29 | [[sources/adebayo2020-wastewater-irrigated-spinach\|Adebayo et al. 2020]]. *Levels of heavy metals and their health risk assessment from wastewater irrigated spinach in railway quarters, Bauchi, Bauchi state, Nigeria*, International Journal of Advanced Chemistry Research | 2020 | Peer-reviewed | NG Cd, Cr, Cu, Mn, Ni, Pb occurrence in Wastewater and African spinach (Amarantus caudatus) samples from Railway Quarters irrigation farm, Bauchi, Nigeria (n=3) |
| 30 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA/CFSAN Cd-mitigation review citing boiled spinach at 117 µg/kg (FDA TDS 2014–2016) as the second-ranked food by mean lower-bound Cd; identifies leafy vegetables including spinach as a primary dietary Cd contributor |
| 31 | [[sources/ahmed2019-irrigation-water-bangladesh-seasonal\|Ahmed et al. 2019]]. *Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables and the Difference between Dry and Wet Seasons Near a Multi-Industry Zone in Bangladesh*, Water | 2019 | Peer-reviewed | BD Pb, Cd, tAs, Cr, Cu, Zn occurrence in Irrigation water, soil, and mixed vegetables from 3 industrial zone areas (Banglabazar, Kashimpur, Chandra) in Gazipur District, Bangladesh.... (n=243) |
| 32 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for vegetable purees including spinach-containing products (as-consumed); multi-element context not available in FDA TDS |
| 33 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | IR Pb, tHg occurrence in Ten species of green leafy vegetables and herbs (Allium ampeloprasum L. [leek], A. wakegi L. [Welsh/Japanese bunching onion],... (n=160) |
| 34 | [[sources/naser2018-leafy-vegetables-bangladesh-metals\|Naser et al. 2018]]. *Heavy metal accumulation in leafy vegetables grown in industrial areas under varying levels of pollution*, Bangladesh Journal of Agricultural Research | 2018 | Peer-reviewed | BD Pb, Cd, Ni, Co, Cr occurrence in spinach, red amaranth, and amaranth from Gazipur industrial and non-industrial areas, Bangladesh (n=three leafy vegetables across three pollution levels) |
| 35 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 36 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=ten vegetables and fruits) |
| 37 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
| 38 | [[sources/sharma2016-spinach-wastewater-metals\|Sharma et al. 2016]]. *Heavy metals in vegetables: screening health risks involved in cultivation along wastewater drain and irrigating with wastewater*, SpringerPlus | 2016 | Peer-reviewed | IN Cd, Pb, Cu, Co, Fe occurrence in Edible portions of 12 common vegetable types from three Amritsar, Punjab agricultural sites, collected in triplicate per vegetable/site. (n=108) |
| 39 | [[sources/mohod2015-spinach-tomato-metals\|Mohod 2015]]. *A review on the concentration of the heavy metals in vegetable samples like spinach and tomato grown near the area of Amba Nalla of Amravati City*, International Journal of Innovative Research in Science, Engineering and Technology | 2015 | Peer-reviewed | IN Pb, Cd, Cu, Zn occurrence in spinach leaf and tomato grown near Amba Nalla, Amravati City, India (n=not reported in abstract) |
| 40 | [[sources/salawu2015-spinach-irrigation-metals\|Salawu et al. 2015]]. *Determination of some selected heavy metals in spinach and irrigated water from Samaru Area within Gusau Metropolis in Zamfara State, Nigeria*, Journal of Toxicology and Environmental Health Sciences | 2015 | Peer-reviewed | NG Pb, Cd, Fe, Cu, Zn occurrence in spinach and irrigation water from Samaru Area, Gusau Metropolis, Zamfara State, Nigeria (n=triplicate measurements) |
| 41 | [[sources/zemanova2015-spinach-cadmium-amino-fatty-acids\|Zemanova et al. 2015]]. *Changes in the contents of amino acids and the profile of fatty acids in response to cadmium contamination in spinach*, Plant, Soil and Environment | 2015 | Peer-reviewed | CZ Cd occurrence in Spinach cv. Matador grown in a controlled pot experiment in Prague with four Cd soil-dose treatments and four... (n=96) |
| 42 | [[sources/mfds2012-food-code-heavy-metals\|Korea Food and Drug 2012]]. *Article 2. Common Standards and Specifications for General Foods*, Korean Food Code | 2012 | Government report | KR Pb, Cd, tHg, MeHg concentrations |
| 43 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | Cadmium tolerable weekly intake of 2.5 µg/kg body weight per week. This note does not transcribe a spinach occurrence concentration |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5552206e60](https://github.com/paleofoundation/heavymetalindex/commit/5552206e60) | 2026-09-10 | major | 1 source added; 1 section added; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
