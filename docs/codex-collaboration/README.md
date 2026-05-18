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
- **Codex** processes bottom-up priority: `condiment_papers/` (70 PDFs), `08_Nuts_Seeds_Legumes_and_Misc/` (15), `07_Processed_Foods_Snacks_Beverages/` (16), `02_Vegetables_and_Vegetable_Products/` (17), `01_Fruits_and_Fruit_Products/` (24), `Papers Cube Manual Fetch/` (57), `Manual Resourcing/` (1).
- **Convergence point:** when one agent finishes its assigned folders, it picks up from the other end of the priority list. If both reach the same folder, the one that gets there first claims it; the other moves to the next available folder in its direction. Use the per-PDF tracker (`data/evidence/autonomy/manual-fetch-tracker.csv`) to check what's already processed before starting.

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

**Tertiary role: Marker-corpus volume drafts.** When ALL of audit queue, manual-fetch assignment, and mandatory-prose-sections work are caught up, Codex can pivot to drafting Marker-corpus papers per `docs/gpt-collaboration/system-prompt.md`. Reads from `raw/markdown/FM_XXXXXXX/FM_XXXXXXX.md`, writes drafts to `raw/gpt-drafts/FM_XXXXXXX.md`. Pick papers with `priority_tier=P4` from `raw/manifest/triage-manifest.csv` that don't yet have wiki source pages.

Don't draft a paper that already has a wiki source page or a draft. The triage manifest's `already_ingested` column is one signal; existence of `wiki/sources/<cite-key>.md` is the canonical check.

### Role priority within a Codex session

Sessions should split time across the four roles in this order, working until natural exhaustion or a ~2-hour wall-clock budget (whichever first). No per-role page-count cap.

1. **Audit queue** (highest priority — gates the Cochrane bar for pages already in the wiki). Drain pending rows until the queue is empty of `pending` and `pending-brand-firewall-recheck-locked-strict` rows. After each commit, re-read the queue to pick up any new rows the daemon may have added in the meantime.
2. **Manual-fetch ingest** on assigned folders. Process PDFs from the assigned folder list (condiment_papers first, then 08_Nuts, 07_Processed, 02_Vegetables, 01_Fruits, Papers Cube Manual Fetch, Manual Resourcing) until either the assigned folders are exhausted OR you've used roughly a third of the session budget on ingest. Switch back to audits if new pending rows have accumulated.
3. **Mandatory prose sections** (Role C). After audit + ingest are both at a natural pause, fill "Pending synthesis" placeholders on ingredient and product pages with ≥3 contributing sources. Genuinely undone Cochrane work — daemon writes placeholders, nothing routinely replaces them.
4. **Marker drafts** if all above are caught up.

This ordering prevents the audit queue from growing unbounded while still making progress on the ingest backlog AND closing the prose-section gap. A single Codex session at the ~2-hour budget should land roughly 15-30 audits + 8-15 ingests + 2-5 prose-section fills = 25-50 pages of work, depending on per-page complexity. The previous 5-audit / 3-ingest cap is removed as of 2026-05-17 per Karen's directive.

### When to stop a session

Stop the session and write the summary when ANY of these fires:

- **Audit queue is empty** AND **assigned manual-fetch folders are exhausted** AND **no Marker drafts available**. Genuine completion.
- **~2 hours of wall-clock work**. Soft budget to leave room for the user to intervene if needed. Resume on next session.
- **Agent tool / sub-task spawn failed**. Audit step requires fresh-context spawn capability; without it, ingest quality drops.
- **Three consecutive QUARANTINE verdicts on audits**. Indicates either systematic ingest errors or systematic audit false positives. Surface to Karen.
- **Paper-internal contradiction** that can't be cleanly resolved during ingest. Stop on that PDF, log it, surface to Karen.
- **True duplicate conflict** (DOI hit returns a page with a different DOI or paper). Data-integrity issue, needs Karen.
- **New ingredient/product/regulation slug needed** that Part 10 requires Karen to bless. Surface in summary, do not create.
- **Routing audit fails** with new unresolved/malformed entries you can't fix. Surface in summary.

The full backlog (335 manual-fetch PDFs + however many strict-recheck rows + 23K Marker corpus) is NOT a single-session goal. Multiple sessions are expected. The goal of each session is to make sustained, bounded progress without artificial caps.

### What Codex does NOT do (hard prohibitions)

- Do NOT ingest manual-fetch PDFs from folders assigned to Claude's daemon (06_Infant_Foods_Formula, Children Personal Care Papers, 04_Meat_Poultry_Seafood, 03_Grains_and_Grain_Products, 05_Dairy_Eggs_and_Alternatives). The daemon owns these. Codex's ingest assignment is the bottom-up priority list (condiments, nuts/seeds, processed, vegetables, fruits, Papers Cube, Manual Resourcing). Before ingesting any PDF, check `data/evidence/autonomy/manual-fetch-tracker.csv` — if the PDF is already tracked, skip it (the daemon claimed it).
- Do NOT run Part 9 synthesis. The routing audit triggers Claude's synthesis pass on threshold crossings; Codex doesn't touch ingredient `contamination_profile` blocks.
- DO create provisional ingredient and product scaffolds when an ingest declares a slug that does not yet exist. Use `tools/autonomy/create-provisional-ingredient-scaffold.mjs` and `tools/autonomy/create-provisional-product-scaffold.mjs`. These tools mark the page `provisional_scaffold: true` and log the creation to `data/evidence/provisional-{ingredient,product}-scaffolds.jsonl`. Ingest continues. (The pre-2026-05-17 rule that products always required Karen's Step 0 Lock has been retired; Step 0 Lock is still required to assign HMTc taxonomy rows and certification thresholds, but it is no longer a gate on creating the routing destination.)
- Do NOT create new regulation pages without surfacing the agency rule ID / official citation to Karen first. Regulations have hard identifiers that should not be guessed.
- Do NOT edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` marker blocks (generator-owned).
- Do NOT modify `data/evidence/product_source_routing_audit.csv` by hand.
- Do NOT push to remote (the daemon tick pushes; Codex commits, daemon pushes on its next tick).
- Do NOT edit CLAUDE.md, OPERATING.md, or AGENTS.md without Karen's explicit approval (policy documents per night-loop-spec.md).

## Coordination with Claude

Both agents commit to the same branch. Conflicts are unlikely because the role split is clean (Codex audits pages Claude already committed; Codex never ingests fresh from manual-fetch folders), but if they happen:

- Claude's commits land first because the daemon ticks every 30 min unconditionally.
- Codex's audit commits land later, modifying pages Claude wrote.
- If a true conflict happens (both editing same wiki source page in same hour), git will show it; the second commit wins on the conflicted lines. The audit-queue.csv tracks the audit application separately, so the verdict is preserved even if the wiki page reverts.

If Codex sees a wiki source page mid-edit (e.g., daemon is currently ingesting it), the audit-queue.csv `status` will still be `pending` for that cite-key — the daemon writes the row only after its own audit completes. So queue-driven picking automatically avoids in-flight work.

## Session prompt for Karen to paste into Codex

When Karen starts a Codex session for this repo, she pastes this:

```
You are Codex (GPT-5.5) operating as a peer autonomous agent on the Heavy Metal Index build. Read docs/codex-collaboration/README.md in full before any work; that is your operating manual. Then read CLAUDE.md and OPERATING.md for the project-wide constitution.

You have four roles this session, in priority order, with NO per-role page cap. Work until the natural exhaustion condition or ~2-hour wall-clock budget, whichever first. The 5-audit / 3-ingest caps from earlier prompts are removed.

1. Audit queue. Pull data/evidence/audit-queue.csv. Pick oldest row with status=pending or status=pending-brand-firewall-recheck-locked-strict. Audit per docs/gpt-collaboration/audit-prompt.md (Check 4 enforces strict brand-firewall reading locked 2026-05-17; Exception 2 explicitly permits instrument/reference-material/software vendor names in Methods sections). Apply real findings, commit, update queue row, move to next. Work until the queue has no pending or strict-recheck rows. After each commit, re-read the queue — Claude's daemon may have added new pending rows in parallel.

2. Manual-fetch ingest on your assigned folders. Your assigned folders, in priority order: condiment_papers/, 08_Nuts_Seeds_Legumes_and_Misc/, 07_Processed_Foods_Snacks_Beverages/, 02_Vegetables_and_Vegetable_Products/, 01_Fruits_and_Fruit_Products/, Manual Resourcing/. (Papers Cube Manual Fetch/ is in Claude's active rotation as of 2026-05-18; skip it.) Use tools/autonomy/ingest-manual-fetch-batch.mjs as a reference workflow. Before picking any PDF, check data/evidence/autonomy/manual-fetch-tracker.csv — skip any PDF already tracked. Work until either your assigned folders are exhausted OR you've used roughly a third of the session budget on ingest, whichever first.

3. Mandatory prose sections (Role C, added 2026-05-18). Per CLAUDE.md Part 6, ingredient pages need 8 mandatory H2 sections and product pages need 10. The daemon's mandatory-sections.mjs writes "Pending synthesis" placeholders only; nothing else writes the real prose, so this work is genuinely undone. Process: grep -l "Pending synthesis" wiki/ingredients/ wiki/products/ → pick a page with ≥3 contributing sources (per data/evidence/product_source_routing_audit.csv) → read contributing sources + existing page → write prose replacing placeholders (NOT inside <!-- BEGIN --> / <!-- END --> markers; NOT the contamination_profile YAML — those are daemon/generator owned) → commit per page with message "sections (codex): <slug> — <list of sections filled>". See docs/codex-collaboration/README.md Role C for full per-section requirements.

4. Marker-corpus P4 drafts to raw/gpt-drafts/ — only if 1, 2, and 3 are all caught up. Read docs/gpt-collaboration/system-prompt.md for the drafter format.

Do NOT ingest any PDF from Claude's assigned folders: 06_Infant_Foods_Formula/, Children Personal Care Papers/, 04_Meat_Poultry_Seafood/, 03_Grains_and_Grain_Products/, 05_Dairy_Eggs_and_Alternatives/. Those belong to the daemon.

Do NOT run Part 9 synthesis. Do NOT create new regulation pages without surfacing the agency rule ID. For ingredient/product pages declared by an ingest that do not yet exist, run the provisional-scaffold tools (see docs/codex-collaboration/README.md prohibitions section). Do NOT push to remote. All other prohibitions in docs/codex-collaboration/README.md apply.

When done, write a session summary to data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md describing: audits run + verdicts, manual-fetch PDFs ingested + cite-keys, prose-section fills committed (list ingredient/product slugs + which sections filled), provisional scaffolds created (read from data/evidence/provisional-{ingredient,product}-scaffolds.jsonl entries for this session window), and any regulation-page surfacing that needs Karen's agency-rule-ID input.

Start now. No further confirmation needed from me.
```

Karen pastes that once per Codex session. Codex runs autonomously from there.

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
