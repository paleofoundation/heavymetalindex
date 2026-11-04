// Fail a pull request whose diff adds supplier or manufacturer data, an em dash
// or en dash in wiki prose, or a placeholder hero image.
//
//   node tools/evidence-fill/diff-gate.mjs --base origin/main
//   node tools/evidence-fill/diff-gate.mjs --diff-file <unified-diff>
import fs from "node:fs"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"

const EM = "\u2014"
const EN = "\u2013"
const SUPPLIER = [
  new RegExp("\\bGRN\\s*609\\b", "i"),
  new RegExp("\\bGRN\\s*788\\b", "i"),
  new RegExp("\\bGRN\\s*804\\b", "i"),
  new RegExp("\\bGRN\\s*851\\b", "i"),
  new RegExp("Oryz" + "atein", "i"),
  new RegExp("\\bRPN" + "2026\\b"),
  new RegExp("\\bAx" + "iom\\b", "i"),
]
const HERO = /^\/static\/heroes\/[a-z0-9-]+\.webp$/
const PROSE_PREFIXES = ["wiki/"]
const SUPPLIER_PREFIXES = ["wiki/", "data/"]

export function isProsePath(file) {
  return file.endsWith(".md") && PROSE_PREFIXES.some((prefix) => file.startsWith(prefix))
}

export function isSupplierPath(file) {
  if (file.startsWith("tools/evidence-fill/")) return false
  if (file.startsWith(".github/")) return false
  return SUPPLIER_PREFIXES.some((prefix) => file.startsWith(prefix))
}

function supplierHit(text) {
  return SUPPLIER.some((pattern) => pattern.test(text))
}

function placeholderHero(value) {
  const image = String(value || "").trim().replace(/^['"]|['"]$/g, "")
  if (!image || image === "null") return "missing hero"
  if (/section-[a-z0-9-]*\.webp/.test(image)) return "section placeholder"
  if (/placeholder|placehold\.co|picsum|via\.placeholder/i.test(image)) return "placeholder image"
  if (!HERO.test(image)) return "hero path outside /static/heroes/<name>.webp"
  return null
}

function pathProblem(file) {
  const base = file.split("/").pop() || file
  if (/section-[a-z0-9-]*\.webp$/.test(base)) return "section placeholder image"
  if (/placeholder/i.test(base) && /\.(webp|png|jpe?g|gif|svg)$/i.test(base)) return "placeholder image file"
  return null
}

export function violationsInDiff(diffText) {
  const violations = []
  let file = null
  let newFile = false
  const flushNew = () => {
    if (!newFile || !file) return
    const problem = pathProblem(file)
    if (problem) violations.push(`${file}: ${problem}`)
  }
  for (const line of diffText.split(/\n/)) {
    if (line.startsWith("diff --git ")) {
      flushNew()
      const match = / b\/(.+)$/.exec(line)
      file = match ? match[1] : null
      newFile = false
      continue
    }
    if (line.startsWith("new file mode")) {
      newFile = true
      continue
    }
    if (line.startsWith("+++ ")) {
      const raw = line.slice(4).trim()
      if (raw !== "/dev/null") file = raw.startsWith("b/") ? raw.slice(2) : raw
      continue
    }
    if (!file || !line.startsWith("+") || line.startsWith("+++")) continue
    const text = line.slice(1)
    if (isSupplierPath(file) && supplierHit(text)) violations.push(`${file}: supplier or manufacturer data`)
    if (isProsePath(file) && (text.includes(EM) || text.includes(EN))) violations.push(`${file}: em dash or en dash in new prose`)
    const hero = /hero_image:\s*(.*)$/.exec(text)
    if (hero && isProsePath(file)) {
      const problem = placeholderHero(hero[1])
      if (problem) violations.push(`${file}: ${problem}`)
    }
    if (isProsePath(file) && /!\[[^\]]*\]\(([^)]+)\)/.test(text)) {
      const target = /!\[[^\]]*\]\(([^)]+)\)/.exec(text)[1]
      if (placeholderHero(target) && /placeholder|section-|placehold|picsum/i.test(target)) {
        violations.push(`${file}: placeholder image`)
      }
    }
  }
  flushNew()
  return [...new Set(violations)]
}

export function baselineScopeErrors(beforeText, afterText, entity) {
  const ids = (text) => text.split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith("#"))
  const before = ids(beforeText)
  const after = ids(afterText)
  const beforeSet = new Set(before)
  const afterSet = new Set(after)
  const errors = []
  const added = after.filter((id) => !beforeSet.has(id))
  const removed = before.filter((id) => !afterSet.has(id))
  if (added.length) errors.push(`thin-with-evidence baseline gained ${added.join(", ")}`)
  const extra = removed.filter((id) => id !== entity)
  if (extra.length) errors.push(`thin-with-evidence baseline dropped unrelated pages: ${extra.join(", ")}`)
  if (entity && beforeSet.has(entity) && afterSet.has(entity)) errors.push(`${entity} is still thin with evidence`)
  return errors
}

function flag(args, name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : ""
}

function main() {
  const args = process.argv.slice(2)
  const before = flag(args, "--baseline-before")
  const after = flag(args, "--baseline-after")
  if (before || after) {
    const entity = flag(args, "--entity")
    if (!before || !after || !entity) {
      console.error("usage: diff-gate.mjs --baseline-before <file> --baseline-after <file> --entity ingredients/<slug>")
      process.exit(2)
    }
    const errors = baselineScopeErrors(fs.readFileSync(before, "utf8"), fs.readFileSync(after, "utf8"), entity)
    if (!errors.length) {
      console.log("evidence-fill baseline scope: pass")
      return
    }
    for (const error of errors) console.error(error)
    process.exit(1)
  }
  const diffFile = flag(args, "--diff-file")
  let diff
  if (diffFile) diff = fs.readFileSync(diffFile, "utf8")
  else {
    const base = flag(args, "--base")
    if (!base) {
      console.error("usage: diff-gate.mjs --base <ref> | --diff-file <file>")
      process.exit(2)
    }
    diff = execFileSync("git", ["diff", "-U0", `${base}...HEAD`], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
  }
  const violations = violationsInDiff(diff)
  if (!violations.length) {
    console.log("evidence-fill diff gate: pass")
    return
  }
  for (const violation of violations) console.error(violation)
  console.error(`evidence-fill diff gate: ${violations.length} violation(s)`)
  process.exit(1)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
