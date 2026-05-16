---
type: ingredient
commodity: shark
title: "Shark"
label: "Shark"
aliases: [mako-shark, soupfin-shark, dogfish]
category: fish-seafood
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [96, 159]
    p95_ppb: 320
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 3]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [1128, 1286]
    p95_ppb: 2140
    confidence: medium
    n_studies: 1
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
    typical_ppb: [137, 216]
    p95_ppb: 380
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
drivers: [biomagnification, top-predator-trophic-level, harvest-region, species, methylmercury-bioaccumulation]
lower_risk_variants: ["[[ingredients/fish]]"]
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Shark

Shark is a top-predator marine fish category covering mako shark (Isurus oxyrinchus), soupfin shark (Galeorhinus galeus), dogfish, and other large pelagic and coastal sharks consumed as a food fish in some markets. The metal profile is dominated by mercury, with shark documented as one of the three most-Hg-contaminated finfish categories in the global market alongside swordfish and large predatory tuna. The Mexican Tijuana market survey of fresh fish reports mako shark at mean total mercury of 1,286 µg/kg (range 690 to 2,140) and soupfin shark at mean 1,128 µg/kg (range 460 to 1,810), both substantially exceeding the Mexican maximum permissible limit of 1,000 µg/kg for canned fish and the EU 2023/915 maximum level for predatory fish ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Rodriguez-Mendivil et al. 2019]]). The Italian 10-year compliance dataset cited on [[ingredients/molluscs]] reports shark species at a 6.48 percent non-compliance rate for Hg against the EU 1.0 mg/kg ceiling.

## Why this commodity accumulates heavy metals

Shark accumulates heavy metals through biomagnification at the top of the marine food chain. Sharks are apex or near-apex predators with lifespans of 20 to 70+ years depending on species, accumulating methylmercury (MeHg) through consumption of smaller fish that have themselves accumulated MeHg from their prey. The bioaccumulation factor for MeHg from seawater to top-predator finfish is documented at approximately 10⁶ to 10⁷, with each trophic level adding a factor of approximately 3 to 10. Shark species, occupying trophic positions 4 to 5 in the marine food web, sit at the highest end of this accumulation pattern.

The MeHg-vs-total-Hg distinction is important for shark: in shark muscle tissue, the MeHg fraction of total Hg is approximately 100 percent (the Bloom 1992 evidence base for marine top predators), so the total Hg measurement reported by the Mexican Tijuana dataset can be treated as MeHg for risk assessment purposes per the standard EFSA and EPA convention. The CLAUDE.md Part 14 speciation rule applies: total Hg should not be substituted for MeHg without speciation in food matrices generally, but for top-predator marine fish, the 100 percent conversion is well-documented and standard.

Cd, Pb, Ni, and other metals in shark are at substantially lower levels than Hg and reflect environmental exposure pathways other than the food-chain biomagnification that drives Hg.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | 96–159 | 320 | low | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|1]] |
| Cd  | n=1 | 1–3 | — | low | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 | 1,128–1,286 | 2,140 | medium | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|1]] |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | n=1 | 137–216 | 380 | low | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|1]] |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

The Hg value reflects total Hg as measured; in shark muscle, total Hg ≈ MeHg per the standard speciation convention. For practical risk assessment purposes, the Hg values reported here can be treated as MeHg.

## Ranges by source, region, and variety

The Mexican Tijuana market survey of 20 fresh fish samples across four species (mako shark, soupfin shark, swordfish, yellowfin tuna; n=5 per species) provides the per-shark-species values in the table above ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Rodriguez-Mendivil et al. 2019]]). Mako shark reported tHg mean 1,286 ± 601 µg/kg (range 690 to 2,140), Pb mean 159 ± 93 µg/kg (range 100 to 320), Cd mean 2.3 ± 0.5 µg/kg (range 1 to 3), Cr mean 216 ± 93 µg/kg (range 160 to 380). Soupfin shark reported tHg mean 1,128 ± 522 µg/kg (range 460 to 1,810), Pb mean 96 ± 32 µg/kg (range 40 to 130), Cd mean 1.8 ± 0.2 µg/kg, Cr mean 137 ± 42 µg/kg (range 70 to 180).

Sixty percent of fresh fish samples in the Mexican dataset exceeded the Mexican MPL for tHg of 1,000 µg/kg; both shark species exceeded the MPL on average, while yellowfin tuna mean (377 µg/kg) and swordfish mean (545 µg/kg) were below the MPL. The hazard quotient analysis for shark exceeded 1.0 only under maximum consumption scenarios; under typical Mexican fish consumption (3.7 g/day fresh fish), the THQ for mako shark was 0.545, below the 1.0 threshold but the highest among the four species studied.

The Italian Istituto Zooprofilattico 10-year compliance dataset (cited on [[ingredients/molluscs]] for the broader seafood compliance picture) reports shark species at 6.48 percent non-compliance for Hg against the EU 1.0 mg/kg ceiling, the second-highest non-compliance rate after swordfish (11.30 percent) among marine fish species in the Italian market ([[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr|Garofalo et al. 2025]]). The Czech Smolikova 2016 dataset of heavy metals in fish products provides additional European context but the shark-specific values are not in the accessible data slice ([[sources/smolikova2016-heavy-metals-fish-czech|Smolíková et al. 2016]]).

Regional and species variation across mako, soupfin, blue, hammerhead, and other shark species is constrained by the available evidence to the two species in the Mexican dataset. The broader literature documents that larger shark species (great white, tiger, hammerhead) carry higher Hg than smaller species (dogfish, soupfin) due to longer lifespan and higher trophic position.

## Processing effects

Processing-state effects on shark metal load are limited. Fresh shark and frozen shark carry the source-fish metal load directly. Smoked shark concentrates metals proportionally with the water loss during smoking. Canned shark is uncommon in major markets. Cooking does not remove metals from shark muscle. The MeHg-rich tissue distribution within the shark (muscle, kidney, liver) is relatively uniform compared to organ-meat partitioning in other species; consumption of the muscle (the standard food product) captures the typical-tissue MeHg concentration.

## Ingredient-derivative risk

Shark produces a limited set of derivatives in the food-ingredient context. Fresh shark fillets and shark steaks are the principal forms in markets where shark is consumed. Dried shark, salted shark, and smoked shark are traditional preservation forms in some coastal cuisines (Icelandic hákarl from Greenland shark is a notable example, with the additional fermentation step that converts urea but does not remove Hg). Shark fin (used in traditional Chinese cuisine) is a separate market category with its own metal profile and regulatory considerations beyond the muscle-fillet category covered here. Shark liver oil is sometimes used as a dietary supplement; the Brodziak-Dopierala 2023 study cited on [[ingredients/vegetable-oil]] addresses Hg in shark liver oil supplements.

## Mitigation options

Sourcing levers operate at the brand and importer level. Sourcing shark only from documented-low-Hg species and harvest regions is the upstream lever. The Mexican dataset documents that even smaller shark species (soupfin) routinely exceed 1,000 µg/kg Hg, so the practical mitigation is species avoidance rather than sourcing-specification refinement. For HMTc certification of products targeting vulnerable populations (infants, children, pregnant women), exclusion of shark from formulations is the load-bearing control.

Agronomic levers do not apply to wild-caught shark.

Processing levers are not material for shark metal content.

Formulation levers operate on the brand. Substituting shark with lower-Hg finfish (salmon, pollock, cod, sardines) is the standard formulation response for products targeting low-Hg claims.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming shark raw material against species-specific specifications catches between-lot variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for shark in the current evidence base.

## Regulatory limits that apply

The European Union Regulation (EU) 2023/915 establishes Hg in shark and other predatory fish (swordfish, marlin, certain tuna) at 1.0 mg/kg (1,000 ppb) on a wet-weight basis, with the lower 0.5 mg/kg limit applying to most other finfish categories ([[regulations/eu2023-contaminants-maximum-levels]]). The 1.0 mg/kg limit is the reference for the Italian 10-year compliance non-compliance analysis. The Mexican national MPL for Hg in canned fish is 1.0 mg/kg, the reference for the Tijuana dataset exceedance finding. The United States FDA Action Level for methylmercury in fish (the relevant US regulatory benchmark) is 1.0 mg/kg, with FDA and EPA jointly advising pregnant women, women who may become pregnant, breastfeeding mothers, and young children to avoid consumption of shark, swordfish, king mackerel, and tilefish ([[regulations/fda-closer-to-zero]]). The Codex Alimentarius CXS 193-1995 establishes MeHg in predatory fish at 1.0 mg/kg.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | Primary tHg, Pb, Cd, Cr occurrence data for mako shark (n=5) and soupfin shark (n=5) from Tijuana market; mako tHg mean 1,286 ppb (range 690–2,140), soupfin tHg mean 1,128 ppb (range 460–1,810); 60 percent of fresh fish samples exceed Mexican MPL |
| 2 | [[sources/smolikova2016-heavy-metals-fish-czech\|Smolikova et al. 2016]]. *Determination of heavy metals in fish products*, MendelNet 2016 (Conference Proceedings) | 2016 | Peer-reviewed | Czech market fish products heavy metal data; provides European context for shark-related fish category metal loads |
<!-- END: hmi-source-legend -->
