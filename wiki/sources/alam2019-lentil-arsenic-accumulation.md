---
type: source
raw_handle: MFK_s41598-019-45855-z
cite_key: alam2019-lentil-arsenic-accumulation
title: "Arsenic accumulation in lentil (Lens culinaris) genotypes and risk associated with the consumption of grains"
authors: [Alam MZ, Hoque MA, Ahammed GJ, McGee R, Carpenter-Boggs L]
year: 2019
publication: "Scientific Reports"
doi: "10.1038/s41598-019-45855-z"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/s41598-019-45855-z.pdf"
raw_sha256: "c45cbdc1d01a2713f960e8f1a7ee0381c61937e3065e356f51f9dd44df23c055"
access_url: "https://doi.org/10.1038/s41598-019-45855-z"
metals: [tAs]
ingredients: ["[[ingredients/lentils]]", "[[ingredients/legumes]]"]
products: ["[[products/legumes-pulses-other]]"]
matrices: [lentil, legume-grain, grain, dry-weight, controlled-pot-study, soil-to-crop]
jurisdictions: [US]
near_duplicates: []
sample_n: 81
sample_population: "Controlled greenhouse pot experiment at Washington State University using three lentil genotypes (pardina, red chief, and precoz), three arsenic treatments, three replications, and week 6, week 10, and week 13 sampling points."
updated: 2026-06-08
---

# Alam 2019 - Lentil arsenic accumulation

## Overview

Alam and colleagues measured total arsenic uptake from arsenic-treated peat moss into lentil roots, shoots, pods, and grains. The study is a controlled greenhouse soil-to-crop transfer experiment rather than a market occurrence survey. The routeable food values are the total arsenic values reported for lentil grains at weeks 10 and 13.

## Key numbers

The experimental treatments were control (`0 added arsenic`), `A3 = 3.0 mg As kg−1 peat moss`, and `A6 = 6.0 mg As kg−1 peat moss`. Three varieties (`pardina`, `red chief`, and `precoz`) were grown with three replications at week `6`, `10`, and `13`, giving a total of `81` pots.

Table 3 reports arsenic accumulation in `mg kg−1` in root, shoot, and grain:

| Variety | Treatment | Week 10 grain As | Week 13 grain As |
| --- | --- | ---: | ---: |
| Pardina | Control | `0.000` | `0.000` |
| Pardina | A3 | `0.013` | `0.009` |
| Pardina | A6 | `0.003` | `0.005` |
| Red chief | Control | `0.000 b` | `0.000 b` |
| Red chief | A3 | `0.0007b` | `0.005 a` |
| Red chief | A6 | `0.005 a` | `0.006 a` |
| Precoz | Control | `0.000` | `0.000` |
| Precoz | A3 | `0.0007` | `0.023` |
| Precoz | A6 | `0.004` | `0.032` |
| Treatment summary | Control | `0.000 a` | `0.000 a` |
| Treatment summary | A3 | `0.0092 ab` | `0.012 b` |
| Treatment summary | A6 | `0.0136 b` | `0.014 b` |
| Variety summary | Pardina | `0.005 a` | `0.0048 a` |
| Variety summary | Red chief | `0.0017 a` | `0.0038 b` |
| Variety summary | Precoz | `0.0158 a` | `0.0185 a` |

The Results text states that grain arsenic was lower than root and shoot arsenic during weeks `10` and `13`. It also states that arsenic in grains increased by `20%` and `40%` in red chief and precoz with `6 mg As kg−1 peat moss` compared with `3 mg As kg−1 peat moss` after week `13`, and that arsenic in grain was `17%` higher under `6 mg As kg−1 peat moss` compared with `3 mg As kg−1 peat moss` after week `13`.

Method detection limit for total arsenic was `0.02 µg/l or ppb (parts per billion)`.

## Methods (brief)

The pot experiment used arsenic-free peat moss as the growing medium and sodium arsenate dibasic heptahydrate as the arsenic source. Lentil seeds were sown in pots on `13th March, 2014`; after emergence, `5` seedlings were kept per pot. Root, shoot, pod, and grain samples were collected at weeks `6`, `10`, and `13`, dried for `72 hours` at `55-65 °C`, ground with liquid nitrogen, and sieved through `250 µ mesh`. Root, shoot, and grain samples were digested with concentrated nitric acid and perchloric acid. Total arsenic was measured by flow-injection hydride-generation atomic absorption spectrophotometry (`FI-HG-AAS`, Perkin Elmer A Analyst 400-USA), with three replicate measurements per digested sample and NIST SRM checks.

## Implications

This source provides experimental soil-to-lentil transfer evidence for total arsenic in edible lentil grains. It supports legume/pulse routing as supply-chain evidence, but it should not be treated as a market distribution for lentil products because arsenic treatments were deliberately imposed in a controlled pot study. No inorganic arsenic speciation was measured, so the grain values remain total arsenic.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; title/byline, abstract, Results grain-accumulation section, Tables 2-3, conclusion, methods, and license text were checked in `/tmp/f3_unrepresented_texts/s41598-019-45855-z.txt`.
- DOI `10.1038/s41598-019-45855-z`, raw handle `MFK_s41598-019-45855-z`, and cite-key searches found no existing source page before creation.
- Units are preserved as source-reported `mg kg−1`, `mg As kg−1 peat moss`, and `µg/l or ppb`; no conversion was performed.
- Speciation: the source measured total arsenic by FI-HG-AAS. It discusses inorganic arsenic toxicity in the background, but the lentil values are not speciated.
- Brand firewall: no sampled food product brands were reported.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; lentil is routed through the existing lentils/legumes ingredients and the broad legumes-pulses product row.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
