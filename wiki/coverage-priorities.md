---
title: "Coverage priorities — top 100 ingredients"
type: methodology
audience: [regulator, educator]
version: v0
updated: 2026-05-17
methodology_doc: "[[docs/coverage-priorities-methodology]]"
---

# Coverage priorities — top 100 ingredients

This page lists the 100 ingredients that Heavy Metal Index must cover to a defined depth, regardless of which papers happen to enter the manual-fetch queue. Each ingredient is scored against five criteria — dietary exposure burden, per-serving contamination potential, population reach, HMTc certification relevance, and vulnerable-population specificity — and partitioned into three coverage tiers. The full scoring methodology is documented in [[docs/coverage-priorities-methodology]].

The list is versioned (this is `v0`, dated 2026-05-17) and reviewed quarterly. Scores reflect best available evidence at the version date; new EFSA opinions, JECFA evaluations, or HMTc category locks can move scores between reviews.

## How to read the table

Each row shows the ingredient's wiki slug (linked if the page exists, plain text if not yet), tier, total score, the five component scores in order (Exp / Cont / Pop / HMTc / Vuln), the primary metals of concern, and current page status. Page status uses three states: `complete` for non-stub pages with all eight mandatory sections; `partial` for pages that exist but are missing sections or have most analytes still at `data gap`; `missing` for ingredients not yet pagified.

The tier assignment determines lint behavior. Tier 1 pages must be `complete` within 90 days of the version date; lint fails the build if a Tier 1 ingredient is `missing`. Tier 2 pages have a 180-day target with warnings, not failures. Tier 3 is tracked but not lint-enforced.

## Tier 1 — Must-have, no exceptions

Score 9+ or FAO-recognized staple status. 35 entries.

| # | Ingredient | Score | Exp | Cont | Pop | HMTc | Vuln | Primary metals | Page status |
|---|------------|-------|-----|------|-----|------|------|----------------|-------------|
| 1 | [[ingredients/rice]] | 13 | 3 | 3 | 3 | 2 | 2 | iAs, Cd, Pb | complete |
| 2 | [[ingredients/wheat]] | 11 | 3 | 2 | 3 | 2 | 1 | Cd, Pb | complete |
| 3 | [[ingredients/maize]] | 11 | 3 | 2 | 3 | 2 | 1 | Pb, Cd, Al | complete |
| 4 | [[ingredients/spinach]] | 11 | 3 | 3 | 2 | 1 | 2 | Cd, Pb | complete |
| 5 | [[ingredients/cocoa]] | 11 | 3 | 3 | 3 | 2 | 0 | Cd, Pb | complete |
| 6 | [[ingredients/turmeric]] | 11 | 2 | 3 | 2 | 2 | 2 | Pb, Cr | complete |
| 7 | [[ingredients/cassava]] | 10 | 2 | 2 | 3 | 2 | 1 | Cd, Pb, tAs | partial |
| 8 | [[ingredients/potatoes]] | 10 | 2 | 2 | 3 | 2 | 1 | Pb, Cd | complete |
| 9 | [[ingredients/seaweed]] | 10 | 2 | 3 | 2 | 1 | 2 | iAs, Cd, Pb | complete |
| 10 | [[ingredients/leafy-greens]] | 10 | 3 | 3 | 2 | 1 | 1 | Cd, Pb | complete |
| 11 | [[ingredients/sweet-potato]] | 9 | 2 | 2 | 3 | 2 | 0 | Pb, Cd | complete |
| 12 | [[ingredients/carrots]] | 9 | 2 | 2 | 3 | 2 | 0 | Pb, Cd | complete |
| 13 | sorghum | 9 | 2 | 2 | 3 | 1 | 1 | Cd, Pb | missing |
| 14 | millet | 9 | 2 | 2 | 3 | 1 | 1 | Cd, Pb | missing |
| 15 | [[ingredients/oat]] | 9 | 2 | 2 | 2 | 2 | 1 | Cd, Pb, Ni | complete |
| 16 | [[ingredients/soy]] | 9 | 2 | 2 | 2 | 2 | 1 | Cd, Al, Ni | complete |
| 17 | [[ingredients/peanuts]] | 9 | 2 | 2 | 2 | 2 | 1 | Cd, Pb | complete |
| 18 | teff | 9 | 1 | 2 | 3 | 1 | 2 | Cd, Pb, Fe-confound | missing |
| 19 | plantain | 9 | 2 | 2 | 3 | 1 | 1 | Pb, Cd | missing |
| 20 | [[ingredients/yam]] | 9 | 1 | 2 | 3 | 2 | 1 | Cd, Pb | complete |
| 21 | taro | 9 | 1 | 2 | 3 | 2 | 1 | Cd, Pb | missing |
| 22 | [[ingredients/fish]] | 12 | 3 | 3 | 3 | 2 | 1 | MeHg, tHg, Cd | complete |
| 23 | tuna | 11 | 3 | 3 | 2 | 1 | 2 | MeHg | missing |
| 24 | [[ingredients/shark]] (and swordfish/king-mackerel) | 10 | 3 | 3 | 1 | 1 | 2 | MeHg | complete |
| 25 | [[ingredients/shellfish]] | 10 | 2 | 3 | 2 | 1 | 2 | Cd, iAs, Pb | complete |
| 26 | [[ingredients/bivalve-molluscs]] | 10 | 2 | 3 | 2 | 1 | 2 | Cd, Pb | complete |
| 27 | brown rice / [[ingredients/rice-bran]] (page TBD) | 11 | 3 | 3 | 2 | 2 | 1 | iAs, Cd | partial (rice-bran-oil only) |
| 28 | infant rice cereal | 11 | 2 | 2 | 2 | 2 | 2 → +1 | iAs, Cd | partial (overlaps rice-cereal) |
| 29 | [[ingredients/infant-formula-powder]] | 11 | 2 | 2 | 2 | 2 | 2 → +1 | Pb, Cd, Al | complete |
| 30 | [[ingredients/breastmilk]] | 9 | 2 | 1 | 3 | 1 | 2 | Pb, Cd | complete |
| 31 | [[ingredients/honey]] | 9 | 1 | 3 | 2 | 1 | 2 | Pb, Cd | complete |
| 32 | [[ingredients/spices]] | 11 | 2 | 3 | 2 | 2 | 2 | Pb, Cr | complete |
| 33 | herbal botanical supplements | 10 | 2 | 3 | 2 | 2 | 1 | Pb, As, Hg, Cd | partial ([[ingredients/herbal-botanicals]] stub) |
| 34 | [[ingredients/organ-meats]] | 9 | 2 | 3 | 1 | 1 | 2 | Cd, Pb | complete |
| 35 | [[ingredients/tea]] / [[ingredients/camellia-sinensis]] | 9 | 2 | 2 | 3 | 1 | 1 | Al, Pb, F-confound | partial |

## Tier 2 — High priority

Score 6 to 8. 45 entries.

| # | Ingredient | Score | Exp | Cont | Pop | HMTc | Vuln | Primary metals | Page status |
|---|------------|-------|-----|------|-----|------|------|----------------|-------------|
| 36 | [[ingredients/lettuce]] | 8 | 2 | 2 | 2 | 1 | 1 | Cd, Pb | complete |
| 37 | [[ingredients/cabbage]] | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Pb | complete |
| 38 | [[ingredients/broccoli]] | 7 | 1 | 1 | 2 | 1 | 2 | Cd | complete |
| 39 | amaranth leaves | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Pb | missing |
| 40 | [[ingredients/collard-greens]] | 7 | 1 | 2 | 1 | 1 | 2 | Cd, Pb | complete |
| 41 | mustard greens | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Pb | missing |
| 42 | [[ingredients/beet]] | 7 | 1 | 2 | 2 | 1 | 1 | Pb, Cd | complete |
| 43 | radish | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Pb | missing |
| 44 | parsnip / [[ingredients/parsnips]] | 6 | 1 | 1 | 2 | 1 | 1 | Pb, Cd | complete |
| 45 | [[ingredients/onions]] | 7 | 1 | 1 | 3 | 1 | 1 | Pb, Cd | complete |
| 46 | garlic | 7 | 1 | 1 | 3 | 1 | 1 | Pb, Cd | missing |
| 47 | [[ingredients/tomato]] | 7 | 1 | 1 | 3 | 1 | 1 | Cd, Pb, Sn(canned) | complete |
| 48 | [[ingredients/cucumber]] | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | complete |
| 49 | bell pepper / [[ingredients/green-bell-pepper]] | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | complete |
| 50 | [[ingredients/squash]] / butternut-squash | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | complete |
| 51 | [[ingredients/apple]] | 8 | 1 | 1 | 3 | 2 | 1 | Pb, Cd | complete |
| 52 | [[ingredients/banana]] | 7 | 1 | 1 | 3 | 1 | 1 | Cd | complete |
| 53 | [[ingredients/grapes]] (and wine) | 7 | 1 | 2 | 2 | 1 | 1 | Pb, Cd, Cu | complete |
| 54 | [[ingredients/oranges]] / citrus | 7 | 1 | 1 | 3 | 1 | 1 | Pb, Cd | complete |
| 55 | [[ingredients/mango]] | 7 | 1 | 1 | 3 | 1 | 1 | Cd, Pb | complete |
| 56 | [[ingredients/blueberries]] / berries | 7 | 1 | 1 | 2 | 2 | 1 | Cd, Pb | complete |
| 57 | [[ingredients/pear]] | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | complete |
| 58 | [[ingredients/peach]] / peaches | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | complete |
| 59 | [[ingredients/lentils]] | 8 | 2 | 2 | 2 | 1 | 1 | Cd, Pb | complete |
| 60 | [[ingredients/beans]] | 8 | 2 | 2 | 2 | 1 | 1 | Cd, Pb | complete |
| 61 | chickpea | 8 | 2 | 2 | 2 | 1 | 1 | Cd, Pb | missing |
| 62 | cowpea | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Pb | missing |
| 63 | pigeon pea | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Pb | missing |
| 64 | [[ingredients/sunflower-seeds]] | 7 | 1 | 2 | 1 | 1 | 2 | Cd | complete |
| 65 | sesame seed | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Pb | missing |
| 66 | flax / chia (omega-seed cluster) | 6 | 1 | 1 | 1 | 2 | 1 | Cd | missing |
| 67 | [[ingredients/almond]] | 7 | 1 | 1 | 2 | 2 | 1 | Cd, Pb | complete |
| 68 | [[ingredients/cashews]] | 7 | 1 | 2 | 2 | 1 | 1 | Cd, Ni | complete |
| 69 | brazil nut | 7 | 1 | 2 | 1 | 1 | 2 | Ba, Se-confound, Cd | missing |
| 70 | [[ingredients/walnuts]] | 6 | 1 | 1 | 2 | 1 | 1 | Cd | complete |
| 71 | [[ingredients/hazelnuts]] | 6 | 1 | 1 | 2 | 1 | 1 | Cd | complete |
| 72 | [[ingredients/coconut]] | 6 | 1 | 1 | 2 | 1 | 1 | Pb, Cd | complete |
| 73 | salmon | 8 | 2 | 2 | 2 | 1 | 1 | MeHg, Cd | partial (in fish) |
| 74 | sardine | 7 | 1 | 1 | 2 | 1 | 2 | MeHg-low, Cd | missing |
| 75 | shrimp / prawn | 7 | 1 | 2 | 2 | 1 | 1 | Cd, As, Pb | partial (in shellfish) |
| 76 | oyster | 7 | 1 | 3 | 1 | 1 | 1 | Cd, Pb, Zn | partial (in bivalves) |
| 77 | mussel / clam | 7 | 1 | 3 | 1 | 1 | 1 | Cd, Pb | partial (in bivalves) |
| 78 | [[ingredients/freshwater-fish]] | 7 | 1 | 2 | 2 | 1 | 1 | MeHg, Pb | complete |
| 79 | [[ingredients/beef]] | 7 | 1 | 1 | 3 | 1 | 1 | Cd, Pb | complete |
| 80 | [[ingredients/chicken]] | 7 | 1 | 1 | 3 | 1 | 1 | Pb, As (in feed) | complete |
| 81 | game meat (venison / ammunition Pb) | 6 | 1 | 3 | 1 | 0 | 1 | Pb | missing |
| 82 | [[ingredients/eggs]] | 6 | 1 | 1 | 3 | 1 | 0 | Pb, Cd | complete |
| 83 | [[ingredients/whole-milk]] / cow milk | 7 | 1 | 1 | 3 | 1 | 1 | Pb, Cd | complete |
| 84 | [[ingredients/cinnamon]] | 8 | 1 | 3 | 2 | 1 | 1 | Pb, Cr | complete |
| 85 | [[ingredients/black-pepper]] | 7 | 1 | 2 | 2 | 1 | 1 | Pb, Ni | complete |
| 86 | cumin | 7 | 1 | 2 | 2 | 1 | 1 | Pb, Cd | missing |
| 87 | chili / paprika | 8 | 1 | 3 | 2 | 1 | 1 | Pb, Cr, Cd | missing |
| 88 | ginger | 7 | 1 | 2 | 2 | 1 | 1 | Pb, Cd | missing |
| 89 | [[ingredients/coffee]] | 7 | 1 | 1 | 3 | 1 | 1 | Cd, Al, Pb | complete |
| 90 | [[ingredients/chocolate]] (consumer-facing surface for cocoa) | 8 | 2 | 3 | 2 | 1 | 0 | Cd, Pb | complete |
| 91 | drinking water (tap) | 8 | 2 | 2 | 3 | 0 | 1 | Pb, Cu, As, U | missing |
| 92 | bottled water | 6 | 1 | 1 | 3 | 0 | 1 | Sb, As | missing |
| 93 | [[ingredients/fruit-juice]] | 7 | 1 | 2 | 2 | 1 | 1 | iAs, Pb | complete |
| 94 | [[ingredients/grape-juice]] | 7 | 1 | 2 | 1 | 1 | 2 | iAs, Pb | complete |
| 95 | [[ingredients/apple-juice]] | 7 | 1 | 2 | 2 | 1 | 1 | iAs, Pb | complete |
| 96 | cultivated mushroom | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Hg | partial ([[ingredients/canned-mushrooms]] only) |
| 97 | [[ingredients/wild-mushrooms]] | 7 | 1 | 3 | 1 | 0 | 1 | Cd, Hg, Cs-confound | complete |
| 98 | quinoa / [[ingredients/quinoa]] | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | complete |
| 99 | barley | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | missing |
| 100 | rye | 6 | 1 | 1 | 2 | 1 | 1 | Cd, Pb | missing |

## Tier 3 — Priority backlog (illustrative; not lint-enforced)

Tier 3 entries are tracked here but not enforced. Examples include barley malt, hops, capers, vanilla, gelatin, agar, carrageenan, locust-bean gum, xanthan gum, yeast, vinegars beyond the existing pages, mineral salts, and protein isolates (whey, pea, hemp). Pages get built as contributing sources accumulate organically.

## Gap summary as of v0

Counting against the table above:

- **Tier 1 gaps (35 entries, must close within 90 days):** sorghum, millet, teff, plantain, taro, herbal botanicals (full page from stub), brown rice / rice bran as a distinct ingredient, infant rice cereal as a distinct ingredient. **8 missing or substantially-incomplete pages.**
- **Tier 2 gaps (45 entries, 180-day target):** amaranth leaves, mustard greens, radish, garlic, chickpea, cowpea, pigeon pea, sesame seed, flax/chia, brazil nut, sardine, game meat, cumin, chili/paprika, ginger, drinking water (tap), bottled water, cultivated mushroom (consolidated page), barley, rye. **20 missing pages.**
- **Tier 3:** not counted against lint.

Several existing pages are duplicates that should be merged before the 90-day clock starts on Tier 1: `carrot`/`carrots`, `potato`/`potatoes`, `apple`/`apples` (if exists), `cashews`/`cashew-nuts`, `orange-juice`/`oranges`, `tea`/`camellia-sinensis`. Merges should preserve the more complete page and redirect aliases. The merge work is logged separately as [[log#coverage-priorities-cleanup-v0]].

## Lint integration

`tools/audit-coverage-priorities.mjs` (TBD) reads this page, joins against the actual ingredient-page inventory, and emits findings in three categories: missing Tier 1 page (build failure), missing Tier 2 page (warning), and page status drift (page exists but is `partial` when this list claims `complete`, or vice versa). The audit runs in the existing prebuild gate.

## Scoring sources

This v0 list draws on:

- EFSA Scientific Opinions on Pb (2010, 2013), Cd (2009, 2012), iAs (2014), MeHg (2012, 2015), Al (2008), Ni (2015, 2020), Sn (2005), U (2009).
- JECFA evaluations through the 90th Meeting (2020) for Pb, Cd, iAs, MeHg, Sn.
- FAO Statistical Yearbook 2024 for staple-food production and consumption volumes.
- WHO GEMS/Food contamination summaries through 2023.
- HMTc Cat 1 and Cat 2 locked scopes plus Cat 3–8 scoping notes (see [[docs/order-of-operations]]).
- Internal corpus knowledge of the worst documented per-serving values for ingredients with substantial wiki coverage as of 2026-05-17.

Scores will tighten as the auto-fetch layer closes the coverage gaps identified here. The list itself will then be recalibrated against the better-resolved evidence base in `v1`.
