---
title: "Why antimony is under consideration for the baby-wipes standard"
type: briefing
status: "pending CEO decision on basis and value"
audience: [internal]
date: 2026-09-25
---

# Why we are adding antimony to the baby-wipes standard

Status: draft. Pending CEO decision on basis and value. The candidate limit is [PENDING CEO DECISION]. This file does not choose a number, does not edit a compiled standard, and does not mint a DOI.

This briefing lives in `docs/briefs/` in the Heavy Metal Index repository because the live compiled baby-wipes standard is not a wiki page. The compiled cells are `data/workbench/standards/cat2-compiled/baby-wipes.json` in this repository, and the certification compiler lives in the Heavy Metal Certified repository. Neither file is edited here. Pull request 152 is a journalist reading brief. It is not this memo and it is not the public synthesis.

## What the evidence shows

The metal that a children's-product screen finds in baby-wipe components, in the survey opened for this revision, is antimony.

Washington State Department of Ecology Publication 14-04-014, revised June 2021, measured antimony at 70.6, 61.3, and 40.6 ppm in three baby-wipe components, and 95.8 ppm in moist baby-wipes packaging. The design prioritized components by X-ray fluorescence and confirmed them by ICP-MS. It is an upper-tail screen of products bought for that study, not a random sample of the category. The analyte is total elemental antimony. The report does not speciate Sb(III) and Sb(V) and does not prove that the antimony is residual polyester catalyst, although plastics are an IARC-listed use of antimony and polyester catalyst residue is the pathway the product literature points at.

Other wipe studies (Choi 2016, a 2021 polyester sweat-extraction paper, a 2026 secondary account of a China comparison) are summarized in pull request 152. Their concentrations are not repeated here, because they were not re-opened for this briefing. They are not the basis of a number.

## Why the eight-total panel misses it

The Required-Testing-Panel Ruling in `docs/governance/hmtc-governing-principles.md` separates two things. The published claim set is numeric for the eight totals (lead, cadmium, total arsenic, total mercury, nickel, aluminium, total chromium, tin), on a basis that matches the article: content for ingestibles and topicals, release or migration for contact materials. The per-lot assay obligation is a different axis (`per_lot_total`, `reflex_speciation`, `mandatory_speciation`, `conditional`, `baseline_monitor`, `not_applicable`).

Antimony is not one of those eight totals and not one of the ten-analyte certification list (the eight totals plus inorganic arsenic, methylmercury, and hexavalent chromium). A lot that meets every published cell in the current eight can still contain antimony. The panel is doing what it was built to do. The pathway is outside the panel.

The ruling already has a name for that situation. A defining pathway can justify a net-new analyte that is not one of the eight. Organotin speciation for marine matrices is the precedent called out in the ruling: total tin does not see the organotin hazard, and the added assay is `conditional`, not a waiver of a base total. Antimony in a polyester or PET wipe is the same shape of problem. The eight totals do not see catalyst or flame-retardant antimony. Adding it would be a pathway analyte, not a ninth total smuggled in as if it had always been in the content panel.

Basis must not be conflated. Acid-digest total content, sweat-extractable content, migration into a simulant, and a lotion-only measurement are different instruments. The ruling's basis guard exists so that a contact article is not judged by the wrong one. For wipes, the CEO decision is which of those instruments the number, when it exists, will be.

## Candidate instruments

The value is [PENDING CEO DECISION]. The candidates below are instruments that already exist. They are listed so the decision can name a basis. They are not ranked, and none is adopted.

| Candidate | Figure as opened | Basis | Legal character | Why it may not fit a wipe |
| --- | --- | --- | --- | --- |
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
| OEKO-TEX STANDARD 100 extractable antimony | Not entered | Extractable, if that annex is the instrument | Private | The annex was not re-opened for this briefing. Do not fill this cell from the companion brief. |
| Washington CSPA | 100 ppm | Presence reporting for chemicals of high concern to children | Reporting trigger | Not a health-based maximum. |

Washington's measured wipe components (40.6, 61.3, and 70.6 ppm total) are occurrence, not a candidate limit. Occurrence does not set a live certification cell under the government-limit method.

## What it means for brands

Category-level only. No brand is named, including brands named in the studies.

A brand whose wipe contains polyester or PET cannot treat a pass on the eight totals as a statement about antimony. If antimony is added, the lot obligation would be an additional assay on the basis the CEO locks (total, extractable, migration, or lotion). Brands would need that basis in the method, because a total ppm and an extractable ppm will not match, and a water MCL cannot be printed on a sheet.

If the CEO does not add antimony, the public literature record still says the eight-total panel does not see it. That gap stays visible. This briefing does not close it with a number.

## What this briefing refuses to do

It does not edit `data/workbench/standards/cat2-compiled/baby-wipes.json`. It does not mint a DOI. It does not deploy. It does not convert any candidate in the table into a published claim. It does not use `subsumed`, a blank cell, or the word monitored as a substitute for a missing number. When a number is chosen, the disposition on a claim cell is still only a government floor or a disclosed read-across, on the basis that was actually decided, and the species and parent rules in Part 19 do not apply to antimony because antimony is not one of those species pairs.
