---
schema_version: 1.2.0
last_updated: 2026-10-16
applies_to: wiki/ingredients/*.md
---

# Ingredient page schema

Ingredient pages document one commodity each (rice, cocoa, fish, etc.) with population-level contamination data, regional and varietal variance, processing effects, and mitigation. See [[../page-templates.md]] § Ingredient page for prose-body conventions.

## Frontmatter fields

### Identity

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `type` | `"ingredient"` | yes | Discriminator |
| `title` | string | yes | Display name (e.g. "Rice") |
| `commodity` | slug | yes | URL-safe slug, matches the filename |
| `aliases` | array of string | optional | Alternative names that should route to this page (e.g. `rice flour`, `rice syrup`) |
| `category` | enum | yes | `grain`, `vegetable`, `fruit`, `seafood`, `dairy`, `meat`, `nuts-seeds`, `legumes`, `spices`, `beverage`, `oil`, `processed`, etc. |
| `wiki_doi` | string \| null | yes (slot) | DataCite DOI for this page; reserved field path |

### Contamination profile (the load-bearing structured block)

A YAML object `contamination_profile:` with one sub-block per HMTc-10 metal. Each metal sub-block carries:

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `status` | enum | yes | `populated`, `in_progress`, `pending` |
| `typical_ppb` | `[min, max]` array | sometimes | Per-analyte typical range in ppb (µg/kg). Required when `status: populated`. `[0, 0]` means below LOQ across the corpus |
| `p95_ppb` | number \| null | sometimes | 95th percentile of the pooled distribution. Null when the corpus is too sparse or too heterogeneous to support a P95 |
| `confidence` | enum | yes | `low`, `medium`, `high` |
| `n_studies` | integer | yes | Number of contributing source pages |
| `last_reviewed` | ISO date | yes | Date the synthesis pass last re-read the contributing sources for this cell |

The block is the machine-readable profile, the API surface, and the source of truth for the body table on each ingredient page. It is not a reader audience. See [[../page-templates.md]] for the rendering contract and [[../page-structure.md]] for body order.

### Variance + routing

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `drivers` | array of string | optional | Free-text driver tags (`soil-uptake`, `irrigation-water-management`, `cultivar`, etc.) |
| `lower_risk_variants` | array of wikilink | optional | Sub-variant ingredient pages with structurally lower exposure |
| `higher_risk_variants` | array of wikilink | optional | Sub-variant ingredient pages with structurally higher exposure |
| `used_in_products` | array of wikilink | optional | Product-category pages this ingredient appears in |
| `sources` | integer | yes | Auto-maintained by `tools/sync-source-counts.mjs` — count of source pages referencing this ingredient |

### Editorial

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `audience` | array of enum | yes | `regulator`, `brand-qa`, `food-safety`, `procurement`, `brand-legal`. Does not include `consumer` or `app`. See [[../page-structure.md]]. |
| `updated` | ISO date | yes | Last substantive content edit |

## Mandatory body sections

The ordered list is the ingredient list in [[../page-structure.md]]. This schema does not keep a second list.

## Version history

- **1.2.0 (2026-10-16)** — audience drops `consumer` and `app`. Body order moved to [[../page-structure.md]] so this file cannot disagree with the template.
- **1.1.0 (2026-05-28)** — added `wiki_doi` (additive).
- **1.0.0 (2026-04-25)** — initial schema.
