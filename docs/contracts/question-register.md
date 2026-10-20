# Universal question register

Version 1.0.0 · 2026-10-17. Generated from [question-register.json](../../data/evidence/contracts/question-register.json); do not edit this projection directly.

Each ID is a required assessment on every page of that family. These are question templates, not completed answers. Default workflow: `unassessed`. Use the [shared evidence and answer contract](evidence-and-answers.md) for scope, search, applicability, certainty, review and completion. An answer can remain uncertain without disappearing from the inventory.

## Metal

### 1. Identity and scope

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-001 | What element, chemical species, and forms does this page cover? | identity |
| HMI-MET-002 | Which forms differ materially in food-chain behavior or health interpretation? | identity |
| HMI-MET-003 | Which analytical results can and cannot be compared or substituted? | identity |

Required output: Species/identity map; scope exclusions; analyte equivalence boundaries.

### 2. Decision summary

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-004 | What are the principal food-chain concerns supported by the reviewed evidence? | decision |
| HMI-MET-005 | Which decisions and control points deserve priority, and on what stated basis? | decision |
| HMI-MET-006 | Which unresolved questions could materially change those decisions? | decision |

Required output: A bounded answer, key control opportunities, and linked uncertainties derived from reviewed answers.

### 3. Sources and entry pathways

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-007 | Which natural and human sources introduce this contaminant into the food chain? | mechanism |
| HMI-MET-008 | What evidence links soil, water, air, agricultural inputs, or animal feed to food contamination? | mechanism |
| HMI-MET-009 | What evidence links processing, equipment, packaging, or storage to contamination? | mechanism |

Required output: Pathway map with direct observations separated from mechanisms and hypotheses.

### 4. Movement and accumulation

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-010 | How does the contaminant move from environmental media into edible plants or animals? | mechanism |
| HMI-MET-011 | What governs retention, redistribution, transformation, or transfer through food webs? | mechanism |
| HMI-MET-012 | Which transfer relationships are directly measured, modelled, or only mechanistically proposed? | mechanism |

Required output: Transfer pathways with matrix, species, conditions, measured endpoint, and limits of extrapolation.

### 5. Occurrence in foods

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-013 | In which foods and ingredients has each relevant species been measured? | occurrence |
| HMI-MET-014 | What concentrations and detection frequencies were reported for defined sampling frames? | occurrence |
| HMI-MET-015 | How representative are the available observations of the markets and foods being described? | occurrence |

Required output: Stratified occurrence table with sampling frame, species, basis, period, source, and uncertainty.

### 6. Exposure and health significance

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-016 | Which adverse health outcomes are supported for the relevant species and exposure routes? | health |
| HMI-MET-017 | How do consumption, duration, preparation, and other exposure sources affect dietary-exposure estimates? | health |
| HMI-MET-018 | Which populations are more susceptible or more exposed, and how direct is the evidence? | health |

Required output: Outcome-specific evidence summary separating hazard, intake, bioaccessibility, absorption, and health outcomes.

### 7. Variation and drivers

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-019 | How do geography, growing conditions, season, species, and variety affect occurrence? | occurrence |
| HMI-MET-020 | How do processing, formulation, and product form affect measured concentrations? | occurrence |
| HMI-MET-021 | Which observed differences have a supported explanation rather than an untested attribution? | occurrence |

Required output: Stratified comparisons with confounders, effect uncertainty, and causal limits.

### 8. Prevention, mitigation, and remediation

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-022 | Which interventions have been evaluated at each relevant supply-chain stage? | intervention |
| HMI-MET-023 | What effects do they have compared with defined alternatives, under what operating conditions? | intervention |
| HMI-MET-024 | What trade-offs, failure modes, and implementation or verification limits affect their use? | intervention |

Required output: Intervention comparison using the shared control record, including trade-offs and verification.

### 9. Sampling and measurement

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-025 | Which sampling designs can answer occurrence, lot-control, and intervention-verification questions? | analytical |
| HMI-MET-026 | Which analytical methods and speciation capabilities are validated for the relevant matrices? | analytical |
| HMI-MET-027 | How do detection limits, non-detects, sample preparation, and uncertainty constrain interpretation? | analytical |

Required output: Method-fit table covering matrix, species, sampling, validation, reporting limits, and uncertainty.

### 10. Regulatory and benchmark context

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-028 | Which government instruments, guidance values, and health reference values address this contaminant? | regulatory |
| HMI-MET-029 | What exact species, matrix, population, jurisdiction, basis, and effective period does each address? | regulatory |
| HMI-MET-030 | Which values are comparable, and what does each value fail to establish about safety or compliance? | regulatory |

Required output: Instrument-linked comparison retaining value type, legal status, scope, basis, jurisdiction, and dates.

### 11. Operational implications

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-031 | What should growers, suppliers, manufacturers, and retailers investigate or verify? | decision |
| HMI-MET-032 | What evidence and records would substantiate a claimed control or sourcing improvement? | decision |
| HMI-MET-033 | What cannot be inferred about a specific supplier, lot, product, or individual from this literature? | decision |

Required output: Role-specific implications linked to reviewed answers; no lot, brand, or legal verdict inferred from category data.

### 12. Evidence assessment and updates

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-MET-034 | What question-specific searches, eligibility criteria, and study or dataset families underpin the answers? | review |
| HMI-MET-035 | What supports the certainty judgments, conflicting findings, and unresolved evidence gaps? | review |
| HMI-MET-036 | When were the answers searched and reviewed, who or what reviewed them, and what changed? | review |

Required output: Search and screening record, appraisal, outcome-specific synthesis, limitations, version and actual review credits.

## Ingredient

### 1. Decision summary

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-004 | Which contamination concerns are supported for this ingredient and its defined forms? | decision |
| HMI-ING-005 | Which sourcing or production decisions deserve priority on the available evidence? | decision |
| HMI-ING-006 | Which evidence gaps most limit those decisions? | decision |

Required output: Current priorities and uncertainty linked to the applicable answers, without a universal risk score.

### 2. Ingredient identity and scope

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-001 | What commodity, biological species, edible part, and commercial forms does this page cover? | identity |
| HMI-ING-002 | Which processing states and derivatives are distinct materials rather than synonyms? | identity |
| HMI-ING-003 | What evidence can be transferred between those materials, and what requires a separate answer? | identity |

Required output: Material definition covering species, edible part, cultivar where relevant, grade, form, preparation, and exclusions.

### 3. Heavy metal contamination profile

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-007 | Which metals and chemical species have been investigated in this ingredient? | occurrence |
| HMI-ING-008 | What concentrations, detection frequencies, and variability were observed in each defined sampling frame? | occurrence |
| HMI-ING-009 | Which analyte questions are unassessed, access-blocked, conflicting, or searched without eligible evidence? | occurrence |

Required output: Analyte-by-scope occurrence table with source statistics, units, basis, sample frame, censoring, and uncertainty.

### 4. Sources and contamination pathways

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-010 | What evidence supports root uptake, surface deposition, feed transfer, or other biological pathways? | mechanism |
| HMI-ING-011 | What contamination can arise from agricultural inputs, harvesting, processing, equipment, or packaging? | mechanism |
| HMI-ING-012 | Which source-attribution claims are measured, modelled, inferred, or unresolved? | mechanism |

Required output: Evidence-linked pathway map separating uptake, deposition, inputs, and contact contamination.

### 5. Ranges by source, region, and variety

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-013 | How do concentrations vary by origin, growing conditions, variety, and harvest period? | occurrence |
| HMI-ING-014 | What evidence distinguishes within-lot, between-lot, supplier, and production-system variation? | occurrence |
| HMI-ING-015 | Which comparisons support a sourcing decision, and where would geographic or supplier generalization be unjustified? | occurrence |

Required output: Comparable strata and uncertainty, retaining harvest period, geography, origin versus market, and confounding.

### 6. Processing effects and derivatives

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-016 | How do specified processing or preparation steps change the measured metal endpoints? | intervention |
| HMI-ING-017 | How do derivatives, concentrates, extracts, and fractions differ from their parent ingredient? | intervention |
| HMI-ING-018 | Do changes reflect removal, redistribution, moisture or yield change, dilution, or altered species or availability? | intervention |

Required output: Input/output comparison retaining mass, moisture basis, yield, species, derivative identity, and by-products.

### 7. Mitigation options

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-019 | Which prevention, mitigation, or remediation measures have been evaluated for this ingredient? | intervention |
| HMI-ING-020 | Under what conditions, at which stage, and against which comparator do they work or fail? | intervention |
| HMI-ING-021 | What evidence supports field or commercial implementation and ongoing verification? | intervention |

Required output: Stage-specific control comparison with measured effect, applicability, readiness, and verification.

### 8. Trade-offs and failure modes

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-022 | Can an intervention increase another contaminant or redistribute contamination to a by-product? | intervention |
| HMI-ING-023 | What effects on nutrition, yield, sensory quality, stability, and waste streams were measured? | intervention |
| HMI-ING-024 | What costs, constraints, adverse effects, or failure modes are documented, and which are unknown? | intervention |

Required output: Joint outcomes for other analytes, nutrition, yield, quality, waste, and operating constraints.

### 9. Sampling and testing

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-025 | What sampling design is appropriate for the ingredient, heterogeneity, lot, and decision? | analytical |
| HMI-ING-026 | Which methods, species measurements, validation evidence, and reporting limits are needed? | analytical |
| HMI-ING-027 | What can a certificate of analysis or non-detect establish, and what remains untested? | analytical |

Required output: Matrix-specific sampling and analytical requirements; COA scope; acceptance decision assumptions.

### 10. Procurement and process control

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-028 | What origin, traceability, processing, and analytical information should a buyer request? | decision |
| HMI-ING-029 | Which control or specification choices are supported, and which are policy choices requiring separate justification? | decision |
| HMI-ING-030 | What supplier, process, or test-result changes should trigger investigation or requalification? | decision |

Required output: Evidence-grounded supplier questions, control records, change triggers, and verification needs.

### 11. Finished-product and exposure implications

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-031 | How do inclusion rate, processing yield, preparation, and other ingredients affect a finished-product estimate? | exposure |
| HMI-ING-032 | How do consumption patterns and intended populations affect dietary-exposure interpretation? | exposure |
| HMI-ING-033 | What conclusions require finished-product measurements or a separate exposure assessment? | exposure |

Required output: Explicit composition, mass balance, preparation, serving and population assumptions; measured versus modelled distinction.

### 12. Requirements, evidence assessment, and updates

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-ING-034 | Which primary regulatory instruments apply to this exact ingredient, form, species, market, and date? | regulatory |
| HMI-ING-035 | What searches, eligibility decisions, source families, and appraisal underpin the answers and certainty judgments? | review |
| HMI-ING-036 | What remains unresolved, when was each answer reviewed, and what changed in this version? | review |

Required output: Applicable instrument links plus search, appraisal, synthesis, gap and version records; separate legal verification from certainty.

## Product

### 1. Product definition and scope

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-001 | What finished-product category, formulations, formats, and intended uses does this page cover? | identity |
| HMI-PRD-002 | Which subcategories or preparation states require separate evidence and regulatory comparisons? | identity |
| HMI-PRD-003 | Which populations and exposure routes are relevant to this product? | identity |

Required output: Category and subcategory boundaries, formulation, format, preparation, intended population, use route, and exclusions.

### 2. Decision summary

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-004 | What contamination concerns are supported for this product category? | decision |
| HMI-PRD-005 | Which purchasing, manufacturing, and retail decisions can the evidence inform? | decision |
| HMI-PRD-006 | Which uncertainties prevent a reliable conclusion about the category or a particular product? | decision |

Required output: Role-specific priorities with linked evidence, uncertainty, and no certification or brand ranking.

### 3. Literature Evidence Summary

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-007 | What has been measured directly in finished products of the exact formulation and format? | occurrence |
| HMI-PRD-008 | What concentrations, detection frequencies, and variability were reported in defined markets and periods? | occurrence |
| HMI-PRD-009 | How representative are the observations, and which related-product findings provide context only? | occurrence |

Required output: Finished-product occurrence by analyte and exact subcategory, retaining statistic, sample frame, basis, period, and censoring.

### 4. Ingredients and contamination pathways

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-010 | Which ingredients or inputs are plausible contributors, and which contributions have been measured? | mechanism |
| HMI-PRD-011 | What contamination may enter during manufacturing, handling, or contact with equipment and packaging? | mechanism |
| HMI-PRD-012 | How do formulation, ingredient origins, and product format alter those pathways? | mechanism |

Required output: Contribution map distinguishing measured apportionment, modelled contributions, and hypotheses.

### 5. Manufacturing, packaging, and storage

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-013 | How do manufacturing and preparation change concentrations, species, or contaminant mass? | intervention |
| HMI-PRD-014 | What migration or release from equipment or packaging has been measured under relevant conditions? | intervention |
| HMI-PRD-015 | How do storage duration, temperature, reuse, or other use conditions affect contamination? | intervention |

Required output: Process-stage and contact comparisons with preparation, contact conditions, shelf life, mass or migration basis.

### 6. Use, consumption, and exposure

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-016 | How do serving size, consumption frequency, preparation, or non-food use determine exposure? | exposure |
| HMI-PRD-017 | What evidence addresses intended users and susceptible or highly exposed populations? | exposure |
| HMI-PRD-018 | What do exposure estimates establish, and what cannot be inferred about health effects or individual risk? | exposure |

Required output: Transparent exposure scenarios with consumption/use data, preparation, population, route, and uncertainty.

### 7. Levers to reduce contamination

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-019 | Which interventions have been evaluated in this exact product or a demonstrably applicable setting? | intervention |
| HMI-PRD-020 | What effects, trade-offs, operating conditions, and implementation evidence support each intervention? | intervention |
| HMI-PRD-021 | Which measures prevent, remove, redistribute, dilute, detect, or exclude contamination, and how are they verified? | intervention |

Required output: Comparative controls across sourcing, agronomy, processing, formulation, testing/QC, packaging and storage.

### 8. Sampling, testing, and verification

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-022 | What sampling design is needed for lot decisions, surveillance, and verification of a process change? | analytical |
| HMI-PRD-023 | Which analytical or migration/release methods match this product, species, and decision? | analytical |
| HMI-PRD-024 | What can testing and supplier COAs establish about a lot, and what cannot be generalized to all production? | analytical |

Required output: Sampling plan rationale, matrix/species method fit, reporting limits, uncertainty, and lot-inference boundaries.

### 9. Procurement and quality controls

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-025 | What evidence should manufacturers obtain from ingredient and packaging suppliers? | decision |
| HMI-PRD-026 | What records should retailers or other buyers request to assess a product-control claim? | decision |
| HMI-PRD-027 | Which changes or anomalous results should trigger investigation, retesting, or control reassessment? | decision |

Required output: Documented supplier/manufacturer/retailer questions, traceability and verification requirements, and escalation triggers.

### 10. Regulatory comparison

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-028 | Which instruments apply to the exact product, use, species, jurisdiction, and date? | regulatory |
| HMI-PRD-029 | Can the measured result be compared with a requirement on a matching basis and decision rule? | regulatory |
| HMI-PRD-030 | Where is there no verified applicable limit, only guidance, or unresolved applicability? | regulatory |

Required output: Primary instrument comparisons by value type, species, matrix, preparation, market, legal status and date.

### 11. Historical recalls and enforcement

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-031 | What verified public recalls or enforcement actions are relevant to this category? | regulatory |
| HMI-PRD-032 | What was actually established, for which lots or products, under which instrument and at what date? | regulatory |
| HMI-PRD-033 | What can and cannot be generalized from those events to the wider category or current production? | regulatory |

Required output: Dated public-event record with exact scope and finality, separate from category occurrence and causality.

### 12. Evidence assessment and updates

| ID | Question | Evidence class |
| --- | --- | --- |
| HMI-PRD-034 | What searches, eligibility criteria, and study or dataset families underpin the category answers? | review |
| HMI-PRD-035 | How were direct product evidence, ingredient evidence, and broader context separated and appraised? | review |
| HMI-PRD-036 | What supports the certainty judgments, what remains unresolved, and when and by whom were answers reviewed? | review |

Required output: Search, eligibility, direct/context separation, appraisal, source-family deduplication, contradiction and version records.

