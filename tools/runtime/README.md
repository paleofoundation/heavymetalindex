# Continuous queue + worker pool — HMI-9.10

This directory holds the runtime layer for the continuous gap-fill ingest
system described in [`docs/continuous-ingest-architecture.md`](../../docs/continuous-ingest-architecture.md).

Three topics flow through it:

| Topic | Producer | Consumer | Idempotency key |
|---|---|---|---|
| `discovery.candidates` | hourly cron over `data/gaps/open_gaps.jsonl` | discovery worker → source adapters | `candidate_id` |
| `extraction.requests` | discovery worker per new candidate | `dual-model-extractor` (HMI-9.8) | `extraction_id` |
| `routing.edits` | extractor when state ∈ {`agree`, `agree_with_minor_units_diff`} | wiki-edit audit barrier (HMI-12) | `edit_id` |

Two backends share one worker contract:

- **Production:** Vercel Queues + Fluid Compute Functions. Node 24 LTS,
  `maxDuration: 300`. See `api/queue/*.mjs` and `vercel.json`.
- **Local dev:** SQLite-backed `tools/runtime/local-queue.mjs`. No Vercel auth
  needed; the same worker handlers run via `tools/runtime/run-loop.mjs`.

## Crash safety and retries

- `lease(topic, leaseMs)` hides a message for `leaseMs`. If the worker dies
  before `ack` or `nack`, the lease expires and the next `lease()` call picks
  the message up again — the candidate is in a re-runnable state by design.
- Workers consult `processed-keys.mjs` before doing any side-effect. The store
  is JSONL-backed at `data/runtime/processed-keys.jsonl`, keyed by
  `(topic, idempotency_key)`. This is what keeps Vercel Queues' at-least-once
  delivery safe.
- Retry policy (centralised in `queue.mjs`): `MAX_ATTEMPTS = 5`, exponential
  backoff base 30s × 2 capped at 1h, ±25% jitter. After 5 attempts the
  message is dead-lettered. Dead-letter rows are exposed by
  `api/queue/dead-letter.mjs` for the coverage dashboard (HMI-9.11).

## Local end-to-end run

```bash
# 1. Enqueue discovery messages for every open gap in the current hour bucket.
node tools/runtime/enqueue-discovery.mjs --limit=1

# 2. Drain the queue with fixture deps (no Vercel, no PubMed/OpenAI calls).
HMI_DEPS=fixtures node tools/runtime/run-loop.mjs --drain --verbose
```

The drain writes:

- `data/discovery/candidates.jsonl` — one synthetic candidate per gap.
- `data/evidence/model_extractions.jsonl` — fixture `agree`-state extraction.
- `data/evidence/wiki_edit_audit.jsonl` — audit row through the HMI-12 barrier.

Fixture deps live in `fixtures.mjs`. They produce a single `agree` extraction
so the routing topic is exercised; real adapters land in HMI-9.5/9.6/9.8/9.9
and plug into the same worker handlers via `deps-production.mjs`.

## Production wire-up

Required env on the Vercel project:

```
HMI_RUNTIME=vercel
HMI_DEPS=production
VERCEL_QUEUE_SECRET=<shared HMAC secret; producer + consumer must match>
VERCEL_QUEUE_DISCOVERY_URL=https://<project>.vercel.app/api/queue/discovery
VERCEL_QUEUE_EXTRACTION_URL=https://<project>.vercel.app/api/queue/extraction
VERCEL_QUEUE_ROUTING_URL=https://<project>.vercel.app/api/queue/routing
VERCEL_QUEUE_DEAD_LETTER_URL=https://<project>.vercel.app/api/queue/dead-letter
CRON_SECRET=<separate cron-auth secret>
```

Hourly discovery enqueue is configured in `vercel.json` under `crons[]`. The
consumer Functions translate HTTP status codes into queue outcomes:

| Outcome | HTTP | Effect |
|---|---|---|
| ack | 200 | platform removes the message |
| retry | 503 | platform schedules retry per its policy (capped at `MAX_ATTEMPTS`) |
| dead_letter | 422 | platform moves to DLQ; do not retry |

## Files

| File | Purpose |
|---|---|
| `queue.mjs` | `QueueAdapter` interface + factory + retry policy constants |
| `local-queue.mjs` | SQLite-backed adapter (laptop / CI) |
| `vercel-queue.mjs` | Vercel Queues adapter (production) |
| `workers.mjs` | Three pure-function worker handlers |
| `processed-keys.mjs` | JSONL-backed worker idempotency store |
| `enqueue-discovery.mjs` | CLI + library: enqueue discovery per open gap |
| `run-loop.mjs` | Local worker pool driver |
| `fixtures.mjs` | Fixture dependency set for demos / CI |
| `schemas/messages.ts` | Per-topic message shapes + validators |
| `*.test.mjs` | Unit tests (queue, workers) |
