#!/usr/bin/env node
/**
 * ingest-marker-batch.mjs
 *
 * Bounded autonomous ingest of Marker-converted papers from raw/markdown/
 * into wiki/sources/ pages, using `claude --print` non-interactive for
 * the structured extraction.
 *
 * Per CLAUDE.md Part 5 and Part 8: an ingest produces a single source page
 * with accurate frontmatter (cite_key, raw_handle, products, ingredients,
 * matrices, metals, jurisdictions, sample_n, methods) and body summary
 * (key numbers, methods, implications). The routing layer (Part 5b) then
 * fans out via build-routing-audit.mjs.
 *
 * Usage:
 *   node tools/autonomy/ingest-marker-batch.mjs \
 *     [--max-papers=2] [--priority=P1,P2] [--model=claude-haiku-4-5-20251001] \
 *     [--timeout=300] [--cost-ceiling=50]
 *
 * Environment:
 *   HMI_AUTONOMOUS_INGEST=1            # enable; set to 0 to disable
 *   HMI_INGEST_MAX_PAPERS=2            # papers per invocation
 *   HMI_INGEST_PRIORITY=P1,P2          # which triage tiers
 *   HMI_INGEST_MODEL=...               # Claude model identifier
 *   HMI_INGEST_COST_CEILING=50         # USD; tool stops when exceeded
 *
 * Output:
 *   - wiki/sources/<cite-key>.md       (one per successfully ingested paper)
 *   - data/evidence/autonomy/ingest-report-<date>.md   (action log)
 *   - data/evidence/autonomy/ingest-cost-ledger.csv    (cumulative cost)
 */

import fs from "node:fs"
import path from "node:path"
import { execSync, spawnSync } from "node:child_process"

const REPO_ROOT = process.cwd()
const RAW_MARKDOWN = path.join(REPO_ROOT, "raw/markdown")
const MANIFEST = path.join(REPO_ROOT, "raw/manifest/triage-manifest.csv")
const SOURCES_DIR = path.join(REPO_ROOT, "wiki/sources")
const REPORT_DIR = path.join(REPO_ROOT, "data/evidence/autonomy")
const COST_LEDGER = path.join(REPORT_DIR, "ingest-cost-ledger.csv")

function parseArgs() {
  const args = process.argv.slice(2)
  const opts = {
    maxPapers: parseInt(process.env.HMI_INGEST_MAX_PAPERS || "2"),
    priority: (process.env.HMI_INGEST_PRIORITY || "P1,P2").split(","),
    model: process.env.HMI_INGEST_MODEL || "claude-haiku-4-5-20251001",
    timeout: parseInt(process.env.HMI_INGEST_TIMEOUT || "300"),
    costCeiling: parseFloat(process.env.HMI_INGEST_COST_CEILING || "50"),
  }
  for (const a of args) {
    const m = a.match(/^--([a-z-]+)=(.+)$/)
    if (!m) continue
    const k = m[1]
    const v = m[2]
    if (k === "max-papers") opts.maxPapers = parseInt(v)
    else if (k === "priority") opts.priority = v.split(",")
    else if (k === "model") opts.model = v
    else if (k === "timeout") opts.timeout = parseInt(v)
    else if (k === "cost-ceiling") opts.costCeiling = parseFloat(v)
  }
  return opts
}

function loadManifest() {
  if (!fs.existsSync(MANIFEST)) return new Map()
  const csv = fs.readFileSync(MANIFEST, "utf8")
  const lines = csv.split("\n")
  if (lines.length < 2) return new Map()
  const headers = lines[0].split(",").map((h) => h.trim())
  const idxHandle = headers.indexOf("raw_handle")
  const idxPriority = headers.indexOf("priority")
  const idxCiteKey = headers.indexOf("cite_key")
  const idxTitle = headers.indexOf("title")
  const map = new Map()
  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split(",")
    const handle = cells[idxHandle]
    if (!handle) continue
    map.set(handle.trim(), {
      raw_handle: handle.trim(),
      priority: cells[idxPriority]?.trim() || "P5",
      cite_key: cells[idxCiteKey]?.trim() || null,
      title: cells[idxTitle]?.trim() || null,
    })
  }
  return map
}

function findUnprocessedPapers(opts, manifest) {
  // Walk raw/markdown/, find FM_* folders without a corresponding
  // wiki/sources/<cite-key>.md page.
  if (!fs.existsSync(RAW_MARKDOWN)) return []
  const folders = fs.readdirSync(RAW_MARKDOWN, { withFileTypes: true })
    .filter((e) => e.isDirectory() && e.name.startsWith("FM_"))
    .map((e) => e.name)

  const existingSources = new Set(
    fs.existsSync(SOURCES_DIR)
      ? fs.readdirSync(SOURCES_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
      : []
  )

  const unprocessed = []
  for (const handle of folders) {
    const meta = manifest.get(handle)
    if (!meta) continue
    if (!opts.priority.includes(meta.priority)) continue
    if (meta.cite_key && existingSources.has(meta.cite_key)) continue
    unprocessed.push(meta)
  }
  // Sort by priority (P1 < P2 < ... < P5)
  unprocessed.sort((a, b) => (a.priority || "Z").localeCompare(b.priority || "Z"))
  return unprocessed
}

function getCumulativeCost() {
  if (!fs.existsSync(COST_LEDGER)) return 0
  const csv = fs.readFileSync(COST_LEDGER, "utf8")
  const lines = csv.split("\n").filter((l) => l.trim())
  if (lines.length < 2) return 0
  let total = 0
  // Today's spending only
  const today = new Date().toISOString().slice(0, 10)
  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split(",")
    if (cells[0]?.startsWith(today)) {
      total += parseFloat(cells[3] || "0")
    }
  }
  return total
}

function appendCostLedger(handle, model, costUsd) {
  fs.mkdirSync(REPORT_DIR, { recursive: true })
  const isNew = !fs.existsSync(COST_LEDGER)
  if (isNew) {
    fs.writeFileSync(COST_LEDGER, "timestamp,raw_handle,model,cost_usd\n", "utf8")
  }
  fs.appendFileSync(COST_LEDGER, `${new Date().toISOString()},${handle},${model},${costUsd.toFixed(4)}\n`)
}

function ingestOne(meta, opts) {
  // Read the Marker-converted markdown for this paper.
  const folderPath = path.join(RAW_MARKDOWN, meta.raw_handle)
  const mdFiles = fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"))
  if (mdFiles.length === 0) return { status: "skipped", reason: "no markdown in folder" }
  const mdPath = path.join(folderPath, mdFiles[0])
  let markerMd = fs.readFileSync(mdPath, "utf8")
  // Bound input size to ~8K tokens worth (~32K characters).
  if (markerMd.length > 32000) markerMd = markerMd.slice(0, 32000) + "\n\n[content truncated]"

  // Build the prompt for claude --print.
  const prompt = `You are ingesting a peer-reviewed paper into the Heavy Metal Index wiki. Read the Marker-converted markdown below and produce a single complete source page in markdown for wiki/sources/<cite-key>.md.

The source page must include:
1. Frontmatter (YAML) with these fields filled accurately from the paper:
   - type: source
   - raw_handle: ${meta.raw_handle}
   - cite_key: ${meta.cite_key || "[derive from first author + year + slug]"}
   - title: (exact paper title)
   - authors: (full author list as YAML array)
   - year: (publication year)
   - publication: (journal name)
   - doi: (DOI if present, else null)
   - source_type: peer-reviewed | regulatory | industry-whitepaper
   - evidence_tier: A | B | C  (A for peer-reviewed primary, government reports)
   - license: (if known)
   - metals: (YAML array of metals studied, using Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U)
   - ingredients: (YAML array of wikilink strings like "[[ingredients/rice]]" — only ingredients the paper actually studies)
   - products: (YAML array of wikilink strings)
   - matrices: (YAML array of matrix tokens like infant-formula-powder-non-soy, baby-cereal-rice-based, etc.)
   - jurisdictions: (YAML array of ISO 2-letter country codes)
   - sample_n: (integer sample size, if stated)
   - sample_population: (brief description)
   - extraction_method: autonomy_v0_ingest_marker_batch
   - review_state: autonomy_v0_extracted
   - updated: ${new Date().toISOString().slice(0, 10)}

2. Body sections (use ## H2 headings):
   - "# <First-Author> et al. <year> — <short title>" (H1, replaces "## TL;DR")
   - 2-4 sentence opening prose summary (no heading; sits directly under H1)
   - ## Key numbers — pull exact figures: sample sizes, means, 95th percentiles, LODs, geographic breakdown. Include page/table references. Preserve units exactly.
   - ## Methods (brief) — analytical method, speciation or total, sample prep, LOD/LOQ. Flag limitations.
   - ## Implications — Certification, Courses, App, Microbiome (if applicable) — short paragraphs
   - ## Wiki pages updated on ingest — list of relevant wikilinks

CRITICAL RULES:
- Output ONLY the source page markdown. No commentary, no explanation, no code fences around the page.
- Use the exact frontmatter format above.
- Preserve all numeric values exactly as the paper reports them. Do not round, average, or harmonize.
- If a field is unknown, use null or empty array; do not fabricate.
- Wikilink strings in frontmatter must be in YAML array quoted form: ["[[ingredients/rice]]", "[[ingredients/wheat]]"]

Paper content (Marker-converted markdown):

${markerMd}`

  // Call claude --print non-interactive.
  const t0 = Date.now()
  const result = spawnSync("claude", ["--print", "--model", opts.model], {
    input: prompt,
    encoding: "utf8",
    timeout: opts.timeout * 1000,
    maxBuffer: 5 * 1024 * 1024,
  })
  const t1 = Date.now()

  if (result.error) return { status: "error", reason: `claude --print: ${result.error.message}` }
  if (result.status !== 0) return { status: "error", reason: `claude --print exit ${result.status}: ${result.stderr?.slice(0, 200)}` }

  const output = result.stdout?.trim() || ""
  if (!output.startsWith("---")) {
    return { status: "error", reason: `output does not start with YAML frontmatter (got: ${output.slice(0, 100)}...)` }
  }

  // Derive cite-key from output if not in manifest.
  let citeKey = meta.cite_key
  if (!citeKey) {
    const m = output.match(/^cite_key:\s*(.+)$/m)
    if (m) citeKey = m[1].trim().replace(/['"]/g, "")
  }
  if (!citeKey) return { status: "error", reason: "could not derive cite-key" }

  // Write the source page.
  const outPath = path.join(SOURCES_DIR, `${citeKey}.md`)
  fs.mkdirSync(SOURCES_DIR, { recursive: true })
  fs.writeFileSync(outPath, output + "\n", "utf8")

  // Rough cost estimate (input ~prompt length, output ~response length).
  const inputChars = prompt.length
  const outputChars = output.length
  const inputTokens = inputChars / 4
  const outputTokens = outputChars / 4
  // Sonnet 4.6 rough pricing as of model release: $3/MTok in, $15/MTok out.
  // Haiku 4.5: $1/MTok in, $5/MTok out.
  const isHaiku = /haiku/i.test(opts.model)
  const costIn = (inputTokens / 1e6) * (isHaiku ? 1 : 3)
  const costOut = (outputTokens / 1e6) * (isHaiku ? 5 : 15)
  const cost = costIn + costOut

  appendCostLedger(meta.raw_handle, opts.model, cost)

  return {
    status: "ok",
    citeKey,
    outFile: path.relative(REPO_ROOT, outPath),
    durationMs: t1 - t0,
    costUsd: cost,
  }
}

function main() {
  const opts = parseArgs()

  console.log(`[ingest-marker-batch] config: maxPapers=${opts.maxPapers}, priority=${opts.priority.join(",")}, model=${opts.model}, timeout=${opts.timeout}s, costCeiling=$${opts.costCeiling}`)

  // Cost ceiling check
  const todayCost = getCumulativeCost()
  if (todayCost >= opts.costCeiling) {
    console.log(`[ingest-marker-batch] daily cost ceiling reached: $${todayCost.toFixed(2)} >= $${opts.costCeiling}. Exiting.`)
    process.exit(0)
  }

  const manifest = loadManifest()
  if (manifest.size === 0) {
    console.log("[ingest-marker-batch] manifest empty or missing. Nothing to do.")
    process.exit(0)
  }

  const queue = findUnprocessedPapers(opts, manifest)
  if (queue.length === 0) {
    console.log("[ingest-marker-batch] no unprocessed papers in raw/markdown/ matching priority filter.")
    process.exit(0)
  }

  console.log(`[ingest-marker-batch] queue: ${queue.length} unprocessed papers. Will process up to ${opts.maxPapers}.`)

  // Check that claude CLI is available.
  try {
    execSync("which claude", { stdio: "pipe" })
  } catch {
    console.error("[ingest-marker-batch] claude CLI not on PATH. Cannot run autonomous ingest.")
    process.exit(0)
  }

  const results = []
  let processed = 0
  for (const meta of queue) {
    if (processed >= opts.maxPapers) break
    if (getCumulativeCost() >= opts.costCeiling) {
      console.log(`[ingest-marker-batch] cost ceiling hit mid-batch. Stopping at ${processed} papers.`)
      break
    }
    console.log(`[ingest-marker-batch] [${processed + 1}/${opts.maxPapers}] ingesting ${meta.raw_handle} (${meta.priority})...`)
    const result = ingestOne(meta, opts)
    results.push({ meta, ...result })
    if (result.status === "ok") {
      console.log(`[ingest-marker-batch]   → OK: ${result.outFile} (${(result.durationMs / 1000).toFixed(1)}s, $${result.costUsd.toFixed(4)})`)
      processed++
    } else {
      console.log(`[ingest-marker-batch]   → ${result.status}: ${result.reason}`)
    }
  }

  // Report
  fs.mkdirSync(REPORT_DIR, { recursive: true })
  const dateStr = new Date().toISOString().slice(0, 10)
  const reportPath = path.join(REPORT_DIR, `ingest-report-${dateStr}.md`)
  const ok = results.filter((r) => r.status === "ok")
  const err = results.filter((r) => r.status !== "ok")
  const lines = [
    `# ingest-marker-batch report — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `**Config:** maxPapers=${opts.maxPapers}, priority=${opts.priority.join(",")}, model=${opts.model}.`,
    `**Processed:** ${ok.length} OK, ${err.length} errors/skipped.`,
    `**Today's cost (after this batch):** $${getCumulativeCost().toFixed(4)} of $${opts.costCeiling.toFixed(2)} ceiling.`,
    ``,
    `## Successfully ingested`,
    ``,
    ...ok.map((r) => `- ${r.meta.raw_handle} (${r.meta.priority}) → ${r.outFile}, $${r.costUsd.toFixed(4)}, ${(r.durationMs / 1000).toFixed(1)}s`),
    ``,
    `## Errors / skipped`,
    ``,
    ...err.map((r) => `- ${r.meta.raw_handle}: ${r.status} — ${r.reason}`),
  ]
  // Append to existing report if it exists today, else create.
  const isNew = !fs.existsSync(reportPath)
  fs.writeFileSync(reportPath, lines.join("\n") + "\n", { flag: isNew ? "w" : "a" })
  console.log(`[ingest-marker-batch] report: ${path.relative(REPO_ROOT, reportPath)}`)
}

main()
