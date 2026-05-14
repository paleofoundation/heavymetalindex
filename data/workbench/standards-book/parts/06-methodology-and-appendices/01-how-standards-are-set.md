# 5.1 How HMTc Standards Are Set

A reader who has worked through Parts 1, 2, 2.5, 3, and 4 has encountered every operational element of the HMTc Program: why it exists, how it is governed, how brands use the evidence base, what the per-product standards are, and how surveillance operates. What remains is the methodology that ties the operational program back to its underlying analytical work. This chapter specifies, in principle and at appropriate detail, how a specific number, say, *10 ppb lead for infant formula powder*, gets produced and what an adversarial reviewer can verify about it.

This chapter respects the wiki/HMTc firewall: the engine arithmetic stays workbench-side, where it is protected as a trade secret per the Colophon (Part 5.7) and where exposing it would let competing certifiers shortcut years of methodology development. The **principle** of standards-setting is in this chapter; the **mechanism** is in the Governing Principles; the **inputs** are on heavymetalindex.com and are publicly auditable.

## The evidence base, and what auditable means

Every concentration limit in Part 3 of this manual was derived from a pooled distribution of source pages on heavymetalindex.com for the relevant product-by-metal cell. The pooling math (the per-analyte percentile calculations, the source-level bootstrap analysis, the methodology stability checks across alternative parametric assumptions) lives on the workbench-side infrastructure under the wiki/HMTc firewall established by the HMTc Governing Principles (Principle 4) and described in Part 1.5 of this manual. But the **inputs** to the pooling, the source pages contributing to each cell, are public.

An adversarial reader who wants to audit a specific HMTc limit can follow this path:

1. Locate the product chapter in Part 3 of this manual. The Master Limit Table gives the HMTc limit, the applicable regulatory cap, and the basis note for each analyte.
2. Read the chapter's Sources Cited section. Each citation resolves to a source page on heavymetalindex.com.
3. Read the source page. Each source page summarizes the underlying document's findings with concentrations, sample sizes, methods, and basis (as-sold, as-consumed, dry weight). The source page links to the original document where available.
4. Check the routing audit (`data/evidence/product_source_routing_audit.csv`) to confirm that no relevant source has been omitted from the cell.
5. For the pooled distribution itself, qualified reviewers may request the workbench-side aggregate distribution data under controlled terms (see the controlled-terms request process below).

This design preserves the firewall while making the evidence inputs auditable. **The failure mode this design prevents is the "we set this limit because we said so" attack.** HMTc cannot make that argument because the source attribution is public.

### Controlled-terms request process

**Qualified reviewers** include:

- **Regulatory bodies acting under official inquiry**, FDA, EFSA, state attorneys general, equivalent international agencies, who require methodology audit access for regulatory analysis or rulemaking purposes.
- **Plaintiff's or defense counsel requesting access for active litigation** in which an HMTc-certified product is at issue or in which HMTc certification or methodology has been raised by either party.
- **Certified or pending HMTc Licensees auditing the methodology** that produces their own product category's standards. Licensees have a contractual audit right under the License Agreement (see Part 5.6).
- **Academic researchers conducting peer-track review** with institutional approval and a documented research protocol that includes confidentiality undertakings.

Requests are submitted to the Program Operator via the contact channels in the Colophon (Part 5.7). The Program Operator responds within **30 business days** with one of:

- For regulatory bodies under official inquiry: the requested aggregate distribution data directly, without a controlled-access NDA.
- For non-regulatory requestors: a controlled-access Non-Disclosure Agreement that preserves the trade-secret status of the pooling engine implementation while making the engine's inputs (the contributing source pages and their summary statistics) and outputs (the per-analyte percentile values, the row-pass calibration math, and the methodology's stability under alternative parametric assumptions) auditable.
- A documented refusal with the specific basis, where the request falls outside the qualified-reviewer categories. Refusal decisions are reviewable by the Independent Appeals Committee (Part 2.12 §14.1).

The 30-business-day commitment is an operational commitment by the Program Operator. The Program Operator publishes annual statistics on controlled-terms request volume, response times, and disposition in the transparency report.

## The standards-setting principle in three layers

### Layer 1: The 90/30 row-pass intent

The HMTc Standards are calibrated to deliver the following row-level outcomes at initial publication:

- Approximately **90%** of clean-platform brands pass row-level certification (achieve Status A) on day one.
- Approximately **30%** of dirty-platform brands pass row-level certification on day one.

These targets are the policy choice. They sit at the intersection of all five Governing Principles. Too tight (e.g., 50/10) violates Principles 3 and 5 because brands cannot recruit and the program cannot scale. Too loose (e.g., 99/80) violates Principles 1 and 3 because the mark loses meaning and clean brands lose differentiation. 90/30 is the policy answer to all five simultaneously.

**Adversarial readers attacking "why P97 and not P95" must instead attack "why 90% and not 85%."** The answer to that question traces directly to the Governing Principles. The principle-level argument is the strongest possible form of the methodology defense because it converts a technical argument into a policy argument, and policy arguments are won or lost on the principles they serve.

#### Clean vs. dirty platform classification rule

A *platform* is a subcategory of products within a parent product category, for example, soy-based versus non-soy-based infant formula, powder versus ready-to-feed liquid, rice-based versus non-rice baby cereal. Platform classification determines whether per-analyte standards use the P97 (clean) or P45 (dirty) percentile, so the classification rule is load-bearing.

**The classification rule is data-driven:** a platform is classified *clean* when its empirical median across the literature-pooled distribution sits at or below the parent-category median for the analyte; *dirty* when meaningfully above. "Meaningfully above" is operationalized as p50(subcategory) > 1.5 × p50(parent category) for at least one Tier 1 metal. Platforms not meeting the dirty threshold are classified clean by default.

The classification is reproducible from public data. Any reviewer can verify a specific platform's classification by examining the pooled distributions on heavymetalindex.com via the product-category and subcategory pages. Reclassification (clean ↔ dirty) is data-driven and follows the rule above; it is not a discretionary decision by the Program Operator.

### Layer 2: The per-analyte percentile mechanism

To deliver the 90/30 row-level intent, per-analyte limits are set as follows:

- **Per-analyte standard for a clean subcategory** = P97 of that subcategory's marginal occurrence distribution for that analyte.
- **Per-analyte standard for a dirty subcategory** = P45 of that subcategory's marginal occurrence distribution for that analyte.

The reasoning is the row-pass calibration: a brand certifies a product (one row, ten analytes simultaneously), not one analyte at a time. Under analyte independence, per-analyte limits set at the raw P90 of the clean distribution would deliver a joint row-pass rate of approximately 0.9^10 = 35%. Under realistic analyte correlation (around 0.6, since supply-chain hygiene drives multiple metals together), the joint rate sits around 50–70%. To deliver the 90% row-pass intent for clean-platform brands, per-analyte limits are uplifted from the raw P90 to P97; the analogous uplift for dirty-platform brands moves from raw P30 to P45.

The analyte-correlation estimate of approximately 0.6 is consistent with cross-analyte correlation observed in published surveillance datasets (FDA Total Diet Study; EFSA scientific opinions on Pb, Cd, and iAs in food). It is an estimate from external surveillance data, not a measurement from HMTc-internal lot data. The 12-month post-launch methodology review will measure empirical analyte correlation from HMTc lot results and may revise the per-analyte percentile uplift if the empirical correlation diverges materially from the assumed value.

The uplift is uniform across all analytes today. Per-analyte differentiation, for example, lead tighter than nickel based on regulatory pressure or toxicology, is a Tier 2 calibration deferred until HMTc has accumulated 6–12 months of lot-testing data to measure actual joint pass rates empirically.

### Layer 3: Pool admission, basis, regulatory cap, and rationale tagging

Every source loaded for a (row, metal) cell contributes to the pooled distribution unless explicitly dispositioned out with a stated reason. Sample-level data uses raw values; summary-only sources (mean, median, max, SD, lower/upper bound, IQR) contribute via moment-matching pseudo-sample expansion under log-normal or gamma assumptions following the standard practice in environmental exposure assessment (WHO/JECFA pooled TDS methodology; EFSA Scientific Opinions on Pb and Cd in food).

Sources are weighted by their reported sample size, capped at twice the median per-source N. The cap prevents any single large survey, for example, a 5,000-sample FDA TDS sub-extract, from dominating the pooled distribution for a cell where most contributing sources have N=50–200. The 2× ratio preserves large-N influence proportionally while preventing pool concentration in a single source. Without the cap, a single large survey could effectively determine the per-analyte percentile for a cell regardless of what other contributing sources report; with the cap, the percentile reflects the weighted consensus of the corpus rather than the dominant single survey.

Each row's standard is published in the native basis of the product form: powder rows in powder-as-placed-on-market, ready-to-feed liquid rows in as-consumed, dry cereal rows in dry-as-sold, purée rows in as-consumed. Brands ship and test in their product's native form; the certification mark matches that form. Sources reporting in non-native bases are converted into the row's native basis during pooling via documented factors (the 1:7 reconstitution ratio for powder ↔ prepared; within-class identity for as-sold ↔ dry-as-sold). The cross-basis equivalent of every published value is shown in the Master Limit Table for ease of reference by audiences operating in different bases.

The final HMTc value is `min(per-analyte pooled percentile, lowest applicable regulatory ceiling)`, with both expressed in the row's native basis. The cap is converted into native basis if it was published in a different one. The rationale tag is one of:

- **literature-baseline**, the pooled percentile binds. This is the typical case where HMTc's methodology produces a value at or below the regulatory floor.
- **regulatory-alignment**, the cap binds. The pooled percentile is higher than the regulatory ceiling, and the ceiling governs.
- **precautionary**, a standard set lower than both the pooled percentile and the cap when staff document a precautionary rationale (vulnerable-population concern, cumulative exposure, scientific uncertainty).
- **feasibility-driven**, a standard set higher than the pooled percentile only via a documented feasibility-driven rationale paired with a sunset plan to tighten as analytical methods or supply-chain practices improve. **The gap between literature-baseline and the final value, if any, is stated honestly.**

### Layer 4: Ratchet trigger (post-publication, distinct from initial limit-setting)

After initial publication, the Standards Ratchet specified in Part 2.10 operates on HMTc-internal lot-testing data. The 80th-percentile-of-Status-A trigger and the breadth-condition are independent of the limit-setting math: limit-setting uses external survey data (FDA TDS, EFSA opinions, peer-reviewed studies, EU basket surveys); the ratchet uses program-internal lot-testing data accumulated under the structured-data requirement in Part 2.7.

The two mechanisms operate at different times, on different data sources, and serve different functions. **The 80% ratchet trigger and the 97% / 45% limit-setting percentiles are not redundant; they are complementary.**

## Why this methodology is defensible

A plaintiff's expert reading this chapter could advance three categories of attack: that the methodology is opaque (we can't reproduce it), that the policy choice is arbitrary (the 90/30 numbers are made up), or that the inputs are biased (the source pages were selected to support a predetermined conclusion).

The first attack fails because the principle is documented here, the mechanism is documented in the Governing Principles, and qualified reviewers can request the engine outputs under controlled terms. The methodology is opaque in the sense that the engine code is a trade secret; it is not opaque in the sense that the reasoning is unverifiable.

The second attack fails because the 90/30 policy choice traces to the five Governing Principles. An attacker who wants to argue that a different policy choice would better serve the Governing Principles can do so on the merits, and that argument is exactly the kind of public discourse a credible standards program welcomes. The program does not claim that 90/30 is the only defensible calibration; it claims that 90/30 is the calibration that best serves the five principles simultaneously, and welcomes principled counterarguments.

The third attack fails because the source pages are public. An attacker who believes a relevant source has been omitted can check the routing audit and the source's frontmatter; an attacker who believes an irrelevant source has been included can apply the same check. Selection bias arguments must point to specific source pages whose inclusion or exclusion is in dispute; they cannot be advanced in the abstract because the corpus is open.

The Program-Level Adversarial Read in Part 5.2 enumerates these and other attack vectors in detail.

## Cross-references

- Governing Principles (the policy source): Part 5.1 source document is `docs/governance/hmtc-governing-principles.md` v2.1.
- The corpus and the wiki/HMTc firewall: Part 1.5.
- Standards Ratchet (post-publication tightening): Part 2.10.
- Per-product master limit tables: Part 3.
- The published methodology preprint: `Pendergrass, K. Certification as a Framework for Reducing Heavy Metal Exposure in Infant and Child Foods. doi: 10.5281/zenodo.18905821`. The preprint's 80%-achievability calibration framing reflects the program's March 2026 state; the current operational framing is the 90/30 row-pass intent specified above.
