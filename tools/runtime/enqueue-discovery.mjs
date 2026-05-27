#!/usr/bin/env node
// Enqueue one discovery.candidates message per open gap.
//
// Used by:
//   - Local CLI: `node tools/runtime/enqueue-discovery.mjs`
//   - Vercel Cron: api/cron/enqueue-discovery.ts calls this same logic hourly.
//
// Idempotency: each message's idempotency_key is sha256(gap_id + bucket), where
// `bucket` is the current hour floor in UTC. The queue dedups by
// (topic, idempotency_key) so repeated runs within the same hour are no-ops.
// This matches the "discovery enqueues hourly per open gap" cadence rule.

import { createHash } from "node:crypto"
import { existsSync, readFileSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { getQueueAdapter } from "./queue.mjs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, "../..")
const DEFAULT_GAPS_PATH = resolve(REPO_ROOT, "data/gaps/open_gaps.jsonl")

export async function enqueueDiscoveryForOpenGaps({
  gapsPath = DEFAULT_GAPS_PATH,
  now = () => new Date(),
  queue,
  limit = Infinity,
} = {}) {
  const q = queue ?? (await getQueueAdapter())
  if (!existsSync(gapsPath)) {
    return { enqueued: 0, deduped: 0, total: 0, missing_file: gapsPath }
  }
  const lines = readFileSync(gapsPath, "utf-8").split("\n").filter(Boolean)
  const bucket = hourBucket(now())
  let enqueued = 0
  let deduped = 0
  let total = 0
  for (const line of lines) {
    if (total >= limit) break
    let gap
    try {
      gap = JSON.parse(line)
    } catch {
      continue
    }
    if (gap.status !== "open" && gap.status !== "attempted") continue
    total++
    const idempotency_key = sha256(`${gap.gap_id}:${bucket}`)
    const result = await q.enqueue("discovery.candidates", {
      idempotency_key,
      gap_id: gap.gap_id,
      page: gap.page,
      metal: gap.metal,
      matrix: gap.matrix,
      population: gap.population ?? null,
      why: gap.why,
      enqueued_at: now().toISOString(),
    })
    if (result.deduped) deduped++
    else enqueued++
  }
  return { enqueued, deduped, total, bucket }
}

function hourBucket(d) {
  const dt = new Date(d)
  dt.setUTCMinutes(0, 0, 0)
  return dt.toISOString()
}

function sha256(s) {
  return createHash("sha256").update(s).digest("hex")
}

// CLI entry
if (import.meta.url === `file://${process.argv[1]}`) {
  const limitArg = process.argv.find((a) => a.startsWith("--limit="))
  const limit = limitArg ? parseInt(limitArg.split("=")[1], 10) : Infinity
  const summary = await enqueueDiscoveryForOpenGaps({ limit })
  console.log(`[enqueue-discovery] ${JSON.stringify(summary)}`)
}
