#!/usr/bin/env node
// The promoter: the SINGLE, SERIAL committer for audited source-page drafts.
// Deterministic — contains no LLM call and makes no editorial judgment. It only
// acts on verdicts already recorded by tools/autonomy/audit-drafts-with-codex.mjs.
//
//   node tools/autonomy/promote-audited-drafts.mjs
//   node tools/autonomy/promote-audited-drafts.mjs --dry-run
//   node tools/autonomy/promote-audited-drafts.mjs --push
//
// WHY THIS EXISTS (two reasons):
//  1. It takes Claude out of the per-page commit loop. Drafting engines draft,
//     a different engine audits, and this script commits what passed — so the
//     conductor only samples and handles exceptions.
//  2. It is the ONLY process that commits, which structurally kills the
//     .git/index.lock race that forced ingest concurrency to 1 (see the header
//     of ingest-manual-fetch-batch.mjs). Drafting lanes never commit, so they
//     can run in parallel.
//
// Routing:
//   PROMOTE    → git add <page> + commit (explicit-filename staging, one page
//                per commit, so history stays reconstructable per CLAUDE.md Part 4)
//   REVISE     → left in place, uncommitted, flagged for the conductor
//   QUARANTINE → moved to wiki/sources/_quarantine/ so it cannot be swept into
//                a later commit, and flagged
//
// FAIL-CLOSED: anything not an explicit PROMOTE is never committed.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const doPush = args.has("push")
const maxCommits = Number(args.get("max-commits") ?? 25)

const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const verdictsPath = path.join(autonomyDir, "audit-verdicts.jsonl")
const actedPath = path.join(autonomyDir, "audit-promoted.jsonl")
const ledgerPath = path.join(autonomyDir, "agent-events.jsonl")
const auditQueuePath = path.join(repoRoot, "data/evidence/audit-queue.csv")
const quarantineDir = path.join(repoRoot, "wiki/sources/_quarantine")
const lockPath = path.join(autonomyDir, "promoter.lock")

// ─── Gates ────────────────────────────────────────────────────────────
for (const stop of [".frank.STOP", ".hmi-promote.STOP"]) {
  if (fs.existsSync(path.join(process.env.HOME ?? "", stop))) {
    console.log(`HALTED: ~/${stop} present.`)
    process.exit(0)
  }
}
if (!fs.existsSync(verdictsPath)) {
  console.log("No audit verdicts recorded yet. Nothing to promote.")
  process.exit(0)
}

// ─── Serial lock (this is the point of the script) ────────────────────
if (!dryRun) {
  if (fs.existsSync(lockPath)) {
    try {
      const pid = parseInt(fs.readFileSync(lockPath, "utf8").trim(), 10)
      if (pid && process.kill(pid, 0)) {
        console.log(`Another promoter is running (PID ${pid}). Exiting.`)
        process.exit(0)
      }
    } catch {}
    console.log("Stale promoter lock; clearing.")
    try { fs.unlinkSync(lockPath) } catch {}
  }
  fs.mkdirSync(autonomyDir, { recursive: true })
  fs.writeFileSync(lockPath, String(process.pid), "utf8")
  const release = () => { try { fs.unlinkSync(lockPath) } catch {} }
  process.on("exit", release)
  process.on("SIGINT", () => { release(); process.exit(1) })
  process.on("SIGTERM", () => { release(); process.exit(1) })
}

// ─── Load verdicts, skip ones already acted on ────────────────────────
const acted = new Set()
if (fs.existsSync(actedPath)) {
  for (const line of fs.readFileSync(actedPath, "utf8").split("\n")) {
    if (!line.trim()) continue
    try { const r = JSON.parse(line); if (r.page) acted.add(r.page) } catch {}
  }
}

const verdicts = []
for (const line of fs.readFileSync(verdictsPath, "utf8").split("\n")) {
  if (!line.trim()) continue
  try { verdicts.push(JSON.parse(line)) } catch {}
}
// Last verdict per page wins (a re-audit supersedes).
const latest = new Map()
for (const v of verdicts) latest.set(v.page, v)

const pending = [...latest.values()].filter((v) => !acted.has(v.page))
if (!pending.length) {
  console.log("All recorded verdicts have already been acted on.")
  process.exit(0)
}

console.log(`${pending.length} verdict(s) to act on.`)

let committed = 0, revised = 0, quarantined = 0, skipped = 0
for (const v of pending) {
  const pageAbs = path.join(repoRoot, v.page)
  if (!fs.existsSync(pageAbs)) {
    console.log(`  skip (page gone): ${v.page}`)
    skipped++
    continue
  }

  if (v.verdict === "PROMOTE") {
    if (committed >= maxCommits) { console.log(`  (max-commits ${maxCommits} reached)`); break }
    if (dryRun) {
      console.log(`  DRY RUN would COMMIT: ${v.page}`)
    } else {
      try {
        // Explicit-filename staging only — never `git add -A`. The page and its
        // audit trail go in together so history is self-explaining.
        const toStage = [v.page]
        if (v.report && fs.existsSync(path.join(repoRoot, v.report))) toStage.push(v.report)
        execFileSync("git", ["add", ...toStage], { cwd: repoRoot })
        execFileSync(
          "git",
          ["commit", "-q", "-m",
            `ingest: ${v.cite_key} [audited PROMOTE by ${v.auditor}]\n\n` +
            `Drafted by a scut lane, audited by ${v.auditor} (5-check audit), committed by\n` +
            `the deterministic promoter.` +
            (v.report ? ` Audit report: ${v.report}` : "") + `\n\n` +
            `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`],
          { cwd: repoRoot },
        )
        const sha = execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: repoRoot, encoding: "utf8" }).trim()
        console.log(`  COMMITTED ${v.cite_key} → ${sha}`)
        recordActed({ ...v, action: "committed", commit: sha })
        appendLedger({
          ts: new Date().toISOString(), actor: "promoter", source_path: v.raw_path || v.page,
          cite_key: v.cite_key, status: "committed", commit: sha, blocker: "", next: "",
        })
        appendAuditQueue(v, "promoted", sha)
        committed++
        continue
      } catch (e) {
        console.error(`  COMMIT FAILED ${v.page}: ${e.message}`)
        skipped++
        continue
      }
    }
    committed++
  } else if (v.verdict === "QUARANTINE") {
    if (dryRun) {
      console.log(`  DRY RUN would QUARANTINE: ${v.page}`)
    } else {
      fs.mkdirSync(quarantineDir, { recursive: true })
      const dest = path.join(quarantineDir, path.basename(v.page))
      try {
        fs.renameSync(pageAbs, dest)
        console.log(`  QUARANTINED ${v.cite_key} → ${path.relative(repoRoot, dest)}`)
        recordActed({ ...v, action: "quarantined", commit: "" })
        appendLedger({
          ts: new Date().toISOString(), actor: "promoter", source_path: v.raw_path || v.page,
          cite_key: v.cite_key, status: "quarantined", commit: "",
          blocker: v.note || "audit QUARANTINE", next: "conductor review",
        })
        appendAuditQueue(v, "quarantined", "")
      } catch (e) {
        console.error(`  QUARANTINE MOVE FAILED ${v.page}: ${e.message}`)
        skipped++
        continue
      }
    }
    quarantined++
  } else {
    // REVISE (or anything unexpected) → leave uncommitted for the conductor.
    if (dryRun) {
      console.log(`  DRY RUN would FLAG (REVISE): ${v.page}`)
    } else {
      console.log(`  REVISE (left uncommitted): ${v.cite_key}`)
      recordActed({ ...v, action: "flagged-revise", commit: "" })
      appendLedger({
        ts: new Date().toISOString(), actor: "promoter", source_path: v.raw_path || v.page,
        cite_key: v.cite_key, status: "needs-revision", commit: "",
        blocker: v.note || "audit REVISE", next: "conductor applies audit",
      })
      appendAuditQueue(v, "needs-revision", "")
    }
    revised++
  }
}

console.log(
  `\nDone. committed=${committed} revise=${revised} quarantined=${quarantined} skipped=${skipped}` +
  (dryRun ? "  (DRY RUN — nothing written)" : ""),
)

if (doPush && committed > 0 && !dryRun) {
  try {
    execFileSync("git", ["push", "origin", "HEAD"], { cwd: repoRoot, stdio: "inherit" })
    console.log("Pushed to origin (GitHub backup/sync only; publishing stays manual).")
  } catch (e) {
    console.error(`Push failed (commits are safe locally): ${e.message}`)
  }
}

// ─── helpers ──────────────────────────────────────────────────────────
function recordActed(rec) {
  fs.appendFileSync(actedPath, JSON.stringify({ ...rec, acted_at: new Date().toISOString() }) + "\n")
}

function appendLedger(obj) {
  try { fs.appendFileSync(ledgerPath, JSON.stringify(obj) + "\n") } catch {}
}

// audit-queue.csv columns:
// cite_key,source_folder,handle,commit_hash,timestamp,status,audit_verdict,audit_applied_at,notes
function appendAuditQueue(v, status, sha) {
  try {
    if (!fs.existsSync(auditQueuePath)) return
    const row = [
      v.cite_key, "wiki/sources", v.handle || "", sha || "pending",
      new Date().toISOString(), status, v.verdict, "",
      csvQuote(`Cross-engine audit by ${v.auditor}; report ${v.report}${v.note ? `; ${v.note}` : ""}`),
    ].join(",")
    const existing = fs.readFileSync(auditQueuePath, "utf8")
    fs.writeFileSync(auditQueuePath, existing.endsWith("\n") ? existing + row + "\n" : existing + "\n" + row + "\n")
  } catch (e) {
    console.error(`  (audit-queue append failed: ${e.message})`)
  }
}

function csvQuote(s) {
  const t = String(s).replace(/"/g, '""')
  return /[",\n]/.test(t) ? `"${t}"` : t
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (!a.startsWith("--")) continue
    const [k, val] = a.slice(2).split("=")
    m.set(k, val ?? true)
  }
  return m
}
