---
type: ingredient
commodity: tomato-paste
title: "Tomato Paste"
label: "Tomato Paste"
aliases: [tomato-concentrate, tomato-puree, tomato-sauce]
category: vegetable-fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [190, 190]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [8, 280]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [0, 0]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [24200, 80100]
    p95_ppb: 80100
    confidence: low
    n_studies: 1
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
    typical_ppb: [410, 30600]
    p95_ppb: 219580
    confidence: medium
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [acidic-matrix, tin-plate-can-migration, concentration-effect, soil-uptake]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/canned-tomatoes]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Tomato Paste

Tomato paste is a concentrated tomato product made by reducing tomatoes through evaporative cooking to remove most of the water content, typically producing a paste with 24 to 36 percent tomato solids. The metal profile reflects two compounding mechanisms: the source-tomato metal load is concentrated proportionally with water loss (a 5- to 10-fold concentration relative to fresh tomato), and the acidic paste matrix accelerates metal migration from tin-plate cans during shelf storage. The Romanian David 2008 study of 5 commercial canned tomato paste products documented Sn values reaching 219,580 µg/kg (220 mg/kg, well above the EU 200 mg/kg ceiling) at the weld seam of Italian metal-can products, with Al at 24 to 80 mg/kg attributable to the canning process ([[sources/david2008-heavy-metals-canned-tomato-paste-romania|David et al. 2008]]). The Iranian Shavali-gilani 2025 study, cited on [[ingredients/cucumbers]], reports Tehran-market canned tomato paste at Pb 190 ppb (exceeding Codex 100 ppb limit), Cd 8 ppb, Hg below detection, and Sn 410 ppb ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-gilani et al. 2025]]).

## Why this commodity accumulates heavy metals

Tomato paste accumulates heavy metals through three compounding pathways. The first is the source-tomato metal load. Tomatoes take up Pb, Cd, and other metals from soil at moderate rates relative to leafy vegetables; the source-tomato baseline is covered on [[ingredients/tomato]]. The metals partition into the paste during the concentration process.

The second pathway is concentrative effect during paste manufacture. The evaporative water removal that produces tomato paste from tomato pulp (typically 5- to 10-fold concentration depending on the target solids percentage) proportionally elevates all components including metals on a per-mass basis. A tomato paste made from tomatoes carrying 20 ppb Pb at fresh-tomato baseline therefore carries 100 to 200 ppb Pb in the finished paste before any packaging-related additions.

The third pathway is packaging-related metal migration. Tomato paste is highly acidic (pH typically 4.2 to 4.6) and is traditionally packaged in tin-plate cans. The acidic matrix accelerates Sn migration from the tin coating into the paste over shelf life, with the Romanian dataset documenting Sn values up to 220 mg/kg at can-weld-seam sampling locations. Pb in solder seams (legacy issue in older canning) and Pb in tin-plate impurities contribute to the Pb load. Aluminum in laminated paste tubes and aluminum-foil-lined containers contributes Al at substantial levels (24 to 80 mg/kg in the Romanian dataset). Glass-jarred and plastic-packaged tomato paste eliminates the packaging-migration pathway.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=1 | 190 | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]] |
| Cd  | n=2 | 8–280 | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | n=1 | <LOD | — | low | [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|2]] |
| tHg | n=1 | <LOD | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]] |
| Ni  | data gap | — | — | — | — |
| Al  | n=1 | 24,200–80,100 | 80,100 | low | [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|2]] |
| Cr  | data gap | — | — | — | — |
| Sn  | n=2 | 410–30,600 | 219,580 | medium | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|2]] |
| U   | data gap | — | — | — | — |

The Sn p95 value (219,580 ppb = 220 mg/kg) reflects the highest single sample in the Romanian dataset, sampled at the can-weld seam rather than from homogenized product; bulk-product Sn measured by voltammetry was substantially lower (3.5 mg/kg in the same products), suggesting that the AAS measurement at the weld seam over-represents typical consumer exposure. The wide typical range for Sn (410 to 30,600 ppb) reflects the spread between the Iranian Tehran-market pasted product and the Romanian metal-canned Italian-import product.

## Ranges by source, region, and variety

The Romanian David 2008 survey of 5 canned tomato paste and sauce products from the Romanian market reports per-product values for Cd, Sn, Cr, Fe, Pb, Al, Zn, and tAs, with substantial variation between brands and packaging types ([[sources/david2008-heavy-metals-canned-tomato-paste-romania|David et al. 2008]]). Italian metal-canned tomato paste (La Grande Famiglia) reached Sn 219.58 mg/kg at the weld seam; Italian Maxim's tomato sauce reached Cd 280 µg/kg and Al 80,100 µg/kg. Romanian-brand metal-canned products carried lower Sn (17 to 31 mg/kg) and Cd (150 to 240 µg/kg). The Romanian plastic-packaged reference product (Regal) showed Sn 28 mg/kg and Cd 260 µg/kg, demonstrating that even plastic packaging is not entirely free of source-tomato or fill-line-related Sn and Cd. The dataset's small sample size (n=5) and acknowledged sampling-location effects (weld-seam sampling inflates Sn) make the values qualitative rather than quantitative anchors for population-level inference.

The Iranian Tehran market survey of 49 canned products (including canned tomato paste) reports tomato paste at Pb 0.19 ± 0.07 mg/kg (190 ppb, exceeding the Codex 100 ppb canned-product limit), Cd 0.008 ± 0.005 mg/kg (8 ppb, below Codex), Hg below the LOD of 0.5 µg/kg, and Sn 0.41 ± 0.21 mg/kg (410 ppb, well below the EU 200 mg/kg ceiling) ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-gilani et al. 2025]]). The Iranian Cd value (8 ppb) is substantially lower than the Romanian Cd values (150 to 280 ppb), reflecting either source-tomato differences between Iranian and Italian/Romanian production or differences in canning process control.

The Polish Grochowska-Niedworok 2020 study of Cd and Pb in tomatoes and tomato products provides additional European context but the specific tomato paste values from that study are not in the accessible data slice ([[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland|Grochowska-Niedworok et al. 2020]]).

Regional variation between Italian (high Sn, high Cd from the Romanian dataset's Italian samples), Iranian (moderate Pb, low Cd), and Polish (moderate per dataset context) market tomato paste is meaningful but not statistically robust given the small sample sizes in each source.

## Processing effects

Processing effects on tomato paste metal load operate at two stages. The source-tomato to paste concentration step proportionally elevates all metals by approximately 5- to 10-fold based on the typical 24 to 36 percent solids content of paste versus the 5 to 7 percent solids of fresh tomato. The packaging-and-storage step adds Sn and Pb from tin-plate can construction, with the magnitude depending on can lining (lacquered cans reduce migration substantially), storage duration (longer shelf life accumulates more migration), and sampling location within the can (weld seams concentrate migrated Sn). Modern lacquered tin-plate cans, glass jars, and Tetra Pak-style aseptic packaging all reduce the packaging-related contribution relative to traditional unlacquered tin-plate cans.

## Ingredient-derivative risk

Tomato paste is itself a concentrated tomato derivative. Further-derived products include tomato sauce (paste diluted with water and seasonings), tomato ketchup (paste blended with vinegar, sugar, and seasonings), pizza sauce, marinara sauce, and other prepared tomato sauces, all of which carry the paste-derived metals at proportional concentrations depending on the paste content. Dried tomato powder and tomato paste granules are further-concentrated forms with proportionally elevated metals. Reformulated low-sodium or organic tomato paste variants do not necessarily carry different metal loads; the source-tomato and packaging variables dominate over formulation.

## Mitigation options

Sourcing levers operate at the brand level. Sourcing source tomatoes from low-Cd-soil regions is the upstream lever for the source-fruit metal load. Selecting tomato paste suppliers with modern canning equipment (lacquered cans, stainless steel processing lines) is the load-bearing brand-level decision for finished-paste metal load. The Romanian dataset's documented Italian-product Sn and Cd values suggest that brand-level supplier vetting matters substantially.

Agronomic levers operate on the tomato producer and are covered at the source-tomato page.

Processing levers are partial. The concentration step is mechanically required for paste production; selecting tomato puree (less concentrated, 6 to 12 percent solids) or fresh diced tomato instead of paste reduces per-mass metals through dilution.

Formulation levers operate on the brand for products using tomato paste as an ingredient. Reducing the tomato paste percentage in a sauce formulation proportionally reduces per-serving metal exposure.

Testing and QC levers are critical for canned tomato paste given the wide brand-level variability documented in the Romanian dataset. Lot-level ICP-MS testing of incoming tomato paste against a sourcing specification catches origin- and packaging-related variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are the load-bearing controls for tomato paste finished-product metal load. Glass jars, modern epoxy-lined cans, and food-grade plastic containers eliminate or substantially reduce the Sn migration pathway documented in the Romanian dataset. Shorter shelf life and lower storage temperature both reduce accumulated migration.

## Regulatory limits that apply

The European Union Regulation (EU) 2023/915 establishes Pb in fruiting vegetables at 0.05 mg/kg (50 ppb) and Cd in fruiting vegetables at 0.05 mg/kg (50 ppb) on a wet-weight basis; for processed vegetable products including tomato paste, the limit applies to the as-consumed product (paste is consumed diluted in sauces) rather than the concentrate, requiring back-calculation from finished-dish concentrations. Sn in canned foods other than beverages is capped at 200 mg/kg (200,000 ppb), the reference for the Romanian and Iranian exceedance analyses ([[regulations/eu2023-contaminants-maximum-levels]]). The Codex Alimentarius general standard for contaminants establishes Pb in canned products at 0.10 mg/kg (100 ppb) and Sn in canned foods at 150 to 250 mg/kg depending on category. The United States FDA has no commodity-specific action level for Pb, Cd, or Sn in tomato paste under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland\|Grochowska-Niedworok et al. 2020]]. *Assessment of cadmium and lead content in tomatoes and tomato products*, Roczniki Państwowego Zakładu Higieny | 2020 | Peer-reviewed | Polish-market Cd and Pb in tomatoes and tomato products; provides European context for tomato paste contamination |
| 2 | [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|David et al. 2008]]. *The heavy metals analyses in canned tomato paste*, Journal of Agroalimentary Processes and Technologies | 2008 | Peer-reviewed | Primary Cd, Sn, Cr, Fe, Pb, Al, Zn, tAs occurrence for 5 canned tomato paste products (Romanian and Italian); Sn up to 220 mg/kg at weld seam, Cd 150–280 ppb, Al 24,200–80,100 ppb; small sample with sampling-location effects |
<!-- END: hmi-source-legend -->
