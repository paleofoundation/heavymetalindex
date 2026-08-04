---
type: doc
purpose: Spec for the PDF→source-page backfill pipeline (goal, constraints, context, mechanics)
audience: [karen, claude-code, codex, kimi]
updated: 2026-07-28
---

# Ingest backfill pipeline

## Goal

Turn ~11,400 staged PDFs into defensible wiki source pages, continuously, so every HMTc category has enough evidence to publish a standard that survives hostile expert review.

Two hard sub-goals: **Karen presses no buttons**, and **Claude's metered tokens are not spent per page**.

## Problems hit (why the design looks like this)

| # | Problem | Status |
|---|---|---|
| 1 | FRANK burned metered Claude tokens unattended for a month (2026-06-09) | launchd disabled; never re-enable |
| 2 | Ingest pinned to concurrency=1 — drafting sessions each ran `git commit`, raced on `.git/index.lock` | fixed: drafters no longer commit |
| 3 | 3 papers per fire, manually fired | fixed: `drain.mjs`, N parallel workers, continuous |
| 4 | DOI-based dedup misses no-DOI docs (e.g. EU regulation with `doi: null`) | fixed: filename/raw_path/sha256 gate |
| 5 | `agent-events.jsonl` frozen since 2026-06-11 — the coordination file wasn't actually written | fixed: all lanes append |
| 6 | Tracker has ~0% coverage for several staging roots; 4,336 rows vs 3,137 real files | open |
| 7 | Tracker had committed git conflict markers as CSV rows | fixed (3cd1f65d5) |
| 8 | Audit was a manual ChatGPT paste; 17 pending/failed, most pages never audited | fixed: `audit-drafts-with-codex.mjs` |
| 9 | Skipped PDFs write no page → rediscovered and re-assigned every cycle | fixed: `drain-assigned.jsonl` |
| 10 | 910 uncommitted changes in the working tree, incl. a complete EU nickel regulation page unversioned since 2026-06-22 | open |
| 11 | `raw/` roots are symlinks to `/Volumes/HMI-Library`; unmounted reads as 0 PDFs, silently | mitigated: mount gates |
| 12 | ChatGPT fast-mode cannot produce defensible pages (no taxonomy binding, no per-claim provenance, firewall-naive) | resolved: structured prompt + audit, not raw fast-mode |

## Constraints

**Editorial (non-negotiable).** Part 2: no thresholds, percentiles, cross-source consensus, or consumer advice on wiki pages. Part 12: no brand name attached to a contamination value. Part 14: speciation (tAs/iAs, tHg/MeHg, Cr/Cr-VI) is never substitutable. Part 5b: frontmatter arrays drive routing fan-out; models write them at the source's true specificity and never hand-maintain the routing audit.

**Economic.** Claude = metered, so Claude never runs per-page work. Codex (ChatGPT Plus) and Kimi = flat-rate subscriptions, so they carry all volume.

**Mechanical.** Exactly one process may commit. Publishing is manual-only (`deploymentEnabled: false`); `git push` is backup, not deploy. Codex CLI runs approval-bypassed and headless; Hermes is approval-gated and interactive.

**Human.** Karen is a non-coder and will not babysit a terminal.

## Necessary context

An agent doing this work must be able to read these. Missing any one produces non-defensible pages.

| Path | Why |
|---|---|
| `CLAUDE.md` | Parts 2, 5b, 12, 14 — the firewalls and routing rules |
| `docs/codex-collaboration/sprint-ingest-prompt.md` | **Canonical workflow.** Scope lanes (a1–a4), skip vocabulary, page format, frontmatter discipline |
| `docs/gpt-collaboration/audit-prompt.md` | The 5 checks + PROMOTE/REVISE/QUARANTINE verdict contract |
| `docs/gpt-collaboration/taxonomy-snapshot.md` | Legal slug vocabulary (Check 2 depends on it) |
| `docs/page-templates.md` | Source-page schema and mandatory sections |
| `docs/conventions.md` | Units, metal names, evidence tiers, ingest scope |
| `wiki/ingredients/`, `wiki/products/` | Existing slugs — routing arrays must bind to these, not invent |
| `data/taxonomy/hmtc-v2.json` | Category/subcategory truth |
| `raw/` staging roots (via `/Volumes/HMI-Library`) | The PDFs |
| `wiki/sources/` | Dedup target + output |
| `data/evidence/autonomy/agent-events.jsonl` | Shared cross-agent ledger |
| `data/evidence/autonomy/manual-fetch-tracker.csv` | Per-PDF status |
| `data/evidence/autonomy/drain-assigned.jsonl` | What the drainer already looked at |
| `data/evidence/autonomy/audit-verdicts.jsonl` | Audit results the promoter acts on |
| `data/evidence/audit-queue.csv` | Human-readable audit trail |
| `tools/autonomy/{drain,audit-drafts-with-codex,promote-audited-drafts}.mjs` | The pipeline |

## How it functions

```
drain.mjs  (start once; loops until drained / --max-hours / ~/.hmi-drain.STOP)
  │
  ├─ 1. INDEX      build handled-set: wiki/sources raw_path+basename, tracker
  │                 ingested/claimed/skipped, skip-list, drain-assigned
  ├─ 2. DISCOVER   walk staging roots (find -L), subtract handled-set
  ├─ 3. ASSIGN     disjoint slices, recorded to drain-assigned.jsonl BEFORE running
  │                 (no claim race: assignment is authoritative)
  ├─ 4. DRAFT      N parallel Codex workers. Follow canonical prompt.
  │                 NEVER commit. Write untracked wiki/sources/<cite-key>.md
  │                 Skip regulation PDFs (legal limit values → conductor)
  ├─ 5. AUDIT      audit-drafts-with-codex.mjs, concurrent.
  │                 Different engine grades each draft against its source PDF.
  │                 5 checks → PROMOTE | REVISE | QUARANTINE
  │                 FAIL-CLOSED: unparseable/timeout/error → QUARANTINE
  ├─ 6. PROMOTE    promote-audited-drafts.mjs — the ONLY committer, serial, no LLM
  │                 PROMOTE→commit (one page/commit) · REVISE→left uncommitted
  │                 QUARANTINE→wiki/sources/_quarantine/
  └─ 7. LOOP
```

**Roles.** Codex/Kimi draft and audit (flat-rate, all volume). A deterministic script commits. Claude samples ~5–10%, handles QUARANTINE + escalations, and writes the standards. Claude is not in the per-page loop.

**Why parallel is safe.** Drafters never commit, so there is no `index.lock` race. One serial committer, N drafters.

**Coordination.** File-based only, never chat: `agent-events.jsonl` (actors: `drain`, `codex-auditor`, `promoter`, `kimi`).

**Kill.** `~/.hmi-drain.STOP` · `~/.hmi-audit.STOP` · `~/.hmi-promote.STOP` · `~/.frank.STOP` (all).

**Run.**
```bash
node tools/autonomy/drain.mjs --workers=6 --max-hours=12
```

## Known gaps

- Never run end-to-end live; audit lane proven on one real page, promoter proven in a throwaway repo.
- Kimi lane (`~/.hermes/skills/hmi-ingest-kimi/SKILL.md`) built, never fired.
- Claude's sampling pass is manual — no scheduled QC.
- Throughput ≈ 40 pages/hour at 6 workers ⇒ ~11k is ~2 weeks continuous.
- Items 6 and 10 above remain open.
