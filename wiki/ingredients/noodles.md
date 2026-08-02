---
title: "Noodles"
type: ingredient
commodity: noodles
label: "Noodles"
aliases: [noodle]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 41]
    p95_ppb: 84
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 21.8]
    p95_ppb: 39.8
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 3.3]
    p95_ppb: 17.9
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [873.4, 4994]
    p95_ppb: 5503
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [6.9, 480.9]
    p95_ppb: 909.4
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 15
---

# Noodles

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 6/10 HMTc analytes, total n=6 | common tier expects total n>=15; have 6 |
| D2 Regional coverage | OK | 17 jurisdictions, top NG 20% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tHg THIN, Al THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); iAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Al: needs 2 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 2 claims checked, 2 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming noodles: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Al |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Al, Sn; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Noodles are a wheat-based or wheat-and-egg-based product whose heavy metal profile is determined primarily by the metal content of the flour or whole-grain wheat used in production. Cadmium is the principal analyte of concern in the cereal-grain pathway: wheat accumulates Cd from soil through root uptake, and the Cd content of the grain reflects soil Cd levels and soil pH (lower pH mobilizes more Cd for uptake). The degree of grain milling affects Cd concentration in the final product: whole-grain or high-extraction flours retain more of the bran and aleurone layers where Cd concentrates, while refined white flour has lower Cd because milling removes the outer grain layers. Lead in wheat grain is generally low because Pb is not efficiently translocated from root to seed, but Pb from atmospheric deposition onto field wheat or from processing equipment can contribute at low levels. Asian-style wheat noodles prepared from partially refined or whole-grain flour therefore carry a modest but non-negligible Cd burden; egg-enriched pasta adds a second ingredient (egg) that is itself low in metals and does not materially change the wheat-driven Cd profile. Inorganic arsenic is not a significant concern for wheat-based products under typical growing conditions; total arsenic in wheat is low compared with rice.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–41 | low | [[sources/lee2019-food-processing-heavy-metals-migration\|1]] |
| Cd | n=1 | 0–21.8 | low | [[sources/lee2019-food-processing-heavy-metals-migration\|1]] |
| iAs | n=1 | 0 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–3.3 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 873.4–4994 | low | [[sources/lee2019-food-processing-heavy-metals-migration\|1]] |
| Cr | data gap | — | — | — |
| Sn | n=1 | 6.9–480.9 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Variation within the noodle category is driven by flour extraction rate and wheat sourcing region. Higher-extraction (more whole-grain) flours carry more Cd than refined white flour; Asian-style wheat noodles prepared with higher-extraction flour therefore sit at the upper end of the category range. Geographic variation in soil Cd is substantial within major wheat-producing regions: durum wheat grown in some European and North African soils has higher Cd than wheat from low-Cd soils in North America or Australia, reflecting both soil Cd levels and soil pH differences. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides the primary occurrence dataset for noodles in the current corpus. Additional characterization by flour extraction rate and sourcing region will be added as further source pages are ingested.

## Processing effects

Cooking noodles in water leaches some water-soluble minerals and low-molecular-weight metal species into the cooking water. Studies on pasta and noodle cooking consistently show that boiling in abundant water and discarding the cooking water reduces Cd content of the cooked product relative to uncooked noodle, though the magnitude of reduction varies by product and cooking conditions. This is a practical mitigation lever in home cooking contexts that is less applicable to commercial food production where cooking water may be retained or where the product is sold in a sauce. Drying of noodles (whether in the factory for dry noodles or during production of instant noodles) concentrates analytes relative to fresh or cooked noodles on a wet weight basis. Extrusion and die-shaping of noodle dough at industrial scale do not introduce metals from equipment in amounts that are significant relative to the wheat-flour background, provided equipment is maintained.

## Ingredient-derivative risk

Noodle-based derivatives that alter the metal profile relative to the base product are instant noodles (dried and fried, with an added fat phase from the frying oil), fresh noodles (higher moisture content, so lower ppb values on a wet weight basis relative to dried noodles), and rice-noodle substitutes (which fall outside this page and are covered on the rice-based ingredient pages). The fried component of instant noodles adds a refined oil fraction that is low in metals, reducing the per-serving metal contribution slightly relative to the wheat fraction alone.

## Mitigation options

### Sourcing levers

Specifying low-Cd wheat flour from documented low-Cd growing regions (North America, Australia) is the primary sourcing lever for manufacturers where Cd is a formulation concern. Requesting supplier Cd occurrence data for the flour lot reduces uncertainty about incoming Cd concentration.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

For products where cooking water retention can be controlled (commercial production of ready-to-eat noodle meals), a cooking-and-drain step removes a portion of water-soluble Cd. Selecting refined flour over whole-grain or high-extraction flour reduces Cd concentration in the finished noodle, at the cost of reducing other nutritional attributes of the whole-grain fraction.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 and the predecessor regulation EU 2023/915 amending Regulation (EC) No 1881/2006 set a maximum level of 0.10 mg/kg Cd for cereal products and pasta, and 0.20 mg/kg Pb for the same category [[regulations/eu2023-contaminants-maximum-levels]]. These limits apply to noodles as a cereal-based product. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets Pb maximum levels for cereal-based products; Cd limits for pasta and noodles have been addressed through Codex discussions that reference EU-level data. See [[regulations/eu2023-contaminants-maximum-levels]], [[regulations/eu-2023-915-cadmium]], and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/elziani2024-instant-noodles-libya-metals\|El et al. 2024]]. *Assessment of Heavy Metal Concentrations in Instant Noodles from Local Markets in Benghazi, Libya*, Sebha University Journal of Pure & Applied Sciences | 2024 | Peer-reviewed | LY Cd, Cr, Pb, tAs, Sn occurrence in Seven instant-noodle samples randomly collected from local markets in Benghazi, Libya. The source discusses imported noodle origins but... (n=7) |
| 2 | [[sources/jakkielska2023-noodles-toxic-metals\|Jakkielska et al. 2023]]. *Risk profiling of exposures to potentially toxic metals PTM(s) through noodles consumption. A case study of human health risk assessment*, Acta Universitatis Cibiniensis Series E: Food Technology | 2023 | Peer-reviewed | PL Pb, Cd, tAs, iAs, tHg occurrence in Twenty commercially available 500 g noodle/pasta products collected from markets in Poland, covering wheat, durum wheat, corn-flour gluten-free,... (n=20) |
| 3 | [[sources/kongta2023-noodle-products-aluminum-thailand\|Kongta et al. 2023]]. *Assessment of Exposure to Aluminum through Consumption of Noodle Products*, Foods | 2023 | Peer-reviewed | TH Al occurrence in Twenty samples each of rice stick noodles, egg noodles, wide rice noodles, and Thai rice noodles collected from... (n=80) |
| 4 | [[sources/safwan2023-instant-soup-chicken-stock-jordan\|Safwan et al. 2023]]. *Assessment and health risk study of some heavy metals in instant soup and chicken stock products from Jordanian market*, African Journal of Food, Agriculture, Nutrition and Development | 2023 | Peer-reviewed | JO Mn, Cr, Cd, Pb occurrence in Ten soup powder, chicken-stock powder, and instant-noodle products purchased from local markets in Jordan in 2020. (n=10) |
| 5 | [[sources/mohammed2021-salah-al-din-noodles-metals\|Mohammed et al. 2021]]. *Evaluation of mycotoxins and heavy metals pollution in some types of noodles in local markets*, Journal of Physics: Conference Series | 2021 | Peer-reviewed | IQ Cu, Cd, Pb occurrence in Ten types of noodles collected from markets in Salah Al-din Governorate, Iraq, with three replicates; the heavy-metal method... (n=10) |
| 6 | [[sources/katyal2020-instant-noodles-canada-metals\|Katyal et al. 2020]]. *Analysis of lead, arsenic, and cadmium concentrations in instant noodles within the Canadian market*, BCIT Environmental Public Health Journal | 2020 | Peer-reviewed | CA Pb, Cd, tAs occurrence in Thirty packets of instant noodles from six brands available in large grocery stores in the Canadian market; dry... (n=30) |
| 7 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 8 | [[sources/lee2019-food-processing-heavy-metals-migration\|Lee et al. 2019]]. *Effects of food processing methods on migration of heavy metals to food*, Applied Biological Chemistry | 2019 | Peer-reviewed | Pb, Cd, tAs, and Al migration from Korean wheat-flour and sweet-potato glass noodles to boiling water, quantifying cooking-loss as a processing lever |
| 9 | [[sources/shamsani2019-instant-noodles-heavy-metals-malaysia\|Shamsani et al. 2019]]. *Heavy Metals (Pb, Cd, As) Content in Instant Noodles From Malaysian Market*, Malaysian Journal of Medicine and Health Sciences, Vol. 15 Supp. 3 (Proceedings of the Summer Crash Course Programme 2018) | 2019 | Peer-reviewed | MY Pb, Cd, tAs occurrence in Seven commercially popular brands of instant noodles randomly purchased from the Malaysian retail market; noodles and accompanying seasoning/flavouring... (n=7) |
| 10 | [[sources/otitoju2018-noodle-products-nigeria-metals\|Otitoju et al. 2018]]. *Heavy Metal Quantification of Noodle Products Commonly Consumed in Nigeria*, Journal of Home Economics Research | 2018 | Peer-reviewed | NG tAs, Cd, Cr, Pb, tHg occurrence in Eleven instant-noodle products sold in Nigerian markets, collected from a major market in Enugu State and anonymized in... (n=11) |
| 11 | [[sources/tajdar-oranj2018-iran-instant-noodles-metals\|Tajdar-oranj et al. 2018]]. *The concentration of heavy metals in noodle samples from Iran's market: probabilistic health risk assessment*, Environmental Science and Pollution Research | 2018 | Peer-reviewed | IR Pb, Cr, Cd, Al occurrence in 27 instant noodle samples drawn from four commercial brands sold on the Tehran market in Spring 2017: three... (n=27) |
| 12 | [[sources/charles2017-instant-noodles-nigeria-risk\|Charles et al. 2017]]. *Health risk assessment of instant noodles commonly consumed in Port Harcourt, Nigeria*, Environmental Science and Pollution Research | 2017 | Peer-reviewed | NG Pb, tAs, Ni, tHg, Cu, Cd, Al, Cr occurrence in Six commercial instant-noodle brands commonly consumed in Port Harcourt, Nigeria, purchased from retail shops in Choba, Alakahia, Rumuosi,... (n=6) |
| 13 | [[sources/guo2017-asian-rice-derived-products-metals\|Guo et al. 2017]]. *Trace Elements and Heavy Metals in Asian Rice-Derived Food Products*, Water, Air, & Soil Pollution | 2017 | Peer-reviewed | US/CN/VN Cr, Cu, Zn, tAs, Se, Cd, tHg, Pb occurrence in Six rice-noodle products, five rice vinegar/wine products, and five rice-snack products purchased from local oriental markets in Jackson,... (n=16) |
| 14 | [[sources/iyabo2015-ekiti-staple-foods-metals\|Iyabo et al. 2015]]. *Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria*, International Journal of Chemistry | 2015 | Peer-reviewed | NG Zn, Cu, Cd, Pb occurrence in Thirty listed staple food items identified from a questionnaire of 200 volunteered Ekiti State University students and purchased... (n=30) |
| 15 | [[sources/solidum2013-metro-manila-junk-food-metals\|Solidum et al. 2013]]. *Quantitative Analysis of Lead, Cadmium and Chromium in Different Brands of Junk Food Marketed in Metro Manila, Philippines*, Advanced Materials Research | 2013 | Peer-reviewed | PH Pb, Cd, Cr occurrence in Thirty-six junk-food samples randomly selected from sari-sari stores in Metro Manila, Philippines, in June 2012. (n=36) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
