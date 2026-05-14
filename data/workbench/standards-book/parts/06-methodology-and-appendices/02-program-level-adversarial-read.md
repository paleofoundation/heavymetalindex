# 5.2 Program-Level Adversarial Read

This chapter enumerates the categories of attack a plaintiff's expert, a hostile regulatory reviewer, a competing standards body, or a defense attorney preparing cross-examination would advance against HMTc as a whole, and documents the program's response to each on the merits. The chapter is the output of the Pre-publication Adversarial Audit conducted on the drafted Program Manual; each attack vector was named, located in the manual, and either confirmed as adequately addressed or used to drive a manual revision before this chapter was written. Per-product adversarial reads appear in each Part 3 chapter; this chapter addresses program-level attacks that apply across all product categories.

The chapter is organized by attack category. For each: the attack as a hostile reviewer advances it; the program's response with manual location.

## Methodology underspecification

**Attack.** "The manual asserts that limits are calibrated via P97 clean / P45 dirty per-analyte percentiles to deliver 90/30 row-pass calibration. But the boundary between clean and dirty subcategories is undefined; the analyte-correlation assumption of 0.6 is asserted but not derived; the 2× median per-source N cap is named but not motivated. An independent analyst cannot replicate the calibration from this manual."

**Response.** Part 5.1 §"Layer 1" now specifies the clean-vs-dirty platform classification rule: a platform is clean when its empirical median across the literature-pooled distribution sits at or below the parent-category median for the analyte; dirty when p50(platform) > 1.5 × p50(parent category) for at least one Tier 1 metal. The classification is data-driven and reproducible from public corpus data on heavymetalindex.com. Part 5.1 §"Layer 2" anchors the 0.6 analyte-correlation estimate to cross-analyte correlation observed in FDA TDS and EFSA surveillance datasets, and commits to an empirical revision at the 12-month post-launch methodology review if HMTc-internal lot data diverges materially from the assumed value. Part 5.1 §"Layer 3" motivates the 2× median per-source N cap: it prevents any single large survey from dominating the pooled distribution while preserving large-N influence proportionally.

The principle of standards-setting is specified at sufficient depth in Part 5.1 for independent analysts to understand the calibration architecture. The engine implementation that operationalizes the principle is held as a trade secret per the firewall in Part 5.7 (Colophon); qualified reviewers may request the engine's inputs and outputs under the controlled-terms request process in Part 5.1.

## Toxicological anchor language

**Attack.** "The Tier 1 classification rationale in Part 2.2 uses shorthand framings, 'no safe threshold,' 'genotoxic carcinogen', that are stronger than the cited authorities' actual language. EFSA's actual conclusion on lead, for example, was that 'a threshold for the critical effects could not be identified,' which is not identical to 'no safe threshold.' The manual overstates the toxicological consensus."

**Response.** Part 2.2 Tier 1 and Tier 2 rationale columns have been revised to use the cited authorities' actual language. The lead entry now reads: "EFSA (2010) concluded that 'a threshold for the critical effects of lead in children's neurodevelopment could not be identified' (BMDL01 = 12 µg/L blood lead for one-point IQ decrement). JECFA (2011) withdrew its PTWI on the grounds that 'conventional tolerable intake values were no longer health-protective' for endpoints without an identifiable threshold." Analogous revisions apply to cadmium, arsenic, and methylmercury. The substantive toxicological positions are unchanged; the framing now matches the cited authorities' actual statements.

## Chain-of-custody enforceability

**Attack.** "The Lot Testing Schedule §10.2 says chain-of-custody breach 'may invalidate' results, discretionary. The Governance Policy §8.2 names chain-of-custody breach as a data-integrity violation triggering Status D, categorical. The tension is exploitable: defense experts argue 'may' is discretionary; plaintiff's experts argue §8.2 makes it categorical."

**Response.** The Lot Testing Schedule §10.2 has been revised. Any documented breach invalidates the result and is treated as a data-integrity issue per Governance Policy §8.2. Five specific breach types are enumerated (custody gap, broken seal, non-conforming labeling, transport non-conformance, receipt discrepancy). Discretion is preserved only for clearly minor procedural lapses where substantive integrity is preserved (e.g., a one-hour-late timestamp where actual custody record is intact); the default disposition for any chain-of-custody ambiguity is invalidation. The discretion-vs-categorical tension is resolved in favor of categorical invalidation with narrow, documented procedural-discretion exceptions.

## Ratchet gaming

**Attack.** "The ratchet trigger is gameable. A dominant brand could withhold its best-performing SKUs from Status A by delaying CAPA closure, keeping the trigger percentile up. A coalition of large brands could manipulate the breadth condition through SKU consolidation. A brand could exit and re-enter the program to reset its grandfathering status. The rule is structurally vulnerable to three documented gaming pathways."

**Response.** Part 2.10 §12.3 has been revised with three anti-gaming clauses. (1) The trigger pool now combines Status A and Status B lot results, making withholding gaming impossible, keeping a SKU at Status B no longer keeps its data out of the trigger calculation. (2) A single-Licensee cap limits any one Licensee to contributing no more than 25% of the SKUs in the trigger pool for a given analyte; SKUs above the cap are randomly excluded from the trigger calculation to prevent dominant-brand manipulation. (3) Part 2.10 §12.7 adds the exit-and-re-enter prohibition: a Licensee that withdraws and re-enrolls within 24 months is evaluated against the current standard at re-entry, not the standard in effect at original exit. Grandfathering applies only to continuous certification.

Each gaming pathway is now structurally prevented rather than merely identified.

## Institutional conflict of interest

**Attack.** "The Standards Architect is also CEO of the Paleo Foundation. The dual role is disclosed in the colophon, but disclosure is not mitigation. The appeals process is internal to the Program Operator, which is the entity with financial interest in upholding the determination. A Licensee challenging a status determination is appealing to the entity whose revenue depends on the determination being upheld. The §14.4 individual-conflict provision addresses reviewer conflicts but not the institutional one."

**Response.** Part 2.12 §14.1 now specifies a **two-tier appeals process**. Tier 1 is the internal Program Operator review (the existing process). Tier 2 is an **independent Appeals Committee** composed of three external reviewers, a toxicologist or food-safety scientist, a food-industry quality professional, a legal advisor with regulatory-affairs background, none of whom are employed by or under contract to the Paleo Foundation. Committee members serve two-year staggered terms, sit on no more than three appeals per calendar year, and recuse from cases involving Licensees they have relationships with. **Tier 2 reversals are binding on the Program Operator.** The Committee operates under a funding structure that prevents financial dependence on case outcomes. Anonymized appeal outcomes are published in the annual transparency report.

The two-tier structure is the program's structural answer to the institutional conflict. A Licensee dissatisfied with the Program Operator's internal review has binding recourse to a body independent of the Program Operator. The disclosure of the Standards Architect / CEO dual role remains in the Colophon as a transparency element; the independent Appeals Committee is the mitigation that disclosure alone does not provide.

## Definitional completeness

**Attack.** "The manual uses 'platform' (clean vs. dirty) as the load-bearing classification term but never defines it. 'Subcategory,' 'achievability threshold,' 'controlled document,' and 'Technical Committee' are used in the manual without Glossary entries. The most consequential vocabulary in the methodology is undefined."

**Response.** Part 5.3 Glossary has been extended with entries for *platform* (with the full classification rule from Part 5.1), *subcategory* (cross-referenced to *platform*), *achievability threshold* (with the distinction between standards-setting external data and ratchet-trigger internal data), *controlled document* (with the version-in-effect rule), and *Technical Committee* (with its advisory role distinguished from the binding-decision authority of the Program Operator and the Independent Appeals Committee).

## Overclaim risk

**Attack.** "Part 2.5 §6.2 prohibits 'heavy metal free' and 'safe' marketing claims. But Part 1.4 says the program creates 'a documented record' that is 'the difference between exposure and defense.' Part 1.3's ROI framework describes 'risk reduction' in language that could be read as a safety claim. The manual maintains the prohibition in operational rules but uses risk-reduction language in legal-defensibility arguments that approach the prohibited claim."

**Response.** Parts 1.3 and 1.4 have been revised with explicit hedging language. Part 1.3 now states: "The model quantifies *risk-event* reduction (probability and severity of recalls, delistings, and litigation triggers), not safety. A brand with HMTc certification is in a better defensive posture than a brand without it; both brands operate in a contamination environment that cannot be eliminated by any program. The certification mark is an action-level compliance signal under surveillance, not a safety guarantee." Part 1.4 adds: "These improvements reduce *probability* and *severity* of contamination events; they do not produce safety guarantees. The mark certifies action-level compliance under surveillance, not the absence of risk." Internal consistency is maintained between the operational prohibition in Part 2.5 §6.2 and the framing language in Parts 1.3 and 1.4.

## Citation completeness

**Attack.** "The manual makes specific numeric claims, '$2.0 million per major case,' '$28,000 Prop 65 settlement,' '7.8 µg lead/day aggregate', without inline citation. A reviewer cannot move from a numeric claim to the source page in one step."

**Response.** Key numeric claims in Parts 1, 2, and 5 now carry inline bracketed citations to their primary sources (e.g., *Federal Judicial Center, Litigation Cost Survey of Major Companies*; *People v. Promix Nutrition*, Prop. 65 Settlement; *FDA, Guidance for Industry: Action Levels for Lead...*, January 2025). The Consolidated Sources Index in Part 5.4 provides the full list of cited authorities. The citation chain is now navigable inline rather than requiring traversal through the Index.

## Evidence-base claim verifiability

**Attack.** "Part 1.5 asserts that 'every limit in this manual traces to source pages' on heavymetalindex.com, and that 'qualified reviewers may request the workbench-side aggregate distribution data under controlled terms.' But the manual does not specify who counts as a qualified reviewer, what the controlled terms are, or how long the response takes. The auditability claim is operationally unverifiable."

**Response.** Part 5.1 now includes the §"Controlled-terms request process" specification. Qualified reviewers are enumerated: regulatory bodies acting under official inquiry; plaintiff's or defense counsel in active litigation; certified or pending HMTc Licensees auditing their own product category's standards; academic researchers with institutional approval. Requests are submitted via the Colophon contact channels with a **30-business-day response commitment**. Regulatory bodies receive the requested data without an NDA; non-regulatory requestors receive access under a controlled-access NDA that preserves engine trade-secret status while making inputs and outputs auditable. Refusal decisions are reviewable by the Independent Appeals Committee. The Program Operator publishes annual statistics on request volume, response times, and disposition. Part 5.6 Licensing Terms adds the corresponding Licensee audit right as a contractual commitment.

The auditability claim is now operationally specified with a documented response commitment and a transparency mechanism.

## Regional adaptability mechanism

**Attack.** "Part 2.1 §1.6 asserts that 'regional adaptability is a structural feature' and that the more-stringent-of-(regional, global) rule governs. But the mechanism for regional recalibration is hand-waved: no operational threshold for when a region gets its own platform; no specification for how the global cleanest-achievable benchmark gets computed; no statement of which regions are currently calibrated regionally. The claim is aspirational, not operational."

**Response.** Part 2.1 §1.6 has been revised to characterize regional adaptability as a **roadmap commitment for future Editions**, not an operational feature of the 2026 Edition. The 2026 Edition is honestly disclosed as calibrated against the global open literature; the next Edition's regional-adaptability work will begin once Cat 2 and additional categories ship and the corpus has accumulated region-specific evidence at sufficient sample-size totals to support statistically defensible regional pooling. The Governing Principles remain universal; the *calibration* may become regional in a future Edition with the more-stringent-of rule operative at that time. This converts the previous overclaim into a documented forward commitment.

## Confidential Remediation Track discovery dynamics

**Attack.** "The Track produces 'a documented, timestamped, third-party-verified record of continuous improvement.' But the record is held by the Program Operator. In discovery, the record is potentially compellable from the Program Operator under subpoena. The Track does not provide attorney-client privilege or work-product protection. Brands relying on the Track for legal defensibility may be misled about how strong the protection actually is."

**Response.** Part 2.4 now includes an explicit §"Discovery dynamics, honest disclosure" section. Track data is held by the Program Operator as a service provider; it is potentially compellable under subpoena; the License Agreement specifies that the Program Operator will notify the Licensee and cooperate with the Licensee's defense to the extent legally permissible. **The Track does not provide attorney-client privilege or work-product protection over the testing data**; what it provides is contemporaneous, third-party-verified evidence of due diligence. The evidence is admissible *for* the brand's defense; it is also discoverable by plaintiffs. The structural value is that the evidence exists, is timestamped, and was generated in good faith before any litigation was foreseeable. Brands evaluating the Track are explicitly directed to consult counsel about how the Track interacts with their broader discovery posture.

## Standards Ratchet step-cap dynamics

**Attack.** "The 20% step cap is presented as protection for Licensees. But the trigger conditions in §12.3 use the *current* limit. After a 20% reduction, the trigger recomputes against the new (tighter) limit. The 'held-over' residual may never resurface because the market may consolidate at the new limit before producing another two-cycle confirmation. The manual claims the residual 'may trigger again' but does not show the dynamics."

**Response.** Part 2.10 §12.4 now includes a **worked example** demonstrating the step-cap dynamics. The example shows that when the market moves beyond the 20% cap, the cap holds the first cycle's tightening at 20%, then the residual surfaces at the next annual review when the trigger recomputes against the new (tighter) limit. The example demonstrates that the residual does resurface, the dynamics are not pathological, but the cadence is determined by market behavior, not by mechanical compounding. Brands can model their future obligations against the example with confidence.

## Aggregate-exposure framing accuracy

**Attack.** "The Part 2.2 aggregate-exposure calculation uses 5 ppb formula (below the FDA action level) but 20 ppb cereal and root vegetables (at the action level). The asymmetry is rhetorically tuned. The calculation should use either worst-case values (all at FDA action levels) or surveillance medians, not a mix."

**Response.** Part 2.2 has been revised to use the FDA action level uniformly across all four food categories: 10 ppb formula, 20 ppb dry cereal, 10 ppb fruit purée, 20 ppb root-vegetable purée. The revised calculation yields approximately **10.4 µg lead per day**, more than **4.7 times** the FDA Interim Reference Level of 2.2 µg/day. This is a stronger version of the same argument with no asymmetric value selection. The toxicology-callouts.md aggregate-exposure cross-callout was revised in parallel.

## Supplier-intelligence anonymization

**Attack.** "Part 2.9 anonymizes alerts by removing brand identifiers, but ingredient × geography × timing is often a near-unique identifier. A sophisticated observer correlating a brand's public sourcing disclosures with the timing of alerts can identify the reporting brand. Anonymization is metadata-leaky."

**Response.** Part 2.9 now includes an explicit §"Anonymization limits, honest disclosure" section acknowledging the metadata-correlation risk. The Program Operator's three operational mitigations are documented: batching (multiple reporting brands' findings combined into one alert), geographic generalization (region rather than exact origin), and discretionary hold (alerts delayed at the reporting brand's request). Brands are explicitly told that anonymization is **strong but not absolute**, that sophisticated observers correlating public sourcing disclosures could potentially infer the reporting brand, and that the metadata-correlation risk should factor into the participation decision. The Program Operator does not warrant absolute anonymization.

## Dispute resolution forum

**Attack.** "The Part 5.6 dispute-resolution provisions specify California-seated arbitration under California law. A non-California Licensee may argue the choice of forum disadvantages them in jurisdictional terms, or that California arbitration awards face enforcement friction in other states."

**Response.** Part 5.6 §"Dispute resolution" specifies California-seated mediation followed by AAA Commercial Arbitration in San Diego. The choice of forum reflects three operational considerations: (a) MDL 3101 and the relevant baby-food heavy-metal product liability case law are being made in the Northern District of California, so the operative legal landscape is California's; (b) AB 899 and Proposition 65 are California-state regimes whose enforcement intersects directly with HMTc certification obligations; (c) the Program's defense counsel operates from San Diego, locating defense expertise in the dispute forum. California arbitration awards are enforceable in every U.S. jurisdiction under the Federal Arbitration Act, so a California award reaches non-California Licensees without enforcement friction. Non-U.S. Licensees may discuss alternative-forum proposals during license negotiations.

## Forward-forecast accountability

**Attack.** "Part 2.10 §12.6 requires the Program Operator to publish a forward forecast. But the manual does not specify what happens if the forecast turns out to be wrong. Brands plan against the forecast; if the forecast systematically underestimates the next-cycle limit, brands are misled. There is no accountability mechanism for forecast accuracy."

**Response.** Part 2.10 §12.6 now includes a **§"Forecast accountability"** clause. The Program Operator publishes an annual retrospective comparison of prior forecasts to actual ratchet outcomes in the transparency report. Material divergence between a forecast and its corresponding outcome, operationally defined as a forecasted limit that differs from the eventual actual limit by more than 25%, triggers a methodology review of the projection method. The forecast is now a calibrated planning tool with documented predictive accuracy over time, not a marketing artifact.

## Closing of the program-level adversarial read

The fourteen attack categories above are the categories the Pre-publication Audit identified as the most likely program-level attacks a sophisticated adversarial reviewer would advance. Each has been responded to on the merits, with manual revisions applied where the audit identified gaps. Two categories required methodology revision (ratchet gaming, institutional conflict of interest) and were approved by the Standards Architect before being applied. One category was resolved by honest disclosure rather than mechanism change (regional adaptability roadmap framing) for the 2026 Edition; the operational mechanism will appear in a future Edition.

A reviewer who finds an attack vector not addressed above is invited to submit it to the Program Operator through the channels in the Colophon. The Pre-publication Audit is a planned recurring exercise; subsequent Editions will incorporate additional attack categories as they are identified. The adversarial-audit posture is the program's structural commitment to anticipating attack rather than waiting for attack to land.

## Cross-references

- Pre-publication Audit document: `data/workbench/standards-book/adversarial-audit.md`.
- Each per-product adversarial read: Part 3 chapters.
- Governing Principles authority: Part 5.1 and `docs/governance/hmtc-governing-principles.md`.
- Independent Appeals Committee specification: Part 2.12 §14.1.
- Standards Ratchet anti-gaming provisions: Part 2.10 §12.3 and §12.7.
