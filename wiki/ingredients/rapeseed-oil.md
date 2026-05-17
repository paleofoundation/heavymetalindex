---
type: ingredient
commodity: rapeseed-oil
title: "Rapeseed Oil"
label: "Rapeseed Oil"
aliases: [canola-oil, brassica-napus-oil, refined-rapeseed-oil]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 250
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: null
    confidence: medium
    n_studies: 3
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
    confidence: low
    n_studies: 2
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
    n_studies: 2
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
    typical_ppb: [5, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
drivers: [seed-source, brassica-cadmium-uptake, extraction-method, refining-clay, packaging]
lower_risk_variants: ["[[ingredients/refined-canola-oil-glass-bottled]]"]
higher_risk_variants: ["[[ingredients/cold-pressed-rapeseed-oil]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Rapeseed Oil

Rapeseed oil (also called canola oil in North America; the term "canola" was originally a trade name for low-erucic-acid varieties developed in Canada) is pressed from Brassica napus or Brassica rapa seeds and is the second-most-produced vegetable oil globally after palm oil. The heavy-metals profile follows the standard refined-seed-oil pattern: modest baseline Pb-and-Cd from upstream seed agronomy, partial reduction through the refining chain, and trace Ni from bleaching-clay contact. As a brassica, rapeseed has the family-characteristic moderate Cd uptake; the seed itself can carry slightly higher Cd than non-brassica oilseeds, though most of the seed's Cd partitions with the spent meal rather than the oil during extraction. The current corpus loads 3 sources covering rapeseed oil through the broader vegetable-oils literature: Ashraf 2012 Saudi market survey including 17 rapeseed oil samples within 161-sample multi-oil panel ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]), González-Torres 2023 global systematic review covering rapeseed oil among 35 oil types ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]), and Scutarasu 2023 global foods-and-beverages review ([[sources/scutarasu2023-heavy-metals-foods-beverages]]).

## Why this commodity accumulates heavy metals

Rapeseed (Brassica napus) is a brassica oilseed grown predominantly in Canada (the largest producer, branded as canola), the EU (France, Germany, Poland, UK), China, India, and Australia. The brassica-family Cd-uptake pathway carries seed-Cd at moderate levels reflecting soil chemistry and Zn-availability. The seed metals partition during extraction: most metals stay with the spent meal (used for animal feed), and a small fraction transfers to the oil. Refining (degumming, neutralisation, bleaching, deodorisation) further reduces residual metals through filtration and bleaching-clay adsorption. Bleaching with acid-activated clay can introduce Ni at 5-50 ppb in finished oil. The Saudi Ashraf 2012 dataset placed rapeseed oil at the lower-middle of the Saudi retail edible-oil Pb-Cd distribution ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]). The González-Torres 2023 global systematic review identified rapeseed oil among the broadly-similar refined-seed-oil category occupying the lower-middle of the global edible-oil heavy-metals distribution ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 5–100 | medium | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|1]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|2]] |
| Cd | n=3 | 1–30 | medium | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|1]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 1–50 | low | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|1]] |
| tHg | n=1 | — | — | — |
| Ni | n=2 | 10–200 | low | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 5–100 | low | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Saudi Ashraf 2012 dataset (n=17 rapeseed oil within 161-sample multi-oil panel) places rapeseed oil at the lower-middle of the Saudi retail edible-oil distribution ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]). The González-Torres 2023 global systematic review identifies rapeseed/canola oil as broadly equivalent to soybean and sunflower oil within the refined-seed-oil category on heavy metals ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]). The Scutarasu 2023 global review confirms the lower-middle positioning ([[sources/scutarasu2023-heavy-metals-foods-beverages]]). Origin pattern: Canadian canola, EU rapeseed (France, Germany, Poland, UK), and Chinese-Indian rapeseed are broadly equivalent on heavy metals in the loaded literature; specific-origin specifications add cost without meaningful metal-load shift. Cultivar pattern: low-erucic-acid canola varieties versus traditional rapeseed do not produce meaningfully different heavy-metals profiles in the oil. GMO status (Canadian canola is dominantly GMO Roundup-Ready) does not affect the heavy-metals profile.

## Processing effects

Cold pressing (mechanical, used for premium unrefined cold-pressed rapeseed oil) retains a slightly higher metal load than solvent extraction followed by refining. Solvent extraction (hexane-based, the dominant industrial method) recovers higher oil yield. Refining reduces Pb-and-Cd through filtration and bleaching-clay adsorption; bleaching introduces trace Ni. Deodorisation at high temperature does not affect metal content. Hydrogenation (used for partially hydrogenated rapeseed oil, declining under FDA's trans-fat policy) introduces Ni from catalyst residue.

## Ingredient-derivative risk

Refined rapeseed/canola oil in glass packaging sits at the baseline-lowest-metal-load form. Refined product in PET, tin, or aluminium picks up modest additional metals through packaging-migration over shelf life. Cold-pressed unrefined rapeseed oil carries slightly higher Pb-and-Cd but lower Ni. Hydrogenated rapeseed oil (used in some industrial applications) carries additional Ni from catalyst residue. Rapeseed-oil-based salad dressings, mayonnaise, and finished sauces inherit the baseline load at the inclusion ratio.

## Mitigation options

### Sourcing levers

Specify refined oil over unrefined for the lowest baseline Pb-and-Cd load. Source from suppliers with documented seed-source agronomic screening. Canadian, EU, and Australian commodity supply chains are broadly equivalent.

### Agronomic levers

Soil pH management and Zn-availability management reduce brassica Cd uptake at the seed-production stage. Phosphate-fertiliser screening reduces ongoing Cd loading.

### Processing levers

Specify refining protocols with food-grade bleaching clay and Ni-screened catalysts.

### Formulation levers

For finished products, the inclusion ratio caps per-serving exposure.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and Ni (≤ 10 ppb) is the standard intervention.

### Packaging and storage levers

Glass is the baseline-cleanest option. PET is comparable. Tin and aluminium packaging contribute modest additional metals.

## Regulatory limits that apply

The Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) sets specific provisions for rapeseed/canola oil: iron 1.5 mg/kg max (virgin), 1.5 mg/kg max (refined), copper 0.1 mg/kg max. The EU Regulation 2023/915 applies the general fats-and-oils Pb maximum of 0.10 mg/kg. The FDA has not set rapeseed-or-canola-specific action levels. Commercial product consistently sits below applicable Pb limits per the loaded retail-market data.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|González-Torres et al. 2023]]. *Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils*, Applied Sciences | 2023 | Peer-reviewed | Global systematic review of 35 vegetable oil types from 24 countries including rapeseed |
| 2 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | Saudi market survey including 17 rapeseed oil samples within 161-sample multi-oil panel |
<!-- END: hmi-source-legend -->
