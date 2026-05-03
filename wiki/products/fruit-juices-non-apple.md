---
type: product-category
category: fruit-juices-non-apple
hmtc_category: 5
hmtc_row: 1
label: "Fruit juices, non-apple"
base_taxonomy: fruit-juices
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: [fruit-juice, non-apple-fruit]
primary_metals_of_concern: [Pb]
vulnerable_population: general_population
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
sources: 1
---

# Fruit juices, non-apple

This page is a structural scaffold for HMTc Category 5 row 1. The row is locked by [[products/category-5-beverages]] and should be treated as a routing node until beverage occurrence sources are promoted.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 1 A-tier / 0 B-tier sources.
- Ingredient nodes: [[ingredients/fruit-juice]], [[ingredients/non-apple-fruit]].
- Platform metals: [[metals/lead|Pb]].

## Row Relationship

Clean benchmark for [[products/fruit-juices-apple-containing]] on Pb.

## How The App Would Route This Category

The app layer should first classify the beverage into this locked row, then resolve ingredient evidence through [[ingredients/fruit-juice]], [[ingredients/non-apple-fruit]]. Ingredient-level occurrence values should be stored on ingredient pages, while finished beverage occurrence data belongs on this product row.

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb | 20 ug/kg [[regulations/fda2022-draft-lead-juice]] | draft guidance; not for implementation; other single-strength juices and juice blends | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. [[sources/fda2022-tds-elements-fy2018-fy2020]] | Draft context only; one TDS grapefruit-juice food is occurrence evidence, not a full non-apple juice distribution. |
| Pb | 50 ug/kg [[regulations/fda2004-juice-haccp-lead]] | guidance hazard-control level; ready-to-drink fruit juices including fruit nectars | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. [[sources/fda2022-tds-elements-fy2018-fy2020]] | Regulatory context; direct compliance interpretation remains scope-limited. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Sources

- [[sources/fda2022-tds-elements-fy2018-fy2020]]

Structural row membership is preserved through [[products/category-5-beverages]].
