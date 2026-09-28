# Ingest workflows — Heavy Metal Index Wiki

This document is the operational reference for ingest. The rule-grade summary lives in CLAUDE.md; this file is the per-workflow detail.

## Source-file handling (this project's specific input)

The source corpus includes primary datasets, agency instruments and reports, PDFs, and Marker-converted Markdown. Legacy Marker papers sit under `raw/markdown/` by filesystem handle (`FM_XXXXXXX`), with extracted images and metadata where available. Current primary-library and regulatory-register records take precedence over stale inventory counts; preserve immutable originals and record their identity.

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

These are draft values. Verify each field against the source and record material corrections in an audit. Resolve routine tagging disagreements from the primary content; reserve human review for missing evidence, low-confidence extraction, policy conflicts, and consequential governance decisions.

### Existing-pages-aware ingest

Source-page frontmatter is the routing layer's input. Check the existing product and ingredient taxonomy and aliases before declaring routes. Reuse the matching page or broad-scope token; if a routeable finding lacks a destination, create a valid provisional stub through the maintained scaffold path before publishing the finding. Do not invent a full category or claim a Step 0 Lock.

Empty `products: []` on product-occurrence evidence requires an explicit disposition. Where the matrix maps to a known product row or broad-scope token, declare that route. If the certification category is not locked, retain the applicable provisional evidence destination and mark the certification mapping `pending_category_lock`; if no valid product mapping is yet possible, keep the empty field with that explicit gap rather than fabricate row fit. Ingredient and other usable routes still proceed. The routing-discipline audit distinguishes unresolved scope from a silently omitted product connection.

Broad-scope tokens are preferred over invented row-level slugs when the paper does not resolve the row split. If a paper measures "infant formula" generally without specifying powdered vs RTF vs soy vs non-soy, declare `products: [infant-formula]`, not `products: [infant-formula-powder-non-soy]`. The routing audit's `broadProductScopes` vocabulary fans broad scopes out via `route_kind: broad_formula_context`. Overspecifying frontmatter is worse than under-specifying it.

Missing destinations remain in `routing_unresolved.csv` until resolved. Create ingredient stubs and provisional product destinations as needed to preserve routeable evidence; do not wait for a second paper or routine human approval to give a finding a home. Full-page promotion and certification taxonomy remain governed by CLAUDE.md Part 10 and the Step 0 Lock. A stub is an evidence destination, not a new certification standard.

## Three workflows

Three distinct workflows with different constraints.

### Phase 0 prerequisite (before any ingest into a new HMTc category)

Before asserting that a source belongs to a locked HMTc row, verify the Step 0 Lock and its scaffolded taxonomy. A missing lock does not prevent reading, extraction, or provisional evidence routing. Keep the provisional status explicit and use a broad-scope token or provisional destination where appropriate. Record `pending_category_lock` if the certification mapping is unresolved; never present that provisional mapping as a completed governance decision.

### Compiled-wiki rule

For this build, ingest means compiling evidence into the persistent wiki. The model reads, extracts or implements deterministic extraction, adjudicates evidence fitness and row fit, and writes the source narrative. System scripts own routing artifacts; generators own compiled page sections. Routine extraction and routing are completed by the ingest workflow. Human review is reserved for exceptions and governance decisions.

A source is not counted as ingested until all applicable steps are complete:

1. Preserve the original source, verify identity and provenance, and record primary-artifact hash, access, rights, and evidence tier.
2. Create or update the canonical source page using [[docs/page-templates]], with explicit Evidence Fitness and accurate routing metadata.
3. Capture routeable values and claims in `data/evidence/`, with source location, basis, species, units, statistic type, N, censoring, sampling scope, row fit, and review state. Use existing deterministic extraction where possible; implement or transcribe a bounded extraction with verification when necessary. Extraction is a current requirement, not future work.
4. Create missing provisional destinations before findings are published; let the routing generator create the routing artifacts. Never hand-edit generator-owned routing rows.
5. Review and route every usable row or grouped finding. A multi-food dataset requires a full coverage reconciliation, not one source-page route. Persist exclusions and unresolved placements in routing audits or gap records.
6. Regenerate affected public evidence sections and downloadable datasets. Keep sample/summary values and censoring labels consistent across the evidence register, page summaries, and exports. Do not edit inside generated markers.
7. Trigger the appropriate separate synthesis pass under CLAUDE.md Part 9; do not pretend an existing synthesis was updated merely because the source was routed. If synthesis must remain pending, preserve reviewed evidence and record the precise synthesis gap.
8. Record the batch in `wiki/log.md` and the operational detail in `wiki/batch-reports/`. Neither is published. Link each new page from the topic page it belongs to, or from its family index. Do not append a heading, a "recently added" paragraph, a verification note, or a source list to the public homepage `wiki/index.md`, and do not put ingest bookkeeping (verification notes, routing-audit status, batch ids, commit ids) on any other published page. A source page may keep a Related evidence list of reader-facing links. Homepage generators refresh the ledger counts and the other marker blocks; they do not accept free prose. Run the applicable source-routes, local-reingest, standards-gaps, AI-adjudication, prebuild, test, type-check, and build checks listed in AGENTS.md, and commit only the intended files by pathspec.

If evidence cannot be placed or reviewed, keep it visible in the structured audit or recovery queue and report the remaining gap. A candidate or Tier-1 source record is not a completed ingest and does not publish as reviewed evidence. Source-page-only staging is allowed only when explicitly requested and is labeled as staging.

### Single-paper ingest (Karen drops one file and says "ingest this")

Read the actual source, including the tables and figures needed to verify its findings. Share a concise progress update and continue the authorized ingest; do not wait for routine summary or stub approval. Complete the compiled-wiki gate above, including structured extraction, provisional destinations, routing, affected generators, checks, and scoped commit.

Report source pages touched, evidence rows generated, product or ingredient pages updated, and unresolved gaps. A source page plus a list of hoped-for downstream work is not a completed ingest. When a finding conflicts with the current synthesis, record the contradiction and run the applicable synthesis workflow or preserve an explicit unresolved review item; never silently overwrite or omit contrary evidence.

### Bulk ingest (23,000-paper corpus)

When ingesting the full Marker-converted corpus (or any batch over ~20 papers), the single-paper rules do not scale.

1. Verify or generate the batch manifest. The triage manifest is authoritative; Claude does not re-derive it. The manifest was built on 2026-05-12 (commit `fa96392`) and lives at `raw/manifest/triage-manifest.csv` with 23,260 rows. Actual tier counts: P1 (HMT&C Path A candidates) = 54, P2 (LOQ source candidates) = 488, P3 (agency-affiliated) = 18, P4 (post-2020 peer-reviewed with metal content) = 6,571, P5 (everything else) = 16,129. The P1 pre-filter is a text-mining heuristic scanning the first 4,000 chars; many true Path A papers report values in tables deeper in the document and are classified P4 by the pre-filter. Bulk ingest reading full content will upgrade them implicitly. Treat the tier label as a rough sort key, not a final gate.
2. Process in priority order (see below).
3. Process in batches of 200 papers. Within a batch, do not pause for human review; process each paper end-to-end without waiting. Routing fan-out is handled by the routing layer after the batch completes, not per-paper.
4. Commit after each batch of 200, not per-paper. A single commit per batch: `ingest batch 03 (papers 401-600): 47 source pages added`.
5. At the end of each batch, produce a batch report at `wiki/batch-reports/batch-NN.md` containing:
   - Number of papers ingested, number skipped (with reasons)
   - New source pages created (list of cite-keys)
   - Provisional destinations created, unresolved routes, and any full-page or taxonomy decisions requiring governance review
   - Structured evidence rows, reviewed versus pending counts, exports regenerated, and checks completed
   - Any papers that failed to ingest and why
   - Any papers whose manifest-provided metadata disagreed substantially with actual content
6. Run the applicable checks and generators before declaring the batch complete. Karen can read the report at her own pace; routine validation does not depend on that review.
7. Do not pause for per-paper TL;DR approval during bulk ingest. The batch report is the review artifact.

Bulk ingest has the same completion contract as a single source, applied at batch scope. Source pages, structured evidence, route coverage, regenerated outputs, and explicit gaps are required. Scripts own the routing audit and generated product sections; the session runs or repairs those scripts rather than hand-editing their output. Source facts are not stranded until an unspecified later pass. Ingredient synthesis remains a distinct triggered workflow under CLAUDE.md Part 9, with its state and unresolved work recorded accurately.

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

**Priority 1 — legacy Path A occurrence candidates.** The historical triage label identifies matrix-specific concentration data with usable methods and sampling information. Preserve that priority signal for occurrence extraction and evidence-gap repair; it does not authorize deriving live limits from occurrence. Current regulatory verification and missing-primary-source needs follow the live method lock.

**Priority 2 — LOQ source candidates.** Papers flagged as Limit of Quantification source candidates. Ground the testing methodology discussion.

**Priority 3 — Agency and regulatory sources.** Papers from or citing FDA, EFSA, WHO, EPA, Codex, or national agencies. Karen has flagged supplementing agency coverage as a future task.

**Priority 4 — High-evidence peer-reviewed papers.** A-tier evidence indicators (peer-reviewed, 2020+, reputable publisher, CC-licensed). Majority of the remaining corpus.

**Priority 5 — Everything else.** Preprints, non-English where translation is imperfect, older papers that may be superseded, papers flagged with retraction language for individual review.

Within each priority tier, sub-order by publication year descending (2025 first, working backward).

## Images and figures

Some sources (especially agency reports and COAs) have critical information in figures and tables. When ingesting:

- Read the text first.
- Then explicitly view the figures and tables that matter. For Marker-converted input, figures are extracted as separate image files in the source's `raw/markdown/FM_XXXXX/` folder.
- If a figure contains routeable values, capture them in structured evidence with the figure identifier and extraction limitations; summarize them on the source page only after review.
- Store extracted images in `raw/assets/<cite-key>/` if the source does not already have them attached.

## Kickoff procedure

When Karen drops the first batch of Marker-converted markdown:

1. Propose a manifest summary: total papers, breakdown by priority tier, any unusual flags from the triage data.
2. Reuse the existing skeleton and create valid provisional evidence destinations where needed before publishing findings. Escalate full taxonomy or governance changes, not routine evidence stubs.
3. Create `index.md`, `log.md`, `overview.md`, and `synthesis.md` as stubs.
4. Initialize git if not already initialized. Make the first commit with CLAUDE.md and the stub files.
5. Begin ingesting in priority order, processing in batches of 200. Produce batch reports after each batch. Commit after each batch.
6. Run checks before completion, publish the batch report, and preserve unresolved exceptions. Resolve routine issues autonomously; governance decisions remain explicit and do not block independent extraction or routing work.
