#!/usr/bin/env node
// discover-autopilot.mjs — autonomous gap → /discover driver.
//
// THE PROBLEM THIS SOLVES. FRANK's fetch stage runs the OpenAlex+PubMed wishlist
// (tools/wishlist/find-candidates.mjs). On the 592 currently-open data gaps that
// path has gone dry: the FRANK heartbeat shows "fetched 0 new PDF(s) for open
// gaps" cycle after cycle, and wishlist-fetch-audit.csv is full of off-topic /
// not-OA misses ("Queer Theory and Biomedical Practice" for `toothpaste lead`).
// Meanwhile the 10-database `/discover` skill — which resolves OA PDFs across
// Crossref + Unpaywall + PMC + Semantic Scholar + CORE that OpenAlex alone never
// surfaces — was Karen-trigger-only and sat idle. This driver makes /discover
// autonomous and gap-driven: it is the multi-DB second engine for gap closure.
//
// WHAT IT DOES. Reads data/gaps/open_gaps.jsonl, groups the open gaps by target
// page, picks the least-recently-attended page-groups (rotation, so no gap
// starves), derives a discovery topic from each page's title + the gap metals,
// and runs the real /discover skill headless via `claude --print` (same spawn
// pattern as the ingester). /discover stages qualifying OA PDFs into
// raw/Manual Fetch Discovery/, which is already a FRANK MANUAL_FETCH_ROOT and is
// NOT excluded by FRANK's `--exclude-roots=auto-fetched` ingest flag — so FRANK's
// existing Opus ingester picks them up on its next cycle. The loop closes with
// zero extra wiring on the ingest side.
//
// WHY THE SKILL, NOT A NODE PORT. The /discover skill is the single source of
// truth for database fan-out, dedup against the corpus index, the recommend_score
// rubric, and the Part 12 brand-firewall tagging. Driving the skill (rather than
// re-implementing its scoring in node and letting the two drift) means every
// future improvement to the skill propagates here for free. The cost is Opus/
// Sonnet tokens per run; this driver bounds that with a per-run page-group budget,
// groups multiple open metals on one page into a single /discover call, defaults
// to Sonnet (the skill is mechanical), and is disabled instantly by a STOP file.
//
// AUTONOMY / CONTROL.
//   - No approval gate. Runs search → score → fetch → audit with no human in the
//     loop, per docs feedback_no_approval_gates. The discover audit CSV and this
//     driver's JSONL ledger are for after-the-fact inspection, not approval.
//   - Halt globally:    touch ~/.frank.STOP       (also halts FRANK)
//   - Halt discovery:   touch ~/.discover.STOP     (halts only this driver)
//   - Single-flight:    ~/.discover-autopilot.lock (stale after 30 min)
//
// USAGE.
//   node tools/autonomy/discover-autopilot.mjs --dry-run        # select + derive, no spawn
//   node tools/autonomy/discover-autopilot.mjs --max-gaps=2     # attend 2 page-groups
//   node tools/autonomy/discover-autopilot.mjs --max-gaps=3 --model=opus
//
// FLAGS.
//   --max-gaps=N     page-groups to attend this run (default 2)
//   --model=NAME     claude CLI model (default "sonnet"; the skill is mechanical)
//   --stale-days=N   re-attend a page only after N days (default 14)
//   --gaps-file=PATH override the open-gaps feed (testing)
//   --dry-run        print the plan (selected pages, derived topics, claude argv)
//                    without spawning claude or writing the attempt ledger
//   --timeout-mins=N per-/discover hard cap (default 14)

import { spawn } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, "../..")

const HOME = os.homedir()
const STOP_GLOBAL = path.join(HOME, ".frank.STOP")
const STOP_DISCOVER = path.join(HOME, ".discover.STOP")
const LOCK_FILE = path.join(HOME, ".discover-autopilot.lock")
const LOCK_STALE_MS = 30 * 60 * 1000

const GAPS_DEFAULT = path.join(REPO, "data/gaps/open_gaps.jsonl")
const DISCOVERY_DIR = path.join(REPO, "raw/Manual Fetch Discovery")
const ATTEMPTS_FILE = path.join(REPO, "data/evidence/discovery/autopilot-attempts.json")
const LEDGER_FILE = path.join(REPO, "data/evidence/discovery/autopilot-log.jsonl")
const AGENT_EVENTS = path.join(REPO, "data/evidence/autonomy/agent-events.jsonl")

// ---------------------------------------------------------------- args
const args = new Map(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/)
    return m ? [m[1], m[2] ?? true] : [a, true]
  }),
)
const MAX_GAPS = Math.max(1, Number(args.get("max-gaps") ?? 2))
const MODEL = String(args.get("model") ?? "sonnet")
const STALE_DAYS = Number(args.get("stale-days") ?? 14)
const GAPS_FILE = String(args.get("gaps-file") ?? GAPS_DEFAULT)
const DRY_RUN = Boolean(args.get("dry-run"))
// A full 10-database /discover sweep (corpus-index rebuild + 6-8 DB searches at
// 250ms spacing + scoring + OA downloads at 500ms spacing) runs ~12-18 min in
// practice — a 9-min cap was measured too tight (it SIGKILLed mid-sweep). Default
// to 20 min so a normal run completes; override per-call with --timeout-mins.
const TIMEOUT_MS = Math.max(2, Number(args.get("timeout-mins") ?? 20)) * 60 * 1000

// ---------------------------------------------------------------- metals
// HMT&C analyte codes → search-string long forms. Mirrors the metal vocabulary
// in docs/conventions; iAs/tAs and tHg/MeHg distinctions preserved so a topic
// asks for the right species.
const METAL_LONG = {
  Pb: "lead",
  Cd: "cadmium",
  iAs: "inorganic arsenic",
  tAs: "arsenic",
  As: "arsenic",
  tHg: "mercury",
  MeHg: "methylmercury",
  Hg: "mercury",
  Ni: "nickel",
  Al: "aluminum",
  Cr: "chromium",
  "Cr-VI": "hexavalent chromium",
  Sn: "tin",
  Sb: "antimony",
  U: "uranium",
}
function metalLong(code) {
  return METAL_LONG[code] || code
}

// ---------------------------------------------------------------- utils
function nowIso() {
  return new Date().toISOString()
}
function log(line) {
  process.stdout.write(`[discover-autopilot] ${line}\n`)
}
function readJsonSafe(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"))
  } catch {
    return fallback
  }
}
function appendJsonl(file, obj) {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.appendFileSync(file, JSON.stringify(obj) + "\n")
  } catch {}
}

// Strip a parenthetical example list and normalize dashes so a page title
// becomes a clean noun phrase for a search topic.
//   "Breakfast cereal — rice-based (puffed rice, rice flakes)" → "Breakfast cereal rice-based"
function cleanTitle(title, slug) {
  if (!title) return (slug || "").replace(/-/g, " ")
  return title
    .replace(/\([^)]*\)/g, " ") // drop "(examples, ...)"
    .replace(/[—–]/g, " ") // em/en dash → space
    .replace(/\s+/g, " ")
    .trim()
}

// Light frontmatter read: pull `title:` without taking a YAML dependency for one
// field. Falls back to the slug if the page is missing or has no title.
function pageTitle(pageRel) {
  const abs = path.join(REPO, pageRel)
  try {
    const txt = fs.readFileSync(abs, "utf8")
    const fm = txt.match(/^---\n([\s\S]*?)\n---/)
    if (fm) {
      const m = fm[1].match(/^title:\s*["']?(.+?)["']?\s*$/m)
      if (m) return m[1].trim()
    }
  } catch {}
  return null
}

function stopRequested() {
  if (fs.existsSync(STOP_GLOBAL)) return "~/.frank.STOP present"
  if (fs.existsSync(STOP_DISCOVER)) return "~/.discover.STOP present"
  return null
}

// Single-flight lock so a FRANK stage and a launchd/loop trigger can never run
// two /discover spawns at once. Stale locks (crashed prior run) are reclaimed.
function takeLock() {
  try {
    const st = fs.statSync(LOCK_FILE)
    if (Date.now() - st.mtimeMs < LOCK_STALE_MS) {
      const prior = (() => {
        try {
          return fs.readFileSync(LOCK_FILE, "utf8").trim()
        } catch {
          return ""
        }
      })()
      return { ok: false, prior }
    }
    log(`reclaiming stale lock (age ${Math.round((Date.now() - st.mtimeMs) / 60000)}m)`)
  } catch {
    /* no lock file — fall through to create */
  }
  try {
    fs.writeFileSync(LOCK_FILE, `${process.pid} ${nowIso()}`)
    return { ok: true }
  } catch (e) {
    return { ok: false, prior: `lock write failed: ${e.message}` }
  }
}
function releaseLock() {
  try {
    fs.unlinkSync(LOCK_FILE)
  } catch {}
}

// ---------------------------------------------------------------- selection
// Group open gaps by target page; rank by least-recently-attended (never-tried
// first), then by oldest open gap on the page. Returns up to MAX_GAPS groups
// that are not within the stale window.
function selectPageGroups(maxGroups) {
  if (!fs.existsSync(GAPS_FILE)) {
    log(`no gaps file at ${GAPS_FILE}`)
    return []
  }
  const attempts = readJsonSafe(ATTEMPTS_FILE, {})
  const staleCutoff = Date.now() - STALE_DAYS * 24 * 60 * 60 * 1000

  const byPage = new Map()
  for (const line of fs.readFileSync(GAPS_FILE, "utf8").split("\n")) {
    if (!line.trim()) continue
    let gap
    try {
      gap = JSON.parse(line)
    } catch {
      continue
    }
    if (gap.status !== "open" && gap.status !== "attempted") continue
    if (!gap.page || !gap.metal) continue
    const g = byPage.get(gap.page) || { page: gap.page, metals: new Set(), oldestOpenedAt: gap.opened_at || nowIso() }
    g.metals.add(gap.metal)
    if (gap.opened_at && gap.opened_at < g.oldestOpenedAt) g.oldestOpenedAt = gap.opened_at
    byPage.set(gap.page, g)
  }

  const groups = [...byPage.values()].map((g) => {
    const a = attempts[g.page] || {}
    return {
      page: g.page,
      metals: [...g.metals],
      oldestOpenedAt: g.oldestOpenedAt,
      lastAttemptedAt: a.last_attempted_at || null,
      attempts: a.attempts || 0,
    }
  })

  // Drop pages attended within the stale window; they get a rest so budget flows
  // to never-tried gaps first.
  const eligible = groups.filter((g) => !g.lastAttemptedAt || Date.parse(g.lastAttemptedAt) < staleCutoff)

  eligible.sort((a, b) => {
    // never-attempted (null) sorts before any timestamp
    const ax = a.lastAttemptedAt ? Date.parse(a.lastAttemptedAt) : 0
    const bx = b.lastAttemptedAt ? Date.parse(b.lastAttemptedAt) : 0
    if (ax !== bx) return ax - bx
    return Date.parse(a.oldestOpenedAt) - Date.parse(b.oldestOpenedAt)
  })

  return eligible.slice(0, maxGroups)
}

function deriveTopic(group) {
  const slug = group.page.replace(/^.*\//, "").replace(/\.md$/, "")
  const title = cleanTitle(pageTitle(group.page), slug)
  const metals = group.metals.map(metalLong)
  // De-dup long forms (tAs+iAs+As can collapse to "arsenic, inorganic arsenic")
  const metalPhrase = [...new Set(metals)].join(", ")
  return `${title} heavy metal contamination — ${metalPhrase} occurrence and concentration in food, 2015-2026`
}

function buildPrompt(topic) {
  return `You are running the Heavy Metal Index \`/discover\` skill in autonomous mode (no human in the loop).

Read .claude/skills/discover/SKILL.md in full, then execute its complete sequence (Phase 0 prep through Phase 5 audit log) for exactly this topic:

  topic="${topic}"

Use the skill's default database fan-out and default threshold (4). Dedupe against the corpus index, score candidates, and auto-fetch every qualifying open-access PDF into raw/Manual Fetch Discovery/ exactly as the skill specifies. Write the per-candidate audit CSV to data/evidence/discovery/ as the skill specifies. Apply the Part 12 brand-firewall tag to any brand-ranking candidate. Do NOT ask for confirmation and do NOT open an approval queue — the skill is explicitly no-human-gate.

When finished, print exactly ONE final line and nothing after it:
  "DONE: fetched=<K> novel=<N>"   on success (K = PDFs fetched, N = novel candidates)
  "FAIL: <reason>"                on error`
}

// Set of PDF basenames currently staged in raw/Manual Fetch Discovery/. Used to
// diff before/after a run so we count what actually landed.
function listDiscoveryPdfs() {
  try {
    return new Set(fs.readdirSync(DISCOVERY_DIR).filter((f) => f.toLowerCase().endsWith(".pdf")))
  } catch {
    return new Set()
  }
}

// ---------------------------------------------------------------- run one
//
// IMPORTANT: /discover fetches PDFs in its Phase 4 but only writes its audit CSV
// and prints DONE in Phase 5. A full 10-DB sweep can exceed any sane cap, so a
// timeout often kills the run AFTER the PDFs have landed but BEFORE it can report
// (measured 2026-06-06: a 24-min run was SIGKILLed yet had already staged 8 on-topic
// OA PDFs). The DONE line is therefore unreliable; the filesystem is ground truth.
// We diff raw/Manual Fetch Discovery/ across the run and treat "≥1 new PDF" as
// success regardless of how claude exited. fetched = the real count on disk.
function runDiscover(topic) {
  return new Promise((resolve) => {
    const before = listDiscoveryPdfs()
    const cliArgs = ["--print", "--model", MODEL, "--add-dir", REPO]
    const start = Date.now()
    let stdout = "",
      stderr = "",
      timedOut = false
    const proc = spawn("claude", cliArgs, { cwd: REPO, env: process.env })
    const killer = setTimeout(() => {
      timedOut = true
      try {
        proc.kill("SIGKILL")
      } catch {}
    }, TIMEOUT_MS)
    proc.stdout.on("data", (d) => (stdout += d.toString()))
    proc.stderr.on("data", (d) => (stderr += d.toString()))
    proc.on("error", (err) => {
      clearTimeout(killer)
      finalize({ exitError: err.message })
    })
    proc.on("exit", (code) => {
      clearTimeout(killer)
      finalize({ code })
    })
    proc.stdin.write(buildPrompt(topic))
    proc.stdin.end()

    // Single resolution path: reconcile what claude *said* with what landed on disk.
    function finalize({ code, exitError }) {
      const durMs = Date.now() - start
      const after = listDiscoveryPdfs()
      const newPdfs = [...after].filter((f) => !before.has(f))
      const lastLine = stdout.trim().split("\n").slice(-1)[0] || ""

      const said = lastLine.startsWith("DONE:")
        ? "done"
        : lastLine.startsWith("FAIL:")
          ? "fail"
          : timedOut
            ? "timeout"
            : exitError
              ? "spawn-error"
              : code !== 0
                ? "nonzero-exit"
                : "no-marker"
      const novel = (lastLine.match(/novel=(\d+)/) || [])[1]

      // Success = the skill said DONE, OR PDFs actually landed. A timeout that
      // staged papers is a (partial) success — the papers are the deliverable.
      const ok = said === "done" || newPdfs.length > 0
      const partial = ok && said !== "done" // value delivered but skill was cut off

      let error = null
      if (!ok) {
        error =
          said === "fail" ? lastLine.slice(5).trim() : said === "timeout" ? `timeout (${TIMEOUT_MS / 60000}m), 0 PDFs` : said === "spawn-error" ? exitError : said === "nonzero-exit" ? `exit ${code}: ${stderr.slice(0, 300)}` : `no DONE/FAIL marker, 0 PDFs: ${lastLine.slice(0, 120)}`
      }

      resolve({
        ok,
        partial,
        durMs,
        fetched: newPdfs.length,
        novel: novel ? Number(novel) : null,
        new_pdfs: newPdfs,
        skill_signal: said,
        error,
      })
    }
  })
}

function recordAttempt(page, outcome) {
  const attempts = readJsonSafe(ATTEMPTS_FILE, {})
  const prior = attempts[page] || { attempts: 0 }
  attempts[page] = {
    last_attempted_at: nowIso(),
    attempts: (prior.attempts || 0) + 1,
    last_outcome: outcome,
  }
  try {
    fs.mkdirSync(path.dirname(ATTEMPTS_FILE), { recursive: true })
    fs.writeFileSync(ATTEMPTS_FILE, JSON.stringify(attempts, null, 2))
  } catch (e) {
    log(`attempt-ledger write failed: ${e.message}`)
  }
}

// ---------------------------------------------------------------- main
async function main() {
  const halt = stopRequested()
  if (halt) {
    log(`disabled (${halt}) — exiting cleanly`)
    return
  }

  const groups = selectPageGroups(MAX_GAPS)
  if (!groups.length) {
    log("no eligible page-groups (all attended within stale window, or no open gaps) — exiting")
    return
  }

  log(`selected ${groups.length} page-group(s) of ${MAX_GAPS} budget:`)
  for (const g of groups) {
    log(`  • ${g.page}  metals=[${g.metals.join(",")}]  last_attempted=${g.lastAttemptedAt || "never"}`)
  }

  if (DRY_RUN) {
    log("DRY RUN — derived topics + claude argv (no spawn, no ledger write):")
    for (const g of groups) {
      const topic = deriveTopic(g)
      log(`  page=${g.page}`)
      log(`    topic="${topic}"`)
      log(`    claude --print --model ${MODEL} --add-dir ${REPO}  (stdin: /discover prompt)`)
    }
    return
  }

  const lock = takeLock()
  if (!lock.ok) {
    log(`another run holds the lock (${lock.prior || "unknown"}) — exiting`)
    return
  }

  let totalFetched = 0
  try {
    for (const g of groups) {
      if (stopRequested()) {
        log("STOP file appeared mid-run — halting")
        break
      }
      const topic = deriveTopic(g)
      log(`▶ /discover for ${g.page} — topic="${topic}"`)
      const res = await runDiscover(topic)
      const outcome = res.ok
        ? `fetched=${res.fetched}${res.partial ? ` (partial:${res.skill_signal})` : ""} novel=${res.novel ?? "?"}`
        : `fail:${res.error}`
      log(`◀ ${g.page} — ${outcome} (${Math.round(res.durMs / 1000)}s)`)
      if (res.new_pdfs?.length) log(`  staged: ${res.new_pdfs.join(", ")}`)

      recordAttempt(g.page, outcome)
      appendJsonl(LEDGER_FILE, {
        ts: nowIso(),
        page: g.page,
        metals: g.metals,
        topic,
        model: MODEL,
        ok: res.ok,
        partial: res.partial || false,
        fetched: res.fetched,
        novel: res.novel ?? null,
        new_pdfs: res.new_pdfs || [],
        skill_signal: res.skill_signal,
        dur_ms: res.durMs,
        error: res.ok ? null : res.error,
      })
      appendJsonl(AGENT_EVENTS, {
        ts: nowIso(),
        actor: "discover-autopilot",
        cite_key: "",
        status: res.ok ? "discovered" : "discover-failed",
        source_path: g.page,
        commit: "",
        blocker: res.ok ? "" : res.error,
        next: res.fetched ? `awaiting-ingest:Manual Fetch Discovery (${res.fetched} PDF)` : "",
      })

      totalFetched += res.fetched || 0
    }
  } finally {
    releaseLock()
  }

  log(`run complete: ${groups.length} page-group(s) attended, ${totalFetched} PDF(s) staged for ingest in raw/Manual Fetch Discovery/`)
  log("FRANK's next ingest cycle will pick them up (Manual Fetch Discovery is a manual-fetch root, not excluded).")
}

main().catch((e) => {
  log(`fatal: ${e.stack || e.message}`)
  releaseLock()
  process.exitCode = 1
})
