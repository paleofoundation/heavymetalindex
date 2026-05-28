---
schema_version: 1.1.0
last_updated: 2026-05-28
applies_to: wiki/products/*.md
---

# Product-category page schema

Product-category pages document one consumer-product category each (infant formula powder, baby cereal dry rice-based, ground cinnamon, etc.) with the routed source evidence, contamination summary, and category-level levers for brand-legal / brand-QA action. See [[../page-templates.md]] § Product-category page.

## Frontmatter fields

| Field | Type | Required | Description |
| --- | --- | :---: | --- |
| `type` | `"product"` | yes | Discriminator |
| `title` | string | yes | Category display name |
| `category` | slug | yes | URL-safe slug matching filename |
| `hmtc_category` | string | sometimes | HMTc Taxonomy v2.0 category (e.g. `"Cat 1: Infant and Child Foods"`). `"pending_taxonomy_review"` on provisional scaffolds |
| `hmtc_row` | string | sometimes | HMTc Taxonomy v2.0 row identifier. Pending while category is unresolved |
| `provisional_scaffold` | boolean | sometimes | True when the page was auto-created as a routing destination before a Step 0 Lock graduated it to a full HMTc row. See [[../order-of-operations.md]] Phase 5 |
| `wiki_doi` | string \| null | yes (slot) | DataCite DOI for this page |
| `audience` | array of enum | yes | Always includes `regulator, brand-legal, brand-qa, consumer, app` |
| `sources` | integer | yes | Auto-maintained by `tools/sync-source-counts.mjs` |
| `updated` | ISO date | yes | Last substantive content edit |

### Optional structured blocks

- `contamination_summary:` — auto-emitted by `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` when sufficient routed evidence is available
- `regulatory_anchors:` — references to `wiki/regulations/*` pages that bind in this category's native basis
- `levers:` — the brand-legal-actionable surface (procurement, supplier audit, lab method, etc.); see [[../page-templates.md]]

## Mandatory body sections

Non-stub product pages must carry ten `## H2` sections — enforced by `tools/audit-product-mandatory-sections.mjs`. Pages missing the Levers section specifically are escalated rather than just flagged (it is the brand-legal-actionable surface).

## Version history

- **1.1.0 (2026-05-28)** — added `wiki_doi` (additive).
- **1.0.0 (2026-04-25)** — initial schema.
