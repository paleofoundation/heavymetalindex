#!/usr/bin/env node
// One-shot status dashboard for the autonomous gap-fill system.
//
// Run this anytime to see:
//   - Daemon liveness (heartbeat freshness, last tick log, active processes)
//   - Karen-priority category saturation (Cat 11→2, current vs 100/200 floor)
//   - Auto-fetched queue, audit-queue, wiki/sources/ count
//   - Recent autonomous commits (last 2 hours)
//   - Current wishlist focus rotation state
//
// Karen-facing: this is the trust artifact. Run it before/after a few ticks
// to see deltas; if numbers don't move, the system isn't working.
//
// Usage: node tools/autonomy/status.mjs

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const sourcesDir = path.join(repoRoot, "wiki/sources")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const KAREN_PRIORITY = [11, 9, 8, 7, 6, 5, 4, 3, 2]

function readFrontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8")
  const match = text.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const fm = {}
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([a-z_][a-z0-9_]*):\s*(.*)$/i)
    if (m) fm[m[1]] = m[2].trim()
  }
  return fm
}

function safe(cmd) {
  try { return execSync(cmd, { encoding: "utf8" }).trim() } catch { return "" }
}

const now = new Date()
const nowISO = now.toISOString().slice(0, 19) + "Z"

console.log("\n════════════════════════════════════════════════════════════════")
console.log(`HMI AUTONOMOUS-SYSTEM STATUS — ${nowISO}`)
console.log("════════════════════════════════════════════════════════════════\n")

// ─── 1. Daemon liveness ─────────────────────────────────────────────────
console.log("──── 1. Daemon liveness ────")
const heartbeatPath = path.join(autonomyDir, "heartbeat.txt")
if (fs.existsSync(heartbeatPath)) {
  const hb = fs.readFileSync(heartbeatPath, "utf8").trim()
  // heartbeat format: 2026-05-28T13-24-22Z
  const hbDate = new Date(hb.replace(/-/g, ":").replace(/T(\d+):(\d+):(\d+):/, "T$1:$2:$3.").replace(/T(\d{2}):(\d{2}):(\d{2})Z/, "T$1:$2:$3Z"))
  // Robust parse: replace dashes in the time portion only
  const hbISO = hb.replace(/T(\d{2})-(\d{2})-(\d{2})Z/, "T$1:$2:$3Z")
  const parsed = new Date(hbISO)
  const ageMin = (now - parsed) / 60000
  const verdict = ageMin < 35 ? "✅ FRESH" : ageMin < 75 ? "⚠️  stale (>35 min)" : "❌ DEAD (>75 min)"
  console.log(`  Last tick start: ${hb}`)
  console.log(`  Age: ${ageMin.toFixed(0)} min — ${verdict}`)
} else {
  console.log("  ❌ No heartbeat file. Daemon has never run.")
}

const liveProcs = safe('ps aux | grep -v grep | grep -E "daemon-tick|claude --print|ingest-manual" | wc -l').trim()
console.log(`  Active daemon-related processes: ${liveProcs}`)

const latestTick = safe(`ls -t ${autonomyDir}/daemon-runs/tick-*.log 2>/dev/null | head -1`)
if (latestTick) {
  console.log(`  Latest tick log: ${path.basename(latestTick)}`)
  const lastStep = safe(`grep -oE "^\\[[0-9:Z]+\\] === [^=]+ ===" "${latestTick}" 2>/dev/null | tail -1`)
  if (lastStep) console.log(`  Latest step: ${lastStep}`)
}

// ─── 2. Karen-priority category saturation ──────────────────────────────
console.log("\n──── 2. Karen-priority categories (target: 100-200 sources each) ────")
const categoryTotals = new Map()
const categoryProductCounts = new Map()
for (const file of fs.readdirSync(productsDir)) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const fm = readFrontmatter(path.join(productsDir, file))
  const cat = parseInt(fm.hmtc_category, 10)
  if (isNaN(cat)) continue
  const src = parseInt(fm.sources, 10) || 0
  categoryTotals.set(cat, (categoryTotals.get(cat) || 0) + src)
  categoryProductCounts.set(cat, (categoryProductCounts.get(cat) || 0) + 1)
}
const KAREN_LABELS = {
  11: "Meat, Poultry, Eggs",
  9: "Infant/Child Contact",
  8: "Water + Water-Based",
  7: "Oils, Condiments, Specialty",
  6: "Seafood",
  5: "Beverages",
  4: "Fruits, Vegetables, Produce",
  3: "Grains, Cereals, Rice",
  2: "Children Personal Care",
}
for (const cat of KAREN_PRIORITY) {
  const total = categoryTotals.get(cat) || 0
  const pages = categoryProductCounts.get(cat) || 0
  const bar = total >= 200 ? "████████████ SATURATED" :
              total >= 100 ? `${"█".repeat(Math.floor(total/20))}${" ".repeat(10-Math.floor(total/20))} approaching` :
              total > 0    ? `${"█".repeat(Math.floor(total/20))}${" ".repeat(10-Math.floor(total/20))} below floor` :
                             `           ── EMPTY`
  console.log(`  Cat ${String(cat).padStart(2)} ${KAREN_LABELS[cat].padEnd(28)} ${String(total).padStart(4)} sources across ${pages} products  ${bar}`)
}

// ─── 3. Pipeline queue state ────────────────────────────────────────────
console.log("\n──── 3. Pipeline queue state ────")
const autoFetchedCount = safe(`ls raw/manual-fetch/seasonal-geographic-variance/auto-fetched/*.pdf 2>/dev/null | wc -l`).trim()
console.log(`  Auto-fetched queue (PDFs awaiting ingest): ${autoFetchedCount}`)
const auditQueuePending = safe(`awk -F',' 'NR>1 && ($6=="pending" || $6=="pending-audit-spawn-failed")' data/evidence/audit-queue.csv 2>/dev/null | wc -l`).trim()
console.log(`  Audit-queue pending: ${auditQueuePending}`)
const sourcesTotal = safe(`ls ${sourcesDir}/*.md 2>/dev/null | wc -l`).trim()
console.log(`  wiki/sources/ total source pages: ${sourcesTotal}`)
const wishlistTotal = safe(`jq '.emitted' data/evidence/wishlist-queries.json 2>/dev/null`).trim()
const wishlistAutonomy = safe(`jq '.breakdown.autonomy_gap_driven' data/evidence/wishlist-queries.json 2>/dev/null`).trim()
console.log(`  wishlist-queries.json: ${wishlistTotal || "?"} queries (${wishlistAutonomy || "?"} from autonomy)`)

// ─── 4. Rotation state ──────────────────────────────────────────────────
console.log("\n──── 4. Wishlist focus rotation ────")
const rotationPath = path.join(autonomyDir, "wishlist-rotation-state.json")
if (fs.existsSync(rotationPath)) {
  const r = JSON.parse(fs.readFileSync(rotationPath, "utf8"))
  console.log(`  Next run focus: ${r.focus}`)
  console.log(`  Last run focus: ${r.last_focus || "(first run)"}`)
  console.log(`  Total runs:    ${r.run_count}`)
} else {
  console.log("  (no state file yet — first run will create it)")
}

// ─── 5. Recent commits ──────────────────────────────────────────────────
console.log("\n──── 5. Autonomous commits in the last 2 hours ────")
const recentCommits = safe(`git log --oneline --since='2 hours ago' --no-merges`).trim()
if (recentCommits) {
  const lines = recentCommits.split("\n").slice(0, 20)
  for (const l of lines) console.log(`  ${l}`)
  if (recentCommits.split("\n").length > 20) console.log(`  ... and ${recentCommits.split("\n").length - 20} more`)
} else {
  console.log("  (no commits in the last 2 hours)")
}

// ─── 6. Next-fire estimate ──────────────────────────────────────────────
const nowMin = now.getUTCMinutes()
const minsToNextFire = nowMin < 30 ? (30 - nowMin) : (60 - nowMin)
console.log(`\n──── 6. Next launchd fire ────`)
console.log(`  Schedule: every :00 and :30 UTC (StartCalendarInterval)`)
console.log(`  Next fire: ${minsToNextFire} minutes from now`)

console.log("\n════════════════════════════════════════════════════════════════")
console.log("To watch live, run: watch -n 60 'node tools/autonomy/status.mjs'")
console.log("════════════════════════════════════════════════════════════════\n")
