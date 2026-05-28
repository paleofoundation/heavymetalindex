---
type: source
raw_handle: FM_12609072
cite_key: xia2025-whole-cell-biosensor-hg-food
title: "Replacing Manual Operation with Bio-Automation II: Construction of a Biological Digestion Gene Circuit to Eliminate the Interference of Food Matrices in the Rapid Detection of Heavy Metals"
authors: [Xia Y, Chen L, Wang Q, Zhou M, Zhang X, Liu H]
year: 2025
publication: "Foods"
doi: 10.3390/foods14213798
access_url: https://doi.org/10.3390/foods14213798
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_12609072/FM_12609072.md
metals: [tHg]
products: ["[[products/seafood]]", "[[products/fresh-fish]]"]
ingredients: ["[[ingredients/fish]]", "[[ingredients/rice]]", "[[ingredients/shellfish]]"]
matrices: [analytical-method, fish, rice, shellfish]
jurisdictions: []
sample_n: null
sample_population: "Spiked food matrices (fish, rice, shellfish, black beans) for whole-cell biosensor validation; no unspiked occurrence measurements reported"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Xia et al. 2025 — Whole-cell biosensor with biological digestion circuit for Hg detection in food matrices

This paper describes a whole-cell biosensor augmented with a synthetic biological digestion gene circuit designed to overcome matrix interference during mercury (Hg2+) detection in complex food samples. The gene circuit automates the digestion of organic matter within the bacterial host, eliminating the need for manual acid digestion steps and enabling more direct detection of Hg2+ in food matrices including fish, rice, shellfish, and black beans. The study validates sensor performance using spiked samples and reports recovery rates, but does not measure actual Hg concentrations in commercially sourced or environmental food samples.

## Key numbers

- LOD: 0.082 µM (detection limit); LOQ: 0.272 µM
- Validated food matrices: fish, rice, shellfish, black beans (all spiked)
- Recovery rates: satisfactory across all four matrices (exact values in paper tables)
- Published in *Foods* 2025, 14, 3798 (MDPI)

## Methods (brief)

Whole-cell biosensor incorporating a mer-operon-based Hg-responsive gene circuit, modified with a biological digestion cassette expressed in E. coli. Fluorescence signal output correlates with Hg2+ concentration. Method compared against ICP-MS for validation on spiked samples. Total mercury only (not speciated).

## Implications

Certification: Not applicable — no occurrence data from commercial or environmental food sources.
Courses: Useful as an example of synthetic biology applied to food safety rapid testing, particularly for Hg in seafood and grain matrices.
App: No contamination profile data extractable.
Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[metals/mercury]]
- [[ingredients/fish]]
- [[ingredients/rice]]
- [[ingredients/shellfish]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [fb438d1](https://github.com/paleofoundation/heavymetalindex/commit/fb438d1) | 2026-05-17 | audit-cleanup: mark 10 gov sources no_doi_assigned (top of frontmatter) + 33 reverse-routes + audit refresh |
| [74a1533](https://github.com/paleofoundation/heavymetalindex/commit/74a1533) | 2026-05-16 | reverse-route: backfill products from matrices for 154 sources |
| [8365d7c](https://github.com/paleofoundation/heavymetalindex/commit/8365d7c) | 2026-05-13 | provenance: DOI audit cleanup + corpus counter refresh |
| [1d941b6](https://github.com/paleofoundation/heavymetalindex/commit/1d941b6) | 2026-05-12 | ingest: P2 remaining-group1 — 5 source pages, 50 false positives |
<!-- END: hmi-page-history -->
