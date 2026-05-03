---
type: product-category
category: fruit-juice-not-canned
hmtc_row: 14
label: "Fruit juice (not canned)"
base_taxonomy: fruit-juice
variant_type: independent_scope_qualified
provenance: base_taxonomy
scope_exclusions: [canned-fruit-juice]
ingredient_targets: [fruit-juice, apple-juice, grape-juice]
primary_metals_of_concern: []
vulnerable_population: children-0-60mo
applicable_regulations: []
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
sources: 3
---

# Fruit Juice (Not Canned)

This page is a structural scaffold for HMTc Category 1 row 14. One broad infant/toddler-food review has been promoted; FSA/Fera adds UK government monitoring evidence for baby juices and non-infant juice composites, and FDA TDS adds U.S. apple and grapefruit juice occurrence rows where they fit the not-canned scope. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 3 A-tier / 0 B-tier sources.
- Next ingest target: fruit juice monitoring reports that distinguish the not-canned scope where possible.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review states that the few U.S. infant-food-specific heavy-metal guidance exceptions at the time included maximum lead and arsenic levels in certain fruit juices. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

The FSA/Fera 2014 UK survey measured baby juice products and non-infant apple, orange, and ready-drink juice composites as sold. These records belong here only when the not-canned scope is preserved; canned products should remain excluded. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Not-canned fruit juice risk characterization remains pending because the promoted source does not provide not-canned juice concentration distributions for apple or grape juice. <!-- UNCITED: Need fruit juice datasets or regulatory monitoring reports before assigning metals of concern or describing relative risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for fruit juice should be documented only after sources distinguish fruit type, concentrate use, water inputs, packaging, canned versus not-canned scope, and analytical method. <!-- UNCITED: Need juice-specific sources that report metal concentrations, scope qualifiers, and methods such as [[testing/icp-ms]]. -->

The FSA/Fera source is useful for scope-aware juice routing, but Table 6 juice composites should not become infant-product evidence unless the product and packaging scope match this row. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fruit-juice]], [[ingredients/apple-juice]], and [[ingredients/grape-juice]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| iAs | 10 ug/kg [[regulations/fda2023-inorganic-arsenic-apple-juice]] | final guidance action level; apple juice | FSA/Fera Table 6 includes apple juice and juice composites; FDA TDS reports total arsenic, not iAs, for apple juice. [[sources/fda2022-tds-elements-fy2018-fy2020]] | Use as external context and split trigger; direct comparison remains blocked without apple-juice iAs rows. |
| Pb | 10 ug/kg [[regulations/fda2022-draft-lead-juice]] | draft guidance; not for implementation; single-strength apple juice | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. [[sources/fda2022-tds-elements-fy2018-fy2020]] | Use as draft context only; occurrence data are not a final regulatory comparison. |
| Pb | 50 ug/kg [[regulations/fda2004-juice-haccp-lead]] | guidance hazard-control level; ready-to-drink fruit juices including fruit nectars | FDA TDS apple juice N=3 had Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; grapefruit juice N=3 had Pb reported as 0 ppb. [[sources/fda2022-tds-elements-fy2018-fy2020]] | Use as legal/regulatory context, not HMTc value. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Fruit-juice regulatory crosswalk should be populated from primary FDA juice action-level documents rather than from this narrative review alone. <!-- UNCITED: Need primary FDA, EU, Codex, or other agency sources before adding exact fruit-juice regulatory values. -->

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources


- [[sources/fda2022-tds-elements-fy2018-fy2020]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
