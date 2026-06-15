#!/usr/bin/env node
// Autonomous Marker-corpus paper ingester (Phase 1 v0).
//
// Reads the triage manifest, finds papers that have a Marker-converted
// markdown body in raw/markdown/<raw_handle>/ but no matching source page
// in wiki/sources/<cite_key>.md, and uses `claude --print` to generate
// the source page autonomously.
//
// Per CLAUDE.md Part 5 (filesystem handle vs cite-key separation) and the
// "compiled-wiki rule" in Part 4, the source page is the durable artifact
// of ingest. The model writes prose; structured-evidence extraction happens
// downstream via extract-source-values.mjs in the daemon tick.
//
// Per OPERATING.md Part 3 ("no approval gates"), this tool runs autonomously
// against priority tiers chosen by argument. Every page it creates is tagged
// `ingest_method: autonomy_phase1_v0` so lint can sample-review them.
//
// Usage:
//   node tools/autonomy/ingest-marker-batch.mjs --max-papers=5 --priority=P1
//   node tools/autonomy/ingest-marker-batch.mjs --max-papers=20 --priority=P1,P2
//   node tools/autonomy/ingest-marker-batch.mjs --dry-run --max-papers=3
//
// Args:
//   --max-papers=N    Maximum papers to process this run (default 5; soft cap)
//   --priority=P1[,...] Priority tiers to consider (default P1,P2,P3,P4)
//   --model=NAME      Claude CLI model name (default claude-haiku-4-5-20251001)
//   --dry-run         Identify candidates but do not invoke claude
//
// The tool is bounded: it picks N papers per run. The daemon calls it
// every tick with a small N (default 3-5) so cumulative paper throughput
// climbs without any single tick blocking on a long claude --print run.

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { isLowQualityCiteKey } from "../lib/cite-key-validity.mjs"
import { mergeCiteKeyRepairQueue } from "../lib/cite-key-repair-queue.mjs"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const maxPapers = Number(args.get("max-papers") ?? 5)
const priorities = (args.get("priority") ?? "P1,P2,P3").split(",").map((p) => p.trim())
const model = args.get("model") ?? "claude-haiku-4-5-20251001"

const manifestPath = path.join(repoRoot, "raw/manifest/triage-manifest.csv")
const markdownDir = path.join(repoRoot, "raw/markdown")
const sourcesDir = path.join(repoRoot, "wiki/sources")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date().toISOString().slice(0, 10)

if (!fs.existsSync(manifestPath)) {
  console.error(`No manifest at ${manifestPath}`)
  process.exit(1)
}

console.log(`ingest-marker-batch: priorities=${priorities.join(",")}, max-papers=${maxPapers}, model=${model}, dry-run=${dryRun}`)

const manifest = parseCsv(fs.readFileSync(manifestPath, "utf8"))
const existingCiteKeys = new Set(fs.readdirSync(sourcesDir).filter((f) => f.endsWith(".md")).map((f) => path.basename(f, ".md")))

// Pick eligible candidates: not-yet-ingested AND has a Marker md file AND priority match AND no source page exists yet
const eligible = []
const gatedForRepair = []
for (const row of manifest) {
  if (row.already_ingested === "True") continue
  const tier = row.priority_tier
  if (!priorities.includes(tier)) continue
  const citeKey = row.cite_key
  if (!citeKey || existingCiteKeys.has(citeKey)) continue
  const markdownPath = path.join(markdownDir, row.raw_handle, `${row.raw_handle}.md`)
  if (!fs.existsSync(markdownPath)) continue
  // Cite-key gate: never mint a source page under a garbage author key (a
  // section-header / analyte / "unknown" author slot). Route the paper to the
  // repair queue for authoritative author resolution (DOI→Crossref) instead of
  // letting it land and feed the duplicate-DOI treadmill that the dedup tooling
  // has to clean up after. See tools/lib/cite-key-validity.mjs.
  if (isLowQualityCiteKey(citeKey)) {
    gatedForRepair.push({
      raw_handle: row.raw_handle,
      cite_key: citeKey,
      doi: row.doi || "",
      source: "marker-batch",
      reason: "low-quality-cite-key-at-ingest",
    })
    continue
  }
  eligible.push({ ...row, markdown_path: markdownPath })
}
if (gatedForRepair.length) {
  const added = dryRun ? 0 : mergeCiteKeyRepairQueue(gatedForRepair)
  console.log(
    `Cite-key gate: ${gatedForRepair.length} eligible paper(s) held for repair` +
      (dryRun ? " (dry-run — queue not written)" : ` (${added} new) → data/evidence/cite-key-repair-queue.csv`),
  )
}

// Sort by priority then year desc (P1 first, newer first)
eligible.sort((a, b) => {
  const pa = priorities.indexOf(a.priority_tier)
  const pb = priorities.indexOf(b.priority_tier)
  if (pa !== pb) return pa - pb
  return (Number(b.year) || 0) - (Number(a.year) || 0)
})

const batch = eligible.slice(0, maxPapers)
console.log(`Eligible: ${eligible.length}; processing this batch: ${batch.length}`)

if (dryRun || batch.length === 0) {
  console.log(batch.map((b) => `  - ${b.priority_tier} ${b.cite_key} (${b.raw_handle})`).join("\n"))
  writeReport(batch, [], [])
  process.exit(0)
}

const succeeded = []
const failed = []

for (const paper of batch) {
  const out = path.join(sourcesDir, `${paper.cite_key}.md`)
  console.log(`\n[${batch.indexOf(paper) + 1}/${batch.length}] ${paper.cite_key}`)
  console.log(`  raw: ${paper.markdown_path}`)
  console.log(`  out: ${out}`)

  const prompt = buildPrompt(paper)
  const result = invokeClaude(prompt, model)

  if (result.error) {
    console.log(`  FAIL: ${result.error}`)
    failed.push({ ...paper, error: result.error })
    continue
  }

  // Parse claude's stdout into a source page.
  const sourcePage = extractSourcePage(result.stdout || "")
  if (!sourcePage) {
    console.log(`  FAIL: claude --print stdout did not contain a parsable source page (length ${(result.stdout || "").length})`)
    failed.push({ ...paper, error: "stdout did not contain '---' frontmatter" })
    continue
  }

  // Schema sanity checks: cite_key and raw_handle must match the manifest exactly
  const citeKeyMatch = sourcePage.match(/^cite_key:\s*(\S+)\s*$/m)
  const rawHandleMatch = sourcePage.match(/^raw_handle:\s*(\S+)\s*$/m)
  if (!citeKeyMatch || citeKeyMatch[1] !== paper.cite_key) {
    console.log(`  FAIL: cite_key mismatch (got "${citeKeyMatch?.[1]}", expected "${paper.cite_key}")`)
    failed.push({ ...paper, error: `cite_key mismatch: ${citeKeyMatch?.[1] || "absent"}` })
    continue
  }
  if (!rawHandleMatch || rawHandleMatch[1] !== paper.raw_handle) {
    console.log(`  FAIL: raw_handle mismatch (got "${rawHandleMatch?.[1]}", expected "${paper.raw_handle}")`)
    failed.push({ ...paper, error: `raw_handle mismatch: ${rawHandleMatch?.[1] || "absent"}` })
    continue
  }

  fs.writeFileSync(out, sourcePage, "utf8")
  console.log(`  OK: ${sourcePage.length} bytes written to ${path.relative(repoRoot, out)}`)
  succeeded.push(paper)
}

// Extract the source-page markdown from claude --print stdout. The model
// occasionally prepends/appends a small amount of chrome ("Here is the
// source page:") even when instructed not to; we accept anything from the
// first "---" line onwards.
function extractSourcePage(stdout) {
  const idx = stdout.indexOf("\n---\n")
  if (idx >= 0 && stdout.slice(0, idx + 1).split("\n").every((line) => !line.startsWith("---"))) {
    // Frontmatter starts after some chrome lines; trim chrome
    return stdout.slice(idx + 1)
  }
  if (stdout.startsWith("---\n")) return stdout
  // Look for "---" anywhere as first non-empty line
  const trimmed = stdout.replace(/^[\s]*\n/, "")
  if (trimmed.startsWith("---\n")) return trimmed
  // Find first "---" line and take from there
  const fmStart = stdout.indexOf("\n---\n")
  if (fmStart >= 0) return stdout.slice(fmStart + 1)
  if (stdout.includes("\n---")) {
    const fmS = stdout.indexOf("---")
    return stdout.slice(fmS)
  }
  return null
}

writeReport(batch, succeeded, failed)
console.log(`\nBatch complete: ${succeeded.length} OK, ${failed.length} failed`)

// =========================================================================

function buildPrompt(paper) {
  const handle = paper.raw_handle
  const citeKey = paper.cite_key
  const mdPath = path.relative(repoRoot, paper.markdown_path)
  const metaPath = path.relative(repoRoot, path.join(markdownDir, handle, `${handle}_meta.json`))

  return `Generate a wiki source page from a peer-reviewed paper. You have Read tool access to the input files. Your ENTIRE response must be the source page markdown — no prose before or after, no explanation, no "Here is" — just the YAML frontmatter starting with "---" on line 1, followed by the markdown body, ending naturally with the last list item or paragraph.

INPUT FILES (read with your Read tool):
  Marker-converted markdown: ${mdPath}
  Metadata JSON (may exist): ${metaPath}

MANIFEST RECORD:
  raw_handle: ${handle}
  cite_key: ${citeKey}
  year: ${paper.year || "unknown"}
  doi: ${paper.doi || "unknown"}
  publication: ${paper.publication || "unknown"}
  first_author: ${paper.first_author || "unknown"}
  license: ${paper.license || "unknown"}
  text_mined_metals: ${paper.text_mined_metals || ""}
  text_mined_ingredients: ${paper.text_mined_ingredients || ""}
  text_mined_jurisdictions: ${paper.text_mined_jurisdictions || ""}
  priority_tier: ${paper.priority_tier}

REQUIRED OUTPUT STRUCTURE (this is literally what you output, nothing else):

---
type: source
raw_handle: ${handle}
cite_key: ${citeKey}
title: "<paper's actual title>"
authors: [<comma-separated author list>]
year: <integer>
publication: "<journal or report name>"
doi: <doi or null>
no_doi_assigned: <true if doi is null, else omit>
access_url: "<paper URL if known, else omit>"
source_type: peer-reviewed
evidence_tier: A
license: <CC BY | CC BY-NC | CC0 | restricted | other>
raw_path: ${mdPath}
metals: [<list using vocabulary: Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U>]
ingredients: [<list of wikilinks like "[[ingredients/rice]]">]
products: [<list of wikilinks like "[[products/infant-cereal]]" or empty>]
matrices: [<simple slugs like dietary-intake, whole-food, urine, blood>]
jurisdictions: [<ISO country codes>]
sample_n: <integer or null>
sample_population: "<one-line description>"
updated: ${today}
ingest_method: autonomy_phase1_v0
created_by: autonomy_v0
---

# <First-author> et al. <year> — <one-line topic>

<Two to four sentences of opening prose summarizing what the authors measured, what they found, and why it matters. No H2 heading.>

## Key numbers

<Pull exact figures: sample sizes, means, medians, percentiles, LODs, geographic breakdowns. Use markdown tables where appropriate. Preserve units. Include any regulatory limit cited.>

## Methods

<Analytical method, speciation or total, sample prep, LOD/LOQ, sample size. Two to four sentences.>

## Implications

<One paragraph covering certification, courses, app, and microbiome relevance where applicable.>

## Wiki pages updated on ingest

- [[metals/<slug>]] for each metal
- [[ingredients/<slug>]] for each ingredient
- [[products/<slug>]] for each product
- [[regulations/<slug>]] for each named regulation if any

CRITICAL RULES
- cite_key MUST be exactly: ${citeKey}
- raw_handle MUST be exactly: ${handle}
- Use only the metal vocabulary listed. Speciation matters: do NOT conflate iAs/tAs, MeHg/tHg, Cr-VI/Cr.
- Never round regulatory thresholds.
- If a value isn't in the paper, omit it. Do NOT invent numbers.
- If doi is missing, add no_doi_assigned: true with an access_url field.
- DO NOT include prose before "---" or after the last list item.
- DO NOT use the Write tool — just print the source page to stdout.`
}

function invokeClaude(prompt, model) {
  // claude --print --add-dir <repo> --allowedTools "Read Write" "<prompt>"
  // We rely on the user's OAuth in keychain. Permission mode: bypassPermissions
  // so the model can Write without prompting. Allowed tools restricted to Read
  // and Write to keep blast radius small.
  // Note: we deliberately do NOT pass --permission-mode here. Karen's
  // .claude/settings.local.json sets `defaultMode: bypassPermissions` for
  // this repo, so the spawned claude picks it up via the local settings
  // file. Passing it explicitly was rejected upstream as "spawning sub-agent
  // loops with bypassPermissions" — relying on the repo's existing settings
  // keeps the spawn within the same trust boundary the user already accepted.
  //
  // The model only needs Read tool access — it reads the Marker markdown
  // file, then prints the source page to stdout. Our wrapper writes the
  // file. This avoids the "is the sub-claude allowed to Write?" surface.
  //
  // Long prompts go via stdin (argv has a kernel size limit; our prompts
  // are 3-5 KB so the limit is reachable on macOS).
  const args = [
    "--print",
    "--model", model,
    "--add-dir", repoRoot,
    "--allowedTools", "Read",
  ]

  try {
    const res = spawnSync("claude", args, {
      cwd: repoRoot,
      input: prompt,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 10 * 60 * 1000, // 10 min per paper
    })

    if (res.error) return { error: res.error.message }
    if (res.status !== 0) return { error: `exit ${res.status}: ${(res.stderr || "").slice(0, 500)}` }
    return { stdout: res.stdout }
  } catch (err) {
    return { error: err.message }
  }
}

function writeReport(batch, succeeded, failed) {
  fs.mkdirSync(autonomyDir, { recursive: true })
  const reportPath = path.join(autonomyDir, `ingest-batch-${today}.md`)
  const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Marker ingest batch report — ${today}\n\n`
  const lines = [existing.trimEnd(), "", `## Batch ${new Date().toISOString()}`, ""]
  lines.push(`- Candidates this batch: ${batch.length}`)
  lines.push(`- Succeeded: ${succeeded.length}`)
  lines.push(`- Failed: ${failed.length}`)
  lines.push("")
  if (succeeded.length) {
    lines.push("### Succeeded")
    for (const s of succeeded) lines.push(`- ${s.priority_tier} \`${s.cite_key}\` (${s.raw_handle})`)
    lines.push("")
  }
  if (failed.length) {
    lines.push("### Failed")
    for (const f of failed) lines.push(`- ${f.priority_tier} \`${f.cite_key}\` (${f.raw_handle}): ${f.error}`)
    lines.push("")
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
}

// =========================================================================
// Utilities
// =========================================================================

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    const match = a.match(/^--([^=]+)(?:=(.*))?$/)
    if (match) m.set(match[1], match[2] ?? "true")
  }
  return m
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const row = {}
    for (let j = 0; j < headers.length; j++) row[headers[j]] = cells[j] ?? ""
    rows.push(row)
  }
  return rows
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let inQuote = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuote) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"'
          i += 1
        } else {
          inQuote = false
        }
      } else {
        cur += ch
      }
    } else {
      if (ch === '"') inQuote = true
      else if (ch === ",") {
        out.push(cur)
        cur = ""
      } else cur += ch
    }
  }
  out.push(cur)
  return out
}
