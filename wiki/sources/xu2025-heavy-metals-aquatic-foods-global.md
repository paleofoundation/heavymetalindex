---
type: source
raw_handle: PCMF_article-1-copy-3
cite_key: xu2025-heavy-metals-aquatic-foods-global
title: "Heavy metal risks in aquatic foods"
authors: [Xu H, Newton R, Love DC, Zhao Y, Toppe J, Zhang W]
year: 2025
publication: "Environment International"
doi: 10.1016/j.envint.2025.109831
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
access_url: "https://doi.org/10.1016/j.envint.2025.109831"
raw_path: "raw/Papers Cube Manual Fetch/article (1) copy 3.pdf"
raw_sha256: 3c3fec2e6cf9f4afbbcae74aaec2d992f6d4911a987d167ed7cd6d31cfb439a9
metals: [tHg, Cd, Pb, tAs]
ingredients: ["[[ingredients/fish]]", "[[ingredients/freshwater-fish]]", "[[ingredients/molluscs]]", "[[ingredients/bivalve-molluscs]]", "[[ingredients/shellfish]]", "[[ingredients/shark]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/shellfish]]", "[[products/fish-marine-predatory]]"]
matrices: [fish, molluscs, crustaceans, cephalopods, aquatic-food, seafood]
jurisdictions: []
near_duplicates: []
sample_n: 138281
sample_population: "138,281 test records for aquatic-food products extracted from the WHO Food Safety Collaborative Platform (FOSCOLLAB), which integrates JECFA, JMPR, GEMS/Food, FAO/WHO CIFOCOss, and other UN/WHO Collaborating Centre databases. Records cover four aquatic-food aggregate categories (cephalopods, molluscs excluding cephalopods, crustaceans, fish) with the fish category further split into demersal marine fish, pelagic marine fish, other marine fish, and freshwater fish. Records from 39 reporting countries/regions, mapped to apparent-consumption data for 224 countries and regions (60.2 % of global aquatic-food consumption represented in measured data; remaining countries assigned global-average concentrations). Wet-weight basis; dried-fish records (n = 106, 0.076 % of dataset) excluded."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# Xu et al. 2025 — Global heavy-metal risk assessment of aquatic foods using 138,281 WHO FOSCOLLAB records (Environment International)

## Overview

Xu and colleagues conducted a global-scale risk and risk-benefit assessment of mercury, cadmium, lead, and arsenic in aquatic foods using 138,281 test records extracted from the WHO FOSCOLLAB platform. Species were grouped into four aggregate categories (cephalopods, molluscs excluding cephalopods, crustaceans, fish) with fish further split by habitat type. The authors computed Maximum Residue Level (MRL) compliance rates by species and country, ran Random Forest models to identify ecological-trait predictors of heavy-metal accumulation, and combined heavy-metal Estimated Daily Intake (EDI), Targeted Hazard Quotient (THQ) and Carcinogenic Risk (CR) with EPA + DHA benefits in a Monte-Carlo risk-benefit framework. Reported headline results: 97.6 % of aquatic-food samples meet safety standards globally; mercury is the primary non-cancer driver (mercury accounts for 97.2 % of the global THQ from aquatic foods); cadmium and arsenic are the predominant carcinogenic-risk contributors; mercury biomagnifies with trophic level whereas cadmium, lead and arsenic biodilute (benthic/low-trophic taxa accumulate more). At national level the authors identified 69 countries with mercury THQ above the non-cancer reference, 20 countries with cadmium CR above the cancer-risk reference, and 16 countries with arsenic CR above the cancer-risk reference; 152 countries remained within all assessed risk thresholds. In the risk-benefit framework, all aquatic species had BRQIQ and BRQDeaths < 1 globally, indicating EPA + DHA benefits outweighed heavy-metal risks under current consumption levels for every assessed species.

## Key numbers

### Dataset and basis

- 138,281 test records, four metals (Hg, Cd, Pb, As), 39 reporting countries/regions, mapped to apparent-consumption data for 224 countries (60.2 % of global aquatic-food consumption represented in measured data; remaining 39.8 % assigned global-average values).
- Wet-weight basis throughout; dried-fish records (n = 106; 0.076 % of dataset) excluded.
- Edible-portion conversion factors applied to apparent-consumption (FAO FishStatJ 2019 baseline): fish 1.15, crustaceans 2.80, cephalopods 1.44, molluscs 6.0.

### Compliance with safety standards (per Section 2.2)

- Overall qualified rate: 97.6 % (across all four metals).
- By aggregate category: molluscs 97.9 %, fish 97.7 %, crustaceans 97.0 %, cephalopods 94.8 %.
- By metal: Hg 96.2 %, Cd 97.2 %, Pb 99.6 %, As 99.5 %.
- Species below 90 % compliance — Hg: bream, flounder, mackerel, salmon, sharks; Cd: scallops, crabs, squid; As: bream, rays.
- Country-level cadmium compliance < 90 %: Spain, Hong Kong. Lead compliance above 90 % but well below the global average in aquatic products: China, Singapore. Southern European countries (Spain, Italy, Greece, Malta) cadmium compliance 91.7–96.1 %; Northern European countries (Denmark 99.3, Norway 98.6, Sweden 100, Finland 98.5) all above global average.
- Mauritius was the only country with heavy-metal compliance rates above 90 % across the board (paper's wording).

### Concentration distributions (Fig. 1 box plots, µg/kg wet-weight)

- Mercury (Fig. 1a): species-category boxplots show fish median ≈ low hundreds with long upper tail; shark median ≈ several hundred with whisker extending past 1,500 µg/kg; flounder, mackerel, salmon, tuna, bream all show medians elevated above the global low-level dashed line (≈ 500 µg/kg).
- Cadmium (Fig. 1b): scallop and oyster medians visibly above the medium-level dashed line (≈ 500 µg/kg); cephalopod and mollusc category-medians elevated relative to fish and crustacean category-medians; squid upper whisker approaches 2,400 µg/kg.
- Lead (Fig. 1c): mollusc and crustacean category-medians elevated relative to fish and cephalopod category-medians; clam, mussel, oyster medians most elevated; one species shown with whisker approaching 500 µg/kg.
- Arsenic (Fig. 1d): mollusc category-median visibly elevated; clam, mussel, oyster medians elevated above the medium-level dashed line (≈ 100 µg/kg); rays whisker extends past 150 µg/kg.

Numerical concentration medians and per-species sample sizes are reported in Supplementary Table 2 (not extracted into this page; only category- and species-level patterns visible in Fig. 1 main-text plots are summarised here).

### Random Forest feature importance (Fig. 2, % increase in MSE; sign of Pearson r in cells)

Trophic level is the single most important predictor for all four metals (Hg 32.8 %, Cd 28.3 %, Pb 48.5 %, As 35.6 %). Correlation signs vary: Hg correlates positively with trophic level (r = 0.58), whereas Cd (r = −0.39), Pb (r = −0.58) and As (r = −0.15) correlate negatively — confirming biomagnification of Hg and biodilution of Cd/Pb/As. Other top predictors: age at first maturity (Hg +0.49, 17.4 %), resilience (Hg −0.72, 31.9 %), fishing vulnerability score (Hg +0.67, 19.8 %), maximum length (Hg +0.56, 21.7 %). For the fish-only model (Supplementary Fig. 7) resilience was the dominant predictor, followed by body size and trophic level.

### Global aquatic-food contribution to intake (Section 2.4)

- Marine fish: 56.0 % of global mercury intake from aquatic foods (pelagic 27.2 %, demersal 12.2 %, other 16.7 %).
- Freshwater fish: 40.4 % of global mercury intake, 37.0 % of global cadmium intake, 42.6 % of global lead intake, 27.7 % of global arsenic intake.
- Crustaceans: 2.4 % of mercury, 29.1 % of cadmium, 26.6 % of lead, 20.5 % of arsenic.
- Molluscs: 0.7 % of mercury, (cadmium and arsenic listed as principal mollusc CR contributors in §2.4).
- Cephalopods: 0.5 % of mercury, (cephalopods also among principal CR contributors for cadmium per §2.4).
- Mercury contributes 97.2 % of the global Targeted Hazard Quotient (THQ) from aquatic foods.

### Annual global intakes from aquatic foods (Section 2.4)

- Mercury: 12.1 tonnes (95 % CI 11.7–12.5).
- Cadmium: 1.7 tonnes (95 % CI 1.6–1.8).
- Lead: 1.8 tonnes (95 % CI 1.6–2.0).
- Arsenic: 0.4 tonnes (95 % CI 0.2–0.9; inorganic fraction).

### National-level risk threshold exceedances (Section 2.5, Fig. 4a)

- Mercury EDI > reference: 29 countries.
- Mercury THQ > 1: 69 countries (non-cancer reference).
- Cadmium CR > 1 × 10⁻⁵: 20 countries.
- Arsenic CR > 1 × 10⁻⁵: 16 countries.
- All four metals within acceptable risk thresholds: 152 countries.
- Freshwater fish is the primary mercury source in 39 countries, the primary lead source in 73, and the primary arsenic source in 46. Marine fish is the primary aquatic-food source for 169 countries and the main aquatic-food mercury source for 129 countries, cadmium source for 138 countries, arsenic source for 128 countries.

### Risk-based and risk-benefit-based consumption limits (Section 2.6, 2.7, Fig. 6)

- Scallops: FIRᴱᴰᴵ 9.5 g/day; FIRᵀᴴᵠ 95 g/day; FIRᶜᴿ 2.5 g/day (cadmium-driven, binding); FIRᴵᵠ 2,100.3 g/day; FIRᴰᵉᵃᵗʰˢ 9,613.2 g/day.
- Sharks: FIRᴱᴰᴵ 26.8 g/day; FIRᵀᴴᵠ 14.1 g/day (mercury-driven, binding); FIRᶜᴿ 506.6 g/day; FIRᴵᵠ 107.9 g/day; FIRᴰᵉᵃᵗʰˢ 1,761,788.1 g/day. FIRᵀᴴᵠ and FIRᴰᵉᵃᵗʰˢ for sharks differ by approximately five orders of magnitude.
- Recommended maximum daily intake (trimmed mean basis): fish 122.1 g/person/day; crustaceans 37.3 g/person/day; molluscs 6.9 g/person/day; cephalopods 8.7 g/person/day; weighted average 108.7 g/person/day.
- Recommended maximum daily intake (upper 95 % CI of mean basis): fish 82.8 g/person/day; crustaceans 6.0 g/person/day; molluscs 4.7 g/person/day; cephalopods 5.9 g/person/day; weighted average 72.4 g/person/day.
- Risk-based classification (paper's terms, Fig. 6 categories by recommended daily maximum intake): 71.4 % of aquatic-food edible production classified low-risk ("≥ 40 g/day"); 17.6 % medium-risk ("20–40 g/day"); 11.0 % high-risk ("< 20 g/day").

### Risk-benefit (Section 2.6, Fig. 5)

- Total CVD deaths prevented per million through aquatic-food EPA + DHA intake at 250 mg/day: 39,816.
- Cancer mortality rate from cadmium/lead/arsenic intake via aquatic food consumption is, per the paper's phrasing, "only one-thousandth of the cardiovascular disease mortality rate that can be prevented by aquatic foods"; Macao has the highest national lifetime cancer-mortality rate from this exposure at 40 deaths per million people.
- In 153 countries, pregnant women could potentially increase their newborns' IQ by 5.8 points through aquatic-food EPA + DHA intake at average national consumption levels.
- Kiribati: highest modelled IQ decline from aquatic-food mercury (3.13 points) but still achieving net IQ gain of 2.67 points; one of 49 countries with > 1 IQ point lost from mercury exposure.

### Monte-Carlo policy scenarios (Section 2.8)

- Carcinogenic risk: Business-as-Usual (BAU) projects 27.6 % of the modelled population at high risk (18.3 % from cadmium and 13.0 % from arsenic). "Limit Worst" reduces this to 7.2 % (3.4 % Cd, 4.2 % As). "Only Best" reduces it to 5.9 % (1.9 % Cd, 4.2 % As).
- Non-cancer risk: BAU 15.0 % of population at high risk; "Limit Worst" 16.4 %; "Only Best" 12.3 % (the slight BAU→Limit-Worst increase reflects higher mercury in medium- and low-risk products).
- Exposure-threshold exceedance under BAU 16.1 %, Limit-Worst 9.3 %, Only-Best 6.2 %.

## Methods (brief)

Data sources: WHO FOSCOLLAB (Food Safety Collaborative Platform), which aggregates JECFA, JMPR, GEMS/Food, FAO/WHO CIFOCOss and WHO Collaborating Centre databases. 138,281 records from 39 reporting countries/regions. Records collected by GEMS/Food Contamination Monitoring and Assessment Programme under standardised protocols and quality-assurance procedures (WHO 2018a, 2020a). Apparent-consumption from FAO FishStatJ 2019 (chosen over the 2022 update to avoid COVID-era consumption-pattern distortions). UN DESA 2022 population data; World Bank 2022 GDP per capita; CIA 2022 country area and coastline length.

Species classification: ISSCAAP framework, cross-validated against FishBase and SeaLifeBase. Records grouped into four aggregate categories — cephalopods, molluscs (excluding cephalopods), crustaceans, fish — with fish further divided into four sub-categories: demersal marine, pelagic marine, other marine, freshwater. Species categories align with FAO FishStatJ groupings.

Basis: Wet-weight throughout; dried-fish records (n = 106) excluded for incompatibility. Apparent-consumption converted to edible-equivalent using species-group factors (fish 1.15, crustaceans 2.80, cephalopods 1.44, molluscs 6.0).

Speciation handling:

- **Mercury:** measured value in FOSCOLLAB is total mercury (tHg). For health-risk assessment the authors uniformly identify tHg as methylmercury (MeHg) for assessment purposes (consistent with FAO/WHO 2024 and prior risk-assessment methodology of Afonso 2015 and Djedjibegović 2020). The authors note Chen et al. (2025) proposed trophic-level-specific tHg→MeHg conversion factors (0.93 for high trophic levels [TL 4-5], 0.96 for medium [TL 3-4], 0.45 for low [TL 2-3]) but they did not adopt these because the conversion at TL 2-3 remains "relatively broad, potentially non-linear, and relies on limited data."
- **Arsenic:** measured value is total arsenic (tAs). The paper notes regulatory concern is primarily inorganic arsenic (iAs) but presents the analyses on total-arsenic measured values; iAs is referenced as the "form of regulatory concern" rather than the directly modelled exposure quantity. The Methods state "total arsenic measurement does not distinguish between the toxicities of various arsenic forms" and that "regulatory bodies and health organisations worldwide are primarily concerned with reducing exposure to inorganic arsenic." Risk computations are run on the measured tAs values without a tAs→iAs species-specific conversion (contrast with the Hg→MeHg simplification).
- **Cadmium, lead:** total-element, no speciation step.

Statistical analyses: Two-way ANOVA (SPSS v26 IBM 2023) for species × country effects. Kolmogorov–Smirnov tests for distribution comparison. Right-skewed data handled via 5 % two-sided trimmed mean (R Wilcox 2011) and bootstrap (1,000 iterations, R) with 97.5th-percentile bootstrap upper-bound for conservative central-tendency estimation. Random Forest regression: 500 trees, ntree=500, random seed 123, 70:30 train:test split, R RandomForest package. Hierarchical taxonomic imputation for missing trait/concentration values (Genus → Family → Order → Class → Phylum). Body-shape parameter added only for the fish-only model.

Compliance rate: `Number of qualified samples / Total samples × 100 %`. MRLs sourced from China NHFPC & NMPA (2017), the European Commission (2023), and JECFA where applicable; EU MRLs adopted for Hg, Cd, Pb; Chinese MRLs adopted for As due to no EU iAs MRL for aquatic products as of dataset compilation.

Health-risk indicators: EDI, THQ, Hazard Index (HI = THQHg + THQCd + THQPb + THQAs), and CR using EPA Cancer Slope Factors. Cancer reference value CR ≤ 1 × 10⁻⁵ (stricter than the CR ≤ 1 × 10⁻⁴ used in some prior studies). Average body weight 70 kg; 365 days/year exposure; 70-year lifetime. Risk-benefit framework: FAO/WHO 2011 dioxin/DL-PCB analogy adapted to heavy-metals; CVD deaths-prevented from EPA + DHA computed per million person-years at maximum benefit plateau 250 mg/day EPA + DHA (D = 39,816 deaths per million over 70 years from Hamilton et al. 2020); IQ-point gain from EPA + DHA = 0.04 IQ per mg DHA up to plateau; IQ loss from MeHg = 0.18 (central) or 0.7 (upper-bound) IQ per µg/g maternal hair Hg. BRQDeaths = Cancer deaths / CVD deaths prevented; BRQIQ = IQ points lost / IQ points gained; risk-based limit and risk-benefit-based limit derived analytically. Monte-Carlo simulation used to translate point estimates into population-level risk distributions under three policy scenarios (BAU, Limit Worst, Only Best).

**Known limitations the paper itself acknowledges:**

- FOSCOLLAB record coverage is uneven by country; 60.2 % of global aquatic-food consumption is represented by measured data, with the remaining 39.8 % assigned global-average concentrations.
- Coastline-poor countries and African nations are under-represented in measured data.
- The Hg → MeHg one-to-one assumption is conservative (no species-trophic conversion factor applied) and may overstate methylmercury risk in low-trophic-level molluscs.
- The arsenic risk is computed on measured tAs, not on a species-specific iAs fraction; the regulatory framework cited (China NHFPC for inorganic arsenic) and the modelled exposure (tAs) are therefore not strictly aligned.
- The IQ-loss coefficient could be 0.18 (central) or 0.7 (upper-bound); under the upper-bound coefficient the population fraction at high cancer risk under BAU decreases from 27.6 % to 4.3 %.
- Wet-weight only; dried-fish records (n = 106) excluded.
- Apparent-consumption data are national averages, not individual intake distributions; population-level estimates do not capture high-consumption subpopulations within countries beyond the Monte-Carlo simulation.
- "Heavy metals" is used as the operational term despite IUPAC's non-recognition of the term (per Duffus 2002); the authors flag this terminological caveat in §6.1.

## Implications

Occurrence data: A single global-scale source of standardised aquatic-food heavy-metal concentration and compliance data spanning 138,281 records, 39 reporting countries, four metals (tHg, Cd, Pb, tAs measured; MeHg and iAs derived for downstream risk calculations only), and four aggregate species categories with fish split into four habitat sub-categories. Direct occurrence data for the seafood / fish / shellfish / mollusc product-category pages and for the Hg, Cd, Pb, and As metal pages. Cephalopod and bivalve-mollusc cadmium evidence is particularly information-dense relative to the rest of the literature.

Exposure pathway: Quantifies the global aquatic-food heavy-metal exposure burden in absolute tonnes-per-year (Hg 12.1 t, Cd 1.7 t, Pb 1.8 t, As 0.4 t inorganic-equivalent) and proportions by aquatic-food source. Random Forest analysis identifies trophic level as the dominant predictor across all four metals, with mercury biomagnifying and cadmium / lead / arsenic biodiluting — i.e., low-trophic benthic/filter-feeding taxa (clams, oysters, mussels, scallops) are the higher-concentration sources for Cd, Pb, As, while high-trophic apex predators (sharks, tuna, swordfish) are the higher-concentration sources for Hg.

Risk-benefit framework: Provides a worked-example quantitative risk-benefit framework that combines heavy-metal cancer / non-cancer risk with EPA + DHA cardiovascular and IQ benefits using FAO/WHO 2011 methodology. The framework yields species-specific risk-based and risk-benefit-based daily-maximum-intake limits (Fig. 6 / Supplementary Tables 5–7). The framework, the input data, and the limit derivations are all explicit in the published methods and Supplementary Material.

Geographic specificity: Modelled at the country and region level for 224 countries; measured-data underlie 60.2 % of global aquatic-food consumption. Country-level mercury-THQ-exceedance and Cd/As cancer-risk-exceedance lists are explicit in Fig. 4a and the §2.5 text. Spain, Hong Kong, China, Singapore, and Mauritius are named in the paper's species-and-country compliance text; the wiki repeats these as documented findings of this single source.

Microbiome: Not addressed.

## Verification notes

- **2026-05-18 (audit subagent verdict REVISE; verified against PDF — 2 applied, 1 false positive noted):**
 - ❌ Check 1: Monte-Carlo cadmium BAU cancer-risk percentage. Subagent flagged the wiki's "15.0 % from cadmium" against the paper's reported 18.3 %. Re-verified p. 7: "the simulations predicted 27.6 % of the population to be at high risk under the BAU scenario, with 18.3 % for cadmium and 13.0 % for arsenic." Wiki had transposed the BAU non-cancer-risk total (15.0 %) into the Cd BAU CR cell. **Corrected to 18.3 %.**
 - ❌ Check 1: Conflated Macao cancer-mortality finding with the 5.8 IQ-gain finding. Subagent flagged the wiki sentence "Maximum modelled IQ gain... 5.8 IQ points across 153 countries; Macao the highest at 40 deaths per million people" as two separate findings run together. Re-verified p. 5: the 5.8-IQ-gain sentence and the Macao 40-deaths-per-million sentence are distinct paragraphs about distinct quantities (IQ gain from EPA + DHA vs cancer mortality from heavy-metal intake). **Corrected: split into two separate bullets and removed "Maximum modelled" qualifier (the paper says "could potentially increase their newborns' IQ by 5.8 points," not "maximum modelled").**
 - ❌ Check 2 (false positive): Subagent flagged `[[products/fish-marine-predatory]]` as not in the taxonomy snapshot and proposed it be removed pending Karen's Step 0 Lock. Re-verified: `wiki/products/fish-marine-predatory.md` exists in the live tree (size 6878 bytes, last touched 2026-05-17). The taxonomy-snapshot.md document under `docs/gpt-collaboration/` is a stale static reference (the products section does not list this slug) but the live wiki tree and the routing audit both accept the slug — `npm run evidence:source-routes` generated a `locked_hmtc_row` routing row for `fish-marine-predatory` with no errors. **No edit applied; the snapshot doc is the false-positive surface, not the slug. Pattern matches mukhi2022's corpus-established matrices vs snapshot.**
 - ⚠️ Check 1: "(paper's phrasing)" parenthetical kept as in original — subagent noted the paraphrase is faithful, no edit needed.
 - ⚠️ Check 2: matrices vocabulary (`crustaceans`, `cephalopods`, `aquatic-food`, `seafood`) not verifiable against the snapshot doc. These are corpus-established matrix bare-strings (verified via `grep -h '^matrices:' wiki/sources/*.md`); the matrices controlled vocabulary lives implicitly across the corpus, not in the snapshot. No edit; finding noted as a stale-snapshot artefact.
- **2026-05-18 (Claude session, merge-enhance from PDF re-read):** Prior page (updated 2026-05-14) carried multiple defects against the current schema and the v2.0 ingest workflow:
 - `raw_handle: papers-cube` was a non-standard placeholder; corrected to `PCMF_article-1-copy-3` per the manual-fetch handle convention.
 - `raw_sha256` was missing; computed and added (3c3fec2e6cf9f4afbbcae74aaec2d992f6d4911a987d167ed7cd6d31cfb439a9, shasum -a 256).
 - `access_url` was missing; added https://doi.org/10.1016/j.envint.2025.109831.
 - `license` was bare `CC BY`; corrected to `CC BY 4.0` per the publisher's footer text on the PDF first page.
 - `metals: [tHg, MeHg, Cd, Pb, tAs, iAs]` overstated the page's direct measurements. The paper explicitly states mercury is reported in FOSCOLLAB as total Hg and is "uniformly identified as MeHg for assessment purposes" via a simplifying assumption (not a species-specific conversion factor), and arsenic is collected and modelled as total As with iAs flagged only as the form of regulatory concern. Per / audit-prompt Check 3, the page should reflect what was directly measured. Corrected to `[tHg, Cd, Pb, tAs]`; the MeHg / iAs derivations are documented in Methods.
 - `ingredients: ["[[ingredients/shrimp]]"]` was an invented slug (no `wiki/ingredients/shrimp.md` exists). Removed. The paper's crustaceans category is not yet represented in the ingredient taxonomy and is captured via the matrices vocabulary (`crustaceans`) instead; a freq-1 stub will be picked up by the auto-stub scaffold per Part 10 in a separate pass.
 - Ingredients enriched with `[[ingredients/freshwater-fish]]`, `[[ingredients/bivalve-molluscs]]`, `[[ingredients/shark]]` — all existing slugs in the current taxonomy, all materially supported by the paper's species categories and named findings (freshwater fish is the largest single-source contributor to global Cd / Pb / As intake; bivalve molluscs drive cadmium and arsenic; shark is named as the highest-mercury species and the species with the highest BRQIQ among modelled species).
 - Products enriched with `[[products/fish-marine-predatory]]` — directly supported by the paper's named-species mercury findings (sharks, tuna, swordfish).
 - `## Implications` rewritten to remove HMTc forward-looking phrasing ("Key certifiable findings: molluscs and cephalopods are Cd-risk categories... directly applicable to HMT&C product-category assessments" → reframed as occurrence-data summary without certification recommendations). Per and audit-prompt Check 5, the source page reports what the paper found; it does not propose HMT&C thresholds or certification implications.
 - Consumer-audience advisory removed from `## Implications` ("app should flag shark, tuna, mackerel..." prescription removed; the paper's Fig. 6 risk classification is documented in `## Key numbers` as the paper's finding, not as wiki-side consumer advice).
 - Cross-source synthesis claims removed ("most comprehensive global aquatic food heavy metal dataset available", "Essential reference for the seafood module") — and audit-prompt Check 5, source pages report what this one paper found, not how it relates to the broader literature.
 - Legacy heading `## Wiki pages updated on ingest` replaced with `## Wiki pages this source may touch` per current Part 6 template; the routing layer (not this section) determines downstream fan-out.
 - Methods section expanded to include the full speciation handling, the basis (wet-weight), the trimmed-mean and bootstrap statistical handling, the Random Forest model specification, the body-weight and exposure-duration assumptions, and the seven paper-acknowledged limitations.
 - Sample population field expanded to enumerate the species categories, the geographic coverage (60.2 % consumption represented in measured data), the basis (wet-weight), and the dried-fish exclusion.
 - `near_duplicates: []` retained.

## Wiki pages this source may touch

- [[metals/mercury-total]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic-total]]
- [[ingredients/fish]]
- [[ingredients/freshwater-fish]]
- [[ingredients/molluscs]]
- [[ingredients/bivalve-molluscs]]
- [[ingredients/shellfish]]
- [[ingredients/shark]]
- [[products/seafood]]
- [[products/fresh-fish]]
- [[products/shellfish]]
- [[products/fish-marine-predatory]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [16b07f678](https://github.com/paleofoundation/heavymetalindex/commit/16b07f678) | 2026-05-18 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
