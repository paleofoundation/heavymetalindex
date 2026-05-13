# Session prompt: recover real DOIs for source pages

90 source pages are currently marked `no_doi_assigned: true` with a Google Scholar search URL as their `access_url`. This fingerprint was applied by the 2026-05-13 morning publish run to unblock the DOI audit; the lint file at `wiki/lint/2026-05-13-doi-fallback-followup.md` documents the debt.

Most of these pages likely have real DOIs that Crossref title-matching missed (titles paraphrased, recent papers not indexed, or punctuation/casing differences). The remediation is straightforward but tedious; you have full authority to act without asking.

## Per-page workflow

For each page in scope:

1. Read the source page's `raw_path` (the Marker-converted markdown of the original paper).
2. Search the first 200 lines of that markdown for a DOI (case-insensitive `10\.\d{4,9}/[^\s"<>]+`).
3. If found:
   - Replace `doi: null` with `doi: <recovered>`.
   - Remove the `no_doi_assigned: true` line.
   - Replace the Scholar fallback `access_url` with `access_url: https://doi.org/<recovered>`.
4. If not found in the raw markdown:
   - Query Crossref by title+author+year (use api.crossref.org).
   - Fall back to OpenAlex (api.openalex.org) if Crossref returns no high-confidence match.
   - Fall back to Semantic Scholar (api.semanticscholar.org).
   - Apply any high-confidence match (>= 0.7 title similarity) using the same patch shape as step 3.
5. If exhausted with no DOI:
   - Keep `no_doi_assigned: true` but replace the Scholar URL with the actual publisher/venue URL (PubMed, the journal's article page, the publisher's catalog page).
   - This is a real "no DOI assigned" claim, not a fallback — verify by reading the venue's own pages that they do not register DOIs.

## What NOT to do

- Do not add the publication/journal name to a page if it was missing — that requires a separate fact-check pass and is not the job here.
- Do not invent DOIs. If you can't find one with high confidence, leave `no_doi_assigned: true` and improve the access_url.
- Do not edit pages outside the scope of this batch.

## At the end

Append a single line to `wiki/log.md` summarizing: how many pages got real DOIs recovered, how many got an improved venue URL, how many stayed unchanged because no DOI exists, and how many failed.

## Files in scope (90)

  - adelusi2024-dairy-feed-south-africa.md: Heavy Metal Contamination of Dairy Cattle Feed in the Free State and Limpopo Provinces of South Africa
  - ali2025-carbon-dots-aluminum-cobalt-canned-food.md: Carbon Dots Fluorometric Sensor for Simultaneous Detection of Aluminum and Cobalt in Canned Foods
  - atsdr-aluminum-toxprofile-2008.md: Toxicological Profile for Aluminum
  - atsdr-cadmium-toxprofile-2012.md: Toxicological Profile for Cadmium
  - atsdr-mercury-toxprofile-2024.md: Toxicological Profile for Mercury
... and 85 more (see data/evidence/build-action-prompts/FIX-MISSING-DOIS.md tail for full list)


## Full list

1. `adelusi2024-dairy-feed-south-africa.md` (raw: raw/markdown/FM_11167146/FM_11167146.md)
2. `ali2025-carbon-dots-aluminum-cobalt-canned-food.md` (raw: raw/markdown/FM_11877424/FM_11877424.md)
3. `atsdr-aluminum-toxprofile-2008.md` (raw: null)
4. `atsdr-cadmium-toxprofile-2012.md` (raw: raw/reports/ATSDR_Cadmium_ToxProfile.pdf)
5. `atsdr-mercury-toxprofile-2024.md` (raw: raw/reports/ATSDR_Mercury_ToxProfile.pdf)
6. `atsdr-nickel-toxprofile-2024.md` (raw: raw/reports/Bookshelf_NBK610351.pdf)
7. `balzani2026-fish-metals-dalyan-lake.md` (raw: raw/markdown/FM_12904875/FM_12904875.md)
8. `bao2024-sp-icp-ms-nps-mussels.md` (raw: raw/markdown/FM_11223760/FM_11223760.md)
9. `belgian-lead-factsheet-2024.md` (raw: raw/reports/Factsheet_lood_2024FINAL.pdf)
10. `bozkurt2025-portable-voltammetric-lead-drinking-water.md` (raw: raw/markdown/FM_12079195/FM_12079195.md)
11. `canada-t4-93-fertilizer-heavy-metal-standards.md` (raw: raw/reports/canada-t4-93-fertilizer-heavy-metal-standards.pdf)
12. `carter2025-tda-aas-methylmercury-finfish-fda-method.md` (raw: raw/markdown/FM_12325422/FM_12325422.md)
13. `cdc-blood-lead-reference-value.md` (raw: raw/reports/CDC_BloodLeadReferenceValue.pdf)
14. `cfia2025-toxic-metals-selected-foods-2022-23.md` (raw: raw/reports/cfia2025-toxic-metals-selected-foods-2022-23.pdf)
15. `chen2024-bodipy-hg-water-sensor.md` (raw: raw/markdown/FM_11472347/FM_11472347.md)
16. `chen2024-hg-gtriplex-biosensor-milk.md` (raw: raw/markdown/FM_11311761/FM_11311761.md)
17. `chronchol2026-dairy-free-infant-porridges-poland.md` (raw: raw/markdown/FM_12845264/FM_12845264.md)
18. `codex-cccf17-2024.md` (raw: raw/reports/Codex_CCCF17_SessionReport_REP24_CF17.pdf)
19. `codex-cxs-193-1995.md` (raw: null)
20. `dhawale2025-benzidine-chemosensor-mercury-vegetable-juice.md` (raw: raw/markdown/FM_11904692/FM_11904692.md)
21. `doan2025-mof-rgo-electrochemical-lead-sensor.md` (raw: raw/markdown/FM_11833290/FM_11833290.md)
22. `ecfr-21cfr10112-serving-sizes.md` (raw: null)
23. `epa-arsenic-drinking-water-mcl.md` (raw: raw/reports/EPA_Arsenic_DrinkingWater_MCL.pdf)
24. `epa-eco-ssl-nickel-2007.md` (raw: raw/reports/eco-ssl_nickel.pdf)
25. `epa-iris-cadmium-1989.md` (raw: null)
26. `epa-iris-inorganic-arsenic-2025.md` (raw: raw/reports/EPA_IRIS_InorganicArsenic_ToxicologicalReview.pdf)
27. `epa-iris-lead-2004.md` (raw: raw/reports/EPA_IRIS_Lead_ToxicologicalReview.pdf)
28. `epa-iris-mercuric-chloride.md` (raw: raw/reports/EPA_IRIS_ElementalMercury_ToxReview.pdf)
29. `epa-iris-methylmercury.md` (raw: raw/reports/EPA_IRIS_Methylmercury_ToxReview.pdf)
30. `eu2023-915-lead-infant-young-child-foods.md` (raw: null)
31. `fda-ctz-Pb-babyfood-2025.md` (raw: raw/reports/FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf)
32. `fda-epa-fish-consumption-advice.md` (raw: raw/reports/FDA_EPA_FishConsumption_Advice.pdf)
33. `fda-iAs-rice-cereal-2020.md` (raw: raw/reports/FDA_InorganicArsenic_RiceCereal_ActionLevel_2020.pdf)
34. `fda-tds-elements-2018-2020.md` (raw: raw/reports/2022_07_14_TDSElementsReport_1436.pdf)
35. `fda2004-juice-haccp-lead.md` (raw: null)
36. `fda2011-arsenic-apple-juice-2005-2011.md` (raw: raw/reports/fda2011-arsenic-apple-juice-2005-2011.pdf)
37. `fda2013-ias-rice-products-sampling.md` (raw: raw/reports/fda2013-ias-rice-products-sampling.pdf)
38. `fda2016-arsenic-rice-cereal-analytic-results.md` (raw: raw/reports/fda2016-arsenic-rice-cereal-analytic-results.pdf)
39. `fda2016-arsenic-rice-risk-assessment.md` (raw: raw/reports/fda2016-arsenic-rice-risk-assessment.pdf)
40. `fda2018-iAs-infant-rice-cereals-fy2018.md` (raw: raw/reports/fda2018-iAs-infant-rice-cereals-fy2018.pdf)
41. `fda2022-draft-lead-juice.md` (raw: null)
42. `fda2023-ias-apple-juice-guidance.md` (raw: raw/reports/fda2023-ias-apple-juice-guidance.pdf)
43. `fda2025-cp7304-019-toxic-elements-food-foodware.md` (raw: raw/reports/fda2025-cp7304-019-toxic-elements-food-foodware.pdf)
44. `fei2024-cd-off-on-fluorescence-milk.md` (raw: raw/markdown/FM_10920365/FM_10920365.md)
45. `fsanz2019-25th-australian-total-diet-study.md` (raw: raw/reports/fsanz2019-25th-australian-total-diet-study.pdf)
46. `godja2025-gold-electrode-nickel-electrochemical-sensor.md` (raw: raw/markdown/FM_12251704/FM_12251704.md)
47. `hu2025-bacillus-cmos-arsenic-biosensor-soil-food.md` (raw: raw/markdown/FM_12090344/FM_12090344.md)
48. `islam2025-silver-nanoparticle-mercury-colorimetric-water.md` (raw: raw/markdown/FM_11962719/FM_11962719.md)
49. `jecfa-72nd-lead-2010.md` (raw: raw/reports/JECFA_Lead_Monograph.pdf)
50. `jecfa-73rd-cadmium-2010.md` (raw: raw/reports/9789241660648_eng.pdf)
51. `jecfa-82nd-arsenic.md` (raw: raw/reports/JECFA_Arsenic_Monograph.pdf)
52. `jecfa-91st-cadmium-2022.md` (raw: raw/reports/JECFA_Cadmium_Monograph.pdf)
53. `jecfa-food-additive-specs-compendium.md` (raw: raw/reports/a0691e.pdf)
54. `kanazawa2024-hg-speciation-asgm-kenya.md` (raw: raw/markdown/FM_11519088/FM_11519088.md)
55. `kim2024-food-container-metal-migration-korea.md` (raw: raw/markdown/FM_10887885/FM_10887885.md)
56. `kundu2026-gold-nanoparticle-arsenic-colorimetric-groundwater.md` (raw: raw/markdown/FM_12914506/FM_12914506.md)
57. `lea2018-dinp-endocrine-disruption.md` (raw: raw/markdown/FM_11910676/FM_11910676.md)
58. `li2024-as-colorimetric-water-sensor.md` (raw: raw/markdown/FM_11256036/FM_11256036.md)
59. `liu2024-crnanohorn-crvi-water-sensor.md` (raw: raw/markdown/FM_11396986/FM_11396986.md)
60. `luo2024-cd-ada-vbb-food-sensor.md` (raw: raw/markdown/FM_11394572/FM_11394572.md)
61. `meter2019-cadmium-cacao-lac-review.md` (raw: raw/reports/meter2019-cadmium-cacao-lac-review.pdf)
62. `minamata-convention-2013.md` (raw: raw/reports/MinamataConvention_Text.pdf)
63. `nassar2025-spectrophotometric-cadmium-method.md` (raw: raw/markdown/FM_12069838/FM_12069838.md)
64. `nguyen2026-carbon-quantum-dots-mercury-fluorescence-rice-straw.md` (raw: raw/markdown/FM_12927710/FM_12927710.md)
65. `ntp-15th-roc-nickel-2021.md` (raw: "raw/reports/Nickel Compounds and Metallic Nickel - 15th Report on Carcinogens - NCBI Bookshelf.pdf")
66. `oehha-arsenic-prop65-listing.md` (raw: raw/reports/OEHHA_Arsenic_Prop65_Listing.pdf)
67. `oehha-cadmium-prop65-madl-2001.md` (raw: raw/reports/OEHHA_Cadmium_Prop65_MADL.pdf)
68. `oehha-lead-prop65-listing.md` (raw: raw/reports/OEHHA_Lead_Prop65_Listing.pdf)
69. `qin2025-mercury-soil-method-comparison-afs-caas.md` (raw: raw/markdown/FM_11813565/FM_11813565.md)
70. `ralston2014-selenium-hbv-methylmercury-seafood.md` (raw: raw/markdown/FM_4856720/FM_4856720.md)
71. `schmidt2015-arsenic-infancy-commentary.md` (raw: raw/markdown/FM_5322685/FM_5322685.md)
72. `seesuan2025-des-edta-chromium-vi-colorimetric-sensor.md` (raw: raw/markdown/FM_12216355/FM_12216355.md)
73. `sun2022-china-cadmium-ptmi-rice.md` (raw: raw/markdown/FM_10318555/FM_10318555.md)
74. `sun2024-libs-pb-soil.md` (raw: raw/markdown/FM_11314256/FM_11314256.md)
75. `tian2021-magnetic-purification-cadmium-lead-grain.md` (raw: raw/markdown/FM_10053391/FM_10053391.md)
76. `ufelle2021-metals-chapter.md` (raw: raw/textbooks/Casarett & Doull's Essentials of Toxicology.pdf)
77. `valizadeh2023-canned-beans-iran-health-risk.md` (raw: raw/markdown/FM_12858930/FM_12858930.md)
78. `ventura2025-portuguese-total-diet-study-trace-elements.md` (raw: raw/markdown/FM_12984638/FM_12984638.md)
79. `wang2024-as-cemetery-soil-remediation.md` (raw: raw/markdown/FM_10970330/FM_10970330.md)
80. `wang2024-ngqd-crhex-fluorescence.md` (raw: raw/markdown/FM_11340008/FM_11340008.md)
81. `wang2025-mfc-chromium-vi-wastewater-sensor.md` (raw: raw/markdown/FM_11940674/FM_11940674.md)
82. `wu2024-cd-silica-sol-water-sensor.md` (raw: raw/markdown/FM_11466134/FM_11466134.md)
83. `wu2026-methylmercury-whole-cell-biosensor.md` (raw: raw/markdown/FM_12777952/FM_12777952.md)
84. `yamashita2024-laep-oes-hg-tuna-japan.md` (raw: raw/markdown/FM_11532634/FM_11532634.md)
85. `yang2024-libs-cd-panax-notoginseng.md` (raw: raw/markdown/FM_11011736/FM_11011736.md)
86. `zandi2025-carbon-quantum-dot-chromium-vi-fluorescence-coffee.md` (raw: raw/markdown/FM_12288812/FM_12288812.md)
87. `zhang2017-red-raspberry-nutrient-profile.md` (raw: raw/markdown/FM_6974958/FM_6974958.md)
88. `zhang2024-aunp-as-rice-water-sensor.md` (raw: raw/markdown/FM_11340407/FM_11340407.md)
89. `zhang2024-mip-pb-honey-cyprus.md` (raw: raw/markdown/FM_11244471/FM_11244471.md)
90. `zhao2024-znosi-cd-fluorescence-sensor.md` (raw: raw/markdown/FM_11244355/FM_11244355.md)

## Reference

- CLAUDE.md Part 6 (frontmatter requirements), Part 13 (evidence tiers)
- tools/audit-source-dois.mjs (the audit that's gating the build)
- wiki/lint/2026-05-13-doi-fallback-followup.md (the lint that surfaced this)
- OPERATING.md Part 3 (act without asking on routine schema/provenance fixes)
