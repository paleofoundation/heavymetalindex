---
type: source
raw_handle: FM_4661673
cite_key: shibata2016-arsenic-rice-cereal-risk-assessment-us
title: "Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S."
authors: [Shibata T, Meng C, Umoren J, West H]
year: 2016
publication: "International Journal of Environmental Research and Public Health 13(4):361"
doi: 10.3390/ijerph13040361
access_url: https://doi.org/10.3390/ijerph13040361
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: raw/markdown/FM_4661673/FM_4661673.md
metals: [iAs]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/infant-formula-powder-non-soy]]"]
matrices: [risk-assessment-model, intake-estimate]
jurisdictions: [US]
sample_n: null
sample_population: "Theoretical US infant cohort ages 4–24 months; modeled from EPA Child-Specific Exposure Factors; iAs concentrations sourced from FDA market survey data and published literature"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Shibata et al. 2016 — Arsenic Risk Assessment for US Infant Rice Cereal

This 2016 US risk assessment modeled cumulative iAs exposure for infants and toddlers (4–24 months) from rice cereal, infant formula, drinking water, and other infant solid foods using probabilistic Monte Carlo simulation. Evidence tier B: uses modeled inputs from FDA survey data, not independent primary measurements.

## Key numbers

**Rice cereal iAs concentration distribution (FDA survey data):**
Total As range 0.050–0.723 mg/kg; iAs fraction approximately 63%; derived iAs range approximately 0.023–0.283 mg/kg (23–283 µg/kg). Triangular distribution for modeling.

**CDI (chronic daily intake) at 50th percentile:**
Rice cereal only: 0.40 µg/kg bw/day.
All dietary sources combined: 0.73 µg/kg bw/day.

**Infant formula iAs (literature):** mean 7.48×10⁻⁶ mg/L (approximately 7.5 µg/L reconstituted). Note: this value is older literature and predates OBRS scrutiny.

## Methods

Monte Carlo probabilistic risk assessment. Concentration data from FDA market survey and published literature. EPA Child-Specific Exposure Factors. LADD (lifetime average daily dose) calculation. Classified B for concentration data: concentrations are modeled inputs, not independently measured.

## Implications

Certification: CDI estimate of 0.73 µg/kg bw/day from all sources at median is useful context for exposure modeling. The 63% iAs fraction in rice cereal is consistent with FDA survey data.

## Wiki pages updated on ingest

- [[products/baby-cereals-dry-rice-based]]
- [[metals/arsenic]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
