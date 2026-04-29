---
type: product-category
category: fruit-juice-not-canned
hmtc_row: 14
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Fruit juice (not canned)"
base_taxonomy: fruit-juice
variant_type: independent_scope_qualified
provenance: base_taxonomy
scope_exclusions: [canned-fruit-juice]
ingredient_targets: [fruit-juice, apple-juice, grape-juice]
primary_metals_of_concern: [Ni, Cd, Pb]
vulnerable_population: children-0-60mo
applicable_regulations: []
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
updated: 2026-04-29
sources: 3
---

# Fruit Juice (Not Canned)

This page is a structural scaffold for HMTc Category 1 row 14. One broad infant/toddler-food review has been promoted; not-canned juice-specific data are still pending.

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. HMT&C may use approved Index evidence downstream under its own standards methodology, but HMT&C thresholds are not evidence for public Index claims.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: fruit juice monitoring reports that distinguish the not-canned scope where possible.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

No promoted source currently gives a not-canned fruit-juice-only concentration distribution. The closest Category 1 row evidence includes the UK baby-drinks group and a packaged fruit-juice study that includes multiple packaging formats, so canned products must be filtered out before threshold work.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | UK baby drinks | 2 ug/kg | 2 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK baby drinks | 1 ug/kg | 1 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/cadmium|Cadmium]] | UK baby drinks | 0 ug/kg | 0 ppb lower-bound category value | [[sources/fsa2016-infant-food-formula-metals-survey]] | Lower-bound/upper-bound treatment; not juice-specific. |
| [[metals/lead|Lead]] | UK baby drinks | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/nickel|Nickel]] | UK baby drinks | 0 to 9 ug/kg | 0 to 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Baby-drinks group, not specifically not-canned fruit juice. |
| [[metals/nickel|Nickel]] | Ethiopia packaged fruit juices consumed by children | range 0.0025 to 0.08 mg/L; median 0.078 mg/L | range 2.5 to 80 ppb; median 78 ppb | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Includes canned, glass, carton, and tetra-pack products; canned products must be excluded for this row. |
| [[metals/nickel|Nickel]] | Ethiopia mango, pineapple, strawberry, and cocktail juice medians | mango 34 ppb; pineapple 70 ppb; strawberry 62 ppb; cocktail 56.5 ppb | 34 to 70 ppb fruit-type medians | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Fruit-type medians are not packaging-filtered p90 values. |
| [[metals/cadmium|Cadmium]] | Ethiopia packaged fruit juices consumed by children | range 0.01 to 0.1 mg/L; median 0.08 mg/L | range 10 to 100 ppb; median 80 ppb | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Includes canned, glass, carton, and tetra-pack products; row-fit filtering pending. |
| [[metals/lead|Lead]] | Ethiopia packaged fruit juices consumed by children | range 0.01 to 0.04 mg/L; median 0.035 mg/L | range 10 to 40 ppb; median 35 ppb | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] | Includes canned, glass, carton, and tetra-pack products; row-fit filtering pending. |

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2022 narrative review states that the few U.S. infant-food-specific heavy-metal guidance exceptions at the time included maximum lead and arsenic levels in certain fruit juices. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Not-canned fruit juice risk characterization remains pending because the promoted source does not provide not-canned juice concentration distributions for apple or grape juice. <!-- UNCITED: Need fruit juice datasets or regulatory monitoring reports before assigning metals of concern or describing relative risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for fruit juice should be documented only after sources distinguish fruit type, concentrate use, water inputs, packaging, canned versus not-canned scope, and analytical method. <!-- UNCITED: Need juice-specific sources that report metal concentrations, scope qualifiers, and methods such as [[testing/icp-ms]]. -->

Weldegebriel 2025 supports packaging and fruit type as candidate variance drivers because it reports higher nickel in pineapple, strawberry, and cocktail juice than mango juice, while also flagging packaging type as a contamination variable; this source still requires canned/not-canned filtering before it can support the locked row distribution. [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]]

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/fruit-juice]], [[ingredients/apple-juice]], and [[ingredients/grape-juice]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Fruit-juice regulatory crosswalk should be populated from primary FDA juice action-level documents rather than from this narrative review alone. <!-- UNCITED: Need primary FDA, EU, Codex, or other agency sources before adding exact fruit-juice regulatory values. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]]
