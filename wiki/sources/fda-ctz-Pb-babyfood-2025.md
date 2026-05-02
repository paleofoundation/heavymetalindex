---
type: source
cite_key: fda-ctz-Pb-babyfood-2025
title: "Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry"
authors: ["U.S. Food and Drug Administration"]
year: 2025
publication: "U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program"
doi: null
source_type: gov-guidance
evidence_tier: A
raw_path: raw/reports/FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf
sha256: 8d52935f682a50daf68f6fb7f051c8ddec2cb7b22093ab910fcf1b5f8a32b110
related_raw_paths:
  - raw/reports/FDA_CloserToZero_Lead_ActionLevels_2025.pdf
related_sha256:
  FDA_CloserToZero_Lead_ActionLevels_2025.pdf: d349ed5cc116261df02ba4c0b6f90e77cb6b9a5ac83aec71120234c588ebd40c
access_date: 2026-05-02
access_url: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children
download_url: https://www.fda.gov/media/164684/download
docket: FDA-2022-D-0278
license: us-government-work
metals: [Pb]
ingredients: ["[[ingredients/rice-flour]]", "[[ingredients/rice-cereal]]", "[[ingredients/carrots]]", "[[ingredients/sweet-potatoes]]", "[[ingredients/fruits]]", "[[ingredients/vegetables]]", "[[ingredients/yogurt]]", "[[ingredients/single-ingredient-meats]]"]
products: ["[[products/infant-rice-cereal]]", "[[products/dry-infant-cereal]]", "[[products/single-ingredient-root-vegetable-babyfood]]", "[[products/processed-babyfood-mixtures]]", "[[products/babyfood-fruits]]", "[[products/babyfood-vegetables]]", "[[products/babyfood-yogurts-custards]]", "[[products/babyfood-single-ingredient-meats]]"]
jurisdictions: [US]
superseded_by: null
updated: 2026-05-02
---

# FDA 2025 — Lead Action Levels for Processed Food for Babies and Young Children

## Summary

This is FDA's final January 2025 guidance under the Closer to Zero program, setting three action levels for lead in processed foods intended for babies and young children less than two years of age: 10 ppb for fruits, non-root vegetables, mixtures, yogurts and custards, and single-ingredient meats; 20 ppb for single-ingredient root vegetables; and 20 ppb for dry infant cereals. The action levels are non-binding guidance issued under 21 CFR 109.6(d), defining the thresholds at which FDA may regard a food as adulterated within the meaning of section 402(a)(1) of the Federal Food, Drug, and Cosmetic Act. The scientific basis is the CDC blood lead reference value of 3.5 µg/dL translated through FDA's 2022-updated Interim Reference Levels of 2.2 µg/day for children and 8.8 µg/day for women of childbearing age, with each action level chosen to place industry achievability in the 90th to 95th percentile range of occurrence data collected from 2009 through 2024.

## Ingest decision

Two local PDFs were reviewed for this ingest. They are not treated as two independent evidence sources because they represent the same FDA January 2025 guidance record:

| Local artifact | Role in index | Pages | SHA-256 |
| --- | --- | ---: | --- |
| `raw/reports/FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf` | Copy of record: full final guidance document used for action levels, tables, definitions, and legal status | 19 | `8d52935f682a50daf68f6fb7f051c8ddec2cb7b22093ab910fcf1b5f8a32b110` |
| `raw/reports/FDA_CloserToZero_Lead_ActionLevels_2025.pdf` | FDA guidance webpage snapshot/landing-page artifact used to verify docket, final status, download relationship, and related links | 3 | `d349ed5cc116261df02ba4c0b6f90e77cb6b9a5ac83aec71120234c588ebd40c` |

The canonical public link is the FDA guidance page in `access_url`; the full document download is preserved in `download_url`. The source page therefore remains one citable source node, avoiding duplicate citation weight while preserving both local provenance artifacts.

## Key numbers

Action levels set by the guidance:

| Matrix | Action level (ppb) |
| --- | --- |
| Fruits, vegetables excluding single-ingredient root vegetables, mixtures, yogurts, custards, puddings, single-ingredient meats | 10 |
| Single-ingredient root vegetables | 20 |
| Dry infant cereals | 20 |

Achievability rates at the action levels, calculated as the percentage of samples at or below the level in the combined Toxic Elements Program and FDA survey dataset (p. 10, Table 4):

| Matrix | Achievability (%) |
| --- | --- |
| Fruits, non-root vegetables, mixtures, yogurts, custards, meats (10 ppb) | 97 |
| Single-ingredient root vegetables (20 ppb) | 88 |
| Dry infant cereals (20 ppb) | 91 |

Exposure reduction estimates at the 90th percentile consumption level for babies and young children 0-23 months (p. 10, Table 4):

| Matrix | Mean Pb pre (ppb) | Mean Pb post (ppb) | Exposure pre (µg/day) | Exposure post (µg/day) | Reduction (%) |
| --- | --- | --- | --- | --- | --- |
| Combined fruits, non-root veg, mixtures, yogurts, meats | 2.2 | 1.7 | 0.78 | 0.61 | 19 |
| Single-ingredient root vegetables | 8.2 | 5.8 | 0.87 | 0.62 | 29 |
| Dry infant cereals | 7.8 | 6.0 | 0.30 | 0.23 | 24 |

90th percentile 2-day average intake, eaters only, 0-23 months (p. 19, Table 4 footnote 20): 354 g/day for the combined category, 106 g/day for single-ingredient root vegetables, 39 g/day for dry infant cereals. Intake derives from What We Eat in America (WWEIA) / NHANES 2003-2018.

Interim Reference Levels for dietary lead (p. 5), updated 2022 from earlier 2018 values:

| Population | IRL (µg/day) |
| --- | --- |
| Children | 2.2 |
| Women of childbearing age | 8.8 |

The IRL is derived from CDC's blood lead reference value of 3.5 µg/dL (a population-based screening threshold representing the 97.5th percentile of blood lead in US children ages 1 to 5) and FDA dietary conversion factors, with an additional 10x safety factor to account for variability in dietary-lead-to-blood-lead conversion.

Sample counts underlying the analysis (p. 7, Table 1):

| Data source | Fiscal years | Samples |
| --- | --- | --- |
| Toxic Elements Program (TEP) | 2009–2024 | 505 |
| FDA Survey 1 | 2013–14 | 147 |
| FDA Survey 2 | 2021 | 414 |
| FDA Survey 3 | 2023 | 386 |
| Total Diet Study (complementary, not used for achievability) | 2014–2020 | 689 |

Matrix-level occurrence statistics from the combined TEP and FDA survey data used for the achievability analysis (p. 17, Table 2):

| Matrix | n | Mean ± SD (ppb) | 90th percentile (ppb) | 95th percentile (ppb) |
| --- | --- | --- | --- | --- |
| Fruits | 215 | 1.2 ± 1.4 | 2.4 | 4.1 |
| Mixtures | 551 | 2.7 ± 4.0 | 6.0 | 9.1 |
| Yogurts, custards, puddings, single-ingredient meats | 55 | 1.1 ± 1.0 | 2.6 | 2.9 |
| Vegetables (all) | 220 | 4.5 ± 6.1 | 11.4 | 18.6 |
| Vegetables excluding single-ingredient root vegetables | 130 | 2.1 ± 2.6 | 4.2 | 7.0 |
| Single-ingredient root vegetables | 90 | 8.2 ± 7.8 | 20.9 | 23.9 |
| Dry infant cereals | 411 | 7.8 ± 8.4 | 20.0 | 23.0 |

## Methods (brief)

Analytical method: inductively coupled plasma mass spectrometry (ICP-MS) following FDA's validated procedure for lead in food (https://www.fda.gov/media/87509/download). Samples are analyzed as sold. The Toxic Elements Program protocol specifies that each sample consist of twelve randomly selected subsamples from a single lot. Total Diet Study samples are composites of three retail samples of the same product from different cities, which is why TDS data were used only in the complementary analysis and not in the achievability calculation (the compositing averages across retail samples, whereas the achievability assessment requires individual-sample percentiles).

Scope limitations the guidance itself acknowledges: the action levels do not apply to raw agricultural commodities, homemade foods, snack foods for this age group (including arrowroot cookies, puffs, rusks, teething biscuits, and grain-based or freeze-dried snacks), infant formula, any beverages including toddler drinks, or juices (addressed in a separate draft guidance). Grain-based snacks are acknowledged as an area where FDA is still collecting data to determine whether a future action level is appropriate.

Enforcement framing the guidance states explicitly: the action levels are not legally enforceable responsibilities; they describe FDA's current thinking and serve as a factor the agency considers, alongside analytical confidence in a measured value, when deciding whether to bring an enforcement action in a particular case. USDA FSIS was consulted on the inclusion of single-ingredient meats and meat-containing mixtures and supports the levels.

## Implications

- Certification: the action levels define US federal enforcement-relevant context for lead in processed baby food, not HMTc standards and not legally enforceable maximum levels. Any HMTc limit tighter than 10 ppb for the combined category, 20 ppb for root vegetables, or 20 ppb for dry infant cereal is a standards-development choice; the rationale (precautionary, market-ratcheting, feasibility-driven, or regulatory-alignment) should be named per the wiki-to-HMTc firewall rule.
- Courses: the IRL derivation from CDC's BLRV plus a 10x safety factor, and the achievability framing at the 90th to 95th percentile of occurrence data, are both teachable patterns that recur across FDA Closer to Zero guidances. The distinction between a non-binding action level under 21 CFR 109.6(d) and an enforceable maximum level under other authorities is also a teachable concept.
- App: the action levels themselves are metadata for the products covered, not per-ingredient contamination values. The 90th percentile consumption data (354 g/day combined, 106 g/day root vegetables, 39 g/day dry cereal for children 0 to 23 months) does inform recipe-inference and per-serving exposure estimates in the app layer. Mean occurrence values (2.2, 8.2, and 7.8 ppb respectively) and their post-action-level equivalents (1.7, 5.8, 6.0 ppb) can seed contamination profiles for the product categories with `confidence: high` given the 1,452-sample basis, once the ingredient-to-product mapping is established.
- Microbiome: not applicable. This document does not address microbiome effects of lead exposure.

## Provenance notes

Document classified `us-government-work` under 17 U.S.C. § 105 and freely redistributable. The `access_url` field points to the FDA guidance landing page, and `download_url` points to the 19-page full guidance PDF. Docket FDA-2022-D-0278 is the canonical docket identifier, searchable at regulations.gov. SHA-256 verification should reproduce `8d52935f682a50daf68f6fb7f051c8ddec2cb7b22093ab910fcf1b5f8a32b110` on the full copy of record and `d349ed5cc116261df02ba4c0b6f90e77cb6b9a5ac83aec71120234c588ebd40c` on the FDA webpage snapshot artifact. This final guidance supersedes an earlier draft issued under the same docket; if a future revision is issued, this source page will be retained and `superseded_by` will point to the new cite key.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[regulations/fda-closer-to-zero]]
- [[regulations/fda2025-lead-processed-baby-foods]]
- [[regulations/fda-ctz-Pb-babyfood-10ppb]]
- [[regulations/fda-ctz-Pb-rootveg-20ppb]]
- [[regulations/fda-ctz-Pb-cereal-20ppb]]
