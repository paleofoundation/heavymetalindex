---
type: source
raw_handle: MFK_biosensors-13-00523-v2
cite_key: dai2023-resazurin-pad-heavy-metal-toxicity
title: "A Dye-Assisted Paper-Based Assay to Rapidly Differentiate the Stress of Chlorophenols and Heavy Metals on Enterococcus faecalis and Escherichia coli"
authors: ["Wanqing Dai", "Bibi Inumbra", "Po Yu Wong", "Alma Sarmiento", "Ying Yau", "Jie Han", "Guozhu Mao", "Yung-Kang Peng", "Jian Lin Chen"]
year: 2023
publication: "Biosensors"
doi: "10.3390/bios13050523"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 2 Manual Fetches/biosensors-13-00523-v2.pdf"
metals: [Cu, Zn, Pb]
ingredients: []
products: []
matrices: [metal-spiked-bacterial-culture, resazurin-paper-based-analytical-device, enterococcus-faecalis, escherichia-coli]
jurisdictions: [HK]
near_duplicates: []
sample_n: 3
sample_population: "Three parallel resazurin-PAD data sets for each heavy-metal condition using Enterococcus faecalis and Escherichia coli cultures spiked with copper, zinc, or lead ions at literature IC50-level concentrations."
updated: 2026-06-02
---

# Dai et al. 2023 - Resazurin PAD assay for heavy-metal toxicity

## Overview

Dai and colleagues integrated a resazurin reduction assay into paper-based analytical devices (PADs) to compare bacterial toxicity responses to chlorophenols and heavy-metal ions. This is testing-method evidence, not occurrence evidence: the heavy-metal results use synthetic copper, zinc, and lead spikes in bacterial culture, not environmental, food, ingredient, or product samples.

## Key numbers

### Heavy-metal spike concentrations

For the heavy-metal feasibility experiment, copper, zinc, and lead were selected as proxies and spiked into bacterial culture at final metal-ion concentrations chosen from literature IC50 values:

| Metal ion | Salt used | Final metal-ion concentration |
| --- | --- | ---: |
| Cu2+ | Copper(II) sulphate pentahydrate | 7.00 mg/L |
| Zn2+ | Zinc(II) acetate | 10.00 mg/L |
| Pb2+ | Lead(II) nitrate | 18.00 mg/L |

Thirty microliters of each metal-spiked bacterial culture were dropped onto the resazurin-integrated PAD. The same concentrations were also used in the conventional growth-curve comparison.

### PAD kinetic constants

Table 2 reports pseudo-first-order kinetic constants for resazurin-to-resorufin (`k1`) and resorufin-to-dihydroresorufin (`k2`) fitted to Equation 1. Values are mean +/- SD from three parallel data sets. The E. faecalis fit used n = 9 time points; the E. coli fit used n = 13 time points.

| Bacteria | Condition | k1 | k2 | R2 |
| --- | --- | ---: | ---: | ---: |
| E. faecalis | Positive control | 0.0366 +/- 0.0023 | 7.10e-21 +/- 2.34e-3 | 0.977 |
| E. faecalis | Pb | 0.0084 +/- 0.0004 | 8.45e-3 +/- 3.97e-3 | 0.991 |
| E. faecalis | Zn | 0.0076 +/- 0.0001 | 7.62e-3 +/- 1.48e-4 | 0.983 |
| E. faecalis | Cu | 0.0074 +/- 0.0001 | 7.44e-3 +/- 1.02e-4 | 0.982 |
| E. coli | Positive control | 0.00397 +/- 0.0000 | 4.07e-3 +/- 2.59e-5 | 0.976 |
| E. coli | Pb | 0.00181 +/- 0.0003 | -3.00e-2 +/- 1.17e-2 | 0.914 |
| E. coli | Zn | 0.00199 +/- 0.0001 | -4.52e-3 +/- 8.10e-4 | 0.813 |
| E. coli | Cu | 0.00250 +/- 0.0003 | 7.35e-3 +/- 9.23e-3 | 0.944 |

For E. faecalis, all three heavy-metal spikes slowed the color change relative to the positive control; the positive control reached equilibrium at 30 minutes, while the metal-spiked groups did not reach equilibrium during the recording time. The authors state that the three metals were all at IC50 levels and that the IC50 order was Cu2+ < Zn2+ < Pb2+, corresponding to toxicity order Cu2+ > Zn2+ > Pb2+. The conventional growth-curve method did not detect the heavy-metal toxicity for E. faecalis or E. coli under the same concentrations, while the PAD color response detected toxicity within 40 minutes.

### Bacterial-species context

The paper also reports that E. faecalis reduced resazurin faster than E. coli in the bacterial-density experiments. Across positive-control bacterial densities, E. faecalis k1 values were 0.035 to 0.059, while E. coli positive-control k1 values were 0.0037 to 0.0041. The authors attribute the slower E. coli kinetics to Gram-negative cell-wall and outer-membrane structure slowing dye diffusion into cells.

## Methods (brief)

The authors wax-printed PADs on chromatography paper, added resazurin, and spotted bacterial cultures of E. faecalis or E. coli. PAD color change was recorded by smartphone video and analyzed as hue change over time. Hue values were fitted to a two-step resazurin reduction model to estimate `k1` and `k2`. Heavy-metal stress tests used metal-spiked bacterial cultures at the concentrations above, with BHI medium and bacteria-only positive controls. A conventional growth-curve assay in BHI broth at 37 C was run as the comparison method.

## Implications

Certification: This source does not support HMTc product limits or occurrence distributions. Its metal values are synthetic IC50-level assay spikes, not measured concentrations in consumer products or environmental samples.

Courses: Useful testing-method example for distinguishing total concentration measurement from biological toxicity response. The PAD does not identify unknown field concentrations; it reads bacterial metabolic stress under known spikes.

App: Route to testing context and to the Cu, Zn, and Pb metal pages as a screening-method source. Do not route the spike concentrations to water, food, or product occurrence pages.

## Wiki pages this source may touch

- [[testing/index]]
- [[metals/copper]]
- [[metals/zinc]]
- [[metals/lead]]

## Verification notes

The PDF has author attribution and DOI `10.3390/bios13050523`; no DOI conflict was observed. The source reports Cu2+, Zn2+, and Pb2+ spike concentrations in bacterial culture but no original environmental, food, ingredient, product, or human exposure measurements. Brand and supplier names for reagents and paper are omitted under the brand firewall because they do not identify contaminated products.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [315a7b8a2](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8a2) | 2026-06-02 | major | 1 section added |
| [5d5a7ad52](https://github.com/paleofoundation/heavymetalindex/commit/5d5a7ad52) | 2026-06-02 | major | 8 sections added; narrative text revised |
<!-- END: hmi-page-history -->
