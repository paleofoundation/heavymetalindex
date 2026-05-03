# HMTc Category 1 — Slug Architecture and Row Metadata Schema

**Status:** Draft methods-paper section. For Karen's review.
**Date:** 2026-04-27
**Scope:** Category 1 (Infant and Child Foods, Ages 0–5). Sixteen-row Expanded Subcategory List per the locked HMTc Step 0 output.
**Repo placement note:** This document is HMTc methodology, not wiki content. It is filed at the workspace root so it is adjacent to but architecturally separate from `wiki/`, per the wiki/HMTc firewall in `CLAUDE.md`. Move to a dedicated HMTc workspace when one exists.

## Why this section exists

The HMTc methods paper documents the row architecture that Steps 0, 1, 2, and 3 operate on. Two architectural decisions are made here. First, the slug pattern that names each row. Second, the metadata field that encodes the clean-counterpart (CC) relationship between rows. Both decisions are defensibility-load-bearing: they propagate into the Master Limit Table, the Standards Briefing, the per-row regulatory-floor sourcing, and the CC Source Data Package. Locking them before downstream work begins prevents rework if the convention is challenged later.

## Decision 1 — Slugs are purely descriptive identifiers

Each row receives a slug derived from the canonical row label, lowercase, hyphen-separated, with parenthetical variants flattened into hyphenated suffixes. Slugs are stable, opaque to relational structure, and do not encode pointers to other rows.

The reasoning rests on three principles. Slugs function as identifiers in URLs, file paths, frontmatter keys, and downstream pipeline tables, so they must be stable across schema changes. Encoding a relationship in the slug (such as `-cc-from-row-8`) creates brittleness, because any rename or split of the referenced row breaks every slug that referenced it, silently. Within-row variant suffixes (such as `-non-soy` versus `-soy-based`) are a different case from relational pointers, because the variant is the row's own differentiating attribute, not a link to another row. Encoding the variant in the slug is therefore appropriate and consistent with the locked Expanded Subcategory List's parenthetical-variant labeling.

This decision is consistent with the machine-readable-frontmatter convention established in the project's `CLAUDE.md` for ingredient pages, where structured data lives in YAML fields that the app and downstream queries consume directly, rather than being parsed out of slug strings.

## Decision 2 — CC relationships live in a `cc_relationship` metadata field

Each row carries a `cc_relationship` block in its frontmatter that names the row's role (clean benchmark, contamination platform, or independent), the scope of the relationship (within-row, cross-row, or none), and the partner rows by slug, with the metals to which the relationship applies and the partner's role. The block is symmetrical: where row A references row B, row B references row A.

The schema accommodates four relationship topologies that the locked Category 1 list exhibits. Within-row pairs (a clean-benchmark row and a contamination-platform row split from the same base subcategory). Cross-row pairs (a contamination-platform row whose CC source is a different row, not a sibling within the same base subcategory). Aggregate-source relationships (a contamination-platform row whose CC source is not a single row but a defined aggregate of multiple rows, used here for fish-containing baby foods on MeHg). Independent rows (no CC relationship, either because no contamination platform exists for the subcategory or because the row stands alone in Category 1).

## `cc_relationship` schema

```yaml
cc_relationship:
  role: clean_benchmark | contamination_platform | independent
  scope: within_row | cross_row | aggregate_source | none
  partners:
    - slug: <slug-of-partner-row OR aggregate-handle>
      partner_type: row | row_aggregate
      role_of_partner: clean_benchmark | contamination_platform
      metals: [<metal-symbols>]
      notes: <optional, free-text qualification>
  aggregate_definition:        # present only when scope is aggregate_source on this side
    handle: <aggregate-handle, e.g., "category-1-non-fish">
    member_slugs: [<slug>, <slug>, ...]
    rationale: <one-line explanation of why this aggregate constitutes the clean source>
```

Notes on the schema. The `partners` list is plural because a row can stand in multiple CC relationships across different metals (a clean benchmark on the soy/non-soy axis, for example, can in principle also serve as a cross-row CC source for another row on a different metal). Aggregates are addressed through a stable handle in the slug field with `partner_type: row_aggregate`, and the aggregate definition is recorded once on the row that uses it as a CC source. Symmetry is enforced by validation: every partner reference must have a corresponding entry on the partner side, except for aggregate sources, where the aggregate is defined on the consuming side only.

## Category 1 — sixteen-row slug list with row metadata

The slugs below match the parenthetical-variant convention of the locked Expanded Subcategory List. Where the locked label includes a status qualifier rather than a substantive scope qualifier (such as "(general)" on row 7, which marks "no split has been made yet" rather than identifying a specific scope), the slug omits the qualifier and the status is captured in the `variant_type` field.

### Row 1 — `infant-formula-powder-non-soy`

```yaml
row_number: 1
label: "Infant formula, powder (non-soy)"
slug: infant-formula-powder-non-soy
base_taxonomy: infant-formula-powder
variant_type: clean_benchmark
provenance: split_from_base
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-powder-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
```

### Row 2 — `infant-formula-powder-soy-based`

```yaml
row_number: 2
label: "Infant formula, powder (soy-based)"
slug: infant-formula-powder-soy-based
base_taxonomy: infant-formula-powder
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: split_from_base
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: infant-formula-powder-non-soy
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Al, Ni, Cd]
```

### Row 3 — `infant-formula-rtf-liquid-non-soy`

```yaml
row_number: 3
label: "Infant formula, RTF liquid (non-soy)"
slug: infant-formula-rtf-liquid-non-soy
base_taxonomy: infant-formula-rtf-liquid
variant_type: clean_benchmark
provenance: split_from_base
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
```

### Row 4 — `infant-formula-rtf-liquid-soy-based`

```yaml
row_number: 4
label: "Infant formula, RTF liquid (soy-based)"
slug: infant-formula-rtf-liquid-soy-based
base_taxonomy: infant-formula-rtf-liquid
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: split_from_base
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-non-soy
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Al, Ni, Cd]
```

### Row 5 — `baby-cereals-dry-non-rice`

```yaml
row_number: 5
label: "Baby cereals / grain products, dry (non-rice)"
slug: baby-cereals-dry-non-rice
base_taxonomy: baby-cereals-dry
variant_type: clean_benchmark
provenance: split_from_base
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: baby-cereals-dry-rice-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
```

### Row 6 — `baby-cereals-dry-rice-based`

```yaml
row_number: 6
label: "Baby cereals / grain products, dry (rice-based)"
slug: baby-cereals-dry-rice-based
base_taxonomy: baby-cereals-dry
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: baby-cereals-dry-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
```

### Row 7 — `fruit-purees`

```yaml
row_number: 7
label: "Fruit purées (general)"
slug: fruit-purees
base_taxonomy: fruit-purees
variant_type: independent_no_split
provenance: base_taxonomy
cc_relationship:
  role: independent
  scope: none
  partners: []
```

### Row 8 — `non-root-vegetable-purees`

```yaml
row_number: 8
label: "Non-root vegetable purées"
slug: non-root-vegetable-purees
base_taxonomy: vegetable-purees
variant_type: independent_serves_as_cross_row_cc
provenance: base_taxonomy
cc_relationship:
  role: clean_benchmark
  scope: cross_row
  partners:
    - slug: root-vegetable-purees
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Cd, Pb]
      notes: "Non-root vegetable purées serve as the clean cross-row CC source for root-vegetable purées on Cd and Pb. Within row 8 itself, no within-row contamination split exists."
```

### Row 9 — `root-vegetable-purees`

```yaml
row_number: 9
label: "Root-vegetable purées"
slug: root-vegetable-purees
base_taxonomy: vegetable-purees
variant_type: contamination_platform_cross_row
platform_metals: [Cd, Pb]
provenance: base_taxonomy
cc_relationship:
  role: contamination_platform
  scope: cross_row
  partners:
    - slug: non-root-vegetable-purees
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Cd, Pb]
      notes: "Cross-row CC: clean counterpart lives in row 8, not as a sibling within a vegetable-purées base split."
```

### Row 10 — `meat-and-poultry-purees`

```yaml
row_number: 10
label: "Meat and poultry purées"
slug: meat-and-poultry-purees
base_taxonomy: meat-and-poultry-purees
variant_type: independent_added_step_0c
provenance: added_step_0c_no_existing_home
cc_relationship:
  role: independent
  scope: none
  partners: []
```

### Row 11 — `fish-containing-baby-foods`

```yaml
row_number: 11
label: "Fish-containing baby foods"
slug: fish-containing-baby-foods
base_taxonomy: fish-containing-baby-foods
variant_type: contamination_platform_added_step_0c
platform_metals: [MeHg]
provenance: added_step_0c_contamination_platform
cc_relationship:
  role: contamination_platform
  scope: aggregate_source
  partners:
    - slug: "aggregate:category-1-non-fish-baby-foods"
      partner_type: row_aggregate
      role_of_partner: clean_benchmark
      metals: [MeHg]
      notes: "MeHg variation across fish species is handled in the CC derivation for this row, not as additional rows."
  aggregate_definition:
    handle: category-1-non-fish-baby-foods
    member_slugs:
      - infant-formula-powder-non-soy
      - infant-formula-powder-soy-based
      - infant-formula-rtf-liquid-non-soy
      - infant-formula-rtf-liquid-soy-based
      - baby-cereals-dry-non-rice
      - baby-cereals-dry-rice-based
      - fruit-purees
      - non-root-vegetable-purees
      - root-vegetable-purees
      - meat-and-poultry-purees
      - mixed-meals-non-rice
      - mixed-meals-rice-containing
      - fruit-juice-not-canned
      - teething-and-snacks-non-rice
      - teething-and-snacks-rice-based
    rationale: "Non-fish baby foods constitute the clean reference distribution for MeHg in Category 1; fish-containing baby foods diverge from this distribution because of bioaccumulation, which is the contamination platform being characterized."
```

### Row 12 — `mixed-meals-non-rice`

```yaml
row_number: 12
label: "Mixed meals, non-rice"
slug: mixed-meals-non-rice
base_taxonomy: mixed-meals
variant_type: clean_benchmark
provenance: split_from_base
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: mixed-meals-rice-containing
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
```

### Row 13 — `mixed-meals-rice-containing`

```yaml
row_number: 13
label: "Mixed meals, rice-containing"
slug: mixed-meals-rice-containing
base_taxonomy: mixed-meals
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: mixed-meals-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
```

### Row 14 — `fruit-juice-not-canned`

```yaml
row_number: 14
label: "Fruit juice (not canned)"
slug: fruit-juice-not-canned
base_taxonomy: fruit-juice
variant_type: independent_scope_qualified
provenance: base_taxonomy
scope_exclusions: [canned-fruit-juice]
cc_relationship:
  role: independent
  scope: none
  partners: []
```

### Row 15 — `teething-and-snacks-non-rice`

```yaml
row_number: 15
label: "Teething & snacks (non-rice)"
slug: teething-and-snacks-non-rice
base_taxonomy: teething-and-snacks
variant_type: clean_benchmark
provenance: split_from_base
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: teething-and-snacks-rice-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [iAs, Cd, Pb]
```

### Row 16 — `teething-and-snacks-rice-based`

```yaml
row_number: 16
label: "Teething & snacks (rice-based)"
slug: teething-and-snacks-rice-based
base_taxonomy: teething-and-snacks
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: teething-and-snacks-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
```

## Summary table

The table below is a compact reference index for the methods paper. Full per-row metadata is in the YAML blocks above.

| # | Slug | Variant type | CC scope | Platform metals |
|---|------|--------------|----------|-----------------|
| 1 | `infant-formula-powder-non-soy` | clean_benchmark | within_row | — |
| 2 | `infant-formula-powder-soy-based` | contamination_platform | within_row | Al, Ni, Cd |
| 3 | `infant-formula-rtf-liquid-non-soy` | clean_benchmark | within_row | — |
| 4 | `infant-formula-rtf-liquid-soy-based` | contamination_platform | within_row | Al, Ni, Cd |
| 5 | `baby-cereals-dry-non-rice` | clean_benchmark | within_row | — |
| 6 | `baby-cereals-dry-rice-based` | contamination_platform | within_row | iAs, Cd, Pb |
| 7 | `fruit-purees` | independent_no_split | none | — |
| 8 | `non-root-vegetable-purees` | independent_serves_as_cross_row_cc | cross_row | — |
| 9 | `root-vegetable-purees` | contamination_platform_cross_row | cross_row | Cd, Pb |
| 10 | `meat-and-poultry-purees` | independent_added_step_0c | none | — |
| 11 | `fish-containing-baby-foods` | contamination_platform_added_step_0c | aggregate_source | MeHg |
| 12 | `mixed-meals-non-rice` | clean_benchmark | within_row | — |
| 13 | `mixed-meals-rice-containing` | contamination_platform | within_row | iAs, Cd, Pb |
| 14 | `fruit-juice-not-canned` | independent_scope_qualified | none | — |
| 15 | `teething-and-snacks-non-rice` | clean_benchmark | within_row | — |
| 16 | `teething-and-snacks-rice-based` | contamination_platform | within_row | iAs, Cd, Pb |

## Validation rules implied by the schema

The methods paper should call out the following invariants for downstream programmatic checks. CC relationships are symmetrical between row partners (every partner reference has a matching entry on the partner row); aggregate sources are the single exception, recorded only on the consuming side. Row 11's aggregate definition lists every Category 1 row except itself. Within-row pairs share a `base_taxonomy` value; cross-row pairs do not. The metals list on a contamination-platform row's `platform_metals` field equals the union of metals across that row's `cc_relationship.partners[*].metals`. Slugs are unique within Category 1 and within HMTc as a whole; aggregate handles use the `aggregate:` prefix to prevent collision with row slugs.

## Open items not resolved here

Two items remain open and are explicit dependencies on the next round of Step 0 work, not deficiencies in the slug architecture itself.

The first is the Regulatory Floor Table for the sixteen rows across all eight metals. The Step 0 protocol governs that work, and the protocol document is not present in this Cowork environment, only summarized in the loaded skill. Eleven confirmed regulatory corrections from the skill cover the most load-bearing Category 1 cells (FDA Closer to Zero Lead values, EU Regulation 2023/915 Cd values, EU Regulation 2024/1987 Ni values for liquid formula and powder formula), but the full per-row sourcing for the remaining cells requires the detailed Step Zero Protocol to follow documented method faithfully.

The second is the CC Source Data Package for rows that have a CC relationship (rows 2, 4, 6, 9, 11, 13, 16). Path A versus Path B selection per row per metal, the underlying source data, and the percentile or LOQ calculation that yields each CC_candidate value all depend on the Step Zero Protocol being available in full. Proceeding without it would require improvising the path-selection logic, which is exactly the form of methodological drift the audit pipeline is designed to catch.

Both items should be sequenced after the Step Zero Protocol document is made available to this environment, either by mounting it as a skill resource or by placing a copy in the workspace folder.
