# HMTc Lot Testing Schedule

**Heavy Metal Tested & Certified, Infant and Child Foods Standards Program**

*Companion Document to the HMTc Governance Policy*

**Document Owner:** Program Operator / The Paleo Foundation
**Effective Date:** May 2026
**Controlled Document:** Uncontrolled When Printed

---

## 1. Purpose and Scope

This Lot Testing Schedule establishes the defensible, risk-tiered testing strategy for all products certified or enrolled under the HMTc Program. It defines the testing frequency, sampling methodology, speciation requirements, reflex triggers, and decision criteria for each certification status, product risk tier, and lot condition. This document operationalizes the governance framework set forth in the HMTc Governance Policy and is intended for use by quality teams, operations personnel, certification auditors, and the Program Operator.

The testing strategy is designed around three core principles: **legal defensibility** (every test, schedule, and decision rule must withstand scrutiny from regulators, auditors, and plaintiffs' attorneys); **scientific rigor** (testing protocols reflect current analytical best practices and are grounded in exposure science); and **commercial pragmatism** (testing frequency is proportionate to risk, avoiding unnecessary burden on compliant brands while intensifying oversight where needed).

---

## 2. Product Risk Tiers

Testing frequency under this Schedule is determined by both the product's certification status and its risk tier. Risk tiers are assigned based on the product's typical consumption frequency, volume relative to body weight, and the degree to which it may serve as a sole or dominant food source for the target population.

### 2.1 Risk Tier Definitions

**2.1.1 High-Risk Categories.** Products that may serve as a sole-source or dominant food for infants, consumed in high volume relative to body weight, often multiple times daily. A testing gap in these categories creates the highest exposure risk.

- Infant formula (powder and ready-to-feed)
- Baby cereals and dry grain products

**2.1.2 Moderate-Risk Categories.** Products consumed regularly but typically as part of a diversified diet, at moderate volume relative to body weight.

- Fruit purees
- Non-root vegetable purees
- Root-vegetable purees
- Mixed meals

**2.1.3 Lower-Risk Categories.** Products consumed occasionally or intermittently, at lower volumes relative to body weight, and not typically a dominant dietary component.

- Fruit juice (non-canned)
- Teething and snack products

### 2.2 Risk Tier Adjustments

The Program Operator may adjust a specific product's risk tier based on factors including but not limited to: production volume, historical testing results, known ingredient risk profiles, and consumption data. For example, a teething product made primarily from rice (a high-risk ingredient for arsenic) may be elevated to Moderate-Risk for testing purposes. Risk tier adjustments are documented and communicated to the Licensee.

---

## 3. Testing Frequency by Status and Risk Tier

The following table defines the minimum testing frequency for routine surveillance. The Program Operator may increase frequency at any time based on risk signals, audit findings, or trend analysis. All testing follows the full heavy metals panel unless otherwise specified.

| Status | High-Risk | Moderate-Risk | Lower-Risk | Hold & Release | Independent Sampling |
|---|---|---|---|---|---|
| Status A | Monthly | Quarterly | Quarterly | Not required | Yes (per schedule) |
| Status B | Every lot or monthly (whichever is more frequent) | Monthly | Monthly | Recommended | Yes, monthly |
| Status C (Low: 150–175%) | Every lot | Every lot | Every lot | Mandatory | Yes, every lot |
| Status C (High: 175–200%) | Every lot | Every lot | Every lot | Mandatory | Yes + 3rd-party sampling |

### 3.1 Key Definitions

**Independent Sampling:** Samples are collected and submitted to the laboratory by a party independent of the brand's production team. This may be the Program Operator, a designated third-party auditor, or another party approved by the Program Operator. Independent sampling ensures the integrity of the surveillance protocol and provides evidence that testing was not subject to selection bias.

**Hold-and-Release:** The finished product lot is physically quarantined and may not ship until laboratory results are received and the lot is confirmed to meet at minimum the applicable status criteria. Hold-and-release procedures must include documented quarantine location, responsible personnel, and release authorization records.

**Third-Party Sampling (High Probation):** In addition to the brand's own testing, the Program Operator directs independent sampling by a designated third party at the brand's expense. This provides a second, fully independent data point and is required when MaxPoL has reached 175–200% to ensure data integrity under heightened risk conditions.

---

## 4. Baseline Testing (Program Entry)

All SKUs entering the HMTc Program must undergo baseline testing across three (3) production lots before any certification status is assigned. Baseline testing establishes the product's heavy metal profile, identifies which metals are closest to limits, and provides the data foundation for status assignment and ongoing surveillance design.

### 4.1 Baseline Testing Requirements

- Three lots must be tested, each representing a distinct production run (different dates, shifts, or ingredient lots where possible).
- Each lot is tested for the full required testing panel for the product's category — the per-lot total analytes defined in §9 and the per-category registry (`data/workbench/standards/required-analytes.json`), across the ten-analyte certification vocabulary (Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Al, total Cr, Cr-VI). Baseline is where an analyte's obligation of `baseline / monitor` is discharged.
- Speciation testing is performed per §9: mandatory where the category has a defining pathway (inorganic arsenic for rice-containing products; methylmercury for fish-containing products), reflex when a parent total reaches its trigger, and where a credible pathway exists for hexavalent chromium.
- Sampling follows the composite method: each analytical sample is a composite drawn from multiple consumer units across the lot.
- Chain-of-custody documentation is required for all baseline samples.

### 4.2 Baseline Status Assignment

The three-lot baseline results are evaluated collectively. The initial certification status is assigned based on the worst-performing lot among the three, subject to the decision rules and Tier 1/Tier 2 metal classifications defined in the Governance Policy. If one lot is Status A and another is Status B, the initial assignment is Status B with the CAPA and elevated surveillance obligations that entails.

### 4.3 Expedited Baseline via Prior-Data Credit

A brand operating a mature, accredited lot-testing program may complete the three-lot baseline with a single new full-panel lot under the prior-data-credit pathway defined in Governance Policy §4.5. Up to two of the three baseline lots may be satisfied by qualifying prior results (ISO/IEC 17025-accredited, within the prior twelve months, structured and chain-of-custody documented, basis-comparable), credited per analyte only for the analytes those lots actually measured. The completing lot is sampled under this Schedule's independent-sampling and chain-of-custody requirements (§10) and run across the full panel, including any analyte not covered by the credited prior data. For an analyte established by the completing lot alone, the next two routine surveillance lots serve as confirmatory baseline points; in high-risk categories under monthly surveillance (§5.1), that confirmation completes within the first surveillance cycle. The pathway is not available on the confidential remediation track.

---

## 5. Status A: Routine Surveillance Protocol

Status A products have demonstrated full compliance (MaxPoL at or below 100% for all analytes). The surveillance protocol is designed to confirm continued compliance and detect any upward drift before it reaches actionable levels.

### 5.1 Testing Frequency

- **High-Risk Categories** (formula, cereals): Monthly testing via independent sampling.
- **Moderate-Risk Categories** (purees, mixed meals): Quarterly testing via independent sampling.
- **Lower-Risk Categories** (juice, snacks): Quarterly testing via independent sampling.

### 5.2 Trend Monitoring

The Licensee must perform a formal trend analysis of heavy metal results at least quarterly. This analysis should use control charts or equivalent statistical methods to identify any upward trajectory in concentrations, even if all results remain below limits. The Program Operator may request submission of trend data as part of routine oversight.

### 5.3 Internal Warning Trigger

If any analyte result on routine surveillance reaches or exceeds 80% of its HMTc limit (80% PoL), the following actions are triggered even though the result is technically compliant:

- Confirmatory testing of the next available lot for the affected analyte.
- Enhanced monitoring: the Licensee should investigate whether the elevated result reflects a trend or an isolated event.
- For Tier 1 metals approaching 80% of limits, the Program Operator should be notified and speciation testing (if applicable) should be performed regardless of whether the standard speciation trigger has been met.

### 5.4 Lot Release

Hold-and-release is not mandatory for Status A products, but it is strongly recommended that the Licensee hold any lot selected for testing until results are received. If a routine surveillance lot unexpectedly fails, the lot must be isolated and the noncompliance procedures activated immediately.

---

## 6. Status B: Elevated Surveillance Protocol

Status B products have a transitional exceedance on one or more Tier 2 metals (MaxPoL above 100% but at or below 150%). The elevated surveillance protocol is designed to monitor the effectiveness of CAPA actions and confirm an improving trend.

### 6.1 Testing Frequency

- **High-Risk Categories:** Every lot or monthly, whichever is more frequent. If a brand produces more than one lot per month in a high-risk category, every lot is tested.
- **Moderate-Risk Categories:** Monthly independent sampling.
- **Lower-Risk Categories:** Monthly independent sampling.

### 6.2 Hold-and-Release

Hold-and-release is not mandated for Status B but is strongly recommended, particularly for the first several lots following CAPA implementation. The Licensee should coordinate production and testing so that results are available before product is widely distributed. If a tested lot exceeds the 150% transitional cap or involves a Tier 1 metal exceedance, the lot may not be released as certified.

### 6.3 Progress Monitoring

Every lot tested during Status B provides data to gauge improvement. The quality team must trend consecutive results and submit periodic progress reports to the Program Operator. The CAPA's interim reduction targets (e.g., "next lot will be at or below 120% PoL; within 6 months, at or below 100%") are tracked against actual results. The Program Operator may conduct interim reviews to verify that the CAPA is being executed and that results are trending downward.

### 6.4 Escalation

If any lot tested during Status B meets any of the following conditions, the SKU is immediately escalated to Status C:

- MaxPoL exceeds 150% for any analyte.
- Any Tier 1 metal exceeds 100% of its limit.
- Two or more consecutive lots show no improvement or worsening results relative to the baseline.
- The Licensee fails to initiate or execute CAPA within required timelines.

---

## 7. Status C: Probation Surveillance Protocol

Status C products are on probation due to significant exceedances, repeated non-improvement, or Tier 1 metal violations. The probation protocol is designed to provide maximum oversight and prevent any noncompliant product from reaching consumers while the brand executes corrective actions.

### 7.1 Testing Frequency

All Status C products, regardless of risk tier, are tested every lot. There are no exceptions to this requirement during probation. The Program Operator may additionally require split-sample testing (simultaneous analysis by two independent laboratories) for high-value or high-visibility products.

### 7.2 Hold-and-Release (Mandatory)

Hold-and-release is mandatory for all Status C products. No product may leave the quarantine area until laboratory results are received and the lot is confirmed to meet at least Status A or Status B criteria. The Probation Lot Release Plan (documented in the CAPA) must specify: the physical quarantine location and procedures; the designated personnel authorized to release lots; the laboratory being used and expected turnaround time; the pass criteria for release (Status A or B); and the fail handling procedures (rework, downgrade to non-certified, sticker-over, or withdrawal).

### 7.3 Graduated Probation Controls

As defined in the Governance Policy, Status C is differentiated by severity:

**Low Probation (MaxPoL 150–175%):** Every-lot testing with hold-and-release. The brand's own accredited laboratory sampling is permitted, subject to Program Operator audit rights. The Program Operator may conduct unannounced verification sampling.

**High Probation (MaxPoL 175–200%):** Every-lot testing with hold-and-release, plus mandatory independent third-party sampling directed by the Program Operator. The third-party sampler collects samples independently of the brand's quality team and submits them directly to a Program-designated laboratory. This dual-track approach ensures data integrity under heightened risk conditions.

### 7.4 Exit Criteria

To exit probation, the brand must satisfy both of the following conditions:

- Produce a minimum of five (5) consecutive lots that individually test at Status A or Status B levels, demonstrating that the product can consistently meet standards under real production conditions. The Program Operator may require more than five consecutive lots depending on the severity and nature of the original nonconformance.
- Complete all CAPA milestones and demonstrate Verification of Effectiveness through documented follow-up testing. The corrective and preventive measures must be shown to have achieved their intended result.

---

## 8. Reflex Testing Triggers and Protocol

Reflex testing is any test conducted outside the routine surveillance schedule in response to a defined trigger event. Reflex tests carry the same weight as routine surveillance results and are subject to the same decision rules and status implications.

### 8.1 Trigger Events

The following events require reflex testing of all affected SKUs:

| Trigger Category | Specific Triggers | Testing Requirement |
|---|---|---|
| Ingredient Changes | New ingredient, new supplier, change in ingredient origin or grade | Full panel on next 2 lots after change |
| Water Source Changes | New municipal source, well change, treatment system modification | Full panel on next 2 lots after change |
| Equipment Changes | New processing equipment contacting product, equipment repairs involving metal surfaces | Full panel on next lot after change |
| Packaging Changes | New packaging material, new packaging supplier, change in liner or closure | Full panel on next 2 lots (to assess migration over time) |
| Formulation Changes | Any change in ingredient ratios, addition or removal of ingredients | Full panel on next 2 lots after change |
| Process Changes | Changes in contact time, temperature, pH, mechanical stress, or processing sequence | Full panel on next lot after change |
| Upstream Supplier Notification | Supplier notifies of change in their own sourcing or processing | Full panel on next lot using affected ingredient |
| Surveillance Warning | Any Tier 1 metal result at or above 80% PoL on routine testing | Confirmatory test on next lot; speciation if applicable |
| Supplier Intelligence Alert | Program Operator issues anonymized alert regarding a supplier or ingredient category | Full panel on next lot using flagged ingredient or supplier |

### 8.2 Reflex Testing Protocol

Reflex tests must use the full heavy metals panel and follow all standard sampling and chain-of-custody requirements. Results are evaluated under the same decision rules (including measurement uncertainty) as routine surveillance. If a reflex test reveals a nonconformance, the applicable status transition and CAPA requirements are triggered immediately, regardless of where the product currently sits in the routine testing cycle.

---

## 9. Required Testing Panel and Speciation Scope

Not every analyte that carries a published limit must be independently assayed on every lot. The **required testing panel** for a product is the set of analytes a lot must actually be tested for; it is distinct from the **limit set**, which is complete for every analyte on every standard (HMTc Governing Principles, Certification-Readiness Ruling §1). Removing an analyte from the per-lot panel never removes its published limit — a bounded or conditional analyte is still governed by its full numeric limit whenever a trigger fires. Reflex and mandatory speciation answer when the laboratory assays the species; they never authorize a blank, monitored, or subsumed-as-empty published limit. Rice and rice-derived infant cereal carry a mandatory numeric inorganic-arsenic limit on the standard page and PDF. The per-category panel is authored under the **Required-Testing-Panel Ruling** (Governing Principles) and recorded, one obligation per (standard, analyte) with a cited corpus rationale, in `data/workbench/standards/required-analytes.json`.

### 9.1 Testing obligations

Each analyte on each standard carries exactly one obligation:

| Obligation | What the lot must do | Set when |
|---|---|---|
| **Per-lot total** | Total-element assay on every surveillance lot (base ICP-MS panel) | Every Tier-1 toxic total (Pb, Cd, tAs, tHg) always; any Tier-2 total (Ni, Al, total Cr, Sn) the corpus shows materially present or with a plausible pathway |
| **Reflex speciation** | Species assay (iAs, MeHg, Cr-VI) only when the parent total reaches the reflex trigger | The category has no defining speciation pathway; the parent total bounds the species below the trigger |
| **Mandatory speciation** | Species assay on baseline and every lot, regardless of the parent total | The category has a defining pathway or materially-present toxic species (iAs for rice; MeHg for fish/marine) |
| **Conditional** | Assay required only when a stated condition holds (packaging, ingredient) | A pathway exists only under that condition (e.g., tin only for tinplate/metal-can packaging) |
| **Baseline / monitor** | Assay at the three-lot baseline; not re-tested per lot unless a trigger fires | Firm limit but low per-lot value-of-information for the category |
| **Not applicable** | No assay in any lot; the published limit stands for the record | Adequate-n corpus shows the analyte never materially present AND no pathway AND not a Tier-1 toxic |

### 9.2 Speciation requirements

Speciation analysis determines the specific chemical form of a metal present, which is critical for accurate risk assessment. The three speciated analytes default to reflex unless a category's pathway or a structural condition makes them mandatory:

| Metal | Form of Concern | Mandatory Speciation (defining pathway) | Reflex Speciation Trigger (otherwise) |
|---|---|---|---|
| Arsenic | Inorganic arsenic (iAs) | Rice and rice-derived ingredients; fruit juice (apple, grape, and blends); seaweed/kelp foods and algae-, greens- and clay/mineral-earth supplements (total As is a misleading organoarsenic proxy) | Parent total As reaches the reflex trigger |
| Mercury | Methylmercury (MeHg) | Fish, shellfish and marine ingredients; fish-containing composite foods; fish sauces, stocks and broths; marine-protein pet foods (marine oils: baseline-mandatory, lower per-lot confidence — MeHg partitions to protein, not lipid) | Parent total Hg reaches the reflex trigger |
| Chromium | Hexavalent chromium (Cr(VI)) | Drinking and mineral water (Cr-VI is stable in the aqueous matrix); toys and arts-and-crafts; chrome-tanned leather and leather-containing textiles/durable goods; mineral-pigment cosmetics and tattoo/permanent-makeup inks | Parent total Cr reaches the reflex trigger, is anomalously high, or the Program Operator directs |
| Lead, Cadmium, Nickel, Aluminium, Tin, total Chromium | Total element only | Not required (these are totals, not speciated forms) | Not applicable |

**Structural mandatory condition.** Independent of the pathway list above, a species is mandatory whenever a regulator sets a limit on the *species* with no bounding parent-total limit on the matrix — reflex is then mathematically impossible because there is no total to take a fraction of. The canonical case is apple and grape juice, where FDA regulates inorganic arsenic at 10 ppb and no total-arsenic maximum level exists.

When speciation is performed, the speciated result (e.g., inorganic arsenic rather than total arsenic) becomes the compliance result for that metal, superseding the total element concentration. Failure to perform required speciation renders the lot ineligible for certification.

**Reflex trigger (corrected).** The reflex speciation trigger is operationally defined as the parent total reaching **`min(the published species limit, 50% of the applicable parent-total limit)`**, accounting for measurement uncertainty. The historical flat "50% of the parent-total limit" is retained only as the ceiling on the trigger: it under-catches whenever the species limit sits below half the parent limit (e.g. drinking-water Cr-VI at 10 against a total-Cr limit of 25; seaweed iAs at 1000 against a total-As limit of 5000), where a compliant-looking total can hide a non-compliant species. The true bound is the species limit — below it the species cannot exceed it; at or above it, it can. The Program Operator may lower the trigger further based on risk analysis but may never raise it above 50% of the parent-total limit.

### 9.3 Panel scope is the ten-analyte vocabulary

The certification panel is the ten-analyte vocabulary — Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Al, total Cr, Cr-VI — measured as up to eleven cells where total chromium is reported alongside its Cr-VI reflex screen. Earlier references in this Schedule and in the Governance Policy to an "eight priority metals" grid are the legacy infant-foods framing and are reconciled to this ten-analyte vocabulary (see `docs/schema-history.md`). A standard's required panel is an obligation-map over this vocabulary, never a different vocabulary.

---

## 10. Sampling Methodology and Chain-of-Custody

### 10.1 Lot-Based Composite Sampling

All certification testing is conducted on a lot basis. For each lot tested, the analytical sample must be a composite prepared from multiple consumer-unit samples drawn from across the lot. The number of sub-samples and method of compositing must be statistically robust, designed to represent the entire lot's average quality with 95% confidence that the lot meets requirements. The sampling plan is subject to approval by the Program Operator. Any alternative approach (stratified sampling, continuous batch sampling) requires prior written approval.

### 10.2 Chain-of-Custody

A complete chain-of-custody record is required for every sample, from the point of collection through laboratory receipt and analysis. The record must document: who collected the sample and their affiliation; when and where the sample was collected; how the sample was sealed, labeled, and transported; who received the sample at the laboratory; and confirmation of sample integrity upon receipt. All personnel involved in sampling must be trained on these procedures.

**Consequences of documented chain-of-custody breach.** Any documented breach in chain-of-custody invalidates the result and is treated as a data integrity issue per the Governance Policy §8.2. Documented breaches include but are not limited to:

- **Custody gap:** any period during which sample location and possession is not recorded.
- **Broken seal:** sample arrives at the laboratory with seal damaged, missing, or showing evidence of tampering.
- **Non-conforming labeling:** sample identifiers at any handoff do not match the chain-of-custody record.
- **Transport non-conformance:** sample transported outside the documented protocol (e.g., refrigerated samples allowed to warm; samples transported under conditions inconsistent with the analytical method's stability requirements).
- **Receipt discrepancy:** laboratory documents the sample as received in a state inconsistent with the chain-of-custody record (mass, volume, container condition).

When a documented breach is identified, the lot's result is treated as invalid and the lot is subject to retest per a Program Operator-approved confirmatory protocol. Repeated breaches at the same Licensee or laboratory trigger data-integrity escalation per Governance Policy §8.2 and may result in Status D suspension.

**Discretion for minor procedural lapses.** The Program Operator may exercise discretion on minor procedural lapses where substantive sample integrity is preserved, for example, a timestamp recorded one hour late where the actual custody record (signatures, transfers) is intact. Such discretion is documented in the case record and is not exercised when sample integrity itself is in doubt. The default disposition for any chain-of-custody ambiguity is invalidation; discretion applies only to clearly procedural rather than substantive lapses.

### 10.3 Laboratory Requirements

All testing must be performed by laboratories accredited to ISO/IEC 17025 for the relevant analytical methods and food matrices. Methods must be fit for purpose, meaning they can reliably quantify target metals at or below the applicable HMTc limits. The laboratory's LOQ for each analyte must be at or below the HMTc action level. Results reported as non-detect (below LOQ) are treated as zero for compliance purposes, provided the LOQ meets this requirement. If an LOQ exceeds the Program limit, the result is treated as indeterminate and retesting with a more sensitive method is required.

### 10.4 Reporting Requirements

Laboratory reports must express results on a finished-product basis (as sold), clearly identifying each analyte and its form (total vs. speciated). Reports must include the LOQ for each analyte and the associated Measurement Uncertainty (MU). All data must be provided in structured, machine-readable format as required by the Governance Policy. PDF submission is not acceptable.

---

## 11. Decision Rules and Status Assignment

### 11.1 Measurement Uncertainty Application

The decision rules incorporating Measurement Uncertainty are defined in the Governance Policy (Section 7) and apply to all lot test results under this Schedule. In summary: **Pass** if (Result + MU) is at or below the limit; **Fail** if (Result − MU) is above the limit; **Borderline** if neither condition is met. Borderline results require confirmatory action before status assignment.

### 11.2 PoL Calculation and Status Mapping

For each lot, the PoL is calculated for every analyte: PoL = (Result / Applicable Limit) × 100%. The MaxPoL (highest PoL among all analytes) determines the lot's status:

| MaxPoL Range | Metal Tier | Status Assignment | Action Required |
|---|---|---|---|
| 0–100% | Any | Status A | Routine surveillance |
| 101–150% | Tier 2 only | Status B | CAPA (10 days), elevated testing |
| 101–150% | Any Tier 1 metal | Status C | CAPA (5 days), every-lot hold-and-release |
| 151–175% | Any | Status C (Low) | CAPA (5 days), every-lot hold-and-release |
| 176–200% | Any | Status C (High) | CAPA (5 days), every-lot + 3rd-party sampling |
| > 200% | Any | Status D (Suspension) | Stop-ship, CAPA (2 days), mark removal |

### 11.3 No Testing into Compliance

As stated in the Governance Policy, repeated ad hoc retesting to obtain a passing result is strictly prohibited. Any retesting must be part of a pre-approved confirmatory plan, scientifically justified, and documented. Undocumented resampling or lab-shopping is a data integrity violation subject to suspension or revocation.

---

## 12. CAPA Timelines Summary

The following timelines govern CAPA initiation and execution across certification statuses. These timelines are maximum allowable periods; faster action is always expected.

| Element | Status B | Status C | Status D | Status E |
|---|---|---|---|---|
| CAPA initiation | 10 business days | 5 business days | 2 business days | As directed |
| Full plan submission | 30 calendar days | 15 business days | 10 business days | N/A |
| Containment | As needed | Immediate | Within 48 hours | Immediate |
| Target for Status A | 12 months | As defined in CAPA | Full re-qualification | Re-application |
| VOE required | Yes | Yes | Yes | If re-applying |
| Exit requirement | Improving trend + meet A criteria | 5+ consecutive passing lots + CAPA closure | Program Operator approval | Full re-application |

---

## 13. Enhanced Controls and Best Practices

The following measures are recommended beyond the minimum requirements. While not all are mandatory, they provide additional assurance and may be expected by regulators as evidence of due diligence.

### 13.1 Risk-Tiering of Ingredients and Suppliers

Identify raw materials and suppliers that are high-risk for heavy metal contamination (rice for arsenic, root vegetables for lead and cadmium, fish for mercury, certain geographic regions). Apply stricter incoming material specifications and testing for high-risk tiers. Require certificates of analysis for each ingredient lot from high-risk suppliers. Conduct periodic audits or verification testing of supplier materials.

### 13.2 In-Process Testing

Where feasible, implement in-process checks at critical control points (e.g., post-filtration water testing, intermediate stream sampling). Rapid screening tools (XRF analyzers, portable test kits) may be used in-house for early warning, with results periodically validated against accredited laboratory data.

### 13.3 Trend Analysis and Internal Warning Levels

Perform formal trend analysis at least quarterly using control charts or equivalent statistical methods. Define internal warning levels below the HMTc limits (e.g., 70% PoL) that trigger management review and proactive investigation when breached, even if the product remains fully compliant. Document all trend analyses and management responses.

### 13.4 Change Management

Maintain a formal change management process that captures all changes to ingredients, suppliers, equipment, packaging, formulation, water sources, and processing conditions. Every change should be evaluated for potential impact on heavy metal levels before implementation, and reflex testing should be planned accordingly.

### 13.5 Documentation and Transparency

Maintain comprehensive records of all testing (internal and external), CAPA actions, trend analyses, supplier evaluations, and communications with the Program Operator. Proactively inform the Program Operator of unusual results or emerging concerns rather than attempting to resolve them quietly. A complete, transparent paper trail is the foundation of legal defensibility and program integrity.

---

## 14. Document Review and Revision

This Lot Testing Schedule shall be reviewed at least annually or upon any update to the HMTc Governance Policy, HMTc Infant and Child Foods Standards, or relevant regulatory requirements. Revisions will incorporate new scientific insights, regulatory changes, improvements in testing technology, and lessons learned from program operations. All revisions are managed under document control procedures consistent with the Governance Policy. The version in effect at the time of a testing decision governs that decision.

---

## Document Control

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 2026 | Initial issuance (PDF). |
| 2.0 | May 2026 | Markdown migration. No substantive change to testing protocols; reformatted for repo-based version control and cross-referencing with the Program Manual. |
| 2.1 | June 2026 | Added §4.3 Expedited Baseline via Prior-Data Credit, the testing-schedule companion to Governance Policy §4.5. Completing lot uses independent sampling; new-analyte confirmation folds into routine surveillance. |
| 2.2 | August 2026 | Generalized §9 from "Speciation Requirements" to "Required Testing Panel and Speciation Scope" implementing the Governing Principles **Required-Testing-Panel Ruling** (v2.5): added the per-lot testing-obligation vocabulary (§9.1) and the per-category registry reference; expanded the §9.2 mandatory-speciation map (iAs → rice + fruit juice + seaweed/algae/clay-mineral supplements; MeHg → fish/marine + composites/sauces/broths + marine pet food; Cr-VI → water + toys/crafts + leather/textiles + pigment cosmetics/tattoo) with a structural mandatory condition (species limit and no parent total, e.g. apple-juice iAs); corrected the reflex trigger to `min(species limit, 50% of parent-total limit)` (flat-50% under-catches water Cr-VI and seaweed iAs); and reconciled the legacy "eight priority metals" language to the ten-analyte certification vocabulary (§9.3; §4.1). No change to sampling, chain-of-custody, or decision rules. |
