#!/usr/bin/env node
// Fail when an ingredient or product page is missing one of the nine sidebar rails.
//
//   node tools/audit-canonical-rails.mjs            print counts
//   node tools/audit-canonical-rails.mjs --check    exit 1 if any page is short
//   node tools/audit-canonical-rails.mjs --apply    insert honest stubs for missing rails
//
// The rails are defined in tools/lib/canonical-page-rails.mjs. Rice is the reference.

import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { ensureCanonicalRails, missingRailIds, h2Headings, splitFrontmatter } from "./lib/canonical-page-rails.mjs"

const DIRS = ["wiki/ingredients", "wiki/products"]

export function pageFiles(root = process.cwd()) {
  const files = []
  for (const dir of DIRS) {
    const abs = path.join(root, dir)
    if (!fs.existsSync(abs)) continue
    for (const name of fs.readdirSync(abs).sort()) {
      if (!name.endsWith(".md") || name === "index.md") continue
      files.push(path.join(dir, name))
    }
  }
  return files
}

export function auditRails(root = process.cwd()) {
  const missing = []
  for (const rel of pageFiles(root)) {
    const content = fs.readFileSync(path.join(root, rel), "utf8")
    const gaps = missingRailIds(h2Headings(splitFrontmatter(content).body))
    if (gaps.length) missing.push({ rel, gaps })
  }
  return missing
}

function applyRails(root = process.cwd()) {
  let pages = 0
  let stubSections = 0
  const byRail = {}
  for (const rel of pageFiles(root)) {
    const abs = path.join(root, rel)
    const content = fs.readFileSync(abs, "utf8")
    const next = ensureCanonicalRails(content)
    if (next.inserted.length === 0) continue
    if (next.content === content) continue
    fs.writeFileSync(abs, next.content)
    pages += 1
    stubSections += next.inserted.length
    for (const id of next.inserted) byRail[id] = (byRail[id] ?? 0) + 1
  }
  return { pages, stubSections, byRail }
}

function main() {
  const args = new Set(process.argv.slice(2))
  const root = process.cwd()
  if (args.has("--apply")) {
    const result = applyRails(root)
    console.log(JSON.stringify(result))
    const left = auditRails(root)
    if (left.length) {
      console.error(`canonical rails still missing on ${left.length} pages`)
      process.exit(1)
    }
    console.log("canonical rails applied")
    return
  }
  const missing = auditRails(root)
  console.log(`Canonical rails: ${pageFiles(root).length} ingredient and product pages, ${missing.length} missing a rail`)
  if (args.has("--check") && missing.length) {
    for (const item of missing.slice(0, 30)) console.error(`  ${item.rel}: ${item.gaps.join(", ")}`)
    process.exit(1)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
