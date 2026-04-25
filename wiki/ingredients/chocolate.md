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
lower_risk_variants: [milk-chocolate, white-chocolate]
higher_risk_variants: [high-cocoa-dark-chocolate, baking-chocolate, cocoa-powder-heavy-confections]
used_in_products: [chocolate-bars, chocolate-confections, baked-goods, ice-cream, chocolate-beverages, nutritional-supplements, chocolate-coated-snacks]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Chocolate

_Stub page. Contamination profile populates on the next ingest wave. Chocolate is a processed derivative of [[cocoa]] and inherits cadmium from its cocoa-solid fraction; cadmium content scales approximately with cocoa-solid percentage and with cocoa origin._

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

The body of this page focuses on cadmium because the cadmium pilot batch was the first deep ingest wave; the contamination_profile block tracks all six metals the wiki covers and will fill in as subsequent ingest waves complete. Brief commodity-level orientation:

- **Pb**: documented concern alongside Cd. Dark chocolate products with high cocoa-solid fractions test elevated for both metals in independent programs (Consumer Reports, HBBF). The Pb pathway is post-harvest contact during cocoa sun-drying rather than soil uptake. See [[ingredients/cocoa]] and [[metals/lead]].
- **iAs**: not a notable concern.
- **tHg**: not a notable concern.
- **Ni**: chocolate inherits cocoa's elevated nickel content, scaled by the cocoa-solid fraction. Relevant for nickel-allergic consumers. See [[metals/nickel]].
- **Al**: chocolate inherits cocoa's aluminum content, scaled by the cocoa-solid fraction. See [[metals/aluminum]].

## Regulatory limits that apply

- [[regulations/jecfa-cadmium-ptmi]] — JECFA 91st meeting 2022: cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg b.w./month in European children aged 7 to 11, indicating that chocolate products heavy in cocoa powder warrant particular attention for child consumers.
- [[regulations/codex-cadmium-mls]] — Codex matrix-level MLs for chocolate products (pending ingest of CXS 193-1995).
- EU Regulation (EU) 2023/915 Cd MLs for chocolate products by cocoa-solid percentage (pending ingest).

## Sources

- [[sources/jecfa-91st-cadmium-2022]] — JECFA 91st meeting, 2020 (published 2022). Cadmium: dietary exposure assessment.
- [[sources/efsa-cadmium-contam-2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
