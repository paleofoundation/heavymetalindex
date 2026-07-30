---
type: source
raw_handle: AUTO_ing-mushrooms-thg-2021-10-1007-s11356-021-14740-6
cite_key: hanc2021-amanita-muscaria-hg-se
title: "Mercury and selenium in developing and mature fruiting bodies of Amanita muscaria"
authors: [Hanc A, Fernandes AR, Falandysz J, Zhang J]
year: 2021
publication: "Environmental Science and Pollution Research"
doi: "10.1007/s11356-021-14740-6"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-mushrooms-thg_2021_10-1007-s11356-021-14740-6.pdf"
metals: [tHg, Se]
ingredients: ["[[ingredients/mushrooms]]", "[[ingredients/wild-mushrooms]]"]
products: ["[[products/wild-mushrooms]]"]
matrices: [wild-mushrooms, amanita-muscaria, dried-mushroom-caps, dried-mushroom-stipes]
jurisdictions: [PL]
near_duplicates: []
sample_n: 181
sample_population: "Amanita muscaria fruiting bodies collected in six developmental-stage pools from one Pomeranian forest site in Poland in September 2015; stage pools contained 54, 27, 16, 30, 22, and 32 specimens, separated into caps and stipes."
updated: 2026-06-01
---

# Hanc et al. 2021 - Mercury and selenium in Amanita muscaria

Hanc and colleagues measured total mercury and selenium in wild Amanita muscaria fruiting bodies from a single forest site in Pomerania, Poland, separating caps and stipes across six developmental stages. The source is useful for wild-mushroom mercury context because it reports dry-weight total Hg ranges by anatomical part and growth stage, with selenium measured in the same composites. It is not methylmercury occurrence evidence and does not measure cooked, boiled, or pickled finished products.

## Key numbers

The authors collected 181 fruiting bodies in one morning and grouped them into six developmental-stage composites: S-1 n=54, S-2 n=27, S-3 n=16, S-4 n=30, S-5 n=22, and S-6 n=32. Caps and stipes were separated before drying and analysis.

The abstract and Table 2 report these dry-weight occurrence ranges:

| Matrix | Total Hg (mg/kg dry weight) | Se (mg/kg dry weight) |
|---|---:|---:|
| A. muscaria caps, six stages | 0.58-0.74 | 8.3-11 |
| A. muscaria stipes, six stages | 0.33-0.44 | 2.2-4.3 |

Selected Table 2 stage values:

| Stage and part | n specimens in stage pool | Total Hg (mg/kg dw) | Se (mg/kg dw) |
|---|---:|---:|---:|
| S-1 cap | 54 | 0.74 +/- 0.00 | 11 +/- 0.0 |
| S-2 cap | 27 | 0.66 +/- 0.01 | 9.1 +/- 0.4 |
| S-3 cap | 16 | 0.67 +/- 0.01 | 8.3 +/- 0.2 |
| S-4 cap | 30 | 0.58 +/- 0.00 | 8.6 +/- 0.2 |
| S-5 cap | 22 | 0.62 +/- 0.01 | 11 +/- 0.0 |
| S-6 cap | 32 | 0.74 +/- 0.04 | 9.8 +/- 0.3 |
| S-1 stipe | 54 | 0.44 +/- 0.01 | 4.3 +/- 0.2 |
| S-2 stipe | 27 | 0.34 +/- 0.01 | 2.8 +/- 0.1 |
| S-3 stipe | 16 | 0.33 +/- 0.01 | 2.2 +/- 0.2 |
| S-4 stipe | 30 | 0.34 +/- 0.01 | 2.5 +/- 0.1 |
| S-5 stipe | 22 | 0.36 +/- 0.01 | 4.1 +/- 0.2 |
| S-6 stipe | 32 | 0.38 +/- 0.01 | 3.4 +/- 0.2 |

The authors state that selenium occurs at almost an order of magnitude higher concentration than total Hg in this species. They also state that Hg and Se were lowest during maximum sporocarp growth and that processing losses during boiling or pickling were not measured.

## Methods (brief)

Specimens were collected from the Kolbudy forest district near Pomlewo, Pomeranian Voivodeship, Poland, in late September 2015. Fruiting bodies were cleaned at collection, sorted visually into six developmental stages, separated into caps and stipes, dried at 65 C to constant mass, and ground. Total Hg was measured by direct thermal decomposition cold-vapor AAS using an MA-2000 mercury analyzer. Selenium was measured after microwave-assisted nitric-acid digestion by ICP-MS on an ELAN DRC II. The authors used mushroom powder control materials CM CS-M-3 and CRM CS-M-4 and report duplicate Se and triplicate Hg analysis.

## Implications

- Product and ingredient routing: Adds direct dry-weight total-Hg and Se context for wild mushrooms, especially cap-versus-stipe and developmental-stage variation in A. muscaria.
- Basis handling: Values are dry-weight concentrations in dried anatomical parts. They should not be pooled with wet-weight fresh or pickled mushroom values unless a conversion is explicitly logged.
- Speciation: The occurrence measurement is total Hg. The paper discusses methylmercury literature, but this study does not quantify MeHg in the sampled fruiting bodies.
- App: Supports a wild-mushroom mercury context flag and a processing data gap: the authors explicitly state that boiling or pickling losses for Hg and Se were not measured.

## Wiki pages this source may touch

- [[ingredients/mushrooms]]
- [[ingredients/wild-mushrooms]]
- [[products/wild-mushrooms]]
- [[metals/mercury]]
- [[metals/mercury-total]]

## Verification notes

- Selenium is retained in `metals:` because the source measures Se directly and existing source pages use Se as an element route, but selenium is not one of the ten HMTc heavy-metal analytes.
- The source uses "Hg" without speciation for its own measurements and describes CV-AAS total Hg analysis. This page therefore routes measured mercury as `tHg`, not `MeHg`.
- The PDF's CC BY 4.0 license statement appears in the Open Access declaration.
- No consumer-brand names are present. Method vendor names are laboratory-equipment identifiers and are permitted in Methods.
- `products: []` is deliberate: the paper measured raw wild A. muscaria anatomical parts, not canned, pickled, or other processed mushroom product rows currently present in `wiki/products/`.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [c3909aad7](https://github.com/paleofoundation/heavymetalindex/commit/c3909aad7) | 2026-06-02 | major | 1 section added |
| [6c3798180](https://github.com/paleofoundation/heavymetalindex/commit/6c3798180) | 2026-06-02 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
