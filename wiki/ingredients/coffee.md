---
title: "Coffee"
type: ingredient
commodity: coffee
label: "Coffee"
aliases: [ground coffee, instant coffee, brewed coffee]
category: botanical
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: 800
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 200
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [400, 2000]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200, 10000]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [80, 500]
    p95_ppb: null
    confidence: low
    n_studies: 3
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
    typical_ppb: [5, 300]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [1, 10]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [coffee]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 6
---

# Coffee

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 10–200 | medium | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|3]] |
| Cd | n=5 | 5–50 | medium | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|3]] |
| iAs | n=2 | 1–20 | low | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| tAs | n=3 | 5–300 | low | [[sources/zergui2023-coffee-metals-origin-icp-ms\|1]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| tHg | n=2 | 1–30 | low | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Ni | n=4 | 400–2000 | low | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/bfr2022-nickel-dietary-intake-germany-meal\|3]] |
| Al | n=4 | 200–10000 | low | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/albals2021-coffee-jordan-icpms\|3]] |
| Cr | n=3 | 80–500 | low | [[sources/zergui2023-coffee-metals-origin-icp-ms\|1]], [[sources/albals2021-coffee-jordan-icpms\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| Sn | data gap | — | — | — |
| U | n=1 | 1–10 | low | [[sources/albals2021-coffee-jordan-icpms\|1]] |

## Routing

This node is linked from [[products/coffee]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | FI/EU Cd, Pb, iAs, MeHg, Ni, Al occurrence in Finnish adults aged 25–74 years from FinDiet 2012 national dietary survey (48-h recall; 5 geographic areas) (n=1295) |
| 2 | [[sources/zergui2023-coffee-metals-origin-icp-ms\|Zergui et al. 2023]]. *Evaluation of trace metallic element levels in coffee by ICP-MS: a comparative study among different origins, forms, and packaging types and consumer risk assessment*, Biological Trace Element Research | 2023 | Peer-reviewed | Ni, Cr, Pb, Cd, tAs, and Al in 44 coffee samples (instant, ground, capsule) from Algerian market by ICP-MS; multi-origin and form comparison; B-tier caveat on CDI exceedances for Cd |
| 3 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | *[awaiting synthesis]* |
| 4 | [[sources/albals2021-coffee-jordan-icpms\|Albals et al. 2021]]. *Multi-element determination of essential and toxic metals in green and roasted coffee beans: A comparative study among different origins using ICP-MS*, Science Progress | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

