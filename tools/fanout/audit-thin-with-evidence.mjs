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
// Default mode is a ratchet. The live failure set must equal
// data/fanout/thin-with-evidence-baseline.txt. A new thin-with-evidence page
// fails. A filled page left in the baseline also fails, so the baseline has
// to be rewritten after a real fill. --strict ignores the baseline and fails
// on every thin-with-evidence page. --write-baseline rewrites the file.

import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import matter from "gray-matter"
import { parseCsvFile } from "../library/lib/csv.mjs"

export const CITED_BEGIN = "<!-- BEGIN: hmi-cited-measurements -->"
export const CITED_END = "<!-- END: hmi-cited-measurements -->"
export const BASELINE_REL = "data/fanout/thin-with-evidence-baseline.txt"

const CONCENTRATION =
  /\d(?:[\d,]|\.\d)*(?:\s*[×x*]\s*10\^?-?\d+)?\s*(?:±\s*\d(?:[\d,]|\.\d)*)?\s*(?:<\s*)?(?:ppb|ppm|µg\/kg|ug\/kg|μg\/kg|mg\/kg|µg\/g|ug\/g|μg\/g|ng\/g|mg\/L|µg\/L|ug\/L|μg\/L|ng\/L|mg\/l|µg\/l|ug\/l)\b/i

const SOURCE_LINK = /\[\[sources\/[A-Za-z0-9][A-Za-z0-9._-]*\]\]/

export function citedBlockValid(markdown) {
  const start = markdown.indexOf(CITED_BEGIN)
  const end = markdown.indexOf(CITED_END)
  if (start < 0 || end < start) return false
  const block = markdown.slice(start + CITED_BEGIN.length, end)
  return SOURCE_LINK.test(block) && CONCENTRATION.test(block)
}

export function pageStillThin(frontmatter, markdown) {
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
  return { failures, baseline, evidence_entities: evidence.size }
}

export function diffSets(live, baseline) {
  const base = new Set(baseline)
  const now = new Set(live)
  return {
    added: live.filter((id) => !base.has(id)),
    removed: baseline.filter((id) => !now.has(id)),
  }
}

function printReport(report, { strict }) {
  const { added, removed } = diffSets(report.failures, report.baseline)
  if (strict) {
    console.log(
      `audit-thin-with-evidence: ${report.failures.length ? "FAIL" : "PASS"} (${report.failures.length} thin pages with evidence; strict)`,
    )
    for (const id of report.failures) console.error(`  ${id}`)
    return report.failures.length === 0
  }
  const ok = added.length === 0 && removed.length === 0
  console.log(
    `audit-thin-with-evidence: ${ok ? "PASS" : "FAIL"} (${report.failures.length} live, ${report.baseline.length} baseline, ${report.evidence_entities} evidence entities)`,
  )
  for (const id of added) console.error(`  new thin-with-evidence: ${id}`)
  for (const id of removed) console.error(`  stale baseline (page no longer thin-with-evidence): ${id}`)
  return ok
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
  const ok = printReport(report, { strict })
  if (!ok) process.exitCode = 1
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) main()
