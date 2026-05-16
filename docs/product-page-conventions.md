# Product page conventions

Authoritative reference for what every page under `wiki/products/` must look like. Read this before building or editing any product-category page. The rules here flow from CLAUDE.md Part 6 (page templates), CLAUDE.md Part 2 (wiki/HMT&C firewall), CLAUDE.md Part 15 (writing style), OPERATING.md Part 2 (stakeholder model), and OPERATING.md Part 6 (quality bar).

If this document and CLAUDE.md ever contradict each other, CLAUDE.md wins; propose an update to this file and to CLAUDE.md together.

## 1. Build every new page from the scaffolder

Do not hand-write a new product page. Do not copy a sibling page as a template — siblings may carry legacy convention violations that the scaffolder no longer emits.

```bash
npm run scaffold:product-page -- \
  --slug <kebab-case-slug> \
  --title "Public-facing Title" \
  --category-label "Public category name" \
  --age-range "0-5" \
  --vulnerable-population infants-0-12mo \
  --primary-metals "Pb,Cd,iAs,tAs,tHg,Ni,Al,Cr-VI,Sn" \
  --partner-slug <sibling-row-slug> \
  --partner-role contamination_platform
```

The scaffolder refuses to overwrite an existing page. To clean up an existing page, run `node tools/fix-product-content-quality.mjs` and then hand-edit anything mechanical fixers cannot resolve.

## 2. The 10 mandatory H2 sections (canonical order)

Every non-stub page carries these sections, in this order, with these exact heading names. The audit at `tools/audit-product-mandatory-sections.mjs` enforces the structural check; the audit at `tools/audit-product-content-quality.mjs` enforces the content-quality rules below.

1. `## Who this page is for` — stakeholder-named entry points (HTML block, see scaffold).
2. `## Methodology` — speciation, basis, non-detect, source-pooling, row-fit, evidence-tier, confidence, and standards-program-math-elsewhere rules. Downstream sections anchor to this section, not restate it.
3. `## Literature Evidence Summary` — generator-managed inside the `hmi-hmtc-evidence-summary` markers. Per-analyte literature-native summary: analyte, subcategory designation in plain language, reported concentration range, detection rate where supported, applicable regulatory cap, source count, confidence rating, basis note. No percentile arithmetic, no CSV paths, no internal codenames.
4. `## Source Evidence Inventory` — hand-curated table of what each source reports at the sample level: metal, evidence scope, n, statistic type, reported values, max or p100 if directly reported, row-fit, evidence note, citation. Source-reported percentile statistics belong here.
5. `## Broad Product Context: Author-Scope Index` — generator-managed inside the `hmi-broad-context-sources` markers. Catalogues sources whose author-stated scope is broader than this row.
6. `## Federal/Regulatory Limits vs Field Findings` — generator-managed inside the `hmi-product-crosswalk` markers. Compares regulatory cap to cited field-evidence on a like-for-like basis.
7. `## Levers to reduce contamination` — practical interventions, ordered by impact magnitude. Six lever categories: sourcing, agronomic, processing, formulation, testing-and-QC, packaging-and-storage. Each lever cites a source for the magnitude claim. **Load-bearing**: this is the brand-legal-actionable surface of the page.
8. `## How standards math uses this page` — explanation that the row-standard percentile is an aggregate that lives on the workbench, not a decoration on any individual source row.
9. `## Historical recalls and enforcement` — public-record regulatory events, framed as events, not as brand rankings (CLAUDE.md Part 12).
10. `## Sources` — generator-managed inside the `hmi-source-legend` markers. Auto-generated from source-page frontmatter.

## 3. Hard-rule violations (audit fails the build)

These patterns are detected by `node tools/audit-product-content-quality.mjs` and block `npm run prebuild`.

### 3a. Internal codenames

Strings that surface internal pipeline vocabulary on a public, brand-facing page:

- `HMTc Category N row N`, `Category N row N`, `HMTc row N`, `Cat N row N`
- `Category N Evidence Fitness pilot`, `Evidence Fitness pilot`
- `Path A`, `Path B`, `CC eligibility`
- `clean_p97_pooled`, `dirty_p45_pooled`, `n_a_tier`
- `Step 0`, `Step 0 lock`, `Step Zero Protocol`
- `BLOCKED:` status flags
- `Cat 2`, `Cat 5` (write out as "the children's personal care category", "the beverages category", or whatever the public name is)

The page's `# H1` title and `category_label` frontmatter field carry the public name. Refer to that name in prose; do not re-introduce the internal taxonomy.

### 3b. Repo paths in body prose

Anything matching `` `data/evidence/...` ``, `` `data/workbench/...` ``, or `data/evidence/<file>.csv` mentioned in body prose is a leak. Wikilinks like `[[products/...]]` and `[[sources/...]]` are fine — those are how the wiki cross-references itself. The leak pattern is backticked filesystem paths and the verbal equivalent ("see the file at data/workbench/...").

When you need to refer to where the certification arithmetic lives, write "the staff Standards Workbench" (no path). When you need to refer to structured evidence storage, write "the structured evidence layer".

### 3c. Wiki-computed percentile arithmetic

Percentile values the wiki computes itself — pooled, fitted, basis-converted, or aggregated across sources — do not appear on public pages. Those live on the staff Standards Workbench.

What is allowed:
- A percentile value the cited source itself reports, inside an evidence-inventory row that cites that source. Example: "FDA 2011 single-strength apple juice | N=94; lower-bound p50 4.9 ppb; p90 7.7 ppb; p95 8.2 ppb" — these are FDA's own published statistics being quoted.
- The `## How standards math uses this page` boilerplate that mentions p90/p95 by name only to disclaim that the wiki does not compute them.

What is not allowed:
- "p10/p90/p100 distributions remain incomplete" — strip "p10/p90/p100" and write "distributions remain incomplete" or "full percentile coverage is incomplete."
- "iAs cell publishable as literature evidence Part 19 dirty p30 = 3.0 ppb" — this is workbench arithmetic surfacing as a wiki claim. Strip.
- "should not be pooled into formula p90 or p100 calculations" — write "should not be pooled into formula distribution aggregates."

### 3d. Brand names

CLAUDE.md Part 12 brand firewall. No brand names in body. Recalls and enforcement actions are public record and can be cited as events on the regulatory crosswalk; in those cases, frame as the regulatory event (e.g., "FDA Class II recall, 2019, infant rice cereal") rather than as the brand. If unsure, do not write the brand name.

### 3e. Duplicate H2 headings

`grep -c '^## '` on a file should produce one entry per canonical section. The autofill at `tools/autonomy/mandatory-sections.mjs` had a bug where it appended duplicate `## Historical recalls and enforcement` sections when the canonical heading appeared in older slash-separated form (`## Historical Recalls/Enforcement`). That bug is fixed, but if a similar issue ever appears, the duplicate-H2 check catches it.

### 3f. Frontmatter required fields

Every page under `wiki/products/` must carry: `type`, `audience`, `updated`, `sources`. Pages with `type: product-category` (per-row pages, not master/hub/crosswalk pages) additionally require `category`.

## 4. Soft-rule warnings (audit reports, build continues)

These patterns surface for review but do not block the build:

- More than 3 `*[awaiting synthesis]*` placeholders on a single page. The programmatic populator at `tools/autonomy/populate-source-legends.mjs` fills these from source-page frontmatter. If a page exceeds the budget, either the populator could not derive descriptions from the cited sources' frontmatter (fix: enrich the source-page frontmatter) or a deeper synthesis pass is needed.
- All-data-gap `## Literature Evidence Summary` on a page where the routing audit shows ≥3 contributing sources. This signals upstream structured-evidence extraction has not happened for the matrix — the source pages exist, but their per-metal occurrence values haven't been transcribed into the `category*_*_summary.csv` files that the generator consumes. The fix is per CLAUDE.md Part 4: AI adjudication, the model decides row-fit / basis / species / statistic-type / censoring, writes the structured record, the generator re-runs, the page lights up. The model does not queue Karen for approval; it acts and writes an audit log to `data/evidence/autonomy/`. (Note: the soft-rule detector for this case is queued to be added; see system improvement #1 in the 2026-05-16 cleanup commit message.)

## 5. Audience tags on every H2

Every section H2 below the page title carries an HTML comment naming the audiences that section serves:

```markdown
## Methodology
<!-- audience: regulator, educator, consumer, app, legal -->
```

The audiences are: `regulator`, `educator`, `consumer`, `app`, `legal`, `standards-development`, `retailer`, `brand`. The full set from CLAUDE.md Part 7 is `[regulator, educator, consumer, app]`; OPERATING.md Part 2 adds `legal`, `retailer`, `brand` for the brand-legal-priority audience hierarchy.

Pages where some sections serve different audiences (the consumer-language section serves consumers; the methodology section serves regulators and educators) use these tags so a future stakeholder-specific rendering surface can filter the page appropriately.

## 6. Writing style (CLAUDE.md Part 15)

- Prose paragraphs for narrative sections (overview, mechanism, implications, synthesis). Bullets only for genuinely enumerative content (regulatory values across jurisdictions, sampling steps, parallel ingredient lists).
- No em dashes in new prose. Em dashes inside cited source titles or direct quotes are fine.
- No inline bold for emphasis. Bold is reserved for headings and explicit definition labels.
- Structured data in YAML frontmatter or two-column tables; multi-column tables only where genuinely scannable (the Lit Evidence Summary and Source Evidence Inventory are sanctioned exceptions).

## 7. Stub pages

A page is a stub when `sources: 0` in frontmatter. Stubs are exempt from the content-quality lint's hard rules but the rules apply the moment a source routes to the page (which advances `sources: 0` to a positive count via the routing audit and the source-legend generator). Therefore, even stubs should be scaffolded with the conventions in place — that way the moment they cross out of stub state they pass lint without rework.

## 8. The wiki/HMT&C firewall (CLAUDE.md Part 2)

The single most important rule. The wiki reports what the literature supports; HMT&C certification thresholds can be tighter, looser, or aligned for reasons that have nothing to do with what the literature strictly demands. The gap is the point of the certification program; it is named honestly on the workbench, not hidden by softening the wiki claim or by strengthening it to make the threshold look more evidence-based than it is.

Practical implications for product-page content:

- "HMTc certified at X ppb" — do not write this on a public page. The wiki does not publish or justify certification thresholds.
- "Brand legal teams" appears throughout the stakeholder section because they are the priority audience; they read the wiki for the literature, not for the certification.
- The `## Federal/Regulatory Limits vs Field Findings` section compares regulatory limits to cited literature evidence. It does not compare regulatory limits to HMT&C thresholds — that lives on the workbench.
- The `## How standards math uses this page` section is where the page acknowledges that certification arithmetic exists and explicitly says it lives elsewhere.

## 9. What to do when adding a new category

When a new HMT&C product category is being built (e.g., Category 3 Grains/Cereals/Rice Products):

1. Run `npm run scaffold:product-page` once per row. Use the public-facing category label and row title from the program's locked-taxonomy document, not the internal codenames.
2. Route at least one source to each new page by editing the source page's `products:` frontmatter array.
3. Run `npm run prebuild`. The routing audit, source legend, and content-quality audit all run; build fails if any non-stub page introduces a hard-rule violation.
4. The scaffolded page will be a stub until structured evidence is extracted. That extraction is per CLAUDE.md Part 4 (AI adjudication default).
5. After the first round of extraction, run `node tools/evidence/apply-product-hmtc-evidence-summaries.mjs` so the generator-managed sections pick up the new occurrence-summary CSV rows.

## 10. Where this rule set lives

- This document: `docs/product-page-conventions.md`. Read at session start when working on any product page.
- Hard-rule audit: `tools/audit-product-content-quality.mjs`. Runs in `npm run prebuild` (which Vercel triggers via `npm run build`'s pre-script). Exits non-zero on any non-stub hard violation.
- One-shot fixer: `tools/fix-product-content-quality.mjs`. Mechanical replacements for internal codenames, repo paths, tool/script paths, raw/manual-fetch paths, and dangling percentile tokens. Idempotent. Skips retired pages (`retired: true` in frontmatter) because retirement-page language references policy-doc codenames that need hand editing.
- Scaffold: `tools/scaffold-product-page.mjs`. The only correct way to create a new product page. Produces lint-clean output.
- Audit reports: `data/evidence/product-content-quality-audit.csv` and `.md`. Generated on every prebuild run. Read before touching a page.

## 11. Audit infrastructure scope

The convention rules in this document apply to product pages. Sibling audits enforce the same hard rules on the rest of the wiki:

- **Ingredient pages** ([tools/audit-ingredient-content-quality.mjs](tools/audit-ingredient-content-quality.mjs)) — same internal-codename + repo-path rules, plus ingredient-specific checks: the `contamination_profile` block must declare all 10 HMTc analytes (Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U), and the page cannot have asymmetric coverage (some sub-blocks at `populated`/`in_progress` while others remain `pending` — the Part 6 coverage rule).
- **Metal pages** ([tools/audit-metal-content-quality.mjs](tools/audit-metal-content-quality.mjs)) — same shared rules with metal-page-specific frontmatter requirements (no `category` field; `type: metal` instead).
- **Source pages** ([tools/audit-source-content-quality.mjs](tools/audit-source-content-quality.mjs)) — same shared rules plus source-specific validations: `cite_key` must match the filename; `evidence_tier` must be A, B, or C; `source_type` must be in the recognized vocabulary; `_TEMPLATE.md` is exempt.

The shared rule patterns live in [tools/audits/shared/patterns.mjs](tools/audits/shared/patterns.mjs). When a rule changes, change it there once. All four audits import from this module.

**The fixer** ([tools/fix-content-quality.mjs](tools/fix-content-quality.mjs)) accepts a `--dir` argument and runs against any tree. The npm script `fix:content-quality` runs it across all four trees.

## 12. The semantic firewall (citation-anchor lint)

[tools/audit-product-provenance.mjs](tools/audit-product-provenance.mjs) is a soft-warning audit that flags concentration values with units (ppb, ug/kg, mg/kg, ng/g, ug/L, mg/L, ppm, µg/kg, µg/L, ng/L) when no `[[sources/...]]` wikilink appears within ~1500 characters lookback or within the same section. This catches the semantic class of leak that the lexical detectors miss — claims that look like certification thresholds rather than literature evidence, because they don't anchor to a published source.

Currently scoped to products only. Ingredients and metals will get the same coverage in a follow-up.

Exemptions:
- Generator-managed marker blocks (those values come from structured-evidence CSVs that have their own provenance)
- Methodology section and "How standards math uses this page" disclaimer
- Lead Benchmark Context section (table of regulatory reference points, not literature claims)
- Table rows that contain `[[sources/...]]` anywhere on the row

The audit completes without blocking the build; it produces `data/evidence/product-provenance-audit.csv` for review.

## 13. The evidence-extraction queue

[tools/orchestrator/extract-occurrence-values-queue.mjs](tools/orchestrator/extract-occurrence-values-queue.mjs) is the work-item generator for the upstream extraction problem. It reads the standards gap report and the routing audit, finds (product_slug, metal_species) cells where `loaded_source_count = 0` but the routing audit shows at least one direct-evidence source, and writes a priority-sorted queue to `data/evidence/extraction_queue.csv`.

Each queue item is a focused task: a session opens the named source, reads its tables, applies row-fit + basis + species + statistic-type + censoring judgment per CLAUDE.md Part 4 (AI adjudication default), and writes a structured row to the appropriate `category*_*_summary.csv`. The generator then regenerates the affected page's Literature Evidence Summary.

Priority = number of empty cells the same source could help fill. A source routed to many empty cells across pages ranks higher.

Per the no-approval-gates principle: this is a work queue, not an approval queue. The session that consumes it makes the row-fit / basis / species decisions itself, writes the records, runs the generators, and appends an audit log to `data/evidence/autonomy/extraction-events.jsonl`. Karen reads the log when she wants to second-guess.

The queue regenerates on every prebuild. Items processed since the last run drop off automatically (the gap report shows non-zero loaded_source_count for them).

## 14. Known limitations and false-positive notes

These are documented so future sessions don't waste cycles re-discovering them:

- **Source-cited evidence rows the per-line percentile detector misses.** When a row reports source-quantified percentiles (FDA, TDS, etc.) but the `[[sources/...]]` wikilink is in a different column or the row wraps across lines, the per-line `isInsideEvidenceRow` heuristic flags the row as a wiki-computed percentile. Currently 3 known false positives, all in `fruit-juices-apple-containing.md`, `fruit-juices-non-apple.md`, and `fruit-purees.md`. Acceptable as soft warnings; do not move source-reported percentile data off these pages to silence the audit.
- **Section-name-coupled exemption.** The detector exempts percentile mentions under `## Methodology` and `## How standards math uses this page`. Renaming or moving those sections would re-trigger flags on the disclaimer text inside them. If you rename the section, update the exemption in `tools/audit-product-content-quality.mjs` (`isStandardsMathDisclaimer` / `isMethodologyParagraph`).
- **Marker-block contents are now scanned.** Earlier versions of the audit skipped marker blocks on the rationale that "the generator owns this region." That assumption was wrong: scaffolders write the placeholder text that lives there until the generator regenerates, and the rendered page shows that placeholder to readers. The audit and the fixer now both scan marker-block contents. **If you update a generator template, make sure its emitted output passes the audit too** — otherwise the next generator run will reintroduce the leak.
- **The fixer's `Cat N` → public-name replacements can leave grammar artifacts.** Common cases (double-"the", "from X from Y") are handled by the post-replacement cleanup rules. Rare cases may need hand-edits — search for `the the`, `a the`, or sentence fragments after the fixer runs.
- **Retired pages** (frontmatter `retired: true`) are not auto-fixed. They legitimately reference policy-doc codenames in retirement-banner language. Hand-edit them when you change retirement framing.
- **`category_label` is not currently audit-required.** The audit checks `category:` but not `category_label:`. The scaffolder emits both; future hand-built pages might omit `category_label` and pass lint. Add it to the required-fields list if this becomes a problem.

### Audit infrastructure limitations (introduced in the 2026-05-16 audit-extension pass)

- **Ingredient `contamination_profile` parser assumes two-space YAML indentation.** Pages using tabs or non-standard indentation will fail parsing and produce false-positive "contamination_profile_incomplete" reports. Today the corpus is uniform; future deviations would need a real YAML parser.
- **Provenance audit's lookback window is 1500 chars / nearest H2 heading.** Long sections where a value sits far from its citation may produce false positives. Currently 43 hits across 7 pages — manageable as a review queue.
- **Provenance audit covers products only.** Ingredient and metal pages also have concentration claims; extending the lint to those trees is queued work.
- **Concentration regex doesn't catch "micrograms per kilogram" (written-out), scientific notation, or `g/kg` / `% w/w`.** False negatives. Add unit patterns when the corpus needs them.
- **Extraction queue priority is weak.** It counts how many empty cells a source could fill, but doesn't weight by source evidence tier (A vs B vs C), number of analytes the source covers per cell, or page brand-legal priority. First-pass heuristic; refine when usage patterns emerge.
- **Source audit performance.** Scanning ~894 source pages adds ~5-10 seconds to prebuild. Acceptable; if it becomes a budget problem, cache by file mtime.
- **No combined audit-summary dashboard.** Karen reads 5 separate CSVs (4 content-quality + 1 provenance). A roll-up view at `data/evidence/audit-dashboard.md` would help; queued.
- **The fixer's tree-shared rules don't always handle tree-specific phrasings.** Some product-page-only phrases ("Brand legal teams evaluating HMT&C certification for the X row") leaked into the fixer earlier; ingredient and metal trees have their own phrasings that may need their own rules over time.
