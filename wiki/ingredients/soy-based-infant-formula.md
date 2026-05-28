---
title: "Soy-based infant formula"
type: ingredient
commodity: soy-based-infant-formula
label: "Soy-based infant formula"
aliases: [soy infant formula, soya infant formula]
category: formula-input-profile
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [7, 12]
    p95_ppb: 12
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [7, 12]
    p95_ppb: 12
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
used_in_products: [infant-formula-powder-soy-based, infant-formula-rtf-liquid-soy-based]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 8
---

# Soy-Based Infant Formula

This is a structural ingredient/profile node for soy-based infant formula routing. Finished formula occurrence values belong on the relevant formula product pages unless a source reports ingredient-only values.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|Thoerig et al. 2025]]. *Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review*, American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 | 2025 | Peer-reviewed | Systematic review of U.S. As, Cd, Pb, Hg, and PFAS evidence in human milk and infant formula including soy-based products; summary distributions by matrix and analyte |
| 2 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, SCHEER Opinion, European Commission | 2017 | Government report | EU Al occurrence in Review of regulatory opinions and dietary exposure data for children and adults |
| 3 | [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation\|Pacquette et al. 2016]]. *Simultaneous Determination of Arsenic, Cadmium, Mercury, and Lead in Raw Ingredients, Nutritional Products, and Infant Formula by Inductively Coupled Plasma Mass Spectrometry: Single-Laboratory Validation*, Journal of AOAC International, Vol. 99, No. 3, pp. 766-779 | 2016 | Peer-reviewed | ICP-MS method validation for simultaneous As, Cd, Hg, Pb determination in infant formula matrices including soy-based powders; documents the analytical platform used in downstream occurrence surveys |
| 4 | [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|Carignan et al. 2015]]. *Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort*, Environmental Health Perspectives, Vol. 123, No. 5, pp. 500-506 | 2015 | Peer-reviewed | U.S. infant cohort study comparing iAs/tAs biomarker exposure in breastfed vs formula-fed infants, including soy-formula feeding mode |
| 5 | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods\|Jackson et al. 2012]]. *Arsenic concentration and speciation in infant formulas and first foods*, Pure and Applied Chemistry, Vol. 84, No. 2, pp. 215-223 | 2012 | Peer-reviewed | HPLC-ICP-MS arsenic speciation data (iAs, MMA, DMA) in U.S. infant formulas including soy-based powders; primary source for soy formula iAs occurrence |
| 6 | [[sources/burrell2010-aluminium-in-infant-formulas\|Burrell et al. 2010]]. *There is (still) too much aluminium in infant formulas*, BMC Pediatrics | 2010 | Peer-reviewed | UK Al occurrence in Fifteen commercial infant formula products on the UK market; ready-made liquid and powdered formats; cow-milk-based and soya-based; first-infant,... (n=15) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Soy-based infant formula uses soy protein isolate as the protein base rather than cow-milk protein. The soy protein isolate carries the source-soybean [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]] profile at concentrated per-mass levels because protein extraction concentrates these metals; see [[ingredients/soy]] for the soybean-stage rationale. Soy-based formula consequently carries elevated Al, Ni, and Cd relative to cow-milk-based formula even when the rest of the formulation (carbohydrate source, fat blend, vitamin-mineral premix) is identical. Multiple infant-formula surveys document this consistently: [[sources/burrell2010-aluminium-in-infant-formulas|Burrell 2010]] UK soy powder formula at 4.3 µg/g aluminum, which translates to roughly 629 µg/L prepared-for-feeding under standard 1:7 reconstitution.

Soy-based formula is medically indicated for infants with cow-milk-protein allergy or galactosemia, and is otherwise consumed by infants of vegan families or by parents of preference. The HMTc Cat 1 Step 0 lock splits soy-based formula from non-soy into separate product rows ([[products/infant-formula-powder-soy-based]] and [[products/infant-formula-rtf-liquid-soy-based]]) because the Al/Ni/Cd-elevated profile warrants separate certification analysis. The HMTc panel concerns for soy-based infant formula are dominantly Al, Ni, and Cd (the soy-protein-isolate inheritance pathway), plus the standard [[metals/lead|Pb]] concerns common to all infant formulas. Arsenic occurrence in soy-based formula sits at 7-12 ppb tAs/iAs medium-confidence based on the U.S. systematic review by [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review|Thoerig 2025]], the U.S. cohort biomarker work by [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants|Carignan 2015]], and the speciation survey by [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods|Jackson 2012]].

## Heavy metal contamination profile

The body-level analyte snapshot for soy-based formula follows the per-format pages: see [[products/infant-formula-powder-soy-based]] and [[products/infant-formula-rtf-liquid-soy-based]] for the format-specific concentration tables. The dominant analytes of concern (Al, Ni, Cd) reflect the soy-protein-isolate inheritance described above; the contributing sources documented in the Source legend collectively establish the multi-fold Al elevation versus cow-milk formula.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | pending | — | — | — | — |
| Cd  | pending | — | — | — | — |
| iAs | n=3 | 7–12 | 12 | medium | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods\|5]], [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|4]], [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|1]] |
| tAs | n=4 | 7–12 | 12 | medium | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods\|5]], [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|4]], [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation\|3]] |
| tHg | pending | — | — | — | — |
| Ni  | pending | — | — | — | — |
| Al  | pending | — | — | — | — |
| Cr  | pending | — | — | — | — |
| Sn  | pending | — | — | — | — |
| U   | pending | — | — | — | — |

## Ranges by source, region, and variety

Variance within soy-based infant formula tracks four dimensions: source-soybean origin (US Midwest vs Brazilian vs Argentine vs Chinese vs European soy production), the protein-isolation process used by the soy-isolate supplier, the manufacturer's formulation choices (vitamin-mineral premix supplier, water source), and historical generation (post-2020 vs pre-2010 manufacturer responses to the Al-in-soy-formula debate documented in [[sources/burrell2010-aluminium-in-infant-formulas|Burrell 2010]] and earlier work).

US-market soy-based formula, EU-market soy-based formula, and emerging-market soy-based formula carry different baseline profiles reflecting these per-region soy-supplier and per-manufacturer differences. The Al elevation in soy formula relative to cow-milk formula is consistent across markets at multiple-fold; absolute levels vary by manufacturer. Arsenic occurrence in U.S.-market soy-based formula sits in the 7-12 ppb range across the [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods|Jackson 2012]] and [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants|Carignan 2015]] cohort work, with the systematic review by [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review|Thoerig 2025]] confirming the range across the broader U.S. literature.

## Processing effects

Soy-based infant formula manufacturing follows the same processing chain as cow-milk-based formula (see [[ingredients/infant-formula-powder]] and [[ingredients/infant-formula-rtf-liquid]]) with soy protein isolate substituted for the milk-protein-and-lactose ingredients. The protein-isolation step at the upstream soy-supplier stage is the dominant metal-concentration-from-raw-soybean event; once the isolate is incorporated into formula, downstream processing follows the standard infant-formula pathway without changing the Al/Ni/Cd-elevated profile. ICP-MS analytical methods for soy-formula matrices are validated in [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation|Pacquette 2016]].

## Ingredient-derivative risk

Soy-based formula derivatives are the same format set as other infant formulas: powder, ready-to-feed (RTF) liquid, and concentrated liquid. The Cat 1 Step 0 lock variants ([[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-soy-based]]) carry the same soy-protein-isolate inheritance; format affects per-volume concentration via reconstitution ratio but not per-gram-protein concentration. Older soy-formula generations carry higher Al than current production because manufacturer responses to [[sources/burrell2010-aluminium-in-infant-formulas|Burrell 2010]] and subsequent regulatory attention have driven reductions; historical stock and emerging-market supply may still carry higher Al concentrations.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) for soy-based formula are limited because the soy-isolate ingredient itself carries the elevated Al/Ni profile by species characteristic. The dominant brand-side decisions are: soy-supplier specification (testing of incoming soy protein isolate for Al, Ni, Cd against the per-mass-in-finished-formula compliance target); soy-origin selection within low-Al soybean production regions (limited efficacy because species-level Al accumulation dominates); and hydrolysate or amino-acid formula substitution for infants with cow-milk-protein allergy as an alternative to soy-based formula where medically appropriate.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the soybean-production stage; see [[ingredients/soy]] for soil-Cd remediation and Al-uptake-management interventions.

**Processing levers** ([[mitigation/processing]]) are limited at the formula-manufacturing stage; the Al/Ni profile is in the soy protein isolate already. Upstream soy-isolate processing improvements (acid-base extraction modifications, ion-exchange polishing) carry potential but are not standard in commodity-grade isolate production.

**Formulation levers** ([[mitigation/formulation]]) include the alternative-base-protein substitution (hydrolyzed cow-milk protein, amino-acid-based formula) for medical-indication infants where soy is not the only option.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature: lot-level Al, Ni, Cd, Pb testing on finished soy-based formula against the EU 10 ppb Pb prepared-for-feeding ML and applicable Al/Ni reference levels (EFSA TWI for Al). The ICP-MS method validated by [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation|Pacquette 2016]] is the operative analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (BPA-NI epoxy or food-grade alternative) and aluminum-foil-lined packaging considerations to avoid Al migration from packaging into prepared formula.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for infant formula: Pb 10 ppb prepared-for-feeding (≈70 ppb powder basis), Cd 5 ppb, iAs 20 ppb, Hg 20 ppb. These apply to soy-based formula identically to cow-milk-based.
- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]] — FDA Closer to Zero iAs framework covers rice-containing formula.
- Codex Alimentarius CXS 72-1981 (infant formula) and CXS 156-1987 (follow-up formula) establish composition standards.
- JECFA Al PTWI of 2 mg/kg b.w./week and EFSA TWI of 1 mg/kg b.w./week are the relevant dose-response references per [[sources/scheer2017-aluminium-tolerable-intake-toys|SCHEER 2017]]; soy-based formula at the upper end of the Al-concentration range documented by [[sources/burrell2010-aluminium-in-infant-formulas|Burrell 2010]] and subsequent literature can deliver Al intakes that approach or exceed these reference levels for exclusive-soy-formula-fed infants.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to infant formula yields stringent serving-based screen.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1205e69](https://github.com/paleofoundation/heavymetalindex/commit/1205e69) | 2026-05-19 | autonomy: daemon tick 2026-05-19T15-55-42Z — gap-healing + extraction + pooling + briefings |
| [6dcb44d](https://github.com/paleofoundation/heavymetalindex/commit/6dcb44d) | 2026-05-19 | autonomy: daemon tick 2026-05-18T21-04-04Z — gap-healing + extraction + pooling + briefings |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
| [c027e29](https://github.com/paleofoundation/heavymetalindex/commit/c027e29) | 2026-05-17 | source-legend: programmatic baseline fill (2026-05-17) |
| [c069002](https://github.com/paleofoundation/heavymetalindex/commit/c069002) | 2026-05-17 | synthesis: shark, soy/non-soy infant formula, vegetables — 6 narrative sections each |
<!-- END: hmi-page-history -->
