# Ingredient page contract

Version 1.0.0 · adopted 2026-10-17. Read with the [shared evidence and answer contract](evidence-and-answers.md).

## Purpose and ownership

The defined commodity/material, its contamination pathways, variability, processing and controls.

An ingredient page owns exact-material occurrence and ingredient controls. Distinct parts, extracts and concentrates are not aliases merely because there are fewer than five papers. Use a clearly scoped subsection or provisional destination; create/promote a separate scientific page when the distinct decision and completed coverage justify it. No paper-count threshold establishes scientific completeness.

## Existing HMI identity and metadata

Keep `type: ingredient`, entity aliases, `contamination_profile`, `drivers`, derivative links and `used_in_products`. Keep the existing ten profile keys for compatibility; they are a minimum inventory, not proof of universal relevance or an exhaustive scientific panel. Relevant additional species such as MeHg must be assessed and recorded in question/synthesis records even if the legacy profile lacks a key.

Add `page_contract_version: "1.0.0"` and `question_record` only after a complete 36-question record exists and the adopted-page structural checks pass. A partial page may adopt the contract with explicit unassessed questions; it may not claim complete assessment. Keep actual `updated`, search-through and reviewed dates distinct.

## Reader sequence and required answers

Apply the [ingredient reading pattern](ingredient-reading-pattern.md): a concise overview, connected scientific prose, selective reference tables and supplementary FAQs in the established accordion style. Organize mitigation by applicable production stage, keeping paired analyte effects together. Occurrence remains organized by analyte. This pattern guides future migrations without authorizing a library-wide rewrite.

A cited direct decision summary comes first, followed by the exact-material definition and scope-labelled contamination profile; then pathways, variation, processing, controls and the other required sections below. The 18 October presentation-order amendment changes no question IDs or scientific scopes.

The following twelve H2 roles are mandatory, in order, on adopted pages. Use these exact headings for the initial implementation. Keep existing deep links as explicit aliases/anchors during migration. Each question is required to be assessed; a documented uncertainty or justified not-applicable answer is acceptable. Empty headings, generic boilerplate or a source list alone do not answer a question.

<!-- BEGIN: hmi-contract-questions -->
### 1. Decision summary

Required public heading: `## Decision summary`.

| ID | Required question |
| --- | --- |
| HMI-ING-004 | Which contamination concerns are supported for this ingredient and its defined forms? |
| HMI-ING-005 | Which sourcing or production decisions deserve priority on the available evidence? |
| HMI-ING-006 | Which evidence gaps most limit those decisions? |

Required output: Current priorities and uncertainty linked to the applicable answers, without a universal risk score.

Existing HMI material to map: Direct answer; overview.

### 2. Ingredient identity and scope

Required public heading: `## Ingredient identity and scope`.

| ID | Required question |
| --- | --- |
| HMI-ING-001 | What commodity, biological species, edible part, and commercial forms does this page cover? |
| HMI-ING-002 | Which processing states and derivatives are distinct materials rather than synonyms? |
| HMI-ING-003 | What evidence can be transferred between those materials, and what requires a separate answer? |

Required output: Material definition covering species, edible part, cultivar where relevant, grade, form, preparation, and exclusions.

Existing HMI material to map: Overview; aliases.

### 3. Heavy metal contamination profile

Required public heading: `## Heavy metal contamination profile`.

| ID | Required question |
| --- | --- |
| HMI-ING-007 | Which metals and chemical species have been investigated in this ingredient? |
| HMI-ING-008 | What concentrations, detection frequencies, and variability were observed in each defined sampling frame? |
| HMI-ING-009 | Which analyte questions are unassessed, access-blocked, conflicting, or searched without eligible evidence? |

Required output: Analyte-by-scope occurrence table with source statistics, units, basis, sample frame, censoring, and uncertainty.

Existing HMI material to map: contamination_profile; source observations.

### 4. Sources and contamination pathways

Required public heading: `## Sources and contamination pathways`.

| ID | Required question |
| --- | --- |
| HMI-ING-010 | What evidence supports root uptake, surface deposition, feed transfer, or other biological pathways? |
| HMI-ING-011 | What contamination can arise from agricultural inputs, harvesting, processing, equipment, or packaging? |
| HMI-ING-012 | Which source-attribution claims are measured, modelled, inferred, or unresolved? |

Required output: Evidence-linked pathway map separating uptake, deposition, inputs, and contact contamination.

Existing HMI material to map: Why this commodity accumulates heavy metals.

### 5. Ranges by source, region, and variety

Required public heading: `## Ranges by source, region, and variety`.

| ID | Required question |
| --- | --- |
| HMI-ING-013 | How do concentrations vary by origin, growing conditions, variety, and harvest period? |
| HMI-ING-014 | What evidence distinguishes within-lot, between-lot, supplier, and production-system variation? |
| HMI-ING-015 | Which comparisons support a sourcing decision, and where would geographic or supplier generalization be unjustified? |

Required output: Comparable strata and uncertainty, retaining harvest period, geography, origin versus market, and confounding.

Existing HMI material to map: Ranges by source, region, and variety.

### 6. Processing effects and derivatives

Required public heading: `## Processing effects and derivatives`.

| ID | Required question |
| --- | --- |
| HMI-ING-016 | How do specified processing or preparation steps change the measured metal endpoints? |
| HMI-ING-017 | How do derivatives, concentrates, extracts, and fractions differ from their parent ingredient? |
| HMI-ING-018 | Do changes reflect removal, redistribution, moisture or yield change, dilution, or altered species or availability? |

Required output: Input/output comparison retaining mass, moisture basis, yield, species, derivative identity, and by-products.

Existing HMI material to map: Processing effects; Ingredient-derivative risk.

### 7. Mitigation options

Required public heading: `## Mitigation options`.

| ID | Required question |
| --- | --- |
| HMI-ING-019 | Which prevention, mitigation, or remediation measures have been evaluated for this ingredient? |
| HMI-ING-020 | Under what conditions, at which stage, and against which comparator do they work or fail? |
| HMI-ING-021 | What evidence supports field or commercial implementation and ongoing verification? |

Required output: Stage-specific control comparison with measured effect, applicability, readiness, and verification.

Existing HMI material to map: Mitigation options; linked mitigation pages.

### 8. Trade-offs and failure modes

Required public heading: `## Trade-offs and failure modes`.

| ID | Required question |
| --- | --- |
| HMI-ING-022 | Can an intervention increase another contaminant or redistribute contamination to a by-product? |
| HMI-ING-023 | What effects on nutrition, yield, sensory quality, stability, and waste streams were measured? |
| HMI-ING-024 | What costs, constraints, adverse effects, or failure modes are documented, and which are unknown? |

Required output: Joint outcomes for other analytes, nutrition, yield, quality, waste, and operating constraints.

Existing HMI material to map: Mitigation caveats; processing effects.

### 9. Sampling and testing

Required public heading: `## Sampling and testing`.

| ID | Required question |
| --- | --- |
| HMI-ING-025 | What sampling design is appropriate for the ingredient, heterogeneity, lot, and decision? |
| HMI-ING-026 | Which methods, species measurements, validation evidence, and reporting limits are needed? |
| HMI-ING-027 | What can a certificate of analysis or non-detect establish, and what remains untested? |

Required output: Matrix-specific sampling and analytical requirements; COA scope; acceptance decision assumptions.

Existing HMI material to map: Testing/QC mitigation; testing links.

### 10. Procurement and process control

Required public heading: `## Procurement and process control`.

| ID | Required question |
| --- | --- |
| HMI-ING-028 | What origin, traceability, processing, and analytical information should a buyer request? |
| HMI-ING-029 | Which control or specification choices are supported, and which are policy choices requiring separate justification? |
| HMI-ING-030 | What supplier, process, or test-result changes should trigger investigation or requalification? |

Required output: Evidence-grounded supplier questions, control records, change triggers, and verification needs.

Existing HMI material to map: Sourcing and QC mitigation.

### 11. Finished-product and exposure implications

Required public heading: `## Finished-product and exposure implications`.

| ID | Required question |
| --- | --- |
| HMI-ING-031 | How do inclusion rate, processing yield, preparation, and other ingredients affect a finished-product estimate? |
| HMI-ING-032 | How do consumption patterns and intended populations affect dietary-exposure interpretation? |
| HMI-ING-033 | What conclusions require finished-product measurements or a separate exposure assessment? |

Required output: Explicit composition, mass balance, preparation, serving and population assumptions; measured versus modelled distinction.

Existing HMI material to map: Used in products; related finished-product evidence.

### 12. Requirements, evidence assessment, and updates

Required public heading: `## Requirements, evidence assessment, and updates`.

| ID | Required question |
| --- | --- |
| HMI-ING-034 | Which primary regulatory instruments apply to this exact ingredient, form, species, market, and date? |
| HMI-ING-035 | What searches, eligibility decisions, source families, and appraisal underpin the answers and certainty judgments? |
| HMI-ING-036 | What remains unresolved, when was each answer reviewed, and what changed in this version? |

Required output: Applicable instrument links plus search, appraisal, synthesis, gap and version records; separate legal verification from certainty.

Existing HMI material to map: Regulatory limits that apply; references; sources; history.
<!-- END: hmi-contract-questions -->

## Family-specific interpretation rules

Retain the generated contamination table and its evidence links. Do not force all analytes to advance on ingest. The table must distinguish unknown/unassessed, inaccessible, searched gaps, non-detects and measured findings. Do not use a country label as a guarantee about a supplier or lot. Procurement questions should ask for evidence and verification rather than promise category-level compliance. Summary-only data remain usable at their proper scope.

## Evidence presentation

Use the occurrence, intervention, measurement and regulatory record requirements in the shared contract. The decision summary references the assessed answers; it introduces no independent conclusion. Put study-level detail in linked source records or the appropriate evidence table, and update the synthesized answer when a new study changes it. Do not append an unrelated paper-specific H2 to the bottom of the page.

After the twelve core sections retain `## References`, `## Sources`, and `## Update history` where their existing generators require them. References identify works actually cited; Sources may additionally list routed context, explicitly distinguished from evidence included in a synthesis. A large source legend does not establish search completeness or certainty.

## Review and acceptance

All 36 question IDs must resolve in the page-question record. Every complete-page answer must meet the shared review gates, including traceable scope, searches, applicability, uncertainty and actual review attribution. Structural checks and passage-level scientific review are separate. No minimum source count, mandatory effect size or mandatory positive conclusion applies.

Preserve source evidence and meaningful anchors while consolidating repetition. Do not hand-edit generator-managed regions; update the producing generator before migrating a page whose generated output conflicts with this contract. An unresolved generator conflict blocks that page's adoption, not adoption of the question register itself.
