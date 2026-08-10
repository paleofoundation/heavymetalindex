---
op: lint
check: citation-support-sweep
date: 2026-06-09
model: claude-sonnet-4-6
claims_checked: 42
claims_remaining: ~5012
stopped_at: "bivalve-molluscs / Sources / 0.380 mg/kg (CSV row 165)"
noindex: true
---

supported 29 · mismatch 2 · not-in-source 11 · wrong-source 0. Report-only; no pages edited.

## Summary

**P1 — Banana Cd EU mismatch (2 rows).** The same pome-fruit/listed-fruit Cd tier error found in apple and applesauce (sweep-3 retroactive) appears in the banana page. EU 2023/915 section 3.2.1.2 lists **bananas** at 0.020 mg/kg Cd; banana.md line 187 claims 0.050 mg/kg (50 ppb), using the general-fruit tier (3.2.1.1) instead. This is the same pattern as the apple error: the wiki consistently applies the general-fruit Cd ML to fruits that are explicitly listed in the stricter 3.2.1.2 sub-tier.

Fruits confirmed in EU 3.2.1.2 (0.020 mg/kg Cd): citrus fruits, pome fruits, stone fruits, table olives, kiwi, **bananas**, mangoes, papayas, pineapples. Any wiki page asserting "Cd 0.050 mg/kg" for these should be flagged.

**P2 patterns this batch:**
1. FDA TDS structural gap (4 rows): banana and bivalve-molluscs TDS values.
2. Balsamic-vinegar tAs detection floor (1 row): `ndungu2004` is Pb-only; no tAs data.
3. Beans detection floors citing `[[testing/icp-ms]]` (4 rows): testing wiki page cited, not a `[[sources/...]]` page. No source page available to verify the specific floor values.
4. EU legume regulatory gaps (2 rows): EU 2023/915 source page does not have legume-vegetable Pb or legume Cd extracted rows.

**Supported highlights:**
- Banana occurrence values from `mekonnen2024-ethiopia-fruit-metals` (0.130 ± 0.001 mg/kg Cd, 0.2 mg/kg FAO/WHO limit, 0.773 ± 0.010 mg/kg Cr) — all confirmed in source page key numbers.
- Codex CXS 193-1995 legume Pb/Cd (0.10 mg/kg each, rows 142–144): confirmed in Codex source page — Pb current standard 0.10 (post-CCCF tightening per verification notes p. 297), Cd "Pulses | 0.1" explicitly (line 53).
- Codex Sn 250 mg/kg for canned beans: confirmed in Codex source lines 172–174.
- `han2024-nickel-zhejiang-china` source confirms "GB 2762-2022 1 mg/kg national standard" for Ni in beans.
- All beet EU regulatory values (Pb 100 ppb, Cd 100 ppb, Sn 200/50 mg/kg for canned) and FDA CTZ 20 ppb — confirmed by source pages.
- EFSA 2009 bivalve-molluscs values (0.380, 0.093, 0.285 mg/kg and 4.6 µg/kg bw/week) — confirmed in source page.
- EU 2023/915 bivalve regulatory values (Cd 1.0 mg/kg, Pb 1.50 mg/kg, Hg 0.50 mg/kg) — confirmed in source page sections 3.2.14.6, 3.1.15.4, 3.3.1.1.
- Codex PTMI 25 µg Cd/kg bw/month confirmed in codex-cxs-193-1995 source line 39.

---

## P1 — mismatch / wrong-source

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|
| [ingredients/banana.md](../../wiki/ingredients/banana.md) | Regulatory limits that apply | 0.050 mg/kg (Cd) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | mismatch | EU 2023/915 section 3.2.1.2 lists "bananas" with a Cd ML of **0.020 mg/kg**. Banana.md uses the general-fruit tier (3.2.1.1 = 0.050 mg/kg). Same systematic error as apple and applesauce (documented in sweep-3). Correct EU Cd ML for banana is 0.020 mg/kg (20 ppb). |
| [ingredients/banana.md](../../wiki/ingredients/banana.md) | Regulatory limits that apply | 50 ppb (Cd) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | mismatch | 50 ppb = 0.050 mg/kg. Same error. EU Cd ML for banana under 3.2.1.2 is 20 ppb (0.020 mg/kg). |

---

## P2 — not-in-source

| Page | Section | Claim | Cited source | Verdict | Note |
|---|---|---|---|---|---|
| [ingredients/balsamic-vinegar.md](../../wiki/ingredients/balsamic-vinegar.md) | Mitigation options | 5 ppb (tAs ICP-MS detection floor) | [ndungu2004-lead-vinegar-icpms-gfaas](../../wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md) | not-in-source | Ndungu 2004 is Pb-only. The source page contains no tAs data or tAs detection floor. Same as rows 122–123 from sweep-3 (Pb 5 ppb and Al 50 ppb also not-in-source). |
| [ingredients/banana.md](../../wiki/ingredients/banana.md) | Why this commodity accumulates heavy metals | 3.2 ppb (tAs max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | FDA TDS source page body does not enumerate per-food values. Value (banana tAs max, TDS Food 80, n=27) confirmed in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Systemic gap — see sweeps 1–3. |
| [ingredients/banana.md](../../wiki/ingredients/banana.md) | Why this commodity accumulates heavy metals | 140 ppb (Ni max) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/banana.md](../../wiki/ingredients/banana.md) | Why this commodity accumulates heavy metals | 57 ppb (Ni p90) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. |
| [ingredients/banana.md](../../wiki/ingredients/banana.md) | Ingredient-derivative risk | 3.2 ppb (tAs max, cross-reference) | [fda2022-tds-elements-fy2018-fy2020](../../wiki/sources/fda2022-tds-elements-fy2018-fy2020.md) | not-in-source | Same structural gap. Duplicate of Why-section claim in a different section. |
| [ingredients/beans.md](../../wiki/ingredients/beans.md) | Mitigation options | 5 ppb (Pb ICP-MS detection floor) | [testing/icp-ms] | not-in-source | Citation is to `[[testing/icp-ms]]` (a testing methodology wiki page), not a `[[sources/...]]` page. No source page to verify against. Detection floor value not attributable to a specific source. |
| [ingredients/beans.md](../../wiki/ingredients/beans.md) | Mitigation options | 1 ppb (Cd ICP-MS detection floor) | [testing/icp-ms] | not-in-source | Same — testing wiki page cited, not a source page. |
| [ingredients/beans.md](../../wiki/ingredients/beans.md) | Mitigation options | 50 ppb (Sn ICP-MS detection floor) | [testing/icp-ms] | not-in-source | Same — testing wiki page cited, not a source page. |
| [ingredients/beans.md](../../wiki/ingredients/beans.md) | Mitigation options | 50 ppb (Ni ICP-MS detection floor) | [testing/icp-ms] | not-in-source | Same — testing wiki page cited, not a source page. |
| [ingredients/beans.md](../../wiki/ingredients/beans.md) | Regulatory limits that apply | 0.10 mg/kg (Pb, legumes EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | EU source page extracted Lead rows do not include a legume or pulse category. "Legume vegetables" Pb ML not in extracted Key numbers table. |
| [ingredients/beans.md](../../wiki/ingredients/beans.md) | Regulatory limits that apply | 0.040 mg/kg (Cd, legumes EU) | [eu-2023-915-contaminants-maximum-levels](../../wiki/sources/eu-2023-915-contaminants-maximum-levels.md) | not-in-source | EU source page extracted Cd rows do not include a legume or pulse category. No 0.040 mg/kg row for legumes in the Key numbers table. (0.040 mg/kg appears in section 3.2.20 for baby food/cereal, not legumes.) |
