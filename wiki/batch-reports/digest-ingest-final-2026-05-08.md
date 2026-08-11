---
type: batch-report
report_kind: digest-final
date: 2026-05-08
phase: 6-addendum
audience: [curator]
covers:
  - "raw/Digest/ folder ingest, Batches 1-5"
  - "38 Digest source pages created"
  - "Phase 6 IandC readiness scorecard reconciliation"
  - "Cross-agent coordination with the parallel autonomous IandC session"
noindex: true
---

# Digest Ingest Final Report — 2026-05-08

## Overview

This report covers the autonomous-session Digest ingest run from this evening, complementing the parallel agent's [[batch-reports/infant-and-child-overnight-2026-05-08|Phase 6 Infant and Child Foods overnight final report]]. The two reports together cover the full overnight work product: this report covers the Digest folder ingest end-to-end; the parallel report covers the IandC subcategory rebuild work under the Part 19 framework.

## Source pages created from raw/Digest/

This run created 38 source pages across 5 batches. INGESTED.md is the canonical mapping; this report summarizes by theme.

| Batch | Theme | Source pages | Commit |
| --- | --- | ---: | --- |
| 1 | Tin (ATSDR profile + Benoy 1971 toxicity + Tarigan 2016 occurrence + Schafer & Femfert 1984 review) plus parent metals/tin.md expansion plus tin-inorganic and organotins species pages | 4 sources, 2 species pages, 1 parent rebuild | `d04abbc` |
| 2 | FDA Pb regulatory data (juice FY2005-2018, baby food FY2020-21, baby food FY2023, TDS Elements Key) | 4 sources | `9d0e44d` |
| 3 | Cocoa & chocolate Cd/Pb (Abt 2018 sample-level + Abt 2020 perspective) plus cocoa.md and chocolate.md ingredient updates | 2 sources, 2 ingredient updates | `745aeed` |
| 5 | Nickel + metals-microbiome cluster (Yang 2023 Ni cohort, Maier & Benoit 2019, Chandrangsu 2017, Bair 2022 IandC review, Stanton 2021 metallome-autism, Soto-Ocaña 2024 early-life microbiome, Yan 2025 26-metal infant serum, Zhu 2024, Ghosh 2024, Price & Skaar 2025) | 10 sources | `d5b9ea5` |
| 4 | FDA pediatric exposure assessments + Dartmouth infant-As cluster + microbiome extension + EU SCF tin opinion (Coe 2023 MeHg-microbiome, Jackson 2012 formula iAs, Thoerig 2025 systematic review, Carignan 2015/2016/2016, Pikounis biomarkers, Spungen 2019, Gavelek 2019, Flannery 2020 IRLs, Pacquette 2016 ICP-MS validation, Breysse 2022 federal Pb coordination, Coryell 2019, Assefa & Köhler 2020, Martinez-Morata 2023, Gao 2017, EU SCF 2002, Eticha 2018) | 18 sources | `66af802` |

**Total: 38 source pages, 5 commits.** Plus 2 new species pages (tin-inorganic, organotins) and 1 parent metals page rebuild (tin) from Batch 1.

## Items reviewed but not ingested

Per Digest INGESTED.md:

- **Out-of-scope (2 items):** Zhang et al. 2022 fcimb-12-924119 (general infant microbiome-immunology, no metals primary link, per CLAUDE.md Part 22); Knip et al. 2014 JAMA (hydrolyzed-formula β-cell autoimmunity trial, not heavy metals).
- **Already-ingested (2 items):** Almeida 2022 IJERPH (matches existing source page); Jackson 2012 NIH preprint nihms374391 (matches the IUPAC published version).
- **Failed to text-extract (1 item):** 1-s2.0-S2161831326000426 (numerical-only text layer; OCR needed).
- **Misfiled (1 item):** 12987520-* United Airlines boarding pass (recommend Karen move out of raw/Digest/).
- **Non-source provenance (4 items):** `Infant Formula, Powder (Non-Soy).pdf` (snapshot of heavymetalindex.com); fda_159750.csv; time_series_US_*.csv; toxic_element_infant_formula_*.xlsx (XLSX duplicate of the FDA 2026 PDF).
- **Duplicate pairs (2):** Yang 2023 ScienceDirect + Research Feeds snippet (one canonical source); Zhu 2024 fnut-11-1448388 + `(1)` byte-near-identical copies.

## Phase 6 IandC readiness scorecard reconciliation

The parallel agent's Phase 6 final report identified 25 data-gap cells across the 4 IandC subcategories. This Digest ingest closes or partially closes a meaningful subset.

### Closures and advances

| Cell | Phase 6 state | After Digest ingest | Closing source(s) |
| --- | --- | --- | --- |
| Milk-based powdered infant formula iAs | Data gap (FSA 2016 UK summary only, n_a_tier=1) | Path A n_a_tier=2-3 with primary occurrence | [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods|Jackson 2012]] sample-level formula iAs speciation; [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants|Carignan 2015]] + [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort|Carignan 2016 cohort]] U.S. infant cohort biomarker evidence; [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review|Thoerig 2025]] AJCN systematic review |
| Milk-based powdered infant formula tHg (and the wider IandC MeHg gap) | Path A thin (Pb/Cd/tAs at bar, tHg n_a_tier=1; MeHg data gap across all IandC) | New mechanistic context for MeHg fate | [[sources/coe2023-gut-microbiome-methylmercury-demethylation|Coe 2023]] gut microbiome MeHg demethylation (gnotobiotic mouse + human cohort, Walk laboratory). Note: not primary occurrence in food, so doesn't populate the MeHg occurrence cell directly, but provides the first wiki-loaded mechanism-level MeHg evidence applicable to infant exposure assessment. |
| All IandC product pages citing Bair 2022 (8 pages) | Cited but missing source page | Source page created and cross-linked | [[sources/bair2022-infant-toddler-food-heavy-metals-policy|Bair 2022]] |
| Tin-inorganic species page (canned-food row context) | Stub-only at session start | Comprehensive species page with 5 sources | ATSDR 2005 + Benoy 1971 + Tarigan 2016 + Schafer 1984 + EU SCF 2002 |
| Cocoa and chocolate Pb/Cd | All-pending in contamination_profile | in_progress with sample-level body content | [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt 2018]] FDA U.S.-market 144-sample survey + [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt 2020]] perspective |
| Metals-microbiome axis (cross-cutting, all metals) | Sparse | 13+ source pages now | Yang 2023, Maier & Benoit 2019, Chandrangsu 2017, Soto-Ocaña 2024, Coryell 2019, Coe 2023, Yan 2025, Zhu 2024, Ghosh 2024, Assefa & Köhler 2020, Gao 2017, Price & Skaar 2025, Stanton 2021 |

### Cells NOT directly closed by Digest

The following Phase 6 gaps were not addressed by this Digest ingest and remain open for raw/markdown corpus sweep:

- Cr-VI in non-formula IandC subcategories (cereals, purees, snacks). Soares 2000 milk-based formula remains the only Cr-VI-speciated source on the wiki.
- Pb/Cd/tAs/tHg second fit distribution source for infant rice cereal beyond FDA 2024 baby-food compliance.
- Toddler snacks Pb / Cd / tAs at adequate n.
- Ni / Al / Sn rice-versus-non-rice or root-versus-non-root sample-level splits.

These remain Phase 3b candidates for raw/markdown manifest priority-1 sweep.

## Updated Phase 6 readiness scorecard (incorporating Digest closures)

The Phase 6 scorecard was framed at the time of the parallel agent's report; this addendum updates it where Digest ingest changes the cell state. Per-cell state changes only; cells unchanged from the parallel agent's report are not re-listed here.

| Subcategory | Cell | Phase 6 state | After Digest |
| --- | --- | --- | --- |
| Milk-based powdered infant formula | iAs | Data gap (FSA 2016 summary only) | Path A n_a_tier=2-3 with [[sources/jackson2012-arsenic-speciation-infant-formulas-first-foods|Jackson 2012]] primary + [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review|Thoerig 2025]] systematic review + [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants|Carignan 2015]] cohort biomarker; approaching readiness bar pending basis-matched aggregate |
| All IandC | MeHg evidence framework | Data gap, no source | [[sources/coe2023-gut-microbiome-methylmercury-demethylation|Coe 2023]] adds mechanism-level evidence; primary occurrence cells still data-gapped |
| All IandC | Bair 2022 source page | Cited from 8 pages, no source page | [[sources/bair2022-infant-toddler-food-heavy-metals-policy|Bair 2022]] source page now exists |

The number of cells at the readiness bar across the 4 IandC subcategories rises from **3** (Pb / Cd / tAs in milk-based powdered formula, all driven by FDA 2026 sample-level data) to **3-4** depending on whether the milk-based-formula iAs aggregate clears the basis-matched-confidence threshold once pooled. The corresponding cells in the master summary at [[products/infant-and-child-foods-master]] should be re-evaluated.

## Cross-agent coordination

This run intentionally avoided overwriting the parallel agent's Phase 5 master summary at [[products/infant-and-child-foods-master]] and Phase 6 final report at [[batch-reports/infant-and-child-overnight-2026-05-08]]. This addendum provides the Digest-ingest delta against that scorecard rather than a replacement. The parallel agent's report is the authoritative IandC subcategory rebuild record; this report is the authoritative Digest-ingest record.

Karen's morning review can read both reports together: the parallel agent's report describes the Tier A subcategory CC candidate rebuild work; this report describes the Digest source-page deliveries that change the underlying evidence base, particularly for milk-based formula iAs.

## Schema compliance

All 38 source pages created in this run comply with the post-2026-05-08 source-page schema:

- No `## TL;DR` heading; opening prose un-headed under H1 title (per CLAUDE.md Part 6, current).
- DOI field populated where the publisher carries one; `no_doi_assigned: true` with `no_doi_reason` for the one no-DOI paper (Tarigan 2016).
- `access_url` populated where the source has a public-access URL.
- Frontmatter wikilink fields use the quoted-wikilink form `["[[folder/slug]]", ...]` per CLAUDE.md Part 14.
- Body wikilinks bare `[[folder/slug]]` per CLAUDE.md Part 14.
- Microbiome cross-link wikilinks (e.g., `[[microbiome/nickel-uric-acid-axis]]`, `[[microbiome/early-life-metals-microbiome-axis]]`) are intentional backlog markers per the unresolved-target-wikilink convention; they will become real pages when WikiBiome federation work begins.

## Constituent commit hashes

```
d04abbc  ingest: digest-batch-1-tin — 4 sources, 2 species pages, parent expansion
9d0e44d  ingest: digest-batch-2-fda-pb-regulatory — 4 FDA Pb data sources
745aeed  ingest: digest-batch-3-cocoa-chocolate — Abt 2018 + Abt 2020
d5b9ea5  ingest: digest-batch-5-nickel-microbiome — 10 source pages
66af802  ingest: digest-batch-4-fda-pediatric-and-microbiome-extension — 18 source pages
```

## What's positioned for the next autonomous run or the next Karen check-in

1. **Update IandC product page CC candidate blocks for milk-based formula iAs** to reflect the new Path A n_a_tier=2-3 state with Jackson 2012 + Carignan 2015 + Thoerig 2025. The parallel agent's milk-based-formula CC block currently shows iAs at "data gap"; this should be revisited when the parallel agent next runs.
2. **Update master summary at [[products/infant-and-child-foods-master]]** for the milk-based formula iAs row.
3. **Phase 3b raw/markdown corpus sweep** for the cells the Digest didn't close: Cr-VI in non-formula IandC, second-source for rice-cereal Pb/Cd/tAs/tHg, toddler-snack adequate-n datasets, Ni/Al/Sn rice/non-rice splits.
4. **Cleanup tasks at curator discretion:** move the misfiled boarding pass out of raw/Digest/; review the FDA 2016 grape juice CSV (fda_159750.csv) and the time-series CSV for ingest applicability; OCR the failed-extract PDF.

End of digest ingest final report.
