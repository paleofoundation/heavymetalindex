---
title: "Shellfish"
type: ingredient
commodity: shellfish
label: "Shellfish"
aliases: [crustaceans and molluscs, seafood-shellfish]
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
drivers: [filter-feeding, bioaccumulation, sediment-burden, harvest-water-quality, depuration-status]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/bivalve-molluscs]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 7
---

# Shellfish

Shellfish is the regulatory umbrella covering crustaceans (shrimp, crab, lobster, crayfish) and molluscs (mussels, clams, oysters, scallops, octopus, squid). The category groups together aquatic invertebrates whose feeding ecology — filter-feeding for bivalves, scavenging and detritivory for crustaceans — produces a distinctive contamination signal: high cadmium concentrations from sediment-water concentration gradients, total arsenic in the high-ppb-to-low-ppm range driven primarily by non-toxic arsenobetaine but with variable inorganic arsenic fractions, and occasional Pb spikes in waters with industrial or marine-paint legacies.

The cadmium-shellfish relationship is the strongest single-metal signal in the dietary-exposure literature: EFSA, JECFA, and the FDA all treat bivalve molluscs as a leading dietary Cd source for shellfish-consuming populations, comparable to organ meats and cereals. The total-vs-inorganic arsenic distinction (per CLAUDE.md Part 14) is non-negotiable for shellfish; tAs values appear alarmingly high but most of that signal is arsenobetaine, which is excreted intact and lacks the toxicity of iAs.

This page is the structural umbrella; [[ingredients/bivalve-molluscs]] carries bivalve-specific evidence and is the higher-risk subcategory for Cd. Crustacean-specific detail will land on dedicated pages as the corpus grows.

## Routing

Direct evidence for shellfish-as-category lands here. Bivalve-specific evidence routes to [[ingredients/bivalve-molluscs]]; product-level routing flows through seafood-bearing baby food and prepared-meal product pages.

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Cd, tAs, and the iAs/tAs ratio are the priority synthesis targets given seven contributing source pages already in scope. Speciation discipline (per Part 14) is load-bearing: never substitute tAs for iAs in shellfish prose or values.

## Sources

- [[sources/efsa-cadmium-contam-2009]] — EFSA Scientific Opinion on Cd in food
- [[sources/fda-epa-fish-consumption-advice]] — FDA-EPA fish (and shellfish) consumption advice
- [[sources/jecfa-73rd-cadmium-2010]] — JECFA 73rd meeting on Cd
- [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food]] — Al and Cu sensor validated on food matrices including shellfish
- [[sources/nordberg2015-cadmium-chapter]] — Nordberg et al. (2015) cadmium chapter
- [[sources/taylor2025-seafood-benefits-contaminants]] — Seafood benefits vs contaminants tradeoff review
- [[sources/xia2025-whole-cell-biosensor-hg-food]] — Whole-cell Hg biosensor validated in shellfish matrices
