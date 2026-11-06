// Check a mitigation fill before a pull request is opened.
// Page edits stay inside the Mitigation section, plus an appended references
// line. Every new effect is a quotation of a saved full text.
//
//   node tools/mitigation-fill/verify.mjs --base origin/main --fulltext <dir> --pages ingredients/olive-oil
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"
import { violationsInDiff } from "../evidence-fill/diff-gate.mjs"
import { additionsOnly, mitigationSection, pageEditAllowed } from "./pages.mjs"
import { mappingsFor, readMap } from "./record.mjs"
import { fulltextName, quoteInText } from "./search.mjs"

const ALLOWED = [
  /^wiki\/ingredients\/[^/]+\.md$/,
  /^wiki\/products\/[^/]+\.md$/,
  /^wiki\/sources\/[^/]+\.md$/,
  /^wiki\/log\.md$/,
  /^data\/mitigation-map\.json$/,
  /^data\/mitigation-coverage\.json$/,
  /^docs\/mitigation-coverage\.md$/,
]

function flag(args, name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : ""
}

export function allowedPath(file) {
  return ALLOWED.some((pattern) => pattern.test(file))
}

function freshMappings(beforeMap, afterMap, pageId) {
  return mappingsFor(afterMap, pageId).filter((item) => {
    const prior = ((beforeMap.papers || {})[item.doi] || {}).mappings || []
    return !prior.some((mapping) => mapping.effect_as_printed === item.effect_as_printed)
  })
}

export function fanoutPages(beforeMap, afterMap) {
  const ids = new Set()
  for (const paper of Object.values(afterMap.papers || {})) {
    const prior = ((beforeMap.papers || {})[paper.doi] || {}).mappings || []
    for (const mapping of paper.mappings || []) {
      if (prior.some((item) => item.effect_as_printed === mapping.effect_as_printed)) continue
      for (const slug of mapping.ingredients || []) ids.add(`ingredients/${slug}`)
      for (const slug of mapping.products || []) ids.add(`products/${slug}`)
    }
  }
  return [...ids].sort()
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
}

// A path missing from the base is a new file. `git show <base>:<path>` writes
// "exists on disk, but not in '<base>'" to stderr and exits 128 for that case.
// Capture both streams so a new source page stays a successful absence.
export function readGitFile(base, file) {
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

export function filesAgainstBase(status, nameStatus) {
  const files = []
  const add = (file) => {
    let name = String(file || "").trim()
    if (!name || name.startsWith("\"")) return
    if (name.includes(" -> ")) name = name.split(" -> ").pop().trim()
    if (!name || files.includes(name)) return
    files.push(name)
  }
  for (const line of String(nameStatus || "").split(/\n/)) {
    if (!line.trim()) continue
    add(line.split("\t").pop())
  }
  for (const line of String(status || "").split(/\n/)) {
    if (!line.trim()) continue
    add(line.slice(3))
  }
  return files
}

export function verifyTree({ root, pages, fulltextDir, status, diff, readBase, nameStatus = "" }) {
  const errors = []
  const changed = filesAgainstBase(status, nameStatus)
  for (const file of changed) {
    if (!allowedPath(file)) errors.push(`path outside the mitigation fill: ${file}`)
  }
  for (const violation of violationsInDiff(diff)) errors.push(violation)
  const beforeText = readBase("data/mitigation-map.json")
  const beforeMap = beforeText ? JSON.parse(beforeText) : { papers: {} }
  const afterPath = path.join(root, "data/mitigation-map.json")
  const afterMap = fs.existsSync(afterPath) ? readMap(afterPath) : { papers: {} }
  for (const [doi, paper] of Object.entries(afterMap.papers || {})) {
    const prior = (beforeMap.papers || {})[doi]
    const priorEffects = new Set(((prior && prior.mappings) || []).map((item) => item.effect_as_printed))
    for (const mapping of paper.mappings || []) {
      if (priorEffects.has(mapping.effect_as_printed)) continue
      const file = path.join(fulltextDir, fulltextName(doi))
      if (!fs.existsSync(file)) {
        errors.push(`${doi}: new effect has no saved full text`)
        continue
      }
      if (!quoteInText(mapping.effect_as_printed, fs.readFileSync(file, "utf8"))) {
        errors.push(`${doi}: effect is not a quotation of the saved full text`)
      }
    }
    if (paper.source_page && !fs.existsSync(path.join(root, "wiki", `${paper.source_page}.md`))) {
      errors.push(`${doi}: missing ${paper.source_page}`)
    }
  }
  for (const file of changed) {
    if (!/^wiki\/(?:ingredients|products)\/[^/]+\.md$/.test(file)) continue
    const before = readBase(file)
    const after = fs.readFileSync(path.join(root, file), "utf8")
    if (before == null) {
      errors.push(`${file}: the fill does not create new ingredient or product pages`)
      continue
    }
    const edit = pageEditAllowed(before, after)
    if (!edit.ok) errors.push(`${file}: ${edit.reason}`)
    const pageId = file.replace(/^wiki\//, "").replace(/\.md$/, "")
    const section = mitigationSection(after)
    const changedSection = (mitigationSection(before) || {}).body !== (section || {}).body
    if (changedSection && !freshMappings(beforeMap, afterMap, pageId).length) {
      errors.push(`${pageId}: mitigation prose changed without a new quoted effect`)
    }
  }
  for (const pageId of fanoutPages(beforeMap, afterMap)) {
    const pageFile = path.join(root, "wiki", `${pageId}.md`)
    if (!fs.existsSync(pageFile)) continue
    const fresh = freshMappings(beforeMap, afterMap, pageId)
    if (!fresh.length) continue
    const after = fs.readFileSync(pageFile, "utf8")
    const section = mitigationSection(after)
    for (const item of fresh) {
      const key = String(item.source_page || "").replace(/^sources\//, "")
      if (key && !after.includes(`[[sources/${key}`)) errors.push(`${pageId}: does not cite ${key}`)
      if (item.unit_ambiguous && section && !/as printed/i.test(section.body)) {
        errors.push(`${pageId}: ambiguous unit is not flagged as printed`)
      }
      if (item.unit_ambiguous && section && !/does not state/i.test(section.body)) {
        errors.push(`${pageId}: ambiguous unit does not say the paper does not state the basis`)
      }
      if (section && /data-mitigation-gap/.test(section.body)) errors.push(`${pageId}: gap notice remains after a mapped effect`)
      if (item.evidence_scope === "parent-matrix") {
        const note = item.display_note || `Evidence from ${item.parent_matrix}, not measured in this product.`
        if (!after.includes(note)) errors.push(`${pageId}: parent-matrix row is missing its scope line`)
      }
    }
  }
  if (changed.includes("wiki/log.md")) {
    const before = readBase("wiki/log.md") || ""
    const after = fs.readFileSync(path.join(root, "wiki/log.md"), "utf8")
    if (!additionsOnly(before, after)) errors.push("wiki/log.md: existing lines changed")
    const pagesChanged = changed.some((file) => /^wiki\/(?:ingredients|products)\//.test(file))
    if (pagesChanged && !/## \[\d{4}-\d{2}-\d{2}\] ingest \| mitigation evidence/.test(after)) {
      errors.push("wiki/log.md: missing mitigation evidence entry")
    }
  } else if (changed.some((file) => /^wiki\/(?:ingredients|products)\//.test(file))) {
    errors.push("wiki/log.md: a page edit needs a log entry")
  }
  for (const file of changed) {
    if (!file.startsWith("wiki/sources/") || !file.endsWith(".md")) continue
    if (readBase(file) != null) errors.push(`${file}: do not edit an existing source page`)
    const text = fs.readFileSync(path.join(root, file), "utf8")
    if (!/^---\n[\s\S]*\ntype:\s*source\b/m.test(text) && !/^type:\s*source\b/m.test(text)) errors.push(`${file}: missing type source`)
    if (/\bingest_status:\s*complete\b/.test(text)) errors.push(`${file}: do not mark the ingest complete`)
  }
  return errors
}

function main() {
  const args = process.argv.slice(2)
  const base = flag(args, "--base")
  const fulltextDir = flag(args, "--fulltext") || ""
  const pages = (flag(args, "--pages") || "").split(",").map((item) => item.trim()).filter(Boolean)
  if (!base) {
    console.error("usage: verify.mjs --base origin/main --fulltext <dir> --pages ingredients/olive-oil")
    process.exit(2)
  }
  const status = git(["status", "--porcelain"])
  // Triple-dot is the pull request diff. A two-dot diff against origin/main
  // also lists commits that landed on main while the fill was running.
  const nameStatus = git(["diff", "--name-status", `${base}...HEAD`])
  const diff = git(["diff", "-U0", `${base}...HEAD`])
  const untracked = status.split(/\n/).filter((line) => line.startsWith("?? "))
  let extra = ""
  for (const line of untracked) {
    const file = line.slice(3).trim()
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) continue
    const body = fs.readFileSync(file, "utf8")
    extra += `diff --git a/${file} b/${file}\nnew file mode 100644\n+++ b/${file}\n`
    extra += body.split(/\n/).map((item) => `+${item}`).join("\n") + "\n"
  }
  const errors = verifyTree({
    root: process.cwd(),
    pages,
    fulltextDir,
    status,
    nameStatus,
    diff: diff + extra,
    readBase: (file) => readGitFile(base, file),
  })
  if (errors.length) {
    for (const error of errors) console.error(error)
    console.error(`mitigation verify: ${errors.length} error(s)`)
    process.exit(1)
  }
  console.log("mitigation verify: pass")
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
