---
title: "Freshwater Fish"
type: ingredient
commodity: freshwater-fish
label: "Freshwater Fish"
aliases: [river fish, lake fish, inland fish, sport fish]
category: aquatic-protein
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
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [biomagnification, trophic-level, watershed-mining-history, age-and-size, ASGM-proximity]
lower_risk_variants: ["[[ingredients/farmed-tilapia]]"]
higher_risk_variants: ["[[ingredients/sport-fish-predatory]]"]
used_in_products: ["[[products/fish-containing-baby-foods]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 9
---

# Freshwater Fish

Freshwater fish are inland-water aquatic protein sources whose heavy-metal contamination profile differs materially from saltwater and marine fish. The defining difference is methylmercury biomagnification: freshwater systems with reducing sediments and microbial methylation activity (most notably in artisanal small-scale gold mining (ASGM) watersheds, mercury-impacted lakes, and historic industrial river basins) concentrate MeHg in piscivorous fish at levels that often exceed marine-fish equivalents. Sport-fishery advisories from US states, Canadian provinces, and the EFSA opinion on chronic methylmercury exposure target freshwater piscivores specifically.

This page is the structural anchor for freshwater-specific fish evidence. The broader [[ingredients/fish]] page covers cross-cutting fish-as-food properties; [[ingredients/saltwater-fish]] (when promoted) carries marine-specific evidence. Trophic level and fish age are the dominant within-species variance drivers, not species identity alone — a small, young pike from a low-Hg lake can carry less MeHg than a large, old walleye from the same lake.

## Routing

Direct evidence for freshwater fish lands here; the broader fish category fans out via the routing layer to [[ingredients/fish]] when sources address fish generally rather than freshwater specifically. Product-level routing flows through [[products/fish-containing-baby-foods]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. tHg and MeHg are the central concerns for this commodity; Pb and Cd are secondary; iAs is generally low in freshwater fish but elevated in some mining-impacted watersheds. Synthesis values will populate as contributing source pages are integrated per Part 9.

## Sources

- [[sources/auzier-guimaraes2025-mercury-tapajos-fish]] — Hg in Tapajós River fish, Brazil (ASGM-impacted)
- [[sources/jermilova2025-mackenzie-mercury-fish-bayesian]] — Hg in Mackenzie River fish, Canada (Bayesian)
- [[sources/kovacik2024-grass-carp-muscle-microelements]] — Grass carp muscle microelements, seasonal variation
- [[sources/lepak2025-mercury-sport-fish-colorado-correction]] — Hg in Colorado sport fish (correction)
- [[sources/naz2025-trace-elements-punjnad-fish]] — Trace elements in Punjnad fish, Pakistan
- [[sources/paul2025-meghna-fish-arsenic]] — As in Meghna River fish, Bangladesh
- [[sources/rusko2026-mercury-fish-latvia-risk-benefit]] — Hg in Latvian fish, risk-benefit
- [[sources/sirisangarunroj2023-thai-fish-toxic-elements]] — Toxic elements in Thai fish
- [[sources/venant2025-lake-victoria-sardine-cd-pb]] — Cd and Pb in Lake Victoria sardine
