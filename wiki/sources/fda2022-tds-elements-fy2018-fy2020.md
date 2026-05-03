---
type: source
cite_key: fda2022-tds-elements-fy2018-fy2020
title: "FY2018-FY2020 TDS Elements Analytical Results"
authors: [U.S. Food and Drug Administration]
year: 2022
publication: "FDA Total Diet Study"
source_type: gov-data
evidence_tier: A
raw_path: raw/reports/fda-tds-elements-fy2018-fy2020-results.csv
pdf_path: raw/reports/fda-tds-elements-analytical-results-key-fy2018-fy2020.pdf
data_path: data/evidence/fda_tds_fy2018_2020_element_results_samples.csv
summary_path: data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv
metals: [Pb, Cd, tAs, iAs, tHg, Ni, Cr]
other_elements_in_file: [Calcium, Copper, Iodine, Iron, Magnesium, Manganese, Molybdenum, Phosphorus, Potassium, Selenium, Sodium, Strontium, Uranium, Vanadium, Zinc]
ingredients:
  - apple
  - apple-juice
  - applesauce
  - asparagus
  - avocado
  - baked-potato-with-peel
  - banana
  - blueberry-muffin
  - bologna-luncheon-meat
  - bran-cereal-with-raisins
  - broccoli
  - butter
  - canned-corn
  - canned-fruit-cocktail
  - canned-green-beans
  - canned-mushrooms
  - cantaloupe
  - cauliflower
  - celery
  - cheddar-cheese
  - chicken-noodle-soup
  - chicken-potpie
  - chili-con-carne-with-beans
  - chocolate-cake
  - chocolate-chip-cookies
  - chocolate-reduced-fat-milk
  - collard-greens
  - corn
  - corn-flakes
  - corn-grits
  - cornbread
  - cream-of-wheat
  - crisped-rice-cereal
  - cucumber
  - dill-pickles
  - egg-noodles
  - eggs
  - fish-fingers
  - flour-tortilla
  - frankfurter
  - frozen-peas
  - grapefruit
  - grapefruit-juice
  - grapes
  - green-beans
  - green-bell-pepper
  - ground-beef
  - half-and-half
  - ham
  - honey
  - iceberg-lettuce
  - ketchup
  - lamb-chop
  - lima-beans
  - macaroni-and-cheese
  - margarine
  - mayonnaise
  - non-dairy-creamer
  - oat-ring-cereal
  - oatmeal
  - onions
  - oranges
  - pancake-syrup
  - peach
  - peanut-butter
  - peanuts
  - pear
  - pork-and-beans-canned
  - pork-bacon
  - pork-chop
  - pork-sausages
  - potato-chips
  - potatoes
  - processed-american-cheese
  - raisins
  - reduced-fat-milk
  - rice
  - saltine-crackers
  - skim-milk
  - strawberries
  - tomato
  - tomato-soup
  - tortilla-chips
  - turkey
  - watermelon
  - white-bread
  - white-sugar
  - whole-milk
  - whole-wheat-bread
  - winter-squash
products: [fruit-juice-not-canned, fruit-juices-apple-containing, fruit-juices-non-apple]
jurisdictions: [US-FDA]
updated: 2026-05-03
---

# FDA 2022 - TDS Elements Analytical Results FY2018-FY2020

## TL;DR

FDA's FY2018-FY2020 Total Diet Study elements dataset reports 29,148 analytical-result rows across 90 prepared TDS foods, 24 analytes, fiscal years 2018-2020, and calendar years 2017-2020. The accompanying FDA key defines the twelve columns in the CSV, including fiscal year, calendar year, collection, TDS food number and description, season, food-list type, region, analyte, units, concentration, and reporting limit. The raw CSV and key PDF are retained as audit artifacts, and the normalized rows are written to `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`.

## Why this is critical

- It is an A-tier U.S. government monitoring dataset with row-level values rather than a narrative summary.
- It supplies ingredient/app-layer occurrence evidence for common prepared foods that were previously represented only by broad stubs or UK/FSA composite rows.
- It includes both regular total-element rows and a small arsenic-speciation subset for white rice and crisped rice cereal; total arsenic is not silently converted into inorganic arsenic.
- It creates stable ingredient destinations for every TDS food so later ingests can enrich the same pages instead of scattering values across loose names.

## Key numbers

- Raw row count: 29,148 CSV rows; normalized row count: 29,148 rows.
- Food coverage: 90 TDS food descriptions routed to 90 ingredient pages.
- Regular analyte panel: 21 analytes; arsenic-speciation rows occur only for white rice and crisped rice cereal.
- HMI-relevant row count: 9,714 rows across Pb, Cd, total arsenic, inorganic arsenic, total mercury, nickel, chromium, and uranium.
- Reported zero handling: reported zeroes are preserved as zero-valued concentration rows and paired with FDA's reporting-limit column; they are not rewritten as `<LOD` in this ingest.

| Metal/species | Highest routed TDS food summaries |
| --- | --- |
| iAs | Crisped rice cereal (N=3, P95=101.7, max=103 ppb-eq); Rice (N=1, P95=41.6, max=41.6 ppb-eq) |
| tAs | Fish sticks or patties (N=3, P95=810, max=810 ppb-eq); Crisped rice cereal (N=3, P95=206, max=210 ppb-eq); Rice (N=27, P95=66.9, max=75 ppb-eq) |
| Pb | White bread (N=27, P95=5.58, max=23 ppb-eq); Flour tortilla (N=27, P95=5, max=17 ppb-eq); Bran cereal with raisins (N=3, P95=14.92, max=16 ppb-eq) |
| Cd | Potato chips (N=3, P95=190, max=200 ppb-eq); Celery (N=27, P95=73.3, max=100 ppb-eq); Broccoli (N=27, P95=37, max=84 ppb-eq) |
| tHg | Fish sticks or patties (N=3, P95=9.42, max=9.8 ppb-eq); Cornbread (N=3, P95=4.07, max=4.2 ppb-eq); Crisped rice cereal (N=3, P95=3.99, max=4.1 ppb-eq) |
| Ni | Oat ring cereal (N=3, P95=3120, max=3200 ppb-eq); Lima beans (N=2, P95=929, max=930 ppb-eq); Peanut butter (N=3, P95=847, max=890 ppb-eq) |
| Cr | Ground beef (N=27, P95=100, max=600 ppb-eq); Cauliflower (N=27, P95=0, max=600 ppb-eq); Processed American cheese (N=3, P95=390, max=400 ppb-eq) |
| U | Processed American cheese (N=3, P95=50.8, max=53 ppb-eq); White bread (N=27, P95=11.7, max=13 ppb-eq); Flour tortilla (N=27, P95=7.99, max=11 ppb-eq) |

## Structured Data Extract

- `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`: normalized row-level extract with source ID, TDS food identifiers, ingredient slug, analyte slug, metal/species where applicable, original units, original concentrations, reporting limits, and ppb-equivalent values.
- `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`: per-food/per-analyte summary statistics using FDA-reported concentrations, including N, reported-zero count, P10/P50/P90/P95, min/max, and reporting-limit range.
- `data/evidence/fda_tds_fy2018_2020_ingredient_routes.csv`: deterministic mapping from TDS food number and description to the ingredient page used by this ingest.

## Row routing

The dataset is routed primarily to [[ingredients/index]] because the TDS foods are prepared foods and composites rather than HMTc product rows. Apple juice and grapefruit juice also update the Category 5 and Category 1 juice routing surfaces because those rows already distinguish apple-containing and non-apple juice. The source should not be used for brand rankings, current brand claims, or HMTc thresholds.

## Methods (brief)

The FDA key identifies each result by fiscal year, calendar year, collection, TDS food number and description, season, food-list type, region, analyte, unit, concentration, and reporting limit. The key states that reporting limits are administrative limits based on LOD and LOQ values across analyses. This ingest keeps the original concentration and reporting-limit fields and adds ppb-equivalent values for cross-analyte screening.

## Limitations

The public CSV does not include brand names, lot identifiers, lab replicate metadata, or a per-row censoring flag beyond the reported concentration and reporting-limit fields. Chromium is total chromium, not chromium VI. Mercury is total mercury, not methylmercury. Total arsenic is not inorganic arsenic, and the inorganic-arsenic rows are limited to four rice/cereal records. The data are useful for ingredient/app-layer occurrence evidence and source prioritization, not for compliance determinations unless a matrix-specific regulatory comparison is separately loaded and audited.

## Implications

- Certification: Strong public occurrence evidence for feasibility review and category prioritization, but not a source of HMTc limits or certified-brand claims.
- Courses: Useful teaching dataset for source keys, reporting limits, analyte-species separation, and the difference between raw row-level monitoring data and synthesized standards.
- App: Provides stable ingredient-page destinations and structured occurrence rows for common prepared foods; app scoring should still wait for reviewed cross-source synthesis before treating profiles as populated.
- Microbiome: No direct microbiome endpoint.

## Wiki pages updated on ingest

- [[ingredients/index]]
- [[products/fruit-juice-not-canned]]
- [[products/fruit-juices-apple-containing]]
- [[products/fruit-juices-non-apple]]
- [[products/regulatory-crosswalk-field-findings]]
- [[lint/2026-05-03-fda-tds-elements-ingest-audit]]
- [[ingredients/apple]]
- [[ingredients/apple-juice]]
- [[ingredients/applesauce]]
- [[ingredients/asparagus]]
- [[ingredients/avocado]]
- [[ingredients/baked-potato-with-peel]]
- [[ingredients/banana]]
- [[ingredients/blueberry-muffin]]
- [[ingredients/bologna-luncheon-meat]]
- [[ingredients/bran-cereal-with-raisins]]
- [[ingredients/broccoli]]
- [[ingredients/butter]]
- [[ingredients/canned-corn]]
- [[ingredients/canned-fruit-cocktail]]
- [[ingredients/canned-green-beans]]
- [[ingredients/canned-mushrooms]]
- [[ingredients/cantaloupe]]
- [[ingredients/cauliflower]]
- [[ingredients/celery]]
- [[ingredients/cheddar-cheese]]
- [[ingredients/chicken-noodle-soup]]
- [[ingredients/chicken-potpie]]
- [[ingredients/chili-con-carne-with-beans]]
- [[ingredients/chocolate-cake]]
- [[ingredients/chocolate-chip-cookies]]
- [[ingredients/chocolate-reduced-fat-milk]]
- [[ingredients/collard-greens]]
- [[ingredients/corn]]
- [[ingredients/corn-flakes]]
- [[ingredients/corn-grits]]
- [[ingredients/cornbread]]
- [[ingredients/cream-of-wheat]]
- [[ingredients/crisped-rice-cereal]]
- [[ingredients/cucumber]]
- [[ingredients/dill-pickles]]
- [[ingredients/egg-noodles]]
- [[ingredients/eggs]]
- [[ingredients/fish-fingers]]
- [[ingredients/flour-tortilla]]
- [[ingredients/frankfurter]]
- [[ingredients/frozen-peas]]
- [[ingredients/grapefruit]]
- [[ingredients/grapefruit-juice]]
- [[ingredients/grapes]]
- [[ingredients/green-beans]]
- [[ingredients/green-bell-pepper]]
- [[ingredients/ground-beef]]
- [[ingredients/half-and-half]]
- [[ingredients/ham]]
- [[ingredients/honey]]
- [[ingredients/iceberg-lettuce]]
- [[ingredients/ketchup]]
- [[ingredients/lamb-chop]]
- [[ingredients/lima-beans]]
- [[ingredients/macaroni-and-cheese]]
- [[ingredients/margarine]]
- [[ingredients/mayonnaise]]
- [[ingredients/non-dairy-creamer]]
- [[ingredients/oat-ring-cereal]]
- [[ingredients/oatmeal]]
- [[ingredients/onions]]
- [[ingredients/oranges]]
- [[ingredients/pancake-syrup]]
- [[ingredients/peach]]
- [[ingredients/peanut-butter]]
- [[ingredients/peanuts]]
- [[ingredients/pear]]
- [[ingredients/pork-and-beans-canned]]
- [[ingredients/pork-bacon]]
- [[ingredients/pork-chop]]
- [[ingredients/pork-sausages]]
- [[ingredients/potato-chips]]
- [[ingredients/potatoes]]
- [[ingredients/processed-american-cheese]]
- [[ingredients/raisins]]
- [[ingredients/reduced-fat-milk]]
- [[ingredients/rice]]
- [[ingredients/saltine-crackers]]
- [[ingredients/skim-milk]]
- [[ingredients/strawberries]]
- [[ingredients/tomato]]
- [[ingredients/tomato-soup]]
- [[ingredients/tortilla-chips]]
- [[ingredients/turkey]]
- [[ingredients/watermelon]]
- [[ingredients/white-bread]]
- [[ingredients/white-sugar]]
- [[ingredients/whole-milk]]
- [[ingredients/whole-wheat-bread]]
- [[ingredients/winter-squash]]
