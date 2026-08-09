---
title: "FSANZ aluminium infant-formula soy split — is the soy-based ML real or a fabricated split?"
type: workbench-standards-adjudication
audience: [internal]
noindex: true
rows: [infant-formula-powder, infant-formula-rtf-liquid]
variants: [cow, soy]
analytes: [Al]
register_rows: [aunz_sch19_al_formula_nonsoy_500, aunz_sch19_al_formula_soy_1000]
trigger: "Big 8 briefing (2026-08-07) adversarial check flagged the compiled soy Al = 8000 µg/kg as a possibly-fabricated formulation split."
disposition: no-change
updated: 2026-08-09
---

# FSANZ aluminium infant-formula soy split — adjudication

Staff-only. This touches the LIVE infant-formula standard (Al soy powder = 8000 µg/kg,
Al soy RTF = 1000 µg/kg), so the question was routed through adjudication rather than a
silent edit.

## Question

During verification of the Big 8 cert briefing (2026-08-07), an adversarial check claimed
that FSANZ sets a **single** aluminium maximum level for infant formula of 0.05 mg/100 mL
as prepared (~500 µg/kg) applying to **all** infant formula including soy-based — i.e. that
there is no standard-vs-soy split, and that the compiled standard's soy Al value
(8000 µg/kg powder, from register row `aunz_sch19_al_formula_soy_1000` at 1 mg/kg × 8) is a
fabricated split, possibly copied from the EU nickel cow/soy formulation split.

Three things were to be resolved against the primary Code text, not the claim:

1. What is the current in-force FSANZ aluminium infant-formula ML, accounting for the P1028
   transition (which value governs an August-2026 standard)?
2. Is the soy = 1 mg/kg value real, or a fabricated copy of the EU nickel split?
3. Is the instrument attribution (Schedule 19 vs Standard 2.9.1) correct for the date?

## Verdict

**The claim is refuted by the primary Code text. There is a real cow/soy aluminium split,
FSANZ sets the soy limit at 2× the non-soy limit, and the compiled standard is correct.
No change is made to the standard. Making the requested "fix" (collapsing soy to a single
value ≈ 4000 µg/kg) would itself introduce a fabrication — it would erase a distinction the
regulator actually makes.**

| Row / variant | Register source | FSANZ ML (as-consumed) | Compiled value | Correct? |
|---|---|---|---|---|
| Powder, cow/non-soy | `aunz_sch19_al_formula_nonsoy_500` | 0.5 mg/kg | 4000 µg/kg (×8) | yes |
| Powder, soy-based | `aunz_sch19_al_formula_soy_1000` | 1 mg/kg | 8000 µg/kg (×8) | yes |
| RTF liquid, non-soy | `aunz_sch19_al_formula_nonsoy_500` | 0.5 mg/kg | 500 µg/kg (as-consumed) | yes |
| RTF liquid, soy-based | `aunz_sch19_al_formula_soy_1000` | 1 mg/kg | 1000 µg/kg (as-consumed) | yes |

## Evidence

### 1. Primary Code text (dispositive)

The in-repo raw source `raw/regulatory/au-nz/au-nz-fsanz-standard-1-4-1-schedule-19.pdf`
is the **Authorised Version F2024C00908, registered 21 October 2024, compilation No. 6 of
Schedule 19 as in force on 13 September 2024 (up to Amendment No. 231)** — the post-P1028
text. Section **S19—4 (Maximum levels of metal contaminants)** lists aluminium as three
distinct rows:

| Contaminant | Food | Maximum level (mg/kg) |
|---|---|---|
| Aluminium | Infant formula, follow-on formula and SMP for infants (other than pre-term) | 0.5 |
| Aluminium | **Soy-based infant formula products** | **1** |
| Aluminium | SMP for infants formulated for pre-term infants | 0.2 |

The **Amendment History** in the same instrument records, under Amendment No. 231
(F2024L01151, FSC171, commenced 13 September 2024), the entry: *"Insert entry for aluminium
into S19—4 table."* In other words, **P1028 inserted the split**; it did not harmonise
aluminium to a single value.

The instrument is the *Food Standards (Proposal P1028 – Infant Formula Products –
Consequential Amendments) Variation*. Its transitional provision (Clause 4) establishes a
transition period **13 September 2024 → 13 September 2029** during which a product may be
sold if it complies with either the Code as in force without the variations or the Code as
amended. Both the old and new texts express the **same** cow/soy split; there is no version
in which a single value applies to all formula including soy. The same Amendment No. 231
also raised (loosened) infant-formula lead from 0.01 → 0.02 mg/kg — noted here only because
it is the sibling change in the same variation.

### 2. Currency check (rules out a later single-value amendment)

`legislation.gov.au/F2015L00454/latest` reports the current/latest compilation as
**F2024C00908, in force 13 September 2024** — the identical 8-page PDF held in the repo
(230,127 bytes). There is no newer compilation, hence no later amendment collapsing the
split.

### 3. FSANZ's own P1028 documentation (corroboration)

FSANZ's P1028 supporting documents state that FSANZ *"added **separate** maximum levels for
aluminium"* for the three groups above, including a distinct **soy-based infant formula
products** limit. This is the regulator explicitly describing the split as its deliberate
outcome, not an artifact.

### 4. Origin of the erroneous claim (so it is not re-raised)

A public web search surfaces that a **single** ML of 0.05 mg/100 mL for infant formula
"including soy-based" was an **issue raised during P1028 consultation** — i.e. a proposed
option that stakeholders discussed. FSANZ's final gazetted decision was the separate-ML
split. The adversarial check appears to have read a consultation/discussion document and
mistaken the proposed single ML for the enacted rule.

### 5. "Fabricated copy of the EU nickel split"? No.

The soy value has an independent, primary-source-verified basis (FSANZ S19—4, 1 mg/kg for
soy-based infant formula products). The ratio is 2× (soy 1 / non-soy 0.5), which is FSANZ's
own choice — soy formula is inherently aluminium-rich — and is unrelated to the EU nickel
ratio (soy 400 / cow-milk 250 = 1.6×). Different regulator, different analyte, different
ratio, independent citation. Not a copy.

## Instrument attribution — correct for the date

The register attributes both rows to *"Standard 1.4.1 / Schedule 19."* For an August-2026
standard this is **correct**: as of 13 September 2024 the numeric aluminium ML lives in
**Schedule 19, S19—4**, given legal effect by the operative clause of **Standard 1.4.1**
(section 1.4.1—3(1)). The `aunz_sch19_...` source-id prefix is therefore right.

The pre-P1028 aluminium provision lived in the **compositional Standard 2.9.1** as
0.05 mg/100 mL (non-soy) / 0.1 mg/100 mL (soy) as prepared — the **same 2× split**, in
different units and a different location. P1028 relocated it into Schedule 19 and re-expressed
it in mg/kg (0.05 mg/100 mL ≈ 0.5 mg/kg; 0.1 mg/100 mL ≈ 1 mg/kg). Attributing the *current*
value to Schedule 19, and the historical value to Standard 2.9.1, is the accurate reading —
neither the register nor the compiled standard needs correction.

## Basis conversion note

Compiled powder values apply an 8:1 (`reconstitution_8to1`) as-consumed → as-sold factor:
0.5 × 8 = 4000; 1 × 8 = 8000 µg/kg. RTF-liquid rows are already as-consumed, so no factor.
Under FSANZ's own S19—3(1)(d), the aluminium ML is assessed on the reconstituted (prepared)
form; the powder-basis figure is an HMTc comparability conversion, correctly flagged
`×8 as-consumed→as-sold` in the compiled JSON.

## Disposition

- **No change** to `infant-formula-powder.json` or `infant-formula-rtf-liquid.json`. The
  aluminium soy values (8000 powder / 1000 RTF µg/kg) are real, primary-source-verified, and
  defensible. The Cat-1 compiler was **not** re-run because no register value changed.
- Register rows `aunz_sch19_al_formula_nonsoy_500` and `aunz_sch19_al_formula_soy_1000` are
  annotated with P1028 provenance + a pointer to this record, so a future adversarial check
  reaches the resolution from the register.
- The wiki page `wiki/regulations/au-nz-food-standards-code-schedule-19-contaminants.md`
  already shows the correct split (Al 0.5 / 1 / 0.2) — no correction needed.

## Out of scope, logged separately

A ×7-vs-×8 documentation inconsistency exists: `hmtc-infant-formula-standard-v3.md` and
`CLAUDE.md` Part 19 cite the AU/NZ aluminium powder split as **3500 / 7000** (×7), while the
compiled JSON and the live standard use **4000 / 8000** (×8, per `reconstitution_8to1`).
The live/compiled value is the audited anchor; the ×7 figures in the two documents are stale.
This is a doc-vs-live consistency defect (and touches a policy doc, so it is human-gated),
separate from the soy-split question. Logged to the outstanding-items ledger, not fixed here.
