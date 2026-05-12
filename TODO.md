# TODO — Heavy Metal Index build

Working backlog for the Heavy Metal Index build. Two lists: Karen's (decisions, reviews, external work) and Claude's (model-driven work). Updated as items land and as new items surface. Pinned to repo root so every session — Claude Code, Cowork, Codex, Obsidian — reads it.

For strategic direction, see [OPERATING.md](OPERATING.md) Part 7 standing initiatives. For procedure, see [CLAUDE.md](CLAUDE.md). This file is the granular working backlog underneath those documents.

**Primary "what's next" surface: run `npm run plan`** — that emits [data/evidence/build-action-plan.md](data/evidence/build-action-plan.md), an auto-generated prioritized list of actions scored by impact × confidence ÷ cost, with per-action session prompts ready to paste into the recommended session type (Claude Code Opus / Obsidian Sonnet / etc.). The plan regenerates from gap signals each invocation; TODO.md is the human-curated overlay for items the orchestrator's signal vocabulary doesn't capture.

Format notes:
- Each item is one line. Severity / priority lives in section ordering, not in item text.
- A completed item moves to "Recently completed" at the bottom of its list, kept there for one or two sessions so the next session can scan recent context, then archived.
- Cross-session protocol: any session can mark an item complete; surfacing new items is a primary responsibility (see OPERATING.md Part 3).

---

## Karen's TODO

Items where Karen owns the next move. Claude does not act on these without Karen.

### Awaiting Karen's review

- [ ] Verify the corpus counter on the homepage reads right for regulators after the dev server picks up the SCSS additions. Commit `e204196`, location `/` between hero and feature grid. If the visual treatment or axis labels need tuning, tell Claude.
- [ ] Verify the stakeholder guide on the four formula pages reads right for brand legal teams. Commit `4e5e2a7`, location `/products/infant-formula-powder-non-soy` (plus three siblings). The replication to other product families is queued — Karen's feedback on the formula version shapes whether replication uses the same template or a revised one.
- [ ] Confirm `acceptEdits` permission mode on `.claude/settings.local.json` is the right default for Obsidian Claude sessions, or whether `bypassPermissions` (more aggressive, less safety) is preferred for bulk ingest. Edit the file directly if changing.
- [ ] Decide whether to commit the cowork audit at `wiki/lint/2026-05-11-claudemd-consistency-audit.md` as a historical record or leave it untracked. Most findings have been addressed.

### Awaiting Karen's decision

- [ ] Approve new-page proposals as they surface from the 199-unresolved triage (when Claude runs the triage pass). Each unresolved entry is either a frontmatter slug fix (no decision needed) or a new-page proposal (Karen approves per Part 10).
- [ ] Decide whether the cowork audit's remaining findings (B2, B3, B5-B8, C1-C6, F3-F4, H1-H3) are worth a dedicated cleanup pass or should be left for incremental cleanup as Claude touches the relevant parts of CLAUDE.md.

### Awaiting Karen's external action

- [ ] Continue dropping materials into `raw/manual-fetch/seasonal-geographic-variance/` per the wishlist as they become available. See [the wishlist](raw/manual-fetch/seasonal-geographic-variance/wishlist.md) for the current open gaps. (First wave of 60 files dropped 2026-05-12 — see Karen's completed list below.)
- [ ] Get real-world feedback from stakeholders when she has a channel (retailers, brand QA leads, brand counsel). Per OPERATING.md Part 2, Claude designs against the public-record persona until Karen has a feedback channel.
- [ ] *(Optional, not a routine gate)* Scan `data/evidence/wishlist-fetch-audit.csv` if you want to second-guess the auto-fetcher's decisions. The audit log shows what was downloaded, what was deduplicated, what was skipped as weak-match, and what failed (typically http-403 paywalls despite OpenAlex's OA flag). The fetcher decides for itself by default per OPERATING.md Part 3; this is a review surface, not an approval queue.

---

## Claude's TODO

Items Claude is working through. Picked up in priority order from the top of each section.

### In progress

(none right now — pick the next item below)

### Next up

1. [ ] Ingest the ~94 new PDFs in the manual-fetch folder: 60 Karen dropped 2026-05-12 plus 34 auto-fetched by `wishlist:fetch` (in `auto-fetched/` subfolder). Each produces a source page per CLAUDE.md Part 8; routing audit fans them out automatically. High-value standouts from the manual drops: FDA juice/cereal arsenic datasets, cocoa cadmium series (Ecuadorian by province, LatAm & Caribbean, US dark chocolate multi-year), Peruvian Andes crops + quinoa, Chinese tea series. Closes ~1/3 of v0 wishlist between the manual drop and the auto-fetch.

2. [ ] Triage the 199 unresolved entries in `data/evidence/routing_unresolved.csv`. Categorize each as: frontmatter typo (Claude fixes), new-page proposal (Karen approves), or detector bug in the routing audit (Claude fixes the detector). One-time pass; the watcher + hook keep the count low going forward. Best done in the same session block as the 60-file ingest above so the audit catches new unresolved entries from those drops at the same time. Estimated 1-2 hours.

2. [ ] Routing layer Phase 3: implement `exposure_only` and `regulatory_context` route_kind categorization. Currently the audit emits 4 of the 6 Part 5b route_kinds; the other two are reserved but not yet recognized. Adds intake/biomarker studies and regulation-citation patterns as distinct routes.

3. [ ] Lab Result Comparator analyte coverage: the 6 of 10 HMT&C analytes without sample-level distributions currently show "Literature too thin" labeled views (per the earlier rework). Improve these views with what cited sources actually report for each (ranges, group means, study counts) instead of just the empty state.

4. [ ] Workbench buildout continuation. The snapshots index landed; the review-state UI (per-snapshot approval workflow, integration with the routing audit) is still empty. Make the staff workbench feel like a production tool, not a placeholder.

5. [ ] Variance initiative Phase B: corpus search for seasonal and geographic variance data across the 23,260-source corpus. Paced by the bulk ingest pipeline catching up. The synthesis pass per CLAUDE.md Part 9 emits findings into the `geographic_breakdown` and `seasonal_variance` fields per metal sub-block on ingredient pages.

6. [ ] Variance initiative Phase C: ingest manual-fetch drops as Karen adds them to `raw/manual-fetch/seasonal-geographic-variance/`. Each drop produces a source page per CLAUDE.md Part 6 and the routing layer fans it out.

### Queued (no immediate priority)

- [ ] Address remaining cowork audit findings (B2 Phase 2 cleanup label, B3 Part 27 rename or move, B5 manifest-conditional Part 5, B6 Part 11 priority count clarification, B7 Part 22 WikiBiome federation tagged as future-state, B8 review_events.jsonl population). Per Karen's call on whether this is a focused pass or incremental.
- [ ] C1: write `tools/build-index.mjs` so `wiki/index.md` regenerates from the file system instead of being hand-maintained. Wire into prebuild and the file watcher.
- [ ] C2: have batch-report tool auto-emit the matching `log.md` entry so per-batch logging is mechanical.
- [ ] C3: scaffold `tools/lint/` with one script per Part 18 check. Currently only the routing lint runs in code; contradictions, stale claims, regulatory-value drift, silent threshold deviation, evidence-tier mismatch, and provenance-gap checks are described in CLAUDE.md but not implemented.
- [ ] C4: scheduled task or lint check that scans `contamination_profile` blocks and emits a resynthesis queue per Part 9 trigger conditions.
- [ ] F3 / F4: voice / actor tagging hygiene pass across CLAUDE.md Part 19 and Part 24. Lower priority — the load-bearing actor ambiguity was already fixed in commit `3cbed2f`.
- [ ] H2: consider breaking Part 6 page-templates section out into `docs/templates/` files referenced by Part 6 so CLAUDE.md stays scannable.
- [ ] H3: move Part 26 (future private brand-intelligence wiki) to `docs/future/private-wiki.md` and replace Part 26 with a one-line pointer. Lower priority.
- [ ] Recovery-pile cleanup: the 350+ tier-1 source stubs that were created in Karen's recovery-branch session. Most are now committed; spot-check coverage and any remaining frontmatter issues surface in the routing audit's malformed.csv.
- [ ] Stakeholder guide on master pages (after the per-product replication settles). The master pages are now staff-only with the firewall callout; if Karen later wants public category-overview pages, those would need their own stakeholder guides keyed to the category-level decision moments.

### Recently completed (this session, since OPERATING.md landed)

- [x] OPERATING.md drafted and committed (commit `48be1fe`).
- [x] CLAUDE.md consistency pass — Parts 5, 5b, 6, 8, 9, 10, 12, 17, 19, 21 (commit `3cbed2f`). Resolves cowork audit A1-A6, B1, B4, E3-E6.
- [x] Stakeholder guide on the four formula product pages (commit `4e5e2a7`).
- [x] Workbench standards snapshots index page + workbench.md drift fix (commit `b216f01`).
- [x] CLAUDE.md Part 8 manifest caveat updated to reflect the manifest that was built in commit `fa96392` (commit `7d39148`).
- [x] Routing layer Phase 1: `tools/evidence/build-routing-audit.mjs`, sibling logs `routing_unresolved.csv` and `routing_malformed.csv`, prebuild gate on blocking-malformed sources, dabeka1987 frontmatter fix (commit `18ce8ce`).
- [x] Master pages firewall posture — `infant-and-child-foods-master`, `category-5-beverages-master` marked as staff-only with `noindex: true` and a staff callout; lead-benchmark-context and regulatory-crosswalk-field-findings CSV-path leaks cleaned (commit `ffcffea`).
- [x] OPERATING.md item 7 added: seasonal and geographic variance initiative (commit `1e477bf`).
- [x] raw/manual-fetch/seasonal-geographic-variance/ drop folder + README + v0 wishlist (commit `1e477bf`).
- [x] Routing layer Phase 2a: chokidar file watcher on `wiki/sources/`, wired as `npm run watch:sources` (commit `566da42`).
- [x] Routing layer Phase 2b: husky pre-commit hook on commits touching `wiki/sources/` (commit `2686554`).
- [x] Routing layer Phase 2c: route_kind vocabulary aligned with Part 5b (commit `ce0640c`).
- [x] CLAUDE.md Part 6 schema extension — `geographic_breakdown` and `seasonal_variance` sub-fields per metal (commit `2deb724`).
- [x] Corpus-scope counter on the homepage with 10 axes including A-tier curated sources, programmatic databases indexed, structured evidence records, and jurisdictions covered (commit `e204196`).
- [x] `.claude/settings.local.json` updated for the auto-continue ask: `defaultMode: "acceptEdits"`, broad Bash allowlist, explicit deny floor (local only; not committed because .claude/ is gitignored).
- [x] TODO.md created at repo root with Karen's and Claude's working backlogs (this commit).
- [x] Stakeholder guide replication to 30 non-formula product pages via `tools/apply-stakeholder-guides.mjs` (commit `70d169a` plus base-variant fix `3b7c516`). Per-family brand-legal attack-vector framing for baby cereals, purees, mixed meals, teething/snacks, fruit and vegetable juices, plant milks, tea family, beverages, and specialty pediatric matrices.
- [x] Wishlist automated paper retrieval — `tools/wishlist/parse-wishlist.mjs` and `tools/wishlist/find-candidates.mjs` (commits `4b672ab` and `9b7960b`). OpenAlex API integration with word-boundary metal-code extraction. v0 first run downloaded **34 open-access PDFs** to the manual-fetch staging folder; 5 deduplicated against `wiki/sources/`; 39 weak matches logged for optional review; 33 OpenAlex-OA-but-publisher-paywalled failures (typical). One npm script: `npm run wishlist:fetch` runs the full pipeline end-to-end. The model decides yes/no itself; no Karen-side approval gate.
- [x] Wishlist auto-fetch rewritten to decide-and-act instead of asking Karen to approve (commit `9b7960b`). Per OPERATING.md Part 3: Claude does not introduce approval gates for decisions Claude is qualified to make. Audit log at `data/evidence/wishlist-fetch-audit.csv` is for Karen's optional second-guessing, not routine gating.
- [x] Build orchestrator v0 (commit `eca77e4`). `tools/orchestrator/analyze-gaps.mjs` + `npm run plan`. Reads every gap signal, scores actions by priority, emits a sorted action plan plus per-action session prompts. First run surfaced 4 actions: 460-cell synthesis pass (top priority), 240-entry routing triage, 33-cell wishlist expansion, 95-PDF ingest.
- [x] Build orchestrator dispatcher + night-loop spec (commits `15eca2e`, `3e1e5ed`). `tools/orchestrator/dispatch.mjs` spawns `claude --print --dangerously-skip-permissions` with one of the orchestrator's per-action prompts; bounded by `--max-turns` and a `--disallowedTools` denylist. Trial dispatch in progress as of these commits; if successful, the night-loop in `docs/night-loop-spec.md` can land in the next session and run overnight under launchd.
- [x] Cowork CLAUDE.md consistency audit committed as historical record (commit `90bc4d1`). Most findings closed this week; remaining ones catalogued in the "Queued" section of this file.

### Karen's recently completed

- [x] Dropped 60 PDFs into `raw/manual-fetch/seasonal-geographic-variance/` 2026-05-12. ~115 MB. Closes ~1/3 of v0 wishlist on a first wave; substantial coverage on cocoa Cd by Latin American origin, FDA juice/cereal arsenic datasets, Peruvian Andes crops, Chinese tea series, UK total diet study, dark chocolate multi-year US analysis.
