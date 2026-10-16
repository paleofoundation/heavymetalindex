---
schema_version: 1.2.0
last_updated: 2026-10-16
applies_to: wiki/metals/*.md
---

# Metal page schema

Metal pages document one element each (lead, cadmium, inorganic arsenic, and the rest of the corpus) with toxicology, exposure, food sources, regulatory limits, and mitigation. See [[../page-structure.md]] for the only section list.

See [[../page-templates.md]] § Metal page.

## Frontmatter fields

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `type` | `"metal"` | yes | Discriminator |
| `title` | string | yes | Element name (e.g. "Lead") |
| `symbol` | string | yes | Periodic-table symbol (`Pb`, `Cd`, `iAs`, etc., using HMTc analyte vocabulary) |
| `hmtc_10` | boolean | yes | True if the metal is in the HMTc-10 analyte list (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) |
| `audience` | array of enum | yes | `regulator`, `brand-qa`, `food-safety`, `procurement`, `brand-legal`. Does not include `consumer` or `app`. See [[../page-structure.md]]. |
| `wiki_doi` | string \| null | yes (slot) | DataCite DOI for this page |
| `sources` | integer | yes | Auto-maintained by `tools/sync-source-counts.mjs` |
| `updated` | ISO date | yes | Last substantive content edit |

## Mandatory body sections

The ordered list is the metal list in [[../page-structure.md]]. The previous schema list (Quick read, Toxicology, Exposure routes, Food sources, Regulatory landscape, Vulnerable populations, Mitigation, Open questions, Microbiome effects, Source archive) is retired. It disagreed with the template, and live pages followed the template.

## Version history

- **1.2.0 (2026-10-16)** — section list retired in favor of [[../page-structure.md]]. Audience drops `consumer`.
- **1.1.0 (2026-05-28)** — added `wiki_doi` (additive).
- **1.0.0 (2026-04-25)** — initial schema.
