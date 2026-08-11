# Standards Publication QC Gate — defect inventory + the gate that closes them

**Status:** Spec, 2026-06-16. The answer to "the Principle-4 violation is too serious to ignore
— do we re-evaluate the methods, or something else?"

## The answer in one line

**The methods are sound. The problem is that no gate validates a value before it publishes** —
so defects in the implementation reach published standards and are caught only when a human
trips over them. Fix: a build-blocking **Publication QC Gate**. Plus three small *method*
additions for edge-cases the methodology never wrote a rule for.

## Why this is the right diagnosis

The pipeline has ~7 transformation stages (admission → reconstruction → pooling → basis
conversion → cap → rounding → rationale). Each can corrupt a published number. Every defect
found this session reached, or nearly reached, a published value — and each was caught by a
person noticing, not by the system:

| Defect found this session | Stage | Kind |
|---|---|---|
| Ladder rounded a value **above its cap** (EU Pb 300 → 500) — P4 violation | rounding | impl bug (band-aid clamp added) |
| Fish-muscle Pb/Cd caps **not mapped** → published 5,000 ppb tails | cap | missing validation |
| **Wrong-analyte** tAs (arsenobetaine) published as a fish standard | admission | impl + missing validation |
| Brown-rice-syrup (jackson2012) pooled into **honey** tAs | admission | missing validation |
| demir2023 Turkish-market tAs/tHg **~20× the pool** | admission | advisory flag, not a gate |
| 1:7 powder factor applied to **liquid** juice → 7× Ni | basis | impl bug |
| Uniform reconstruction **overstated bimodal** seaweed | reconstruction | method edge-case |
| Single-source pools graded "firm" / "P97 of one point" | reconstruction/rationale | method edge-case (classifyCell patched) |
| Censored-zero / degenerate-upper-tail artifacts | reconstruction | partially audited (warn-only) |

None of these is a flaw in P97/P45, native-basis, `min(percentile, cap)`, or species
discipline. They are the code violating sound rules, with nothing checking the output.

## The three genuine METHOD gaps (small rule additions, not a rewrite)

1. **Single-observation cells (n=1).** "P97 of one point" is meaningless. Rule: n=1 →
   confidence `low`/single-observation, the published value is the observation (not an uplifted
   percentile), never `firm`, and a regulatory cap (if any) is preferred.
2. **Bimodal / multi-market distributions.** A single percentile across two populations
   (hijiki vs nori; clean market vs elevated market) is indefensible. Rule: detect bimodality
   (e.g. p90/p50 ≫ p50/p10, or a flagged elevated-market source) → require a clean/dirty or
   market split, or hold, before a single value publishes.
3. **Increment-ladder rounding direction.** The ladder rounds *up* (coarse at the top: 6,533 →
   10,000). Rule: for a cap-bound value, never round above the cap (clamp — done); for a
   literature value, bound the round-up distortion (publish the cap/exact value, or a finer bin,
   when the ladder jump exceeds ~1.5×).

## The Publication QC Gate (build-blocking, ranked by defect classes closed)

No value may publish as a standard unless ALL pass. Ranked most-critical first:

1. **NO-VALUE-EXCEEDS-CAP (incl. unmapped caps).** The P4 check. Requires **cap-mapping
   completeness**: cross-check each (row, metal) against a regulatory-ML registry; if a regulator
   has an ML and it isn't loaded, FAIL (this is what let fish Pb publish loose). The clamp alone
   is insufficient — it only fires when the cap is already mapped.
2. **SPECIES-MATCH.** Cell species == every pooled source's species == the cap's species. Rejects
   total-As→iAs, total-Cr→Cr-VI, total-Sn→inorganic-Sn, total-Hg→MeHg, and the wrong-analyte
   publications.
3. **BASIS-MATCH.** Every source and the cap are converted to the row's native basis; flag any
   unconverted contribution or a conversion factor applied to the wrong form (the 7× juice bug).
4. **SOURCE-FIT.** Only direct-evidence (matching matrix/market) sources pool into a locked row;
   broad-context is context-only. Catches brown-rice-syrup-in-honey.
5. **DISTINCT-SOURCE FLOOR.** `firm` requires ≥2 distinct sources with sample-level data; n=1 or
   thin → `provisional`, never firm (extends the classifyCell fix to a hard publication gate).
6. **OUTLIER-ADJUDICATION (hard, not advisory).** Any source >~10× the pooled median → the cell is
   HELD until `standards-outlier-adjudication.csv` records a disposition. Today this register
   exists but is advisory; make it block.
7. **RECONSTRUCTION SANITY.** Single-point / range-only / bimodal pools → provisional or held;
   run the censored-zero + degenerate-upper-tail integrity audit and make it block (it is
   currently `--warn-only`).
8. **RATIONALE HONESTY.** The rationale tag matches the binding basis (cap-bound ⇒
   regulatory-alignment, not literature-baseline); held cells render "adjudication pending."
9. **FIREWALL.** No threshold / P-value / clean-dirty token renders on a `heavymetalindex.com`
   URL (the build-blocking lint from the architecture doc; the honey page proves the generators
   leak without it).

Checks 1–3 are the litigation-critical core (cap / species / basis = the Principle-4 and
defensibility violations). 4–7 are evidence-quality. 8–9 are presentation/firewall.

## How it ships

The gate is a single deterministic validator run in `prebuild`, reading the pooled
distributions + the crosswalk + the regulatory-ML registry + the adjudication register, emitting
per-(row,metal) PASS/FAIL with the reason. A value with any FAIL cannot render as a firm
standard — it renders held. This is the precondition the transparent-derivation architecture
already named: transparency multiplies the damage of a defective number, so nothing publishes
until the gate passes. Build it FIRST (it is cheap and it protects every category).

## What this does NOT require

No change to P97/P45, the 90/30 row-pass intent, native basis, `min(percentile, cap)`, the
pooling/admission method, or the WHO/JECFA/EFSA lineage. The methodology stands; we are building
the missing assurance layer around it.
