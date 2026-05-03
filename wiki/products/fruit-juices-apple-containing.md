---
type: product-category
category: fruit-juices-apple-containing
hmtc_category: 5
hmtc_row: 2
label: "Fruit juices, apple-containing"
base_taxonomy: fruit-juices
variant_type: contamination_platform
platform_metals: [Pb]
provenance: category_5_step_0_locked
ingredient_targets: [fruit-juice, apple]
primary_metals_of_concern: [Pb]
vulnerable_population: general_population
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
sources: 1
---

# Fruit juices, apple-containing

This page is a structural scaffold for HMTc Category 5 row 2. The row is locked by [[products/category-5-beverages]] and should be treated as a routing node until beverage occurrence sources are promoted.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 1 A-tier / 0 B-tier sources.
- Ingredient nodes: [[ingredients/fruit-juice]], [[ingredients/apple]].
- Platform metals: [[metals/lead|Pb]].

## Row Relationship

Contamination-platform counterpart to [[products/fruit-juices-non-apple]] for apple and orchard-legacy Pb.

## How The App Would Route This Category

The app layer should first classify the beverage into this locked row, then resolve ingredient evidence through [[ingredients/fruit-juice]], [[ingredients/apple]]. Ingredient-level occurrence values should be stored on ingredient pages, while finished beverage occurrence data belongs on this product row.

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| iAs | 10 ug/kg [[regulations/fda2023-inorganic-arsenic-apple-juice]] | final guidance action level; apple juice | FDA TDS reports total arsenic for apple juice, not iAs; FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. [[sources/fda2022-tds-elements-fy2018-fy2020]] | Regulatory context only; direct iAs comparison remains blocked until apple-juice iAs data are loaded. |
| Pb | 10 ug/kg [[regulations/fda2022-draft-lead-juice]] | draft guidance; not for implementation; single-strength apple juice | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. [[sources/fda2022-tds-elements-fy2018-fy2020]] | Draft context only; field finding is occurrence evidence, not a final regulatory comparison. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Sources

- [[sources/fda2022-tds-elements-fy2018-fy2020]]

Structural row membership is preserved through [[products/category-5-beverages]].
