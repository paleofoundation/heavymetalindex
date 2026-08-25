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

Ratified by Karen 2026-08-25; refined the same day after a program-wide stress-test across
all 13 category archetypes and every public claim surface. Binding on every category, every
subcategory, every row. Companion to the Certification-Readiness Ruling above.

**Every analyte carries a published limit (the ruling above); not every analyte must be
independently assayed on every lot.** These are two different axes, and conflating them is
a defect in both directions: forcing a brand to pay for a test whose result is a foregone
conclusion is waste that drives clean brands away, and waiving a test on a contaminant that
is actually present is the indefensible gap a plaintiff's expert exploits. This ruling
governs the second axis — the per-lot testing obligation — without ever touching the first.
A waived, bounded, or conditional analyte keeps its published limit-of-record; the testing
rule changes only whether the lot must carry an independent assay for it.

### 1. The invariant: two objects, two axes

A standard's **limit set** and its **required-testing panel** are separate objects. The
limit set is complete for every analyte (Certification-Readiness Ruling §1). The
required-testing panel is a per-(standard, analyte) obligation drawn from a fixed
vocabulary. A second distinction governs how the panel is claimed publicly: an analyte is
**screened** (measured on the base run for that product) versus **governed** (compared
at-or-below a *sovereign* published limit). Every certified product is screened for the
universal set; a cell is governed only where a real government limit exists. Where none
exists the cell carries a disclosed baseline-screen (a testable "< LOQ by method X"), never
a manufactured limit — inventing a number to look governed is the Daubert-exposed move
Method v2.0 exists to avoid. "Screened for 8" and "governed by a sovereign limit" are
therefore distinct claims and must never be collapsed into one sentence.

### 2. The universal 8-metal set is basis-appropriate, not basis-uniform

Every certified product is screened for the **same eight heavy metals** — Pb, Cd, arsenic,
mercury, Ni, Al, chromium, Sn — with **no metal dropped because a category is assumed not
to carry it**. What varies is the **measurement basis**, set by how the category is legally
regulated, not by which metals are looked for. Three bases:

- **(a) Content basis** — foods, beverages and water, supplements, pet food, and topicals
  (cosmetics, oral-care/mucosal, cannabis, home-care chemicals). The eight are measured as
  total content in a single multi-element ICP-MS determination (total mercury by ICP-MS or a
  validated dedicated method, CVAFS/DMA). The four Tier-1 toxic totals (Pb, Cd, tAs, tHg)
  are `per_lot_total` on every such product without exception. The four Tier-2 totals (Ni,
  Al, total Cr, Sn) are `per_lot_total` wherever they ride that same run — essentially
  always for a digestible/soluble matrix, because the marginal cost of each added element is
  ~nil.
- **(b) Migration / release basis** — food-contact kitchenware and packaging (Cat-23),
  infant feeding contact (Cat-9), toys and arts-and-crafts (Cat-21), and per-component
  article goods (durable goods and textiles, Cat-10). The **same eight metals** are
  evaluated, but as element *release* / specific migration into food or food simulant
  (EU 10/2011), EN 71-3 soluble-scrape migration in mg/kg-of-material, or per-accessible-
  component extractable/total content — **never** as a whole-product acid-digestion content
  panel, which is the wrong instrument and is forbidden by each standard's `basis_guard`
  ("BASIS NEVER CONFLATED"). In this basis total Cr is governed via a Cr-VI release control
  and Sn is frequently `not_material`; that composition difference is basis-driven, not a
  coverage gap.
- **(c) Pharmacopeial-only basis** — classes with no sovereign content ML (peptides/SARMs,
  Cat-26). The eight are measured against route-specific USP <232>/<2232> PDE-derived
  ceilings, disclosed as dose-based elemental-impurity controls, never folded into an
  "8 totals against published limits" sentence.

The public claim is therefore over the **8-metal set and the coverage guarantee**, scoped
by basis — not a flat "one acid digestion measures all 8 as content on every product,"
which is false for contact materials.

### 3. The obligation vocabulary

Each analyte on each standard resolves to exactly one obligation:

- **`per_lot_total`** — total-element assay on every surveillance lot (the base run).
- **`reflex_speciation`** — the species assay (iAs, MeHg, Cr-VI) is required only when its
  parent total meets the reflex trigger (§4). Below it the species is bounded by its parent
  total, so a separate assay is mathematically redundant, not skipped. The parent total is
  always `per_lot_total`, so the screen is never absent.
- **`mandatory_speciation`** — the species assay is required on baseline and every lot
  regardless of the parent total, set from a defining pathway or a structural condition (§4).
- **`conditional`** — required only when a stated, verifiable condition holds. Reserved for
  net-new obligations (e.g. organotin speciation for marine matrices) and never used to
  waive one of the eight base totals.
- **`baseline_monitor`** — assayed at the three-lot baseline to establish the
  limit-of-record, then not re-tested per lot unless a trigger fires. Permitted for a Tier-2
  total in a category where no pathway and no sovereign limit exist.
- **`not_applicable`** — no assay in any lot; the published limit stands for the record.
  Permitted only for a Tier-2 total where a documented formulation fact removes the pathway
  (e.g. total aluminium in an aluminium-salt antiperspirant, where the active is the analyte)
  or a migration-basis category where the metal has no release pathway.

**The guardrail (revised).** `conditional` / `baseline_monitor` / `not_applicable` are
**forbidden on the four Tier-1 toxic totals** (Pb, Cd, tAs, tHg) on any content-basis
product — those four are always `per_lot_total`, the "we screened for everything" shield.
A Tier-2 total (Ni, Al, total Cr, Sn) **may** be `baseline_monitor` or a disclosed
read-across/baseline-screen where the corpus shows no pathway and no sovereign limit (e.g.
Al/total-Cr/Sn in a narrow-sovereign-panel cosmetic). **Tin (Sn) is `per_lot_total` on the
base run wherever it rides free, and its value is framed as inorganic/packaging-tin
screening — not organotin protection** (see §5). The rule may only ever remove a *redundant
or inapplicable* assay (a parent-bounded speciation; a no-pathway Tier-2 total), never an
*informative* one.

### 4. Reflex trigger (corrected) and mandatory-speciation conditions

**Reflex trigger.** Speciate when the parent total reaches
`min(species limit where one is published, 50% of the parent-total limit)`, accounting for
measurement uncertainty. The flat 50%-of-parent heuristic alone *under-catches* whenever the
species limit sits below half the parent limit: drinking-water Cr-VI (total-Cr 25, Cr-VI 10)
and seaweed iAs (tAs 5000, iAs 1000) would both slip a compliant-looking total past a
non-compliant species. The true mathematical bound is the species limit — below it the
species cannot exceed it; at or above it, it can.

**Matrix-stability qualifier.** The species-limit trigger applies only where the species
*persists* in the matrix. Where a matrix documentedly reduces the species to a non-toxic
form — hexavalent chromium reduces to trivalent chromium in food and lipid matrices — the
species is `not_applicable` for that category: the parent total is still screened every lot
and an anomalous total exceedance is investigated, but a routine species assay is not
required. Without this qualifier the species-limit trigger would force Cr-VI speciation on
nearly every food, because food total chromium routinely exceeds the small hexavalent-
chromium ceiling — a cost with no informational return where the toxic species cannot
survive the matrix. The qualifier never applies where the species is stable (Cr-VI in water;
inorganic arsenic and methylmercury generally), which is exactly why those stay reflex or
mandatory.

**Mandatory speciation** (not reflex) applies in two cases:

1. **Defining pathway** (corpus-driven), enumerated in Lot Testing Schedule §9.2:
   iAs for rice and rice-derived products, fruit juice, and seaweed/algae/clay-mineral
   supplements; MeHg for fish/marine foods, fish-containing composites, fish sauces and
   broths, and marine-protein pet food; Cr-VI for drinking water, toys and arts-and-crafts,
   chrome-tanned leather and textiles, and pigment cosmetics and tattoo inks.
2. **Structural** — wherever a regulator sets a **species limit with no bounding
   parent-total limit**, reflex is impossible (there is no total to take a fraction of), so
   the species must be assayed directly. The canonical case is apple/grape juice, where FDA
   regulates iAs at 10 ppb and no total-arsenic ML exists.

### 5. Identified gaps requiring a program decision

Two items surfaced by the stress-test are **not resolved by this ruling** and require an
explicit governance/counsel decision before they are treated as settled:

- **Organotin.** In seafood, marine oils, and silicone/PVC food-contact matrices the real
  tin hazard is *organotin* (TBT/DBT/TPT), whose elemental-Sn mass is trivial — so a total-Sn
  assay passes while missing the hazard. Total Sn stays on the base run as inorganic/packaging
  screening; adding organotin speciation (LC-/GC-ICP-MS) is a **net-new analyte class**
  (scope, methodology, cost, Daubert surface) and is flagged for decision, not yet adopted.
- **Claim-gating.** The public "every product screened for 8, each governed by a limit"
  claim is honest only once the Certification-Readiness completion sweep has driven every
  base-total cell to a non-null limit-of-record across the content-basis categories, verified
  against the compiled records (not the finder projection). Until then the claim is gated.

### 6. Classification is data-driven; enforcement

An obligation is derived, not asserted, from corpus occurrence (detection frequency and
upper tail at adequate n), pathway/mechanism, species-bounding, and regulatory presence, in
that order. The classification and its cited evidence live in
`data/workbench/standards/required-analytes.json`, re-derived when a cell's evidence base
materially grows. `tools/standards/build-required-analytes.mjs` validates the registry
(every compiled analyte carries an in-vocabulary obligation; no Tier-1 toxic total is
exempt; each reflex trigger is `min(species limit, 50% parent)`; each mandatory-speciation
names its defining-pathway or structural condition) and emits the cert-side copy the
panel-completeness lint reads.

## Scope

This methodology applies to every category in the HMTc index, not to
Category 1 (infant and child foods) alone. The pooling engine, admission
rule, native-basis convention, and P97/P45 percentiles are the same for
beverages, supplements, dry goods, condiments, and every other category as
they are for infant and child foods. Per-category exceptions require an
explicit governance decision and changelog entry to this document.

---

**Version 2.5 — August 2026**

| Version | Date | Changes |
|---------|------|---------|
| 2.5 | 2026-08-25 | Added and ratified the **Required-Testing-Panel Ruling** (Karen: "if we say we test every product for 8 analytes, we should — test 8 totals universally, trigger speciation from findings"), then refined it the same day after a program-wide stress-test across all 13 category archetypes and every public claim surface. Separates the per-lot testing obligation from the published limit set, and the *screened* axis from the *governed* axis. The 8-metal set is universal but **basis-appropriate** (content ICP-MS for ingestibles/topicals; element-release/migration for contact materials; USP PDE for pharmacopeial-only classes). Guardrail: `conditional`/`baseline_monitor`/`not_applicable` forbidden on the four Tier-1 toxic totals; permitted for a Tier-2 total with no pathway and no sovereign limit. Reflex trigger corrected to `min(species limit, 50% of parent-total limit)` (flat-50% under-catches water Cr-VI, seaweed iAs). Mandatory speciation expanded (iAs: rice + fruit juice + seaweed/algae/clay supplements; MeHg: fish/marine + composites/sauces/broths + marine pet food; Cr-VI: water + toys/crafts + leather/textiles + pigment cosmetics/tattoo) and given a structural trigger (species limit with no parent total, e.g. apple-juice iAs). Two items flagged for a separate program/counsel decision: organotin speciation (net-new analyte class) and public-claim gating on the completion sweep. Registry `data/workbench/standards/required-analytes.json` (Cat-30 pilot; Sn flipped conditional→per_lot_total), validated + fanned by `tools/standards/build-required-analytes.mjs`. Downstream: DOI'd public content (the-big-8.md et al.) reword is human-gated, tracked in the ledger. |
| 2.3 | 2026-08-25 | Added the **Certification-Readiness Ruling**: every analyte carries a limit-of-record (no empty `control`/`not-material` cells — firm number, species-bounded-by-total, or baseline/LOQ screen), under a mandatory provenance-honesty discipline; and a three-condition certification-readiness gate (COMPLETE + REGISTERED [production DOI] + CORRECTED). Supersedes the "no number where no government regulates" posture. Enforced by `standard-readiness-lint`. Ratified by Karen 2026-08-25. |
| 1.0 | April 2026 | Initial version. |
| 1.1 | April 2026 | Added "Two Percentile Mechanisms" section to clarify the distinction between P_clean/P_dirty (limit-setting, external data) and the 80th percentile ratchet trigger (revision cycle, program data). Prevents confusion between Governance Policy §12.3 and the Methodology Reference §1.4. |
| 1.2 | May 2026 | Clarified that benchmark percentiles are HMTc benchmark-pool calculations, not values individual studies are expected to report; added jurisdiction-aware benchmark pool rule. |
| 2.0 | May 2026 | Locked the per-analyte limit-setting math to **P97 clean / P45 dirty** with the row-pass calibration rationale. Superseded the earlier "P10 default / P20 if selected" framing for dirty. Required pool admission of summary-only sources via moment-matching pseudo-sample expansion. Required each row's standard to be in the native basis of the product form. Reaffirmed that standards arithmetic does not live in `wiki/`. Reaffirmed scope: applies to every category in the HMTc index. |
| 2.1 | May 2026 | Principle 5 reframed from "$2 billion by 2030" to "Make it the de facto standard" — commercial success follows from scale and credibility, not the reverse. Standards Math section restructured to lead with **intent** (90/30 row-pass) before **mechanism** (P97/P45 per-analyte uplift); the policy choice is the 90/30 row-pass rate, calibrated against all five Governing Principles, with P97/P45 as the math that delivers it. Ratchet trigger section expanded to specify two-condition fire rule (P80 of Status A + breadth threshold), 20% step cap, and reference to revised Governance Policy §12. |
| 2.2 | August 2026 | Updated the dirty-subcategory row-pass target from the legacy 30% to ~40% (90/30 → 90/40 intent) and re-anchored the P97/P45 calibration to measured FDA 2026 lot data (94% clean / 42% dirty) rather than the assumed ≈0.6 cross-analyte correlation (measured ~0.27). Aligns this document with the amendment ratified 2026-08-03 in CLAUDE.md Part 19 and the Methodology Reference; the P97/P45 mechanism itself is unchanged. |
