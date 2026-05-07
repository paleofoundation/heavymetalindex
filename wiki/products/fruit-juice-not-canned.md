---
title: Fruit Juice (Not Canned)
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
updated: 2026-05-03
sources: 3
---

# Fruit Juice (Not Canned)

This page is a structural scaffold for HMTc Category 1 row 14. One broad infant/toddler-food review has been promoted; not-canned juice-specific data are still pending.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/fda2023-inorganic-arsenic-apple-juice]]: Federal FDA final action level: 10 ug/kg iAs. Scope: apple juice. Basis: juice. | FSA/Fera Table 6 includes apple juice and juice composites; FDA TDS reports total arsenic, not iAs, for apple juice. | Limit is visible, but exceedance comparison is blocked until product-row values are extracted and basis/species match. | [[regulations/fda2023-inorganic-arsenic-apple-juice]]; [[sources/fsa2016-infant-food-formula-metals-survey]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until juice rows are extracted with product type and arsenic species. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fsa2016-infant-food-formula-metals-survey]] |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 10 ug/kg Pb. Scope: single-strength apple juice. Basis: single-strength ready-to-drink juice. | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]]; [[sources/fsa2016-infant-food-formula-metals-survey]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/fda2004-juice-haccp-lead]]: Federal FDA guidance hazard-control level: 50 ug/kg Pb. Scope: ready-to-drink fruit juices including fruit nectars. Basis: ready-to-drink juice. | FDA TDS apple juice N=3 had Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; grapefruit juice N=3 had Pb reported as 0 ppb. | Current older juice guidance context; use as legal/regulatory context, not an HMTc value. | [[regulations/fda2004-juice-haccp-lead]]; [[sources/fsa2016-infant-food-formula-metals-survey]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 30 ug/kg Pb. Scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. | Promoted field evidence exists, but comparable product-row values have not been extracted yet. | EU maximum level loaded; field-finding comparison blocked until juice rows are extracted and berry/small-fruit scope is separated. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fsa2016-infant-food-formula-metals-survey]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level JSONL backfill is tracked separately in `data/evidence/category1_register.csv`.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | 50 ppb (FDA current Juice HACCP guidance hazard-control level) | ready-to-drink fruit juices and fruit nectars | Current FDA guidance context; 2022 draft lead-in-juice guidance is not final and not for implementation |
| EU 2023/915 | 20 ppb | infant/young-child drink ready-to-use basis; ordinary juices have different EU lead levels | EU maximum level if labelled for infants/young children. |
| Prop 65 MADL screen | 4.2 ppb | 21 CFR 101.12 infant/young-child juice RACC of 120 mL, approximated as 120 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA current context is 50 ppb; EU infant-labelled juice is 20 ppb; Prop 65 is about 4.2 ppb at 120 g/day. | Use 50 ppb as current FDA context, keep the 10/20 ppb FDA juice values as draft-only context, and split apple/non-apple before standards use. |

Juice is the clearest example where a current federal context value can look loose relative to Prop 65 and modern occurrence data.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

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

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French infant fruit-juice category with N=4. The source does not identify canned status, so the values are supportive context for this not-canned juice row rather than a clean row-specific distribution. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Fruit juices | 4 | as consumed | 191 / 314 ppb | 2 / 2 ppb | 0.30 / 0.30 ppb | 21 / 29 ppb | 25 / 25 ppb | 62.5 / 83 ppb |

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

Primary FDA juice action-level documents are now captured in the page-level crosswalk above; exact use still requires apple/non-apple and canned/not-canned scope review.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context Awaiting Row-Fit Review

<!-- audience: regulator, educator, app -->

These sources are visible as product context, but they are not direct locked-row evidence. Keep them out of HMTc p90 or p95 calculations unless a later extraction resolves product row fit, basis, analyte species, and statistic fit.

| Source | Title | Source scope | Metals | Row-fit handling |
| --- | --- | --- | --- | --- |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | Broad product context only until row fit, basis, species, and statistic type are resolved. |

<!-- END: hmi-broad-context-sources -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]]
