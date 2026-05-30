---
title: Bivalve Molluscs (Excluding Oysters)
type: ingredient
commodity: bivalve-molluscs
aliases: [clams, mussels, scallops, cockles, razor-clams, oysters-separate-page, quahog, geoduck, oyster]
category: shellfish-mollusc
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: 1500
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [300, 2000]
    p95_ppb: 5000
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [20, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [10, 80]
    p95_ppb: 150
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 1500]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [100, 600]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [1000, 8000]
    p95_ppb: null
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
drivers: [filter-feeding, marine-water-cadmium, bioaccumulation, species, harvest-region]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/wild-harvested-near-estuaries]]", "[[ingredients/older-specimens]]"]
used_in_products: ["[[products/clam-chowder]]", "[[products/frozen-shellfish-mixes]]", "[[products/prepared-seafood]]", "[[products/shellfish-sauces]]", "[[products/seafood-supplements]]"]
audience: [regulator, educator, consumer, app]
sources: 23
wiki_doi: null
updated: 2026-05-16
---

# Bivalve Molluscs (excluding Oysters)

Bivalve molluscs other than oysters are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as the food category with the highest mean cadmium concentration in the European occurrence dataset, and regular consumers of this commodity show mean dietary cadmium exposure at approximately twice the EFSA tolerable weekly intake. Oysters are held in a separate analytic category because their cadmium concentrations and biological behavior diverge sufficiently to warrant distinct treatment; that split will be reflected in the wiki when a dedicated oysters page is created.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 100–500 | medium | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/dogruyol2024-mediterranean-mussels-health-risk\|3]] |
| Cd | n=10 | 300–2000 | medium | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/dogruyol2024-mediterranean-mussels-health-risk\|3]] |
| iAs | n=2 | 20–100 | low | [[sources/mancuso2024-food-contamination-cvd\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=4 | 1000–8000 | medium | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/bao2024-sp-icp-ms-nps-mussels\|2]], [[sources/mancuso2024-food-contamination-cvd\|3]] |
| tHg | n=9 | 10–80 | medium | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/dogruyol2024-mediterranean-mussels-health-risk\|3]] |
| Ni | n=2 | 200–1500 | low | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|2]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 100–600 | low | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Bivalve molluscs are filter-feeders that accumulate cadmium directly from seawater across their gill and mantle tissues, concentrating the metal at levels orders of magnitude above the dissolved seawater concentration. Species vary substantially in bioaccumulation factor; clams, mussels, scallops, and cockles (the species grouped in the EFSA "bivalve molluscs other than oysters" category) consistently show higher cadmium concentrations than oysters under the same environmental conditions. Older specimens, larger specimens, and specimens harvested from waters with elevated cadmium (estuaries near historical industrial discharge, rivers draining cadmium-mineralized watersheds) carry higher cadmium than younger specimens from cleaner waters.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for bivalve molluscs (excluding oysters) of 0.380 mg/kg, the highest mean in the entire EFSA food-commodity ranking. Crustaceans separately mean 0.093 mg/kg and cephalopods 0.285 mg/kg. Regular consumers of bivalve molluscs show mean dietary cadmium exposure of 4.6 µg/kg b.w./week, approximately twofold the EFSA mean adult exposure of 2.3 and approximately twofold the EFSA TWI of 2.5._

## Processing effects

_Pending. Cadmium is incorporated into the bivalve tissue and is not meaningfully removed by cooking, canning, or freezing. Removing the digestive gland (the "hepatopancreas" or "tomalley" in lobsters, the analogous tissue in bivalves) can reduce cadmium intake from some species because the metal preferentially accumulates there, but consumer-level preparation rarely separates these tissues in bivalve molluscs._

## Ingredient-derivative risk

Prepared shellfish dishes, shellfish-based sauces, clam chowders, and frozen shellfish mixes carry cadmium at the concentration of the source bivalves. Shellfish-based nutritional supplements and traditional preparations (such as fermented mussel or clam products in some Asian cuisines) can concentrate cadmium further through water loss during processing.

## Mitigation options

_Pending. Harvest-region selection, species selection within the broader bivalve category, and regulatory testing programs are the primary mitigation levers. The OEHHA Proposition 65 Cd MADL of 4.1 µg/day is relevant for retail bivalve products sold in California; regular consumers can approach or exceed this daily threshold from several servings per week._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for bivalve molluscs (pending ingest of CXS 193-1995); historically one of the higher matrix-specific values in CXS 193, reflecting the biological reality of filter-feeder bioaccumulation.
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU maximum levels for bivalve molluscs are 1.0 mg/kg (1000 ug/kg) Cd and 1.50 mg/kg (1500 ug/kg) Pb; the general EU mercury maximum level for crustaceans, molluscs, and non-listed fish is 0.50 mg/kg (500 ug/kg). For Pecten maximus, the Cd/Pb rows apply to adductor muscle and gonad only.
- [[regulations/oehha-cadmium-prop65]] — OEHHA Prop 65 MADL of 4.1 µg/day oral applies to consumer products sold in California; frequent bivalve mollusc consumption can trigger the Prop 65 warning threshold.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg, MeHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 2 | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|Groleau et al. 2025]]. *Improving nutritional intakes and reducing metal(loid) exposures from wild fish broth among Inuit pregnant women*, Science of the Total Environment | 2025 | Peer-reviewed | CA tHg, MeHg, tAs, iAs, Cd, Pb, Fe, K, Ca, Mg, Zn, Se occurrence in Nunavik (northern Quebec), Canada. Country-food ingredients sampled with Inuit partners from Inukjuak, Kangiqsualujjuaq, Puvirnituq, and Salluit: lake trout... |
| 3 | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|Li et al. 2025]]. *A ratiometric fluorescent sensor for Al3+ and Cu2+ detection in food samples*, Frontiers in Nutrition | 2025 | Peer-reviewed | Methods paper validating an Al3+/Cu2+ fluorescent sensor with spiked-recovery experiments in scallops and razor clams; no ambient Al concentrations reported |
| 4 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, Cd, Pb, tAs occurrence in 138,281 test records for aquatic-food products extracted from the WHO Food Safety Collaborative Platform (FOSCOLLAB), which integrates JECFA,... (n=138281) |
| 5 | [[sources/bao2024-sp-icp-ms-nps-mussels\|Bao 2024]]. *Single-particle ICP-MS characterisation of metal nanoparticles in mussels*, unknown | 2024 | Peer-reviewed | SP-ICP-MS characterisation of nano-particulate vs dissolved fractions of Pb, Cd, and tAs in mussel tissue; speciation and bioavailability context rather than total occurrence concentrations |
| 6 | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|Bruno et al. 2024]]. *Mineral composition in mussel Mytilus galloprovincialis and clam Tapes decussatus from Faro Lake of Messina: risk assessment for human health*, Frontiers in Toxicology | 2024 | Peer-reviewed | IT/EU tAs, Cd, Pb, tHg, Ni, Cr occurrence in 80 specimens of Mytilus galloprovincialis (mussel) and 80 specimens of Tapes decussatus (clam) collected from Faro Lake, Messina,... (n=160) |
| 7 | [[sources/dogruyol2024-mediterranean-mussels-health-risk\|Dogruyol et al. 2024]]. *Evaluation of Health Risks Attributed to Toxic Trace Elements and Selenium in Farmed Mediterranean Mussels from Türkiye and Bulgaria*, Environmental Science and Pollution Research (published online 1 February 2024) | 2024 | Peer-reviewed | Measured Cd, tHg, and Pb in farmed *Mytilus galloprovincialis* from four farms in Türkiye and Bulgaria (n=48); all means below EU/Codex MLs; seasonal and site-level concentration data |
| 8 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | EU/global Pb, Cd, iAs, tAs, tHg occurrence in null |
| 9 | [[sources/bjerregaard2023-mercury-mussels-denmark\|Bjerregaard et al. 2023]]. *In Search of Mercury Lost from Sediments in a Previously Contaminated Coastal Area, Harboøre Tange, Denmark*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | DK/EU tHg occurrence in Blue mussels (Mytilus edulis), periwinkles (Littorina littorea), brown shrimps, and amphipods from Nissum Broad coastal stations, Denmark; also... (n=137) |
| 10 | [[sources/cardoso2023-mercury-portuguese-coast-seafood\|Cardoso et al. 2023]]. *Seasonal characterization of mercury contamination along the Portuguese coast: human health and environmental risk assessment*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | PT/EU tHg occurrence in Seasonal sampling over 1 year at three Portuguese estuaries (Ria de Aveiro, Tagus, Ria Formosa); water, macroalgae, and... |
| 11 | [[sources/hall2023-methylmercury-tidal-marsh\|Hall et al. 2023]]. *Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs*, Environmental Science & Technology | 2023 | Peer-reviewed | US MeHg, tHg occurrence in Primary and secondary consumers (gastropods, bivalves, amphipods, beetles, spiders, shrimp, crabs, fish) from four marsh features at three... (n=116) |
| 12 | [[sources/onyegeme-okerenta2023-shellfish-nigeria\|Onyegeme-Okerenta et al. 2023]]. *Potential Toxic elements in shellfish from three rivers in Niger Delta, Nigeria: bioaccumulation, dietary intake, and human health risk assessment*, Environmental Analysis, Health and Toxicology | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb, Ni occurrence in Three shellfish species (Penaeus monodon, Crassostrea rhizophorae, Tympanostomus fuscatus) from three rivers in Niger Delta, Nigeria (Buguma, Krakrama,... (n=27) |
| 13 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 14 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA dietary Cd exposure assessment confirming the PTMI of 25 µg/kg b.w./month; bivalve molluscs among the highest-concentration categories in the global occurrence dataset |
| 15 | [[sources/vainio2022-baltic-mercury-food-web\|Vainio et al. 2022]]. *Trophic Dynamics of Mercury in the Baltic Archipelago Sea Food Web: The Impact of Ecological and Ecophysiological Traits*, Environmental Science & Technology | 2022 | Peer-reviewed | FI/SE/DK tHg occurrence in 30 species from the Baltic Archipelago Sea (southwestern Finland), sampled 2017–2019 (white-tailed eagle 2013–2019); birds (3 spp.), fish... (n=136) |
| 16 | [[sources/raju2021-bivalves-cagayan-philippines\|Raju et al. 2021]]. *Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines*, Scholars Academic Journal of Biosciences 9(10):256-258 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two bivalve species from Cagayan Valley, Philippines: freshwater clam (Corbicula fluminea) and marine mussel (Mytilus edulis); collected with... (n=2) |
| 17 | [[sources/rajeshkumar2018-taihu-lake-fish-oyster-metals\|Rajeshkumar et al. 2018]]. *Studies on seasonal pollution of heavy metals in water, sediment, fish and oyster from the Meiliang Bay of Taihu Lake in China*, Chemosphere | 2018 | Peer-reviewed | CN Pb, Cd, Cr, Cu occurrence in Surface water (n=28: 7 sites × 4 seasons), sediment (n=28: 7 sites × 4 seasons), crucian carp Carassius... (n=28) |
| 18 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter identifying bivalve molluscs as a leading dietary Cd source, with mechanistic explanation of filter-feeding bioaccumulation |
| 19 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) | 2014 | Book chapter | EG/CN/IN Pb, Cd, tHg, tAs, Cr, Ni, Sn, Al occurrence in Book chapter authored by Sameeh A. Mansour (Environmental Toxicology Research Unit, Pesticide Chemistry Department, National Research Centre, Cairo)... |
| 20 | [[sources/shue2012-bivalves-tapeng-taiwan\|Shue et al. 2012]]. *Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan*, Advanced Materials Research | 2012 | Peer-reviewed | TW Pb, Cd, Cu, Zn, Ni, Cr occurrence in Six bivalve species (Katelysia hiantina, Anomalocardia squamosa, Perna viridis, Anadara antiquata, Paphia undulata, Sanguinolaria diphos) collected from Ta-Peng... (n=72) |
| 21 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM opinion establishing the EU Cd TWI; bivalves (excluding oysters) reported as the highest-mean-Cd food category (0.380 mg/kg), with regular consumers reaching approximately twice the TWI |
| 22 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex maximum levels for Cd, Pb, and Hg in bivalve molluscs and other shellfish matrices |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [83afba8](https://github.com/paleofoundation/heavymetalindex/commit/83afba8) | 2026-05-18 | autonomy: daemon tick 2026-05-18T20-18-55Z — gap-healing + extraction + pooling + briefings |
<!-- END: hmi-page-history -->
