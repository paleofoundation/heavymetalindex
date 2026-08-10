---
op: lint
check: citation-support-sweep
date: 2026-06-09
model: claude-sonnet-4-6
claims_checked: 41
claims_remaining: 5137
stopped_at: "apple / Regulatory limits that apply (100 ppb, CSV data row 41)"
noindex: true
---

supported 22 · mismatch 0 · not-in-source 19 · wrong-source 0. Report-only; no pages edited.

Three structural patterns account for all 19 P2 findings:
1. **EFSA 2020 misattribution** (6 rows, almond): Flyvholm 1984 values appear in a sentence whose trailing citation is EFSA 2020 (which begins the *next* sentence about a different claim). The audit tool captures EFSA 2020 as nearest citation; EFSA 2020 source page contains no per-food Ni means.
2. **FDA TDS source page body gap** (9 rows, apple-juice + apple): The `fda2022-tds-elements-fy2018-fy2020` source page documents the dataset and references the underlying CSVs but does not enumerate per-food values in its body. All nine values exist in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`; needs trivial CSV-side verification.
3. **Loose method citation** (3 rows, ACV) and **one out-of-range approximation** (1 row, apple-juice): Ndungu 2004 is cited for detection floors it doesn't state; Benoy 1971 is cited for a 200 mg/kg threshold that doesn't appear in its source page.

---

## P2 findings — not-in-source

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|
| [almond](../../wiki/ingredients/almond.md) | Why this commodity accumulates heavy metals | 1.3 µg/g | [efsa-nickel-contam-2020](../../wiki/sources/efsa-nickel-contam-2020.md) | not-in-source | Value is from Flyvholm 1984 (preceding citation in same sentence). EFSA 2020 citation starts the *next* sentence ("EFSA's 2020 Nickel opinion names nuts collectively…"). EFSA 2020 source page contains no almond Ni mean. |
| [almond](../../wiki/ingredients/almond.md) | Why this commodity accumulates heavy metals | 300 ppb | [efsa-nickel-contam-2020](../../wiki/sources/efsa-nickel-contam-2020.md) | not-in-source | Fragment of "1,300 ppb" (= 1.3 µg/g); same attribution issue as row above. |
| [almond](../../wiki/ingredients/almond.md) | Nickel in almond | 1.8 µg/g | [efsa-nickel-contam-2020](../../wiki/sources/efsa-nickel-contam-2020.md) | not-in-source | Hazelnut mean Ni from Flyvholm 1984 (Key numbers: "Hazelnuts \| 0.66–3.3 \| 12 \| 1.8"). Sentence containing these values ends with EFSA 2020 citation that governs a different following claim; no citation in EFSA 2020 source page for 1.8 µg/g. |
| [almond](../../wiki/ingredients/almond.md) | Nickel in almond | 3.6 µg/g | [efsa-nickel-contam-2020](../../wiki/sources/efsa-nickel-contam-2020.md) | not-in-source | Walnut mean Ni from Flyvholm 1984 (Key numbers: "Walnuts \| single \| 1 \| 3.6"). Same attribution issue. |
| [almond](../../wiki/ingredients/almond.md) | Nickel in almond | 2.8 µg/g | [efsa-nickel-contam-2020](../../wiki/sources/efsa-nickel-contam-2020.md) | not-in-source | Peanut mean Ni from Flyvholm 1984 (Key numbers: "Peanuts \| 1.6–4.9 \| 2 \| 2.8"). Same attribution issue. |
| [almond](../../wiki/ingredients/almond.md) | Nickel in almond | 0.8 µg/g | [efsa-nickel-contam-2020](../../wiki/sources/efsa-nickel-contam-2020.md) | not-in-source | Pistachio mean Ni from Flyvholm 1984 (Key numbers: "Pistachios \| single \| 1 \| 0.8"). EFSA 2020 citation follows this value in text but governs "EFSA Nickel 2020 subsequently names nuts collectively…" — a distinct claim. |
| [apple-cider-vinegar](../../wiki/ingredients/apple-cider-vinegar.md) | Mitigation options | 5 ppb | [ndungu2004-lead-vinegar-icpms-gfaas](../../wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md) | not-in-source | Ndungu 2004 source page reports GFAAS MDL 0.12 µg/L for Pb, not "≤ 5 ppb." The ACV page cites Ndungu 2004 as "a useful method reference" for the protocol, not as the source of these detection-floor values. |
| [apple-cider-vinegar](../../wiki/ingredients/apple-cider-vinegar.md) | Mitigation options | 1 ppb | [ndungu2004-lead-vinegar-icpms-gfaas](../../wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md) | not-in-source | Ndungu 2004 is Pb-only; no Cd data or Cd detection limit in source page. |
| [apple-cider-vinegar](../../wiki/ingredients/apple-cider-vinegar.md) | Mitigation options | 10 ppb | [ndungu2004-lead-vinegar-icpms-gfaas](../../wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md) | not-in-source | Ndungu 2004 is Pb-only; no Ni data or Ni detection limit in source page. |
| [apple-juice](../../wiki/ingredients/apple-juice.md) | Why this commodity accumulates heavy metals | 200 mg/kg | [benoy1971-tin-toxicity-canned-fruit-juices](../../wiki/sources/benoy1971-tin-toxicity-canned-fruit-juices.md) | not-in-source | "200 mg/kg" not stated in Benoy 1971 source page. Source page reports: Kuwait outbreak juice at 250–385 ppm (no symptoms in cats); controlled symptom onset at 540 ppm (1 cat), 1,370 ppm (20–30% cats; all humans). 200 mg/kg is below the no-symptom outbreak level. |
| [apple-juice](../../wiki/ingredients/apple-juice.md) | Ranges by source, region, and variety | 1.5 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Apple juice Pb p50 = 1.5 ppb (TDS Food 99, n=3). FDA TDS source page body does not enumerate per-food values; value exists in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Ingredient page TDS Occurrence table confirms the value. |
| [apple-juice](../../wiki/ingredients/apple-juice.md) | Ranges by source, region, and variety | 2.7 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Apple juice Pb max = 2.7 ppb. Same structural gap as above; value in referenced CSV. |
| [apple-juice](../../wiki/ingredients/apple-juice.md) | Ranges by source, region, and variety | 2.4 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Apple juice tAs p50 = 2.4 ppb. Same structural gap; value in referenced CSV. |
| [apple-juice](../../wiki/ingredients/apple-juice.md) | Ranges by source, region, and variety | 4.4 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Apple juice tAs max = 4.4 ppb. Same structural gap; value in referenced CSV. |
| [apple-juice](../../wiki/ingredients/apple-juice.md) | Ranges by source, region, and variety | 20 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Apple juice Ni max = 20 ppb. Same structural gap; value in referenced CSV. |
| [apple](../../wiki/ingredients/apple.md) | Why this commodity accumulates heavy metals | 5.36 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Apple tAs p90 = 5.36 ppb (TDS Food 78, n=27). FDA TDS source page body does not list this value; it exists in the referenced CSV and in the ingredient page's inline TDS Occurrence table. |
| [apple](../../wiki/ingredients/apple.md) | Why this commodity accumulates heavy metals | 20 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Apple tAs max = 20 ppb. Same structural gap; value in referenced CSV. |
| [apple](../../wiki/ingredients/apple.md) | Ranges by source, region, and variety | 5.36 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Duplicate of Why-section claim above (same value, different section). Same structural gap. |
| [apple](../../wiki/ingredients/apple.md) | Ranges by source, region, and variety | 20 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Duplicate of Why-section claim above (same value, different section). Same structural gap. |
