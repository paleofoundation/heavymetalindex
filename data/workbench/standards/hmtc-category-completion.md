# HMTc Category Completion Audit

Generated 2026-08-13 from the sovereign regulatory register and the current government-limit compilers.

## Canonical analyte contract

Eight totals: Pb, Cd, tAs, tHg, Ni, Sn, Al, Cr. Core species: iAs, Cr-VI. Conditional species: MeHg. Species cells are additional controls and never replace their parent total-element result.

A **controlled** total cell is deliberately not presented as a numeric government limit: it means the total remains mandatory in the laboratory panel but no defensible sovereign number exists for that exact or near-neighbour cell. Occurrence evidence cannot fill it. A category is publication-ready only after governance accepts its disclosed read-across and control determinations.

## Compiled categories

| Category | Rows | Variants | Numeric total cells | Controlled total cells | Defects | Status |
| ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 — Infant and Child Foods | 14/14 | 16 | 117/128 | 11 | 0 | all-rows-resolved-with-controls |
| 3 — Grains, Cereals, and Rice Products | 12/12 | 12 | 75/96 | 21 | 0 | all-rows-resolved-with-controls |
| 6 — Seafood | 7/7 | 7 | 50/56 | 6 | 0 | all-rows-resolved-with-controls |
| 7 — Oils, Condiments, and Specialty Foods | 8/12 | 8 | 29/64 | 35 | 0 | partial-scope-resolved |
| 9 — Infant and Child Contact Products | 8/8 | 8 | 56/64 | 8 | 0 | all-rows-resolved-with-controls |
| 24 — Dairy and Milk Products | 8/8 | 8 | 56/64 | 8 | 0 | all-rows-resolved-with-controls |
| 25 — Cannabis, Hemp, and CBD Products | 5/6 | 5 | 25/40 | 15 | 0 | partial-scope-resolved |
| 17 — Pet Foods | 10/10 | 10 | 50/80 | 30 | 0 | all-rows-resolved-with-controls |

## Deliberately unresolved rows

- Category 7: `condiments-general`, `snacks-general`, `canned-foods-general`, `mixed-meals-prepared-foods`. Eight scope-locked rows compile. Four broad rows remain blocked on the taxonomy/product-basis splits recorded in the Step-0 lock.
- Category 25: `cannabis-vape-hardware`. Five route-defined material/product rows compile. Vape hardware remains blocked on the lock's reserved aerosol-release/shared-hardware architecture decision.
- Category 26: `peptides-injectable-hormones`, `sarms-oral`, `aas-injectable`, `research-chem-raw-powders`. No lawful product-specific sovereign maximum exists, and the parenteral/oral dose-basis method is not yet governed. Occurrence or a health-based calculation cannot replace the missing government anchor under the current initial-limit rule.

## Resolution mix

- Category 1: control 42; gov 104; read_across 29; subsumed 1.
- Category 3: control 51; gov 65; read_across 16.
- Category 6: control 14; gov 40; read_across 17; subsumed 6.
- Category 7: control 58; gov 30.
- Category 9: control 1; gov 45; not_material 23; read_across 18; special 1.
- Category 24: control 31; gov 24; read_across 33.
- Category 25: control 30; gov 23; read_across 2.
- Category 17: control 21; not_material 28; read_across 60; subsumed 1.

## Compiled limit matrices

Values are in µg/kg unless a cell prints another unit. `RA` means disclosed sovereign read-across. `control` means mandatory testing with no defensible sovereign numeric maximum. `n/m` is a gated not-material determination.

### Category 1 — Infant and Child Foods

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `infant-formula-powder` / cow | 20 | 10 | 50 | 15 | 250 | 5000 | 4000 | 2000 | 20 | control | control |
| `infant-formula-powder` / soy | 20 | 10 | 50 | 15 | 400 | 5000 | 8000 | 2000 | 20 | control | control |
| `fruit-juice` | 20 | 10 | 50 | 10 | 250 | 5000 RA | 500 RA | control | 10 | control | control |
| `infant-formula-rtf-liquid` / cow | 10 | 5 | 50 | 4 | 100 | 5000 | 500 | 300 RA | 10 | control | control |
| `infant-formula-rtf-liquid` / soy | 10 | 5 | 50 | 4 | 100 | 5000 | 1000 | 300 RA | 10 | control | control |
| `root-vegetable-purees-single-ingredient` | 20 | 40 | 100 | 8 RA | 500 | 5000 RA | 500 RA | control | 20 | control | control |
| `baby-cereals-dry-rice-based` | 20 | 40 | 50 | 8 RA | 3000 | 5000 | 500 RA | control | 100 | control | control |
| `baby-cereals-dry-non-rice` | 20 | 40 | 50 | 8 RA | 3000 | 5000 | 500 RA | control | 20 | control | control |
| `non-root-vegetable-purees` | 10 | 40 | 50 | 8 RA | 500 | 5000 | 500 RA | control | 20 | control | control |
| `mixed-meals-rice-containing` | 10 | 40 | 50 | 8 | 500 | 5000 | 500 RA | control | 20 | control | control |
| `mixed-meals-non-rice` | 10 | 40 | 50 | 8 | 500 | 5000 | 500 RA | control | 20 | control | control |
| `teething-and-snacks-rice-based` | 20 | 40 | 50 | 8 RA | 3000 | 5000 | 500 RA | control | 100 | control | control |
| `teething-and-snacks-non-rice` | 20 | 40 | 50 | 8 RA | 3000 | 5000 | 500 RA | control | 20 | control | control |
| `fruit-purees-general` | 10 | 40 | 100 | 8 RA | 500 | 5000 RA | 500 RA | control | 20 | control | control |
| `meat-and-poultry-purees` | 10 | 40 | 100 | 8 RA | 500 | 5000 RA | 500 RA | control | 20 | control | control |
| `fish-containing-baby-foods` | 20 | 40 | 100 | 8 RA | 500 | 5000 RA | 500 RA | 12000 RA | 20 | control | bounded by tHg |

Formula powder and ready-to-feed rows each retain cow/non-soy and soy variants.

### Category 3 — Grains, Cereals, and Rice Products

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `flour-non-rice` | 100 | 100 | 200 | 30 | 800 | control | 100000 RA | 2000 RA | control | control | control |
| `bread-and-baked-goods` | 100 | 100 | 300 | 30 | 800 | control | 100000 | 2000 RA | control | control | control |
| `pasta-wheat-based` | 100 | 100 | 200 | 30 | 800 | control | control | 2000 RA | control | control | control |
| `pasta-rice-based` | 200 | 100 | 300 | 30 | 1500 | control | 200000 | 2000 RA | 250 | control | control |
| `breakfast-cereal-non-rice` | 100 | 100 | 200 | 30 | 800 | control | 100000 RA | 2000 RA | control | control | control |
| `breakfast-cereal-rice-based` | 200 | 100 | 300 | 30 | 1500 | control | 100000 RA | 2000 RA | 300 | control | control |
| `rice-bulk-grain` | 200 | 100 | 300 | 30 | 1500 | control | control | 2000 RA | 150 | control | control |
| `rice-snacks-crackers` | 200 | 100 | 300 | 30 | 1500 | control | 100000 RA | 2000 RA | 300 | control | control |
| `rice-noodles` | 200 | 100 | 300 | 30 | 1500 | control | 200000 | 2000 RA | 250 | control | control |
| `rice-beverages-rice-milk` | control | control | control | control | control | control | control | 2000 RA | 30 | control | control |
| `other-grain-products` | 100 | 50 | 300 | 30 | 800 | control | control | 2000 RA | control | control | control |
| `grain-based-snacks` | 100 | 100 | 300 | 30 | 800 | control | 100000 | 2000 RA | control | control | control |

### Category 6 — Seafood

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `seaweed-kelp-foods` | 5000 | 2000 | 5000 | 2500 | 30000 | control | 500 RA | 12000 RA | 1000 | control | control |
| `shellfish` | 500 | 500 | 1000 | 500 | 30000 RA | control | 500 RA | 12000 RA | 100 | control | bounded by tHg |
| `cephalopods` | 300 | 1000 | 1000 | 300 | 30000 RA | control | 500 RA | 12000 RA | 50 | control | bounded by tHg |
| `fish-freshwater` | 200 | 50 | 1000 | 300 | 30000 RA | control | 500 RA | 12000 | 100 | control | bounded by tHg |
| `canned-seafood` | 200 | 50 | 1000 | 500 | 30000 RA | 100000 | 500 RA | 12000 | 100 | control | bounded by tHg |
| `fish-marine-non-predatory` | 200 | 50 | 1000 | 300 | 30000 RA | control | 500 RA | 12000 | 100 | control | bounded by tHg |
| `fish-marine-predatory` | 200 | 50 | 1000 | 1000 | 30000 RA | control | 500 RA | 12000 RA | 100 | control | bounded by tHg |

Includes the six locked seafood rows plus the separately compiled cephalopod row.

### Category 7 — Oils, Condiments, and Specialty Foods

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `olive-oil` | 80 | control | 100 | control | control | control | control | control | control | control | control |
| `cooking-oils-other` | 80 | control | 100 | control | control | control | control | control | control | control | control |
| `butter-and-ghee` | 20 | 1000 | 500 | 50 | control | control | control | control | control | control | control |
| `honey` | 100 | 100 | 300 | 50 | control | control | control | control | control | control | control |
| `vinegar` | 500 | 1000 | 200 | 50 | control | control | control | control | control | control | control |
| `chocolate` | 100 | 100 | 200 | 50 | 2500 | control | control | control | control | control | control |
| `spices` | 600 | 1000 | 1500 | 50 | control | control | control | control | control | control | control |
| `salt` | 1000 | 500 | 500 | 100 | control | control | control | control | 500 | control | control |

Eight scope-locked rows compile. Four broad rows remain blocked on the taxonomy/product-basis splits recorded in the Step-0 lock.

### Category 9 — Infant and Child Contact Products

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `pacifiers-and-sucking-teething-aids` | 23000 RA | 17000 RA | 47000 RA | 94000 RA | 930000 RA | 180000000 RA | 28130000 RA | 60000 RA | n/m | 53 RA | n/m |
| `teething-toys-teethers` | 23000 | 17000 | 47000 | 94000 | 930000 | 180000000 | 28130000 | 60000 | n/m | 53 | n/m |
| `infant-bottles` | 10 | 2 | 10 | 10 | 20 | n/m | 1000 | 10 | n/m | 10 RA | n/m |
| `infant-bottle-nipples` | 10 | 2 | 10 | 10 | 20 | n/m | 1000 | 10 | n/m | 10 RA | n/m |
| `sippy-cups-toddler-drinkware` | 10 | 2 | 10 | 10 | 20 | n/m | 1000 | 10 | n/m | 10 RA | n/m |
| `infant-food-storage-items` | 10 | 2 | 10 | 10 | 20 | n/m | 1000 | 10 | n/m | 10 RA | n/m |
| `feeding-accessories-child-sized` | 10 | 2 | 10 | 10 | 20 | n/m | 1000 | 10 | n/m | 10 RA | n/m |
| `diapers-and-components` | 1000 RA | 1000 RA | 1000 RA | n/m | 0.5 µg/cm²/week special | 1000000 | n/m | control | n/m | 1000 RA | n/m |

### Category 24 — Dairy and Milk Products

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `dairy-milk-cow` | 20 | 50 | 50 | 50 | 100 RA | control | 500 RA | 300 RA | 100 | control | control |
| `dairy-milk-goat-sheep` | 20 RA | 50 RA | 1000 RA | 100 RA | 100 RA | control | 500 RA | 300 RA | control | control | control |
| `dairy-milk-camel` | 20 RA | 50 RA | 1000 RA | 100 RA | 100 RA | control | 500 RA | 300 RA | control | control | control |
| `dairy-cheese` | 20 | 500 | 500 | 50 | 100 RA | control | 500 RA | 300 RA | control | control | control |
| `dairy-yogurt-cultured` | 20 | 1000 | 500 | 50 | 100 RA | control | 500 RA | 300 | control | control | control |
| `dairy-cream` | 100 | 200 | 100 | 100 RA | 100 RA | control | 500 RA | 300 RA | control | control | control |
| `dairy-milk-powders` | 20 RA | 1000 | 500 | 50 | 250 RA | control | 500 RA | 2000 | control | control | control |
| `dairy-condensed-evaporated` | 200 | 100 | 100 | 100 RA | 100 RA | control | 500 RA | 300 RA | control | control | control |

### Category 25 — Cannabis, Hemp, and CBD Products

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `cannabis-flower` | 500 | 200 | 200 | 100 | control | control | control | 600 | control | control | control |
| `cannabis-edibles` | 500 | 500 | 500 | 400 | control | control | control | 1100000 RA | control | control | control |
| `cannabis-tinctures-oils` | 500 | 500 | 500 | 400 | control | control | control | 1100000 | control | control | control |
| `cannabis-topicals` | 500 | 500 | 500 | 400 | control | control | control | 1100000 | control | control | control |
| `cannabis-concentrates` | 500 | 500 | 500 | 100 | control | control | control | 600 RA | control | control | control |

Five route-defined material/product rows compile. Vape hardware remains blocked on the lock's reserved aerosol-release/shared-hardware architecture decision.

### Category 17 — Pet Foods

| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `pet-food-dry-kibble` | 100 RA | 40 RA | 100 RA | 30 RA | 800 RA | n/m | control | control | 100 RA | n/m | n/m |
| `pet-food-canned-wet` | 100 RA | 50 RA | 100 RA | 200 RA | control | 200000 RA | control | control | 20 RA | n/m | n/m |
| `pet-food-semi-moist` | 100 RA | 40 RA | 100 RA | 30 RA | 800 RA | n/m | control | control | 100 RA | n/m | n/m |
| `pet-food-raw` | 100 RA | 50 RA | 100 RA | 200 RA | control | n/m | control | control | 20 RA | n/m | n/m |
| `pet-food-freeze-dried` | 100 RA | 40 RA | 100 RA | 30 RA | 800 RA | n/m | control | control | 100 RA | n/m | n/m |
| `pet-treats-snacks` | 100 RA | 40 RA | 100 RA | 30 RA | 800 RA | n/m | control | control | 100 RA | n/m | n/m |
| `pet-chews-dental` | 100 RA | 40 RA | 100 RA | 30 RA | 800 RA | n/m | control | control | 100 RA | n/m | n/m |
| `pet-toppers-mixers-broths` | 100 RA | 50 RA | 100 RA | 200 RA | control | n/m | control | control | 20 RA | n/m | n/m |
| `pet-milk-replacers-specialty-liquids` | 20 RA | 50 RA | 50 RA | 50 RA | 100 RA | n/m | 500 RA | 300 RA | 100 RA | n/m | n/m |
| `pet-food-fish-marine-protein` | 200 RA | 50 RA | 1000 RA | 300 RA | control | n/m | control | 12000 RA | 100 RA | n/m | bounded by tHg |

Human-grade over-compliance: pet food is legally feed (EU 2002/32, FDA CVM, AAFCO) but every cell is certified to the strictest human-food sovereign maximum for the nearest analog. All cells are disclosed human-grade read-across or explicit control/not-material determinations — never a feed number.

