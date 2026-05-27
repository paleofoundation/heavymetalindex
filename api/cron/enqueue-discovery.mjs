// Vercel Cron: hourly discovery enqueue.
//
// Triggered by the cron schedule declared in vercel.json. Reads
// data/gaps/open_gaps.jsonl and enqueues one discovery.candidates message
// per open gap. The hourly bucket in the idempotency key makes repeated
// invocations within the same hour no-ops (queue dedup).

import { enqueueDiscoveryForOpenGaps } from "../../tools/runtime/enqueue-discovery.mjs"

export const config = {
  runtime: "nodejs",
  maxDuration: 60,
}

export default async function handler(req, res) {
  // Vercel cron requests carry a CRON_SECRET header (or query). We also accept
  // VERCEL_QUEUE_SECRET so this is callable in CI.
  const cronSecret = process.env.CRON_SECRET ?? process.env.VERCEL_QUEUE_SECRET
  if (cronSecret) {
    const got = req.headers["x-cron-secret"] ?? req.headers["x-hmi-queue-secret"]
    if (got !== cronSecret) return res.status(401).json({ error: "unauthorized" })
  }
  const summary = await enqueueDiscoveryForOpenGaps()
  res.status(200).json(summary)
}
