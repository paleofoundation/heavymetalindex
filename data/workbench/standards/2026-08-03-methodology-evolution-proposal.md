---
title: "Methodology evolution proposal — forward and transparent"
type: workbench-methodology-proposal
audience: [internal]
noindex: true
status: RATIFIED 2026-08-03 by Karen; amendments 2/3/5 locked into CLAUDE.md Part 19; stratification + dirty-40% + split made default in code
updated: 2026-08-03
---

# Methodology evolution proposal

The infant-formula work surfaced a set of methodology changes that are currently
hand-made per category. This proposal formalizes them so they are applied consistently,
reproducibly, and transparently, and checks each against all five Governing Principles.

The five principles, for reference: (1) drive down contamination via consumer demand,
(2) safeguard consumers, (3) safeguard participating brands, (4) legal defensibility,
(5) become the de facto standard (scale). No principle is subordinate; a change that
serves one but fails another fails.

The operational amendments below are proposed for `docs/standards-methodology.md`. The two
marked **[constitutional]** touch the locked methodology in `CLAUDE.md` Part 19 and need
Karen's explicit sign-off before they are law.

---

## Amendment 1 — The mark certifies "tested", not "safe" (framing, foundational)

HMTc thresholds are market-relative occurrence percentiles, not health-based limits. The
certified claim is that a product has been tested and verified below a defined threshold,
not that it is safe at that threshold. For several panel metals — lead above all — no
occurrence percentile is a safety line, and the program does not assert one.

This is not a softening; it is what makes the standard defensible. A safety claim invites a
toxicology battle the program cannot categorically win; a tested-below-threshold claim is a
documentation-and-method question the program controls.

**Principle check.** (1) ✓ the ratchet drives contamination down without a safety over-claim.
(2) ✓ consumers get a verified-clean signal, honestly bounded. (3) ✓ brands get an
achievable, non-arbitrary target. (4) ✓ removes the single largest Daubert exposure —
the over-claim. (5) ✓ an honest mark scales; an over-claim invites a category-killing suit.

---

## Amendment 2 — Target-market pool (supersedes "geography is not a hard exclusion") [constitutional]

The current methodology says geography "is not a hard exclusion rule." The formula work
showed why that no longer holds: the pool must be restricted to the market the certification
applies to. An occurrence percentile estimates a population; a pool mixing jurisdictions with
binding formula MLs and jurisdictions without estimates a population no certified brand ships
into. On the non-soy lead pool this was a fourfold error — an unstratified P97 of 83 ppb,
driven entirely by non-target-market product, versus 12 ppb on the target-market pool.

**The exclusion criterion is regulatory-equivalence, not geography.** A source is admitted
if its market enforces binding maximum levels for the product class with comparable
oversight, not on the basis of country as such. This distinction is load-bearing for both
defensibility and public framing: "markets with binding formula MLs and equivalent
surveillance" is a regulatory criterion; a list of excluded countries reads as prejudice and
is a public-relations and trade liability. Sources with no jurisdiction recorded are retained,
not dropped, and the exclusion list is logged per run.

**Principle check.** (1) ✓ ratchets against the real market, not a diluted one. (2) ✓ a
target-market percentile is a truthful clean signal for that market. (3) ✓ brands are judged
against peers they actually compete with. (4) ✓ defensible as a scope criterion; ✗ if framed
as a country blacklist — hence the regulatory-equivalence framing is mandatory. (5) ✓ scales
across categories via one documented rule.

---

## Amendment 3 — Dirty subcategory target is ~40%, and it is measured [constitutional]

The locked text sets the dirty row-pass target at ~30% (P45). The measured value on real
market data is 42%: against the soy dirty row, 38 FDA-surveyed soy powders passed at 42% on
the four metals with per-sample data. The target and the outcome agree. Update the stated
dirty target to ~40% to match both Karen's calibration and the measurement.

Related honesty fix: the methodology asserts analyte correlation "≈0.6" to justify the
P97/P45 uplift. The measured cross-analyte correlation is ~0.27, and the P-to-row-pass
mapping is not uniquely identified from marginals. The measured lot data (non-soy 94% clean,
soy 42% dirty) is now the calibration anchor, not the assumed correlation. State this rather
than the unsupported 0.6.

**Principle check.** (1) ✓ the dirty target is what drives the higher-contamination segment
to clean up. (2) ✓ a 40%-pass dirty standard is protective. (3) ⚠ a 40% dirty pass certifies
few soy formulas — see the availability tension in Amendment 5 and the seasonal relief in
Amendment 6. (4) ✓ a measured target is far more defensible than an assumed-correlation one.
(5) ✓ measured calibration scales.

---

## Amendment 4 — Program-level ~80% admission target (new, monitored) 

The subcategory targets (≈90% clean, ≈40% dirty) roll up, weighted by market share, to a
program-level admission of roughly 80%. At a typical ~85/15 clean/dirty split: 0.85×90 +
0.15×40 ≈ 82%. The measured four-metal total-market pass was ~86%; the full-panel estimate is
~75–80%.

This is a **monitored average, not a per-category hard cap.** A category with no dirty
sibling admits ~90%; a mostly-dirty category admits less. The program tracks the realized
overall rate and treats a material, sustained deviation from ~80% as a signal to re-examine
subcategory calibration — not as a lever to force any single category to 80%. Forcing a
per-category 80% would override the clean/dirty science with a headcount quota and fail
principle 2.

**Principle check.** (1) ✓ ~80% now with the ratchet tightening it over time is the intended
trajectory. (2) ✓ provided it stays a monitor, not a floor that admits dirty product to hit a
number. (3) ✓ predictable program-wide admission helps brands plan. (4) ✓ a stated,
monitored target is transparent. (5) ✓ ~80% admission is the adoption engine — too tight and
brands don't join, too loose and the mark means nothing.

---

## Amendment 5 — The split certifies; the "higher number" (envelope) is a headline only [constitutional]

Adopting the element-wise maximum of the clean and dirty rows — the higher number per analyte
— as a single category standard was the hand adjustment that prompted this proposal. It must
**not** become the certification instrument, for two measured/hard reasons:

1. **It certifies product above its own legal ceiling.** The envelope nickel is 400 (the soy
   cap). The EU non-soy formula nickel ML is 250. An envelope-certified non-soy product at
   Ni 251–400 is above the maximum level that legally applies to it. The mark would attest
   "tested and verified" for a product over its own legal limit — a direct principle-4 and
   principle-2 failure. The same holds for aluminium (soy 4600 vs non-soy 3500).

2. **It leaks the ratchet.** Measured: applying the envelope to soy raised its pass rate from
   42% to 68%, because the envelope hands soy the loose non-soy lead and mercury limits. A
   26-point ratchet leak on real data.

Resolution: **certify each product against its own subcategory row (the split); publish the
envelope, if desired, only as a category-ceiling summary** ("no certified infant formula
powder exceeds X"), never as the pass/fail instrument. This keeps the single-number
communication simplicity (principle 5) without sacrificing the ratchet (principle 1) or
legality (principle 4). The split is not more complex for a brand — protein base is on the
label, so every product already knows its row.

**Principle check.** Split: (1) ✓ (2) ✓ (3) ✓ (4) ✓ (5) ✓ with envelope-as-headline.
Envelope-as-instrument: (4) ✗ certifies over legal caps, (1) ✗ leaks ratchet — rejected.

---

## Amendment 6 — Variance bends the pool and the cadence, not the pass/fail (seasonal & geographic)

Standards should accommodate expected elevations from seasonal and geographic variation.
The defensible mechanism is **not** a per-brand "it was seasonal" exception at certification —
that is an unfalsifiable loophole that fails principle 4. Variance is accommodated three ways,
all upstream of the pass/fail:

1. **In the pool.** The target-market pool already spans seasons and geographies, so the P97
   and P45 already price in expected variance. A standard set from a multi-season,
   multi-region pool is a standard that has already bent for that variance.
2. **In the ratchet cadence.** Re-evaluation uses rolling multi-season windows and a cadence
   longer than a seasonal cycle, so a seasonal high does not trigger spurious tightening and a
   brand is not failed on a single-season peak.
3. **In the lot-testing schedule.** Lots are sampled across the seasonal cycle so a brand's
   compliance is assessed on its distribution, not a worst-month spot check.

Where a known, mechanistic elevation exists (e.g. iAs varying with rice geography/variety),
it is recorded as documented variance metadata on the page and feeds the ratchet review — it
does not become a per-lot waiver. This gives brands genuine relief from spurious seasonal
failure (principle 3) without opening a consumer-protection or defensibility hole (2, 4).

**Principle check.** (1) ✓ ratchet still runs, on rolling data. (2) ✓ no per-lot loophole.
(3) ✓ brands not failed on a seasonal peak. (4) ✓ variance is in the transparent pool/cadence,
not a discretionary waiver. (5) ✓ one rule across categories.

---

## Amendment 7 — Process-control screens are a first-class, separate standard category

Some metals warrant a limit that is not toxicological. Total chromium in formula is the case:
Cr-VI (the health species) is not material, but elevated total Cr signals stainless-steel
equipment leaching. A **process-control screen** — an investigate-the-line tripwire, not a
certification-failure limit — captures this. Screens live in
`standards-process-screens.csv`, flow through the QC gate as a distinct PROCESS_SCREEN
verdict (now build-blocking on a malformed or health-colliding screen), and are never
rendered as health limits.

**Principle check.** (1) ✓ catches process regressions early. (2) ✓ a genuine manufacturing
signal, honestly labeled non-toxicological. (3) ✓ gives brands a QC early-warning, not a
surprise failure. (4) ✓ the separation from the health panel is explicit and enforced.
(5) ✓ one screen mechanism across categories.

---

## Should the methodology be published transparently?

**Yes — the method. Not the arithmetic, and not on the wiki.** I agree with publishing, and
my pushback is entirely about how, plus one firm exception.

Publishing the *method* is the program's central asset. It is the Cochrane/EFSA/JECFA move:
authority comes from an open, reproducible methodology, and a published method is
Daubert-resistant precisely because no expert can call it a black box. Transparency here is
the moat, not a risk.

But four conditions are load-bearing, and the first is non-negotiable:

1. **Publish on the HMTc property (heavymetaltested.com), never on heavymetalindex.com, and
   never the pool arithmetic.** This is the Part 2 firewall and it is the whole ballgame. The
   wiki reports what the literature says; the moment a percentile computation, a clean/dirty
   designation, or a threshold value appears on a heavymetalindex.com URL, the wiki becomes
   the certifier's self-published justification and a plaintiff's expert has the exact line
   the firewall exists to deny them. Publish the *method* (pooled occurrence → P97/P45 →
   min-with-cap → ratchet, market stratification, the split, process screens); keep the
   per-cell arithmetic in the staff workbench and, at most, on the cert property.

2. **Frame the ~80% as a ratchet start, not a bar.** "We admit ~80% and tighten over time"
   is the honest ratchet; "we fail only the worst 20%" is how a hostile reader will quote a
   bare 80%. The tested-not-safe framing and the ALARA/ratchet trajectory must lead.

3. **Frame stratification as regulatory-equivalence, not a country list.** Publish the
   criterion ("markets with binding formula MLs and equivalent oversight"), never the excluded
   countries.

4. **Publish a versioned method once it is stable, not mid-repair.** We fixed the dead dirty
   branch, added stratification, and corrected the correlation basis in the last three days.
   Publish `v1.0` after this proposal is ratified and principle-checked; publishing a snapshot
   now and revising it in a month reads as moving goalposts and forfeits the authority the
   publication was meant to buy.

The one thing I would not publish even as method: the raw market-exclusion country list and
the per-cell pool composition. Everything else — the rule, the calibration logic, the
sources, the ratchet — should be open.

---

## What is codified now vs. pending your call

Codified this session (operational, reproducible):
- Market stratification flag in the pooling engine.
- Dirty (P45) branch revived via machine-only role config.
- Process-control screens enforced build-blocking in the QC gate.
- The measured coverage (94% clean / 42% dirty).

Pending Karen's ratification (constitutional — CLAUDE.md Part 19):
- Amendments 2, 3, 5 (target-market pool; dirty target ~40% + measured-correlation basis;
  split-certifies/envelope-headline).
- The go-live decision on public method publication, under the four conditions above.
