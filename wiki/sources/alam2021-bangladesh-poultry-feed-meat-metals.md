---
type: source
raw_handle: AUTO_ing-meat-poultry-Cd
cite_key: alam2021-bangladesh-poultry-feed-meat-metals
title: "Heavy metal contamination and antibiotic residues in poultry feed and meat in Bangladesh"
authors: [Alam MM, Mallick DL, Ahsan MM, Akhter AHMT, Eftesum, Rahman F, Kabir SML, Rahman AA]
year: 2021
publication: "Asian-Australasian Journal of Food Safety and Security 5(2):71-78"
doi: 10.3329/aajfss.v5i2.56958
access_url: "https://www.banglajol.info/index.php/AAJFSS/article/download/56958/39741"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-meat-poultry-cd_2021_10-3329-aajfss-v5i2-56958.pdf"
sha256: 64f375a31b06f3f64292e0cc865afc3fb1fb243290693492f2b3ed696d7543ab
metals: [Cd, Pb, Cr]
ingredients: ["[[ingredients/chicken]]", "[[ingredients/poultry]]"]
products: ["[[products/poultry-product]]"]
matrices: [broiler-meat, broiler-feed]
jurisdictions: [BD]
sample_n: "94 broiler feed samples and 60 broiler meat samples."
sample_population: "Broiler feed and meat from two selected poultry production belts of Bangladesh."
wiki_doi: null
sampling_locations: [Gazipur, Rajshahi]
sampling_year_range: null
updated: 2026-06-08
---

# Alam et al. 2021 - Poultry Feed and Meat Contaminants in Bangladesh

## Overview

Alam et al. tested broiler feed and meat for antibiotic residues, aflatoxin, and heavy metals in Bangladesh. The metal findings are direct poultry occurrence evidence, with a notable caveat: in meat, Cd and Cr were detected in only one of sixty samples, while lead was not detected.

## Key numbers

For feed (n=94), all samples were positive for Cd, Pb, and Cr. Mean concentrations were Cd 0.04 mg/kg (range 0.01–0.21), Pb 1.28 mg/kg (range 0.03–14.65), and Cr 2.55 mg/kg (range 0.05–49.22), all reported on a wet-as-sold feed basis. The maximum Pb of 14.65 mg/kg is roughly three times the EU 2003 Undesirable Substances in Feed MRL of 5 mg/kg; the authors note no EU MRL for Cr in feed. Out of 60 broiler meat samples, one sample was positive for Cd at 56.41 mg/kg and Cr at 14.44 mg/kg; Pb was not detected in any meat sample.

## Methods (brief)

The study collected 94 broiler feed samples and 60 broiler meat samples from Gazipur and Rajshahi districts. Feed Cd, Pb, and Cr were quantified by ICP-OES/MS following AOAC at SGS, India; meat Cd, Pb, and Cr were quantified by ICP-MS (SGS method S0-IN-MUL-TE-063) at the same lab. Thigh and breast muscles from 5–6-week broilers were used for meat sampling.

## Implications

This source is useful for poultry-product gap filling in Bangladesh, but the meat results should be treated carefully because the extreme Cd and Cr values occurred in a single positive meat sample out of sixty. Arsenic was named in the introduction as in-scope for feed testing only, but no As results are reported in any results table; treat the paper as silent on As occurrence in both feed and meat.

## Wiki pages this source may touch

- [[products/poultry-product]]
- [[ingredients/chicken]]
- [[ingredients/poultry]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/lead]]

## Verification notes

- Batch 5 auto-fetched ingest, 2026-05-25.
- Chromium is total/unspecified Cr, not Cr(VI).
- Audited 2026-06-08: dropped over-broad `ingredients/meat` routing in favor of `ingredients/poultry` (paper is broiler-chicken-specific); corrected misleading arsenic-meat statement; expanded methods to name ICP-OES/MS (feed) and ICP-MS (meat) at SGS India; surfaced feed Pb max (14.65 mg/kg, ~3x EU MRL) and Cr max (49.22 mg/kg) in Key numbers; populated sampling_locations and fixed author abbreviations.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [f0dfd8f6d](https://github.com/paleofoundation/heavymetalindex/commit/f0dfd8f6d) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [477ff83fb](https://github.com/paleofoundation/heavymetalindex/commit/477ff83fb) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
