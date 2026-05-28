---
schema_version: 1.1.0
last_updated: 2026-05-28
applies_to: wiki/metals/*.md
---

# Metal page schema

Metal pages document one element each (lead, cadmium, inorganic arsenic, etc.) with toxicology, exposure routes, food sources, regulatory landscape, vulnerable populations, mitigation, and the source archive.

See [[../page-templates.md]] § Metal page.

## Frontmatter fields

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `type` | `"metal"` | yes | Discriminator |
| `title` | string | yes | Element name (e.g. "Lead") |
| `symbol` | string | yes | Periodic-table symbol (`Pb`, `Cd`, `iAs`, etc., using HMTc analyte vocabulary) |
| `hmtc_10` | boolean | yes | True if the metal is in the HMTc-10 analyte list (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) |
| `audience` | array of enum | yes | Always includes `regulator, educator, consumer, researcher` |
| `wiki_doi` | string \| null | yes (slot) | DataCite DOI for this page |
| `sources` | integer | yes | Auto-maintained by `tools/sync-source-counts.mjs` |
| `updated` | ISO date | yes | Last substantive content edit |

## Mandatory body sections

Per [[../page-templates.md]] § Metal page: Quick read, Toxicology, Exposure routes, Food sources, Regulatory landscape, Vulnerable populations, Mitigation, Open questions, Microbiome effects, Source archive.

## Version history

- **1.1.0 (2026-05-28)** — added `wiki_doi` (additive).
- **1.0.0 (2026-04-25)** — initial schema.
