---
schema_version: 1.2.0
last_updated: 2026-10-16
applies_to: wiki/products/*.md
---

# Product-category page schema

Product-category pages document one product category each (infant formula powder, baby cereal dry rice-based, ground cinnamon, etc.) with the routed source evidence, contamination summary, and category-level levers for QA and regulatory readers. See [[../page-templates.md]] § Product-category page and [[../page-structure.md]] for body order.

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
| `audience` | array of enum | yes | `regulator`, `brand-qa`, `food-safety`, `procurement`, `brand-legal`. Does not include `consumer` or `app`. See [[../page-structure.md]]. |
| `sources` | integer | yes | Auto-maintained by `tools/sync-source-counts.mjs` |
| `updated` | ISO date | yes | Last substantive content edit |

### Optional structured blocks

- `contamination_summary:` — auto-emitted by `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` when sufficient routed evidence is available
- `regulatory_anchors:` — references to `wiki/regulations/*` pages that bind in this category's native basis
- `levers:` — the brand-legal-actionable surface (procurement, supplier audit, lab method, etc.); see [[../page-templates.md]]

## Mandatory body sections

The ordered list is the product list in [[../page-structure.md]]. This schema does not keep a second list. `tools/audit-product-mandatory-sections.mjs` checks presence of the body roles. Pages missing Levers are escalated.

## Version history

- **1.2.0 (2026-10-16)** — audience drops `consumer` and `app`. Body order moved to [[../page-structure.md]].
- **1.1.0 (2026-05-28)** — added `wiki_doi` (additive).
- **1.0.0 (2026-04-25)** — initial schema.
