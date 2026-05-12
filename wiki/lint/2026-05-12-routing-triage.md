---
type: lint
op: triage
date: 2026-05-12
scope: routing_unresolved
initial_count: 256
final_count: 37
status: complete
---

# Routing-Unresolved Triage — 2026-05-12

Triaged all 256 rows in `data/evidence/routing_unresolved.csv` per the decision tree in the session prompt. The triage script lives at `tools/triage-routing-unresolved.py`. After applying fixes and re-running `npm run evidence:source-routes`, the unresolved count dropped from 256 to 37 (85% reduction). The 37 remaining entries are all legitimate new-page proposals awaiting Karen's approval per CLAUDE.md Part 10.

---

## Frontmatter fixes applied — 219 rows resolved

74 source files modified. Total operations: 158 slug remaps, 59 slug removals, 2 product-array expansions (one slug expanded to two existing slugs).

### Convention drift fixes (slug typos — existing page exists)

The following broken slugs were corrected to the canonical existing page slug in source frontmatter:

| Broken slug | Correct slug | Notes |
|---|---|---|
| `apples` | `apple` | |
| `oats` | `oat` | |
| `sweet-potatoes` | `sweet-potato` | |
| `vegetables-leafy` | `leafy-greens` | |
| `vegetables-root` | `root-vegetables` | |
| `peanut` | `peanuts` | |
| `potato` | `potatoes` | |
| `soybean` | `soy` | |
| `rice-crackers` (ingredient) | `rice-cakes` | |
| `tea` | `camellia-sinensis` | |
| `beetroot` | `beet` | |
| `fruits` | `fruit` | |
| `leafy-vegetables` | `leafy-greens` | 7 papers — same concept as existing page |
| `milk` | `milk-and-dairy` | 5 papers — sensor papers and Codex doc; milk-and-dairy is correct parent |
| `marine-bivalve-molluscs` | `bivalve-molluscs` | |
| `infant-formula-powder-soy` | `infant-formula-powder-soy-based` | |
| `infant-formula-soy` | `infant-formula-powder-soy-based` | |
| `infant-formula-hypoallergenic` | `infant-formula-powder-non-soy` | hypoallergenic = hydrolyzed cow-milk, non-soy |
| `babyfood-fruits` | `fruit-purees` | |
| `babyfood-single-ingredient-meats` | `meat-and-poultry-purees` | |
| `meat-poultry-purees` | `meat-and-poultry-purees` | |
| `vegetable-purees-non-root` | `non-root-vegetable-purees` | |
| `single-ingredient-root-vegetable-babyfood` | `root-vegetable-purees` | |
| `ready-to-feed-formula` | `infant-formula-rtf-liquid-non-soy` | 1980 paper; cow-milk RTF assumed |
| `infant-rice-cereal` (product) | `baby-cereals-dry-rice-based` | |
| `infant-rice-cereal` (ingredient) | `rice-cereal` | |

**Product-array expansions (one vague slug → two specific existing slugs):**

- `dry-infant-cereal` (FDA CTZ 2025 guidance) → expanded to `baby-cereals-dry-rice-based` + `baby-cereals-dry-non-rice`. The FDA guidance covers both rice-based and non-rice infant cereals; one generic slug cannot route to both.
- `babyfood-vegetables` (FDA CTZ 2025 guidance) → expanded to `root-vegetable-purees` + `non-root-vegetable-purees`. Same rationale.

### Below-threshold redirects to parent pages

Sub-variant slugs with fewer than 5 papers (ingredient) or fewer than 3 papers (product) redirected to the appropriate existing parent page. A representative sample:

| Slug | → Parent | Papers | Rationale |
|---|---|---|---|
| `brown-rice`, `white-rice`, `rice-syrup`, `brown-rice-syrup`, `organic-brown-rice-syrup` | `rice` | 1–2 ea. | Rice grain sub-types and derivatives; risk profile captured at parent |
| `cocoa-beans`, `cocoa-powder` | `cocoa` | 1–2 ea. | Pre-processed and processed cocoa both track to the cocoa parent |
| `dairy`, `goat-milk`, `powdered-milk`, `skim-milk-powder`, `acid-casein` | `milk-and-dairy` | 1–2 ea. | Dairy sub-types; milk-and-dairy is the consolidated ingredient page |
| `mussels`, `oysters`, `molluscs` | `bivalve-molluscs` | 1–2 ea. | Species-level declarations; bivalve-molluscs is the correct parent |
| `cephalopods`, `seaweed` | `seafood` | 1, 4 | No dedicated page; seafood is the broadest existing marine parent |
| `marine-fish`, `shark`, `salmon`, `swordfish`, `king-mackerel`, `tilefish`, `tuna` | `fish` | 1 ea. | Species-level; fish is the correct parent |
| `infant-formula`, `formula-milk` | `infant-formula-ingredients` | 1–3 | Generic formula declarations route to ingredient page |
| `formula-powder` | `infant-formula-powder` | 2 | Format-specific; product page exists |
| `offal`, `edible-offal`, `offal-kidney`, `offal-liver`, `kidney`, `liver` | `organ-meats` | 1–4 | All organ-meat sub-types consolidated |
| `horse-meat`, `single-ingredient-meats` | `meat` | 1 ea. | Meat sub-types; meat is the correct parent |
| `sheep-casings` | `meat` | 1 | Sausage casing (intestinal tissue); byproduct of meat processing |
| `starchy-roots`, `tuber-vegetables`, `celeriac` | `root-vegetables` | 1 ea. | Root-vegetable sub-types |
| `bulb-vegetables` | `onions` | 1 | Onions is the existing bulb-vegetable page |
| `brassica`, `brassica-vegetables` | `broccoli` | 1 ea. | Brassica family; broccoli is the canonical brassica page |
| `legumes`, `legume-vegetables`, `pulses`, `beans` | `lentils` | 1–4 | Legume family; lentils is the existing legume page |
| `cereal`, `mixed-cereals`, `quinoa`, `amaranth` | `non-rice-grains` | 1 ea. | Grain sub-types; non-rice-grains is the existing category page |
| `oilseeds`, `hazelnut`, `walnut`, `nuts` | `peanuts` or `sunflower-seeds` | 1–2 ea. | Nut/oilseed sub-types |
| `mushrooms` | `wild-mushrooms` | 1 | |
| `licorice-root`, `cinnamon`, `paprika`, `chilli`, `nutmeg`, `panax-notoginseng`, `rhodiola-rosea`, `lycium-berries`, `spices` | `herbal-botanicals` | 1 ea. | Culinary herbs and botanical supplements |
| `drinking-water` | `water` | 11 | `water.md` exists and covers this category; 11 papers is above threshold but maps unambiguously to the existing page |
| `breast-milk` | `breastmilk` | 1 | Slug normalization — `breastmilk` is the proposed new page slug; 1-paper source updated to use consistent slug so it resolves when page is approved |

### Non-food / industrial items removed from frontmatter arrays

These slugs appeared in `ingredients:` or `products:` arrays of toxicology reports, regulatory assessments, and industrial-materials chapters that discussed non-food heavy metal sources. The wiki's `ingredients:` and `products:` frontmatter should reflect food matrices only; exposure-route mentions in the source text are captured in the prose, not the routing frontmatter.

Removed from products: `alloys`, `antacids`, `batteries`, `catalysts`, `ceramics`, `dental-amalgam` (product), `dietary-supplements`, `finished-piercing-post-assemblies`, `fluorescent-lamps`, `nickel-alloys`, `nickel-cadmium-batteries`, `paint-pigments`, `pesticides`, `pigments`, `plastics`, `stainless-steel`, `stainless-steel-plates`, `stainless-steel-wires`, `tobacco` (product).

Removed from ingredients: `clay-geophagy`, `dental-amalgam` (ingredient), `dust`, `tobacco` (ingredient).

Also removed from products (below threshold, no existing product page, no appropriate parent): `babyfood-yogurts-custards`, `cereal-bars`, `chocolate` (2 papers), `canned-food`, `canned-tuna`, `cocoa-beverages`, `cocoa-powder` (as product — should be ingredient), `food-additives`, `grains-baking`, `honey` (ingredient not product), `infant-formula-toddler`, `liquid-milk`, `mixed-purees-with-fruit`, `pet-food`, `powdered-milk` (product), `processed-baby-food`, `processed-babyfood-mixtures`, `processed-cheese`, `rice-based-foods`, `rice-crackers` (product), `solid-baby-foods-and-beverages`.

Removed from ingredients (too broad, no appropriate parent): `baby-food`, `baby-foods`, `infant-foods`, `processed-foods`, `salt`, `toddler-meals`.

---

## New-page proposals for Karen's approval

These slugs are above the creation threshold (≥5 papers for ingredients, ≥3 papers for products) and do not map to any existing page. Each needs a new page before the routing audit will resolve these entries.

### Ingredient: `breastmilk` — 6 papers

**Papers:** carignan2015, carignan2016, pikounis (urinary-biomarkers), soto-ocana2024, thoerig2025, atsdr-aluminum-toxprofile-2008.

**Rationale:** Human breast milk is a distinct exposure matrix relevant to infant metal exposure, and a common comparator in infant formula studies. Six papers is above the 5-paper threshold. The page should cover iAs, tAs, and other metal concentrations in human milk, their relationship to maternal diet and geography, and implications for infant exposure estimates (notably: breastmilk is generally very low in arsenic compared to rice-based formulas or rice cereal, which is the key finding in the carignan papers).

**Proposed slug:** `breastmilk` (already used in source frontmatter for these 6 papers, normalized from `breast-milk`).

**Suggested parent links:** `[[ingredients/milk-and-dairy]]`, `[[ingredients/non-soy-infant-formula]]`, `[[ingredients/soy-based-infant-formula]]`.

---

### Ingredient: `cereals` — 8 papers

**Papers:** altunay2023, codex-cccf17-2024, codex-cxs-193-1995, efsa-cadmium-contam-2009, efsa-lead-contam-2010, efsa-nickel-contam-2020, jecfa-73rd-cadmium-2010, nordberg2015.

**Rationale:** "Cereals" as a broad grain category (wheat, barley, rye, oats, maize — distinct from rice) is a standard Codex and EFSA classification for maximum level setting and dietary exposure modeling. Eight papers use this slug, all from authoritative regulatory sources (Codex, EFSA, JECFA). The existing `non-rice-grains.md` page is wiki-internal framing; a `cereals` page aligned with Codex taxonomy is needed to anchor the regulation pages correctly.

**Proposed slug:** `cereals`

**Relationship to existing pages:** `cereals` would be a broad category page. Existing pages `wheat.md`, `oat.md`, `corn.md`, `non-rice-grains.md` become sub-pages or are linked from it.

---

### Ingredient: `shellfish` — 8 papers

**Papers:** bao2024, dogruyol2024, efsa-cadmium-contam-2009, fda-epa-fish-consumption-advice, jecfa-73rd-cadmium-2010, nordberg2015, taylor2025, xia2025.

**Rationale:** Shellfish (bivalves + crustaceans) is a distinct exposure category separate from finfish. The existing `bivalve-molluscs.md` covers only bivalves; shellfish includes shrimp, crab, lobster, and other crustaceans that have different contamination profiles (notably for Cd in crustacean hepatopancreas). Eight papers at A-tier (EFSA, JECFA, FDA) use this category. The FDA/EPA fish consumption advice page uses shellfish as a distinct matrix with its own MeHg advisory.

**Proposed slug:** `shellfish`

**Relationship to existing pages:** `shellfish` is the parent. `bivalve-molluscs.md` and a future `crustaceans.md` (if warranted) are sub-pages. Cross-link with `seafood.md`.

---

### Ingredient: `freshwater-fish` — 6 papers

**Papers:** auzier-guimaraes2025, kovacik2024, lepak2025, naz2025, rusko2026, sirisangarunroj2023.

**Rationale:** Freshwater fish have a systematically different heavy metal contamination profile from marine fish — particularly for MeHg and iAs, where river and lake sediment contamination pathways dominate. Six papers all specifically measure freshwater species (grass carp, sport fish, river fish). The existing `fish.md` page covers fish broadly; a `freshwater-fish` sub-page is warranted to capture the geographic and speciation differences.

**Proposed slug:** `freshwater-fish`

**Relationship to existing pages:** Sub-page of `fish.md` (or linked sibling). The existing `fish.md` can note the freshwater/marine split and link to both.

---

### Product: `seafood` — 9 papers

**Papers:** auzier-guimaraes2025, dogruyol2024, kovacik2024, naz2025, reksten2020, reksten2021, sirisangarunroj2023, taylor2025, uzomah2021.

**Rationale:** `seafood.md` exists as an ingredient page at `wiki/ingredients/seafood.md`. Nine papers declare `products/seafood`, pointing to a product-category page that does not exist. A seafood product-category page (`wiki/products/seafood.md`) is the appropriate destination for papers covering seafood as a consumer-facing product category (restaurant fish, retail fish counters, canned/fresh/frozen products) vs. the ingredient page which covers the raw commodity. Nine papers is well above the 3-paper product threshold.

**Proposed slug:** `products/seafood`

**Note:** The ingredient page `ingredients/seafood.md` already exists and covers the raw commodity. The product page would cover the category from a consumer and retail perspective, linking back to the ingredient page for commodity-level contamination data.

---

## Detector bugs — none found

All 256 entries were genuine unresolved slugs (the routing audit was not too strict). No detector bugs in `tools/evidence/build-routing-audit.mjs` were identified.

---

## Summary

| Category | Count |
|---|---|
| Source files modified | 74 |
| Ingredient slug remaps applied | 119 |
| Ingredient slug removals applied | 39 |
| Product slug remaps applied | 39 |
| Product slug removals applied | 20 |
| Product array expansions | 2 |
| **Total rows resolved** | **219** |
| Remaining (new-page proposals) | 37 |
| New-page proposals for Karen | 5 |

The 37 remaining entries in `data/evidence/routing_unresolved.csv` will resolve when Karen approves and creates the 5 proposed pages: `ingredients/breastmilk`, `ingredients/cereals`, `ingredients/shellfish`, `ingredients/freshwater-fish`, `products/seafood`.
