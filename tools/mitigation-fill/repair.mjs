// Normalize a mitigation fill before verify.
// New wiki lines lose em dashes and en dashes. A fresh effect whose printed
// unit has no weight basis gets the required disclosure on that page.
//
//   node tools/mitigation-fill/repair.mjs --base origin/main
import fs from "node:fs"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"
import { mitigationSection } from "./pages.mjs"
import { mappingsFor, readMap } from "./record.mjs"

const DASH = /[ \t]*[\u2012\u2013\u2014\u2015][ \t]*/g
export const BASIS_SENTENCE = "The paper does not state the weight basis. The concentration is as printed."

export function replaceDashes(text) {
  return String(text).replace(DASH, " - ")
}

export function stripNewDashes(before, after) {
  if (after == null) return after
  if (before == null) return replaceDashes(after)
  const old = new Set(String(before).split("\n"))
  return String(after)
    .split("\n")
    .map((line) => (old.has(line) ? line : replaceDashes(line)))
    .join("\n")
}

export function needsBasisSentence(beforeMap, afterMap, pageId) {
  return mappingsFor(afterMap, pageId).some((item) => {
    if (!item.unit_ambiguous) return false
    const prior = ((beforeMap.papers || {})[item.doi] || {}).mappings || []
    return !prior.some((mapping) => mapping.effect_as_printed === item.effect_as_printed)
  })
}

export function withBasisSentence(content) {
  const section = mitigationSection(content)
  if (!section) return content
  if (/does not state/i.test(section.body) && /as printed/i.test(section.body)) return content
  const lines = String(content).split("\n")
  const insertAt = section.end
  const addition = ["", BASIS_SENTENCE, ""]
  return [...lines.slice(0, insertAt), ...addition, ...lines.slice(insertAt)].join("\n")
}

export function repairPage({ before, after, pageId, beforeMap, afterMap }) {
  let text = stripNewDashes(before, after)
  const page = String(pageId || "")
  if ((page.startsWith("ingredients/") || page.startsWith("products/")) && needsBasisSentence(beforeMap, afterMap, page)) {
    text = withBasisSentence(text)
  }
  return text
}

function flag(args, name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : ""
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
}

function show(base, file) {
  try {
    return execFileSync("git", ["show", `${base}:${file}`], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    })
  } catch {
    return null
  }
}

function changedFiles() {
  const files = []
  for (const line of git(["status", "--porcelain"]).split("\n")) {
    if (!line.trim()) continue
    let file = line.slice(3).trim()
    if (file.startsWith("\"")) continue
    if (file.includes(" -> ")) file = file.split(" -> ").pop().trim()
    if (file.startsWith("wiki/") && file.endsWith(".md")) files.push(file)
  }
  return files
}

function main() {
  const base = flag(process.argv.slice(2), "--base")
  if (!base) {
    console.error("usage: repair.mjs --base origin/main")
    process.exit(2)
  }
  const beforeText = show(base, "data/mitigation-map.json")
  const beforeMap = beforeText ? JSON.parse(beforeText) : { papers: {} }
  const afterPath = "data/mitigation-map.json"
  const afterMap = fs.existsSync(afterPath) ? readMap(afterPath) : { papers: {} }
  let changed = 0
  for (const file of changedFiles()) {
    const before = show(base, file)
    const after = fs.readFileSync(file, "utf8")
    const pageId = file.replace(/^wiki\//, "").replace(/\.md$/, "")
    const next = repairPage({ before, after, pageId, beforeMap, afterMap })
    if (next === after) continue
    fs.writeFileSync(file, next)
    changed += 1
  }
  console.log(`mitigation repair: ${changed} file(s)`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
