#!/usr/bin/env node
// FRANK v2 Phase 1 — the bounded wrapper. ONE governed batch, then exit.
//
// This is the only sanctioned entry point for autonomous ingest. It:
//   1. Asks the Governor for permission for up to `--max` model invocations of
//      a given work-type (the Governor reads engine-routing.json for the
//      engine/model/effort, and meters spend/rate/failure — see governor.mjs).
//   2. On REFUSED: prints the reason and exits 0 WITHOUT spawning anything.
//   3. On grant: runs the routed producer for one bounded batch, parses its
//      "Batch complete: X OK, Y stopped, Z failed" line, records the outcome to
//      the spend-ledger, and EXITS. No loop, no keep-awake, no self-respawn.
//
// Crash-safety comes from the producer's own per-item commits + the tracker,
// never from a process refusing to die. Run it from a launchd StartInterval
// timer (single concurrent run) — see com.paleo.heavymetalindex.governed.plist.template.
//
// Usage:
//   node tools/autonomy/governed-run.mjs --work=manual-fetch-ingest --max=10
//   node tools/autonomy/governed-run.mjs --work=manual-fetch-ingest --max=10 --dry-run
//   node tools/autonomy/governed-run.mjs --work=audit-adjudication --max=5

import path from "node:path"
import { spawnSync } from "node:child_process"
import { requestSpawn, recordOutcome } from "./governor.mjs"

const repoRoot = process.cwd()

// Producers wired for Phase 1. Each maps a routed engine/model + batch size to a
// concrete `node <script> <args>` command whose final line is parseable as
// "Batch complete: X OK, Y stopped, Z failed". Only work-types listed here AND
// present in engine-routing.json can run.
const PRODUCERS = {
  "manual-fetch-ingest": {
    script: "tools/autonomy/ingest-manual-fetch-batch.mjs",
    buildArgs: (routing, max) => [`--max-pdfs=${max}`, `--model=${routing.model}`, "--exclude-roots=auto-fetched"],
  },
  "audit-adjudication": {
    script: "tools/autonomy/drain-audit-queue.mjs",
    buildArgs: (routing, max) => [`--max=${max}`, `--model=${routing.model}`],
  },
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq > 0) m.set(a.slice(2, eq), a.slice(eq + 1))
      else m.set(a.slice(2), "true")
    }
  }
  return m
}

const args = parseArgs(process.argv.slice(2))
const workType = args.get("work") || "manual-fetch-ingest"
const max = Number(args.get("max") ?? 10)
const dryRun = args.get("dry-run") === "true"

if (!Number.isInteger(max) || max < 1) {
  console.error(`--max must be a positive integer (got ${args.get("max")})`)
  process.exit(2)
}

// 1. Ask the Governor. This is the ONLY authorization; it fails closed.
// A dry-run runs every check but does not debit the ledger.
const decision = requestSpawn({ workType, count: max, dryRun })
if (!decision.ok) {
  console.log(`REFUSED: ${decision.reason}`)
  process.exit(0) // clean refusal — nothing spawned
}
const { lease, routing } = decision

const producer = PRODUCERS[workType]
if (!producer) {
  // Governor granted (work-type is in routing) but no Phase-1 producer is wired.
  // Record a zero-outcome so the grant isn't a phantom debit, and stop.
  console.log(`No Phase-1 producer wired for work-type "${workType}" (granted lease ${lease.id} but nothing to run).`)
  recordOutcome(lease, { ok: 0, stopped: 0, failed: 0, note: "no producer wired" })
  process.exit(0)
}

if (dryRun) {
  const cmdArgs = producer.buildArgs(routing, max)
  console.log(`DRY-RUN — lease ${lease.id} granted.`)
  console.log(`  would run: node ${producer.script} ${cmdArgs.join(" ")}`)
  console.log(`  engine=${routing.engine} model=${routing.model} effort=${routing.effort} max=${max}`)
  console.log(`  (dry-run — Governor checked all caps but did NOT debit the ledger)`)
  process.exit(0)
}

// 2. Run the producer for one bounded batch.
const scriptPath = path.join(repoRoot, producer.script)
const producerArgs = producer.buildArgs(routing, max)
console.log(`governed-run: lease ${lease.id} — node ${producer.script} ${producerArgs.join(" ")}`)

const res = spawnSync(process.execPath, [scriptPath, ...producerArgs], {
  cwd: repoRoot,
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
  // Hard wall-clock ceiling so one stuck batch can never run unbounded.
  // Sized for max * 25-min-per-item with headroom; the producer also self-caps.
  timeout: Math.min(6 * 3600_000, (max + 1) * 26 * 60_000),
})

const stdout = res.stdout || ""
const stderr = res.stderr || ""
if (stdout) process.stdout.write(stdout)
if (stderr) process.stderr.write(stderr)

// 3. Parse the producer's terminal tally and record the outcome.
let ok = 0,
  stopped = 0,
  failed = 0
const m = stdout.match(/Batch complete:\s*(\d+)\s*OK,\s*(\d+)\s*stopped,\s*(\d+)\s*failed/)
if (m) {
  ok = Number(m[1])
  stopped = Number(m[2])
  failed = Number(m[3])
} else {
  // No parseable tally — the producer crashed, timed out, or printed nothing.
  // Count the whole batch attempt as a failure so the failure-rate breaker sees it.
  failed = 1
  console.error(`governed-run: no "Batch complete" line parsed (exit=${res.status}, signal=${res.signal}); recording batch as 1 failure.`)
}

recordOutcome(lease, { ok, stopped, failed, est_tokens: lease.est_tokens, note: m ? "batch parsed" : `unparsed (exit ${res.status}/${res.signal})` })
console.log(`governed-run: recorded ${ok} OK, ${stopped} stopped, ${failed} failed for lease ${lease.id}.`)
process.exit(0)
