---
type: lint
lint_check: ingredient-coverage-asymmetry
run_date: 2026-05-12
total_pages: 185
stubs_untouched: 48
fully_addressed: 17
mixed_state_lint_failures: 110
schema_issues: 10
missing_body_table: 127
noindex: true
---

# Ingredient metal-coverage audit

Audits every page under `wiki/ingredients/` against the Part 6 coverage rule: any ingest that touches an ingredient page must advance all ten `contamination_profile` sub-blocks out of `pending`. Sub-blocks for analytes the source does not address advance to `populated, n_studies: 0` as declared data gaps. Mixed-state pages (some `pending`, some `in_progress`/`populated`) are lint failures.

## Summary

| Bucket | Count |
|--------|-------|
| Total ingredient pages | 185 |
| Untouched stubs (all 10 `pending`) — legitimate | 48 |
| Fully addressed (zero `pending`) — legitimate | 17 |
| Mixed state — **lint failures** | 110 |
| Schema issues (missing block / sub-blocks) | 10 |
| Non-stub pages missing the body-level "Heavy metal contamination profile" table | 127 |

## Mixed-state pages (punch list, worst first)

| Page | # pending | # in_progress | # populated | Pending analytes |
|------|-----------|---------------|-------------|------------------|
| [[ingredients/chocolate-chip-cookies]] | 9 | 1 | 0 | Pb, Cd, iAs, tAs, tHg, Ni, Al, Sn, U |
| [[ingredients/chocolate]] | 5 | 5 | 0 | iAs, tAs, tHg, Sn, U |
| [[ingredients/cocoa]] | 5 | 5 | 0 | iAs, tAs, tHg, Sn, U |
| [[ingredients/applesauce]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/asparagus]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/baked-potato-with-peel]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/blueberry-muffin]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/bologna-luncheon-meat]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/bran-cereal-with-raisins]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/butter]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/canned-corn]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/canned-fruit-cocktail]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/canned-green-beans]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/canned-mushrooms]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/cantaloupe]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/cauliflower]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/celery]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/chicken-noodle-soup]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/chicken-potpie]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/chili-con-carne-with-beans]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/chocolate-cake]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/chocolate-reduced-fat-milk]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/collard-greens]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/corn-flakes]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/corn-grits]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/corn]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/cornbread]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/cream-of-wheat]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/dill-pickles]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/egg-noodles]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/flour-tortilla]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/frankfurter]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/grapefruit-juice]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/grapefruit]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/green-beans]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/green-bell-pepper]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/ground-beef]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/half-and-half]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/ham]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/honey]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/iceberg-lettuce]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/ketchup]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/lamb-chop]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/lima-beans]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/macaroni-and-cheese]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/margarine]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/mayonnaise]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/non-dairy-creamer]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/oat-ring-cereal]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/oatmeal]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/pancake-syrup]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/peach]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/peanut-butter]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/peanuts]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/pear]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/pork-and-beans-canned]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/pork-bacon]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/pork-chop]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/potato-chips]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/potatoes]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/processed-american-cheese]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/raisins]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/reduced-fat-milk]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/saltine-crackers]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/skim-milk]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/tomato-soup]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/tomato]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/tortilla-chips]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/turkey]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/watermelon]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/white-sugar]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/whole-wheat-bread]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/winter-squash]] | 3 | 7 | 0 | iAs, Al, Sn |
| [[ingredients/baked-beans]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/blueberries]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/butternut-squash]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/canned-spaghetti]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/canned-tomatoes]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/carrot]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/chapattis]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/chicken]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/clementines-tangerines]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/crisped-rice-cereal]] | 2 | 8 | 0 | Al, Sn |
| [[ingredients/custard]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/flavored-carbonated-bottled-waters]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/fromage-frais]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/fruit-juice-ready-drinks]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/lentils]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/meat]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/melon]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/non-apple-fruit]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/non-root-vegetables]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/noodles]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/orange-juice]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/parsnips]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/pasta]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/peaches]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/pears]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/rice-cakes]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/rice]] | 2 | 8 | 0 | Al, Sn |
| [[ingredients/root-vegetables]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/semi-skimmed-milk]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/sweet-potato]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/tinned-fish]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/water]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/wheat-cereal-biscuits]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/white-fish]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/wholemeal-bread]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/yam]] | 2 | 8 | 0 | tAs, U |
| [[ingredients/yogurt]] | 2 | 8 | 0 | tAs, U |

## Non-stub pages missing the body-level table

| Page | # sub-blocks advanced |
|------|----------------------|
| [[ingredients/apple-juice]] | 10 |
| [[ingredients/apple]] | 10 |
| [[ingredients/applesauce]] | 7 |
| [[ingredients/asparagus]] | 7 |
| [[ingredients/avocado]] | 10 |
| [[ingredients/baked-beans]] | 8 |
| [[ingredients/baked-potato-with-peel]] | 7 |
| [[ingredients/banana]] | 10 |
| [[ingredients/blueberries]] | 8 |
| [[ingredients/blueberry-muffin]] | 7 |
| [[ingredients/bologna-luncheon-meat]] | 7 |
| [[ingredients/bran-cereal-with-raisins]] | 7 |
| [[ingredients/broccoli]] | 10 |
| [[ingredients/butter]] | 7 |
| [[ingredients/butternut-squash]] | 8 |
| [[ingredients/canned-corn]] | 7 |
| [[ingredients/canned-fruit-cocktail]] | 7 |
| [[ingredients/canned-green-beans]] | 7 |
| [[ingredients/canned-mushrooms]] | 7 |
| [[ingredients/canned-spaghetti]] | 8 |
| [[ingredients/canned-tomatoes]] | 8 |
| [[ingredients/cantaloupe]] | 7 |
| [[ingredients/carrot]] | 8 |
| [[ingredients/cauliflower]] | 7 |
| [[ingredients/celery]] | 7 |
| [[ingredients/chapattis]] | 8 |
| [[ingredients/cheddar-cheese]] | 10 |
| [[ingredients/chicken-noodle-soup]] | 7 |
| [[ingredients/chicken-potpie]] | 7 |
| [[ingredients/chicken]] | 8 |
| [[ingredients/chili-con-carne-with-beans]] | 7 |
| [[ingredients/chocolate-cake]] | 7 |
| [[ingredients/chocolate-chip-cookies]] | 1 |
| [[ingredients/chocolate-reduced-fat-milk]] | 7 |
| [[ingredients/chocolate]] | 5 |
| [[ingredients/clementines-tangerines]] | 8 |
| [[ingredients/cocoa]] | 5 |
| [[ingredients/collard-greens]] | 7 |
| [[ingredients/corn-flakes]] | 7 |
| [[ingredients/corn-grits]] | 7 |
| [[ingredients/corn]] | 7 |
| [[ingredients/cornbread]] | 7 |
| [[ingredients/cream-of-wheat]] | 7 |
| [[ingredients/crisped-rice-cereal]] | 8 |
| [[ingredients/cucumber]] | 10 |
| [[ingredients/custard]] | 8 |
| [[ingredients/dill-pickles]] | 7 |
| [[ingredients/egg-noodles]] | 7 |
| [[ingredients/eggs]] | 10 |
| [[ingredients/fish-fingers]] | 10 |
| [[ingredients/flavored-carbonated-bottled-waters]] | 8 |
| [[ingredients/flour-tortilla]] | 7 |
| [[ingredients/frankfurter]] | 7 |
| [[ingredients/fromage-frais]] | 8 |
| [[ingredients/frozen-peas]] | 10 |
| [[ingredients/fruit-juice-ready-drinks]] | 8 |
| [[ingredients/grapefruit-juice]] | 7 |
| [[ingredients/grapefruit]] | 7 |
| [[ingredients/grapes]] | 10 |
| [[ingredients/green-beans]] | 7 |
| [[ingredients/green-bell-pepper]] | 7 |
| [[ingredients/ground-beef]] | 7 |
| [[ingredients/half-and-half]] | 7 |
| [[ingredients/ham]] | 7 |
| [[ingredients/honey]] | 7 |
| [[ingredients/iceberg-lettuce]] | 7 |
| [[ingredients/ketchup]] | 7 |
| [[ingredients/lamb-chop]] | 7 |
| [[ingredients/lentils]] | 8 |
| [[ingredients/lima-beans]] | 7 |
| [[ingredients/macaroni-and-cheese]] | 7 |
| [[ingredients/margarine]] | 7 |
| [[ingredients/mayonnaise]] | 7 |
| [[ingredients/meat]] | 8 |
| [[ingredients/melon]] | 8 |
| [[ingredients/non-apple-fruit]] | 8 |
| [[ingredients/non-dairy-creamer]] | 7 |
| [[ingredients/non-root-vegetables]] | 8 |
| [[ingredients/noodles]] | 8 |
| [[ingredients/oat-ring-cereal]] | 7 |
| [[ingredients/oatmeal]] | 7 |
| [[ingredients/onions]] | 10 |
| [[ingredients/orange-juice]] | 8 |
| [[ingredients/oranges]] | 10 |
| [[ingredients/pancake-syrup]] | 7 |
| [[ingredients/parsnips]] | 8 |
| [[ingredients/pasta]] | 8 |
| [[ingredients/peach]] | 7 |
| [[ingredients/peaches]] | 8 |
| [[ingredients/peanut-butter]] | 7 |
| [[ingredients/peanuts]] | 7 |
| [[ingredients/pear]] | 7 |
| [[ingredients/pears]] | 8 |
| [[ingredients/pork-and-beans-canned]] | 7 |
| [[ingredients/pork-bacon]] | 7 |
| [[ingredients/pork-chop]] | 7 |
| [[ingredients/pork-sausages]] | 10 |
| [[ingredients/potato-chips]] | 7 |
| [[ingredients/potatoes]] | 7 |
| [[ingredients/processed-american-cheese]] | 7 |
| [[ingredients/raisins]] | 7 |
| [[ingredients/reduced-fat-milk]] | 7 |
| [[ingredients/rice-cakes]] | 8 |
| [[ingredients/rice]] | 8 |
| [[ingredients/root-vegetables]] | 8 |
| [[ingredients/saltine-crackers]] | 7 |
| [[ingredients/semi-skimmed-milk]] | 8 |
| [[ingredients/skim-milk]] | 7 |
| [[ingredients/strawberries]] | 10 |
| [[ingredients/sweet-potato]] | 8 |
| [[ingredients/tinned-fish]] | 8 |
| [[ingredients/tomato-soup]] | 7 |
| [[ingredients/tomato]] | 7 |
| [[ingredients/tortilla-chips]] | 7 |
| [[ingredients/turkey]] | 7 |
| [[ingredients/water]] | 8 |
| [[ingredients/watermelon]] | 7 |
| [[ingredients/wheat-cereal-biscuits]] | 8 |
| [[ingredients/white-bread]] | 10 |
| [[ingredients/white-fish]] | 8 |
| [[ingredients/white-sugar]] | 7 |
| [[ingredients/whole-milk]] | 10 |
| [[ingredients/whole-wheat-bread]] | 7 |
| [[ingredients/wholemeal-bread]] | 8 |
| [[ingredients/winter-squash]] | 7 |
| [[ingredients/yam]] | 8 |
| [[ingredients/yogurt]] | 8 |

## Schema issues

- `carrots.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `fruit-juice.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `fruit.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `index.md` — no contamination_profile block
- `infant-cereal-ingredients.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `infant-formula-ingredients.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `meat-and-poultry.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `milk-and-dairy.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `soy.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U
- `vegetables.md` — missing sub-blocks: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U

## Fully addressed pages (no action needed)

- [[ingredients/apple-juice]]
- [[ingredients/apple]]
- [[ingredients/avocado]]
- [[ingredients/banana]]
- [[ingredients/broccoli]]
- [[ingredients/cheddar-cheese]]
- [[ingredients/cucumber]]
- [[ingredients/eggs]]
- [[ingredients/fish-fingers]]
- [[ingredients/frozen-peas]]
- [[ingredients/grapes]]
- [[ingredients/onions]]
- [[ingredients/oranges]]
- [[ingredients/pork-sausages]]
- [[ingredients/strawberries]]
- [[ingredients/white-bread]]
- [[ingredients/whole-milk]]
