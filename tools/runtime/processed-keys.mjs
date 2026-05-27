// Worker-side idempotency store.
//
// Each worker calls alreadyProcessed(topic, key) before doing any side-effecting
// work, and markProcessed(topic, key) after success. Keys are persisted to
// data/runtime/processed-keys.jsonl so a worker restart sees the same state.
//
// This is what makes the system safe under at-least-once delivery: if a worker
// crashes after committing side-effects but before acking, the next delivery
// will read the persisted key and short-circuit. The queue treats messages as
// ephemeral plumbing; idempotency belongs here.

import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, "../..")
const DEFAULT_LOG_PATH = resolve(REPO_ROOT, "data/runtime/processed-keys.jsonl")

export function createProcessedKeyStore(opts = {}) {
  const path = opts.path ?? process.env.HMI_PROCESSED_KEYS_PATH ?? DEFAULT_LOG_PATH
  mkdirSync(dirname(path), { recursive: true })
  // Load existing keys into a Set keyed by `${topic}:${key}` for O(1) checks.
  const seen = new Set()
  if (existsSync(path)) {
    for (const line of readFileSync(path, "utf-8").split("\n")) {
      if (!line) continue
      try {
        const row = JSON.parse(line)
        if (row.topic && row.key) seen.add(`${row.topic}:${row.key}`)
      } catch {
        /* skip corrupt line */
      }
    }
  }
  return {
    alreadyProcessed(topic, key) {
      return seen.has(`${topic}:${key}`)
    },
    markProcessed(topic, key) {
      const composite = `${topic}:${key}`
      if (seen.has(composite)) return
      appendFileSync(path, JSON.stringify({ topic, key, at: new Date().toISOString() }) + "\n")
      seen.add(composite)
    },
    /** Test-only: forget everything. */
    reset() {
      seen.clear()
    },
  }
}
