#!/usr/bin/env node
// RETIRED 2026-08-12: proposals cannot be generated from the superseded standards classifier.
console.error("RETIRED: government-limit mappings require the current sovereign-limit compiler workflow.")
process.exit(2)
/**
 * Regulatory cap → product mapper (proposal generator).
 *
 * The row classifier shows ~264 rows routed to FETCH_INGEST (no occurrence data,
 * no loaded cap) — but many almost certainly fall under an existing EU 2023/915
 * or FDA maximum level that simply isn't crosswalked to them. A cap that binds
 * makes a row defensible-by-cap (regulatory-alignment) with ZERO occurrence data.
 *
 * This tool matches the 43 loaded caps (data/evidence/regulatory_limits.csv) to
 * the classifier's BLOCKED/no-cap rows, CONSERVATIVELY. It asserts nothing new:
 * every proposed mapping cites the exact cap value + verbatim scope text + the
 * match rationale, and is graded high/medium/low confidence. It is a PROPOSAL
 * queue, not an auto-apply — applying a regulatory limit to the wrong product is
 * a defensibility liability, so a human/counsel approves before it touches the
 * live crosswalk. Only `high`-confidence proposals (product ≈ a specific scope,
 * no conflicting exclusion) are safe candidates for direct application; medium
 * and low are review-only.
 *
 * Output:
 *   data/evidence/cap-mapping-proposals.csv  — product, metal, cap value, source,
 *     verbatim scope, confidence, rationale, exclusion_flag
 *   console — potential yield (how many BLOCKED rows could flip to defensible-by-cap)
 */

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const REPO = process.cwd()
const capsPath = path.join(REPO, "data/evidence/regulatory_limits.csv")
const classifierPath = path.join(REPO, "data/evidence/standards-row-classifier.csv")
const xwalkPath = path.join(REPO, "data/evidence/product_regulatory_crosswalk.csv")
const outPath = path.join(REPO, "data/evidence/cap-mapping-proposals.csv")

const caps = readCsv(capsPath)
const classifier = readCsv(classifierPath)
const alreadyMapped = new Set(
  readCsv(xwalkPath).map((r) => `${(r.product_slug ?? "").trim()}|${(r.metal_species ?? "").trim()}`),
)
const productLabel = buildProductLabels()

// Words too generic to carry a match on their own.
const STOP = new Set(["and", "or", "the", "for", "of", "in", "as", "on", "to", "a", "an", "with", "than", "other", "except", "excluding", "including", "food", "foods", "products", "product", "placed", "market", "children", "under", "young", "infants", "infant", "types", "all", "listed"])

const proposals = []
// Only consider rows that are BLOCKED and have no loaded cap yet.
const candidates = classifier.filter(
  (r) => r.class === "BLOCKED" && r.next_action === "FETCH_INGEST" &&
         !alreadyMapped.has(`${r.product_slug}|${r.metal_species}`),
)

for (const row of candidates) {
  const metal = row.metal_species
  const label = (productLabel.get(row.product_slug) ?? row.product_slug).toLowerCase()
  const slugWords = row.product_slug.replace(/-/g, " ")
  const hay = `${label} ${slugWords}`.toLowerCase()
  // Negation set: "non-rice", "rice-free", "excluding rice" in the product name
  // mean the product is NOT that thing, so a scope term must not match it. Without
  // this, "non-rice" matched the rice cap (substring bug).
  const negated = new Set()
  for (const m of `${label} ${row.product_slug}`.toLowerCase().matchAll(/\bnon[-\s]([a-z]+)|([a-z]+)[-\s]free\b/g)) {
    negated.add(m[1] || m[2])
  }

  for (const cap of caps) {
    if (cap.metal_species !== metal) continue
    const scope = (cap.product_scope ?? "").toLowerCase()
    const { positives, exclusions } = splitScope(scope)

    // Exclusion guard: if the product matches an exclusion clause, skip this cap.
    const excluded = exclusions.some((ex) => phraseMatch(hay, ex, negated))
    if (excluded) continue

    // Find the best positive phrase the product falls under.
    let best = null
    for (const pos of positives) {
      const m = matchStrength(hay, pos, negated)
      if (m && (!best || m.score > best.score)) best = { ...m, phrase: pos }
    }
    if (!best) continue

    const confidence = best.score >= 0.9 ? "high" : best.score >= 0.6 ? "medium" : "low"
    proposals.push({
      product_slug: row.product_slug,
      hmtc_category: row.hmtc_category,
      metal_species: metal,
      cap_value_ug_kg: cap.value_ug_kg,
      cap_authority: cap.authority,
      cap_scope: cap.product_scope,
      matched_phrase: best.phrase,
      confidence,
      rationale: best.reason,
      exclusion_checked: exclusions.length ? "yes" : "none",
    })
  }
}

// Keep the single best (highest-confidence, lowest-value) proposal per (product, metal):
// the binding cap is the LOWEST applicable, so ties break to the lower value.
const byCell = new Map()
for (const p of proposals) {
  const k = `${p.product_slug}|${p.metal_species}`
  const rank = { high: 3, medium: 2, low: 1 }
  const cur = byCell.get(k)
  if (!cur ||
      rank[p.confidence] > rank[cur.confidence] ||
      (rank[p.confidence] === rank[cur.confidence] && Number(p.cap_value_ug_kg) < Number(cur.cap_value_ug_kg))) {
    byCell.set(k, p)
  }
}
const finalProposals = [...byCell.values()].sort((a, b) =>
  (a.product_slug.localeCompare(b.product_slug)) || a.metal_species.localeCompare(b.metal_species))

const headers = ["product_slug", "hmtc_category", "metal_species", "cap_value_ug_kg", "cap_authority", "cap_scope", "matched_phrase", "confidence", "rationale", "exclusion_checked"]
fs.writeFileSync(outPath, [headers.join(","), ...finalProposals.map((r) => headers.map((h) => csvCell(r[h])).join(","))].join("\n") + "\n")

const byConf = {}
for (const p of finalProposals) byConf[p.confidence] = (byConf[p.confidence] ?? 0) + 1
console.log(`\n=== Cap-mapping proposals ===`)
console.log(`Candidate BLOCKED/no-cap rows scanned: ${candidates.length}`)
console.log(`Proposed cap mappings (best per cell): ${finalProposals.length}`)
console.log(`  high (safe to apply):     ${byConf.high ?? 0}`)
console.log(`  medium (review):          ${byConf.medium ?? 0}`)
console.log(`  low (review):             ${byConf.low ?? 0}`)
console.log(`\nPotential: up to ${byConf.high ?? 0} rows flip to defensible-by-cap with counsel sign-off (zero data).`)
console.log(`→ ${path.relative(REPO, outPath)} (review before applying to the live crosswalk)`)
console.log(`\nHigh-confidence sample:`)
for (const p of finalProposals.filter((x) => x.confidence === "high").slice(0, 12)) {
  console.log(`  ${p.product_slug} × ${p.metal_species} → ${p.cap_value_ug_kg} µg/kg (${p.cap_authority}) [${p.matched_phrase}]`)
}

// ---- matching ----
function splitScope(scope) {
  // Split off exclusion clauses ("except ...", "excluding ...", "other than ...").
  const exParts = []
  let positive = scope
  const exRe = /\b(?:except|excluding|other than)\b/g
  let m, lastIdx = 0, firstEx = -1
  while ((m = exRe.exec(scope)) !== null) { if (firstEx < 0) firstEx = m.index; exParts.push(scope.slice(m.index)) }
  if (firstEx >= 0) positive = scope.slice(0, firstEx)
  const positives = positive.split(/[;,]/).map((s) => s.trim()).filter(Boolean)
  const exclusions = exParts.join(" ").split(/[;,]/).map((s) => s.replace(/\b(except|excluding|other than)\b/g, "").trim()).filter(Boolean)
  return { positives, exclusions }
}

function contentWords(phrase) {
  return phrase.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter((w) => w.length > 2 && !STOP.has(w))
}

function wordIn(hay, word, negated) {
  // Whole-word match (not substring), and not negated by the product.
  if (negated && negated.has(word)) return false
  return new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(hay)
}

function phraseMatch(hay, phrase, negated) {
  const w = contentWords(phrase)
  if (!w.length) return false
  const hit = w.filter((x) => wordIn(hay, x, negated)).length
  return hit / w.length >= 0.6
}

function matchStrength(hay, phrase, negated) {
  const w = contentWords(phrase)
  if (!w.length) return null
  const hits = w.filter((x) => wordIn(hay, x, negated))
  const frac = hits.length / w.length
  if (frac < 0.5) return null
  // High confidence requires the product to match the WHOLE of a specific
  // multi-word scope phrase (>=2 content words), e.g. "apple juice" ↔ "apple
  // juice". A single generic word ("baby", "rice") is never high — that was the
  // false-positive source. Everything else is review-only.
  const specific = w.length >= 2 && w.length <= 4
  let score
  if (specific && frac >= 0.99) score = 0.95
  else if (frac >= 0.99 && w.length === 1) score = 0.45   // sole generic word → low
  else if (frac >= 0.99) score = 0.7
  else if (frac >= 0.75) score = 0.6
  else score = 0.5
  return { score, reason: `product matches ${hits.length}/${w.length} scope terms [${hits.join(",")}]` }
}

// ---- io ----
function buildProductLabels() {
  const dir = path.join(REPO, "wiki/products")
  const idx = new Map()
  if (!fs.existsSync(dir)) return idx
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    try {
      const fm = matter(fs.readFileSync(path.join(dir, file), "utf8")).data || {}
      const l = fm.title || fm.product_label || fm.label || ""
      if (l) idx.set(file.replace(/\.md$/, ""), String(l))
    } catch {}
  }
  return idx
}
function readCsv(fp) {
  if (!fs.existsSync(fp)) return []
  const lines = fs.readFileSync(fp, "utf8").split(/\r?\n/).filter((l) => l.length)
  if (!lines.length) return []
  const headers = parseLine(lines[0])
  return lines.slice(1).map((line) => { const c = parseLine(line); const o = {}; headers.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
function parseLine(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) { const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
  out.push(cur); return out
}
function csvCell(v) { const s = String(v ?? ""); return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
