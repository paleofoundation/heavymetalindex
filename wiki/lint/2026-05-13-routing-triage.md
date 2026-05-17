---
type: lint
date: 2026-05-13
op: routing-triage
scope: data/evidence/routing_unresolved.csv
status: complete
noindex: true
---

# Routing Triage — 2026-05-13

Starting state: 425 unresolved routing entries across 176 source pages. Ending state: 50 unresolved entries, all of which are deliberate new-page proposals awaiting Karen's approval.

## Summary

| Category | Action | Count |
|---|---|---|
| 1 — Ingredient slug typo / convention drift | Fixed in source frontmatter | 164 |
| 1 — Product declared for existing ingredient page | Moved to ingredients array | 40 |
| 1 — Product declared for existing product page | Fixed slug in products array | 19 |
| 1 — Entries removed (no viable parent) | Removed from array | 3 |
| Deduplication (multiple slugs → same target) | Deduplicated | 149 |
| 2 — Below-threshold sub-variants (already absorbed into category-1 fixes above) | — | — |
| 3 — New-page proposals | Surfaced to Karen, frontmatter left as-is | 50 |
| 4 — Detector bugs | None identified | 0 |

**171 source pages modified.** Tool: `tools/triage-routing-unresolved.mjs`.

---

## Category 1 — Frontmatter fixes applied (sample)

Representative fixes made without asking; full list is in the git diff.

**Ingredient slug corrections (convention drift → existing page):**

| Old slug | Correct slug | Rationale |
|---|---|---|
| `leafy-vegetables` (11 papers) | `leafy-greens` | Wiki page is `leafy-greens.md` |
| `marine-fish` (8 papers) | `seafood` | Covered by `seafood.md`; no separate marine-fish page |
| `maize` (4 papers) | `corn` | Wiki page is `corn.md` |
| `dairy` / `dairy-milk` / `cow-milk` / `milk` | `milk-and-dairy` | Wiki page is `milk-and-dairy.md` |
| `human-milk` (2 papers) | `breastmilk` | Wiki page is `breastmilk.md` |
| `mussels` / `mussel` / `bivalves` | `bivalve-molluscs` | Wiki page is `bivalve-molluscs.md` |
| `cacao` / `cocoa-beans` | `cocoa` | Wiki page is `cocoa.md` |
| `dark-chocolate` | `chocolate` | Wiki page is `chocolate.md` |
| `soybean` / `soybeans` | `soy` | Wiki page is `soy.md` |
| `tea` / `green-tea` / `kombucha` | `camellia-sinensis` | Wiki uses scientific name |
| `oat-milk` / `rice-milk` / `soy-milk` / `almond-milk` / `plant-based-milk` | `plant-milk` | Wiki page is `plant-milk.md` |
| `brown-rice` / `white-rice` / `rice-bran` | `rice` | Sub-variants handled in `rice.md` body |
| `wheat-flour` / `wheat-grain` / `durum-wheat` | `wheat` | Wiki page is `wheat.md` |
| `mushrooms` (5 papers) | `wild-mushrooms` | Wiki page is `wild-mushrooms.md` |
| `leafy-vegetables` / `bok-choy` / `pak-choi` / `kale` / `brassica` / `cabbage` / `swiss-chard` | `leafy-greens` | All sub-variants of `leafy-greens.md` |
| `infant-formula` (generic) | `infant-formula-powder` | Most general existing ingredient page |
| `drinking-water` | `water` | Wiki page is `water.md` |
| `offal` / `organ-meat` / `poultry-liver` / `poultry-offal` / `beef-liver` / `sheep-liver` / `venison-liver` | `organ-meats` | Wiki page is `organ-meats.md` |
| `spices` / `cinnamon` / `turmeric`\* / `garlic` / `ginger` / `pepper` / `coriander` / `mint` etc. | `herbal-botanicals` | Wiki page is `herbal-botanicals.md` (\*turmeric stays unresolved as new-page proposal) |

**Product → ingredient reclassifications:**

Several source pages declared common food commodities under `products:` when `ingredients:` is correct (no product-category page exists for those commodities). Examples:

| Product slug | Moved to ingredient | Rationale |
|---|---|---|
| `eggs` (3 papers) | `eggs` | `eggs.md` exists in ingredients |
| `beef` (2 papers) | `beef` | `beef.md` exists in ingredients |
| `freshwater-fish` (3 papers) | `freshwater-fish` | `freshwater-fish.md` exists in ingredients |
| `fish` (5 papers) | `fish` | `fish.md` exists in ingredients |
| `shellfish` (1 paper) | `shellfish` | `shellfish.md` exists in ingredients |
| `dairy` (2 papers) | `milk-and-dairy` | `milk-and-dairy.md` exists in ingredients |
| `poultry-meat` (3 papers) | `poultry` | `poultry.md` exists in ingredients |
| `canned-fish` / `canned-tuna` / `seafood-canned` | `tinned-fish` | `tinned-fish.md` exists in ingredients |
| `fish-seafood` / `fish-and-seafood` / `seafood-fresh` / `fermented-fish` / `salted-fish` | `seafood` | `seafood.md` exists in ingredients |
| `chocolate` / `dark-chocolate` (4 papers) | `chocolate` | `chocolate.md` exists in ingredients |
| `bread-and-baked-goods` / `biscuits` / `breakfast-cereals` | `wheat` / `cereals` | No bread product page; below threshold |
| `herbal-supplements` / `dietary-supplements` | `herbal-botanicals` | `herbal-botanicals.md` exists in ingredients |

**Product → product slug fixes:**

| Old product slug | Correct product slug | Rationale |
|---|---|---|
| `baby-food` (3 papers) | `infant-and-child-foods-master` | Master product page exists |
| `baby-food-grain-based` / `baby-food-purees` / `baby-snacks` | `infant-and-child-foods-master` | Generic → master page |
| `infant-cereal` (4 papers) | `baby-cereals-dry-rice-based` | Most specific existing page |
| `infant-rice-cereal` (3 papers) | `baby-cereals-dry-rice-based` | Direct match |
| `fermented-beverages` | `fermented-beverages-non-tea-based` | Exact existing product page |
| `herbal-tea` | `herbal-botanical-infusions` | Exact existing product page |
| `kombucha` | `kombucha-tea-based` | Exact existing product page |
| `fruit-puree-pouches` | `fruit-purees` | `fruit-purees.md` exists |

**Entries removed (no viable parent, no routing value):**

- `food-additives` from `efsa2022-sulfites-toxic-elements` — too generic; no appropriate ingredient page.
- `processed-foods` from `dufault2015-blood-mercury-glucose-nhanes` — too generic.
- `canned-foods` from `mititelu2025-heavy-metal-food-contamination-review` — too generic.
- `pet-food` from `du2025-petfood-china-metals` and `pain2023-lead-pheasant-dogfood-uk` — likely out of scope for a human food contamination wiki; flagged for Karen to confirm.

---

## Category 2 — Below-threshold sub-variants

The majority of category-2 redirects were folded into the category-1 ingredient-slug fixes above (e.g., `mullet` → `seafood`, `salmon` → `seafood`, `shrimp` → `shellfish`, `cinnamon` → `herbal-botanicals`). The paper counts for each are below the 5-paper ingredient threshold or 3-paper product threshold per CLAUDE.md Part 10.

Notable groupings:
- All specific fish species below threshold (`mullet` 3, `salmon` 3, `shrimp` 4, `catfish` 2, `herring` 2, etc.) → redirected to `seafood`, `freshwater-fish`, or `shellfish` as appropriate.
- All seaweed sub-types (`kelp`, `laver`, `kombu-kelp`, `spirulina`, `chlorella`, `algae`, `duckweed`) → temporarily redirected to `seafood` pending seaweed page approval.
- All spice sub-types below threshold → `herbal-botanicals`.
- Grain sub-types (`barley`, `rye`, `millet`, `tef`, `sorghum`, `amaranth`, `buckwheat`) → `non-rice-grains`.
- Legume sub-types (`beans`, `legumes`, `cowpea`, `peas`) → `lentils`.
- Fruit sub-types (`citrus`, `grape`, `mango`, `lemon`, `lime`, `orange`) → `oranges` or `fruit` as appropriate.
- Offal sub-types → `organ-meats`.
- Meat sub-types (`bushmeat`, `game-meat`, `kangaroo`, `camel-meat`, `venison`, `wild-game-meat`, `pheasant`, `quail-meat`) → `meat-and-poultry`.

---

## Category 3 — New-page proposals for Karen's approval

These 50 unresolved entries remain in `data/evidence/routing_unresolved.csv` and will stay unresolved until Karen approves each page creation. All are above the CLAUDE.md Part 10 threshold.

### 1. `wiki/ingredients/tilapia.md` — 11 papers (APPROVE / DEFER)

**Papers:** `abbas2023-heavy-metals-fish-egypt-aquaculture`, `egbe2023-heavy-metals-tilapia-cameroon`, `hussein2023-freshwater-marine-fish-egypt`, `laoye2024-fish-fruits-veg-heavy-metals-nigeria-review`, `marriott2023-lake-victoria-aquaculture-biogeochemistry`, `paez-osuna2024-fish-mercury-selenium-mexico`, `paezosuna2024-tilapia-mining-dams`, `sawe2023-fish-metals-lake-manyara-tanzania`, `shaalan2024-nile-tilapia-heavy-metals-egypt`, `shumba2025-tilapia-mercury-zambia-mining`, `zahran2023-mercury-tilapia-nannochloropsis`

**Rationale:** Tilapia is the most-studied freshwater aquaculture species in the corpus with its own Cd, Pb, and Hg contamination dynamics. 11 papers well above the 5-paper threshold. Distinct from the generic `freshwater-fish.md` — tilapia's dominance in African and Asian aquaculture makes it a high-priority standalone ingredient for the app model. Pending approval, these papers route to `freshwater-fish`.

---

### 2. `wiki/products/seafood.md` — 13 papers (APPROVE / DEFER)

**Papers:** `abbas2023-heavy-metals-fish-egypt-aquaculture`, `bae2023-tuna-heavy-metals-korea`, `bjerregaard2023-mercury-mussels-denmark`, `blanco2023-mercury-fish-valencia`, `cleary2021-fish-consumption-advisories-usa`, `li2024-global-fisheries-mehg`, `motta2022-marine-hg-isotopes`, `moura2022-hg-jaguaribe-estuary`, `ramos-miras2023-pte-shrimp-ecuador`, `sonke2023-mercury-global-change`, `vainio2022-baltic-mercury-food-web`, `vejrup2022-prenatal-mehg-fish-behavior`, `willacker2023-mercury-fish-snake-river`

**Rationale:** CLAUDE.md Part 4 explicitly names "seafood" as an example product-category page. 13 papers declare `products: seafood`. A seafood product-category page would cover mercury in seafood as a public-health topic, consumption advisories, and regulatory limits — distinct from the `ingredients/seafood.md` commodity profile. Pending approval, these papers route to `ingredients/seafood`.

---

### 3. `wiki/ingredients/seaweed.md` — 8 papers + 6 sub-variant papers (APPROVE / DEFER)

**Direct seaweed papers (8):** `ashley-martin2022-ias-biomonitoring-pregnancy`, `davydiuk2023-arsenosugars-methylation`, `efsa2023-heavy-metals-seaweed`, `hahn2022-salish-seaweed-contaminants`, `nepper-davidsen2023-kelp-biomass-composition-nz`, `raab2024-arsenolipids-chlamydomonas`, `sadee2024-arsenic-speciation-marine-organisms-review`, `sim2024-inorganic-arsenic-seaweed-hplc`

**Recommended aliases:** `kelp`, `laver`, `kombu-kelp`, `spirulina`, `chlorella`, `algae`, `duckweed`, `water-lentils` — all temporarily redirected to `seafood` pending page approval.

**Rationale:** Seaweed has significant inorganic arsenic contamination (with a distinct iAs/tAs speciation profile), EFSA-regulated in EU, and rising consumer use as a supplement and food ingredient. 8 direct papers above threshold; seaweed as a category differs meaningfully from animal-based seafood. Pending approval, all seaweed-group papers route to `seafood`.

---

### 4. `wiki/ingredients/turmeric.md` — 6 papers (APPROVE / DEFER)

**Papers:** `fda-import-alert-99-42-spice-lead`, `forsyth2019-turmeric-lead-chromate-bangladesh`, `forsyth2024-turmeric-lead-chromate-south-asia`, `gafner2026-turmeric-adulteration-six-continents`, `lech2020-turmeric-lead-united-states`, `oseisafo2024-ghana-spices-metals`

**Rationale:** Turmeric has an active FDA import alert (99-42) for lead chromate adulteration. It is the highest-priority individual spice in the corpus: 6 papers, a specific regulatory enforcement action, a documented contamination mechanism (lead chromate added as colorant), and disproportionate impact on South Asian diaspora populations. Above 5-paper threshold. Pending approval, these papers route to `herbal-botanicals`.

---

### 5. `wiki/ingredients/tuna.md` — 6 papers (APPROVE / DEFER)

**Papers:** `bae2023-tuna-heavy-metals-korea`, `blanco2023-mercury-fish-valencia`, `chamorro2024-bluefin-tuna-mercury-review`, `kosker2023-canned-fish-turkey`, `li2024-global-fisheries-mehg`, `liu2021-arsenolipids-seafood`

**Rationale:** Tuna is the primary methylmercury exposure source for consumers who do not eat other high-mercury seafood. It has its own FDA and EU consumption advisories, a specific bioaccumulation mechanism, and a distinct risk profile compared to other seafood. 6 papers at threshold. A standalone ingredient page supports the app model's consumption-frequency risk scoring for pregnant women and children. Pending approval, these papers route to `seafood`.

---

### 6. `wiki/ingredients/lettuce.md` — 6 papers (RECOMMEND ALIAS ON `leafy-greens.md` / APPROVE IF KAREN PREFERS STANDALONE)

**Papers:** `adhikari2024-leafy-vegetables-johannesburg`, `cardini2025-cadmium-speciation-plant-foods-sec-icp`, `owusuadoma2024-ghana-lettuce-metals`, `romero-crespo2023-trace-elements-crops-ecuador-mining`, `rossini-oliva2024-urban-garden-vegetables-spain`, `sandil2023-arsenic-bean-lettuce`

**Rationale:** 6 papers exceeds the 5-paper threshold, but all 6 also co-declare `leafy-vegetables` (now corrected to `leafy-greens`). Lettuce's contamination profile overlaps substantially with the broader leafy-greens category — it does not have a distinct mechanism or dramatically different contamination levels. Recommendation: add `lettuce` as an alias in `wiki/ingredients/leafy-greens.md` frontmatter and note it in the body's "varieties and sub-commodities" prose. If Karen wants a standalone page for completeness, these papers support it. Pending decision, these papers route to `leafy-greens`.

---

## Category 4 — Detector bugs

None identified. All unresolved entries reflect genuinely missing pages or incorrect frontmatter, not false positives in the routing audit logic.

---

## Verification

```
Routing audit: processed 689 source pages; 50 unresolved target(s), 620 malformed source(s) (0 blocking).
```

The 50 remaining unresolved entries correspond exactly to the 6 new-page proposals (13 + 11 + 8 + 6 + 6 + 6 = 50 entries). The 620 "malformed" sources are sources missing one or more required frontmatter fields — that is the pre-existing malformed-frontmatter issue tracked separately and not addressed by this triage.
