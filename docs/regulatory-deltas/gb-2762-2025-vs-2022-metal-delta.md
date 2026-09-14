# GB 2762-2025 vs GB 2762-2022 - heavy-metal delta

Machine-readable delta of heavy-metal maximum-level provisions between China National Food Safety Standard GB 2762-2022 (with Amendment No. 1) and its successor GB 2762-2025.

- GB 2762-2025: published 2025-09-02, effective 2026-09-02, replaces GB 2762-2022 + Amendment No. 1.
- Primary texts compared cell-by-cell:
  - 2025: `raw/regulatory/cn/china-gb-2762-2025-effective-2026-09-02.pdf`, SHA-256 `85ed0aa521c66e622fa6af20351a348f8862778ae63d3de56f7cbe26a9f90f80`
  - 2022: `raw/regulatory/cn/china-gb-2762-2022-contaminants.pdf`
- Scope: metals only. The foreword's non-metal changes (nitrite in packaged drinking water, nitrite in edible bird's nest, Table 10 presentation, Appendix A) are out of scope for this delta.
- Units: mg/kg as stated in the standard. No value is invented; every cell was read from the primary text extract.

## Changed cells (metals)

The foreword names four heavy-metal changes, all to dried meat products (肉类干制品). All four are the same mechanism change: dried meat products were removed from the application-principle rule that converts a dried product's limit from the fresh-food limit by dehydration/concentration factor. The general meat / meat-product category numeric values are unchanged; what changed is which rule governs dried meat products.

| Analyte | Food category | GB 2762-2022 treatment | GB 2762-2025 treatment | Change |
|---------|---------------|------------------------|------------------------|--------|
| Pb | Dried meat products (肉类干制品) | Limit derived from fresh-meat limit combined with dehydration/concentration factor (application principle 3.5, which named 肉类干制品) | Removed from the dehydration-conversion rule; general meat-products (肉制品) ML 0.3 mg/kg applies directly on an as-is basis | Governing rule changed (converted-from-fresh → direct category ML) |
| Cd | Dried meat products (肉类干制品) | Limit derived from fresh-meat limit combined with dehydration/concentration factor (application principle 3.5) | Removed from the dehydration-conversion rule; general meat and meat-products ML 0.1 mg/kg applies directly | Governing rule changed |
| As (total) | Dried meat products (肉类干制品) | Limit derived from fresh-meat limit combined with dehydration/concentration factor (application principle 3.5) | Removed from the dehydration-conversion rule; general meat and meat-products total-arsenic ML 0.5 mg/kg applies directly | Governing rule changed |
| Cr (total) | Dried meat products (肉类干制品) | Limit derived from fresh-meat limit combined with dehydration/concentration factor (application principle 3.5) | Removed from the dehydration-conversion rule; general meat and meat-products total-chromium ML 1.0 mg/kg applies directly | Governing rule changed |

Application-principle text (verbatim category list):

- 2022 principle 3.5: "对于肉类干制品、干制水产品、干制食用菌 ..." (dried meat products, dried aquatic products, dried edible fungi).
- 2025 principle 3.5: "对于干制水产品、干制食用菌 ..." (dried aquatic products, dried edible fungi only).

## Unchanged cells verified for HMI register supersession

Every GB 2762 cell HMI currently binds in `data/evidence/regulatory_limits.csv` was re-verified against the GB 2762-2025 primary text and is unchanged in value. The 2025 register rows (namespace `china_gb2762_2025_*`, plus `cn_pb_fsmp-1-10yr_150_2025`) supersede the identically-valued 2022 rows.

| Analyte | Food category | GB 2762-2022 | GB 2762-2025 | Change | 2025 register id |
|---------|---------------|--------------|--------------|--------|------------------|
| Cr (total) | Milk powder and modified milk powder (Table 7) | 2.0 mg/kg | 2.0 mg/kg | none | china_gb2762_2025_cr_milk_powder_2000 |
| Cr (total) | Raw/pasteurized/sterilized/modified/fermented milk (Table 7) | 0.3 mg/kg | 0.3 mg/kg | none | china_gb2762_2025_cr_liquid_milk_300 |
| Cr (total) | Cereals/grains (Table 7) | 1.0 mg/kg | 1.0 mg/kg | none | china_gb2762_2025_crtotal_grains_1000 |
| Cr (total) | Beans/legumes (Table 7) | 1.0 mg/kg | 1.0 mg/kg | none | china_gb2762_2025_crtotal_beans_legumes_1000 |
| As (total) | Milk powder and modified milk powder (Table 4) | 0.5 mg/kg | 0.5 mg/kg | none | china_gb2762_2025_tas_milk_powder_500 |
| As (inorganic) | Compound condiment (Table 4) | 0.1 mg/kg | 0.1 mg/kg | none | china_gb2762_2025_ias_compound_condiment_100 |
| Pb | FSMP products for people aged 1-10 years (Table 1, solid basis) | 0.15 mg/kg | 0.15 mg/kg | none | cn_pb_fsmp-1-10yr_150_2025 |
| Pb | Nuts and seeds excl. coffee beans (Table 1) | 0.2 mg/kg | 0.2 mg/kg | none | china_gb2762_2025_pb_nuts_and_seeds_200 |
| Pb | Condiments excl. spices (Table 1) | 1.0 mg/kg | 1.0 mg/kg | none | china_gb2762_2025_pb_condiments_excl_spices_1000 |
| Pb | Spices excl. Sichuan pepper/cassia/mixed (Table 1) | 1.5 mg/kg | 1.5 mg/kg | none | china_gb2762_2025_pb_spices_1500 |
| Cd | Beans/legumes (Table 2) | 0.2 mg/kg | 0.2 mg/kg | none | china_gb2762_2025_cd_beans_legumes_200 |
| Cd | Peanuts (Table 2) | 0.5 mg/kg | 0.5 mg/kg | none | china_gb2762_2025_cd_peanuts_500 |
| Pb | Soy milk / soybean beverage (Table 1) | 0.05 mg/kg | 0.05 mg/kg | none | china_gb2762_2025_pb_soy_milk_50 |

## Supersession note for compilers

After 2026-09-02, GB 2762-2025 is the live China food-contaminant framework. The 13 GB 2762-2022 register rows above carry a `SUPERSEDED by <2025 id>` pointer in their `notes` and are retained as historical comparators; downstream compilers should bind the `china_gb2762_2025_*` / `cn_pb_fsmp-1-10yr_150_2025` rows as the live values. Because every bound value is unchanged, no numeric recompilation is required. The Cat-30 total-chromium read-across anchor (300 µg/kg, from liquid-milk total Cr) is unchanged and remains valid (closes OI-20260825-cat30-cr-gb2762-2025-recheck).
