---
type: source
cite_key: fera2014-fsa-metals-infant-foods-formula
title: "Survey of metals in commercial infant foods, infant formula and non-infant specific foods"
authors: [Brereton N, Baxter M, Walls M, Parmar M, Grieve A, Wilderspin M, Stubbs J, Wilkinson J]
year: 2014
publication: "Food and Environment Research Agency report for the UK Food Standards Agency"
report_number: "14/01"
project_number: "FS102048"
source_type: gov-report
evidence_tier: A
raw_path: raw/reports/fsa-fs102048-metals-infant-foods-formula-2014.pdf
metals: [Al, Sb, tAs, iAs, Cd, Cr, Cu, I, Fe, Pb, Mn, tHg, Ni, Se, Sn, Zn]
ingredients: [rice, cereals, fruit, vegetables, root-vegetables, meat, poultry, fish, milk, soy]
products: [infant-formula-powder, infant-formula-rtf-liquid, baby-cereals, fruit-purees, vegetable-purees, meat-and-poultry-purees, fish-containing-baby-foods, mixed-meals, fruit-juice, teething-and-snacks]
jurisdictions: [UK-FSA]
updated: 2026-05-01
---

# Fera 2014 - FSA Metals Survey Of Infant Foods And Formula

## TL;DR

This Food Standards Agency/Fera survey is a high-priority A-tier government monitoring source for Category 1. It analyzed 247 commercial infant foods and infant formulas plus 50 non-infant-specific foods commonly eaten by infants, purchased in the UK during 2013-2014. The report gives as-sold concentrations for a broad ICP-MS panel and includes inorganic arsenic follow-up for samples with total arsenic at or above 10 ug/kg.

## Why this is critical

- It is one of the broadest public government datasets currently in the index for infant formula, manufactured baby foods, baby snacks, drinks, and common non-infant foods eaten by infants.
- It covers HMTc-relevant metals that are missing from narrower formula workbooks, including aluminum, nickel, tin, total arsenic, inorganic arsenic follow-up, cadmium, lead, and total mercury.
- It resolves product forms well enough to update existing product pages while also exposing a routing problem: non-infant-specific composite foods belong in future ingredient/app profiles, not in locked product rows by default.
- It is not a current-market U.S. dataset and must not be used for brand rankings, certified-brand claims, or HMTc threshold claims.

## Key numbers

- Sample coverage: 247 infant foods and infant formulas, plus 50 non-infant-specific foods that are often consumed by infants.
- Purchase frame: UK retailers and locations during 2013-2014.
- Analytical panel: aluminum, antimony, total arsenic, inorganic arsenic where triggered, cadmium, chromium, copper, iodine, iron, lead, manganese, mercury, nickel, selenium, tin, and zinc.
- Method: UKAS-accredited ICP-MS methods, with separate iodine and inorganic arsenic methods.
- Tables 4a and 4b report ready-to-feed liquid and powdered infant formula, Table 5 reports infant foods, and Table 6 reports non-infant-specific foods.
- Inorganic arsenic was analyzed in 82 samples where total arsenic was at or above 10 ug/kg.
- Values prefixed with `~` are above the LoD but below the LoQ and should be treated as semi-quantitative.

## Row routing

| Report scope | Heavy Metal Index destination | Handling |
| --- | --- | --- |
| Ready-to-feed liquid infant formula, Table 4a | [[products/infant-formula-rtf-liquid-non-soy]] | Route as RTF liquid formula evidence. The extracted Table 4a products do not identify a soy-based RTF subgroup, so this source does not update the RTF soy row. |
| Powdered infant formula, Table 4b | [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]] | Route powder formulas by protein/source label where clear; soy products such as Infasoy/Wysoy remain separated from non-soy powder. |
| Baby rice, baby cereals, porridge, rusks, biscuits, multigrain/oat/wholegrain products | [[products/baby-cereals-dry-rice-based]], [[products/baby-cereals-dry-non-rice]] | Use product label and rice inclusion to preserve the rice versus non-rice row split. |
| Rice cakes, rice/corn snacks, biscuits, rusks, nibbly fingers, puffs | [[products/teething-and-snacks-rice-based]], [[products/teething-and-snacks-non-rice]] | Route rice-labeled snacks to the rice-based row and non-rice-labeled snacks to the non-rice row. |
| Fruit jars, pouches, desserts, and fruit baby foods | [[products/fruit-purees]] | Use as finished-product infant fruit evidence, not as ingredient-only fruit evidence. |
| Baby juices and non-infant juice composites | [[products/fruit-juice-not-canned]] | Use for not-canned juice scope where packaging and product description support it; canned juice should stay excluded. |
| Vegetable purees and vegetable-containing infant foods | [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]] | Route carrot, parsnip, potato, sweet potato, and similar roots/tubers separately from squash, peas, leafy greens, and other non-root vegetables. |
| Meat, poultry, fish, and mixed meals | [[products/meat-and-poultry-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]] | Use finished-product labels. Rice-containing meals such as risotto or baby-rice combinations route separately from pasta/cottage-pie/non-rice meals. |
| Non-infant-specific foods, Table 6 | [[ingredients/index]] and linked ingredient/composite nodes | Route ingredient-only values to ingredient pages. Do not let composite bread, rice, fish, milk, yogurt, or produce samples silently become infant-product row distributions. |

## Comparison-Layer Status

This source is promoted and routed, but its product and ingredient tables are not yet fully extracted into structured occurrence rows. The regulatory crosswalk therefore treats FSA/Fera-supported product categories as comparison-blocked until values are extracted with analyte species, basis, units, LoD/LoQ qualifiers, and HMTc row routing preserved.

## Methods (brief)

Samples were homogenized and stored frozen before analysis. Multi-element analysis used acid digestion and ICP-MS; iodine and inorganic arsenic used dedicated methods. The report includes LoDs/LoQs, measurement uncertainty, spike recovery, reference-material checks, replicate agreement, and FAPAS proficiency-test context. Non-infant-specific foods were built from ten units per product type and combined into one composite sample per product type.

## Limitations

The report is UK-specific and reflects products purchased in 2013-2014. Results are reported as sold, not necessarily as prepared or consumed. The report names brands and retail products, but this index should treat them as source traceability, not rankings or current brand claims. Chromium is total chromium, not chromium VI. Mercury is total mercury, not methylmercury. Inorganic arsenic is only reported for the triggered subset, so total arsenic cannot be automatically converted into inorganic arsenic for all rows.

## Implications

- Certification: Strong A-tier public evidence for category-level monitoring, but not a source of HMTc thresholds, certified-brand status, or current-market compliance claims.
- Courses: Useful teaching source for LoD/LoQ handling, semi-quantitative values, as-sold basis, arsenic speciation triggers, and product-form routing.
- App: Supports future row-level evidence and ingredient/app profile work, provided parsing preserves product form, rice inclusion, root/non-root status, fish status, and analyte speciation.
- Microbiome: No direct microbiome endpoint.

## Wiki pages updated on ingest

- [[products/infant-formula-powder-non-soy]]
- [[products/infant-formula-powder-soy-based]]
- [[products/infant-formula-rtf-liquid-non-soy]]
- [[products/baby-cereals-dry-non-rice]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/fruit-purees]]
- [[products/non-root-vegetable-purees]]
- [[products/root-vegetable-purees]]
- [[products/meat-and-poultry-purees]]
- [[products/fish-containing-baby-foods]]
- [[products/mixed-meals-non-rice]]
- [[products/mixed-meals-rice-containing]]
- [[products/fruit-juice-not-canned]]
- [[products/teething-and-snacks-non-rice]]
- [[products/teething-and-snacks-rice-based]]
- [[ingredients/apple-juice]]
- [[ingredients/apple]]
- [[ingredients/avocado]]
- [[ingredients/baked-beans]]
- [[ingredients/banana]]
- [[ingredients/blueberries]]
- [[ingredients/broccoli]]
- [[ingredients/butternut-squash]]
- [[ingredients/canned-spaghetti]]
- [[ingredients/canned-tomatoes]]
- [[ingredients/carrot]]
- [[ingredients/chapattis]]
- [[ingredients/cheddar-cheese]]
- [[ingredients/chicken]]
- [[ingredients/clementines-tangerines]]
- [[ingredients/cucumber]]
- [[ingredients/custard]]
- [[ingredients/eggs]]
- [[ingredients/fish-fingers]]
- [[ingredients/fish]]
- [[ingredients/flavored-carbonated-bottled-waters]]
- [[ingredients/fromage-frais]]
- [[ingredients/frozen-peas]]
- [[ingredients/fruit-juice-ready-drinks]]
- [[ingredients/fruit-juice]]
- [[ingredients/grapes]]
- [[ingredients/lentils]]
- [[ingredients/meat]]
- [[ingredients/melon]]
- [[ingredients/non-apple-fruit]]
- [[ingredients/non-root-vegetables]]
- [[ingredients/noodles]]
- [[ingredients/onions]]
- [[ingredients/orange-juice]]
- [[ingredients/oranges]]
- [[ingredients/parsnips]]
- [[ingredients/pasta]]
- [[ingredients/peaches]]
- [[ingredients/pears]]
- [[ingredients/pork-sausages]]
- [[ingredients/potatoes]]
- [[ingredients/rice-cakes]]
- [[ingredients/rice]]
- [[ingredients/root-vegetables]]
- [[ingredients/semi-skimmed-milk]]
- [[ingredients/strawberries]]
- [[ingredients/sweet-potato]]
- [[ingredients/tinned-fish]]
- [[ingredients/water]]
- [[ingredients/wheat-cereal-biscuits]]
- [[ingredients/white-bread]]
- [[ingredients/white-fish]]
- [[ingredients/whole-milk]]
- [[ingredients/wholemeal-bread]]
- [[ingredients/yam]]
- [[ingredients/yogurt]]
- [[lint/2026-05-01-fs102048-fsa-infant-foods-ingest-audit]]
- [[products/regulatory-crosswalk-field-findings]]
