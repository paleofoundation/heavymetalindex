// Vercel Function: consumer for the `discovery.candidates` topic.
//
// Wired to the same worker handler that the local-runtime tests cover. The
// Vercel Queues runtime invokes this endpoint with the queued message body;
// we return 200 to ack, 503 to retry (platform backoff applies), or 422 to
// poison-dead-letter. MAX_ATTEMPTS is enforced by the platform's retry policy
// configured in vercel.ts.
//
// Authentication: the producer (tools/runtime/vercel-queue.mjs) sets
// `x-hmi-queue-secret` to `VERCEL_QUEUE_SECRET`. We reject any request whose
// header does not match.

import { validateDiscoveryMessage } from "../../tools/runtime/schemas/messages.js"
import { runDiscoveryWorker } from "../../tools/runtime/workers.mjs"
import { toQueueResponse } from "../../tools/runtime/vercel-queue.mjs"
import { getQueueAdapter } from "../../tools/runtime/queue.mjs"
import { createProcessedKeyStore } from "../../tools/runtime/processed-keys.mjs"

export const config = {
  runtime: "nodejs",
  maxDuration: 300,
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" })
    return
  }
  if (!checkSecret(req)) {
    res.status(401).json({ error: "unauthorized" })
    return
  }
  let body
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body
    validateDiscoveryMessage(body)
  } catch (err) {
    const r = toQueueResponse("dead_letter")
    res.status(r.status).json({ ...r.body, error: String(err) })
    return
  }
  const deps = await loadDeps()
  const result = await runDiscoveryWorker(body, deps)
  if (result.outcome === "ack") {
    const queue = await getQueueAdapter()
    for (const nx of result.next ?? []) {
      await queue.enqueue(nx.topic, nx.body)
    }
  }
  const r = toQueueResponse(result.outcome)
  res.status(r.status).json(r.body)
}

function checkSecret(req) {
  const expected = process.env.VERCEL_QUEUE_SECRET
  if (!expected) return false
  const got = req.headers["x-hmi-queue-secret"]
  return typeof got === "string" && got === expected
}

let depsPromise = null
function loadDeps() {
  if (!depsPromise) {
    depsPromise = (async () => {
      const keys = createProcessedKeyStore()
      const which = process.env.HMI_DEPS ?? "fixtures"
      if (which === "fixtures") {
        const { createFixtureDeps } = await import("../../tools/runtime/fixtures.mjs")
        return createFixtureDeps({ processedKeys: keys })
      }
      const { createProductionDeps } = await import("../../tools/runtime/deps-production.mjs")
      return createProductionDeps({ processedKeys: keys })
    })()
  }
  return depsPromise
}
