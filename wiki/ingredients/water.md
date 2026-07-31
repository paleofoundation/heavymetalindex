---
title: "Water"
type: ingredient
commodity: water
label: "Water"
aliases: [bottled water, still water, carbonated water]
category: water
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 9]
    p95_ppb: 21.6
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0.3]
    p95_ppb: 0.5
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 6
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: medium
    n_studies: 4
    basis: as-consumed-ug-per-L
    speciation_note: total-Hg; WHO drinking-water GV applies to inorganic Hg only, methylmercury not a drinking-water concern; mining/lead-zinc sources stratified out of central estimate
    last_reviewed: 2026-06-23
  Ni:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 70
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 176.3
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: 100
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 3.1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 50
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 30
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [flavored-waters]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-23
sources: 60
---

# Water

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: staple) | OK | 8/10 HMTc analytes, total n=46 | — |
| D2 Regional coverage | OK | 44 jurisdictions, top EU 23% | — |
| D3 Anthropogenic evidence | GAP | 31 drinking-water + 2 agricultural-soil + 2 irrigation-water + 2 soil; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 33 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, iAs POOLABLE, tHg POOLABLE, Ni POOLABLE, Al POOLABLE, Cr POOLABLE, Sn THIN, tAs POOLABLE, U THIN | Sn: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 1/10 populated cells declare a basis token | 9 populated cell(s) lack a basis token: Pb, Cd, iAs, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 20 claims checked, 20 supported; 3 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming water: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | below-tier | 1 rule link(s), 1 metal(s) covered | crosswalk thin: 9/10 populated analytes have no linked governing limit |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; pairing 0 paired, 10 single, 0 unpaired | Pb: POOLABLE; Cd: POOLABLE; iAs: POOLABLE; tHg: POOLABLE; Ni: POOLABLE; Al: POOLABLE; Cr: POOLABLE; Sn: THIN, needs 1 more study(ies); tAs: POOLABLE; U: THIN, needs 1 more study(ies); basis: 9 populated cell(s) lack a basis token: Pb, Cd, iAs, Ni, Al, Cr, Sn, tAs, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Drinking water does not accumulate heavy metals through the biological mechanisms that apply to plant or animal food matrices. Instead, metals in potable water arise from two distinct source pathways. The first is source-water geochemistry: groundwater in aquifers underlain by arsenic-bearing minerals (sedimentary basins, volcanic tuffs, sulfide ore deposits) can carry naturally elevated iAs concentrations, with some regions of South Asia, South America, and the western United States documented as having groundwater As exceeding 10 ppb ([[sources/epa-arsenic-drinking-water-mcl]]). Uranium in groundwater similarly reflects geological uranium mineralisation. The second pathway, and the dominant one for Pb specifically, is distribution-system infrastructure: lead service lines, lead solder used in older copper plumbing, and lead-bearing brass fittings can release Pb into tap water at points of use, particularly in building with pre-1986 plumbing when water is corrosive or sits stagnant. This is not a property of the water source but of the infrastructure through which treated water travels. The US Lead and Copper Rule targets this pathway through corrosion-control treatment requirements. Cadmium, mercury, and most organic metal species are not major concerns in treated municipal drinking water under normal operating conditions.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 0–9 | medium | [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|1]], [[sources/dorevitch2024-drinking-water-lead-spikes\|2]], [[sources/levin2024-us-drinking-water-contaminants\|3]] |
| Cd | n=6 | 0–0.3 | medium | [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|1]], [[sources/levin2024-us-drinking-water-contaminants\|2]], [[sources/decharat2023-lead-cadmium-drinking-water-thailand\|3]] |
| iAs | n=7 | 0–5 | medium | [[sources/epa-iris-inorganic-arsenic-2025\|1]], [[sources/zecchin2021-arsenic-groundwater-italy\|2]], [[sources/jecfa-82nd-arsenic\|3]] |
| tAs | n=8 | 0–10 | medium | [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|1]], [[sources/levin2024-us-drinking-water-contaminants\|2]], [[sources/zecchin2021-arsenic-groundwater-italy\|3]] |
| tHg | n=4 | 0–1 | medium | [[sources/who-gdwq-2022-fourth-edition\|1]], [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|2]], [[sources/abou-abbass2023-drinking-water-lebanon-metals\|3]] |
| Ni | n=4 | 0–20 | medium | [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|1]], [[sources/ufelle2021-metals-chapter\|2]], [[sources/efsa-nickel-contam-2020\|3]] |
| Al | n=4 | 0 | medium | [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|1]], [[sources/ufelle2021-metals-chapter\|2]], [[sources/atsdr-aluminum-toxprofile-2008\|3]] |
| Cr | n=3 | 0–50 | medium | [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|1]], [[sources/levin2024-us-drinking-water-contaminants\|2]], [[sources/ufelle2021-metals-chapter\|3]] |
| Sn | n=2 | 0 | low | [[sources/ufelle2021-metals-chapter\|1]], [[sources/codex-cxs-193-1995\|2]] |
| U | n=2 | 0–5 | low | [[sources/levin2024-us-drinking-water-contaminants\|1]], [[sources/ufelle2021-metals-chapter\|2]] |

## Routing

This node is linked from [[products/flavored-waters]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Drinking water arsenic concentrations vary by orders of magnitude depending on geological setting. In regions with naturally elevated groundwater As (parts of Bangladesh, West Bengal, Inner Mongolia, northern Chile, and southwestern United States including parts of Arizona and Nevada), well water can exceed 50 to several hundred ppb iAs ([[sources/efsa-arsenic-contam-2009]]). Treated municipal tap water in most high-income countries is maintained well below the 10 ppb regulatory limit by treatment processes including coagulation, filtration, and adsorption on iron-based media. Lead in tap water shows high within-building variance driven by plumbing age and corrosion-control status; homes with lead service lines can exceed 15 ppb (the US EPA action level) at first-draw samples, while the same source water delivered through modern plastic or copper piping may register below 1 ppb. Bottled water is typically derived from protected springs or purified municipal water and is subject to FDA quality standards comparable to EPA tap-water standards.

## Processing effects

Municipal water treatment is the operative processing step for drinking water. Conventional surface-water treatment (coagulation, flocculation, sedimentation, filtration, chlorination) effectively removes particulate metals and co-precipitates dissolved metals such as As with iron flocs. Advanced treatment technologies including reverse osmosis, activated alumina, and ion exchange reduce dissolved iAs below 2 to 5 ppb when applied. Coagulation-enhanced filtration using ferric salts is the primary technology for achieving the 10 ppb As MCL at scale. These treatments do not address Pb added downstream at the distribution system or building plumbing level; point-of-use filtration (NSF-certified pitcher or tap filters using activated alumina or reverse osmosis) is the most effective intervention for Pb at the household level.

## Ingredient-derivative risk

Drinking water is used as an ingredient or reconstitution medium in a wide range of processed foods: soups, sauces, beverages, infant formula, baby food purees, and bakery products. When water with elevated Pb is used to reconstitute powdered infant formula, the Pb contributed by the water adds to the Pb already present in the formula powder, with the combined level determining infant exposure. This reconstitution pathway is a recognized concern in areas with lead service lines. The infant formula pages ([[products/infant-formula-non-soy-powder]] and related) address the reconstitution calculation. Bottled water and filtered tap water used in food manufacturing typically contribute negligible metal loads to finished products.

## Mitigation options

### Sourcing levers

For community water systems, source-water selection (surface water with low As versus groundwater from As-bearing aquifers) and blending across sources to dilute As concentrations are the primary upstream levers. Bottled-water processors selecting spring sources must characterise source-water As and other metals as part of source approval.

### Agronomic levers

Not applicable to drinking water. Groundwater-fed agriculture in high-As regions constitutes a separate pathway (irrigation water As transferring to irrigated crops) addressed under specific ingredient pages.

### Processing levers

Point-of-use activated alumina, anion exchange, or reverse osmosis filtration is the most effective household-level intervention for iAs in drinking water. At the treatment plant level, coagulation with ferric salts followed by filtration is the standard method for achieving As reduction below 10 ppb. For Pb specifically, corrosion-control treatment (phosphate dosing or pH and alkalinity adjustment) is the primary distribution-system intervention to reduce Pb release from lead service lines and solder.

### Formulation levers

Food manufacturers using municipal tap water in high-As geological regions should characterise source-water As and consider point-of-entry or point-of-use treatment. For infant formula reconstitution, the recommendation to use low-As, low-Pb water (bottled water certified to meet NSF standard 53 for Pb) is the effective formulation lever at the consumer level.

### Testing and QC levers

Food manufacturers using water as an ingredient should test incoming municipal water for Pb, As, and Cd on a periodic basis, with frequency calibrated to the regulatory status and geological context of the supply. First-draw sampling (after stagnation) provides the worst-case Pb estimate in building plumbing; running-water samples provide the distribution-system estimate. EPA Method 200.8 (ICP-MS) is the reference method for Pb and As in drinking water.

### Packaging and storage levers

Lead service line replacement is the most impactful infrastructure-level intervention for Pb in tap water. Where replacement is not yet complete, phosphate-based corrosion inhibitors added at the water treatment plant reduce Pb release from existing lead service lines and solder. The US EPA Lead and Copper Rule Revisions (2021) mandate accelerated lead service line replacement on a regulated timeline.

## Regulatory limits that apply

In the United States, the EPA Maximum Contaminant Level for arsenic in public drinking water is 10 µg/L (10 ppb) as iAs, established by the 2001 Arsenic Rule ([[sources/epa-arsenic-drinking-water-mcl]]). For lead, the EPA action level is 15 µg/L (15 ppb); any public water system with more than 10 percent of samples exceeding this level must take remedial action under the Lead and Copper Rule. FDA applies equivalent standards to bottled water sold in interstate commerce. The EU Drinking Water Directive (2020/2184) sets a Pb limit of 5 µg/L (5 ppb) for tap water, a standard tighter than the US action level, and an As limit of 10 µg/L. The EU Cd limit in drinking water is 5 µg/L. [[regulations/codex-cadmium-mls]] covers maximum levels for Cd in natural mineral waters.

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
2. U.S. Environmental Protection Agency, Office of Water (2001). *EPA Drinking Water Arsenic MCL Rule (10 ppb)*. U.S. Environmental Protection Agency. [www.epa.gov](https://www.epa.gov/dwreginfo/drinking-water-arsenic-rule-history). Government report, A-tier. [[sources/epa-arsenic-drinking-water-mcl|Source record]]
3. EFSA Panel on Contaminants in the Food Chain (CONTAM) (2009). *Scientific Opinion on Arsenic in Food*. EFSA Journal 2009;7(10):1351. [https://doi.org/10.2903/j.efsa.2009.1351](https://doi.org/10.2903/j.efsa.2009.1351). Government report, A-tier. [[sources/efsa-arsenic-contam-2009|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/anses2026-tds3-metals-france\|ANSES 2026]]. *Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the results of the Third French Total Diet Study (TDS3) - Acrylamide, aluminium, silver, cadmium, mercury and lead*, ANSES Opinion, Request No 2019-SA-0010 | 2026 | Government report | FR Al, Ag, Cd, Pb, tHg, iHg, MeHg occurrence in French TDS3 foods selected from 276 foods across 44 groups, with 718 samples collected in Loiret, Puy-de-Dome, and... (n=718) |
| 2 | [[sources/brima2026-drinking-water-elements\|Brima et al. 2026]]. *Analysis of essential and toxic elements in tap and bottled water from the UK and its comparison with literature data for drinking water from African countries: implications for human health*, African Journal of Agriculture and Food Science | 2026 | Peer-reviewed | GB Cd, Pb, tAs, tHg occurrence in 45 bottled drinking water and 48 tap drinking water samples from Leicester, UK (n=93) |
| 3 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | international/EU/US Pb, Cd, tAs, tHg, MeHg, Ni occurrence in Scoping review of 121 peer-reviewed studies (Scopus, Web of Science, ScienceDirect, SpringerLink, Wiley Online Library, Google Scholar; published... |
| 4 | [[sources/olowoyo2026-heavy-metals-drinking-water-global-review\|Olowoyo et al. 2026]]. *Heavy Metals Burden in Drinking Water: Global Patterns, Sources, and Public Health Implications*, Water 18(8): 886 | 2026 | Review | global Pb, Cd, tAs, tHg, Ni, Cr, Al occurrence in Systematic review of peer-reviewed studies published 2015–2024 on heavy metals in four water source types globally |
| 5 | [[sources/sule2026-gombe-drinking-water-metals\|Sule et al. 2026]]. *Assessment of Carcinogenic and Non-carcinogenic Health Risks of Metals in the Drinking Water of Gombe Local Government Area, Nigeria*, Bima Journal of Science and Technology | 2026 | Peer-reviewed | NG Pb, Cd, Cr, Mn, Fe, Cu occurrence in Drinking-water samples from Gombe LGA, Nigeria: tap water (n=10), wells (n=5), water vendors (n=11), harvested rainwater (n=7), sachet-water... (n=87) |
| 6 | [[sources/epa-iris-inorganic-arsenic-2025\|EPA 2025]]. *IRIS Toxicological Review of Inorganic Arsenic*, EPA/635/R-25/005Fa, U.S. Environmental Protection Agency, Integrated Risk Information System | 2025 | Government report | iAs dose-response reference values and updated cancer slope factors, with drinking water as the primary quantitative exposure route anchoring the 2025 IRIS reassessment |
| 7 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 8 | [[sources/ranjbar2025-mineral-water-metals\|Ranjbar et al. 2025]]. *Machine learning models for water safety enhancement*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cr occurrence in mineral water consumable at Arak City, Iran (n=not reported in abstract) |
| 9 | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|Uthayarajan et al. 2025]]. *Quality and sources of food and water consumed by people with chronic kidney disease of unknown etiology in Sri Lanka: a systematic review*, Journal of Nephrology | 2025 | Peer-reviewed | LK Cd, Pb, tAs, Al, Cr, Ni, Sn, tHg, Mn, Zn, Cu, Fe, Co, V, Se occurrence in 57 studies (of 1,067 identified) reporting food and water quality in Sri Lanka CKDu-endemic areas, primarily North Central... (n=57) |
| 10 | [[sources/dorevitch2024-drinking-water-lead-spikes\|Dorevitch et al. 2024]]. *Lead in drinking water from particulate spike simulation: implications for exposure assessment*, Journal of Exposure Science and Environmental Epidemiology | 2024 | Peer-reviewed | US Pb occurrence in Simulated drinking water samples with controlled particulate lead spikes; US residential plumbing study |
| 11 | [[sources/epa-iris-chromium-hexavalent-2024\|EPA 2024]]. *IRIS Toxicological Review of Hexavalent Chromium [Cr(VI)] (CASRN 18540-29-9)*, EPA/635/R-24/164Fa, Integrated Risk Information System, Center for Public Health and Environmental Assessment, Office of Research and Development, U.S. Environmental Protection Agency, Washington, DC | 2024 | Government report | US Cr-VI, Cr concentrations |
| 12 | [[sources/levin2024-us-drinking-water-contaminants\|Levin et al. 2024]]. *Drinking water quality in the United States: a review of contaminants, regulations, and health implications*, Journal of Exposure Science and Environmental Epidemiology | 2024 | Peer-reviewed | US Pb, tAs, U, Cd, tHg, Cr occurrence in Review of US public water system monitoring data and epidemiological studies |
| 13 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 14 | [[sources/swrcb-hexavalent-chromium-mcl-2024\|California State Water Resources Control Board 2024]]. *California Hexavalent Chromium Drinking-Water Maximum Contaminant Level Regulation (SWRCB-DDW-21-003)*, California State Water Resources Control Board | 2024 | Regulation | US-CA Cr-VI occurrence in Regulatory instrument. California Code of Regulations Title 22 maximum contaminant level for hexavalent chromium, applicable to all community... |
| 15 | [[sources/zhuzhassarova2024-fish-seafood-central-asia-review\|Zhuzhassarova et al. 2024]]. *Fish and Seafood Safety: Human Exposure to Toxic Metals from the Aquatic Environment and Fish in Central Asia*, International Journal of Molecular Sciences | 2024 | Peer-reviewed | KZ/KG/TJ tAs, tHg, Cd, Pb occurrence in Narrative review of As, Hg, Cd, Pb in water bodies, fish, and human biomonitoring across five Central Asian... |
| 16 | [[sources/abou-abbass2023-drinking-water-lebanon-metals\|Fatima et al. 2023]]. *Assessment of Chemical and Microbiological Drinking Water of Beirut and Mount Lebanon*, Journal of Environment and Earth Science | 2023 | Peer-reviewed | LB tAs, tHg occurrence in Drinking-water samples from Beirut and Mount Lebanon (n=79) |
| 17 | [[sources/concentration2023-concentration-essential-toxic-rare\|source) 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients | 2023 | Journal article | Cited reference from Nutrients |
| 18 | [[sources/decharat2023-lead-cadmium-drinking-water-thailand\|Decharat et al. 2023]]. *Quality and risk assessment of lead and cadmium in drinking water for child development centres use in Phatthalung province, Thailand* | 2023 | Peer-reviewed | TH Pb, Cd occurrence in Drinking water samples (bottled, tap, filtered, raw) from child development centres, Phatthalung province, southern Thailand (n=210) |
| 19 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 20 | [[sources/sawadogo2023-burkina-faso-packaged-water-metals\|Sawadogo et al. 2023]]. *Transfer of bisphenol A and trace metals from plastic packaging to mineral water in Ouagadougou, Burkina Faso*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | BF Cd, Fe occurrence in Ten brands of packaged sachet water commercialized in Ouagadougou, Burkina Faso, with corresponding borehole-source water and storage-condition follow-up. (n=10) |
| 21 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 22 | [[sources/ungureanu2022-bottled-water-toxic-elements\|Ungureanu et al. 2022]]. *Occurrence of Potentially Toxic Elements in Bottled Drinking Water-Carcinogenic and Non-Carcinogenic Risks Assessment in Adults via Ingestion*, Foods | 2022 | Peer-reviewed | RO/EU Ba, Co, Cu, Zn, Mn, Ni, Li, Fe, Pb, Cd, Cr, Sb occurrence in Bottled drinking water samples available on the Romanian market, purchased between 2019 and 2021 (n=50) |
| 23 | [[sources/who-gdwq-2022-fourth-edition\|WHO 2022]]. *Guidelines for drinking-water quality: fourth edition incorporating the first and second addenda*, Geneva: World Health Organization | 2022 | Government report | WHO/Global Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U, Sb occurrence in Drinking-water consumers globally; guideline values derived for a 60 kg adult consuming 2 L/day, with bottle-fed infants flagged... |
| 24 | [[sources/kithure2021-bottled-water-nairobi\|Kithure et al. 2021]]. *How Safe is the Water Consumed in Different Parts of Nairobi, Kenya?*, International Journal of Research and Innovation in Applied Science (IJRIAS) | 2021 | Peer-reviewed | KE Pb, Cd, Sb, Cu, Cr, Mn, Zn occurrence in Seven commercial PET-bottled drinking water brands purchased from supermarkets in Nairobi County, Kenya; sampling carried out 2019–2020; brands... (n=7) |
| 25 | [[sources/ufelle2021-metals-chapter\|Ufelle et al. 2021]]. *Toxic Effects of Metals (Chapter 23), in Casarett & Doull's Essentials of Toxicology, Fourth Edition*, Casarett & Doull's Essentials of Toxicology, Fourth Edition. McGraw Hill Education | 2021 | Textbook chapter | Comprehensive multi-metal toxicology reference covering routes of exposure including water for As, Cd, Pb, Hg, Al, Ni, and other HMI-tracked metals |
| 26 | [[sources/zecchin2021-arsenic-groundwater-italy\|Zecchin et al. 2021]]. *Arsenic-Oxidizing Bacteria in Arsenic-Contaminated Groundwaters of Po Plain (Northern Italy): Community Diversity and Potential Role in As Mobilization*, Frontiers in Microbiology | 2021 | Peer-reviewed | IT/EU tAs, iAs occurrence in Six public supply wells in Po Plain, Lombardia, Northern Italy (provinces of Varese, Lodi, Cremona, Brescia, Mantova) (n=6) |
| 27 | [[sources/decharat2020-school-drinking-water-pb-cd\|Decharat et al. 2020]]. *Risk assessment of lead and cadmium in drinking water for school use in Nakhon Si Thammarat Province, Thailand*, Environmental Analysis Health and Toxicology | 2020 | Peer-reviewed | TH Pb, Cd occurrence in drinking water used by 44 primary schools in Nakhon Si Thammarat Province, Thailand (n=146) |
| 28 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | Ni TDI of 13 µg/kg b.w./day and European Ni occurrence data across food and drinking water, with drinking water identified as a contributing Ni exposure pathway |
| 29 | [[sources/el-hassanin2020-egypt-maize-pb-cd\|El-Hassanin et al. 2020]]. *Risk assessment of human exposure to lead and cadmium in maize grains cultivated in soils irrigated either with low-quality water or freshwater*, Toxicology Reports 7:10-15 | 2020 | Peer-reviewed | EG Pb, Cd occurrence in Soil (0–30 cm), irrigation water, and maize grain composites collected in August 2017 from nine cultivated sites across... (n=27) |
| 30 | [[sources/hc2020-cadmium-drinking-water\|Health Canada, Water and 2020]]. *Guidelines for Canadian Drinking Water Quality: Guideline Technical Document — Cadmium*, Health Canada, Ottawa, Ontario (Catalogue No. H144-13/17-2020E-PDF; ISBN 978-0-660-34296-2) | 2020 | Regulation | CA Cd occurrence in Canadian provincial and territorial monitoring datasets, 2000–2019, supplemented by national Environment and Climate Change Canada raw-water dataset (n=18,998) |
| 31 | [[sources/obasi2020-abakaliki-drinking-water-metals\|Obasi et al. 2020]]. *Potential health risk and levels of heavy metals in water resources of lead-zinc mining communities of Abakaliki, southeast Nigeria*, Applied Water Science | 2020 | Peer-reviewed | NG Pb, Cd, tAs, tHg, Ni, Cr, Cu, Mn occurrence in Water resources used by lead-zinc mining communities in Abakaliki, southeast Nigeria (n=106) |
| 32 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 33 | [[sources/hc2019-lead-drinking-water\|Health Canada, Water and 2019]]. *Guidelines for Canadian Drinking Water Quality: Guideline Technical Document — Lead*, Health Canada, Ottawa, Ontario (Catalogue No. H144-13/11-2018E-PDF; ISBN 978-0-660-27191-0; Pub. 180137) | 2019 | Regulation | CA Pb occurrence in Canadian provincial/territorial and municipal monitoring datasets and corrosion studies, predominantly 2005–2014, supplemented by the National Survey of Disinfection... |
| 34 | [[sources/jabar2019-heavy-elements-water-diyala-iraq\|Abdul et al. 2019]]. *Determination of Heavy Elements (Pb, Cd, Cu and Cr) Concentration in Some Water Sources*, Chemistry & Chemical Technology | 2019 | Peer-reviewed | IQ Pb, Cd, Cu, Cr occurrence in Water samples from Diyala Governorate, Iraq, collected between August 2016 and February 2017. Sites include the Diyala River... |
| 35 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | IR Pb, tHg occurrence in Ten species of green leafy vegetables and herbs (Allium ampeloprasum L. [leek], A. wakegi L. [Welsh/Japanese bunching onion],... (n=160) |
| 36 | [[sources/oehha-nickel-dart-evidence-2018\|California Office of Environmental 2018]]. *Evidence on the Developmental and Reproductive Toxicity of Nickel and Nickel Compounds (Proposition 65 hazard-identification document)*, OEHHA, California Environmental Protection Agency; hazard-identification document prepared for the Developmental and Reproductive Toxicant Identification Committee (DARTIC), July 2018. | 2018 | Government report | US-CA Ni occurrence in Systematic review. Human evidence: cohort and case–control studies of ambient-air nickel-particle exposure and birth outcomes / autism spectrum... |
| 37 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 38 | [[sources/jecfa-82nd-arsenic\|JECFA 2017]]. *Safety Evaluation of Certain Food Additives (Arsenic), 82nd Meeting of JECFA*, WHO Food Additives Series 73 | 2017 | Government report | JECFA arsenic monograph confirming the BMDL01 framework for iAs risk characterization, with drinking water the canonical human exposure route for dose-response anchoring |
| 39 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 40 | [[sources/unknown2016-risk-arsenic-rice-cereal\|Shibata et al. 2016]]. *Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S.*, International Journal of Environmental Research and Public Health | 2016 | Peer reviewed journal | Cited reference from International Journal of Environmental Research and Public Health |
| 41 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples from 15 European countries (2003–2012) (n=18885) |
| 42 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | EU Cr, Cr-VI occurrence in Analytical results submitted to EFSA on chromium in food (27,074) and drinking water (52,735) reported by EU Member... (n=79809) |
| 43 | [[sources/efsa2014-dietary-exposure-iAs\|EFSA 2014]]. *Dietary exposure to inorganic arsenic in the European population*, EFSA Journal 2014;12(3):3597 | 2014 | Government report | EU iAs, tAs concentrations (n=103773) |
| 44 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
| 45 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 46 | [[sources/iarc2012-nickel-compounds-monograph-100c\|IARC 2012]]. *Nickel and Nickel Compounds (IARC Monographs Volume 100C — A Review of Human Carcinogens: Arsenic, Metals, Fibres, and Dusts)*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Vol. 100C, pp. 169–218. International Agency for Research on Cancer, Lyon. | 2012 | Government report | INTL Ni occurrence in Human carcinogenicity evidence drawn from occupational cohort and nested case–control studies of nickel-producing and nickel-using workers (smelting, refining,... |
| 47 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 48 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | European iAs occurrence across 100,000+ data points with water as a significant exposure pathway; European dietary iAs ranges 0.13–0.56 µg/kg b.w./day with children exposed at 2–3× adult per-kg rates |
| 49 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | ATSDR MRL of 1 mg Al/kg/day for chronic oral Al exposure, with water identified as a background Al exposure route alongside infant formula and food |
| 50 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal 2008;754:1-34 | 2008 | Government report | EFSA TWI of 1 mg Al/kg b.w./week, noting water as a contributing Al exposure pathway in addition to food additives and infant formula |
| 51 | [[sources/hc2008-review-dietary-exposure-aluminum\|Health Canada Bureau of 2008]]. *ARCHIVED — Health Canada Review of Dietary Exposure to Aluminum*, Health Canada, Food Directorate, Bureau of Chemical Safety | 2008 | Regulation | CA/GLOBAL Al concentrations |
| 52 | [[sources/atsdr-arsenic-toxprofile-2007\|ATSDR 2007]]. *Toxicological Profile for Arsenic*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2007 | Government report | Comprehensive iAs toxicology synthesis with MRL derivation, using drinking water as the primary human exposure route for dose-response anchoring |
| 53 | [[sources/jecfa-67th-aluminium-methylmercury-2007\|JECFA 2007]]. *Evaluation of certain food additives and contaminants — Sixty-seventh report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 940 (Sixty-seventh meeting of JECFA, Rome, 20-29 June 2006) | 2007 | Government report | international Al, MeHg, tHg occurrence in Aluminium: total dietary exposure derived from market-basket and duplicate-diet surveys in adults (France, Germany, UK, USA, China), Total... |
| 54 | [[sources/healthcanada2006-arsenic-drinking-water-guideline\|Canada 2006]]. *Guidelines for Canadian Drinking Water Quality — Guideline Technical Document: Arsenic*, Health Canada — Federal-Provincial-Territorial Committee on Drinking Water | 2006 | Regulatory guideline | CA iAs, tAs occurrence in Federal-Provincial-Territorial review; Canadian provincial monitoring data 1976–2002 from Prince Edward Island, Quebec, Ontario, Saskatchewan, Alberta, Nova Scotia, Newfoundland,... |
| 55 | [[sources/ec2004-scoop-heavy-metals-dietary-exposure\|EC 2004]]. *Assessment of the dietary exposure to arsenic, cadmium, lead and mercury of the population of the EU Member States*, Reports on tasks for scientific cooperation, SCOOP Task 3.2.11 | 2004 | Government report | EU/BE/DK tAs, Cd, Pb, tHg occurrence in Occurrence, consumption, and intake submissions for arsenic, cadmium, lead, and mercury from EU Member States and Norway under... |
| 56 | [[sources/cot2003-arsenic-food-tds\|Committee on Toxicity of 2003]]. *Statement on arsenic in food: results of the 1999 Total Diet Study*, Committee on Toxicity statement | 2003 | Government report | GB tAs, iAs occurrence in 1999 UK Total Diet Study arsenic analysis: 119 food categories collected from 24 towns and combined into 20... (n=480) |
| 57 | [[sources/epa-arsenic-drinking-water-mcl\|EPA 2001]]. *EPA Drinking Water Arsenic MCL Rule (10 ppb)*, U.S. Environmental Protection Agency | 2001 | Government report | The US EPA MCL of 10 ppb for iAs in drinking water, the operational regulatory limit directly applicable to municipal and bottled water |
| 58 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd, Pb, Hg, and iAs across food and feed matrices, including limits applicable to natural mineral waters |
| 59 | [[sources/iarc1990-chromium-nickel-welding\|IARC 1990]]. *Chromium, Nickel and Welding*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Volume 49 | 1990 | Government report | INTL Cr, Cr-VI, Ni occurrence in International scientific working group; review of global occupational, environmental, dietary, and experimental data for Cr, Ni, and welding... |
| 60 | [[sources/epa-iris-cadmium-1989\|EPA 1989]]. *Cadmium (CASRN 7440-43-9) — IRIS Chemical Assessment Summary*, U.S. Environmental Protection Agency, Integrated Risk Information System | 1989 | Government report | EPA IRIS RfD for Cd from drinking water (5×10⁻⁴ mg/kg/day), a route-specific value reflecting higher Cd absorption from water than from food |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | Contamination-profile values revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
