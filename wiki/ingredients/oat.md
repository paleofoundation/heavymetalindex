---
title: "Oat"
type: ingredient
commodity: oat
label: "Oat"
aliases: [oat milk, oat base]
category: grain
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: 400
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: 310
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
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
    typical_ppb: [300, 1000]
    p95_ppb: 1970
    confidence: medium
    n_studies: 5
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
    typical_ppb: [10, 100]
    p95_ppb: 5400
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
  tAs:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: 600
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [plant-milks-non-soy-non-rice, teething-and-snacks-non-rice]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 9
---

# Oat

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 10–100 | medium | [[sources/du2025-infant-thickener-urinary-arsenic\|1]], [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|2]], [[sources/rubio2023-metals-cereals-madeira-azores\|3]] |
| Cd | n=4 | 10–100 | medium | [[sources/du2025-infant-thickener-urinary-arsenic\|1]], [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|2]], [[sources/rubio2023-metals-cereals-madeira-azores\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 10–100 | low | [[sources/du2025-infant-thickener-urinary-arsenic\|1]], [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|2]] |
| tHg | data gap | — | — | — |
| Ni | n=5 | 300–1000 | medium | [[sources/du2025-infant-thickener-urinary-arsenic\|1]], [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|2]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|3]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 10–100 | low | [[sources/du2025-infant-thickener-urinary-arsenic\|1]], [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1 | low | [[sources/du2025-infant-thickener-urinary-arsenic\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]] |

## Routing

This node is linked from [[products/plant-milks-non-soy-non-rice]], [[products/teething-and-snacks-non-rice]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/du2025-infant-thickener-urinary-arsenic\|Du et al. 2025]]. *Heavy metal exposures in aerodigestive clinic cohort of infants with reflux or dysphagia*, Scientific Reports | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|Oduro et al. 2023]]. *Health risks of potentially toxic metals in cereal-based breakfast meals in the Kumasi Metropolis, Ghana*, Discover Food | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/rubio2023-metals-cereals-madeira-azores\|Rubio et al. 2023]]. *Dietary Exposure to Toxic Metals (Cd, Pb and Hg) from Cereals Marketed in Madeira and the Azores*, Biological Trace Element Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | *[awaiting synthesis]* |
| 5 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Measured Pb, tHg, Ni, and U in retail oat-based plant drinks from Spain; Pb detected in one non-organic oat drink sample |
| 6 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | Brazilian infant food Al survey (n=95); oat is a constituent of salty purees in scope; documents high Al content and variable bioaccessibility in oat-containing infant foods |
| 7 | [[sources/mania2020-nickel-cereal-grains-poland\|Mania et al. 2020]]. *Assessment of exposure to nickel intake with selected cereal grains and cereal-based products*, Roczniki Panstwowego Zakladu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 8 | [[sources/slepecka2017-ecological-cereal-heavy-metals-poland\|Slepecka et al. 2017]]. *Evaluation of cadmium, lead, zinc and copper levels in selected ecological cereal food products and their non-ecological counterparts*, Current Issues in Pharmacy and Medical Sciences | 2017 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni occurrence dataset; oat identified as a high-Ni grain with a disproportionate load factor relative to dietary weight |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Oats (Avena sativa) are a non-rice cereal grain grown in temperate climates worldwide (Canada, Russia, EU member states, Australia, US). Oats accumulate cadmium from soil at moderate rates — generally lower than wheat from the same growing region, and an order of magnitude lower than rice for iAs specifically (oats are not an iAs accumulator). Oat bran concentrates Cd relative to the endosperm; whole-oat products carry approximately 2× the Cd of rolled or steel-cut oats from the same source grain.

Oat positioning in baby cereal and breakfast cereal markets has shifted in the post-2018 brown-rice-syrup-iAs-debate era: parents and infant nutrition manufacturers have moved toward oat-based products to avoid rice-iAs exposure. This makes oat an increasingly important Cat 3 and Cat 1 ingredient.

The HMTc panel concerns for oat are Cd (moderate, with bran fraction concentration) and Pb (generally low). iAs in oat is at trace levels, not a meaningful contributor to dietary iAs.

## Ranges by source, region, and variety

Geographic variance: Canadian oats are a major North American and global commodity oat source; Canadian Prairie soils generally carry lower Cd than European production regions. Australian oats from Western Australia carry moderate Cd. European production (Finland, Sweden, Germany, Poland) shows variance by region. Oats from areas with documented elevated soil-Cd from phosphate-fertilizer history carry higher Cd than oats from cleaner soils.

Cultivar variance: oat varieties with documented low Cd accumulation have been identified in breeding programs; commercial varieties span a 2-3× range of Cd accumulation within a single growing region.

## Processing effects

Oat processing (cleaning, hulling, kilning, rolling or steel-cutting, packaging) does not change source-grain Cd meaningfully. Hulling removes the inedible hull but retains the bran. Rolled and steel-cut oats carry the source-grain Cd unchanged. Instant oats (pre-cooked, flash-dried) carry the source-grain Cd plus minor concentration effects from drying.

Oat bran (separated from the endosperm-rich fraction during milling) concentrates Cd; oat-bran cereal carries 2-3× the Cd of equivalent rolled-oat cereal.

Cooking oats with water and consuming the cooking water (as is standard for oatmeal) conserves the source-grain Cd in the finished bowl. Boiling-and-discard is uncommon for oats and would only modestly reduce per-serving Cd.

## Ingredient-derivative risk

Oat derivatives: oat flour, oat milk (typically 7-15 percent oat by mass; see [[ingredients/plant-milk]]), oat-fiber supplements, oat-protein isolates (concentrated Cd), beta-glucan supplements (oat-derived fiber). Oat-milk products inherit the source-grain Cd with water-dilution effects.

Oat baby cereal is a major Cat 1 product category that has gained share over rice baby cereal in iAs-conscious consumer segments. See [[ingredients/baby-cereals-dry]] and [[products/baby-cereals-dry-non-rice]].

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include single-origin sourcing from documented low-Cd growing regions (parts of Canadian Prairies, certain Australian production zones), supplier-side Cd testing of incoming grain.

**Agronomic levers** ([[mitigation/agronomic]]) include soil pH management, low-Cd-accumulator cultivar selection, avoidance of high-Cd phosphate fertilizers.

**Processing levers** ([[mitigation/processing]]) include whole-oat vs steel-cut-oat vs rolled-oat formulation (impacts bran-fraction Cd contribution).

**Formulation levers** ([[mitigation/formulation]]) include substitution of oat for rice in iAs-target-low products (oat substantially reduces iAs while moderately increasing Cd), and oat-percentage adjustment in compounded products.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd testing on incoming oat grain, particularly for infant-targeted and baby-cereal manufacturing. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not generally consequential for oat metal load.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Cd in cereal grains. Oat falls under the general cereal Cd ML.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex Cd ML for cereal grains.
- FDA does not maintain a binding action level for Cd in oats specifically.
- California Prop 65 ([[regulations/california-prop65]]) Cd MADL applies to oat-containing products sold in California.


