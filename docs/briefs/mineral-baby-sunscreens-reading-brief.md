# Mineral baby sunscreens: reading brief

Evidence ingest of 26 September 2026. This brief, the number ledger and the flags file are written to be read together and to be sufficient on their own for writing a synthesis paper. Every number below carries a ledger row reference (MBS-nnnn) that points to the page and table or figure where the value is printed.

- Number ledger: `docs/briefs/mineral-baby-sunscreens-number-ledger.csv` (585 rows)
- Flags: `data/evidence/mineral-baby-sunscreens-ingest-2026-09-26-flags.csv` (50 flags: 22 resolved, 28 unresolved)
- Table-level data: `data/evidence/<cite-key>-<unit>.csv` (14 files)
- Source pages: `wiki/sources/<cite-key>.md`

No brand or product names appear in this brief, the ledger or the flags. Finished products are identified by chart row (for example "chart row 27"), laboratory case number (for example "case 2505271"), or table-order code (for example "OH-12"). Where a source prints a brand in its own headline, that name appears only on the source page.

## 1. How to read the ledger

Columns: `row_id`, `cite_key`, `record_type`, `metal`, `analyte_species`, `matrix`, `sample_code`, `basis`, `unit`, `statistic`, `value_as_printed`, `censoring`, `n`, `page`, `table_or_figure`, `evidence_class`, `flag_ids`, `note`.

Record types: `occurrence` (a measured concentration in a product, raw material or environmental sample), `detection-count`, `derived-by-source` (a median, percentage or estimate that the source itself computed), `cited-literature` (a range the source quotes from another study), `dermal` (skin, receptor-fluid or blood values from penetration studies), `specification` (a raw-material ceiling or claimed specification), `compliance-result`, `limit`, and `limit-cited` (a benchmark named by a source but whose instrument is not in this collection).

Basis vocabulary: `as-sold` (the product or unit as received by the laboratory), `raw material (dry powder)`, `dissolved` or `dissolved plus particulate (unfiltered)` for seawater, `receptor medium` for in vitro skin models, `tissue (dry weight)`, `blood`, `finished product` for limits, and `colour additive raw material`. No source in this collection reports a migration or leachate basis for a sunscreen product. The seawater release experiments in the Rodríguez-Romero paper are the only leaching design, and their product-side values are as-sold contents.

Unit identities used in the sources: 1 ppb = 1 µg/kg; 1 ppm = 1 mg/kg = 1 µg/g. Values in the ledger are exactly as printed, including thousands separators, less-than signs and "ND". Superscript exponents are written with a caret (1.48 x 10^7). No value in the ledger has been converted. Where this brief states an equivalence (for example 1017.5 ppb = 1.0175 mg/kg) it is a unit identity, not a new measurement.

Species. Every arsenic value is total arsenic and every mercury value is total mercury. No source measured inorganic arsenic or methylmercury in a sunscreen or raw material. Chromium was not measured in any finished baby sunscreen; one peer-reviewed paper lists chromium among elements not detected, without a detection limit.

## 2. What is in the collection

The archive held 35 PDFs, all matching the checksum file. They map to 30 source pages: 24 new pages and 6 existing pages that received missing facts. The two Korean attachments form one page; the five 21 CFR section PDFs were added to the existing 21 CFR Part 73 page. Twenty-three manifest entries had no PDF (section 9).

| Source page (cite key) | Class | Design | Matrix | Metals | n | Ledger rows |
| --- | --- | --- | --- | --- | --- | --- |
| rubin2026-sunscreen-metals-comparison-chart | grey literature | commissioned single-unit ICP-MS, comparison chart | 35 sunscreens, 1 zinc oxide powder | Pb, Cd, tAs, tHg | 36 units | MBS-0001 to MBS-0149 |
| rubin2025-mineral-baby-sunscreen-case-2505271, -2505468, -2507165, -2506212, -2505470 | grey literature | commissioned single-unit ICP-MS laboratory reports | baby mineral sunscreens | Pb, Cd, tAs, tHg | 1 unit each | MBS-0150 to MBS-0169 |
| oasis2026-35-sunscreens-solvents-metals | grey literature (company report) | commissioned single-unit ICP-MS screening | 35 retail sunscreens | Pb, Cd, tAs, tHg | 35 units | MBS-0170 to MBS-0320 |
| rodriguez-romero2019-sunscreen-metals-coastal-seawater | peer-reviewed | product characterisation plus seawater leaching | one adult SPF 50 spray; seawater | Al, Cd, Co, Cu, Mn, Mo, Ni, Pb, Ti | 1 product | MBS-0321 to MBS-0348 |
| tovar-sanchez2013-sunscreen-emerging-pollutants-coastal | peer-reviewed | product metals (supplement) plus field seawater | seven adult sunscreens; seawater | Al, Fe, Ti, Zn; 14 elements not detected | 7 products | MBS-0349 to MBS-0393 |
| dccf2021-infant-child-sunscreens-korea | grey literature (consumer federation, government portal) | compliance test | 17 infant and child sunscreens | Pb, Cd, tAs, Sb, tHg, Ni (pass/fail) | 17 | MBS-0394 to MBS-0399 |
| sccs2024-titanium-dioxide-scientific-advice-1661-23 | government (EU committee, applicant data) | raw-material impurity profiles and hazard review | cosmetic TiO2 grades | Pb, tAs, Sb, tHg, Cd (HCl-soluble) | 84 grades | MBS-0400 to MBS-0423 |
| danishepa2015-dermal-absorption-nano-tio2-zno-sunscreen | government-funded report | in vitro and in vivo skin models | sunscreen with 2.5 wt% nanoparticles | Ti, Zn | 8 materials | MBS-0424 to MBS-0481 |
| khabir2021-epidermal-zinc-zno-nanoparticle-sunscreen | peer-reviewed | ex vivo human skin, 67Zn tracer, LA-ICP-MS | skin layers | Zn | 3 donors | MBS-0482 to MBS-0500 |
| mohammed2019-zno-nanoparticle-sunscreen-repeated-application | peer-reviewed | human volunteers, imaging | viable epidermis | ZnO particle signal | 5 volunteers | MBS-0501 to MBS-0508 |
| crosera2015-tio2-nanoparticle-skin-penetration-hacat | peer-reviewed | Franz cells, intact and damaged human skin | skin, receptor fluid | Ti | 6 cells per condition | MBS-0509 to MBS-0513 |
| gulson2016-nanoparticles-sunscreens-ichmet | conference abstract | human volunteers, 68Zn tracer outdoors | blood, urine | Zn | 20 adults | MBS-0514 |
| sccs2012-zinc-oxide-nano-opinion-1489-12 | government (EU committee) | safety opinion | nano ZnO UV filter | Zn; impurity statement | none | MBS-0515 to MBS-0521 |
| sccs2014-zinc-oxide-nano-addendum-1518-13 | government (EU committee) | addendum on characteristics | nano ZnO UV filter | purity condition | none | MBS-0583 |
| sccs2014-titanium-dioxide-nano-opinion-1516-13 | government (EU committee) | safety opinion | nano TiO2 UV filter | claimed Pb, As, Sb, Hg ceilings | 15 materials | MBS-0578 to MBS-0582 |
| efsa2021-e171-titanium-dioxide-safety | government (EU agency) | food-additive safety opinion | E171 | none | none | none |
| danishepa2014-nano-anatase-tio2-consumer-products | government report | market mapping and review | sunscreens, paints | crystal form only | 7 sunscreens | none |
| fda2019-sunscreen-proposed-rule-84fr6204 | government regulation (proposed) | rulemaking | OTC sunscreens | ZnO, TiO2 actives | none | MBS-0584 to MBS-0585 |
| healthcanada2026-primary-sunscreen-monograph | government regulation | licensing monograph | primary sunscreens | ZnO, TiO2 actives | none | MBS-0572 to MBS-0573 |
| pal2016-uvb-zno-nanoparticle-dermal-penetration-mouse | peer-reviewed | animal, UVB-damaged skin | mouse skin | Zn (values in missing supplement) | not stated | none |
| rahma2022-infant-skin-barrier-function-review (updated) | peer-reviewed review | narrative review | infant skin | none | none | none |
| bvl2017-technically-avoidable-heavy-metals-cosmetics (updated) | government guidance | orientation values from monitoring | cosmetics | Pb, Cd, Hg, As, Sb | 1,735 monitoring samples | MBS-0547 to MBS-0558 |
| healthcanada2012-cosmetics-heavy-metal-impurities (updated) | government guidance | technically avoidable limits | cosmetics | Pb, As, Cd, Hg, Sb | none | MBS-0532 to MBS-0546 |
| healthcanada2015-natural-health-products-quality-guide (updated) | government guidance | quality specifications | natural health products | As, Cd, Pb, Hg, Sb, Cr | none | MBS-0559 to MBS-0571 |
| fda2023-21cfr-part73-color-additives (updated with 2025 sections) | government regulation | colour-additive specifications | TiO2, ZnO raw materials | Pb, As, Sb, Hg, Cd | none | MBS-0522 to MBS-0531 |
| eu-2009-1223-cosmetic-products-regulation (updated with Annex VI) | government regulation | UV-filter annex | TiO2, ZnO filters | purity conditions | none | MBS-0574 to MBS-0577 |

## 3. Finished baby mineral sunscreens: grey literature

Only grey literature in this collection measures metals in finished sunscreens marketed for babies. All of it is single purchased units tested once by commercial laboratories, with results as sold.

### 3.1 Consumer-advocacy comparison chart (rubin2026-sunscreen-metals-comparison-chart)

Design. A consumer-advocacy business commissioned tests of community-nominated products at one commercial laboratory (ICP-MS). One unit per product, one lot. The chart (Draft 2.1, updated 19 April 2026, posted 28 May 2026) is an image on PDF p. 43 and was read from the image. Reporting limits are 5 ppb for lead, cadmium and mercury and 10 ppb for arsenic. No digestion, recovery, replicate or reference-material detail is given.

Matrices. 35 sunscreens and, as row 36, a single-ingredient zinc oxide powder (100%) sold for making sunscreen. Rows 1 and 2 are charted as chemical-filter sunscreens (one "Face", one "Kid"). Rows 3 to 8 have "??" in the ingredient column (FL-13). Rows 9 to 35 are charted as zinc oxide sunscreens. The "Kids?" column marks 11 rows "Baby" (rows 7, 8, 10, 12, 14, 20, 25, 27, 30, 31, 34), of which nine are zinc oxide rows.

Header counts. Lead positive in 33 of 35 sunscreens, cadmium 29 of 35, arsenic 13 of 35, mercury 5 of 35 (MBS-0145 to MBS-0148). These reconcile exactly with rows 1 to 35 (FL-10).

Key ranges.
- Chemical-filter rows 1 and 2: all four metals non-detect (MBS-0001 to MBS-0008).
- Zinc oxide rows 9 to 35: lead 118.00 ppb (row 9, MBS-0033) to 4,612.50 ppb (row 35, MBS-0137); cadmium 9.67 ppb (row 9, MBS-0034) to 645.00 ppb (row 30, MBS-0118); arsenic up to 485.30 ppb (row 10, MBS-0040); mercury up to 7.88 ppb (row 12, MBS-0047).
- Baby-marked zinc oxide rows (10, 12, 14, 20, 25, 27, 30, 31, 34): lead 169.20 (row 10, MBS-0037) to 2,140.30 ppb (row 34, MBS-0133); cadmium 122.70 (row 34, MBS-0134) to 645.00 ppb (row 30, MBS-0118). Arsenic above 10 ppb in three: 485.30 (row 10, MBS-0040), 135.90 (row 14, MBS-0056), 14.92 (row 12, MBS-0048). Mercury above 5 ppb in two: 7.88 (row 12, MBS-0047) and 5.29 (row 30, MBS-0119). Printed zinc contents for baby rows, where given: 20.00% (rows 14, 30), 23.40% (row 31), 24.08% (row 27).
- Baby-marked rows with unknown active (rows 7 and 8): lead 76.53 and 81.28 ppb (MBS-0025, MBS-0029); row 8 cadmium 6.20 ppb.
- Zinc oxide powder, row 36: lead 9,474.70 ppb (MBS-0141), cadmium 506.20 ppb (MBS-0142), arsenic and mercury non-detect.

Rows without a published report. Rows 3, 4, 11, 13, 18, 26, 29 and 32 are marked "To Be Published" (FL-12). None of them is a baby-marked row. They are not used for any range end above except where noted as zinc oxide rows 9 to 35, whose range ends (rows 9, 10, 12, 30, 35) all have published reports.

Limitations. One unit per product, community-nominated selection, one laboratory, no method validation for zinc oxide matrices, draft chart. The chart labels lead of 1,000 ppb and above "Possibly Illegal by Washington State TFCA"; the same page says state administrators treat sunscreens as outside that limit, and the instrument is not in this collection (FL-11, FL-48).

### 3.2 Five single-product laboratory reports (rubin2025-mineral-baby-sunscreen-case-*)

Design. The same programme; each page publishes one laboratory report. Values below were read from the report images; the OCR text layers were wrong for three of them (FL-03 to FL-06, FL-08). These five tests are the same as chart rows 10, 14, 20, 27 and 31 and must be counted once (FL-09).

| Case (chart row) | Product type as printed | Lead (ppb) | Cadmium (ppb) | Arsenic (ppb) | Mercury (ppb) | Ledger |
| --- | --- | --- | --- | --- | --- | --- |
| 2507165 (row 10) | baby mineral lotion with prebiotics, SPF 55 | 169.2 | 166.1 | 485.3 | < 5.00 | MBS-0158 to MBS-0161 |
| 2505470 (row 14) | sensitive-skin baby mineral lotion, SPF 50 | 330.0 | 218.6 | 135.9 | < 5.00 | MBS-0166 to MBS-0169 |
| 2506212 (row 20) | baby mineral lotion, SPF 50 | 495.1 | 232.4 | < 10.00 | < 5.00 | MBS-0162 to MBS-0165 |
| 2505271 (row 27) | zinc oxide baby lotion, SPF 50 | 1017.5 | 356.1 | < 10.00 | < 5.00 | MBS-0150 to MBS-0153 |
| 2505468 (row 31) | zinc oxide 23.4% baby sunscreen, SPF 50 | 1251.1 | 575.5 | < 10.00 | < 5.00 | MBS-0154 to MBS-0157 |

Receipt and test dates run from 14 May to 14 July 2025. The internal lot for case 2505271 is printed 2028-080, out of sequence with the others (FL-07).

### 3.3 Retail screening of 35 sunscreens (oasis2026-35-sunscreens-solvents-metals)

Design. A consumer-health company bought 35 retail sunscreens and sent one unit of each to an unnamed ISO/IEC 17025 accredited laboratory (Order No. 594282; received 23 July 2026). Metals by ICP-MS after AOAC 2015.01 microwave digestion; LOD 0.001 and LOQ 0.004 mg/kg for all four metals. The report states that the method was validated for foods, that digestion completeness for mineral particles was not evaluated, and that any shortfall would understate content (FL-15). It labels itself peer reviewed without describing a review process (FL-14). Products are coded OH-01 to OH-35 in the printed order of Table 3 (sorted by lead). Most are adult products; the set includes lotions, sticks and aerosol sprays, four units whose certificate names include "mineral" (OH-11, OH-16, OH-18, OH-21), two kids sprays (OH-13, OH-34) and one unit whose name indicates a baby line (OH-12).

Key ranges (mg/kg as sold).
- Lead quantified in 35 of 35, 0.006 (OH-35, MBS-0309) to 4.960 (OH-01, MBS-0173); five above 1 and one above 2 (MBS-0310).
- Cadmium quantified in 21 of 35, 0.005 (OH-20, MBS-0247) to 0.603 (OH-03, MBS-0179); seventeen above 0.1 (MBS-0311).
- Arsenic quantified in 9, 0.005 to 0.189 (MBS-0312). Mercury quantified in 3, 0.004 to 0.009 (MBS-0313).
- Cadmium-quantified units all had lead of at least 0.125 mg/kg; cadmium-ND units all had lead of at most 0.079 mg/kg. Median lead 0.620 versus 0.0165 mg/kg (MBS-0314, MBS-0315). These figures reproduce from Table 3.
- "Mineral" units: lead 0.620, 0.379, 0.231, 0.125 and cadmium 0.211, 0.187, 0.145, 0.418 (MBS-0210 to MBS-0213, MBS-0230 to MBS-0233, MBS-0238 to MBS-0241, MBS-0250 to MBS-0253); all in the cadmium-positive group.
- Baby-line unit OH-12: lead 0.613, cadmium 0.109, arsenic below LOQ, mercury ND (MBS-0214 to MBS-0217).
- Kids sprays: OH-13 lead 0.589, cadmium 0.073 (MBS-0218 to MBS-0221); OH-34 lead 0.007, cadmium ND (MBS-0302 to MBS-0305).
- Ten of the fourteen cadmium-ND units are described as sprays (Table 4, p. 12).
- The report estimates about 170 µg of lead placed on skin by one whole-body application of OH-01 at 2 mg/cm2 over roughly 17,000 cm2, and bounds absorption at 0.06 to 0.3 % from a published lead-acetate study (MBS-0316). This is the source's own order-of-magnitude estimate.

Cross-source note. OH-12 and case 2505468 carry names from the same product line. Their values differ (lead 0.613 mg/kg versus 1251.1 ppb, which is 1.2511 mg/kg by unit identity; cadmium 0.109 versus 575.5 ppb, 0.5755 mg/kg). Variant, lot, purchase date, laboratory and method differ or are unknown. Keep them separate (FL-16).

### 3.4 Korean infant and child sunscreens (dccf2021-infant-child-sunscreens-korea)

Design. A Korean consumer federation tested 17 infant and child sunscreens bought online in October 2020 (13 Korean, 2 French, 2 German origin; SPF 25 to 50+). Lead, cadmium, arsenic, antimony, mercury and nickel were assessed against MFDS notice 2020-12. Result: all 17 "○", meaning compliant or not detected (MBS-0394 to MBS-0399). No concentrations, detection limits or limit values are printed, and the set mixes mineral and chemical filters (FL-25). A Korean journal survey of children's and inorganic sunscreens was not obtained (section 9).

## 4. Finished sunscreens: peer-reviewed, adult products

### 4.1 Rodríguez-Romero et al. 2019 (rodriguez-romero2019-sunscreen-metals-coastal-seawater)

Design. One commercial SPF 50 milk spray containing nano titanium dioxide was digested and analysed in triplicate by ICP-MS, then leached into filtered Mediterranean seawater under UV and dark conditions for 24 h. Author accepted manuscript; Crossref confirms Environmental Science & Technology 53(17):10177-10187 (FL-18). Corresponding author email: araceli.rodriguez@unican.es.

Key values (Table 1, µg/kg as sold, single printed values without SD, FL-20): lead 743 (MBS-0335), cadmium 16.7 (MBS-0323), nickel 47.5 (MBS-0333), cobalt 6.10, copper 170, manganese 254, molybdenum 137, aluminium 1.67 x 10^6 (MBS-0321), titanium 1.48 x 10^7 (MBS-0337). Background seawater values in nmol/L are in the adjacent ledger rows. The text cites earlier sunscreen surveys with lead of 27.0 to 1.75 x 10^3 µg/kg (MBS-0342); those studies were not obtained. The modelled summer-day increase of dissolved metals off a beach is 7.53 x 10^-4 % (nickel) to 19.8 % (titanium) in the abstract, rounded to 7.5 x 10^-4 % and 20 % in the text (FL-21; MBS-0344 to MBS-0347). Two model figures are internally inconsistent and are not usable for headlines: a seawater volume of 2.58 x 10^-4 m3 (FL-23) and a predicted final titanium of 45 nmol/L against a 33.5 nmol/L background, which implies more than 20 % (FL-22; MBS-0348).

Limitations. One adult product; no arsenic or mercury; no SD.

### 4.2 Tovar-Sánchez et al. 2013 (tovar-sanchez2013-sunscreen-emerging-pollutants-coastal)

Design. Supplementary Table S2 lists metals in seven commercial sunscreens by ICP-AES after digestion (mean ± SD of three analytical replicates), with laboratory-made sunscreen reference materials for titanium and zinc (recoveries 108 ± 6 % and 101 ± 1 %). Corresponding author email: atovar@imedea.uib-csic.es.

Key values (µg/g as sold): titanium 11146 ± 401, 6302 ± 973 and 14855 ± 1774 in sunscreens 1, 4 and 6 (MBS-0351, MBS-0363, MBS-0371); zinc 72688 ± 101 in sunscreen 7 (MBS-0376); aluminium 342 ± 27 and 1071 ± 93 (MBS-0353, MBS-0369); iron 68.7 ± 3.7 (MBS-0354). Ag, Cd, Co, Cr, Cu, Mn, Mo, Ni, Si, Sr, Pb, Tl, V and Zr are reported as not detected (MBS-0377 to MBS-0390). No detection limit is printed, so these non-detects are not upper bounds and cannot be read as absence (FL-02). The manifest said eight products; the table has seven (FL-01). Field data: titanium 38 ± 7 µg/L and zinc 10.8 µg/L in the unfiltered surface microlayer, titanium 23.7 ± 1.7 ng/L at a pristine beach (MBS-0391 to MBS-0393).

## 5. Raw materials: titanium dioxide and zinc oxide

- Zinc oxide powder, 100%, single unit (grey literature): lead 9,474.70 ppb and cadmium 506.20 ppb (MBS-0141, MBS-0142).
- Cosmetic titanium dioxide grades (SCCS 2024, applicant data). SCCS summary maxima, HCl-soluble: pigmentary grades arsenic ≤ 1, lead ≤ 10, antimony ≤ 2, mercury ≤ 1, cadmium ≤ 1 mg/kg; nano grades arsenic < 1, lead < 10, antimony < 2, mercury < 1 ppm, cadmium not provided (MBS-0414 to MBS-0423). Most grade rows print only ceilings. Numeric profiles: RM01 lead 0.3 and RM02 lead 0.8 mg/kg, both with arsenic, antimony, mercury and cadmium < 0.1 (MBS-0400 to MBS-0409); RM81 (nano) lead 3, antimony 0.5, mercury 0.1, arsenic < 1 mg/kg (MBS-0410 to MBS-0413). Arsenic, cadmium, lead and antimony are extracted in boiling 0.5 N hydrochloric acid, not totally digested; mercury is labelled HCl-soluble in the summary table but described as determined after sulfuric and nitric acid digestion (FL-34). The applicants state that ore-derived trace metals are "embedded in the lattice" of the pigment. SCCS contact: SANTE-SCCS@ec.europa.eu.
- Nano titanium dioxide UV filters (SCCS 2014). The applicant claimed conformity with USP 35 and FDA ceilings (arsenic ≤ 1 ppm; HCl-soluble lead ≤ 10 ppm, antimony ≤ 2 ppm; mercury ≤ 1 ppm; MBS-0578 to MBS-0581). SCCS states analytical data on purity and impurities were not submitted and asked for mercury, cadmium, lead, arsenic, antimony and the allergens chromium, cobalt and nickel (FL-33). One material was doped with 1000 ppm iron (MBS-0582).
- Nano zinc oxide UV filters (SCCS 2012 and 2014 addendum). No impurity data were provided; purity ≥ 99 % was taken to mean impurities ≤ 1 % (MBS-0521). The addendum and Annex VI entry 30a allow purity ≥ 96 % with impurities only carbon dioxide and water and other impurities below 1 % in total (MBS-0583; FL-32).
- Crystal form (Danish EPA 2014). Two of seven titanium dioxide sunscreens on the Danish market used anatase as the primary form, the rest rutile; no metal data.
- EFSA 2021 (E171). E171 can no longer be considered safe as a food additive because genotoxicity cannot be ruled out. No impurity values (FL-50). SCCS 2024 concluded that genotoxicity could not be excluded for almost all titanium dioxide grades in oral cosmetic products and kept its earlier dermal conclusions.

## 6. Skin penetration and infant skin

All penetration studies used adult or animal skin, and all measured zinc or titanium, not lead, cadmium, arsenic or mercury.

- Khabir et al. 2021 (ex vivo human skin, three donors, 20 % wt/wt 67ZnO-PEG nanoparticles for 48 h). Table 1: exogenous zinc in viable epidermis 3.1 ± 0.8 µg/g dry (1.0 ± 0.3 µg/mL), endogenous 13 ± 2 µg/g (4.3 ± 0.7 µg/mL); stratum corneum tracer 235 ± 49 µg/g; dermis exogenous 1.4 ± 0.5 µg/g (MBS-0482 to MBS-0496). HaCaT IC50 26 ± 5 µg Zn/mL; abstract cytotoxic range 21 to 31 µg/mL (MBS-0497). Most tracer stayed in the surface wash (630 ± 110 µg/g, MBS-0498). The µg/mL values are converted from µg/g using about 70 % epidermal water in a supplement not in this collection; the discussion prints 2.1 ± 0.5 µg/g where Table 1 prints 2.0 ± 0.5 µg/g (FL-40). Corresponding authors: m.roberts@uq.edu.au, andrei.zvyagin@mq.edu.au.
- Mohammed et al. 2019 (five adult volunteers, 10 % w/w zinc oxide nanoparticles in oil at 2 mg/cm2, hourly for 6 h and daily for 5 days). Viable-epidermis particle signal 0.48 % (hourly, uncoated) and 0.1 % (daily, uncoated) of the topical dose, not different from controls (0.06 to 0.09 %) (MBS-0501 to MBS-0508). Zinc ions slightly elevated in excised skin. Corresponding author: m.roberts@uq.edu.au.
- Gulson 2016 (conference abstract of the 2010 outdoor trial; 20 adults; 68Zn-enriched zinc oxide, 19 nm or > 100 nm, for 5 days). Blood tracer after application about 1/1000th of total blood zinc and still rising afterwards (MBS-0514). Same dataset as the 2010 paper; count once (FL-45). Corresponding author: brian.gulson@mq.edu.au.
- SCCS 2012 review of zinc absorption: receptor-fluid zinc below 0.03 % of dose for coated zinc oxide formulations, taken by SCCS as possibly absorbed (MBS-0515); in the 68Zn trial blood isotope ratio changes of 0.1 to 0.8 % (nano group), mean increase about 0.4 %, tracer 8.6 to 30.8 µg in the highest male group against about 12 mg of zinc in whole blood, below 0.001 % of the applied dose (MBS-0516 to MBS-0520).
- Danish EPA 2015 (2.5 wt% nanoparticles in a chemical-filter base). Zinc beneath EpiDerm tissue 2744.67 ± 308.80 and 2439.00 ± 905.38 µg/L for the two zinc oxide materials versus 25.00 ± 1.73 and 37.00 ± 4.36 µg/L in controls (MBS-0441, MBS-0443, MBS-0425, MBS-0427). Titanium in the same medium 0.47 to 2.03 µg/L, upper-bound estimates not different from control (FL-39). Mouse ear titanium 3.2 to 121.56 mg/kg dry weight, attributed to incomplete wash-off (MBS-0444 to MBS-0467); human xenograft titanium < 0.11 to 2.51 mg/kg dry weight (MBS-0468 to MBS-0479). Reporting inconsistencies: FL-36, FL-37, FL-38.
- Crosera et al. 2015 (Franz cells, titanium dioxide nanoparticles in synthetic sweat). No titanium in receptor fluid (< 5 µg/L); epidermis 0.47 ± 0.33 µg/cm2 on intact skin, dermis below detection; needle-abraded skin 0.53 ± 0.26 µg/cm2 (MBS-0509 to MBS-0512). Printed donor dose 606 µg/cm2 does not match its stated volume and area (FL-42). Corresponding author: larese@units.it.
- Pal et al. 2016 (hairless mice, zinc oxide nanoparticles with UVB 50 mJ/cm2). UVB increased skin zinc and inflammation; numeric values are only in a supplement not in this collection (FL-46). Direction only. Corresponding author: kmansari@iitr.res.in.
- Rahma and Lane 2022 (review). Infant skin barrier approaches adult properties by about two years; infant surface area per body weight is 2.3 times the adult value; sunscreens are often applied over a large body surface area; the American Academy of Pediatrics recommendation restricts infant sunscreen to areas not covered by clothes; dermal absorption in infants with skin conditions is little studied. Corresponding author: annisarahma@fa.itb.ac.id.
- Regulatory age framing. The Health Canada monograph's youngest subpopulation is infants 6 to 12 months (directions for children over 6 months); US labelling at 21 CFR 201.327 reads "children under 6 months of age: Ask a doctor" (FDA 2019, PDF p. 44).

## 7. Government and regulatory limits in these sources

Every limit, specification or permitted concentration printed in a source in this collection. "Basis" states what the value applies to. None of these is a finished-product heavy-metal limit for sunscreens in the United States; no such limit appears in any source here.

### 7.1 Element limits and specifications

| Instrument | Article, section or annex | Scope | Pb | Cd | As | Hg | Sb | Other | Basis | Status | Ledger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Health Canada NNHPD Quality of Natural Health Products Guide, v3.1 (2015) | §3.2.2, Table 2 | Topical natural health products; applied to NHP primary sunscreens by the monograph | 10 ppm | 3 ppm | 3 ppm | 1 ppm (total) | 5 ppm | | finished product | federal guidance applied by monograph | MBS-0559 to MBS-0563 |
| Same guide | Appendix specification table | Topical products | | | | | | "Chromium IV (if applicable)" topical 5 ppm | finished product | internally inconsistent; not usable (FL-28) | MBS-0564 |
| Same guide | §3.2.1, Table 1; §3.2.1.2 | Oral natural health products (daily exposure) | < 0.14 µg/kg bw/day | < 0.09 µg/kg bw/day | total < 0.14; inorganic < 0.03; organic < 20 µg/kg bw/day | total < 0.29; methyl < 0.029 µg/kg bw/day | | Cr(VI) 0.29 µg/kg bw/day | daily intake | federal guidance; oral route | MBS-0565 to MBS-0571 |
| Health Canada Guidance on Heavy Metal Impurities in Cosmetics (effective 2012-07-20; page modified 2017-10-02) | Section 4, policy statement | Cosmetics | 10 ppm | 3 ppm | 3 ppm | 1 ppm (amended from 3 ppm, 2013) | 5 ppm | | finished product | federal guidance, technically avoidable level | MBS-0532 to MBS-0536 |
| German BGA values as cited in the Health Canada guidance | Section 3.3 | Cosmetics; toothpaste | 20; 1 ppm | 5; 0.1 ppm | 5; 0.5 ppm | 1; 0.2 ppm | 10; 0.5 ppm | | finished product | superseded foreign guidance, cited | MBS-0537 to MBS-0546 |
| German BVL, technically avoidable heavy metal contents (J Consum Prot Food Saf 2017;12:51-53) | Table 1 | Cosmetic products in general (sunscreens are cosmetics in the EU); toothpaste | 2.0 mg/kg (5 for listed decorative products); 0.5 | 0.1; 0.1 | 0.5 (2.5 theatre make-up); 0.5 | 0.1; 0.1 | 0.5; 0.5 | | finished product | orientation value, not statutory | MBS-0547 to MBS-0558 |
| 21 CFR 73.575, 4-1-25 edition (adopted by 73.1575 drugs and 73.2575 cosmetics) | §73.575(b) | Titanium dioxide used as a colour additive | 10 ppm | | 1 ppm | 1 ppm | 2 ppm | TiO2 ≥ 99.0 %; loss on ignition ≤ 0.5 %; water-soluble ≤ 0.3 %; acid-soluble ≤ 0.5 % | raw material; Pb, As, Sb in 0.5 N HCl extract | binding US regulation (colour-additive use only) | MBS-0522 to MBS-0525, MBS-0530 |
| 21 CFR 73.1991, 4-1-25 edition (adopted by 73.2991 cosmetics) | §73.1991(b) | Zinc oxide (French process) used as a colour additive, including eye area | 20 ppm | 15 ppm | 3 ppm | 1 ppm | | ZnO ≥ 99 %; loss on ignition ≤ 1 % | raw material | binding US regulation (colour-additive use only) | MBS-0526 to MBS-0529, MBS-0531 |
| SCCS/1661/23 (2024) | Table 3.1.5 | Cosmetic titanium dioxide, pigmentary; nano | ≤ 10 mg/kg; < 10 ppm | ≤ 1 mg/kg; not provided | ≤ 1 mg/kg; < 1 ppm | ≤ 1 mg/kg; < 1 ppm | ≤ 2 mg/kg; < 2 ppm | water-soluble ≤ 0.5 %, < 0.25 %; acid-soluble ≤ 1.5 %, < 0.5 % | raw material, HCl-soluble (Hg basis unclear, FL-34) | applicant maxima summarised by EU committee | MBS-0414 to MBS-0423 |
| SCCS/1516/13 (2014), applicant claim | §1.3.2 table footnote | Nano titanium dioxide UV filters | (HCl-soluble) ≤ 10 ppm | | ≤ 1 ppm | ≤ 1 ppm | (HCl-soluble) ≤ 2 ppm | TiO2 99.0 to 100.5 %; loss on ignition ≤ 13 % (USP 35) | raw material | claimed, no data submitted (FL-33) | MBS-0578 to MBS-0581 |
| MFDS notice 2020-12 (Korea), as cited | not restated | Cosmetics | tested | tested | tested | tested | tested | Ni tested | finished product | values not printed in the source | MBS-0394 to MBS-0399 |

### 7.2 Mineral UV-filter concentration and purity conditions

| Instrument | Provision | Titanium dioxide | Zinc oxide | Conditions | Ledger |
| --- | --- | --- | --- | --- | --- |
| Regulation (EC) No 1223/2009, Annex VI, as at 31 December 2020 (legislation.gov.uk) | Entries 27, 27a, 30, 30a | 25 % (nano and non-nano combined) | 25 % (combined) | Nano TiO2: purity ≥ 99 %, rutile or rutile with ≤ 5 % anatase, median size ≥ 30 nm, listed coatings, photocatalytic activity ≤ 10 %, no inhalation applications. Nano ZnO: purity ≥ 96 %, wurtzite, impurities only CO2 and water with others < 1 % in total, D50 > 30 nm, D1 > 20 nm, solubility < 50 mg/L, no inhalation applications. Non-nano ZnO: no inhalation applications. Consolidation status unverified (FL-31). | MBS-0574 to MBS-0577 |
| Health Canada Primary Sunscreen Monograph (2026-02-27) | Table 1, footnotes 2, 5, 6; Specifications | ≤ 25 % (nano included) | ≤ 25 % (nano included) | Pharmacopoeial grade; finished-product specifications per NNHPD Quality Guide; nano forms supported where not leading to lung exposure | MBS-0572, MBS-0573 |
| 84 FR 6204 (FDA proposed rule, 26 February 2019) | Section A, Category I | up to 25 % | up to 25 % | Proposed GRASE; no nanomaterial-specific conditions; no metal limits | MBS-0584, MBS-0585 |
| SCCS/1518/13 (2014 addendum) | Section 4 | | nano ZnO purity ≥ 96 % | Basis of Annex VI entry 30a | MBS-0583 |
| SCCS/1489/12 (2012) | §3.1.4-3.1.5; conclusions | | nano ZnO purity ≥ 99 %; D50 30 to 55 nm | Superseded by the addendum | MBS-0521 |

### 7.3 Benchmarks named by sources but not in this collection

These are recorded as cited benchmarks only (`limit-cited` rows). Their primary instruments were not obtained, so they have not been verified and are not placed against product values (FL-11, FL-48).

| Named by | Instrument as described | Value as printed | Ledger |
| --- | --- | --- | --- |
| Retail screening report | US FDA lead guidance for cosmetic lip products and externally applied cosmetics, non-binding, stated not to reach OTC drug products | Lead 10 mg/kg | MBS-0317 |
| Retail screening report | Washington State Toxic-Free Cosmetics Act, described as covering the non-drug ingredients of sunscreens | Lead 1 mg/kg (statutory) | MBS-0318 |
| Retail screening report | Washington State interim non-enforcement policy, general cosmetics | Lead 2 mg/kg | MBS-0319 |
| Retail screening report | California Proposition 65 maximum allowable dose level for lead | 0.5 µg/day | MBS-0320 |
| Comparison chart | Washington State TFCA, described as not applying to sunscreens per state administrators | 1,000 ppb (1 ppm) | MBS-0149 |

The retail report also cites ICH Q3C residual-solvent limits (benzene 2 mg/kg, conditional), which concern solvents, not metals.

## 8. Flags

Full detail, verbatim values and page citations are in the flags file.

Resolved (22): FL-01 (Tovar table has 7 products, not 8), FL-03 to FL-06 and FL-08 (lab-report values read from images; OCR errors), FL-09 (chart rows duplicate the five single reports), FL-10 (chart header counts reconcile), FL-18 (accepted manuscript matches Crossref record), FL-21 (abstract versus text rounding), FL-27 (§73.1991 source note is 42 FR 37537), FL-29 (Health Canada guidance copies agree), FL-32 (2014 addendum supersedes 2012 zinc oxide conditions), FL-35 (SCCS specifications separated from measurements), FL-39 (Danish titanium medium values are upper bounds), FL-40 (Khabir Table 1 value used over prose), FL-41 (Khabir method difference explained by authors), FL-43 (Crosera units confirmed from image), FL-44 (Crosera author name), FL-47 (negative confidence limits are small-sample intervals), FL-49 (BVL table read from image; dating), FL-50 (EFSA has no impurity values).

Unresolved (28): FL-02 (Tovar non-detects without detection limit), FL-07 (lot number anomaly), FL-11 (Washington scope conflict between sources), FL-12 (eight chart rows without reports), FL-13 (unknown active in chart rows 3 to 8), FL-14 (retail report's review status), FL-15 (food-method digestion), FL-16 (same product line, different values), FL-17 (Korean non-metal inconsistencies), FL-19 (Rodríguez-Romero footnote), FL-20 (statistic not labelled), FL-22 (titanium model arithmetic), FL-23 (implausible seawater volume), FL-24 (ambiguous cited titanium range), FL-25 (Korean results without numbers), FL-26 (SCCS NOAEL unit typo), FL-28 (Health Canada chromium entry), FL-30 (lost exponent in Health Canada text), FL-31 (Annex VI consolidation status), FL-33 (SCCS 2014 claimed specifications without data), FL-34 (SCCS 2024 mercury basis label), FL-36 (Danish detection-limit unit), FL-37 (censored cells below printed detection limits), FL-38 (Danish coating descriptions), FL-42 (Crosera dose arithmetic), FL-45 (Gulson pagination and duplicate dataset), FL-46 (Pal supplement missing), FL-48 (cited benchmarks not in collection).

Values that must not appear in a headline, a range end or a limit comparison: chart rows 3, 4, 11, 13, 18, 26, 29 and 32 (FL-12); Tovar non-detects as upper bounds (FL-02); the Rodríguez-Romero titanium model outputs and seawater volume (FL-22, FL-23) and cited titanium range (FL-24); the Health Canada topical chromium entry (FL-28); the Washington, FDA-guidance and Proposition 65 figures as comparators (FL-11, FL-48); Korean compliance results as concentrations (FL-25); the Crosera donor dose (FL-42).

## 9. Manifest entries without a PDF

Twenty-three manifest entries had no PDF in the archive and were not ingested. Reasons are as stated in the manifest.

1. FDA (2021). Proposed Order OTC000008, amending OTC Monograph M020, sunscreen drug products. Not obtained: fda.gov bot check (HTTP 401).
2. FDA (2021). Final Administrative Order OTC000006 and OTC Monograph M020, sunscreen drug products (CARES Act deemed final order). Not obtained: accessdata.fda.gov bot check (HTTP 401).
3. Therapeutic Goods Administration (2016). Literature review on the safety of titanium dioxide and zinc oxide nanoparticles in sunscreens. Not obtained: TGA firewall (HTTP 403).
4. Therapeutic Goods Administration. Understanding the regulation of therapeutic sunscreens (2025), and the Australian Regulatory Guidelines for Sunscreens. Not obtained: TGA firewall (HTTP 403).
5. Standards Australia / Standards New Zealand. AS/NZS 2604:2021 Sunscreen products, evaluation and classification. Not obtained: paid standard.
6. EFSA ANS Panel (2016). Re-evaluation of titanium dioxide (E 171) as a food additive, EFSA Journal 14(9):4545, DOI 10.2903/j.efsa.2016.4545. Not obtained: publisher challenge (HTTP 403).
7. Regulation (EC) No 1223/2009 current consolidated text and Commission Regulation (EU) 2021/850. Not obtained: EUR-Lex and legislation.gov.uk challenges (HTTP 202).
8. Zmozinski AV et al. (2016). Determination of Pb and Cr in sunscreen samples by HR-CS GF AAS, Microchemical Journal 128:89-94, DOI 10.1016/j.microc.2016.03.020. Not obtained: paywalled.
9. Zachariadis GA, Sahanidou E (2009). Multi-element method for trace elements in sunscreens by ICP-AES, J Pharm Biomed Anal 50(3):342-348, DOI 10.1016/j.jpba.2009.05.003. Not obtained: paywalled.
10. Nader R, Zoory MJ, Mohamad HJ (2025). Relative intensity LIBS approach for heavy metals in sunscreens compared with AAS, Optical Review 32(6):791-801, DOI 10.1007/s10043-025-01013-7. Not obtained: paywalled.
11. Ali M et al. (2023). Heavy metals and health risk in commonly available sunblocks, Int J Environ Anal Chem 104(19):7408-7426, DOI 10.1080/03067319.2023.2173599. Not obtained: paywalled.
12. Hepp NM et al. (2014). Survey of cosmetics for arsenic, cadmium, chromium, cobalt, lead, mercury and nickel, J Cosmet Sci 65(3):125-145. Not obtained: access restrictions; open-access status unconfirmed.
13. Korean survey (2021). UV filters, preservatives and heavy metals in children's and inorganic sunscreens on the Korean market, J Soc Cosmet Sci Korea 47(4):289-296. Not obtained: sold by KISS; no DOI found; authors not recorded.
14. Gulson B et al. (2010). Small amounts of zinc from zinc oxide particles in sunscreens applied outdoors are absorbed through human skin, Toxicol Sci 118(1):140-149, DOI 10.1093/toxsci/kfq243. Not obtained: not open access (summarised by the Gulson 2016 abstract).
15. Gulson B et al. (2012). Dermal absorption of zinc from different sunscreen formulations and UV exposure by stable isotope tracing, Sci Total Environ 420:313-318, DOI 10.1016/j.scitotenv.2011.12.046. Not obtained: paywalled.
16. Holmes AM et al. (2016). Relative penetration of zinc oxide and zinc ions into human skin, ACS Nano 10(2):1810-1819, DOI 10.1021/acsnano.5b04148. Not obtained: paywalled.
17. Holmes AM et al. (2020). Penetration of zinc into human skin after topical nano zinc oxide in commercial sunscreens, ACS Appl Bio Mater 3(6):3640-3647, DOI 10.1021/acsabm.0c00280. Not obtained: paywalled.
18. Leite-Silva VR et al. (2016). Human skin penetration and local effects of topical nano zinc oxide after occlusion and barrier impairment, Eur J Pharm Biopharm 104:140-147, DOI 10.1016/j.ejpb.2016.04.022. Not obtained: paywalled.
19. Monteiro-Riviere NA et al. (2011). Safety evaluation of sunscreen formulations containing TiO2 and ZnO nanoparticles in UVB sunburned skin, Toxicol Sci 123(1):264-280, DOI 10.1093/toxsci/kfr148. Not obtained: not open access.
20. Filipe P et al. (2009). Stratum corneum is an effective barrier to TiO2 and ZnO nanoparticle percutaneous absorption, Skin Pharmacol Physiol 22(5):266-275, DOI 10.1159/000235554. Not obtained: not open access.
21. Larese Filon F, Mauro M, Adami G, Bovenzi M, Crosera M (2015). Nanoparticles skin absorption: new aspects for a safety profile evaluation, Regul Toxicol Pharmacol 72(2):310-322, DOI 10.1016/j.yrtph.2015.05.005. Not obtained: not open access.
22. Schneider SL, Lim HW (2019). A review of inorganic UV filters zinc oxide and titanium dioxide, Photodermatol Photoimmunol Photomed 35(6):442-446, DOI 10.1111/phpp.12439. Not obtained: not open access.
23. China: Safety and Technical Standards for Cosmetics (2015), NIFDC children's cosmetics technical guideline (2023), and SAMR/CPQS sunscreen market surveys. Not obtained: TLS certificate error and bot challenge; no survey reporting metals in sunscreens was located.

## 10. Gaps a synthesis must state

- No peer-reviewed measurement of metals in a finished sunscreen marketed for babies is in this collection. The only baby-product values are single commercially tested units.
- No source measured inorganic arsenic, methylmercury or hexavalent chromium in any sunscreen or raw material.
- No source measured lead, cadmium, arsenic or mercury crossing skin from a sunscreen, and no penetration study used infant skin. Zinc and titanium penetration data are for adults or animals.
- No source in this collection sets a finished-product heavy-metal limit for sunscreens in the United States. Canada applies topical natural health product limits to mineral sunscreens licensed under its monograph. EU Annex VI sets purity conditions for nano forms without element-specific limits; German orientation values apply to cosmetics in general.
- Digestion differs across sources (unspecified commercial ICP-MS, AOAC 2015.01 food method, total digestion, 0.5 N HCl extraction), so values are not directly comparable and none is shown to recover metal locked in mineral particles.
- Titanium dioxide raw-material data are applicant-supplied and mostly ceilings; zinc oxide raw-material data are one unit from grey literature and the colour-additive specification.
