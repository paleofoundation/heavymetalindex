---
type: regulation
rule_id: eu2023-contaminants-maximum-levels
title: "EU Regulation 2023/915 maximum levels for contaminants in food"
jurisdiction: EU
authority: European Commission
status: maximum levels
source_page: sources/eu-2023-915-contaminants-maximum-levels
source_url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915"
metals: [Pb, Cd, tHg, iAs, tAs, Sn, Ni]
aliases: [eu-2023-915, regulations/eu-2023-915, eu-2023-915-contaminants]
audience: [regulator, educator, commercial, app, legal]
wiki_doi: null
updated: 2026-06-03
---

# EU Regulation 2023/915 Maximum Levels

## Overview

Commission Regulation (EU) 2023/915 is the EU contaminants maximum-level framework for food. It is binding in its entirety and directly applicable in Member States. For HMI and HMTc, it is an external legal benchmark: it can sit next to field findings, but it is not an HMTc threshold.

The local source PDF is the original Official Journal text. Because EU regulations can be amended, legal users should also check the current EUR-Lex consolidated version before relying on a value in a live dispute or compliance decision. HMI preserves the original PDF hash on [[sources/eu-2023-915-contaminants-maximum-levels]]. The framework has since been amended to add nickel: Commission Regulation (EU) 2024/1987 of 30 July 2024 inserted a full nickel entry (Annex I, point 3.6) into 2023/915, applying from 1 July 2025 (1 July 2026 for cereals). Those levels are reproduced in the Nickel section below and on [[regulations/eu-2024-1987-nickel-maximum-levels]]; their primary source is [[sources/eu-2024-1987-nickel-maximum-levels]].

## Enforcement Structure

| Topic | EU 2023/915 position | HMI handling |
| --- | --- | --- |
| Legal force | Binding maximum levels. Covered food above the applicable Annex I level may not be placed on the market, used as a raw material or ingredient, or mixed with compliant food. | Label as "EU maximum level", not as guidance. |
| Basis | Maximum levels generally apply to food as placed on the market and to the edible part, unless Annex I says otherwise. | Product pages must preserve basis: powder-as-placed, liquid/ready-to-use, wet weight, dry matter, or edible part. |
| Processed/compound foods | Article 3 requires concentration, dilution, processing factors, ingredient proportions, and analytical LOQ where no specific EU maximum level exists. | Do not silently map ingredient limits onto compound products without a processing/basis note. |
| Infant/young-child food | The recitals call for the lowest achievable maximum levels for this vulnerable group; Article 3 allows Member States to set stricter levels where no EU level exists. | Treat infant/child rows as high-priority legal and HMTc context. |
| Detoxification | Chemical detoxification of foods containing Annex I contaminants is prohibited. | Useful for mitigation sections: prevention/reduction is acceptable; chemical detoxification is not. |

## Product-Facing Metal Limits

Values below are normalized to `ug/kg` for comparison tables. The regulation itself states values mostly in `mg/kg`.

| Product scope | Pb | Cd | iAs | Sn | Basis / caveat |
| --- | ---: | ---: | ---: | ---: | --- |
| Infant formulae, follow-on formulae, young-child formulae, powder | 20 | 10 for cow-milk protein or hydrolysate; 20 for soy protein isolate | 20 |  | Product as placed on market. |
| Infant formulae, follow-on formulae, young-child formulae, liquid | 10 | 5 for cow-milk protein or hydrolysate; 10 for soy protein isolate | 10 |  | Product as placed on market. |
| Drinks for infants and young children, liquid/reconstituted, excluding formula | 20 | 20 |  |  | Ready to use; includes fruit juices for Pb/Cd rows. |
| Baby food and processed cereal-based food for infants and young children | 20 | 40 | 20 for baby food |  | Product as placed on market. The iAs row is listed for "baby food"; processed cereal-based food should not be inferred where the row text does not say so. |
| Canned infant formula, canned follow-on formula, canned young-child formula |  |  |  | 50000 | Except canned dried and canned powdered products. |
| Canned baby food and canned processed cereal-based food |  |  |  | 50000 | Except canned dried and canned powdered products. |
| Canned foods other than canned beverages |  |  |  | 200000 | Inorganic tin. Except canned dried and canned powdered products. The general canned-food tin ceiling. |
| Canned beverages, including canned fruit and vegetable juices |  |  |  | 100000 | Inorganic tin. Except canned dried and canned powdered products. |
| Fruit juices and fruit nectars | 30 for juices other than exclusively berries/small fruits; 50 for berries/small fruits |  | 20 |  | Wet weight; concentrated juice applies as reconstituted. |
| Non-alcoholic rice-based drinks |  |  | 30 |  | Current rice-drink iAs page: [[regulations/eu2023-arsenic-rice-based-drinks]]. |

_Inorganic-tin rows (200 mg/kg canned foods other than beverages, 100 mg/kg canned beverages, 50 mg/kg canned infant/follow-on/young-child formula and canned baby food, shown above normalized to ug/kg) from Commission Regulation (EU) 2023/915 Annex I; the values are carried forward unchanged from Reg (EC) 1881/2006 section 3.4 and were verified 2026-06-03 against the legislation.gov.uk retained-EU-law reproduction of the identical Annex. All exclude canned dried and canned powdered products. The 200 and 100 mg/kg general rows were previously missing from this page and are the highest-volume tin ceilings._

## Ingredient And Commodity Metal Limits

Selected HMTc-relevant commodity rows:

| Commodity or matrix | Metal/species | EU maximum level | Normalized value | Basis / caveat |
| --- | --- | ---: | ---: | --- |
| Rice destined for food for infants and young children | iAs | 0.10 mg/kg | 100 ug/kg | Rice ingredient/commodity row, not a finished cereal pass/fail row. |
| Non-parboiled milled rice | iAs | 0.15 mg/kg | 150 ug/kg | Rice as defined in Codex Standard 198-1995. |
| Parboiled rice, husked rice, rice flour | iAs | 0.25 mg/kg | 250 ug/kg | Rice as defined in Codex Standard 198-1995. |
| Rice waffles, wafers, crackers, cakes, flakes, popped breakfast rice | iAs | 0.30 mg/kg | 300 ug/kg | Finished rice-product row. |
| Cereals, except specified higher/lower rows | Cd | 0.10 mg/kg | 100 ug/kg | Exemptions for beer/distillate use where residue is not food. |
| Rice, quinoa, wheat bran, wheat gluten | Cd | 0.15 mg/kg | 150 ug/kg | Commodity row. |
| Durum wheat | Cd | 0.18 mg/kg | 180 ug/kg | Commodity row. |
| Wheat germ | Cd | 0.20 mg/kg | 200 ug/kg | Commodity row. |
| Root and tuber vegetables, general | Pb / Cd | 0.10 / 0.10 mg/kg | 100 / 100 ug/kg | Wet weight; after washing and edible-part separation; potatoes apply to peeled potatoes. |
| Leaf vegetables | Pb / Cd | 0.30 / 0.10 mg/kg | 300 / 100 ug/kg | Wet weight; after washing and edible-part separation. |
| Spinaches and similar leaves, mustard seedlings, fresh herbs | Cd | 0.20 mg/kg | 200 ug/kg | Wet weight; after washing and edible-part separation. |
| Linseeds and sunflower seeds | Cd | 0.50 mg/kg | 500 ug/kg | Oilseed row. |
| Cocoa powder / drinking chocolate ingredient | Cd | 0.60 mg/kg | 600 ug/kg | Product placed on market. |
| Milk chocolate <30 percent dry cocoa solids | Cd | 0.10 mg/kg | 100 ug/kg | Product placed on market. |
| Chocolate <50 percent dry cocoa solids; milk chocolate >=30 percent | Cd | 0.30 mg/kg | 300 ug/kg | Product placed on market. |
| Chocolate >=50 percent dry cocoa solids | Cd | 0.80 mg/kg | 800 ug/kg | Product placed on market. |
| Bivalve molluscs | Pb / Cd | 1.50 / 1.0 mg/kg | 1500 / 1000 ug/kg | Wet weight; for Pecten maximus applies to adductor muscle and gonad. |
| Muscle meat of fish, general | Pb / Cd / Hg | 0.30 / 0.050 / 0.50 mg/kg | 300 / 50 / 500 ug/kg | Wet weight; mercury and cadmium have species-specific exceptions. |
| Lower-mercury listed fish group | Hg | 0.30 mg/kg | 300 ug/kg | Includes cod, herring, mackerel, salmon/trout species listed in Annex I. |
| Higher-mercury listed fish group | Hg | 1.0 mg/kg | 1000 ug/kg | Includes tuna, shark, swordfish, marlin and other listed species. |
| Wild fungi | Pb / Cd | 0.80 / 0.50 mg/kg | 800 / 500 ug/kg | Wet weight; after washing and edible-part separation. |
| Cultivated common/oyster/shiitake fungi | Pb | 0.30 mg/kg | 300 ug/kg | Wet weight; after washing and edible-part separation. |
| Cultivated fungi, general except oyster/shiitake | Cd | 0.050 mg/kg | 50 ug/kg | Wet weight; after washing and edible-part separation. |
| Oyster and shiitake mushroom | Cd | 0.15 mg/kg | 150 ug/kg | Wet weight; after washing and edible-part separation. |
| Liver of bovine animals, sheep, pig, poultry, horse | Cd | 0.50 mg/kg | 500 ug/kg | Animal-origin commodity row. |
| Kidney of bovine animals, sheep, pig, poultry, horse | Cd | 1.0 mg/kg | 1000 ug/kg | Animal-origin commodity row. |
| Fats and oils, including milk fat | Pb | 0.10 mg/kg | 100 ug/kg | Covers olive oil, vegetable/cooking oils, and the milk-fat fraction of butter/ghee. Product as placed on market. HMTc Cat 7 rows: olive-oil, cooking-oils-other, butter-and-ghee. |
| Salt | Pb / Cd | 1.0 / 0.50 mg/kg | 1000 / 500 ug/kg | General food-grade salt. Cd row also listed on [[regulations/eu-2023-915-cadmium]]. HMTc Cat 7 row: salt. |
| Unrefined salt (fleur de sel, grey salt, manually harvested) | Pb | 2.0 mg/kg | 2000 ug/kg | Higher allowance for traditional unrefined salt. |
| Fruit spices | Pb | 0.60 mg/kg | 600 ug/kg | Dried spice botanical category (e.g., paprika, allspice). HMTc Cat 7 row: spices. |
| Root and rhizome spices | Pb | 1.50 mg/kg | 1500 ug/kg | Dried spice botanical category (e.g., turmeric, ginger). HMTc Cat 7 row: spices. |
| Bark spices | Pb | 2.0 mg/kg | 2000 ug/kg | Dried spice botanical category (e.g., cinnamon, cassia). HMTc Cat 7 row: spices. |
| Bud spices | Pb | 1.0 mg/kg | 1000 ug/kg | Dried spice botanical category (e.g., cloves). HMTc Cat 7 row: spices. |
| Flower pistil spices | Pb | 1.0 mg/kg | 1000 ug/kg | Dried spice botanical category (e.g., saffron). HMTc Cat 7 row: spices. |
| Seed spices | Pb | 0.90 mg/kg | 900 ug/kg | Dried spice botanical category (e.g., cumin, coriander, fennel). HMTc Cat 7 row: spices. |

_Cat 7 Pb rows (fats/oils, salt, spice botanical tiers) and salt Cd transcribed from Commission Regulation (EU) 2023/915 Annex I via EUR-Lex (eli/reg/2023/915), 2026-06-02; cross-checked against Eurofins regulatory summary for the spice tiers. Pending human spot-check against the consolidated Annex._

## Nickel Maximum Levels (added by Regulation (EU) 2024/1987)

Nickel was not in the original 2023/915 framework. Commission Regulation (EU) 2024/1987 of 30 July 2024 (OJ L, 31.7.2024) added the complete nickel entry as Annex I point 3.6, applying from 1 July 2025 for all rows except cereals (points 3.6.11.1–3.6.11.5), which apply from 1 July 2026. The values below are transcribed from the primary Official Journal text; primary source [[sources/eu-2024-1987-nickel-maximum-levels]], regulation page [[regulations/eu-2024-1987-nickel-maximum-levels]]. Vegetable rows apply to wet weight after washing and separating the edible part; tree-nut and oilseed rows apply to the edible part and exempt material destined for crushing where the pressed residue is not placed on the market as food; infant, baby-food and processed-cereal rows apply to the product as placed on the market.

| Annex code | Food category | Ni ML | Normalized | Applies from |
| --- | --- | ---: | ---: | --- |
| 3.6.1.1 | Tree nuts except 3.6.1.2 | 3.5 mg/kg | 3500 ug/kg | 1 Jul 2025 |
| 3.6.1.2 | Chestnuts, pine nuts, walnuts, Brazil nuts, cashew nuts | 10 mg/kg | 10000 ug/kg | 1 Jul 2025 |
| 3.6.2 | Root, tuber and bulb vegetables | 0.90 mg/kg | 900 ug/kg | 1 Jul 2025 |
| 3.6.3 | Fruiting vegetables | 0.40 mg/kg | 400 ug/kg | 1 Jul 2025 |
| 3.6.4 | Brassica vegetables | 0.50 mg/kg | 500 ug/kg | 1 Jul 2025 |
| 3.6.5.1 | Leafy vegetables except fresh herbs | 0.50 mg/kg | 500 ug/kg | 1 Jul 2025 |
| 3.6.5.2 | Fresh herbs | 1.2 mg/kg | 1200 ug/kg | 1 Jul 2025 |
| 3.6.6.1 | Legume vegetables except soy beans/edamame | 1.0 mg/kg | 1000 ug/kg | 1 Jul 2025 |
| 3.6.6.2 | Soy beans / edamame (*Glycine max*) | 6.0 mg/kg | 6000 ug/kg | 1 Jul 2025 |
| 3.6.7 | Stem vegetables | 0.40 mg/kg | 400 ug/kg | 1 Jul 2025 |
| 3.6.8.1 | Seaweed except wakame | 30 mg/kg | 30000 ug/kg | 1 Jul 2025 |
| 3.6.8.2 | Wakame | 40 mg/kg | 40000 ug/kg | 1 Jul 2025 |
| 3.6.9.1 | Pulses except dry beans/lupins | 4.0 mg/kg | 4000 ug/kg | 1 Jul 2025 |
| 3.6.9.2 | Dry beans and dry lupins / lupini beans | 12 mg/kg | 12000 ug/kg | 1 Jul 2025 |
| 3.6.10.1 | Sunflower seed | 8.0 mg/kg | 8000 ug/kg | 1 Jul 2025 |
| 3.6.10.2 | Peanuts | 12 mg/kg | 12000 ug/kg | 1 Jul 2025 |
| 3.6.10.3 | Soy beans | 15 mg/kg | 15000 ug/kg | 1 Jul 2025 |
| 3.6.11.1 | Cereals except 3.6.11.2–3.6.11.5 | 0.80 mg/kg | 800 ug/kg | **1 Jul 2026** |
| 3.6.11.2 | Durum wheat and rice except husked rice | 1.5 mg/kg | 1500 ug/kg | **1 Jul 2026** |
| 3.6.11.3 | Husked rice | 2.0 mg/kg | 2000 ug/kg | **1 Jul 2026** |
| 3.6.11.4 | Pseudo cereals and millet | 3.0 mg/kg | 3000 ug/kg | **1 Jul 2026** |
| 3.6.11.5 | Oats (grains without husk; ×1.5 → 7.5 with husk) | 5.0 mg/kg | 5000 ug/kg | **1 Jul 2026** |
| 3.6.12.1 | Milk chocolate < 30 % dry cocoa solids | 2.5 mg/kg | 2500 ug/kg | 1 Jul 2025 |
| 3.6.12.2 | Milk chocolate ≥ 30 % dry cocoa solids, and chocolate | 7.0 mg/kg | 7000 ug/kg | 1 Jul 2025 |
| 3.6.12.3 | Cocoa powder / fat-reduced cocoa powder (drinking chocolate) | 15 mg/kg | 15000 ug/kg | 1 Jul 2025 |
| 3.6.13.1 | Infant/young-child formula, powder, except soy-isolate | 0.25 mg/kg | 250 ug/kg | 1 Jul 2025 |
| 3.6.13.2 | Infant/young-child formula, powder, soy protein isolate | 0.40 mg/kg | 400 ug/kg | 1 Jul 2025 |
| 3.6.13.3 | Infant/young-child formula, liquid | 0.10 mg/kg | 100 ug/kg | 1 Jul 2025 |
| 3.6.14 | Processed cereal-based food for infants and young children | 3.0 mg/kg | 3000 ug/kg | 1 Jul 2025 |
| 3.6.15 | Baby food except 3.6.16 | 0.50 mg/kg | 500 ug/kg | 1 Jul 2025 |
| 3.6.16.1 | Fruit/vegetable juices and nectars, general | 0.25 mg/kg | 250 ug/kg | 1 Jul 2025 |
| 3.6.16.2 | Juices/nectars from passion fruit, cocoa fruit, small fruits/berries, coconut water | 1.0 mg/kg | 1000 ug/kg | 1 Jul 2025 |

There is no nickel maximum level for many finished composite or beverage products (for example ready-to-drink chocolate milk, canned composite meals, coffee, tea, or ready-to-eat soups). Some of those are instead covered by the monitoring programme under [[regulations/eu-2024-907-nickel-monitoring|Recommendation (EU) 2024/907]] (2025–2027); for others, the nickel content of constituent ingredients is governed by the rows above and compounded under Article 3. Do not read the absence of a finished-product nickel row as "the EU does not regulate nickel": the EU does, via the entry above.

## Why This Matters For Product Pages

The most useful product-page display is a decision-first table: regulatory value, legal status, product scope, actual field finding, and whether the comparison is direct or blocked. HMI should keep technical distribution tables lower on the page. Most users who matter for HMTc standards development, regulatory review, retail quality programs, or litigation need to answer three questions first:

1. Is there a legally relevant limit or action level for this product/matrix?
2. Do field findings match the same product basis and analyte species?
3. If not, what is the exact reason the comparison is blocked?

That is why this regulation is wired into `data/evidence/regulatory_limits.csv` and `data/evidence/product_regulatory_crosswalk.csv`, not only summarized as narrative.

## Sources

- [[sources/eu-2023-915-contaminants-maximum-levels]]
- European Commission contaminants legislation page, which identifies Regulation (EU) 2023/915 as the EU maximum-level framework for contaminants in food.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/eu-2023-915-contaminants-maximum-levels|Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006]]<span class="hmi-ref-meta">European Commission · Official Journal of the European Union · 2023 · [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915)</span><span class="hmi-ref-tag">Regulation</span>
2. [[sources/eu-2024-1987-nickel-maximum-levels|Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs]]<span class="hmi-ref-meta">European Commission · Official Journal of the European Union, L series, 2024/1987 (31.7.2024) · 2024 · [data.europa.eu](http://data.europa.eu/eli/reg/2024/1987/oj)</span><span class="hmi-ref-tag">Regulation</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [970e09b653](https://github.com/paleofoundation/heavymetalindex/commit/970e09b653) | 2026-08-02 | major | 1 section added |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72e](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72e) | 2026-07-27 | correction | 1 source added; 3 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
