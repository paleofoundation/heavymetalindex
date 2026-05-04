---
title: Cocoa
type: ingredient
commodity: cocoa
aliases: [cocoa beans, cacao, cocoa mass, cocoa liquor, cocoa solids, cocoa powder, cocoa butter, cacao nibs]
category: tree-crop
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
drivers: [soil-uptake, geography, volcanic-soils, variety, processing, fermentation]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/cocoa-powder]]", "[[ingredients/high-cocoa-solid-dark-chocolate]]"]
used_in_products: ["[[products/chocolate]]", "[[products/cocoa-beverages]]", "[[products/cocoa-baked-goods]]", "[[products/confectionery]]", "[[products/baby-food-flavor]]", "[[products/nutritional-supplements]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Cocoa

_Stub page. Contamination profile populates on the next ingest wave. Cocoa is identified by [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] as the specific commodity responsible for a 2019-data-driven upward revision of dietary cadmium exposure estimates for children aged 0.5 to 12, with cocoa-inclusive total dietary exposure reaching 96 percent of the JECFA provisional tolerable monthly intake in that age group. Codex CCCF17 initiated new Code of Practice work on cadmium contamination reduction in 2024 with cocoa as the precedent category (CXC 81-2022, pending ingest)._

## Why this commodity accumulates cadmium

Cocoa trees (Theobroma cacao) take up cadmium from soil through their root system. Soil cadmium concentrations in several major cocoa-producing regions, particularly parts of Latin America (Ecuador, Peru, Colombia, the Dominican Republic), are elevated either by natural geology (volcanic soils, cadmium-rich parent materials) or by historical agricultural amendments. Regional variation in finished-cocoa cadmium concentrations is substantial, and the 2019 occurrence data submitted to JECFA showed higher mean cadmium concentrations in cocoa products than had been recognized in the earlier 2013 JECFA assessment, driven in part by broader geographical sampling.

## Ranges by source, region, and variety

_Pending ingest of the operative 2019-onward cocoa occurrence dataset and of CXC 81-2022. The JECFA 91st meeting monograph summarizes cocoa cadmium concentrations across the 17 GEMS/Food cluster diets but does not provide per-region mean values in the extract captured to date._

## Processing effects

_Pending. Fermentation, drying, roasting, winnowing, alkalization, conching, and dutching all influence the cadmium concentration in downstream cocoa products (cocoa liquor, cocoa butter, cocoa powder, chocolate). Cocoa powder is a particular concern because the cadmium concentrates in the defatted solids during cocoa butter extraction._

## Ingredient-derivative risk

Derivative products of cocoa redistribute cadmium between cocoa solids and cocoa butter during processing. Cocoa powder carries the highest cadmium concentration of common cocoa derivatives because the manufacturing process concentrates the cadmium in the defatted solids; cocoa butter, by contrast, carries relatively little. Dark chocolate (high cocoa solids) therefore carries more cadmium than milk chocolate at equal serving size. The JECFA 91st meeting finding that cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg body weight per month in European children aged 7 to 11 reflects this concentration effect.

## Mitigation options

Cocoa cadmium mitigation is structured across all four [[mitigation/index|mitigation classes]] and is the second-highest-salience commodity in the wiki's mitigation coverage after rice arsenic. The Codex CXC 81-2022 Code of Practice for the Prevention and Reduction of Cadmium Contamination in Cocoa Beans is a foundational regulatory document spanning several of these classes and is a priority promotion target.

[[mitigation/agronomic|Agronomic mitigation]] for cocoa is dominated by soil pH management (liming raises pH and immobilizes cadmium in soils with naturally acidic Latin American volcanic substrate), cultivar and rootstock selection (cocoa genotypes vary in cadmium accumulation efficiency by an order of magnitude in some screening trials), agroforestry shade-tree practices (which alter soil organic matter and pH dynamics), and biochar or compost amendment.

[[mitigation/processing|Processing mitigation]] for cocoa is dominated by post-harvest fermentation regime, drying conditions, alkalization (Dutch-process treatment alters cadmium distribution between fractions), winnowing efficiency (shell removal reduces cadmium because shell is a higher-cadmium fraction than nib), and conching. The Codex CXC 81-2022 Code of Practice specifies several of these processing-stage interventions.

[[mitigation/supply-chain-screening|Supply-chain screening]] for cocoa is the dominant brand-side intervention in EU markets given the [[regulations/eu-2023-915-cadmium|EU 2023/915]] cocoa cadmium maximum levels. West-African origins (Ghana, Côte d'Ivoire) are documented lower-cadmium than parts of Latin America (Ecuador, Peru, Colombia volcanic-soil regions); within Latin America, altitude- and soil-pH-segmented sourcing differentiates lower- and higher-cadmium production zones.

[[mitigation/formulation|Formulation mitigation]] for cocoa-containing products includes cocoa-percentage adjustment (lower-cocoa-solids products have correspondingly less cocoa-derived cadmium), cocoa-origin sourcing realized at the recipe level, and substitution of cocoa butter for cocoa powder where formulation permits (cocoa butter is much lower in cadmium than the defatted solids).

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/jecfa-cadmium-ptmi]] — Not a cocoa-specific limit but the health-based reference value Codex cocoa MLs are aligned against; children 0.5 to 12 can reach 96 percent of the PTMI with cocoa included in total dietary intake.
- [[regulations/codex-cadmium-mls]] — Codex matrix-level MLs for cocoa and chocolate products (pending ingest of CXS 193-1995 and CXC 81-2022); CCCF17 2024 initiated a broader Code of Practice for cadmium across foods with cocoa as the precedent category.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum level for cocoa powder placed on the market for the final consumer or as an ingredient in sweetened cocoa powder/powdered chocolate is 0.60 mg/kg (600 ug/kg). Chocolate products are regulated separately by cocoa-solid percentage on [[ingredients/chocolate]].

## Sources

- [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] — JECFA 91st meeting, 2020 (published 2022). Cadmium: dietary exposure assessment.
- [[sources/codex-cccf17-2024|Codex CCCF17 2024]] — Codex CCCF, April 2024. Report of the 17th Session (REP24/CF17).
