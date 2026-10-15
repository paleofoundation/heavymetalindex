#!/usr/bin/env node
// Shared HMI + WikiBiome paper-to-entity index (HMI-THIN-1 step 2).
//
// One JSONL row per (paper, entity). A paper may land on many entities.
// Basis priority, strongest first: frontmatter-route, matrices, title-match, body-match.
// When the same DOI is filed in both corpora, the HMI note is kept and the
// WikiBiome note is dropped. Placeholder DOI text is not a DOI.
//
// This script does not edit wiki pages, source legends, or certification data.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"

const FAMILIES = ["products", "ingredients", "metals"]
const BASIS_RANK = {
  "frontmatter-route": 4,
  matrices: 3,
  "title-match": 2,
  "body-match": 1,
}
const STOP = new Set([
  "a", "an", "the", "and", "or", "of", "in", "on", "for", "to", "with", "from",
  "by", "at", "as", "is", "be", "this", "that", "other", "general", "index",
  "page", "category", "clean", "dirty", "base", "row",
])

export function defaultPaths(repoRoot) {
  return {
    wikiRoot: path.join(repoRoot, "wiki"),
    hmiSourcesDir: path.join(repoRoot, "wiki", "sources"),
    matrixAliasesPath: path.join(repoRoot, "data", "fanout", "matrix-aliases.json"),
    ingredientIndexPath: path.join(repoRoot, "data", "nav", "ingredient-index-source.json"),
    taxonomyPath: path.join(repoRoot, "data", "taxonomy", "hmtc-v2.json"),
    outPath: path.join(repoRoot, "data", "fanout", "paper-entity-index.jsonl"),
  }
}

export function normalizeText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
}

export function normalizeDoi(value) {
  if (value == null || typeof value === "number" || typeof value === "boolean") return null
  let doi = String(value).trim().toLowerCase()
  doi = doi.replace(/^https?:\/\/(dx\.)?doi\.org\//, "")
  doi = doi.replace(/^doi:\s*/, "")
  doi = doi.replace(/[)\].,;:]+$/g, "").trim()
  if (!/^10\.\d{4,9}\/\S+$/.test(doi)) return null
  return doi
}

export function matrixKey(token) {
  return normalizeText(token).replace(/ /g, "-")
}

function usablePhrase(phrase) {
  if (!phrase || phrase.length < 3) return false
  const words = phrase.split(" ")
  if (words.length === 0) return false
  if (words.every((word) => STOP.has(word) || /^\d+$/.test(word))) return false
  return true
}

function isLabelParen(inner) {
  const text = String(inner || "").trim().toLowerCase()
  return /^cat(?:egory)?\s*\d+\b/.test(text) || /^ages?\b/.test(text) || /^hmtc\b/.test(text)
}

export function phrasesFromHeading(raw) {
  const out = new Set()
  const text = String(raw || "").trim()
  if (!text) return []
  const full = normalizeText(text)
  if (usablePhrase(full)) out.add(full)
  const comma = text.match(/^([^,]+),\s*([^,]+)$/)
  if (comma) {
    const swapped = normalizeText(`${comma[2]} ${comma[1]}`)
    if (usablePhrase(swapped)) out.add(swapped)
  }
  const parens = [...text.matchAll(/\(([^)]*)\)/g)].map((match) => match[1])
  if (parens.length) {
    const strippedRaw = text.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim()
    const stripped = normalizeText(strippedRaw)
    const words = stripped.split(" ").filter(Boolean)
    const labelOnly = parens.every(isLabelParen)
    if (usablePhrase(stripped) && (words.length >= 2 || labelOnly)) out.add(stripped)
    if (parens.length === 1 && !isLabelParen(parens[0])) {
      const inverted = normalizeText(`${parens[0]} ${strippedRaw}`)
      if (usablePhrase(inverted) && inverted.split(" ").length >= 2) out.add(inverted)
    }
  }
  return [...out]
}

function readJson(file, label) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${label}: ${file}`)
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

function listMarkdown(dir) {
  if (!dir || !fs.existsSync(dir)) return []
  const out = []
  const stack = [dir]
  while (stack.length) {
    const current = stack.pop()
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) stack.push(full)
      else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full)
    }
  }
  return out.sort()
}

function entityIdFromFile(wikiRoot, file) {
  const rel = path.relative(wikiRoot, file).replace(/\\/g, "/")
  if (!rel.endsWith(".md")) return null
  return rel.slice(0, -3)
}

function familyOf(entityId) {
  return entityId.split("/")[0]
}

function isHubPath(entityId) {
  return entityId.includes("/categories/") || entityId.endsWith("/index")
}

function scalarTokens(value) {
  const out = []
  const walk = (item) => {
    if (item == null) return
    if (Array.isArray(item)) {
      item.forEach(walk)
      return
    }
    if (typeof item === "string") {
      const token = item.trim()
      if (token) out.push(token)
      return
    }
    if (typeof item === "number" || typeof item === "boolean") return
  }
  walk(value)
  return [...new Set(out)]
}

function routeSlugs(value, family) {
  const out = []
  const linked = new RegExp(`(?:\\[\\[)?${family}/([a-z0-9][a-z0-9/-]*)`, "i")
  const walk = (item) => {
    if (item == null) return
    if (Array.isArray(item)) {
      item.forEach(walk)
      return
    }
    const text = String(item).trim()
    const match = text.match(linked)
    if (match) {
      out.push(match[1].toLowerCase().replace(/\/+$/, ""))
      return
    }
    if (/^[a-z0-9][a-z0-9-]*$/i.test(text)) out.push(text.toLowerCase())
  }
  walk(value)
  return [...new Set(out)]
}

function declaredMetals(fm) {
  const tokens = [...scalarTokens(fm.metals), ...scalarTokens(fm.metals_discussed)]
  return [...new Set(tokens)].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
}

function keyFindingText(fm) {
  const parts = []
  const walk = (item) => {
    if (typeof item === "string") parts.push(item)
    else if (Array.isArray(item)) item.forEach(walk)
  }
  walk(fm.key_findings)
  return parts.join("\n")
}

export function paperHasValues(fm, text) {
  const sample = fm.sample_n
  if (typeof sample === "number" && Number.isFinite(sample) && sample > 0) return true
  if (typeof sample === "string" && /^\d+$/.test(sample.trim()) && Number(sample) > 0) return true
  const folded = String(text || "")
    .replace(/[µμ]/g, "u")
    .replace(/[\u2212\u2013]/g, "-")
  return /(?<![\d.])\d+(?:[.,]\d+)?\s*(?:ppb|ppm|ug\/kg|mg\/kg|ng\/g|ug\/g|mg\/g|ng\/kg|ug\/l|mg\/l|ug\/ml|mg\/ml|mcg\/kg|mcg\/g|ug kg-1|mg kg-1|ng g-1|ug g-1)\b/i.test(folded)
}

// Phrase match reads prose. A cite key, wikilink, path, or code span is not a mention.
export function textForPhraseMatch(raw) {
  return String(raw || "")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`\n]*`/g, " ")
    .replace(/\[\[[^\]]*\]\]/g, " ")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/\b[\w./-]+\.(?:pdf|md|mjs|json|csv)\b/gi, " ")
}

function isSourceNote(dir, file, fm) {
  const rel = path.relative(dir, file).replace(/\\/g, "/")
  if (path.basename(rel) === "index.md") return false
  if (rel.split("/").includes("categories")) return false
  if (fm.type === "category-index") return false
  return true
}

function paperTitle(fm, body) {
  if (typeof fm.title === "string" && fm.title.trim()) return fm.title.trim()
  const heading = String(body || "").match(/^#\s+(.+)$/m)
  return heading ? heading[1].trim() : ""
}

function isDuplicateSource(fm) {
  return String(fm.status || "").trim().toLowerCase() === "duplicate" || Boolean(fm.canonical_source)
}

function citeKeyOf(fm, file) {
  if (typeof fm.cite_key === "string" && fm.cite_key.trim()) return fm.cite_key.trim()
  return path.basename(file, ".md")
}

function loadAliases(file) {
  const raw = readJson(file, "matrix aliases")
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error(`Matrix aliases must be an object of token to entity list: ${file}`)
  }
  const map = new Map()
  for (const [token, targets] of Object.entries(raw)) {
    if (!Array.isArray(targets) || targets.some((item) => typeof item !== "string")) {
      throw new Error(`Matrix alias ${token} must be a list of entity ids`)
    }
    const key = matrixKey(token)
    if (!key) continue
    const ids = targets.map((item) => item.trim()).filter(Boolean)
    map.set(key, ids)
  }
  return map
}

function addPhrase(entity, phrase) {
  if (usablePhrase(phrase)) entity.phrases.add(phrase)
}

function ensureEntity(entities, id) {
  if (!entities.has(id)) {
    entities.set(id, {
      id,
      phrases: new Set(),
      phraseEligible: !isHubPath(id),
      slug: id.split("/").pop(),
    })
  }
  return entities.get(id)
}

function loadEntities(options) {
  const aliases = loadAliases(options.matrixAliasesPath)
  const ingredientIndex = readJson(options.ingredientIndexPath, "ingredient index")
  const taxonomy = readJson(options.taxonomyPath, "product taxonomy")
  const entities = new Map()
  const metalKeys = new Map()
  const metalCollisions = new Set()

  const setMetalKey = (key, entityId) => {
    const forms = new Set([
      String(key || "").trim().toLowerCase(),
      normalizeText(key),
      matrixKey(key),
    ])
    for (const form of forms) {
      if (!form) continue
      if (metalCollisions.has(form)) continue
      if (metalKeys.has(form) && metalKeys.get(form) !== entityId) {
        metalKeys.delete(form)
        metalCollisions.add(form)
        continue
      }
      metalKeys.set(form, entityId)
    }
  }

  for (const family of FAMILIES) {
    const root = path.join(options.wikiRoot, family)
    for (const file of listMarkdown(root)) {
      if (path.basename(file) === "index.md") continue
      const id = `${family}/${path.relative(root, file).replace(/\\/g, "/").replace(/\.md$/, "")}`
      let fm = {}
      try {
        fm = matter(fs.readFileSync(file, "utf8")).data || {}
      } catch {
        continue
      }
      const entity = ensureEntity(entities, id)
      const hub = fm.type === "category-index" || isHubPath(id)
      entity.phraseEligible = !hub
      entity.matrixTokens = []
      if (!hub) {
        for (const phrase of phrasesFromHeading(fm.title)) addPhrase(entity, phrase)
        for (const phrase of phrasesFromHeading(fm.hmtc_subcategory_name)) addPhrase(entity, phrase)
        for (const alias of scalarTokens(fm.aliases)) entity.matrixTokens.push(alias)
      }
      if (family === "metals" && !hub) {
        if (typeof fm.symbol === "string") setMetalKey(fm.symbol, id)
        if (typeof fm.name === "string") setMetalKey(fm.name, id)
        setMetalKey(entity.slug, id)
        for (const phrase of entity.phrases) setMetalKey(phrase, id)
      }
    }
  }

  for (const targets of aliases.values()) {
    for (const id of targets) {
      const entity = ensureEntity(entities, id)
      entity.phraseEligible = entity.phraseEligible !== false && !isHubPath(id)
    }
  }
  for (const [token, targets] of aliases) {
    const phrase = token.replace(/-/g, " ")
    for (const id of targets) {
      const entity = entities.get(id)
      if (entity && entity.phraseEligible) addPhrase(entity, phrase)
    }
  }

  if (Array.isArray(taxonomy.categories)) {
    for (const category of taxonomy.categories) {
      for (const sub of category.subcategories || []) {
        if (!sub || typeof sub.slug !== "string") continue
        const id = `products/${sub.slug}`
        const entity = entities.get(id)
        if (!entity || !entity.phraseEligible) continue
        for (const phrase of phrasesFromHeading(sub.name)) addPhrase(entity, phrase)
      }
    }
  }

  const phraseOwners = new Map()
  for (const entity of entities.values()) {
    if (!entity.phraseEligible) {
      entity.phrases.clear()
      continue
    }
    for (const phrase of entity.phrases) {
      if (!phraseOwners.has(phrase)) phraseOwners.set(phrase, [])
      phraseOwners.get(phrase).push(entity)
    }
  }
  let suppressedPhrases = 0
  for (const [phrase, owners] of phraseOwners) {
    const byFamily = new Map()
    for (const entity of owners) {
      const family = familyOf(entity.id)
      if (!byFamily.has(family)) byFamily.set(family, [])
      byFamily.get(family).push(entity)
    }
    for (const group of byFamily.values()) {
      if (group.length < 2) continue
      for (const entity of group) entity.phrases.delete(phrase)
      suppressedPhrases += 1
    }
  }

  const phraseIndex = new Map()
  const phraseToEntities = new Map()
  for (const entity of entities.values()) {
    for (const phrase of entity.phrases) {
      if (!phraseToEntities.has(phrase)) phraseToEntities.set(phrase, [])
      phraseToEntities.get(phrase).push(entity.id)
      const words = phrase.split(" ")
      const bucket = phraseIndex.get(words[0]) || []
      bucket.push({ words, entityId: entity.id })
      phraseIndex.set(words[0], bucket)
    }
  }

  const slugIndex = new Map()
  const addSlug = (key, entityId) => {
    const entity = entities.get(entityId)
    if (!entity || !entity.phraseEligible) return
    const normalized = matrixKey(key)
    if (!normalized) return
    if (!slugIndex.has(normalized)) slugIndex.set(normalized, [])
    const list = slugIndex.get(normalized)
    if (!list.includes(entityId)) list.push(entityId)
  }
  for (const entity of entities.values()) {
    if (!entity.phraseEligible) continue
    addSlug(entity.slug, entity.id)
    for (const token of entity.matrixTokens || []) addSlug(token, entity.id)
  }
  const ingredientSlugs = []
  if (Array.isArray(ingredientIndex)) {
    for (const group of ingredientIndex) {
      for (const slug of group.slugs || []) ingredientSlugs.push(slug)
    }
  }
  for (const slug of ingredientSlugs) addSlug(slug, `ingredients/${slug}`)
  if (Array.isArray(taxonomy.categories)) {
    for (const category of taxonomy.categories) {
      for (const sub of category.subcategories || []) {
        if (sub && typeof sub.slug === "string") addSlug(sub.slug, `products/${sub.slug}`)
      }
    }
  }

  return { entities, aliases, phraseIndex, phraseToEntities, slugIndex, metalKeys, suppressedPhrases }
}

function findPhrases(text, phraseIndex) {
  const normalized = normalizeText(text)
  if (!normalized) return new Set()
  const words = normalized.split(" ")
  const found = new Set()
  for (let i = 0; i < words.length; i++) {
    const candidates = phraseIndex.get(words[i])
    if (!candidates) continue
    for (const candidate of candidates) {
      let matched = true
      for (let j = 0; j < candidate.words.length; j++) {
        if (words[i + j] !== candidate.words[j]) {
          matched = false
          break
        }
      }
      if (matched) found.add(candidate.entityId)
    }
  }
  return found
}

function consider(hits, entityId, basis, locator) {
  const rank = BASIS_RANK[basis]
  const prev = hits.get(entityId)
  if (!prev || rank > prev.rank || (rank === prev.rank && locator < prev.locator)) {
    hits.set(entityId, { basis, locator, rank })
  }
}

function matrixTargets(token, indexes) {
  const key = matrixKey(token)
  const phrase = normalizeText(token)
  const ids = new Set()
  for (const id of indexes.aliases.get(key) || []) ids.add(id)
  for (const id of indexes.slugIndex.get(key) || []) ids.add(id)
  for (const id of indexes.phraseToEntities.get(phrase) || []) ids.add(id)
  return [...ids]
}

function resolveMetal(token, metalKeys) {
  const forms = [String(token).trim().toLowerCase(), normalizeText(token), matrixKey(token)]
  for (const form of forms) {
    if (form && metalKeys.has(form)) return metalKeys.get(form)
  }
  return null
}

function loadNotes(dir, corpus, stats) {
  const notes = []
  for (const file of listMarkdown(dir)) {
    let parsed
    try {
      parsed = matter(fs.readFileSync(file, "utf8"))
    } catch {
      stats.malformed += 1
      continue
    }
    const fm = parsed.data || {}
    if (!isSourceNote(dir, file, fm)) continue
    const body = parsed.content || ""
    const extra = keyFindingText(fm)
    const searchable = textForPhraseMatch(`${body}\n${extra}`)
    const title = paperTitle(fm, body)
    notes.push({
      corpus,
      file,
      fm,
      cite_key: citeKeyOf(fm, file),
      doi: normalizeDoi(fm.doi ?? fm.DOI),
      duplicate: isDuplicateSource(fm),
      title,
      searchable,
      has_values: paperHasValues(fm, `${title}\n${searchable}`),
      metals: declaredMetals(fm),
    })
  }
  return notes
}

function preferNote(left, right) {
  if (left.has_values !== right.has_values) return left.has_values ? left : right
  if (left.searchable.length !== right.searchable.length) {
    return left.searchable.length > right.searchable.length ? left : right
  }
  return left.cite_key <= right.cite_key ? left : right
}

function rowsForNote(note, indexes) {
  const hits = new Map()
  for (const slug of routeSlugs(note.fm.products, "products")) {
    const id = slug.startsWith("products/") ? slug : `products/${slug}`
    if (indexes.entities.has(id)) consider(hits, id, "frontmatter-route", "frontmatter.products")
  }
  for (const slug of routeSlugs(note.fm.ingredients, "ingredients")) {
    const id = slug.startsWith("ingredients/") ? slug : `ingredients/${slug}`
    if (indexes.entities.has(id)) consider(hits, id, "frontmatter-route", "frontmatter.ingredients")
  }
  for (const token of scalarTokens(note.fm.metals)) {
    const id = resolveMetal(token, indexes.metalKeys)
    if (id && indexes.entities.has(id)) consider(hits, id, "frontmatter-route", "frontmatter.metals")
  }
  for (const token of scalarTokens(note.fm.metals_discussed)) {
    const id = resolveMetal(token, indexes.metalKeys)
    if (id && indexes.entities.has(id)) consider(hits, id, "frontmatter-route", "frontmatter.metals_discussed")
  }
  for (const token of scalarTokens(note.fm.matrices)) {
    const locator = `frontmatter.matrices:${matrixKey(token)}`
    for (const id of matrixTargets(token, indexes)) {
      if (indexes.entities.has(id)) consider(hits, id, "matrices", locator)
    }
  }
  for (const id of findPhrases(note.title, indexes.phraseIndex)) {
    consider(hits, id, "title-match", "title")
  }
  for (const id of findPhrases(note.searchable, indexes.phraseIndex)) {
    consider(hits, id, "body-match", "body")
  }
  const rows = []
  for (const [entity, hit] of hits) {
    rows.push({
      corpus: note.corpus,
      cite_key: note.cite_key,
      doi: note.doi,
      entity,
      basis: hit.basis,
      metals: note.metals,
      has_values: note.has_values,
      locator: hit.locator,
    })
  }
  return rows
}

export function summarizeIndex(rows) {
  const byCorpus = { hmi: 0, wikibiome: 0 }
  const dois = new Set()
  const papers = new Set()
  const papersWithValues = new Set()
  const papersByEntity = new Map()
  let hasValuesTrue = 0
  for (const row of rows) {
    byCorpus[row.corpus] = (byCorpus[row.corpus] || 0) + 1
    if (row.doi) dois.add(row.doi)
    const paperId = `${row.corpus}\t${row.cite_key}`
    papers.add(paperId)
    if (row.has_values) {
      hasValuesTrue += 1
      papersWithValues.add(paperId)
    }
    if (!papersByEntity.has(row.entity)) papersByEntity.set(row.entity, new Set())
    papersByEntity.get(row.entity).add(paperId)
  }
  let atLeast1 = 0
  let atLeast2 = 0
  for (const set of papersByEntity.values()) {
    if (set.size >= 1) atLeast1 += 1
    if (set.size >= 2) atLeast2 += 1
  }
  return {
    rows: rows.length,
    by_corpus: byCorpus,
    unique_dois: dois.size,
    entities_with_at_least_1_paper: atLeast1,
    entities_with_at_least_2_papers: atLeast2,
    has_values_true: hasValuesTrue,
    papers: papers.size,
    papers_with_has_values: papersWithValues.size,
  }
}

export function buildPaperEntityIndex(options) {
  const indexes = loadEntities(options)
  const stats = {
    malformed: 0,
    hmi_duplicates_skipped: 0,
    wikibiome_dropped_hmi_doi: 0,
    wikibiome_collapsed_same_doi: 0,
    suppressed_phrases: indexes.suppressedPhrases,
  }
  if (!fs.existsSync(options.hmiSourcesDir)) {
    throw new Error(`Missing HMI sources: ${options.hmiSourcesDir}`)
  }
  const hmiAll = loadNotes(options.hmiSourcesDir, "hmi", stats)
  const hmiDois = new Set()
  const hmiNotes = []
  for (const note of hmiAll) {
    if (note.doi) hmiDois.add(note.doi)
    if (note.duplicate) {
      stats.hmi_duplicates_skipped += 1
      continue
    }
    hmiNotes.push(note)
  }

  let wikibiomeNotes = []
  if (options.wikibiomeSourcesDir) {
    if (!fs.existsSync(options.wikibiomeSourcesDir)) {
      throw new Error(`Missing WikiBiome sources: ${options.wikibiomeSourcesDir}`)
    }
    const loaded = loadNotes(options.wikibiomeSourcesDir, "wikibiome", stats)
    const byDoi = new Map()
    for (const note of loaded) {
      if (note.doi && hmiDois.has(note.doi)) {
        stats.wikibiome_dropped_hmi_doi += 1
        continue
      }
      if (!note.doi) {
        wikibiomeNotes.push(note)
        continue
      }
      const prev = byDoi.get(note.doi)
      if (!prev) {
        byDoi.set(note.doi, note)
        continue
      }
      stats.wikibiome_collapsed_same_doi += 1
      byDoi.set(note.doi, preferNote(prev, note))
    }
    wikibiomeNotes = wikibiomeNotes.concat([...byDoi.values()])
  }

  const rows = []
  for (const note of hmiNotes) rows.push(...rowsForNote(note, indexes))
  for (const note of wikibiomeNotes) rows.push(...rowsForNote(note, indexes))
  rows.sort((a, b) => (
    (a.corpus < b.corpus ? -1 : a.corpus > b.corpus ? 1 : 0)
    || (a.cite_key < b.cite_key ? -1 : a.cite_key > b.cite_key ? 1 : 0)
    || (a.entity < b.entity ? -1 : a.entity > b.entity ? 1 : 0)
  ))
  const summary = summarizeIndex(rows)
  summary.malformed = stats.malformed
  summary.hmi_duplicates_skipped = stats.hmi_duplicates_skipped
  summary.wikibiome_dropped_hmi_doi = stats.wikibiome_dropped_hmi_doi
  summary.wikibiome_collapsed_same_doi = stats.wikibiome_collapsed_same_doi
  summary.suppressed_phrases = stats.suppressed_phrases
  summary.hmi_notes = hmiNotes.length
  summary.wikibiome_notes = wikibiomeNotes.length
  return { rows, summary }
}

export function writeIndex(rows, outPath) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  const body = rows.length ? `${rows.map((row) => JSON.stringify(row)).join("\n")}\n` : ""
  const tmp = `${outPath}.tmp`
  fs.writeFileSync(tmp, body)
  fs.renameSync(tmp, outPath)
}

function parseArgs(argv) {
  const args = { repoRoot: process.cwd() }
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i]
    const next = argv[i + 1]
    if (flag === "--repo-root") args.repoRoot = next
    else if (flag === "--wiki-root") args.wikiRoot = next
    else if (flag === "--hmi-sources") args.hmiSourcesDir = next
    else if (flag === "--wikibiome-sources") args.wikibiomeSourcesDir = next
    else if (flag === "--aliases") args.matrixAliasesPath = next
    else if (flag === "--ingredient-index") args.ingredientIndexPath = next
    else if (flag === "--taxonomy") args.taxonomyPath = next
    else if (flag === "--out") args.outPath = next
    else if (flag === "--help") args.help = true
    else throw new Error(`Unknown argument: ${flag}`)
    if (flag !== "--help") i += 1
  }
  return args
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    console.log("node tools/fanout/build-entity-index.mjs --wikibiome-sources <wiki/sources>")
    return
  }
  const defaults = defaultPaths(args.repoRoot)
  const wikibiomeSourcesDir = args.wikibiomeSourcesDir || process.env.WIKIBIOME_SOURCES || ""
  if (!wikibiomeSourcesDir) {
    throw new Error("Pass --wikibiome-sources or set WIKIBIOME_SOURCES. Clone paleofoundation/wikibiome shallow and point at wiki/sources. Do not open a WikiBiome PR.")
  }
  const built = buildPaperEntityIndex({
    wikiRoot: args.wikiRoot || defaults.wikiRoot,
    hmiSourcesDir: args.hmiSourcesDir || defaults.hmiSourcesDir,
    wikibiomeSourcesDir,
    matrixAliasesPath: args.matrixAliasesPath || defaults.matrixAliasesPath,
    ingredientIndexPath: args.ingredientIndexPath || defaults.ingredientIndexPath,
    taxonomyPath: args.taxonomyPath || defaults.taxonomyPath,
  })
  const outPath = args.outPath || defaults.outPath
  writeIndex(built.rows, outPath)
  console.log(JSON.stringify({ out: outPath, ...built.summary }, null, 2))
}

const thisFile = fileURLToPath(import.meta.url)
if (process.argv[1] && path.resolve(process.argv[1]) === thisFile) main()
