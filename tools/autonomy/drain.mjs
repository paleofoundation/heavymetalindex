#!/usr/bin/env node
// DRAIN — the continuous, parallel backfill orchestrator.
//
//   node tools/autonomy/drain.mjs --workers=5 --max-hours=8
//   node tools/autonomy/drain.mjs --dry-run
//   node tools/autonomy/drain.mjs --workers=6 --per-worker=4 --folder="Manual Resourcing"
//
// Start it once; it runs until the backlog is drained, the time budget is
// spent, or a STOP file appears. No per-fire button pressing.
//
// WHY THIS CAN BE PARALLEL NOW. Ingest was pinned to concurrency=1 because each
// drafting session ran its own `git commit`, and parallel children raced on
// .git/index.lock (~2/3 of workers died; papers double-processed). In this
// pipeline the drafting workers NEVER commit — they only write untracked page
// files — and tools/autonomy/promote-audited-drafts.mjs is the single serial
// committer. The race is gone by construction, so workers can run wide.
//
// COST POSTURE (deliberately different from the 2026-06-09 FRANK runaway):
// the drafting and auditing engines here are FLAT-RATE subscription CLIs
// (Codex on ChatGPT Plus), not metered Claude API calls. Running them for hours
// does not accrue per-token cost. Claude is not in this loop at all.
//
// Every cycle: assign disjoint PDF slices -> N parallel draft workers ->
// parallel audit -> one serial promote -> repeat.

import fs from "node:fs"
import path from "node:path"
import { spawn, execFileSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))

const workers = Number(args.get("workers") ?? 5)
const perWorker = Number(args.get("per-worker") ?? 3)
const maxHours = Number(args.get("max-hours") ?? 8)
const maxCycles = Number(args.get("max-cycles") ?? 999)
const workerTimeoutMins = Number(args.get("worker-timeout-mins") ?? 20)
const reasoningEffort = args.get("reasoning-effort") ?? "medium"
const onlyFolder = args.get("folder")
const dryRun = args.has("dry-run")

const codexBinary = args.get("codex-bin") ?? "/Applications/Codex.app/Contents/Resources/codex"
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const drainLogDir = path.join(autonomyDir, "drain-runs")
const ledgerPath = path.join(autonomyDir, "agent-events.jsonl")
const trackerPath = path.join(autonomyDir, "manual-fetch-tracker.csv")
const assignedPath = path.join(autonomyDir, "drain-assigned.jsonl")
const skipPath = path.join(repoRoot, "data/evidence/manual-fetch-skip.csv")

// Staging roots, in priority order. Codex's own lane owns auto-fetched/, so it
// is excluded here to keep the two engines partitioned.
const STAGING_ROOTS = [
  "raw/Manual Resourcing",
  "raw/Manual Fetch Kimi ",
  "raw/Papers Cube Manual Fetch",
  "raw/Manual Fetch Discovery",
  "raw/Research Pull Ingredient Sweep",
  "raw/Research Pull Mercury Deep Dive",
  "raw/Research Pull Product Sweep",
  "raw/Kimi Fetches",
  "raw/manual-fetch/health-effects-batch-2026-05-13",
]

const STOP_FILES = [".frank.STOP", ".hmi-drain.STOP", ".hmi-kimi.STOP"]

function stopRequested() {
  for (const s of STOP_FILES) {
    if (fs.existsSync(path.join(process.env.HOME ?? "", s))) return s
  }
  return null
}

// ─── Build the "already handled" index ONCE (not per PDF) ─────────────
// Sources of truth for "don't touch this again":
//   1. any wiki/sources page referencing the PDF's basename or raw_path
//   2. tracker rows with an ingested/claimed status
//   3. the skip list
function buildHandledIndex() {
  const handled = new Set()

  // 1. wiki/sources — read every page once, harvest raw_path + basename.
  const srcDir = path.join(repoRoot, "wiki/sources")
  if (fs.existsSync(srcDir)) {
    for (const f of fs.readdirSync(srcDir)) {
      if (!f.endsWith(".md")) continue
      let text
      try { text = fs.readFileSync(path.join(srcDir, f), "utf8") } catch { continue }
      const m = text.match(/^raw_path:\s*"?([^"\n]+)"?\s*$/m)
      if (m) {
        const rp = m[1].trim()
        handled.add(rp)
        handled.add(path.basename(rp))
      }
    }
  }

  // 2. tracker
  if (fs.existsSync(trackerPath)) {
    for (const line of fs.readFileSync(trackerPath, "utf8").split("\n")) {
      if (!line.trim() || line.startsWith("pdf_path,")) continue
      const firstComma = line.indexOf(",")
      if (firstComma < 0) continue
      let p = line.slice(0, firstComma).replace(/^"|"$/g, "").trim()
      if (!p.toLowerCase().endsWith(".pdf")) continue
      if (/,(ingested|claimed|skipped)/i.test(line) || /,(ingested-by-\w+|claimed-by-\w+)/i.test(line)) {
        handled.add(p)
        handled.add(path.basename(p))
      }
    }
  }

  // 3. skip list
  if (fs.existsSync(skipPath)) {
    for (const line of fs.readFileSync(skipPath, "utf8").split("\n")) {
      if (!line.trim()) continue
      const p = line.split(",")[0].replace(/^"|"$/g, "").trim()
      if (p.toLowerCase().endsWith(".pdf")) {
        handled.add(p)
        handled.add(path.basename(p))
      }
    }
  }

  // 4. anything this drainer already assigned (any run). Without this, a PDF a
  // worker legitimately SKIPPED (out of scope, unreadable, no extractable
  // numbers) writes no page, so it would be rediscovered and re-assigned every
  // cycle forever. Assignment is the durable record of "we looked at this".
  // Trade-off: a transiently-failed PDF is not auto-retried — clear its lines
  // from drain-assigned.jsonl to requeue it.
  if (fs.existsSync(assignedPath)) {
    for (const line of fs.readFileSync(assignedPath, "utf8").split("\n")) {
      if (!line.trim()) continue
      try {
        const r = JSON.parse(line)
        if (r.pdf) { handled.add(r.pdf); handled.add(path.basename(r.pdf)) }
      } catch {}
    }
  }

  return handled
}

function recordAssigned(pdfs, cycleNo) {
  const ts = new Date().toISOString()
  const payload = pdfs.map((p) => JSON.stringify({ ts, pdf: p, cycle: cycleNo, run: runStamp })).join("\n")
  try { fs.appendFileSync(assignedPath, payload + "\n") } catch {}
}

function listPdfs(root) {
  const abs = path.join(repoRoot, root)
  try {
    // -L follows the symlinks into /Volumes/HMI-Library.
    const out = execFileSync("find", ["-L", abs, "-iname", "*.pdf", "-type", "f"], {
      encoding: "utf8", maxBuffer: 200 * 1024 * 1024,
    })
    return out.split("\n").map((l) => l.trim()).filter(Boolean)
      .map((p) => path.relative(repoRoot, p))
  } catch {
    return []
  }
}

function discoverWork(handled, limit) {
  const roots = onlyFolder
    ? STAGING_ROOTS.filter((r) => r.includes(onlyFolder))
    : STAGING_ROOTS
  const out = []
  for (const root of roots) {
    if (out.length >= limit) break
    if (!fs.existsSync(path.join(repoRoot, root))) continue
    for (const p of listPdfs(root)) {
      if (out.length >= limit) break
      if (handled.has(p) || handled.has(path.basename(p))) continue
      out.push(p)
    }
  }
  return out
}

// ─── The draft-only worker prompt ─────────────────────────────────────
function buildWorkerPrompt(pdfs, workerId) {
  const canonicalPath = "docs/codex-collaboration/sprint-ingest-prompt.md"
  return `You are DRAFT WORKER ${workerId} for the Heavy Metal Index ingest pipeline, running non-interactively in ${repoRoot}.

READ FIRST: ${canonicalPath}. Follow its scope rules and page format EXACTLY — the four in-scope lanes (a1 product occurrence / a2 remediation / a3 supply-chain & pathway / a4 exposure & health), the skip burden-of-proof and skip vocabulary, the CLAUDE.md Part 6 page template (H1 + opening prose, ## Key numbers, ## Methods (brief), ## Implications, ## Wiki pages this source may touch, ## Verification notes), and its frontmatter discipline (real cite_key <first-author-surname><year>-<slug> from the PDF byline, real authors/year/journal/doi, no placeholder pages, no invented fields, correct speciation tAs/iAs, tHg/MeHg, Cr/Cr-VI).

*** THESE OVERRIDES BEAT THE CANONICAL PROMPT WHEREVER THEY CONFLICT ***

1. DO NOT COMMIT. DO NOT PUSH. Never run git add, git commit, or git push.
   Write each finished page to wiki/sources/<cite-key>.md and leave it
   UNTRACKED. A separate audited promoter commits. If you commit, you corrupt
   the pipeline.
2. YOUR ASSIGNED PDFs — process ONLY these ${pdfs.length}, nothing else. Do not
   snapshot or scan the folder for more work; other workers are running in
   parallel on their own slices and scanning would double-process:
${pdfs.map((p, i) => `   ${i + 1}. ${p}`).join("\n")}
3. Do NOT edit data/evidence/autonomy/manual-fetch-tracker.csv or any other
   shared CSV — parallel workers would race on it. The pipeline records your
   output from the files you leave behind.
4. Ignore the canonical prompt's STEP 1 snapshot, STEP 2 claim, STEP 5 tracker
   update, STEP 6 audit, STEP 7 cleanup, its ≤3 contract, and its stop criteria.
   Your contract is exactly the list above.
5. NEVER write a page for a statute/regulation/official-journal/"maximum levels"
   document. Those carry legal limit values and are handled separately. Skip it
   and say so in your summary.
6. FIREWALLS (non-negotiable): never write a certification threshold or
   percentile, never synthesize cross-source "consensus", never give consumer
   risk advice, never attach a brand name to a contamination value (product-form
   descriptors only; instrument/reagent/reference-material vendor names in
   Methods are fine).
7. If a PDF is unreadable, has no extractable numbers, or fails all four
   in-scope lanes, write NO page for it and note the skip reason in your summary.

When done with all ${pdfs.length}, print a final summary block listing for each
PDF one of: DRAFTED <path-to-page> | SKIPPED <reason> | FAILED <reason>.
Begin now.`
}

function runWorker(pdfs, workerId) {
  return new Promise((resolve) => {
    if (dryRun) {
      console.log(`  [w${workerId}] DRY RUN would draft ${pdfs.length}: ${pdfs.map((p) => path.basename(p)).join(", ")}`)
      return resolve({ workerId, ok: true, out: "(dry run)" })
    }
    const child = spawn(
      codexBinary,
      ["exec", "-c", `model_reasoning_effort="${reasoningEffort}"`,
       "--dangerously-bypass-approvals-and-sandbox", "--skip-git-repo-check",
       "-C", repoRoot, "--add-dir", repoRoot, "--color", "never"],
      { cwd: repoRoot, stdio: ["pipe", "pipe", "pipe"] },
    )
    let out = "", err = ""
    const killer = setTimeout(() => { try { child.kill("SIGKILL") } catch {} },
      workerTimeoutMins * 60 * 1000)
    child.stdout.on("data", (d) => { out += d })
    child.stderr.on("data", (d) => { err += d })
    child.on("close", (code) => {
      clearTimeout(killer)
      console.log(`  [w${workerId}] finished (exit ${code}, ${out.length} chars)`)
      resolve({ workerId, ok: code === 0, out, err })
    })
    child.stdin.write(buildWorkerPrompt(pdfs, workerId))
    child.stdin.end()
  })
}

function runStep(script, extraArgs) {
  if (dryRun) { console.log(`  DRY RUN would run: ${script} ${extraArgs.join(" ")}`); return "" }
  try {
    return execFileSync("node", [script, ...extraArgs], {
      cwd: repoRoot, encoding: "utf8", maxBuffer: 100 * 1024 * 1024, stdio: "pipe",
    })
  } catch (e) {
    return `(${script} exited non-zero: ${e.message})\n${e.stdout || ""}`
  }
}

function countDrafts() {
  try {
    return execFileSync("git", ["ls-files", "--others", "--exclude-standard", "wiki/sources"],
      { cwd: repoRoot, encoding: "utf8" })
      .split("\n").filter((l) => l.trim().endsWith(".md")).length
  } catch { return 0 }
}

// ─── Main loop ────────────────────────────────────────────────────────
fs.mkdirSync(drainLogDir, { recursive: true })
const runStamp = new Date().toISOString().replace(/[:.]/g, "-")
const logPath = path.join(drainLogDir, `drain-${runStamp}.md`)
const startedAt = Date.now()
const deadline = startedAt + maxHours * 3600 * 1000

const stopNow = stopRequested()
if (stopNow) { console.log(`HALTED: ~/${stopNow} present.`); process.exit(0) }
if (!dryRun && !fs.existsSync(codexBinary)) {
  console.error(`HALTED: Codex CLI not found at ${codexBinary}`); process.exit(1)
}

console.log(`DRAIN starting — ${workers} workers x ${perWorker} papers/cycle, budget ${maxHours}h`)
console.log(`Stop anytime:  touch ~/.hmi-drain.STOP`)
console.log(`Log: ${path.relative(repoRoot, logPath)}\n`)

let cycle = 0, totalAssigned = 0, totalCommitted = 0
const lines = [`# Drain run ${runStamp}`, "", `workers=${workers} per-worker=${perWorker} max-hours=${maxHours}`, ""]

while (cycle < maxCycles) {
  const s = stopRequested()
  if (s) { console.log(`\nSTOPPING: ~/${s} present.`); lines.push(`\nSTOPPED: ~/${s}`); break }
  if (Date.now() > deadline) { console.log("\nTime budget spent."); lines.push("\nSTOPPED: time budget"); break }

  cycle++
  console.log(`── cycle ${cycle} — indexing already-handled PDFs…`)
  const handled = buildHandledIndex()
  const batch = discoverWork(handled, workers * perWorker)
  if (!batch.length) {
    console.log("No un-ingested PDFs remain in the configured roots. Drained.")
    lines.push("\nCOMPLETE: no remaining work")
    break
  }
  console.log(`   ${batch.length} PDFs this cycle (handled-index size ${handled.size})`)

  // Disjoint slices — assignment-based, so no claim race between workers.
  const slices = []
  for (let i = 0; i < workers; i++) {
    const slice = batch.slice(i * perWorker, (i + 1) * perWorker)
    if (slice.length) slices.push(slice)
  }

  console.log(`   drafting with ${slices.length} parallel workers…`)
  // Record the assignment BEFORE running, so a crash mid-cycle still counts
  // these as looked-at rather than re-assigning them on the next run.
  if (!dryRun) recordAssigned(batch, cycle)
  const results = await Promise.all(slices.map((s, i) => runWorker(s, i + 1)))
  totalAssigned += batch.length

  const draftsWaiting = countDrafts()
  console.log(`   drafts awaiting audit: ${draftsWaiting}`)

  console.log("   auditing…")
  const auditOut = runStep("tools/autonomy/audit-drafts-with-codex.mjs",
    [`--max-pages=${workers * perWorker}`, `--concurrency=${Math.max(2, Math.ceil(workers / 2))}`])
  process.stdout.write(indent(auditOut))

  console.log("   promoting…")
  const promoteOut = runStep("tools/autonomy/promote-audited-drafts.mjs", [])
  process.stdout.write(indent(promoteOut))
  const m = promoteOut.match(/committed=(\d+)/)
  if (m) totalCommitted += Number(m[1])

  lines.push(
    `## cycle ${cycle}`,
    `- assigned: ${batch.length}`,
    `- workers ok: ${results.filter((r) => r.ok).length}/${results.length}`,
    `- ${(promoteOut.match(/committed=\d+ revise=\d+ quarantined=\d+ skipped=\d+/) || ["(no promote summary)"])[0]}`,
    "",
  )
  fs.writeFileSync(logPath, lines.join("\n"))

  appendLedger({
    ts: new Date().toISOString(), actor: "drain", source_path: "", cite_key: "",
    status: `cycle-${cycle}-complete`, commit: "", blocker: "",
    next: `assigned=${batch.length} committed_total=${totalCommitted}`,
  })

  if (dryRun) { console.log("\n(dry run — single cycle only)"); break }
}

const mins = ((Date.now() - startedAt) / 60000).toFixed(1)
console.log(`\nDRAIN done — ${cycle} cycle(s), ${totalAssigned} PDFs assigned, ${totalCommitted} committed, ${mins} min.`)
lines.push(`\n**Total:** ${cycle} cycles, ${totalAssigned} assigned, ${totalCommitted} committed, ${mins} min.`)
fs.writeFileSync(logPath, lines.join("\n"))
console.log(`Log: ${path.relative(repoRoot, logPath)}`)

// ─── helpers ──────────────────────────────────────────────────────────
function indent(s) {
  return (s || "").split("\n").filter(Boolean).map((l) => `      ${l}`).join("\n") + "\n"
}
function appendLedger(o) {
  try { fs.appendFileSync(ledgerPath, JSON.stringify(o) + "\n") } catch {}
}
function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (!a.startsWith("--")) continue
    const [k, v] = a.slice(2).split("=")
    m.set(k, v ?? true)
  }
  return m
}
