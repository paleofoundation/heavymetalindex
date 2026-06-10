---
type: ingredient
commodity: peanut-oil
title: "Peanut Oil"
label: "Peanut Oil"
aliases: []
category: oil
contamination_profile:
  Pb: { status: populated, typical_ppb: [10, 30], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [5, 10], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [5, 90], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [seed-source, extraction-method, refining, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Peanut Oil

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 10–30 | low | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|2]] |
| Cd | n=2 | 5–10 | low | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 5–90 | low | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|2]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | IR Pb, Cd, tAs, Fe, Zn occurrence in Traditional and industrial edible vegetable oils (peanut, sunflower, olive, sesame) from Hamadan, western Iran, 2022; n=20 traditional +... (n=40) |
| 3 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | SA Pb, Cd, tAs, Cu, Zn, Fe, Mn occurrence in 161 edible vegetable oil samples (32 corn, 28 sunflower, 21 soybean, 19 sesame, 17 rapeseed, 17 peanut, 27... (n=161) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Peanut oil is extracted from peanut/groundnut (Arachis hypogaea), a legume that grows underground (hence "groundnut"). The subterranean fruiting habit makes peanuts more soil-contact than aerial-fruiting crops, which elevates Pb and Cd uptake potential relative to aerial legumes. Peanut oil sits at the higher end of the per-vegetable-oil Pb and Cd range (Pb 10-30 ppb, Cd 5-10 ppb per [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri 2024]] Iranian Hamadan PTE survey and [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Ashraf 2012]] Saudi Arabia vegetable oils survey) because the source peanut's elevated soil-uptake metal load partially partitions into the oil fraction during extraction. The tAs range of 5-90 ppb in the Iranian and Saudi market surveys reflects upper-end emerging-market product; better-controlled commercial supply sits at the lower end.

The HMTc panel concerns for peanut oil are Pb and Cd (elevated relative to most other vegetable oils), and trace tAs in some emerging-market supply. Refined peanut oil sold for culinary frying applications (high smoke point) carries lower metals than crude peanut oil.

## Ranges by source, region, and variety

Variance within peanut oil tracks source-peanut origin region (Chinese, Indian, US southeastern, Argentine, African peanut production — each with different soil-uptake baselines), peanut cultivar, extraction method (cold-press vs solvent extraction), and refining tier (crude vs refined). The Iranian and Saudi market surveys document elevated levels in some imported peanut oils; US-market commercial peanut oil sits at lower levels reflecting tighter upstream supply specifications and refining practice.

## Processing effects

Peanut oil manufacturing involves peanut cleaning, shelling, optional roasting, crushing, oil extraction (solvent extraction for commodity-scale; expeller-press for premium cold-pressed product), filtering, and refining. Each refining step removes additional trace metals. Crude unrefined peanut oil retains more of the source-peanut metal load; fully refined peanut oil sits at lower levels.

## Ingredient-derivative risk

Peanut oil is used as a frying oil (high smoke point makes it favored for deep-frying applications), in salad dressings, in Asian cuisine, and in industrial baking. Derivatives include hydrogenated peanut oil and fractionated peanut oil. Peanut oil is one ingredient in the broader [[ingredients/peanut-butter|peanut-butter]] and [[ingredients/peanuts|peanut]] commodity family; the source-peanut also routes into peanut butter, peanut flour, and roasted-peanut products that carry the full source-peanut Pb/Cd profile (not partitioned to lipid/non-lipid fractions like the oil).

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Source-peanut origin specification favoring documented low-soil-Pb/Cd production regions; refinery-tier specification (refined vs crude); and contractual specification of Pb/Cd ceiling on incoming oil.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the peanut-cultivation stage. Soil pH management; cultivar selection (Cd-low peanut cultivars are under agronomic research); avoidance of high-Cd organic amendments; and remediation of contaminated soils in peanut-growing regions per [[ingredients/peanuts|peanut]].

**Processing levers** ([[mitigation/processing]]) include refining-stage interventions (bleaching, deodorization, multi-pass refining); specification of refined-only product for brand-side incoming oil.

**Formulation levers** ([[mitigation/formulation]]) include alternative high-smoke-point oil substitution ([[ingredients/sesame-oil|sesame oil]], canola oil, [[ingredients/rice-bran-oil|rice bran oil]], avocado oil) where the matrix permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, tAs testing on incoming peanut oil against EU 2023/915 maximum levels and brand internal specifications. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include lined-container specification; glass, PET, or food-grade-lined containers for finished product.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set peanut-oil-specific maximum levels for Pb or Cd; general EU food-safety law applies; oilseed-related contaminant provisions reference [[sources/codex-cxs-193-1995|CXS 193-1995]].
- Codex Alimentarius CXS 210-1999 (Named Vegetable Oils) provides composition standards for peanut oil.
- FDA does not set a quantitative action level specific to peanut oil; general FDA enforcement on toxic-element contamination applies.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to peanut-oil products sold in California.


