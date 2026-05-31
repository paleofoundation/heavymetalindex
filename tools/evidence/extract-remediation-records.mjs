#!/usr/bin/env node
// extract-remediation-records.mjs
// ---------------------------------------------------------------------------
// Captures the REMEDIATION / DRIVER surface from source pages so it is never
// squandered. The corpus is full of papers that report what RAISES or LOWERS
// heavy-metal contamination in food crops (soil pH, paddy water management,
// soil amendments, microbial inoculation, cultivar choice, fertilizer inputs,
// regional low-load anomalies). Occurrence extraction throws all of that away.
// This tool reads each remediation-relevant source page, asks an Opus pass to
// extract graded driver/intervention/regional records conforming to
// data/evidence/schemas/remediation-record.schema.json, and appends them to
// data/evidence/remediation_register.jsonl.
//
// Serves HMTc Governing Principle 1 (drive down contamination through
// reformulation and sourcing improvement). The wiki holds the EVIDENCE,
// graded A/B/C with confounders and what-would-confirm; HMTc/courses turn it
// into recommendations. Soil concentration is never substituted for food
// concentration — a soil-driver record describes the driver, not a food number.
//
// Usage:
//   node tools/evidence/extract-remediation-records.mjs --max 5
//   node tools/evidence/extract-remediation-records.mjs --cite-key cao2023-lead-pakchoi-eps-bacteria
//   node tools/evidence/extract-remediation-records.mjs --dry-run
//   node tools/evidence/extract-remediation-records.mjs --list   (just show candidates)

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const listOnly = args.has("list")
const maxPapers = Number(args.get("max") ?? 5)
const onlyCiteKey = args.get("cite-key") ?? null
const model = args.get("model") ?? "claude-opus-4-7"

const sourcesDir = path.join(repoRoot, "wiki/sources")
const registerPath = path.join(repoRoot, "data/evidence/remediation_register.jsonl")
const schemaPath = path.join(repoRoot, "data/evidence/schemas/remediation-record.schema.json")

// Signal terms that mark a source as likely to carry driver/intervention intel.
const SIGNAL = /\b(remediat|mitigat|reduc(e|tion|ing)|amendment|biochar|liming|lime |wollastonite|phosphate|fertiliz|fertili[sz]ation|water management|wetting|drying|\bAWD\b|cultivar|genotype|microbiom|bacteri|inocul|rhizosard|silicon|foliar|uptake|translocation|transfer factor|bioavailab|bioaccessib|soil pH|redox|flooding|paddy|washing|soaking|cooking|processing|sourcing|seasonal|geolog|tailings|mining|irrigation)\b/i

const schema = fs.readFileSync(schemaPath, "utf8")

// ---- already-extracted cite_keys (dedup) ----------------------------------
const extracted = new Set()
let registerCount = 0
if (fs.existsSync(registerPath)) {
  for (const line of fs.readFileSync(registerPath, "utf8").split("\n").filter(Boolean)) {
    try { const r = JSON.parse(line); if (r.cite_key) extracted.add(r.cite_key); registerCount++ } catch {}
  }
}
console.log(`Register: ${registerCount} record(s) across ${extracted.size} source(s) already captured.`)

// ---- pick candidate source pages ------------------------------------------
const candidates = []
for (const file of fs.readdirSync(sourcesDir)) {
  if (!file.endsWith(".md")) continue
  const citeKey = file.replace(/\.md$/, "")
  if (onlyCiteKey && citeKey !== onlyCiteKey) continue
  if (!onlyCiteKey && extracted.has(citeKey)) continue
  const full = path.join(sourcesDir, file)
  const content = fs.readFileSync(full, "utf8")
  if (!onlyCiteKey && !SIGNAL.test(content)) continue
  candidates.push({ citeKey, file: `wiki/sources/${file}`, content })
}

console.log(`Remediation-relevant source pages not yet captured: ${candidates.length}`)
const picked = candidates.slice(0, maxPapers)

if (listOnly) {
  for (const c of candidates.slice(0, 40)) console.log(`  - ${c.citeKey}`)
  process.exit(0)
}
if (picked.length === 0) { console.log("Nothing to extract this run."); process.exit(0) }

console.log(`\nExtracting from ${picked.length} source(s) this run:`)
for (const c of picked) console.log(`  - ${c.citeKey}`)
if (dryRun) { console.log("\nDRY RUN — not spawning extractor."); process.exit(0) }

// ---- extract per paper -----------------------------------------------------
let totalRecords = 0
const today = new Date().toISOString().slice(0, 10)
for (const c of picked) {
  console.log(`\n[${picked.indexOf(c) + 1}/${picked.length}] ${c.citeKey}`)
  const prompt = buildPrompt(c, schema)
  const res = spawnSync("claude", ["--print", "--model", model, "--add-dir", repoRoot], {
    cwd: repoRoot, input: prompt, encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024, timeout: 6 * 60 * 1000,
  })
  if (res.error) { console.log(`  FAIL: ${res.error.message}`); continue }
  if (res.status !== 0) { console.log(`  FAIL: exit ${res.status}`); continue }
  const records = parseRecords(res.stdout)
  if (records === null) { console.log(`  FAIL: could not parse JSON array from output`); continue }
  const valid = []
  records.forEach((r, i) => {
    const v = coerceAndValidate(r, c, i)
    if (v.ok) valid.push(v.record)
    else console.log(`  drop record ${i}: ${v.reason}`)
  })
  if (valid.length === 0) { console.log(`  0 records (no remediation/driver intel in this source)`); continue }
  fs.appendFileSync(registerPath, valid.map((r) => JSON.stringify(r)).join("\n") + "\n", "utf8")
  totalRecords += valid.length
  console.log(`  +${valid.length} record(s): ${valid.map((r) => `${r.record_type}/${r.metal}`).join(", ")}`)
}

console.log(`\nDone. Appended ${totalRecords} record(s) to ${path.relative(repoRoot, registerPath)}.`)

// ===========================================================================
function buildPrompt(c, schema) {
  return `You are extracting REMEDIATION and DRIVER intelligence from one source page in the Heavy Metal Index. The goal is to capture, in structured form, everything this source says about WHAT RAISES OR LOWERS heavy-metal contamination in food crops anywhere across the supply chain (soil, irrigation water, fertilizer/input, cultivation, harvest, processing, storage). This serves the program's first governing principle: drive down contamination through reformulation and sourcing improvement.

Read the source page below and output a JSON array of records. Each record must conform to this JSON Schema:

${schema}

RULES:
- Output ONLY the JSON array. No prose, no markdown fences. If the source contains no driver/intervention/regional-load intelligence, output exactly: []
- record_type: "driver" (a factor that raises/lowers contamination, e.g. soil pH, paddy redox, phosphate fertilizer, root microbiome, cultivar), "intervention" (a deliberate practice that changes it, e.g. alternate wetting and drying, liming, an amendment, microbial inoculation, a wash step, cultivar selection), or "regional_observation" (a place/time with notably high or low loads and the putative reason).
- GRADE CONSERVATIVELY. evidence_tier A = replicated field trials, systematic reviews, or official codes of practice (Codex/EFSA). B = a single field study or a strong controlled pot study. C = an observational correlation, a single mechanism/pot study, or an emergent lead.
- For every B and C record, fill "confounders". For every C record, fill "what_would_confirm" with the specific controlled comparison that would promote the lead. This is how a lead stays intel instead of being discarded.
- Fill "transferability" whenever the finding could plausibly carry to other crops, metals, or regions.
- "effect_magnitude": include the quantified effect if the source reports one; null if only directional.
- SOIL IS NOT FOOD. If the finding is about soil/water, describe the driver or transfer behaviour. Never emit a soil concentration as if it were a food concentration.
- "quote": a short supporting quote or close paraphrase from the source, for provenance.
- metal must be one of the HMTc analytes (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr-VI, Sn) or Cr/U if that is what the source measures.

SOURCE PAGE (${c.citeKey}):
---
${c.content.slice(0, 24000)}
---

Output the JSON array now:`
}

function parseRecords(stdout) {
  const s = stdout.indexOf("[")
  const e = stdout.lastIndexOf("]")
  if (s < 0 || e < 0 || e < s) return null
  try { const arr = JSON.parse(stdout.slice(s, e + 1)); return Array.isArray(arr) ? arr : null }
  catch { return null }
}

function coerceAndValidate(r, c, i) {
  if (typeof r !== "object" || r === null) return { ok: false, reason: "not an object" }
  const rt = r.record_type
  if (!["driver", "intervention", "regional_observation"].includes(rt)) return { ok: false, reason: `bad record_type ${rt}` }
  if (!r.metal || typeof r.metal !== "string") return { ok: false, reason: "missing metal" }
  if (!["A", "B", "C"].includes(r.evidence_tier)) return { ok: false, reason: `bad evidence_tier ${r.evidence_tier}` }
  if (!r.summary || !r.quote) return { ok: false, reason: "missing summary/quote" }
  // C-tier discipline: must say what would confirm it.
  if (r.evidence_tier === "C" && !r.what_would_confirm) r.what_would_confirm = "Not stated by source; a controlled comparison against an untreated baseline would be required to promote this lead."
  if ((r.evidence_tier === "B" || r.evidence_tier === "C") && !r.confounders) r.confounders = "Not stated by source."
  r.record_id = `${c.citeKey}#${i}`
  r.cite_key = c.citeKey
  r.source_page = c.file
  r.extracted_at = today
  return { ok: true, record: r }
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq > 0) m.set(a.slice(2, eq), a.slice(eq + 1))
      else m.set(a.slice(2), "true")
    }
  }
  return Object.assign(m, { has: (k) => m.get(k) === "true" })
}
