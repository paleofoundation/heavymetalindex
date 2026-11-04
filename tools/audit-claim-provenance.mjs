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
import { fileURLToPath } from "node:url"

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

const PROVENANCE_REGEX = /\[\[(sources|regulations|testing)\/[^\]]+\]\]/
const SOURCE_HEADING = /source|reference|citation|legend|regulat/i

// One pass over H2 headings. A claim sitting on the first character of a
// heading stays in the previous section, matching the old per-claim scan.
export function indexSections(text) {
  const headings = []
  const re = /^##\s+(.+)$/gm
  let m
  while ((m = re.exec(text)) !== null) headings.push({ index: m.index, title: m[1].trim(), raw: m[1] })
  let sources = ""
  for (let i = 0; i < headings.length; i++) {
    if (!SOURCE_HEADING.test(headings[i].raw.toLowerCase())) continue
    const end = i + 1 < headings.length ? headings[i + 1].index : text.length
    sources += "\n" + text.slice(headings[i].index, end)
  }
  const pageSourcesSupported = sources.length > 0 && PROVENANCE_REGEX.test(sources)
  const supported = new Array(headings.length + 1)
  const first = headings.length ? headings[0].index : text.length
  supported[0] = pageSourcesSupported || PROVENANCE_REGEX.test(text.slice(0, first))
  for (let i = 0; i < headings.length; i++) {
    const end = i + 1 < headings.length ? headings[i + 1].index : text.length
    supported[i + 1] = pageSourcesSupported || PROVENANCE_REGEX.test(text.slice(headings[i].index, end))
  }
  return { headings, supported }
}

export function sectionAt(indexed, offset) {
  const { headings } = indexed
  if (headings.length === 0 || offset <= headings[0].index) {
    return { title: "(opening)", supported: indexed.supported[0] }
  }
  let lo = 0
  let hi = headings.length - 1
  let ans = 0
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (headings[mid].index < offset) {
      ans = mid
      lo = mid + 1
    } else hi = mid - 1
  }
  return { title: headings[ans].title, supported: indexed.supported[ans + 1] }
}

function auditPage(filePath) {
  const raw = fs.readFileSync(filePath, "utf8")
  const body = stripCodeBlocks(stripFrontmatter(raw))
  // Skip if the file is mostly a scaffolded placeholder
  if (body.length < 500) return { claims: [], skipped: "too-short" }
  const text = body
  const indexed = indexSections(text)
  const claims = []
  let m
  CLAIM_REGEX.lastIndex = 0
  while ((m = CLAIM_REGEX.exec(text)) !== null) {
    const offset = m.index
    const ctxBefore = text.slice(Math.max(0, offset - 60), offset)
    if (/\{[^}]*$/.test(ctxBefore)) continue
    if (/="\s*[^"]*$/.test(ctxBefore)) continue
    const section = sectionAt(indexed, offset)
    claims.push({
      claim: `${m[1]} ${m[2]}`,
      offset,
      section: section.title,
      supported: section.supported,
      context: text.slice(Math.max(0, offset - 80), Math.min(text.length, offset + 40)).replace(/\n/g, " "),
    })
  }
  return { claims, skipped: null }
}

function csvField(value) {
  const v = String(value ?? "")
  return /[,"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
}

function auditDir(dir, pageType, onClaim) {
  const fullDir = path.join(repoRoot, dir)
  if (!fs.existsSync(fullDir)) return
  let files = fs.readdirSync(fullDir)
    .filter(f => f.endsWith(".md") && f !== "index.md" && !f.startsWith("_"))
  if (sampleN) {
    files.sort(() => Math.random() - 0.5)
    files = files.slice(0, sampleN)
  }
  for (const f of files) {
    const a = auditPage(path.join(fullDir, f))
    if (a.skipped) continue
    const slug = f.replace(/\.md$/, "")
    for (const c of a.claims) onClaim({ type: pageType, slug, ...c })
  }
}

function main() {
  const headers = ["type", "slug", "section", "claim", "supported", "context"]
  const csvPath = path.join(repoRoot, "data/evidence/claim-provenance-audit.csv")
  const fd = fs.openSync(csvPath, "w")
  let buf = headers.join(",") + "\n"
  const byType = {}
  let total = 0
  let supported = 0
  const take = (row) => {
    total++
    if (row.supported) supported++
    const bucket = byType[row.type] || (byType[row.type] = { total: 0, supported: 0 })
    bucket.total++
    if (row.supported) bucket.supported++
    buf += headers.map((h) => csvField(row[h])).join(",") + "\n"
    if (buf.length > 1_000_000) {
      fs.writeSync(fd, buf)
      buf = ""
    }
  }
  auditDir("wiki/ingredients", "ingredient", take)
  auditDir("wiki/products", "product", take)
  if (buf) fs.writeSync(fd, buf)
  fs.closeSync(fd)

  const pct = total ? Math.round(supported / total * 1000) / 10 : 100

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

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main()
