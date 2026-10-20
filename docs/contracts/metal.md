# Metal page contract

Version 1.0.0 · adopted 2026-10-17. Read with the [shared evidence and answer contract](evidence-and-answers.md).

## Purpose and ownership

The substance or chemical species, its movement across the food chain, and cross-food evidence.

The metal page owns substance-level interpretation. Ingredient pages own commodity-specific occurrence and controls; product pages own finished-product evidence; testing, regulation and intervention pages own detailed methods or instruments. Reuse canonical syntheses with applicability links. Health treatment content is not a required supply-chain answer and must not displace the contract.

## Existing HMI identity and metadata

Keep `type: metal`, `symbol`, `name`, `species`, aliases and existing metal/species URLs. Do not merge total arsenic with inorganic arsenic, total mercury with methylmercury, or total chromium with Cr(VI). A parent element page can introduce species and link their scoped syntheses.

Add `page_contract_version: "1.0.0"` and `question_record` only after a complete 36-question record exists and the adopted-page structural checks pass. A partial page may adopt the contract with explicit unassessed questions; it may not claim complete assessment. Keep actual `updated`, search-through and reviewed dates distinct.

## Reader sequence and required answers

An overview introducing the element, species and practical scope; a decision summary that states what is supported and what remains uncertain; then the ordered evidence sections below.

The following twelve H2 roles are mandatory, in order, on adopted pages. Use these exact headings for the initial implementation. Keep existing deep links as explicit aliases/anchors during migration. Each question is required to be assessed; a documented uncertainty or justified not-applicable answer is acceptable. Empty headings, generic boilerplate or a source list alone do not answer a question.

<!-- BEGIN: hmi-contract-questions -->
### 1. Identity and scope

Required public heading: `## Identity and scope`.

| ID | Required question |
| --- | --- |
| HMI-MET-001 | What element, chemical species, and forms does this page cover? |
| HMI-MET-002 | Which forms differ materially in food-chain behavior or health interpretation? |
| HMI-MET-003 | Which analytical results can and cannot be compared or substituted? |

Required output: Species/identity map; scope exclusions; analyte equivalence boundaries.

Existing HMI material to map: Overview; species pages.

### 2. Decision summary

Required public heading: `## Decision summary`.

| ID | Required question |
| --- | --- |
| HMI-MET-004 | What are the principal food-chain concerns supported by the reviewed evidence? |
| HMI-MET-005 | Which decisions and control points deserve priority, and on what stated basis? |
| HMI-MET-006 | Which unresolved questions could materially change those decisions? |

Required output: A bounded answer, key control opportunities, and linked uncertainties derived from reviewed answers.

Existing HMI material to map: At a glance; direct answer.

### 3. Sources and entry pathways

Required public heading: `## Sources and entry pathways`.

| ID | Required question |
| --- | --- |
| HMI-MET-007 | Which natural and human sources introduce this contaminant into the food chain? |
| HMI-MET-008 | What evidence links soil, water, air, agricultural inputs, or animal feed to food contamination? |
| HMI-MET-009 | What evidence links processing, equipment, packaging, or storage to contamination? |

Required output: Pathway map with direct observations separated from mechanisms and hypotheses.

Existing HMI material to map: Typical exposure routes; supply-chain links.

### 4. Movement and accumulation

Required public heading: `## Movement and accumulation`.

| ID | Required question |
| --- | --- |
| HMI-MET-010 | How does the contaminant move from environmental media into edible plants or animals? |
| HMI-MET-011 | What governs retention, redistribution, transformation, or transfer through food webs? |
| HMI-MET-012 | Which transfer relationships are directly measured, modelled, or only mechanistically proposed? |

Required output: Transfer pathways with matrix, species, conditions, measured endpoint, and limits of extrapolation.

Existing HMI material to map: Food sources; supply-chain and microbiome context.

### 5. Occurrence in foods

Required public heading: `## Occurrence in foods`.

| ID | Required question |
| --- | --- |
| HMI-MET-013 | In which foods and ingredients has each relevant species been measured? |
| HMI-MET-014 | What concentrations and detection frequencies were reported for defined sampling frames? |
| HMI-MET-015 | How representative are the available observations of the markets and foods being described? |

Required output: Stratified occurrence table with sampling frame, species, basis, period, source, and uncertainty.

Existing HMI material to map: Food sources; source observations.

### 6. Exposure and health significance

Required public heading: `## Exposure and health significance`.

| ID | Required question |
| --- | --- |
| HMI-MET-016 | Which adverse health outcomes are supported for the relevant species and exposure routes? |
| HMI-MET-017 | How do consumption, duration, preparation, and other exposure sources affect dietary-exposure estimates? |
| HMI-MET-018 | Which populations are more susceptible or more exposed, and how direct is the evidence? |

Required output: Outcome-specific evidence summary separating hazard, intake, bioaccessibility, absorption, and health outcomes.

Existing HMI material to map: Toxicology; vulnerable populations; health pages.

### 7. Variation and drivers

Required public heading: `## Variation and drivers`.

| ID | Required question |
| --- | --- |
| HMI-MET-019 | How do geography, growing conditions, season, species, and variety affect occurrence? |
| HMI-MET-020 | How do processing, formulation, and product form affect measured concentrations? |
| HMI-MET-021 | Which observed differences have a supported explanation rather than an untested attribution? |

Required output: Stratified comparisons with confounders, effect uncertainty, and causal limits.

Existing HMI material to map: Geographic evidence; food sources.

### 8. Prevention, mitigation, and remediation

Required public heading: `## Prevention, mitigation, and remediation`.

| ID | Required question |
| --- | --- |
| HMI-MET-022 | Which interventions have been evaluated at each relevant supply-chain stage? |
| HMI-MET-023 | What effects do they have compared with defined alternatives, under what operating conditions? |
| HMI-MET-024 | What trade-offs, failure modes, and implementation or verification limits affect their use? |

Required output: Intervention comparison using the shared control record, including trade-offs and verification.

Existing HMI material to map: Mitigation pages; practical advice.

### 9. Sampling and measurement

Required public heading: `## Sampling and measurement`.

| ID | Required question |
| --- | --- |
| HMI-MET-025 | Which sampling designs can answer occurrence, lot-control, and intervention-verification questions? |
| HMI-MET-026 | Which analytical methods and speciation capabilities are validated for the relevant matrices? |
| HMI-MET-027 | How do detection limits, non-detects, sample preparation, and uncertainty constrain interpretation? |

Required output: Method-fit table covering matrix, species, sampling, validation, reporting limits, and uncertainty.

Existing HMI material to map: Testing.

### 10. Regulatory and benchmark context

Required public heading: `## Regulatory and benchmark context`.

| ID | Required question |
| --- | --- |
| HMI-MET-028 | Which government instruments, guidance values, and health reference values address this contaminant? |
| HMI-MET-029 | What exact species, matrix, population, jurisdiction, basis, and effective period does each address? |
| HMI-MET-030 | Which values are comparable, and what does each value fail to establish about safety or compliance? |

Required output: Instrument-linked comparison retaining value type, legal status, scope, basis, jurisdiction, and dates.

Existing HMI material to map: Regulatory limits; regulator pages.

### 11. Operational implications

Required public heading: `## Operational implications`.

| ID | Required question |
| --- | --- |
| HMI-MET-031 | What should growers, suppliers, manufacturers, and retailers investigate or verify? |
| HMI-MET-032 | What evidence and records would substantiate a claimed control or sourcing improvement? |
| HMI-MET-033 | What cannot be inferred about a specific supplier, lot, product, or individual from this literature? |

Required output: Role-specific implications linked to reviewed answers; no lot, brand, or legal verdict inferred from category data.

Existing HMI material to map: Food choice; FAQs; operational content.

### 12. Evidence assessment and updates

Required public heading: `## Evidence assessment and updates`.

| ID | Required question |
| --- | --- |
| HMI-MET-034 | What question-specific searches, eligibility criteria, and study or dataset families underpin the answers? |
| HMI-MET-035 | What supports the certainty judgments, conflicting findings, and unresolved evidence gaps? |
| HMI-MET-036 | When were the answers searched and reviewed, who or what reviewed them, and what changed? |

Required output: Search and screening record, appraisal, outcome-specific synthesis, limitations, version and actual review credits.

Existing HMI material to map: Open questions; references; source legend; history.
<!-- END: hmi-contract-questions -->

## Family-specific interpretation rules

Food-source summaries link to ingredient and product answers. Toxicology statements preserve species, route, population and outcome. Mechanistic and animal findings cannot establish human effects. Controls span relevant environmental inputs, agriculture/feed, harvesting, processing, contact materials, storage and preparation. Chemical scope may include metalloids and other contaminants already in HMI; clarify identity rather than changing the site taxonomy.

## Evidence presentation

Use the occurrence, intervention, measurement and regulatory record requirements in the shared contract. The decision summary references the assessed answers; it introduces no independent conclusion. Put study-level detail in linked source records or the appropriate evidence table, and update the synthesized answer when a new study changes it. Do not append an unrelated paper-specific H2 to the bottom of the page.

After the twelve core sections retain `## References`, `## Sources`, and `## Update history` where their existing generators require them. References identify works actually cited; Sources may additionally list routed context, explicitly distinguished from evidence included in a synthesis. A large source legend does not establish search completeness or certainty.

## Review and acceptance

All 36 question IDs must resolve in the page-question record. Every complete-page answer must meet the shared review gates, including traceable scope, searches, applicability, uncertainty and actual review attribution. Structural checks and passage-level scientific review are separate. No minimum source count, mandatory effect size or mandatory positive conclusion applies.

Preserve source evidence and meaningful anchors while consolidating repetition. Do not hand-edit generator-managed regions; update the producing generator before migrating a page whose generated output conflicts with this contract. An unresolved generator conflict blocks that page's adoption, not adoption of the question register itself.
