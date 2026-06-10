#!/usr/bin/env node
// FRANK v2 — the Governor. The ONLY authorizer of autonomous model spawns.
//
// Every autonomous run asks the Governor for permission BEFORE launching any
// model invocation. The Governor meters the AGGREGATE (spawn-rate, daily
// invocation ceiling, per-engine token budget) and the recent FAILURE-RATE,
// then returns a lease or a refusal. It FAILS CLOSED: if its config, routing
// table, or ledger cannot be read, requestSpawn returns REFUSED — the inverse
// of the 2026-06-09 "log and continue" loop.
//
// This module makes the four 2026-06-09 root causes structurally unreachable:
//   1. No always-on process — callers are bounded and exit (see governed-run.mjs).
//   2. No default-to-Opus — engine+effort is a required engine-routing.json
//      lookup; an unknown work-type is a hard stop, deterministic work gets no LLM.
//   3. No unmetered spawn — this module is the single spawn authorizer.
//   4. No free retry — failures are recorded as terminal outcomes that feed the
//      failure-rate breaker; the audit-attempts cap (drain-audit-queue.mjs) and
//      the breaker together stop a lane from re-burning the same failing work.
//
// Design notes:
//   - State dir defaults to data/evidence/autonomy/, overridable via
//     HMI_GOVERNOR_DIR (used by governor.test.mjs to run against a temp dir).
//   - "invocations" are model-call units. A governed-run of --max=10 reserves
//     10 invocations, so the caps bound real model calls, not wrapper launches.
//   - requestSpawn accepts an optional nowMs for deterministic testing.
//
// CLI:  node tools/autonomy/governor.mjs status   (the 30-second read)

import fs from "node:fs"
import path from "node:path"
import os from "node:os"

const repoRoot = process.cwd()

export function governorDir() {
  return process.env.HMI_GOVERNOR_DIR || path.join(repoRoot, "data/evidence/autonomy")
}
function configPath() { return path.join(governorDir(), "governor-config.json") }
function routingPath() { return path.join(governorDir(), "engine-routing.json") }
function ledgerPath() { return path.join(governorDir(), "spend-ledger.jsonl") }

function expandHome(p) {
  if (!p) return p
  return p.startsWith("~") ? path.join(os.homedir(), p.slice(1)) : p
}

export function loadConfig() {
  return JSON.parse(fs.readFileSync(configPath(), "utf8"))
}
export function loadRouting() {
  return JSON.parse(fs.readFileSync(routingPath(), "utf8"))
}
export function resolveWorkType(workType) {
  const routing = loadRouting()
  const entry = routing.work_types?.[workType]
  if (!entry) return { unknown: true }
  return entry
}

function readLedger() {
  const p = ledgerPath()
  if (!fs.existsSync(p)) return []
  return fs
    .readFileSync(p, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((l) => JSON.parse(l))
}
function appendLedger(event) {
  fs.mkdirSync(governorDir(), { recursive: true })
  fs.appendFileSync(ledgerPath(), JSON.stringify(event) + "\n", "utf8")
}
function startOfDay(ms) {
  const d = new Date(ms)
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
}
const sum = (xs) => xs.reduce((a, b) => a + b, 0)

function refuse(reason, extra = {}) {
  try {
    appendLedger({ event: "refused", ts: new Date().toISOString(), ts_ms: Date.now(), reason, ...extra })
  } catch {}
  return { ok: false, refused: true, reason }
}

// The single authorization point. Returns { ok:true, lease, routing } or
// { ok:false, refused:true, reason }. NEVER throws — any internal error
// becomes a fail-closed REFUSED.
export function requestSpawn({ workType, count = 1, nowMs, dryRun = false } = {}) {
  try {
    const now = nowMs ?? Date.now()
    const config = loadConfig()

    // (2) engine routing — required, fail-closed on unknown / deterministic.
    const routing = resolveWorkType(workType)
    if (routing.unknown) {
      return refuse(`unknown work-type "${workType}" — not in engine-routing.json (fail-closed; no default engine)`, { workType })
    }
    if (routing.llm === false) {
      return refuse(`work-type "${workType}" is deterministic (llm:false) — must not spawn a model`, { workType })
    }
    const engine = routing.engine

    // (1) STOP sentinel.
    const stop = expandHome(config.stop_file || "~/.frank.STOP")
    if (fs.existsSync(stop)) {
      return refuse(`STOP file present: ${stop}`, { workType, engine })
    }

    const ledger = readLedger()
    const spawns = ledger.filter((e) => e.event === "spawn")
    const dayStart = startOfDay(now)
    const hourAgo = now - 3600_000
    const invocationsToday = sum(spawns.filter((e) => e.ts_ms >= dayStart).map((e) => e.count || 1))
    const invocationsLastHour = sum(spawns.filter((e) => e.ts_ms >= hourAgo).map((e) => e.count || 1))

    // (3) aggregate rate + ceiling caps — the dimension a per-item bound can't see.
    if (count > (config.max_invocations_per_run ?? 10)) {
      return refuse(`per-run cap: requested ${count} > max_invocations_per_run ${config.max_invocations_per_run}`, { workType, engine, count })
    }
    if (invocationsLastHour + count > (config.max_invocations_per_hour ?? 12)) {
      return refuse(`hourly cap: ${invocationsLastHour}+${count} > max_invocations_per_hour ${config.max_invocations_per_hour}`, { workType, engine })
    }
    if (invocationsToday + count > (config.max_invocations_per_day ?? 60)) {
      return refuse(`daily cap: ${invocationsToday}+${count} > max_invocations_per_day ${config.max_invocations_per_day}`, { workType, engine })
    }

    // (4) failure-rate breaker over the recent terminal-outcome window.
    const fr = config.failure_rate || {}
    const window = fr.window ?? 20
    const minSample = fr.min_sample ?? 8
    const threshold = fr.threshold ?? 0.35
    const terminal = ledger.filter((e) => e.event === "success" || e.event === "failure").slice(-window)
    if (terminal.length >= minSample) {
      const failures = terminal.filter((e) => e.event === "failure").length
      const rate = failures / terminal.length
      if (rate > threshold) {
        return refuse(
          `failure-rate breaker OPEN: ${failures}/${terminal.length} = ${(rate * 100).toFixed(0)}% > ${(threshold * 100).toFixed(0)}% over last ${terminal.length} outcomes`,
          { workType, engine }
        )
      }
    }

    // per-engine token budget (the dollar backstop; high by design).
    const eb = (config.engine_budgets || {})[engine] || {}
    const estPerCall = eb.est_tokens_per_call ?? routing.est_tokens_per_call ?? 0
    const estCost = count * estPerCall
    if (eb.daily_token_budget != null) {
      const spentToday = sum(spawns.filter((e) => e.engine === engine && e.ts_ms >= dayStart).map((e) => e.est_tokens || 0))
      if (spentToday + estCost > eb.daily_token_budget) {
        return refuse(`daily token budget for ${engine}: ${spentToday}+${estCost} > ${eb.daily_token_budget}`, { workType, engine })
      }
    }

    // Grant — debit BEFORE launch by writing the spawn event.
    const lease = {
      id: `lease-${now}-${Math.abs((workType + engine).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7)) % 100000}`,
      event: "spawn",
      ts: new Date(now).toISOString(),
      ts_ms: now,
      workType,
      engine,
      model: routing.model || null,
      effort: routing.effort || null,
      count,
      est_tokens: estCost,
    }
    if (!dryRun) appendLedger(lease) // dry-run checks everything but does not debit
    return { ok: true, lease, routing }
  } catch (err) {
    // Fail closed: unreadable config/routing/ledger, parse error, anything.
    return { ok: false, refused: true, reason: `fail-closed: governor state unreadable (${err.message})` }
  }
}

// Record the result of a granted lease. Emits one terminal event per OK/failed
// invocation so the failure-rate breaker sees real outcomes, plus a summary row.
// Best-effort: never throws (an outcome write must not crash the run).
export function recordOutcome(lease, { ok = 0, stopped = 0, failed = 0, est_tokens = null, note = "" } = {}) {
  try {
    const now = Date.now()
    const base = { ts: new Date(now).toISOString(), ts_ms: now, workType: lease?.workType, engine: lease?.engine, lease: lease?.id }
    for (let i = 0; i < ok; i++) appendLedger({ event: "success", ...base })
    for (let i = 0; i < failed; i++) appendLedger({ event: "failure", ...base })
    appendLedger({ event: "outcome-summary", ...base, ok, stopped, failed, est_tokens, note })
  } catch {}
}

// ---------- CLI: the 30-second read ----------
function printStatus() {
  let config, ledger
  try {
    config = loadConfig()
  } catch (e) {
    console.log(`Governor config UNREADABLE (${e.message}) — every spawn would be REFUSED (fail-closed).`)
    process.exit(0)
  }
  try {
    ledger = readLedger()
  } catch (e) {
    console.log(`Governor ledger UNREADABLE (${e.message}) — every spawn would be REFUSED (fail-closed).`)
    process.exit(0)
  }
  const now = Date.now()
  const dayStart = startOfDay(now)
  const spawns = ledger.filter((e) => e.event === "spawn")
  const today = spawns.filter((e) => e.ts_ms >= dayStart)
  const invToday = sum(today.map((e) => e.count || 1))
  const tokToday = sum(today.map((e) => e.est_tokens || 0))
  const refusedToday = ledger.filter((e) => e.event === "refused" && e.ts_ms >= dayStart).length
  const fr = config.failure_rate || {}
  const terminal = ledger.filter((e) => e.event === "success" || e.event === "failure").slice(-(fr.window ?? 20))
  const fails = terminal.filter((e) => e.event === "failure").length
  const stopPath = expandHome(config.stop_file || "~/.frank.STOP")
  const stopped = fs.existsSync(stopPath)

  console.log(`FRANK v2 Governor — ${new Date(now).toISOString()}`)
  console.log(`  STOP file (${stopPath}): ${stopped ? "PRESENT — all spawns refused" : "absent"}`)
  console.log(`  Invocations today: ${invToday} / ${config.max_invocations_per_day} (daily cap)`)
  console.log(`  Est tokens today:  ${tokToday.toLocaleString()} (anthropic budget ${(config.engine_budgets?.anthropic?.daily_token_budget ?? 0).toLocaleString()})`)
  console.log(`  Refusals today:    ${refusedToday}`)
  console.log(`  Failure window:    ${fails}/${terminal.length} (breaker trips > ${((fr.threshold ?? 0.35) * 100).toFixed(0)}% with >= ${fr.min_sample ?? 8} samples)`)
  if (today.length) {
    console.log(`  Recent spawns:`)
    for (const e of today.slice(-5)) console.log(`    ${e.ts}  ${e.workType} x${e.count} via ${e.engine}/${e.model}`)
  }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)
if (isMain) {
  const cmd = process.argv[2] || "status"
  if (cmd === "status") printStatus()
  else {
    console.error(`usage: node tools/autonomy/governor.mjs status`)
    process.exit(1)
  }
}
