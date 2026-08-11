---
type: source
raw_handle: MFK_determination-of-heavy-metals-and-essential-elements-in
cite_key: ciftci2023-nasal-sprays-drops-metals
title: "Determination of heavy metals and essential elements in nasal sprays and drops (Saline/Sea Water) and evaluation in terms of toxicity"
authors: [Ciftci TD]
year: 2023
publication: "Environmental Science and Pollution Research"
doi: 10.1007/s11356-023-29133-0
access_url: "https://doi.org/10.1007/s11356-023-29133-0"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8/New Folder With Items 3/Determination-of-heavy-metals-and-essential-elements-in-nasal-sprays-and-drops-Saline-Sea.pdf"
raw_sha256: "a18932754afbd03728682a8a214f8d52a14c23cec5b50c42040f16efb2d94abc"
metals: [Al, Sb, tAs, Cd, Cr, Co, Cu, Fe, Pb, Mn, Ni, Zn]
ingredients: []
products: []
matrices: [nasal-spray, saline-solution, sea-water-solution, ocean-water-solution]
jurisdictions: []
near_duplicates: []
sample_n: 22
sample_population: "Twenty-two saline, sea-water, or ocean-water nasal spray/drop samples sold as pharmacy products; the extracted text does not report brand names or a clear market country."
sampling_locations: ["not reported in extracted text"]
sampling_year_range: "not reported in extracted text"
updated: 2026-06-09
---

# Ciftci 2023 - metals in saline and sea-water nasal sprays

## Overview

Ciftci measured heavy metals and essential elements in `22` saline, sea-water, or ocean-water nasal spray/drop products by ICP-MS. The paper reports product-liquid concentrations in `µg/L`; it is a finished-product occurrence source, but the current taxonomy has no nasal-spray product slug. Arsenic is reported as total arsenic from elemental ICP-MS, not inorganic arsenic.

## Key numbers

- Sample frame: `22` saline samples coded A1-L2; each sample result in Table 4 is reported as mean ± standard deviation with `n = 6`.
- Aluminum ranged from `ND` to `106.68 ± 6.22 µg/L` in sample A2; no measured aluminum concentration exceeded the cited `200.00 µg/L` drinking-water comparator.
- Antimony ranged from `0.12` to `8.74 µg/L`; sample G1 was `8.74 ± 1.52 µg/L`, and sample G2 was `4.63 ± 0.77 µg/L`.
- Total arsenic ranged from `0.05` to `2.55 µg/L`; the highest table value was sample G1 at `2.55 ± 1.16 µg/L`.
- Cadmium was `ND` in every sample; the paper gives the cadmium limit of detection as `0.04 µg/L`.
- Chromium ranged from `0.21` to `6.56 µg/L`; sample B1 was `6.56 ± 0.41 µg/L`.
- Copper ranged from `0.04 ± 0.01 µg/L` in D2 to `606 ± 38 µg/L` in H2; H1 was also high at `588 ± 14 µg/L`, with G1 and G2 at `267 ± 5` and `276 ± 11 µg/L`.
- Lead ranged from `ND` to `1.98 ± 0.19 µg/L`; A1 and A2 were `1.98 ± 0.19` and `1.87 ± 0.04 µg/L`.
- Manganese ranged from `ND` to `17.57 ± 8.60 µg/L` in L2; L1 was `16.99 ± 7.97 µg/L`.
- Nickel was `ND` in every sample; the paper gives the nickel limit of detection as `0.05 µg/L`.
- Zinc ranged from `ND` to `128.34 ± 10.44 µg/L`; D2 carried the maximum table value.
- Non-routing elements: boron ranged from `129 ± 43` to `10057 ± 648 µg/L`; silicon ranged from `355 ± 31` to `3106 ± 270 µg/L`.

## Methods (brief)

The author analyzed `Al, Sb, As, B, Cd, Cr, Co, Cu, Fe, Mn, Ni, Si, and Zn` using an Agilent 7900 quadrupole ICP-MS. Calibration standards were `1.0`, `5.0`, `20.0`, `50.0`, `250.0`, and `500.0 µg/L`. Quality checks included standard addition and a seawater certified reference material. Standard-addition recoveries ranged from `83%` to `115%`; CRM recoveries ranged from `82%` to `108%`, including arsenic `87 ± 2%`, cadmium `85 ± 2%`, lead `88 ± 4%`, and zinc `83 ± 2%`.

## Implications

Certification (HMTc): This is occurrence evidence for a finished nasal spray/drop liquid, but the HMI closed product vocabulary currently has no nasal-spray row. The page is therefore held as source evidence with products left empty until a respiratory/nasal product category exists.

Courses: The paper is a clear example of why route of exposure matters: the author compares product-liquid values to drinking-water limits but also states that oral-reference-dose comparisons are not directly accurate for nasal administration.

App: The source can support a product-detail note for saline or sea-water nasal sprays if such a product row is added, especially for tAs, Sb, Cu, Pb, and Al screening values in `µg/L`.

## Wiki pages this source may touch

- [[metals/arsenic-total]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/copper]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/hmi_row_1541.txt`; Table 4, Table 5, Table 6, and the Results bullets were re-read before writing.
- Identity checks before creation: DOI `10.1007/s11356-023-29133-0`, raw handle `MFK_determination-of-heavy-metals-and-essential-elements-in`, raw SHA-256 `a18932754afbd03728682a8a214f8d52a14c23cec5b50c42040f16efb2d94abc`, and cite key `ciftci2023-nasal-sprays-drops-metals` were searched in `wiki/sources/` and evidence files; no existing source page was found.
- Units are preserved as `µg/L`; no conversion to ppb or mg/L was made.
- Speciation: ICP-MS measured elemental arsenic after direct liquid analysis. This page labels arsenic as `tAs` and does not infer inorganic arsenic.
- Brand firewall: the source uses sample codes only; no brand names are reported or attached to values.
- Closed-vocabulary note: no nasal-spray product slug exists in `docs/gpt-collaboration/taxonomy-snapshot.md`, so `products: []` is intentional and the matrix terms are descriptive.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
