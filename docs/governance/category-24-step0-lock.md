# Category 24 — Dairy and Milk Products — Step Zero Lock

**Status:** Scope lock (Step Zero, 2026-06-08); first government-limit compiler completed 2026-08-12. The original lock created routing destinations without candidate values; all eight rows now have auditable compiled determinations in `data/workbench/standards/cat24-compiled/`.
**Domain:** Foods, ingestion. **Number:** 24 (appended; no existing number changed).
**Exposure pathway:** Ingestion (oral). **Jurisdiction:** FDA (Grade "A" PMO, 21 CFR), EU
Reg. 2023/915, Codex; FDA/EU for milk powders and condensed/evaporated.
**Panel:** eight totals — Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr — plus iAs and Cr-VI species controls and an explicit MeHg applicability cell.

## Why this earns a number

Dairy as a matrix has no clean home today. Camel milk routes nowhere, and camel-milk infant-formula
gateway claims have no parent. Cd/Pb reporting for milk-as-matrix belongs with dairy, distinct from
meat (Cat 11) and from plant "milks" (Cat 5). Milk is generally a low-metal matrix, but feed/soil
transfer of Cd and Pb, and species and processing differences (powders concentrate solids), warrant
explicit rows.

## Row architecture (scaffold)

| Row | Name | Slug |
|----:|------|------|
| 1 | Liquid milk — cow | `dairy-milk-cow` |
| 2 | Liquid milk — goat / sheep / other ruminant | `dairy-milk-goat-sheep` |
| 3 | Camel milk | `dairy-milk-camel` |
| 4 | Cheese | `dairy-cheese` |
| 5 | Yogurt and cultured dairy | `dairy-yogurt-cultured` |
| 6 | Cream | `dairy-cream` |
| 7 | Milk powders (whole, skim, specialty) | `dairy-milk-powders` |
| 8 | Condensed and evaporated milks | `dairy-condensed-evaporated` |

Native basis per row: liquid rows as-consumed; powders as-placed-on-market.

## Boundary rules

- Product marketed for ages 0-5, or any infant/follow-on formula, routes to **Cat 1** regardless of
  dairy base. Camel-milk infant formula routes to Cat 1; camel milk sold as a general beverage routes
  here (Row 3).
- **Butter and ghee remain Cat 7 Row 3** (dairy-fat platform, already locked) and cross-link here;
  they do not migrate in this pass.
- Plant "milks" (oat, almond, soy, rice) route to **Cat 5**, not here — they are not dairy.
- A dairy product with a Supplement Facts panel routes to **Cat 16**.

## Platform notes

Cd and Pb enter milk through feed and soil; milk is a comparatively low-metal matrix, so most rows
are expected clean-by-default with powders the concentration-format variant. Camel milk is frequently
marketed with elevated health claims; treat occurrence on its own evidence, not by analogy to cow milk.

## Drift direction

Additive; scaffold only; no thresholds. Resolves the homeless camel-milk and milk-and-dairy scaffolds.

## Changelog
- 2026-08-12 — Completed the first sovereign-limit compiler pass for all eight rows, including disclosed general-dairy and formula read-across where no exact dairy-form maximum exists; occurrence evidence did not select any value.
- 2026-06-08 — Step Zero scaffold lock. 8 rows defined as routing destinations; no candidate values.
  `milk-and-dairy` scaffold promotes to this category's master node.
