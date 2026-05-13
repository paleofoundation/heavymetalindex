---
title: Fish
type: ingredient
commodity: fish
aliases: [seafood, finfish, tuna, salmon, swordfish, mackerel, cod, tilapia, trout, sardines, herring, anchovies, fish-oil]
category: aquatic-animal
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [trophic-level, methylmercury-biomagnification, species, harvest-region, fish-age-and-size]
lower_risk_variants: ["[[ingredients/salmon]]", "[[ingredients/sardines]]", "[[ingredients/anchovies]]", "[[ingredients/herring]]", "[[ingredients/tilapia]]", "[[ingredients/trout]]", "[[ingredients/light-canned-tuna]]"]
higher_risk_variants: ["[[ingredients/swordfish]]", "[[ingredients/shark]]", "[[ingredients/king-mackerel]]", "[[ingredients/tilefish]]", "[[ingredients/bigeye-tuna]]", "[[ingredients/marlin]]", "[[ingredients/orange-roughy]]"]
used_in_products: ["[[products/fresh-fish]]", "[[products/frozen-fish]]", "[[products/canned-tuna]]", "[[products/canned-salmon]]", "[[products/canned-sardines]]", "[[products/fish-oil-supplements]]", "[[products/prepared-seafood]]", "[[products/surimi]]", "[[products/fish-sauce]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-26
---

# Fish

_Stub page. Contamination profile populates on dedicated mercury and arsenic ingest waves. Fish is the dominant dietary source of methylmercury exposure for most populations ([[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]])._

## Why this commodity accumulates heavy metals

Fish accumulate methylmercury through aquatic-food-web biomagnification: inorganic mercury in water is methylated by sulfate-reducing bacteria in sediment, taken up by plankton, and biomagnified through each trophic step. Predator species at the top of marine food webs (swordfish, shark, king mackerel, tilefish, bigeye tuna, marlin) carry methylmercury concentrations 1 to 2 orders of magnitude above small-pelagic species (sardines, anchovies, herring) and farmed or short-lived freshwater species (salmon, tilapia, trout). See [[metals/mercury]] for the methylmercury toxicology, the [[sources/jecfa-61st-methylmercury|JECFA 61st]] PTWI of 1.6 µg/kg b.w./week, and the Faroe Islands and Seychelles cohort literature on developmental neurotoxicity (synthesized in [[metals/mercury]]).

Cadmium and lead in fish are commodity-secondary concerns; bivalve molluscs (covered separately at [[ingredients/bivalve-molluscs]]) are the dominant marine-food Cd source ([[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]]).

## Multi-metal coverage and dedicated subpages

Fish-as-a-commodity is broad enough that future ingest waves will likely produce species-specific pages (tuna, salmon, swordfish) rather than a single fish page treating all species uniformly. The current page is a placeholder that satisfies the wikilink graph and orients consumers toward the dominant concern (methylmercury).

Collado-Lopez et al. 2025 reports fish/fish-mix baby foods as a priority review-level group for arsenic and mercury, with median As 0.165 mg/kg and median Hg 0.016 mg/kg among detected items. This signal should guide retrieval of the underlying primary studies before any fish-containing baby-food p90 is calculated. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

## Regulatory limits that apply

- [[regulations/jecfa-methylmercury-ptwi]] — JECFA provisional tolerable weekly intake of 1.6 µg methylmercury/kg b.w./week.
- [[regulations/efsa-methylmercury-twi]] — EFSA tolerable weekly intake of 1.3 µg methylmercury/kg b.w./week.
- [[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]] — FDA/EPA joint advice for women who might become pregnant, women who are pregnant or breastfeeding, and young children.
- [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/eu-2023-915-cadmium]] — EU fish maximum levels are species- and tissue-specific. General muscle meat of fish is 0.30 mg/kg (300 ug/kg) Pb, 0.050 mg/kg (50 ug/kg) Cd, and 0.50 mg/kg (500 ug/kg) Hg; listed lower-mercury fish are 0.30 mg/kg (300 ug/kg) Hg, and listed higher-mercury fish including tuna, shark, swordfish, marlin, halibut, pike, and sturgeon are 1.0 mg/kg (1000 ug/kg) Hg.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/albuquerque2026-fish-toxic-elements-western-para\|Albuquerque et al. 2026]]. *More Danger Than Meets the Eye: Potentially Toxic Element Contamination in Fish from the Western Pará Poses Significant Hazards to Local Communities*, ACS Omega | 2026 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/balzani2026-fish-metals-dalyan-lake\|Balzani et al. 2026]]. *Metals and Metalloids Accumulation and Biomagnification in Three Commercially Important Fishes from a Turkish Brackish Lake*, Environmental Science and Pollution Research | 2026 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/lepak2026-mehg-depuration-fish-consumption\|Lepak et al. 2026]]. *Quantifying Depuration of Methylmercury from Fish Consumption by Travelers*, Environmental Health | 2026 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/auzier-guimaraes2025-mercury-tapajos-fish\|Auzier et al. 2025]]. *Systematic review and spatiotemporal assessment of mercury concentration in fish from the Tapajós River Basin: implications for environmental and human health*, ACS Environmental Au | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/carter2025-tda-aas-methylmercury-finfish-fda-method\|Carter et al. 2025]]. *Thermal Decomposition Amalgamation AAS and SALLE for Methylmercury and Total Mercury in Finfish: FDA Method Validation* | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/jermilova2025-mackenzie-mercury-fish-bayesian\|Jermilova et al. 2025]]. *Assessing mercury exposure to water and fish of the Mackenzie watershed using a Bayesian network analysis*, Integrated Environmental Assessment and Management | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 8 | [[sources/lucchini2025-amazon-mercury-co-exposures\|Lucchini et al. 2025]]. *Mercury contamination in the Amazon Basin: fish consumption, co-exposures, and health implications for indigenous and riverside communities*, Annals of Global Health | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/paul2025-meghna-fish-arsenic\|Paul et al. 2025]]. *Arsenic bioaccumulation in fish of the lower meghna river: Seasonal dynamics, species sensitivity, and public health implications*, PLoS One | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 10 | [[sources/ray2025-fish-chennai-metals\|Ray et al. 2025]]. *ICP-MS-based quantitative analysis and risk assessment of metal(loid)s in fish species from Chennai, India*, Frontiers in Public Health | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 11 | [[sources/scovronick2025-glynn-county-exposure\|Scovronick et al. 2025]]. *Assessment of human exposure to uncommon industrial toxicants in Glynn County, Georgia*, Environmental Pollution | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 12 | [[sources/taylor2025-seafood-benefits-contaminants\|Taylor et al. 2025]]. *Seafood Benefits and Contaminants: A Comprehensive Review of Health Impacts, Safety Concerns, and Risk Mitigation Strategies*, Foods | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 13 | [[sources/venant2025-lake-victoria-sardine-cd-pb\|Venant et al. 2025]]. *Community Awareness and Health Risk of Heavy Metals Through Consumption of Sardine (Rastrineobola argentea) From Lake Victoria, Tanzania*, Food Science & Nutrition | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 14 | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|Ventura et al. 2025]]. *Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach*, Foods | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 15 | [[sources/xia2025-whole-cell-biosensor-hg-food\|Xia et al. 2025]]. *Replacing Manual Operation with Bio-Automation II: Construction of a Biological Digestion Gene Circuit to Eliminate the Interference of Food Matrices in the Rapid Detection of Heavy Metals*, Foods | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 16 | [[sources/atsdr-mercury-toxprofile-2024\|ATSDR 2024]]. *Toxicological Profile for Mercury*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2024 | Government report | *[awaiting synthesis]* |
| 17 | [[sources/christian2024-caribbean-fish-mercury\|Christian et al. 2024]]. *An evaluation of fish and invertebrate mercury concentrations in the Caribbean Region*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 18 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | *[awaiting synthesis]* |
| 19 | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|Hussein et al. 2024]]. *Risk assessment of some toxic metals in canned fish products retailed in Mansoura, Egypt*, Open Veterinary Journal | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 20 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 21 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 22 | [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0-5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 23 | [[sources/yamashita2024-laep-oes-hg-tuna-japan\|Yamashita 2024]]. *LAEP-OES validation for total mercury in tuna and fish from Japanese markets*, unknown | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 24 | [[sources/abbas2023-heavy-metals-fish-egypt-aquaculture\|Abbas et al. 2023]]. *Heavy Metals Assessment and Health Risk to Consumers of Two Commercial Fish Species from Polyculture Fishponds in El-Sharkia and Kafr El-Sheikh, Egypt: Physiological and Biochemical Study*, Biological Trace Element Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 25 | [[sources/abbas2023-sparus-aurata-egypt-metals\|Abbas 2023]]. *Heavy Metal Levels and Cancer Risk Assessments of the Commercial Denis, Sparus aurata Collected from Bardawil Lake and Private Fish Farm Waters as a Cultured Source, Egypt* | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 26 | [[sources/alsulaiti2023-qatar-fish-mehg\|Al-Sulaiti et al. 2023]]. *Health risk assessment of methyl mercury from fish consumption in a sample of adult Qatari residents*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 27 | [[sources/bae2023-tuna-heavy-metals-korea\|Bae et al. 2023]]. *Heavy metal concentrations in commercial tuna products in Korea and assessment of health risks*, unknown | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 28 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 29 | [[sources/coe2023-gut-microbiome-methylmercury-demethylation\|Coe et al. 2023]]. *Assessing the Role of the Gut Microbiome in Methylmercury Demethylation and Elimination in Humans and Gnotobiotic Mice*, Archives of Toxicology, Vol. 97, pp. 2399-2418 | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 30 | [[sources/hall2023-methylmercury-tidal-marsh\|Hall et al. 2023]]. *Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs*, Environmental Science & Technology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 31 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 32 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 33 | [[sources/holbert2023-mercury-hawaiian-fish\|Holbert et al. 2023]]. *Mercury accumulation and biomarkers of exposure in two popular recreational fishes in Hawaiian waters*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 34 | [[sources/kagawa2023-fish-arsenic-hypertension-japan\|Kagawa et al. 2023]]. *Elevated arsenic level in fasting serum via ingestion of fish meat increased the risk of hypertension in humans and mice*, European Heart Journal Open | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 35 | [[sources/leclerc2023-methylmercury-periphyton-river\|Leclerc et al. 2023]]. *Enhanced Bioaccumulation and Transfer of Monomethylmercury through Periphytic Biofilms in Benthic Food Webs of a River Affected by Run-of-River Dams*, Environmental Science & Technology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 36 | [[sources/liu2023-arsenic-seafood-digestion\|Liu et al. 2023]]. *Transformation of arsenic species from seafood consumption during in vitro digestion*, Frontiers in Nutrition | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 37 | [[sources/sawe2023-fish-metals-lake-manyara-tanzania\|Sawe et al. 2023]]. *Assessment of Potentially Toxic Metals in Fish from Lake Manyara, Northern Tanzania*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 38 | [[sources/sirisangarunroj2023-thai-fish-toxic-elements\|Sirisangarunroj et al. 2023]]. *Toxic Heavy Metals and Their Risk Assessment of Exposure in Selected Freshwater and Marine Fish in Thailand*, Foods 2023, 12, 3967 | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 39 | [[sources/sonke2023-mercury-global-change\|Sonke et al. 2023]]. *Global change effects on biogeochemical mercury cycling*, Ambio | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 40 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 41 | [[sources/ulusoy2023-canned-tuna-toxic-metals\|Ulusoy 2023]]. *Determination of toxic metals in canned tuna sold in developed and developing countries: Health risk assessment associated with human consumption*, Marine Pollution Bulletin | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 42 | [[sources/willacker2023-mercury-fish-snake-river\|Willacker et al. 2023]]. *Reservoir Stratification Modulates the Influence of Impoundments on Fish Mercury Concentrations along an Arid Land River System*, Environmental Science & Technology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 43 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | *[awaiting synthesis]* |
| 44 | [[sources/li2022-mercury-isotope-biota-review\|Li et al. 2022]]. *Internal Dynamics and Metabolism of Mercury in Biota: A Review of Insights from Mercury Stable Isotopes*, Environmental Science & Technology | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 45 | [[sources/oliveira2022-mercury-fish-pregnant-women-tapajos\|Oliveira et al. 2022]]. *Fish consumption habits of pregnant women in Itaituba, Tapajós River basin, Brazil: risks of mercury contamination as assessed by measuring total mercury in highly consumed piscivore fish species and in hair of pregnant women*, Archives of Industrial Hygiene and Toxicology | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 46 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 47 | [[sources/reksten2021-bay-bengal-fish-metals\|Reksten et al. 2021]]. *Heavy Metal Contamination in 24 Fish Species from the Bay of Bengal: Risk Assessment for Human Health*, Foods | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 48 | [[sources/uzomah2021-nigeria-fish-contaminants\|Uzomah et al. 2021]]. *Chemical Contaminants in Nigerian Fresh and Marine Fish: A Review*, Foods | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 49 | [[sources/reksten2020-angola-fish-metals\|Reksten et al. 2020]]. *Nutrient and Contaminant Analyses of Five Commercially Important Fish Species from the Angolan Coast*, Foods | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 50 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 51 | [[sources/fsanz2019-25th-australian-total-diet-study\|Zealand 2019]]. *25th Australian Total Diet Study*, Food Standards Australia New Zealand | 2019 | Government report | *[awaiting synthesis]* |
| 52 | [[sources/zolfaghari2018-iran-wetlands-fish-mercury-lead\|Zolfaghari 2018]]. *Risk assessment of mercury and lead in fish species from Iranian international wetlands*, MethodsX | 2018 | Peer-reviewed | *[awaiting synthesis]* |
| 53 | [[sources/fda-epa-fish-consumption-advice\|FDA 2017]]. *Advice About Eating Fish — For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years*, U.S. FDA and U.S. EPA | 2017 | Government report | *[awaiting synthesis]* |
| 54 | [[sources/chang2015-mercury-korean-infants-weaning\|Chang et al. 2015]]. *Mercury Exposure in Healthy Korean Weaning-Age Infants: Association with Growth, Feeding and Fish Intake*, International Journal of Environmental Research and Public Health | 2015 | Peer-reviewed | *[awaiting synthesis]* |
| 55 | [[sources/lim2015-korea-kriefs-dietary-exposure-pb-cd-hg\|Lim et al. 2015]]. *Korean research project on the integrated exposure assessment of hazardous substances for food safety*, Environmental Health and Toxicology | 2015 | Peer-reviewed | *[awaiting synthesis]* |
| 56 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | *[awaiting synthesis]* |
| 57 | [[sources/ralston2014-selenium-hbv-methylmercury-seafood\|Ralston et al. 2014]]. *Selenium Health Benefit Values: Updated Criteria for Mercury Risk Assessments*, Archives of Environmental Contamination and Toxicology | 2014 | Peer-reviewed | *[awaiting synthesis]* |
| 58 | [[sources/minamata-convention-2013\|Programme 2013]]. *Minamata Convention on Mercury — Text and Annexes (2024 Edition)*, United Nations Environment Programme, Secretariat of the Minamata Convention on Mercury | 2013 | Government report | *[awaiting synthesis]* |
| 59 | [[sources/efsa-mercury-methylmercury-2012\|EFSA 2012]]. *Scientific Opinion on the Risk for Public Health Related to the Presence of Mercury and Methylmercury in Food*, EFSA Journal 2012;10(12):2985 | 2012 | Government report | *[awaiting synthesis]* |
| 60 | [[sources/awata2011-nhanes-asian-dietary-metals-biomarker\|Awata et al. 2011]]. *Association of Dietary Intake and Biomarker Levels of Arsenic, Cadmium, Lead, and Mercury among Asian Populations in the United States: NHANES 2011–2012*, Environmental Health Perspectives | 2011 | Peer-reviewed | *[awaiting synthesis]* |
| 61 | [[sources/farina-rocha-aschner-2011-mehg-mechanism\|Farina et al. 2011]]. *Mechanisms of Methylmercury-Induced Neurotoxicity: Evidence from Experimental Studies*, Life Sciences 89(15-16):555-563 | 2011 | Peer-reviewed | *[awaiting synthesis]* |
| 62 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | *[awaiting synthesis]* |
| 63 | [[sources/bandara2010-cadmium-rice-sri-lanka-crf\|JMRS et al. 2010]]. *Chronic Renal Failure in Sri Lanka Caused by Elevated Dietary Cadmium: Trojan Horse of the Green Revolution*, Toxicology Letters 198(1):33–39 | 2010 | Peer-reviewed | *[awaiting synthesis]* |
| 64 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | *[awaiting synthesis]* |
| 65 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | *[awaiting synthesis]* |
| 66 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | *[awaiting synthesis]* |
| 67 | [[sources/atsdr-arsenic-toxprofile-2007\|ATSDR 2007]]. *Toxicological Profile for Arsenic*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2007 | Government report | *[awaiting synthesis]* |
| 68 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, ATSDR | 2005 | Government report | *[awaiting synthesis]* |
| 69 | [[sources/jecfa-61st-methylmercury\|JECFA 2004]]. *Evaluation of Certain Food Additives and Contaminants (Methylmercury), 61st Meeting of JECFA*, WHO Technical Report Series 922 | 2004 | Government report | *[awaiting synthesis]* |
| 70 | [[sources/epa-iris-methylmercury\|EPA 2001]]. *Methylmercury (MeHg) — IRIS Chemical Assessment Summary*, U.S. Environmental Protection Agency, Integrated Risk Information System | 2001 | Government report | *[awaiting synthesis]* |
| 71 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
