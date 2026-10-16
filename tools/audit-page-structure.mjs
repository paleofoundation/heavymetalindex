#!/usr/bin/env node
// Page-structure audit (ORDER HMI-STRUCTURE-SPEC-1).
//
// Warn-only against the committed baseline in
// data/evidence/page-structure-baseline.json. Current debt does not fail CI.
// A page that newly fails a check does.
//
//   node tools/audit-page-structure.mjs                 print counts, exit 0
//   node tools/audit-page-structure.mjs --check         exit 1 if any failing
//                                                       path is outside the baseline
//   node tools/audit-page-structure.mjs --warn-only     print counts, exit 0
//   node tools/audit-page-structure.mjs --write-baseline
//
// Scope matches the 16 Oct 2026 structure audit: ingredient, product, and metal
// pages, excluding family index pages. Stubs are exempt only from section
// presence and order. The rule text is docs/page-structure.md.

import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

export const BASELINE_PATH = "data/evidence/page-structure-baseline.json"

export const CHECKS = [
  "answer_block",
  "dois_or_author_year",
  "generic_headings",
  "metal_symbols",
  "consumer_audience",
  "section_presence_and_order",
  "uncertainty_note",
]

const GENERIC_EXACT =
  /^(?:Overview|Direct answer|Key facts|Quick read|At a glance|Introduction|Background|Discussion|Conclusion|Miscellaneous|General|Notes|Summary)$/i

const GENERIC_PREFIX = /^(?:Additional|Other|Direct answer|Overview|Key facts)\b/i

const ANSWER_HEADING = /^(?:Direct answer|Key facts)\b/i

const UNCERTAINTY_HEADING = /^What remains uncertain$/i

const FOOTER_HEADING = /^(?:References|Sources|Update history)\b/i

const SYMBOL =
  /\b(?:iAs|tAs|MeHg|tHg|iHg|Cr-VI|Cr\(VI\)|Pb|Cd|Ni|Al|Cr|Sn|Sb|Hg|U)\b/

const DOI = /\b10\.\d{4,9}\/[^\s)\]>"']+/

const AUTHOR_YEAR =
  /\b[A-Z][A-Za-z'’\-]{2,}(?:\s+(?:and|&)\s+[A-Z][A-Za-z'’\-]{2,})?(?:\s+et\s+al\.?)?\s*(?:\(|,)?\s*(?:19|20)\d{2}(?!-\d)/

const SOURCE_LINK_SOURCE = String.raw`\[\[sources\/[^\]|\n]+(?:\|([^\]]+))?\]\]`

const CONSUMER_HEADING =
  /\b(?:families|for parents|for consumers|what this means for)\b/i

export const INGREDIENT_ROLES = [
  { key: "why", patterns: [/^Why this commodity accumulates/i, /^Why .+ accumulates?/i, /^Accumulation mechanism/i] },
  { key: "profile", patterns: [/^Heavy metal contamination profile/i, /^Contamination profile/i] },
  { key: "ranges", patterns: [/^Ranges by source/i, /^Ranges by region/i, /^Concentration ranges/i, /^Geographic and varietal variation/i] },
  { key: "processing", patterns: [/^Processing effects/i, /^Effects of processing/i] },
  { key: "derivative", patterns: [/^Ingredient-derivative risk/i, /^Derivative risk/i, /^Derivatives and concentrates/i] },
  { key: "mitigation", patterns: [/^Mitigation options/i, /^Mitigation$/i, /^Reducing contamination/i, /^How to reduce/i] },
  { key: "regulatory", patterns: [/^Regulatory limits/i, /^Applicable regulations/i, /^Regulatory framework/i] },
  { key: "sources", patterns: [/^Sources$/i] },
]

export const PRODUCT_ROLES = [
  { key: "who", patterns: [/^Who this page is for/i, /^Audience and purpose/i] },
  { key: "methodology", patterns: [/^Methodology/i, /^How this page is built/i] },
  { key: "literature", patterns: [/^Literature Evidence Summary/i, /^HMTc Evidence Summary/i] },
  { key: "inventory", patterns: [/^Source Evidence Inventory/i, /^Per-source evidence/i] },
  { key: "broad", patterns: [/^Broad Product Context/i, /^Author.Scope Index/i] },
  { key: "limits", patterns: [/^Federal\s*[/\\]\s*Regulatory Limits/i, /^Regulatory.*Field Findings/i, /^Regulatory comparison/i] },
  { key: "levers", patterns: [/^Levers to reduce/i, /^How to reduce contamination/i, /^Mitigation levers/i, /^Reduction levers/i] },
  { key: "standards_math", patterns: [/^How standards math uses this page/i, /^Standards math/i] },
  { key: "recalls", patterns: [/^Historical recalls/i, /^Recalls and enforcement/i, /^Enforcement history/i] },
  { key: "sources", patterns: [/^Sources$/i] },
]

export const METAL_ROLES = [
  { key: "toxicology", patterns: [/^Toxicology$/i] },
  { key: "exposure", patterns: [/^Exposure routes$/i, /^Typical exposure routes$/i] },
  { key: "food", patterns: [/^Food sources$/i] },
  { key: "regulatory", patterns: [/^Regulatory limits$/i, /^Regulatory landscape$/i] },
  { key: "testing", patterns: [/^Testing$/i] },
  { key: "microbiome", patterns: [/^Microbiome effects$/i, /^Microbiome context$/i] },
  { key: "vulnerable", patterns: [/^Vulnerable populations$/i] },
  { key: "mitigation", patterns: [/^Mitigation$/i, /^Mitigation options$/i] },
  { key: "sources", patterns: [/^Sources$/i] },
]

const FAMILIES = [
  { dir: "wiki/ingredients", type: "ingredient", roles: INGREDIENT_ROLES },
  { dir: "wiki/products", type: "product", roles: PRODUCT_ROLES },
  { dir: "wiki/metals", type: "metal", roles: METAL_ROLES },
]

function frontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  return match ? match[1] : ""
}

function audienceValues(fm) {
  const inline = fm.match(/^audience:\s*\[([^\]]*)\]/m)
  if (inline) {
    return inline[1]
      .split(",")
      .map((value) => value.trim().replace(/^['"]|['"]$/g, ""))
      .filter(Boolean)
  }
  const block = fm.match(/^audience:\s*\n((?:[ \t]+-[^\n]*\n)+)/m)
  if (!block) return []
  return [...block[1].matchAll(/-\s*['"]?([^'"\n#]+)['"]?/g)].map((match) =>
    match[1].trim(),
  )
}

export function isIngredientStub(content) {
  return !/status:\s*(in_progress|populated)/.test(frontmatter(content))
}

export function productSourceCounts(repoRoot) {
  const counts = new Map()
  const file = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
  if (!fs.existsSync(file)) return counts
  const lines = fs.readFileSync(file, "utf8").split("\n")
  if (lines.length < 2) return counts
  const header = lines[0].split(",")
  const slugIdx = header.indexOf("product_slug")
  const sourceIdx = header.indexOf("source_id")
  if (slugIdx < 0 || sourceIdx < 0) return counts
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue
    const cells = lines[i].split(",")
    const slug = cells[slugIdx]
    const sourceId = cells[sourceIdx]
    if (!slug || !sourceId || sourceId === "—") continue
    counts.set(slug, (counts.get(slug) ?? 0) + 1)
  }
  return counts
}

export function isProductStub(slug, content, sourceCounts) {
  if ((sourceCounts.get(slug) ?? 0) === 0) return true
  const fmEnd = content.indexOf("\n---", 3)
  const bodyLen = fmEnd > 0 ? content.length - fmEnd : content.length
  return bodyLen < 500
}

function stripGenerated(body) {
  return body
    .replace(/<!--\s*BEGIN:[\s\S]*?<!--\s*END:[^>]*-->/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
}

function bodyOf(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n?/, "")
}

function headingsOf(content) {
  const body = bodyOf(content)
  const headings = []
  const re = /^##\s+(.+?)\s*#*\s*$/gm
  let match
  while ((match = re.exec(body))) {
    headings.push({ title: match[1].trim(), index: match.index })
  }
  return headings
}

function sectionBody(content, titleRe) {
  const body = bodyOf(content)
  const headings = []
  const re = /^##\s+(.+?)\s*#*\s*$/gm
  let match
  while ((match = re.exec(body))) {
    headings.push({ title: match[1].trim(), index: match.index })
  }
  const start = headings.find((heading) => titleRe.test(heading.title))
  if (!start) return null
  const next = headings.find((heading) => heading.index > start.index)
  return body.slice(start.index, next ? next.index : body.length).replace(/^##[^\n]*\n/, "")
}

function plainText(text) {
  return text
    .replace(/<table[\s\S]*?<\/table>/gi, " ")
    .replace(/^\s*\|.*$/gm, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[\[[^\]|\n]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\[\[[^\]]+\]\]/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/https?:\/\/\S+/g, " ")
}

function words(text) {
  return plainText(text)
    .replace(/[#>*_`[\]]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length
}

function sentences(text) {
  const flat = plainText(text).replace(/\s+/g, " ").trim()
  if (!flat) return 0
  const masked = flat.replace(/\bet\s+al\./gi, "et al")
  return masked.split(/(?<=[.!?])\s+/).filter((part) => part.trim()).length
}

function proseSurface(content) {
  let body = stripGenerated(content.replace(/^---\n[\s\S]*?\n---\n?/, ""))
  body = body.replace(/```[\s\S]*?```/g, "")
  body = body.replace(/<table[\s\S]*?<\/table>/gi, "")
  const parts = body.split(/^(?=##\s+)/m)
  return parts
    .filter((part) => {
      const heading = part.match(/^##\s+(.+)$/m)
      if (!heading) return true
      return !FOOTER_HEADING.test(heading[1].trim())
    })
    .join("")
    .split("\n")
    .filter((line) => !/^\s*\|/.test(line))
    .join("\n")
}

function visibleProse(surface) {
  return surface
    .replace(/\[\[[^\]|\n]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\[\[[^\]]+\]\]/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/\bU\.S\.(?:A\.)?/g, " ")
    .replace(/\bU\.K\./g, " ")
}

function sourceLinkDefect(surface) {
  const links = new RegExp(SOURCE_LINK_SOURCE, "g")
  let match
  while ((match = links.exec(surface))) {
    const alias = match[1]
    if (alias == null || !/^\d+$/.test(alias.trim())) return true
  }
  return false
}

function proseWithoutSourceLinks(surface) {
  return visibleProse(surface.replace(new RegExp(SOURCE_LINK_SOURCE, "g"), " "))
}

function answerDefect(content) {
  const headings = headingsOf(content).filter((heading) =>
    ANSWER_HEADING.test(heading.title),
  )
  if (headings.length === 0) return false
  if (headings.length > 1) return true
  const body = sectionBody(content, ANSWER_HEADING)
  if (body == null) return false
  const surface = body
  const text = proseWithoutSourceLinks(surface)
  const cited =
    new RegExp(SOURCE_LINK_SOURCE).test(surface) ||
    DOI.test(text) ||
    AUTHOR_YEAR.test(text) ||
    /\[\d{1,3}\]/.test(plainText(surface))
  const count = words(surface)
  const sentenceCount = sentences(surface)
  return cited || count > 60 || sentenceCount < 2 || sentenceCount > 3
}

function citationDefect(content) {
  const surface = proseSurface(content)
  if (sourceLinkDefect(surface)) return true
  const text = proseWithoutSourceLinks(surface)
  return DOI.test(text) || AUTHOR_YEAR.test(text)
}

function genericDefect(content) {
  return headingsOf(content).some(
    (heading) => GENERIC_EXACT.test(heading.title) || GENERIC_PREFIX.test(heading.title),
  )
}

function symbolDefect(content) {
  const text = visibleProse(proseSurface(content))
  return SYMBOL.test(text)
}

function consumerDefect(content) {
  const audience = audienceValues(frontmatter(content))
  if (audience.some((value) => value === "consumer")) return true
  const body = stripGenerated(content)
  if (/<!--\s*audience:[^>]*\bconsumer\b/.test(body)) return true
  return headingsOf(content).some((heading) => CONSUMER_HEADING.test(heading.title))
}

function sectionDefect(content, roles) {
  const headings = headingsOf(content)
  const positions = []
  let missing = false
  for (const role of roles) {
    const hit = headings.find((heading) =>
      role.patterns.some((pattern) => pattern.test(heading.title)),
    )
    if (!hit) missing = true
    else positions.push(hit.index)
  }
  const disordered = positions.some((position, index) => index > 0 && position < positions[index - 1])
  return missing || disordered
}

function uncertaintyDefect(content) {
  return !headingsOf(content).some((heading) => UNCERTAINTY_HEADING.test(heading.title))
}

export function auditPage(type, content, { stub }) {
  const failures = []
  if (answerDefect(content)) failures.push("answer_block")
  if (citationDefect(content)) failures.push("dois_or_author_year")
  if (genericDefect(content)) failures.push("generic_headings")
  if (symbolDefect(content)) failures.push("metal_symbols")
  if (consumerDefect(content)) failures.push("consumer_audience")
  if (!stub && sectionDefect(content, rolesFor(type))) {
    failures.push("section_presence_and_order")
  }
  if (uncertaintyDefect(content)) failures.push("uncertainty_note")
  return failures
}

function rolesFor(type) {
  if (type === "ingredient") return INGREDIENT_ROLES
  if (type === "product") return PRODUCT_ROLES
  return METAL_ROLES
}

export function scanRepo(repoRoot = process.cwd()) {
  const sourceCounts = productSourceCounts(repoRoot)
  const checks = Object.fromEntries(CHECKS.map((check) => [check, []]))
  let pages = 0
  let stubs = 0
  for (const family of FAMILIES) {
    const dir = path.join(repoRoot, family.dir)
    if (!fs.existsSync(dir)) continue
    for (const file of fs.readdirSync(dir).sort()) {
      if (!file.endsWith(".md") || file === "index.md") continue
      const rel = `${family.dir}/${file}`
      const content = fs.readFileSync(path.join(dir, file), "utf8")
      const slug = file.replace(/\.md$/, "")
      const stub =
        family.type === "ingredient"
          ? isIngredientStub(content)
          : family.type === "product"
            ? isProductStub(slug, content, sourceCounts)
            : false
      if (stub) stubs += 1
      pages += 1
      for (const check of auditPage(family.type, content, { stub })) {
        checks[check].push(rel)
      }
    }
  }
  return { pages, stubs, checks }
}

export function loadBaseline(repoRoot = process.cwd()) {
  const file = path.join(repoRoot, BASELINE_PATH)
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

export function newViolations(scan, baseline) {
  const added = {}
  for (const check of CHECKS) {
    const allowed = new Set(baseline.checks[check].paths)
    added[check] = scan.checks[check].filter((rel) => !allowed.has(rel))
  }
  return added
}

function printScan(scan) {
  console.log(`Page-structure audit: ${scan.pages} pages, ${scan.stubs} stubs exempt from section presence and order`)
  for (const check of CHECKS) {
    const paths = scan.checks[check]
    console.log(`  ${check}: ${paths.length}`)
  }
}

function baselineDocument(scan) {
  const checks = {}
  for (const check of CHECKS) {
    checks[check] = {
      pages: scan.checks[check].length,
      paths: scan.checks[check],
    }
  }
  return {
    order: "HMI-STRUCTURE-SPEC-1",
    date: "2026-10-16",
    note: "Warn-only baseline. CI fails only when a page newly fails a check. Counts are pages, not occurrences. Stubs are exempt only from section_presence_and_order.",
    pages_scanned: scan.pages,
    stubs_exempt_from_sections: scan.stubs,
    checks,
  }
}

function main() {
  const args = new Set(process.argv.slice(2))
  const repoRoot = process.cwd()
  const scan = scanRepo(repoRoot)
  printScan(scan)
  if (args.has("--write-baseline")) {
    const file = path.join(repoRoot, BASELINE_PATH)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, JSON.stringify(baselineDocument(scan), null, 2) + "\n")
    console.log(`wrote ${BASELINE_PATH}`)
    return
  }
  if (args.has("--check") && !args.has("--warn-only")) {
    const added = newViolations(scan, loadBaseline(repoRoot))
    const grew = CHECKS.filter((check) => added[check].length > 0)
    if (grew.length) {
      console.error("\nPage-structure checks grew past the baseline:")
      for (const check of grew) {
        console.error(`  ${check}: ${added[check].length} new`)
        for (const rel of added[check].slice(0, 20)) console.error(`    ${rel}`)
      }
      process.exit(1)
    }
    console.log("page-structure baseline holds")
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
