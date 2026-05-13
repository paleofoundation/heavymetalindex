---
title: "Cereals"
type: ingredient
commodity: cereals
label: "Cereals"
aliases: [cereal grains, grain foods, grain-based foods]
category: grain
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
drivers: [soil-uptake, geography, processing, fortification]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/rice]]", "[[ingredients/oat]]", "[[ingredients/wheat]]"]
used_in_products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 8
---

# Cereals

Cereals is the regulatory umbrella term used by EFSA, JECFA, and Codex Alimentarius for grain-based human foods. It encompasses rice, wheat, oat, maize, barley, rye, and the products derived from them. Per-commodity contamination profiles live on the individual grain pages ([[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], etc.); this page is the structural parent that lets regulatory documents addressing "cereals" as a category route correctly.

The cereals category is the dominant cadmium dietary-exposure pathway in EFSA and JECFA assessments and a primary source of inorganic arsenic exposure where rice-based products are prevalent. Cereal-based infant foods (referenced in EU Commission Regulation 2023/915 and FDA Closer-to-Zero guidance) carry tighter regulatory limits than adult cereal products because of the higher per-kg-body-weight intake in early life.

## Routing

This node is the umbrella for grain-based regulatory documents. Per-grain detail belongs on [[ingredients/rice]], [[ingredients/oat]], [[ingredients/wheat]], [[ingredients/corn]], and related pages. Product-level routing flows through [[products/baby-cereals-dry-rice-based]] and [[products/baby-cereals-dry-non-rice]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. This umbrella page carries no per-commodity values; concentrations and exposure data live on the individual grain pages and on the regulatory pages referenced below.

## Sources

- [[sources/altunay2023-cadmium-food-turkey]] — Cd in cereal foods, Turkey
- [[sources/codex-cccf17-2024]] — Codex Committee on Contaminants in Foods, 17th session
- [[sources/codex-cxs-193-1995]] — Codex General Standard for Contaminants and Toxins in Food
- [[sources/efsa-cadmium-contam-2009]] — EFSA Scientific Opinion on Cd in food
- [[sources/efsa-lead-contam-2010]] — EFSA Scientific Opinion on Pb in food
- [[sources/efsa-nickel-contam-2020]] — EFSA Scientific Opinion on Ni in food and drinking water
- [[sources/jecfa-73rd-cadmium-2010]] — JECFA 73rd meeting on Cd
- [[sources/nordberg2015-cadmium-chapter]] — Nordberg et al. (2015) cadmium chapter
