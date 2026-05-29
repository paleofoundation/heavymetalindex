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
products: ["[[products/fish-freshwater]]", "[[products/fish-containing-baby-foods]]"]
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
- Range: 0.001 to 28.54 µg/g ww (5 orders of magnitude)
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

Database compilation: Original THg fish-tissue data assembled from USGS, state, federal, and Canadian monitoring databases. Tissue types standardized to skinless boneless fillet (76.8% of original data) using literature-derived conversion factors. Wet-weight basis (dry→wet conversion using moisture-content data where available, default 76% moisture).

Length standardization: THg concentrations within species standardized to the species' median length using linear mixed-effects models with fork length as a fixed effect and species × site as random effects (Eagles-Smith and Ackerman 2014 method). For species with sparse data, similar-species groupings used.

Statistical models: Tiered linear mixed-effects models (4 levels). Initial descriptive (site-specific geometric means), then size-standardized comparisons across habitats and foraging guilds, then watershed-scale relativized THg estimates accounting for species/length/habitat. Final tier compared ecoregions. Getis-Ord G* hotspot analysis (ArcGIS v10) identified spatial clusters of high/low Hg.

Detection limits: Analytical detection limits varied considerably across the merged datasets (0.001-0.1 µg/g ww). Only 91/96,310 values (0.09%) were below reported DL; these were included as reported.

Speciation: THg in fish muscle is ≥95% MeHg per established literature (Bloom 1992). The paper treats THg as a proxy for MeHg, consistent with EPA's Fish Tissue Residue Criterion approach. **The paper acknowledges that this proxy is not appropriate when applied to non-muscle tissues** (whole body, liver, gut), where the MeHg/THg ratio is lower.

## Implications

Certification: For HMTc Cat 1 fish-containing baby foods row + the broader fish-and-seafood row family:

1. **The Western US/Canada freshwater-fish dataset is the largest single Hg-in-fish-tissue evidence base ingested into the wiki to date**. The 30% / 17% / 3.9% exceedance fractions are key reference points for HMTc threshold-setting on the fish row, with the explicit caveat that the FDA 1.0 µg/g action level is for COMMERCIAL seafood and the EPA 0.30 µg/g criterion is the relevant standard for individual-consumption health protection.

2. **MeHg ≈ THg in fish muscle** is the working assumption for HMTc threshold-derivation, consistent with EPA practice. Sources that report whole-body or visceral THg cannot be used as MeHg proxies at the same conversion factor; the methodology supplement (per CLAUDE.md Part 14 speciation rule) should flag this.

3. **The lack of correlation between sediment Hg and fish Hg** at the watershed scale is methodologically important: HMTc certification cannot use sediment-Hg measurements as a supplier-screening proxy for fish-product Hg. Supplier audits must measure fish-tissue directly.

4. **Ecoregion effect dominates**: HMTc Cat 1 fish thresholds for products sourced from semi-arid/arid Western regions (Great Basin, Desert SW) should anticipate higher tail-of-distribution Hg than products from temperate Pacific Northwest sources. The synthesis paper explicitly demonstrates this ecoregion-level heterogeneity.

5. **Piscivore species (e.g., largemouth bass, walleye, lake trout) carry the highest fish-Hg burdens via biomagnification**; the lower trophic-level species (e.g., bottom feeders, planktivores) carry lower burdens. HMTc Cat 1 fish-containing baby food should preferentially source from lower-trophic-level fish to control MeHg exposure.

6. **Children's exposure context**: while the dataset is freshwater (sport-caught, subsistence), commercial fish baby food often uses marine species. The Western US ecoregion findings extrapolate cautiously: marine fish food chains have higher overall MeHg loads because of methylation in deep-ocean waters and species-specific bioaccumulation. The Cat 2 master page (children-personal-care isn't the right place — fish-containing baby foods Cat 1 row is) should cross-reference this dataset.

Courses: Excellent case study for spatial epidemiology + mixed-effects modeling. The 96,310-record database + 10-ecoregion stratification is the canonical worked example.

App: For the consumer app's per-meal MeHg risk scoring, this dataset establishes that 30% of randomly-sampled Western US freshwater fish meals exceed the EPA criterion. The app's per-species + per-region risk weighting should reflect that ratio.

Microbiome: Not addressed. Coe 2023 (gut microbiome MeHg demethylation) is a complementary reference.

## Wiki pages updated on ingest

- [[metals/mercury-total]]
- [[metals/mercury-methyl]]
- [[ingredients/fish]]
- [[ingredients/freshwater-fish]]
- [[products/fish-freshwater]]
- [[products/fish-containing-baby-foods]]
- [[regulations/epa-fish-tissue-residue-criterion-mehg-03]] (to be created)
- [[regulations/fda-seafood-mercury-action-level-1ppm]] (to be created)

## Verification notes

2026-05-29 merge-enhance pass (Claude Opus 4.7, manual-fetch ingest cycle), source re-verified against the PDF in `raw/Manual Fetch Kimi /`. Corrections applied:

- **Geometric-mean range** corrected from "0.001 to 28.4 µg/g ww" to "0.001 to 28.54 µg/g ww" (PDF §3.1 first paragraph: "individual concentrations ranged from 0.001 to 28.54 μg/g ww").
- **Foraging-guild list** corrected from "piscivore, generalist invertivore, omnivore, benthivore, planktivore" to "piscivore, generalist, generalist invertivore, benthivore, planktivore" (PDF §2.2 Statistical Analyses, where "omnivore" appears nowhere and "generalist" is defined as "diet composed of both fish and invertebrate prey").
- **Geography** corrected. The prior version mis-attributed Yukon Territories, Northwest Territories, and British Columbia to "15 U.S. states" while listing North Dakota and South Dakota separately under Saskatchewan. PDF §2.1 enumerates: US states (Alaska, Washington, Oregon, Idaho, California, Nevada, Arizona, New Mexico, Colorado, Utah, Wyoming, Montana, North Dakota, South Dakota — 14 named, paper summary cites "15"); Canadian provinces (British Columbia, Alberta, Saskatchewan); Canadian territories (Yukon, Northwest Territories).
- **Sediment-correlation nuance** added. The prior version reported "fish THg not correlated with sediment THg" but omitted the source's accompanying finding that fish THg is weakly correlated with sediment MeHg (PDF abstract and §3.4). Both findings are now stated together.
- **`matrices` frontmatter** corrected from `[whole-food, exposure-modeling]` to `[freshwater-fish, fish-muscle]`. The paper measures THg in fish-muscle tissue of freshwater fish (76.8% skinless boneless fillet, 19.9% whole body converted to fillet equivalents, 3.3% skin-on fillet); it is not an exposure-modeling study.
- **`products` frontmatter** expanded from `[fish-containing-baby-foods]` (broad-context only) to include `fish-freshwater` (direct evidence — HMTc Cat 6 Row 1) in addition. The Eagles-Smith dataset is the largest direct evidence base for freshwater-fish-Hg in the wiki corpus; routing it solely to fish-containing-baby-foods (where it is broad-format context, since the paper explicitly does not address marine fish or commercial baby-food fish) understated its evidentiary role.
- **HUC-8 watershed range** (0.011-1.45 µg/g ww least-squares-mean) added to Key numbers; this is the size-and-species-relativized range from the third-tier model (PDF §3.4), a more interpretable cross-watershed comparison than the raw site means.
- **Variance attribution** added: species accounted for 40% and site for 32% of total variance (PDF §3.4 paragraph beginning "Site effects commonly account for...").

No content corrections were applied to claims I could not independently verify against the PDF text I read; the values in the exceedance table (30% / 17% / 3.9% / 34% / 20%) reproduce the PDF §3.1 numbers exactly, as do the species-effect descriptions and the habitat-difference percentages.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [b9702d7](https://github.com/paleofoundation/heavymetalindex/commit/b9702d7) | 2026-05-15 | sources: Cat 1 fish — Eagles-Smith 2016 freshwater fish Hg Western US/Canada (96K records) |
<!-- END: hmi-page-history -->
