# Product page contract

Version 1.0.0 · adopted 2026-10-17. Read with the [shared evidence and answer contract](evidence-and-answers.md).

## Purpose and ownership

The finished-product category or subcategory, including formulation, format, manufacturing, use and verification.

A product page owns measured finished-product evidence and product-level controls. Ingredient findings and broad author scope remain labelled context unless their applicability is established. A modelled formulation estimate is not a measured result. Category pages cannot establish the compliance or safety of a particular brand or lot.

## Existing HMI identity and metadata

Keep `type: product-category`, `category`, `typical_ingredients`, `primary_metals_of_concern`, `vulnerable_population`, `applicable_regulations` and existing product URLs. Scientific page scope does not create or change an HMTc category lock.

Add `page_contract_version: "1.0.0"` and `question_record` only after a complete 36-question record exists and the adopted-page structural checks pass. A partial page may adopt the contract with explicit unassessed questions; it may not claim complete assessment. Keep actual `updated`, search-through and reviewed dates distinct.

## Reader sequence and required answers

A precise category definition and decision summary; then direct product evidence, ingredient contributions, manufacture/contact/storage, use/exposure, controls, testing, procurement, requirements, events and review history.

The following twelve H2 roles are mandatory, in order, on adopted pages. Use these exact headings for the initial implementation. Keep existing deep links as explicit aliases/anchors during migration. Each question is required to be assessed; a documented uncertainty or justified not-applicable answer is acceptable. Empty headings, generic boilerplate or a source list alone do not answer a question.

<!-- BEGIN: hmi-contract-questions -->
### 1. Product definition and scope

Required public heading: `## Product definition and scope`.

| ID | Required question |
| --- | --- |
| HMI-PRD-001 | What finished-product category, formulations, formats, and intended uses does this page cover? |
| HMI-PRD-002 | Which subcategories or preparation states require separate evidence and regulatory comparisons? |
| HMI-PRD-003 | Which populations and exposure routes are relevant to this product? |

Required output: Category and subcategory boundaries, formulation, format, preparation, intended population, use route, and exclusions.

Existing HMI material to map: Who this page is for; category metadata.

### 2. Decision summary

Required public heading: `## Decision summary`.

| ID | Required question |
| --- | --- |
| HMI-PRD-004 | What contamination concerns are supported for this product category? |
| HMI-PRD-005 | Which purchasing, manufacturing, and retail decisions can the evidence inform? |
| HMI-PRD-006 | Which uncertainties prevent a reliable conclusion about the category or a particular product? |

Required output: Role-specific priorities with linked evidence, uncertainty, and no certification or brand ranking.

Existing HMI material to map: Quick read; audience and purpose.

### 3. Literature Evidence Summary

Required public heading: `## Literature Evidence Summary`.

| ID | Required question |
| --- | --- |
| HMI-PRD-007 | What has been measured directly in finished products of the exact formulation and format? |
| HMI-PRD-008 | What concentrations, detection frequencies, and variability were reported in defined markets and periods? |
| HMI-PRD-009 | How representative are the observations, and which related-product findings provide context only? |

Required output: Finished-product occurrence by analyte and exact subcategory, retaining statistic, sample frame, basis, period, and censoring.

Existing HMI material to map: hmi-hmtc-evidence-summary; Source Evidence Inventory.

### 4. Ingredients and contamination pathways

Required public heading: `## Ingredients and contamination pathways`.

| ID | Required question |
| --- | --- |
| HMI-PRD-010 | Which ingredients or inputs are plausible contributors, and which contributions have been measured? |
| HMI-PRD-011 | What contamination may enter during manufacturing, handling, or contact with equipment and packaging? |
| HMI-PRD-012 | How do formulation, ingredient origins, and product format alter those pathways? |

Required output: Contribution map distinguishing measured apportionment, modelled contributions, and hypotheses.

Existing HMI material to map: Typical ingredients; ingredient links; broad context.

### 5. Manufacturing, packaging, and storage

Required public heading: `## Manufacturing, packaging, and storage`.

| ID | Required question |
| --- | --- |
| HMI-PRD-013 | How do manufacturing and preparation change concentrations, species, or contaminant mass? |
| HMI-PRD-014 | What migration or release from equipment or packaging has been measured under relevant conditions? |
| HMI-PRD-015 | How do storage duration, temperature, reuse, or other use conditions affect contamination? |

Required output: Process-stage and contact comparisons with preparation, contact conditions, shelf life, mass or migration basis.

Existing HMI material to map: Processing and packaging levers.

### 6. Use, consumption, and exposure

Required public heading: `## Use, consumption, and exposure`.

| ID | Required question |
| --- | --- |
| HMI-PRD-016 | How do serving size, consumption frequency, preparation, or non-food use determine exposure? |
| HMI-PRD-017 | What evidence addresses intended users and susceptible or highly exposed populations? |
| HMI-PRD-018 | What do exposure estimates establish, and what cannot be inferred about health effects or individual risk? |

Required output: Transparent exposure scenarios with consumption/use data, preparation, population, route, and uncertainty.

Existing HMI material to map: Vulnerable population; exposure estimates.

### 7. Levers to reduce contamination

Required public heading: `## Levers to reduce contamination`.

| ID | Required question |
| --- | --- |
| HMI-PRD-019 | Which interventions have been evaluated in this exact product or a demonstrably applicable setting? |
| HMI-PRD-020 | What effects, trade-offs, operating conditions, and implementation evidence support each intervention? |
| HMI-PRD-021 | Which measures prevent, remove, redistribute, dilute, detect, or exclude contamination, and how are they verified? |

Required output: Comparative controls across sourcing, agronomy, processing, formulation, testing/QC, packaging and storage.

Existing HMI material to map: Levers to reduce contamination.

### 8. Sampling, testing, and verification

Required public heading: `## Sampling, testing, and verification`.

| ID | Required question |
| --- | --- |
| HMI-PRD-022 | What sampling design is needed for lot decisions, surveillance, and verification of a process change? |
| HMI-PRD-023 | Which analytical or migration/release methods match this product, species, and decision? |
| HMI-PRD-024 | What can testing and supplier COAs establish about a lot, and what cannot be generalized to all production? |

Required output: Sampling plan rationale, matrix/species method fit, reporting limits, uncertainty, and lot-inference boundaries.

Existing HMI material to map: Testing/QC levers; testing links.

### 9. Procurement and quality controls

Required public heading: `## Procurement and quality controls`.

| ID | Required question |
| --- | --- |
| HMI-PRD-025 | What evidence should manufacturers obtain from ingredient and packaging suppliers? |
| HMI-PRD-026 | What records should retailers or other buyers request to assess a product-control claim? |
| HMI-PRD-027 | Which changes or anomalous results should trigger investigation, retesting, or control reassessment? |

Required output: Documented supplier/manufacturer/retailer questions, traceability and verification requirements, and escalation triggers.

Existing HMI material to map: Who this page is for; sourcing and QC levers.

### 10. Regulatory comparison

Required public heading: `## Regulatory comparison`.

| ID | Required question |
| --- | --- |
| HMI-PRD-028 | Which instruments apply to the exact product, use, species, jurisdiction, and date? |
| HMI-PRD-029 | Can the measured result be compared with a requirement on a matching basis and decision rule? |
| HMI-PRD-030 | Where is there no verified applicable limit, only guidance, or unresolved applicability? |

Required output: Primary instrument comparisons by value type, species, matrix, preparation, market, legal status and date.

Existing HMI material to map: hmi-product-crosswalk; Federal/Regulatory Limits vs Field Findings.

### 11. Historical recalls and enforcement

Required public heading: `## Historical recalls and enforcement`.

| ID | Required question |
| --- | --- |
| HMI-PRD-031 | What verified public recalls or enforcement actions are relevant to this category? |
| HMI-PRD-032 | What was actually established, for which lots or products, under which instrument and at what date? |
| HMI-PRD-033 | What can and cannot be generalized from those events to the wider category or current production? |

Required output: Dated public-event record with exact scope and finality, separate from category occurrence and causality.

Existing HMI material to map: Historical recalls and enforcement.

### 12. Evidence assessment and updates

Required public heading: `## Evidence assessment and updates`.

| ID | Required question |
| --- | --- |
| HMI-PRD-034 | What searches, eligibility criteria, and study or dataset families underpin the category answers? |
| HMI-PRD-035 | How were direct product evidence, ingredient evidence, and broader context separated and appraised? |
| HMI-PRD-036 | What supports the certainty judgments, what remains unresolved, and when and by whom were answers reviewed? |

Required output: Search, eligibility, direct/context separation, appraisal, source-family deduplication, contradiction and version records.

Existing HMI material to map: Methodology; Source Evidence Inventory; broad context; references; sources; history.
<!-- END: hmi-contract-questions -->

## Family-specific interpretation rules

Cover matrix and format separately, for example powder versus ready-to-feed, and preparation basis explicitly. Derive reconstitution from the actual instructions or source; do not hard-code a universal ratio. Existing non-food product categories use release/migration and the relevant use route instead of forcing dietary questions; record justified not-applicable decisions where needed. Preserve the brand-data firewall: public events retain their authorized scope and cannot become brand rankings or category prevalence estimates.

## Evidence presentation

Use the occurrence, intervention, measurement and regulatory record requirements in the shared contract. The decision summary references the assessed answers; it introduces no independent conclusion. Put study-level detail in linked source records or the appropriate evidence table, and update the synthesized answer when a new study changes it. Do not append an unrelated paper-specific H2 to the bottom of the page.

After the twelve core sections retain `## References`, `## Sources`, and `## Update history` where their existing generators require them. References identify works actually cited; Sources may additionally list routed context, explicitly distinguished from evidence included in a synthesis. A large source legend does not establish search completeness or certainty.

## Review and acceptance

All 36 question IDs must resolve in the page-question record. Every complete-page answer must meet the shared review gates, including traceable scope, searches, applicability, uncertainty and actual review attribution. Structural checks and passage-level scientific review are separate. No minimum source count, mandatory effect size or mandatory positive conclusion applies.

Preserve source evidence and meaningful anchors while consolidating repetition. Do not hand-edit generator-managed regions; update the producing generator before migrating a page whose generated output conflicts with this contract. An unresolved generator conflict blocks that page's adoption, not adoption of the question register itself.

## Product generator ownership

Retain `hmi-hmtc-evidence-summary`, `hmi-broad-context-sources`, `hmi-product-crosswalk`, reference, source-legend and history markers. Their historic internal names do not authorize certification content. Place the summary under Literature Evidence Summary, the crosswalk under Regulatory comparison, and the source inventory/broad context within Evidence assessment and updates as subordinate tables or sections. Keep source-level and synthesis-level counts separate.

The retired `How standards math uses this page` section is not required and must not be regenerated. Public pages explain literature methods and applicable instruments. Certification threshold-selection arithmetic and private program decisions remain in their existing staff-side owners. Descriptive literature statistics are not compliance decisions.
