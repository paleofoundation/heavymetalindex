---
title: Chromium, Hexavalent
type: metal
symbol: Cr-VI
name: Chromium, hexavalent
species: [Cr6+, CrO4^2-, Cr2O7^2-]
audience: [regulator, educator, consumer, researcher]
microbiome_relevance: low
sources: 34
wiki_doi: null
updated: 2026-05-08
status: scaffold
n_sources: 2
---

# Chromium, Hexavalent

Hexavalent chromium (Cr-VI, Cr(VI), or Cr6+) is the high-oxidation-state form of chromium found in chromate (CrO4^2-) and dichromate (Cr2O7^2-) anions. The species is operationally distinct from trivalent chromium (Cr3+), which is far less toxic and was historically (and contestedly) treated as an essential trace nutrient. The Heavy Metal Index maintains the Cr-VI / Cr(III) split throughout, and the [Heavy Metal Tested & Certified](https://heavymetaltested.com) program tests hexavalent chromium as a separate analyte from total or trivalent chromium. Total chromium reported by a source is never substituted for Cr-VI on this wiki; sources that do not speciate are routed to [chromium](/metals/chromium) as total chromium and labeled as such. See also [chromium](/metals/chromium) for the parent element page.

## Toxicology

Cr-VI crosses cell membranes through sulfate and phosphate transporters because the chromate and dichromate oxyanions resemble those nutrients structurally. Once inside the cell, Cr-VI is reduced to Cr(III) through reactive Cr-V and Cr-IV intermediates, generating reactive oxygen species and DNA damage along the way. The toxicology chapter [[sources/ufelle2021-metals-chapter|Ufelle and Barchowsky 2021]] characterizes Cr-VI as the high-concern carcinogenic chromium species and identifies its principal toxic endpoints as corrosive injury at high acute exposure, allergic contact dermatitis on chronic skin contact, acute renal injury after high-dose ingestion, and lung cancer and genotoxicity after inhalation exposure. The same chapter explicitly names chromium among the metals that can provoke immune reactions, alongside mercury, gold, platinum, beryllium, and nickel. Children and elderly individuals are highlighted as more susceptible than most adults at any given exposure level.

The carcinogenicity of Cr-VI is best characterized for inhalation exposure (occupational settings, chromate production, electroplating, leather tanning) where lung cancer is the canonical endpoint. The carcinogenicity of Cr-VI by ingestion is documented in animal studies and is the basis of the California OEHHA public-health goal for Cr-VI in drinking water and the related California maximum contaminant level. Ingested Cr-VI is partially reduced to Cr(III) in saliva and gastric fluid before systemic absorption, which complicates dose-response extrapolation from inhalation studies; the surviving systemic Cr-VI fraction is the toxicologically relevant dose for ingestion-route effects.

## Typical exposure routes

Inhalation is the dominant occupational and environmental Cr-VI exposure route and is outside the dietary scope this wiki primarily tracks. The relevant Cr-VI exposure pathways for food and supply chain are drinking water used in food preparation, water and process water in the manufacturing chain, and contact with chromated stainless steel, chromated wood preservatives, or other chromate-bearing materials in equipment, packaging, or storage. Geogenic Cr-VI in groundwater is documented in regions with serpentinite or chromite-bearing geology and in some agricultural watersheds.

In finished food matrices, ambient Cr is overwhelmingly trivalent chromium, both because Cr-VI is oxidatively unstable in many food matrices and because the analytical methods that resolve speciation are uncommon in routine occurrence surveys. The result is that nearly all chromium occurrence data this wiki has cataloged report total chromium, not Cr-VI; the corpus contains a single peer-reviewed Cr-VI food-occurrence study at present. See the speciation gap section below.

## Food sources and occurrence

[[sources/soares2000-chromium-vi-powdered-milk-formulas|Soares et al. 2000]] is, at the time of this writing, the only food-occurrence source loaded on the wiki that reports Cr-VI explicitly rather than total chromium. The study used an ion-exchange separation followed by electrothermal atomization atomic absorption spectrometry to measure Cr-VI selectively in 20 commercial powdered milk infant formulas from the Portuguese market. In the seven newborn-formula samples, the reported Cr-VI mean was 24 ng/g and the source-scope range was below 10 to 75 ng/g, which is equivalent to mass-basis 24 ppb mean and below 10 to 75 ppb range; the lower end is censored at the method limit. Group means for follow-up and dietetic milk subgroups were 12 to 33 ng/g.

The Soares 2000 dataset is small, market-specific, and reports group means and ranges rather than sample-level values, so it provides direct Cr-VI occurrence context for the dairy-based powdered formula row but cannot, on its own, support an HMTc benchmark-pool percentile calculation for Cr-VI. The occurrence row is retained as direct dairy / non-soy powdered formula context per the Cr-VI species discipline. The result is also useful as a Cr-VI method reference: it documents an analytical pathway for routine selective Cr-VI quantification in a complex food matrix.

## Regulatory limits

No regulation page in the current wiki corpus carries a Cr-VI maximum level for a food matrix. The regulatory frameworks that do impose Cr-VI limits live in adjacent domains the wiki has not yet ingested: drinking-water standards (US EPA national primary drinking-water regulation for total chromium with a non-Cr-VI-specific MCL; California state-level Cr-VI MCL of 10 ug/L; European drinking-water directive total-chromium limits), occupational exposure limits (OSHA, NIOSH, ACGIH inhalation values), Proposition 65 listings (Cr-VI as a carcinogen and as a reproductive toxicant), and Codex Alimentarius general standards which do not separately specify Cr-VI for food. This page should be updated as the regulatory corpus expands. Any HMTc Cr-VI threshold derived for food matrices must therefore be transparently flagged as drawing from drinking-water-derived toxicology and a thin food-occurrence base, not from food-specific regulatory benchmarks.

## Testing methods

Selective Cr-VI quantification in food matrices is non-trivial because total digestion methods (microwave-assisted nitric acid digestion typical of [[testing/icp-ms|ICP-MS]] occurrence surveys) reduce Cr-VI to Cr(III) and report only total chromium. Speciation-preserving methods route the chromium-bearing analyte through an ion-exchange or chromatographic step before quantification. Soares 2000 used Chromabond NH2 anion-exchange retention of chromate followed by nitric-acid elution and electrothermal atomic absorption at 357.9 nm; modern speciation work more typically uses ion chromatography coupled to ICP-MS with isotope-dilution standards or post-column hydride generation. Drinking-water Cr-VI is most commonly measured by EPA Method 218.7 (ion chromatography with post-column reaction).

A dedicated chromium-speciation testing page in [testing](/testing) is a near-term addition; the current testing index does not yet carry a Cr-VI-specific entry.

## Microbiome effects

The current wiki corpus does not carry a microbiome-Cr-VI mechanism page. Cr-VI's documented intracellular reduction by gastric and intestinal contents implies a real interaction with the gut microbial environment, but the metals/microbiome literature within this corpus is silent on Cr-VI specifically. Cr-VI microbiome content should be drafted when peer-reviewed mechanism or taxon-level evidence is added; it would crosswalk to [WikiBiome](https://wikibiome.com) as a Cr-VI-specific microbial-axis page.

## Vulnerable populations

Infants and young children fed reconstituted powdered formula are the principal Cr-VI dietary vulnerable group identifiable from the loaded corpus. Cr-VI exposure assessment for this population would draw from formula Cr-VI concentration (Soares 2000 type data), water Cr-VI concentration (jurisdiction-specific drinking-water surveys not yet ingested), and reconstitution volume per serving. Body-weight-normalized Cr-VI intake is a more stringent test of exposure adequacy than absolute concentration because infant intake per kilogram body weight far exceeds adult intake per kilogram body weight. Children and elderly individuals are flagged in [[sources/ufelle2021-metals-chapter|Ufelle and Barchowsky 2021]] as more susceptible than most adults at any given exposure level.

## The speciation gap

This is the most important short-term finding for the Cr-VI page and for the program. The wiki currently has total-chromium occurrence data from at least seven peer-reviewed and government sources that explicitly disclaim Cr-VI measurement: [[sources/chuchu2013-aluminium-in-infant-formulas|Chuchu et al. 2013]], [[sources/fsa2016-infant-food-formula-metals-survey|UK FSA 2016]], [[sources/milani2023-trace-elements-soy-based-beverages|Milani et al. 2023]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri et al. 2019]], [[sources/chung2021-china-infant-formula-toxic-elements|Chung et al. 2021]], [[sources/meli2024-chemical-characterization-baby-food-italy|Meli et al. 2024]], and the broader survey ecosystem. Each of these sources reports total chromium with an explicit note that the chromium quantity is not speciated. None of them can be substituted for Cr-VI under HMTc analyte discipline.

The result is that the loaded corpus has many total-chromium values and exactly one Cr-VI dataset (Soares 2000, n=20, Portugal, 2000). For HMTc certification at scale, this is a structurally weak evidence base. Any Cr-VI threshold for food matrices set against this base should be tagged precautionary in the rationale, not regulatory-aligned. Closing the gap requires either commissioning Cr-VI speciation work for category-representative samples, or surfacing additional Cr-VI-specific peer-reviewed studies from the broader ingest corpus that have not yet been promoted to source pages.

## Open questions

How does Cr-VI in finished powdered formula relate to Cr-VI in the reconstitution water? Soares 2000 used doubly deionized water for reconstitution, isolating the dry-product Cr-VI signal. A real-feeding Cr-VI exposure depends on both the powder and the tap or bottled water used to prepare it. The two-component exposure model is missing from the loaded corpus.

What is the rate at which dietary Cr-VI is reduced to Cr(III) in saliva and gastric fluid before absorption, and how does that rate vary with infant gastric pH? Infant gastric pH is higher (less acidic) than adult gastric pH, which would reduce the Cr-VI to Cr(III) conversion efficiency before systemic absorption and elevate the systemic Cr-VI dose per unit of ingested Cr-VI. This is a quantitative gap with direct certification-threshold consequences and is not currently characterized in the corpus.

What Cr-VI speciation evidence exists outside the infant-formula matrix? Drinking water and produce grown on chromite-bearing or chromated-irrigation soils are the obvious candidate matrices. The current ingest is silent on these.

How do supply-chain Cr-VI exposures (chromated wood pallets, chromate-containing process equipment, chromated leather and gelatin) propagate into finished food? This is a manufacturing and packaging question, not a primary-agriculture question, and the loaded sources do not address it.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/jitareanu2025-heavy-metals-cosmetics-overview\|Jităreanu et al. 2025]]. *An Overview of Heavy Metals in Cosmetic Products and Their Toxicological Impact*, Applied Sciences 15: 12883 | 2025 | Review | EU/US/CA Pb, Cd, tHg, tAs, iAs, Cr, Cr-VI, Ni, Al, Fe, Cu, Zn, Co occurrence in Narrative review of heavy-metal contamination in cosmetics; literature 1990 - November 2025 retrieved via PubMed, Web of Science,... |
| 2 | [[sources/epa-iris-chromium-hexavalent-2024\|EPA 2024]]. *IRIS Toxicological Review of Hexavalent Chromium [Cr(VI)] (CASRN 18540-29-9)*, EPA/635/R-24/164Fa, Integrated Risk Information System, Center for Public Health and Environmental Assessment, Office of Research and Development, U.S. Environmental Protection Agency, Washington, DC | 2024 | Government report | US Cr-VI, Cr concentrations |
| 3 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 4 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 5 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics 12(5): 325 | 2024 | Peer-reviewed | CN Cr-VI, Cr occurrence in Seven commercially purchased food samples from a local supermarket in Nanjing, China — milk powder, rice flour, whole... (n=7) |
| 6 | [[sources/atsdr2023-soil-dermal-absorption-guidance\|ATSDR 2023]]. *Exposure Dose Guidance for Soil/Sediment Dermal Absorption (Version 3)*, ATSDR / U.S. Department of Health and Human Services - Public Health Service | 2023 | Government report | US As, Cd, Pb, Hg, MeHg, Ni, Cr, Cr-VI, Sb, Ba, Cu, Mn, Se, Ag, Tl, V, Zn, Be occurrence in Regulatory exposure-assessment guidance; no original sampling. Default ABSd and adherence-factor values from EPA RAGS Part E (2004); skin-surface... |
| 7 | [[sources/childhood2023-childhood-lead-exposure-linked\|Napier et al. 2023]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, Morbidity and Mortality Weekly Report | 2023 | Peer-reviewed | US Pb, Cr-VI occurrence in Children aged 1–3 years in North Carolina with confirmed blood lead levels ≥5 µg/dL linked to apple cinnamon... (n=22) |
| 8 | [[sources/concentration2023-concentration-essential-toxic-rare\|source) 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients | 2023 | Journal article | Cited reference from Nutrients |
| 9 | [[sources/deka2023-monitoring-strategies-heavy-metals-chapter\|Deka et al. 2023]]. *Monitoring Strategies for Heavy Metals in Foods and Beverages: Limitations for Human Health Risks*, IntechOpen (Heavy Metals – Recent Advances) | 2023 | Book chapter | IN Pb, Cd, tHg, Cr, Cr-VI, tAs, Ni, Al, Sb, Mn, Fe, Co, Ba, Be occurrence in Narrative review chapter; no primary samples. Surveys analytical and remediation literature for heavy metals across foods and beverages... |
| 10 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 11 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 12 | [[sources/ny-dec-tccp-2023-chem-pqls-draft\|New York State Department 2023]]. *Toxic Chemicals in Children's Products Program: Chemicals and Practical Quantitation Limits Under Consideration (Draft Update, Feb. 2023)*, NY DEC Toxic Chemicals in Children's Products Program — stakeholder draft for public comment | 2023 | Regulation | *[awaiting synthesis]* |
| 13 | [[sources/vasilachi2023-heavy-metals-cereal-crops\|Vasilachi et al. 2023]]. *Analysis of Heavy Metal Impacts on Cereal Crop Growth and Development in Contaminated Soils*, Agriculture | 2023 | Review | Pb, Cd, tAs, Cr, Cr-VI, Ni, Al, tHg, MeHg occurrence in Narrative literature review synthesising prior studies on cereal crops (wheat, rice, maize, barley, rye, oats, millet) grown in... |
| 14 | [[sources/sadiq-beauchemin-2021-multielemental-baby-rice-cereals\|Sadiq et al. 2021]]. *Multi-elemental risk assessment of various baby rice cereals: some cause for concern?*, Canadian Journal of Chemistry 99(8):742-750 | 2021 | Peer-reviewed | Cr-VI concentrations and health risk assessment in rice-based infant cereal (n=3) |
| 15 | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|Saraiva et al. 2021]]. *Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | FR/DK/EU Cr, Cr-VI occurrence in Selection of bread and breakfast cereal samples analysed at Anses (France) and Technical University of Denmark; exact n... |
| 16 | [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france\|Saraiva et al. 2021]]. *Chromium speciation analysis in raw and cooked milk and meat samples by species-specific isotope dilution and HPLC-ICP-MS*, Food Additives & Contaminants Part A 38(2):304-314 | 2021 | Peer-reviewed | Cr-VI concentrations in milk and dairy (n=30) by ICP-MS |
| 17 | [[sources/saraiva2021-cr-iii-cr-vi-ssid-method-validation-talanta\|Saraiva et al. 2021]]. *Development and validation of a single run method based on species specific isotope dilution and HPLC-ICP-MS for simultaneous species interconversion correction and speciation analysis of Cr(III)/Cr(VI) in meat and dairy products*, Talanta 222 (2021) 121538 | 2021 | Peer-reviewed | FR/DK Cr, Cr-VI occurrence in Three composite food matrices acquired from retail shops in Maisons-Alfort, France for method validation: baby milk (500 mL... (n=3) |
| 18 | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|Hernandez et al. 2019]]. *Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment*, Food Additives & Contaminants Part B: Surveillance | 2019 | Peer-reviewed | Cr-VI dietary exposure estimates in cheese |
| 19 | [[sources/nys-doh2019-metals-spices-guidance\|Bureau of Toxic Substance 2019]]. *Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices*, New York State Department of Health | 2019 | Government report | US iAs, Cd, Cr-VI, Pb occurrence in Methodology document; no direct food-sampling data; uses FCID 2005-10 consumption data for children (0 to <7 years) and... |
| 20 | [[sources/ren2018-crvi-pork-electron-beam\|Ren et al. 2018]]. *One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation*, Journal of Food Science | 2018 | Peer-reviewed | CN Cr-VI, Cr occurrence in Laboratory experiment using lean, fat, and marbled pork purchased from a market in Hefei, China; pork tissues (2... |
| 21 | [[sources/stasinos2014-heavy-metals-tubers-review\|Stasinos et al. 2014]]. *The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review*, Journal of Food Science | 2014 | Review | GR/LV/US Pb, Cd, tAs, Cr, Cr-VI, Ni, Al, tHg, MeHg, Cu, Zn, Mn, Co occurrence in Narrative review compiling open-field and greenhouse studies of heavy-metal bioaccumulation in three root and tuber vegetables (Daucus carota,... |
| 22 | [[sources/stefaniak2014-ni-be-cr-artificial-sweat\|Stefaniak et al. 2014]]. *Dissolution of the metal sensitizers Ni, Be, Cr in artificial sweat to improve estimates of dermal bioaccessibility*, Environmental Science: Processes & Impacts 16: 341-351 | 2014 | Peer-reviewed | US Ni, Be, Cr, Cr-VI occurrence in Triplicate samples of three metal-sensitizer powders (beryllium metal, nickel metal, chromium carbide Cr3C2) extracted in artificial sweat (pH... (n=9) |
| 23 | [[sources/cfs2012-baby-bottles-tableware\|Centre for Food Safety 2012]]. *Safety Issues of Baby Bottles and Children's Tableware (Risk Assessment Studies Report No. 47)*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region. Risk Assessment Studies Report No. 47, January 2012 | 2012 | Government report | *[awaiting synthesis]* |
| 24 | [[sources/johnson2012-cpsc-astm-f963-status\|Johnson et al. 2012]]. *Status Report: Review of Metals in the Toy Safety Standard, ASTM F 963*, U.S. Consumer Product Safety Commission Status Report, Directorate for Health Sciences, 14 March 2012; bundles Versar/SRC final contractor report Contract CPSC-D-06-0006 Task Order 008 dated 16 July 2010 | 2012 | Regulatory | *[awaiting synthesis]* |
| 25 | [[sources/mahmud2011-crvi-chicken-pakistan\|Mahmud et al. 2011]]. *Estimation of Chromium (VI) in various body parts of Local Chicken*, Journal of the Chemical Society of Pakistan | 2011 | Peer-reviewed | PK Cr-VI occurrence in Local chicken parts (meat: sternum, leg, arm, gizzard, neck, heart, liver; bones: chest cage, neck, leg, head, arm)... |
| 26 | [[sources/scher2010-toy-migration-limits-opinion\|EU Scientific Committee on 2010]]. *Evaluation of the Migration Limits for Chemical Elements in Toys (SCHER Opinion)*, European Commission DG Health & Consumers; SCHER Opinion adopted 1 July 2010 | 2010 | Government report | EU tAs, Cd, Cr-VI, Pb, tHg, Sn occurrence in Regulatory opinion evaluating EU Toys Safety Directive 2009/48/EC migration limits for 19 chemical elements |
| 27 | [[sources/oehha2000-appendix-f-dermal-uptake-soil\|California Office of Environmental 2000]]. *Appendix F - Dermal Uptake of Chemicals from Soil (Technical Support Document for Exposure Assessment and Stochastic Analysis)*, Cal/EPA OEHHA Air Toxics Hot Spots Program - Technical Support Document for Exposure Assessment and Stochastic Analysis | 2000 | Government report | US tAs, Cd, Pb, tHg, Ni, Cr-VI, Be occurrence in Regulatory guidance; per-chemical dermal absorption fraction (ABS) point estimates derived from review of in-vivo and in-vitro percutaneous-absorption studies... |
| 28 | [[sources/soares2000-chromium-vi-powdered-milk-formulas\|Soares et al. 2000]]. *Selective Determination of Chromium (VI) in Powdered Milk Infant Formulas by Electrothermal Atomization Atomic Absorption Spectrometry after Ion Exchange*, Journal of AOAC International 83(1):220-223 | 2000 | Peer-reviewed | Cr-VI concentrations in infant formula (n=20) |
<!-- END: hmi-source-legend -->

## Total-chromium sources that explicitly do not speciate Cr-VI

These are useful as total-chromium occurrence context only and should not be cited as Cr-VI evidence.

- [[sources/chuchu2013-aluminium-in-infant-formulas|Chuchu et al. 2013]]
- [[sources/fsa2016-infant-food-formula-metals-survey|UK FSA 2016]]
- [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri et al. 2019]]
- [[sources/chung2021-china-infant-formula-toxic-elements|Chung et al. 2021]]
- [[sources/milani2023-trace-elements-soy-based-beverages|Milani et al. 2023]]
- [[sources/meli2024-chemical-characterization-baby-food-italy|Meli et al. 2024]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [22b1fec](https://github.com/paleofoundation/heavymetalindex/commit/22b1fec) | 2026-05-31 | autonomy: self-heal recovery of prior tick's uncommitted work — 2026-05-31T15-22-11Z |
<!-- END: hmi-page-history -->
