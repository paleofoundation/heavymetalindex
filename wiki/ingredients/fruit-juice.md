---
title: Fruit Juice
type: ingredient
commodity: fruit-juice
aliases: ["apple juice", "grape juice", "pear juice", "fruit juice concentrate", "baby juice", lychee-juice, cherry-juice, pineapple-juice]
category: beverage-ingredient
contamination_profile:
  Pb: { status: populated, typical_ppb: [0.5, 5], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 10], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [fruit-source, water-source, concentration, packaging]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/fruit-juice-not-canned]]"]
audience: [regulator, educator, consumer, app]
sources: 19
wiki_doi: null
updated: 2026-05-16
---

# Fruit Juice

Chekri et al. 2019 reports a French infant fruit-juice category with N=4, but does not separate fruit type, concentrate status, or canned status. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | — | — | — | — | — |
| Cd | — | — | — | — | — |
| iAs | — | — | — | — | — |
| tAs | — | — | — | — | — |
| tHg | — | — | — | — | — |
| Ni | — | — | — | — | — |
| Al | — | — | — | — | — |
| Cr | — | — | — | — | — |
| Sn | — | — | — | — | — |
| U | — | — | — | — | — |

## Ranges by source, region, and variety

Variance within fruit juice tracks four dimensions. First, fruit type: [[ingredients/grape-juice|grape juice]] carries higher Pb and trace Cd than [[ingredients/apple-juice|apple juice]] reflecting grape vine soil-uptake and trellis-system Pb deposition; juices from drupes (peach, plum) and citrus (orange, grapefruit) sit at the low end of the per-juice metal range. Second, growing-region soil and irrigation-water profile: juice from documented high-As-water regions (parts of Latin America, South Asia, certain US southwestern apple production) carries elevated iAs and tAs per [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda|Kubachka 2019]] HPLC-ICP-MS speciation work. Third, single-strength vs concentrate-and-reconstitute production: concentrates carry concentrated per-mass metals at the concentrate stage, which propagates into reconstituted juice via dilution. Fourth, packaging: aseptic carton or PET-bottled juice carries lower trace metals than metal-can juice because the can-lining introduces a Sn migration pathway in acidic juice matrices.

The FDA 2022 draft action levels ([[sources/fda2022-draft-lead-juice|FDA 2022]]) of 10 ppb Pb for single-strength apple juice and 20 ppb Pb for other juices replaced the older 1995 50-ppb HACCP context ([[sources/fda2004-juice-haccp-lead|FDA 2004]]), reflecting FDA's reassessment of achievable industry practice. The French infant TDS work in [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]] documents the broader Cd, Cr, Ni, and Sn occurrence in infant fruit juices on the EU market.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals\|Weldegebriel et al. 2025]]. *Toxic metal contamination and health risk assessment of packaged fruit juices for children in Gondar city, Ethiopia*, Scientific Reports 15:36868 | 2025 | Peer-reviewed | ET Cd, Pb, Cr, Ni occurrence in Eighty packaged fruit juice samples drawn from eight Ethiopian-manufactured brands (10 samples per brand) and analyzed for Cd,... (n=80) |
| 2 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology 12(3): 158-165 | 2024 | Peer-reviewed | NP Pb, Fe, Cu, Zn occurrence in Sixteen commercially packaged fruit-juice samples — four flavours (orange, apple, mango, lychee) drawn from four popular brands sold... (n=16) |
| 3 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 4 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 5 | [[sources/cereal2013-cereal-juice-lead-arsenic\|Neuwirth 2022]]. *Cereal and Juice, Lead and Arsenic, Our Children at Risk: A Call for the FDA to Re-Evaluate the Allowable Limits of Lead and Arsenic That Children May Ingest*, International Journal of Environmental Research and Public Health | 2022 | Peer-reviewed | Cited reference from International Journal of Environmental Research and Public Health |
| 6 | [[sources/desouza2022-fruit-juice-trace-elements\|Souza et al. 2022]]. *Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS*, Brazilian Journal of Analytical Chemistry | 2022 | Peer-reviewed | ES/PT Al, tAs, Cd, Co, Cr, Cu, Fe, Mg, Mn, Mo, Ni, Pb, Sb, V, Zn occurrence in 21 fruit juice and nectar samples: 16 commercial fruit juices, 2 commercial nectars, 2 laboratory-squeezed orange juices, and... (n=21) |
| 7 | [[sources/fda2022-draft-lead-juice\|FDA 2022]]. *Draft Guidance for Industry: Action Levels for Lead in Juice*, FDA Draft Guidance for Industry | 2022 | Government guidance | FDA 2022 draft Pb action levels for juice: 10 ppb for single-strength apple juice and 20 ppb for other juices, replacing the older 50 ppb HACCP context |
| 8 | [[sources/subedi2022-fruit-juices-heavy-metals\|Subedi et al. 2022]]. *Determination of heavy metals in varieties of fresh and packaged fruit juices along with powdered fruit drink mixes in Kathmandu Valley*, Journal of Balkumari College | 2022 | Peer-reviewed | NP Fe, Mn, Zn, Pb occurrence in Fresh juices, packaged juices, and powdered fruit drink mixes sold in Kathmandu Valley, Nepal |
| 9 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant TDS occurrence data for Al, Sb, tAs, Cd, Cr, Ni, and Sn in fruit juice products consumed by infants and toddlers (n=291 total foods) |
| 10 | [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|Kubachka et al. 2019]]. *Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS*, Food Analytical Methods | 2019 | Peer-reviewed | FDA AOAC First Action 2016.04 HPLC-ICP-MS method for iAs, DMA, MMA, and AsB in apple, pear, grape, pomegranate, prune, and cherry juices |
| 11 | [[sources/balalimood2018-fruit-juice-mashhad-pb-as\|Balali-Mood et al. 2018]]. *Arsenic and Lead Contaminations in Commercial Fruit Juices of Markets in Mashhad, Iran*, Iranian Journal of Toxicology | 2018 | Peer-reviewed | IR Pb, tAs occurrence in 50 commercial packaged fruit juice samples from Mashhad, Iran local markets in spring and winter 2016; grape, apple,... (n=50) |
| 12 | [[sources/youssao2018-fruit-juices-syrup-benin\|Youssao et al. 2018]]. *Levels of Minor and Trace Elements of Some Commercial Fruit Juices and Syrup Produced in Artisanal and Semi-Industrial Units in Benin Republic*, International Journal of Chemistry | 2018 | Peer-reviewed | BJ/FR Al, tAs, Ba, Be, Cd, Hg, Pb, Sn, Tl, U occurrence in 92 fruit-juice and syrup samples: 85 Benin-produced bottled pineapple juices/cocktails from artisanal and semi-industrial units, 6 French pineapple... (n=92) |
| 13 | [[sources/alzagtat2016-fruit-nectars-libya-heavy-metals\|Alzagtat et al. 2016]]. *Conformity of Fruit Nectar Samples to Libyan Specification Standards*, Turkish Journal of Agriculture - Food Science and Technology | 2016 | Peer-reviewed | LY Cu, Zn, Fe, tAs, Pb, Cd occurrence in Local and imported fruit nectar samples from Libyan markets |
| 14 | [[sources/paula2015-fruit-juices-elements-portugal\|Paula et al. 2015]]. *Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices*, Czech Journal of Food Sciences | 2015 | Peer-reviewed | PT Cd, Cr, Pb, Ni, Zn, Fe occurrence in 62 packs of 100% fruit juices acquired randomly from major supermarkets in Portugal; samples covered multiple fruit species,... (n=62) |
| 15 | [[sources/savic2015-clear-orange-juice-minerals\|Savic et al. 2015]]. *The Presence of Minerals in Clear Orange Juices*, Advanced Technologies | 2015 | Peer-reviewed | RS Ag, Al, tAs, Cd, Co, Cr, Cu, Fe, Li, Mg, Mn, Mo, Ni, Pb, Sb, Zn occurrence in Seven clear orange-juice samples with 50% fruit content, produced by different manufacturers and purchased from the local market... (n=7) |
| 16 | [[sources/fda2004-juice-haccp-lead\|FDA 2004]]. *Juice HACCP Hazards and Controls Guidance, First Edition — Lead in Juice*, FDA Guidance for Industry | 2004 | Government guidance | FDA Juice HACCP guidance establishing 50 ppb Pb as the original hazard threshold for ready-to-drink fruit juices; superseded by the 2022 draft action levels |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Fruit juice is the liquid extracted from fresh fruit (single-strength) or reconstituted from concentrate. Heavy-metal load in fruit juice originates from three primary pathways: source-fruit inheritance ([[metals/lead|Pb]] and [[metals/cadmium|Cd]] from soil uptake; iAs in juice from fruit grown in As-affected water/soil regions; trace Ni from natural plant content), processing-equipment contact (pressing, filtration, and concentration equipment introduces trace metals if not specifically food-grade lined), and packaging migration ([[metals/tin|Sn]] from tinplate cans in acidic juice matrices; trace Pb historically from soldered cans, now phased out). The FDA's Closer to Zero framework and the 2022 draft action levels for Pb in juice ([[sources/fda2022-draft-lead-juice|FDA 2022]]) target the juice-specific Pb pathway, particularly for single-strength apple juice as a high-frequency infant beverage.

Different fruit types carry different baseline metal loads: [[ingredients/grape-juice|grape juice]] sits at the upper end of the per-juice Pb range reflecting grape vine soil-uptake and trellis-system Pb; [[ingredients/apple-juice|apple juice]] sits at the lower end. The HPLC-ICP-MS speciation work by [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda|Kubachka 2019]] documents iAs speciation in fruit juices reaching the US market and is the methodological foundation for FDA's juice-As surveillance. The HMTc panel concerns for fruit juice are Pb (dominant for FDA regulatory attention), trace Cd and iAs (from source-fruit and source-water inheritance), and Sn for canned-juice products.

## Processing effects

Fruit-juice manufacturing involves washing, pressing or extraction, screening or filtration, optional pasteurization (thermal or high-pressure), optional concentration via evaporation, and packaging. The pressing step extracts juice from fruit solids and leaves most metal load with the source fruit in the solids fraction; juice typically carries lower per-mass Pb and Cd than the source fruit on a wet-weight basis because the metals partition substantially to the solids. Filtration further removes particulate-bound metals. Concentration via evaporation concentrates per-mass solute including metals; reconstituted juice carries the concentrate's diluted profile. Pasteurization does not affect metals. The dominant processing-introduced contamination is Sn from tinplate-can packaging migration in acidic juice (juice pH ≈3.0-4.0 promotes Sn migration); modern can-stock specifications (BPA-NI epoxy lining, full lacquering) address this.

## Ingredient-derivative risk

Fruit-juice derivatives include juice concentrate (concentrated metals per-mass; primary intermediate for reconstituted juice products), juice blends (multiple fruit juices combined; per-juice profile is the weighted average), fruit-flavored beverages (juice diluted with water, sweeteners, and other ingredients; lower per-mass metals than full-strength juice), and juice-based products including jellies, jams, and dessert toppings. Fruit juice routes into product-row families including [[products/fruit-juice-not-canned|fruit-juice-not-canned]] and related infant-and-young-child juice product rows. Specific per-fruit juices have dedicated pages: [[ingredients/apple-juice|apple juice]], [[ingredients/grape-juice|grape juice]], [[ingredients/mango-juice|mango juice]].

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-fruit specification (origin-region selection for documented low-soil-Pb and low-irrigation-As production areas); supplier audit programs verifying processing-equipment material specifications; and contractual specification of Pb/iAs ceiling on incoming juice or concentrate.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the fruit-cultivation stage; see per-fruit ingredient pages ([[ingredients/grape-juice|grape]], [[ingredients/apple|apple]], etc.) for the upstream interventions.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification (stainless-steel-only contact surfaces, food-grade gasketing, BPA-NI lined storage tanks); filtration to remove particulate-bound metals; and avoidance of equipment-cleaning chemicals that could introduce trace metals.

**Formulation levers** ([[mitigation/formulation]]) include juice-blend diversification (blending higher-Pb juices with lower-Pb juices to dilute per-product Pb); juice-to-water dilution in fruit-flavored beverage formulations; and substitution of juice with water-based fruit-flavor systems where the consumer category permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature: lot-level Pb, iAs, Cd, and Sn testing on finished juice against the FDA 2022 draft action levels (10 ppb Pb single-strength apple juice; 20 ppb Pb other juices) and EU per-juice maximum levels. ICP-MS is the standard analytical platform; HPLC-ICP-MS speciation is required for iAs vs tAs distinction.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (BPA-NI epoxy, full lacquering, two-piece drawn-redrawn construction) to minimize Sn migration; aseptic carton, glass, or PET packaging eliminates the Sn pathway entirely. Storage-condition specification (cool, dark storage) extends shelf-life Sn-migration tolerance for canned products.

## Regulatory limits that apply

- [[sources/fda2022-draft-lead-juice|FDA 2022 draft action levels for Pb in juice]]: 10 ppb for single-strength apple juice and 20 ppb for other juices, replacing the older 1995 50 ppb HACCP context ([[sources/fda2004-juice-haccp-lead|FDA 2004]]).
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb in fruit juice at 30 ppb (general) and 30 ppb for fruit nectar.
- Codex Alimentarius CXS 247-2005 (General Standard for Fruit Juices and Nectars) includes contaminant provisions referencing CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]).
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to fruit-juice products sold in California; the Mateel Environmental v. Welch Foods settlement specifically established practical compliance levels for grape juice and other juice products.
- EU Sn-in-canned-food regulation sets 200 mg/kg general / 50 mg/kg infant-and-young-child / 100 mg/kg beverages maximum levels for canned juice products.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
<!-- END: hmi-page-history -->
