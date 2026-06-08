# Codex run report - 2026-06-08 new folders ingest

Scope: drained `raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/` first, then `raw/Manual Fetch Kimi /June 8 New Folder With Items 4 2/`. The parallel seaweed folder was not touched.

## Counts

| Folder | PDFs | Ingested | Skipped duplicates | Skipped out-of-scope | Needs OCR | Errors | Missing states |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| MFK/June 8 New Folder With Items 3 2 | 138 | 78 | 27 | 33 | 0 | 0 | 0 |
| MFK/June 8 New Folder With Items 4 2 | 41 | 29 | 5 | 7 | 0 | 0 | 0 |

## Verification and checks

- `npm run evidence:source-routes`: exit 0. Final run processed 1731 source pages, wrote 3676 product-source routing rows, and reported 18 unresolved targets plus 856 malformed sources as non-blocking existing corpus state. New/late cite keys checked for this wrap-up (`ho2016-hong-kong-rock-shell-organotins`, `reinke1975-fish-shellfish-inorganic-arsenic`, `schoof2007-seafood-arsenic-speciation`, `pereira2008-ria-aveiro-mercury-review`, `uneyama2007-arsenic-foods-cumulative-data`) were absent from `routing_unresolved.csv` and `routing_malformed.csv`.
- `npm run evidence:local-reingest`: exit 0; wrote 2510 local reingest queue rows and refreshed `data/evidence/local_reingest_summary.json`.
- `npm run evidence:standards-gaps`: exit 0; wrote standards gap/action/adjudication/aggregate-distribution artifacts.
- `npm run evidence:ai-adjudication`: exit 0; wrote 102 AI adjudication rows and summary.
- `npm run prebuild`: exit 0; generated standard warnings only, including existing DOI/access-url audit findings and existing index-fanning/routing-discipline warnings.
- `npm test`: exit 0; 241 tests passed.
- `npm run check`: exit 0.
- `npm run build`: exit 0; Quartz parsed 2903 Markdown files and emitted 3598 files. LaTeX unicode warnings for dash characters were warn-only.

## Notes

- Missing slug notes: none requiring provisional scaffold creation. Broad existing slugs were used for folder 4 Ho 2016 (`shellfish`, `molluscs`, `seafood`) with an explicit row-fit caveat because the source is wild rock-shell biomonitoring rather than market seafood.
- Stop files: none. Both folders are fully accounted.
- Concurrency note: `ho2016-hong-kong-rock-shell-organotins` was drafted in this run but was swept into commit `350dc42` by a concurrent shared commit with a different message. Its pending audit-queue row records `350dc42`; the generated page-history marker reflects that commit hash/message. History was not rewritten.
- Audit queue: pending rows for this run are present in `data/evidence/audit-queue.csv`; the shared queue was committed by the audit daemon before this report commit. Later unrelated audit-queue edits from concurrent audit work remained dirty in the worktree and were not included in this report commit.

## Cite keys created or represented

### Folder 3 2

- simionov2023-danube-fish-seafood-pte-microplastics
- munoz1999-seafood-inorganic-arsenic
- amodio-cocchieri2000-farmed-fish-shellfish-alkyltins
- naess2020-norwegian-seafood-metals
- jakkielska2023-noodles-toxic-metals
- darko2014-seasonings-ghana-metals
- otitoju2018-noodle-products-nigeria-metals
- efsa2004-organotins-foodstuffs
- kharkwal2023-cooked-beans-vegetables-metals
- amarh2023-ghana-infant-food-heavy-metals
- elziani2024-instant-noodles-libya-metals
- hao2022-probabilistic-risk-rice-mining-county
- safwan2023-instant-soup-chicken-stock-jordan
- ding2023-peanut-cadmium-arsenic-transfer
- adegbola2015-nigeria-snacks-drinks-metals
- alrajhi2014-canned-food-chicken-stock-metals
- baki2018-st-martin-seafood-metals
- blair2017-us-peanut-heavy-metals
- bralatei2017-seaweed-inorganic-arsenic-field-method
- brizio2013-italian-food-supplements-metals
- brooke1981-fish-shellfish-inorganic-arsenic
- bua2016-aromatic-spices-metals-italy
- buchet1983-belgium-duplicate-meal-metals
- efsa2012-cadmium-dietary-exposure-europe
- charles2017-instant-noodles-nigeria-risk
- cherfi2014-algeria-fruits-vegetables-metals
- cirillo2010-campania-seafood-metals
- ec2004-scoop-heavy-metals-dietary-exposure
- dabeka1995-canadian-food-composites-metals
- dabeka2003-canadian-total-diet-mercury
- deroma2017-prepared-meals-italy-metals
- elbagermi2012-misurata-fruits-vegetables-metals
- falconer1983-north-sea-seafood-arsenic
- fattorini2004-cienfuegos-seafood-arsenic-speciation
- fattorini2006-marine-organisms-arsenic-speciation
- yu2023-zhejiang-beans-toxic-elements
- kongta2023-noodle-products-aluminum-thailand
- gu2014-liaoning-canned-fish-metals
- gu2019-maize-peanut-heavy-metals-guangxi
- guo2017-asian-rice-derived-products-metals
- huang2014-zhejiang-vegetables-heavy-metals
- hussain2019-plant-food-heavy-metal-review
- islam2014-bangladesh-cereals-pulses-metals
- islam2015-bangladesh-foods-heavy-metals
- islam2018-tangail-food-crops-heavy-metals
- iyabo2015-ekiti-staple-foods-metals
- jiang2020-henan-battery-factory-crops-metals
- kaise1988-marine-organisms-arsenic-speciation
- kukusamude2020-thai-rice-heavy-metals
- lehel2018-hungary-seafood-metals
- li2017-jiangsu-rice-cadmium-transfer
- lorenzana2009-seafood-arsenic-speciation
- loutfy2012-ismailia-foodstuffs-metals
- luvonga2021-seafood-arsenic-speciation
- maduabuchi2007-nigeria-beverages-arsenic-chromium
- pereira2008-ria-aveiro-mercury-review
- ziyaina2014-libya-spices-lead-cadmium
- mohammed2021-salah-al-din-noodles-metals
- redan2023-plant-milk-alternatives-elements
- norin1985-swedish-fish-arsenic-speciation
- novakov2021-serbia-mussels-metals-pahs
- bielecka2021-nuts-toxic-elements-poland
- oladoye2016-odo-ori-spices-metals
- ownsworth2019-estuarine-macroalgae-elements
- pan2016-zhejiang-vegetables-metals
- park2005-korean-seafood-arsenic-speciation
- reinke1975-fish-shellfish-inorganic-arsenic
- alam2019-lentil-arsenic-accumulation
- schoof2007-seafood-arsenic-speciation
- solidum2013-metro-manila-junk-food-metals
- tatahmentan2020-rice-grains-elements
- uneyama2007-arsenic-foods-cumulative-data
- uroko2020-ubani-canned-tomato-paste-metals
- voegborlo1999-libya-canned-tuna-metals
- wang2019-dietary-lead-guangzhou
- wang2020-jilin-total-diet-metals
- zanon2008-venice-lagoon-organotins
- zhao2016-xiamen-seafood-metals

### Folder 4 2

- gutierrez-ravelo2020-sarpa-salpa-metals-canary
- bauer2023-brazilian-sardine-metal-risk
- ulusoy2023-canned-tuna-toxic-metals
- efsa2023-heavy-metals-seaweed
- job2023-thondi-fish-metal-bioaccumulation
- jiang2026-organotin-seafood-hong-kong
- uc-peraza2022-yucatan-seafood-organotins
- suzuki2022-nano-mercury-seafood-exposure
- chen2019-china-oyster-organotins
- chung2020-hong-kong-seafood-organotins
- copat2013-mediterranean-fish-shellfish-metals
- grandjean2010-methylmercury-health-research
- ho2016-hong-kong-rock-shell-organotins
- barchiesi2020-shellfish-metals-central-italy
- kim2023-korea-fishery-products-metals
- harada1995-minamata-methylmercury-poisoning
- ho2014-hong-kong-seafood-organotins
- hwang2010-dried-seaweed-korea-metals
- lin2021-taiwan-seafood-mercury-tds
- tamele2020-african-seafood-metals-review
- khandaker2021-malaysian-seaweed-metalloids
- lee2016-taiwan-seafood-organotins
- sadighara2021-food-organotin-review
- mehouel2021-algeria-seafood-metals-review
- cherry2019-edible-seaweeds-risks-benefits
- olmedo2013-andalusia-fish-shellfish-metals
- pazi2017-aegean-fish-metal-risk
- djedjibegovic2020-bih-commercial-seafood-metals
- akkaya2025-marmara-fishery-products-metals

## Per-file states - folder 3 2

| File | State | Page / reason | Notes |
| --- | --- | --- | --- |
| 1-s2.0-S1382668923002491-main.pdf | ingested | simionov2023-danube-fish-seafood-pte-microplastics | wiki/sources/simionov2023-danube-fish-seafood-pte-microplastics.md |
| 1-s2.0-S2590157522001249-main.pdf | duplicate | fechner2022-bfr-meal-hg-cd-pb-ni-germany | DOI 10.1016/j.fochx.2022.100326 already in wiki/sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany.md |
| 10.1039@a904999a.pdf | ingested | munoz1999-seafood-inorganic-arsenic | wiki/sources/munoz1999-seafood-inorganic-arsenic.md |
| 10.1080@09637480050029638.pdf | ingested | amodio-cocchieri2000-farmed-fish-shellfish-alkyltins | wiki/sources/amodio-cocchieri2000-farmed-fish-shellfish-alkyltins.md |
| 10.1080@19393210.2020.1735533.pdf | ingested | naess2020-norwegian-seafood-metals | wiki/sources/naess2020-norwegian-seafood-metals.md |
| 10.2478_aucft-2023-0008.pdf | ingested | jakkielska2023-noodles-toxic-metals | wiki/sources/jakkielska2023-noodles-toxic-metals.md |
| 10.5897@ajfs2013.1107.pdf | ingested | darko2014-seasonings-ghana-metals | wiki/sources/darko2014-seasonings-ghana-metals.md |
| 11.pdf | ingested | otitoju2018-noodle-products-nigeria-metals | wiki/sources/otitoju2018-noodle-products-nigeria-metals.md |
| 2022_07_14_TDSElementsReport_1436.pdf | duplicate | fda-tds-elements-2018-2020 | SHA ba1f8c1... byte-identical FDA FY2018-2020 TDS Elements Report already in wiki/sources/fda-tds-elements-2018-2020.md |
| 8.2.4 Anti-fouling Industry-wide TBT antifouling contamination and regulation.pdf | skipped | no-occurrence-data | food-industry environmental-management/antifouling chapter; no source-owned food occurrence table |
| A-comprehensive-review-of-algae-consortium-for-wastewater-bioremediation-and-biodiesel-production.pdf | skipped | no-occurrence-data | wastewater bioremediation/biodiesel review; no food/product occurrence values |
| A-review-Hydrochar-as-potential-adsorbents-for-wastewater-treatment-and-CO2-adsorption.pdf | skipped | no-occurrence-data | hydrochar adsorbent review for wastewater/CO2; no food/product occurrence values |
| A-review-on-algae-biosorption-for-the-removal-of-hazardous-pollutants-from-wastewater-Limiting.pdf | skipped | no-occurrence-data | algae biosorption wastewater review; no food/product occurrence values |
| A-review-on-synthesis-methods-and-recent-applications-of-nanomaterial-in-wastewater-treatment.pdf | skipped | no-occurrence-data | nanomaterial wastewater-treatment review; no food/product occurrence values |
| Algae-Based-Biosorbent-for-Removal-of-Heavy-Metals.pdf | skipped | no-occurrence-data | algae biosorbent/removal source; no edible product occurrence data |
| Application-of-Electroremediation-Coupled-with-Phytoremediation-Techniques-for-the-Removal.pdf | skipped | no-occurrence-data | electroremediation/phytoremediation chapter; no food crop/product occurrence values |
| Cellulose-hydrogel-and-its-derivatives-A-review-of-application-in-heavy-metal-adsorption.pdf | skipped | no-occurrence-data | cellulose hydrogel adsorption review; no food/product occurrence values |
| EFSA Journal - 2004 -  - Opinion of the Scientific Panel on contaminants in the food chain  CONTAM  to assess the health.pdf | ingested | efsa2004-organotins-foodstuffs | wiki/sources/efsa2004-organotins-foodstuffs.md |
| EFSA Journal - 2009 -  - Scientific Opinion on Arsenic in Food.pdf | duplicate | efsa-arsenic-contam-2009 | DOI 10.2903/j.efsa.2009.1351 already represented by wiki/sources/efsa-arsenic-contam-2009.md; folder 3 copy is a verified redownload |
| EFSA Journal - 2015 -  - Scientific Opinion on the risks to public health related to the presence of nickel in food and.pdf | duplicate | efsa2015-nickel-food-water | DOI 10.2903/j.efsa.2015.4002 already in wiki/sources/efsa2015-nickel-food-water.md |
| EPA-HQ-OW-2022-0801-0528_content.pdf | duplicate | fda-tds-elements-2018-2020 | SHA ba1f8c1... byte-identical to FDA FY2018-2020 TDS Elements Report already in wiki/sources/fda-tds-elements-2018-2020.md |
| Emerging-nanotechnology-approaches-for-sustainable-water-treatment-and-heavy-metals-removal.pdf | skipped | no-occurrence-data | water-treatment nanotechnology review; no food/product occurrence values |
| FSN3-11-7581.pdf | ingested | kharkwal2023-cooked-beans-vegetables-metals | wiki/sources/kharkwal2023-cooked-beans-vegetables-metals.md |
| Health-risk-assessment-of-some-selected-heavy-metals-in-infant-food-sold-in-Wa-Ghana.pdf | ingested | amarh2023-ghana-infant-food-heavy-metals | commit 8a682f8; merge-enhanced DOI duplicate for Wa Ghana infant food heavy metals |
| Heavy-Metal-Removal-Using-Plant-Origin-Biomass-and-Agricultural-Waste-Derived-Biomass-from.pdf | skipped | no-occurrence-data | biomass adsorbent review for heavy-metal removal; no food/product occurrence values |
| Heavy-metal-remediation-from-wastewater-using-microalgae-Recent-advances-and-future-trends.pdf | skipped | no-occurrence-data | microalgae wastewater-remediation review; no food/product occurrence values |
| Introduction-of-adsorption-techniques-for-heavy-metals-remediation.pdf | skipped | no-occurrence-data | wastewater adsorption/remediation chapter already represented as context page idris2023; no food/product occurrence data for this run |
| JFDS-85-260.pdf | duplicate | schaefer2020-cadmium-mitigation-strategies | DOI 10.1111/1750-3841.14997 already in wiki/sources/schaefer2020-cadmium-mitigation-strategies.md |
| JOPAS.V23I2.3111.pdf | ingested | elziani2024-instant-noodles-libya-metals | wiki/sources/elziani2024-instant-noodles-libya-metals.md |
| Phycoremediation-of-heavy-metals-and-production-of-biofuel-from-generated-algal-biomass-a.pdf | skipped | no-occurrence-data | phycoremediation/biofuel review; no edible product occurrence data |
| Probabilistic-health-risk-assessment-of-inorganic-arsenic-and-some-heavy-metals-in-rice-produced.pdf | ingested | hao2022-probabilistic-risk-rice-mining-county | commit 1ab877d; merge-enhanced DOI duplicate for Xiangtan China rice tAs iAs Cd Pb Cr tHg |
| Role-of-rhizosphere-microbiome-during-phytoremediation-of-heavy-metals.pdf | skipped | no-occurrence-data | rhizosphere phytoremediation review; no food crop occurrence table |
| Safwan23125.pdf | ingested | safwan2023-instant-soup-chicken-stock-jordan | wiki/sources/safwan2023-instant-soup-chicken-stock-jordan.md |
| Source-based-health-risk-assessment-of-heavy-metal-contamination-in-soil-a-case-study-from.pdf | skipped | no-occurrence-data | soil-only source-based health-risk assessment in mining region; no food/crop/product occurrence values |
| Spatiotemporal-variation-of-soil-heavy-metals-in-China-The-pollution-status-and-risk-assessment.pdf | skipped | no-occurrence-data | soil heavy-metals review; no measured food/crop/product occurrence values |
| Synthesis-of-zeolites-by-in-situ-conversion-of-geopolymers-and-their-performance-of-heavy.pdf | skipped | no-occurrence-data | zeolite adsorbent/removal paper; no food/product occurrence values |
| TDS-ReportSupplement-FY2018toFY2020-ElementAnalyticalResults-07082022.pdf | duplicate | fda2022-tds-elements-fy2018-fy2020 | FDA TDS FY2018-2020 report supplement already recorded as corroborating artifact in wiki/sources/fda2022-tds-elements-fy2018-fy2020.md |
| The-role-of-green-nanomaterials-as-effective-adsorbents-and-applications-in-wastewater-treatment.pdf | skipped | no-occurrence-data | green nanomaterial adsorbent/wastewater review; no food/product occurrence values |
| Total diet study metals and other elements.pdf | duplicate | fera2015-uk-tds-metals | FSA project summary page for FS102081 already represented by wiki/sources/fera2015-uk-tds-metals.md |
| Use-of-microalgae-for-the-removal-of-emerging-contaminants-from-wastewater.pdf | skipped | no-occurrence-data | microalgae wastewater/emerging-contaminant review; no food/product occurrence values |
| agronomy-13-02778.pdf | ingested | ding2023-peanut-cadmium-arsenic-transfer | wiki/sources/ding2023-peanut-cadmium-arsenic-transfer.md |
| ajol-file-journals_314_articles_121833_submission_proof_121833-3745-334648-1-10-20150909.pdf | ingested | adegbola2015-nigeria-snacks-drinks-metals | wiki/sources/adegbola2015-nigeria-snacks-drinks-metals.md |
| al-rajhi2014.pdf | ingested | alrajhi2014-canned-food-chicken-stock-metals | wiki/sources/alrajhi2014-canned-food-chicken-stock-metals.md |
| aliredha2020.pdf | skipped | no-occurrence-data | biosorption review for aqueous media; no food/product occurrence data |
| ambient-wqc-tributyltin-final.pdf | skipped | no-occurrence-data | EPA aquatic-life water-quality criterion for tributyltin; regulatory water/ecotoxicology context, not food occurrence |
| arumugam2018.pdf | skipped | no-occurrence-data | seaweed wastewater-treatment review; biosorption/removal tables, no edible product occurrence values |
| baki2018.pdf | ingested | baki2018-st-martin-seafood-metals | wiki/sources/baki2018-st-martin-seafood-metals.md |
| blair2017.pdf | ingested | blair2017-us-peanut-heavy-metals | wiki/sources/blair2017-us-peanut-heavy-metals.md |
| bralatei2017.pdf | ingested | bralatei2017-seaweed-inorganic-arsenic-field-method | wiki/sources/bralatei2017-seaweed-inorganic-arsenic-field-method.md |
| brizio2013.pdf | ingested | brizio2013-italian-food-supplements-metals | wiki/sources/brizio2013-italian-food-supplements-metals.md |
| brooke1981.pdf | ingested | brooke1981-fish-shellfish-inorganic-arsenic | wiki/sources/brooke1981-fish-shellfish-inorganic-arsenic.md |
| bua2016.pdf | ingested | bua2016-aromatic-spices-metals-italy | wiki/sources/bua2016-aromatic-spices-metals-italy.md |
| buchet1983.pdf | ingested | buchet1983-belgium-duplicate-meal-metals | wiki/sources/buchet1983-belgium-duplicate-meal-metals.md |
| cadmium-dietary-exposure-in-the-european-population-2012.pdf | ingested | efsa2012-cadmium-dietary-exposure-europe | wiki/sources/efsa2012-cadmium-dietary-exposure-europe.md |
| charles2017.pdf | ingested | charles2017-instant-noodles-nigeria-risk | wiki/sources/charles2017-instant-noodles-nigeria-risk.md |
| cherfi2014.pdf | ingested | cherfi2014-algeria-fruits-vegetables-metals | wiki/sources/cherfi2014-algeria-fruits-vegetables-metals.md |
| cirillo2010.pdf | ingested | cirillo2010-campania-seafood-metals | wiki/sources/cirillo2010-campania-seafood-metals.md |
| cs_contaminants_catalogue_scoop_3-2-11_heavy_metals_report_en.pdf | ingested | ec2004-scoop-heavy-metals-dietary-exposure | wiki/sources/ec2004-scoop-heavy-metals-dietary-exposure.md |
| dabeka1995.pdf | ingested | dabeka1995-canadian-food-composites-metals | wiki/sources/dabeka1995-canadian-food-composites-metals.md |
| dabeka2003.pdf | ingested | dabeka2003-canadian-total-diet-mercury | wiki/sources/dabeka2003-canadian-total-diet-mercury.md |
| deroma2017.pdf | ingested | deroma2017-prepared-meals-italy-metals | wiki/sources/deroma2017-prepared-meals-italy-metals.md |
| elbagermi2012.pdf | ingested | elbagermi2012-misurata-fruits-vegetables-metals | wiki/sources/elbagermi2012-misurata-fruits-vegetables-metals.md |
| falconer1983.pdf | ingested | falconer1983-north-sea-seafood-arsenic | wiki/sources/falconer1983-north-sea-seafood-arsenic.md |
| fattorini2004.pdf | ingested | fattorini2004-cienfuegos-seafood-arsenic-speciation | wiki/sources/fattorini2004-cienfuegos-seafood-arsenic-speciation.md |
| fattorini2006.pdf | ingested | fattorini2006-marine-organisms-arsenic-speciation | wiki/sources/fattorini2006-marine-organisms-arsenic-speciation.md |
| fnut-10-1209574.pdf | duplicate | su2023-arsenic-brown-rice-benefits-risks | DOI 10.3389/fnut.2023.1209574 already in wiki/sources/su2023-arsenic-brown-rice-benefits-risks.md |
| foods-12-03300.pdf | ingested | yu2023-zhejiang-beans-toxic-elements | wiki/sources/yu2023-zhejiang-beans-toxic-elements.md |
| foods-12-03340.pdf | duplicate | scutarasu2023-heavy-metals-foods-beverages | DOI 10.3390/foods12183340 already in wiki/sources/scutarasu2023-heavy-metals-foods-beverages.md |
| foods-12-03960.pdf | ingested | kongta2023-noodle-products-aluminum-thailand | wiki/sources/kongta2023-noodle-products-aluminum-thailand.md |
| gardener2019.pdf | duplicate | gardener2019-pb-cd-us-infant-formula-baby-foods | DOI 10.1016/j.scitotenv.2018.09.026 already in wiki/sources/gardener2019-pb-cd-us-infant-formula-baby-foods.md |
| gu2014.pdf | ingested | gu2014-liaoning-canned-fish-metals | wiki/sources/gu2014-liaoning-canned-fish-metals.md |
| gu2017.pdf | skipped | no-occurrence-data | urban exposed-lawn soil study; no food crop or supply-chain occurrence data |
| gu2019.pdf | ingested | gu2019-maize-peanut-heavy-metals-guangxi | wiki/sources/gu2019-maize-peanut-heavy-metals-guangxi.md |
| guo2017 (1).pdf | duplicate | guo2017-asian-rice-derived-products-metals | within-folder duplicate of guo2017.pdf; same paper routed to wiki/sources/guo2017-asian-rice-derived-products-metals.md |
| guo2017.pdf | ingested | guo2017-asian-rice-derived-products-metals | wiki/sources/guo2017-asian-rice-derived-products-metals.md |
| hou2020.pdf | skipped | no-occurrence-data | soil/bioremediation review; no routeable food/product occurrence table |
| huang2014 (1).pdf | ingested | huang2014-zhejiang-vegetables-heavy-metals | wiki/sources/huang2014-zhejiang-vegetables-heavy-metals.md |
| huang2014.pdf | duplicate | huang2014-zhejiang-vegetables-heavy-metals | within-folder duplicate of huang2014 (1).pdf; existing source page raw_path uses the (1) copy |
| hussain2019.pdf | ingested | hussain2019-plant-food-heavy-metal-review | wiki/sources/hussain2019-plant-food-heavy-metal-review.md |
| islam2014.pdf | ingested | islam2014-bangladesh-cereals-pulses-metals | wiki/sources/islam2014-bangladesh-cereals-pulses-metals.md |
| islam2015.pdf | ingested | islam2015-bangladesh-foods-heavy-metals | wiki/sources/islam2015-bangladesh-foods-heavy-metals.md |
| islam2018.pdf | ingested | islam2018-tangail-food-crops-heavy-metals | wiki/sources/islam2018-tangail-food-crops-heavy-metals.md |
| iyabo2015.pdf | ingested | iyabo2015-ekiti-staple-foods-metals | wiki/sources/iyabo2015-ekiti-staple-foods-metals.md |
| jiang2020.pdf | ingested | jiang2020-henan-battery-factory-crops-metals | wiki/sources/jiang2020-henan-battery-factory-crops-metals.md |
| kaise1988.pdf | ingested | kaise1988-marine-organisms-arsenic-speciation | wiki/sources/kaise1988-marine-organisms-arsenic-speciation.md |
| kukusamude2021.pdf | ingested | kukusamude2020-thai-rice-heavy-metals | wiki/sources/kukusamude2020-thai-rice-heavy-metals.md |
| lee2019.pdf | duplicate | lee2019-food-processing-heavy-metals-migration | DOI 10.1186/s13765-019-0470-0 already in wiki/sources/lee2019-food-processing-heavy-metals-migration.md |
| lehel2018.pdf | ingested | lehel2018-hungary-seafood-metals | wiki/sources/lehel2018-hungary-seafood-metals.md |
| li2017.pdf | ingested | li2017-jiangsu-rice-cadmium-transfer | wiki/sources/li2017-jiangsu-rice-cadmium-transfer.md |
| lorenzana2009.pdf | ingested | lorenzana2009-seafood-arsenic-speciation | wiki/sources/lorenzana2009-seafood-arsenic-speciation.md |
| loutfy2012.pdf | ingested | loutfy2012-ismailia-foodstuffs-metals | wiki/sources/loutfy2012-ismailia-foodstuffs-metals.md |
| luvonga2021.pdf | ingested | luvonga2021-seafood-arsenic-speciation | wiki/sources/luvonga2021-seafood-arsenic-speciation.md |
| maduabuchi2007.pdf | ingested | maduabuchi2007-nigeria-beverages-arsenic-chromium | wiki/sources/maduabuchi2007-nigeria-beverages-arsenic-chromium.md |
| mazur2018.pdf | skipped | no-occurrence-data | brown marine macroalgae industrial-wastewater metal-removal review; no edible product occurrence data |
| measurement-of-the-concentrations-of-metals-and-other-elements-from-the-2014-uk-total-diet-study.pdf | duplicate | fera2015-uk-tds-metals | FSA 2014 UK TDS information sheet points to same FS102081 Fera study already in wiki/sources/fera2015-uk-tds-metals.md |
| mercury-pollution-in-ria-de-aveiro-portugal-a-review-of-the-1f374vaskm.pdf | ingested | pereira2008-ria-aveiro-mercury-review | wiki/sources/pereira2008-ria-aveiro-mercury-review.md |
| miyashita2010.pdf | skipped | no-extractable-occurrence-data | seafood arsenic metabolism/speciation review; extracted text has chemical-structure tables but no clean source-owned product concentration table suitable for routing |
| mohamed2014.pdf | ingested | ziyaina2014-libya-spices-lead-cadmium | wiki/sources/ziyaina2014-libya-spices-lead-cadmium.md |
| mohammed2021.pdf | ingested | mohammed2021-salah-al-din-noodles-metals | wiki/sources/mohammed2021-salah-al-din-noodles-metals.md |
| muhammadekramulmahmud2016.pdf | skipped | no-occurrence-data | polypyrrole adsorbent wastewater review; no food/product occurrence data |
| nickel-estimate-of-long-term-intake-via-food-based-on-the-bfr-meal-study.pdf | duplicate | bfr2022-nickel-dietary-intake-germany-meal | BfR nickel communication already represented by wiki/sources/bfr2022-nickel-dietary-intake-germany-meal.md |
| nihms-1907158.pdf | ingested | redan2023-plant-milk-alternatives-elements | wiki/sources/redan2023-plant-milk-alternatives-elements.md |
| noaa_37993_DS1.pdf | skipped | no-occurrence-data | C-MERC Sources to Seafood mercury synthesis report; no source-owned product concentration table for ingest |
| norin1985.pdf | ingested | norin1985-swedish-fish-arsenic-speciation | wiki/sources/norin1985-swedish-fish-arsenic-speciation.md |
| novakov2021.pdf | ingested | novakov2021-serbia-mussels-metals-pahs | wiki/sources/novakov2021-serbia-mussels-metals-pahs.md |
| nutrients-13-03606-v2.pdf | ingested | bielecka2021-nuts-toxic-elements-poland | wiki/sources/bielecka2021-nuts-toxic-elements-poland.md |
| olmedo2013.pdf | duplicate | olmedo2013-andalusia-fish-shellfish-metals | same PDF/paper already ingested from folder 4 2 as wiki/sources/olmedo2013-andalusia-fish-shellfish-metals.md |
| olusakino2016.pdf | ingested | oladoye2016-odo-ori-spices-metals | wiki/sources/oladoye2016-odo-ori-spices-metals.md |
| ownsworth2019.pdf | ingested | ownsworth2019-estuarine-macroalgae-elements | wiki/sources/ownsworth2019-estuarine-macroalgae-elements.md |
| pan2016.pdf | ingested | pan2016-zhejiang-vegetables-metals | wiki/sources/pan2016-zhejiang-vegetables-metals.md |
| park2005.pdf | ingested | park2005-korean-seafood-arsenic-speciation | wiki/sources/park2005-korean-seafood-arsenic-speciation.md |
| peng2016.pdf | skipped | no-occurrence-data | regional probabilistic risk model over soil/water/sediment and modeled vegetable uptake; no measured food/crop concentration table |
| reinke1975.pdf | ingested | reinke1975-fish-shellfish-inorganic-arsenic | wiki/sources/reinke1975-fish-shellfish-inorganic-arsenic.md |
| repository_1016.pdf | duplicate | katyal2020-instant-noodles-canada-metals | Title/byline match existing wiki/sources/katyal2020-instant-noodles-canada-metals.md; no DOI in source; brand-firewall compliant duplicate skip |
| rose2007.pdf | duplicate | rose2007-seaweed-arsenic-forms-uk | same DOI/source already ingested by parallel seaweed-folder session; folder 3 copy skipped to avoid touching seaweed workflow |
| roya2016.pdf | duplicate | roya2016-iran-torbat-heidarieh-rice-metals | DOI 10.1080/19393210.2016.1247918 already represented by existing June 1 source page |
| s00217-025-04775-1.pdf | duplicate | zverina2025-plant-dairy-toxic-elements | DOI 10.1007/s00217-025-04775-1 already in wiki/sources/zverina2025-plant-dairy-toxic-elements.md |
| s12011-024-04438-4.pdf | duplicate | cwielagniec2025-nuts-cd-pb-cr-ni-poland | DOI 10.1007/s12011-024-04438-4 already in wiki/sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland.md |
| s41598-019-45855-z.pdf | ingested | alam2019-lentil-arsenic-accumulation | wiki/sources/alam2019-lentil-arsenic-accumulation.md |
| s41598-026-44766-0.pdf | duplicate | good2026-plant-milk-heavy-metals | DOI 10.1038/s41598-026-44766-0 already in wiki/sources/good2026-plant-milk-heavy-metals.md |
| schoof2007.pdf | ingested | schoof2007-seafood-arsenic-speciation | wiki/sources/schoof2007-seafood-arsenic-speciation.md |
| sh74p023.pdf | duplicate | shindoh2010-cadmium-soy-sauce-miso-processing | SHA/raw duplicate of existing wiki/sources/shindoh2010-cadmium-soy-sauce-miso-processing.md |
| solidum2013.pdf | ingested | solidum2013-metro-manila-junk-food-metals | wiki/sources/solidum2013-metro-manila-junk-food-metals.md |
| spayd2012.pdf | skipped | no-occurrence-data | drinking-water arsenic speciation/exposure paper; no food/product occurrence data |
| tajdar-oranj2018.pdf | duplicate | tajdar-oranj2018-iran-instant-noodles-metals | DOI 10.1007/s11356-018-3030-y already represented by existing June 1 source page |
| tatahmentan2020.pdf | ingested | tatahmentan2020-rice-grains-elements | wiki/sources/tatahmentan2020-rice-grains-elements.md |
| taylor2016.pdf | duplicate | taylor2016-new-england-seaweed-arsenic | same DOI/source already ingested by parallel seaweed-folder session; folder 3 copy skipped to avoid touching seaweed workflow |
| total-diet-study-of-metals-and-other-elements-in-food_0.pdf | duplicate | fera2015-uk-tds-metals | SHA 42f26f... matches existing wiki/sources/fera2015-uk-tds-metals.md raw_sha256 |
| uneyama2007.pdf | ingested | uneyama2007-arsenic-foods-cumulative-data | wiki/sources/uneyama2007-arsenic-foods-cumulative-data.md |
| uroko2019.pdf | ingested | uroko2020-ubani-canned-tomato-paste-metals | wiki/sources/uroko2020-ubani-canned-tomato-paste-metals.md |
| voegborlo1999.pdf | ingested | voegborlo1999-libya-canned-tuna-metals | wiki/sources/voegborlo1999-libya-canned-tuna-metals.md |
| wang2019.pdf | ingested | wang2019-dietary-lead-guangzhou | wiki/sources/wang2019-dietary-lead-guangzhou.md |
| wang2020.pdf | ingested | wang2020-jilin-total-diet-metals | wiki/sources/wang2020-jilin-total-diet-metals.md |
| yu2021.pdf | skipped | no-occurrence-data | Guizhou China soil pollution/risk assessment; no food/crop/product occurrence data |
| yunus2020.pdf | skipped | no-occurrence-data | activated carbon/agricultural waste heavy-metal adsorption paper; no food/product occurrence values |
| zanon2008.pdf | ingested | zanon2008-venice-lagoon-organotins | wiki/sources/zanon2008-venice-lagoon-organotins.md |
| zeraatkar2016.pdf | skipped | no-occurrence-data | algae biosorption/heavy-metal removal review; no edible product occurrence values |
| zhao2016.pdf | ingested | zhao2016-xiamen-seafood-metals | wiki/sources/zhao2016-xiamen-seafood-metals.md |

## Per-file states - folder 4 2

| File | State | Page / reason | Notes |
| --- | --- | --- | --- |
| 1-s2.0-S0025326X22004581-main.pdf | skipped | no-occurrence-data | Marine biotoxin paper on yessotoxins and pectenotoxins in phytoplankton/shellfish; no HMI heavy-metal occurrence data. |
| 10.3390@ijerph17197212.pdf | ingested | gutierrez-ravelo2020-sarpa-salpa-metals-canary | wiki/sources/gutierrez-ravelo2020-sarpa-salpa-metals-canary.md |
| Assessment-of-Human-Health-Risk-of-Metal-Loid-Content-in-Brazilian-Sardine-Along-the-Southwestern.pdf | ingested | bauer2023-brazilian-sardine-metal-risk | wiki/sources/bauer2023-brazilian-sardine-metal-risk.md |
| Determination-of-toxic-metals-in-canned-tuna-sold-in-developed-and-developing-countries-Health.pdf | ingested | ulusoy2023-canned-tuna-toxic-metals | wiki/sources/ulusoy2023-canned-tuna-toxic-metals.md |
| EFS2-21-e07798.pdf | ingested | efsa2023-heavy-metals-seaweed | wiki/sources/efsa2023-heavy-metals-seaweed.md |
| EJABF_Volume 17_Issue 3_Pages 57-68.pdf | skipped | no-occurrence-data | Ulva sp. environmental bioindicator study for Mediterranean coastal metal pollution; no food/market edible-product occurrence frame. |
| Evaluation-of-water-quality-and-bioaccumulation-of-metals-in-commercially-important-fishes.pdf | ingested | job2023-thondi-fish-metal-bioaccumulation | wiki/sources/job2023-thondi-fish-metal-bioaccumulation.md |
| Health risks of exposure to organotin compounds via seafood consumption after their legal ban - ScienceDirect.pdf | ingested | jiang2026-organotin-seafood-hong-kong | wiki/sources/jiang2026-organotin-seafood-hong-kong.md |
| Organotin-Contamination-in-Seafood-from-the-Yucat-n-Peninsula-Mexico-Is-There-a-Potential.pdf | ingested | uc-peraza2022-yucatan-seafood-organotins | wiki/sources/uc-peraza2022-yucatan-seafood-organotins.md |
| Presence-of-nano-sized-mercury-containing-particles-in-seafoods-and-an-estimate-of-dietary.pdf | ingested | suzuki2022-nano-mercury-seafood-exposure | wiki/sources/suzuki2022-nano-mercury-seafood-exposure.md |
| chen2019.pdf | ingested | chen2019-china-oyster-organotins | wiki/sources/chen2019-china-oyster-organotins.md |
| chung2020.pdf | ingested | chung2020-hong-kong-seafood-organotins | wiki/sources/chung2020-hong-kong-seafood-organotins.md |
| copat2013.pdf | ingested | copat2013-mediterranean-fish-shellfish-metals | wiki/sources/copat2013-mediterranean-fish-shellfish-metals.md |
| ehp-0901757.pdf | ingested | grandjean2010-methylmercury-health-research | wiki/sources/grandjean2010-methylmercury-health-research.md |
| file (1).pdf | duplicate | ho2016-hong-kong-rock-shell-organotins | Byte-identical duplicate of file.pdf (SHA-256 aa8103b9ddd1e64c4301781869199a6ab0748f965ad17cfa9415bbeb5eb4d5ce). |
| file.pdf | ingested | ho2016-hong-kong-rock-shell-organotins | wiki/sources/ho2016-hong-kong-rock-shell-organotins.md |
| foods-09-01720.pdf | ingested | barchiesi2020-shellfish-metals-central-italy | wiki/sources/barchiesi2020-shellfish-metals-central-italy.md |
| foods-12-03750.pdf | ingested | kim2023-korea-fishery-products-metals | wiki/sources/kim2023-korea-fishery-products-metals.md |
| foods-14-00451.pdf | duplicate | garofalo2025-seafood-cd-pb-hg-italy-10yr | DOI 10.3390/foods14030451 already represented by wiki/sources/garofalo2025-seafood-cd-pb-hg-italy-10yr.md. |
| foods-14-03725-v2.pdf | duplicate | singhato2025-thailand-seafood-heavy-metals | DOI 10.3390/foods14213725 already represented by wiki/sources/singhato2025-thailand-seafood-heavy-metals.md. |
| harada1995.pdf | ingested | harada1995-minamata-methylmercury-poisoning | wiki/sources/harada1995-minamata-methylmercury-poisoning.md |
| ho2014.pdf | ingested | ho2014-hong-kong-seafood-organotins | wiki/sources/ho2014-hong-kong-seafood-organotins.md |
| hwang2010.pdf | ingested | hwang2010-dried-seaweed-korea-metals | wiki/sources/hwang2010-dried-seaweed-korea-metals.md |
| ijerph-18-12227.pdf | ingested | lin2021-taiwan-seafood-mercury-tds | wiki/sources/lin2021-taiwan-seafood-mercury-tds.md |
| ijerph-19-04944.pdf | skipped | no-occurrence-data | Biochar/active-capping remediation paper for heavy metals in marine dredged sediments; no food/product occurrence data. |
| ijerph-19-16767.pdf | skipped | no-occurrence-data | Review of in situ remediation of heavy-metal-contaminated sediment; no food/product occurrence data. |
| ijms-25-01590.pdf | duplicate | zhuzhassarova2024-fish-seafood-central-asia-review | DOI 10.3390/ijms25031590 already represented by wiki/sources/zhuzhassarova2024-fish-seafood-central-asia-review.md. |
| jmse-08-00344-v2.pdf | ingested | tamele2020-african-seafood-metals-review | wiki/sources/tamele2020-african-seafood-metals-review.md |
| khandaker2021.pdf | ingested | khandaker2021-malaysian-seaweed-metalloids | wiki/sources/khandaker2021-malaysian-seaweed-metalloids.md |
| lee2016.pdf | ingested | lee2016-taiwan-seafood-organotins | wiki/sources/lee2016-taiwan-seafood-organotins.md |
| main.pdf | ingested | sadighara2021-food-organotin-review | wiki/sources/sadighara2021-food-organotin-review.md |
| mehouel2021.pdf | ingested | mehouel2021-algeria-seafood-metals-review | wiki/sources/mehouel2021-algeria-seafood-metals-review.md |
| nuy066.pdf | ingested | cherry2019-edible-seaweeds-risks-benefits | wiki/sources/cherry2019-edible-seaweeds-risks-benefits.md |
| olmedo2013.pdf | ingested | olmedo2013-andalusia-fish-shellfish-metals | wiki/sources/olmedo2013-andalusia-fish-shellfish-metals.md |
| pazi2017.pdf | ingested | pazi2017-aegean-fish-metal-risk | wiki/sources/pazi2017-aegean-fish-metal-risk.md |
| s41598-020-70205-9.pdf | ingested | djedjibegovic2020-bih-commercial-seafood-metals | wiki/sources/djedjibegovic2020-bih-commercial-seafood-metals.md |
| shamsel-din2014.pdf | skipped | no-occurrence-data | Seaweeds-as-bioindicators coastal hot-spot paper with water/sediment/algae environmental data; no food or market occurrence frame. |
| sustainability-13-12311.pdf | skipped | no-occurrence-data | Seaweed biomass biosorption/remediation review for heavy metals in aqueous solutions; no product occurrence data. |
| sustainability-17-00701.pdf | skipped | no-occurrence-data | Coastal wetland sediment heavy-metal pollution/ecology review; no source-owned food/product concentration table. |
| toxics-13-00153-v2.pdf | ingested | akkaya2025-marmara-fishery-products-metals | wiki/sources/akkaya2025-marmara-fishery-products-metals.md |
| toxics-13-00333-v2.pdf | duplicate | mititelu2025-heavy-metal-food-contamination-review | Existing review page wiki/sources/mititelu2025-heavy-metal-food-contamination-review.md represents the same Toxics 2025 review. |
