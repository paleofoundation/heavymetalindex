---
type: source
raw_handle: PCMF_article-1-copy-7
cite_key: vasilachi2023-heavy-metals-cereal-crops
title: "Analysis of Heavy Metal Impacts on Cereal Crop Growth and Development in Contaminated Soils"
authors: [Vasilachi IC, Stoleru V, Gavrilescu M]
year: 2023
publication: "Agriculture"
doi: 10.3390/agriculture13101983
source_type: review
evidence_tier: B
license: "CC BY 4.0"
access_url: "https://doi.org/10.3390/agriculture13101983"
raw_path: "raw/Papers Cube Manual Fetch/article (1) copy 7.pdf"
raw_sha256: 205991258bf7d9c6b12d79d20d8e7e0bf23c365c805dbf00c75ccaf411774c08
metals: [Pb, Cd, tAs, Cr, Cr-VI, Ni, Al, tHg, MeHg]
ingredients: ["[[ingredients/wheat]]", "[[ingredients/rice]]", "[[ingredients/maize]]", "[[ingredients/barley]]"]
products: []
matrices: [cereal-grain, agricultural-soil]
jurisdictions: []
near_duplicates: []
sample_n: null
sample_population: "Narrative literature review synthesising prior studies on cereal crops (wheat, rice, maize, barley, rye, oats, millet) grown in heavy-metal-contaminated agricultural soils; global scope; 321 cited references"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

## Overview

This 50-page narrative review published in Agriculture (MDPI, 2023) synthesises the literature on how heavy metals in contaminated soils affect cereal crop physiology, growth, and grain food safety. The authors (from Iași, Romania) cover four interlocking themes: visible phytotoxicity (chlorosis, stunted growth, necrosis, leaf deformities, water stress); the mechanisms behind those symptoms (enzyme disruption, reactive-oxygen-species generation, membrane integrity loss, nutrient imbalances); soil and environmental factors that modulate metal toxicity (pH, organic matter, soil texture, temperature, humidity); and the defence machinery cereals deploy in response (metal transporters, sequestration, chelation by phytochelatins and metallothioneins, enhanced efflux, mycorrhizal symbiosis, plant growth-promoting bacteria). The paper is plant-science and agronomy-oriented — it does not report measured concentrations in harvested grain from real food supply chains, and it presents no occurrence tables for ppb values in cereal products. Its value to this wiki is mechanistic: it explains *why* soil-to-grain transfer varies with pH, organic matter, cultivar, and metal speciation, and which agronomic levers (liming, organic amendments, biochar, crop rotation, low-Cd cultivars, mycorrhizal inoculation) reduce that transfer.

## Key numbers

The paper is primarily mechanistic and reviews prior literature; it presents no original measurements and no occurrence tables for grain concentrations. The few quantitative claims it carries are:

- **Soil pH cut-off for Cd mobility.** In highly acidic soils with a pH below 5, the solubility of cadmium increases significantly, leading to elevated Cd in the soil solution and greater uptake by cereal crops. In soils with pH above 7, Ni, Cd, and Zn are more likely to form less soluble compounds. The optimal pH range for cereal growth and moderate metal bioavailability is given as 6–7. No specific solubility multiplier is reported.
- **PGPB biosorption examples (legume-focused, cited for context, not direct cereal grain numbers).**
 - *Pseudomonas* Y3-B1A (rhamnolipid-producing): 85.5% vanadium removal efficiency reported for contaminated sediment.
 - *Bacillus subtilis*: biosorption capacity equivalent to Cd²⁺ solutions of 10–20 mg L⁻¹.
 - *Mesorhizobium* sp. RC3 + chickpea (*Cicer arietinum*) in Cr-amended soil: vs uninoculated controls — 71% increase in dry matter, 86% increase in nodule number, 36% increase in seed yield, 16% increase in grain protein, 46% / 40% increase in root / shoot N, reaching 136 mg Cr/kg.
- **Specific cultivar / transporter examples.** "Low-cadmium rice" (*Oryza sativa*) varieties bred for reduced grain Cd accumulation are referenced as an established mitigation route, without ppb figures. ZmHMA3 (maize) facilitates Cd and Zn efflux from root cells; OsHMA2 (rice) prevents Cd entry into xylem vessels, limiting long-distance transport to aerial parts.
- **No grain ppb values, no soil ppb values, no soil-to-grain transfer coefficients** are reported in the review; readers are referred throughout to the 321 cited primary sources for numerical data.

## Methods (brief)

Narrative literature review. No primary measurements, no analytical methods, no systematic-review protocol (no PRISMA flow, no inclusion/exclusion criteria stated). The authors synthesise 321 references drawn from European and global databases, organised into eight thematic sections (introduction; uptake/tolerance/physiology; mechanisms of growth impairment; visible symptoms; predisposing factors; defence strategies; research frontiers; conclusions) supported by four tables and nine figures, several reproduced from prior CC-BY publications. Limitation: evidence is drawn heterogeneously from pot experiments, greenhouse studies, mining-impacted field surveys, and mechanistic plant-biology work, and the review does not weight or grade sources. Applicability to commercial grain supply-chain concentrations is indirect.

## Implications

**Certification (HMTc).** This paper is mechanistic background, not an occurrence dataset. It supports the *rationale* for why supply-chain controls — soil pH management, organic matter status, cultivar selection, irrigation-water quality — affect grain heavy-metal loads, but supplies no ppb values usable for percentile-based threshold setting. It belongs in the evidence base behind the cereal-crop section of certification guidance, not in the row-level pooling for thresholds. The HMTc-relevant levers the paper validates: liming of acidic soils, organic-matter amendment, low-Cd rice cultivars, biochar, and avoidance of paddy anaerobic conditions where As(III) dominates.

**Courses.** Strong mechanistic background for modules on soil-plant metal transfer, cereal crop selection, and agronomic mitigation. The transporter inventory (NRAMP, ZIP, HMA, IRT, YSL, MTP) and the defence-mechanism schematic (Figure 7: metal transporters, chelation, metallothioneins, vacuolar sequestration, cell wall binding, rhizosphere interactions, regulatory proteins) are directly usable as teaching assets under the paper's CC-BY 4.0 licence.

**App.** Supports geographic and cultivar-flag heuristics in a future grain-risk model (e.g., flag rice grown in paddy systems with known acidic soils), but cannot supply occurrence ppb values for `contamination_profile` blocks.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
