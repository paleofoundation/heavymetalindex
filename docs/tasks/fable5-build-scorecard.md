# Fable 5 task — build the page-completeness scorecard generator

Single high-effort Fable 5 session (NOT Ultracode, NOT Max — this is a deterministic
generator; over-powering deterministic work is the FRANK anti-pattern). Paste below
the line into a fresh session in `~/Desktop/heavy-metal-index`.

---

You are a fresh Claude session in the Heavy Metal Index repo (`~/Desktop/heavy-metal-index`).
Other autonomous systems and sessions commit to `main` concurrently, so you work in
isolation.

## Isolation
1. FIRST: `git checkout -b fable/completeness-scorecard-2026-06-10`.
2. Commit only to that branch. Never commit to `main`, never push.
3. The generator writes marker blocks into many ingredient pages — that is fine on
   your branch; a human merges later.

## Goal
Build `tools/evidence/build-ingredient-scorecard.mjs` exactly per the spec in
`docs/page-completeness-scorecard.md`. Read that spec in full first; it is authoritative.
Build it, run it across all ingredient pages, write a test, commit.

## Hard constraints (these are the point, not decoration)
- **No LLM in the scoring path.** Every chip is a pure function of committed
  fields/counts, re-derivable by re-running the script. If you find yourself wanting a
  model to judge completeness, you have mis-built it.
- **No composite 0–100 score.** Eleven dimension chips (D1–D11) + the principle-balance
  row, per spec Part 2 and 4a. Status chips with shown auditable counts.
- **Nobody is ever routed to a human.** No "flag to Karen", no approval step, no
  human-curated input. Residual `review:` flags go to a side register
  (`data/evidence/ingredient-scorecard-review-flags.csv`); missing data becomes an
  autonomous task row in the gap register. There is no human in any loop.
- **Use a real CSV parser** (embedded commas in quoted multi-value cells); reuse the
  **role-based section matcher** behind `ingredient-mandatory-sections-audit.csv` — never
  exact-string heading match (rice's heading is `Why this commodity accumulates cadmium`).
- **Read pooled fields, never recompute them**: `hmtc_aggregate_distributions.csv`
  (`distinct_sources`, `pooled_n`, `sens_band`, `native_basis`, `variant_type`,
  `contribution_log`), `claim-provenance-audit.csv`. Derive each ingredient's source set
  from `wiki/sources/*.md` frontmatter `ingredients:` arrays (the routing audit is
  product-keyed, not ingredient-keyed — spec Part 6).
- **Graceful degradation:** if `data/reference/consumption-tiers.csv` is absent or an
  ingredient is missing from it, render D1-depth and D11's depth-gate as `tier-unset`
  and let every other dimension render fully. Do NOT block, do NOT invent a tier.
- **D11 public surface = verdict + blocking list only.** Never display, imply, or
  back-solve a P-value on the page — Part 19 firewall. Percentile arithmetic stays under
  `data/workbench/`.

## Outputs (spec Part 4, 6)
- Per-page `<!-- hmi-completeness-scorecard --> … <!-- /… -->` block in each
  `wiki/ingredients/*.md`.
- `data/evidence/ingredient-completeness-gaps.csv` + `wiki/completeness-gaps.md` (the
  ranked master worklist; consumption-tier-weighted, then dimension severity).
- `data/evidence/ingredient-scorecard-review-flags.csv` (the residuals).
- A test (`tools/evidence/build-ingredient-scorecard.test.mjs`) asserting: byte-stable
  re-runs, no composite score emitted, a known page's chips match hand-computed counts,
  and `tier-unset` degradation when the tier file is absent.

## The consumption-tier assembler (separate, also autonomous — spec Part 3)
The tier table does not exist. EITHER build a sibling
`tools/evidence/build-consumption-tiers.mjs` that assembles
`data/reference/consumption-tiers.csv` from a public per-capita intake dataset
(FAO Food Balance Sheets / EFSA Comprehensive / USDA WWEIA), mapped to ingredient slugs,
binned by the fixed `g/day → tier` rule (staple ≥50 · common 5–50 · occasional 0.5–5 ·
rare <0.5), each row citing its figure — OR, if that external data is not readily
fetchable in-session, ship the scorecard with `tier-unset` degradation and leave a
documented `assemble-intake-figure` task in the gap register. Do NOT hand-curate tiers
and do NOT guess them with a model. Either path is acceptable; both keep humans out.

## Freshness
Wire the generator into the routing-audit triggers (chokidar watcher under `npm run
serve`, pre-commit hook, `prebuild`), per spec Part 6 and CLAUDE.md Part 5b.

When done, print: `DONE: scorecard generator -> <branch> (N pages scored, M gaps registered)`.
