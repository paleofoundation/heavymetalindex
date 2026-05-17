# Ingest workflows — Heavy Metal Index Wiki

This document is the operational reference for ingest. The rule-grade summary lives in CLAUDE.md; this file is the per-workflow detail.

## Source-file handling (this project's specific input)

Input to this wiki is 23,262 Marker-converted markdown files. Each paper sits in its own folder under `raw/markdown/`, named by its filesystem handle (an `FM_XXXXXXX` identifier from Karen's triage pipeline), and contains the markdown file plus any extracted figure images and a metadata JSON.

The frontmatter the model fills on each source page is the input to the routing layer described in CLAUDE.md Part 5b. Routing fan-out, ingredient `contamination_profile` updates, and product-page table regeneration all depend on this frontmatter being accurate and at the right level of specificity.

### Filesystem handle vs. cite-key

Two identifiers per source, deliberately separate.

The **filesystem handle** is the `FM_XXXXXXX` identifier. Stable, globally unique, collision-free. Used for `raw/markdown/` folder names, the `raw_handle` frontmatter field, and cross-references that need to be unambiguous across Claude sessions. Claude must never change or re-derive a filesystem handle.

The **cite-key** is human-readable: lowercase, hyphenated, formed as `<firstauthor><year>-<slug>` (for example, `he2013-shanghai-cadmium`). Used in wiki content, `[[sources/<cite-key>]]` wikilinks, and prose citations. The cite-key is derived from the paper's metadata, which the triage manifest pre-populates wherever DOI lookup succeeded.

When the triage manifest provides a cite-key, use it. When it does not, derive one from first author, year, and a short topic slug, then record it in source-page frontmatter. If two papers generate the same cite-key, append `-a`, `-b`, etc. Prefer the manifest's pre-populated cite-key over re-deriving on the fly, to prevent inconsistency across sessions.

### Source page creation

Every ingested file produces exactly one source page at `wiki/sources/<cite-key>.md`. Frontmatter includes both identifiers:

```yaml
raw_handle: FM_3750310
cite_key: he2013-shanghai-cadmium
```

This lets Claude and humans trace from the filesystem up to wiki content and back down to the raw markdown.

### Deduplication rule

The triage manifest identifies exact duplicates (identical SHA-256 hash) and near-duplicates (different hashes but high textual overlap).

For **exact duplicates**, ingest only one file. Log the skip to `log.md`: `## [YYYY-MM-DD] skip | FM_XXXXX is SHA-identical to FM_YYYYY, not ingested`. Keep both files in `raw/markdown/` — storage is cheap and preserving both protects against dedup-logic errors.

For **near-duplicates** (papers flagged in the manifest's cluster column), prefer the higher-evidence-tier version. Published versions beat preprints; peer-reviewed versions beat conference abstracts. Create one source page for the preferred version. Note the relationship in frontmatter:

```yaml
near_duplicates: [FM_YYYYY, FM_ZZZZZ]
```

### Pre-populated frontmatter

The triage manifest pre-populates these fields before Claude reads the content:

```yaml
raw_handle: FM_XXXXXXX
cite_key: <derived>
year: <from manifest>
doi: <from manifest, may be null>
license: <from manifest>
publisher: <from manifest>
metals: <from manifest text-mining>
ingredients: <from manifest text-mining>
matrices: <from manifest text-mining>
jurisdictions: <from manifest text-mining>
```

These are draft values. Claude verifies each field against the actual paper content during ingest and corrects any errors. Silent correction is fine; a large disagreement (manifest says `[Pb]` but paper is clearly about arsenic only) is flagged to Karen for review.

### Existing-pages-aware ingest

Source-page frontmatter is the routing layer's input. The model is responsible for declaring `products:` and `ingredients:` against the **existing** wiki taxonomy, not inventing slugs from the paper's text. Before writing any source page, check `wiki/products/` and `wiki/ingredients/` to know what slugs exist. Declared slugs are selected from that vocabulary; new slugs are not invented mid-ingest.

Empty `products: []` on a food or personal-care paper is a defect. A paper that measures heavy metals in any food product, personal-care product, dietary supplement, cosmetic, or any matrix that maps to a consumer-product category must declare at least one slug in `products:`. The one exception: if the natural match is a category Karen has not yet locked (no Step 0 Lock, no scaffolded row pages), the source declares `products: []` AND sets `pending_category_lock: <category-name>` in frontmatter. The routing audit picks the source up after the lock lands. Without the flag, the routing-discipline lint (`tools/audit-routing-discipline.mjs`) flags the source as a Phase 1 defect.

Broad-scope tokens are preferred over invented row-level slugs when the paper does not resolve the row split. If a paper measures "infant formula" generally without specifying powdered vs RTF vs soy vs non-soy, declare `products: [infant-formula]`, not `products: [infant-formula-powder-non-soy]`. The routing audit's `broadProductScopes` vocabulary fans broad scopes out via `route_kind: broad_formula_context`. Overspecifying frontmatter is worse than under-specifying it.

When the model writes the source page, it does not auto-create destination pages. Sources referencing an ingredient slug that doesn't exist surface as a `routing_unresolved.csv` entry; the autonomy loop's `tools/autonomy/create-missing-pages.mjs` creates ingredient stubs at frequency >= 2. Sources referencing a product slug that doesn't exist also surface in `routing_unresolved.csv` but the autonomy loop does **not** create the product stub — product pages are HMTc governance units requiring Karen's Step 0 Lock plus a scaffold-script commit. See CLAUDE.md Part 10 and `docs/order-of-operations.md` for the workflow.

## Three workflows

Three distinct workflows with different constraints.

### Phase 0 prerequisite (before any ingest into a new HMTc category)

Before ingest into a new HMTc category begins, the session verifies four things: the category's Step 0 Lock document exists, the scaffold script has created the row pages in `wiki/products/`, `wiki/products/index.md` includes a section for the category, and the master rollup page exists. If any of these are missing, the ingest defers all sources touching the category by setting `pending_category_lock: <category-name>` in source frontmatter and leaving `products: []`. The routing layer picks the source up after the lock lands. The model does not invent row-level slugs for not-yet-locked categories; doing so produces governance drift. See `docs/order-of-operations.md` Phase 0.

### Compiled-wiki rule

For this build, ingest means compiling a source into the persistent wiki system. It does not mean "the file is searchable now." The work is split across actors: **model** writes prose (source pages, narrative wiki content where appropriate); **system** scripts handle routing and structured-evidence emission; **generators** rebuild product-page tables and other compiled views; **Karen** decides scope, names new pages, and approves limit-setting work.

A source is not counted as ingested until all applicable steps below are complete:

1. [Karen] preserve the raw source and verify provenance.
2. [model] create or update the canonical source page at `wiki/sources/<cite-key>.md`, filling in frontmatter accurately (especially `products`, `ingredients`, `matrices`, `metals`, `jurisdictions`).
3. [system, future] extract deterministic evidence into `data/evidence/` with basis, species, unit, statistic-type, and row-fit metadata. Until the structured-extraction tooling exists, the model may manually transcribe a small number of key tables per Karen's request, but this is not the default.
4. [system, per CLAUDE.md Part 5b] route the source by rebuilding `data/evidence/product_source_routing_audit.csv`. The model does not write routing rows.
5. [model, on Karen's approval] create a stub page if the destination doesn't exist (a `routing_unresolved` ingredient or product). The model proposes; Karen approves; the model creates the stub with required frontmatter.
6. [generator] regenerate affected product-page evidence surfaces (marker-bounded sections written by `tools/evidence/apply-product-*.mjs` and `tools/apply-product-crosswalk-sections.mjs`). Do not edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` markers.
7. [model, then Karen] update `index.md` and `log.md` (until auto-emitted), run `npm run prebuild` and `npm run check`, commit.

If automation cannot place evidence cleanly, do not silently drop the source. The routing audit emits `routing_unresolved.csv` and `routing_malformed.csv` when source frontmatter does not connect or is malformed; the structured-evidence reingest queue flags value-level extraction work. Missing placements stay visible and recoverable.

### Single-paper ingest (Karen drops one file and says "ingest this")

When Karen drops a file into `raw/` and says "ingest this", the model's deliverable is the source page plus a list of any new pages the routing layer flags as unresolved. Routing fan-out, ingredient `contamination_profile` updates, and product-page table regeneration are downstream system passes, not part of the ingest itself.

1. [model] Read the file. For PDFs, actually extract and read text. For Marker-converted markdown, read the markdown. For images or figures, view them.
2. [model] Tell Karen the TL;DR first, three to five sentences, before writing anything. Wait for her reaction so she can redirect.
3. [model] Create the source page using the template in [[docs/page-templates]]. Frontmatter accuracy is load-bearing because it feeds the routing layer; fill `products`, `ingredients`, `matrices`, `metals`, `jurisdictions` at the level of specificity the source actually states.
4. [system] Rebuild the routing audit by running `npm run evidence:source-routes` (or letting the watcher pick up the new source page). The audit names the affected product, ingredient, metal, and regulation pages.
5. [model, on Karen's approval] If the routing audit flags a `routing_unresolved` entry, surface the proposal to Karen. She approves; you create the stub. Do not silently create new pages.
6. [generator] Run `npm run prebuild` (or `npm run crosswalk:apply`) so affected product-page generators regenerate their marker-bounded sections.
7. [model, where Part 9 applies] If the source contributes to an ingredient's `contamination_profile`, advance `status` from `pending` to `in_progress` or `populated` for analytes the source addresses and populate `confidence`, `n_studies`, `last_reviewed`. Apply the coverage rule: any remaining `pending` sub-blocks on the same page advance to `populated` with `n_studies: 0`. Update the body table. Where a (metal, ingredient) combination already has loaded synthesis, run Part 9 incremental-update rules.
8. [model, until auto-emit] Append a one-line entry to `log.md` and update `index.md` if a new page was created.
9. [model] Commit to git with a message that mirrors the log entry. Report back with a summary.

Bias toward surfacing surprises. If a new source contradicts the wiki's current synthesis, say so loudly. The synthesis pass per CLAUDE.md Part 9 is where contradictions get resolved into updated values; the ingest itself just notes the contradiction.

### Bulk ingest (23,000-paper corpus)

When ingesting the full Marker-converted corpus (or any batch over ~20 papers), the single-paper rules do not scale.

1. Verify or generate the batch manifest. The triage manifest is authoritative; Claude does not re-derive it. The manifest was built on 2026-05-12 (commit `fa96392`) and lives at `raw/manifest/triage-manifest.csv` with 23,260 rows. Actual tier counts: P1 (HMT&C Path A candidates) = 54, P2 (LOQ source candidates) = 488, P3 (agency-affiliated) = 18, P4 (post-2020 peer-reviewed with metal content) = 6,571, P5 (everything else) = 16,129. The P1 pre-filter is a text-mining heuristic scanning the first 4,000 chars; many true Path A papers report values in tables deeper in the document and are classified P4 by the pre-filter. Bulk ingest reading full content will upgrade them implicitly. Treat the tier label as a rough sort key, not a final gate.
2. Process in priority order (see below).
3. Process in batches of 200 papers. Within a batch, do not pause for human review; process each paper end-to-end without waiting. Routing fan-out is handled by the routing layer after the batch completes, not per-paper.
4. Commit after each batch of 200, not per-paper. A single commit per batch: `ingest batch 03 (papers 401-600): 47 source pages added`.
5. At the end of each batch, produce a batch report at `wiki/batch-reports/batch-NN.md` containing:
   - Number of papers ingested, number skipped (with reasons)
   - New source pages created (list of cite-keys)
   - New metals, ingredients, or products encountered not previously in the wiki (proposals for new pages, not creations)
   - Any papers that failed to ingest and why
   - Any papers whose manifest-provided metadata disagreed substantially with actual content
6. Karen reads batch reports at her own pace. Karen's Lab runs linting across batches.
7. Do not pause for per-paper TL;DR approval during bulk ingest. The batch report is the review artifact.

**The model's only output during bulk ingest is source pages.** Bulk ingest sessions do not edit product-category page tables, do not edit `data/evidence/product_source_routing_audit.csv`, do not edit `data/evidence/values.jsonl`, and do not advance `contamination_profile` blocks on ingredient pages. Those layers are downstream artifacts. If a bulk session finds itself wanting to update a product page or routing audit by hand, that is a signal to stop and surface the misunderstanding to Karen.

Frontmatter accuracy on source pages is load-bearing because it feeds the routing layer. A source that does not split soy vs non-soy formula gets `matrices: [infant-formula]`, not `matrices: [infant-formula-powder-non-soy]`. Overspecifying to "pre-decide" routing is worse than leaving the routing layer to handle fan-out.

### Query workflow (Karen asks a question)

1. Read `index.md` first to locate relevant pages.
2. Read those pages. If needed, drill into `sources/` for primary evidence.
3. Answer with citations to wiki pages (which link onward to sources).
4. File the answer as a page by default under `wiki/queries/<YYYY-MM-DD>-<slug>.md` with frontmatter linking to drawn-from pages. The exception: throwaway lookups that are obviously one-shot (e.g., "what's the cite key for the Abt 2018 paper?") — don't file those.
5. Append a short query entry to `log.md` and commit.

Output format can vary by question: markdown page, comparison table, chart (matplotlib), slide deck (Marp), decision tree. Pick whichever format best serves the question.

## Priority ordering for bulk ingest

The 23,000-paper corpus is too large to ingest without prioritization. The triage manifest assigns priority signals to every paper. Claude ingests in this order.

**Priority 1 — HMT&C Path A candidates.** Papers flagged in the manifest as HMT&C Path A source candidates. Directly relevant to certification threshold setting: report concentration values for specific metals in specific food matrices, adequate sample size, credible methods. Target: complete Priority 1 before beginning Priority 2.

**Priority 2 — LOQ source candidates.** Papers flagged as Limit of Quantification source candidates. Ground the testing methodology discussion.

**Priority 3 — Agency and regulatory sources.** Papers from or citing FDA, EFSA, WHO, EPA, Codex, or national agencies. Karen has flagged supplementing agency coverage as a future task.

**Priority 4 — High-evidence peer-reviewed papers.** A-tier evidence indicators (peer-reviewed, 2020+, reputable publisher, CC-licensed). Majority of the remaining corpus.

**Priority 5 — Everything else.** Preprints, non-English where translation is imperfect, older papers that may be superseded, papers flagged with retraction language for individual review.

Within each priority tier, sub-order by publication year descending (2025 first, working backward).

## Images and figures

Some sources (especially agency reports and COAs) have critical information in figures and tables. When ingesting:

- Read the text first.
- Then explicitly view the figures and tables that matter. For Marker-converted input, figures are extracted as separate image files in the source's `raw/markdown/FM_XXXXX/` folder.
- If a figure contains data we need structured (a concentration distribution), transcribe it into a markdown table on the source page.
- Store extracted images in `raw/assets/<cite-key>/` if the source does not already have them attached.

## Kickoff procedure

When Karen drops the first batch of Marker-converted markdown:

1. Propose a manifest summary: total papers, breakdown by priority tier, any unusual flags from the triage data.
2. Propose an initial top-level skeleton — which metal pages, ingredient pages, regulation pages, and testing pages to create as stubs before ingesting, so ingests have somewhere to attach. Wait for Karen's approval.
3. Create `index.md`, `log.md`, `overview.md`, and `synthesis.md` as stubs.
4. Initialize git if not already initialized. Make the first commit with CLAUDE.md and the stub files.
5. Begin ingesting in priority order, processing in batches of 200. Produce batch reports after each batch. Commit after each batch.
6. Karen reads batch reports and runs Karen's Lab lint checks at her own pace. Escalations from batch reports get handled before the next batch begins if they affect downstream ingests; otherwise queue for end-of-corpus review.
