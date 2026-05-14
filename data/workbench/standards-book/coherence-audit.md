# Coherence Audit — Source Documents for the HMTc Program Manual

**Date:** 2026-05-14
**Auditor:** Claude (Opus 4.7, claude-opus-4-7[1m])
**Documents in scope:**
1. `docs/governance/hmtc-governing-principles.md` (v2.1, revised this session)
2. `data/workbench/standards-book/source-documents/governance-policy.md` (v2.0, migrated this session with §12 revision)
3. `data/workbench/standards-book/source-documents/lot-testing-schedule.md` (v2.0, migrated this session)
4. The 15 product briefings under `data/workbench/briefings/`
5. `CLAUDE.md` Part 19 (Standards-Setting Methodology)
6. Three published preprints (cited by DOI; not in repo):
   - Counterproductive Consequences of Public Exposé Testing (doi: 10.5281/zenodo.19470572)
   - The Cost of Operating Without Credible Third-Party Heavy-Metal Certification (doi: 10.5281/zenodo.18903738)
   - Certification as a Framework for Reducing Heavy Metal Exposure in Infant and Child Foods (doi: 10.5281/zenodo.18905821)

## Summary

The five repo documents are **coherent and consistent** after Pre-work 1-4 (PDF migration, Governing Principles revision, §12 ratchet revision). No blocking contradictions remain. Three published preprints carry historical methodology values (notably the 80% achievability framing in the Certification-as-a-Framework paper Section 11) that the manual handles by citing the preprints for **structural design rationale** while using current methodology values from the repo documents for specific calibration; this is documented in the plan's Pre-work 2 note and does not require revising the published preprints.

Findings below are organized by audit category.

---

## Audit Category 1: Percentile Values Across Documents

### Finding 1.1 — Standards-setting calibration (90/30 row-pass)

**Status:** Coherent.

| Document | Statement |
|---|---|
| Governing Principles v2.1 | Intent: 90% clean platform / 30% dirty platform achieve row-level certification. Mechanism: P97 clean / P45 dirty per-analyte. |
| Governance Policy v2.0 | References Status A/B/C/D/E enforcement framework; does not state intent or per-analyte percentile — appropriate since the Policy governs enforcement, not initial calibration. |
| Lot Testing Schedule v2.0 | References limits per the Standards (does not state percentile values). Appropriate scope. |
| CLAUDE.md Part 19 | P97 clean / P45 dirty with explicit row-pass calibration rationale. Notes earlier P10/P20 framings are superseded. Aligned. |
| 15 product briefings | Per-analyte limits use P97/P45 with adversarial-read sections explaining the calibration. Adversarial sections include attack-response framings referencing historical P10 framing for context; not load-bearing. |

**Resolution:** No action required. The intent-leads-mechanism framing in Governing Principles v2.1 is now the canonical expression. Manual Part 5 methodology chapter will use this framing without restating engine arithmetic.

### Finding 1.2 — Ratchet trigger percentile

**Status:** Coherent (after Pre-work 4 §12 revision).

| Document | Statement |
|---|---|
| Governing Principles v2.1 | P80 of certified Status A lot results, two-cycle confirmation, with breadth threshold (50% of SKUs at or below 60% PoL), 20% step cap, 12-18 month transition. |
| Governance Policy v2.0 §12 | Identical specification (this is the canonical operational text). |
| CLAUDE.md Part 19 | References §80th-percentile ratchet trigger by reference to Governing Principles. Does not duplicate detail. |
| Briefings | Do not reference ratchet (correctly out of scope for per-product briefings). |

**Resolution:** No action required.

### Finding 1.3 — Historical 80% achievability framing in Certification-as-a-Framework preprint

**Status:** Documented and accepted.

The preprint Section 11 uses "approximately the 80th percentile of industry achievability" framing for transitional certification. This is from an earlier iteration of the methodology. The current methodology is 90/30 row-pass with P97/P45 per-analyte mechanism, which is more defensible against the Governing Principles.

**Resolution:** The preprint stands as a published artifact and is not revised. The Program Manual cites it for structural design rationale (staged compliance, risk tiering, MU decision rules, confidential remediation, ratchet structure, supplier intelligence, commercial viability framing). Manual prose uses current methodology values from the repo documents. This is documented in the plan's Pre-work 2 note.

---

## Audit Category 2: Status Framework (A/B/C/D/E)

### Finding 2.1 — Status framework coherence

**Status:** Coherent.

| Document | Status framework treatment |
|---|---|
| Governance Policy v2.0 §5 | Canonical specification: A (full compliance), B (transitional, MaxPoL 100-150% Tier 2 only), C (probation, 150-200% or Tier 1 exceedance), D (suspension >200%), E (revocation). |
| Lot Testing Schedule v2.0 §3 | Testing frequency matrix uses A/B/C(Low)/C(High). Consistent with Governance Policy. |
| Governing Principles v2.1 | Does not specify status framework (appropriate — Principles are program objectives, Governance Policy is enforcement specification). |
| CLAUDE.md Part 19 | Does not specify status framework (out of scope for standards-setting methodology). |
| Briefings | Do not reference status framework (correctly out of scope for per-product briefings). |

**Resolution:** No action required. Briefings will gain a reference to the Status framework when retemplated into Program Manual Part 3 chapters (each chapter will note that certification under that product line uses the Governance Policy's A/B/C/D/E framework).

---

## Audit Category 3: Tier 1 / Tier 2 Metal Classification

### Finding 3.1 — Tier classification coherence

**Status:** Coherent.

| Document | Tier classification |
|---|---|
| Governance Policy v2.0 §2.2 | Canonical: Tier 1 = Pb, Cd, iAs (speciation for rice; reflex otherwise), MeHg (speciation for fish; reflex otherwise). Tier 2 = Ni, Sn, Al, Cr (Cr(VI) speciation only if credible pathway). |
| Lot Testing Schedule v2.0 §9 | Speciation requirements consistent with Tier classification. iAs for rice; MeHg for fish; Cr(VI) only with credible pathway. |
| Governing Principles v2.1 | Does not reference Tier classification (appropriate). |
| CLAUDE.md Part 19 | References 10-analyte panel (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr-VI, Sn) for the standards math; Tier classification is governance, not math. |
| Briefings | 2 of 15 reference Tier 1/Tier 2 (the rest focus on per-analyte limits). |

**Resolution (informational, not blocking):** When briefings are retemplated into Program Manual Part 3 chapters, each chapter should include a toxicology callout that references the Tier classification of its priority metals (per the plan's Pre-work 5). This is a Part 3 retemplate task, not a source-document contradiction.

### Finding 3.2 — 8-analyte vs. 10-analyte panel reconciliation

**Status:** Documented; not blocking.

The Governance Policy v2.0 references **eight priority analytes** (Tier 1: Pb, Cd, iAs, MeHg; Tier 2: Ni, Sn, Al, Cr). The HMTc standards math in CLAUDE.md Part 19 references a **10-analyte panel** (adds tAs, tHg, Cr-VI as separate species). The reconciliation: the 10-panel is the analytical-testing scope (covering total and speciated forms); the 8-Tier classification is the enforcement-tier mapping (where speciated forms inherit their parent metal's tier).

**Resolution:** Acceptable as-is. The Program Manual Part 2 should briefly clarify this: "The Program tests for 10 analytes (8 priority metals × speciation where required). The enforcement-tier framework operates on the 8 priority metals; speciated forms (iAs, MeHg, Cr(VI)) inherit their parent metal's tier."

---

## Audit Category 4: Confidential Remediation Track

### Finding 4.1 — Treatment across documents

**Status:** Coherent; structural decision for the Program Manual.

The Confidential Remediation Track appears in:
- Governance Policy v2.0 §4.3 (subsection of Program Entry)
- The Certification-as-a-Framework preprint Section 8 (named as a paradigm-resolution mechanism)
- Counterproductive Consequences preprint Section 6C (named as a structural alternative to public exposé)
- Cost-of-Operating preprint Section 8 (named as a litigation defensibility mechanism)
- Governing Principles v2.1 (not directly referenced — appropriate, since it's an enforcement-side mechanism)
- Briefings: do not reference (correctly out of scope)

**Resolution:** No contradiction. The Program Manual's structural decision is to **hoist** the Confidential Remediation Track to its own chapter in Part 2, where today it lives as Governance Policy §4.3. Section 4.3 content is reproduced in the hoisted chapter, with narrative framing drawn from the three preprints. The Governance Policy retains §4.3 as the operational anchor.

---

## Audit Category 5: ALARA Paradigm

### Finding 5.1 — ALARA references

**Status:** Coherent.

| Document | ALARA treatment |
|---|---|
| Governance Policy v2.0 §1.3 | Canonical specification: ALARA as enforceable obligation, operationalized through trend monitoring, CAPA, VOE, and Standards Ratchet. |
| Lot Testing Schedule v2.0 §5.3 | References 80% PoL internal warning trigger as an ALARA operationalization. |
| Governing Principles v2.1 | References ALARA in the ratchet-trigger section. |
| CLAUDE.md Part 19 | References ALARA + §80th-percentile ratchet trigger. |
| Briefings | Do not reference (correctly out of scope). |

**Resolution:** No action required.

---

## Audit Category 6: Wiki/HMTc Firewall

### Finding 6.1 — Firewall references

**Status:** Coherent.

| Document | Firewall treatment |
|---|---|
| CLAUDE.md Part 2 | Canonical specification: standards arithmetic does not live in `wiki/`. Lives in `data/workbench/` and the staff Standards Workbench. |
| Governing Principles v2.1 Principle 4 | Restates the firewall in compressed form: "The pooling math is in code, deterministic, and reproducible. Standards arithmetic does not live in `wiki/`." |
| Governance Policy v2.0 §8.1 | Data governance requirements consistent with firewall (machine-readable, queryable, brand-confidential). |
| CLAUDE.md Part 19 | Part of the firewall specification. |
| Briefings | Live under `data/workbench/briefings/` — correctly placed on the standards arithmetic side of the firewall. |

**Resolution:** No action required.

### Finding 6.2 — Program Manual firewall compliance

**Action item for Program Manual drafting (not blocking):** The Program Manual is a public-facing artifact. Per the firewall, the manual describes the methodology principle (90/30 row-pass intent, P97/P45 per-analyte mechanism, P80 ratchet trigger) without exposing engine arithmetic (pool composition counts, sensitivity bands, MAX_SOURCE_SHARE cap, source-level bootstrap details). The regression-test suite in `tools/standards/build-standards-briefing.test.mjs` will need extension to cover the bound manual for this.

---

## Audit Category 7: Cross-Document Terminology

### Finding 7.1 — Variant terminology

**Status:** Coherent with minor stylistic variants. Not blocking.

- "Clean platform" / "clean subcategory" / "clean side": used interchangeably across documents. The Governance Policy uses neither (status framework is brand-side, not platform-side). The Governing Principles uses "clean platform" and "clean subcategory" interchangeably. Briefings use "clean subcategory."
- "Dirty platform" / "dirty subcategory" / "contaminated platform": same pattern.
- "Action level" / "limit" / "threshold": used interchangeably. The Governance Policy formally defines "action level" in §3; other documents use "limit" colloquially.

**Resolution:** Acceptable. The Program Manual glossary will provide a unified vocabulary so detached licensing exhibits and the bound book use a single consistent term set.

---

## Items resolved this session (Pre-work 1-4)

- Governance Policy migrated from PDF to markdown (canonical lives at `data/workbench/standards-book/source-documents/governance-policy.md`).
- Lot Testing Schedule migrated from PDF to markdown (canonical lives at `data/workbench/standards-book/source-documents/lot-testing-schedule.md`).
- Governing Principles Principle 5 reframed from "$2 billion by 2030" to "Make it the de facto standard." Commercial success follows from scale and credibility, not the reverse.
- Governing Principles Standards Math section restructured to lead with the 90/30 row-pass **intent** before the P97/P45 per-analyte **mechanism**.
- Governance Policy §12 Standards Ratchet Mechanism revised to specify trigger conditions, step size cap (20% per cycle), expanded transition rules, and forward-forecast obligation.
- Governing Principles ratchet section expanded to mirror the §12 revision.

## Items deferred to Program Manual drafting (not blocking)

- Each Part 3 chapter (retemplated from briefings) should include a toxicology callout referencing Tier 1 / Tier 2 classification for its priority metals.
- The Program Manual Part 2 should clarify the 8-analyte enforcement framework vs. 10-analyte testing panel relationship.
- The Confidential Remediation Track is hoisted to its own Part 2 chapter, with content drawn from Governance Policy §4.3 and the three preprints.
- The Program Manual glossary unifies stylistic variants ("clean platform" vs. "clean subcategory", etc.).
- Regression-test suite extension to cover firewall compliance for the bound manual.

## Items not in scope (out of session)

- Re-publication or revision of the three preprints (they are standalone published artifacts).
- Reclassification of metals between Tier 1 and Tier 2 (Technical Committee authority per Governance Policy §2.3).

---

**Audit status:** No blocking contradictions. Pre-work 1-4 resolved all percentile-coherence, ratchet-specification, and Principle-5 issues. Pre-work 5 (toxicology referencing template) and Pre-work 6 (post-draft adversarial audit) remain pending per the plan.
