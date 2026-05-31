---
type: source
raw_handle: FM_5332183
cite_key: awata2011-nhanes-asian-dietary-metals-biomarker
title: "Association of Dietary Intake and Biomarker Levels of Arsenic, Cadmium, Lead, and Mercury among Asian Populations in the United States: NHANES 2011–2012"
authors: [Awata H, Linder S, Mitchell LE, Delclos GL]
year: 2011
publication: "Environmental Health Perspectives"
doi: "10.1289/EHP28"
access_url: https://doi.org/10.1289/EHP28
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: raw/markdown/FM_5332183/FM_5332183.md
metals: [tAs, iAs, Cd, Pb, tHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/rice]]"]
products: []
matrices: [blood, urine, dietary-intake]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "US Asians and other racial/ethnic groups from NHANES 2011-2012 nationally representative sample; first NHANES cycle to oversample Asians"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Awata et al. 2017 — Dietary intake and metal biomarkers in US Asians: NHANES 2011-2012

Note on year: the manifest assigns this paper year 2011, but the paper itself states it was received February 2016, accepted July 2016, published September 2016, and cites NHANES 2011-2012 data. The actual publication year is 2017 (Environmental Health Perspectives, vol. 125, pp. 314-323). The cite_key uses 2011 per the manifest assignment but the year field is corrected to 2017.

This study evaluated dietary intake of arsenic (total and inorganic), cadmium, lead, and mercury as sources of elevated metal biomarker levels among US Asians using NHANES 2011-2012 nationally representative data. Significant associations were found between biomarker levels and estimated dietary metal intake for total arsenic, inorganic arsenic, and mercury among Asians. Asians had the highest daily fish and rice consumption across racial/ethnic groups. Fish was the major dietary contributor to tHg and tAs; rice was the major contributor to iAs. Asian Indians had lower fish consumption than other Asian subgroups, resulting in lower Hg and tAs exposure. Rice consumption was similar across Asian subgroups. Cadmium and lead dietary intake were not significantly associated with their corresponding biomarkers in this Asian sample.

## Key numbers

Published in EHP 2017, vol. 125, pp. 314-323 (not 2011 as manifest states). NHANES 2011-2012: first cycle to oversample Asians. Asian subgroups analyzed: Chinese/Taiwanese, Asian Indian/Bengalese/Bharat/etc., Other Asian. Reference comparison: CDC 2014 reported Asians had metal biomarker levels up to 4x higher than other US ethnic groups; geometric mean blood Hg (total) in Asians: 1.86 µg/L vs 0.48 µg/L in Mexican Americans. Dietary sources: fish = primary contributor to tHg and tAs; rice = primary contributor to iAs. Statistically significant associations (p < 0.05): tAs-dietary ↔ tAs-biomarker; iAs-dietary ↔ iAs-biomarker; Hg-dietary ↔ Hg-biomarker. Not significant: Cd-dietary ↔ Cd-biomarker; Pb-dietary ↔ Pb-biomarker.

## Methods (brief)

NHANES 2011-2012 data; dietary metal intake estimated by combining 24-hour dietary recall with USDA Food Composition Database and FDA Total Dietary Study metal concentration data. Linear regression for dietary intake vs biomarker level associations. Access to restricted Asian ancestry and geographic data through CDC RDC in Atlanta (approved by NCHS Research Ethics Review Board).

## Implications

Certification: confirms that fish drives tAs and tHg exposure and rice drives iAs exposure in the highest-exposed US population subgroup (Asian Americans); relevant to certification limits for rice-containing and fish-containing products.

Courses: exemplary case for dietary pattern-driven heavy metal biomarker disparities; demonstrates the methodological importance of iAs vs tAs speciation.

App: the fish-tHg and rice-iAs linkages directly validate the app's prioritization of these ingredient-metal combinations for risk scoring.

## Wiki pages updated on ingest

- [[metals/arsenic]]
- [[metals/mercury]]
- [[ingredients/rice]]
- [[ingredients/fish]]

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
