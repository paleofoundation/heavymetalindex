// Pick the next ingredient or product deposit for one evidence fill.
//
// When <deposits root>/graph/next_work.json exists, the first item with
// builder hmi-evidence-fill, an empty blocked_by list, and an id outside
// --skip wins. The work list may be a top-level array, an array or id map
// under items/work/nodes/queue (including one level under meta or data), or
// fields nested in properties. A numeric 0 or boolean false blocker is empty.
// A fill item with no top-level slug still qualifies when pages[] includes an
// ingredient or product path or URL. On one page, path is preferred over URL.
// An explicit ingredient or product kind prefers a page of that family;
// otherwise the first usable page wins. When the graph has no eligible item,
// the lowest DEPOSITED ingredient or product id that still needs a page is
// used. LIVE, BUILT, and later ledger states are not eligible.
// --skip names open evidence-fill branches. When nothing is picked, stderr
// names how many graph items were visible and why the rest were skipped.
//
// The deposits repo is private and its ledger shape has varied, so this reader
// accepts a root ledger (json, jsonl, csv, or a markdown table) and the same
// files inside deposits/, ledger/, units/, or queue/. A deposits/<UNIT>/
// status file wins on status. It keeps a slug or kind already recorded on the
// ledger row, because a bare DEPOSITED mark would otherwise erase them and
// the picker would return nothing.
//
//   node tools/evidence-fill/select-next-unit.mjs --root <deposits-checkout> [--skip ID,ID]
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const STATUS = new Set([
  "DEPOSITED",
  "LIVE",
  "BUILT",
  "INGESTING",
  "PR_OPEN",
  "FIX",
  "MERGED",
  "SHIPPED",
  "PARKED",
  "QUEUED",
  "RETRIEVING",
  "TOPIC",
  "WISHLIST",
  "AUTHOR_ASKED",
])
const NEST_KEYS = new Set(["units", "deposits", "rows", "items", "ledger", "queue", "fills", "records", "entries"])
const UNIT_ID = /^HMI-[A-Z0-9]+(?:-[A-Z0-9]+)*$/
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const SKIP_EXT = new Set([".pdf", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".tif", ".tiff", ".zip", ".gz"])
const HINT_NAMES = new Set([
  "slug",
  "slug.txt",
  "ingredient",
  "ingredient.txt",
  "page",
  "page.txt",
  "target",
  "target.txt",
  "wiki",
  "wiki.txt",
])
const LEDGER_DIRS = ["deposits", "ledger", "units", "queue"]

export function slugFromIngredientId(id) {
  const match = /^HMI-ING-(.+)-(\d+)$/.exec(id)
  if (!match) return null
  const slug = match[1].toLowerCase()
  return SLUG.test(slug) ? slug : null
}

export function normalizeStatus(value) {
  if (typeof value !== "string") return null
  const status = value.trim().toUpperCase().replace(/[\s-]+/g, "_")
  return STATUS.has(status) ? status : null
}

function asText(value) {
  return typeof value === "string" ? value.trim() : ""
}

function stripBom(text) {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text
}

function normalizeKeys(record) {
  const out = {}
  for (const [key, value] of Object.entries(record)) {
    const norm = key.trim().toLowerCase().replace(/[\s/-]+/g, "_")
    if (out[norm] === undefined) out[norm] = value
  }
  return out
}

const FAMILY_PAGE = /(?:^|\/)(ingredients|products)\/([a-z0-9-]+)(?:\.md)?\/?(?:[?#].*)?$/i

function familyPage(text) {
  const match = FAMILY_PAGE.exec(String(text || "").replace(/\\/g, "/"))
  if (!match) return null
  const slug = match[2].toLowerCase()
  if (!SLUG.test(slug) || slug.startsWith("hmi-")) return null
  return { kind: match[1].toLowerCase() === "ingredients" ? "ingredient" : "product", slug }
}

function directPage(record) {
  return asText(
    record.wiki_path ||
      record.page ||
      record.page_url ||
      record.target ||
      record.path ||
      record.entity ||
      record.url ||
      record.wiki,
  )
}

function pageCandidates(page) {
  if (typeof page === "string") {
    const text = asText(page)
    return text ? [text] : []
  }
  if (!page || typeof page !== "object" || Array.isArray(page)) return []
  const fields = normalizeKeys(page)
  return [
    fields.path,
    fields.wiki_path,
    fields.page,
    fields.page_url,
    fields.target,
    fields.url,
    fields.wiki,
    fields.href,
  ]
    .map(asText)
    .filter(Boolean)
}

function listedPages(record) {
  const pages = record.pages
  if (Array.isArray(pages)) return pages
  if (pages && typeof pages === "object") return [pages]
  return []
}

function explicitFamily(record) {
  const explicit = asText(record.kind || record.type || record.family || record.page_type || record.entity_type).toLowerCase()
  if (explicit.includes("ingredient")) return "ingredient"
  if (explicit.includes("product")) return "product"
  return null
}

function pageOf(record) {
  const direct = directPage(record)
  const directFamily = familyPage(direct)
  const preferred = explicitFamily(record)
  if (directFamily && (!preferred || directFamily.kind === preferred)) return direct
  let firstFamily = directFamily ? direct : ""
  let firstText = direct
  for (const page of listedPages(record)) {
    for (const text of pageCandidates(page)) {
      if (!firstText) firstText = text
      const family = familyPage(text)
      if (!family) continue
      if (!firstFamily) firstFamily = text
      if (!preferred || family.kind === preferred) return text
    }
  }
  return firstFamily || firstText
}

function kindOf(record, id) {
  const explicit = asText(record.kind || record.type || record.family || record.page_type || record.entity_type).toLowerCase()
  if (explicit.includes("ingredient")) return "ingredient"
  if (explicit.includes("metal")) return "metal"
  if (explicit.includes("product")) return "product"
  const page = pageOf(record)
  const family = familyPage(page)
  if (family) return family.kind
  if (page.includes("metals/")) return "metal"
  if (id.startsWith("HMI-METAL-")) return "metal"
  if (id.startsWith("HMI-ING-")) return "ingredient"
  if (id.startsWith("HMI-FILL-") && (record.slug || record.ingredient || record.ingredient_slug)) return "ingredient"
  return null
}

function directSlug(record) {
  const direct = asText(
    record.slug ||
      record.ingredient_slug ||
      record.ingredient ||
      record.product_slug ||
      record.product ||
      record.commodity ||
      record.page_slug ||
      record.wiki_slug,
  ).toLowerCase()
  if (SLUG.test(direct) && !direct.startsWith("hmi-")) return direct
  return null
}

function slugOf(record, id) {
  return directSlug(record) || familyPage(pageOf(record))?.slug || slugFromIngredientId(id)
}

function unitFromRecord(record, rank, dir) {
  if (!record || typeof record !== "object" || Array.isArray(record)) return null
  const fields = normalizeKeys(record)
  const id = asText(fields.id || fields.unit || fields.unit_id || fields.code).toUpperCase()
  const status = normalizeStatus(fields.status || fields.state || fields.mark)
  if (!UNIT_ID.test(id) || !status) return null
  const kind = kindOf(fields, id)
  const slug = slugOf(fields, id)
  const recordDir = asText(fields.dir || fields.deposit_dir || fields.folder)
  return { id, status, kind, slug, dir: dir || recordDir, rank }
}

function addUnit(map, unit) {
  if (!unit) return
  const prev = map.get(unit.id)
  if (!prev) {
    map.set(unit.id, unit)
    return
  }
  const [higher, lower] = unit.rank >= prev.rank ? [unit, prev] : [prev, unit]
  map.set(unit.id, {
    id: higher.id,
    status: higher.status,
    kind: higher.kind || lower.kind,
    slug: higher.slug || lower.slug,
    dir: higher.dir || lower.dir,
    rank: higher.rank,
  })
}

function walkRecords(value, visit) {
  if (Array.isArray(value)) {
    for (const item of value) walkRecords(item, visit)
    return
  }
  if (!value || typeof value !== "object") return
  visit(value)
  for (const [key, child] of Object.entries(value)) {
    if (NEST_KEYS.has(key.toLowerCase()) && child) walkRecords(child, visit)
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
    const header = tableCells(lines[i]).map((cell) => cell.toLowerCase().replace(/[\s/-]+/g, "_"))
    const separator = tableCells(lines[i + 1])
    if (!separator.length || !separator.every((cell) => /^:?-+:?$/.test(cell))) continue
    if (!header.includes("status") || !(header.includes("id") || header.includes("unit") || header.includes("unit_id"))) continue
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

function rememberHint(hints, id, text, dir) {
  if (!UNIT_ID.test(id)) return
  const line = text.trim().split(/\r?\n/, 1)[0].trim().replace(/^['"]|['"]$/g, "")
  const ingredient = line.match(/ingredients\/([a-z0-9-]+)(?:\.md)?\/?$/i)
  const product = line.match(/products\/([a-z0-9-]+)(?:\.md)?\/?$/i)
  const prev = hints.get(id) || { slug: "", kind: null, dir: "" }
  if (ingredient) {
    hints.set(id, { slug: ingredient[1].toLowerCase(), kind: "ingredient", dir: dir || prev.dir })
    return
  }
  if (product) {
    hints.set(id, { slug: product[1].toLowerCase(), kind: "product", dir: dir || prev.dir })
    return
  }
  if (!prev.slug && SLUG.test(line) && !line.startsWith("hmi-")) {
    hints.set(id, { ...prev, slug: line, dir: prev.dir || dir })
  }
}

function ingestText(map, hints, text, rank, dir, file) {
  const visit = (record) => addUnit(map, unitFromRecord(record, rank, dir))
  const lower = file.toLowerCase()
  const directoryId = dir ? path.basename(dir).toUpperCase() : ""
  const body = stripBom(text)
  try {
    if (lower.endsWith(".json") || lower.endsWith(".jsonl")) readJsonRecords(body, visit)
    else if (lower.endsWith(".csv")) readCsvRecords(body, visit)
    else if (lower.endsWith(".md")) {
      const frontmatter = readFrontmatter(body)
      if (frontmatter) {
        if (!asText(frontmatter.id || frontmatter.unit || frontmatter.unit_id || frontmatter.code) && directoryId) {
          frontmatter.id = directoryId
        }
        visit(frontmatter)
      }
      readMarkdownTable(body, visit)
    } else if (normalizeStatus(body) && directoryId) {
      visit({ id: directoryId, status: body, dir })
    }
  } catch {
    // A notes file that is not a ledger is not a unit. Keep scanning.
  }
  if (directoryId && HINT_NAMES.has(lower)) rememberHint(hints, directoryId, body, dir)
}

function maxBytes(file) {
  const base = path.basename(file).toLowerCase()
  if (/(ledger|units|queue|manifest|deposits)/.test(base)) return 8_000_000
  return 1_000_000
}

function considerFile(map, hints, root, file, rank, dir) {
  const ext = path.extname(file).toLowerCase()
  if (SKIP_EXT.has(ext)) return
  const stat = fs.statSync(file)
  if (!stat.isFile() || stat.size > maxBytes(file)) return
  ingestText(map, hints, fs.readFileSync(file, "utf8"), rank, dir ? path.relative(root, dir) : "", path.basename(file))
}

function scanLedgerDir(map, hints, root, dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile()) continue
    const lower = entry.name.toLowerCase()
    if (!(/\.(json|jsonl|csv|md)$/.test(lower) || lower === "status")) continue
    considerFile(map, hints, root, path.join(dir, entry.name), 1, "")
  }
}

function scanUnitDirs(map, hints, root, parent) {
  if (!fs.existsSync(parent)) return
  for (const entry of fs.readdirSync(parent, { withFileTypes: true })) {
    if (!entry.isDirectory() || !UNIT_ID.test(entry.name.toUpperCase())) continue
    const dir = path.join(parent, entry.name)
    for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!file.isFile()) continue
      const lower = file.name.toLowerCase()
      if (!(/\.(json|jsonl|csv|md|txt)$/.test(lower) || lower === "status" || HINT_NAMES.has(lower))) continue
      considerFile(map, hints, root, path.join(dir, file.name), 2, dir)
    }
  }
}

function applyHints(map, hints) {
  for (const [id, hint] of hints) {
    const unit = map.get(id)
    if (!unit) continue
    if (!unit.slug && hint.slug) unit.slug = hint.slug
    if (!unit.kind && hint.kind) unit.kind = hint.kind
    if (!unit.dir && hint.dir) unit.dir = hint.dir
  }
}

export function collectUnits(root) {
  const map = new Map()
  const hints = new Map()
  if (!fs.existsSync(root)) return []
  scanLedgerDir(map, hints, root, root)
  for (const name of LEDGER_DIRS) scanLedgerDir(map, hints, root, path.join(root, name))
  const deposits = path.join(root, "deposits")
  const parents = fs.existsSync(deposits) ? [deposits] : [root]
  for (const parent of parents) scanUnitDirs(map, hints, root, parent)
  applyHints(map, hints)
  return [...map.values()]
}

const PAGE_KINDS = new Set(["ingredient", "product"])

function skipIdsOf(skip) {
  return new Set((skip || []).map((id) => String(id).trim().toUpperCase()).filter(Boolean))
}

const WORK_KEYS = ["items", "work", "next_work", "queue", "units", "nodes", "jobs", "tasks", "fills", "records", "entries", "rows"]
const FLATTEN_KEYS = ["properties", "props", "attrs", "attributes", "data", "fields", "meta"]

function blockedByEmpty(value) {
  if (value == null || value === false) return true
  if (typeof value === "number") return value === 0
  if (Array.isArray(value)) {
    return !value.some((item) => {
      if (item == null) return false
      if (typeof item === "string") return asText(item) !== ""
      if (typeof item === "object") return asText(item.id || item.unit || item.unit_id || "") !== ""
      return true
    })
  }
  if (typeof value === "string") {
    const text = asText(value).toLowerCase()
    return text === "" || text === "0" || text === "none" || text === "false" || text === "[]" || text === "{}"
  }
  if (typeof value === "object") return Object.keys(value).length === 0
  return false
}

function asItemList(value) {
  if (Array.isArray(value)) return value
  if (!value || typeof value !== "object") return null
  const entries = Object.entries(value)
  if (!entries.length) return null
  const objects = entries.filter(([, item]) => item && typeof item === "object" && !Array.isArray(item))
  if (objects.length !== entries.length) return null
  return objects.map(([key, item]) => {
    if (asText(item.id || item.unit || item.unit_id || item.code)) return item
    return { id: key, ...item }
  })
}

function looksLikeWork(item) {
  return Boolean(item && (item.builder || item.blocked_by || item.blockedBy || item.slug || item.id || item.unit || item.unit_id))
}

function collectWorkLists(node, via, depth, found) {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    if (node.some((item) => item && typeof item === "object" && !Array.isArray(item))) found.push({ via: via || "$", items: node })
    return
  }
  if (depth >= 3) return
  const mapped = asItemList(node)
  if (mapped && mapped.some(looksLikeWork)) found.push({ via: via || "$map", items: mapped })
  for (const [key, value] of Object.entries(node)) {
    collectWorkLists(value, via ? `${via}.${key}` : key, depth + 1, found)
  }
}

function fillScore(items) {
  let fill = 0
  let objects = 0
  for (const item of items) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue
    objects++
    if (builderOf(normalizeKeys(flattenItem(item))) === "hmi-evidence-fill") fill++
  }
  return { fill, objects }
}

function knownRank(via) {
  const key = via.split(".").pop()
  const index = WORK_KEYS.indexOf(key)
  return index === -1 ? WORK_KEYS.length : index
}

function locateWorkItems(parsed) {
  if (Array.isArray(parsed)) return { via: "$", items: parsed }
  const found = []
  collectWorkLists(parsed, "", 0, found)
  if (!found.length) return { via: "", items: [] }
  const ranked = found.map((entry) => ({ ...entry, ...fillScore(entry.items) }))
  ranked.sort((a, b) => b.fill - a.fill || knownRank(a.via) - knownRank(b.via) || b.objects - a.objects)
  return ranked[0]
}

function flattenItem(item) {
  if (!item || typeof item !== "object" || Array.isArray(item)) return item
  const out = { ...item }
  for (const key of FLATTEN_KEYS) {
    const child = item[key]
    if (!child || typeof child !== "object" || Array.isArray(child)) continue
    for (const [childKey, value] of Object.entries(child)) {
      if (out[childKey] === undefined) out[childKey] = value
    }
  }
  return out
}

function builderOf(fields) {
  const direct = asText(fields.builder)
  if (direct) return direct
  const labels = fields.labels || fields.tags || fields.roles
  if (!Array.isArray(labels)) return ""
  return labels.map((item) => asText(typeof item === "string" ? item : item?.id || item?.name || "")).find((item) => item === "hmi-evidence-fill") || ""
}

function blockerOf(fields) {
  if (fields.blocked_by !== undefined) return fields.blocked_by
  if (fields.blockedby !== undefined) return fields.blockedby
  if (fields.blocked !== undefined) return fields.blocked
  if (fields.depends_on !== undefined) return fields.depends_on
  if (fields.dependencies !== undefined) return fields.dependencies
  return undefined
}

function namedSlug(fields) {
  const named = asText(fields.name || fields.label || fields.title).toLowerCase()
  if (SLUG.test(named) && !named.startsWith("hmi-")) return named
  return null
}

function shortValue(value) {
  if (value == null) return value === null ? null : "empty"
  if (Array.isArray(value)) return `array:${value.length}`
  if (typeof value === "object") return `object:${Object.keys(value).slice(0, 12).join(",")}`
  if (typeof value === "string") return value.length > 80 ? `string:${value.length}` : value
  return value
}

function sampleItem(item) {
  if (!item || typeof item !== "object" || Array.isArray(item)) return null
  const fields = normalizeKeys(flattenItem(item))
  const sample = { keys: Object.keys(fields).slice(0, 24) }
  for (const key of ["id", "unit", "unit_id", "builder", "kind", "type", "family", "slug", "status", "blocked_by", "blockedby", "blocked", "dir", "page"]) {
    if (fields[key] !== undefined) sample[key] = shortValue(fields[key])
  }
  return sample
}

function tally(map, key) {
  const name = key || "(none)"
  map.set(name, (map.get(name) || 0) + 1)
}

function checkoutCensus(root) {
  const census = {}
  for (const name of ["graph/next_work.json", "deposits", "ledger", "units", "queue"]) {
    const full = path.join(root, name)
    if (!fs.existsSync(full)) {
      census[name] = "absent"
      continue
    }
    const stat = fs.statSync(full)
    census[name] = stat.isDirectory() ? "dir" : stat.size
  }
  return census
}

function emptySkipped() {
  return { no_builder: 0, other_builder: 0, blocked: 0, bad_id: 0, skip_list: 0, no_slug: 0, not_object: 0 }
}

function readGraph(root, units, { skip = [] } = {}) {
  const file = path.join(root, "graph", "next_work.json")
  const graph = {
    present: false,
    bytes: 0,
    parse_error: "",
    top_keys: [],
    via: "",
    items: 0,
    eligible: 0,
    skipped: emptySkipped(),
    builders: [],
    blocker_types: [],
    sample: null,
    unit: null,
    census: checkoutCensus(root),
  }
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return graph
  graph.present = true
  graph.bytes = fs.statSync(file).size
  let parsed
  try {
    parsed = JSON.parse(stripBom(fs.readFileSync(file, "utf8")))
  } catch (error) {
    graph.parse_error = error && error.name ? error.name : "Error"
    return graph
  }
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) graph.top_keys = Object.keys(parsed).slice(0, 24)
  const located = locateWorkItems(parsed)
  graph.via = located.via
  graph.items = located.items.length
  if (!located.items.length) {
    graph.sample = sampleItem(parsed)
    return graph
  }
  graph.sample = sampleItem(located.items[0])
  const byId = new Map(units.map((unit) => [unit.id, unit]))
  const skipIds = skipIdsOf(skip)
  const builders = new Map()
  const blockerTypes = new Map()
  for (const item of located.items) {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      graph.skipped.not_object++
      continue
    }
    const fields = normalizeKeys(flattenItem(item))
    const builder = builderOf(fields)
    tally(builders, builder)
    if (builder !== "hmi-evidence-fill") {
      if (!builder) graph.skipped.no_builder++
      else graph.skipped.other_builder++
      continue
    }
    const blocked = blockerOf(fields)
    const blockedKind = blocked == null ? "empty" : Array.isArray(blocked) ? (blocked.length ? "array" : "empty-array") : typeof blocked
    tally(blockerTypes, blockedKind)
    if (!blockedByEmpty(blocked)) {
      graph.skipped.blocked++
      continue
    }
    const id = asText(fields.id || fields.unit || fields.unit_id || fields.code).toUpperCase()
    if (!UNIT_ID.test(id)) {
      graph.skipped.bad_id++
      continue
    }
    if (skipIds.has(id)) {
      graph.skipped.skip_list++
      continue
    }
    const ledger = byId.get(id)
    const named = directSlug(fields)
    const fromPage = familyPage(pageOf(fields))
    const slug = named || fromPage?.slug || slugFromIngredientId(id) || ledger?.slug || namedSlug(fields)
    if (!slug) {
      graph.skipped.no_slug++
      continue
    }
    graph.eligible++
    if (graph.unit) continue
    const recordDir = asText(fields.dir || fields.deposit_dir || fields.folder)
    const dir = recordDir || ledger?.dir || path.join("deposits", id)
    const status = normalizeStatus(fields.status || fields.state || fields.mark) || ledger?.status || "DEPOSITED"
    const kind = (!named && fromPage ? fromPage.kind : null) || kindOf(fields, id) || ledger?.kind || null
    graph.unit = { id, status, kind, slug, dir, rank: ledger?.rank ?? 0 }
  }
  graph.builders = [...builders.entries()].slice(0, 8).map(([name, count]) => `${name.slice(0, 60)}=${count}`)
  graph.blocker_types = [...blockerTypes.entries()].map(([name, count]) => `${name}=${count}`)
  return graph
}

function pickUnit(units, { skip = [] } = {}) {
  const skipIds = skipIdsOf(skip)
  const eligible = units
    .filter((unit) => unit.status === "DEPOSITED" && PAGE_KINDS.has(unit.kind) && unit.slug && !skipIds.has(unit.id))
    .sort((a, b) => a.id.localeCompare(b.id, "en", { numeric: true }))
  const chosen = eligible[0]
  if (!chosen) return null
  if (!chosen.dir) chosen.dir = path.join("deposits", chosen.id)
  return chosen
}

function formatReport(detail) {
  const graph = detail.graph
  const skipText = Object.entries(graph.skipped)
    .filter(([, count]) => count)
    .map(([name, count]) => `${name}=${count}`)
    .join(", ")
  const lines = [
    `Graph items visible: ${graph.items}. Eligible: ${graph.eligible}. Skipped: ${skipText || "none"}.`,
  ]
  if (graph.builders.length) lines.push(`Builders: ${graph.builders.join(", ")}.`)
  if (graph.blocker_types.length) lines.push(`Fill item blocked_by types: ${graph.blocker_types.join(", ")}.`)
  if (!graph.present) lines.push("graph/next_work.json is not in the checkout.")
  else if (graph.parse_error) lines.push(`graph/next_work.json could not be parsed (${graph.parse_error}).`)
  else if (!graph.items) {
    lines.push(`No work list in graph/next_work.json. Top-level keys: ${graph.top_keys.join(", ") || "(none)"}.`)
  } else if (graph.via) lines.push(`Work list: ${graph.via}.`)
  lines.push(`Ledger units seen: ${JSON.stringify(seenCounts(detail.units))}. Checkout: ${JSON.stringify(graph.census)}.`)
  if (graph.sample) lines.push(`First graph item: ${JSON.stringify(graph.sample)}`)
  if (detail.unit) lines.push(`Picked ${detail.unit.id} from the ${detail.source}.`)
  else lines.push("No deposited ingredient or product to fill.")
  return lines.join("\n")
}

export function describeSelection(root, options) {
  const units = collectUnits(root)
  const graph = readGraph(root, units, options)
  const unit = graph.unit || pickUnit(units, options)
  const detail = { unit, source: graph.unit ? "graph" : unit ? "ledger" : "none", units, graph }
  detail.report = formatReport(detail)
  return detail
}

export function selectNextUnit(root, options) {
  return describeSelection(root, options).unit
}

function seenCounts(units) {
  const counts = {}
  for (const unit of units) {
    const key = `${unit.status}/${unit.kind || "unknown"}/${unit.slug ? "with-slug" : "no-slug"}`
    counts[key] = (counts[key] || 0) + 1
  }
  return counts
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
  const detail = describeSelection(root, { skip })
  const unit = detail.unit
  const payload = unit
    ? { unit: unit.id, slug: unit.slug, dir: unit.dir, status: unit.status, kind: unit.kind || "" }
    : { unit: null, slug: "", dir: "", status: "", kind: "" }
  console.error(detail.report)
  console.log(JSON.stringify(payload))
  const output = process.env.GITHUB_OUTPUT
  if (output) {
    fs.appendFileSync(output, `unit=${payload.unit ?? ""}\nslug=${payload.slug}\ndir=${payload.dir}\nkind=${payload.kind}\n`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
