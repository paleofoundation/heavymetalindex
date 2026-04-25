---
type: source
cite_key: fda-tds-elements-2018-2020
title: "Total Diet Study Report: Fiscal Years 2018-2020 Elements Data"
authors: ["U.S. Food and Drug Administration"]
year: 2022
publication: "U.S. Food and Drug Administration, Total Diet Study Program"
doi: null
source_type: gov-report
evidence_tier: A
raw_path: raw/reports/2022_07_14_TDSElementsReport_1436.pdf
sha256: ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef
access_date: 2026-04-25
access_url: https://www.fda.gov/food/total-diet-study/analytical-results-total-diet-study
license: us-government-work
metals: [Cd, Pb, Hg, MeHg, iAs, tAs, Ni, Al, Cu, Fe, Zn, Mn, Mo, Cr]
ingredients: [rice, fruits, vegetables, dairy, meat, fish, infant-foods, baby-food]
products: []
jurisdictions: [US]
superseded_by: null
updated: 2026-04-25
---

# FDA TDS — Fiscal Years 2018-2020 Elements Data Report

## TL;DR

The July 2022 FDA Total Diet Study Report on Fiscal Years 2018-2020 Elements Data is the most recent comprehensive publication from FDA's Total Diet Study program covering both essential nutrients and toxic elements (Cd, Pb, Hg, iAs, Ni, Al, and others) across the foods most representative of the US diet. The TDS samples foods from US retail markets, prepares them as consumed, and analyzes for 30+ elements; the program is FDA's longest-running food-monitoring activity (operating continuously since 1961) and is the primary US data source for population-level dietary toxic-element exposure estimates. The 2018-2020 data extend the FDA TDS dataset that underpinned [[sources/fda-ctz-Pb-babyfood-2025|the FDA Closer to Zero lead action levels]] and the [[sources/fda-iAs-rice-cereal-2020|FDA inorganic arsenic infant rice cereal action level]].

## Key facts

| Parameter | Value |
| --- | --- |
| Reporting period | Fiscal Years 2018-2020 |
| Publication date | July 2022 |
| Program | FDA Total Diet Study (continuously operating since 1961) |
| Sample type | Composite of 3 retail samples per food, prepared as consumed |
| Elements analyzed | 30+ including Cd, Pb, Hg, iAs, tAs, Ni, Al, Cu, Fe, Zn, Mn, Mo, Cr |
| Sample basis | Multi-year market basket reflective of typical US dietary patterns |

## Implications

- Certification: TDS data is the operational US dataset against which HMT&C product testing should be benchmarked. The TDS provides per-food-category mean and percentile concentration distributions that define what "typical US market" looks like for each toxic element in each food category.
- Courses: the TDS program is the canonical example of long-term food-monitoring methodology in the US; its continuous operation since 1961 produces the longitudinal data that supports population-level trend analysis (e.g., declining mean blood lead in children since the leaded-gasoline phase-out, partly tracked through dietary intake estimates derived from TDS).
- App: the per-food-category TDS data is high-confidence input for app contamination_profile population. Mean and percentile values from the 2018-2020 dataset can populate ingredient-page contamination_profile blocks at high confidence (status: populated, confidence: high) for foods covered by the FDA TDS market basket.

## Provenance notes

License `us-government-work`. The TDS data is published on the FDA website at `fda.gov/food/total-diet-study/analytical-results-total-diet-study` with raw analytical results downloadable as Excel files; the 2022 summary report PDF is the narrative companion to the data files.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic]]
- [[metals/mercury]]
- [[metals/nickel]]
- [[metals/aluminum]]
- [[ingredients/rice]]
