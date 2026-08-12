# 2.10 The Standards Ratchet Mechanism

## Narrative

A static certification standard is inherently self-defeating. If standards remain unchanged while industry improves, they eventually certify the status quo rather than driving further progress. Conversely, if standards are perceived as arbitrary or subject to surprise changes, brands lose the planning certainty necessary to invest in reformulation and supply-chain improvements. The Standards Ratchet Mechanism resolves this through a formal commitment to tighten standards over time, moving in only one direction, on data-driven trigger conditions, with a **capped step size** that bounds the per-cycle impact on any participating brand.

The mechanism is what makes HMTc a forward-moving signal rather than a static gate. As the certified market improves, the standards tighten; brands that have already invested in reduction find that their leadership is rewarded by tighter limits that exclude less-invested competitors; the population-level contamination reduction that Governing Principle 1 requires is delivered cumulatively, year over year.

This chapter is the operational specification of that mechanism. Each sub-section corresponds to a clause that brand legal teams, regulators, and adversarial reviewers should be able to verify on its own terms. The full §12 specification appears below.

## 12.1 Review Cycle

The HMTc Infant and Child Foods Standards shall be formally reviewed on a cycle of not more than three (3) years, or sooner if significant new toxicological data, regulatory changes, or aggregate Program data warrant revision. The review is conducted by the Program Operator with input from the Technical Committee.

The annual operational review (referenced throughout §12.3 below) is distinct from the formal three-year revision cycle. The annual review checks ratchet-trigger conditions and publishes the forward forecast. The three-year revision cycle reviews the methodology, the Tier 1/Tier 2 classification, the panel composition, and any structural updates to the framework.

## 12.2 Directional Commitment

The Standards Ratchet operates under a directional commitment: **action levels may be tightened (lowered) but shall not be loosened (raised) unless the underlying science changes in a manner that justifies relaxation.** This commitment ensures that the Program continuously drives exposure reduction and that brands can plan their improvement trajectories with confidence that the goalposts will move in only one direction.

A science-based relaxation, for example, a future EFSA reassessment [10] that meaningfully revises a metal's reference dose upward, would require Technical Committee review, Program Operator approval, and a defined transition period before any limit relaxation took effect. The directional commitment is not absolute, but its scope is narrow and its conditions are documented.

## 12.3 Trigger Conditions

The Standards Ratchet for a given analyte fires when **both** of the following conditions hold for two consecutive annual reviews:

(a) The 80th percentile of the combined Status A + Status B trigger pool for the analyte sits at or below 80% of the current limit.

(b) At least 50% of SKUs in the trigger pool have lots at or below 60% of the current limit.

The first condition tests aggregate market shift. The second tests breadth, the ratchet does not fire on a single large brand pulling the percentile down. Both conditions must hold across two consecutive annual reviews to confirm sustained improvement rather than a transient market event.

The two-condition design is intentional. Condition (a) alone would allow a single dominant brand to drive the trigger by aggressive reformulation across many SKUs; condition (b) alone would not capture the magnitude of market shift. Together, the two conditions require that the market has moved *and* that the movement is broad-based. The two-consecutive-cycle requirement protects against transient effects (a particularly clean harvest year, a temporary supplier change) that would otherwise distort the trigger.

### Anti-gaming provisions

**Trigger pool composition.** The trigger pool combines Status A and Status B lot results. This prevents *withholding gaming*, in which a brand could keep its best-performing SKUs at Status B by delaying CAPA closure on marginal Tier 2 exceedances to keep strong data out of the Status A pool. Combining the two pools makes the trigger insensitive to status-classification gaming on the brand's side.

**Single-Licensee cap.** No single Licensee may contribute more than 25% of the SKUs in the trigger pool for a given analyte. When a Licensee's SKU count exceeds the cap, the Program Operator excludes that Licensee's SKUs above the cap from the trigger calculation (selected randomly to avoid Licensee selection bias) and recalculates against the capped pool. This prevents a single dominant Licensee from driving trigger firing through aggressive reformulation across many SKUs; the ratchet reflects industry-wide movement rather than one Licensee's individual progress.

**Exit-and-re-enter prohibition.** A Licensee that voluntarily withdraws from the Program and subsequently re-enrolls within 24 months is evaluated against the standard in effect at the time of re-entry, not the standard in effect at the time of original exit. Grandfathering protections under §12.5 apply only to continuous certification. This rule prevents the exit-and-re-enter gaming pathway, in which a brand could withdraw before a ratchet event to escape transition obligations and then re-enter once the new standard's transition period has elapsed. A Licensee that withdraws for documented commercial reasons (product discontinuation, line restructuring, change of control) and re-enrolls after 24 months is treated as a new applicant per standard program-entry procedures.

## 12.4 Step Size and New Limit Calculation

When the trigger fires, the new limit equals the **maximum of**:

(a) The actual 80th percentile of certified Status A lot results for the analyte, or
(b) 80% of the current limit.

The second clause is the **step cap**. **No brand faces more than a 20% reduction per ratchet event, regardless of how far the market has actually moved.** Residual tightening above 20% is held over and may trigger again at the next cycle. This converts the ratchet from a potential shock into a predictable, capped progression.

The step cap is the program's structural protection for participating brands. A brand that has invested in reduction expects to be rewarded by tighter standards that exclude competitors who have not invested; the brand does not expect to be punished by surprise tightening that exceeds its planning horizon. The 20% cap establishes a maximum per-cycle obligation that brands can model and budget against.

### Worked example

Current Pb limit is 30 ppb. The 80th percentile of the Status A + Status B trigger pool is 15 ppb (50% of the limit). The breadth condition is met (≥50% of SKUs at or below 60% PoL = ≤18 ppb). The trigger fires.

New limit candidate (a): 15 ppb (the actual 80th percentile).
New limit candidate (b): 80% of 30 ppb = 24 ppb (the step cap).
New limit = max(15, 24) = **24 ppb**.

The step cap held; the market actually moved beyond the cap, but the program tightens only by the capped 20% increment.

At the next annual review, the 80th percentile of the trigger pool against the new 24 ppb limit is evaluated. If the market stays at the same absolute level (15 ppb), the 80th percentile is now 15/24 ≈ 62.5% of the new limit, below the 80% trigger condition. Both conditions hold. The trigger fires again.

New limit candidate (a): 15 ppb.
New limit candidate (b): 80% of 24 ppb = 19.2 ppb.
New limit = max(15, 19.2) = **19.2 ppb**.

The residual surfaces in the next cycle, but the cadence is determined by market behavior after the first tightening, not by mechanical compounding. A brand modeling the program's future obligations can plan against this worked example with confidence in the predictability of the trajectory.

## 12.5 Transition

When standards are tightened, a transition period of not less than 12 months and not more than 18 months will be provided between announcement and enforcement.

**Status A certifications grandfather for the entire transition period.** A Status A brand at certification renewal during the transition window keeps Status A even if their typical lots no longer meet the new limit, until their next annual review after enforcement begins. This protects brands who have invested in achieving Status A under the previous standard from being penalized by the standard's tightening before they have had time to respond.

**Status B and Status C SKUs re-evaluate against the new limit at their next CAPA cycle.** Status B and C cannot preferentially evaluate against the old standard during the transition window, they get the more stringent of (old standard, new standard), to prevent gaming of the transition window. This prevents a brand that is already in a remediation status from "freezing" their improvement trajectory at the old standard while the rest of the program tightens.

**Status D and Status E products are out regardless.**

## 12.6 Forward Forecast

At every annual review, the Program Operator publishes a forward forecast:

> "Current 80th percentile of trigger pool: X ppb. Current limit: Y ppb. If current improvement trends continue, the projected next-cycle limit is Z ppb, with expected announcement in N months and enforcement Q months after."

This converts the ratchet from a surprise into a planning parameter that brands can model years in advance. A brand considering certification can review the forward forecast for the relevant category before signing the license agreement and understand the next three-to-five-year obligation profile. A brand operating under the current standard can budget reformulation against the projected next-cycle limit.

The forward forecast is published in the annual Program Operator report and posted to the heavymetaltested.com Program Registry under document control. Forecasts are *projections*, not commitments, actual trigger firing depends on whether the two-condition test in §12.3 is satisfied at the time of the relevant annual review. Brands and regulators can rely on the forecast as the program's best current estimate of trajectory; the trigger conditions remain the operative test.

### Forecast accountability

Forecasts are projections, not commitments. The Program Operator publishes an annual retrospective comparison of prior forecasts to actual ratchet outcomes in the transparency report. Material divergence between a forecast and its corresponding outcome, operationally defined as a forecasted limit that differs from the eventual actual limit by more than 25%, triggers a methodology review of the projection method.

This retrospective accountability ensures that the forecast is not a marketing artifact but a calibrated planning tool with documented predictive accuracy over time. Brands relying on forecasts for reformulation planning should treat them as the Program's best current estimate, not as guaranteed future limits, and can verify the Program Operator's track record in the published retrospectives.

## 12.7 Exit-and-Re-Enter Prohibition

A Licensee that voluntarily withdraws from the Program and subsequently re-enrolls within 24 months is evaluated against the standard in effect at the time of re-entry, not the standard in effect at the time of original exit. Grandfathering protections under §12.5 apply only to continuous certification.

This rule prevents the exit-and-re-enter gaming pathway, in which a brand could withdraw before a ratchet event to escape transition obligations and then re-enter once the new standard's transition period has elapsed. A Licensee that withdraws for documented commercial reasons (product discontinuation, line restructuring, change of control) and re-enrolls after 24 months is treated as a new applicant per standard program-entry procedures.

## 12.8 Why this rule survives each Governing Principle

The Standards Ratchet as specified above satisfies all five HMTc Governing Principles simultaneously:

- **Principle 1 (drive contamination down through consumer demand):** The ratchet moves whenever the market actually moves, up to 20% per cycle. The market cannot stall the ratchet by collectively holding still.
- **Principle 2 (safeguard and protect consumers):** Limits never loosen. Tightening is data-driven and cumulative.
- **Principle 3 (safeguard and protect brands who enter the program):** Capped step size, 12–18 month transition, grandfather period during transition, published forward forecast at every cycle. Brands know the direction, the cadence, and the maximum step size in advance.
- **Principle 4 (legal defensibility):** The rule is data-driven, two-cycle-confirmed, and transparently published with specific thresholds. Adversarial readers cannot attack it as arbitrary because every clause has a specified rationale.
- **Principle 5 (scale to ubiquity):** Predictable cadence brands can plan around. Brands considering certification can model the next 3–5 years of obligation before they sign.

A plaintiff's expert attacking the ratchet must attack one of the specific clauses, the 80th-percentile threshold, the breadth condition, the step cap, the transition period, the grandfather clause, and must explain why an alternative specification would deliver the same five-principle satisfaction. The Program-Level Adversarial Read in Part 5.2 addresses the categories of attack that the program anticipates.

## Cross-references

- Governing Principles (the source authority): Part 5.1 or `docs/governance/hmtc-governing-principles.md`.
- Annual data inputs to the trigger: Part 2.7 (structured data requirement).
- Status framework that grandfathering protects: Part 2.3.
- Confidential Remediation Track (independent of ratchet for non-certified SKUs): Part 2.4.
- Methodology Reference (how the initial limits were set, which the ratchet evolves): Part 5.1.
