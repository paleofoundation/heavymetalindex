---
title: FRANK v2 — autonomous ingest/audit architecture
audience: [engineer, claude, codex, karen]
updated: 2026-06-10
supersedes: tools/autonomy/frank.mjs (disabled 2026-06-09)
related: [docs/continuous-ingest-architecture.md, token-runaway-incident-2026-06-09.md]
status: spec
---

# FRANK v2 — autonomous ingest/audit architecture

This document specifies the replacement for the FRANK orchestrator, which was fully
disabled on 2026-06-09 after a single-day cost runaway (~40% of the weekly Claude
allowance and ~$280 in Vercel build charges, most of it producing no net output).
It is a synthesis of four independent design reviews (strategic, adversarial
red-team, execution/shippability, methodology/cost-engine-routing). Where the lenses
disagreed, the disagreement is resolved explicitly and the resolution is marked.

The spec is written to be executed. It is not a proposal to debate. The phasing
(Part 7) is the binding rollout; everything before it is the target state that the
phasing converges to.

## Part 1 — Goal, non-goals, and success criteria

### Goal

Restore genuine unattended throughput on the Heavy Metal Index corpus — the
complete-literature coverage that the commercial thesis (CLAUDE.md Part 1) depends
on — under a control plane that makes the 2026-06-09 runaway class structurally
impossible rather than merely discouraged. Per Karen's directive, cost is not the
deciding factor. The deciding factors are **useful-output-per-unit-work** and
**structural runaway-safety**. A system that is safe but produces nothing fails the
goal exactly as hard as a system that produces nothing while spending.

### Non-goals

- **Not** a Claude-driven ingest swarm. Codex (free on the ChatGPT Plus subscription)
  authored 100% of the day's real output on 2026-06-09; the Claude swarm was net-zero.
  v2 does not rebuild a paid Claude producer to compete with a free, working one.
- **Not** a resurrection of the launchd + keep-awake + self-respawn pattern. That
  pattern is forbidden (see Part 2, root cause 1).
- **Not** a new orchestrator written from scratch. The durable queue spine already
  exists in `tools/runtime/` and is tested. v2 reuses it.
- **Not** liveness monitoring. The incident proved a self-healing system optimized to
  stay alive cannot detect a runaway and tends to sustain one. v2's heartbeat is
  output-per-spend, not "the loop is alive."

### Testable success criteria — "autonomy that is not costly and pointless"

These are the bars the system must clear to be allowed to run. They are measured
weekly off durable artifacts, not asserted.

| # | Criterion | Measurement | Consequence if failed |
|---|---|---|---|
| SC-1 | **Net backlog burn-down** | Open audit-queue rows (`pending` + spawn-failed + dead-letter-needs-triage) trend down week-over-week. | If the queue grows for a measurement window, the autonomy is paused until the cause is found. |
| SC-2 | **Zero unaudited landed edits** | Every wiki edit from the pipeline carries a matching `wiki_edit_audit.jsonl` row in the same commit (HMI-9 invariant #4), enforced by the pre-commit barrier. | Any breach blocks the commit. |
| SC-3 | **Positive per-engine yield** | For each engine, durable artifacts produced / spend stays above a floor over a rolling window; spend-rises-while-output-flat trips the governor (Part 5). | The offending lane pauses and surfaces a blocked issue. |
| SC-4 | **Quality floor holds** | Audit-revision rate stays inside a sane band (not driven to ~0 by rubber-stamping, not exploding toward 100%); a sampled high-tier re-check of cheap-model extractions stays under an error threshold (Part 6). | Quality breaker trips the cheap lane to a higher tier or pauses it. |

SC-1 and SC-2 are the two non-negotiable bars (from the strategic lens): a system that
clears SC-2 but not SC-1 is treading water; one that clears SC-1 but not SC-2 is
manufacturing the exact defect — unaudited corpus growth — that destroys the
defensibility asset. SC-3 and SC-4 are the guards that stop SC-1 from being gamed by
churning low-value or low-scrutiny work to empty the queue fast.

## Part 2 — Four root causes this design must structurally prevent

Each row names a 2026-06-09 root cause and the v2 mechanism that makes it *impossible*,
not merely *discouraged*. "Impossible" means there is no code path that can reach the
failure without first being refused by a primitive that fails closed.

| Root cause (2026-06-09) | What actually happened | v2 structural mechanism (makes it impossible) |
|---|---|---|
| **1. Always-on, keep-awake, self-respawning loops** | FRANK ran 24/7 under a keep-awake timer; orphaned shell loops re-spawned themselves after their parents exited. | No process stays alive to do work. Workers are **bounded and exit**. Scheduling is a launchd `StartInterval` timer with **single concurrent run** (no caffeinate, no self-respawn). Crash-safety comes from idempotent queue re-lease, never from a process refusing to die. A lint rule bans `caffeinate` and self-`launchctl load` from autonomy scripts. |
| **2. Every agent on Opus 4.8 / 1M / `--effort max`, even for deterministic row-sorting** | `drain-audit-queue.mjs` defaulted `model = 'claude-opus-4-7'` for a structured row-sort; FRANK ran max-effort Opus across all lanes. | **Engine + effort is a required field** in a single routing table (Part 4), keyed by work-type, read at dispatch. No agent spawns without an explicit `(engine, effort)` from the table. A missing entry is a **hard error**, not a default-to-Opus. Deterministic work-types route to **no LLM**. "Max-effort Opus on a row-sort" is unreachable. |
| **3. No metering of spend / spawn-rate / failure-rate anywhere** | The only "self-healing" watched liveness and output, never spend or rate. No circuit breaker existed; "budget" strings in the code were per-stage timeouts (`ingestTimeoutMs` etc.), not cumulative meters. | A single in-repo **Governor** (Part 3, Part 5) is the **only** thing allowed to authorize a spawn. Every spawn calls `governor.requestSpawn(...)`, which atomically checks spawn-rate, debits budget, checks failure-rate and per-engine spend/output, and returns a lease or a refusal. **Fails closed**: if the Governor is unreachable or its ledger unreadable, `requestSpawn` returns REFUSED. A lint rule bans `child_process` spawn of any model CLI outside the Governor module. |
| **4. Defective retry loop requeued 154 spawn-failures and re-burned max-effort Opus** | `drain-audit-queue.mjs` selects rows whose status is in `{pending, pending-audit-spawn-failed}` on every run, and on failure only pushes to `failed[]` + writes a report — it **never mutates the row's status**. Same 154 rows re-selected and re-spawned every cycle. | **Durable item state advances on every outcome, including failure.** The CSV-scan-and-respawn pattern is replaced by the lease/ack/nack/dead-letter queue already in `tools/runtime`. A spawn failure calls `nack` (increments attempts; dead-letters at `MAX_ATTEMPTS=5`) **before the worker can exit**. A killed worker relies on lease-expiry re-lease (also increments attempts). The only legal terminal states are `ack`, `nack(retry)`, `dead_letter`. A "logs and continues" wrapper that lets a failed item keep a re-selectable status is **forbidden** and caught by a test asserting a 5-times-failing row lands in dead-letter and is never re-selected. |

## Part 3 — Architecture

The system has four mechanical pieces — a durable queue, bounded workers, a multi-engine
split, and a Governor control plane — plus the existing routing and audit layers it
feeds. The lenses agreed on this shape; the resolution work was in the Governor's
contract and the retry semantics, both specified below.

### 3.1 Durable work queue (reused: `tools/runtime/`)

The queue spine already exists and its tests pass (`local-queue.test.mjs`,
`workers.test.mjs`). v2 reuses it unchanged for the mechanics:

- `enqueue(topic, body)`, `lease(topic, leaseMs)`, `ack(messageId)`,
  `nack(messageId, error) → { dead_lettered }`, `listDeadLetter(topic?, limit?)`.
- `lease()` hides a message for `leaseMs`; if the worker dies before `ack`, the message
  re-leases at lease-expiry and `attempts` increments — this is the crash-safety
  guarantee that replaces self-respawn.
- Retry policy is centralized: `MAX_ATTEMPTS = 5`, exponential backoff base 30s ×2,
  cap 1h, ±25% jitter. Dead-letter after 5 attempts.
- Backends are interchangeable by `HMI_RUNTIME`: `local` (SQLite, laptop/CI) and
  `vercel` (Vercel Queues + Fluid Compute). Same worker code targets either.

**One semantic change to the queue layer (new):** attempts must be capped at the
**gap level**, not only the message level. A gap that dead-letters K times transitions
`open_gaps.jsonl` status to `quarantined` and is removed from the hourly discovery cron
rotation until a human or a successful schema change clears it. Without this, the
hourly cron re-discovers the same un-fetchable gap forever, each time enqueuing a fresh
message with `attempts=0`, so the per-message `MAX_ATTEMPTS` never trips (red-team
finding). Discovery must read gap quarantine state before enqueueing.

### 3.2 Bounded stateless workers that exit

Workers pull from the queue, process one message, advance its durable state, and exit.
They hold no long-lived loop. The lens disagreement here — execution argued
boundedness-via-exit is the fix; red-team showed FRANK *already* had bounded subprocess
stages with SIGKILL timeouts and still ran away — is **resolved as follows**:

> Bounded workers are **necessary but provably insufficient**. Boundedness limits the
> cost of one invocation; the runaway lived in `invocation_rate × cost_per_invocation`,
> which no per-invocation bound can see. Therefore v2 keeps bounded workers **and** puts
> a Governor in front of them that meters the **aggregate**. The design must never treat
> "workers exit" as the runaway defense.

Workers are idempotent on `candidate_id` / `extraction_id` / `edit_id` (existing keys),
so a re-lease after a crash reproduces the same JSONL row, not a duplicate.

### 3.3 Multi-engine split (the permanent role separation)

The strategic lens's core finding, accepted: the binary is not "autonomy vs. no
autonomy" but "which layer is autonomous." The roles are decoupled **permanently**
through the durable queue so neither can starve or run away the other.

- **Codex (GPT-5.x, free on the Plus sub) is the autonomous INGEST producer.** It
  authors schema-bound source pages. It already produces real output.
- **Claude is the metered AUDIT + SYNTHESIS consumer.** It drains what Codex produces:
  the 5-check source-to-row audit, and Part 9 synthesis. Claude does **not** author
  routine source pages.
- The two communicate only through durable artifacts (the queue, the audit log, the
  routing audit), consistent with the multi-Claude-coherence principle — there is no
  live channel and none is needed.

**Codex is a first-class engine in the routing table (Part 4), not a side channel.**
On fit-and-quality grounds (cost aside) it was the only engine that cleared work that
day. But it is also a **strategic single point of failure** (red-team + execution): the
entire productive path rides on one person's ChatGPT Plus subscription, OpenAI's terms,
and an unsupported CLI invocation. Mitigations:

- The Governor treats **Codex-lane-stalled** (output flat *and* spend zero) as its own
  alarm, not a healthy idle state. A silent producer is a failure, surfaced like any
  other tripped breaker.
- A Codex-binary-missing or auth-lapsed condition is a hard **blocked** stop, never a
  fail-open fallback to paid Opus authoring.
- Paid Anthropic engines (Haiku/Sonnet) are the documented **overflow** producer for
  schema-bound authoring when Codex is saturated — capacity exists, but it is opt-in and
  metered, never the silent default.

**Shared work-claim ledger (resolves the double-spend + commingled-commit hazard).**
Two engines against one git index is both a double-spend vector and a corruption vector
(MEMORY.md already flags the shared-index commit race as a live hazard). Both engines
**lease from a single shared work-claim ledger keyed by `gap_id`/`cite_key`** before
doing work — not two private queues. A lease held by Codex makes Claude skip the same
gap. Each engine commits **only files it explicitly staged by path** (never `git add -A`),
and ideally from **separate git worktrees** so indexes never commingle. The Governor's
per-engine meter is what makes a bypassed lease visible.

### 3.4 The Governor control plane

The Governor is a single in-repo module. It is the **only** authorizer of spawns. It
fails closed. Its contract:

```
governor.requestSpawn({ engine, model, effort, workType, estCost }) → lease | REFUSED
```

`requestSpawn` is a single critical section (advisory-locked ledger file or
single-writer process) that atomically:

1. Verifies no STOP file (`~/.frank.STOP`, kept for muscle memory) and no tripped breaker.
2. Checks the **global spawn-rate token bucket** (≤ R spawns/hour system-wide, hard,
   across all engines/queues/topics).
3. **Debits** the rolling token + dollar budget (per-run, per-day) for the engine.
4. Checks the **failure-rate breaker** over a sliding window of terminal outcomes.
5. Checks the **per-engine spend-vs-output breaker** (Part 5).
6. Returns a signed lease, or REFUSED with a reason.

If the Governor process is unreachable, or its ledger cannot be read or written, or the
clock is skewed past tolerance, `requestSpawn` returns **REFUSED** — the inverse of
FRANK's "logs and continues." There is no spawn primitive in the codebase that does not
go through it; a lint rule enforces this by banning `child_process` spawn of model CLIs
outside the Governor module.

The Governor's breakers, all **per-engine**, all **halting** (not slowing):

- **Spawn-rate cap** — global token bucket. Bounds `invocation_rate` directly. This is
  the dimension a naive backoff cannot bound: 154 individually-legal retries still
  aggregate into 154 spawns; the token bucket forbids the aggregate.
- **Budget cap** — token + dollar, per-run and per-day, debited *before* launch. This is
  the HMI-9 "Cost backstop" (`docs/continuous-ingest-architecture.md`) generalized from
  the deferred Paperclip role config into in-repo, in-the-spawn-path, fail-closed code.
  Karen's "regardless of token spend" directive does **not** loosen this into a no-op:
  the binding guards against runaway are the **spawn-rate and failure-rate breakers**,
  not the dollar ceiling. The dollar cap can be set high; the rate and failure breakers
  are what stop a runaway, so "regardless of spend" cannot become the loophole.
- **Failure-rate breaker** — over a sliding window of terminal outcomes; **opens and
  halts new leases** when dead-letter + retry rate exceeds threshold. A high system-wide
  failure rate means the work itself is broken (bad source set, schema mismatch, auth
  failure), and continuing to spend on it is definitionally pointless. The 16% defect
  rate on 2026-06-09 (154 failed / ~985) is the calibration point this breaker exists to
  catch.
- **Spend-vs-output breaker** — per engine, output attributed by author/model tag
  (Part 5). A blended ratio is *worse than none* because it launders a Claude runaway
  behind Codex's free output.
- **Quality breaker** — Part 6.

## Part 4 — Engine-routing table

The pipeline has eight work-types in three determinacy bands. Engine tier tracks the
band; effort tracks contestability. The table is a **durable artifact** in
`data/evidence/` (so Codex, Claude, and future sessions stay coherent), read by the
Governor at dispatch. A missing or unknown work-type is a **hard stop** (fail-closed),
not a default.

| # | Work-type | Band | Engine / tier | Effort | Justification |
|---|---|---|---|---|---|
| 1 | Deterministic extraction (CSV→rows, unit normalization, censoring flags) | Deterministic | **No LLM** (`extract-source-values.mjs`); Haiku normal only as last-resort table repair | n/a | Schema-bound, verifiable, zero contestability. An LLM here only adds variance. |
| 2 | Routing fan-out / lint | Deterministic | **No LLM** (`build-routing-audit.mjs`, Part 18 lint) | n/a | CLAUDE.md Part 5b forbids a model maintaining routing by hand; these are deterministic generators. |
| 3 | Standards / percentile / basis arithmetic | Deterministic | **No LLM** (`basis-conversion.mjs`, percentile math) | n/a | Part 19 is a locked formula. No judgment to make. |
| 4 | Auto-fetched ingest (source-page authoring from clean PDFs) | Judgment-bounded | **Codex GPT-5.x (PRIMARY)**; Sonnet high = paid overflow | medium | Free on the Plus sub *and* produced 100% of the day's real output; quality sufficient for schema-bound authoring. Opus never authors a routine source page. |
| 5 | Manual-fetch ingest (messier PDFs, OCR, products/matrices judgment) | Judgment-bounded | **Sonnet (paid floor)**; Codex when clean enough | high | Judgment-bounded, answer checkable by the auditor. Does not need Opus. |
| 6 | Source-to-row audit / adjudication (the 5-check audit) | Judgment-bounded | **Sonnet**; cross-check by a **different** engine (Codex GPT-5.x), not a second Opus | normal | Per HMI-9 the disagreement is the first-class signal; two independent cheap engines surface it better and cheaper than one max-effort Opus. |
| 7 | Discovery scoring (HMI-fit ranking of candidates) | Judgment-bounded | **Haiku** | normal | Relevance classification against fixed criteria; embarrassingly cheap. |
| 8a | Contamination-profile synthesis (Part 9 pooling → typical_ppb / p95) | Judgment-open | **Opus** | normal (high only on contradiction-trigger and 2-A-tier-conflict) | Genuinely analytical, but inputs are already-extracted structured rows; reserve high effort for the contradiction cases. |
| 8b | Defensibility audit + standards percentile-SELECTION judgment (clean/dirty designation, precautionary/feasibility rationale, Part 2 drift check) | Judgment-open | **Opus** | high | The litigation-facing, contestable, asymmetric-authority surface. The one place max-effort genuinely pays for itself. |

**Retries are engine-downgrading and bounded (new).** A failed item retries on a
**cheaper** engine first (a failed Opus synthesis retries on Sonnet before it retries on
Opus), and dead-letters to a human-triage lane after the bounded attempts rather than
looping. This forecloses the 154-requeued-spawn-failures-on-max-effort-Opus defect by
construction: a retry can never *escalate* cost on the same item.

**Resolved tension (effort on synthesis).** Methodology argued normal-effort Opus
suffices for synthesis; red-team warned normal effort may under-resolve genuine
multi-source contradictions and silently weaken `contamination_profile` values that feed
both the public wiki and HMTc thresholds. Resolution: **normal effort is the default,
and the Part 9 contradiction-trigger and 2-A-tier-conflict trigger are the things that
escalate to high effort.** The escalation is mechanical (driven by the trigger
conditions in CLAUDE.md Part 9), not a per-session judgment call, so the cost saving
cannot come out of synthesis quality on the cases that matter.

## Part 5 — Output-accountability metric and how the Governor trips

### The metric

Per work-type, per engine, per Governor window (hourly): **yield = durable artifacts /
spend**. Artifacts are counted only at **terminal, verified states** — never at
"attempted" or "spawned," or the governor reads churn as productivity (the precise way
FRANK looked busy while net-zero). The countable artifacts are already first-class:

- Source pages written: `git` adds under `wiki/sources/`.
- Contamination-profile cells synthesized: `review_events.jsonl` rows / populated cells.
- Audit rows **cleared to a terminal verdict**: `audit-queue.csv` status transition to
  `audited-promote` / `audited-revised` / `audited-quarantine` — explicitly **not**
  `pending-audit-spawn-failed`.
- Gaps closed: `open_gaps.jsonl` status → `closed` **with a matching `wiki_edit_audit`
  row** referencing the same `gap_id`.

Spend is metered **per engine**: Codex/GPT-5.x = $0 API (sub-billed; counted as
wall-clock + spawn-slots), Haiku/Sonnet/Opus = token cost from the API usage ledger. The
Governor records `(artifacts_delta, spend_delta, terminal_failure_count, attempt_count)`
per window per work-type.

### Per-engine attribution (load-bearing, resolved)

Output is attributed to the **engine that produced it** via git author / model tag
(`codex` is already a distinct author in the history). A blended `spend(all) / output(all)`
ratio would have read GREEN on 2026-06-09 — 211 pages against combined spend — the exact
inverse of reality, because Codex's free output would have laundered the Claude runaway.
The breaker therefore computes `Claude-spend / Claude-attributed-output` and
`Codex-spend / Codex-attributed-output` **separately**.

> Attribution integrity is now load-bearing for a safety breaker (red-team objection).
> Therefore: per-engine commits stage only explicit paths and run from separate
> worktrees (Part 3.3) so commits never commingle and the author tag stays reliable. If
> attribution cannot be established for a commit, the Governor treats that window as
> **untrusted** and trips conservatively rather than crediting the output.

### How the Governor trips on spend-rises-while-output-flat

Two trip conditions, both **halting**, both per-engine:

1. **Spend-rises-while-output-flat** — `spend_delta > budget` **AND** `yield < floor` for
   **N consecutive windows**. This is the literal signature of the incident: Claude spend
   climbing while Claude-attributed output stayed flat-or-falling.
2. **Failure-rate** — `terminal_failure_count / attempt_count > threshold` in any window
   (the 16% that went unwatched). On trip: **pause the offending lane, do not requeue on
   the same engine, surface a `blocked` status.**

## Part 6 — How v2 itself could still run away — and the mitigation

Every red-team failure mode is carried here with its concrete mitigation. None is omitted.

| Failure mode (how v2 still runs away / goes pointless) | Concrete mitigation |
|---|---|
| **Status never advances on failure** (the literal 154-row defect: failure only logs, row stays re-selectable). | Failure must mutate durable item state **inside the same atomic transaction as the lease**: the worker increments `attempts` and at `attempts ≥ MAX` moves to `dead_letter` **before the process can exit**. The only legal terminal states are `ack`, `nack(retry)`, `dead_letter`. A "logs and continues" wrapper is forbidden; a killed worker relies on lease-expiry re-lease, never an outer CSV-scan re-enqueue. Test: a 5-times-failing row lands in dead-letter and is never re-selected. |
| **Bounded workers are insufficient** (FRANK already had SIGKILL'd bounded stages; runaway lived in invocation-rate × cost). | The Governor meters the **aggregate** (sum of spend across all invocations in a rolling window), not per-item cost, via a single serialized accountant. Every spawn debits-and-checks in one critical section before launch. Boundedness is kept but is never treated as the runaway defense. |
| **The budget cap is doc-prose, not enforcement** (HMI-9's "Cost backstop" was deferred to a Paperclip role config that was never built). | The governor is **in-repo, in the spawn path, fail-closed**, covered by a test asserting `requestSpawn` refuses when budget is exhausted. Any budget living in a SaaS dashboard or external role config is treated as **decorative**; the binding cap is the one the local spawn code physically cannot bypass. |
| **Blended spend/output ratio reads green during a Claude-only runaway** (Codex's free output launders it). | Meter spend and output **per engine**; trip on the per-engine ratio (Part 5). A blended-ratio breaker is forbidden because it is worse than none. |
| **Two engines double-spend and commingle commits** on the shared git index. | Single shared work-claim ledger keyed by `gap_id`/`cite_key` that both engines lease from; per-engine commits stage only explicit paths (never `git add -A`); separate worktrees per engine. |
| **Stuck lease re-leases forever / re-discovery resets `attempts=0`** (per-message MAX_ATTEMPTS never trips because the hourly cron re-enqueues a fresh message each hour). | Cap attempts at the **gap level**: a gap that dead-letters K times → `open_gaps.jsonl` status `quarantined`, dropped from the cron rotation until a human or schema change clears it. Discovery reads gap quarantine state before enqueueing. |
| **Cheap-model quality collapse is invisible to a spend/throughput governor** (a cheap model confidently emits wrong iAs-vs-tAs speciation, wet-vs-dry basis, or fabricated ppb — full throughput, low cost, governor reads green, corpus silently fills with defensibility-destroying errors). | A **QUALITY breaker** separate from cost/throughput: route a fixed sample of cheap-model extractions through a high-tier re-check; trip if the cheap-model error rate on speciation/basis/ppb-sanity exceeds threshold. Keep **at least one of the two extractor models at high tier** so two cheap models cannot agree on the same systematic error. Back it with **deterministic schema gates** (iAs/tAs and tHg/MeHg enums, basis-required, ppb-range sanity) that reject malformed extractions before they cost a wiki edit — the cheapest catch for the highest-frequency errors. |
| **The Governor is itself a single point of failure that fails OPEN** (the org's automation defaults to liveness-over-safety; a self-healer could restart it, or a spawn could fall back to "launch anyway" when the governor is unreachable). | **Fail-closed by default:** unreachable governor or unreadable ledger → `requestSpawn` refuses. The ledger is the single serialization point (advisory-locked file / single-writer); a spawn that cannot acquire the lock does not run. **No self-healer may restart a worker, refill a queue, or clear a STOP file** — healing is limited to surfacing state. An **external dead-man's-switch watchdog** does the *opposite* of self-heal: it reads the governor heartbeat and, if stale or a breaker is tripped, **disables the spawners** (launchd unload) rather than restarting them. The STOP file is creatable only by a human or the watchdog, never by the system. |
| **Retry storms that stay under every per-item cap but aggregate** (jittered backoff smears 154 legal retries across time so no single spike trips a naive alarm). | A **global spawn-rate token bucket** over all engines/queues/topics (≤ R spawns/hour, hard), on top of per-message backoff; **plus** the failure-rate window breaker that *halts* (not slows) new leases when the recent terminal-failure rate is high. |
| **Discovery backs off per-driver, not globally** (N gaps each going dry produce N independent low-rate fetches that re-aggregate into a firehose; back-off does not stop the cost of fetching nothing). | **Per-gap exponential back-off escalating to a terminal `source-exhausted` state** that drops the gap from the cron, **plus a global empty-streak breaker**: K consecutive system-wide zero-candidate runs → multi-day discovery cool-down, surfaced as a "needs manual sourcing" signal (the literal 2026-06-09 situation). Discovery spend debits the **same** governor budget, so fetching-nothing still counts against the cap. |
| **Vercel build re-coupling returns silently** (the `git.deploymentEnabled.main:false` flag is a setting any session or UI click can flip; the scheduled deploy is itself an unmetered hourly cost knob; the 250MB `excludeFiles` fix is untested). | A **CI/lint assertion** that `git.deploymentEnabled.main === false` and the Vercel spend cap is set, failing the build on drift; make the scheduled deploy **conditional on a content-hash change** (idle periods cost zero builds); add a **function-bundle-size regression test** (`vercel build` in a worktree) so a new lambda re-importing `data/` cannot silently re-trip the 250MB limit. Build cadence and the Vercel $ cap are inputs the **same** Governor reports on, not a second disconnected dashboard. |
| **SC-1 (backlog burn-down) gamed by rubber-stamping audits** to clear rows fast, corrupting the very defensibility the corpus thesis depends on. | SC-4 quality floor: audit-revision rate must stay in a sane band (a rate driven toward ~0 is itself an alarm, not a success), and the sampled high-tier re-check guards the cheap audit lane. Speed-to-empty-queue is never allowed to trade against the asset unobserved. |
| **Gap quarantine wrongly retires transiently un-fetchable gaps** (source API outage, rate-limit window), silently shrinking corpus coverage — the opposite of the purpose. | Quarantine must distinguish "source genuinely lacks evidence" from "fetch transiently failed": transient/network failures back off and retry; only repeated *terminal* dead-letters quarantine. Quarantine is **reviewable, not deleted** — surfaced for human triage, never silently dropped (consistent with "rather a noisy queue than silently drop something defensible"). |
| **The safety layer's own complexity fails open** (five interacting breakers, a watchdog, a shared lease ledger, per-engine meters — a non-coder's maintenance surface where one misconfiguration fails OPEN). | Keep an **outermost backstop outside the app entirely**: a flat hard cap at the API-key / account level (provider-side spend cap) that is robust regardless of the in-repo governor's correctness. The clever in-repo governor is the precise guard; the account-level cap is the dumb guaranteed one. Both exist; neither is sufficient alone. |

## Part 7 — Phased rollout

Each phase is independently valuable and reversible (one launchd plist + one wrapper,
deletable in one command). A phase must run clean before the next unlocks. The baseline
is genuinely cold — verified 2026-06-09: no `paleo`/`frank`/`awake`/`daemon` launchd
services loaded, no `frank`/`claude --print`/`codex exec` processes running — so the
rollout starts from a safe stop, not a race against a live daemon.

### Phase 1 — Guardrail-first, proven on a bounded batch

**Goal:** restore *safe* autonomy as the smallest shippable thing, and prove it before
anything scales.

**Built new:**
- `tools/autonomy/governed-run.mjs` (~150 lines): the Governor wrapper around **one**
  existing proven producer (`ingest-manual-fetch-batch.mjs --max=10`) on a
  **once-per-hour launchd timer** (`StartInterval`, single concurrent run; **not**
  keep-awake, **not** self-respawn). Maintains `data/evidence/autonomy/spend-ledger.jsonl`
  with per-run `{timestamp, producer, engine, spawns, successes, failures, est_tokens}`.
  Refuses to start a run if any of: daily-spawn-count > N, rolling failure-rate >
  threshold, or `~/.frank.STOP` exists. This is the deferred HMI-9 "Cost backstop"
  generalized from one role to the launcher.
- **Phase-1 gate — quarantine the poison first:** a one-shot migration that moves the
  154 `pending-audit-spawn-failed` rows in `audit-queue.csv` to a terminal
  `dead-letter-spawn-failed` status (or sibling dead-letter file) so no producer
  re-leases them, **and** an `attempts` cap per `cite_key` in the audit-queue schema
  (mirroring `MAX_ATTEMPTS=5`) so a row can never be requeued infinitely again. The 154
  are surfaced on a one-time triage report, **not** silently dropped — some may be
  transient-failure papers worth re-fetching.
- **Model/effort routing as a Phase-1 governor policy:** the governor passes `--model`
  by work-class (Sonnet/Codex for row-sorting/extraction/audit-application; Opus opt-in
  per work-class). The plumbing exists (`ingest-manual-fetch-batch.mjs` takes `--model`;
  FRANK already sent `--model=sonnet` to discovery). Default everything cheap; Opus is
  opt-in per work-class in one config block the governor owns.

**Reused:** the proven self-committing producers (`ingest-manual-fetch-batch.mjs`,
`drain-pending-synthesis.mjs`, `promote-synthesis-pages.mjs`,
`populate-contamination-profile.mjs`), the `~/.frank.STOP` sentinel pattern.

**Concurrency stays at 1** in Phase 1 (the per-child-`git`-commit race is low-risk only
at single-concurrency; raising it returns the `.git/index.lock` contention FRANK fought).

**"Shipped" = falsifiable checkpoint:** the spend-ledger shows ≥ 1 week of bounded runs
with real committed pages and **zero unbounded spawn events**.

### Phase 2 — Turn the tested queue spine into real output

Only after Phase 1 runs clean for a week.

**Built new:** the one missing file, `tools/runtime/deps-production.mjs`, implementing
the deps contract from `fixtures.mjs` — but its `applyWikiEdit` **shells out to the
already-proven producers** (a Codex/Sonnet ingest call that writes a real page and
commits) instead of writing a new extractor from scratch. This is the single
load-bearing gap between "fixture demo" and "real autonomy": today
`fixtures.applyWikiEdit` deliberately writes an audit row but **not** a page, and
`run-loop.mjs` throws on `HMI_DEPS=production` because the file does not exist.

**Reused:** the entire `tools/runtime/` queue spine (leases, ack, nack, dead-letter,
backoff — all tested), the Phase-1 Governor unchanged in front of the run-loop, the
gap-level quarantine from Part 3.1.

**"Shipped" =** durable wiki pages land through the queue, each carrying a
`wiki_edit_audit.jsonl` row (SC-2), under the Governor's meter.

### Phase 3 — Scale onto the production runtime

Only after Phase 2 proves durable pages through the queue.

**Built new:** nothing structural. Move the run-loop behind the Vercel Queues backend
(`vercel-queue.mjs` + `api/queue/*` already exist) on the hourly scheduled-deploy cadence
already committed, made **conditional on a content-hash change**. The dead-letter
dashboard (`api/queue/dead-letter.mjs`) becomes the operator's runaway-watch surface. The
external dead-man's-switch watchdog (Part 6) goes live. FRANK is **not** resurrected; no
new orchestrator is written.

**Reused:** `vercel-queue.mjs`, `api/queue/*`, `scheduled-deploy.yml`, the Governor.

**Degradation note (accepted):** if Phases 2–3 never happen, a governed wrapper over
proven self-committing producers **is** genuine bounded autonomy. The plan degrades
gracefully; that is the point, not a flaw.

## Part 8 — Kill switches and observability

### Kill switches (multi-layered, owned outside the work loop)

1. `~/.frank.STOP` sentinel — checked at the top of every governed run; creatable only by
   a human or the watchdog, **never by the system**.
2. Hard daily spawn ceiling in the spend-ledger — aborts the launchd run (exact, unlike
   token estimates).
3. launchd `StartInterval`, single concurrent run, no `caffeinate`, no self-respawn.
4. External **dead-man's-switch watchdog** — reads the Governor heartbeat; on stale
   heartbeat or tripped breaker, **launchd-unloads the spawners** (does the opposite of
   self-heal). No self-healer may restart a worker, refill a queue, or clear a STOP file.
5. **Account-level provider spend cap** (outside the app) — the dumb guaranteed backstop
   that holds even if the in-repo governor is misconfigured.

### Observability — what Karen sees at a glance

The Governor's ledger and breaker state are the **primary dashboard**, replacing the
liveness/output dashboards the incident proved blind to runaway. A green dashboard is one
where **all** of these are bounded — never just "the loop is alive and pages exist":

- **Daily one-line ledger** (the 30-second read): `cost · pages-audited ·
  pages-spawn-failed · backlog-delta · $/audited-page`. Output-per-spend is the
  heartbeat.
- **Per rolling window:** spawns/hour vs cap · $ and tokens spent vs budget **per
  engine** · failure rate · dead-letter count · per-engine spend/output ratio ·
  quality-sample error rate · Vercel build count/cost.

The old `hmi-health.sh` (liveness/output) is retired from the safety role; it could not
see a runaway and tended to sustain one.

## Part 9 — Open questions that genuinely need Karen's decision

These are the calls the design cannot make for itself. Everything else above is decided.

1. **Numeric thresholds.** The design fixes the *shape* of every breaker but not the
   numbers: daily spawn ceiling N, spawns/hour R (token-bucket rate), failure-rate
   threshold, yield floor, N consecutive windows, quality-sample error threshold, the
   audit-revision sane-band, the account-level provider cap, and the K of the global
   empty-streak. These are operating-point choices about how aggressive autonomy should
   be; the design recommends starting conservative and loosening as the ledger earns
   trust, but the starting values are Karen's.
2. **Codex dependency posture.** Codex is both the productive engine and a strategic
   single point of failure on one ChatGPT Plus sub + an unsupported CLI. Is the paid
   Sonnet overflow producer (work-type 4) acceptable as the standing fallback, or should
   the corpus thesis assume Codex can vanish and pre-fund a Claude authoring lane despite
   the cost? The design defaults to Sonnet-as-overflow; the strategic bet is Karen's.
3. **Steelman to weigh before Phase 2.** The strategic lens's honest steelman:
   Codex-bulk + Karen-triggered Opus audit may suffice without *any* always-on Claude
   consumer, if the audit/synthesis backlog is human-paceable. The 800+
   unaudited/under-audited rows suggest it is not, but do not prove it. Phase 1 produces
   the data to settle this; the decision to proceed past Phase 1 into a standing Claude
   consumer is the one genuine go/no-go for Karen.
