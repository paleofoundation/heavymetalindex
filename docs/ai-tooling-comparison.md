---
type: comparison-log
purpose: durable A/B comparison of AI tools running the same underlying model (Opus 4.7) on the Heavy Metal Index build
maintained_by: Claude Code (with Karen's audit)
started: 2026-05-26
---

# AI Tooling Comparison Log — Heavy Metal Index Build

## Why this exists

Karen is running two AI tools in parallel on this build, both wrapping Claude Opus 4.7 underneath:

- **Claude Code** (Anthropic's CLI harness): direct shell, file edit, bash execution; session-bound; no native task tracking.
- **Paperclip**: project-management-tool harness; issue tracker with sub-issues, status, attachments, parent-child relationships; produces PRs into the same repo.

Same model. Different harnesses. That's a near-clean A/B test on what each wrapper adds or subtracts. This log captures the comparison honestly so the data survives across sessions and becomes a durable artifact Karen can use for her own decisions or share with Anthropic later if she chooses.

## The contract (so this log stays trustworthy)

1. **Same standard applied to both tools.** A failure in Claude Code is logged with the same prominence as a failure in Paperclip. If Claude Code soft-pedals its own mistakes here, the Paperclip critiques become motivated reasoning, not data.
2. **Karen audits.** When she notices I've been soft on Claude Code or harsh-without-cause on Paperclip, she corrects the entry. Corrections become part of the record.
3. **Concrete observations only.** Each entry names a specific deliverable, specific behavior, specific outcome. No "Claude Code feels faster" — instead "Claude Code committed daemon fix in 4 min; Paperclip's equivalent took 23 min planning + queued for execution."
4. **My biases are stated up front** (next section). Reader weights accordingly.

## Stated biases (Claude Code, writing this log)

- I am the tool being compared. Even without intent, my response patterns may slope toward defending the surface I'm running on.
- My Paperclip critiques have been substantively valid (brand firewall, dual-model cost, Wave 1 producing no cell-promotion progress) but the *intensity* of those critiques is probably higher than I'd apply to equivalent Claude Code design choices.
- Mitigation: every Paperclip-critical entry below is paired with an equivalent-rigor self-critique of Claude Code where applicable. Karen flags asymmetry.

## Comparison criteria

| Axis | What we measure |
|---|---|
| Plan-to-code ratio | Tokens/time spent planning vs. tokens/time spent on code that shipped |
| Time to first useful output | Wall-clock from task start to merged commit or working artifact |
| Defects per delivered unit | Bugs / regressions / rework after merge |
| Karen-in-loop incidents | Times the tool asked when explicitly told not to |
| Architecture quality | Subjective, audited; "would a senior engineer call this well-shaped?" |
| Recovery time from failure | Once a problem is identified, how long until it's fixed |
| Operational reliability | Does the system stay up? Does the daemon halt? Are commits clean? |
| Conspicuous capabilities lacked | Things the other tool has that this one doesn't |

## Deliverable log

### 2026-05-25 — Sprint mode throttle removal (Claude Code)

**Task:** Remove throttles on daemon/wishlist/fetcher to push toward 95% cell confidence in 3 days.

**What shipped:** `tools/autonomy/completion-matrix.mjs`, throttle bumps in `daemon-tick.sh`, parallel fetcher in `find-candidates.mjs`, sprint dashboard, hygiene script, several prompt revisions.

**Time/tokens:** Multi-hour session, ~hundreds of tool calls. Exact token count not measured.

**Defects discovered after merge:**
- 7.2% true-positive rate on first throttle-off Codex fire (changed three knobs at once, didn't end-to-end test).
- 8 junk source pages from Marker bulk ingester that blocked the daemon for 2+ hours.
- 16-hour daemon hang because no tick-level timeout was added when per-PDF Opus invocation throughput was bumped.
- Calibration oscillation on wishlist filter threshold (3 → 1 → 2 → 1) costing 15+ hours of sprint time.

**Karen-in-loop incidents:**
- Asked "Want me to do #2 while you check #1?" when explicitly told not to ask. Cost: ~15 hours.
- Said "all those have been removed" when only two of the rogue patterns had been swept.

**Strengths demonstrated:** Immediate execution. Daemon fix in same session as diagnosis. Hygiene script written and run inline. Comparison and diagnostic queries returned in seconds.

**Honest assessment:** Pattern of "change many things at once, ship, discover regression, fix, repeat" cost real wall-clock time. Architecture-level thinking weak compared to Paperclip's HMI-9 plan that surfaced the same problems structurally.

---

### 2026-05-26 — HMI-9 plan: continuous data-gap-fill ingest system (Paperclip)

**Task:** Design + decompose the continuous ingest spine.

**What shipped:** Plan document with 4 waves, ~12 sub-issues, dependencies, schemas, source-adapter interface contract, write-barrier contract, dual-model extractor design, coverage dashboard, defensibility report. Sub-issues HMI-11/12/13/14 created and in_progress.

**Time/tokens:** 446k tokens, 23 minutes runtime (per Paperclip's own report).

**Code shipped at time of plan:** 0 commits in repo.

**Strengths demonstrated:** Architecture rigor materially better than Claude Code's incremental work. Surfaced design problems (provenance contract, write barrier, disagreement as first-class artifact) that Claude Code had not raised. Sub-issue decomposition with explicit dependencies is project-management discipline Claude Code lacks natively.

**Concerns flagged by Claude Code's review:**
- Plan-to-code ratio: 446k tokens for planning artifacts; zero code shipped at the time of plan.
- Vendor lock-in defaults (Vercel Queues, Functions, Blob, AI Gateway) buried as "open questions" with Vercel-heavy defaults.
- Wave 1 produces zero cell-promotion progress (foundational only).
- Doesn't directly address the actual current bottleneck (83% of aggregate-CSV cells BLOCKED on thin pools).
- Dual-model cost: ~2× inference per candidate.
- Disagreement queue accumulates without human-resolution path in v1.

**Karen-in-loop incidents:** None during planning phase.

---

### 2026-05-26 — HMI-3: data model v0 (Paperclip)

**Task:** Design + implement v0 data model with entities, migrations, seed, tests.

**What shipped:** PR #60 — Drizzle ORM schema (Postgres dialect), PGlite for dev, migrations applied, seed with 9 metals / 8 products / 13 findings, ERD at `docs/data-model.md`, end-to-end tests (122/122 pass), reconciliation addendum with the live wiki.

**Time/tokens:** Not measured per the Paperclip report.

**Code shipped:** PR #60 open, pending Karen approval.

**Strengths demonstrated:**
- Real code, not just planning.
- Reconciliation addendum specifically engages with the wiki structure (cite-keys, slugs, evidence tiers, HMTc-v2.json, CLAUDE.md Parts 9/12/26).
- Scope discipline: methodology choices needing a Scientific Advisor are flagged and held.
- Provenance enforced structurally: `contamination_finding.study_id` NOT NULL, CHECK constraint on product/ingredient attachment.
- Confidence encoded as real fields, not yes/no.

**Concerns flagged by Claude Code's review:**
- Brand firewall enforced at query layer, not by physical database separation. Violates CLAUDE.md Part 12 + Part 26 explicitly.
- PR gated on Karen approval — reintroduces the Karen-in-loop pattern she's trying to retire.
- Sample-granularity DB vs synthesis-granularity wiki: seed claims "real wiki source values" but the wiki doesn't carry per-sample data. Source not explicitly documented.
- 122/122 tests at 13-finding seed only proves toy-scale behavior.
- PGlite "portable to Neon" is unfalsified until provisioning happens.
- Schema is empty without wiki→DB ingest tool, which is deferred to follow-up.

**Karen-in-loop incidents:** 1 — PR confirmation request.

**Action taken:** Karen pasted Claude Code's review as a follow-up issue for Paperclip to address before merge.

---

### Standing assessment

**Where Claude Code has measurably won:** immediate operational fixes (killing hung daemon, editing scripts inline, real-time repo state diagnosis), cheaper marginal cost per small task.

**Where Paperclip has measurably won:** architecture quality (HMI-9 plan), code defensibility (per-edit audit row contract, NOT NULL provenance chain in schema), sub-issue tracking that survives across sessions, planning rigor.

**Conspicuous capabilities lacked:**
- *Claude Code lacks:* native task tracker (TodoWrite exists but is session-bound), durable cross-session planning artifacts, sub-issue dependency graphs, attachable documents, parent-child task relationships, structured status (in_progress / in_review / blocked / done).
- *Paperclip lacks (apparently):* direct shell execution in the same context as planning, real-time repo state queries without an explicit fetch step, the ability to fix something inline while diagnosing it.

**Failure-mode comparison:**
- *Claude Code failures are observable* (commits land or don't; scripts run or don't; daemon halts visibly). Recovery is fast because the harness can act on the diagnosis immediately.
- *Paperclip failures might be invisible* if "in_progress" lingers indefinitely without code shipping. None observed yet; risk worth watching.

**Net read at time of this entry:** Paperclip is the better tool for "design and ship a clean spine"; Claude Code is the better tool for "keep the existing system running while the spine gets built." They are complementary, not substitutes. Running both in parallel on this build is producing more value than either alone, with some coordination cost that the comparison-log overhead is meant to manage.

---

## How to use this log

- Add an entry per Paperclip or Claude Code deliverable as it ships.
- For Paperclip: copy the PR description, note what shipped, log Claude Code's review concerns.
- For Claude Code: log the tool calls + outcome + any defects discovered later.
- Karen can edit any entry. Edits become the record of truth.
- If Karen ever shares this log externally (e.g., with Anthropic), the audit trail makes the comparison defensible.
