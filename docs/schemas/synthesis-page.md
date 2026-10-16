---
schema_version: 1.1.0
last_updated: 2026-05-28
applies_to: wiki/synthesis/*.md
---

# Synthesis page schema

Synthesis pages are cross-source analytical claims — places where multiple A-tier sources support a generalised finding ("organic certification is not protective against heavy metals", "alkalization does not reduce cadmium in cocoa", etc.). They are the precursor to Journal of Food Metallomics submissions and the place external citers will reach for "what does the Heavy Metal Index conclude about X across the corpus".

See [[../page-templates.md]] § Synthesis page.

## Frontmatter fields

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `type` | `"synthesis"` | yes | Discriminator |
| `title` | string | yes | Synthesis claim as a noun phrase |
| `claim` | string | yes | The synthesis claim in a single sentence |
| `confidence` | `low` \| `medium` \| `high` | yes | Confidence in the claim across the contributing sources |
| `contributing_sources` | array of wikilink | yes | All sources that contribute to the claim. Drives backlinks |
| `dissenting_sources` | array of wikilink | optional | Sources that contradict the claim, named explicitly |
| `wiki_doi` | string \| null | yes (slot) | DataCite DOI for this page. Synthesis pages are the most likely to receive DOIs first because they are the most-citable outputs |
| `audience` | array of enum | yes | Always includes `regulator, researcher, brand-legal`. Does not include `consumer`. See [[../page-structure.md]]. |
| `last_full_resynthesis` | ISO date | yes | Date the page was last re-synthesised from the full evidence set (per CLAUDE.md Part 9) |
| `updated` | ISO date | yes | Last edit (may be a small fix without re-synthesis) |

## Version history

- **1.1.0 (2026-05-28)** — added `wiki_doi` (additive).
- **1.0.0 (2026-04-25)** — initial schema.
