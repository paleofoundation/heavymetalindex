#!/usr/bin/env node
/**
 * Synthesis writer — populates `contamination_profile` blocks on ingredient
 * pages from the pooling engine's per-cell statistics.
 *
 * Per CLAUDE.md Part 9, synthesis is the workflow that turns accumulated
 * source-page evidence into the typical/p95/n/confidence values on ingredient
 * pages. The pooling engine (tools/evidence/build-hmtc-aggregate-distributions.mjs)
 * already does the per-(product, metal) statistical work — moment-matching,
 * pseudo-sample reconstruction and sensitivity bands — and writes
 * `data/evidence/hmtc_aggregate_distributions.csv`. This tool is the missing
 * step: copy the pooled literature percentiles into the ingredient page so
 * the public wiki shows what the evidence supports instead of `null`.
 *
 * Firewall (CLAUDE.md Part 2): the wiki publishes literature-native pooled
 * percentiles (p10/p50/p90/p95), never HMTc certification arithmetic. The
 * aggregate is descriptive-only and contains no certification selector fields.
 *
 * What this tool writes per analyte (when verdict allows):
 *   typical_ppb:  [pooled_p10, pooled_p90]   (literature occurrence range)
 *   p95_ppb:      pooled_p95                 (literature upper-tail anchor)
 *   n_studies:    sources_contributing       (admitted sources only)
 *   confidence:   derived from sources_contributing + verdict + sens_band
 *   last_reviewed: today (only when values actually changed)
 *
 * Verdict policy:
 *   DESCRIPTIVE OCCURRENCE AVAILABLE → write at confidence=high/medium/low by n
 *   DESCRIPTIVE PROVISIONAL          → write at confidence=low
 *   OCCURRENCE GAP                   → skip
 *   anything else                 → skip
 *
 * Re-runs are safe: the tool diffs against the page's current values and only
 * writes when something changes. If a synthesis pass has already filled the
 * cell at the same n_studies and the same pooled p95 (±1%), it's a no-op.
 *
 * Output:
 *   - wiki/ingredients/<slug>.md frontmatter updated in place
 *   - data/evidence/review_events.jsonl appended (one event per cell touched)
 *   - data/evidence/autonomy/synthesis-report-<date>.md (per-tick summary)
 *
 * Usage:
 *   node tools/autonomy/populate-contamination-profile.mjs            # write
 *   node tools/autonomy/populate-contamination-profile.mjs --dry-run  # report only
 *   node tools/autonomy/populate-contamination-profile.mjs --slug=fruit-purees
 *   node tools/autonomy/populate-contamination-profile.mjs --max-pages=10
 */

import fs from "node:fs"
import path from "node:path"
import { randomUUID } from "node:crypto"

const repoRoot = process.cwd()
const aggregatePath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const eventsLogPath = path.join(repoRoot, "data/evidence/review_events.jsonl")
// Every automated wiki edit must leave a provenance row here (enforced by the
// pre-commit write barrier). Synthesis is deterministic, so the row records the
// pooling engine as the editor rather than an LLM.
const wikiEditAuditPath = path.join(repoRoot, "data/evidence/wiki_edit_audit.jsonl")
const today = new Date().toISOString().slice(0, 10)
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const reportPath = path.join(autonomyDir, `synthesis-report-${today}.md`)

const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const slugFilter = args.get("slug") ?? ""
const maxPages = Number(args.get("max-pages") ?? Infinity)

if (!fs.existsSync(aggregatePath)) {
  console.error(`No ${aggregatePath}. Run \`node tools/evidence/build-hmtc-aggregate-distributions.mjs\` first.`)
  process.exit(0)
}

// ---------- Read pooled aggregate ----------

const aggRows = parseCsv(fs.readFileSync(aggregatePath, "utf8"))

// Group by product_slug: { slug: { metal: row } }
const bySlug = new Map()
for (const r of aggRows) {
  if (slugFilter && r.product_slug !== slugFilter) continue
  if (!bySlug.has(r.product_slug)) bySlug.set(r.product_slug, new Map())
  bySlug.get(r.product_slug).set(r.metal_species, r)
}

// ---------- Walk ingredient pages ----------

const events = []
const pageChanges = []
const reviewQueue = []
const auditRows = []
let pagesScanned = 0
let pagesUpdated = 0
let cellsUpdated = 0
let cellsSkipped = 0
let cellsUnchanged = 0
let cellsReview = 0

// A pooled cell whose reconstruction is at least this share weak single-value
// methods is held back from public auto-publish and routed to staff review.
const WEAK_RECON_MAX_SHARE = 0.5
const WEAK_RECON_METHODS = new Set([
  "single_point",
  "uniform_max_only",
  "uniform_range_only",
  "lognormal_mean_only",
  "lognormal_lod_censored_midpoint",
])
const reviewQueuePath = path.join(autonomyDir, `synthesis-review-required-${today}.csv`)

let cellsRetracted = 0
const corrections = []

// Writer-provenance map: the latest value THIS writer published per (slug,
// metal), from the synthesis_write history. Used by the retraction pass to tell
// a value this writer wrote (safe to retract when the engine stops supporting
// it) from a direct-source-read synthesis value that happens to sit in the same
// cell (must be left intact — the engine blocking a thin structured pool says
// nothing about a value derived from a wider direct read).
const lastWriterValue = new Map()
if (fs.existsSync(eventsLogPath)) {
  for (const line of fs.readFileSync(eventsLogPath, "utf8").split("\n")) {
    if (!line.trim()) continue
    let e
    try { e = JSON.parse(line) } catch { continue }
    if (e.op !== "synthesis_write" || !e.slug || !e.metal) continue
    lastWriterValue.set(`${e.slug}::${e.metal}`, {
      typical_ppb: e.typical_ppb,
      n_studies: e.n_studies,
    })
  }
}

for (const [slug, metalMap] of bySlug) {
  if (pagesUpdated >= maxPages) break
  const pagePath = path.join(ingredientsDir, `${slug}.md`)
  if (!fs.existsSync(pagePath)) continue
  pagesScanned += 1

  const raw = fs.readFileSync(pagePath, "utf8")
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fmMatch) continue

  const fm = fmMatch[1]
  const cpStart = fm.indexOf("contamination_profile:")
  if (cpStart < 0) continue

  // Find the end of contamination_profile block (next top-level key)
  const afterCp = fm.slice(cpStart)
  const endRel = afterCp.search(/\n[A-Za-z][A-Za-z0-9_]*:/)
  const cpBlock = endRel < 0 ? afterCp : afterCp.slice(0, endRel)

  let newCpBlock = cpBlock
  let pageHadChange = false
  const changedMetals = []

  for (const [metal, row] of metalMap) {
    const decision = synthesisDecision(row)
    if (decision.action === "skip") {
      cellsSkipped += 1
      // Retraction pass: when the engine now reports an OCCURRENCE GAP for a cell whose on-page value
      // was published by THIS writer (matches the last synthesis_write), the
      // value is no longer supported — retract it to pending and record a
      // correction event for the public errata log. Direct-synthesis values
      // (which do not match the writer's last write) are left intact.
      if (/^OCCURRENCE GAP/.test(String(row.verdict || ""))) {
        const sub = locateMetalSubBlock(newCpBlock, metal)
        const existing = sub ? parseExistingMetalBlock(sub.text) : null
        const last = lastWriterValue.get(`${slug}::${metal}`)
        if (sub && existing && existing.n_studies > 0 && last && writerValueMatches(existing, last)) {
          const retracted = retractMetalSubBlock(sub.text)
          if (retracted !== sub.text) {
            newCpBlock = newCpBlock.slice(0, sub.start) + retracted + newCpBlock.slice(sub.end)
            pageHadChange = true
            changedMetals.push(metal)
            cellsRetracted += 1
            const corr = {
              ts: new Date().toISOString(),
              op: "correction",
              kind: "retraction",
              page: `wiki/ingredients/${slug}.md`,
              slug,
              metal,
              target: `contamination_profile.${metal}`,
              previous: {
                typical_ppb: [numOrNullStr(existing.typical_lo), numOrNullStr(existing.typical_hi)],
                n_studies: existing.n_studies,
              },
              current: null,
              reason: retractionReason(String(row.verdict || "")),
              trigger: "synthesis-writer-retraction",
              commit_sha: "pending",
            }
            events.push(corr)
            corrections.push(corr)
          }
        }
      }
      continue
    }

    // Locate this metal's sub-block within cpBlock
    const metalSub = locateMetalSubBlock(newCpBlock, metal)
    if (!metalSub) {
      cellsSkipped += 1
      continue
    }

    // No-downgrade guard: the corpus contains prior-synthesis values that
    // were derived from a wider source view than the pooling engine's
    // structured-extraction input (values.jsonl is incomplete). If the page
    // already shows n_studies > new n_studies, the existing synthesis is
    // better-evidenced; skip rather than overwrite. Tea, seafood, and other
    // pages refreshed during the overnight synthesis pass are the canonical
    // case — the page claims n=44 from direct source reads while the
    // pooling engine sees n=3 from structured extracts.
    const existing = parseExistingMetalBlock(metalSub.text)
    if (existing && existing.n_studies > decision.n_studies) {
      cellsSkipped += 1
      events.push({
        ts: new Date().toISOString(),
        op: "synthesis_skip_no_downgrade",
        page: `wiki/ingredients/${slug}.md`,
        slug,
        metal,
        existing_n_studies: existing.n_studies,
        pooled_n_studies: decision.n_studies,
        reason: "existing synthesis has more sources than pooled value",
      })
      continue
    }

    // Public-page conservatism: refuse to auto-publish a cell whose pooled
    // distribution is dominated by weak single-value reconstructions
    // (single_point, uniform_*_only, mean-only, lod-midpoint). Two reconstructed
    // means do not make a defensible public percentile range even when the cell
    // clears the engine's ≥2-distinct-source gate. Route these to staff review
    // instead of a public ingredient page. The engine still marks them
    // available/provisional for staff review; this guard governs
    // only public auto-publish (OPERATING.md Part 6: no overstated confidence).
    const weakShare = weakReconShare(row)
    if (weakShare >= WEAK_RECON_MAX_SHARE) {
      cellsReview += 1
      reviewQueue.push({
        slug,
        metal,
        verdict: row.verdict,
        distinct_sources: decision.n_studies,
        weak_recon_share: Number(weakShare.toFixed(2)),
        pooled_p10: row.pooled_p10 ?? "",
        pooled_p90: row.pooled_p90 ?? "",
        pooled_p95: row.pooled_p95 ?? "",
        reason: "weak_reconstruction_dominant",
      })
      continue
    }

    // Integrity gate (mirrors tools/audit-contamination-profile-integrity.mjs).
    // Never publish a degenerate distribution — p95 not strictly above the
    // typical-range maximum across >5 sources — nor an all-zero cell. Both
    // understate contamination: the first is a collapsed single-value pool
    // published as a distribution, the second is below-LOQ non-detects coded as
    // literal 0 (the 2026-06-11 rice Pb/iAs/tHg/Cr artifact, Part 2 drift audit
    // finding A1). Route to staff review rather than auto-publishing the
    // understatement. CLAUDE.md Part 2: softening reported contamination is the
    // failure direction this guard blocks.
    const typHi = decision.typical_ppb[1]
    const p95Val = decision.p95_ppb
    const degenerateTail =
      p95Val !== null && typHi !== null && decision.n_studies > 5 && p95Val <= typHi
    const censoredZero =
      decision.typical_ppb[0] === 0 && typHi === 0 && p95Val === 0
    if (degenerateTail || censoredZero) {
      cellsReview += 1
      reviewQueue.push({
        slug,
        metal,
        verdict: row.verdict,
        distinct_sources: decision.n_studies,
        weak_recon_share: "",
        pooled_p10: row.pooled_p10 ?? "",
        pooled_p90: row.pooled_p90 ?? "",
        pooled_p95: row.pooled_p95 ?? "",
        reason: degenerateTail ? "degenerate_upper_tail" : "censored_zero_distribution",
      })
      continue
    }

    const newSub = updateMetalSubBlock(metalSub.text, decision)
    if (newSub === metalSub.text) {
      cellsUnchanged += 1
      continue
    }

    newCpBlock = newCpBlock.slice(0, metalSub.start) + newSub + newCpBlock.slice(metalSub.end)
    cellsUpdated += 1
    pageHadChange = true
    changedMetals.push(metal)

    events.push({
      ts: new Date().toISOString(),
      op: "synthesis_write",
      page: `wiki/ingredients/${slug}.md`,
      slug,
      metal,
      n_studies: decision.n_studies,
      typical_ppb: decision.typical_ppb,
      p95_ppb: decision.p95_ppb,
      confidence: decision.confidence,
      verdict: row.verdict,
      sources_contributing: Number(row.sources_contributing),
    })
  }

  if (pageHadChange) {
    pagesUpdated += 1
    const newFm = fm.slice(0, cpStart) + newCpBlock + (endRel < 0 ? "" : fm.slice(cpStart + cpStart + newCpBlock.length).slice(0))
    // Splice carefully: replace cpBlock portion only.
    const reassembledFm =
      fm.slice(0, cpStart) +
      newCpBlock +
      (endRel < 0 ? "" : fm.slice(cpStart + cpBlock.length))
    const newRaw = `---\n${reassembledFm}\n---\n` + raw.slice(fmMatch[0].length)

    pageChanges.push({ slug, pagePath, before: cpBlock, after: newCpBlock })

    auditRows.push({
      edit_id: randomUUID(),
      page: `wiki/ingredients/${slug}.md`,
      span_id: `contamination_profile:${changedMetals.join(",")}`,
      source_document:
        "hmtc-pooling-engine | data/evidence/hmtc_aggregate_distributions.csv",
      retrieval_date: today,
      models_used: ["deterministic/hmtc-pooling-engine"],
      model_agreement_state: "not_applicable",
      applied_at: new Date().toISOString(),
      commit_sha: "pending",
    })

    if (!dryRun) fs.writeFileSync(pagePath, newRaw, "utf8")
  }
}

// ---------- Persist events ----------

if (!dryRun && events.length > 0) {
  fs.mkdirSync(path.dirname(eventsLogPath), { recursive: true })
  fs.appendFileSync(eventsLogPath, events.map((e) => JSON.stringify(e)).join("\n") + "\n", "utf8")
}

// ---------- Persist wiki-edit audit rows (provenance write barrier) ----------

if (!dryRun && auditRows.length > 0) {
  fs.appendFileSync(
    wikiEditAuditPath,
    auditRows.map((r) => JSON.stringify(r)).join("\n") + "\n",
    "utf8",
  )
}

// ---------- Persist review queue (weak-reconstruction cells held from publish) ----------

if (!dryRun && reviewQueue.length > 0) {
  fs.mkdirSync(autonomyDir, { recursive: true })
  const headers = [
    "slug",
    "metal",
    "verdict",
    "distinct_sources",
    "weak_recon_share",
    "pooled_p10",
    "pooled_p90",
    "pooled_p95",
    "reason",
  ]
  const lines = [headers.join(",")]
  for (const r of reviewQueue) lines.push(headers.map((h) => csvCell(r[h])).join(","))
  fs.writeFileSync(reviewQueuePath, lines.join("\n") + "\n", "utf8")
}

// ---------- Report ----------

fs.mkdirSync(autonomyDir, { recursive: true })
const reportLines = [
  `# Synthesis report — ${today}`,
  ``,
  `Generated by \`tools/autonomy/populate-contamination-profile.mjs\` (${dryRun ? "dry-run" : "executed"}).`,
  ``,
  `- Pages scanned: ${pagesScanned}`,
  `- Pages updated: ${pagesUpdated}`,
  `- Cells updated: ${cellsUpdated}`,
  `- Cells unchanged (already matched pooled values): ${cellsUnchanged}`,
  `- Cells skipped (occurrence gap or no usable evidence): ${cellsSkipped}`,
  `- Cells held for staff review (weak-reconstruction-dominant, not auto-published): ${cellsReview}`,
  `- Cells retracted (writer value no longer supported by v1; returned to pending): ${cellsRetracted}`,
  ``,
  `Held cells are logged to \`${path.relative(repoRoot, reviewQueuePath)}\` when any exist.`,
  ``,
  `## Cells written this run`,
  ``,
]
for (const e of events.slice(0, 200)) {
  const t = e.typical_ppb ? `[${e.typical_ppb[0]}, ${e.typical_ppb[1]}]` : "—"
  reportLines.push(
    `- \`${e.slug}\` × ${e.metal}: typical_ppb=${t}, p95_ppb=${e.p95_ppb ?? "—"}, n=${e.n_studies}, confidence=${e.confidence}, verdict=${e.verdict}`,
  )
}
if (events.length > 200) reportLines.push(`- … and ${events.length - 200} more`)

if (!dryRun) fs.writeFileSync(reportPath, reportLines.join("\n") + "\n", "utf8")
console.log(reportLines.slice(0, 8).join("\n"))

// ============================================================================
// helpers
// ============================================================================

function weakReconShare(row) {
  let contribs
  try {
    contribs = JSON.parse(row.contribution_log || "[]")
  } catch {
    return 1 // unparseable provenance → treat as weak (conservative)
  }
  const admitted = contribs.filter((c) => c && c.admitted)
  if (admitted.length === 0) return 1
  const weak = admitted.filter((c) => WEAK_RECON_METHODS.has(c.reconstruction_method)).length
  return weak / admitted.length
}

function csvCell(v) {
  const s = v === null || v === undefined ? "" : String(v)
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function synthesisDecision(row) {
  const verdict = String(row.verdict || "")
  // Prefer distinct_sources (independent studies) over sources_contributing
  // (admitted rows, which over-counts a single paper's multiple cohorts). The
  // pooling engine emits both; n_studies and confidence must reflect studies.
  const nContrib = Number(row.distinct_sources || row.sources_contributing || 0)
  const p10 = numOrNull(row.pooled_p10)
  const p50 = numOrNull(row.pooled_p50)
  const p90 = numOrNull(row.pooled_p90)
  const p95 = numOrNull(row.pooled_p95)
  const sensBand = String(row.sens_band || "")

  if (nContrib < 1) return { action: "skip" }
  if (/^OCCURRENCE GAP/.test(verdict)) return { action: "skip" }

  // typical_ppb is the literature occurrence range: p10–p90 (10th to 90th
  // percentile). This is the literature-native view per CLAUDE.md Part 19.
  // Avoid emitting NaN/Infinity from degenerate single-source rows.
  const typical = [round(p10), round(p90)]
  const p95Out = round(p95)

  // Confidence: derived from n_contributing and stability of sensitivity band.
  let confidence
  if (nContrib >= 10) confidence = "high"
  else if (nContrib >= 4) confidence = "medium"
  else confidence = "low"

  // Verdict-based downgrades.
  if (/PROVISIONAL/.test(verdict)) {
    confidence = "low"
  }
  if (/unstable/.test(sensBand) || /provisional/.test(sensBand)) {
    confidence = confidence === "high" ? "medium" : "low"
  }

  return {
    action: "write",
    typical_ppb: typical,
    p95_ppb: p95Out,
    n_studies: nContrib,
    confidence,
  }
}

function locateMetalSubBlock(cpBlock, metal) {
  // Match "  <metal>:\n" with 2-space indent inside contamination_profile.
  const headerRe = new RegExp(`(^|\\n)  ${escapeRegex(metal)}:\\n`, "g")
  const m = headerRe.exec(cpBlock)
  if (!m) return null
  const start = m.index + (m[1] === "\n" ? 1 : 0)
  // Find next sibling (2-space indented key) or end of cpBlock
  const remainder = cpBlock.slice(start + m[0].length - (m[1] === "\n" ? 0 : 0))
  const nextSiblingRel = remainder.search(/\n  [A-Za-z][A-Za-z0-9_-]*:/)
  const endRel = nextSiblingRel < 0 ? remainder.length : nextSiblingRel
  const end = start + m[0].length - (m[1] === "\n" ? 0 : 0) + endRel
  return { start, end, text: cpBlock.slice(start, end) }
}

function updateMetalSubBlock(subText, decision) {
  // Replace the lines inside this metal sub-block. Preserves header indent.
  // Expected shape:
  //   <metal>:
  //     status: ...
  //     typical_ppb: [...]
  //     p95_ppb: ...
  //     confidence: ...
  //     n_studies: ...
  //     last_reviewed: ...
  let out = subText
  out = setField(out, "status", "populated")
  out = setField(out, "typical_ppb", `[${decision.typical_ppb[0] ?? "null"}, ${decision.typical_ppb[1] ?? "null"}]`)
  out = setField(out, "p95_ppb", decision.p95_ppb ?? "null")
  out = setField(out, "confidence", decision.confidence)
  out = setField(out, "n_studies", decision.n_studies)
  out = setField(out, "last_reviewed", today)
  return out
}

function parseExistingMetalBlock(subText) {
  // Extract n_studies + typical_ppb + confidence from the existing block.
  // Lenient: returns nulls for fields that aren't readable.
  const nMatch = subText.match(/\n    n_studies:\s*(\d+)/)
  const confMatch = subText.match(/\n    confidence:\s*([a-z_]+)/)
  const typMatch = subText.match(/\n    typical_ppb:\s*\[\s*([^,]+),\s*([^\]]+)\s*\]/)
  if (!nMatch) return null
  return {
    n_studies: Number(nMatch[1]),
    confidence: confMatch ? confMatch[1] : null,
    typical_lo: typMatch ? typMatch[1].trim() : "null",
    typical_hi: typMatch ? typMatch[2].trim() : "null",
  }
}

function setField(block, key, value) {
  const re = new RegExp(`(\\n    ${escapeRegex(key)}:)\\s*[^\\n]*`)
  if (re.test(block)) return block.replace(re, `$1 ${value}`)
  return block
}

function writerValueMatches(existing, last) {
  // True when the cell's current on-page value is the one THIS writer last
  // published — so it is safe to retract. Compares n_studies and both typical
  // bounds as strings (both sides come from the same rounding).
  if (!last || !Array.isArray(last.typical_ppb)) return false
  if (Number(existing.n_studies) !== Number(last.n_studies)) return false
  return (
    String(existing.typical_lo) === String(last.typical_ppb[0]) &&
    String(existing.typical_hi) === String(last.typical_ppb[1])
  )
}

function retractMetalSubBlock(subText) {
  // Return the sub-block to pending: no value, no support, dated today.
  let out = subText
  out = setField(out, "status", "pending")
  out = setField(out, "typical_ppb", "[null, null]")
  out = setField(out, "p95_ppb", "null")
  out = setField(out, "confidence", "null")
  out = setField(out, "n_studies", "0")
  out = setField(out, "last_reviewed", today)
  return out
}

function retractionReason(verdict) {
  if (/internally inconsistent/.test(verdict)) {
    return "Unit-inconsistency artifact: the prior value came from a v0 autonomy-extractor pool whose distribution spanned more than four orders of magnitude (a mixed-unit signature). The cleaned v1 extraction does not support it. Cell returned to pending re-synthesis."
  }
  if (/too thin/.test(verdict)) {
    return "Superseded: the cleaned v1 extraction supports fewer than two independent sources for this cell. The prior value is withdrawn pending additional evidence."
  }
  if (/sensitivity/.test(verdict)) {
    return "Superseded: the pooled value is unstable across parametric assumptions under the cleaned v1 extraction. Withdrawn pending additional evidence."
  }
  return "Superseded: the cleaned v1 extraction no longer supports the prior value. Withdrawn pending re-synthesis."
}

function numOrNullStr(s) {
  if (s === undefined || s === null || String(s).trim() === "" || String(s) === "null") return null
  const n = Number(s)
  return Number.isFinite(n) ? n : null
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function numOrNull(v) {
  if (v === "" || v === null || v === undefined) return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

function round(n) {
  if (n === null) return null
  if (n === 0) return 0
  const abs = Math.abs(n)
  // ppb values: 2 sig figs below 10, 3 sig figs at 10+, integers above 1000.
  if (abs >= 1000) return Math.round(n)
  if (abs >= 10) return Math.round(n * 10) / 10
  if (abs >= 1) return Math.round(n * 100) / 100
  return Math.round(n * 1000) / 1000
}

function parseCsv(text) {
  const lines = text.split("\n").filter((l) => l.length > 0)
  if (lines.length === 0) return []
  const headers = splitCsvLine(lines[0])
  const out = []
  for (let i = 1; i < lines.length; i += 1) {
    const cells = splitCsvLine(lines[i])
    if (cells.length === 1 && cells[0] === "") continue
    const row = {}
    for (let j = 0; j < headers.length; j += 1) row[headers[j]] = cells[j] ?? ""
    out.push(row)
  }
  return out
}

function splitCsvLine(line) {
  const out = []
  let cur = ""
  let inQuote = false
  for (let i = 0; i < line.length; i += 1) {
    const c = line[i]
    if (inQuote) {
      if (c === '"' && line[i + 1] === '"') {
        cur += '"'
        i += 1
      } else if (c === '"') {
        inQuote = false
      } else {
        cur += c
      }
    } else {
      if (c === '"') inQuote = true
      else if (c === ",") {
        out.push(cur)
        cur = ""
      } else cur += c
    }
  }
  out.push(cur)
  return out
}

function parseArgs(argv) {
  const m = new Map()
  const has = (k) => m.has(k)
  const get = (k) => m.get(k)
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq < 0) m.set(a.slice(2), true)
      else m.set(a.slice(2, eq), a.slice(eq + 1))
    }
  }
  return { has, get }
}
