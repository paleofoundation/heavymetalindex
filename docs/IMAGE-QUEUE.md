# Heavy Metal Index image queue

Snapshot: 2026-10-16, main `caabf68b40f485d284e591ddaff013c24a357f4b`. Style: [IMAGE-STYLE.md](IMAGE-STYLE.md). Order: HMI-IMAGES-CONTINUE-1.

4567 public Markdown pages audited after the standard prebuild, including generated evidence pages; 36 already have canonical heroes and are DONE; 4531 lack canonical heroes and are queued in 182 batches of at most 25 pages. The first four batches contain exactly 25 pages each. Page counts are not unique asset counts: each first-four batch uses five newly generated, subject-matched shared still lifes, following the shared-image precedent of PR #248. The explicit mapping below is the reviewable scope.

A page is missing its canonical image when it has no `hero_image` frontmatter. An author portrait, inline research figure or chart does not replace this hero. Existing inline images are noted separately. This includes public source records and all directory/index/root pages, even those with custom layouts; their later batches require checking how that page actually renders before adding a hero. No page is silently omitted because its eventual image treatment needs judgment.

The inventory includes build-generated public metal evidence/pagination pages and the generated audit page, which do not exist as committed Markdown on the base tree. URL aliases and emitter redirect documents are navigation aliases, not separate editorial pages requiring images.

Scope follows `quartz.config.ts` ignores and `isPublicWikiRecord` in `tools/lib/source-publication.mjs`: exclude draft pages, pending/tier1-stub source records, private/templates/raw/.obsidian content, briefings, queries, batch-reports, lint, log.md and _TEMPLATE.md. Retain public ingredient stubs. Sources with existing inline figures still need an editorial subject-fit decision; never replace or mislabel an original figure with generated evidence.

PENDING means absent from this base snapshot. A batch becomes COMPLETE IN DRAFT only after its files, page mapping, visual review and checks exist in its draft PR. It becomes DONE only after merge. Track the continuation PRs and next batch in IMAGE-HANDOFF.md after batch 4; do not claim queued work is live. Keep this initial inventory stable for review.

## Coverage summary

| Section | Public pages | DONE | Queued |
| --- | ---: | ---: | ---: |
| Root pages | 20 | 0 | 20 |
| advisory | 1 | 0 | 1 |
| app | 1 | 0 | 1 |
| audits | 17 | 0 | 17 |
| authors | 1 | 0 | 1 |
| certification | 2 | 0 | 2 |
| corpus | 22 | 0 | 22 |
| courses | 1 | 0 | 1 |
| health | 2 | 0 | 2 |
| ingredients | 378 | 0 | 378 |
| metals | 81 | 36 | 45 |
| methodology | 5 | 0 | 5 |
| microbiome | 2 | 0 | 2 |
| mitigation | 8 | 0 | 8 |
| products | 451 | 0 | 451 |
| regulations | 183 | 0 | 183 |
| regulators | 11 | 0 | 11 |
| reports | 2 | 0 | 2 |
| sources | 3330 | 0 | 3330 |
| studies | 4 | 0 | 4 |
| supply-chain | 9 | 0 | 9 |
| synthesis | 33 | 0 | 33 |
| testing | 3 | 0 | 3 |

## Metal/species profiles: DONE

All 36 detail profiles are DONE from merged PR #248. The metals index is a separate queued page.

| Status | Page | Hero file |
| --- | --- | --- |
| DONE | `wiki/metals/aluminum.md` | `quartz/static/heroes/aluminum-tea-food-contact.webp` |
| DONE | `wiki/metals/antimony.md` | `quartz/static/heroes/antimony-water-polyester.webp` |
| DONE | `wiki/metals/arsenic-inorganic.md` | `quartz/static/heroes/arsenic-rice-water-soil.webp` |
| DONE | `wiki/metals/arsenic-total.md` | `quartz/static/heroes/arsenic-rice-water-soil.webp` |
| DONE | `wiki/metals/arsenic.md` | `quartz/static/heroes/arsenic-rice-water-soil.webp` |
| DONE | `wiki/metals/barium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/beryllium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/cadmium.md` | `quartz/static/heroes/cadmium-cocoa-grains-crops.webp` |
| DONE | `wiki/metals/cesium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/chromium-hexavalent.md` | `quartz/static/heroes/chromium-water-soil-materials.webp` |
| DONE | `wiki/metals/chromium.md` | `quartz/static/heroes/chromium-water-soil-materials.webp` |
| DONE | `wiki/metals/cobalt.md` | `quartz/static/heroes/cobalt-soil-laboratory.webp` |
| DONE | `wiki/metals/copper.md` | `quartz/static/heroes/copper-water-lentils.webp` |
| DONE | `wiki/metals/gold.md` | `quartz/static/heroes/precious-metals-laboratory-specimens.webp` |
| DONE | `wiki/metals/iron.md` | `quartz/static/heroes/iron-pan-lentils-spinach.webp` |
| DONE | `wiki/metals/lead.md` | `quartz/static/heroes/lead-food-soil-water.webp` |
| DONE | `wiki/metals/lithium.md` | `quartz/static/heroes/lithium-medical-research.webp` |
| DONE | `wiki/metals/magnesium.md` | `quartz/static/heroes/essential-metals-legumes-grains-seeds.webp` |
| DONE | `wiki/metals/manganese.md` | `quartz/static/heroes/essential-metals-legumes-grains-seeds.webp` |
| DONE | `wiki/metals/mercury-methyl.md` | `quartz/static/heroes/mercury-fish-water.webp` |
| DONE | `wiki/metals/mercury-total.md` | `quartz/static/heroes/mercury-fish-water.webp` |
| DONE | `wiki/metals/mercury.md` | `quartz/static/heroes/mercury-fish-water.webp` |
| DONE | `wiki/metals/molybdenum.md` | `quartz/static/heroes/essential-metals-legumes-grains-seeds.webp` |
| DONE | `wiki/metals/nickel.md` | `quartz/static/heroes/nickel-legumes-nuts-cocoa.webp` |
| DONE | `wiki/metals/organotins.md` | `quartz/static/heroes/organotins-shellfish-marine-context.webp` |
| DONE | `wiki/metals/palladium.md` | `quartz/static/heroes/precious-metals-laboratory-specimens.webp` |
| DONE | `wiki/metals/platinum.md` | `quartz/static/heroes/precious-metals-laboratory-specimens.webp` |
| DONE | `wiki/metals/silver.md` | `quartz/static/heroes/precious-metals-laboratory-specimens.webp` |
| DONE | `wiki/metals/tellurium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/thallium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/tin-inorganic.md` | `quartz/static/heroes/tin-canned-tomatoes-juice.webp` |
| DONE | `wiki/metals/tin.md` | `quartz/static/heroes/tin-canned-tomatoes-juice.webp` |
| DONE | `wiki/metals/titanium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/uranium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/vanadium.md` | `quartz/static/heroes/trace-metals-geology-laboratory.webp` |
| DONE | `wiki/metals/zinc.md` | `quartz/static/heroes/essential-metals-legumes-grains-seeds.webp` |

## Batch 1: Vegetable ingredients (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/spinach.md` | Spinach | `quartz/static/heroes/leafy-greens-spinach-kale-lettuce.webp` |
| `wiki/ingredients/kale.md` | Kale | `quartz/static/heroes/leafy-greens-spinach-kale-lettuce.webp` |
| `wiki/ingredients/collard-greens.md` | Collard greens | `quartz/static/heroes/leafy-greens-spinach-kale-lettuce.webp` |
| `wiki/ingredients/lettuce.md` | Lettuce | `quartz/static/heroes/leafy-greens-spinach-kale-lettuce.webp` |
| `wiki/ingredients/iceberg-lettuce.md` | Iceberg lettuce | `quartz/static/heroes/leafy-greens-spinach-kale-lettuce.webp` |
| `wiki/ingredients/cabbage.md` | Cabbage | `quartz/static/heroes/brassicas-cabbage-broccoli-cauliflower.webp` |
| `wiki/ingredients/broccoli.md` | Broccoli | `quartz/static/heroes/brassicas-cabbage-broccoli-cauliflower.webp` |
| `wiki/ingredients/brussels-sprouts.md` | Brussels sprouts | `quartz/static/heroes/brassicas-cabbage-broccoli-cauliflower.webp` |
| `wiki/ingredients/cauliflower.md` | Cauliflower | `quartz/static/heroes/brassicas-cabbage-broccoli-cauliflower.webp` |
| `wiki/ingredients/leafy-vegetables.md` | Leafy Vegetables | `quartz/static/heroes/brassicas-cabbage-broccoli-cauliflower.webp` |
| `wiki/ingredients/carrot.md` | Carrot | `quartz/static/heroes/root-vegetables-carrots-beets-potatoes.webp` |
| `wiki/ingredients/beet.md` | Beet | `quartz/static/heroes/root-vegetables-carrots-beets-potatoes.webp` |
| `wiki/ingredients/parsnips.md` | Parsnips | `quartz/static/heroes/root-vegetables-carrots-beets-potatoes.webp` |
| `wiki/ingredients/sweet-potato.md` | Sweet potato | `quartz/static/heroes/root-vegetables-carrots-beets-potatoes.webp` |
| `wiki/ingredients/potatoes.md` | Potatoes | `quartz/static/heroes/root-vegetables-carrots-beets-potatoes.webp` |
| `wiki/ingredients/butternut-squash.md` | Butternut squash | `quartz/static/heroes/squash-butternut-zucchini-eggplant.webp` |
| `wiki/ingredients/winter-squash.md` | Winter squash | `quartz/static/heroes/squash-butternut-zucchini-eggplant.webp` |
| `wiki/ingredients/squash.md` | Squash | `quartz/static/heroes/squash-butternut-zucchini-eggplant.webp` |
| `wiki/ingredients/zucchini.md` | Zucchini | `quartz/static/heroes/squash-butternut-zucchini-eggplant.webp` |
| `wiki/ingredients/eggplant.md` | Eggplant | `quartz/static/heroes/squash-butternut-zucchini-eggplant.webp` |
| `wiki/ingredients/tomato.md` | Tomato | `quartz/static/heroes/garden-vegetables-tomato-cucumber-asparagus.webp` |
| `wiki/ingredients/cucumber.md` | Cucumber | `quartz/static/heroes/garden-vegetables-tomato-cucumber-asparagus.webp` |
| `wiki/ingredients/green-bell-pepper.md` | Green bell pepper | `quartz/static/heroes/garden-vegetables-tomato-cucumber-asparagus.webp` |
| `wiki/ingredients/celery.md` | Celery | `quartz/static/heroes/garden-vegetables-tomato-cucumber-asparagus.webp` |
| `wiki/ingredients/asparagus.md` | Asparagus | `quartz/static/heroes/garden-vegetables-tomato-cucumber-asparagus.webp` |

## Batch 2: Fruit ingredients (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/apple.md` | Apple | `quartz/static/heroes/orchard-fruit-apples-pears-stone-fruit.webp` |
| `wiki/ingredients/pear.md` | Pear | `quartz/static/heroes/orchard-fruit-apples-pears-stone-fruit.webp` |
| `wiki/ingredients/peach.md` | Peach | `quartz/static/heroes/orchard-fruit-apples-pears-stone-fruit.webp` |
| `wiki/ingredients/nectarine.md` | Nectarine | `quartz/static/heroes/orchard-fruit-apples-pears-stone-fruit.webp` |
| `wiki/ingredients/plums.md` | Plums | `quartz/static/heroes/orchard-fruit-apples-pears-stone-fruit.webp` |
| `wiki/ingredients/blueberries.md` | Blueberries | `quartz/static/heroes/berries-grapes-raisins.webp` |
| `wiki/ingredients/raspberries.md` | Raspberries | `quartz/static/heroes/berries-grapes-raisins.webp` |
| `wiki/ingredients/strawberries.md` | Strawberries | `quartz/static/heroes/berries-grapes-raisins.webp` |
| `wiki/ingredients/grapes.md` | Grapes | `quartz/static/heroes/berries-grapes-raisins.webp` |
| `wiki/ingredients/raisins.md` | Raisins | `quartz/static/heroes/berries-grapes-raisins.webp` |
| `wiki/ingredients/oranges.md` | Oranges | `quartz/static/heroes/citrus-oranges-tangerines-grapefruit-juice.webp` |
| `wiki/ingredients/clementines-tangerines.md` | Clementines and tangerines | `quartz/static/heroes/citrus-oranges-tangerines-grapefruit-juice.webp` |
| `wiki/ingredients/grapefruit.md` | Grapefruit | `quartz/static/heroes/citrus-oranges-tangerines-grapefruit-juice.webp` |
| `wiki/ingredients/orange-juice.md` | Orange juice | `quartz/static/heroes/citrus-oranges-tangerines-grapefruit-juice.webp` |
| `wiki/ingredients/grapefruit-juice.md` | Grapefruit juice | `quartz/static/heroes/citrus-oranges-tangerines-grapefruit-juice.webp` |
| `wiki/ingredients/banana.md` | Banana | `quartz/static/heroes/tropical-fruit-banana-mango-pineapple.webp` |
| `wiki/ingredients/mango.md` | Mango | `quartz/static/heroes/tropical-fruit-banana-mango-pineapple.webp` |
| `wiki/ingredients/pineapple.md` | Pineapple | `quartz/static/heroes/tropical-fruit-banana-mango-pineapple.webp` |
| `wiki/ingredients/guava.md` | Guava | `quartz/static/heroes/tropical-fruit-banana-mango-pineapple.webp` |
| `wiki/ingredients/coconut.md` | Coconut | `quartz/static/heroes/tropical-fruit-banana-mango-pineapple.webp` |
| `wiki/ingredients/cantaloupe.md` | Cantaloupe | `quartz/static/heroes/melons-watermelon-cantaloupe-mixed-fruit.webp` |
| `wiki/ingredients/melon.md` | Melon | `quartz/static/heroes/melons-watermelon-cantaloupe-mixed-fruit.webp` |
| `wiki/ingredients/watermelon.md` | Watermelon | `quartz/static/heroes/melons-watermelon-cantaloupe-mixed-fruit.webp` |
| `wiki/ingredients/fruit-mixed.md` | Fruit Mixed | `quartz/static/heroes/melons-watermelon-cantaloupe-mixed-fruit.webp` |
| `wiki/ingredients/fruit.md` | Fruit | `quartz/static/heroes/melons-watermelon-cantaloupe-mixed-fruit.webp` |

## Batch 3: Grain and cereal ingredients (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/rice.md` | Rice | `quartz/static/heroes/rice-grain-flour-noodles-cakes.webp` |
| `wiki/ingredients/rice-flour.md` | Rice Flour | `quartz/static/heroes/rice-grain-flour-noodles-cakes.webp` |
| `wiki/ingredients/rice-noodles.md` | Rice noodles | `quartz/static/heroes/rice-grain-flour-noodles-cakes.webp` |
| `wiki/ingredients/rice-puffs.md` | Rice Puffs | `quartz/static/heroes/rice-grain-flour-noodles-cakes.webp` |
| `wiki/ingredients/rice-cakes.md` | Rice cakes | `quartz/static/heroes/rice-grain-flour-noodles-cakes.webp` |
| `wiki/ingredients/wheat.md` | Wheat | `quartz/static/heroes/wheat-grain-flour-bread.webp` |
| `wiki/ingredients/wheat-flour.md` | Wheat flour | `quartz/static/heroes/wheat-grain-flour-bread.webp` |
| `wiki/ingredients/bread.md` | Bread | `quartz/static/heroes/wheat-grain-flour-bread.webp` |
| `wiki/ingredients/white-bread.md` | White bread | `quartz/static/heroes/wheat-grain-flour-bread.webp` |
| `wiki/ingredients/whole-wheat-bread.md` | Whole wheat bread | `quartz/static/heroes/wheat-grain-flour-bread.webp` |
| `wiki/ingredients/oat.md` | Oat | `quartz/static/heroes/oats-porridge-granola-bran-cereals.webp` |
| `wiki/ingredients/oatmeal.md` | Oatmeal | `quartz/static/heroes/oats-porridge-granola-bran-cereals.webp` |
| `wiki/ingredients/granola.md` | Granola | `quartz/static/heroes/oats-porridge-granola-bran-cereals.webp` |
| `wiki/ingredients/oat-ring-cereal.md` | Oat ring cereal | `quartz/static/heroes/oats-porridge-granola-bran-cereals.webp` |
| `wiki/ingredients/bran-cereal-with-raisins.md` | Bran cereal with raisins | `quartz/static/heroes/oats-porridge-granola-bran-cereals.webp` |
| `wiki/ingredients/corn.md` | Corn | `quartz/static/heroes/corn-flakes-grits-tortilla-cornbread.webp` |
| `wiki/ingredients/corn-flakes.md` | Corn flakes cereal | `quartz/static/heroes/corn-flakes-grits-tortilla-cornbread.webp` |
| `wiki/ingredients/corn-grits.md` | Corn/hominy grits | `quartz/static/heroes/corn-flakes-grits-tortilla-cornbread.webp` |
| `wiki/ingredients/corn-tortilla.md` | Corn tortilla | `quartz/static/heroes/corn-flakes-grits-tortilla-cornbread.webp` |
| `wiki/ingredients/cornbread.md` | Cornbread | `quartz/static/heroes/corn-flakes-grits-tortilla-cornbread.webp` |
| `wiki/ingredients/pasta.md` | Pasta | `quartz/static/heroes/pasta-noodles-quinoa-grains.webp` |
| `wiki/ingredients/noodles.md` | Noodles | `quartz/static/heroes/pasta-noodles-quinoa-grains.webp` |
| `wiki/ingredients/egg-noodles.md` | Egg noodles | `quartz/static/heroes/pasta-noodles-quinoa-grains.webp` |
| `wiki/ingredients/whole-wheat-pasta.md` | Whole wheat pasta | `quartz/static/heroes/pasta-noodles-quinoa-grains.webp` |
| `wiki/ingredients/quinoa.md` | Quinoa | `quartz/static/heroes/pasta-noodles-quinoa-grains.webp` |

## Batch 4: Infant food and formula product categories (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/infant-formula-powder.md` | Infant Formula Powder | `quartz/static/heroes/infant-formula-powder-unmarked-container.webp` |
| `wiki/products/infant-formula-powder-non-soy.md` | Infant Formula, Powder (Non-Soy) | `quartz/static/heroes/infant-formula-powder-unmarked-container.webp` |
| `wiki/products/infant-formula-powder-dairy.md` | Infant Formula Powder Dairy | `quartz/static/heroes/infant-formula-powder-unmarked-container.webp` |
| `wiki/products/infant-formula-dairy.md` | Infant Formula Dairy | `quartz/static/heroes/infant-formula-powder-unmarked-container.webp` |
| `wiki/products/infant-formula.md` | Infant Formula | `quartz/static/heroes/infant-formula-powder-unmarked-container.webp` |
| `wiki/products/infant-formula-powder-soy-based.md` | Infant Formula, Powder (Soy-Based) | `quartz/static/heroes/soy-formula-powder-liquid-context.webp` |
| `wiki/products/infant-formula-powder-soy.md` | Infant Formula Powder Soy | `quartz/static/heroes/soy-formula-powder-liquid-context.webp` |
| `wiki/products/infant-formula-dairy-free.md` | Infant Formula Dairy Free | `quartz/static/heroes/soy-formula-powder-liquid-context.webp` |
| `wiki/products/infant-formula-rtf-soy.md` | Infant Formula Rtf Soy | `quartz/static/heroes/soy-formula-powder-liquid-context.webp` |
| `wiki/products/infant-formula-rtf-liquid-soy-based.md` | Infant Formula, RTF Liquid (Soy-Based) | `quartz/static/heroes/soy-formula-powder-liquid-context.webp` |
| `wiki/products/infant-formula-concentrated-liquid-non-soy.md` | Infant Formula, Concentrated Liquid (Non-Soy) | `quartz/static/heroes/liquid-formula-closed-unmarked-bottles.webp` |
| `wiki/products/infant-formula-rtf-dairy.md` | Infant Formula Rtf Dairy | `quartz/static/heroes/liquid-formula-closed-unmarked-bottles.webp` |
| `wiki/products/infant-formula-rtf-liquid-non-soy.md` | Infant Formula, RTF Liquid (Non-Soy) | `quartz/static/heroes/liquid-formula-closed-unmarked-bottles.webp` |
| `wiki/products/infant-formula-stage1.md` | Infant Formula Stage1 | `quartz/static/heroes/liquid-formula-closed-unmarked-bottles.webp` |
| `wiki/products/infant-formula-concentrated-liquid-soy-based.md` | Infant Formula, Concentrated Liquid (Soy-Based) | `quartz/static/heroes/liquid-formula-closed-unmarked-bottles.webp` |
| `wiki/products/baby-cereals-dry-non-rice.md` | Baby Cereals / Grain Products, Dry (Non-Rice) | `quartz/static/heroes/infant-cereal-rice-oats-porridge.webp` |
| `wiki/products/baby-cereals-dry-rice-based.md` | Baby Cereals / Grain Products, Dry (Rice-Based) | `quartz/static/heroes/infant-cereal-rice-oats-porridge.webp` |
| `wiki/products/infant-cereal.md` | Infant Cereal | `quartz/static/heroes/infant-cereal-rice-oats-porridge.webp` |
| `wiki/products/infant-rice-cereal.md` | Infant Rice Cereal | `quartz/static/heroes/infant-cereal-rice-oats-porridge.webp` |
| `wiki/products/infant-porridges-dairy-free.md` | Infant Porridges Dairy Free | `quartz/static/heroes/infant-cereal-rice-oats-porridge.webp` |
| `wiki/products/infant-food-puree-fruit.md` | Infant Food Puree Fruit | `quartz/static/heroes/infant-food-purees-unmarked-bowls.webp` |
| `wiki/products/infant-food-puree-vegetable.md` | Infant Food Puree Vegetable | `quartz/static/heroes/infant-food-purees-unmarked-bowls.webp` |
| `wiki/products/infant-food-puree-mixed-meat.md` | Infant Food Puree Mixed Meat | `quartz/static/heroes/infant-food-purees-unmarked-bowls.webp` |
| `wiki/products/infant-food-puree-poultry.md` | Infant Food Puree Poultry | `quartz/static/heroes/infant-food-purees-unmarked-bowls.webp` |
| `wiki/products/infant-food-puree-fish.md` | Infant Food Puree Fish | `quartz/static/heroes/infant-food-purees-unmarked-bowls.webp` |

## Batch 5: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/about.md` | About | Subject-fit review, then canonical hero |
| `wiki/advisory/skin-lightening-products.md` | advisory/skin-lightening-products | Subject-fit review, then canonical hero |
| `wiki/app/index.md` | Consumer app model | Subject-fit review, then canonical hero |
| `wiki/ask.md` | Ask the Index | Subject-fit review, then canonical hero |
| `wiki/audits/2026-05-17-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-05-28-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-05-30-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-05-31-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-06-01-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-06-02-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-06-05-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-06-08-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-06-23-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-07-30-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-08-01-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-08-02-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-08-04-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-08-11-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-08-18-baseline.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/audits/2026-10-16-baseline.md` | Audit dashboard: 2026-10-16 | Subject-fit review, then canonical hero |
| `wiki/audits/index.md` | Audit dashboard | Subject-fit review, then canonical hero |
| `wiki/authors/karen-pendergrass.md` | Karen Pendergrass | Subject-fit review, then canonical hero |
| `wiki/certification/index.md` | Certification | Subject-fit review, then canonical hero |
| `wiki/certification/lab-result-comparator.md` | Lab Result Comparator | Subject-fit review, then canonical hero |
| `wiki/contact.md` | Contact | Subject-fit review, then canonical hero |

## Batch 6: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/corpus/by-metal/Al.md` | Corpus By Metal - Al | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/Cd.md` | Corpus By Metal - Cd | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/Cr.md` | Corpus By Metal - Cr | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/iAs.md` | Corpus By Metal - iAs | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/MeHg.md` | Corpus By Metal - MeHg | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/Ni.md` | Corpus By Metal - Ni | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/Pb.md` | Corpus By Metal - Pb | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/Sn.md` | Corpus By Metal - Sn | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/tAs.md` | Corpus By Metal - tAs | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/tHg.md` | Corpus By Metal - tHg | Subject-fit review, then canonical hero |
| `wiki/corpus/by-metal/U.md` | Corpus By Metal - U | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/baby-cereals-dry-non-rice.md` | Corpus By Product - baby-cereals-dry-non-rice | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/baby-cereals-dry-rice-based.md` | Corpus By Product - baby-cereals-dry-rice-based | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/fruit-purees.md` | Corpus By Product - fruit-purees | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/infant-formula-powder-non-soy.md` | Corpus By Product - infant-formula-powder-non-soy | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/infant-formula-powder-soy-based.md` | Corpus By Product - infant-formula-powder-soy-based | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/plant-milks-non-soy-non-rice.md` | Corpus By Product - plant-milks-non-soy-non-rice | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/plant-milks-rice-based.md` | Corpus By Product - plant-milks-rice-based | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/plant-milks-soy-based.md` | Corpus By Product - plant-milks-soy-based | Subject-fit review, then canonical hero |
| `wiki/corpus/by-product/root-vegetable-purees.md` | Corpus By Product - root-vegetable-purees | Subject-fit review, then canonical hero |
| `wiki/corpus/index.md` | Raw Markdown Corpus Pilot | Subject-fit review, then canonical hero |
| `wiki/corpus/promotion-queue.md` | Corpus Promotion Queue | Subject-fit review, then canonical hero |
| `wiki/courses/index.md` | Courses | Subject-fit review, then canonical hero |
| `wiki/coverage.md` | Corpus coverage and methodology transparency | Subject-fit review, then canonical hero |
| `wiki/curators.md` | Curators and conflict-of-interest disclosure | Subject-fit review, then canonical hero |

## Batch 7: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/data.md` | Data and downloads | Subject-fit review, then canonical hero |
| `wiki/editorial-standards.md` | Editorial standards | Subject-fit review, then canonical hero |
| `wiki/errata.md` | Errata and corrections | Subject-fit review, then canonical hero |
| `wiki/health/cat-2-non-ingestion-exposure-pathways.md` | Cat 2 (Children Personal Care) non-ingestion exposure pathways | Subject-fit review, then canonical hero |
| `wiki/health/index.md` | Health | Subject-fit review, then canonical hero |
| `wiki/heavy-metal-tested-certified.md` | Heavy Metal Tested & Certified | Subject-fit review, then canonical hero |
| `wiki/index.md` | Heavy Metal Index | Subject-fit review, then canonical hero |
| `wiki/ingredients/almond-beverage.md` | Almond beverage | Subject-fit review, then canonical hero |
| `wiki/ingredients/almond.md` | Almond | Subject-fit review, then canonical hero |
| `wiki/ingredients/apple-cider-vinegar.md` | Apple Cider Vinegar | Subject-fit review, then canonical hero |
| `wiki/ingredients/apple-juice.md` | Apple juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/apple-pie.md` | Apple pie | Subject-fit review, then canonical hero |
| `wiki/ingredients/applesauce.md` | Applesauce | Subject-fit review, then canonical hero |
| `wiki/ingredients/avocado.md` | Avocado | Subject-fit review, then canonical hero |
| `wiki/ingredients/baby-cereals-dry.md` | Baby Cereals Dry | Subject-fit review, then canonical hero |
| `wiki/ingredients/baby-food.md` | Baby Food | Subject-fit review, then canonical hero |
| `wiki/ingredients/bagel.md` | Bagel | Subject-fit review, then canonical hero |
| `wiki/ingredients/baked-beans.md` | Baked beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/baked-potato-with-peel.md` | Baked potato with peel | Subject-fit review, then canonical hero |
| `wiki/ingredients/baking-powder.md` | Baking powder | Subject-fit review, then canonical hero |
| `wiki/ingredients/balsamic-vinegar.md` | Balsamic Vinegar | Subject-fit review, then canonical hero |
| `wiki/ingredients/barbecue-sauce.md` | Barbecue sauce | Subject-fit review, then canonical hero |
| `wiki/ingredients/beans.md` | Beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/bee-pollen.md` | Bee Pollen | Subject-fit review, then canonical hero |
| `wiki/ingredients/beef.md` | Beef | Subject-fit review, then canonical hero |

## Batch 8: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/beer.md` | Beer | Subject-fit review, then canonical hero |
| `wiki/ingredients/beverages.md` | Beverages | Subject-fit review, then canonical hero |
| `wiki/ingredients/biscuits.md` | Biscuits | Subject-fit review, then canonical hero |
| `wiki/ingredients/bivalve-molluscs.md` | Bivalve Molluscs (Excluding Oysters) | Subject-fit review, then canonical hero |
| `wiki/ingredients/black-beans.md` | Black beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/black-pepper.md` | Black Pepper | Subject-fit review, then canonical hero |
| `wiki/ingredients/blueberry-muffin.md` | Blueberry muffin | Subject-fit review, then canonical hero |
| `wiki/ingredients/bologna-luncheon-meat.md` | Bologna luncheon meat | Subject-fit review, then canonical hero |
| `wiki/ingredients/breadcrumbs.md` | Breadcrumbs | Subject-fit review, then canonical hero |
| `wiki/ingredients/breastmilk.md` | Breastmilk | Subject-fit review, then canonical hero |
| `wiki/ingredients/broccoli-cheese-soup.md` | Broccoli cheese soup | Subject-fit review, then canonical hero |
| `wiki/ingredients/brown-gravy.md` | Brown gravy | Subject-fit review, then canonical hero |
| `wiki/ingredients/brownie.md` | Brownie | Subject-fit review, then canonical hero |
| `wiki/ingredients/butter-crackers.md` | Butter crackers | Subject-fit review, then canonical hero |
| `wiki/ingredients/butter.md` | Butter | Subject-fit review, then canonical hero |
| `wiki/ingredients/camellia-sinensis.md` | Camellia sinensis | Subject-fit review, then canonical hero |
| `wiki/ingredients/canned-corn.md` | Canned corn | Subject-fit review, then canonical hero |
| `wiki/ingredients/canned-fruit-cocktail.md` | Canned fruit cocktail | Subject-fit review, then canonical hero |
| `wiki/ingredients/canned-green-beans.md` | Canned green beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/canned-mushrooms.md` | Canned mushrooms | Subject-fit review, then canonical hero |
| `wiki/ingredients/canned-spaghetti.md` | Canned spaghetti in tomato sauce | Subject-fit review, then canonical hero |
| `wiki/ingredients/canned-tomatoes.md` | Canned tomatoes | Subject-fit review, then canonical hero |
| `wiki/ingredients/canned-tuna.md` | Canned Tuna | Subject-fit review, then canonical hero |
| `wiki/ingredients/casein.md` | Casein | Subject-fit review, then canonical hero |
| `wiki/ingredients/cashews.md` | Cashews | Subject-fit review, then canonical hero |

## Batch 9: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/categories/beverages-and-water.md` | Beverages & water | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/dairy-and-eggs.md` | Dairy & eggs | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/fish-and-seafood.md` | Fish & seafood | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/fruits.md` | Fruits | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/grains-and-cereals.md` | Grains & cereals | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/herbs-spices-and-botanicals.md` | Herbs, spices & botanicals | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/legumes-and-pulses.md` | Legumes & pulses | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/meat-and-poultry.md` | Meat & poultry | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/nuts-and-seeds.md` | Nuts & seeds | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/oils-and-fats.md` | Oils & fats | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/other.md` | Other | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/prepared-and-composite-foods.md` | Prepared & composite foods | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/sweeteners-and-condiments.md` | Sweeteners & condiments | Subject-fit review, then canonical hero |
| `wiki/ingredients/categories/vegetables.md` | Vegetables | Subject-fit review, then canonical hero |
| `wiki/ingredients/catfish.md` | Catfish | Subject-fit review, then canonical hero |
| `wiki/ingredients/cereal-bars.md` | Cereal Bars | Subject-fit review, then canonical hero |
| `wiki/ingredients/cereal-based-infant-formula.md` | Cereal Based Infant Formula | Subject-fit review, then canonical hero |
| `wiki/ingredients/cereal.md` | Cereal | Subject-fit review, then canonical hero |
| `wiki/ingredients/cereals.md` | Cereals | Subject-fit review, then canonical hero |
| `wiki/ingredients/chapattis.md` | Chapattis | Subject-fit review, then canonical hero |
| `wiki/ingredients/cheddar-cheese.md` | Cheddar cheese | Subject-fit review, then canonical hero |
| `wiki/ingredients/cheese-crackers.md` | Cheese crackers | Subject-fit review, then canonical hero |
| `wiki/ingredients/cheese-pizza.md` | Cheese pizza | Subject-fit review, then canonical hero |
| `wiki/ingredients/chicken-broth.md` | Chicken broth | Subject-fit review, then canonical hero |
| `wiki/ingredients/chicken-noodle-soup.md` | Chicken noodle soup | Subject-fit review, then canonical hero |

## Batch 10: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/chicken-nuggets.md` | Chicken nuggets | Subject-fit review, then canonical hero |
| `wiki/ingredients/chicken-potpie.md` | Chicken potpie | Subject-fit review, then canonical hero |
| `wiki/ingredients/chicken.md` | Chicken | Subject-fit review, then canonical hero |
| `wiki/ingredients/chickpeas.md` | Chickpeas | Subject-fit review, then canonical hero |
| `wiki/ingredients/chili-con-carne-with-beans.md` | Chili con carne with beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/chitosan.md` | Chitosan | Subject-fit review, then canonical hero |
| `wiki/ingredients/chocolate-cake.md` | Chocolate cake with chocolate icing | Subject-fit review, then canonical hero |
| `wiki/ingredients/chocolate-chip-cookies.md` | Chocolate chip cookies | Subject-fit review, then canonical hero |
| `wiki/ingredients/chocolate-nut-candy.md` | Chocolate nut candy | Subject-fit review, then canonical hero |
| `wiki/ingredients/chocolate-pudding.md` | Chocolate pudding | Subject-fit review, then canonical hero |
| `wiki/ingredients/chocolate-reduced-fat-milk.md` | Chocolate reduced-fat milk | Subject-fit review, then canonical hero |
| `wiki/ingredients/chocolate-syrup.md` | Chocolate syrup | Subject-fit review, then canonical hero |
| `wiki/ingredients/chocolate.md` | Chocolate | Subject-fit review, then canonical hero |
| `wiki/ingredients/cinnamon-roll.md` | Cinnamon roll | Subject-fit review, then canonical hero |
| `wiki/ingredients/cinnamon.md` | Cinnamon | Subject-fit review, then canonical hero |
| `wiki/ingredients/clam-chowder.md` | Clam chowder | Subject-fit review, then canonical hero |
| `wiki/ingredients/cocoa.md` | Cocoa | Subject-fit review, then canonical hero |
| `wiki/ingredients/coconut-water.md` | Coconut water | Subject-fit review, then canonical hero |
| `wiki/ingredients/cod.md` | Cod | Subject-fit review, then canonical hero |
| `wiki/ingredients/coffee.md` | Coffee | Subject-fit review, then canonical hero |
| `wiki/ingredients/cola.md` | Cola | Subject-fit review, then canonical hero |
| `wiki/ingredients/corn-oil.md` | Corn Oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/cosmetic-clay.md` | Cosmetic clay | Subject-fit review, then canonical hero |
| `wiki/ingredients/cottage-cheese.md` | Cottage cheese | Subject-fit review, then canonical hero |
| `wiki/ingredients/cow-milk-infant-formula.md` | Cow Milk Infant Formula | Subject-fit review, then canonical hero |

## Batch 11: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/cranberry-juice-cocktail.md` | Cranberry juice cocktail | Subject-fit review, then canonical hero |
| `wiki/ingredients/cream-cheese.md` | Cream cheese | Subject-fit review, then canonical hero |
| `wiki/ingredients/cream-of-mushroom-soup.md` | Cream of mushroom soup | Subject-fit review, then canonical hero |
| `wiki/ingredients/cream-of-potato-soup.md` | Cream of potato soup | Subject-fit review, then canonical hero |
| `wiki/ingredients/cream-of-wheat.md` | Cream of wheat | Subject-fit review, then canonical hero |
| `wiki/ingredients/crisped-rice-cereal.md` | Crisped rice cereal | Subject-fit review, then canonical hero |
| `wiki/ingredients/cumin.md` | Cumin | Subject-fit review, then canonical hero |
| `wiki/ingredients/custard.md` | Custard | Subject-fit review, then canonical hero |
| `wiki/ingredients/diet-cola.md` | Diet cola | Subject-fit review, then canonical hero |
| `wiki/ingredients/dill-pickles.md` | Dill pickles | Subject-fit review, then canonical hero |
| `wiki/ingredients/doughnut.md` | Doughnut | Subject-fit review, then canonical hero |
| `wiki/ingredients/dried-herbs.md` | Dried Herbs | Subject-fit review, then canonical hero |
| `wiki/ingredients/eggs.md` | Eggs | Subject-fit review, then canonical hero |
| `wiki/ingredients/energy-drink.md` | Energy drink | Subject-fit review, then canonical hero |
| `wiki/ingredients/english-muffin.md` | English muffin | Subject-fit review, then canonical hero |
| `wiki/ingredients/fermented-beverage-bases.md` | Fermented beverage bases | Subject-fit review, then canonical hero |
| `wiki/ingredients/fish-containing-baby-foods.md` | Fish Containing Baby Foods | Subject-fit review, then canonical hero |
| `wiki/ingredients/fish-fingers.md` | Fish fingers | Subject-fit review, then canonical hero |
| `wiki/ingredients/fish.md` | Fish | Subject-fit review, then canonical hero |
| `wiki/ingredients/flavored-carbonated-bottled-waters.md` | Flavored carbonated bottled waters | Subject-fit review, then canonical hero |
| `wiki/ingredients/flavoring.md` | Flavoring | Subject-fit review, then canonical hero |
| `wiki/ingredients/flour-tortilla.md` | Flour tortilla | Subject-fit review, then canonical hero |
| `wiki/ingredients/frankfurter.md` | Frankfurter | Subject-fit review, then canonical hero |
| `wiki/ingredients/french-fries.md` | French fries | Subject-fit review, then canonical hero |
| `wiki/ingredients/fresh-herbs.md` | Fresh Herbs | Subject-fit review, then canonical hero |

## Batch 12: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/freshwater-fish.md` | Freshwater Fish | Subject-fit review, then canonical hero |
| `wiki/ingredients/fromage-frais.md` | Fromage frais | Subject-fit review, then canonical hero |
| `wiki/ingredients/frozen-peas.md` | Frozen peas | Subject-fit review, then canonical hero |
| `wiki/ingredients/frozen-yogurt.md` | Frozen yogurt | Subject-fit review, then canonical hero |
| `wiki/ingredients/fruit-ice-pop.md` | Fruit ice pop | Subject-fit review, then canonical hero |
| `wiki/ingredients/fruit-juice-ready-drinks.md` | Fruit juice ready drinks | Subject-fit review, then canonical hero |
| `wiki/ingredients/fruit-juice.md` | Fruit Juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/fruit-purees.md` | Fruit Purees | Subject-fit review, then canonical hero |
| `wiki/ingredients/fruit-snack-candy.md` | Fruit snack candy | Subject-fit review, then canonical hero |
| `wiki/ingredients/garlic.md` | Garlic | Subject-fit review, then canonical hero |
| `wiki/ingredients/gelatin-dessert.md` | Gelatin dessert | Subject-fit review, then canonical hero |
| `wiki/ingredients/graham-crackers.md` | Graham crackers | Subject-fit review, then canonical hero |
| `wiki/ingredients/grape-jelly.md` | Grape jelly | Subject-fit review, then canonical hero |
| `wiki/ingredients/grape-juice.md` | Grape Juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/green-beans.md` | Green beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/ground-beef.md` | Ground beef | Subject-fit review, then canonical hero |
| `wiki/ingredients/half-and-half.md` | Half and half | Subject-fit review, then canonical hero |
| `wiki/ingredients/ham.md` | Ham | Subject-fit review, then canonical hero |
| `wiki/ingredients/hard-candy.md` | Hard candy | Subject-fit review, then canonical hero |
| `wiki/ingredients/hazelnuts.md` | Hazelnuts | Subject-fit review, then canonical hero |
| `wiki/ingredients/herbal-botanicals.md` | Herbal botanicals | Subject-fit review, then canonical hero |
| `wiki/ingredients/herbs-and-spices.md` | Herbs And Spices | Subject-fit review, then canonical hero |
| `wiki/ingredients/honey.md` | Honey | Subject-fit review, then canonical hero |
| `wiki/ingredients/ice-cream.md` | Ice cream | Subject-fit review, then canonical hero |
| `wiki/ingredients/index.md` | Ingredients | Subject-fit review, then canonical hero |

## Batch 13: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/infant-cereal-ingredients.md` | Infant Cereal Ingredients | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-formula-concentrated-liquid.md` | Infant Formula Concentrated Liquid | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-formula-ingredients.md` | Infant Formula Ingredients | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-formula-powder.md` | Infant Formula Powder | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-formula-rtf-liquid.md` | Infant Formula Rtf Liquid | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-formula.md` | Infant Formula | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-mixed-grain-cereal.md` | Infant Mixed Grain Cereal | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-oat-cereal.md` | Infant Oat Cereal | Subject-fit review, then canonical hero |
| `wiki/ingredients/infant-rice-cereal.md` | Infant Rice Cereal | Subject-fit review, then canonical hero |
| `wiki/ingredients/iodized-salt.md` | Iodized salt | Subject-fit review, then canonical hero |
| `wiki/ingredients/italian-dressing.md` | Italian dressing | Subject-fit review, then canonical hero |
| `wiki/ingredients/jujube-fruit.md` | Jujube Fruit | Subject-fit review, then canonical hero |
| `wiki/ingredients/ketchup.md` | Ketchup | Subject-fit review, then canonical hero |
| `wiki/ingredients/kidney-beans.md` | Kidney beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/lamb-chop.md` | Lamb chop | Subject-fit review, then canonical hero |
| `wiki/ingredients/leafy-greens.md` | Leafy Greens | Subject-fit review, then canonical hero |
| `wiki/ingredients/legumes.md` | Legumes | Subject-fit review, then canonical hero |
| `wiki/ingredients/lemon-juice.md` | Lemon juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/lemon-lime-soft-drink.md` | Lemon lime soft drink | Subject-fit review, then canonical hero |
| `wiki/ingredients/lentils.md` | Lentils | Subject-fit review, then canonical hero |
| `wiki/ingredients/lima-beans.md` | Lima beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/macaroni-and-cheese.md` | Macaroni and cheese | Subject-fit review, then canonical hero |
| `wiki/ingredients/mango-juice.md` | Mango Juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/margarine.md` | Margarine | Subject-fit review, then canonical hero |
| `wiki/ingredients/marlin.md` | Marlin | Subject-fit review, then canonical hero |

## Batch 14: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/matcha-powder.md` | Matcha powder | Subject-fit review, then canonical hero |
| `wiki/ingredients/mayonnaise.md` | Mayonnaise | Subject-fit review, then canonical hero |
| `wiki/ingredients/meal-replacement-drink.md` | Meal replacement drink | Subject-fit review, then canonical hero |
| `wiki/ingredients/meat-and-poultry-purees.md` | Meat And Poultry Purees | Subject-fit review, then canonical hero |
| `wiki/ingredients/meat-and-poultry.md` | Meat and Poultry | Subject-fit review, then canonical hero |
| `wiki/ingredients/meat.md` | Meat and poultry | Subject-fit review, then canonical hero |
| `wiki/ingredients/milk-and-dairy.md` | Milk and Dairy | Subject-fit review, then canonical hero |
| `wiki/ingredients/milk-based-infant-formula.md` | Milk Based Infant Formula | Subject-fit review, then canonical hero |
| `wiki/ingredients/milkshake.md` | Milkshake | Subject-fit review, then canonical hero |
| `wiki/ingredients/mixed-meals.md` | Mixed Meals | Subject-fit review, then canonical hero |
| `wiki/ingredients/molluscs.md` | Molluscs | Subject-fit review, then canonical hero |
| `wiki/ingredients/monterey-jack-cheese.md` | Monterey jack cheese | Subject-fit review, then canonical hero |
| `wiki/ingredients/mozzarella.md` | Mozzarella | Subject-fit review, then canonical hero |
| `wiki/ingredients/mushrooms.md` | Mushrooms | Subject-fit review, then canonical hero |
| `wiki/ingredients/mustard.md` | Mustard | Subject-fit review, then canonical hero |
| `wiki/ingredients/niger-seed-oil.md` | Niger seed oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/non-apple-fruit.md` | Non-apple fruit | Subject-fit review, then canonical hero |
| `wiki/ingredients/non-dairy-creamer.md` | Non-dairy creamer | Subject-fit review, then canonical hero |
| `wiki/ingredients/non-rice-grains.md` | Non Rice Grains | Subject-fit review, then canonical hero |
| `wiki/ingredients/non-root-vegetable-purees.md` | Non-root vegetable purees | Subject-fit review, then canonical hero |
| `wiki/ingredients/non-root-vegetables.md` | Non-root vegetables | Subject-fit review, then canonical hero |
| `wiki/ingredients/non-soy-infant-formula.md` | Non-soy infant formula | Subject-fit review, then canonical hero |
| `wiki/ingredients/non-soy-protein-source.md` | Non Soy Protein Source | Subject-fit review, then canonical hero |
| `wiki/ingredients/olive-oil.md` | Olive Oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/olives.md` | Olives | Subject-fit review, then canonical hero |

## Batch 15: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/onions.md` | Onions | Subject-fit review, then canonical hero |
| `wiki/ingredients/organ-meats.md` | Organ Meats (Kidney and Liver) | Subject-fit review, then canonical hero |
| `wiki/ingredients/palm-oil.md` | Palm oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/pancake-syrup.md` | Pancake syrup | Subject-fit review, then canonical hero |
| `wiki/ingredients/pancakes.md` | Pancakes | Subject-fit review, then canonical hero |
| `wiki/ingredients/parsley.md` | Parsley | Subject-fit review, then canonical hero |
| `wiki/ingredients/pasta-sauce.md` | Pasta sauce | Subject-fit review, then canonical hero |
| `wiki/ingredients/peanut-butter.md` | Peanut butter | Subject-fit review, then canonical hero |
| `wiki/ingredients/peanut-oil.md` | Peanut Oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/peanuts.md` | Peanuts | Subject-fit review, then canonical hero |
| `wiki/ingredients/pear-juice.md` | Pear juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/pie-crust.md` | Pie crust | Subject-fit review, then canonical hero |
| `wiki/ingredients/pineapple-juice.md` | Pineapple juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/pinto-beans.md` | Pinto beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/plant-milk.md` | Plant milk base | Subject-fit review, then canonical hero |
| `wiki/ingredients/popcorn.md` | Popcorn | Subject-fit review, then canonical hero |
| `wiki/ingredients/pork-and-beans-canned.md` | Canned pork and beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/pork-bacon.md` | Pork bacon | Subject-fit review, then canonical hero |
| `wiki/ingredients/pork-chop.md` | Pork chop | Subject-fit review, then canonical hero |
| `wiki/ingredients/pork-sausages.md` | Pork sausages | Subject-fit review, then canonical hero |
| `wiki/ingredients/potato-chips.md` | Potato chips | Subject-fit review, then canonical hero |
| `wiki/ingredients/poultry.md` | Poultry | Subject-fit review, then canonical hero |
| `wiki/ingredients/pretzels.md` | Pretzels | Subject-fit review, then canonical hero |
| `wiki/ingredients/processed-american-cheese.md` | Processed American cheese | Subject-fit review, then canonical hero |
| `wiki/ingredients/protein-powder.md` | Protein powder | Subject-fit review, then canonical hero |

## Batch 16: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/pumpkin-pie.md` | Pumpkin pie | Subject-fit review, then canonical hero |
| `wiki/ingredients/ramen-soup.md` | Ramen soup | Subject-fit review, then canonical hero |
| `wiki/ingredients/ranch-dressing-low-calorie.md` | Ranch dressing low calorie | Subject-fit review, then canonical hero |
| `wiki/ingredients/ranch-dressing.md` | Ranch dressing | Subject-fit review, then canonical hero |
| `wiki/ingredients/rapeseed-oil.md` | Rapeseed Oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/red-wine.md` | Red wine | Subject-fit review, then canonical hero |
| `wiki/ingredients/reduced-fat-milk.md` | Reduced-fat milk | Subject-fit review, then canonical hero |
| `wiki/ingredients/refried-beans.md` | Refried beans | Subject-fit review, then canonical hero |
| `wiki/ingredients/rice-bran-oil.md` | Rice Bran Oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/rice-cereal.md` | Rice Cereal | Subject-fit review, then canonical hero |
| `wiki/ingredients/rice-milk.md` | Rice Milk | Subject-fit review, then canonical hero |
| `wiki/ingredients/root-vegetable-purees.md` | Root Vegetable Purees | Subject-fit review, then canonical hero |
| `wiki/ingredients/root-vegetables.md` | Root vegetables | Subject-fit review, then canonical hero |
| `wiki/ingredients/sage.md` | Sage | Subject-fit review, then canonical hero |
| `wiki/ingredients/salami.md` | Salami | Subject-fit review, then canonical hero |
| `wiki/ingredients/salmon.md` | Salmon | Subject-fit review, then canonical hero |
| `wiki/ingredients/salsa.md` | Salsa | Subject-fit review, then canonical hero |
| `wiki/ingredients/salt.md` | Salt | Subject-fit review, then canonical hero |
| `wiki/ingredients/saltine-crackers.md` | Saltine crackers | Subject-fit review, then canonical hero |
| `wiki/ingredients/sandwich-cookies.md` | Sandwich cookies | Subject-fit review, then canonical hero |
| `wiki/ingredients/sea-salt.md` | Sea salt | Subject-fit review, then canonical hero |
| `wiki/ingredients/seafood.md` | Seafood | Subject-fit review, then canonical hero |
| `wiki/ingredients/seaweed.md` | Seaweed | Subject-fit review, then canonical hero |
| `wiki/ingredients/semi-skimmed-milk.md` | Semi-skimmed milk | Subject-fit review, then canonical hero |
| `wiki/ingredients/sesame-oil.md` | Sesame Oil | Subject-fit review, then canonical hero |

## Batch 17: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/shark.md` | Shark | Subject-fit review, then canonical hero |
| `wiki/ingredients/shellfish.md` | Shellfish | Subject-fit review, then canonical hero |
| `wiki/ingredients/shrimp.md` | Shrimp | Subject-fit review, then canonical hero |
| `wiki/ingredients/skim-milk.md` | Skim milk | Subject-fit review, then canonical hero |
| `wiki/ingredients/soft-drink-bases.md` | Soft drink bases | Subject-fit review, then canonical hero |
| `wiki/ingredients/sorbet.md` | Sorbet | Subject-fit review, then canonical hero |
| `wiki/ingredients/sour-cream.md` | Sour cream | Subject-fit review, then canonical hero |
| `wiki/ingredients/soy-based-infant-formula.md` | Soy-based infant formula | Subject-fit review, then canonical hero |
| `wiki/ingredients/soy-milk.md` | Soy Milk | Subject-fit review, then canonical hero |
| `wiki/ingredients/soy-protein-isolate.md` | Soy Protein Isolate | Subject-fit review, then canonical hero |
| `wiki/ingredients/soy-sauce.md` | Soy sauce | Subject-fit review, then canonical hero |
| `wiki/ingredients/soy.md` | Soy | Subject-fit review, then canonical hero |
| `wiki/ingredients/soybean-oil.md` | Soybean Oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/spices.md` | Spices | Subject-fit review, then canonical hero |
| `wiki/ingredients/sports-drink-bases.md` | Sports drink bases | Subject-fit review, then canonical hero |
| `wiki/ingredients/sugar-cookies.md` | Sugar cookies | Subject-fit review, then canonical hero |
| `wiki/ingredients/sunflower-oil.md` | Sunflower Oil | Subject-fit review, then canonical hero |
| `wiki/ingredients/sunflower-seeds.md` | Sunflower Seeds | Subject-fit review, then canonical hero |
| `wiki/ingredients/swiss-cheese.md` | Swiss cheese | Subject-fit review, then canonical hero |
| `wiki/ingredients/swordfish.md` | Swordfish | Subject-fit review, then canonical hero |
| `wiki/ingredients/tea.md` | Tea | Subject-fit review, then canonical hero |
| `wiki/ingredients/teething-and-snacks.md` | Teething And Snacks | Subject-fit review, then canonical hero |
| `wiki/ingredients/tilapia.md` | Tilapia | Subject-fit review, then canonical hero |
| `wiki/ingredients/tinned-fish.md` | Tinned fish | Subject-fit review, then canonical hero |
| `wiki/ingredients/toaster-pastry.md` | Toaster pastry | Subject-fit review, then canonical hero |

## Batch 18: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/tofu.md` | Tofu | Subject-fit review, then canonical hero |
| `wiki/ingredients/tomato-paste.md` | Tomato Paste | Subject-fit review, then canonical hero |
| `wiki/ingredients/tomato-sauce.md` | Tomato sauce | Subject-fit review, then canonical hero |
| `wiki/ingredients/tomato-soup.md` | Tomato soup | Subject-fit review, then canonical hero |
| `wiki/ingredients/tortilla-chips.md` | Tortilla chips | Subject-fit review, then canonical hero |
| `wiki/ingredients/turkey-luncheon-meat.md` | Turkey luncheon meat | Subject-fit review, then canonical hero |
| `wiki/ingredients/turkey.md` | Turkey | Subject-fit review, then canonical hero |
| `wiki/ingredients/turmeric.md` | Turmeric | Subject-fit review, then canonical hero |
| `wiki/ingredients/vegetable-beef-soup.md` | Vegetable beef soup | Subject-fit review, then canonical hero |
| `wiki/ingredients/vegetable-juice.md` | Vegetable juice | Subject-fit review, then canonical hero |
| `wiki/ingredients/vegetable-oils.md` | Vegetable Oils | Subject-fit review, then canonical hero |
| `wiki/ingredients/vegetable-purees.md` | Vegetable Purees | Subject-fit review, then canonical hero |
| `wiki/ingredients/vegetable-soup.md` | Vegetable soup | Subject-fit review, then canonical hero |
| `wiki/ingredients/vegetables-mixed.md` | Vegetables Mixed | Subject-fit review, then canonical hero |
| `wiki/ingredients/vegetables.md` | Vegetables | Subject-fit review, then canonical hero |
| `wiki/ingredients/veggie-burger.md` | Veggie burger | Subject-fit review, then canonical hero |
| `wiki/ingredients/vinegar.md` | Vinegar | Subject-fit review, then canonical hero |
| `wiki/ingredients/vitamin-mineral-premix.md` | Vitamin Mineral Premix | Subject-fit review, then canonical hero |
| `wiki/ingredients/vodka.md` | Vodka | Subject-fit review, then canonical hero |
| `wiki/ingredients/walnuts.md` | Walnuts | Subject-fit review, then canonical hero |
| `wiki/ingredients/water.md` | Water | Subject-fit review, then canonical hero |
| `wiki/ingredients/wheat-cereal-biscuits.md` | Wheat cereal biscuits | Subject-fit review, then canonical hero |
| `wiki/ingredients/whey.md` | Whey | Subject-fit review, then canonical hero |
| `wiki/ingredients/whiskey.md` | Whiskey | Subject-fit review, then canonical hero |
| `wiki/ingredients/white-beans.md` | White beans | Subject-fit review, then canonical hero |

## Batch 19: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/ingredients/white-cake.md` | White cake | Subject-fit review, then canonical hero |
| `wiki/ingredients/white-fish.md` | White fish | Subject-fit review, then canonical hero |
| `wiki/ingredients/white-sugar.md` | White sugar | Subject-fit review, then canonical hero |
| `wiki/ingredients/white-wine.md` | White wine | Subject-fit review, then canonical hero |
| `wiki/ingredients/whole-milk.md` | Whole milk | Subject-fit review, then canonical hero |
| `wiki/ingredients/wholemeal-bread.md` | Wholemeal bread | Subject-fit review, then canonical hero |
| `wiki/ingredients/wild-mushrooms.md` | Wild Mushrooms | Subject-fit review, then canonical hero |
| `wiki/ingredients/wine-vinegar.md` | Wine Vinegar | Subject-fit review, then canonical hero |
| `wiki/ingredients/yam.md` | Yam | Subject-fit review, then canonical hero |
| `wiki/ingredients/yogurt.md` | Yogurt | Subject-fit review, then canonical hero |
| `wiki/licensing.md` | Licensing and downstream use | Subject-fit review, then canonical hero |
| `wiki/login.md` | Log in | Subject-fit review, then canonical hero |
| `wiki/metals/aluminum/evidence.md` | Aluminum evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/aluminum/evidence/page-2.md` | Aluminum evidence table: source records 201 to 334 | Subject-fit review, then canonical hero |
| `wiki/metals/antimony/evidence.md` | Antimony evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/antimony/evidence/page-2.md` | Antimony evidence table: source records 201 to 207 | Subject-fit review, then canonical hero |
| `wiki/metals/arsenic-inorganic/evidence.md` | Arsenic, Inorganic evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/arsenic-inorganic/evidence/page-2.md` | Arsenic, Inorganic evidence table: source records 201 to 275 | Subject-fit review, then canonical hero |
| `wiki/metals/arsenic-total/evidence.md` | Arsenic, Total evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/arsenic-total/evidence/page-2.md` | Arsenic, Total evidence table: source records 201 to 400 | Subject-fit review, then canonical hero |
| `wiki/metals/arsenic-total/evidence/page-3.md` | Arsenic, Total evidence table: source records 401 to 600 | Subject-fit review, then canonical hero |
| `wiki/metals/arsenic-total/evidence/page-4.md` | Arsenic, Total evidence table: source records 601 to 800 | Subject-fit review, then canonical hero |
| `wiki/metals/arsenic-total/evidence/page-5.md` | Arsenic, Total evidence table: source records 801 to 998 | Subject-fit review, then canonical hero |
| `wiki/metals/cadmium/evidence.md` | Cadmium evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/cadmium/evidence/page-2.md` | Cadmium evidence table: source records 201 to 400 | Subject-fit review, then canonical hero |

## Batch 20: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/metals/cadmium/evidence/page-3.md` | Cadmium evidence table: source records 401 to 600 | Subject-fit review, then canonical hero |
| `wiki/metals/cadmium/evidence/page-4.md` | Cadmium evidence table: source records 601 to 800 | Subject-fit review, then canonical hero |
| `wiki/metals/cadmium/evidence/page-5.md` | Cadmium evidence table: source records 801 to 1000 | Subject-fit review, then canonical hero |
| `wiki/metals/cadmium/evidence/page-6.md` | Cadmium evidence table: source records 1001 to 1200 | Subject-fit review, then canonical hero |
| `wiki/metals/cadmium/evidence/page-7.md` | Cadmium evidence table: source records 1201 to 1400 | Subject-fit review, then canonical hero |
| `wiki/metals/cadmium/evidence/page-8.md` | Cadmium evidence table: source records 1401 to 1459 | Subject-fit review, then canonical hero |
| `wiki/metals/chromium-hexavalent/evidence.md` | Chromium, Hexavalent evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/chromium/evidence.md` | Chromium evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/chromium/evidence/page-2.md` | Chromium evidence table: source records 201 to 400 | Subject-fit review, then canonical hero |
| `wiki/metals/chromium/evidence/page-3.md` | Chromium evidence table: source records 401 to 600 | Subject-fit review, then canonical hero |
| `wiki/metals/chromium/evidence/page-4.md` | Chromium evidence table: source records 601 to 735 | Subject-fit review, then canonical hero |
| `wiki/metals/index.md` | Metals | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence.md` | Lead evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence/page-2.md` | Lead evidence table: source records 201 to 400 | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence/page-3.md` | Lead evidence table: source records 401 to 600 | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence/page-4.md` | Lead evidence table: source records 601 to 800 | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence/page-5.md` | Lead evidence table: source records 801 to 1000 | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence/page-6.md` | Lead evidence table: source records 1001 to 1200 | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence/page-7.md` | Lead evidence table: source records 1201 to 1400 | Subject-fit review, then canonical hero |
| `wiki/metals/lead/evidence/page-8.md` | Lead evidence table: source records 1401 to 1486 | Subject-fit review, then canonical hero |
| `wiki/metals/mercury-methyl/evidence.md` | Methylmercury evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/mercury-total/evidence.md` | Mercury, Total evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/mercury-total/evidence/page-2.md` | Mercury, Total evidence table: source records 201 to 400 | Subject-fit review, then canonical hero |
| `wiki/metals/mercury-total/evidence/page-3.md` | Mercury, Total evidence table: source records 401 to 600 | Subject-fit review, then canonical hero |
| `wiki/metals/mercury-total/evidence/page-4.md` | Mercury, Total evidence table: source records 601 to 800 | Subject-fit review, then canonical hero |

## Batch 21: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/metals/mercury-total/evidence/page-5.md` | Mercury, Total evidence table: source records 801 to 835 | Subject-fit review, then canonical hero |
| `wiki/metals/nickel/evidence.md` | Nickel evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/nickel/evidence/page-2.md` | Nickel evidence table: source records 201 to 400 | Subject-fit review, then canonical hero |
| `wiki/metals/nickel/evidence/page-3.md` | Nickel evidence table: source records 401 to 600 | Subject-fit review, then canonical hero |
| `wiki/metals/nickel/evidence/page-4.md` | Nickel evidence table: source records 601 to 701 | Subject-fit review, then canonical hero |
| `wiki/metals/tin/evidence.md` | Tin evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/metals/uranium/evidence.md` | Uranium evidence table: all cited source records | Subject-fit review, then canonical hero |
| `wiki/methodology.md` | Methodology | Subject-fit review, then canonical hero |
| `wiki/methodology/corpus-genesis-2026-04.md` | Corpus Genesis — April 2026 Assembly | Subject-fit review, then canonical hero |
| `wiki/methodology/persistent-wiki-ingest-rule.md` | Persistent Wiki Ingest Rule | Subject-fit review, then canonical hero |
| `wiki/methodology/quality-assurance-audit-protocol.md` | Quality Assurance Audit Protocol | Subject-fit review, then canonical hero |
| `wiki/methodology/raw-reports-studies-ingest-workflow.md` | Raw reports and studies ingest workflow | Subject-fit review, then canonical hero |
| `wiki/methodology/search-strategy.md` | Search strategy and database coverage | Subject-fit review, then canonical hero |
| `wiki/microbiome/index.md` | Microbiome | Subject-fit review, then canonical hero |
| `wiki/microbiome/nickel-microbial-pathogenesis.md` | microbiome/nickel-microbial-pathogenesis | Subject-fit review, then canonical hero |
| `wiki/mitigation/agronomic.md` | Agronomic mitigation | Subject-fit review, then canonical hero |
| `wiki/mitigation/formulation.md` | Formulation mitigation | Subject-fit review, then canonical hero |
| `wiki/mitigation/index.md` | Mitigation | Subject-fit review, then canonical hero |
| `wiki/mitigation/packaging-and-storage.md` | Packaging and storage mitigation | Subject-fit review, then canonical hero |
| `wiki/mitigation/processing.md` | Processing mitigation | Subject-fit review, then canonical hero |
| `wiki/mitigation/remediation-evidence.md` | Remediation evidence; drivers and interventions | Subject-fit review, then canonical hero |
| `wiki/mitigation/supply-chain-screening.md` | Supply-chain screening | Subject-fit review, then canonical hero |
| `wiki/mitigation/testing-and-qc.md` | Testing and quality-control mitigation | Subject-fit review, then canonical hero |
| `wiki/overview.md` | overview | Subject-fit review, then canonical hero |
| `wiki/privacy.md` | Privacy Notice | Subject-fit review, then canonical hero |

## Batch 22: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/aas-injectable.md` | Injectable anabolic-androgenic steroids (AAS) | Subject-fit review, then canonical hero |
| `wiki/products/air-product-refill-materials.md` | Replacement/refill materials for any dispensing system (oil refills, gel refills, spray refills) | Subject-fit review, then canonical hero |
| `wiki/products/all-purpose-cleaners.md` | All-purpose cleaners | Subject-fit review, then canonical hero |
| `wiki/products/anti-static-products.md` | Anti-static products (liquid and sheets) | Subject-fit review, then canonical hero |
| `wiki/products/anti-wrinkle-wrinkle-release-products.md` | Anti-wrinkle/wrinkle-release products | Subject-fit review, then canonical hero |
| `wiki/products/antiperspirant.md` | Antiperspirant (Al-salt, dirty sibling of r9 deodorant) | Subject-fit review, then canonical hero |
| `wiki/products/appliance-cleaners.md` | Appliance cleaners (including stainless steel cleaners) | Subject-fit review, then canonical hero |
| `wiki/products/art-craft-materials.md` | Art & craft materials (paints, markers, crayons, colored pencils, inks, adhesives/glues, modeling clay, putties/gels/slimes, glitter/pigments, jewelry/craft kits) | Subject-fit review, then canonical hero |
| `wiki/products/automatic-dishwasher-detergents.md` | Automatic dishwasher detergents | Subject-fit review, then canonical hero |
| `wiki/products/automatic-puff-releasers.md` | Automatic puff releasers | Subject-fit review, then canonical hero |
| `wiki/products/baby-food.md` | Baby Food | Subject-fit review, then canonical hero |
| `wiki/products/baby-lotion-cream.md` | Baby Lotion / Baby Cream | Subject-fit review, then canonical hero |
| `wiki/products/baby-oil.md` | Baby Oil | Subject-fit review, then canonical hero |
| `wiki/products/baby-powder-cornstarch.md` | Baby Powder, Cornstarch-Based | Subject-fit review, then canonical hero |
| `wiki/products/baby-shampoo-body-wash.md` | Baby Shampoo / Baby Body Wash | Subject-fit review, then canonical hero |
| `wiki/products/baby-sunscreen-chemical.md` | Baby Sunscreen, Chemical | Subject-fit review, then canonical hero |
| `wiki/products/baby-sunscreen-mineral.md` | Baby Sunscreen, Mineral (ZnO + TiO2) | Subject-fit review, then canonical hero |
| `wiki/products/baby-talcum-powder.md` | Baby Talcum Powder | Subject-fit review, then canonical hero |
| `wiki/products/baby-wipes.md` | Baby wipes | Subject-fit review, then canonical hero |
| `wiki/products/bakeware.md` | Bakeware | Subject-fit review, then canonical hero |
| `wiki/products/bar-bath-soap.md` | Bar/bath soap (body-cleansing bars, toilet soap; medicated/skin-lightening bars cross-link advisory) | Subject-fit review, then canonical hero |
| `wiki/products/bathing-soaps.md` | Bathing soaps | Subject-fit review, then canonical hero |
| `wiki/products/bathroom-tub-tile-cleaners.md` | Bathroom/tub/tile cleaners | Subject-fit review, then canonical hero |
| `wiki/products/beef-product.md` | Beef | Subject-fit review, then canonical hero |
| `wiki/products/bibs.md` | Bibs | Subject-fit review, then canonical hero |

## Batch 23: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/biscuits.md` | Biscuits | Subject-fit review, then canonical hero |
| `wiki/products/blankets-and-sleep-sacks.md` | Blankets and sleep sacks | Subject-fit review, then canonical hero |
| `wiki/products/bleaching-whitening-additives.md` | Bleaching/whitening additives | Subject-fit review, then canonical hero |
| `wiki/products/body-hand-leave-on-skin-care.md` | Body/hand leave-on skin care | Subject-fit review, then canonical hero |
| `wiki/products/body-wash-shower-gel.md` | Body wash/shower gel | Subject-fit review, then canonical hero |
| `wiki/products/bottled-drinking-water.md` | Bottled drinking water (purified, spring, artesian) | Subject-fit review, then canonical hero |
| `wiki/products/bouillon-seasoning-blends.md` | Bouillon/stock cubes and powdered seasoning blends (dry rubs, gravy/seasoning packets) | Subject-fit review, then canonical hero |
| `wiki/products/bread-and-baked-goods.md` | Bread and baked goods | Subject-fit review, then canonical hero |
| `wiki/products/breakfast-cereal-non-rice.md` | Breakfast cereal — non-rice (wheat, oat, corn, mixed-grain) | Subject-fit review, then canonical hero |
| `wiki/products/breakfast-cereal-rice-based.md` | Breakfast cereal — rice-based (puffed rice, rice flakes, crisped rice) | Subject-fit review, then canonical hero |
| `wiki/products/breakfast-cereals.md` | Breakfast Cereals | Subject-fit review, then canonical hero |
| `wiki/products/breath-fresheners.md` | Breath fresheners (sprays/strips/lozenges) | Subject-fit review, then canonical hero |
| `wiki/products/butter-and-ghee.md` | Butter and ghee | Subject-fit review, then canonical hero |
| `wiki/products/cannabis-concentrates.md` | Concentrates and extracts | Subject-fit review, then canonical hero |
| `wiki/products/cannabis-edibles.md` | Edibles (gummies, baked goods, beverages) | Subject-fit review, then canonical hero |
| `wiki/products/cannabis-flower.md` | Cannabis flower / dried herb | Subject-fit review, then canonical hero |
| `wiki/products/cannabis-products.md` | Cannabis, Hemp & CBD Products (HMTc Category 25 master) | Subject-fit review, then canonical hero |
| `wiki/products/cannabis-tinctures-oils.md` | Tinctures and sublingual oils | Subject-fit review, then canonical hero |
| `wiki/products/cannabis-topicals.md` | Topicals (creams, balms, salves) | Subject-fit review, then canonical hero |
| `wiki/products/cannabis-vape-hardware.md` | Vape cartridges and hardware | Subject-fit review, then canonical hero |
| `wiki/products/canned-fish.md` | Canned Fish — REDIRECT (Cat 6 → canned-seafood) | Subject-fit review, then canonical hero |
| `wiki/products/canned-foods-general.md` | Canned Foods, General | Subject-fit review, then canonical hero |
| `wiki/products/canned-fruit.md` | Canned Fruit — REDIRECT (Cat 7 sub-variant of Canned foods, general) | Subject-fit review, then canonical hero |
| `wiki/products/canned-meats.md` | Canned meats (with tin flag) | Subject-fit review, then canonical hero |
| `wiki/products/canned-mushrooms.md` | Canned Mushrooms | Subject-fit review, then canonical hero |

## Batch 24: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/canned-seafood.md` | Canned seafood (with tin flag) | Subject-fit review, then canonical hero |
| `wiki/products/canned-tomatoes.md` | Canned Tomatoes — REDIRECT (Cat 7 sub-variant of Canned foods, general) | Subject-fit review, then canonical hero |
| `wiki/products/canned-vegetables.md` | Canned Vegetables — REDIRECT (Cat 7 sub-variant of Canned foods, general) | Subject-fit review, then canonical hero |
| `wiki/products/capillary-reed-wood-diffusers.md` | Capillary reed/wood diffusers | Subject-fit review, then canonical hero |
| `wiki/products/car-seats.md` | Car seats (if retained in HMTc scope) | Subject-fit review, then canonical hero |
| `wiki/products/carpet-cleaners.md` | Carpet cleaners | Subject-fit review, then canonical hero |
| `wiki/products/carpet-spot-removers.md` | Carpet spot removers | Subject-fit review, then canonical hero |
| `wiki/products/cashews.md` | Cashews | Subject-fit review, then canonical hero |
| `wiki/products/categories/beverages.md` | Beverages | Subject-fit review, then canonical hero |
| `wiki/products/categories/cannabis-hemp-and-cbd-products.md` | Cannabis, Hemp, and CBD Products | Subject-fit review, then canonical hero |
| `wiki/products/categories/children-s-toys-arts-and-crafts.md` | Children's Toys, Arts, and Crafts | Subject-fit review, then canonical hero |
| `wiki/products/categories/chocolate-cocoa-and-confectionery.md` | Chocolate, Cocoa and Confectionery | Subject-fit review, then canonical hero |
| `wiki/products/categories/condiments-sauces-and-dressings.md` | Condiments, Sauces and Dressings | Subject-fit review, then canonical hero |
| `wiki/products/categories/cosmetics-and-personal-care-leave-on.md` | Cosmetics and Personal Care — Leave-on | Subject-fit review, then canonical hero |
| `wiki/products/categories/cosmetics-and-personal-care-rinse-off.md` | Cosmetics and Personal Care — Rinse-off | Subject-fit review, then canonical hero |
| `wiki/products/categories/culinary-oils-and-fats.md` | Culinary Oils and Fats | Subject-fit review, then canonical hero |
| `wiki/products/categories/dairy-and-milk-products.md` | Dairy and Milk Products | Subject-fit review, then canonical hero |
| `wiki/products/categories/dietary-supplements-human.md` | Dietary Supplements (Human) | Subject-fit review, then canonical hero |
| `wiki/products/categories/edible-fungi.md` | Edible Fungi | Subject-fit review, then canonical hero |
| `wiki/products/categories/feminine-care.md` | Feminine Care | Subject-fit review, then canonical hero |
| `wiki/products/categories/food-contact-consumer-goods-and-kitchenware.md` | Food-Contact Consumer Goods and Kitchenware | Subject-fit review, then canonical hero |
| `wiki/products/categories/fruits-vegetables-and-produce.md` | Fruits, Vegetables, and Produce | Subject-fit review, then canonical hero |
| `wiki/products/categories/grains-cereals-and-rice-products.md` | Grains, Cereals, and Rice Products | Subject-fit review, then canonical hero |
| `wiki/products/categories/herbs-spices-seasonings-and-salt.md` | Herbs, Spices, Seasonings and Salt | Subject-fit review, then canonical hero |
| `wiki/products/categories/home-air-and-inhalation-adjacent-products.md` | Home Air and Inhalation-Adjacent Products | Subject-fit review, then canonical hero |

## Batch 25: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/categories/household-cleaning-and-dishwashing.md` | Household Cleaning and Dishwashing | Subject-fit review, then canonical hero |
| `wiki/products/categories/infant-and-child-contact-products.md` | Infant and Child Contact Products | Subject-fit review, then canonical hero |
| `wiki/products/categories/infant-and-child-durable-goods-and-textiles.md` | Infant and Child Durable Goods and Textiles | Subject-fit review, then canonical hero |
| `wiki/products/categories/infant-and-child-foods.md` | Infant and Child Foods | Subject-fit review, then canonical hero |
| `wiki/products/categories/infant-and-child-personal-care.md` | Infant and Child Personal Care | Subject-fit review, then canonical hero |
| `wiki/products/categories/laundry-and-fabric-contact-home-products.md` | Laundry and Fabric-Contact Home Products | Subject-fit review, then canonical hero |
| `wiki/products/categories/legumes-and-pulses.md` | Legumes and Pulses | Subject-fit review, then canonical hero |
| `wiki/products/categories/meat-poultry-and-eggs.md` | Meat, Poultry, and Eggs | Subject-fit review, then canonical hero |
| `wiki/products/categories/nuts-seeds-and-their-butters.md` | Nuts, Seeds, and Their Butters | Subject-fit review, then canonical hero |
| `wiki/products/categories/oral-care.md` | Oral Care | Subject-fit review, then canonical hero |
| `wiki/products/categories/peptides-sarms-and-research-chemicals.md` | Peptides, SARMs, and Research Chemicals | Subject-fit review, then canonical hero |
| `wiki/products/categories/pet-foods.md` | Pet Foods | Subject-fit review, then canonical hero |
| `wiki/products/categories/pet-supplements.md` | Pet Supplements | Subject-fit review, then canonical hero |
| `wiki/products/categories/prepared-and-packaged-meals.md` | Prepared and Packaged Meals | Subject-fit review, then canonical hero |
| `wiki/products/categories/seafood.md` | Seafood | Subject-fit review, then canonical hero |
| `wiki/products/categories/sweeteners-and-syrups.md` | Sweeteners and Syrups | Subject-fit review, then canonical hero |
| `wiki/products/categories/water-and-water-based-products.md` | Water and Water-Based Products | Subject-fit review, then canonical hero |
| `wiki/products/category-5-beverages.md` | products/category-5-beverages | Subject-fit review, then canonical hero |
| `wiki/products/cereal-meals.md` | Cereal Meals | Subject-fit review, then canonical hero |
| `wiki/products/cereal-products.md` | Cereal Products | Subject-fit review, then canonical hero |
| `wiki/products/children-personal-care.md` | Children Personal Care (HMT&C Category 2 master) | Subject-fit review, then canonical hero |
| `wiki/products/childrens-jewelry.md` | Children's Jewelry | Subject-fit review, then canonical hero |
| `wiki/products/childrens-lip-balm-mineral-bearing.md` | Children's Lip Balm, Mineral-Bearing (tinted or SPF) | Subject-fit review, then canonical hero |
| `wiki/products/childrens-lip-balm-plain.md` | Children's Lip Balm, Plain (uncolored, no SPF) | Subject-fit review, then canonical hero |
| `wiki/products/childrens-makeup.md` | Children's Makeup (ages 0-5) | Subject-fit review, then canonical hero |

## Batch 26: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/childrens-nail-polish.md` | Children's Nail Polish (ages 0-5) | Subject-fit review, then canonical hero |
| `wiki/products/chocolate.md` | Chocolate | Subject-fit review, then canonical hero |
| `wiki/products/clasps-fasteners-infant-products.md` | Clasps/fasteners (snaps, zippers, buttons) used in infant products | Subject-fit review, then canonical hero |
| `wiki/products/cleaning-wipes-household.md` | Cleaning wipes (household surface wipes) | Subject-fit review, then canonical hero |
| `wiki/products/cocoa-beverage-mixes.md` | Cocoa/hot-chocolate beverage mixes and malted drink powders | Subject-fit review, then canonical hero |
| `wiki/products/coffee.md` | products/coffee | Subject-fit review, then canonical hero |
| `wiki/products/condiments-general.md` | Condiments (hot sauce, soy sauce, mustard, ketchup, mayonnaise, salsa) | Subject-fit review, then canonical hero |
| `wiki/products/conditioner-adult-rinse-out.md` | Conditioner (general adult, rinse-out) | Subject-fit review, then canonical hero |
| `wiki/products/confectionery-candy.md` | Candy and confectionery (hard candy, caramels, imported/ethnic sweets) | Subject-fit review, then canonical hero |
| `wiki/products/cooking-oils-other.md` | Other cooking oils (canola, sunflower, coconut, avocado, sesame) | Subject-fit review, then canonical hero |
| `wiki/products/cookware-ceramic-coated.md` | Ceramic-coated cookware | Subject-fit review, then canonical hero |
| `wiki/products/cookware-metal-alloy.md` | Metal and alloy cookware (cast iron, stainless steel, aluminum) | Subject-fit review, then canonical hero |
| `wiki/products/cookware-nonstick-coated.md` | Nonstick-coated cookware | Subject-fit review, then canonical hero |
| `wiki/products/cookware-specialty-alloy.md` | Specialty alloy cookware (copper, carbon steel) | Subject-fit review, then canonical hero |
| `wiki/products/cribs-and-bassinets.md` | Cribs and bassinets | Subject-fit review, then canonical hero |
| `wiki/products/cultivated-mushrooms.md` | Mushrooms — cultivated (button, cremini, portobello, oyster) | Subject-fit review, then canonical hero |
| `wiki/products/cutting-boards.md` | Cutting boards (wood, plastic) | Subject-fit review, then canonical hero |
| `wiki/products/dairy-cheese.md` | Cheese | Subject-fit review, then canonical hero |
| `wiki/products/dairy-condensed-evaporated.md` | Condensed and evaporated milks | Subject-fit review, then canonical hero |
| `wiki/products/dairy-cream.md` | Cream | Subject-fit review, then canonical hero |
| `wiki/products/dairy-milk-camel.md` | Camel milk | Subject-fit review, then canonical hero |
| `wiki/products/dairy-milk-cow.md` | Liquid milk — cow | Subject-fit review, then canonical hero |
| `wiki/products/dairy-milk-goat-sheep.md` | Liquid milk — goat / sheep / other ruminant | Subject-fit review, then canonical hero |
| `wiki/products/dairy-milk-powders.md` | Milk powders (whole, skim, specialty) | Subject-fit review, then canonical hero |
| `wiki/products/dairy-yogurt-cultured.md` | Yogurt and cultured dairy | Subject-fit review, then canonical hero |

## Batch 27: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/deep-conditioning-treatments-rinse-off.md` | Deep conditioning treatments/hair masks (rinse-off) | Subject-fit review, then canonical hero |
| `wiki/products/degreasers.md` | Degreasers | Subject-fit review, then canonical hero |
| `wiki/products/dentifrices.md` | Dentifrices (toothpaste, gel, powder, tablets) | Subject-fit review, then canonical hero |
| `wiki/products/denture-orthodontic-care.md` | Denture and orthodontic-appliance care (adhesives, cleaning tablets/solutions) | Subject-fit review, then canonical hero |
| `wiki/products/deodorants.md` | Deodorants (sticks, roll-ons, gels, creams, wipes, sprays) | Subject-fit review, then canonical hero |
| `wiki/products/descalers.md` | Descalers | Subject-fit review, then canonical hero |
| `wiki/products/diaper-cream-non-zno.md` | Diaper Cream, Non-ZnO | Subject-fit review, then canonical hero |
| `wiki/products/diaper-cream-zno.md` | Diaper Cream, ZnO-Based | Subject-fit review, then canonical hero |
| `wiki/products/diapers-and-components.md` | Diapers and diaper components | Subject-fit review, then canonical hero |
| `wiki/products/dietary-supplements.md` | Dietary Supplements | Subject-fit review, then canonical hero |
| `wiki/products/dish-soaps-manual.md` | Dish soaps (manual dishwashing) | Subject-fit review, then canonical hero |
| `wiki/products/disinfectants-sanitizers.md` | Disinfectants and sanitizers (EPA-registered antimicrobial sprays, wipes, concentrates) | Subject-fit review, then canonical hero |
| `wiki/products/douches-vaginal-irrigation.md` | Douches and vaginal irrigation solutions/apparatus components | Subject-fit review, then canonical hero |
| `wiki/products/drain-maintainers-cleaners.md` | Drain maintainers/cleaners (including biological-based) | Subject-fit review, then canonical hero |
| `wiki/products/dried-fruit.md` | Dried Fruit | Subject-fit review, then canonical hero |
| `wiki/products/dusting-powder-cornstarch-adult.md` | Dusting powder, cornstarch base (clean sibling of r2 talc) | Subject-fit review, then canonical hero |
| `wiki/products/dusting-talc-powders-adult.md` | Dusting/talc powders (adult) | Subject-fit review, then canonical hero |
| `wiki/products/eggs-product.md` | Eggs | Subject-fit review, then canonical hero |
| `wiki/products/electric-plug-in-evaporators.md` | Electric plug-in evaporators | Subject-fit review, then canonical hero |
| `wiki/products/exfoliants-scrubs.md` | Exfoliants/scrubs (body, facial) | Subject-fit review, then canonical hero |
| `wiki/products/eye-makeup.md` | Eye makeup (liners, shadows, mascara, brow products, false lash adhesives, lash/eyebrow serums) | Subject-fit review, then canonical hero |
| `wiki/products/fabric-contact-combination-products.md` | Combination products serving multiple functions | Subject-fit review, then canonical hero |
| `wiki/products/fabric-contact-products-other.md` | Other fabric-contact home products (case-by-case) | Subject-fit review, then canonical hero |
| `wiki/products/fabric-protectants.md` | Fabric protectants (excluding waterproofing/flame-retardant per GS-48 boundaries) | Subject-fit review, then canonical hero |
| `wiki/products/fabric-refresher-products.md` | Fabric refresher products | Subject-fit review, then canonical hero |

## Batch 28: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/fabric-softeners.md` | Fabric softeners (liquids and sheets) | Subject-fit review, then canonical hero |
| `wiki/products/face-neck-leave-on-skin-care.md` | Face/neck leave-on skin care (moisturizers, serums, night creams, leave-on masks) | Subject-fit review, then canonical hero |
| `wiki/products/face-paint.md` | Face Paint | Subject-fit review, then canonical hero |
| `wiki/products/facial-cleansers.md` | Facial cleansers (foaming, cream, gel, oil, micellar) | Subject-fit review, then canonical hero |
| `wiki/products/feeding-accessories-child-sized.md` | Feeding accessories (spoons, plates, bowls — child-sized) | Subject-fit review, then canonical hero |
| `wiki/products/feminine-deodorants.md` | Feminine deodorants (leave-on and rinse-off) | Subject-fit review, then canonical hero |
| `wiki/products/feminine-wipes.md` | Feminine wipes/towelettes | Subject-fit review, then canonical hero |
| `wiki/products/fermented-beverages-non-tea-based.md` | products/fermented-beverages-non-tea-based | Subject-fit review, then canonical hero |
| `wiki/products/filter-media-and-housings.md` | Filter media and housings | Subject-fit review, then canonical hero |
| `wiki/products/fish-containing-baby-foods.md` | Fish-Containing Baby Foods | Subject-fit review, then canonical hero |
| `wiki/products/fish-freshwater.md` | Fish — freshwater (tilapia, catfish, trout) | Subject-fit review, then canonical hero |
| `wiki/products/fish-marine-non-predatory.md` | Fish — marine, non-predatory (sardines, anchovies, salmon, cod) | Subject-fit review, then canonical hero |
| `wiki/products/fish-marine-predatory.md` | Fish — marine, predatory (tuna, swordfish, shark, king mackerel) | Subject-fit review, then canonical hero |
| `wiki/products/fish-sauce.md` | Fish sauce | Subject-fit review, then canonical hero |
| `wiki/products/flavored-waters.md` | products/flavored-waters | Subject-fit review, then canonical hero |
| `wiki/products/floor-cleaners-hard-surface.md` | Floor cleaners (hard surface) | Subject-fit review, then canonical hero |
| `wiki/products/floor-finishes-strippers.md` | Floor finishes & strippers (if included in HMTc scope) | Subject-fit review, then canonical hero |
| `wiki/products/floss-interdental-cleaners.md` | Floss and interdental cleaners (floss, picks, interdental brushes, woodsticks) | Subject-fit review, then canonical hero |
| `wiki/products/flour-non-rice.md` | Flour (wheat, corn, other) | Subject-fit review, then canonical hero |
| `wiki/products/food-packaging-cans-lids.md` | Cans/lids | Subject-fit review, then canonical hero |
| `wiki/products/food-packaging-caps-closures.md` | Caps/closures | Subject-fit review, then canonical hero |
| `wiki/products/food-packaging-flexible-pouches-films.md` | Flexible pouches/films | Subject-fit review, then canonical hero |
| `wiki/products/food-packaging-foils-wraps.md` | Foils/wraps | Subject-fit review, then canonical hero |
| `wiki/products/food-packaging-glass-jars.md` | Glass jars | Subject-fit review, then canonical hero |
| `wiki/products/food-packaging-paperboard-cartons.md` | Paperboard cartons | Subject-fit review, then canonical hero |

## Batch 29: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/food-packaging-plastic-tubs.md` | Plastic tubs | Subject-fit review, then canonical hero |
| `wiki/products/food-prep-blender-jars.md` | Blender jars | Subject-fit review, then canonical hero |
| `wiki/products/food-prep-kettle-interiors.md` | Kettle interiors | Subject-fit review, then canonical hero |
| `wiki/products/food-prep-processor-bowls.md` | Food processor bowls | Subject-fit review, then canonical hero |
| `wiki/products/food-storage-glass-containers.md` | Glass food storage containers | Subject-fit review, then canonical hero |
| `wiki/products/food-storage-lids-gaskets.md` | Lids/gaskets | Subject-fit review, then canonical hero |
| `wiki/products/food-storage-plastic-containers.md` | Plastic food storage containers | Subject-fit review, then canonical hero |
| `wiki/products/food-storage-silicone.md` | Silicone food storage | Subject-fit review, then canonical hero |
| `wiki/products/fragrance-preparations.md` | Fragrance preparations (perfumes, colognes, body sprays) | Subject-fit review, then canonical hero |
| `wiki/products/fresh-fish.md` | Fresh Fish | Subject-fit review, then canonical hero |
| `wiki/products/fresh-fruit.md` | Fresh Fruit | Subject-fit review, then canonical hero |
| `wiki/products/fruit-juice-not-canned.md` | Fruit Juice (Not Canned) | Subject-fit review, then canonical hero |
| `wiki/products/fruit-juices-apple-containing.md` | products/fruit-juices-apple-containing | Subject-fit review, then canonical hero |
| `wiki/products/fruit-juices-non-apple.md` | products/fruit-juices-non-apple | Subject-fit review, then canonical hero |
| `wiki/products/fruit-purees.md` | Fruit Purees | Subject-fit review, then canonical hero |
| `wiki/products/fruit-snacks.md` | Fruit Snacks | Subject-fit review, then canonical hero |
| `wiki/products/game-meats.md` | Game meats (venison, bison, rabbit) | Subject-fit review, then canonical hero |
| `wiki/products/gel-diffusers.md` | Gel diffusers | Subject-fit review, then canonical hero |
| `wiki/products/glucose-solutions.md` | Glucose Solutions | Subject-fit review, then canonical hero |
| `wiki/products/grain-based-snacks.md` | Grain-based snacks (crackers, biscuits, cookies, popcorn, pretzels) — non-rice clean counterpart to rice-snacks | Subject-fit review, then canonical hero |
| `wiki/products/gummies-jellies.md` | Gummies and jelly sweets | Subject-fit review, then canonical hero |
| `wiki/products/hair-dye-rinse-off.md` | Hair dye/color rinses (rinse-off after processing) | Subject-fit review, then canonical hero |
| `wiki/products/hair-removal-products.md` | Hair removal products (depilatory creams) | Subject-fit review, then canonical hero |
| `wiki/products/hand-soap.md` | Hand soap (liquid and bar) | Subject-fit review, then canonical hero |
| `wiki/products/heated-oil-diffusers.md` | Heated oil diffusers | Subject-fit review, then canonical hero |

## Batch 30: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/herbal-botanical-infusions.md` | products/herbal-botanical-infusions | Subject-fit review, then canonical hero |
| `wiki/products/high-chairs-and-booster-seats.md` | High chairs and booster seats | Subject-fit review, then canonical hero |
| `wiki/products/home-air-emission-products-other.md` | Other home-air emission products (case-by-case, inhalation prioritized) | Subject-fit review, then canonical hero |
| `wiki/products/honey.md` | Honey | Subject-fit review, then canonical hero |
| `wiki/products/hot-chili-sauces.md` | Hot sauce and chili sauces | Subject-fit review, then canonical hero |
| `wiki/products/household-specialty-cleaners-other.md` | Other household specialty cleaners (by functional use-case) | Subject-fit review, then canonical hero |
| `wiki/products/incense-sticks-cones.md` | Incense sticks/cones | Subject-fit review, then canonical hero |
| `wiki/products/index.md` | Product categories | Subject-fit review, then canonical hero |
| `wiki/products/infant-and-child-foods-master.md` | Infant And Child Foods Master | Subject-fit review, then canonical hero |
| `wiki/products/infant-bottle-nipples.md` | Bottle nipples and spouts | Subject-fit review, then canonical hero |
| `wiki/products/infant-bottles.md` | Bottles (plastic, glass, stainless steel) | Subject-fit review, then canonical hero |
| `wiki/products/infant-clothing.md` | Clothing (onesies, pajamas, outerwear) | Subject-fit review, then canonical hero |
| `wiki/products/infant-food-fruits.md` | Infant Food Fruits | Subject-fit review, then canonical hero |
| `wiki/products/infant-food-general.md` | Infant Food General | Subject-fit review, then canonical hero |
| `wiki/products/infant-food-powder.md` | Infant Food Powder | Subject-fit review, then canonical hero |
| `wiki/products/infant-food-puree.md` | Infant Food Puree | Subject-fit review, then canonical hero |
| `wiki/products/infant-food-ready-to-eat.md` | Infant Food Ready To Eat | Subject-fit review, then canonical hero |
| `wiki/products/infant-food-storage-items.md` | Infant food-storage items (milk storage bags/containers) | Subject-fit review, then canonical hero |
| `wiki/products/infant-food-vegetables.md` | Infant Food Vegetables | Subject-fit review, then canonical hero |
| `wiki/products/infant-juice.md` | Infant Juice | Subject-fit review, then canonical hero |
| `wiki/products/infant-porridges-dairy.md` | Infant Porridges Dairy | Subject-fit review, then canonical hero |
| `wiki/products/infant-solid-foods-mixed.md` | Infant Solid Foods Mixed | Subject-fit review, then canonical hero |
| `wiki/products/instant-air-refreshment-sprays.md` | Instant air refreshment sprays (aerosol cans, trigger sprays) | Subject-fit review, then canonical hero |
| `wiki/products/intimate-washes-cleansers.md` | Intimate washes/cleansers | Subject-fit review, then canonical hero |
| `wiki/products/kitchen-countertop-cleaners.md` | Kitchen/countertop cleaners | Subject-fit review, then canonical hero |

## Batch 31: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/kombucha-tea-based.md` | products/kombucha-tea-based | Subject-fit review, then canonical hero |
| `wiki/products/lamb-mutton.md` | Lamb/mutton | Subject-fit review, then canonical hero |
| `wiki/products/laundry-detergent-boosters-additives.md` | Laundry detergent boosters/additives | Subject-fit review, then canonical hero |
| `wiki/products/laundry-detergents.md` | Laundry detergents (liquid, powder, pods/sheets, delicates) | Subject-fit review, then canonical hero |
| `wiki/products/laundry-prewash-products.md` | Laundry prewash products | Subject-fit review, then canonical hero |
| `wiki/products/laundry-starch-sizing-fabric-finish.md` | Laundry starch/sizing/fabric finish products | Subject-fit review, then canonical hero |
| `wiki/products/lead-benchmark-context.md` | Category 1 Lead Benchmark Context | Subject-fit review, then canonical hero |
| `wiki/products/leafy-vegetables-other.md` | Leafy / Green Vegetables, Other | Subject-fit review, then canonical hero |
| `wiki/products/leave-on-hair-preparations.md` | Leave-on hair preparations (leave-in conditioners, tonics/dressings, styling aids, hair sprays, color sprays) | Subject-fit review, then canonical hero |
| `wiki/products/leave-on-preparations-other.md` | Other leave-on preparations (case-by-case) | Subject-fit review, then canonical hero |
| `wiki/products/legumes-pulses-other.md` | Legumes and Pulses, Other | Subject-fit review, then canonical hero |
| `wiki/products/lipstick.md` | Lip products (lipstick, gloss, lip liner, adult lip balm) | Subject-fit review, then canonical hero |
| `wiki/products/makeup-body-paints-bases-fixatives.md` | Makeup — body/leg paints, bases, fixatives (including airbrush) | Subject-fit review, then canonical hero |
| `wiki/products/makeup-foundation-powders-blush.md` | Makeup — foundation, powders, blush/rouge | Subject-fit review, then canonical hero |
| `wiki/products/manicuring-preparations-leave-on.md` | Manicuring preparations that remain on nails/skin (basecoats, polishes/enamels, cuticle softeners/creams) | Subject-fit review, then canonical hero |
| `wiki/products/matcha.md` | products/matcha | Subject-fit review, then canonical hero |
| `wiki/products/meat-and-poultry-purees.md` | Meat and Poultry Purees | Subject-fit review, then canonical hero |
| `wiki/products/menstrual-cups.md` | Menstrual cups (silicone/latex/other polymers) | Subject-fit review, then canonical hero |
| `wiki/products/menstrual-discs.md` | Menstrual discs | Subject-fit review, then canonical hero |
| `wiki/products/menstrual-intimate-products-other.md` | Other menstrual/intimate products (case-by-case) | Subject-fit review, then canonical hero |
| `wiki/products/menstrual-pads.md` | Menstrual pads (disposable, panty liners, intralabial pads, reusable menstrual pads) | Subject-fit review, then canonical hero |
| `wiki/products/menstrual-tampons.md` | Menstrual tampons (scented/unscented; applicator tested as distinct component) | Subject-fit review, then canonical hero |
| `wiki/products/milk-and-dairy.md` | Milk and Dairy (HMTc Category 24 master) | Subject-fit review, then canonical hero |
| `wiki/products/mineral-water.md` | Mineral water | Subject-fit review, then canonical hero |
| `wiki/products/mixed-meals-non-rice.md` | Mixed Meals, Non-Rice | Subject-fit review, then canonical hero |

## Batch 32: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/mixed-meals-prepared-foods.md` | Mixed Meals / Prepared Foods | Subject-fit review, then canonical hero |
| `wiki/products/mixed-meals-rice-containing.md` | Mixed Meals, Rice-Containing | Subject-fit review, then canonical hero |
| `wiki/products/mouthwash-oral-rinse.md` | Mouthwash/oral rinse | Subject-fit review, then canonical hero |
| `wiki/products/mushrooms.md` | Mushrooms | Subject-fit review, then canonical hero |
| `wiki/products/mustard-mayo-dressings.md` | Mustard, mayonnaise, dressings | Subject-fit review, then canonical hero |
| `wiki/products/nail-polish.md` | Nail Polish | Subject-fit review, then canonical hero |
| `wiki/products/nebula-diffusers.md` | Nebula diffusers | Subject-fit review, then canonical hero |
| `wiki/products/non-root-vegetable-purees.md` | Non-Root Vegetable Purees | Subject-fit review, then canonical hero |
| `wiki/products/non-root-vegetables.md` | Non-Root Vegetables | Subject-fit review, then canonical hero |
| `wiki/products/nut-seed-butters-other.md` | Nut and Seed Butters, Other | Subject-fit review, then canonical hero |
| `wiki/products/nutritional-beverage-child.md` | Nutritional Beverage Child | Subject-fit review, then canonical hero |
| `wiki/products/nuts-seeds-other.md` | Nuts and Seeds, Other | Subject-fit review, then canonical hero |
| `wiki/products/odor-removers-hard-surfaces.md` | Odor removers for hard surfaces | Subject-fit review, then canonical hero |
| `wiki/products/olive-oil.md` | Olive oil | Subject-fit review, then canonical hero |
| `wiki/products/oral-electrolyte-solutions.md` | Oral Electrolyte Solutions | Subject-fit review, then canonical hero |
| `wiki/products/oral-irrigators-water-flossers.md` | Oral irrigators/water flossers and tips (if included) | Subject-fit review, then canonical hero |
| `wiki/products/oral-products-other.md` | Other oral products (case-by-case) | Subject-fit review, then canonical hero |
| `wiki/products/other-grain-products.md` | Other grain products (oat, millet, quinoa, barley) | Subject-fit review, then canonical hero |
| `wiki/products/oven-grill-bbq-cleaners.md` | Oven/grill/BBQ cleaners | Subject-fit review, then canonical hero |
| `wiki/products/pacifiers-and-sucking-teething-aids.md` | Pacifiers and sucking/teething aids | Subject-fit review, then canonical hero |
| `wiki/products/pasta-rice-based.md` | Pasta (rice-based) | Subject-fit review, then canonical hero |
| `wiki/products/pasta-wheat-based.md` | Pasta (wheat-based) | Subject-fit review, then canonical hero |
| `wiki/products/peanut-butter.md` | Peanut Butter | Subject-fit review, then canonical hero |
| `wiki/products/peanuts.md` | Peanuts | Subject-fit review, then canonical hero |
| `wiki/products/peptides-injectable-hormones.md` | Injectable peptide hormones (GLP-1 analogs, GH secretagogues, synthetic peptides) | Subject-fit review, then canonical hero |

## Batch 33: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/peptides-nasal-sublingual.md` | Nasal/sublingual/troche gray-market peptide preparations (mucosal route) | Subject-fit review, then canonical hero |
| `wiki/products/period-underwear-reusable-garments.md` | Period underwear and reusable menstrual garments | Subject-fit review, then canonical hero |
| `wiki/products/permanent-hair-dyes-tints.md` | Permanent hair dyes/tints (remain in hair after application) | Subject-fit review, then canonical hero |
| `wiki/products/pet-chews-dental.md` | Pet chews (including dental chews) | Subject-fit review, then canonical hero |
| `wiki/products/pet-food-canned-wet.md` | Complete & balanced canned/wet | Subject-fit review, then canonical hero |
| `wiki/products/pet-food-dry-kibble.md` | Complete & balanced dry (kibble) | Subject-fit review, then canonical hero |
| `wiki/products/pet-food-fish-marine-protein.md` | Fish-based / marine-protein complete diets (iAs/MeHg/tHg-dirty matrix) | Subject-fit review, then canonical hero |
| `wiki/products/pet-food-freeze-dried.md` | Freeze-dried/dehydrated pet foods (including freeze-dried raw) | Subject-fit review, then canonical hero |
| `wiki/products/pet-food-raw.md` | Raw pet foods (frozen/chilled raw diets) | Subject-fit review, then canonical hero |
| `wiki/products/pet-food-semi-moist.md` | Semi-moist pet foods | Subject-fit review, then canonical hero |
| `wiki/products/pet-milk-replacers-specialty-liquids.md` | Milk replacers and specialty pet liquids | Subject-fit review, then canonical hero |
| `wiki/products/pet-supplements-botanical-herbal.md` | Botanical/herbal blends | Subject-fit review, then canonical hero |
| `wiki/products/pet-supplements-calming-behavioral.md` | Calming/behavioral supplements | Subject-fit review, then canonical hero |
| `wiki/products/pet-supplements-functional-blends.md` | Joint/skin/coat functional blends | Subject-fit review, then canonical hero |
| `wiki/products/pet-supplements-oils.md` | Oils (omega-3, fish oil, coconut oil) | Subject-fit review, then canonical hero |
| `wiki/products/pet-supplements-other.md` | Other pet ingestibles (case-by-case) | Subject-fit review, then canonical hero |
| `wiki/products/pet-supplements-probiotics-digestive.md` | Probiotics/digestive aids | Subject-fit review, then canonical hero |
| `wiki/products/pet-supplements-vitamin-mineral.md` | Vitamin/mineral supplements | Subject-fit review, then canonical hero |
| `wiki/products/pet-toppers-mixers-broths.md` | Toppers/mixers/broths | Subject-fit review, then canonical hero |
| `wiki/products/pet-treats-snacks.md` | Pet treats/snacks | Subject-fit review, then canonical hero |
| `wiki/products/pickled-fermented-vegetables.md` | Pickled, fermented, and brined vegetables (sauerkraut, kimchi, pickles, table olives) | Subject-fit review, then canonical hero |
| `wiki/products/pickled-mushrooms.md` | Pickled Mushrooms | Subject-fit review, then canonical hero |
| `wiki/products/piercing-post-assemblies.md` | Piercing Post Assemblies | Subject-fit review, then canonical hero |
| `wiki/products/plant-based-meat-alternatives.md` | Plant-based meat alternatives (burgers, sausages, nuggets; pea/soy/wheat-protein base) | Subject-fit review, then canonical hero |
| `wiki/products/plant-milks-non-soy-non-rice.md` | products/plant-milks-non-soy-non-rice | Subject-fit review, then canonical hero |

## Batch 34: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/plant-milks-rice-based.md` | products/plant-milks-rice-based | Subject-fit review, then canonical hero |
| `wiki/products/plant-milks-soy-based.md` | products/plant-milks-soy-based | Subject-fit review, then canonical hero |
| `wiki/products/play-yards-and-gates.md` | Play yards and gates/enclosures | Subject-fit review, then canonical hero |
| `wiki/products/pork-product.md` | Pork | Subject-fit review, then canonical hero |
| `wiki/products/potpourri-sachets.md` | Potpourri/sachets | Subject-fit review, then canonical hero |
| `wiki/products/poultry-product.md` | Poultry (chicken, turkey, duck) | Subject-fit review, then canonical hero |
| `wiki/products/pre-treaters-stain-removers.md` | Pre-treaters (spray/gel/stick) and stand-alone stain/spot removers | Subject-fit review, then canonical hero |
| `wiki/products/processed-meats.md` | Processed meats (sausage, deli meat, bacon, hot dogs) | Subject-fit review, then canonical hero |
| `wiki/products/refined-sugar.md` | Refined sugars (cane, beet, brown) | Subject-fit review, then canonical hero |
| `wiki/products/regulatory-crosswalk-field-findings.md` | Regulatory Crosswalk vs Field Findings | Subject-fit review, then canonical hero |
| `wiki/products/research-chem-raw-powders.md` | Raw AAS / peptide powders (pre-formulation) | Subject-fit review, then canonical hero |
| `wiki/products/research-chemicals-peptides-sarms.md` | Research Chemicals, Peptides & SARMs (HMTc Category 26 master) | Subject-fit review, then canonical hero |
| `wiki/products/rice-beverages-rice-milk.md` | Rice beverages (rice milk) | Subject-fit review, then canonical hero |
| `wiki/products/rice-bulk-grain.md` | Rice (white, brown, wild — bulk grain) | Subject-fit review, then canonical hero |
| `wiki/products/rice-grain-syrup.md` | Rice and grain syrups | Subject-fit review, then canonical hero |
| `wiki/products/rice-noodles.md` | Rice noodles | Subject-fit review, then canonical hero |
| `wiki/products/rice-snacks-crackers.md` | Rice snacks/crackers | Subject-fit review, then canonical hero |
| `wiki/products/rinse-aids.md` | Rinse aids | Subject-fit review, then canonical hero |
| `wiki/products/rinse-off-preparations-other.md` | Other rinse-off preparations (case-by-case) | Subject-fit review, then canonical hero |
| `wiki/products/root-tuber-vegetables.md` | Root and Tuber Vegetables | Subject-fit review, then canonical hero |
| `wiki/products/root-vegetable-purees.md` | Root-Vegetable Purees | Subject-fit review, then canonical hero |
| `wiki/products/salt.md` | Salt (table, sea, Himalayan) | Subject-fit review, then canonical hero |
| `wiki/products/sarms-oral.md` | Oral SARMs | Subject-fit review, then canonical hero |
| `wiki/products/scented-candles.md` | Scented candles | Subject-fit review, then canonical hero |
| `wiki/products/scented-wax-blocks-melts.md` | Scented wax blocks/wax melts | Subject-fit review, then canonical hero |

## Batch 35: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/seafood.md` | Seafood | Subject-fit review, then canonical hero |
| `wiki/products/seaweed-kelp-foods.md` | Seaweed/kelp foods (nori, wakame, kombu, dulse — as food products) | Subject-fit review, then canonical hero |
| `wiki/products/sensor-puff-releasers.md` | Sensor puff releasers | Subject-fit review, then canonical hero |
| `wiki/products/shampoo-adult.md` | Shampoo (general adult) | Subject-fit review, then canonical hero |
| `wiki/products/shaving-cream-gel-foam.md` | Shaving cream/gel/foam | Subject-fit review, then canonical hero |
| `wiki/products/shellfish.md` | Shellfish (shrimp, crab, lobster, clams, oysters, mussels) | Subject-fit review, then canonical hero |
| `wiki/products/sippy-cups-toddler-drinkware.md` | Sippy cups and toddler drinkware components | Subject-fit review, then canonical hero |
| `wiki/products/skin-lightening-cream.md` | Skin Lightening Cream — RETIRED (out of HMTc scope) | Subject-fit review, then canonical hero |
| `wiki/products/snack-bars-energy-bars.md` | Snack Bars Energy Bars | Subject-fit review, then canonical hero |
| `wiki/products/snacks-crackers-biscuits.md` | Snacks Crackers Biscuits — REDIRECT (Cat 7 sub-variant of Snacks, general) | Subject-fit review, then canonical hero |
| `wiki/products/snacks-general.md` | Snacks, General | Subject-fit review, then canonical hero |
| `wiki/products/soft-drinks-carbonated-beverages.md` | products/soft-drinks-carbonated-beverages | Subject-fit review, then canonical hero |
| `wiki/products/soups-broths-stocks.md` | Soups, broths, and stocks (canned, dry-mix, bouillon, RTD carton) | Subject-fit review, then canonical hero |
| `wiki/products/soy-products.md` | Soy Products | Subject-fit review, then canonical hero |
| `wiki/products/soy-sauce-fermented.md` | Soy sauce and fermented sauces | Subject-fit review, then canonical hero |
| `wiki/products/sparkling-carbonated-water.md` | Sparkling/carbonated water (unflavored) | Subject-fit review, then canonical hero |
| `wiki/products/spices.md` | Spices | Subject-fit review, then canonical hero |
| `wiki/products/spinach.md` | Spinach | Subject-fit review, then canonical hero |
| `wiki/products/sports-energy-drinks.md` | products/sports-energy-drinks | Subject-fit review, then canonical hero |
| `wiki/products/strollers.md` | Strollers | Subject-fit review, then canonical hero |
| `wiki/products/sun-suntan-mineral.md` | Sun/suntan products, mineral UV filters (dirty sibling of r10 chemical) | Subject-fit review, then canonical hero |
| `wiki/products/sun-suntan-products.md` | Sun/suntan products (including spray, self-tan, airbrush) | Subject-fit review, then canonical hero |
| `wiki/products/sunflower-seed-butter.md` | Sunflower Seed Butter | Subject-fit review, then canonical hero |
| `wiki/products/sunflower-seeds.md` | Sunflower Seeds | Subject-fit review, then canonical hero |
| `wiki/products/supplements-algae-seaweed-based.md` | Ingredient class — algae/seaweed-based | Subject-fit review, then canonical hero |

## Batch 36: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/supplements-amino-acids-isolates.md` | Ingredient class — amino acids & isolates | Subject-fit review, then canonical hero |
| `wiki/products/supplements-bars-labeled.md` | Food-like forms: bars (when labeled as supplement) | Subject-fit review, then canonical hero |
| `wiki/products/supplements-botanicals-herbs.md` | Ingredient class — botanicals/herbs/traditional formulas | Subject-fit review, then canonical hero |
| `wiki/products/supplements-clay-mineral-earth.md` | Ingredient class — clay/mineral/earth-derived (bentonite, diatomaceous earth, zeolite, shilajit) — Pb/As dirty | Subject-fit review, then canonical hero |
| `wiki/products/supplements-enzymes.md` | Ingredient class — enzymes | Subject-fit review, then canonical hero |
| `wiki/products/supplements-greens-superfood.md` | Ingredient class — greens/superfood blends (Pb/Cd/iAs hyperaccumulator) | Subject-fit review, then canonical hero |
| `wiki/products/supplements-mushroom-fungal.md` | Ingredient class — mushroom/fungal extracts (lion's mane, reishi, cordyceps, chaga) | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oil-based.md` | Ingredient class — oil-based supplements (fish oil/omega-3 and similar) | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-liquids-droppers.md` | Oral liquids: droppers | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-liquids-shots.md` | Oral liquids: liquid shots | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-liquids-syrups.md` | Oral liquids: syrups | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-liquids-tinctures.md` | Oral liquids: tinctures/drops | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-solids-capsules.md` | Oral solids: capsules | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-solids-effervescent.md` | Oral solids: effervescent tablets | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-solids-gummies.md` | Oral solids: gummies/chewables | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-solids-lozenges.md` | Oral solids: lozenges | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-solids-powders.md` | Oral solids: powders (bulk tubs, sachets, stick packs) | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-solids-softgels.md` | Oral solids: softgels/gelcaps | Subject-fit review, then canonical hero |
| `wiki/products/supplements-oral-solids-tablets.md` | Oral solids: tablets/caplets | Subject-fit review, then canonical hero |
| `wiki/products/supplements-probiotics.md` | Ingredient class — live microbials/probiotics | Subject-fit review, then canonical hero |
| `wiki/products/supplements-protein-collagen-powders.md` | Ingredient class — protein/collagen powders | Subject-fit review, then canonical hero |
| `wiki/products/supplements-teas-labeled.md` | Food-like forms: teas (when labeled as supplement) | Subject-fit review, then canonical hero |
| `wiki/products/supplements-vitamin-mineral.md` | Ingredient class — vitamin/mineral (single, multi-mineral, multi-vitamin/mineral) | Subject-fit review, then canonical hero |
| `wiki/products/swings-and-bouncers.md` | Swings and bouncers | Subject-fit review, then canonical hero |
| `wiki/products/syrups-maple-agave-molasses.md` | Tree and plant syrups (maple, agave, molasses) | Subject-fit review, then canonical hero |

## Batch 37: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/tableware-ceramicware.md` | Ceramicware | Subject-fit review, then canonical hero |
| `wiki/products/tableware-decorative-decals-coatings.md` | Decorative decals/coatings on tableware | Subject-fit review, then canonical hero |
| `wiki/products/tableware-glassware.md` | Glassware | Subject-fit review, then canonical hero |
| `wiki/products/tableware-metal-bottles-tumblers.md` | Metal bottles/tumblers | Subject-fit review, then canonical hero |
| `wiki/products/tableware-plastic-drinkware.md` | Plastic drinkware | Subject-fit review, then canonical hero |
| `wiki/products/tattoo-inks.md` | Tattoo inks (permanent and temporary) | Subject-fit review, then canonical hero |
| `wiki/products/tea-infusions.md` | Tea Infusions | Subject-fit review, then canonical hero |
| `wiki/products/tea.md` | Tea | Subject-fit review, then canonical hero |
| `wiki/products/teething-and-snacks-non-rice.md` | Teething & Snacks (Non-Rice) | Subject-fit review, then canonical hero |
| `wiki/products/teething-and-snacks-rice-based.md` | Teething & Snacks (Rice-Based) | Subject-fit review, then canonical hero |
| `wiki/products/teething-toys-teethers.md` | Teething toys/teethers | Subject-fit review, then canonical hero |
| `wiki/products/toilet-bowl-cleaners.md` | Toilet bowl cleaners | Subject-fit review, then canonical hero |
| `wiki/products/tomato-condiments.md` | Tomato condiments (ketchup, salsa) | Subject-fit review, then canonical hero |
| `wiki/products/tomato-paste.md` | Tomato Paste — REDIRECT (Cat 7 sub-variant of Canned foods, general) | Subject-fit review, then canonical hero |
| `wiki/products/tomato-sauce.md` | Tomato Sauce — REDIRECT (Cat 7 sub-variant of Canned foods, general) | Subject-fit review, then canonical hero |
| `wiki/products/tongue-cleaners-scrapers.md` | Tongue cleaners/scrapers | Subject-fit review, then canonical hero |
| `wiki/products/toothbrushes.md` | Toothbrushes (manual, electric heads) | Subject-fit review, then canonical hero |
| `wiki/products/toothpaste.md` | Toothpaste (Cat 2) | Subject-fit review, then canonical hero |
| `wiki/products/toy-chests.md` | Toy chests | Subject-fit review, then canonical hero |
| `wiki/products/toy-pacifiers.md` | Toy pacifiers (toy-designated) | Subject-fit review, then canonical hero |
| `wiki/products/toys-attached-cribs-playpens.md` | Toys attached to cribs/playpens | Subject-fit review, then canonical hero |
| `wiki/products/toys-balloons.md` | Balloons | Subject-fit review, then canonical hero |
| `wiki/products/toys-balls.md` | Balls | Subject-fit review, then canonical hero |
| `wiki/products/toys-battery-electronic.md` | Battery-operated/electronic toys | Subject-fit review, then canonical hero |
| `wiki/products/toys-crafts-other.md` | Other toys/crafts (case-by-case) | Subject-fit review, then canonical hero |

## Batch 38: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/toys-marbles.md` | Marbles | Subject-fit review, then canonical hero |
| `wiki/products/toys-painted.md` | General toys with paint/surface coatings | Subject-fit review, then canonical hero |
| `wiki/products/toys-pompoms-fibrous-craft.md` | Pompoms and similar small fibrous craft items | Subject-fit review, then canonical hero |
| `wiki/products/toys-projectile-guns.md` | Projectile toys and toy guns | Subject-fit review, then canonical hero |
| `wiki/products/toys-rattles.md` | Rattles | Subject-fit review, then canonical hero |
| `wiki/products/toys-sound-producing.md` | Sound-producing toys | Subject-fit review, then canonical hero |
| `wiki/products/toys-squeeze.md` | Squeeze toys | Subject-fit review, then canonical hero |
| `wiki/products/toys-stroller-carriage.md` | Stroller/carriage toys | Subject-fit review, then canonical hero |
| `wiki/products/toys-stuffed-bean-bag.md` | Stuffed toys and bean bag-type toys | Subject-fit review, then canonical hero |
| `wiki/products/toys-stuffing-materials.md` | Stuffing materials | Subject-fit review, then canonical hero |
| `wiki/products/toys-substrate-materials.md` | Toy substrate materials (accessible plastics/metals/woods/rubbers) | Subject-fit review, then canonical hero |
| `wiki/products/toys-with-magnets.md` | Toys with magnets | Subject-fit review, then canonical hero |
| `wiki/products/toys-yo-yo-elastic-tether.md` | Yo-yo elastic tether toys | Subject-fit review, then canonical hero |
| `wiki/products/traditional-eye-cosmetics.md` | Traditional/imported eye cosmetics (kohl, surma, kajal) — extreme-Pb platform | Subject-fit review, then canonical hero |
| `wiki/products/true-tea-camellia-sinensis.md` | products/true-tea-camellia-sinensis | Subject-fit review, then canonical hero |
| `wiki/products/utensils-metal.md` | Metal utensils | Subject-fit review, then canonical hero |
| `wiki/products/utensils-plastic-silicone-tools.md` | Plastic/silicone tools | Subject-fit review, then canonical hero |
| `wiki/products/vacuum-cleaner-fragrance-additives.md` | Vacuum cleaner fragrance additives | Subject-fit review, then canonical hero |
| `wiki/products/vegetable-juices-non-root.md` | products/vegetable-juices-non-root | Subject-fit review, then canonical hero |
| `wiki/products/vegetable-juices-root-vegetable-containing.md` | products/vegetable-juices-root-vegetable-containing | Subject-fit review, then canonical hero |
| `wiki/products/vinegar.md` | Vinegar | Subject-fit review, then canonical hero |
| `wiki/products/walkers.md` | Walkers | Subject-fit review, then canonical hero |
| `wiki/products/water-filters.md` | Water filters | Subject-fit review, then canonical hero |
| `wiki/products/whitening-products.md` | Whitening products (strips/gels/powders/pens) | Subject-fit review, then canonical hero |
| `wiki/products/wild-mushrooms.md` | Wild Mushrooms | Subject-fit review, then canonical hero |

## Batch 39: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/products/window-glass-mirror-cleaners.md` | Window/glass/mirror cleaners | Subject-fit review, then canonical hero |
| `wiki/regulations/asean-cosmetics-contaminants-guideline-v3-2019.md` | regulations/asean-cosmetics-contaminants-guideline-v3-2019 | Subject-fit review, then canonical hero |
| `wiki/regulations/asean-health-supplement-contaminant-limits-2017.md` | regulations/asean-health-supplement-contaminant-limits-2017 | Subject-fit review, then canonical hero |
| `wiki/regulations/astm-f963-soluble-migration.md` | ASTM F963 — soluble migrated element limits (mandatory US toy standard under CPSIA §106) | Subject-fit review, then canonical hero |
| `wiki/regulations/atsdr-aluminum-mrls.md` | ATSDR — Minimal Risk Levels for Aluminum | Subject-fit review, then canonical hero |
| `wiki/regulations/atsdr-cadmium-mrls.md` | ATSDR — Minimal Risk Levels for Cadmium | Subject-fit review, then canonical hero |
| `wiki/regulations/au-nz-food-standards-code-schedule-19-contaminants.md` | Australia New Zealand Food Standards Code - Schedule 19 - Maximum levels of contaminants and natural toxicants | Subject-fit review, then canonical hero |
| `wiki/regulations/australia-customs-prohibited-imports-heavy-metal-imports.md` | regulations/australia-customs-prohibited-imports-heavy-metal-imports | Subject-fit review, then canonical hero |
| `wiki/regulations/australia-nhmrc-adwg-6-v4-drinking-water.md` | regulations/australia-nhmrc-adwg-6-v4-drinking-water | Subject-fit review, then canonical hero |
| `wiki/regulations/bangladesh-bds-1382-skin-cream-heavy-metals.md` | regulations/bangladesh-bds-1382-skin-cream-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/bosnia-pravilnik-mdk-contaminants-2022.md` | regulations/bosnia-pravilnik-mdk-contaminants-2022 | Subject-fit review, then canonical hero |
| `wiki/regulations/brazil-anvisa-rdc-628-2022-cosmetic-colorant-metals.md` | regulations/brazil-anvisa-rdc-628-2022-cosmetic-colorant-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/brazil-anvisa-rdc-722-2022.md` | regulations/brazil-anvisa-rdc-722-2022 | Subject-fit review, then canonical hero |
| `wiki/regulations/by-jurisdiction.md` | Regulations by jurisdiction | Subject-fit review, then canonical hero |
| `wiki/regulations/ca-prop65-ab2762-cosmetics.md` | California Prop 65 / AB 2762 — exposure-based warnings and intentionally-added mercury prohibition; no numeric heavy-metal concentration limit for cosmetics | Subject-fit review, then canonical hero |
| `wiki/regulations/ca-swrcb-hexavalent-chromium-mcl.md` | California — Maximum Contaminant Level for Hexavalent Chromium in Drinking Water | Subject-fit review, then canonical hero |
| `wiki/regulations/california-dcc-2026-cannabis-heavy-metals-testing.md` | regulations/california-dcc-2026-cannabis-heavy-metals-testing | Subject-fit review, then canonical hero |
| `wiki/regulations/california-sb929-metal-containing-jewelry.md` | regulations/california-sb929-metal-containing-jewelry | Subject-fit review, then canonical hero |
| `wiki/regulations/california-swrcb-2024-inorganic-chemical-mcls.md` | regulations/california-swrcb-2024-inorganic-chemical-mcls | Subject-fit review, then canonical hero |
| `wiki/regulations/canada-cfia-fertilizer-growing-media-heavy-metal-standards.md` | regulations/canada-cfia-fertilizer-growing-media-heavy-metal-standards | Subject-fit review, then canonical hero |
| `wiki/regulations/canada-gdwq-summary-tables-2025.md` | regulations/canada-gdwq-summary-tables-2025 | Subject-fit review, then canonical hero |
| `wiki/regulations/canada-natural-health-products-heavy-metal-limits-2015.md` | regulations/canada-natural-health-products-heavy-metal-limits-2015 | Subject-fit review, then canonical hero |
| `wiki/regulations/canada-sor-2011-17-toys-regulations.md` | regulations/canada-sor-2011-17-toys-regulations | Subject-fit review, then canonical hero |
| `wiki/regulations/canada-sor-2018-82-childrens-jewellery.md` | regulations/canada-sor-2018-82-childrens-jewellery | Subject-fit review, then canonical hero |
| `wiki/regulations/canada-sor-2018-83-consumer-products-lead.md` | regulations/canada-sor-2018-83-consumer-products-lead | Subject-fit review, then canonical hero |

## Batch 40: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/regulations/canada-surface-coating-materials-heavy-metals-2016.md` | regulations/canada-surface-coating-materials-heavy-metals-2016 | Subject-fit review, then canonical hero |
| `wiki/regulations/chile-decreto-977-heavy-metal-limits.md` | regulations/chile-decreto-977-heavy-metal-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/china-cosmetics-safety-technical-standards-2015.md` | regulations/china-cosmetics-safety-technical-standards-2015 | Subject-fit review, then canonical hero |
| `wiki/regulations/china-gb-21027-2020-student-articles-safety.md` | regulations/china-gb-21027-2020-student-articles-safety | Subject-fit review, then canonical hero |
| `wiki/regulations/china-gb-2762-2012-contaminants-superseded.md` | regulations/china-gb-2762-2012-contaminants-superseded | Subject-fit review, then canonical hero |
| `wiki/regulations/china-gb-2762-2017-contaminants-superseded.md` | regulations/china-gb-2762-2017-contaminants-superseded | Subject-fit review, then canonical hero |
| `wiki/regulations/china-gb-2762-2022-contaminants.md` | regulations/china-gb-2762-2022-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/china-gb-28480-2012-adornment-harmful-elements.md` | regulations/china-gb-28480-2012-adornment-harmful-elements | Subject-fit review, then canonical hero |
| `wiki/regulations/china-gb-4806-9-2023-food-contact-metal.md` | regulations/china-gb-4806-9-2023-food-contact-metal | Subject-fit review, then canonical hero |
| `wiki/regulations/china-gb14930-1-detergent-arsenic-limits-2022.md` | regulations/china-gb14930-1-detergent-arsenic-limits-2022 | Subject-fit review, then canonical hero |
| `wiki/regulations/china-pet-food-heavy-metal-limits-draft.md` | regulations/china-pet-food-heavy-metal-limits-draft | Subject-fit review, then canonical hero |
| `wiki/regulations/codex-cadmium-mls.md` | Codex Alimentarius — Maximum Levels for Cadmium in Food | Subject-fit review, then canonical hero |
| `wiki/regulations/codex-cxs-193-1995-tin-canned-foods.md` | Codex CXS 193-1995 - Tin maximum levels for canned foods | Subject-fit review, then canonical hero |
| `wiki/regulations/coe-cm-res-2013-9-metals-alloys-food-contact.md` | regulations/coe-cm-res-2013-9-metals-alloys-food-contact | Subject-fit review, then canonical hero |
| `wiki/regulations/colombia-resolucion-4506-2013-contaminants.md` | regulations/colombia-resolucion-4506-2013-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/colorado-marijuana-heavy-metal-limits-2022.md` | regulations/colorado-marijuana-heavy-metal-limits-2022 | Subject-fit review, then canonical hero |
| `wiki/regulations/connecticut-pa-10-113-cadmium-childrens-jewelry.md` | regulations/connecticut-pa-10-113-cadmium-childrens-jewelry | Subject-fit review, then canonical hero |
| `wiki/regulations/costa-rica-rtcr409-2008-fishery-contaminants.md` | regulations/costa-rica-rtcr409-2008-fishery-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/cuba-nc877-2012-wheat-flour-metal-contaminants.md` | regulations/cuba-nc877-2012-wheat-flour-metal-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/eac-deas-425-1-2023-body-face-powder-heavy-metals.md` | regulations/eac-deas-425-1-2023-body-face-powder-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/eac-deas-425-2-2021-baby-powder-heavy-metals.md` | regulations/eac-deas-425-2-2021-baby-powder-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/eaeu-tr-cu-009-2011-cosmetic-toxic-elements.md` | regulations/eaeu-tr-cu-009-2011-cosmetic-toxic-elements | Subject-fit review, then canonical hero |
| `wiki/regulations/ecuador-nte-inen-184-2013-canned-tuna.md` | regulations/ecuador-nte-inen-184-2013-canned-tuna | Subject-fit review, then canonical hero |
| `wiki/regulations/efsa-aluminium-twi.md` | EFSA — Aluminium Tolerable Weekly Intake (1 mg/kg b.w./week) | Subject-fit review, then canonical hero |
| `wiki/regulations/efsa-arsenic-contam-2009.md` | EFSA — Arsenic in Food (2009), No-PTWI Position | Subject-fit review, then canonical hero |

## Batch 41: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/regulations/efsa-cadmium-twi.md` | EFSA — Tolerable Weekly Intake for Cadmium, 2.5 µg/kg b.w./week | Subject-fit review, then canonical hero |
| `wiki/regulations/efsa-lead-contam-2010.md` | EFSA — Lead in Food (2010), No-Threshold Position | Subject-fit review, then canonical hero |
| `wiki/regulations/efsa-mercury-twi.md` | EFSA — Inorganic Mercury Tolerable Weekly Intake (4 µg/kg b.w./week) | Subject-fit review, then canonical hero |
| `wiki/regulations/efsa-methylmercury-twi.md` | EFSA — Methylmercury Tolerable Weekly Intake (1.3 µg/kg b.w./week) | Subject-fit review, then canonical hero |
| `wiki/regulations/efsa-nickel-tdi.md` | EFSA — Nickel Tolerable Daily Intake (13 µg/kg b.w./day) | Subject-fit review, then canonical hero |
| `wiki/regulations/epa-arsenic-mcl.md` | EPA — Maximum Contaminant Level for Arsenic in Drinking Water | Subject-fit review, then canonical hero |
| `wiki/regulations/epa-iris-cadmium-rfd.md` | EPA IRIS — Cadmium Oral Reference Doses | Subject-fit review, then canonical hero |
| `wiki/regulations/epa-iris-inorganic-arsenic-rfd.md` | EPA IRIS — Inorganic Arsenic Toxicological Review (January 2025) | Subject-fit review, then canonical hero |
| `wiki/regulations/epa-iris-lead-rfd.md` | EPA IRIS — Lead, Oral RfD and Carcinogenicity Assessment | Subject-fit review, then canonical hero |
| `wiki/regulations/epa-iris-mercury-rfd.md` | EPA IRIS — Mercuric Chloride Oral Reference Dose | Subject-fit review, then canonical hero |
| `wiki/regulations/epa-iris-methylmercury-rfd.md` | EPA IRIS — Methylmercury Oral Reference Dose | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-10-2011-food-contact-plastics-sml.md` | EU Regulation 10/2011 — specific migration limits for metals (plastic food-contact, Annex II) | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-1881-2006-contaminants-superseded.md` | Commission Regulation (EC) No 1881/2006 setting maximum levels for certain contaminants in foodstuffs | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2009-48-toy-safety-migration-limits.md` | EU Toy Safety Directive 2009/48/EC — element migration limits (Annex II Part III) | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2015-1006-iAs-rice.md` | regulations/eu-2015-1006-iAs-rice | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2020-2184-drinking-water.md` | regulations/eu-2020-2184-drinking-water | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2021-1317-lead-cereals-superseded.md` | EU Regulation 2021/1317 - Lead maximum level for cereals and pulses | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2021-1323-cadmium-cereals-superseded.md` | EU Regulation 2021/1323 - Cadmium maximum levels for cereals | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2023-915-cadmium.md` | Commission Regulation (EU) 2023/915 cadmium maximum levels | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2023-915-lead-infant-young-child-foods.md` | EU Regulation 2023/915 — Lead Maximum Levels for Infant and Young-Child Foods | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2024-1987-nickel-maximum-levels.md` | Commission Regulation (EU) 2024/1987 — maximum levels of nickel in certain foodstuffs | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2024-907-nickel-monitoring.md` | Commission Recommendation (EU) 2024/907 on the monitoring of nickel in food | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-2025-1891-inorganic-arsenic-fish-seafood.md` | regulations/eu-2025-1891-inorganic-arsenic-fish-seafood | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-466-2001-contaminants-superseded.md` | Commission Regulation (EC) No 466/2001 setting maximum levels for certain contaminants in foodstuffs | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-batteries-2023-heavy-metal-restrictions.md` | regulations/eu-batteries-2023-heavy-metal-restrictions | Subject-fit review, then canonical hero |

## Batch 42: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/regulations/eu-cosmetics-1223-2009.md` | EU Cosmetics Regulation (EC) No 1223/2009 — prohibited-substance framework, no numeric heavy-metal maximum levels | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-directive-2002-32-animal-feed-heavy-metals.md` | regulations/eu-directive-2002-32-animal-feed-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-fertilising-products-heavy-metal-limits-2019.md` | regulations/eu-fertilising-products-heavy-metal-limits-2019 | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-nickel-directive-94-27-ec.md` | EU Nickel Directive 94/27/EC | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reach-2009-annex-xvii-entry-20-organotin.md` | EU REACH Annex XVII entry 20 — organotin compounds in skin-contact and childcare articles | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reach-2011-494-cadmium-annex-xvii.md` | regulations/eu-reach-2011-494-cadmium-annex-xvii | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reach-2014-301-chromium-vi-leather.md` | regulations/eu-reach-2014-301-chromium-vi-leather | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reach-2015-628-lead-mouthable-articles.md` | regulations/eu-reach-2015-628-lead-mouthable-articles | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reach-2018-1513-cmr-textiles.md` | regulations/eu-reach-2018-1513-cmr-textiles | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reach-2020-2081-tattoo-ink-metal-limits.md` | regulations/eu-reach-2020-2081-tattoo-ink-metal-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reg-2018-73-mercury-compounds-mrls.md` | regulations/eu-reg-2018-73-mercury-compounds-mrls | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-reg-2022-617-mercury-fish.md` | regulations/eu-reg-2022-617-mercury-fish | Subject-fit review, then canonical hero |
| `wiki/regulations/eu-rohs-2011-heavy-metals-homogeneous-materials.md` | regulations/eu-rohs-2011-heavy-metals-homogeneous-materials | Subject-fit review, then canonical hero |
| `wiki/regulations/eu2023-arsenic-rice-based-drinks.md` | EU inorganic arsenic maximum level for non-alcoholic rice-based drinks | Subject-fit review, then canonical hero |
| `wiki/regulations/eu2023-contaminants-maximum-levels.md` | EU Regulation 2023/915 maximum levels for contaminants in food | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-21cfr-73-color-additive-metal-specifications.md` | regulations/fda-21cfr-73-color-additive-metal-specifications | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-21cfr-74-certified-color-additive-metal-specifications.md` | regulations/fda-21cfr-74-certified-color-additive-metal-specifications | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-closer-to-zero.md` | FDA Closer to Zero — Program Overview | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-cosmetics-heavy-metals.md` | US FDA cosmetics heavy-metal policy — draft lead guidance (10 ppm) and the binding mercury trace rule (21 CFR 700.13, <1 ppm) | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-cpg-540-600-methylmercury-fish.md` | FDA CPG Sec. 540.600 Fish, Shellfish, Crustaceans and other Aquatic Animals — Methyl Mercury | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-ctz-Pb-babyfood-10ppb.md` | FDA Closer to Zero — 10 ppb Lead Action Level for Processed Baby Food (Fruits, Non-Root Vegetables, Mixtures, Yogurts, Custards/Puddings, Single-Ingredient Meats) | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-ctz-Pb-cereal-20ppb.md` | FDA Closer to Zero — 20 ppb Lead Action Level for Dry Infant Cereals | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-ctz-Pb-rootveg-20ppb.md` | FDA Closer to Zero — 20 ppb Lead Action Level for Single-Ingredient Root Vegetables (Baby Food) | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-iAs-rice-cereal-100ppb.md` | FDA Closer to Zero — 100 ppb Inorganic Arsenic Action Level for Infant Rice Cereal | Subject-fit review, then canonical hero |
| `wiki/regulations/fda-juice-haccp-lead-50ppb.md` | FDA Juice HACCP — 50 ppb Lead Guidance Context for Juice | Subject-fit review, then canonical hero |

## Batch 43: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/regulations/fda2022-draft-lead-juice.md` | FDA 2022 Draft — Lead Action Levels for Juice | Subject-fit review, then canonical hero |
| `wiki/regulations/fda2023-inorganic-arsenic-apple-juice.md` | FDA — 10 ppb Inorganic Arsenic Action Level for Apple Juice | Subject-fit review, then canonical hero |
| `wiki/regulations/fda2025-lead-processed-baby-foods.md` | FDA 2025 Lead Action Levels for Processed Food Intended for Babies and Young Children | Subject-fit review, then canonical hero |
| `wiki/regulations/fiji-food-safety-regulations-2009-chemical-contaminants.md` | regulations/fiji-food-safety-regulations-2009-chemical-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/germany-bvl-2017-technically-avoidable-heavy-metals-cosmetics.md` | regulations/germany-bvl-2017-technically-avoidable-heavy-metals-cosmetics | Subject-fit review, then canonical hero |
| `wiki/regulations/gso-193-2021-contaminants-toxins-food-feed.md` | regulations/gso-193-2021-contaminants-toxins-food-feed | Subject-fit review, then canonical hero |
| `wiki/regulations/gso-2783-2025-heavy-metals-food.md` | regulations/gso-2783-2025-heavy-metals-food | Subject-fit review, then canonical hero |
| `wiki/regulations/guyana-fisheries-products-regulations-2023-environmental-contaminants.md` | regulations/guyana-fisheries-products-regulations-2023-environmental-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/health-canada-cosmetic-heavy-metal-impurities.md` | Health Canada — Guidance on Heavy Metal Impurities in Cosmetics: Pb 10, As 3, Cd 3, Hg 1, Sb 5 ppm | Subject-fit review, then canonical hero |
| `wiki/regulations/hong-kong-cap-132v-metallic-contamination.md` | regulations/hong-kong-cap-132v-metallic-contamination | Subject-fit review, then canonical hero |
| `wiki/regulations/hong-kong-mercury-control-ordinance-cosmetics.md` | regulations/hong-kong-mercury-control-ordinance-cosmetics | Subject-fit review, then canonical hero |
| `wiki/regulations/index.md` | Regulations | Subject-fit review, then canonical hero |
| `wiki/regulations/india-cosmetics-rules-2020-heavy-metal-limits.md` | regulations/india-cosmetics-rules-2020-heavy-metal-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/india-cosmetics-rules-2020-heavy-metals.md` | regulations/india-cosmetics-rules-2020-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/india-fssai-2015-chromium-gelatin-amendment.md` | regulations/india-fssai-2015-chromium-gelatin-amendment | Subject-fit review, then canonical hero |
| `wiki/regulations/india-fssai-2016-heavy-metals-third-amendment.md` | regulations/india-fssai-2016-heavy-metals-third-amendment | Subject-fit review, then canonical hero |
| `wiki/regulations/india-fssai-2026-contaminants-amendment.md` | regulations/india-fssai-2026-contaminants-amendment | Subject-fit review, then canonical hero |
| `wiki/regulations/india-is-3959-2004-skin-powders.md` | regulations/india-is-3959-2004-skin-powders | Subject-fit review, then canonical hero |
| `wiki/regulations/india-is-6608-2004-skin-creams.md` | regulations/india-is-6608-2004-skin-creams | Subject-fit review, then canonical hero |
| `wiki/regulations/indonesia-bpom-16-2024-cosmetic-contaminant-limits.md` | regulations/indonesia-bpom-16-2024-cosmetic-contaminant-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/israel-imc-gmp-cannabis-heavy-metal-limits-2016.md` | regulations/israel-imc-gmp-cannabis-heavy-metal-limits-2016 | Subject-fit review, then canonical hero |
| `wiki/regulations/israel-moh-fcs-2016-heavy-metals-tin-food-guidelines.md` | regulations/israel-moh-fcs-2016-heavy-metals-tin-food-guidelines | Subject-fit review, then canonical hero |
| `wiki/regulations/japan-mhlw-foodstuffs-2008-drink-beverage-tin.md` | regulations/japan-mhlw-foodstuffs-2008-drink-beverage-tin | Subject-fit review, then canonical hero |
| `wiki/regulations/japan-mhlw-milk-products-standards.md` | regulations/japan-mhlw-milk-products-standards | Subject-fit review, then canonical hero |
| `wiki/regulations/japan-notice-370-food-contact-heavy-metals.md` | regulations/japan-notice-370-food-contact-heavy-metals | Subject-fit review, then canonical hero |

## Batch 44: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/regulations/japan-pet-food-heavy-metal-standards-2021.md` | regulations/japan-pet-food-heavy-metal-standards-2021 | Subject-fit review, then canonical hero |
| `wiki/regulations/jecfa-arsenic-bmdl.md` | JECFA inorganic arsenic BMDL₀.₅ (lower-limit benchmark dose) | Subject-fit review, then canonical hero |
| `wiki/regulations/jecfa-cadmium-ptmi.md` | JECFA — Provisional Tolerable Monthly Intake for Cadmium, 25 µg/kg b.w./month | Subject-fit review, then canonical hero |
| `wiki/regulations/jecfa-lead-ptwi-withdrawn.md` | JECFA — Lead Provisional Tolerable Weekly Intake (Withdrawn 2010) | Subject-fit review, then canonical hero |
| `wiki/regulations/jecfa-methylmercury-ptwi.md` | JECFA — Methylmercury Provisional Tolerable Weekly Intake (1.6 µg/kg b.w./week) | Subject-fit review, then canonical hero |
| `wiki/regulations/kenya-ks-2937-2021-cosmetic-heavy-metals.md` | regulations/kenya-ks-2937-2021-cosmetic-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/korea-mfds-2024-29-food-contact-heavy-metals.md` | regulations/korea-mfds-2024-29-food-contact-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/korea-mfds-2025-63-cosmetics-safety-standards.md` | regulations/korea-mfds-2025-63-cosmetics-safety-standards | Subject-fit review, then canonical hero |
| `wiki/regulations/korea-mfds-food-code-heavy-metals.md` | regulations/korea-mfds-food-code-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/malaysia-npra-cosmetics-heavy-metal-limits-2022.md` | regulations/malaysia-npra-cosmetics-heavy-metal-limits-2022 | Subject-fit review, then canonical hero |
| `wiki/regulations/maryland-cannabis-heavy-metal-action-limits-2025.md` | regulations/maryland-cannabis-heavy-metal-action-limits-2025 | Subject-fit review, then canonical hero |
| `wiki/regulations/massachusetts-cannabis-heavy-metal-protocol-2020.md` | regulations/massachusetts-cannabis-heavy-metal-protocol-2020 | Subject-fit review, then canonical hero |
| `wiki/regulations/mercosur-gmc-res-12-2011-inorganic-contaminants.md` | regulations/mercosur-gmc-res-12-2011-inorganic-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/mercosur-project-07-23-metal-contaminants.md` | regulations/mercosur-project-07-23-metal-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/mexico-nom-186-2013-cacao-chocolate-contaminants.md` | regulations/mexico-nom-186-2013-cacao-chocolate-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/mexico-nom-252-ssa1-2011-toy-school-article-metals.md` | regulations/mexico-nom-252-ssa1-2011-toy-school-article-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/minnesota-325e-3892-lead-cadmium-consumer-products.md` | regulations/minnesota-325e-3892-lead-cadmium-consumer-products | Subject-fit review, then canonical hero |
| `wiki/regulations/minnesota-ch347-cadmium-childrens-jewelry.md` | regulations/minnesota-ch347-cadmium-childrens-jewelry | Subject-fit review, then canonical hero |
| `wiki/regulations/morocco-bo-7136-2022-contaminant-maximum-levels.md` | regulations/morocco-bo-7136-2022-contaminant-maximum-levels | Subject-fit review, then canonical hero |
| `wiki/regulations/mx-nom-027-ssa1-1993-fresh-frozen-fish-superseded.md` | Norma Oficial Mexicana NOM-027-SSA1-1993, Productos de la pesca: pescados frescos-refrigerados y congelados | Subject-fit review, then canonical hero |
| `wiki/regulations/mx-nom-028-ssa1-1993-canned-fish-superseded.md` | Norma Oficial Mexicana NOM-028-SSA1-1993, Productos de la pesca: pescados en conserva | Subject-fit review, then canonical hero |
| `wiki/regulations/mx-nom-242-ssa1-2009-fishery-products.md` | Norma Oficial Mexicana NOM-242-SSA1-2009, Productos de la pesca frescos, refrigerados, congelados y procesados | Subject-fit review, then canonical hero |
| `wiki/regulations/nevada-cannabis-heavy-metal-action-levels-2020.md` | regulations/nevada-cannabis-heavy-metal-action-levels-2020 | Subject-fit review, then canonical hero |
| `wiki/regulations/new-zealand-cosmetic-products-group-standard-heavy-metals.md` | regulations/new-zealand-cosmetic-products-group-standard-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/oehha-arsenic-prop65.md` | California Proposition 65 — Inorganic Arsenic Compounds Listing | Subject-fit review, then canonical hero |

## Batch 45: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/regulations/oehha-cadmium-prop65.md` | California Proposition 65 — Cadmium Listing and Maximum Allowable Daily Level | Subject-fit review, then canonical hero |
| `wiki/regulations/oehha-chromium-vi-prop65.md` | California Proposition 65 — Hexavalent Chromium Listing and Safe-Harbor Levels | Subject-fit review, then canonical hero |
| `wiki/regulations/oehha-lead-prop65.md` | California Proposition 65 — Lead and Lead Compounds Listing | Subject-fit review, then canonical hero |
| `wiki/regulations/oehha-nickel-prop65.md` | California Proposition 65 — Nickel Listings (Cancer; Soluble Nickel Compounds Reproductive Toxicity) | Subject-fit review, then canonical hero |
| `wiki/regulations/pakistan-ps-3228-2017-skin-cream-heavy-metals.md` | regulations/pakistan-ps-3228-2017-skin-cream-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/panama-decreto-467-2007-plant-product-heavy-metals.md` | regulations/panama-decreto-467-2007-plant-product-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/panama-resolucion-368-2009-fishery-contaminants.md` | regulations/panama-resolucion-368-2009-fishery-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/paraguay-decreto-1335-2019-mercosur-inorganic-contaminants.md` | regulations/paraguay-decreto-1335-2019-mercosur-inorganic-contaminants | Subject-fit review, then canonical hero |
| `wiki/regulations/philippines-pns-bafs-194-2017-contaminants-food-feed.md` | regulations/philippines-pns-bafs-194-2017-contaminants-food-feed | Subject-fit review, then canonical hero |
| `wiki/regulations/singapore-acd-2007-carbon-black-impurities.md` | regulations/singapore-acd-2007-carbon-black-impurities | Subject-fit review, then canonical hero |
| `wiki/regulations/singapore-food-regulations-heavy-metals-2026.md` | regulations/singapore-food-regulations-heavy-metals-2026 | Subject-fit review, then canonical hero |
| `wiki/regulations/singapore-hsa-2024-cosmetic-heavy-metal-advisory.md` | regulations/singapore-hsa-2024-cosmetic-heavy-metal-advisory | Subject-fit review, then canonical hero |
| `wiki/regulations/singapore-hsa-health-supplement-heavy-metal-limits-2024.md` | regulations/singapore-hsa-health-supplement-heavy-metal-limits-2024 | Subject-fit review, then canonical hero |
| `wiki/regulations/south-africa-gn-r1227-1988-cosmetic-mercury-preservatives.md` | regulations/south-africa-gn-r1227-1988-cosmetic-mercury-preservatives | Subject-fit review, then canonical hero |
| `wiki/regulations/south-korea-mfds-notice-2024-9-cosmetic-trace-metals.md` | regulations/south-korea-mfds-notice-2024-9-cosmetic-trace-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/sri-lanka-dsls-187-2025-skin-powder-heavy-metals.md` | regulations/sri-lanka-dsls-187-2025-skin-powder-heavy-metals | Subject-fit review, then canonical hero |
| `wiki/regulations/switzerland-vhk-817-022-15-metal-metalloid-limits.md` | regulations/switzerland-vhk-817-022-15-metal-metalloid-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/taiwan-feed-import-phosphate-heavy-metal-limits-2017.md` | regulations/taiwan-feed-import-phosphate-heavy-metal-limits-2017 | Subject-fit review, then canonical hero |
| `wiki/regulations/taiwan-prohibited-ingredients-2024-cosmetic-heavy-metal-residuals.md` | regulations/taiwan-prohibited-ingredients-2024-cosmetic-heavy-metal-residuals | Subject-fit review, then canonical hero |
| `wiki/regulations/thailand-moph-notification-414-2020-contaminants-food.md` | regulations/thailand-moph-notification-414-2020-contaminants-food | Subject-fit review, then canonical hero |
| `wiki/regulations/timeline.md` | Regulatory tightening over time | Subject-fit review, then canonical hero |
| `wiki/regulations/trinidad-tobago-food-drugs-metal-limits-2007.md` | regulations/trinidad-tobago-food-drugs-metal-limits-2007 | Subject-fit review, then canonical hero |
| `wiki/regulations/turkey-food-codex-contaminants-2023-lead-raw-milk.md` | regulations/turkey-food-codex-contaminants-2023-lead-raw-milk | Subject-fit review, then canonical hero |
| `wiki/regulations/uruguay-rbn-5th-edition-heavy-metal-limits.md` | regulations/uruguay-rbn-5th-edition-heavy-metal-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/us-16cfr1500-17a13-lead-cored-candle-wicks.md` | regulations/us-16cfr1500-17a13-lead-cored-candle-wicks | Subject-fit review, then canonical hero |

## Batch 46: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/regulations/us-cpsia-lead-childrens-products.md` | US CPSIA — lead in children's products: 100 ppm total lead (substrate), 90 ppm (paint and surface coatings) | Subject-fit review, then canonical hero |
| `wiki/regulations/us-epa-2018-drinking-water-standards-health-advisories.md` | regulations/us-epa-2018-drinking-water-standards-health-advisories | Subject-fit review, then canonical hero |
| `wiki/regulations/us-fda-21cfr165-110-bottled-water-2024.md` | regulations/us-fda-21cfr165-110-bottled-water-2024 | Subject-fit review, then canonical hero |
| `wiki/regulations/usa-epa-40-cfr-503-biosolids-metal-limits.md` | regulations/usa-epa-40-cfr-503-biosolids-metal-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/vietnam-qcvn-20-1-2024-health-supplements.md` | regulations/vietnam-qcvn-20-1-2024-health-supplements | Subject-fit review, then canonical hero |
| `wiki/regulations/vietnam-qcvn-8-2-2011-heavy-metal-food-limits.md` | regulations/vietnam-qcvn-8-2-2011-heavy-metal-food-limits | Subject-fit review, then canonical hero |
| `wiki/regulations/washington-cspa-childrens-products-lead-cadmium.md` | regulations/washington-cspa-childrens-products-lead-cadmium | Subject-fit review, then canonical hero |
| `wiki/regulations/washington-tfca-toothpaste-pb-1000ppb.md` | regulations/washington-tfca-toothpaste-pb-1000ppb | Subject-fit review, then canonical hero |
| `wiki/regulations/who2022-drinking-water-guidelines.md` | regulations/who2022-drinking-water-guidelines | Subject-fit review, then canonical hero |
| `wiki/regulators/atsdr.md` | Agency for Toxic Substances and Disease Registry (ATSDR) | Subject-fit review, then canonical hero |
| `wiki/regulators/by-metal.md` | Regulatory positions by metal | Subject-fit review, then canonical hero |
| `wiki/regulators/codex.md` | Codex Alimentarius Commission (Codex) | Subject-fit review, then canonical hero |
| `wiki/regulators/efsa.md` | European Food Safety Authority (EFSA) | Subject-fit review, then canonical hero |
| `wiki/regulators/eu-commission.md` | European Commission (EC) | Subject-fit review, then canonical hero |
| `wiki/regulators/index.md` | Regulatory bodies | Subject-fit review, then canonical hero |
| `wiki/regulators/jecfa.md` | Joint FAO/WHO Expert Committee on Food Additives (JECFA) | Subject-fit review, then canonical hero |
| `wiki/regulators/oehha.md` | California Office of Environmental Health Hazard Assessment (OEHHA) | Subject-fit review, then canonical hero |
| `wiki/regulators/us-cdc.md` | United States Centers for Disease Control and Prevention (CDC) | Subject-fit review, then canonical hero |
| `wiki/regulators/us-epa.md` | United States Environmental Protection Agency (US EPA) | Subject-fit review, then canonical hero |
| `wiki/regulators/us-fda.md` | United States Food and Drug Administration (FDA) | Subject-fit review, then canonical hero |
| `wiki/reports/index.md` | Reports | Subject-fit review, then canonical hero |
| `wiki/reports/state-of-heavy-metals-in-food-2026.md` | State of Heavy Metals in Food 2026 | Subject-fit review, then canonical hero |
| `wiki/roadmap.md` | Roadmap | Subject-fit review, then canonical hero |
| `wiki/signup.md` | Request access | Subject-fit review, then canonical hero |
| `wiki/sources/ab-manan2018-oil-palm-soil-metals.md` | Determination of Selected Heavy Metal Concentrations in an Oil Palm Plantation Soil | Subject-fit review, then canonical hero |

## Batch 47: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/abaas2018-breast-milk-nickel.md` | Determination of Nickel Concentration in the Breast Milk of Lactating Mothers Living In Hilla City | Subject-fit review, then canonical hero |
| `wiki/sources/abatemi-usman2023-corn-cement-nigeria.md` | Trace elements concentrations in soil contaminate corn in the vicinity of a cement-manufacturing plant: potential health implications | Subject-fit review, then canonical hero |
| `wiki/sources/abbas2023-heavy-metals-fish-egypt-aquaculture.md` | Heavy Metals Assessment and Health Risk to Consumers of Two Commercial Fish Species from Polyculture Fishponds in El-Sharkia and Kafr El-Sheikh, Egypt: Physiological and Biochemical Study | Subject-fit review, then canonical hero |
| `wiki/sources/abbas2023-sparus-aurata-egypt-metals.md` | Heavy Metal Levels and Cancer Risk Assessments of the Commercial Denis, Sparus aurata Collected from Bardawil Lake and Private Fish Farm Waters as a Cultured Source, Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/abdel-rahman2019-egypt-nonalcoholic-beverages-metals.md` | Heavy metals content in some non-alcoholic beverages (carbonated drinks, flavored yogurt drinks, and juice drinks) of the Egyptian markets | Subject-fit review, then canonical hero |
| `wiki/sources/abdel-tawwab2023-cadmium-seabream-yeast.md` | Saccharomyces cerevisiae supplemented diets mitigate the effects of waterborne cadmium toxicity on gilthead seabream (Sparus aurata L.): growth performance, haemato-biochemical, stress biomarkers, and histopathological investigations | Subject-fit review, then canonical hero |
| `wiki/sources/abdelgawad2023-chromium-rice-grain.md` | Elevated CO2 mitigates chromium toxicity and accumulation in rice grain under Cr(VI) soil stress | Subject-fit review, then canonical hero |
| `wiki/sources/abdelnaby2022-lead-cadmium-milk.md` | Application of Bentonite Clay, Date Pit, and Chitosan Nanoparticles as Promising Adsorbents to Sequester Toxic Lead and Cadmium from Milk | Subject-fit review, then canonical hero |
| `wiki/sources/abdolahpour2023-heavy-metals-babol-vegetables.md` | The health risk assessment of heavy metals in vegetables grown in Babol city, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/abdullah2009-fish-sauce-malaysia-heavy-metals.md` | Determination of Heavy Metals in Selected Fish Sauce | Subject-fit review, then canonical hero |
| `wiki/sources/abdullahi2019-fruits-vegetables-heavy-metals.md` | Analysis and Evaluation of the Effect of Heavy Metals in Fruits and Vegetables | Subject-fit review, then canonical hero |
| `wiki/sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal.md` | Seasonal Variation and Uptake Pattern of Heavy Metals in Maize | Subject-fit review, then canonical hero |
| `wiki/sources/abdulrasheed2026-nigeria-cookware-metals.md` | Preliminary assessment of toxic metals in cookware, moulding materials and soils from manufacturing sites in southwest Nigeria, with evaluation of cookware leaching potential | Subject-fit review, then canonical hero |
| `wiki/sources/abebe2017-popcorn-cornflake-metals-ethiopia.md` | Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/abebe2023-awash-river-heavy-metals.md` | Evaluating the effects of geochemical and anthropogenic factors on the concentration and treatability of heavy metals in Awash River and Lake Beseka, Ethiopia: arsenic and molybdenum issues | Subject-fit review, then canonical hero |
| `wiki/sources/abedi2023-arsenic-mercury-hen-eggs-iran.md` | Consumer health risk assessment of Arsenic and Mercury in hen eggs through Monte Carlo simulations | Subject-fit review, then canonical hero |
| `wiki/sources/abedi2025-edible-oils-bleaching-review.md` | Comparison Between Emerging and Conventional Methods for Edible Oils Bleaching | Subject-fit review, then canonical hero |
| `wiki/sources/abegaz2021-drinking-water-ethiopia.md` | Quality and Safety of Rural Community Drinking Water Sources in Guto Gida District, Oromia, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/abeslami2025-moroccan-honey-minerals.md` | Mineral Profile and Heavy Metal Content of Seven Monofloral and Multifloral Honeys from Eastern Morocco | Subject-fit review, then canonical hero |
| `wiki/sources/abou-abbass2023-drinking-water-lebanon-metals.md` | Assessment of Chemical and Microbiological Drinking Water of Beirut and Mount Lebanon | Subject-fit review, then canonical hero |
| `wiki/sources/abraheem2022-tea-coffee-lead-cadmium.md` | Determination of Lead and Cadmium Concentration in Different Samples of Tea and Coffee Circulating in the Libyan Market | Subject-fit review, then canonical hero |
| `wiki/sources/abt2018-cadmium-lead-cocoa-chocolate-us-market.md` | Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market | Subject-fit review, then canonical hero |
| `wiki/sources/abt2020-perspective-cadmium-lead-cocoa-chocolate.md` | Perspective on Cadmium and Lead in Cocoa and Chocolate | Subject-fit review, then canonical hero |
| `wiki/sources/abuawad2023-folic-creatine-arsenic-methylation.md` | The Folic Acid and Creatine Trial: Treatment Effects of Supplementation on Arsenic Methylation Indices and Metabolite Concentrations in Blood in a Bangladeshi Population | Subject-fit review, then canonical hero |
| `wiki/sources/abubakar2025-faisalabad-sewage-vegetables.md` | Effects of sewage water irrigation on heavy metals accumulation in vegetables in peri-urban areas of Faisalabad, Pakistan | Subject-fit review, then canonical hero |

## Batch 48: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/abulude2007-soaps-detergents-akure-nigeria.md` | Assessment of the Content of Pb, Cd, Ni and Cr in Soaps and Detergents from Akure, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/aburas2023-libyan-honey-lead-cadmium.md` | Pollution assessment by estimation of Lead and Cadmium concentrations and some physical properties in a number of types of Libyan Honey | Subject-fit review, then canonical hero |
| `wiki/sources/abusalem2023-benisuef-groundwater.md` | Unraveling the hydrogeochemical evolution and pollution sources of shallow aquifer using multivariate statistical analysis and hydrogeochemical techniques: a case study of the Quaternary aquifer in Beni Suef area, Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/acar2012-vegetable-oils-olives-turkey-etaas.md` | Evaluation of cadmium, lead, copper, iron and zinc in Turkish dietary vegetable oils and olives using electrothermal and flame atomic absorption spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/acceptable2025-received-31-march-2025-and-chemometric-profiles-of.md` | Received: 31 March 2025 and chemometric profiles of pestils were evaluated. The beetroot-based snack formulated | Subject-fit review, then canonical hero |
| `wiki/sources/acosta1993-cd-pb-ni-vinegar-types.md` | Levels of Cd, Pb, and Ni in Different Types of Vinegars | Subject-fit review, then canonical hero |
| `wiki/sources/acutus2022-role-of-sulfate-transporters-in-chromium-tolerance-in.md` | Role of Sulfate Transporters in Chromium Tolerance in | Subject-fit review, then canonical hero |
| `wiki/sources/adaileh2025-pan-composite-lead-cadmium-wastewater.md` | Development of Cu-ZnO ZrO2 based polyacrylonitrile polymer composites for removing pharmaceutical pollutants and heavy metals from wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/adams2017-nigerian-processed-spices-metals.md` | Genotoxic studies of cooked and uncooked processed spices using Allium cepa Test | Subject-fit review, then canonical hero |
| `wiki/sources/adebayo2020-wastewater-irrigated-spinach.md` | Levels of heavy metals and their health risk assessment from wastewater irrigated spinach in railway quarters, Bauchi, Bauchi state, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/adegbola2015-nigeria-snacks-drinks-metals.md` | Evaluation of some heavy metal contaminants in biscuits, fruit drinks, concentrates, candy, milk products and carbonated drinks sold in Ibadan, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/adelusi2024-dairy-feed-south-africa.md` | Heavy Metal Contamination of Dairy Cattle Feed in the Free State and Limpopo Provinces of South Africa | Subject-fit review, then canonical hero |
| `wiki/sources/adhikari2024-leafy-vegetables-johannesburg.md` | Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa | Subject-fit review, then canonical hero |
| `wiki/sources/adler2019-selected-metals-coffee-bosnia.md` | Concentrations of selected metals (Na, K, Ca, Mg, Fe, Cu, Zn, Al, Ni, Pb, Cd) in coffee | Subject-fit review, then canonical hero |
| `wiki/sources/admani2014-mi-wet-wipes-perianal.md` | Methylisothiazolinone: A Case of Perianal Dermatitis Caused by Wet Wipes and Review of an Emerging Pediatric Allergen | Subject-fit review, then canonical hero |
| `wiki/sources/aendo2024-thailand-egg-metals-goldmine.md` | Heavy metal contamination in eggs on poultry farms and ecological risk assessment around a gold mine area in northern Thailand | Subject-fit review, then canonical hero |
| `wiki/sources/afonne2020-heavy-metals-plant-foods.md` | Heavy metals risks in plant foods – need to step up precautionary measures | Subject-fit review, then canonical hero |
| `wiki/sources/afridi2023-cosmetics-lead-dermatitis.md` | Effect of Lead on the Skin and Health of Female Dermatitis Patients Through Cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/afrin2020-heavy-metals-fruits-dhaka.md` | Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City | Subject-fit review, then canonical hero |
| `wiki/sources/afzal2024-livestock-heavy-metals-review.md` | Emerging insights into the impacts of heavy metals exposure on health, reproductive and productive performance of livestock | Subject-fit review, then canonical hero |
| `wiki/sources/agarwal2022-heavy-metals-vegetables-east-kolkata.md` | Seasonal Variations in Bioaccumulation and Translocation of Toxic Heavy Metals in the Dominant Vegetables of East Kolkata Wetlands: a Case Study with Suggestive Ecorestorative Strategies | Subject-fit review, then canonical hero |
| `wiki/sources/aghamirlou2015-iranian-honey-metals.md` | Heavy metals determination in honey samples using inductively coupled plasma-optical emission spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/agren1990-zinc-oxide-percutaneous-absorption-man.md` | Percutaneous absorption of zinc from zinc oxide applied topically to intact skin in man | Subject-fit review, then canonical hero |
| `wiki/sources/agren1991-zno-vehicles-zinc-absorption-skin-wounds.md` | Influence of two vehicles for zinc oxide on zinc absorption through intact skin and wounds | Subject-fit review, then canonical hero |
| `wiki/sources/aguilar-miranda2024-thg-canned-tuna-ecuador.md` | Total mercury exposure through canned tuna in water sold in Quito, Ecuador | Subject-fit review, then canonical hero |

## Batch 49: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/agustina2021-whitening-creams-pb-cd.md` | Analysis of Lead (Pb) and Cadmium (Cd) in Whitening Creams using Atomic Absorption Spectroscopy | Subject-fit review, then canonical hero |
| `wiki/sources/agwaramgbo2012-there-is-a-growing-global-concern-for-the.md` | An Evaluation of Edible Plant Extracts for the Phytoremediation of Lead Contaminated Water | Subject-fit review, then canonical hero |
| `wiki/sources/ahmed2017-bangladesh-vegetable-arsenic.md` | Arsenic Contamination of Water-Soil-Crop System in an Industrial Area of Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/ahmed2019-irrigation-water-bangladesh-seasonal.md` | Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables and the Difference between Dry and Wet Seasons Near a Multi-Industry Zone in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/ahmed2023-trace-metals-tomato-wastewater.md` | Trace metal concentrations in tomato fruits irrigated with industrial wastewater in Cairo and health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/ahuja2019-magnetite-chitosan-arsenic-groundwater.md` | Remediation of arsenic contaminated groundwater with magnetite (Fe3O4) and chitosan coated Fe3O4 nanoparticles | Subject-fit review, then canonical hero |
| `wiki/sources/aicis2022-aluminium-antiperspirants-evaluation.md` | Use of Aluminium in Antiperspirants: Evaluation statement | Subject-fit review, then canonical hero |
| `wiki/sources/aiken2023-manganese-drinking-water-central-valley.md` | Disparities in Drinking Water Manganese Concentrations in Domestic Wells and Community Water Systems in the Central Valley, CA, USA | Subject-fit review, then canonical hero |
| `wiki/sources/aishwarya2024-extremophiles-bioremediation-review.md` | Role of Extremophiles in the Removal of Heavy Metal and E-Waste | Subject-fit review, then canonical hero |
| `wiki/sources/aisyiah2025-heavy-metals-breast-milk-systematic-review.md` | Heavy Metal Content in Breast Milk and Contributing Environmental and Maternal Factors: A Systematic Review | Subject-fit review, then canonical hero |
| `wiki/sources/aitsaghir2025-coffee-enset-soil-metals.md` | Soil variability effect on the indices of potentially toxic elements pollution under the coffee (Coffea arabica)-enset (Ensete ventricosum) agroforestry systems of Southern Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/akhmetsadykova2013-camel-milk-lab-lead.md` | Protection against lead contamination by strains of lactic acid bacteria from fermented camel milk | Subject-fit review, then canonical hero |
| `wiki/sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin.md` | Determination of aflatoxin M1 and heavy metals in infant formula milk brands available in Pakistani markets | Subject-fit review, then canonical hero |
| `wiki/sources/akinlolu2025-cadmium-neurotoxicity-moringa-musa.md` | Neuroprotective potentials of extracts from Moringa oleifera and Musa sapientum against cadmium chloride-induced neurotoxicity in rats cerebri | Subject-fit review, then canonical hero |
| `wiki/sources/akkaya2025-marmara-fishery-products-metals.md` | Determination of Heavy Metal Levels and Assessment of L. monocytogenes and Salmonella spp. Presence in Fishery Products and Mussels from the Marmara Region, Türkiye | Subject-fit review, then canonical hero |
| `wiki/sources/al-dhabi2013-spirulina-products-metals.md` | Heavy metal analysis in commercial Spirulina products for human consumption | Subject-fit review, then canonical hero |
| `wiki/sources/al-khayri2023-cd-medicinal-plants.md` | Cadmium stress in plants: A critical review of the effects, mechanisms, and tolerance strategies | Subject-fit review, then canonical hero |
| `wiki/sources/al-otaibi2024-wadi-hanifah-metals-args.md` | Screening for Antibiotic Resistance Genes in Bacteria and the Presence of Heavy Metals in the Upstream and Downstream Areas of the Wadi Hanifah Valley in Riyadh, Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/al-sidawi2021-heavy-metals-milk-cheese-kvemo-kartli-georgia.md` | Heavy Metal Levels in Milk and Cheese Produced in the Kvemo Kartli Region, Georgia | Subject-fit review, then canonical hero |
| `wiki/sources/alam2019-lentil-arsenic-accumulation.md` | Arsenic accumulation in lentil (Lens culinaris) genotypes and risk associated with the consumption of grains | Subject-fit review, then canonical hero |
| `wiki/sources/alam2021-bangladesh-poultry-feed-meat-metals.md` | Heavy metal contamination and antibiotic residues in poultry feed and meat in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/alam2022-dhaka-spices-lead.md` | Lead Exposure of Four Biologically Important Common Branded and Nonbranded Spices: Relative Analysis and Health Implication | Subject-fit review, then canonical hero |
| `wiki/sources/alam2023-dairy-cattle-lake-fodder-bengaluru.md` | Urbanisation threats to dairy cattle health: Insights from Greater Bengaluru, India | Subject-fit review, then canonical hero |
| `wiki/sources/alamgir2022-karachi-whitening-creams-metals.md` | Quantitative Analysis of Heavy Metals in Unbranded Whitening Creams Sold in Karachi | Subject-fit review, then canonical hero |
| `wiki/sources/alatise2025-fruit-nuts-metals.md` | Assessment of natural radioactivity and heavy metal accumulation in selected edible fruit nuts from Lagos and Ogun State markets, Nigeria | Subject-fit review, then canonical hero |

## Batch 50: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/albals2021-coffee-jordan-icpms.md` | Multi-element determination of essential and toxic metals in green and roasted coffee beans: A comparative study among different origins using ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/albishi2026-cassava-flour-biofortification.md` | In vitro evaluation of bio-fortification effects on the nutritional quality, toxicological safety, and antioxidant of cassava (Manihot esculenta) flour, and environmental safety of processing water, using natural additives | Subject-fit review, then canonical hero |
| `wiki/sources/alblooshi2025-perfumes-cosmetics-health-review.md` | The impact of perfumes and cosmetic products on human health: a narrative review | Subject-fit review, then canonical hero |
| `wiki/sources/albuquerque2026-fish-toxic-elements-western-para.md` | More Danger Than Meets the Eye: Potentially Toxic Element Contamination in Fish from the Western Pará Poses Significant Hazards to Local Communities | Subject-fit review, then canonical hero |
| `wiki/sources/aldayel2018-facial-cosmetics-saudi-arabia.md` | Heavy Metals Concentration in Facial Cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/alemu2022-wheat-flour-metals-ethiopia.md` | Levels of selected essential and non-essential metals in wheat flour and health risk assessment among consumers in Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/alfaraji2023-infant-formula-baghdad-minerals.md` | The detection of some minerals in infant formula available in local markets | Subject-fit review, then canonical hero |
| `wiki/sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals.md` | Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/ali2020-chicken-liver-heavy-metals-erbil.md` | Determination of heavy metals and selenium content in chicken liver at Erbil city, Iraq | Subject-fit review, then canonical hero |
| `wiki/sources/ali2022-lead-wastewater-crops-meta.md` | Meta-analysis of public health risks of lead accumulation in wastewater, irrigated soil, and crops nexus | Subject-fit review, then canonical hero |
| `wiki/sources/ali2023-lahore-sunblocks-heavy-metals.md` | Determination of heavy metals and their associated health risk assessment in the commonly available sunblocks | Subject-fit review, then canonical hero |
| `wiki/sources/ali2024-facial-cosmetics-metals-benghazi.md` | The Health Risk Assessment of Some Toxic Metals in Some Commonly Demand Facial Cosmetics in Benghazi-Libya Markets During 2022 | Subject-fit review, then canonical hero |
| `wiki/sources/ali2024-leek-microbial-metals-iraq.md` | Contamination Alert: Microbial and Heavy Metal Levels in Green Vegetables | Subject-fit review, then canonical hero |
| `wiki/sources/ali2025-carbon-dots-aluminum-cobalt-canned-food.md` | Carbon Dots Fluorometric Sensor for Simultaneous Detection of Aluminum and Cobalt in Canned Foods | Subject-fit review, then canonical hero |
| `wiki/sources/alimohammadi2018-tehran-supermarket-vegetables.md` | Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/alinezhad2024-heavy-metals-milk-systematic-review.md` | Concentration of heavy metals in pasteurized and sterilized milk and health risk assessment across the globe: A systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/alizadeh2017-mercury-lead-soaps-mashhad.md` | Mercury and Lead Levels in Common Soaps from Local Markets in Mashhad, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/aljedani2017-honeybee-honey-saudi-arabia.md` | Determination of Some Heavy Metals and Elements in Honeybee and Honey Samples from Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/aljohani2023-heavy-metal-toxicity-poultry.md` | Heavy metal toxicity in poultry: a comprehensive review | Subject-fit review, then canonical hero |
| `wiki/sources/aljubiri2024-sewage-sludge-carbon-cadmium-lead.md` | Recycling of Sewage Sludge: Synthesis and Application of Sludge-Based Activated Carbon in the Efficient Removal of Cadmium (II) and Lead (II) from Wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/aljufaili2024-garra-shamal-oman.md` | Heavy metals in Garra shamal freshwater fish from Oman: accumulation and health risk | Subject-fit review, then canonical hero |
| `wiki/sources/alkahachi2022-soil-metals-kirkuk-iraq.md` | Distribution and Enrichments of Abundant and Trace Elements in Al-Khassa Sub Basin Soil, Kirkuk, Northeastern of Iraq | Subject-fit review, then canonical hero |
| `wiki/sources/allafi2020-antimony-pet-storage.md` | The effect of temperature and storage time on the migration of antimony from polyethylene terephthalate (PET) into commercial bottled water in Kuwait | Subject-fit review, then canonical hero |
| `wiki/sources/allsopp2001-greenpeace-hazardous-chemicals-carpets.md` | Hazardous Chemicals in Carpets | Subject-fit review, then canonical hero |
| `wiki/sources/allwood2024-cpsc-childrens-product-lead-recalls.md` | Recently Recalled Children's Products Due to Lead Hazards | Subject-fit review, then canonical hero |

## Batch 51: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/almeida2022-brazil-infant-formula-toxic-metals.md` | Toxic Metals and Metalloids in Infant Formulas Marketed in Brazil, and Child Health Risks According to the Target Hazard Quotients and Target Cancer Risk | Subject-fit review, then canonical hero |
| `wiki/sources/almela2002-algae-food-arsenic-metals.md` | Heavy Metal, Total Arsenic, and Inorganic Arsenic Contents of Algae Food Products | Subject-fit review, then canonical hero |
| `wiki/sources/almugren2023-talcum-baby-powder-metals.md` | The presence of NORMs and toxic heavy metals in talcum baby powder | Subject-fit review, then canonical hero |
| `wiki/sources/almukainzi2022-saudi-topical-cosmetics-icpms.md` | Quality and safety investigation of commonly used topical cosmetic preparations | Subject-fit review, then canonical hero |
| `wiki/sources/alrajhi2014-canned-food-chicken-stock-metals.md` | Determination the concentration of some metals in imported canned food and chicken stock | Subject-fit review, then canonical hero |
| `wiki/sources/alrajhi2020-riyadh-edible-oils-trace-metals.md` | Concentration of Trace Metals in Some Major Edible Oils of Riyadh | Subject-fit review, then canonical hero |
| `wiki/sources/alrajhi2021-imported-cookware-metal-release.md` | Investigation of metals released from imported cookware collected from a local market in Riyadh, Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/alrashdi2024-rice-ias-cd-pb-hg-saudi-arabia.md` | Chemical analysis of toxic elements: total cadmium, lead, mercury, arsenic and inorganic arsenic in local and imported rice consumed in the Kingdom of Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/alsabagh2025-canned-products-baghdad-heavy-metals.md` | Assessment of heavy metal and nitrate contamination in canned products from local markets in Baghdad | Subject-fit review, then canonical hero |
| `wiki/sources/alsayyed2024-heavy-metals-energy-drinks-jordan.md` | Screening for the Presence of Some Heavy Metals, Total Soluble Solids and Caffeine Contents in Some Energy Drinks Sold in Jordanian Market | Subject-fit review, then canonical hero |
| `wiki/sources/alsulaiti2023-qatar-fish-mehg.md` | Health risk assessment of methyl mercury from fish consumption in a sample of adult Qatari residents | Subject-fit review, then canonical hero |
| `wiki/sources/altalib2025-frozen-meat-libya.md` | Estimation of heavy metal concentrations in imported frozen meat sold in the Libyan market | Subject-fit review, then canonical hero |
| `wiki/sources/althobiti2021-wheat-miswak-bioaccessible-lead.md` | An Isotopic Study of Bio-accessible Lead in Wheat, Miswak Toothbrush and Miswak Fruit Using the Continuous On-line Leaching Method with Inductively Coupled Plasma Mass Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/altmaier2021-cannabis-big-four-metals.md` | The Big Four Heavy Metals in Cannabis: Sample Preparation and Analysis via ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/altunay2023-cadmium-food-turkey.md` | Ultra-Sensitive Determination of Cadmium in Food and Water by Flame-AAS after a New Polyvinyl Benzyl Xanthate as an Adsorbent Based Vortex Assisted Dispersive Solid-Phase Microextraction: Multivariate Optimization | Subject-fit review, then canonical hero |
| `wiki/sources/alyasiri2024-infant-formula-heavy-metals.md` | Detection of Aflatoxin M1 and Several Heavy Metals in Medical Infant Milk Formula Sold in Iraqi Markets | Subject-fit review, then canonical hero |
| `wiki/sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn.md` | Environmental exposure assessment of cadmium, lead, copper and zinc in different Palestinian canned foods | Subject-fit review, then canonical hero |
| `wiki/sources/alzagtat2016-fruit-nectars-libya-heavy-metals.md` | Conformity of Fruit Nectar Samples to Libyan Specification Standards | Subject-fit review, then canonical hero |
| `wiki/sources/amadi-2022-dietary-interventions-asd-systematic-review.md` | Dietary interventions for autism spectrum disorder: An updated systematic review of human studies | Subject-fit review, then canonical hero |
| `wiki/sources/amarh2023-ghana-infant-food-heavy-metals.md` | Health risk assessment of some selected heavy metals in infant food sold in Wa, Ghana | Subject-fit review, then canonical hero |
| `wiki/sources/amer2019-egyptian-fruits-heavy-metals.md` | Exposure assessment of heavy metal residues in some Egyptian fruits | Subject-fit review, then canonical hero |
| `wiki/sources/ametepey2018-ghana-vegetables-heavy-metals.md` | Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana | Subject-fit review, then canonical hero |
| `wiki/sources/amjad2021-lahore-chocolates-metals.md` | Determination of Heavy Metals in Locally Available Chocolates in Lahore Region | Subject-fit review, then canonical hero |
| `wiki/sources/ammar2023-element-migration-aluminum-cookware.md` | Investigation of Element Migration from Aluminum Cooking Pots Using ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/ammerman1977-mineral-supplements-contaminants.md` | Contaminating elements in mineral supplements and their potential toxicity: A review | Subject-fit review, then canonical hero |

## Batch 52: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/amodio-cocchieri2000-farmed-fish-shellfish-alkyltins.md` | Alkyltins in farmed fish and shellfish | Subject-fit review, then canonical hero |
| `wiki/sources/analysis2018-peer-review-vegan-day-care.md` | Peer Review \| Vegan Day Care | Subject-fit review, then canonical hero |
| `wiki/sources/anastario2025-hass-avocado-metal-profiling-icpms-pxrf.md` | Metal profiling of Hass avocados: a cross-sectional study using ICP-MS and pXRF | Subject-fit review, then canonical hero |
| `wiki/sources/anderson2002-uk-us-diaper-voc-emissions-mice.md` | Toxic Emissions from British and American Brands of Disposable Diapers | Subject-fit review, then canonical hero |
| `wiki/sources/andrade2023-cow-milk-soy-metals.md` | Metals in Cow Milk and Soy Beverages: Is There a Concern? | Subject-fit review, then canonical hero |
| `wiki/sources/angelon-gaetz2018-lead-spices-north-carolina.md` | Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels — North Carolina, 2011–2018 | Subject-fit review, then canonical hero |
| `wiki/sources/anselm2022-artificial-sweat-ewaste-soil-bioaccess.md` | Effects of Artificial Sweat Formulation and Extraction Temperature on Estimation of the Dermal Bioaccessibility of Potentially Toxic Elements in a Contaminated Soil from an E-Waste Recycling Site | Subject-fit review, then canonical hero |
| `wiki/sources/anses2019-baby-diaper-safety-france.md` | Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the safety of baby diapers (revised opinion, Request No 2017-SA-0019) | Subject-fit review, then canonical hero |
| `wiki/sources/anses2026-tds3-metals-france.md` | Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the results of the Third French Total Diet Study (TDS3) - Acrylamide, aluminium, silver, cadmium, mercury and lead | Subject-fit review, then canonical hero |
| `wiki/sources/antenozio2021-pteris-vittata-arsenic-rhizosphere.md` | Phytoextraction efficiency of Pteris vittata grown on a naturally As-rich soil and characterization of As-resistant rhizosphere bacteria | Subject-fit review, then canonical hero |
| `wiki/sources/anvisa2022-rdc-628-cosmetic-colorants.md` | ANVISA RDC No. 628/2022: cosmetic colorant list and organic-colorant metal impurities | Subject-fit review, then canonical hero |
| `wiki/sources/anvisa2022-rdc-722-contaminants.md` | Resolução RDC Nº 722, de 1º de julho de 2022 | Subject-fit review, then canonical hero |
| `wiki/sources/anwar2021-canned-tuna-aceh-metals.md` | Quality of Canned Tuna from Aceh Water Sterilized Using a Pressure Canner | Subject-fit review, then canonical hero |
| `wiki/sources/apdraim2023-vermiculite-quail-meat.md` | Effect of vermiculite feed additive on the chemical, mineral, and amino acid compositions of quail meat | Subject-fit review, then canonical hero |
| `wiki/sources/api2017-fragrance-human-skin-sensitization-potency.md` | Fragrances Categorized According to Their Relative Human Skin Sensitization Potency | Subject-fit review, then canonical hero |
| `wiki/sources/apilux2023-rayong-tropical-fruits-metals.md` | Determination of Heavy Metal Residues in Tropical Fruits near Industrial Estates in Rayong Province, Thailand: A Risk Assessment Study | Subject-fit review, then canonical hero |
| `wiki/sources/aquinohancco2026-lima-canned-tuna-fish-metals.md` | Determination Of Mercury, Cadmium, And Lead Levels In Canned Tuna And Fish Marketed In Central Lima, Peru, Using Atomic Absorption Spectrophotometry: Implications For Public Health | Subject-fit review, then canonical hero |
| `wiki/sources/arain2026-groundwater-arsenic-dadu-pakistan.md` | Multivariate Assessment of Groundwater Hydrochemistry for Drinking and Irrigation in the Flood-Prone District Dadu, Sindh, Pakistan | Subject-fit review, then canonical hero |
| `wiki/sources/aranzazu2023-intoxication-in-a-a-n-amercury.md` | Intoxication in a A N Amercury | Subject-fit review, then canonical hero |
| `wiki/sources/archer2005-tampon-dioxins-furans.md` | Dioxin and Furan Levels Found in Tampons | Subject-fit review, then canonical hero |
| `wiki/sources/arellano2023-dairy-products-arsenic-argentina.md` | Arsenic risk assessment through dairy products ingestion | Subject-fit review, then canonical hero |
| `wiki/sources/arevalo-gardini2017-peru-cacao-regional-metals.md` | Heavy metal accumulation in leaves and beans of cacao (Theobroma cacao L.) in major cacao growing regions in Peru | Subject-fit review, then canonical hero |
| `wiki/sources/armand2026-lettuce-cabbage-behbahan.md` | Probabilistic carcinogenic and health risk assessment of heavy metals in lettuce and cabbage from Behbahan, Iran, using Monte Carlo simulation | Subject-fit review, then canonical hero |
| `wiki/sources/arnold2024-arsenic-maine-wells-news.md` | Education Fosters Action: Community Science Advances Arsenic Abatement in Maine and New Hampshire | Subject-fit review, then canonical hero |
| `wiki/sources/arshad2020-heavy-metals-cosmetic-products-pakistan.md` | Evaluation of heavy metals in cosmetic products and their health risk assessment | Subject-fit review, then canonical hero |

## Batch 53: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/article2019-distinct-size-dependent-properties-led-to-the-development.md` | distinct size-dependent properties led to the development of | Subject-fit review, then canonical hero |
| `wiki/sources/article2022-alleviation-of-phytotoxic-effect-of-heavy-metals-on.md` | Alleviation of phytotoxic effect of heavy metals on wheat by multiple heavy | Subject-fit review, then canonical hero |
| `wiki/sources/article2023-assessment-of-heavy-metals-accumulation-and-translocation-potential.md` | Assessment of Heavy Metals Accumulation and Translocation Potential | Subject-fit review, then canonical hero |
| `wiki/sources/article2023-review-of-analytical-techniques-for-arsenic-detection.md` | Review of analytical techniques for arsenic detection | Subject-fit review, then canonical hero |
| `wiki/sources/article2026-packaging-for-whole-milk-powder-and-infant.md` | Packaging for Whole Milk Powder and Infant | Subject-fit review, then canonical hero |
| `wiki/sources/asaditouranlou2025-bread-iran-montecarlo.md` | Health risk assessment of potentially toxic elements in bread from Iranian markets using Monte Carlo simulation | Subject-fit review, then canonical hero |
| `wiki/sources/asaditouranlou2025-bread-wheat-mashhad.md` | Human health risk assessment of arsenic and potentially toxic elements exposure in bread and wheat flour in Northeast Iran | Subject-fit review, then canonical hero |
| `wiki/sources/asean2017-health-supplement-contaminant-limits.md` | ASEAN Guidelines on Limits of Contaminants for Health Supplements, Version 2.0 | Subject-fit review, then canonical hero |
| `wiki/sources/asean2019-cosmetics-contaminants-guideline-v3.md` | ASEAN Guidelines on Limits of Contaminants for Cosmetics, Release Version 3.0 | Subject-fit review, then canonical hero |
| `wiki/sources/asemoloye2026-quantifying-arsenic-binding.md` | Quantifying arsenic-binding | Subject-fit review, then canonical hero |
| `wiki/sources/asensio2023-madrid-mushrooms-mercury.md` | Study of Heavy Metals and Methyl-Mercury in Fungi in Markets of Madrid | Subject-fit review, then canonical hero |
| `wiki/sources/asgher2023-selenium-heavy-metal-stress-plants.md` | Appraisal of Functions and Role of Selenium in Heavy Metal Stress Adaptation in Plants | Subject-fit review, then canonical hero |
| `wiki/sources/ash2016-shredded-card-soil-washing.md` | Sustainable Soil Washing: Shredded Card Filtration of Potentially Toxic Elements after Leaching from Soil Using Organic Acid Solutions | Subject-fit review, then canonical hero |
| `wiki/sources/ashley-martin2022-ias-biomonitoring-pregnancy.md` | Biomonitoring of inorganic arsenic species in pregnancy | Subject-fit review, then canonical hero |
| `wiki/sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia.md` | Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population | Subject-fit review, then canonical hero |
| `wiki/sources/asmoay2025-groundwater-wadi-ranyah-saudi-arabia.md` | Geochemical characterization and health risk assessment of groundwater in Wadi Ranyah, Saudi Arabia, using statistical and GIS-based models | Subject-fit review, then canonical hero |
| `wiki/sources/asni2020-pb-seaweed-bantaeng.md` | Pb heavy metal distribution patterns in seaweed (Kappaphycus alvarezii) cultivation locations by season in Bantaeng Waters, South Sulawesi | Subject-fit review, then canonical hero |
| `wiki/sources/assefa-kohler-2020-intestinal-microbiome-metal-toxicity.md` | Intestinal Microbiome and Metal Toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/assessment2011-current-field-work-environmental-toxicology.md` | Current field work: Environmental toxicology | Subject-fit review, then canonical hero |
| `wiki/sources/astolfi2021-italy-powdered-infant-formula-elements.md` | Determination of 40 Elements in Powdered Infant Formulas and Related Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/asyousow2022-expert-investigation-cocoa-chocolate-products.md` | Expert Investigation Related to Cocoa and Chocolate Products: Final Report | Subject-fit review, then canonical hero |
| `wiki/sources/ataee2016-iran-cereals-pb-cd.md` | Application of microwave-assisted dispersive liquid–liquid microextraction and graphite furnace atomic absorption spectrometry for ultra-trace determination of lead and cadmium in cereals and agricultural products | Subject-fit review, then canonical hero |
| `wiki/sources/atanasov2024-sers-ammonium-nitrate-aln.md` | Surface-Enhanced Raman Spectroscopy of Ammonium Nitrate Using Al Structures, Fabricated by Laser Processing of AlN Ceramic | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr-aluminum-toxprofile-2008.md` | Toxicological Profile for Aluminum | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr-arsenic-toxprofile-2007.md` | Toxicological Profile for Arsenic | Subject-fit review, then canonical hero |

## Batch 54: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/atsdr-cadmium-toxprofile-2012.md` | Toxicological Profile for Cadmium | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr-lead-toxprofile-2020.md` | Toxicological Profile for Lead | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr-mercury-toxprofile-2024.md` | Toxicological Profile for Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr-nickel-toxprofile-2024.md` | Toxicological Profile for Nickel | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr2005-tin-toxfaqs.md` | ToxFAQs for Tin and Tin Compounds (CAS # 7440-31-5) | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr2005-tin-toxicological-profile.md` | Toxicological Profile for Tin and Tin Compounds | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr2019-toxprofile-antimony.md` | Toxicological Profile for Antimony and Compounds | Subject-fit review, then canonical hero |
| `wiki/sources/atsdr2023-soil-dermal-absorption-guidance.md` | Exposure Dose Guidance for Soil/Sediment Dermal Absorption (Version 3) | Subject-fit review, then canonical hero |
| `wiki/sources/attard2022-heavy-metals-cosmetics-review.md` | Heavy Metals in Cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/augustine2020-lafia-irrigated-farmland-soil.md` | Determination of the Levels of Lead and Cobalt from Soils of an Irrigated Farmland in Lafia Nasarawa State-Nigeria Using Two Different Methods of Digestion | Subject-fit review, then canonical hero |
| `wiki/sources/aurisano2022-mouthing-exposure-childrens-products.md` | Estimating mouthing exposure to chemicals in children's products | Subject-fit review, then canonical hero |
| `wiki/sources/australia2026-customs-prohibited-imports-regulations.md` | Customs (Prohibited Imports) Regulations 1956, Compilation No. 147, compilation date 13 July 2026 | Subject-fit review, then canonical hero |
| `wiki/sources/authors1981-arsenic-uptake-toxicity-detoxification-and.md` | Arsenic Uptake, Toxicity, Detoxification, and | Subject-fit review, then canonical hero |
| `wiki/sources/authors1982-total-mercury-concentrations-in-muscles.md` | Total mercury concentrations in muscles | Subject-fit review, then canonical hero |
| `wiki/sources/authors1986-adults-and-potential-modification-by-prenatal-methylmercury-exposure.md` | Adults and Potential Modification by Prenatal Methylmercury Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors1988-effects-of-methylmercury-toxicity-on-fetal-brain-development.md` | Effects of methylmercury toxicity on fetal brain development: review of | Subject-fit review, then canonical hero |
| `wiki/sources/authors1990-mercury-scenario-in-fish-from-the-amazon-basin.md` | Mercury Scenario in Fish from the Amazon Basin: Exploring the | Subject-fit review, then canonical hero |
| `wiki/sources/authors1990-variability-of-mercury-concentrations-across-species-brand.md` | Variability of Mercury Concentrations Across Species, Brand, | Subject-fit review, then canonical hero |
| `wiki/sources/authors1992-through-the-eye-retinal-changes-of-prenatal-mercury.md` | Through the Eye: Retinal Changes of Prenatal Mercury Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors1993-of-lead-exposure-in-utero-and-in-early.md` | of lead exposure in utero and in early childhood. Blood lead levels in the children ranged from 10 to showed that 6% of children 1–4 years old had | Subject-fit review, then canonical hero |
| `wiki/sources/authors1997-an-alyson-that-appeared-to-be-confined-to.md` | an “alyson” that appeared to be confined to serpentine soils, | Subject-fit review, then canonical hero |
| `wiki/sources/authors1999-potentially-toxic-metals-ptms.md` | Potentially Toxic Metals (PTMs) | Subject-fit review, then canonical hero |
| `wiki/sources/authors2000-4-fisheries-administration-phnom-penh-120101-cambodia-chhounchamnan.md` | 4 Fisheries Administration, Phnom Penh 120101, Cambodia; chhounchamnan@gmail.com (C.C.); | Subject-fit review, then canonical hero |
| `wiki/sources/authors2000-bioaccumulation-and-biomagnification-of-mercury-along-the.md` | Bioaccumulation and Biomagnification of Mercury Along the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2000-human-exposure-to-toxic-elements-through-meat-consumption.md` | Human Exposure to Toxic Elements Through Meat Consumption | Subject-fit review, then canonical hero |

## Batch 55: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2000-interplay-between-vitamin-d-levels-and-heavy-metals.md` | Interplay Between Vitamin D Levels and Heavy Metals Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors2000-open-acute-toxicity-of-mercury-in.md` | OPEN Acute toxicity of mercury in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2002-estimating-inorganic-arsenic-exposure-from-u-s-rice.md` | Estimating Inorganic Arsenic Exposure from U.S. Rice and Total Water Intakes | Subject-fit review, then canonical hero |
| `wiki/sources/authors2002-ettinger-adrienne-s-robert-l-bornschein-mark-farfel.md` | Ettinger, Adrienne S., Robert L. Bornschein, Mark Farfel, Carla Campbell, N. Beth Ragan, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2002-of-food-sources-however-especially-in-developed-countries.md` | of food sources. However, especially in developed countries, hu- potential for toxic material components to migrate into food and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2003-a-review-of-the-biochemistry-of-heavy-metal.md` | A review of the biochemistry of heavy metal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2005-mercury-and-total-mercury-in-boreal-upland-forests.md` | Mercury and Total Mercury in Boreal Upland Forests | Subject-fit review, then canonical hero |
| `wiki/sources/authors2005-open-recreational-fishing-downstream.md` | OPEN Recreational fishing downstream | Subject-fit review, then canonical hero |
| `wiki/sources/authors2005-pathway-of-human-as3mt-arsenic-methylation.md` | Pathway of Human AS3MT Arsenic Methylation | Subject-fit review, then canonical hero |
| `wiki/sources/authors2006-e-mail-address-zfs-cau-edu-cn-f.md` | E-mail address: zfs@cau.edu.cn (F.S. Zhang). be expected to lead to nitrate pollution of groundwater. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2006-inequalities-in-public-water-arsenic-concentrations-in-counties.md` | Inequalities in Public Water Arsenic Concentrations in Counties and Community | Subject-fit review, then canonical hero |
| `wiki/sources/authors2006-population-most-notably-children-steps-should-be-taken.md` | population, most notably children. Steps should be taken to mitigate the risk of exposure to lead- were used for the present study. Planning | Subject-fit review, then canonical hero |
| `wiki/sources/authors2006-toxic-metal-implications-on-agricultural-soils-plants.md` | Toxic Metal Implications on Agricultural Soils, Plants, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2007-nutritional-benefits-and-health-risks-of-seafood-consumption.md` | Nutritional Benefits and Health Risks of Seafood Consumption | Subject-fit review, then canonical hero |
| `wiki/sources/authors2007-or-posting-on-open-internet-sites-your-personal.md` | or posting on open internet sites, your personal or institution’s | Subject-fit review, then canonical hero |
| `wiki/sources/authors2007-weathers-naturally-human-exposure-to-acq-might-occur.md` | weathers naturally, human exposure to ACQ might occur through dermal contact or incidental | Subject-fit review, then canonical hero |
| `wiki/sources/authors2009-cd-cr-cu-mn-y-pb-en-diferentes.md` | (Cd, Cr, Cu, Mn, y Pb) en diferentes tipos de aceites vegeta- high levels of lead. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2009-exposure-concentration-varies-among-species-and-metals.md` | exposure concentration varies among species and metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2009-for-humans-nevertheless-low-photostability-and-putative-toxicity.md` | for humans. Nevertheless, low photostability and putative toxicity for humans and environment | Subject-fit review, then canonical hero |
| `wiki/sources/authors2009-hair-mercury-levels-in-amazonian-populations-spatial-distribution.md` | Hair mercury levels in Amazonian populations: spatial distribution | Subject-fit review, then canonical hero |
| `wiki/sources/authors2009-methylmercury-burdens-of.md` | methylmercury burdens of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2009-unit-of-integrative-toxicology-institute-of-environmental-medicine.md` | Unit of Integrative Toxicology, Institute of Environmental Medicine, Karolinska Institutet, Stockholm, Sweden | Subject-fit review, then canonical hero |
| `wiki/sources/authors2010-3agency-for-toxic-substances-and-disease-registry-atlanta.md` | 3Agency for Toxic Substances and Disease Registry, Atlanta, Georgia, USA; 4Guy’s and St Thomas’ NHS Foundation Trust and King’s | Subject-fit review, then canonical hero |
| `wiki/sources/authors2010-ingest-the-heavy-metals-volume-is-significantly-reduced.md` | ingest the heavy metals. Volume is significantly reduced from 1 m of wet sludge (80% moisture) to 0.5 m of vermicompost (30% | Subject-fit review, then canonical hero |
| `wiki/sources/authors2010-ship-between-energy-inputs-and-yields-is-not.md` | ship between energy inputs and yields is not linear. Low-energy inputs can lead to lower yields and | Subject-fit review, then canonical hero |

## Batch 56: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2010-the-case-for-visual-analytics-of-arsenic-concentrations.md` | The Case for Visual Analytics of Arsenic Concentrations in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-a-quantitative-synthesis-of-mercury-in-commercial-seafood.md` | A Quantitative Synthesis of Mercury in Commercial Seafood and Implications | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-cx-using-the-following-formula-qs-1-4.md` | (CX), using the following formula: qS ¼ | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-income-levels-and-continents.md` | Income Levels and Continents | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-investing-much-to-the-agricultural-sector-is-necessary.md` | investing much to the agricultural sector is necessary in order to produce more food to feed the world. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-methylmercury-and-brain.md` | Methylmercury and Brain | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-part-of-the-study-begins-by-describing-its.md` | part of the study begins by describing its research methods consisting of research interviews, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-role-of-mercury-toxicity-in-hypertension-cardiovascular-disease.md` | Role of Mercury Toxicity in Hypertension, Cardiovascular Disease, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2011-the-stability-of-fish-populations-how-changes-in.md` | The stability of fish populations: how changes in the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2012-arsenic-binding-to-proteins.md` | Arsenic Binding to Proteins | Subject-fit review, then canonical hero |
| `wiki/sources/authors2012-evaluations-and-additional-literature-the-panel-considered-the.md` | evaluations and additional literature. The Panel considered the available toxicological data too limited to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2012-methylmercury-risk-assessment-based-on-european-human.md` | Methylmercury Risk Assessment Based on European Human | Subject-fit review, then canonical hero |
| `wiki/sources/authors2012-physiological-changes-that-relate-to-the-exposure-of.md` | physiological changes that relate to the exposure of an organism to a chemical. Accordingly, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2012-tinnitus-is-a-common-symptom-among-adults-in.md` | Tinnitus is a common symptom among adults in the United States. Increasing evidence indicates that prolonged exposure to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2012-transfer-factor-of-heavy-metals-from-agricultural-soil.md` | Transfer Factor of Heavy Metals from Agricultural Soil to Agricultural Products | Subject-fit review, then canonical hero |
| `wiki/sources/authors2013-a-study-on-total-mercury-and-methylmercury-in.md` | A Study on Total Mercury and Methylmercury in Commercial Tuna, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2013-abiotic-constraints-such-as-salinity-drought-and-toxic.md` | abiotic constraints such as salinity, drought and toxic cation of S. portulacastrum in the arid and semiarid | Subject-fit review, then canonical hero |
| `wiki/sources/authors2013-cadmium-induced-pathologies-where-is-the-oxidative-balance.md` | Cadmium-Induced Pathologies: Where Is the Oxidative Balance | Subject-fit review, then canonical hero |
| `wiki/sources/authors2013-estimates-of-dietary-exposure-to-bisphenol-a-bpa.md` | Estimates of dietary exposure to bisphenol A (BPA) from light metal packaging using food | Subject-fit review, then canonical hero |
| `wiki/sources/authors2013-giuseppino-fortunato-samuel-wunderli.md` | Giuseppino Fortunato Samuel Wunderli | Subject-fit review, then canonical hero |
| `wiki/sources/authors2013-hexavalent-and-total-chromium-at-low-reporting-concentrations.md` | Hexavalent and Total Chromium at Low Reporting Concentrations | Subject-fit review, then canonical hero |
| `wiki/sources/authors2013-of-major-pollutants-including-heavy-metals-microplastics-persistent.md` | of major pollutants, including heavy metals, microplastics, persistent organic pollutants, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2014-department-of-zoology-fisheries-hydrobiology-and-apiculture-faculty.md` | Department of Zoology, Fisheries, Hydrobiology and Apiculture, Faculty of Agronomy, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2014-determination-of-pb-lead-cd-cadmium-cr.md` | Determination of Pb (Lead), Cd (Cadmium), Cr | Subject-fit review, then canonical hero |
| `wiki/sources/authors2014-fly-ash-landfills-under-continuous.md` | fly ash landfills under continuous | Subject-fit review, then canonical hero |

## Batch 57: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2014-getting-polluted-in-a-number-of-ways-there.md` | getting polluted in a number of ways. There is urgency in controlling the soil pollution in order | Subject-fit review, then canonical hero |
| `wiki/sources/authors2014-journal-of-exposure-science-and-environmental-epidemiology-2014.md` | Journal of Exposure Science and Environmental Epidemiology (2014) 24, 185–191 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2014-mercury-speciation-in-seafood-a-systematic-review.md` | Mercury Speciation in Seafood: A Systematic Review | Subject-fit review, then canonical hero |
| `wiki/sources/authors2014-potential-health-effects-associated-with-dermal-exposure-to.md` | Potential Health Effects Associated with Dermal Exposure to Occupational | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-adverse-effects-of-nanoparticles-to-infants-and-children.md` | Adverse effects of nanoparticles to infants and children | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-and-trade-repercussions-regular-economical-and-straightforward-feed.md` | and trade repercussions. Regular, economical and straightforward feed testing is critical to reach a | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-assessment-of-heavy-metals-in-indoor.md` | Assessment of Heavy Metals in Indoor | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-estimation-of-heavy-metal-levels-in-the.md` | Estimation of Heavy Metal Levels in the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-heavy-metal-tolerance-in-plants.md` | Heavy Metal Tolerance in Plants: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-hexavalent-chromium-and-isocyanate-exposures-during-military.md` | Hexavalent Chromium and Isocyanate Exposures during Military | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-immediate-screening-of-lead-exposure-in-the.md` | Immediate screening of lead exposure in the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-increasingly-shows-that-chronic-exposure-to-a-broad.md` | increasingly shows that chronic exposure to a broad range of toxins—including persistent | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-made-available-by-hasselt-university-library-in-https.md` | Made available by Hasselt University Library in https://documentserver.uhasselt.be | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-methylmercury-toxicity.md` | methylmercury toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-percentage-of-fat-that-contributed-to-each-food.md` | percentage of fat that contributed to each food group: factor 1 (meat and fish versus legume and cereal pattern), | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-reclaimed-water-through-field-trials-on-the-content.md` | reclaimed water through field trials on the content and distribution of heavy metals in both tomatoes | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-summary-2012-martins-et-al-2014-consequently-there.md` | Summary 2012; Martins et al., 2014). Consequently, there remains intense interest | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-the-increase-in-the-possible-exposure-pathways-for.md` | the increase in the possible exposure pathways for humans. ly monitored in the environment, though having the potential | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-topoisomerases-by-organomercury.md` | Topoisomerases by Organomercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-toxic-trace-elements-in-meat-and-meat-products.md` | Toxic Trace Elements in Meat and Meat Products Across Asia: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-variability-in-levels-of-heavy-metals-in-water.md` | Variability in Levels of Heavy Metals in Water and Fish | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-ventional-solid-storage-turned-composting-forced-aerated-composting.md` | ventional solid storage, turned composting, forced aerated composting, covering, compaction, addition/substitution | Subject-fit review, then canonical hero |
| `wiki/sources/authors2015-yongjie-wang1-fei-dang2-r-douglas-evans1-3.md` | Yongjie Wang1,*, Fei Dang2,*, R. Douglas Evans1,3, Huan Zhong1,4, Jiating Zhao5 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-a-comparative-study-of-the-content-of-heavy.md` | A comparative study of the content of heavy metals in oils: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-a-review-of-mercury-bioavailability-in-humans.md` | A Review of Mercury Bioavailability in Humans | Subject-fit review, then canonical hero |

## Batch 58: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2016-and-evaluates-the-resulting-threats-to-food-intake.md` | and evaluates the resulting threats to food intake and public health in Bangladesh by | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-australia-or-argentina-one-exception-is-the-argan.md` | Australia or Argentina. One exception is the argan tree, which is well adapted to the extremely dry | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-comparison-of-lead-and-tin-concentrations-in-air.md` | Comparison of Lead and Tin Concentrations in Air at a Solder | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-concentration-of-mercury-in-muscles.md` | Concentration of mercury in muscles | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-edited-by-i-d-brown-mcmaster-university-the.md` | Edited by I. D. Brown, McMaster University, The title compound, tetrasodium hepta(cobalt/aluminium) hexa(arsenate/ | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-formulation-and-nutritional-evaluation-of-a-healthy-vegetable.md` | Formulation and nutritional evaluation of a healthy vegetable | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-inhibitory-effects-of-neurotoxic-metals-and-thimerosal.md` | Inhibitory Effects of Neurotoxic Metals and Thimerosal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-nm-l-shahidehnia-j-environ-anal-toxicol-2016.md` | nm l Shahidehnia, J Environ Anal Toxicol 2016, 6:4 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-residual-metal-impurities-in-carbon-nanotubes-cnts-provide.md` | Residual metal impurities in carbon nanotubes (CNTs) provide a means to distinguish CNT from non-CNT sources of elemental | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-tance-of-vegetables-the-first-offering-infants-a.md` | tance of vegetables. The first, offering infants a high variety of vegetables at weaning, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-total-arsenic-cadmium-and-lead-determination-in.md` | Total Arsenic, Cadmium, and Lead Determination in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-toxins-toxicants-we-attempted-to-collect-every-newly.md` | toxins/toxicants. We attempted to collect every newly diagnosed (incident) ALS patient in Ohio during a two-year | Subject-fit review, then canonical hero |
| `wiki/sources/authors2016-who-strategy-plos-negl-trop-dis-10-6.md` | WHO Strategy? PLoS Negl Trop Dis 10(6): mosquito and of dengue [3]. Unfortunately, for a variety of reasons—including insecticide | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-8-address-1school-of-veterinary-medicine-and-science.md` | 8 Address: 1School of Veterinary Medicine and Science, University of Nottingham, Sutton Bonington | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-arsenic-residues-in-broiler-meat-and-excreta-at.md` | Arsenic residues in broiler meat and excreta at arsenic prone areas | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-assessment-of-human-dietary-exposure-to-arsenic-through.md` | Assessment of human dietary exposure to arsenic through rice | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-determination-of-glyphosate-in-white-and-brown-rice.md` | Determination of Glyphosate in White and Brown Rice with | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-escherichia-coli-tn21-mere-methylmercury-transport.md` | Escherichia coli Tn21 MerE methylmercury transport | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-exposure-to-methylmercury.md` | Exposure to Methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-exposures-to-harmful-metals.md` | exposures to harmful metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-groth-consulting-services-455-beacon-street-apt-6.md` | Groth Consulting Services, 455 Beacon Street, Apt. 6, Boston, MA 02115, USA | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-heavy-metals-levels-in-medicinal-plants-have-attracted.md` | Heavy metals levels in medicinal plants have attracted worldwide interest in recent years because these ele- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-int-j-curr-microbiol-app-sci-2017-6.md` | Int.J.Curr.Microbiol.App.Sci (2017) 6(7): 168-181 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-journal-of-exposure-science-and-environmental-epidemiology-2017.md` | Journal of Exposure Science and Environmental Epidemiology (2017) 27, 47–55 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-levels-dietary-intake-and-health-risk-of-potentially.md` | Levels, dietary intake, and health risk of potentially toxic metals | Subject-fit review, then canonical hero |

## Batch 59: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2017-mercury-removal-hot-paper.md` | & Mercury Removal \| Hot Paper \| | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-methylmercury-uptake-into-bewo-cells-depends-on.md` | Methylmercury Uptake into BeWo Cells Depends on | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-neutralization-of-arsenic-acid-with-sodium-hydroxide-in.md` | neutralization of arsenic acid with sodium hydroxide in aqueous solution. The | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-objective-public-health-messages-to-reduce-hg-exposure.md` | Objective: Public health messages to reduce Hg exposure for pregnant women | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-occupational-mercury-exposure-at-a-fluorescent-lamp-recycling.md` | Occupational Mercury Exposure at a Fluorescent Lamp Recycling Facility — | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-risk-assessment-and-implication-of-human-exposure.md` | Risk Assessment and Implication of Human Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-risk-assessment-for-children-exposed-to-arsenic.md` | Risk Assessment for Children Exposed to Arsenic on Baseball Fields with Contaminated Fill Material | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-secondary-sex-ratio-in-relation-to-exposures-to.md` | Secondary sex ratio in relation to exposures to polychlorinated biphenyls, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-their-exposure-assessment-sampling-strategies-in-a-wide.md` | their exposure assessment sampling strategies in a wide range of workplaces. This article discusses | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-through-complex-environmentally-mediated-pathways-the-exposure-for.md` | through complex, environmentally mediated pathways. The exposure. For example, complementary foods for young | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-with-modern-day-urbanization-and-industrialization-heavy-metal.md` | With modern day urbanization and industrialization, heavy metal (HM) contamination has | Subject-fit review, then canonical hero |
| `wiki/sources/authors2017-zinc-calcium-protein-lead-mercury-and-the-sensorics.md` | Zinc, calcium, protein, lead, mercury, and the sensorics quality of cireng | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-affording-protection-against-methylmercury-toxicity-little-is-known.md` | affording protection against methylmercury toxicity, little is known regarding the presence of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-and-conflicting-at-worst-the-objective-of-this.md` | and conflicting at worst. The objective of this review is to present current, evidence-based | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-and-retention-of-dha-and-epa-in-selected.md` | and retention of DHA and EPA in selected fish fillets | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-ayurveda-is-the-ancient-indian-system-of-health.md` | Ayurveda is the ancient Indian system of health-care and longevity. There is a long history of use of herbal plants and its formulations for the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-by-the-accumulation-of-various-heavy-metals-24.md` | by the accumulation of various heavy metals [24–26], polycyclic aromatic hydro- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-cooperation-i-received-from-very-distinguished-professors-lecturers.md` | cooperation I received from very distinguished Professors, Lecturers and other contributors who took time off | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-davidson-christine-m-and-mertz-kraus-regina-2018.md` | Davidson, Christine M. and Mertz-Kraus, Regina (2018) Atomic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-exposure-to-inorganic-mercury.md` | Exposure to Inorganic Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-founder-federal-scientific-center.md` | Founder: Federal Scientific Center | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-in-adult-dogs-does-feeding-a-raw-food.md` | In Adult Dogs, Does Feeding a Raw Food Diet Increase | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-influence-of-heavy-metals-on-nematode-community-structure.md` | Inﬂuence of heavy metals on nematode community structure in deteriorated T | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-information-on-elements-such-as-potentially-toxic-trace.md` | Information on elements, such as potentially toxic trace elements, and on concentrations of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-lycopene-phytoene-carotenoids-are-synthesized-by-all-plants.md` | lycopene, phytoene). Carotenoids are synthesized by all plants Unfortunately, due to their required emulsiﬁcation in form of | Subject-fit review, then canonical hero |

## Batch 60: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2018-m-krause-et-al-4-hbp-exposure-during.md` | M Krause et al. 4-HBP exposure during 7:2 334–346 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-methods-the-published-epidemiological-literature-investigating-environ.md` | Methods: The published epidemiological literature investigating environmental chemical exposure in Thai | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-minerals-and-heavy-metals-in.md` | minerals and heavy metals in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-nanoparticles-into-tap-water-the-occurrence-and-toxicity.md` | nanoparticles into tap water. The occurrence and toxicity of incidental nanoparticles, rather than ENPs, should therefore be the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-open-arsenic-trioxide-allosterically.md` | OPEN Arsenic trioxide allosterically | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-oxidative-stress-in-methylmercury-induced.md` | Oxidative Stress in Methylmercury-Induced | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-published-27-july-2018.md` | published: 27 July 2018 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-quantification-of-mercury-bioavailability-for-methylation-using.md` | Quantiﬁcation of Mercury Bioavailability for Methylation Using | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-regarding-pfos-and-pfoa-occurrence-the-final-data.md` | Regarding PFOS and PFOA occurrence, the ﬁnal data set available for dietary exposure assessment | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-review-nutritional-ecology-of-heavy-metals.md` | Review: Nutritional ecology of heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-rsos-royalsocietypublishing-org.md` | rsos.royalsocietypublishing.org | Subject-fit review, then canonical hero |
| `wiki/sources/authors2018-toxic-metals-like-arsenic-cadmium-and-lead-as.md` | toxic metals like arsenic, cadmium and lead; as well as process contaminants such as acrylamide. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-agnese-araja-maris-bertins-gunita-celma-lauma-busa.md` | Agnese Araja * , Maris Bertins , Gunita Celma , Lauma Busa and Arturs Viksna | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-approach-to-speciation-analysis-as-in-previous-years.md` | approach to speciation analysis. As in previous years, As speciation continues to dominate the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-bioaccumulation-of-heavy-metals-in-channa-punctatus-bloch.md` | Bioaccumulation of heavy metals in Channa punctatus (Bloch) in river | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-bioaccumulation-of-heavy-metals-in-some.md` | Bioaccumulation of heavy metals in some | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-bluefin-tuna-thunnus-thynnus-l-muscle.md` | Bluefin Tuna (Thunnus thynnus L.) Muscle | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-catabolism-in-order-to-restore-skin-continuity-within.md` | catabolism in order to restore skin continuity. Within these processes, elements such as metallic ions are involved due to their | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-chelator-in-reversing-methylmercury-toxicity.md` | Chelator in Reversing Methylmercury Toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-christina-oh-1-emily-c-keats-1-and.md` | Christina Oh 1 , Emily C. Keats 1 and Zulfiqar A. Bhutta 1,2, * | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-complex-environmental-exposures-on.md` | complex environmental exposures on | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-cristina-barroso-hoferi-andre-reynaldo-santos-pe-risse.md` | Cristina Barroso HoferI , André Reynaldo Santos PérisséII , Ana Cláudia Santiago de | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-dental-amalgam-is-a-mixture-of-approximately-50.md` | Dental amalgam is a mixture of approximately 50% mercury and varying ratios | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-ecotoxicology-and-environmental-safety-168-2019-45-52.md` | Ecotoxicology and Environmental Safety 168 (2019) 45–52 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-exposure-in-a-free-living-generalist-rodent-apodemus.md` | Exposure in a Free-Living Generalist Rodent, Apodemus | Subject-fit review, then canonical hero |

## Batch 61: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2019-glutathione-alleviates-chromium-stress-in-helianthus-annuus-irrigated.md` | Glutathione Alleviates Chromium Stress in Helianthus annuus Irrigated | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-gradually-getting-close-to-that-of-developed-ones.md` | gradually getting close to that of developed ones, in which AD affects 20% of the paediatric population. Such an increment, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-grown-to-be-blue-antioxidant-properties-and-health.md` | Grown to be Blue—Antioxidant Properties and Health | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-hanan-a-aljamal-1-sonal-care-products-recent.md` | Hanan A Aljamal 1 sonal care products. Recent studies have shown that some of sunscreen formulations may contain | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-infant-skin-care-products.md` | Infant Skin Care Products | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-integrating-environmental-health-and-genomics-research-in.md` | Integrating environmental health and genomics research in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-journal-of-toxicology.md` | Journal of Toxicology | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-lead-chambers-of-installations-reddish-sediment-was-obtained.md` | lead chambers of installations, reddish sediment was obtained. Initially, it was thought that arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-lead-exposure-in-young-children-over-a-5.md` | Lead exposure in young children over a 5-year period from | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-leads-to-different-colors-in-response-to-various.md` | leads to different colors in response to various pH [8]. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-methylmercury-with-child-cognitive-development.md` | Methylmercury With Child Cognitive Development | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-nematotoxic-potential-against-m-incognita-which-can-be.md` | nematotoxic potential against M. incognita which can be recommended to tomato growers | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-occupational-and-nonoccupational-settings-because.md` | occupational and nonoccupational settings. Because | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-or-part-contained-in-the-work-will-not.md` | or part contained in the work will not infringe on the rights of those third parties. The risk of claims resulting from | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-recent-advances-in-hexavalent-chromium-removal.md` | Recent advances in hexavalent chromium removal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-role-of-silicon-in-mitigation-of-heavy-metal.md` | Role of Silicon in Mitigation of Heavy Metal Stresses | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-sergio-a-loza-rosas-2-anamaris-torres-3.md` | Sergio A. Loza-Rosas 2 , Anamaris Torres 3 , Manoj Saxena 2 , Mara Julin 4 and Arthur D. Tinoco 2, * | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-sources-through-catalytic-titration-with-hexavalent-chromium.md` | Sources Through Catalytic Titration with Hexavalent Chromium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-spatial-contamination-and-health-risks-of-heavy-metal.md` | Spatial contamination and health risks of heavy metal(loid)s in surface soils from a petrochemical complex in the north-eastern region of Algeria | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-specialty-section-vmax-of-transport-without-affecting-the.md` | Specialty section: Vmax of transport without affecting the Km for glutamine. Docking of cholesterol into the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-the-soil-quality-1-soil-is-also-contaminated.md` | the soil quality [1]. Soil is also contaminated by heavy metals through various human | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-the-surface-of-bifeo3-nanoparticles-acid-orange-7.md` | the surface of BiFeO3 nanoparticles. Acid orange 7 (AO7) and hexavalent chromium (Cr(VI)) were chosen as the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-total-arsenic-and-arsenic-species-determination-in.md` | Total Arsenic and Arsenic Species Determination in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-toxicology-reports-6-2019-472-481.md` | Bioaccumulation and potential sources of heavy metal contamination in fish species in River Ganga basin: Possible human health risks evaluation | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-transport-of-methylmercury-through-the-epithelial-type-amino.md` | Transport of Methylmercury through the Epithelial Type Amino Acid | Subject-fit review, then canonical hero |

## Batch 62: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2019-u-s-food-drug-administration-national-center-for.md` | U.S. Food & Drug Administration, National Center for Toxicological Research, 3900 NCTR Road, Jefferson, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2019-vascular-dysfunction-induced-by-mercury-exposure.md` | Vascular Dysfunction Induced by Mercury Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-abstract-contact-allergy-sensitisation-and-allergic-contact-dermatitis.md` | Abstract: Contact allergy (sensitisation) and allergic contact dermatitis (ACD) resulting from it have | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-abstract-soil-and-water-contamination-from-heavy-metals.md` | Abstract: Soil and water contamination from heavy metals and metalloids is one of the most discussed | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-alternative-methods-of-aqueous-chromium-removal-have-been.md` | Alternative methods of aqueous chromium removal have been of great research interest in recent years | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-aquatic-ecosystems-disrupting-the-fundamental-integrity-of-our.md` | aquatic ecosystems. Disrupting the fundamental integrity of our life support systems. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-arsenic-methyltransferase-and-methylation-of.md` | Arsenic Methyltransferase and Methylation of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-attributable-fraction-of-cancer-related-to-occupational-exposure.md` | Attributable Fraction of Cancer Related to Occupational Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-bioavailability-of-heavy-metals.md` | bioavailability of heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-cadmium-stress-in-two-rice.md` | Cadmium Stress in Two Rice | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-chain-that-specifically-leads-to-edible-food-for.md` | chain that specifically leads to edible food for human consumption” [2]. Indeed, it is estimated that | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-compare-the-levels-of-macroelements-ca-p-k.md` | compare the levels of macroelements (Ca, P, K, Na, Mg), microelements (Fe, Zn, Mn, Cu), heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-crm-rapid-response-approach-for-the-certification-of.md` | CRM rapid response approach for the certification of arsenic species | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-croatian-journal-of-fisheries-2020-78-133-144.md` | Croatian Journal of Fisheries, 2020, 78, 133-144 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-dataset-of-concentrations-of-mercury-and.md` | Dataset of concentrations of mercury and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-doi-http-doi-org-10-4038-jdza-v6i2.md` | DOI: http://doi.org/10.4038/jdza.v6i2.50 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-dots-from-ethanolic-shallot-extract-for-chromium.md` | dots from ethanolic shallot extract for chromium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-effects-of-bacillus-subtilis-pb6-and-or-chromium.md` | Effects of Bacillus subtilis PB6 and/or chromium propionate supplementation on | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-eid-et-al-evaluating-the-uptake-of-ten.md` | Eid et al.: Evaluating the uptake of ten heavy metals by kidney bean (Phaseolus vulgaris L.) grown in a soil-sludge mixture using a | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-face-masks-massive-research-effort-has-been-launched.md` | Face masks massive research effort has been launched to understand, characterize, and estimate the exposure risks of PPE | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-giuseppe-de-santis-olubukunmi-amos-ilori-diana-marisol.md` | Giuseppe De Santis, Olubukunmi Amos Ilori , Diana Marisol Abrego-Guandique , Pierluigi Plastina , | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-guillard-et-al-particle-and-fibre-toxicology-2020.md` | Guillard et al. Particle and Fibre Toxicology (2020) 17:51 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-healthy-eating-patterns-should-include-a-variety-of.md` | healthy eating patterns should include a variety of vegetables from all ﬁve of the Access this article online | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-heavy-metal-pollution-in-the-environment-and-their.md` | Heavy metal pollution in the environment and their toxicological effects | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-heavy-metals-in-food-waste-water-with-environmental.md` | Heavy Metals in Food Waste Water with Environmental Effects | Subject-fit review, then canonical hero |

## Batch 63: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2020-hexavalent-chromium-cr-vi-is-toxic-carcinogenic-and.md` | Hexavalent chromium (Cr(VI)) is toxic, carcinogenic, and mutagenic substances. Oral exposure to Cr(VI) is thought to be | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-however-this-ingredient-is-costly-compared-to-formulated.md` | However, this ingredient is costly compared to formulated to meet the requirements for adult cats | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-iodine-and-mercury-content-in-raw-boiled.md` | Iodine and Mercury Content in Raw, Boiled, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-it-can-continue-providing-a-valuable-service-many.md` | it can continue providing a valuable service. Many successful busi- allow customers to rent prams and other baby equipment as a ser- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-laurence-chevalier-mathieu-morin-flore-c-grandin-m.md` | Laurence Chevalier, Mathieu Morin, Flore C. Grandin, M. Z. Lacroix, Christine | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-lead-cadmium-mercury-aluminium-iron-nickel-bulging-them.md` | lead, cadmium, mercury, aluminium, iron, nickel, bulging them metal packaging materials represents 15% of the total | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-long-term-risks-to-neonatal-health-from-exposure.md` | Long Term Risks to Neonatal Health from Exposure to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-mercury-and-its-effect-on-human-health.md` | Mercury and its effect on human health: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-mercury-intake-via-consumption-of-imported-atlantic-mackerel.md` | Mercury intake via consumption of imported Atlantic mackerel | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-methylmercury-mediated-oxidative-stress-and.md` | Methylmercury-Mediated Oxidative Stress and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-pcbs-and-heavy-metals-in-farmed-escaped-and.md` | PCBs and Heavy Metals in Farmed, Escaped and Wild | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-received-in-revised-form-6-january-2020-species.md` | Received in revised form 6 January 2020 species exposure to metal contaminants, nor their ability to uptake and translocate metal(loid)s from contaminated | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-recently-the-levels-of-heavy-metals-in-medicinal.md` | Recently, the levels of heavy metals in medicinal plants have aroused widespread concern because these | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-salinity-stress-is-an-inevitable-crisis-causing-wide.md` | Salinity stress is an inevitable crisis causing wide spread damage to rice leading to food insecurity. The | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-scientific-research-publishing-inc-ous-compounds-pahs-tphs.md` | Scientific Research Publishing Inc. ous compounds PAHs, TPHs, PCBs and heavy metals in June and July of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-seafood-wine-rice-vegetables-and-other-food-items.md` | Seafood, wine, rice, vegetables, and other food items associated | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-sources-and-toxicity-of-mercury-in-the-san.md` | Sources and Toxicity of Mercury in the San Francisco Bay Area, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-switzerland-formulation-can-be-released-into-rivers-lakes.md` | Switzerland formulation can be released into rivers, lakes, seashores, and/or sewage treatment | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-the-content-of-macroelements-and-microelements-additionally-the.md` | the content of macroelements and microelements. Additionally, the presence of heavy metals was verified and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2020-vdixxx10-1177-1040638720903115interlaboratory-comparison-for-heavy-met.md` | VDIXXX10.1177/1040638720903115Interlaboratory comparison for heavy metals testingMcGeehan et al. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-320-400-nm-radiation-a-distinction-between-spf.md` | (320‒400 nm) radiation; a distinction between SPF and UVA protection factor (UVA-PF) is made. Many of the studies of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-a-review-on-emerging-micropollutants-sources-environmental-concentrati.md` | A review on emerging micropollutants: sources, environmental concentration and toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-accepted-16-august-2021-abstract-silicon-si-is.md` | Accepted: 16 August 2021 Abstract: Silicon (Si) is considered a non-essential element similar to cadmium, arsenic, lead, etc., | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-age-infants-were-randomized-to-a-nordic-group.md` | age infants were randomized to a Nordic group (NG, n = 41) or a Conventional group (CG, n = 40), | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-aglobal-product-stewardship-toxicology-phillips-66-bartlesville-ok.md` | aGlobal Product Stewardship & Toxicology, Phillips 66, Bartlesville, OK 74003, USA | Subject-fit review, then canonical hero |

## Batch 64: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2021-and-2019-to-evaluate-field-preparation-techniques-effect.md` | and 2019 to evaluate field preparation techniques effect on selected heavy metals concentration and rice | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-and-neuronal-development-of-preterm-infants.md` | and Neuronal Development of Preterm Infants | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-aquatic-environment-exposure-and-toxicity-of-engineered.md` | Aquatic Environment Exposure and Toxicity of Engineered | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-ariane-krause-1-franziska-ha-fner-florian-augustin.md` | Ariane Krause 1 & Franziska Häfner & Florian Augustin & Kai M. Udert | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-arima-based-prediction-of-heavy-metal-health-risks.md` | ARIMA-Based Prediction of Heavy Metal Health Risks in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-benefits-toxicity-and-pathologies.md` | Benefits, Toxicity and Pathologies | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-chemical-composition-and-antigenotoxic-properties.md` | Chemical Composition and Antigenotoxic Properties | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-chromium-iii-and-chromium-vi-as-important.md` | Chromium (III) and chromium (VI) as important | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-collecting-hand-wipe-samples-to.md` | Collecting Hand Wipe Samples to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-developmental-exposure-to-low-concentrations-of.md` | Developmental Exposure to Low Concentrations of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-environmental-toxicology-and-chemistry-volume-40-number-10.md` | Environmental Toxicology and Chemistry—Volume 40, Number 10—pp. 2813–2824, 2021 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-essential-and-toxic-elements-in-drinking-water.md` | Essential and Toxic Elements in Drinking Water: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-from-damaging-exposure-to-sunlight-the-currently-estimated.md` | from damaging exposure to sunlight. The currently estimated volume production of UV | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-functioning-of-the-human-body-malnutrition-is-the.md` | functioning of the human body. Malnutrition is the leading cause that food processing results in quality and quantity products | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-healthy-dogs-and-biomarkers-of-zinc-status-to.md` | healthy dogs and biomarkers of zinc status. To ensure an adequate zinc status, it is important to know | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-however-excessive-use-of-fertilizers-could-harm-the.md` | However, excessive use of fertilizers could harm the environment. Heavy metals, including aluminum (Al), contamination have been | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-ileana-ielo-5-dario-drommi-6-elisabetta-scali.md` | Ileana Ielo 5 , Dario Drommi 6 , Elisabetta Scali 7 , Maria Rosaria Plutino 5 , Giuseppe Rosace 8 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-impact-of-methylmercury-and-other-heavy-metals-exposure.md` | Impact of Methylmercury and Other Heavy Metals Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-intakes-of-fish-and-long-chain-jannike-yen.md` | Intakes of Fish and Long-Chain Jannike Øyen,1 Anne Lise Brantsæter,2 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-interferences-of-inorganic-arsenic-iii-v-on.md` | Interferences of Inorganic Arsenic (III & V) on | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-international-journal-of-fisheries-and-aquatic-studies-2021.md` | International Journal of Fisheries and Aquatic Studies 2021; 9(4): 230-233 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-journal-of-nutrition-fasting-and-health.md` | JOURNAL OF NUTRITION FASTING AND HEALTH | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-keywords-exposure-to-varied-foods-in-early-life.md` | Keywords: Exposure to varied foods in early life is important for short- and long-term health and development. Strategically | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-keywords-meat-heavy-metal-toxic-elements-health-risk.md` | Keywords: Meat, Heavy metal, Toxic elements, Health risk, Exposure assessment | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-levels-of-mercury-methylmercury-and-selenium-in-fish.md` | Levels of Mercury, Methylmercury and Selenium in Fish: | Subject-fit review, then canonical hero |

## Batch 65: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2021-mer-genes-broadens-mercury.md` | mer Genes Broadens Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-meso-and-macroporous-silica-based-arsenic.md` | Meso- and macroporous silica-based arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-metals-by-exporting-the-cations-as-a-metal.md` | metals by exporting the cations as a metal–glutathione complex. The ability of the bacterial Atm1 protein to efflux metal–glutathione | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-methods-of-extracting-the-compounds-of-interest-in.md` | methods of extracting the compounds of interest. In the case of northwest Spain, five algae species are | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-methylmercury-and-inorganic-mercury-in-cord-blood-using.md` | Methylmercury and Inorganic Mercury in Cord Blood Using | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-methylmercury-determination-in-freshwater-biota.md` | Methylmercury determination in freshwater biota | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-molecular-mechanisms-of-environmental-metal-neurotoxicity.md` | Molecular Mechanisms of Environmental Metal Neurotoxicity: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-nutritional-evaluation-and-risk-assessment-of-the-exposure.md` | Nutritional Evaluation and Risk Assessment of the Exposure to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-open-correlates-of-prenatal-heavy-metal.md` | OPEN Correlates of prenatal heavy metal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-printed-edition-of-the-special-issue-published-in.md` | Printed Edition of the Special Issue Published in Toxics | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-reported-facts-about-high-loads-of-lead-mercury.md` | reported facts about high loads of lead, mercury, copper, and others hazardous and cancerous | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-sebastian-granitzer-1-2-raimund-widhalm-1-2.md` | Sebastian Granitzer 1,2 , Raimund Widhalm 1,2 , Martin Forsthuber 2 , Isabella Ellinger 3 , Gernot Desoye 4 , | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-study-on-adsorption-of-heavy-metals-by-rice.md` | STUDY ON ADSORPTION OF HEAVY METALS BY RICE HUSK | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-the-effect-of-cooking-on-methylmercury-arsenic-and.md` | the Effect of Cooking on Methylmercury, Arsenic, and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-the-toxicological-risk-assessment-of-dermal-exposure-of.md` | The Toxicological Risk Assessment of Dermal Exposure of Patients | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-total-and-bioaccessible-heavy-metals-in-cabbage.md` | Total and bioaccessible heavy metals in cabbage | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-toxicological-sciences-2021-1-15.md` | TOXICOLOGICAL SCIENCES, 2021, 1–15 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-toxicology-2021-34-pp-1046-1054-10-1021.md` | Toxicology, 2021, 34, pp.1046-1054. ⟨10.1021/acs.chemrestox.0c00461⟩. ⟨hal-03161988⟩ | Subject-fit review, then canonical hero |
| `wiki/sources/authors2021-understanding-potential-heavy-metal-contamination.md` | Understanding Potential Heavy Metal Contamination, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-3-title-epigenetic-biomarkers-of-autoimmune-risk-and.md` | 3 TITLE: Epigenetic biomarkers of autoimmune risk and protective antioxidant signaling in methylmercury-exposed adults | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-a-low-cost-method-shows-potentially-toxic-element.md` | A Low-Cost Method Shows Potentially Toxic Element Levels | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-accepted-29-august-2022-an-efficient-alternative-surpassing.md` | ACCEPTED 29 August 2022 an efﬁcient alternative surpassing the existing physical and chemical approaches | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-against-chromium-induced-brain-damage-in.md` | against chromium-induced brain damage in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-and-species-is-particularly-important-because-its-material.md` | and species is particularly important, because its material balance can be formulated purely in terms pH | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-and-use-committee-all-diets-were-formulated-to.md` | and Use Committee. All diets were formulated to be complete and balanced and meet or exceed the nutritional requirements of adult cats. The | Subject-fit review, then canonical hero |

## Batch 66: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2022-arsenic-activates-the-er-stress-associated-unfolded-protein.md` | Arsenic Activates the ER Stress-Associated Unfolded Protein | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-arsenic-contamination-in-soil-vegetable-groundwater-and-riverine.md` | Arsenic Contamination in Soil, Vegetable, Groundwater, and Riverine Fish | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-assessment-of-children-s-metal-exposure-via-hand.md` | Assessment of Children’s Metal Exposure via Hand Wipe, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-bacterial-biosorbents-an-efficient-heavy-metals-green.md` | Bacterial Biosorbents, an Efficient Heavy Metals Green | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-benefits-and-availability-to-industry-five-smoothie-formulations.md` | benefits, and availability to industry. Five smoothie formulations were produced and analyzed for | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-bioaccumulation-and-translocation-of-heavy-metals.md` | Bioaccumulation and Translocation of Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-bioactive-compounds-antibiotics-and-heavy-metals-effects-on.md` | Bioactive compounds, antibiotics and heavy metals: effects on the intestinal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-biomolecules-from-vegetable-wastes.md` | Biomolecules from Vegetable Wastes | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-bioremediation-of-heavy-metal.md` | Bioremediation of Heavy Metal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-brine-disposal-treatment-of-natural-water-focuses-on.md` | brine disposal. Treatment of natural water focuses on removal of natural organic matter, arsenic, iron, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-central-channel-of-radiofrequency-rf-induced-argon-tion.md` | central channel of radiofrequency (RF) induced argon tion technique leads to the identification of the compound | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-characterizing-behaviors-associated-with-enteric-pathogen-exposure-amo.md` | Characterizing Behaviors Associated with Enteric Pathogen Exposure among Infants in Rural | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-chromium-through-cr-stressed-life-sciences-faculty-of.md` | chromium through Cr-stressed Life Sciences, Faculty of Food Science and Technology, University of Agricultural Sciences and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-compared-to-the-chemical-fertilizer-in-organic-fertilizer.md` | compared to the chemical fertilizer. In organic fertilizer applications, heavy metal contents such as arsenic, chrome, cobalt, and nickel were found to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-compounds-that-can-be-further-valorized-in-the.md` | compounds that can be further valorized in the formulation of food, nutraceuticals, and pharmacological prod- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-determination-of-mercury-methylmercury-and-selenium.md` | Determination of Mercury, Methylmercury and Selenium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-dietary-intake-of-toxic-heavy-metals-with-major.md` | Dietary Intake of Toxic Heavy Metals with Major Groups of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-dietary-selenomethionine-reduce-mercury-tissue-levels.md` | Dietary Selenomethionine Reduce Mercury Tissue Levels | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-different-chicken-based-formulations.md` | Different Chicken-Based Formulations | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-effect-of-rice-husk-on-arsenic-accumulation-in.md` | EFFECT OF RICE HUSK ON ARSENIC ACCUMULATION IN | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-enteral-nutrition-in-preterm-infants-2022-a-position.md` | Enteral Nutrition in Preterm Infants (2022): A Position Paper from the ESPGHAN | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-epa-and-dha-in-fish-as-affected-by.md` | (EPA and DHA) in fish as affected by cooking methods | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-exposed-to-methylmercury.md` | Exposed to Methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-exposure-is-the-only-known-risk-factor-for.md` | exposure is the only known risk factor for developing melanoma skin cancer. In this study, the main concepts about the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-formulations-in-the-multimodal.md` | Formulations in the Multimodal | Subject-fit review, then canonical hero |

## Batch 67: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2022-frontiers-in-microbiology-remediate-heavy-metals-but-the.md` | Frontiers in Microbiology remediate heavy metals, but the use of microorganisms is cheap, less | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-h2-so4-charring-modification-due-to-cross-linking.md` | H2 SO4 charring modiﬁcation due to cross-linking reaction of betel nut cellulose, thereby creating suitable complexation sites for | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-hbm4eu-chromates-study-determinants-of-exposure-to.md` | HBM4EU Chromates Study: Determinants of Exposure to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-health-2022-19-8610-https-bottled-water-from.md` | Health 2022, 19, 8610. https:// bottled water) from consenting households in a small rural community without utility-supplied water | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-health-risk-assessment-attributed-to-consumption-of-fish.md` | Health Risk Assessment Attributed to Consumption of Fish | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-heavy-metals-and-neurodevelopment-of.md` | Heavy metals and neurodevelopment of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-heavy-metals-halogenated-hydrocarbons-phthalates-glyphosate.md` | Heavy Metals, Halogenated Hydrocarbons, Phthalates, Glyphosate, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-hexavalent-chromium-exposure.md` | Hexavalent Chromium Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-hexavalent-chromium-is-resistant-to-degradation-and-sever.md` | Hexavalent chromium is resistant to degradation and sever toxic substance to environment and community health. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-in-the-buildup-of-toxic-substances-such-as.md` | in the buildup of toxic substances, such as acetaldehyde the immediate precursor of ethylene, is produced in the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-inducement-due-to-radiation-exposure-is-within-the.md` | inducement due to radiation exposure is within the acceptable limits for both mining sites. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-janet-m-roseland-judith-h-spungen2-kristine-y.md` | Janet M. Roseland , Judith H. Spungen2, Kristine Y. Patterson1, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-jppt-infant-nutrition-survey.md` | JPPT \| Infant Nutrition Survey | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-keywords-ants-i-biochemical-oxygen-demand-bod-and.md` | Keywords: ants: (i) biochemical oxygen demand (BOD) and ammonia; (ii) heavy metals; (iii) sewage-associated organic pollutants | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-lead-and-other-toxic-metals-in-plastic-play.md` | Lead and other toxic metals in plastic play foods: Results from testing | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-mercury-contamination-and-body-condition-in-birds.md` | mercury contamination and body condition in birds | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-mercury-contamination-in-fish-and-its-effects-on.md` | Mercury Contamination in Fish and Its Effects on the Health of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-mercury-induced-oxidative-stress-response-in-benthic.md` | Mercury-Induced Oxidative Stress Response in Benthic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-methylmercury-induces-mitochondria-and-endoplasmic.md` | Methylmercury Induces Mitochondria- and Endoplasmic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-microbial-proteases-for-by-product-valorization-through-hydrol.md` | microbial proteases for by-product valorization through hydrol- operating conditions (temperature, pH, salinity, and organic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-mineral-trace-element-and-toxic-metal-concentration.md` | Mineral, trace element, and toxic metal concentration | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-need-for-protein-leads-to-scientific-challenges-aimed.md` | need for protein leads to scientific challenges aimed at designing new nutritional strategies | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-of-toxic-metals-concentration-seasonal-variation-and.md` | of toxic metals concentration, seasonal variation and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-open-infant-infections-respiratory.md` | OPEN Infant infections, respiratory | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-patch-testing-we-will-review-updates-on-the.md` | patch testing. We will review updates on the pathophysiology of contact dermatitis, discuss new contact allergens, explore | Subject-fit review, then canonical hero |

## Batch 68: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2022-probe-upon-interacting-with-the-target-the-sensor.md` | probe upon interacting with the target. The sensor was systematically characterized using alternating | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-published-maps-and-institutional-affil-concentrated-in-animal.md` | published maps and institutional affil- concentrated in animal tissue through a cation/carnitine transporter protein known as | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-selenium-status-its-interactions-with-dietary-mercury.md` | Selenium Status: Its Interactions with Dietary Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-study-revealed-that-arsenic-as-levels-exceeded-the.md` | study revealed that Arsenic (As) levels exceeded the Canadian range of low effects, indicating the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-sweet-potato-is-not-simply-an-abundant-food.md` | Sweet Potato Is Not Simply an Abundant Food Crop: A | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-targeting-trop2-in-poorly-differentiated.md` | Targeting TROP2, in Poorly Differentiated | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-the-association-of-prenatal-exposure-to-benzophenones.md` | The association of prenatal exposure to benzophenones | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-the-concentration-of-potentially-toxic-elements-ptes-in.md` | The concentration of potentially toxic elements (PTEs) in the coffee products: a | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-the-existing-literature-on-food-and-pediatric-dgbis.md` | the existing literature on food and pediatric DGBIs. The following have been shown to be beneficial: (i) in infants with | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-the-who-recommends-monitoring-iodine-status-in-all.md` | The WHO recommends monitoring iodine status in all populations with median urinary iodine concentration (UIC) below 100 μg/l suggesting | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-together-alleviate-chromium-vi.md` | Together Alleviate Chromium (VI) | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-total-mercury-and-fatty-acids-in-selected-fish.md` | Total Mercury and Fatty Acids in Selected Fish Species on the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-toxic-or-beneficial-what-is-the-role-of.md` | Toxic or beneficial? What is the role of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-transport-and-toxicity-of-methylmercury-cysteine-in-cultured.md` | Transport and Toxicity of Methylmercury-Cysteine in Cultured | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-validation-of-determination-by-icp-oes-method-of.md` | Validation of Determination by Icp-Oes Method of Mercury Residual Levels in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-vegetable-exposure-and-a-sensitive-feeding.md` | Vegetable-Exposure and a Sensitive-Feeding | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-water-sa-48-1-1-20-jan-2022.md` | Water SA 48(1) 1–20 / Jan 2022 Research paper | Subject-fit review, then canonical hero |
| `wiki/sources/authors2022-water-sa-48-1-21-31-jan-2022.md` | Water SA 48(1) 21–31 / Jan 2022 Research paper | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-1-h-benzotriazole-an-assessment-of-the-toxicity.md` | 1-H benzotriazole). An assessment of the toxicity of the identified organic chemicals indicated that none appeared to pose | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-abstract-exposure-to-chemicals-may-pose-a-greater.md` | Abstract: Exposure to chemicals may pose a greater risk to vulnerable groups, including pregnant | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-accepted-checked-before-and-after-the-corrosion-test.md` | Accepted checked before and after the corrosion test and pitting corrosion has been found in the 316 base metal only, while the weld | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-accumulation-characteristics-and-evaluation-of-heavy-metals-in.md` | Accumulation characteristics and evaluation of heavy metals in soils and vegetables | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-advances-in-clinical-toxicology.md` | Advances in Clinical Toxicology | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-algae-bacteria-fungi-actinomycetes-viruses-yeasts-and-plants.md` | algae, bacteria, fungi, actinomycetes, viruses, yeasts, and plants, with varying | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-all-infants-up-to-the-age-of-6.md` | all infants up to the age of 6 months and 600 IU/24 h for infants aged 6–12 months [16]. | Subject-fit review, then canonical hero |

## Batch 69: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2023-assessing-lead-exposure-in-u-s-pregnant-women.md` | Assessing lead exposure in U.S. pregnant women using biological and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-binu-thomas-maliyil-methylisothiazolinone-homosalate-octinoxate-alumin.md` | Binu Thomas Maliyil, methylisothiazolinone, homosalate, octinoxate, aluminum oxide, and cinnamate derivatives such as octyl | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-biogeochemical-cycling-of-mercury-in-aquatic-environments.md` | Biogeochemical Cycling of Mercury in Aquatic Environments | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-cancer-or-malignancy-continues-to-be-one-of.md` | Cancer, or malignancy, continues to be one of the most serious health problems in the world, leading to death and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-centre-dust-and-the-exposure-risk-for-young.md` | centre dust and the exposure risk for young | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-chemical-speciation-of-arsenic-and-chromium-in.md` | Chemical Speciation of Arsenic and Chromium in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-chen-j-hao-s-ban-uelos-g-and.md` | Chen J, Hao S, Bañuelos G and Zhou X Mercury (Hg) is a highly toxic heavy metal entering the human body through the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-co-application-of-silicate-and-low-arsenic-accumulating.md` | Co-Application of Silicate and Low-Arsenic-Accumulating Rice | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-commercially-prepared-and-home-prepared-infant-fruit-and.md` | Commercially Prepared and Home Prepared Infant Fruit and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-consistent-with-existing-literature-data-the-analysis-of.md` | consistent with existing literature data. The analysis of the Re-Os systematics of minute sample powders revealed | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-contamination-with-heavy-metals-of-central-asian-rivers.md` | contamination with heavy metals of Central Asian rivers | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-crops-a-step-towards-incorporating-genomic-tools.md` | Crops: A step towards incorporating genomic tools | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-decontamination-of-heavy-metals-from-water.md` | decontamination of heavy metals from water | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-determination-of-heavy-metal-ions-in-infant-milk.md` | Determination of Heavy Metal Ions in Infant Milk Powder | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-determination-of-heavy-metals-concentrations-in-soil-and.md` | Determination of Heavy Metals Concentrations in Soil and Tomato Plant | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-determination-of-methylmercury-and-inorganic-mercury-in-human.md` | Determination of methylmercury and inorganic mercury in human hair | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-development-of-methylmercury-analysis-by-ultra-high-performance.md` | Development of Methylmercury Analysis by Ultra-High Performance Liquid | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-differential-cell-metabolic-pathways-in-gills-and-liver.md` | Differential Cell Metabolic Pathways in Gills and Liver of Fish | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-disclosing-the-preferential-mercury-chelation-by-secys.md` | Disclosing the Preferential Mercury Chelation by SeCys | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-drinking-water-several-pfas-have-multiple-toxic-effects.md` | drinking water. Several PFAS have multiple toxic effects, particularly affecting liver, kidney, thyroid, and the immune | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-ecological-and-human-health-risk-assessment-of-heavy.md` | Ecological and Human Health Risk Assessment of Heavy Metal in Sediment and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-effects-of-environmental-toxicant-methylmercury.md` | Effects of Environmental Toxicant, Methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-elements-was-found-toxic-heavy-metals-as-pb.md` | elements was found. Toxic heavy metals (As, Pb, Hg, Cd), which are subject to priority control, in the raw materials and dry | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-essential-and-non-essential-heavy-metals.md` | Essential and non-essential heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-exposure-to-methylmercury-at-juvenile-stage-worsens.md` | Exposure to Methylmercury at Juvenile Stage Worsens | Subject-fit review, then canonical hero |

## Batch 70: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2023-formulated-with-carrot-serum-regardless-of-the-ph.md` | formulated with carrot serum. Regardless of the pH, emul- sifying and stabilizing agents from plant sources is grow- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-health-risk-assessment-for-human-exposure-to-heavy.md` | Health Risk Assessment for Human Exposure to Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-heavy-metal-pollution-in-the-environment-and-its.md` | Heavy Metal Pollution in the Environment and Its Impact Environmental Health Insights | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-heavy-metals-and-essential-metals-are-associated-with.md` | Heavy Metals and Essential Metals Are Associated with | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-heavy-metals-are-known-to-be-able-to.md` | Heavy metals are known to be able to cross the placental and blood brain barriers to affect critical | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-heavy-metals-in-groundwater-of-southern-italy.md` | Heavy Metals in Groundwater of Southern Italy: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-henriqueta-louro-b-n-carla-martins-l-m.md` | Henriqueta Louro b, n, Carla Martins l, m, Matthieu Meslin o, Lars Niemann p, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-imidazole-derivatives-including-2-2-hydroxyphenyl-1-h.md` | imidazole derivatives, including 2-(2-hydroxyphenyl)-1-H benzimidazole (HPBI) and its aluminum | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-index-php-pst-indexing_abstracting.md` | index.php/PST/indexing_abstracting | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-internal-order-was-only-slightly-changed-after-subjecting.md` | internal order was only slightly changed after subjecting them to the Cr(VI) agent. The results suggest | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-introduction-drinking-water-contaminated-with-heavy-metals-like.md` | Introduction: Drinking water contaminated with heavy metals like arsenic, cadmium, nickel, mercury, chromium, zinc, lead, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-justine-briard-sophie-ayrault-matthieu-roy-barman-louise.md` | Justine Briard, Sophie Ayrault, Matthieu Roy-Barman, Louise Bordier, Maxime | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-kerala-university-of-fisheries-and-ocean.md` | Kerala University of Fisheries and Ocean | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-maternal-fish-consumption-and-child-neurodevelopment-in-nutrition.md` | Maternal fish consumption and child neurodevelopment in Nutrition 1 Cohort: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-mercury-in-selected-abiotic-and-biotic-elements-in.md` | Mercury in Selected Abiotic and Biotic Elements in Two Lakes | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-mercury-isotope-values-in-shoreline-spiders-reveal-the.md` | Mercury Isotope Values in Shoreline Spiders Reveal the Transfer of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-mercury-pollution-removal.md` | Mercury Pollution Removal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-mercury-speciation-in-selenium-enriched-wheat.md` | Mercury speciation in selenium enriched wheat | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-mineral-and-heavy-metal-content-in-dry-dog.md` | Mineral and heavy metal content in dry dog foods | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-neurotoxicology-author-manuscript-available-in-pmc-2025-february.md` | Neurotoxicology. Author manuscript; available in PMC 2025 February 06. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-nitrogen-species-rns-resulting-in-skin-damage-cosmetic.md` | nitrogen species (RNS), resulting in skin damage. Cosmetic industries have adopted a strategy to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-nutritional-qualities-and-heavy-metals-accumulation-in-grains.md` | Nutritional qualities and heavy metals accumulation in grains: A study on lowland irrigated | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-of-the-safety-of-fish-products-in-the.md` | OF THE SAFETY OF FISH PRODUCTS IN THE TRADE PROCESS | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-open-access-metals-toxicity-with-special.md` | OPEN ACCESS metals toxicity with special | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-open-access-reconstituting-the-main.md` | OPEN ACCESS reconstituting the main | Subject-fit review, then canonical hero |

## Batch 71: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2023-open-mineral-and-heavy-metal-content.md` | OPEN Mineral and heavy metal content | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-oxidation-of-infant-formula-powder.md` | oxidation of infant formula powder | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-potential-ecological-risk-assessment-of-heavy-metals-associated.md` | Potential ecological risk assessment of heavy metals associated | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-quantitative-proteomic-analysis-of-cyanide-and-mercury.md` | Quantitative Proteomic Analysis of Cyanide and Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-regulatory-mechanisms-underlying-arsenic-uptake-transport.md` | Regulatory Mechanisms Underlying Arsenic Uptake, Transport, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-simultaneous-speciation-analysis-of-hg-and-se-in.md` | Simultaneous speciation analysis of Hg and Se in fish by | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-skin-aging-dna-damage-and-even-skin-cancer.md` | skin aging, DNA damage, and even skin cancer. Therefore, it is worth supporting skin protection | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-suppresses-genotoxicity-hepatotoxicity.md` | suppresses genotoxicity, hepatotoxicity | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-systems-biology-of-chromium.md` | Systems biology of chromium- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-the-inception-of-agriculture-farmers-and-plant-breeders.md` | the inception of agriculture. Farmers and plant breeders continue to use these | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-the-paper-provides-an-overview-of-biocosmetics-which.md` | The paper provides an overview of biocosmetics, which has tremendous potential for growth and is attracting huge business | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-the-potential-risks-associated-with-their-exposure-and.md` | the potential risks associated with their exposure and the increasing number of applications where | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-the-stability-of-phenolic-compounds-in-fruit-berry.md` | The Stability of Phenolic Compounds in Fruit, Berry, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-time-patterns-in-internal-human-exposure-data-to.md` | Time Patterns in Internal Human Exposure Data to Bisphenols, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-toxicology-reports-11-2023-295-306.md` | Toxicology Reports 11 (2023) 295–306 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-tristhiolato-pseudopeptides-bind-arsenic-iii-in-an-ass3.md` | Tristhiolato Pseudopeptides Bind Arsenic(III) in an AsS3 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-which-leads-to-skin-cancer-and-other-phototoxic.md` | which leads to skin cancer and other phototoxic effects. The application of sunscreen shields to the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-wild-harvesting-an-lca-based-evaluation-from.md` | Wild Harvesting: an LCA-Based Evaluation from | Subject-fit review, then canonical hero |
| `wiki/sources/authors2023-wipe-sampling-is-a-commonly-used-method-for.md` | Wipe sampling is a commonly used method for testing a surface for beryllium or other metal particle | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-a-meta-analysis-of-mercury-biomagnification-in-freshwater.md` | A Meta-Analysis of Mercury Biomagnification in Freshwater | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-access-metrics-more-article-recommendations-supporting-information-2.md` | ACCESS Metrics & More Article Recommendations * Supporting Information | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-access-metrics-more-article-recommendations-supporting-information.md` | ACCESS Metrics & More Article Recommendations * Supporting Information | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-accumulation-of-toxic-metals-in-vegetable-crops-and.md` | Accumulation of toxic metals in vegetable crops and associated | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-acids-etc-many-cosmetic-formulations-use-algal-bioactive.md` | acids, etc. Many cosmetic formulations use algal bioactive growth rate; maximum ­CO2 consumption yielding biofuel; | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-against-arsenic-stress-in.md` | against arsenic stress in | Subject-fit review, then canonical hero |

## Batch 72: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2024-alina-florina-serb-1-marius-georgescu-2-3.md` | Alina Florina Serb 1 , Marius Georgescu 2,3, * , Robert Onulov 4 , Cristina Ramona Novaconi 4 , Eugen Sisu 1 , | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-allalgua-et-al-age-and-growth-of-the.md` | Allalgua et al.: Age and growth of the fish Luciobarbus callensis (Cyprinidae) in the ouldjet mellegue dam (Algeria, Tebessa) | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-assessing-human-risks-and-benefits-associated-with-mercury.md` | ASSESSING HUMAN RISKS AND BENEFITS ASSOCIATED WITH MERCURY CONTAMINATION | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-assessment-of-arsenic-concentration-in-rice-and-risk.md` | Assessment of arsenic concentration in rice and risk characterizations | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-assessment-of-heavy-metal-conc-issnanzene-online-et2616.md` | ASSESSMENT OF HEAVY METAL CONC… ISSNAnzene online:et2616-1370 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-association-between-prenatal-dietary-toxicants-and-infant.md` | Association between Prenatal Dietary Toxicants and Infant | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-augments-the-immune-system-furthermore-red-beetroot-is.md` | augments the immune system. Furthermore, red beetroot is known to improve stomach and intestine functions, stop lipid | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-centre-hospitalier-universitaire-vaudois-emmanuel-obeng-gyasi-1.md` | Centre Hospitalier Universitaire Vaudois Emmanuel Obeng-Gyasi 1, Cristina Fayad-Martinez 2, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-citing-articles-3-view-citing-articles.md` | Citing articles: 3 View citing articles | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-comprehensive-analysis-of-heavy-metal-soil-contamination-in.md` | Comprehensive analysis of heavy metal soil contamination in mining | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-computational-toxicology-and-exposure-great-lakes-toxicology-and.md` | Computational Toxicology and Exposure, Great Lakes Toxicology and Ecology Division, 6201 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-contamination-of-milk-with-some-heavy-metals-in.md` | contamination of milk with some heavy metals in some areas of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-detection-of-heavy-metals-in-some-edible.md` | Detection of Heavy Metals in Some Edible | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-diabetes-has-arisen-as-a-noteworthy-global-health.md` | Diabetes has arisen as a noteworthy global health issue, marked by escalating incidence and mortality rates. Insulin, crucial | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-different-levels-of-arsenic-as-cadmium-cd-and.md` | different levels of arsenic (As), cadmium (Cd) and lead (Pb), followed by drying in a climatic chamber. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-distribution-and-homogenization-of-multiple-mercury-species.md` | Distribution and Homogenization of Multiple Mercury Species | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-ecotoxicology-2024-33-325-396.md` | Ecotoxicology (2024) 33:325–396 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-effect-of-graded-levels-of-essential-heavy-metals.md` | EFFECT OF GRADED LEVELS OF ESSENTIAL HEAVY METALS ON THE | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-electrochemical-sensors-for-heavy-metal-ion-detection-in.md` | Electrochemical Sensors for Heavy Metal Ion Detection in Aqueous | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-environmental-harms-affecting-cancer-the-role-of-known.md` | environmental harms affecting cancer. The role of known metal carcinogens (i.e., cadmium, arsenic, nickel, chromium(VI)) | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-essential-trace-and-toxic-elements-content-their.md` | Essential, trace and toxic elements content, their | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-estimating-the-concentration-of-heavy-metals-in-oleander.md` | Estimating the Concentration of Heavy Metals in Oleander/Pink and white Oleander Plants | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-evaluation-of-the-metabolite-profile-of-fish-oil.md` | Evaluation of the Metabolite Profile of Fish Oil Omega-3 Fatty | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-finding-the-achilles-heel-investigating-how-to.md` | FINDING THE ACHILLES HEEL: INVESTIGATING HOW TO | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-foods-and-contaminants-the-vast-majority-of-participants.md` | foods and contaminants. The vast majority of participants reported eating country foods (99%) Contaminants; | Subject-fit review, then canonical hero |

## Batch 73: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2024-for-the-assessment-of-developmental-neurotoxicity.md` | for the assessment of developmental neurotoxicity | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-for-the-deposit-and-dissemination-of-scientific-re-2.md` | for the deposit and dissemination of scientific re- tinée au dépôt et à la diffusion de documents scien- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-for-the-deposit-and-dissemination-of-scientific-re.md` | for the deposit and dissemination of scientific re- tinée au dépôt et à la diffusion de documents scien- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-fungi-in-remediating-toxic-metals.md` | fungi in remediating toxic metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-health-and-environmental-impacts-of-heavy-metals-and.md` | health and environmental impacts of heavy metals and faecal pollution in Omor and its environs. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-health-benefits-and-health-risks-of-contaminated-fish.md` | Health benefits and health risks of contaminated fish | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-health-determinants-of-methylmercury-exposure-in-coastal.md` | Health Determinants of Methylmercury Exposure in Coastal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-hexavalent-chromium-from-aqueous-solutions-by-using.md` | Hexavalent Chromium from Aqueous Solutions by Using | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-hexavalent-chromium-targets-securin-to-drive-numerical.md` | Hexavalent Chromium Targets Securin to Drive Numerical | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-impact-of-arsenic-stress-on-the-antioxidant-system.md` | Impact of Arsenic Stress on the Antioxidant System and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-industry-heavy-metals-contaminated-soils-using-a-sorghum.md` | Industry Heavy Metals-Contaminated Soils Using a Sorghum | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-influencing-factors-of-mercury-in-water.md` | Influencing Factors of Mercury in Water | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-is-an-urgent-issue-3-mcpd-and-ge.md` | is an urgent issue. 3-MCPD and GE are fat-soluble toxic substances that can | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-keratin-hydrolysate-as-a-chrome-exhaust-aid-and.md` | Keratin hydrolysate as a chrome exhaust aid and keratin filler in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-key-contributors-to-riverine-methylmercury.md` | key contributors to riverine methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-lenop-can-bind-transition-and-heavy-metals-metal.md` | LENOP), can bind transition and heavy metals. Metal ion homeostasis accomplishes the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-lung-cancer-risks-associated-with-occupational-exposure-to.md` | Lung Cancer Risks Associated with Occupational Exposure to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-mercury-dynamics-in-the-sea-of-azov-insights.md` | Mercury Dynamics in the Sea of Azov: Insights from a Mass | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-mercury-exposure-and-health-effects-in-indigenous-people.md` | Mercury Exposure and Health Effects in Indigenous People from | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-methylmercury-toxicity.md` | methylmercury toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-microbial-contributions-to-heavy-metal-phytoremediation-in.md` | Microbial Contributions to Heavy Metal Phytoremediation in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-mnpls-induce-organ-toxicity-via-digestion-inhalation-and.md` | (MNPLs) induce organ toxicity via digestion, inhalation, and skin contact. Particles have been | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-nanobiochar-to-enhance-mercury-ion-removal-from-water.md` | Nanobiochar to Enhance Mercury Ion Removal from Water Systems | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-new-insight-into-mercury-removal-from-fish-meat.md` | New Insight into Mercury Removal from Fish Meat Using a | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-nlc-based-sunscreen-formulations-with-optimized.md` | NLC-Based Sunscreen Formulations with Optimized | Subject-fit review, then canonical hero |

## Batch 74: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2024-nutritional-deficiencies-however-factors-like-antinutrients-influence-.md` | nutritional deficiencies. However, factors like antinutrients influence nutrient bioaccessibility. This study evaluated the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-obsessive-skincare-and-liver-toxicity-a-case-report.md` | Obsessive skincare and liver toxicity: a case report on | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-out-extended-exposure-to-low-temperatures-que-et.md` | out extended exposure to low temperatures (Que et al. 2019). Carrot colors can be selected based on their specific pro- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-overview-of-nanocosmetics-with-emphasis-on-those-incorporating.md` | Overview of Nanocosmetics with Emphasis on those Incorporating | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-phytoremediation-of-soils-contaminated-with-potentially-toxic.md` | phytoremediation of soils contaminated with potentially toxic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-prenatal-exposure-to-trace-elements-impacts.md` | Prenatal exposure to trace elements impacts | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-rapid-and-in-situ-detection-of-different-heavy.md` | rapid and in-situ detection of different heavy metals in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-rare-earth-and-platinum-group-elements-in-environmental.md` | Rare Earth and Platinum Group Elements In Environmental Health Insights | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-reaction-stability-test-of-hexavalent-chromium-complex-with.md` | Reaction Stability Test of Hexavalent Chromium Complex with 1,5-Diphenylcarbazide in Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-riparian-methylmercury-production-increases-riverine-mercury-flux.md` | Riparian Methylmercury Production Increases Riverine Mercury Flux | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-roles-in-the-metabolic-handling-of-trace-elements.md` | roles in the metabolic handling of trace elements (mercury, tungsten, arsenic, etc.) or | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-seafood-toxicant-exposure-during-pregnancy-lactation-and.md` | Seafood Toxicant Exposure During Pregnancy, Lactation, and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-sebastian-ryan-ndegwa-reza-zamani-and-tanimola-martins.md` | Sebastian Ryan-Ndegwa , Reza Zamani and Tanimola Martins | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-simulation-of-hexavalent-chromium-removal-by.md` | Simulation of hexavalent chromium removal by | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-spatial-variation-in-mercury-accumulation-in-bottlenose.md` | Spatial Variation in Mercury Accumulation in Bottlenose | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-the-genotoxicity-studies-carried-out-on-fcm-no.md` | the genotoxicity studies carried out on FCM No 768 and evaluated two new bac- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-the-influence-of-environmental-exposure-to-xenoestrogens-on.md` | The Influence of Environmental Exposure to Xenoestrogens on | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-the-removal-of-the-most-hazardous-heavy-metal.md` | the removal of the most hazardous heavy metal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-title-detection-of-titanium-nanoparticles-in-human-animal.md` | Title: Detection of titanium nanoparticles in human, animal and infant | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-to-heavy-metals-are-differentially.md` | to heavy metals are differentially | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-toxic-contaminant-that-is-widely-present-in-the.md` | toxic contaminant that is widely present in the environ- On the other hand, Se alleviated the intracellular reactive | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-toxicity-caused-by-mehg.md` | Toxicity Caused by MeHg | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-transfer-of-heavy-metals-from-soil-to-vegetables.md` | Transfer of heavy metals from soil to vegetables: A comparative | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-under-arsenic-contamination.md` | under arsenic contamination | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-urolithin-a-attenuates-hexavalent-chromium-induced-small.md` | Urolithin A attenuates hexavalent chromium-induced small | Subject-fit review, then canonical hero |

## Batch 75: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2024-use-of-cosmetics-in-pregnancy-and-neurotoxicity-can.md` | Use of Cosmetics in Pregnancy and Neurotoxicity: Can It | Subject-fit review, then canonical hero |
| `wiki/sources/authors2024-yustina-yustina1-nany-bodrorini1-alfi-sophian1-endang-lukitaningsih2.md` | Yustina Yustina1, Nany Bodrorini1, Alfi Sophian1, Endang Lukitaningsih2 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-.md` | Р. Г. Махінько, О. Ф. Дунаєвська | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-a-heavy-metal-and-trace-element-biomonitoring-study.md` | A Heavy Metal and Trace Element Biomonitoring Study in a | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-a-method-has-been-developed-and-validated-for.md` | A method has been developed and validated for vitamin ­B12 (cobalamin) measurement in nutritional products (infant formula, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-a-narrative-review-of-heavy-metals-and-sperm.md` | A Narrative Review of Heavy Metals and Sperm Quality: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-a-novel-approach-to-estimate-mercury-exposure-risks.md` | A Novel Approach to Estimate Mercury Exposure Risks Through | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-account-for-variability-and-uncertainty-in-chronic-exposure.md` | account for variability and uncertainty in chronic exposure estimates. The hazard index | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-adsorption-of-heavy-metals-onto.md` | Adsorption of heavy metals onto | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-against-arsenic-induced-lung-damage-in-rats.md` | against arsenic-induced lung damage in rats | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-alessandra-zaza1-2-13-giuseppe-zardo3-13-cristina.md` | Alessandra Zaza1,2,13, Giuseppe Zardo3,13, Cristina Banella4, Sara Tucci5, Elisabetta de Marinis2, Martina Gentile2, Serena Travaglini 6 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-amazon-about-mehg-intoxication.md` | Amazon about MeHg intoxication | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-and-furanocoumarins-as-a-result-a-range-of.md` | and furanocoumarins. As a result, a range of bioactivities, namely antioxidant, antibacterial, antifungal, cytotoxic, anti-­diabetic, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-and-mitigate-heavy-metal.md` | and mitigate heavy metal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-and-octinoxate-has-become-an-increasing-concern-due.md` | and octinoxate has become an increasing concern due to their persistence and toxicity, even at | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-antagonism-in-mercury-coordination-and-reactivity-toward.md` | antagonism in mercury coordination and reactivity toward | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-arsenite-asiii-is-toxic-to-all-organisms-due.md` | Arsenite (AsIII) is toxic to all organisms due to its ability to tightly bind exposed | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-assessment-of-heavy-metal-contamination-in-soils-and.md` | ASSESSMENT OF HEAVY METAL CONTAMINATION IN SOILS AND VEGETABLE CROPS FROM | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-assessment-of-heavy-metals-content-in-edible-vegetable.md` | Assessment of Heavy Metals Content in Edible Vegetable of Kangkung (Ipomaea) | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-associated-with-fresh-pet-food-evaluating-scientific-evidence.md` | Associated with Fresh Pet Food: Evaluating Scientific Evidence | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-association-of-pre-and-postnatal-mercury-exposure-with.md` | Association of pre-and postnatal mercury exposure with cardiometabolic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-associations-between-prenatal-exposure-to-a-mixture-of.md` | Associations between prenatal exposure to a mixture of lead, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-ating-solar-exposure-7-these-quality-instabilities-stem.md` | ating solar exposure [7]. These quality instabilities stem Red pepper sauce preparation | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-aware-of-mercury-exposure-and-intoxication.md` | aware of mercury exposure and intoxication | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-background-mercury-particularly-in-its-methylmercury-form-significantl.md` | Background: Mercury, particularly in its methylmercury form, significantly affects neu- | Subject-fit review, then canonical hero |

## Batch 76: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2025-background-objectives-trace-minerals-tms-both-essential-and.md` | Background/Objectives: Trace minerals (TMs), both essential and toxic, are integral to hu- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-bioaccumulation-and-trophic-transfer-of-heavy-metals-in.md` | Bioaccumulation and Trophic Transfer of Heavy Metals in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-bioaccumulation-of-heavy-metals-17-elements-in-the.md` | Bioaccumulation of Heavy Metals (17 Elements) in the Liver and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-bioaccumulation-of-mercury-cadmium-lead-and-arsenic.md` | Bioaccumulation of Mercury, Cadmium, Lead, and Arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-biopharma-product-testing-kingdom-4instruct-image-processing-centre.md` | BioPharma Product Testing Kingdom; 4Instruct Image Processing Centre (I2PC), Unidad de Biocomputación, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-carcinogenic-mechanisms-of-hexavalent-chromium-from.md` | Carcinogenic Mechanisms of Hexavalent Chromium: From | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-centre-for-liver-and-gastrointestinal-research-university-of.md` | Centre for Liver and Gastrointestinal Research, University of Birmingham, Birmingham, UK | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-cerebral-edema-secondary-to-heavy-metal-toxicity-from.md` | Cerebral Edema Secondary to Heavy Metal Toxicity From | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-chromium-and-manganese-in-water-samples-via-solid.md` | chromium and manganese in water samples via solid-phase extraction. This study revealed | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-chromium-in-its-hexavalent-form-cr-vi-poses.md` | Chromium in its hexavalent form (Cr(VI)) poses a significant threat to the environment and human health due to its toxicity, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-combined-effects-of-arsenic-and-cadmium-with-selenium.md` | Combined Effects of Arsenic and Cadmium With Selenium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-comparison-of-proximate-body-composition-and-heavy-metals.md` | Comparison of Proximate body composition and heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-complementary-foods-in-infants-an-in-vitro-study.md` | Complementary foods in infants: an in vitro study | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-concentrations-in-commonly-consumed-seafood-species.md` | Concentrations in Commonly Consumed Seafood Species | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-contamination-levels-in-120-food-samples-collected-from.md` | contamination levels in 120 food samples collected from three distinct vending | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-content-of-heavy-metals-in-the-muscle-tissue.md` | Content of heavy metals in the muscle tissue of fish from two rivers | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-continental-imbalance-in-atmospheric.md` | continental imbalance in atmospheric | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-contrasting-levels-of-mercury.md` | contrasting levels of mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-contrasting-magnitude-and-timing-of-pulsed-aqueous.md` | Contrasting Magnitude and Timing of Pulsed Aqueous | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-current-research-in-toxicology-9-2025-100268.md` | Current Research in Toxicology 9 (2025) 100268 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-damaging-effects-of-arsenic-stress.md` | damaging effects of arsenic stress | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-detection-of-heavy-metals-concentration-in-vegetables-and.md` | Detection of heavy metals concentration in vegetables and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-diet-shifts-drive-mercury-bioaccumulation-and-distribution-in.md` | Diet shifts drive mercury bioaccumulation and distribution in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-distinct-demethylation-pathways-of-rice-and-fish-derived.md` | Distinct demethylation pathways of rice- and fish-derived methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-ecological-risk-and-bioaccumulation-of-heavy-metals-in.md` | Ecological Risk and Bioaccumulation of Heavy Metals in Soil–Vegetable | Subject-fit review, then canonical hero |

## Batch 77: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2025-electrochemical-detection-of-heavy-metals-using.md` | Electrochemical Detection of Heavy Metals Using | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-environmental-exposures-are-increasingly-recognized-as-critical-yet.md` | Environmental exposures are increasingly recognized as critical, yet underappreci- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-environmental-exposures-to-common-gynecologic-and-reproductive-conditi.md` | environmental exposures to common gynecologic and reproductive conditions across | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-environmental-research-and-ecotoxicity-2025-4-172.md` | Environmental Research and Ecotoxicity. 2025; 4:172 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-evaluating-leaves-and-flowers-for-medicinal-applications.md` | Evaluating Leaves and Flowers for Medicinal Applications | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-evaluating-populus-tremula-l.md` | Evaluating Populus tremula L. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-evaluation-of-concentrations-and-health-risk-assessment-of.md` | Evaluation of Concentrations and Health Risk Assessment of Cadmium, Lead, Chromium and Arsenic in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-evaluation-of-heavy-metals-and-essential-minerals-in.md` | Evaluation of Heavy Metals and Essential Minerals in the Hair | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-exploring-mercury-and-selenium-dynamics-in-amazonian.md` | Exploring mercury and selenium dynamics in Amazonian | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-exploring-the-association-between-arsenic-exposure-and-sperm.md` | Exploring the Association between Arsenic Exposure and Sperm | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-exploring-the-role-of-fish-eggs-and-meat.md` | Exploring the role of fish eggs and meat in disease | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-exposure-among-conventional-and-organic-farmers-structured-interviews.md` | exposure among conventional and organic farmers structured interviews and biological sampling (hair | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-exposure-to-arsenic-and-cognitive.md` | Exposure to arsenic and cognitive | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-formulations-the-leather-industry-generates-significant-amounts-of.md` | formulations. The leather industry generates significant amounts of 30 Jul 2025 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-frequency-of-consumption-of-different-fish-crustacean-and.md` | Frequency of consumption of different fish, crustacean and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-global-drivers-of-variation-in-blood-mercury-of.md` | Global drivers of variation in blood mercury of seabirds | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-glucose-potato-broth-and-malt-broth-for-the.md` | Glucose-Potato Broth, and Malt Broth), for the biosorption of hexavalent chromium (Cr(VI)) from aqueous solutions. A series of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-hair-mercury-isotopes-a-noninvasive-biomarker-for.md` | HAIR MERCURY ISOTOPES, A NONINVASIVE BIOMARKER FOR | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-heavy-metal-induced-variability-in-leaf-nutrient.md` | Heavy Metal-Induced Variability in Leaf Nutrient | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-heavy-metal-toxicity-generates-reactive-oxygen-species-ros.md` | Heavy metal toxicity generates reactive oxygen species (ROS) that can contribute to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-heavy-metal-toxicity-in-clinical-and-environmental-health.md` | Heavy Metal Toxicity in Clinical and Environmental Health: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-heavy-metals-in-soils-and-selected-root.md` | Heavy metals in soils and selected root | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-hexavalent-chromium-induces-defense-responses.md` | Hexavalent Chromium Induces Defense Responses, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-human-exposure-to-arsenic-and-toxic.md` | Human Exposure to Arsenic and Toxic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-identifying-studies-evaluating-susceptibility-factors-for-chemical.md` | Identifying studies evaluating susceptibility factors for chemical | Subject-fit review, then canonical hero |

## Batch 78: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2025-impact-of-long-term-exposure-to-arsenic.md` | IMPACT OF LONG-TERM EXPOSURE TO ARSENIC | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-in-soils-co-contaminated-with-heavy-metals-and.md` | in Soils Co-Contaminated with Heavy Metals and Polycyclic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-in-the-periodic-table-the-metalloids-boron-b.md` | In the periodic table, the metalloids boron (B), silicon (Si), germanium (Ge), arsenic (As), antimony (Sb), and tellurium (Te) | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-incorporating-in-vivo-demethylation-and-reduction-into-mercury.md` | Incorporating in vivo demethylation and reduction into mercury mitigation | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-inorganic-matrices-in-this-study-sunscreen-formulations-were.md` | inorganic matrices. In this study, sunscreen formulations were | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-instrumentation-for-monitoring-toxic-elements-in-food-matrices.md` | instrumentation for monitoring toxic elements in food matrices: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-investigating-trace-element-homeostasis-in-vivo.md` | Investigating Trace Element Homeostasis In Vivo | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-investigation-of-combined-toxic-metals-pfas-volatile-organic.md` | Investigation of Combined Toxic Metals, PFAS, Volatile Organic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-ionizing-radiation-for-quality-control-and-mitigating-microbial.md` | Ionizing Radiation for Quality Control and Mitigating Microbial | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-jannat-javed-1-2-yuting-zhou-1-saad.md` | Jannat Javed 1,2 , Yuting Zhou 1 , Saad Ullah 2,3 , Tianjiu Gao 1 , Caiyun Yang 1 , Ying Han 1,4, * and Hao Wu 1,4, * | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-knowledge-on-the-minamata-convention-on-mercury.md` | Knowledge on the Minamata Convention on Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-leading-to-comparisons-with-the-common.md` | leading to comparisons with the common | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-lenge-for-mercury-removal-from-contaminated-waters-and.md` | lenge for mercury removal from contaminated waters and industrial effluents. In this | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-levels-of-rare-earth-elements-in-food-and.md` | Levels of Rare Earth Elements in Food and Human Dietary Exposure: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-long-term-effect-of-early-life-arsenic-exposure.md` | Long-Term Effect of Early-Life Arsenic Exposure on Morning Plasma Cortisol in Adults | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-low-arsenic-rice-breeding.md` | Low Arsenic Rice Breeding | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-low-mercury-content-in-seychelles.md` | Low mercury content in Seychelles | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-marine-pollution-bulletin-217-2025-118080.md` | Marine Pollution Bulletin 217 (2025) 118080 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-maternal-environmental-exposure-and-early-life.md` | Maternal environmental exposure and early-life | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-maternal-fetal-exposure-to-oncoelements-and-their-oxidative.md` | Maternal–Fetal Exposure to Oncoelements and Their Oxidative | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-mercury-and-fish-consumption-on-neurodevelopment-in.md` | mercury and fish consumption on neurodevelopment in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-mercury-induced-anxiety-disorders-using-network-toxicology.md` | Mercury-Induced Anxiety Disorders Using Network Toxicology, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-mercury-speciation-in-polar-areas.md` | mercury speciation in polar areas | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-metabolic-efficacy-of-chromium-picolinate-in-rats.md` | Metabolic Efficacy of Chromium Picolinate in Rats | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-methylmercury-chloride-exposure-affects-oocyte-maturation.md` | Methylmercury Chloride Exposure Affects Oocyte Maturation | Subject-fit review, then canonical hero |

## Batch 79: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2025-microbial-reduction-in-hexavalent-chromium-cr-vi-is.md` | Microbial reduction in hexavalent chromium (Cr(VI)) is a well characterized bioremedi- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-molecular-characterization-of-chromium-tolerant-and-gelatin-hydrolyzin.md` | Molecular characterization of chromium tolerant and gelatin hydrolyzing | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-moringa-oleifera-supplementation-for-reducing-heavy-metal.md` | Moringa oleifera Supplementation for Reducing Heavy Metal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-nanomaterials-for-removal-and-speciation-of-chromium.md` | Nanomaterials for Removal and Speciation of Chromium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-need-for-standardization-in-gastrointestinal-cancer.md` | Need for Standardization in Gastrointestinal Cancer | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-neurotoxicology-author-manuscript-available-in-pmc-2025-march.md` | Neurotoxicology. Author manuscript; available in PMC 2025 March 01. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-nutrients-in-commercial-fish-species.md` | nutrients in commercial fish species | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-of-four-tissues-with-distinct-embryological-origins-the.md` | of four tissues with distinct embryological origins- the alveolar bone, cementum, gingiva, and periodontal | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-on-day-7-6-4-mg-l-followed.md` | on day 7 (6.4 mg/L), followed by a drastic decrease, indicating high fluctuation. The control treatment (K) showed | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-phylum-candidatus-pyropristinus-was-proposed-for-the-mag.md` | phylum “Candidatus Pyropristinus” was proposed for the MAG sequence of “Candida­ | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-physicochemical-properties-heavy-metals-content-and-removal-of.md` | Physicochemical Properties, Heavy Metals Content and Removal of the Heavy Metals in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-pollutants-like-pesticides-fertilizers-fungicides-herbicides-heavy-met.md` | pollutants like pesticides, fertilizers, fungicides, herbicides, heavy metals, dyes, and other | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-prenatal-exposure-to-toxic-metals-and-early-neurodevelopmental.md` | Prenatal Exposure to Toxic Metals and Early Neurodevelopmental | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-profile-and-associated-health-risks-resulting-from-untreated.md` | profile and associated health risks resulting from untreated tannery wastewater discharges in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-promoting-health-and-sustainability-exploring-safer-alternatives.md` | Promoting health and sustainability: exploring safer alternatives | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-pyrolyzed-biochar-showed-high-cation-exchange-capacity-cec.md` | pyrolyzed biochar showed high cation exchange capacity (CEC) resulting from improved | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-reduction-of-hexavalent-chromium-by.md` | Reduction of Hexavalent Chromium by | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-removal-of-hexavalent-chromium.md` | Removal of hexavalent chromium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-retention-reduced-acrylamide-formation-and-suitability-for-gluten.md` | retention, reduced acrylamide formation, and suitability for gluten-free formulations. The | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-reused-oil-savory-snacks-public-health-toxic-vitamins.md` | Reused Oil, Savory Snacks, Public Health, Toxic vitamins. Frying is a common method for preparing many foods, but the deep-frying process can | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-review-on-the-recent-sample-preparation-methods-for.md` | REVIEW ON THE RECENT SAMPLE PREPARATION METHODS FOR THE ANALYSIS OF TOXIC HEAVY | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-richa-singh-1-holger-martin-koch-2-marike.md` | Richa Singh 1 , Holger Martin Koch 2 , Marike Kolossa-Gehring 3 and Alison Connolly 1, * | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-saima-ashraf-saima-ashraf-uskt-edu-pk-mercury.md` |  Saima Ashraf, saima.ashraf@uskt.edu.pk Mercury Burden in Blood, Hair, and Nails of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-seafood-using-bioaccessibility-correction.md` | Seafood Using Bioaccessibility Correction | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-seasonal-patterns-of-mercury-bioaccumulation-in-lobsters.md` | Seasonal patterns of mercury bioaccumulation in lobsters | Subject-fit review, then canonical hero |

## Batch 80: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2025-selenium-differentially-influences-methylmercury-retention-across.md` | Selenium Differentially Influences Methylmercury Retention across | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-setac-europe-35-th-annual-meeting.md` | SETAC EUROPE 35 TH ANNUAL MEETING | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-soluble-phosphate-concentration-while-treatments-at-350-c.md` | soluble phosphate concentration, while treatments at 350 ◦ C lead to greater phosphorus recovery in the solid | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-species-specific-mercury-speciation-in-billfishes-and-its.md` | Species-specific mercury speciation in billfishes and its | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-study-quantified-aliphatic-and-polycyclic-aromatic-hydrocarbons-pahs.md` | study quantified aliphatic and polycyclic aromatic hydrocarbons (PAHs) in Tilapia zillii, a key dietary fish species, to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-successful-integration-of-the-pcs-with-the-zro2.md` | successful integration of the PCs with the ZrO2-cellulose matrix, facilitating efficient charge transfer | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-sulfate-reduction-drives-elevated-methylmercury-formation-in-the.md` | Sulfate Reduction Drives Elevated Methylmercury Formation in the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-sunscreen-protects-skin-from-harmful-ultra-violet-uv.md` | Sunscreen protects skin from harmful Ultra Violet (UV) rays, preventing skin diseases | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-supplements-targeting-the-general-population-excluding-infants-and.md` | supplements targeting the general population excluding infants, and in total diet | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-sustainable-shrimp-feeding-digestibility-of-defatted.md` | Sustainable Shrimp Feeding: Digestibility of Defatted | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-sweetpotato-for-table-use-is-rich-in-anthocyanin.md` | sweetpotato for table use is rich in anthocyanin, which leads to some bitter taste, so it | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-testing-for-heavy-metals-in-drinking-water-collected.md` | Testing for heavy metals in drinking water collected from Dog | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-the-effects-of-forest-harvesting-on-total-and.md` | The Effects of Forest Harvesting on Total and Methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-the-icp-ms-study-on-the-release-of.md` | The ICP-MS Study on the Release of Toxic Trace Elements from | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-the-presence-of-fungal-species-fungal-loads-mycotoxins.md` | The presence of fungal species, fungal loads, mycotoxins, and toxic metals was assessed in commercial | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-the-values-of-potentially-toxic-elements-ptes-in.md` | The Values of Potentially Toxic Elements (PTEs) in Prescription | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-to-fully-engage-with-test-content-leading-to.md` | to fully engage with test content, leading to disengaged behaviors such as rapid guessing or skipping | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-toxic-elements-are-considered-a-significant-threat-to.md` | Toxic elements are considered a significant threat to public health in oil-producing coun- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-toxic-metal-content-in-deciduous-teeth-a-systematic.md` | Toxic Metal Content in Deciduous Teeth: A Systematic Review | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-toxic-metals-in-a-green.md` | Toxic Metals in a Green | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-toxicological-safety-antimicrobial-efficacy-and-sensory.md` | Toxicological Safety, Antimicrobial Efficacy, and Sensory | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-toxitarget-a-multi-omics-database-for-toxicant.md` | ToxiTaRGET: a multi-omics database for toxicant- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-tracking-chromium-evolution-on-ceria-from-particles-to.md` | Tracking Chromium Evolution on Ceria from Particles to Single | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-transformation-behavior-of-hexavalent-chromium-in-a.md` | Transformation Behavior of Hexavalent Chromium in a | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-type-original-research.md` | TYPE Original Research | Subject-fit review, then canonical hero |

## Batch 81: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2025-uncovered-numerous-instances-of-its-sensitivity-to-environmental.md` | uncovered numerous instances of its sensitivity to environmental influences; however, pinpointing specific mechanisms | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-using-big-data-mediating-effect-of-blood-heavy.md` | using Big Data – Mediating Effect of Blood Heavy Metal Concentration | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-wu-y-liu-w-and-zhu-p-2025.md` | Wu Y, Liu W and Zhu P (2025) Environmental aluminum (Al), arsenic (As), beryllium (Be), cadmium (Cd), chromium (Cr), mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2025-yield-under-arsenic-stress-in-rice.md` | yield under arsenic stress in rice | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-1-fisheries-laboratory-department-of-zoology-university-of.md` | 1 Fisheries Laboratory, Department of Zoology, University of Azad Jammu and Kashmir, King Abdullah | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-18-1-and-salmonella-enterica-16-9-strong.md` | (18.1%) and Salmonella enterica (16.9%). Strong biofilm formation was detected in 81 isolates (48.8%), particularly | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-3-title-engineered-probiotics-that-sequester-arsensite-in.md` | 3 Title: Engineered probiotics that sequester arsensite in a mouse gastrointestinal system | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-9-no-1-2026-food-systems-volume-9.md` | ПИЩЕВЫЕ СИСТЕМЫ \| Том 9 № 1 \| 2026 FOOD SYSTEMS \| Volume 9 № 1 \| 2026 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-access-metrics-more-article-recommendations-supporting-information-2.md` | ACCESS Metrics & More Article Recommendations * Supporting Information | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-against-arsenite-toxicity-by-reducing-intracellular.md` | against arsenite toxicity by reducing intracellular | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-analysis-revealed-arsenic-0-58-0-67-mg.md` | Analysis revealed arsenic (0.58-0.67 mg/L), lead (0.66-0.95 mg/L), mercury (0.10-0.14 mg/L), and E. coli (up to 1349.75 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-and-heavy-metal-content-in-parallel-cherry-pomace.md` | and heavy metal content. In parallel, cherry pomace obtained during juice processing of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-antibiotic-pollution-elevates-microbial-methylmercury-production.md` | Antibiotic Pollution Elevates Microbial Methylmercury Production | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-archives-of-environmental-contamination-and-toxicology-2026-90.md` | Archives of Environmental Contamination and Toxicology (2026) 90:15 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-arsenic-in-chinese-crayfish-speciation-analysis-cooking.md` | Arsenic in Chinese Crayfish: Speciation Analysis, Cooking- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-assessed-the-risks-and-benefits-of-selenium-se.md` | assessed the risks and beneﬁts of selenium (Se) from ﬁsh and seafood, few have examined its intake from common foods and its | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-associations-of-arsenic-exposure-and-folate.md` | Associations of arsenic exposure and folate | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-atta-rasool-eva-pertile-kater-ina-broz-ova.md` | Atta Rasool · Eva Pertile · Kateřina Brožová · Jan Halfar · Kristina Čabanová · Petra Malíková · | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-available-online-16-march-2026-arils-and-juice.md` | Available online: 16 March 2026 arils and juice; however, the peel (representing ~30–40% of the fruit | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-behaviours-e-g-fishing-bans-increases-in-recreational.md` | behaviours (e.g., fishing bans, increases in recreational hunting) (Malli et al, 2023). These | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-between-heavy-metal-exposure-in.md` | Between Heavy Metal Exposure in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-biomonitoring-of-occupational-exposure-to-mercury.md` | Biomonitoring of Occupational Exposure to Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-biotinidase-activity-inhibition-as-a-biomarker-of-effect.md` | Biotinidase Activity Inhibition as a Biomarker of Effect to Mercury: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-bmjopen-2026-116442-studies-minimising-reporting-bias-improving.md` | bmjopen-2026-116442 studies, minimising reporting bias, improving trial efficiency, the Core Outcome Measures in Effectiveness Trials | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-but-also-leads-to-the-continual-infiltration-of.md` | but also leads to the continual infiltration of illegal products into the market, posing serious health | Subject-fit review, then canonical hero |

## Batch 82: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2026-chemical-exposure-and-childhood-learning.md` | chemical exposure and childhood learning | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-chromium-ion-adsorption-in-acidic-wastewater.md` | Chromium Ion Adsorption in Acidic Wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-chromium-particulate-matter-2-5-and-cigarette.md` | chromium, particulate matter 2.5, and cigarette | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-chromium-tolerance-mechanisms-in-cosmos.md` | Chromium tolerance mechanisms in Cosmos | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-chromium-using-fusarium.md` | chromium using Fusarium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-citation-china-6-key-laboratory-of-liaoning-province.md` | CITATION China, 6 Key Laboratory of Liaoning Province on Toxic and Biological Effects of Arsenic, Shenyang, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-cite-this-chem-res-toxicol-2026-39-64.md` | Cite This: Chem. Res. Toxicol. 2026, 39, 64−78 Read Online | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-colorimetric-detection-of-arsenic-iii-and-mercury-ii.md` | Colorimetric Detection of Arsenic (III) and Mercury (II) Ions in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-cophocarpa-sendtn-under-the-stress-of-hexavalent-chromium.md` | cophocarpa Sendtn. Under the Stress of Hexavalent Chromium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-craig-t-martin-department-head.md` | Craig T. Martin, Department Head | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-de-efectos-biolo-gicos-de-contaminantes-ambientales-buenos.md` | de Efectos Biológicos de Contaminantes Ambientales, Buenos Aires 1121, Argentina; | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-departamento-de-investigacio-n-en-toxicologi-a-y.md` | Departamento de Investigación en Toxicología y Medicina Ambiental, Instituto Nacional de | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-dhealth-apple-inc-cupertino-ca-usa.md` | dHealth, Apple Inc., Cupertino, CA, USA | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-diseases-related-to-excessive-exposure-to-ultraviolet-uv.md` | diseases related to excessive exposure to ultraviolet (UV) rays. The | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-distribution-and-enrichment-of-heavy-metals-in-fine.md` | Distribution and Enrichment of Heavy Metals in Fine-Grained | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-dose-dependent-effects-of-nickel-on-skeletal-development.md` | Dose-Dependent Effects of Nickel on Skeletal Development: | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-draws-on-data-retrieved-from-the-web-of.md` | draws on data retrieved from the Web of Science, Scopus, and functional foods fortified with health-promoting ingredi- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-electricity-induced-simultaneous-in-situ-remediation-of-arsenic.md` | Electricity-Induced Simultaneous in Situ Remediation of Arsenic and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-epigenetic-mechanisms-linking-hexavalent-chromium-exposure-to.md` | Epigenetic mechanisms linking hexavalent chromium exposure to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-excessive-frequency-and-duration-of-uv-exposure-causes.md` | Excessive frequency and duration of UV exposure causes adverse effects, including | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-exposure-and-health-2026-18-14.md` | Exposure and Health (2026) 18:14 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-exposure-to-carcinogenic.md` | exposure to carcinogenic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-fish-safe-weekly-consumption-guidance.md` | Fish: Safe Weekly Consumption Guidance | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-food-gut-continuum-of-biofortified-micronutrients-influence-of.md` | Food–gut continuum of biofortified micronutrients: Influence of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-for-remediation-of-cr-vi-contaminated-hexavalent-chromium.md` | for remediation of Cr(VI) contaminated Hexavalent chromium is a highly noxious and mobile environmental pollutant | Subject-fit review, then canonical hero |

## Batch 83: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2026-from-cookbooks-to-networks-a-framework-for-comparing.md` | From Cookbooks to Networks: A Framework for Comparing | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-from-mothers-exposed-to-mixed-heavy-metals-in.md` | from Mothers Exposed to Mixed Heavy Metals in Suriname | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-fruit-consumption-as-a-gut-health-improving-strategy.md` | Fruit consumption as a gut health improving strategy to lower arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-genotoxic-and-epigenetic.md` | genotoxic and epigenetic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-gestational-arsenic-exposure-are-established-stepwise.md` | gestational arsenic exposure are established stepwise | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-glacier-melt-as-a-source-of-mercury-implications.md` | Glacier Melt as a Source of Mercury: Implications for Ecosystem | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-global-patterns-of-mercury-speciation-and-biomagnification-in.md` | Global Patterns of Mercury Speciation and Biomagnification in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-heavy-metal-tolerant-microalgae.md` | heavy metal tolerant microalgae | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-heavy-metals-persistent-organic-pollutants-and-other-contaminants.md` | heavy metals, persistent organic pollutants, and other contaminants. This review explains | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-human-health-risk-benefit-assessment-of-metal-loid.md` | Human health risk–benefit assessment of metal(loid)s in commercial fish from the Northeastern | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-hypersalinity-high-alkalinity-fluctuating-redox-conditions-and-elevate.md` | hypersalinity, high alkalinity, fluctuating redox conditions, and elevated levels of trace metals (e.g., Li, As, Mn, Mg). | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-impact-of-a-prenatal-exposure-mixture-of-metals.md` | Impact of a prenatal exposure mixture of metals on DNA | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-influence-of-the-gstp1-rs1695-polymorphism-on-mercury.md` | Influence of the GSTP1 rs1695 Polymorphism on Mercury Levels | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-integrated-assessment-of-potentially-toxic.md` | Integrated Assessment of Potentially Toxic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-international-cohort-study-evaluating-a.md` | international cohort study evaluating a | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-maria-das-grac-as-lins-branda-o-maria.md` | Maria Das Graças Lins Brandão, Maria Cristina Teixeira Braga Messias, Alberto José Cavalheiro, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-mercury-based-on-dna-templated-gold-nanoclusters.md` | Mercury Based on DNA-Templated Gold Nanoclusters | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-mercury-induced-oxidative-stress-and.md` | Mercury-Induced Oxidative Stress and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-mercury-speciation-in-fish-tissue-and-methylmercury-risk.md` | MERCURY SPECIATION IN FISH TISSUE AND METHYLMERCURY RISK ASSESSMENT FOR | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-molecular-aspects-of-methylcadmium-toxicity-effects-on-the.md` | Molecular Aspects of Methylcadmium Toxicity: Effects on the H2O2 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-muhammad-shoaib-rana-gel-alleviates-chromium.md` | Muhammad Shoaib Rana, gel alleviates chromium | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-objectives-we-conducted-a-secondary-analysis-of-a.md` | Objectives: We conducted a secondary analysis of a randomized controlled trial where 250 infants were randomly assigned to receive either a protein- | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-ocean-productivity-and-trophic-structure-drive-patterns-of.md` | Ocean productivity and trophic structure drive patterns of mercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-of-lower-arity-balanced-designs-for-which-explicit.md` | of lower-arity balanced designs, for which explicit formulas for replication numbers, | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-of-the-world-including-east-asia-simultaneously-environmental.md` | of the world, including East Asia. Simultaneously, environmental pollutants are also an escalating problem in these regions. | Subject-fit review, then canonical hero |

## Batch 84: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2026-optimization-of-a-method-for-collecting-infant-and.md` | Optimization of a method for collecting infant and toddler urine | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-oral-metal-immunotoxicity-in.md` | Oral metal immunotoxicity in | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-plete-block-design-experiment-to-evaluate-the-effects.md` | plete block design experiment to evaluate the effects of induced changes in intestinal permeability on immune respon­ | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-pollutant-exposure-shapes-mitochondrial-bioenergetics-in-a-wild.md` | Pollutant Exposure Shapes Mitochondrial Bioenergetics in a Wild | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-polytetrafluoroethylene-microplastic-properties-pollution-toxicity.md` | Polytetrafluoroethylene microplastic properties, pollution, toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-preconception-exposures-of.md` | Preconception exposures of | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-prenatally-exposed-to-methylmercury.md` | prenatally exposed to methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-progress-in-color-colorants-coating-19-2026-47.md` | Progress in Color Colorants Coating 19 (2026), 47-65 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-published-18-may-2026-malignancy-many-patients-continue.md` | PUBLISHED 18 May 2026 malignancy. Many patients continue to have poor outcomes even after decades | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-published-21-april-2026-introduction-the-occurrence-and.md` | PUBLISHED 21 April 2026 Introduction: The occurrence and abundance of heavy metal resistance genes | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-pyrolysis-temperature-governs-heavy-metal-immobilization.md` | Pyrolysis temperature governs heavy metal immobilization | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-reduction-of-hexavalent-chromium-from-aqueous.md` | reduction of hexavalent chromium from aqueous | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-removal-of-hexavalent-chromium-by-facultative-anaerobic-strains.md` | Removal of hexavalent chromium by facultative anaerobic strains | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-revised-17-3-2026-ketchup-focusing-on-formulation.md` | Revised 17. 3. 2026 ketchup, focusing on formulation strategy, technological processing, and bioactive enrichment. Five formulations (S1–S5) were developed | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-rhizosphere-processes-for-heavy-metal-remediation.md` | Rhizosphere Processes for Heavy Metal Remediation | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-seasonal-variability-in-marine-atmospheric-mercury-isotope.md` | Seasonal Variability in Marine Atmospheric Mercury Isotope | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-shrimp-penaeus-semisulcatus-decapoda-penaeidae-from-the.md` | Shrimp (Penaeus semisulcatus, Decapoda:Penaeidae) from the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-the-effects-of-chromium-yeast-on-lipid-metabolism.md` | The effects of chromium yeast on lipid metabolism, antioxidant status, and | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-the-hazards-of-metal-exposure-mediated-by-crops.md` | The hazards of metal exposure mediated by crops to | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-the-human-body-either-directly-or-indirectly-the.md` | the human body, either directly or indirectly. The excessive usage of heavy metals, like Cr(VI), Pb(II), As(II), | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-this-study-analysed-urinary-mercury-u-hg-concentrations.md` | This study analysed urinary mercury (U-Hg) concentrations in 1412 Slovenian children across four human | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-threat-to-the-environment-due-to-their-toxicological.md` | threat to the environment due to their toxicological profile, nonbiodegradability, and potential for | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-tissue-specific-mercury-bioaccumulation-and-probabilistic.md` | Tissue-Specific Mercury Bioaccumulation and Probabilistic | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-to-cr-vi-exposure-through-high-throughput.md` | to Cr(VI) Exposure Through High-Throughput | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-to-heavy-metal-exposure-of-children-around-smelting.md` | to Heavy Metal Exposure of Children Around Smelting Area | Subject-fit review, then canonical hero |

## Batch 85: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/authors2026-total-mercury-thg-methylmercury-mehg-cad-cant-declining.md` | total mercury (THg), methylmercury (MeHg), cad- cant declining trends were found for Pb (average | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-toxicity-assessment-in-c-elegans.md` | Toxicity Assessment in C. elegans | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-toxicity-of-methylmercury.md` | toxicity of methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-toxicological-sciences-2026-209-6-kfag055.md` | Toxicological Sciences, 2026, 209(6), kfag055 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-toxicology-reports-16-2026-102229.md` | Toxicology Reports 16 (2026) 102229 | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-under-multi-metal-exposure.md` | under multi-metal exposure | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-unethical-issues-connecting-to-this-publication-the-authors.md` | unethical issues connecting to this publication. The authors also declare that they are not withholding any information that is misleading to the | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-upcycling-apple-and-carrot-pomace-into-fortified-food.md` | Upcycling Apple and Carrot Pomace into Fortified Food | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-when-citing-please-reference-the-published-version.md` | When citing, please reference the published version. | Subject-fit review, then canonical hero |
| `wiki/sources/authors2026-zn-silver-ag-cadmium-cd-mercury-hg-lead.md` | (Zn), silver (Ag), cadmium (Cd), mercury (Hg), lead (Pb), and selenium (Se) in pancreatic | Subject-fit review, then canonical hero |
| `wiki/sources/auzier-guimaraes2025-mercury-tapajos-fish.md` | Systematic review and spatiotemporal assessment of mercury concentration in fish from the Tapajós River Basin: implications for environmental and human health | Subject-fit review, then canonical hero |
| `wiki/sources/awata2011-nhanes-asian-dietary-metals-biomarker.md` | Association of Dietary Intake and Biomarker Levels of Arsenic, Cadmium, Lead, and Mercury among Asian Populations in the United States: NHANES 2011–2012 | Subject-fit review, then canonical hero |
| `wiki/sources/azevedo2016-cadmium-application-in-tomato-nutritional-imbalance.md` | Cadmium Application in Tomato: Nutritional Imbalance | Subject-fit review, then canonical hero |
| `wiki/sources/aziz2021-gracilaria-seaweed-bangladesh.md` | Potential of Gracilaria tenuistipitata var. liui grown in Nuniachara, Cox's Bazar, Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/azzaya2017-kharaa-river-basin-arsenic.md` | Arsenic occurrence in water bodies in Kharaa river basin | Subject-fit review, then canonical hero |
| `wiki/sources/babayo2026-heavy-metals-energy-drinks-nigeria.md` | Contamination Factor, Metal Pollution Index and Estimated Daily Intake of Heavy Metals in Some Selected Energy Drinks in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/babeker2025-heavy-metals-microbial-sudanese-soft-drinks.md` | Assessment of Heavy Metals Concentration and Microbial Profile in Sudanese Carbonated Soft Drinks and Beverages | Subject-fit review, then canonical hero |
| `wiki/sources/badeenezhad2021-shiraz-drinking-water-hra.md` | Comprehensive health risk analysis of heavy metal pollution using water quality indices and Monte Carlo simulation in R software | Subject-fit review, then canonical hero |
| `wiki/sources/bae2000-synthetic-phytochelatin-bacterial-cd-bioaccumulation.md` | Enhanced Bioaccumulation of Heavy Metals by Bacterial Cells Displaying Synthetic Phytochelatins | Subject-fit review, then canonical hero |
| `wiki/sources/bae2018-absorbent-hygiene-pads-safety-review.md` | Safety Evaluation of Absorbent Hygiene Pads: A Review on Assessment Framework and Test Methods | Subject-fit review, then canonical hero |
| `wiki/sources/bae2023-tuna-heavy-metals-korea.md` | Heavy metal concentrations in commercial tuna products in Korea and assessment of health risks | Subject-fit review, then canonical hero |
| `wiki/sources/bafs2017-pns194-contaminants-food-feed.md` | PNS/BAFS 194:2017 General Standard for Contaminants and Toxins in Food and Feed | Subject-fit review, then canonical hero |
| `wiki/sources/bahrouna2025-zawia-spices-metals.md` | Evaluation of Heavy Metals Contents in Spices Available on Zawia City`s Markets | Subject-fit review, then canonical hero |
| `wiki/sources/bai2022-arsenic-coal-burning-shaanxi.md` | Investigation Into Environmental Selenium and Arsenic Levels and Arseniasis Prevalence in an Arsenic-Affected Coal-Burning Area | Subject-fit review, then canonical hero |
| `wiki/sources/bair2022-infant-toddler-food-heavy-metals-policy.md` | A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy | Subject-fit review, then canonical hero |

## Batch 86: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/bakhshalizadeh2023-mullet-ree-trace-caspian.md` | Bioaccumulation of rare earth elements and trace elements in different tissues of the golden grey mullet (Chelon auratus) in the southern Caspian Sea | Subject-fit review, then canonical hero |
| `wiki/sources/bakhshalizadeh2024-caspian-sturgeon-metals.md` | Trace and heavy metal concentrations in pectoral fin of Acipenser stellatus (stellate sturgeon) from the Caspian Sea | Subject-fit review, then canonical hero |
| `wiki/sources/baki2018-st-martin-seafood-metals.md` | Concentration of heavy metals in seafood (fishes, shrimp, lobster and crabs) and human health assessment in Saint Martin Island, Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/bakyayita2019-lake-victoria-groundwater-metals.md` | Assessment of Levels, Speciation, and Toxicity of Trace Metal Contaminants in Selected Shallow Groundwater Sources, Surface Runoff, Wastewater, and Surface Water from Designated Streams in Lake Victoria Basin, Uganda | Subject-fit review, then canonical hero |
| `wiki/sources/balali-mood-2021-toxic-mechanisms-five-heavy-metals.md` | Toxic Mechanisms of Five Heavy Metals: Mercury, Lead, Chromium, Cadmium, and Arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/balalimood2018-fruit-juice-mashhad-pb-as.md` | Arsenic and Lead Contaminations in Commercial Fruit Juices of Markets in Mashhad, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/balbo2022-bread-contaminants-poland.md` | Dietary exposure and risk characterisation of multiple chemical contaminants in rye-wheat bread marketed in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/balogun2024-body-creams-delta-nigeria.md` | Heavy Metals Concentration In Body Creams Commonly Used In Delta State Tertiary Institutions And Their Implications For Human Health | Subject-fit review, then canonical hero |
| `wiki/sources/balzani2026-fish-metals-dalyan-lake.md` | Metals and Metalloids Accumulation and Biomagnification in Three Commercially Important Fishes from a Turkish Brackish Lake | Subject-fit review, then canonical hero |
| `wiki/sources/bambara2023-loumbila-vegetables-heavy-metals.md` | Evaluation of the Metallic Contamination of Market Garden Products around the Loumbila Dam | Subject-fit review, then canonical hero |
| `wiki/sources/bandara2010-cadmium-rice-sri-lanka-crf.md` | Chronic Renal Failure in Sri Lanka Caused by Elevated Dietary Cadmium: Trojan Horse of the Green Revolution | Subject-fit review, then canonical hero |
| `wiki/sources/bandara2020-protein-powder-heavy-metals.md` | A human health risk assessment of heavy metal ingestion among consumers of protein powder supplements | Subject-fit review, then canonical hero |
| `wiki/sources/bandara2025-bael-herbal-tea-minerals.md` | Formulation of Standardized Herbal Tea from Whole Flowers, Stamens and Immature Fruits of Bael (Aegle marmelos (L.) Corrêa) | Subject-fit review, then canonical hero |
| `wiki/sources/bao2024-iron-homeostasis-intestinal-immunity-gut-microbiota.md` | Mechanism of Iron Ion Homeostasis in Intestinal Immunity and Gut Microbiota Remodeling | Subject-fit review, then canonical hero |
| `wiki/sources/bao2024-sp-icp-ms-nps-mussels.md` | Single-particle ICP-MS characterisation of metal nanoparticles in mussels | Subject-fit review, then canonical hero |
| `wiki/sources/baptista2024-wild-boar-metals-spain.md` | Heavy metals and metalloids in wild boars (Sus Scrofa) - a silent but serious public health hazard | Subject-fit review, then canonical hero |
| `wiki/sources/barabash2025-sunscreen-tio2-zno-release-spicp-tofms.md` | Release of TiO2 and ZnO nanoparticles from sunscreens into natural waters: detection and discrimination from natural particles using SP ICP-ToF-MS | Subject-fit review, then canonical hero |
| `wiki/sources/barber2025-baby-food-elements-us.md` | Toxic elements in baby and young children's foods in the US and correlation to ingredients | Subject-fit review, then canonical hero |
| `wiki/sources/barborakova2024-black-soldier-fly-larvae-metals.md` | Safety of black soldier fly larvae: microbial and heavy metal risks | Subject-fit review, then canonical hero |
| `wiki/sources/barbosaa2018-toxicology-elsevier-after-peer-review-to-access-the.md` | Toxicology © Elsevier after peer review. To access the final edited and published | Subject-fit review, then canonical hero |
| `wiki/sources/barca2023-a-comprehensive-review-on-infant.md` | A comprehensive review on infant | Subject-fit review, then canonical hero |
| `wiki/sources/barchiesi2020-shellfish-metals-central-italy.md` | Heavy Metals Contamination in Shellfish: Benefit-Risk Evaluation in Central Italy | Subject-fit review, then canonical hero |
| `wiki/sources/barkodia2020-jhansi-detergent-heavy-metals.md` | Analysis of heavy metals in Detergent Sample of Jhansi, India | Subject-fit review, then canonical hero |
| `wiki/sources/barquero2024-mercury-bass-almaden-spain.md` | A preliminary assessment of mercury, methylmercury and other potentially toxic elements in largemouth bass (Micropterus salmoides) from the Almadén mining district | Subject-fit review, then canonical hero |
| `wiki/sources/barraza2019-ecuador-cacao-cadmium-isotope.md` | Cadmium isotope fractionation in the soil–cacao system in Ecuador: a pilot study | Subject-fit review, then canonical hero |

## Batch 87: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/barthwal2008-medicinal-plants-heavy-metals-lucknow.md` | Heavy Metal Accumulation in Medicinal Plants Collected from Environmentally Different Sites | Subject-fit review, then canonical hero |
| `wiki/sources/basalamah2018-lead-vitamin-d-rats.md` | Vitamin D alleviates lead induced renal and testicular injuries by immunomodulatory and antioxidant mechanisms in rats | Subject-fit review, then canonical hero |
| `wiki/sources/bashir2025-heavy-metals-cosmetics-kashmir.md` | Heavy metal in cosmetics and its risk to future generation in remote area of Azad Jammu and Kashmir Trarkhel District Sudhnoti | Subject-fit review, then canonical hero |
| `wiki/sources/bashkin2021-vegetable-risk-review.md` | Assessment of the Risk of Heavy Metals Accumulation in Vegetable Crops | Subject-fit review, then canonical hero |
| `wiki/sources/basketter2001-chromium-allergic-threshold.md` | Investigation of the threshold for allergic reactivity to chromium | Subject-fit review, then canonical hero |
| `wiki/sources/bassioni2012-aluminum-foil-meat-cooking-uae.md` | Risk Assessment of Using Aluminum Foil in Food Preparation | Subject-fit review, then canonical hero |
| `wiki/sources/bauer2023-brazilian-sardine-metal-risk.md` | Assessment of Human Health Risk of Metal(Loid) Content in Brazilian Sardine Along the Southwestern Atlantic | Subject-fit review, then canonical hero |
| `wiki/sources/bazie2022-burkina-faso-foodstuffs-metals.md` | Evaluation of metallic trace elements contents in some major raw foodstuffs in Burkina Faso and health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/bazzaz2023-poultry-products-erbil-heavy-metals.md` | Determination of some heavy metals resides in different types of poultry production | Subject-fit review, then canonical hero |
| `wiki/sources/bcpp2017-ca-sb258-factsheet.md` | SB 258 (Lara): The Cleaning Product Right to Know Act of 2017 — factsheet | Subject-fit review, then canonical hero |
| `wiki/sources/bedoya-perales2023-moquegua-peru-mining-dataset.md` | Dataset of metals and metalloids in food crops and soils sampled across the mining region of Moquegua in Peru | Subject-fit review, then canonical hero |
| `wiki/sources/bedrossiantz2025-seabass-cadmium-ciprofloxacin-behavior.md` | Neurobehavioral Impairments in the Sea Bass (Dicentrarchus labrax) Chronically Exposed to Cadmium and Ciprofloxacin Contaminated Diets | Subject-fit review, then canonical hero |
| `wiki/sources/beene2022-arsenic-mass-balance-rice-water.md` | A mass-balance approach to evaluate arsenic intake and excretion in different populations | Subject-fit review, then canonical hero |
| `wiki/sources/begday2026-plant-milk-heavy-metal-safety.md` | Integral assessment of the environmental safety of plant-based milk alternatives based on heavy metal analysis | Subject-fit review, then canonical hero |
| `wiki/sources/begum2023-rawal-lake-water-quality.md` | Combined multivariate statistical techniques and Water Quality Index (WQI) to evaluate spatial variation in water quality | Subject-fit review, then canonical hero |
| `wiki/sources/begum2024-rice-fertilization-arsenic.md` | Fertilization Enhances Grain Inorganic Arsenic Assimilation in Rice | Subject-fit review, then canonical hero |
| `wiki/sources/bei2025-pteris-arsenic-rhizosphere.md` | Rhizosphere Microbiome-Root Exudate Synergy in Pteris vittata: Coordinated Arsenic Speciation and Multielement Metabolic Coupling Drive Hyperaccumulation Efficiency | Subject-fit review, then canonical hero |
| `wiki/sources/bekalu2025-black-cumin-heavy-metals-ethiopia.md` | Analysis of Nigella sativa L. (Black Cumin) seeds for levels of heavy metals using FAAS: geospatial profiling and regional safety implications | Subject-fit review, then canonical hero |
| `wiki/sources/bektashi2021-honey-metals-sugars-balkans.md` | Characterization of honey: determination of metal and sugar content | Subject-fit review, then canonical hero |
| `wiki/sources/belabid2025-canned-tomato-pineapple-trace-elements.md` | Evaluation of trace element contents in canned tomato paste and canned pineapple marketed in Algeria | Subject-fit review, then canonical hero |
| `wiki/sources/belew2024-peanuts-date-palm-metals.md` | Heavy metals concentration and health risk assessment in peanut and date palm from Jigjiga City Markets, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/belgian-lead-factsheet-2024.md` | Factsheet Metaal — Lood (Lead Factsheet) | Subject-fit review, then canonical hero |
| `wiki/sources/beltcheva2025-clinoptilolite-cd-mice-detox.md` | Oral Supplementation with Modified Natural Clinoptilolite Protects Against Cadmium Toxicity in ICR (CD-1) Mice | Subject-fit review, then canonical hero |
| `wiki/sources/benabbes2021-morocco-hair-dyes-pb-cd.md` | Determination of Lead and Cadmium in Synthetic and Natural Hair Dyes in Morocco Using Differential Pulse Polarography | Subject-fit review, then canonical hero |
| `wiki/sources/benjamin2023-canned-fish-ghana.md` | Levels of Heavy Metals in Selected Canned Fish on Cape Coast Market, Central Region, Ghana | Subject-fit review, then canonical hero |

## Batch 88: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/benoy1971-tin-toxicity-canned-fruit-juices.md` | The Toxicity of Tin in Canned Fruit Juices and Solid Foods | Subject-fit review, then canonical hero |
| `wiki/sources/berber2024-crayfish-metal-content-turkey.md` | Metal content and fatty acid profiles in narrow-clawed crayfish (Pontastacus leptodactylus) from Atikhisar Dam Lake, Turkey: seasonal variation and health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/berego2023-sidama-coffee-metals.md` | The contents of essential and toxic metals in coffee beans and soil in Dale Woreda, Sidama Regional State, Southern Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/berg1994-diaper-dermatitis-wetness-ph.md` | Association of Skin Wetness and pH With Diaper Dermatitis | Subject-fit review, then canonical hero |
| `wiki/sources/bergerritchie2013-hot-sauce-lead.md` | An evaluation of lead concentrations in imported hot sauces | Subject-fit review, then canonical hero |
| `wiki/sources/berky2022-wildgame-lead-peru.md` | Risk of lead exposure from wild game consumption from cross-sectional studies in Madre de Dios, Peru | Subject-fit review, then canonical hero |
| `wiki/sources/bernard2022-anses-diaper-risk-reevaluation.md` | Dermal Exposure to Hazardous Chemicals in Baby Diapers: A Re-Evaluation of the Quantitative Health Risk Assessment Conducted by The French Agency for Food, Environmental and Occupational Health and Safety (ANSES) | Subject-fit review, then canonical hero |
| `wiki/sources/beyene2023-australian-fires-breast-milk.md` | The impact of the 2019/2020 Australian landscape fires on infant feeding and contaminants in breast milk in women with asthma | Subject-fit review, then canonical hero |
| `wiki/sources/bezerra2026-mercury-contamination-and-human-exposure.md` | Mercury contamination and human exposure | Subject-fit review, then canonical hero |
| `wiki/sources/bezrodnykh2023-crayfish-chitosan-residual-metals.md` | A Walkway from Crayfish to Oligochitosan | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2009-lead-cadmium-toys.md` | Lead and cadmium do not belong in toys | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2012-nickel-fragrances-toys-opinion.md` | Contact allergens in toys: Health assessment of nickel and fragrances | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2018-infant-food-cadmium-lead.md` | EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2019-diaper-substances-anses-commentary.md` | Preliminary estimation of undesired substances in diapers | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2020-aluminium-faq-consumer-products.md` | FAQs about aluminium in food and products intended for consumers | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2022-nickel-dietary-intake-germany-meal.md` | Nickel: estimate of long-term intake via food based on the BfR MEAL Study | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2023-meal-study-final-report-germany.md` | What's in your food — BfR MEAL Study Final Report (Germany's first Total Diet Study) | Subject-fit review, then canonical hero |
| `wiki/sources/bfr2024-methylmercury-fish-seafood-germany.md` | Methylmercury in fish and seafood – health risk assessment of new data from the BfR MEAL study | Subject-fit review, then canonical hero |
| `wiki/sources/bhat2022-brick-kilns-milk-rice-heavy-metals.md` | Long-Term Operation of Brick-Kilns Led Heavy Metal Contamination of Soil-Plant-Animal Continuum in Kashmir Himalayas | Subject-fit review, then canonical hero |
| `wiki/sources/bhattacharya2024-rice-beer-assam-metals.md` | Metal Contents in Traditional Alcoholic Rice Beers Prepared by Rabha and Sonowal Kachari Tribes of Assam, India | Subject-fit review, then canonical hero |
| `wiki/sources/bhoyroo2015-scombrids-heavy-metals-mauritius.md` | Detection of heavy metals bio-accumulation in scombrids for the determination of possible health hazard | Subject-fit review, then canonical hero |
| `wiki/sources/bhunia2023-open-access-potential-toxic-levels-of-cyanide.md` | OPEN ACCESS potential toxic levels of cyanide | Subject-fit review, then canonical hero |
| `wiki/sources/bielecka2021-nuts-toxic-elements-poland.md` | Assessment of the Safe Consumption of Nuts in Terms of the Content of Toxic Elements with Chemometric Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/biomonitoring2023-open-access-disrupting-chemicals-on.md` | OPEN ACCESS disrupting chemicals on | Subject-fit review, then canonical hero |
| `wiki/sources/biondicfuckar2023-coffee-silverskin-metals.md` | Coffee Silver Skin-Health Safety, Nutritional Value, and Microwave Extraction of Proteins | Subject-fit review, then canonical hero |

## Batch 89: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/birsan2023-cosmetics-mercury.md` | Mercury exposure in cosmetics and human health risk | Subject-fit review, then canonical hero |
| `wiki/sources/bis2004-is-3959-skin-powders.md` | IS 3959:2004 Skin Powder - Specification | Subject-fit review, then canonical hero |
| `wiki/sources/bis2004-is-6608-skin-creams.md` | IS 6608:2004 Skin Creams - Specification | Subject-fit review, then canonical hero |
| `wiki/sources/bishop2004-amyloid-metal-paradox.md` | The Amyloid Paradox: Amyloid-β-Metal Complexes can be Neurotoxic and Neuroprotective | Subject-fit review, then canonical hero |
| `wiki/sources/bist2022-impact-of-heavy-metal-toxicity-on-the-gut.md` | Impact of Heavy Metal Toxicity on the Gut Microbiota and Its Relationship with Metabolites and Future Probiotics Strategy: a Review | Subject-fit review, then canonical hero |
| `wiki/sources/biver2021-antimony-release-polyester-artificial-sweat.md` | Antimony release from polyester textiles by artificial sweat solutions: A call for a standardized procedure | Subject-fit review, then canonical hero |
| `wiki/sources/bjerregaard2023-mercury-mussels-denmark.md` | In Search of Mercury Lost from Sediments in a Previously Contaminated Coastal Area, Harboøre Tange, Denmark | Subject-fit review, then canonical hero |
| `wiki/sources/blair2017-us-peanut-heavy-metals.md` | Evaluating Concentrations of Pesticides and Heavy Metals in the U.S. Peanut Crop in the Presence of Detection Limits | Subject-fit review, then canonical hero |
| `wiki/sources/blanchfield2021-mercury-contaminated-fish-populations.md` | mercury-contaminated fish populations | Subject-fit review, then canonical hero |
| `wiki/sources/blanco2023-mercury-fish-valencia.md` | Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors | Subject-fit review, then canonical hero |
| `wiki/sources/blechinger2026-methylmercury-neurodevelopment-trvs.md` | Neurodevelopmental effects of methylmercury (MeHg): a review of epidemiological points of departure (PoDs), toxicological reference values (TRVs), and key uncertainties in human health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/blommaert2022-cd-cacao-translocation.md` | Cadmium translocation from soil to cacao bean: Isotope fractionation as a tool to assess plant compartmentalization and uptake mechanisms | Subject-fit review, then canonical hero |
| `wiki/sources/blunden2003-tin-canned-food-review.md` | Tin in canned food: a review and understanding of occurrence and effect | Subject-fit review, then canonical hero |
| `wiki/sources/bodur2023-olive-oil-inorganic-arsenic-speciation.md` | Spray assisted preconcentration method combined with HPLC - Continuous flow hydride generation - FAAS for inorganic arsenic speciation in olive oil samples | Subject-fit review, then canonical hero |
| `wiki/sources/bogdanandreescu2026-toward-smart-salivary-diagnostics-a-comprehensive-review-of.md` | Toward Smart Salivary Diagnostics: A Comprehensive Review of Heavy Metal Biomarkers and Digital Risk Modeling | Subject-fit review, then canonical hero |
| `wiki/sources/boisteanu2024-wild-boar-romania-metals.md` | Essential and toxic elements analysis of wild boar tissues from north-eastern Romania and health risk implications | Subject-fit review, then canonical hero |
| `wiki/sources/boiteau2016-geotraces-nickel-copper-ligands.md` | Structural Characterization of Natural Nickel and Copper Binding Ligands along the US GEOTRACES Eastern Pacific Zonal Transect | Subject-fit review, then canonical hero |
| `wiki/sources/bolan2017-rice-complementary-medicines-arsenic.md` | Comparative analysis of speciation and bioaccessibility of arsenic in rice grains and complementary medicines | Subject-fit review, then canonical hero |
| `wiki/sources/bondareva2024-sturgeon-arsenic-processing.md` | Potential transformations of arsenic forms in fish during cooking processing: a case study of Russian sturgeon | Subject-fit review, then canonical hero |
| `wiki/sources/boostani2025-biochar-bentonite-cadmium-immobilization.md` | Comparative effectiveness of pristine and H3PO4-modified biochar in combination with bentonite to immobilize cadmium in a calcareous soil | Subject-fit review, then canonical hero |
| `wiki/sources/bora2015-vineyard-wine-heavy-metals-romania.md` | Vertical distribution and analysis of micro-, macroelements and heavy metals in the system soil-grapevine-wine in vineyard from North-West Romania | Subject-fit review, then canonical hero |
| `wiki/sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing.md` | Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania | Subject-fit review, then canonical hero |
| `wiki/sources/borca2025-antimony-speciation-plastics-textiles.md` | A step towards understanding plastic complexity: Antimony speciation in consumer plastics and synthetic textiles revealed by XAS | Subject-fit review, then canonical hero |
| `wiki/sources/boreiko2020-antimony-pulmonary-review.md` | Antimony and its compounds: Health impacts related to pulmonary toxicity, cancer, and genotoxicity | Subject-fit review, then canonical hero |
| `wiki/sources/borghini2020-endometriosis-ibs-nickel-low-diet-pilot.md` | Irritable Bowel Syndrome-Like Disorders in Endometriosis: Prevalence of Nickel Sensitivity and Effects of a Low-Nickel Diet. An Open-Label Pilot Study | Subject-fit review, then canonical hero |

## Batch 90: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/bosnia2022-pravilnik-mdk-contaminants.md` | Pravilnik o maksimalno dozvoljenim količinama određenih kontaminanata u hrani | Subject-fit review, then canonical hero |
| `wiki/sources/bousquet2024-lead-drinking-water-university.md` | Identifying and Responding to Lead in Drinking Water in a University Setting | Subject-fit review, then canonical hero |
| `wiki/sources/boyapati2013-mi-baby-wipes-hand-dermatitis.md` | Allergic contact dermatitis to methylisothiazolinone: exposure from baby wipes causing hand dermatitis | Subject-fit review, then canonical hero |
| `wiki/sources/bozkurt2025-portable-voltammetric-lead-drinking-water.md` | Portable Voltammetric Lead Sensor (Electronic Tongue) for Drinking Water Monitoring | Subject-fit review, then canonical hero |
| `wiki/sources/bpom2024-cosmetic-contaminant-limits.md` | Peraturan Badan Pengawas Obat dan Makanan Nomor 16 Tahun 2024 tentang Batas Cemaran dalam Kosmetik | Subject-fit review, then canonical hero |
| `wiki/sources/braeuer2022-mercury-selenium-mushrooms-la-icpms.md` | Quantitative mapping of mercury and selenium in mushroom fruit bodies with laser ablation–inductively coupled plasma-mass spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/braga2013-snas-nosologic-framework-bramani-diet.md` | Systemic Nickel Allergy Syndrome: Nosologic Framework and Usefulness of Diet Regimen for Diagnosis | Subject-fit review, then canonical hero |
| `wiki/sources/bralatei2017-seaweed-inorganic-arsenic-field-method.md` | A field deployable method for a rapid screening analysis of inorganic arsenic in seaweed | Subject-fit review, then canonical hero |
| `wiki/sources/bramwell2022-urban-garden-produce-lead.md` | Determinants of blood and saliva lead concentrations in adult gardeners on urban agricultural sites | Subject-fit review, then canonical hero |
| `wiki/sources/bravo2024-cadmium-cacao-arauca.md` | Cadmium in cacao crops and artisanal chocolates in the Arauca Department, Colombia | Subject-fit review, then canonical hero |
| `wiki/sources/breysse2022-coordinated-federal-efforts-lead.md` | Targeting Coordinated Federal Efforts to Address Persistent Hazardous Exposures to Lead | Subject-fit review, then canonical hero |
| `wiki/sources/brigden2013-greenpeace-polyester-antimony.md` | Hazardous chemicals in branded textile products, antimony results | Subject-fit review, then canonical hero |
| `wiki/sources/brima2025-african-foods-uk-metals.md` | Assessment of Human Health Risk Based on Analysis of Potentially Toxic Elements in African Foods Sold in the UK Market | Subject-fit review, then canonical hero |
| `wiki/sources/brima2026-drinking-water-elements.md` | Analysis of essential and toxic elements in tap and bottled water from the UK and its comparison with literature data for drinking water from African countries: implications for human health | Subject-fit review, then canonical hero |
| `wiki/sources/brizio2013-italian-food-supplements-metals.md` | Heavy metals occurrence in Italian food supplements | Subject-fit review, then canonical hero |
| `wiki/sources/brodziak-dopierala2023-mercury-fish-poland.md` | Analysis of the Mercury Content in Fish for Human Consumption in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/brodziak-dopierala2023-mercury-oil-supplements-poland.md` | Mercury Exposure from the Consumption of Dietary Supplements Containing Vegetable, Cod Liver, and Shark Liver Oils | Subject-fit review, then canonical hero |
| `wiki/sources/brodziak-dopierala2024-hg-supplements-poland.md` | Mercury Levels in Selected Medicines and Dietary Supplements in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/brombach2017-methylmercury-european-commercial-rice.md` | Methylmercury varies more than one order of magnitude in commercial European rice | Subject-fit review, then canonical hero |
| `wiki/sources/brooke1981-fish-shellfish-inorganic-arsenic.md` | Determination of Total Inorganic Arsenic in Fish, Shellfish and Fish Products | Subject-fit review, then canonical hero |
| `wiki/sources/brown2022-patna-spice-lead.md` | Prevalence of elevated blood lead levels and risk factors among children living in Patna, Bihar, India 2020 | Subject-fit review, then canonical hero |
| `wiki/sources/brum2025-flaxseeds-ptes-organic-conventional.md` | Assessment of Essential Elements and Potentially Toxic Elements (PTEs) in Organic and Conventional Flaxseeds: Implications for Dietary Exposure and Food Safety | Subject-fit review, then canonical hero |
| `wiki/sources/bruno2024-metals-mussels-clams-faro-lake-sicily.md` | Mineral composition in mussel Mytilus galloprovincialis and clam Tapes decussatus from Faro Lake of Messina: risk assessment for human health | Subject-fit review, then canonical hero |
| `wiki/sources/brzezicha-cirocka2016-edible-wild-mushrooms-poland.md` | Bio- and toxic elements in edible wild mushrooms from two regions of potentially different environmental conditions in eastern Poland | Subject-fit review, then canonical hero |
| `wiki/sources/brzezicha-cirocka2016-green-tea-geographic-origins.md` | Monitoring of essential and heavy metals in green tea from different geographical origins | Subject-fit review, then canonical hero |

## Batch 91: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/brzezinska-rojek2023-beetroot-supplements-safety.md` | Evaluation of the Safety and Potential Benefits of Beetroot-Based Dietary Supplements According to Their Elemental Composition | Subject-fit review, then canonical hero |
| `wiki/sources/bsti2019-bds-1382-skin-creams.md` | BDS 1382:2019 Skin Creams - Specification | Subject-fit review, then canonical hero |
| `wiki/sources/bua2016-aromatic-spices-metals-italy.md` | Heavy metals in aromatic spices by inductively coupled plasma-mass spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/buba2020-domestic-pig-metals-nigeria.md` | Determination of Some Heavy Metals in Kidney, Liver and Muscle of Domestic Pig (Sus scrofa domesticus) in Guyuk Metropolis, Adamawa State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/buchet1983-belgium-duplicate-meal-metals.md` | Oral daily intake of cadmium, lead, manganese, copper, chromium, mercury, calcium, zinc and arsenic in Belgium: a duplicate meal study | Subject-fit review, then canonical hero |
| `wiki/sources/buculei2012-tin-iron-migration-canned-food-romania.md` | Study regarding the tin and iron migration from metallic cans into foodstuff during storage | Subject-fit review, then canonical hero |
| `wiki/sources/buffalo2018-policies-to-reduce-lead-exposure-lessons-from.md` | Policies to Reduce Lead Exposure: Lessons from | Subject-fit review, then canonical hero |
| `wiki/sources/bugarin2025-cocoa-pod-husk-byproducts-review.md` | Integration of Emerging and Conventional Technologies for Obtaining By-Products from Cocoa Pod Husk and Their Application | Subject-fit review, then canonical hero |
| `wiki/sources/bulduk2020-vicia-faba-elements.md` | Determination of trace element levels in flowers and leaves of vicia faba by ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/bunu2023-heavy-metals-energy-drinks-bayelsa.md` | Heavy Metals Quantification and Correlative Carcinogenic-Risks Evaluation in Selected Energy Drinks Sold in Bayelsa State Using Atomic Absorption Spectroscopic Technique | Subject-fit review, then canonical hero |
| `wiki/sources/bunu2023-heavy-metals-energy-drinks-kogi.md` | Atomic Absorption Spectroscopic (AAS) Analysis of Heavy Metals and Health Risks Assessment of some Common Energy Drinks | Subject-fit review, then canonical hero |
| `wiki/sources/burden2019-honey-bee-metal-feeding-behavior.md` | Acute sublethal exposure to toxic heavy metals alters honey bee (Apis mellifera) feeding behavior | Subject-fit review, then canonical hero |
| `wiki/sources/burgon2023-cocoa-bean-to-bar-brazil-metals-ota.md` | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos e Ocratoxina A (Cocoa beans and "Bean to Bar" chocolates: Inorganic contaminants and Ochratoxin A) | Subject-fit review, then canonical hero |
| `wiki/sources/burrell2010-aluminium-in-infant-formulas.md` | There is (still) too much aluminium in infant formulas | Subject-fit review, then canonical hero |
| `wiki/sources/butko2008-cadmium-detoxification-thesis.md` | Molecular mechanisms of cadmium detoxification and long distance transport in plants | Subject-fit review, then canonical hero |
| `wiki/sources/bvl2017-technically-avoidable-heavy-metals-cosmetics.md` | Technically avoidable heavy metal contents in cosmetic products | Subject-fit review, then canonical hero |
| `wiki/sources/bzikowska-jura2024-human-milk-elements-poland.md` | Essential and non-essential element concentrations in human milk samples and the assessment of infants' exposure | Subject-fit review, then canonical hero |
| `wiki/sources/ca-dcc2026-cannabis-regulations-heavy-metals.md` | California Department of Cannabis Control Medicinal and Adult-Use Cannabis Regulations, revised January 1, 2026: heavy metals testing | Subject-fit review, then canonical hero |
| `wiki/sources/ca-doj-2022-mcwane-prop65-cr6-complaint.md` | People of the State of California v. McWane, Inc. (dba AB&I) — Complaint for Injunctive Relief and Civil Penalties (Prop 65 hexavalent chromium air emissions, AB&I Foundry, East Oakland) | Subject-fit review, then canonical hero |
| `wiki/sources/ca-people-v-mcwane-abi-crvi-prop65-2022.md` | Complaint for Injunctive Relief and Civil Penalties — People of the State of California v. McWane, Inc. (AB&I Foundry) | Subject-fit review, then canonical hero |
| `wiki/sources/ca-swrcb2024-hexavalent-chromium-mcl-reg-text.md` | California SWRCB DDW-21-003 Hexavalent Chromium MCL regulation text | Subject-fit review, then canonical hero |
| `wiki/sources/cacic2019-hemp-heavy-metals.md` | Evaluation of heavy metals accumulation potential of hemp (Cannabis sativa L.) | Subject-fit review, then canonical hero |
| `wiki/sources/cahill2014-mi-allergy-wipes-australia.md` | Methylisothiazolinone allergy in a dermatology clinic, including exposure from wipes | Subject-fit review, then canonical hero |
| `wiki/sources/caldas2013-mercury-concentration-in-breast-milk-and-infant-exposure.md` | Mercury Concentration in Breast Milk and Infant Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/california2010-sb929-metal-containing-jewelry.md` | California Senate Bill No. 929, Chapter 313, Hazardous materials: children's jewelry: heavy metals | Subject-fit review, then canonical hero |

## Batch 92: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/cammilleri2025-marine-collagen-toxic-metals.md` | Toxic metals and metalloids in collagen supplements of fish and jellyfish origin: Risk assessment for daily intake | Subject-fit review, then canonical hero |
| `wiki/sources/campaignsafecosmetics2007-lead-lipstick.md` | A Poison Kiss: The Problem of Lead in Lipstick | Subject-fit review, then canonical hero |
| `wiki/sources/campaignsafecosmetics2009-pretty-scary-face-paints.md` | Pretty Scary: Could Halloween Face Paint Cause Lifelong Health Problems? A Report on Heavy Metals in Face Paints | Subject-fit review, then canonical hero |
| `wiki/sources/campaignsafecosmetics2016-pretty-scary-2-kids-makeup.md` | Pretty Scary 2: Unmasking Toxic Chemicals in Kids' Makeup | Subject-fit review, then canonical hero |
| `wiki/sources/campanale2014-nickel-free-diet-h-pylori-eradication.md` | Nickel Free-Diet Enhances the Helicobacter pylori Eradication Rate: A Pilot Study | Subject-fit review, then canonical hero |
| `wiki/sources/camurati2019-edible-macroalgae-arsenic-review.md` | Arsenic in edible macroalgae: an integrated approach | Subject-fit review, then canonical hero |
| `wiki/sources/canada-t4-93-fertilizer-heavy-metal-standards.md` | T-4-93 – Safety standards for fertilizers and supplements | Subject-fit review, then canonical hero |
| `wiki/sources/canada2011-toys-regulations.md` | Toys Regulations (SOR/2011-17) | Subject-fit review, then canonical hero |
| `wiki/sources/canada2016-surface-coating-materials-regulations.md` | Surface Coating Materials Regulations, SOR/2016-193 | Subject-fit review, then canonical hero |
| `wiki/sources/canada2018-childrens-jewellery-regulations.md` | Children's Jewellery Regulations (SOR/2018-82) | Subject-fit review, then canonical hero |
| `wiki/sources/canada2018-consumer-products-lead-regulations.md` | Consumer Products Containing Lead Regulations (SOR/2018-83) | Subject-fit review, then canonical hero |
| `wiki/sources/cantoral2024-cadmium-foodstuffs-mexico.md` | Dietary Risk Assessment of Cadmium Exposure Through Commonly Consumed Foodstuffs in Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/cantoral2024-lead-levels-mexican-foods.md` | Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort | Subject-fit review, then canonical hero |
| `wiki/sources/cao2014-sargassum-pallidum-arsenic-speciation.md` | Pharmacokinetic properties of arsenic species after oral administration of Sargassum pallidum extract in rats using an HPLC-HG-AFS method | Subject-fit review, then canonical hero |
| `wiki/sources/cao2023-lead-pakchoi-eps-bacteria.md` | EPS-producing bacteria reduce lead accumulation in edible pakchoi under soil lead contamination | Subject-fit review, then canonical hero |
| `wiki/sources/capcarova2023-mozzarella-trace-elements-slovakia.md` | Levels of Essential and Trace Elements in Mozzarella Available on the Slovak Market with the Estimation of Consumer Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/caracciolo2021-rhizosphere-microbial-communities-and-heavy-metals.md` | Rhizosphere Microbial Communities and Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/cardini2025-cadmium-speciation-plant-foods-sec-icp.md` | A novel approach for the identification of cadmium-chelating compounds in plant-based foods using SEC-ICP-MS/MS and SEC-QTOF-MS | Subject-fit review, then canonical hero |
| `wiki/sources/cardoso2023-mercury-portuguese-coast-seafood.md` | Seasonal characterization of mercury contamination along the Portuguese coast: human health and environmental risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/cardoso2024-cadmium-bacterial-volatiles.md` | How Bacteria Cope with Oxidative Stress Induced by Cadmium: Volatile Communication Is Differentially Perceived among Strains | Subject-fit review, then canonical hero |
| `wiki/sources/carey2015-rice-arsenic-percolating-cooking.md` | Rethinking Rice Preparation for Highly Efficient Removal of Inorganic Arsenic Using Percolating Cooking Water | Subject-fit review, then canonical hero |
| `wiki/sources/carey2018-rice-dilution-infant-food-eu-arsenic.md` | Dilution of rice with other gluten free grains to lower inorganic arsenic in foods for young children in response to European Union regulations provides impetus to setting stricter standards | Subject-fit review, then canonical hero |
| `wiki/sources/carey2020-global-low-ias-rice-sourcing.md` | Global Sourcing of Low-Inorganic Arsenic Rice Grain | Subject-fit review, then canonical hero |
| `wiki/sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants.md` | Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort | Subject-fit review, then canonical hero |
| `wiki/sources/carignan2016-arsenic-infant-rice-cereal-commentary.md` | Potential Exposure to Arsenic from Infant Rice Cereal | Subject-fit review, then canonical hero |

## Batch 93: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort.md` | Contribution of breast milk and formula to arsenic exposure during the first year of life in a U.S. prospective cohort | Subject-fit review, then canonical hero |
| `wiki/sources/carlin2020-tampons-eyeshadows-chemistry.md` | Analytical Chemistry of Consumer Products: Research and Regulation of Tampons and Eyeshadows | Subject-fit review, then canonical hero |
| `wiki/sources/carneado2015-antimony-pet-mineral-water.md` | Migration of antimony from polyethylene terephthalate used in mineral water bottles | Subject-fit review, then canonical hero |
| `wiki/sources/carpena2024-chemical-hazards-herbs-europe.md` | Assessment of the Chemical Hazards in Herbs Consumed in Europe: Toxins, Heavy Metals, and Pesticide Residues | Subject-fit review, then canonical hero |
| `wiki/sources/carroquino-posada-landrigan-environmental-toxicology-children-at-risk.md` | Environmental Toxicology: Children at Risk | Subject-fit review, then canonical hero |
| `wiki/sources/carter2025-tda-aas-methylmercury-finfish-fda-method.md` | Thermal Decomposition Amalgamation AAS and SALLE for Methylmercury and Total Mercury in Finfish: FDA Method Validation | Subject-fit review, then canonical hero |
| `wiki/sources/cat2024-individual-and-combined-contamination-of-the-heavy-metals.md` | Individual and Combined Contamination of the Heavy Metals in Commercial Cat and Dog Food | Subject-fit review, then canonical hero |
| `wiki/sources/categories/east-southeast-asia.md` | East & Southeast Asia sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/europe.md` | Europe sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/international.md` | International & multi-country sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/latin-america.md` | Latin America & Caribbean sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/middle-east-north-africa.md` | Middle East & North Africa sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/north-america.md` | North America sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/oceania.md` | Oceania sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/south-central-asia.md` | South & Central Asia sources | Subject-fit review, then canonical hero |
| `wiki/sources/categories/sub-saharan-africa.md` | Sub-Saharan Africa sources | Subject-fit review, then canonical hero |
| `wiki/sources/cattani2022-pediatric-atopic-patch-tests.md` | Sensitizing agents found in children and adolescents with recalcitrant atopic dermatitis: a cross-sectional study with a pediatric battery | Subject-fit review, then canonical hero |
| `wiki/sources/cbi2024-cocoa-eu-market-requirements.md` | What requirements must cocoa meet to be allowed on the European market? | Subject-fit review, then canonical hero |
| `wiki/sources/ccc2020-marijuana-testing-protocol-metals.md` | Protocol for the Sampling and Analysis of Finished Marijuana Products and Marijuana Products for Marijuana Establishments, Medical Marijuana Treatment Centers and Colocated Marijuana Operations | Subject-fit review, then canonical hero |
| `wiki/sources/ccopi2026-heavy-metals-andean-crops-peru.md` | Bioaccumulation of heavy metals in high Andean crops of the Peruvian Andes: comparative evaluation between irrigated and dry systems | Subject-fit review, then canonical hero |
| `wiki/sources/cdc-blood-lead-reference-value.md` | Blood Lead Reference Value (3.5 µg/dL) | Subject-fit review, then canonical hero |
| `wiki/sources/cdc2012-boston-tiro-infant-lead.md` | Infant Lead Poisoning Associated with Use of Tiro, an Eye Cosmetic from Nigeria, Boston, Massachusetts, 2011 | Subject-fit review, then canonical hero |
| `wiki/sources/cegolon2022-hg-hair-trieste.md` | Concentration of mercury in human hair and associated factors in residents of the Gulf of Trieste (North-Eastern Italy) | Subject-fit review, then canonical hero |
| `wiki/sources/celeiro2015-baby-wipes-fragrance-phthalates.md` | Pressurized liquid extraction-gas chromatography-mass spectrometry analysis of fragrance allergens, musks, phthalates and preservatives in baby wipes | Subject-fit review, then canonical hero |
| `wiki/sources/cephed2013-heavy-metals-childrens-toys-nepal.md` | Study of Heavy Metals in Children's Toys and Campaign for Safe Play in Nepal | Subject-fit review, then canonical hero |

## Batch 94: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/cfa2012-cpsia-lead-fact-sheet.md` | CPSIA and Lead Fact Sheet | Subject-fit review, then canonical hero |
| `wiki/sources/cfia2020-toxic-metals-selected-foods-2018-19.md` | Toxic Metals in Selected Foods – April 1, 2018 to March 31, 2019: Food chemistry – Targeted surveys – Final report | Subject-fit review, then canonical hero |
| `wiki/sources/cfia2024-fertilizer-growing-media-metals.md` | T-4-93 - Standards for metals in fertilizers and supplements | Subject-fit review, then canonical hero |
| `wiki/sources/cfia2025-toxic-metals-selected-foods-2022-23.md` | Toxic metals in selected foods – April 1, 2022 to March 31, 2023: Food chemistry – Targeted surveys – Final report | Subject-fit review, then canonical hero |
| `wiki/sources/cfr2025-21cfr73-1550-talc-color-additive.md` | 21 CFR 73.1550 Talc (color additive exempt from certification, for drugs) | Subject-fit review, then canonical hero |
| `wiki/sources/cfr2025-40cfr141-51-antimony-mclg.md` | 40 CFR 141.51, maximum contaminant level goal for antimony | Subject-fit review, then canonical hero |
| `wiki/sources/cfr2025-40cfr141-62-antimony-mcl.md` | 40 CFR 141.62, maximum contaminant level for antimony | Subject-fit review, then canonical hero |
| `wiki/sources/cfs2012-baby-bottles-tableware.md` | Safety Issues of Baby Bottles and Children's Tableware (Risk Assessment Studies Report No. 47) | Subject-fit review, then canonical hero |
| `wiki/sources/cfs2012-hktds-inorganic-arsenic.md` | The First Hong Kong Total Diet Study: Inorganic Arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/cfs2013-hktds-metallic-contaminants.md` | The First Hong Kong Total Diet Study: Metallic Contaminants | Subject-fit review, then canonical hero |
| `wiki/sources/cfs2019-hk-metallic-contamination-guidelines.md` | Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 | Subject-fit review, then canonical hero |
| `wiki/sources/cfs2019-organotin-aquatic-hongkong.md` | Organotin Compounds in Aquatic Products Available at Local Markets | Subject-fit review, then canonical hero |
| `wiki/sources/chagonda2023-harare-child-blood-lead.md` | Blood lead levels in children residing in a 115-year old urban settlement in Harare, Zimbabwe: a cross sectional study | Subject-fit review, then canonical hero |
| `wiki/sources/chaiyasut2018-coffee-cosmetic-heavy-metals.md` | Formulation and stability assessment of Arabica and Civet coffee extracts based cosmetic preparations | Subject-fit review, then canonical hero |
| `wiki/sources/chaleshtori2019-watermelon-carrot-pb-cd.md` | Assessment of Lead and Cadmium Levels in Watermelon and Carrot | Subject-fit review, then canonical hero |
| `wiki/sources/chamorro2024-bluefin-tuna-mercury-review.md` | Atlantic bluefin tuna (Thunnus thynnus): health benefits, contaminants and risk-benefit analysis for human consumption | Subject-fit review, then canonical hero |
| `wiki/sources/chan2023-archives-of-toxicology-2023-97-2625-2641.md` | Archives of Toxicology (2023) 97:2625–2641 | Subject-fit review, then canonical hero |
| `wiki/sources/chandrangsu2017-metal-homeostasis-resistance-bacteria.md` | Metal homeostasis and resistance in bacteria | Subject-fit review, then canonical hero |
| `wiki/sources/chandravanshi-shiv-kumar-2021-cadmium-developmental-toxicity-infants-children-review.md` | Developmental toxicity of cadmium in infants and children: a review | Subject-fit review, then canonical hero |
| `wiki/sources/chang2014-methylisothiazolinone-baby-wipes.md` | Six children with allergic contact dermatitis to methylisothiazolinone in wet wipes (baby wipes) | Subject-fit review, then canonical hero |
| `wiki/sources/chang2015-mercury-korean-infants-weaning.md` | Mercury Exposure in Healthy Korean Weaning-Age Infants: Association with Growth, Feeding and Fish Intake | Subject-fit review, then canonical hero |
| `wiki/sources/chang2018-shanghai-atmospheric-trace-elements.md` | First long-term and near real-time measurement of trace elements in China's urban atmosphere: temporal variability, source apportionment and precipitation effect | Subject-fit review, then canonical hero |
| `wiki/sources/chang2022-cocoa-fermentation-rhizobium-cadmium.md` | Induction of rhizobium japonicum in the fermentative mass of two varieties of cacao (Theobroma Cacao L.) as a strategy for the decrease of cadmium | Subject-fit review, then canonical hero |
| `wiki/sources/change2024-impact-of-submarine-groundwater-discharge.md` | Impact of Submarine Groundwater Discharge, | Subject-fit review, then canonical hero |
| `wiki/sources/chapa-martinez2016-pet-bottled-water-antimony.md` | An evaluation of the migration of antimony from polyethylene terephthalate (PET) plastic used for bottled drinking water | Subject-fit review, then canonical hero |

## Batch 95: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates.md` | Food safety in the production of olive oils. Presence of heavy metals and phthalic acid esters using different types of packaging | Subject-fit review, then canonical hero |
| `wiki/sources/charles2017-instant-noodles-nigeria-risk.md` | Health risk assessment of instant noodles commonly consumed in Port Harcourt, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/chaura2026-phaseolus-multiomics-ionomics.md` | Nutritional and Biochemical Diversity in Beans Accessions from Three Phaseolus Species Using Multiomics Characterization | Subject-fit review, then canonical hero |
| `wiki/sources/chavez-capilla2022-arsenolipids-seafood.md` | The Need to Unravel Arsenolipid Transformations in Humans | Subject-fit review, then canonical hero |
| `wiki/sources/chekri2019-french-infant-toddler-tds-trace-elements.md` | Trace element contents in foods from the first French Total Diet Study on infants and toddlers | Subject-fit review, then canonical hero |
| `wiki/sources/chemistry2022-bio-accumulation-of-heavy-metals-in-some-north.md` | BIO-ACCUMULATION OF HEAVY METALS IN SOME NORTH | Subject-fit review, then canonical hero |
| `wiki/sources/chen2001-edible-fats-oils-arsenic.md` | Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer | Subject-fit review, then canonical hero |
| `wiki/sources/chen2017-newcomer-women-metals-review.md` | Metal Concentrations in Newcomer Women and Environmental Exposures: A Scoping Review | Subject-fit review, then canonical hero |
| `wiki/sources/chen2019-china-oyster-organotins.md` | Organotin contamination in commercial and wild oysters from China: Increasing occurrence of triphenyltin | Subject-fit review, then canonical hero |
| `wiki/sources/chen2020-biochar-straw-cadmium-bioavailability.md` | Effects of biochar and crop straws on the bioavailability of cadmium in contaminated soil | Subject-fit review, then canonical hero |
| `wiki/sources/chen2020-milk-types-elements-china.md` | Analysis of 17 elements in cow, goat, buffalo, yak, and camel milk by inductively coupled plasma mass spectrometry (ICP-MS) | Subject-fit review, then canonical hero |
| `wiki/sources/chen2021-abscisic-acid-cadmium-ramie.md` | Regulating role of abscisic acid on cadmium enrichment in ramie (Boehmeria nivea L.) | Subject-fit review, then canonical hero |
| `wiki/sources/chen2021-imbalanced-zinc-gut-microbiota-markers.md` | Effect of long-term and short-term imbalanced zinc manipulation on gut microbiota and screening for microbial markers sensitive to zinc status | Subject-fit review, then canonical hero |
| `wiki/sources/chen2022-peanut-elements-china.md` | Determination of macro, micro and toxic element concentrations in peanuts from main peanut producing areas of China by ICP-MS: a pilot study on the geographical characterization | Subject-fit review, then canonical hero |
| `wiki/sources/chen2022-preschool-clothing-heavy-metals-asia.md` | Occurrence and health implications of heavy metals in preschool children's clothing manufactured in four Asian regions | Subject-fit review, then canonical hero |
| `wiki/sources/chen2023-breast-milk-ewaste-china.md` | Prenatal Exposure to Heavy Metals and Adverse Birth Outcomes: Evidence From an E-Waste Area in China | Subject-fit review, then canonical hero |
| `wiki/sources/chen2023-heavy-metals-ibd.md` | Adverse health effects of emerging contaminants on inflammatory bowel disease | Subject-fit review, then canonical hero |
| `wiki/sources/chen2024-bodipy-hg-water-sensor.md` | BODIPY sporopollenin fluorescence sensor for mercury in tap water | Subject-fit review, then canonical hero |
| `wiki/sources/chen2024-hg-gtriplex-biosensor-milk.md` | G-triplex DNA biosensor for mercury detection validated in milk | Subject-fit review, then canonical hero |
| `wiki/sources/chen2024-shanghai-hydroponic-vegetables.md` | Occurrence and Risk Assessment of Pesticides, Phthalates, and Heavy Metal Residues in Vegetables from Hydroponic and Conventional Cultivation | Subject-fit review, then canonical hero |
| `wiki/sources/chen2024-trimodal-hg-food-sensor.md` | Design and fabrication of self-calibration colorimetric/fluorescence/SERS tri-modal optical sensor for highly rapid and accurate detection of mercury ions in foods | Subject-fit review, then canonical hero |
| `wiki/sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi.md` | Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach | Subject-fit review, then canonical hero |
| `wiki/sources/chen2026-arsenic-methylation-in-urban.md` | arsenic methylation in urban | Subject-fit review, then canonical hero |
| `wiki/sources/cheng2023-cadmium-rice-cultivars-root-microbiome.md` | Metagenomic and machine learning-aided identification of biomarkers driving distinctive Cd accumulation features in the root-associated microbiome of two rice cultivars | Subject-fit review, then canonical hero |
| `wiki/sources/chengappa2025-toothpaste-india-aas.md` | Analysis of copper, zinc, arsenic, and lead content of over-the-counter toothpastes from india: an invitro study | Subject-fit review, then canonical hero |

## Batch 96: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/chengappa2025-toothpaste-systematic-review.md` | Heavy metal content of over-the-counter toothpastes—a systematic review of in vitro studies | Subject-fit review, then canonical hero |
| `wiki/sources/chepak2023-light-harvesting-mercury-nanoprobe.md` | Light Harvesting Nanoprobe for Trace Detection of Hg2+ in Water | Subject-fit review, then canonical hero |
| `wiki/sources/cherfi2014-algeria-fruits-vegetables-metals.md` | Food survey: Levels and potential health risks of chromium, lead, zinc and copper content in fruits and vegetables consumed in Algeria | Subject-fit review, then canonical hero |
| `wiki/sources/cherry2019-edible-seaweeds-risks-benefits.md` | Risks and benefits of consuming edible seaweeds | Subject-fit review, then canonical hero |
| `wiki/sources/chetima2024-activated-carbons-cottonseed-oil-bleaching.md` | Activated carbons from open air and microwave-assisted impregnation of cotton and neem husks efficiently decolorize neutral cotton oil | Subject-fit review, then canonical hero |
| `wiki/sources/cheyns2021-algae-cyanobacteria-supplements-arsenic.md` | Intake of food supplements based on algae or cyanobacteria may pose a health risk due to elevated concentrations of arsenic species | Subject-fit review, then canonical hero |
| `wiki/sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf.md` | Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment | Subject-fit review, then canonical hero |
| `wiki/sources/chigome2022-arsenate-point-of-use-filter-media.md` | Perspectives on the Development of Filter Media for Point of Use Water Filters: Case Study of Arsenate Removal | Subject-fit review, then canonical hero |
| `wiki/sources/chile1996-decreto-977-rsa-heavy-metals.md` | Decreto 977, SALUD (1996) - Reglamento Sanitario de los Alimentos | Subject-fit review, then canonical hero |
| `wiki/sources/chime2025-nigerian-spices-as-cd-pb.md` | Assessment of toxic trace metal contamination in food spices sold in Nigerian markets | Subject-fit review, then canonical hero |
| `wiki/sources/china2022-gb-2762-contaminants-original.md` | GB 2762-2022 National Food Safety Standard: Maximum Levels of Contaminants in Foods | Subject-fit review, then canonical hero |
| `wiki/sources/china2022-gb14930-1-detergent-arsenic.md` | GB 14930.1-2022 National food safety standard - Detergents | Subject-fit review, then canonical hero |
| `wiki/sources/china2024-pet-food-hygiene-standard-draft.md` | Hygienic standard for pet feed (food) - public-comment draft | Subject-fit review, then canonical hero |
| `wiki/sources/chirinos2023-milk-lead-cadmium-arsenic-peru.md` | Lead, Cadmium, and Arsenic in Raw Milk Produced in the Vicinity of a Mini Mineral Concentrator in the Central Andes and Health Risk | Subject-fit review, then canonical hero |
| `wiki/sources/chiutula2025-wastewater-vegetables-malawi.md` | Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi | Subject-fit review, then canonical hero |
| `wiki/sources/choi2016-wet-wipes-nonwoven-heavy-metals.md` | Determination of heavy metals on the non-woven in wet wipes using ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/chou-uthe1993-cadmium-american-lobster-belledune.md` | Cadmium in American lobster (Homarus americanus) from the area of Belledune Harbour, New Brunswick, Canada: 1980-1992 results | Subject-fit review, then canonical hero |
| `wiki/sources/christian2024-caribbean-fish-mercury.md` | An evaluation of fish and invertebrate mercury concentrations in the Caribbean Region | Subject-fit review, then canonical hero |
| `wiki/sources/chronchol2026-dairy-free-infant-porridges-poland.md` | Trace Element Intake from Dairy-Free Infant Porridges | Subject-fit review, then canonical hero |
| `wiki/sources/chu2021-pet-fiber-antimony-china.md` | Dynamic flow and pollution of antimony from polyethylene terephthalate (PET) fibers in China | Subject-fit review, then canonical hero |
| `wiki/sources/chuchu2013-aluminium-in-infant-formulas.md` | The aluminium content of infant formulas remains too high | Subject-fit review, then canonical hero |
| `wiki/sources/chung2020-hong-kong-seafood-organotins.md` | Occurrence of organotin compounds in seafood from Hong Kong market | Subject-fit review, then canonical hero |
| `wiki/sources/chwastowski2020-spent-coffee-biochar-metal-adsorption.md` | Adsorption of Cadmium, Manganese and Lead Ions from Aqueous Solutions Using Spent Coffee Grounds and Biochar Produced by Its Pyrolysis in the Fluidized Bed Reactor | Subject-fit review, then canonical hero |
| `wiki/sources/cicero2022-minerals-spices-aromatic-herbs.md` | Mineral and Microbiological Analysis of Spices and Aromatic Herbs | Subject-fit review, then canonical hero |
| `wiki/sources/ciftci2023-nasal-sprays-drops-metals.md` | Determination of heavy metals and essential elements in nasal sprays and drops (Saline/Sea Water) and evaluation in terms of toxicity | Subject-fit review, then canonical hero |

## Batch 97: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/cioca2022-food-matrix-bioaccessibility-metals.md` | Implementation of food matrix effects into chemical food contaminant risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/ciocan2021-ayurvedic-lead-hg-poisoning.md` | Lead poisoning from Ayurvedic treatment: a further case | Subject-fit review, then canonical hero |
| `wiki/sources/ciont2022-beer-safety-heavy-metals-review.md` | Beer Safety: New Challenges and Future Trends within Craft and Large-Scale Production | Subject-fit review, then canonical hero |
| `wiki/sources/cirillo2010-campania-seafood-metals.md` | Survey of lead, cadmium, mercury and arsenic in seafood purchased in Campania, Italy | Subject-fit review, then canonical hero |
| `wiki/sources/cirs2023-reach-annex-xvii-restrictions.md` | REACH ANNEX XVII — Restrictions on the Manufacture, Placing on the Market and Use of Certain Dangerous Substances, Mixtures and Articles | Subject-fit review, then canonical hero |
| `wiki/sources/citation2023-comparison-toxic-heavy-metals.md` | Comparison of toxic heavy metals in the breast milk of diabetic and non-diabetic postpartum mothers in Yenagoa, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina.md` | Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso | Subject-fit review, then canonical hero |
| `wiki/sources/clancy2025-methylisothiazolinone-skin-msi.md` | Mass spectrometry imaging reveals uptake of the allergen methylisothiazolinone in ex vivo human skin | Subject-fit review, then canonical hero |
| `wiki/sources/cleanlabel2020-collagen-heavy-metals.md` | The True Content and Faces Behind America's Best-Selling Collagen: 2020 Collagen Heavy Metals Study | Subject-fit review, then canonical hero |
| `wiki/sources/cleanlabel2025-protein-powder-heavy-metals.md` | CLP Insights: 2024-25 Protein Powder Category Report (Protein Study 2.0) | Subject-fit review, then canonical hero |
| `wiki/sources/cleary2021-fish-consumption-advisories-usa.md` | Comparison of Recreational Fish Consumption Advisories Across the USA | Subject-fit review, then canonical hero |
| `wiki/sources/clemente2026-evaluated-its-stabilization-performance-for-vanadium-v-chromium.md` | evaluated its stabilization performance for vanadium (V), chromium (Cr), nickel (Ni), | Subject-fit review, then canonical hero |
| `wiki/sources/cloeckaert2023-open-access-childhood-exposure-to-tobacco.md` | OPEN ACCESS childhood exposure to tobacco | Subject-fit review, then canonical hero |
| `wiki/sources/cnpharm2019-nmpa-notice-childrens-powder-lead.md` | 国家药监局通告27批次不合格化妆品 (NMPA notice of 27 non-compliant cosmetic batches), news report | Subject-fit review, then canonical hero |
| `wiki/sources/cobbett2002-phytochelatins-metallothioneins-review.md` | Phytochelatins and Metallothioneins: Roles in Heavy Metal Detoxification and Homeostasis | Subject-fit review, then canonical hero |
| `wiki/sources/codex-cccf17-2024.md` | Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17) | Subject-fit review, then canonical hero |
| `wiki/sources/codex-cxc-81-2022.md` | Code of Practice for the Prevention and Reduction of Cadmium Contamination in Cocoa Beans (CXC 81-2022) | Subject-fit review, then canonical hero |
| `wiki/sources/codex-cxs-193-1995.md` | General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) | Subject-fit review, then canonical hero |
| `wiki/sources/coe2023-gut-microbiome-methylmercury-demethylation.md` | Assessing the Role of the Gut Microbiome in Methylmercury Demethylation and Elimination in Humans and Gnotobiotic Mice | Subject-fit review, then canonical hero |
| `wiki/sources/cofepris2012-nom-252-toy-school-metals.md` | NOM-252-SSA1-2011, Salud ambiental. Juguetes y artículos escolares. Límites de biodisponibilidad de metales pesados. Especificaciones químicas y métodos de prueba. | Subject-fit review, then canonical hero |
| `wiki/sources/cofepris2013-nom-186-cacao-chocolate-contaminants.md` | NORMA Oficial Mexicana NOM-186-SSA1/SCFI-2013, Cacao, chocolate y productos similares, y derivados del cacao. Especificaciones sanitarias. Denominación comercial. Métodos de prueba. | Subject-fit review, then canonical hero |
| `wiki/sources/coghlan2015-tcm-heavy-metals-audit.md` | Combined DNA, toxicological and heavy metal analyses provides an auditing toolkit to improve pharmacovigilance of traditional Chinese medicine (TCM) | Subject-fit review, then canonical hero |
| `wiki/sources/colapinto2016-tea-maternal-blood-metals.md` | Is there a relationship between tea intake and maternal whole blood heavy metal concentrations? | Subject-fit review, then canonical hero |
| `wiki/sources/collado-lopez2025-heavy-metals-baby-food-formula.md` | Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review | Subject-fit review, then canonical hero |
| `wiki/sources/college2025-for-alleviating-heavy-metal-stress.md` | for alleviating heavy metal stress | Subject-fit review, then canonical hero |

## Batch 98: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/colombiaminsalud2013-resolucion-4506-contaminants.md` | Resolucion Numero 4506 de 2013: niveles maximos de contaminantes en alimentos | Subject-fit review, then canonical hero |
| `wiki/sources/colorado2022-marijuana-heavy-metal-limits.md` | Colorado Marijuana Enforcement Division Rules 1 CCR 212-3 heavy metal limits | Subject-fit review, then canonical hero |
| `wiki/sources/connecticut2010-pa-10-113-cadmium-childrens-jewelry.md` | Connecticut Public Act No. 10-113, An Act Banning Cadmium in Children's Jewelry | Subject-fit review, then canonical hero |
| `wiki/sources/contamination2018-timothy-d-scheibe-and-david-c-mays.md` | Timothy D. Scheibe and David C. Mays | Subject-fit review, then canonical hero |
| `wiki/sources/convenience2020-the-toxicity-associated-with-a-product-loaded-with.md` | The toxicity associated with a product loaded with chemicals and a conscious choice that is to | Subject-fit review, then canonical hero |
| `wiki/sources/cooke2018-baby-skin-care-systematic-review.md` | Skin care for healthy babies at term: A systematic review of the evidence | Subject-fit review, then canonical hero |
| `wiki/sources/cooper2016-flame-retardants-puf-consumer-products.md` | Results from Screening Polyurethane Foam Based Consumer Products for Flame Retardant Chemicals: Assessing Impacts on the Change in the Furniture Flammability Standards | Subject-fit review, then canonical hero |
| `wiki/sources/copat2013-mediterranean-fish-shellfish-metals.md` | Heavy metals concentrations in fish and shellfish from eastern Mediterranean Sea: Consumption advisories | Subject-fit review, then canonical hero |
| `wiki/sources/cortes2022-reflect-the-position-or-opinion-of-the-european.md` | reflect the position or opinion of the European Commission. Neither the European Commission nor any person acting on behalf of the | Subject-fit review, then canonical hero |
| `wiki/sources/coryell-2018-gut-microbiome-arsenic-toxicity-protection.md` | The gut microbiome is required for full protection against acute arsenic toxicity in mouse models | Subject-fit review, then canonical hero |
| `wiki/sources/coryell2018-gut-microbiome-arsenic-toxicity-protection.md` | The gut microbiome is required for full protection against acute arsenic toxicity in mouse models | Subject-fit review, then canonical hero |
| `wiki/sources/coryell2019-gut-microbiome-arsenic-toxicity.md` | The Human Gut Microbiome's Influence on Arsenic Toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/costa2018-rice-arsenic-speciation.md` | Especiacao quimica de arsenio em amostras de arroz empregando extracao por fase solida in-situ e determinacao por FI-HG AAS | Subject-fit review, then canonical hero |
| `wiki/sources/cot2003-arsenic-food-tds.md` | Statement on arsenic in food: results of the 1999 Total Diet Study | Subject-fit review, then canonical hero |
| `wiki/sources/cot2003-infant-food-metals.md` | COT statement on a survey of metals in infant food | Subject-fit review, then canonical hero |
| `wiki/sources/cot2004-mercury-fish-shellfish.md` | Updated COT statement on a survey of mercury in fish and shellfish | Subject-fit review, then canonical hero |
| `wiki/sources/cot2008-uk-tds-metals.md` | COT Statement on the 2006 UK Total Diet Study of Metals and Other Elements | Subject-fit review, then canonical hero |
| `wiki/sources/cot2013-uk-aluminium-infant-diet.md` | Statement on the potential risks from aluminium in the infant diet | Subject-fit review, then canonical hero |
| `wiki/sources/courtney2012-low-dose-drinking-water-arsenic.md` | Effects of Low-Dose Drinking Water Arsenic on Mouse Fetal and Postnatal Growth and Development | Subject-fit review, then canonical hero |
| `wiki/sources/cpqs2026-online-baby-wipes-quality-monitoring.md` | Analysis report: quality monitoring results for baby wet wipes sold online | Subject-fit review, then canonical hero |
| `wiki/sources/cpsc1997-pvc-children-products.md` | CPSC Staff Report on Lead and Cadmium in Children's Polyvinyl Chloride (PVC) Products | Subject-fit review, then canonical hero |
| `wiki/sources/cpsc2009-cpsia-101-procedures-npr.md` | Children's Products Containing Lead; Notice of Proposed Procedures and Requirements for a Commission Determination or Exclusion (16 CFR 1500.89 and 1500.90); and companion Notice of Proposed Rulemaking on Proposed Determinations Regarding Lead Content Limits on Certain Materials or Products | Subject-fit review, then canonical hero |
| `wiki/sources/cpsc2009-cpsia-101b-inaccessibility-rule.md` | Children's Products Containing Lead; Interpretative Rule on Inaccessible Component Parts (16 CFR 1500.87) — Commission ballot package: draft Federal Register notice, staff guidance memorandum, and response to public comments | Subject-fit review, then canonical hero |
| `wiki/sources/cpsc2010-cadmium-childrens-metal-jewelry.md` | Children's Cadmium-Containing Metal Jewelry — Staff Report | Subject-fit review, then canonical hero |
| `wiki/sources/cpsc2010-cribs-104-standard-npr.md` | Proposed Standards for Full-Size and Non-Full-Size Cribs under Section 104 of the Consumer Product Safety Improvement Act and Related Documents — Staff Briefing Memorandum | Subject-fit review, then canonical hero |

## Batch 99: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/cpsc2011-cpsia-100ppm-tech-feasibility.md` | Children's Products Containing Lead; Technological Feasibility of 100 ppm for Lead Content; Notice of Effective Date of 100 ppm Lead Content Limit in Children's Products — Office of General Counsel ballot memo (June 22, 2011), Draft Federal Register Notice, and Staff Briefing Package for Commission consideration at the July 13, 2011 decisional meeting; Docket No. CPSC-2010-0080 | Subject-fit review, then canonical hero |
| `wiki/sources/cpsc2012-cpsia-101b-functional-purpose-exception.md` | Staff Report — CPSIA Section 101(b): Functional Purpose Exception from Lead Content Limit for Children's Products for a Specific Product, Class of Product, Material, or Component Part | Subject-fit review, then canonical hero |
| `wiki/sources/cpsc2024-lead-cored-candle-wicks-ban.md` | 16 CFR 1500.17(a)(13) Lead-cored candle wicks ban | Subject-fit review, then canonical hero |
| `wiki/sources/cr-fsasc2014-arsenic-rice-grains.md` | Analysis of Arsenic in Rice and Other Grains | Subject-fit review, then canonical hero |
| `wiki/sources/craven2025-aas-heavy-metals-australia.md` | Lead Astray? The Hidden Contaminants in Australian Anabolic–Androgenic Steroid Market and Their Potential Health Impact | Subject-fit review, then canonical hero |
| `wiki/sources/crespo-barreiro2023-olive-pruning-biochar-metals.md` | Scaling-Up of the Production of Biochar from Olive Tree Pruning for Agricultural Use: Evaluation of Biochar Characteristics and Phytotoxicity | Subject-fit review, then canonical hero |
| `wiki/sources/crosera2015-tio2-nanoparticle-skin-penetration-hacat.md` | Titanium Dioxide Nanoparticle Penetration into the Skin and Effects on HaCaT Cells | Subject-fit review, then canonical hero |
| `wiki/sources/cstee2003-organotin-consumer-exposure.md` | Opinion on the non-food aspects of assessment of the risks to health and the environment posed by the use of organostannic compounds | Subject-fit review, then canonical hero |
| `wiki/sources/cui2022-mercury-speciation-rice-china.md` | Source apportionment of speciated mercury in Chinese rice grain using a high-resolution model | Subject-fit review, then canonical hero |
| `wiki/sources/cwielag-drabek2020-silesia-vegetables-mining.md` | Risk of cadmium, lead and zinc exposure from consumption of vegetables produced in areas with mining and smelting past | Subject-fit review, then canonical hero |
| `wiki/sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland.md` | Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers | Subject-fit review, then canonical hero |
| `wiki/sources/cwielag-drabek2025-tattoo-inks-metals.md` | Heavy Metal Content in Tattoo and Permanent Makeup Inks and European Standards-Is There Still a Health Risk? | Subject-fit review, then canonical hero |
| `wiki/sources/czarnek2024-heavy-metals-energy-drinks.md` | Nutritional Risks of Heavy Metals in the Human Diet—Multi-Elemental Analysis of Energy Drinks | Subject-fit review, then canonical hero |
| `wiki/sources/czech2021-citrus-lead-cadmium.md` | Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits | Subject-fit review, then canonical hero |
| `wiki/sources/dabeka1987-canada-infant-formula-lead-cadmium.md` | Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada | Subject-fit review, then canonical hero |
| `wiki/sources/dabeka1995-canadian-food-composites-metals.md` | Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988 | Subject-fit review, then canonical hero |
| `wiki/sources/dabeka2003-canadian-total-diet-mercury.md` | Survey of total mercury in total diet food composites and an estimation of the dietary intake of mercury by adults and children from two Canadian cities, 1998-2000 | Subject-fit review, then canonical hero |
| `wiki/sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum.md` | Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions | Subject-fit review, then canonical hero |
| `wiki/sources/dahan2018-arsenic-alters-microbiome-larval-zebrafish.md` | Exposure to arsenic alters the microbiome of larval zebrafish | Subject-fit review, then canonical hero |
| `wiki/sources/dai2016-texas-animal-feed-metals.md` | Heavy Metal Contamination of Animal Feed in Texas | Subject-fit review, then canonical hero |
| `wiki/sources/dai2023-resazurin-pad-heavy-metal-toxicity.md` | A Dye-Assisted Paper-Based Assay to Rapidly Differentiate the Stress of Chlorophenols and Heavy Metals on Enterococcus faecalis and Escherichia coli | Subject-fit review, then canonical hero |
| `wiki/sources/dai2024-chongqing-dietary-arsenic-exposure.md` | Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China | Subject-fit review, then canonical hero |
| `wiki/sources/dai2025-rice-arsenic-methylation-demethylation-global.md` | The balance between microbial arsenic methylation and demethylation in paddy soils underpins global arsenic risk and straighthead disease in rice | Subject-fit review, then canonical hero |
| `wiki/sources/daisley2018-lactobacillus-lead-cadmium-sequestration.md` | Immobilization of cadmium and lead by Lactobacillus rhamnosus GR-1 mitigates apical-to-basolateral heavy metal translocation in a Caco-2 model of the intestinal epithelium | Subject-fit review, then canonical hero |
| `wiki/sources/damato2026-inorganic-arsenic-rice-based-beverages.md` | Inorganic Arsenic in Rice-Based Beverages: Occurrence in Products Available on the Italian Market and Dietary Exposure Assessment | Subject-fit review, then canonical hero |

## Batch 100: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/danishepa2005-survey60-wooden-toys.md` | Survey of chemical substances in consumer products No. 60, chapter 3, wooden toys | Subject-fit review, then canonical hero |
| `wiki/sources/danishepa2014-nano-anatase-tio2-consumer-products.md` | Occurrence and effects of nanosized anatase titanium dioxide in consumer products | Subject-fit review, then canonical hero |
| `wiki/sources/danishepa2015-dermal-absorption-nano-tio2-zno-sunscreen.md` | Dermal Absorption of Nanomaterials Titanium Dioxide and Zinc Oxide Based Sunscreen: Role of Size and Surface Coating | Subject-fit review, then canonical hero |
| `wiki/sources/danjuma2025-hair-dye-ptes-nigeria.md` | Investigation and Health Risk Assessments of Potentially Toxic Elements (PTEs) In Hair-Dye Products | Subject-fit review, then canonical hero |
| `wiki/sources/darko2014-seasonings-ghana-metals.md` | Heavy metal content in mixed and unmixed seasonings on the Ghanaian market | Subject-fit review, then canonical hero |
| `wiki/sources/dasilva2017-heavy-metals-coffee-brazil.md` | Determination of heavy metals in the roasted and ground coffee beans and brew | Subject-fit review, then canonical hero |
| `wiki/sources/dasilva2025-neurodevelopmental-outcomes-early-life-systematic-review.md` | Neurodevelopmental Outcomes Associated with Early-Life Exposure to Heavy Metals: A Systematic Review | Subject-fit review, then canonical hero |
| `wiki/sources/dauda2023-cosmetics-heavy-metals.md` | Harmful effects of heavy metals in cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/david2008-heavy-metals-canned-tomato-paste-romania.md` | The heavy metals analyses in canned tomato paste | Subject-fit review, then canonical hero |
| `wiki/sources/davidov2019-cow-milk-heavy-metals.md` | Contamination of Cow Milk by Heavy Metals in Serbia | Subject-fit review, then canonical hero |
| `wiki/sources/davidsuzuki2014-toxic-household-cleaners.md` | The dirt on toxic chemicals in household cleaning products | Subject-fit review, then canonical hero |
| `wiki/sources/davies2026-stable-mercury-isotopes-as-a.md` | Stable mercury isotopes as a | Subject-fit review, then canonical hero |
| `wiki/sources/davis-2021-salivary-metals-oral-microbiome.md` | Low levels of salivary metals, oral microbiome composition and dental decay | Subject-fit review, then canonical hero |
| `wiki/sources/davydiuk2023-effects-of-dietary-intake-of-arsenosugars-and-other.md` | Effects of Dietary Intake of Arsenosugars and Other Organic Arsenic Species on Studies of Arsenic Methylation Efficiency in Humans | Subject-fit review, then canonical hero |
| `wiki/sources/dccf2021-infant-child-sunscreens-korea.md` | 영유아·어린이용 자외선 차단제 시험·평가 결과 (Test and evaluation results for infant and child sunscreens, attachments 1 and 2) | Subject-fit review, then canonical hero |
| `wiki/sources/de-anda-montanez2023-baja-red-crab-elements.md` | Spatial and Temporal Variability of Trace and Macro Elements in the Red Crab Pleuroncodes planipes in the Pacific Coast of the Baja California Peninsula, Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility.md` | Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment | Subject-fit review, then canonical hero |
| `wiki/sources/de-silva2023-industrial-waste-land-application-soil.md` | Land application of industrial wastes: impacts on soil quality, biota, and human health | Subject-fit review, then canonical hero |
| `wiki/sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone.md` | Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis | Subject-fit review, then canonical hero |
| `wiki/sources/decharat2020-school-drinking-water-pb-cd.md` | Risk assessment of lead and cadmium in drinking water for school use in Nakhon Si Thammarat Province, Thailand | Subject-fit review, then canonical hero |
| `wiki/sources/decharat2023-lead-cadmium-drinking-water-thailand.md` | Quality and risk assessment of lead and cadmium in drinking water for child development centres use in Phatthalung province, Thailand | Subject-fit review, then canonical hero |
| `wiki/sources/dehghani2020-food-lead-cadmium-mspe.md` | Magnetic Multi-Walled Carbon Nanotubes Modified with Polythiophene as a Sorbent for Simultaneous Solid Phase Microextraction of Lead and Cadmium from Water and Food Samples | Subject-fit review, then canonical hero |
| `wiki/sources/deka2023-monitoring-strategies-heavy-metals-chapter.md` | Monitoring Strategies for Heavy Metals in Foods and Beverages: Limitations for Human Health Risks | Subject-fit review, then canonical hero |
| `wiki/sources/delima2021-metals-canned-tuna-sardines-brazil.md` | Data on metals, nonmetal, and metalloid in the samples of the canned tuna and canned sardines sold in Brazil | Subject-fit review, then canonical hero |
| `wiki/sources/demir2023-infant-formulas-turkey-toxic-elements.md` | Estimated daily intake and health risk assessment of toxic elements in infant formulas | Subject-fit review, then canonical hero |

## Batch 101: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/demir2025-coffee-elements-turkiye.md` | Determination of Element Contents and Health Risk Assessment of Some Commercial Coffees in Turkiye | Subject-fit review, then canonical hero |
| `wiki/sources/deng2021-mg-corncob-biochar-cu-pb-cd-remediation.md` | Synthesis of Magnesium Modified Biochar for Removing Copper, Lead and Cadmium in Single and Binary Systems from Aqueous Solutions: Adsorption Mechanism | Subject-fit review, then canonical hero |
| `wiki/sources/deng2021-sb-oxidizing-bacteria-review.md` | A Critical Review of Resistance and Oxidation Mechanisms of Sb-Oxidizing Bacteria for the Bioremediation of Sb(III) Pollution | Subject-fit review, then canonical hero |
| `wiki/sources/deoliveira2018-traditional-herbal-teas-metals.md` | Metal concentrations in traditional and herbal teas and their potential risks to human health | Subject-fit review, then canonical hero |
| `wiki/sources/depa2015-cmr-toys.md` | CMR Substances in Toys – Market Surveillance and Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/depa2019-baby-food-lead-cadmium.md` | Heavy Metals in Baby Foods and Cereal Products | Subject-fit review, then canonical hero |
| `wiki/sources/depaiva2017-canned-tuna-metals-sao-paulo.md` | Cadmium, lead, tin, total mercury, and methylmercury in canned tuna commercialised in São Paulo, Brazil | Subject-fit review, then canonical hero |
| `wiki/sources/depaiva2019-baby-food-infant-formula-inorganic-contaminants.md` | Occurrence and determination of inorganic contaminants in baby food and infant formula | Subject-fit review, then canonical hero |
| `wiki/sources/depaiva2020-aluminum-cereal-based-baby-foods-brazil.md` | Aluminum content and effect of in vitro digestion on bioaccessible fraction in cereal-based baby foods | Subject-fit review, then canonical hero |
| `wiki/sources/deroma2017-prepared-meals-italy-metals.md` | Occurrence of cadmium, lead, mercury, and arsenic in prepared meals in Italy: Potential relevance for intake assessment | Subject-fit review, then canonical hero |
| `wiki/sources/derry1983-zinc-oxide-ointment-absorption.md` | A Study of the Percutaneous Absorption from Topically Applied Zinc Oxide Ointment | Subject-fit review, then canonical hero |
| `wiki/sources/desalew2023-rice-ethiopia.md` | Variations in elemental composition of rice (Oryza sativa L.) with different cultivation areas of Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/desouza2022-fruit-juice-trace-elements.md` | Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/devito2002-tampons-diapers-dioxin-exposure.md` | Exposure Assessment to Dioxins from the Use of Tampons and Diapers | Subject-fit review, then canonical hero |
| `wiki/sources/dey2016-disposable-diaper-exposure-factors.md` | Exposure Factor considerations for safety evaluation of modern disposable diapers | Subject-fit review, then canonical hero |
| `wiki/sources/dghaim2015-heavy-metals-uae-herbs.md` | Determination of Heavy Metals Concentration in Traditional Herbs Commonly Consumed in the United Arab Emirates | Subject-fit review, then canonical hero |
| `wiki/sources/dhawale2025-benzidine-chemosensor-mercury-vegetable-juice.md` | Benzidine-Based Chemosensors for Copper and Mercury Detection in Vegetable Juice | Subject-fit review, then canonical hero |
| `wiki/sources/dias2021-nutshell-biosorbents-cadmium-lead-mercury.md` | Nutshells as efficient biosorbents to remove cadmium, lead, and mercury from contaminated solutions | Subject-fit review, then canonical hero |
| `wiki/sources/diaz-bone2009-gut-metalloid-biovolatilization.md` | Biovolatilization of Metal(loid)s by Intestinal Microorganisms in the Simulator of the Human Intestinal Microbial Ecosystem | Subject-fit review, then canonical hero |
| `wiki/sources/diaz2012-chile-algae-arsenic.md` | Total and inorganic arsenic concentrations in different species of economically important algae harvested from coastal zones of Chile | Subject-fit review, then canonical hero |
| `wiki/sources/dibella2020-augusta-meat-milk-seafood-metals.md` | Heavy Metals and PAHs in Meat, Milk, and Seafood From Augusta Area (Southern Italy): Contamination Levels, Dietary Intake, and Human Exposure Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/dietz2025-arctic-mercury-isotopes-greenland.md` | Stable isotopes unveil ocean transport of legacy mercury into Arctic food webs | Subject-fit review, then canonical hero |
| `wiki/sources/digangi1997-greenpeace-vinyl-children-products.md` | Lead and Cadmium in Vinyl Children's Products: A Greenpeace Exposé | Subject-fit review, then canonical hero |
| `wiki/sources/digoarachchi2022-swordfish-yellowfin-tuna-sri-lanka-heavy-metals.md` | Determination of Geographical and Seasonal Variations of Heavy Metals in Swordfish (Xiphias gladius) and Yellowfin Tuna (Thunnus albacares) | Subject-fit review, then canonical hero |
| `wiki/sources/dineshkumar2025-fish-heavy-metals.md` | Comparative evaluation of heavy metal concentration in three commercially important fish: insights from organ-specific and interspecies variability | Subject-fit review, then canonical hero |

## Batch 102: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/ding2015-soy-glycinin-thiol-peptides-heavy-metal-complexation.md` | Heavy Metal Complexation of Thiol-Containing Peptides from Soy Glycinin Hydrolysates | Subject-fit review, then canonical hero |
| `wiki/sources/ding2023-heavy-metals-asd-meta-analysis.md` | Association between heavy metals exposure (cadmium, lead, arsenic, mercury) and child autistic disorder: a systematic review and meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/ding2023-peanut-cadmium-arsenic-transfer.md` | Characteristics and Mechanisms of Soil Co-Contamination Affecting the Transfer of Cadmium and Arsenic in Peanut (Arachis hypogaea L.) | Subject-fit review, then canonical hero |
| `wiki/sources/dinwiddie2018-orange-county-groundwater-arsenic.md` | Examining the Geologic Link of Arsenic Contamination in Groundwater in Orange County, North Carolina | Subject-fit review, then canonical hero |
| `wiki/sources/diogene2023-rascs-contaminants-seafood.md` | Risk Assessment Strategies for Contaminants in Seafood (RASCS) | Subject-fit review, then canonical hero |
| `wiki/sources/divis2020-mercury-fish-sauce-dgt-tda-aas.md` | Determination of Mercury in Fish Sauces by Thermal Decomposition Gold Amalgamation Atomic Absorption Spectroscopy after Preconcentration by Diffusive Gradients in Thin Films Technique | Subject-fit review, then canonical hero |
| `wiki/sources/divrikli2006-spices-herbal-plants-metals.md` | Trace heavy metal contents of some spices and herbal plants from western Anatolia, Turkey | Subject-fit review, then canonical hero |
| `wiki/sources/diyarov2022-food-processing-heavy-metals.md` | The effect of food processing on the content of heavy metals in vegetables | Subject-fit review, then canonical hero |
| `wiki/sources/djedjibegovic2020-bih-commercial-seafood-metals.md` | Heavy metals in commercial fish and seafood products and risk assessment in adult population in Bosnia and Herzegovina | Subject-fit review, then canonical hero |
| `wiki/sources/doan2025-mof-rgo-electrochemical-lead-sensor.md` | FeMg-BDC MOF/Reduced Graphene Oxide Electrochemical Sensor for Lead(II) Detection in Water | Subject-fit review, then canonical hero |
| `wiki/sources/dobrzynska2025-milk-formulae-elemental-composition.md` | Analysis of the Elemental Composition of Milk Formulae: Impact on the Nutritional Status of Infants From Birth to 1 Year of Age | Subject-fit review, then canonical hero |
| `wiki/sources/dogruyol2024-mediterranean-mussels-health-risk.md` | Evaluation of Health Risks Attributed to Toxic Trace Elements and Selenium in Farmed Mediterranean Mussels from Türkiye and Bulgaria | Subject-fit review, then canonical hero |
| `wiki/sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan.md` | Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020 | Subject-fit review, then canonical hero |
| `wiki/sources/dokubo2023-nigeria-seasoning-powder.md` | Heavy Metal Concentration and Human Health Risk Assessment of Selected Brands of Seasoning Powder Sold in Port Harcourt, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/domagalska2025-instant-coffee-heavy-metals.md` | A quantitative assessment of heavy metal contamination in instant coffee beverages: A comparative analysis of toxic element content and public health risk implications | Subject-fit review, then canonical hero |
| `wiki/sources/dordevic2019-aluminum-foil-culinary-baking-czech.md` | Aluminum contamination of food during culinary preparation: Case study with aluminum foil and consumers' preferences | Subject-fit review, then canonical hero |
| `wiki/sources/dorevitch2024-drinking-water-lead-spikes.md` | Lead in drinking water from particulate spike simulation: implications for exposure assessment | Subject-fit review, then canonical hero |
| `wiki/sources/dpph2009-food-and-chemical-toxicology-47-2009-2381-2388.md` | Food and Chemical Toxicology 47 (2009) 2381–2388 | Subject-fit review, then canonical hero |
| `wiki/sources/dragicevic2025-popcorn-essential-minerals.md` | Essential minerals and their potential bioavailability in popcorn (Zea mays L. subsp. everta (Sturtev.) Zhuk.) kernels and flakes | Subject-fit review, then canonical hero |
| `wiki/sources/druml2023-sunscreen-label-marketing-pediatric-populations.md` | Sunscreen Label Marketing Towards Pediatric Populations: Guidance for Navigating Sunscreen Choice | Subject-fit review, then canonical hero |
| `wiki/sources/dtu2024-food-contact-pb-cd-limits.md` | Suggestive maximum limits for lead and cadmium in food contact materials | Subject-fit review, then canonical hero |
| `wiki/sources/du2025-infant-thickener-urinary-arsenic.md` | Heavy metal exposures in aerodigestive clinic cohort of infants with reflux or dysphagia | Subject-fit review, then canonical hero |
| `wiki/sources/du2025-petfood-china-metals.md` | Individual and combined contamination of the toxic metals in commercial cat and dog food | Subject-fit review, then canonical hero |
| `wiki/sources/duan2023-infant-lead-poisoning-topical-powder.md` | Lead poisoning in a 6-month-old infant: a case report | Subject-fit review, then canonical hero |
| `wiki/sources/duarte2022-arsenic-cancer-argentina.md` | Cancer mortality and its relationship with arsenic and nitrates in drinking water in central Argentina | Subject-fit review, then canonical hero |

## Batch 103: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/dufault2015-blood-mercury-glucose-nhanes.md` | Blood inorganic mercury is directly associated with glucose levels in the human population and may be linked to processed food intake | Subject-fit review, then canonical hero |
| `wiki/sources/duinker2020-macroalgae-food-feed-safety.md` | Knowledge update on macroalgae food and feed safety | Subject-fit review, then canonical hero |
| `wiki/sources/dulshan2018-clay-water-filter-ckdu.md` | Suitability of Clay Water Filter for the Removal of Nephrotoxic Constituents in CKDu Prevalent Areas | Subject-fit review, then canonical hero |
| `wiki/sources/durdjic2021-lead-isotopes-wine-origin.md` | Is a Lead Isotope Ratios in Wine Good Marker for Origin Assessment? | Subject-fit review, then canonical hero |
| `wiki/sources/durovic2017-human-milk-infant-formula-microelements.md` | Determination of Microelements in Human Milk and Infant Formula Without Digestion by ICP-OES | Subject-fit review, then canonical hero |
| `wiki/sources/duwiejuah2026-pineapple-biochar-leachate-metals.md` | Simultaneous Adsorption of Chromium, Nickel, and Phenol from Landfill Leachate Using Pineapple Residues Biochar | Subject-fit review, then canonical hero |
| `wiki/sources/dvyliuk2019-bee-sumerian-silver-metals.md` | Influence of the Sumerian Silver on the viability of honey bees and the content of individual microelements in their organism | Subject-fit review, then canonical hero |
| `wiki/sources/dyakova2023-voronezh-medicinal-plant-metals.md` | Study of Peculiarities of Accumulation of Heavy Metals and Arsenic in Medicinal Plant Raw Materials of Synanthropic Flora of Voronezh Region | Subject-fit review, then canonical hero |
| `wiki/sources/dziubanek2025-upper-silesia-soil-children.md` | Health Risk for Non-Dietary Children's Exposure to Heavy Metals in Postindustrial Areas in Upper Silesia, Poland | Subject-fit review, then canonical hero |
| `wiki/sources/eac2021-deas-425-2-baby-powder.md` | DEAS 425-2:2021 Skin powders - Specification - Part 2: Baby powder | Subject-fit review, then canonical hero |
| `wiki/sources/eac2023-deas-425-1-body-face-powder.md` | DEAS 425-1:2023 Skin powders - Specification - Part 1: Body and face powder | Subject-fit review, then canonical hero |
| `wiki/sources/eaeu2011-tr-cu-009-perfumery-cosmetics.md` | TR CU 009/2011 On the Safety of Perfumery and Cosmetic Products | Subject-fit review, then canonical hero |
| `wiki/sources/eaglessmith2016-freshwater-fish-mercury-western-us-canada.md` | Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada | Subject-fit review, then canonical hero |
| `wiki/sources/ebisike2021-chitosan-silica-nickel-sorption.md` | Nickel Sorption onto Chitosan - Silica Hybrid Aerogel from Aqueous Solution | Subject-fit review, then canonical hero |
| `wiki/sources/ebrahimi2015-broiler-dietary-lead-transporters.md` | Effect of Dietary Lead on Intestinal Nutrient Transporters mRNA Expression in Broiler Chickens | Subject-fit review, then canonical hero |
| `wiki/sources/ec-reg-2022-617-mercury-fishery.md` | Commission Regulation (EU) 2022/617 of 12 April 2022 amending Regulation (EC) No 1881/2006 as regards maximum levels of mercury in fish and salt | Subject-fit review, then canonical hero |
| `wiki/sources/ec2004-scoop-heavy-metals-dietary-exposure.md` | Assessment of the dietary exposure to arsenic, cadmium, lead and mercury of the population of the EU Member States | Subject-fit review, then canonical hero |
| `wiki/sources/ec2013-tsd-rev1-7-guidance.md` | Toy Safety Directive 2009/48/EC — An Explanatory Guidance Document (Rev 1.7) | Subject-fit review, then canonical hero |
| `wiki/sources/ec2019-cadmium-chocolate-leaflet.md` | Cadmium in Chocolate (European Commission consumer information leaflet) | Subject-fit review, then canonical hero |
| `wiki/sources/ec2024-eu-ecolabel-user-manual-detergents.md` | EU Ecolabel User Manual for Detergents and Cleaning Products (Version 1.5, February 2024) — guidance supporting Commission Decisions (EU) 2017/1214, 2017/1215, 2017/1216, 2017/1217, 2017/1218 and 2017/1219 | Subject-fit review, then canonical hero |
| `wiki/sources/eccles2024-polar-bear-metals-traditional-food.md` | Non-invasive biomonitoring of polar bear feces can be used to estimate concentrations of metals of concern in traditional food | Subject-fit review, then canonical hero |
| `wiki/sources/ecetoc1992-tr045-ni-co-cr-consumer-products.md` | Nickel, Cobalt and Chromium in Consumer Products: Allergic Contact Dermatitis | Subject-fit review, then canonical hero |
| `wiki/sources/ecfr-21cfr10112-serving-sizes.md` | 21 CFR 101.12 — Reference Amounts Customarily Consumed Per Eating Occasion | Subject-fit review, then canonical hero |
| `wiki/sources/echa2023-cmr-childcare-articles.md` | Investigation report to support the Commission on the preparation of a restriction proposal for the use and presence of CMR 1A or 1B substances in childcare articles based on REACH Article 68(2) | Subject-fit review, then canonical hero |
| `wiki/sources/edirisinghe2019-sri-lanka-legumes-cereals-as-cd.md` | Arsenic and cadmium concentrations in legumes and cereals grown in the North Central Province, Sri Lanka and assessment of their health risk | Subject-fit review, then canonical hero |

## Batch 104: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/editor2019-manganese-levels-infant-formula.md` | Manganese Levels in Infant Formula and Young Child Nutritional Beverages in the United States and France | Subject-fit review, then canonical hero |
| `wiki/sources/edqm-2023-safe-cosmetics-young-children-2nd-ed.md` | Safe cosmetics for young children: a guide for manufacturers and safety assessors (2nd edition). Council of Europe Resolution CM/ResAP (2012) 1 on safety criteria for cosmetic products intended for infants. | Subject-fit review, then canonical hero |
| `wiki/sources/edqm2024-metals-alloys-food-contact-guide.md` | Metals and alloys used in food contact materials and articles: a technical guide for manufacturers and regulators, 2nd edition | Subject-fit review, then canonical hero |
| `wiki/sources/edqm2026-pheur-0252-zinc-oxide-knowledge-database.md` | Knowledge Database: Zinc oxide, European Pharmacopoeia monograph 00252, monograph details and history | Subject-fit review, then canonical hero |
| `wiki/sources/eeb2022-eu-ecolabel-30-year-briefing.md` | The EU Ecolabel celebrates its 30th birthday! What does the scheme stand for? | Subject-fit review, then canonical hero |
| `wiki/sources/efendi2025-mercury-exposure-leading-to.md` | Mercury exposure leading to | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-aluminium-afc-2008.md` | Safety of Aluminium from Dietary Intake | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-arsenic-contam-2009.md` | Scientific Opinion on Arsenic in Food | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-cadmium-2011-statement.md` | Statement on Tolerable Weekly Intake for Cadmium | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-cadmium-contam-2009.md` | Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-chromium-contam-2014.md` | Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-food-safety-research-needs-2030.md` | Food Safety Regulatory Research Needs 2030 | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-lead-contam-2010.md` | Scientific Opinion on Lead in Food | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-mercury-methylmercury-2012.md` | Scientific Opinion on the Risk for Public Health Related to the Presence of Mercury and Methylmercury in Food | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-nickel-contam-2020.md` | Update of the Risk Assessment of Nickel in Food and Drinking Water | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-sc-2017-bmd-update.md` | Update: use of the benchmark dose approach in risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/efsa-sc2015-fish-seafood-mehg-risk-benefit.md` | Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2004-afc-antimony-trioxide-food-contact.md` | Opinion of the Scientific Panel on food additives, flavourings, processing aids and materials in contact with food (AFC) on a request from the Commission related to a 2nd list of substances for food contact materials | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2004-organotins-foodstuffs.md` | Opinion of the Scientific Panel on Contaminants in the Food Chain on a request from the Commission to assess the health risks to consumers associated with exposure to organotins in foodstuffs | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2005-tin-food-upper-intake.md` | Opinion of the Scientific Panel on Dietetic Products, Nutrition and Allergies on a request from the Commission related to the tolerable upper intake level of tin | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2012-cadmium-dietary-exposure-europe.md` | Cadmium dietary exposure in the European population | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2014-dietary-exposure-iAs.md` | Dietary exposure to inorganic arsenic in the European population | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2015-nickel-food-water.md` | Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2016-titanium-dioxide-e171-re-evaluation.md` | Re-evaluation of titanium dioxide (E 171) as a food additive | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2021-aluminium-food-qa.md` | Aluminium in Food (Q&A): Sources, Safety and Regulations | Subject-fit review, then canonical hero |

## Batch 105: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/efsa2021-chronic-exposure-iAs.md` | Chronic dietary exposure to inorganic arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2021-e171-titanium-dioxide-safety.md` | Safety assessment of titanium dioxide (E171) as a food additive | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2022-buffered-vinegar-food-additive-safety.md` | Safety evaluation of buffered vinegar as a food additive | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2022-glycerol-e422-heavy-metals.md` | Follow-up of the re-evaluation of glycerol (E 422) as a food additive | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2022-lemna-novel-food.md` | Safety of Lemna minor and Lemna gibba whole plant material as a novel food pursuant to Regulation (EU) 2015/2283 | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2022-pgpr-e476-heavy-metals.md` | Follow-up of the re-evaluation of polyglycerol polyricinoleate (E 476) as a food additive | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2022-polyglycerol-esters-e475-heavy-metals.md` | Follow-up of the re-evaluation of polyglycerol esters of fatty acids (E 475) as a food additive | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2022-sulfites-toxic-elements.md` | Follow-up of the re-evaluation of sulfur dioxide (E 220), sodium sulfite (E 221), sodium bisulfite (E 222), sodium metabisulfite (E 223), potassium metabisulfite (E 224), calcium sulfite (E 226), calcium bisulfite (E 227) and potassium bisulfite (E 228) | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2023-heavy-metals-seaweed.md` | Dietary exposure to heavy metals and iodine intake via consumption of seaweeds and halophytes in the European population | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2024-emerging-chemical-risks-food-feed.md` | Emerging chemical risks in food and feed | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2024-organoarsenic-species.md` | Risk assessment of small organoarsenic species in food | Subject-fit review, then canonical hero |
| `wiki/sources/efsa2024-risk-assessment-iAs-update.md` | Update of the risk assessment of inorganic arsenic in food | Subject-fit review, then canonical hero |
| `wiki/sources/egbe2023-heavy-metals-tilapia-cameroon.md` | Heavy metal exposure risk associated with ingestion of Oreochromis niloticus and Coptodon kottae harvested from a lacustrine ecosystem | Subject-fit review, then canonical hero |
| `wiki/sources/eggers-2023-prenatal-lead-gut-microbiome-childhood.md` | Prenatal lead exposure is negatively associated with the gut microbiome in childhood | Subject-fit review, then canonical hero |
| `wiki/sources/eggers2023-prenatal-lead-exposure-gut-microbiome-childhood.md` | Prenatal lead exposure is negatively associated with the gut microbiome in childhood | Subject-fit review, then canonical hero |
| `wiki/sources/ek2017-detection-of-selected-heavy-metals-and-micronutrients-in.md` | DETECTION OF SELECTED HEAVY METALS AND MICRONUTRIENTS IN | Subject-fit review, then canonical hero |
| `wiki/sources/el-batal2023-carrot-wastewater-selenium-nanoparticles.md` | Effect of selenium nanoparticles on heavy metal accumulation in carrot (Daucus carota) irrigated with wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/el-daouk2020-aluminum-food-lebanon.md` | Aluminum exposure from food in the population of Lebanon | Subject-fit review, then canonical hero |
| `wiki/sources/el-hassanin2020-egypt-maize-pb-cd.md` | Risk assessment of human exposure to lead and cadmium in maize grains cultivated in soils irrigated either with low-quality water or freshwater | Subject-fit review, then canonical hero |
| `wiki/sources/elabiad2025-and-cord-blood-levels-of-cadmium-lead-manganese.md` | and Cord Blood Levels of Cadmium, Lead, Manganese, Mercury, | Subject-fit review, then canonical hero |
| `wiki/sources/elbagermi2012-misurata-fruits-vegetables-metals.md` | Monitoring of Heavy Metal Content in Fruits and Vegetables Collected from Production and Market Sites in the Misurata Area of Libya | Subject-fit review, then canonical hero |
| `wiki/sources/elbagory2025-toxic-elements-melon-ganges-yamuna.md` | Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin | Subject-fit review, then canonical hero |
| `wiki/sources/elder2024-culture-of-antiquity-and-later-times-starting-with.md` | culture of antiquity and later times, starting with the mythological | Subject-fit review, then canonical hero |
| `wiki/sources/elhadad2020-coffee-serum-lead-cadmium.md` | Metabolites, Nutrients, and Lifestyle Factors in Relation to Coffee Consumption: An Environment-Wide Association Study | Subject-fit review, then canonical hero |
| `wiki/sources/elliott1998-antimony-trioxide-genotoxicity.md` | An assessment of the genetic toxicology of antimony trioxide | Subject-fit review, then canonical hero |

## Batch 106: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/ellison2026-tampon-lead-exposure.md` | Integrating experimental data and mechanistic modeling to assess potential lead exposure from tampon use | Subject-fit review, then canonical hero |
| `wiki/sources/elmosbah2024-aluminum-rivastigmine-rats.md` | Preclinical efficacy of oral and nasal rivastigmine-loaded chitosan nano-particles on AlCl3-induced Alzheimer's-like disease in rats | Subject-fit review, then canonical hero |
| `wiki/sources/elsebai2023-amperometric-mercury-sensor.md` | Novel Amperometric Mercury-Selective Sensor Based on Organic Chelator Ionophore | Subject-fit review, then canonical hero |
| `wiki/sources/elsharkawy2025-heavy-metal-pollution-in-coastal-environments-ecological-implications.md` | Heavy Metal Pollution in Coastal Environments: Ecological Implications and Management Strategies: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi.md` | Evaluation of Some Toxic and Essential Trace Elements in Children Foods and Infant Formulae by Using ICP-OES | Subject-fit review, then canonical hero |
| `wiki/sources/elteren2007-a-systematic-study-on-the-extractability-of-arsenic.md` | A systematic study on the extractability of arsenic species from algal certified reference material IAEA-140/TM (Fucus sp., Sea Plant Homogenate) using methanol/water extractant mixtures | Subject-fit review, then canonical hero |
| `wiki/sources/elziani2024-instant-noodles-libya-metals.md` | Assessment of Heavy Metal Concentrations in Instant Noodles from Local Markets in Benghazi, Libya | Subject-fit review, then canonical hero |
| `wiki/sources/ema2025-synthetic-peptides-elemental-impurities.md` | Guideline on the Development and Manufacture of Synthetic Peptides | Subject-fit review, then canonical hero |
| `wiki/sources/emmanuel2025-kano-urban-vegetables-metals.md` | Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/enamorado-montes2021-mercury-rice-colombia-mojana.md` | Mercury Accumulation in Commercial Varieties of Oryza sativa L. Cultivated in Soils of La Mojana Region, Colombia | Subject-fit review, then canonical hero |
| `wiki/sources/enemuor2021-palm-oil-kogi-metals.md` | Heavy metals and microbial contamination of palm oil produced and sold at some markets in Kogi East Area, Kogi State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/engineering2024-process-effects-on-ammonia-chromium-total-suspended-solid.md` | Process – Effects on Ammonia, Chromium, Total Suspended Solid, | Subject-fit review, then canonical hero |
| `wiki/sources/engrola2023-arsenite-oxidase-antimonite.md` | Arsenite oxidase in complex with antimonite and arsenite oxyanions: Insights into the catalytic mechanism | Subject-fit review, then canonical hero |
| `wiki/sources/enogbe2025-bwari-chocolate-metals.md` | Levels of heavy metals concentrations in chocolates from Bwari market Abuja FCT, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/epa-air-toxics-nickel-compounds-2000.md` | Nickel Compounds — EPA Air Toxics Hazard Summary fact sheet | Subject-fit review, then canonical hero |
| `wiki/sources/epa-archived-consumer-factsheet-antimony.md` | Archived consumer fact sheet on antimony | Subject-fit review, then canonical hero |
| `wiki/sources/epa-arsenic-drinking-water-mcl.md` | EPA Drinking Water Arsenic MCL Rule (10 ppb) | Subject-fit review, then canonical hero |
| `wiki/sources/epa-eco-ssl-nickel-2007.md` | Ecological Soil Screening Levels for Nickel — Interim Final | Subject-fit review, then canonical hero |
| `wiki/sources/epa-iris-cadmium-1989.md` | Cadmium (CASRN 7440-43-9) — IRIS Chemical Assessment Summary | Subject-fit review, then canonical hero |
| `wiki/sources/epa-iris-chromium-hexavalent-2024.md` | IRIS Toxicological Review of Hexavalent Chromium [Cr(VI)] (CASRN 18540-29-9) | Subject-fit review, then canonical hero |
| `wiki/sources/epa-iris-inorganic-arsenic-2025.md` | IRIS Toxicological Review of Inorganic Arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/epa-iris-lead-2004.md` | Lead and Compounds (Inorganic) — IRIS Chemical Assessment Summary | Subject-fit review, then canonical hero |
| `wiki/sources/epa-iris-mercuric-chloride.md` | Mercuric Chloride (HgCl2) — IRIS Chemical Assessment Summary | Subject-fit review, then canonical hero |
| `wiki/sources/epa-iris-methylmercury.md` | Methylmercury (MeHg) — IRIS Chemical Assessment Summary | Subject-fit review, then canonical hero |
| `wiki/sources/epa1997-arsenic-fish-shellfish.md` | Arsenic and Fish Consumption | Subject-fit review, then canonical hero |

## Batch 107: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/epa1997-tbto-iris-toxicological-review.md` | Toxicological Review of Tributyltin Oxide (CAS No. 56-35-9) In Support of Summary Information on the Integrated Risk Information System (IRIS) | Subject-fit review, then canonical hero |
| `wiki/sources/epa1999-mercury-update-fish-advisories.md` | Mercury Update: Impact on Fish Advisories | Subject-fit review, then canonical hero |
| `wiki/sources/epa2024-safer-choice-master-criteria-ingredients.md` | EPA's Safer Choice Program — Master Criteria for Safer Ingredients (Version 2.1, October 2024) | Subject-fit review, then canonical hero |
| `wiki/sources/epa2024-safer-choice-standard-dfe.md` | EPA's Safer Choice and Design for the Environment (DfE) Standard (August 2024) | Subject-fit review, then canonical hero |
| `wiki/sources/epa2025-40-cfr-503-biosolids-metals.md` | 40 CFR Part 503 - Standards for the Use or Disposal of Sewage Sludge | Subject-fit review, then canonical hero |
| `wiki/sources/epa2026-npdwr-antimony.md` | National Primary Drinking Water Regulations table, antimony row | Subject-fit review, then canonical hero |
| `wiki/sources/erfani2015-nickel-short-skin-contact.md` | Short and frequent skin contact with nickel | Subject-fit review, then canonical hero |
| `wiki/sources/ericson2020-georgian-spices-lead.md` | Elevated Levels of Lead (Pb) Identified in Georgian Spices | Subject-fit review, then canonical hero |
| `wiki/sources/erol2025-turkish-cheese-metals.md` | Safety and Nutritional Profile of Traditional Turkish Cheeses: A Comprehensive Study on Their Mineral Content, Heavy Metal Contamination, and Health Risks of Aho, Golot, and Telli | Subject-fit review, then canonical hero |
| `wiki/sources/ertas2021-poultry-calf-meat-arsenic.md` | Evaluation of Arsenic Concentration in Poultry and Calf Meat Samples by Hydride Generation Atomic Fluorescence Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/escobar-camacho2024-mercury-fish-ecuador-amazon.md` | Mercury in aquatic ecosystems of two indigenous communities in the Piedmont Ecuadorian Amazon: evidence from fish, water, and sediments | Subject-fit review, then canonical hero |
| `wiki/sources/escp2021-pb-as-balsamic-vinegar-fda-letter.md` | Letter to FDA: Dangerously high levels of arsenic and lead found in many vinegar products require action by the FDA | Subject-fit review, then canonical hero |
| `wiki/sources/esoyan2024-matsoun-ceramic-packaging.md` | Impact of ceramic packaging on the quality and safety of Armenian fermented dairy product Matsoun | Subject-fit review, then canonical hero |
| `wiki/sources/esplandiu2022-nafion-cadmium-micropumps.md` | From radial to unidirectional water pumping in zeta-potential modulated Nafion nanostructures | Subject-fit review, then canonical hero |
| `wiki/sources/eticha2018-infant-formula-metals-mekelle-ethiopia.md` | Infant Exposure to Metals through Consumption of Formula Feeding in Mekelle, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2009-1223-cosmetic-products-regulation.md` | Regulation (EC) No 1223/2009 of the European Parliament and of the Council of 30 November 2009 on cosmetic products (recast) | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2009-48-toy-safety-consolidated-2026-08-29.md` | Directive 2009/48/EC, consolidated text 29 August 2026 | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2009-48-toy-safety-oj.md` | Directive 2009/48/EC on the safety of toys, original Official Journal | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2014-350-ecolabel-textiles-consolidated-2026-01-06.md` | Decision 2014/350/EU, consolidated text 6 January 2026 | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2014-350-ecolabel-textiles.md` | Decision 2014/350/EU, EU Ecolabel for textile products, original Official Journal | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2020-2184-drinking-water-directive.md` | Directive (EU) 2020/2184, drinking water, antimony parametric value | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2021-1323-cadmium-foodstuffs-amendment.md` | Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2023-1809-ecolabel-absorbent-hygiene.md` | Decision (EU) 2023/1809, EU Ecolabel for absorbent hygiene products | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2023-915-contaminants-maximum-levels.md` | Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006 | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2024-1987-nickel-maximum-levels.md` | Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs | Subject-fit review, then canonical hero |

## Batch 108: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/eu-2024-907-nickel-monitoring-recommendation.md` | Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food | Subject-fit review, then canonical hero |
| `wiki/sources/eu-2025-2509-toy-safety-regulation.md` | Regulation (EU) 2025/2509 on the safety of toys | Subject-fit review, then canonical hero |
| `wiki/sources/eu-scf-2002-acute-tin-canned-foods.md` | Opinion of the Scientific Committee on Food on Acute Risks Posed by Tin in Canned Foods | Subject-fit review, then canonical hero |
| `wiki/sources/eu2002-animal-feed-undesirable-substances.md` | Directive 2002/32/EC of the European Parliament and of the Council on undesirable substances in animal feed - consolidated version of 28 November 2019 | Subject-fit review, then canonical hero |
| `wiki/sources/eu2011-reach-cadmium-annex-xvii.md` | Commission Regulation (EU) No 494/2011 of 20 May 2011 amending Regulation (EC) No 1907/2006 as regards Annex XVII (Cadmium) | Subject-fit review, then canonical hero |
| `wiki/sources/eu2011-rohs-restricted-substances.md` | Directive 2011/65/EU on restriction of the use of certain hazardous substances in electrical and electronic equipment - consolidated version of 1 March 2023 | Subject-fit review, then canonical hero |
| `wiki/sources/eu2014-reach-chromium-vi-leather.md` | Commission Regulation (EU) No 301/2014 of 25 March 2014 amending Annex XVII to Regulation (EC) No 1907/2006 as regards chromium VI compounds | Subject-fit review, then canonical hero |
| `wiki/sources/eu2015-consolidated-1881-2006-contaminants.md` | Commission Regulation (EC) No 1881/2006, consolidated text of 21 May 2015 | Subject-fit review, then canonical hero |
| `wiki/sources/eu2015-reach-lead-mouthable-articles.md` | Commission Regulation (EU) 2015/628 - REACH Annex XVII lead in articles | Subject-fit review, then canonical hero |
| `wiki/sources/eu2018-reach-cmr-textiles.md` | Commission Regulation (EU) 2018/1513 - REACH CMR restrictions in textiles | Subject-fit review, then canonical hero |
| `wiki/sources/eu2019-fertilising-products-heavy-metals.md` | Regulation (EU) 2019/1009 - EU fertilising products | Subject-fit review, then canonical hero |
| `wiki/sources/eu2020-reach-tattoo-inks.md` | Commission Regulation (EU) 2020/2081 amending REACH Annex XVII as regards substances in tattoo inks or permanent make-up | Subject-fit review, then canonical hero |
| `wiki/sources/eu2020-retained-1881-2006-contaminants.md` | Commission Regulation (EC) No 1881/2006, consolidated text 28 September 2020 | Subject-fit review, then canonical hero |
| `wiki/sources/eu2023-915-lead-infant-young-child-foods.md` | Commission Regulation (EU) 2023/915 — Lead Maximum Levels for Infant and Young-Child Foods | Subject-fit review, then canonical hero |
| `wiki/sources/eu2023-batteries-restrictions.md` | Regulation (EU) 2023/1542 concerning batteries and waste batteries | Subject-fit review, then canonical hero |
| `wiki/sources/europeancommission2020-drinking-water-directive.md` | Directive (EU) 2020/2184 of the European Parliament and of the Council of 16 December 2020 on the quality of water intended for human consumption | Subject-fit review, then canonical hero |
| `wiki/sources/europeancommission2025-inorganic-arsenic-fish-seafood.md` | Commission Regulation (EU) 2025/1891 of 17 September 2025 amending Regulation (EU) 2023/915 as regards maximum levels of inorganic arsenic in fish and other seafood | Subject-fit review, then canonical hero |
| `wiki/sources/ewicz2023-between-toxic-and-essential-metals.md` | between Toxic and Essential Metals | Subject-fit review, then canonical hero |
| `wiki/sources/ewubare2024-academic-review-heavy-metals-environment.md` | An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions | Subject-fit review, then canonical hero |
| `wiki/sources/ezema2023-evaluation-of-pesticide-residues-and-heavy-metals.md` | Evaluation of pesticide residues and heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/ezike2024-nigerian-poultry-pte.md` | An evaluation of the health risks, antibiotic residue levels and potentially toxic ingredients in Nigerian poultry products | Subject-fit review, then canonical hero |
| `wiki/sources/f2021-advances-in-clinical-toxicology.md` | Advances in Clinical Toxicology | Subject-fit review, then canonical hero |
| `wiki/sources/fabricant2007-arsenic-in-herbal-kelp-supplements-concentration-regulations-and.md` | Arsenic in Herbal Kelp Supplements: Concentration, Regulations, and Labeling | Subject-fit review, then canonical hero |
| `wiki/sources/fagbemi2023-akure-street-foods-lead.md` | Microbial Density and Diversity and Lead Loads in Selected Street-Hawked Foods in Akure Metropolis, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/falandysz2020-yunnan-fungi-mercury.md` | Mercury in traditionally foraged species of fungi (macromycetes) from the karst area across Yunnan province in China | Subject-fit review, then canonical hero |

## Batch 109: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/falandysz2022-boletus-mercury-methylmercury.md` | Total mercury and methylmercury (MeHg) in braised and crude Boletus edulis carpophores during various developmental stages | Subject-fit review, then canonical hero |
| `wiki/sources/falconer1983-north-sea-seafood-arsenic.md` | Arsenic levels in fish and shellfish from the North Sea | Subject-fit review, then canonical hero |
| `wiki/sources/famic2021-pet-food-heavy-metal-standards.md` | Specifications and Standards of Pet Food | Subject-fit review, then canonical hero |
| `wiki/sources/famurewa2023-coconut-oil-metals-pesticides.md` | Comparative assessment of different coconut oils: Chromatographic and spectrometric analyses of pesticide residues, toxic heavy metals, and associated contents | Subject-fit review, then canonical hero |
| `wiki/sources/fan2025-hangzhou-green-tea-metals.md` | Occurrence, exposure and health risk assessment of heavy metals in green tea samples cultivated in Hangzhou area | Subject-fit review, then canonical hero |
| `wiki/sources/fangstrom2008-breastfeeding-arsenic-protection-bangladesh.md` | Breast-Feeding Protects against Arsenic Exposure in Bangladeshi Infants | Subject-fit review, then canonical hero |
| `wiki/sources/faraca2023-commission-nor-any-person-acting-on-behalf-of.md` | Commission nor any person acting on behalf of the Commission is responsible for the use that might be made of this | Subject-fit review, then canonical hero |
| `wiki/sources/farahat2025-cadmium-hepatotoxicity-sinapic-acid.md` | Sinapic Acid Ameliorates Cadmium-Induced Hepatotoxicity: Modulation of Oxidative Stress, Inflammation, and Apoptosis | Subject-fit review, then canonical hero |
| `wiki/sources/faraj2023-backyard-chicken-metals-iraq.md` | Determination of Heavy Metal Residue in Backyard Chicken at Various Regions in Sulaymaniyah Province | Subject-fit review, then canonical hero |
| `wiki/sources/farid2010-fruit-juices-jeddah-trace-elements.md` | Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/farina-rocha-aschner-2011-mehg-mechanism.md` | Mechanisms of Methylmercury-Induced Neurotoxicity: Evidence from Experimental Studies | Subject-fit review, then canonical hero |
| `wiki/sources/farinas2023-university-of-technology-malaysia-malaysia-lana-abbas-oliver.md` | University of Technology Malaysia, Malaysia Lana Abbas , Oliver Coutinho , Aleksa Fortuna , Fatima Sulaiman , | Subject-fit review, then canonical hero |
| `wiki/sources/farzan2021-hispanic-urinary-arsenic.md` | Demographic Predictors of Urinary Arsenic in a Low-Income Predominantly Hispanic Pregnancy Cohort in Los Angeles | Subject-fit review, then canonical hero |
| `wiki/sources/fasahat2015-rice-cd-tolerance.md` | Recent progress in understanding cadmium toxicity and tolerance in rice | Subject-fit review, then canonical hero |
| `wiki/sources/fatai2024-african-spinach-tomato-nigeria.md` | Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/fatima2024-breast-milk-heavy-metals-lahore-neutrosophic.md` | Analysis of heavy metal concentrations in breast milk by neutrosophic method in the locate of Lahore, Pakistan | Subject-fit review, then canonical hero |
| `wiki/sources/fattorini2004-cienfuegos-seafood-arsenic-speciation.md` | Chemical speciation of arsenic in different marine organisms: Importance in monitoring studies | Subject-fit review, then canonical hero |
| `wiki/sources/fattorini2006-marine-organisms-arsenic-speciation.md` | Characterization of arsenic content in marine organisms from temperate, tropical, and polar environments | Subject-fit review, then canonical hero |
| `wiki/sources/fda-ctz-Pb-babyfood-2025.md` | Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry | Subject-fit review, then canonical hero |
| `wiki/sources/fda-draft-lead-cosmetic-lip-externally-applied.md` | Lead in Cosmetic Lip Products and Externally Applied Cosmetics: Recommended Maximum Level, Guidance for Industry | Subject-fit review, then canonical hero |
| `wiki/sources/fda-epa-fish-consumption-advice.md` | Advice About Eating Fish — For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years | Subject-fit review, then canonical hero |
| `wiki/sources/fda-import-alert-99-42-spice-lead.md` | FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination | Subject-fit review, then canonical hero |
| `wiki/sources/fda-tds-elements-2018-2020.md` | Total Diet Study Report: Fiscal Years 2018-2020 Elements Data | Subject-fit review, then canonical hero |
| `wiki/sources/fda1990-55fr25204-diaper-rash-tentative-final-monograph.md` | Skin Protectant Drug Products for Over-the-Counter Human Use; Tentative Final Monograph for Diaper Rash Drug Products; Proposed Rule | Subject-fit review, then canonical hero |
| `wiki/sources/fda2003-68fr33362-skin-protectant-final-monograph.md` | Skin Protectant Drug Products for Over-the-Counter Human Use; Final Monograph | Subject-fit review, then canonical hero |

## Batch 110: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/fda2004-juice-haccp-lead.md` | Juice HACCP Hazards and Controls Guidance, First Edition — Lead in Juice | Subject-fit review, then canonical hero |
| `wiki/sources/fda2011-apple-juice-arsenic-speciation.md` | Results of Arsenic Analysis in Single-Strength Apple Juice 2011 (ORA Sampling Assignment 2011102701) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2011-arsenic-apple-juice-2005-2011.md` | Arsenic in Apple Juice: Analytical Results from the 2005–2011 Toxic Elements Food and Foodware Program | Subject-fit review, then canonical hero |
| `wiki/sources/fda2013-ias-rice-products-sampling.md` | Analytical Results from Inorganic Arsenic in Rice and Rice Products Sampling, September 2013 | Subject-fit review, then canonical hero |
| `wiki/sources/fda2016-arsenic-rice-cereal-analytic-results.md` | Analytical Results: Inorganic Arsenic in Infant/Toddler Foods (2016) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2016-arsenic-rice-risk-assessment.md` | Arsenic in Rice and Rice Products Risk Assessment Report | Subject-fit review, then canonical hero |
| `wiki/sources/fda2016-infant-toddler-foods-inorganic-arsenic.md` | Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers | Subject-fit review, then canonical hero |
| `wiki/sources/fda2018-iAs-infant-rice-cereals-fy2018.md` | Fiscal Year 2018 Arsenic in Infant Rice Cereals Assignment Data | Subject-fit review, then canonical hero |
| `wiki/sources/fda2018-lead-in-juice-fy2005-fy2018.md` | Analytical Results for Lead in Juice Sampled Under the FDA's Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic Compliance Program (FY2005-FY2018) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2019-sunscreen-proposed-rule-84fr6204.md` | Sunscreen Drug Products for Over-the-Counter Human Use (proposed rule) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2020-ias-infant-rice-cereal-guidance.md` | Inorganic Arsenic in Rice Cereals for Infants: Action Level, Guidance for Industry | Subject-fit review, then canonical hero |
| `wiki/sources/fda2020-iAs-rice-cereal-supporting-doc.md` | Supporting Document for Action Level for Inorganic Arsenic in Rice Cereals for Infants | Subject-fit review, then canonical hero |
| `wiki/sources/fda2021-lead-baby-food-fy2020-fy2021.md` | Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2021-otc-monograph-m016-skin-protectant.md` | Over-the-Counter (OTC) Monograph M016: Skin Protectant Drug Products for Over-the-Counter Human Use (Posted September 24, 2021) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2022-draft-lead-juice.md` | Draft Guidance for Industry: Action Levels for Lead in Juice | Subject-fit review, then canonical hero |
| `wiki/sources/fda2022-tds-elements-analytical-key.md` | FY2018-FY2020 TDS Elements Analytical Results Key | Subject-fit review, then canonical hero |
| `wiki/sources/fda2022-tds-elements-fy2018-fy2020.md` | FY2018-FY2020 TDS Elements Analytical Results | Subject-fit review, then canonical hero |
| `wiki/sources/fda2023-21cfr-part73-color-additives.md` | 21 CFR Part 73 color additives exempt from certification, 4-1-2023 edition | Subject-fit review, then canonical hero |
| `wiki/sources/fda2023-21cfr-part74-color-additives.md` | 21 CFR Part 74 color additives subject to certification, 4-1-2023 edition | Subject-fit review, then canonical hero |
| `wiki/sources/fda2023-ias-apple-juice-guidance.md` | Action Level for Inorganic Arsenic in Apple Juice: Guidance for Industry | Subject-fit review, then canonical hero |
| `wiki/sources/fda2024-lead-baby-food-fy2023-guidance-basis.md` | Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2024-toxic-elements-baby-food-compliance-2009-2024.md` | Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2025-21cfr347-skin-protectant-otc.md` | 21 CFR Part 347, Skin protectant drug products for over-the-counter human use (4-1-25 edition) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2025-cp7304-019-toxic-elements-food-foodware.md` | Compliance Program Guidance Manual: Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic (Program 7304.019) | Subject-fit review, then canonical hero |
| `wiki/sources/fda2026-infant-formula-toxic-elements-special-survey.md` | Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey | Subject-fit review, then canonical hero |

## Batch 111: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/fechner2019-cocoa-origin-al-cd-exposure.md` | Dietary exposure assessment of aluminium and cadmium from cocoa in relation to cocoa origin | Subject-fit review, then canonical hero |
| `wiki/sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany.md` | Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods | Subject-fit review, then canonical hero |
| `wiki/sources/feed2019-occurrence-data-of-nickel-in-feed-and-animal.md` | Occurrence data of nickel in feed and animal exposure | Subject-fit review, then canonical hero |
| `wiki/sources/fei2024-cd-off-on-fluorescence-milk.md` | OFF-ON fluorescence sensor for cadmium detection validated in milk and seawater | Subject-fit review, then canonical hero |
| `wiki/sources/feng2022-pediococcus-gr1-heavy-metals-gut-microbiota-metabolome.md` | Human supplementation with Pediococcus acidilactici GR-1 decreases heavy metal levels through modifying the gut microbiota and metabolome | Subject-fit review, then canonical hero |
| `wiki/sources/feng2023-rice-seedlings-cadmium-salt-climate.md` | Individual and mutual effects of elevated carbon dioxide and temperature on salt and cadmium uptake and translocation by rice seedlings | Subject-fit review, then canonical hero |
| `wiki/sources/fera2015-uk-tds-metals.md` | Total Diet Study of metals and other elements in food | Subject-fit review, then canonical hero |
| `wiki/sources/feszterova2025-herbal-tea-risk-elements.md` | Analysis of risk elements in herbal tea samples | Subject-fit review, then canonical hero |
| `wiki/sources/fields2006-contact-dermatitis-baby-wipes.md` | Contact dermatitis caused by baby wipes | Subject-fit review, then canonical hero |
| `wiki/sources/fiji2009-food-safety-regulations-chemical-contaminants.md` | Food Safety Regulations 2009 | Subject-fit review, then canonical hero |
| `wiki/sources/filipe2009-tio2-zno-stratum-corneum.md` | Stratum Corneum Is an Effective Barrier to TiO2 and ZnO Nanoparticle Percutaneous Absorption | Subject-fit review, then canonical hero |
| `wiki/sources/filon2006-lead-oxide-skin-penetration.md` | Skin Absorption of Inorganic Lead (PbO) and the Effect of Skin Cleansers | Subject-fit review, then canonical hero |
| `wiki/sources/filon2009-metal-powder-skin-absorption.md` | In vitro absorption of metal powders through intact and damaged human skin | Subject-fit review, then canonical hero |
| `wiki/sources/fischer2005-nickel-elicitation-thresholds.md` | Experimental nickel elicitation thresholds: a review focusing on occluded nickel exposure | Subject-fit review, then canonical hero |
| `wiki/sources/fischer2007-nickel-allergy-elicitation-dose-per-area.md` | Dose per unit area - a study of elicitation of nickel allergy | Subject-fit review, then canonical hero |
| `wiki/sources/fischer2022-mercury-spice-plants-poland.md` | The Mercury Concentration in Spice Plants | Subject-fit review, then canonical hero |
| `wiki/sources/flannery2020-fda-interim-reference-levels-lead.md` | U.S. Food and Drug Administration's interim reference levels for dietary lead exposure in children and women of childbearing age | Subject-fit review, then canonical hero |
| `wiki/sources/floresaguilar2022-infant-formula-lead-spe-ce.md` | Selective Pb(II)-Imprinted Polymer for Solid Phase Extraction in the Trace Determination of Lead in Infant Formula by Capillary Electrophoresis | Subject-fit review, then canonical hero |
| `wiki/sources/florez-garcia2023-cadmium-breast-cancer-meta-analysis.md` | Cadmium exposure and risk of breast cancer: A meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/flyvholm1984-nickel-content-food-dietary-intake.md` | Nickel Content of Food and Estimation of Dietary Intake | Subject-fit review, then canonical hero |
| `wiki/sources/fogarasi2019-tea-aluminum.md` | Aluminium contamination of several types of tea | Subject-fit review, then canonical hero |
| `wiki/sources/fonge2021-cabbage-carrot-metals-cameroon.md` | An assessment of heavy metal exposure risk associated with consumption of cabbage and carrot grown in a tropical Savannah region | Subject-fit review, then canonical hero |
| `wiki/sources/forsyth2019-turmeric-lead-chromate-bangladesh.md` | Turmeric means 'yellow' in Bengali: Lead chromate pigments added to turmeric threaten public health across Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/forsyth2024-turmeric-lead-chromate-south-asia.md` | Evidence of turmeric adulteration with lead chromate across South Asia | Subject-fit review, then canonical hero |
| `wiki/sources/fowles2021-lead-toys.md` | Health Risk Assessment: Lead in Children's Toys | Subject-fit review, then canonical hero |

## Batch 112: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/freire2022-donor-breast-milk-metals.md` | Concentrations and determinants of lead, mercury, cadmium, and arsenic in pooled donor breast milk in Spain | Subject-fit review, then canonical hero |
| `wiki/sources/frisbie2019-manganese-infant-formula-beverages.md` | Manganese levels in infant formula and young child nutritional beverages in the United States and France: Comparison to breast milk and regulations | Subject-fit review, then canonical hero |
| `wiki/sources/frisbie2022-arsenic-drinking-water-global.md` | Arsenic in drinking water: An analysis of global drinking water regulations and recommendations for updates to protect public health | Subject-fit review, then canonical hero |
| `wiki/sources/fsa2014-infant-foods-metals.md` | Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods | Subject-fit review, then canonical hero |
| `wiki/sources/fsa2016-infant-food-formula-metals-survey.md` | Survey of metals in commercial infant foods, infant formula and non-infant specific foods | Subject-fit review, then canonical hero |
| `wiki/sources/fsai2016-total-diet-study-ireland-2012-2014.md` | Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014 | Subject-fit review, then canonical hero |
| `wiki/sources/fsanz2008-cadmium-peanuts-assessment.md` | Final Assessment Report - Application A552: Cadmium in peanuts | Subject-fit review, then canonical hero |
| `wiki/sources/fsanz2011-23rd-australian-total-diet-study.md` | The 23rd Australian Total Diet Study | Subject-fit review, then canonical hero |
| `wiki/sources/fsanz2012-arsenic-apple-pear-juice-australia-nz.md` | Survey of total arsenic and inorganic arsenic in apple and pear juice | Subject-fit review, then canonical hero |
| `wiki/sources/fsanz2012-seaweed-inorganic-arsenic-au.md` | Survey of Inorganic Arsenic in Seaweed and Seaweed-Containing Products Available in Australia | Subject-fit review, then canonical hero |
| `wiki/sources/fsanz2019-25th-australian-total-diet-study.md` | 25th Australian Total Diet Study | Subject-fit review, then canonical hero |
| `wiki/sources/fsanz2024-schedule-19-contaminants.md` | Australia New Zealand Food Standards Code - Schedule 19 - Maximum levels of contaminants and natural toxicants | Subject-fit review, then canonical hero |
| `wiki/sources/fssai2015-chromium-gelatin-amendment.md` | Food Safety and Standards (Contaminants, Toxins and Residues) (Amendment) Regulations, 2015 | Subject-fit review, then canonical hero |
| `wiki/sources/fssai2016-heavy-metals-third-amendment.md` | Food Safety and Standards (Contaminants, toxins and Residues) Third Amendment Regulations, 2016 | Subject-fit review, then canonical hero |
| `wiki/sources/fu2019-heavy-metals-human-metabolism.md` | The Effects of Heavy Metals on Human Metabolism | Subject-fit review, then canonical hero |
| `wiki/sources/fu2022-sunflower-cd-cultivar-transcriptomics.md` | Physiological and Transcriptomic Comparison of Two Sunflower (Helianthus annuus L.) Cultivars With High/Low Cadmium Accumulation | Subject-fit review, then canonical hero |
| `wiki/sources/fu2025-low-accumulation-rice-hg-cd.md` | Mitigation Effect of Low-Accumulation Rice Varieties and Soil Conditioners on Hg and Cd Pollution in Rice | Subject-fit review, then canonical hero |
| `wiki/sources/fu2026-genetic-variation-and-behavior-related-risk-factors-inorganic.md` | genetic variation and behavior-related risk factors, inorganic arsenic, with a broad exposed population, serves as a crit- | Subject-fit review, then canonical hero |
| `wiki/sources/fuenteslopez2025-colombia-freshwater-fish-mercury.md` | Presence of Nematodes, Mercury Concentrations, and Liver Pathology in Carnivorous Freshwater Fish from La Mojana, Sucre, Colombia: Assessing Fish Health and Potential Human Health Risks | Subject-fit review, then canonical hero |
| `wiki/sources/fujita2021-hyperzincemia-zno-diaper-dermatitis-infant.md` | Hyperzincemia due to topical zinc oxide in an infant with diaper dermatitis | Subject-fit review, then canonical hero |
| `wiki/sources/gacal2023-cadmium-lead-bread-gluten-free-poland.md` | Cadmium and lead content in gluten and gluten-free bread available on Polish market - potential health risk to consumers | Subject-fit review, then canonical hero |
| `wiki/sources/gafner2026-turmeric-adulteration-six-continents.md` | A scoping review of turmeric adulteration based on data from six continents | Subject-fit review, then canonical hero |
| `wiki/sources/gajdosechova2023-nanoparticles-trace-element-food.md` | Nanoparticles as trace element species in food: state of the art, challenges, and future perspectives | Subject-fit review, then canonical hero |
| `wiki/sources/galal2021-heavy-metals-pisum-sativum.md` | Heavy metals uptake by the global economic crop (Pisum sativum L.) grown in contaminated soils and its associated health risks | Subject-fit review, then canonical hero |
| `wiki/sources/galfi2017-urban-stormwater-snowmelt-metals.md` | Mineral and Anthropogenic Indicator Inorganics in Urban Stormwater and Snowmelt Runoff: Sources and Mobility Patterns | Subject-fit review, then canonical hero |

## Batch 113: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/gama2025-bvl-rice-trace-elements.md` | Assessing trace elements in soils and rice: insights from the Baixo Vouga Lagunar (Portugal) | Subject-fit review, then canonical hero |
| `wiki/sources/ganguly2021-mercury-and-movement-disorders.md` | Mercury and Movement Disorders: | Subject-fit review, then canonical hero |
| `wiki/sources/gao2017-multi-omics-lead-gut-microbiome-development.md` | Multi-Omics Reveals that Lead Exposure Disturbs Gut Microbiome Development, Key Metabolites and Metabolic Pathways | Subject-fit review, then canonical hero |
| `wiki/sources/gao2020-feminine-hygiene-edcs.md` | Phthalates, bisphenols, parabens, and triclocarban in feminine hygiene products from the United States and their implications for human exposure | Subject-fit review, then canonical hero |
| `wiki/sources/gao2023-hunan-kenaf-sedum-phytoremediation.md` | Enhanced Phytoremediation for Trace-Metal-Polluted Farmland with Hibiscus cannabinus-Sedum plumbizincicola Rotation: A Case Study in Hunan, China | Subject-fit review, then canonical hero |
| `wiki/sources/gao2025-cordyceps-arsenic-toxicity.md` | Wild Cordyceps sinensis exhibits far lower arsenic accumulation and hepatorenal toxicity in mice compared to equivalent dose of inorganic arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/garcia-salgado2006-soluble-arsenic-algae.md` | Determination of soluble toxic arsenic species in alga samples by microwave-assisted extraction and high performance liquid chromatography-hydride generation-inductively coupled plasma-atomic emission spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/garcia-salgado2012-brown-algae-arsenolipids.md` | Arsenosugar phospholipids and arsenic hydrocarbons in two species of brown macroalgae | Subject-fit review, then canonical hero |
| `wiki/sources/garcia-salgado2012-edible-algae-arsenic-speciation.md` | Arsenic speciation in edible alga samples by microwave-assisted extraction and high performance liquid chromatography coupled to atomic fluorescence spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/garciaporras2025-cadmium-cacao-farmland.md` | Addressing Cadmium in Cacao Farmland: A Path to Safer, Sustainable Chocolate | Subject-fit review, then canonical hero |
| `wiki/sources/garciasalcedo2022-arsenic-biomonitoring-mexico.md` | Comparative Biomonitoring of Arsenic Exposure in Mothers and Their Neonates in Comarca Lagunera, Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/gardener2019-pb-cd-us-infant-formula-baby-foods.md` | Lead and cadmium contamination in a large sample of United States infant formulas and baby foods | Subject-fit review, then canonical hero |
| `wiki/sources/gardner2010-moist-toilet-paper-preservative.md` | The hazards of moist toilet paper: allergy to the preservative methylchloroisothiazolinone/methylisothiazolinone | Subject-fit review, then canonical hero |
| `wiki/sources/garofalo2025-seafood-cd-pb-hg-italy-10yr.md` | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/garrity1990-mt1-tissue-specific-promoter.md` | Tissue-Specific Expression from a Compound TATA-Dependent and TATA-Independent Promoter | Subject-fit review, then canonical hero |
| `wiki/sources/garuba2024-heavy-metals-commercial-baby-foods.md` | Evaluation of Heavy Metals in Commercial Baby Foods | Subject-fit review, then canonical hero |
| `wiki/sources/gasparik2017-wild-boar-slovakia-metals.md` | Levels of Metals in Kidney, Liver, and Muscle Tissue and their Influence on the Fitness for the Consumption of Wild Boar from Western Slovakia | Subject-fit review, then canonical hero |
| `wiki/sources/gautam2022-jewellery-heavy-metals.md` | Health Risk Assessment: Heavy Metals (Lead, Cadmium and Nickel) in Jewellery (Oral and Dermal Contact) | Subject-fit review, then canonical hero |
| `wiki/sources/gautam2023-tattoo-ink-heavy-metals-risk.md` | Health Risk Assessment: Heavy Metals (Antimony, Arsenic, Barium, Cadmium, Chromium, Lead, Mercury, and Nickel) in Tattoo Ink (Intra-Dermal Contact) | Subject-fit review, then canonical hero |
| `wiki/sources/gautam2024-finger-paints-metals-formaldehyde.md` | Health Risk Assessment: Formaldehyde and Heavy Metals in Finger Paints | Subject-fit review, then canonical hero |
| `wiki/sources/gavelek2019-fda-tds-pb-older-children-women-adults-2014-2016.md` | Lead exposures in older children (males and females 7-17 years), women of childbearing age (females 16-49 years) and adults (males and females 18+ years): FDA total diet study 2014-16 | Subject-fit review, then canonical hero |
| `wiki/sources/gawkrodger2011-nickel-skin-levels-occupations.md` | Nickel skin levels in different occupations and an estimate of the threshold for reacting to a single open application of nickel in nickel-allergic subjects | Subject-fit review, then canonical hero |
| `wiki/sources/gawra2025-zebrafish-cadmium-ciprofloxacin-endpoints.md` | Linking Molecular and Phenotypic Endpoints in Zebrafish Larvae Exposed to Ciprofloxacin and Cadmium | Subject-fit review, then canonical hero |
| `wiki/sources/gekpe2023-cadmium-quercetin-omega3-rats.md` | Quercetin and Omega-3 fatty acid averts the deleterious effects of Cadmium on NO, NOS, anti-oxidants and MDA levels in rats | Subject-fit review, then canonical hero |
| `wiki/sources/gergen2012-banat-mining-vegetable-pca.md` | Application of principal component analysis in the pollution assessment with heavy metals of vegetable food chain in the old mining areas | Subject-fit review, then canonical hero |

## Batch 114: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/gerofke2018-wild-game-lead.md` | Lead content in wild game shot with lead or non-lead ammunition - Does state of the art consumer health protection require non-lead ammunition? | Subject-fit review, then canonical hero |
| `wiki/sources/getu2022-heavy-metals-cereals-ethiopia.md` | Determination of the Level of Heavy Metals in the Selected Cereals from Debre Markos Local Market, Amhara Region, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/gfeller2021-mercury-methylation-fluvisol.md` | Mercury mobility, colloid formation and methylation in a polluted Fluvisol as affected by manure application and flooding-draining cycle | Subject-fit review, then canonical hero |
| `wiki/sources/ghasemidehkordi2018-markazi-vegetables-pb-hg.md` | Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/ghimire2026-jacaranda-carbon-chromium-removal.md` | MOF-Derived Carbon Composites from Jacaranda Seed Pods for Selective Removal of Hexavalent Chromium [Cr(VI)] | Subject-fit review, then canonical hero |
| `wiki/sources/gholami-ahangaran2021-chicken-meat-cadmium-zinc-silver.md` | The Measurement of Cadmium, Zinc and Silver in Chicken Meat in Isfahan Province, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/gholami2025-heavy-metals-corn-iran-khuzestan.md` | Health risk assessment Pb, As and Cr in corn (Zea mays) of Behbahan and Dezful from Khuzestan Province, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/ghosh2024-heavy-metals-gut-barrier-integrity-microbiota.md` | Effects of heavy metals on gut barrier integrity and gut microbiota | Subject-fit review, then canonical hero |
| `wiki/sources/giambo2021-toxic-metal-exposure-gut-microbiota-review.md` | Influence of toxic metal exposure on the gut microbiota | Subject-fit review, then canonical hero |
| `wiki/sources/gill2021-consumer-reports-spices.md` | The Trouble With Spices: Heavy Metals in 15 Herbs and Spices | Subject-fit review, then canonical hero |
| `wiki/sources/gintamo2022-groundwater-quality-oromia-ethiopia.md` | Determination of the Physicochemical Quality of Groundwater and its Potential Health Risk for Drinking in Oromia, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/giri2019-vigna-root-arsenic-speciation.md` | Bioaccumulation Potential And Speciation Of Arsenic Ions In Vigna Radiate Root Biomass Using Microwave Assisted Extraction By HPLC-ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/gnonsoro2021-hydroalcoholic-gels-abidjan.md` | Health Risk Assessment of Heavy Metals (Pb, Cd, Hg) in Hydroalcoholic Gels of Abidjan, Côte d'Ivoire | Subject-fit review, then canonical hero |
| `wiki/sources/gocer2025-baby-wet-wipes-solution-fiber-packaging.md` | Evaluation of the liquid, fiber and packaging content of baby wet wipes for heavy metal contamination | Subject-fit review, then canonical hero |
| `wiki/sources/godja2025-gold-electrode-nickel-electrochemical-sensor.md` | Screen-Printed Gold Electrode for Nickel(II) Detection in Deep Eutectic Solvent Media | Subject-fit review, then canonical hero |
| `wiki/sources/godwill2015-soft-drinks-metals-nigeria.md` | Determination of some soft drink constituents and contamination by some heavy metals in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/goli2021-the-effect-of-chelating-agents-including-potassium-tartrate.md` | The effect of chelating agents including potassium tartrate and | Subject-fit review, then canonical hero |
| `wiki/sources/gomez-arroyo2017-dandelion-biomonitor-mexico-city.md` | Indicators of environmental contamination by heavy metals in leaves of Taraxacum officinale in two zones of the metropolitan area of Mexico City | Subject-fit review, then canonical hero |
| `wiki/sources/gongora-gomez2017-oysters-gulf-california-metals.md` | Heavy-metal contents in oysters (Crassostrea gigas) cultivated on the southeastern coast of the Gulf of California, Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/gongora-gomez2018-pen-shell-seasonal-metals.md` | Seasonal levels of heavy metals in soft tissue and muscle of the pen shell Atrina maura from a farm in the southeastern coast of the Gulf of California, Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/gonzalez-arqueros2021-morelia-dump-metals.md` | Hazardous Solid Waste Confined in Closed Dump of Morelia: An Urgent Environmental Liability to Attend in Developing Countries | Subject-fit review, then canonical hero |
| `wiki/sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review.md` | Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils | Subject-fit review, then canonical hero |
| `wiki/sources/good2026-plant-milk-heavy-metals.md` | Comparative exposure and risk assessment of heavy metals, nutrients, and organochlorine pesticides in cow and plant-based milks | Subject-fit review, then canonical hero |
| `wiki/sources/gorbanov2025-lamb-meat-snacks-metals.md` | Evaluation of lamb meat safety for meat snack production after the use of the feed supplement LaktuVet-1 in animal diets | Subject-fit review, then canonical hero |
| `wiki/sources/gosens2014-parabens-aggregate-exposure-children.md` | Aggregate exposure approaches for parabens in personal care products: a case assessment for children between 0 and 3 years old | Subject-fit review, then canonical hero |

## Batch 115: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/govarts2016-prenatal-chemical-mixtures-birth-weight.md` | Combined Effects of Prenatal Exposures to Environmental Chemicals on Birth Weight | Subject-fit review, then canonical hero |
| `wiki/sources/grandjean2010-methylmercury-health-research.md` | Adverse Effects of Methylmercury: Environmental Health Research Implications | Subject-fit review, then canonical hero |
| `wiki/sources/gredilla2022-powdered-milk-hazardous-elements.md` | A Rapid Routine Methodology Based on Chemometrics to Evaluate the Toxicity of Commercial Infant Milks Due to Hazardous Elements | Subject-fit review, then canonical hero |
| `wiki/sources/greenseal2009-gs37-version-comparison.md` | Version Comparison of Green Seal's Environmental Standard for Industrial and Institutional Cleaners, GS-37 — Third Edition (February 27, 2006) vs. Fourth Edition (August 29, 2008) | Subject-fit review, then canonical hero |
| `wiki/sources/greenseal2020-gs51-laundry-care-products.md` | GS-51: Green Seal Standard for Laundry Care Products for Industrial and Institutional Use, Edition 1.6 | Subject-fit review, then canonical hero |
| `wiki/sources/greenseal2022-gs52-specialty-household-cleaners.md` | GS-52: Green Seal Standard for Specialty Cleaning Products for Household Use, Edition 2.6, November 11, 2021 (corrections/clarifications last made January 28, 2022) | Subject-fit review, then canonical hero |
| `wiki/sources/greenseal2022-gs8-household-cleaners.md` | GS-8: Green Seal Standard for Cleaning Products for Household Use, Edition 5.7, June 23, 2022 | Subject-fit review, then canonical hero |
| `wiki/sources/greenseal2024-gs37-industrial-institutional-cleaners.md` | GS-37: Green Seal Standard for Cleaning Products for Industrial and Institutional Use — Edition 7.8 (New Format), June 23, 2022 (corrections/clarifications last made August 23, 2024) | Subject-fit review, then canonical hero |
| `wiki/sources/grill1989-phytochelatins-heavy-metal-binding-peptides-plants.md` | Phytochelatins, the heavy-metal-binding peptides of plants, are synthesized from glutathione by a specific gamma-glutamylcysteine dipeptidyl transpeptidase (phytochelatin synthase) | Subject-fit review, then canonical hero |
| `wiki/sources/grimaldi2017-prop65-chocolate-settlement-news.md` | Proposition 65 Settlement May Establish New Industry Standard for Lead and Cadmium in Chocolate | Subject-fit review, then canonical hero |
| `wiki/sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland.md` | Assessment of cadmium and lead content in tomatoes and tomato products | Subject-fit review, then canonical hero |
| `wiki/sources/groleau2025-inuit-fish-broth-metals-pregnancy.md` | Improving nutritional intakes and reducing metal(loid) exposures from wild fish broth among Inuit pregnant women | Subject-fit review, then canonical hero |
| `wiki/sources/gromakova2017-rostov-root-crop-amendment.md` | Yield Assessment of Beetroot and Potato, Cultivated on Ordinary Chernozem Contaminated with Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/grzadka2024-tea-radioisotopes-heavy-metals.md` | Do You Know What You Drink? Comparative Research on the Contents of Radioisotopes and Heavy Metals in Different Types of Tea from Various Parts of the World | Subject-fit review, then canonical hero |
| `wiki/sources/gso2021-contaminants-toxins-food-feed.md` | Contaminants and toxins in food and feed | Subject-fit review, then canonical hero |
| `wiki/sources/gso2025-2783-heavy-metals-food-catalog.md` | GSO 2783:2025 Maximum Residue Limits (MRLs) for Heavy Metals in Food | Subject-fit review, then canonical hero |
| `wiki/sources/gu2014-liaoning-canned-fish-metals.md` | Determination and Safety Evaluation of Heavy Metals in Canned Fish from Liaoning Province | Subject-fit review, then canonical hero |
| `wiki/sources/gu2019-maize-peanut-heavy-metals-guangxi.md` | Prediction and risk assessment of five heavy metals in maize and peanut: a case study of Guangxi, China | Subject-fit review, then canonical hero |
| `wiki/sources/gu2020-arsenic-rice-infant-food-australia.md` | Arsenic Concentrations and Dietary Exposure in Rice-Based Infant Food in Australia | Subject-fit review, then canonical hero |
| `wiki/sources/guadalupe2023-peruvian-coffee-metals.md` | Probabilistic Risk Characterization of Heavy Metals in Peruvian Coffee: Implications of Variety, Region and Processing | Subject-fit review, then canonical hero |
| `wiki/sources/guan2014-soil-heavy-metal-food-safety-china.md` | Current Situation and the Harm of Soil Heavy Metal Pollution and Food Safety | Subject-fit review, then canonical hero |
| `wiki/sources/guerrasierra2021-phytoremediation-tropical-soils-review.md` | Phytoremediation of Heavy Metals in Tropical Soils an Overview | Subject-fit review, then canonical hero |
| `wiki/sources/guerrini2024-toxic-elements-ethical-hen-farm-eggs.md` | Content of Toxic Elements (Arsenic, Cadmium, Mercury, Lead) in Eggs from an Ethically Managed Laying Hen Farm | Subject-fit review, then canonical hero |
| `wiki/sources/guin2001-baby-wipe-dermatitis.md` | Baby-Wipe Dermatitis: Preservative-Induced Hand Eczema in Parents and Persons Using Moist Towelettes | Subject-fit review, then canonical hero |
| `wiki/sources/gul2021-sunflower-seeds-metals.md` | Determination of Some Heavy Metals in Oil Sunflower Seeds Grown in the North of Turkey | Subject-fit review, then canonical hero |

## Batch 116: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/gul2022-karachi-plastic-toys-metals.md` | Contamination by Hazardous Elements in Low-Priced Children's Plastic Toys Bought on the Local Markets of Karachi, Pakistan | Subject-fit review, then canonical hero |
| `wiki/sources/gul2024-quinoa-cadmium-lead-stress.md` | Effects of cadmium and lead stress on quinoa (Chenopodium quinoa Willd.) plant growth and antioxidant enzyme activities | Subject-fit review, then canonical hero |
| `wiki/sources/gulcin2025-antioxidants-comprehensive-review.md` | Antioxidants: a comprehensive review | Subject-fit review, then canonical hero |
| `wiki/sources/gulson2010-zno-sunscreen-dermal-zinc.md` | Small amounts of zinc from zinc oxide particles in sunscreens applied outdoors are absorbed through human skin | Subject-fit review, then canonical hero |
| `wiki/sources/gulson2012-zinc-sunscreen-dermal-absorption.md` | Comparison of dermal absorption of zinc from different sunscreen formulations and differing UV exposure based on stable isotope tracing | Subject-fit review, then canonical hero |
| `wiki/sources/gulson2016-nanoparticles-sunscreens-ichmet.md` | Should nanoparticles be used in sunscreens? | Subject-fit review, then canonical hero |
| `wiki/sources/gumilar2022-pome-nickel-molybdenum-ethanol.md` | Addition of Ni and Mo as an Effort to Increase Ethanol in Palm Oil Wastewater Treatment | Subject-fit review, then canonical hero |
| `wiki/sources/gundogdu2025-icp-ms-aluminum-albumin-infusion.md` | ICP-MS Method for Aluminum, Sodium, and Potassium Determination in Human Albumin Infusion Solutions | Subject-fit review, then canonical hero |
| `wiki/sources/gunes2021-yalova-chestnut-honey-metals.md` | Chestnut Honey as a Complementary Medicine: Determination of Antibacterial Activity, Heavy Metal Residue and Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/guney2012-toy-jewelry-metal-legislation-review.md` | Heavy Metals in Toys and Low-Cost Jewelry: Critical Review of U.S. and Canadian Legislations and Recommendations for Testing | Subject-fit review, then canonical hero |
| `wiki/sources/guo2017-asian-rice-derived-products-metals.md` | Trace Elements and Heavy Metals in Asian Rice-Derived Food Products | Subject-fit review, then canonical hero |
| `wiki/sources/guo2022-root-targeted-rice-metals.md` | Root targeted over-expression of the heavy metal tolerance genes TaPCS1 and AtHMA3 reduces As and Cd accumulation in aerial tissues of Oryza Sativa (Rice) Plants | Subject-fit review, then canonical hero |
| `wiki/sources/guo2024-cadmium-bioaccessibility-pak-choi.md` | Effects of wollastonite and phosphate treatments on cadmium bioaccessibility and health risk in pak choi (Brassica rapa ssp. chinensis) grown in contaminated soil | Subject-fit review, then canonical hero |
| `wiki/sources/guo2024-duck-eggs-hg-mining-china.md` | Heavy metal contamination in duck eggs near mercury mining areas in southwest China | Subject-fit review, then canonical hero |
| `wiki/sources/gupta2023-rice-ash-bangladesh-arsenic-cadmium.md` | Recycled household ash in rice paddies of Bangladesh for sustainable production of rice without altering grain arsenic and cadmium | Subject-fit review, then canonical hero |
| `wiki/sources/gupta2024-biomagnification-of-mercury-in-aquatic-ecosystem-and-effect.md` | Biomagnification of mercury in aquatic ecosystem and effect on human being | Subject-fit review, then canonical hero |
| `wiki/sources/gupta2024-tilapia-heavy-metals-cauvery-india.md` | Assessment of human health risks posed by toxic heavy metals in Tilapia fish (Oreochromis mossambicus) from the Cauvery River, India | Subject-fit review, then canonical hero |
| `wiki/sources/gutierrez-ravelo2020-sarpa-salpa-metals-canary.md` | Toxic Metals (Al, Cd, Pb) and Trace Element (B, Ba, Co, Cu, Cr, Fe, Li, Mn, Mo, Ni, Sr, V, Zn) Levels in Sarpa Salpa from the North-Eastern Atlantic Ocean Region | Subject-fit review, then canonical hero |
| `wiki/sources/gutierrez2022-ecuador-cacao-cadmium-compost.md` | Cadmium fractionation in soils affected by organic matter application: Transfer of cadmium to cacao (Theobroma cacao L.) tissues | Subject-fit review, then canonical hero |
| `wiki/sources/guyana2023-fisheries-products-environmental-contaminants.md` | Fisheries (Products) Regulations 2023, Schedule Four environmental contaminants in fishery and aquaculture products | Subject-fit review, then canonical hero |
| `wiki/sources/hadi2025-dried-fruits-heavy-metals-iraq.md` | Health Impact of Heavy Metals in Samples of Dried Fruits in Iraq | Subject-fit review, then canonical hero |
| `wiki/sources/haft2022-methylmercury-biosynthesis.md` | Methylmercury Biosynthesis | Subject-fit review, then canonical hero |
| `wiki/sources/hahn2022-salish-seaweed-contaminants.md` | Chemical contaminant levels in edible seaweeds of the Salish Sea and implications for their consumption | Subject-fit review, then canonical hero |
| `wiki/sources/hahn2025-urine-antimony-geres.md` | The metalloid antimony in urine of children and adolescents in Germany | Subject-fit review, then canonical hero |
| `wiki/sources/haider2022-biscuits-basrah-iraq-safety.md` | Nutritional Quality and Safety Characteristics of Imported Biscuits Marketed in Basrah, Iraq | Subject-fit review, then canonical hero |

## Batch 117: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/haji2025-creams-foundations-toxic-elements.md` | Hidden Toxic Elements in Creams and Foundations | Subject-fit review, then canonical hero |
| `wiki/sources/hajmoradi2024-verbascum-mining-iran.md` | Accumulation of Heavy Metals and Their Genotoxic Potential in Medicinal Plant Verbacsum speciosum Schrad. | Subject-fit review, then canonical hero |
| `wiki/sources/hall2023-methylmercury-tidal-marsh.md` | Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs | Subject-fit review, then canonical hero |
| `wiki/sources/hamad2024-pomegranate-chitosan-cadmium-copper.md` | Effective fabrication and characterization of eco-friendly nano particles composite for adsorption Cd (II) and Cu (II) ions from aqueous solutions using modelling studies | Subject-fit review, then canonical hero |
| `wiki/sources/hamann2019-methylisothiazolinone-leave-on.md` | Methylisothiazolinone: still on leave-on products, but no longer on baby wipes | Subject-fit review, then canonical hero |
| `wiki/sources/hamid2021-bacterial-plant-biostimulants-review.md` | Bacterial Plant Biostimulants: A Sustainable Way towards Improving Growth, Productivity, and Health of Crops | Subject-fit review, then canonical hero |
| `wiki/sources/hamitoglu2026-turkiye-tea-metals.md` | Determination of essential and toxic elements in black teas sold in Turkiye | Subject-fit review, then canonical hero |
| `wiki/sources/hampton2023-lead-game-meat-australia.md` | Lead contamination in Australian game meat | Subject-fit review, then canonical hero |
| `wiki/sources/hamza2025-heavy-metals-energy-drinks-nigeria.md` | Determination of Some Physicochemical Properties, Heavy Metals and Micronutrients of Some Energy Drinks Available in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/hamza2026-heavy-metals-energy-drinks-health-risk.md` | Analysis of Heavy Metals and Health Risk Assessment of Selected Energy Drinks in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/han2023-paper-chip-mercury-water.md` | A Simple and Effective Visual Fluorescent Sensing Paper-Based Chip for the Ultrasensitive Detection of Mercury Ions in Environmental Water | Subject-fit review, then canonical hero |
| `wiki/sources/han2024-nickel-zhejiang-china.md` | Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China | Subject-fit review, then canonical hero |
| `wiki/sources/han2025-peptide-zinc-complexation-aquatic-review.md` | Dual Perspectives on Peptide–Zinc Complexation: Highlighting Aquatic Sources While Contextualizing Other Natural Origins | Subject-fit review, then canonical hero |
| `wiki/sources/hanc2021-amanita-muscaria-hg-se.md` | Mercury and selenium in developing and mature fruiting bodies of Amanita muscaria | Subject-fit review, then canonical hero |
| `wiki/sources/handal2026-a-comparative-review-of-non-essential-metal-exposures.md` | A Comparative Review of Non-Essential Metal Exposures in | Subject-fit review, then canonical hero |
| `wiki/sources/handayani2019-tuna-swordfish-indonesia-mercury.md` | Kandungan Logam Berat Merkuri Pada Ikan Tuna (Yellowfin dan Bigeye) dan Tuna-like (Swordfish) Hasil Tangkapan dari Samudera Hindia dan Samudera Pasifik | Subject-fit review, then canonical hero |
| `wiki/sources/hands2024-multiyear-dark-chocolate-cocoa-usa.md` | A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA | Subject-fit review, then canonical hero |
| `wiki/sources/hansra2026-lifecycle-of-a-wipe.md` | Lifecycle of a Wipe: Determining the Contamination, Fate, and Transformation of Wet Wipe Pollution in the Environment | Subject-fit review, then canonical hero |
| `wiki/sources/hao2022-probabilistic-risk-rice-mining-county.md` | Probabilistic health risk assessment of inorganic arsenic and some heavy metals in rice produced from a typical multi-mining county, China | Subject-fit review, then canonical hero |
| `wiki/sources/hao2024-amf-arsenic-plants-meta-analysis.md` | Meta-analysis of the effects of arbuscular mycorrhizal fungi on arsenic accumulation in plants and grain | Subject-fit review, then canonical hero |
| `wiki/sources/harada1995-minamata-methylmercury-poisoning.md` | Minamata Disease: Methylmercury Poisoning in Japan Caused by Environmental Pollution | Subject-fit review, then canonical hero |
| `wiki/sources/harding2018-bay-fundy-methylmercury.md` | Bioaccumulation of methylmercury within the marine food web of the outer Bay of Fundy, Gulf of Maine | Subject-fit review, then canonical hero |
| `wiki/sources/hardisson2017-aluminium-dietary-exposure-review.md` | Aluminium Exposure Through the Diet | Subject-fit review, then canonical hero |
| `wiki/sources/hardy2025-uk-reach-tattoo-pmu-decision.md` | Substances in tattoo inks and permanent make-up: restriction decision | Subject-fit review, then canonical hero |
| `wiki/sources/hariono2023-soy-milk-cookware-metals.md` | Quality nutrition, metal content, and health risks in soy milk products using aluminum and stainless steel cookers | Subject-fit review, then canonical hero |

## Batch 118: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/hasan2021-bangladesh-dairy-trace-elements.md` | Detection of Trace Elements in Selective Dairy Products to assess Human Health Risk of Bangladeshi People | Subject-fit review, then canonical hero |
| `wiki/sources/hasan2022-bangladesh-raw-pasteurized-milk-metals.md` | Determination of heavy metals in raw and pasteurized liquid milk of Bangladesh to assess the potential health risks | Subject-fit review, then canonical hero |
| `wiki/sources/hasanuzzaman2026-to-confer-tolerance-against-arsenic-toxicity.md` | to confer tolerance against arsenic toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/haseeb-ur-rehman2023-pakistan-seafood-metals.md` | Metal pollution and potential human health risk assessment in major seafood items (fish, crustaceans, and cephalopods) | Subject-fit review, then canonical hero |
| `wiki/sources/hassan2025-cornflakes-lebanon-metals.md` | Cornflakes as a source of dietary metal exposure in Lebanon: Risk assessment and regulatory compliance | Subject-fit review, then canonical hero |
| `wiki/sources/hassona2023-beeswax-metals-egypt.md` | Heavy Metal Concentrations of Beeswax (Apis mellifera L.) at Different Ages | Subject-fit review, then canonical hero |
| `wiki/sources/hata2014-wakame-organoarsenic-extraction.md` | Improving the Efficiency of Organoarsenic Extraction from Seaweeds | Subject-fit review, then canonical hero |
| `wiki/sources/hatlelid2009-cpsc-cpsia-lead-childrens-products.md` | U.S. Consumer Product Safety Commission Regulation of Lead in Children's Products | Subject-fit review, then canonical hero |
| `wiki/sources/haydous2025-pet-food-metals-lebanon-uae.md` | Pet food safety at risk? Investigating toxic metal contamination in Lebanon and the UAE | Subject-fit review, then canonical hero |
| `wiki/sources/hbbf2025-rice-arsenic-cadmium-145-samples.md` | What's in your family's rice? Arsenic, Cadmium, and Lead in Popular Rice Brands - Plus 9 Safer Grains to Try | Subject-fit review, then canonical hero |
| `wiki/sources/hc2008-aluminum-food-additives-industry-request.md` | ARCHIVED — Health Canada Requests Information from Industry on the Use of Aluminum-Containing Food Additives | Subject-fit review, then canonical hero |
| `wiki/sources/hc2008-review-dietary-exposure-aluminum.md` | ARCHIVED — Health Canada Review of Dietary Exposure to Aluminum | Subject-fit review, then canonical hero |
| `wiki/sources/hc2019-lead-drinking-water.md` | Guidelines for Canadian Drinking Water Quality: Guideline Technical Document — Lead | Subject-fit review, then canonical hero |
| `wiki/sources/hc2020-cadmium-drinking-water.md` | Guidelines for Canadian Drinking Water Quality: Guideline Technical Document — Cadmium | Subject-fit review, then canonical hero |
| `wiki/sources/he2013-shanghai-cadmium.md` | Exposure assessment of dietary cadmium: findings from shanghainese over 40 years, China | Subject-fit review, then canonical hero |
| `wiki/sources/he2023-ti3c2-uio66nh2-crvi-photoreduction.md` | In Situ Growth of Ti3C2/UiO-66-NH2 Composites for Photoreduction of Cr(VI) | Subject-fit review, then canonical hero |
| `wiki/sources/healey2021-archives-of-environmental-contamination-and-toxicology-2021-81.md` | Archives of Environmental Contamination and Toxicology (2021) 81:236–254 | Subject-fit review, then canonical hero |
| `wiki/sources/health2024-federica-cernigliaro-1-andrea-santangelo-2-3-rosaria.md` | Federica Cernigliaro 1 , Andrea Santangelo 2,3 , Rosaria Nardello 1 , Salvatore Lo Cascio 1 , Sofia D’Agostino 1 , | Subject-fit review, then canonical hero |
| `wiki/sources/healthcanada2006-arsenic-drinking-water-guideline.md` | Guidelines for Canadian Drinking Water Quality — Guideline Technical Document: Arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/healthcanada2012-cosmetics-heavy-metal-impurities.md` | Guidance on Heavy Metal Impurities in Cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/healthcanada2015-natural-health-products-quality-guide.md` | Quality of Natural Health Products Guide | Subject-fit review, then canonical hero |
| `wiki/sources/healthcanada2021-aluminum-drinking-water-guideline.md` | Guidelines for Canadian Drinking Water Quality — Guideline Technical Document: Aluminum | Subject-fit review, then canonical hero |
| `wiki/sources/healthcanada2024-diaper-rash-products-monograph.md` | Diaper Rash Products Monograph | Subject-fit review, then canonical hero |
| `wiki/sources/healthcanada2024-nnhpd-diaper-rash-products-monograph.md` | Diaper Rash Products Monograph | Subject-fit review, then canonical hero |
| `wiki/sources/healthcanada2025-gdwq-summary-tables.md` | Guidelines for Canadian Drinking Water Quality - Summary Tables - December 2025 | Subject-fit review, then canonical hero |

## Batch 119: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/healthcanada2026-primary-sunscreen-monograph.md` | Primary Sunscreen Monograph | Subject-fit review, then canonical hero |
| `wiki/sources/heim2009-clothing-fastener-nickel-release.md` | Children's clothing fasteners as a potential source of exposure to releasable nickel ions | Subject-fit review, then canonical hero |
| `wiki/sources/helcom2017-core-indicator-metals-baltic.md` | Metals (lead, cadmium and mercury) — HELCOM core indicator report | Subject-fit review, then canonical hero |
| `wiki/sources/hendrawati2015-chitosan-lake-water.md` | Penggunaan Kitosan sebagai Koagulan Alami dalam Perbaikan Kualitas Air Danau | Subject-fit review, then canonical hero |
| `wiki/sources/henriksen2023-chromium-nordic-nnr.md` | Chromium – a scoping review for Nordic Nutrition Recommendations 2023 | Subject-fit review, then canonical hero |
| `wiki/sources/henriquez-hernandez2023-baby-purees-spain-elements.md` | Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market | Subject-fit review, then canonical hero |
| `wiki/sources/hepp2014-fda-cosmetics-seven-elements.md` | Survey of cosmetics for arsenic, cadmium, chromium, cobalt, lead, mercury, and nickel content | Subject-fit review, then canonical hero |
| `wiki/sources/herein2024-of-problems-associated-with-excessive-sunlight-exposure-their.md` | of problems associated with excessive sunlight exposure, their use has increased exponentially, Venereology and Leprosy, | Subject-fit review, then canonical hero |
| `wiki/sources/hernandez-cruz2024-cadmium-sulforaphane-celegans.md` | Sulforaphane Exposure Prevents Cadmium-Induced Toxicity and Mitochondrial Dysfunction in the Nematode Caenorhabditis elegans by Regulating the Insulin/Insulin-like Growth Factor Signaling (IIS) Pathway | Subject-fit review, then canonical hero |
| `wiki/sources/hernandez-montoya2026-heavy-metals-foods-review.md` | Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety | Subject-fit review, then canonical hero |
| `wiki/sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france.md` | Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment | Subject-fit review, then canonical hero |
| `wiki/sources/heshmati2020-iran-vegetables-cereals-pb-cd.md` | Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran | Subject-fit review, then canonical hero |
| `wiki/sources/hidalgo2015-gluten-free-cereal-bars-argentina.md` | Toxic Trace Element Contents in Gluten-free Cereal Bars Marketed in Argentina | Subject-fit review, then canonical hero |
| `wiki/sources/hisam2022-water-spinach-phytoremediation.md` | Phytoremediation process of water spinach (Ipomoea aquatica) in absorbing heavy metal concentration in wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/ho2014-hong-kong-seafood-organotins.md` | Organotin contamination in seafood and its implication for human health risk in Hong Kong | Subject-fit review, then canonical hero |
| `wiki/sources/ho2016-hong-kong-rock-shell-organotins.md` | Long-Term Spatio-Temporal Trends of Organotin Contaminations in the Marine Environment of Hong Kong | Subject-fit review, then canonical hero |
| `wiki/sources/hobbie2014-stainless-steel-ni-cr-leaching.md` | Stainless Steel Leaches Nickel and Chromium into Foods During Cooking | Subject-fit review, then canonical hero |
| `wiki/sources/hoehn2024-vehicle-flame-retardant-exposure-seat-foam-temperature.md` | Flame Retardant Exposure in Vehicles Is Influenced by Use in Seat Foam and Temperature | Subject-fit review, then canonical hero |
| `wiki/sources/hoen2018-infant-arsenic-gut-microbiome.md` | Sex-specific associations of infants' gut microbiome with arsenic exposure | Subject-fit review, then canonical hero |
| `wiki/sources/hoha2014-pork-pb-cd-cu-zn-romania.md` | Heavy metals contamination levels in processed meat marketed in Romania | Subject-fit review, then canonical hero |
| `wiki/sources/hohenstein2023-en-1811-2023-nickel-release.md` | EU Releases New Standard For Nickel EN 1811:2023 | Subject-fit review, then canonical hero |
| `wiki/sources/holbert2023-mercury-hawaiian-fish.md` | Mercury accumulation and biomarkers of exposure in two popular recreational fishes in Hawaiian waters | Subject-fit review, then canonical hero |
| `wiki/sources/holmes2016-zinc-oxide-skin-penetration.md` | Relative penetration of zinc oxide and zinc ions into human skin after application of different zinc oxide formulations | Subject-fit review, then canonical hero |
| `wiki/sources/holmes2020-nano-zinc-oxide-skin.md` | Penetration of zinc into human skin after topical application of nano zinc oxide used in commercial sunscreen formulations | Subject-fit review, then canonical hero |
| `wiki/sources/hongkong2025-cap-132v-metallic-contamination.md` | Hong Kong Cap. 132V Food Adulteration (Metallic Contamination) Regulations, consolidated 5 September 2025 | Subject-fit review, then canonical hero |

## Batch 120: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/hongkong2026-mercury-control-ordinance.md` | Mercury Control Ordinance (Cap. 640), last updated 27 March 2026 | Subject-fit review, then canonical hero |
| `wiki/sources/hopfner2025-infant-formula-dietary-exposure-germany.md` | The contribution of infant formula to the food survey-based dietary exposure of nine selected elements | Subject-fit review, then canonical hero |
| `wiki/sources/hosojima2017-rice-endosperm-protein-cadmium.md` | A Randomized, Double-Blind, Crossover Pilot Trial of Rice Endosperm Protein Supplementation in Maintenance Hemodialysis Patients | Subject-fit review, then canonical hero |
| `wiki/sources/hossain2016-bangladesh-vegetables-pb-cd-cr.md` | Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/hossain2023-bangladesh-chicken-metals.md` | Human health risk assessment of edible body parts of chicken through heavy metals and trace elements quantitative analysis | Subject-fit review, then canonical hero |
| `wiki/sources/hossain2024-rice-cadmium-soil-ph.md` | Effects of soil pH and organic matter on the accumulation of cadmium in the grains of salt tolerant rice genotypes grown in Cd contaminated soil | Subject-fit review, then canonical hero |
| `wiki/sources/hossen2026-noakhali-vegetables-heavy-metals.md` | Assessment of heavy metal levels and associated health risks linked to vegetables grown in Noakhali region of Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/hostynek2003-percutaneous-metal-absorption.md` | Factors determining percutaneous metal absorption | Subject-fit review, then canonical hero |
| `wiki/sources/houlihan2019-hbbf-whats-in-baby-food.md` | What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead | Subject-fit review, then canonical hero |
| `wiki/sources/houston2023-alumina-nanofibers-mercury-lead-removal.md` | Application of Alumina Nanofibers as Adsorbents for the Removal of Mercury (II) and Lead (II) from Aqueous Solutions | Subject-fit review, then canonical hero |
| `wiki/sources/hovanec2004-peanut-butter-arsenic-speciation.md` | Arsenic speciation in commercially available peanut butter spread by IC-ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/howard2023-chitosan-dotaga-lead-cadmium-chelation.md` | Combating lead and cadmium exposure with an orally administered chitosan-based chelating polymer | Subject-fit review, then canonical hero |
| `wiki/sources/hoy2023-arsenic-speciation-freshwater-fish.md` | Arsenic speciation in freshwater fish: challenges and research needs | Subject-fit review, then canonical hero |
| `wiki/sources/hsa2024-health-supplement-testing-heavy-metals.md` | Guidelines for Testing Requirements of Health Supplements and Traditional Medicines | Subject-fit review, then canonical hero |
| `wiki/sources/hsi2016-fish-methylmercury-taiwan.md` | Methylmercury Concentration in Fish and Risk-Benefit Assessment of Fish Intake among Pregnant versus Infertile Women in Taiwan | Subject-fit review, then canonical hero |
| `wiki/sources/hsn2019-prop65-compliance-requirements.md` | California Proposition 65 Compliance Requirements | Subject-fit review, then canonical hero |
| `wiki/sources/hu2006-tpt-tbt-trophic-bohai-bay.md` | Trophic Magnification of Triphenyltin in a Marine Food Web of Bohai Bay, North China: Comparison to Tributyltin | Subject-fit review, then canonical hero |
| `wiki/sources/hu2022-ml-drinking-water-contaminants.md` | Using Machine Learning Models to Predict Hydrocarbon and Chemical Contamination of Drinking Water | Subject-fit review, then canonical hero |
| `wiki/sources/hu2023-cdins-in2s3-crvi-photoreduction.md` | One-Pot Fabrication of 2D/2D CdIn2S4/In2S3 Heterojunction for Boosting Photocatalytic Cr(VI) Reduction | Subject-fit review, then canonical hero |
| `wiki/sources/hu2023-china-tea-heavy-metals.md` | Current Status and Health Risk Assessment of Heavy Metals Contamination in Tea across China | Subject-fit review, then canonical hero |
| `wiki/sources/hu2023-heijing5-rice-heavy-metals-sweden.md` | Characterisation of a low methane emission rice cultivar suitable for cultivation in high latitude light and temperature conditions | Subject-fit review, then canonical hero |
| `wiki/sources/hu2024-ecl-pb-lycium-glycyrrhiza.md` | An electrochemiluminescence device for visualized detection of lead in practical samples | Subject-fit review, then canonical hero |
| `wiki/sources/hu2024-engineered-ecoli-hg-cr-adsorption.md` | Adsorption of Hg²⁺/Cr⁶⁺ by metal-binding proteins heterologously expressed in Escherichia coli | Subject-fit review, then canonical hero |
| `wiki/sources/hu2025-bacillus-cmos-arsenic-biosensor-soil-food.md` | Bacillus megaterium CMOS Biosensor for Arsenic Detection Below EPA 10 ppb in Soil and Food | Subject-fit review, then canonical hero |
| `wiki/sources/huan2025-research-on-the-content-of-minerals-and-heavy.md` | Research on the Content of Minerals and Heavy Metals | Subject-fit review, then canonical hero |

## Batch 121: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/huang-2020-pb-alad-threshold.md` | Use of Generalized Additive Model to Detect the Threshold of δ-Aminolevulinic Acid Dehydratase Activity Reduced by Lead Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/huang2014-zhejiang-vegetables-heavy-metals.md` | Heavy metals in vegetables and the health risk to population in Zhejiang, China | Subject-fit review, then canonical hero |
| `wiki/sources/huang2020-hijiki-arsenic-growth-stages.md` | Arsenic contents and speciation at different growth stages of Sargassum fusiforme [Harv.] Setchell (Hijiki), an edible seaweed | Subject-fit review, then canonical hero |
| `wiki/sources/huang2022-pb-cd-rice-china-meta.md` | The lead and cadmium content in rice and risk to human health in China: A systematic review and meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/huang2023-ml-rice-cadmium-soil.md` | Machine learning-based prediction of cadmium concentration in rice grain from soil properties | Subject-fit review, then canonical hero |
| `wiki/sources/huang2025-biochar-antimony-rhizosphere-rice.md` | Biochar Influences the Transformation and Translocation of Antimony in the Rhizosphere-Rice System | Subject-fit review, then canonical hero |
| `wiki/sources/huda2024-irrigated-rice-metals-pesticides.md` | A potential toxicological risk assessment of heavy metals and pesticides in irrigated rice cultivars near industrial areas of Dhaka, Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/huff2025-spices-lancaster-pa.md` | Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation | Subject-fit review, then canonical hero |
| `wiki/sources/huhmann2022-arsenic-bangladesh-wells-rice.md` | A mass-balance model to assess arsenic exposure from multiple wells in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/hull2023-arsenic-lake-foodweb.md` | Littoral sediment arsenic concentrations predict arsenic trophic transfer and human health risk in contaminated lakes | Subject-fit review, then canonical hero |
| `wiki/sources/hunt2009-lead-bullet-fragments-venison.md` | Lead bullet fragments in venison from rifle-killed deer: potential for human dietary exposure | Subject-fit review, then canonical hero |
| `wiki/sources/hussain2016-spinach-cadmium-zinc.md` | The Cd:Zn ratio in a soil affects Cd toxicity in spinach (Spinacea oleracea L.) | Subject-fit review, then canonical hero |
| `wiki/sources/hussain2019-plant-food-heavy-metal-review.md` | Arsenic and Heavy Metal (Cadmium, Lead, Mercury and Nickel) Contamination in Plant-Based Foods | Subject-fit review, then canonical hero |
| `wiki/sources/hussain2021-nigella-maize-cadmium.md` | Foliar application of seed water extract of Nigella sativa improved maize growth in cadmium-contaminated soil | Subject-fit review, then canonical hero |
| `wiki/sources/hussain2024-rice-arsenic-amendments.md` | Uptake and dietary toxicity of arsenic in rice genotypes: Effect of organic and inorganic amendments | Subject-fit review, then canonical hero |
| `wiki/sources/hussein2023-freshwater-marine-fish-egypt.md` | Risk assessment of toxic residues among some freshwater and marine water fish species | Subject-fit review, then canonical hero |
| `wiki/sources/hussein2024-toxic-metals-canned-fish-egypt.md` | Risk assessment of some toxic metals in canned fish products retailed in Mansoura, Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/hwang2010-dried-seaweed-korea-metals.md` | Total arsenic, mercury, lead, and cadmium contents in edible dried seaweed in Korea | Subject-fit review, then canonical hero |
| `wiki/sources/hwang2022-home-meal-replacement-heavy-metals.md` | Risk Assessment and Determination of Heavy Metals in Home Meal Replacement Products by Using Inductively Coupled Plasma Mass Spectrometry and Direct Mercury Analyzer | Subject-fit review, then canonical hero |
| `wiki/sources/iarc1990-chromium-nickel-welding.md` | Chromium, Nickel and Welding | Subject-fit review, then canonical hero |
| `wiki/sources/iarc2012-nickel-compounds-monograph-100c.md` | Nickel and Nickel Compounds (IARC Monographs Volume 100C — A Review of Human Carcinogens: Arsenic, Metals, Fibres, and Dusts) | Subject-fit review, then canonical hero |
| `wiki/sources/iarc2023-monograph-131-antimony.md` | IARC Monographs Volume 131, trivalent and pentavalent antimony | Subject-fit review, then canonical hero |
| `wiki/sources/ibikunle2025-functionalized-nanotubes-chromium-removal.md` | Removal of hexavalent chromium from contaminated synthetic groundwater via functionalized carbon nanomaterials modified with zinc and potassium | Subject-fit review, then canonical hero |
| `wiki/sources/ibrahim2024-food-heavy-metals-nigeria.md` | Correlates of Food Contamination by Heavy Metals in Northwest Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ibrahim2024-heavy-metals-egyptian-milk-cheese.md` | Heavy metals in raw milk and Egyptian cheese types | Subject-fit review, then canonical hero |

## Batch 122: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/ibrahim2025-metals-flavored-dairy-egypt.md` | Dietary Exposure and Health Risk Assessment of Selected Toxic and Essential Metals in Various Flavored Dairy Products | Subject-fit review, then canonical hero |
| `wiki/sources/ica2024-tampon-contaminants-review.md` | Contaminants in Vaginal Tampons: A Systematic Literature Review (SLR) | Subject-fit review, then canonical hero |
| `wiki/sources/ich2022-q3d-r2-elemental-impurities.md` | ICH Harmonised Guideline Q3D(R2): Guideline for Elemental Impurities | Subject-fit review, then canonical hero |
| `wiki/sources/ichikawa2006-hijiki-cooking-arsenic.md` | Decrease of arsenic in edible brown algae Hijikia fusiforme by the cooking process | Subject-fit review, then canonical hero |
| `wiki/sources/ichikawa2010-hijiki-arsenic-metabolism.md` | Ingestion and excretion of arsenic compounds present in edible brown algae, Hijikia fusiforme, by mice | Subject-fit review, then canonical hero |
| `wiki/sources/idris2023-adsorption-techniques-wastewater-review.md` | Introduction of adsorption techniques for heavy metals remediation | Subject-fit review, then canonical hero |
| `wiki/sources/iec2020-cpsc-cribs-rule-review.md` | Full-Size Cribs and Non-Full-Size Cribs Standards Rule Review — Final Contractor Technical Report | Subject-fit review, then canonical hero |
| `wiki/sources/igweze2019-trace-metals-infant-formula-nigeria.md` | Appropriateness of Essentials Trace Metals in Commonly Consumed Infant Formulae in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/igweze2020-al-as-hg-infant-formula-nigeria.md` | Public Health and Paediatric Risk Assessment of Aluminium, Arsenic and Mercury in Infant Formulas Marketed in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/igweze2020-china-toys-nigeria-pb-cd-as.md` | A pediatric health risk assessment of children's toys imported from China into Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/imongben2026-kaduna-vegetables-hra.md` | Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/imsi2015-gmp-maple-syrup-lead.md` | North American Good Manufacturing Practices to Avoid Lead Contamination of Maple Syrup | Subject-fit review, then canonical hero |
| `wiki/sources/inada2023-herbal-medicine-heavy-metal-regulations.md` | Comparison of heavy metal regulations for herbal medicines across pharmacopoeias | Subject-fit review, then canonical hero |
| `wiki/sources/index.md` | Sources | Subject-fit review, then canonical hero |
| `wiki/sources/india2020-cosmetics-rules-heavy-metals.md` | The Cosmetics Rules, 2020 | Subject-fit review, then canonical hero |
| `wiki/sources/india2020-cosmetics-rules.md` | Cosmetics Rules, 2020 (G.S.R. 763(E), 15 December 2020) | Subject-fit review, then canonical hero |
| `wiki/sources/indiafssai2026-contaminants-amendment-17.md` | Food Safety and Standards (Contaminants, Toxins and Residues) Amendment Regulations, 2026 | Subject-fit review, then canonical hero |
| `wiki/sources/inoue-2024-rice-nramp5-cadmium.md` | Engineering Rice Nramp5 Modifies Cadmium and Manganese Uptake Selectivity Using Yeast Assay System | Subject-fit review, then canonical hero |
| `wiki/sources/ionita2026-plant-responses-mining-heavy-metals.md` | Molecular and Cellular Mechanisms of Plant Responses to Heavy Metal Stress in Mining-Impacted Environments | Subject-fit review, then canonical hero |
| `wiki/sources/iqbal2015-rice-lead-salt-soil.md` | Lead accumulation and growth response of rice (Oryza sativa L.) varieties in lead contaminated soil under salt stress | Subject-fit review, then canonical hero |
| `wiki/sources/iqbal2023-poultry-feed-pakistan.md` | Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products | Subject-fit review, then canonical hero |
| `wiki/sources/irankunda2022-imac-mcp-separation-methodology-simulation.md` | Metal-Chelating Peptides Separation Using Immobilized Metal Ion Affinity Chromatography: Experimental Methodology and Simulation | Subject-fit review, then canonical hero |
| `wiki/sources/irrera2026-a-sulfate-arsenical-ferruginous.md` | A sulfate-arsenical-ferruginous | Subject-fit review, then canonical hero |
| `wiki/sources/is2017-statistics-show-that-concentrations-of-toxic-metals-in.md` | statistics show that concentrations of toxic metals in metals are removed. We argue that the view on organic | Subject-fit review, then canonical hero |
| `wiki/sources/ishii2015-phthalates-paper-diapers.md` | Investigation of the amount of transdermal exposure of newborn babies to phthalates in paper diapers and certification of the safety of paper diapers | Subject-fit review, then canonical hero |

## Batch 123: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/islam2007-dietary-toxicity-vegetables-food-crops.md` | Assessing potential dietary toxicity of heavy metals in selected vegetables and food crops | Subject-fit review, then canonical hero |
| `wiki/sources/islam2014-arsenic-breast-milk-bangladesh.md` | Availability of Arsenic in Human Milk in Women and Its Correlation with Arsenic in Urine of Breastfed Children Living in Arsenic Contaminated Areas in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/islam2014-bangladesh-cereals-pulses-metals.md` | Heavy Metals in Cereals and Pulses: Health Implications in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/islam2015-bangladesh-foods-heavy-metals.md` | The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/islam2018-tangail-food-crops-heavy-metals.md` | Assessment of heavy metals in foods around the industrial areas: Health hazard inference in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/islam2023-noakhali-spices-bangladesh.md` | Heavy Metals Induced Health Risk Assessment Through Consumption of Selected Commercially Available Spices in Noakhali District of Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/islam2024-edible-fats-oils-bangladesh.md` | Physicochemical characterization and determination of trace metals in different edible fats and oils in Bangladesh: Nexus to human health | Subject-fit review, then canonical hero |
| `wiki/sources/islam2024-heavy-metals-bangladeshi-fruits-review.md` | A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks | Subject-fit review, then canonical hero |
| `wiki/sources/islam2025-silver-nanoparticle-mercury-colorimetric-water.md` | Silver Nanoparticle Colorimetric Sensor for Mercury(II) Detection in Water Samples | Subject-fit review, then canonical hero |
| `wiki/sources/ismail2017-low-priced-toys-metals.md` | Heavy Metals Content in Low-Priced Toys | Subject-fit review, then canonical hero |
| `wiki/sources/iso2020-8124-3-toy-migration-elements.md` | ISO 8124-3:2020 — Safety of toys — Part 3: Migration of certain elements (Third edition, 2020-03) | Subject-fit review, then canonical hero |
| `wiki/sources/israelmoh2016-heavy-metals-tin-food-guidelines.md` | עדכון קווים מנחים לכמות מרבית של מתכות כבדות ובדיל במזון מיום 01.05.2016 | Subject-fit review, then canonical hero |
| `wiki/sources/israelmoh2016-imc-gmp-cannabis-heavy-metals.md` | IMC-GMP Israel Medical Cannabis - Good Manufacturing Practice | Subject-fit review, then canonical hero |
| `wiki/sources/issues2024-environmental-contaminants-in-fish-products-food-safety.md` | Environmental Contaminants in Fish Products: Food Safety | Subject-fit review, then canonical hero |
| `wiki/sources/isufi2025-child-contact-allergy-review.md` | Allergens responsible for contact allergy in children from 2010 to 2024: a systematic review and meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/iticescu2021-sewage-sludge-agricultural-land.md` | Optimal Solutions for the Use of Sewage Sludge on Agricultural Lands | Subject-fit review, then canonical hero |
| `wiki/sources/iwegbue2019-household-hygienic-products-nigeria.md` | Risk of human exposure to metals in some household hygienic products in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/iyabo2015-ekiti-staple-foods-metals.md` | Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/izah2016-beverages-heavy-metals-nigeria.md` | A Review of Heavy Metal Concentration and Potential Health Implications of Beverages Consumed in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/jaafar2020-pediococcus-lead-cadmium-bioremediation.md` | Bioremediation of lead and cadmium and the strive role of Pediococcus pentosaceus probiotic | Subject-fit review, then canonical hero |
| `wiki/sources/jabar2019-heavy-elements-water-diyala-iraq.md` | Determination of Heavy Elements (Pb, Cd, Cu and Cr) Concentration in Some Water Sources | Subject-fit review, then canonical hero |
| `wiki/sources/jackson2012-arsenic-organic-foods-brown-rice-syrup.md` | Arsenic, Organic Foods, and Brown Rice Syrup | Subject-fit review, then canonical hero |
| `wiki/sources/jackson2012-arsenic-speciation-infant-formulas-first-foods.md` | Arsenic concentration and speciation in infant formulas and first foods | Subject-fit review, then canonical hero |
| `wiki/sources/jackson2018-methylmercury-poisoning.md` | Methylmercury Poisoning | Subject-fit review, then canonical hero |
| `wiki/sources/jacob2011-infant-clothing-snaps-nickel.md` | Infant Clothing Snaps as a Potential Source of Nickel Exposure | Subject-fit review, then canonical hero |

## Batch 124: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/jadhav2025-lettuce-microplastic-metals.md` | Microplastic-Mediated Heavy Metal Uptake in Lettuce (Lactuca sativa L.): Implications for Food Safety and Agricultural Sustainability | Subject-fit review, then canonical hero |
| `wiki/sources/jafari2018-iran-rice-meta.md` | The concentration data of heavy metals in Iranian grown and imported rice and human health hazard assessment | Subject-fit review, then canonical hero |
| `wiki/sources/jairoun2020-uae-dietary-supplements-heavy-metals.md` | Heavy Metal contamination of Dietary Supplements products available in the UAE markets and the associated risk | Subject-fit review, then canonical hero |
| `wiki/sources/jaishankar2014-interdiscip-toxicol-2014-vol-7-2-60-72.md` | Interdiscip Toxicol. 2014; Vol. 7(2): 60–72. interdisciplinary | Subject-fit review, then canonical hero |
| `wiki/sources/jaishree2015-effluent-irrigated-crops-metals.md` | Heavy metal accumulation in vegetables irrigated with industrial effluent | Subject-fit review, then canonical hero |
| `wiki/sources/jaiswal2022-yamuna-heavy-metals-health-risk.md` | Heavy metal contamination in the complete stretch of Yamuna river: A fuzzy logic approach for comprehensive health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/jaiswal2026-breast-milk-metalloids-review.md` | A review of metal(loid) contamination in breast milk: from environmental exposure to infants' perils | Subject-fit review, then canonical hero |
| `wiki/sources/jakkielska2023-noodles-toxic-metals.md` | Risk profiling of exposures to potentially toxic metals PTM(s) through noodles consumption. A case study of human health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/jakubowski2012-zinc-cadmium-chapter.md` | Zinc and Cadmium Compounds (Chapter Seven), in Patty's Toxicology, Sixth Edition | Subject-fit review, then canonical hero |
| `wiki/sources/jalal2020-modeling-clay-metals.md` | Estimation of Some Metals in Children's Colorful Modeling Clay Sold in the Markets of Erbil City, Kurdistan Region, Iraq | Subject-fit review, then canonical hero |
| `wiki/sources/jalal2023-beneficial-microorganisms-climatic-extremes.md` | Beneficial Microorganisms Improve Agricultural Sustainability under Climatic Extremes | Subject-fit review, then canonical hero |
| `wiki/sources/janco2019-boletus-reticulatus-slovakia-cd-pb-hg.md` | The relationship between risk elements contamination of wild edible mushrooms (Boletus reticulatus Schaeff.) and underlying soil substrate | Subject-fit review, then canonical hero |
| `wiki/sources/janiga2024-alpine-bullhead-metals.md` | Heavy metals in alpine bullhead fish (Cottus gobio) after flash flood in the Tatra mountains | Subject-fit review, then canonical hero |
| `wiki/sources/jannat2018-iran-tea-heavy-metals.md` | Determination of trace elements and heavy metals content of green and black tea varieties consumed in Iran | Subject-fit review, then canonical hero |
| `wiki/sources/janvier2018-falsified-peptides-elemental-impurities.md` | Impurity profiling of the most frequently encountered falsified polypeptide drugs on the Belgian market | Subject-fit review, then canonical hero |
| `wiki/sources/janvier2019-mondia-root-bark-metals.md` | Nutritional value assessment of umufumba: A Rwandan wild edible plant Mondia whytei (Hook. F) | Subject-fit review, then canonical hero |
| `wiki/sources/japanmhlw1959-notice-370-food-contact-heavy-metals.md` | MHLW Notice No. 370 standards for foods, additives, apparatus, and containers and packaging - Section III | Subject-fit review, then canonical hero |
| `wiki/sources/jaramillo-mazo2026-cacao-cd-bacteria.md` | Integrating natural gradients and controlled assays to reveal bacterial responses to cadmium in Theobroma cacao L., soils | Subject-fit review, then canonical hero |
| `wiki/sources/jarin2025-plant-responses-heavy-metal-stresses.md` | Plant Responses to Heavy Metal Stresses: Mechanisms, Defense Strategies, and Nanoparticle-Assisted Remediation | Subject-fit review, then canonical hero |
| `wiki/sources/jarwar2023-vibrio-harveyi-carbonate-metal-coprecipitation.md` | Co-Precipitation of Cd, Cr, Pb, Zn, and Carbonates Using Vibrio harveyi Strain Isolated from Mediterranean Sea Sediment | Subject-fit review, then canonical hero |
| `wiki/sources/jasinska2019-mushroom-cadmium.md` | Relationship between zinc and cadmium contents and cultivating conditions of gourmet and medicinal mushroom Agaricus subrufescens | Subject-fit review, then canonical hero |
| `wiki/sources/jaskolski2015-cr3-2-ions-have-disordered-coordination-spheres-occu.md` | Cr3+(2) ions have disordered coordination spheres occu- Trivalent chromium, a d3 cation, is poorly taken up by liv- | Subject-fit review, then canonical hero |
| `wiki/sources/jaudenes-marrero2024-soybeans-toxic-elements.md` | Analysis of toxic element levels and health risks in different soybean species (Glycine max, Vigna radiata, Vigna angularis, Vigna mungo) | Subject-fit review, then canonical hero |
| `wiki/sources/jayanthi2019-chennai-chicken-heavy-metals.md` | Assessment of non-essential heavy metals in ready-to-eat chicken meat products of Chennai city | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-33rd-tin-1989.md` | Tin — Toxicological monograph prepared by the 33rd meeting of the Joint FAO/WHO Expert Committee on Food Additives | Subject-fit review, then canonical hero |

## Batch 125: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/jecfa-61st-methylmercury.md` | Evaluation of Certain Food Additives and Contaminants (Methylmercury), 61st Meeting of JECFA | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-64th-cadmium-tin-2006.md` | Evaluation of certain food contaminants — Sixty-fourth report of the Joint FAO/WHO Expert Committee on Food Additives | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-67th-aluminium-methylmercury-2007.md` | Evaluation of certain food additives and contaminants — Sixty-seventh report of the Joint FAO/WHO Expert Committee on Food Additives | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-73rd-cadmium-2010.md` | Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-73rd-lead-2010.md` | Lead (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-82nd-arsenic.md` | Safety Evaluation of Certain Food Additives (Arsenic), 82nd Meeting of JECFA | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-91st-cadmium-2022.md` | Cadmium: dietary exposure assessment | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa-food-additive-specs-compendium.md` | Combined Compendium of Food Additive Specifications: All Specifications Monographs from the 1st to the 65th Meeting (1956-2005) | Subject-fit review, then canonical hero |
| `wiki/sources/jecfa2003-talc-ins553iii-specification.md` | Talc (INS No. 553(iii)) specifications, prepared at the 61st JECFA (2003) | Subject-fit review, then canonical hero |
| `wiki/sources/jensen2003-nickel-systemic-contact-dose.md` | Experimental systemic contact dermatitis from nickel: a dose-response study | Subject-fit review, then canonical hero |
| `wiki/sources/jermilova2025-mackenzie-mercury-fish-bayesian.md` | Assessing mercury exposure to water and fish of the Mackenzie watershed using a Bayesian network analysis | Subject-fit review, then canonical hero |
| `wiki/sources/ji2026-agricultural-soil-metals-zhejiang.md` | Assessing spatial variability and source identification of heavy metals in agricultural soils: A geostatistical and multivariate analysis of coastal eastern Zhejiang, China | Subject-fit review, then canonical hero |
| `wiki/sources/jia2022-pteris-vittata-rhizosphere-arsenic.md` | Microbial community composition in the rhizosphere of Pteris vittata and its effects on arsenic phytoremediation under a natural arsenic contamination gradient | Subject-fit review, then canonical hero |
| `wiki/sources/jia2025-gold-nanocluster-lead-cadmium-simultaneous-sensor.md` | Gold Nanocluster-Based Fluorescence Sensor for Simultaneous Detection of Lead and Cadmium in Water | Subject-fit review, then canonical hero |
| `wiki/sources/jiang2020-henan-battery-factory-crops-metals.md` | Compound health risk assessment of cumulative heavy metal exposure: A case study of a village near a battery factory in Henan Province, China | Subject-fit review, then canonical hero |
| `wiki/sources/jiang2022-selenium-cadmium-brown-rice.md` | Selenium Decreases the Cadmium Content in Brown Rice: Foliar Se Application to Plants Grown in Cd-contaminated Soil | Subject-fit review, then canonical hero |
| `wiki/sources/jiang2025-global-patterns-and-exposure-assessment-of-cereal.md` | Global patterns and exposure assessment of cereal | Subject-fit review, then canonical hero |
| `wiki/sources/jiang2026-organotin-seafood-hong-kong.md` | Health risks of exposure to organotin compounds via seafood consumption after their legal ban | Subject-fit review, then canonical hero |
| `wiki/sources/jitareanu2025-heavy-metals-cosmetics-overview.md` | An Overview of Heavy Metals in Cosmetic Products and Their Toxicological Impact | Subject-fit review, then canonical hero |
| `wiki/sources/job2023-thondi-fish-metal-bioaccumulation.md` | Evaluation of water quality and bioaccumulation of metals in commercially important fishes: a human health concern | Subject-fit review, then canonical hero |
| `wiki/sources/johnke2004-nickel-fragrance-infants.md` | Reactivity to patch tests with nickel sulfate and fragrance mix in infants | Subject-fit review, then canonical hero |
| `wiki/sources/johnson-arbor2021-mercury-home-remediation.md` | Effective Decontamination and Remediation After Elemental Mercury Exposure: A Case Report in the United States | Subject-fit review, then canonical hero |
| `wiki/sources/johnson2012-cpsc-astm-f963-status.md` | Status Report: Review of Metals in the Toy Safety Standard, ASTM F 963 | Subject-fit review, then canonical hero |
| `wiki/sources/joseph2025-gobbiya-dam-vegetable-metals.md` | Assessment of the Level of Heavy Metals in Irrigation Water, Farm Soil, and Vegetables Grown in Gobbiya Dam, Bogoro Local Government Area Bauchi State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/joshi2017-charcoal-point-of-use-water-filter.md` | Assessment on optimization of charcoal unit for designing point of use water filter | Subject-fit review, then canonical hero |

## Batch 126: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/joyce2016-bush-meat-cooking-ghana.md` | Effects of Different Cooking Methods on Heavy Metals Level in Fresh and Smoked Game Meat | Subject-fit review, then canonical hero |
| `wiki/sources/jp-cabinet-order-334-1974-household-products.md` | Cabinet Order No. 334 of 1974, harmful substances in household products | Subject-fit review, then canonical hero |
| `wiki/sources/jrc2025-eu-ecolabel-revision-detergents-tr2-ahwg2.md` | Revision of the EU Ecolabel criteria for Detergent and Cleaning Products — 2nd Ad-hoc Working Group Meeting (12-13 March 2025), Technical Report 2 (TR2) consultation deck | Subject-fit review, then canonical hero |
| `wiki/sources/julvez2013-genetic-susceptibility-to-methylmercury-developmental.md` | Genetic susceptibility to methylmercury developmental | Subject-fit review, then canonical hero |
| `wiki/sources/july2023-arsenic-contamination-in-rice-radiation-and-chemical-methods.md` | Arsenic contamination in rice, radiation and chemical methods | Subject-fit review, then canonical hero |
| `wiki/sources/jung2017-iAs-infant-rice-snacks-korea.md` | Inorganic arsenic contents in infant rice powders and infant rice snacks marketed in Korea determined by a highly sensitive gas chromatography-tandem mass spectrometry following derivatization with British Anti-Lewisite | Subject-fit review, then canonical hero |
| `wiki/sources/jurkovic2025-flooded-chard-metals.md` | Heavy Metals and Microbiological Assessment of the Soil-Plant System of Flooded Areas Applied on Chard (Beta vulgaris) | Subject-fit review, then canonical hero |
| `wiki/sources/jurowski2022-chromium-peppermint-tincture.md` | Chromium impurities in peppermint tinctures from Polish pharmacies: speciation and health implications | Subject-fit review, then canonical hero |
| `wiki/sources/jurowski2023-heavy-metals-green-tea-poland.md` | The Control and Comprehensive Safety Assessment of Heavy Metal Impurities (As, Pb, and Cd) in Green Tea Camellia sinensis (L.) Samples (Infusions) Available in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/juskowiak2008-cysteine-rich-oboc-peptide-libraries.md` | Synthesis, Screening, and Sequencing of Cysteine-Rich One-Bead One-Compound Peptide Libraries | Subject-fit review, then canonical hero |
| `wiki/sources/kaaber1978-low-nickel-diet-chronic-nickel-dermatitis.md` | Low nickel diet in the treatment of patients with chronic nickel dermatitis | Subject-fit review, then canonical hero |
| `wiki/sources/kaalieswari2021-fenugreek-arsenic.md` | Determination of Arsenic Uptake Potential In an Edible Plant Species (Trigonellna Foenum- Granecum) and Assessment of Human Health Risk | Subject-fit review, then canonical hero |
| `wiki/sources/kabaran2020-health-risk-olive-oil-cyprus.md` | Is there any potential health risk of heavy metals through dietary intake of olive oil that produced in Morphou, Cyprus | Subject-fit review, then canonical hero |
| `wiki/sources/kagawa2023-fish-arsenic-hypertension-japan.md` | Elevated arsenic level in fasting serum via ingestion of fish meat increased the risk of hypertension in humans and mice | Subject-fit review, then canonical hero |
| `wiki/sources/kaise1988-marine-organisms-arsenic-speciation.md` | Distribution of inorganic arsenic and methylated arsenic in marine organisms | Subject-fit review, then canonical hero |
| `wiki/sources/kaksi2022-patch-tests-children-turkey.md` | Results of the patch tests with European baseline series in children: Five years of experience from a single center in Turkey and a review of the literature | Subject-fit review, then canonical hero |
| `wiki/sources/kalay-yildizhan2024-turkish-children-contact-sensitivity.md` | The Contact Sensitivity of Turkish Children and Adolescents to European Baseline Series Allergens between 2013 and 2023 | Subject-fit review, then canonical hero |
| `wiki/sources/kalicharan2025-heavy-metals-pet-food-south-africa.md` | Determination of Heavy Metal Contamination in Premium and Supermarket Brands of Extruded Feline and Canine Food in the South African Market | Subject-fit review, then canonical hero |
| `wiki/sources/kamaly2023-egypt-poultry-metals.md` | Health risk assessment of metals in chicken meat and liver in Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/kambara2024-antimonate-reductase-anra.md` | Identification of bacterial dissimilatory antimonate reductase AnrA: genes and proteins involved in antimonate respiration and resistance in Geobacter sp. strain SVR | Subject-fit review, then canonical hero |
| `wiki/sources/kamouh2024-heavy-metals-chicken-meat-egypt.md` | Heavy metals load in chicken meat and its reduction by probiotic strains | Subject-fit review, then canonical hero |
| `wiki/sources/kananke2026-sri-lanka-leaf-bioaccessibility.md` | Bioaccessibility of Heavy Metals in Raw and Processed Alternanthera sessilis and Centella asiatica: An In vitro Study | Subject-fit review, then canonical hero |
| `wiki/sources/kanazawa2024-hg-speciation-asgm-kenya.md` | Mercury speciation in artisanal small-scale gold mining (ASGM) environments in Kenya | Subject-fit review, then canonical hero |
| `wiki/sources/kangre2024-canned-tomato-pb-sn-ghana.md` | Heavy metal migration, exposure, and health risk through canned tomato mix under different marketing display models | Subject-fit review, then canonical hero |
| `wiki/sources/karatasli2018-radionuclide-heavy-metal-turkey-olives.md` | Radionuclide and Heavy Metal Content in the Table Olive (Olea europaea L.) from the Mediterranean Region of Turkey | Subject-fit review, then canonical hero |

## Batch 127: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/karavoltsos2020-copper-trace-metals-vinegars-greece.md` | Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter | Subject-fit review, then canonical hero |
| `wiki/sources/karimi2015-nail-polish-heavy-metals-iran.md` | Heavy Metal Contamination of Popular Nail Polishes in Iran | Subject-fit review, then canonical hero |
| `wiki/sources/karwowski2016-folk-diaper-powder-infant-lead.md` | Toxicants in folk remedies: implications of elevated blood lead in an American-born infant due to imported diaper powder | Subject-fit review, then canonical hero |
| `wiki/sources/kashiani2024-water-quality-index-and-health-risk-assessment-for.md` | Water quality index and health risk assessment for heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/kasozi2021-uganda-beef-metals.md` | Descriptive Analysis of Heavy Metals Content of Beef From Eastern Uganda and Their Safety for Public Consumption | Subject-fit review, then canonical hero |
| `wiki/sources/kataoka2018-japan-chocolate-cocoa-cadmium.md` | Surveillance of Cadmium Concentration in Chocolate and Cocoa Powder Products Distributed in Japan | Subject-fit review, then canonical hero |
| `wiki/sources/katebe2024-vegetables-lubumbashi.md` | Application of soil amendments to reduce the transfer of trace metal elements from contaminated soils of Lubumbashi (Democratic Republic of the Congo) to vegetables | Subject-fit review, then canonical hero |
| `wiki/sources/katrynska2026-human-milk-biomonitor-toxic-metals-review.md` | Human Milk as a Biomonitor of Toxic Metal Exposure: Sources, Transfer Mechanisms, and Implications for Infant Health — A Review | Subject-fit review, then canonical hero |
| `wiki/sources/kats2022-0220-childrens-products-common-safety.md` | KATS Notice 2022-0220, common safety standard for children's products | Subject-fit review, then canonical hero |
| `wiki/sources/kats2024-infant-textile-products.md` | KATS safety standard Annex 1, textile products for infants, 2024 | Subject-fit review, then canonical hero |
| `wiki/sources/katyal2020-instant-noodles-canada-metals.md` | Analysis of lead, arsenic, and cadmium concentrations in instant noodles within the Canadian market | Subject-fit review, then canonical hero |
| `wiki/sources/kaur2015-wheat-no-lead-toxicity.md` | Exogenous Nitric Oxide (NO) Interferes with Lead (Pb)-Induced Toxicity by Detoxifying Reactive Oxygen Species in Hydroponically Grown Wheat (Triticum aestivum) Roots | Subject-fit review, then canonical hero |
| `wiki/sources/kawamura2006-harmful-elements-baby-toys.md` | Contents of Eight Harmful Elements in Baby Toys and Their Migration Tests | Subject-fit review, then canonical hero |
| `wiki/sources/kaya2024-milk-packaging-heavy-metals.md` | Determination of Heavy Metal Accumulation in Milk and Their Packaging Materials and Statistical Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/kayani2025-hg-ratiometric-carbon-dots-water.md` | Portable smartphone-integrated ratiometric fluorescence probe for visual detection of mercury ions in environmental water with greenness evaluation | Subject-fit review, then canonical hero |
| `wiki/sources/kazeminia2023-tea-heavy-metals-review.md` | Heavy metals and their adverse effects: sources, risks, and strategies to reduce accumulation in tea herb — a systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/kazi2009-toxic-elements-in-infant-formulae.md` | Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer | Subject-fit review, then canonical hero |
| `wiki/sources/kazimov2014-dietary-heavy-metals-azerbaijan.md` | Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods | Subject-fit review, then canonical hero |
| `wiki/sources/keles2023-turkiye-wild-mushrooms-elements.md` | Wild mushrooms from Eastern Black Sea Region (Turkiye): Element concentrations and their health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/kelishadi2016-jujube-fruit-heavy-metals-breast-milk.md` | A Randomized Controlled Trial on the Effects of Jujube Fruit on the Concentrations of Some Toxic Trace Elements in Human Milk | Subject-fit review, then canonical hero |
| `wiki/sources/kennedy2025-mediterranean-seafood-methylmercury.md` | Methylmercury contamination in Mediterranean seafood: Exposure assessment and cost of illness implications | Subject-fit review, then canonical hero |
| `wiki/sources/kenya2021-ks-2937-cosmetic-safety.md` | KS 2937:2021 Cosmetics - General requirements for Safety of Cosmetic Products - Specification | Subject-fit review, then canonical hero |
| `wiki/sources/kepinska-pacelik2023-dog-snacks-trace-elements.md` | Chemical Composition and Palatability of Nutraceutical Dog Snacks | Subject-fit review, then canonical hero |
| `wiki/sources/keresztes2009-pet-mineral-water-antimony.md` | Leaching of antimony from polyethylene terephthalate (PET) bottles into mineral water | Subject-fit review, then canonical hero |
| `wiki/sources/khabir2021-epidermal-zinc-zno-nanoparticle-sunscreen.md` | Human Epidermal Zinc Concentrations after Topical Application of ZnO Nanoparticles in Sunscreens | Subject-fit review, then canonical hero |

## Batch 128: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/khalafalla2011-beef-carcasses-metals-egypt.md` | Heavy metal residues in beef carcasses in Beni-Suef abattoir, Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/khalid2008-islamabad-chromium-electrokinetic-remediation.md` | LABORATORY SCALE ELECTROKINETIC REMEDIATION OF HEXAVALENT CHROMIUM FROM CONTAMINATED SOIL | Subject-fit review, then canonical hero |
| `wiki/sources/khalil2017-snacks-peshawar-pakistan-heavy-metals.md` | Heavy Metals Toxicity: Estimation of Heavy Metals in Branded and Local Snacks Available in the Markets of Peshawar, Pakistan | Subject-fit review, then canonical hero |
| `wiki/sources/khan2007-withania-somnifera-metals-pakistan.md` | Effect of Environmental Pollution on Heavy Metals Content of Withania somnifera | Subject-fit review, then canonical hero |
| `wiki/sources/khan2013-medicinal-plants-metals-pakistan.md` | Toxic and some essential metals in medicinal plants used in herbal medicines: A case study in Pakistan | Subject-fit review, then canonical hero |
| `wiki/sources/khan2015-heavy-metals-food-plants-bioaccumulation.md` | The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review | Subject-fit review, then canonical hero |
| `wiki/sources/khandaker2021-malaysian-seaweed-metalloids.md` | Elevated Concentrations of Metal(loids) in Seaweed and the Concomitant Exposure to Humans | Subject-fit review, then canonical hero |
| `wiki/sources/kharkwal2023-cooked-beans-vegetables-metals.md` | Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab, North India | Subject-fit review, then canonical hero |
| `wiki/sources/khatemeh2022-pb-cd-sheep-liver-flukes.md` | Evaluation of bioaccumulation of some heavy metals in liver flukes (Fasciola hepatica and Dicrocoelium dendriticum) and liver samples of sheep | Subject-fit review, then canonical hero |
| `wiki/sources/kheirati-rounizi2021-sesame-oil-heavy-metals.md` | The chemical composition and heavy metal content of sesame oil produced by different methods: A risk assessment study | Subject-fit review, then canonical hero |
| `wiki/sources/kicinska2025-cosmetics-online-market-heavy-metals.md` | Health risks from heavy metals in cosmetic products available in the online consumer market | Subject-fit review, then canonical hero |
| `wiki/sources/kiczorowski2022-fermented-vegetables-metals.md` | Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition | Subject-fit review, then canonical hero |
| `wiki/sources/kilbo-edlund2017-pm25-south-africa-health-risk.md` | Health Risk Assessment of PM2.5 and PM2.5-Bound Trace Elements in Thohoyandou, South Africa | Subject-fit review, then canonical hero |
| `wiki/sources/kim-unknown-dog-food-trace-minerals.md` | Evaluation of selected ultra-trace minerals in commercially available dry dog foods | Subject-fit review, then canonical hero |
| `wiki/sources/kim2018-dry-dog-food-heavy-metals.md` | Evaluation of Arsenic, Cadmium, Lead and Mercury Contamination in Over-the-Counter Available Dry Dog Foods With Different Animal Ingredients (Red Meat, Poultry, and Fish) | Subject-fit review, then canonical hero |
| `wiki/sources/kim2019-jeju-shark-metals.md` | Heavy metal accumulation in and food safety of shark meat from Jeju Island, Republic of Korea | Subject-fit review, then canonical hero |
| `wiki/sources/kim2022-bsf-larvae-oil-eggs-heavy-metals.md` | Dietary effects of black soldier fly larvae oil on laying hen performance, egg quality, and egg safety | Subject-fit review, then canonical hero |
| `wiki/sources/kim2023-korea-fishery-products-metals.md` | Risk Assessment and Determination of Arsenic and Heavy Metals in Fishery Products in Korea | Subject-fit review, then canonical hero |
| `wiki/sources/kim2024-food-container-metal-migration-korea.md` | Potential migration of heavy metals from food containers and health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/kim2024-metals-kale-urban-rural-maryland.md` | Nutrients and non-essential metals in darkibor kale grown at urban and rural farms: a pilot study | Subject-fit review, then canonical hero |
| `wiki/sources/kim2026-mixed-pb-mehg-cd-hippocampus.md` | Combined exposure to lead, methylmercury, and cadmium impairs spatial memory and dopaminergic signaling in mouse hippocampus | Subject-fit review, then canonical hero |
| `wiki/sources/kimakova2018-fish-products-slovakia-mercury.md` | Fish and fish products as risk factors of mercury exposure | Subject-fit review, then canonical hero |
| `wiki/sources/kinuthia2021-nairobi-wastewater-biomonitoring.md` | Urban mosquitoes and filamentous green algae: their biomonitoring role in heavy metal pollution in open drainage channels in Nairobi industrial area, Kenya | Subject-fit review, then canonical hero |
| `wiki/sources/kirkpatrick1980-trace-elements-canadian-baby-foods.md` | The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants | Subject-fit review, then canonical hero |
| `wiki/sources/kithure2021-bottled-water-nairobi.md` | How Safe is the Water Consumed in Different Parts of Nairobi, Kenya? | Subject-fit review, then canonical hero |

## Batch 129: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/kjolholt2015-car-safety-seats-childrens-textiles.md` | Chemical substances in car safety seats and other textile products for children | Subject-fit review, then canonical hero |
| `wiki/sources/klein2017-human-milk-trace-elements.md` | Concentrations of trace elements in human milk: Comparisons among women in Argentina, Namibia, Poland, and the United States | Subject-fit review, then canonical hero |
| `wiki/sources/kletikova2022-quail-feed-blood-minerals.md` | Effect of Feed Additive on the Mineral Composition of Quail Blood | Subject-fit review, then canonical hero |
| `wiki/sources/klopper2020-namibian-coastal-aerosol-metals.md` | Chemical composition and source apportionment of atmospheric aerosols on the Namibian coast | Subject-fit review, then canonical hero |
| `wiki/sources/knappett2022-arsenic-fluoride-aquifer-mexico.md` | A Systems Approach to Remediating Human Exposure to Arsenic and Fluoride From Overexploited Aquifers | Subject-fit review, then canonical hero |
| `wiki/sources/knoll2024-honeybee-cadmium-review.md` | Foraging Activity of Honey Bees (Apis mellifera L., 1758) and Exposure to Cadmium: a Review | Subject-fit review, then canonical hero |
| `wiki/sources/knox2022-metal-allergens-skin-lipids.md` | Topical application of metal allergens induces changes to lipid composition of human skin | Subject-fit review, then canonical hero |
| `wiki/sources/kocevar-glavac2017-medicinal-plants-soil-metals.md` | Accumulation of heavy metals from soil in medicinal plants | Subject-fit review, then canonical hero |
| `wiki/sources/koga2021-tin-arsenic-lead-soft-drinks.md` | Analysis of Tin, Arsenic and Lead in Soft Drinks by Microwave Digestion and Its Applicability | Subject-fit review, then canonical hero |
| `wiki/sources/komonen2026-environmental-and-ecotoxicity-impacts-of-sunscreen-formulations-with.md` | Environmental and ecotoxicity impacts of sunscreen formulations with | Subject-fit review, then canonical hero |
| `wiki/sources/kongta2023-noodle-products-aluminum-thailand.md` | Assessment of Exposure to Aluminum through Consumption of Noodle Products | Subject-fit review, then canonical hero |
| `wiki/sources/konuspayeva2010-camel-milk-kazakhstan.md` | Pollution of Camel Milk by Heavy Metals in Kazakhstan | Subject-fit review, then canonical hero |
| `wiki/sources/kopru2024-children-cosmetics-icpms.md` | Inductively coupled plasma-mass spectrometry (ICP-MS) detection of trace metal contents of children cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/kopylev2024-j-toxicol-environ-health-b-crit-rev-author.md` | J Toxicol Environ Health B Crit Rev. Author manuscript; available in PMC 2026 May 19. | Subject-fit review, then canonical hero |
| `wiki/sources/kopylev2025-relationship-of-prenatal-methylmercury.md` | Relationship of prenatal methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/koreamfds2024-notice-2024-9-cosmetic-safety-standards.md` | Regulations on Cosmetic Safety Standards, etc. - MFDS Notice No. 2024-9 | Subject-fit review, then canonical hero |
| `wiki/sources/koreamfds2024-utensils-containers-packages.md` | Korea MFDS Notice 2024-29 standards and specifications for utensils, containers and packages - part 1 | Subject-fit review, then canonical hero |
| `wiki/sources/kosemund2009-superabsorbent-diaper-safety.md` | Safety evaluation of superabsorbent baby diapers | Subject-fit review, then canonical hero |
| `wiki/sources/kosker2023-canned-fish-turkey.md` | Metal levels of canned fish sold in Türkiye: health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/kovacik2024-grass-carp-muscle-microelements.md` | Microelements, Fatty Acid Profile, and Selected Biomarkers in Grass Carp (Ctenopharyngodon idella) Muscle Tissue: Seasonal Variations and Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/kovalchuk2019-honey-bee-citrate-tissue-metals.md` | Physiological relationship between content of certain microelements in the tissues of different anatomic sections of the organism of honey bees exposed to citrates of argentum and cuprum | Subject-fit review, then canonical hero |
| `wiki/sources/kowalczyk2022-efsa-antimony-teas.md` | Risk assessment of rare earth elements, antimony, barium, boron, lithium, tellurium, thallium and vanadium in teas | Subject-fit review, then canonical hero |
| `wiki/sources/kowalska2021-metals-herbs-spices-tea-coffee-poland.md` | The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/kowalski2024-herbal-tea-heavy-metals.md` | Assessment of heavy metal contamination and associated health risk indices in commercial herbal tea samples using inductively coupled plasma mass spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/krasnopyorova2024-almaty-surface-water.md` | Trace Element Composition of Surface Water in Almaty City and Human Health Risk Assessment | Subject-fit review, then canonical hero |

## Batch 130: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/krasnopyorova2025-almaty-drinking-water-metals.md` | Trace element composition of drinking water in Almaty, Kazakhstan | Subject-fit review, then canonical hero |
| `wiki/sources/krekeler2022-baby-powder-nickel-chromium-abstract.md` | Nickel and chromium content in a bottle of baby powder from 1985 designated for hospital use opens questions regarding product source and contamination | Subject-fit review, then canonical hero |
| `wiki/sources/kuang2026-paddycrusts-interfacial-bioregulators-of-heavy-metal-transport.md` | Paddycrusts: interfacial bioregulators of heavy metal transport | Subject-fit review, then canonical hero |
| `wiki/sources/kubachka2019-arsenic-speciation-fruit-juice-fda.md` | Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS | Subject-fit review, then canonical hero |
| `wiki/sources/kukusamude2020-thai-rice-heavy-metals.md` | Heavy metals and probabilistic risk assessment via rice consumption in Thailand | Subject-fit review, then canonical hero |
| `wiki/sources/kulhari2013-medicinal-plants-metals-india.md` | Investigation of heavy metals in frequently utilized medicinal plants collected from environmentally diverse locations of north western India | Subject-fit review, then canonical hero |
| `wiki/sources/kuller2016-infant-skin-care-products.md` | Infant skin care products: what are the issues? | Subject-fit review, then canonical hero |
| `wiki/sources/kumar2022-bangladesh-agricultural-products-lead.md` | Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/kumar2022-macrophyte-minerals-fish-feed.md` | Freshwater Macrophytes: A Potential Source of Minerals and Fatty Acids for Fish, Poultry, and Livestock | Subject-fit review, then canonical hero |
| `wiki/sources/kumar2024-arsenic-breast-milk-bihar-gangetic.md` | High Arsenic Contamination in the Breast Milk of Mothers Inhabiting the Gangetic Plains of Bihar: A Major Health Risk to Infants | Subject-fit review, then canonical hero |
| `wiki/sources/kumar2025-mercury-lactating-women-infants-bihar.md` | Mercury Poisoning in Lactating Women and Infants in the Gangetic Plain, Bihar, India: A Cross-Sectional Study | Subject-fit review, then canonical hero |
| `wiki/sources/kundu2026-gold-nanoparticle-arsenic-colorimetric-groundwater.md` | Gold Nanoparticle-Based Colorimetric Sensing of Arsenic(III) and Arsenic(V) in Groundwater | Subject-fit review, then canonical hero |
| `wiki/sources/kurniawati2021-jakarta-staple-foods-naa.md` | Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis | Subject-fit review, then canonical hero |
| `wiki/sources/kuzan2025-placental-metallomics-lower-silesia.md` | Metallomic Profile of Placental Tissue and Its Association with Maternal and Neonatal Parameters: A Cross-Sectional ICP-OES Study in Lower Silesia | Subject-fit review, then canonical hero |
| `wiki/sources/kuznetsova2019-milk-infant-formulas-heavy-metals.md` | Heavy metals in milk infant formulas | Subject-fit review, then canonical hero |
| `wiki/sources/la-pera2010-sicily-olive-oil-metals-selenium.md` | Classification of Sicilian Olive Oils According to Heavy Metal and Selenium Levels Using Canonical Discriminant Analysis (CDA) | Subject-fit review, then canonical hero |
| `wiki/sources/lai2025-infant-diaper-phthalate-dna-oxidation.md` | Infants' Dermal Exposure to Phthalates from Disposable Baby Diapers and Its Association with DNA Oxidative Damage | Subject-fit review, then canonical hero |
| `wiki/sources/lalotra2016-jammu-wild-mushrooms-metals.md` | Bioaccumulation of heavy metals in the sporocarps of some wild mushrooms | Subject-fit review, then canonical hero |
| `wiki/sources/lampis2015-pteris-vittata-arsenic-bacteria.md` | Promotion of arsenic phytoextraction efficiency in the fern Pteris vittata by the inoculation of As-resistant bacteria: a soil bioremediation perspective | Subject-fit review, then canonical hero |
| `wiki/sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review.md` | Assessment of heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria: A systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/laparra2003-seaweed-arsenic-bioaccessibility.md` | Estimation of Arsenic Bioaccessibility in Edible Seaweed by an in Vitro Digestion Method | Subject-fit review, then canonical hero |
| `wiki/sources/larese-filon2015-nanoparticle-skin-absorption-review.md` | Nanoparticles skin absorption: New aspects for a safety profile evaluation | Subject-fit review, then canonical hero |
| `wiki/sources/larese2007-percutaneous-metal-compounds.md` | In vitro percutaneous absorption of metal compounds | Subject-fit review, then canonical hero |
| `wiki/sources/largueza2026-milk-formulas-toxic-elements-review.md` | Essential and Potentially Toxic Elements in Commercial Milk Formulas: Health Risk Assessment Through a Systematic Review and Meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/lasky2013-arsenic-chicken-correspondence.md` | Arsenic Levels in Chicken (correspondence: Lasky letter and Nachman et al. response) | Subject-fit review, then canonical hero |

## Batch 131: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/lawluvi2026-maternal-geophagy-ghana.md` | Maternal geophagy in Ghana: heavy metal exposure and health risks during pregnancy | Subject-fit review, then canonical hero |
| `wiki/sources/lea2018-dinp-endocrine-disruption.md` | Evaluation of the endocrine disrupting potential of Di-isononyl phthalate | Subject-fit review, then canonical hero |
| `wiki/sources/lead2017-sociocultural-factors-associated-with-fish.md` | Sociocultural factors associated with fish | Subject-fit review, then canonical hero |
| `wiki/sources/leadsafemama2025-baby-lotion-single-lot.md` | Baby lotion tested for lead, cadmium, mercury and arsenic (Lead Safe Mama community-funded laboratory testing, single lot) | Subject-fit review, then canonical hero |
| `wiki/sources/lech2020-turmeric-lead-united-states.md` | Ground Turmeric as a Source of Lead Exposure in the United States | Subject-fit review, then canonical hero |
| `wiki/sources/leclerc2023-methylmercury-periphyton-river.md` | Enhanced Bioaccumulation and Transfer of Monomethylmercury through Periphytic Biofilms in Benthic Food Webs of a River Affected by Run-of-River Dams | Subject-fit review, then canonical hero |
| `wiki/sources/lee2003-arabidopsis-pcs1-overexpression-cd-hypersensitivity.md` | Overexpression of Arabidopsis Phytochelatin Synthase Paradoxically Leads to Hypersensitivity to Cadmium Stress | Subject-fit review, then canonical hero |
| `wiki/sources/lee2016-taiwan-seafood-organotins.md` | Health risk assessment of the intake of butyltin and phenyltin compounds from fish and seafood in Taiwanese population | Subject-fit review, then canonical hero |
| `wiki/sources/lee2017-camping-cooking-utensils-metal-migration.md` | Influence of usage environment from camping cooking utensils on migration of hazardous metals | Subject-fit review, then canonical hero |
| `wiki/sources/lee2019-food-processing-heavy-metals-migration.md` | Effects of food processing methods on migration of heavy metals to food | Subject-fit review, then canonical hero |
| `wiki/sources/lee2022-total-mercury-and-methyl-mercury-in-seafood.md` | total mercury and methyl mercury in seafood | Subject-fit review, then canonical hero |
| `wiki/sources/lee2023-south-korea-fresh-fruits-seven-metals.md` | Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea | Subject-fit review, then canonical hero |
| `wiki/sources/lee2025-knhanes-mercury-cadmium-arsenic-obesity.md` | Associations of heavy metals and urinary sodium excretion with obesity in adults: A cross-sectional study from Korean Health Examination and Nutritional Survey | Subject-fit review, then canonical hero |
| `wiki/sources/lehel2018-hungary-seafood-metals.md` | Heavy metals in seafood purchased from a fishery market in Hungary | Subject-fit review, then canonical hero |
| `wiki/sources/lehel2023-yellowfin-tuna-indian-ocean.md` | Metal Load of Potentially Toxic Elements in Tuna (Thunnus albacares) - Food Safety Aspects | Subject-fit review, then canonical hero |
| `wiki/sources/lehel2024-rainbow-trout-aquaculture-italy.md` | Possible Metal Burden of Potentially Toxic Elements in Rainbow Trout (Oncorhynchus mykiss) on Aquaculture Farm | Subject-fit review, then canonical hero |
| `wiki/sources/leite-silva2016-nano-zinc-oxide-skin-occlusion.md` | Human skin penetration and local effects of topical nano zinc oxide after occlusion and barrier impairment | Subject-fit review, then canonical hero |
| `wiki/sources/lenart2023-wild-boar-metals.md` | Monitoring of metal content in the tissues of wild boar (Sus scrofa) and its food safety aspect | Subject-fit review, then canonical hero |
| `wiki/sources/lepak2023-sport-fish-mercury-colorado.md` | Predicting sport fish mercury contamination in heavily managed reservoirs: Implications for human and ecological health | Subject-fit review, then canonical hero |
| `wiki/sources/lepak2025-mercury-sport-fish-colorado-correction.md` | Correction: Mercury Concentrations in Sport Fish from Colorado Reservoirs | Subject-fit review, then canonical hero |
| `wiki/sources/lepak2026-mehg-depuration-fish-consumption.md` | Quantifying Depuration of Methylmercury from Fish Consumption by Travelers | Subject-fit review, then canonical hero |
| `wiki/sources/leskova2024-transbaikal-wild-mushrooms-elements.md` | Content of some chemical elements in wild mushrooms of the Transbaikal Territory | Subject-fit review, then canonical hero |
| `wiki/sources/lestari2022-lead-vegetable-phytoextraction.md` | Potential of Two Vegetable Plants in Reducing Lead Contamination in Soil | Subject-fit review, then canonical hero |
| `wiki/sources/levin2024-us-drinking-water-contaminants.md` | Drinking water quality in the United States: a review of contaminants, regulations, and health implications | Subject-fit review, then canonical hero |
| `wiki/sources/levkov2017-ewes-milk-trace-elements.md` | Content of major and trace elements in raw ewes’ milk used for production of traditional white brined cheese | Subject-fit review, then canonical hero |

## Batch 132: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/lgc2003-nickel-piercing-post-assemblies.md` | Risk of sensitisation of humans to nickel by piercing post assemblies | Subject-fit review, then canonical hero |
| `wiki/sources/lhaac2025-csp41-herbs-spices-wa.md` | Coordinated Sampling Project 41: Microbial and Heavy Metal Detections in Herbs and Spices | Subject-fit review, then canonical hero |
| `wiki/sources/li2013-tea-chemical-contaminants-review.md` | Determination for major chemical contaminants in tea (Camellia sinensis) matrices: A review | Subject-fit review, then canonical hero |
| `wiki/sources/li2015-agrobacterium-antimonite-oxidase.md` | Proteomics and genetics for identification of a bacterial antimonite oxidase in Agrobacterium tumefaciens | Subject-fit review, then canonical hero |
| `wiki/sources/li2015-green-tea-jiangxi-al-heavy-metals.md` | A comparison of the potential health risk of aluminum and heavy metals in tea leaves and tea infusion of commercially available green tea in Jiangxi, China | Subject-fit review, then canonical hero |
| `wiki/sources/li2017-antimonite-oxidation-agrobacterium.md` | Abiotic and biotic factors responsible for antimonite oxidation in Agrobacterium tumefaciens GW4 | Subject-fit review, then canonical hero |
| `wiki/sources/li2017-jiangsu-rice-cadmium-transfer.md` | Cadmium transfer from contaminated soils to the human body through rice consumption in southern Jiangsu Province, China | Subject-fit review, then canonical hero |
| `wiki/sources/li2017-mercury-coal-power-plants-vegetables-grains.md` | Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants | Subject-fit review, then canonical hero |
| `wiki/sources/li2017-spirulina-arsenic-speciation.md` | Determination of different arsenic species in food-grade spirulina powder by ion chromatography combined with inductively coupled plasma mass spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/li2019-plastic-packaging-metal-migration.md` | Evaluation of heavy metal migration from plastic food packaging materials to aqueous simulants by ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/li2020-silk-fibroin-nanoflower-lead-remediation.md` | Investigation on the Adsorption-Interaction Mechanism of Pb(II) at Surface of Silk Fibroin Protein-Derived Hybrid Nanoflower Adsorbent | Subject-fit review, then canonical hero |
| `wiki/sources/li2021-china-national-tea-reconnaissance.md` | Occurrence, accumulation, and risk assessment of trace metals in tea (Camellia sinensis): A national reconnaissance | Subject-fit review, then canonical hero |
| `wiki/sources/li2021-lead-lip-cosmetics-china-ecommerce.md` | Trace Metal Lead Exposure in Typical Lip Cosmetics From Electronic Commercial Platform: Investigation, Health Risk Assessment and Blood Lead Level Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/li2021-shaoguan-smelter-hra.md` | A New Approach Refined Probabilistic Health Risk Assessment of Shaoguan Smelter Based on Microenvironment — Guangdong Province, China, 2021 | Subject-fit review, then canonical hero |
| `wiki/sources/li2022-guizhou-cd-grains.md` | Spatial distribution and risk assessment of fluorine and cadmium in rice, corn, and wheat grains in most karst regions of Guizhou province, China | Subject-fit review, then canonical hero |
| `wiki/sources/li2022-mercury-isotope-biota-review.md` | Internal Dynamics and Metabolism of Mercury in Biota: A Review of Insights from Mercury Stable Isotopes | Subject-fit review, then canonical hero |
| `wiki/sources/li2022-wheat-pte-guizhou-health-risk.md` | Co-exposure of potentially toxic elements in wheat grains reveals a probabilistic health risk in Southwestern Guizhou, China | Subject-fit review, then canonical hero |
| `wiki/sources/li2023-ready-to-eat-seafood.md` | ready-to-eat seafood: | Subject-fit review, then canonical hero |
| `wiki/sources/li2024-as-colorimetric-water-sensor.md` | Colorimetric sensor for As3+ detection in water | Subject-fit review, then canonical hero |
| `wiki/sources/li2024-global-fisheries-mehg.md` | Global fishing patterns amplify human exposures to methylmercury | Subject-fit review, then canonical hero |
| `wiki/sources/li2024-hg-iip-qcm-wastewater.md` | Mercury ion-imprinted polymer QCM sensor for wastewater detection | Subject-fit review, then canonical hero |
| `wiki/sources/li2024-nostoc-antimony-biomethylation.md` | Arsenite S-Adenosylmethionine Methyltransferase Is Responsible for Antimony Biomethylation in Nostoc sp. PCC7120 | Subject-fit review, then canonical hero |
| `wiki/sources/li2024-rice-cadmium-governance-china.md` | Achieving synergistic benefits through integrated governance of cultivated cadmium contamination via multistakeholder collaboration | Subject-fit review, then canonical hero |
| `wiki/sources/li2024-selenium-cadmium-rice-black-shale-china.md` | Effects of selenium and cadmium on human liver and kidney functions in exposed black shale areas | Subject-fit review, then canonical hero |
| `wiki/sources/li2024-selenium-pps-mercury-immobilization.md` | Biomimetic mercury immobilization by selenium functionalized polyphenylene sulfide fabric | Subject-fit review, then canonical hero |

## Batch 133: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/li2025-astragalus-mosseae-cadmium-uptake.md` | Effect of Funneliformis mosseae and Cu Additives on the Astragalus sinicus Root Growth and Cd Uptake Under the Modeled Conditions | Subject-fit review, then canonical hero |
| `wiki/sources/li2025-iris-sibirica-biochar-cadmium-adsorption.md` | Enhanced Cadmium Adsorption Mechanisms Utilizing Biochar Derived from Different Parts of Wetland Emergent Plants Iris sibirica L. | Subject-fit review, then canonical hero |
| `wiki/sources/li2025-ratiometric-fluorescent-sensor-al-cu-food.md` | A ratiometric fluorescent sensor for Al3+ and Cu2+ detection in food samples | Subject-fit review, then canonical hero |
| `wiki/sources/li2026-heavy-metals-chinese-chicken-eggs-urban-mining.md` | Heavy metal concentrations in Chinese chicken eggs: insights from comparative study of urban and mining areas | Subject-fit review, then canonical hero |
| `wiki/sources/liang-yang2019-olive-leaves-cu-zn-stress.md` | Effects of Zinc and Copper Stress on Antioxidant System of Olive Leaves | Subject-fit review, then canonical hero |
| `wiki/sources/liang2019-beijing-foodstuffs-health-risk.md` | Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China | Subject-fit review, then canonical hero |
| `wiki/sources/liang2024-rice-cadmium-biochar.md` | The dissolved organic matter from the co-decomposition of Chinese milk vetch and rice straw induces the strengthening of Cd remediation by Fe-modified biochar | Subject-fit review, then canonical hero |
| `wiki/sources/lim2015-korea-kriefs-dietary-exposure-pb-cd-hg.md` | Korean research project on the integrated exposure assessment of hazardous substances for food safety | Subject-fit review, then canonical hero |
| `wiki/sources/limmer2023-sr-xrf-rice-grain.md` | Synchrotron X-ray fluorescence mapping of arsenic, zinc, copper, and manganese in rice grain cross-sections | Subject-fit review, then canonical hero |
| `wiki/sources/limmer2024-arsenic-cadmium-rice-irrigation.md` | Controlling exposure to As and Cd from rice via irrigation management | Subject-fit review, then canonical hero |
| `wiki/sources/lin2012-guangzhou-hongdan-baby-powder-lead.md` | Childhood lead poisoning associated with traditional Chinese medicine: A case report and the subsequent lead source inquiry | Subject-fit review, then canonical hero |
| `wiki/sources/lin2021-taiwan-seafood-mercury-tds.md` | Dietary Exposure of the Taiwan Population to Mercury Content in Various Seafood Assessed by a Total Diet Study | Subject-fit review, then canonical hero |
| `wiki/sources/lin2023-donor-milk-lead-mercury.md` | Health Risk of Infants Exposed to Lead and Mercury Through Breastfeeding | Subject-fit review, then canonical hero |
| `wiki/sources/lin2024-edible-oils-taiwan-12-metals.md` | Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan | Subject-fit review, then canonical hero |
| `wiki/sources/lin2025-coffee-waste-metal-dye-removal.md` | Sustainable Bio-Adsorbent Generated from Coffee Waste for Dual Application in Heavy Metal and Dye Removal | Subject-fit review, then canonical hero |
| `wiki/sources/lin2025-metagenomics-reveals-diverse-community-of-putative-mercury.md` | Metagenomics reveals diverse community of putative mercury | Subject-fit review, then canonical hero |
| `wiki/sources/lin2025-taiwan-blood-metals-urothelial-carcinoma.md` | LINE-1 DNA methylation mediates smoking-related risk in site-specific urothelial carcinoma: a Taiwan case-control study | Subject-fit review, then canonical hero |
| `wiki/sources/liu2010-mercury-white-vinegar-afs.md` | Direct determination of mercury in white vinegar by matrix assisted photochemical vapor generation atomic fluorescence spectrometry detection | Subject-fit review, then canonical hero |
| `wiki/sources/liu2018-tcm-arsenic-bioaccessibility.md` | Speciation and bioaccessibility of arsenic in traditional Chinese medicines and assessment of its potential health risk | Subject-fit review, then canonical hero |
| `wiki/sources/liu2020-lactobacillus-plantarum-cadmium-excretion.md` | Relief of Cadmium-Induced Intestinal Motility Disorder in Mice by Lactobacillus plantarum CCFM8610 | Subject-fit review, then canonical hero |
| `wiki/sources/liu2020-rice-gwas-ionomics.md` | Genome-wide association studies of ionomic and agronomic traits in USDA mini core collection of rice and comparative analyses of different mapping methods | Subject-fit review, then canonical hero |
| `wiki/sources/liu2021-arsenolipids-seafood.md` | Discovery and Identification of Arsenolipids Using a Precursor-Finder Strategy and Data-Independent Mass Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/liu2022-heavy-metals-rice-maize-chengdu.md` | Health risk assessment of heavy metals in soils and food crops from a coexist area of heavily industrialized and intensively cropping in the Chengdu Plain, Sichuan, China | Subject-fit review, then canonical hero |
| `wiki/sources/liu2022-south-china-rice-cd-as.md` | Co-accumulation of cadmium and arsenic in rice cultivars under field conditions in South China | Subject-fit review, then canonical hero |
| `wiki/sources/liu2023-arsenic-seafood-digestion.md` | Transformation of arsenic species from seafood consumption during in vitro digestion | Subject-fit review, then canonical hero |

## Batch 134: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/liu2023-beibu-gulf-ptes-seawater.md` | Characterization, source identification, risk assessment of potentially toxic elements (PTEs) in the surface water and sediment of the Beibu Gulf, China | Subject-fit review, then canonical hero |
| `wiki/sources/liu2023-cadmium-microbiota-metabolome-rats.md` | Environmental cadmium exposure alters the internal microbiota and metabolome of Sprague-Dawley rats | Subject-fit review, then canonical hero |
| `wiki/sources/liu2023-xingren-rice-paddy-soil-heavy-metals.md` | Characteristics, Chemical Speciation and Health Risk Assessment of Heavy Metals in Paddy Soil and Rice around an Abandoned High-Arsenic Coal Mine Area, Southwest China | Subject-fit review, then canonical hero |
| `wiki/sources/liu2023-yuyao-soil-crop-metals.md` | Enrichment Characteristics and Health Risk Assessment of Heavy Metals in Soil-Crop Systems | Subject-fit review, then canonical hero |
| `wiki/sources/liu2024-crnanohorn-crvi-water-sensor.md` | Carbon nanohorn electrochemical sensor for Cr(VI) in tap water | Subject-fit review, then canonical hero |
| `wiki/sources/liu2024-zebrafish-antimony-exposure.md` | Integrated physiological, intestinal microbiota, and metabolomic responses of adult zebrafish (Danio rerio) to subacute exposure to antimony at environmentally relevant concentrations | Subject-fit review, then canonical hero |
| `wiki/sources/liu2025-mercury-poisoning-associated-membranous.md` | Mercury poisoning-associated membranous | Subject-fit review, then canonical hero |
| `wiki/sources/liu2025-nanyang-crops-heavy-metals.md` | Heavy metal synergistic pollution risk assessment in the soil-crop system of the Nanyang Basin | Subject-fit review, then canonical hero |
| `wiki/sources/liu2026-heavy-metal-exposure-and-risk-of-all-cause.md` | Heavy metal exposure and risk of all-cause and | Subject-fit review, then canonical hero |
| `wiki/sources/lizama2022-chilean-altiplano-water.md` | Long-term monitoring of water quality in the Chilean Altiplano-Puna: arsenic and boron exceedances in surface waters 2008–2018 | Subject-fit review, then canonical hero |
| `wiki/sources/ljung2007-manganese-drinking-water-guideline.md` | Time to Re-evaluate the Guideline Value for Manganese in Drinking Water? | Subject-fit review, then canonical hero |
| `wiki/sources/llorent-martinez2014-olive-oil-extraction-metals-fate.md` | Quantitation of Metals During the Extraction of Virgin Olive Oil from Olives Using ICP-MS after Microwave-assisted Acid Digestion | Subject-fit review, then canonical hero |
| `wiki/sources/llorente-mirandes2011-commercial-seaweed-arsenic.md` | Determination of Water-Soluble Arsenic Compounds in Commercial Edible Seaweed by LC-ICPMS | Subject-fit review, then canonical hero |
| `wiki/sources/llorente-mirandes2016-ias-food-analytical-review.md` | Inorganic Arsenic Determination in Food: A Review of Analytical Proposals and Quality Assessment Over the Last Six Years | Subject-fit review, then canonical hero |
| `wiki/sources/loan2023-prenatal-low-dose-methylmercury-exposure-causes.md` | Prenatal low-dose methylmercury exposure causes | Subject-fit review, then canonical hero |
| `wiki/sources/lockwood2023-sri-lanka-rice-heavy-metals.md` | Toxic and essential element content of traditional Sri Lankan rice varieties from Anuradhapura district | Subject-fit review, then canonical hero |
| `wiki/sources/loden2012-mineral-powders-nickel.md` | Nickel release from mineral make-up powders and pigments | Subject-fit review, then canonical hero |
| `wiki/sources/lodhi2021-methyl-inorganic-mercury-infant-formula.md` | Evaluation of the Methyl and Inorganic Mercury in Infant Formula Milk and Cereals Samples: Estimated Risk Assessment in Children under 2.0 Years | Subject-fit review, then canonical hero |
| `wiki/sources/lodico2015-infant-formula-metals.md` | Simultaneous Determination of As, Cu, Cr, Se, Sn, Cd, Sb and Pb Levels in Infant Formulas by ICP-MS after Microwave-Assisted Digestion: Method Validation | Subject-fit review, then canonical hero |
| `wiki/sources/long2024-human-health-effects-of-oral-exposure-to-chromium.md` | Human Health Effects of Oral Exposure to Chromium: | Subject-fit review, then canonical hero |
| `wiki/sources/lopez2022-cacao-biochar-cadmium.md` | Reducing cadmium bioaccumulation in Theobroma cacao using biochar: basis for scaling-up to field | Subject-fit review, then canonical hero |
| `wiki/sources/lordan2022-brown-crab-cadmium-review.md` | Cadmium: A Focus on the Brown Crab (Cancer pagurus) Industry and Potential Human Health Risks | Subject-fit review, then canonical hero |
| `wiki/sources/lorenc2020-marine-algae-arsenic-species.md` | Arsenic species and their transformation pathways in marine plants. Usefulness of advanced hyphenated techniques HPLC/ICP-MS and UPLC/ESI-MS/MS in arsenic species analysis | Subject-fit review, then canonical hero |
| `wiki/sources/lorenzana2009-seafood-arsenic-speciation.md` | Arsenic in Seafood: Speciation Issues for Human Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/loutfy2012-ismailia-foodstuffs-metals.md` | Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt | Subject-fit review, then canonical hero |

## Batch 135: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/lozano-bilbao2023-canary-tuna-metals.md` | Risk Assessment and Characterization in Tuna Species of the Canary Islands According to Their Metal Content | Subject-fit review, then canonical hero |
| `wiki/sources/lu-2014-arsenic-gut-microbiome-metabolomics.md` | Arsenic Exposure Perturbs the Gut Microbiome and Its Metabolic Profile in Mice: An Integrated Metagenomics and Metabolomics Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/lu2022-metal-chelating-peptides-review.md` | Research progress of metal chelating peptides | Subject-fit review, then canonical hero |
| `wiki/sources/lu2025-zhejiang-chrysanthemum-cd-phytoremediation.md` | Screening of Profitable Chrysanthemums for the Phytoremediation of Cadmium-Contaminated Soils | Subject-fit review, then canonical hero |
| `wiki/sources/lucchini2025-amazon-mercury-co-exposures.md` | Mercury contamination in the Amazon Basin: fish consumption, co-exposures, and health implications for indigenous and riverside communities | Subject-fit review, then canonical hero |
| `wiki/sources/luka2019-northern-cyprus-olive-oil-metals.md` | Investigation of trace metals in different varieties of olive oils from northern Cyprus and their variation in accumulation using ICP-MS and multivariate techniques | Subject-fit review, then canonical hero |
| `wiki/sources/lukin2020-broiler-drumstick-minerals.md` | Mineral composition of chicken meat semi-finished products from different producers | Subject-fit review, then canonical hero |
| `wiki/sources/luo2024-cd-ada-vbb-food-sensor.md` | ADA/VBB colorimetric method for cadmium detection in rice, milk, and vegetables with real sample measurements | Subject-fit review, then canonical hero |
| `wiki/sources/luo2024-peptides-heavy-metal-remediation.md` | Peptides Used for Heavy Metal Remediation: A Promising Approach | Subject-fit review, then canonical hero |
| `wiki/sources/lutfullah2014-peshawar-dried-fluid-milk-metals.md` | Comparative study of heavy metals in dried and fluid milk in Peshawar by atomic absorption spectrophotometry | Subject-fit review, then canonical hero |
| `wiki/sources/luvonga2020-organoarsenicals-marine-methods-review.md` | Analytical Methodologies for the Determination of Organoarsenicals in Edible Marine Species: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/luvonga2021-seafood-arsenic-speciation.md` | Determination of total arsenic and hydrophilic arsenic species in seafood | Subject-fit review, then canonical hero |
| `wiki/sources/lynch2014-inorganic-arsenic-food-review.md` | A comprehensive evaluation of inorganic arsenic in food and considerations for dietary intake analyses | Subject-fit review, then canonical hero |
| `wiki/sources/lysenko2021-organic-broiler-meat-heavy-metals.md` | Organic Meat Production of Broiler Chickens Hubbard Redbro Cross | Subject-fit review, then canonical hero |
| `wiki/sources/lyu2022-characterizing-the-exposome-of-food-contamination-and-china.md` | Characterizing the Exposome of Food Contamination and China Total Diet Study: Project for Improving Food Safety Risk Assessment in China | Subject-fit review, then canonical hero |
| `wiki/sources/ma2018-seaweed-arsenic-contents.md` | Total and inorganic arsenic contents in seaweeds: Absorption, accumulation, transformation and toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/ma2022-cerium-bacteria-chromium-sunflower.md` | Application of Cerium Dioxide Nanoparticles and Chromium-Resistant Bacteria Reduced Chromium Toxicity in Sunflower Plants | Subject-fit review, then canonical hero |
| `wiki/sources/ma2024-sanitary-napkins-metals.md` | Occurrence of heavy metals in sanitary napkins from seven countries: Implication for risk management of female hygiene products | Subject-fit review, then canonical hero |
| `wiki/sources/maccaferri2019-durum-wheat-genome-cadmium.md` | A high-density, SNP-based consensus map of tetraploid wheat as a bridge to integrate durum and bread wheat genomics and breeding | Subject-fit review, then canonical hero |
| `wiki/sources/macdonald2025-fss-uk-fishery-contaminants-review.md` | Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/macias2023-polymer-inclusion-membranes-seawater-metals.md` | On the Use of Polymer Inclusion Membranes for the Selective Separation of Pb(II), Cd(II), and Zn(II) from Seawater | Subject-fit review, then canonical hero |
| `wiki/sources/mackiewicz2025-eu-deodorants-elements.md` | Application of the ICP-OES and SEM-EDS Techniques for Elemental Analysis of Various Types of Cosmetic Products with Antiperspirant and Deodorant Properties Available on the EU Market | Subject-fit review, then canonical hero |
| `wiki/sources/madani-tonekaboni2019-milk-lead-cadmium-iran.md` | Monitoring and risk assessment of lead and cadmium in milks from East of Iran using Monte Carlo simulation method | Subject-fit review, then canonical hero |
| `wiki/sources/maduabuchi2007-nigeria-beverages-arsenic-chromium.md` | Arsenic and Chromium in Canned and Non-Canned Beverages in Nigeria: A Potential Public Health Concern | Subject-fit review, then canonical hero |
| `wiki/sources/magdas2012-romanian-apple-juice-isotopic-elemental.md` | Isotopic and Elemental Determination in Some Romanian Apple Fruit Juices | Subject-fit review, then canonical hero |

## Batch 136: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/mahaffey1975-fda-total-diet-study-heavy-metals.md` | Heavy Metal Exposure from Foods | Subject-fit review, then canonical hero |
| `wiki/sources/mahbub2018-poultry-feed-meat-eggs-metals.md` | Detection of heavy metals in poultry feed, meat and eggs | Subject-fit review, then canonical hero |
| `wiki/sources/mahdi2024-meat-cooked-utensils-metals.md` | Detection of some heavy metals in meat cooked in different utensils | Subject-fit review, then canonical hero |
| `wiki/sources/mahjoub2021-morocco-fish-metals.md` | Mercury, Lead, and Cadmium in the Muscles of Five Fish Species from the Mechraa-Hammadi Dam in Morocco and Health Risks for Their Consumers | Subject-fit review, then canonical hero |
| `wiki/sources/mahlungulu2023-heavy-metals-grapevine-soil.md` | Levels of Heavy Metals in Grapevine Soil and Leaf Samples in Response to Seasonal Change and Farming Practice in the Cape Winelands | Subject-fit review, then canonical hero |
| `wiki/sources/mahmood2025-dried-fruit-metals.md` | Estimation of some heavy metal concentrations in selected dried fruit samples available in local markets and assessment of their health risks | Subject-fit review, then canonical hero |
| `wiki/sources/mahmood2026-nanomaterial-water-remediation.md` | Application of Nanomaterials for the Removal of Toxic Elements from Water | Subject-fit review, then canonical hero |
| `wiki/sources/mahmud2011-crvi-chicken-pakistan.md` | Estimation of Chromium (VI) in various body parts of Local Chicken | Subject-fit review, then canonical hero |
| `wiki/sources/maier-benoit-2019-nickel-microbial-pathogenesis.md` | Role of Nickel in Microbial Pathogenesis | Subject-fit review, then canonical hero |
| `wiki/sources/maikanov2020-fish-products-shuchinsk-burabay-metals.md` | Quality and safety of fish products in the Shuchinsk-Burabay Resort Zone | Subject-fit review, then canonical hero |
| `wiki/sources/maikanov2021-meats-shuchinsk-burabay-metals.md` | Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan | Subject-fit review, then canonical hero |
| `wiki/sources/maine-pl-643-2008-toxic-chemicals-childrens-products.md` | An Act To Protect Children's Health and the Environment from Toxic Chemicals in Toys and Children's Products | Subject-fit review, then canonical hero |
| `wiki/sources/maisto2024-polyphenol-heavy-metal-bioaccessibility.md` | Effects of Food-Derived Antioxidant Compounds on In Vitro Heavy Metal Intestinal Bioaccessibility | Subject-fit review, then canonical hero |
| `wiki/sources/majid2020-broiler-meat-cumin-minerals.md` | Effect of dietary supplementing cumin (Cuminum cyminum L.) on meat traits of the broiler chicks | Subject-fit review, then canonical hero |
| `wiki/sources/majlesi2017-khersan-river-fish-iran.md` | The Concentration of Mercury, Cadmium and Lead in Muscular Tissue of Fishes in Khersan River | Subject-fit review, then canonical hero |
| `wiki/sources/majlesi2019-farmed-rainbow-trout-yasuj-iran.md` | Heavy metal content in farmed rainbow trout in relation to aquaculture area and feed pellets | Subject-fit review, then canonical hero |
| `wiki/sources/majumder2021-bangladesh-lead-pollution-review.md` | Critical Review of Lead Pollution in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/makarova2021-trifolium-phytoextraction-amendments.md` | The Improved Phytoextraction of Heavy Metals and the Growth of Trifolium repens L.: The Role of K2HEDP and Plant Growth Regulators Alone and in Combination | Subject-fit review, then canonical hero |
| `wiki/sources/makos2021-disposable-diaper-toxic-compounds-review.md` | Environmental problems and health risks with disposable baby diapers: monitoring of toxic compounds by application of analytical techniques and need of education | Subject-fit review, then canonical hero |
| `wiki/sources/malone2024-community-garden-soils-us.md` | Trace Metal Contamination in Community Garden Soils across the United States | Subject-fit review, then canonical hero |
| `wiki/sources/malyshevska2021-polymer-sludge-plant-uptake.md` | Toxicity Assessment of Waste from Mechanical Processing of Polymers by Biotesting | Subject-fit review, then canonical hero |
| `wiki/sources/mancuso2024-food-contamination-cvd.md` | Food contamination and cardiovascular disease: a narrative review | Subject-fit review, then canonical hero |
| `wiki/sources/mandrile2020-organotin-food-packaging-sers.md` | Migration study of organotin compounds from food packaging by surface-enhanced Raman scattering | Subject-fit review, then canonical hero |
| `wiki/sources/manfredi2025-nickel-meat-italy.md` | Dietary exposure assessment to nickel through the consumption of poultry, beef, and pork meat for different age groups in the Italian population | Subject-fit review, then canonical hero |
| `wiki/sources/mangal2022-matter-with-inorganic-mercury-and.md` | matter with inorganic mercury and | Subject-fit review, then canonical hero |

## Batch 137: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/mania2015-toxic-elements-infant-food-poland.md` | Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/mania2020-nickel-cereal-grains-poland.md` | Assessment of exposure to nickel intake with selected cereal grains and cereal-based products | Subject-fit review, then canonical hero |
| `wiki/sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland.md` | The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment | Subject-fit review, then canonical hero |
| `wiki/sources/manouchehri2021-honey-heavy-metals-review.md` | The Possible Effects of Heavy Metals in Honey as Toxic and Carcinogenic Substances on Human Health: A Systematic Review | Subject-fit review, then canonical hero |
| `wiki/sources/mansour2014-monitoring-health-risk-food-chapter.md` | Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food | Subject-fit review, then canonical hero |
| `wiki/sources/mansouri2023-smoking-trace-elements-human-milk.md` | The effects of active and passive smoking on selected trace element levels in human milk | Subject-fit review, then canonical hero |
| `wiki/sources/manuscript2018-remediation-of-manufactured-methamphetamine-in-clandestine.md` | Remediation of Manufactured Methamphetamine in Clandestine | Subject-fit review, then canonical hero |
| `wiki/sources/manuscript2019-gerald-geroldinger1-matthias-tonner1-judith-quirgst1-martin-walter2.md` | Gerald Geroldinger1, Matthias Tonner1, Judith Quirgst1, Martin Walter2, Sritama De | Subject-fit review, then canonical hero |
| `wiki/sources/manuscript2022-investigate-processes-causing-attenuation-of-a-hexavalent-chromium.md` | investigate processes causing attenuation of a hexavalent chromium (Cr(VI)) plume in sedimentary | Subject-fit review, then canonical hero |
| `wiki/sources/manuscript2026-rev-environ-contam-toxicol-author-manuscript-available-in.md` | Rev Environ Contam Toxicol. Author manuscript; available in PMC 2026 June 06. | Subject-fit review, then canonical hero |
| `wiki/sources/marathe2019-potential-of-sunflower-to-extract-heavy-metals.md` | Potential of Sunflower to Extract Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/marcelino2026-liver-trace-metals-netherlands-herbivores.md` | Monitoring trace minerals and heavy metals in liver of free-living large herbivores in the Netherlands | Subject-fit review, then canonical hero |
| `wiki/sources/marcelis2024-feminine-intimate-products-thesis.md` | Development of a generic safety assessment strategy for feminine intimate products | Subject-fit review, then canonical hero |
| `wiki/sources/marcelis2025-micp-leachables-metals.md` | Chemical characterization of menstrual and intimate care products: An extractables & leachables investigation | Subject-fit review, then canonical hero |
| `wiki/sources/margaoan2024-bee-products-heavy-metals.md` | Environmental pollution effect on honey bees and their derived products: a comprehensive analysis | Subject-fit review, then canonical hero |
| `wiki/sources/mariadi2017-juaro-fish-pineapple-extract-pb-hg.md` | Removal lead (Pb) and mercury (Hg) from juaro fish (Pangasius polyuranodon) using citric acid from pineapple extract (Ananas comosus) as chelating agent | Subject-fit review, then canonical hero |
| `wiki/sources/marincich2023-cadmium-chocolate-poland.md` | Threat or treat: Exposure assessment and risk characterisation of chemical contaminants in soft drinks and chocolate bars in various Polish population age groups | Subject-fit review, then canonical hero |
| `wiki/sources/marinescu2020-romanian-herbs-spices-metals.md` | Assessment of heavy metals content in some medicinal plants and spices commonly used in Romania | Subject-fit review, then canonical hero |
| `wiki/sources/marques2021-trace-elements-milks-plant-based-drinks.md` | Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks | Subject-fit review, then canonical hero |
| `wiki/sources/marques2025-phytochelatins-cadmium-mitigation.md` | Phytochelatins and Cadmium Mitigation: Harnessing Genetic Avenues for Plant Functional Manipulation | Subject-fit review, then canonical hero |
| `wiki/sources/marriott2023-lake-victoria-aquaculture-biogeochemistry.md` | Considerations for environmental biogeochemistry and food security for aquaculture around Lake Victoria, Kenya | Subject-fit review, then canonical hero |
| `wiki/sources/marroquin2024-menstrual-products-chemicals.md` | Chemicals in menstrual products: A systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/martin-leon2023-canary-leafy-vegetables-elements.md` | Evaluation of essential, toxic and potentially toxic elements in leafy vegetables grown in the Canary Islands | Subject-fit review, then canonical hero |
| `wiki/sources/martincarrasco2023-breast-milk-infant-formula-review.md` | Comparison between pollutants found in breast milk and infant formula in the last decade: A review | Subject-fit review, then canonical hero |
| `wiki/sources/martinez-morata-2023-metal-biomarkers-state-of-science.md` | A State-of-the-Science Review on Metal Biomarkers | Subject-fit review, then canonical hero |

## Batch 138: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/martinezmorata2022-drinking-water-arsenic-uranium-us.md` | Nationwide geospatial analysis of county racial and ethnic composition and public drinking water arsenic and uranium | Subject-fit review, then canonical hero |
| `wiki/sources/martinleon2021-edible-seaweeds-canary-metals-nitrates.md` | Human Exposure to Toxic Metals (Cd, Pb, Hg) and Nitrates (NO3−) from Seaweed Consumption | Subject-fit review, then canonical hero |
| `wiki/sources/maryland2025-cannabis-testing-technical-authority.md` | The Maryland Cannabis Administration's Technical Authority for Cannabis Testing, Revision 6.0 | Subject-fit review, then canonical hero |
| `wiki/sources/masite2022-mopane-trace-metals.md` | Trace Metals, Crude Protein, and TGA-FTIR Analysis of Evolved Gas Products in the Thermal Decomposition of Roasted Mopane Worms, Sweet Corn, and Peanuts | Subject-fit review, then canonical hero |
| `wiki/sources/maspalma2021-nigeria-wild-fruits-heavy-metals.md` | Studies on some heavy metal contents of Ximenia americana and Sclerocarya birrea wild fruit from North-Eastern Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/masri2025-toxicant-foods-california.md` | Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65 | Subject-fit review, then canonical hero |
| `wiki/sources/massarsky2025-heavy-metals-toothpaste-health-risk.md` | Health risk implications of heavy metals in toothpaste | Subject-fit review, then canonical hero |
| `wiki/sources/massoud2020-mercury-biosorption-milk-lacidophilus.md` | Mercury Biodecontamination from Milk by using L. acidophilus ATCC 4356 | Subject-fit review, then canonical hero |
| `wiki/sources/masu2016-pacifiers-sippy-cups-my.md` | Comparative Testing: Baby Pacifier and Sippy Cups | Subject-fit review, then canonical hero |
| `wiki/sources/matei2025-vegetable-oils-romania-gfaas.md` | Physicochemical Properties, Trace Elements, and Health Risk Assessment of Edible Vegetable Oils Consumed in Romania | Subject-fit review, then canonical hero |
| `wiki/sources/mathieu2015-wa-chcc-childrens-clothing.md` | Chemicals of High Concern to Children in Children's Clothing, Footwear, and Accessories | Subject-fit review, then canonical hero |
| `wiki/sources/matloob2016-iraq-spices-heavy-metals.md` | Using Stripping Voltammetry to Determine Heavy Metals in Cooking Spices Used in Iraq | Subject-fit review, then canonical hero |
| `wiki/sources/matsumoto-tanibuchi2019-seaweed-seafood-ias.md` | Determination of Inorganic Arsenic in Seaweed and Seafood by LC-ICP-MS: Method Validation | Subject-fit review, then canonical hero |
| `wiki/sources/mawari2022-heavy-metals-drinking-water-india.md` | Heavy metal contamination in drinking water and its relation to human health in industrial areas of Maharashtra, India | Subject-fit review, then canonical hero |
| `wiki/sources/mawari2022-heavy-metals-fruits-vegetables-india.md` | Heavy Metal Accumulation in Fruits and Vegetables and Human Health Risk Assessment: Findings From Maharashtra, India | Subject-fit review, then canonical hero |
| `wiki/sources/may2021-journal-of-animal-science-2021-vol-99-no.md` | Journal of Animal Science, 2021, Vol. 99, No. 6, 1–10 | Subject-fit review, then canonical hero |
| `wiki/sources/mazur2018-brown-marine-macroalgae-as-natural-cation-exchangers-for.md` | Brown marine macroalgae as natural cation exchangers for toxic metal removal from industrial wastewaters: A review | Subject-fit review, then canonical hero |
| `wiki/sources/mcguire2016-fish-practical-considerations-for-improved.md` | fish: practical considerations for improved | Subject-fit review, then canonical hero |
| `wiki/sources/mcsheehy2000-edible-algae-arsenic-speciation.md` | Speciation of arsenic in edible algae by bi-dimensional size-exclusion anion exchange HPLC with dual ICP-MS and electrospray MS/MS detection | Subject-fit review, then canonical hero |
| `wiki/sources/mcsorley2020-seychelles-mehg-immunity.md` | Methylmercury and long chain polyunsaturated fatty acids are associated with immune dysregulation in young adults from the Seychelles child development study | Subject-fit review, then canonical hero |
| `wiki/sources/medicine2018-of-mercury-and-selenium.md` | OF MERCURY AND SELENIUM | Subject-fit review, then canonical hero |
| `wiki/sources/medley2023-childrens-makeup-body-products-us-usage.md` | Usage of Children's Makeup and Body Products in the United States and Implications for Childhood Environmental Exposures | Subject-fit review, then canonical hero |
| `wiki/sources/mehanathan2023-magnesium-oxide-arsenate-remediation.md` | Magnesium Oxide Nanoparticles for the Adsorption of Pentavalent Arsenic from Water: Effects of Calcination | Subject-fit review, then canonical hero |
| `wiki/sources/meharg2008-rice-arsenic-literature-review.md` | Levels of arsenic in rice - literature review | Subject-fit review, then canonical hero |
| `wiki/sources/meharg2009-geographic-variation-arsenic-white-rice.md` | Geographical Variation in Total and Inorganic Arsenic Content of Polished (White) Rice | Subject-fit review, then canonical hero |

## Batch 139: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/meharg2024-exposure-and-health-2024-16-715-726.md` | Exposure and Health (2024) 16:715–726 | Subject-fit review, then canonical hero |
| `wiki/sources/mehdar2025-antimony-pet-leaching.md` | Investigating antimony leaching from polyethylene terephthalate (PET) bottles: characterization with SEM-EDX and ICP-OES | Subject-fit review, then canonical hero |
| `wiki/sources/mehouel2019-sardine-swordfish-algeria-mercury.md` | Risk assessment of mercury and methyl mercury intake via sardine and swordfish consumption in Algeria | Subject-fit review, then canonical hero |
| `wiki/sources/mehouel2021-algeria-seafood-metals-review.md` | Review of the toxic trace elements arsenic, cadmium, lead and mercury in seafood species from Algeria and contiguous waters in the Southwestern Mediterranean Sea | Subject-fit review, then canonical hero |
| `wiki/sources/mehri2024-vegetable-oils-iran-hamadan-ptes.md` | A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/mekonnen2024-ethiopia-fruit-metals.md` | Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/meli2024-chemical-characterization-baby-food-italy.md` | Chemical characterization of baby food consumed in Italy | Subject-fit review, then canonical hero |
| `wiki/sources/meligy2024-camel-meat-toxic-elements.md` | Concentrations of toxic and essential elements in camel (Camelus dromedarius) tissues: muscle, offal, hair, and blood from Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/melnyk2021-mercury-anadromous-fish-penobscot.md` | Risks from mercury in anadromous fish collected from Penobscot River, Maine | Subject-fit review, then canonical hero |
| `wiki/sources/mena2024-body-composition-blood-pressure-and-vascular-function-lipid.md` | body composition, blood pressure and vascular function, lipid profile, glucose homeostasis, biomarkers of inflammation and oxidative stress, | Subject-fit review, then canonical hero |
| `wiki/sources/meng2023-electrochemical-sensors-food-heavy-metals.md` | The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors | Subject-fit review, then canonical hero |
| `wiki/sources/mercan-yucel2022-van-spices-heavy-metals.md` | Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/mercan2024-istanbul-toy-makeup-14-elements.md` | Experimental study for inorganic and organic profiling of toy makeup products: Estimating the potential threat to child health | Subject-fit review, then canonical hero |
| `wiki/sources/mercosur2011-gmc-res-12-inorganic-contaminants.md` | MERCOSUR/GMC/RES. No. 12/11: Reglamento Tecnico MERCOSUR sobre Limites Maximos de Contaminantes Inorganicos en Alimentos | Subject-fit review, then canonical hero |
| `wiki/sources/mercosur2025-sgt3-project-07-23-metals.md` | MERCOSUR SGT No. 3 Meeting Record 03/25: Project Resolution 07/23 on metallic and metalloid contaminants | Subject-fit review, then canonical hero |
| `wiki/sources/mesinger2021-red-deer-heavy-metals.md` | Risk Assessment of Wild Game Meat Intake in the Context of the Prospective Development of the Venison Market in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/meter2019-cadmium-cacao-lac-review.md` | Cadmium in Cacao from Latin America and the Caribbean: A Review of Research and Potential Mitigation Solutions | Subject-fit review, then canonical hero |
| `wiki/sources/meyer2018-hydrolysed-rice-formula-arsenic.md` | Low inorganic arsenic in hydrolysed-rice formula used for cow's milk protein allergy | Subject-fit review, then canonical hero |
| `wiki/sources/mfds2012-food-code-heavy-metals.md` | Article 2. Common Standards and Specifications for General Foods | Subject-fit review, then canonical hero |
| `wiki/sources/mfds2025-cosmetics-safety-standards.md` | Korea MFDS Notice No. 2025-63 Cosmetics Safety Standards | Subject-fit review, then canonical hero |
| `wiki/sources/mfds2026-23-hygiene-products-diapers.md` | MFDS Notice 2026-23, standards and specifications for hygiene products | Subject-fit review, then canonical hero |
| `wiki/sources/mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals.md` | Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/mhlw2007-milk-products-standards.md` | Ministerial Ordinance on Milk and Milk products Concerning Compositional Standards, etc. | Subject-fit review, then canonical hero |
| `wiki/sources/mhlw2008-foodstuffs-drink-beverage-tin.md` | Specifications and Standards for Foodstuffs, Implements, Containers and Packaging, Toys, Detergents 2008 | Subject-fit review, then canonical hero |
| `wiki/sources/mielech2021-contamination-food-infants-toddlers.md` | Assessment of the Risk of Contamination of Food for Infants and Toddlers | Subject-fit review, then canonical hero |

## Batch 140: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/milani2023-trace-elements-soy-based-beverages.md` | Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility | Subject-fit review, then canonical hero |
| `wiki/sources/military2024-the-use-of-a-trench-candle-as-an.md` | The use of a trench candle as an alternative heating and light source | Subject-fit review, then canonical hero |
| `wiki/sources/miller2021-pregnancy-reduces-infants-disliking-of-bitter-vegetables-at.md` | pregnancy reduces infants’ disliking of bitter vegetables at weaning | Subject-fit review, then canonical hero |
| `wiki/sources/minamata-convention-2013.md` | Minamata Convention on Mercury — Text and Annexes (2024 Edition) | Subject-fit review, then canonical hero |
| `wiki/sources/minelli2010-oral-hyposensitization-nickel-th1-th2-cytokines.md` | Oral Hyposensitization to Nickel Induces Clinical Improvement and a Decrease in Th1 and Th2 Cytokines in Patients with Systemic Nickel Allergy Syndrome | Subject-fit review, then canonical hero |
| `wiki/sources/minnesota2010-ch347-cadmium-childrens-jewelry.md` | Minnesota Laws 2010, Chapter 347, Article 6, Section 27, Cadmium in Children's Jewelry | Subject-fit review, then canonical hero |
| `wiki/sources/mirmahdi2021-dairy-decontamination-probiotics-review.md` | Biodecontamination of milk and dairy products by probiotics: Boon for bane | Subject-fit review, then canonical hero |
| `wiki/sources/mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland.md` | Cadmium and Lead in Wild Edible Mushrooms from the Eastern Region of Poland's 'Green Lungs' | Subject-fit review, then canonical hero |
| `wiki/sources/miroslawski2017-polish-medicinal-plants-infusions.md` | Determination of the Cadmium, Chromium, Nickel, and Lead Ions Relays in Selected Polish Medicinal Plants and Their Infusion | Subject-fit review, then canonical hero |
| `wiki/sources/mishra2017-rice-arsenic-thiol-complexation.md` | Accumulation and transformation of inorganic and organic arsenic in rice and role of thiol-complexation to restrict their translocation to shoot | Subject-fit review, then canonical hero |
| `wiki/sources/mititelu2019-romania-wild-edible-mushrooms-metals.md` | The Influence of Heavy Metals Contamination in Soil on the Composition of Some Wild Edible Mushrooms | Subject-fit review, then canonical hero |
| `wiki/sources/mititelu2025-heavy-metal-food-contamination-review.md` | Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety | Subject-fit review, then canonical hero |
| `wiki/sources/mleczek2016-mushroom-arsenic-substrate.md` | Importance of low substrate arsenic content in mushroom cultivation and safety of final food product | Subject-fit review, then canonical hero |
| `wiki/sources/mn2025-325e-3892-lead-cadmium-consumer-products.md` | Minnesota Statutes 2025, section 325E.3892: lead and cadmium in consumer products | Subject-fit review, then canonical hero |
| `wiki/sources/modddaresi2022-cosmetics-heavy-metal-limits.md` | Heavy metal content in cosmetic products: a comparative review on permissible levels in global regulatory requirements and available analytical tests | Subject-fit review, then canonical hero |
| `wiki/sources/mohamed2023-heavy-metals-beef-egypt.md` | Detection and health risk assessment of toxic heavy metals in chilled and frozen meat collected from Sharkia province in Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/mohammadi2024-champa-rice-southwest-iran-carcinogenic-risk.md` | Evaluation of carcinogenic risk of heavy metals due to consumption of rice in Southwestern Iran | Subject-fit review, then canonical hero |
| `wiki/sources/mohammadi2025-iran-carrot-cucumber-metals.md` | Health risk assessment of heavy metals in root and fruit vegetables in Iran using Monte Carlo simulation | Subject-fit review, then canonical hero |
| `wiki/sources/mohammadian-hafshejani2024-cadmium-prostate-cancer-meta.md` | Investigating the Relationship between Cadmium Exposure and the Risk of Prostate Cancer: A Systematic Review and Dose-Response Meta-Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/mohammadpour2022-ptes-drinking-water-shiraz.md` | The concentration of potentially toxic elements (PTEs) in drinking water from Shiraz, Iran: a health risk assessment of samples | Subject-fit review, then canonical hero |
| `wiki/sources/mohammed2019-zno-nanoparticle-sunscreen-repeated-application.md` | Support for the Safe Use of Zinc Oxide Nanoparticle Sunscreens: Lack of Skin Penetration or Cellular Toxicity after Repeated Application in Volunteers | Subject-fit review, then canonical hero |
| `wiki/sources/mohammed2020-tt-toys-baby-items.md` | Heavy metals in children's toys and baby items commonly sold in Trinidad and Tobago | Subject-fit review, then canonical hero |
| `wiki/sources/mohammed2021-salah-al-din-noodles-metals.md` | Evaluation of mycotoxins and heavy metals pollution in some types of noodles in local markets | Subject-fit review, then canonical hero |
| `wiki/sources/mohasin2023-determination-of-some-heavy-metals-and-potassium-bromate.md` | Determination of some heavy metals and potassium bromate | Subject-fit review, then canonical hero |
| `wiki/sources/mohiuddin2015-bangladesh-edible-mushrooms-metals.md` | Assessment of nutritional composition and heavy metal content in some edible mushroom varieties collected from different areas of Bangladesh | Subject-fit review, then canonical hero |

## Batch 141: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/mohod2015-spinach-tomato-metals.md` | A review on the concentration of the heavy metals in vegetable samples like spinach and tomato grown near the area of Amba Nalla of Amravati City | Subject-fit review, then canonical hero |
| `wiki/sources/molaeeaghaee2014-antimony-pet-storage.md` | Effects of storage time and temperature on the antimony and some trace element release from polyethylene terephthalate (PET) into the bottled drinking water | Subject-fit review, then canonical hero |
| `wiki/sources/molina2023-mercury-buenaventura-bay.md` | Effect of environmental variables on mercury accumulation in sediments of an anthropogenically impacted tropical estuary (Buenaventura Bay, Colombian Pacific) | Subject-fit review, then canonical hero |
| `wiki/sources/molla2025-cdw-landfill-leachate-metals.md` | The Effects of Construction and Demolition Waste (C&DW) Fine Residues on Landfill Environments: A Column Leaching Experiment | Subject-fit review, then canonical hero |
| `wiki/sources/monteiro-riviere2011-sunscreen-nanoparticle-skin.md` | Safety Evaluation of Sunscreen Formulations Containing Titanium Dioxide and Zinc Oxide Nanoparticles in UVB Sunburned Skin: An In Vitro and In Vivo Study | Subject-fit review, then canonical hero |
| `wiki/sources/montejo-custodio2026-landfill-soil-water-metals.md` | Geochemical-hydrological assessment of municipal solid waste disposal site to identify environmental risk areas | Subject-fit review, then canonical hero |
| `wiki/sources/moon2011-baby-powder-inhalation-risk-assessment.md` | Risk Assessment of Baby Powder Exposure through Inhalation | Subject-fit review, then canonical hero |
| `wiki/sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea.md` | The Association Between Maternal Dietary Intake and the Risk of Heavy Metals in Human Breast Milk in Korea | Subject-fit review, then canonical hero |
| `wiki/sources/moradi2015-iran-isfahan-soil-crops-metals.md` | A Human Health Risk Assessment of Soil and Crops Contaminated by Heavy Metals in Industrial Regions, Central Iran | Subject-fit review, then canonical hero |
| `wiki/sources/moreda-pineiro2020-rice-arsenic-speciation.md` | Ionic imprinted polymer - vortex-assisted dispersive micro-solid phase extraction for inorganic arsenic speciation in rice by HPLC-ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/morgan2011-j-med-toxicol-2011-7-295-305.md` | J. Med. Toxicol. (2011) 7:295–305 | Subject-fit review, then canonical hero |
| `wiki/sources/moriceau2025-cosmetics-icpms-iso21392.md` | Measurement of traces of heavy metals in cosmetic raw materials and finished products according to ISO/DIS 21392:2021 using triple quadrupole ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/morita1990-marine-macroalgae-arsenic-forms.md` | Chemical form of arsenic in marine macroalgae | Subject-fit review, then canonical hero |
| `wiki/sources/morocco2022-contaminant-maximum-levels-food.md` | Arrêté conjoint du ministre de l’agriculture, de la pêche maritime, du développement rural et des eaux et forêts et du ministre de la santé et de la protection sociale n° 2410-22 du 17 safar 1444 (14 septembre 2022) modifiant et complétant l’arrêté conjoint n° 1643-16 fixant les limites maximales autorisées des contaminants dans les produits primaires et les produits alimentaires | Subject-fit review, then canonical hero |
| `wiki/sources/morshdy2023-canned-meat-chicken-metals.md` | Risks assessment of toxic metals in canned meat and chicken | Subject-fit review, then canonical hero |
| `wiki/sources/morshdy2023-heavy-metals-salted-fish-egypt.md` | Heavy metal contents in salted fish retailed in Egypt: Dietary intakes and health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/morshed2024-heavy-metals-poultry-organs-bangladesh.md` | Heavy Metals Accumulation in Different Organs of Poultry and Hypothetical Risk Analysis: Evidence from Experimental Feeding with Assorted Metal Feed | Subject-fit review, then canonical hero |
| `wiki/sources/mortz2002-adolescent-contact-allergy-odense.md` | Contact Allergy and Allergic Contact Dermatitis in Adolescents: Prevalence Measures and Associations. The Odense Adolescence Cohort Study on Atopic Diseases and Dermatitis (TOACS) | Subject-fit review, then canonical hero |
| `wiki/sources/mortz2002-nickel-adolescents-toacs.md` | Nickel sensitization in adolescents and association with ear piercing, use of dental braces and hand eczema | Subject-fit review, then canonical hero |
| `wiki/sources/mostafa2022-chitosan-copolymer-mercury-removal.md` | Fabrication of Ploy (Meth Acrylamide)-Chitosan Nanoparticles Graft Copolymer Using Potassium Chromate/Mandelic Acid Redox Pair for Waste Water Treatment | Subject-fit review, then canonical hero |
| `wiki/sources/mostofa2015-rice-h2s-cd-tolerance.md` | Hydrogen sulfide modulates cadmium-induced physiological and biochemical responses to alleviate cadmium toxicity in rice | Subject-fit review, then canonical hero |
| `wiki/sources/mosusu2023-edible-seaweeds-japan-metals.md` | Heavy metal contents in some edible seaweeds (Wakame, Kombu) in Japan | Subject-fit review, then canonical hero |
| `wiki/sources/motta-romero2021-wheat-cadmium-fungicide.md` | Effects of foliar fungicide on yield, micronutrients, and cadmium in grains from historical and modern hard winter wheat genotypes | Subject-fit review, then canonical hero |
| `wiki/sources/motta2022-marine-hg-isotopes.md` | Mercury isotopic evidence for the importance of particles as a source of mercury to marine organisms | Subject-fit review, then canonical hero |
| `wiki/sources/moura2022-hg-jaguaribe-estuary.md` | Mercury in the Jaguaribe River Estuary, Northeast Brazil: Sources, Distribution, and Bioavailability | Subject-fit review, then canonical hero |

## Batch 142: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/moussa2022-clays-phosphogypsum-tunisia.md` | Natural Clays as Adsorbents for the Removal of Heavy Metals from Phosphogypsum | Subject-fit review, then canonical hero |
| `wiki/sources/moussa2024-spices-herbs-lebanon.md` | Impact of source, packaging and presence of food safety management system on heavy metals levels in spices and herbs | Subject-fit review, then canonical hero |
| `wiki/sources/mozdzer2023-sludge-ash-granulates-crop-metals.md` | The Effect of Sludge-Ash Granulates on the Content and Uptake of Heavy Metals by Winter Rape Seeds and Triticale | Subject-fit review, then canonical hero |
| `wiki/sources/mu2023-seaweed-polysaccharide-chromium-gut-microbiome.md` | Seaweed polysaccharide relieves hexavalent chromium-induced gut microbial homeostasis | Subject-fit review, then canonical hero |
| `wiki/sources/muehe2019-rice-climate-arsenic.md` | Rice production threatened by coupled stresses of climate and soil arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/muhammad2021-lactobacillus-lead-bioremediation.md` | Assessment of In Vitro and In Vivo Bioremediation Potentials of Orally Supplemented Free and Microencapsulated Lactobacillus acidophilus KLDS Strains to Mitigate the Chronic Lead Toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/muimba-kankolongo2022-zambia-drc-trace-metals-health.md` | Impacts of Trace Metals Pollution of Water, Food Crops, and Ambient Air on Population Health in Zambia and the DR Congo | Subject-fit review, then canonical hero |
| `wiki/sources/mukhi2022-heavy-metals-food-packaging.md` | Assessment of heavy metals in food and drug packaging materials | Subject-fit review, then canonical hero |
| `wiki/sources/mukhi2023-packaging-heavy-metals-gut.md` | Evaluation of Minimum Inhibitory Concentration of Heavy Metals Contained in Packaging Material Digest on Prominent Gut Microbiota | Subject-fit review, then canonical hero |
| `wiki/sources/mumtaz2025-infant-nutrition-trace-metals.md` | Occurrence and Risk Evaluation of Trace Metals in Infant Nutrition Sources in Rural and Urban Multan, Pakistan | Subject-fit review, then canonical hero |
| `wiki/sources/munarso2024-vanilla-indonesia-quality.md` | From bean to market: exploring the chemical and production dynamics of high-quality Indonesian vanilla | Subject-fit review, then canonical hero |
| `wiki/sources/munilla-garcia2023-lead-kombucha-ceramics.md` | Family outbreak of lead poisoning associated with the consumption of kombucha manufactured and marketed in ceramic containers | Subject-fit review, then canonical hero |
| `wiki/sources/munir2022-heavy-metals-natural-foods-review.md` | Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/muniz2018-tomato-sauce-packaging-metals.md` | Evaluation of metals in tomato sauces stored in different types of packaging | Subject-fit review, then canonical hero |
| `wiki/sources/munoz1999-seafood-inorganic-arsenic.md` | Rapid and quantitative release, separation and determination of inorganic arsenic [As(III)+As(V)] in seafood products by microwave-assisted distillation and hydride generation atomic absorption spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/muntean2024-aquaculture-protein-flours-elements.md` | Evaluation of Alternative Sources of Proteins and Other Nutrients with Potential Applications in Fish Nutrition | Subject-fit review, then canonical hero |
| `wiki/sources/murtaza2025-biochar-selenium-barley-lead.md` | Combine effects of Broussonetia papyrifera-derived biochar and selenium nanoparticles for lead-polluted saline soils remediation during barley cultivation | Subject-fit review, then canonical hero |
| `wiki/sources/murthy2024-international-journal-of-scientific-engineering-and-research-ijser.md` | International Journal of Scientific Engineering and Research (IJSER) | Subject-fit review, then canonical hero |
| `wiki/sources/myatsoe2023-myanmar-rice-metals.md` | Arsenic and heavy metal contents in white rice samples from rainfed paddy fields in Yangon division, Myanmar—Natural background levels? | Subject-fit review, then canonical hero |
| `wiki/sources/n2025-development-of-a-reference-material-for-mercury-in.md` | Development of a reference material for mercury in fish: certified | Subject-fit review, then canonical hero |
| `wiki/sources/naccari2025-honey-toxic-metals-microelements.md` | Study of Toxic Metals and Microelements in Honey as a Tool to Support Beekeeping Production and Consumer Safety | Subject-fit review, then canonical hero |
| `wiki/sources/nacci2025-disposable-wet-wipes.md` | Disposable wet-wipes as potential source of pollution: Multi-analytical investigation of the composition of fibres and additives | Subject-fit review, then canonical hero |
| `wiki/sources/nachman2013-chicken-arsenic-research-brief.md` | Arsenic in Chicken Meat | Subject-fit review, then canonical hero |
| `wiki/sources/naess2020-norwegian-seafood-metals.md` | Mercury, lead, arsenic, and cadmium in Norwegian seafood products and consumer exposure | Subject-fit review, then canonical hero |
| `wiki/sources/nagel1989-cadmium-resistant-chlamydomonas.md` | In Vitro Evolution and Preliminary Characterization of a Cadmium-Resistant Population of Chlamydomonas reinhardtii | Subject-fit review, then canonical hero |

## Batch 143: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/najem2024-metals-common-carp-iraq.md` | Bioaccumulation of lead, arsenic, and mercury in vital organs of common carp (Cyprinus carpio L.): Assessment of pathological effects and possible hazards associated with human consumption | Subject-fit review, then canonical hero |
| `wiki/sources/napier2024-wanabana-lead-apple-cinnamon.md` | Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024 | Subject-fit review, then canonical hero |
| `wiki/sources/narayana-murthy2024-premna-village-elements.md` | Analysis of a Wild Leafy Vegetable (Premna latifolia Roxb.) Samples for Essential Trace Elements using ICP - MS Technique | Subject-fit review, then canonical hero |
| `wiki/sources/narukawa2020-hijiki-crm-arsenosugars-interlab.md` | A New Candidate Reference Material for Inorganic Arsenic and Arsenosugars in Hijiki Seaweed: First Results from an Inter-laboratory Study | Subject-fit review, then canonical hero |
| `wiki/sources/naseem2026-seasonal-heavy-metals-water-fish.md` | Seasonal Fluctuation of Heavy Metals in Water & Fish Tissues | Subject-fit review, then canonical hero |
| `wiki/sources/naser2018-leafy-vegetables-bangladesh-metals.md` | Heavy metal accumulation in leafy vegetables grown in industrial areas under varying levels of pollution | Subject-fit review, then canonical hero |
| `wiki/sources/naseri2015-iran-shiraz-rice-metals.md` | Concentration of Some Heavy Metals in Rice Types Available in Shiraz Market and Human Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/nasirpour2026-apple-wastewater-metals.md` | The changes of heavy metals and some necessary elements in leaf, fruit and soil on apple cultivar golden delicious by applying urban treated wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/naspolini2024-human-milk-sao-paulo.md` | Lead contamination in human milk affects infants' language trajectory: results from a prospective cohort study | Subject-fit review, then canonical hero |
| `wiki/sources/nassar2025-spectrophotometric-cadmium-method.md` | Spectrophotometric Method for Cadmium(II) Determination: Validation and Application | Subject-fit review, then canonical hero |
| `wiki/sources/navaretnam-2025-rice-as-speciation.md` | Arsenic Speciation Using HPLC-ICP-MS in White and Brown Rice and Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/nawaz2019-wastewater-manganese-spinach.md` | Wastewater induced manganese toxicity affects growth and bioavailability in spinach (Spinacia oleracea) | Subject-fit review, then canonical hero |
| `wiki/sources/nawrot2026-early-life-mercury-exposure-and.md` | Early-life mercury exposure and | Subject-fit review, then canonical hero |
| `wiki/sources/naz2025-trace-elements-punjnad-fish.md` | Trace elements in fish species from the Punjnad headworks: bioaccumulation and human health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/nazari2023-heavy-metals-seed-crops-oil-products-review.md` | Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review | Subject-fit review, then canonical hero |
| `wiki/sources/nc2012-wheat-flour-nc493-metals.md` | NC 877:2012 Harina de trigo - Especificaciones | Subject-fit review, then canonical hero |
| `wiki/sources/nci-nickel-compounds-factsheet-2024.md` | Nickel Compounds — Cancer-Causing Substances | Subject-fit review, then canonical hero |
| `wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md` | Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures | Subject-fit review, then canonical hero |
| `wiki/sources/nejabat2017-iran-golestan-wheat-metals.md` | Health risk assessment of heavy metals via dietary intake of wheat in Golestan Province, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/nelson2022-cannabis-heavy-metals-method.md` | Determination of Heavy Metals in a Variety of Cannabis and Cannabis-Derived Products, First Action 2021.03 | Subject-fit review, then canonical hero |
| `wiki/sources/nelson2023-wa-childrens-jewelry-followup.md` | Cadmium and Other Metals in Children's Jewelry 2018, Follow-up Study | Subject-fit review, then canonical hero |
| `wiki/sources/nencioni2026-zeolite-cream-metal-adsorption.md` | In Vitro Analysis of Heavy Metal Adsorption by Zeolite Skin Care Formulations Using a Quality by Design Approach | Subject-fit review, then canonical hero |
| `wiki/sources/nepovimova2025-archives-of-toxicology-2025-99-153-209.md` | Archives of Toxicology (2025) 99:153–209 | Subject-fit review, then canonical hero |
| `wiki/sources/nepper-davidsen2023-kelp-biomass-composition-nz.md` | High spatial and temporal variation in biomass composition of the novel aquaculture target Ecklonia radiata | Subject-fit review, then canonical hero |
| `wiki/sources/neuwirth2022-baby-cereals-lead-arsenic.md` | Cereal and Juice, Lead and Arsenic, Our Children at Risk: A Call for the FDA to Re-Evaluate the Allowable Limits of Lead and Arsenic That Children May Ingest | Subject-fit review, then canonical hero |

## Batch 144: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/nevada2020-cannabis-heavy-metal-action-levels.md` | Regulations of the Nevada Cannabis Compliance Board | Subject-fit review, then canonical hero |
| `wiki/sources/newton1994-antimony-trioxide-inhalation-rat.md` | Subchronic and Chronic Inhalation Toxicity of Antimony Trioxide in the Rat | Subject-fit review, then canonical hero |
| `wiki/sources/newzealand2026-cosmetic-products-group-standard.md` | Cosmetic Products Group Standard 2020 HSR002552, consolidated 1 January 2026 | Subject-fit review, then canonical hero |
| `wiki/sources/ngodhe2018-kale-soil-sludge-kisumu-heavy-metals.md` | Effects of Sludge on the Concentration of Heavy Metals in Soil and Plants in Obunga Slum, Kisumu County, Kenya | Subject-fit review, then canonical hero |
| `wiki/sources/ngok2025-zno-iron-oxide-gold-arsenic-v-sensor.md` | ZnO Nanorods/α-Fe2O3/Au Nanoparticles Electrochemical Sensor for As(V) in Drinking Water | Subject-fit review, then canonical hero |
| `wiki/sources/nguyen2016-underwear-trace-elements.md` | Exposure of women to trace elements through the skin by direct contact with underwear clothing | Subject-fit review, then canonical hero |
| `wiki/sources/nguyen2026-carbon-quantum-dots-mercury-fluorescence-rice-straw.md` | N,S-Doped Carbon Quantum Dots from Rice Straw for Fluorescence Detection of Mercury(II) | Subject-fit review, then canonical hero |
| `wiki/sources/nhmrc2025-australian-drinking-water-guidelines.md` | Australian Drinking Water Guidelines 6 2011 Version 4.0 Updated June 2025 | Subject-fit review, then canonical hero |
| `wiki/sources/nic-corcrain2025-menstrual-products-metal-leaching.md` | Investigating links between heavy metals in menstrual hygiene products and reproductive hormonal health | Subject-fit review, then canonical hero |
| `wiki/sources/nica2012-banat-soil-nettle-snail-metals.md` | Bioaccumulative and conchological assessment of heavy metal transfer in a soil-plant-snail food chain | Subject-fit review, then canonical hero |
| `wiki/sources/nieder2022-pte-environment-health-review.md` | Potentially toxic elements in the environment and human health: An integrated review | Subject-fit review, then canonical hero |
| `wiki/sources/nielsen1975-nz-molluscs-heavy-metals.md` | Heavy metal levels in New Zealand molluscs | Subject-fit review, then canonical hero |
| `wiki/sources/nih2022-4-clostridium-difficile-and-other-anaerobes-and-in.md` | 4 Clostridium difficile and other anaerobes, and in Methylmercury Biosynthesis. | Subject-fit review, then canonical hero |
| `wiki/sources/nilsson2006-sex-toys-chemicals.md` | Survey and health assesment of chemicals substances in sex toys | Subject-fit review, then canonical hero |
| `wiki/sources/nischwitz2006-commercial-kelp-arsenic-speciation.md` | Improved Arsenic Speciation Analysis for Extracts of Commercially Available Edible Marine Algae Using HPLC-ES-MS/MS | Subject-fit review, then canonical hero |
| `wiki/sources/nitrogen2019-on-rc-silage-this-study-compared-two-rc.md` | on RC silage. This study compared two RC silages which when ensiled had contrasting PPO activities (RC+ and RC−) against a control of | Subject-fit review, then canonical hero |
| `wiki/sources/njinga2022-nigeria-herbal-cd-cr.md` | Major chemical carcinogens and health exposure risks in some therapeutic herbal plants in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/nkosi2024-durban-cosmetic-clays.md` | Physical, chemical and biological characteristics of clays from Durban (South Africa) for applications in cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/nkrumah2022-farming-battery-metals.md` | Farming for battery metals | Subject-fit review, then canonical hero |
| `wiki/sources/nkwocha2021-cashew-nuts-metals.md` | Chemical composition of raw cashew (Anacardium occidentale) nuts sourced from Enugu State, South Eastern Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/nmpa2015-cosmetics-safety-technical-standards.md` | 化妆品安全技术规范 (2015年版) | Subject-fit review, then canonical hero |
| `wiki/sources/nnorom2011-nigeria-facial-talcum-trace-metals.md` | Trace metals in cosmetic facial talcum powders marketed in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/noh2023-arsenic-rice-snacks-korea.md` | Monitoring arsenic species concentration in rice-based processed products distributed in South Korean markets and related risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/noor2023-merapi-robusta-coffee-metals.md` | Quality Characteristics of Merapi Robusta Coffee Products from the Traditional, Semi Modern, and Modern Process | Subject-fit review, then canonical hero |
| `wiki/sources/nordberg2015-cadmium-chapter.md` | Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals | Subject-fit review, then canonical hero |

## Batch 145: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/norin1985-swedish-fish-arsenic-speciation.md` | Concentration of inorganic and total arsenic in fish from industrially polluted water | Subject-fit review, then canonical hero |
| `wiki/sources/noritomi2026-the-performance-of-enzymes-can-be-enhanced-by.md` | the performance of enzymes can be enhanced by selecting an appropriate carrier. | Subject-fit review, then canonical hero |
| `wiki/sources/normatov2025-syrdarya-river-heavy-metals.md` | Heavy Metal Migration and Sedimentation in Syrdarya River (Tajikistan) and Possibility Accumulation in Kayrakkum Reservoir | Subject-fit review, then canonical hero |
| `wiki/sources/norouzirad2018-iran-khuzestan-oilfield-milk-pb-cd.md` | Lead and cadmium levels in raw bovine milk and dietary risk assessment in areas near petroleum extraction industries | Subject-fit review, then canonical hero |
| `wiki/sources/north2024-declines-in-anthropogenic-mercury.md` | Declines in anthropogenic mercury | Subject-fit review, then canonical hero |
| `wiki/sources/northwest2024-wildfires-influence-mercury-transport-methylation-and.md` | Wildfires Influence Mercury Transport, Methylation, and | Subject-fit review, then canonical hero |
| `wiki/sources/nour2025-djiboutian-seaweeds-metals.md` | Nutritional and heavy metal composition of seaweeds from the coast of Djibouti | Subject-fit review, then canonical hero |
| `wiki/sources/nourmoradi2013-iran-isfahan-cosmetics-pb-cd.md` | Assessment of Lead and Cadmium Levels in Frequently Used Cosmetic Products in Iran | Subject-fit review, then canonical hero |
| `wiki/sources/novakov2021-serbia-mussels-metals-pahs.md` | Heavy metals and PAHs in mussels on the Serbian market and consumer exposure | Subject-fit review, then canonical hero |
| `wiki/sources/noval2024-of-hexavalent-chromium.md` | of hexavalent chromium | Subject-fit review, then canonical hero |
| `wiki/sources/npra2022-cosmetics-heavy-metal-limits.md` | Annex I, Part 14: Heavy Metal and Microbiological Test Limit for Cosmetic Product | Subject-fit review, then canonical hero |
| `wiki/sources/ntigoroku2025-delta-state-edible-oils-metals.md` | Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ntp-15th-roc-nickel-2021.md` | Nickel Compounds and Metallic Nickel — 15th Report on Carcinogens | Subject-fit review, then canonical hero |
| `wiki/sources/ntp-15th-roc-preparation-process.md` | NTP Process for Preparation of the Report on Carcinogens | Subject-fit review, then canonical hero |
| `wiki/sources/ntp2017-tr590-antimony-trioxide.md` | NTP Technical Report on the Toxicology and Carcinogenesis Studies of Antimony Trioxide (CASRN 1309-64-4) in Wistar Han [Crl:WI(Han)] Rats and B6C3F1/N Mice (Inhalation Studies) | Subject-fit review, then canonical hero |
| `wiki/sources/ntp2018-roc-monograph-antimony-trioxide.md` | Report on Carcinogens Monograph on Antimony Trioxide | Subject-fit review, then canonical hero |
| `wiki/sources/nurhidayanti2024-coffee-chitosan-cadmium-adsorption.md` | Adsorption, Kinetic and Thermodynamic Studies for the Adsorption of Cadmium onto Combination of Chitosan and Coffee Ground Activated Carbon | Subject-fit review, then canonical hero |
| `wiki/sources/nwankwoala2022-port-harcourt-water-metals.md` | Heavy metal concentrations levels in groundwater and wastewater sources in parts of Trans-Amadi, Port Harcourt, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ny-dec-tccp-2023-chem-pqls-draft.md` | Toxic Chemicals in Children's Products Program: Chemicals and Practical Quantitation Limits Under Consideration (Draft Update, Feb. 2023) | Subject-fit review, then canonical hero |
| `wiki/sources/nyamukamba2023-south-africa-diapers-metals-formaldehyde.md` | Determination of Selected Harmful Substances in Baby Diapers Available on the South African Market | Subject-fit review, then canonical hero |
| `wiki/sources/nydec2020-cleansing-product-disclosure-bmp.md` | Cleansing Product Information Disclosure Program — Recommended Best Management Practices | Subject-fit review, then canonical hero |
| `wiki/sources/nys-doh2019-metals-spices-guidance.md` | Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices | Subject-fit review, then canonical hero |
| `wiki/sources/o2025-genotoxic-and-hematological-effects-associated-with-chronic.md` | Genotoxic and Hematological Effects Associated with Chronic | Subject-fit review, then canonical hero |
| `wiki/sources/oasis2026-35-sunscreens-solvents-metals.md` | 35 Sunscreens Tested: No Benzene Detected, Lead Found in All 35. Sunscreen Contaminant Screening: Residual Solvents and Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/obasi2020-abakaliki-drinking-water-metals.md` | Potential health risk and levels of heavy metals in water resources of lead-zinc mining communities of Abakaliki, southeast Nigeria | Subject-fit review, then canonical hero |

## Batch 146: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/obriain2020-wet-wipe-microplastic-fibres.md` | The role of wet wipes and sanitary towels as a source of white microplastic fibres in the marine environment | Subject-fit review, then canonical hero |
| `wiki/sources/occurrence2026-heavy-metals-in-infant-formula.md` | Heavy Metals in Infant Formula: | Subject-fit review, then canonical hero |
| `wiki/sources/oconnor2026-bioavailability-of-and-us-infant-exposure-to-arsenic.md` | Bioavailability of and US Infant Exposure to Arsenic, Cadmium, Lead, Mercury, and Per- and Polyfluoroalkyls from Human Milk and Infant Formula: Results from a Series of Systematic Reviews | Subject-fit review, then canonical hero |
| `wiki/sources/odhiambo2015-infant-formula-nairobi-trace-elements.md` | Toxic trace elements in different brands of milk infant formulae in Nairobi market, Kenya | Subject-fit review, then canonical hero |
| `wiki/sources/oduro2023-cereal-breakfast-ghana-health-risk.md` | Health risks of potentially toxic metals in cereal-based breakfast meals in the Kumasi Metropolis, Ghana | Subject-fit review, then canonical hero |
| `wiki/sources/oecd2008-siap-diantimony-trioxide.md` | SIDS Initial Assessment Profile: Diantimony trioxide | Subject-fit review, then canonical hero |
| `wiki/sources/oecd2019-childrens-exposure-chemicals-products.md` | Considerations When Assessing Children's Exposure to Chemicals from Products (OECD Series on Testing and Assessment No. 310) | Subject-fit review, then canonical hero |
| `wiki/sources/oecd2024-crafts-toys-children-exposure.md` | Considerations when Estimating Exposure to Crafts and Toys in Children (OECD Series on Testing and Assessment No. 401) | Subject-fit review, then canonical hero |
| `wiki/sources/oehha-arsenic-prop65-listing.md` | Arsenic (inorganic Arsenic Compounds) — Proposition 65 Chemical Listing | Subject-fit review, then canonical hero |
| `wiki/sources/oehha-cadmium-prop65-evidence-1996.md` | Evidence on the Developmental and Reproductive Toxicity of Cadmium | Subject-fit review, then canonical hero |
| `wiki/sources/oehha-cadmium-prop65-madl-2001.md` | Proposition 65 Maximum Allowable Daily Level (MADL) for Reproductive Toxicity for Cadmium (Oral Route) | Subject-fit review, then canonical hero |
| `wiki/sources/oehha-chromium-vi-prop65-listing.md` | Chromium (Hexavalent Compounds) — California Proposition 65 Chemical Listing | Subject-fit review, then canonical hero |
| `wiki/sources/oehha-lead-prop65-listing.md` | Lead and Lead Compounds — Proposition 65 Chemical Listing | Subject-fit review, then canonical hero |
| `wiki/sources/oehha-nickel-dart-evidence-2018.md` | Evidence on the Developmental and Reproductive Toxicity of Nickel and Nickel Compounds (Proposition 65 hazard-identification document) | Subject-fit review, then canonical hero |
| `wiki/sources/oehha-nickel-prop65-factsheet-2025.md` | Nickel and Nickel Compounds — Proposition 65 Warnings Website fact sheet | Subject-fit review, then canonical hero |
| `wiki/sources/oehha2000-appendix-f-dermal-uptake-soil.md` | Appendix F - Dermal Uptake of Chemicals from Soil (Technical Support Document for Exposure Assessment and Stochastic Analysis) | Subject-fit review, then canonical hero |
| `wiki/sources/oehha2016-antimony-drinking-water-phg.md` | Public Health Goal for Antimony in Drinking Water | Subject-fit review, then canonical hero |
| `wiki/sources/oeko-tex2024-new-limit-values.md` | OEKO-TEX® Limit values: New regulations 2024 | Subject-fit review, then canonical hero |
| `wiki/sources/oekoinstitut2020-rohs-diantimony-trioxide.md` | RoHS Annex II Dossier for Diantimony trioxide (flame retardant) | Subject-fit review, then canonical hero |
| `wiki/sources/ogwu2024-open-access-mercury-through-fish.md` | OPEN ACCESS mercury through fish | Subject-fit review, then canonical hero |
| `wiki/sources/ojekunle2015-mechanic-village-tree-uptake.md` | Effectiveness of neem, cashew and mango trees in the uptake of heavy metals in mechanic village, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ojha2024-brassica-juncea-cadmium-lead-sewage.md` | Phytoremediation potential of Brassica juncea L. grown in different Cd and Pb polluted sewage irrigated soils | Subject-fit review, then canonical hero |
| `wiki/sources/okeke2024-spent-engine-oil-pome-soil-metals.md` | Evaluating the ecological consequences of heavy metal contamination in soil induced by spent engine oil and palm oil mill effluents for sustainable development | Subject-fit review, then canonical hero |
| `wiki/sources/okeke2026-calcium-carbide-ripened-fruits-metals.md` | Accumulation of Chromium, Lead and Arsenic in Calcium Carbide Induced Ripened Fruits and Their Possible Human Health Risks in Bauchi, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/okolo2022-chicken-drumstick-umuhia-heavy-metals.md` | Chemical and microbiological quality of commercial fresh and frozen chicken drumstick in Umuhia, Nigeria | Subject-fit review, then canonical hero |

## Batch 147: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/okonofua2024-mining-pits-cabbage-fish-nigeria.md` | Analysis of Bioaccumulation of Heavy Metals in Water, Cabbage (Brassica oleracea var. capitata) and Tilapia Fish (Oreochromis niloticus) from Unreclaimed Mining Pits | Subject-fit review, then canonical hero |
| `wiki/sources/oktariani2023-tuna-swordfish-indian-pacific-heavy-metals.md` | Heavy metals content in fresh tuna and swordfish caught from Hindian and Pacific Oceans: Health risk assessment of dietary exposure | Subject-fit review, then canonical hero |
| `wiki/sources/okubo2023-periconceptional-diet-blood-metals-lbw.md` | Periconceptional maternal diet quality influences blood heavy metal concentrations and their effect on low birth weight: the Japan Environment and Children's Study | Subject-fit review, then canonical hero |
| `wiki/sources/okwuegbuna2025-tampon-metal-release-thesis.md` | Integrated Analytical Approaches for Menstrual Health Assessment: Heavy Metal Quantification and Optimized Sample Collection for Biomarker Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/oladoye2016-odo-ori-spices-metals.md` | Evaluation of Effects of Heavy Metal Contents of Some Common Spices Available in Odo-Ori Market, Iwo, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/olafisoye2020-virgin-palm-oil-metals.md` | Synthetic antioxidants and metallic elements as additives/contaminants in virgin palm oil | Subject-fit review, then canonical hero |
| `wiki/sources/olgunoglu2025-scorpionfish-izmir-metals.md` | Seasonal Variability and Sex-Specific Accumulation of Trace Metals in Black Scorpionfish (Scorpaena porcus Linnaeus, 1758) from Izmir Bay (Aegean Sea), Türkiye: Implications for Human Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/olivas-martinez2026-spanish-girls-urinary-metals.md` | Association of exposure to synthetic phenols and metal(loid)s with early puberty in Spanish girls: a multicentric case–control study | Subject-fit review, then canonical hero |
| `wiki/sources/oliveira2021-cocoa-beans-cd-pb-brazil-processing.md` | Cd and Pb in cocoa beans: Occurrence and effects of chocolate processing | Subject-fit review, then canonical hero |
| `wiki/sources/oliveira2022-mercury-fish-pregnant-women-tapajos.md` | Fish consumption habits of pregnant women in Itaituba, Tapajós River basin, Brazil: risks of mercury contamination as assessed by measuring total mercury in highly consumed piscivore fish species and in hair of pregnant women | Subject-fit review, then canonical hero |
| `wiki/sources/olmedo2013-andalusia-fish-shellfish-metals.md` | Determination of toxic elements (mercury, cadmium, lead, tin and arsenic) in fish and shellfish samples. Risk assessment for the consumers | Subject-fit review, then canonical hero |
| `wiki/sources/olowoyo2026-heavy-metals-drinking-water-global-review.md` | Heavy Metals Burden in Drinking Water: Global Patterns, Sources, and Public Health Implications | Subject-fit review, then canonical hero |
| `wiki/sources/omega2026-experimental-study-on-the-purification-of-high-hardness.md` | Experimental Study on the Purification of High-Hardness Arsenic- | Subject-fit review, then canonical hero |
| `wiki/sources/omenka2016-personal-care-products-ibadan.md` | Heavy metal content of selected personal care products (PCPs) available in Ibadan, Nigeria and their toxic effects | Subject-fit review, then canonical hero |
| `wiki/sources/omirzakov2024-poultry-meat-kazakhstan-heavy-metals.md` | Analysis of heavy metals content in domestic and imported poultry meat | Subject-fit review, then canonical hero |
| `wiki/sources/omosigho2025-nigeria-toothpaste-metals.md` | Quality Assessment of Some Selected Toothpastes Used in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/onghena2016-baby-bottle-migration-duration-tests.md` | Evaluation of the migration of chemicals from baby bottles under standardised and duration testing conditions | Subject-fit review, then canonical hero |
| `wiki/sources/onyegeme-okerenta2023-shellfish-nigeria.md` | Potential Toxic elements in shellfish from three rivers in Niger Delta, Nigeria: bioaccumulation, dietary intake, and human health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/onyena2024-lactational-metals-africa-mediterranean.md` | Lactational exposure of human infants to metal(loid)s in Sub-Saharan Africa and Mediterranean Europe: A systematic review and meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/oprea2022-sibiu-celery-root-metals.md` | HEAVY METALS ACCUMULATION IN SOIL AND CELERY ROOT (APIUM GRAVEOLENS L.) HARVESTED FROM THE POLLUTED AREAS IN SIBIU COUNTY, CENTRAL ROMANIA | Subject-fit review, then canonical hero |
| `wiki/sources/opss2023-feasibility-action-limits-cosmetics-uk.md` | A Feasibility Study Investigating Action Limits for Certain Heavy Metal Impurities in Cosmetic Products | Subject-fit review, then canonical hero |
| `wiki/sources/oranges2015-skin-physiology-neonate-infant-clinical.md` | Skin Physiology of the Neonate and Infant: Clinical Implications | Subject-fit review, then canonical hero |
| `wiki/sources/ordemann-austin-2016-pb-zinc-finger.md` | Lead neurotoxicity: exploring the potential impact of lead substitution in zinc-finger proteins on mental health | Subject-fit review, then canonical hero |
| `wiki/sources/orisakwe2016-nigeria-toothpastes-metals.md` | Potential Hazards of Toxic Metals Found in Toothpastes Commonly Used in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ormaza-gonzalez2020-tuna-canned-eastern-pacific.md` | Low mercury, cadmium and lead concentrations in tuna products from the eastern Pacific | Subject-fit review, then canonical hero |

## Batch 148: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/orobator2025-oil-palm-bushfire-soil-metals.md` | Impact of Bushfire on Soil Heavy Metals in Oil Palm Plantations in Edo State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/orosun2023-vegetables-nigeria-ptms.md` | Potentially toxic metals in irrigation water, soil, and vegetables and their health risks using Monte Carlo models | Subject-fit review, then canonical hero |
| `wiki/sources/ortega-flores2023-mexican-sargassum-arsenic.md` | Inorganic Arsenic in holopelagic Sargassum spp. Stranded in the Mexican Caribbean: Seasonal Variations and Comparison With International Regulations and Guidelines | Subject-fit review, then canonical hero |
| `wiki/sources/ortiz-garcia2023-arsenic-maternal-exposure.md` | Maternal Exposure to Arsenic and Its Impact on Maternal and Fetal Health: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/orywal2021-heavy-metals-dried-mushrooms.md` | Health risk assessment of exposure to toxic elements resulting from consumption of dried wild-grown mushrooms available for sale | Subject-fit review, then canonical hero |
| `wiki/sources/oseisafo2024-ghana-spices-metals.md` | Trace and Heavy Metals in Locally and Imported Spices Sold on Markets in Accra Metropolis, Ghana | Subject-fit review, then canonical hero |
| `wiki/sources/ospar2022-metals-fish-shellfish-sediment.md` | Status and Trend for Heavy Metals (Mercury, Cadmium and Lead) in Fish, Shellfish and Sediment | Subject-fit review, then canonical hero |
| `wiki/sources/osuolale2025-leafy-vegetables-ondo-trace-elements.md` | Assessing Public Health Risks from Trace Element Contamination in Common Leafy Vegetables from Ondo, Nigeria, Using PIXE and Multivariate Statistics | Subject-fit review, then canonical hero |
| `wiki/sources/otitoju2018-noodle-products-nigeria-metals.md` | Heavy Metal Quantification of Noodle Products Commonly Consumed in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ou2026-meta-analysis-of-maternal-exposure-to-heavy.md` | Meta-analysis of maternal exposure to heavy | Subject-fit review, then canonical hero |
| `wiki/sources/ounifi2020-cadmium-nanofiltration-membranes.md` | Cellulose Acetate Nanofiltration Membranes for Cadmium Remediation | Subject-fit review, then canonical hero |
| `wiki/sources/ouyang2022-early-life-microbiota-delivery-feeding.md` | Early Life Microbiota — Impact of Delivery Mode and Infant Feeding | Subject-fit review, then canonical hero |
| `wiki/sources/oviri2024-nigeria-bathing-soaps-metals.md` | Assessment of the concentrations and human exposure to heavy metals in bathing soaps in Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ownsworth2019-estuarine-macroalgae-elements.md` | Tracing the natural and anthropogenic influence on the trace elemental chemistry of estuarine macroalgae and the implications for human consumption | Subject-fit review, then canonical hero |
| `wiki/sources/owusuadoma2024-ghana-lettuce-metals.md` | Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana | Subject-fit review, then canonical hero |
| `wiki/sources/ozarkar2025-nickel-cobalt-bioremediation.md` | Comparative Analysis of Bioremediation and Phytoremediation in Mitigation of Heavy Metals. | Subject-fit review, then canonical hero |
| `wiki/sources/ozarkar2025-phytoremediation-in-mitigation-of-heavy-metals.md` | Phytoremediation in Mitigation of Heavy Metals. | Subject-fit review, then canonical hero |
| `wiki/sources/ozbek2016-mip-oes-turkish-vinegars.md` | A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different Types of Vinegars by Microwave Induced Plasma Optical Emission Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/ozkutlu2026-wheat-cd-zinc-mitigation.md` | Roles of Soil and Foliar Spray of Zinc Nutrition in Cadmium Reduction of Wheat Grain | Subject-fit review, then canonical hero |
| `wiki/sources/ozler-2025-nutritional-approaches-asd-scoping-review.md` | Nutritional Approaches in Autism Spectrum Disorder: A Scoping Review | Subject-fit review, then canonical hero |
| `wiki/sources/ozturk2024-al-tea-infusion-teapot.md` | Determination of aluminium concentrations in black, green, and white tea samples: effects of different infusion times and teapot species on aluminium release | Subject-fit review, then canonical hero |
| `wiki/sources/pack2021-preservatives-dishwashing-wet-wipes.md` | Probabilistic risk assessment of preservatives in dishwashing detergents and wet wipes for Korean consumers | Subject-fit review, then canonical hero |
| `wiki/sources/pacor2003-nickel-recurrent-aphthous-stomatitis-dbpc.md` | Results of Double-Blind Placebo-Controlled Challenge with Nickel Salts in Patients Affected by Recurrent Aphthous Stomatitis | Subject-fit review, then canonical hero |
| `wiki/sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation.md` | Simultaneous Determination of Arsenic, Cadmium, Mercury, and Lead in Raw Ingredients, Nutritional Products, and Infant Formula by Inductively Coupled Plasma Mass Spectrometry: Single-Laboratory Validation | Subject-fit review, then canonical hero |
| `wiki/sources/padoh2023-pahan-727-cpsc-lead-cup-recall.md` | Consumer Product Safety Commission (CPSC) Lead Recall: PandaEar, LAOION, and Green Sprouts Stainless Steel Bottles and Cups (PAHAN # 727-11-29-ADV) | Subject-fit review, then canonical hero |

## Batch 149: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/paez-osuna2024-fish-mercury-selenium-mexico.md` | Mercury and selenium in three fish species from a dam 20 months after a mine-tailing spill in the SE Gulf of California ecoregion, Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/paezosuna2024-tilapia-mining-dams.md` | Tilapia as a model fish for biomonitoring of metal pollution in dams associated with mining watersheds: contrasting diagnosis from different tissues and health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/pagels2009-candle-smoke-particles.md` | Chemical Composition and Mass Emission Factors of Candle Smoke Particles | Subject-fit review, then canonical hero |
| `wiki/sources/pain2023-lead-pheasant-dogfood-uk.md` | Lead concentrations in commercial dogfood containing pheasant in the UK | Subject-fit review, then canonical hero |
| `wiki/sources/pal2016-uvb-zno-nanoparticle-dermal-penetration-mouse.md` | UVB exposure enhanced the dermal penetration of zinc oxide nanoparticles and induced inflammatory responses through oxidative stress mediated by MAPKs and NF-κB signaling in SKH-1 hairless mouse skin | Subject-fit review, then canonical hero |
| `wiki/sources/pal2016-uvb-zno-nanoparticle-penetration-hairless-mouse.md` | UVB exposure enhanced the dermal penetration of zinc oxide nanoparticles and induced inflammatory responses through oxidative stress mediated by MAPKs and NF-κB signaling in SKH-1 hairless mouse skin | Subject-fit review, then canonical hero |
| `wiki/sources/pal2017-wastewater-vegetables-heavy-metals.md` | Heavy Metals in Soil and Vegetables and their Effect on Health | Subject-fit review, then canonical hero |
| `wiki/sources/palka2022-rabbit-meat-feed-metals.md` | Effect of a Diet Supplemented with Nettle (Urtica dioica L.) or Fenugreek (Trigonella Foenum-Graecum L.) on the Content of Selected Heavy Metals in Liver and Rabbit Meat | Subject-fit review, then canonical hero |
| `wiki/sources/palmieri2020-mercury-rice.md` | Implications and Significance of Mercury in Rice | Subject-fit review, then canonical hero |
| `wiki/sources/palombieri2023-triticum-turgidum-cadmium.md` | Characterization of Triticum turgidum sspp. durum, turanicum, and polonicum grown in Central Italy in relation to technological and nutritional aspects | Subject-fit review, then canonical hero |
| `wiki/sources/pan2016-zhejiang-vegetables-metals.md` | Levels and potential health risk of heavy metals in marketed vegetables in Zhejiang, China | Subject-fit review, then canonical hero |
| `wiki/sources/pan2021-lignosulfonate-chitosan-pb-adsorbent.md` | Preparation of Sodium Lignosulfonate/Chitosan Adsorbent and Application of Pb2+ Treatment in Water | Subject-fit review, then canonical hero |
| `wiki/sources/panama2007-decreto-467-plant-heavy-metals.md` | Panama Decreto Ejecutivo No. 467 of 2007: plant-product heavy metals and nitrates | Subject-fit review, then canonical hero |
| `wiki/sources/panama2009-resolucion-368-fishery-contaminants.md` | Resolucion No. 368 of 15 May 2009: maximum contaminant limits for fishery products | Subject-fit review, then canonical hero |
| `wiki/sources/pandelova2012-eu-baby-food-formula-elements.md` | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby foods from the EU market: Comparison of assessed infant intakes with the present safety limits for minerals and trace elements | Subject-fit review, then canonical hero |
| `wiki/sources/pane2026-probiotic-detoxification-heavy-metals-shime.md` | Probiotic detoxification of heavy metals: functional assessment in simulated intestinal and ex vivo models | Subject-fit review, then canonical hero |
| `wiki/sources/pankavec2019-pickled-mushrooms-poland-minerals.md` | Mineral Constituents of Conserved White Button Mushrooms: Similarities and Differences | Subject-fit review, then canonical hero |
| `wiki/sources/pankiewicz2012-thg-dairy-products-poland.md` | Monitoring of total mercury level in selected dairy products from the south-east regions of Poland | Subject-fit review, then canonical hero |
| `wiki/sources/pappalardo2017-canned-tuna-metals-italy.md` | Heavy metal content and molecular species identification in canned tuna: Insights into human food safety | Subject-fit review, then canonical hero |
| `wiki/sources/paraguaymspbs2019-decreto-1335-mercosur-contaminants.md` | Decreto No. 1335/2019: Mercosur technical regulation on maximum limits for inorganic contaminants in foods | Subject-fit review, then canonical hero |
| `wiki/sources/paranjape2023-heavy-metal-removal-using-plant-origin-biomass-and.md` | Heavy Metal Removal Using Plant Origin Biomass and Agricultural Waste-Derived Biomass from Aqueous Media: a Review | Subject-fit review, then canonical hero |
| `wiki/sources/park2005-korean-seafood-arsenic-speciation.md` | Speciation of Six Arsenic Compounds in Korean Seafood Samples by HPLC-ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk.md` | Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods | Subject-fit review, then canonical hero |
| `wiki/sources/parsaei2019-milk-cadmium-lead-mercury.md` | Concentrations of Cadmium, Lead and Mercury in Raw Bovine, Ovine, Caprine, Buffalo and Camel Milk | Subject-fit review, then canonical hero |
| `wiki/sources/pasumpon2021-seagrass-heavy-metals-palk-bay.md` | Seasonal variation of heavy metals in seagrasses along Thondi coast, Palk Bay, India | Subject-fit review, then canonical hero |

## Batch 150: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/patel2023-arsenic-environment-review.md` | A review on arsenic in the environment: contamination, mobility, sources, and exposure | Subject-fit review, then canonical hero |
| `wiki/sources/patel2023-singrauli-herbal-plants-metals.md` | Evaluation of heavy metals in herbal plants growing in Singrauli Region of Madhya Pradesh | Subject-fit review, then canonical hero |
| `wiki/sources/pathology2011-erik-van-der-wal-seyedyahya-anvar-gressive-neurodegenerative.md` | Erik van der Wal,* SeyedYahya Anvar,* gressive neurodegenerative disorders, such as Hunting- | Subject-fit review, then canonical hero |
| `wiki/sources/patil2022-rice-biochar-cadmium-mustard.md` | Effect of rice residue biochar on bioavailability of cadmium to indian mustard under combined lead and cadmium spiking in a loamy sand soil | Subject-fit review, then canonical hero |
| `wiki/sources/paudel2024-packaged-fruit-juices-nepal.md` | Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy | Subject-fit review, then canonical hero |
| `wiki/sources/paul2025-meghna-fish-arsenic.md` | Arsenic bioaccumulation in fish of the lower meghna river: Seasonal dynamics, species sensitivity, and public health implications | Subject-fit review, then canonical hero |
| `wiki/sources/paula2015-fruit-juices-elements-portugal.md` | Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices | Subject-fit review, then canonical hero |
| `wiki/sources/paulo2026-cadmium-induced-colorectal.md` | cadmium-induced colorectal | Subject-fit review, then canonical hero |
| `wiki/sources/paulsen2015-game-meat-metal-bioaccessibility.md` | Pilot study on metal contents in meat portions from wild game killed by 'lead-free' rifle bullets | Subject-fit review, then canonical hero |
| `wiki/sources/pawlaczyk2020-mercury-canned-fish-poland.md` | Risk of Mercury Ingestion from Canned Fish in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/pawlaczyk2021-eyeshadows-metallic-impurities.md` | Determination of Metallic Impurities by ICP-MS Technique in Eyeshadows Purchased in Poland. Part I | Subject-fit review, then canonical hero |
| `wiki/sources/paz-suconota2024-mercury-fish-pastaza-ecuador.md` | Assessment of total mercury content in fish muscle tissue from the middle basin of the Pastaza River, Ecuador | Subject-fit review, then canonical hero |
| `wiki/sources/pazi2017-aegean-fish-metal-risk.md` | Potential risk assessment of metals in edible fish species for human consumption from the Eastern Aegean Sea | Subject-fit review, then canonical hero |
| `wiki/sources/pb2021-substances-pfas-mercury-hg-and.md` | Substances (PFAS), Mercury (Hg) and | Subject-fit review, then canonical hero |
| `wiki/sources/pehlivan2008-vegetable-oils-turkey-icp-aes.md` | Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES) | Subject-fit review, then canonical hero |
| `wiki/sources/peng2023-al-fluoride-tea-stress.md` | Aluminum and Fluoride Stresses Altered Organic Acid and Secondary Metabolism in Tea (Camellia sinensis) Plants: Influences on Plant Tolerance, Tea Quality and Safety | Subject-fit review, then canonical hero |
| `wiki/sources/pereira2008-ria-aveiro-mercury-review.md` | Mercury pollution in Ria de Aveiro (Portugal): a review of the system assessment | Subject-fit review, then canonical hero |
| `wiki/sources/pereira2020-nickel-premade-baby-foods.md` | Exposure to nickel through commercial premade baby foods: Is there any risk? | Subject-fit review, then canonical hero |
| `wiki/sources/pereiro2026-open-access-of-pacific-white-shrimp.md` | OPEN ACCESS of Paciﬁc white shrimp | Subject-fit review, then canonical hero |
| `wiki/sources/peters2021-nhanes-cadmium-lead-rdw.md` | The association of cadmium and lead exposures with red cell distribution width | Subject-fit review, then canonical hero |
| `wiki/sources/petursdottir2015-environmental-effects-on-arsenosugars-and-arsenolipids-in-ectocarpus.md` | Environmental effects on arsenosugars and arsenolipids in Ectocarpus (Phaeophyta) | Subject-fit review, then canonical hero |
| `wiki/sources/physicians2025-ing-sensitization-recent-regulatory-improvements-in-fragrance-labeling.md` | ing sensitization. Recent regulatory improvements in fragrance labeling are helping to reduce exposure to major allergens. | Subject-fit review, then canonical hero |
| `wiki/sources/physiology2023-apoptosis-induced-by-different-valence-heavy-metals-in.md` | Apoptosis Induced by Different-Valence Heavy Metals in Cells | Subject-fit review, then canonical hero |
| `wiki/sources/piccinini2016-tattoo-pmu-safety.md` | Safety of tattoos and permanent make-up. Final report | Subject-fit review, then canonical hero |
| `wiki/sources/piccinino2021-in-cosmetic-and-cosmeceutical-applications-focusing-on-sunscreen.md` | in cosmetic and cosmeceutical applications, focusing on sunscreen and antiaging formulations. | Subject-fit review, then canonical hero |

## Batch 151: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/picos-corrales2020-chitosan-bean-straw-bioflocculants.md` | Environment-Friendly Approach toward the Treatment of Raw Agricultural Wastewater and River Water via Flocculation Using Chitosan and Bean Straw Flour as Bioflocculants | Subject-fit review, then canonical hero |
| `wiki/sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk.md` | Urinary biomarkers of exposure to toxic and essential elements: A comparison of infants fed with human milk or formula | Subject-fit review, then canonical hero |
| `wiki/sources/pille2021-foamed-hydrogels-metal-removal.md` | The use of foaming agents and foam stabilizers to improve heavy metal removal properties of acrylic acid/acrylamide hydrogels for use in wastewater remediation | Subject-fit review, then canonical hero |
| `wiki/sources/pinto2023-cadmium-hollow-fibre-water.md` | A Green Method for the Determination of Cadmium in Natural Waters Based on Multi-Fibre Supported Liquid Membranes | Subject-fit review, then canonical hero |
| `wiki/sources/pirg2010-trouble-in-toyland.md` | Trouble in Toyland: The 25th Annual Survey of Toy Safety | Subject-fit review, then canonical hero |
| `wiki/sources/pirsaheb2015-iran-kermanshah-cereals-metals.md` | Essential and toxic heavy metals in cereals and agricultural products marketed in Kermanshah, Iran, and human health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/piwowarczyk2018-kidney-vetch-lead-phytostabilization.md` | The acclimatization strategies of kidney vetch (Anthyllis vulneraria L.) to Pb toxicity | Subject-fit review, then canonical hero |
| `wiki/sources/plants2024-schinus-molle-l-using-organic-amendments-to-the.md` | Schinus molle L. using organic amendments to the phytoremediation of total chromium in the mid-zone | Subject-fit review, then canonical hero |
| `wiki/sources/pogoson2020-rice-cooking-cadmium-arsenic.md` | Reducing the cadmium, inorganic arsenic and dimethylarsinic acid content of rice through food-safe chemical cooking pre-treatment | Subject-fit review, then canonical hero |
| `wiki/sources/pogrzeba2018-energy-crops-contaminated-soil.md` | Macroelements and heavy metals content in energy crops cultivated on contaminated soil under different fertilization-case studies on autumn harvest | Subject-fit review, then canonical hero |
| `wiki/sources/pokorskaniewiada2024-polish-coffee-trace-elements.md` | Tracking Trace Elements Found in Coffee and Infusions of Commercially Available Coffee Products Marketed in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/pollard2016-southeastern-usa-heavy-metals-plants.md` | Heavy Metal Tolerance and Accumulation in Plants of the Southeastern United States | Subject-fit review, then canonical hero |
| `wiki/sources/pompa2021-durum-wheat-cd-pb-hg-italy.md` | Evaluation and Dietary Exposure Assessment of Selected Toxic Trace Elements in Durum Wheat (Triticum durum) Imported into the Italian Market: Six Years of Official Controls | Subject-fit review, then canonical hero |
| `wiki/sources/ponton2025-dams-on-mercury-cycling-case-study-and-recommendations.md` | Dams on Mercury Cycling: Case Study and Recommendations for | Subject-fit review, then canonical hero |
| `wiki/sources/poon1998-antimony-rat-drinking-water.md` | Effects of Antimony on Rats Following 90-Day Exposure via Drinking Water | Subject-fit review, then canonical hero |
| `wiki/sources/porwollik2026-rhodiola-supplements-us-market.md` | The quality and safety of Rhodiola rosea supplements on the U.S. market: An analysis of biomarkers, heavy metals, and pesticide residues | Subject-fit review, then canonical hero |
| `wiki/sources/potorti2026-tahini-quality-safety-inorganic-elements.md` | Chemical Composition and Nutritional Quality of Commercial Tahini | Subject-fit review, then canonical hero |
| `wiki/sources/poulsen2007-cosmetic-products-children-denmark.md` | A survey and health assessment of cosmetic products for children | Subject-fit review, then canonical hero |
| `wiki/sources/pourramezani2019-iran-imported-black-tea-metals.md` | Evaluation of heavy metal concentration in imported black tea in Iran and consumer risk assessments | Subject-fit review, then canonical hero |
| `wiki/sources/pradhan2023-heracleum-nepalense-elements.md` | Inductive coupled plasma analysis of Heracleum nepalense D. Don (Umbelliferae) | Subject-fit review, then canonical hero |
| `wiki/sources/prasanna2025-betwa-yamuna-metal-pollution.md` | Metal pollution and human health risk assessment in the Betwa-Yamuna river system, India | Subject-fit review, then canonical hero |
| `wiki/sources/prestes2026-stingless-bee-oxidative-stress-review.md` | Oxidative stress in stingless bees exposed to pesticides and heavy metals: a systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/prevendar-crnic2022-rasa-coal-birds-htes.md` | Enhanced levels of hazardous trace elements (Cd, Cu, Pb, Se, Zn) in bird tissues in the context of environmental pollution by Raša coal | Subject-fit review, then canonical hero |
| `wiki/sources/prevention2010-best-available-techniques-bat.md` | Best Available Techniques (BAT) | Subject-fit review, then canonical hero |
| `wiki/sources/pribil2025-hot-sauce-food-safety-review.md` | Food safety considerations in hot sauce production: hazards, regulations, and industry challenges | Subject-fit review, then canonical hero |

## Batch 152: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/price-skaar-2025-biofilms-metal-induced-microbial-responses.md` | Forging biofilms: metal-induced microbial responses in biofilm formation | Subject-fit review, then canonical hero |
| `wiki/sources/price2023-biokinetic-lead-baby-food-blls.md` | Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability | Subject-fit review, then canonical hero |
| `wiki/sources/products2019-concentration-of-total-mercury-in-convenience-fish.md` | Concentration of Total Mercury in Convenience Fish | Subject-fit review, then canonical hero |
| `wiki/sources/professor2024-the-beneficial-effects-of-the-microbial.md` | THE BENEFICIAL EFFECTS OF THE MICROBIAL | Subject-fit review, then canonical hero |
| `wiki/sources/properties2020-catello-pane-aldo-tava-and-cristina-bignami.md` | Catello Pane, Aldo Tava and Cristina Bignami | Subject-fit review, then canonical hero |
| `wiki/sources/psqca2017-ps-3228-skin-creams.md` | PS 3228:2017 Skin Creams - Specification | Subject-fit review, then canonical hero |
| `wiki/sources/pulze2025-volcanic-eruptions-food-chain-metals.md` | Impact of volcanic eruptions on heavy metal contamination in the food chain | Subject-fit review, then canonical hero |
| `wiki/sources/punjab2024-new-exposure-to-humans-or-a-novel-detection.md` | new exposure to humans, or a novel detection approach or technology. Emerging | Subject-fit review, then canonical hero |
| `wiki/sources/pusz2024-carbon-soil-metal-stabilization.md` | Influence of Carbons on Metal Stabilization and the Reduction in Soil Phytotoxicity with the Assessment of Health Risks | Subject-fit review, then canonical hero |
| `wiki/sources/qiao2024-growth-substrate-limitation-enhances-anaerobic-arsenic.md` | Growth substrate limitation enhances anaerobic arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/qin2025-mercury-soil-method-comparison-afs-caas.md` | Comparison of Atomic Fluorescence Spectrometry and Cold Atomic Absorption Spectrometry for Total Mercury Determination in Soil | Subject-fit review, then canonical hero |
| `wiki/sources/qin2026-rice-cadmium-liver-cancer-guangxi.md` | Spatial coupling and individual-level evidence: linking rice cadmium exposure to liver cancer in a high-risk area of China | Subject-fit review, then canonical hero |
| `wiki/sources/qu2022-lead-cadmium-drinking-water-soil-china.md` | Association between environmental lead/cadmium co-exposure in drinking water and soil and type 2 diabetes mellitus/obesity in Southern China | Subject-fit review, then canonical hero |
| `wiki/sources/question2026-statement-on-the-findings-presented-in-the-toxicological.md` | Statement on the findings presented in the Toxicological | Subject-fit review, then canonical hero |
| `wiki/sources/qvarfort2025-game-meat-lead-bioaccessibility.md` | Lead in game meat: a study of bioaccessibility of lead metal fragments | Subject-fit review, then canonical hero |
| `wiki/sources/r2022-heavy-metal-stress-insights-into-life-sciences-faculty.md` | heavy metal stress-insights into Life Sciences, Faculty of Food Science and Technology, University of Agricultural Sciences and | Subject-fit review, then canonical hero |
| `wiki/sources/raab2024-arsenolipids-chlamydomonas.md` | Arsenolipids in the green microalga Chlamydomonas reinhardtii: first report of arsenosugar phospholipid (AsSugPhytol) | Subject-fit review, then canonical hero |
| `wiki/sources/rabeey2025-bovine-hg-pb-cd-egypt.md` | Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/raeeszadeh2021-animal-meat-metals-iran.md` | Determination of some heavy metals concentration in species animal meat (sheep, beef, turkey, and ostrich) and carcinogenic health risk assessment in Kurdistan province, western Iran | Subject-fit review, then canonical hero |
| `wiki/sources/rahati2026-infant-formula-baby-food-iran-health-risk.md` | Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market | Subject-fit review, then canonical hero |
| `wiki/sources/rahim2020-toxic-heavy-metals-fruits-pakistan.md` | Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits | Subject-fit review, then canonical hero |
| `wiki/sources/rahim2023-iraq-irrigation-broccoli-cauliflower.md` | Wastewater Irrigation and Accumulation of Heavy Metals in Vegetable Crops (Broccoli and Cauliflower) | Subject-fit review, then canonical hero |
| `wiki/sources/rahma2022-infant-skin-barrier-function-review.md` | Skin Barrier Function in Infants: Update and Outlook | Subject-fit review, then canonical hero |
| `wiki/sources/rahman2007-rice-grain-arsenic-fractions.md` | Accumulation of arsenic in tissues of rice plant (Oryza sativa L.) and its distribution in fractions of rice grain | Subject-fit review, then canonical hero |
| `wiki/sources/rahman2021-dhaka-turmeric-heavy-metals.md` | Analysis of heavy metal contents in some commercial turmeric samples available at Dhaka, Bangladesh | Subject-fit review, then canonical hero |

## Batch 153: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/rajeshkumar2018-taihu-lake-fish-oyster-metals.md` | Studies on seasonal pollution of heavy metals in water, sediment, fish and oyster from the Meiliang Bay of Taihu Lake in China | Subject-fit review, then canonical hero |
| `wiki/sources/rajkowska-mysliwiec2024-arsenic-rice-products-poland.md` | Arsenic in Rice and Rice-Based Products with Regard to Consumer Health | Subject-fit review, then canonical hero |
| `wiki/sources/raju2021-bivalves-cagayan-philippines.md` | Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines | Subject-fit review, then canonical hero |
| `wiki/sources/rakib2021-macroalgae-bangladesh-metals.md` | Macroalgae in biomonitoring of metal pollution in the Bay of Bengal coastal waters of Cox's Bazar and surrounding areas | Subject-fit review, then canonical hero |
| `wiki/sources/ral2024-eu-ecolabel-factsheet-household-detergents.md` | The EU Ecolabel for household detergents — The EU Ecolabel is the official European Union label for environmental excellence | Subject-fit review, then canonical hero |
| `wiki/sources/ralston2014-selenium-hbv-methylmercury-seafood.md` | Selenium Health Benefit Values: Updated Criteria for Mercury Risk Assessments | Subject-fit review, then canonical hero |
| `wiki/sources/ramadan2024-bahr-mouse-egypt-water.md` | Assessment of heavy metal pollution and water quality index of Bahr Mouse stream in Dakahlia Governorate, Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/ramly2023-arsenic-drinking-water-malaysia.md` | Arsenic in drinking water, hair, and prevalence of arsenicosis in Perak, Malaysia | Subject-fit review, then canonical hero |
| `wiki/sources/ramos-miras2023-pte-shrimp-ecuador.md` | Potentially toxic element bioaccumulation in consumed indoor shrimp farming associated with diet, water and sediment levels | Subject-fit review, then canonical hero |
| `wiki/sources/ramtahal2016-cacao-cadmium-trinidad.md` | Relationships between cadmium in tissues of cacao trees and soils in plantations of Trinidad and Tobago | Subject-fit review, then canonical hero |
| `wiki/sources/rana2020-thunbergia-lead-renotoxicity.md` | Thunbergia laurifolia leaf extract partially recovers lead-induced renotoxicity through modulating the cell signaling pathways | Subject-fit review, then canonical hero |
| `wiki/sources/ranjbar2025-mineral-water-metals.md` | Machine learning models for water safety enhancement | Subject-fit review, then canonical hero |
| `wiki/sources/rarivoson2022-organic-resources-madagascar-trace-metals.md` | Organic resources from Madagascar: Dataset of chemical and near-infrared spectroscopy measurements | Subject-fit review, then canonical hero |
| `wiki/sources/rashid2015-metals-rock-melon-malaysia.md` | Determination of Metals Contamination in Rock Melon (Cucumis melo) and Coco Peat | Subject-fit review, then canonical hero |
| `wiki/sources/rashmi2020-baby-talcum-powder-heavy-metals-india.md` | Determination of Toxic Heavy Metals in Commercially available brands of Baby Talcum Powder | Subject-fit review, then canonical hero |
| `wiki/sources/ravalli2022-uranium-metals-us-water-systems.md` | Sociodemographic inequalities in uranium and other metals in community water systems across the USA, 2006–11: a cross-sectional study | Subject-fit review, then canonical hero |
| `wiki/sources/ray2025-fish-chennai-metals.md` | ICP-MS-based quantitative analysis and risk assessment of metal(loid)s in fish species from Chennai, India | Subject-fit review, then canonical hero |
| `wiki/sources/razanov2019-poultry-silicon-mineral-heavy-metals.md` | Effect of silicon and mineral extract on heavy metals balance and accumulation rate in the muscle tissue of poultry | Subject-fit review, then canonical hero |
| `wiki/sources/razi-parjikolaei2016-red-macroalgae-metals.md` | Valuable Biomolecules from Nine North Atlantic Red Macroalgae: Amino Acids, Fatty Acids, Carotenoids, Minerals and Metals | Subject-fit review, then canonical hero |
| `wiki/sources/rbeida2023-heavy-metals-cosmetics-libya.md` | Quality control of selected cosmetics marketed in Libya for traces of toxic heavy metals: urgent need of guidelines harmonization | Subject-fit review, then canonical hero |
| `wiki/sources/rebellato2023-plant-yogurt-inorganic-contaminants.md` | Inorganic Contaminants in Plant-Based Yogurts Commercialized in Brazil | Subject-fit review, then canonical hero |
| `wiki/sources/rebellato2023b-plant-yogurt-element-bioaccessibility.md` | Composition and bioaccessibility of inorganic elements in plant-based yogurts | Subject-fit review, then canonical hero |
| `wiki/sources/rebeniak2014-pb-cd-ceramics-glassware-poland.md` | Exposure to lead and cadmium released from ceramics and glassware intended to come into contact with food | Subject-fit review, then canonical hero |
| `wiki/sources/reczajska2005-chromium-plant-foods-poland.md` | Determination of Chromium Content of Food and Beverages of Plant Origin | Subject-fit review, then canonical hero |
| `wiki/sources/redan2023-plant-milk-alternatives-elements.md` | Analysis of Eight Types of Plant-based Milk Alternatives from the United States Market for Target Minerals and Trace Elements | Subject-fit review, then canonical hero |

## Batch 154: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/redgrove2019-prescription-infant-formulas-aluminium.md` | Prescription Infant Formulas Are Contaminated with Aluminium | Subject-fit review, then canonical hero |
| `wiki/sources/regardless2022-toxic-metals-lead-and-cadmium-pesticides-pharmaceutical-residues.md` | toxic metals (lead and cadmium), pesticides, pharmaceutical residues, microplastics, and nitrates. | Subject-fit review, then canonical hero |
| `wiki/sources/rehman2013-talcum-powder-heavy-metals-pakistan.md` | Determination of toxic heavy metals in different brands of talcum powder | Subject-fit review, then canonical hero |
| `wiki/sources/reinke1975-fish-shellfish-inorganic-arsenic.md` | The determination of arsenite and arsenate ions in fish and shellfish by selective extraction and polarography | Subject-fit review, then canonical hero |
| `wiki/sources/reksten2020-angola-fish-metals.md` | Nutrient and Contaminant Analyses of Five Commercially Important Fish Species from the Angolan Coast | Subject-fit review, then canonical hero |
| `wiki/sources/reksten2021-bay-bengal-fish-metals.md` | Heavy Metal Contamination in 24 Fish Species from the Bay of Bengal: Risk Assessment for Human Health | Subject-fit review, then canonical hero |
| `wiki/sources/rempelos2022-meddiet-toxic-metals-urine.md` | Diet, but not food type, significantly affects micronutrient and toxic metal profiles in urine and/or plasma; a randomized, controlled intervention trial | Subject-fit review, then canonical hero |
| `wiki/sources/rempelos2023-vegetable-organic-conventional-metals.md` | Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials | Subject-fit review, then canonical hero |
| `wiki/sources/ren2018-crvi-pork-electron-beam.md` | One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation | Subject-fit review, then canonical hero |
| `wiki/sources/ren2025-cadmium-enrofloxacin-zebrafish.md` | Toxicological Effects of Combined Exposure of Cadmium and Enrofloxacin on Zebrafish | Subject-fit review, then canonical hero |
| `wiki/sources/resources2020-strategies-to-manage-the-risk-of-heavy-metal.md` | Strategies to manage the risk of heavy metal(loid) | Subject-fit review, then canonical hero |
| `wiki/sources/review2021-v-m-beluli-et-al-concentration-of-heavy.md` | V. M. BELULI et al.: Concentration of Heavy Metals in Sediment and Water of Përlepnica Lake..., Kem. Ind. 71 (5-6) (2022) 335−345 335 | Subject-fit review, then canonical hero |
| `wiki/sources/rezaei2020-fruits-markazi-essential-elements.md` | Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study | Subject-fit review, then canonical hero |
| `wiki/sources/richardson2018-toxic-metals-rat-gut-microbiota.md` | Exposure to toxic metals triggers unique responses from the rat gut microbiota | Subject-fit review, then canonical hero |
| `wiki/sources/ricketts2020-mercury-skin-lightening-jamaica.md` | Mercury Exposure Associated with Use of Skin Lightening Products in Jamaica | Subject-fit review, then canonical hero |
| `wiki/sources/rio2017-a-comparison-of-arsenic-exposure-in-young.md` | A comparison of arsenic exposure in young | Subject-fit review, then canonical hero |
| `wiki/sources/rittirong2018-cooked-rice-utensil-metals-thailand.md` | Quantification of aluminum and heavy metal contents in cooked rice samples from Thailand markets using inductively coupled plasma mass spectrometry (ICP-MS) and potential health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/river2016-human-health-risks-from-heavy-metals.md` | Human health risks from heavy metals | Subject-fit review, then canonical hero |
| `wiki/sources/river2026-bulletin-of-environmental-contamination-and-toxicology-2026-116.md` | Bulletin of Environmental Contamination and Toxicology (2026) 116:108 | Subject-fit review, then canonical hero |
| `wiki/sources/riyazuddin2022-heavy-metal-toxicity-sequestration-plants.md` | A Comprehensive Review on the Heavy Metal Toxicity and Sequestration in Plants | Subject-fit review, then canonical hero |
| `wiki/sources/rizzi2017-ibs-nickel-allergy-low-nickel-diet.md` | Irritable Bowel Syndrome and Nickel Allergy: What Is the Role of the Low Nickel Diet? | Subject-fit review, then canonical hero |
| `wiki/sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana.md` | Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements.md` | Trace Element Content in Tomato Fruit Grown with Sargassum-Based Biofertilizer | Subject-fit review, then canonical hero |
| `wiki/sources/rodriguez-romero2019-sunscreen-metals-coastal-seawater.md` | Sunscreens as a New Source of Metals and Nutrients to Coastal Waters | Subject-fit review, then canonical hero |
| `wiki/sources/rodriguez2009-fish-sauce-arsenic-speciation.md` | Arsenic speciation in fish sauce samples determined by HPLC coupled to inductively coupled plasma mass spectrometry | Subject-fit review, then canonical hero |

## Batch 155: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/rohonczy2024-arctic-foodweb-cd-hg.md` | Cadmium and mercury trophic transfer in the Arctic marine food web of Hudson Bay | Subject-fit review, then canonical hero |
| `wiki/sources/rokanuzzaman2022-bangladesh-eggs-metals.md` | Assessment of Heavy Metals and Trace Elements in Eggs and Eggshells of Gallus gallus domesticus, Coturnix coturnix and Anas platyrhynchos from Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/roman-ochoa2021-arequipa-grains-health-risk.md` | Heavy metal contamination and health risk assessment in grains and grain-based processed food in Arequipa region of Peru | Subject-fit review, then canonical hero |
| `wiki/sources/romero-crespo2023-trace-elements-crops-ecuador-mining.md` | Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador | Subject-fit review, then canonical hero |
| `wiki/sources/romero-estevez2019-ecuador-cocoa-cd-ni-pb.md` | Content and the relationship between cadmium, nickel, and lead concentrations in Ecuadorian cocoa beans from nine provinces | Subject-fit review, then canonical hero |
| `wiki/sources/romero-estevez2020-bivalves-santa-rosa-ecuador.md` | An Overview of Cadmium, Chromium, and Lead Content in Bivalves Consumed by the Community of Santa Rosa Island (Ecuador) and Its Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/ronan2017-laminaria-ascophyllum-ias-ireland.md` | High proportions of inorganic arsenic in Laminaria digitata but not in Ascophyllum nodosum samples from Ireland | Subject-fit review, then canonical hero |
| `wiki/sources/rosales-huamani2023-quinoa-peru-ptes.md` | Determination of Potentially Toxic Elements in Quinoa Crops Located in the Huacaybamba-Huanuco-Peru Area | Subject-fit review, then canonical hero |
| `wiki/sources/rose2007-seaweed-arsenic-forms-uk.md` | Arsenic in seaweed—Forms, concentration and dietary exposure | Subject-fit review, then canonical hero |
| `wiki/sources/roslee2016-oil-palm-biochar-arsenic.md` | The Effect of Oil Palm Empty Fruit Bunch Biochar on Arsenic Availability by Incubation Studies | Subject-fit review, then canonical hero |
| `wiki/sources/rosnan2017-talcum-powder-cu-pb-ni-aas.md` | Determination of Heavy Metal (Cu, Pb, Ni) in Talcum Powder by Using Atomic Absorption Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/rossini-oliva2024-urban-garden-vegetables-spain.md` | Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain | Subject-fit review, then canonical hero |
| `wiki/sources/rothenberg2021-maternal-methylmercury-rice-child-neurodevelopment-china.md` | Maternal methylmercury exposure through rice ingestion and child neurodevelopment in the first three years: a prospective cohort study in rural China | Subject-fit review, then canonical hero |
| `wiki/sources/rothstein2021-vulnerable-families-and-costly-formula-a.md` | Vulnerable families and costly formula: a | Subject-fit review, then canonical hero |
| `wiki/sources/rovira2015-clothing-skin-trace-elements.md` | Human exposure to trace elements through the skin by direct contact with clothing: Risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/rovira2016-trace-elements-skin-contact-clothes.md` | Trace elements in skin-contact clothes and migration to artificial sweat: Risk assessment of human dermal exposure | Subject-fit review, then canonical hero |
| `wiki/sources/roya2016-iran-torbat-heidarieh-rice-metals.md` | Heavy metals in rice samples on the Torbat-Heidarieh market, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025-mineral-baby-sunscreen-case-2505271.md` | Laboratory test of a zinc oxide baby sunscreen lotion, SPF 50 for lead, cadmium, mercury and arsenic (laboratory case 2505271) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025-mineral-baby-sunscreen-case-2505468.md` | Laboratory test of a zinc oxide 23.4% baby sunscreen, SPF 50 for lead, cadmium, mercury and arsenic (laboratory case 2505468) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025-mineral-baby-sunscreen-case-2505470.md` | Laboratory test of a sensitive-skin baby mineral sunscreen lotion, SPF 50 for lead, cadmium, mercury and arsenic (laboratory case 2505470) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025-mineral-baby-sunscreen-case-2506212.md` | Laboratory test of a baby mineral sunscreen lotion, SPF 50 for lead, cadmium, mercury and arsenic (laboratory case 2506212) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025-mineral-baby-sunscreen-case-2507165.md` | Laboratory test of a baby mineral sunscreen lotion with prebiotics, SPF 55 for lead, cadmium, mercury and arsenic (laboratory case 2507165) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025a-40pct-zno-diaper-ointment-lot-2025-142.md` | Consumer-commissioned laboratory test of a 40% zinc oxide diaper rash ointment for lead, cadmium, mercury and arsenic (lot 2025-142) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025b-40pct-zno-diaper-paste-lot-2025-169.md` | Consumer-commissioned laboratory test of a 40% zinc oxide diaper rash paste for lead, cadmium, mercury and arsenic (lot 2025-169) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2025c-40pct-zno-diaper-paste-lot-2025-182.md` | Consumer-commissioned laboratory test of a 40% zinc oxide maximum-strength diaper rash paste for lead, cadmium, mercury and arsenic (lot 2025-182) | Subject-fit review, then canonical hero |

## Batch 156: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/rubin2025d-13pct-zno-diaper-cream-lot-2025-218.md` | Consumer-commissioned laboratory test of a 13% zinc oxide diaper rash cream for lead, cadmium, mercury and arsenic (lot 2025-218) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2026-diaper-cream-comparison-chart-11-products.md` | Consumer-advocacy comparison chart of lead, cadmium, mercury and arsenic in eleven diaper creams (updated January 2026) | Subject-fit review, then canonical hero |
| `wiki/sources/rubin2026-sunscreen-metals-comparison-chart.md` | Chart Comparing the Toxicant Profiles of Popular Sunscreen Products | Subject-fit review, then canonical hero |
| `wiki/sources/rubio2023-metals-cereals-madeira-azores.md` | Dietary Exposure to Toxic Metals (Cd, Pb and Hg) from Cereals Marketed in Madeira and the Azores | Subject-fit review, then canonical hero |
| `wiki/sources/rudy2019-hunted-animals-toxic-elements-review.md` | Content of toxic elements in tissues of hunted animals on the basis of research results of 2003–2017 | Subject-fit review, then canonical hero |
| `wiki/sources/rueda-saa2025-valle-del-cauca-agricultural-soils.md` | Baseline concentration of heavy metals in agricultural soils | Subject-fit review, then canonical hero |
| `wiki/sources/rundio2022-mercury-trout-california.md` | High mercury concentrations in steelhead/rainbow trout, sculpin, and terrestrial invertebrates in a stream-riparian food web in coastal California | Subject-fit review, then canonical hero |
| `wiki/sources/runkle2025-agronomic-solutions-to-decrease-arsenic-concentrations.md` | Agronomic solutions to decrease arsenic concentrations | Subject-fit review, then canonical hero |
| `wiki/sources/rusanescu2023-mswi-fly-ash-agriculture.md` | Application of Fly Ash Obtained from the Incineration of Municipal Solid Waste in Agriculture | Subject-fit review, then canonical hero |
| `wiki/sources/rusin2021-vegetables-fruits-cadmium-lead-poland.md` | Concentration of cadmium and lead in vegetables and fruits | Subject-fit review, then canonical hero |
| `wiki/sources/rusko2026-mercury-fish-latvia-risk-benefit.md` | Risk-Benefit Assessment of Mercury, Lead, Cadmium, and Arsenic in Inland Fish from Latvian Lakes | Subject-fit review, then canonical hero |
| `wiki/sources/rustemli2026-canned-tuna-mineral-heavy-metal-turkey.md` | Mineral and heavy metal content in canned tuna: Implications for veterinary public health and consumer safety | Subject-fit review, then canonical hero |
| `wiki/sources/ruszkiewicz2017-sunscreen-uv-filter-neurotoxicity-review.md` | Neurotoxic effect of active ingredients in sunscreen products, a contemporary review | Subject-fit review, then canonical hero |
| `wiki/sources/ruttkay-nedecky2013-metallothionein-oxidative-stress.md` | The Role of Metallothionein in Oxidative Stress | Subject-fit review, then canonical hero |
| `wiki/sources/rylander2025-georgia-children-blood-lead.md` | Blood lead levels in children aged 5–7 years in the Republic of Georgia | Subject-fit review, then canonical hero |
| `wiki/sources/saba2016-suillus-luteus-mercury.md` | Accumulation and distribution of mercury in fruiting bodies by fungus Suillus luteus foraged in Poland, Belarus and Sweden | Subject-fit review, then canonical hero |
| `wiki/sources/sabri2025-moroccan-spices-casablanca-metals.md` | Essential and Toxic Element Profiles in Selected Spices from Greater Casablanca, Morocco | Subject-fit review, then canonical hero |
| `wiki/sources/sacchi2021-balangero-asbestos-mine-groundwater.md` | Natural Background Levels of Potentially Toxic Elements in Groundwater from a Former Asbestos Mine in Serpentinite (Balangero, North Italy) | Subject-fit review, then canonical hero |
| `wiki/sources/sadee2022-erbil-vegetables.md` | Determination of trace metals in vegetables using ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/sadee2023-arsenic-speciation-vegetables.md` | Toxicity, arsenic speciation and characteristics of hyphenated techniques used for arsenic determination in vegetables. A review | Subject-fit review, then canonical hero |
| `wiki/sources/sadee2024-arsenic-speciation-marine-organisms-review.md` | Recent developments in speciation and determination of arsenic in marine organisms using different analytical techniques. A review | Subject-fit review, then canonical hero |
| `wiki/sources/sadeghi2021-tahini-heavy-metals-voltammetry.md` | Simultaneous determination of heavy metals in Tahini by anodic stripping voltammetry | Subject-fit review, then canonical hero |
| `wiki/sources/sadhya2023-india-food-heavy-metals-regulation.md` | Regulation in India of Heavy Metals in Food Items: A Critical Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/sadighara2021-food-organotin-review.md` | The organotin contaminants in food: Sources and methods for detection: A systematic review and meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation.md` | Multi-elemental risk assessment of various baby rice cereals: some cause for concern? | Subject-fit review, then canonical hero |

## Batch 157: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars.md` | Determination of Lead, Cadmium, Copper, and Zinc Content in Commercial Iranian Vinegars Using Stripping Chronopotentiometry | Subject-fit review, then canonical hero |
| `wiki/sources/saf2023-omw-fractions-uf-nf-agroecological.md` | Investigation of the agroecological applications of olive mill wastewater fractions from the ultrafiltration-nanofiltration process | Subject-fit review, then canonical hero |
| `wiki/sources/safwan2023-instant-soup-chicken-stock-jordan.md` | Assessment and health risk study of some heavy metals in instant soup and chicken stock products from Jordanian market | Subject-fit review, then canonical hero |
| `wiki/sources/saha2021-rangpur-aquifer-arsenic.md` | Arsenic geochemistry of the sediments of the shallow aquifer and its correlation with the groundwater, Rangpur, Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/saha2022-chromium-sources-remediation-editorial.md` | Special Issue: Hexavalent Chromium: Sources, Toxicity, and Remediation | Subject-fit review, then canonical hero |
| `wiki/sources/sahu2014-cosmetics-metals-india.md` | Heavy Metals in Cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/salaheldin2025-multimatrix-foods-egypt.md` | Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety | Subject-fit review, then canonical hero |
| `wiki/sources/salama2019-libya-honey-metals.md` | Determination of Physicochemical Properties and Toxic Heavy Metals Levels in Honey Samples from West of Libya | Subject-fit review, then canonical hero |
| `wiki/sources/salamone2025-antimony-iii-caco2-intestinal-cells.md` | Continuous exposure to low concentrations of antimony(III) induces inflammation, apoptosis, oxidative and endoplasmic reticulum stress in Caco-2 intestinal epithelial cells | Subject-fit review, then canonical hero |
| `wiki/sources/salawu2015-spinach-irrigation-metals.md` | Determination of some selected heavy metals in spinach and irrigated water from Samaru Area within Gusau Metropolis in Zamfara State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/saleem2025-nd-vegetables-hra.md` | Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables | Subject-fit review, then canonical hero |
| `wiki/sources/salehi2013-iran-isfahan-lenjanat-vegetables-cd-pb.md` | Accumulation of Cadmium and Lead in Soils and Vegetables of Lenjanat Region in Isfahan Province, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/salehipour2015-iran-isfahan-cereals-vegetables-metals.md` | Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/salem2024-tomato-remediated-soil-egypt.md` | Influence of the use of remediated soil and agricultural drainage water on the safety of tomato fruits | Subject-fit review, then canonical hero |
| `wiki/sources/salhotra2017-vegetables-fruits-heavy-metals.md` | Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State | Subject-fit review, then canonical hero |
| `wiki/sources/salim2024-cadmium-brassica-juncea-seedlings.md` | Cadmium (Cd) Induced Morpho-physiological Changes in Brassica juncea L. Seedlings | Subject-fit review, then canonical hero |
| `wiki/sources/saliu2024-cadmium-salt-removal-chitosan-nanosheets.md` | Electrocapacitive removal of Na and Cd ions from contaminated aqueous solution using Fe3O4-poly (3,4-ethylenedioxythiophene) poly(styrene sulfonate) modified chitosan nanosheets | Subject-fit review, then canonical hero |
| `wiki/sources/sallam2025-olive-oil-libya-traditional-modern.md` | Traditional vs. Modern Olive Oil Extraction in Libya: A Comparative Study of Fatty Acids and Heavy Metal Contamination | Subject-fit review, then canonical hero |
| `wiki/sources/salles2023-face-paints-pancakes-brazil-cancer-risk.md` | Potentially Toxic Elements in Costume Cosmetics Used by Children and Adults Are Associated with Cancer Risk | Subject-fit review, then canonical hero |
| `wiki/sources/salmani2023-herbal-teas-metals-review.md` | Comparison of Essential and Toxic Metals Levels in some Herbal Teas: a Systematic Review | Subject-fit review, then canonical hero |
| `wiki/sources/samitha2021-pineapple-kerala-heavy-metals.md` | Monitoring Heavy Metal Contamination in the Pineapple (Ananas comosus) Cultivated tracts of Kerala, India | Subject-fit review, then canonical hero |
| `wiki/sources/samma2024-bangladesh-vegetable-metals.md` | Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach | Subject-fit review, then canonical hero |
| `wiki/sources/samr2012-gb-28480-adornments.md` | GB 28480-2012 饰品 有害元素限量的规定 | Subject-fit review, then canonical hero |
| `wiki/sources/samr2020-gb-21027-student-articles.md` | GB 21027-2020 学生用品的安全通用要求 | Subject-fit review, then canonical hero |
| `wiki/sources/samsidar2023-ultisol-soil-metal-fertility.md` | X-Ray Fluorescence Monitoring Metal Content and Nutrient Elements for Predicting Soil Fertility Parameters Based on pH in Ultisol Soil | Subject-fit review, then canonical hero |

## Batch 158: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/samsiyah2019-indonesia-salt-lead.md` | The Quality of Indonesia Salt: Study of Heavy Metal Lead (Pb) Levels in the Salt | Subject-fit review, then canonical hero |
| `wiki/sources/samuel2020-palm-oil-metals-nigeria.md` | Variations on the physiochemical, microbiological and selected heavy metals of different palm oil samples sourced from Galadima, Tarauni, Sabon-Gari, Yan-Kura of Kano State and samples from Kogi and Edo States of Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/sandil2023-arsenic-bean-lettuce.md` | Arsenic uptake and accumulation in bean and lettuce plants at different developmental stages | Subject-fit review, then canonical hero |
| `wiki/sources/santos2017-yerba-mate-metals.md` | Arsenic, cadmium and lead concentrations in Yerba mate commercialized in Southern Brazil by inductively coupled plasma mass spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp.md` | Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/saraiva2021-chromium-speciation-milk-meat-cooking-france.md` | Chromium speciation analysis in raw and cooked milk and meat samples by species-specific isotope dilution and HPLC-ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta.md` | Development and validation of a single run method based on species specific isotope dilution and HPLC-ICP-MS for simultaneous species interconversion correction and speciation analysis of Cr(III)/Cr(VI) in meat and dairy products | Subject-fit review, then canonical hero |
| `wiki/sources/sargsyan2024-rapid-market-spice-lead.md` | Rapid Market Screening to assess lead concentrations in consumer products across 25 low- and middle-income countries | Subject-fit review, then canonical hero |
| `wiki/sources/sarkar2022-kathmandu-drinking-water.md` | Drinking Water Quality and Public Health in the Kathmandu Valley, Nepal: Coliform Bacteria, Chemical Contaminants, and Health Status of Consumers | Subject-fit review, then canonical hero |
| `wiki/sources/sarker2022-bangladesh-food-webs-review.md` | Heavy metals contamination and associated health risks in food webs — a review focuses on food safety and environmental sustainability in Bangladesh | Subject-fit review, then canonical hero |
| `wiki/sources/sarkis2025-heavy-metals-yogurt-lebanon.md` | Heavy Metal Contamination in Yogurt from Lebanon: Evaluating Lead (Pb) and Cadmium (Cd) Concentrations Across Multiple Regions | Subject-fit review, then canonical hero |
| `wiki/sources/satarug2025-cadmium-risk-assessment-review.md` | Challenges in Toxicological Risk Assessment of Environmental Cadmium Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/sativa2024-heavy-metals-and-potential-health-risk-assessment.md` | Heavy metals and potential health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/sattler2016-bee-pollen-metals.md` | Essential minerals and inorganic contaminants (barium, cadmium, lithium, lead and vanadium) in dried bee pollen produced in Rio Grande do Sul State, Brazil | Subject-fit review, then canonical hero |
| `wiki/sources/savic2015-clear-orange-juice-minerals.md` | The Presence of Minerals in Clear Orange Juices | Subject-fit review, then canonical hero |
| `wiki/sources/savic2019-serbian-spices-minerals.md` | Determination of the mineral content of spices by ICP-OES | Subject-fit review, then canonical hero |
| `wiki/sources/sawadogo2023-burkina-faso-packaged-water-metals.md` | Transfer of bisphenol A and trace metals from plastic packaging to mineral water in Ouagadougou, Burkina Faso | Subject-fit review, then canonical hero |
| `wiki/sources/sawe2023-fish-metals-lake-manyara-tanzania.md` | Assessment of Potentially Toxic Metals in Fish from Lake Manyara, Northern Tanzania | Subject-fit review, then canonical hero |
| `wiki/sources/scaccabarozzi2020-cacao-soil-cd-peru.md` | Soil, Site, and Management Factors Affecting Cadmium Concentrations in Cacao-Growing Soils | Subject-fit review, then canonical hero |
| `wiki/sources/sccs2012-zinc-oxide-nano-opinion-1489-12.md` | Opinion on Zinc oxide (nano form), COLIPA S 76 | Subject-fit review, then canonical hero |
| `wiki/sources/sccs2014-titanium-dioxide-nano-opinion-1516-13.md` | Opinion on Titanium Dioxide (nano form), COLIPA S 75 (SCCS/1516/13) | Subject-fit review, then canonical hero |
| `wiki/sources/sccs2014-zinc-oxide-nano-addendum-1518-13.md` | Addendum to the Opinion SCCS/1489/12 on Zinc oxide (nano form), COLIPA S 76 (SCCS/1518/13) | Subject-fit review, then canonical hero |
| `wiki/sources/sccs2023-hydroxyapatite-nano-opinion.md` | SCCS Opinion on Hydroxyapatite (nano), SCCS/1648/22 | Subject-fit review, then canonical hero |
| `wiki/sources/sccs2023-notes-of-guidance-cosmetic-ingredients-v12.md` | The SCCS Notes of Guidance for the Testing of Cosmetic Ingredients and Their Safety Evaluation, 12th Revision (SCCS/1647/22) | Subject-fit review, then canonical hero |
| `wiki/sources/sccs2024-titanium-dioxide-scientific-advice-1661-23.md` | Scientific Advice on Titanium dioxide (TiO2) (CAS/EC numbers 13463-67-7/236-675-5, 1317-70-0/215-280-1, 1317-80-2/215-282-2) (SCCS/1661/23) | Subject-fit review, then canonical hero |

## Batch 159: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/sccs2025-methyl-salicylate-children-exposure-1676-25.md` | SCCS Scientific Advice on children's exposure to Methyl Salicylate (methyl 2-hydroxybenzoate) — revision of SCCS/1654/23 (SCCS/1676/25) | Subject-fit review, then canonical hero |
| `wiki/sources/schade2010-toxic-toys-r-us-pvc.md` | Toxic Toys "R" Us: PVC Toxic Chemicals in Toys and Packaging — A Report to the National Commission of Inquiry into Toxic Toys | Subject-fit review, then canonical hero |
| `wiki/sources/schaefer2020-cadmium-mitigation-strategies.md` | Cadmium: Mitigation strategies to reduce dietary exposure | Subject-fit review, then canonical hero |
| `wiki/sources/schafer1984-tin-toxic-heavy-metal-review.md` | Tin — A Toxic Heavy Metal? A Review of the Literature | Subject-fit review, then canonical hero |
| `wiki/sources/scheer2017-aluminium-tolerable-intake-toys.md` | Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys | Subject-fit review, then canonical hero |
| `wiki/sources/scher2010-toy-migration-limits-opinion.md` | Evaluation of the Migration Limits for Chemical Elements in Toys (SCHER Opinion) | Subject-fit review, then canonical hero |
| `wiki/sources/schett1998-hsp70-hsf1-rheumatoid-synovial.md` | Enhanced Expression of Heat Shock Protein 70 (hsp70) and Heat Shock Factor 1 (HSF1) Activation in Rheumatoid Arthritis Synovial Tissue: Differential Regulation of hsp70 Expression and HSF1 Activation in Synovial Fibroblasts by Proinflammatory Cytokines, Shear Stress, and Antiinflammatory Drugs | Subject-fit review, then canonical hero |
| `wiki/sources/schilsky1989-hepatocellular-copper-toxicity-zinc.md` | Hepatocellular Copper Toxicity and Its Attenuation by Zinc | Subject-fit review, then canonical hero |
| `wiki/sources/schmidt2015-arsenic-infancy-commentary.md` | Arsenic Exposure in Infancy: Estimating the Contributions of Well Water and Human Milk | Subject-fit review, then canonical hero |
| `wiki/sources/schneider2018-inorganic-uv-filters-zno-tio2.md` | A review of inorganic UV filters zinc oxide and titanium dioxide | Subject-fit review, then canonical hero |
| `wiki/sources/schoof2007-seafood-arsenic-speciation.md` | Variation of total and speciated arsenic in commonly consumed fish and seafood | Subject-fit review, then canonical hero |
| `wiki/sources/schoofs2024-zinc-toxicity-upper-intake.md` | Zinc Toxicity: Understanding the Limits | Subject-fit review, then canonical hero |
| `wiki/sources/schuttelaar2018-eden-metal-contact-allergy.md` | Prevalence of contact allergy to metals in the European general population with a focus on nickel and piercings: The EDEN Fragrance Study | Subject-fit review, then canonical hero |
| `wiki/sources/science2025-dynamics-of-sulfate-reduction-regulate-arsenic.md` | Dynamics of sulfate reduction regulate arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/scott2025-brown-white-rice-arsenic.md` | Arsenic content and exposure in brown rice compared to white rice in the United States | Subject-fit review, then canonical hero |
| `wiki/sources/scovronick2025-glynn-county-exposure.md` | Assessment of human exposure to uncommon industrial toxicants in Glynn County, Georgia | Subject-fit review, then canonical hero |
| `wiki/sources/scutarasu2023-heavy-metals-foods-beverages.md` | Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods | Subject-fit review, then canonical hero |
| `wiki/sources/sears2013-chelation-heavy-metal-detoxification-review.md` | Chelation: Harnessing and Enhancing Heavy Metal Detoxification — A Review | Subject-fit review, then canonical hero |
| `wiki/sources/seattle2022-classes-with-some-kind-of-exposure-component-while.md` | classes with some kind of exposure component, while also adding the topic of “diversity” into clinical skill | Subject-fit review, then canonical hero |
| `wiki/sources/see2025-malaysia-leafy-vegetables-icp-oes.md` | Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia | Subject-fit review, then canonical hero |
| `wiki/sources/seelen2023-methylmercury-dom-thiol.md` | Dissolved organic matter thiol concentrations determine methylmercury bioavailability across the terrestrial-marine aquatic continuum | Subject-fit review, then canonical hero |
| `wiki/sources/seesuan2025-des-edta-chromium-vi-colorimetric-sensor.md` | Deep Eutectic Solvent/EDTA-Based Colorimetric Sensor for Cr(VI) Detection in Water and Soil | Subject-fit review, then canonical hero |
| `wiki/sources/seifi2026-iran-toys-pb-cr-hg.md` | Investigation of the concentration of chemical compounds in toys | Subject-fit review, then canonical hero |
| `wiki/sources/sekar2021-alappuzha-groundwater-metals.md` | Evaluation of heavy metal contamination in coastal aquifer groundwater of Alappuzha district (Kerala, India) using OSPRC framework | Subject-fit review, then canonical hero |
| `wiki/sources/sekerak2016-wa-childrens-jewelry.md` | Cadmium and Other Metals in Children's Jewelry | Subject-fit review, then canonical hero |

## Batch 160: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits.md` | Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits | Subject-fit review, then canonical hero |
| `wiki/sources/senasa2008-rtcr409-fishery-contaminants.md` | Decreto Ejecutivo No. 34687-MAG: RTCR 409:2008 fishery and aquaculture product limits | Subject-fit review, then canonical hero |
| `wiki/sources/senior2017-wayne-groundwater-quality.md` | Baseline Assessment of Groundwater Quality in Wayne County, Pennsylvania, 2014 | Subject-fit review, then canonical hero |
| `wiki/sources/september2016-on-heavy-metals-in-the.md` | on Heavy Metals in the | Subject-fit review, then canonical hero |
| `wiki/sources/sepulveda2020-callista-clam-metals.md` | Trace metals in two wild populations of the squalid callista clam (Megapitaria squalida) in the southeastern Gulf of California, Mexico | Subject-fit review, then canonical hero |
| `wiki/sources/seregin2023-phytochelatins-sulfur-metal-chelating.md` | Phytochelatins: Sulfur-Containing Metal(loid)-Chelating Ligands in Plants | Subject-fit review, then canonical hero |
| `wiki/sources/serrano2024-p-loaded-biochar-phytoremediation.md` | Phosphorus-Loaded Biochar-Assisted Phytoremediation to Immobilize Cadmium, Chromium, and Lead in Soils | Subject-fit review, then canonical hero |
| `wiki/sources/serreau2024-pollutants-breast-milk-scoping-review.md` | Pollutants in Breast Milk: A Scoping Review of the Most Recent Data in 2024 | Subject-fit review, then canonical hero |
| `wiki/sources/seyfferth2024-spinach-cd-pb-review.md` | Mitigating Toxic Metal Exposure Through Leafy Greens: A Comprehensive Review Contrasting Cadmium and Lead in Spinach | Subject-fit review, then canonical hero |
| `wiki/sources/seyfferth2025-rice-water-management-as-hg-cd.md` | Concentrations and Health Implications of As, Hg, and Cd and Micronutrients in Rice and Emissions of CH4 From Variably Flooded Paddies | Subject-fit review, then canonical hero |
| `wiki/sources/sfa2026-food-regulations-heavy-metals.md` | Food Regulations: regulation 31 heavy metals, arsenic and lead | Subject-fit review, then canonical hero |
| `wiki/sources/sgs2009-canada-toy-coating-heavy-metals.md` | Canada Publishes Legislated Heavy Metal Requirements for Toys Containing Surface Coating Materials | Subject-fit review, then canonical hero |
| `wiki/sources/shaalan2024-nile-tilapia-heavy-metals-egypt.md` | Hazardous effects of heavy metal pollution on Nile tilapia in the aquatic ecosystem of the Eastern Delta in Egypt | Subject-fit review, then canonical hero |
| `wiki/sources/shah2013-medicinal-plants-metals-pakistan.md` | Comparative Study of Heavy Metals in Soil and Selected Medicinal Plants | Subject-fit review, then canonical hero |
| `wiki/sources/shah2025-commercial-turmeric-lead-chromium.md` | Heavy Metal Contamination in Commercial Turmeric: A Public Health Perspective | Subject-fit review, then canonical hero |
| `wiki/sources/shahim2019-chromium-fet-sensor.md` | Multiplexed Ultra-Sensitive Detection of Cr(III) and Cr(VI) Ion by FET Sensor Array in a Liquid Medium | Subject-fit review, then canonical hero |
| `wiki/sources/shahzad2025-buffalo-milk-trace-metals.md` | Assessment of hazardous trace metals and associated health risk as affected by feed intake in buffalo milk | Subject-fit review, then canonical hero |
| `wiki/sources/shalev2022-peptide-metal-nmr-review.md` | Studying Peptide-Metal Ion Complex Structures by Solution-State NMR | Subject-fit review, then canonical hero |
| `wiki/sources/shaltout2020-meat-products-pb-cd-nitrite-egypt.md` | Prevalence of Some Chemical Hazards in Some Meat Products | Subject-fit review, then canonical hero |
| `wiki/sources/shamkhi2021-wastewater-adsorbents-review.md` | Heavy Metals (Pb+2, Ni+2, Zn+2) Removal from Wastewater Using Low Cost Adsorbents: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/shamsani2019-instant-noodles-heavy-metals-malaysia.md` | Heavy Metals (Pb, Cd, As) Content in Instant Noodles From Malaysian Market | Subject-fit review, then canonical hero |
| `wiki/sources/shamsher2022-aloe-zinc-adsorption.md` | Efficacy Of Aloe Vera Powder in Bioremediation of Heavy Metals from Waste Water | Subject-fit review, then canonical hero |
| `wiki/sources/shar2026-sunflower-seeds-heavy-metals.md` | Environmental Assessment of Heavy Metal Uptake and Accumulation in Sunflower Seeds | Subject-fit review, then canonical hero |
| `wiki/sources/sharafatichaleshtori2016-iran-rice-heavy-metals-review.md` | A review of heavy metals in rice (Oryza sativa) of Iran | Subject-fit review, then canonical hero |
| `wiki/sources/sharafi2019-iran-tehran-rice-brands-metals.md` | Human health risk assessment for some toxic metals in widely consumed rice brands (domestic and imported) in Tehran, Iran: Uncertainty and sensitivity analysis | Subject-fit review, then canonical hero |

## Batch 161: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/sharafi2023-iran-breast-milk-metals.md` | Human health risk assessment of potentially toxic elements in the breast milk consumed by infants in Western Iran | Subject-fit review, then canonical hero |
| `wiki/sources/sharafi2026-nahavand-soil-water-crop-metals.md` | Soil–water–crop pathways of heavy metal contamination and human health risks in intensive smallholder farms of the Nahavand Plain, Iran | Subject-fit review, then canonical hero |
| `wiki/sources/sharma2016-spinach-wastewater-metals.md` | Heavy metals in vegetables: screening health risks involved in cultivation along wastewater drain and irrigating with wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/sharma2023-phytoremediation-heavy-metal-soil.md` | Phytoremediation technologies and their mechanism for removal of heavy metal from contaminated soil: An approach for a sustainable environment | Subject-fit review, then canonical hero |
| `wiki/sources/shaughnessy2023-sugar-kelp-new-england-metals.md` | Evidence of elevated heavy metals concentrations in wild and farmed sugar kelp (Saccharina latissima) in New England | Subject-fit review, then canonical hero |
| `wiki/sources/shavali-gilani2025-canned-tomato-olive-pickle-iran.md` | Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers | Subject-fit review, then canonical hero |
| `wiki/sources/shawahna2023-breastmilk-cadmium-levels-and-estimated.md` | Breastmilk cadmium levels and estimated | Subject-fit review, then canonical hero |
| `wiki/sources/shchukin2018-brown-algae-metals.md` | Comparative analysis of the content of heavy metals, aluminum, and arsenic in brown algae of various origins | Subject-fit review, then canonical hero |
| `wiki/sources/shchukin2022-mint-products-heavy-metals.md` | Evaluation of Elemental Impurities in Peppermint Herb and Peppermint-Based Herbal Products | Subject-fit review, then canonical hero |
| `wiki/sources/shearston2024-tampon-metalloids.md` | Tampons as a source of exposure to metal(loid)s | Subject-fit review, then canonical hero |
| `wiki/sources/sheikh2025-spinach-biochar-cadmium.md` | Minimization of cadmium toxicity and improvement in growth and biochemical attributes of spinach by using acidified biochar | Subject-fit review, then canonical hero |
| `wiki/sources/sher2025-antibiotic-resistance-shewanella-review.md` | Characterization of Antibiotic Resistance in Shewanella Species: An Emerging Pathogen in Clinical and Environmental Settings | Subject-fit review, then canonical hero |
| `wiki/sources/shi2020-rice-based-infant-food-cadmium-arsenic.md` | Avoiding Rice-Based Cadmium and Inorganic Arsenic in Infant Diets Through Selection of Products Low in Concentration of These Contaminants | Subject-fit review, then canonical hero |
| `wiki/sources/shi2020-rice-grain-cadmium-global-supply-chain.md` | Rice Grain Cadmium Concentrations in the Global Supply-Chain | Subject-fit review, then canonical hero |
| `wiki/sources/shi2022-sulfur-as-cd-wheat.md` | Sulfur reduces arsenic and cadmium translocation from root to shoot in wheat by regulating vacuolar sequestration | Subject-fit review, then canonical hero |
| `wiki/sources/shi2023-leersia-crvi-cwmfc.md` | Effect of External Aeration on Cr (VI) Reduction in the Leersia hexandra Swartz Constructed Wetland-Microbial Fuel Cell System | Subject-fit review, then canonical hero |
| `wiki/sources/shibata2016-arsenic-rice-cereal-risk-assessment-us.md` | Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S. | Subject-fit review, then canonical hero |
| `wiki/sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel.md` | Mercury and Fatty Acids in Canned Tuna, Salmon, and Mackerel | Subject-fit review, then canonical hero |
| `wiki/sources/shimoda2010-commercial-hijiki-arsenic-speciation.md` | Speciation Analysis of Arsenics in Commercial Hijiki by High Performance Liquid Chromatography-tandem-mass Spectrometry and High Performance Liquid Chromatography-inductively Coupled Plasma Mass Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/shin2004-disposable-diaper-heavy-metals.md` | Hazardous substance analysis of disposable diaper for infant | Subject-fit review, then canonical hero |
| `wiki/sources/shin2009-womens-sanitary-products-metals.md` | Determination of Heavy Metals in Sanitary Products of Women | Subject-fit review, then canonical hero |
| `wiki/sources/shindoh2010-cadmium-soy-sauce-miso-processing.md` | Changes in Cadmium Content when Processing Soybean to Miso and Soy Sauce | Subject-fit review, then canonical hero |
| `wiki/sources/shine2015-sporobolomyces-pcs1-basidiomycete-metal-tolerance.md` | Phytochelatin synthase is required for tolerating metal toxicity in a basidiomycete yeast and is a conserved factor involved in metal homeostasis in fungi | Subject-fit review, then canonical hero |
| `wiki/sources/shirani2017-iran-mashhad-rice-metals.md` | Concentration of heavy metals in Iranian market rice and associated population health risk | Subject-fit review, then canonical hero |
| `wiki/sources/shotyk2005-pristine-groundwater-antimony-scandium.md` | Natural abundance of Sb and Sc in pristine groundwaters, Springwater Township, Ontario, Canada, and implications for tracing contamination from landfill leachates | Subject-fit review, then canonical hero |

## Batch 162: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/shotyk2006-antimony-arctic-snow-bottled-water-commentary.md` | Think before you drink: antimony contamination from Arctic snow to bottled water | Subject-fit review, then canonical hero |
| `wiki/sources/shotyk2006-bottled-water-antimony-pet.md` | Contamination of Canadian and European bottled waters with antimony from PET containers | Subject-fit review, then canonical hero |
| `wiki/sources/shotyk2007-lead-bottled-waters.md` | Lead in bottled waters: contamination from glass and comparison with pristine groundwater | Subject-fit review, then canonical hero |
| `wiki/sources/shotyk2007-pet-antimony-storage.md` | Contamination of Bottled Waters with Antimony Leaching from Polyethylene Terephthalate (PET) Increases upon Storage | Subject-fit review, then canonical hero |
| `wiki/sources/shu2023-china-port-seafood-organotins.md` | Characteristics, sources and health risks of organotin compounds in marine organisms from the seas adjacent to the eastern ports of China | Subject-fit review, then canonical hero |
| `wiki/sources/shue2012-bivalves-tapeng-taiwan.md` | Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan | Subject-fit review, then canonical hero |
| `wiki/sources/shukla2020-honey-prayagraj-metals.md` | Melissopalynological and physicochemical analysis of honey samples from Prayagraj District, Uttar Pradesh | Subject-fit review, then canonical hero |
| `wiki/sources/shumba2025-tilapia-mercury-zambia-mining.md` | Assessment of total mercury (Hg) in soil, sediment, and tilapia fish (Oreochromis niloticus) and health risk assessment among residents of Kitwe mining area, Zambia | Subject-fit review, then canonical hero |
| `wiki/sources/si2024-nanomaterial-detection-heavy-metals-food.md` | Research progress in the detection of trace heavy metal ions in food samples | Subject-fit review, then canonical hero |
| `wiki/sources/siegel2022-appalachian-groundwater-arsenic.md` | Natural and Anthropogenic Processes Affecting Domestic Groundwater Quality within the Northwestern Appalachian Basin | Subject-fit review, then canonical hero |
| `wiki/sources/sigauke2024-spent-bleaching-earth-review.md` | Spent Bleaching Earth: Synthesis, Properties, Characterisation, and Application | Subject-fit review, then canonical hero |
| `wiki/sources/signes-pastor2016-iAs-rice-iberian-peninsula.md` | Geographical variation in inorganic arsenic in paddy field samples and commercial rice from the Iberian Peninsula | Subject-fit review, then canonical hero |
| `wiki/sources/signes-pastor2016-inorganic-arsenic-rice-products-infants.md` | Inorganic arsenic in rice-based products for infants and young children | Subject-fit review, then canonical hero |
| `wiki/sources/signes-pastor2017-infant-arsenic-rice-weaning.md` | Levels of infants' urinary arsenic metabolites related to formula feeding and weaning with rice products exceeding the EU inorganic arsenic standard | Subject-fit review, then canonical hero |
| `wiki/sources/signes-pastor2017-urinary-arsenic-speciation-children-pregnant-women-spain.md` | Urinary Arsenic Speciation in Children and Pregnant Women from Spain | Subject-fit review, then canonical hero |
| `wiki/sources/signes-pastor2018-infants-dietary-arsenic-solid-food.md` | Infants' dietary arsenic exposure during transition to solid food | Subject-fit review, then canonical hero |
| `wiki/sources/signes-pastor2022-arsenic-respiratory-children-spain.md` | Arsenic exposure and respiratory outcomes during childhood in the INMA study | Subject-fit review, then canonical hero |
| `wiki/sources/signes-pastor2022-infant-elements-nhbcs.md` | Dietary Exposure to Essential and Non-essential Elements During Infants' First Year of Life in the New Hampshire Birth Cohort Study | Subject-fit review, then canonical hero |
| `wiki/sources/silva2022-total-mercury-baby-food.md` | Determination of total mercury in Spanish samples of baby food, fast food, and daily meal | Subject-fit review, then canonical hero |
| `wiki/sources/silva2023-rice-mycotoxins-ias-portugal.md` | Mycotoxins in Rice Correlate with Other Contaminants? A Pilot Study of the Portuguese Scenario and Human Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/silva2025-edible-oils-health-sustainability.md` | Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks | Subject-fit review, then canonical hero |
| `wiki/sources/silverberg2002-nickel-hypersensitivity-children.md` | Nickel contact hypersensitivity in children | Subject-fit review, then canonical hero |
| `wiki/sources/silvester2025-return-to-baseline-arsenic-concentrations-after-1-year.md` | Return to baseline arsenic concentrations after 1 year on | Subject-fit review, then canonical hero |
| `wiki/sources/sim2024-inorganic-arsenic-seaweed-hplc.md` | Determination of inorganic arsenic in seaweed, grain, grass silage, and insect protein by HPLC-ICP-MS using a design of experiments optimization approach | Subject-fit review, then canonical hero |
| `wiki/sources/simionov2023-danube-fish-seafood-pte-microplastics.md` | Human health risk assessment of potentially toxic elements and microplastics accumulation in products from the Danube River Basin fish market | Subject-fit review, then canonical hero |

## Batch 163: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/simmental2013-concentrations-of-toxic-heavy-metals-and-trace-elements.md` | Concentrations of toxic heavy metals and trace elements | Subject-fit review, then canonical hero |
| `wiki/sources/singaporehsa2007-acd-cosmetic-regulations.md` | Health Products (Cosmetic Products - ASEAN Cosmetic Directive) Regulations 2007 | Subject-fit review, then canonical hero |
| `wiki/sources/singaporehsa2024-cosmetic-product-safety-advisory.md` | Advisory for Suppliers: Assessing the Safety and Quality of Cosmetic Products | Subject-fit review, then canonical hero |
| `wiki/sources/singh2010-heavy-metals-and-living-systems-an-overview.md` | Heavy metals and living systems: An overview | Subject-fit review, then canonical hero |
| `wiki/sources/singh2019-tampon-use-environmental-chemicals-and-oxidative-stress-in.md` | Tampon use, environmental chemicals and oxidative stress in the BioCycle study | Subject-fit review, then canonical hero |
| `wiki/sources/singh2020-zambia-wild-mushrooms-metals.md` | Quantification of Heavy Metal Accumulation in Edible Wild-Mushrooms in Copperbelt and Western Provinces of Zambia | Subject-fit review, then canonical hero |
| `wiki/sources/singhato2025-thailand-seafood-heavy-metals.md` | Risk Assessment of Toxic Heavy Metal Exposure in Selected Seafood Species from Thailand | Subject-fit review, then canonical hero |
| `wiki/sources/sipahi2014-toxic-metals-infant-formulas-turkey.md` | Safety assessment of essential and toxic metals in infant formulas | Subject-fit review, then canonical hero |
| `wiki/sources/siregar2025-australian-brown-macroalgae-arsenic.md` | Distribution of Water-Soluble Arsenic Species in the Sub-thallus of Australian Brown Macroalgae | Subject-fit review, then canonical hero |
| `wiki/sources/siric2019-croatia-cultivated-mushrooms-metals.md` | Heavy metals concentrations in cultivated mushroom species | Subject-fit review, then canonical hero |
| `wiki/sources/sirisangarunroj2023-thai-fish-toxic-elements.md` | Toxic Heavy Metals and Their Risk Assessment of Exposure in Selected Freshwater and Marine Fish in Thailand | Subject-fit review, then canonical hero |
| `wiki/sources/sitarik2020-fetal-postnatal-lead-gut-microbiota.md` | Fetal and early postnatal lead exposure measured in teeth associates with infant gut microbiota | Subject-fit review, then canonical hero |
| `wiki/sources/sitek2022-cd-toxicity-antioxidant-vitamins.md` | The role of antioxidant vitamins in cadmium toxicity prevention | Subject-fit review, then canonical hero |
| `wiki/sources/sixto2023-potatoes-sweet-potatoes-metals.md` | Inorganic contaminants (As, Cd, Pb) in peeled and whole potatoes and sweet potatoes | Subject-fit review, then canonical hero |
| `wiki/sources/skin2010-significant-risks-for-dermal-oral-lead-exposures-despite.md` | Handwipe Method for Removing Lead from Skin | Subject-fit review, then canonical hero |
| `wiki/sources/slepecka2017-ecological-cereal-heavy-metals-poland.md` | Evaluation of cadmium, lead, zinc and copper levels in selected ecological cereal food products and their non-ecological counterparts | Subject-fit review, then canonical hero |
| `wiki/sources/smajgl2015-tin-baby-diapers-croatia.md` | Occurrence of tin in disposable baby diapers | Subject-fit review, then canonical hero |
| `wiki/sources/smolikova2016-heavy-metals-fish-czech.md` | Determination of heavy metals in fish products | Subject-fit review, then canonical hero |
| `wiki/sources/soares2000-chromium-vi-powdered-milk-formulas.md` | Selective Determination of Chromium (VI) in Powdered Milk Infant Formulas by Electrothermal Atomization Atomic Absorption Spectrometry after Ion Exchange | Subject-fit review, then canonical hero |
| `wiki/sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran.md` | Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices | Subject-fit review, then canonical hero |
| `wiki/sources/sochacka2025-spirulina-chlorella-supplements-poland.md` | Spirulina and Chlorella Dietary Supplements—Are They a Source Solely of Valuable Nutrients? | Subject-fit review, then canonical hero |
| `wiki/sources/sofyan2023-banana-steamed-cake-metals-indonesia.md` | Uji Cemaran Mikroba Dan Cemaran Logam Bolu Kukus Berbasis Pisang Ambon (Musa acuminta Colla) Sebagai Camilan Alternatif Pada Pasien Hipertensi | Subject-fit review, then canonical hero |
| `wiki/sources/solidum2013-metro-manila-junk-food-metals.md` | Quantitative Analysis of Lead, Cadmium and Chromium in Different Brands of Junk Food Marketed in Metro Manila, Philippines | Subject-fit review, then canonical hero |
| `wiki/sources/son2021-nakdong-weir-sediment-metals.md` | An Assessment of Heavy Metal Contamination in the Nakdong River Around the Weir | Subject-fit review, then canonical hero |
| `wiki/sources/song2017-china-dietary-cadmium-exposure.md` | Dietary cadmium exposure assessment among the Chinese population | Subject-fit review, then canonical hero |

## Batch 164: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/song2024-crvi-hplc-icpms-food-reduction.md` | Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods | Subject-fit review, then canonical hero |
| `wiki/sources/song2024-selenium-lactobacillus-cadmium.md` | Potential Protective Effect of Selenium-Enriched Lactobacillus plantarum on Cadmium-Induced Liver Injury in Mice | Subject-fit review, then canonical hero |
| `wiki/sources/soni2024-additives-contaminants-infant-foods-review.md` | Food additives and contaminants in infant foods: a critical review of their health risk, trends and recent developments | Subject-fit review, then canonical hero |
| `wiki/sources/sonke2023-mercury-global-change.md` | Global change effects on biogeochemical mercury cycling | Subject-fit review, then canonical hero |
| `wiki/sources/sosnowska2025-phage-display-peptide-copper-chemosensor.md` | Phage display technology in ecotoxicology: phage display derived unique peptide for copper identification in aquatic samples | Subject-fit review, then canonical hero |
| `wiki/sources/soto-ocana2024-metal-availability-early-life-microbiome.md` | Metal availability shapes early life microbial ecology and community succession | Subject-fit review, then canonical hero |
| `wiki/sources/sounigo2023-climaloca-cocoa-cadmium.md` | ClimaLOCA project: Fostering innovations for cadmium reduction in cocoa beans in Latin America | Subject-fit review, then canonical hero |
| `wiki/sources/source2021-characteristics-and-treatment-of-elemental-mercury.md` | Characteristics and treatment of elemental mercury | Subject-fit review, then canonical hero |
| `wiki/sources/source2024-.md` | САДОВОДСТВО, ОВОЩЕВОДСТВО, ВИНОГРАДАРСТВО И ЛЕКАРСТВЕННЫЕ КУЛЬТУРЫ | Subject-fit review, then canonical hero |
| `wiki/sources/source2025-breeding-seed-production-and-plant-biotechnology.md` | BREEDING, SEED PRODUCTION AND PLANT BIOTECHNOLOGY | Subject-fit review, then canonical hero |
| `wiki/sources/sources1990-heavy-metals-in-air-soil-and.md` | Heavy Metals in Air, Soil, and | Subject-fit review, then canonical hero |
| `wiki/sources/sources2026-heavy-metals-in-air-soil-and.md` | Heavy Metals in Air, Soil and | Subject-fit review, then canonical hero |
| `wiki/sources/souri2019-leafy-vegetables-growth-stage-metals.md` | Plant growth stage influences heavy metal accumulation in leafy vegetables of garden cress and sweet basil | Subject-fit review, then canonical hero |
| `wiki/sources/southafrica1988-gn-r1227-cosmetic-lead-mercury-prohibition.md` | Regulations prohibiting the use of any active or potentially active depigmenting ingredient, lead and its salts, mercury and its salts and the cosmetic category skin bleacher, skin lightener or skin whitener | Subject-fit review, then canonical hero |
| `wiki/sources/sowers2023-jarosite-pb-as-remediation.md` | Potassium jarosite seeding of soils decreases lead and arsenic bioaccessibility: A path toward concomitant remediation | Subject-fit review, then canonical hero |
| `wiki/sources/spallacci2025-bioinformatics-biomimetic-metal-peptide.md` | A bioinformatics approach to design minimal biomimetic metal-binding peptides | Subject-fit review, then canonical hero |
| `wiki/sources/spayd2012-importance-of-arsenic-speciation-in-populations-exposed-to.md` | Importance of Arsenic Speciation in Populations Exposed to Arsenic in Drinking Water | Subject-fit review, then canonical hero |
| `wiki/sources/spex2023-hot-sauce-chili-powder-metals.md` | Heavy Metal Contamination of Hot Sauce and Chili Powder | Subject-fit review, then canonical hero |
| `wiki/sources/spungen2019-fda-tds-children-lead-cadmium-2014-2016.md` | Children's exposures to lead and cadmium: FDA total diet study 2014-16 | Subject-fit review, then canonical hero |
| `wiki/sources/spungen2024-fda-tds-infant-lead-cadmium.md` | Infants' and young children's dietary exposures to lead and cadmium: FDA total diet study 2018-2020 | Subject-fit review, then canonical hero |
| `wiki/sources/srilanka2025-dsls-187-skin-powder-children.md` | Draft Sri Lanka Standard: Specification for Skin Powder for Children (Third Revision), DSLS 187 | Subject-fit review, then canonical hero |
| `wiki/sources/sripada2022-cadmium-interventions-lmics.md` | Interventions to reduce cadmium exposure in low- and middle-income countries during pregnancy and childhood: A systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/stahl2017-aluminum-food-contact-part1.md` | Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods | Subject-fit review, then canonical hero |
| `wiki/sources/stahl2023-us-river-fish-mercury.md` | Contaminants in fish from U.S. rivers: Probability-based national assessments | Subject-fit review, then canonical hero |
| `wiki/sources/stamatas2014-diaper-dermatitis-review.md` | Diaper dermatitis: etiology, manifestations, prevention, and management | Subject-fit review, then canonical hero |

## Batch 165: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/stanton2021-metallome-autism-spectrum-disorders.md` | The Metallome as a Link Between the Omes in Autism Spectrum Disorders | Subject-fit review, then canonical hero |
| `wiki/sources/stapleton2010-flame-retardants-baby-product-foam.md` | Identification of Flame Retardants in Polyurethane Foam Collected from Baby Products | Subject-fit review, then canonical hero |
| `wiki/sources/stark2019-east-bay-wild-edible-greens.md` | Open-source food: Nutrition, toxicology, and availability of wild edible greens in the East Bay | Subject-fit review, then canonical hero |
| `wiki/sources/starska2011-noxious-elements-milk-products-poland.md` | Noxious Elements in Milk and Milk Products in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/stasinos2014-heavy-metals-tubers-review.md` | The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/state2021-health-risk-evaluation-of-selected-heavy-metals-in.md` | Health Risk Evaluation of Selected Heavy Metals in Infant Nutrition Formula in Cross | Subject-fit review, then canonical hero |
| `wiki/sources/stauber1994-percutaneous-absorption-inorganic-lead.md` | Percutaneous absorption of inorganic lead compounds | Subject-fit review, then canonical hero |
| `wiki/sources/stefaniak2014-ni-be-cr-artificial-sweat.md` | Dissolution of the metal sensitizers Ni, Be, Cr in artificial sweat to improve estimates of dermal bioaccessibility | Subject-fit review, then canonical hero |
| `wiki/sources/stefanowicz2016-ecotoxicology-2016-25-80-90.md` | Ecotoxicology (2016) 25:80–90 | Subject-fit review, then canonical hero |
| `wiki/sources/steigner2024-marketing-for-tableware.md` | Marketing for Tableware | Subject-fit review, then canonical hero |
| `wiki/sources/steinemann2020-car-air-freshener-vocs.md` | Volatile Chemical Emissions from Car Air Fresheners | Subject-fit review, then canonical hero |
| `wiki/sources/stevens2017-fish-scale-lead-zinc-removal.md` | Environmentally Friendly and Cheap Removal of Lead (II) and Zinc (II) from Wastewater with Fish Scales Waste Remains | Subject-fit review, then canonical hero |
| `wiki/sources/stone2012-wa-qapp-formaldehyde-voc-metals-childrens-products.md` | Quality Assurance Project Plan: Formaldehyde, Volatile Organic Compounds and Metals in Children's Products | Subject-fit review, then canonical hero |
| `wiki/sources/stone2012-wa-qapp-parabens-metals-childrens-cosmetics.md` | Quality Assurance Project Plan: Parabens and Metals in Children's Cosmetic and Personal Care Products | Subject-fit review, then canonical hero |
| `wiki/sources/stone2012-wa-qapp-phthalates-metals-childrens-products.md` | Quality Assurance Project Plan: Phthalates and Metals in Children's Products | Subject-fit review, then canonical hero |
| `wiki/sources/stone2012-wa-qapp-phthalates-metals-packaging.md` | Quality Assurance Project Plan: Phthalates and Metals in Packaging from Consumer and Children's Products | Subject-fit review, then canonical hero |
| `wiki/sources/stone2021-wa-metals-childrens-consumer-products.md` | Metals in Children's and Consumer Products and Packaging | Subject-fit review, then canonical hero |
| `wiki/sources/stringer2001-greenpeace-pvc-children-products.md` | Toxic chemicals in a child's world: an investigation into PVC plastic products | Subject-fit review, then canonical hero |
| `wiki/sources/su2020-infant-formula-china-toxic-elements.md` | Content and Dietary Exposure Assessment of Toxic Elements in Infant Formulas from the Chinese Market | Subject-fit review, then canonical hero |
| `wiki/sources/su2023-arsenic-brown-rice-benefits-risks.md` | Arsenic in brown rice: do the benefits outweigh the risks? | Subject-fit review, then canonical hero |
| `wiki/sources/subedi2022-fruit-juices-heavy-metals.md` | Determination of heavy metals in varieties of fresh and packaged fruit juices along with powdered fruit drink mixes in Kathmandu Valley | Subject-fit review, then canonical hero |
| `wiki/sources/subhanullah2024-panjkora-fish-metals.md` | The detrimental effects of heavy metals on tributaries exert pressure on water quality, Crossocheilus diplocheilus, and the well-being of human health | Subject-fit review, then canonical hero |
| `wiki/sources/sulaiman2022-exposure-assessment-of-methyl-mercury-from-consumption-of.md` | Exposure Assessment of methyl mercury from consumption of fish | Subject-fit review, then canonical hero |
| `wiki/sources/sule2026-gombe-drinking-water-metals.md` | Assessment of Carcinogenic and Non-carcinogenic Health Risks of Metals in the Drinking Water of Gombe Local Government Area, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/sultan2023-cookware-metal-leaching.md` | Assessing Leaching of Potentially Hazardous Elements from Cookware during Cooking: A Serious Public Health Concern | Subject-fit review, then canonical hero |

## Batch 166: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/sultana2022-dhaka-root-leafy-vegetables.md` | Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks | Subject-fit review, then canonical hero |
| `wiki/sources/sumalatha2019-bangalore-sludge-washing.md` | Removal of Heavy Metals from Industrial Sludge Using Soil Washing Technique | Subject-fit review, then canonical hero |
| `wiki/sources/sun2002-percutaneous-inorganic-lead.md` | Percutaneous absorption of inorganic lead compounds | Subject-fit review, then canonical hero |
| `wiki/sources/sun2022-china-cadmium-ptmi-rice.md` | Statement on Establishment of A Provisional Health Based Guidance Value for Dietary Exposure to Cadmium in China | Subject-fit review, then canonical hero |
| `wiki/sources/sun2023-biochar-rice-cadmium-field.md` | Effects of Biochar on the Cd Uptake by Rice and the Cd Fractions in Paddy Soil: A 3-Year Field Experiment | Subject-fit review, then canonical hero |
| `wiki/sources/sun2023-pb-leek-speciation-xanes.md` | Pb speciation and elemental distribution in leeks by micro X-ray fluorescence and X-ray absorption near-edge structure | Subject-fit review, then canonical hero |
| `wiki/sources/sun2024-libs-pb-soil.md` | LIBS detection of lead in contaminated soils | Subject-fit review, then canonical hero |
| `wiki/sources/sun2025-biochar-alginate-cadmium-lettuce.md` | Development and Application of a Modified Biochar-Calcium Alginate Composite (MB-CA) for In Situ Remediation of Cadmium-Contaminated Soil | Subject-fit review, then canonical hero |
| `wiki/sources/sund2026-saccharina-pte-processing.md` | Pulsed electric field processing as an alternative to warm water treatment for the reduction of potentially toxic elements in Saccharina latissima | Subject-fit review, then canonical hero |
| `wiki/sources/sunderland2013-future-trends-in-environmental-mercury.md` | Future trends in environmental mercury | Subject-fit review, then canonical hero |
| `wiki/sources/sundhar2023-gulf-mannar-seaweed-metals.md` | Effect of thermal processing on toxic heavy metals in edible seaweeds of Gulf of Mannar and their health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/suomi2023-finland-dietary-metals-cumulative.md` | Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults | Subject-fit review, then canonical hero |
| `wiki/sources/surface2012-when-citing-papers-from-this-publication-the-appropriate.md` | When citing papers from this publication, the appropriate citation includes the paper | Subject-fit review, then canonical hero |
| `wiki/sources/sushila2024-heavy-metals-human-milk-review.md` | Literature review and health risks assessment of heavy metal contamination in human milk | Subject-fit review, then canonical hero |
| `wiki/sources/suvarapu2016-atmospheric-heavy-metals-review.md` | Determination of heavy metals in the ambient atmosphere: A review | Subject-fit review, then canonical hero |
| `wiki/sources/suzuki2022-nano-mercury-seafood-exposure.md` | Presence of nano-sized mercury-containing particles in seafoods, and an estimate of dietary exposure | Subject-fit review, then canonical hero |
| `wiki/sources/swiercz2022-silver-fir-needle-trace-elements.md` | Changes in the Concentrations of Trace Elements and Supply of Nutrients to Silver Fir (Abies alba Mill.) Needles as a Bioindicator of Industrial Pressure over the Past 30 Years in Swietokrzyski National Park (Southern Poland) | Subject-fit review, then canonical hero |
| `wiki/sources/switzerland2026-vhk-metal-metalloid-limits.md` | Swiss VHK 817.022.15 consolidated 25 February 2026: metal and metalloid maximum levels | Subject-fit review, then canonical hero |
| `wiki/sources/swrcb-hexavalent-chromium-mcl-2024.md` | California Hexavalent Chromium Drinking-Water Maximum Contaminant Level Regulation (SWRCB-DDW-21-003) | Subject-fit review, then canonical hero |
| `wiki/sources/szcc2020-infant-powders-shenzhen-consumer-council.md` | 20款爽身粉测评 (Test of 20 infant powders by the Shenzhen Consumer Council), news report | Subject-fit review, then canonical hero |
| `wiki/sources/szymczykowska2026-matcha-elemental-composition.md` | Elemental Composition of Japanese Matcha Powder and Infusions—Potential Role as a Functional Food in Metabolic Health | Subject-fit review, then canonical hero |
| `wiki/sources/szynal2016-polish-ceramic-glassware-ni-cr.md` | Migration studies of nickel and chromium from ceramic and glass tableware into food simulants | Subject-fit review, then canonical hero |
| `wiki/sources/taghavi2023-saffron-soils-trace-elements.md` | Ecological risk assessment of trace elements (TEs) pollution and human health risk exposure in agricultural soils used for saffron cultivation | Subject-fit review, then canonical hero |
| `wiki/sources/taha2026-saudi-tea-metals.md` | Heavy metals in commercial tea brands in Saudi Arabia | Subject-fit review, then canonical hero |
| `wiki/sources/taher2023-biscuits-iraqi-markets.md` | Assessment of Heavy Metals in Biscuit Samples Available in Iraqi Markets | Subject-fit review, then canonical hero |

## Batch 167: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/taiwancoa2017-feed-import-phosphate-metals-draft.md` | Draft feed or feed additive import inspection rules | Subject-fit review, then canonical hero |
| `wiki/sources/taiwanmohw2024-prohibited-cosmetic-ingredients.md` | 化粧品禁止使用成分表 — 2024 amendment (衛授食字第1131601051號) | Subject-fit review, then canonical hero |
| `wiki/sources/tajdar-oranj2018-iran-instant-noodles-metals.md` | The concentration of heavy metals in noodle samples from Iran's market: probabilistic health risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/takanashi2018-aluminium-baking-powder-japan.md` | Survey of Aluminium Content of Processed Food Using Baking Powder (2015–2016) | Subject-fit review, then canonical hero |
| `wiki/sources/tamagno-freeman-2025-pb-glutamate.md` | Glutamate-Mediated Neural Alterations in Lead Exposure: Mechanisms, Pathways, and Phenotypes | Subject-fit review, then canonical hero |
| `wiki/sources/tamele2020-african-seafood-metals-review.md` | Lead, Mercury and Cadmium in Fish and Shellfish from the Indian Ocean and Red Sea (African Countries): Public Health Challenges | Subject-fit review, then canonical hero |
| `wiki/sources/tan2022-carbon-dots-cd-hg-food.md` | N-doped carbon dots fluorescence sensor for simultaneous detection of Cd2+ and Hg2+ in food samples | Subject-fit review, then canonical hero |
| `wiki/sources/tan2022-organic-fertilizer-rice-cd-arsenic.md` | Characteristics of Three Organic Fertilizers and Their Influence on the Mobility of Cadmium and Arsenic in a Soil-Rice (Oryza Sativa L.) System | Subject-fit review, then canonical hero |
| `wiki/sources/tandhanskul2025-kombucha-metabiotics-review.md` | Kombucha as a Sustainable Source of Metabiotics: Potential, Applications, and Future Perspectives | Subject-fit review, then canonical hero |
| `wiki/sources/tang2024-spent-mushroom-residue-soil-metals.md` | Responses of Crop Yield, Soil Fertility, and Heavy Metals to Spent Mushroom Residues Application | Subject-fit review, then canonical hero |
| `wiki/sources/taniguchi2024-chitosan-palladium-tin-recovery.md` | Selective Recovery of Palladium from Plating Wastewater Using Chitosan Nanofiber Hydrogels | Subject-fit review, then canonical hero |
| `wiki/sources/tantri2026-cadmium-agricultural-soil-indonesia.md` | Risk contamination Cadmium (Cd) in agricultural soil to national food security: An integrative study | Subject-fit review, then canonical hero |
| `wiki/sources/tarigan2016-factors-tin-released-canned-beverages.md` | Factors are Affecting Tin Released in Canned Beverages | Subject-fit review, then canonical hero |
| `wiki/sources/tasdivrik2025-drinking-water-heavy-metals-sivas-turkey.md` | Spatiotemporal variations in the levels of toxic elements in drinking water of Sivas, Türkiye, and an ecotoxicological risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/tatahmentan2020-rice-grains-elements.md` | Toxic and Essential Elements in Rice and Other Grains from the United States and Other Countries | Subject-fit review, then canonical hero |
| `wiki/sources/tatsuta2024-mehg-duplicate-diet-children-japan.md` | Dietary intake of methylmercury by 0–5 years children using the duplicate diet method in Japan | Subject-fit review, then canonical hero |
| `wiki/sources/tavakkoli2016-iran-cadmium-biomonitoring-review.md` | Environmental and occupational exposure to cadmium in Iran: a systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/tayeb2025-olive-corn-oil-iran-pb-cd.md` | Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis | Subject-fit review, then canonical hero |
| `wiki/sources/taylor2016-new-england-seaweed-arsenic.md` | Concentrations and speciation of arsenic in New England seaweed species harvested for food and agriculture | Subject-fit review, then canonical hero |
| `wiki/sources/taylor2019-pregnancy-diet-blood-lead-britain.md` | Dietary Patterns Are Not Consistently Associated with Variability in Blood Lead Concentrations in Pregnant British Women | Subject-fit review, then canonical hero |
| `wiki/sources/taylor2025-seafood-benefits-contaminants.md` | Seafood Benefits and Contaminants: A Comprehensive Review of Health Impacts, Safety Concerns, and Risk Mitigation Strategies | Subject-fit review, then canonical hero |
| `wiki/sources/technology2024-stability-of-arsenic-in-arsenic-containing-copper-slag.md` | stability of arsenic in arsenic-containing copper slag | Subject-fit review, then canonical hero |
| `wiki/sources/teferi2026-honey-ethiopia-kellem-wollega.md` | Assessment of Heavy Metal Contamination and Associated Health Risks in Honey from Kellem Wollega Zone, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/tekile2023-modjo-river-irrigation-chromium.md` | Suitability Assessment of Surface Water Quality for Irrigation: A Case Study of Modjo River, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/tesfaye2016-edible-oils-essential-metals-ethiopia.md` | Physico-Chemical Characteristics and Level of Some Selected Metal in Edible Oils | Subject-fit review, then canonical hero |

## Batch 168: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/thaimoph2020-notification-414-contaminants-food.md` | Notification of Ministry of Public Health (No. 414) B.E. 2563: Standards for Contaminants in Food | Subject-fit review, then canonical hero |
| `wiki/sources/thakur2024-darrang-groundwater-arsenic.md` | Groundwater hydrogeochemistry and potential health risk assessment through exposure to elevated arsenic in Darrang district of north bank plain of the Brahmaputra | Subject-fit review, then canonical hero |
| `wiki/sources/thirumoorthy2007-metallothionein-overview.md` | Metallothionein: An overview | Subject-fit review, then canonical hero |
| `wiki/sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review.md` | Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/thomas-2021-arsenic-methylation.md` | Arsenic Methylation — Lessons from Three Decades of Research | Subject-fit review, then canonical hero |
| `wiki/sources/thomas2011-methanoarchaea-antimony-methylation.md` | Connection between Multimetal(loid) Methylation in Methanoarchaea and Central Intermediates of Methanogenesis | Subject-fit review, then canonical hero |
| `wiki/sources/thomas2022-lead-game-meat-awareness.md` | Increasing the Awareness of Health Risks from Lead-Contaminated Game Meat Among International and National Human Health Organizations | Subject-fit review, then canonical hero |
| `wiki/sources/thomas2023-peru-cacao-cd-distribution.md` | The distribution of cadmium in soil and cacao beans in Peru | Subject-fit review, then canonical hero |
| `wiki/sources/thomas2024-lead-poisoning-ayurvedic-herbal.md` | Case of lead poisoning secondary to intake of herbal medicine for diabetes mellitus in a tertiary care hospital in Kerala | Subject-fit review, then canonical hero |
| `wiki/sources/tian2021-magnetic-purification-cadmium-lead-grain.md` | A rapid magnetic-based purification of Cd2+ and Pb2+ prior to portable electrochemical determination for grain | Subject-fit review, then canonical hero |
| `wiki/sources/tian2024-voltammetric-ias-rice.md` | Efficient voltammetric analysis for total inorganic arsenic detection in rice with enhanced sensitivity and selectivity | Subject-fit review, then canonical hero |
| `wiki/sources/tinggi2025-spices-herbs-queensland.md` | Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure | Subject-fit review, then canonical hero |
| `wiki/sources/tjandraatmadja2010-csiro-household-products-nutrients-elements.md` | Sources of contaminants in domestic wastewater: nutrients and additional elements from household products | Subject-fit review, then canonical hero |
| `wiki/sources/tjoa2023-peanut-choy-sum-nickel-laterite.md` | Nickel acquisition affected by root density of mono- and mixed-cropping peanut and choy sum | Subject-fit review, then canonical hero |
| `wiki/sources/tkachuk2024-sunflower-seeds-metals.md` | Ecological safety of sunflower seeds in the conditions of agricultural intensification | Subject-fit review, then canonical hero |
| `wiki/sources/toledo2024-essential-toxic-elements-infant-cereal-brazil.md` | Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/tolkou2023-fish-heavy-metals-review.md` | Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury in Fish: Effects on the Sustainable and Healthy Development of Aquatic Life and Human Consumers | Subject-fit review, then canonical hero |
| `wiki/sources/tomczyk2020-polish-honey-metal-transfer.md` | Transfer of some toxic metals from soil to honey depending on bee habitat conditions | Subject-fit review, then canonical hero |
| `wiki/sources/tonska2020-carrots-lead-cadmium-organic.md` | Lead and cadmium content in organic and conventional carrots and their dietary risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/tooba2026-silver-nanoparticle-mercury-colorimetric.md` | Silver Nanoparticle-Based Colorimetric Sensor for Mercury(II) Detection in Water | Subject-fit review, then canonical hero |
| `wiki/sources/torabi2024-persian-gulf-marine-fish-metals.md` | Health Risk Assessment of Heavy Metals in Marine Fish Caught from the Northwest Persian Gulf | Subject-fit review, then canonical hero |
| `wiki/sources/torovic2024-mercury-fish-oil-supplements-serbia.md` | Mercury Content in Fish Oil Food Supplements and Associated Health Risk | Subject-fit review, then canonical hero |
| `wiki/sources/torres2024-soap-detergent-heavy-metals-brazil.md` | Potentially Toxic Elements in Commercial Soap and Powder Detergent Samples | Subject-fit review, then canonical hero |
| `wiki/sources/tovar-sanchez2013-sunscreen-emerging-pollutants-coastal.md` | Sunscreen Products as Emerging Pollutants to Coastal Waters | Subject-fit review, then canonical hero |
| `wiki/sources/toxicslink2021-india-diaper-phthalates.md` | Phthalates or Phthalates-free Diaper: Money Matters | Subject-fit review, then canonical hero |

## Batch 169: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/tran2024-arsenic-cadmium-vietnamese-rice-qtl.md` | QTL mapping for grain mineral accumulation in a Vietnamese rice landrace collection | Subject-fit review, then canonical hero |
| `wiki/sources/tran2025-magnesium-chelation-peptides-brewer-yeast-soybean.md` | Magnesium chelation of low molecular weight peptides from protein-rich industrial wastes: Production and properties | Subject-fit review, then canonical hero |
| `wiki/sources/trandafir2012-tin-canned-foods-icp-ms.md` | Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/troeschel2024-cinnamon-applesauce-lead.md` | Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024 | Subject-fit review, then canonical hero |
| `wiki/sources/troncoso1988-metallic-contaminants-andalusian-vinegars.md` | Metallic contaminants in Andalusian vinegars | Subject-fit review, then canonical hero |
| `wiki/sources/trueman2022-seasonal-lead-drinking-water-aluminum-halifax.md` | Seasonal Lead Release into Drinking Water and the Effect of Aluminum | Subject-fit review, then canonical hero |
| `wiki/sources/trumbull2017-wa-childrens-seasonal-products-2014-2015.md` | Children's Seasonal Products Report 2014-2015 | Subject-fit review, then canonical hero |
| `wiki/sources/truzzi2020-insect-biomass-feed-metals.md` | A Chemically Safe Way to Produce Insect Biomass for Possible Application in Feed and Food Production | Subject-fit review, then canonical hero |
| `wiki/sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review.md` | Toxicological qualities and detoxification trends of fruit by-products for valorization: A review | Subject-fit review, then canonical hero |
| `wiki/sources/ttlegalaffairs2007-food-drugs-metal-limits.md` | Food and Drugs Act Chapter 30:01: food metal limits in regulations and fishery products schedule | Subject-fit review, then canonical hero |
| `wiki/sources/tu2025-peanut-biochar-lime-aluminum-remediation.md` | Synergistic effects of biochar-lime enhance acidic soil remediation and sustain peanut productivity under continuous cropping systems | Subject-fit review, then canonical hero |
| `wiki/sources/tuchman2015-nickel-dermatitis-children.md` | Nickel contact dermatitis in children | Subject-fit review, then canonical hero |
| `wiki/sources/tukai2002-sydney-macroalgae-arsenic-speciation.md` | Occurrence and chemical form of arsenic in marine macroalgae from the east coast of Australia | Subject-fit review, then canonical hero |
| `wiki/sources/tukur2012-pet-bottle-antimony-migration.md` | PET bottle use patterns and antimony migration into bottled water and soft drinks: the case of British and Nigerian bottles | Subject-fit review, then canonical hero |
| `wiki/sources/turner2017-antimony-plastic-products.md` | Field-portable XRF analysis reveals the ubiquity of antimony in plastic consumer products | Subject-fit review, then canonical hero |
| `wiki/sources/turner2018-secondhand-plastic-toys.md` | Concentrations and Migratabilities of Hazardous Elements in Second-Hand Children's Plastic toys | Subject-fit review, then canonical hero |
| `wiki/sources/tweij2018-carrot-cabbage-lead-cadmium.md` | Determination of lead and cadmium in carrots and cabbage available in local markets | Subject-fit review, then canonical hero |
| `wiki/sources/uc-peraza2022-yucatan-seafood-organotins.md` | Organotin contamination in seafood from the Yucatán Peninsula, Mexico: Is there a potential risk for the health of consumers? | Subject-fit review, then canonical hero |
| `wiki/sources/ucalgary2026-cpt-pearl-unauthorized-injectable-peptides.md` | Clinical Pharmacology & Toxicology Pearl of the Week — Unauthorized Injectable Peptides | Subject-fit review, then canonical hero |
| `wiki/sources/uchenna2023-ihiala-fruits-heavy-metals.md` | Assessment of Heavy Metals in Edible Fruits Sold in Selected Markets in Ihiala Local Government Area, Anambra State | Subject-fit review, then canonical hero |
| `wiki/sources/uddin2021-rice-aquatic-plants-review.md` | Heavy Metal Accumulation in Rice and Aquatic Plants Used as Human Food: A General Review | Subject-fit review, then canonical hero |
| `wiki/sources/uddin2023-wastewater-treatment-landfill-leachate-review.md` | The Role of Wastewater Treatment Technologies in Municipal Landfill Leachate Treatment | Subject-fit review, then canonical hero |
| `wiki/sources/udiba2020-senna-lead-remediation.md` | Assessment of lead (Pb) remediation potential of Senna obtusifolia in Dareta Village, Zamfara, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/ufelle2021-metals-chapter.md` | Toxic Effects of Metals (Chapter 23), in Casarett & Doull's Essentials of Toxicology, Fourth Edition | Subject-fit review, then canonical hero |
| `wiki/sources/ul2012-chemicals-childrens-toys.md` | Chemicals in Children's Toys: Addressing Stricter Limits and Environmental Concerns | Subject-fit review, then canonical hero |

## Batch 170: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/ullah2022-khyber-vegetables-metals.md` | Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan | Subject-fit review, then canonical hero |
| `wiki/sources/ulusoy2023-canned-tuna-toxic-metals.md` | Determination of toxic metals in canned tuna sold in developed and developing countries: Health risk assessment associated with human consumption | Subject-fit review, then canonical hero |
| `wiki/sources/unaegbu2016-fruit-heavy-metals-enugu.md` | Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/uneyama2007-arsenic-foods-cumulative-data.md` | Arsenic in various foods: Cumulative data | Subject-fit review, then canonical hero |
| `wiki/sources/ungureanu2022-bottled-water-toxic-elements.md` | Occurrence of Potentially Toxic Elements in Bottled Drinking Water-Carcinogenic and Non-Carcinogenic Risks Assessment in Adults via Ingestion | Subject-fit review, then canonical hero |
| `wiki/sources/unguryanu2023-arkhangelsk-wild-mushrooms-berries-metals.md` | Assessment of the chemical and radiological safety of wild mushrooms and berries growing in the Arkhangelsk region | Subject-fit review, then canonical hero |
| `wiki/sources/university2025-bioaccumulation-of-arsenic.md` | bioaccumulation of arsenic | Subject-fit review, then canonical hero |
| `wiki/sources/unknown2022-research-h.md` | Microbiome Associated with Slovak Raw Goat Milk, Trace Minerals, and Vitamin E Content | Subject-fit review, then canonical hero |
| `wiki/sources/unuvar2017-commercial-infant-formula-elements-turkey.md` | Determination of Element Concentrations in Commercial Infant Formulas Using Atomic Absorption Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/upson2022-menstrual-products-exposure-review.md` | Menstrual products as a source of environmental chemical exposure: A review from the epidemiologic perspective | Subject-fit review, then canonical hero |
| `wiki/sources/urban2018-heavy-metals-in-dry-depositions-as-indices-of.md` | Heavy metals in dry depositions as indices of atmospheric pollution in Enugu | Subject-fit review, then canonical hero |
| `wiki/sources/urbina2018-biomining-peptide-metal-recovery.md` | Biomining: A biological approach to recycling elemental components from end-of-life electronics | Subject-fit review, then canonical hero |
| `wiki/sources/uroko2020-ubani-canned-tomato-paste-metals.md` | Quantification of Heavy Metals in Canned Tomato Paste Sold in Ubani-Umuahia, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/urosevic2024-salix-phytoremediation.md` | Phytoremediation Potential of Different Genotypes of Salix alba and S. viminalis | Subject-fit review, then canonical hero |
| `wiki/sources/uruguay-rbn-5th-edition-heavy-metals.md` | Uruguay Reglamento Bromatologico Nacional, 5th edition: inorganic contaminant and metal migration limits | Subject-fit review, then canonical hero |
| `wiki/sources/us-epa-2011-efh-chapter17-consumer-products.md` | Exposure Factors Handbook: 2011 Edition — Chapter 17, Consumer Products | Subject-fit review, then canonical hero |
| `wiki/sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals.md` | Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury | Subject-fit review, then canonical hero |
| `wiki/sources/usda-fas2023-china-gb-2762-2022-translation.md` | China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022) | Subject-fit review, then canonical hero |
| `wiki/sources/usepa2018-drinking-water-standards-health-advisories.md` | 2018 Edition of the Drinking Water Standards and Health Advisories Tables | Subject-fit review, then canonical hero |
| `wiki/sources/usfda2024-21cfr165110-bottled-water.md` | 21 CFR 165.110 Bottled water | Subject-fit review, then canonical hero |
| `wiki/sources/usman2022-pleurotus-mushroom-substrates.md` | Proximate composition and heavy metal content of Pleurotus tuberregium mushroom grown on different substrates in (Aba) Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/uthayarajan2025-cdku-food-water-sri-lanka-review.md` | Quality and sources of food and water consumed by people with chronic kidney disease of unknown etiology in Sri Lanka: a systematic review | Subject-fit review, then canonical hero |
| `wiki/sources/uzomah2021-nigeria-fish-contaminants.md` | Chemical Contaminants in Nigerian Fresh and Marine Fish: A Review | Subject-fit review, then canonical hero |
| `wiki/sources/vainio2022-baltic-mercury-food-web.md` | Trophic Dynamics of Mercury in the Baltic Archipelago Sea Food Web: The Impact of Ecological and Ecophysiological Traits | Subject-fit review, then canonical hero |
| `wiki/sources/vaishali2020-tomato-ketchup-delhi-ncr-pb-cd.md` | A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street Vendors of Delhi NCR | Subject-fit review, then canonical hero |

## Batch 171: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/vaishaly2015-health-effects-metal-groundwater.md` | Health effects caused by metal contaminated ground water | Subject-fit review, then canonical hero |
| `wiki/sources/valencia2021-canacao-bay-oyster-pb-cd.md` | Heavy metal accumulation and risk assessment of lead and cadmium in cultured oysters (Crassostrea iredalei) of Cañacao Bay, Philippines | Subject-fit review, then canonical hero |
| `wiki/sources/valizadeh2023-canned-beans-iran-health-risk.md` | Health Risk Assessment of Potentially Toxic Elements in Canned Pinto Beans and Fava Beans Distributed in Gilan Province of Iran | Subject-fit review, then canonical hero |
| `wiki/sources/valli2000-antimony-potassium-tartrate-toxicity-comment.md` | Subchronic/Chronic Toxicity of Antimony Potassium Tartrate | Subject-fit review, then canonical hero |
| `wiki/sources/vanhulle2004-laminaria-arsenic-metabolism.md` | Identification of some arsenic species in human urine and blood after ingestion of Chinese seaweed Laminaria | Subject-fit review, then canonical hero |
| `wiki/sources/vanisree2022-heavy-metals-food-crops-chapter.md` | Heavy Metal Contamination of Food Crops: Transportation via Food Chain, Human Consumption, Toxicity and Management Strategies | Subject-fit review, then canonical hero |
| `wiki/sources/vanneste2013-methylisothiazolinone-wet-wipes.md` | Allergic contact dermatitis caused by methylisothiazolinone from different sources, including household wet wipes | Subject-fit review, then canonical hero |
| `wiki/sources/vasilachi2023-heavy-metals-cereal-crops.md` | Analysis of Heavy Metal Impacts on Cereal Crop Growth and Development in Contaminated Soils | Subject-fit review, then canonical hero |
| `wiki/sources/vatanpour2020-iran-tajan-rice-heavy-metals.md` | The high levels of heavy metal accumulation in cultivated rice from the Tajan river basin: health and ecological risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/vega-jara2025-cocoa-cd-mitigation-amf-biochar.md` | Mitigation of Cadmium Accumulation in Cocoa Beans Using Arbuscular Mycorrhizal Fungi, Biochar and Callisia repens | Subject-fit review, then canonical hero |
| `wiki/sources/vegetables2025-vegetables-and-beneficial-roles.md` | Vegetables and Beneficial Roles | Subject-fit review, then canonical hero |
| `wiki/sources/veien1993-low-nickel-diet-open-prospective-trial.md` | Low nickel diet: An open, prospective trial | Subject-fit review, then canonical hero |
| `wiki/sources/vejrup2022-prenatal-mehg-fish-behavior.md` | Prenatal methylmercury exposure from fish intake and child emotional and behavioural problems: results from the Norwegian Mother, Father and Child Cohort Study | Subject-fit review, then canonical hero |
| `wiki/sources/vela2023-quito-vegetables-cd-pb.md` | Determination of cadmium and lead in vegetables marketed in Quito, Ecuador | Subject-fit review, then canonical hero |
| `wiki/sources/vella2024-malta-olive-cultivars-aas.md` | Investigation on the Concentration of Heavy Metals found in Local Olives and Waste Material through AAS | Subject-fit review, then canonical hero |
| `wiki/sources/venant2025-lake-victoria-sardine-cd-pb.md` | Community Awareness and Health Risk of Heavy Metals Through Consumption of Sardine (Rastrineobola argentea) From Lake Victoria, Tanzania | Subject-fit review, then canonical hero |
| `wiki/sources/ventura2025-portuguese-total-diet-study-trace-elements.md` | Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach | Subject-fit review, then canonical hero |
| `wiki/sources/vermont-chcc-2016-guidance.md` | Vermont Department of Health Chemical Disclosure Program Guidance Document | Subject-fit review, then canonical hero |
| `wiki/sources/vicarova2016-common-carp-czech-reservoirs.md` | Heavy metals in the common carp (Cyprinus carpio L.) from three reservoirs in the Czech Republic | Subject-fit review, then canonical hero |
| `wiki/sources/vietnam2011-qcvn-8-2-heavy-metals-en.md` | QCVN 8-2:2011/BYT National technical regulation on the safety limits of heavy metal contamination in food (English) | Subject-fit review, then canonical hero |
| `wiki/sources/vietnammoh2024-qcvn20-1-health-supplements.md` | Circular 12/2024/TT-BYT issuing QCVN 20-1:2024/BYT on contaminant limits in health supplements | Subject-fit review, then canonical hero |
| `wiki/sources/villarreal2021-ic-icpms-cr-vi-toys.md` | Ensuring toy safety from hexavalent chromium to meet European regulations using IC-ICPMS quantification | Subject-fit review, then canonical hero |
| `wiki/sources/vincevica-gaile2024-libya-infant-toddler-food-arsenic.md` | Total Concentration of Arsenic in Commercial Infant/Toddler Food: A Preliminary Study in Libya | Subject-fit review, then canonical hero |
| `wiki/sources/vitola2016-cocoa-beans-heavy-trace-elements.md` | The Effect of Cocoa Beans Heavy and Trace Elements on Safety and Stability of Confectionery Products | Subject-fit review, then canonical hero |
| `wiki/sources/viviers2021-south-africa-cannabis-metals.md` | An assessment of heavy metal contaminants related to cannabis-based products in the South African market | Subject-fit review, then canonical hero |

## Batch 172: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/voegborlo1999-libya-canned-tuna-metals.md` | Mercury, cadmium and lead content of canned tuna fish | Subject-fit review, then canonical hero |
| `wiki/sources/volpe2012-eye-shadow-cosmetics-metals.md` | Determination and assessments of selected heavy metals in eye shadow cosmetics | Subject-fit review, then canonical hero |
| `wiki/sources/wa-tfca-hb1047-2023.md` | Washington State Toxic-Free Cosmetics Act (HB 1047) — statutory cap on heavy metals in cosmetic products | Subject-fit review, then canonical hero |
| `wiki/sources/wade2022-cacao-cadmium-drivers.md` | Drivers of cadmium accumulation in Theobroma cacao L. beans: A quantitative synthesis of soil-plant relationships across the Cacao Belt | Subject-fit review, then canonical hero |
| `wiki/sources/waecology2023-chemicals-cosmetics-phase1.md` | Chemicals in Cosmetics Used by Washington Residents — Report to the Legislature Pursuant to ESSB 5693 (2022) Section 302 (56) | Subject-fit review, then canonical hero |
| `wiki/sources/waecology2024-chemicals-cosmetics-phase2.md` | Chemicals in Cosmetics Used by Washington Residents: Phase Two Results — Report to the Legislature Pursuant to ESSB 5693 (2022) Section 302 (56) | Subject-fit review, then canonical hero |
| `wiki/sources/waecology2024-interim-policy-lead-cosmetics.md` | Policy Statement: Interim Policy on Lead in Cosmetics — enforcement discretion under the Washington Toxic-Free Cosmetics Act (Chapter 70A.560 RCW) | Subject-fit review, then canonical hero |
| `wiki/sources/wale2023-heavy-metals-fruits-vegetables-overview.md` | An Overview of the Level of Heavy Metals Concentration in Fruits and Vegetables | Subject-fit review, then canonical hero |
| `wiki/sources/wale2024-fruit-digestion-methods-review.md` | Comparisons of Different Digestion Methods for Heavy Metal Analysis from Fruits | Subject-fit review, then canonical hero |
| `wiki/sources/walenta2024-arsenic-speciation-mushrooms.md` | Arsenobetaine amide: a novel arsenic species detected in several mushroom species | Subject-fit review, then canonical hero |
| `wiki/sources/walther2022-plantbased-drinks-arsenic.md` | Comparison of nutritional composition between plant-based drinks and cow's milk | Subject-fit review, then canonical hero |
| `wiki/sources/wan2016-beijing-settled-dust-potentially-toxic-elements.md` | Preliminary Assessment of Health Risks of Potentially Toxic Elements in Settled Dust over Beijing Urban Area | Subject-fit review, then canonical hero |
| `wiki/sources/wan2023-rhizosphere-cadmium-migration.md` | Rhizosphere interface microbiome reassembly by arbuscular mycorrhizal fungi weakens cadmium migration dynamics | Subject-fit review, then canonical hero |
| `wiki/sources/wang2014-arsenic-iii-methyltransferase.md` | Arsenic (III) Methyltransferase | Subject-fit review, then canonical hero |
| `wiki/sources/wang2019-dietary-lead-guangzhou.md` | Dietary Lead Exposure and Associated Health Risks in Guangzhou, China | Subject-fit review, then canonical hero |
| `wiki/sources/wang2020-jilin-total-diet-metals.md` | Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China | Subject-fit review, then canonical hero |
| `wiki/sources/wang2020-lignin-residue-biochar-heavy-metal-remediation.md` | Biochars from Lignin-rich Residue of Furfural Manufacturing Process for Heavy Metal Ions Remediation | Subject-fit review, then canonical hero |
| `wiki/sources/wang2021-agnh-cinnabar-realgar-hg-as.md` | AGNH Protects Against Cinnabar and Realgar-Induced Hepatorenal Toxicity in Mice via Attenuation of Oxidative Stress, Inflammation, and Apoptosis | Subject-fit review, then canonical hero |
| `wiki/sources/wang2021-houttuynia-mercury-china.md` | Mercury accumulation in vegetable Houttuynia cordata Thunb. from two different geological areas in southwest China and implications for human consumption | Subject-fit review, then canonical hero |
| `wiki/sources/wang2022-heavy-metals-gastric-cancer-plasma-china.md` | The Influence of Heavy Metals on Gastric Tumorigenesis | Subject-fit review, then canonical hero |
| `wiki/sources/wang2022-therapeutic-peptides-review.md` | Therapeutic peptides: current applications and future directions | Subject-fit review, then canonical hero |
| `wiki/sources/wang2023-china-grain-soil-bioaccessibility.md` | Heavy metal(loid)s in agricultural soil from main grain production regions of China: Bioaccessibility and health risks to humans | Subject-fit review, then canonical hero |
| `wiki/sources/wang2023-climate-marine-mercury.md` | Climate-driven changes of global marine mercury cycles in 2100 | Subject-fit review, then canonical hero |
| `wiki/sources/wang2023-hangzhou-industrial-soil.md` | Spatial distribution, sources, and risks of heavy metals in soil from industrial areas of Hangzhou, eastern China | Subject-fit review, then canonical hero |
| `wiki/sources/wang2023-toxic-metals-daily-diet-ningxia.md` | Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China | Subject-fit review, then canonical hero |

## Batch 173: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/wang2024-as-cemetery-soil-remediation.md` | Arsenic contamination in cemetery soils and remediation approaches | Subject-fit review, then canonical hero |
| `wiki/sources/wang2024-biochar-alginate-cadmium-soil.md` | Study on Adsorption of Cd in Solution and Soil by Modified Biochar-Calcium Alginate Hydrogel | Subject-fit review, then canonical hero |
| `wiki/sources/wang2024-gsh-spr-pb-sensor.md` | Advanced Integration of Glutathione-Functionalized Optical Fiber SPR Sensor for Ultra-Sensitive Detection of Lead Ions | Subject-fit review, then canonical hero |
| `wiki/sources/wang2024-ngqd-crhex-fluorescence.md` | Nitrogen-doped graphene quantum dot fluorescent sensor for Cr(VI) detection | Subject-fit review, then canonical hero |
| `wiki/sources/wang2025-heavy-metal-levels-in.md` | heavy metal levels in | Subject-fit review, then canonical hero |
| `wiki/sources/wang2025-mfc-chromium-vi-wastewater-sensor.md` | Single-Chamber Microbial Fuel Cell for Cr(VI) Detection in Wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/wang2025-mno2-biochar-cd-sensor-rice.md` | Electrochemical Sensor Based on Porous Biochar-Loaded MnO2 Nanocomposite for Sensitive Detection of Cd(II) | Subject-fit review, then canonical hero |
| `wiki/sources/wang2025-mof-bi-cd-tea-soil-to-cup.md` | Tracking Cadmium Transfer from Soil to Cup: An Electrochemical Sensing Strategy Based on Bi3+-Rich MOFs for Tea Safety Monitoring | Subject-fit review, then canonical hero |
| `wiki/sources/wang2025-sers-nanogap-hg-pb-cd.md` | A Concave Nanogap for Ultrasensitive Aptamer-Based SERS Detection and In Situ Imaging of Heavy Metal Ions | Subject-fit review, then canonical hero |
| `wiki/sources/wang2026-antimony-food-contact.md` | Antimony: a cryptic metabolism disruptor ubiquitous in food contact materials | Subject-fit review, then canonical hero |
| `wiki/sources/warshaw2017-wet-wipe-allergens-nacdg.md` | Wet Wipe Allergens: Retrospective Analysis From the North American Contact Dermatitis Group 2011-2014 | Subject-fit review, then canonical hero |
| `wiki/sources/washington2008-childrens-safe-product-act.md` | Washington Children's Safe Product Act, Chapter 288, Laws of 2008 | Subject-fit review, then canonical hero |
| `wiki/sources/watanabe2017-retail-fish-mercury-methylmercury-japan.md` | Surveillance of Total Mercury and Methylmercury Concentrations in Retail Fish | Subject-fit review, then canonical hero |
| `wiki/sources/webster2024-mercury-thyroid-cancer.md` | Mercury exposure and thyroid cancer: a systematic review and meta-analysis | Subject-fit review, then canonical hero |
| `wiki/sources/wecf2016-women-and-chemicals-scoping-report.md` | Women and Chemicals: The impact of hazardous chemicals on women — A thought starter based on an experts' workshop | Subject-fit review, then canonical hero |
| `wiki/sources/wehmeier2023-ias-rice-cola-field-method.md` | Detection of Inorganic Arsenic in Rice Using a Field-Deployable Method with Cola Extraction | Subject-fit review, then canonical hero |
| `wiki/sources/wei2003-porphyra-arsenosugars-china.md` | Safety Evaluation of Organoarsenical Species in Edible Porphyra from the China Sea | Subject-fit review, then canonical hero |
| `wiki/sources/wei2021-eggshell-bacteria-pb-cd-remediation.md` | Study on the performance of carbonate-mineralized bacteria combined with eggshell for immobilizing Pb and Cd in water and soil | Subject-fit review, then canonical hero |
| `wiki/sources/wei2025-cd-as-rice-yunnan-karst-thresholds.md` | Integrating soil bioavailability and plant physiological responses to establish region-specific safety thresholds for cadmium and arsenic in rice cultivated in karst regions | Subject-fit review, then canonical hero |
| `wiki/sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals.md` | Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/welna2018-brown-rice-inorganic-arsenic.md` | Non-chromatographic Speciation of Inorganic Arsenic in Rice by Hydride Generation Inductively Coupled Plasma Optical Emission Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/wen2022-mercury-water-removal-review.md` | Mercury Contamination of Water and the Removal of Mercury from Water | Subject-fit review, then canonical hero |
| `wiki/sources/wester1992-percutaneous-cadmium-water-soil.md` | In vitro percutaneous absorption of cadmium from water and soil into human skin | Subject-fit review, then canonical hero |
| `wiki/sources/wester1993-arsenic-percutaneous-absorption.md` | In vivo and in vitro percutaneous absorption and skin decontamination of arsenic from water and soil | Subject-fit review, then canonical hero |
| `wiki/sources/westerhoff2008-pet-bottled-water-antimony.md` | Antimony leaching from polyethylene terephthalate (PET) plastic used for bottled drinking water | Subject-fit review, then canonical hero |

## Batch 174: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/weyde2023-gestational-metals-cerebral-palsy.md` | Gestational blood levels of toxic metals and risk of cerebral palsy: Norwegian Mother-Father-Child Cohort Study | Subject-fit review, then canonical hero |
| `wiki/sources/whittaker2013-king-county-dry-cleaning-solvents.md` | Characterizing Alternative Solvent Dry Cleaning Processes — Final Report | Subject-fit review, then canonical hero |
| `wiki/sources/who-gems-food-database.md` | WHO GEMS/Food contaminants database (Global Environment Monitoring System — Food Contamination Monitoring and Assessment Programme) | Subject-fit review, then canonical hero |
| `wiki/sources/who-gemsfood-heavy-metal-contaminants.md` | GEMS/Food Contaminants database heavy-metal exports | Subject-fit review, then canonical hero |
| `wiki/sources/who2003-antimony-drinking-water-background.md` | Antimony in drinking-water, background document | Subject-fit review, then canonical hero |
| `wiki/sources/who2003-antimony-drinking-water-fact-sheet.md` | Antimony, chemical fact sheet, Guidelines for Drinking-water Quality | Subject-fit review, then canonical hero |
| `wiki/sources/who2022-guidelines-drinking-water-quality.md` | Guidelines for drinking-water quality: fourth edition incorporating the first and second addenda | Subject-fit review, then canonical hero |
| `wiki/sources/wickliffe2021-suriname-mercury-pregnancy.md` | Exposure to total and methylmercury among pregnant women in Suriname: sources and public health implications | Subject-fit review, then canonical hero |
| `wiki/sources/wickramaarachchige2022-sri-lanka-aquatic-elements.md` | Comparative Study on the Distribution of Essential, Non-Essential Toxic, and Other Elements across Trophic Levels in Various Edible Aquatic Organisms in Sri Lanka and Dietary Human Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/wijeyaratne2021-alternanthera-metals-sri-lanka.md` | Cadmium, Chromium, and Lead Uptake Associated Health Risk Assessment of Alternanthera sessilis: A Commonly Consumed Green Leafy Vegetable | Subject-fit review, then canonical hero |
| `wiki/sources/willacker2023-mercury-fish-snake-river.md` | Reservoir Stratification Modulates the Influence of Impoundments on Fish Mercury Concentrations along an Arid Land River System | Subject-fit review, then canonical hero |
| `wiki/sources/williams2007-rice-arsenic-us-market-basket.md` | Market Basket Survey Shows Elevated Levels of As in South Central U.S. Processed Rice Compared to California: Consequences for Human Dietary Exposure | Subject-fit review, then canonical hero |
| `wiki/sources/winiarska-mieczan2022-cd-pb-instant-coffee-poland.md` | Cadmium and Lead Concentration in Drinking Instant Coffee, Instant Coffee Drinks and Coffee Substitutes: Safety and Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices.md` | The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine | Subject-fit review, then canonical hero |
| `wiki/sources/wise2025-elevated-metals-us-honeys.md` | Elevated Metal Levels in U.S. Honeys: Is There a Concern for Human Health? | Subject-fit review, then canonical hero |
| `wiki/sources/woldegiorgis2015-ethiopian-edible-mushrooms-minerals.md` | Major, Minor and Toxic Minerals and Anti-Nutrients Composition in Edible Mushrooms Collected from Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/woreta2023-lupine-seeds-metals-ethiopia.md` | Occurrence and accumulation of metals in lupine seeds in Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/wu2021-edible-salt-soy-sauce-pb-cd.md` | Determination of Trace Cd and Pb in Edible Salt and Soy Sauce by ETAAS Using Fluorescent Carbon Nanoparticles (FCNs) as Matrix Modifier | Subject-fit review, then canonical hero |
| `wiki/sources/wu2022-selenized-yeast-laying-hens.md` | Ameliorative effects of selenized yeast on laying hen performance and heavy metal residues in eggs | Subject-fit review, then canonical hero |
| `wiki/sources/wu2023-hybrid-membranes-lead-copper-adsorption.md` | Adsorption Performance of Heavy Metal Ions under Multifactorial Conditions by Synthesized Organic-Inorganic Hybrid Membranes | Subject-fit review, then canonical hero |
| `wiki/sources/wu2024-cd-silica-sol-water-sensor.md` | Cadmium colorimetric sensor using silica sol in water | Subject-fit review, then canonical hero |
| `wiki/sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo.md` | Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/wu2025-antimony-copper-gut-microbiota.md` | Gut Microbiota and Its Metabolite Taurine-β-Muricholic Acid Contribute to Antimony- and/or Copper-Induced Liver Inflammation | Subject-fit review, then canonical hero |
| `wiki/sources/wu2025-climate-meghan-freshwater-fish-china.md` | Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers | Subject-fit review, then canonical hero |
| `wiki/sources/wu2025-se-enriched-tea-cadmium-anhui.md` | Cadmium in the Soil–Tea–Infusion Continuum of Selenium-Enriched Gardens: Implications for Food Safety | Subject-fit review, then canonical hero |

## Batch 175: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/wu2026-methylmercury-whole-cell-biosensor.md` | Whole-Cell Biosensor for Sensitive Detection of Methylmercury in Environmental Water | Subject-fit review, then canonical hero |
| `wiki/sources/wve2017-ca-sb258-passage-summary.md` | California Cleaning Product Right to Know Act — coalition co-sponsor post-passage summary letter (SB 258, 2017) | Subject-fit review, then canonical hero |
| `wiki/sources/wysok2025-heavy-metals-sheep-casings.md` | Heavy Metal Contamination in Natural Sheep Casings | Subject-fit review, then canonical hero |
| `wiki/sources/wyszkowski2023-soils-nitrogen-humic-acids.md` | Trace Element Content in Soils with Nitrogen Fertilisation and Humic Acids Addition | Subject-fit review, then canonical hero |
| `wiki/sources/xia2025-whole-cell-biosensor-hg-food.md` | Replacing Manual Operation with Bio-Automation II: Construction of a Biological Digestion Gene Circuit to Eliminate the Interference of Food Matrices in the Rapid Detection of Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/xie2022-brassica-napus-metal-tolerance-proteins.md` | Genome-Wide Identification and Expressional Profiling of the Metal Tolerance Protein Gene Family in Brassica napus | Subject-fit review, then canonical hero |
| `wiki/sources/xie2023-metal-mixtures-nafld-nhanes.md` | Associations of metal mixtures with non-alcoholic fatty liver disease and liver fibrosis: NHANES 2003–2018 | Subject-fit review, then canonical hero |
| `wiki/sources/xie2023-sb-smelter-soil-hunan.md` | Quantitative source identification, risk assessment and pollution of heavy metals in soils around a typical Sb smelter in central and southern China | Subject-fit review, then canonical hero |
| `wiki/sources/xie2026-selenium-enriched-rice-china.md` | Co-occurrence of selenium and toxic elements and health risk assessment in commercial selenium-enriched rice from China | Subject-fit review, then canonical hero |
| `wiki/sources/xiong-2025-prenatal-trace-elements-infant-gut-microbiome.md` | Prenatal exposure to trace elements impacts mother-infant gut microbiome, metabolome and resistome during the first year of life | Subject-fit review, then canonical hero |
| `wiki/sources/xiong2025-heavy-metals-infant-clothing.md` | Heavy Metals in Infant Clothing: Assessing Dermal Exposure Risks and Pathways for Sustainable Textile Policies | Subject-fit review, then canonical hero |
| `wiki/sources/xiong2025-prenatal-trace-elements-infant-gut-microbiome.md` | Prenatal exposure to trace elements impacts mother-infant gut microbiome, metabolome and resistome during the first year of life | Subject-fit review, then canonical hero |
| `wiki/sources/xu2016-beijing-agricultural-soils-metal-accumulation.md` | Which Factors Determine Metal Accumulation in Agricultural Soils in the Severely Human-Coupled Ecosystem? | Subject-fit review, then canonical hero |
| `wiki/sources/xu2020-uk-rice-ias-hypertension.md` | Exploratory study of the association in the United Kingdom between hypertension and inorganic arsenic (iAs) intake from rice and rice products | Subject-fit review, then canonical hero |
| `wiki/sources/xu2021-antimony-pet-beverages.md` | Leaching and in vivo bioavailability of antimony in PET bottled beverages | Subject-fit review, then canonical hero |
| `wiki/sources/xu2021-extremely-elevated-total-mercury-and-methylmercury-in-forage.md` | Extremely Elevated Total Mercury and Methylmercury in Forage | Subject-fit review, then canonical hero |
| `wiki/sources/xu2022-crop-grains-heavy-metals.md` | Effects of soil properties on heavy metal bioavailability and accumulation in crop grains under different farmland use patterns | Subject-fit review, then canonical hero |
| `wiki/sources/xu2025-cola-pb-soil-pyromorphite.md` | Cola beverage reduces risk of lead poisoning from accidental ingestion of contaminated soil particles in rat and swine models | Subject-fit review, then canonical hero |
| `wiki/sources/xu2025-heavy-metals-aquatic-foods-global.md` | Heavy metal risks in aquatic foods | Subject-fit review, then canonical hero |
| `wiki/sources/yadav2025-evaluation-of-the-responses-of-contrasting.md` | Evaluation of the responses of contrasting | Subject-fit review, then canonical hero |
| `wiki/sources/yaghi2026-baby-powder-benghazi-libya.md` | Evaluated Daily Intake and Health Risk Assessment of Some Toxic Heavy Metals in Baby Powder for Various Brands Marketed in Benghazi, Libya | Subject-fit review, then canonical hero |
| `wiki/sources/yahaya2022-heavy-metals-energy-drinks-birnin-kebbi.md` | Heavy Metal Content and Associated Health Risks in Selected Energy Drinks Sold in Birnin Kebbi, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/yakubu2020-kano-aluminium-utensil-foundry-metals.md` | Investigation on the Environmental Effect of Local Production Method of Aluminium Utensil in Kano | Subject-fit review, then canonical hero |
| `wiki/sources/yamada1993-organotin-household-commodities.md` | Small-Scale Survey of Organotin Compounds in Household Commodities | Subject-fit review, then canonical hero |
| `wiki/sources/yamanaka2025-tinplate-pineapple-cans.md` | Corrosion Behavior of the Inner Surface of Unlacquered Tinplate Cans for Fruit Use | Subject-fit review, then canonical hero |

## Batch 176: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/yamashita2024-laep-oes-hg-tuna-japan.md` | LAEP-OES validation for total mercury in tuna and fish from Japanese markets | Subject-fit review, then canonical hero |
| `wiki/sources/yan2024-properties-of-methylmercury-and-its-physiological-effect-on.md` | Properties of methylmercury and its physiological effect on | Subject-fit review, then canonical hero |
| `wiki/sources/yan2025-infant-serum-26-metals-gut-microbiota-china.md` | Association between infants' serum levels of 26 metals and gut microbiota: a hospital-based cross-sectional study in China | Subject-fit review, then canonical hero |
| `wiki/sources/yan2025-rice-heavy-metals-henan-china.md` | From farm to table: assessing the status and health risk assessment of heavy metal pollution in rice in Henan Province | Subject-fit review, then canonical hero |
| `wiki/sources/yang2023-amidoxime-carbon-felt-crvi-removal.md` | Asymmetric Alternative Current Electrochemical Method Coupled with Amidoxime-Functionalized Carbon Felt Electrode for Fast and Efficient Removal of Hexavalent Chromium from Wastewater | Subject-fit review, then canonical hero |
| `wiki/sources/yang2023-nickel-gut-microbiome-uric-acid.md` | Nickel exposure induces gut microbiome disorder and serum uric acid elevation | Subject-fit review, then canonical hero |
| `wiki/sources/yang2024-libs-cd-panax-notoginseng.md` | LIBS detection of cadmium in Panax notoginseng | Subject-fit review, then canonical hero |
| `wiki/sources/yang2024-metallothionein-comprehensive-review.md` | Metallothionein: A Comprehensive Review of Its Classification, Structure, Biological Functions, and Applications | Subject-fit review, then canonical hero |
| `wiki/sources/yang2025-microalgae-heavy-metal-strategies.md` | The Strategies Microalgae Adopt to Counteract the Toxic Effect of Heavy Metals | Subject-fit review, then canonical hero |
| `wiki/sources/yao2021-tieguanyin-white-tea-heavy-metals.md` | Dietary risk assessment of fluoride, lead, chromium, and cadmium through consumption of Tieguanyin tea and white tea | Subject-fit review, then canonical hero |
| `wiki/sources/yao2022-tieguanyin-tea-heavy-metals.md` | Prediction and Health Risk Assessment of Copper, Lead, Cadmium, Chromium, and Nickel in Tieguanyin Tea: A Case Study from Fujian, China | Subject-fit review, then canonical hero |
| `wiki/sources/yap-almutairi2022-nickel-seafood-malaysia.md` | Comparative Study of Potentially Toxic Nickel and Their Potential Human Health Risks in Seafood (Fish and Mollusks) from Peninsular Malaysia | Subject-fit review, then canonical hero |
| `wiki/sources/yaqub2018-tea-metals-pesticides-pakistan.md` | Monitoring and risk assessment due to presence of heavy metals and pesticides in tea samples | Subject-fit review, then canonical hero |
| `wiki/sources/yashim2020-hair-dyes-metals-nigeria.md` | Evaluation of Heavy Metals Level in Hair Dyes and their Potential Health Risk | Subject-fit review, then canonical hero |
| `wiki/sources/yasugi2026-hyperzincemia-zno-ointment-preterm-infant.md` | Early Intervention by a Ward Pharmacist for the Hyperzincemia Caused by Zinc Oxide Ointment in a Infant with Diaper Dermatitis: A Case Report | Subject-fit review, then canonical hero |
| `wiki/sources/yazdanian2025-camel-milk-heavy-metals-iran.md` | Investigation of the abundance of Escherichia coli and Staphylococcus aureus (including virulence gene profiles) and heavy metal contamination in camel milk | Subject-fit review, then canonical hero |
| `wiki/sources/ye2026-tin-foods-dietary-exposure-zhejiang.md` | Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China | Subject-fit review, then canonical hero |
| `wiki/sources/years2024-barrier-phototoxicity-caused-by-overexposure-especially-to-ultraviolet.md` | barrier. Phototoxicity caused by overexposure, especially to ultraviolet radiation (UVR), results | Subject-fit review, then canonical hero |
| `wiki/sources/yildirim2021-humic-fulvic-cd-garden-cress.md` | Humic + Fulvic acid mitigated Cd adverse effects on plant growth, physiology and biochemical properties of garden cress | Subject-fit review, then canonical hero |
| `wiki/sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus.md` | Determination of Some Minerals and Heavy metals in Raw Cow's Milk Collected from Different Regions of Muş Province | Subject-fit review, then canonical hero |
| `wiki/sources/yohannes2024-vegetable-oils-ethiopia-gondar.md` | Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/yoplac2026-peruvian-avocado-metals-health-risk.md` | Ecological and Human Health Risk Assessment of Metals in Peruvian Avocados Using a Probabilistic Approach | Subject-fit review, then canonical hero |
| `wiki/sources/yorgwara2026-personal-care-metals-nigeria.md` | Assessment of Heavy Metal Concentration in Some Selected Cosmetic Products and Human Health Risk in Eleme LGA, Rivers State, Nigeria | Subject-fit review, then canonical hero |
| `wiki/sources/york2021-illuminating-sunscreens.md` | Illuminating Sunscreens: | Subject-fit review, then canonical hero |
| `wiki/sources/yoshinaga2025-japanese-duplicate-diet-metals.md` | Duplicate diet study to assess dietary exposure to metals in a Japanese population | Subject-fit review, then canonical hero |

## Batch 177: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/yousaf2021-low-nickel-diet-gerd-pilot.md` | The effect of a low-nickel diet and nickel sensitization on gastroesophageal reflux disease: A pilot study | Subject-fit review, then canonical hero |
| `wiki/sources/youssao2018-fruit-juices-syrup-benin.md` | Levels of Minor and Trace Elements of Some Commercial Fruit Juices and Syrup Produced in Artisanal and Semi-Industrial Units in Benin Republic | Subject-fit review, then canonical hero |
| `wiki/sources/yozukmaz2018-enteromorpha-heavy-metal-bioaccumulation.md` | Heavy metal bioaccumulation in Enteromorpha intestinalis, (L.) Nees, a macrophytic algae: The example of Kadin Creek (Western Anatolia) | Subject-fit review, then canonical hero |
| `wiki/sources/yu2016-diaper-product-potential-allergens.md` | Potential Allergens in Disposable Diaper Wipes, Topical Diaper Preparations, and Disposable Diapers: Under-recognized Etiology of Pediatric Perineal Dermatitis | Subject-fit review, then canonical hero |
| `wiki/sources/yu2023-zhejiang-beans-toxic-elements.md` | Toxic Elements in Beans from Zhejiang, Southeast China: Distribution and Probabilistic Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/yuan2012-aluminum-oxidative-stress-neonatal-rats.md` | Aluminum Overload Increases Oxidative Stress in Four Functional Brain Areas of Neonatal Rats | Subject-fit review, then canonical hero |
| `wiki/sources/yuan2023-fluorescent-aptasensor-arsenic.md` | A Novel Fluorescent Aptasensor for Arsenic(III) Detection Based on a Triple-Helix Molecular Switch | Subject-fit review, then canonical hero |
| `wiki/sources/yucel2021-contact-allergen-sensitivity-children.md` | Contact allergen sensitivity in children with contact dermatitis | Subject-fit review, then canonical hero |
| `wiki/sources/yun2022-in-silico-pediatric-dermal-model.md` | Development and Evaluation of an In Silico Dermal Absorption Model Relevant for Children | Subject-fit review, then canonical hero |
| `wiki/sources/zachariadis2009-sunscreens-trace-elements-icpaes.md` | Multi-element method for determination of trace elements in sunscreens by ICP-AES | Subject-fit review, then canonical hero |
| `wiki/sources/zafarzadeh2018-cosmetics-lead-cadmium-iran.md` | Assessment of cadmium and lead concentrations in different types of cosmetics products consumed in Iran | Subject-fit review, then canonical hero |
| `wiki/sources/zafarzadeh2025-heavy-metals-rice-sari-iran.md` | Risk assessment of heavy metals in north of Iran (Sari) rice and implications for human health | Subject-fit review, then canonical hero |
| `wiki/sources/zafeiraki2021-hemp-cannabis-metals-greece.md` | Macro and Trace Elements in Hemp (Cannabis sativa L.) Cultivated in Greece: Risk Assessment of Toxic Elements | Subject-fit review, then canonical hero |
| `wiki/sources/zahran2023-mercury-tilapia-nannochloropsis.md` | Toxicity Evaluation, Oxidative, and Immune Responses of Mercury on Nile Tilapia: Modulatory Role of Dietary Nannochloropsis oculata | Subject-fit review, then canonical hero |
| `wiki/sources/zakaria2015-lipstick-heavy-metals-malaysia.md` | Heavy metals contamination in lipsticks and their associated health risks to lipstick consumers | Subject-fit review, then canonical hero |
| `wiki/sources/zakaria2024-camel-milk-copper-aluminum.md` | Impact of grazing around industrial areas on milk heavy metals contamination and reproductive ovarian hormones of she-camel with assessment of some technological processes on reduction of toxic residue concentrations | Subject-fit review, then canonical hero |
| `wiki/sources/zakrzewska2023-cadmium-soil-micp-parsley.md` | Reduction of bioavailability and phytotoxicity effect of cadmium in soil by microbial-induced carbonate precipitation using metabolites of ureolytic bacterium Ochrobactrum sp. POC9 | Subject-fit review, then canonical hero |
| `wiki/sources/zandi2023-rice-root-chromium-speciation.md` | Speciation and distribution of chromium (III) in rice root tip and mature zone: The significant impact of root exudation and iron plaque on chromium bioavailability | Subject-fit review, then canonical hero |
| `wiki/sources/zandi2025-carbon-quantum-dot-chromium-vi-fluorescence-coffee.md` | Carbon Quantum Dots from Coffee Waste for Fluorescence Detection of Cr(VI) in Water | Subject-fit review, then canonical hero |
| `wiki/sources/zanon2008-venice-lagoon-organotins.md` | Time trend of Butyl- and Phenyl-Tin contamination in organisms of the Lagoon of Venice (1999-2003) | Subject-fit review, then canonical hero |
| `wiki/sources/zarski2017-mallard-mercury.md` | The Presence of Mercury in the Tissues of Mallards (Anas platyrhynchos L.) from Włocławek Reservoir in Poland | Subject-fit review, then canonical hero |
| `wiki/sources/zavala2008-arsenic-speciation-usa-rice.md` | Arsenic in Rice: II. Arsenic Speciation in USA Grain and Implications for Human Health | Subject-fit review, then canonical hero |
| `wiki/sources/zecchin2021-arsenic-groundwater-italy.md` | Arsenic-Oxidizing Bacteria in Arsenic-Contaminated Groundwaters of Po Plain (Northern Italy): Community Diversity and Potential Role in As Mobilization | Subject-fit review, then canonical hero |
| `wiki/sources/zeldin2023-antimony-atopic-dermatitis.md` | Antimony Compounds Associate with Atopic Dermatitis and Influence Models of Itch and Dysbiosis | Subject-fit review, then canonical hero |
| `wiki/sources/zemanova2015-spinach-cadmium-amino-fatty-acids.md` | Changes in the contents of amino acids and the profile of fatty acids in response to cadmium contamination in spinach | Subject-fit review, then canonical hero |

## Batch 178: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/zeng2023-disposable-food-containers-metals.md` | Heavy metal risk of disposable food containers on human health | Subject-fit review, then canonical hero |
| `wiki/sources/zeng2026-properties-of-heavy-metal.md` | properties of heavy metal | Subject-fit review, then canonical hero |
| `wiki/sources/zergui2023-coffee-metals-origin-icp-ms.md` | Evaluation of trace metallic element levels in coffee by ICP-MS: a comparative study among different origins, forms, and packaging types and consumer risk assessment | Subject-fit review, then canonical hero |
| `wiki/sources/zerihun2015-ethiopian-cannabis-leaf-metals.md` | Levels of selected metals in leaves of Cannabis sativa L. cultivated in Ethiopia | Subject-fit review, then canonical hero |
| `wiki/sources/zhan2023-yangshan-gold-mine-soil-metals.md` | Soil environmental study analysis of mining areas in the Yangshan Gold Belt, Gansu | Subject-fit review, then canonical hero |
| `wiki/sources/zhang-2015-cadmium-hepatic-energy-gut-microbiome.md` | Subchronic Exposure of Mice to Cadmium Perturbs Their Hepatic Energy Metabolism and Gut Microbiome | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2010-beijing-detergents-ten-metals.md` | Simultaneous Determination of Content of Ten Heavy Metals in Detergents from China by ICP-MS | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2017-red-raspberry-nutrient-profile.md` | Characterization of the nutrient profile of processed red raspberries for use in nutrition labeling and promoting healthy food choices | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2018-tea-puan-guizhou-heavy-metals.md` | Accumulation of Heavy Metals in Tea Leaves and Potential Health Risk Assessment: A Case Study from Puan County, Guizhou Province, China | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2020-rice-cadmium-bioaccessibility-supplements.md` | Effects of Dietary Supplements on the Bioaccessibility of Se, Zn and Cd in Rice: Preliminary Observations from In Vitro Gastrointestinal Simulation Tests | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2021-in-utero-metals-childhood-blood-pressure.md` | In Utero Exposure to Heavy Metals and Trace Elements and Childhood Blood Pressure in a U.S. Urban, Low-Income, Minority Birth Cohort | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2022-pork-heavy-metals-china.md` | Risk assessment of heavy metals contamination in pork | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2023-3d-printing-metal-emissions.md` | Metal compositions of particle emissions from material extrusion 3D printing: Emission sources and indoor exposure modeling | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2023-shuimo-river-soil-heavy-metals.md` | Analysis of Heavy Metal Pollution in Soil along the Shuimo River by the Grey Relational Method and Factor Analysis | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2024-aunp-as-rice-water-sensor.md` | AuNP-based colorimetric sensor for As3+ tested in rice and water | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2024-lettuce-cadmium-greenhouse-amendments.md` | Impact of Physical Interventions, Phosphorus Fertilization, and the Utilization of Soil Amendments on the Absorption of Cadmium by Lettuce Grown in a Solar-Powered Greenhouse | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2024-mip-pb-honey-cyprus.md` | Molecularly imprinted polymer electrochemical sensor for lead detection in honey | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2025-metalorian-de-novo-metal-binding-peptides.md` | Metalorian: De Novo Generation of Heavy Metal-Binding Peptides with Classifier-Guided Diffusion Sampling | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2025-salt-urinary-metals-nhanes.md` | Salt use patterns and heavy metal urinary excretion | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2026-cotton-arsenic-amf-calcium.md` | Arbuscular Mycorrhizal Fungi and Exogenous Calcium Synergistically Alleviate Arsenic Stress in Cotton Seedlings | Subject-fit review, then canonical hero |
| `wiki/sources/zhang2026-trace-metals-five-crops-chongqing.md` | Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2014-edible-seaweed-arsenic-digestion.md` | Arsenic Species in Edible Seaweeds Using In Vitro Biomimetic Digestion Determined by High-Performance Liquid Chromatography Inductively Coupled Plasma Mass Spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2016-xiamen-seafood-metals.md` | Seafood consumption among Chinese coastal residents and health risk assessment of heavy metals in seafood | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2021-cadmium-removal-rice-flour.md` | Cadmium Removal from Rice Flour Using Coimmobilized Microorganisms | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2022-china-tds6-lead-cadmium-exposure.md` | Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019 | Subject-fit review, then canonical hero |

## Batch 179: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/zhao2023-rice-straw-biochar-copper-lead-sorption.md` | Comparison of the Sorption of Cu(II) and Pb(II) by Bleached and Activated Biochars: Insight into Complexation and Cation-pi Interaction | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2023-silicon-cd-rice.md` | Exogenous Silicon Alleviates Cadmium Stress by Promoting Phenylpropanoid Metabolism in Rice | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2024-toxic-metals-metalloids-food-review.md` | Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2024-znosi-cd-fluorescence-sensor.md` | ZnO@SiO2 core-shell fluorescent sensor for cadmium detection | Subject-fit review, then canonical hero |
| `wiki/sources/zhao2025-sargassum-fusiforme-metals-detoxification.md` | Integration of bioaccumulations, chemical forms and gene expression responses to understand the transformation and detoxification of inorganic arsenic, cadmium and lead in the brown seaweed Sargassum fusiforme | Subject-fit review, then canonical hero |
| `wiki/sources/zheng2025-pueraria-carbon-dots-chromium-vi-fluorescence.md` | Green Synthesis of Nitrogen-Doped Carbon Dots from Pueraria Residues for Cr(VI) Sensing in Water | Subject-fit review, then canonical hero |
| `wiki/sources/zhi2020-soybean-cadmium-safe-cultivars.md` | Screening of safe soybean cultivars for cadmium contaminated fields | Subject-fit review, then canonical hero |
| `wiki/sources/zhou2000-china-vegetable-heavy-metals-review.md` | Heavy Metal Contamination in Vegetables and Their Control in China | Subject-fit review, then canonical hero |
| `wiki/sources/zhou2018-pleurotus-biogas-residue-metals.md` | Cultivation of Pleurotus ostreatus, a Potential Candidate for Biogas Residues Degradation | Subject-fit review, then canonical hero |
| `wiki/sources/zhou2023-inosperma-mushroom-elements.md` | Phylogenetic analysis, morphological studies, element profiling, and muscarine detection reveal a new toxic Inosperma (Inocybaceae, Agaricales) species from tropical China | Subject-fit review, then canonical hero |
| `wiki/sources/zhou2023-methylmercury-formation-in.md` | Methylmercury formation in | Subject-fit review, then canonical hero |
| `wiki/sources/zhou2023-pfas-personal-hygiene-products.md` | Per- and Polyfluoroalkyl Substances in Personal Hygiene Products: The Implications for Human Exposure and Emission to the Environment | Subject-fit review, then canonical hero |
| `wiki/sources/zhou2025-baijiu-impurities-safety-strategies.md` | Exogenous Impurities in Baijiu: Sources, Detection, and Safety Strategies | Subject-fit review, then canonical hero |
| `wiki/sources/zhou2025-microbial-methylmercury-rice-china.md` | Microbial potential to mitigate neurotoxic methylmercury accumulation in farmlands and rice | Subject-fit review, then canonical hero |
| `wiki/sources/zhu2011-edible-vegetable-oils-china-8-metals.md` | Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China | Subject-fit review, then canonical hero |
| `wiki/sources/zhu2021-food-derived-cadmium-probiotic.md` | Protective Effects of Lactobacillus plantarum CCFM8610 against Acute Toxicity Caused by Different Food-Derived Forms of Cadmium in Mice | Subject-fit review, then canonical hero |
| `wiki/sources/zhu2024-mycotoxins-and-heavy-metals-in-rice-maize.md` | mycotoxins and heavy metals in rice, maize, | Subject-fit review, then canonical hero |
| `wiki/sources/zhu2024-toxic-essential-metals-gut-microbiota-review.md` | Toxic and essential metals: metabolic interactions with the gut microbiota and health implications | Subject-fit review, then canonical hero |
| `wiki/sources/zhuzhassarova2024-fish-seafood-central-asia-review.md` | Fish and Seafood Safety: Human Exposure to Toxic Metals from the Aquatic Environment and Fish in Central Asia | Subject-fit review, then canonical hero |
| `wiki/sources/ziarati2019-iranian-italian-flavoured-olive-oil.md` | Determination of Toxic Metals Content in Iranian and Italian Flavoured Olive Oil | Subject-fit review, then canonical hero |
| `wiki/sources/ziyaina2014-libya-spices-lead-cadmium.md` | Lead and cadmium residue determination in spices available in Tripoli City markets (Libya) | Subject-fit review, then canonical hero |
| `wiki/sources/zlotko2021-black-soldier-fly-chitin-nickel-sorption.md` | Isolation of Chitin from Black Soldier Fly (Hermetia illucens) and Its Usage to Metal Sorption | Subject-fit review, then canonical hero |
| `wiki/sources/zmozinski2016-sunscreen-pb-cr.md` | Determination of Pb and Cr in sunscreen samples by high-resolution continuum source graphite furnace atomic absorption spectrometry | Subject-fit review, then canonical hero |
| `wiki/sources/zmudzinska2022-rte-baby-foods-poland.md` | Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market | Subject-fit review, then canonical hero |
| `wiki/sources/zolfaghari2018-iran-wetlands-fish-mercury-lead.md` | Risk assessment of mercury and lead in fish species from Iranian international wetlands | Subject-fit review, then canonical hero |

## Batch 180: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/sources/zquez2026-the-association-of-arsenic-metabolism-and-blood-pressure.md` | The Association of Arsenic Metabolism and Blood Pressure: A Cross- | Subject-fit review, then canonical hero |
| `wiki/sources/ztekin2022-from-fish-markets-in-sinop-consumer-s-health.md` | from Fish Markets in Sinop: Consumer’s Health Risk Assessment | Subject-fit review, then canonical hero |
| `wiki/sources/zuhlke2026-lead-drinking-water-kiosks-us.md` | Lead in Drinking Water Kiosks: Elevated Exposure Risks and a Case Study of XRF Lead Screening | Subject-fit review, then canonical hero |
| `wiki/sources/zverina2025-plant-dairy-toxic-elements.md` | Essential and toxic elements in plant-based dairy alternatives: implications for vegan diets | Subject-fit review, then canonical hero |
| `wiki/sprint-status.md` | sprint-status | Subject-fit review, then canonical hero |
| `wiki/studies/arsenic-primary-literature.md` | studies/arsenic-primary-literature | Subject-fit review, then canonical hero |
| `wiki/studies/cadmium-primary-literature.md` | studies/cadmium-primary-literature | Subject-fit review, then canonical hero |
| `wiki/studies/mercury-primary-literature.md` | studies/mercury-primary-literature | Subject-fit review, then canonical hero |
| `wiki/studies/multimetal-primary-literature.md` | studies/multimetal-primary-literature | Subject-fit review, then canonical hero |
| `wiki/supply-chain/aluminum-based-packaging.md` | supply-chain/aluminum-based-packaging | Subject-fit review, then canonical hero |
| `wiki/supply-chain/animal-feed-to-food-chain.md` | supply-chain/animal-feed-to-food-chain | Subject-fit review, then canonical hero |
| `wiki/supply-chain/aquatic-bioaccumulation.md` | supply-chain/aquatic-bioaccumulation | Subject-fit review, then canonical hero |
| `wiki/supply-chain/atmospheric-deposition.md` | supply-chain/atmospheric-deposition | Subject-fit review, then canonical hero |
| `wiki/supply-chain/index.md` | Supply chain | Subject-fit review, then canonical hero |
| `wiki/supply-chain/irrigation-and-soil-amendments.md` | supply-chain/irrigation-and-soil-amendments | Subject-fit review, then canonical hero |
| `wiki/supply-chain/soil-nickel-screening.md` | supply-chain/soil-nickel-screening | Subject-fit review, then canonical hero |
| `wiki/supply-chain/soil-to-plant-transfer.md` | supply-chain/soil-to-plant-transfer | Subject-fit review, then canonical hero |
| `wiki/supply-chain/source-attribution-environmental-burden-apportionment.md` | supply-chain/source-attribution-environmental-burden-apportionment | Subject-fit review, then canonical hero |
| `wiki/synthesis/antimony-in-baby-products.md` | Antimony in baby products | Subject-fit review, then canonical hero |
| `wiki/synthesis/aquaculture-vs-wild-contamination-differential.md` | Aquaculture vs wild-caught contamination differential — why farmed fish carry systematically lower MeHg | Subject-fit review, then canonical hero |
| `wiki/synthesis/bivalve-cadmium-amplification.md` | Bivalve cadmium amplification through filter feeding — why mussels and oysters carry an order-of-magnitude higher cadmium load than finfish | Subject-fit review, then canonical hero |
| `wiki/synthesis/breastmilk-heavy-metal-exposure-pathway.md` | Human breastmilk is a measurable infant heavy-metal exposure pathway distinct from infant formula, driven by maternal body burden and diet, and it is not captured by food-matrix surveillance | Subject-fit review, then canonical hero |
| `wiki/synthesis/climate-fish-mehg-projections.md` | Climate change is projected to increase methylmercury in marine fish, and present-day regulatory frameworks are calibrated against a shifting baseline | Subject-fit review, then canonical hero |
| `wiki/synthesis/climate-metals-tradeoffs.md` | Climate adaptation creates new heavy-metal trade-offs | Subject-fit review, then canonical hero |
| `wiki/synthesis/combined-exposure-underprotection.md` | Single-metal regulatory limits systematically underprotect against dietary heavy-metal exposure | Subject-fit review, then canonical hero |

## Batch 181: Remaining public pages, stable path order (25 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/synthesis/contaminants-in-baby-wipes-beyond-metals.md` | Contaminants in baby wipes beyond the metal panel | Subject-fit review, then canonical hero |
| `wiki/synthesis/cooking-does-not-reduce-mehg.md` | Cooking does not reduce methylmercury — and why this matters for consumer messaging | Subject-fit review, then canonical hero |
| `wiki/synthesis/cookware-utensil-metal-leaching-pathway.md` | Cooking vessels are a post-harvest contamination pathway that can add lead, cadmium, nickel, chromium, and aluminium to food independent of the raw ingredient's cleanliness | Subject-fit review, then canonical hero |
| `wiki/synthesis/dietary-nickel-plant-staple-accumulation.md` | Dietary nickel has an irreducible botanical floor in specific plant staples, so a large share of dietary nickel cannot be sourced out of a supply chain, and background diets can reach or exceed nickel tolerable-intake reference points without any pollution source | Subject-fit review, then canonical hero |
| `wiki/synthesis/eu-regulatory-framework-timeline.md` | EU heavy-metals regulatory framework timeline (2001-2023 and beyond) | Subject-fit review, then canonical hero |
| `wiki/synthesis/heavy-metals-in-baby-lotions-oils-and-powders.md` | Heavy metals in baby lotions, oils, and powders | Subject-fit review, then canonical hero |
| `wiki/synthesis/heavy-metals-in-baby-wipes.md` | Heavy metals in baby wipes | Subject-fit review, then canonical hero |
| `wiki/synthesis/heavy-metals-in-diaper-creams.md` | Heavy metals in diaper creams | Subject-fit review, then canonical hero |
| `wiki/synthesis/heavy-metals-in-mineral-baby-sunscreens.md` | Heavy metals in mineral baby sunscreens | Subject-fit review, then canonical hero |
| `wiki/synthesis/index.md` | Synthesis | Subject-fit review, then canonical hero |
| `wiki/synthesis/infant-formula-metal-amplification.md` | Manufactured infant formula delivers an aluminium-dominated metal load, many-fold above breastmilk and amplified in soy-based and powdered formats, to the most vulnerable consuming population | Subject-fit review, then canonical hero |
| `wiki/synthesis/metals-microbiome-disease-pathogenesis.md` | Heavy metal exposure, microbial metal ecology, and disease pathogenesis: a first-principles framework for microbiome medicine | Subject-fit review, then canonical hero |
| `wiki/synthesis/mining-impacted-freshwater-fish.md` | Mining-impacted freshwater fish are a globally distributed multi-metal contamination pathway not addressed by commercial-market fish advisories | Subject-fit review, then canonical hero |
| `wiki/synthesis/organ-meat-cadmium-lead-accumulation.md` | Liver and kidney are physiological cadmium accumulation sinks that carry heavy-metal loads above skeletal muscle, making offal a distinct dietary exposure pathway that muscle-meat surveillance does not represent | Subject-fit review, then canonical hero |
| `wiki/synthesis/organic-certification-not-protective.md` | Organic certification is not protective against heavy-metal contamination, and in some food matrices is associated with higher loads | Subject-fit review, then canonical hero |
| `wiki/synthesis/organoarsenical-inertness-assumption.md` | The organoarsenical inertness assumption is increasingly contested | Subject-fit review, then canonical hero |
| `wiki/synthesis/proof-before-the-floor.md` | Proof Before the Floor: A Proposed Systems Architecture for Dietary Heavy-Metal Exposure Reduction Through Authenticated Evidence, Lot Qualification, and Method-Bound Certification | Subject-fit review; preserve existing inline image(s) |
| `wiki/synthesis/se-hg-molar-ratio-certification-debate.md` | Selenium-mercury molar ratio as a basis for relaxing predator-fish MeHg ceilings — the scientific debate | Subject-fit review, then canonical hero |
| `wiki/synthesis/seaweed-cd-as-contamination.md` | Edible seaweed and kelp are a systematic Cd and As exposure pathway that conventional food-safety surveillance does not adequately characterize | Subject-fit review, then canonical hero |
| `wiki/synthesis/spice-adulteration-lead-infants.md` | Spice adulteration with lead chromate is a distinct, non-agricultural contamination pathway reaching infants | Subject-fit review, then canonical hero |
| `wiki/synthesis/subsistence-fishing-mehg-disparity.md` | Subsistence fishing methylmercury is a global vulnerable-population pattern that regulatory fish-consumption advice does not address | Subject-fit review, then canonical hero |
| `wiki/synthesis/supplement-botanical-lead-pathway.md` | Dietary supplements and traditional herbal preparations are a distinct, under-surveilled heavy-metal exposure pathway whose contamination magnitudes reach thousands of times conventional food limits under materially weaker enforcement | Subject-fit review, then canonical hero |
| `wiki/synthesis/tea-multi-metal-bioaccumulation.md` | Tea heavy-metal exposure is governed by the leaf-to-infusion transfer fraction, not the dry-leaf totals that surveillance reports | Subject-fit review, then canonical hero |
| `wiki/synthesis/tin-canned-food-acidic-matrix-migration.md` | Inorganic tin in food is a can-format-and-acidity contaminant, not an agricultural or geogenic one, with an acute gastrointestinal effect whose symptomatic threshold sits three to four orders of magnitude above lead and cadmium limits | Subject-fit review, then canonical hero |
| `wiki/synthesis/us-chocolate-lead-temporal-decline.md` | US chocolate lead has measurably declined since 2015; cadmium has not | Subject-fit review, then canonical hero |

## Batch 182: Remaining public pages, stable path order (6 pages)

Status: PENDING.

| Page | Title | Planned hero or treatment |
| --- | --- | --- |
| `wiki/synthesis/wastewater-irrigation-multimetal-crop-pathway.md` | Wastewater and sewage-effluent irrigation is a single upstream pathway that co-elevates multiple metals in the same crop, concentrating in leafy greens on peri-urban plots across the Global South | Subject-fit review, then canonical hero |
| `wiki/terms.md` | Terms of Use | Subject-fit review, then canonical hero |
| `wiki/testing/en-1811-nickel-release.md` | EN 1811 Nickel Release Testing | Subject-fit review, then canonical hero |
| `wiki/testing/icp-ms.md` | ICP-MS — Inductively coupled plasma mass spectrometry | Subject-fit review, then canonical hero |
| `wiki/testing/index.md` | testing/index | Subject-fit review, then canonical hero |
| `wiki/trust.md` | Trust Center | Subject-fit review, then canonical hero |
