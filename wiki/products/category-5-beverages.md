---
type: product-category-index
category: beverages
hmtc_category: 5
label: "Category 5: Beverages"
raw_path: raw/reports/category5-step-0-output-locked-20260428.md
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-01
sources: 13
hero_image: /static/heroes/beverages-beer-tea-juice-water.webp
hero_image_alt: "An unmarked bottle, a glass of amber beer, a tea cup, orange juice, water and barley grains illustrating category 5 beverages product-format context."
---

# Category 5: Beverages

## Overview

This page is the wiki hub for the locked Category 5 Step 0 beverage row architecture. It preserves the sixteen locked rows and links each row to its product page, ingredient nodes, and affected metal pages. Downstream ingest may append future amendment rows, but these row numbers and names should not be renumbered or silently collapsed.

## Locked Rows

| # | Subcategory | Split From | Variant Type |
| --- | --- | --- | --- |
| 1 | [[products/fruit-juices-non-apple|Fruit juices, non-apple]] | fruit-juices | clean benchmark |
| 2 | [[products/fruit-juices-apple-containing|Fruit juices, apple-containing]] | fruit-juices | higher-contamination row |
| 3 | [[products/vegetable-juices-non-root|Vegetable juices, non-root]] | vegetable-juices | clean benchmark |
| 4 | [[products/vegetable-juices-root-vegetable-containing|Vegetable juices, root-vegetable-containing]] | vegetable-juices | higher-contamination row |
| 5 | [[products/plant-milks-non-soy-non-rice|Plant milks (almond, oat, coconut, other non-soy/non-rice)]] | plant-milks | clean benchmark |
| 6 | [[products/plant-milks-soy-based|Plant milks, soy-based]] | plant-milks | higher-contamination row |
| 7 | [[products/plant-milks-rice-based\|Plant milks, rice-based — RETIRED]] | plant-milks | retired → Category 3 row 10 (Rice beverages); Amendment 1, 2026-04-28 |
| 8 | [[products/flavored-waters|Flavored waters]] | flavored-waters | independent no split |
| 9 | [[products/sports-energy-drinks|Sports/energy drinks]] | sports-energy-drinks | independent no split |
| 10 | [[products/herbal-botanical-infusions|Herbal/botanical infusions]] | tea-taxonomy | clean benchmark |
| 11 | [[products/true-tea-camellia-sinensis|True tea (Camellia sinensis)]] | tea-taxonomy | higher-contamination row |
| 12 | [[products/matcha|Matcha (whole-leaf Camellia sinensis)]] | tea-taxonomy | distinct exposure pathway |
| 13 | [[products/coffee|Coffee (ground, brewed, instant, single-serve)]] | coffee | independent no split |
| 14 | [[products/soft-drinks-carbonated-beverages|Soft drinks/carbonated beverages]] | soft-drinks-carbonated-beverages | independent no split |
| 15 | [[products/fermented-beverages-non-tea-based|Fermented beverages, non-tea-based]] | kombucha-and-fermented-beverages | clean benchmark |
| 16 | [[products/kombucha-tea-based|Kombucha (tea-based fermented beverage)]] | kombucha-and-fermented-beverages | higher-contamination row |

## Platform Links

Apple-containing fruit juice routes through [[ingredients/apple]] and [[metals/lead|Pb]]. Root-vegetable-containing juice routes through [[ingredients/root-vegetables]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]]. Soy plant milk routes through [[ingredients/soy]], [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]]. Rice plant milk routes through [[ingredients/rice]], [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]]. Tea, matcha, and tea-based kombucha route through [[ingredients/camellia-sinensis]], [[metals/aluminum|Al]], and [[metals/lead|Pb]].

## Boundary Rules

Drinking water and mineral water route to the water category, not this beverage category. Tea or coffee with a Supplement Facts panel routes to dietary supplements. Plant-based infant formula routes to Category 1. Sparkling water without flavoring routes to water; sparkling water with flavoring routes to [[products/flavored-waters]].

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 section added and 1 removed |
| [324868f70](https://github.com/paleofoundation/heavymetalindex/commit/324868f70) | 2026-05-31 | major | 12 sections removed; narrative text revised |
| [22b1fecd0](https://github.com/paleofoundation/heavymetalindex/commit/22b1fecd0) | 2026-05-31 | major | 1 section added |
<!-- END: hmi-page-history -->
