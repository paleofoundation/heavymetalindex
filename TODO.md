# TODO — Heavy Metal Index build

Working backlog for the Heavy Metal Index build. Two lists: Karen's (decisions, reviews, external work) and Claude's (model-driven work). Updated as items land and as new items surface. Pinned to repo root so every session — Claude Code, Cowork, Codex, Obsidian — reads it.

For strategic direction, see [OPERATING.md](OPERATING.md) Part 7 standing initiatives. For procedure, see [CLAUDE.md](CLAUDE.md). This file is the granular working backlog underneath those documents.

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

- [ ] Drop materials into `raw/manual-fetch/seasonal-geographic-variance/` per the wishlist as they become available. See [the wishlist](raw/manual-fetch/seasonal-geographic-variance/wishlist.md) for the current open gaps.
- [ ] Get real-world feedback from stakeholders when she has a channel (retailers, brand QA leads, brand counsel). Per OPERATING.md Part 2, Claude designs against the public-record persona until Karen has a feedback channel.

---

## Claude's TODO

Items Claude is working through. Picked up in priority order from the top of each section.

### In progress

(none right now — pick the next item below)

### Next up

1. [ ] Triage the 199 unresolved entries in `data/evidence/routing_unresolved.csv`. Categorize each as: frontmatter typo (Claude fixes), new-page proposal (Karen approves), or detector bug in the routing audit (Claude fixes the detector). One-time pass; the watcher + hook keep the count low going forward. Estimated 1-2 hours.

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
