---
type: ingredient
commodity: raspberries
title: "Raspberries"
label: "Raspberries"
aliases: [rubus-idaeus, frozen-raspberries]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [8, 17]
    p95_ppb: 38
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 6]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 21]
    p95_ppb: 123
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, frozen-processing, geography, low-surface-deposition]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/dried-fruit]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Raspberries

Raspberries (Rubus idaeus) are a soft-fruit berry consumed fresh and as frozen, dried, jam, juice, and puree derivatives. The available evidence places raspberries in the low-metal end of the European fruit category spectrum, with the Polish national monitoring program of 600 fruit samples reporting fresh berries at mean Pb 8 to 17 µg/kg and Cd 5 to 6 µg/kg (domestic) or 0 to 1 µg/kg (imported), all on a wet-weight basis ([[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]]). The contamination profile is fundamentally driven by soil uptake; processing into frozen raspberries does not materially alter the metal load.

## Why this commodity accumulates heavy metals

Raspberries accumulate heavy metals through soil uptake by the raspberry plant, with the fruit concentrating metals from the plant's vascular tissue during ripening. The raspberry growth habit, with fruit borne on aboveground canes elevated from the soil surface, reduces direct soil-contact contamination compared to ground-contact crops; the fruit-to-soil distance also limits surface deposition of soil-derived metals. Atmospheric deposition on the fruit surface during ripening contributes a small Pb load.

Berry crops as a class are generally lower in heavy metals than leafy vegetables or root vegetables, with the per-mass metal concentration reflecting the high water content (raspberries are approximately 85 percent water) and the relatively limited transpiration-driven metal uptake into the fruit tissue. The Polish dataset documented that domestic Polish berries carry detectable but low Pb and Cd, with imported berries from non-European sources showing similar or slightly lower values.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | 8–17 | 38 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| Cd  | n=1 | 0–6 | — | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=1 | 0–21 | 123 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| tHg | n=1 | 0–2 | — | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Polish national monitoring program of approximately 600 fruit samples collected in 2015 by Sanitary and Epidemiological Stations covers fresh, frozen, dried, preserved, and canned fruit categories, with raspberries falling within the fresh berries and small fruits sub-group ([[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]]). Fresh berries reported Pb mean (middle bound) 8 to 17 µg/kg with P90 26 to 38 µg/kg; Cd mean 5 to 6 µg/kg for domestic samples and 0 to 1 µg/kg for imported; total arsenic mean across the dataset 1 to 21 µg/kg with the highest single value at 123 µg/kg in frozen domestic strawberries; total mercury mean 0.4 to 2.1 µg/kg in fresh fruits.

Frozen small fruits (which include raspberry products) reported Cd mean 10 to 11 µg/kg, slightly higher than fresh berries on a per-mass basis, attributable to the partial water-loss effect during freezing and storage. The dataset does not separately tabulate raspberry-specific values at the species level within the berries group; the values reported here for raspberries are inferred from the berries-and-small-fruits group means and apply with the corresponding lower confidence.

The Polish Sembratowicz 2010 study of nitrates, Pb, and Cd in select Polish fruits provides additional historical context for the Polish domestic fruit baseline ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Sembratowicz et al. 2010]]). Specific raspberry-level values from that earlier study are not in the accessible data slice.

Regional and varietal variation beyond the Polish dataset is not resolved in the current corpus. No US, EU non-Polish, or non-European raspberry source is in the current routing for this page.

## Processing effects

Processing-state effects on raspberry metal load operate at three stages. Freezing (the dominant commercial preservation method for raspberries) does not remove metals but causes some water-loss-related concentration, with the Polish dataset showing frozen small fruits at approximately 2-fold the Cd of fresh berries on a per-mass basis. Drying (less common for raspberries than for grapes or cranberries) concentrates all components proportionally with the water loss, similar to other dried fruit categories. Juicing extracts metals into the juice fraction; raspberry juice carries the per-volume metal load of the source fruit. Jam and preserve production concentrates the fruit through evaporative sugar reduction and proportionally elevates all metals. Canning is uncommon for raspberries; the canned-fruit pathway is more relevant for pears and stone fruits.

## Ingredient-derivative risk

Raspberries produce a range of derivatives. Fresh raspberries are the baseline form. Frozen raspberries (whole or crushed) are the most common commercial form for industrial and consumer use and carry slightly elevated per-mass metals relative to fresh per the Polish dataset. Raspberry puree (single-strength or concentrated) inherits the source-fruit metals proportionally. Raspberry juice and juice concentrate carry the soluble metal fraction. Raspberry jam, preserves, and toppings concentrate metals through evaporative sugar reduction. Dried raspberries (raspberry powder, freeze-dried raspberries) concentrate metals by mass loss. Raspberry-containing baby food purees carry the source-fruit metals proportionally and are governed by the infant-food-specific regulations.

## Mitigation options

Sourcing levers operate at the brand and grower level. Sourcing raspberries from low-soil-metal regions is the upstream lever. The Polish dataset documents that European raspberry production produces fruit with low Pb and Cd; sourcing specifications for European, Polish, or other documented-low-metal origin should be standard for products targeting low-metal claims.

Agronomic levers operate on the raspberry grower. Soil testing, irrigation-water management, and avoidance of urban-fringe production are the documented practices.

Processing levers are limited for raspberries. Freezing preserves quality without materially adding metals. Selecting fresh over dried raspberry ingredients reduces per-mass metal load.

Formulation levers operate on the brand. Diluting raspberry content with other berries with similar metal profiles produces a similar finished-product metal load. Substituting raspberry concentrate with fresh raspberry puree reduces per-mass metals through dilution.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming raspberry raw material against a sourcing specification catches origin-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for fresh or frozen raspberries in the current evidence base.

## Regulatory limits that apply

The European Union Regulation (EU) 2023/915 establishes Pb in fresh fruit (including berries) at 0.10 mg/kg (100 ppb) and Cd in fruits and tree nuts at 0.050 mg/kg (50 ppb) on a wet-weight basis as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). The Codex Alimentarius CXS 193-1995 establishes Pb in fruits at 0.1 mg/kg. The European Union regulation specifically establishes Pb in fruit juices, including berry juices, at 0.030 mg/kg (30 ppb), with stricter values for grape-based products. The United States FDA has no commodity-specific action level for Pb, Cd, or arsenic in raspberries under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny | 2021 | Peer-reviewed | Polish national monitoring program covering ~600 fruit samples; raspberries inferred from berries-and-small-fruits group: Pb mean 8–17 ppb (P90 38), Cd mean 5–6 ppb (domestic), tAs 1–21 ppb mean, tHg 0.4–2 ppb |
| 2 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | Historical Polish domestic fruit Pb and Cd data; provides earlier baseline context for the 2015 Polish monitoring program values |
<!-- END: hmi-source-legend -->
