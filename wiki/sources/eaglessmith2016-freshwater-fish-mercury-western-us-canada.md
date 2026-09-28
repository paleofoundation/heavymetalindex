---
type: source
raw_handle: kimi-loose-pdf-eaglessmith2016
cite_key: eaglessmith2016-freshwater-fish-mercury-western-us-canada
title: "Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada"
authors: [Eagles-Smith CA, Ackerman JT, Willacker JJ, Tate MT, Lutz MA, Fleck JA, Stewart AR, Wiener JG, Evers DC, Lepak JM, Davis JA, Flanagan Pritz C]
year: 2016
publication: "Science of The Total Environment (2016, in press 2015)"
doi: 10.1016/j.scitotenv.2016.03.229
source_type: peer-reviewed
evidence_tier: A
license: "Elsevier copyright; preprint in author manuscript form"
raw_path: "raw/Manual Fetch Kimi /Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada.pdf"
metals: [tHg, MeHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/freshwater-fish]]"]
products: ["[[products/fish-freshwater]]", "[[products/fish-containing-baby-foods]]", "[[products/fresh-fish]]"]
matrices: [freshwater-fish, fish-muscle]
jurisdictions: [US, CA]
near_duplicates: []
sample_n: 96310
sample_population: "96,310 individual fish records from 4,262 unique locations across 15 U.S. states + 3 Canadian provinces + 2 Canadian territories, comprising 206 species, sampled 1969-2014. Database aggregated from USGS Federal, State, and Provincial monitoring programs."
wiki_doi: null
sampling_locations: []
sampling_year_range: "1969-2014"
updated: 2026-05-29
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Eagles-Smith et al. 2016 — Fish Hg spatial and temporal patterns across Western US + Canada (USGS broad synthesis)

## Overview

This USGS-led broad synthesis compiles total mercury (THg) concentrations in **96,310 individual fish from 4,262 unique locations** across 15 U.S. states, 3 Canadian provinces, and 2 Canadian territories — covering 206 species sampled 1969-2014. It is the largest freshwater-fish-Hg dataset in the Western North American literature. Across all fish, total THg in muscle ranges from **0.001 to 28.54 µg/g wet weight** with a geometric mean of **0.170 ± 0.001 µg/g ww**. Crucially:

- **30% of individual fish samples exceed the EPA Fish Tissue Residue Criterion for methylmercury** (0.30 µg/g ww), the threshold designed to protect noncommercial-fish-consuming humans
- **17% of site-level mean concentrations exceed the same criterion**
- **3.9% of fish samples exceed the FDA action level of 1.0 µg/g ww** for commercial seafood
- **34% of whole-body samples exceed 0.20 µg/g ww**, an impairment threshold associated with potential effects on fish themselves

The paper develops a relativized THg-estimation framework that accounts for fish-species, fish-size, habitat, and ecoregion variability so that comparisons across watersheds and ecoregions are robust. Riverine habitats are consistently higher than lacustrine; semi-arid and arid regions (Great Basin, Desert Southwest) higher than temperate. **Fish THg concentrations are not correlated with sediment THg concentrations at the watershed scale, though they are weakly correlated with sediment MeHg concentrations** — indicating that factors influencing MeHg production (microbial methylation activity, sulfate, dissolved organic carbon, redox) are more important than inorganic-Hg loading for predicting fish-MeHg exposure.

## Key numbers

**Dataset scope**:
- 96,310 individual fish records
- 4,262 unique sites
- 206 species (sampled 1969-2014)
- 15 U.S. states: Alaska, Washington, Oregon, Idaho, California, Nevada, Arizona, New Mexico, Colorado, Utah, Wyoming, Montana, North Dakota, South Dakota (the paper summarizes "15 States" while the data-compilation list enumerates 14 by name; the 15th appears in the source databases but is not explicitly named in §2.1)
- 3 Canadian provinces: British Columbia, Alberta, Saskatchewan
- 2 Canadian territories: Yukon, Northwest Territories
- Habitats: lakes, ponds, and reservoirs; rivers and streams; wetlands; canals
- Foraging guilds (5): piscivore, generalist, generalist invertivore, benthivore, planktivore

**THg distribution**:
- Range: 0.001 to 28.54 µg/g ww (~4.5 orders of magnitude)
- Geometric mean (all fish, all sites): 0.170 ± 0.001 µg/g ww (very narrow SE on n=96K)
- Site-specific geometric mean range: 0.006 to 2.98 µg/g ww (average across sites 0.124 ± 0.002)
- HUC-8 watershed least-squares mean range (relativized for species, length, site, year): 0.011 to 1.45 µg/g ww

**Exceedance proportions**:
| Threshold | Source | % of individual fish exceeding | % of site means exceeding |
|---|---|---:|---:|
| EPA Fish Tissue Residue Criterion (0.30 µg/g ww MeHg, noncommercial human consumption) | EPA Borum et al. 2001 | 30% | 17% |
| FDA action level (1.0 µg/g ww commercial seafood) | FDA | 3.9% | — |
| Whole-body fish impairment threshold (0.20 µg/g ww) | Beckvar et al. 2005 | 34% | 20% |

**Variability drivers** (per the mixed-effects linear models):
- Habitat type (lake vs river vs stream): significant, riverine > lacustrine (lake-to-river difference 21% in piscivores to 61% in benthivores)
- Fish species: highly significant (accounted for 40% of total variance; piscivores have higher THg via biomagnification)
- Fish size: positive correlation within species (THg accumulates with age/size)
- Site within ecoregion: significant (accounted for 32% of total variance — site-level Hg cycling chemistry varies)
- Year: significant temporal trends (variable direction across ecoregions)
- Ecoregion (Level 1, 10 ecoregions): largest single source of regional variation
- **Sediment THg concentration: not significantly correlated with fish THg** at the watershed scale; sediment MeHg is weakly correlated

## Methods

Database compilation: Original THg fish-tissue data assembled from USGS, state, federal, and Canadian monitoring databases. Tissue types standardized to skinless boneless fillet (76.8% of original data) using literature-derived conversion factors. The remaining records were whole body converted to fillet equivalents (19.9%) or skin-on fillet (3.3%). Wet-weight basis (dry→wet conversion using moisture-content data where available, default 76% moisture).

Length standardization: THg concentrations within species standardized to the species' median length using linear mixed-effects models with fork length as a fixed effect and species × site as random effects (Eagles-Smith and Ackerman 2014 method). For species with sparse data, similar-species groupings used.

Statistical models: Tiered linear mixed-effects models (4 levels). Initial descriptive (site-specific geometric means), then size-standardized comparisons across habitats and foraging guilds, then watershed-scale relativized THg estimates accounting for species/length/habitat. Final tier compared ecoregions. Getis-Ord G* hotspot analysis (ArcGIS v10) identified spatial clusters of high/low Hg.

Detection limits: Analytical detection limits varied considerably across the merged datasets (0.001-0.1 µg/g ww). Only 91/96,310 values (0.09%) were below reported DL; these were included as reported.

Speciation: THg in fish muscle is ≥95% MeHg per established literature (Bloom 1992). The paper treats THg as a proxy for MeHg, consistent with EPA's Fish Tissue Residue Criterion approach. **The paper acknowledges that this proxy is not appropriate when applied to non-muscle tissues** (whole body, liver, gut), where the MeHg/THg ratio is lower.

## Implications

What the literature documents (this paper specifically):

1. **The Western US/Canada freshwater-fish dataset is the largest single Hg-in-fish-tissue evidence base ingested into the wiki to date.** The 30% / 17% / 3.9% exceedance fractions against the EPA Fish Tissue Residue Criterion (0.30 µg/g ww MeHg, set by Borum et al. 2001 to protect noncommercial-fish-consuming humans) and the FDA action level (1.0 µg/g ww commercial seafood) are documented in PDF §3.1. The two thresholds serve different purposes per the source: the EPA criterion targets individual-consumption health protection; the FDA action level governs commercial-seafood marketability.

2. **MeHg ≈ THg in fish muscle** is the paper's working assumption (PDF "Methods"/Speciation, citing Bloom 1992), where THg in muscle is ≥95% MeHg. The paper explicitly notes the proxy does not hold for whole-body, liver, or visceral tissues where MeHg/THg ratios are lower.

3. **Sediment THg is a poor predictor of fish THg at the HUC-8 watershed scale** (uncorrelated, p=0.07, N=418 paired HUCs), while sediment MeHg is weakly correlated (p=0.0005, N=216) — per PDF §3.4. The paper interprets this to mean factors governing microbial Hg methylation (sulfate, dissolved organic carbon, redox conditions, microbial community structure) drive fish-Hg more than inorganic-Hg loading does.

4. **Ecoregion is the largest single regional source of variation in fish THg.** Semi-arid and arid ecoregions (Great Basin, Desert Southwest) show consistently higher fish THg than temperate forests, per PDF §3.4 and the relativized HUC-8 quintile map (Fig. 4).

5. **Piscivores carry the highest fish-Hg burdens via biomagnification** (e.g., Sauger, Northern Pikeminnow, Walleye, White Bass, Striped Bass, Northern Pike, Lake Trout, Smallmouth Bass, Largemouth Bass, Whiterock Bass — top 10 LS-mean species per PDF §3.2 Fig. 2). Lowest LS-mean concentrations are in Broad Whitefish, Pumpkinseed, Dolly Varden, Mountain Whitefish, Tui Chub, Brook Trout, Coho Salmon, Redside Shiner, Rainbow Trout, and Slimy Sculpin — generally planktivores, invertivores, and generalists.

6. **The dataset is explicitly freshwater-only.** Per PDF §1 final paragraph: "This assessment did not address marine environments or risk to human and wildlife health" — those assessments are in companion papers in the same Sci Tot Env special issue (Ackerman et al. 2016, Davis et al. 2016, Jackson et al. 2016, Lepak et al. 2016). The Eagles-Smith 2016 findings do not directly support claims about marine fish food chains or commercial baby-food fish, which use predominantly marine species; the synthesis page should treat this as freshwater evidence and route marine-fish-Hg synthesis to the companion-paper sources.

Courses: Excellent case study for spatial epidemiology + mixed-effects modeling. The 96,310-record database + 10-ecoregion Level-1 stratification is a canonical worked example of relativizing biomonitoring data across heterogeneous species/habitat/site/year structure.

App: For the consumer app's per-meal MeHg risk scoring against freshwater wild-caught fish (sport-caught and subsistence), this dataset establishes that 30% of individual fish sampled across the Western US/Canada exceeded the EPA 0.30 µg/g ww criterion. The app should not extrapolate these proportions to commercial marine-fish products without additional evidence.

Microbiome: Not addressed by the paper. The microbial Hg-methylation drivers cited in PDF §1 (Gilmour et al. 1992, 2013; Hall et al. 2008) are upstream of the dataset's scope — a microbiome cross-reference belongs on a synthesis page, not here.

## Related evidence
- [[metals/mercury-total]]
- [[metals/mercury-methyl]]
- [[ingredients/fish]]
- [[ingredients/freshwater-fish]]
- [[products/fish-freshwater]]
- [[products/fish-containing-baby-foods]]
- [[regulations/epa-fish-tissue-residue-criterion-mehg-03]] (to be created)
- [[regulations/fda-seafood-mercury-action-level-1ppm]] (to be created)

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [12d44c412e](https://github.com/paleofoundation/heavymetalindex/commit/12d44c412e) | 2026-05-29 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
