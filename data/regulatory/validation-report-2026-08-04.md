# Validation report — extracted infant/child regulatory limits (2026-08-04)

**Verdict: the extracted-limits dataset is not usable as a standards input. Quarantined.**

The 141-row `extracted-limits-infant-child-2026-08-03.json` (from the 2026-08-03
gathering package) was validated cell-by-cell against the **primary regulatory
texts** now held in the corpus. Three independent readers each took a jurisdiction
cluster, read the sovereign instrument (or the best available translation), and
compared every in-scope value. Scope: the four Tier-1 toxics (Pb, Cd, iAs, MeHg/
tHg) plus tin, for infant formula, follow-on formula, processed cereal-based /
baby foods, and infant rice cereal.

## Result

| | count |
|---|---|
| cells checked | 87 |
| **fully correct** | **37 (43%)** |
| wrong value or wrong food-category attribution | 22 |
| fabricated (no basis in the cited primary text) | 26 |
| value right, unit/basis mislabeled | 2 |
| real limits present in law but **missing** from the extraction | 23 |

A ~57% defect rate on the cells that matter most. Full per-cell detail:
`validation-discrepancies-2026-08-04.json`.

## How the errors were produced (systemic, not random)

1. **Cross-jurisdiction copy-paste ("Codex-default contamination").** Country
   rows were populated with Codex/EU figures instead of the country's own value.
   India Pb infant formula reads 0.02 mg/kg (the Codex/EU number); the real FSSAI
   value is **0.2** (FSS Contaminants Regs 2011, reg. 2.1.1, "Infant Milk
   substitute and Infant foods"). India Cd reads 0.01; the real value is **0.1**.
   Korea, China, and Brazil rows show the same signature.
2. **Metal misattribution.** Switzerland's "cadmium" infant-formula values
   (0.25 / 0.1 mg/kg) are the **nickel** limits mislabeled as cadmium; the true
   Swiss Cd limits are ~0.010 / 0.005 — a **20–25× error** on a zero-threshold
   toxic.
3. **Fabricated limits.** Mercury MLs were invented for jurisdictions that set
   none: the EU and Brazil each regulate mercury only for fishery products, yet
   the extraction lists 0.005–0.01 mg/kg mercury limits for their infant formula
   and baby food (numerically equal to Codex/EU values elsewhere in the same
   file — i.e. contamination, not a source reading).
4. **Formulation-split collapse.** The EU splits infant-formula cadmium by
   cow's-milk vs soy protein (0.010/0.005 vs 0.020/0.010); the extraction kept
   only the looser soy figure, hiding the stricter dairy ceiling that actually
   binds — 2× too loose.
5. **Under-extraction.** 23 real infant/child limits (e.g. all four Swiss arsenic
   limits, Brazil "transition foods" cadmium) never appear in the dataset.

Direction is **bidirectional** — some errors overstate the legal ceiling (India
tin 250 vs real **5.0** mg/kg, 50× too loose; Korea Pb cereal 0.2 vs 0.01), others
understate it (India Pb/Cd, 10× too strict). A "strictest-ML" lookup would be
corrupted either way.

## A deeper problem: mislabeled source documents

`Codex_CXS193_2023.pdf` is **not the 2023 revision**. Its footer stops at "Amended
2009" and its PDF metadata is dated 2010-05-08; a sibling `Codex_CXS193_2015.pdf`
gives a different lead value (0.01 vs 0.02 mg/kg for infant formula). This file is
byte-identical to the Codex PDF the fetch engine pulled from FAO's proxy. So the
Codex baseline itself is unsettled until the genuine current Schedule I text is
sourced. Provenance is compromised at the document level, not only in the
extraction.

## The method lesson

During reconciliation, the primary reader initially misread India's tin row —
grabbing the *zinc* line ("50.0, not less than 25.0") one entry below the tin line
("Infant Milk substitute and Infant foods 5.0"). The extraction said 250, a quick
grep said 50, the careful full-section read said 5.0. **Only reading the primary in
context settles a value.** Neither the automated extraction nor an automated
validator is authoritative; the sovereign text is, and it must be read carefully.

## What must happen before any of this feeds HMTc standards (Method v2.0)

1. **Do not use** `extracted-limits-infant-child-2026-08-03.json`. It is retained
   as a record of what was gathered, not as data.
2. **Re-extract per jurisdiction from the primary texts** (all in the corpus at
   `raw/regulatory/_source-packages/2026-08-03-infant-child-global/docs/`), one
   cell at a time, capturing unit, basis (powder / liquid / ready-to-use), and
   formulation splits, with a per-cell primary-source citation and human sign-off.
3. **Re-source the genuine current Codex CXS 193 Schedule I** (the FAO proxy served
   a 2009-vintage file); resolve the 0.01-vs-0.02 lead question against it.
4. Only the human-signed, primary-cited table is eligible as a Method v2.0 lookup
   input.
