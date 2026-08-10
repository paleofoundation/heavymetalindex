---
op: lint
check: citation-support-sweep
date: 2026-06-09
model: claude-sonnet-4-6
claims_checked: 42
claims_remaining: 5095
stopped_at: "avocado / Regulatory limits that apply (50 ppb, CSV data row 83)"
noindex: true
---

supported 21 · mismatch 0 · not-in-source 21 · wrong-source 0. Report-only; no pages edited.

All 21 P2 findings are the FDA TDS source-page body-gap pattern (documented in batch 1): `fda2022-tds-elements-fy2018-fy2020` source page body does not enumerate per-food occurrence values; the specific values are in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Asparagus (10 rows) and avocado (11 rows) are affected. The pattern is systemic and does not indicate data errors — the ingredient pages themselves carry inline FDA TDS Occurrence tables that confirm the values.

---

## P2 findings — not-in-source

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 10 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Cd median (TDS Food 115, n=27). FDA TDS source page body does not enumerate per-food values; in referenced CSV. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 39.2 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Cd p90. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 54 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Cd max. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 130 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Ni median. Nearest citation is FDA 2022 (preceding Cd values); Ni sentence has no trailing citation. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 240 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Ni max. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 0 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Pb p90. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 3.01 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Pb p95. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 4.3 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus Pb max. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 3.5 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus tAs median. Same structural gap. |
| [asparagus](../../wiki/ingredients/asparagus.md) | Why this commodity accumulates heavy metals | 10 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Asparagus tAs max. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 180 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Ni median (n=27). FDA TDS source page body does not enumerate per-food values; in referenced CSV. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 374 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Ni p90. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 580 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Ni max. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 5.4 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Cd median. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 59 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Cd max. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 25.6 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado tAs p90. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 50 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado tAs max. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 12 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Pb max. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Why this commodity accumulates heavy metals | 0 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Pb p90. Same structural gap. |
| [avocado](../../wiki/ingredients/avocado.md) | Ingredient-derivative risk | 180 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Ni median cross-referenced in Ingredient-derivative section. Same structural gap as Why-section rows above. |
| [avocado](../../wiki/ingredients/avocado.md) | Ingredient-derivative risk | 580 ppb | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Avocado Ni max cross-referenced in Ingredient-derivative section. Same structural gap. |
