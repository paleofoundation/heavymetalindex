---
type: ingredient
commodity: beverages
title: "Beverages"
label: "Beverages"
aliases: [drinks, non-alcoholic-beverages, alcoholic-beverages]
category: beverage
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 12
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
drivers: [water-source, packaging, ingredient-extraction, processing]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/fruit-juice]]", "[[ingredients/mango-juice]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Beverages

Beverages is the category-level page covering non-alcoholic and alcoholic drinks as a food group, including water, soft drinks, juices, teas, coffee, beer, wine, and spirits. The category is broad enough that per-beverage-type pages carry the bulk of the per-analyte content; this page summarizes group-level findings from total diet studies that report aggregate beverage-category values. Specific drink categories sit on dedicated pages: [[ingredients/fruit-juice]], [[ingredients/mango-juice]], [[ingredients/wine-vinegar]] for vinegar-derived beverages, and per-juice pages for apple, orange, and lychee juice. The available evidence at the beverages-category level in the current corpus is limited to two Hong Kong Total Diet Study reports, which provide group-level dietary contribution data but limited per-analyte concentration breakdowns for the beverages category as a whole.

## Why this commodity accumulates heavy metals

Beverages accumulate heavy metals through four pathways. The first is the water-source pathway: the water used as the base of most beverages contributes Pb, Cd, Ni, and other metals at levels reflecting the source-water treatment, distribution-system contact (lead service lines, brass fittings, soldered joints), and bottling-process exposure. Public drinking-water regulations (WHO 10 ppb Pb, EU 5 ppb Pb in revised Drinking Water Directive) constrain the source-water baseline but do not bind in all jurisdictions.

The second pathway is ingredient-extraction. Tea and coffee are produced by aqueous infusion of plant materials, with metal transfer from the plant matrix into the infusion liquid; the [[sources/lee2019-food-processing-heavy-metals-migration|Lee et al. 2019]] dataset documented that tea infusion Al increased from 0.257 mg per cup at 2-minute steeping to 2.462 mg per cup at 30-minute steeping for Solomon's seal tea, with similar but lower magnitudes for green tea. Fruit juices inherit the source-fruit metals through pressing; the [[ingredients/mango-juice]], [[ingredients/fruit-juice]], and per-fruit-juice pages cover this pathway.

The third pathway is packaging-related migration. Aluminum cans, Tetra Pak aseptic packaging with aluminum foil layers, and lead-soldered seams in older canned beverages all contribute metals into the finished beverage over shelf life. The acidity of soft drinks and juices accelerates the migration relative to neutral-pH beverages. The Iranian [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani et al. 2017]] study of packaged fruit juices, cited on the [[ingredients/mango-juice]] page, documented Al migration from Tetra Pak packaging at concentrations exceeding the WHO drinking-water guideline by 6-fold in some products.

The fourth pathway is fermentation and aging for alcoholic beverages and vinegar-derived beverages. Wine, beer, spirits, and vinegars accumulate metals through grape-source soil uptake, fermentation-vessel and aging-barrel contact, and production-equipment contact. The Hong Kong dataset reports beverages as a low-iAs vector overall, with non-alcoholic beverages at mean 2 µg/kg and alcoholic beverages at mean 3 µg/kg ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012]]).

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | data gap | — | — | — | — |
| Cd  | data gap | — | — | — | — |
| iAs | n=1 | 0–2 | 12 | low | [[sources/cfs2012-hktds-inorganic-arsenic\|2]] |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

Per-beverage-type analyte detail is on the dedicated pages: [[ingredients/fruit-juice]], [[ingredients/mango-juice]], [[ingredients/wine-vinegar]], and the per-fruit-juice pages. The values on this category page reflect group-level Hong Kong Total Diet Study aggregations and should not be substituted for per-beverage measurements where specific source data exist.

## Ranges by source, region, and variety

The Hong Kong First Total Diet Study sampled 8 alcoholic beverage composite samples (50 percent below LOD, mean 3 µg/kg iAs, range ND to 7 µg/kg) and 40 non-alcoholic beverage composite samples (95 percent below LOD, mean 2 µg/kg, range ND to 12 µg/kg), measuring inorganic arsenic by direct hydride generation ICP-MS ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012]]). Beverages as a group contributed 13.0 percent of the average Hong Kong adult's dietary iAs exposure (the second-largest contributor after cereals at 53.5 percent), driven primarily by the high consumption volume of non-alcoholic beverages rather than by high per-volume iAs concentrations.

The companion Hong Kong report on metallic contaminants identifies non-alcoholic beverages as the single largest contributor to dietary aluminum exposure (33 percent of total), reflecting the combination of high consumption volume and the documented Al content of tea, coffee, and packaged drinks ([[sources/cfs2013-hktds-metallic-contaminants|CFS 2013]]). Specific per-beverage-type Al concentrations are not separately tabulated in the contributing data slice for this page; the per-juice page values (Sobhanardakani 100 to 1,100 ppb for mango juice in Tetra Pak packaging) are representative for packaged juices.

Regional and brand variation at the beverages-category level is not resolved in the current corpus. Per-beverage variation is captured on the dedicated pages.

## Processing effects

Processing-state effects on beverages vary by beverage type and are documented in detail on the dedicated per-beverage pages. The principal patterns are: (1) longer brewing or steeping time increases metal extraction from the plant matrix into the liquid for tea and coffee; (2) juicing and concentration proportionally concentrate metals into the juice fraction; (3) carbonation does not materially change metal content; (4) pasteurization and hot-fill operations do not materially change metal content; (5) packaging migration adds metals over shelf life for beverages in Tetra Pak (aluminum foil), aluminum cans, and tin-soldered older canned products.

## Ingredient-derivative risk

Beverages as a category include a wide range of derivatives, each with distinct metal profiles. Single-strength fruit juices carry the source-fruit metals at extracted concentrations; juice concentrates proportionally elevate all metals at the concentration step and proportionally dilute at reconstitution. Powdered beverage mixes (instant tea, drink powders) concentrate metals by mass loss during drying and are reconstituted at the consumer with water of unknown metal content. Hot beverages (brewed tea, coffee) accumulate metals proportionally to brewing time. Alcoholic beverages accumulate metals through fermentation and aging in addition to source-grape or grain inheritance; wine-derived vinegars further concentrate metals through the additional production steps as documented on [[ingredients/wine-vinegar]]. Sports drinks and functional beverages with added ingredients (vitamins, minerals, plant extracts) inherit metals from each ingredient stream.

## Mitigation options

Sourcing levers operate at the brand level. Sourcing water from documented low-Pb, low-Ni sources (verified by lot-level testing rather than reliance on jurisdictional drinking-water compliance) is the upstream lever for any water-based beverage. For tea, coffee, and other plant-source beverages, sourcing from low-soil-contamination growing regions is the source-ingredient lever; the per-ingredient pages cover the source-side specifications.

Agronomic levers operate on the growers of plant ingredients (tea, coffee, grapes, fruit) and are covered on the relevant per-ingredient pages.

Processing levers are the brand-controlled lever for finished beverages. Shorter brewing or steeping cycles reduce metal extraction from plant matrices into the liquid; the Lee 2019 dataset establishes that the magnitude of this effect is substantial for tea Al. Selecting stainless steel processing equipment over copper, brass, or lead-soldered equipment eliminates production-contact Pb pathways. Lacquered aluminum cans, modern epoxy-lined cans, glass bottles, and non-aluminum aseptic packaging reduce packaging migration relative to older or unlined alternatives.

Formulation levers operate on the brand. Diluting higher-metal ingredient streams with lower-metal ones, substituting cleaner-sourced ingredients, and reducing the proportion of high-metal-load components are the standard formulation responses.

Testing and QC levers are critical at the finished-beverage stage given the multiple inputs (water, plant ingredients, packaging) that can contribute to total load. Lot-level ICP-MS testing against beverage-category specifications catches drift in any single input stream. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are particularly important for packaged beverages. Selecting glass over aluminum, modern epoxy-lined cans over tin-soldered, and non-aluminum aseptic packaging over Tetra Pak with foil layer reduces packaging-related metal load. Shorter shelf life and lower storage temperature both reduce accumulated migration from any packaging-related source.

## Regulatory limits that apply

The WHO drinking-water guideline values set the source-water baseline for beverage production: Pb 10 ppb, Cd 3 ppb, Cr 50 ppb, Ni 70 ppb, Al 200 ppb. The European Union revised Drinking Water Directive (EU) 2020/2184 tightens Pb to 5 ppb effective 2036. The Codex Alimentarius maximum levels in fruit juices (Pb 30 ppb general, 50 ppb berry/small fruit) and in wine and beer follow the relevant Codex commodity standards. The European Union Regulation (EU) 2023/915 establishes Pb in fruit juices at 0.030 mg/kg (30 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). The United States FDA establishes an inorganic arsenic action level of 10 ppb in apple juice under the Closer to Zero framework ([[sources/fda2023-ias-apple-juice-guidance|FDA 2023]]), with no commodity-specific action levels for other beverage categories under the current framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | Hong Kong Total Diet Study category-level metallic contaminant data; identifies non-alcoholic beverages as the single largest contributor to dietary aluminum exposure (33 percent of total) |
| 2 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | Primary iAs occurrence data for non-alcoholic beverages (n=40, mean 2 ppb, range ND–12, 95 percent below LOD) and alcoholic beverages (n=8, mean 3 ppb, range ND–7, 50 percent below LOD); beverages contribute 13 percent of adult dietary iAs exposure |
<!-- END: hmi-source-legend -->
