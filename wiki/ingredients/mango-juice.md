---
type: ingredient
commodity: mango-juice
title: "Mango Juice"
label: "Mango Juice"
aliases: [mango-nectar, packaged-mango-juice]
category: juice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [5, 7]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [100, 1100]
    p95_ppb: 1100
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [6, 9]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
drivers: [soil-uptake, packaging, tetra-pak-aluminum-leaching]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/fruit-juice-not-canned]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Mango Juice

Mango juice is a fruit-juice ingredient derived from the pulp of mango fruit ([[ingredients/mango]]), most commonly sold as a packaged single-strength juice, juice concentrate, or nectar (juice diluted with water and sweetener). The contamination profile reflects two distinct exposure pathways: the agricultural metal load of the source mango fruit, which carries through pressing into the juice fraction, and packaging-related metal migration, particularly aluminum from Tetra Pak-style aseptic packaging where the aluminum foil layer can leach into the acidic juice over shelf life. The available evidence in the current corpus comes from three packaged-juice market surveys (Saudi Arabia, Iran, Nepal), which provide a reasonable Asian and Middle Eastern market snapshot but no US, EU, or Latin American baseline.

## Why this commodity accumulates heavy metals

Mango juice accumulates heavy metals through two principal pathways. The first is the agricultural-source pathway: mango fruit takes up Pb, Cd, Cr, and Ni from orchard soils through root uptake, and these metals partition into the juice fraction during pressing. The juice extraction step concentrates soluble metals relative to the discarded pomace, so mango juice typically carries equal or slightly higher per-volume metal load than the same mass of whole mango fruit. The mango-fruit baseline for soil-derived metals is captured at [[ingredients/mango]].

The second pathway is packaging-related. The Iranian Sobhanardakani study of 48 packaged fruit juice samples documented aluminum at 0.10 to 1.10 mg/L (100 to 1,100 ppb) in mango juice, with the broader four-juice dataset attributing the elevated Al values to acid-mediated leaching from the aluminum foil layer in Tetra Pak aseptic packaging ([[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani et al. 2017]]). The acidity of mango juice (pH typically 3.4 to 4.8) accelerates Al migration relative to less-acidic packaged products. The same packaging mechanism contributes smaller amounts of other metals depending on can and lid composition.

The Saudi Jeddah dataset of 42 mango juice samples from 15 brands provides commercial-baseline values for total chromium (mean 7.6 ppb) and nickel (mean 5.9 ppb), both well below WHO/FAO drinking-water reference values ([[sources/farid2010-fruit-juices-jeddah-trace-elements|Farid and Enani 2010]]). The Nepalese Kathmandu dataset confirms that commercially packaged mango juice from mainstream brands carries Pb below the FAAS detection limit, with iron, copper, and zinc within drinking-water reference levels ([[sources/paudel2024-packaged-fruit-juices-nepal|Paudel et al. 2024]]).

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | <LOD | — | low | [[sources/paudel2024-packaged-fruit-juices-nepal\|1]] |
| Cd  | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | n=1 | 5–7 | — | low | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|3]] |
| Al  | n=1 | 100–1,100 | 1,100 | low | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|2]] |
| Cr  | n=1 | 6–9 | — | low | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|3]] |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Saudi Arabian Jeddah survey of 129 commercial fruit juice samples (42 mango, 42 apple, 45 orange) from 15 brands reports mango juice Cr at 7.64 ± 1.02 ppb and Ni at 5.93 ± 0.96 ppb by GFAAS ([[sources/farid2010-fruit-juices-jeddah-trace-elements|Farid and Enani 2010]]). Cr is total chromium, not Cr-VI, and per the CLAUDE.md Part 14 speciation rule, total Cr must never be substituted for Cr-VI without speciated measurement. The study did not measure Pb, Cd, As, Hg, or Sn; the contamination profile for these analytes is therefore not informed by this source.

The Iranian Hamedan survey of 48 packaged fruit juice samples (12 mango, 12 cherry, 12 orange, 12 pineapple, all from 4 brands in Tetra Pak aseptic packaging) reports mango juice Al at a range of 0.10 to 1.10 mg/L (100 to 1,100 ppb) ([[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani et al. 2017]]). The broader dataset reported a mean Al across all four juice types of 1.24 ± 0.36 mg/L, exceeding the WHO MPL of 0.2 mg/L by approximately 6-fold, with the authors attributing the elevated Al to packaging migration. Mango juice ran lower than cherry juice (range 1.01 to 3.30 mg/L) and orange juice (range 1.01 to 1.20 mg/L) within the same study, suggesting that the lower acidity of mango juice or its higher pulp content reduces Al leaching from Tetra Pak packaging relative to the more-acidic juice types. Health risk assessment under hazard-index methodology returned values below 1 for both children and adults, indicating no acute toxic risk despite the exceedance of the WHO MPL.

The Nepalese Kathmandu survey of 16 packaged fruit juice samples (4 mango brands, 4 each of apple, orange, lychee) reports Pb below the FAAS detection limit in all 16 samples ([[sources/paudel2024-packaged-fruit-juices-nepal|Paudel et al. 2024]]). The study did not measure Cd, As, Hg, Sn, Al, Ni, or Cr.

Regional and brand variation is not resolved beyond the three single-region surveys above. No US, EU, or Latin American mango juice market survey is in the current routed corpus for this page.

## Processing effects

The juice-extraction process from whole mango concentrates soluble metals into the juice fraction relative to the discarded skin, pulp, and stone. Mango juice carries a slightly higher per-volume metal load than the same mass of whole mango fruit for water-soluble metals; for metals bound in the cellulose or skin matrix, the juice fraction may carry less than the whole fruit. Pasteurization and aseptic packaging are the dominant processing steps after juice extraction, with the packaging-related Al migration documented above as the principal processing-related contamination pathway. Concentrate (where juice is reduced by evaporation to a syrup and reconstituted with water at packaging) proportionally elevates all metals during the concentration step and then proportionally dilutes them at reconstitution; the net effect on packaged single-strength mango juice depends on the water source used for reconstitution. Mango juice nectar (juice diluted with water and sweetener) carries lower per-volume metal load than 100 percent mango juice on a juice-content basis.

## Ingredient-derivative risk

Mango juice as an ingredient has a narrow derivative footprint. Single-strength mango juice is the baseline form. Mango juice concentrate is the processed form most often used as an ingredient in formulated beverages, with proportionally elevated metal loads on a per-mass basis until reconstitution. Mango nectar (typically 25 to 50 percent juice diluted with water and sweetener) carries proportionally lower metal load per volume than 100 percent juice. Mango juice powder, produced by spray-drying, concentrates all components by mass loss and carries elevated per-gram metal load relative to liquid juice. Dried mango pulp and mango leather are out of scope for the juice page and live at [[ingredients/mango]].

## Mitigation options

Sourcing levers operate at the brand and producer level. Sourcing mango fruit from orchards without documented soil contamination is the upstream lever; the [[ingredients/mango]] page covers the per-fruit sourcing variables. For finished juice, brand selection is the consumer-facing lever; the Iranian dataset documented brand-level variability in Al that exceeded the analytical variability across juice types within a single brand, suggesting that packaging-process control varies meaningfully between brands.

Agronomic levers operate on the mango orchard and are addressed at the source-fruit page.

Processing levers are limited. Juice extraction, pasteurization, and packaging are the principal processing steps; switching from Tetra Pak aseptic packaging to glass bottles or non-aluminum cartons eliminates the Al migration pathway documented in [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani et al. 2017]]. Reducing shelf life and lower storage temperatures both reduce accumulated Al migration into packaged juice.

Formulation levers operate on the brand. Diluting 100 percent mango juice to a nectar formulation with metal-tested water proportionally reduces all metal loads. Substituting low-Al packaging materials in formulated juice products eliminates the dominant Al pathway.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of finished packaged juice for Al against a sourcing specification catches packaging-related contamination drift. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are the load-bearing controls for the juice form. Tetra Pak with aluminum foil layer is the documented high-Al-migration packaging; glass bottles, all-plastic bottles, and non-aluminum aseptic cartons eliminate or substantially reduce the Al pathway. Shorter shelf life and lower storage temperature both reduce accumulated migration.

## Regulatory limits that apply

The Codex Alimentarius maximum levels for Pb in fruit juices establish 0.03 mg/kg (30 ppb) for general fruit juice, 0.04 mg/kg (40 ppb) for grape juice, and 0.05 mg/kg (50 ppb) for berry and small-fruit juice; mango juice falls under the general category. The European Union Regulation (EU) 2023/915 establishes Pb in fruit juices, nectars, and fruit juices reconstituted from concentrate at 0.030 mg/kg (30 ppb), with stricter values for grape-based products ([[regulations/eu2023-contaminants-maximum-levels]]). The WHO drinking-water guideline value for Al is 0.2 mg/L (200 ppb), used as the reference for the Iranian packaging-migration finding ([[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani et al. 2017]]); this is a drinking-water reference rather than a fruit juice ML, but it provides the comparative benchmark in the absence of a specific juice Al limit. The United States FDA inorganic arsenic action level for apple juice is 10 ppb ([[regulations/fda-closer-to-zero]]); FDA has no commodity-specific action level for mango juice under the current Closer to Zero framework.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology | 2024 | Peer-reviewed | Primary Pb occurrence data for packaged mango juice (n=4 brands, Kathmandu, FAAS); Pb below detection limit in all samples; confirms low Pb contamination in commercial packaged juice |
| 2 | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|Sobhanardakani et al. 2017]]. *Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices*, Annals of Military and Health Sciences Research | 2017 | Peer-reviewed | Primary Al occurrence data for packaged mango juice (n=12, Hamedan Iran, Tetra Pak aseptic packaging); Al range 100–1,100 ppb attributed to packaging migration |
| 3 | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|Farid et al. 2010]]. *Levels of Trace Elements in Commercial Fruit Juices Consumed in Jeddah, Saudi Arabia*, Medical Journal of Islamic World Academy of Sciences | 2010 | Peer-reviewed | Primary total Cr and Ni occurrence data for mango juice (n=42, 15 brands, GFAAS); Cr mean 7.6 ppb, Ni mean 5.9 ppb; total Cr only, not Cr-VI |
<!-- END: hmi-source-legend -->
