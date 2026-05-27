---
title: Continuous gap-fill ingest architecture
audience: [engineer, claude, codex, karen]
updated: 2026-05-27
anchor_issue: HMI-9
---

# Continuous gap-fill ingest architecture

This document describes the architecture for the continuous data-gap-fill ingest system tracked in [HMI-9](/HMI/issues/HMI-9). It is the canonical reference for engineers and Claude/Codex sessions touching gap detection, source discovery, dual-model extraction, the wiki-edit audit barrier, or the queue runtime.

Companion guide: [add-a-source](./add-a-source.md) — step-by-step walkthrough for adding a new source adapter without spine changes.

## Why this exists

The wiki today is filled by a launchd-driven nightly orchestrator (`tools/orchestrator/night-loop.mjs`) that picks the top dispatch-eligible action from the action plan, dispatches it once, and emits a morning report. That loop is good at burning down a known action queue against a static Marker-converted corpus under `raw/markdown/`. It is not designed to:

1. **Detect gaps continuously** as new wiki pages, HMTc rows, or routing-unresolved entries appear.
2. **Pull peer-reviewed evidence from external sources** (PubMed, OpenAlex, later FDA/EFSA) without a human first dropping PDFs into `raw/`.
3. **Run two models against the same candidate in parallel** and treat their disagreement as a first-class signal rather than an averaging input.
4. **Refuse to land a wiki edit** unless a per-edit audit row records the source, retrieval date, models used, and model-agreement state.

The continuous gap-fill system adds those four capabilities on top of the existing routing, evidence, and audit layers. The nightly orchestrator keeps running as a safety net during cutover (see [Coexistence with the nightly orchestrator](#coexistence-with-the-nightly-orchestrator)).

## Hard requirements (defensibility — non-negotiable)

These come straight from [HMI-9](/HMI/issues/HMI-9). They are restated here so that every code path in this system can be checked against them.

1. Every fact written into the wiki traces back to a `source_document` with URL, retrieval date, and methodology metadata.
2. Provenance and confidence travel with the content, not in a sidecar.
3. Model disagreement is a first-class signal, not silently resolved.
4. Nothing edits a wiki page without a recorded audit row that includes which model produced which span.

If any code path appears to relax one of these, escalate to the CEO before shipping. The whole asymmetric-authority argument for the Index rests on these four invariants.

## Component map

```
┌──────────────────────────────────────────────────────────────────────────┐
│                       Continuous gap-fill system                          │
└──────────────────────────────────────────────────────────────────────────┘

   gap-detector            source-adapters              ranker
   (open_gaps.jsonl)  ──►  pubmed / openalex / …  ──►  (relevance × quality)
        ▲                  manifest + raw blob          weighted queue
        │                                                     │
        │                                                     ▼
   coverage snapshot                                  dual-model-extractor (role)
   (dashboard)                                  ┌────────────┴────────────┐
        ▲                                       │                         │
        │                              OpenAI: latest GPT-5.x   anthropic/claude-opus-4-7
        │                              (resolved at wire-up)              │
        │                                       │                         │
        │                                       └────────────┬────────────┘
        │                                                    ▼
        │                                       disagreement detector
        │                                       (model_disagreements.jsonl)
        │                                                    │
        │                                                    ▼
        │                                       routing & audit barrier  ◄── real wiki gate
        │◄──────────────────────────────────────  wiki_edit_audit.jsonl    (no staging tier)
        │                                                    │
        │                                                    ▼
        └────────────────────  defensibility-report  ──► real wiki pages
                                  (per-page query)
```

### Stages

| Stage | Reads | Writes | Lives at |
|---|---|---|---|
| **Gap detector** | `wiki/**`, `data/evidence/standards-gap-report.csv`, `routing_unresolved.csv`, `contamination_profile` blocks | `data/gaps/open_gaps.jsonl` | `tools/evidence/build-open-gaps.mjs` ([HMI-13](/HMI/issues/HMI-13)) |
| **Source adapters** | `open_gaps.jsonl` | `data/discovery/candidates.jsonl` + Vercel Blob raw artifact | `tools/discovery/sources/<adapter>.ts` ([HMI-11](/HMI/issues/HMI-11)) |
| **Ranker** | `candidates.jsonl` | ranked queue messages | `tools/discovery/rank.ts` |
| **`dual-model-extractor` role** | candidate + raw artifact | `data/evidence/model_extractions.jsonl` | `tools/extract/dual-model.ts` |
| **Disagreement detector** | paired extractions | `data/evidence/model_disagreements.jsonl` | `tools/extract/diff.ts` |
| **Routing & audit barrier** | extractions, existing routing audit | `wiki/**/*.md`, `data/evidence/wiki_edit_audit.jsonl` | `tools/evidence/wiki-edit.ts` ([HMI-12](/HMI/issues/HMI-12)) |
| **Coverage snapshot** | all of the above | `data/coverage/snapshots/<date>.json`, `wiki/coverage.md`, `/coverage` route | `tools/coverage/snapshot.ts` |

The arrows are queue-mediated. No stage calls the next stage in-process. That is what makes the system crash-safe.

## New schemas inventory

All new artifacts are JSONL under `data/` so they compose with the existing structured-evidence world (`data/evidence/values.jsonl`, `data/evidence/product_source_routing_audit.csv`, etc.).

### `data/gaps/open_gaps.jsonl` — open gap feed

| Field | Type | Notes |
|---|---|---|
| `gap_id` | string | `sha256(page + metal + matrix + population)`; stable across runs |
| `page` | string | path under `wiki/` |
| `metal` | string | canonical metal symbol (`Pb`, `Cd`, `iAs`, `tAs`, `MeHg`, `tHg`, `Ni`, `Al`, `Cr-VI`, `Sn`, etc.) |
| `matrix` | string | ingredient or product slug |
| `population` | string | `infant`, `child`, `adult`, etc. (nullable for non-dietary pages) |
| `why` | enum | `no_cited_evidence` / `tbd_section` / `pending_contamination_profile` / `routing_unresolved` |
| `opened_at` | ISO-8601 | |
| `last_attempted_at` | ISO-8601 \| null | set when discovery enqueues a candidate |
| `last_attempt_outcome` | string \| null | last terminal state of the most recent attempt |
| `status` | enum | `open` / `attempted` / `closed` |

`status` transitions are driven by the system, not by manual edits. `closed` requires a matching `wiki_edit_audit` row referencing the same `gap_id`.

### `data/discovery/candidates.jsonl` — discovered source candidates

| Field | Type | Notes |
|---|---|---|
| `candidate_id` | string | `sha256(source_adapter + external_id)` |
| `gap_id` | string | links back to the gap that surfaced it |
| `source_adapter` | string | `pubmed` / `openalex` / future `fda` / `efsa` |
| `external_id` | string | PMID / OpenAlex work ID / agency document ID |
| `url` | string | direct URL to the source record |
| `title` | string | |
| `abstract` | string | nullable |
| `doi` | string | nullable |
| `retrieval_date` | ISO-8601 | wall-clock time the adapter fetched it |
| `study_type` | string | RCT / cohort / cross-sectional / surveillance / etc. |
| `sample_size` | integer \| null | |
| `methodology_grade` | enum | A / B / C, following the existing evidence grading (see [[docs/conventions]]) |
| `blob_key` | string | Vercel Blob key under `hmi/raw/<adapter>/<external_id>/` |
| `status` | enum | `discovered` / `ranked` / `extracted` / `routed` / `audited` / `closed` |

Idempotency: `(source_adapter, external_id)` is unique. A re-discovery does not duplicate the row; it updates `retrieval_date` and `status` only.

### `data/evidence/model_extractions.jsonl` — per-model structured outputs

| Field | Type | Notes |
|---|---|---|
| `extraction_id` | string | `sha256(candidate_id + model_slug + prompt_version)` |
| `candidate_id` | string | |
| `model_slug` | string | AI Gateway provider string actually used at runtime (e.g., `anthropic/claude-opus-4-7`; OpenAI slug resolved at wire-up to the latest GPT-5.x on AI Gateway) |
| `model_version` | string | concrete model version returned by the provider at call time, alongside `model_slug` |
| `prompt_version` | string | semver of the extraction prompt template |
| `response` | object | raw model response (preserved for audit) |
| `structured_findings` | array | normalized rows that drop straight into `data/evidence/values.jsonl` |
| `finished_at` | ISO-8601 | |

Both models write to the same JSONL. There is no averaging step. Their outputs sit side by side; the disagreement detector consumes them.

### `data/evidence/model_disagreements.jsonl` — first-class disagreements

| Field | Type | Notes |
|---|---|---|
| `disagreement_id` | string | `sha256(candidate_id + axis)` |
| `candidate_id` | string | |
| `axis` | enum | `value` / `unit` / `basis` / `row_fit` / `included` |
| `gpt55_value` | any | model output on this axis |
| `opus47_value` | any | model output on this axis |
| `severity` | enum | `low` / `medium` / `high` |
| `resolution_state` | enum | `unresolved` / `human_reviewed` / `closed` |
| `surfaced_in` | array of strings | coverage-dashboard, defensibility-report, reviewer-queue |

This file is a **write target**, not a sidecar. Anything that reduces a disagreement to a single value before this row is written is a bug.

### `data/evidence/wiki_edit_audit.jsonl` — per-edit audit row (write barrier)

| Field | Type | Notes |
|---|---|---|
| `edit_id` | string | `sha256(page + span_id + applied_at)` |
| `page` | string | path under `wiki/` |
| `span_id` | string | heading anchor or marker-bounded section id |
| `source_document` | object | `{cite_key, url}` |
| `retrieval_date` | ISO-8601 | from the candidate |
| `model_versions_used` | array | ordered list of `{model_slug, model_version}` pairs that produced this edit. Records both the AI Gateway provider string and the concrete model version returned at call time, so the wire-up-time slug choice (e.g. which GPT-5.x was current) is itself auditable. |
| `model_agreement_state` | enum | `agree` / `agree_with_minor_units_diff` / `disagree_on_value` / `disagree_on_inclusion` / `disagree_on_row_fit` |
| `gap_id` | string \| null | closes the matching open gap when present |
| `applied_at` | ISO-8601 | |
| `commit_sha` | string | git commit that actually applied the edit |

This is the wiki-edit write barrier. See [Per-edit audit row contract](#per-edit-audit-row-contract).

### `data/coverage/snapshots/<date>.json` — coverage snapshots

| Field | Type | Notes |
|---|---|---|
| `taken_at` | ISO-8601 | |
| `gaps_open` | integer | count of `open` + `attempted` rows in `open_gaps.jsonl` |
| `gaps_closed_24h` | integer | rows that moved to `closed` in the last 24h |
| `disagreements_unresolved` | integer | |
| `source_mix` | object | counts by `source_adapter` |
| `by_metal_matrix_population` | array | aggregated counts for the dashboard heatmap |

History lives as one JSON file per snapshot day under `data/coverage/snapshots/`. The dashboard pages (`wiki/coverage.md` and `/coverage`) read from there.

### Backfill scope

Existing wiki edits made before this system shipped do not get retro audit rows. **Every new edit from this system must.** The pre-commit hook (see below) enforces this on `wiki/**/*.md` diffs that come from any worker in this pipeline. Manual edits made by Karen or by sessions outside this pipeline remain in scope for the existing routing audit and `log.md` discipline, not for this barrier.

## Source adapter interface

The interface is implemented in TypeScript and lives at `tools/discovery/sources/types.ts`. PubMed, OpenAlex, and future FDA/EFSA adapters all conform to it. The spine never sees the adapter directly — it sees a manifest row and a Blob key.

```ts
// tools/discovery/sources/types.ts

export interface Gap {
  gap_id: string
  page: string
  metal: string
  matrix: string
  population: string | null
  why: "no_cited_evidence" | "tbd_section" | "pending_contamination_profile" | "routing_unresolved"
}

export interface DiscoveryCandidateDraft {
  external_id: string
  url: string
  title: string
  abstract: string | null
  doi: string | null
  study_type: string
  sample_size: number | null
  methodology_grade: "A" | "B" | "C"
}

export interface FetchedDoc {
  external_id: string
  raw_bytes: Uint8Array
  content_type: string // "application/pdf" | "text/html" | "application/json"
  metadata: Record<string, unknown>
  retrieved_at: string // ISO-8601
}

export interface DiscoveryCandidate extends DiscoveryCandidateDraft {
  candidate_id: string // sha256(source_adapter + external_id)
  gap_id: string
  source_adapter: string
  retrieval_date: string
  blob_key: string // hmi/raw/<adapter>/<external_id>/source.<ext>
  status: "discovered" | "ranked" | "extracted" | "routed" | "audited" | "closed"
}

export interface SourceAdapter {
  /** stable id, e.g. "pubmed" | "openalex" */
  name: string

  /** v1 hard-codes open-source-only; closed sources are out of scope */
  license: "open-source-only"

  /** issue queries derived from the gap, yield candidates with paging */
  search(gap: Gap): AsyncIterable<DiscoveryCandidateDraft>

  /** pull full text / PDF / agency document; idempotent on external_id */
  fetch(candidate: DiscoveryCandidate): Promise<FetchedDoc>

  /** produce the row that gets appended to data/discovery/candidates.jsonl */
  manifestRow(doc: FetchedDoc): DiscoveryCandidate
}
```

**Architect for additional sources without rewriting the spine** = this interface. Adding FDA, EFSA, JECFA, or a national surveillance dataset means:

- write `tools/discovery/sources/<name>.ts` implementing `SourceAdapter`
- register it in `tools/discovery/sources/index.ts`
- the adapter writes to Vercel Blob at `hmi/raw/<name>/<external_id>/` and appends to `data/discovery/candidates.jsonl`

Nothing in the ranker, extractor, disagreement detector, or audit barrier knows or cares about the adapter beyond the manifest row. The walkthrough in [add-a-source](./add-a-source.md) proves this end-to-end.

## Dual-model contract

The extractor is wired as a Paperclip role — **`dual-model-extractor`** — that runs two providers independently against the same candidate. The contract is:

1. **Independent parallel runs.** Both providers receive the same prompt template, the same raw artifact text (stripped from the Blob), and the same `prompt_version`. They are dispatched in parallel via the Vercel AI Gateway. Neither sees the other's output. There is no "GPT drafts, Opus reviews" — that would defeat the cross-check.
2. **No averaging.** The extractor never reduces two outputs to a single value. Each output is appended to `data/evidence/model_extractions.jsonl` with the resolved `model_slug` and `model_version` intact.
3. **Disagreement is a first-class artifact.** A separate step (`tools/extract/diff.ts`) reads both extractions and emits zero or more rows to `data/evidence/model_disagreements.jsonl`, one per disagreed axis (`value`, `unit`, `basis`, `row_fit`, `included`).
4. **Agreement state is the routing rule.** Only `agree` and `agree_with_minor_units_diff` extractions flow straight to wiki edit. `disagree_*` extractions are still recorded in the evidence register with both provider outputs and `model_agreement_state` set — but the edit step refuses to publish them as authoritative until the disagreement is resolved.

For v1, "resolved" means surfaced on the coverage dashboard and held in the disagreement queue. Human reviewer triage of disagreements is explicitly out of scope for v1 ([HMI-9](/HMI/issues/HMI-9) "Out of scope" §) but the schema is designed so that step can drop in later.

### Gateway slugs and wire-up resolution

Use AI Gateway provider/model strings, not direct provider SDKs. The architecture doc deliberately does **not** hard-code an OpenAI slug. Per the [HMI-9 plan](/HMI/issues/HMI-9#document-plan) board decision #4:

- **Anthropic side:** `anthropic/claude-opus-4-7`.
- **OpenAI side:** the latest GPT-5.x slug available on AI Gateway at the moment the `dual-model-extractor` role is wired up. Recording happens at runtime — the resolved `model_slug` is written to every `model_extractions.jsonl` row, and the full `model_versions_used` list is written to every `wiki_edit_audit.jsonl` row.

This is what makes wire-time slug choice auditable. If OpenAI ships `gpt-5.7` next quarter and the role is re-wired, the audit row records that fact per-edit; no doc update is required. If both providers must agree on a substitution (e.g. a new disagreement-detector axis that depends on a provider-specific feature), update the prompt template and bump `prompt_version`.

### Cost backstop

The `dual-model-extractor` role is configured with a **weekly Paperclip budget cap before it goes live** ([HMI-9.8](/HMI/issues/HMI-9)). When the cap is hit, the extractor stops pulling from the `extraction.requests` queue and the orchestrator surfaces the situation as a `blocked` issue with the unblock action ("raise cap" or "wait for window roll"). The extractor never silently overspends to drain the queue. Cost-tracking lives in the agent's Paperclip role config, not in this doc; this note exists so engineers don't add their own ad-hoc rate limiting on top.

## Per-edit audit row contract

This is the wiki-edit write barrier and is the most important defensibility surface in the system. It is implemented in [HMI-12](/HMI/issues/HMI-12).

### Rule

**No wiki edit lands without a matching row in `data/evidence/wiki_edit_audit.jsonl` in the same commit.**

### Enforcement (defense in depth)

1. **Application-level.** Every worker that mutates a wiki page calls `recordEditOrAbort(edit)` exported from `tools/evidence/wiki-edit.ts`. If the worker does not call it, no file under `wiki/` is written.
2. **Pre-commit hook.** `.husky/pre-commit` checks every commit. If the diff touches `wiki/**/*.md` and there is no matching diff in `data/evidence/wiki_edit_audit.jsonl`, the commit fails. This catches any code path that bypasses the helper.
3. **Per-edit content.** Every audit row carries `source_document`, `retrieval_date`, `model_versions_used`, `model_agreement_state`, `gap_id` (where present), and `commit_sha`. Span attribution lives at `span_id` (heading anchor or marker-bounded section id). `model_versions_used` captures the AI Gateway provider strings plus the concrete model versions returned at call time — this is what makes the wire-up-time slug choice auditable per board decision #4.

### What this gives the defensibility report

A defensibility report for any wiki page is a join from page sections → `wiki_edit_audit.jsonl` rows → `source_document` records. Output: a markdown report with every claim, every source backing it, retrieval date, models used, and model agreement state. Implemented as `npm run defensibility -- wiki/products/<page>.md`, extending `tools/audit-claim-provenance.mjs`.

## Runtime model

The system runs continuously, not as a nightly batch.

### Production: Vercel Queues + Fluid Compute

- **Queue:** [Vercel Queues](https://vercel.com/docs/queues) for durable event streaming. At-least-once delivery, built on Fluid Compute. Topics:
  - `discovery.candidates` — gap detector → source adapters
  - `extraction.requests` — ranker → dual-model extractor
  - `routing.edits` — extractor → audit barrier
- **Workers:** Vercel Functions on Fluid Compute. Node 24 LTS. Default function timeout 300s. Each worker is idempotent on `candidate_id` / `extraction_id` / `edit_id`.
- **Retry:** exponential backoff with jitter, dead-letter after 5 attempts. Dead-lettered messages surface on the dashboard with reason.
- **Cadence:** discovery runs hourly per gap (cron-driven enqueue). Extraction, disagreement detection, and routing are event-driven on queue messages — no scheduled cadence.

### Local development: SQLite-backed queue

To keep the loop runnable on a laptop without Vercel auth, `tools/runtime/local-queue.mjs` provides a SQLite-backed queue that implements the same `enqueue` / `consume` / `ack` interface. The same worker code targets either backend; the choice is wired by `HMI_RUNTIME=local|vercel` in the env.

```
# local dev
HMI_RUNTIME=local npm run ingest:loop

# production worker (deployed)
HMI_RUNTIME=vercel  # set in Vercel project env
```

This is the fallback path the issue description requires. It is not a long-term home for the production loop — it exists so engineers can run the spine end-to-end during a flight, against a small synthetic gap set, without standing up Vercel resources.

### Idempotency keys

| Stage | Key |
|---|---|
| Discovery | `candidate_id` = `sha256(source_adapter + external_id)` |
| Ranking | `candidate_id` (re-rank overwrites) |
| Extraction | `extraction_id` = `sha256(candidate_id + model_slug + prompt_version)` |
| Disagreement | `disagreement_id` = `sha256(candidate_id + axis)` |
| Audit | `edit_id` = `sha256(page + span_id + applied_at)` |

Re-runs are safe. Replays produce the same JSONL row, not a duplicate.

## How to add a source

See the companion walkthrough at [add-a-source](./add-a-source.md). The short form is:

1. Implement `SourceAdapter` in `tools/discovery/sources/<name>.ts`.
2. Register it in `tools/discovery/sources/index.ts`.
3. Add an integration test that runs the adapter against a fixture gap and asserts a manifest row + a (mocked) Blob upload.
4. Deploy.

No edits to the ranker, the extractor, the disagreement detector, the audit barrier, the queue topology, or any wiki content are required.

## Coexistence with the nightly orchestrator

The existing nightly orchestrator at `tools/orchestrator/night-loop.mjs` (spec at [[docs/night-loop-spec.md]]) keeps running during cutover. It operates on a different surface — the action queue from `npm run plan` — and writes through the same routing-audit and `log.md` discipline that this system also respects.

### Operating contract during cutover

| Concern | Nightly orchestrator | Continuous gap-fill |
|---|---|---|
| Trigger | launchd nightly | event + hourly cron per gap |
| Input | `data/evidence/build-action-plan.json` | `data/gaps/open_gaps.jsonl` |
| Source corpus | `raw/markdown/` (Marker-converted, static) | PubMed / OpenAlex (live, growing) |
| Models | one model per dispatch (default `claude-opus-4-7`) | two models in parallel, no averaging |
| Audit row | not required (existing log discipline) | **required, write barrier** |
| Failure mode | dispatch resolves zero net work | dead-letter queue + dashboard |

The two systems share three things:

1. **Wiki edit semantics.** Both produce edits under `wiki/`. The continuous system's audit barrier applies only to its own edits (workers that call `recordEditOrAbort`). Nightly-orchestrator edits flow through the existing routing-audit and `log.md` paths. The pre-commit hook does not fail nightly commits because nightly does not touch the `wiki_edit_audit.jsonl` write path; backfill is explicitly out of scope.
2. **Routing audit.** Both produce sources under `wiki/sources/`, and both trigger `tools/evidence/build-routing-audit.mjs` afterward.
3. **Coverage dashboard.** The dashboard reads gap signals from both systems' outputs; what differs is how the dashboard categorizes a closed gap (`closed_by_continuous` vs `closed_by_nightly`).

### Cutover sequence

Per the [HMI-9 plan](/HMI/issues/HMI-9#document-plan) board decision #3, **the wiki write target is the real wiki from day one**. There is no `wiki-staging/` tier and no staging-clone deploy. The [per-edit audit row barrier](#per-edit-audit-row-contract) and the disagreement queue are themselves the defensibility layer — a separate staging branch would only defer real validation and create a second source of truth to keep in sync. Pathological growth in the disagreement queue is the signal we act on, not a missed staging deploy.

1. **Spine lands** ([HMI-11](/HMI/issues/HMI-11) + [HMI-12](/HMI/issues/HMI-12) + [HMI-13](/HMI/issues/HMI-13)). Continuous system can run end-to-end against the real wiki; every edit must clear the audit-row barrier.
2. **Discovery wave** (HMI-9.5–9.9). PubMed + OpenAlex adapters live, `dual-model-extractor` role wired, disagreement detector on. Real wiki edits land as soon as the agreement-state routing rule allows.
3. **Runtime cutover** (HMI-9.10). Queue + workers go live on Vercel Queues. Backoff and dead-letter validated for ≥7 days under real candidate volume, monitored against the disagreement-queue growth signal.
4. **Nightly stays as safety net.** Nightly orchestrator continues to run for one full week after runtime cutover, then moves to the cooldown action-set for legacy use only.
5. **Decommission decision.** After 30 days of healthy continuous operation, CTO + CEO decide whether the nightly loop stays on (as a backup) or is retired. Default = retire if dashboard shows ≥95% of new gaps closed by continuous in the prior 30 days.

There is no all-at-once cutover at the runtime layer. If continuous misbehaves at any stage, the audit-row barrier refuses to publish, the dashboard shows the failure, and the nightly loop continues to fill gaps from the static corpus while the issue is triaged.

## Board decisions (resolved 2026-05-27)

The four open questions in the original [HMI-9 plan](/HMI/issues/HMI-9#document-plan) were resolved by the board. They are now binding for this architecture and restated here so engineers picking up runtime / extractor work do not re-litigate them:

1. **Runtime — Vercel Queues + Fluid Compute, SQLite local fallback.** Accepted. HMI is already a Vercel deploy; this is reuse, not new lock-in.
2. **OpenAI provisioning.** `OPENAI_API_KEY` is provisioned on the Vercel project when [HMI-9.8](/HMI/issues/HMI-9) starts. A weekly Paperclip budget cap on the `dual-model-extractor` role is configured **before** the agent goes live — see [Cost backstop](#cost-backstop).
3. **Real wiki from day one, gated by the audit-row write barrier.** No `wiki-staging/` tier. Every wiki edit passes through the audit-row precondition defined in [HMI-12](/HMI/issues/HMI-12). The audit row + disagreement queue are themselves the defensibility layer.
4. **No hard-coded `openai/gpt-5.5`.** The extractor is wired as the **`dual-model-extractor` role**; the OpenAI provider string resolves at wire-up time to the latest GPT-5.x on AI Gateway. Recorded per-edit in `model_versions_used`. See [Gateway slugs and wire-up resolution](#gateway-slugs-and-wire-up-resolution).

## How to generate a defensibility report (HMI-26)

A defensibility report joins every numerical claim on a wiki page to its citation chain and the audit metadata in `wiki_edit_audit.jsonl`. It is the HMI-26 deliverable and the per-page query surface of the audit-row write barrier.

### Run it

```bash
# Write to data/evidence/defensibility-reports/<page-relative-path>
npm run defensibility -- wiki/products/<page>.md

# Or directly:
node tools/build-defensibility-report.mjs wiki/products/<page>.md

# Print to stdout (no file written):
node tools/build-defensibility-report.mjs wiki/products/<page>.md --stdout

# Override audit log (useful for testing against a local fixture):
node tools/build-defensibility-report.mjs wiki/products/<page>.md \
  --audit-log path/to/audit.jsonl
```

### What the report contains

The report is a markdown file with a YAML frontmatter block followed by:

- **Summary table** — total claims, cited claims, uncited claims, distinct cited sources, audit row counts.
- **Page-level audit rows** — audit rows that reference the wiki page itself. Expected to be empty for pages predating the audit-row write barrier; defensibility for those pages flows through the source pages they cite.
- **Claims by section** — one subsection per H2. Each numerical claim shows its value, the H2 section it appeared in, the `[[sources/...]]` / `[[regulations/...]]` / `[[testing/...]]` wikilinks in that section, and — for each cited source that has audit rows — the `edit_id`, `retrieval_date`, `models_used`, `model_agreement_state`, `applied_at`, and `span_id` from each row.
- **Uncited claims** — claims with no citation chain in their H2 section. These are Part 18 lint failures (provenance gaps).
- **Defensibility chain table** — one row per distinct cited source, with audit row count, first retrieval date, and latest retrieval date.

### Where reports are written

```
data/evidence/defensibility-reports/<wiki-relative-path>
```

Examples:

```
wiki/products/baby-cereals-dry-rice-based.md
  → data/evidence/defensibility-reports/products/baby-cereals-dry-rice-based.md

wiki/ingredients/rice.md
  → data/evidence/defensibility-reports/ingredients/rice.md
```

Reports carry `noindex: true` in frontmatter and are not published to heavymetalindex.com. They are internal audit artifacts committed alongside the wiki.

### How to read the audit rows

Each audit row line in the report follows this format:

```
- `edit_id=<id>` · retrieval=<date> · models=[<model>, <model>] · agreement=<state> · applied=<timestamp> · span=<span_id>
```

- `retrieval` — the date the source document was fetched from its external origin.
- `models` — the two model role identifiers resolved at wire-time (per board decision #4; no hard-coded slugs).
- `agreement` — one of `agree`, `disagree_on_value`, `disagree_on_relevance`, `consensus`. The routing worker sets `consensus` to indicate the edit passed the agree gate.
- `span` — the extraction span identifier, for tracing back to `extractions.jsonl`.

### Reproducibility contract

Given the same inputs, the report is byte-identical. The generator sorts all output (audit rows by `applied_at` then `edit_id`; source table by slug) and produces no randomness. Tests are in `tools/build-defensibility-report.test.mjs`.

## Related issues

- [HMI-9](/HMI/issues/HMI-9) — continuous data-gap-fill ingest system (orchestrator parent)
- [HMI-10](/HMI/issues/HMI-10) — this architecture doc + add-a-source guide (parent)
- [HMI-11](/HMI/issues/HMI-11) — source adapter interface + provenance contract
- [HMI-12](/HMI/issues/HMI-12) — per-edit audit row schema + wiki-edit write barrier
- [HMI-13](/HMI/issues/HMI-13) — gap detector v1 → machine-readable `open_gaps.jsonl`
