#!/usr/bin/env node
// Autonomous dual-model verification on recently-ingested source pages.
//
// HMI-22 ships the dual-model-extractor (anthropic/claude-opus-4-7 +
// openai/gpt-5.x via AI Gateway). Its CLI + queue worker entry points
// exist, but the daemon's ingest path uses single-model claude --print
// for the structured-extraction step. Result: every audit row in
// wiki_edit_audit.jsonl shows models_used:["anthropic/claude-opus-4-7"]
// and model_agreement_state:"single_model". The cross-check that makes
// the Cochrane-grade defensibility argument structurally enforceable
// isn't running on real ingests.
//
// This drainer closes the loop. Each tick: pick N recently-ingested
// source pages where (a) the raw artifact is markdown (FM_ handles —
// PDF text extraction is a separate problem), and (b) no extraction
// row exists yet in model_extractions.jsonl. For each, run dual-model
// extraction via the AI Gateway and append both provider rows.
//
// Downstream: detect-contradictions.mjs reads the aggregate distribution
// CSV, but the per-cell disagreement signal can ALSO surface here when
// the two providers disagree on numeric findings for the same source.
// HMI-9.9 (disagreement detector) is the planned consumer; for now,
// agreement state lands in the JSONL for forensic review.
//
// Bounded per-tick cap (default 2) — each dual-model call is ~30-90s
// per provider, ~60-180s per source. AI Gateway cost: ~$0.05-0.20 per
// source per provider depending on document size.
//
// PREREQUISITE: AI_GATEWAY_API_KEY must be set in the env. Daemon-tick.sh
// sources .env.development before running this.

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const maxSources = Number(args.get("max") ?? 2)
const lookbackHours = Number(args.get("lookback-hours") ?? 6)

const sourcesDir = path.join(repoRoot, "wiki/sources")
const extractionsPath = path.join(repoRoot, "data/evidence/model_extractions.jsonl")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date().toISOString().slice(0, 10)
const tickTimestamp = new Date().toISOString()

fs.mkdirSync(autonomyDir, { recursive: true })

console.log(`dual-model-verify-recent: max=${maxSources}, lookback-hours=${lookbackHours}, dry-run=${dryRun}`)

if (!process.env.AI_GATEWAY_API_KEY && !dryRun) {
  console.log("AI_GATEWAY_API_KEY not set. Skipping run (this is normal if the daemon hasn't sourced .env.development).")
  process.exit(0)
}

// ─── Build set of candidate_ids already extracted ──────────────────────
const alreadyExtracted = new Set()
if (fs.existsSync(extractionsPath)) {
  const lines = fs.readFileSync(extractionsPath, "utf8").split("\n").filter(Boolean)
  for (const line of lines) {
    try {
      const row = JSON.parse(line)
      if (row.candidate_id) alreadyExtracted.add(row.candidate_id)
    } catch {}
  }
}
console.log(`Already-extracted candidate IDs (in model_extractions.jsonl): ${alreadyExtracted.size}`)

// ─── Pick recently-modified FM_ source pages without extraction rows ───
const cutoffMs = Date.now() - lookbackHours * 3600 * 1000
const candidates = []
if (fs.existsSync(sourcesDir)) {
  for (const file of fs.readdirSync(sourcesDir)) {
    if (!file.endsWith(".md")) continue
    const fullPath = path.join(sourcesDir, file)
    const stat = fs.statSync(fullPath)
    if (stat.mtimeMs < cutoffMs) continue
    const content = fs.readFileSync(fullPath, "utf8")
    const fm = parseFrontmatter(content)
    if (!fm) continue
    const citeKey = fm.cite_key
    const rawPath = fm.raw_path
    const rawHandle = fm.raw_handle || ""
    if (!citeKey || !rawPath) continue
    // Only process markdown raw artifacts (skip PDFs for v1; needs pdftotext).
    if (!rawPath.endsWith(".md")) continue
    if (alreadyExtracted.has(citeKey)) continue
    if (!fs.existsSync(path.join(repoRoot, rawPath))) continue
    candidates.push({
      citeKey,
      file: path.relative(repoRoot, fullPath),
      rawPath,
      rawHandle,
      doi: fm.doi || "",
      title: fm.title || "",
      mtimeMs: stat.mtimeMs,
    })
  }
}

candidates.sort((a, b) => b.mtimeMs - a.mtimeMs)
const picked = candidates.slice(0, maxSources)

console.log(`\nMarkdown-source pages modified in last ${lookbackHours}h without dual-model extraction: ${candidates.length}`)
if (candidates.length === 0) {
  console.log("Nothing to verify this run. Skipping.")
  process.exit(0)
}

console.log(`\nProcessing ${picked.length} source(s) this tick:`)
for (const c of picked) console.log(`  - ${c.citeKey} (${c.rawHandle}; raw=${c.rawPath})`)

if (dryRun) {
  console.log("\nDRY RUN — not invoking dual-model extractor.")
  process.exit(0)
}

// ─── Invoke the extractor CLI per candidate ────────────────────────────
const succeeded = []
const failed = []

for (const c of picked) {
  console.log(`\n[${picked.indexOf(c) + 1}/${picked.length}] ${c.citeKey}`)
  const candidateId = `verify-${c.citeKey}`
  const cliArgs = [
    "tsx",
    "tools/extract/run-extractor.ts",
    `--candidate-id=${candidateId}`,
    `--artifact-file=${c.rawPath}`,
    "--candidates-jsonl=/dev/null",  // we synthesize the candidate inline below
  ]
  // The run-extractor.ts CLI expects to read the candidate row from
  // candidates.jsonl. We don't have one for already-ingested sources.
  // Workaround: pre-write a one-row candidates file in /tmp.
  const synthesizedCandidate = {
    candidate_id: candidateId,
    source_adapter: "synth-from-wiki-source",
    external_id: c.citeKey,
    url: c.doi ? `https://doi.org/${c.doi}` : "",
    doi: c.doi,
    title: c.title,
    abstract: "",
    retrieval_date: new Date().toISOString().slice(0, 10),
    methodology_grade: "unknown",
    study_type: "unknown",
    sample_size: null,
    blob_key: "",
  }
  const tmpCandidatesPath = `/tmp/dual-model-candidate-${candidateId}.jsonl`
  fs.writeFileSync(tmpCandidatesPath, JSON.stringify(synthesizedCandidate) + "\n", "utf8")
  cliArgs[cliArgs.findIndex((a) => a.startsWith("--candidates-jsonl"))] = `--candidates-jsonl=${tmpCandidatesPath}`

  try {
    const res = spawnSync("npx", cliArgs, {
      cwd: repoRoot,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 5 * 60 * 1000,  // 5 min per source (two provider calls in parallel)
      env: { ...process.env, AI_GATEWAY_API_KEY: process.env.AI_GATEWAY_API_KEY || "" },
    })
    if (res.error) {
      console.log(`  FAIL: ${res.error.message}`)
      failed.push({ ...c, error: res.error.message })
    } else if (res.status !== 0) {
      const stderr = (res.stderr || "").slice(0, 600)
      console.log(`  FAIL: exit ${res.status}: ${stderr}`)
      failed.push({ ...c, error: `exit ${res.status}` })
    } else {
      console.log(`  OK: extraction written to model_extractions.jsonl`)
      succeeded.push(c)
    }
  } catch (err) {
    console.log(`  FAIL: ${err.message}`)
    failed.push({ ...c, error: err.message })
  } finally {
    try { fs.unlinkSync(tmpCandidatesPath) } catch {}
  }
}

// ─── Report ──────────────────────────────────────────────────────────
const reportPath = path.join(autonomyDir, `dual-model-verify-${today}.md`)
const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Dual-model verify report — ${today}\n\n`
const lines = [existing.trimEnd(), "", `## Run ${tickTimestamp}`, ""]
lines.push(`- Candidates this run: ${picked.length}`)
lines.push(`- Succeeded: ${succeeded.length}`)
lines.push(`- Failed: ${failed.length}`)
lines.push("")
if (succeeded.length) {
  lines.push("### Succeeded (rows written to model_extractions.jsonl)")
  for (const s of succeeded) lines.push(`- \`${s.citeKey}\``)
  lines.push("")
}
if (failed.length) {
  lines.push("### Failed")
  for (const f of failed) lines.push(`- \`${f.citeKey}\`: ${f.error}`)
  lines.push("")
}
fs.writeFileSync(reportPath, lines.join("\n"), "utf8")

console.log(`\nBatch complete: ${succeeded.length} succeeded, ${failed.length} failed`)
process.exit(0)

// ─── Helpers ─────────────────────────────────────────────────────────

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return null
  const fm = {}
  for (const line of m[1].split("\n")) {
    const km = line.match(/^([a-z_][a-z0-9_]*):\s*(.*)$/i)
    if (km) {
      let val = km[2].trim()
      // Strip surrounding quotes
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      fm[km[1]] = val
    }
  }
  return fm
}

function parseArgs(argv) {
  const args = new Map()
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq > 0) args.set(a.slice(2, eq), a.slice(eq + 1))
      else args.set(a.slice(2), "true")
    }
  }
  return Object.assign(args, { has: (k) => args.get(k) === "true" })
}
