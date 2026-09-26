---
schema_version: 1.2.1
last_updated: 2026-09-26
applies_to: wiki/sources/*.md
---

# Source page schema

Source pages document one paper / agency report / dataset each. They are the atomic evidence units; every public wiki claim traces to one or more of these via the routing audit (`data/evidence/product_source_routing_audit.csv`).

See [[../page-templates.md|docs/page-templates.md]] for the prose body conventions; this document is the structured-frontmatter contract.

## Frontmatter fields

### Identity

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `type` | `"source"` | yes | Discriminator |
| `cite_key` | string | yes | Stable identifier: `<firstauthor><year>-<keyword>` for papers, `<agency><year>-<topic>` for agency docs |
| `title` | string | yes | Full title as published |
| `authors` | array of string | yes | Last-name-first order, comma-separated within each string; `["EFSA Panel on Contaminants in the Food Chain (CONTAM)"]` for institutional authors |
| `year` | integer | yes | Publication year, 4 digits |
| `publication` | string | sometimes | Journal name, publisher, or agency program. Required for peer-reviewed and gov-report types |
| `doi` | string \| null | sometimes | The paper's DOI as published (e.g. `10.2903/j.efsa.2009.980`). Distinct from `wiki_doi` |
| `wiki_doi` | string \| null | yes (slot) | The Heavy Metal Index page's own DataCite DOI. Populated by the DOI-minting integration; null until then |

### Classification

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `source_type` | enum | yes | One of: `peer-reviewed`, `gov-report`, `government-report`, `ngo-report`, `textbook-chapter`, `news-commentary`, `dataset` (normalized in `tools/build-corpus-counter.mjs`) |
| `evidence_tier` | `"A"` \| `"B"` \| `"C"` | yes | Defined in [[../conventions.md]] § Evidence grading |
| `license` | string | yes | `public-reference-only`, `CC-BY`, `CC0`, `permissioned-internal-only`, etc. |
| `superseded_by` | string \| null | yes | Cite key of the source that supersedes this one, if any |

### Provenance

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `raw_path` | string | yes | Repo-relative path to the underlying PDF under `raw/` |
| `sha256` | string | yes | SHA-256 of the raw file; integrity check |
| `access_url` | string | yes | URL where the source can be retrieved (publisher, agency, repository) |
| `access_date` | ISO date | yes | Date the access_url was last verified |

### Routing inputs

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `metals` | array of enum | yes | HMTc-10 analytes the source addresses: `[Pb, Cd, iAs, tAs, MeHg, tHg, iHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U]` |
| `ingredients` | array of wikilink | yes | `[[ingredients/rice]]`-style entries; consumed by `tools/sync-source-counts.mjs` and routing audit |
| `products` | array of wikilink | yes | `[[products/infant-formula]]`-style entries |
| `matrices` | array of slug | sometimes | Matrix slugs when the source's scope is broader than a single product. Used by the routing audit to fan out to sibling pages |
| `jurisdictions` | array of ISO code | yes | `EU`, `US`, `US-CA`, `CN`, `MX`, `AU`, `NZ`, `EC`, `TR`, `international` (Codex/JECFA/WHO) |

### Geographic + temporal granularity (added 2026-05-28)

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `sampling_locations` | array of string | yes (slot) | Sub-national sampling locations: provinces, prefectures, states, districts. Distinct from `jurisdictions` (which is the regulatory jurisdiction the source is published under). Foundation for the contamination-by-region map. Empty array until populated by ingest |
| `sampling_year_range` | string \| null | yes (slot) | When the food samples were collected, not when the paper was published. Examples: `"2017-2019"`, `"2022"`. A 2024-published paper on 2019-collected samples is a 2019 data point for time-series purposes. Null until populated by ingest |

`sampling_locations` and `sampling_year_range` are inputs to the measurement-row fields in [[geo-hist.md]]. Those ledger fields (`sampling_country`, `sampling_region`, `lat`, `lon`, sampling years, `harvest_year`, `practice`, `geo_precision`) are not source-page frontmatter. `jurisdictions` stays the regulatory jurisdiction and is not copied into `sampling_country`.

### Editorial

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `updated` | ISO date | yes | Last substantive edit |
| `audience` | array of enum | optional | If omitted, inferred from page type |
| `noindex` | boolean | optional | Default false |

## Validation

The pre-commit hook does not currently validate this schema. The routing audit (`tools/evidence/build-routing-audit.mjs`) and corpus counter (`tools/build-corpus-counter.mjs`) read these fields and will warn or fail-soft on malformed values; the source-page lints (`tools/audit-source-dois.mjs`, `tools/audit-routing-discipline.mjs`) catch most structural issues.

The discipline today: every ingest writes complete frontmatter; missing fields are caught by lint within one day.

## Version history

- **1.2.1 (2026-09-26)** — documented that `sampling_locations` and `sampling_year_range` feed the measurement-row fields in [[geo-hist.md]], and that `jurisdictions` is not a sampling country. No new frontmatter field.
- **1.2.0 (2026-05-28)** — added `wiki_doi`, `sampling_locations`, `sampling_year_range` (additive). Migration: `tools/migrate-future-slots.mjs`.
- **1.1.0 (2026-04-26)** — `evidence_tier` became required (was optional). See [[../schema-history.md]].
- **1.0.0 (2026-04-25)** — initial schema. See `docs/schema-history.md`.
