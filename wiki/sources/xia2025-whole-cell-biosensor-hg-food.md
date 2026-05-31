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
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
