---
title: Fish
type: ingredient
commodity: fish
aliases: [seafood, finfish, tuna, salmon, swordfish, mackerel, cod, tilapia, trout, sardines, herring, anchovies, fish-oil]
category: aquatic-animal
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [trophic-level, methylmercury-biomagnification, species, harvest-region, fish-age-and-size]
lower_risk_variants: ["[[ingredients/salmon]]", "[[ingredients/sardines]]", "[[ingredients/anchovies]]", "[[ingredients/herring]]", "[[ingredients/tilapia]]", "[[ingredients/trout]]", "[[ingredients/light-canned-tuna]]"]
higher_risk_variants: ["[[ingredients/swordfish]]", "[[ingredients/shark]]", "[[ingredients/king-mackerel]]", "[[ingredients/tilefish]]", "[[ingredients/bigeye-tuna]]", "[[ingredients/marlin]]", "[[ingredients/orange-roughy]]"]
used_in_products: ["[[products/fresh-fish]]", "[[products/frozen-fish]]", "[[products/canned-tuna]]", "[[products/canned-salmon]]", "[[products/canned-sardines]]", "[[products/fish-oil-supplements]]", "[[products/prepared-seafood]]", "[[products/surimi]]", "[[products/fish-sauce]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-26
---

# Fish

_Stub page. Contamination profile populates on dedicated mercury and arsenic ingest waves. Fish is the dominant dietary source of methylmercury exposure for most populations ([[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]])._

## Why this commodity accumulates heavy metals

Fish accumulate methylmercury through aquatic-food-web biomagnification: inorganic mercury in water is methylated by sulfate-reducing bacteria in sediment, taken up by plankton, and biomagnified through each trophic step. Predator species at the top of marine food webs (swordfish, shark, king mackerel, tilefish, bigeye tuna, marlin) carry methylmercury concentrations 1 to 2 orders of magnitude above small-pelagic species (sardines, anchovies, herring) and farmed or short-lived freshwater species (salmon, tilapia, trout). See [[metals/mercury]] for the methylmercury toxicology, the [[sources/jecfa-61st-methylmercury|JECFA 61st]] PTWI of 1.6 µg/kg b.w./week, and the Faroe Islands and Seychelles cohort literature on developmental neurotoxicity (synthesized in [[metals/mercury]]).

Cadmium and lead in fish are commodity-secondary concerns; bivalve molluscs (covered separately at [[ingredients/bivalve-molluscs]]) are the dominant marine-food Cd source ([[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]]).

## Multi-metal coverage and dedicated subpages

Fish-as-a-commodity is broad enough that future ingest waves will likely produce species-specific pages (tuna, salmon, swordfish) rather than a single fish page treating all species uniformly. The current page is a placeholder that satisfies the wikilink graph and orients consumers toward the dominant concern (methylmercury).

Collado-Lopez et al. 2025 reports fish/fish-mix baby foods as a priority review-level group for arsenic and mercury, with median As 0.165 mg/kg and median Hg 0.016 mg/kg among detected items. This signal should guide retrieval of the underlying primary studies before any fish-containing baby-food p90 is calculated. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

## Regulatory limits that apply

- [[regulations/jecfa-methylmercury-ptwi]] — JECFA provisional tolerable weekly intake of 1.6 µg methylmercury/kg b.w./week.
- [[regulations/efsa-methylmercury-twi]] — EFSA tolerable weekly intake of 1.3 µg methylmercury/kg b.w./week.
- [[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]] — FDA/EPA joint advice for women who might become pregnant, women who are pregnant or breastfeeding, and young children.
- EU Regulation (EU) 2023/915 mercury and cadmium MLs for fish by species (pending ingest in [[regulations/eu-2023-915-cadmium]]).

## Sources

- [[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]] — FDA and EPA joint fish consumption advice.
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] — review-level fish/fish-mix baby-food signal for As and Hg.
- [[metals/mercury]] — cross-source mercury synthesis page.
- [[metals/arsenic]] — cross-source arsenic synthesis page (relevant for the marine-iAs-fraction question).
