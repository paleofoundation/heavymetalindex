---
type: ingredient
commodity: raspberries
title: "Raspberries"
label: "Raspberries"
aliases: []
category: fruit
contamination_profile:
  Pb: { status: populated, typical_ppb: [8, 270], p95_ppb: 390, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [0, 6], p95_ppb: 11, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 5
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Raspberries

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | GAP | 2/10 HMTc analytes, total n=4 | only 2/10 analytes have evidence |
| D2 Regional coverage | OK | 4 jurisdictions, top PL 60% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 3 drivers, 0 upstream source(s) | no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 4 claims checked, 4 supported; 2 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming raspberries: fda-ctz-Pb-babyfood-2025, codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd; pairing 0 paired, 2 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; depth below occasional bar |
| **Principle balance** | **OK** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | — | — | — | — | — |
| Cd | — | — | — | — | — |
| iAs | — | — | — | — | — |
| tAs | — | — | — | — | — |
| tHg | — | — | — | — | — |
| Ni | — | — | — | — | — |
| Al | — | — | — | — | — |
| Cr | — | — | — | — | — |
| Sn | — | — | — | — | — |
| U | — | — | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 3 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
| 4 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 5 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | PL Pb, Cd occurrence in Apples, plums, strawberries, raspberries, and white grapes from allotment gardens in Lublin city center and surrounding rural areas,... (n=108) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Raspberries (Rubus idaeus and related Rubus species) are aerial-fruiting bramble berries. Like other small fruits ([[ingredients/blueberries|blueberries]], blackberries, strawberries), raspberries accumulate heavy metals primarily via soil uptake at moderate efficiency, with some contribution from atmospheric deposition (more relevant to fields near roads or industrial facilities) and from irrigation water. The aerial fruiting habit makes raspberries less soil-contact than root vegetables, which limits direct soil-particle adhesion to the fruit; the wash-and-rinse step at processing further reduces surface-deposited metals. Compared to leafy vegetables, raspberries carry lower per-mass [[metals/cadmium|Cd]] and [[metals/lead|Pb]]; compared to most temperate tree fruits ([[ingredients/apple|apple]], pear), raspberries sit at moderate per-mass levels.

The HMTc panel concerns for raspberries are generally low; Pb and Cd at moderate levels with limited literature attention because raspberries are not a high-volume infant-feeding commodity (most exposure is in adult diet, where per-serving doses are modest). Raspberry-based products marketed to infants and toddlers (raspberry purees, raspberry-flavored snacks, raspberry-containing baby food) do warrant attention because of the high-frequency feeding context.

## Ranges by source, region, and variety

Variance within raspberries tracks source-region soil profile (industrial-region or urban production carries elevated Pb; commercial-orchard production in agricultural regions sits at moderate baseline), cultivar (red raspberry, black raspberry, gold raspberry — limited documented per-cultivar differences), and growing-system (greenhouse-grown raspberry carries lower metals than field-grown because of controlled inputs; organic-certified raspberry does not appreciably differ from conventional on heavy-metal content because organic certification does not address soil metals). The broader [[ingredients/fruits|fruits]] aggregate corpus covers the regional spread; raspberry-specific literature is limited.

## Processing effects

Raspberry processing for fresh-market consumption is minimal: harvest, wash, pack. Industrial processing for frozen raspberry, raspberry juice, raspberry puree, raspberry concentrate, and freeze-dried raspberry involves washing, freezing or thermal processing, and packaging. Washing reduces surface-deposited Pb. Concentration via evaporation (for raspberry concentrate and raspberry-flavored syrups) concentrates per-mass metals. Freeze-drying retains the source-raspberry metal load at concentrated per-mass levels. Raspberry-jam and raspberry-jelly manufacturing combines raspberry with sugar and pectin; per-mass metals are diluted by the added ingredients.

## Ingredient-derivative risk

Raspberry derivatives include fresh raspberry, frozen raspberry, raspberry juice, raspberry concentrate, raspberry puree (for [[ingredients/fruit-purees|fruit purees]] for infant feeding), raspberry powder (freeze-dried and ground), raspberry jam, raspberry jelly, raspberry syrup (flavoring application), and raspberry-flavored beverages. Concentrated and powdered raspberry products carry per-mass metals at higher levels than fresh raspberry. Raspberry seed oil (a cosmetic and nutritional product) partitions metals to non-lipid fractions.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-region soil verification for raspberry farms; supplier audit programs for documented low-soil-Pb production regions; and contractual specification of Pb/Cd ceiling on incoming raspberry supply for infant-and-young-child product manufacturers.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the raspberry-cultivation stage. Soil pH management; avoidance of high-Pb agrochemical inputs; and irrigation-water specification.

**Processing levers** ([[mitigation/processing]]) include washing optimization for surface-Pb removal; processing-equipment material specification; and freezing as a metal-neutral preservation method.

**Formulation levers** ([[mitigation/formulation]]) include substituting raspberry with lower-risk fruits where the matrix permits; reducing the raspberry fraction in mixed-fruit purees for infant feeding.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on incoming raspberry supply. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are minor; raspberry products are typically packaged in glass, plastic, or aseptic carton (canned raspberry is uncommon).

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb in berry fruits at 100 ppb; Cd at 50 ppb (general fruit), 100 ppb (specific fruit categories).
- FDA Closer to Zero baby-food Pb action levels: 10 ppb for fruit purees including raspberry-containing infant fruit products ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets fruit-category limits aligned broadly with EU.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to raspberry products sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
