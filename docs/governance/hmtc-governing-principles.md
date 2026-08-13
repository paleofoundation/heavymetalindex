# HMTc Governing Principles

**This document governs every decision in the HMTc Program. Read it before
reading any other HMTc document. Apply it at every step.**

---

The HMTc Program exists to serve five objectives simultaneously:

1. **Drive down heavy metal contamination through consumer demand.**
   The certification mark creates market preference for cleaner products.
   Limits must be tight enough to force reformulation and sourcing
   improvements — not ratify current contamination levels.

2. **Safeguard and protect consumers.**
   Initial limits begin at the strictest applicable credible sovereign
   maximum; certified-lot findings then support predictable tightening as
   broad lower performance becomes achievable. When in doubt, protect the consumer.
   Infant and child populations receive the highest level of protection.

3. **Safeguard and protect brands who enter the program.**
   Brands that invest in meeting HMTc standards must receive meaningful
   competitive differentiation. If the standards are so loose that every
   brand qualifies, the mark has no value. If the standards change
   unpredictably, brands cannot plan. Standards ratchet tighter over time
   but never loosen. The program must offer a viable path through sourcing,
   reformulation, remediation, and a published transition period; an
   unreachable or unpredictable bar drives no change and no adoption.

4. **Make it legally defensible.**
   Every limit must be traceable to documented inputs. Every regulatory
   claim must cite a real regulation with a real section number. No HMTc
   limit may exceed a government maximum level. The methodology must
   withstand scrutiny from regulators, litigators, and competitors. The
   sovereign-limit compiler and certified-lot ratchet are in code,
   deterministic, and reproducible. Descriptive occurrence pooling is also
   auditable but carries no compliance weight. Standards arithmetic does not
   live in `wiki/`; the wiki is the public literature evidence layer, while
   the certification repository carries current limits and ratchet records.

5. **Make it the de facto standard.**
   The program must scale across all product categories with consistent
   methodology. The mark must be credible enough that retailers,
   distributors, and consumers treat it as a primary purchasing signal.
   Operational efficiency matters — the pipeline must produce standards
   reliably without manual intervention at every step. Commercial success
   follows from scale and credibility, not the reverse.

---

**No principle is subordinate to any other.**

A standard that protects consumers but is legally indefensible fails.
A standard that is legally bulletproof but doesn't drive contamination
reduction fails. A standard that is rigorous but that brands see no
commercial value in joining fails. A standard that brands value but
that cannot scale across all categories fails.

Every recommendation, design decision, and protocol step must be evaluated
against all five principles. If a decision serves one principle but
undermines another, the conflict must be flagged and resolved — not
ignored in favor of whichever principle feels most urgent in the moment.

---

## The Locked Standards Method

The HMTc Program uses two mechanisms at different moments in the program
lifecycle. Initial publication is government-limit-only. Later ALARA
tightening is endogenous and uses eligible HMTc certified-lot findings.
Keeping those mechanisms separate is mandatory.

### Initial publication: government-limit-only

For every product-analyte cell, the initial HMTc value is the strictest
applicable maximum level set by a credible sovereign government, expressed
in the product's native basis. The controlling instrument is cited. Where
the government rule splits by product form or formulation, HMTc preserves
that split.

Where no government regulates the exact cell, HMTc uses a disclosed
read-across from the nearest applicable sovereign value or publishes an
n/m determination with its control method. If neither is supportable, the
cell stays in development. Occurrence distributions, brand baselines, and
program results do not select the initial value.

A nonnumeric cell must distinguish two cases. `not-material` means there is
no credible source or pathway for a standalone number and a documented
bounded/reflex rule governs. `control` means the analyte remains mandatory
and material enough to test, but no defensible sovereign maximum or
near-neighbour read-across exists; its record must state the analytical
method and escalation rule. Neither state may be filled from occurrence data.

### Canonical analyte contract

Every certification row carries an eight-total laboratory panel: **Pb, Cd,
tAs, tHg, Ni, Sn, Al, and total Cr**. Species controls are additional cells
and never replace their parent total result. **iAs** and **Cr-VI** are the
core species cells. **MeHg** is additionally required wherever fish, seafood,
or another credible methylation pathway makes it material; every other row
must still record an explicit MeHg applicability determination bounded by
tHg. A category compiler that substitutes iAs for tAs, MeHg for tHg, or Cr-VI
for total Cr is incomplete.

A species cell may resolve to a sovereign numeric ceiling, a disclosed
sovereign read-across, or a testable bounded/reflex control. For example, a
total-Hg ceiling bounds MeHg only when no stricter sovereign MeHg ceiling
applies; Cr-VI may be governed by a validated reflex rule under mandatory
total-Cr testing. A missing cell is never equivalent to a not-material
determination. Total-panel results remain mandatory even when the current
government-limit method supports only a documented nonnumeric control.

The powder-to-liquid 8:1 conversion is confined to infant formula. Other
rows use the government value in the applicable native basis. Wet, dry,
as-sold, as-consumed, and as-prepared values are never mixed silently.

Heavy Metal Index occurrence distributions remain valuable for literature
synthesis, market characterization, surveillance prioritization, and gap
analysis. They carry no compliance weight and do not enter MaxPoL.

### Ratchet trigger (revision cycle, distinct from limit-setting)

After initial publication, the Standards Ratchet operates on
HMTc-internal lot-testing data. The ratchet for a given analyte fires
when **both** of the following conditions hold for two consecutive
annual reviews (per canonical Governance Policy §12.3):

(a) The P80 of the capped combined Status A + Status B trigger pool sits
    at or below 80% of the current limit.
(b) At least 50% of SKUs in that trigger pool have qualifying lots at or
    below 60% of the current limit.

The first tests aggregate market shift. The second tests breadth — the
ratchet does not fire on a single large brand pulling the percentile
down. No single licensee may contribute more than 25% of the SKUs in an
analyte's trigger pool. When fired, the new limit equals the maximum of
(a) the actual P80 of Status A results or (b) 80% of the current limit. The
second clause is the step cap: no brand faces more than a 20% reduction
per ratchet event. Transition is 12–18 months from announcement to
enforcement; Status A certifications grandfather for the transition
period. Full mechanics are specified in Governance Policy §12.

The ratchet trigger uses HMTc-internal lot-testing data. Initial setting
uses sovereign government maximum levels. Heavy Metal Index literature
and survey occurrence data feeds neither calculation. The mechanisms
operate at different times, on different data sources, and serve
different functions.

ALARA (As Low As Reasonably Achievable) and the brand remediation-plan
infrastructure govern the ongoing relationship between certified brands
and improving limits.

---

## Scope

This methodology applies to every HMTc category, not to Category 1 alone.
The government-limit-only initial-setting sequence, native-basis rule,
read-across control, n/m control, and post-publication ratchet are uniform.
Per-category exceptions require an explicit governance decision and a
changelog entry.

---

**Version 3.1 — August 2026**

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 2026 | Initial version. |
| 1.1 | April 2026 | Added "Two Percentile Mechanisms" section to clarify the distinction between P_clean/P_dirty (limit-setting, external data) and the 80th percentile ratchet trigger (revision cycle, program data). Prevents confusion between Governance Policy §12.3 and the Methodology Reference §1.4. |
| 1.2 | May 2026 | Clarified that benchmark percentiles are HMTc benchmark-pool calculations, not values individual studies are expected to report; added jurisdiction-aware benchmark pool rule. |
| 2.0 | May 2026 | Locked the per-analyte limit-setting math to **P97 clean / P45 dirty** with the row-pass calibration rationale. Superseded the earlier "P10 default / P20 if selected" framing for dirty. Required pool admission of summary-only sources via moment-matching pseudo-sample expansion. Required each row's standard to be in the native basis of the product form. Reaffirmed that standards arithmetic does not live in `wiki/`. Reaffirmed scope: applies to every category in the HMTc index. |
| 2.1 | May 2026 | Principle 5 reframed from "$2 billion by 2030" to "Make it the de facto standard" — commercial success follows from scale and credibility, not the reverse. Standards Math section restructured to lead with **intent** (90/30 row-pass) before **mechanism** (P97/P45 per-analyte uplift); the policy choice is the 90/30 row-pass rate, calibrated against all five Governing Principles, with P97/P45 as the math that delivers it. Ratchet trigger section expanded to specify two-condition fire rule (P80 of Status A + breadth threshold), 20% step cap, and reference to revised Governance Policy §12. |
| 2.2 | August 2026 | Updated the dirty-subcategory row-pass target from the legacy 30% to ~40% (90/30 → 90/40 intent) and re-anchored the P97/P45 calibration to measured FDA 2026 lot data (94% clean / 42% dirty) rather than the assumed ≈0.6 cross-analyte correlation (measured ~0.27). Aligns this document with the amendment ratified 2026-08-03 in CLAUDE.md Part 19 and the Methodology Reference; the P97/P45 mechanism itself is unchanged. |
| 3.0 | August 2026 | Retired occurrence-percentile initial setting. Locked every initial value to the strictest applicable sovereign maximum, with disclosed regulatory read-across or n/m control for unregulated exact cells. Preserved the distinct endogenous ALARA ratchet and reconciled its anti-gaming trigger pool to canonical Governance Policy §12: combined Status A + B trigger pool, Status A P80 new-limit candidate, 20% step cap. |
| 3.1 | August 2026 | Locked the analyte contract to eight mandatory total-element results (Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr) plus core iAs and Cr-VI species cells and conditional MeHg. Explicitly prohibited species-for-total substitution and required bounded/reflex controls to be recorded rather than omitted. |
