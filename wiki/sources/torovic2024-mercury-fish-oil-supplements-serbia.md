---
type: source
raw_handle: MFK_mercury-content-in-fish-oil-food-supplements-and-a
cite_key: torovic2024-mercury-fish-oil-supplements-serbia
title: "Mercury Content in Fish Oil Food Supplements and Associated Health Risk"
authors: [Torović L, Banović Fuentes J, Stanojković N, Lukić D, Djermanović M]
year: 2024
publication: "Proceedings 2023, 91, 364 (MDPI Proceedings — 14th European Nutrition Conference FENS 2023)"
doi: 10.3390/proceedings2023091364
source_type: conference-abstract
evidence_tier: B
license: "CC BY 4.0"
access_url: "https://doi.org/10.3390/proceedings2023091364"
raw_path: "raw/Manual Fetch Kimi /condiment_papers/01_Oils/Mercury Content in Fish Oil Food Supplements and Associated Health Risk.pdf"
raw_sha256: "82ffbad6dd992a546cde92d83fa1a9d5bf8f3f9c823219b397933b3bb8014d8e"
metals: [tHg]
ingredients: ["[[ingredients/fish-oil]]"]
products: ["[[products/dietary-supplements]]"]
matrices: [fish-oil-supplement]
jurisdictions: [RS, BA]
near_duplicates: []
sample_n: 42
sample_population: "42 fish oil food supplements available on the markets of the Republic of Serbia and the Republic of Srpska (Bosnia and Herzegovina)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-26
---

# Torović et al. 2024 — Mercury in fish oil supplements: Serbia and Srpska market

## Overview

This conference abstract (presented at FENS 2023, Belgrade; published 2024 in MDPI Proceedings) reports total mercury concentrations in 42 fish oil supplements from the Serbian and Bosnian-Srpska markets, determined by a direct mercury analyzer. Total mercury ranged from 0.001 to 0.0057 mg/kg, with a mean of 0.0019 ± 0.0009 mg/kg — well below the regulatory maximum level for food supplements of 0.1 mg/kg cited by the authors (jurisdiction not specified in the abstract). Risk assessment against both the US EPA oral reference dose (RfD of 0.0001 mg/kg bw/day) and EFSA tolerable weekly intake (TWI of 0.0013 mg/kg bw) used the precautionary assumption that total mercury equals methylmercury (MeHg accounts for 75–98% of total mercury in fish). Mean consumer exposure represented 0.042 ± 0.039% of RfD and 0.023 ± 0.021% of TWI; the highest individual exposure reached 0.24% of RfD and 0.13% of TWI. The authors conclude that mercury risk from fish oil supplements is negligible even for pregnant and nursing women.

## Key numbers

- tHg range: 0.001–0.0057 mg/kg (1.0–5.7 ppb), n = 42
- tHg mean ± SD: 0.0019 ± 0.0009 mg/kg (1.9 ± 0.9 ppb)
- Regulatory maximum level for food supplements (cited by authors, jurisdiction not specified): 0.1 mg/kg (100 ppb) — all samples below this at < 6% of the limit
- MeHg RfD (US EPA): 0.0001 mg/kg bw/day; mean exposure = 0.042 ± 0.039% of RfD
- MeHg TWI (EFSA): 0.0013 mg/kg bw; mean exposure = 0.023 ± 0.021% of TWI
- Maximum individual exposure: 0.24% of RfD, 0.13% of TWI

Speciation note: the study measured total Hg (tHg) only. The risk assessment applied the precautionary assumption tHg = MeHg, which is the more conservative approach. This paper does not provide species-resolved MeHg data.

## Methods

Direct mercury analyzer (instrument vendor and model not specified in the abstract). Risk assessment applied the recommended intake of supplements (per the abstract; specific dose basis not stated) and the EFSA/EPA toxicological reference values for MeHg.

Limitations: This is a conference abstract (2 pages), not a full peer-reviewed article. Sample descriptions, sampling design, sample-preparation protocol, and individual-product results are not provided. The abstract does not name the specific supplements tested or describe how 42 products were selected.

## Implications

Certification: Provides market-surveillance data supporting the position that fish oil supplements at recommended doses contribute negligibly to mercury exposure even under the conservative tHg = MeHg assumption. Useful as supporting context for HMT&C supplement product guidance.

Courses: Illustrates the precautionary principle applied to tHg/MeHg speciation in risk assessment for supplement products.

App: Supports a low-risk classification for fish oil supplements with respect to mercury at current market concentrations in the Serbia/Srpska market.

## Related evidence
- [[ingredients/fish-oil]]
- [[products/dietary-supplements]]
- [[metals/mercury]]

## Verification notes

- 2026-05-26 merge-enhance: corrected `raw_handle` from generic `manual-fetch-source-retrieval` placeholder to per-paper `MFK_mercury-content-in-fish-oil-food-supplements-and-a`; corrected truncated `raw_path` filename to the actual on-disk file (was `...Associated Healt.pdf`, now `...Associated Health Risk.pdf`); added `access_url` (MDPI DOI) and `raw_sha256`; re-verified all Key numbers against the source PDF (range 0.001–0.0057 mg/kg, mean 0.0019 ± 0.0009 mg/kg, exposure 0.042% RfD / 0.023% TWI, maxima 0.24% / 0.13%) — all match the abstract verbatim. License is CC BY 4.0 per MDPI publisher notice on page 1.
- 2026-05-26 audit editorial review (general-purpose) verdict REVISE applied: (1) removed `MeHg` from `metals:` source metadata — study measured tHg only and applied a precautionary tHg=MeHg risk-math assumption; including MeHg would mis-route this as MeHg measurement evidence; (2) stripped unsupported "EU" qualifier from "0.1 mg/kg maximum level" — abstract does not specify jurisdiction; rephrased as "regulatory maximum level for food supplements (cited by authors, jurisdiction not specified)"; (3) tightened Methods to "direct mercury analyzer (instrument vendor and model not specified in the abstract)" — removed inferred "thermal decomposition amalgamation instrument" technology-class detail and "no sample preparation required" inference not present in the source; (4) softened "manufacturer-recommended intake doses" to "recommended intake of supplements (per the abstract; specific dose basis not stated)" — abstract does not specify who recommended the doses; (5) added the ±SD on exposure percentages (±0.039% RfD, ±0.021% TWI) for completeness. Audit-flagged `fish-oil` slug verified absent from the linked reference record; not creating an ingredient page per per-cycle skill constraints — flagging for future auto-stub or provisional-scaffold pass. All numerical fidelity, brand firewall, and HMTc firewall checks were clean per audit; no false positives to reject.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
