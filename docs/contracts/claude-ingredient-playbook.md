# Claude ingredient build playbook (22 October 2026)

Owner (Karen) instruction: Claude builds the ingredient pages. Several Claude sessions build in parallel in this shared folder, one ingredient each. A coordinating Claude session reviews the finished candidates and releases them in batches. **Build sessions never deploy.** Honey is the reference implementation: it passes every gate and is live.

## Read first (binding)

- `AGENTS.md`: the ownership section at the top; "Mandatory ingredient publication gate"; "Ingredient evidence completeness"; "Comparator machine"; "Table cells carry only row-specific content"; hero preservation; public content boundary; canonical presentation; lower-contamination comparisons; FAQ capacity and question bank.
- `docs/contracts/ingredient-canonical-style.md`, `ingredient-reading-pattern.md`, `ingredient-faq-question-bank.md`, `ingredient-fullness-gates.md`, `evidence-and-answers.md`, `hmi-baseline.md`, `docs/public-content-boundary.md`, `wiki/methodology/persistent-wiki-ingest-rule.md`.

## What you may write

Only your ingredient's own paths:

- `tools/contracts/ingredients/<slug>/`
- `data/evidence/syntheses/ingredient-<slug>-v1.json`
- `data/evidence/questions/ingredient/<slug>.json`
- `data/evidence/contracts/<slug>/`: the shared-schema ledger, scorecard and reference artifacts
- your audit directory: the existing `data/evidence/contracts/most-studied-rollout-2026-10-22/<slug>/` for a Most Studied page, otherwise `data/evidence/contracts/ingredient-rollout-2026-10-22/<slug>/`

Never write any of these:

- `wiki/` (including `wiki/ingredients/<slug>.md` and `wiki/sources/`)
- shared code (`tools/contracts/pilot/`, `tools/*.mjs`, `tools/lib/`, `quartz/`)
- shared data (`data/evidence/*.csv`/`.json` indexes, `data/reference/`)
- `docs/`, `AGENTS.md`, `CLAUDE.md`, `package.json`
- the HMI-Library drive or `~/HMI-Library-backup`

If you need a shared change, a source-record correction, or a missing file restored, write it to `<audit dir>/shared-requests.json`: what, why, primary evidence, exact before/after. Then continue with everything else.

**Also never:**
- run git commands that change state (commit, push, checkout, stash, reset)
- run `npm run build`, `npm run prebuild` or `vercel`
- download files from the internet. Record an open-access location as a retrieval request; the owner approves downloads.
- delete or move anything outside your own paths

Another chat's earlier work for your ingredient (for example Codex's recovery scripts) is input you may read and reuse after checking it against the primary text. It is not authority.

## Build steps (copy and adapt honey)

Honey's files in `tools/contracts/ingredients/honey/` are the template. Copy them into your directory and adapt them; do not import them from honey's directory.

| Honey file | Role |
|---|---|
| `prepare-datasets.py` | Reproducible extraction of indexed datasets: FDA TDS sample rows and WHO GEMS/Food (June 2026 export for Pb, Cd, Hg, Al, Sn; **May 2026 per-region exports for all arsenic species**). Writes a decision for every dataset row. |
| `build-ledger.py` | Early sanity ledger. The authoritative ledger is `fullness.mjs`. |
| `source-adapter.mjs` | Rows (one per extracted result), holds, reference units, comparisons, reason codes. |
| `compose.py` | Synthesis: prose with sentence-level citations, 36 answers, supporting questions, FAQs, mitigation records. |
| `pin-sources.py` | Pins cited shared source records by hash. Re-run only after reviewing a change. |
| `build.mjs` | Compiles the candidate with `renderContractArticle`; `--check` verifies it is reproducible. |
| `preview.mjs` | Isolated preview beside Rice; never writes `wiki/`. |
| `fullness.mjs` | Shared-schema ledger, reference artifacts, scorecard and the 7 gates on a given HTML file. |
| `finalize.py` | `result.json`. |

1. **Universe.** Get it from `tools/ingredient-source-universe.mjs` (`loadIndependentCorpus` + `recomputeUniverse`). Every item (source records *and* every matching dataset row) needs one content-based terminal decision with a primary-text locator.
2. **Extraction.** Read every candidate source's primary text, from the `raw_path` in the source record, resolved with `tools/lib/library-root.mjs`. The HMI-Library drive is mounted at `/Volumes/HMI-Library`, with the backup at `~/HMI-Library-backup`. Use parallel subagents (the Agent tool) for primary-study extraction, 2–4 sources each, with honey's `extraction-schema.md` as the output contract. Extract **every** reportable result: every subgroup × analyte × statistic, plus per-sample values when printed.
3. **Integrity holds.** When a value cannot be reconciled with its own paper's method or figures, show it, hold it from references, and give it reason code `value_fails_source_integrity_check`, stating the specific conflict.
4. **Rows.** One table row per extracted result. Result IDs equal the rendered row IDs: `hmi-occurrence-<slug>-<analyte>-<index>`, numbered in the adapter's compiled order. The shared table groups rows by food form and folds spread figures into their central row as hidden rows (`data-folded-into`); see the canonical contamination-profile table rule in `ingredient-canonical-style.md`. Give every row a form key (`form_group`, the material key, or a page `formOf`).
5. **References.** Rice-grade references through `applyHmiBaselines`:
   - built from subgroup medians or individual sample values from every compatible family
   - never from means, ranges or maxima
   - every result in a family without units gets a scientific exclusion
   - a single-family reference only when it really is the only family
6. **Comparisons.** Each row records attempts in the order HMI rating → within-study direct → bounded. An unavailable row carries one of the six terminal reason codes.
7. **Prose, FAQs, mitigation.**
   - Prose depth follows the canonical rules, with lower-contamination comparisons per decision-relevant analyte.
   - Up to 20 FAQs, with the question bank assessed.
   - The stage-led mitigation table uses the shared stages, which now include primary-production stages such as "apiary siting", "harvest and collection", "aquaculture", "capture and landing" and "animal husbandry", plus "extraction and storage" and "packaging and storage".
8. **Gates on your preview HTML.** All of these must pass:
   - `fullness.mjs <preview>/ingredients/<slug>.html`: gates 1–7
   - `inspectIngredientPresentation`: 0 errors
   - `audit-public-processing --output <preview>`: pass
   - question-record `validateRecord`: no errors
9. **Finish.** Write `result.json`, then report.

## Pitfalls already found (avoid them)

- **Zeros.** WHO writes non-detects as `ND`, `0` and `0.000`. Any zero is a limit-bounded non-detect, never a measured zero.
- **WHO duplicates.** GEMS/Food exports the same submission under EURO and European Union, and sometimes in two units; collapse exact duplicates. May-export rows that repeat a June submission (same serial and contaminant) are duplicates.
- **WHO mercury.** "Mercury (inorganic)" is not total mercury.
- **Non-target foods.** Foods that only name or contain the ingredient (for example "Honey Wine", honeydew melon, cereal bars with honey) are out of scope, each with a reason.
- **Units without a basis.** Keep mg/L results without a density in mg/L, coded `basis_incompatible_with_all_references`.
- **Implausible values.** Some papers contradict themselves (units ×1000, detection limits above the reported values, printed means that contradict their own figures). Check before admitting them.
- **Stored summaries.** `wiki/sources` summaries are often wrong. Trust the primary text and propose corrections.
- **Collection periods.** Never use the publication year as the collection period.
- **Origin.** Growing origin is not the purchase market.
- **Table cells.** Comparison cells hold only the buttons and the information icon. Information shared by most rows goes in the column's information icon. The shared table now does both automatically; do not add per-row text that repeats.
- **Quick Read.** Source citations only, no contextual links.
- **Hero.** Keep the original hero artwork: `data/design/page-hero-images.json`.
- **Public text.** No P95, HMTc, tool or AI names in public text.
- **Gate 3 records.** An access-blocked source needs dated attempts on the mounted library (`/Volumes/HMI-Library/...`, `mounted: true`), raw, publisher/OA and backup, plus a retrieval request.

## Thin pages (owner instruction, 22 October 2026)

After the complete ledger, assess thinness under the AGENTS.md rule "Thin pages ledger" and write `<audit dir>/thin-page.json`:

```json
{"slug":"<slug>","status":"adequate|thin|blocked","assessed_at":"<ISO>","universe_items":0,"occurrence_families":0,
 "analytes":[{"analyte":"Pb","decision_relevant":true,"results":0,"reference_units":0,"families":0,"rated":0,"note":"..."}],
 "reasons":["few_occurrence_families"],
 "fetch_targets":[{"what":"...","why":"...","where":"...","priority":"high|medium|low"}],
 "publishable":true,"publishable_reason":"..."}
```

Validate it with `validateThinPage` in `tools/contracts/build-thin-pages-ledger.mjs`. Do not run the roll-up yourself; the coordinator does. A thin page is still built fully and honestly. A blocked page (for example one with no hero artwork) is built, but marked not publishable.

## Done means

- A reproducible candidate exists at `<audit dir>/candidate/<slug>.md` (`build.mjs --check` passes).
- The ledger and scorecard are in `data/evidence/contracts/<slug>/`.
- All gates above pass on the preview HTML.
- `result.json` lists: counts, holds, access gaps, source-correction proposals, shared requests, and before/after against the live page.

Then report in this form:
- **Ingredient:**
- **Status:** ready / blocked
- **Rows, rated, direct, bounded, unavailable:**
- **Universe items and dispositions:**
- **Gates:**
- **Holds and access gaps:**
- **Shared requests:**
- **Anything the owner must decide:**
