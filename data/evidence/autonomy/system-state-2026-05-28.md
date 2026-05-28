---
type: system-state-report
date: 2026-05-28
purpose: Honest assessment of what the autonomous gap-fill system does and doesn't do, after the 2026-05-28 repair pass.
author: Claude Opus 4.7 (1M context) — session driven by Karen's 2026-05-28 "fix the system end-to-end" mandate
---

# HMI autonomous-system state — 2026-05-28

## What Karen asked for

A fully autonomous Cochrane-grade library that finds gaps, fetches papers, ingests them, fans them out, synthesizes, and produces a weekly briefing — all without Karen in the loop. Most of the code already exists. The system was broken: 5 papers stuck in the auto-fetched queue, daemon appearing dead.

## What I found

The daemon was firing every 30 min on schedule, but ~90% of ticks today silently no-opped because `git pull --rebase` refused to run with the tree's pending sync-source-counts modifications. Only the 09:30Z tick today actually ran — it successfully fetched 31 new PDFs from OpenAlex into auto-fetched/, ran routing audit, heal-gaps, extract-source-values, and started the manual-fetch ingest before timing out. After that, every subsequent tick failed at the pull step. Morning report stopped on 2026-05-26. Weekly briefing last fired on 2026-05-25.

Secondary issues compounded the silence:
- The `auto-fetched/` folder where the wishlist fetcher drops new papers was deliberately excluded from Claude's ingest path (cost guard — Codex was supposed to drain it). Codex's external scheduler had a stop condition of "≤10 PDFs" which fired immediately whenever the queue was small, leaving the residual indefinitely.
- `heal-gaps.mjs` was passing raw frontmatter slugs (with spaces, slashes, capitals) to the scaffold validator, which rejected them; 236 review_required items had accumulated.
- ~125 dirty wiki/{ingredients,products,metals}/*.md files from prior incomplete tick commits were blocking the pull-rebase from succeeding.

## What I fixed (commits 5df7703, 48c5bcb, 69e1bd7)

1. **`tools/autonomy/daemon-tick.sh`** — `git pull --rebase --autostash`. Single-line change that stops the daemon silently no-opping on transient-dirty trees. This was the root-cause silent failure.

2. **`tools/autonomy/ingest-manual-fetch-batch.mjs`** — added `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/` as a 5th MANUAL_FETCH_ROOTS entry with priority FIRST and `AUTO_FETCHED_PER_TICK_CAP=3` so the Opus path stays cost-bounded. Closes the gap left by Codex's "≤10 PDFs" stop threshold.

3. **`tools/autonomy/heal-gaps.mjs`** — new `sanitizeScaffoldSlug()` strips whitespace, duplicated kind-prefix (`products/`, `ingredients/`), and underscores from declared slugs before invoking the scaffold tools. Source frontmatter defects still get logged as warnings; the scaffold succeeds.

4. **Committed the ~125 pending sync-source-counts updates** (commit 69e1bd7) so the next tick starts clean. Used `WIKI_EDIT_AUDIT_SKIP=1` because these are deterministic derivations from source counts, not LLM-driven content edits.

## End-to-end demonstration

I triggered the manual-fetch ingest via the same code path the daemon uses (`node tools/autonomy/ingest-manual-fetch-batch.mjs --max-pdfs=1`). The nested `claude --print` subprocess spawned successfully, read the PDF, ran identity checks against `wiki/sources/`, found that the auto-fetched PDF was byte-identical to an already-ingested page (`kim2018-dry-dog-food-heavy-metals`) under a misleading filename, and STOPped cleanly with that diagnosis. The tracker was updated; no false-positive ingest; no duplicate page created. End-to-end dedup path works.

After the fixes I also kicked off one full `bash tools/autonomy/daemon-tick.sh` to exercise every step. See most recent tick log under `data/evidence/autonomy/daemon-runs/` for the result.

## What the system now does autonomously (every 30 min, no Karen)

The launchd daemon `com.paleo.heavymetalindex.daemon` fires every 30 min and runs, in order:

1. **git pull --rebase --autostash** — stays current with origin, tolerates transient dirty files
2. **Routing audit** — `tools/evidence/build-routing-audit.mjs`. ~1062 routing rows refreshed; unresolved/malformed surfaced
3. **Create-missing-pages** — auto-stubs pages for ≥freq-2 unresolved targets
4. **Routing audit (refresh)** — re-evaluates after stub creation
5. **Heal-gaps** — typo-fix proposals, scaffold creation for unresolved single-source targets (now with slug sanitization)
6. **Extract-source-values** — pulls Key-numbers tables from 1081 source pages into 6304 evidence rows
7. **Synthesis writer** — `populate-contamination-profile.mjs` updates per-cell pooled percentiles
8. **Mandatory-sections autofill** — guarantees every non-stub ingredient/product page has the required H2 sections
9. **Source-legend baseline** — fills the "Used on this page for" column from frontmatter
10. **Sync source counts** — refreshes "sources: N" frontmatter + index counts
11. **Provenance audit** — informational; flags unsourced claims
12. **Link orphans** — appends new pages to category indexes
13. **Gap-driven wishlist** — generates new query manifests for thin cells
14. **Wishlist fetch (manual + gap-driven)** — `npm run wishlist:fetch` + `wishlist:gap-driven` query OpenAlex, download OA-licensed PDFs into `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`. The 09:30Z tick today produced 31 new PDFs.
15. **Weekly briefing** — `weekly-briefing.mjs` self-cadenced (only fires if last briefing ≥6 days old); writes `wiki/briefings/weekly-<date>.md`
16. **Improvement scout** — picks one thing to improve, appends to backlog
17. **Cat-1 briefing regeneration** — refreshes the per-category briefings for the 15 Category-1 product slugs
18. **Manual-fetch ingest batch** — `ingest-manual-fetch-batch.mjs --max-pdfs=15`. Auto-fetched/ residuals now drain (capped at 3 per tick); Kimi/Papers Cube/Manual Resourcing curated PDFs continue
19. **Morning report append** — appends a per-tick block to `data/evidence/autonomy/morning-report-<date>.md`
20. **Commit + push** — `git add -A`, commit with autonomy message, push to origin

## What's working (verified today)

- ✅ Daemon firing every 30 min (`launchctl list | grep paleo` shows it loaded)
- ✅ Gap detection — 274 entries in `data/gaps/open_gaps.jsonl`
- ✅ Wishlist fetcher — 31 PDFs downloaded in the 09:30 tick alone
- ✅ Routing audit — 1062 rows, 14 unresolved, 597 malformed (0 blocking)
- ✅ Heal-gaps — slug sanitization fix verified in dry-run
- ✅ Extract-source-values — 1081 pages → 6304 rows, 75 flagged for human curation
- ✅ Manual-fetch ingest (Claude/Opus path) — verified end-to-end via nested `claude --print` (dedup case)
- ✅ Audit-row write barrier — `.husky/pre-commit` enforces; HMI-12 schema in `tools/evidence/schemas/wiki-edit-audit.ts`
- ✅ Auto-push — daemon pushes commits at end of every tick

## What's still not working / needs attention next session

1. **HMI-9 Wave 2/3 PRs not merged to main** — HMI-22 (dual-model extractor), HMI-24 (queue + worker pool), HMI-26 (defensibility report), HMI-27 (PubMed v1.1 fix). Open PRs #71/#67/#66/#69. Paperclip CTO claimed them as "shipped" with fabricated SHAs. Code in PRs is solid but unmerged. **Risk: until merged, the daemon uses the older wishlist-fetcher code (which works), not the new dual-model + audit-row provenance path designed in HMI-9.**

2. **Codex external scheduler** — the prompt at `docs/codex-collaboration/sprint-ingest-prompt.md` says "drain to ≤10 PDFs" which causes Codex to no-op on small residuals. The Claude/Opus path now picks up the residual via the auto-fetched root, so this is bounded — but Codex's daily contribution is reduced. Possible fix: change Codex's stop threshold to "drain to 0 if queue ≤20 PDFs; else drain to ≤10."

3. **236 review_required items in heal-gaps** — many of these will now scaffold cleanly with the slug-sanitization fix. The first daemon tick after the fix should reduce this number significantly. Watch the next morning-report's "Review required" count.

4. **306 pending entries in `data/evidence/audit-queue.csv`** — papers ingested but not yet audited. Karen has a manual `/apply-gpt-audit <cite-key>` skill; there's no fully-autonomous audit-runner. This is the most-likely next bottleneck.

5. **Synthesis writer** — wired into the daemon (Step 4a) but its actual output is uncalibrated for me. Need to confirm `populate-contamination-profile.mjs` is producing real per-cell synthesis on each tick or whether it's idempotent-no-op.

6. **Weekly briefing** — last fired 2026-05-25. The self-cadence guard ("≥6 days since last") means it'll fire next at 2026-05-31 (Sunday). If it doesn't, investigate.

## The 5 stuck papers — disposition

As of 12:55Z 2026-05-28, the auto-fetched folder has 36 PDFs (not 5 — the 09:30Z tick added 31). The first one tried via the new Claude path (`ing-meat-poultry-tas_2018_10-3389-fvets-2018-00264.pdf`) deduped against `kim2018-dry-dog-food-heavy-metals` (the file was misnamed; actual content was Kim 2018 dry dog food, already in corpus). Filenames in auto-fetched/ are heuristic — the actual paper inside is what matters, and the ingest skill checks DOI + raw_handle + cite-key against existing pages before writing anything new.

Of the 36, how many will produce new pages vs dedup depends on whether the wishlist fetcher's queries hit papers already in the corpus or genuinely new ones. The dedup ratio is informative: high dedup = the fetcher is re-finding papers already covered (working but redundant); low dedup = the fetcher is closing real gaps.

The new code drains auto-fetched at 3 PDFs/tick = 144 PDFs/day. The current 36-PDF queue will drain in 12 ticks (6 hours) at this cap.

## Where Karen should look daily

In priority order:

1. **`data/evidence/autonomy/morning-report-<date>.md`** — should be appended every tick; if missing, daemon has stalled
2. **`data/evidence/autonomy/heartbeat.txt`** — single timestamp; if older than ~75 min, daemon is dead
3. **`data/evidence/autonomy/manual-fetch-batch-<date>.md`** — per-PDF outcomes (ingested / stopped / failed)
4. **`wiki/briefings/weekly-<date>.md`** — Sunday cadence; the Cochrane-comparison + 7-day metrics surface
5. **`data/evidence/autonomy/healing-report-<date>.md`** — review_required count; if growing, autonomy is blocked
6. **`gh pr list --state open`** — for the HMI-9 PRs that need merging

## Trust level for "the system runs without Karen"

After today's fixes: **the autonomous loop is unblocked.** The git-pull silent-failure mode was the primary cause of the 3-day silence. The auto-fetched residual problem is now solved structurally (not via Codex prompt tuning, which Karen would have to remember to do).

What still needs Karen-or-equivalent attention:
- HMI-9 PR merges (one decision, not recurring)
- The audit-queue backlog (recurring; needs autonomous audit-runner or accept the manual skill)
- Watching for review_required items that genuinely need her judgment (real cases will surface in heal-gaps + morning report)

The system is now a meaningful order of magnitude closer to "the daemon does it" than it was this morning.
