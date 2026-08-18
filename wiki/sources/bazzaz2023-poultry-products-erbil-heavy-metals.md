---
type: source
raw_handle: auto-fetched
cite_key: bazzaz2023-poultry-products-erbil-heavy-metals
title: "Determination of some heavy metals resides in different types of poultry production"
authors: ["Bazzaz JNA", "Yakub NY", "Hammad GR"]
year: 2023
publication: "Tikrit Journal for Agricultural Sciences"
doi: 10.25130/tjas.23.2.17
source_type: peer-reviewed
evidence_tier: B
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-meat-poultry-tas_2023_10-25130-tjas-23-2-17.pdf"
metals: ["Cu", "tAs", "Pb"]
ingredients: ["[[ingredients/chicken]]", "[[ingredients/eggs]]"]
products: ["[[products/poultry-product]]", "[[products/eggs-product]]"]
matrices: ["chicken-thigh", "chicken-breast", "quail-meat", "quail-eggs"]
jurisdictions: ["IQ"]
sample_population: "Erbil-market poultry products, dry-weight XRF analysis: frozen chicken thigh and breast muscle from Brazilian and Turkish imports plus two local Iraqi commercial producers, local quail thigh and breast muscle, and local quail eggs. n=15 per origin/product group, 165 samples total across 11 groups."
wiki_doi: null
sampling_locations: ["Erbil, Kurdistan Region, Iraq"]
sampling_year_range: null
updated: 2026-06-08
---

# Bazzaz et al. 2023 - Determination of some heavy metals resides in different types of poultry production

## Overview

This study measured copper, total arsenic, and lead by portable X-ray fluorescence in frozen poultry products sold in Erbil, Kurdistan Region, Iraq: imported Brazilian and Turkish chicken thigh and breast, chicken thigh and breast from two local Iraqi commercial producers, local quail thigh and breast, and local quail eggs (n=15 per group, 165 samples total). All values are dry-weight after a 48-hour 60 degC oven-dry step.

## Key numbers

Source reports values in ppm (numerically equivalent to mg/kg in solid matrices). All values are dry-weight: samples were oven-dried 48 h at 60 degC before XRF analysis. Each cell is mean +/- standard error across n=15 samples per origin/product group (165 samples total across 11 groups). Values below the XRF detection threshold are reported by the authors as 0.00.

Chicken thigh (dry weight, n=15 per origin):

- Brazilian-origin: Cu 1.57 +/- 0.04, tAs 1.82 +/- 0.06, Pb 0.55 +/- 0.05.
- Turkish-origin: Cu 1.53 +/- 0.05, tAs 1.57 +/- 0.03, Pb 0.43 +/- 0.04.
- Local Iraqi commercial chicken producer A: Cu 1.16 +/- 0.05, tAs 1.52 +/- 0.05, Pb 0.00.
- Local Iraqi commercial chicken producer B: Cu 0.96 +/- 0.04, tAs 1.37 +/- 0.04, Pb 0.00.

Chicken breast (dry weight, n=15 per origin):

- Brazilian-origin: Cu 1.67 +/- 0.03, tAs 1.82 +/- 0.07, Pb 0.50 +/- 0.03.
- Turkish-origin: Cu 1.65 +/- 0.04, tAs 1.77 +/- 0.04, Pb 0.49 +/- 0.03.
- Local Iraqi commercial chicken producer A: Cu 1.36 +/- 0.05, tAs 1.66 +/- 0.04, Pb 0.00.
- Local Iraqi commercial chicken producer B: Cu 1.03 +/- 0.03, tAs 1.58 +/- 0.03, Pb 0.00.

Local quail (dry weight, n=15 per cut/product):

- Quail thigh: Cu 1.12 +/- 0.04, tAs 1.24 +/- 0.04, Pb 0.00.
- Quail breast: Cu 1.01 +/- 0.03, tAs 1.24 +/- 0.04, Pb 0.00.
- Quail eggs: Cu 1.28 +/- 0.08, tAs 1.70 +/- 0.06, Pb 0.00.

Permissible-limit comparators the source places alongside its table: Cu 200 ppm, tAs 2 ppm, Pb 0.5 ppm in solids (1 ppm in liquids). The authors attribute the Pb limit to ANZFA (2001).

The authors report Pb in Brazilian-origin chicken thigh as above the ANZFA 0.5 ppm comparator and Pb in Turkish-origin and Brazilian-origin chicken breast as at or just under the comparator. Pb was not detected in either local commercial producer's chicken, in quail meat, or in quail eggs.

## Methods

Cu, tAs, and Pb were determined by portable X-ray fluorescence spectrometry on a Sky Ray 9000 XRF analyzer. Sample prep: ~15 g per sample oven-dried 48 h at 60 degC, crushed, then 5 g of dried material taken for XRF. Reported values are therefore on a dry-weight basis. Statistical comparison used one-way ANOVA with Duncan's multiple range test at p<=0.05 (SAS 2002-2003); results are mean +/- standard error.

Arsenic is reported as total arsenic; no arsenic speciation (iAs vs tAs) is provided. The paper does not report XRF detection limits, reference-material recoveries, or matrix-spike validation, so the 0.00 values listed for Pb in local chicken, quail meat, and quail eggs are best read as "below the XRF method's working detection threshold" rather than as confirmed absence.

## Implications

The source supports poultry product occurrence routing for Erbil/Kurdistan-region market and import contexts. Imported (Brazilian- and Turkish-origin) frozen chicken muscle is the dominant Pb signal in this dataset; both locally produced commercial chicken and locally produced quail products fell below the XRF detection threshold for Pb. Dry-weight basis must be preserved when routing into product-category occurrence tables, because comparison to wet-weight literature without conversion will overstate concentrations roughly threefold for muscle tissue.

## Wiki pages this source may touch

- [[ingredients/chicken]]
- [[ingredients/eggs]]
- [[products/poultry-product]]
- [[products/eggs-product]]
- [[metals/lead]]
- [[metals/arsenic-total]]
- [[metals/copper]]

## Verification notes

- Source identity checked against DOI 10.25130/tjas.23.2.17 and the downloaded PDF.
- The title contains a source typo ("resides" for residues); the page title preserves the source wording in frontmatter.
- The source paper uses the chemical symbol "Co" throughout for the copper analyte (Co is the symbol for cobalt; copper is Cu). This is a paper-side typographical error; the analyte described and measured is copper. The wiki uses Cu correctly and routes to [[metals/copper]], not [[metals/cobalt]].
- The matrices controlled vocabulary contains `quail-meat` and `quail-eggs` but not separate `quail-thigh` / `quail-breast` slugs analogous to `chicken-thigh` / `chicken-breast`. The paper measured quail thigh and quail breast as separate groups; this page collapses them under `quail-meat` to stay within current matrices vocab. Missing-slug proposal: add `quail-thigh` and `quail-breast` if quail-cut granularity becomes routing-relevant.
- No `quail` ingredient slug exists; quail-derived findings currently have no ingredient routing destination. Missing-slug proposal: add `[[ingredients/quail]]` if quail volume in the corpus justifies it. The current page lists only `chicken` in `ingredients:` because that is the only quail-or-chicken ingredient slug presently available.
- Local commercial producers named in the source (Etimad, Shemal) are aggregated to "local Iraqi commercial chicken producer A/B" in Key numbers per Part 12. Brazilian and Turkish refer to country of origin, not brand, and are retained.
- XRF detection limits, reference-material recoveries, and matrix-spike validation are not reported in the source. The 0.00 Pb values for local chicken, quail meat, and quail eggs are best read as below the working XRF detection threshold rather than as confirmed absence.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [5292cf3f6](https://github.com/paleofoundation/heavymetalindex/commit/5292cf3f6) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [64af12214](https://github.com/paleofoundation/heavymetalindex/commit/64af12214) | 2026-05-25 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
