---
type: source
raw_handle: AUTO_ing-cumin-tas-2022-10-53424-balikesirsbd-1160866
cite_key: mercan-yucel2022-van-spices-heavy-metals
title: "Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals"
authors: ["Mercan Yucel U"]
year: 2022
publication: "Balikesir Health Sciences Journal"
doi: "10.53424/balikesirsbd.1160866"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC 4.0"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-cumin-tas_2022_10-53424-balikesirsbd-1160866.pdf
metals: [Ni, tAs, Cd, Pb, Al]
ingredients: ["[[ingredients/spices]]", "[[ingredients/herbs-and-spices]]", "[[ingredients/cumin]]", "[[ingredients/black-pepper]]"]
products: ["[[products/spices]]", "[[products/condiments-general]]"]
matrices: [spices]
jurisdictions: [TR]
near_duplicates: []
sample_n: 60
sample_population: "60 unpackaged spice samples sold in Van Province, Turkey: black pepper n=20, cumin n=20, and red pepper n=20."
updated: 2026-06-02
---

# Mercan Yucel 2022 - Heavy metals in unpackaged spices sold in Van Province

## Overview

Mercan Yucel measured aflatoxins and heavy metals in 60 unpackaged spice samples purchased from herbal shops and markets in Van Province, Turkey. The heavy-metal portion covers black pepper, cumin, and red pepper, with 20 samples per spice analyzed by ICP-MS. Nickel, cadmium, lead, and aluminum were quantified in all three spice groups; total arsenic was detected only in cumin. Black pepper carried the highest mean Pb and Cd, cumin carried the highest mean total As and Al, and red pepper had the lowest mean Pb, Cd, and Al.

## Key numbers

### Heavy metal concentrations in spices

Table 2 reports mean +/- SD in ppm, equivalent to mg/kg for these solid spice samples.

| Spice | n | Ni (mg/kg) | tAs (mg/kg) | Cd (mg/kg) | Pb (mg/kg) | Al (mg/kg) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Black pepper | 20 | 5.08 +/- 1.28 | not detected | 0.35 +/- 0.48 | 2.47 +/- 3.51 | 392.45 +/- 247.4 |
| Cumin | 20 | 9.12 +/- 6.01 | 0.06 +/- 0.05 | 0.20 +/- 0.26 | 1.40 +/- 1.86 | 514.4 +/- 537.9 |
| Red pepper | 20 | 8.95 +/- 4.51 | not detected | 0.06 +/- 0.01 | 0.11 +/- 0.05 | 33.75 +/- 10.01 |

### Risk-assessment findings reported by the source

- Arsenic was detected only in cumin, with a mean of 0.06 mg/kg.
- The source states that Cd in black pepper and Ni in all spice samples exceeded the maximum permissible limits used by the authors.
- Against daily-intake tolerance limits, the authors state that Ni, total As, and Cd did not pose a risk, while Al in all three spice groups and Pb in black pepper exceeded the daily-intake tolerance comparators.
- The non-carcinogenic THQ exposure values were below 1 for all spice samples.
- For arsenic risk calculations, the paper applies a 3% factor to total As because it treats most tissue arsenic as organic; this source page still records the occurrence analyte as total arsenic (`tAs`) because the measurement itself is not speciated.

## Methods (brief)

The study collected 60 unpackaged spice samples from herbal shops and markets in Van Province, Turkey, with 20 samples each of black pepper, cumin, and red pepper. Aflatoxins were measured by HPLC; heavy metals were measured by ICP-MS. The heavy-metal risk assessment used an assumed spice consumption rate of 0.01 kg/day and 60 kg body weight. Reference doses used in the THQ/HI equations were listed for Al, As, Cd, Ni, and Pb.

The metal concentrations are reported as ppm in the spice matrix and are treated here as mg/kg dry/as-sold spice values. Arsenic is total As only; the paper does not provide inorganic arsenic speciation. Chromium, mercury, tin, uranium, and antimony were not measured.

## Implications

Certification: This is Turkey-market occurrence evidence for unpackaged spices and should remain jurisdiction-aware. Black pepper is the strongest Pb signal in the dataset, while cumin is the only spice with detected arsenic and the highest aluminum mean.

Courses: Useful for explaining how unpackaged retail spice surveillance can combine mycotoxin and heavy-metal testing, and for showing that risk conclusions depend on both occurrence concentrations and the intake assumptions used in THQ calculations.

App: Adds category-level Van Province values for black pepper, cumin, and red pepper. The paper samples unpackaged spices rather than named brands or packaged lots, so the data are suitable for ingredient/category risk priors rather than brand-level claims.

Microbiome: Not addressed.

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]
- [[metals/nickel]]
- [[metals/aluminum]]
- [[ingredients/spices]]
- [[ingredients/herbs-and-spices]]
- [[ingredients/cumin]]
- [[ingredients/black-pepper]]
- [[products/spices]]
- [[products/condiments-general]]

## Verification notes

- The PDF prints DOI `10.53424/balikesirsbd.1160866`, identifies the journal as Balikesir Health Sciences Journal / BAUN Health Sciences Journal, and provides a citation line for Mercan Yucel U. (2022), 11(Supplement 1): 7-14.
- The article is bilingual Turkish/English. The English abstract, Turkish abstract, and Table 2 agree on the core mean values for Ni, Cd, Pb, and Al; Table 2 provides SDs for each reported heavy-metal mean.
- `matrices: [spices]` is used rather than a packaging-specific term or a basis label. The unpackaged retail sample frame and dry/as-sold spice basis are documented in the opening prose, Key numbers, and Methods sections.
- The source reports `As` without species separation. This page uses `tAs` and links only to total arsenic, not inorganic arsenic.
- The paper does not name consumer brands. It samples unpackaged spices from shops and markets, so no brand-firewall redaction is needed.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [315a7b8a2](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8a2) | 2026-06-02 | major | 1 section added |
<!-- END: hmi-page-history -->
