// Vercel Cron: hourly discovery enqueue.
//
// Triggered by the cron schedule declared in vercel.json. Reads
// data/gaps/open_gaps.jsonl and enqueues one discovery.candidates message
// per open gap. The hourly bucket in the idempotency key makes repeated
// invocations within the same hour no-ops (queue dedup).
//
// Production posture (2026-05-29): the queue runtime is not wired in
// production. `HMI_RUNTIME` is unset, so the default "local" path tries to
// open a SQLite file under data/runtime/local-queue.sqlite — Vercel function
// filesystems are read-only outside /tmp, so the open errors with ENOENT
// (parent dir does not exist on the immutable function FS) and the cron
// 500s every hour. Discovery enqueueing actually happens on Karen's Mac
// mini autonomy daemon; this cron is intended as a redundant CI / cloud
// trigger that will activate once VERCEL_QUEUE_* secrets are provisioned.
//
// Until then this handler gracefully no-ops with a 200 + diagnostic
// payload, instead of 500ing and polluting the runtime-logs error stream.
// When Karen wires VERCEL_QUEUE_DISCOVERY_URL + VERCEL_QUEUE_SECRET and
// sets HMI_RUNTIME=vercel, the no-op gate disengages automatically.

import { enqueueDiscoveryForOpenGaps } from "../../tools/runtime/enqueue-discovery.mjs"

export const config = {
  runtime: "nodejs",
  maxDuration: 60,
}

function queueRuntimeStatus() {
  const runtime = process.env.HMI_RUNTIME ?? "local"
  if (runtime === "vercel") {
    const missing = []
    if (!process.env.VERCEL_QUEUE_SECRET) missing.push("VERCEL_QUEUE_SECRET")
    if (!process.env.VERCEL_QUEUE_DISCOVERY_URL) missing.push("VERCEL_QUEUE_DISCOVERY_URL")
    return missing.length === 0
      ? { ready: true, runtime }
      : { ready: false, runtime, reason: "missing_env", missing }
  }
  // Default "local" runtime uses SQLite which cannot open under the
  // function's read-only filesystem. Treat as unwired in serverless.
  return { ready: false, runtime, reason: "local_runtime_in_serverless" }
}

export default async function handler(req, res) {
  // Vercel cron requests carry a CRON_SECRET header (or query). We also accept
  // VERCEL_QUEUE_SECRET so this is callable in CI.
  const cronSecret = process.env.CRON_SECRET ?? process.env.VERCEL_QUEUE_SECRET
  if (cronSecret) {
    const got = req.headers["x-cron-secret"] ?? req.headers["x-hmi-queue-secret"]
    if (got !== cronSecret) return res.status(401).json({ error: "unauthorized" })
  }

  const status = queueRuntimeStatus()
  if (!status.ready) {
    // No-op return so the cron stops 500ing on every hour-bucket fire.
    // The autonomy daemon on Karen's Mac mini handles real enqueueing.
    console.log(
      "hmi.cron.enqueue-discovery.skipped " + JSON.stringify({ ...status, fired_at: new Date().toISOString() }),
    )
    return res.status(200).json({
      ok: true,
      skipped: true,
      ...status,
      note:
        "Discovery enqueue skipped because the production queue runtime is not wired. To activate: set HMI_RUNTIME=vercel and the VERCEL_QUEUE_* env vars on this Vercel project. The autonomy daemon on Karen's Mac mini handles enqueueing locally in the meantime.",
    })
  }

  try {
    const summary = await enqueueDiscoveryForOpenGaps()
    res.status(200).json({ ok: true, ...summary })
  } catch (error) {
    console.error("cron.enqueue-discovery failed:", String(error && error.message || error))
    res.status(500).json({
      ok: false,
      error: String(error && error.message || error),
      ...status,
    })
  }
}
