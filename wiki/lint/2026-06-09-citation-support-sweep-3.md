---
op: lint
check: citation-support-sweep
date: 2026-06-09
model: claude-sonnet-4-6
claims_checked: 40
claims_remaining: ~5054
stopped_at: "balsamic-vinegar / Mitigation options / 50 ppb Al detection floor (CSV row 123)"
noindex: true
---

supported 22 · mismatch 0 · not-in-source 18 · wrong-source 0. Report-only; no pages edited.

## Retroactive P1 note — missed by sweep-2

Sweep-2 (rows 42–83) recorded 0 mismatches, but during source verification for rows 43–44 and 50–51 in this session the following P1 mismatches were discovered. They are reported here so the editing session can act on them; they were in sweep-2's row range, not this batch's.

**apple.md and applesauce.md claim the EU 2023/915 Cd ML for apple/applesauce is 0.050 mg/kg (50 ppb). The EU source explicitly contradicts this.**

EU 2023/915 Annex I Cadmium section distinguishes:
- Section 3.2.1.1: "Fruits **except** 3.2.1.2–3.2.1.4" = 0.050 mg/kg (general tier)
- Section 3.2.1.2: "Citrus fruits, **pome fruits**, stone fruits, table olives, kiwi, bananas, mangoes, papayas, pineapples" = **0.020 mg/kg**

Apple (Malus domestica) is definitively a pome fruit. The applicable EU Cd ML for apple is 0.020 mg/kg (20 ppb), not 0.050 mg/kg (50 ppb). Both apple.md line 187 and applesauce.md line 189 use the general-tier value (3.2.1.1) instead of the pome-fruit-specific value (3.2.1.2). This is a 2.5× error.

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|
| [ingredients/apple.md](../../wiki/ingredients/apple.md) | Regulatory limits that apply | 0.050 mg/kg (Cd) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | mismatch | EU Annex I 3.2.1.2: pome fruits = 0.020 mg/kg Cd. Apple is a pome fruit. Page uses general-fruit tier (3.2.1.1 = 0.050 mg/kg), which explicitly excludes pome fruits by its own wording. |
| [ingredients/apple.md](../../wiki/ingredients/apple.md) | Regulatory limits that apply | 50 ppb (Cd) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | mismatch | 50 ppb = 0.050 mg/kg. Same error. EU value for pome fruits is 20 ppb (0.020 mg/kg). |
| [ingredients/applesauce.md](../../wiki/ingredients/applesauce.md) | Regulatory limits that apply | 0.050 mg/kg (Cd) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | mismatch | Applesauce page uses "the applicable ML for the corresponding fresh fruit" for apple (a pome fruit). Pome-fruit Cd ML = 0.020 mg/kg under 3.2.1.2; page states 0.050 mg/kg. |
| [ingredients/applesauce.md](../../wiki/ingredients/applesauce.md) | Regulatory limits that apply | 50 ppb (Cd) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | mismatch | Same error as above. EU pome-fruit Cd ML is 20 ppb, not 50 ppb. |

---

## Batch 3 findings (CSV rows 84–123)

### Context and source verification summary

**Supported sources this batch:**
- `fda-iAs-rice-cereal-2020` source page: "Action level: 100 ppb iAs (100 µg/kg)" — confirms baby-cereals 100 ppb iAs claims (rows 85–87).
- `fda-ctz-Pb-babyfood-2025` source page: "Dry infant cereals | 20 ppb" and "Single-ingredient root vegetables | 20 ppb" — confirms 20 ppb Pb claims for baby cereals (row 88) and baked-potato CTZ claims (rows 109–115).
- `eu-2023-915-contaminants-maximum-levels` source: 3.5.1 canned food = 200 mg/kg Sn, 3.5.2 canned beverages = 100 mg/kg Sn — confirms baked-beans Sn claims (rows 90–93); 3.1.2.1 root/tuber = 0.10 mg/kg Pb (rows 116–117); 3.2.2.1 root/tuber = 0.10 mg/kg Cd (rows 118–119).
- `codex-cxs-193-1995` source: "Root and tuber vegetables | 0.1 | Potato: peeled potato" — confirms baked-potato Codex Cd 0.10 mg/kg (rows 120–121).
- EU 3.2.1.1 (general fruits) = 0.050 mg/kg Cd applies to avocado (not a pome/citrus/stone/listed-tropical fruit) — row 84 supported.

**Not-in-source patterns this batch:**
1. **Baked-beans Why/200 mg/kg Sn (row 89):** The 200 mg/kg in the "Why" section is a contextual reference to the EU regulatory threshold, but the nearest citation is `fsa2016-infant-food-formula-metals-survey`, which is a dietary survey that does not state 200 mg/kg as a Sn toxicity threshold. Value is supported by EU 3.5.1 (confirmed in rows 91–92), but the citation trail in the Why section points to FSA 2016.
2. **Baked-beans legume Pb/Cd limits (rows 94–99):** The EU 2023/915 source page extracted only selected Annex I rows; "legume vegetables" (Pb 0.10 mg/kg, Cd 0.050 mg/kg) and "dried legume seeds" (Cd 0.10 mg/kg) rows are absent. These categories likely exist in the full regulation but were not transcribed into the source page body.
3. **Baked-potato TDS values (rows 100–108):** Same structural gap as sweeps 1–2: `fda2022-tds-elements-fy2018-fy2020` source page body does not enumerate per-food values. All nine values are confirmed in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv` and the ingredient page's own TDS table.
4. **Balsamic-vinegar detection floors (rows 122–123):** `ndungu2004-lead-vinegar-icpms-gfaas` source is Pb-only; its GFAAS MDL is 0.12 µg/L (not "5 ppb"). No Al or tAs data appear anywhere in the Ndungu source page. The claimed ICP-MS detection floors (Pb ≤5 ppb, Al ≤50 ppb, tAs ≤5 ppb) are not stated in the cited source.

---

## P1 — mismatch / wrong-source

*(This batch, rows 84–123: none found.)*

---

## P2 — not-in-source

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|
| [ingredients/baked-beans.md](../../wiki/ingredients/baked-beans.md) | Why this commodity accumulates heavy metals | 200 mg/kg (Sn context) | [fsa2016-infant-food-formula-metals-survey](../../wiki/sources/fsa2016-infant-food-formula-metals-survey.md) | not-in-source | "Sn is generally a lower acute-toxicity concern at concentrations below 200 mg/kg" — nearest citation is FSA 2016 dietary survey which does not state this Sn threshold. Value is supported by EU 3.5.1 (confirmed in Regulatory section), but the Why-section citation trail leads to FSA 2016. |
| [ingredients/baked-beans.md](../../wiki/ingredients/baked-beans.md) | Regulatory limits that apply | 0.10 mg/kg (Pb, legumes) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | EU source page extracted Lead rows cover fruits, root/tuber veg, fruiting veg, fish, dairy, and infant/baby food. No legume-vegetable Pb row appears in the source page body. |
| [ingredients/baked-beans.md](../../wiki/ingredients/baked-beans.md) | Regulatory limits that apply | 100 ppb (Pb, legumes) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Same as above (100 ppb = 0.10 mg/kg). |
| [ingredients/baked-beans.md](../../wiki/ingredients/baked-beans.md) | Regulatory limits that apply | 0.050 mg/kg (Cd, legume vegetables) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | EU source page Cd rows do not include a legume-vegetables category. The page extracted 3.2.11.3 (peanuts/soybeans = 0.20) but no general-legume-vegetable tier. |
| [ingredients/baked-beans.md](../../wiki/ingredients/baked-beans.md) | Regulatory limits that apply | 50 ppb (Cd, legume vegetables) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Same as above (50 ppb = 0.050 mg/kg). |
| [ingredients/baked-beans.md](../../wiki/ingredients/baked-beans.md) | Regulatory limits that apply | 0.10 mg/kg (Cd, dried legume seeds) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Cites `[[regulations/eu-2023-915-cadmium]]`. No `wiki/sources/eu-2023-915-cadmium.md` source page exists; underlying source is `eu-2023-915-contaminants-maximum-levels`, which does not have a dried-legume-seeds Cd row in its extracted Key numbers. |
| [ingredients/baked-beans.md](../../wiki/ingredients/baked-beans.md) | Regulatory limits that apply | 100 ppb (Cd, dried legume seeds) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Same as above (100 ppb = 0.10 mg/kg). |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 41 ppb (Cd median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | FDA TDS source page body does not enumerate per-food distribution values. Value (TDS Food 137, n=27) confirmed in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv` and ingredient page TDS table. Systemic gap; see sweeps 1–2. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 63.4 ppb (Cd p90) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 66 ppb (Cd max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 6.92 ppb (Pb p90) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 12 ppb (Pb max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 52 ppb (Ni median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 100 ppb (Ni max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 3.8 ppb (tAs median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/baked-potato-with-peel.md](../../wiki/ingredients/baked-potato-with-peel.md) | Why this commodity accumulates heavy metals | 18 ppb (tAs max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/balsamic-vinegar.md](../../wiki/ingredients/balsamic-vinegar.md) | Mitigation options | 5 ppb (Pb ICP-MS detection floor) | [ndungu2004-lead-vinegar-icpms-gfaas](../../wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md) | not-in-source | Ndungu 2004 source page reports GFAAS MDL 0.12 µg/L (0.12 ppb) for Pb; no "5 ppb" value appears as a detection floor or recommendation. ICP-MS is more sensitive than GFAAS so "≤5 ppb" is conservative, but this specific floor value is not stated in the source. |
| [ingredients/balsamic-vinegar.md](../../wiki/ingredients/balsamic-vinegar.md) | Mitigation options | 50 ppb (Al ICP-MS detection floor) | [ndungu2004-lead-vinegar-icpms-gfaas](../../wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md) | not-in-source | Ndungu 2004 is Pb-only; the study does not measure Al and contains no Al detection floor. The 50 ppb figure cannot be verified from this source. |
