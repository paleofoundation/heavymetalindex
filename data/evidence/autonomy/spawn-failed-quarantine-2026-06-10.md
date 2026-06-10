# Spawn-failed quarantine — 2026-06-10

Moved 154 rows from `pending-audit-spawn-failed` to terminal `dead-letter-spawn-failed` and capped their attempts at 5.
These are the rows the old drain-audit-queue.mjs re-burned every cycle (it never wrote a failed row's status back).
They are removed from the drain rotation but **not** deleted — some may be transient failures worth re-fetching.

| cite_key | source_folder | handle |
|---|---|---|
| ebisike2021-chitosan-silica-nickel-sorption | wiki/sources | AUTO_ing-chitosan-ni_2021_10-48048-wjst-2021-9454 |
| howard2023-chitosan-dotaga-lead-cadmium-chelation | wiki/sources | AUTO_ing-chitosan-pb_2023_10-1038-s41598-023-28968-4 |
| ahuja2019-magnetite-chitosan-arsenic-groundwater | wiki/sources | AUTO_ing-chitosan-tas_2019_10-1201-9781351046633-178 |
| pogrzeba2018-energy-crops-contaminated-soil | wiki/sources | AUTO_auto-mineral-water-cd-product_2018_10-1007-s11356-018-1490-8 |
| miroslawski2017-polish-medicinal-plants-infusions | MFK/June 9 | MFK_10.1007-s12011-017-1072-5 |
| kocevar-glavac2017-medicinal-plants-soil-metals | MFK/June 9 | MFK_10.1515-aiht-2017-68-2990 |
| cacic2019-hemp-heavy-metals | MFK/June 9 | MFK_10.5513-jcea01-20.2.2201 |
| huda2024-irrigated-rice-metals-pesticides | MFK/June 9 | MFK_a-potential-toxicological-risk-assessment-of-heavy |
| tan2022-organic-fertilizer-rice-cd-arsenic | wiki/sources | AUTO_ing-mushrooms-tas_2022_10-21203-rs-3-rs-1112722-v1 |
| bramwell2022-urban-garden-produce-lead | wiki/sources | AUTO_ing-non-root-vegetables-pb_2021_10-1007-s10653-021-01095-7 |
| okeke2026-calcium-carbide-ripened-fruits-metals | wiki/sources | AUTO_ing-pineapple-tas_2026_10-51244-ijrsi-2026-1315ph00024 |
| nelson2022-cannabis-heavy-metals-method | MFK/June 9 | MFK_determination-of-heavy-metals-in-a-variety-of-cann |
| liu2023-yuyao-soil-crop-metals | MFK/June 9 | MFK_enrichment-characteristics-and-health-risk-assessm |
| ullah2022-khyber-vegetables-metals | MFK/June 9 | MFK_health-risk-assessment-and-multivariate-statistic |
| zeng2023-disposable-food-containers-metals | MFK/June 9 | MFK_heavy-metal-risk-of-disposable-food-containers-o |
| baptista2024-wild-boar-metals-spain | MFK/June 9 | MFK_heavy-metals-and-metalloids-in-wild-boars-sus |
| woreta2023-lupine-seeds-metals-ethiopia | MFK/June 9 | MFK_occurrence-and-accumulation-of-metals-in-lupine |
| zhang2022-pork-heavy-metals-china | MFK/June 9 | MFK_risk-assessment-of-heavy-metals-contamination-in |
| ammerman1977-mineral-supplements-contaminants | MFK/June 9 | MFK_ammerman1977 |
| barthwal2008-medicinal-plants-heavy-metals-lucknow | MFK/June 9 | MFK_barthwal2008 |
| altmaier2021-cannabis-big-four-metals | MFK/June 9 | MFK_big-four-analysis-cannscitech |
| divrikli2006-spices-herbal-plants-metals | MFK/June 9 | MFK_divrikli2006 |
| fonge2021-cabbage-carrot-metals-cameroon | MFK/June 9 | MFK_fonge2021 |
| khan2007-withania-somnifera-metals-pakistan | MFK/June 9 | MFK_khan2007 |
| khan2013-medicinal-plants-metals-pakistan | MFK/June 9 | MFK_khan2013 |
| li2024-selenium-pps-mercury-immobilization | wiki/sources | AUTO_auto-fabric-protectants-thg-product_2024_10-1038-s41467-024-45486-7 |
| kulhari2013-medicinal-plants-metals-india | MFK/June 9 | MFK_kulhari2013 |
| shah2013-medicinal-plants-metals-pakistan | MFK/June 9 | MFK_shah2013 |
| stahl2017-aluminum-food-contact-part1 | MFK/June 9 | MFK_stahl2017 |
| viviers2021-south-africa-cannabis-metals | MFK/June 9 | MFK_viviers2021 |
| zerihun2015-ethiopian-cannabis-leaf-metals | MFK/June 9 | MFK_zerihun2015 |
| zhou2000-china-vegetable-heavy-metals-review | MFK/June 9 | MFK_zhou2000 |
| garcia-salgado2012-edible-algae-arsenic-speciation | MFK/June 8 Inorganic Arsenic Seaweed | MFK_10-1016-j-aca-2011-12-001 |
| garcia-salgado2006-soluble-arsenic-algae | MFK/June 8 Inorganic Arsenic Seaweed | MFK_10-1016-j-chroma-2006-06-083 |
| diaz2012-chile-algae-arsenic | MFK/June 8 Inorganic Arsenic Seaweed | MFK_10-1016-j-fct-2011-11-024-1 |
| garcia-salgado2012-brown-algae-arsenolipids | MFK/June 8 Inorganic Arsenic Seaweed | MFK_10-1071-en11164 |
| ortega-flores2023-mexican-sargassum-arsenic | MFK/June 8 Inorganic Arsenic Seaweed | MFK_103189 |
| huang2020-hijiki-arsenic-growth-stages | MFK/June 8 Inorganic Arsenic Seaweed | MFK_1801-19411952 |
| shchukin2018-brown-algae-metals | MFK/June 8 Inorganic Arsenic Seaweed | MFK_4498-18828-2-pb |
| shu2023-china-port-seafood-organotins | MFK/June 8 Inorganic Arsenic Seaweed | MFK_characteristics-sources-and-health-risks-of-organotin |
| sundhar2023-gulf-mannar-seaweed-metals | MFK/June 8 Inorganic Arsenic Seaweed | MFK_effect-of-thermal-processing-on-toxic-heavy-metals |
| duinker2020-macroalgae-food-feed-safety | MFK/June 8 Inorganic Arsenic Seaweed | MFK_knowledgeupdateonmacroalgaefoodandfeedsafety2020 |
| al-dhabi2013-spirulina-products-metals | MFK/June 8 Inorganic Arsenic Seaweed | MFK_al-dhabi2013 |
| bolan2017-rice-complementary-medicines-arsenic | MFK/June 8 Inorganic Arsenic Seaweed | MFK_bolan2017 |
| cao2014-sargassum-pallidum-arsenic-speciation | MFK/June 8 Inorganic Arsenic Seaweed | MFK_cao2014 |
| cheyns2021-algae-cyanobacteria-supplements-arsenic | MFK/June 8 Inorganic Arsenic Seaweed | MFK_cheyns2021 |
| hata2014-wakame-organoarsenic-extraction | MFK/June 8 Inorganic Arsenic Seaweed | MFK_hata2014 |
| ichikawa2006-hijiki-cooking-arsenic | MFK/June 8 Inorganic Arsenic Seaweed | MFK_ichikawa2006 |
| ichikawa2010-hijiki-arsenic-metabolism | MFK/June 8 Inorganic Arsenic Seaweed | MFK_ichikawa2010 |
| laparra2003-seaweed-arsenic-bioaccessibility | MFK/June 8 Inorganic Arsenic Seaweed | MFK_laparra2003 |
| li2017-spirulina-arsenic-speciation | MFK/June 8 Inorganic Arsenic Seaweed | MFK_li2017-spirulina-arsenic-speciation |
| liu2018-tcm-arsenic-bioaccessibility | MFK/June 8 Inorganic Arsenic Seaweed | MFK_liu2018 |
| sun2025-biochar-alginate-cadmium-lettuce | wiki/sources | AUTO_auto-fabric-protectants-cd-product_2025_10-3390-gels11050375 |
| aljubiri2024-sewage-sludge-carbon-cadmium-lead | wiki/sources | AUTO_auto-fabric-protectants-pb-product_2024_10-3390-ijms25189866 |
| adaileh2025-pan-composite-lead-cadmium-wastewater | wiki/sources | AUTO_auto-fabric-protectants-pb-product_2025_10-1038-s41598-025-95736-x |
| lorenc2020-marine-algae-arsenic-species | MFK/June 8 Inorganic Arsenic Seaweed | MFK_lorenc2020 |
| ma2018-seaweed-arsenic-contents | MFK/June 8 Inorganic Arsenic Seaweed | MFK_ma2018 |
| matsumoto-tanibuchi2019-seaweed-seafood-ias | MFK/June 8 Inorganic Arsenic Seaweed | MFK_matsumoto-tanibuchi2019 |
| mcsheehy2000-edible-algae-arsenic-speciation | MFK/June 8 Inorganic Arsenic Seaweed | MFK_mcsheehy2000 |
| morita1990-marine-macroalgae-arsenic-forms | MFK/June 8 Inorganic Arsenic Seaweed | MFK_morita1990 |
| nischwitz2006-commercial-kelp-arsenic-speciation | MFK/June 8 Inorganic Arsenic Seaweed | MFK_nischwitz2006 |
| shimoda2010-commercial-hijiki-arsenic-speciation | MFK/June 8 Inorganic Arsenic Seaweed | MFK_shimoda2010 |
| tukai2002-sydney-macroalgae-arsenic-speciation | MFK/June 8 Inorganic Arsenic Seaweed | MFK_tukai2002 |
| vanhulle2004-laminaria-arsenic-metabolism | MFK/June 8 Inorganic Arsenic Seaweed | MFK_vanhulle2004 |
| wei2003-porphyra-arsenosugars-china | MFK/June 8 Inorganic Arsenic Seaweed | MFK_wei2003 |
| murtaza2025-biochar-selenium-barley-lead | wiki/sources | AUTO_auto-supplements-enzymes-pb-product_2025_10-1038-s41598-025-12279-x |
| daisley2018-lactobacillus-lead-cadmium-sequestration | wiki/sources | AUTO_auto-supplements-probiotics-cd-product_2019_10-1080-19490976-2018-1526581 |
| liu2020-lactobacillus-plantarum-cadmium-excretion | wiki/sources | AUTO_auto-supplements-probiotics-cd-product_2021_10-3389-fimmu-2020-619574 |
| zhao2014-edible-seaweed-arsenic-digestion | MFK/June 8 Inorganic Arsenic Seaweed | MFK_zhao2014 |
| ma2024-sanitary-napkins-metals | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_1-s2-0-s2352186424000828-main |
| marcelis2025-micp-leachables-metals | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_1-s2-0-s0160412025001527-main |
| mackiewicz2025-eu-deodorants-elements | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-07-mikolajczyk-2025-eu-deodorants-metals |
| nilsson2006-sex-toys-chemicals | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-15-danish-epa-2006-sex-toys-chemicals |
| gao2020-feminine-hygiene-edcs | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-19-gao-2020-edcs-feminine-products |
| ica2024-tampon-contaminants-review | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-21-fda-2025-tampons-systematic-review |
| marroquin2024-menstrual-products-chemicals | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-22-marroquin-2024-systematic-review |
| okwuegbuna2025-tampon-metal-release-thesis | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-23-okwuegbuna-2025-thesis-menstrual-metals |
| carlin2020-tampons-eyeshadows-chemistry | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-24-carlin-2020-thesis-tampons |
| archer2005-tampon-dioxins-furans | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-27-archer-2005-dioxins-tampons |
| marcelis2024-feminine-intimate-products-thesis | MFK/June 8 Kimi_Agent_Feminine Care Heavy Metal Papers | MFK_paper-30-marcelis-2024-phd-thesis |
| palka2022-rabbit-meat-feed-metals | wiki/sources | AUTO_auto-supplements-vitamin-mineral-cd-product_2023_10-3390-ani12070827 |
| janvier2019-mondia-root-bark-metals | wiki/sources | AUTO_auto-supplements-vitamin-mineral-pb-product_2023_10-1002-fsn3-796 |
| guo2022-root-targeted-rice-metals | MFK/June 8 | MFK_43-root-targeted-over-expression-of-heavy-metal |
| cwielag-drabek2025-tattoo-inks-metals | wiki/sources | AUTO_auto-tattoo-inks-thg-product_2025_10-3390-toxics13110934 |
| godwill2015-soft-drinks-metals-nigeria | MFK/June 8 | MFK_determination-of-some-soft-drink-constituents |
| deoliveira2018-traditional-herbal-teas-metals | MFK/June 8 | MFK_metal-concentrations-in-traditional-and-herbal-teas |
| zhang2026-cotton-arsenic-amf-calcium | wiki/sources | AUTO_auto-walkers-tas-product_2026_10-3390-jof12050335 |
| abuawad2023-folic-creatine-arsenic-methylation | wiki/sources | AUTO_auto-water-filters-ias-product_2023_10-1289-ehp11270 |
| meharg2008-rice-arsenic-literature-review | MFK/June 8 | MFK_levels-of-arsenic-in-rice-literature-review |
| fsanz2008-cadmium-peanuts-assessment | MFK/June 8 | MFK_final-assessment-report-application-a552-cadmium |
| nachman2013-chicken-arsenic-research-brief | MFK/June 8 | MFK_arsenic-in-chicken-meat-research-brief |
| rokanuzzaman2022-bangladesh-eggs-metals | MFK/June 8 | MFK_assessment-of-heavy-metals-and-trace-elements |
| bfr2018-infant-food-cadmium-lead | MFK/June 8 | MFK_cadmium-in-food-scientific-opinion-reference |
| buba2020-domestic-pig-metals-nigeria | MFK/June 8 | MFK_determination-of-some-heavy-metals-in-kidney-liver |
| faraj2023-backyard-chicken-metals-iraq | MFK/June 8 | MFK_evaluation-of-some-heavy-metal-and-trace-element |
| khalafalla2011-beef-carcasses-metals-egypt | MFK/June 8 | MFK_heavy-metal-residues-in-beef-carcasses-in-beni |
| thomas2022-lead-game-meat-awareness | MFK/June 8 | MFK_increasing-the-awareness-of-health-risks-from-lead |
| hunt2009-lead-bullet-fragments-venison | MFK/June 8 | MFK_lead-bullet-fragments-in-venison-from-rifle-killed |
| qvarfort2025-game-meat-lead-bioaccessibility | MFK/June 8 | MFK_lead-in-game-meat-a-study-of-bioaccessibility |
| morshdy2023-canned-meat-chicken-metals | MFK/June 8 | MFK_risks-assessment-of-toxic-metals-in-canned-meat |
| campaignsafecosmetics2007-lead-lipstick | MFK/June 8 | MFK_a-poison-kiss-the-problem-of-lead-in-lipstick |
| zafarzadeh2018-cosmetics-lead-cadmium-iran | MFK/June 8 | MFK_assessment-of-cadmium-and-lead-concentrations-in |
| yorgwara2026-personal-care-metals-nigeria | MFK/June 8 | MFK_assessment-of-heavy-metal-concentration-in-some |
| yashim2020-hair-dyes-metals-nigeria | MFK/June 8 | MFK_evaluation-of-heavy-metals-level-in-hair-dyes |
| gautam2023-tattoo-ink-heavy-metals-risk | MFK/June 8 | MFK_health-risk-assessment-for-heavy-metals-in-tattoo |
| modddaresi2022-cosmetics-heavy-metal-limits | MFK/June 8 | MFK_heavy-metal-content-in-cosmetic-products-ifscc |
| sahu2014-cosmetics-metals-india | MFK/June 8 | MFK_heavy-metals-in-cosmetics-report |
| piccinini2016-tattoo-pmu-safety | MFK/June 8 | MFK_safety-of-tattoos-and-permanent-make-up-final |
| ali2024-facial-cosmetics-metals-benghazi | MFK/June 8 | MFK_the-health-risk-assessment-of-some-toxic-metals-in |
| hardy2025-uk-reach-tattoo-pmu-decision | MFK/June 8 | MFK_uk-reach-restriction-report-substances-in-tattoo-i |
| aicis2022-aluminium-antiperspirants-evaluation | MFK/June 8 | MFK_use-of-aluminium-in-antiperspirants-evaluation-sta |
| healthcanada2012-cosmetics-heavy-metal-impurities | MFK/June 8 | MFK_paper-18-unknown |
| upson2022-menstrual-products-exposure-review | MFK/June 8 | MFK_menstrual-products-as-a-source-of-environmental |
| ungureanu2022-bottled-water-toxic-elements | wiki/sources | AUTO_gap-bottled-drinking-water-pb_2023_10-3390-foods11101407 |
| pawlaczyk2021-eyeshadows-metallic-impurities | wiki/sources | AUTO_gap-childrens-makeup-pb_2021_10-3390-molecules26216753 |
| truzzi2020-insect-biomass-feed-metals | wiki/sources | AUTO_gap-coffee-cd_2020_10-3390-ijerph17062121 |
| greenseal2020-gs51-laundry-care-products | MFK/June 8 | MFK_laundry-care-products-standard-gs-51 |
| orisakwe2016-nigeria-toothpastes-metals | MFK/June 8 | MFK_potential-hazards-of-toxic-metals-found-in-toothpastes |
| sccs2023-hydroxyapatite-nano-opinion | MFK/June 8 | MFK_scientific-committee-on-consumer-safety-sccs-hydroxyapatite |
| gautam2024-finger-paints-metals-formaldehyde | MFK/June 8 | MFK_cat21-04-formaldehyde-heavy-metals-finger-paints |
| gautam2022-jewellery-heavy-metals | MFK/June 8 | MFK_cat21-05-heavy-metal-in-jewellery |
| jalal2020-modeling-clay-metals | MFK/June 8 | MFK_cat21-07-semanticscholar-cadmium |
| chwastowski2020-spent-coffee-biochar-metal-adsorption | wiki/sources | AUTO_gap-coffee-cd_2020_10-3390-ma13122782 |
| steinemann2020-car-air-freshener-vocs | MFK/June 8 | MFK_cat21-12-car-air-fresheners-volatile-emissions |
| lopez2022-cacao-biochar-cadmium | wiki/sources | AUTO_gap-coffee-cd_2022_10-1016-j-heliyon-2022-e09790 |
| guadalupe2023-peruvian-coffee-metals | wiki/sources | AUTO_gap-coffee-cd_2023_10-3390-foods12173254 |
| ismail2017-low-priced-toys-metals | MFK/June 8 | MFK_cat21-16-arpn-journal-eas-2017 |
| pagels2009-candle-smoke-particles | MFK/June 8 | MFK_untitled-29 |
| gul2022-karachi-plastic-toys-metals | MFK/June 8 | MFK_cat21-18-research-square-rs1001076 |
| dtu2024-food-contact-pb-cd-limits | MFK/June 8 | MFK_0-5-micrograms-ml |
| edqm2024-metals-alloys-food-contact-guide | MFK/June 8 | MFK_council-of-europe-resolution-cm-res-2020-9 |
| cstee2003-organotin-consumer-exposure | MFK/June 8 | MFK_eu-risk-assessment-studies-on-targeted-consumer |
| li2019-plastic-packaging-metal-migration | MFK/June 8 | MFK_evaluation-of-heavy-metal-migration-from-plastic |
| szynal2016-polish-ceramic-glassware-ni-cr | MFK/June 8 | MFK_migration-studies-of-nickel-and-chromium-from |
| mandrile2020-organotin-food-packaging-sers | MFK/June 8 | MFK_migration-study-of-organotin-compounds-from-food-p |
| rahman2007-rice-grain-arsenic-fractions | MFK/June 8 | MFK_07-remediation-method |
| ciftci2023-nasal-sprays-drops-metals | MFK/June 8 | MFK_determination-of-heavy-metals-and-essential-elements-in |
| raeeszadeh2021-animal-meat-metals-iran | MFK/June 8 | MFK_determination-of-some-heavy-metals-concentration-in |
| shin2009-womens-sanitary-products-metals | MFK/June 8 | MFK_gorhb4-2009-v33n6-853 |
| torabi2024-persian-gulf-marine-fish-metals | MFK/June 8 | MFK_health-risk-assessment-of-heavy-metals-in-marine |
| haseeb-ur-rehman2023-pakistan-seafood-metals | MFK/June 8 | MFK_metal-pollution-and-potential-human-health-risk |
| nic-corcrain2025-menstrual-products-metal-leaching | MFK/June 8 | MFK_f1000research-777517 |
| nguyen2016-underwear-trace-elements | MFK/June 8 | MFK_nguyen2016 |
| volpe2012-eye-shadow-cosmetics-metals | MFK/June 8 | MFK_volpe2012 |
| zakaria2015-lipstick-heavy-metals-malaysia | MFK/June 8 | MFK_zakaria2015 |
| ellison2026-tampon-lead-exposure | wiki/sources | AUTO_auto-menstrual-tampons-pb-product_2026_10-1093-toxsci-kfag052 |
| fsanz2011-23rd-australian-total-diet-study | MFK/June 8 | MFK_fsanz-23rd-atds |
| efsa2005-tin-food-upper-intake | MFK/June 8 | MFK_efsa-tin-2005-opinion |
| anses2026-tds3-metals-france | MFK/June 8 | MFK_anses-2019-tds3 |
| cot2003-arsenic-food-tds | MFK/June 8 | MFK_cot-2003-arsenic-statement |
| cot2003-infant-food-metals | MFK/June 8 | MFK_cot-2003-infant-metals |
| cot2004-mercury-fish-shellfish | MFK/June 8 | MFK_cot-2004-mercury-fish |
| cot2008-uk-tds-metals | MFK/June 8 | MFK_cot-2008-tds-statement |
| fsa2014-infant-foods-metals | MFK/June 8 | MFK_fsa-2014-infant-foods-metals |
