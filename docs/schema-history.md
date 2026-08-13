# Schema history — Heavy Metal Index Wiki

This document tracks the migration history of the wiki's structured schemas. Rule-grade vocabulary and current schema specs live in CLAUDE.md and [[docs/page-templates]]; this file is the historical record for understanding legacy frontmatter.

## Ingredient `contamination_profile` metal set

Current schema: ten metals — **Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U**.

| Date | Metals tracked | Notes |
|------|----------------|-------|
| Pre-2026-05 | Pb, Cd, iAs, tHg | Initial 4-metal subset. |
| 2026-05-03 | + Ni, Al, Cr, Sn | Extended to an 8-metal set. |
| 2026-05-08 | + tAs, U | Extended to current 10-metal ingredient-profile set. tAs added as a separate sub-block from iAs because most occurrence surveys report total arsenic and the iAs/tAs split is non-negotiable. U added because the wiki's scope is broader than the certification panel and uranium is a recognized toxic heavy metal of rising public-health attention. |
| 2026-05-12 | + `geographic_breakdown`, `seasonal_variance` sub-fields per metal | Variance arrays for brand-legal defensibility against cherry-picked-maximum attacks. See OPERATING.md initiative 7. |

The Cr sub-block carries total chromium; Cr-VI evidence lives on `[[metals/chromium-hexavalent]]` and is never substituted for total Cr in the ingredient profile. MeHg deliberately stays out of the ingredient profile because it is matrix-driven (fish/seafood-specific); MeHg evidence is captured in body prose on the small set of pages where it matters and at the product layer.

Adding an eleventh metal in the future requires extending all existing ingredient pages in lockstep; the schema-extension is mechanical and idempotent.

## Resynthesis tracking

The `last_full_resynthesis` field was formerly carried per-metal-sub-block on ingredient pages. As of 2026-05, resynthesis events are tracked in the structured-evidence layer at `data/evidence/review_events.jsonl`, which is authoritative. CLAUDE.md Part 9's conceptual logic (when to trigger full resynthesis vs incremental update) still applies; only the implementation has moved off the page frontmatter.

## Body-table format

The ingredient page body-level "Heavy metal contamination profile" table was originally a 6-column format (Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources). As of 2026-05-16, the `p95 (ppb)` column is removed from public-page body tables per the percentile-arithmetic firewall (CLAUDE.md Part 19's staff-side scope). The frontmatter `p95_ppb` field remains for app and workbench consumers. Current public format is 5 columns: Analyte | Coverage | Typical (ppb) | Confidence | Key sources.

## HMT&C analyte vocabulary

As of 2026-08-12, the certification contract distinguishes the laboratory's **eight total-element results** from additional species controls. The totals are **Pb, Cd, tAs, tHg, Ni, Sn, Al, and total Cr**. The core species cells are **iAs and Cr-VI**; **MeHg** is additionally required where a credible methylation pathway exists and otherwise receives an explicit applicability determination. This supersedes the former "HMTc-10" list, which incorrectly included Cr-VI while omitting its mandatory parent total-Cr result. Species never substitute for totals.

## Retired standards percentile frameworks

Earlier wiki conventions used occurrence-selected percentile pathways, first P90 with P10/P20 and later P97/P45. Both schemes were retired in August 2026. Current initial HMTc values are government-limit-only; public occurrence distributions are descriptive, and later tightening uses eligible HMTc certified-lot results under Governance Policy §12. Legacy fields may appear only in clearly marked historical records excluded from current generators.

## Bulk-ingest priority tier counts

Part 11 originally listed aspirational counts (~647 P1 / ~2,399 P2 / ~934 P3). The 2026-05-12 triage manifest (commit `fa96392`) supersedes these with actual counts: P1=54, P2=488, P3=18, P4=6,571, P5=16,129. The P1 pre-filter is a text-mining heuristic; many true Path A papers are classified P4 by the pre-filter and will be upgraded implicitly during bulk ingest. Treat the tier label as a rough sort key, not a final gate.

## Routing layer

Pages and sources that predate the routing layer were ingested by sessions that did not write routing rows or whose frontmatter fan-out was incomplete. A one-time routing-recovery pass over `wiki/sources/` produces the initial audit; after that pass, the file watcher and pre-commit and prebuild triggers keep the audit current automatically. If a product-category page looks thin (few sources, or fewer sources than its sibling pages), the most likely cause is that the routing layer has not been built yet for the corpus, not that the corpus is missing those sources.
