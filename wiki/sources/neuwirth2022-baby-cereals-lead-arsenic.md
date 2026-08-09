---
type: source
raw_handle: FM_9140990
cite_key: neuwirth2022-baby-cereals-lead-arsenic
title: "Cereal and Juice, Lead and Arsenic, Our Children at Risk: A Call for the FDA to Re-Evaluate the Allowable Limits of Lead and Arsenic That Children May Ingest"
authors: [Neuwirth LS, Cabañas E, Cadet P, Zhu W, Markowitz ME]
year: 2022
publication: "International Journal of Environmental Research and Public Health 19(10):5788"
doi: 10.3390/ijerph19105788
access_url: https://doi.org/10.3390/ijerph19105788
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: raw/markdown/FM_9140990/FM_9140990.md
metals: [Pb, tAs]
ingredients: ["[[ingredients/rice]]", "[[ingredients/fruit-juice]]"]
products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/fruit-juices-apple-containing]]", "[[products/fruit-juices-non-apple]]"]
matrices: [infant-rice-cereal, fruit-juice]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "Opinion/commentary reviewing third-party survey data and federal datasets on Pb and As in baby cereals and juices; no independent primary sampling"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-09
---

# Neuwirth et al. 2022 — Cereal and Juice, Lead and Arsenic: A Call for FDA Re-Evaluation

## Overview

Opinion paper in IJERPH arguing the FDA should tighten allowable limits of Pb and As in cereals and juices marketed to infants, toddlers, and children. The authors review pediatric gastrointestinal absorption physiology, summarize contamination findings from third-party surveys (Consumer Reports, Clean Label Project, Healthy Babies Bright Futures) and the FDA Total Diet Study 2006–2013, and propose sequential testing along the manufacturing chain plus surgeon-general-style warning labels. No independent primary contamination data are reported; figures are second-hand from the cited surveys.

## Key numbers

All figures are cited by Neuwirth from referenced primary sources, not measured in this paper.

- Infant rice cereals: As in 105 infant cereal samples reached up to 85 ppb, ~eightfold above the EPA drinking-water As limit of 10 ppb (Houlihan/Healthy Babies Bright Futures 2017; EPA 2008) — page 1 introduction.
- Clean Label Project 500-product baby food survey (86 infant formulas, 30 baby cereals, 105 baby food jars, 138 baby food pouches, 36 toddler juices/drinks, 138 toddler snacks across 60 brands): 65% had detectable As, 36% had detectable Pb, 58% had detectable Cd (Clean Label Project 2017) — page 1.
- FDA Total Diet Study 2006–2013 on 2,164 baby food samples: Pb detected in 20% of samples (one-in-five). Juice subset: Pb in 89% of grape juices, 67% of mixed fruit juices, 55% of apple juices, 45% of pear juices (Environmental Defense Fund 2017) — page 1.
- FDA/CDC Interim Reference Level for Pb ingestion: 3 µg/day for children; 12.5 µg/day for adults (FDA 2019) — page 3.
- Pediatric vs adult Pb gastrointestinal absorption: 40–50% in children vs 10–15% in adults (Alexander 1972; Ziegler et al. 1978) — page 2.
- Historical As infant mortality (Dakeishi et al. 2006): Japanese arsenic-contaminated milk-powder incident, 1955; intake >500 µg/kg/day; >100 infant deaths; clinically evident poisoning calculated at ~60 mg total As ingested — page 3.
- Leibler et al. 2018 backyard chicken eggs (n=201, greater Boston): 98% Pb-contaminated; estimated BLL increase 0.9–1.5 µg/dL in consuming children. Note: Neuwirth reports an in-egg figure as "M = 0.10 µg/dL, SD = 0.18" — the µg/dL unit is biologically a blood-Pb unit, not an egg-concentration unit, and is reproduced here verbatim from the commentary; the underlying Leibler 2018 paper should be consulted for the correct egg-Pb unit before any downstream quotation — page 2.

## Methods (brief)

Narrative review and policy commentary (MDPI "Opinion" type). No primary sampling, no analytical chemistry, no statistical pooling. The authors synthesize literature on (1) Ca/Pb competition at gut absorption channels, (2) pediatric vs adult absorption kinetics, (3) third-party survey findings on baby food and juice contamination, and (4) historical As toxicity. Schematic Figure 1 proposes farm-to-table sequential testing with consumer-facing warning labels; no quantitative model is fit. Funding: Faculty Development Grant to L.S. Neuwirth (SUNY Old Westbury); no IRB; no conflicts declared.

## Implications

The paper contributes no primary concentration data for HMTc threshold-setting. Its useful role in the wiki is (a) as a 2022-vintage policy citation that the FDA Interim Reference Level of 3 µg/day Pb for children was unchanged from earlier guidance despite mounting third-party survey evidence, and (b) as an accessible secondary pointer to the Clean Label Project, HBBF, and EDF datasets it summarizes. For HMTc baby-cereal and juice work, cite the primary sources (FDA CTZ action levels, HBBF/CLP/EDF survey data, Leibler 2018) directly rather than this commentary.

## Verification notes

- 2026-06-09: Merge-enhanced from the directly-fetched PDF at `raw/Manual Fetch Discovery/neuwirth2022-lead-arsenic-baby-foods-fda.pdf` (the FM_9140990 raw_handle is preserved; the MFD copy is a re-fetch of the same DOI). Title expanded to the full published title; author list completed (was "Neuwirth LS, et al."); license refined to "CC BY 4.0"; products expanded to include the two juice slugs the paper explicitly discusses (the prior page underweighted the juice content despite "Juice" appearing in the title); ingredients added `fruit-juice`; an explicit `## Methods (brief)` section added per Part 6; key numbers expanded from 3 lines to the full set of cited figures with page-anchor references. Evidence tier kept at B (opinion/commentary, no primary data).
- Speciation note (Part 14 / audit Check 3): the paper itself uses bare "As" throughout and does not speciate. Per system-prompt rule 5 / Part 14 strict reading, when the paper does not separate inorganic vs total As, `tAs` is the conservative call. The page's `metals:` field therefore uses `tAs` even though some cited primary sources are specifically inorganic-As (HBBF 2017 infant cereal 85 ppb; EPA drinking-water MCL 10 ppb) — downstream synthesis that wants to use the iAs-specific figures should cite the underlying primary sources directly, not this commentary. The Clean Label Project 65% As detection figure is reported by CLP as total As; the FDA Total Diet juice figures are also total-As unless the EDF re-analysis specified otherwise.
- 2026-06-09 audit-application (fresh-context subagent verdict REVISE): two findings applied — (1) `metals:` changed from `[Pb, iAs]` to `[Pb, tAs]` per Part 14 strict reading; (2) `matrices:` `baby-juice` replaced with `fruit-juice` (only 1 source page used `baby-juice`; broader vocabulary `fruit-juice` is canonical and consistent with system-prompt rule 2). The audit's Check 1 note that EPA 2008 attribution for the 10 ppb drinking-water MCL is slightly imprecise (the MCL is from 40 CFR 141, not the Child-Specific Exposure Factors Handbook) is acknowledged but not "fixed" because the wiki page faithfully reproduces the paper's own citation; the paper's [3] EPA citation is the imprecise one.
- Duplicate-page conflict flagged for Karen: `wiki/sources/neuwirth2022-baby-cereals-lead-arsenic.md` is a second wiki source page covering this same DOI (10.3390/ijerph19105788, same raw_handle FM_9140990). Its cite-key encodes the wrong year (2013 vs the paper's 2022), uses non-canonical slugs (`infant-cereal`, `infant-juice`, `cereal-grains`, `cereal-powder`), assigns evidence_tier A (incorrect for an opinion piece), and lists Cd in `metals:` (Cd appears only in passing in the CLP citation). Per Part 10 the wiki page merge is Karen's call; flagged here so the cereal2013- duplicate can be removed and its routing rows cleaned up.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/arsenic-total]]
- [[ingredients/rice]]
- [[ingredients/fruit-juice]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/fruit-juices-apple-containing]]
- [[products/fruit-juices-non-apple]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | Narrative text revised |
<!-- END: hmi-page-history -->
