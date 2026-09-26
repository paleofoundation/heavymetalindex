# Schema documentation

This directory documents the on-disk frontmatter schemas the Heavy Metal Index uses. It is the contract between the wiki's data layer and every downstream consumer: the static site, the corpus counter, the routing audit, the upcoming `/api/contamination` endpoint, the JSON-LD `ScholarlyArticle` injection, the future MCP server, and the future consumer app.

Schema changes are migrations — they are tracked in [[../schema-history.md]] and accompanied by an idempotent migration script under `tools/migrate-*.mjs`.

## Stability commitment

Field names are treated as part of the public contract. Renames are expensive once consumers depend on them. The discipline:

- **Adding a new field** is always safe (additive change). New fields land as nullable and unpopulated until the migration that populates them.
- **Renaming a field** requires a deprecation period: the old name continues to be emitted (and read) for one full release cycle, with both pointing at the same backing value, before the old name is retired.
- **Removing a field** requires a deprecation period plus a written rationale in `docs/schema-history.md`. No silent deletions.
- **Changing a field's type** (string → array, scalar → object) is treated as a rename: old name keeps the old type, new name carries the new type, both populated during the transition.

This is Cochrane-style schema hygiene. The cost is small while the consumer surface is small; it scales linearly even as the API, MCP server, and downstream integrators land.

## Per-page schemas

- [[source-page.md|Source pages]] — `wiki/sources/*.md`
- [[geo-hist.md|Geography, time, and practice fields]] — optional fields on measured concentration rows in `data/evidence/`
- [[rice-arsenic-baseline.md|Rice arsenic Ground Truth contract]]: qualifying ledger rows for the public rice arsenic baseline scaffold
- [[ingredient-page.md|Ingredient pages]] — `wiki/ingredients/*.md`
- [[product-page.md|Product-category pages]] — `wiki/products/*.md`
- [[metal-page.md|Metal pages]] — `wiki/metals/*.md`
- [[regulation-page.md|Regulation pages]] — `wiki/regulations/*.md`
- [[synthesis-page.md|Synthesis pages]] — `wiki/synthesis/*.md`

## Cross-cutting fields

A small set of fields applies to every citable page type:

| Field | Type | Status | Purpose |
| --- | --- | --- | --- |
| `title` | string | required | Human-readable page title |
| `audience` | array of enum | required | One or more of `regulator`, `brand-legal`, `brand-qa`, `educator`, `consumer`, `researcher`, `journalist`, `app` |
| `updated` | ISO date | required | Date of last substantive content edit. Git history is the authoritative version record; this field is a convenience for in-page rendering |
| `wiki_doi` | string \| null | placeholder | DataCite DOI for the wiki page itself. Distinct from `doi:` on source pages (which is the underlying paper's DOI). Will be populated by the DOI-minting integration; reserved as a stable field path so external citers can depend on it now |
| `noindex` | boolean | optional | If true, exclude from sitemap and search indexing |
| `auto_generated` | boolean | optional | If true, page is derived from other pages by a generator under `tools/`. Counters, JSON-LD injection, and DOI minting skip these. Examples: `regulations/by-jurisdiction.md`, `regulations/timeline.md` |

## Schema versioning

Each per-page schema doc declares a `version:` at the top of its frontmatter. Bump:

- **Major version** when a field is removed or its type changes incompatibly.
- **Minor version** when a field is added (additive change).
- **Patch version** when a field's documented semantics tighten without changing the on-disk shape.

The version is intended for downstream consumers that want to assert "I read schema v1.x". Today the wiki itself does not branch behavior on the version; the discipline is the value.

## Migration audit trail

Every migration script under `tools/migrate-*.mjs` writes one row per touched page to `data/evidence/migrations/<migration>-<date>.csv`. The audit trail is meant to be re-readable years later without git archaeology.

Current migrations:

- `tools/migrate-future-slots.mjs` — adds `wiki_doi`, and (on source pages only) `sampling_locations`, `sampling_year_range`. Idempotent. Audit at `data/evidence/migrations/future-slots-<date>.csv`.

## When this directory needs to be updated

- Any new field added to a page type. Document the field, its type, its purpose, and whether it is populated by ingest or by a generator.
- Any change in field semantics, even if the on-disk shape is unchanged.
- Any new page type. Create a new `docs/schemas/<page-type>-page.md` and link it from this index.
- Any new cross-cutting field. Document it in the table above.

The discipline: a downstream consumer (the future API, MCP server, consumer app) should be able to read these docs and write integration code without reading any wiki page or generator source.
