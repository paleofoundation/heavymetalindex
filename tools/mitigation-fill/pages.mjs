// Choose the next ingredient and product pages for the mitigation fill.
// Zero mitigation citations come first. ingredients/olive-oil is first among
// pages that share that lowest count. The Mitigation heading is the H2 whose
// title starts with "Mitigation", starts with "Heavy metal mitigation and
// remediation", or is "Levers to reduce contamination".
//
//   node tools/mitigation-fill/pages.mjs [--root .] [--limit 3] [--skip ingredients/rice]
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

export const PRIORITY_PAGE = "ingredients/olive-oil"
export const DEFAULT_LIMIT = 8
const FAMILIES = ["ingredients", "products"]
const GENERIC_NAMES = new Set([
  "oil", "oils", "food", "foods", "metal", "metals", "product", "products",
  "plant", "plants", "water", "seed", "seeds", "powder", "juice", "milk",
])

export function parseFrontmatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!match) return {}
  const data = {}
  let key = null
  let list = null
  for (const line of match[1].split(/\r?\n/)) {
    if (/^\s+-\s+/.test(line) && key && list) {
      list.push(unquote(line.replace(/^\s+-\s+/, "").trim()))
      continue
    }
    if (/^\s+\S/.test(line)) continue
    const field = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line)
    if (!field) continue
    key = field[1]
    const raw = field[2].trim()
    if (!raw || raw === ">" || raw === ">-" || raw === "|" || raw === "|-") {
      list = []
      data[key] = list
      continue
    }
    list = null
    if (raw.startsWith("[") && raw.endsWith("]")) {
      data[key] = raw.slice(1, -1).split(",").map((item) => unquote(item.trim())).filter(Boolean)
      continue
    }
    data[key] = unquote(raw)
  }
  return data
}

function unquote(value) {
  if (/^(['"]).*\1$/.test(value)) return value.slice(1, -1)
  return value
}

export function isRetired(data) {
  if (data.retired === true || data.retired === "true") return true
  if (String(data.draft || "").toLowerCase() === "true") return true
  if (String(data.status || "").toLowerCase() === "retired") return true
  return typeof data.redirect_target === "string" && data.redirect_target.trim() !== ""
}

export function isMitigationTitle(title) {
  const heading = String(title || "").trim()
  return /^mitigation\b/i.test(heading)
    || /^heavy metal mitigation and remediation\b/i.test(heading)
    || /^levers to reduce contamination$/i.test(heading)
}

export function isReferencesTitle(title) {
  return /^references$/i.test(String(title || "").trim())
}

export function mitigationSection(content) {
  const lines = String(content || "").split(/\n/)
  let start = -1
  let title = ""
  for (let i = 0; i < lines.length; i++) {
    const heading = /^##\s+(.+?)\s*$/.exec(lines[i])
    if (!heading) continue
    if (start >= 0) {
      return { title, start, end: i, body: lines.slice(start, i).join("\n") }
    }
    if (isMitigationTitle(heading[1])) {
      start = i
      title = heading[1].trim()
    }
  }
  if (start >= 0) return { title, start, end: lines.length, body: lines.slice(start).join("\n") }
  return null
}

export function mitigationCitations(content) {
  const section = mitigationSection(content)
  if (!section) return { citations: 0, keys: [], title: null }
  const keys = new Set()
  const pattern = /\[\[sources\/([^\]|#\s]+)(?:#[^\]|]+)?(?:\|[^\]]*)?\]\]/g
  for (const match of section.body.matchAll(pattern)) keys.add(match[1])
  return { citations: keys.size, keys: [...keys].sort(), title: section.title }
}

export function searchNames(page) {
  const names = []
  const add = (value, required) => {
    const name = String(value || "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase()
    if (name.length < 3) return
    if (!required && GENERIC_NAMES.has(name)) return
    if (!names.includes(name)) names.push(name)
  }
  add(page.title, true)
  add(page.label, true)
  add(page.slug, true)
  const aliases = Array.isArray(page.aliases) ? page.aliases : []
  for (const alias of aliases) add(alias, false)
  return names
}

export function namePattern(name) {
  const words = String(name).toLowerCase().split(/\s+/).filter(Boolean)
  const last = words.pop()
  const head = words.map(escapeRegExp).join("\\s+")
  const tail = `${escapeRegExp(last)}s?`
  const body = head ? `${head}\\s+${tail}` : tail
  return new RegExp(`\\b${body}\\b`, "i")
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export function loadPages(root) {
  const pages = []
  for (const family of FAMILIES) {
    const dir = path.join(root, "wiki", family)
    if (!fs.existsSync(dir)) continue
    for (const file of fs.readdirSync(dir).sort()) {
      if (!file.endsWith(".md") || file === "index.md" || file.startsWith("_")) continue
      const slug = file.slice(0, -3)
      const full = path.join(dir, file)
      const text = fs.readFileSync(full, "utf8")
      const data = parseFrontmatter(text)
      if (isRetired(data)) continue
      const cited = mitigationCitations(text)
      pages.push({
        page: `${family}/${slug}`,
        family,
        slug,
        title: String(data.title || data.label || slug),
        label: String(data.label || data.title || slug),
        aliases: Array.isArray(data.aliases) ? data.aliases.map(String) : [],
        citations: cited.citations,
        citeKeys: cited.keys,
        mitigationTitle: cited.title,
      })
    }
  }
  return pages
}

export function comparePages(a, b) {
  if (a.citations !== b.citations) return a.citations - b.citations
  const aPriority = a.page === PRIORITY_PAGE ? 0 : 1
  const bPriority = b.page === PRIORITY_PAGE ? 0 : 1
  if (aPriority !== bPriority) return aPriority - bPriority
  return a.page.localeCompare(b.page)
}

export function selectPages(root, { limit = DEFAULT_LIMIT, skip = [] } = {}) {
  const skipIds = new Set()
  for (const item of skip) {
    const value = String(item || "").trim()
    if (!value) continue
    skipIds.add(value)
    if (!value.includes("/")) {
      skipIds.add(`ingredients/${value}`)
      skipIds.add(`products/${value}`)
    }
  }
  return loadPages(root)
    .filter((page) => !skipIds.has(page.page) && !skipIds.has(page.slug))
    .sort(comparePages)
    .slice(0, Math.max(0, limit))
}

function splitFrontmatter(text) {
  const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(text)
  if (!match) return { frontmatter: "", body: text }
  return { frontmatter: match[0], body: text.slice(match[0].length) }
}

function h2Blocks(body) {
  const lines = body.split("\n")
  const blocks = []
  const preamble = []
  let current = null
  for (const line of lines) {
    const heading = /^##\s+(.+?)\s*$/.exec(line)
    if (heading) {
      if (current) blocks.push(current)
      current = { title: heading[1].trim(), lines: [line] }
      continue
    }
    if (current) current.lines.push(line)
    else preamble.push(line)
  }
  if (current) blocks.push(current)
  return { preamble, blocks }
}

export function referenceInner(text) {
  const match = /<!-- BEGIN: hmi-page-references -->([\s\S]*?)<!-- END: hmi-page-references -->/.exec(text)
  return match ? match[1] : null
}

function stripReferences(body) {
  return body.replace(/\n*<!-- BEGIN: hmi-page-references -->[\s\S]*?<!-- END: hmi-page-references -->\n*/g, "\n")
}

// A fill may change the Mitigation section and may append inside the existing
// references marker. Frontmatter, hero, and every other section stay put.
export function pageEditAllowed(before, after) {
  const left = splitFrontmatter(before)
  const right = splitFrontmatter(after)
  if (left.frontmatter !== right.frontmatter) return { ok: false, reason: "frontmatter changed" }
  const refBefore = referenceInner(before)
  const refAfter = referenceInner(after)
  if (refBefore == null && refAfter != null) return { ok: false, reason: "references block added" }
  if (refBefore != null) {
    if (refAfter == null) return { ok: false, reason: "references block removed" }
    if (!refAfter.includes(refBefore.trim())) return { ok: false, reason: "references block rewrote existing lines" }
  }
  const a = h2Blocks(stripReferences(left.body))
  const b = h2Blocks(stripReferences(right.body))
  if (a.preamble.join("\n") !== b.preamble.join("\n")) return { ok: false, reason: "text before the first heading changed" }
  const rest = (blocks) => blocks.filter((block) => !isMitigationTitle(block.title) && !isReferencesTitle(block.title))
  const restA = rest(a.blocks)
  const restB = rest(b.blocks)
  if (restA.length !== restB.length) return { ok: false, reason: "section count changed" }
  for (let i = 0; i < restA.length; i++) {
    if (restA[i].title !== restB[i].title || restA[i].lines.join("\n") !== restB[i].lines.join("\n")) {
      return { ok: false, reason: `section changed: ${restA[i].title}` }
    }
  }
  const mitA = a.blocks.filter((block) => isMitigationTitle(block.title))
  const mitB = b.blocks.filter((block) => isMitigationTitle(block.title))
  if (mitB.length > 1) return { ok: false, reason: "more than one mitigation heading" }
  if (mitB.length === 0 && mitA.length > 0) return { ok: false, reason: "mitigation heading removed" }
  if (mitA.length === 1 && mitB.length === 1 && mitA[0].lines[0] !== mitB[0].lines[0]) {
    return { ok: false, reason: "mitigation heading renamed" }
  }
  if (mitA.length === 1 && mitB.length === 1) {
    for (const line of mitA[0].lines) {
      if (/<a\s+id=/.test(line) && !mitB[0].lines.includes(line)) {
        return { ok: false, reason: "mitigation anchor removed" }
      }
    }
  }
  return { ok: true, reason: "" }
}

export function additionsOnly(before, after) {
  const oldLines = String(before).split("\n")
  const newLines = String(after).split("\n")
  let index = 0
  for (const line of newLines) {
    if (index < oldLines.length && line === oldLines[index]) index += 1
  }
  return index === oldLines.length
}

function flag(args, name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : ""
}

function main() {
  const args = process.argv.slice(2)
  const root = flag(args, "--root") || process.cwd()
  const limit = Number(flag(args, "--limit") || DEFAULT_LIMIT)
  const skip = (flag(args, "--skip") || "").split(",").map((item) => item.trim()).filter(Boolean)
  if (!Number.isInteger(limit) || limit < 1 || limit > 20) {
    console.error("limit must be an integer from 1 to 20")
    process.exit(2)
  }
  const chosen = selectPages(root, { limit, skip })
  const payload = {
    pages: chosen.map((page) => page.page),
    queue: chosen.map((page) => ({
      page: page.page,
      citations: page.citations,
      mitigation_title: page.mitigationTitle,
    })),
  }
  console.log(JSON.stringify(payload))
  const output = process.env.GITHUB_OUTPUT
  if (output) {
    fs.appendFileSync(output, `pages=${payload.pages.join(",")}\ncount=${payload.pages.length}\n`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
