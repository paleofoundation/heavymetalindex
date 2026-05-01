---
type: product-category-index
category: beverages
hmtc_category: 5
label: "Category 5: Beverages"
raw_path: raw/reports/category5-step-0-output-locked-20260428.md
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 0
---

# Category 5: Beverages

This page is the wiki hub for the locked Category 5 Step 0 beverage row architecture. It preserves the sixteen locked rows and links each row to its product page, ingredient nodes, and affected metal pages. Downstream ingest may append future amendment rows, but these row numbers and names should not be renumbered or silently collapsed.

## Locked Rows

| # | Subcategory | Split From | Variant Type |
| --- | --- | --- | --- |
| 1 | [[products/fruit-juices-non-apple|Fruit juices, non-apple]] | fruit-juices | clean benchmark |
| 2 | [[products/fruit-juices-apple-containing|Fruit juices, apple-containing]] | fruit-juices | contamination platform |
| 3 | [[products/vegetable-juices-non-root|Vegetable juices, non-root]] | vegetable-juices | clean benchmark |
| 4 | [[products/vegetable-juices-root-vegetable-containing|Vegetable juices, root-vegetable-containing]] | vegetable-juices | contamination platform |
| 5 | [[products/plant-milks-non-soy-non-rice|Plant milks (almond, oat, coconut, other non-soy/non-rice)]] | plant-milks | clean benchmark |
| 6 | [[products/plant-milks-soy-based|Plant milks, soy-based]] | plant-milks | contamination platform |
| 7 | [[products/plant-milks-rice-based|Plant milks, rice-based]] | plant-milks | contamination platform |
| 8 | [[products/flavored-waters|Flavored waters]] | flavored-waters | independent no split |
| 9 | [[products/sports-energy-drinks|Sports/energy drinks]] | sports-energy-drinks | independent no split |
| 10 | [[products/herbal-botanical-infusions|Herbal/botanical infusions]] | tea-taxonomy | clean benchmark |
| 11 | [[products/true-tea-camellia-sinensis|True tea (Camellia sinensis)]] | tea-taxonomy | contamination platform |
| 12 | [[products/matcha|Matcha (whole-leaf Camellia sinensis)]] | tea-taxonomy | distinct exposure pathway |
| 13 | [[products/coffee|Coffee (ground, brewed, instant, single-serve)]] | coffee | independent no split |
| 14 | [[products/soft-drinks-carbonated-beverages|Soft drinks/carbonated beverages]] | soft-drinks-carbonated-beverages | independent no split |
| 15 | [[products/fermented-beverages-non-tea-based|Fermented beverages, non-tea-based]] | kombucha-and-fermented-beverages | clean benchmark |
| 16 | [[products/kombucha-tea-based|Kombucha (tea-based fermented beverage)]] | kombucha-and-fermented-beverages | contamination platform |

## Platform Links

Apple-containing fruit juice routes through [[ingredients/apple]] and [[metals/lead|Pb]]. Root-vegetable-containing juice routes through [[ingredients/root-vegetables]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]]. Soy plant milk routes through [[ingredients/soy]], [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]]. Rice plant milk routes through [[ingredients/rice]], [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]]. Tea, matcha, and tea-based kombucha route through [[ingredients/camellia-sinensis]], [[metals/aluminum|Al]], and [[metals/lead|Pb]].

## Boundary Rules

Drinking water and mineral water route to the water category, not this beverage category. Tea or coffee with a Supplement Facts panel routes to dietary supplements. Plant-based infant formula routes to Category 1. Sparkling water without flavoring routes to water; sparkling water with flavoring routes to [[products/flavored-waters]].
