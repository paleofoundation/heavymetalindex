// Fail-closed proof for the FRANK v2 Governor. Runs with NO model spawns.
//   node --test tools/autonomy/governor.test.mjs
//
// Each test gets its own temp governor dir (HMI_GOVERNOR_DIR) so ledger state
// is isolated. Test functions are synchronous: env is set and requestSpawn is
// called within one synchronous frame, so concurrent tests cannot interleave
// the shared env var.

import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"

import { requestSpawn } from "./governor.mjs"

const T = Date.UTC(2026, 5, 10, 12, 0, 0) // fixed "now" at 12:00 UTC for deterministic windows
let counter = 0

const DEFAULT_ROUTING = {
  work_types: {
    "manual-fetch-ingest": { llm: true, engine: "anthropic", model: "claude-sonnet-4-6", effort: "high" },
    "deterministic-extraction": { llm: false },
  },
}
function defaultConfig(stopFile) {
  return {
    stop_file: stopFile,
    max_invocations_per_run: 10,
    max_invocations_per_hour: 12,
    max_invocations_per_day: 60,
    failure_rate: { window: 20, min_sample: 8, threshold: 0.35 },
    engine_budgets: {
      anthropic: { daily_token_budget: 3000000, est_tokens_per_call: 75000 },
      codex: { daily_token_budget: null, est_tokens_per_call: 0 },
    },
  }
}

// Create an isolated governor dir; omit `config` to simulate unreadable config.
function setup({ config, routing = DEFAULT_ROUTING, ledger = [] } = {}) {
  const dir = path.join(os.tmpdir(), `gov-test-${process.pid}-${counter++}`)
  fs.mkdirSync(dir, { recursive: true })
  const stopFile = path.join(dir, "NOPE.STOP")
  if (config === undefined) config = defaultConfig(stopFile)
  else if (config && !config.stop_file) config.stop_file = stopFile
  if (config) fs.writeFileSync(path.join(dir, "governor-config.json"), JSON.stringify(config))
  fs.writeFileSync(path.join(dir, "engine-routing.json"), JSON.stringify(routing))
  if (ledger.length) fs.writeFileSync(path.join(dir, "spend-ledger.jsonl"), ledger.map((e) => JSON.stringify(e)).join("\n") + "\n")
  process.env.HMI_GOVERNOR_DIR = dir
  return { dir, stopFile }
}
const spawnEvent = (count, ts_ms, engine = "anthropic") => ({ event: "spawn", ts_ms, engine, count, est_tokens: count * 75000 })

test("unknown work-type is refused (no default engine)", () => {
  setup()
  const r = requestSpawn({ workType: "totally-made-up", count: 1, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /unknown work-type/)
})

test("deterministic work-type (llm:false) is refused", () => {
  setup()
  const r = requestSpawn({ workType: "deterministic-extraction", count: 1, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /deterministic/)
})

test("STOP file present refuses every spawn", () => {
  const { stopFile } = setup()
  fs.writeFileSync(stopFile, "")
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 1, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /STOP file present/)
})

test("unreadable config fails CLOSED (refused, not allowed)", () => {
  setup({ config: null }) // no governor-config.json written
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 1, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /fail-closed/)
})

test("per-run cap refuses an oversized batch", () => {
  setup()
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 11, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /per-run cap/)
})

test("daily invocation ceiling refuses once the day is spent", () => {
  setup({ ledger: [spawnEvent(60, T - 2 * 3600_000)] }) // 60 today, 2h ago (outside hour window)
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 1, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /daily cap/)
})

test("hourly rate cap refuses a burst", () => {
  setup({ ledger: [spawnEvent(12, T - 5 * 60_000)] }) // 12 in the last 5 min
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 1, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /hourly cap/)
})

test("failure-rate breaker halts a mostly-failing lane", () => {
  // 8 recent terminal outcomes, 4 failures = 50% > 35% threshold
  const ledger = []
  for (let i = 0; i < 4; i++) ledger.push({ event: "failure", ts_ms: T - 1000 })
  for (let i = 0; i < 4; i++) ledger.push({ event: "success", ts_ms: T - 1000 })
  setup({ ledger })
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 1, nowMs: T })
  assert.equal(r.ok, false)
  assert.match(r.reason, /failure-rate breaker/)
})

test("per-engine daily token budget binds", () => {
  const config = defaultConfig()
  config.engine_budgets.anthropic.daily_token_budget = 100000 // ~1.3 calls
  setup({ config })
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 2, nowMs: T }) // 150k > 100k
  assert.equal(r.ok, false)
  assert.match(r.reason, /daily token budget/)
})

test("happy path grants a lease and debits the ledger", () => {
  const { dir } = setup()
  const r = requestSpawn({ workType: "manual-fetch-ingest", count: 5, nowMs: T })
  assert.equal(r.ok, true)
  assert.equal(r.lease.count, 5)
  assert.equal(r.lease.engine, "anthropic")
  assert.equal(r.lease.est_tokens, 5 * 75000)
  const ledger = fs.readFileSync(path.join(dir, "spend-ledger.jsonl"), "utf8").trim().split("\n").map((l) => JSON.parse(l))
  const spawns = ledger.filter((e) => e.event === "spawn")
  assert.equal(spawns.length, 1)
  assert.equal(spawns[0].count, 5)
})

test("a granted lease counts against the next request's caps (debit-before-launch)", () => {
  setup()
  const first = requestSpawn({ workType: "manual-fetch-ingest", count: 8, nowMs: T })
  assert.equal(first.ok, true)
  // 8 already spent this hour; cap is 12; a second batch of 5 would be 13 > 12.
  const second = requestSpawn({ workType: "manual-fetch-ingest", count: 5, nowMs: T })
  assert.equal(second.ok, false)
  assert.match(second.reason, /hourly cap/)
})
