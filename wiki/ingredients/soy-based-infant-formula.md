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
updated: 2026-05-16
sources: 6
---

# Soy-Based Infant Formula

This is a structural ingredient/profile node for soy-based infant formula routing. Finished formula occurrence values belong on the relevant formula product pages unless a source reports ingredient-only values.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|Thoerig et al. 2025]]. *Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review*, American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 | 2025 | Peer-reviewed | Systematic review of U.S. As, Cd, Pb, Hg, and PFAS evidence in human milk and infant formula including soy-based products; summary distributions by matrix and analyte |
| 2 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, SCHEER Opinion, European Commission | 2017 | Government report | *[awaiting synthesis]* |
| 3 | [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation\|Pacquette et al. 2016]]. *Simultaneous Determination of Arsenic, Cadmium, Mercury, and Lead in Raw Ingredients, Nutritional Products, and Infant Formula by Inductively Coupled Plasma Mass Spectrometry: Single-Laboratory Validation*, Journal of AOAC International, Vol. 99, No. 3, pp. 766-779 | 2016 | Peer-reviewed | ICP-MS method validation for simultaneous As, Cd, Hg, Pb determination in infant formula matrices including soy-based powders; documents the analytical platform used in downstream occurrence surveys |
| 4 | [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|Carignan et al. 2015]]. *Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort*, Environmental Health Perspectives, Vol. 123, No. 5, pp. 500-506 | 2015 | Peer-reviewed | U.S. infant cohort study comparing iAs/tAs biomarker exposure in breastfed vs formula-fed infants, including soy-formula feeding mode |
| 5 | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods\|Jackson et al. 2012]]. *Arsenic concentration and speciation in infant formulas and first foods*, Pure and Applied Chemistry, Vol. 84, No. 2, pp. 215-223 | 2012 | Peer-reviewed | HPLC-ICP-MS arsenic speciation data (iAs, MMA, DMA) in U.S. infant formulas including soy-based powders; primary source for soy formula iAs occurrence |
| 6 | [[sources/burrell2010-aluminium-in-infant-formulas\|Burrell et al. 2010]]. *There is (still) too much aluminium in infant formulas*, BMC Pediatrics | 2010 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Soy-based infant formula uses soy protein isolate as the protein base rather than cow-milk protein. The soy protein isolate carries the source-soybean Al, Ni, and Cd profile at concentrated per-mass levels (because protein extraction concentrates these metals; see [[ingredients/soy]]). Soy-based formula consequently carries elevated Al, Ni, and Cd relative to cow-milk-based formula even when the rest of the formulation (carbohydrate source, fat blend, vitamin-mineral premix) is identical. Multiple infant-formula surveys document this consistently: [[sources/kazi2009-toxic-elements-in-infant-formulae|Kazi 2009]] Pakistani-market soy formula Al at 2,270 ppb vs cow-milk formula substantially lower; [[sources/burrell2010-aluminium-in-infant-formulas|Burrell 2010]] UK soy powder formula at 4.3 µg/g (629 µg/L prepared); [[sources/chuchu2013-aluminium-in-infant-formulas|Chuchu 2013]] soy powder formula at 656-756 µg/L prepared.

Soy-based formula is medically indicated for infants with cow-milk-protein allergy or with galactosemia, and is otherwise consumed by infants of vegan families or by parents of preference. The Cat 1 Step 0 lock splits soy-based formula from non-soy into separate rows ([[products/infant-formula-powder-soy-based]] and [[products/infant-formula-rtf-liquid-soy-based]]) because the Al/Ni/Cd-elevated profile warrants separate certification analysis.

The HMTc panel concerns for soy-based infant formula are dominantly Al, Ni, and Cd (the soy-protein-isolate inheritance pathway), plus the standard Pb concerns common to all infant formulas.

## Heavy metal contamination profile

The body-level analyte snapshot for soy-based formula follows the per-format pages: see [[products/infant-formula-powder-soy-based]] and [[products/infant-formula-rtf-liquid-soy-based]] for the format-specific concentration tables. The dominant analytes of concern (Al, Ni, Cd) reflect the soy-protein-isolate inheritance described above; the contributing sources documented in the Source legend collectively establish the multi-fold Al elevation vs cow-milk formula.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | pending | — | — | — | — |
| Cd  | pending | — | — | — | — |
| iAs | pending | — | — | — | — |
| tAs | pending | — | — | — | — |
| tHg | pending | — | — | — | — |
| Ni  | pending | — | — | — | — |
| Al  | pending | — | — | — | — |
| Cr  | pending | — | — | — | — |
| Sn  | pending | — | — | — | — |
| U   | pending | — | — | — | — |

## Ranges by source, region, and variety

Variance within soy-based infant formula tracks: (a) source-soybean origin (US Midwest vs Brazilian vs Argentine vs Chinese vs European soy production), (b) the protein-isolation process used by the soy-isolate supplier, (c) the manufacturer's formulation choices (vitamin-mineral premix supplier, water source), and (d) historical generation (post-2020 vs pre-2010 manufacturer responses to the Al-in-soy-formula debate documented in Burrell 2010 and earlier).

US-market soy-based formula, EU-market soy-based formula, and emerging-market soy-based formula carry different baseline profiles reflecting these per-region soy-supplier and per-manufacturer differences. The Al elevation in soy formula relative to cow-milk formula is consistent across markets at multiple-fold; absolute levels vary by manufacturer.

## Processing effects

Soy-based infant formula manufacturing follows the same processing chain as cow-milk-based formula (see [[ingredients/infant-formula-powder]] and [[ingredients/infant-formula-rtf-liquid]]) with soy protein isolate substituted for the milk-protein-and-lactose ingredients. The protein-isolation step at the upstream soy-supplier stage is the dominant metal-concentration-from-raw-soybean event; once the isolate is incorporated into formula, downstream processing follows the standard infant-formula pathway without changing the Al/Ni/Cd-elevated profile.

## Ingredient-derivative risk

Soy-based formula derivatives are the same format set as other infant formulas: powder, RTF liquid, concentrated liquid (Cat 1 Step 0 lock variants).

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) for soy-based formula are limited because the soy-isolate ingredient itself carries the elevated Al/Ni profile by species characteristic. The dominant brand-side decisions are:

- Soy-supplier specification (testing of incoming soy protein isolate for Al, Ni, Cd against the per-mass-in-finished-formula compliance target).
- Soy-origin selection within low-Al soybean production regions (limited efficacy because species-level Al accumulation dominates).
- Hydrolysate or amino-acid formula substitution for infants with cow-milk-protein allergy as an alternative to soy-based formula where medically appropriate.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the soybean-production stage (see [[ingredients/soy]]).

**Processing levers** ([[mitigation/processing]]) are limited; the Al/Ni profile is in the soy protein isolate already.

**Formulation levers** ([[mitigation/formulation]]) include the alternative-base-protein substitution (hydrolyzed cow-milk protein, amino-acid-based formula) for medical-indication infants where soy is not the only option.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature: lot-level Al, Ni, Cd, Pb testing on finished soy-based formula against the EU 10 ppb Pb prepared-for-feeding ML and applicable Al/Ni reference levels (EFSA TWI for Al).

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (BPA-NI epoxy or food-grade alternative) and aluminum-foil-lined packaging considerations.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for infant formula: Pb 10 ppb prepared-for-feeding (~70 ppb powder basis), Cd 5 ppb, iAs 20 ppb, Hg 20 ppb. These apply to soy-based formula identically to cow-milk-based.
- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]] — FDA Closer to Zero iAs framework covers rice-containing formula.
- Codex Alimentarius CXS 72-1981 (infant formula) and CXS 156-1987 (follow-up formula) — composition standards.
- JECFA Al PTWI of 2 mg/kg b.w./week and EFSA TWI of 1 mg/kg b.w./week are the relevant dose-response references; soy-based formula at the upper end of the Al-concentration range documented in the corpus can deliver Al intakes that approach or exceed these reference levels for exclusive-soy-formula-fed infants.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to infant formula yields stringent serving-based screen.


