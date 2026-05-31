# Manual-fetch ingest batch report — 2026-05-31

## Tick 2026-05-31T15:05:48.077Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-fruit-snacks-pb-product_2025_10-3389-fnut-2025-1513343.pdf`: off-topic auto-fetch (opinion piece on investigator bias, zero heavy-metal data)

## Tick 2026-05-31T15:20:24.269Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-fruit-snacks-tas-product_2023_10-33088-jp-v2i1-365.pdf`: byte-identical to sofyan2023-banana-steamed-cake-metals-indonesia

## Tick 2026-05-31T15:23:21.798Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-leafy-vegetables-other-pb-product_2024_10-62051-10-62051-ijnres-v2n1-21.pdf`: true-duplicate-conflict — parallel-session race with prior commit a12d7a2 produced `wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo.md` covering same DOI 10.62051/ijnres.v2n1.21; both pages now committed and audited, Karen to choose winner.

## Tick 2026-05-31T15:39:58.287Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-matcha-al-product_2025_10-54536-ajlsi-v4i2-5050.pdf`: discover false-positive on "aluminum foil" labware — no heavy-metal data in source.

## Tick 2026-05-31T15:43:12.831Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-matcha-pb-product_2022_10-5650-jos-ess22135.pdf`: no-heavy-metal-data — Shirai 2022 (jos.ess22135) is an organic-acid HPLC study (quinic, oxalic, malic, succinic, citric in green tea); zero Pb/Cd/As/Hg/etc. measurements; second consecutive `auto-matcha-*` false positive in the auto-fetched batch.

## Tick 2026-05-31T15:46:22.110Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-matcha-pb-product_2025_the-association-between-caffeinated-beverages-consumption-with-sociodemographic-.pdf`: off-topic — Zubir 2025 USM dietetics dissertation (caffeine consumption survey, no heavy-metal data); third consecutive `auto-matcha-*` discover false positive; PDF moved to skipped/skip_no-heavy-metal-data/, tracker row marked stopped, stop-report entry appended at commit 45f9a62.

## Tick 2026-05-31T15:57:35.426Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/01_Fruits_and_Fruit_Products/FDA Total Diet Study Report_ Fiscal Years 2018-2020 Elements Data.pdf`: pdf-already-ingested-clean fda-tds-elements-2018-2020 (sha256 match to raw/reports/2022_07_14_TDSElementsReport_1436.pdf; primary page updated 2026-05-20; audit completed 2026-05-20 verdict REVISE)

## Tick 2026-05-31T16:00:14.425Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `mawari2022-heavy-metals-fruits-vegetables-india` (raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/01_Fruits_and_Fruit_Products/Heavy Metal Accumulation in Fruits and Vegetables and Its Health Risk Assessment.pdf)

## Tick 2026-05-31T16:11:05.394Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 0
- Failed: 1

### Failed
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/01_Fruits_and_Fruit_Products/Levels of Trace Elements in Commercial Fruit Juices Consumed in Jeddah City, Saudi Arabia.pdf`: unrecognized final line: "`STOP: pdf-already-ingested-clean farid2010-fruit-juices-jeddah-trace-elements (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit)`"

## Tick 2026-05-31T16:14:53.032Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/01_Fruits_and_Fruit_Products/Survey of total arsenic and inorganic arsenic in apple and pear juice.pdf`: pdf-already-ingested-clean fsanz2012-arsenic-apple-pear-juice-australia-nz (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit)

## Tick 2026-05-31T16:18:56.321Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/Cadmium and Lead in Wild Edible Mushrooms from the Eastern Region of Poland's 'Green Lungs'.pdf`: pdf-already-ingested-clean mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit)

## Tick 2026-05-31T16:21:43.794Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry.pdf`: pdf-already-ingested-clean trandafir2012-tin-canned-foods-icp-ms (SHA-identical to MFK_ root at `cf02363…fe8862`; existing page `wiki/sources/trandafir2012-tin-canned-foods-icp-ms.md` updated 2026-05-20 post-cutoff, audit-revised, routing clean — skill v2.0 Phase 1 step 1 skip rule)

## Tick 2026-05-31T16:47:04.646Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/Distribution of Cadmium in Fresh Vegetables Marketed in the Yangtze River Delta Region and Health Risk Assessment.pdf`: kimi-corruption-off-topic-pdf skoko2022-patulin-polyphenol-croatian-apples (actual content is patulin+polyphenols in apples, not cadmium in vegetables; no heavy-metals data to ingest)

## Tick 2026-05-31T16:50:48.064Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/Exposure to Lead and Cadmium in the Sixth Total Diet Study - China.pdf`: duplicate-source-pages KADC_exposure-to-lead-and-cadmium-in-the-sixth-total-di (DOI 10.46234/ccdcw2022.045 already exists on two wiki source pages with different cite-keys — `zhao2022-china-sixth-tds-pb-cd` and `zhao2022-china-tds6-lead-cadmium-exposure`; needs Karen to pick canonical cite-key and delete the other before any further ingest)

## Tick 2026-05-31T16:53:56.421Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/The First Hong Kong Total Diet Study_ Metallic Contaminants.pdf`: pdf-already-ingested-clean cfs2013-hktds-metallic-contaminants (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit; PROMOTE verdict)

## Tick 2026-05-31T16:58:01.100Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/The Potential Health Risk Associated with Edible Vegetables Grown on Cr(VI) Polluted Soils.pdf`: kimi-corruption-off-topic-pdf li-zhang-han-2020-ijerph-online-health-community-price-premiums (actual content is Chinese online-doctor pricing econometrics, DOI 10.3390/ijerph17041326; no heavy-metals data to ingest)

## Tick 2026-05-31T17:02:47.874Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/Determination of Some Heavy Metals and Elements in Honeybee and Honey Samples from Saudi Arabia.pdf`: already-ingested-and-audited (aljedani2017-honeybee-honey-saudi-arabia, updated 2026-05-20, audit verdict PROMOTE)

## Tick 2026-05-31T17:05:28.672Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/Determination of aluminium concentrations in black, green, and white tea samples_ effects of different infusion times and teapot species on aluminium.pdf`: already-ingested-post-cutoff-clean ozturk2024-al-tea-infusion-teapot (wiki/sources page updated 2026-05-20, audit-queue status audited-promote 2026-05-20, not in routing_malformed or routing_unresolved; per v2.0 skill Phase 1 step 1 candidate-selection rule, PDFs whose existing pages are post-2026-05-14 clean and not in malformed are skipped)

## Tick 2026-05-31T17:24:47.456Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/Elemental Composition of Japanese Matcha Powder and Infusions—Potential Role as a Functional Food in Metabolic Health.pdf`: already-ingested-post-cutoff-clean szymczykowska2026-matcha-elemental-composition (wiki/sources page updated 2026-05-20, audit-queue status audited-revised 2026-05-20, not in routing_malformed or routing_unresolved; per v2.0 skill Phase 1 step 1 candidate-selection rule, PDFs whose existing pages are post-2026-05-14 clean and not in malformed are skipped)

## Tick 2026-05-31T17:27:58.573Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/Nickel_ estimate of long-term intake via food based on the BfR MEAL Study.pdf`: already-ingested-post-cutoff-clean bfr2022-nickel-dietary-intake-germany-meal (SHA-identical to MFK_ root; existing page updated 2026-05-20 with REVISE verdict applied; audit-queue audited-revised; not in routing_malformed or routing_unresolved)

## Tick 2026-05-31T17:33:46.677Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/Occurrence, exposure and health risk assessment of heavy metals in green tea samples cultivated in Hangzhou area.pdf`: byte-identical to fan2025-hangzhou-green-tea-metals

## Tick 2026-05-31T17:33:52.275Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf`: already-ingested-post-cutoff-clean david2008-heavy-metals-canned-tomato-paste-romania (SHA-identical to MFK_ root; wiki/sources page updated 2026-05-20, audit-queue status audited-revised 2026-05-20 with 7/8 findings applied, not in routing_malformed or routing_unresolved; per v2.0 skill Phase 1 step 1 candidate-selection rule)

## Tick 2026-05-31T17:36:23.301Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste.pdf`: SHA-identical duplicate of MFK_ root (david2008-heavy-metals-canned-tomato-paste-romania already updated 2026-05-20, audited-revised 7/8)

## Tick 2026-05-31T17:40:07.253Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0306_Metals in Cow Milk and Soy Beverages.pdf`: PDF content does not match filename (file is Lee et al. 2023 Foods 12:2148 on Korean dietary patterns and abdominal obesity — zero metals data, off-topic for HMI)

## Tick 2026-05-31T17:45:19.292Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0311_Ecological and Human Health Risk Assessment of Metals in Peruvian Avocados.pdf`: byte-identical to yoplac2026-peruvian-avocado-metals-health-risk

## Tick 2026-05-31T17:45:24.870Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0314_Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab, North India.pdf`: PDF content does not match filename (file is Nozadi et al. 2023 IJERPH 20:1013 on COVID-19 hardships and ASQ developmental screening — zero metals data, off-topic for HMI)

## Tick 2026-05-31T17:47:11.981Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0315_Environmental exposure assessment of cadmium, lead, copper and zinc in different Palestinian canned foods.pdf`: byte-identical to alzabadi2018-canned-foods-palestine-cd-pb-cu-zn

## Tick 2026-05-31T17:47:17.216Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0316_Heavy Metals Burden in Drinking Water.pdf`: byte-identical to olowoyo2026-heavy-metals-drinking-water-global-review

## Tick 2026-05-31T17:47:22.452Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0320_Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals.pdf`: byte-identical to saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp

## Tick 2026-05-31T17:47:27.661Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0323_Duplicate diet study to assess dietary exposure to metals in a Japanese population.pdf`: byte-identical to yoshinaga2025-japanese-duplicate-diet-metals

## Tick 2026-05-31T17:59:53.024Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/Determination of some inorganic metals in edible vegetable oils by ICP-AES.pdf`: post-2026-05-14 clean page exists for this PDF (pehlivan2008-vegetable-oils-turkey-icp-aes, updated 2026-05-18, not in malformed/unresolved)

## Tick 2026-05-31T18:01:31.985Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/Levels of Selected Heavy Metals in Varieties of Vegetable Oils Collected from Saudi Arabia.pdf`: post-2026-05-14 clean page exists for this PDF (ashraf2012-heavy-metals-vegetable-oils-saudi-arabia, updated 2026-05-26, not in malformed/unresolved, prior subagent PROMOTE on 2026-05-26)

## Tick 2026-05-31T18:03:30.178Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/Report on a Total Diet Study carried out by the Food Safety Authority of Ireland (FSAI TDS).pdf`: post-2026-05-14 clean page exists for this PDF (fsai2016-total-diet-study-ireland-2012-2014, updated 2026-05-26, not in malformed/unresolved, prior subagent REVISE applied on 2026-05-26)

## Tick 2026-05-31T18:06:37.522Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf`: pdf-already-ingested-clean escp2021-pb-as-balsamic-vinegar-fda-letter (SHA-identical to MFK_ root; existing page updated 2026-05-26 and clean per routing audit)

## Tick 2026-05-31T18:10:30.285Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/Aluminum Leaching from Cooking Pans and Food Containers into Vinegar.pdf`: kimi-corruption-off-topic-pdf shimanoe2006-stm-sno2-110-oxidative (filename declares Al-leaching-into-vinegar but actual PDF is a SnO2 surface-physics paper; no heavy-metals-in-food data to ingest)

## Tick 2026-05-31T18:13:49.035Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (Inductively Coupl.pdf`: kimi-corruption-off-topic-pdf duman-turkmen2024-vinegar-chemical-composition (actual content is Duman & Türkmen 2024 chemical composition of Turkish vinegars in African Journal of Biotechnology 23(12):354-360, doi 10.5897/AJB2021.17345; no heavy-metal concentrations measured; intended Tekin 2014 ICP-MS thesis remains unfetched)

## Tick 2026-05-31T18:17:38.305Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/Levels of Cd, Pb, and Ni in Different Types of Vinegars.pdf`: pdf-already-ingested-clean acosta1993-cd-pb-ni-vinegar-types (SHA-identical to MFK_ root; existing page updated 2026-05-26 and clean per routing audit)

## Tick 2026-05-31T18:21:35.881Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/Metallic Contaminants in Andalusian Vinegars.pdf`: pdf-already-ingested-clean troncoso1988-metallic-contaminants-andalusian-vinegars (SHA-identical to MFK_ root; existing page updated 2026-05-28 and clean per routing audit)

## Tick 2026-05-31T18:28:28.948Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/03_Olives_and_Pickles/FDA Total Diet Study Report - Fiscal Years 2018-2020.pdf`: pdf-already-ingested-clean fda-tds-elements-2018-2020 (SHA-identical to MFK_ root; canonical page updated 2026-05-20 and clean per routing audit)

## Tick 2026-05-31T18:45:27.480Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/03_Olives_and_Pickles/Investigation on the Concentration of Heavy Metals found in Olives and Olive Mill Waste.pdf`: pdf-already-ingested-clean vella2024-malta-olive-cultivars-aas (SHA-identical to MFK_ root; existing page updated 2026-05-28 and clean per routing audit)

## Tick 2026-05-31T18:48:54.398Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/03_Olives_and_Pickles/Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China.pdf`: kimi-corruption-wrong-pdf KADC_occurrence-and-exposure-assessment-of-nickel-in-zh (bytes are Messia 2023 gluten-free pasta; intended Han 2024 nickel paper already ingested clean at han2024-nickel-zhejiang-china.md from the genuine Manual Resourcing PDF)

## Tick 2026-05-31T18:54:12.804Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/04_Condiments_and_Sauces/Dietary exposure to metals and other elements in the 2006 UK Total Diet Study.pdf`: byte-identical to fera2015-uk-tds-metals

## Tick 2026-05-31T18:54:18.401Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/04_Condiments_and_Sauces/Exposure assessment of dietary cadmium_ findings from Shanghainese over 40 years, China.pdf`: page-already-current KADC_exposure-assessment-of-dietary-cadmium-findings-fr (resolves to he2013-shanghai-cadmium.md, updated 2026-05-28, audited REVISE, advisory-only routing entry intentional for exposure-assessment design)

## Tick 2026-05-31T19:00:14.030Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/04_Condiments_and_Sauces/Heavy Metal Contamination of Hot Sauce and Chili Powder.pdf`: page-already-current KADC_heavy-metal-contamination-of-hot-sauce-and-chili-p (resolves to spex2023-hot-sauce-chili-powder-metals.md, updated 2026-05-17, audited REVISE 6/6 findings applied)

## Tick 2026-05-31T19:04:28.721Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/04_Condiments_and_Sauces/Heavy metal migration, exposure, and health risk through canned tomato mix under different marketing.pdf`: page-already-current KADC_heavy-metal-migration-exposure-and-health-risk-thr (resolves to kangre2024-canned-tomato-pb-sn-ghana.md, updated 2026-05-28, audited PROMOTE 0 findings)

## Tick 2026-05-31T19:22:32.361Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/04_Condiments_and_Sauces/The First Hong Kong Total Diet Study_ Inorganic Arsenic.pdf`: page-already-current KADC_the-first-hong-kong-total-diet-study-inorganic-ars (resolves to cfs2012-hktds-inorganic-arsenic.md, updated 2026-05-28, audited REVISE 2 applied/0 rejected)

## Tick 2026-05-31T19:25:46.719Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/04_Condiments_and_Sauces/The First Hong Kong Total Diet Study_ Metallic Contaminants.pdf`: page-already-current KADC_the-first-hong-kong-total-diet-study-metallic-cont (resolves to cfs2013-hktds-metallic-contaminants.md, updated 2026-05-20, audited PROMOTE 3 applied/0 rejected)

## Tick 2026-05-31T19:28:54.592Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/05_PB_Vanilla_Spices/Aluminum in Food (Q&A)_ Sources, Safety and Regulations.pdf`: page-already-current KADC_aluminum-in-food-qa-sources-safety-and-regulations (resolves to efsa2021-aluminium-food-qa.md, updated 2026-05-28, routing-malformed entry is advisory-tier by design)

## Tick 2026-05-31T19:30:55.525Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/05_PB_Vanilla_Spices/Consumer Reports_ Heavy Metals in 15 Herbs and Spices.pdf`: page-already-current KADC_consumer-reports-heavy-metals-in-15-herbs-and-spic (resolves to gill2021-consumer-reports-spices.md, updated 2026-05-28, audited 2026-05-28 with brand-firewall correction applied)

## Tick 2026-05-31T19:32:39.030Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/05_PB_Vanilla_Spices/Coordinated Sampling Project 41_ Microbial and Heavy Metal Detections in Herbs and Spices.pdf`: page-already-current KADC_coordinated-sampling-project-41-microbial-and-heav (resolves to lhaac2025-csp41-herbs-spices-wa.md, updated 2026-05-28, audited 2026-05-28 with REVISE verdict applied)

## Tick 2026-05-31T19:34:05.783Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/05_PB_Vanilla_Spices/Impact of source, packaging and presence of food safety management system on heavy metals levels in.pdf`: page-already-current KADC_impact-of-source-packaging-and-presence-of-food-sa (resolves to moussa2024-spices-herbs-lebanon.md, updated 2026-05-29, audited 2026-05-29 with PROMOTE verdict applied)

## Tick 2026-05-31T19:50:02.259Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/05_PB_Vanilla_Spices/Lead in Spices, Herbal Remedies, and Ceremonial Powders Sampled from Home Investigations for Children with Elevated Blood Lead Levels - North Carolina.pdf`: byte-identical to angelon-gaetz2018-lead-spices-north-carolina

## Tick 2026-05-31T19:50:07.946Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/05_PB_Vanilla_Spices/Survey of Aluminium Content of Processed Food Using Baking Powder (2015-2016).pdf`: page-already-current KADC_survey-of-aluminium-content-of-processed-food-usin (resolves to takanashi2018-aluminium-baking-powder-japan.md, updated 2026-05-29, audited 2026-05-29 with REVISE verdict applied)

## Tick 2026-05-31T19:53:32.936Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/05_PB_Vanilla_Spices/Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices.pdf`: KADC_technical-support-document-for-derivation-of-healt (page already current — nys-doh2019-metals-spices-guidance.md updated 2026-05-29, audited-revised, not malformed)

## Tick 2026-05-31T19:54:24.128Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `onghena2016-baby-bottle-migration-duration-tests` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_01_Bottles_Nipples_SippyCups/01_Bottles_Nipples_SippyCups/01_2015_evaluation_of_the_migration_of_chemicals_from_baby_bottles_under_standardised_and_duration_testing_c.pdf)

## Tick 2026-05-31T20:07:39.401Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `IMEKO-TC23-2016-038 (merged as near_duplicate into onghena2016-baby-bottle-migration-duration-tests)` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_01_Bottles_Nipples_SippyCups/01_Bottles_Nipples_SippyCups/02_2016_IMEKO-TC23-2016-038.pdf)

## Tick 2026-05-31T20:13:17.179Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `houlihan2019-hbbf-whats-in-baby-food` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_01_Bottles_Nipples_SippyCups/01_Bottles_Nipples_SippyCups/03_2019_BabyFoodReport_EXEC-SUMM-ENGLISH_R6.pdf)

## Tick 2026-05-31T20:30:16.281Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `padoh2023-pahan-727-cpsc-lead-cup-recall` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_01_Bottles_Nipples_SippyCups/01_Bottles_Nipples_SippyCups/04_2023_2023-727-11-29-ADV-ToddlerCups.pdf)

## Tick 2026-05-31T20:38:26.318Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `cfs2012-baby-bottles-tableware` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_01_Bottles_Nipples_SippyCups/01_Bottles_Nipples_SippyCups/06_2012_programme_rafs_fcm_01_04_Report_e.pdf)

## Tick 2026-05-31T20:50:12.606Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_01_Bottles_Nipples_SippyCups/01_Bottles_Nipples_SippyCups/07_2019_BabyFoodReport_FULLREPORT_ENGLISH_R5b.pdf`: R5b is earlier revision of same Oct 2019 HBBF report already ingested as houlihan2019-hbbf-whats-in-baby-food (post-2026-05-14 clean); registered as near_duplicates on existing page, no parallel ingest.

## Tick 2026-05-31T20:55:00.036Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `onghena2016-phd-thesis (registered as near-duplicate superset of onghena2016-baby-bottle-migration-duration-tests; no new source page; no separate audit spawned per IMEKO/HBBF-exec-summ precedent)` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_01_Bottles_Nipples_SippyCups/01_Bottles_Nipples_SippyCups/08_133572.pdf)

## Tick 2026-05-31T21:02:27.448Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `cpsc1997-pvc-children-products` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_02_Teethers_Pacifiers/02_Teethers_Pacifiers/02_Pbcdtoys.pdf)

## Tick 2026-05-31T21:15:45.730Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `bfr2009-lead-cadmium-toys` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_02_Teethers_Pacifiers/02_Teethers_Pacifiers/03_2009_lead_and_cadmium_do_not_belong_in_toys.pdf)

## Tick 2026-05-31T21:39:04.319Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `fowles2021-lead-toys` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_02_Teethers_Pacifiers/02_Teethers_Pacifiers/05_2021_FW21014-Lead-in-Toys-FINAL-30-June-2021.pdf)

## Tick 2026-05-31T21:50:38.368Z

- Candidates this tick: 1
- Succeeded: 1
- Stopped (need Karen): 0
- Failed: 0

### Succeeded
- `nelson2023-wa-childrens-jewelry-followup` (raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_02_Teethers_Pacifiers/02_Teethers_Pacifiers/07_2018_2303004.pdf)
