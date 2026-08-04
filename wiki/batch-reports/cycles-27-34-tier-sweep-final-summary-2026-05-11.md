---
type: batch-report
report_kind: tier-sweep-final-summary
date: 2026-05-11
phase: 4+
audience: [curator, cowork]
covers:
  - "Cycles 27-34 of the autonomous /loop tier-1→3→4 sweep"
  - "IandC at-bar count: 16 → 41 cells (+25 via route-audit corrections)"
  - "Two-tier readiness framework documented (strict-tooling vs curator-narrative)"
  - "Gap-report regeneration tooling located + run"
  - "Cowork coordination payload refreshed on both IandC + Cat 5 masters"
  - "Tier 2 external-acquisition wishlist refreshed for Karen"
covers_cycles: "27-35"
related: ["[[batch-reports/cycles-21-26-final-summary-2026-05-09]]", "[[batch-reports/category-5-beverages-overnight-2026-05-09]]"]
noindex: true
---

# Tier-1→3→4 Sweep Final Summary (cycles 27-35)

## Overview

This report documents the tier-1→3→4 autonomous-loop sweep that ran from cycle 27 (2026-05-11 fruit-juice mislabel correction) through cycle 35 (final summary). The sweep was launched after the tier-classification audit (commit `a31e398`) and Karen's "do them ASAP" directive on deferred row-by-row updates (commit `59d95c6`). The objective was to systematically credit already-loaded A-tier sources toward `n_a_tier` confidence calibration across IandC subcategories where they were undercounted in master CC blocks.

## Headline outcome

**IandC at-bar count: 16 → 41 cells** (+25 in 8 cycles; ~3 at-bar cells per cycle average).

**Total publishable Path A Part 19 standards across both Cat 1 + Cat 5: 44 cells.**

No new external corpus acquisitions were required for any of the upgrades — purely clerical-undercount-correction and route-audit work against sources already in the wiki.

## Per-cycle accomplishments

| Cycle | Commit | Type | Work | Δ at-bar |
| ---: | --- | --- | --- | ---: |
| 27 | `5bf064b` | resynthesis | Fruit-juice-not-canned Pb mislabel correction (cell was at-bar since cycle 21 FDA 2018 extraction but labeled "summary-only Below bar") | +1 |
| 28 | `7e78876` | schema | Chekri 2019 + FSA 2016 route audit — fruit-purees Pb/Cd, non-root-veg Pb/Cd, meat-poultry Cd, mixed-meals Cd to at-bar | +7 |
| 29 | `8e250cf` | schema | Fish-containing + teething/snacks FSA route audit — fish-containing Cd to at-bar; 10 cells to approaching | +1 |
| 30 | `44e18a2` | schema | tAs cluster route audit — 6 cells (non-rice cereal, fruit-purees, non-root-veg, root-veg, mixed-meals both splits) to at-bar | +6 |
| 31 | `0832f11` | schema | Soy-RTF (Dabeka 2011 direct soy-RTF route) + non-rice cereal Al at-bar; 5 cells upgraded | +5 |
| 32 | `5fd9601` | schema | Formula-cells route audit + mislabel correction — milk-powdered + soy-powdered + milk-RTF; 11 cells to at-bar | +11 |
| 33 | `4bb8900` | schema | Gap-report regeneration tooling located (`tools/evidence/build-standards-gap-report.mjs`); ran successfully; **architectural finding documented** (curator-vs-tooling layer divergence) | 0 (architectural cycle) |
| 34 | `75aa924` | batch | Cowork coordination-payload sections refreshed on both IandC + Cat 5 masters; 44-cell publishable standards table documented | 0 (synthesis cycle) |
| 35 | (this commit) | batch | Final summary (this report) + Tier 2 wishlist refresh + loop stop | — |

Cell-state count was 47 per running-tally claims in commits 32; accurate count via roll-up audit script = 41. The 6-cell discrepancy was over-counting in commit messages (counted markdown bolded entries with multiple `**...**` pairs as separate cells when they were single cells). The 41 figure is the verified roll-up count.

## Per-subcategory at-bar inventory (post-cycle-34)

| # | Subcategory | At-bar cells | Standards target highlights |
| ---: | --- | ---: | --- |
| 1 | Infant rice cereal (dry) | 4 | Pb dirty p30=3.30 ppb; Cd clean p90=22.00; tAs dirty p30=102; Al dirty p30=552 ppb |
| 2 | Infant non-rice cereal (dry) | 4 | Pb clean p90=7.84; Cd dirty p30=11.36; tAs at-bar; Al at-bar summary |
| 3 | Milk-based powdered infant formula | 8 | Pb 0.40, Cd 0.40, tAs 1.30, tHg 0.00 (sample-level); iAs/Al/Ni/Sn at-bar summary |
| 4 | Soy-based powdered infant formula | 7 | Pb 0.30, Cd 0.60, tAs 0.80, tHg 0.00; Al/Ni/Sn at-bar summary |
| 5 | Milk-based RTF liquid infant formula | 4 | Pb 0.20, Cd 0.60, tAs 1.21, Al at-bar summary |
| 6 | Soy-based RTF liquid infant formula | 4 | Pb 0.36, Cd 0.86, tAs 1.08, Al at-bar summary; n=3 below-floor caveats inline |
| 7 | Fruit purees | 3 | Pb 2.37, Cd 2.12, tAs at-bar |
| 8 | Non-root vegetable purees | 3 | Pb 1.76, Cd 11.90, tAs at-bar |
| 9 | Root-vegetable purees | 3 | Pb 3.74, Cd 3.95, tAs at-bar |
| 10 | Meat and poultry purees | 1 | Cd at-bar summary-level n_a_tier=3 |
| 11 | Fish-containing baby foods | 1 | Cd at-bar summary-level n_a_tier=3 |
| 12 | Mixed meals (rice-containing) | 2 | Cd, tAs with n=9 below-floor caveat |
| 13 | Mixed meals (non-rice) | 2 | Cd 5.08, tAs at-bar |
| 14 | Teething & snacks (rice-based) | 0 | 5 analytes Approaching with FSA + Signes-Pastor |
| 15 | Teething & snacks (non-rice) | 0 | 4 analytes Approaching |
| 16 | Fruit juice (not-canned) | 1 | Pb dirty p30=0 / p90=12.0 / p95=17.9 ppb (FDA 2018 n=1,643) |
| | **Total IandC** | **41** | |
| | Cat 5 (separate master) | 3 | apple iAs (3.0), apple Pb (6.0), non-apple Pb (0/14.9) ppb |
| | **Grand total publishable** | **44** | |

## Two-tier readiness framework (architectural finding from cycle 33)

Cycle 33 regenerated `data/evidence/hmtc_standards_gap_report.csv` via the located tooling at `tools/evidence/build-standards-gap-report.mjs`. The regeneration revealed **only 1 cell** at "READY FOR AGGREGATE MATH REVIEW" — fruit-juice-not-canned iAs.

This **does not contradict** the 41-cell IandC at-bar count in the master narrative. The two layers serve different purposes:

| Layer | Definition of "ready" | Cell count |
| --- | --- | ---: |
| **Strict-tooling-READY** (`build-standards-gap-report.mjs`) | 2+ sample-level distribution-capable A-tier sources | **1** (fruit-juice-not-canned iAs, n=152) |
| **Permissive curator-narrative at-bar** (IandC master cells; CLAUDE.md Part 6 strict reading) | n_a_tier ≥ 2 AND confidence ≥ medium (3+ studies per Part 6); summary-level + sample-level both count | **41 IandC + 3 Cat 5 = 44** |

Both views are correct under their respective definitions. The master narrative is the curator-readable publishable-with-caveats reference; the gap report is the tooling-operational strict-publishable trigger.

**Defensibility note**: every curator-narrative at-bar cell carries inline method-quality + sample-size + partial-fit caveats per the cycle-a31e398 tier-classification audit framework. Standards target values continue to be driven by sample-level distributions (FDA 2024 baby-food compliance, FDA 2026 special survey, FDA 2018 longitudinal juice Pb, FDA 2011/2016 juice iAs, Toledo 2024 Brazilian cereal); summary-level sources (Chekri 2019, FSA 2016, Kirkpatrick 1980, Elsheikh 2020, de Paiva 2020, Dabeka 2011/1987, Burrell 2010, Chuchu 2013, Parker 2022) contribute to `n_a_tier` confidence calibration as corroborators.

## Tier 2 external-acquisition wishlist (refreshed for Karen)

These external acquisitions would move cells from curator-narrative at-bar (summary-level) to strict-tooling-READY (sample-level) and unlock additional cells currently in "Approaching" or "data gap":

### Highest leverage — would unlock the most cells

| Acquisition | Source | Cells unlocked | Effort |
| --- | --- | --- | --- |
| Brombach 2017 supplementary Table S1 | journal hosting page (Food Chemistry SI for DOI 10.1016/j.foodchem.2016.07.064) | rice-cereal MeHg sample-level p30/p90 — at-bar with exact percentiles | SI download (free or institutional access) |
| FDA TDS meat-subset + fish-subset sample-level | FDA TDS published datasets | meat-poultry-purees + fish-containing 8+ cells to tooling-strict-gate | Public data extraction |
| Da Mato 2026 supplementary tables | Foods journal SI for DOI 10.3390/foods15020383 | plant-milks-rice-based iAs to at-bar sample-level | SI download (OA) |
| Multi-element rice-cereal Pb/Cd 3rd direct source | PubMed search for post-2015 rice-cereal multi-element studies | rice-cereal Pb/Cd → strict-tooling-READY (currently curator-at-bar only) | Search + paywall navigation |
| Multi-element soy-formula Pb/Cd source w/ soy-subset | PubMed search | soy-RTF Pb/Cd → strict-tooling-READY | Search + paywall |

### Medium leverage — analyte-specific gaps

| Acquisition | Closes |
| --- | --- |
| Tea-leaf + steeped-tea Al survey (Karak & Bhagat 2010; Schwalfenberg 2013; Brzezicha-Cirocka 2016) | Cat 5 tea subcategories (true-tea, matcha, kombucha, herbal infusions) — highest Cat 5 regulatory pull |
| Cola / soft-drink Cr speciation | Highest Cr-VI inference-boundary test (acidic-matrix Cr(VI) stability) |
| Multi-element coffee survey (brewed vs ground) | Coffee Cat 5 subcategory — currently full data gap |
| Multi-element matcha-specific analysis | Matcha at-bar (whole-leaf consumption = highest single-source dietary Al exposure candidate) |
| Sample-level Cd/Pb in fruit-purees + non-root-veg 3rd source | Convert 4 IandC cells from Approaching to at-bar tooling-READY |

### Lower leverage — already-good in narrative

| Acquisition | Closes |
| --- | --- |
| de Paiva 2020 per-batch Al data (author contact) | Rice-cereal Al sample-level Path A (already at-bar curator-narrative via Toledo) |
| Gu 2020 supplementary materials | rice-cereal iAs sample-level (already at-bar via FDA 2016 + supporting) |
| Marques 2021 PDF table image re-extraction | Plant-milk Pb numeric values cleaner |

## Recommended next steps

### Immediate

1. **Trigger Cowork `hmtc-standards` skill** with the 44-cell publishable standards inventory (41 IandC + 3 Cat 5). The Coordination payload sections of [[products/infant-and-child-foods-master]] and [[products/category-5-beverages-master]] are refreshed (commit `75aa924`) and ready for Briefing build.

2. **Decide publication tier**: strict-tooling (1 cell, no caveats) vs curator-narrative (44 cells with caveat-inline). The Standards Briefing can present both — strict gate cell as headline; curator gate cells as supporting standards with method/sample-size/partial-fit caveats visible.

3. **Bridge-page hmtc_category integer decision** (cycle 23 flag): 3 Cat 1 bridge variants (`infant-formula-powder`, `infant-formula-concentrated-liquid-non-soy`, `infant-formula-concentrated-liquid-soy-based`) lack the integer; quick frontmatter consistency fix.

### Near-term (Karen-action)

4. **Brombach 2017 SI fetch** — closes rice-cereal MeHg to strict-tooling-READY.
5. **FDA TDS meat-subset + fish-subset extraction** — closes 8+ IandC cells.
6. **Step 0 lock for next HMTc category** (Cat 2 / 3 / 4 / 6+) — enables Priority 5 build-out per cycle 23 finding.

### Long-term

7. **External-acquisition queue** per the Tier 2 wishlist above.
8. **Tooling enhancement** option: extend `build-standards-gap-report.mjs` to optionally credit summary-level A-tier sources toward n_a_tier with a per-cell caveat flag, mirroring the curator-narrative framework. Would unify the two layers if desired.

## Stop conditions check (cycles 27-35)

No stop conditions triggered across the 8-cycle sweep:

- **A-tier vs A-tier contradictions**: none observed (cycle-23 onward).
- **Regulation-vs-current-agency disagreements**: none.
- **Row-fit-rule-unresolved drift**: none (Part 6 partial-fit caveats applied throughout for Chekri/FSA "infant-formula" generic and "meat-and-fish" combined categories).
- **Schema-uncovered decisions**: none (the curator-vs-tooling divergence in cycle 33 was a documentation discovery, not a CLAUDE.md gap).

## Loop status

**The tier-1→3→4 sweep is complete.** No `ScheduleWakeup` is called. Resume requires fresh `/loop` directive with a new scope (e.g., Cat 2 Step 0 lock, Brombach SI ingest, Cowork Standards Briefing trigger).

End of cycles 27-34 tier-sweep final summary.
