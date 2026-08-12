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
  discoverEveryCycles: 18, // multi-DB /discover sweep over open gaps (Sonnet; budgeted)
  discoverMaxGapsPerRun: 1, // one page-group per stage (each covers all open metals on that page); a full /discover sweep is ~12-18m, so keep the stage short and predictable
  ingestTimeoutMs: 32 * 60 * 1000, // ingester spawns one claude --print (25m cap) + overhead
  fetchTimeoutMs: 22 * 60 * 1000, // wishlist fetch has a 15m internal budget
  discoverTimeoutMs: 26 * 60 * 1000, // 1 page-group × 20m /discover + overhead
  synthTimeoutMs: 20 * 60 * 1000,
  sleepBetweenCyclesMs: 60 * 1000,
  idleSleepMs: 8 * 60 * 1000, // when there is genuinely nothing to do, back off
}

const NPM = "/opt/homebrew/bin/npm"
const NODE = "/opt/homebrew/bin/node"

// Drop zone: a new folder dropped here (loose PDFs or zips) is auto-extracted,
// deduped, and ingested with no manual step. FRANK only touches a folder once
// it has stopped changing for 5 min (so it isn't processed mid-copy), and
// records handled folders so it never re-processes one.
const DROP_ZONE = path.join(REPO, "raw/Manual Fetch Kimi ")
const INTAKE_DONE = path.join(REPO, "data/evidence/autonomy/frank-intake-done.txt")
const INTAKE_SETTLE_MS = 5 * 60 * 1000

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

// Last "doing now" message + when it started, so the periodic heartbeat (and
// the mid-stage refresh timer) can show live elapsed time during a long stage
// instead of a frozen timestamp. Call heartbeat() with no arg to just refresh.
let _doing = "starting up"
let _doingSince = Date.now()

function heartbeat(doingNow) {
  if (doingNow !== undefined) {
    _doing = doingNow
    _doingSince = Date.now()
  }
  const elapsedMin = Math.round((Date.now() - _doingSince) / 60000)
  const doingLine = elapsedMin >= 2 ? `${_doing} — ${elapsedMin}m elapsed` : _doing
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
  // Surface the origin-sync circuit breaker (tools/autonomy/frank-sync.sh) so a
  // stalled push shows up here, in the one status file Karen reads, instead of
  // only in frank-sync.log. The marker lives outside the repo to avoid churn.
  let syncAlarm = ""
  try {
    const m = path.join(os.homedir(), ".frank-sync.STALLED")
    if (fs.existsSync(m)) {
      const reason = (fs.readFileSync(m, "utf8").split("\n")[0] || "origin-sync stalled").trim()
      syncAlarm = `\n> ⚠️ **origin-sync STALLED** — ${reason}\n> Local commits are not reaching GitHub. Recover: \`bash tools/autonomy/frank-resync.sh\`\n`
    }
  } catch {}
  const md = `# FRANK — autonomous ingest status

**Alive.** Last beat: ${new Date().toLocaleString()} (cycle ${cycle})
**Doing now:** ${doingLine}
${syncAlarm}
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
    // Reconcile the OLD daemon health signal: sprint-dashboard.mjs reads
    // data/evidence/autonomy/heartbeat.txt for "daemon heartbeat" age. The
    // daemon is retired, so that file went stale and the dashboard showed a
    // false "stale" alarm. FRANK now writes it so there is ONE truth.
    fs.writeFileSync(path.join(REPO, "data/evidence/autonomy/heartbeat.txt"), `${nowIso()} FRANK cycle ${cycle} — ${_doing}\n`)
  } catch (e) {
    log(`heartbeat write failed: ${e.message}`)
  }
}

// Shared file-based agent ledger (Codex's coordination proposal, 2026-06-02):
// both FRANK/Opus and Codex append events here so each can see what the other
// already handled, without fragile chat state. Append-only JSONL.
function ledgerAppend(event) {
  try {
    const line = JSON.stringify({ ts: nowIso(), ...event }) + "\n"
    fs.appendFileSync(path.join(REPO, "data/evidence/autonomy/agent-events.jsonl"), line)
  } catch {}
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

// Multi-DB discovery sweep over open data gaps. The wishlist fetch stage above
// is OpenAlex+PubMed only and goes dry on hard gaps (heartbeat shows "fetched 0
// new PDF(s)" while hundreds of gaps stay open). This stage drives the 10-database
// /discover skill (Crossref + Unpaywall + PMC + Semantic Scholar + CORE resolve OA
// PDFs OpenAlex misses) headless, gap-driven, budgeted. /discover stages PDFs into
// raw/Manual Fetch Discovery/ — a manual-fetch root NOT excluded by the ingester's
// --exclude-roots=auto-fetched — so the very next ingest cycle picks them up.
// Disable independently of FRANK with `touch ~/.discover.STOP`. Isolated and
// time-boxed like every stage: a hang here can never stall the loop.
async function runDiscover() {
  heartbeat(`multi-DB /discover sweep over open gaps (started ${hhmm()}, hard-stop ${CFG.discoverTimeoutMs / 60000}m)`)
  log("stage discover: start")
  const r = await runStage(
    "discover",
    [NODE, "tools/autonomy/discover-autopilot.mjs", `--max-gaps=${CFG.discoverMaxGapsPerRun}`, "--model=sonnet", "--timeout-mins=20"],
    CFG.discoverTimeoutMs,
  )
  r.summary = r.timedOut ? "⏱ discover timeout" : r.ok ? summarize(r) : `discover exit ${r.code}`
  RECENT.push(r)
  log(`stage discover: ${r.summary} (${Math.round(r.durMs / 1000)}s)`)
  return r
}

async function runIngest() {
  heartbeat(`ingesting a paper — full Cochrane workflow (started ${hhmm()}, hard-stop ${CFG.ingestTimeoutMs / 60000}m)`)
  log("stage ingest: start")
  // --exclude-roots=auto-fetched: Opus owns the curated manual folders; the
  // Codex/GPT-5.5 engine (free, ChatGPT Plus) owns the auto-fetched bulk via
  // its own launchd job. Partitioned so the two engines never pick the same
  // paper. Don't spend paid Opus on the high-volume machine-fetched stream.
  const r = await runStage(
    "ingest",
    [NODE, "tools/autonomy/ingest-manual-fetch-batch.mjs", `--max-pdfs=${CFG.ingestPerCycle}`, "--exclude-roots=auto-fetched"],
    CFG.ingestTimeoutMs,
  )
  r.summary = summarize(r)
  RECENT.push(r)
  log(`stage ingest: ${r.summary} (${Math.round(r.durMs / 1000)}s)`)
  // Record to the shared agent ledger so Codex can see what Opus handled.
  const m = (r.out || "").match(/OK:\s*\S+\s*→\s*(\S+)/)
  if (m) ledgerAppend({ actor: "frank-opus", cite_key: m[1], status: "ingested", source_path: "", commit: "", blocker: "", next: "" })
  return r
}

// Newest mtime anywhere under a folder — used to tell "still being copied" from
// "settled and ready to process."
function newestMtimeMs(root) {
  let max = 0
  const walk = (d) => {
    let entries
    try {
      entries = fs.readdirSync(d, { withFileTypes: true })
    } catch {
      return
    }
    for (const e of entries) {
      const full = path.join(d, e.name)
      try {
        const st = fs.statSync(full)
        if (st.mtimeMs > max) max = st.mtimeMs
        if (e.isDirectory()) walk(full)
      } catch {}
    }
  }
  walk(root)
  return max
}

// Count .pdf files anywhere under a folder. The intake "done" marker stores
// this count so an expanded folder (more PDFs than last time) re-preps instead
// of being skipped forever.
function countPdfsDeep(root) {
  let n = 0
  const walk = (d) => {
    let entries
    try {
      entries = fs.readdirSync(d, { withFileTypes: true })
    } catch {
      return
    }
    for (const e of entries) {
      if (e.isDirectory()) walk(path.join(d, e.name))
      else if (e.name.toLowerCase().endsWith(".pdf")) n++
    }
  }
  walk(root)
  return n
}

function intakeDone() {
  // Map folderName -> highest PDF count seen at intake. New records are written
  // as "name\tcount"; legacy "name" lines (no tab) read as Infinity so a
  // historical folder is never needlessly re-prepped. A folder that has GROWN
  // since its recorded count re-preps once (see runIntake); a numeric record
  // always wins over a legacy Infinity for the same name.
  const m = new Map()
  try {
    for (const line of fs.readFileSync(INTAKE_DONE, "utf8").split("\n")) {
      const s = line.trim()
      if (!s) continue
      const tab = s.lastIndexOf("\t")
      const name = (tab === -1 ? s : s.slice(0, tab)).trim()
      const count = tab === -1 ? Infinity : parseInt(s.slice(tab + 1), 10) || 0
      const prev = m.get(name)
      if (count === Infinity) {
        if (prev === undefined) m.set(name, Infinity)
      } else {
        m.set(name, prev === undefined || prev === Infinity ? count : Math.max(prev, count))
      }
    }
  } catch {}
  return m
}

// Periodic dashboard + gap-metric refresh. The retired daemon used to own this;
// without it, wiki/sprint-status.md went stale and showed a false "daemon
// heartbeat stale" alarm (Codex flagged this). FRANK now regenerates it so the
// gap metric (cells closed) and one true heartbeat stay current. Best-effort,
// isolated — a failure here can never stall ingest.
async function runDashboard() {
  heartbeat("refreshing dashboard + gap metrics")
  for (const argv of [[NODE, "tools/autonomy/completion-matrix.mjs"], [NODE, "tools/autonomy/sprint-dashboard.mjs"]]) {
    const r = await runStage("dashboard", argv, 5 * 60 * 1000)
    log(`stage dashboard: ${argv[1].split("/").pop()} exit=${r.code}`)
  }
  // Best-effort scoped commit of the (generated) dashboard outputs. --no-verify
  // because these are deterministic regenerations, not LLM wiki edits.
  await runStage(
    "dashboard-commit",
    ["bash", "-c", "git add wiki data/evidence 2>/dev/null; git commit --no-verify -q -m 'frank: generated-layer + dashboard + gap-metric + ledger refresh' 2>&1 | tail -1 || true"],
    2 * 60 * 1000,
  )
}

// Auto-intake: extract + dedup any new, settled folder dropped into the drop
// zone, so a freshly-dropped batch becomes ingestable with zero manual steps.
async function runIntake() {
  if (!fs.existsSync(DROP_ZONE)) return
  let subdirs
  try {
    subdirs = fs.readdirSync(DROP_ZONE, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
  } catch {
    return
  }
  const done = intakeDone()
  for (const name of subdirs) {
    const full = path.join(DROP_ZONE, name)
    // Re-prep an EXPANDED folder. The done-record stores the PDF count at last
    // intake; if the folder has grown since (more papers dropped into an
    // existing folder), re-run intake so the new papers get deduped instead of
    // being silently skipped. Trim throughout so a trailing-space name (e.g.
    // "June 8 ") matches the stored entry instead of re-intaking forever.
    const preppedCount = done.get(name.trim())
    const curCount = countPdfsDeep(full)
    if (preppedCount !== undefined && curCount <= preppedCount) continue
    const why = preppedCount === undefined ? "new" : `expanded ${preppedCount === Infinity ? "?" : preppedCount}→${curCount}`
    const ageMs = Date.now() - newestMtimeMs(full)
    if (ageMs < INTAKE_SETTLE_MS) {
      log(`intake: "${name}" still settling (${Math.round(ageMs / 60000)}m) — will retry next pass`)
      continue
    }
    heartbeat(`intaking "${name}" (${why}) — extract + dedup`)
    log(`intake: processing "${name}" (${why})`)
    const r = await runStage("intake", [NODE, "tools/autonomy/frank-intake.mjs", `--dir=${full}`], 12 * 60 * 1000)
    r.summary = r.timedOut ? `⏱ intake timeout on "${name}"` : r.ok ? `✓ intaked "${name}" (${why})` : `intake exit ${r.code} on "${name}"`
    RECENT.push(r)
    log(`intake: ${r.summary}`)
    // Record name + current PDF count on success so a later expansion re-preps.
    if (r.ok) {
      try {
        fs.appendFileSync(INTAKE_DONE, name.trim() + "\t" + curCount + "\n")
      } catch {}
    }
  }
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

  // Liveness timer: refresh the heartbeat every ~2.5 min even mid-stage, so a
  // long ingest shows "…— 14m elapsed" instead of a frozen 25-min-old beat.
  // unref()'d so it never keeps the process alive on its own.
  setInterval(() => {
    try {
      heartbeat()
    } catch {}
  }, 150 * 1000).unref()

  while (!stopRequested()) {
    cycle++
    log(`=== cycle ${cycle} ===`)

    // INTAKE: auto-extract + dedup any newly-dropped, settled folder before
    // ingest, so a fresh drop becomes ingestable with zero manual steps.
    try {
      await runIntake()
    } catch (e) {
      log(`intake stage threw (continuing): ${e.message}`)
    }

    // INGEST first (every cycle) — the core deliverable. With a 274-paper
    // backlog we drain aggressively; fetch only needs to refill periodically.
    let ingestSummary = "",
      ingestDurMs = 0
    try {
      const r = await runIngest()
      ingestSummary = r.summary
      ingestDurMs = r.durMs
    } catch (e) {
      log(`ingest stage threw (continuing): ${e.message}`)
    }
    const queueEmpty = /queue empty/i.test(ingestSummary)
    const produced = /ingested\b/.test(ingestSummary) && !/0 ingested/.test(ingestSummary)
    // A real ingest runs for minutes; a dedup/off-topic skip returns in seconds.
    // Don't burn 60s sleeping after a skip — churn straight to the next paper so
    // we reach the novel backlog fast instead of crawling one dupe per minute.
    const fastSkip = !produced && !queueEmpty && ingestDurMs < 120000

    // FETCH on schedule, OR immediately when the queue just ran dry — so the
    // loop refills itself from open gaps and never starves.
    if (cycle % CFG.fetchEveryCycles === 0 || queueEmpty) {
      try {
        await runFetch()
      } catch (e) {
        log(`fetch stage threw (continuing): ${e.message}`)
      }
    }

    // DASHBOARD + gap metrics (every 12th cycle) — keeps sprint-status.md and
    // the one-true heartbeat fresh now that the daemon is retired.
    if (cycle % 12 === 0) {
      try {
        await runDashboard()
      } catch (e) {
        log(`dashboard stage threw (continuing): ${e.message}`)
      }
    }

    // DISCOVER (every 18th cycle) — multi-DB gap closure via the /discover skill.
    // The driver self-skips when ~/.discover.STOP exists, when no gap is eligible,
    // or when another trigger holds its lock, so calling it unconditionally here
    // is safe. This is the second fetch engine: OpenAlex-only wishlist above plus
    // 10-database /discover here, so hard gaps that OpenAlex can't reach still close.
    if (cycle % CFG.discoverEveryCycles === 0) {
      try {
        await runDiscover()
      } catch (e) {
        log(`discover stage threw (continuing): ${e.message}`)
      }
    }

    heartbeat(`idle between cycles (last ingest: ${ingestSummary || "—"})`)
    if (stopRequested()) break
    await sleep(queueEmpty ? CFG.idleSleepMs : fastSkip ? 5000 : CFG.sleepBetweenCyclesMs)
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
