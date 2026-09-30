---
title: "Why antimony is under consideration for the baby-wipes standard"
type: briefing
status: "pending CEO decision on basis and value"
audience: [internal]
date: 2026-09-25
---

# Why we are adding antimony to the baby-wipes standard

Status: literature note. The published HMTc briefing "Why the Baby-Wipes Standard Adds Antimony" (Brief 13, September 2026) already enters version 2 of the baby-wipes standard at 30000 µg/kg, strictly less than 30 mg/kg total content in the finished product, from Decision (EU) 2023/1809, Annex I, criterion 7.3.8. This file does not edit that cell, does not choose a different number, does not mint a DOI, and does not restate the cell as a wiki finding.

This briefing lives in `docs/briefs/` in the Heavy Metal Index repository because the live compiled baby-wipes standard is not a wiki page. The compiled cells are `data/workbench/standards/cat2-compiled/baby-wipes.json` in this repository, and the certification compiler lives in the Heavy Metal Certified repository. Neither file is edited here. Pull request 152 is a journalist reading brief. It is not this memo and it is not the public synthesis.

## What the evidence shows

The metal that a children's-product screen finds in baby-wipe components, in the survey opened for this revision, is antimony.

Washington State Department of Ecology Publication 14-04-014, revised June 2021, measured antimony at 70.6, 61.3, and 40.6 ppm in three baby-wipe components, and 95.8 ppm in moist baby-wipes packaging. The design prioritized components by X-ray fluorescence and confirmed them by ICP-MS. It is an upper-tail screen of products bought for that study, not a random sample of the category. The analyte is total elemental antimony. The report does not speciate Sb(III) and Sb(V) and does not prove that the antimony is residual polyester catalyst, although plastics are an IARC-listed use of antimony and polyester catalyst residue is the pathway the product literature points at.

Three further documents were opened for this revision. They still do not supply a certification number.

Choi, Song, and Kim 2016 digested approximately 0.2 g and diluted with 25 mL of water. The methods do not say the solution was made up to 25 mL. Table 5 prints antimony from 187.86 ± 5.24 to 19,558.35 ± 3,537.3 µg/L in 12 of 24 wet-wipe nonwovens. The highest sheet is labeled rayon only, and several polyester-labeled sheets had no detected antimony, so the authors' catalyst attribution is a hypothesis rather than a finding for these wipes. Treating the final volume as 25 mL gives µg/L × 0.125, from mg/kg approximately (µg/L × 0.025 L / 0.0002 kg) / 1,000, or about 23.48 to 2,444.79 mg/kg. Treating the digest as 8 mL of acid plus 25 mL of water gives µg/L × 0.165, and a higher top of about 3,227.13 mg/kg. The paper prints neither figure. The source page records one mask pack at 8,895.28 ± 42.86 µg/L in the nonwoven and 38.95 ± 1.86 µg/L in the liquid, and does not adopt other mask-pack antimony figures. Borca, Huthwelker, and Filella 2025 found organic antimony, glycolate or acetate, in PET bottles, and excluded a significant amount of the trioxide in those bottles. Neither derived milligrams-per-kilogram reading is a candidate limit. The OECD summary of 0.26 percent in vitro dermal absorption, and OEHHA's 0.14 percent at a higher loading, are summaries of an unpublished study. They are not a wipe absorption fraction, and they are not used to set a number here.

The China Association for Quality Promotion of Consumer Products Safety page dated 2 April 2026 reports total antimony detected in 20 of 21 online baby wipes and not detected in one. The annex is an image. Preferred reads run from a stable low of 15.02 µg/L to a stable high preferred read of 450.45 µg/L. One wrapped cell's preferred read is 383.7 µg/L, with the last digit low confidence. A second full-cell pass also produced 490.40 and 399.43 µg/L where the preferred reads are 450.45 and 355.43. That unit is not a sheet concentration in milligrams per kilogram, and it is not a candidate limit. Brands named on that page are not repeated.

Biver, Turner, and Filella 2021 measured artificial-sweat release from six polyester textiles, not from wipes. Totals were 125 to 471 µg/g. Extracts under ISO 105-E04 were 0.402 ± 0.128 to 2.572 ± 0.031 µg/g. That is a simulant result, not absorption, and not a wipe-sheet total.

## Why the eight-total panel misses it

The Required-Testing-Panel Ruling in `docs/governance/hmtc-governing-principles.md` separates two things. The published claim set is numeric for the eight totals (lead, cadmium, total arsenic, total mercury, nickel, aluminium, total chromium, tin), on a basis that matches the article: content for ingestibles and topicals, release or migration for contact materials. The per-lot assay obligation is a different axis (`per_lot_total`, `reflex_speciation`, `mandatory_speciation`, `conditional`, `baseline_monitor`, `not_applicable`).

Antimony is not one of those eight totals and not one of the ten-analyte certification list (the eight totals plus inorganic arsenic, methylmercury, and hexavalent chromium). A lot that meets every published cell in the current eight can still contain antimony. The panel is doing what it was built to do. The pathway is outside the panel.

The ruling already has a name for that situation. A defining pathway can justify a net-new analyte that is not one of the eight. Organotin speciation for marine matrices is the precedent called out in the ruling: total tin does not see the organotin hazard, and the added assay is `conditional`, not a waiver of a base total. Antimony in a polyester or PET wipe is the same shape of problem. The eight totals do not see catalyst or flame-retardant antimony. Adding it would be a pathway analyte, not a ninth total smuggled in as if it had always been in the content panel.

Basis must not be conflated. Acid-digest total content, sweat-extractable content, migration into a simulant, and a lotion-only measurement are different instruments. The ruling's basis guard exists so that a contact article is not judged by the wrong one. For wipes, the CEO decision is which of those instruments the number, when it exists, will be.

## Candidate instruments

The live briefing already selected one of the instruments below. The rows are listed so the basis of that selection stays visible beside the instruments that were not selected. This file does not edit the compiled cell.

| Candidate | Figure as opened | Basis | Legal character | Why it may not fit a wipe |
| --- | --- | --- | --- | --- |
| EU Ecolabel absorbent hygiene products, Decision (EU) 2023/1809, Annex I criterion 7.3.8 | less than 30 mg/kg, entered on the live standard as 30000 µg/kg | Total content in the final product | Voluntary label criterion, not a market ban | This is the figure Brief 13 already selected. It is not a migration limit, and it is not a wiki certification number. |
| Health Canada cosmetic impurity guidance | 5 ppm (5 mg/kg) | Finished cosmetic | Guidance, not a regulation | Does not name wipes. Applies only if a wipe is classified as a cosmetic. |
| Germany BVL 2017 orientation value | 0.5 mg/kg | Cosmetic products in general, and toothpaste | Orientation for technically avoidable content | Not a statute. Scope is cosmetics, not demonstrated here for wipes. |
| Korea MFDS cosmetic trace allowance | 10 µg/g | Marketed cosmetic, unintentional trace | Notice | Same cosmetic-scope question. |
| EU Regulation 1223/2009 Annex II entry 40, Article 17 | Prohibition of antimony as an ingredient; no ppm for traces | Intentional ingredient versus technically unavoidable trace | Statute, no numeric trace ceiling | Does not yield a number without a further choice. |
| EU Toy Safety Directive, EN 71-3 Category III | 560 mg/kg migrated | Scraped-off toy material, 0.07 M HCl | Statute for toys | A wipe is not a toy. Category I is 45 mg/kg and Category II is 11.3 mg/kg, still migration, still toys. |
| ASTM F963 soluble antimony | 60 mg/kg | Soluble toy migration | U.S. toy rule | Same toy-basis problem. |
| EU 10/2011 Annex II | 0.04 mg/kg | Specific migration into food from plastic | Statute for plastic food contact | Food, not a wipe sheet. |
| EPA drinking-water MCL and FDA bottled water | 0.006 mg/L | Water | Statute | Water, not a sheet. |
| WHO drinking-water guideline | 0.02 mg/L | Water | Guideline | Water, not a sheet. |
| OEKO-TEX STeP, as ingested in this corpus | 100 µg/L | Textile-mill wastewater | Private production standard | Effluent, not a finished wipe. |
| OEKO-TEX STANDARD 100, as stated by Biver 2021 | Extractable antimony less than 30 µg/g for clothing textiles | Extractable, clothing textiles | Private label, cited by Biver from the 2020 association text | The annex was not opened. Biver's sentence is not a substitute for the annex, and a clothing-textile label is not a wipe limit. |
| EU Ecolabel for textile products, Decision 2014/350/EU | 260 ppm in polyester fibres, and 30,0 mg/kg extractable in acid sweat | Raw fibre before wet processing, and a separate extractable test; recycled-PET fibre derogated from the 260 ppm figure | Voluntary Ecolabel. The decision was opened. The comma in 30,0 is the printed decimal mark. | Fibre content and clothing extractable antimony, not the finished-wipe total the live briefing selected. |
| Washington CSPA | 100 ppm | Presence reporting for chemicals of high concern to children | Reporting trigger | Not a health-based maximum. |

Washington's measured wipe components (40.6, 61.3, and 70.6 ppm total) are occurrence, not a candidate limit. Occurrence does not set a live certification cell under the government-limit method.

## What it means for brands

Category-level only. No brand is named, including brands named in the studies.

A brand whose wipe contains polyester or PET cannot treat a pass on the eight totals as a statement about antimony. Brief 13 already adds antimony on the finished-product total-content basis of the EU Ecolabel, measured directly on the wipe, and includes that cell in pass/fail. A total ppm and an extractable ppm will not match, and a water MCL cannot be printed on a sheet. This file does not edit that cell.

The public literature record still says the eight-total panel does not see antimony. That gap stays visible on the wiki pages. This briefing does not close it by inventing a second number.

## What this briefing refuses to do

It does not edit `data/workbench/standards/cat2-compiled/baby-wipes.json`. It does not mint a DOI. It does not deploy. It does not convert any candidate in the table into a published claim. It does not use `subsumed`, a blank cell, or the word monitored as a substitute for a missing number. When a number is chosen, the disposition on a claim cell is still only a government floor or a disclosed read-across, on the basis that was actually decided, and the species and parent rules in Part 19 do not apply to antimony because antimony is not one of those species pairs.
