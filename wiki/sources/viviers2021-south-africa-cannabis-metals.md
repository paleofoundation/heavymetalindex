---
type: source
raw_handle: MFK_viviers2021
cite_key: viviers2021-south-africa-cannabis-metals
title: "An assessment of heavy metal contaminants related to cannabis-based products in the South African market"
authors: [Viviers HJ, Petzer A, Gordon R]
year: 2021
publication: "Forensic Science International: Reports"
doi: 10.1016/j.fsir.2021.100224
access_url: https://doi.org/10.1016/j.fsir.2021.100224
source_type: peer-reviewed
evidence_tier: B
license: "CC BY-NC-ND 4.0"
raw_path: "raw/Manual Fetch Kimi /June 9/viviers2021.pdf"
metals: [Cd, Pb, tAs, tHg, Co, V, Ni, Tl, Au, Pd, Ir, Os, Rh, Ru, Se, Ag, Pt]
ingredients: ["[[ingredients/herbal-botanicals]]"]
products: ["[[products/supplements-botanicals-herbs]]", "[[products/dietary-supplements]]"]
matrices: [cannabis-based-product, cannabis-edible, cannabis-extract, cannabis-infusion, cannabis-liquid, cannabis-plant-material, cannabis-solid]
jurisdictions: [ZA]
near_duplicates: []
sample_n: 310
sample_population: "Three hundred ten cannabis-based products submitted to a South African contract laboratory, grouped as edible, extract, infusion, liquid, plant material, solid, and other; all samples were analyzed in duplicate as received."
updated: 2026-06-09
sources: 1
audience: [regulator, educator, app]
---

# Viviers et al. 2021 - South African cannabis product metals

## Overview

Viviers et al. analyzed 310 cannabis-based products submitted to a South African private laboratory for Class 1 and Class 2 elemental impurities. The paper reports aggregate detection and source-limit failure counts by product category, rather than individual sample concentration values. Arsenic and mercury are not speciated, so this page records them as total arsenic (tAs) and total mercury (tHg).

## Key numbers

All samples were analyzed as received and reported against USP 232 / ICH Q3D oral and inhalation residue limits. The paper reports limits in `µg/g`; these are source comparison limits, not HMTc thresholds.

| Source comparison limit, Table 1 | Cd | Pb | tAs | tHg | Co | V | Ni |
|---|---:|---:|---:|---:|---:|---:|---:|
| Oral limit | 0.5 µg/g | 0.5 µg/g | 1.5 µg/g | 3 µg/g | 5 µg/g | 10 µg/g | 20 µg/g |
| Inhalation limit | 0.3 µg/g | 0.5 µg/g | 0.2 µg/g | 0.1 µg/g | 0.3 µg/g | 0.1 µg/g | 0.5 µg/g |

Table A1 reports oral-limit failures across all 310 samples:

| Analyte | Total pass | Total fail | Category pattern |
|---|---:|---:|---|
| Cd | 309 | 1 | one extract failed |
| Pb | 270 | 40 | edible 18, extract 12, liquid 1, plant material 9 |
| tAs | 302 | 8 | edible 2, extract 6 |
| tHg | 310 | 0 | no oral-limit failures |
| Co | 310 | 0 | no oral-limit failures |
| V | 309 | 1 | one solid failed |
| Ni | 306 | 4 | extract 3, plant material 1 |

Table A2 applies inhalation limits only to extract, liquid, and plant material categories (`n = 213`):

| Analyte | Total pass | Total fail | Category pattern |
|---|---:|---:|---|
| Cd | 212 | 1 | one extract failed |
| Pb | 191 | 22 | extract 12, liquid 1, plant material 9 |
| tAs | 199 | 14 | extract 11, plant material 3 |
| tHg | 165 | 48 | extract 36, liquid 7, plant material 5 |
| Co | 200 | 13 | extract 4, plant material 9 |
| V | 195 | 18 | extract 12, liquid 1, plant material 5 |
| Ni | 167 | 46 | extract 24, liquid 1, plant material 21 |

Table A3 reports detectable residues across the full dataset:

| Analyte | Present | Not detected | LOD |
|---|---:|---:|---:|
| Cd | 106 | 204 | 0.033 ppm |
| Pb | 196 | 114 | 0.033 ppm |
| tAs | 92 | 218 | 0.184 ppm |
| tHg | 73 | 237 | 0.075 ppm |
| Co | 177 | 133 | 0.039 ppm |
| V | 50 | 260 | 0.079 ppm |
| Ni | 194 | 116 | 0.158 ppm |
| Tl | 117 | 193 | 0.006 ppm |
| Au | 29 | 281 | 0.079 ppm |
| Pd | 19 | 291 | 0.079 ppm |
| Ir | 32 | 278 | 0.079 ppm |
| Os | 22 | 288 | 0.079 ppm |

Table A4 summarizes samples rather than analytes: oral comparison passed 262 and failed 48 of 310 samples; inhalation comparison passed 119 and failed 94 of 213 applicable samples; 273 of 310 samples had at least one detectable heavy-metal residue and 37 had no detectable residue in the tested panel.

## Methods (brief)

The study grouped samples as edible, extract, infusion, liquid, other, plant material, or solid. Approximately `200 mg` of each sample was digested in `10% HNO3` for `1 h` at `100°C`, diluted 35-fold to `7 mL`, and analyzed with internal standards Y and In. Calibration used a blank, five-point calibration curve, and control standards every 10 duplicates and at the end of each sample set. Table A5 reports validation precision, bias/recovery, LOD, and linearity for the tested elements; for example Cd precision was `2.04 %RSD`, Pb `6.31 %RSD`, tAs `4.25 %RSD`, and tHg `5.03 %RSD`.

## Implications

This source provides South Africa market context for cannabis-based product categories, especially aggregate detection and source-limit failure frequencies. It does not publish individual concentration rows, means, medians, or ranges, so downstream evidence extraction should not invent occurrence concentrations from the pass/fail tables. The inhalation-product subset is outside the current food and personal-care product taxonomy, while oral cannabis products can remain visible through broad herbal-botanical and dietary-supplement routing.

## Wiki pages this source may touch

- [[products/supplements-botanicals-herbs]]
- [[products/dietary-supplements]]
- [[ingredients/herbal-botanicals]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic-total]]
- [[metals/mercury-total]]
- [[metals/cobalt]]
- [[metals/vanadium]]
- [[metals/nickel]]
- [[metals/thallium]]
- [[metals/gold]]
- [[metals/palladium]]
- [[metals/platinum]]
- [[metals/silver]]

## Verification notes

- Identity checks before writing found no existing DOI, raw-handle, or cite-key page for `10.1016/j.fsir.2021.100224`, `MFK_viviers2021`, or `viviers2021-south-africa-cannabis-metals`.
- All Key numbers were rechecked against `/tmp/hmi-june9-viviers2021.txt`, extracted with `pdftotext -layout`, especially Tables 1, A1, A2, A3, A4, and A5.
- Speciation check: arsenic and mercury are not speciated; this page uses tAs and tHg and does not infer iAs or MeHg.
- Units are preserved as `µg/g`, `ppm`, `%RSD`, and the source's sample counts. No unit conversions were performed.
- Brand firewall: the dataset is anonymized and no sampled brands are named.
- Missing slug note: the taxonomy snapshot has no cannabis-specific product, ingredient, vape, or inhalation-product slug. Frontmatter uses broad `[[ingredients/herbal-botanicals]]`, `[[products/supplements-botanicals-herbs]]`, and `[[products/dietary-supplements]]`, while cannabis route/form terms are retained only as matrix descriptors.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
