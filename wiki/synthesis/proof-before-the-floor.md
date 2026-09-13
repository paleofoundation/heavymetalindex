---
type: synthesis
title: "Proof Before the Floor: A Proposed Systems Architecture for Dietary Heavy-Metal Exposure Reduction Through Authenticated Evidence, Lot Qualification, and Method-Bound Certification"
slug: proof-before-the-floor
article_type: systems-architecture-working-paper
status: working-paper
kind: "Working paper"
author: "Karen Pendergrass"
orcid: "0000-0002-2348-7259"
audience: [regulator, laboratory, manufacturer, retailer, attorney, educator]
metals: [Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Sn, Al, Cr]
keywords: [dietary exposure, heavy metals, laboratory provenance, certificate of analysis, lot qualification, food procurement, contaminant standards, chemical speciation, conformity assessment, public-health infrastructure]
dek: "A proposed interoperable architecture connecting public evidence synthesis, laboratory-evidence authentication, upstream lot qualification, and method-bound finished-product certification, distinguishing intended functions from demonstrated outcomes. This is a systems-architecture working paper; no ecosystem efficacy study is reported."
established: 2026-09-13
date: 2026-09-13
updated: 2026-09-13
license: "© All rights reserved. Institute of Contaminant Standards / Heavy Metal Index."
cite_title: "Proof before the floor: A proposed systems architecture for dietary heavy-metal exposure reduction through authenticated evidence, lot qualification, and method-bound certification"
wiki_doi: "10.83376/hmi.proof-before-the-floor"
---

# Proof Before the Floor: A Proposed Systems Architecture for Dietary Heavy-Metal Exposure Reduction Through Authenticated Evidence, Lot Qualification, and Method-Bound Certification

**Karen Pendergrass**
Heavy Metal Index, Institute of Contaminant Standards¹

**Article type:** Systems architecture and evaluation framework.
**Manuscript status:** Canonical revised working paper. No ecosystem efficacy study is reported.
**Source review date:** September 13, 2026.

¹ Organizational diligence note: The commercial operator is Paleo Certified, Inc.; the Institute of Contaminant Standards (ICS) is its DBA. The operator reports certification-program history since 2010. This history is not evidence of performance of the architecture assessed here (ICS, n.d.-b).

## Structured abstract

**Background:** Dietary contaminant management requires decisions about particular materials, not only knowledge that hazards exist. Laboratory reports, sampling records, regulatory interpretations, and purchase commitments can remain disconnected. This paper examines the hypothesis that decision-grade proof is a binding constraint at commercially important food-supply nodes.

**Objective:** To specify an interoperable architecture connecting public evidence synthesis, laboratory-evidence authentication, upstream lot qualification, and finished-product certification, while distinguishing intended functions from demonstrated outcomes.

**Methods:** A first-principles systems analysis combines selected public regulatory and scientific anchors with explicit trust boundaries, a conditional causal model, and a prospective evaluation framework. It is neither a systematic review nor an assessment of deployed-system effectiveness.

**Architecture:** Heavy Metal Index (HMI) informs standards and Compliance Profiles. TECRID provides the authenticity and archive layer for laboratory-issued evidence. Verified Lot Exchange (VLE) binds a defined lot to a frozen Compliance Profile and a qualification decision before procurement. Heavy Metal Tested & Certified (HMTc) binds finished-product claims to published numerical limits and specified sampling, analytical, and decision procedures. The proposed common evidence unit is a panel of eight separately reported elemental totals, supplemented by pathway-dependent speciation.

**Conditional implications:** Earlier, evidence-based substitution of higher-contamination inputs could lower finished-product concentrations and dietary intake if adoption covers material consumption volumes and benefits are not offset by downstream contamination or diversion of rejected lots.

**Conclusion:** The architecture is a candidate exposure-reduction infrastructure, not a demonstrated intervention. Evaluation must establish whether authenticated evidence changes procurement, whether substitutions change consumed-food concentrations, and whether any resulting exposure differences extend beyond participating brands.

**Keywords:** dietary exposure; heavy metals; laboratory provenance; certificate of analysis; lot qualification; food procurement; contaminant standards; chemical speciation; conformity assessment; public-health infrastructure.

## Plain-language summary

A laboratory report answers a limited question about a sample. A buyer needs to know whether that evidence is authentic, represents the offered lot, and satisfies the correct purchasing requirements. This paper proposes four connected functions: HMI organizes public evidence; TECRID authenticates laboratory records; VLE qualifies specified lots before purchase; and HMTc supports finished-product claims against published limits and testing rules. These functions could contribute to lower dietary exposure only when they change which materials enter foods people actually consume. A verified report is not proof that every unit is uncontaminated, and a certification mark is not a guarantee that an entire diet is safe. Proposed pilots would measure purchasing changes, finished-product concentrations, and the destination of rejected lots. The paper reports no measured exposure reduction.

## 1. Introduction: the problem is the decision, not the document

### 1.1 Exposure is accumulated across foods

Food-contaminant regulation and dietary risk assessment address related but different objects. A maximum level concerns a specified contaminant in a specified food matrix under defined conditions. Dietary exposure concerns the quantities consumed across categories and time. Assessments from the European Food Safety Authority (EFSA) of cadmium and inorganic arsenic illustrate the importance of combining occurrence information with food-consumption data rather than interpreting isolated product measurements as complete exposure assessments (EFSA, 2012; EFSA CONTAM Panel, 2024).

For an individual $p$, a simplified dietary-exposure accounting identity is:

$$
E_{m,p}=\frac{\sum_c C_{m,c,p}I_{c,p}}{BW_p},
$$

where $C$ is concentration of metal or relevant species $m$ in food category $c$ as consumed, $I$ is consumed food mass over the stated interval, and $BW$ is body weight. This is an accounting framework, not an effect estimate. Preparation, consumption variability, and the relationship between actual purchased lots and consumed foods require explicit treatment.

Product-level compliance therefore does not logically establish that aggregate intake is below an applicable health-based guidance value. Nor does every contaminant have an accepted harmless intake threshold. EFSA's lead assessment found no evidence for a threshold for critical effects and rejected the previous tolerable weekly intake as an appropriate protective value (EFSA CONTAM Panel, 2010). A benchmark-dose reference point must not be relabeled a safe intake allowance.

Infant and child applications require particular attention to age-specific diets, body weight, and repeated consumption. The U.S. Food and Drug Administration's (FDA) Closer to Zero initiative explicitly addresses childhood dietary exposure to lead, arsenic, cadmium, and mercury through iterative assessment and action (FDA, n.d.-a). The present architecture does not assume that compliance with one product limit resolves those aggregate-exposure questions.

### 1.2 Hazard knowledge and decision-grade proof

The design proposition is expressed in the house line: "Heavy metals in food aren't a content problem. They're a proof problem." As an analytical claim, this requires qualification. Contamination is physical, and knowledge, laboratory capacity, agricultural practice, enforcement, and remediation remain necessary. The narrower hypothesis is that proof becomes a binding constraint where buyers have plausible alternatives but cannot reliably connect evidence to the material and requirements governing a purchase.

A certificate of analysis (COA) can be scientifically valid yet commercially insufficient. A forwarded PDF may lack a checkable issuer relationship, visible corrections, or an unambiguous connection to the offered lot. Conversely, an authentic laboratory record may accurately describe an unrepresentative sample. Provenance, analytical validity, sampling validity, and compliance must therefore remain separate determinations. W3C's credential model makes the analogous distinction that verification does not establish the truth of the encoded claims (World Wide Web Consortium [W3C], 2025).

The failure model includes stale or altered reports, mismatched lot identifiers, supplier-selected convenience samples, heterogeneous lots, inappropriate reporting limits, and decisions made only after manufacturing or retail delivery. Repeated testing may reflect unresolved identity or acceptance requirements rather than a need for additional analytical information. These are candidate failure modes, not an estimated account of their market prevalence. [EMPIRICAL INPUT NEEDED: category-specific incidence, costs, and causes of documentary failures, duplicate assays, and late rejections.]

Late discovery is not merely hypothetical. FDA's cinnamon-applesauce investigation identified lead chromate in implicated cinnamon and documented difficulties removing recalled finished products from store shelves (FDA, 2024). That event establishes the possibility of an ingredient-origin failure reaching consumers. It does not establish that the proposed ecosystem would have prevented it.

## 2. Analytical approach and scope

This paper uses a requirements-oriented systems analysis. Selected anchors comprise official contaminant standards, government exposure assessments, laboratory and sampling guidance, and public descriptions of the proposed evidence infrastructure. They establish context and constraints, not a pooled effect size. The analysis identifies the decision object at each stage, allocates responsibility, specifies interfaces, maps conditional causal links, and proposes observations capable of refuting the intervention hypothesis.

The architecture below is a target specification derived from the project brief. Descriptions such as "requires," "outputs," and "must" are normative design requirements. They are not findings that every interface, laboratory relationship, transaction control, or certification procedure is deployed, validated, or accepted by regulators. Public project pages provide organizational context only. No transaction database, implementation audit, laboratory-validation dataset, or population outcome dataset was evaluated.

"Proof" means inspectable evidence sufficient for a bounded decision under declared rules, not mathematical certainty about every unit. "Before the floor" means before a material crosses a manufacturing acceptance gate or a finished product reaches a retail sales floor. "Method-bound certification" means that a finished-product conformance claim is inseparable from its published sampling, analytical, interpretation, and surveillance procedures. It is not laboratory accreditation or approval of an analytical technique in the abstract.

"Heavy metals" is retained as a program term rather than a strict chemical classification. Arsenic is included as a metalloid. The proposed Big-8 panel consists of lead, cadmium, arsenic, mercury, nickel, tin, aluminum, and chromium. "Totals" means the total concentration of each element separately. It never means adding their concentrations into a single toxicity score.

## 3. Architectural results: four units, four bounded decisions

### 3.1 HMI: public evidence and standards intelligence

HMI's job is to organize occurrence evidence, regulatory instruments, analytical context, and uncertainties into a public reference layer. Inputs include primary studies, surveillance reports, finalized legal instruments, and documented revisions. Outputs proposed for interoperability include attributable category evidence summaries and structured limit references with jurisdiction, legal status, commodity definition, analyte, reporting basis, effective date, and source version. HMI describes itself as a public reference project rather than a product-certification authority (Heavy Metal Index, n.d.).

HMI informs Compliance Profiles and HMTc standards, but the responsible standards body adopts them. A literature concentration range is not automatically a purchasing limit. Neither a published study nor an HMI synthesis authenticates the evidence for a commercial lot. Adverse findings, uncertain evidence, and standards-relevant null results require the same editorial treatment as favorable findings.

### 3.2 TECRID: laboratory-evidence authenticity and continuity

TECRID, the Test Evidence Credential Record Identifier, is the proposed authenticity and archive spine. Its job is to make laboratory-issued evidence resolvable to its issuer, structured content, version, and current status. Its public description distinguishes laboratory issuance from document upload and explicitly separates authentication from product-safety certification (ICS, n.d.-a, n.d.-b).

The interface contract should preserve the issuing laboratory, report and sample identifiers, dates, methods, measurands, units, sample basis, detection and quantification limits, relevant uncertainty, source-document fingerprint, and correction relationships. Results below a reporting threshold remain censored results, not zeros. Access permissions must distinguish public verification information from confidential analytical or commercial fields.

The trust boundary ends at the authenticated statement and its attributed origin. A valid signature cannot establish whether the collector sampled representatively, whether a supplier substituted material, or whether a method was fit for the matrix. A genuine record can contain a laboratory error. Corrections, disputes, compromised issuer credentials, and revocation therefore require visible status handling rather than silent replacement. This division is consistent with credential-verification principles, without claiming that TECRID has implemented any particular W3C conformance profile (W3C, 2025).

### 3.3 VLE: a bounded lot decision before commitment

VLE's decision object is not a supplier's reputation or a product family's historical average. It is an identified quantity of material with a defined sampling relationship and a qualification result against a frozen Compliance Profile. The intended sequence is: nominate, freeze the applicable profile, sample, receive TECRID-backed evidence, evaluate, record QUALIFIED status if warranted, and reserve or trade the specified quantity.

A Compliance Profile must identify the intended use and markets, category and formulation, required totals and species, numerical limits, units and moisture basis, sampling plan, method requirements, decision rule, and validity or reassessment conditions. It is frozen before results are used to choose acceptance criteria. Qualification is a time-stamped, version-specific event. It is not an assertion of permanent or universal legal compliance.

The sampling record belongs to VLE's diligence boundary, not to TECRID's signature. It must identify who selected and paid the sampler, the collector's role and conflicts, the sampling frame, increments or composites, custody transfers, retained material, and the physical lot boundary. Subsequent changes to composition or identity require reassessment. Lot splits require traceable quantity accounting; mixing creates a new decision object rather than automatic inheritance of the parent lots' qualification.

A frozen record does not freeze law, material condition, or credential validity. Newly applicable requirements, evidence corrections, compromised custody, or other specified triggers must produce a new status event and, where appropriate, suspend use of the earlier qualification. Reservation or trade must reference the same bounded quantity and a status check at commitment. This paper specifies these requirements without asserting that exchange settlement, insurance, logistics, or inventory controls already exist.

### 3.4 HMTc: finished-product claims bound to limits and procedures

HMTc's job is to evaluate defined finished products against a published standard and administer a scoped certification mark. Inputs comprise finished-product evidence, the applicable standard edition, relevant manufacturing and sampling records, and required follow-up. Outputs are a conformance decision, certificate scope, status, and an evidence-linked claim surface.

The proposed unit of proof is a complete Big-8 totals panel plus any required speciation. The panel is a minimum program convention, not proof that eight elements exhaust every relevant hazard. A VLE-qualified ingredient does not automatically confer finished-product certification. Other ingredients, processing, concentration changes, equipment, packaging, or loss of identity can invalidate an ingredient-to-product inference; the applicable finished-product method must address that inference explicitly.

A claim should identify the product or covered lot scope, standard version, numerical limits, reporting basis, testing doctrine, and current certification status. The mark must not mean "metal-free," "safe in unlimited servings," "regulator approved," or "all future lots conform." Continuing certification requires a published policy for surveillance, exceptions, suspension, and withdrawal. No universal retesting frequency is asserted here.

### Table 1. Unit, job, trust boundary, and non-goals

| Unit | Job and principal input to output | Trust boundary | Non-goals |
|---|---|---|---|
| HMI | Public studies and legal sources to attributable occurrence and standards intelligence | Fidelity of synthesis, classification, provenance, and disclosed uncertainty | Authenticating commercial samples; making lot decisions; replacing regulators |
| TECRID | Laboratory-issued structured evidence to persistent, checkable issuance, version, and status record | Issuer attribution and record integrity, subject to credential and archive controls | Proving representative sampling, analytical truth, product safety, or VLE diligence |
| VLE | Defined lot, sampling record, authenticated panel, frozen profile to scoped qualification and reservation/trade reference | Sample-to-lot relationship, profile evaluation, quantity identity, and decision history | Guaranteeing every unit; certifying finished goods; assuming worldwide legal acceptance |
| HMTc | Finished-product evidence and published method/limits to scoped certificate and mark status | Conformance to the named standard within its stated sampling and surveillance scope | Certifying an entire diet; granting legal immunity; replacing laboratory accreditation |

### 3.5 Interfaces and the feedback loop

The principal flow is HMI to TECRID to VLE to HMTc, but it is not a dependency chain in which every participant must buy all four services. More precisely, HMI informs profiles and standards; laboratories issue the evidence authenticated through TECRID; VLE and HMTc evaluate that evidence for different decisions. Finished-product testing also connects directly to TECRID. HMTc should not require VLE sourcing merely to preserve commercial exclusivity.

A proposed feedback loop returns appropriately governed occurrence and failure information to HMI, followed by prospective standards review and new profile versions. Commercial datasets must be labeled as such. Qualified-lot records cannot be represented as an unbiased survey of the food supply, and unsuccessful nominations must not disappear from evaluable records. Permissioned commercial details and public regulatory disclosures require separate access rules.

## 4. Conditional mechanism of exposure reduction

The primary hypothesis is that authenticated, lot-linked evidence coupled to a procurement rule can increase the frequency of earlier rejection or substitution of nonqualifying inputs relative to the buyer's existing compliant process. The first causal question is therefore behavioral: does evidence change a commitment before material is incorporated, rather than merely document a decision already made?

If selected replacement inputs have lower relevant concentrations, and manufacturing does not offset the difference, finished-product concentrations could be lower than under the counterfactual sourcing decision. Both clauses matter. Qualification against a permissive profile need not select a lower-contamination lot. Replacing an input after it would otherwise have been rejected adds no attributable benefit. Finished-product measurements are necessary to test the input-to-output link.

Lower concentrations in foods actually consumed could reduce intake of the measured metal or species, conditional on consumption patterns and coverage. A change in a catalog, certificate count, or warehouse inventory is not itself a change in exposure. The pathway also requires continued identity, effective handling of failed lots, and sufficient adoption in categories consumed by the relevant population.

A decisive counterexample is redistribution. Suppose participating buyers obtain lower-contamination lots while rejected lots are sold into unobserved food markets. The participating supply chain may improve while total dietary contaminant mass consumed remains unchanged. In that case, any population benefit depends on who consumes the redistributed material, quantities consumed, and differences in vulnerability. "Rejected by VLE" must not be counted as "removed from the food system."

Sustained demand for lower-contamination inputs could also create incentives for source reduction, but supplier response is a separate empirical hypothesis. The architecture itself neither removes metals from soil nor remediates ingredients. Agricultural, processing, enforcement, and waste-management interventions remain distinct mechanisms. Clinical benefits would require additional exposure-response evidence and follow-up, not inference from authenticated records alone.

## 5. Priority design partners and possible global leverage

Priority should reflect the intersection of vulnerable-population intake, pathway-specific occurrence, actionable supply choices, enforceable purchasing authority, and documented failure expenditure. This is a proposed prioritization rule, not a quantified global ranking. The relevant unit is consumed volume influenced by a purchasing node, not the number of brands displaying a mark.

**First, infant and child foods with ingredient-level purchasing control.** Rice-based infant cereals provide a defined inorganic-arsenic pathway and an existing FDA action-level framework. Infant and child food manufacturers also face FDA lead guidance and, for covered California baby foods, statutory testing and disclosure duties (FDA, 2020, 2025; California Legislature, 2023). Suitable design partners would include manufacturers and ingredient suppliers willing to register nominations before purchase and retain finished-product linkage. Infant formula requires a separate profile and legal analysis; it is excluded from the cited California baby-food provision.

**Second, cocoa ingredients and their downstream formulations.** Cocoa and chocolate are established cadmium-relevant categories with composition-specific maximum levels in Codex and EU frameworks (Codex Alimentarius Commission, 2025; European Commission, 2023). Cocoa is a useful design case because ingredient selection, formulation, and finished-product category must be distinguished. It should not be presented as the dominant population cadmium source: EFSA's European assessment also identifies important contributions from staple food categories (EFSA, 2012).

**Third, private-label and retailer procurement spanning those categories.** Their proposed role is specification adoption across purchasing contracts, rather than endorsement through isolated consumer labels. Potential leverage depends on verified purchasing authority, affected volume, and enforceable acceptance gates. [EMPIRICAL INPUT NEEDED: priority-node procurement volumes, vulnerable-population consumption coverage, supplier alternatives, and attributable metals-failure expenditure.]

Lead-related ingredient pathways, including spices used in composite foods, should cut across these priorities rather than form a separate alphabetical category list. FDA's cinnamon investigation supports attention to ingredient identity and economically motivated adulteration, but not the claim that one panel or platform detects every adulteration pathway (FDA, 2024).

## 6. Economics: purchasing the appropriate assurance

The commercial hypothesis is that upstream qualification may be economically preferable when its incremental cost is lower than the expected costs of avoidable late rejection, noninformative duplicate testing, and failure response. The comparison must include sampling, analytical work, integration, rejected-material disposition, supplier premiums, working-capital effects, and administration. It must not assume that all existing quality expenditure disappears.

For a buyer, a conceptual adoption condition is:

$$
\text{Expected avoidable downstream costs and uncertainty}
>
\text{Incremental upstream assurance and substitution costs}.
$$

Neither side is estimated here. Crisis communications and recall response are candidate cost categories, not guaranteed savings or substitutes for preventing harm. Some testing duplication is valuable independent surveillance. Removing independent checks simply because an original result is authentic would exchange analytical assurance for documentary convenience.

Reusable, accepted evidence could reduce repeated document reconciliation and tests commissioned solely because earlier evidence cannot be authenticated or matched to the transaction. Demonstrating that effect requires classifying why each repeated assay was ordered and whether its elimination changes the error rate. Laboratories should be paid for scientifically necessary work, including unresolved species and defensible independent verification, not treated as costs to bypass.

TECRID-style core authenticity should not tax trust. Basic issuance, resolution, and status checking are proposed as free trust infrastructure, consistent with TECRID's stated free-core principle (ICS, n.d.-b). Commercial charges should concern additional workflow, qualified-lot transactions, certification administration, or licensing rather than a more favorable verification outcome. Payment must not alter an issuer decision, erase a failed result, or buy qualification.

A free core could lower adoption friction, but its operating costs and funding dependencies remain empirical questions. Transparent funding, exportable records, and continuity arrangements are required design commitments. Free authentication does not mean unrestricted disclosure of confidential results, unlimited subsidized computation, or compulsory bundling with the operator's other services.

## 7. Governance and integrity rules

### 7.1 Numerical claims require typed regulatory provenance

Every limit represented as a certification criterion must be numerical and accompanied by analyte, unit, food basis, scope, source, and version. "Monitored," a blank field, or "tested" is not a published limit. An unmeasured analyte must remain explicitly unmeasured; a nondetect must retain its reporting threshold. Missing evidence cannot silently become a passing panel. A nondetect whose stated reporting threshold exceeds the applicable ceiling is insufficient, by itself, to establish conformance.

The proposed government-floor rule is an upper bound on the certification ceiling: use the lowest applicable, finalized, commensurable government maximum level within the profile's declared jurisdictional scope. All legally applicable requirements must still be satisfied. A more stringent foreign comparator may be adopted as a program criterion, but its voluntary application must not be described as local law. Draft and future-effective requirements belong in separately identified fields, with prospective reassessment rules.

Different regulatory objects must remain typed. EU contaminant maximum levels are legal concentration limits. FDA action levels communicate agency thinking and potential enforcement considerations, but guidance does not itself establish legally enforceable responsibilities. Codex maximum levels are international standards, not automatically domestic law (European Commission, 2023; FDA, 2020, 2025; Codex Alimentarius Commission, 2025). They must not be combined into an unqualified "strictest law worldwide" claim. Final FDA action levels and Codex limits may be adopted as explicit program criteria while retaining their actual source status.

California Proposition 65 concerns exposure-based warning obligations and associated exemptions or safe-harbor assessments, not a general table of food concentration maximum levels. AB 899 introduced testing and disclosure duties for defined baby foods; those duties do not establish that a disclosed product is safe or certified (Office of Environmental Health Hazard Assessment [OEHHA], n.d.; California Legislature, 2023).

Where a directly applicable numerical limit is absent, the proposed standard requires disclosed read-across: source category, target category, analyte or species, intended population, consumption basis, processing assumptions, uncertainty, and approval rationale. Such a value is a program limit, not a government maximum level. A health-based intake value cannot become a concentration ceiling without explicit intake and allocation assumptions. Where neither a defensible direct limit nor defensible read-across exists, the affected category cannot receive an unqualified Big-8 conformance claim.

### 7.2 Totals first, speciation when the pathway requires it

The analytical doctrine begins with separately reported Big-8 totals, followed by prespecified pathway or reflex decisions. FDA's Elemental Analysis Manual distinguishes multielement methods from matrix-specific arsenic and mercury speciation methods; a generic instrument label is therefore insufficient to identify the evidence provided (FDA, n.d.-b). Methods must be fit for the matrix, element, concentration range, and intended decision.

Where the governing rule permits screening, a total-element result sufficiently below a species limit can support a conservative upper-bound decision. A total result above that species limit does not establish species nonconformance. Codex's rice provisions explicitly distinguish total-arsenic screening from follow-up inorganic-arsenic testing (Codex Alimentarius Commission, 2025). Mandatory species testing, pathway concerns, inadequate reporting limits, or uncertainty near the decision boundary override any generic shortcut.

On a common elemental-mass and sample basis, the physical relationships are:

$$
\mathrm{iAs}\leq\mathrm{tAs},\qquad
\mathrm{MeHg}\leq\mathrm{tHg},\qquad
\mathrm{Cr(VI)}\leq\mathrm{tCr}.
$$

Measured estimates can appear to violate these relationships because of uncertainty, extraction recovery, aliquot heterogeneity, species conversion, or inconsistent reporting conventions. Such cases require investigation and transparent qualification of the result, not automatic clipping to the parent value. Species identities must not be inferred solely from totals. For chromium in particular, sample preservation and interconversion must be addressed by the relevant method rather than assumed from an elemental assay.

Published program limits for a species and its parent should also satisfy the declared species-within-parent hierarchy on a common basis. Original regulatory values must remain unchanged in the source record; any effective program adjustment requires an explicit derivation. A missing defensible species method is a limitation on the claim, not permission to publish a species result from a total measurement.

### 7.3 Sampling, uncertainty, and immutable decisions

Lot qualification requires a defined sampling objective. An estimate of a lot mean is not proof that every package satisfies an individual-unit criterion. Compositing may conceal local extremes, and sample size alone does not remedy biased selection. Sampling plans and acceptance rules must be justified for the commodity, heterogeneity, and relevant producer and consumer decision risks (Codex Alimentarius Commission, 2023).

Laboratory competence and conformity decisions require separate controls. ISO/IEC 17025 addresses laboratory competence, impartiality, and consistent operation; ILAC G8 addresses decision rules and statements of conformity (International Organization for Standardization [ISO], 2017; International Laboratory Accreditation Cooperation [ILAC], 2019). The architecture should record the applicable accreditation scope and a prespecified uncertainty rule. No universal guard band or sampling frequency is proposed for every product or jurisdiction.

Evidence, standards, and qualification events require preserved versions, correction relationships, and readable histories. Substantive standards revisions should have version-specific DOI records and explicit links between editions, following established persistent-identifier practices (DataCite, n.d.). A DOI identifies a citable object; it does not confer peer review, government approval, scientific validity, or technical immutability. Preservation and change control remain operational responsibilities.

### 7.4 Conflicts, access, and enforcement of scope

Common ownership creates a structural conflict: the same ecosystem may synthesize evidence, maintain authentication infrastructure, facilitate transactions, and administer certification. Proposed safeguards include published conflict registers, separation of sales from technical decisions, independent appeals, external methodological review, and publication of adverse as well as favorable pilot outcomes. Shared ownership must not be described as independent third-party separation.

A credible claim surface requires a resolvable certificate status and a match to the observed product, not merely permission to reproduce a logo. Suspension and revocation events must propagate to relevant recipients without erasing historical evidence. Commercial confidentiality cannot justify withholding legally required disclosures. Conversely, public verification must not reveal confidential fields beyond the authorized or legally required scope.

## 8. Measurement framework: making potential falsifiable

Evaluation should distinguish implementation, decisions, food composition, intake, and health. No baseline for any level is supplied here. Pilot protocols should register inclusion criteria, decision rules, sampling procedures, comparators, and analysis plans before outcome review. All nominated lots, including withdrawals and failures, belong in the evaluable cohort.

### Table 2. Proposed indicators and necessary denominators

| Indicator | Operational definition and interpretation |
|---|---|
| Authenticated-panel trade share | Unique traded lots with complete, current TECRID-authenticated required panels before commitment, divided by all eligible traded lots in the defined cohort. Report quantity-weighted coverage separately. |
| QUALIFIED lot volume | Unique physical quantity qualified, contracted, received, and incorporated in priority categories. Report these stages separately and prevent double counting across lot splits and resales. |
| Timing and location of rejection | Distribution of elapsed time from nomination and evidence availability to disposition, plus the share of adverse decisions made before manufacturing, after production, or at retail. Record later-discovered failures too. |
| Procurement substitution | Identified nonqualifying nominations replaced before use, with substitute identity, quantity, and contemporaneous comparator evidence. Rejection counts alone do not establish substitution. |
| Standards concordance | Among comparable regulated category-analyte cells, the share whose published limit is no higher than the lowest applicable finalized maximum level, with correct scope and basis. Audit read-across cells and FDA/Codex comparators separately. |
| Post-market mark presence | Audited shelf or website observations with a valid certificate matching the displayed product, divided by the prespecified observation sample. This is an adoption signal, not an exposure endpoint. |
| Analytical and outcome concordance | Agreement between qualification decisions and independently sampled, appropriately analyzed material; paired finished-product concentration distributions. Disagreement requires uncertainty-aware investigation. |
| Rejected-lot disposition and coverage | Traceable destinations of rejected quantities, unresolved destinations, and the proportion of relevant consumed volume actually represented. Unknown disposition is not zero exposure. |

The central empirical prediction is a lower counterfactual-adjusted concentration distribution in consumed products attributable to upstream substitution, not merely a higher qualification rate. A high pass rate could reflect selection of already-clean suppliers, permissive limits, or selective reporting. Independent sampling must therefore extend beyond self-selected successful lots.

Where feasible, use randomized phased adoption across purchasing units while preserving existing legal and safety controls. Otherwise, use preregistered contemporaneous comparators and explicitly address supplier selection, origin, season, formulation, baseline testing intensity, and regulatory changes. Separating evidence digitization from procurement-linked qualification is necessary to identify which component, if any, changes decisions. A before-and-after comparison without these controls cannot establish attribution.

Later exposure modeling requires joint occurrence and intake information. For otherwise comparable individuals or modeled populations:

$$
\Delta E_{m,p}=\frac{\sum_c C^{(0)}_{m,c,p}I^{(0)}_{c,p}
-\sum_c C^{(1)}_{m,c,p}I^{(1)}_{c,p}}{BW_p},
$$

where superscripts identify the counterfactual and intervention scenarios. The intervention concentrations must reflect the mitigated fraction of consumed volume, processing and preparation, unqualified supply, and diversion. When concentration and intake are dependent, multiplying unrelated marginal averages is insufficient. Metals and species require separate exposure calculations; any mixture-risk assessment needs additional justification.

[EMPIRICAL INPUT NEEDED: representative occurrence distributions before and after procurement changes; consumed-volume coverage; substitution fractions; age-specific intake and body-weight distributions; processing factors; reporting-limit treatment; rejected-lot destinations; and uncertainty and counterfactual assumptions.]

The mechanism is unsupported where authentication does not change procurement, procurement changes do not change finished-food concentrations, or measured differences disappear after accounting for selection and displaced exposure. Biomarker and clinical studies would be subsequent investigations with their own design, consent, and attribution requirements.

## 9. Discussion: limitations and counterarguments

The strongest counterargument is that proof is not the binding constraint. A buyer may already possess credible data yet lack affordable lower-contamination supply, bargaining authority, or a lawful disposition route. In those settings, an additional evidence layer may add expense without changing sourcing. Pilots must document which constraint actually prevented a different decision.

Adoption may concentrate in premium products, analytically convenient categories, or already-capable suppliers. That pattern could exclude the populations or commodities contributing most to exposure. Lower- and middle-income settings may face constraints in representative sampling, transport, equipment, reference materials, accreditation, or sustainable laboratory funding. These are design risks requiring local assessment, not quantified claims about national capacity.

A uniform panel may also misallocate resources where other hazards dominate. A mark can invite greenwashing when consumers infer broader protection than the evidence supports. Compromised issuer credentials, collusion, sample substitution, software errors, archive failure, and incorrect category mapping remain adversarial threats. Cryptography addresses only some of them.

Regulatory recognition, retailer acceptance, and commercial interoperability require separate demonstrations; none follows automatically from a DOI, laboratory credential, or private mark. Free authenticity infrastructure may still depend on concentrated funding or operator control. Strict procurement criteria can create affordability, nutrition, supplier-exclusion, and waste consequences, which must be measured alongside contaminant outcomes.

Finally, ingredient selection alone does not eliminate environmental contamination. A durable public-health program must connect evidence-based purchasing with source reduction and accountable treatment of rejected material. Knowledge alone does not change exposure, and better proof without changed material flows has the same limitation.

## 10. Conclusion

The proposed HMI to TECRID to VLE to HMTc architecture treats exposure reduction as an evidence-to-procurement problem while retaining the physical, analytical, and institutional limits of that framing. It separates public knowledge, evidence authenticity, lot qualification, and finished-product conformance rather than allowing one to impersonate another.

Its public-health potential depends on demonstrable upstream substitution, lower concentrations in foods actually consumed, meaningful population coverage, and the absence of offsetting diversion. The next empirical step is a category pilot that records nominations before purchase, preserves failures, measures linked finished products, and accounts for rejected-lot destinations. A successful claim must ultimately concern changed exposure, not the volume of evidence archived.

## Box 1. For policymakers, buyers, and laboratories

**Common question: What, exactly, has been established?**

Treat four determinations separately: who issued the evidence; whether the sample represents the material; whether the result satisfies the correct rule; and whether the affected food makes a meaningful difference to dietary exposure. An affirmative answer at one level does not settle the others. The architecture is proposed infrastructure, not an independently demonstrated health intervention.

**For policymakers**

Request interoperable, attributable records with declared analytical and legal scope. Keep binding maximum levels, FDA action levels, exposure-based warning thresholds, and private program limits distinct. Require corrections, withdrawal status, and preservation of the version used for a decision. Public reporting should distinguish certification uptake from measured changes in food composition or intake. Evaluate whether rejected material leaves food use, is remediated lawfully, or simply enters a less visible market. Pair any pilot with an assessment of affordability, access, laboratory capacity, and effects on smaller suppliers. Regulatory acceptance should remain an explicit evaluation question.

**For buyers**

Specify the intended use and applicable Compliance Profile before reviewing results. Purchase a defined quantity tied to a defined lot, not an undated assurance about a supplier. Require both the laboratory's authenticated evidence and the sampling record. Check units, sample basis, quantification limits, required species, uncertainty rules, and credential status. Record the decision before manufacturing or retail acceptance. Keep the initial nomination, any rejection, and the actual substitute linked. An ingredient's qualification does not replace the evidence required for the finished product. Cost comparisons should distinguish unnecessary documentary repetition from scientifically justified independent testing.

**For laboratories**

Issue structured results with explicit methods, measurands, reporting limits, relevant uncertainty, and sample identifiers. Separate statements about laboratory work from statements about collection or lot representativeness. Use totals and species labels precisely; never substitute total arsenic for a measured inorganic-arsenic result. Record corrections as linked versions, not overwritten files. Flag apparent species-parent inconsistencies for investigation. Establish procedures for issuer-credential compromise and withdrawal of affected records. Commercial payment must not determine analytical interpretation or conformity status. Basic authenticity should remain accessible without forcing clients into unrelated certification or trading services.

**Minimum pilot record**

Link the frozen profile, nominated lot, sampling event, laboratory-issued record, qualification decision, procurement commitment, finished-product record, and rejected-material disposition. Report denominators and missing data. A shelf mark or a larger archive is an implementation observation. Neither establishes exposure reduction.

## Figures

The three figures below are conceptual schematics rendered from the manuscript's publication-ready figure descriptions. They depict proposed information contracts and hypothesized causal links, not deployed integrations or measured outcomes; each caption retains that conditional language.

### Figure 1. The proof problem versus content theater

![Figure 1. Two panels. Panel A: a study library, forwarded COAs, and repeated assays accumulate around a purchase decision, with unresolved labels for issuer, lot identity, sampling, applicable limit, and correction status. Panel B: an authenticated laboratory statement, a sampling-to-lot relationship, and a frozen numerical profile feed an accept, reject, or unresolved decision before commitment, with finished-product verification retained downstream.](/static/figures/proof-before-the-floor/fig1.svg)

A two-panel diagram contrasts decision objects. Panel A shows a study library, forwarded COAs, and repeated assays accumulating around a purchase decision, with unresolved labels for issuer, lot identity, sampling, applicable limit, and correction status. Panel B shows a bounded decision record linking an authenticated laboratory statement, a sampling-to-lot relationship, and a frozen numerical profile to an accept, reject, or unresolved decision before commitment. A separate downstream box retains finished-product verification. Caption: More documentation is not equivalent to decision-grade proof; the proposed alternative specifies what each decision is entitled to conclude. The panels are conceptual, not comparative outcome data.

### Figure 2. HMI to TECRID to VLE to HMTc interfaces and trust boundaries

![Figure 2. Four labeled functional regions. HMI sends versioned occurrence and regulatory intelligence to the VLE Compliance Profile and the HMTc standard. Laboratories send issued evidence to TECRID, which sends evidence references and status to both VLE and HMTc. Independent sampling and custody records enter VLE through a separate boundary. VLE connects the qualified quantity to manufacturing; manufacturing and finished-product testing connect to HMTc. Dotted governed-feedback arrows return operational data from VLE and HMTc to HMI.](/static/figures/proof-before-the-floor/fig2.svg)

Four labeled functional regions rather than a single safety pipeline. HMI sends versioned occurrence and regulatory intelligence to the VLE Compliance Profile and the HMTc standard. Laboratories send issued evidence to TECRID. TECRID sends evidence references and status to both VLE and HMTc. Independent sampling and custody records enter VLE through a separate boundary. VLE connects the qualified quantity and procurement record to manufacturing; manufacturing and finished-product testing connect to HMTc. A governed feedback arrow returns explicitly labeled operational data to HMI. Caption: Arrows represent proposed information contracts, not deployed integrations, compulsory commercial bundling, or automatic transfer of certification.

### Figure 3. Conditional exposure-reduction pathway and competing routes

![Figure 3. A vertical causal chain: authenticated, lot-linked evidence to changed upstream purchasing, to substitution with lower-concentration inputs, to lower finished-food concentrations, to lower concentrations in consumed foods, to lower dietary intake. Every connector is labeled hypothesized; requires measurement. A dashed offsetting branch runs from substitution to rejected lots resold or diverted into other food markets. An assumptions box attaches to the finished-food step, and clinical outcomes sit beyond a dashed boundary labeled additional exposure-response evidence required.](/static/figures/proof-before-the-floor/fig3.svg)

The main chain runs from authenticated, lot-linked evidence to changed upstream purchasing, to substitution with lower-concentration inputs, to lower finished-food concentrations, to lower concentrations in consumed foods, to lower dietary intake. Every arrow is hypothesized and requires measurement. Assumption boxes attach for representative sampling, correct criteria and speciation, buyer authority, supply alternatives, identity preservation, processing effects, and consumption coverage. An offsetting branch runs from rejection to resale or diversion into other food markets. Clinical outcomes sit beyond a separate boundary labeled additional exposure-response evidence required. Caption: Any exposure reduction is conditional on the full pathway and on the net consequences of displaced material.

## Declarations

**Competing interests:** The author is founder of Heavy Metal Index (HMI), TECRID, Verified Lot Exchange (VLE), and Heavy Metal Tested & Certified (HMTc), and co-founder of the Paleo Foundation. The Institute of Contaminant Standards (ICS) is a DBA of Paleo Certified, Inc., the commercial operator of related certification and standards activity. The author has ownership and operator interests in this ecosystem. Remuneration, if any, may arise from certification, licensing, or related commercial services. No external research grant funded this working paper. Affiliation and ownership are not evidence of independent validation of the proposed architecture.

**Data availability:** No original empirical dataset or numerical exposure-effect estimate is reported. Public sources underlying the conceptual analysis are listed below. Proposed pilot data requirements are specified in Section 8.

**Publication status:** This manuscript is a working paper. DOI registration and publication on HMI would not, by themselves, establish peer review or regulatory endorsement.

## Provisional status

This is a systems-architecture working paper, not an evidence synthesis and not an efficacy study. Every architectural description is a design requirement, not a claim of deployment, validation, or regulatory acceptance, and every exposure-reduction statement is conditional on the mechanisms set out in Sections 4 and 8. Every exposure, causal, efficiency, adoption, and favorable-assurance statement in this paper is potential rather than demonstrated; no ecosystem-efficacy sentence qualifies as demonstrated. The paper will remain a working paper until an independently evaluated category pilot of the kind specified in Section 8 reports outcomes.

## References

1. California Legislature. (2023). *Assembly Bill 899: Food safety: Baby food* (Chapter 668). Codified, as amended, at California Health and Safety Code § 110962. [Enacted bill](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB899); [current code provision](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=110962.).
2. Codex Alimentarius Commission. (2023). *General guidelines on sampling* (CXG 50-2004, revised 2023). Food and Agriculture Organization of the United Nations and World Health Organization. [Official text](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXG%2050-2004/CXG_050e.pdf).
3. Codex Alimentarius Commission. (2025). *General standard for contaminants and toxins in food and feed* (CXS 193-1995, amended 2025). Food and Agriculture Organization of the United Nations and World Health Organization. [Official text](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS%20193-1995/CXS_193e.pdf).
4. DataCite. (n.d.). *Connecting different versions, formats and more with Related Identifiers*. Retrieved September 13, 2026, from [DataCite Support](https://support.datacite.org/docs/connecting-versions-with-related-identifiers).
5. European Commission. (2023). Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006. *Official Journal of the European Union, L 119*, 103-157. As amended; category-specific applications require the applicable version and effective date. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2023/915/oj/eng).
6. European Food Safety Authority. (2012). Cadmium dietary exposure in the European population. *EFSA Journal, 10*(1), 2551. [https://doi.org/10.2903/j.efsa.2012.2551](https://doi.org/10.2903/j.efsa.2012.2551).
7. EFSA Panel on Contaminants in the Food Chain (CONTAM). (2010). Scientific opinion on lead in food. *EFSA Journal, 8*(4), 1570. [https://doi.org/10.2903/j.efsa.2010.1570](https://doi.org/10.2903/j.efsa.2010.1570).
8. EFSA Panel on Contaminants in the Food Chain (CONTAM). (2024). Update of the risk assessment of inorganic arsenic in food. *EFSA Journal, 22*(1), e8488. [https://doi.org/10.2903/j.efsa.2024.8488](https://doi.org/10.2903/j.efsa.2024.8488).
9. Heavy Metal Index. (n.d.). *Heavy Metal Index*. Retrieved September 13, 2026, from [heavymetalindex.com](https://heavymetalindex.com/).
10. Institute of Contaminant Standards. (n.d.-a). *TECRID: Lab results that speak for themselves*. Retrieved September 13, 2026, from [tecrid.com](https://tecrid.com/).
11. Institute of Contaminant Standards. (n.d.-b). *TECRID FAQ: Evidence authentication, governance and access*. Retrieved September 13, 2026, from [TECRID FAQ](https://tecrid.com/faq).
12. International Laboratory Accreditation Cooperation. (2019). *Guidelines on decision rules and statements of conformity* (ILAC-G8:09/2019). [Official guidance catalog](https://ilac.org/publications-and-resources/ilac-guidance-series/).
13. International Organization for Standardization. (2017). *General requirements for the competence of testing and calibration laboratories* (ISO/IEC 17025:2017). [Official standard record](https://www.iso.org/standard/66912.html).
14. Office of Environmental Health Hazard Assessment. (n.d.). *Businesses and Proposition 65*. Retrieved September 13, 2026, from [OEHHA](https://oehha.ca.gov/proposition-65/businesses-and-proposition-65).
15. U.S. Food and Drug Administration. (2020, August). *Guidance for industry: Action level for inorganic arsenic in rice cereals for infants*. [Final guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants).
16. U.S. Food and Drug Administration. (2024). *Investigation of elevated lead & chromium levels: Cinnamon applesauce pouches (November 2023)*. Investigation updates, including February 29 and June 20, 2024. [FDA investigation record](https://www.fda.gov/food/outbreaks-foodborne-illness/investigation-elevated-lead-chromium-levels-cinnamon-applesauce-pouches-november-2023).
17. U.S. Food and Drug Administration. (2025, January). *Guidance for industry: Action levels for lead in processed food intended for babies and young children*. [Final guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children).
18. U.S. Food and Drug Administration. (n.d.-a). *Closer to Zero: Reducing childhood exposure to contaminants from foods*. Retrieved September 13, 2026, from [FDA](https://www.fda.gov/food/environmental-contaminants-food/closer-zero-reducing-childhood-exposure-contaminants-foods).
19. U.S. Food and Drug Administration. (n.d.-b). *Elemental Analysis Manual (EAM) for food and related products*. Retrieved September 13, 2026, from [FDA analytical methods](https://www.fda.gov/food/laboratory-methods-food/elemental-analysis-manual-eam-food-and-related-products).
20. World Wide Web Consortium. (2025, May 15). *Verifiable Credentials Data Model v2.0* (W3C Recommendation). [Official recommendation](https://www.w3.org/TR/vc-data-model-2.0/).

## How to cite

Pendergrass, K. (2026). Proof before the floor: A proposed systems architecture for dietary heavy-metal exposure reduction through authenticated evidence, lot qualification, and method-bound certification. Heavy Metal Index. <https://doi.org/10.83376/hmi.proof-before-the-floor>
