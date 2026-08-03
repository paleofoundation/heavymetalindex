---
title: "Infant Formula Powder"
type: ingredient
commodity: infant-formula-powder
label: "Infant Formula Powder"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.5, 15]
    p95_ppb: 50
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0.1, 2]
    p95_ppb: 3.5
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0.5, 3]
    p95_ppb: null
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-31
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
  tAs:
    status: populated
    typical_ppb: [2, 12]
    p95_ppb: 13
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [infant-formula-powder-non-soy, infant-formula-powder-soy-based]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 21
---

# Infant Formula Powder

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | THIN | 9 of 10 profiled analytes populated | unpopulated: tHg |
| Pooling depth | THIN | 4 below 5 | below pooling depth: Pb, Cd, iAs, tAs |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 9 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 9 of 9 carry last_reviewed; oldest 2026-05-16 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0.5–15 | medium | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|1]], [[sources/original2020-original-a\|2]], [[sources/signes-pastor2022-infant-elements-nhbcs\|3]] |
| Cd | n=3 | 0.1–2 | medium | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|1]], [[sources/original2020-original-a\|2]], [[sources/signes-pastor2022-infant-elements-nhbcs\|3]] |
| iAs | n=3 | 0.5–3 | medium | [[sources/original2020-original-a\|1]], [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|2]], [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup\|3]] |
| tAs | n=4 | 2–12 | medium | [[sources/original2020-original-a\|1]], [[sources/signes-pastor2022-infant-elements-nhbcs\|2]], [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|3]] |
| tHg | pending | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 21 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Arsenic, Organic Foods, and Brown Rice Syrup]]<span class="hmi-ref-meta">Jackson BP, Taylor VF, Karagas MR, Punshon T, and Cottingham KL · Environmental Health Perspectives · 2012 · [doi.org/10.1289/ehp.1104619](https://doi.org/10.1289/ehp.1104619)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/burrell2010-aluminium-in-infant-formulas|There is (still) too much aluminium in infant formulas]]<span class="hmi-ref-meta">Shelle-Ann M. Burrell and Christopher Exley · BMC Pediatrics · 2010 · [doi.org/10.1186/1471-2431-10-63](https://doi.org/10.1186/1471-2431-10-63)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rahati2026-infant-formula-baby-food-iran-health-risk\|Rahati et al. 2026]]. *Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market*, Journal of Health, Population and Nutrition 45:13 | 2026 | Peer-reviewed | IR Pb, Cd, tHg, Al, Cr, Co, Cu, Fe, Mn, Zn, Ba, Sr, Se occurrence in 80 powdered infant formula samples from 8 commercial brands (age strata 0–6 months, 6–12 months, above 1 year)... (n=107) |
| 2 | [[sources/alyasiri2024-infant-formula-heavy-metals\|Alyasiri 2024]]. *Detection of Aflatoxin M1 and Several Heavy Metals in Medical Infant Milk Formula Sold in Iraqi Markets*, International Journal of Pharmaceutical and Bio-Medical Science | 2024 | Peer-reviewed | IQ Pb, Cd, tAs occurrence in five specialty metabolic-disorder infant milk formula types (PKU, lactose-free, MSUD, OAc, tyrosinemia) sold in Iraqi markets; three replicates... (n=15) |
| 3 | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|Khatibi et al. 2024]]. *Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020*, Sigma Journal of Engineering and Natural Sciences 42(2): 614-620 | 2024 | Peer-reviewed | Pb and Cd in 18 brands of powdered infant formula on the Zahedan, Iran market by graphite-furnace AAS |
| 4 | [[sources/tatsuta2024-mehg-duplicate-diet-children-japan\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0–5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | JP tHg, MeHg occurrence in 260 children aged 0–5 years from the Pacific side of Tohoku, Japan, providing 276 24-hour dietary duplicate samples... (n=276) |
| 5 | [[sources/alfaraji2023-infant-formula-baghdad-minerals\|ASAR 2023]]. *The detection of some minerals in infant formula available in local markets*, Iraqi Journal of Market Research and Consumer Protection | 2023 | Peer-reviewed | IQ Pb, Cu occurrence in Powdered infant formula samples collected from local markets in Baghdad Governorate, Iraq, July-August 2021 (n=10) |
| 6 | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals\|Alharbi et al. 2023]]. *Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition | 2023 | Peer-reviewed | SA tAs, Cd, Pb occurrence in 111 commercially available baby food products collected from pharmacies and main markets in Riyadh, Jeddah, and Dammam (Kingdom... (n=111) |
| 7 | [[sources/demir2023-infant-formulas-turkey-toxic-elements\|Demir et al. 2023]]. *Estimated daily intake and health risk assessment of toxic elements in infant formulas*, British Journal of Nutrition | 2023 | Peer-reviewed | TR/EU Al, Mn, Co, Cu, Zn, tAs, Se, Cd, Sn, Pb, tHg occurrence in 72 powdered cow-milk-based infant formula products from 16 anonymized brands in Turkiye, covering 0-6 month infant formula, follow-on... (n=72) |
| 8 | [[sources/floresaguilar2022-infant-formula-lead-spe-ce\|Flores-Aguilar et al. 2022]]. *Selective Pb(II)-Imprinted Polymer for Solid Phase Extraction in the Trace Determination of Lead in Infant Formula by Capillary Electrophoresis*, Journal of the Mexican Chemical Society | 2022 | Peer-reviewed | MX Pb occurrence in Twenty commercial infant formula samples analyzed for Pb after reconstitution according to manufacturer instructions; positive samples are reported... (n=20) |
| 9 | [[sources/gredilla2022-powdered-milk-hazardous-elements\|Gredilla et al. 2022]]. *A Rapid Routine Methodology Based on Chemometrics to Evaluate the Toxicity of Commercial Infant Milks Due to Hazardous Elements*, Food Analytical Methods | 2022 | Peer-reviewed | BR/CO Li, Al, Mg, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, tAs, Se, Cd, Sn, Sb, Ba, tHg, Tl, Pb, Mo occurrence in Twelve commercial powdered milk formulas purchased in representative cities of Brazil and Colombia: nine child/infant milks and three... (n=12) |
| 10 | [[sources/mielech2021-contamination-food-infants-toddlers\|Mielech et al. 2021]]. *Assessment of the Risk of Contamination of Food for Infants and Toddlers*, Nutrients | 2021 | Review | PL/NO/US Pb, Cd, tAs, iAs, tHg occurrence in Narrative literature review of 83 publications (2004–2021, mainly October 2020–March 2021 search window) on contaminants in foods for... |
| 11 | [[sources/dehghani2020-food-lead-cadmium-mspe\|Zahra et al. 2020]]. *Magnetic Multi-Walled Carbon Nanotubes Modified with Polythiophene as a Sorbent for Simultaneous Solid Phase Microextraction of Lead and Cadmium from Water and Food Samples*, Analytical and Bioanalytical Chemistry Research | 2020 | Peer-reviewed | IR Pb, Cd occurrence in Black tea, rice, infant dry formula milk, and cow milk samples purchased in Yazd, Iran (n=5) |
| 12 | [[sources/depa2019-baby-food-lead-cadmium\|Depa 2019]]. *Heavy Metals in Baby Foods and Cereal Products*, Turkish Journal of Computer and Mathematics Education | 2019 | Peer-reviewed | Pb, Cd occurrence in Baby foods and cereal products, including milk powder and cereal-based products (n=63) |
| 13 | [[sources/frisbie2019-manganese-infant-formula-beverages\|Frisbie et al. 2019]]. *Manganese levels in infant formula and young child nutritional beverages in the United States and France: Comparison to breast milk and regulations*, PLOS ONE | 2019 | Peer-reviewed | US/FR/EU Mn occurrence in 44 infant formulas and young-child nutritional beverage products purchased in the United States (n=25) and France (n=19), selected... (n=44) |
| 14 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
| 15 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | Urinary iAs biomarker evidence linking infant formula feeding to lower arsenic exposure vs rice cereal at weaning; formula baseline context for arsenic exposure during transition to solid foods |
| 16 | [[sources/durovic2017-human-milk-infant-formula-microelements\|Durovic et al. 2017]]. *Determination of Microelements in Human Milk and Infant Formula Without Digestion by ICP-OES*, Acta Chimica Slovenica | 2017 | Peer-reviewed | ME/RS Zn, Fe, Cu occurrence in 28 mature human milk samples from lactating mothers and 15 powdered infant formula units representing five formula products... (n=43) |
| 17 | [[sources/unuvar2017-commercial-infant-formula-elements-turkey\|Unuvar et al. 2017]]. *Determination of Element Concentrations in Commercial Infant Formulas Using Atomic Absorption Spectrometry*, Atomic Spectroscopy | 2017 | Peer-reviewed | TR Al, Pb, Fe, Mg, Zn occurrence in Twenty commercial infant formula samples from five manufacturers, purchased from pharmacies and supermarkets in Malatya, Turkey and grouped... (n=20) |
| 18 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 19 | [[sources/odhiambo2015-infant-formula-nairobi-trace-elements\|Odhiambo et al. 2015]]. *Toxic trace elements in different brands of milk infant formulae in Nairobi market, Kenya*, African Journal of Food Science | 2015 | Peer-reviewed | KE Al, Cd, Pb, Ni occurrence in Seven imported cow-milk infant formula powder products for infants aged 0-6 months, purchased from stores in Nairobi County,... (n=7) |
| 20 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 21 | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup\|Jackson et al. 2012]]. *Arsenic, Organic Foods, and Brown Rice Syrup*, Environmental Health Perspectives | 2012 | Peer-reviewed | tAs and iAs in commercial organic infant formulas and toddler formulas by HPLC-ICP-MS; formulas with organic brown rice syrup had 10–20x higher As than non-OBRS formulas |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Infant formula powder inherits heavy metals from each of its component ingredients (the protein base, the carbohydrate source, the fat-blend, the vitamin-mineral premix, and any flavoring or processing aids) plus the processing-water used in formulation and the packaging system. The metal load is therefore a weighted sum across ingredients rather than a single-source profile.

The dominant heavy-metal contributors in cow-milk-based formula are: lead from mineral premix ingredients and from the cow-milk source where dairy supply chains involve elevated-Pb regions; cadmium from the protein and mineral ingredients; arsenic primarily from brown-rice-syrup carbohydrate sources in organic-labeled formulas (per [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Jackson et al. 2012]]); and aluminum from packaging contact and from the mineral premix. Soy-based formulas additionally accumulate aluminum and nickel from the soybean protein base, because soybean plants take up Al from acidic agricultural soils. The Cat 1 Step 0 lock recognizes this base-ingredient-class divergence by splitting non-soy and soy-based formula into separate certified rows.

## Ranges by source, region, and variety

The dominant axes of variance in infant formula powder heavy-metal load are the base ingredient class (cow-milk-based vs soy-based vs hydrolysate vs amino-acid-based), the source market (regulatory regime under which the formula is manufactured), and the historical generation of the product (post-2020 formulations differ from pre-2010 formulations for some analytes).

**Base ingredient class** is the largest single axis of variance. Cow-milk-based formula carries the lowest baseline aluminum among ingestion-routed infant nutrition because dairy is relatively low in Al. Soy-based formula carries substantially higher aluminum because soybean plants accumulate Al from acid agricultural soils; multiple surveys document soy-based formula Al at several-fold the cow-milk-based mean. Soy-based formula also carries elevated nickel and elevated cadmium relative to cow-milk-based equivalents. The Cat 1 Step 0 lock distinguishes powder-non-soy from powder-soy-based on this basis; see [[products/infant-formula-powder-non-soy]] and [[products/infant-formula-powder-soy-based]] for the certified-row distinctions. Hydrolysate and amino-acid formulas (used for cow-milk-protein-allergic infants) carry their own profile, generally intermediate between cow-milk and soy bases.

**Source-market variation** reflects regulatory and supply-chain differences. EU-market formula manufactured under [[regulations/eu-2023-915|EU Reg. 2023/915]] maximum levels carries documented Pb at or below the binding ML. US-market formula manufactured under FDA Closer-to-Zero-era guidance follows action-level discipline but is not subject to a binding US Pb maximum level for formula specifically. Imported formula from third markets (parallel imports, gray market) is the higher-risk source because regulatory oversight is jurisdictional rather than global.

**Historical generation** matters for the post-2020 vs pre-2010 comparison. Aluminum in formula has been a documented concern since [[sources/burrell2010-aluminium-in-infant-formulas|Burrell & Exley 2010]]; manufacturer responses since then have varied. The Cat 1 master rollup at [[products/infant-and-child-foods-master]] tracks the temporal-decline signal where corpus density permits.

## Processing effects

Infant formula powder is manufactured by spray-drying a reconstituted liquid base; the powder is the as-placed-on-market form for the powder rows of Cat 1. The processing effects on heavy-metal content are primarily concentration effects rather than removal effects.

**Spray-drying** removes water but does not remove heavy metals. The powder carries the metals from the liquid base concentrated approximately 7-fold (the conservative 1:7 reconstitution factor used in the wiki's basis-conversion calculations per [[methodology]]). A liquid formula at low ppb Pb as-fed converts to approximately 7× higher ppb Pb as-powder; the regulatory and certification math is performed in the row's native finished-product basis to avoid silent cross-basis comparison.

**Reconstitution** at the consumer point recovers the as-fed concentration assuming manufacturer-specified water-to-powder ratios. Where consumers reconstitute with different water volumes (concentrated or dilute), the as-fed concentration shifts proportionately. Infant feeding-water heavy-metal load adds to the as-fed concentration; this is the rationale for separate consideration of [[ingredients/water]] in infant feeding contexts where water quality varies.

**Fortification and additive contributions** are documented contamination pathways in infant formula. Vitamin-mineral premixes can carry trace metals from the source minerals; the premix supplier's specification controls the trace-metal contribution. Cocoa-flavored or chocolate-flavored toddler formulas inherit cocoa cadmium (see [[ingredients/cocoa]]); these products are out of HMTc Cat 1 ages-0-12-months scope but enter Cat 1 toddler-bridging scope where applicable.

**Packaging migration** is the standard Sn-canned-formula consideration for canned-powder products and the standard food-contact-substance consideration for plastic-lined and aluminum-foil-lined packaging. See [[mitigation/packaging-and-storage]] for the migration framework.

## Ingredient-derivative risk

The principal derivative of infant formula powder is the same powder reconstituted as feeding liquid; the as-fed liquid carries the same total metal load as the per-serving powder dosage. Toddler formulas and follow-on formulas (designed for ages 1-3 years) are formulated similarly and inherit the powder-formula metal profile.

Hospital-grade specialty formulas (amino-acid-based, hydrolysate, preterm, metabolic-disorder formulas) follow the same composition logic with specialized ingredients; metabolic-disorder formulas in particular can have distinct mineral premixes targeting specific nutrient needs and may carry different trace-metal profiles from standard infant formula.

Powdered formula sold loose in bulk (gray-market imports, repackaged formula) bypasses the regulatory testing of finished retail product and carries the highest contamination uncertainty. Single-serve formula sachets and ready-mixed formula bottles inherit the powder profile with packaging adjustments.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant brand-side intervention. Specification of ingredient-supplier QC (testing of each input — protein base, oils, mineral premix, carbohydrate source — for Pb and Cd at incoming) is the operational standard for HMTc-relevant infant-formula manufacturing. Documented avoidance of brown-rice-syrup as a carbohydrate source in organic formulas (the Jackson 2012 anchor finding) substantially reduces tAs and iAs in organic-labeled product.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the ingredient stage: low-Cd soy origins for soy-formula manufacturing, low-Cd dairy origins, mineral-source verification for the premix.

**Processing levers** ([[mitigation/processing]]) include water-source specification for plant feed-water (water-Pb testing at the bottling/spray-drying facility) and equipment-contact specification (food-grade processing-equipment, food-contact-substance compliance for all surfaces in contact with product).

**Formulation levers** ([[mitigation/formulation]]) include base-ingredient substitution where the metal profile of one ingredient drives finished-product exceedance (substituting non-brown-rice-syrup carbohydrate for organic formulas; substituting different mineral-premix sources where Al or Pb is elevated).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature in the infant-formula industry. Lot-release testing on finished product against [[regulations/eu-2023-915]] Pb ML (10 ppb prepared-for-feeding, 70 ppb powder) is standard. Speciation testing for arsenic (tAs vs iAs) is the operational requirement for compliance with [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal|FDA iAs frameworks]] on rice-containing formulas. See [[testing/icp-ms]] and [[testing/arsenic-speciation]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (BPA-NI epoxy or food-grade alternative for canned powder), aluminum-foil-lined sachet specification, and shelf-life storage controls.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for infant formula: Pb at 0.020 mg/kg (20 ppb) prepared for feeding, equivalent to approximately 140 ppb on powder basis at 1:7 reconstitution; Cd at 0.005 mg/kg (5 ppb) prepared for feeding; iAs at 0.020 mg/kg (20 ppb) prepared for feeding for infant formula and 0.040 mg/kg (40 ppb) for follow-on; Hg at 0.020 mg/kg (20 ppb) prepared for feeding for infant formula.
- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]] — FDA Closer to Zero iAs action level for infant rice cereal (100 ppb) applies analogously to rice-containing formula. FDA Closer to Zero Pb framework covers processed baby foods broadly.
- Codex Alimentarius CXS 72-1981 (infant formula) and CXS 156-1987 (follow-up formula) set composition standards and reference contaminant maximum levels.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL of 0.5 µg/day applies; converted to a serving-based screen on infant-formula consumption, this yields a very low per-serving threshold reflecting infant body weight and daily formula volume.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
