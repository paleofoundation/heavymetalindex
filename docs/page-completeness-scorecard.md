---
title: Page Completeness Scorecard
type: methodology
status: spec
audience: [internal]
created: 2026-06-10
updated: 2026-06-10
---

# Page Completeness Scorecard

> **Methodology supersession (2026-08-12):** The documentation-quality dimensions remain useful, but the original "standards readiness" D11 design is retired. D11 now means descriptive occurrence-evidence completeness only. It does not score whether literature can produce an HMTc limit, and no occurrence percentile, paired-row label, or readiness verdict may select an initial limit or certification status.

This document specifies a deterministic, per-page completeness scorecard for the Heavy Metal Index wiki. It targets ingredient pages (`wiki/ingredients/`) first and is built to extend to product-category pages (`wiki/products/`) with a config change rather than a rewrite.

The scorecard renders on the wiki page and surfaces data gaps so a human can see exactly what each page is missing and decide what to fix. It is a trust mechanism, not a vanity badge. It exists because an autonomous gap-filler (FRANK) failed expensively, and the lesson taken from that failure is encoded as the first design principle below: the scoring path contains no LLM. Every number on the card is reproducible by re-running a script over committed artifacts, and a skeptic (a plaintiff's expert, a regulator's staff, a brand's QA team) must be able to audit every cell back to its inputs.

## Part 1 — Principle: deterministic and auditable, never LLM-judged

The scorecard's score is computed by rules over three classes of on-disk input only:

1. The ingredient page's own frontmatter — `contamination_profile` (per-analyte `status`, `confidence`, `n_studies`, `basis`, `geographic_breakdown`, `seasonal_variance`), `drivers`, `used_in_products`.
2. The ingredient's source set — every `wiki/sources/*.md` whose frontmatter `ingredients:` array names this ingredient — and the routed/value records keyed off those sources (`product_source_routing_audit.csv`, `hmtc_aggregate_distributions.csv`, `claim-provenance-audit.csv`).
3. Section and link presence — computed with the same role-based section matcher already behind `data/evidence/ingredient-mandatory-sections-audit.csv`, plus link-target existence checks against `wiki/mitigation/`, `wiki/supply-chain/`, `wiki/regulations/`.

No dimension's score is produced by an LLM. Where a dimension has a genuine judgment residual (is a regional discussion substantive? is a causal claim correct? does an EU "cereals" limit actually scope this ingredient?), the **number rendered on the card is the deterministic part only**, and the residual is emitted as a separate `review:` flag in a side register — never folded into the score. An LLM may later be pointed at that flag to draft a recommendation, but its output never re-enters the trust surface.

Determinacy classification of the eleven dimensions:

| Class | Meaning | Dimensions |
|---|---|---|
| **deterministic** | Score is a pure function of committed fields/counts. No judgment input anywhere. | D5 Pooling depth, D6 Speciation, D7 Basis declaration, D8 Provenance integrity, D9 Mitigation, D10 Regulatory coverage, D11 Standards-readiness roll-up |
| **deterministic-proxy** | Score is a pure function of committed fields, but the chosen field is a *proxy* for the thing Karen cares about (section presence stands in for "the discussion is good"; matrix-slug presence stands in for "attribution evidence exists"). Score is still fully reproducible; a `review:` flag carries the residual. | D2 Regional coverage, D3 Contamination-mechanism (anthropogenic + background), D4 Consumer-protection sufficiency |
| **curated-input, deterministic-render** | One input (the consumption tier) is human-curated and committed to a CSV, but render-time computation over it is fully deterministic. | D1 Consumption-weighted analyte coverage |

The one non-corpus input — the consumption tier in `data/reference/consumption-tiers.csv` (Part 3) — is **autonomously assembled from cited external intake data and frozen as committed, version-controlled data**, then rendered deterministically. It is never human-curated and never inferred per-render by a model. This is the firewall against the FRANK failure mode: the tier is auditable external data plus a fixed binning rule, so the model never silently estimates "chocolate should have more data than kumquat" at render time — and no person sits in the loop.

**No single rolled-up 0–100 completeness number is ever rendered.** A composite percentage is precisely the opaque, gameable surface this mechanism exists to avoid, and it structurally violates the governing-principles requirement that no principle be subordinate to another. Each dimension renders as a status chip (`OK` / `below-tier` / `GAP` / `N/A` / `flag`) with the underlying counts shown inline, plus a principle-balance row (Part 4) that fires when the page is lopsided.

## Part 2 — The dimensions

Eleven dimensions, consolidated from Karen's six and the five lenses. Karen's six map in as D1, D2, D3+D4 (merged-then-split, see below), D9, D10. The five marked **[BEYOND]** were added by the lenses and the rationale for each is stated.

Several lenses independently flagged that Karen's dimension 1 fuses two separable things (analyte *breadth* and evidence *depth*), and that her dimensions 3 and 4 (anthropogenic vs background) share an input but must stay distinct because the supply-chain firewall depends on the distinction. Both resolutions are honored: D1 reports breadth and depth as two sub-scores under one chip; D3 covers anthropogenic attribution and D4-mechanism covers background, computed from one partitioned upstream-source set.

### D1 — Consumption-weighted analyte coverage  *(Karen #1)*

**Measures.** Two things, reported separately: (a) *breadth* — how many of the 10 HMTc-list analytes have real evidence; (b) *depth* — whether total evidence depth meets the bar expected for how much this ingredient is consumed.

**Computation.** From `contamination_profile`:
- `analytes_with_evidence` = count of analytes where `status == populated` AND `n_studies > 0` (out of 10).
- `declared_data_gaps` = count where `status == populated` AND `n_studies == 0` (an honest, labeled gap — counts as coverage, not absence).
- `total_n` = sum of `n_studies` across the profile.
- Read `consumption_tier` for this ingredient from `data/reference/consumption-tiers.csv` (Part 3), look up `expected_min_total_n[tier]`.
- `coverage_below_tier` = `total_n < expected_min_total_n[tier]`.

**Score.** Chip is the pair `(analytes_with_evidence/10, total_n vs tier-expected)`. `OK` if both meet bar; `below-tier` if breadth fine but depth under the consumption bar; `GAP` if breadth itself is thin. Counts shown: e.g. `7/10 analytes, total n=412; staple tier expects ≥40`.

**Serves.** The $30M certification engine: this is the dimension that says "this cell has pooled enough evidence to set a standard with confidence." Tying depth to consumption stops the kumquat-vs-chocolate false equivalence and makes thin pages on high-exposure ingredients read red.

### D2 — Regional / jurisdictional coverage  *(Karen #2)*

**Measures.** How many distinct producing/sampling regions the underlying evidence spans, whether any single region over-concentrates the evidence, and whether the page discusses regional variation.

**Computation.** Enumerate the ingredient source set (sources whose `ingredients:` names this ingredient); union their `jurisdictions:` arrays; `distinct_jurisdiction_count` = size of that set. `over_concentration` = any single jurisdiction supplies >60% of sources. Assert presence and non-emptiness of the `## Ranges by source, region, and variety` section via the role matcher. Also: presence/population of per-analyte `geographic_breakdown` sub-fields (currently 0 of 258 pages — see Part 6 note).

**Score.** `OK` if section non-empty AND `distinct_jurisdiction_count ≥ 3` AND not over-concentrated; `below-tier` if regions thin or over-concentrated; `GAP` if section missing. **Residual flagged, not scored:** whether the section names ≥2 of the top-3 jurisdictions by source count (cheap string-contains check first); whether the discussion is substantive. Emitted as `review: regional-discussion`.

**Serves.** Pre-empts the cherry-picked-geography attack and shows the work behind a global standard. A near-universal `geographic_breakdown` GAP is expected and correct — it is the highest-yield gap to surface, not a bug.

### D3 — Anthropogenic-contamination evidence  *(Karen #3)*

**Measures.** Whether the corpus behind this ingredient includes source-attribution / environmental-loading evidence (smelting, traffic, mining, irrigation water, biosolids) explaining why specific metals run high in specific regions.

**Computation.** Within the ingredient source set, count sources whose `matrices:` array contains an upstream/environmental slug from the fixed vocabulary `{soil, paddy-soil, agricultural-soil, sediment, irrigation-water, drinking-water, atmospheric-deposition, biosolids, fertilizer}`, AND/OR carry an `attribution: true` frontmatter flag (PMF/source-apportionment — added to ingest schema; see Part 6). Assert the page links to a `supply-chain/` hub page. `anthropogenic_evidence_present` = `count_upstream_attribution_sources > 0` AND supply-chain hub linked.

**Score.** `OK` if both; `GAP` otherwise. Counts shown: e.g. `17 soil + 12 paddy-soil + 15 drinking-water sources; supply-chain hub linked`.

**Serves.** The brand's ambient/shared-liability defense (Governing Principle 4). A defense attorney arguing the metal entered the supply chain from regional loading rather than the brand's processing needs the wiki to already hold that attribution evidence.

### D4-mechanism — Background / baseline-contamination evidence  *(Karen #4)*

**Measures.** Whether the page documents the geogenic/biological/processing baseline expected for this commodity (why it accumulates a metal at all, independent of pollution).

**Computation.** Assert presence and non-emptiness of the `## Why this commodity accumulates heavy metals` section via the role matcher (rice's actual heading is `Why this commodity accumulates cadmium` and passes by role — the generator must reuse the role matcher, never exact-string). Require `drivers:` frontmatter array non-empty. Require ≥1 source in the set with an upstream `matrices:` slug to substantiate the prose. `background_evidence_present` = section non-empty AND `drivers[]` non-empty AND ≥1 upstream source.

**Score.** `OK` if all three; `GAP` otherwise. **Residual flagged, not scored:** whether the prose cites a source for each driver. Emitted as `review: driver-citation`.

**Note on D3/D4 shared input.** The generator computes the upstream-source set once and partitions it: `attribution: true` (or apportionment-tagged) sources feed D3; the remainder substantiate D4. D3 and D4 stay separate dimensions because the firewall depends on the anthropogenic-vs-background distinction (it is what lets HMTc explain to a regulator why a floor exists even in clean regions).

### D5 — Pooling depth per analyte (standards-readiness floor)  *[BEYOND]*

**Measures.** For each HMTc analyte, the count of *distinct, sample-level-backed* sources behind any typical/p95 claim — the litigation-relevant unit of depth (ten citations of one dataset is not depth).

**Computation.** From `hmtc_aggregate_distributions.csv`, join the ingredient's `used_in_products` rows and read `distinct_sources`, `sample_level_contributing`, `pooled_n`, `sens_band` per `metal_species`. Per-analyte ladder: `GAP` (no cell / `pooled_n` null), `THIN` (`distinct_sources < 3` OR `sample_level_contributing == 0`), `POOLABLE` (`distinct_sources ≥ 3` AND `pooled_n ≥ 20` AND `sens_band ∈ {stable, provisional}`), `CONFIDENT` (`distinct_sources ≥ 3` AND `sens_band == stable`). Where no bridged product row exists, fall back to `contamination_profile.n_studies`/`confidence` with the same thresholds, and raise a `missing-bridge` flag. Cross-check `distinct_sources` against frontmatter `n_studies`; flag disagreement.

**Score.** Per-analyte band; chip is the worst band across the page's primary analytes. Thresholds are literals mirroring the existing distinct-source gate and pooled-`n` rules in the pooling methodology.

**[BEYOND] why added.** This is the gate between "we have a page" and "we can certify against it," and it counts *distinct* sources, which Karen's #1 (`n_studies`) does not. A P97 computed from `n_studies=2` is the single most attackable certification basis. Reuses the row-level logic the category-readiness monitor already applies, lifted to ingredient level.

### D6 — Speciation transparency  *[BEYOND]*

**Measures.** Whether As and Hg claims declare species (iAs vs tAs; tHg vs MeHg) wherever the page asserts a value, and whether any value silently conflates them. CLAUDE.md Part 14 names these as non-negotiable distinctions.

**Computation.** For each As/Hg cell with `status == populated`, require a non-null distinct sub-block for the declared species and require the contributing routed sources to carry that species in `declared_metal_species` (`product_source_routing_audit.csv`). Flag any cell appearing in `missing_metal_species`, and any undifferentiated single "As"/"Hg" value.

**Score.** `OK` if every populated As/Hg cell declares species and is source-backed for that species; `GAP` per offending cell.

**[BEYOND] why added.** Speciation is the highest-leverage scientific attack in heavy-metal litigation: a tAs number presented as health-relevant is trivially impeached. None of Karen's six capture it. Protects the HMTc analyte list's credibility directly.

### D7 — Basis declaration completeness  *[BEYOND]*

**Measures.** Whether every populated value declares its measurement basis (wet/dry weight; as-sold / as-consumed / reconstituted), per CLAUDE.md Part 14 and Part 19's native-basis rule.

**Computation.** For each `contamination_profile.<metal>` with `status == populated`, require a non-empty `basis` field containing an allowed token `{dry-weight, wet-weight, as-sold, as-consumed, reconstituted}`. Additionally, from the pooler `contribution_log`, reduce `unknown_conversion` across contributing sources: `CLEAN` if all false, `FLAGGED` if any true.

**Score.** `OK` if every populated cell declares a basis token AND no contributing source has `unknown_conversion == true`; `GAP`/`FLAGGED` otherwise, naming the cell.

**[BEYOND] why added.** Undeclared basis lets an opposing expert re-anchor a number ~7× via the reconstitution factor. A basis error is the most discoverable defensibility failure. It is also a literal lint requirement of the standards workflow and a Part 2 anti-drift sentinel (a floating basis is where a future session could quietly soften/strengthen a claim).

### D8 — Provenance integrity (cross-cutting trust gate)  *[BEYOND]*

**Measures.** Whether every populated number traces to a routed source whose `ingredients:` actually names this ingredient, with no orphan or foreign citations and no coverage-rule violation.

**Computation.** (a) Coverage-rule check (reuse existing lint: no mixed pending/populated). (b) Every `[[sources/x]]` cited on the page resolves to an existing source file whose `ingredients:` contains this ingredient (flag orphan/foreign citations). (c) Body-table `n=` counts equal frontmatter `n_studies` per analyte. (d) Reuse `claim-provenance-audit.csv` / `claim-provenance-summary.json` (filtered to this slug) with a **hard gate that no numeric claim is unsupported**. (e) Page must not appear in `routing_unresolved.csv` or `routing_malformed.csv`.

**Score.** `OK` only if all five pass; otherwise `GAP`, naming the failing check and the offending claim verbatim.

**[BEYOND] why added.** This is the trust mechanism's own integrity check — the scorecard must not itself become a drift source. A cited source that does not actually mention the ingredient destroys credibility; this catches it deterministically before it ships. It is the direct machine-true answer to the "self-published reports on the certifier's own website" attack line and the EU database-right re-derivability requirement.

### D9 — Mitigation / remediation evidence  *(Karen #5)*

**Measures.** Whether actionable, source-cited levers to reduce metals are present.

**Computation.** Assert presence/non-emptiness of the `## Mitigation options` section. Count outbound links to canonical `mitigation/*.md` pages (`agronomic`, `processing`, `formulation`, `packaging-and-storage`, `testing-and-qc`, `remediation-evidence`, `supply-chain-screening`). Require each lever paragraph to contain ≥1 `[[sources/...]]` wikilink (regex count within section bounds). `mitigation_present` = section non-empty AND ≥1 cited lever.

**Score.** `OK` if ≥1 cited lever; counts shown (`#levers_with_cited_source`). Fully deterministic — citation and link presence are mechanical.

**Serves.** The contamination-reduction value (Governing Principle 1) and the brand-legal-actionable surface. Occurrence data with no lever ratifies the status quo; this dimension credits the data that gives a brand a path to cleaner product.

### D10 — Regulatory coverage  *(Karen #6)*

**Measures.** Whether operative limits affecting this ingredient are documented, cross-linked, current, and complete across jurisdictions — plus where regulation is silent or laxer than the literature.

**Computation.** Assert presence/non-emptiness of `## Regulatory limits that apply`. Count distinct outbound `[[regulations/<rule-id>]]` links. For each, resolve the regulation page's `metal` / `jurisdiction` / `matrix` / effective-date frontmatter. Then compute:
- `analyte_regulatory_gap` = populated analytes with no linked governing limit.
- `jurisdiction_crosswalk` = covered `(metal, jurisdiction)` cells / applicable cells, where the denominator is the non-empty columns of the auto-generated `wiki/regulations/by-jurisdiction.md` matrix for each present metal.
- `silence/laxity` = per analyte, whether no jurisdiction regulates it, or whether the lowest applicable cap (converted to native basis via `tools/evidence/basis-conversion.mjs`) exceeds the page's own `p95_ppb`.
- `recency` = newest cited regulation effective-date vs newest applicable regulation in `wiki/regulations/`; flag any cited rule whose slug/status marks it `*-superseded` while presented as operative.
- `regulatory_value_integrity` = each numeric regulatory value in prose is adjacent to a resolvable rule link and matches that page's `limit_value` (reuse the regulatory-value-drift lint).

**Score.** `OK` if section non-empty AND ≥1 `regulations/` link AND no superseded rule cited as operative AND no value-drift; `below-tier` if crosswalk thin or recency lagging; `GAP` if section missing. **Residual flagged, not scored:** matrix-scope fit (does an EU "cereals" ML actually apply here) and like-for-like comparability when speciation differs (tAs cap vs iAs literature is *not* comparable — emit `review: not-comparable`, never silently score as gap or pass).

**Serves.** Positions HMTc as more on-top-of-it than regulators (the "out-regulate them" claim), shows the regulatory ceiling the Part 19 `min()` clamps against, and arms the defense attorney for a brand certified tighter than a silent/lax floor. **Firewall guard:** D10 reports the gap; it must never nudge literature values toward or away from the regulatory floor (Part 2 both-directions drift).

### D11 — Standards-readiness roll-up (certification-confidence verdict)  *[BEYOND]*

**Measures.** A single per-ingredient verdict — `NOT-READY` / `PARTIAL` / `STANDARDS-READY` — answering the one question the revenue side asks: can HMTc set this ingredient's limits with confidence today, and if not, what is the shortest path.

**Computation.** Fixed reducer over D5, D7, and the clean/dirty pairing check, gated by D1's consumption-tier requirement. `STANDARDS-READY` iff every priority analyte (the ingredient's `primary_metals_of_concern`, same field the existing monitor reads) is `POOLABLE`-or-better (D5), basis is `CLEAN`/`N-A` (D7), clean/dirty is `PAIRED`-or-`SINGLE`, and the consumption-tier depth bar is met (D1). `PARTIAL` if a defensible value exists for priority analytes but with provisional sensitivity or one open flag. `NOT-READY` otherwise. Emit the blocking list verbatim (`Pb: THIN, needs 1 distinct source; Sn: basis unknown_conversion`). Reuse the `classify()` ladder from `tools/evidence/build-category-standards-readiness.mjs` so the per-ingredient verdict and the category monitor can never silently disagree.

Clean/dirty pairing sub-check: group `used_in_products` rows by parent category, read `variant_type` (`clean_benchmark` / `higher-contamination-sibling`); per priority analyte `PAIRED` if both sides have a non-null pooled distribution, `UNPAIRED` if only one (a dirty-side limit would be unsupportable — report, never infer), `SINGLE` if an independent P97-clean-by-default row.

**Score.** The verdict chip plus the blocking list, which *is* the ingest work order.

**[BEYOND] why added.** Converts the scorecard from a documentation aid into a revenue instrument and prioritization tool. **Firewall guard (load-bearing):** D11 measures whether the *literature can support* a confident limit. It must **not** display, imply, or back-solve the HMTc limit value on the public page. The on-page surface is the readiness verdict and gap list — `STANDARDS-READY: all priority analytes poolable`, never `P97 = X ppb`. All percentile arithmetic stays under `data/workbench/` per CLAUDE.md Part 19.

### Karen's six → final dimensions (traceability)

| Karen's dimension | Final dimension(s) | Change |
|---|---|---|
| 1. Findings across analytes, proportional to consumption | D1 | Split into breadth + depth sub-scores; depth gated by curated consumption tier |
| 2. Findings across regions, with discussion | D2 | Region count deterministic; "discussion" demoted to a `review:` flag |
| 3. Anthropogenic contamination evidence | D3 | Kept distinct from D4 (firewall); computed from partitioned upstream set |
| 4. Background contamination + drivers | D4-mechanism | Kept distinct from D3; requires `drivers[]` + ≥1 upstream source |
| 5. Remediation information | D9 | Requires cited levers, not bare section presence |
| 6. Regulations affecting the ingredient | D10 | Expanded to crosswalk coverage, silence/laxity, recency, value-integrity |
| — | D5, D6, D7, D8, D11 | **[BEYOND]**: pooling depth, speciation, basis, provenance, readiness roll-up |

## Part 3 — Consumption weighting

Per-ingredient expected depth is set by a committed reference table that is **autonomously assembled and deterministically rendered — no human curation anywhere**.

**File.** `data/reference/consumption-tiers.csv`. Columns: `ingredient_slug`, `consumption_tier ∈ {staple, common, occasional, rare}`, `g_per_day`, `source`, `assembled_at`. It is **derived by an autonomous build step** from a public per-capita intake dataset (FAO Food Balance Sheets / EFSA Comprehensive Food Consumption Database / USDA WWEIA), mapped to ingredient slugs and binned by the fixed `g/day → tier` rule below, each row citing its intake figure. (The repo's `data/evidence/intake-*.csv` files are ingest-NOVELTY logs, not consumption data — they are NOT a source for this.) The table is frozen committed data, refreshable by re-running the assembler; never human-curated, never LLM-guessed per render. Auditable: anyone can check `kumquat ≈ 0.1 g/day → rare`.

**Binning rule (fixed).** `staple` ≥ 50 g/day · `common` 5–50 · `occasional` 0.5–5 · `rare` < 0.5. The assembler commits the exact cutoffs alongside the table.

**Expected-depth step table** (also committed, e.g. as a header block in the same file or a sibling `consumption-tier-thresholds.csv`):

| tier | `expected_min_total_n` (D1 depth) | D11 readiness requirement |
|---|---|---|
| staple | ≥ 40 | priority analytes must reach `CONFIDENT` |
| common | ≥ 15 | priority analytes must reach `POOLABLE` |
| occasional | ≥ 5 | priority analytes must reach `POOLABLE` |
| rare | ≥ 1 | passes at `THIN` |

**Under-coverage flag.** D1 sets `coverage_below_tier` when `total_n < expected_min_total_n[tier]`. Because the threshold scales with the tier, a staple at `n=2` reads red while a rare ingredient at `n=2` reads OK. The aggregate register (Part 4) ranks gaps by tier, so a GAP on a staple outranks the same GAP on a rare ingredient — the master worklist naturally floats "chocolate is missing remediation evidence" above "kumquat is missing a third region."

If an ingredient is absent from the tier table (no intake figure assembled yet), the scorecard renders D1-depth and D11's depth-gate as `tier-unset` — a neutral flag, neither pass nor fail — and **every other dimension renders fully**, so the scorecard is useful immediately. The missing ingredient is added to the register as an autonomous `assemble-intake-figure` task; it is never routed to a person, and the system never invents a tier.

## Part 4 — Gap surfacing

### 4a. The per-page completeness block

Rendered inside generator markers (`<!-- hmi-completeness-scorecard -->` … `<!-- /hmi-completeness-scorecard -->`), placed near the top of the page under the H1, mirroring the existing `hmi-*` marker-block convention. No `hmi-` blocks exist on ingredient pages yet, so this is the first.

An eleven-row table plus a principle-balance row. No composite number anywhere.

| Dimension | Status | What's there (auditable counts) | What's missing (precise gap) |
|---|---|---|---|
| D1 Analyte coverage (tier: staple) | below-tier | 7/10 analytes, total n=412 | depth OK; analytes Ni, Al, Sn are data-gaps |
| D2 Regional coverage | OK | 33 jurisdictions, top region 41% | `review:` name top-3 regions in prose |
| D3 Anthropogenic evidence | OK | 17 soil + 15 drinking-water sources | — |
| D4 Background mechanism | OK | section present, 6 drivers, upstream-backed | `review:` driver-citation |
| D5 Pooling depth | POOLABLE | Cd CONFIDENT, Pb POOLABLE, iAs THIN | iAs: needs 1 distinct source |
| D6 Speciation | OK | iAs + tAs declared; tHg declared | — |
| D7 Basis declaration | GAP | 9/10 cells declare basis | Sn cell: no basis token |
| D8 Provenance integrity | OK | 95/95 claims supported, 0 orphans | — |
| D9 Mitigation | OK | 4 cited levers | — |
| D10 Regulatory coverage | below-tier | 5 rules linked, crosswalk 6/11 | China, CA Prop 65 unmapped for Pb |
| D11 Standards-readiness | PARTIAL | priority analytes poolable | iAs THIN; Sn basis flagged |
| **Principle balance** | **flag** | defensibility strong | consumer-protection bar low (D4-cons) |

Every count in column 3 traces to a frontmatter field or a routed-source tally the reader can re-derive. Stubs render a minimal block: `Not yet characterized — scorecard activates at 2 contributing A-tier sources.`

**Principle-balance row (meta, deterministic).** Each dimension maps to one of the five governing principles (consumer protection, contamination reduction, brand value, legal defensibility, scale). After the eleven dimensions compute, the row raises a flag when `max(principle bar) − min(principle bar)` exceeds a fixed spread, and names the starved principle in plain text. It is not a score and not an average — it is the anti-gaming meta-signal demanded by the requirement that no principle be subordinate. (Note: a lens proposed a distinct "consumer-protection sufficiency" check — infant/child matrix coverage when the ingredient is child-consumed, an as-consumed basis present, a quantified dose/frequency anchor. This is folded in as the consumer-protection input to the balance row, computed deterministically from `used_in_products` cross-referenced against the child-food product set, `route_basis`, and a regex dose-anchor check, with the borderline dose-anchor case as a `review:` flag.)

### 4b. The aggregate gap register (master worklist)

The ranked worklist that drives the autonomous fix queue (top-down) and is human-readable. Two coupled outputs, auto-regenerated:

1. `data/evidence/ingredient-completeness-gaps.csv` — one row per `(ingredient, dimension-with-a-gap)`. Columns: `ingredient_slug`, `consumption_tier`, `dimension`, `status`, `gap_type`, `specific_missing`, `suggested_fix`, `principle`. `suggested_fix` is mechanical, never prose advice: e.g. `route a source tagged matrices:[soil]`, `link regulations/codex-cadmium-mls`, `advance 4 pending analytes to data-gap`, `seed consumption_tier in data/reference/consumption-tiers.csv`.
2. `wiki/completeness-gaps.md` — the rendered, ranked sibling page, regenerated in the same auto-generated style as the existing `coverage.md` PRISMA-equivalent surface (not a bespoke format).

**Ranking key.** Consumption-tier-weighted, then by dimension severity (D8/D11 gaps rank above D2 cosmetic gaps). A `staple` GAP outranks the same GAP on a `rare` ingredient. This ranking is what makes the register a trust-and-prioritization instrument rather than a flat list.

## Part 5 — Anti-gaming

The scorecard resists the failure mode where a page is padded to look complete without becoming more defensible.

1. **Counts draw only from admissible, value-bearing, direct-evidence rows.** All coverage counts filter `product_source_routing_audit.csv` (or the derived ingredient source set) to `route_status == admissible` AND `value_record_count > 0` AND `route_kind == direct_evidence`. `broad_*_context` and `exposure_only` rows are context, not coverage, and cannot inflate adequacy. Padding a page with low-value or off-basis sources moves no admissible count.
2. **Distinct sources, not citations.** D5 counts `distinct_sources` and `sample_level_contributing`; ten re-citations of one dataset register as depth-of-one. Duplicate regions collapse the same way — D2 unions `jurisdictions:` to a *set*, so re-listing one province does not raise the region count, and an over-concentration flag fires when one region dominates.
3. **No composite number to inflate.** Because there is no rolled-up percentage, there is no single figure an agent can optimize. Each chip is a discrete state with shown counts; the principle-balance row fires precisely when raw volume rises in one principle while another stays starved.
4. **Provenance gate is hard.** D8 fails the page if any numeric claim is unsupported or any citation is to a source that does not name the ingredient — so fabricated or mis-routed citations lower the card rather than raise it.
5. **Judgment never enters the score.** The one non-corpus input (consumption tier) is autonomously assembled from cited external data and frozen; the residual `review:` flags are surfaced in the register and worked by a separate verified pass, never folded into a chip. There is no path for an LLM — or a render-time guess, or a person — to move a score.

## Part 6 — Build plan

**Generator.** `tools/evidence/build-ingredient-scorecard.mjs`. Deterministic; no model in the compute path.

**Inputs (all on-disk today except one):**
- The ingredient page frontmatter (`contamination_profile`, `drivers`, `used_in_products`, `primary_metals_of_concern`).
- The ingredient source set — derived by scanning `wiki/sources/*.md` frontmatter `ingredients:` arrays (the canonical `product_source_routing_audit.csv` is **product-keyed** via `product_slug` and does not key by ingredient; verified against the header). This is the load-bearing realization shared by multiple lenses.
- `hmtc_aggregate_distributions.csv` — read `distinct_sources`, `sample_level_contributing`, `pooled_n`, `sens_band`, `native_basis`, `variant_type`, `lowest_regulatory_cap_ppb`, `contribution_log`. **Read these; never recompute or estimate them.**
- `product_source_routing_audit.csv` — `route_status`, `value_record_count`, `route_kind`, `declared_metal_species`, `missing_metal_species`. **Use a real CSV parser**: the file has embedded commas inside quoted multi-value cells (`declared_products`, metal lists), so `cut`/`awk` breaks.
- `claim-provenance-audit.csv` / `claim-provenance-summary.json` for D8.
- Section presence via the **same role-based matcher** already behind `ingredient-mandatory-sections-audit.csv` (currently 229 pass / 28 exempt-stub). Do not reimplement with exact-string matching — rice's `Why this commodity accumulates cadmium` heading only passes by role.
- Link-target existence for `mitigation/`, `supply-chain/`, `regulations/`; `wiki/regulations/by-jurisdiction.md` as the crosswalk denominator.
- **NEW FILE (must be seeded): `data/reference/consumption-tiers.csv`** — the one curated input (Part 3).

**Outputs.** The per-page marker block (Part 4a) written into each `wiki/ingredients/*.md`; `data/evidence/ingredient-completeness-gaps.csv` and `wiki/completeness-gaps.md` (Part 4b); a `data/evidence/ingredient-scorecard-review-flags.csv` carrying all `review:` residuals.

**Freshness.** Runs on the same triggers as the routing audit (Part 5b discipline): the `chokidar` watcher on `wiki/sources/` and `wiki/ingredients/` under `npm run serve`; the pre-commit hook when those dirs change; the `prebuild` step. The generator should write its `review:` residuals only to the side register, never into the scored block, so re-runs are byte-stable. As a by-product it may write a derived `applicable_regulations` / `jurisdictions_mapped` block into ingredient frontmatter so the app and next session get the structured field for free (a system job, not a hand-edit).

**Dimension list as data, not hardcode.** The eleven dimensions are a config array so the product-page variant (Part 7) is a config change.

**Honestly deterministic vs needs a judgment pass:**
- Fully deterministic, ship as-is: D5, D6, D7, D8, D9, D10 (the scored part), D11. These read committed fields/counts.
- Deterministic-proxy, score the proxy and surface the residual flag: D2 (region count vs discussion quality), D3 (matrix-slug/`attribution` flag vs true apportionment depth), D4-mechanism (section + drivers vs per-driver citation), consumer-protection input to the balance row (dose-anchor regex).
- Curated input, deterministic render: D1 / D11 depth bar (the consumption tier).
- The `review:` flag residuals are worked by a separate autonomous verified pass (surfaced in the register); the tier table is autonomously assembled. Neither is in the scoring path, and neither requires a person.

**Data-hygiene items the build handles autonomously (surface in the register, never route to a person):**
- `consumption-tiers.csv` does not exist; an autonomous build step assembles it from external intake data (NOT the ingest-novelty `intake-*.csv` logs). Until it lands, D1-depth/D11-gate render `tier-unset` and every other dimension works — non-blocking.
- An `attribution: true` (PMF/source-apportionment) frontmatter flag added at source ingest converts D3 from a matrix-slug proxy to a hard signal; worth adding to the ingest schema.
- `evidence_tier` has stray values (`A-tier`, `A  # comment`) and `source_type` is inconsistent (`gov-report` / `government-report` / `gov-data`); any dimension keying on them must normalize against a vocabulary map first.
- `geographic_breakdown` / `seasonal_variance` are schema-defined but populated on **0 of 258** ingredient pages, so D2's region-breakdown sub-check reads near-universal red corpus-wide. That is correct gap-surfacing behavior, not a bug.

## Part 7 — Extensibility to product pages

The product-category template already enforces its own mandatory-section list (Who this page is for / Methodology / Literature Evidence Summary / Levers to reduce contamination / Federal-Regulatory crosswalk / Historical recalls / Sources), and `product_source_routing_audit.csv` **is** product-keyed with `route_kind` and `value_record_count` — so for products the routing audit gives direct/broad source counts for free, without the source-frontmatter derivation step ingredient pages need. The same section-presence, jurisdiction-union, pooling-depth (D5 reads the product row directly), speciation, basis, provenance, mitigation, regulatory, and readiness dimensions transfer 1:1. Two swaps: the consumption tier becomes the product's vulnerable-population weighting (infant/child products carry the highest expected-depth bar), and the clean/dirty pairing check (D11) operates on the product's own `variant_type` rather than the bridged rows. Because the dimension list is config-driven, the product variant is a config change plus the population-weighting table, not a new generator.
