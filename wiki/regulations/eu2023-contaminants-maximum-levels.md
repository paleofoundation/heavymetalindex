---
type: regulation
rule_id: eu2023-contaminants-maximum-levels
title: "EU Regulation 2023/915 maximum levels for contaminants in food"
jurisdiction: EU
authority: European Commission
status: maximum levels
source_page: sources/eu-2023-915-contaminants-maximum-levels
source_url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915"
metals: [Pb, Cd, tHg, iAs, tAs, Sn]
audience: [regulator, educator, commercial, app, legal]
updated: 2026-05-02
---

# EU Regulation 2023/915 Maximum Levels

Commission Regulation (EU) 2023/915 is the EU contaminants maximum-level framework for food. It is binding in its entirety and directly applicable in Member States. For HMI and HMTc, it is an external legal benchmark: it can sit next to field findings, but it is not an HMTc threshold.

The local source PDF is the original Official Journal text. Because EU regulations can be amended, legal users should also check the current EUR-Lex consolidated version before relying on a value in a live dispute or compliance decision. HMI preserves the original PDF hash on [[sources/eu-2023-915-contaminants-maximum-levels]].

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
| Fruit juices and fruit nectars | 30 for juices other than exclusively berries/small fruits; 50 for berries/small fruits |  | 20 |  | Wet weight; concentrated juice applies as reconstituted. |
| Non-alcoholic rice-based drinks |  |  | 30 |  | Current rice-drink iAs page: [[regulations/eu2023-arsenic-rice-based-drinks]]. |

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

## Why This Matters For Product Pages

The most useful product-page display is a decision-first table: regulatory value, legal status, product scope, actual field finding, and whether the comparison is direct or blocked. HMI should keep technical distribution tables lower on the page. Most users who matter for HMTc standards development, regulatory review, retail quality programs, or litigation need to answer three questions first:

1. Is there a legally relevant limit or action level for this product/matrix?
2. Do field findings match the same product basis and analyte species?
3. If not, what is the exact reason the comparison is blocked?

That is why this regulation is wired into `data/evidence/regulatory_limits.csv` and `data/evidence/product_regulatory_crosswalk.csv`, not only summarized as narrative.

## Sources

- [[sources/eu-2023-915-contaminants-maximum-levels]]
- European Commission contaminants legislation page, which identifies Regulation (EU) 2023/915 as the EU maximum-level framework for contaminants in food.
