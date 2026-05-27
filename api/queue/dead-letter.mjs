// Vercel Function: read-only dead-letter snapshot for the coverage dashboard.
//
// Returns the most recent dead-lettered messages across all three topics.
// The coverage dashboard (HMI-9.11) consumes this endpoint to render the
// "stuck" section. Auth via the same shared secret as the queue consumers.

import { getQueueAdapter } from "../../tools/runtime/queue.mjs"

export const config = {
  runtime: "nodejs",
  maxDuration: 30,
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "method_not_allowed" })
  if (!checkSecret(req)) return res.status(401).json({ error: "unauthorized" })
  const url = new URL(req.url ?? "/", "http://localhost")
  const topic = url.searchParams.get("topic")
  const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "100", 10) || 100, 500)
  const q = await getQueueAdapter()
  const rows = await q.listDeadLetter(topic, limit)
  res.setHeader("cache-control", "no-store")
  res.status(200).json({ rows })
}

function checkSecret(req) {
  const expected = process.env.VERCEL_QUEUE_SECRET
  if (!expected) return false
  const got = req.headers["x-hmi-queue-secret"]
  return typeof got === "string" && got === expected
}
