# Category 2 — Infant and Child Personal Care — Step Zero Amendment 1 (JSON reconciliation)

> **Taxonomy history; limit-setting method superseded 2026-08-12.** Row identities and formulation distinctions remain part of the record. Any clean/dirty terminology below describes the former taxonomy rationale only and must not select an initial HMTc limit or status. Current initial values are government-limit-only; later tightening uses eligible certified-lot data.

**Status:** Active, 2026-06-09. Resolves the Cat 2 JSON desync flagged by the 2026-06-09 whole-taxonomy
completeness audit (`taxonomy-completeness-2026-06.md`). This is a documentation + canonicalization
amendment, not a new lock decision.

## The defect

The canonical `data/taxonomy/hmtc-v2.json` carried a **7-row v2.0 scaffold** for Cat 2, while the live
`wiki/products/children-personal-care.md` asserts a **16-row architecture** "locked under Step Zero
Protocol v1.4 §0G on 2026-05-16" (`hmtc_row_count: 16`) with four clean/dirty sibling pairs — and no
Cat 2 governance doc existed. The canonical artifact silently contradicted the live, certification-driving
lock: a defensibility hazard (a hostile expert finds the source-of-truth disagreeing with the standards).

## The resolution

The JSON Cat 2 `subcategories` array is synced to the live 16-row lock (retire-in-place + append; never
renumber). The 16 rows and their four clean/dirty sibling pairs:

| Row | Slug | Pair |
|----:|------|------|
| 1 | baby-lotion-cream | |
| 2 | baby-oil | |
| 3 | baby-powder-cornstarch | clean ↔ |
| 4 | baby-talcum-powder | ↔ dirty (talc Pb/Cd/Ni/Cr) |
| 5 | baby-shampoo-body-wash | |
| 6 | baby-wipes | |
| 7 | diaper-cream-non-zno | clean ↔ |
| 8 | diaper-cream-zno | ↔ dirty (ZnO) |
| 9 | baby-sunscreen-chemical | clean ↔ |
| 10 | baby-sunscreen-mineral | ↔ dirty (mineral Pb/iAs/Cd) |
| 11 | toothpaste | |
| 12 | face-paint | |
| 13 | childrens-makeup | |
| 14 | childrens-nail-polish | |
| 15 | childrens-lip-balm-plain | clean ↔ |
| 16 | childrens-lip-balm-mineral-bearing | ↔ dirty |

This is the same never-renumber discipline applied throughout v2.1/v2.2: the JSON is brought into
agreement with the live frontmatter + lock, not the other way around.

## Drift direction
Documentation/canonicalization only; no threshold or scope change. Stops the canonical artifact from
contradicting the live lock.

## Changelog
- 2026-06-09 — JSON Cat 2 array synced to the live 16-row 2026-05-16 lock. (Cat 4 and Cat 5 arrays were
  likewise synced to live in the same pass; see `taxonomy-completeness-2026-06.md`.)
