#!/usr/bin/env node
// FRANK — the continuous, un-wedgeable ingest supervisor.
//
// Replaces tools/autonomy/daemon-tick.sh as the thing launchd keeps alive.
//
// WHY THIS EXISTS. The bash daemon was a single monolithic "tick" that ran
// fetch + ingest + generators + commit in one sequential process. Any one step
// that hung (the gap-driven wishlist fetch hung on exit and froze a tick ~18h)
// or any one step that couldn't commit (the self-heal commit-lock deferral
// killed every tick before it reached the drain) stopped EVERYTHING. The system
// went 12+ hours producing zero papers while reporting itself "running."
//
// FRANK fixes the whole class of bug structurally, not with another band-aid:
//
//   1. Every stage is an ISOLATED, WALL-CLOCK-BOUNDED subprocess in its own
//      process group. If it hangs, FRANK SIGKILLs the whole group at the
//      deadline and moves on. A hung fetch can never stop ingest.
//   2. Every stage is wrapped so a failure LOGS AND CONTINUES. The loop never
//      dies from a stage failure.
//   3. FRANK does NOT sweep-commit the working tree and does NOT gate the loop
//      on a giant commit. The proven ingester commits each source page itself,
//      scoped and small. No 2809-file pile, no self-heal-or-abort.
//   4. If FRANK itself ever crashes, launchd KeepAlive restarts it. FRANK is
//      stateless across restarts — it reads the tracker / folders / gap feed
//      fresh each cycle and continues.
//   5. Every cycle writes a human-readable heartbeat to FRANK-status.md so the
//      answer to "is it running?" is a glance, not a forensic investigation.
//
// Halt: `touch ~/.frank.STOP` (checked at the top of every cycle). Resume: rm it.
//
// It runs the PROVEN producers — the same fetch and ingest that built the
// existing 1,154 source pages — just on an orchestration that can't wedge.

import { spawn, spawnSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import os from "node:os"

const REPO = process.env.HMI_REPO_ROOT || path.join(os.homedir(), "Desktop/heavy-metal-index")
const STOP_FILE = path.join(os.homedir(), ".frank.STOP")
const STATUS_FILE = path.join(REPO, "data/evidence/autonomy/FRANK-status.md")
const LOG_FILE = path.join(REPO, "data/evidence/autonomy/frank.log")

// Cadence. Ingest runs every cycle (it is the core deliverable). Fetch runs
// every Nth cycle (and on the first cycle) to refill the queue from open gaps.
// Synthesis is wired in once a proven entry point lands (see runSynthesis).
const CFG = {
  ingestPerCycle: 1, // PDFs per ingest stage (ingester is serial; keep small for tight heartbeats)
  fetchEveryCycles: 6,
  synthEveryCycles: 12,
  ingestTimeoutMs: 32 * 60 * 1000, // ingester spawns one claude --print (25m cap) + overhead
  fetchTimeoutMs: 22 * 60 * 1000, // wishlist fetch has a 15m internal budget
  synthTimeoutMs: 20 * 60 * 1000,
  sleepBetweenCyclesMs: 60 * 1000,
  idleSleepMs: 8 * 60 * 1000, // when there is genuinely nothing to do, back off
}

const NPM = "/opt/homebrew/bin/npm"
const NODE = "/opt/homebrew/bin/node"

const RECENT = [] // last ~14 stage results, for the heartbeat table
let cycle = 0
let activeChild = null

// ---------------------------------------------------------------- utilities

function nowIso() {
  return new Date().toISOString()
}
function hhmm(d = new Date()) {
  return d.toTimeString().slice(0, 5)
}
function log(line) {
  const msg = `[${nowIso()}] ${line}\n`
  try {
    fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true })
    fs.appendFileSync(LOG_FILE, msg)
  } catch {}
  process.stdout.write(msg)
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}
function stopRequested() {
  return fs.existsSync(STOP_FILE)
}

// Run a stage as an isolated, bounded subprocess. NEVER throws. Returns a
// result object. On timeout, SIGKILLs the whole process group so npm->node->
// claude children all die (the exact thing the bash daemon could not do).
function runStage(name, argv, timeoutMs) {
  return new Promise((resolve) => {
    const start = Date.now()
    let out = "",
      err = "",
      timedOut = false,
      child
    const done = (extra) => {
      activeChild = null
      const durMs = Date.now() - start
      resolve({ name, start, end: Date.now(), durMs, out, err, timedOut, ...extra })
    }
    try {
      child = spawn(argv[0], argv.slice(1), { cwd: REPO, detached: true, env: process.env })
    } catch (e) {
      return done({ ok: false, code: null, error: `spawn failed: ${e.message}` })
    }
    activeChild = child
    const killer = setTimeout(() => {
      timedOut = true
      try {
        process.kill(-child.pid, "SIGKILL")
      } catch {}
    }, timeoutMs)
    child.stdout?.on("data", (d) => {
      out += d
      if (out.length > 24000) out = out.slice(-24000)
    })
    child.stderr?.on("data", (d) => {
      err += d
      if (err.length > 8000) err = err.slice(-8000)
    })
    child.on("error", (e) => {
      clearTimeout(killer)
      done({ ok: false, code: null, error: e.message })
    })
    child.on("exit", (code) => {
      clearTimeout(killer)
      done({ ok: code === 0 && !timedOut, code })
    })
  })
}

// Turn raw stage output into a one-line human summary for the heartbeat.
function summarize(r) {
  if (r.timedOut) return `⏱ hit ${Math.round((r.end - r.start) / 60000)}m timeout — killed, moved on`
  if (r.error) return `spawn error: ${r.error}`
  const tail = (r.out || "") + "\n" + (r.err || "")
  if (r.name === "ingest") {
    const ok = tail.match(/OK:\s*\S+\s*→\s*([^\s]+)/)
    if (ok) return `✓ ingested ${ok[1]}`
    if (/No unprocessed PDFs/i.test(tail)) return "queue empty (nothing to ingest)"
    const stop = tail.match(/STOP:\s*(.+)/)
    if (stop) return `paused: ${stop[1].slice(0, 80)}`
    const batch = tail.match(/Batch complete:\s*(\d+)\s*OK/)
    if (batch) return batch[1] === "0" ? "0 ingested this cycle" : `✓ ${batch[1]} ingested`
    return r.ok ? "ran (no paper this cycle)" : `exit ${r.code}`
  }
  if (r.name === "fetch") {
    const dl = tail.match(/downloaded \(relevance[^)]*\):\s*(\d+)/)
    if (dl) return `✓ fetched ${dl[1]} new PDF(s) for open gaps`
    if (/Wishlist fetch complete/i.test(tail)) return "✓ fetch complete"
    return r.ok ? "fetch ran" : `exit ${r.code}`
  }
  return r.ok ? "ok" : `exit ${r.code}`
}

// ------------------------------------------------------------- scoreboard

function sh(cmd, args, timeoutMs = 6000) {
  try {
    const r = spawnSync(cmd, args, { cwd: REPO, encoding: "utf8", timeout: timeoutMs })
    return r.status === 0 ? (r.stdout || "").trim() : ""
  } catch {
    return ""
  }
}
function countFiles(glob) {
  try {
    return fs.readdirSync(path.join(REPO, "wiki/sources")).filter((f) => f.endsWith(".md")).length
  } catch {
    return "?"
  }
}
function scoreboard() {
  const total = countFiles()
  const last24 = (() => {
    const o = sh("git", ["log", "--since=24.hours.ago", "--diff-filter=A", "--name-only", "--pretty=format:", "--", "wiki/sources"])
    return o ? o.split("\n").filter((l) => l.includes("wiki/sources/")).length : 0
  })()
  const gaps = (() => {
    try {
      return fs.readFileSync(path.join(REPO, "data/gaps/open_gaps.jsonl"), "utf8").split("\n").filter(Boolean).length
    } catch {
      return "?"
    }
  })()
  const unprocessed = (() => {
    try {
      const lines = fs.readFileSync(path.join(REPO, "data/evidence/autonomy/manual-fetch-tracker.csv"), "utf8").split("\n").slice(1)
      return lines.filter((l) => l.split(",")[2] === "unprocessed").length
    } catch {
      return "?"
    }
  })()
  const autoFetched = (() => {
    try {
      return fs.readdirSync(path.join(REPO, "raw/manual-fetch/seasonal-geographic-variance/auto-fetched")).filter((f) => f.endsWith(".pdf")).length
    } catch {
      return 0
    }
  })()
  return { total, last24, gaps, unprocessed, autoFetched }
}

// ------------------------------------------------------------- heartbeat

function heartbeat(doingNow) {
  let sb
  try {
    sb = scoreboard()
  } catch {
    sb = { total: "?", last24: "?", gaps: "?", unprocessed: "?", autoFetched: "?" }
  }
  const rows = RECENT.slice(-14)
    .reverse()
    .map((r) => `| ${hhmm(new Date(r.start))} | ${r.name} | ${r.summary} | ${Math.max(1, Math.round(r.durMs / 60000))}m |`)
    .join("\n")
  const md = `# FRANK — autonomous ingest status

**Alive.** Last beat: ${new Date().toLocaleString()} (cycle ${cycle})
**Doing now:** ${doingNow}

> If this timestamp is more than ~45 minutes old, FRANK is stuck. Tell Claude: "FRANK is stuck."
> To pause FRANK: \`touch ~/.frank.STOP\`. To resume: \`rm ~/.frank.STOP\`.

## Scoreboard
- **Source pages:** ${sb.total}  (**+${sb.last24}** ingested in the last 24h)
- **Open data gaps:** ${sb.gaps}
- **Manual-fetch queue (un-ingested):** ${sb.unprocessed}
- **Auto-fetched, awaiting ingest:** ${sb.autoFetched}

## Recent activity (newest first)
| time | stage | result | dur |
|---|---|---|---|
${rows || "| — | — | starting up… | — |"}

_FRANK runs the proven fetch + ingest on an orchestration that cannot wedge:
every stage is time-boxed and isolated, so one hang or failure can never stall
the loop. Source pages are committed one at a time by the ingester._
`
  try {
    fs.mkdirSync(path.dirname(STATUS_FILE), { recursive: true })
    fs.writeFileSync(STATUS_FILE, md)
  } catch (e) {
    log(`heartbeat write failed: ${e.message}`)
  }
}

// ------------------------------------------------------------- stages

async function runFetch() {
  heartbeat(`fetching papers for open data gaps (started ${hhmm()}, hard-stop ${CFG.fetchTimeoutMs / 60000}m)`)
  log("stage fetch: start")
  const r = await runStage("fetch", [NPM, "run", "wishlist:gap-driven"], CFG.fetchTimeoutMs)
  r.summary = summarize(r)
  RECENT.push(r)
  log(`stage fetch: ${r.summary} (${Math.round(r.durMs / 1000)}s)`)
  return r
}

async function runIngest() {
  heartbeat(`ingesting a paper — full Cochrane workflow (started ${hhmm()}, hard-stop ${CFG.ingestTimeoutMs / 60000}m)`)
  log("stage ingest: start")
  const r = await runStage("ingest", [NODE, "tools/autonomy/ingest-manual-fetch-batch.mjs", `--max-pdfs=${CFG.ingestPerCycle}`], CFG.ingestTimeoutMs)
  r.summary = summarize(r)
  RECENT.push(r)
  log(`stage ingest: ${r.summary} (${Math.round(r.durMs / 1000)}s)`)
  return r
}

// ------------------------------------------------------------- main loop

async function main() {
  log(`FRANK starting. repo=${REPO} pid=${process.pid}`)
  heartbeat("starting up")
  // Clean shutdown: kill any active child so we don't orphan a claude --print.
  for (const sig of ["SIGTERM", "SIGINT"]) {
    process.on(sig, () => {
      log(`got ${sig}, shutting down`)
      if (activeChild) {
        try {
          process.kill(-activeChild.pid, "SIGKILL")
        } catch {}
      }
      heartbeat(`stopped (${sig})`)
      process.exit(0)
    })
  }

  while (!stopRequested()) {
    cycle++
    log(`=== cycle ${cycle} ===`)

    // INGEST first (every cycle) — the core deliverable. With a 274-paper
    // backlog we drain aggressively; fetch only needs to refill periodically.
    let ingestSummary = ""
    try {
      const r = await runIngest()
      ingestSummary = r.summary
    } catch (e) {
      log(`ingest stage threw (continuing): ${e.message}`)
    }
    const queueEmpty = /queue empty/i.test(ingestSummary)

    // FETCH on schedule, OR immediately when the queue just ran dry — so the
    // loop refills itself from open gaps and never starves.
    if (cycle % CFG.fetchEveryCycles === 0 || queueEmpty) {
      try {
        await runFetch()
      } catch (e) {
        log(`fetch stage threw (continuing): ${e.message}`)
      }
    }

    heartbeat(`idle between cycles (last ingest: ${ingestSummary || "—"})`)
    if (stopRequested()) break
    await sleep(queueEmpty ? CFG.idleSleepMs : CFG.sleepBetweenCyclesMs)
  }

  log("STOP file present — FRANK halting cleanly")
  heartbeat("halted (~/.frank.STOP present)")
  process.exit(0)
}

main().catch((e) => {
  // Last-resort guard: even an unexpected throw in main() should not leave a
  // silent corpse. Log it and exit non-zero so launchd KeepAlive restarts us.
  log(`FATAL (launchd will restart): ${e && e.stack ? e.stack : e}`)
  try {
    heartbeat(`crashed: ${e && e.message ? e.message : e} — launchd is restarting FRANK`)
  } catch {}
  process.exit(1)
})
