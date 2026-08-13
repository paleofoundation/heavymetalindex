# Category 6 — Seafood — Step 0 Lock

**Status:** Incremental scope lock (2026-06-02), companion to the Cat 7 lock.
**Taxonomy:** HMTc v2.0, Category 6 (Seafood), 6 rows.
**Panel:** eight totals — Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr — plus iAs and Cr-VI species controls and the category-critical MeHg cell.

## Why Cat 6 locks its row scope now (and what still waits)

Category 6's row structure is a **toxicologically mandated** split, not a
data-driven percentile decision: methylmercury bioaccumulates up the marine food
chain, so predatory marine fish (tuna, swordfish, shark) are a categorically
different MeHg platform from non-predatory fish (sardines, salmon, cod), which
differ again from shellfish (Cd, iAs accumulation), seaweed (iAs/tAs hyper-
accumulation), and canned seafood (Sn from the can). Locking these six rows as
**routable scaffolds** is therefore safe — the splits come from established
exposure science, not from waiting on our own data. What still waits for data is
the per-analyte **threshold numbers** (the workbench pass), exactly as in Cat 7.

This lock also resolves a stranded-data problem: ~219 source declarations sat on
the broad pages `seafood` (100), `fresh-fish` (93), and `canned-fish` (28), which
lacked `hmtc_row` and so fanned out nowhere (Check 3 backlog). This lock makes the
six rows routable and adds broad-scope fan-out so that broad declarations land on
the specific rows as reviewable context.

## Speciation is load-bearing for this category

MeHg vs tHg is **non-substitutable** (CLAUDE.md Part 14) and matters more here
than anywhere else in the index: the entire predatory/non-predatory axis is a
MeHg story. A source reporting only total Hg routes as tHg context and must not
be silently treated as MeHg. Licensee baselines for fish rows require MeHg
speciation, not tHg alone.

## Row architecture and lock status

| Row | Slug | variant_type | Platform metals | Confidence | Direct sources |
|----:|------|--------------|-----------------|-----------|---------------:|
| 1 | fish-freshwater | independent | Hg/MeHg, Pb | medium | 18 |
| 2 | fish-marine-non-predatory | independent | tHg/MeHg, Cd, iAs | medium-low | 9 |
| 3 | fish-marine-predatory | whole_row_platform | **MeHg, tHg** | medium | 10 (+ fan-out) |
| 4 | shellfish | whole_row_platform | **Cd, iAs** | medium-high | 25 |
| 5 | seaweed-kelp-foods | whole_row_platform | **iAs, tAs, Cd** | medium-low | 5 |
| 6 | canned-seafood | whole_row_platform | **Sn** (+ inherited fish Hg) | provisional | created this lock |

All six are scope-locked; per-analyte threshold numbers come from the workbench
pass. Confidence reflects routed direct-evidence depth; the broad fan-out from
`seafood`/`fresh-fish` adds substantial reviewable context on top.

## Broad-scope fan-out (resolves the stranded pools)

- `seafood` → all six rows (broad_product_context — species unresolved).
- `fresh-fish` → fish-freshwater, fish-marine-non-predatory, fish-marine-predatory.
- `canned-fish` → canned-seafood.

These broad pages are kept as broad-scope tokens (added to `broadProductScopes`
and `inheritedProductRoutes`), not retired: they are legitimate broad scopes that
fan down to multiple rows, unlike the Cat 7 sub-variants which rolled up to one
parent. Fan-out is `broad_product_context`: the data stays reviewable context
until species and MeHg/tHg fit are resolved during synthesis.

## Regulatory caps (loaded from vetted corpus — EU 2023/915)

- Muscle meat of fish, general: Pb 300, Cd 50, **Hg 500** µg/kg.
- Predatory / higher-mercury listed fish: **Hg 1000** µg/kg.
- Bivalve molluscs (shellfish): Pb 1500, Cd 1000 µg/kg.
- Canned seafood: Sn 250000 µg/kg (Codex CXS 193, canned foods other than beverages).

All transcribed from `wiki/regulations/eu2023-contaminants-maximum-levels` and
`codex-cxs-193-1995-tin-canned-foods` (already vetted in corpus).

## Across-row review hooks

- fish-freshwater: predatory freshwater species (e.g., pike, bass) bioaccumulate
  more MeHg — review for a freshwater-predatory sub-split.
- shellfish: bivalves (filter feeders — Cd/iAs) vs crustaceans differ; review for split.
- seaweed: hijiki and other brown algae carry far higher iAs — review for a
  species sub-split (some seaweeds carry food-safety advisories).

## Change log
- 2026-06-02 — Initial scope lock. 6 rows scope-locked (5 pre-existing, +1
  canned-seafood created). Broad-scope fan-out added for seafood/fresh-fish/
  canned-fish. Authored by Claude (co-architect mode), Karen review.
