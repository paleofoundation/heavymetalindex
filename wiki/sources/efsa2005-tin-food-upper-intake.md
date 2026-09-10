---
type: source
raw_handle: MFK_efsa-tin-2005-opinion
cite_key: efsa2005-tin-food-upper-intake
title: "Opinion of the Scientific Panel on Dietetic Products, Nutrition and Allergies on a request from the Commission related to the tolerable upper intake level of tin"
authors: [EFSA Scientific Panel on Dietetic Products, Nutrition and Allergies]
year: 2005
publication: "EFSA Journal"
doi: 10.2903/j.efsa.2005.254
access_url: "https://doi.org/10.2903/j.efsa.2005.254"
source_type: regulatory-opinion
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Global Heavy Metal Reports/reports/EU/EFSA_tin_2005_opinion.pdf"
raw_sha256: "a18810f14da442b81b874a4c36da0f67f186f1abcce2f9ad77169d24ab72236e"
metals: [Sn]
ingredients: ["[[ingredients/canned-tomatoes]]", "[[ingredients/canned-fruit-cocktail]]", "[[ingredients/canned-green-beans]]", "[[ingredients/fruit]]", "[[ingredients/vegetables]]"]
products: ["[[products/canned-vegetables]]", "[[products/canned-fruit]]", "[[products/canned-tomatoes]]", "[[products/food-packaging-cans-lids]]", "[[products/category-5-beverages]]"]
matrices: [canned-food, canned-vegetables, canned-fruit, canned-tomatoes, canned-beverages, total-diet-study]
jurisdictions: [EU, GB, FR]
near_duplicates: []
sample_n: null
sample_population: "EFSA opinion summarising dietary tin occurrence/intake literature, including UK 1997 Total Diet Study food-group means and French lacquered/unlacquered canned-food data."
sampling_locations: ["European Union", "United Kingdom", "France"]
sampling_year_range: "1984-1997 literature"
updated: 2026-06-09
---

# EFSA 2005 - tin in canned foods and dietary intake

## Overview

EFSA's Scientific Panel reviewed inorganic tin occurrence, dietary intake, and toxicity evidence to assess whether a tolerable upper intake level could be derived. The opinion is not a new market survey, but it is an A-tier regulatory anchor for tin migration from cans into foods. It identifies tinned fruit and vegetables as the main dietary sources of tin and preserves tin as inorganic tin/elemental Sn context rather than organotin occurrence.

## Key numbers

- UK adult mean tin intake from food was estimated at `1.8 mg/day`, ranging up to about `6 mg/day`; French mean daily intake was estimated at `2.7 mg tin/day`.
- EFSA reports that the main dietary sources of tin are tinned fruit and vegetables.
- Acute gastrointestinal effects were considered more likely with tin concentrations of `250 mg/kg` in canned foods and `150 mg/kg` in canned beverages.
- EU maximum levels for inorganic tin were `200 mg/kg` in canned foods and `100 mg/kg` in canned beverages.
- A UK study found canned fruits, including tomato and tomato products, pineapple, orange, grapefruit, and pear, were most likely to contain elevated tin; tomato products and pineapple categories each had some samples containing more than `250 mg Sn/kg`.
- UK mean upper- and lower-bound estimated total dietary tin intakes for `1976` to `1982` ranged from `4.35-2.41` and `4.42-2.30 mg Sn per day`, respectively.
- UK 1997 Total Diet Study estimated population average tin intake at `1.8 mg/day`; the `97.5 percentile` intake was `6.3 mg/day`.
- UK 1997 TDS Table 1: canned vegetables had mean tin concentration `411 mg/kg fresh weight` and contributed `1.353 mg/day`; fruit products had `7.211 mg/kg fresh weight` and contributed `0.317 mg/day`; total intake was `1.8 mg/day`.
- France: foods preserved in unlacquered cans contained `76.6 ± 36.5 mg/kg`; foods stored in lacquered cans contained `3.2 ± 2.3 mg/kg`; fresh foods contained `0.03 ± 0.03 mg/kg`.
- France: tin intake was estimated at `2.7 mg/day`, equivalent to `0.04 mg/kg body weight`; food stored in tin cans accounted for `98%` of intake while representing `5.6%` of daily food consumption.

## Methods (brief)

This EFSA opinion reviewed existing occurrence, intake, toxicokinetic, and toxicity studies rather than commissioning new sampling. Occurrence/intake evidence included total diet studies, duplicate diet studies, canned-food surveys, and canned beverage/food case reports. The tin values in this page are retained in the original `mg/kg`, `mg/day`, and `mg/kg body weight` units.

## Implications

Certification (HMTc): This source is an A-tier tin regulatory and occurrence-context source for canned-food rows, especially canned vegetables, canned fruit, canned tomatoes, and can/lid packaging. It supports tin as inorganic tin/Sn migration context, not organotin species.

Courses: The paper is useful for showing how can lacquer status and food acidity can dominate tin occurrence while daily dietary intake remains far below concentrations associated with acute gastrointestinal effects.

App: The source can support canned-food and can-packaging tin context, particularly the contrast between unlacquered cans, lacquered cans, and fresh foods.

## Wiki pages this source may touch

- [[products/canned-vegetables]]
- [[products/canned-fruit]]
- [[products/canned-tomatoes]]
- [[products/food-packaging-cans-lids]]
- [[metals/tin]]
- [[metals/tin-inorganic]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/hmi_row_1445.txt`; the summary, dietary-intake section, and Table 1 were re-read before writing.
- Identity checks before creation: DOI `10.2903/j.efsa.2005.254`, raw handle `MFK_efsa-tin-2005-opinion`, raw SHA-256 `a18810f14da442b81b874a4c36da0f67f186f1abcce2f9ad77169d24ab72236e`, and cite key `efsa2005-tin-food-upper-intake` were searched in the linked reference record; no existing source page was found.
- Units are preserved exactly as `mg/kg`, `mg/day`, and `mg/kg body weight`; no ppm conversion was made.
- Speciation: the source concerns inorganic tin/tin salts and tin migration from cans. It is not organotin occurrence and is not collapsed into TBT/DBT.
- Closed vocabulary: no general `canned-foods` product slug exists in the snapshot, so routing uses available canned-vegetable, canned-fruit, canned-tomato, beverage, and can/lid packaging slugs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added |
| [50de6ab217](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab217) | 2026-07-27 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
