---
type: source
raw_handle: FM_10000813
cite_key: limmer2023-sr-xrf-rice-grain
title: "Synchrotron X-ray fluorescence mapping of arsenic, zinc, copper, and manganese in rice grain cross-sections"
authors: [Limmer MA, Webb SM, Seyfferth AL]
year: 2023
publication: "Journal of Synchrotron Radiation"
doi: "10.1107/s1600577523000747"
access_url: "https://doi.org/10.1107/s1600577523000747"
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: raw/markdown/FM_10000813/FM_10000813.md
metals: [tAs, iAs]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [grain-tissue, rice]
jurisdictions: [US]
near_duplicates: []
sample_n: 50
sample_population: "Rice grains from US field trials"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Limmer et al. 2023 — SR-µXRF mapping of metals in rice grain

This study applies synchrotron micro X-ray fluorescence (SR-µXRF) imaging to map the spatial distribution of arsenic (As), zinc (Zn), copper (Cu), and manganese (Mn) within cross-sections of rice grain (n=50 grains from US field trials). The primary aim is to characterize the within-grain distribution of arsenic — particularly inorganic arsenic — across anatomical compartments (bran, endosperm, embryo, aleurone layer) to inform milling and processing interventions that could reduce arsenic exposure from rice consumption.

## Key numbers

Arsenic distribution findings: arsenic was concentrated in the bran and aleurone layers relative to the starchy endosperm. The SR-µXRF approach achieved spatial resolution sufficient to discriminate arsenic at the cellular level within grain cross-sections. Specific concentration values per compartment are reported in figures; exact ppb values require consulting the full paper figures. The study uses n=50 grains, from unspecified US field trial varieties.

Zinc distribution followed a similar outer-to-inner gradient, while copper was more uniformly distributed. Manganese showed variable distribution depending on grain anatomy.

The paper validates SR-µXRF as a tool for mapping speciation-relevant distributions, complementary to bulk ICP-MS data.

## Methods (brief)

SR-µXRF imaging at the Stanford Synchrotron Radiation Lightsource (SSRL). Grain cross-sections were prepared by resin embedding and microtoming. Fluorescence signals collected per element; spatial resolution approximately 2–5 µm. No speciation analysis (iAs vs. organic As) performed in situ, though contextual discussion references prior speciation work on rice grain. Method does not provide bulk grain ppb values; it maps relative distribution across anatomical zones.

## Implications

Certification: Supports understanding of why brown rice (bran intact) carries higher arsenic than white rice (polished). The bran-layer concentration gradient documented here provides mechanistic grounding for the processing-effects narrative on the rice ingredient page.

Courses: Useful for explaining why rice milling reduces arsenic exposure — visual spatial-distribution data is pedagogically effective.

App: Does not contribute ppb values for contamination_profile directly, but contextualizes the processing-lever discussion.

Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[ingredients/rice]]
- [[metals/arsenic-inorganic]]
- [[testing/sr-xrf-synchrotron]]
- [[mitigation/rice-milling-arsenic]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [4a84eb1](https://github.com/paleofoundation/heavymetalindex/commit/4a84eb1) | 2026-05-17 | doi-recovery: replace 141 Scholar fallback URLs with real DOIs and venue URLs |
| [b052f56](https://github.com/paleofoundation/heavymetalindex/commit/b052f56) | 2026-05-13 | fix: add access_url to 119 source pages to unblock Vercel build |
| [8c1225e](https://github.com/paleofoundation/heavymetalindex/commit/8c1225e) | 2026-05-13 | ingest p4-batch13-g2: 7 pages, 43 FP |
<!-- END: hmi-page-history -->
