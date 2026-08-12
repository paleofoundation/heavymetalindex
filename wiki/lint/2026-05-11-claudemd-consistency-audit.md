---
title: CLAUDE.md consistency and build-state audit
type: lint
date: 2026-05-11
auditor: claude (cowork)
scope: CLAUDE.md (1002 lines, 27 numbered parts) + observable build state at time of audit
audience: [internal]
updated: 2026-05-11
noindex: true
---

# CLAUDE.md consistency and build-state audit, 2026-05-11

## Scope and method

Read CLAUDE.md end-to-end. Cross-checked every assertion in the operating manual against the observable state of the repo at `~/Desktop/heavy-metal-index/` (canonical source; the served copy at `/private/tmp/heavymetalindex-publish/` was not reachable from this audit's sandbox and may differ). Categorized findings as:

- **contradiction**: two parts of CLAUDE.md tell models incompatible things, or one part contradicts the architecture changes made earlier today (Part 5b, Part 8 bulk amendment, Part 18 routing lint).
- **stale**: assertion is wrong about current state of the build.
- **chore**: rule asks the model or Karen to remember something that should be enforced by a script or hook.
- **drift-risk**: rule implicitly or explicitly violates the Part 2 wiki/HMT&C firewall.
- **cross-ref**: a missing pointer between parts that would prevent a model from following the architecture correctly.
- **clarity**: voice or scoping ambiguity; who acts is not explicit.
- **broken**: a system piece is referenced by CLAUDE.md but does not actually exist or function.

Findings are listed in severity order. After the findings, Section J summarizes what is currently working in the build and what is not.

## A. Direct contradictions (block correct behavior)

**A1, contradiction, severity high. Part 8 single-paper workflow contradicts Part 5b and the Part 8 bulk amendment.** Line 590, step 5 of single-paper ingest, still says: "Update each affected page. Weave in new findings... When updating an ingredient's `contamination_profile`, advance `status` from `pending` to `in_progress` or `populated` as appropriate, and populate `confidence`, `n_studies`, and `last_reviewed` when moving to `populated`." This is the exact behavior Part 5b and the bulk amendment removed from the model's responsibilities. A model arriving at Part 8 sequentially will use the single-paper rules as the default and re-introduce the routing-and-synthesis-during-ingest pattern we just removed. Fix: rewrite the single-paper workflow so the model's only output is the source page (and the proposed list of new pages, if any), with routing and synthesis explicitly named as downstream system passes per Part 5b and Part 9.

**A2, contradiction, severity high. Part 8 "Compiled-wiki rule" still describes the model as the routing actor.** Lines 572-578 list seven steps for what counts as an ingested source. Steps 3-6 ("extract deterministic evidence... route the evidence to the correct wiki page family... regenerate any affected product-page evidence surfaces") describe model behavior, but per Part 5b the model does not route and does not regenerate product pages. Fix: tag each of the seven steps with the responsible actor in brackets ([model], [system], [generator], [Karen]) so the architecture is unambiguous on first read.

**A3, contradiction, severity high. Part 9 describes synthesis as happening during ingest.** Lines 637-639: "On first ingest of a paper that reports a concentration value... advance status from pending to in_progress... When a second paper arrives... integrate the two sources and populate the ingredient page." This is the opposite of the Part 8 bulk amendment ("Bulk ingest sessions do not... advance contamination_profile blocks on ingredient pages... value-level extraction and synthesis are handled in separate dedicated passes per Part 9"). Part 9 needs to be re-framed as its own workflow with explicit trigger conditions (e.g., "synthesis pass runs after every Nth batch report, or on Karen's explicit trigger") rather than as ingest-time behavior.

**A4, contradiction, severity medium. Part 17 log.md example for bulk ingest references work the model no longer does.** Line 818: "Pages touched: 47 ingredient pages, 12 metal pages, 3 new regulation pages." Under the new architecture, bulk ingest touches only source pages plus the structured-evidence layer. Fix: update the example to reflect actual bulk output ("47 source pages created, 280 value records appended, 162 routing rows added, 0 new pages proposed").

**A5, contradiction, severity high (drift-risk overlap). Part 19 explicitly puts p90/p30/CC-eligibility on public product pages.** Line 878: "The CC candidate summary table on each product-category page makes the clean/dirty designation explicit per row, for example 'milk-based [clean]' carrying the p90 standard and 'soy-based [dirty]' carrying the p30 standard, alongside n, n_a_tier, confidence, and CC eligibility." This is the exact drift we just agreed to remove. The wiki should report literature; HMT&C certification pages translate to thresholds. Fix: Part 19's output should be tagged for staff workbench / HMT&C certification page (heavymetalcertified.com), not for the public product-category page. The public product page receives only the literature-native view per the Part 2 firewall.

**A6, contradiction, severity high. Part 6 product-category template still includes CC candidate summary as a public page section.** Lines around 270 (per earlier read) describe the product-category template with a `CC candidate summary` section and p90 columns. Same drift as A5. Fix: rewrite the Part 6 product-category template to show the literature-native version (analyte, reported range, detection rate, regulatory cap, source count, confidence, basis note) and move the percentile-based template to a new staff template documented separately.

## B. Stale or wrong about current state

**B1, stale, severity high. Triage manifest at `raw/manifest/` does not exist.** Parts 5, 5 (pre-populated frontmatter), 8 (bulk ingest step 1), 11 (priority ordering header) all treat the manifest as authoritative and present. The directory is missing entirely. Models reading CLAUDE.md will be told to look for something that doesn't exist, then either stop (correct) or invent something to substitute (drift). Fix: add a Part 27.5 or similar that describes manifest bootstrap from `_meta.json` plus already-ingested source pages as a prerequisite, and update Parts 5/8/11 to point at the bootstrap step.

**B2, stale, severity low. Part 19 references "Phase 2 cleanup".** Line 880: "Update legacy product-page text and 'HMTc Evidence Summary' blocks during Phase 2 cleanup." Phase numbering is internal session-tracking vocabulary, not operating-manual content. Fix: remove "Phase 2" reference; describe the cleanup as a migration step with no phase label.

**B3, stale, severity medium. Part 27 (Kickoff procedure) describes what to do when starting from scratch.** The project has kicked off. There are 164 source pages, an index.md, a log.md, a synthesis.md, batch reports, lint reports, and a structured-evidence layer with 502 value records. Fix: either rename Part 27 to "New-category kickoff" (so it applies when adding a new product domain or category branch), or move it to a setup-history note in `wiki/queries/` or `docs/`.

**B4, stale, severity low. Part 12 cross-references the wrong part for the private build.** Line 728: "COAs and internal lab data belong in the private build described in Part 15, not here." Part 15 is Writing Style. The private build is Part 26. Fix: change the reference to Part 26.

**B5, stale, severity medium. Part 5 prepopulated-frontmatter section assumes manifest exists.** Lines 178-188 describe the manifest providing draft values that the model verifies. With no manifest, these draft values do not exist; the model must derive cite-key, year, DOI, etc., from the paper itself. Fix: rewrite as conditional ("when manifest is present, prefer its values; when absent, derive from the paper").

**B6, stale, severity medium. Part 11 priority counts are manifest-derived numbers.** "647 Path A candidates", "2,399 LOQ candidates", "934 agency-hit papers" all come from a manifest that doesn't exist. They're aspirational, not operational. Fix: clarify the source of the counts and add a note that priority assignment requires manifest bootstrap.

**B7, stale, severity low. Part 22 (WikiBiome federation) is years premature.** `wiki/microbiome/` has 2 pages. Federation is not load-bearing yet. Fix: tag Part 22 as "future state; do not optimize for federation until microbiome coverage is built."

**B8, stale, severity low. Part 6 ingredient template's `contamination_profile` mentions `last_full_resynthesis` per-metal-sub-block, then explicitly says this field is no longer carried.** Lines 405-407 (per earlier read): "The `last_full_resynthesis` field referenced in Part 9 is no longer carried per-metal-sub-block on ingredient pages. Resynthesis events are now tracked in the structured-evidence layer at `data/evidence/review_events.jsonl`, which is authoritative." But `data/evidence/review_events.jsonl` has 1 line. The structured tracking exists in name only. Fix: either populate review_events.jsonl as part of the synthesis pass, or move the resynthesis-tracking question back to the page until the structured layer is real.

## C. Implicit chores (should be system rules)

**C1, chore, severity medium. Part 16 makes the model maintain index.md.** "Update on every ingest (in bulk mode, once per batch). If the index exceeds 500 entries, split into `index.md` plus per-category index files." index.md can be regenerated deterministically from the file system; this is the same pattern as the routing audit. Fix: write `tools/build-index.mjs` and wire it into prebuild and the watcher; remove the manual responsibility from CLAUDE.md.

**C2, chore, severity medium. Part 17 log.md is hand-managed.** Models append to log.md during every ingest, batch, query, lint, resynthesis. This is mechanical and skippable. At least bulk-batch entries should be auto-emitted by the batch-report tool. Fix: have the batch-report writer also append the matching log.md entry; have any of the tools/evidence/build-* scripts append their own log entries on completion.

**C3, chore, severity high. Part 18 lists 12 lint checks; none of the non-routing ones are implemented in code.** Contradictions, stale claims, orphans, regulatory-value drift, silent threshold deviation, evidence-tier mismatch, provenance gaps are described as lint checks but live in `wiki/lint/<date>-*.md` files that read like Karen's hand-written audits. The build does not enforce them. Fix: scaffold `tools/lint/` with one script per check; wire to prebuild; emit JSON reports the build can fail on.

**C4, chore, severity medium. Part 9 full-resynthesis triggers require a watcher.** "Trigger full resynthesis when n_studies has doubled since last_full_resynthesis" depends on someone noticing. No one notices automatically; the model only notices when it happens to be looking at the ingredient page. Fix: scheduled task or lint check that scans contamination_profile blocks and emits a resynthesis queue.

**C5, chore, severity low. Part 24 "Maintain the synthesis" is reflective work nobody is doing.** `wiki/synthesis.md` exists; whether it's current is unknowable from the doc. Fix: schedule synthesis review at batch boundaries; have batch-report tool flag synthesis as stale if batch touched any contamination_profile block.

**C6, chore, severity medium. Part 5 dedup logging is the model's job.** "Log the skip to `log.md`..." Same as C2: should be emitted by the dedup script, not narrated by the model.

## D. Wiki/HMT&C firewall leak points (drift-risk)

**D1, drift-risk, severity high. Part 19 outputs land on wiki product pages.** Already covered as A5; restated here for the firewall lens. The threshold-setting workflow's outputs (clean/dirty designation, p90 standard, p30 standard) belong on HMT&C certification pages at heavymetalcertified.com, not on heavymetalindex.com product pages.

**D2, drift-risk, severity high. Part 6 product-category template includes CC candidate summary by design.** Already covered as A6. Template-level: the schema CLAUDE.md publishes is itself the leak point.

**D3, drift-risk, severity medium. Part 4 architecture mentions `data/evidence/` as "structured evidence register" but doesn't tag boundary with public surface.** Lines 75-79: "Candidate values, approved values, routing audits, reviewer queues, claims, schemas, and review events live here." Fine as a staff layer; the risk is that future sessions surface this content to public pages without realizing it shouldn't be there. Fix: explicit one-liner that `data/evidence/` is staff-only and never rendered on public product pages without deliberate translation.

**D4, drift-risk, severity medium. Part 5 ingest workflow lists `data/evidence/` extraction as part of "compiled wiki" definition.** Line 574: "extract deterministic evidence into `data/evidence/` with basis, species, unit, statistic-type, and row-fit metadata." If the model treats `data/evidence/` content as inherently publishable (because it's part of "the wiki" per this part), the firewall blurs. Fix: explicitly partition: `wiki/` = public surface; `data/evidence/` = staff layer that feeds generators which produce a translated public view.

## E. Missing cross-references

**E1, cross-ref, severity medium. Part 8 single-paper workflow does not point to Part 5b.** A model reading single-paper ingest in isolation will not learn that routing is the system's job. Fix: add "see Part 5b for routing" pointer near step 4 (identify affected pages).

**E2, cross-ref, severity medium. Part 8 single-paper does not point to Part 9 for synthesis.** Same issue: model assumes contamination_profile updates happen here. Fix: add "see Part 9 for when contamination_profile values get populated."

**E3, cross-ref, severity low. Part 10 (page creation) does not reference Part 5b.** Orphan prevention is also a routing-resolution issue (unresolved slugs are page-creation candidates). Fix: link Part 5b's routing_unresolved.csv to Part 10's page-creation thresholds.

**E4, cross-ref, severity low. Part 21 (app-layer workflow) references contamination_profile updates without pointing to Part 9.** Fix: cross-ref.

**E5, cross-ref, severity low. Part 5 does not point to Part 5b.** Reader needs to know the frontmatter they're filling in feeds a downstream routing layer. Fix: cross-ref.

**E6, cross-ref, severity medium. Part 19 does not point to Part 2.** A model reading Part 19 in isolation will not see the firewall warning. Given that Part 19 currently asks for HMT&C-arithmetic outputs on public pages (A5/D1), this missing link is part of why the drift happens. Fix: cross-ref Part 2 at the top of Part 19.

## F. Voice and scoping clarity

**F1, clarity, severity medium. "Compiled-wiki rule" steps mix model, system, and Karen actors silently.** Already noted in A2; reframed here as voice issue. Fix: bracket each step with the responsible actor.

**F2, clarity, severity low. Many parts use passive voice without an actor.** "The page is updated", "the audit is built", "values are populated." A model resolving the implicit subject sometimes resolves to itself when the actor is the system or generator. Fix: rewrite passive voice with explicit actor; "the generator builds the audit" rather than "the audit is built."

**F3, clarity, severity medium. Part 19 does not name who classifies clean/dirty or who selects the comparator.** Reads as if the model does it during a single session, but the classification is a per-analyte standards decision that needs human review. Fix: explicit actor ("the standards workbench staff classify clean/dirty per analyte after viewing the staff comparator output").

**F4, clarity, severity low. Part 24 "Things to proactively do" reads as model behavior but several items (suggest new sources, propose schema changes, call out weak spots) work best when the model surfaces them in a batch report or query response, not autonomously.** Fix: clarify "proactively means surface in the relevant artifact (batch report, query, lint output); not autonomous edits."

## G. Broken or missing system pieces

**G1, broken, severity high. `tools/evidence/build-routing-audit.mjs` does not exist; the actual routing audit script is `tools/audit-product-source-routing.mjs`.** Part 5b references the non-existent path. Fix: either rename the existing tool to match Part 5b, or update Part 5b's references to the actual filename.

**G2, broken, severity high. `data/evidence/routing_unresolved.csv` and `data/evidence/routing_malformed.csv` do not exist.** Part 5b and Part 18 reference them as inputs to lint. The current audit script does not emit them. Fix: extend `tools/audit-product-source-routing.mjs` to emit these two sibling logs.

**G3, broken, severity medium. No file watcher on `wiki/sources/`.** Part 5b says routing rebuilds within seconds of any source page change via `chokidar` watcher in `npm run serve`. `chokidar` is installed (in package-lock.json) but no watcher is wired up. Fix: write `tools/watch-sources.mjs` and add to the serve script.

**G4, broken, severity medium. No pre-commit hook.** `.husky/` does not exist. Part 5b says commits touching `wiki/sources/` run the routing script. Fix: install husky and write `.husky/pre-commit`.

**G5, broken, severity medium. Build does not fail on routing staleness.** Part 5b says prebuild fails on stale audit. The existing prebuild script (`tools/audit-product-source-routing.mjs`) regenerates the audit but does not fail the build on unresolved or malformed entries. Fix: add a verification step that exits non-zero on policy violations.

**G6, broken, severity medium. Most Part 18 lint checks have no implementation.** Contradictions, stale claims, regulatory-value drift, silent threshold deviation, evidence-tier mismatch, provenance gaps are described but unimplemented. The 10 audit reports in `wiki/lint/` look hand-written. Fix: scaffold `tools/lint/` with one script per check.

**G7, broken, severity high. CC Candidate Summary generator emits drift content to public pages.** `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` writes p30/p50/p90/p100 numbers, `n_a_tier`, "CC eligibility", and "Part 19 framework" / "Phase 3" codenames into the public markdown. Per A5/D1 these should be staff-only. Fix: refactor the generator to emit two artifacts: literature-native (public) and percentile-arithmetic (staff workbench only).

**G8, broken, severity high. Lab Result Comparator exposes p90/p10 to brands.** `quartz/components/BrandPreScreenTool.tsx` and `wiki/certification/lab-result-comparator.md`. Already detailed in earlier audit; restated here for completeness. Fix: rework per the previous brief.

**G9, broken, severity medium. Today's CLAUDE.md additions (Part 5b, Part 8 amendment, Part 18 routing checks) exist only in `~/Desktop/heavy-metal-index/`, not in `/private/tmp/heavymetalindex-publish/` where the dev server is served from.** Sessions running against the served repo will not see the new rules. Fix: sync desktop → served, or restart the server from desktop.

**G10, broken, severity medium. Today's product-page edits (Methodology section, Page Completeness rewrite, Sources rebuild, em dash sweep, Source Legend reorder) and TableOfContents.tsx fix are also desktop-only.** Fix: same sync as G9.

## H. Hygiene observations (not blocking)

**H1.** Part 15 prohibits em dashes in wiki content. CLAUDE.md itself uses em dashes in several places (Part 1, Part 2, headings throughout). CLAUDE.md is operating manual not wiki content, so it's not a violation, but for consistency with the rule the document advocates, em dashes here should be swapped to semicolons or commas.

**H2.** Part 6 page templates run from line 235 to 543 (308 lines). This is the single largest part. It contains six page-type templates plus the three-field state-system explainer. Worth considering whether to break out into `docs/templates/` files referenced by Part 6, so CLAUDE.md stays scannable and templates can evolve independently.

**H3.** Part 26 (future private wiki) is detailed enough to be useful when that build kicks off, but for now it adds 35 lines of "not this repo" context that distracts from the rules. Worth moving to a `docs/future/private-wiki.md` and replacing Part 26 with a one-line pointer.

## J. State of the build, what is and is not functioning

**Working and load-bearing:**
- Quartz build and serve pipeline (`npm run build`, `npm run serve`).
- 164 source pages ingested at `wiki/sources/`.
- 44 product-category pages, 185 ingredient pages, 37 metal pages, 37 regulation pages.
- Routing audit script (`tools/audit-product-source-routing.mjs`) producing 278-row `product_source_routing_audit.csv`.
- Structured evidence layer with 502 value records in `data/evidence/values.jsonl`.
- 234-row HMT&C standards gap report.
- 177-row Category 1 register.
- Standards Workbench server at `tools/standards-workbench/server.mjs` (localhost:8090 via `npm run workbench`).
- Quartz product-page generators (`apply-product-hmtc-evidence-summaries.mjs`, `apply-product-broad-context-sections.mjs`, `apply-product-crosswalk-sections.mjs`, `apply-lead-benchmark-context.mjs`) all run from prebuild and write content to product pages.
- 10 hand-written lint reports in `wiki/lint/` showing Karen has been auditing manually.
- 9 batch reports in `wiki/batch-reports/`.
- chokidar dependency installed (so watcher wiring is trivial).

**Working but with drift-risk surfaces:**
- CC Candidate Summary generator emits p90/p30/n_a_tier/CC-eligibility to public pages (G7).
- Lab Result Comparator exposes p90/p10 to brand-facing form (G8).
- Lab Result Comparator covers only 4 of 10 HMT&C analytes (Cd, Pb, tAs, tHg).

**Partial or barely-started:**
- Source ingest: 164 of 23,260 papers, roughly 0.7 percent of corpus.
- `wiki/microbiome/` has 2 pages; Part 22 federation is years premature.
- `wiki/courses/` has 1 page; Part 20 course workflow is unused.
- `wiki/app/` has 1 page; Part 21 app workflow is unused.
- `wiki/certification/` has 2 pages (index + lab comparator).
- `wiki/health/` has 1 page.
- `wiki/queries/` has 1 page.
- `wiki/testing/` has 3 pages (Part 6 testing-method template is well-specified but barely populated).
- `wiki/mitigation/` has 5 pages.
- `data/evidence/review_events.jsonl` has 1 line; resynthesis tracking is not actually being used.

**Missing or broken:**
- Triage manifest at `raw/manifest/` does not exist (B1).
- `data/evidence/routing_unresolved.csv` and `routing_malformed.csv` not emitted (G2).
- No file watcher wired to `wiki/sources/` (G3).
- No pre-commit hook (G4); no `.husky/`.
- No automated lint pipeline for the non-routing Part 18 checks (G6).
- The CLAUDE.md amendments made today are not in the served repo (G9, G10).
- The product-page edits made today are not in the served repo (G10).

## K. Recommended fix order

If you fix only five things this week, fix these in this order. Each unblocks the next.

1. **Sync `~/Desktop/heavy-metal-index/` to `/private/tmp/heavymetalindex-publish/`.** Until this happens, all the CLAUDE.md amendments and product-page edits made today are invisible to running sessions. (G9, G10.)

2. **Refactor `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` to emit two artifacts:** a literature-native public block (no p90/p30/n_a_tier/CC-eligibility/codenames) and a staff-only percentile-arithmetic block. This is the highest-leverage drift fix; it eliminates A5, A6, D1, D2, and G7 in one pass and makes every product page defensible. (G7.)

3. **Fix Part 8 single-paper workflow and Part 9 synthesis to align with the new architecture.** This is doc work, not code; it closes A1, A2, A3 and prevents future sessions from re-introducing the old behavior. (A1-A4.)

4. **Extend `tools/audit-product-source-routing.mjs` to emit `routing_unresolved.csv` and `routing_malformed.csv`.** Routing layer becomes self-policing. (G2.)

5. **Wire the file watcher on `wiki/sources/` into `npm run serve`** so routing audit refreshes in dev without manual prebuild. (G3.)

Items 6 through 15, lower priority, in approximate order: rework Lab Result Comparator (G8); resolve triage manifest absence with a bootstrap step (B1); rewrite Part 27 as new-category kickoff (B3); add the missing cross-references (E1-E6); extend voice / actor tagging on Part 8 compiled-wiki rule (F1, F2); fix Part 12's cross-reference to Part 26 (B4); scaffold `tools/lint/` with one script per Part 18 check (C3); install husky and write `.husky/pre-commit` (G4); add a script-emitted log.md update for batch ingests (C2); add resynthesis-queue lint check (C4).

## L. What this audit does not address

This audit does not propose new rules; it only reconciles existing rules with each other and with the build state. Architectural decisions left open: whether to keep the percentile arithmetic on a staff workbench page or move it to a separate sibling repo; whether to formalize the "synthesis pass" as a scheduled job or a manual trigger; whether to maintain Part 27's kickoff procedure for new categories or retire it. Karen's call.
