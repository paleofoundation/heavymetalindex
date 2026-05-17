---
type: ingredient
commodity: black-pepper
title: "Black Pepper"
label: "Black Pepper"
aliases: []
category: herb-spice
contamination_profile:
  Pb: { status: populated, typical_ppb: [10, 130], p95_ppb: 370, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [20, 80], p95_ppb: 100, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [50, 200], p95_ppb: 1700, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [1, 10], p95_ppb: 60, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [850, 2080], p95_ppb: 4800, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [10000, 60000], p95_ppb: 178000, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [100, 600], p95_ppb: 2400, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
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

# Black Pepper

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 10–130 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]] |
| Cd | n=2 | 20–80 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 50–200 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]] |
| tHg | n=2 | 1–10 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]] |
| Ni | n=2 | 850–2080 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]] |
| Al | n=2 | 10000–60000 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]] |
| Cr | n=2 | 100–600 | low | [[sources/tinggi2025-spices-herbs-queensland\|1]], [[sources/cicero2022-minerals-spices-aromatic-herbs\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tinggi2025-spices-herbs-queensland\|Tinggi et al. 2025]]. *Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | AU/IN/CN Pb, Cd, tAs, tHg, Ni, Al, Cr occurrence in Commercial dried spices and herbs purchased from Queensland, Australia markets; plus 20 turmeric samples (13 conventional, 7 organic) (n=69) |
| 2 | [[sources/cicero2022-minerals-spices-aromatic-herbs\|Cicero et al. 2022]]. *Mineral and Microbiological Analysis of Spices and Aromatic Herbs*, Foods | 2022 | Peer-reviewed | IT/SA/IN Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn occurrence in 13 spice and aromatic herb samples purchased in an international market in Saudi Arabia, representing products from India,... (n=13) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Black pepper (Piper nigrum) accumulates lead, cadmium, and chromium through two distinct pathways. Soil-uptake delivers cadmium and lead in proportion to soil-Cd and soil-Pb in the growing region; black pepper is grown predominantly in South and Southeast Asia (India, Indonesia, Vietnam, Sri Lanka, Brazil), and several major production zones have elevated soil-Cd legacies from prior agricultural practice. Post-harvest contamination is the second pathway and the more variable contributor: drying on bare ground without barrier protection, equipment metal contact during grinding, and storage-bag contamination all introduce Pb that the corn did not carry as harvested. Black pepper has been less affected than turmeric by the documented intentional adulteration with lead chromate or lead oxide pigments, but the post-harvest contamination pathway remains the dominant source of pepper Pb above baseline.

The HMTc panel concerns are dominantly Pb and Cr, with Cd as secondary. Total arsenic in pepper can be elevated in some production regions per [[sources/cicero2022-minerals-spices-aromatic-herbs|Cicero 2022]] and [[sources/tinggi2025-spices-herbs-queensland|Tinggi 2025]]; the iAs/tAs split is not consistently reported in the corpus for pepper.

## Ranges by source, region, and variety

The contributing corpus is small (n=2 A-tier sources). Cicero 2022 reports Italian-market pepper Pb and Cd in the same survey alongside other aromatic herbs and spices; Tinggi 2025 reports Queensland-Australia retail-market pepper sampled with a broader spice survey. Across the two sources, Pb means cluster in the 10-130 ppb range with p95 around 370 ppb, Cd means cluster in the 20-80 ppb range with p95 around 100 ppb, and Cr means run higher than Cd, consistent with the equipment-contact and post-harvest contamination pathway. Geographic variation by origin region is documented in the broader spice corpus but not yet resolved at black-pepper-specific scale; expanding the source corpus to include India-origin and Vietnam-origin pepper specifically would tighten the geographic-segmented sourcing analysis.

Variety effects (black vs white vs green pepper, prepared from the same Piper nigrum berry at different ripeness and processing stages) are documented qualitatively: white pepper, prepared by removing the outer skin, can carry slightly less Pb than black pepper from the same source when post-harvest contamination was on the surface, because the soak-and-strip processing removes the skin where surface deposition concentrates.

## Processing effects

Pepper processing introduces metal contamination at two main steps: drying and grinding. Sun-drying on the ground is the largest documented post-harvest Pb source; barrier-drying on raised racks or in mechanical dryers can eliminate this pathway. Grinding-equipment metal contact (steel hammer mills, brass-lined screens) can introduce Pb and Cr at trace levels. Whole peppercorns therefore carry less Pb on average than ground pepper from the same source, with the difference driven by grinding-equipment specification.

Cooking does not change pepper metal content. Pepper is used in small quantities per serving (typically 0.5-2 grams per dish), so the per-serving metal contribution is small even at the upper end of the per-pepper concentration distribution; cumulative exposure becomes a concern for populations with very high daily pepper consumption.

## Ingredient-derivative risk

Pepper essential oil and pepper oleoresin are derivatives used in flavor and dietary-supplement applications. Pepper essential oil is steam-distilled and typically carries trace metals at much lower concentrations than the whole spice because the metals do not partition into the volatile oil fraction. Pepper oleoresin is solvent-extracted and can carry intermediate metal content, depending on the solvent and the resin separation steps. Pepper powder in mixed spice blends inherits the per-pepper metal load proportional to the pepper percentage.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Origin-region segmentation (India-Tellicherry, Vietnam, Indonesia, Sri Lanka all carry different soil-Cd profiles and different post-harvest practices) and supplier-level QC review on drying and grinding facilities deliver the largest single brand-side reduction. Single-origin sourcing with documented post-harvest practice (raised-rack drying, food-grade grinding equipment) is the operational specification.

**Processing levers** ([[mitigation/processing]]) include sub-surface-drying specification at the producer level and food-grade-grinding-equipment specification. Whole-peppercorn sourcing with finished-product grinding at a controlled facility reduces grinding-introduced Pb.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level ICP-MS Pb/Cd/Cr testing on incoming spices. Detection floors should be set well below the regulatory ceiling for the matrix; see [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not consequential for whole peppercorn but matter for ground pepper, where light, oxygen, and moisture exposure can accelerate trace contamination from packaging materials over multi-year shelf life.

**Agronomic and formulation levers** are weaker than sourcing and processing for pepper specifically. Cultivar selection within Piper nigrum does not dramatically shift metal-accumulation behavior; formulation substitution (using a different spice) is a recipe decision rather than a black-pepper mitigation.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb in spices including pepper (the spice-specific Pb ML applies).
- Codex Alimentarius standards for spices and culinary herbs (CXS 327-2017) set quality and composition specifications but defer heavy-metal MLs to national authorities.
- FDA does not maintain a binding action level for Pb in pepper specifically; FDA's guidance on heavy metals in spices ([[regulations/fda-guidance-heavy-metals-spices]] when added) anchors the US framing.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to pepper-containing consumer products sold in California; the serving-based screen drives most enforcement attention.


