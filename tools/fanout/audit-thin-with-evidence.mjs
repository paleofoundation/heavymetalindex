#!/usr/bin/env node
// Fail when a product or ingredient page is still thin while measurement
// evidence already exists. A page leaves the thin set only when its body
// contains a valid hmi-cited-measurements block: a source wikilink and a
// number next to a concentration unit.
//
// Evidence is data/fanout/paper-entity-index.jsonl (has_values true) and
// data/evidence/product_source_routing_audit.csv (value_record_count > 0).
// A frontmatter or body match with no values does not count.
//
// Default mode is a ceiling. A new thin-with-evidence page fails. A filled
// page left in data/fanout/thin-with-evidence-baseline.txt passes. Lower that
// file on main to lock in the improvement. A fill pull request does not need
// to edit it. --strict ignores the baseline and fails on every
// thin-with-evidence page. --write-baseline rewrites the file.

import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import matter from "gray-matter"
import { parseCsvFile } from "../library/lib/csv.mjs"

export const CITED_BEGIN = "<!-- BEGIN: hmi-cited-measurements -->"
export const CITED_END = "<!-- END: hmi-cited-measurements -->"
export const BASELINE_REL = "data/fanout/thin-with-evidence-baseline.txt"
export const NO_MICROBIOME_EVIDENCE = "There is no evidence yet for this item."

// Contaminant metals the microbiome check will recognize in a cited-measurements
// block. Essential nutrients are left out. A metal counts when its name appears
// outside a sentence that says it was not measured.
export const CONTAMINANT_METALS = [
  { name: "lead", symbols: ["Pb"], pattern: /\blead\b/i },
  { name: "cadmium", symbols: ["Cd"], pattern: /\bcadmium\b/i },
  { name: "arsenic", symbols: ["As", "iAs", "tAs"], pattern: /\barsenic\b/i },
  { name: "mercury", symbols: ["Hg", "MeHg", "tHg"], pattern: /\b(?:methylmercury|mercury)\b/i },
  { name: "aluminum", symbols: ["Al"], pattern: /\balumin(?:um|ium)\b/i },
  { name: "chromium", symbols: ["Cr", "Cr-VI", "Cr(VI)"], pattern: /\bchromium\b/i },
  { name: "nickel", symbols: ["Ni"], pattern: /\bnickel\b/i },
  { name: "tin", symbols: ["Sn"], pattern: /\btin\b/i },
  { name: "antimony", symbols: ["Sb"], pattern: /\bantimony\b/i },
]

const MICROBIOME_TERM = /microbiota|microbiome|dysbiosis|gut bacteria/i
const MICROBIOME_NEGATIVE = /microbiome:\s*not addressed|no direct microbiome endpoint/i
const NOT_MEASURED = /\bnot measured\b|\bnot assayed\b|\bnot in that table\b/i

// The first HMI-THIN-1 cited chunk. The microbiome check is a hard fail on
// these pages only. It is not part of the thin-with-evidence ratchet.
export const MICROBIOME_PAGES = [
  "products/dairy-milk-camel",
  "ingredients/palm-oil",
  "ingredients/rice-milk",
  "products/rice-noodles",
  "products/wild-mushrooms",
  "ingredients/shrimp",
  "ingredients/pineapple-juice",
  "ingredients/tomato-sauce",
  "products/food-packaging-foils-wraps",
  "products/permanent-hair-dyes-tints",
  "ingredients/cumin",
]

const CONCENTRATION =
  /\d(?:[\d,]|\.\d)*(?:\s*[×x*]\s*10\^?-?\d+)?\s*(?:±\s*\d(?:[\d,]|\.\d)*)?\s*(?:<\s*)?(?:ppb|ppm|µg\/kg|ug\/kg|μg\/kg|mg\/kg|µg\/g|ug\/g|μg\/g|ng\/g|mg\/g|mg\/L|µg\/L|ug\/L|μg\/L|ng\/L|mg\/l|µg\/l|ug\/l|mg per \d+ gram serving)\b/i

const SOURCE_LINK = /\[\[sources\/[A-Za-z0-9][A-Za-z0-9._-]*\]\]/

export function citedBlockValid(markdown) {
  const start = markdown.indexOf(CITED_BEGIN)
  const end = markdown.indexOf(CITED_END)
  if (start < 0 || end < start) return false
  const block = markdown.slice(start + CITED_BEGIN.length, end)
  return SOURCE_LINK.test(block) && CONCENTRATION.test(block)
}

export function pageStillThin(frontmatter, markdown) {
  // A compiled page carries the findings explorer. provisional_scaffold on
  // those pages is engine metadata, not an empty article.
  if (String(frontmatter.page_contract_version ?? "") === "1.0.0" && String(markdown).includes("hmi-analyte-explorer")) return false
  const scope = String(frontmatter.literature_scope ?? "")
  const provisional = frontmatter.provisional_scaffold === true
  const inScope =
    scope === "thin" ||
    scope === "none" ||
    scope === "cited" ||
    provisional
  if (!inScope) return false
  return !citedBlockValid(markdown)
}

function walkMarkdown(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue
    const abs = path.join(dir, name)
    const stat = fs.statSync(abs)
    if (stat.isDirectory()) walkMarkdown(abs, out)
    else if (name.endsWith(".md") && name !== "index.md") out.push(abs)
  }
  return out
}

export function loadEvidenceEntities(root) {
  const entities = new Set()
  const indexPath = path.join(root, "data/fanout/paper-entity-index.jsonl")
  if (fs.existsSync(indexPath)) {
    for (const line of fs.readFileSync(indexPath, "utf8").split("\n")) {
      if (!line.trim()) continue
      let row
      try {
        row = JSON.parse(line)
      } catch {
        continue
      }
      if (row.has_values === true && typeof row.entity === "string" && row.entity) {
        entities.add(row.entity)
      }
    }
  }
  const routingPath = path.join(root, "data/evidence/product_source_routing_audit.csv")
  if (fs.existsSync(routingPath)) {
    for (const row of parseCsvFile(routingPath)) {
      const count = Number(row.value_record_count)
      const slug = String(row.product_slug ?? "").trim()
      if (slug && Number.isFinite(count) && count > 0) {
        entities.add(`products/${slug}`)
      }
    }
  }
  return entities
}

function pageEntities(rel, frontmatter) {
  const ids = new Set([rel.replace(/^wiki\//, "").replace(/\.md$/, "")])
  if (frontmatter.category) ids.add(`products/${frontmatter.category}`)
  if (frontmatter.commodity) ids.add(`ingredients/${frontmatter.commodity}`)
  return ids
}

export function readBaseline(text) {
  return text
    .split("\n")
    .map((line) => line.replace(/#.*/, "").trim())
    .filter(Boolean)
    .sort()
}

export function auditThinWithEvidence(root) {
  const evidence = loadEvidenceEntities(root)
  const failures = []
  for (const family of ["products", "ingredients"]) {
    const dir = path.join(root, "wiki", family)
    for (const abs of walkMarkdown(dir)) {
      const markdown = fs.readFileSync(abs, "utf8")
      let frontmatter = {}
      try {
        frontmatter = matter(markdown).data ?? {}
      } catch {
        frontmatter = {}
      }
      if (!pageStillThin(frontmatter, markdown)) continue
      const ids = pageEntities(path.relative(root, abs), frontmatter)
      const hit = [...ids].some((id) => evidence.has(id))
      if (!hit) continue
      failures.push(path.relative(root, abs).replace(/^wiki\//, "").replace(/\.md$/, ""))
    }
  }
  failures.sort()
  const baselinePath = path.join(root, BASELINE_REL)
  const baseline = fs.existsSync(baselinePath)
    ? readBaseline(fs.readFileSync(baselinePath, "utf8"))
    : []
  const microbiome = auditMicrobiomeSections(root)
  return { failures, baseline, evidence_entities: evidence.size, microbiome }
}

export function microbiomeSectionBody(markdown) {
  const lines = String(markdown ?? "").split("\n")
  const start = lines.findIndex((line) => line.trim() === "## Microbiome implications")
  if (start < 0) return null
  const body = []
  for (let i = start + 1; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i])) break
    body.push(lines[i])
  }
  return body
    .join("\n")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim()
}

// null means the section is acceptable. A citation is a source wikilink, which
// the page reference list numbers. The only uncited section that passes is the
// single honest no-evidence line.
export function microbiomeSectionIssue(markdown) {
  const body = microbiomeSectionBody(markdown)
  if (body == null) return "missing"
  if (!body) return "empty"
  if (SOURCE_LINK.test(body)) return null
  if (body === NO_MICROBIOME_EVIDENCE) return null
  return "uncited"
}

function citedMeasurementsBlock(markdown) {
  const start = markdown.indexOf(CITED_BEGIN)
  const end = markdown.indexOf(CITED_END)
  if (start < 0 || end < start) return ""
  return markdown.slice(start + CITED_BEGIN.length, end)
}

export function contaminantMetalsInMeasurements(markdown) {
  const block = citedMeasurementsBlock(markdown)
  if (!block) return []
  const sentences = block.replace(/\[\[[^\]]+\]\]/g, "").split(/(?<=[.!?])\s+/)
  const found = []
  for (const metal of CONTAMINANT_METALS) {
    const hit = sentences.some((sentence) => metal.pattern.test(sentence) && !NOT_MEASURED.test(sentence))
    if (hit) found.push(metal.name)
  }
  return found
}

function sourceIsMicrobiomePaper(markdown) {
  const cleaned = String(markdown).replace(/<!--[\s\S]*?-->/g, "")
  const sentences = cleaned.split(/(?<=[.!?])\s+/)
  return sentences.some(
    (sentence) =>
      MICROBIOME_TERM.test(sentence) &&
      !MICROBIOME_NEGATIVE.test(sentence) &&
      !/not addressed|documented elsewhere/i.test(sentence),
  )
}

function sourceNamesMetal(markdown, frontmatter, metal) {
  const title = String(frontmatter?.title ?? "")
  if (metal.pattern.test(title)) return true
  const cleaned = String(markdown)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\[\[[^\]]+\]\]/g, "")
  return cleaned.split(/(?<=[.!?])\s+/).some(
    (sentence) =>
      metal.pattern.test(sentence) &&
      MICROBIOME_TERM.test(sentence) &&
      !MICROBIOME_NEGATIVE.test(sentence) &&
      !/not addressed|documented elsewhere/i.test(sentence),
  )
}

// metal name -> set of cite keys. A note counts for a metal when it discusses
// the microbiome and names that metal in the title, or in a sentence that
// states a microbiota finding. A symbol in the metals frontmatter is not
// enough: a 26-metal panel with no result for one metal is not a paper on
// that metal. Food-entity index rows are not the key.
export function loadMetalMicrobiomeCorpus(root) {
  const corpus = new Map(CONTAMINANT_METALS.map((metal) => [metal.name, new Set()]))
  const dir = path.join(root, "wiki", "sources")
  if (!fs.existsSync(dir)) return corpus
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".md") || name.startsWith("_") || name === "index.md") continue
    const abs = path.join(dir, name)
    let markdown
    try {
      markdown = fs.readFileSync(abs, "utf8")
    } catch {
      continue
    }
    if (!sourceIsMicrobiomePaper(markdown)) continue
    let frontmatter = {}
    try {
      frontmatter = matter(markdown).data ?? {}
    } catch {
      frontmatter = {}
    }
    const citeKey = String(frontmatter.cite_key || name.replace(/\.md$/, "")).toLowerCase()
    for (const metal of CONTAMINANT_METALS) {
      if (sourceNamesMetal(markdown, frontmatter, metal)) corpus.get(metal.name).add(citeKey)
    }
  }
  return corpus
}

function citedSourceKeys(body) {
  return [...String(body).matchAll(/\[\[sources\/([A-Za-z0-9][A-Za-z0-9._-]*)\]\]/g)].map((match) =>
    match[1].toLowerCase(),
  )
}

// The no-evidence line is allowed only when none of the measured contaminant
// metals has a microbiome paper in wiki/sources. A cited section has to name
// each such metal and link a paper the corpus tags for that metal.
export function microbiomeCorpusIssues(markdown, corpus) {
  const body = microbiomeSectionBody(markdown)
  if (body == null || !body) return []
  const covered = contaminantMetalsInMeasurements(markdown).filter(
    (metal) => (corpus.get(metal)?.size ?? 0) > 0,
  )
  if (!covered.length) return []
  if (body === NO_MICROBIOME_EVIDENCE) {
    return [`no-evidence-despite-corpus (${covered.join(", ")})`]
  }
  if (!SOURCE_LINK.test(body)) return []
  const cited = new Set(citedSourceKeys(body))
  const issues = []
  for (const metal of covered) {
    const metalDef = CONTAMINANT_METALS.find((row) => row.name === metal)
    const named = metalDef.pattern.test(body)
    const hit = [...corpus.get(metal)].some((key) => cited.has(key))
    if (!named || !hit) issues.push(`missing-metal-citation (${metal})`)
  }
  return issues
}

export function auditMicrobiomeSections(root) {
  const present = MICROBIOME_PAGES.filter((id) =>
    fs.existsSync(path.join(root, "wiki", `${id}.md`)),
  )
  // Fixture roots do not carry this chunk. Once any of the pages is present,
  // every page in the chunk is required.
  if (present.length === 0) return []
  const corpus = loadMetalMicrobiomeCorpus(root)
  const failures = []
  for (const id of MICROBIOME_PAGES) {
    const abs = path.join(root, "wiki", `${id}.md`)
    if (!fs.existsSync(abs)) {
      failures.push({ id, issue: "missing-page" })
      continue
    }
    const markdown = fs.readFileSync(abs, "utf8")
    // Compiled pages use the Rice section set. The legacy microbiome heading
    // is not part of that article.
    if (/^page_contract_version:\s*['"]?1\.0\.0['"]?\s*$/m.test(markdown) && markdown.includes("hmi-analyte-explorer")) continue
    const issue = microbiomeSectionIssue(markdown)
    if (issue) failures.push({ id, issue })
    for (const corpusIssue of microbiomeCorpusIssues(markdown, corpus)) {
      failures.push({ id, issue: corpusIssue })
    }
  }
  return failures
}

export function diffSets(live, baseline) {
  const base = new Set(baseline)
  const now = new Set(live)
  return {
    added: live.filter((id) => !base.has(id)),
    removed: baseline.filter((id) => !now.has(id)),
  }
}

export const THIN_IMPROVEMENT_NOTE =
  "Lower data/fanout/thin-with-evidence-baseline.txt on main to lock in the improvement. A fill pull request does not need to edit that file."

function printReport(report, { strict }) {
  const { added, removed } = diffSets(report.failures, report.baseline)
  if (strict) {
    console.log(
      `audit-thin-with-evidence: ${report.failures.length ? "FAIL" : "PASS"} (${report.failures.length} thin pages with evidence; strict)`,
    )
    for (const id of report.failures) console.error(`  ${id}`)
    return report.failures.length === 0
  }
  const ok = added.length === 0
  console.log(
    `audit-thin-with-evidence: ${ok ? "PASS" : "FAIL"} (${report.failures.length} live, ${report.baseline.length} baseline, ${report.evidence_entities} evidence entities)`,
  )
  for (const id of added) console.error(`  new thin-with-evidence: ${id}`)
  if (removed.length) {
    console.log(
      `audit-thin-with-evidence: ${removed.length} baseline page(s) are no longer thin with evidence. ${THIN_IMPROVEMENT_NOTE}`,
    )
    for (const id of removed) console.log(`  improved: ${id}`)
  }
  return ok
}

function printMicrobiome(report) {
  const rows = report.microbiome ?? []
  if (!rows.length) return true
  console.error(`audit-thin-with-evidence: FAIL microbiome sections (${rows.length})`)
  for (const row of rows) console.error(`  ${row.id}: ${row.issue}`)
  return false
}

function main() {
  const rootArg = process.argv.find((arg) => arg.startsWith("--root="))
  const root = rootArg ? path.resolve(rootArg.slice("--root=".length)) : process.cwd()
  const strict = process.argv.includes("--strict")
  const write = process.argv.includes("--write-baseline")
  const report = auditThinWithEvidence(root)
  if (write) {
    const file = path.join(root, BASELINE_REL)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    const body = [
      "# Pages that are still thin while measurement evidence exists.",
      "# Rewrite with: node tools/fanout/audit-thin-with-evidence.mjs --write-baseline",
      "# A page leaves this list when it has a valid hmi-cited-measurements block.",
      ...report.failures,
      "",
    ].join("\n")
    fs.writeFileSync(file, body)
    console.log(`audit-thin-with-evidence: wrote ${report.failures.length} baseline rows`)
    return
  }
  if (process.argv.includes("--json")) {
    const { added, removed } = diffSets(report.failures, report.baseline)
    console.log(JSON.stringify({ ...report, added, removed, evidence_entities: report.evidence_entities }))
  }
  const ok = printReport(report, { strict }) && printMicrobiome(report)
  if (!ok) process.exitCode = 1
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) main()
