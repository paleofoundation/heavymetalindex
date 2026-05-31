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
