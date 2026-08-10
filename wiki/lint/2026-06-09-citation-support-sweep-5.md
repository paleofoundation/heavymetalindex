---
op: lint
check: citation-support-sweep
date: 2026-06-09
model: claude-sonnet-4-6
claims_checked: 40
claims_remaining: ~4972
stopped_at: "breastmilk / Sources / 5 µg/L (CSV row 205)"
noindex: true
---

supported 10 · mismatch 0 · not-in-source 30 · wrong-source 0. Report-only; no pages edited.

## Summary

This batch is dominated by NOT-IN-SOURCE findings from two structural gaps:

1. **FDA TDS source-page body gap** (25 rows): blueberry-muffin (8 TDS values), bologna-luncheon-meat (5 TDS values), bran-cereal-with-raisins (6 TDS values), and breastmilk row are all NOT-IN-SOURCE per the established systemic gap in `fda2022-tds-elements-fy2018-fy2020`. Values exist in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`.

2. **EU 2023/915 processed-meat/offal gap** (7 rows): The EU source page does not include extracted rows for processed meat products (Pb ML, Cd ML for luncheon meat) or organ meat (bovine kidney Cd 1.0 mg/kg, bovine liver Cd 0.5 mg/kg). These provisions exist in the full regulation but were not transcribed into the source page's Key numbers section.

**Black-pepper synthesis claims** (4 rows): "Pb means cluster in the 10–130 ppb range with p95 around 370 ppb, Cd means cluster in the 20–80 ppb range with p95 around 100 ppb" are synthesis statements from Cicero 2022 and Tinggi 2025. The Tinggi source page shows black-pepper Cd of 0.026 mg/kg mean (range 0.008–0.067 mg/kg = 8–67 ppb), which partially anchors the Cd range but the p95 "100 ppb" is not stated. Column ordering in the Tinggi table is ambiguous for Pb. Neither source page states the synthesis statistics (130 ppb, 370 ppb, 80 ppb, 100 ppb) as explicit values. Flagged NOT-IN-SOURCE per the uncertainty rule; the editor should verify against the full Tinggi PDF table.

**Supported claims:**
- Blueberry EU Pb/Cd regulatory: EU 3.1.1.2 (general fruits) = 0.10 mg/kg Pb ✓; EU 3.2.1.1 (general fruits, blueberries not in 3.2.1.2) = 0.050 mg/kg Cd ✓
- Bran-cereal Cd 0.20 mg/kg for "bran and germ products": EU 3.2.12.5 wheat germ = 0.20 ✓
- Bran-cereal Cd 0.10 mg/kg for cereals: EU 3.2.12.1 = 0.10 ✓
- Bran-cereal Pb/Cd 0.10/0.050 mg/kg for fresh grapes (raisin ingredient): EU 3.1.1.2 fruits = 0.10 Pb ✓; EU 3.2.1.1 general fruits = 0.050 Cd (grapes not in 3.2.1.2 list) ✓
- Breastmilk 5 µg/L Pb: `katrynska2026-human-milk-biomonitor-toxic-metals-review` source explicitly states "Pb | 2–5 µg/L" in Key numbers table ✓

---

## P1 — mismatch / wrong-source

*(none this batch)*

---

## P2 — not-in-source

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|
| [ingredients/black-pepper.md](../../wiki/ingredients/black-pepper.md) | Ranges by source, region, and variety | 130 ppb (Pb mean upper) | [tinggi2025-spices-herbs-queensland](../../wiki/sources/tinggi2025-spices-herbs-queensland.md) | not-in-source | Synthesis across Cicero 2022 and Tinggi 2025. Tinggi source shows black-pepper Pb column ambiguous in table (column order uncertain); the 130 ppb Pb mean upper is not explicitly stated in either source page. Per task guidance: flagged as not-in-source pending editor PDF verification. |
| [ingredients/black-pepper.md](../../wiki/ingredients/black-pepper.md) | Ranges by source, region, and variety | 370 ppb (Pb p95) | [tinggi2025-spices-herbs-queensland](../../wiki/sources/tinggi2025-spices-herbs-queensland.md) | not-in-source | Same synthesis. "p95 around 370 ppb" not stated in either source page for black pepper specifically. |
| [ingredients/black-pepper.md](../../wiki/ingredients/black-pepper.md) | Ranges by source, region, and variety | 80 ppb (Cd mean upper) | [tinggi2025-spices-herbs-queensland](../../wiki/sources/tinggi2025-spices-herbs-queensland.md) | not-in-source | Tinggi source shows Cd 0.026 mg/kg mean (range 0.008–0.067 mg/kg = 8–67 ppb) for black pepper; 80 ppb is at the upper bound but "20–80 ppb range" is not stated as such in the source. |
| [ingredients/black-pepper.md](../../wiki/ingredients/black-pepper.md) | Ranges by source, region, and variety | 100 ppb (Cd p95) | [tinggi2025-spices-herbs-queensland](../../wiki/sources/tinggi2025-spices-herbs-queensland.md) | not-in-source | "p95 around 100 ppb" not stated in either source page. Tinggi Cd range max = 67 ppb; p95 would be less than max. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 8.5 ppb (Cd median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | FDA TDS source page body does not enumerate per-food values. Same systemic gap — see sweeps 1–4. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 12 ppb (Cd max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 56.8 ppb (Ni median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 72 ppb (Ni max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 4.34 ppb (tAs p90) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 5.3 ppb (tAs max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 1.9 ppb (Pb p90) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/blueberry-muffin.md](../../wiki/ingredients/blueberry-muffin.md) | Why this commodity accumulates heavy metals | 5 ppb (Pb max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Why this commodity accumulates heavy metals | 1.6 ppb (Cd median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Why this commodity accumulates heavy metals | 4.4 ppb (Cd max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Why this commodity accumulates heavy metals | 1.4 ppb (U median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Why this commodity accumulates heavy metals | 2.2 ppb (U max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Ingredient-derivative risk | 4.4 ppb (Cd max, cross-reference) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. Duplicate of Why-section claim. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Regulatory limits that apply | 0.10 mg/kg (Pb, processed meat EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | EU source page extracted Lead rows do not include a processed-meat/luncheon-meat category. The regulation likely has such a row, but it was not transcribed into the source page Key numbers. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Regulatory limits that apply | 100 ppb (Pb, processed meat EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Same structural gap (100 ppb = 0.10 mg/kg). |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Regulatory limits that apply | 0.050 mg/kg (Cd, processed meat EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Same structural gap. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Regulatory limits that apply | 50 ppb (Cd, processed meat EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Same structural gap. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Regulatory limits that apply | 1.0 mg/kg (Cd, bovine kidney EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | EU source page Cd section does not include offal/bovine-kidney rows. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Regulatory limits that apply | 000 ppb (= 1,000 ppb Cd, bovine kidney) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | Same (fragment of "1,000 ppb = 1.0 mg/kg"). EU offal row not in source page. |
| [ingredients/bologna-luncheon-meat.md](../../wiki/ingredients/bologna-luncheon-meat.md) | Regulatory limits that apply | 0.5 mg/kg (Cd, bovine liver EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | EU source page Cd section does not include bovine liver row. |
| [ingredients/bran-cereal-with-raisins.md](../../wiki/ingredients/bran-cereal-with-raisins.md) | Ranges by source, region, and variety | 44 ppb (Cd median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bran-cereal-with-raisins.md](../../wiki/ingredients/bran-cereal-with-raisins.md) | Ranges by source, region, and variety | 42 ppb (Cd p50) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bran-cereal-with-raisins.md](../../wiki/ingredients/bran-cereal-with-raisins.md) | Ranges by source, region, and variety | 26 ppb (Ni median) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bran-cereal-with-raisins.md](../../wiki/ingredients/bran-cereal-with-raisins.md) | Ranges by source, region, and variety | 14 ppb (Ni p50) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bran-cereal-with-raisins.md](../../wiki/ingredients/bran-cereal-with-raisins.md) | Ranges by source, region, and variety | 16 ppb (Pb max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/bran-cereal-with-raisins.md](../../wiki/ingredients/bran-cereal-with-raisins.md) | Ranges by source, region, and variety | 5 ppb (Pb p50) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
