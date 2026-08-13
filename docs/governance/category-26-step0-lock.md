# Category 26 — Peptides, SARMs, and Research Chemicals — Step Zero Lock

**Status:** Scaffold lock (Step Zero). New category appended under
`taxonomy-reorganization-2026-06.md` (v2.1), 2026-06-08. **No candidate values** in this pass.
Promotes the 2026-06-08 provisional scaffold `research-chemicals-peptides-sarms`.
**Domain:** Ingestible and applied health products. **Number:** 26 (appended; no existing number changed).
**Exposure pathway:** **Parenteral (injection)** + oral gray-market — a pathway absent from v2.0.
**Jurisdiction:** FDA (unapproved/misbranded drugs); no certification framework exists for this class.
**Panel:** eight totals — Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr — plus iAs and Cr-VI species controls and an explicit MeHg applicability cell.

**Current standards status (2026-08-13): DERIVED (Pass 2 complete).** The go-to-market gate — "should HMTc certify this gray-market/unapproved-drug class at all?" — is RESOLVED: **yes, proceed** (Karen, 2026-08-13). Rationale: the class is in desperate need of safety oversight, heavy-metal testing protects the public, and people use these products regardless of legal status (harm reduction). HMTc certifies heavy-metal **SAFETY only** — it does not endorse, approve, or vouch for the efficacy or legality of the products. No lawful product-specific sovereign maximum exists, so under the government-limit-only initial-setting rule the `min(percentile, ceiling)` ceiling term is absent and (per the Part 2 firewall) the occurrence term cannot be published as a product-content limit. The derived standard therefore resolves every cell to `control` (mandatory per-lot testing + a published analytical method + a toxicology-anchored escalation rule, **no product-content number**) or a substantiated `not_material` (methylmercury). Route-appropriate ICH Q3D / USP <232> permitted daily exposures are attached as toxicological anchors only. Compiler: `tools/standards/compile-cat26.mjs` (+ `cat26-config.json`); records: `data/workbench/standards/cat26-compiled/` (STAFF/HMTc content, not public wiki).

## Why this earns a number, and why it cannot sit in Cat 16

These are unregulated ingestible and injectable compounds sold outside the dietary-supplement
framework. They are legally distinct from Cat 16 (Dietary Supplements), which requires a Supplement
Facts panel and lawful DSHEA ingredients, so they cannot route there. The contamination concern is
overseas/unregulated synthesis, and the buyers are cash-rich with no certification option in front of
them — the exact pattern of an underserved, well-funded market with genuine contamination risk.

## The parenteral pathway (new)

An injected compound bypasses the gut entirely, so its metal load reaches the bloodstream without the
absorption discount every ingestion row assumes. Per microgram this is arguably the most severe route
in the taxonomy. It is modeled as its own pathway, not as oral ingestion.

## Row architecture (scaffold)

| Row | Name | Slug |
|----:|------|------|
| 1 | Injectable peptide hormones (GLP-1 analogs, GH secretagogues, synthetic peptides) | `peptides-injectable-hormones` |
| 2 | Oral SARMs | `sarms-oral` |
| 3 | Injectable anabolic-androgenic steroids (AAS) | `aas-injectable` |
| 4 | Raw AAS / peptide powders (pre-formulation) | `research-chem-raw-powders` |
| 5 | Nasal/sublingual/troche gray-market peptide preparations (mucosal route) | `peptides-nasal-sublingual` |

Master node: `research-chemicals-peptides-sarms` (promoted from the provisional scaffold).
Seed evidence: `craven2025-aas-heavy-metals-australia` (black-market AAS survey — oral Ni near the
~200 µg/day PDE; oral Al high, mean 651 µg/g).

## Derivation-time methodology variants (record now; resolve before any Pass-2 number)

The locked standards math in `hmtc-governing-principles.md` is
`min(pooled per-analyte percentile, lowest applicable regulatory ceiling)`. This class breaks two of
its assumptions, so a documented variant is required **before** any Cat 26 value is published:

1. **No regulatory anchor exists.** These compounds have no lawful product limit, so the `min()` loses
   its cap term. Limits derive from the clean-benchmark percentile (and the health-based term) only —
   not the standard three-term case. The absence of any regulatory backstop is precisely why an HMTc
   mark carries its highest consumer-protection value for this class.
2. **Parenteral absorption.** The health-based term may need to run tighter than the oral default
   because injection skips first-pass gut absorption.

Both must be written into `docs/standards-methodology.md` before derivation.

## Boundary rules (prevent drift from Cat 16 and Cat 13)

- **Collagen and protein-hydrolysate peptide supplements** with a Supplement Facts panel route to
  **Cat 16 Row 20** (protein/collagen powders), not here.
- **Amino-acid and di-/tri-peptide isolate supplements** route to **Cat 16 Row 16** (amino acids &
  isolates), not here.
- **Topical copper-peptide serums and cosmetic peptide actives** route to **Cat 13 Row 3** (face/neck
  leave-on), not here.
- Only unregulated/gray-market ingestible and injectable research compounds sold outside the supplement
  framework route to Cat 26.

## Drift direction

Additive; scaffold only; no thresholds. Gives the homeless 2026-06-08 scaffold a defensible parent and
records the methodology variants the eventual derivation must honor.

## Changelog
- 2026-06-08 — Step Zero scaffold lock. 4 rows defined; parenteral pathway introduced; no candidate
  values. Methodology variants (no-regulatory-anchor; parenteral health-based term) recorded for Pass 2.
- 2026-08-13 — **Pass 2 derivation complete.** Go-to-market gate resolved (yes-certify, SAFETY only;
  public-protection call). Fifth row added (`peptides-nasal-sublingual`, mucosal route) to match taxonomy
  v2.1. Method resolved as the no-regulatory-anchor (control) form of Method v2.0: `tools/standards/compile-cat26.mjs`
  derives→audits→verifies 5 rows × 11 analytes. Every material cell is `control` with a route-appropriate
  ICH Q3D / USP <232> PDE toxicological anchor (parenteral rows → parenteral PDE; oral → oral PDE;
  mucosal → most-protective of parenteral/inhalation; Al via FDA 21 CFR 201.323 / JECFA-EFSA TWI; Cr(VI)
  via the 3 µg/day Cr inhalation floor); methylmercury is a substantiated `not_material` (no biomethylation
  pathway in abiotic synthesis; bounded by tHg; registered in `standards-not-material.csv`, gate PASS).
  The regulatory-vacuum scan confirms 0 product-content limits exist for this class. No product-content
  number is published (firewall invariant enforced in the compiler's verify step). Provenance tags used:
  `control`, `not-material`. Records: `data/workbench/standards/cat26-compiled/` (STAFF content).
