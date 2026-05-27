// Vercel Function: consumer for the `extraction.requests` topic.
// See api/queue/discovery.mjs for the design notes; same shape.

import { validateExtractionMessage } from "../../tools/runtime/schemas/messages.js"
import { runExtractionWorker } from "../../tools/runtime/workers.mjs"
import { toQueueResponse } from "../../tools/runtime/vercel-queue.mjs"
import { getQueueAdapter } from "../../tools/runtime/queue.mjs"
import { createProcessedKeyStore } from "../../tools/runtime/processed-keys.mjs"

export const config = {
  runtime: "nodejs",
  maxDuration: 300,
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" })
  if (!checkSecret(req)) return res.status(401).json({ error: "unauthorized" })
  let body
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body
    validateExtractionMessage(body)
  } catch (err) {
    const r = toQueueResponse("dead_letter")
    return res.status(r.status).json({ ...r.body, error: String(err) })
  }
  const deps = await loadDeps()
  const result = await runExtractionWorker(body, deps)
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
