#!/usr/bin/env node
// Local worker pool / event loop.
//
// Pulls messages from the SQLite-backed local queue and dispatches them
// through the same worker handlers used by Vercel Functions in production.
//
// Usage:
//
//   # Drain the queue and exit (the default — convenient for CI / smoke).
//   HMI_RUNTIME=local node tools/runtime/run-loop.mjs --drain
//
//   # Run forever (Ctrl-C to stop) with a 1-second poll between empty leases.
//   HMI_RUNTIME=local node tools/runtime/run-loop.mjs
//
//   # Force a specific dependency set (defaults to the fixture demo deps).
//   HMI_RUNTIME=local HMI_DEPS=fixtures node tools/runtime/run-loop.mjs
//
// Production runs do NOT use this script — the Vercel Functions in api/queue/*
// are invoked directly by the platform.

import { createLocalQueue } from "./local-queue.mjs"
import { createProcessedKeyStore } from "./processed-keys.mjs"
import { runDiscoveryWorker, runExtractionWorker, runRoutingWorker } from "./workers.mjs"
import { createFixtureDeps } from "./fixtures.mjs"

const TOPICS = ["discovery.candidates", "extraction.requests", "routing.edits"]

const HANDLERS = {
  "discovery.candidates": runDiscoveryWorker,
  "extraction.requests": runExtractionWorker,
  "routing.edits": runRoutingWorker,
}

const args = new Set(process.argv.slice(2))
const drain = args.has("--drain")
const verbose = args.has("--verbose") || process.env.HMI_RUNTIME_VERBOSE === "1"
const maxIterations = parseInt(process.env.HMI_RUNTIME_MAX_ITERATIONS ?? "10000", 10)

function log(...a) {
  if (verbose) console.log("[run-loop]", ...a)
}

const queue = createLocalQueue()
const keys = createProcessedKeyStore()
const deps = await selectDeps(keys)

let processed = 0
let iter = 0
const start = Date.now()

try {
  while (iter++ < maxIterations) {
    let didWork = false
    for (const topic of TOPICS) {
      const leased = queue.lease(topic)
      if (!leased) continue
      didWork = true
      processed++
      const handler = HANDLERS[topic]
      const outcome = await runOne(topic, leased, handler, deps)
      if (outcome.outcome === "ack") {
        queue.ack(leased.messageId)
        for (const nx of outcome.next ?? []) {
          queue.enqueue(nx.topic, nx.body)
        }
        log(`ack ${topic} ${leased.messageId} → ${(outcome.next ?? []).length} next`)
      } else if (outcome.outcome === "retry") {
        const r = queue.nack(leased.messageId, outcome.error ?? "")
        log(`retry ${topic} ${leased.messageId} dead_lettered=${r.dead_lettered}`)
      } else if (outcome.outcome === "dead_letter") {
        // Force dead-letter immediately by exhausting attempts via nack until DL.
        let r = { dead_lettered: false }
        while (!r.dead_lettered) {
          r = queue.nack(leased.messageId, outcome.error ?? "validation")
          if (!r.dead_lettered) {
            // Bump again on next attempt. The lease loop already incremented
            // attempts once; nack does not re-lease, so we re-lease here only
            // to retry the dead-letter path. In practice, a single nack should
            // dead-letter when attempts is high enough; we cap the loop.
            const peek = queue.lease(topic, 1)
            if (!peek || peek.messageId !== leased.messageId) break
          }
        }
        log(`dead_letter ${topic} ${leased.messageId}`)
      }
    }
    if (!didWork) {
      if (drain) break
      await sleep(1000)
    }
  }
} finally {
  queue.close()
  const elapsedMs = Date.now() - start
  console.log(
    `[run-loop] processed=${processed} iterations=${iter} elapsed_ms=${elapsedMs} backend=${queue.backend}`,
  )
}

async function runOne(topic, leased, handler, deps) {
  try {
    return await handler(leased.body, deps)
  } catch (err) {
    return { outcome: "retry", next: [], error: String(err) }
  }
}

async function selectDeps(keys) {
  const which = process.env.HMI_DEPS ?? "fixtures"
  if (which === "fixtures") {
    return createFixtureDeps({ processedKeys: keys })
  }
  // Hook for the real dependency set, wired in HMI-9.8 / HMI-9.9.
  const { createProductionDeps } = await import("./deps-production.mjs").catch(() => ({}))
  if (!createProductionDeps) {
    throw new Error(
      "HMI_DEPS=production requested but tools/runtime/deps-production.mjs is not yet wired. Set HMI_DEPS=fixtures for local demos.",
    )
  }
  return createProductionDeps({ processedKeys: keys })
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}
