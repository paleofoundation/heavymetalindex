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
   Every limit must be set at the most protective level that is commercially
   viable for the clean platform. When in doubt, protect the consumer.
   Infant and child populations receive the highest level of protection.

3. **Safeguard and protect brands who enter the program.**
   Brands that invest in meeting HMTc standards must receive meaningful
   competitive differentiation. If the standards are so loose that every
   brand qualifies, the mark has no value. If the standards change
   unpredictably, brands cannot plan. Standards ratchet tighter over time
   but never loosen. The program must offer a viable path to certification
   for both clean and dirty subcategories; an unreachable bar drives no
   change and no adoption.

4. **Make it legally defensible.**
   Every limit must be traceable to documented inputs. Every regulatory
   claim must cite a real regulation with a real section number. No HMTc
   limit may exceed a government maximum level. The methodology must
   withstand scrutiny from regulators, litigators, and competitors. The
   pooling math is in code, deterministic, and reproducible. Standards
   arithmetic does not live in `wiki/`; the wiki is the public literature
   evidence layer, the staff Standards Workbench (and `data/workbench/`)
   carries the threshold math.

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

## The Locked Standards Math

The HMTc Program uses percentile-based thresholds at two distinct points,
operating at two different moments in the program lifecycle. The framing
below leads with **intent** (the row-level pass rate the program is
designed to deliver) and follows with **mechanism** (the per-analyte
percentile math that delivers it). Adversarial readers attacking "why P97
and not P95" must instead attack "why 90% and not 85%" — and the answer
to that traces directly to the Governing Principles.

### Limit-setting (initial publication) — the 90/40 row-pass intent

The HMTc Standards are calibrated to deliver the following row-level
outcomes at initial publication:

- Approximately **90%** of clean-subcategory brands pass row-level
  certification on day one.
- Approximately **40%** of dirty-subcategory brands pass row-level
  certification on day one.

These targets are the policy choice. They sit at the intersection of all
five Governing Principles: too tight (e.g., 50/10) violates Principles 3
and 5 because brands cannot recruit and the program cannot scale; too
loose (e.g., 99/80) violates Principles 1 and 3 because the mark loses
meaning and clean brands lose differentiation. 90/40 is the policy answer
to all five simultaneously.

### Limit-setting (initial publication) — the per-analyte mechanism

To deliver the 90/40 row-level intent, per-analyte limits are set as
follows:

**Per-analyte standard for a clean subcategory = P97** of that subcategory's
marginal occurrence distribution for that analyte.

**Per-analyte standard for a dirty subcategory = P45** of that subcategory's
marginal occurrence distribution for that analyte.

**Why P97 and P45, not P90 and P30 (the row-pass calibration):**

To certify, a brand must be at-or-below the limit on all ten HMTc analytes
simultaneously. Under independence, per-analyte limits set at P90 (clean)
would deliver 0.9^10 = 35% joint row-pass; per-analyte limits at P30 (dirty)
would deliver effectively 0% joint row-pass. Real-world analytes correlate
(supply-chain hygiene drives multiple metals together), so the actual joint
pass rate sits between independence and perfect correlation — typically
50-70% for clean and 10-15% for dirty at raw P90/P30. Both fall well short
of the 90% / 40% targets.

The heuristic uplift from P90 → P97 (clean) and P30 → P45 (dirty) brings
the joint row-pass rate close to the 90/40 target. The calibration is
anchored to measured lot data, not an assumed correlation — the FDA 2026
special survey delivered 94% clean and 42% dirty row-pass against the
P97/P45 limits, confirming the 90/40 targets (the measured cross-analyte
correlation is ~0.27, not the ≈0.6 once assumed). It is not a relaxation:
it is the per-analyte percentile that delivers the row-level outcome the
program promises.

The uplift is uniform across all analytes today. Per-analyte differentiation
(e.g., Pb tighter than Ni based on regulatory pressure or toxicology) is a
Tier 2 calibration deferred until HMTc has lot-testing data to measure the
actual joint pass rate empirically. Target review: 6-12 months post-launch.

### Pool admission and basis

Every source loaded for a (row, metal) cell contributes to the pooled
distribution unless explicitly dispositioned out with a stated reason.
Sample-level data uses raw values. Summary-only sources (mean, median, max,
SD, lb/ub, IQR) contribute via moment-matching pseudo-sample expansion
under log-normal or gamma assumptions; the methodology is the standard
practice in environmental exposure assessment (WHO/JECFA pooled TDS
methodology; EFSA Scientific Opinions on Pb and Cd in food). Sources are
weighted by their reported N, capped at twice the median per-source N to
prevent any one large survey from dominating.

Each row's standard is in the native basis of the product form: powder
rows in powder-as-placed-on-market, RTF rows in as-consumed, dry cereal
rows in dry-as-sold, puree rows in as-consumed. Brands ship and test in
their product's native form; the standard matches that form. Sources
reporting in other bases get converted into the row's native basis during
pooling, not the other way around. Conversions are logged per source.

### Regulatory cap

The final HMTc value is `min(per-analyte pooled percentile, lowest
applicable regulatory ceiling)`, with both expressed in the row's native
basis. The cap is converted into native basis if it was published in a
different one. The rationale tag is `literature-baseline` when the pooled
percentile binds and `regulatory-alignment` when the cap binds.

A standard may be set lower than both the pooled percentile and the cap
when staff documents a `precautionary` rationale (vulnerable population
concern, cumulative exposure, scientific uncertainty). A standard may be
set higher than the pooled percentile only via a `feasibility-driven`
rationale paired with a sunset plan to tighten as analytical methods or
supply-chain practices improve. The gap between literature-baseline and
the final value, if any, is stated honestly.

### Ratchet trigger (revision cycle, distinct from limit-setting)

After initial publication, the Standards Ratchet operates on
HMTc-internal lot-testing data. The ratchet for a given analyte fires
when **both** of the following conditions hold for two consecutive
annual reviews (per Governance Policy §12.3):

(a) The 80th percentile of certified Status A lot results sits at or
    below 80% of the current limit.
(b) At least 50% of certified Status A SKUs have lots at or below 60% of
    the current limit.

The first tests aggregate market shift. The second tests breadth — the
ratchet does not fire on a single large brand pulling the percentile
down. When fired, the new limit equals the maximum of (a) the actual
80th percentile of Status A results or (b) 80% of the current limit. The
second clause is the step cap: no brand faces more than a 20% reduction
per ratchet event. Transition is 12–18 months from announcement to
enforcement; Status A certifications grandfather for the transition
period. Full mechanics are specified in Governance Policy §12.

The ratchet trigger uses HMTc-internal lot-testing data. The
limit-setting math uses external survey data (FDA, EFSA, peer-reviewed
studies, EU basket surveys, jurisdictional total-diet studies). The two
mechanisms operate at different times, on different data sources, and
serve different functions.

ALARA (As Low As Reasonably Achievable) and the brand remediation-plan
infrastructure govern the ongoing relationship between certified brands
and improving limits.

---

## Certification-Readiness Ruling (analyte completeness + DOI registration)

Ratified 2026-08-25. Binding on every category, every subcategory, every row.

**A standard is not a standard until every analyte carries a limit, and a category
is not certification-ready until its standards are registered.** Two failures this
ruling ends: (1) standards shipped with empty analyte cells (`control` /
`not-material` with `value: null`), which give a laboratory no number to test a
result against; (2) categories presented as "ready" on the website or in program
materials when their standards are incomplete or unregistered.

### 1. Every analyte carries a limit-of-record (no empty cells)

No published or registered standard may leave any of the certification panel's
analyte cells empty. Each cell must resolve to exactly one of:

- **Firm numeric ceiling** — the strictest applicable government maximum level
  (`regulatory-alignment`), or, where no government regulates the exact product,
  a disclosed **read-across** to the nearest applicable sovereign instrument on the
  row's native basis (`read-across`).
- **Species bounded by its parent total** — a toxic species is a component of its
  total and is bounded by it: iAs ≤ tAs, MeHg ≤ tHg, Cr(VI) ≤ total Cr. A bounded
  cell is an enforceable ceiling (enforced by reflex speciation), not an empty cell.
- **Baseline limit-of-record** — where no government limit, no exposure pathway, no
  occurrence data, and no analogous matrix exist, the cell is still set: a baseline
  screen at the method limit of quantification (a testable "< LOQ by method X"),
  established once for the record. Some analytes are not meaningful to re-test every
  lot; those are flagged **baseline / monitor** rather than per-lot, but the number
  is still published. Absence of a pathway is a reason to set a baseline, never a
  reason to leave the cell blank.

`control` / `not-material` with `value: null` is **not permitted** on a certifiable
standard. The prior "we do not publish a number where no government regulates"
posture is superseded by this ruling.

### 2. Honesty discipline (the non-negotiable condition)

Completeness never licenses fabrication or overclaiming. Every filled cell carries
its **true provenance tag** (`regulatory-alignment`, `read-across`, bounded/subsumed,
or `baseline-screen`). A read-across is disclosed as a read-across and is never
presented as direct governance of the product where none exists. A baseline is
labeled as a baseline. Every number traces to a real basis in
`data/evidence/regulatory_limits.csv` or a named method. This is the Part 2 / Part 12
firewall and the verify-don't-fabricate rule applied to limit-setting: a defensible
number honestly labeled, never a convenient number dressed up as science.

### 3. The certification-readiness gate (three conditions, all required)

A category or subcategory is **certification-ready** only when all three hold:

1. **COMPLETE** — every panel analyte carries a limit-of-record per §1.
2. **REGISTERED** — the standard has a resolvable, production DataCite DOI (a
   test/sandbox DOI does not satisfy this; production registration depends on the
   DataCite membership being approved and a live prefix configured).
3. **CORRECTED** — the standard passes the full standards lint battery: values
   verified against the register, panel coherence, method-drift, and the firewall.

Until all three hold, the category is **not ready for certification** and must not be
presented as ready anywhere — website, program materials, sales, or the readiness
manifest. A scaffold (an empty or near-empty standard) is never described as a
standard. "We can be ready" is the honest claim before registration; "ready" is
reserved for categories that clear all three gates.

### 4. Enforcement

`standard-readiness-lint` (cert repo) is the machine: it fails the build if any
published standard has an empty analyte cell, and it computes each category's
readiness state (COMPLETE / REGISTERED / CORRECTED) into a readiness manifest that
every "ready" claim reads from. No category may be flagged ready by hand.

## Required-Testing-Panel Ruling (which analytes a lot must be assayed for)

Operative 2026-08-25, authored under standing `wwsaid` delegation in response to a
directive to build a data-driven per-category testing rule (see changelog; conservative
posture). Binding on every category, every subcategory, every row. Companion to the
Certification-Readiness Ruling above.

**Every analyte carries a published limit (the ruling above); not every analyte must be
independently assayed on every lot.** These are two different axes, and conflating them is
a defect in both directions: forcing a brand to pay for a test whose result is a foregone
conclusion is waste that drives clean brands away, and waiving a test on a contaminant
that is actually present is the indefensible gap a plaintiff's expert exploits. This
ruling governs the second axis — the per-lot testing obligation — without ever touching
the first. A waived, bounded, or conditional analyte keeps its published limit-of-record;
the testing rule changes only whether the lot must carry an independent assay for it.

### 1. The invariant

A standard's limit set and its required-testing panel are separate objects. The limit set
is complete for every analyte (Certification-Readiness Ruling §1). The required-testing
panel is a per-(standard, analyte) obligation drawn from a fixed vocabulary. Removing an
analyte from the per-lot panel never removes or weakens its published limit; if a reflex
or conditional trigger fires, the full published limit governs the resulting assay.

### 2. The obligation vocabulary

Each analyte on each standard resolves to exactly one obligation:

- **`per_lot_total`** — the total-element assay is required on every surveillance lot.
  This is the base ICP-MS panel (one acid digestion, many elements measured together, so
  the marginal cost of each added element is small). Every Tier-1 toxic total (Pb, Cd,
  tAs, tHg) is `per_lot_total` on every food standard without exception — they are cheap,
  they ride the same run, and they are the "we screened for everything" litigation shield.
  A Tier-2 total (Ni, Al, total Cr, Sn) is `per_lot_total` wherever the corpus shows it
  materially present or a plausible pathway exists.
- **`reflex_speciation`** — the expensive species assay (iAs, MeHg, Cr-VI) is required
  only when its parent total meets the reflex trigger (default: parent-total result ≥ 50%
  of the parent-total limit — Lot Testing Schedule §9; the Program Operator may lower this,
  never raise it). Below the trigger the species is bounded by its parent total
  (iAs ≤ tAs, MeHg ≤ tHg, Cr-VI ≤ total Cr), so a separate assay is mathematically
  redundant, not skipped. The parent total is always `per_lot_total`, so the screen is
  never absent.
- **`mandatory_speciation`** — the species assay is required on every baseline and every
  lot regardless of the parent total, because the category has a defining pathway or
  materially-present toxic species (iAs for rice and rice-derived products; MeHg for fish
  and marine ingredients). This is the strongest obligation and is set from the corpus,
  not convenience.
- **`conditional`** — required only when a stated, verifiable condition holds (e.g., tin
  only when packaging is tinplate or a metal can; an ingredient-driven analyte only when
  that ingredient is present). Outside the condition there is no pathway and the corpus
  shows no occurrence.
- **`baseline_monitor`** — assayed at program entry (the three-lot baseline) to establish
  the limit-of-record, then not re-tested every lot unless a reflex, change, or
  surveillance trigger fires. For analytes with a firm limit but low per-lot
  value-of-information in that category.
- **`not_applicable`** — no assay required in any lot; the published limit stands as a
  bounded or read-across ceiling for the record. Reserved for the narrow case where the
  corpus (at adequate n) shows the analyte never present at a material level AND no pathway
  exists AND it is not a Tier-1 toxic. Never applied to a Tier-1 toxic total.

### 3. The classification is data-driven

An analyte's obligation for a category is derived, not asserted, from four inputs, in this
order:

1. **Occurrence in the curated corpus** — detection frequency and upper tail (p95) for
   that analyte in that category, at adequate n. A high or regulated upper tail forces
   `per_lot_total` (or `mandatory_speciation` for a species).
2. **Pathway/mechanism** — is there a plausible contamination route (soil uptake, marine
   bioaccumulation, packaging migration, processing/catalyst carryover)? A pathway that
   exists only under a condition yields `conditional`; no pathway plus no occurrence is the
   precondition for `baseline_monitor` or `not_applicable`.
3. **Species-bounding** — for the three speciated pairs, the parent total mathematically
   caps the species, which is what makes `reflex_speciation` defensible.
4. **Regulatory presence** — informs but never overrides; the program screens even where
   no government regulates.

The classification and its evidence live in
`data/workbench/standards/required-analytes.json`, one obligation per (standard, analyte)
with a cited rationale, and are re-derived when a cell's evidence base materially grows
(the same trigger discipline as synthesis). No obligation is set by hand without a corpus
basis recorded.

### 4. Defensibility guardrail

The rule may only ever remove *redundant or inapplicable* assays, never *informative*
ones. Concretely: never waive a Tier-1 toxic total; only skip a speciation the parent
total already bounds, or a total for which the category has no pathway and no occurrence.
The saving to a clean brand is real (a category that triggers no speciation runs one
ICP-MS panel, not three separate LC-ICP-MS runs); the exposure created is nil, because
every skipped assay is either mathematically bounded by one that was run or has no pathway
to the product.

### 5. Enforcement

`tools/standards/build-required-analytes.mjs` validates the registry (every compiled
analyte carries an obligation; obligations are in-vocabulary; each `reflex_speciation`
names a `per_lot_total` parent whose limit exists and a trigger ≤ 50% of it; no Tier-1
total is `not_applicable`) and emits the cert-side copy the panel-completeness lint reads.
A standard is not testing-scope-complete until every one of its compiled analytes carries
an obligation.

## Scope

This methodology applies to every category in the HMTc index, not to
Category 1 (infant and child foods) alone. The pooling engine, admission
rule, native-basis convention, and P97/P45 percentiles are the same for
beverages, supplements, dry goods, condiments, and every other category as
they are for infant and child foods. Per-category exceptions require an
explicit governance decision and changelog entry to this document.

---

**Version 2.4 — August 2026**

| Version | Date | Changes |
|---------|------|---------|
| 2.4 | 2026-08-25 | Added the **Required-Testing-Panel Ruling**, authored under standing `wwsaid` delegation in response to a directive to build a data-driven per-category testing rule (conservative posture — never waive a Tier-1 total or an informative assay). Separates the per-lot testing obligation (which analytes a lot must be independently assayed for) from the published limit set (every analyte still carries a limit per the Certification-Readiness Ruling). Fixed obligation vocabulary (`per_lot_total`, `reflex_speciation`, `mandatory_speciation`, `conditional`, `baseline_monitor`, `not_applicable`), a data-driven classification from corpus occurrence + pathway + species-bounding, and a defensibility guardrail. Machine registry at `data/workbench/standards/required-analytes.json`, validated and fanned to cert by `tools/standards/build-required-analytes.mjs`. First category operationalized: Cat-30 (olive oil, cooking oils). Not yet ratified by Karen — operative-by-delegation pending her read. |
| 2.3 | 2026-08-25 | Added the **Certification-Readiness Ruling**: every analyte carries a limit-of-record (no empty `control`/`not-material` cells — firm number, species-bounded-by-total, or baseline/LOQ screen), under a mandatory provenance-honesty discipline; and a three-condition certification-readiness gate (COMPLETE + REGISTERED [production DOI] + CORRECTED). Supersedes the "no number where no government regulates" posture. Enforced by `standard-readiness-lint`. Ratified by Karen 2026-08-25. |
| 1.0 | April 2026 | Initial version. |
| 1.1 | April 2026 | Added "Two Percentile Mechanisms" section to clarify the distinction between P_clean/P_dirty (limit-setting, external data) and the 80th percentile ratchet trigger (revision cycle, program data). Prevents confusion between Governance Policy §12.3 and the Methodology Reference §1.4. |
| 1.2 | May 2026 | Clarified that benchmark percentiles are HMTc benchmark-pool calculations, not values individual studies are expected to report; added jurisdiction-aware benchmark pool rule. |
| 2.0 | May 2026 | Locked the per-analyte limit-setting math to **P97 clean / P45 dirty** with the row-pass calibration rationale. Superseded the earlier "P10 default / P20 if selected" framing for dirty. Required pool admission of summary-only sources via moment-matching pseudo-sample expansion. Required each row's standard to be in the native basis of the product form. Reaffirmed that standards arithmetic does not live in `wiki/`. Reaffirmed scope: applies to every category in the HMTc index. |
| 2.1 | May 2026 | Principle 5 reframed from "$2 billion by 2030" to "Make it the de facto standard" — commercial success follows from scale and credibility, not the reverse. Standards Math section restructured to lead with **intent** (90/30 row-pass) before **mechanism** (P97/P45 per-analyte uplift); the policy choice is the 90/30 row-pass rate, calibrated against all five Governing Principles, with P97/P45 as the math that delivers it. Ratchet trigger section expanded to specify two-condition fire rule (P80 of Status A + breadth threshold), 20% step cap, and reference to revised Governance Policy §12. |
| 2.2 | August 2026 | Updated the dirty-subcategory row-pass target from the legacy 30% to ~40% (90/30 → 90/40 intent) and re-anchored the P97/P45 calibration to measured FDA 2026 lot data (94% clean / 42% dirty) rather than the assumed ≈0.6 cross-analyte correlation (measured ~0.27). Aligns this document with the amendment ratified 2026-08-03 in CLAUDE.md Part 19 and the Methodology Reference; the P97/P45 mechanism itself is unchanged. |
