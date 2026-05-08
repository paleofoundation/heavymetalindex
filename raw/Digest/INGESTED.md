# Digest Ingest Log

Updated: 2026-05-08

This folder records the Digest PDF batch supplied locally at `/Users/karenpendergrass/Desktop/heavy-metal-index/raw/Digest`. The PDFs themselves remain local raw evidence and are not committed because `raw/` is intentionally gitignored. Source pages in `wiki/sources/` point back to the expected raw paths.

## Source Pages Created

- `1-s2.0-S0889157518301868-am.pdf` -> [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]
- `1471-2431-10-63.pdf` -> [[sources/burrell2010-aluminium-in-infant-formulas]]
- `1471-2431-13-162.pdf` -> [[sources/chuchu2013-aluminium-in-infant-formulas]]
- `Lead  cadmium and aluminum in Canadian infant formulae  oral electrolytes and glucose solutions.pdf` -> [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
- `TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf` -> [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
- `ijerph-18-05073.pdf` -> [[sources/astolfi2021-italy-powdered-infant-formula-elements]]
- `kazi2009.pdf` -> [[sources/kazi2009-toxic-elements-in-infant-formulae]]
- `nuaf138.pdf` -> [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- `nickel_en.pdf` -> [[sources/lgc2003-nickel-piercing-post-assemblies]]
- `toxic_element_infant_formula_prepared_for_posting_20260324.pdf` -> [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- `Bookshelf_NBK599935.pdf` -> [[sources/atsdr2005-tin-toxicological-profile]]
- `benoy1971.pdf` -> [[sources/benoy1971-tin-toxicity-canned-fruit-juices]]
- `(330-333)V9N5PT.pdf` -> [[sources/tarigan2016-factors-tin-released-canned-beverages]]
- `10.1016@0273-23008490006-0.pdf` -> [[sources/schafer1984-tin-toxic-heavy-metal-review]]
- `Analytical Results for Lead in Juice-Toxic Elements Food and Foodware Program (FY2005-FY2018).pdf` -> [[sources/fda2018-lead-in-juice-fy2005-fy2018]]
- `Analytical-Results-for-Lead-in-Food-Intended-for-Babies-Young-Children-FY2020-FY2021.pdf` -> [[sources/fda2021-lead-baby-food-fy2020-fy2021]]
- `leadinfood-babiesyoungchildren-fy2023-12302024.pdf` -> [[sources/fda2024-lead-baby-food-fy2023-guidance-basis]]
- `TDS-ElementsAnalyticalResultsKey-TDS-Report-FY2018toFY2020-07082022_0.pdf` -> [[sources/fda2022-tds-elements-analytical-key]]
- `abt2018.pdf` -> [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market]]
- `abt2020.pdf` -> [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate]]
- `Nickel exposure induces gut microbiome disorder and serum uric acid elevation - ScienceDirect.pdf` -> [[sources/yang2023-nickel-gut-microbiome-uric-acid]]
- `Role of Nickel in Microbial Pathogenesis.pdf` -> [[sources/maier-benoit-2019-nickel-microbial-pathogenesis]]
- `chandrangsu2017.pdf` -> [[sources/chandrangsu2017-metal-homeostasis-resistance-bacteria]]
- `fnut-09-919913.pdf` -> [[sources/bair2022-toxic-heavy-metals-infant-toddler-foods]]
- `fnmol-14-695873.pdf` -> [[sources/stanton2021-metallome-autism-spectrum-disorders]]
- `soto-ocaña-et-al-2024-metal-availability-shapes-early-life-microbial-ecology-and-community-succession.pdf` -> [[sources/soto-ocana2024-metal-availability-early-life-microbiome]]
- `price-skaar-2025-forging-biofilms-metal-induced-microbial-responses-in-biofilm-formation.pdf` -> [[sources/price-skaar-2025-biofilms-metal-induced-microbial-responses]]
- `fmicb-16-1669475.pdf` -> [[sources/yan2025-infant-serum-26-metals-gut-microbiota-china]]
- `fnut-11-1448388.pdf` -> [[sources/zhu2024-toxic-essential-metals-gut-microbiota-review]]
- `mah-MAH-23-0015.pdf` -> [[sources/ghosh2024-heavy-metals-gut-barrier-integrity-microbiota]]

## Structured Extraction Completed

- `TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf` -> `data/evidence/category1_fda_baby_food_compliance_samples.csv`, `data/evidence/category1_fda_baby_food_compliance_summary.csv`, and value records with prefix `category1-fda-baby-food-compliance-`.
- `nickel_en.pdf` -> source metadata in `data/evidence/sources.jsonl` and dermal/contact-material context values in `data/evidence/values.jsonl`. Category 1 food-product nickel occurrence cells remain data gaps because this source measures skin-contact article release, not food concentrations.
- `toxic_element_infant_formula_prepared_for_posting_20260324.pdf` -> `data/evidence/category1_formula_special_survey_samples.csv`, `data/evidence/category1_formula_concentration_summary.csv`, source metadata in `data/evidence/sources.jsonl`, and value records with prefix `category1-formula-digest-`.

## Duplicate Raw Files

The following two Digest PDFs are byte-identical and have one canonical source page, [[sources/fsa2016-infant-food-formula-metals-survey]]:

- `Multi-element Infant foods_FS102048 final report.pdf`
- `Multi-element Infant foods_FS102048 final report (1).pdf`

The following two PDFs are content duplicates of the Yang et al. 2023 nickel-microbiome paper (one ScienceDirect download, one a Research Feeds snippet of the same paper). Canonical source page: [[sources/yang2023-nickel-gut-microbiome-uric-acid]]:

- `Nickel exposure induces gut microbiome disorder and serum uric acid elevation - ScienceDirect.pdf`
- `Ni exposure induces gut microbiome disorder & ↑ serum uric acid.pdf` (snippet)

The following two PDFs are byte-near-identical copies of Zhu et al. 2024:

- `fnut-11-1448388.pdf`
- `fnut-11-1448388 (1).pdf`

## Out-of-Scope

The following Digest PDF is out of HMI scope (infant microbiome immunology without a primary metals-exposure link, per CLAUDE.md Part 22) and was reviewed but not ingested as an HMI source page:

- `fcimb-12-924119.pdf` — Zhang et al. 2022, "The Complex Link and Disease Between the Gut Microbiome and the Immune System in Infants" (Frontiers in Cellular and Infection Microbiology). General microbiome-immune review without a metals angle; belongs on WikiBiome rather than HMI.
