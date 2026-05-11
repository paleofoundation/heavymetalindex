---
title: Chocolate
type: ingredient
commodity: chocolate
aliases: [dark chocolate, milk chocolate, chocolate liquor, chocolate bar, chocolate confection, couverture]
category: processed-confectionery
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-11
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-11
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
    status: in_progress
    typical_ppb: [700, 1900]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-11
  Al:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-11
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-11
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
drivers: [cocoa-solid-fraction, cocoa-origin, formulation]
lower_risk_variants: ["[[ingredients/milk-chocolate]]", "[[ingredients/white-chocolate]]"]
higher_risk_variants: ["[[ingredients/high-cocoa-dark-chocolate]]", "[[ingredients/baking-chocolate]]", "[[ingredients/cocoa-powder-heavy-confections]]"]
used_in_products: ["[[products/chocolate-bars]]", "[[products/chocolate-confections]]", "[[products/baked-goods]]", "[[products/ice-cream]]", "[[products/chocolate-beverages]]", "[[products/nutritional-supplements]]", "[[products/chocolate-coated-snacks]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-11
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

## Abt 2018 sample-level occurrence values

[[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]] is the primary FDA U.S.-market occurrence dataset for finished chocolate products. Per-matrix means below; full ranges and stratification by percent cocoa and by Latin America versus Africa origin are in the source page. The 2020 perspective [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]] contextualizes these values within the JECFA-and-Codex regulatory landscape and the JECFA finding that cocoa-and-chocolate consumption can drive 30-69 percent of total Cd intake in high-consumer children.

| Matrix | Mean Cd ± SD (mg/kg) | Mean Pb ± SD (mg/kg) |
| --- | ---: | ---: |
| Dark chocolate | 0.27 ± 0.25 | 0.03 ± 0.02 |
| Milk chocolate | 0.06 ± 0.07 | 0.01 ± 0.01 |

The four-fold higher Cd in dark chocolate versus milk chocolate reflects the higher percent cocoa content in dark chocolate; Cd and Pb were both significantly correlated with percent cocoa across the dataset. These values count as one Path A primary source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; Abt 2020 is a secondary citation that does not add new primary data.

## Lead in chocolate

Chocolate inherits Pb from its cocoa-solid fraction with the four-fold dark-versus-milk gradient documented in [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]]: dark chocolate mean 0.03 ± 0.02 mg/kg, milk chocolate mean 0.01 ± 0.01 mg/kg, across the 144-sample U.S. retail convenience-sample survey. Pb correlated significantly with percent cocoa solids, mirroring the Cd pattern. The 2020 FDA perspective ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]]) frames chocolate Pb as principally anthropogenic-deposition-driven via the cocoa bean rather than added during chocolate manufacture. The U.S. FDA Pb-in-candy guidance recommends a maximum level of 0.1 mg/kg in candy including chocolate candy; finished chocolate products in the Abt 2018 dataset fall comfortably below the guidance, though high-percent-cocoa dark chocolate has been documented at or above this level in some independent third-party testing not yet in the loaded corpus.

## Nickel in chocolate

Chocolate carries Ni proportional to its cocoa-solid fraction. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] reports bitter (dark) chocolate at 1.9 µg/g (range 1.3 to 2.7 µg/g, n=7) and milk chocolate at 0.7 µg/g (range 0.4 to 1.2 µg/g, n=11) from the post-1969 AAS/PIXE literature. The roughly 3x gap between bitter and milk chocolate maps cleanly onto the cocoa-solid percentage difference, which is consistent with the >9 µg/g concentration in cocoa itself (Flyvholm 1984). [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] subsequently confirmed cocoa among the principal dietary Ni sources and dark chocolate inherits that load. Nickel-sensitized individuals (systemic contact dermatitis-prone, approximately 10 to 15 percent of the European adult population per EFSA) can experience flare-ups from high-cocoa dark chocolate consumption; the EFSA acute LOAEL of 4.3 µg Ni/kg b.w. for eczematous flare-up identifies chocolate-heavy consumers as one of the dietary subgroups at risk. [[sources/pacor2003-nickel-recurrent-aphthous-stomatitis-dbpc|Pacor et al. 2003]] documents cocoa-and-chocolate as the most consistently symptom-aggravating food category in nickel-reactive recurrent aphthous stomatitis (92.6 percent of patients).

## Aluminum in chocolate

Chocolate carries Al from a combination of cocoa-solid uptake (cacao tree root Al accumulation from tropical soils) and any processing-equipment or alkalization-step contribution. [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi|Elsheikh et al. 2020]] reports Al in cocoa sweets in Saudi Arabia (B-tier journal; matrix-specific Al concentrations in cocoa sweets), and biscuit brand 6 in that survey reached a remarkable 291,900 ppb total Al (outlier value that the source page flags for follow-up). Direct U.S. or EU-market chocolate Al concentration distributions are not yet loaded on the wiki. Phase 3b ingest of primary cocoa-and-chocolate Al occurrence work would firm this cell.

## Chromium in chocolate

[[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez et al. 2019]] documents that cocoa-containing finished products consistently show the highest Cr concentrations among the French food categories surveyed: chocolate-containing breakfast cereals 360 to 483 ppb total Cr; a dry chocolate biscuit averaged 103 ppb. The paper measures both total Cr and Cr-VI by speciation; whether the Cr-VI fraction in finished chocolate products is significant requires the underlying Hernandez 2019 speciation tables and additional cross-source confirmation. The total-Cr signal supports flagging chocolate as a Cr-bearing finished-product category; Cr-VI-specific speciation data for chocolate matrices is a documented data gap.

## Other metals of concern

The remaining HMI-tracked metals on chocolate (iAs, tAs, tHg, MeHg, Sn, U) do not have strong chocolate-specific occurrence evidence in the loaded corpus. Chocolate is not a primary arsenic matrix, is not canned in tin, and does not carry meaningful Hg or U at population level. These metals remain at status: pending on the contamination_profile.

## Regulatory limits that apply

- [[regulations/jecfa-cadmium-ptmi]] — JECFA 91st meeting 2022: cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg b.w./month in European children aged 7 to 11, indicating that chocolate products heavy in cocoa powder warrant particular attention for child consumers.
- [[regulations/codex-cadmium-mls]] / [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — International Cd MLs scaled by cocoa-solid percentage: chocolate less than 30 percent cocoa solids (including milk chocolate) 0.3 mg/kg; 30 to less than 50 percent 0.7 mg/kg; 50 to less than 70 percent 0.8 mg/kg; 70 percent or greater 0.9 mg/kg; cocoa powder (100 percent cocoa solids dry-matter basis) 2.0 mg/kg.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum levels for chocolate products: 0.10 mg/kg (100 ug/kg) for milk chocolate with less than 30 percent total dry cocoa solids; 0.30 mg/kg (300 ug/kg) for chocolate with less than 50 percent total dry cocoa solids and milk chocolate with at least 30 percent total dry cocoa solids; 0.80 mg/kg (800 ug/kg) for chocolate with at least 50 percent total dry cocoa solids.
- FDA Pb in candy: recommended maximum level 0.1 mg/kg for candy including chocolate candy ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]]).
- [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] — Chronic TDI 13 µg Ni/kg b.w./day; acute LOAEL 4.3 µg Ni/kg b.w. for eczematous flare-up in sensitized individuals. No chocolate-specific Ni ML at international level.

## Sources

- [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]] — FDA U.S. market convenience-sample survey of 144 cocoa-and-chocolate products with Cd and Pb by ICP-MS; per-matrix means including dark and milk chocolate.
- [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]] — FDA perspective synthesizing Abt 2018 with JECFA 2013, FDA 2014-2016 dietary exposure, and Codex international standards efforts.
- [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] — JECFA 91st meeting, 2020 (published 2022). Cadmium: dietary exposure assessment.
- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — International General Standard; chocolate Cd MLs scaled by cocoa-solid percentage (0.3 / 0.7 / 0.8 / 0.9 mg/kg).
- [[sources/efsa-nickel-contam-2020|EFSA Ni 2020]] — EFSA CONTAM Panel update; cocoa named among top dietary Ni sources, by inheritance chocolate carries Ni from its cocoa-solid fraction.
- [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez et al. 2019]] — French Cr-VI/Cr-III speciation in cereal products; chocolate-containing breakfast cereals 360-483 ppb total Cr, chocolate biscuit 103 ppb.
- [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi|Elsheikh et al. 2020]] — Saudi children's-foods elements by ICP-OES; cocoa sweets Al context (B-tier journal).
