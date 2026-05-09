---
type: product-category-master
hmtc_category: 5
label: "HMTc Category 5 — Beverages — Master Summary"
covers: [category-5-beverages, fruit-juices-non-apple, fruit-juices-apple-containing, vegetable-juices-non-root, vegetable-juices-root-vegetable-containing, plant-milks-non-soy-non-rice, plant-milks-soy-based, plant-milks-rice-based, flavored-waters, sports-energy-drinks, herbal-botanical-infusions, true-tea-camellia-sinensis, matcha, coffee, soft-drinks-carbonated-beverages, fermented-beverages-non-tea-based, kombucha-tea-based, regulatory-crosswalk-field-findings]
audience: [regulator, educator, researcher, app, curator]
analytes: [Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn]
updated: 2026-05-09
---

# HMTc Category 5 — Beverages — Master Summary

This master summary mirrors the [[products/infant-and-child-foods-master|HMTc Category 1 master]] structure but for the locked Category 5 beverage architecture (16 subcategories from `category-5-beverages.md` Step 0 lock plus the regulatory-crosswalk-field-findings synthesis page). The locked rows preserve the contamination-platform vs clean-benchmark splits established in the Step 0 process and are not renumbered here.

The 16 product subcategories × 10 HMT&C analytes = 160 product cells. The 17th page (regulatory-crosswalk-field-findings) is a synthesis page rather than a per-cell readiness row and is not included in the percentile-readiness math; it routes regulatory cross-walk evidence (FDA juice action levels, EU 2023/915, Codex CCCF) across the 16 subcategories as a horizontal layer.

The readiness bar is the same as Cat 1 per CLAUDE.md Part 6 + Part 19: each cell is at-bar (Path A with n_a_tier ≥ 2 and confidence ≥ medium), approaching, Path A thin (n_a_tier=1 sample-level), Path B candidate (5×LOQ available), or explicit data gap with rationale.

## Subcategory readiness roll-up across the 160 cells

| Subcategory | At bar | Approaching | Path A thin (n_a_tier=1) | Data gap |
| --- | --- | --- | --- | --- |
| Fruit juices, non-apple | — | Pb | Cd, tAs, iAs, Ni | MeHg, tHg, Al, Cr-VI, Sn |
| Fruit juices, apple-containing | **iAs (publishable: dirty p30=3.0 ppb)** | Pb | Cd, tAs, Ni | MeHg, tHg, Al, Cr-VI, Sn |
| Vegetable juices, non-root | — | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn (all 10) |
| Vegetable juices, root-vegetable-containing | — | — | — | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn (all 10) |
| Plant milks, non-soy-non-rice | — | Pb, tHg, Ni | — | Cd, tAs, iAs, MeHg, Al, Cr-VI, Sn |
| Plant milks, soy-based | — | Pb, Cd, tAs, Ni, Al, Sn | — | iAs, MeHg, tHg, Cr-VI |
| Plant milks, rice-based | iAs | Pb, tHg | tAs | Cd, MeHg, Ni, Al, Cr-VI, Sn |
| Flavored waters | — | — | Sn (canned context) | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI |
| Sports/energy drinks | — | — | — | All 10 |
| Herbal/botanical infusions | — | — | — | All 10 |
| True tea (Camellia sinensis) | — | — | — | All 10 |
| Matcha | — | — | — | All 10 |
| Coffee | — | — | — | All 10 |
| Soft drinks/carbonated beverages | — | — | Sn (canned context) | Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI |
| Fermented beverages, non-tea-based | — | — | — | All 10 |
| Kombucha (tea-based fermented) | — | — | — | All 10 |

Counts (160 cells total):

- **At readiness bar: 2 cells.** iAs in fruit-juices-apple-containing (FDA 2011 single-strength apple juice n=94 + FDA 2016 Juice-Grape n=61). iAs in plant-milks-rice-based (Da Mato 2026 EU n=20 + Gu 2020 Australia rice-milk-powder subset n=4 + Signes-Pastor 2016 ingredient cascade context).
- **Approaching the bar: 12 cells.** Fruit-juice Pb across both subcategories (FDA 2018 longitudinal compliance + FDA 2022 draft action levels + Weldegebriel 2025 Ethiopia). Plant-milk-soy Pb/Cd/tAs/Ni/Al/Sn (Milani 2023 multi-element + Marques 2021). Plant-milk-non-soy-non-rice Pb/tHg/Ni (Marques 2021 ICP-MS).
- **Path A thin (n_a_tier=1): 7 cells.** Mostly Cd/tAs/iAs/Ni in fruit juices and tAs in rice plant-milk; plus Sn in flavored-water and soft-drink-canned subcategories from canned-beverage Sn-leach evidence (Tarigan 2016 + Benoy 1971 + ATSDR 2005).
- **Data gap: 139 cells.** Dominant gap drivers: (a) **Tea, matcha, coffee, kombucha, sports/energy drinks, soft drinks, fermented beverages, herbal infusions** — 8 subcategories × 10 analytes = 80 cells with no direct in-corpus evidence in `wiki/sources/`. (b) **Vegetable juices** (both splits) — 20 cells with no direct evidence. (c) **MeHg and Cr-VI** systematically gap across all 16 subcategories (Cr-VI by chemistry-mechanism inference from Hernandez 2019 + Saraiva 2021 carries forward to milk-like beverages but has not been extended to acidic/aqueous beverage matrices in the corpus).

Per Karen's readiness bar, every gap cell carries a documented rationale below; the data-gap-wishlist items will populate as ingest cycles continue.

## Per-analyte tables

The per-cell percentile values, n, n_a_tier, confidence, and CC eligibility for each of the 160 cells will populate in subsequent cycles as the per-page CC blocks are built. This skeleton commits the readiness roll-up + Source Legend now so subsequent cycles can fill in cell-level numbers without re-introducing schema drift.

### Pb (lead) — Path A summary

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Fruit juices, non-apple | Approaching | FDA 2018 longitudinal Pb in juice FY2005-FY2018 + FDA 2022 draft action level (20 ppb other juice) + FDA 2022 TDS + Weldegebriel 2025 (n=80 Ethiopia) | 3 | Sample-level distribution feasible from FDA 2018 + Weldegebriel 2025; FDA 2022 draft 20 ppb cap applies. |
| Fruit juices, apple-containing | Approaching | FDA 2018 + FDA 2022 draft (10 ppb apple juice cap) + Weldegebriel 2025 | 3 | Apple subset has a stricter 10-ppb draft cap; sample-level distribution feasible. |
| Vegetable juices, non-root | data gap | — | 0 | Veg-juice-specific Pb data not in corpus. Closing requires a vegetable-juice multi-element survey. |
| Vegetable juices, root-vegetable-containing | data gap | — | 0 | Same gap; root-veg-containing subset would inherit ingredient-cascade Pb context from root-vegetable analyses. |
| Plant milks, non-soy-non-rice | Approaching | Marques 2021 Pb sample-level (n=42 plant-based drinks subset) | 2 | Marques 2021 covers cow/goat milk + soy/almond/rice/oat plant-based drinks. Almond/oat/coconut subset is partial. |
| Plant milks, soy-based | Approaching | Milani 2023 Pb sample-level n=18 soy beverages (Brazil) + Marques 2021 | 2 | Two A-tier sample-level sources. |
| Plant milks, rice-based | Approaching | Marques 2021 + Da Mato 2026 (Pb co-measured) | 2 | Sample-level distribution feasible from Marques 2021 subset + Da Mato 2026 co-measured Pb. |
| Flavored waters | data gap | — | 0 | Sn context from canned-beverage corpus does not extend to Pb in this subcategory. |
| Sports/energy drinks | data gap | — | 0 | No sports/energy drink Pb data in corpus. |
| Herbal/botanical infusions | data gap | — | 0 | Closing requires an herbal-tea multi-element survey. |
| True tea (Camellia sinensis) | data gap | — | 0 | Tea-leaf Al/Pb data exists in broader literature (e.g., Karak & Bhagat) but not yet ingested into corpus. Wishlist item. |
| Matcha | data gap | — | 0 | Matcha-specific Pb data sparse; whole-leaf consumption changes the exposure model vs steeped tea. Wishlist item. |
| Coffee | data gap | — | 0 | Coffee Pb data not in corpus. Brewed coffee typically shows lower Pb than the bean (extraction efficiency varies). Wishlist item. |
| Soft drinks/carbonated beverages | data gap | — | 0 | Pb in soft drinks expected to be very low (formulated beverages with treated water + sugar/syrup); historical lead-soldered-can era pre-1990 only. |
| Fermented beverages, non-tea-based | data gap | — | 0 | Includes water kefir, jun, beverage-tibet — niche corpus. Wishlist item. |
| Kombucha (tea-based fermented) | data gap | — | 0 | Tea-base contamination cascades through; needs kombucha-specific Pb measurement to close cell. |

### Cd (cadmium) — Path A summary

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Fruit juices, non-apple | Path A thin | FDA 2022 TDS Cd in juice subset + Weldegebriel 2025 | 1-2 | Sample-level Cd distribution achievable. |
| Fruit juices, apple-containing | Path A thin | FDA 2022 TDS apple-juice subset + Weldegebriel 2025 | 1 | One A-tier sample-level source plus FDA TDS coverage; second source needed. |
| Vegetable juices, non-root + root | data gap | — | 0 | Root-veg Cd ingredient cascade exists at HMTc Cat 1 (root-veg purees) but not yet extended to root-veg juice subcategory. |
| Plant milks, non-soy-non-rice | data gap | — | 0 | Marques 2021 did not measure Cd. |
| Plant milks, soy-based | Approaching | Milani 2023 sample-level n=18 | 2 | Soy ingredient cascade Cd context (legume Cd-uptake characteristics) reinforces. |
| Plant milks, rice-based | data gap | — | 0 | Da Mato 2026 measured iAs only; corpus lacks rice-plant-milk Cd sample-level. |
| Flavored waters, sports/energy, herbal infusions, tea, matcha, coffee, soft drinks, fermented, kombucha | data gap | — | 0 | All 9 subcategories lack direct Cd evidence in corpus. |

### tAs (total arsenic) — Path A summary

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Fruit juices, non-apple | Path A thin | Da Mato 2026 (covers tAs alongside iAs) + FDA 2022 TDS | 1 | tAs co-measured. |
| Fruit juices, apple-containing | Path A thin | FDA 2011 apple juice tAs co-measurement + FDA 2016 Juice-Grape | 2 | Strong As corpus for apple-containing juice. |
| Plant milks, soy-based | Approaching | Milani 2023 tAs sample-level n=18 | 2 | A-tier sample-level. |
| Plant milks, rice-based | Path A thin | Da Mato 2026 + Gu 2020 rice-milk-powder | 2 | tAs co-measured with iAs across two A-tier sources. |
| All other subcategories | data gap | — | 0 | — |

### iAs (inorganic arsenic) — Path A summary

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Fruit juices, non-apple | Path A thin | FDA 2016 Juice-Grape (n=61) — non-apple juice subset | 1 | One A-tier sample-level source; second needed. |
| Fruit juices, apple-containing | **At bar** | FDA 2011 single-strength apple juice (n=94) + FDA 2016 (grape-and-grape-containing subset for cross-juice context) + FDA CTZ 10 ppb cap | 2 | **At bar (cycle 13).** Per Part 19 dirty designation: dirty p30 = 3.0 ppb (FDA 2011 lower-bound deterministic; TR values treated as 0). Sample-level CSV at `data/evidence/category5_apple_juice_arsenic_speciation_*.csv`. p100 = 9.8 ppb. p30 is 70% below FDA CTZ 10 ppb cap. Per-page CC block rebuilt at [[products/fruit-juices-apple-containing]]. |
| Plant milks, rice-based | **At bar** | Da Mato 2026 (n=20 EU rice-based drinks) + Gu 2020 (rice-milk-powder subset) + Signes-Pastor 2016 (ingredient cascade) + EU 2023 30 ppb cap | 3 | Sample-level distribution achievable; EU 2023 cap = 30 ppb iAs in rice drinks. p90 candidate from Da Mato 2026. |
| All other subcategories | data gap | — | 0 | iAs in non-rice plant-milks, vegetable juices, tea/coffee/soft-drinks/etc. not in corpus. |

### MeHg (methylmercury)

All 16 subcategories: **data gap**. MeHg is rarely measured in beverage matrices — most exposure routes through fish-containing foods (Cat 1 fish baby foods n_a_tier=1 from Tatsuta 2024). The Brombach 2017 ingredient-cascade evidence for rice MeHg could route to plant-milks-rice-based via the rice-ingredient cascade, but rice-drink-specific MeHg measurement not yet in corpus. Closing requires MeHg-in-beverage speciation papers.

### tHg (total mercury)

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Plant milks, non-soy-non-rice | Approaching | Marques 2021 ICP-MS tHg (n=42 plant-based drinks) | 2 | A-tier sample-level. |
| Plant milks, rice-based | Approaching | Marques 2021 + Brombach 2017 ingredient cascade | 2 | Marques 2021 measured tHg directly; Brombach 2017 provides rice-ingredient tHg context. |
| All other subcategories | data gap | — | 0 | tHg in fruit juices, soft drinks, tea, coffee not in corpus. |

### Ni (nickel)

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Fruit juices, non-apple + apple-containing | Path A thin | Weldegebriel 2025 Ethiopia n=80 Ni | 1 | One A-tier source; second needed. |
| Plant milks, non-soy-non-rice | Approaching | Marques 2021 Ni (n=42) | 2 | A-tier sample-level. |
| Plant milks, soy-based | Approaching | Milani 2023 Ni (n=18) + Marques 2021 | 2 | Two A-tier sources. |
| All other subcategories | data gap | — | 0 | — |

### Al (aluminum)

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Plant milks, soy-based | Approaching | Milani 2023 Al sample-level n=18 (key Al source — Al found in 100% of soy beverages tested at 0.46-2.40 mg/L) | 2 | Closing to at-bar requires a second A-tier sample-level source. Soy ingredient is a known Al accumulator. |
| All other subcategories | data gap | — | 0 | True tea is a known Al accumulator (~hundreds of mg/kg in dry leaf, 1-10 mg/L in steeped tea per literature) but tea-Al data is not yet in corpus — wishlist item with high regulatory pull. |

### Cr-VI (hexavalent chromium)

All 16 subcategories: **data gap by direct measurement**. Per CLAUDE.md Part 14 + Hernandez 2019 + Saraiva 2021 chemistry-mechanism finding, food-matrix Cr is essentially Cr(III); the milk-like-beverage subset (plant milks soy/rice/non-soy) inherits the Cr(VI) <LOD chemistry-mechanism inference (n_a_tier=1). For acidic-aqueous-matrix beverages (juices, soft drinks, sports/energy drinks, kombucha), the Cr(VI)-stability question is less settled — acidic conditions can stabilize Cr(VI) more than neutral-alkaline matrices. Closing requires beverage-matrix-specific Cr speciation. Wishlist: Mathebula 2019 (PMID 30931809; OA via PMC) covers milk + dairy + cereal but not beverages.

### Sn (tin)

| Subcategory | Cell state | Best evidence | n_a_tier | Notes |
| --- | --- | --- | --- | --- |
| Fruit juices (canned subset) | Path A thin | Benoy 1971 (canned fruit juice Sn toxicity 1971) + ATSDR 2005 Sn toxprofile + Tarigan 2016 (factors-tin-released-canned-beverages) | 1 | Historical canned-juice Sn corpus relevant to canned-juice subset only. Modern aluminum/aseptic packaging has largely supplanted Sn-lined cans for juice. |
| Plant milks, soy-based | Approaching | Milani 2023 Sn sample-level n=18 | 2 | A-tier sample-level. |
| Soft drinks (canned) + Flavored waters (canned) | Path A thin | Tarigan 2016 + Benoy 1971 cascade | 1 | Same canned-beverage Sn-leach context. |
| All other subcategories | data gap | — | 0 | — |

## Source Legend (Cat 5 primary corpus)

The numbered citations route here in IEEE-style. Per-cell numbering is omitted in this skeleton commit and will populate as cycle 13+ work fills in per-page CC blocks.

Primary A-tier sources contributing to multiple cells in this Cat 5 master:

1. [[sources/fda2011-apple-juice-arsenic-speciation]] — FDA 2011 single-strength apple juice; sample-level iAs n=94.
2. [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] — FDA 2016 inorganic arsenic in infant/toddler foods; Juice-Grape subset n=61 routes to fruit-juices-apple-containing (grape product) and fruit-juices-non-apple subsets.
3. [[sources/fda2018-lead-in-juice-fy2005-fy2018]] — FDA 2018 longitudinal Pb in juice FY2005-FY2018; covers fruit-juices-non-apple, fruit-juices-apple-containing, fruit-juice-not-canned subsets.
4. [[sources/fda2022-tds-elements-fy2018-fy2020]] — FDA TDS FY2018-FY2020 elements; Pb/Cd/tAs/Ni in juice subset.
5. [[sources/fda2022-draft-lead-juice]] — FDA 2022 draft action level Pb in juice (10 ppb apple, 20 ppb other juice).
6. [[sources/fda2004-juice-haccp-lead]] — FDA 2004 juice HACCP rule (50 ppb Pb historical).
7. [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] — Ethiopia n=80 packaged fruit juices; Pb/Cd/Cr/Ni sample-level.
8. [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] — Italy n=20 EU rice-based drinks; iAs/tAs sample-level. Direct primary source for plant-milks-rice-based iAs at-bar status.
9. [[sources/marques2021-trace-elements-milks-plant-based-drinks]] — Spain n=42 cow/goat milk + soy/almond/rice/oat plant-based drinks + infant formulas; ICP-MS Pb, tHg, Ni, U sample-level. Primary source for plant-milks-soy/rice/non-soy-non-rice across multiple cells.
10. [[sources/milani2023-trace-elements-soy-based-beverages]] — Brazil n=18 soy beverages; Al/tAs/Cd/Cr/Ni/Pb/Sb/Sn sample-level multi-element. Primary source for plant-milks-soy-based across most analytes.
11. [[sources/gu2020-arsenic-rice-infant-food-australia]] — Australia n=39 rice-based foods including rice-milk-powder subset; tAs/iAs. Plant-milks-rice-based ingredient-cascade evidence.
12. [[sources/brombach2017-methylmercury-european-commercial-rice]] — European rice n=87 incl. rice-product subsets; tHg/MeHg ingredient cascade for rice-plant-milk subcategory.
13. [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] — Rice products iAs ingredient cascade.
14. [[sources/benoy1971-tin-toxicity-canned-fruit-juices]] — Historical Sn corpus for canned-juice subset.
15. [[sources/atsdr2005-tin-toxicological-profile]] — Sn toxicology reference; canned-beverage Sn-leach context.
16. [[sources/tarigan2016-factors-tin-released-canned-beverages]] — Factors driving Sn release from canned beverages; n_a_tier=1 across canned subcategories (canned juice, canned soft drinks, flavored-water canned subset).

Regulatory references (Cat 5):

- [[regulations/fda2023-ias-apple-juice-10]] — FDA CTZ apple-juice iAs 10 ppb.
- [[regulations/fda2022-draft-pb-apple-juice-10]] — FDA draft Pb apple-juice 10 ppb.
- [[regulations/fda2022-draft-pb-other-juice-20]] — FDA draft Pb other-juice 20 ppb.
- [[regulations/fda2004-juice-haccp-pb-50]] — FDA 2004 historical HACCP 50 ppb.
- [[regulations/eu2023-arsenic-rice-based-drinks]] — EU 2023/915 iAs 30 ppb in rice-based drinks.

## Key data gaps and what would close them

| Gap pattern | Cells affected | What would close it |
| --- | --- | --- |
| Tea (true tea, matcha, herbal infusions, kombucha tea-base) | 40 cells (4 subcategories × 10 analytes) | Tea-leaf and steeped-tea multi-element surveys. Tea-leaf Al is well-known (~hundreds mg/kg dry leaf); high regulatory pull. Karak & Bhagat 2010 type review + primary occurrence papers. |
| Coffee | 10 cells | Coffee multi-element survey. Brewed coffee Pb/Cd/As typically lower than ground coffee; needs both. |
| Soft drinks + sports/energy drinks | 20 cells | Multi-element soft-drink/sports-drink survey. FDA TDS may have partial coverage. |
| Vegetable juices (non-root + root) | 20 cells | Vegetable-juice multi-element survey. Root-veg ingredient cascade exists at Cat 1 root-veg purees but not yet extended to juice form. |
| Flavored waters (beyond canned-Sn context) | 9 cells | Flavored-water multi-element survey. |
| Fermented beverages (non-tea) | 10 cells | Water kefir, jun, beverage-tibet multi-element survey. Niche corpus. |
| MeHg in any Cat 5 subcategory | 16 cells | MeHg-in-beverage speciation paper. Brombach 2017 covers rice-ingredient MeHg only; needs beverage-matrix MeHg measurement. |
| Cr-VI in acidic-aqueous beverages | 16 cells (chemistry-mechanism inference for milk-like beverages partially carries; acidic-aqueous beverages need direct measurement) | Cr speciation in juice/soft-drink/kombucha matrices. Acidic conditions can stabilize Cr(VI) more than neutral-alkaline matrices. |

## Geographic-context flag

The Cat 5 corpus skews heavily U.S.+EU+Australia: FDA 2011/2016/2018/2022 are U.S.; Da Mato 2026 + Marques 2021 are EU; Milani 2023 is Brazilian; Gu 2020 is Australian; Weldegebriel 2025 is Ethiopian. Per CLAUDE.md Part 6 jurisdiction-mix labeling, any Cat 5 mixed-jurisdiction p90 must document composition. The Ethiopian + Brazilian sources expand beyond the U.S./EU baseline and are particularly valuable for the global-applicability dimension.

## Phase / cycle reference

This Cat 5 master skeleton is committed at autonomous-loop cycle 12 (commit pending). Subsequent cycles will:

- Cycle 13+: Begin per-page CC candidate block builds for the at-bar and approaching subcategories (fruit-juices-apple-containing, plant-milks-rice-based, plant-milks-soy-based, plant-milks-non-soy-non-rice, fruit-juices-non-apple). Then move to the wishlist papers for the tea/coffee/soft-drink subcategories as ingest opportunities arise.
- Per CLAUDE.md Part 19: each per-page CC block carries clean/dirty designation per analyte, p90 (clean) or p30 (dirty) values, and explicit data-gap rationale where applicable.

## Coordination payload for Cowork (Heavy Metals in Beverages Standards Briefing)

Cowork's `hmtc-standards` skill builds the Standards Briefing as a .docx. The 2 Cat 5 cells at the readiness bar are the publishable Path A targets the Beverage Standards Briefing should center on:

| Subcategory | Analyte | Standard target candidate | n | n_a_tier | Regulatory cap |
| --- | --- | --- | --- | --- | --- |
| Fruit juices, apple-containing | **iAs (dirty)** | **dirty p30 = 3.0 ppb** (FDA 2011 lower-bound; TR=0) | 94 | 2 | 10 ppb (FDA CTZ apple juice); 20 ppb (EU 2023/915) |
| Plant milks, rice-based | iAs (dirty) | p30 candidate from Da Mato 2026 distribution | 20 | 3 | 30 ppb (EU 2023/915 rice drinks) |

The 12 approaching cells (Pb/Cd/tAs/Al/Sn in plant-milks-soy + Pb across fruit juices + Ni/tHg in plant-milks-non-soy-non-rice) are the next readiness targets — most need a second fit sample-level source to clear the bar.

## Wiki Pages Updated On Ingest

- [[products/category-5-beverages]] (existing hub)
- All 16 Cat 5 subcategory pages (per-page CC block work deferred to subsequent cycles)
- [[products/regulatory-crosswalk-field-findings]] (synthesis page)
