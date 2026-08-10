---
op: lint
date: 2026-05-17
scope: doi-recovery
files_processed: 141
noindex: true
---

# DOI Recovery Run — 2026-05-17

## Summary

Processed all 141 source pages that carried both `no_doi_assigned: true` and a Google Scholar fallback `access_url`. For each, the real DOI was recovered via raw markdown scan and/or public APIs, or (for government/regulatory documents) the canonical agency URL was located. After this run:

- `grep -l "^no_doi_assigned: true" wiki/sources/*.md | wc -l` → **127** (genuinely no-DOI papers, all with venue URLs)
- `grep -l "scholar.google.com" wiki/sources/*.md | wc -l` → **0** ✓

## Results by recovery method

| Method | Count |
|---|---|
| DOI found in raw markdown (Step A) | 43 |
| DOI found via Crossref API (Step B) | 52 |
| DOI found via OpenAlex API (Step C) | 2 |
| DOI found via Semantic Scholar (Step D) | 0 |
| **Total DOIs recovered** | **97** |
| No DOI — venue URL assigned (gov/regulatory) | 43 |
| No DOI — venue URL assigned (not indexed) | 1 |
| **Total files with no DOI (venue URL placed)** | **44** |
| **Grand total processed** | **141** |

## DOIs recovered (97 files)

`no_doi_assigned: true` removed; `doi:` set; `access_url` updated to `https://doi.org/<doi>`.

### From raw markdown scan (43)

| File | DOI |
|---|---|
| adelusi2024-dairy-feed-south-africa | 10.1002/fsn3.4082 |
| ali2025-carbon-dots-aluminum-cobalt-canned-food | 10.1039/d5ra00448a |
| bao2024-sp-icp-ms-nps-mussels | 10.1093/jaoacint/qsae024 |
| cardoso2023-mercury-portuguese-coast-seafood | 10.1007/s11356-023-29495-5 |
| carter2025-tda-aas-methylmercury-finfish-fda-method | 10.1007/s00216-025-05989-8 |
| chamorro2024-bluefin-tuna-mercury-review | 10.3389/fnut.2024.1340121 |
| chen2024-bodipy-hg-water-sensor | 10.1039/d4ra06386d |
| chen2024-hg-gtriplex-biosensor-milk | 10.3390/ijms25158159 |
| dhawale2025-benzidine-chemosensor-mercury-vegetable-juice | 10.1021/acsomega.4c10692 |
| doan2025-mof-rgo-electrochemical-lead-sensor | 10.1039/d4ra08952a |
| godja2025-gold-electrode-nickel-electrochemical-sensor | 10.3390/s25133959 |
| gupta2023-rice-ash-bangladesh-arsenic-cadmium | 10.1007/s12403-023-00539-y |
| inada2023-herbal-medicine-heavy-metal-regulations | 10.1007/s43441-023-00532-2 |
| islam2025-silver-nanoparticle-mercury-colorimetric-water | 10.1039/d5ra01733e |
| jurowski2022-chromium-peppermint-tincture | 10.1007/s12011-022-03367-4 |
| kanazawa2024-hg-speciation-asgm-kenya | 10.1007/s10653-024-02187-w |
| kim2024-food-container-metal-migration-korea | 10.3390/ijerph21020139 |
| kundu2026-gold-nanoparticle-arsenic-colorimetric-groundwater | 10.1039/d5ra08863a |
| lea2018-dinp-endocrine-disruption | 10.1016/j.crtox.2025.100220 |
| li2024-as-colorimetric-water-sensor | 10.1039/d4ra03665d |
| liu2024-crnanohorn-crvi-water-sensor | 10.3390/nano14171465 |
| lockwood2023-sri-lanka-rice-heavy-metals | 10.1007/s12011-023-03847-1 |
| luo2024-cd-ada-vbb-food-sensor | 10.3390/foods13172684 |
| nassar2025-spectrophotometric-cadmium-method | 10.1155/ianc/3347969 |
| nguyen2026-carbon-quantum-dots-mercury-fluorescence-rice-straw | 10.1039/d5ra09779g |
| qin2025-mercury-soil-method-comparison-afs-caas | 10.1098/rsos.240757 |
| seesuan2025-des-edta-chromium-vi-colorimetric-sensor | 10.1039/d5ra02492g |
| sitek2022-cd-toxicity-antioxidant-vitamins | 10.13075/ijomeh.1896.01912 |
| sonke2023-mercury-global-change | 10.1007/s13280-023-01855-y |
| sun2022-china-cadmium-ptmi-rice | 10.46234/ccdcw2023.094 |
| sun2024-libs-pb-soil | 10.3390/molecules29153699 |
| wang2024-as-cemetery-soil-remediation | 10.3390/ijerph21030267 |
| wang2024-ngqd-crhex-fluorescence | 10.1039/d4ra05016a |
| wang2025-mfc-chromium-vi-wastewater-sensor | 10.3390/bios15030158 |
| weyde2023-gestational-metals-cerebral-palsy | 10.3389/fneur.2023.1124943 |
| wu2024-cd-silica-sol-water-sensor | 10.1039/d4ra03983a |
| wu2026-methylmercury-whole-cell-biosensor | 10.1039/d5ra09313a |
| yamashita2024-laep-oes-hg-tuna-japan | 10.1093/jaoacint/qsae053 |
| yang2024-libs-cd-panax-notoginseng | 10.3390/foods13071083 |
| zandi2025-carbon-quantum-dot-chromium-vi-fluorescence-coffee | 10.1002/adma.202504142 |
| zhang2024-aunp-as-rice-water-sensor | 10.1039/d4ra04961f |
| zhang2024-mip-pb-honey-cyprus | 10.3390/polym16131782 |
| zhao2024-znosi-cd-fluorescence-sensor | 10.3390/s24134179 |

### From Crossref API (52)

| File | DOI |
|---|---|
| abdelnaby2022-lead-cadmium-milk | 10.1007/s12011-022-03353-w |
| abebe2023-awash-river-heavy-metals | 10.1007/s10661-023-11674-z |
| abedi2023-arsenic-mercury-hen-eggs-iran | 10.1186/s12889-023-16223-4 |
| ahmed2023-trace-metals-tomato-wastewater | 10.1007/s11356-023-25157-8 |
| aljufaili2024-garra-shamal-oman | 10.1007/s11356-024-32229-w |
| bae2023-tuna-heavy-metals-korea | 10.35371/aoem.2023.35.e3 |
| bakhshalizadeh2024-caspian-sturgeon-metals | 10.1007/s11356-024-32653-y |
| balzani2026-fish-metals-dalyan-lake | 10.1007/s00128-026-04187-1 |
| berber2024-crayfish-metal-content-turkey | 10.1007/s11356-024-32858-1 |
| bozkurt2025-portable-voltammetric-lead-drinking-water | 10.1021/acsomega.5c01580 |
| brodziak-dopierala2024-hg-supplements-poland | 10.1007/s12011-024-04269-3 |
| capcarova2023-mozzarella-trace-elements-slovakia | 10.1007/s12011-023-03813-x |
| chirinos2023-milk-lead-cadmium-arsenic-peru | 10.1007/s12011-023-03838-2 |
| chronchol2026-dairy-free-infant-porridges-poland | 10.3390/nu18020333 |
| de-silva2023-industrial-waste-land-application-soil | 10.1007/s11356-023-26893-7 |
| decharat2023-lead-cadmium-drinking-water-thailand | 10.5620/eaht.2023020 |
| escobar-camacho2024-mercury-fish-ecuador-amazon | 10.1007/s10646-024-02764-w |
| fei2024-cd-off-on-fluorescence-milk | 10.1016/j.heliyon.2024.e26980 |
| gajdosechova2023-nanoparticles-trace-element-food | 10.1007/s00216-023-04940-z |
| gholami2025-heavy-metals-corn-iran-khuzestan | 10.1038/s41598-025-89281-w |
| hampton2023-lead-game-meat-australia | 10.1007/s11356-023-25949-y |
| hu2025-bacillus-cmos-arsenic-biosensor-soil-food | 10.1021/acssynbio.4c00895 |
| janiga2024-alpine-bullhead-metals | 10.1007/s11356-024-32288-z |
| knoll2024-honeybee-cadmium-review | 10.1007/s12011-024-04118-3 |
| limmer2023-sr-xrf-rice-grain | 10.1107/s1600577523000747 |
| mancuso2024-food-contamination-cvd | 10.1007/s11739-024-03610-x |
| margaoan2024-bee-products-heavy-metals | 10.1007/s11356-024-33754-4 |
| meligy2024-camel-meat-toxic-elements | 10.5455/ovj.2024.v14.i1.14 |
| mohammadian-hafshejani2024-cadmium-prostate-cancer-meta | 10.18502/ijph.v53i3.15136 |
| nepper-davidsen2023-kelp-biomass-composition-nz | 10.1007/s10811-023-02969-2 |
| prasanna2025-betwa-yamuna-metal-pollution | 10.1038/s41598-025-34780-z |
| raab2024-arsenolipids-chlamydomonas | 10.1007/s00216-023-05122-7 |
| ralston2014-selenium-hbv-methylmercury-seafood | 10.1007/s12011-015-0516-z |
| ramadan2024-bahr-mouse-egypt-water | 10.1007/s10661-024-12541-1 |
| rohonczy2024-arctic-foodweb-cd-hg | 10.1007/s11356-024-32268-3 |
| salem2024-tomato-remediated-soil-egypt | 10.1007/s11356-024-33187-z |
| sawe2023-fish-metals-lake-manyara-tanzania | 10.1007/s00128-023-03794-6 |
| schmidt2015-arsenic-infancy-commentary | 10.1289/ehp.123-A137 |
| shaalan2024-nile-tilapia-heavy-metals-egypt | 10.1186/s12917-024-04367-3 |
| sim2024-inorganic-arsenic-seaweed-hplc | 10.1007/s00216-024-05250-8 |
| tasdivrik2025-drinking-water-heavy-metals-sivas-turkey | 10.1038/s41598-025-94950-x |
| thomas2024-lead-poisoning-ayurvedic-herbal | 10.1530/edm-23-0066 |
| tian2021-magnetic-purification-cadmium-lead-grain | 10.1016/j.fochx.2023.100636 |
| troeschel2024-cinnamon-applesauce-lead | 10.15585/mmwr.mm7414a2 |
| valizadeh2023-canned-beans-iran-health-risk | 10.1038/s41598-025-34271-1 |
| ventura2025-portuguese-total-diet-study-trace-elements | 10.3390/foods15050838 |
| wang2023-toxic-metals-daily-diet-ningxia | 10.1007/s12011-022-03538-3 |
| webster2024-mercury-thyroid-cancer | 10.1007/s11356-024-32031-8 |
| zafarzadeh2025-heavy-metals-rice-sari-iran | 10.1038/s41598-025-22000-7 |
| zhang2017-red-raspberry-nutrient-profile | 10.3233/nha-190072 |

### From OpenAlex API (2)

| File | DOI |
|---|---|
| shumba2025-tilapia-mercury-zambia-mining | 10.1007/s11356-025-36506-0 |
| sun2023-pb-leek-speciation-xanes | 10.1107/s1600577523006616 |

## Venue URLs assigned — no DOI (44 files)

`no_doi_assigned: true` retained; `access_url` updated from Scholar placeholder to canonical agency/publisher URL.

### Government and regulatory documents (43)

| File | Venue URL |
|---|---|
| atsdr-aluminum-toxprofile-2008 | https://www.atsdr.cdc.gov/toxprofiles/tp22.pdf |
| atsdr-cadmium-toxprofile-2012 | https://www.atsdr.cdc.gov/toxprofiles/tp5.pdf |
| atsdr-mercury-toxprofile-2024 | https://www.atsdr.cdc.gov/toxprofiles/tp46.pdf |
| atsdr-nickel-toxprofile-2024 | https://www.ncbi.nlm.nih.gov/books/NBK610351/ |
| belgian-lead-factsheet-2024 | https://www.omgeving-en-gezondheid.be/ |
| canada-t4-93-fertilizer-heavy-metal-standards | https://inspection.canada.ca/plant-health/fertilizers/trade-memoranda/t-4-93/eng/1305611387327/1305611547479 |
| cdc-blood-lead-reference-value | https://www.cdc.gov/mmwr/volumes/70/wr/mm7043a4.htm |
| cfia2025-toxic-metals-selected-foods-2022-23 | https://inspection.canada.ca/en/food-safety-industry/food-chemistry-and-microbiology/testing-reports-and-journal-articles/2022-2022-toxic-metals |
| codex-cccf17-2024 | https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=... (CCCF17 final report) |
| codex-cxs-193-1995 | https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=... (CXS 193-1995) |
| ecfr-21cfr10112-serving-sizes | https://www.ecfr.gov/current/title-21/chapter-I/part-101/subpart-A/section-101.12 |
| epa-arsenic-drinking-water-mcl | https://www.epa.gov/dwreginfo/drinking-water-arsenic-rule-history |
| epa-eco-ssl-nickel-2007 | https://www.epa.gov/chemical-research/ecological-soil-screening-level-metal-contaminants |
| epa-iris-cadmium-1989 | https://iris.epa.gov/ChemicalLanding/&substance_nmbr=141 |
| epa-iris-inorganic-arsenic-2025 | https://iris.epa.gov/ChemicalLanding/&substance_nmbr=278 |
| epa-iris-lead-2004 | https://iris.epa.gov/ChemicalLanding/&substance_nmbr=277 |
| epa-iris-mercuric-chloride | https://iris.epa.gov/ChemicalLanding/&substance_nmbr=692 |
| epa-iris-methylmercury | https://iris.epa.gov/ChemicalLanding/&substance_nmbr=73 |
| eu2023-915-lead-infant-young-child-foods | https://eur-lex.europa.eu/eli/reg/2023/915/oj/eng |
| fda-ctz-Pb-babyfood-2025 | https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children |
| fda-epa-fish-consumption-advice | https://www.fda.gov/food/consumers/advice-about-eating-fish |
| fda-iAs-rice-cereal-2020 | https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants |
| fda-tds-elements-2018-2020 | https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results |
| fda2004-juice-haccp-lead | https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-juice-hazard-analysis-critical-control-point-hazards-and-controls-guidance-first |
| fda2011-arsenic-apple-juice-2005-2011 | https://www.fda.gov/food/environmental-contaminants-food/arsenic-apple-juice-analytical-results-2005-2011-toxic-elements-food-and-foodware-program |
| fda2013-ias-rice-products-sampling | https://www.fda.gov/food/environmental-contaminants-food/arsenic-food-and-dietary-supplements |
| fda2016-arsenic-rice-cereal-analytic-results | https://www.fda.gov/food/risk-and-safety-assessments-food/arsenic-rice-and-rice-products-risk-assessment |
| fda2016-arsenic-rice-risk-assessment | https://www.fda.gov/food/risk-and-safety-assessments-food/arsenic-rice-and-rice-products-risk-assessment |
| fda2018-iAs-infant-rice-cereals-fy2018 | https://www.fda.gov/media/135552/download |
| fda2022-draft-lead-juice | https://www.fda.gov/regulatory-information/search-fda-guidance-documents/draft-guidance-industry-action-levels-lead-juice |
| fda2023-ias-apple-juice-guidance | https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-apple-juice |
| fda2025-cp7304-019-toxic-elements-food-foodware | https://www.fda.gov/food/chemical-contaminants-pesticides/toxic-elements-foods-and-foodware |
| fsanz2019-25th-australian-total-diet-study | https://www.foodstandards.gov.au/science-data/monitoring-safety/australian-total-diet-study |
| jecfa-72nd-lead-2010 | https://www.who.int/publications/i/item/9789241209595 |
| jecfa-73rd-cadmium-2010 | https://www.who.int/publications/i/item/9789241660648 |
| jecfa-82nd-arsenic | https://www.who.int/publications/i/item/9789241660730 |
| jecfa-91st-cadmium-2022 | https://www.who.int/publications/i/item/9789240060760 |
| jecfa-food-additive-specs-compendium | https://openknowledge.fao.org/handle/20.500.14283/a0691e |
| meter2019-cadmium-cacao-lac-review | https://scioteca.caf.com/handle/123456789/1110 |
| minamata-convention-2013 | https://minamataconvention.org/en/resources/minamata-convention-mercury-text-annexes |
| ntp-15th-roc-nickel-2021 | https://ntp.niehs.nih.gov/sites/default/files/ntp/roc/content/profiles/nickel.pdf |
| oehha-arsenic-prop65-listing | https://oehha.ca.gov/proposition-65/chemicals/arsenic-inorganic-arsenic-compounds |
| oehha-cadmium-prop65-madl-2001 | https://oehha.ca.gov/proposition-65/chemicals/cadmium |
| oehha-lead-prop65-listing | https://oehha.ca.gov/proposition-65/chemicals/lead-and-lead-compounds |

### Not indexed in major databases (1)

| File | Venue URL | Note |
|---|---|---|
| rashmi2020-baby-talcum-powder-heavy-metals-india | https://patnawomenscollege.in/iris-vol-x2020/ | IRIS Journal for Young Scientists Vol. X (2020), Patna Women's College; not in Crossref/OpenAlex/Semantic Scholar |

## Side notes from sub-agents (non-DOI issues to address separately)

These discrepancies were flagged during the DOI recovery pass but are out of scope for this run:

- **sitek2022**: frontmatter `publication` says "Nutrients" but actual journal is IJOMEH (International Journal of Occupational Medicine and Environmental Health)
- **sim2024**: frontmatter `publication` says "Food Chemistry" but actual journal is Analytical and Bioanalytical Chemistry
- **sun2024-libs-pb-soil**: frontmatter `authors` and title are stubs; actual first author is Shefeng Li (Molecules 2024)
- **shumba2025**: actual corresponding author is Musonda Chisanga, not Shumba; cite_key author may be wrong
- **wang2023-toxic-metals-daily-diet-ningxia**: frontmatter `publication` says "Archives of Environmental Contamination and Toxicology" but actual journal is Biological Trace Element Research
- **tian2021-magnetic-purification-cadmium-lead-grain**: frontmatter `year: 2021` but paper published 2023
- **troeschel2024-cinnamon-applesauce-lead**: frontmatter `year: 2024` but paper published April 2025
- **valizadeh2023-canned-beans-iran-health-risk**: frontmatter `year: 2023` but paper published 2026
- **ventura2025-portuguese-total-diet-study-trace-elements**: frontmatter `year: 2025` but paper published 2026
- **zhang2017-red-raspberry-nutrient-profile**: frontmatter `year: 2017` but paper published 2019 in Nutrition and Healthy Aging (not Journal of Food Composition and Analysis)
- **yang2024-libs-cd-panax-notoginseng**: actual first author is Chen R, not Yang; cite_key may derive from wrong author
- **schmidt2015-arsenic-infancy-commentary**: raw file FM_5322685 contains wrong paper (Kelishadi et al. 2016 jujube/breast milk study); raw_path likely points to wrong PDF
- **belgian-lead-factsheet-2024**: milieu-en-gezondheid.be domain migrated to omgeving-en-gezondheid.be; direct PDF URL at new domain returns 404
