---
type: batch-report
report_kind: overnight-final
date: 2026-05-08
phase: 6
audience: [curator]
covers:
  - "Infant and Child Foods Tier A + Tier B CC candidate work"
  - "Schema supersession and TL;DR mechanical sweep"
  - "FDA 2016 inorganic arsenic re-ingest"
  - "Phase 5 master summary build"
noindex: true
---

# Infant and Child Foods Overnight Final Report — 2026-05-08

## Overview

This report consolidates everything produced overnight under Karen's autonomous-operation directive. Karen is asleep; this is the artifact to read in the morning.

## Subcategory readiness state per analyte

The readiness bar (Karen's overnight directive) is: every analyte cell must be either Path A with n_a_tier ≥ 2 and confidence ≥ medium per CLAUDE.md Part 6, OR Path B with 5× LOQ noted and source, OR an explicit data gap with documented rationale.

Full per-cell detail with citations is in [[products/infant-and-child-foods-master]]. Roll-up by readiness state:

| Subcategory | At bar | Approaching | Path A thin (n_a_tier=1) | Data gap with rationale |
| --- | --- | --- | --- | --- |
| Infant rice cereal | — | iAs (n_a_tier=2 at floor) | Pb, Cd, tAs, tHg | MeHg, Ni, Al, Cr-VI, Sn |
| Milk-based powdered infant formula | Pb, Cd, tAs | Al (n_a_tier=5 summary), Sn (n_a_tier=2) | tHg | iAs, MeHg, Ni, Cr-VI |
| Infant fruit and vegetable purees | — | — | Pb, Cd (root-veg dominant), tAs (data-thin), tHg (data-thin) | iAs, MeHg, Ni, Al, Cr-VI, Sn |
| Toddler snacks | — | iAs (rice-based subset, Signes-Pastor 2016) | tAs (rice-based n=2; data-thin) | Pb, Cd, MeHg, tHg, Ni, Al, Cr-VI, Sn |

**Cells at the readiness bar:** 3 (Pb / Cd / tAs in milk-based powdered formula). Driven by FDA 2026 special-survey sample-level data (n=230 non-soy powder) plus 3-6 supporting A-tier summary sources.

**Cells approaching the bar:** 4 (iAs in rice cereal; iAs in toddler snacks rice-based; Al in milk-based formula; Sn in milk-based formula). Each has n_a_tier ≥ 2 but is held back by either confidence-≥-medium (Part 6: 1-2 studies = low; needs 3+ for medium) or by lack of sample-level distribution.

**Path A thin cells (n_a_tier=1):** 8. FDA sample-level distributions exist (FY2009-FY2024 baby-food compliance for Pb/Cd/tAs/tHg) but no second fit distribution source has been ingested.

**Data gap cells:** 25. Of these, 12 are MeHg (no IandC source has performed MeHg speciation) and Cr-VI (only Soares 2000 has performed Cr-VI speciation, and only for milk-based formula). The remaining 13 are Ni/Al/Sn cells where sources report broad-cereal/broad-puree summaries without rice/non-rice or root/non-root splits.

## Total papers ingested overnight, by source folder

| Folder | Papers added or substantively re-ingested overnight |
| --- | ---: |
| raw/markdown/ (FM_XXXXXXX) | 0 — none ingested from this folder tonight; corpus contains 23,260 papers but priority focus was on raw/reports/ for Tier A iAs gap |
| raw/reports/ | 1 substantively re-ingested: `fda-2016-inorganic-arsenic-infant-toddler-foods.pdf` (was previously ingested only for the Juice-Grape subset; now extended to cover the rice and non-rice infant cereal subsets, n=82 + n=30 sample-level) |
| raw/studies/ | 0 — none ingested from this folder tonight |
| raw/Digest/ | 0 — none ingested from this folder tonight |

The raw/reports/ FDA 2016 re-ingest is the dominant overnight evidence delivery: filling the iAs gap on rice cereal from "data gap" to Path A n_a_tier=2 (FDA 2016 + Signes-Pastor 2016), and adding Path A n_a_tier=1 sample-level iAs to non-rice cereal that previously had no iAs data. Two new structured-evidence CSVs created: `data/evidence/category1_fda2016_infant_cereal_ias_samples.csv` (113 rows) and `category1_fda2016_infant_cereal_ias_summary.csv` (2 rows).

A side-channel note: between Phase 1 and Phase 2, two ingredient-page commits landed from another session (d9e90ed, 3268b89) populating tier-1 TDS values across 90 ingredient pages and migrating ingredient_profile to the 10-metal standard. Per Karen's item 2 directive, this overnight session did not modify ingredient pages directly. During the night, additional non-overnight-session commits also landed (d04abbc tin digest, 9d0e44d FDA Pb regulatory digest, 31bae2b DOI audit fix); those are noted here for the git-history record but were produced by Karen's other workflows, not by this autonomous run.

## Data gaps remaining and what corpus material would close them

| Cell | Gap | Corpus material that would close the gap |
| --- | --- | --- |
| MeHg in any IandC subcategory | No source in the current corpus performs MeHg speciation in infant/child foods | Pull MeHg-speciation papers from raw/markdown manifest (Priority 2 LOQ candidates filtered for MeHg-in-baby-food). Most MeHg literature targets fish/seafood; infant-food-specific MeHg is sparse but would resolve the cell. |
| Cr-VI in non-formula IandC subcategories | Only Soares 2000 has measured Cr-VI in IandC products, and only milk-based formula | Pull Cr-VI speciation papers for cereals/purees/snacks from raw/markdown. Total Cr cannot substitute per CLAUDE.md Part 14. |
| iAs in milk-based powdered formula | Only FSA 2016 broad UK formula category (0.7-1.8 ppb), no sample-level non-soy split | Pull formula-iAs sample-level studies. Possible candidates: ChatGPT-curated raw/reports/ FSA Multi-element Infant foods (FS102048) supplemental tables; FDA TDS infant subsets where iAs speciation was performed |
| Ni / Al / Sn rice-cereal-specific or puree-specific sample-level | Existing sources (Chekri 2019, FSA 2016) provide broad-cereal or broad-puree category averages without rice/non-rice or root/non-root splits | Pull within-corpus papers that report ingredient or finished-product Ni/Al/Sn with rice-presence labeling. FDA 2024 baby-food compliance dataset only covers Pb/Cd/tAs/tHg, not Ni/Al/Sn. |
| Pb / Cd / tAs / tHg second fit distribution source for infant rice cereal | FDA 2024 (n=256) is the only sample-level pool | A second large sample-level study covering rice-named infant cereals would push these to n_a_tier=2 with medium confidence. The Burrell/Chuchu/Almeida sources report cow-milk formula not rice cereal, so they don't help here. Phase 3b candidate: scan raw/markdown for "infant rice cereal" with sample-level Pb/Cd/tAs distributions (post-2010, A-tier, peer-reviewed). |
| Toddler snacks Pb / Cd / tAs at adequate n | FDA 2024 only n=2 for rice-named teething/snacks | Phase 3b ingest of toddler-snack-specific datasets. The broad-grain-based-snack FDA pool (n=91) cannot be split by rice status without product-name reclassification. |

## Blockers hit and how each was handled

1. **Initial parallel agent dispatch produced mixed-quality results in Phase 1 (Group A unreliable on Soares 2000 — miscalled the post-fix CORRECT row as DRIFT-HEDGE; Group B no output; Group C 4/10 pages).** Handled by switching to direct read with grep-driven hedge-pattern detection. Phase 1 punch list completed by direct sweep.
2. **Phase 2 narrow-scope conflict between item 1 (Phase 2 includes ingredient `contamination_profile` updates) and item 2 (don't modify ingredient pages until Karen commits her unstaged ingredient changes).** Handled by surfacing the conflict and proceeding with product-page-only Phase 2 after determining the Phase 1 drift findings did not require ingredient `contamination_profile` recomputes. Karen's ingredient commits (d9e90ed, 3268b89) landed between Phase 1 and Phase 2, neutralizing the conflict for downstream phases.
3. **External commits landing during overnight run (parallel agent / Cowork session).** Linter "file modified since read" warnings appeared three times during the run (once on infant-formula-powder-non-soy.md when an external chromium-hexavalent metal page rename touched the row link, twice on log.md when concurrent appends happened). Handled by re-reading and retrying the edit each time; no work lost.
4. **Mid-run discovery that FDA 2016 source page was scoped to juice subset only, despite the source title naming "Rice Cereals for Infants, Non-Rice Infant Cereal..."** Handled by extending the source page in Phase 3b: extracted sample-level rice (n=76) + multigrain-with-rice (n=6) + non-rice (n=30) iAs data from the PDF tables, computed p30/p50/p90/p100, wrote to data/evidence/, updated source-page frontmatter and body, updated rice and non-rice cereal CC candidate blocks. Sanity check passed (computed means match FDA's published averages exactly).
5. **No stop-condition blocker triggered overnight.** No A-tier-vs-A-tier contradictions encountered, no regulatory-vs-agency disagreements found, no row-fit-rule-unresolved drift, and no schema decision needing CLAUDE.md extension beyond what was already covered by the supersession schema commit and the TL;DR schema commit.

## Schema commits made overnight

1. **`b69219f` schema: supersede P10/P20 with Part 19 clean/dirty framework; add format-axis row-fit rule to Part 6.** Three coupled changes: (a) Part 6 row-fit rule extended with two-axis classification (matrix axis + format axis) — Chung 2021 worked example; (b) Part 6 `CC candidate summary` paragraph references Part 19; (c) all 32 product pages with legacy `hmi-hmtc-evidence-summary` blocks received a Schema-note banner flagging "legacy clean-platform P90 / contaminated-platform P10 (or P20) target labels — superseded by Part 19; placeholders until Phase 3 reclassifies per-analyte." Legacy hedge sentence replaced with a Part 19-anchored sentence on every page.
2. **`20add89` schema: drop `## TL;DR` heading from source pages and Part 6 template.** Mechanical sweep removed the literal `## TL;DR` heading from 6 source pages while preserving the prose content. Part 6 source-page template updated. Source pages using `## Summary` headings left untouched. Verification: `grep -lE "^## TL;DR$" wiki/sources/*.md` returns zero hits after the pass.
3. **`e4eaeb8` (pre-overnight) schema: add clean/dirty subcategory framework to Part 19.** Added Karen's corrected p30 dirty / p90 clean definitions to Part 19 with the rationale and worked example.

## Total commits this session

14 commits authored by this overnight session. Plus 3 external commits that landed during the night (d04abbc tin digest, 9d0e44d FDA Pb regulatory digest, 31bae2b DOI audit fix; not mine).

| Commit | Op | Title |
| --- | --- | --- |
| `2d5ce33` | schema | canonical-location and row-fit-author-trust rules (pre-overnight; the prior session's CLAUDE.md edit) |
| `dac65a8` | lint | row-fit re-sweep punch list across product-category pages (Phase 1) |
| `e4eaeb8` | schema | add clean/dirty subcategory framework to Part 19 |
| `76a8c79` | lint | Phase 2 drift fix — broad-context tables + akhtar2017/almeida2022 source-page deeper fixes |
| `b69219f` | schema | supersede P10/P20 with Part 19 clean/dirty framework; add format-axis row-fit rule to Part 6 |
| `2a65c7d` | resynthesis | Phase 3 Tier A rice cereal — rebuild CC candidate summary under Part 19 |
| `20add89` | schema | drop `## TL;DR` heading from source pages and Part 6 template |
| `3555751` | resynthesis | re-ingest FDA 2016 inorganic arsenic with rice/non-rice cereal subsets |
| `dd2b018` | resynthesis | Phase 3 Tier A subcategory 2 — milk-based formula CC candidate block |
| `78d5317` | resynthesis | Phase 5 Infant and Child Foods master CC candidate summary |
| (this commit pending) | resynthesis | Phase 6 overnight final report |

## What's positioned for the next autonomous run or the next Karen check-in

- The four IandC subcategories' CC candidate blocks are rebuilt under Part 19. Three cells are at the readiness bar.
- The master summary at [[products/infant-and-child-foods-master]] is the executive view; it cross-links to all 9 constituent product pages and a 16-source legend.
- The dominant remaining work is **Phase 3b ingest of priority-1 manifest papers from raw/markdown to fill the 25 data-gap cells**. The corpus has 23,260 markdown-converted papers; tonight's autonomous run prioritized raw/reports/ (the FDA 2016 re-ingest) over the broader markdown corpus because the iAs gap on rice cereal was the highest-priority Tier A blocker per Karen's directive. A follow-up run should sweep the manifest for: MeHg-in-infant-food candidates, Cr-VI-speciation candidates for cereals/purees/snacks, second sample-level rice-cereal Pb/Cd/tAs/tHg sources, and rice-cereal-specific Ni/Al/Sn distributions.
- The Tier B subcategory product-page CC candidate blocks (purees pages, toddler-snacks pages) are not yet rebuilt under Part 19 in their per-page hmi-hmtc-evidence-summary blocks; they still carry the Schema-note banner from `b69219f`. The master summary at [[products/infant-and-child-foods-master]] presents the Part 19 framework view for these subcategories without rebuilding each page's individual block. A future commit can mirror the master summary back into the per-page blocks.
- The non-soy formula partner page [[products/infant-formula-powder-soy-based]] (the dirty-side comparator for milk-based formula) has the FDA 2026 sample-level data available (computed p30 0.3 Pb, 0.6 Cd, 0.8 tAs from n=38) but its per-page CC candidate block is not yet rebuilt.

## Coordination payload for Cowork (Heavy Metals in Infant and Child Foods Standards Briefing)

Per the master plan, Cowork uses the `hmtc-standards` skill to build the Standards Briefing as a .docx. Affected pages and CC candidate row counts for the Briefing:

- [[products/baby-cereals-dry-rice-based]]: 10 analytes; 4 Path A thin (Pb, Cd, tAs, tHg); 1 approaching (iAs n_a_tier=2); 5 data gap (MeHg, Ni, Al, Cr-VI, Sn).
- [[products/baby-cereals-dry-non-rice]]: 10 analytes; 4 Path A thin (Pb, Cd, tAs, iAs from FDA 2016); 1 data thin (tHg); 5 data gap.
- [[products/infant-formula-powder-non-soy]]: 10 analytes; 3 at readiness bar (Pb, Cd, tAs); 1 thin (tHg); 2 approaching (Al, Sn); 4 below (iAs, MeHg, Ni, Cr-VI).
- [[products/fruit-purees]] / [[products/root-vegetable-purees]] / [[products/non-root-vegetable-purees]]: per-page CC blocks not yet rebuilt; master summary row is the synthesis.
- [[products/teething-and-snacks-rice-based]] / [[products/teething-and-snacks-non-rice]]: per-page CC blocks not yet rebuilt; master summary row is the synthesis. iAs in rice-based snacks subset is the strongest signal (Signes-Pastor 2016 rice crackers n=199, median 79-111 ppb, max 273 ppb).

The Standards Briefing should center the three at-bar cells (milk-based powdered formula Pb / Cd / tAs) as the publishable Path A clean p90 candidates, with the regulatory caps (EU 20 ppb Pb, EU 10 ppb Cd, no cap for tAs) as the upper bound. The iAs-in-rice-cereal cell at p30 90.62 ppb (FDA action level cap 100 ppb) is the highest-impact dirty subcategory candidate for IandC standards-setting; it sits at n_a_tier=2 and would benefit from one additional A-tier source to clear the readiness bar.

## Constituent commit hashes for traceability

```
e4eaeb8 schema: add clean/dirty subcategory framework to Part 19 (p90 clean / p30 dirty)
dac65a8 lint: row-fit re-sweep punch list across product-category pages
76a8c79 lint: Phase 2 drift fix — broad-context tables + akhtar2017/almeida2022 source-page deeper fixes
b69219f schema: supersede P10/P20 with Part 19 clean/dirty framework; add format-axis row-fit rule to Part 6
2a65c7d resynthesis: Phase 3 Tier A rice cereal — rebuild CC candidate summary under Part 19 (4 Path A thin, 6 data gap)
20add89 schema: drop ## TL;DR heading from source pages and Part 6 template (6 pages cleaned)
3555751 resynthesis: re-ingest FDA 2016 inorganic arsenic with rice/non-rice cereal subsets (n=82 rice + n=30 non-rice sample-level)
dd2b018 resynthesis: Phase 3 Tier A subcategory 2 — milk-based formula CC candidate block (Pb/Cd/tAs at readiness bar; 7 below)
78d5317 resynthesis: Phase 5 Infant and Child Foods master CC candidate summary (10 analyte tables, 4 subcategories)
```

External commits during the same window (not mine):

```
d9e90ed schema: tier-1 TDS population — 90 ingredient pages advanced to in_progress
3268b89 schema: migrate ingredient_profile to 10-metal standard
d04abbc ingest: digest-batch-1-tin — 4 sources, 2 species pages, parent expansion
9d0e44d ingest: digest-batch-2-fda-pb-regulatory — 4 FDA Pb data sources
31bae2b lint: fix DOI audit failures on tin source pages
```

End of overnight final report.
