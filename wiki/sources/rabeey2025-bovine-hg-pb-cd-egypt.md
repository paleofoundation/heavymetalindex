---
type: source
raw_handle: MFK_p0132-health-risk-assessment-of-heavy-metals-in-im
cite_key: rabeey2025-bovine-hg-pb-cd-egypt
title: "Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt"
authors: [Rabeey MA, Sabala RF, Zakaria AI, Sallam KI]
year: 2025
publication: "Scientific Reports"
doi: 10.1038/s41598-025-29927-x
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /04_Meat_Poultry_Seafood/04_Meat_Poultry_Seafood/P0132_Health risk assessment of heavy metals in imported frozen bovine meat.pdf"
raw_sha256: "00898019867cec01eff4bf4855ad80422a098d4ad8f2ff88cc3b88521f3d26de"
metals: [tHg, Pb, Cd]
ingredients: ["[[ingredients/beef]]", "[[ingredients/organ-meats]]", "[[ingredients/meat]]", "[[ingredients/meat-and-poultry]]"]
products: ["[[products/beef-product]]"]
matrices: [meat, beef-muscle, bovine-liver, bovine-kidney]
jurisdictions: [EG, BR, IN, US]
near_duplicates: []
sample_n: 315
sample_population: "315 imported frozen bovine samples (105 muscle, 105 liver, 105 kidney) collected from local markets in Sohag governorate, Egypt; source countries described by the authors as Brazil, India, and the USA."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# Rabeey et al. 2025 — Heavy metals in imported frozen bovine tissues, Sohag, Egypt

This study analyzed 315 imported frozen bovine samples (105 each of muscle, liver, and kidney) from local markets in Sohag, Egypt, for total mercury (tHg), lead (Pb), and cadmium (Cd) by atomic absorption spectrophotometry. The authors report frequent exceedance of their cited maximum permissible limits for Pb and Hg, while calculated dietary risk indices remained below concern thresholds for average adult Egyptian consumption rates. The core tissue pattern was muscle highest for tHg, liver highest for Pb, and kidney highest for Cd.

## Key numbers

All concentrations are reported as mg/kg wet weight. The source table labels the same basis as µg/g wet weight; 1 µg/g = 1 mg/kg.

**Table 1 concentrations and exceedance rates**

| Metal | Tissue | n | Range | Mean ± SE | Author-cited MPL | Exceeding MPL |
|---|---|---:|---:|---:|---:|---:|
| tHg | Muscle | 105 | 0.013-1.228 | 0.312 ± 0.034 | 0.05 | 57/105 (54.3%) |
| tHg | Liver | 105 | 0.001-1.190 | 0.273 ± 0.031 | 0.05 | 60/105 (57.1%) |
| tHg | Kidney | 105 | 0.001-0.790 | 0.167 ± 0.023 | 0.05 | 42/105 (40.0%) |
| Pb | Muscle | 105 | 0.020-1.999 | 0.684 ± 0.060 | 0.10 | 66/105 (62.9%) |
| Pb | Liver | 105 | 0.006-1.841 | 0.763 ± 0.061 | 0.50 | 63/105 (60.0%) |
| Pb | Kidney | 105 | 0.003-2.050 | 0.716 ± 0.068 | 0.50 | 57/105 (54.3%) |
| Cd | Muscle | 105 | 0.007-0.100 | 0.030 ± 0.003 | 0.05 | 24/105 (22.9%) |
| Cd | Liver | 105 | 0.010-0.390 | 0.056 ± 0.008 | 0.50 | 0/105 (0%) |
| Cd | Kidney | 105 | 0.011-0.211 | 0.073 ± 0.004 | 1.0 | 0/105 (0%) |

**Estimated dietary intake and non-cancer risk indices**

| Metal | Muscle EDI (µg/day/person) | Muscle THQ | Liver EDI (µg/day/person) | Liver THQ |
|---|---:|---:|---:|---:|
| tHg | 2.215 | 0.316 | 0.65 | 0.0928 |
| Pb | 4.856 | 0.433 | 1.82 | 0.1625 |
| Cd | 0.213 | 0.00304 | 0.174 | 0.00248 |
| Combined | — | TTHQ 0.752 | — | TTHQ 0.257 |

**Cancer risk estimates**

| Metal | Muscle EDI (mg/kg bw/day) | Muscle CR | Liver EDI (mg/kg bw/day) | Liver CR |
|---|---:|---:|---:|---:|
| Pb | 6.9E-5 | 5.86E-7 | 2.6E-5 | 2.2E-7 |
| Cd | 3.04E-6 | 1.15E-6 | 2.48E-6 | 9.4E-7 |

Kidney was excluded from the authors' health-risk calculations because they describe lower exceedance rates and lower per-capita kidney consumption than muscle and liver.

## Methods (brief)

Sample collection: 315 imported frozen bovine tissue samples (105 muscle, 105 liver, 105 kidney) collected from local markets in Sohag City, Egypt, and held frozen until analysis.

Preparation: 2 g tissue homogenized in a screw-capped tube with 12 mL concentrated nitric-perchloric acid (2:1), digested overnight in a 55 °C water bath, cooled, diluted with deionized water, filtered through Whatman Grade 42 paper, and made up to 50 mL.

Analysis: Buck Scientific 210 VGP atomic absorption spectrophotometer. Pb and Cd were measured with an oxidizing air-acetylene flame; Hg was measured using a mercury hydride system / cold-vapor technique. Wavelengths were 253.65 nm (Hg), 283.31 nm (Pb), and 228.80 nm (Cd). Calibration curve R² values were 0.999. The authors report spike recoveries of 96.4% (Hg), 98.9% (Pb), and 95.9% (Cd), with dogfish liver DOLT-4 used as certified reference material.

Speciation: The paper reports total mercury. It does not speciate methylmercury from inorganic mercury, so this page uses `tHg`, not `MeHg`.

## Implications

- Certification: Provides occurrence and exceedance-rate evidence for the beef product row and the beef / organ-meat ingredient nodes. Preserve the market context: imported frozen bovine tissues sampled in Sohag, Egypt, with source countries described as Brazil, India, and the USA.
- Courses: Useful as a teaching example for separating regulatory-limit exceedance from exposure-index calculations. More than half of several tissue-metal combinations exceeded author-cited MPLs, while THQ, TTHQ, and CR values remained below the authors' concern thresholds under their Egyptian adult consumption assumptions.
- App: Provides market-specific beef and organ-meat occurrence values. Do not generalize these values to all US or EU beef without additional source support.

## Wiki pages this source may touch

- [[ingredients/beef]]
- [[ingredients/organ-meats]]
- [[ingredients/meat]]
- [[ingredients/meat-and-poultry]]
- [[products/beef-product]]
- [[metals/mercury-total]]
- [[metals/lead]]
- [[metals/cadmium]]

## Verification notes

- 2026-05-18 Codex duplicate cleanup: retained `rabeey2025-bovine-hg-pb-cd-egypt` as the canonical source page and retired duplicate source page `rabeey2025-bovine-hg-pb-cd-egypt`.
- The local seafood-folder PDF is the same DOI as the earlier loose manual-fetch copy. This page now points to the seafood-priority PDF path and records its SHA-256.
- Cross-vendor audit (Codex, 2026-05-18) checked slug vocabulary: `beef-product` is an existing product page, and `meat`, `beef-muscle`, `bovine-liver`, and `bovine-kidney` are source-specific matrix descriptors used to preserve the tissue split.
- Numerical fidelity follows the article's Tables 1-4. The abstract reports different SE values for several means (for example tHg muscle 0.312 ± 0.058), while Table 1 reports 0.312 ± 0.034; this page follows Table 1 because it is the full tissue-by-metal results table and supports the range and exceedance columns.
- The Methods prose states an Hg RfD of 1.0 µg/kg/day, but Table 3 uses 0.1 µg/kg/day to calculate the reported THQs. This page preserves the Table 3 THQ values rather than recalculating them.
- The author-cited Hg MPL is from the USDA Foreign Agricultural Service report on China's contaminant standard; the Pb and Cd MPL references are EU amendment regulations 2015/1005 and 488/2014. This page reports those as author-cited benchmarks, not as current universal limits.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [bcbfbe85d](https://github.com/paleofoundation/heavymetalindex/commit/bcbfbe85d) | 2026-05-18 | minor | Narrative text revised |
| [f65e873cc](https://github.com/paleofoundation/heavymetalindex/commit/f65e873cc) | 2026-05-18 | major | 3 sections added and 2 removed; narrative text revised |
| [fd884aa17](https://github.com/paleofoundation/heavymetalindex/commit/fd884aa17) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
