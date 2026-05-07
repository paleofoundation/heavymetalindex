---
title: "Algae / Seaweed"
type: ingredient
commodity: algae-seaweed
label: "Algae / seaweed"
aliases: [algae, seaweed, kelp, hijiki, nori, wakame, kombu, edible seaweed]
category: marine-vegetable
contamination_profile:
  Pb: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cd: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  iAs: { status: in_progress, typical_ppb: [null, null], p95_ppb: null, confidence: medium, n_studies: 1, last_reviewed: 2026-05-07 }
  tHg: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Ni: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Al: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
drivers: [marine-uptake, arsenic-speciation, species, harvest-region, drying]
lower_risk_variants: []
higher_risk_variants: [hijiki, kelp]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
sources: 1
---

# Algae / Seaweed

Algae and edible seaweeds need a dedicated node because the GEMS/Food data show large arsenic signals that do not fit cleanly under terrestrial vegetables. Total arsenic can be very high in seaweed while the inorganic fraction varies by species and product form, so this page keeps total arsenic, inorganic arsenic, and methylated arsenic species separate.

<!-- BEGIN: hmi-gemsfood-arsenic-context -->

## WHO GEMS/Food Arsenic Occurrence Context

The cleaned GEMS/Food layer routes algae rows here as marine-vegetable occurrence context. Values are lower-bound ug/kg summaries from WHO-region monitoring exports, not brand claims or a species-specific seaweed standard.

| Routed GEMS food row | Arsenic species | Region | N | P50 ug/kg | P95 ug/kg | Max ug/kg | Use note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| Algae | iAs | WPRO | 910 | 107.5 | 815 | 54,200 | Inorganic arsenic context; species/form not resolved. |
| Algae | iAs | WPRO | 683 | 180 | 1,467 | 98,000 | Separate export chunk; retained as monitoring context. |
| Algae | iAs | EURO | 444 | 15 | 7,585 | 98,400 | Wide distribution; route for review before any species-level claim. |
| Algae | tAs | EURO | 866 | 9,410 | 56,075 | 140,280 | Total arsenic, not interchangeable with iAs. |
| Algae | DMA | EURO | 111 | 684 | 3,029 | 4,812 | Methylated arsenic species context. |

[[sources/who-gemsfood-heavy-metal-contaminants]]

<!-- END: hmi-gemsfood-arsenic-context -->

## Interpretation Boundary

Seaweed species differ sharply in arsenic speciation. This page can support source discovery, screening, and taxonomy routing, but species-specific consumer guidance needs a dedicated source review for hijiki, kelp, nori, wakame, kombu, and derived supplements.

## Sources

- [[sources/who-gemsfood-heavy-metal-contaminants]] — WHO GEMS/Food heavy-metal contaminant exports routed to algae/seaweed occurrence context.
