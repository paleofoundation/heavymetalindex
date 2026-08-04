---
title: "HMTc Laboratory Service Agreement — Exhibit A: Specific Testing Protocol (template)"
type: workbench-hmtc-operational-template
audience: [internal, hmtc-staff]
noindex: true
status: template
methodology_ref: "CLAUDE.md Part 19; docs/conventions.md; HMTc Program Manuals (Analytical testing panel)"
updated: 2026-07-23
---

# STANDARD LABORATORY SERVICE AGREEMENT (LSA)
## EXHIBIT A — SPECIFIC TESTING PROTOCOL

> **Template note (delete before issuance).** This exhibit is lab-facing. It defines the analyte panel, methods, sensitivity requirements, and reporting format. It deliberately contains **no pass/fail thresholds** — the laboratory reports raw quantitative values only, and Heavy Metal Tested & Certified (HMTc) applies certification limits internally (§4, §5). Certification limits are staff-only outputs held in the HMTc Standards Workbench and are never disclosed in a lab agreement. Fill every `[bracketed]` field before issuance.

---

### 1. OVERVIEW & SCOPE

This document defines the mandatory, standardized testing protocol for all product brands seeking certification under the **Heavy Metal Tested & Certified (HMTc)** Program operated by [Paleo Foundation / Program Operator]. All testing performed under this program must conform strictly to the parameters, methodologies, and quality controls set out below. No deviation is permitted without prior written authorization from the Program Director.

---

### 2. ANALYTICAL TESTING MATRIX & METHODOLOGY

Certification under this program is evaluated against a **fixed 10-analyte HMTc panel** (§3). Because three of the ten certification analytes are *speciated* forms, a single total-digestion method is insufficient. Testing is therefore structured in two tiers plus an optional screening set.

**2.1 Tier 1 — Total-element determination (every sample).**
- **Method:** Inductively Coupled Plasma Mass Spectrometry (**ICP-MS**). ICP-OES and alternative total-element methods are not accepted.
- **Sample preparation:** Closed-vessel microwave acid digestion using ultra-pure nitric acid (HNO₃), sufficient for total digestion of the sample matrix without loss of volatile analytes.
- **Analytes determined at Tier 1:** total lead (Pb), cadmium (Cd), **total** arsenic (tAs), **total** mercury (tHg), nickel (Ni), aluminum (Al), **total** chromium (Cr, total), tin (Sn).

**2.2 Tier 2 — Speciation (reflex-triggered; see trigger table).** Speciated forms cannot be obtained from the Tier 1 total digestion and require dedicated methods. Speciation is non-substitutable; a total-form result is never accepted in place of the speciated analyte it certifies against.

| Speciated analyte | Required method (or validated equivalent) | Reflex trigger |
| :-- | :-- | :-- |
| **Inorganic arsenic (iAs)** | HPLC-ICP-MS arsenic speciation | Always for rice-containing or rice-derived products; otherwise when Tier 1 tAs ≥ 50% of the applicable action level |
| **Methylmercury (MeHg)** | Hg speciation (HPLC-ICP-MS or GC-based) | When Tier 1 tHg ≥ 50% of the applicable action level, or where a credible MeHg pathway exists (e.g., fish-containing baby foods) |
| **Hexavalent chromium (Cr-VI)** | Alkaline extraction + IC-ICP-MS (EPA 3060A / 7199-type), on a separate non-acid-digested aliquot | Where a credible Cr-VI pathway exists for the matrix (Program Operator designates on the COC) |

> **Note to the laboratory:** total acid digestion destroys chromium speciation. Cr-VI must be run on a separate aliquot using an alkaline extraction; do not attempt to derive Cr-VI from the Tier 1 digest.

**2.3 Optional screening analytes (non-certification).** The following may be reported from the Tier 1 ICP-MS run for the Program Operator's internal surveillance. They are **not HMTc certification analytes** and carry no pass/fail consequence: barium (Ba), selenium (Se), silver (Ag), antimony (Sb), uranium (U). [Retain, edit, or delete this set per program preference.]

**Reporting units.** All quantitative results reported in micrograms per kilogram (**µg/kg**, equivalently **ppb**) to three significant figures, in the **native basis of the submitted product form** (§4.2). Reporting in mg/kg is also acceptable provided ppb-equivalent values are given.

---

### 3. MANDATORY ANALYTE LIST & TARGET SENSITIVITY

The **10 certification analytes** are listed below. The governing sensitivity requirement is set out in §3.1; the numeric column is a **not-to-exceed ceiling**, not the operative limit.

| # | Certification analyte | Symbol | Tier | LOQ ceiling (not-to-exceed) |
| :- | :--- | :---: | :---: | :--- |
| 1 | Lead | Pb | 1 | 0.001 mg/kg (1 ppb) |
| 2 | Total Arsenic | tAs | 1 | 0.002 mg/kg (2 ppb) |
| 3 | Inorganic Arsenic | iAs | 2 | 0.0002 mg/kg (0.2 ppb) |
| 4 | Cadmium | Cd | 1 | 0.001 mg/kg (1 ppb) |
| 5 | Total Mercury | tHg | 1 | 0.0002 mg/kg (0.2 ppb) |
| 6 | Methylmercury | MeHg | 2 | 0.0002 mg/kg (0.2 ppb) |
| 7 | Nickel | Ni | 1 | 0.010 mg/kg (10 ppb) |
| 8 | Aluminum | Al | 1 | 0.050 mg/kg (50 ppb) |
| 9 | Hexavalent Chromium | Cr-VI | 2 | 0.010 mg/kg (10 ppb) |
| 10 | Tin | Sn | 1 | 0.010 mg/kg (10 ppb) |

*Optional screening (non-certification): Ba, Se, Ag, Sb, U — LOQ per laboratory's standard ICP-MS capability.*

**3.1 Governing LOQ requirement (this is the binding clause).** For every certification analyte, the laboratory's **Limit of Quantification (LOQ) must be at or below the applicable HMTc action level for that analyte in the submitted matrix.** If an LOQ exceeds the applicable action level, a non-detect result is **not** accepted as proof of compliance. Because action levels differ by product basis (powder-as-sold vs. ready-to-feed liquid vs. dry cereal vs. puree), the required LOQ is matrix-dependent; the ceilings in §3 apply in all cases and tighter LOQs are required where the action level is lower. The Program Operator will confirm the applicable per-matrix LOQ requirement on assignment.

> **Sub-ppb note.** Ready-to-feed liquid infant matrices can carry action levels below 1 ppb for several analytes. Laboratories must confirm they can meet sub-ppb LOQs for tHg, iAs, Pb, Cd, and Sn in liquid matrices, or such matrices will be routed to a lab that can.

---

### 4. LAB PROFILE & SUBMISSION CONSTRAINTS

- **4.1 Accreditation.** The laboratory must hold **ISO/IEC 17025** accreditation for each analytical method and food matrix used for certification decisions.
- **4.2 Native-basis designation.** The submitting brand must state the product form on the Chain of Custody (COC): Powder (as-sold), Liquid Ready-to-Feed (as-consumed), Concentrated Liquid, Dry Cereal (as-sold), Puree (as-consumed), Oil-based, Soy-based, Milk-based, Rice-containing. Results are reported in that native basis; the laboratory does not reconstitute or convert bases.
- **4.3 Fixed profile.** The laboratory saves the Tier 1 panel and the Tier 2 reflex rules as a fixed profile under Account Name: [Insert Account Name]. Reflex speciation triggers automatically per the §2.2 table without requiring re-submission.
- **4.4 Pass/Fail evaluation.** The laboratory reports raw quantitative values only. All certification "Pass / Fail / Borderline" determinations are made exclusively by HMTc against internally held program thresholds, applying a two-sided decision rule that accounts for expanded measurement uncertainty (ISO/IEC 17025; EURACHEM/CITAC; ILAC-G8). The laboratory is not asked to, and must not, state a certification outcome.

---

### 5. DATA REPORTING & CERTIFICATE OF ANALYSIS (COA) REQUIREMENTS

Every tested sample yields a comprehensive, legally defensible Certificate of Analysis (COA) containing:

1. Submitting brand identification and unique batch/lot number(s).
2. The exact quantitative value for each of the **10 certification analytes** (and any optional screening analytes run), each labeled by analyte form (e.g., "iAs", "tAs", "Cr-VI", "Cr total") and by native basis.
3. The specific method used per analyte (Tier 1 ICP-MS; Tier 2 speciation method) and whether each Tier 2 speciation was triggered or not-applicable.
4. The **per-analyte LOQ achieved for that run**, so LOQ-vs-action-level adequacy (§3.1) is verifiable on the face of the COA.
5. Sample preparation, digestion, and any speciation extraction details sufficient to reconstruct the analytical chain; ISO/IEC 17025 accreditation reference; chain-of-custody documentation.
6. Delivery in **both** a secure PDF and a structured machine-readable format (CSV or Excel) for internal data logging.

---

## APPENDIX (STAFF-ONLY — REMOVE BEFORE ISSUING TO A LABORATORY)

**Do not transmit this appendix to any laboratory or brand.** It records why the lab-facing exhibit is shaped as it is and the current state of the Category 1 evidence base.

**A. Certification panel is 10, not 12.** Canonical list (CLAUDE.md Part 14; `data/workbench/standards/hmtc_standards_catalog.json` `panel`): Pb, tAs, iAs, Cd, tHg, MeHg, Ni, Cr-VI, Sn, Al. The earlier "12-analyte" draft added Ba/Se/Ag (retained here only as optional non-certification screening) and had collapsed the three speciated forms (iAs, MeHg, Cr-VI) into total As/Hg/Cr — which a single total-digestion ICP-MS method cannot certify against. Tier structure fixes this.

**B. Cat 1 thresholds are candidate/provisional, not locked.** As of 2026-06-19 the Category 1 values live in `data/evidence/hmtc_aggregate_distributions.csv` as pooling-engine candidates; `data/evidence/category1_standards_decisions.csv` is empty and Cat 1 is not in the compiled catalog. Many cells are BLOCKED for no usable evidence. No finalized Cat-1 limit set exists to hand a lab even if the LSA were the place for it (it is not).

**C. Why the LOQ clause is written "≤ action level," not as a fixed table.** The repo defines no per-analyte numeric LOQ targets; the Program Manuals state the requirement only relative to each row's action level. Native basis drives this: e.g., RTF-liquid non-soy candidate values run sub-ppb (iAs ~0.39, tHg ~0.20, Sn ~3.1 ppb), so a flat 1–2 ppb LOQ floor would fail those rows. The §3.1 rule plus the §3 ceiling handles powder-vs-liquid automatically.

**D. Corrected arithmetic.** Original draft row 8 wrote total Cr LOQ as "0.010 mg/kg (100 ppb)"; 0.010 mg/kg = 10 ppb.

**E. Open program decisions for Karen (not obvious fixes — your call):**
- Keep the reflex/tiered speciation model above (matches the Program Manuals, controls cost), or require always-speciate on every sample (simpler COA, higher per-sample cost).
- Keep, trim, or drop the optional Ba/Se/Ag/Sb/U screening set.
