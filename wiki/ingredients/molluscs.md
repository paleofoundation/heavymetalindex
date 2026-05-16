---
type: ingredient
commodity: molluscs
title: "Molluscs"
label: "Molluscs"
aliases: [mollusks, cephalopods, gastropods, squid, octopus, cuttlefish]
category: shellfish
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
    typical_ppb: [50, 194]
    p95_ppb: 350
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
drivers: [bioaccumulation, trophic-level, harvest-region, species, organotin-tributyltin]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/bivalve-molluscs]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 4
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Molluscs

Molluscs are a major aquatic-food category covering cephalopods (squid, octopus, cuttlefish), gastropods (snails, abalone, periwinkles), bivalves (covered separately on [[ingredients/bivalve-molluscs]]), and a few minor groups. The metal profile differs substantially from finfish because molluscs accumulate metals through filter-feeding (bivalves) or detritus and small-prey consumption (cephalopods and gastropods) rather than through bioaccumulation up the marine food chain that drives mercury concentration in predatory finfish. The Italian Istituto Zooprofilattico ten-year compliance survey of 5,854 seafood samples identifies cephalopod molluscs (n=1,536) as the principal Cd-non-compliance category for European market seafood, with 17 of 1,536 cephalopod samples exceeding the EU maximum level for Cd ([[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr|Garofalo et al. 2025]]). The Chinese Zhejiang Province nickel survey reports mollusc-specific Ni at low concentrations relative to crustaceans and freshwater fish.

## Why this commodity accumulates heavy metals

Molluscs accumulate heavy metals through three pathways. The first is filter-feeding for bivalves and detritus-feeding for cephalopods and gastropods, both of which expose the organism to sediment-associated metals as well as water-column metals. The bioaccumulation factor for Cd in cephalopods (particularly squid) is documented as among the highest for any seafood category, which is why squid drives the cephalopod-Cd non-compliance pattern in the Italian dataset.

The second pathway is harvest-region contamination. Coastal waters near industrial discharge, urban estuaries, and historically polluted bays produce molluscs with higher metal loads than open-ocean or aquaculture sources. The CFS 2019 Hong Kong organotin study documented that tributyltin (TBT), a historic antifouling-paint contaminant, persists in coastal mollusc populations long after its phase-out, reflecting the long environmental half-life of organotin compounds.

The third pathway is species-specific accumulation biology. Cephalopods (squid, octopus, cuttlefish) accumulate Cd preferentially relative to gastropods or bivalves; the gut digestive gland of cephalopods is particularly Cd-rich and is sometimes consumed in traditional cuisines. The Zhejiang dataset for marine gastropods reports Ni at mean 194 µg/kg across 3 samples ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]), substantially lower than the cephalopod and bivalve Cd findings from the Italian dataset.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | data gap | — | — | — | — |
| Cd  | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | n=1 | 50–194 | 350 | low | [[sources/han2024-nickel-zhejiang-china\|3]] |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

The Cd values for cephalopods specifically are documented as the dominant non-compliance category in the Italian 10-year survey but the per-cephalopod numerical concentrations are not in the accessible data slice. The Garofalo 2025 paper reports exceedance counts (17 cephalopod samples non-compliant for Cd out of 1,536 sampled) rather than per-sample concentration distributions for the molluscs category. The sister page [[ingredients/bivalve-molluscs]] carries the bivalve-specific evidence; this molluscs page is the broader category, including cephalopods and gastropods.

## Ranges by source, region, and variety

The Italian Istituto Zooprofilattico 10-year survey provides the regulatory-compliance picture for the European market ([[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr|Garofalo et al. 2025]]). Of 5,854 seafood samples analyzed for Cd, Pb, and Hg over 2014 to 2023, 142 samples (2.43 percent) were non-compliant with EU 2023/915 maximum levels. Cadmium exceedances concentrated in cephalopods (17 samples, mainly squids). Mercury exceedances concentrated in marine fish, particularly swordfish (11.30 percent of samples), sharks (6.48 percent), and tuna (3.11 percent); molluscs did not appear in the Hg exceedance pattern. Lead exceedances were rare across all categories (one bivalve sample). The 10-year trend is documented in the source but per-year breakdowns are not in the accessible data slice.

The Chinese Zhejiang Province nickel survey reports mollusc-related categories ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]). Gastropods (n=3) showed Ni at mean 194 µg/kg, range 50 to 350 µg/kg, with 100 percent detection and zero exceedance of the Chinese GB 2762-2022 1 mg/kg standard. Shellfish (n=50) reported Ni at mean 484 µg/kg, range 56 to 1,530 µg/kg, P95 1,279 µg/kg, with 12 percent of samples exceeding the standard. The shellfish category includes molluscs and crustaceans together in the source classification; molluscs-specific values are constrained to the gastropod subset.

The Hong Kong Centre for Food Safety 2019 organotin study (Report No. 60) covers tributyltin (TBT) and related organotin compounds in aquatic products from Hong Kong markets, with molluscs (particularly cephalopods and bivalves) as one of the principal sampled categories ([[sources/cfs2019-organotin-aquatic-hongkong|CFS 2019]]). The specific organotin concentrations and the comparison against the EFSA TWI for the sum of organotin compounds are documented in the source; the data are speciated organotin rather than total Sn and inform a separate organotin-specific risk picture from the general Sn analyte in the HMTc vocabulary.

The Xu 2025 global review of heavy metal risks in aquatic foods provides systematic-review-level synthesis across many species and regions but does not contribute single-source occurrence values for molluscs at the species level ([[sources/xu2025-heavy-metals-aquatic-foods-global|Xu et al. 2025]]); the review confirms the cephalopod-Cd accumulation pattern documented in the Italian primary data.

## Processing effects

Processing-state effects on mollusc metal load vary by species and preparation. Cephalopod cleaning removes the digestive gland (where Cd preferentially concentrates), reducing the Cd load of the consumed muscle relative to the whole organism; this is the standard commercial preparation for squid and octopus. Whole-cephalopod consumption (some traditional dishes retain the digestive gland) carries the full Cd load. Cooking does not remove metals from the mollusc tissue. Canned mollusc products (canned squid, canned octopus) may pick up additional Sn from can-lining migration depending on can construction. Smoked and dried mollusc products concentrate metals proportionally with water loss.

## Ingredient-derivative risk

Molluscs produce a range of food-ingredient derivatives. Fresh and frozen cephalopod products (squid rings, octopus, cuttlefish) carry the source-tissue metal load. Canned and jarred mollusc products carry additional packaging-related metals depending on can construction. Dried mollusc products (dried squid, dried abalone in East Asian markets) concentrate metals proportionally with mass loss. Mollusc-based sauces and condiments (oyster sauce derived from bivalves and the related squid ink and cephalopod-derived ingredients) carry source-organism metals. Fish meal and mollusc meal used as feed ingredients are out of scope for the food-chain wiki but follow the same accumulation principles.

## Mitigation options

Sourcing levers operate at the brand and importer level. Harvest-region specification (excluding industrially polluted coastal areas, requiring certified clean-water aquaculture) is the upstream lever. The Italian dataset's documented Cd-non-compliance rate in cephalopods (1.1 percent of 1,536 samples) is the load-bearing reference for sourcing-specification stringency in European-market cephalopods.

Agronomic levers do not apply to wild-caught molluscs but apply to aquaculture-sourced product, particularly bivalves. Water-quality monitoring of aquaculture sites, exclusion of sites with documented Cd or organotin contamination, and certification programs targeting clean-water sources are the available controls.

Processing levers are partial. Removing the cephalopod digestive gland during preparation eliminates the Cd-rich tissue from the consumed product. Switching from tinplate cans to alternative packaging eliminates Sn migration. Cooking water disposal (where mollusc cooking water is discarded rather than consumed) eliminates a small portion of metal load.

Formulation levers operate on the brand for products using molluscs as an ingredient. Substituting lower-Cd seafood (finfish other than top predators) for cephalopods is the standard response where the product permits.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming mollusc raw material against species-specific specifications catches the cephalopod-Cd variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are most relevant for canned mollusc products, where can-lining choice (lacquered vs unlacquered tinplate) determines Sn migration. Frozen and fresh mollusc products are not subject to packaging migration in the same way.

## Regulatory limits that apply

The European Union Regulation (EU) 2023/915 establishes matrix-specific maximum levels for Cd, Pb, and Hg in seafood: Cd in cephalopods at 1.0 mg/kg (1,000 ppb), Cd in bivalve molluscs at 1.0 mg/kg, with finfish at lower category-specific values. Pb in cephalopods at 0.30 mg/kg (300 ppb) and bivalves at 1.5 mg/kg. Total mercury at 0.5 mg/kg for most seafood and 1.0 mg/kg for certain predatory finfish (swordfish, sharks, tuna), with molluscs covered under the 0.5 mg/kg baseline. The Italian 10-year compliance dataset used these EU 2023/915 values as the reference for the non-compliance analysis ([[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr|Garofalo et al. 2025]]). The Chinese national standard GB 2762-2022 establishes Ni in aquatic foods at 1 mg/kg (1,000 ppb), used as the reference for the Zhejiang exceedance analysis ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]). The EFSA Tolerable Weekly Intake for the sum of organotin compounds is 250 ng/kg bw/week, the reference for the Hong Kong organotin study ([[sources/cfs2019-organotin-aquatic-hongkong|CFS 2019]]). The United States FDA does not specify commodity-specific action levels for Pb, Cd, or Ni in molluscs under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | Italian 10-year regulatory compliance monitoring; cephalopods are principal Cd-non-compliance category (17 of 1,536 samples), bivalves principal Pb exceedance (1 of 1,019); molluscs not in Hg exceedance pattern |
| 2 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | Global systematic review of heavy metal risks across aquatic foods; confirms cephalopod-Cd accumulation pattern but does not contribute single-source occurrence values for molluscs |
| 3 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Primary Ni occurrence data for gastropods (n=3, mean 194 ppb, range 50–350) and shellfish category including molluscs (n=50, mean 484 ppb, p95 1,279, 12 percent over GB 2762-2022 1 mg/kg standard) |
| 4 | [[sources/cfs2019-organotin-aquatic-hongkong\|Centre for Food Safety 2019]]. *Organotin Compounds in Aquatic Products Available at Local Markets*, Risk Assessment Studies Report No. 60, Centre for Food Safety, Hong Kong FEHD | 2019 | Government report | Tributyltin and related organotin compounds in Hong Kong-market aquatic products including molluscs; speciated organotin rather than total Sn; informs separate organotin-specific risk picture |
<!-- END: hmi-source-legend -->
