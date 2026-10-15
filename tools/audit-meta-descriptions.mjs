#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { fromHtml } from "hast-util-from-html"

const FIELDS = ["description", "og:description", "twitter:description"]
const HEADING =
  /^(?:Overview|Scope|Summary|Direct answer|Key (?:findings|numbers)|Literature scope|References|Sources)\b/i
const INTERNAL =
  /Author metadata needs verification|Step Zero scaffold|bulk-ingest|structural ingredient node|scaffold|\bstub\b|No substantive edit history is available in this build/i

export function readDescriptionPage(html, file = "index.html") {
  const tree = fromHtml(html)
  const fields = {}
  // Ownership-verification payloads are not content documents.
  const verification = html.match(
    /^\s*google-site-verification:\s*(google[a-f0-9]+\.html)\s*$/i,
  )
  let excluded =
    file === "404.html" ||
    Boolean(verification && path.basename(file) === verification[1])
  function walk(node) {
    if (node.type === "element" && node.tagName === "meta") {
      const name = String(
        node.properties.name ?? node.properties.property ?? "",
      ).toLowerCase()
      const content = String(node.properties.content ?? "").trim()
      if (
        ["robots", "googlebot"].includes(name) &&
        /\b(?:noindex|none)\b/i.test(content)
      )
        excluded = true
      if (String(node.properties.httpEquiv ?? "").toLowerCase() === "refresh")
        excluded = true
      if (FIELDS.includes(name)) fields[name] = content
    }
    for (const child of node.children ?? []) walk(child)
  }
  walk(tree)
  return { file, indexable: !excluded, fields }
}

export function summarizeDescriptions(pages) {
  const indexed = pages.filter((page) => page.indexable)
  const groups = new Map()
  const offenders = []
  const counts = {
    heading_start: 0,
    exact_author_warning: 0,
    scaffold_stub_bulk: 0,
    over_155: 0,
    duplicate_groups: 0,
    excessive_duplicate_groups: 0,
    missing: 0,
  }
  for (const page of indexed) {
    const description = page.fields.description ?? ""
    if (HEADING.test(description)) counts.heading_start++
    if (description === "Author metadata needs verification.")
      counts.exact_author_warning++
    if (/scaffold|\bstub\b|bulk-ingest/i.test(description))
      counts.scaffold_stub_bulk++
    if (description.length > 155) counts.over_155++
    if (!description) counts.missing++
    if (description) {
      if (!groups.has(description)) groups.set(description, [])
      groups.get(description).push(page.file)
    }
    for (const field of FIELDS) {
      const value = page.fields[field] ?? ""
      const reasons = []
      if (!value) reasons.push("missing")
      if (HEADING.test(value)) reasons.push("heading-start")
      if (INTERNAL.test(value)) reasons.push("internal-status")
      if (value.length > 155) reasons.push("over-155")
      if (/\.{3}$|…$/.test(value)) reasons.push("trailing-ellipsis")
      if (value !== description) reasons.push("description-mismatch")
      if (reasons.length)
        offenders.push({ file: page.file, field, reasons, value })
    }
  }
  const duplicates = Array.from(groups, ([description, files]) => ({
    description,
    files,
  })).filter((group) => group.files.length > 1)
  counts.duplicate_groups = duplicates.length
  counts.excessive_duplicate_groups = duplicates.filter(
    (group) => group.files.length > 5,
  ).length
  return {
    scanned_files: pages.length,
    indexable_files: indexed.length,
    counts,
    offenders,
    duplicates,
  }
}

export function auditDescriptions(directory) {
  if (!fs.existsSync(directory))
    throw new Error(`Missing HTML directory: ${directory}`)
  const pages = []
  function walk(dir) {
    for (const entry of fs
      .readdirSync(dir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(file)
      else if (entry.isFile() && file.endsWith(".html"))
        pages.push(
          readDescriptionPage(
            fs.readFileSync(file, "utf8"),
            path.relative(directory, file),
          ),
        )
    }
  }
  walk(directory)
  if (!pages.length) throw new Error(`No built HTML in ${directory}`)
  return summarizeDescriptions(pages)
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  try {
    const directory =
      process.argv.find((arg) => arg.startsWith("--dir="))?.slice(6) ?? "public"
    const report = auditDescriptions(directory)
    const failed =
      report.offenders.length > 0 ||
      report.counts.excessive_duplicate_groups > 0
    if (process.argv.includes("--json"))
      console.log(JSON.stringify(report, null, 2))
    else {
      console.log(
        `audit-meta-descriptions: ${failed ? "FAIL" : "PASS"} (${report.indexable_files} indexable of ${report.scanned_files} HTML files)`,
      )
      console.log(JSON.stringify(report.counts))
      for (const hit of report.offenders)
        console.error(
          `  ${hit.file} [${hit.field}: ${hit.reasons.join(", ")}] ${hit.value}`,
        )
      for (const group of report.duplicates.filter(
        (group) => group.files.length > 5,
      ))
        console.error(
          `  duplicate (${group.files.length} pages): ${group.description}\n    ${group.files.join(", ")}`,
        )
    }
    process.exitCode = failed ? 1 : 0
  } catch (error) {
    console.error(`audit-meta-descriptions: ${error.message}`)
    process.exitCode = 1
  }
}
