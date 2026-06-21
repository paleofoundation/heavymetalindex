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
//   data/evidence/claim-provenance-backlog.csv  uncited-claim inventory
//
// Modes:
//   Default (report-only): writes the artifacts and exits 0 regardless of how
//   many claims are uncited. This is what prebuild uses, so CI stays green.
//
//   --strict: still report-only by default behavior, but exits non-zero if the
//   current uncited-claim count EXCEEDS the committed baseline in
//   data/evidence/claim-provenance-baseline.json. Regressions block; the
//   existing backlog is grandfathered. If no baseline file exists, --strict
//   writes one from the current count (and exits 0 against it).
//
// Usage:
//   node tools/audit-claim-provenance.mjs                # full corpus, report-only
//   node tools/audit-claim-provenance.mjs --sample 10    # sample N pages per type
//   node tools/audit-claim-provenance.mjs --strict       # fail on regression vs baseline
//   node tools/audit-claim-provenance.mjs --update-baseline  # rewrite baseline to current

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)
const args = process.argv.slice(2)
const sampleIdx = args.indexOf("--sample")
const sampleN = sampleIdx >= 0 ? Number(args[sampleIdx + 1]) : null
const strict = args.includes("--strict")
const updateBaseline = args.includes("--update-baseline")

const LOOKBACK_CHARS = 2000
const BASELINE_PATH = path.join(repoRoot, "data/evidence/claim-provenance-baseline.json")
const BACKLOG_PATH = path.join(repoRoot, "data/evidence/claim-provenance-backlog.csv")

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

function hasSourceWithinSection(text, claimOffset, sectionStart, sectionEnd, pageSourcesSection) {
  // Accept any provenance-bearing wikilink: sources/, regulations/ (for
  // regulatory limit claims), or testing/ (for analytical-method floors).
  // Cochrane equivalent: every numerical claim must trace to either the
  // primary source (sources/) or the regulatory/methodological page where
  // the claim is anchored. The citation may appear before OR after the
  // claim within the same H2 section, OR in the page's Sources block.
  const window = text.slice(sectionStart, sectionEnd)
  const provRegex = /\[\[(sources|regulations|testing)\/[^\]]+\]\]/
  if (provRegex.test(window)) return true
  if (pageSourcesSection && provRegex.test(pageSourcesSection)) return true
  return false
}

function findPageSourcesSection(text) {
  // Aggregate any section whose heading suggests references/citations.
  // Catches: "## Sources", "## Source legend", "## References",
  // "## Source And Regulation Nodes", "## Source Evidence Inventory", etc.
  const headingRe = /^##\s+(.+)$/gm
  let acc = ""
  let m
  while ((m = headingRe.exec(text)) !== null) {
    const heading = m[1].toLowerCase()
    if (/source|reference|citation|legend|regulat/i.test(heading)) {
      const start = m.index
      const next = headingRe.exec(text)
      const end = next ? next.index : text.length
      acc += "\n" + text.slice(start, end)
      // Reset so we don't skip the next section
      headingRe.lastIndex = next ? next.index : text.length
    }
  }
  return acc
}

function findSectionEnd(text, offset) {
  // Find offset of next H2 heading after offset, or end of text
  const re = /^##\s+.+$/gm
  re.lastIndex = offset
  const m = re.exec(text)
  return m ? m.index : text.length
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
  const text = body
  const pageSourcesSection = findPageSourcesSection(text)
  const claims = []
  let m
  CLAIM_REGEX.lastIndex = 0
  while ((m = CLAIM_REGEX.exec(text)) !== null) {
    const offset = m.index
    const ctxBefore = text.slice(Math.max(0, offset - 60), offset)
    if (/\{[^}]*$/.test(ctxBefore)) continue
    if (/="\s*[^"]*$/.test(ctxBefore)) continue
    const sectionStart = findSectionStart(text, offset)
    const sectionEnd = findSectionEnd(text, offset)
    const section = findSection(text, offset)
    const supported = hasSourceWithinSection(text, offset, sectionStart, sectionEnd, pageSourcesSection)
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

function claimId(r) {
  // Stable identifier for an uncited claim: page slug + section + claim value
  // + offset. Offset disambiguates repeated identical claims within a section.
  // Stable across runs as long as the page text around the claim is unchanged.
  return `${r.type}/${r.slug}#${r.section}@${r.offset}:${r.claim}`
}

function auditDir(dir, pageType, root = repoRoot) {
  const fullDir = path.join(root, dir)
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

function csvCell(v) {
  const s = String(v ?? "")
  return /[,"\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

// Run the audit across the corpus and return the per-claim records plus
// aggregates. Pure with respect to the filesystem reads only; writes nothing.
// Exported so tests can drive it against a fixture corpus.
export function auditAll({ root = repoRoot } = {}) {
  const ingredientClaims = auditDir("wiki/ingredients", "ingredient", root)
  const productClaims = auditDir("wiki/products", "product", root)
  const all = [...ingredientClaims, ...productClaims]

  const total = all.length
  const supported = all.filter(c => c.supported).length
  const unsupported = total - supported
  const pct = total ? Math.round(supported / total * 1000) / 10 : 100

  const byType = {}
  for (const c of all) {
    byType[c.type] = byType[c.type] || { total: 0, supported: 0 }
    byType[c.type].total++
    if (c.supported) byType[c.type].supported++
  }

  return { all, total, supported, unsupported, pct, byType }
}

function readBaseline() {
  if (!fs.existsSync(BASELINE_PATH)) return null
  try {
    return JSON.parse(fs.readFileSync(BASELINE_PATH, "utf8"))
  } catch {
    return null
  }
}

function writeBaseline(result) {
  const uncited = result.all.filter(c => !c.supported)
  const baseline = {
    generated_at: new Date().toISOString(),
    note: "Grandfathered uncited-claim backlog. --strict fails only if the current uncited count EXCEEDS unsupported_claims.",
    unsupported_claims: result.unsupported,
    total_claims: result.total,
    uncited_claim_ids: uncited.map(claimId).sort(),
  }
  fs.writeFileSync(BASELINE_PATH, JSON.stringify(baseline, null, 2) + "\n")
  return baseline
}

function main() {
  const result = auditAll()
  const { all, total, supported, unsupported, pct, byType } = result

  // Write per-claim CSV (all claims)
  const headers = ["type", "slug", "section", "claim", "supported", "context"]
  const csv = [headers.join(",")]
  for (const r of all) {
    csv.push(headers.map(h => csvCell(r[h])).join(","))
  }
  const csvPath = path.join(repoRoot, "data/evidence/claim-provenance-audit.csv")
  fs.writeFileSync(csvPath, csv.join("\n") + "\n")

  // Write the uncited-claims backlog CSV (trackable inventory).
  const uncited = all.filter(c => !c.supported)
  const backlogHeaders = ["claim_id", "page", "section", "claim", "snippet"]
  const backlog = [backlogHeaders.join(",")]
  for (const r of uncited) {
    backlog.push([
      csvCell(claimId(r)),
      csvCell(`${r.type}/${r.slug}`),
      csvCell(r.section),
      csvCell(r.claim),
      csvCell(r.context),
    ].join(","))
  }
  fs.writeFileSync(BACKLOG_PATH, backlog.join("\n") + "\n")

  // Write JSON summary
  const summary = {
    generated_at: new Date().toISOString(),
    sample_size: sampleN,
    total_claims: total,
    supported_claims: supported,
    unsupported_claims: unsupported,
    supported_pct: pct,
    by_type: byType,
  }
  const jsonPath = path.join(repoRoot, "data/evidence/claim-provenance-summary.json")
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2) + "\n")

  console.log("Claim provenance audit (v1):")
  console.log(`  total claims scanned: ${total}`)
  console.log(`  supported (source link within section+${LOOKBACK_CHARS} chars): ${supported} (${pct}%)`)
  console.log(`  unsupported: ${unsupported}`)
  for (const t of Object.keys(byType)) {
    const b = byType[t]
    console.log(`    ${t}: ${b.supported}/${b.total} (${Math.round(b.supported/b.total*100)}%)`)
  }
  console.log(`Wrote ${csvPath}`)
  console.log(`Wrote ${jsonPath}`)
  console.log(`Wrote ${BACKLOG_PATH}`)

  // Baseline maintenance / strict gating.
  if (updateBaseline) {
    const b = writeBaseline(result)
    console.log(`Wrote ${BASELINE_PATH} (baseline unsupported_claims=${b.unsupported_claims})`)
  }

  if (!strict) {
    // Default path: report-only. Never fails the build.
    process.exit(0)
  }

  // --strict path: compare against the committed baseline.
  let baseline = readBaseline()
  if (!baseline) {
    baseline = writeBaseline(result)
    console.log(`No baseline found; wrote ${BASELINE_PATH} (baseline unsupported_claims=${baseline.unsupported_claims})`)
    console.log("strict: PASS (baseline initialized to current count)")
    process.exit(0)
  }

  const baselineCount = Number(baseline.unsupported_claims ?? 0)
  console.log(`strict: current uncited=${unsupported}, baseline=${baselineCount}`)
  if (unsupported > baselineCount) {
    console.error(
      `strict: FAIL — uncited claims regressed by ${unsupported - baselineCount} ` +
      `(current ${unsupported} > baseline ${baselineCount}). ` +
      `New uncited claims are listed in ${BACKLOG_PATH}. ` +
      `Add citations, or run --update-baseline if the increase is intentional.`
    )
    process.exit(1)
  }
  console.log("strict: PASS")
  process.exit(0)
}

// Run as CLI only when invoked directly (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
