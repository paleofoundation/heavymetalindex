---
type: doc
purpose: Codex (GPT-5.5) operating manual for the Heavy Metal Index build
audience: [karen, codex, claude-code]
updated: 2026-05-17
---

# Codex collaboration — operating manual

Codex runs alongside Claude Code (Opus 4.7) as a peer autonomous agent. Both have full filesystem access, shell access, git commit access, and Agent-spawn capability. They coordinate via durable artifacts in this repo (commits, queue files, batch reports) — never via live message-passing. This is the same multi-Claude coherence model documented in CLAUDE.md memory: "only the durable artifacts keep them coherent."

This doc is Codex's operating manual. Read it at the start of every Codex session in this repo. Read CLAUDE.md and OPERATING.md too — those are the project-wide constitution and binding on every agent in this build.

## Role split (Claude Code vs Codex)

The two agents have complementary, non-overlapping roles. Both run autonomously without Karen-in-loop. The split exploits asymmetric strengths and prevents redundant work.

### Claude Code (Opus 4.7) does

- **Manual-fetch (MFK/MR/PCMF) ingest.** The 335 hand-curated PDFs in `raw/Manual Fetch Kimi /`, `raw/Manual Resourcing/`, `raw/Papers Cube Manual Fetch/`. Runs via the autonomy daemon (`tools/autonomy/daemon-tick.sh` → `tools/autonomy/ingest-manual-fetch-batch.mjs`). Every 30 minutes, picks up to 2 unprocessed PDFs, runs the full Cochrane workflow (read PDF + identity-check + write fresh OR merge-enhance + spawn fresh-context audit subagent + apply audit findings + commit). Per-PDF state tracked at `data/evidence/autonomy/manual-fetch-tracker.csv`.
- **Marker-corpus ingest** (Phase 1 v0). Bulk drafts from the 23,260-paper triage manifest. Same daemon, `tools/autonomy/ingest-marker-batch.mjs`. Cheaper Haiku 4.5 model since this is volume work.
- **Synthesis** (Part 9 of CLAUDE.md). Ingredient `contamination_profile` updates when routing audit reports new contributing sources crossing thresholds.
- **Routing audit, structured-evidence extraction, firewall lint, source-legend regeneration, mandatory-sections completion, morning reports.** All run per tick.
- **New page proposals** surfaced to morning reports (per Part 10, products require Karen's Step 0 Lock; ingredients ≥freq-2 auto-stub).

### Codex (GPT-5.5) does

**Two roles, both autonomous, both peer to Claude:**

**Role A — Manual-fetch ingest (parallel to Claude's daemon).** Codex processes manual-fetch PDFs from a different folder set than the daemon, doubling throughput. Same Cochrane workflow as the daemon (`tools/autonomy/ingest-manual-fetch-batch.mjs` reference): read PDF, identity-check against `wiki/sources/`, write fresh OR merge-enhance, run routing audit, spawn a fresh-context audit subagent via Codex's own Agent equivalent, apply audit findings independently, commit per PDF, append to `data/evidence/audit-queue.csv` with status=pending (Claude will cross-audit later).

**Folder assignment to prevent conflicts:**

- **Claude's autonomy daemon** processes top-down priority: `06_Infant_Foods_Formula/`, `Children Personal Care Papers/`, `04_Meat_Poultry_Seafood/`, `03_Grains_and_Grain_Products/`, `05_Dairy_Eggs_and_Alternatives/`. These are Cat 1 / Cat 2 / Cat 4 highest-stakes folders.
- **Codex** processes ALL remaining manual-fetch folders as of 2026-05-18 (Karen's directive — she's freeing herself for seafood-axis synthesis work). New priority order, seafood-first to unblock Karen's synthesis:
  1. `04_Meat_Poultry_Seafood/` (highest priority — unblocks Karen)
  2. `06_Infant_Foods_Formula/` (Cat 1, partially done by daemon — finish it)
  3. `03_Grains_and_Grain_Products/`
  4. `05_Dairy_Eggs_and_Alternatives/`
  5. `condiment_papers/`
  6. `08_Nuts_Seeds_Legumes_and_Misc/`
  7. `07_Processed_Foods_Snacks_Beverages/`
  8. `02_Vegetables_and_Vegetable_Products/`
  9. `01_Fruits_and_Fruit_Products/`
  10. `Manual Resourcing/`
- **Convergence point with daemon:** daemon is still loaded in launchd and ticking. The per-PDF tracker (`data/evidence/autonomy/manual-fetch-tracker.csv`) prevents race conditions — either agent that claims a PDF first wins; the other skips. Daemon will simply exit cleanly each tick after finding nothing un-tracked in its priority order, which is fine. **Papers Cube Manual Fetch is now FULLY done as of 2026-05-18 (Claude completed the rotation); Children Personal Care Papers is also fully done.** No active claim conflicts with Claude Code; both those folders should be skipped.

**Role B — Cross-vendor audits.** Codex is the second set of AI eyes on every wiki source page produced by Claude OR by Codex itself (the daemon's audit subagent is a Claude subagent; Codex's audit subagent is a Codex subagent; the cross-vendor pass on the audit-queue gives EVERY page one Claude audit + one GPT-5.5 audit). The "fresh context" requirement (Part 2 firewall, brand firewall, slug vocabulary, speciation, numerical fidelity) is best satisfied by a different model family, not just a different same-model subagent.

Codex's audit role draws from `data/evidence/audit-queue.csv` (the producer-consumer queue both agents populate after each ingest). Per audit work cycle:

1. Read this README plus `docs/gpt-collaboration/audit-prompt.md` (the canonical 5-check audit spec).
2. Read `data/evidence/audit-queue.csv`. Pick the next row with `status=pending` or `status=pending-brand-firewall-recheck-locked-strict`, oldest first.
3. Read the wiki source page at `wiki/sources/<cite-key>.md` and the source evidence (`raw/markdown/<FM>/<FM>.md` for FM_ handles, the PDF at `raw_path` for MFK_/MR_/PCMF_ handles).
4. Run the five audit checks per `audit-prompt.md`. Be thorough — Cochrane bar. Specifically look for:
   - Numerical fidelity: transpositions, silent rounding, units conflations, mixed-up species/group attributions
   - Slug vocabulary: invented slugs not in `docs/gpt-collaboration/taxonomy-snapshot.md`
   - Speciation/methods: tAs vs iAs, tHg vs MeHg, Cr vs Cr-VI; invented method detail
   - Part 12 brand firewall: brand-by-brand listings or rankings
   - Part 2 wiki/HMTc firewall: synthesis claims, threshold proposals, consumer-audience advisories
5. For each ❌ definite-error finding: verify independently by re-reading the source-citation location. If verified correct, apply the correction to the wiki source page. Add a one-line note to the page's `## Verification notes` section: "Cross-vendor audit (Codex, <date>) caught X; corrected to Y per source location Z."
6. For each ❌ that turns out to be false positive on independent verification: do NOT change the page. Note the false positive in the conversation/run log so the audit prompt can be tightened.
7. For each ⚠️ concern: verify and apply with judgment. False positives same as above.
8. Run `npm run evidence:source-routes` to refresh routing audit. Confirm 0 unresolved, source not in malformed.
9. Commit per audited page with message:

   ```
   audit (codex): <cite-key> [promoted|revised|quarantined]

   Cross-vendor verdict: <PROMOTE|REVISE|QUARANTINE>

   Findings applied:
   - <list with source citations>

   Findings rejected (false positives):
   - <list with disproving citations>

   Routing: <unchanged|N added|N removed>.

   Co-Authored-By: Codex GPT-5.5 <noreply@openai.com>
   ```

10. Update `data/evidence/audit-queue.csv` row: `status` → `audited-codex-promote` / `audited-codex-revised` / `audited-codex-quarantine`; `audit_verdict` → the verdict; `audit_applied_at` → today's ISO date; `notes` → append "; Codex: <N> findings, <X> applied, <Y> rejected."
11. If the queue had a row already audited by Claude's subagent (`audited-promote`, `audited-revised`, `audited-quarantine` — without `codex` prefix), still run Codex's audit on it as a cross-vendor second-pass. Don't skip these; the cross-vendor catch is the whole point. Update the status to add `-codex-checked` suffix.
12. Move to next pending row, until queue is exhausted or session budget reached.

**Role C — Mandatory prose sections (added 2026-05-18).** Per CLAUDE.md Part 6, ingredient pages must carry 8 mandatory H2 sections and product pages must carry 10. The daemon's `mandatory-sections.mjs` step inserts "Pending synthesis" placeholders for any missing section but does NOT write real prose. The `contamination_profile` YAML block IS populated by the daemon's synthesis writer; the prose sections AROUND it are not. This leaves real Cochrane-quality work undone every time an ingredient or product page accumulates new contributing sources. Role C fills that gap.

Per cycle:

1. Identify pages with "Pending synthesis" placeholders: `grep -l "Pending synthesis" wiki/ingredients/ wiki/products/` is the simplest scan.
2. For each candidate page, pick one with ≥3 contributing sources (per `data/evidence/product_source_routing_audit.csv`). Pages with <3 sources don't have enough evidence to write defensible prose; leave them.
3. Read the contributing source pages (typically 5-10). Read the existing page in full.
4. Write real prose replacing each "Pending synthesis" placeholder, per the Part 6 mandatory-section requirements:

   **Ingredient pages (8 sections):** Why this commodity accumulates heavy metals; Heavy metal contamination profile (auto-generated table inside markers, don't touch); Ranges by source/region/variety; Processing effects; Ingredient-derivative risk; Mitigation options; Regulatory limits that apply; Sources.

   **Product pages (10 sections):** Who this page is for; Methodology; Literature Evidence Summary (auto-generated, don't touch markers); Source Evidence Inventory; Broad Product Context: Author-Scope Index (auto-generated, don't touch markers); Federal/Regulatory Limits vs Field Findings (auto-generated, don't touch markers); Levers to reduce contamination; How standards math uses this page; Historical recalls and enforcement; Sources.

5. Run `npm run evidence:source-routes`. Confirm clean.
6. Commit per page: `sections (codex): <slug> — <list of sections filled>`. Co-author Codex GPT-5.5.

Hard constraint on Role C: do NOT edit the `contamination_profile` YAML block, the body "Heavy metal contamination profile" table inside markers, the "Literature Evidence Summary" inside markers, the "Broad Product Context: Author-Scope Index" inside markers, or the "Federal/Regulatory Limits vs Field Findings" inside markers. All generator-owned or daemon-owned. Prose sections only.

**Role D — Lint and cleanup (added 2026-05-18).** The wiki has ~600 advisory-malformed source-page rows in `data/evidence/routing_malformed.csv`, broken cite-keys from manifest first-author-derivation failures (the "original2020-original-a", "research2024-research-c", "introduction2025-concentrations-heavy-metals-processed" patterns), source pages missing DOIs without a `no_doi_assigned: true` marker, source pages with invalid wikilinks pointing to nonexistent pages, and accumulated lint reports in `wiki/lint/`. These accumulated 950+ source pages worth of debt and the daemon's auto-fixes only catch a slice. Role D drains them.

Per cycle:

1. Pick a category of cleanup:
   - **Broken cite-keys**: `grep -lE "^cite_key: (original|research|introduction|background|considerations|abstract|article|plant|hhs|identifying|proanthocyanidins|lead|childhood)[0-9]" wiki/sources/` — these are manifest-derivation-failures. Fix by reading the page's title and authors, deriving the proper cite-key per Part 5 (`<firstauthorlowercase><year>-<short-topic-slug>`), renaming the file, updating the cite_key frontmatter field, and grepping for inbound references to the old cite-key in case any pages cross-link.
   - **Missing DOI without no_doi_assigned**: see `wiki/lint/2026-05-13-doi-fallback-followup.md` for context. Either lookup the DOI from the paper's content or add `no_doi_assigned: true` with an `access_url`.
   - **Invalid wikilinks**: `data/evidence/routing_malformed.csv` lists most of these. Fix the wikilink to point at an existing page, or delete it if no equivalent page exists.
   - **Missing required frontmatter fields**: same CSV. Add `cite_key`, `products`, `ingredients`, `matrices`, `metals`, `jurisdictions`, `source_type`, `evidence_tier` per Part 5.
2. Process 5-15 cleanup items per visit to Role D, then return to higher-priority work (audit queue grows fast).
3. Commit per category: `lint (codex): <category> — <N> items fixed` (e.g., `lint (codex): broken cite-keys — 7 renamed and re-linked`).

**Quaternary role: Marker-corpus volume drafts.** When ALL of audit queue, manual-fetch assignment, mandatory-prose-sections work, AND lint/cleanup are caught up, Codex can pivot to drafting Marker-corpus papers per `docs/gpt-collaboration/system-prompt.md`. Reads from `raw/markdown/FM_XXXXXXX/FM_XXXXXXX.md`, writes drafts to `raw/gpt-drafts/FM_XXXXXXX.md`. Pick papers with `priority_tier=P4` from `raw/manifest/triage-manifest.csv` that don't yet have wiki source pages.

Don't draft a paper that already has a wiki source page or a draft. The triage manifest's `already_ingested` column is one signal; existence of `wiki/sources/<cite-key>.md` is the canonical check.

### Goal-based work model (locked 2026-05-19)

Codex runs in fast mode. Time-based pacing ("3-hour budget", "20-30 min triage sweep") is the wrong abstraction for a fast-inference model — it produces self-paced behavior that stops on "feeling done" rather than on goal-met. **Every Codex session is assigned a concrete goal and stops only when that goal is met or a named hard blocker fires.** No wall-clock budget, no soft per-role estimates, no "feeling done."

### Goal types

The five roles map to five goal shapes. Karen's session prompt names which goal(s) apply:

1. **DRAIN-AUDIT-QUEUE goal**: reduce `status=pending` and `status=pending-brand-firewall-recheck-locked-strict` rows in `data/evidence/audit-queue.csv` to zero, OR to a named target count (e.g., "drain to ≤20 pending").
2. **DRAIN-FOLDER goal**: every PDF in a named folder ends the session either represented by a `wiki/sources/*.md` page (real ingest), folded into an existing source page (same-DOI rollup), or marked in `data/evidence/wishlist-fetch-audit.csv` with an explicit `skip:*` / `fail:*` / `ingested` decision. Folder ends empty of un-dispositioned PDFs.
3. **FILL-PROSE-SECTIONS goal**: every wiki page in a named list (or every page matching a `grep "Pending synthesis"` query against a named directory) ends with the `Pending synthesis` placeholders replaced by real prose tied to contributing sources.
4. **DRAIN-LINT goal**: a named lint counter (e.g., `wc -l data/evidence/routing_malformed.csv`, or count of broken cite-keys matching a named pattern) ends ≤ a named target count.
5. **DRAFT-MARKER-PAPERS goal**: a named count of Marker P4 papers from a named priority slice ends drafted to `raw/gpt-drafts/`.

The session prompt assigns one goal as primary. If the primary goal is met before the session naturally ends, Codex switches to the next-priority goal type (audit-queue → drain-folder → prose-sections → lint → marker-drafts) and continues until ANY of: (a) the new goal is also met, (b) a hard blocker fires, or (c) the session is interrupted externally.

### Mechanical rules for hitting any goal faster

These four mechanical rules apply to every goal type. They are about HOW Codex works, not WHEN it stops.

1. **PARALLEL READS.** Issue Read in parallel for 5-10 PDFs (or pages, or queue rows) in a single tool message. Read a batch, sort into dispositions, then act on the batch. Do NOT read one item, write one output, then read the next.
2. **BATCH COMMITS.** Commit every ~10 dispositions, not every 1. Per CLAUDE.md Part 4: "per-paper commits at 23,000-paper scale produce unusable git history." Ingest sweep commit format: `ingest sweep N (papers N1-N10): K source pages + M rollups + P triaged`. Audit commits stay per-page because they modify the canonical wiki page that's already committed.
3. **ROUTING AUDIT ONCE PER GOAL CYCLE.** Run `npm run evidence:source-routes` at session end (or at goal-met transitions when switching goal types), not after every commit. The pre-commit hook catches malformed frontmatter per file.
4. **TRIAGE-FIRST FOR DRAIN-FOLDER GOALS.** Auto-fetched wishlist folders are heavily padded with same-DOI duplicates, false-positives, and download failures. The drain-folder goal is met fastest by: (a) opening every PDF in the folder in parallel batches of 10, (b) classifying each as `real-ingest` / `dedup-rollup` / `skip:<reason>` / `blocker`, (c) batch-committing all `dedup-rollup` and `skip:*` decisions to `wishlist-fetch-audit.csv` in one or two commits, (d) then doing real ingests on the remaining `real-ingest` pile. Interleaving triage with full ingest per PDF is slower.

### When to stop a session (goal-based, NOT time-based)

Stop the session and write the summary when ANY of these fires:

- **Primary goal met** AND **no secondary goal cascade configured** (or secondary goals also met).
- **Hard blocker** (named, not invented):
  - Paper-internal contradiction that cannot be cleanly resolved during ingest. Stop on that PDF, log it, surface to Karen.
  - True duplicate conflict (DOI hit returns a page with a different DOI or paper). Data-integrity issue, needs Karen.
  - Routing audit fails with new unresolved/malformed entries that cannot be fixed in-session. Surface in summary.
  - Three consecutive QUARANTINE verdicts on audits. Indicates either systematic ingest errors or systematic audit false positives. Surface to Karen.

Stop criteria that are NOT valid (regressions from the 2026-05-19 goal-based lock):

- ❌ "Calibrated per-fire lower bound reached" — no such concept exists.
- ❌ "3-hour budget reached" — time budgets retired 2026-05-19. Goal-met or hard-blocker only.
- ❌ "Agent tool / sub-task spawn failed" — best-effort audit policy (locked 2026-05-18). Commit the page with `status=pending-audit-spawn-failed` and CONTINUE.
- ❌ "Routing looks clean so I'll stop" — clean routing is the baseline expectation, not a completion signal.
- ❌ "N PDFs processed feels like enough" — feelings are not stop criteria.
- ❌ "Pending async audits accumulating" — the async-audit lane is designed to accumulate; do not let queue depth gate continued ingest.
- ❌ "I've been reading docs for a while" — there is no per-session reading budget. If you need a doc, read just the section you need. Do not re-read `docs/codex-collaboration/README.md` mid-session if you've already read it this session.

If any invalid stop criterion fires, the run summary must be prefixed `STOPPED EARLY — REASON: <reason>` so Karen sees the regression.

The full backlog (manual-fetch PDFs + strict-recheck rows + Marker corpus + auto-fetched wishlist accumulations) is NOT a single-session goal. Multiple sessions are expected. Each session's job is to meet its named goal, no more, no less.

### What Codex does NOT do (hard prohibitions)

- Do NOT ingest manual-fetch PDFs from folders assigned to Claude's daemon (06_Infant_Foods_Formula, Children Personal Care Papers, 04_Meat_Poultry_Seafood, 03_Grains_and_Grain_Products, 05_Dairy_Eggs_and_Alternatives). The daemon owns these. Codex's ingest assignment is the bottom-up priority list (condiments, nuts/seeds, processed, vegetables, fruits, Papers Cube, Manual Resourcing). Before ingesting any PDF, check `data/evidence/autonomy/manual-fetch-tracker.csv` — if the PDF is already tracked, skip it (the daemon claimed it).
- Do NOT run Part 9 synthesis. The routing audit triggers Claude's synthesis pass on threshold crossings; Codex doesn't touch ingredient `contamination_profile` blocks.
- DO create provisional ingredient and product scaffolds when an ingest declares a slug that does not yet exist. Use `tools/autonomy/create-provisional-ingredient-scaffold.mjs` and `tools/autonomy/create-provisional-product-scaffold.mjs`. These tools mark the page `provisional_scaffold: true` and log the creation to `data/evidence/provisional-{ingredient,product}-scaffolds.jsonl`. Ingest continues. (The pre-2026-05-17 rule that products always required Karen's Step 0 Lock has been retired; Step 0 Lock is still required to assign HMTc taxonomy rows and certification thresholds, but it is no longer a gate on creating the routing destination.)
- Regulation pages: directly create them on first encounter per CLAUDE.md Part 10 (rule retired 2026-05-18; previously surfacing-first was required). Regulations have hard identifiers (rule numbers, official names, agency-published source URLs) that can be looked up directly from eur-lex.europa.eu, FDA.gov, codexalimentarius.org, atsdr.cdc.gov, etc. Use the Part 6 regulation template format. Required frontmatter: `rule_id`, `jurisdiction`, `agency`, `metal` (list if omnibus), `matrix`, `limit_value`, `limit_unit`, `status`, `effective_date`, `source_url`. For superseded regulations, add `sunset_date` and `superseded_by` pointing at the successor page wikilink.
- Do NOT edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` marker blocks (generator-owned).
- Do NOT modify `data/evidence/product_source_routing_audit.csv` by hand.
- Push to remote after each batch commit (sprint mode 2026-05-25 update — was previously "do NOT push" with the daemon as the pusher, but with sprint cadence the daemon-push-only path left commits stale for up to 30 min and starved the dashboard). The daemon also pushes any unpushed commits on every tick as a safety net.
- Do NOT edit CLAUDE.md, OPERATING.md, or AGENTS.md without Karen's explicit approval (policy documents per night-loop-spec.md).

## Coordination with Claude

Both agents commit to the same branch. Conflicts are unlikely because the role split is clean (Codex audits pages Claude already committed; Codex never ingests fresh from manual-fetch folders), but if they happen:

- Claude's commits land first because the daemon ticks every 30 min unconditionally.
- Codex's audit commits land later, modifying pages Claude wrote.
- If a true conflict happens (both editing same wiki source page in same hour), git will show it; the second commit wins on the conflicted lines. The audit-queue.csv tracks the audit application separately, so the verdict is preserved even if the wiki page reverts.

If Codex sees a wiki source page mid-edit (e.g., daemon is currently ingesting it), the audit-queue.csv `status` will still be `pending` for that cite-key — the daemon writes the row only after its own audit completes. So queue-driven picking automatically avoids in-flight work.

## Session prompts (goal-targeted, fast-mode-friendly)

Codex runs in fast mode. Prompts are tight, goal-named, and self-sufficient — Codex does NOT re-read the full README per session. The five templates below cover every routine Codex job. Karen picks the template matching the goal, fills the named target, and pastes.

### Template A — DRAIN-AUDIT-QUEUE

```
GOAL: data/evidence/audit-queue.csv has 0 rows with status=pending or status=pending-brand-firewall-recheck-locked-strict. Stop when met OR when a hard blocker fires (three consecutive QUARANTINE verdicts, paper-internal contradiction, DOI conflict requiring Karen).

How: parallel-Read 5-10 source pages + their PDFs per tool message, audit each per docs/gpt-collaboration/audit-prompt.md (5 checks; Check 4 strict brand firewall; Exception 2 permits instrument/CRM/software vendor names in Methods). Apply real findings, commit per page, update queue row. If audit spawn fails with thread limit, commit page with status=pending-audit-spawn-failed and continue — never stop on spawn failure.

Output: data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md with goal-met state (queue depth before/after), per-page verdicts, commit hashes, hard-blocker name if stopped early.

Start.
```

### Template B — DRAIN-FOLDER (auto-fetched wishlist or manual-fetch)

```
GOAL: <FOLDER_PATH> has 0 un-dispositioned PDFs. Every PDF ends either represented by a wiki/sources/*.md page (real ingest), folded into an existing page as a same-DOI rollup (with the wishlist row marked ingested), or marked in data/evidence/wishlist-fetch-audit.csv with an explicit skip:<reason> or fail:<reason> decision. Stop when met OR hard blocker (paper-internal contradiction, DOI conflict).

How: TRIAGE FIRST. Open every PDF in the folder in parallel batches of 10. Classify each as (a) real-ingest, (b) dedup-rollup, (c) skip:<reason>, (d) blocker. Batch-commit all (b)+(c) decisions to wishlist-fetch-audit.csv in one or two commits. Then real-ingest the (a) pile, batch-committing every ~10 source pages. Per CLAUDE.md Part 4, do NOT commit per-paper.

Audit each new source page per audit-prompt.md (best-effort: commit with status=pending-audit-spawn-failed if spawn errors, do not stop). Routing audit (`npm run evidence:source-routes`) runs ONCE at session end. Frontmatter discipline per CLAUDE.md Part 5 — products/ingredients/matrices/metals/jurisdictions at the level of specificity the source states.

Prohibitions: do NOT ingest PDFs from Claude's assigned folders (06_Infant_Foods_Formula/, Children Personal Care Papers/, 04_Meat_Poultry_Seafood/, 03_Grains_and_Grain_Products/, 05_Dairy_Eggs_and_Alternatives/ — daemon owns these); do NOT update contamination_profile YAML; do NOT edit inside <!-- BEGIN --> / <!-- END --> markers. (Push to remote after batch commits — sprint mode 2026-05-25 lifted the previous no-push prohibition.)

Output: data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md with goal-met state (folder count before/after), breakdown by disposition, commit hashes (with batch ranges).

Start.
```

### Template C — FILL-PROSE-SECTIONS

```
GOAL: every page returned by `grep -l "Pending synthesis" wiki/ingredients/ wiki/products/` that has ≥3 contributing sources in data/evidence/product_source_routing_audit.csv ends with the "Pending synthesis" placeholders replaced by real prose. Stop when met OR hard blocker (insufficient source coverage to write any of the 8 mandatory ingredient sections / 10 mandatory product sections honestly).

How: parallel-Read 5-10 candidate pages + their top contributing sources per tool message. Write prose replacing placeholders. Per CLAUDE.md Part 6, ingredient pages need the 8 mandatory H2 sections in order; product pages need the 10 mandatory H2 sections. Do NOT edit inside <!-- BEGIN --> / <!-- END --> markers. Do NOT touch contamination_profile YAML. Commit per page: "sections (codex): <slug> — <section list>".

Output: data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md with pages filled, sections written per page, commit hashes.

Start.
```

### Template D — DRAIN-LINT

```
GOAL: <NAMED_COUNTER> reaches ≤ <TARGET_COUNT>. Examples: `wc -l data/evidence/routing_malformed.csv` ≤ 100; count of broken cite-keys matching `^cite_key: (original|research|introduction|background|considerations|abstract|article|plant|hhs|lead)[0-9]` reaches 0. Stop when met.

How: parallel-Read 10-20 lint-flagged source pages per tool message. Fix one category at a time (broken cite-keys / missing DOI / invalid wikilinks / missing frontmatter). Commit per category: "lint (codex): <category> — <N> items".

Output: data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md with counter-before/counter-after, per-category fix counts, commit hashes.

Start.
```

### Template E — DRAFT-MARKER-PAPERS

```
GOAL: <N> Marker P4 papers from <PRIORITY_SLICE> drafted to raw/gpt-drafts/. Stop when count met.

How: parallel-Read 5-10 Marker markdown files per tool message. Draft per Marker-draft template. Commit every ~10 drafts.

Output: data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md with drafts written, commit hashes.

Start.
```

### Universal rules across all templates

These apply to every template and do not need to be re-pasted:

- **Goal-met or hard-blocker stops only.** No time budgets, no soft estimates, no "feels like enough." Invalid stop criteria are listed in docs/codex-collaboration/README.md "When to stop a session"; if any of them fires, prefix the run summary `STOPPED EARLY — REASON: <reason>`.
- **Parallel reads, batch commits, end-of-session routing audit, triage-first for drain-folder.** Full spec in docs/codex-collaboration/README.md "Mechanical rules for hitting any goal faster".
- **Do NOT run Part 9 synthesis. Do NOT edit CLAUDE.md / OPERATING.md / AGENTS.md without Karen.** Push to remote after each batch commit (sprint mode 2026-05-25 lifted the previous no-push prohibition). Full prohibitions list in docs/codex-collaboration/README.md "What Codex does NOT do".
- **Regulation pages**: directly create on first encounter per CLAUDE.md Part 10. Required frontmatter: rule_id, jurisdiction, agency, metal, matrix, limit_value, limit_unit, status, effective_date, source_url; superseded regs add sunset_date + superseded_by wikilink.
- **Provisional scaffolds**: when an ingest declares an ingredient or product slug that does not yet exist, run `tools/autonomy/create-provisional-{ingredient,product}-scaffold.mjs`. Ingest continues.

If Codex has not read docs/codex-collaboration/README.md this session, it reads it ONCE at session start (only the sections relevant to the goal type) and does not re-read.

## Throughput estimate with Codex in the loop

Without Codex: autonomy daemon clears 335-PDF manual-fetch backlog in ~3.5 days; each page gets one audit (Claude subagent) per ingest.

With Codex: same Claude throughput on manual-fetch (Codex doesn't touch this). Plus Codex cross-vendor audits at, say, 5-10 pages/hour when Karen runs sessions. Plus Codex Marker drafts on idle. Net effect: every page in the 3-day-sprint output gets TWO audits (Claude subagent + Codex cross-vendor), with the second catching what the first missed. Cochrane bar materially stronger.

## Conflict-recovery procedure

If Codex and Claude both edit the same page within the same tick:

1. The later commit wins on conflicted lines (git's default).
2. Both agents should re-read the page from disk before any new edit (not rely on a cached read from earlier in the session).
3. If a Codex audit applied a correction that Claude's later ingest reverted, Codex's next session picks up the same cite-key from audit-queue.csv (status will be `pending` again because the daemon re-ingested) and re-audits. Self-healing.

In practice, the role split (audit vs ingest) makes this rare. Document any observed conflicts in `data/evidence/codex-runs/conflicts-<date>.md` so the role split can be tightened.

## How this differs from `docs/gpt-collaboration/`

The `docs/gpt-collaboration/` folder is for ChatGPT-the-web-app (Karen-as-conduit). Built earlier today before I realized Karen was using Codex. The audit prompt at `docs/gpt-collaboration/audit-prompt.md` is still authoritative — Codex reads it for the 5-check spec. The `tools/gpt/build-audit-packet.sh` script and `apply-gpt-audit` skill are now legacy fallbacks for cases where Codex isn't available; they remain in place but are not the default.

The Codex collaboration (this folder) is for the autonomous-peer use case. Different role, same audit spec.
