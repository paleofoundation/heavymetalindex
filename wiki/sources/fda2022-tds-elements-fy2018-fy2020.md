---
type: source
cite_key: fda2022-tds-elements-fy2018-fy2020
title: "FY2018-FY2020 TDS Elements Analytical Results"
authors: [U.S. Food and Drug Administration]
year: 2022
publication: "FDA Total Diet Study"
source_type: gov-data
no_doi_assigned: true
evidence_tier: A
license: us-government-work
raw_handle: KADC_07-fda-tds-fy2018-2020-elements
raw_path: raw/reports/fda-tds-elements-fy2018-fy2020-results.csv
pdf_path: raw/reports/fda-tds-elements-analytical-results-key-fy2018-fy2020.pdf
supplement_pdf_path: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/07_FDA_TDS_FY2018-2020_elements.pdf"
supplement_pdf_sha256: f4c28e22c3bbeb083b9be60303b6ee20d141f29d9cd2c6d9b7630c0df8fa11a3
supplement_pdf_duplicate_copies:
  - path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/07_FDA_TDS_FY2018-2020_elements.pdf"
    sha256: "f4c28e22c3bbeb083b9be60303b6ee20d141f29d9cd2c6d9b7630c0df8fa11a3"
    note: "Byte-identical re-extraction of the canonical supplement PDF under the June 8 _extracted_condiments2_03_Condiments subtree of the Kimi corruption-issue folder. Recorded 2026-06-09 so the manual-fetch loop recognizes this Kimi-folder location as already-ingested."
access_url: https://www.fda.gov/food/total-diet-study/total-diet-study-results
data_path: data/evidence/fda_tds_fy2018_2020_element_results_samples.csv
summary_path: data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv
metals: [Pb, Cd, tAs, iAs, tHg, Ni, Cr, U]
other_elements_in_file: [Calcium, Copper, Iodine, Iron, Magnesium, Manganese, Molybdenum, Phosphorus, Potassium, Selenium, Sodium, Strontium, Vanadium, Zinc]
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
product_metal_scope:
  fruit-juice-not-canned: [Pb, Cd, tAs, Ni]
  fruit-juices-apple-containing: [Pb, tAs]
  fruit-juices-non-apple: [Pb, tAs]
matrices: [total-diet-study-prepared-food]
jurisdictions: [US-FDA]
wiki_doi: null
sampling_locations: [US-Regional-3-cities-per-region, US-National-KCL]
sampling_year_range: 2017-2020
updated: 2026-06-09
---

# FDA 2022 - TDS Elements Analytical Results FY2018-FY2020


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

The dataset is routed primarily to [[ingredients/index]] because the TDS foods are prepared foods and composites rather than HMTc product rows. Apple juice and grapefruit juice also update the Category 5 and Category 1 juice routing surfaces because those rows already distinguish apple-containing and non-apple juice. Reviewed juice route rows are tracked in `data/evidence/category5_tds_finished_food_occurrence_summary.csv`; they remain small-N single-food occurrence context, not HMTc aggregate threshold values. The source should not be used for brand rankings, current brand claims, or HMTc thresholds.

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

## Verification notes

2026-06-02 (manual-fetch v2 ingest, KADC handle `KADC_07-fda-tds-fy2018-2020-elements`): merge-enhance pass against the official FDA "Total Diet Study (TDS) FY2018-FY2020 Report Supplement: Summary of Analytical Results" PDF (July 2022, 83 pages, 2.8 MB) fetched into `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/07_FDA_TDS_FY2018-2020_elements.pdf`. The PDF is FDA's printed summary-statistics supplement (N of detects/non-detects, mean, std. dev., min/max, reporting limit per TDS-food × analyte cell) — the same statistical view that this page's `summary_path` already exposes from the underlying analytical-results CSV. No new structured data layer is added; the supplement PDF is recorded as a corroborating artifact via `supplement_pdf_path`. Frontmatter modernization in this pass: added `raw_handle`, `license: us-government-work` (matching the sibling key page), `access_url` to the FDA TDS results landing page, `matrices: [total-diet-study-prepared-food]` (matching the sibling key page convention), and U to the `metals:` list (uranium is in the body's per-metal highlights table and in the "9,714 HMI-relevant rows" count but had been omitted from frontmatter). Uranium removed from `other_elements_in_file` since it now belongs in `metals`. `sampling_year_range: 2017-2020` and regional/national `sampling_locations` populated per the analytical-key methodology. No changes to ingredient/product routing, narrative body, key numbers, or structured-data references.

2026-06-09 (manual-fetch v2 sweep, suggested handle `MFK_07-fda-tds-fy2018-2020-elements`): the Kimi June 8 corruption-issue re-extraction surfaced a byte-identical copy of the canonical supplement PDF at `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/07_FDA_TDS_FY2018-2020_elements.pdf` (sha256 `f4c28e22c3bbeb083b9be60303b6ee20d141f29d9cd2c6d9b7630c0df8fa11a3`, identical to the existing supplement_pdf_path). Recorded under new `supplement_pdf_duplicate_copies` frontmatter list and pinned the canonical supplement sha256 via `supplement_pdf_sha256` so future manual-fetch identity-check cycles recognize the Kimi-folder duplicate as already-ingested. No body/narrative/Key-numbers/routing/structured-data changes; pure provenance audit-trail update.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [a6ae025b0](https://github.com/paleofoundation/heavymetalindex/commit/a6ae025b0) | 2026-06-09 | minor | Narrative text revised |
| [aea8a1e1b](https://github.com/paleofoundation/heavymetalindex/commit/aea8a1e1b) | 2026-06-02 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [20add894b](https://github.com/paleofoundation/heavymetalindex/commit/20add894b) | 2026-05-08 | major | 1 section removed |
<!-- END: hmi-page-history -->
