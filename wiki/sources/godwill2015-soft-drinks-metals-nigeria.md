---
type: source
raw_handle: MFK_determination-of-some-soft-drink-constituents
cite_key: godwill2015-soft-drinks-metals-nigeria
title: "Determination of some soft drink constituents and contamination by some heavy metals in Nigeria"
authors: ["Engwa Azeh Godwill", "Ihekwoaba Cynthia Jane", "Ilo Uchenna Scholastica", "Unaegbu Marcellus", "Ayuk L. Eugene", "Osuji Amarachukwu Gloria"]
year: 2015
publication: "Toxicology Reports"
doi: 10.1016/j.toxrep.2015.01.014
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_may31_cat05_beverages/cat05_beverages/Determination of Some Soft Drink Constituents and Contamination by Some Heavy Metals in Nigeria.pdf"
raw_sha256: "ace27989783a8b3565a4043754c633f8054d45bcb2a493645c1740b861d5a0f2"
access_url: "https://doi.org/10.1016/j.toxrep.2015.01.014"
metals: [Cd, Pb, tHg]
ingredients: ["[[ingredients/beverages]]", "[[ingredients/soft-drink-bases]]", "[[ingredients/fruit-juice]]"]
products: ["[[products/category-5-beverages]]", "[[products/soft-drinks-carbonated-beverages]]", "[[products/fruit-juices-non-apple]]"]
matrices: [beverage, soft-drink, fruit-juice]
jurisdictions: [NG]
near_duplicates: []
sample_n: 26
sample_population: "Twenty-six soft-drink and juice samples purchased from local grocery stores in Enugu, Enugu State, Nigeria; sample names are omitted from this source page under the brand firewall."
updated: 2026-06-09
---

# Godwill et al. 2015 - Soft-drink heavy metals in Nigeria

## Overview

Godwill and colleagues measured cadmium, lead, and total mercury in 26 Nigerian soft-drink and juice samples purchased from local grocery stores in Enugu, Enugu State. Heavy metals were quantified by atomic absorption spectrophotometry after nitric-acid digestion. The paper reports lead in all samples, mercury in most samples, and cadmium in one sample, with all concentration units preserved as `mg/L`.

## Key numbers

- Sample frame: `26` soft-drink and juice samples purchased from local grocery stores in Enugu, Enugu State, Nigeria.
- Cadmium: Table 3 reports cadmium as detectable in `1` of `26` samples at `0.149 mg/L`; the remaining `25` samples are reported as `ND`. Table 3 reports Cd mean `0.0057 mg/L` and S.D. `0.029`.
- Lead: Table 3 reports lead in all `26` samples, with values from `0.171 mg/L` to `3.392 mg/L`; the abstract/results prose summarizes this as `0.17` to `3.39 mg/L` with a mean of `0.8`, while Table 3 reports mean `0.81 mg/L` and S.D. `0.74`.
- Total mercury: Table 3 reports total mercury as `ND` in `4` of `26` samples and quantified in `22` samples. Table 3 quantified values span `0.069 mg/L` to `11.325 mg/L`, with mean `2.08 mg/L` and S.D. `3.08`. The abstract/results prose instead summarizes the range as `0.29` to `11.32 mg/L`; the table values are preserved here and the mismatch is flagged in Verification notes.
- Table 3 comparison values are reported as MCLG/MCL `0.005`/`0.005 mg/L` for cadmium, `0.00`/`0.015 mg/L` for lead, and `0.002`/`0.002 mg/L` for mercury.
- The paper also reports pH values from `2` to `5` in Table 2, with mean pH `3.62` and S.D. `0.75`; acid levels ranged from `3.26 g/L` to `13.06 g/L`, with mean `10.91 g/L` and S.D. `2.36`.

## Methods (brief)

The authors digested `25 ml` of each beverage sample with `10 ml` of `69%` concentrated nitric acid, evaporated the mixture until brown fumes disappeared, diluted/concentrated the digest, made up the final volume to `50 ml`, filtered it, and analyzed the solution by atomic absorption spectrophotometer using a Varian AA240 model. Calibration solutions were prepared from `1000 ppm` stock standards, and absorbance was measured at `228.8`, `283.3`, and `253.7 nm` for cadmium, lead, and mercury respectively. The paper reports total cadmium, total lead, and total mercury only; mercury is not speciated into methylmercury or inorganic mercury. It does not report LOD/LOQ values beyond using `ND` in Table 3.

## Implications

Certification (HMTc): This is direct occurrence evidence for Nigerian-market finished beverages, especially the `soft-drinks-carbonated-beverages` and `fruit-juices-non-apple` product families. The data are exploratory, small-n, and brand-named in the original table, so this source page keeps the occurrence signal at product-category level and does not reproduce brand-by-brand values.

Courses: The paper is useful for teaching why beverage occurrence values must preserve liquid units (`mg/L`) and why a source-internal table/prose mismatch should be flagged rather than silently harmonized.

App: The source can contribute Cd, Pb, and tHg occurrence context for `beverages`, `soft-drink-bases`, and `fruit-juice` ingredient profiles in the Nigerian market.

## Wiki pages this source may touch

- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury-total]]
- [[ingredients/beverages]]
- [[ingredients/soft-drink-bases]]
- [[ingredients/fruit-juice]]
- [[products/category-5-beverages]]
- [[products/soft-drinks-carbonated-beverages]]
- [[products/fruit-juices-non-apple]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/mfk_june8_565.txt`; the abstract, Materials and methods, Results, Table 2, Table 3, Discussion, and Conclusion were checked against this page.
- DOI `10.1016/j.toxrep.2015.01.014`, raw handle `MFK_determination-of-some-soft-drink-constituents`, and cite-key path the linked reference record were checked before creation; no existing source page was found.
- Numbers in Key numbers are copied from Table 2, Table 3, the abstract, and Results without unit conversion. The mercury range discrepancy is source-internal: Table 3 includes quantified values below `0.29 mg/L`, while the abstract/results prose states `0.29` to `11.32 mg/L`.
- Speciation: the paper reports cadmium, lead, and mercury by AAS with no species separation. Mercury is therefore recorded as `tHg`, not MeHg.
- Brand firewall: the original table lists named beverages. This page omits sample names and reports only aggregate/category-level findings.
- source metadata slugs were checked against the editorial record; `beverage` and `soft-drink` are matrix descriptors rather than product or ingredient slugs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added |
| [50de6ab217](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab217) | 2026-07-27 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
