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

## Verification notes

**Merge-enhance rewrite, 2026-05-18.** The pre-existing 2026-05-14 version of this page contained five specific numerical claims that do not appear anywhere in the source PDF, verified by reading all 50 pages:

- "decreasing pH by 1 unit can increase Cd solubility by a factor of 3–10 in loam soils" — *not in source.* The paper states only that "in highly acidic soils with a pH below 5, the solubility of cadmium increases significantly" (p. 24) without quantifying the factor or specifying loam.
- "Wheat grain Cd concentrations correlate linearly with soil Cd, with soil-to-grain transfer coefficients varying by cultivar, soil type, and pH" — *not in source.* The paper discusses Cd accumulation in wheat qualitatively but reports no linear-correlation claim and no transfer coefficients.
- "As in paddy soils is often 4–10× higher than upland soil As" — *not in source.* The paper notes that paddy anaerobic conditions mobilise arsenate/arsenite (p. 7) without giving the 4–10× multiplier.
- "Mycorrhizal inoculation cited as reducing Cd uptake by 20–60% in controlled experiments on wheat and barley" — *not in source.* The paper describes mycorrhizal sequestration and pH-modulation mechanisms qualitatively (section 6.7, pp. 32–33) without giving the 20–60% range or naming the wheat/barley experiments.
- "Root barrier formation (Casparian strip apoplastic barriers) limits Pb and Cd translocation to shoots in excluder-type cereals" — *partially invented.* The paper mentions "root barrier formation" in the abstract but does not name the Casparian strip mechanism specifically nor invoke "excluder-type cereals" as a term.

All five invented claims have been removed. Replaced with the actual quantitative content the paper does carry (PGPB biosorption examples, pH cut-offs, specific transporter examples). Frontmatter normalised: raw_handle corrected from `papers-cube` to `PCMF_article-1-copy-7` per the PCMF folder convention; `access_url` and `raw_sha256` added; matrices tightened from `soil` to `agricultural-soil`; metal list extended to include MeHg (the paper specifically calls out methylmercury formation in waterlogged paddy soils, p. 7). The pre-existing "Wiki pages updated on ingest" footer was removed because two of its four listed targets (`supply-chain/soil-contamination`, `mitigation/agronomic-levers`) do not exist as wiki pages and were speculative routing claims; downstream routing is now the system's responsibility.

**Audit application, 2026-05-18.** Fresh-context audit subagent (verdict REVISE, one ⚠️ on slug vocabulary) flagged four points; verified each against the PDF:

- ❌→applied: `Sn` was in the prior metals list (carried over from the 2026-05-14 page) but tin is not discussed anywhere in the source — Table 2 (pp. 7–8) systematically covers Cd, As, Hg, Pb, Ni, Cu, Zn, Cr only, and Sn does not appear elsewhere across the 50 pages. Removed from the metals array.
- ⚠️→applied: `Cr-VI` added to the metals list. The audit correctly noted that the paper explicitly discusses chromate (CrO₄²⁻) uptake mechanisms and Cr(VI) carcinogenicity distinct from Cr(III) (Table 2 p. 8, mechanism discussion p. 11), justifying inclusion of the speciated slug alongside total `Cr`.
- ⚠️→documented: Cu and Zn are extensively discussed in the source (Table 2 columns, the Cd–Zn competition mechanism on pp. 11–17) but are intentionally omitted from the metals frontmatter because they are essential micronutrients, not HMTc-scope toxic-metal analytes. Recording the design choice here so a future session does not re-add them mechanically.
- ⚠️→rejected as false positive: the audit raised concern that `cereal-grain` and `agricultural-soil` may not be canonical matrices slugs because they do not appear in the taxonomy-snapshot doc. Verified against the actual matrices inventory: both slugs are in widespread use across `wiki/sources/` (the taxonomy snapshot enumerates ingredients/products/metals/regulations but not the matrices vocabulary, which is documented by usage). No change made; flagging here so the snapshot can be expanded if useful.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
