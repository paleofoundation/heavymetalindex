#!/usr/bin/env node
// frank-intake — prepare a freshly-dropped manual-fetch folder so FRANK can
// ingest it. Two things FRANK's walker can't do on its own:
//   1. Extract zips (the walker only sees loose .pdf files).
//   2. Dedup against the corpus so the engines don't spend slots re-ingesting
//      papers already in the wiki.
//
// This does both, then leaves the novel PDFs in place under a FRANK-watched
// root. There is NO "run" to fire off afterward — FRANK is always running and
// drains them on its next cycle (Opus) or sprint (Codex, for auto-fetched).
//
// Usage:
//   node tools/autonomy/frank-intake.mjs --dir="raw/Manual Fetch Kimi /My New Folder"
//   node tools/autonomy/frank-intake.mjs --dir="..." --also="raw/manual-fetch/Kimi_Agent_Download Corruption Issue"
//   npm run frank:intake -- --dir="raw/Manual Fetch Kimi /My New Folder"

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { spawnSync } from "node:child_process"

const REPO = process.env.HMI_REPO_ROOT || path.join(os.homedir(), "Desktop/heavy-metal-index")
const args = new Map()
for (const a of process.argv.slice(2)) {
  if (a.startsWith("--")) {
    const eq = a.indexOf("=")
    if (eq > 0) args.set(a.slice(2, eq), a.slice(eq + 1))
    else args.set(a.slice(2), "true")
  }
}
const dir = args.get("dir")
const also = args.get("also") || ""
if (!dir) {
  console.error('ERROR: --dir is required, e.g. --dir="raw/Manual Fetch Kimi /My Folder"')
  process.exit(1)
}
const absDir = path.isAbsolute(dir) ? dir : path.join(REPO, dir)
if (!fs.existsSync(absDir)) {
  console.error(`ERROR: folder not found: ${absDir}`)
  process.exit(1)
}

// Warn (don't fail) if the folder is not under a FRANK-watched root — FRANK
// won't see the PDFs there. The four roots FRANK's Opus engine walks:
const WATCHED = ["raw/Manual Fetch Kimi", "raw/Papers Cube Manual Fetch", "raw/Manual Resourcing", "raw/Manual Fetch Discovery"]
const relDir = path.relative(REPO, absDir)
if (!WATCHED.some((w) => relDir.startsWith(w))) {
  console.warn(`WARNING: ${relDir} is not under a FRANK-watched root. FRANK won't ingest it there.`)
  console.warn(`         Move it under one of: ${WATCHED.map((w) => w + "/").join(", ")}`)
}

const slug = path.basename(absDir).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40)

// ---------- 1. Extract zips (top level + one level deep) ----------
function findZips(root, depth = 0) {
  const out = []
  if (depth > 1) return out
  for (const e of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, e.name)
    if (e.isDirectory()) out.push(...findZips(full, depth + 1))
    else if (e.isFile() && e.name.toLowerCase().endsWith(".zip")) out.push(full)
  }
  return out
}
const zips = findZips(absDir)
console.log(`frank-intake: ${relDir}`)
console.log(`  found ${zips.length} zip(s) to extract`)
let extracted = 0
for (const zip of zips) {
  const dest = path.join(path.dirname(zip), "_extracted_" + path.basename(zip, ".zip"))
  const r = spawnSync("unzip", ["-o", "-q", zip, "-d", dest], { encoding: "utf8" })
  if (r.status === 0) {
    extracted++
  } else {
    console.warn(`  WARN: could not extract ${path.basename(zip)} (${(r.stderr || "").slice(0, 80)})`)
  }
}
if (zips.length) console.log(`  extracted ${extracted}/${zips.length}`)

// ---------- 2. Dedup against the corpus (+ optional --also queue) ----------
console.log(`  deduping against the corpus${also ? " + " + also : ""} ...`)
const dedupArgs = ["tools/autonomy/dedup-manual-fetch-folder.mjs", `--dir=${absDir}`, `--tag=intake-${slug}`]
if (also) dedupArgs.push(`--also=${also}`)
const dr = spawnSync("/opt/homebrew/bin/node", dedupArgs, { cwd: REPO, encoding: "utf8" })
process.stdout.write(
  (dr.stdout || "")
    .split("\n")
    .filter((l) => /novel|no_doi|skip-list|drain|summary|duplicate/.test(l))
    .map((l) => "    " + l)
    .join("\n") + "\n",
)
if (dr.status !== 0) console.warn(`  WARN: dedup exited ${dr.status}: ${(dr.stderr || "").slice(0, 120)}`)

// ---------- 2b. Commit the dedup artifacts (skip-list + novelty CSV) ----------
// Scoped + via the pre-commit hook's lock so it coordinates with the engines.
// On failure we log and move on — the skip-list is already on disk and the
// ingester reads it from disk, so a failed commit never blocks ingestion.
const cm = spawnSync(
  "bash",
  ["-c", `git add data/evidence/manual-fetch-skip.csv data/evidence/intake-${slug}-novelty-*.csv 2>/dev/null && git commit -q -m "frank-intake: dedup ${slug} (skip-list + novelty)" 2>&1 || true`],
  { cwd: REPO, encoding: "utf8" },
)
if (cm.stdout && /error|fatal/i.test(cm.stdout)) console.warn(`  commit note: ${cm.stdout.slice(0, 120)}`)

// ---------- 3. Count what's now queued + report ----------
function countPdfs(root) {
  let n = 0
  for (const e of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, e.name)
    if (e.isDirectory()) n += countPdfs(full)
    else if (e.name.toLowerCase().endsWith(".pdf")) n++
  }
  return n
}
const totalPdfs = countPdfs(absDir)
console.log("")
console.log(`✅ Intake complete for "${path.basename(absDir)}".`)
console.log(`   ${totalPdfs} PDFs on disk; duplicates skip-listed. The novel ones are queued.`)
console.log(`   FRANK will ingest them automatically — nothing else to run.`)
console.log(`   Watch: data/evidence/autonomy/FRANK-status.md`)
