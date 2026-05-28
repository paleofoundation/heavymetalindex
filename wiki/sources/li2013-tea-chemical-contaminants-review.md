---
type: source
cite_key: li2013-tea-chemical-contaminants-review
title: "Determination for major chemical contaminants in tea (Camellia sinensis) matrices: A review"
authors: [Li X, Zhang Z, Li P, Zhang Q, Zhang W, Ding X]
year: 2013
publication: "Food Research International"
doi: "10.1016/j.foodres.2012.12.048"
source_type: review
evidence_tier: A
license: "all-rights-reserved"
raw_path: raw/studies/li2013-tea-chemical-contaminants-review.pdf
sha256: d3b663a364c1b8d927a71f9b1bd343f194e39e224c84d97c24e8e6202e48fcbc
access_date: 2026-05-12
access_url: "https://doi.org/10.1016/j.foodres.2012.12.048"
metals: [Pb, Cd, tAs, Cr, Cu]
ingredients: ["[[ingredients/camellia-sinensis]]"]
products: ["[[products/true-tea-camellia-sinensis]]", "[[products/tea-infusions]]"]
matrices: [green-tea, black-tea, oolong-tea, tea-infusion, tea-leaves]
jurisdictions: [CN, IN, TR]
sample_n: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Li et al. 2013 — Chemical Contaminants in Tea (Camellia sinensis): Methods Review

This review, published in Food Research International, covers analytical detection methods for three major chemical contaminant classes in tea matrices: pesticide residues (GC, HPLC, LC-MS/MS, GC-MS methods), mycotoxins (HPLC, MS, ELISA, immunochromatography), and heavy metals (ICP, AAS, immunoassay). The heavy metal section covers ICP-MS, ICP-OES, and AAS methods including sample preparation, LOD/LOQ performance, and emerging techniques. This is primarily a methodology paper rather than a concentration-survey paper; it does not report original metal measurements in tea.

## Key numbers

**Heavy metal analytical methods for tea (from review):**
- ICP method: Capable of multi-element simultaneous analysis; ICP-MS preferred for trace-level detection
- AAS method: FAAS and GFAAS used for specific elements; GFAAS required for low-level Pb, Cd
- LOD ranges cited from underlying studies: generally sub-µg/g level by ICP-MS; AAS LODs vary by element

**Contamination context (from introduction):** Heavy metals are non-biodegradable, accumulate in living tissues, and cause diseases including damage to mental or central nervous system function (citing Afridi et al. 2006). EU MRLs (EC No. 42/2000 and EC No. 1881/2006) apply to tea matrices.

## Methods (brief)

Narrative review of published analytical methods. Tables 2–4 compile GC, HPLC, and LC-MS/MS methods for pesticide residues. Section 4 covers heavy metal methods (ICP, AAS, immunoassay). No original measurements reported.

## Limitations

This paper's primary focus is pesticide residues and mycotoxins; heavy metals are a secondary topic covering roughly 15–20% of content. The paper does not report concentration data for metals in tea. As a 2013 review, it predates many advances in tea metal analysis and does not cover the geographic distribution literature that developed from 2015–2023. This limits its utility as a concentration reference source, though it remains useful for methodology context.

## Implications

- Certification: Useful for the [[testing/]] methodology pages — documents ICP-MS as the gold-standard approach for multi-element tea analysis and AAS as an acceptable alternative for specific elements.
- Courses: Background on why different analytical methods are needed for different contaminant classes in the same food matrix.
- App: No concentration data to extract.
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[testing/icp-ms]]
- [[ingredients/tea]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [74a1533](https://github.com/paleofoundation/heavymetalindex/commit/74a1533) | 2026-05-16 | reverse-route: backfill products from matrices for 154 sources |
| [82e9c80](https://github.com/paleofoundation/heavymetalindex/commit/82e9c80) | 2026-05-12 | triage: routing-unresolved pass 2 — 93 → 46 entries (47 resolved) |
| [9696665](https://github.com/paleofoundation/heavymetalindex/commit/9696665) | 2026-05-12 | ingest: batch B — 10 seasonal-geographic-variance sources |
<!-- END: hmi-page-history -->
