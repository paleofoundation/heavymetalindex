#!/usr/bin/env node
// File watcher for wiki/sources/ per CLAUDE.md Part 5b.
//
// Runs the routing audit on every source-page change with a 500ms debounce
// so a burst of writes (for example, a bulk-ingest session writing 36 papers)
// only triggers one audit run after the burst settles. Intended to run
// alongside `npm run serve` so the dev experience reflects the current
// corpus without requiring the model or Karen to invoke the audit manually.
//
// Usage:
//   npm run watch:sources          # foreground, Ctrl-C to stop
//   npm run watch:sources &        # background, in a separate terminal
//
// The audit script logs its own counts; this wrapper just orchestrates when
// it runs. If the audit fails (non-zero exit), the error is printed and the
// watcher keeps running.

import chokidar from "chokidar"
import { spawn } from "node:child_process"
import path from "node:path"
import fs from "node:fs"

const repoRoot = process.cwd()
const sourceDir = path.join(repoRoot, "wiki/sources")
const auditScript = path.join(repoRoot, "tools/evidence/build-routing-audit.mjs")

if (!fs.existsSync(sourceDir)) {
  console.error(`watch-sources: source directory not found at ${sourceDir}`)
  process.exit(1)
}
if (!fs.existsSync(auditScript)) {
  console.error(`watch-sources: audit script not found at ${auditScript}`)
  process.exit(1)
}

// The completeness scorecard reads source-page frontmatter (its ingredient
// source set), so a source change can move a scorecard chip. Rebuild it after
// the routing audit. The scorecard writes only to wiki/ingredients/, which this
// watcher does NOT watch, so there is no self-trigger loop.
const scorecardScript = path.join(repoRoot, "tools/evidence/build-ingredient-scorecard.mjs")

const DEBOUNCE_MS = 500
let debounceTimer = null
let running = false
let pending = false

function runAudit() {
  if (running) {
    pending = true
    return
  }
  running = true
  pending = false
  const startedAt = new Date().toISOString()
  console.log(`\n[watch-sources ${startedAt}] running routing audit...`)
  const child = spawn("node", [auditScript], { stdio: "inherit" })
  child.on("exit", (code) => {
    if (code !== 0) {
      console.error(`[watch-sources] audit exited with code ${code}; watcher continues.`)
    }
    // Chain the scorecard rebuild after the audit so its source-derived chips
    // stay fresh. Failure is non-fatal; the watcher keeps running.
    const sc = spawn("node", [scorecardScript], { stdio: "inherit" })
    sc.on("exit", (scCode) => {
      running = false
      if (scCode !== 0) console.error(`[watch-sources] scorecard exited with code ${scCode}; watcher continues.`)
      if (pending) {
        pending = false
        setTimeout(runAudit, 100)
      }
    })
  })
}

function scheduleAudit(reason, filePath) {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debounceTimer = null
    console.log(`[watch-sources] ${reason}: ${path.relative(repoRoot, filePath)}`)
    runAudit()
  }, DEBOUNCE_MS)
}

console.log(`[watch-sources] watching ${path.relative(repoRoot, sourceDir)} for changes (debounced ${DEBOUNCE_MS}ms).`)
console.log(`[watch-sources] press Ctrl-C to stop.`)

// Run an initial audit so the audit CSV is current when the watcher starts.
runAudit()

const watcher = chokidar.watch(sourceDir, {
  ignored: (filePath) => {
    // Skip dotfiles, index.md, _TEMPLATE.md, and non-markdown files.
    const base = path.basename(filePath)
    if (base.startsWith(".")) return true
    if (base === "index.md") return true
    if (base === "_TEMPLATE.md") return true
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile() && !base.endsWith(".md")) return true
    return false
  },
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 200,
    pollInterval: 50,
  },
})

watcher.on("add", (filePath) => scheduleAudit("source added", filePath))
watcher.on("change", (filePath) => scheduleAudit("source changed", filePath))
watcher.on("unlink", (filePath) => scheduleAudit("source removed", filePath))
watcher.on("error", (error) => {
  console.error("[watch-sources] watcher error:", error)
})

process.on("SIGINT", () => {
  console.log("\n[watch-sources] stopping watcher.")
  watcher.close().then(() => process.exit(0))
})
process.on("SIGTERM", () => {
  watcher.close().then(() => process.exit(0))
})
