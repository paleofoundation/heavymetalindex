---
type: doc
purpose: Slug vocabulary snapshot for GPT-5.5 source-page drafting
audience: [karen, chatgpt]
generated: 2026-05-18
generated_from: live wiki state during Codex regulation-page ingest session
---

# Taxonomy snapshot

This is the closed slug vocabulary GPT-5.5 fast mode uses when drafting source pages. GPT picks from this list only; it never invents slugs. If a paper requires a slug not in this list, GPT leaves the relevant frontmatter field empty (`[]`) and adds a note under `## Verification notes` at the end of the draft.

**Refresh procedure:** when ingredient, product, metal, or regulation pages are added or removed in the wiki, regenerate this file with:

```bash
cd ~/Desktop/heavy-metal-index
{
  echo "## Ingredients"
  ls wiki/ingredients/ | sed 's/\.md$//' | grep -v '^index$' | paste -sd, -
  echo
  echo "## Products"
  ls wiki/products/ | sed 's/\.md$//' | grep -v '^index$' | paste -sd, -
  echo
  echo "## Metals"
  ls wiki/metals/ | sed 's/\.md$//' | grep -v '^index$' | paste -sd, -
  echo
  echo "## Regulations"
  ls wiki/regulations/ | sed 's/\.md$//' | grep -v '^index$' | paste -sd, -
} > /tmp/taxonomy-body.txt
```

Then update this file's `generated:` date, replace the four sections below with the new contents, and re-paste the whole `taxonomy-snapshot.md` body into the ChatGPT project's custom instructions (under the line marked `[PASTE TAXONOMY SNAPSHOT HERE]` in [system-prompt.md](docs/gpt-collaboration/system-prompt.md)).

A scripted version will land at `tools/gpt/refresh-taxonomy-snapshot.sh` once usage is settled.

---

## Ingredients

almond, apple-cider-vinegar, apple-juice, apple, applesauce, asparagus, avocado, baby-cereals-dry, baked-beans, baked-potato-with-peel, balsamic-vinegar, banana, beans, beef, beet, beverages, bivalve-molluscs, black-pepper, blueberries, blueberry-muffin, bologna-luncheon-meat, bran-cereal-with-raisins, bread, breastmilk, broccoli, butter, butternut-squash, cabbage, camellia-sinensis, canned-corn, canned-fruit-cocktail, canned-green-beans, canned-mushrooms, canned-spaghetti, canned-tomatoes, canned-tuna, cantaloupe, carrot, carrots, cashew-nuts, cashews, cauliflower, celery, cereals, chapattis, cheddar-cheese, chicken-noodle-soup, chicken-potpie, chicken, chili-con-carne-with-beans, chocolate-cake, chocolate-chip-cookies, chocolate-reduced-fat-milk, chocolate, cinnamon, clementines-tangerines, cocoa, coconut, coffee, collard-greens, corn-flakes, corn-grits, corn-oil, corn, cornbread, cream-of-wheat, crisped-rice-cereal, cucumber, cucumbers, custard, dill-pickles, dried-herbs, egg-noodles, eggs, fermented-beverage-bases, fish-containing-baby-foods, fish-fingers, fish, flavored-carbonated-bottled-waters, flavoring, flour-tortilla, frankfurter, fresh-herbs, freshwater-fish, fromage-frais, frozen-peas, fruit-juice-ready-drinks, fruit-juice, fruit-purees, fruit, fruits, grape-juice, grapefruit-juice, grapefruit, grapes, green-beans, green-bell-pepper, ground-beef, guava, half-and-half, ham, hazelnuts, herbal-botanicals, herbs-and-spices, honey, iceberg-lettuce, infant-cereal-ingredients, infant-formula-concentrated-liquid, infant-formula-ingredients, infant-formula-powder, infant-formula-rtf-liquid, ketchup, lamb-chop, leafy-greens, leafy-vegetables, legumes, lentils, lettuce, lima-beans, macaroni-and-cheese, maize, mango-juice, mango, margarine, marlin, matcha-powder, mayonnaise, meat-and-poultry-purees, meat-and-poultry, meat, melon, milk-and-dairy, mixed-meals, molluscs, non-apple-fruit, non-dairy-creamer, non-rice-grains, non-root-vegetable-purees, non-root-vegetables, non-soy-infant-formula, non-soy-protein-source, noodles, oat-ring-cereal, oat, oatmeal, olive-oil, olives, onions, orange-juice, oranges, organ-meats, pancake-syrup, parsley, parsnips, pasta, peach, peaches, peanut-butter, peanut-oil, peanuts, pear, pears, plant-milk, plums, pork-and-beans-canned, pork-bacon, pork-chop, pork-sausages, potato-chips, potatoes, poultry, processed-american-cheese, quinoa, raisins, rapeseed-oil, raspberries, reduced-fat-milk, rice-bran-oil, rice-cakes, rice-cereal, rice-flour, rice-puffs, rice, root-vegetable-purees, root-vegetables, saltine-crackers, seafood, seaweed, semi-skimmed-milk, sesame-oil, shark, shellfish, skim-milk, soft-drink-bases, soy-based-infant-formula, soy-protein-isolate, soy, soybean-oil, spices, spinach, sports-drink-bases, squash, strawberries, sunflower-oil, sunflower-seeds, sweet-potato, swordfish, tea, teething-and-snacks, tinned-fish, tomato-paste, tomato-soup, tomato, tortilla-chips, turkey, turmeric, vegetable-juice, vegetable-oil, vegetable-oils, vegetable-purees, vegetables, vinegar, vitamin-mineral-premix, walnuts, water, watermelon, wheat-cereal-biscuits, wheat, white-bread, white-fish, white-sugar, whole-milk, whole-wheat-bread, wholemeal-bread, wild-mushrooms, wine-vinegar, winter-squash, yam, yogurt

## Products

baby-cereals-dry-non-rice, baby-cereals-dry-rice-based, baby-lotion-cream, baby-oil, baby-powder-cornstarch, baby-shampoo-body-wash, baby-sunscreen-chemical, baby-sunscreen-mineral, baby-talcum-powder, baby-wipes, beef-product, breakfast-cereals, canned-fish, canned-fruit, canned-meats, canned-tomatoes, canned-vegetables, category-5-beverages, children-personal-care, childrens-lip-balm-mineral-bearing, childrens-lip-balm-plain, childrens-makeup, childrens-nail-polish, chocolate, coffee, diaper-cream-non-zno, diaper-cream-zno, dietary-supplements, eggs-product, face-paint, fermented-beverages-non-tea-based, fish-containing-baby-foods, fish-freshwater, fish-marine-non-predatory, fish-marine-predatory, flavored-waters, fresh-fish, fresh-fruit, fruit-juice-not-canned, fruit-juices-apple-containing, fruit-juices-non-apple, fruit-purees, game-meats, glucose-solutions, herbal-botanical-infusions, honey, infant-and-child-foods-master, infant-cereal, infant-formula-concentrated-liquid-non-soy, infant-formula-concentrated-liquid-soy-based, infant-formula-powder-non-soy, infant-formula-powder-soy-based, infant-formula-powder, infant-formula-rtf-liquid-non-soy, infant-formula-rtf-liquid-soy-based, kombucha-tea-based, lamb-mutton, lead-benchmark-context, lipstick, matcha, meat-and-poultry-purees, mixed-meals-non-rice, mixed-meals-rice-containing, non-root-vegetable-purees, oral-electrolyte-solutions, piercing-post-assemblies, plant-milks-non-soy-non-rice, plant-milks-rice-based, plant-milks-soy-based, pork-product, poultry-product, processed-meats, regulatory-crosswalk-field-findings, root-vegetable-purees, seafood, shellfish, skin-lightening-cream, snacks-crackers-biscuits, soft-drinks-carbonated-beverages, spices, sports-energy-drinks, tea-infusions, tea, teething-and-snacks-non-rice, teething-and-snacks-rice-based, tomato-paste, tomato-sauce, toothpaste, true-tea-camellia-sinensis, vegetable-juices-non-root, vegetable-juices-root-vegetable-containing

## Metals

aluminum, antimony, arsenic-inorganic, arsenic-total, arsenic, barium, beryllium, cadmium, cesium, chromium-hexavalent, chromium, cobalt, copper, gold, iron, lead, lithium, magnesium, manganese, mercury-methyl, mercury-total, mercury, molybdenum, nickel, organotins, palladium, platinum, silver, tellurium, thallium, tin-inorganic, tin, titanium, uranium, vanadium, zinc

## Regulations

atsdr-aluminum-mrls, atsdr-cadmium-mrls, au-nz-food-standards-code-schedule-19-contaminants, codex-cadmium-mls, ecuador-nte-inen-184-2013-canned-tuna, efsa-aluminium-twi, efsa-arsenic-contam-2009, efsa-cadmium-twi, efsa-lead-contam-2010, efsa-mercury-twi, efsa-methylmercury-twi, efsa-nickel-tdi, epa-arsenic-mcl, epa-iris-cadmium-rfd, epa-iris-inorganic-arsenic-rfd, epa-iris-lead-rfd, epa-iris-mercury-rfd, epa-iris-methylmercury-rfd, eu-1881-2006-contaminants-superseded, eu-2023-915-cadmium, eu-2023-915-lead-infant-young-child-foods, eu-466-2001-contaminants-superseded, eu-nickel-directive-94-27-ec, eu-reg-2022-617-mercury-fish, eu2023-arsenic-rice-based-drinks, eu2023-contaminants-maximum-levels, fda-closer-to-zero, fda-cpg-540-600-methylmercury-fish, fda-ctz-Pb-babyfood-10ppb, fda-ctz-Pb-cereal-20ppb, fda-ctz-Pb-rootveg-20ppb, fda-iAs-rice-cereal-100ppb, fda-juice-haccp-lead-50ppb, fda2022-draft-lead-juice, fda2025-lead-processed-baby-foods, jecfa-arsenic-bmdl, jecfa-cadmium-ptmi, jecfa-lead-ptwi-withdrawn, jecfa-methylmercury-ptwi, mx-nom-027-ssa1-1993-fresh-frozen-fish-superseded, mx-nom-028-ssa1-1993-canned-fish-superseded, mx-nom-242-ssa1-2009-fishery-products, oehha-arsenic-prop65, oehha-cadmium-prop65, oehha-lead-prop65, washington-tfca-toothpaste-pb-1000ppb

---

## Notes on the metal vocabulary

The `metals/` directory has both fine-grained and umbrella entries (e.g., `arsenic-inorganic`, `arsenic-total`, and `arsenic`). For source-page **frontmatter `metals:` arrays**, GPT uses the abbreviation vocabulary from the system prompt (Pb, Cd, iAs, tAs, iHg, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U, etc.), not these page slugs.

The page slugs above are only for the `## Wiki pages this source may touch` bulleted-wikilinks section at the bottom of the draft, where GPT writes `[[metals/cadmium]]`, `[[ingredients/rice]]`, etc.

## Notes on the regulations list

The regulations list is intentionally short compared to ingredients (238) and products (80). Most papers GPT drafts will not cite a specific regulation; the `jurisdictions:` field is for country/region codes (US, EU, CN, etc.), not regulation slugs. The `## Wiki pages this source may touch` section only references a regulation slug when the paper explicitly discusses that regulation (e.g., an FDA Closer-to-Zero compliance study would reference `[[regulations/fda-closer-to-zero]]`).
