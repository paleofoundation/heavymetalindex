// Vercel Function: consumer for the `routing.edits` topic.
// See api/queue/discovery.mjs for the design notes; same shape.

import { validateRoutingMessage } from "../../tools/runtime/schemas/messages.js"
import { runRoutingWorker } from "../../tools/runtime/workers.mjs"
import { toQueueResponse } from "../../tools/runtime/vercel-queue.mjs"
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
    const { validateRoutingMessage } = await import("../../tools/runtime/schemas/messages.js")
    validateRoutingMessage(body)
  } catch (err) {
    const r = toQueueResponse("dead_letter")
    return res.status(r.status).json({ ...r.body, error: String(err) })
  }
  const deps = await loadDeps()
  const result = await runRoutingWorker(body, deps)
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
