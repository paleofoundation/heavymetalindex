---
type: ingredient
commodity: chocolate
aliases: [dark chocolate, milk chocolate, chocolate liquor, chocolate bar, chocolate confection, couverture]
category: processed-confectionery
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
drivers: [cocoa-solid-fraction, cocoa-origin, formulation]
lower_risk_variants: ["[[ingredients/milk-chocolate]]", "[[ingredients/white-chocolate]]"]
higher_risk_variants: ["[[ingredients/high-cocoa-dark-chocolate]]", "[[ingredients/baking-chocolate]]", "[[ingredients/cocoa-powder-heavy-confections]]"]
used_in_products: ["[[products/chocolate-bars]]", "[[products/chocolate-confections]]", "[[products/baked-goods]]", "[[products/ice-cream]]", "[[products/chocolate-beverages]]", "[[products/nutritional-supplements]]", "[[products/chocolate-coated-snacks]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Chocolate

_Stub page. Contamination profile populates on the next ingest wave. Chocolate is a processed derivative of [[ingredients/cocoa]] and inherits cadmium from its cocoa-solid fraction; cadmium content scales approximately with cocoa-solid percentage and with cocoa origin._

## Why this commodity accumulates cadmium

Chocolate carries cadmium primarily through its cocoa solids, which concentrate cadmium from the cocoa beans during processing (see [[ingredients/cocoa]] for the upstream story). Cocoa butter, the other principal cocoa-derived ingredient in chocolate, carries relatively little cadmium. As a consequence, dark chocolate (higher cocoa-solid percentage) carries more cadmium per serving than milk chocolate (lower cocoa-solid percentage, higher milk and sugar fractions), and baking or confectionery chocolate made from cocoa powder can be particularly cadmium-heavy. White chocolate, which contains cocoa butter but not cocoa solids, carries minimal cadmium from the cocoa pathway.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 of approximately 140,000 European samples reported a mean cadmium concentration in chocolate of 0.090 mg/kg, which is one-half the mean reported for cocoa (0.178 mg/kg), consistent with the dilution from milk, sugar, and cocoa butter in typical chocolate formulations. Dark-chocolate-specific values are higher; brand and origin variation is substantial and is the subject of Consumer Reports and HBBF published testing that is outside this wiki's brand-level firewall scope._

## Processing effects

_Pending. Formulation (percent cocoa solids, presence of milk, use of cocoa powder versus chocolate liquor) is the dominant processing-level driver of finished-product cadmium. Conching and tempering do not meaningfully alter cadmium content._

## Ingredient-derivative risk

A chocolate-containing ingredient list translates to cadmium exposure primarily through the cocoa-solid fraction. Apps estimating cadmium from ingredient lists should weight the chocolate contribution by approximate percent cocoa solids when that information is available on the label, and default to a representative mid-range cocoa-solid percentage (approximately 35 to 50 percent for most mass-market chocolates) when it is not.

## Mitigation options

_Pending. Upstream cocoa-sourcing decisions are the meaningful mitigation lever for chocolate manufacturers; see [[ingredients/cocoa]]._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/jecfa-cadmium-ptmi]] — JECFA 91st meeting 2022: cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg b.w./month in European children aged 7 to 11, indicating that chocolate products heavy in cocoa powder warrant particular attention for child consumers.
- [[regulations/codex-cadmium-mls]] — Codex matrix-level MLs for chocolate products (pending ingest of CXS 193-1995).
- EU Regulation (EU) 2023/915 Cd MLs for chocolate products by cocoa-solid percentage (pending ingest).

## Sources

- [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] — JECFA 91st meeting, 2020 (published 2022). Cadmium: dietary exposure assessment.
- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
