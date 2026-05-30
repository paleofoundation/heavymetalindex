#!/usr/bin/env node
// Build the brand-facing change-watch feed: "what moved in the regulation or
// the literature that touches your products."
//
// This is a STATEFUL watcher, not a git differ. The structured artifacts it
// reads (wiki/static/regulations.json, wiki/static/contamination.json) only
// recently entered git, so there is no deep history to diff. Instead the
// watcher snapshots the current state, diffs it against the prior snapshot it
// stored, classifies each material change, maps it to the product categories
// it affects, and appends new events to a durable feed. Run it on every
// daemon tick and it accumulates a faithful forward changelog; the corpus does
// not need to be re-walked from scratch.
//
// Day-one seed (first run only, when no prior snapshot exists): the regulatory
// effective_date timeline (clean, real dates from regulations.json) plus a
// best-effort reconstruction of past synthesis shifts from
// data/evidence/review_events.jsonl, so the feed is useful immediately instead
// of starting empty.
//
// Outputs:
//   - data/evidence/change-watch/feed.jsonl   append-only durable event log
//   - data/evidence/change-watch/state.json   last snapshot (the diff baseline)
//   - data/evidence/change-watch/digest.md    human-readable staff digest
//   - wiki/static/change-watch-index.json      per-category rollup (served)
//
// Usage:
//   node tools/build-change-watch.mjs
//   npm run change-watch

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"
import yaml from "js-yaml"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")
const CANONICAL_BASE = "https://heavymetalindex.com"
const SCHEMA_VERSION = "1.0.0"

const regulationsPath = path.join(repoRoot, "wiki/static/regulations.json")
const contaminationPath = path.join(repoRoot, "wiki/static/contamination.json")
const reviewEventsPath = path.join(repoRoot, "data/evidence/review_events.jsonl")
const productsDir = path.join(repoRoot, "wiki/products")
const watchDir = path.join(repoRoot, "data/evidence/change-watch")
const statePath = path.join(watchDir, "state.json")
const feedPath = path.join(watchDir, "feed.jsonl")
const digestPath = path.join(watchDir, "digest.md")
const indexOutPath = path.join(repoRoot, "wiki/static/change-watch-index.json")

// A "material" synthesis shift: a typical/p95 move of this factor or more in
// either direction. Matches CLAUDE.md Part 9's 2x contradiction trigger.
const SHIFT_FACTOR = 2
const MAX_RECENT_PER_CATEGORY = 25
const MAX_SEED_EVENTS_PER_SERIES = 4

// ── helpers ───────────────────────────────────────────────────────────────────
function loadJson(p, fallback) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"))
  } catch {
    return fallback
  }
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return {}
  try {
    return yaml.load(m[1]) || {}
  } catch {
    return {}
  }
}

function isLocked(data) {
  if (data.provisional_scaffold === true || data.pending_category_lock === true) return false
  return data.hmtc_row !== undefined && data.hmtc_row !== null && data.hmtc_row !== "pending_taxonomy_review"
}

function eventId(parts) {
  return crypto.createHash("sha1").update(parts.join("")).digest("hex").slice(0, 16)
}

function tokens(slug) {
  return new Set(String(slug || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean))
}

// Generic food-form / descriptor tokens that must never, on their own, be the
// basis of an ingredient→category match. Without this, "cocoa powder" (an
// alias of cocoa) collides with "infant-formula-powder" on the shared token
// "powder" and the feed fabricates "cocoa literature affects your formula".
// Precision-first: a synthesis change is attributed to a category only when a
// DISTINCTIVE commodity token (e.g. cocoa, rice, spinach) is shared.
const FORM_STOPLIST = new Set([
  "powder", "powdered", "liquid", "based", "ready", "rtf", "dried", "dry", "fresh", "frozen",
  "whole", "ground", "raw", "puree", "purees", "pureed", "juice", "milk", "drink", "beverage",
  "formula", "cereal", "cereals", "snack", "snacks", "teething", "food", "foods", "meal", "meals",
  "mixed", "mix", "vitamin", "mineral", "premix", "protein", "source", "concentrate", "concentrated",
  "infant", "baby", "child", "children", "toddler", "non", "free", "added", "single", "ingredient",
  "plant", "product", "products", "finished", "and", "the", "with", "low", "reduced",
])

// Distinctive (commodity-bearing) tokens of a slug: drop short tokens and
// generic form-words, keep the words that actually name a food.
function distinctiveTokens(slug) {
  const out = new Set()
  for (const t of tokens(slug)) {
    if (t.length < 3) continue
    if (FORM_STOPLIST.has(t)) continue
    out.add(t)
  }
  return out
}

function overlaps(a, b) {
  for (const x of a) if (b.has(x)) return true
  return false
}

// Compare two numeric scalars/ranges for a >= factor move. typical_ppb may be a
// [low, high] range or a scalar; reduce to a representative upper value.
function repValue(v) {
  if (Array.isArray(v)) return v.length ? Number(v[v.length - 1]) : null
  if (typeof v === "number") return v
  return null
}
function shiftFactor(prev, next) {
  const a = repValue(prev)
  const b = repValue(next)
  if (a == null || b == null || a === 0 || b === 0) return null
  return b >= a ? b / a : a / b
}

// ── load product universe (locked rows only) ─────────────────────────────────
function loadProducts() {
  const out = []
  for (const file of fs.readdirSync(productsDir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const data = parseFrontmatter(fs.readFileSync(path.join(productsDir, file), "utf8"))
    if (!isLocked(data)) continue
    const slug = file.replace(/\.md$/, "")
    out.push({
      slug: `products/${slug}`,
      label: data.label || data.title || slug,
      category_label: data.category_label || null,
      applicable_regulations: (data.applicable_regulations || []).map((r) =>
        r.startsWith("regulations/") ? r : `regulations/${r}`,
      ),
      ingredient_targets: data.ingredient_targets || [],
      ingredient_tokens: (data.ingredient_targets || []).map(distinctiveTokens),
      metals: new Set([...(data.primary_metals_of_concern || []), ...(data.hmtc_tested_metals || [])]),
      matrices: tokens([slug, data.base_taxonomy, data.category_label].filter(Boolean).join("-")),
    })
  }
  return out
}

// ── map an event to the product categories it touches ─────────────────────────
function mapRegulationToCategories(reg, products, matrixMap) {
  const regMetals = new Set(reg.metals || (reg.metal ? [reg.metal] : []))
  const regMatrixProducts = new Set()
  for (const mx of reg.matrices || (reg.matrix ? [reg.matrix] : [])) {
    const mapped = matrixMap[mx]
    if (mapped && Array.isArray(mapped.products)) mapped.products.forEach((p) => regMatrixProducts.add(p))
  }
  const hits = []
  for (const p of products) {
    let strength = null
    if (p.applicable_regulations.includes(reg.slug)) strength = "direct"
    else if ([...regMatrixProducts].some((mp) => p.slug === `products/${mp}` || p.slug.includes(mp))) {
      // matrix-routed, only if a metal of concern overlaps (or reg is metal-broad)
      if (regMetals.size === 0 || [...regMetals].some((m) => p.metals.has(m))) strength = "matrix"
    }
    if (strength) hits.push({ slug: p.slug, label: p.label, match_strength: strength })
  }
  return hits
}

// Aliases are deliberately NOT folded into the match set: they pull in generic
// form-words ("cocoa powder" → "powder") that cause cross-category false
// positives. Matching is on the event ingredient's own distinctive tokens.
function mapSynthesisToCategories(ingredient, metal, _aliases, products) {
  const ingTok = distinctiveTokens(ingredient)
  const hits = []
  for (const p of products) {
    if (!p.metals.has(metal)) continue
    let strength = null
    if (p.ingredient_targets.includes(ingredient)) strength = "direct"
    else if (ingTok.size && p.ingredient_tokens.some((t) => overlaps(t, ingTok))) strength = "ingredient"
    if (strength) hits.push({ slug: p.slug, label: p.label, match_strength: strength })
  }
  return hits
}

// ── snapshots ─────────────────────────────────────────────────────────────────
function snapshotRegulations(regs) {
  const snap = {}
  for (const r of regs) {
    snap[r.slug] = {
      limit_value: r.limit_value ?? null,
      limit_unit: r.limit_unit ?? null,
      status: r.status ?? null,
      effective_date: r.effective_date ?? null,
    }
  }
  return snap
}

function snapshotSynthesis(contam) {
  const snap = {}
  for (const ing of contam) {
    const metals = ing.metals || {}
    for (const [metal, sub] of Object.entries(metals)) {
      if (!sub || sub.status === "pending") continue
      snap[`${ing.ingredient}|${metal}`] = {
        typical_ppb: sub.typical_ppb ?? null,
        p95_ppb: sub.p95_ppb ?? null,
        confidence: sub.confidence ?? null,
        n_studies: sub.n_studies ?? null,
        status: sub.status ?? null,
      }
    }
  }
  return snap
}

// ── diff prior → current ──────────────────────────────────────────────────────
function diffRegulations(prior, current, regBySlug, products, matrixMap, today) {
  const events = []
  for (const [slug, now] of Object.entries(current)) {
    const was = prior[slug]
    const reg = regBySlug.get(slug)
    const base = {
      scope: "regulation",
      slug,
      title: reg?.title || slug,
      agency: reg?.agency || null,
      metals: reg?.metals || (reg?.metal ? [reg.metal] : []),
      page_url: reg?.page_url || `${CANONICAL_BASE}/${slug}`,
      affected_categories: mapRegulationToCategories(reg || { slug }, products, matrixMap),
    }
    if (!was) {
      events.push({ ...base, kind: "regulation_new", date: now.effective_date || today, detail: `New regulation indexed: ${now.limit_value ?? "see page"} ${now.limit_unit ?? ""}`.trim() })
    } else {
      if (JSON.stringify(was.limit_value) !== JSON.stringify(now.limit_value)) {
        events.push({ ...base, kind: "regulation_limit_changed", date: today, detail: `Limit changed: ${was.limit_value} → ${now.limit_value} ${now.limit_unit ?? ""}`.trim(), from: was.limit_value, to: now.limit_value })
      }
      if (was.status !== now.status) {
        events.push({ ...base, kind: "regulation_status_changed", date: today, detail: `Status changed: ${was.status} → ${now.status}`, from: was.status, to: now.status })
      }
      if (was.effective_date !== now.effective_date) {
        events.push({ ...base, kind: "regulation_effective_changed", date: now.effective_date || today, detail: `Effective date changed: ${was.effective_date} → ${now.effective_date}`, from: was.effective_date, to: now.effective_date })
      }
    }
  }
  return events
}

function diffSynthesis(prior, current, ingredientMeta, products, today) {
  const events = []
  for (const [key, now] of Object.entries(current)) {
    const [ingredient, metal] = key.split("|")
    const meta = ingredientMeta.get(ingredient) || {}
    const was = prior[key]
    const base = {
      scope: "synthesis",
      ingredient,
      metal,
      page_url: meta.page_url || `${CANONICAL_BASE}/ingredients/${ingredient}`,
      affected_categories: mapSynthesisToCategories(ingredient, metal, meta.aliases, products),
    }
    if (!was) {
      events.push({ ...base, kind: "synthesis_new", date: today, detail: `Literature evidence first populated for ${metal} in ${ingredient} (n=${now.n_studies ?? "?"}, ${now.confidence ?? "?"} confidence).` })
      continue
    }
    const tf = Math.max(shiftFactor(was.typical_ppb, now.typical_ppb) || 0, shiftFactor(was.p95_ppb, now.p95_ppb) || 0)
    if (tf >= SHIFT_FACTOR) {
      const dir = (repValue(now.typical_ppb) ?? repValue(now.p95_ppb) ?? 0) >= (repValue(was.typical_ppb) ?? repValue(was.p95_ppb) ?? 0) ? "up" : "down"
      events.push({ ...base, kind: `synthesis_shift_${dir}`, date: today, detail: `${metal} in ${ingredient} synthesis moved ${dir} ${tf.toFixed(1)}x (typical ${JSON.stringify(was.typical_ppb)}→${JSON.stringify(now.typical_ppb)} ppb, p95 ${was.p95_ppb}→${now.p95_ppb}).`, from: { typical_ppb: was.typical_ppb, p95_ppb: was.p95_ppb }, to: { typical_ppb: now.typical_ppb, p95_ppb: now.p95_ppb } })
    }
    if (was.confidence !== now.confidence) {
      events.push({ ...base, kind: "synthesis_confidence_changed", date: today, detail: `${metal} in ${ingredient} confidence ${was.confidence} → ${now.confidence}.`, from: was.confidence, to: now.confidence })
    }
    if (was.n_studies && now.n_studies && now.n_studies >= was.n_studies * 2) {
      events.push({ ...base, kind: "synthesis_evidence_grew", date: today, detail: `${metal} in ${ingredient} evidence base doubled (n ${was.n_studies} → ${now.n_studies}); resynthesis trigger per Part 9.`, from: was.n_studies, to: now.n_studies })
    }
  }
  return events
}

// ── day-one seeds ─────────────────────────────────────────────────────────────
function seedRegulatoryTimeline(regs, products, matrixMap) {
  const events = []
  for (const reg of regs) {
    if (!reg.effective_date) continue
    events.push({
      scope: "regulation",
      kind: "regulation_effective",
      date: reg.effective_date,
      slug: reg.slug,
      title: reg.title,
      agency: reg.agency || null,
      metals: reg.metals || (reg.metal ? [reg.metal] : []),
      page_url: reg.page_url || `${CANONICAL_BASE}/${reg.slug}`,
      detail: `${reg.agency || "Regulation"} effective ${reg.effective_date}: ${typeof reg.limit_value === "number" ? `${reg.limit_value} ${reg.limit_unit ?? ""}`.trim() : "see page"}.`,
      provenance: "regulations.json effective_date timeline",
      affected_categories: mapRegulationToCategories(reg, products, matrixMap),
    })
  }
  return events
}

function seedSynthesisHistory(ingredientMeta, products) {
  if (!fs.existsSync(reviewEventsPath)) return []
  const lines = fs.readFileSync(reviewEventsPath, "utf8").split(/\n/).filter(Boolean)
  const series = new Map()
  for (const line of lines) {
    let e
    try {
      e = JSON.parse(line)
    } catch {
      continue
    }
    if (typeof e.ingredient !== "string" || !e.ingredient || typeof e.metal !== "string" || !e.metal) continue
    if (e.typical_ppb == null && e.p95_ppb == null) continue
    const key = `${e.ingredient}|${e.metal}`
    if (!series.has(key)) series.set(key, [])
    series.get(key).push(e)
  }
  const events = []
  for (const [key, evs] of series) {
    const [ingredient, metal] = key.split("|")
    const meta = ingredientMeta.get(ingredient) || {}
    evs.sort((a, b) => String(a.ts).localeCompare(String(b.ts)))
    let prev = null
    const kept = []
    for (const e of evs) {
      const sig = JSON.stringify([e.typical_ppb, e.p95_ppb, e.confidence, e.n_studies])
      if (prev && sig === prev.sig) continue
      let kind = null
      let detail = null
      if (!prev) {
        kind = "synthesis_new"
        detail = `Literature evidence first populated for ${metal} in ${ingredient} (n=${e.n_studies ?? "?"}, ${e.confidence ?? "?"} confidence).`
      } else {
        const tf = Math.max(shiftFactor(prev.e.typical_ppb, e.typical_ppb) || 0, shiftFactor(prev.e.p95_ppb, e.p95_ppb) || 0)
        if (tf >= SHIFT_FACTOR) {
          const dir = (repValue(e.typical_ppb) ?? 0) >= (repValue(prev.e.typical_ppb) ?? 0) ? "up" : "down"
          kind = `synthesis_shift_${dir}`
          detail = `${metal} in ${ingredient} synthesis moved ${dir} ${tf.toFixed(1)}x (typical ${JSON.stringify(prev.e.typical_ppb)}→${JSON.stringify(e.typical_ppb)} ppb).`
        } else if (prev.e.confidence !== e.confidence) {
          kind = "synthesis_confidence_changed"
          detail = `${metal} in ${ingredient} confidence ${prev.e.confidence} → ${e.confidence}.`
        }
      }
      if (kind) {
        kept.push({
          scope: "synthesis",
          kind,
          date: String(e.ts).slice(0, 10),
          ingredient,
          metal,
          page_url: meta.page_url || `${CANONICAL_BASE}/ingredients/${ingredient}`,
          detail,
          provenance: "review_events.jsonl (best-effort pre-watch reconstruction)",
          affected_categories: mapSynthesisToCategories(ingredient, metal, meta.aliases, products),
        })
      }
      prev = { sig, e }
    }
    // keep only the most recent few per series to bound seed noise
    events.push(...kept.slice(-MAX_SEED_EVENTS_PER_SERIES))
  }
  return events
}

// ── feed assembly ─────────────────────────────────────────────────────────────
function stableId(ev) {
  return eventId([ev.scope, ev.kind, ev.slug || ev.ingredient || "", ev.metal || "", ev.date, ev.detail || ""])
}

function readFeedIds() {
  if (!fs.existsSync(feedPath)) return new Set()
  const ids = new Set()
  for (const line of fs.readFileSync(feedPath, "utf8").split(/\n/)) {
    if (!line.trim()) continue
    try {
      ids.add(JSON.parse(line).id)
    } catch {}
  }
  return ids
}

function main() {
  fs.mkdirSync(watchDir, { recursive: true })

  const regsData = loadJson(regulationsPath, { records: [] })
  const regs = regsData.records || regsData
  const regBySlug = new Map(regs.map((r) => [r.slug, r]))

  const contamData = loadJson(contaminationPath, { records: [] })
  const contam = contamData.records || contamData
  const ingredientMeta = new Map(contam.map((i) => [i.ingredient, { page_url: i.page_url, aliases: i.aliases || [], category: i.category }]))

  const matrixMap = loadJson(path.join(repoRoot, "data/evidence/matrix-to-product-map.json"), {})
  const products = loadProducts()

  const today = new Date().toISOString().slice(0, 10)
  const currentReg = snapshotRegulations(regs)
  const currentSyn = snapshotSynthesis(contam)

  const priorState = loadJson(statePath, null)
  let events = []
  let mode
  if (!priorState) {
    mode = "seed"
    events = [...seedRegulatoryTimeline(regs, products, matrixMap), ...seedSynthesisHistory(ingredientMeta, products)]
  } else {
    mode = "diff"
    events = [
      ...diffRegulations(priorState.regulations || {}, currentReg, regBySlug, products, matrixMap, today),
      ...diffSynthesis(priorState.synthesis || {}, currentSyn, ingredientMeta, products, today),
    ]
  }

  // Assign ids, drop ones already in the feed.
  const existingIds = readFeedIds()
  const fresh = []
  for (const ev of events) {
    ev.id = stableId(ev)
    if (existingIds.has(ev.id)) continue
    existingIds.add(ev.id)
    fresh.push(ev)
  }
  fresh.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)) // newest first

  // Append fresh events to the durable feed.
  if (fresh.length) {
    const append = fresh.map((e) => JSON.stringify(e)).join("\n") + "\n"
    fs.appendFileSync(feedPath, append, "utf8")
  }

  // Save the new state snapshot (the next diff baseline).
  fs.writeFileSync(
    statePath,
    JSON.stringify({ updated_at: new Date().toISOString(), regulations: currentReg, synthesis: currentSyn }, null, 2) + "\n",
    "utf8",
  )

  // Build the served per-category rollup from the full feed.
  const allEvents = []
  for (const line of fs.readFileSync(feedPath, "utf8").split(/\n/)) {
    if (!line.trim()) continue
    try {
      allEvents.push(JSON.parse(line))
    } catch {}
  }
  allEvents.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

  const byCategory = {}
  for (const p of products) byCategory[p.slug] = { slug: p.slug, label: p.label, category_label: p.category_label, event_count: 0, recent_events: [] }
  for (const ev of allEvents) {
    for (const cat of ev.affected_categories || []) {
      const bucket = byCategory[cat.slug]
      if (!bucket) continue
      bucket.event_count++
      if (bucket.recent_events.length < MAX_RECENT_PER_CATEGORY) {
        bucket.recent_events.push({ id: ev.id, date: ev.date, scope: ev.scope, kind: ev.kind, detail: ev.detail, metals: ev.metals || (ev.metal ? [ev.metal] : []), match_strength: cat.match_strength, page_url: ev.page_url })
      }
    }
  }

  const payload = {
    generated_at: new Date().toISOString(),
    schema_version: SCHEMA_VERSION,
    canonical_base: CANONICAL_BASE,
    total_events: allEvents.length,
    categories_touched: Object.values(byCategory).filter((c) => c.event_count > 0).length,
    recent_global: allEvents.slice(0, 50).map((e) => ({ id: e.id, date: e.date, scope: e.scope, kind: e.kind, detail: e.detail, affected_categories: (e.affected_categories || []).map((c) => c.slug), page_url: e.page_url })),
    by_category: byCategory,
  }
  fs.mkdirSync(path.dirname(indexOutPath), { recursive: true })
  fs.writeFileSync(indexOutPath, JSON.stringify(payload, null, 2) + "\n", "utf8")

  writeDigest(allEvents, byCategory)

  console.error(
    `[change-watch] mode=${mode}; ${fresh.length} new event(s) this run; ${allEvents.length} in feed; ` +
      `${payload.categories_touched} categories touched. Index → ${path.relative(repoRoot, indexOutPath)}`,
  )
}

function writeDigest(allEvents, byCategory) {
  const lines = []
  lines.push("---")
  lines.push("title: Change-watch digest")
  lines.push("noindex: true")
  lines.push(`generated: ${new Date().toISOString()}`)
  lines.push("---")
  lines.push("")
  lines.push("# Regulatory and literature change-watch")
  lines.push("")
  lines.push(
    "What moved in the regulation or the cited literature that touches a certified product category. " +
      "Newest first. This is the staff view of the feed served at `/api/change-watch`.",
  )
  lines.push("")
  lines.push("## Most recent changes")
  lines.push("")
  for (const ev of allEvents.slice(0, 30)) {
    const cats = (ev.affected_categories || []).map((c) => c.slug.replace("products/", "")).slice(0, 4).join(", ")
    lines.push(`- **${ev.date}** · \`${ev.kind}\` — ${ev.detail}${cats ? ` _(touches: ${cats}${ev.affected_categories.length > 4 ? ", …" : ""})_` : ""}`)
  }
  lines.push("")
  const touched = Object.values(byCategory).filter((c) => c.event_count > 0).sort((a, b) => b.event_count - a.event_count)
  lines.push("## Categories by change volume")
  lines.push("")
  for (const c of touched.slice(0, 30)) {
    lines.push(`- ${c.label} — ${c.event_count} event(s)`)
  }
  lines.push("")
  fs.writeFileSync(digestPath, lines.join("\n") + "\n", "utf8")
}

export {
  mapRegulationToCategories,
  mapSynthesisToCategories,
  distinctiveTokens,
  shiftFactor,
  repValue,
  isLocked,
  stableId,
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
