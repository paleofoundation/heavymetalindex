# Category 7 — Oils, Condiments, and Specialty Foods — Step 0 Lock

> **Historical lock event; limit-setting method superseded 2026-08-12.** This document retains the original row and evidence decisions, but its P97/literature-baseline standards method is retired. Current initial limits are government-limit-only.

**Status:** Historical incremental lock (per Karen, 2026-06-02). Rows locked individually as
the evidence base supports a defensible standard; rows without sufficient
single-platform evidence remain provisional scaffolds with a documented gap.
**Taxonomy:** HMTc v2.0 (2026-03-30), Category 7, 12 rows.
**Panel:** eight totals — Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr — plus iAs and Cr-VI species controls and an explicit MeHg applicability cell.

**Current compiler status (2026-08-12):** the eight scope-locked rows compile under the government-limit-only method. The four broad provisional rows remain unresolved; occurrence evidence cannot supply their initial numbers.
**Lock doc authority:** this file. Companion to `Category2_Clean_vs_Contaminated_Splits.md` (Cat 2 exemplar).

## Lock rule applied

This lock follows the methodology in CLAUDE.md Part 19. The defensibility test
for each row's per-analyte limit:

- **Literature-baseline (P97 binds):** ≥ 5 distinct **same-platform** sources for
  the analyte. The pooled marginal distribution is deep enough to anchor a
  percentile.
- **Regulatory-alignment (cap binds):** 2–4 same-platform sources, or the lowest
  applicable regulatory ceiling sits below the sparse literature signal. Limit =
  lowest applicable regulatory cap; confidence recorded as low.
- **Provisional (no lock):** ≤ 1 same-platform source, or the row's evidence spans
  multiple incompatible contamination platforms and cannot be pooled. The row
  stays `products_status: scaffold`, `splits_locked: false`, with a documented
  reason and a discovery target.

"Same-platform" means off-platform sources (e.g. olive *leaves* and olive *pits*
for the olive-oil row; broad total-diet-study context rows) are excluded before
counting. The per-analyte same-platform source counts below were measured from
`data/evidence/product_source_routing_audit.csv` on 2026-06-02.

## Independent-row treatment (no clean/dirty pairs in Cat 7)

Unlike Cat 2, Category 7 has no within-row clean/contaminated pairs at lock time.
Every locked row is an **independent row**, treated clean-by-default per Part 19
(per-analyte standard = P97 of the row's marginal distribution). Two rows carry a
known within-row elevated sub-population (balsamic vinegar for Pb/As; future
cocoa and spice platforms). These are NOT split at lock; instead the lock records
an **across-row review hook**: at each annual review the Standards Architect
reviews origin region, processing method, cultivar/source group, and packaging
type for emergent within-row contamination platforms, and splits the row if a
platform is identified. This is the platform-identification step that precedes a
§12 ratchet split. It gives the same defensive posture a tightened independent-row
limit would, without introducing a calibration number that has to be defended
separately from the five Governing Principles.

## Row architecture and lock status

8 of 12 rows lock at this Step 0. (Initial draft locked 5; re-measurement after
the routing-recognition fix below promoted Rows 4, 7, 8 from "provisional gap" to
locked — see "Routing-recognition correction.") Slugs in **bold** are the
on-disk filenames; the taxonomy slug is carried in each page's `aliases:`.

| Row | Slug | Lock status | variant_type | Basis | Confidence |
|----:|------|-------------|--------------|-------|-----------|
| 1 | olive-oil | **LOCKED** | independent | literature-baseline (Pb·Cd·tAs·Ni); reg-alignment (iAs·tHg·Cr·Sn·Al) | medium-high |
| 2 | cooking-oils-other | **LOCKED** | independent | literature-baseline (Pb·Cd·Ni); reg-alignment (rest) | medium |
| 3 | butter-and-ghee | **LOCKED (thin)** | independent | regulatory-alignment (all) | low |
| 4 | honey | **LOCKED** | independent (honey/syrup across-row hook) | literature-baseline (Pb·Cd·Ni·Cr); reg-alignment (rest) | medium |
| 5 | vinegar | **LOCKED** | independent (balsamic across-row hook) | literature-baseline (Pb); reg-alignment (rest) | medium |
| 6 | condiments-general | provisional (split pending) | — | — | — |
| 7 | chocolate | **LOCKED** | whole_row_platform (Cd·Pb) | literature-baseline (Cd·Pb·tAs); reg-alignment (rest) | medium-high |
| 8 | spices | **LOCKED** | whole_row_platform (Pb·Cr) | literature-baseline (Pb·Cd·Cr·tAs·Ni); reg-alignment (rest) | medium-high |
| 9 | salt | **LOCKED (thin)** | independent | regulatory-alignment (Pb to Codex ML) | low |
| 10 | snacks-general | provisional | — | — | — |
| 11 | canned-foods-general | provisional (Sn platform gap) | whole_row_platform (Sn) [planned] | — | — |
| 12 | mixed-meals-prepared-foods | provisional | — | — | — |

## Routing-recognition correction (2026-06-02)

Rows 4, 7, and 8 were initially assessed as empty discovery gaps. That assessment
was wrong, and the way it was wrong is worth recording. The pages for these rows
existed as pre-taxonomy `autonomy_v0` stubs under short slugs (`honey`,
`chocolate`, `spices`) that lacked `hmtc_row`/`hmtc_category` frontmatter. Because
the routing layer only routes to pages it recognizes as HMTc rows, every source
that declared `products: [[products/spices]]` (etc.) had its declaration silently
dropped — the audit kept only the co-declared `condiments-general` half. The
stubs also carried fabricated `sources:` counts (autonomy_v0 wrote 38/23/13 while
only 2–3 sources were actually routed), so the index displayed coverage that the
routing layer did not actually hold.

Patching the v2 taxonomy frontmatter onto the three pages reconnected the routing
layer and surfaced the real depth (routing audit grew +71 source rows):

- **spices** — Pb 27, Cd 21, Cr 14, tAs 9, Ni 9, tHg 7 (deeper than olive oil)
- **chocolate** — Cd 14, Pb 10, tAs 6, Ni 4
- **honey** — Pb 7, Cd 6, Ni 5, Cr 5, tAs 3

All three clear the n≥5 literature-baseline bar on their platform metals and lock
on the same depth gate as Rows 1–2. The lesson for the remaining provisional rows:
before treating a row as an evidence gap, confirm the routing layer actually
recognizes its page (carries `hmtc_row`), because a missing row-marker is
indistinguishable from missing evidence in the audit until the marker is added.

**Note on `value_record_count`.** The routing audit shows 0 extracted product-row
values for every Cat 7 row, locked or not — including olive oil. Extracted values
live in the ingredient-page `contamination_profile` blocks and the evidence
register; the product-row value-extraction pass is downstream of Step 0 and gates
the **workbench numeric thresholds**, not the Step 0 scope/platform lock. Step 0
locks on routed-source depth; the per-analyte P97-vs-cap numbers are set in the
separate workbench pass that reads the extracted values.

## Locked rows — per-analyte evidence depth (measured 2026-06-02)

### Row 1 — Olive oil (LOCKED, medium-high)

Single coherent platform: edible/olive oil. Same-platform distinct-source counts:
Pb 10, Cd 10, tAs 7, Ni 7, Cr 4, tHg 2, Al 2, iAs 1, Sn 0.

- **Literature-baseline (P97):** Pb, Cd, tAs, Ni.
- **Regulatory-alignment (cap binds):** iAs (corpus gap — olive oil is not a known
  iAs vector; require iAs speciation in licensee baseline to fill), tHg, Cr/Cr-VI
  (no speciated Cr-VI in corpus), Sn (n=0; not expected in oil), Al.
- Regulatory anchors: EU 2023/915 (Pb 0.10 mg/kg fats & oils); Codex STAN 33 olive
  oil; FDA Pb action levels.
- **Across-row hook:** review origin region and refined-vs-unrefined at annual cycle.

### Row 2 — Other cooking oils (LOCKED, medium)

Same edible/seed-oil platform as Row 1, non-olive variants (sunflower, corn,
rapeseed, soybean, canola, coconut, avocado, sesame). Same-platform counts:
Pb 6, Cd 6, Ni 5, tAs 4, Cr 2, tHg 1, iAs 1, Sn 0, Al 0.

- **Literature-baseline (P97):** Pb, Cd, Ni.
- **Regulatory-alignment:** tAs (n=4, borderline — bind to cap), iAs, tHg, Cr, Sn, Al.
- Regulatory anchors: EU 2023/915 (fats & oils); Codex.

### Row 3 — Butter and ghee (LOCKED thin, low)

Single coherent platform: dairy fat. Same-platform counts: Pb 2, Cd 2, tAs 2,
tHg 2, Cr 1, Ni 0. All analytes below the n≥5 bar.

- **Regulatory-alignment (all analytes):** limit = lowest applicable regulatory
  ceiling. Confidence low; thinness named, not hidden.
- Locked because dairy fat is a coherent low-risk platform and the cap binds
  defensibly; literature-baseline limits deferred until n≥5 per analyte.
- Regulatory anchors: EU 2023/915; Codex milk-fat products.

### Row 5 — Vinegar (LOCKED, medium)

Single coherent platform: vinegar (balsamic, wine, cider, white, rice, sherry).
Same-platform counts: Pb 5, tAs 4, Cd 2, tHg 2, Al 1, Ni 1, Cr 1, Sn 0.

- **Literature-baseline (P97):** Pb (the documented balsamic-vinegar Pb/As platform;
  FDA warning-letter history — escp2021).
- **Regulatory-alignment:** tAs (n=4), Cd, tHg, Ni, Cr, Al, Sn.
- **Across-row hook (active):** balsamic vinegar carries elevated Pb/As relative to
  other vinegars. Reviewed at annual cycle for a balsamic split if the licensee
  data confirms a categorical difference.

### Row 9 — Salt (LOCKED thin, low)

Single coherent platform: edible salt. Same-platform counts: Pb 2, Cd 1, rest 0.

- **Regulatory-alignment:** Pb bound to Codex ML for food-grade salt; all other
  analytes reg-alignment. Confidence low.
- Locked thin because the Codex anchor is firm even though literature is shallow.

### Row 8 — Herbs / spices / dried seasonings (LOCKED, medium-high)

Slug `spices` (taxonomy slug `herbs-spices-dried-seasonings` in aliases).
Whole-row platform: every spice is exposed to the Pb/Cr adulteration vector
(turmeric, chili) plus soil uptake. Same-platform counts: Pb 27, Cd 21, Cr 14,
tAs 9, Ni 9, tHg 7.

- **Literature-baseline (P97):** Pb, Cd, Cr, tAs, Ni.
- **Regulatory-alignment:** tHg, Sn, Al.
- Regulatory anchors: FDA spice-Pb guidance; EU 2023/915 Pb in spices.
- **Across-row hook (active):** adulteration-driven (turmeric/chili) vs
  soil-uptake spices differ categorically; review for a high-adulteration-risk
  sub-split.

### Row 7 — Cocoa / chocolate products (LOCKED, medium-high)

Slug `chocolate` (taxonomy slug `cocoa-chocolate-products` in aliases). Whole-row
platform: cacao soil-uptake of Cd (and Pb) loads the entire row. Same-platform
counts: Cd 14, Pb 10, tAs 6, Ni 4.

- **Literature-baseline (P97):** Cd, Pb, tAs.
- **Regulatory-alignment:** Ni, Cr, tHg, Sn, Al.
- Regulatory anchors: EU 2023/915 Cd in cocoa/chocolate (the binding cap for this
  row); FDA Pb action levels.
- **Across-row hook (active):** cacao origin (Latin-American high-Cd soils) and
  cocoa-solids fraction (dark vs milk) drive a strong within-row Cd gradient;
  review for an origin/percentage sub-split.

### Row 4 — Honey and syrups (LOCKED, medium)

Slug `honey` (taxonomy slug `honey-and-syrups` in aliases). Same-platform counts:
Pb 7, Cd 6, Ni 5, Cr 5, tAs 3, tHg 2.

- **Literature-baseline (P97):** Pb, Cd, Ni, Cr.
- **Regulatory-alignment:** tAs, tHg, Sn, Al.
- **Across-row hook (active):** honey (apiary-proximity-to-industry) and syrup
  (maple evaporator metal-leaching — Pb, Sn) are distinct sub-platforms pooled in
  one row; review for a honey/syrup split as syrup-specific evidence accumulates.

## Provisional rows — documented gaps and discovery targets

### Row 6 — Condiments, general (provisional; SPLIT pending)
14 routed direct-evidence sources, but fractured across six incompatible
contamination platforms (fish-sauce tHg; hot-sauce/chili spice-Pb; soy-sauce
fermentation Pb/Cd; tomato/ketchup Cd; broad TDS context). No single sub-platform
clears n≥5. **Resolution:** split into `ketchup-tomato-condiments`,
`soy-sauce-fermented`, `fish-sauce`, and route hot-sauce/spice sources to Row 8.
Ketchup (grochowska2020 A-tier + vaishali2020, ~tomato-Cd platform) is closest to
lockable. Sub-rows lock individually as each clears the bar.

### Row 10 — Snacks, general (provisional)
1 routed source (lamb-meat snacks), off-platform for the row definition
(crackers, granola, chips, popcorn). Discovery target needed.

### Row 11 — Canned foods, general (provisional; Sn platform gap)
No routed sources. The Sn (tin migration from tinplate) platform that defines this
row's monitoring purpose has zero corpus coverage. Planned
`variant_type: whole_row_platform` (Sn). Discovery target:
`/discover topic="tin migration canned food tinplate"`.

### Row 12 — Mixed meals / prepared foods (provisional)
No routed sources. Lowest priority; this row aggregates across matrices and will
populate as component-matrix evidence accumulates.

## What ships at this lock

**8 of 12 rows lock now:**
- Literature-baseline on priority metals (medium to medium-high): olive-oil,
  cooking-oils-other, vinegar, spices, chocolate, honey.
- Thin / regulatory-alignment (low confidence, documented): butter-and-ghee, salt.

**4 rows remain provisional** with documented gaps: condiments-general (split
pending), snacks-general, canned-foods-general (Sn-platform gap),
mixed-meals-prepared-foods.

The olive-oil lock is the immediate enabler for the Kasandrinos pilot-licensee
deliverable. The numeric per-analyte thresholds for all 8 locked rows are produced
by the separate workbench standards-setting pass (firewall: `data/workbench/standards/`).

## Change log
- 2026-06-02 — Initial incremental lock. **8 rows locked** (5 in the first draft;
  +3 — honey, chocolate, spices — after the routing-recognition correction
  promoted them from apparent gaps to deep locked rows). 4 rows provisional.
  Authored by Claude (co-architect mode), Karen review. Platform-coherence
  analysis is the basis; per-analyte source counts measured from the routing
  audit on this date.
