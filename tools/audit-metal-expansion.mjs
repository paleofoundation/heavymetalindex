#!/usr/bin/env node
// Check rendered text and search/social metadata for contextual symbol mistakes.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { fromHtml } from "hast-util-from-html"

const RULES = [
  ["uranium-test", /\buranium\s*\(U\)\s+(?:test|statistic)\b/gi],
  ["whitney-uranium", /\b(?:Whitney|Mann)\s+uranium\b/gi],
  [
    "english-as",
    /\barsenic\s*\(As\)\s+(?:such|well|per|mentioned|can|a\s+result)\b/gi,
  ],
  [
    "author-initial",
    /\b(?:[Nn]ickel|[Cc]hromium|[Tt]in|[Uu]ranium|[Aa]luminum)\s*\(\w+\),\s*[A-Z]\./g,
  ],
]
const BLOCK = /^(?:html|head|body|article|section|div|p|li|h[1-6]|tr|td|th|br)$/

export function metalExpansionViolations(html) {
  const tree = fromHtml(html)
  const metadata = []
  function text(node) {
    if (node.type === "text") return node.value
    if (node.type !== "element" && node.type !== "root") return ""
    if (node.type === "element") {
      if (["script", "style", "template"].includes(node.tagName)) return ""
      if (node.tagName === "meta") {
        const name = node.properties.name ?? node.properties.property
        if (/^(?:(?:og|twitter):)?(?:title|description)$/.test(String(name))) {
          metadata.push([String(name), String(node.properties.content ?? "")])
        }
        return ""
      }
    }
    const value = node.children.map(text).join("")
    return node.type === "element" && BLOCK.test(node.tagName)
      ? ` ${value} `
      : value
  }
  const segments = [["rendered-text", text(tree)], ...metadata]
  return segments.flatMap(([location, value]) => {
    const normalized = value.replace(/\s+/g, " ").trim()
    return RULES.flatMap(([rule, pattern]) =>
      Array.from(normalized.matchAll(pattern), (match) => ({
        rule,
        location,
        match: match[0],
        context: normalized.slice(
          Math.max(0, match.index - 55),
          match.index + match[0].length + 80,
        ),
      })),
    )
  })
}

export function auditMetalExpansion(directory) {
  if (!fs.existsSync(directory))
    throw new Error(`HTML output directory does not exist: ${directory}`)
  const files = []
  function walk(dir) {
    for (const entry of fs
      .readdirSync(dir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(file)
      else if (entry.isFile() && file.endsWith(".html")) files.push(file)
    }
  }
  walk(directory)
  if (!files.length)
    throw new Error(`No built HTML files found in ${directory}`)
  const violations = files.flatMap((file) =>
    metalExpansionViolations(fs.readFileSync(file, "utf8")).map(
      (violation) => ({ file: path.relative(directory, file), ...violation }),
    ),
  )
  return {
    scanned_files: files.length,
    offending_files: new Set(violations.map((hit) => hit.file)).size,
    matches: violations.length,
    violations,
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const directory =
    process.argv.find((arg) => arg.startsWith("--dir="))?.slice(6) ?? "public"
  try {
    const report = auditMetalExpansion(directory)
    if (process.argv.includes("--json"))
      console.log(JSON.stringify(report, null, 2))
    else {
      console.log(
        `audit-metal-expansion: ${report.matches ? "FAIL" : "PASS"} (${report.matches} matches across ${report.offending_files} of ${report.scanned_files} HTML files)`,
      )
      for (const hit of report.violations)
        console.error(
          `  ${hit.file} [${hit.rule}, ${hit.location}] ${hit.context}`,
        )
    }
    process.exitCode = report.matches ? 1 : 0
  } catch (error) {
    console.error(`audit-metal-expansion: ${error.message}`)
    process.exitCode = 1
  }
}
