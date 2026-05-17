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

**Primary role: cross-vendor audits.** Codex is the second set of AI eyes on every wiki source page Claude produces. The "fresh context" requirement (Part 2 firewall, brand firewall, slug vocabulary, speciation, numerical fidelity) is best satisfied by a different model family, not just a different Claude session. Codex's audit catches blind spots specific to Claude.

Codex audits from `data/evidence/audit-queue.csv` (the producer-consumer queue Claude populates after each ingest). Per session:

1. Read this README plus `docs/gpt-collaboration/audit-prompt.md` (the canonical 5-check audit spec).
2. Read `data/evidence/audit-queue.csv`. Pick the next row with `status=pending`, oldest first.
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

**Secondary role: Marker-corpus volume drafts.** When the audit queue is empty (all rows status starts with `audited-`), Codex can pivot to drafting Marker-corpus papers per `docs/gpt-collaboration/system-prompt.md`. Reads from `raw/markdown/FM_XXXXXXX/FM_XXXXXXX.md`, writes drafts to `raw/gpt-drafts/FM_XXXXXXX.md`. Pick papers with `priority_tier=P4` from `raw/manifest/triage-manifest.csv` that don't yet have wiki source pages. Mark each as drafted in a sibling tracker. The daemon's next pass will promote them.

Don't draft a paper that already has a wiki source page or a draft. The triage manifest's `already_ingested` column is one signal; existence of `wiki/sources/<cite-key>.md` is the canonical check.

### What Codex does NOT do (hard prohibitions)

- Do NOT ingest manual-fetch PDFs (MFK/MR/PCMF) directly. That's Claude's autonomy daemon. Stay out of `tools/autonomy/manual-fetch-tracker.csv` and don't pick PDFs from those folders for fresh ingest. The reason: Claude's Cochrane workflow for manual-fetch includes spawn-audit-subagent + apply-findings in one pass, and Codex re-doing that work creates merge conflicts on the wiki source pages.
- Do NOT run Part 9 synthesis. The routing audit triggers Claude's synthesis pass on threshold crossings; Codex doesn't touch ingredient `contamination_profile` blocks.
- Do NOT create new ingredient pages (auto-stub script handles ≥freq-2 separately).
- Do NOT create new product pages (Karen's Step 0 Lock per Part 10).
- Do NOT edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` marker blocks (generator-owned).
- Do NOT modify `data/evidence/product_source_routing_audit.csv` by hand.
- Do NOT push to remote in the audit role (the daemon tick pushes; Codex commits, daemon pushes on its next tick).
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

Your role this session: cross-vendor audits from data/evidence/audit-queue.csv. Pick the next pending row, audit the page per docs/gpt-collaboration/audit-prompt.md, apply real findings, commit, update queue, move on. Work until queue is exhausted or you've audited 10 pages in this session, whichever comes first.

If the queue is empty (all rows status starts with audited-), pivot to your secondary role: Marker-corpus Priority 4 drafts to raw/gpt-drafts/. Read docs/gpt-collaboration/system-prompt.md for the drafter format.

Do NOT touch manual-fetch ingest (that's Claude's daemon). Do NOT run synthesis. Do NOT create new ingredient/product/regulation pages without Karen. Do NOT push to remote. All other prohibitions in docs/codex-collaboration/README.md apply.

When done, write a one-paragraph summary of what you did to data/evidence/codex-runs/<YYYY-MM-DD>-<HHMM>.md.

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
