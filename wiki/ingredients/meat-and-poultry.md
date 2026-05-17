---
title: Meat and Poultry
type: ingredient
commodity: meat-and-poultry
aliases: [meat, poultry, chicken, turkey, beef, pork, game]
category: terrestrial-animal
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 50], p95_ppb: 700, confidence: medium, n_studies: 8, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [1, 30], p95_ppb: 230, confidence: medium, n_studies: 6, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [0, 20], p95_ppb: 310, confidence: medium, n_studies: 5, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [50, 250], p95_ppb: null, confidence: medium, n_studies: 5, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [300, 600], p95_ppb: null, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 30], p95_ppb: null, confidence: medium, n_studies: 5, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [10, 70], p95_ppb: null, confidence: low, n_studies: 4, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [0, 50], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [animal-feed, organ-content, processing, mixed-meal-formulation]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/organ-meats]]"]
used_in_products: ["[[products/meat-and-poultry-purees]]", "[[products/mixed-meals-non-rice]]", "[[products/mixed-meals-rice-containing]]"]
audience: [regulator, educator, consumer, app]
sources: 11
updated: 2026-05-16
---

# Meat And Poultry

_Stub page. Chekri et al. 2019 reports meat/fish-based ready-to-eat infant meals as a combined category, so this source cannot isolate meat and poultry from fish-containing baby foods. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]_

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=8 | 1–50 | medium | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| Cd | n=6 | 1–30 | medium | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 1–30 | medium | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/meligy2024-camel-meat-toxic-elements\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| tHg | n=5 | 0–20 | medium | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/eccles2024-polar-bear-metals-traditional-food\|3]] |
| Ni | n=5 | 50–250 | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/eccles2024-polar-bear-metals-traditional-food\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Al | n=3 | 300–600 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Cr | n=4 | 10–70 | low | [[sources/meligy2024-camel-meat-toxic-elements\|1]], [[sources/kamaly2023-egypt-poultry-metals\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| Sn | n=2 | 0–50 | low | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

_Pending meat- and poultry-specific occurrence extraction._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies); meat/fish baby foods group Pb and Cd occurrence context across multiple countries; not separated by species |
| 2 | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports (in press 2025) | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/eccles2024-polar-bear-metals-traditional-food\|Eccles et al. 2024]]. *Non-invasive biomonitoring of polar bear feces can be used to estimate concentrations of metals of concern in traditional food*, PLOS ONE | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/meligy2024-camel-meat-toxic-elements\|Meligy et al. 2024]]. *Concentrations of toxic and essential elements in camel (Camelus dromedarius) tissues: muscle, offal, hair, and blood from Saudi Arabia*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/hampton2023-lead-game-meat-australia\|Hampton et al. 2023]]. *Lead contamination in Australian game meat*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/kamaly2023-egypt-poultry-metals\|Kamaly et al. 2023]]. *Health risk assessment of metals in chicken meat and liver in Egypt*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 8 | [[sources/pain2023-lead-pheasant-dogfood-uk\|Pain et al. 2023]]. *Lead concentrations in commercial dogfood containing pheasant in the UK*, Ambio | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/berky2022-wildgame-lead-peru\|Berky et al. 2022]]. *Risk of lead exposure from wild game consumption from cross-sectional studies in Madre de Dios, Peru*, Lancet Regional Health – Americas | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 10 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for meat and fish infant foods (as-consumed); provides Sn and Sb data not in FDA TDS; French regulatory diet context |
| 11 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency (FERA) Report for UK Food Standards Agency | 2015 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

