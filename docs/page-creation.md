# Page creation and naming — Heavy Metal Index Wiki

This is the full page-creation and naming policy, split out of CLAUDE.md Part 10 to keep the operating manual under the context-budget threshold. CLAUDE.md Part 10 carries the summary and points here for the complete rules.

New-page proposals (ingredient, product, regulation) surface from two places: the routing audit's `routing_unresolved.csv` when a source's frontmatter declares a page that does not exist, and the model's own pattern-noticing when a sub-variant accumulates enough independent evidence to warrant its own page. Either way, Karen approves before pages are created; the model does not silently invent ingredient or product pages mid-ingest.

**Ingredients:** create a new page when 5 or more papers treat the sub-variant as a distinct commodity with its own risk profile. Below that threshold, add the variant as an `aliases` entry on the parent page with a short note in the page body. Example: 3 papers mention "rice bran" alongside rice papers → rice bran goes in `ingredients/rice.md` aliases. 10 papers focus specifically on rice bran contamination distinct from whole rice → create `ingredients/rice-bran.md`. When the threshold is crossed, propose the new page in the batch report.

**Products:** product pages are auto-created as routing destinations whenever a source declares a slug with no matching page. Two entry points produce these:

- `tools/autonomy/create-missing-pages.mjs` (frequency-driven, batch) handles slugs that have accumulated freq >= 2 across the corpus.
- `tools/autonomy/create-provisional-product-scaffold.mjs` (single-slug, on-demand) handles slugs the active ingest session encounters mid-run, including freq-1.

Both tools mark the page `provisional_scaffold: true` plus `hmtc_category: pending_taxonomy_review` and `hmtc_row: pending_taxonomy_review` in frontmatter, and log creation to `data/evidence/provisional-product-scaffolds.jsonl`. **The flag is the governance signal:** the page exists so sources route somewhere defined, but HMTc category assignment, within-row clean/dirty splits, contamination-platform classification, and certification thresholds do not derive from the page until a Step 0 Lock is authored (see `tools/autonomy/cat<N>-step0-scaffold.mjs`; the Cat 2 scaffold is the reference exemplar). Scaffolding promotes the stub to a locked row, clearing the `provisional_scaffold` flag.

The pre-2026-05-17 flag name `pending_category_lock: true` is the predecessor of `provisional_scaffold: true`. Both are recognized by audit-routing-discipline and the orchestrator for back-compat; new pages use `provisional_scaffold`. The pre-2026-05-17 policy of writing unresolved product slugs to `data/evidence/autonomy/product-stub-proposals-pending.csv` instead of creating pages is preserved as the `--no-products` flag for one-off cases. The default is to create the routing destination immediately.

The 2026-05-14 incident (face-paint, lipstick, skin-lightening-cream auto-stubs retired the next day by the Cat 2 scaffold) was caused by stubs being created *without* a provisional flag — they looked like full product pages with HMTc bindings. The flag prevents that failure mode.

**Ingredients (2026-05-17 update):** ingredient pages get the same treatment. Slugs at freq >= 2 are auto-stubbed by `create-missing-pages.mjs`; freq-1 slugs an active ingest declares are created via `tools/autonomy/create-provisional-ingredient-scaffold.mjs` with `provisional_scaffold: true` and `literature_scope: thin`. The 5-paper-threshold rule still applies to *promotion*: a provisional scaffold is the routing destination; it becomes a full ingredient page (with populated `contamination_profile`) once the literature crosses the threshold and the synthesis pass runs.

**Regulations:** create a new regulation page on first encounter. Regulations have hard identifiers (rule numbers, official names) and benefit from being captured immediately.

**Metals:** create a new metal page on first encounter, but only for metals that appear in the corpus with reasonable frequency. Exotic or trace metals stay as notes on related metal pages until they accumulate their own evidence base.

**Merging.** Two kinds, with different gates. (1) *Scope merges* — two distinct pages covering substantially the same literature with different framings (e.g. `ingredients/carrots.md` and `ingredients/root-vegetables.md`): this is a taxonomy judgment call, so Claude proposes it in the next batch report rather than merging autonomously. (2) *Duplicate collapse* — two source records of the **same paper** (identical DOI + identical raw file hash, or a canonical/drop verdict from the DOI-collision audit): this is mechanical dedup, and Claude runs it autonomously via `tools/dedup-doi-clusters.mjs` after verifying the members are the same work. The one hard rule: never merge two *different* papers that happen to share a DOI (a wrong-DOI mis-ingest) — those are excluded from the collapse and fixed separately.

**Orphan prevention.** New pages must be linked from `index.md` on creation. They must also be linked from at least one parent category page (metal, ingredient, product, regulation, testing method) or they become orphans.
