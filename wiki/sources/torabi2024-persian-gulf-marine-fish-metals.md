---
type: source
raw_handle: MFK_health-risk-assessment-of-heavy-metals-in-marine
cite_key: torabi2024-persian-gulf-marine-fish-metals
title: "Health Risk Assessment of Heavy Metals in Marine Fish Caught from the Northwest Persian Gulf"
authors: [Torabi S, Gholizadeh M, Yazarlo M, Riahi Z]
year: 2024
publication: "Biological Trace Element Research"
doi: 10.1007/s12011-023-03946-z
access_url: "https://doi.org/10.1007/s12011-023-03946-z"
source_type: peer-reviewed
evidence_tier: C
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8/New Folder With Items 3/Health-Risk-Assessment-of-Heavy-Metals-in-Marine-Fish-Caught-from-the-Northwest-Persian-Gulf.pdf"
raw_sha256: "c4c8744f2490c5f09df3f72fcaa771f0aafb55e5de1a627e9703b80eb62848fa"
metals: [Ni, Zn, Cu, Pb, Cd]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/fish]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/fish-marine-predatory]]", "[[products/fish-marine-non-predatory]]"]
matrices: [marine-fish, fish-muscle, wet-weight]
jurisdictions: [IR]
near_duplicates: []
sample_n: 60
sample_population: "Twenty fish from each of three marine species (Psettodes erumei, Sphyraena jello, and Sillago sihama) collected from six main ports in Bushehr province, northwest Persian Gulf, in spring 2022."
sampling_locations: ["Bushehr province, northwest Persian Gulf, Iran"]
sampling_year_range: "2022"
updated: 2026-06-09
---

# Torabi 2024 - metals in marine fish from the northwest Persian Gulf

## Overview

Torabi and colleagues measured nickel, zinc, copper, lead, and cadmium in muscle tissue from `60` marine fish caught along the northwest Persian Gulf. The abstract and Discussion report aggregate mean concentrations in `µg/g wet weight`, while Table 3 prints much larger species-level values and labels them as `milligrams per gram of wet weight`. Because that table/unit conflict is substantial, this page preserves the source text without reconciling the values.

## Key numbers

- Sample frame: `20` specimens each of *Psettodes erumei*, *Sphyraena jello*, and *Sillago sihama*, collected in spring `2022` from six main ports in Bushehr province.
- Abstract/Discussion aggregate means: Ni `1.88 ± 0.07 µg/g`, Zn `27.16 ± 8.11 µg/g`, Cu `11.55 ± 4.12 µg/g`, Pb `14 ± 0.06 µg/g`, and Cd `0.19 ± 0.03 µg/g wet weight`.
- Table 3 species values are printed under the caption "based on milligrams per gram of wet weight": *P. erumei* Cd `18.06 ± 0.0`, Pb `84.48 ± 0.0`, Cu `60.34 ± 2.1`, Zn `32.69 ± 2.3`, and Ni `80.3 ± 0.0`.
- Table 3 also prints *S. jello* Cd `4.02 ± 0.0`, Pb `2.01 ± 0.0`, Cu `90.04 ± 0.0`, Zn `10.08 ± 6.10`, and Ni `54.58 ± 1.0`.
- Table 3 prints *S. sihama* Cd `5.02 ± 0.0`, Pb `9.01 ± 0.0`, Cu `53.12 ± 0.0`, Zn `60.44 ± 30.8`, and Ni `30.14 ± 0.0`.
- Figure 2 is captioned "Mean concentrations (µg metal/g dw) of heavy metals in the sampling sites", introducing a second basis/unit label that does not match either the abstract's wet-weight means or Table 3's "milligrams per gram" caption.
- The source states that risk indices were less than one for the studied metals and fish species, but this page does not convert those statements into HMTc threshold claims.

## Methods (brief)

Fish muscle tissue was dissected after total length and weight measurements. The Methods describe `3 g` fish muscle tissue wet weight digested with nitric acid/perchloric acid, filtered through Whatman filter paper, and analyzed for metals by ICP-OES. The paper estimates daily and weekly intakes and target hazard quotients for adults and children.

## Implications

Certification (HMTc): This is primary fish occurrence evidence from Iran, but it is C-tier for pooling because the paper contains severe unit and scale inconsistencies between the abstract, Table 3, and Figure 2.

Courses: The paper is a good audit example for seafood occurrence data: a peer-reviewed article can still have unit labels that make direct pooling unsafe until checked against the rendered PDF and, ideally, the authors' underlying data.

App: The source can provide Persian Gulf fish context for Ni, Zn, Cu, Pb, and Cd, with a prominent source-quality warning.

## Wiki pages this source may touch

- [[ingredients/seafood]]
- [[ingredients/fish]]
- [[products/seafood]]
- [[products/fresh-fish]]
- [[products/fish-marine-predatory]]
- [[products/fish-marine-non-predatory]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/hmi_row_1546.txt`; Table 3 and Figure 2 were also checked against rendered PDF pages because the units conflict.
- Identity checks before creation: DOI `10.1007/s12011-023-03946-z`, raw handle `MFK_health-risk-assessment-of-heavy-metals-in-marine`, raw SHA-256 `c4c8744f2490c5f09df3f72fcaa771f0aafb55e5de1a627e9703b80eb62848fa`, and cite key `torabi2024-persian-gulf-marine-fish-metals` were searched in `wiki/sources/` and evidence files; no existing source page was found.
- Units are preserved exactly as printed: aggregate means are in `µg/g wet weight`; Table 3 is described with the paper's `milligrams per gram of wet weight` caption; Figure 2 is noted as `µg metal/g dw`.
- Speciation: the paper measured total elemental Ni, Zn, Cu, Pb, and Cd in fish muscle. It did not measure Hg, MeHg, arsenic, or metal speciation.
- Brand firewall is not relevant; samples are wild fish species and ports, not brands.
- Source-quality note: no averaging, unit conversion, or table correction was performed because the source itself is internally inconsistent.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [b4580e424](https://github.com/paleofoundation/heavymetalindex/commit/b4580e424) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
