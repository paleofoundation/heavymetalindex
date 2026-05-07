---
title: "Apple"
type: ingredient
commodity: apple
label: "Apple"
aliases: [apples]
category: fruit
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  iAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-07
  tAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-07
  tHg:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Al:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Sn:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  U:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [fruit-juices-apple-containing, fruit-purees]
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
sources: 3
---

# Apple

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## Routing

This node is linked from [[products/fruit-juices-apple-containing]], [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 78, "Apple, red, with peel, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-gemsfood-arsenic-context -->
## WHO GEMS/Food Arsenic Occurrence Context

GEMS/Food includes apple-fruit arsenic rows that belong on the upstream apple ingredient page. These rows can inform apple-containing product reviews, but they should not be treated as apple-juice findings unless product form, processing, species, and basis are separately resolved. Displayed values are ppm, converted from the GEMS ug/kg summary values by dividing by 1,000. [[sources/who-gemsfood-heavy-metal-contaminants]]

| Routed GEMS food row | Arsenic species | Region | N | P50 ppm | P95 ppm | Max ppm | Use note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apple | tAs | EURO | 639 | 0 | 0.02 | 0.102 | Apple-fruit occurrence context. |
| Apple | tAs | European Union | 613 | 0 | 0.02 | 0.102 | EU-overlap apple-fruit context. |
| Apple | tAs | EURO | 515 | 0 | 0.003627 | 0.08 | Apple-fruit occurrence context. |
| Apple | tAs | EURO | 398 | 0 | 0.02575 | 0.35 | Apple-fruit occurrence context; review high-end values before claims. |
| Apple | iAs | PAHO | 39 | 0.00071 | 0.01261 | 0.0546 | Speciated apple-fruit row; small N. |
| Apple | tAs | EURO | 49 | 0 | 0.05742 | 0.325 | Small-N apple-fruit context; review before percentile use. |
<!-- END: hmi-gemsfood-arsenic-context -->

## Sources


- [[sources/fda2022-tds-elements-fy2018-fy2020]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
- [[sources/who-gemsfood-heavy-metal-contaminants]]
