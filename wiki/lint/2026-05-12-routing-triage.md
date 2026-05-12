---
type: lint
op: triage
date: 2026-05-12
scope: routing_unresolved
initial_count: 256
final_count: 46
status: in-progress
passes:
  - pass: 1
    initial_count: 256
    final_count: 37
    files_modified: 74
    rows_resolved: 219
  - pass: 2
    initial_count: 93
    final_count: 46
    files_modified: 30
    rows_resolved: 47
    note: "Second-pass triage of new ingest entries from seasonal-geographic-variance batch (2026-05-12)"
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
| **Total rows resolved (pass 1)** | **219** |
| **Total rows resolved (pass 2)** | **47** |
| **Total rows resolved (cumulative)** | **266** |
| Remaining (new-page proposals) | 46 |
| New-page proposals for Karen | 6 |

The 46 remaining entries will resolve when Karen approves and creates the 6 proposed pages: `ingredients/breastmilk`, `ingredients/cereals`, `ingredients/shellfish`, `ingredients/freshwater-fish`, `ingredients/quinoa`, `products/seafood`.

---

## Pass 2 — 2026-05-12 (seasonal-geographic-variance batch)

The second ingest pass (seasonal-geographic-variance batch) added 56 new unresolved entries, bringing the total from 37 to 93. After pass 2 triage, the count is back to 46 (all above-threshold new-page proposals). 30 source files were modified across the following categories.

### Frontmatter convention drift fixes (pass 2)

| Broken slug | Correct slug | Source count |
|---|---|---|
| `leafy-vegetables` | `leafy-greens` | 3 (ametepey2018, romero-crespo2023, rusin2021) |
| `onion` | `onions` | 1 (ametepey2018) |
| `sunflower-seed` | `sunflower-seeds` | 1 (fu2022) |
| `potato` | `potatoes` | 1 (romero-crespo2023) |
| `dairy` | `milk-and-dairy` | 1 (erol2025) |
| `tea` | `camellia-sinensis` | 9 (brzezicha2016, fan2025, hu2023, kazeminia2023, li2013, li2015, li2021, yaqub2018, zhang2018) |
| `tea` | `camellia-sinensis` + `herbal-botanicals` | 1 (salmani2023 — mixed camellia sinensis and herbal scope; expanded to two slugs) |
| `infant-cereal` (product) | `baby-cereals-dry-rice-based` | 3 (carey2015, cr-fsasc2014, signes-pastor2017) |
| `infant-rice-cereal` (product) | `baby-cereals-dry-rice-based` | 6 (carey2018, efsa2021, efsa2024, fda2013, fda2018, seyfferth2025) |

### Below-threshold redirects to parent pages (pass 2)

| Slug | → Parent | Source | Rationale |
|---|---|---|---|
| `wheat-flour` | `wheat` | asaditouranlou2025 | Processed form of wheat; 1 paper |
| `bread` | `wheat` | asaditouranlou2025 | Baked wheat product; 1 paper |
| `brown-rice` | removed (already has `rice`) | dai2025 | Redundant; rice.md covers all rice types |
| `rice-bran` | removed (already has `rice`) | seyfferth2025 | Sub-fraction of rice; 1 paper |
| `mushrooms` | `wild-mushrooms` | cfia2025 | Generic mushrooms → closest existing parent |
| `spices` | `herbal-botanicals` | cfia2025 | Culinary spices; 1 paper |
| `cheese` | `milk-and-dairy` | erol2025 | Sub-type; 1 paper |
| `breakfast-cereals` (product) | removed | hassan2025 | No parent product page; 1 paper; routed via `corn` ingredient instead |
| `corn-flour` | `corn` | hassan2025 | Corn-derived; 1 paper |
| `lake-whitefish` | `fish` | jermilova2025 | Species-level; routes to `freshwater-fish` once that page is created |
| `northern-pike` | `fish` | jermilova2025 | Species-level |
| `lake-trout` | `fish` | jermilova2025 | Species-level |
| `durum-wheat` | removed (already has `wheat`) | maccaferri2019 | Sub-species; wheat.md covers durum |
| `pasta` (product) | moved to ingredients | maccaferri2019 | `pasta.md` exists as ingredient page; was incorrectly declared as product |
| `rice-products` (product) | removed | dai2025 | No parent product page; soil-science paper routes via `rice` ingredient |
| `rice-protein-powder` (product) | removed | fda2013 | Below threshold (1 source); routes via `rice` ingredient |
| `seaweed` | `seafood` | nour2025 | Marine-origin food; 1 paper; no dedicated algae parent page |
| `small-indigenous-fish` | `fish` | paul2025 | Species-level; 1 paper |
| `berry` | `fruit` | rusin2021 | Fruit sub-type; 1 paper |
| `sardine` | `fish` | venant2025 | Species-level; 1 paper |
| `camel-milk` | `milk-and-dairy` | yazdanian2025 | Dairy sub-type; 1 paper |

### New-page proposals added in pass 2

`ingredients/quinoa` — **6 papers** (bedoya-perales2023, ccopi2026, cr-fsasc2014, gul2024, roman-ochoa2021, rosales-huamani2023). Andean grain with distinct heavy metal profile, particularly Cd via high-altitude Andean soils. Six papers all specifically measure quinoa as a distinct commodity. Above threshold. Sources include both Peruvian field studies and a broad Consumer Reports grain survey. Proposed slug: `quinoa`.

The other 5 proposals from pass 1 remain open with updated source counts: `freshwater-fish` now has 9 sources (was 6; added auzier-guimaraes2025, jermilova2025, venant2025 in this batch).
