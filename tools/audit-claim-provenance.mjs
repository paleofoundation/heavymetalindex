#!/usr/bin/env node
// Trace-every-claim audit (v1).
//
// For every numerical claim in body prose on ingredient and product pages,
// confirm a `[[sources/...]]` link exists within a configurable lookback
// window. Claims without traceable provenance are reported as unsupported.
//
// Numerical claim regex matches: <number> <unit> where unit is ppb, ppm,
// mg/kg, µg/kg, ug/kg, µg/g, ug/g, mg/L, µg/L, ug/L, or %. The match must
// be in body prose, not in frontmatter or fenced code blocks.
//
// A claim is "supported" if a [[sources/...]] wikilink occurs within the
// same H2 section AND within ~2000 chars lookback (whichever is closer).
// Claims in tables are exempted only if the table footer or a nearby line
// cites a source.
//
// This is the automatable component of the Cochrane trace-every-claim
// audit described in wiki/audits/index.md. It does not verify that the
// cited source actually contains the claimed value (that requires PDF
// reading); it only verifies a citation exists. v2 will add PDF-side
// verification.
//
// Output:
//   data/evidence/claim-provenance-audit.csv  per-claim records
//   data/evidence/claim-provenance-summary.json  aggregate scores
//
// Usage:
//   node tools/audit-claim-provenance.mjs              # full corpus
//   node tools/audit-claim-provenance.mjs --sample 10  # sample N pages per type

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)
const args = process.argv.slice(2)
const sampleIdx = args.indexOf("--sample")
const sampleN = sampleIdx >= 0 ? Number(args[sampleIdx + 1]) : null

const LOOKBACK_CHARS = 2000

// Numerical claim regex: matches <number><optional decimal><optional unit>
// Examples: "100 ppb", "1.5 mg/kg", "92.3 µg/kg", "50%"
const CLAIM_REGEX = /\b(\d+(?:\.\d+)?)\s*(ppb|ppm|mg\/kg|µg\/kg|ug\/kg|µg\/g|ug\/g|mg\/L|µg\/L|ug\/L|%)\b/g

// Section heading regex for finding the enclosing H2
const SECTION_REGEX = /^##\s+(.+)$/gm

function stripFrontmatter(text) {
  const m = text.match(/^---\n[\s\S]*?\n---\n/)
  return m ? text.slice(m[0].length) : text
}

function stripCodeBlocks(text) {
  return text.replace(/```[\s\S]*?```/g, "")
}

function findSection(text, offset) {
  // Find the most recent H2 heading before offset
  const lines = text.slice(0, offset).split("\n")
  for (let i = lines.length - 1; i >= 0; i--) {
    const m = lines[i].match(/^##\s+(.+)$/)
    if (m) return m[1].trim()
  }
  return "(opening)"
}

function hasSourceWithinLookback(text, claimOffset, sectionStart) {
  // Accept any provenance-bearing wikilink: sources/, regulations/ (for
  // regulatory limit claims), or testing/ (for analytical-method floors).
  // Cochrane equivalent: every numerical claim must trace to either the
  // primary source (sources/) or the regulatory/methodological page where
  // the claim is anchored (regulations/, testing/).
  const lookbackStart = Math.max(sectionStart, claimOffset - LOOKBACK_CHARS)
  const window = text.slice(lookbackStart, claimOffset)
  return /\[\[(sources|regulations|testing)\/[^\]]+\]\]/.test(window)
}

function findSectionStart(text, offset) {
  // Find offset of most recent H2 heading before offset
  let lastStart = 0
  const re = /^##\s+.+$/gm
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index >= offset) break
    lastStart = m.index
  }
  return lastStart
}

function auditPage(filePath) {
  const raw = fs.readFileSync(filePath, "utf8")
  const body = stripCodeBlocks(stripFrontmatter(raw))
  // Skip if the file is mostly a scaffolded placeholder
  if (body.length < 500) return { claims: [], skipped: "too-short" }
  // Strip table delimiter rows (these often contain numbers like "---" but no claims)
  const text = body
  const claims = []
  let m
  CLAIM_REGEX.lastIndex = 0
  while ((m = CLAIM_REGEX.exec(text)) !== null) {
    const offset = m.index
    // Skip claims inside YAML-like inline blocks: { ... }
    const ctxBefore = text.slice(Math.max(0, offset - 60), offset)
    if (/\{[^}]*$/.test(ctxBefore)) continue
    // Skip claims inside HTML attribute values
    if (/="\s*[^"]*$/.test(ctxBefore)) continue
    const sectionStart = findSectionStart(text, offset)
    const section = findSection(text, offset)
    const supported = hasSourceWithinLookback(text, offset, sectionStart)
    claims.push({
      claim: `${m[1]} ${m[2]}`,
      offset,
      section,
      supported,
      context: text.slice(Math.max(0, offset - 80), Math.min(text.length, offset + 40)).replace(/\n/g, " "),
    })
  }
  return { claims, skipped: null }
}

function auditDir(dir, pageType) {
  const fullDir = path.join(repoRoot, dir)
  if (!fs.existsSync(fullDir)) return []
  let files = fs.readdirSync(fullDir)
    .filter(f => f.endsWith(".md") && f !== "index.md" && !f.startsWith("_"))
  if (sampleN) {
    files.sort(() => Math.random() - 0.5)
    files = files.slice(0, sampleN)
  }
  const results = []
  for (const f of files) {
    const a = auditPage(path.join(fullDir, f))
    if (a.skipped) continue
    const slug = f.replace(/\.md$/, "")
    for (const c of a.claims) {
      results.push({ type: pageType, slug, ...c })
    }
  }
  return results
}

function main() {
  const ingredientClaims = auditDir("wiki/ingredients", "ingredient")
  const productClaims = auditDir("wiki/products", "product")
  const all = [...ingredientClaims, ...productClaims]

  // Aggregate
  const total = all.length
  const supported = all.filter(c => c.supported).length
  const pct = total ? Math.round(supported / total * 1000) / 10 : 100

  const byType = {}
  for (const c of all) {
    byType[c.type] = byType[c.type] || { total: 0, supported: 0 }
    byType[c.type].total++
    if (c.supported) byType[c.type].supported++
  }

  // Write CSV
  const headers = ["type", "slug", "section", "claim", "supported", "context"]
  const csv = [headers.join(",")]
  for (const r of all) {
    csv.push(headers.map(h => {
      const v = String(r[h] ?? "")
      return /[,"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
    }).join(","))
  }
  const csvPath = path.join(repoRoot, "data/evidence/claim-provenance-audit.csv")
  fs.writeFileSync(csvPath, csv.join("\n") + "\n")

  // Write JSON summary
  const summary = {
    generated_at: new Date().toISOString(),
    sample_size: sampleN,
    total_claims: total,
    supported_claims: supported,
    unsupported_claims: total - supported,
    supported_pct: pct,
    by_type: byType,
  }
  const jsonPath = path.join(repoRoot, "data/evidence/claim-provenance-summary.json")
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2) + "\n")

  console.log("Claim provenance audit (v1):")
  console.log(`  total claims scanned: ${total}`)
  console.log(`  supported (source link within section+${LOOKBACK_CHARS} chars): ${supported} (${pct}%)`)
  console.log(`  unsupported: ${total - supported}`)
  for (const t of Object.keys(byType)) {
    const b = byType[t]
    console.log(`    ${t}: ${b.supported}/${b.total} (${Math.round(b.supported/b.total*100)}%)`)
  }
  console.log(`Wrote ${csvPath}`)
  console.log(`Wrote ${jsonPath}`)
}

main()
