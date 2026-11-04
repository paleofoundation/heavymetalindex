// Pick the next ingredient deposit that is marked DEPOSITED.
// LIVE and BUILT units are not eligible. One unit per run: the lowest id
// that still needs a page, skipping units named in --skip (open evidence-fill branches).
//
// The deposits repo is private and its ledger shape has varied, so this reader
// accepts a root ledger (json, jsonl, csv, or a markdown table) and a
// deposits/<UNIT>/ directory whose own status file or frontmatter wins.
//
//   node tools/evidence-fill/select-next-unit.mjs --root <deposits-checkout> [--skip ID,ID]
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const STATUS = new Set(["DEPOSITED", "LIVE", "BUILT"])
const UNIT_ID = /^HMI-[A-Z0-9]+(?:-[A-Z0-9]+)*$/
const SKIP_EXT = new Set([".pdf", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".tif", ".tiff", ".zip", ".gz"])

export function slugFromIngredientId(id) {
  const match = /^HMI-ING-(.+)-(\d+)$/.exec(id)
  if (!match) return null
  const slug = match[1].toLowerCase()
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ? slug : null
}

export function normalizeStatus(value) {
  if (typeof value !== "string") return null
  const status = value.trim().toUpperCase()
  return STATUS.has(status) ? status : null
}

function asText(value) {
  return typeof value === "string" ? value.trim() : ""
}

function kindOf(record, id) {
  const explicit = asText(record.kind || record.type || record.family || record.page_type || record.entity_type).toLowerCase()
  if (explicit.includes("ingredient")) return "ingredient"
  if (explicit.includes("metal")) return "metal"
  if (explicit.includes("product")) return "product"
  const page = asText(record.wiki_path || record.page || record.target || record.path || record.entity)
  if (page.includes("ingredients/")) return "ingredient"
  if (page.includes("metals/")) return "metal"
  if (page.includes("products/")) return "product"
  if (id.startsWith("HMI-METAL-")) return "metal"
  if (id.startsWith("HMI-ING-")) return "ingredient"
  if (id.startsWith("HMI-FILL-") && (record.slug || record.ingredient || record.ingredient_slug)) return "ingredient"
  return null
}

function slugOf(record, id) {
  const direct = asText(record.slug || record.ingredient_slug || record.ingredient || record.commodity).toLowerCase()
  if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(direct) && !direct.startsWith("hmi-")) return direct
  const page = asText(record.wiki_path || record.page || record.target || record.path || record.entity)
  const fromPath = page.match(/(?:^|\/)ingredients\/([a-z0-9-]+)(?:\.md)?$/)
  if (fromPath) return fromPath[1]
  return slugFromIngredientId(id)
}

function unitFromRecord(record, rank, dir) {
  if (!record || typeof record !== "object" || Array.isArray(record)) return null
  const id = asText(record.id || record.unit || record.unit_id || record.code).toUpperCase()
  const status = normalizeStatus(record.status || record.state || record.mark)
  if (!UNIT_ID.test(id) || !status) return null
  const kind = kindOf(record, id)
  const slug = slugOf(record, id)
  return { id, status, kind, slug, dir: dir || record.dir || "", rank }
}

function addUnit(map, unit) {
  if (!unit) return
  const prev = map.get(unit.id)
  if (!prev || unit.rank >= prev.rank) map.set(unit.id, unit)
}

function walkRecords(value, visit) {
  if (Array.isArray(value)) {
    for (const item of value) walkRecords(item, visit)
    return
  }
  if (!value || typeof value !== "object") return
  visit(value)
  for (const key of ["units", "deposits", "rows", "items", "ledger"]) {
    if (value[key]) walkRecords(value[key], visit)
  }
}

function readJsonRecords(text, visit) {
  const trimmed = text.trim()
  if (!trimmed) return
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    walkRecords(JSON.parse(trimmed), visit)
    return
  }
  for (const line of trimmed.split(/\r?\n/)) {
    if (!line.trim()) continue
    walkRecords(JSON.parse(line), visit)
  }
}

function readCsvRecords(text, visit) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim())
  if (lines.length < 2) return
  const header = splitCsv(lines[0]).map((cell) => cell.trim().toLowerCase())
  for (const line of lines.slice(1)) {
    const cells = splitCsv(line)
    const record = {}
    header.forEach((key, index) => {
      record[key] = cells[index] ?? ""
    })
    visit(record)
  }
}

function splitCsv(line) {
  const cells = []
  let current = ""
  let quoted = false
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"' && line[i + 1] === '"') {
      current += '"'
      i++
    } else if (char === '"') quoted = !quoted
    else if (char === "," && !quoted) {
      cells.push(current)
      current = ""
    } else current += char
  }
  cells.push(current)
  return cells
}

function readFrontmatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!match) return null
  const record = {}
  for (const line of match[1].split(/\r?\n/)) {
    const field = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line)
    if (!field) continue
    let value = field[2].trim()
    if (/^(['"]).*\1$/.test(value)) value = value.slice(1, -1)
    record[field[1]] = value
  }
  return record
}

function tableCells(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim())
}

function readMarkdownTable(text, visit) {
  const lines = text.split(/\r?\n/)
  for (let i = 0; i < lines.length - 1; i++) {
    if (!lines[i].includes("|")) continue
    const header = tableCells(lines[i]).map((cell) => cell.toLowerCase())
    const separator = tableCells(lines[i + 1])
    if (!separator.length || !separator.every((cell) => /^:?-+:?$/.test(cell))) continue
    if (!header.includes("status") || !(header.includes("id") || header.includes("unit"))) continue
    for (let row = i + 2; row < lines.length; row++) {
      if (!lines[row].includes("|")) break
      const raw = tableCells(lines[row])
      if (raw.length < header.length) continue
      const record = {}
      header.forEach((key, index) => {
        record[key] = raw[index] ?? ""
      })
      visit(record)
    }
  }
}

function ingestText(map, text, rank, dir, file) {
  const visit = (record) => addUnit(map, unitFromRecord(record, rank, dir))
  const lower = file.toLowerCase()
  const directoryId = dir ? path.basename(dir).toUpperCase() : ""
  try {
    if (lower.endsWith(".json") || lower.endsWith(".jsonl")) readJsonRecords(text, visit)
    else if (lower.endsWith(".csv")) readCsvRecords(text, visit)
    else if (lower.endsWith(".md")) {
      const frontmatter = readFrontmatter(text)
      if (frontmatter) {
        if (!asText(frontmatter.id || frontmatter.unit || frontmatter.unit_id || frontmatter.code) && directoryId) {
          frontmatter.id = directoryId
        }
        visit(frontmatter)
      }
      readMarkdownTable(text, visit)
    } else if (normalizeStatus(text) && directoryId) {
      visit({ id: directoryId, status: text, dir })
    }
  } catch {
    // A notes file that is not a ledger is not a unit. Keep scanning.
  }
}

function considerFile(map, root, file, rank, dir) {
  const ext = path.extname(file).toLowerCase()
  if (SKIP_EXT.has(ext)) return
  const stat = fs.statSync(file)
  if (!stat.isFile() || stat.size > 1_000_000) return
  ingestText(map, fs.readFileSync(file, "utf8"), rank, dir ? path.relative(root, dir) : "", path.basename(file))
}

export function collectUnits(root) {
  const map = new Map()
  if (!fs.existsSync(root)) return []
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isFile()) continue
    const lower = entry.name.toLowerCase()
    if (!(/\.(json|jsonl|csv|md)$/.test(lower) || lower === "status")) continue
    considerFile(map, root, path.join(root, entry.name), 1, "")
  }
  const deposits = path.join(root, "deposits")
  const parents = fs.existsSync(deposits) ? [deposits] : [root]
  for (const parent of parents) {
    for (const entry of fs.readdirSync(parent, { withFileTypes: true })) {
      if (!entry.isDirectory() || !UNIT_ID.test(entry.name.toUpperCase())) continue
      const dir = path.join(parent, entry.name)
      for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!file.isFile()) continue
        const lower = file.name.toLowerCase()
        if (!(/\.(json|jsonl|csv|md|txt)$/.test(lower) || lower === "status")) continue
        considerFile(map, root, path.join(dir, file.name), 2, dir)
      }
    }
  }
  return [...map.values()]
}

export function selectNextUnit(root, { skip = [] } = {}) {
  const skipIds = new Set(skip.map((id) => String(id).trim().toUpperCase()).filter(Boolean))
  const eligible = collectUnits(root)
    .filter((unit) => unit.status === "DEPOSITED" && unit.kind === "ingredient" && unit.slug && !skipIds.has(unit.id))
    .sort((a, b) => a.id.localeCompare(b.id, "en", { numeric: true }))
  const chosen = eligible[0]
  if (!chosen) return null
  if (!chosen.dir) chosen.dir = path.join("deposits", chosen.id)
  return chosen
}

function main() {
  const args = process.argv.slice(2)
  const rootFlag = args.indexOf("--root")
  const root = rootFlag >= 0 ? args[rootFlag + 1] : ""
  const skipFlag = args.indexOf("--skip")
  const skip = skipFlag >= 0 ? (args[skipFlag + 1] || "").split(",") : []
  if (!root) {
    console.error("usage: select-next-unit.mjs --root <deposits-checkout> [--skip ID,ID]")
    process.exit(2)
  }
  const unit = selectNextUnit(root, { skip })
  const payload = unit
    ? { unit: unit.id, slug: unit.slug, dir: unit.dir, status: unit.status }
    : { unit: null, slug: "", dir: "", status: "" }
  console.log(JSON.stringify(payload))
  const output = process.env.GITHUB_OUTPUT
  if (output) {
    fs.appendFileSync(output, `unit=${payload.unit ?? ""}\nslug=${payload.slug}\ndir=${payload.dir}\n`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
