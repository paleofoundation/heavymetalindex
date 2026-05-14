# Adversarial Audit — HMTc Program Manual v0-pre-audit

**Date:** 2026-05-14
**Auditor:** Claude (Opus 4.7, claude-opus-4-7[1m]), acting as adversarial reviewer
**Adversarial posture:** Plaintiff's expert in MDL-style litigation; hostile FDA reviewer; competing standards body; defense counsel preparing cross-examination.
**Manual under audit:** `data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.md` (commit `c9c5d75`).
**Scope:** Parts 1, 2, 2.5, 4, 5. Part 3 deferred — chapters not yet inlined; the methodology-level audit precedes the per-product retemplating per the agreed sequencing.

## Audit posture

The auditor reads the manual as a hostile reviewer searching for attack vectors that would land in a deposition, a regulatory inquiry, a competing-program comparison, or a Daubert challenge. The auditor's job is **to find gaps**, not to defend the program. Every finding below is written from the attacker's seat first; the proposed strengthening is the program's recommended response. Strengthenings that require methodology revisions (rather than just manual edits) are flagged.

The audit is organized by attack category. Each category includes: the attack as a hostile reviewer would advance it; where the manual currently responds; whether the response is sufficient; the gap if any; the proposed strengthening.

---

## 1. Methodology underspecification

### Attack

"The manual asserts that limits are calibrated via P97 clean / P45 dirty per-analyte percentiles to deliver 90/30 row-pass calibration. But the manual does not specify: which sources are admitted to the pool; which are excluded and why; how sample-size weighting actually works; what the boundary is between 'clean' and 'dirty' subcategories; how the analyte-correlation assumption of 0.6 was estimated; how the program would respond if observed lot data showed materially different correlation. The methodology is gestured at, not specified. An independent analyst cannot replicate the calibration from this manual."

### Where the manual responds

Part 5.1 §"Layer 3" describes pool admission rules (sample-level data direct; summary-only via moment-matching pseudo-sample expansion under log-normal or gamma; sources weighted by N capped at 2× median per-source N). Part 5.1 also names the per-analyte uplift rationale (joint row-pass calibration under analyte correlation ≈0.6). Part 1.5 names heavymetalindex.com as the public corpus from which the source pages can be audited.

### Sufficiency

**Partial.** The principle is documented; the operational specification is not. Specifically:

- The "clean platform / dirty platform" boundary is not defined. The manual says "within the clean platform, ~90% of brands achieve Status A," but does not say how a subcategory is classified clean or dirty. (This is a real ambiguity: a subcategory's classification determines whether its standards use P97 or P45.)
- The analyte-correlation estimate of 0.6 is asserted but not derived. A reviewer can ask "why 0.6 and not 0.4 or 0.8?" and the manual does not answer.
- The 2× median per-source N cap is named in Part 5.1 but not motivated. Why 2× and not 3× or unconstrained?

### Gap

The "clean vs. dirty subcategory" classification rule is the most consequential gap. The other two are second-order specification questions.

### Proposed strengthening

Add a paragraph to Part 5.1 §"Layer 1" specifying: "A subcategory is classified clean when its empirical median across the literature-pooled distribution sits at or below the parent-category median for the analyte; dirty when meaningfully above. 'Meaningfully above' is operationalized as p50(subcategory) > 1.5 × p50(parent category) for at least one Tier 1 metal. The classification is data-driven and traceable: any reviewer can verify the classification by examining the pooled distributions on heavymetalindex.com."

Add a footnote to Part 5.1 §"Layer 2" specifying that the analyte-correlation estimate of 0.6 is consistent with cross-analyte correlation observed in published surveillance datasets (FDA TDS, EFSA scientific opinions); empirical correlation from HMTc-internal lot data will be measured at the 12-month post-launch review and may revise the per-analyte percentile uplift if it diverges materially from the assumed value.

Add a sentence to Part 5.1 §"Layer 3" motivating the 2× median per-source N cap: "The cap prevents any single large survey — for example, a 5,000-sample FDA TDS sub-extract — from dominating the pooled distribution for a cell where most contributing sources have N=50–200. The 2× ratio preserves large-N influence proportionally while preventing pool concentration."

**Materiality:** Manual edit, no methodology revision required.

---

## 2. Toxicological anchor gaps

### Attack

"The Tier 1 / Tier 2 classification in Part 2.2 is asserted with citation, but the cited authorities are characterized in terms favorable to the program. For example, EFSA's 2010 lead BMDL01 of 12 µg/L is cited as supporting 'no safe threshold,' but EFSA's actual conclusion was that *no threshold could be established* for the critical effects — which is not identical to 'no safe threshold.' The manual collapses scientific nuance into program-favorable framing. Where else has this happened?"

### Where the manual responds

Part 2.2 Tier 1 / Tier 2 tables; Part 5.3 Glossary entries for each metal; Part 5.4 Sources Index for the cited toxicology documents; canonical reviews on heavymetalindex.com.

### Sufficiency

**Partial.** The toxicology references are real and authoritative; the framing is mostly accurate. But the auditor's specific critique on "no safe threshold" is fair — EFSA's actual language is more careful than the manual's "no safe threshold" shorthand. The same likely applies to other toxicology framings in Part 2.2.

### Gap

The manual uses shorthand framings ("no safe threshold," "genotoxic carcinogen") that are *substantively* defensible but are not the exact language used by the cited authorities. A plaintiff's expert can argue that the program overstates the toxicological consensus by collapsing nuance into stronger framings.

### Proposed strengthening

Audit each toxicology callout in Part 2.2 and Part 5.3 Glossary against the cited primary source. Where the manual uses shorthand, add a clarifying clause that links the shorthand to the cited authority's actual language. Example revision for lead: "*No safe threshold* — EFSA (2010) concluded that 'a threshold for the critical effects of lead in children's neurodevelopment could not be identified' (BMDL01 = 12 µg/L blood lead); JECFA (2011) withdrew its PTWI on the grounds that 'conventional tolerable intake values were no longer health-protective' for endpoints without an identifiable threshold."

**Materiality:** Manual edits to toxicology callouts and Glossary. No methodology revision. Adds 2-3 sentences per metal.

---

## 3. Chain-of-custody language

### Attack

"The Lot Testing Schedule (Part 4) §10.2 requires chain-of-custody documentation including 'who collected the sample,' 'when and where,' 'how sealed,' 'who received at lab,' and 'sample integrity confirmation.' But the Schedule does not specify what happens when chain-of-custody is incomplete: is the result invalidated? Is it treated as a fail? Is it treated as a re-test trigger? The manual is silent on the actual operational consequence."

### Where the manual responds

Part 4 §10.2 says "Any breach in chain-of-custody may invalidate results and is treated as a data integrity issue." Part 2.7 §8.2 names "breaking chain-of-custody without documentation" as a data integrity violation triggering Status D suspension.

### Sufficiency

**Partial.** The two clauses connect, but the connection is hidden across two parts of the manual. A reviewer reading only Part 4 sees "may invalidate" — discretionary. A reviewer reading only Part 2.7 sees Status D consequences — categorical. The discretion-vs-categorical tension is unresolved.

### Gap

The discretion in "may invalidate" is exploitable. A defense expert can argue that a chain-of-custody breach in their client's testing record was not invalidating because the Schedule says "may." Conversely, a plaintiff's expert can argue that any breach should have triggered Status D under §8.2, regardless of severity. The manual needs to clarify which it is.

### Proposed strengthening

Revise Part 4 §10.2 to remove discretion ambiguity: "Any documented breach in chain-of-custody invalidates the result and is treated as a data integrity issue per Part 2.7 §8.2. Documented breaches include but are not limited to: gap in custody (any period during which sample location and possession is not recorded); broken seal upon receipt; non-conforming labeling at any handoff; transport conditions outside the documented protocol. The Program Operator may exercise discretion on minor procedural lapses (e.g., late timestamp documentation if substantive integrity is preserved); such discretion is documented and is not exercised when integrity is in doubt."

**Materiality:** Manual edit to Part 4 §10.2 (when the canonical Lot Testing Schedule is updated in `source-documents/`). Affects the source-of-truth doc, not just the bound manual.

---

## 4. Ratchet gaming

### Attack

"The ratchet trigger requires 80% of certified Status A lot results at or below 80% of the current limit, AND 50% of Status A SKUs at or below 60% PoL. Three gaming scenarios are visible to a hostile reviewer:

(a) A dominant brand with many SKUs could withhold its best-performing SKUs from Status A reporting (keep them at Status B by delaying CAPA closure on a marginal exceedance). This keeps the 80th percentile up and prevents trigger firing.

(b) A coalition of large brands could time their SKU re-classifications to manipulate the breadth condition. If only 49% of SKUs hit the 60% PoL threshold in any reporting year, the trigger never fires.

(c) Brands could exit and re-enter the program to reset their grandfathering status, accumulating SKUs at the current standard while the rest of the market tightens.

The manual claims the rule is unattackable, but the rule is gameable in three documented ways."

### Where the manual responds

Part 2.10 §12.5 says Status B/C cannot preferentially evaluate against the old standard during transition (anti-gaming language); Part 5.2 enumerates ratchet gaming as an attack category Pre-work 6 audits.

### Sufficiency

**Insufficient.** Part 2.10 anti-gaming language addresses the transition window, not the trigger-firing conditions. The three gaming scenarios above are not addressed in the manual.

### Gap

This is a substantive gap, not a manual-edit gap. The trigger rule as specified in §12.3 is gameable. The strengthenings need to be in the rule itself.

### Proposed strengthening

Revise Part 2.10 §12.3 trigger conditions with two anti-gaming clauses:

**§12.3(c) Anti-withholding clause.** For trigger calculation, all Status A and Status B SKUs are pooled. A brand cannot avoid Status A reporting by keeping SKUs at Status B; the trigger uses the broader pool. This eliminates the withholding strategy.

**§12.3(d) Single-brand cap.** No single Licensee may contribute more than 25% of the SKUs in the trigger pool for a given analyte. SKUs from a single Licensee above the cap are excluded from the trigger calculation (and the cap is recalculated). This prevents dominant-brand manipulation.

**§12.6(b) Exit-and-re-enter prohibition.** A brand that exits the Program and re-enters within 24 months is evaluated against the current standard at re-entry, not the standard in effect at original exit. Grandfathering applies only to continuous certification. This prevents grandfather-reset gaming.

**Materiality:** Methodology revision to §12.3 and §12.6. Requires Governing Principles consistency check; requires update to `governance-policy.md` in source documents; requires Part 2.10 chapter regeneration.

---

## 5. Conflict of interest

### Attack

"The Standards Architect is also CEO of the Paleo Foundation, which operates the certification program. The dual role is disclosed in the colophon — but disclosure is not mitigation. The appeals process (Part 2.12 §14.1) is conducted 'by the Program Operator,' which is the Paleo Foundation, which is the dual-role person. A Licensee challenging a status determination is appealing to the entity that has financial interest in the determination being upheld. The appeals process is not independent of the conflict it is supposed to mitigate."

### Where the manual responds

Part 2.12 §14.4 says individuals involved in certification determinations shall be free from conflicts; the Colophon (Part 5.7) discloses the dual role; Part 5.2 enumerates conflict-of-interest as an audit category.

### Sufficiency

**Insufficient.** The appeals process being internal to the Program Operator is a real structural conflict. The §14.4 conflict-of-interest provision addresses *individual* reviewer conflicts (a reviewer who is friends with the Licensee, for example), not the *institutional* conflict (the entity whose revenue depends on certifications is the entity reviewing the appeals).

### Gap

A real institutional conflict that the manual currently glosses over.

### Proposed strengthening

Establish an **independent Appeals Committee** as a Tier 2 review body when the Program Operator's initial appeal response is contested. The Appeals Committee:

- Is composed of three reviewers external to the Paleo Foundation: one toxicologist or food-safety scientist, one food-industry quality professional, one independent legal advisor with regulatory-affairs background.
- Is convened on a per-appeal basis; members rotate; no member sits on more than 3 appeals per calendar year.
- Has authority to overrule the Program Operator's status determination on the merits.
- Publishes anonymized appeal outcomes annually in the Program Operator's transparency report.

Operationally, the Tier 2 review is invoked when the Licensee disagrees with the Tier 1 (Program Operator) decision and requests escalation. The Tier 2 decision is binding.

Add a paragraph to Part 2.12 §14.1 specifying the Tier 1 / Tier 2 structure. Add details on Appeals Committee composition to Part 5.6 Licensing Terms (as it's contractually relevant). Add transparency-report obligation to Part 2.1 §1.7 (Program-operator continuity reporting).

**Materiality:** Methodology revision (or rather, governance revision). Requires update to `governance-policy.md` §14; requires Part 2.12 and Part 2.1 chapter updates; requires explicit budget commitment for the Appeals Committee operation.

---

## 6. Definitional holes

### Attack

"The manual uses 'platform' (clean platform / dirty platform) without ever defining the term. Is a 'platform' a subcategory? A product class? A formulation type? The Glossary doesn't have an entry. This is the most consequential vocabulary in the manual — it determines whether a product's standards use P97 or P45 — and it is undefined."

### Where the manual responds

The Glossary (Part 5.3) doesn't define "platform." The Governing Principles use the term repeatedly. Part 5.1 §"Layer 1" uses "clean platform" and "dirty platform" but doesn't define them.

### Sufficiency

**Insufficient.** This is a real definitional gap.

### Gap

"Platform" is the load-bearing term of the methodology and it's undefined.

### Proposed strengthening

Add a Glossary entry:

**Platform.** In HMTc methodology, a *platform* refers to a subcategory of products within a parent product category, classified as either *clean* or *dirty* based on its empirical contamination profile across the open literature. A platform may be defined by ingredient base (e.g., soy-based vs. non-soy-based infant formula), processing method (e.g., powder vs. ready-to-feed liquid formula), or product format (e.g., dry vs. wet cereal). Platform classification is data-driven: a platform is *clean* when its empirical median across the literature-pooled distribution sits at or below the parent-category median for the analyte; *dirty* when meaningfully above (per Part 5.1 §"Layer 1" specification). Platform classification determines whether per-analyte standards use the P97 (clean) or P45 (dirty) percentile.

**Materiality:** Glossary addition, plus consistency check that Part 5.1's "Layer 1" classification rule (Strengthening 1) and this Glossary entry agree.

---

## 7. Overclaim risk

### Attack

"Part 2.5 §6.2 prohibits 'heavy metal free' and 'safe' claims. But Part 1.4 says the program creates 'a documented record of proactive, voluntary, third-party-verified improvement' that is 'the difference between exposure and defense.' This is a near-safety claim packaged in legal-defensibility language. A plaintiff's expert can argue that the manual itself implies the program reduces actual contamination — which is a safety-like claim."

### Where the manual responds

Part 2.5 §6.2 prohibits the listed safety claims; Part 2.1 §1.2 frames action levels as "not safety thresholds."

### Sufficiency

**Partial.** The marketing-claims prohibition is specific and operational. But the Part 1.4 language *does* assert improvement, and improvement implies safety relative to the unimproved baseline. The manual is consistent with the framing in Part 2.1 but the line between "action level" and "safety implication" is thin.

### Gap

Minor. The manual is internally consistent; the issue is that the framing language in Parts 1.3 and 1.4 may be over-read by a hostile reviewer as implying safety.

### Proposed strengthening

Add a sentence to Part 1.4 (Section "Design principle 5: Confidential remediation as a structural feature" near the legal-narrative shift paragraph): "These improvements reduce *probability* and *severity* of contamination events; they do not produce safety guarantees. The mark certifies action-level compliance under surveillance, not the absence of risk."

Add a parallel sentence to Part 1.3 (after the ROI framework discussion): "The expected-loss model quantifies *risk-event* reduction, not safety. A brand with HMTc certification is in a better defensive posture than a brand without it; both brands operate in a contamination environment that cannot be eliminated by any program."

**Materiality:** Minor manual edits. No methodology revision.

---

## 8. Citation completeness

### Attack

"The manual makes specific numeric claims — '$2.0 million per major case,' '$28,000 Prop 65 settlement,' '7.8 µg lead/day aggregate' — without inline citation. The Consolidated Sources Index in Part 5.4 lists the cited documents, but the in-text citations are missing or aliased. A reviewer cannot move from a numeric claim to the source page in one step."

### Where the manual responds

Part 5.4 Consolidated Sources Index lists the cited documents. Per-product Sources Cited sections in Part 3 chapters use numbered aliases (but Part 3 is not yet inlined).

### Sufficiency

**Insufficient for Parts 1, 2, 5.** The numeric claims in these parts are anchored to the preprints (Counterproductive Consequences, Cost of Operating, Certification as a Framework), but inline citation is inconsistent.

### Gap

A reviewer cannot follow a numeric claim to its primary source without going through the Consolidated Sources Index. Citation chain is preserved but not navigable inline.

### Proposed strengthening

For numeric claims in Parts 1, 2, 5, add bracketed inline citations using a consistent format. For example: "$2.0 million per major case [Federal Judicial Center Litigation Cost Survey of Major Companies, 2008]"; "7.8 µg lead/day [Certification as a Framework preprint §2, doi:10.5281/zenodo.18905821]"; "$28,000 Prop 65 settlement [Promix Nutrition consent judgment, 2024, Prop 65 Settlement No. 2024-02424S4488]."

This is a mechanical pass through the four affected chapters (Parts 1.2, 1.3, 1.4, 2.2 mainly). Estimated 30-50 inline citation additions across the manual.

**Materiality:** Mechanical manual edit. No methodology revision. Can be regression-tested by extending `build-program-manual.mjs` to flag numeric claims without inline citation.

---

## 9. Heavymetalindex.com evidence-base claims

### Attack

"Part 1.5 asserts that 'every limit in this manual traces to source pages on a public, peer-reviewable wiki.' But Part 3 (the actual limits) is not inlined in v0-pre-audit. The claim is unverifiable until Part 3 is in place. Moreover, the manual asserts that 'qualified reviewers may request the workbench-side aggregate distribution data under controlled terms' — but does not specify who counts as a qualified reviewer, what the controlled terms are, or what the request response time is."

### Where the manual responds

Part 1.5 names the evidence-base claim; Part 5.1 names the workbench-side aggregate distribution data and the controlled-terms request process; Part 5.6 Licensing Terms specifies confidentiality and regulatory cooperation.

### Sufficiency

**Partial.** The evidence-base claim is well-framed but the operational specifics of the "controlled-terms request" are vague.

### Gap

A reviewer asking "how do I request the pooled distribution data" gets no answer. The Program Operator's contact in the Colophon is the only path, and the response process is undefined.

### Proposed strengthening

Add a paragraph to Part 5.1 §"The evidence base, and what auditable means" specifying the controlled-terms request process:

> **Qualified reviewers** include: regulatory bodies acting under official inquiry (FDA, EFSA, state attorneys general); plaintiff's or defense counsel requesting access for active litigation; certified or pending HMTc Licensees auditing the methodology that produces their standards; academic researchers conducting peer-track review with institutional approval. Requests are submitted to the Program Operator via the contact channels in the Colophon. The Program Operator responds within 30 business days with either a controlled-access NDA (for non-public requestors) or, for regulatory bodies, the requested aggregate distribution data directly. The controlled-access NDA preserves the trade-secret status of the pooling engine implementation while making the inputs and outputs auditable.

Add to Part 5.6 Licensing Terms a clause specifying the Licensee's right to audit the methodology that produces their own product category's standards.

**Materiality:** Manual addition to Part 5.1 and Part 5.6. No methodology revision. Operational commitment to a 30-day response window may have staffing implications — flag for Program Operator.

---

## 10. Regional adaptability mechanism

### Attack

"Part 2.1 §1.6 asserts that 'HMTc applies anywhere infant and child food products are sold' and that 'regional adaptability is a structural feature.' But the mechanism for regional recalibration is hand-waved: 'when a region's evidence base shows systematically higher contamination,' the program 'calibrates against that region's platform achievability *and* against the global cleanest-achievable benchmark.' This is two assertions without an operational procedure. How does a region's evidence base get classified as 'systematically higher'? Who decides? What's the threshold? How does the global cleanest-achievable benchmark get computed?"

### Where the manual responds

Part 2.1 §1.6 names regional adaptability; no operational specification elsewhere in the manual.

### Sufficiency

**Insufficient.** This is a real gap.

### Gap

The regional adaptability claim is currently aspirational, not operational. A regulator or competing-standards-body reviewer would correctly identify it as underspecified.

### Proposed strengthening

Two options for strengthening, both flagged for methodology decision:

**Option A (conservative).** Revise Part 2.1 §1.6 to describe regional adaptability as a *roadmap* feature rather than a current operational feature. State that the 2026 Edition is calibrated against the global open literature; future editions will add region-specific calibration as the corpus accumulates region-specific evidence. Honest about current state; no overclaim.

**Option B (operational).** Specify the regional recalibration mechanism: "A region-specific platform is established when the corpus contains at least N region-specific source pages with sample-size totals N × 50 or greater. Regional platforms are classified using the same data-driven rule as global platforms (Part 5.1 Layer 1). The applicable HMTc limit for a brand selling in that region is the more stringent of (regional platform percentile, global cleanest-achievable platform percentile)." This converts the claim into an operational specification, but it commits the program to corpus development that may not be complete for all regions in the 2026 Edition.

**Recommendation:** Option A for v0; Option B for a future Edition once the corpus supports it.

**Materiality:** Either option requires Part 2.1 §1.6 revision. Option B also requires methodology spec in Part 5.1.

---

## 11. Confidential Remediation Track legal-narrative claim

### Attack

"Part 1.4 and Part 2.4 advance the claim that the Track produces 'a documented, timestamped, third-party-verified record of continuous improvement' that 'shifts the legal narrative.' But the data governance in Part 2.7 §8.1 requires structured machine-readable data to the Program Operator — the data is held by the certifier, not the Licensee. In a discovery scenario, the Licensee's defense rests on data the Licensee does not directly control. A plaintiff's subpoena could compel the Program Operator to produce the data. The 'documented record' is contingent on the Program Operator's posture in litigation, not on the Licensee's posture."

### Where the manual responds

Part 2.4 confidentiality provisions; Part 5.6 Licensing Terms confidentiality and regulatory cooperation; Part 2.11 regulatory escalation hard-stop.

### Sufficiency

**Partial.** The confidentiality is real but the discovery vulnerability is real too. The attack is sharp.

### Gap

The manual asserts that the documented record defends the brand, but does not address the discovery dynamics that determine whether the record is admissible *for* the brand or compellable *against* the brand.

### Proposed strengthening

Add a section to Part 2.4 (after the legal-defensibility paragraph): "**Discovery dynamics.** Track data is held by the Program Operator as a service provider to the Licensee under the License Agreement. In a discovery scenario, Track data is potentially compellable from the Program Operator under subpoena. The License Agreement specifies that the Program Operator will notify the Licensee of any subpoena and cooperate with the Licensee's defense to the extent legally permissible. **The Track does not provide attorney-client privilege or work-product protection over the testing data; what it provides is contemporaneous, third-party-verified evidence of due diligence.** Brands evaluating the Track should consult counsel about how the Track interacts with their broader discovery posture; the Program Operator does not offer legal advice and the Track is not a substitute for counsel-directed quality programs."

Add a parallel clause to Part 5.6 Licensing Terms specifying the subpoena-response obligation.

**Materiality:** Manual edit to Part 2.4 and Part 5.6. No methodology revision. Important addition for legal-defensibility honesty.

---

## 12. Standards Ratchet step cap

### Attack

"The 20% step cap in §12.4 is the program's protection for Licensees, but the cap interacts oddly with the trigger conditions. If the market moves 35% in one cycle and the cap holds the step at 20%, the residual 15% is 'held over.' But the trigger conditions in §12.3 use the *current* limit. After the first 20% reduction, the trigger conditions recompute against the new (tighter) limit. The 15% residual may never actually trigger because the market may consolidate at the new limit before producing another two-cycle confirmation. The manual claims the residual 'may trigger again' but doesn't show the math."

### Where the manual responds

Part 2.10 §12.4 says residual tightening "is held over and may trigger again at the next cycle."

### Sufficiency

**Partial.** The manual's claim is technically correct but the operational dynamics are not visible. A skeptical reviewer can model a scenario where the residual never resurfaces.

### Gap

The math under the step cap is not visible. Brands cannot plan against residuals they don't understand; auditors cannot verify the program's tightening trajectory matches its stated intent.

### Proposed strengthening

Add a worked example to Part 2.10 §12.4:

> "**Worked example.** Current Pb limit is 30 ppb; current 80th percentile of Status A results is 15 ppb (50% of limit); breadth condition met. Trigger fires. New limit candidate (a): 15 ppb. New limit candidate (b): 80% of 30 = 24 ppb. The new limit is the maximum of the two: **24 ppb**. The step cap held; the market actually moved beyond the cap. At the next annual review, the 80th percentile of Status A results against the new 24 ppb limit is evaluated. If the market stays at the same absolute level (15 ppb), the 80th percentile is now 15/24 = 62.5% of the new limit — below the 80% trigger condition. The trigger fires again. New limit candidate (a): 15 ppb. New limit candidate (b): 80% of 24 = 19.2 ppb. New limit: **19.2 ppb**. The residual surfaces as expected, but the cadence is determined by market behavior after the first tightening, not by mechanical compounding."

This makes the dynamics visible.

**Materiality:** Manual addition to Part 2.10 §12.4. No methodology revision.

---

## 13. Aggregate-exposure framing accuracy

### Attack

"The 7.8 µg/day aggregate-exposure calculation in Part 2.2 uses '800 mL RTF formula at 5 ppb,' '20 ppb dry cereal serving,' '10 ppb fruit purée,' and '20 ppb root-vegetable purée.' But the FDA action levels for these categories are 10 ppb (RTF formula and most baby foods), 20 ppb (dry infant cereal and root vegetables). The example uses values *below* FDA action levels (5 ppb formula) for one category but at the action level for others. This is asymmetric — the calculation should either use all action-level values (the worst case under FDA compliance) or representative typical values. A reviewer can argue the calculation is rhetorically tuned."

### Where the manual responds

Part 2.2 §"The aggregate-exposure framing" presents the calculation.

### Sufficiency

**Partial.** The auditor's critique is fair. The calculation is correct arithmetically but the value choices are not maximally defensible.

### Gap

Methodological transparency. The calculation needs to be either worst-case (all values at FDA action levels) or anchored to surveillance medians.

### Proposed strengthening

Revise the example to use FDA action levels uniformly: "A day's consumption comprising 800 mL of ready-to-feed formula at the FDA action level of 10 ppb, one 20 ppb serving of dry cereal, one 10 ppb fruit purée (FDA action level), and one 20 ppb root-vegetable purée (FDA action level for root vegetables) yields approximately **10.4 µg lead/day** — more than 4.7× the FDA Interim Reference Level of 2.2 µg/day for young children. Even at full compliance with FDA action levels across all four food categories, aggregate intake at typical infant consumption patterns substantially exceeds the IRL."

This is a stronger version of the same argument and removes the asymmetry critique.

**Materiality:** Manual edit to Part 2.2. No methodology revision. Should also propagate to the toxicology-callouts.md aggregate-exposure cross-callout.

---

## 14. Supplier intelligence anonymization

### Attack

"Part 2.9 alerts include 'ingredient category, geographic origin (if known), and the nature of the concern.' But ingredient × geography × timing is often a near-unique identifier. If a brand publishes that they sourced cocoa from Ecuador in Q3 2026, and a supplier-intelligence alert about 'elevated cadmium in Ecuadorian cocoa' is issued in Q3 2026, the source of the alert is identifiable. Anonymization is metadata-leaky."

### Where the manual responds

Part 2.9 anonymization clauses; Part 5.2 names anonymization integrity as an audit category.

### Sufficiency

**Partial.** The attack identifies a real metadata-correlation risk.

### Gap

Real metadata-leakage potential. Brands relying on anonymization for confidentiality may be misled about how strong the protection actually is.

### Proposed strengthening

Revise Part 2.9 to add an honest disclosure paragraph:

> "**Anonymization limits.** The Program Operator anonymizes alerts by removing brand identifiers. However, ingredient-category, geographic-origin, and timing metadata can correlate with a brand's publicly disclosed sourcing in ways that may identify the reporting brand to a sophisticated observer. The Program Operator mitigates this by: (a) batching alerts so a single alert does not correspond to a single reporting brand's CAPA timeline; (b) generalizing geographic specificity (region rather than exact origin) where the alert's protective intent is preserved; (c) holding alerts for a discretionary delay period when the reporting brand requests it. Brands relying on anonymization for confidentiality should treat anonymization as **strong but not absolute**, and should consider the metadata risk in their participation decision."

**Materiality:** Manual edit to Part 2.9. No methodology revision. Important honesty addition.

---

## 15. International / Cyprus operating-base claims

### Attack

"The Edition page and Part 2.1 §1.6 reference the Paleo Foundation's Cyprus operating base and EU Database Directive 96/9/EC protection. But Cyprus-based operations selling certification services into the U.S. market raise jurisdictional questions: which courts have jurisdiction over license-agreement disputes? How does EU Database Directive protection interact with U.S. trademark and trade-secret regimes? The dispute resolution provisions in Part 5.6 specify Cypriot law and ICDR arbitration in Cyprus — which is *favorable* to the Foundation but may be unenforceable against a U.S. brand without specific contractual provisions."

### Where the manual responds

Part 5.6 §"Dispute resolution" specifies Cypriot law, ICDR seat in Cyprus.

### Sufficiency

**Partial.** The dispute-resolution choice is operationally specified but the enforceability concern is unaddressed.

### Gap

A reviewer can argue that Cyprus-based dispute resolution is a structural concession the Licensee makes that may be challenged. The manual doesn't address why this provision is appropriate or how U.S. Licensees in particular should evaluate it.

### Proposed strengthening

Add a paragraph to Part 5.6 §"Dispute resolution":

> "**Why Cyprus-seated arbitration.** The Paleo Foundation is incorporated in Cyprus and operates under EU regulatory frameworks. Cyprus-seated ICDR arbitration is consistent with the Foundation's regulatory and operational base and provides predictable procedural rules under the 1958 New York Convention (to which both Cyprus and the United States are signatories, making arbitration awards enforceable in U.S. courts). Licensees concerned about the practical implications of Cyprus-seated arbitration should consult counsel; the Program Operator can discuss alternative dispute-resolution forums in specific license negotiations when material commercial considerations warrant it."

**Materiality:** Manual addition to Part 5.6. No methodology revision.

---

## 16. New finding: per-product chapter status in v0-pre-audit

### Attack (auditor-found)

"Part 3 is referenced but not inlined. The manual makes claims about 'specific HMTc limits in Part 3' throughout Parts 1, 2, 2.5, 5 — but Part 3 is not in the document. A reviewer reading the v0-pre-audit cannot verify any specific limit. The cross-references are dangling."

### Where the manual responds

Part 3 introduction states that Part 3 chapters are referenced rather than inlined for v0-pre-audit, with retemplate scheduled.

### Sufficiency

**Partial honest disclosure, but limits cannot be verified.** A reviewer cannot do the work the manual invites them to do.

### Gap

The v0-pre-audit is incomplete for any reader who wants to audit a specific limit.

### Proposed strengthening

Two options:

**Option A:** Continue with the agreed sequencing (audit first, then Part 3 retemplate via generator). The audit-strengthened v0 has Part 3 inlined.

**Option B:** Treat the audit as having identified this as a finding, but accept the gap for v0-pre-audit because Part 3 retemplate is the next step in the build sequence regardless.

**Recommendation:** Option A. The audit's job is to find gaps; this is a known, scheduled gap; the strengthening is the next step in the workplan.

**Materiality:** No manual edit. The audit's identification of this finding is the documentation that the gap is known and scheduled to be addressed.

---

## 17. New finding: Glossary completeness

### Attack (auditor-found)

"The Glossary is comprehensive but missing several terms used in the manual: 'subcategory' (used throughout Parts 1, 2, 5), 'platform' (most important undefined term — already flagged as Finding 6), 'achievability threshold' (used in Part 2.10), 'controlled document' (used in Edition page, Part 2.12, Colophon), 'Technical Committee' (referenced in Part 2.2 §2.3 but not defined elsewhere). The Glossary is selective."

### Sufficiency

**Insufficient.** Multiple terms used in the manual are not in the Glossary.

### Proposed strengthening

Add Glossary entries for: subcategory, achievability threshold, controlled document, Technical Committee. (Platform is addressed in Finding 6.)

**Materiality:** Glossary addition. No methodology revision.

---

## 18. New finding: forward-forecast verifiability

### Attack (auditor-found)

"Part 2.10 §12.6 requires the Program Operator to publish a forward forecast at every annual review. But the manual does not specify what happens if the forecast turns out to be wrong — if the projected next-cycle limit was 18 ppb but the actual next-cycle limit (when the trigger fires) is 22 ppb. Is the forecast retrospectively accountable? Is the projection methodology audited? The manual treats the forecast as a planning aid without making it a commitment."

### Sufficiency

**Insufficient.** The forecast is asserted as a brand-planning tool but its accuracy is not addressed.

### Proposed strengthening

Add a clause to Part 2.10 §12.6:

> "**Forecast accountability.** Forecasts are projections, not commitments. The Program Operator publishes annual retrospective comparison of prior forecasts to actual ratchet outcomes in the transparency report. Material divergence between forecast and outcome (e.g., projected limit differs from actual limit by more than 25%) triggers a methodology review of the projection method. Brands relying on forecasts for reformulation planning should treat them as the program's best current estimate, not as guaranteed future limits."

**Materiality:** Manual edit to Part 2.10 §12.6.

---

# Summary of findings

| # | Category | Materiality | Status |
|---|---|---|---|
| 1 | Methodology underspecification | Manual edit (Part 5.1) | Strengthen |
| 2 | Toxicological anchor gaps | Manual edits (Part 2.2, Glossary) | Strengthen |
| 3 | Chain-of-custody language | Source-doc edit (Lot Testing Schedule §10.2) | Strengthen |
| 4 | Ratchet gaming | **Methodology revision** (Governance Policy §12.3, §12.6) | Strengthen — flag |
| 5 | Conflict of interest | **Governance revision** (independent Appeals Committee) | Strengthen — flag |
| 6 | Definitional holes ("platform") | Glossary addition | Strengthen |
| 7 | Overclaim risk | Manual edits (Parts 1.3, 1.4) | Strengthen |
| 8 | Citation completeness | Mechanical inline citations (Parts 1, 2, 5) | Strengthen |
| 9 | HMI evidence-base claims | Manual addition (Part 5.1, 5.6) | Strengthen |
| 10 | Regional adaptability mechanism | **Methodology decision** (roadmap vs. spec) | Strengthen — flag |
| 11 | Confidential Remediation Track discovery dynamics | Manual addition (Part 2.4, 5.6) | Strengthen |
| 12 | Standards Ratchet step cap dynamics | Manual addition (Part 2.10 worked example) | Strengthen |
| 13 | Aggregate-exposure framing accuracy | Manual edit (Part 2.2, toxicology-callouts.md) | Strengthen |
| 14 | Supplier intelligence anonymization | Manual addition (Part 2.9 honest disclosure) | Strengthen |
| 15 | Cyprus operating-base claims | Manual addition (Part 5.6 dispute resolution) | Strengthen |
| 16 | Part 3 not inlined in v0-pre-audit | None | Accept (scheduled) |
| 17 | Glossary completeness | Glossary additions | Strengthen |
| 18 | Forward-forecast verifiability | Manual edit (Part 2.10 §12.6) | Strengthen |

## Strengthenings requiring methodology / governance revision

**Findings 4, 5, and 10** involve substantive revisions to the program rules, not just to the manual's description of them. These require Karen's approval before being applied. The other findings (1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18) are manual-level strengthenings that I can apply directly to the chapter files and propagate to the master via `build-program-manual.mjs`.

**Finding 16** is the known Part 3 inlining gap; no strengthening required at the audit level.

## Recommended next steps

1. Karen reviews findings 4, 5, 10 and either approves the proposed strengthenings, modifies them, or rejects them. These are methodology/governance decisions, not manual edits.

2. The auditor (me) applies manual-level strengthenings (findings 1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18) to the affected chapter files.

3. Part 5.2 final is rewritten from this audit document, restructured for reader-facing prose with each attack vector named, the manual's response located, and the strengthening documented as the program's structural answer.

4. Master manual is regenerated.

5. Part 3 retemplate generator is built and run.

6. Audit-strengthened v0 ships.

This audit is the input to step 2 onward.
