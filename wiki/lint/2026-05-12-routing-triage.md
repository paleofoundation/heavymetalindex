---
type: lint
op: triage
date: 2026-05-12
unresolved_before: 46
unresolved_after: 35
fixes_applied: 11
new_page_proposals: 5
detector_bugs_fixed: 0
---

# Routing-unresolved triage — 2026-05-12

Triaged all 46 entries in `data/evidence/routing_unresolved.csv` against the four-way decision tree (frontmatter typo, below-threshold variant, above-threshold new-page proposal, detector bug). Two frontmatter fixes applied; six new ingredient/product pages surfaced for Karen's approval per CLAUDE.md Part 10.

---

## 1. Frontmatter fixes applied (2 entries resolved)

Both fixes redirected mussels-specific papers that declared the broad `shellfish` slug when the more precise `[[ingredients/bivalve-molluscs]]` — an existing page — was the correct target.

| Source | Change |
|--------|--------|
| `bao2024-sp-icp-ms-nps-mussels` | Removed redundant `[[ingredients/shellfish]]` from `ingredients` array; `[[ingredients/bivalve-molluscs]]` already present. Paper is about SP-ICP-MS analysis of mussel tissue — strictly a bivalve matrix. |
| `dogruyol2024-mediterranean-mussels-health-risk` | Changed `[[ingredients/shellfish]]` to `[[ingredients/bivalve-molluscs]]`. Paper studies *Mytilus galloprovincialis* from four Türkiye and Bulgarian farms — a bivalve-mollusc matrix. Product-level `[[products/seafood]]` declaration retained as a new-page proposal (see below). |

`npm run evidence:source-routes` confirmed count dropped to 44.

---

## 2. Below-threshold redirects applied (0)

No below-threshold sub-variants found. Every unresolved slug reaches or exceeds the 5-paper threshold for ingredients (3-paper threshold for products) specified in CLAUDE.md Part 10.

---

## 3. New-page proposals for Karen's approval (6 pages, 44 unresolved entries)

All 44 remaining entries fall into six distinct slugs, each above threshold. Karen's approval required before any stubs are created.

---

### A. `ingredients/cereals.md` — 8 sources

**Strategic case.** "Cereals" is the standard matrix category used in EFSA scientific opinions, JECFA monographs, and Codex general standards. It encompasses the full grain class (wheat, rice, oats, maize, barley, etc.) as a unified exposure vehicle. Without this page, the major agency-level contamination assessments that use "cereals" as their matrix cannot be routed. The Codex General Standard for Contaminants (CXS 193-1995) and the CCCF 17 (2024) session outcomes both declare this matrix; failing to create the page means two of the wiki's most-cited regulatory sources remain unrouted.

**Primary metal(s):** Cd, Pb, Ni.

**Relationship to existing pages.** `ingredients/cereals.md` would be the broad-category parent. Existing pages `wheat.md`, `oat.md`, `rice.md`, `corn.md`, `non-rice-grains.md` would be linked as sub-entries. The cereals page carries aggregate/cross-grain data from regulatory assessments; the sub-pages carry grain-specific occurrence data.

**Sources declaring this slug (8):**
1. `altunay2023-cadmium-food-turkey` — cadmium in Turkish food basket; cereals as one of several exposure vehicles
2. `codex-cccf17-2024` — Codex Committee on Contaminants in Foods, 17th session (2024); uses "cereals" as regulatory matrix category
3. `codex-cxs-193-1995` — Codex General Standard for Contaminants and Toxins in Food and Feed; "cereals" is a defined matrix class with MLs
4. `efsa-cadmium-contam-2009` — EFSA Scientific Opinion on cadmium in food; "cereals" is a primary exposure pathway
5. `efsa-lead-contam-2010` — EFSA Scientific Opinion on lead in food; cereals as exposure pathway
6. `efsa-nickel-contam-2020` — EFSA Scientific Opinion on nickel; cereals as primary dietary source
7. `jecfa-73rd-cadmium-2010` — JECFA 73rd meeting cadmium monograph; cereals as exposure matrix
8. `nordberg2015-cadmium-chapter` — Handbook on the Toxicology of Metals cadmium chapter; cereals as dietary route

---

### B. `ingredients/breastmilk.md` — 6 sources

**Strategic case.** Human milk is the comparison matrix in every infant formula vs breastfed-infant exposure study. It is the baseline against which formula contamination is judged and the vehicle through which maternal body burden transfers to infants. As such it is architecturally distinct from `milk-and-dairy.md` (bovine dairy), from `infant-formula-ingredients.md` (formula components), and from any product page. Six papers declare this as a dedicated matrix; four are peer-reviewed cohort studies comparing metal exposure in formula-fed vs breastfed infants — exactly the evidence base that informs HMT&C infant formula thresholds. Without this page, the formula-vs-breastmilk literature cannot be routed to a coherent synthesis target.

**Primary metal(s):** iAs, tAs, Al, Pb, Cd, multiple.

**Relationship to existing pages.** Linked from `ingredients/infant-formula-ingredients.md`, the `products/infant-formula-*` family, and the `health/` vulnerable-populations pages for infants. The WikiBiome crosswalk (`soto-ocana2024`) also touches this matrix.

**Sources declaring this slug (6):**
1. `atsdr-aluminum-toxprofile-2008` — ATSDR toxicological profile for aluminum; breastmilk as transfer route to infants
2. `carignan2015-arsenic-exposure-breastfed-formula-fed-infants` — urinary arsenic in breastfed vs formula-fed infants (US cohort)
3. `carignan2016-breast-milk-formula-arsenic-first-year-cohort` — arsenic in breast milk and infant formula, first year of life cohort
4. `pikounis-urinary-biomarkers-infant-formula-vs-human-milk` — urinary metal biomarkers comparing formula vs human milk fed infants
5. `soto-ocana2024-metal-availability-early-life-microbiome` — metal availability and early-life microbiome; breastmilk as early exposure vehicle
6. `thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review` — systematic review: toxic elements and PFAS in human milk vs infant formula

---

### C. `ingredients/shellfish.md` — 6 sources

**Strategic case.** "Shellfish" in the regulatory and toxicological literature means the combined class of bivalve molluscs (oysters, mussels, clams, scallops) and crustaceans (shrimp, crab, lobster, crayfish). This is broader than the existing `ingredients/bivalve-molluscs.md` page, which covers only one sub-class. FDA/EPA fish consumption advice, EFSA cadmium opinions, and JECFA assessments all use "shellfish" as a distinct regulatory matrix with its own maximum limits. The two mussels-specific papers that had incorrectly declared this slug were redirected to `bivalve-molluscs` in this triage pass; the remaining six are genuine broad-shellfish references.

**Primary metal(s):** Cd, Pb, tHg, tAs.

**Relationship to existing pages.** Would sit between `ingredients/seafood.md` (broadest) and `ingredients/bivalve-molluscs.md` (sub-class). If created, `bivalve-molluscs` should link to it as its parent.

**Sources declaring this slug (6):**
1. `efsa-cadmium-contam-2009` — EFSA cadmium opinion; shellfish cited as a significant dietary cadmium source alongside cereals and vegetables
2. `fda-epa-fish-consumption-advice` — FDA/EPA joint fish consumption advice; shellfish as a separate advisory category
3. `jecfa-73rd-cadmium-2010` — JECFA cadmium monograph; shellfish as exposure matrix
4. `nordberg2015-cadmium-chapter` — cadmium chapter; shellfish (bivalves and crustaceans broadly) as high-Cd food category
5. `taylor2025-seafood-benefits-contaminants` — broad seafood benefits vs contaminants review; shellfish addressed as a distinct exposure category
6. `xia2025-whole-cell-biosensor-hg-food` — whole-cell biosensor for Hg in food; shellfish listed as a target food matrix

---

### D. `ingredients/freshwater-fish.md` — 9 sources

**Strategic case.** Freshwater fish have a distinct heavy-metal contamination profile from marine fish. Mercury bioaccumulates differently in freshwater ecosystems (especially river systems draining mining regions); arsenic speciation in freshwater fish tends toward higher inorganic fractions than in marine fish; cadmium and lead contamination patterns track mining runoff and agricultural drainage differently from ocean deposition. Nine papers specifically study freshwater fish as a matrix across multiple continents. The existing `ingredients/fish.md` page covers fish broadly; freshwater fish warrants its own page because the contamination drivers, geographic variance, and consumption-advisory context differ materially from marine fish. This page also anchors the `freshwater-fish` → `products/seafood` routing chain for health-risk papers.

**Primary metal(s):** tHg, MeHg, iAs, tAs, Pb, Cd.

**Relationship to existing pages.** Sub-page of `ingredients/fish.md`. Cross-links to `ingredients/tinned-fish.md` where tinned freshwater species are surveyed; to `products/seafood.md` if created.

**Sources declaring this slug (9):**
1. `auzier-guimaraes2025-mercury-tapajos-fish` — mercury in Tapajós River fish (Brazilian Amazon); artisanal mining exposure
2. `jermilova2025-mackenzie-mercury-fish-bayesian` — mercury in Mackenzie River fish (Canadian Arctic); Bayesian bioaccumulation model
3. `kovacik2024-grass-carp-muscle-microelements` — trace elements in grass carp (*Ctenopharyngodon idella*); aquaculture freshwater fish
4. `lepak2025-mercury-sport-fish-colorado-correction` — mercury in Colorado sport fish; corrected dataset
5. `naz2025-trace-elements-punjnad-fish` — trace elements in fish from the Punjnad River, Pakistan
6. `paul2025-meghna-fish-arsenic` — arsenic in fish from the Meghna River, Bangladesh
7. `rusko2026-mercury-fish-latvia-risk-benefit` — mercury in Latvian fish; risk-benefit analysis for consumers
8. `sirisangarunroj2023-thai-fish-toxic-elements` — toxic elements in Thai fish; includes freshwater species
9. `venant2025-lake-victoria-sardine-cd-pb` — Cd and Pb in Lake Victoria sardines (*Rastrineobola argentea*)

---

### E. `ingredients/quinoa.md` — 6 sources

**Strategic case.** Quinoa (a pseudocereal/seed, not a true grain) has a well-characterized cadmium accumulation problem linked to Andean high-altitude mining soils in Peru, Bolivia, and Ecuador — the origin of virtually all commercial quinoa supply. The literature is geographically concentrated and mechanistically coherent: mining-impacted Andean soils, quinoa's efficient cadmium uptake biology, and the commercial trend toward quinoa as a health food combine to create a consumer-relevant risk profile. Six papers focus specifically on quinoa, with four from Peruvian field studies and two from plant-physiology or agronomic-stress angles. The existing `non-rice-grains.md` page cannot absorb this literature without becoming a hybrid page mixing commodity-specific data with generic grain contamination. Per CLAUDE.md Part 10, 5+ papers treating a sub-variant as a distinct commodity with its own risk profile warrant a new page.

**Primary metal(s):** Cd, Pb, tAs.

**Relationship to existing pages.** Sub-page of `ingredients/non-rice-grains.md` or `ingredients/cereals.md` (if created). Should cross-link to `supply-chain/` pages on Andean mining-soil contamination if/when created.

**Sources declaring this slug (6):**
1. `bedoya-perales2023-moquegua-peru-mining-dataset` — heavy metals in Moquegua Region crops including quinoa; mining-impacted Andean soils
2. `ccopi2026-heavy-metals-andean-crops-peru` — heavy metals in Andean crops (2026); quinoa as a primary study matrix
3. `cr-fsasc2014-arsenic-rice-grains` — Consumer Reports 2014 arsenic in rice and grains; quinoa surveyed alongside rice as an alternative grain
4. `gul2024-quinoa-cadmium-lead-stress` — cadmium and lead stress physiology in quinoa plants; accumulation mechanisms
5. `roman-ochoa2021-arequipa-grains-health-risk` — heavy metals in grains from Arequipa, Peru; quinoa included with health-risk assessment
6. `rosales-huamani2023-quinoa-peru-ptes` — potentially toxic elements in Peruvian quinoa; targeted quinoa-focused survey

---

### F. `products/seafood.md` — 9 sources

**Strategic case.** Nine sources declare `seafood` as a **product** (in their `products:` frontmatter array). Note that `ingredients/seafood.md` already exists as the ingredient-level commodity page; this proposal is for a distinct `products/seafood.md` product-category page, following the same ingredient/product split used elsewhere in the wiki (e.g., `ingredients/fish.md` vs `products/fish-containing-baby-foods.md`). A product-category seafood page would host consumer fish consumption advisories (FDA/EPA), health-risk assessment summaries for seafood-eating populations, regulatory limits by matrix and jurisdiction, and aggregate literature on concentration distributions across commercial seafood categories. The papers declaring this slug include a broad-seafood review, several fish health-risk assessments, and multiple cross-country surveys — the kind of multi-source literature that belongs at the product page level, with ingredient-specific routes going to `freshwater-fish`, `bivalve-molluscs`, `shellfish`, or `fish`.

**Primary metal(s):** tHg, MeHg, Cd, Pb, tAs.

**Relationship to existing pages.** Would aggregate from ingredient pages (`fish.md`, `freshwater-fish.md`, `bivalve-molluscs.md`, `shellfish.md`, `tinned-fish.md`). Distinct from `products/fish-containing-baby-foods.md`, which is baby-food-specific.

**Sources declaring this slug (9):**
1. `auzier-guimaraes2025-mercury-tapajos-fish` — Tapajós mercury fish; health-risk framing
2. `dogruyol2024-mediterranean-mussels-health-risk` — Mediterranean mussels health risk; product-level THQ and MOE assessment
3. `kovacik2024-grass-carp-muscle-microelements` — grass carp microelements; product-level health risk
4. `naz2025-trace-elements-punjnad-fish` — Punjab river fish; health-risk assessment framing
5. `reksten2020-angola-fish-metals` — metals in Angolan fish; consumption-risk framing
6. `reksten2021-bay-bengal-fish-metals` — metals in Bay of Bengal fish; consumption-risk framing
7. `sirisangarunroj2023-thai-fish-toxic-elements` — Thai fish toxic elements; product-level survey
8. `taylor2025-seafood-benefits-contaminants` — broad seafood benefits vs contaminants review; directly product-category framing
9. `uzomah2021-nigeria-fish-contaminants` — contaminants in Nigerian fish; health-risk assessment

---

## 4. Detector bugs fixed (0)

No detector bugs identified. All unresolved slugs are genuine missing pages, not false positives from the routing audit script. The audit's slug-matching logic correctly identifies that `cereals`, `breastmilk`, `shellfish`, `freshwater-fish`, `quinoa`, and `seafood` (product) have no corresponding wiki pages.

---

## Summary (pass 2)

| Category | Count | Action |
|----------|-------|--------|
| Frontmatter typos / convention drift fixed | 2 | Done — bao2024 and dogruyol2024 shellfish → bivalve-molluscs |
| Below-threshold redirects | 0 | None needed |
| New-page proposals pending Karen's approval | 6 pages (44 unresolved entries) | See section 3 |
| Detector bugs fixed | 0 | None found |

**Unresolved count: 46 → 44.** 44 remaining entries were documented as proposals pending Karen's decision.

---

## Pass 3 — 2026-05-12 (this session)

Pass 2 classified proposal F (`products/seafood.md`) as a new-page proposal because the 9 fish-study sources declare `products: ["[[products/seafood]]"]`. On closer review, this is convention drift, not a missing page: the `products/` namespace in this wiki is for processed food categories (infant formula, baby cereals, fruit juices). Raw fish and seafood research belongs in `ingredients/`. The 9 sources already route correctly through `ingredients: [fish]`, `ingredients: [freshwater-fish]`, and `ingredients: [bivalve-molluscs]`; the `products: [seafood]` declaration was a frontmatter error added during ingest.

### Fixes applied (9 sources, 9 entries resolved)

Removed `products: ["[[products/seafood]]"]` from the frontmatter of all 9 sources. Each source retains its correct ingredient routing.

| Source | Retained ingredient routing |
|--------|----------------------------|
| `auzier-guimaraes2025-mercury-tapajos-fish` | `freshwater-fish`, `fish` |
| `dogruyol2024-mediterranean-mussels-health-risk` | `bivalve-molluscs` |
| `kovacik2024-grass-carp-muscle-microelements` | `freshwater-fish` |
| `naz2025-trace-elements-punjnad-fish` | `freshwater-fish` |
| `reksten2020-angola-fish-metals` | `fish` |
| `reksten2021-bay-bengal-fish-metals` | `fish` |
| `sirisangarunroj2023-thai-fish-toxic-elements` | `freshwater-fish`, `fish` |
| `taylor2025-seafood-benefits-contaminants` | `fish`, `shellfish` |
| `uzomah2021-nigeria-fish-contaminants` | `fish` |

`npm run evidence:source-routes` confirmed: **44 → 35 unresolved entries.**

### Current state: 35 entries, all new-page proposals

The 35 remaining entries span exactly 5 slugs, each above its applicable threshold (5 papers for ingredients, 3 for products). Proposal F (`products/seafood.md`) is withdrawn — those entries are resolved. Proposals A–E from pass 2 stand unchanged. Karen's approval is required before any stubs are created.

| Proposal | Slug | Sources | Primary metals | Status |
|----------|------|---------|---------------|--------|
| A | `ingredients/cereals.md` | 8 | Cd, Pb, Ni | Pending Karen |
| B | `ingredients/breastmilk.md` | 6 | iAs, Al, Pb, Cd | Pending Karen |
| C | `ingredients/shellfish.md` | 6 | Cd, Pb, tHg, tAs | Pending Karen |
| D | `ingredients/freshwater-fish.md` | 9 | tHg, MeHg, iAs, Pb, Cd | Pending Karen |
| E | `ingredients/quinoa.md` | 6 | Cd, Pb, tAs | Pending Karen |

**Unresolved count: 46 → 44 → 35.** All 35 remaining entries are legitimate new-page proposals awaiting Karen's decision per CLAUDE.md Part 10.
