---
type: batch-report
title: "Codex Papers Cube manual-fetch ingest stop report"
updated: 2026-07-27
audience: [internal]
---

# Codex Papers Cube Manual Fetch ingest stop report — 2026-07-27

## Scope

- Target folder: `raw/Papers Cube Manual Fetch`
- Requested cap: N=8 PDFs
- Run mode: Phase 1 source-page ingest only; Claude audit queue remains downstream
- Outcome: stopped before ingesting a PDF

## Inventory

- PDFs found by following the `raw/Papers Cube Manual Fetch` symlink: 57
- PDFs with exact `raw_path:` already present in `wiki/sources/`: 52
- PDFs missing by exact `raw_path:` string but matched by DOI, title, checksum, or existing near-duplicate source page: 5
- New source pages written: 0
- Existing source pages enhanced: 0
- Audit-queue rows appended: 0
- Commits made: 0

## Stop Reason

The first PDF that was not already represented by an exact `raw_path:` string is:

`raw/Papers Cube Manual Fetch/Heavy Metals in Infant Clothing: Assessing Dermal Exposure Risks and Pathways for Sustainable Textile Policies.pdf`

Identity checks show this is already represented by `wiki/sources/xiong2025-heavy-metals-infant-clothing.md`:

- DOI: `10.3390/toxics13080622`
- Existing cite key: `xiong2025-heavy-metals-infant-clothing`
- Existing page updated: `2026-05-17`
- PCMF PDF SHA-256: `81eadba663aff62fa2d124976a8e12a62105e61a347331d4d08216f6a1353161`
- Existing MFK raw PDF SHA-256: `81eadba663aff62fa2d124976a8e12a62105e61a347331d4d08216f6a1353161`

However, the regenerated routing audit still lists that source in `data/evidence/routing_malformed.csv`:

`xiong2025-heavy-metals-infant-clothing,wiki/sources/xiong2025-heavy-metals-infant-clothing.md,advisory,,,ingredients,Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible.`

The source has a valid product route to `[[products/infant-clothing]]`. The missing field is `ingredients: []`. The PDF studies textile materials (cotton, polyamide, polyester, viscose, elastane and blends), but matching ingredient/material slugs do not exist in the current wiki, and this Codex lane is explicitly not allowed to create or stage `wiki/ingredients/` pages. I did not invent a placeholder ingredient slug to remove the advisory row.

Per the user instruction to stop when the routing audit cannot confirm the source is absent from `routing_malformed.csv`, this run stopped here.

## Routing Audit

Command run:

```bash
npm run evidence:source-routes
```

Result:

- Exit code: 0
- Product routing rows written: 4,272
- Source pages processed: 2,004
- Unresolved targets: 13
- Malformed sources: 1,020
- Blocking malformed sources: 0

No content changes were produced in the routing CSVs by this run.

## Duplicate / Candidate Checks

| PDF | Existing source page | Identity result | Routing status |
| --- | --- | --- | --- |
| `Heavy Metals in Infant Clothing: Assessing Dermal Exposure Risks and Pathways for Sustainable Textile Policies.pdf` | `xiong2025-heavy-metals-infant-clothing` | DOI match; PCMF and MFK PDFs have identical SHA-256 | Advisory malformed: missing `ingredients` |
| `A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy.pdf` | `bair2022-infant-toddler-food-heavy-metals-policy` | DOI match: `10.3389/fnut.2022.919913` | Not listed in unresolved or malformed |
| `mathew2015.pdf` | `vaishaly2015-health-effects-metal-groundwater` | Title/cite-key match; `mathew2015.pdf` and `mathew2015 (1).pdf` have identical SHA-256 `b6991beec8a0bd76740208d155ddee95bc24860770e0decce4d744a6c1c09070` | Advisory malformed: missing `products;ingredients;jurisdictions` |
| `Individual and Combined Contamination of the Heavy Metals in Commercial Cat and Dog Food.pdf` | `du2025-petfood-china-metals` | Preprint DOI match: `10.21203/rs.3.rs-4838876/v1`; existing page records the preprint as a near duplicate | Advisory malformed: missing `ingredients` |
| `Periconceptional maternal diet quality influences blood heavy metal concentrations and their effect on low birth weight: the Japan Environment and Children’s Study.pdf` | `okubo2023-periconceptional-diet-blood-metals-lbw` | DOI match: `10.1016/j.envint.2023.107808`; existing `raw_sha256` matches PCMF PDF | Advisory malformed: missing `products;ingredients` |

## Files Touched

- Created this report only: `wiki/batch-reports/codex-ingest-papers-cube-2026-07-27.md`

No source page, product page, ingredient page, workbench file, standards file, tool, package file, or documentation file was edited.
