---
type: source
cite_key: usepa2018-drinking-water-standards-health-advisories
title: "2018 Edition of the Drinking Water Standards and Health Advisories Tables"
authors: ["U.S. Environmental Protection Agency Office of Water"]
year: 2018
publication: "EPA 822-F-18-001"
doi: null
no_doi_assigned: true
source_type: government-regulation
evidence_tier: A
license: public-law
raw_path: raw/regulatory/us-epa/us-epa-drinking-water-standards-health-advisories-2018.pdf
raw_sha256: "e5a6fe30f3d01956f28cac4b8b5ab609e3c1ddd7d90419c2f0a7850ecf613973"
access_url: null
metals: [Sb, tAs, Cd, Cr-total, Pb, Al]
ingredients: []
products: []
matrices: [drinking-water]
jurisdictions: [US]
near_duplicates: []
updated: 2026-08-06
---

EPA's 2018 Drinking Water Standards and Health Advisories table compiles federal drinking-water benchmarks, including enforceable MCLs for regulated contaminants and non-enforceable health advisories. For this ingest, only numeric MCL rows that fit the controlled metal-species vocabulary are loaded into `data/evidence/regulatory_limits.csv`: antimony, arsenic, cadmium, and total chromium. Lead is gap-logged because the table gives a treatment technique rather than a numeric MCL. Inorganic mercury and uranium are also gap-logged because they do not fit the current CSV species vocabulary, and aluminium is gap-logged because the secondary drinking-water value is a range.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [19f96492d](https://github.com/paleofoundation/heavymetalindex/commit/19f96492d) | 2026-08-06 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
