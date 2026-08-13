# HMTc Category 35 (Prepared and Packaged Meals) — standard derivation report

Method: HMTc Method v2.0, COMPOSITE form. Each cell is a disclosed read-across from the strictest
applicable sovereign maximum among the subcategory's principal components (or a direct sovereign ML
on the composite form, a substantiated not-material determination, or a control). Never occurrence-
derived. Component anchors are restricted to credible regulators (EU, Codex, FDA, WHO/JECFA, FSANZ,
Health Canada, UK) and filtered for applicability (infant/formula rows are not adult-meal anchors).

Provenance tags: regulatory-alignment | read-across | not-material | control | ratchet.
STAFF / HMTc content — not public wiki (CLAUDE.md Part 19 firewall). Generated from
data/evidence/regulatory_limits.csv via tools/standards/compile-cat35.mjs + cat35-config.json.
Version: cat35-v1.0 (2026-08-13)

### mixed-meals-prepared-foods — Mixed and prepared meals (frozen dinners, boxed meals, ready-to-eat)
- native basis: as consumed / ready-to-eat (wet weight)

| analyte | value (µg/kg) | provenance | binding source | component logic |
|---|---|---|---|---|
| Pb | 100 | read-across | eu2023_pb_root_tuber_vegetables_100 (EU) | vegetable (root/tuber) 100 [EU]; meat (cattle/sheep/pig/poultry) 100 [AU-NZ]; cereal/grain 200 [AU-NZ]; fish/seafood 300 [EU] |
| Cd | 40 | read-across | eu2023_cd_pulses_40 (EU) | pulses/legumes 40 [EU]; meat (cattle/sheep/pig/poultry) 50 [EU]; cereal (barley/rye, strictest cereal) 50 [EU]; vegetable (root/tuber) 100 [EU] |
| tAs | 1000 | read-across | aunz_sch19_tas_cereal_grains_1000 (AU-NZ) | cereal grains 1000 [AU-NZ] |
| iAs | 100 | read-across | eu20251891_ias_fish_other_100 (EU) | fish/seafood 100 [EU]; rice (milled) 150 [EU] |
| tHg | 500 | read-across | eu2023_hg_fish_general_500 (EU) | fish/seafood (muscle meat) 500 [EU] |
| MeHg | n/m | not-material | bounded by tHg | Methylmercury is a component of total mercury (MeHg <= tHg) and its on |
| Ni | 400 | read-across | eu2024_ni_fruiting_veg_400 (EU) | vegetable (fruiting) 400 [EU]; cereal/grain 800 [EU] |
| Sn | control | control | — | Inorganic tin is a tinplate/canned-food migration pathway, not a backg |
| Al | control | control | — | No credible regulator sets an aluminium maximum level for prepared mea |
| Cr | control | control | bounded by Cr-VI | No credible regulator sets a total-chromium maximum level for prepared |
| Cr-VI | n/m | not-material | bounded by Cr | Hexavalent chromium is not stable in a cooked, wet, organic-rich food  |

**Audit / substantiation notes**
  - **tAs substantiation:** Total arsenic is a non-toxicological screen; the toxic species (inorganic arsenic) is controlled separately on the iAs cell at 100 ug/kg. The cereal-grain tAs ML (FSANZ, 1000 ug/kg) is the only applicable credible component anchor for total arsenic.
  - **tHg substantiation:** No credible regulator sets a mercury maximum level for terrestrial meat, cereals, or vegetables; mercury is a seafood-bioaccumulation hazard. A fish-containing prepared meal inherits the Category 6 seafood mercury ceiling (EU 2023/915, 500 ug/kg total mercury). Methylmercury is bounded by this total-mercury ceiling (MeHg cell).

### soups-broths-stocks — Soups, broths, and stocks (canned, dry-mix, bouillon, RTD carton)
- native basis: as consumed / ready-to-serve (reconstituted to serving strength; dry-mix and bouillon assessed as prepared, not as the concentrate)

| analyte | value (µg/kg) | provenance | binding source | component logic |
|---|---|---|---|---|
| Pb | 100 | read-across | eu2023_pb_root_tuber_vegetables_100 (EU) | vegetable (root/tuber) 100 [EU]; meat (cattle/sheep/pig/poultry) 100 [AU-NZ]; cereal/grain (noodle soups) 200 [AU-NZ]; fish/seafood (bisque/chowder) 300 [EU] |
| Cd | 40 | read-across | eu2023_cd_pulses_40 (EU) | pulses/legumes (lentil/split-pea/bean soups) 40 [EU]; meat (cattle/sheep/pig/poultry) 50 [EU]; cereal (barley soups) 50 [EU]; vegetable (root/tuber) 100 [EU] |
| tAs | 1000 | read-across | aunz_sch19_tas_cereal_grains_1000 (AU-NZ) | cereal grains (noodle soups) 1000 [AU-NZ] |
| iAs | 100 | read-across | eu20251891_ias_fish_other_100 (EU) | fish/seafood (bisque/chowder) 100 [EU]; rice (congee/rice soups) 150 [EU] |
| tHg | 500 | read-across | eu2023_hg_fish_general_500 (EU) | fish/seafood (bisque/chowder) 500 [EU] |
| MeHg | n/m | not-material | bounded by tHg | Methylmercury is a component of total mercury (MeHg <= tHg); its only  |
| Ni | 400 | read-across | eu2024_ni_fruiting_veg_400 (EU) | vegetable (fruiting) 400 [EU]; cereal/grain 800 [EU] |
| Sn | 250000 | regulatory-alignment | codex_cxs193_sn_canned_250000 (international) | 250000 [international] |
| Al | control | control | — | No credible regulator sets an aluminium maximum level for soups, stock |
| Cr | control | control | bounded by Cr-VI | No credible regulator sets a total-chromium maximum level for soups or |
| Cr-VI | n/m | not-material | bounded by Cr | Hexavalent chromium is reduced to Cr-III in a cooked, wet, organic-ric |

**Audit / substantiation notes**
  - **tAs substantiation:** Total arsenic is a screen; inorganic arsenic (iAs cell, 100 ug/kg) controls the toxic species. Cereal-grain tAs ML (FSANZ, 1000 ug/kg) is the applicable credible component anchor.
  - **tHg substantiation:** No credible regulator sets a mercury ML for terrestrial-meat or vegetable stock; a seafood bisque or chowder inherits the Category 6 seafood mercury ceiling (EU 2023/915, 500 ug/kg). Methylmercury bounded by this total-mercury ceiling.
  - **Sn substantiation:** The canned-foods tin ML is a DIRECT sovereign limit on the canned form (regulatory-alignment), not a component read-across. Non-canned soup forms (carton RTD, dry mix, bouillon) have no tinplate contact and no tin source; total tin is reported and any non-canned signal triggers packaging investigation.

