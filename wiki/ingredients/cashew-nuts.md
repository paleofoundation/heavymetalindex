---
type: ingredient
commodity: cashew-nuts
title: "Cashew Nuts"
label: "Cashew Nuts"
aliases: [cashews]
category: nut
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [5350, 5350]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
drivers: [soil-uptake, shell-permeability, geography, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Cashew Nuts

Cashew nuts are the kernels of the cashew tree (Anacardium occidentale), principally cultivated in India, Vietnam, Côte d'Ivoire, Brazil, and Tanzania. The metal profile in the available evidence is dominated by nickel: the BfR MEAL Study (the first German Total Diet Study) measured 5,350 µg/kg Ni in cashew nuts, the highest single-food Ni value in the legumes-nuts-oilseeds-spices food group of the 356-food survey ([[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany|Fechner et al. 2022]]). The companion BfR Nickel Communication 033/2022 applied this occurrence value to the German dietary intake assessment, identifying cashew nuts and cocoa products as the two foods with the largest single contribution to Ni dietary exposure per serving ([[sources/bfr2022-nickel-dietary-intake-germany-meal|BfR 2022]]).

This page mirrors [[ingredients/cashews]] (the plural form used in some sources); the two pages address the same commodity from differently-named routing entries and should eventually be merged by a curator review per CLAUDE.md Part 10.

## Why this commodity accumulates heavy metals

Cashew nuts accumulate heavy metals through soil uptake by the cashew tree, with the kernel concentrating metals from the tree's vascular and reproductive tissues. The cashew tree is notably tolerant of marginal soils and is commonly cultivated on lateritic and sandy soils in West Africa, India, and South America, which can carry elevated baseline Ni, Cd, and other trace metals. The cashew nut shell and the kernel within carry different metal profiles; the shell, which is discarded during processing, may accumulate more surface-deposited metals while the kernel reflects systemic uptake. The cashew nut shell liquid (CNSL), removed during processing, is a separate waste stream with its own metal partition.

The high Ni value characteristic of cashews relative to other nut types reflects both source-soil Ni and possibly the cashew kernel's particular Ni-accumulation biology. The BfR data place cashew Ni at approximately 4-fold higher than walnut, hazelnut, or almond Ni in the German market context.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | data gap | — | — | — | — |
| Cd  | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | n=1 | 5,350 | — | low | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|2]] |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

The [[ingredients/cashews]] page carries additional Pb, Cd, Ni, and Cr data from the Ćwieląg-Drabek 2025 Polish-market survey of five nut types; the cashews data from that source is documented there and should be considered alongside the cashew-nuts data here until the two pages are merged.

## Ranges by source, region, and variety

The German BfR MEAL Study, conducted with foods purchased 2017 to 2019 and prepared as consumed before pooled-sample analysis, reports cashew nuts at 5.350 mg/kg (5,350 µg/kg) Ni, the highest single value in the legumes-nuts-oilseeds-spices food group ([[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany|Fechner et al. 2022]]). The same survey reported the group mean Pb at 0.013 mg/kg and group mean Cd at 0.033 mg/kg across legumes, nuts, oilseeds, and spices combined, but did not break out cashew-specific Pb and Cd values in the accessible data slice. tHg in the legumes-nuts-oilseeds-spices group was predominantly below LOQ.

The BfR Communication 033/2022 applied the MEAL cashew-nut Ni value to the German dietary intake assessment and identified cashew nuts as one of the foods with the largest per-serving contribution to dietary Ni intake, particularly in vegetarian and vegan diets that include nuts as a primary protein source ([[sources/bfr2022-nickel-dietary-intake-germany-meal|BfR 2022]]).

Regional and origin variation is not resolved beyond the single German market dataset. The cashew nut supply chain is concentrated in a small number of origin countries (India, Vietnam, Côte d'Ivoire, Brazil) and consolidated through a smaller number of processors; per-origin per-analyte values for cashew nuts would require a larger geographically-stratified dataset than the current corpus contains.

## Processing effects

Processing-state effects on cashew nut metal load operate at the shell-removal step. Raw cashews in shell carry metals in both shell and kernel; the shell removal step discards the metal load associated with the shell while concentrating the kernel metals in the finished product on a per-mass basis. The cashew nut shell liquid (CNSL) extraction is a separate processing stream and is not a food ingredient. Roasting (dry roast or oil roast) does not measurably alter metal content. Salt addition during preparation does not affect the cashew kernel metals but adds Na to the finished product. Cashew butter and cashew milk are derivatives that preserve the source-kernel metal load proportionally to the cashew content; cashew milk dilution with water proportionally reduces per-volume metal load.

## Ingredient-derivative risk

Cashew nuts produce several food-ingredient derivatives. Raw cashew kernels are the baseline form. Roasted cashews carry the same metal profile as raw plus any roasting-equipment exposure (typically negligible). Cashew butter (smooth or crunchy) concentrates the kernel through grinding without dilution. Cashew milk is a water-diluted derivative carrying proportionally lower per-volume metal load. Cashew cream and cashew cheese, used in plant-based alternatives, carry the source-kernel metal load proportionally. Cashew flour and cashew protein concentrate are protein-fractioned derivatives that concentrate metals into the protein component. Cashew nut shell liquid (CNSL) is an industrial chemical feedstock, not a food ingredient.

## Mitigation options

Sourcing levers operate at the brand and importer level. Origin specification (Indian vs Vietnamese vs Ivorian vs Brazilian cashews) is a potential discriminant, though the current evidence does not document per-origin Ni variability. Supplier-level COA testing of each lot against a sourcing specification is the load-bearing control given the documented high Ni levels.

Agronomic levers operate on the cashew producer. Soil-Ni testing of cashew orchard plots and selection of low-Ni cultivars are documented in the broader plant-food agronomic literature. These require supplier engagement to verify.

Processing levers are limited for cashews. Roasting and shell removal are the standard steps with no documented metal-removal effect. Steam-roasting versus dry-roasting versus oil-roasting do not materially change metal content.

Formulation levers operate on the brand for products using cashews as an ingredient. Diluting cashew content with lower-Ni nuts (almonds, walnuts) reduces per-serving Ni load. Substituting cashew butter with almond or sunflower seed butter reduces Ni in spread products. For dairy alternatives, substituting cashew milk with almond milk, oat milk, or soy milk reduces the Ni vector.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming cashew kernels against a sourcing specification catches origin-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for cashews in the current evidence base.

## Regulatory limits that apply

The European Union Regulation (EU) 2023/915 does not currently specify a Ni maximum level for nuts. The EFSA CONTAM Panel 2015 Scientific Opinion on Ni established a Tolerable Daily Intake of 2.8 µg/kg bw/day, with mean dietary exposure across all EU age groups at or above the TDI ([[sources/efsa2015-nickel-food-water|EFSA 2015]]); cashew nuts contribute meaningfully to that exposure for nut-consuming subpopulations. EU 2023/915 establishes Pb in nuts at 0.20 mg/kg (200 ppb) for peanuts and 0.10 mg/kg (100 ppb) for tree nuts, and Cd in tree nuts at 0.10 mg/kg (100 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). The United States FDA has no commodity-specific action level for Pb, Cd, or Ni in cashew nuts under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | German Ni dietary intake assessment based on MEAL occurrence data; identifies cashew nuts and cocoa products as the two foods with largest per-serving Ni contribution |
| 2 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | Primary Ni occurrence data for cashew nuts (5,350 µg/kg, highest in legumes-nuts-oilseeds-spices food group of 356-food German TDS); ICP-MS, prepared-as-consumed basis |
<!-- END: hmi-source-legend -->
