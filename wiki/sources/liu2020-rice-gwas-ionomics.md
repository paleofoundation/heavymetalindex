---
type: source
cite_key: liu2020-rice-gwas-ionomics
title: "Genome-wide association studies of ionomic and agronomic traits in USDA mini core collection of rice and comparative analyses of different mapping methods"
authors: [Liu S, Zhong H, Meng X, Sun T, Li Y, Pinson SRM, Chang SKC, Peng Z]
year: 2020
publication: "BMC Plant Biology"
doi: "10.1186/s12870-020-02603-0"
source_type: peer-reviewed
evidence_tier: A
license: "CC-BY-4.0"
raw_path: raw/studies/liu2020-rice-gwas-ionomics.pdf
sha256: a5b3d08bab03168b4c4d80620a4c3ca7d7a2b7e13a4a232474ed3941f8881a6d
access_date: 2026-05-12
access_url: "https://doi.org/10.1186/s12870-020-02603-0"
metals: [Cd, tAs, Ni, Mn]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice-grain]
jurisdictions: [US]
sample_n: 191
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Liu et al. 2020 — GWAS of heavy metal ionomics in USDA mini-core rice collection

## Overview

Liu et al. performed genome-wide association studies (GWAS) of sixteen ionomic traits — including cadmium (Cd), arsenic (As), nickel (Ni), and manganese (Mn) concentrations in rice grain — across 191 accessions from the USDA Rice Mini-Core Collection, grown under both flooded and unflooded conditions at Mississippi State University. Using 3.2 million SNPs and four GWAS methods (GLM, MLM, MLMM, FarmCPU), the study identified 106 QTLs for flooded ionomics, 47 for unflooded ionomics, and 97 for agronomic traits, of which approximately 80% were novel. The study establishes the genetic architecture underlying varietal differences in grain metal accumulation, providing a foundation for marker-assisted breeding toward lower-Cd, lower-As rice cultivars. Key candidate genes for Cd accumulation in grain were identified in QTL regions, consistent with known transporters such as OsNramp5 and OsHMA.

## Key numbers
- 191 rice accessions from USDA mini-core collection
- 3.2 million SNPs used for GWAS
- 16 ionomic traits analyzed including Cd, As, Ni, Mn in grain (flooded and unflooded conditions)
- 106 QTLs identified for flooded ionomics; 47 for unflooded ionomics
- ~201 (~80%) of 250 total QTLs were newly identified
- Flooded conditions (standard paddy) consistently showed higher grain As and Cd than unflooded

## Methods (brief)
Field experiment at Mississippi State University; grain ionomic concentrations measured by ICP-OES or ICP-MS (instrument not explicitly specified in abstract); GWAS performed with GLM, MLM (univariate), MLMM, and FarmCPU (multivariate) methods; Bonferroni threshold p < 1.53 × 10⁻⁸.

## Implications
Certification: Provides genetic markers for breeding lower-Cd rice. Cultivar selection is a key lever for reducing grain Cd and As; this study gives the marker basis for identifying low-accumulator accessions.
Courses: Demonstrates that variety × hydrology interaction (flooded vs. unflooded) is a major driver of grain metal variance — supports the geographic and agronomic variance framing.
App: Reinforces that rice grain metal content varies substantially by cultivar, not just by origin geography.

## Wiki pages updated on ingest
- [[ingredients/rice]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[supply-chain/cultivar-selection]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [a05bf3eb5](https://github.com/paleofoundation/heavymetalindex/commit/a05bf3eb5) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
