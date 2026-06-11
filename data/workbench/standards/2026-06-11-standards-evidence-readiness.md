---
op: standards-evidence-audit
date: 2026-06-11
scope: all 35 HMTc categories, 356 locked rows
audience: [staff]
generated_by: fable5 workflow hmtc-standards-evidence-readiness
---

# HMTc Standards-Evidence Readiness, All Categories

This audit reports, for every locked row across the 35 HMTc product categories, whether the per-analyte occurrence evidence needed to compute a literature-baseline standard is already in a poolable state (READY), is held somewhere in the build and needs only pipeline or routing work to become poolable (RECOVERABLE), or is genuinely absent in-house and must be retrieved by hand (FETCH-NEEDED). Cells where the analyte is not material to the product form are recorded as not-material and are not counted as gaps. The unit of assessment is the cell, defined as one (row, analyte) pair. The audit covers 356 locked rows and 3,595 material-or-assessed cells.

This is staff standards content per CLAUDE.md Part 19. It may carry candidate values and recovery actions and it lives only under `data/workbench/`. It must not be copied into `wiki/`, and its candidate values are working artifacts, not published standards.

## (a) Executive summary

No category is STANDARDS-READY in full. Thirty-three of the 35 categories return a PARTIAL verdict, meaning at least one cell is ready or recoverable but the category as a whole cannot yet be set end to end. Two categories return UNCHARACTERIZED: Category 12 (Household Cleaning and Dishwashing) and Category 22 (Home Air and Inhalation-Adjacent Products). These two are the dark categories. Their darkness is not an artifact of poor routing; it reflects a real absence of finished-product occurrence literature for cleaning chemicals and for air-fresheners, diffusers, incense, and candles. Almost every cell in both categories resolves to FETCH-NEEDED, and the few recoverable cells rest on thin, basis-mismatched, or geographically skewed sources (for example incense lead drawn from homes of children with already-elevated blood lead, and candle metals reported as smoke emission factors rather than product content).

Across all categories the 3,595 assessed cells distribute as follows. There are 72 cells READY for standard-setting, 1,290 cells RECOVERABLE from evidence already in the build, 1,001 cells FETCH-NEEDED, and 1,232 cells judged not material. The single most important operational finding is that the recoverable pool is an order of magnitude larger than the ready pool and larger than the fetch pool: the dominant constraint on standards coverage is not missing literature but uncompiled, unrouted, and unpooled in-house evidence. A second adversarial pass over the recoverable set surfaced roughly 160 additional cells that the first pass had marked fetch-needed but that are in fact already present on routed source pages or in the total-diet-study and pool-starvation registers, which means the true fetch burden is somewhat smaller than the 1,001 first-pass count and the recoverable burden somewhat larger.

The ready cells are concentrated in a small number of food categories with deep, well-pooled corpora: Seafood (20 ready cells), Infant and Child Foods (13), Oils, Condiments and Specialty Foods (13), Culinary Oils and Fats (6), Sweeteners and Syrups (5), Herbs, Spices, Seasonings and Salt (5), and Condiments, Sauces and Dressings (4). Eleven categories, almost all of them non-food or contact-article categories, have zero ready cells and depend entirely on recovery or fetching.

The fetch burden is concentrated. Five categories account for roughly half of all fetch-needed cells: Household Cleaning (129), Home Air (107), Food-Contact Consumer Goods and Kitchenware (85), Laundry and Fabric-Contact Home Products (80), and Children's Toys, Arts and Crafts (74), with Dietary Supplements (73) and Pet Foods (61) close behind. These are predominantly non-ingested or contact-article categories where the migration-native or article-content occurrence literature is sparse.

A separate and material finding sits underneath the ready count. A non-trivial fraction of the 72 ready cells carry candidate values that are biologically implausible, basis-mismatched, or built on weak single-source reconstructions, and must be re-verified before any standard is staged from them. These are itemised in section (e). The headline ready count therefore overstates how many standards can be locked today.

## (b) Per-category readiness

| Cat | Name | Verdict | Rows | Ready | Recoverable | Fetch-needed |
|----:|------|---------|----:|----:|----:|----:|
| 1 | Infant and Child Foods (Ages 0-5) | PARTIAL | 9 | 13 | 51 | 0 |
| 2 | Infant and Child Personal Care (Ages 0-5) | PARTIAL | 16 | 0 | 97 | 19 |
| 3 | Grains, Cereals, and Rice Products | PARTIAL | 12 | 1 | 72 | 28 |
| 4 | Fruits, Vegetables, and Produce | PARTIAL | 8 | 0 | 41 | 14 |
| 5 | Beverages | PARTIAL | 17 | 0 | 66 | 25 |
| 6 | Seafood | PARTIAL | 6 | 20 | 33 | 1 |
| 7 | Oils, Condiments, and Specialty Foods | PARTIAL | 12 | 13 | 48 | 11 |
| 8 | Water and Water-Based Products | PARTIAL | 4 | 0 | 28 | 8 |
| 9 | Infant and Child Contact Products (Ages 0-5) | PARTIAL | 8 | 0 | 28 | 15 |
| 10 | Infant and Child Durable Goods and Textiles (Ages 0-5) | PARTIAL | 12 | 0 | 17 | 38 |
| 11 | Meat, Poultry, and Eggs | PARTIAL | 9 | 1 | 45 | 15 |
| 12 | Household Cleaning and Dishwashing | UNCHARACTERIZED | 21 | 0 | 19 | 129 |
| 13 | Cosmetics and Personal Care - Leave-on | PARTIAL | 19 | 0 | 112 | 9 |
| 14 | Cosmetics and Personal Care - Rinse-off | PARTIAL | 12 | 0 | 50 | 22 |
| 15 | Feminine Care | PARTIAL | 10 | 0 | 41 | 35 |
| 16 | Dietary Supplements (Human) | PARTIAL | 24 | 0 | 77 | 73 |
| 17 | Pet Foods | PARTIAL | 10 | 0 | 21 | 61 |
| 18 | Pet Supplements | PARTIAL | 7 | 0 | 12 | 3 |
| 19 | Laundry and Fabric-Contact Home Products | PARTIAL | 13 | 0 | 13 | 80 |
| 20 | Oral Care | PARTIAL | 10 | 0 | 13 | 44 |
| 21 | Children's Toys, Arts, and Crafts | PARTIAL | 21 | 0 | 65 | 74 |
| 22 | Home Air and Inhalation-Adjacent Products | UNCHARACTERIZED | 15 | 0 | 3 | 107 |
| 23 | Food-Contact Consumer Goods and Kitchenware | PARTIAL | 30 | 0 | 91 | 85 |
| 24 | Dairy and Milk Products | PARTIAL | 9 | 2 | 57 | 8 |
| 25 | Cannabis, Hemp, and CBD Products | PARTIAL | 6 | 0 | 23 | 24 |
| 26 | Peptides, SARMs, and Research Chemicals | PARTIAL | 5 | 0 | 14 | 17 |
| 27 | Legumes and Pulses | PARTIAL | 4 | 0 | 24 | 6 |
| 28 | Nuts, Seeds, and Their Butters | PARTIAL | 5 | 1 | 23 | 16 |
| 29 | Edible Fungi | PARTIAL | 2 | 0 | 17 | 0 |
| 30 | Culinary Oils and Fats | PARTIAL | 2 | 6 | 10 | 1 |
| 31 | Sweeteners and Syrups | PARTIAL | 4 | 5 | 21 | 6 |
| 32 | Condiments, Sauces and Dressings | PARTIAL | 5 | 4 | 22 | 9 |
| 33 | Chocolate, Cocoa and Confectionery | PARTIAL | 3 | 1 | 10 | 4 |
| 34 | Herbs, Spices, Seasonings and Salt | PARTIAL | 4 | 5 | 9 | 11 |
| 35 | Prepared and Packaged Meals | PARTIAL | 2 | 0 | 17 | 3 |
| | Totals | | 356 | 72 | 1290 | 1001 |

Verdict tally: 0 STANDARDS-READY, 33 PARTIAL, 2 UNCHARACTERIZED. The ready, recoverable, and fetch-needed columns reproduce the adversarially confirmed first-pass counts for each category.

## (c) Recover without fetching

These cells need no new literature. They need pipeline or routing work that the system already supports: re-running the pooling engine on values that are loaded, reconciling units or sensitivity bands, routing values that were extracted but stranded under the wrong slug, extracting values that sit in local PDFs or on routed source pages, or compiling several in-house source pages into a single occurrence summary. Recovering them is cheaper and faster than any fetch, and it is the single highest-leverage activity available.

Classifying the recovery hints across all recoverable cells, the four methods distribute approximately as follows. These counts are derived by hand from the per-cell recovery hints and fold the second-pass in-house recoveries (routed-source extraction, broad-context, and total-diet-study reuse) into the nearest canonical method, so they are approximate and sum to more than the 1,290 first-pass verdict count.

Compile-corpus-source is by far the largest method, on the order of 1,000 cells. These are cells where two or more in-house source pages already report the analyte but no occurrence summary has been built. The bulk of Meat (Category 11), Leave-on Cosmetics (Category 13), Rinse-off Cosmetics (Category 14), Dairy (Category 24), and Dietary Supplements (Category 16) sit here.

Extract-local-pdf and in-house source-page extraction together account for roughly 200 cells. These are values present in a local PDF, on a routed source page frontmatter, or in a total-diet-study register, that have not been pulled into the structured register. Beverages (Category 5), Produce (Category 4), Grains (Category 3), and the second-pass total-diet-study recoveries across the food categories dominate this bucket.

Route-stranded-evidence accounts for roughly 100 cells and is the cheapest method of all, because the value has already been extracted and only needs its routing fixed. The pool-starvation register and the empty-slug rows are full of these.

Pool-existing-loaded accounts for roughly 100 cells. These are pools whose structured values are already loaded but are BLOCKED or PROVISIONAL on a unit inconsistency or a sensitivity disagreement. Several are effectively standard-ready once a unit normalization or a regulatory cap is applied.

The highest-value recoveries, grouped by method, are as follows.

Route-stranded-evidence, the cheapest. Category 35 mixed-meals Ni is the marquee example: fechner2022 and bfr2022-nickel are already extracted but sit with an empty slug in `data/evidence/hmtc_pool_starvation_audit.csv` and need only routing. Category 11 eggs-product tAs and tHg recover from the stranded abedi2023-arsenic-mercury-hen-eggs-iran. Category 6 seaweed-kelp tHg and Ni recover from unrouted hahn2022-salish-seaweed-contaminants. Category 16 supplements-algae-seaweed Pb, Cd, tAs, tHg and Ni recover from stranded hahn2022, asni2020 and nepper-davidsen2023. Category 24 dairy-milk-cow, dairy-cheese and dairy-milk-camel Pb and Cd recover from stranded ibrahim2024, erol2025 and yazdanian2025. Category 7 cocoa-chocolate Pb, Cd and Ni recover from stranded romero-estevez2019. Category 3 rice-bulk-grain Pb, iAs and tAs recover from stranded alrashdi2024, yan2025 and myatsoe2023, which also displaces the implausible single-point tAs and tHg artifacts now in the pool.

Pool-existing-loaded, mostly unit and sensitivity reconciliation. Category 6 fish-freshwater Pb is a distinct=9, n=206 pool BLOCKED only on a mixed-unit blowup and recovers on unit normalization. Category 7 and Category 30 cooking-oils-other Pb is a distinct=13, n=306 pool where the EU fats-and-oils cap binds, so the standard is decidable now. Category 17 pet-food-dry-kibble Pb and Cd re-pool after unit normalization, but the current candidates are implausible and must not be trusted before that work. Category 1 infant-formula-powder analytes recover by rolling the soy and non-soy sub-variant pools up to the parent. Category 32 vinegar Cd is PROVISIONAL and recovers on a sensitivity-band decision.

Extract-local-pdf and source-page extraction. Category 5 carries deep tea, coffee and energy-drink PDF backlogs (true-tea Pb and Cd, sports-energy-drinks, matcha) that clear the two-source gate easily once extracted. Category 4 carries 9 to 15 pending PDFs per produce slug (root-tuber Pb and Cd, fresh-fruit, leafy vegetables). Category 27 legumes-pulses-other Pb has 9 local PDFs pending. Category 26 peptides-injectable-hormones iAs requires extracting the full 27-sample janvier2018 distribution from the local PDF rather than relying on the published exceeder tail. Category 11 recovers five red-meat-group iAs cells and the plant-based-meat-alternative cells directly from in-house total-diet-study and BfR MEAL source pages.

Compile-corpus-source, the largest and the synthesis-heavy method. Category 11 beef, pork, lamb, poultry, processed and canned meats each have five or more uncompiled in-house occurrence sources. Category 13 leave-on cosmetics has more than 100 recoverable cells, almost all multi-source compiles. Category 24 dairy cow, goat, cheese, yogurt and powder rows compile from rich in-house corpora. Category 16 supplements-botanicals-herbs has 29 routed sources awaiting a single compile. Category 6 canned-seafood Sn, MeHg, Cd and tAs compile from depaiva2017 and hussein2024.

## (d) Fetch worklist

This section is the list Karen acts on by hand. Every cell below is genuinely absent in-house and requires retrieval of new literature. The companion file `2026-06-11-fetch-worklist.csv` enumerates every fetch cell with its specific query, sorted by priority. To keep this prose section readable, the P0 and P1 cells are given in full and the P2 cells are summarised by category with a pointer to the CSV; the CSV is the complete machine-readable enumeration. Note that a second adversarial pass reclassified roughly 160 originally-fetch cells as in-house recoverable, so the CSV row count is lower than the first-pass fetch-needed verdict totals in the table above.

### P0, retrieve first

There are six P0 cells, all in infant, mineral-matrix, or water contexts where a missing value blocks a high-exposure standard.

Category 8, infant-nursery-water iAs: speciated inorganic arsenic in purified or demineralised nursery water used to reconstitute formula. Generic mineral or drinking-water arsenic over-attributes for a demineralised product.

Category 9, infant-bottles Pb: lead specific migration from infant feeding bottles, stainless, solder, glass and plastic food-contact, into food simulant.

Category 16, supplements-clay-mineral-earth Pb, iAs and tAs: lead, inorganic arsenic and total arsenic in bentonite, zeolite, shilajit and diatomaceous-earth supplements. The locked row is named as a Pb-and-As-dirty class yet there is zero in-house occurrence, and the methodology must not default it to clean-by-default; it must be treated dirty (P45) and that requires fetched data.

Category 23, water-filters tAs: arsenic removal efficacy and breakthrough from point-of-use water filters into filtered water. The only routed sources measure filtered-tap Pb and Cd or are a blood-biomarker intervention, neither of which is filter arsenic occurrence.

### P1, retrieve next

The P1 set spans most categories. The highest-exposure and highest-leverage P1 cells are grouped by category below; the CSV carries the exact query string for each.

Category 2: diaper-cream-zno Pb, tAs and Cd; baby-powder-cornstarch Pb, tAs and Cd; childrens-lip-balm-plain and childrens-lip-balm-mineral-bearing iAs.

Category 3: pasta-rice-based Ni.

Category 4: fruit-snacks Pb, iAs, tAs and Cd.

Category 5: vegetable-juices-root-vegetable-containing Pb and Cd; plant-milks-non-soy-non-rice Al.

Category 8: infant-nursery-water Cr-VI.

Category 9: infant-bottles Cd, Cr and Ni.

Category 10: car-seats Ni; strollers Cr-VI and Ni; high-chairs-and-booster-seats Cr-VI and Ni; walkers Cr-VI and Ni; infant-carriers Ni.

Category 11: plant-based-meat-alternatives Pb, tAs, iAs and Cd.

Category 12: all-purpose-cleaners Pb and Cd; kitchen-countertop-cleaners Pb and Cd; automatic-dishwasher-detergents Pb, Cd and Ni; disinfectants-sanitizers Pb, Cd and Ni; bathroom-tub-tile-cleaners Pb and Cd; cleaning-wipes-household Pb, Cd, Ni and Cr; floor-cleaners-hard-surface Pb and Cd.

Category 13: makeup-foundation-powders-blush Cr-VI; eye-makeup Cr-VI; traditional-eye-cosmetics tHg.

Category 14: body-wash-shower-gel Ni; hand-soap tAs and tHg; deep-conditioning-treatments-rinse-off Pb.

Category 15: menstrual-discs Pb; feminine-wipes Pb and Cd; douches-vaginal-irrigation Pb and Al; intimate-washes-cleansers Pb.

Category 16: supplements-oral-solids-softgels MeHg; supplements-oral-solids-gummies Pb, Cd, tAs and iAs; supplements-teas-labeled iAs; supplements-vitamin-mineral iAs; supplements-protein-collagen-powders iAs and MeHg; supplements-oil-based MeHg, Pb, iAs, tAs and Cd; supplements-clay-mineral-earth Cd, Cr, Cr-VI, Ni, Al and tHg.

Category 17: pet-food-dry-kibble iAs; pet-food-canned-wet iAs and Sn; pet-food-semi-moist Pb, tAs, tHg and Cd; pet-food-raw tAs, tHg and Cd; pet-food-freeze-dried Pb, tAs, tHg and Cd; pet-treats-snacks tAs and tHg; pet-chews-dental Pb; pet-toppers-mixers-broths Pb; pet-milk-replacers-specialty-liquids Pb, tAs and Cd; pet-food-fish-marine-protein iAs and MeHg.

Category 19: laundry-detergent-boosters-additives Pb, Cd and Ni; bleaching-whitening-additives Pb and Cd; fabric-softeners Pb and Cd; laundry-prewash-products Pb, Cd, Cr and Ni.

Category 21: toys-painted Cr-VI; toys-substrate-materials Cr-VI; toys-stuffing-materials Pb, Cd and Cr; toys-marbles Pb; art-craft-materials Cr-VI; toys-attached-cribs-playpens and toys-stroller-carriage Pb and Cd.

Category 23: cookware-metal-alloy Cr-VI; cookware-ceramic-coated Cr and Ni; cookware-specialty-alloy Sn; food-storage-lids-gaskets Sn; food-prep-blender-jars, food-prep-processor-bowls, food-prep-coffee-maker-pathways and food-prep-kettle-interiors Ni, plus the coffee-maker and kettle Pb, Cr and Al wetted-pathway cells; water-filters Cr, Ni and Al; filter-media-and-housings Pb, tAs and Al.

Category 24: dairy-condensed-evaporated Sn and Cr.

Category 26: peptides-injectable-hormones tHg and Ni; sarms-oral Pb, iAs, Cd and Ni; aas-injectable tHg.

Category 28: sunflower-seed-butter Pb and Cd.

Category 34: laundry and bouillon items as listed in the CSV.

Other categories contribute scattered P1 cells listed in the CSV.

### P2, summarised by category

The P2 cells are lower-exposure or speciation-refinement gaps. Counts of P2 cells by category, with full queries in the CSV: Category 12 carries the largest P2 block (the remaining cleaning sub-forms across Pb, Cd, Ni and Cr); Category 22 carries the second largest (all air, diffuser, candle, incense and refill sub-forms across the full metal panel); followed by Category 16, Category 17, Category 19, Category 23, Category 21, Category 20, Category 15, Category 10 and the smaller categories. Categories 12 and 22 are where the P2 burden is genuinely category-defining: they are dark, and most of their cells are P2 only because no in-house anchor exists to make them P1.

## (e) Defensibility flags

The audit recorded 142 defensibility flags in total. Of these, roughly 29 sit on cells currently scored READY or READY FOR REVIEW, which means a standard could be staged from them today even though the candidate value is suspect. These must be re-verified before any standard is locked. The remainder of the 142 flags sit on recoverable or blocked cells and are documented in the source worklist as guards against poisoning a future pool. The READY-cell flags are the load-bearing ones for this section.

Category 1, fruit-juice-not-canned. The Ni candidate of 498.74 ppb is READY but runs about ten times typical fruit-juice Ni because a powder-reconstitution conversion factor of 7 was applied to already-as-consumed chekri2019 values. The Cr-VI cell is READY only as Cr-total at 153.34 ppb, which is a species mismatch; a Cr-VI standard cannot be set from a Cr-total value, and Cr-VI reduces to Cr-III in acidic juice in any case.

Category 6, seafood. The seaweed-kelp tAs P97 of 5,516 ppb is READY but is built on a placeholder plus dry-weight Gracilaria values pooled into an as-sold basis without conversion, and is implausibly low for a row that includes brown algae. The fish-marine-non-predatory tAs P97 of 83,014 ppb is READY but rests on a uniform-max-only reconstruction and exceeds the predatory row, which is biologically inverted. The shellfish iAs P97 of 34 ppb is READY only because distinct=2, but one contributor is a non-admitted placeholder, leaving an effective n=2 from which a P97 is not estimable.

Category 7, oils and specialty. The vinegar Pb, Cr, Al and tAs cells are all READY but are anchored on lead-soldered-equipment-era studies (vinegar Pb), on single-source dominance by ozbek2016 (vinegar Cr and Al), or on an implausibly high tAs with the species unresolved. The olive-oil Cr candidate of 839.6 ppb is READY at about ten times typical and is likely a steel-contact or method artifact, and the olive-oil tAs of 607.95 ppb is implausible for a lipid matrix.

Category 11, meat. The poultry-product Cd candidate of 82.4 ppb is READY but half the pool is iqbal2023, a poultry-feed study mis-routed into the edible-meat distribution; it must be re-pooled from edible-muscle sources only.

Category 24, dairy. The butter-and-ghee Cd candidate of 36.9 ppb is READY but is roughly ten to forty times typical butter Cd, with a bimodal pool driven by a hasan2021 lognormal-mean-max reconstruction. The butter-and-ghee Pb candidate of 20.6 ppb is plausible and below the cap but leans about eighty percent on the same suspect hasan2021 source.

Category 30, culinary oils. The olive-oil Cr, Ni and Al cells are labelled READY FOR REVIEW but rest on max-based reconstruction with zero sample-level contribution, so the upper tails are inferred rather than observed. The cooking-oils-other tAs candidate of 56.18 ppb is READY but elevated for refined oil and must be checked for a max-reconstruction artifact.

Category 31, sweeteners. The honey Pb P97 of 1,410 ppb is READY at roughly fourteen times the EU honey lead ML, with a tail inflated by uniform-max reconstructions. The honey tHg P97 of 74.74 ppb and honey Cr P97 of 995.53 ppb are READY but biologically high for honey and rest on thin two and three-source pools.

Category 32, condiments. The vinegar Pb, tAs, Cr and Al cells are READY but the Cr (3,333.5 ppb) and Al (4,859.3 ppb) candidates are biologically implausible and rest on single-point or unknown-conversion reconstructions, with a real second source (ozbek2016) unpooled.

Category 34, herbs and spices. The spices tHg P97 of 1,501.6 ppb is READY at about fifty times the pool median and is likely contaminated-site or mixed-unit. The spices Cr cell is READY but two chromium species labels pool to central values about 900 times apart, with the turmeric lead-chromate adulteration signal mis-filed in the low pool. The spices Al P97 of about 847,000 ppb is READY but should be confirmed as edible-fraction rather than soil-contamination Al.

Category 28, nuts. The nuts-seeds-other Pb P97 of 965.68 ppb is READY but is built from weak mean-only reconstructions with an oilseed source double-counted; it should be re-pooled from distributional data before staging.

Category 33, chocolate. The chocolate Cd cell is the one READY value in the category but applies the strictest milk-chocolate sub-form cap of 100 ppb to a whole row that includes dark chocolate and cocoa powder, for which the pooled literature P97 is 1,203 ppb; the row likely needs a clean and dirty or sub-form split before a single Cd value is locked.

Beyond the READY cells, three BLOCKED candidates warrant explicit quarantine because they would poison a pool if admitted: the Category 1 infant-formula-powder tHg value of 1,067 ppb, which is a mis-mapped methylmercury duplicate-diet intake study about a thousand times plausible formula mercury; the Category 3 rice-bulk-grain tHg value of 2,360 ppb from an artisanal-gold-mining hotspot; and the Category 3 rice-bulk-grain tAs value of 15,000 ppb, a near-certain unit or extraction artifact derived from an inorganic-arsenic paper.
