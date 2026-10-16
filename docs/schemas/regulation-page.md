---
schema_version: 1.1.0
last_updated: 2026-05-28
applies_to: wiki/regulations/*.md
---

# Regulation page schema

Regulation pages document one regulatory threshold, action level, scientific opinion, or program each. They are the input to `tools/build-regulation-cross-cuts.mjs`, which produces the by-jurisdiction matrix and the timeline.

See [[../page-templates.md]] § Regulation page.

## Frontmatter fields

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `type` | `"regulation"` or `"regulation-program"` | yes | Use `regulation-program` for program-level overviews (e.g. FDA Closer to Zero); individual rules use `regulation` |
| `title` | string | yes | Full rule title |
| `short_title` | string | optional | Display name when full title is too long for tables |
| `program` | string | sometimes | Program name for `regulation-program` types |
| `rule_id` \| `program_id` | slug | yes | Slug matching the filename |
| `jurisdiction` | string \| array | yes | ISO code(s): `EU`, `US`, `US-CA`, `US-WA`, `CN`, `MX`, `AU`, `NZ`, `EC`, `TR`, `international` (Codex/JECFA/WHO). May be array for multi-jurisdiction agreements |
| `agency` \| `authority` | string | yes | Issuing body name |
| `metals` \| `metal` | array of enum \| enum | yes | One or more of `Pb, Cd, iAs, tAs, MeHg, tHg, iHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U` |
| `matrix` \| `matrices` | string \| array | yes | `dietary`, `drinking-water`, `oral`, `inhalation-and-oral`, or a matrix slug list |
| `limit_value` | number \| string \| null | yes | The numeric limit. Use string `"multiple"` for matrix-tabled regulations. Use `null` for no-threshold positions |
| `limit_unit` | string | yes | Verbatim from the regulation: `mg/kg`, `µg/kg-bw/week`, `ppb`, `µg/kg-bw/day-food`, etc. |
| `status` | enum | yes | `in-force`, `active`, `superseded`, `finalized`, `proposed`, `qualitative-only`, `in-force-no-threshold` |
| `effective_date` | ISO date \| null | preferred | Date the limit came into effect. Used by the timeline cross-cut. Null for undated regulations; surfaced as a gap |
| `sunset_date` | ISO date \| null | optional | Date the regulation expires or was superseded |
| `wiki_doi` | string \| null | yes (slot) | DataCite DOI for this page |
| `source_page` \| `source_refs` | wikilink \| array | yes | The underlying source page(s) that document the regulation |
| `audience` | array of enum | yes | Always includes `regulator, educator, brand-legal`. Does not include `consumer`. See [[../page-structure.md]]. |
| `updated` | ISO date | yes | Last substantive content edit |

## Cross-cut outputs

This frontmatter is the input to:
- [[../../wiki/regulations/by-jurisdiction.md]] — auto-generated 11-jurisdiction × 11-metal coverage matrix
- [[../../wiki/regulations/timeline.md]] — auto-generated decade-grouped chronology

Both are produced by `tools/build-regulation-cross-cuts.mjs` on every prebuild. Adding a regulation page automatically populates both surfaces.

## Version history

- **1.1.0 (2026-05-28)** — added `wiki_doi` (additive).
- **1.0.0 (2026-04-25)** — initial schema.
