#!/usr/bin/env node
// Autonomous mitigation-lever synthesis drainer for the daemon tick.
//
// Companion to tools/autonomy/lever-gaps.mjs (the detector + discovery-query
// emitter). This is the synthesis half: each tick it picks N product pages whose
// "Levers to reduce contamination" / "## Mitigation options" section still has
// gap placeholders, spawns claude --print, and the nested session reads the
// page's routed/contributing sources and fills each gapped lever's Magnitude +
// Source columns with a CITED quantified claim — or, where no source supports
// the lever, writes the honest no-data marker per the analyze-gaps.mjs canonical
// rule. It never fabricates a number (CLAUDE.md verify-don't-fabricate + the
// Part 18 provenance lint).
//
// Mirrors the structure and guardrails of drain-pending-synthesis.mjs.
//
// Bounded per-tick cap (default 2) because each spawn reads multiple sources.
// As levers get filled (or honestly marked no-data once the corpus is searched
// and comes up empty), the page drops out of the candidate set. New mitigation
// literature ingested via the lever-gaps discovery queries gives later ticks
// fresh evidence to fill previously-empty levers.
//
// Usage:
//   node tools/autonomy/drain-lever-gaps.mjs --max=2
//   node tools/autonomy/drain-lever-gaps.mjs --dry-run
//   node tools/autonomy/drain-lever-gaps.mjs --slug=infant-formula-powder-non-soy

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"
const CLAUDE_BIN = process.env.CLAUDE_BIN || "/opt/homebrew/bin/claude" // pinned: bare "claude" ENOENTs in bg shells + nightly auto-update window

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const maxPages = Number(args.get("max") ?? 2)
const slugOverride = args.get("slug") ?? null
const model = args.get("model") ?? "claude-opus-4-7"

const productsDir = path.join(repoRoot, "wiki/products")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date().toISOString().slice(0, 10)
const tickTimestamp = new Date().toISOString()
fs.mkdirSync(autonomyDir, { recursive: true })

console.log(`drain-lever-gaps: max=${maxPages}, model=${model}, dry-run=${dryRun}, slug=${slugOverride || "auto"}`)

// Gap markers — kept in sync with tools/autonomy/lever-gaps.mjs.
const GAP_PHRASES = [
  "Quantified magnitude data not yet ingested",
  "magnitude data not yet ingested from cited sources",
  "No quantified data on this lever",
  "will be expanded when relevant evidence is ingested",
]
const LEVER_HEADINGS = ["## Levers to reduce contamination", "## Mitigation options", "## Levers"]

// ---------- Find product pages with lever gaps ----------

const candidates = []
for (const file of fs.readdirSync(productsDir)) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const slug = file.replace(/\.md$/, "")
  if (slugOverride && slug !== slugOverride) continue
  const raw = fs.readFileSync(path.join(productsDir, file), "utf8")
  if (/^retired:\s*true/m.test(raw)) continue
  const section = extractLeverSection(raw)
  if (!section) continue
  let gapCount = 0
  for (const phrase of GAP_PHRASES) gapCount += section.split(phrase).length - 1
  gapCount = Math.max(gapCount, countDashSourceRows(section))
  if (gapCount === 0) continue
  candidates.push({ slug, file: path.relative(repoRoot, path.join(productsDir, file)), gapCount })
}

candidates.sort((a, b) => (b.gapCount - a.gapCount) || a.slug.localeCompare(b.slug))
const picked = candidates.slice(0, maxPages)

console.log(`\nLever-gap pages: ${candidates.length} total`)
if (candidates.length === 0) {
  console.log("Nothing to drain. Every product page's levers are filled or honestly marked no-data.")
  process.exit(0)
}
console.log(`Processing ${picked.length} page(s) this run:`)
for (const c of picked) console.log(`  - ${c.file} (${c.gapCount} gapped levers)`)

if (dryRun) {
  console.log("\nDRY RUN — not invoking claude.")
  process.exit(0)
}

// ---------- Per-page prompt ----------

function buildPrompt({ slug, file, gapCount }) {
  return `You are running one cycle of the Heavy Metal Index autonomous mitigation-lever synthesis drainer. The product-category page below has ${gapCount} gapped lever(s) in its "Levers to reduce contamination" (or "## Mitigation options") section — rows whose effect MAGNITUDE is an unfilled placeholder ("Quantified magnitude data not yet ingested..." / "No quantified data on this lever...") and whose Source column is an em dash. Your job: fill each gapped lever's Magnitude and Source from the page's contributing sources, or mark it honestly as no-data. This is brand-legal-actionable content, so provenance is absolute.

slug: ${slug}
page file: ${file}

Workflow:

1. Read the page in full: ${file}. Locate its lever table / mitigation section.
2. Identify the contributing sources:
   - Read data/evidence/product_source_routing_audit.csv; collect rows where product_slug == "${slug}" (any route_kind), capturing each source_page.
   - Also include sources the page body already cites via [[sources/...]] wikilinks.
3. For the top ~12 contributing source pages (highest sample size or most lever-relevant — mitigation, source-apportionment, soy-vs-non-soy comparison, premix/water/equipment/packaging studies), read their ## Summary and ## Key numbers sections.
4. For EACH gapped lever row, decide:
   a. If a contributing source reports a QUANTIFIED effect for that lever — a percent reduction, a fold or absolute difference between conditions, a contribution fraction, a migration rate, a measured concentration attributable to that input — then rewrite the Magnitude cell as a short factual clause stating that quantified effect, and set the Source cell to the wikilink [[sources/<cite-key>]] of the source that reports it. Use the source's own basis and numbers verbatim; do not convert or round beyond what the source states.
   b. If NO contributing source quantifies that lever, replace the placeholder Magnitude text with exactly: "No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested." and leave the Source cell as an em dash. This is the correct, honest outcome for a genuine gap — it is NOT a failure.
5. NEVER fabricate or estimate a magnitude. A number appears in the Magnitude cell ONLY if it is in the cited source and the Source cell links that source. This is the single hard rule.
6. Preserve everything else on the page exactly: frontmatter, the lever descriptions (the "Specific lever" column text), all other sections, and anything inside <!-- BEGIN: ... --> / <!-- END: ... --> marker blocks.
7. Run \`npm run evidence:source-routes\` (routing audit). Confirm it completes and "${slug}" is not newly malformed.
8. Commit (do NOT push — the daemon handles the push):

   synth-levers: ${slug} fill <K> lever(s) from cited sources, <J> marked no-data

   Contributing sources: <comma-separated cite-keys actually cited>

   Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>

Hard constraints (per CLAUDE.md):
- Do NOT fabricate magnitudes. Cited source or honest no-data marker — nothing else.
- Do NOT edit source pages (wiki/sources/*.md) or any other product page.
- Do NOT change frontmatter (hmtc_category, hmtc_row, primary_metals_of_concern, sources, contamination_profile).
- Do NOT alter the "Specific lever" descriptions; only the Magnitude and Source cells of gapped rows.
- This is mitigation content: neutral to the wiki/HMT&C firewall (Part 2). Do not soften or strengthen any occurrence claim.

Stop conditions (exit cleanly, commit nothing):
- ${file} does not exist, or has no lever section.
- No contributing sources resolve for "${slug}" (cannot fill or even confirm no-data with confidence — leave placeholders).
- Routing audit fails.

When done (filled+committed, all-no-data+committed, or stopped cleanly), print ONE final line:
  "DONE: ${slug} <K>filled <J>no-data" on success,
  "STOP: <reason>" on a stop condition,
  "FAIL: <reason>" on error.`
}

function invokeClaude(prompt) {
  const cliArgs = ["--print", "--model", model, "--add-dir", repoRoot]
  try {
    const res = spawnSync(CLAUDE_BIN, cliArgs, {
      cwd: repoRoot,
      input: prompt,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 25 * 60 * 1000,
    })
    if (res.error) return { error: res.error.message }
    if (res.status !== 0) return { error: `exit ${res.status}: ${(res.stderr || "").slice(0, 800)}` }
    const lastLine = (res.stdout || "").trim().split("\n").slice(-1)[0] || ""
    if (lastLine.startsWith("DONE:")) return { ok: true, summary: lastLine.slice(5).trim() }
    if (lastLine.startsWith("STOP:")) return { stop: true, reason: lastLine.slice(5).trim() }
    if (lastLine.startsWith("FAIL:")) return { error: lastLine.slice(5).trim() }
    return { error: `unrecognized final line: "${lastLine.slice(0, 200)}"` }
  } catch (err) {
    return { error: err.message }
  }
}

// ---------- Main loop ----------

const succeeded = []
const stopped = []
const failed = []

for (const candidate of picked) {
  console.log(`\n[${picked.indexOf(candidate) + 1}/${picked.length}] ${candidate.file}`)
  const result = invokeClaude(buildPrompt(candidate))
  if (result.ok) {
    succeeded.push({ ...candidate, summary: result.summary })
    console.log(`  OK: ${result.summary}`)
  } else if (result.stop) {
    stopped.push({ ...candidate, reason: result.reason })
    console.log(`  STOP: ${result.reason}`)
  } else {
    failed.push({ ...candidate, error: result.error })
    console.log(`  FAIL: ${result.error}`)
  }
}

writeReport(picked, succeeded, stopped, failed)
console.log(`\nBatch complete: ${succeeded.length} OK, ${stopped.length} stopped, ${failed.length} failed`)
process.exit(0)

// ---------- Helpers ----------

function extractLeverSection(raw) {
  for (const heading of LEVER_HEADINGS) {
    const idx = raw.indexOf(`\n${heading}`)
    if (idx === -1) continue
    const start = idx + 1
    const after = raw.indexOf("\n## ", start + heading.length)
    return raw.slice(start, after === -1 ? undefined : after)
  }
  return null
}

function countDashSourceRows(section) {
  let n = 0
  for (const line of section.split("\n")) {
    const t = line.trim()
    if (!t.startsWith("|")) continue
    const cells = t.split("|").map((c) => c.trim())
    const inner = cells.slice(1, -1)
    if (inner.length < 4) continue
    if (/^#$|^-+$|^category$/i.test(inner[0])) continue
    const last = inner[inner.length - 1]
    if (last === "—" || last === "-" || last === "") n += 1
  }
  return n
}

function writeReport(batch, succeeded, stopped, failed) {
  const reportPath = path.join(autonomyDir, `lever-gap-drain-${today}.md`)
  const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Lever-gap drain report — ${today}\n\n`
  const lines = [existing.trimEnd(), "", `## Run ${tickTimestamp}`, ""]
  lines.push(`- Candidates this run: ${batch.length}`)
  lines.push(`- Succeeded: ${succeeded.length}`)
  lines.push(`- Stopped: ${stopped.length}`)
  lines.push(`- Failed: ${failed.length}`)
  lines.push("")
  if (succeeded.length) {
    lines.push("### Succeeded")
    for (const s of succeeded) lines.push(`- \`${s.slug}\` — ${s.summary}`)
    lines.push("")
  }
  if (stopped.length) {
    lines.push("### Stopped")
    for (const s of stopped) lines.push(`- \`${s.slug}\`: ${s.reason}`)
    lines.push("")
  }
  if (failed.length) {
    lines.push("### Failed")
    for (const f of failed) lines.push(`- \`${f.slug}\`: ${f.error}`)
    lines.push("")
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
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
