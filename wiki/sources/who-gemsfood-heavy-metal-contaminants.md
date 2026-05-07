---
type: source
cite_key: who-gemsfood-heavy-metal-contaminants
title: "GEMS/Food Contaminants database heavy-metal exports"
authors: [World Health Organization]
year: 2026
publication: "GEMS/Food Contamination Monitoring and Assessment Programme"
source_type: dataset
evidence_tier: A
license: public-reference-only
access_url: https://extranet.who.int/gemsfood/?DisplayFormat=1
program_url: https://www.who.int/teams/nutrition-and-food-safety/databases/global-environment-monitoring-system-food-contamination
raw_path: raw/reports/gemsfood-contaminants
data_path: raw/reports/gemsfood-contaminants/normalized/who_gemsfood_heavy_metals_samples.csv
summary_path: data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv
export_manifest_path: data/evidence/who_gemsfood_heavy_metals_raw_exports.csv
metals: [Al, Cd, Cr, DMA, Hg_unspecified, MMA, MeHg, Ni, Pb, Sn, iAs, iHg, oAs, tAs, tHg]
jurisdictions: [WHO, Global]
updated: 2026-05-07
---

# WHO GEMS/Food - Heavy-Metal Contaminant Exports

## Summary

The WHO GEMS/Food Contaminants database is an official OPAL-web system for accessing contaminant levels in foods. This ingest preserves 193 CSV export files from GEMS/Food and normalizes 2,109,234 heavy-metal occurrence rows into `raw/reports/gemsfood-contaminants/normalized/who_gemsfood_heavy_metals_samples.csv`, with 14,027 grouped food/contaminant summaries in `data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv`.

## Key Numbers

- Contaminants loaded: 15 (Aluminium; Arsenic (Dimethylarsinic acid); Arsenic (Monomethylarsonic Acid); Arsenic (inorganic); Arsenic (organic); Arsenic (total); Cadmium; Chromium; Lead; Mercury; Mercury (inorganic); Methyl mercury; Nickel; Tin; Total mercury).
- Food-category coverage: 24 GEMS food categories.
- Sample years: 1900-2026.
- Non-detect rows preserved: 204,650; left-censored rows preserved: 0.
- Unit review rows: 273 rows were retained but not converted to ug/kg because the unit is not a supported mass-per-mass concentration.
- Year review rows: 7 rows were retained but excluded from displayed year ranges because their sample year is missing, before 1900, or after 2026.
- Extreme-value review rows: 5 rows were retained in the normalized extract but excluded from lower-bound summary statistics because their converted concentration exceeds 10,000,000 ug/kg.

| Metal/species | Highest lower-bound food summaries |
| --- | --- |
| Al | Tea, green (WPRO): N=120, P95=1530500, max=1980000 ug/kg; Anise seed (WPRO): N=2, P95=1008100, max=1030000 ug/kg; Marjoram (WPRO): N=4, P95=544750, max=547000 ug/kg |
| Cd | Composite food NES (Codex Committee Near-East): N=2, P95=25650, max=27000 ug/kg; Composite food NES (EMRO): N=2, P95=25650, max=27000 ug/kg; Honey (Codex Committee Near-East): N=7, P95=25289, max=36100 ug/kg |
| Cr | Ginger, root (WPRO): N=15, P95=6630, max=8800 ug/kg; HERBS (WPRO): N=20, P95=2325, max=6600 ug/kg; Pepper (black, white) (WPRO): N=12, P95=2172, max=2700 ug/kg |
| DMA | Algae (EURO): N=111, P95=3029, max=4812 ug/kg; Prepared salads (EURO): N=6, P95=2070, max=2070 ug/kg; Meat-based meals (EURO): N=13, P95=1667, max=2379 ug/kg |
| Hg_unspecified | Eels (WPRO): N=1, P95=110000, max=110000 ug/kg; Cattle meat (WPRO): N=11, P95=36320, max=56640 ug/kg; Fish, sea food, amphibian reptile snail or insect NES (WPRO): N=2, P95=25654, max=27000 ug/kg |
| MMA | Fish, sea food, amphibian reptile snail or insect NES (EURO): N=15, P95=4.309, max=7.954 ug/kg; MARINE FISHES (EURO): N=8, P95=1.014, max=1.56 ug/kg; Oysters (including cupped oysters) (EURO): N=27, P95=0.6144, max=0.685 ug/kg |
| MeHg | MARINE FISHES (WPRO): N=960, P95=2012, max=19000 ug/kg; FISHES (EURO): N=450, P95=1500, max=3000 ug/kg; Fish, sea food, amphibian reptile snail or insect NES (EURO): N=37, P95=1094, max=1730 ug/kg |
| Ni | Sunflower seed (EURO): N=1, P95=2534, max=2534 ug/kg; Sunflower seed (European Union): N=1, P95=2534, max=2534 ug/kg; DRIED FRUITS (EURO): N=2, P95=1307, max=1370 ug/kg |
| Pb | Sugar and confectionary NES (EURO): N=26, P95=70750, max=90000 ug/kg; SUGAR (EURO): N=151, P95=29258, max=102300 ug/kg; Bay leaves (SEARO): N=7, P95=13819, max=15460 ug/kg |
| Sn | Apricot (WPRO): N=8, P95=125850, max=150000 ug/kg; Pear (WPRO): N=21, P95=110000, max=140000 ug/kg; Pineapple (WPRO): N=2, P95=89000, max=89000 ug/kg |
| iAs | Other foods (foods which cannot be included in any other group) (WPRO): N=5, P95=85900, max=87000 ug/kg; Vegetables and vegetable products NES (EURO): N=197, P95=72423, max=113000 ug/kg; Dietary supplements (European Union): N=10, P95=44485, max=52000 ug/kg |
| iHg | Fish, sea food, amphibian reptile snail or insect NES (EURO): N=11, P95=2295, max=3090 ug/kg; Tuna (EURO): N=13, P95=1658, max=2340 ug/kg; Tuna (EURO): N=9, P95=1434, max=1990 ug/kg |
| oAs | Crabs (PAHO): N=22, P95=18380, max=23532 ug/kg; Haddock (PAHO): N=6, P95=9194, max=9941 ug/kg; Lobsters (PAHO): N=35, P95=9183, max=10443 ug/kg |
| tAs | Rays (EURO): N=24, P95=189750, max=257000 ug/kg; Rays (European Union): N=24, P95=189750, max=257000 ug/kg; Other foods (foods which cannot be included in any other group) (WPRO): N=5, P95=154200, max=156000 ug/kg |
| tHg | Fish, sea food, amphibian reptile snail or insect NES (EURO): N=2587, P95=1095, max=59000 ug/kg; FISHES (EURO): N=19339, P95=900.3, max=1539000 ug/kg; Tuna (EURO): N=2622, P95=821.1, max=4100 ug/kg |

## Structured Data Extract

- `raw/reports/gemsfood-contaminants/normalized/who_gemsfood_heavy_metals_samples.csv`: normalized row-level extract. Original result text, unit, LOD, LOQ, WHO region, food identifiers, food state, basis, QA field, and serial number are retained.
- `data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv`: per-contaminant/per-food/per-region lower-bound summaries. Exact numeric rows are used as reported unless flagged for extreme-value review; GEMS `ND` and left-censored rows are carried as zero for lower-bound summary statistics while their LOD/LOQ/censoring fields remain separate.
- `data/evidence/who_gemsfood_heavy_metals_raw_exports.csv`: raw export manifest with row counts, access date, source query, raw path, and SHA-256 hash for each CSV export.

## Methods

The downloader recreates the public GEMS/Food search URL for each contaminant and posts the site's built-in "Export to file (csv)" action. The cleaner keeps the raw CSV files under `raw/reports/gemsfood-contaminants`, deduplicates overlapping symbol/name exports by serial and row content, maps contaminants to HMI metal/species codes, and converts supported mass-per-mass units to ug/kg. It does not infer country, brand, lot, or regulatory compliance from these rows.

## Limitations

GEMS/Food is a contributed global monitoring database, not a harmonized retail audit. Public exports expose WHO region rather than full country in this search view, and the rows can mix years, food states, origins, representativeness classes, and analytical QA status. Generic mercury rows remain flagged for speciation review; chromium rows are total chromium, not chromium VI. Organic arsenic, dimethylarsinic acid, monomethylarsonic acid, inorganic mercury, uranium, and other broader elements are preserved as occurrence evidence but are not all part of the active HMTc Category 1 analyte panel.

<!-- BEGIN: hmi-gemsfood-routed-pages -->
## Routed Public Pages

The first promotion pass routes arsenic occurrence context from the cleaned GEMS/Food summary table to high-confidence HMI pages: [[metals/arsenic-inorganic]], [[metals/arsenic-total]], [[ingredients/rice]], [[products/baby-cereals-dry-rice-based]], [[products/mixed-meals-rice-containing]], [[ingredients/algae-seaweed]], [[ingredients/fish]], [[ingredients/seafood]], [[ingredients/bivalve-molluscs]], [[ingredients/fruit-juice]], [[ingredients/apple]], [[ingredients/apple-juice]], [[products/fruit-juices-apple-containing]], [[ingredients/water]], [[ingredients/vegetables]], [[ingredients/root-vegetables]], [[ingredients/leafy-greens]], and [[ingredients/wild-mushrooms]].

The route ledger is stored in `data/evidence/who_gemsfood_arsenic_page_routes.csv`. These routed rows remain occurrence context only: no brand claims, direct legal exceedance reads, or HMTc standards values are inferred from GEMS/Food.
<!-- END: hmi-gemsfood-routed-pages -->

## Use Boundaries

This source is strong for screening, source discovery, gap analysis, and cross-region occurrence context. It should not be used for brand claims, product pass/fail claims, HMTc thresholds, or direct regulatory exceedance claims without a separate matrix-specific review.

## Wiki Pages Updated On Ingest

- [[sources/who-gemsfood-heavy-metal-contaminants]]
- [[sources/index]]
- [[log]]
