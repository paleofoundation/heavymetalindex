---
type: ingredient
commodity: mango
title: "Mango"
label: "Mango"
aliases: [mangifera-indica, fresh-mango, mango-pulp, mango-puree, mango-peel]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 300
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: 100
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, growing-region, peel-vs-flesh, processing-juice-concentration]
lower_risk_variants: ["[[ingredients/peeled-mango-flesh]]"]
higher_risk_variants: ["[[ingredients/mango-juice]]"]
used_in_products: ["[[products/fruit-juice]]", "[[products/fruit-purees]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 10
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
hero_image: /static/heroes/tropical-fruit-banana-mango-pineapple.webp
hero_image_alt: "Bananas, mango, pineapple, guava and coconut illustrating mango ingredient context."
---

# Mango

## Overview

Mango (Mangifera indica) is a tropical fruit consumed fresh and processed into juice, puree, dried slices, and frozen pulp. The heavy-metals profile of mango sits at the lower end of the fruit-category distribution: as a thick-skinned tropical fruit, the peeled flesh has limited atmospheric-deposition exposure and the relatively low soil-uptake transfer factor for Cd-and-Pb keeps fresh-flesh concentrations modest. The current corpus loads 3 directly-routed sources covering mango specifically plus 4 broader fruit-and-juice studies: Islam 2024 Bangladeshi fruits systematic review (n=10 fruits including mango, [[sources/islam2024-heavy-metals-bangladeshi-fruits-review]]), Mekonnen 2024 Ethiopian Bahir Dar fruit metals (n=120, [[sources/mekonnen2024-ethiopia-fruit-metals]]), Rahim 2020 Pakistani 308-sample most-widely-consumed fruits ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan]]), Farid 2010 Saudi fruit-juice trace elements (n=129, [[sources/farid2010-fruit-juices-jeddah-trace-elements]]), Paudel 2024 Nepal packaged fruit juices ([[sources/paudel2024-packaged-fruit-juices-nepal]]), Sobhanardakani 2017 Iranian fruit-juice Al-and-Cu ([[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran]]), Tsegay 2025 fruit by-product toxicology review ([[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review]]), Weldegebriel 2025 Ethiopian Gondar packaged fruit juices (n=80, [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]]).

## Why this commodity accumulates heavy metals

Mango takes metals from soil through root uptake into the trunk-and-leaf tissue, and atmospheric deposition onto the leaves and developing fruit during the growing cycle. Mangifera indica is a deep-rooted perennial that draws water and dissolved solutes from a broader soil profile than annual crops, which provides some buffering against surface-soil contamination but also exposes the tree to subsoil Cd-and-Pb that might be elevated in mining-influenced or industrial-corridor settings. The peel-vs-flesh distribution is significant: the peel accumulates surface-deposited Pb and some soluble Cd, while the flesh sits at lower concentrations because the metals do not transfer efficiently across the peel into the edible tissue. Peeled mango flesh is therefore the lowest-metal-load consumption form. The Bangladeshi Islam 2024 systematic review identified mango as one of the more-consumed tropical fruits and characterised the Pb-Cd-Cr-Ni profile across the Bangladeshi market ([[sources/islam2024-heavy-metals-bangladeshi-fruits-review]]). The Ethiopian Mekonnen 2024 Bahir Dar work (n=120 fruit samples) provides the largest single-jurisdiction recent dataset for mango within the broader fruit-and-vegetable panel ([[sources/mekonnen2024-ethiopia-fruit-metals]]). The Pakistani Rahim 2020 dataset (n=308 most-widely-consumed fruits) contributes the largest single-jurisdiction fruit-Pb-Cd-Cr-Ni dataset with a substantial mango subset ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan]]). Mango juice and packaged-juice product is covered in the Farid 2010 Saudi work, the Paudel 2024 Nepal work, and the Ethiopian Weldegebriel 2025 work; the packaging-leaching pathway adds metals beyond the fresh-fruit baseline in some commercial juice product.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 5–100 | medium | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Cd | n=5 | 1–30 | medium | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 1–50 | medium | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]] |
| tHg | n=1 | — | — | — |
| Ni | n=3 | 10–200 | low | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Al | n=1 | — | — | — |
| Cr | n=3 | 5–100 | low | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Pakistani Rahim 2020 dataset (n=308 fruit samples including mango) is the largest single-jurisdiction fruit-heavy-metals dataset in the loaded corpus and provides the strongest mango distributional anchor ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan]]). The Ethiopian Mekonnen 2024 Bahir Dar work (n=120 fruits) covers a sub-Saharan African market context with strong methodological rigor ([[sources/mekonnen2024-ethiopia-fruit-metals]]). The Bangladeshi Islam 2024 systematic review consolidates the South Asian mango literature ([[sources/islam2024-heavy-metals-bangladeshi-fruits-review]]). Origin pattern: mangoes from Indian, Pakistani, Bangladeshi, and Mexican production carry similar baseline metal profiles within commodity-grade product; Ecuadorian and Peruvian mangoes (often grown in or near former mining regions) can carry slightly higher Cd. Variety-level pattern (Alphonso, Kesar, Tommy Atkins, Keitt, Haden, Ataulfo): no strong cultivar-specific metal-accumulation differences are documented in the loaded corpus. The peel-vs-flesh distinction is the most consistent within-mango pattern, with peel carrying 3-10× the per-mass Pb of the flesh.

## Processing effects

Peeling mango before consumption removes the peel-bound metal load and is the largest single processing-stage reduction. Cutting and slicing do not affect metal load. Cooking (rare for mango, but used in chutneys and preserves) leaches a small fraction of soluble metals into the cooking liquid. Drying for dehydrated-mango applications concentrates metals on a dry-weight basis by 5-8×. Juicing extracts the soluble fraction of fresh-flesh metals; the juice-yield ratio determines the per-mass concentration in the finished juice relative to the parent fruit. Concentrate-and-reconstitute juice processing (the dominant industrial form for commercial mango juice) further concentrates metals on a per-mass basis during the concentration step and then dilutes back during reconstitution.

## Ingredient-derivative risk

Peeled fresh-mango flesh is the lowest-metal-load consumption form. Fresh mango with peel-on (consumed in some traditional preparations, particularly green mango) carries the peel-bound metal contribution. Dehydrated mango slices concentrate metals on a dry-weight basis. Mango juice (fresh-pressed, not-from-concentrate) inherits the fresh-flesh metal load at the juice-yield ratio. Concentrate-and-reconstitute mango juice (the dominant commercial form) carries variable metals depending on the concentration protocol and the packaging-leaching pathway. Mango puree and mango pulp (used in baby foods, smoothies, and processed-food applications) inherits the fresh-flesh load with minor processing-driven shifts. Frozen mango chunks carry the fresh-flesh baseline. Mango-and-cinnamon-flavored baby food products (including the WanaBana apple-cinnamon line that was implicated in the 2023-2024 lead-poisoning outbreak; see [[ingredients/cinnamon]]) inherit any adulterated-cinnamon contribution at the cinnamon inclusion ratio.

## Mitigation options

### Sourcing levers

Source from production regions with documented soil-and-water screening. Avoid sourcing from mining-influenced or industrial-corridor production where soil Cd-and-Pb are elevated. For mango juice specifically, specify supplier transparency on the concentrate-versus-not-from-concentrate processing and on the packaging material.

### Agronomic levers

For mango orchard operations, soil pH management and water-source screening reduce the upstream metal load. Mango trees are deep-rooted; subsoil contamination matters more than surface contamination for this perennial fruit.

### Processing levers

Peeling mango before processing eliminates the peel-bound metal load. For juicing operations, validate equipment surfaces and avoid extended contact with metal vessels at acidic juice pH. Concentration-and-reconstitution does not introduce metals beyond the parent fruit but can concentrate any packaging-leaching that occurs during storage.

### Formulation levers

For finished products using mango as one ingredient, the inclusion ratio caps per-serving exposure. Substitution with other low-metal tropical fruits (pineapple, papaya) does not meaningfully change the metal profile.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb fresh-weight), Cd (≤ 1 ppb fresh-weight), and Cr-Ni at appropriate floors is the standard intervention. For mango juice and concentrate, test in the as-consumed dilution rather than the concentrate.

### Packaging and storage levers

Glass packaging is the baseline-cleanest option for juice and puree. PET is acceptable. Avoid lead-soldered cans (historical risk, largely phased out) and tinplate cans with damaged coatings for acidic mango products. Modern fully-welded steel cans with food-grade interior coatings are acceptable.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 applies the general fresh-fruit Pb maximum of 0.10 mg/kg fresh weight to mango. The EU Regulation 2023/915 applies the same 0.10 mg/kg Pb maximum for fruits and the 0.020 mg/kg Cd maximum for the general fruit category. The FDA has not set a mango-specific action level but the broader fruit framework applies. The Ethiopian Mekonnen 2024 work found commercial mango compliant with the EU 0.10 mg/kg Pb cap on a fresh-weight basis in the Bahir Dar market ([[sources/mekonnen2024-ethiopia-fruit-metals]]). The Pakistani Rahim 2020 work characterised the regulatory-margin compliance for Pakistani-market mango at scale ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan]]).

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 412: Mango, raw/frozen | tAs | 6 | 3 | 3.8–5.4 | 3 |
| 412: Mango, raw/frozen | Cd | 6 | 5 | 1.3–6 | 1 |
| 412: Mango, raw/frozen | Cr | 6 | 1 | 54 | 50 |
| 412: Mango, raw/frozen | Pb | 6 | 0 | ND in all composites | 4 |
| 412: Mango, raw/frozen | tHg | 6 | 0 | ND in all composites | 1 |
| 412: Mango, raw/frozen | Ni | 6 | 2 | 41–100 | 40 |
| 412: Mango, raw/frozen | U | 6 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/islam2024-heavy-metals-bangladeshi-fruits-review|A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks]]<span class="hmi-ref-meta">Islam MH, Nowar A, Islam S, Nayan MM, and Jubayer A · Environmental Health Insights · 2024 · [doi.org/10.1177/11786302241309280](https://doi.org/10.1177/11786302241309280)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/mekonnen2024-ethiopia-fruit-metals|Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia]]<span class="hmi-ref-meta">Mekonnen BA, Yizengaw MG, Kassahun H, and Ketema G · International Journal of Food Science · 2024 · [doi.org/10.1155/2024/6677324](https://doi.org/10.1155/2024/6677324)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits]]<span class="hmi-ref-meta">Rahim M, Saqib NU, Wahid F, Khan N, and Alrawi LI · Journal of Physical Science · 2020 · [doi.org/10.21315/jps2020.31.2.5](https://doi.org/10.21315/jps2020.31.2.5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/farid2010-fruit-juices-jeddah-trace-elements|Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia]]<span class="hmi-ref-meta">Farid SM and Enani MA · Medical Journal of Islamic World Academy of Sciences · 2010</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/paudel2024-packaged-fruit-juices-nepal|Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy]]<span class="hmi-ref-meta">Paudel N, Dhakal A, and Pradhanang SS · International Journal of Applied Sciences and Biotechnology 12(3): 158-165 · 2024 · [doi.org/10.3126/ijasbt.v12i3.70167](https://doi.org/10.3126/ijasbt.v12i3.70167)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices]]<span class="hmi-ref-meta">Sobhanardakani S, Shahmoradi B, and Jahangard A · Annals of Military and Health Sciences Research · 2017 · [doi.org/10.5812/amh.68743](https://doi.org/10.5812/amh.68743)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Toxicological qualities and detoxification trends of fruit by-products for valorization: A review]]<span class="hmi-ref-meta">Tsegay ZT, Smaoui S, and Varzakas T · Open Life Sciences 20:20251105 · 2025 · [doi.org/10.1515/biol-2025-1105](https://doi.org/10.1515/biol-2025-1105)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals|Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia]]<span class="hmi-ref-meta">Fasika Weldegebriel, Zemichael Gizaw, Mulat Gebrehiwot, Lamrot Yohannes, Jember Azanaw, Mengesha Genet, et al. · Scientific Reports 15:36868 · 2025 · [doi.org/10.1038/s41598-025-20789-x](https://doi.org/10.1038/s41598-025-20789-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|Islam et al. 2024]]. *A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks*, Environmental Health Insights | 2024 | Review | Bangladeshi systematic review of 10 fruits including mango Pb-Cd-Cr-Ni-As-tHg |
| 3 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 4 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 5 | [[sources/kumar2022-bangladesh-agricultural-products-lead\|Kumar et al. 2022]]. *Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh*, Water, Air, & Soil Pollution 233:257 | 2022 | Peer-reviewed | BD Pb occurrence in Published Pb concentration data for commonly consumed agricultural foods and food products in Bangladesh. (n=Literature survey covering three cereals, five pulses, ten fruits, and 34 vegetables/other agricultural food items) |
| 6 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 7 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | Pakistani most-consumed-fruits 4-metal panel (n=308); largest single-jurisdiction dataset |
| 8 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co, Zn occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=nine commodities measured (5 vegetables + 4 fruits); abstract claims ten but tables enumerate nine) |
| 9 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 7 sources removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 7 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 7 sources added; narrative text revised |
<!-- END: hmi-page-history -->
