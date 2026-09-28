#!/usr/bin/env node
// Fail when a page Quartz publishes contains ingest or batch-log prose.
// Update history is exempt. wiki/batch-reports/, wiki/lint/, and wiki/log.md
// are not published. A path in the allowlist file is skipped in full.

import fs from "node:fs"
import path from "node:path"
import { publicBatchProseViolations } from "./lib/public-batch-prose.mjs"

const repoRoot = process.cwd()
const allowFile = path.join(repoRoot, "tools/audit-public-batch-prose.allowlist.txt")

const SKIP_DIRS = new Set([
  "private", "templates", "briefings", "queries", "raw", "batch-reports", "lint",
])

export function loadAllowlist(text) {
  return text.split("\n")
    .map((line) => line.replace(/#.*/, "").trim())
    .filter(Boolean)
}

export function isAllowed(rel, allow) {
  return allow.some((entry) => rel === entry || rel.startsWith(entry.endsWith("/") ? entry : `${entry}/`))
}

export function isPublishedWikiPage(rel) {
  if (!rel.startsWith("wiki/") || !rel.endsWith(".md")) return false
  if (rel === "wiki/log.md" || rel.endsWith("/_TEMPLATE.md")) return false
  const top = rel.split("/")[1]
  return !SKIP_DIRS.has(top)
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue
    const abs = path.join(dir, name)
    if (fs.statSync(abs).isDirectory()) walk(abs, out)
    else if (name.endsWith(".md")) out.push(abs)
  }
  return out
}

function main() {
  const allow = loadAllowlist(fs.readFileSync(allowFile, "utf8"))
  const findings = []
  for (const abs of walk(path.join(repoRoot, "wiki"))) {
    const rel = path.relative(repoRoot, abs)
    if (!isPublishedWikiPage(rel) || isAllowed(rel, allow)) continue
    const markdown = fs.readFileSync(abs, "utf8")
    findings.push(...publicBatchProseViolations(markdown, rel))
  }
  if (findings.length) {
    for (const hit of findings.slice(0, 80)) {
      console.error(`  ${hit.file}:${hit.line} [${hit.rule}] ${hit.snippet}`)
    }
    if (findings.length > 80) console.error(`  ... ${findings.length - 80} more`)
    console.error(`audit-public-batch-prose: FAIL — ${findings.length} batch-log line(s) on published pages`)
    process.exit(1)
  }
  console.log("audit-public-batch-prose: PASS")
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) main()
