// /api/mcp — Heavy Metal Index MCP server (Streamable HTTP transport).
//
// JSON-RPC 2.0 over POST. Exposes the wiki as a set of tools an AI agent can
// call to ground its answers in per-claim provenance from heavymetalindex.com.
//
// Tools exposed (initial set):
//   contamination_lookup({ ingredient, metal? }) → per-analyte contamination
//     profile for an ingredient. Returns typical_ppb, p95_ppb, confidence,
//     n_studies, last_reviewed, plus a page_url + wiki_doi for citation.
//   regulation_lookup({ jurisdiction?, metal?, matrix? }) → matching
//     regulation pages with limit_value, limit_unit, status, effective_date,
//     and citation handles.
//   synthesis_lookup({ topic? }) → synthesis pages matching the topic, with
//     contributing_sources and the synthesis claim text.
//   search_evidence({ query, limit? }) → ranked Heavy Metal Index pages
//     matching a free-text query. Uses the same retrieval pipeline as
//     /api/ask but returns structured records without LLM rendering.
//   coverage_status({ scope? }) → corpus coverage at a glance: source count
//     by tier and source-type, ingredient/product/metal/regulation page
//     counts, contamination-profile completeness. Use when a user asks
//     "how much of X has the Heavy Metal Index indexed".
//   source_lookup({ cite_key }) → look up a source by its cite_key (the
//     wiki/sources/<slug> stem). Returns DOI, access URL, authors, year,
//     publication, evidence tier, review state, and the page URL.
//   regulation_history({ metal?, matrix?, jurisdiction? }) → chronological
//     timeline of regulatory thresholds matching the filters, ordered by
//     effective_date ascending, with superseded markers preserved so
//     downstream agents can see how a regulatory limit has moved over time.
//   product_category_lookup({ slug? , hmtc_category? , hmtc_row? }) → look
//     up an HMTc product-category page or all rows in a category. Returns
//     the row's clean/dirty designation, platform_metals, paired sibling,
//     contributing source count, and page URL.
//
// Every tool response carries the license envelope so downstream agents
// preserve attribution. Database-rights protections (see /licensing) are
// enforced at the usage layer; network access is open.
//
// Protocol: MCP 2025-03-26 Streamable HTTP. We accept JSON-RPC requests
// (initialize, tools/list, tools/call, ping) and respond with the appropriate
// JSON-RPC reply. SSE streaming is supported for `notifications/progress` on
// long-running tools (currently none).
//
// Reserved future tools: sub_national_geographic_query (when
// sampling_locations populates), variance_query (seasonal/geographic).

import fs from "node:fs/promises"
import path from "node:path"

const MCP_VERSION = "2025-03-26"
const SERVER_NAME = "heavy-metal-index"
const SERVER_VERSION = "0.1.0"

const LICENSE_ENVELOPE = {
  prose: "CC BY 4.0",
  structured_data: "EU database rights reserved — see https://heavymetalindex.com/licensing",
  attribution: "Heavy Metal Index (heavymetalindex.com), Paleo Foundation. Cite page_url or wiki_doi.",
  contact: "karen@paleofoundation.com",
}

const ALLOWED_METALS = new Set([
  "Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "iHg", "Ni", "Al", "Cr", "Cr-VI", "Sn", "Sb", "U",
])

const TOOLS = [
  {
    name: "contamination_lookup",
    description:
      "Get the contamination profile for an ingredient — per-analyte typical and 95th-percentile concentration ranges in ppb (µg/kg), confidence, sample size, and citation handles. Use this when a user asks about heavy-metal levels in a specific food ingredient (rice, cocoa, fish, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        ingredient: { type: "string", description: "Ingredient slug or alias (e.g. 'rice', 'brown-rice', 'cocoa')" },
        metal: {
          type: "string",
          description: "Optional HMTc-10 analyte code: Pb, Cd, iAs, tAs, MeHg, tHg, iHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U",
          enum: [...ALLOWED_METALS],
        },
      },
      required: ["ingredient"],
    },
  },
  {
    name: "regulation_lookup",
    description:
      "Find regulatory thresholds matching jurisdiction / metal / matrix. Returns limit_value, limit_unit, agency, status, effective_date, and citation handles. Use this when a user asks about regulatory limits, action levels, tolerable intakes, or jurisdiction-specific thresholds.",
    inputSchema: {
      type: "object",
      properties: {
        jurisdiction: {
          type: "string",
          description: "ISO jurisdiction code: EU, US, US-CA, US-WA, CN, MX, AU, NZ, EC, TR, or 'international' for Codex/JECFA/WHO",
        },
        metal: {
          type: "string",
          description: "HMTc-10 analyte code",
          enum: [...ALLOWED_METALS],
        },
        matrix: { type: "string", description: "Matrix substring (e.g. 'rice', 'infant', 'fish', 'dietary')" },
      },
    },
  },
  {
    name: "synthesis_lookup",
    description:
      "Find synthesis pages — cross-source analytical claims the Heavy Metal Index has published. Use when a user asks 'what does the literature conclude about X'. Returns the synthesis claim, confidence, contributing sources, and dissenting sources where present.",
    inputSchema: {
      type: "object",
      properties: {
        topic: { type: "string", description: "Topic substring matched against title and claim" },
      },
    },
  },
  {
    name: "search_evidence",
    description:
      "Free-text search across the public Heavy Metal Index corpus. Returns the top-ranked pages with title, slug, url, and a short excerpt. Use as a fallback when the structured lookups above don't fit the question.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Free-text query" },
        limit: { type: "integer", description: "Max results (default 10, max 25)", minimum: 1, maximum: 25 },
      },
      required: ["query"],
    },
  },
  {
    name: "coverage_status",
    description:
      "Corpus coverage at a glance — counts of source pages by tier and source type, ingredient/product/metal/regulation page totals, and contamination-profile completeness. Use when a user asks how much of a topic the Heavy Metal Index has indexed, or where the gaps are.",
    inputSchema: {
      type: "object",
      properties: {
        scope: {
          type: "string",
          description: "Optional scope hint ('ingredient', 'product', 'metal', 'regulation', 'source'). Defaults to a summary across all scopes.",
          enum: ["ingredient", "product", "metal", "regulation", "source", "summary"],
        },
      },
    },
  },
  {
    name: "source_lookup",
    description:
      "Look up a source page by its cite_key (the slug under wiki/sources/, e.g. 'angelon-gaetz2018-lead-spices-north-carolina'). Returns DOI, access URL, authors, year, publication, evidence tier, review state, and the page URL.",
    inputSchema: {
      type: "object",
      properties: {
        cite_key: { type: "string", description: "Source page slug (cite key)" },
      },
      required: ["cite_key"],
    },
  },
  {
    name: "regulation_history",
    description:
      "Chronological timeline of regulatory thresholds matching the filters, ordered by effective_date ascending. Supersedeed entries are preserved so downstream readers see how a limit has moved over time. Use for 'how has the limit changed' or 'what is the latest' questions.",
    inputSchema: {
      type: "object",
      properties: {
        metal: { type: "string", description: "HMTc analyte code", enum: [...ALLOWED_METALS] },
        matrix: { type: "string", description: "Matrix substring (e.g. 'rice', 'infant')" },
        jurisdiction: { type: "string", description: "ISO jurisdiction code" },
      },
    },
  },
  {
    name: "product_category_lookup",
    description:
      "Look up an HMTc product-category page or all rows in a category. Returns slug, title, hmtc_category, hmtc_row, variant_type (clean_benchmark / contamination_platform / whole_row_platform), pair (sibling slug), platform_metals, contributing source count, and page URL.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Product page slug, e.g. 'products/infant-formula-powder-non-soy'" },
        hmtc_category: { type: ["integer", "string"], description: "HMTc category number (e.g. 1 for infant and child foods)" },
        hmtc_row: { type: ["integer", "string"], description: "HMTc row within a category (used with hmtc_category)" },
      },
    },
  },
]

let cached
let cachedAt = 0
const CACHE_TTL_MS = 5 * 60 * 1000

export default async function handler(req, res) {
  setCors(res)
  if (req.method === "OPTIONS") { res.status(204).end(); return }
  if (req.method === "GET") {
    // MCP discovery probe — return server capabilities as a hint
    res.status(200).json({
      protocol: "mcp",
      transport: "streamable-http",
      protocolVersion: MCP_VERSION,
      serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
      endpoint: "/api/mcp",
      method: "POST (JSON-RPC 2.0)",
      tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
      license: LICENSE_ENVELOPE,
    })
    return
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST, OPTIONS")
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  let body
  try { body = await readJson(req) } catch { res.status(400).json({ error: "Invalid JSON body" }); return }

  const { jsonrpc, id, method, params } = body || {}
  if (jsonrpc !== "2.0" || !method) {
    res.status(400).json(rpcError(id, -32600, "Invalid Request — expected JSON-RPC 2.0 with method"))
    return
  }

  try {
    if (method === "initialize") {
      res.status(200).json(rpcResult(id, {
        protocolVersion: MCP_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
        instructions:
          "Heavy Metal Index MCP server. Use the tools to ground answers in the cited Heavy Metal Index corpus. Every response carries page_url and wiki_doi for attribution. Prose is CC BY 4.0; structured data is EU database rights reserved (see https://heavymetalindex.com/licensing).",
      }))
      return
    }
    if (method === "ping") { res.status(200).json(rpcResult(id, {})); return }
    if (method === "tools/list") { res.status(200).json(rpcResult(id, { tools: TOOLS })); return }
    if (method === "tools/call") {
      const { name, arguments: args } = params || {}
      const tool = TOOLS.find((t) => t.name === name)
      if (!tool) { res.status(200).json(rpcError(id, -32601, `Unknown tool: ${name}`)); return }
      const result = await callTool(name, args || {}, req)
      res.status(200).json(rpcResult(id, {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        isError: false,
      }))
      return
    }
    res.status(200).json(rpcError(id, -32601, `Method not found: ${method}`))
  } catch (err) {
    console.error("MCP error:", err)
    res.status(200).json(rpcError(id, -32603, `Internal error: ${String(err && err.message || err)}`))
  }
}

async function callTool(name, args, req) {
  switch (name) {
    case "contamination_lookup":      return await contaminationLookup(args, req)
    case "regulation_lookup":         return await regulationLookup(args, req)
    case "synthesis_lookup":          return await synthesisLookup(args, req)
    case "search_evidence":           return await searchEvidence(args, req)
    case "coverage_status":           return await coverageStatus(args, req)
    case "source_lookup":             return await sourceLookup(args, req)
    case "regulation_history":        return await regulationHistory(args, req)
    case "product_category_lookup":   return await productCategoryLookup(args, req)
    default: throw new Error(`Tool not implemented: ${name}`)
  }
}

async function contaminationLookup({ ingredient, metal }, req) {
  if (!ingredient || typeof ingredient !== "string") {
    return { error: "ingredient is required", license: LICENSE_ENVELOPE }
  }
  if (metal && !ALLOWED_METALS.has(metal)) {
    return { error: `Unknown metal: ${metal}`, allowed_metals: [...ALLOWED_METALS], license: LICENSE_ENVELOPE }
  }
  const dataset = await loadJson("/static/contamination.json", "../public/static/contamination.json", req)
  const needle = ingredient.toLowerCase()
  const matches = (dataset.records || []).filter((r) => {
    if (r.ingredient.toLowerCase() === needle) return true
    if (r.commodity && r.commodity.toLowerCase() === needle) return true
    if (Array.isArray(r.aliases) && r.aliases.some((a) => a.toLowerCase() === needle || a.toLowerCase().replace(/\s+/g, "-") === needle)) return true
    return false
  })
  const result = {
    query: { ingredient, metal: metal || null },
    matched_ingredients: matches.length,
    records: matches.map((r) => ({
      ingredient: r.ingredient,
      title: r.title,
      category: r.category,
      page_url: r.page_url,
      wiki_doi: r.wiki_doi,
      metals: metal ? (r.metals[metal] ? { [metal]: r.metals[metal] } : {}) : r.metals,
    })),
    license: LICENSE_ENVELOPE,
  }
  if (matches.length === 0) {
    result.note = `No ingredient page found for "${ingredient}". The Heavy Metal Index may not yet carry a profile for this ingredient. Try search_evidence with the ingredient name as the query.`
  }
  return result
}

async function regulationLookup({ jurisdiction, metal, matrix }, req) {
  if (metal && !ALLOWED_METALS.has(metal)) {
    return { error: `Unknown metal: ${metal}`, allowed_metals: [...ALLOWED_METALS], license: LICENSE_ENVELOPE }
  }
  const regs = await filterRegulations({ jurisdiction, metal, matrix }, req)
  return {
    query: { jurisdiction: jurisdiction || null, metal: metal || null, matrix: matrix || null },
    matched_regulations: regs.length,
    records: regs.slice(0, 50),
    license: LICENSE_ENVELOPE,
  }
}

async function filterRegulations({ jurisdiction, metal, matrix }, req) {
  const dataset = await loadJson("/static/regulations.json", "../wiki/static/regulations.json", req).catch(() => null)
  if (!dataset?.records) return []
  let regs = dataset.records
  if (jurisdiction) {
    const j = jurisdiction.toLowerCase()
    regs = regs.filter((r) => (r.jurisdictions || []).some((x) => String(x).toLowerCase() === j))
  }
  if (metal) {
    regs = regs.filter((r) => (r.metals || []).includes(metal))
  }
  if (matrix) {
    const m = matrix.toLowerCase()
    regs = regs.filter((r) =>
      (r.matrices || []).some((x) => String(x).toLowerCase().includes(m)) ||
      (r.matrix && String(r.matrix).toLowerCase().includes(m)),
    )
  }
  return regs
}

async function synthesisLookup({ topic }, req) {
  const corpus = await loadCorpus(req)
  const needle = (topic || "").toLowerCase()
  const matches = needle
    ? corpus.synthesis.filter((s) =>
        (s.title || "").toLowerCase().includes(needle) ||
        (s.claim || "").toLowerCase().includes(needle))
    : corpus.synthesis
  return {
    query: { topic: topic || null },
    matched_syntheses: matches.length,
    records: matches.slice(0, 25),
    license: LICENSE_ENVELOPE,
  }
}

async function searchEvidence({ query, limit }, req) {
  if (!query || typeof query !== "string") {
    return { error: "query is required", license: LICENSE_ENVELOPE }
  }
  const cap = Math.min(Math.max(Number(limit) || 10, 1), 25)
  const contentIndex = await loadJson("/static/contentIndex.json", "../public/static/contentIndex.json", req)
  const tokens = query.toLowerCase().match(/[a-z0-9]+/g) || []
  const scored = []
  for (const [slug, page] of Object.entries(contentIndex)) {
    if (!isPublicSlug(slug)) continue
    const title = String(page.title || "").toLowerCase()
    const content = String(page.content || "").toLowerCase()
    let score = 0
    for (const t of tokens) {
      if (t.length < 2) continue
      if (title.includes(t)) score += 10
      if (slug.toLowerCase().includes(t)) score += 6
      const m = content.match(new RegExp(escapeRegExp(t), "g"))
      if (m) score += Math.min(m.length, 8)
    }
    if (score > 0) scored.push({ slug, title: page.title || slug, score, url: `https://heavymetalindex.com/${slug === "index" ? "" : slug}` })
  }
  scored.sort((a, b) => b.score - a.score)
  return {
    query: { query, limit: cap },
    matched_pages: scored.length,
    records: scored.slice(0, cap),
    license: LICENSE_ENVELOPE,
  }
}

async function coverageStatus({ scope }, req) {
  const contentIndex = await loadJson("/static/contentIndex.json", "../public/static/contentIndex.json", req)
  const contamination = await loadJson("/static/contamination.json", "../wiki/static/contamination.json", req).catch(() => null)
  const regulations = await loadJson("/static/regulations.json", "../wiki/static/regulations.json", req).catch(() => null)
  const counts = { source: 0, ingredient: 0, product: 0, metal: 0, regulation: 0, synthesis: 0 }
  for (const slug of Object.keys(contentIndex)) {
    if (!isPublicSlug(slug)) continue
    if (slug.startsWith("sources/") && slug !== "sources/index") counts.source++
    else if (slug.startsWith("ingredients/") && slug !== "ingredients/index") counts.ingredient++
    else if (slug.startsWith("products/") && slug !== "products/index") counts.product++
    else if (slug.startsWith("metals/") && slug !== "metals/index") counts.metal++
    else if (slug.startsWith("regulations/") && !["regulations/index", "regulations/by-jurisdiction", "regulations/timeline"].includes(slug)) counts.regulation++
    else if (slug.startsWith("synthesis/") && slug !== "synthesis/index") counts.synthesis++
  }
  let contaminationProfileCoverage = null
  if (contamination?.records) {
    // The dataset emits every metal sub-block per ingredient with status:populated,
    // including cells that have not yet been synthesized (n_studies: 0, confidence: null).
    // The meaningful coverage metric is "actually-synthesized" cells: confidence is
    // set and n_studies > 0. Everything else is data-thin.
    let totalCells = 0
    let synthesized = 0
    let dataThin = 0
    for (const r of contamination.records) {
      for (const cell of Object.values(r.metals || {})) {
        totalCells++
        const hasConfidence = cell.confidence != null && cell.confidence !== ""
        const hasStudies = (cell.n_studies || 0) > 0
        if (hasConfidence && hasStudies) synthesized++
        else dataThin++
      }
    }
    contaminationProfileCoverage = {
      total_cells: totalCells,
      synthesized,
      data_thin: dataThin,
      percent_synthesized: totalCells ? +(synthesized / totalCells * 100).toFixed(1) : 0,
    }
  }
  const jurisdictions = regulations?.records
    ? new Set(regulations.records.flatMap((r) => r.jurisdictions || [])).size
    : 0
  const result = {
    query: { scope: scope || "summary" },
    page_counts: counts,
    regulation_jurisdictions: jurisdictions,
    contamination_profile_coverage: contaminationProfileCoverage,
    coverage_page_url: "https://heavymetalindex.com/coverage",
    methodology_page_url: "https://heavymetalindex.com/methodology",
    license: LICENSE_ENVELOPE,
  }
  if (scope && scope !== "summary") {
    const key = scope
    result.detail = key in counts ? { [key]: counts[key] } : { note: `Unknown scope "${scope}". Use ingredient | product | metal | regulation | source | summary.` }
  }
  return result
}

async function sourceLookup({ cite_key }, req) {
  if (!cite_key || typeof cite_key !== "string") {
    return { error: "cite_key is required (the wiki/sources/<slug> stem).", license: LICENSE_ENVELOPE }
  }
  const slug = cite_key.startsWith("sources/") ? cite_key : `sources/${cite_key}`
  const contentIndex = await loadJson("/static/contentIndex.json", "../public/static/contentIndex.json", req)
  const page = contentIndex[slug]
  if (!page) {
    return {
      query: { cite_key },
      matched: false,
      note: `No source page found for cite_key "${cite_key}". Source pages live under wiki/sources/. Try search_evidence with author/year terms.`,
      license: LICENSE_ENVELOPE,
    }
  }
  return {
    query: { cite_key },
    matched: true,
    record: {
      cite_key: slug.replace(/^sources\//, ""),
      title: page.title || slug,
      page_url: `https://heavymetalindex.com/${slug}`,
      wiki_doi: page.wiki_doi || null,
      doi: page.doi || null,
      access_url: page.access_url || null,
      publication: page.publication || null,
      year: page.year || null,
      authors: asArray(page.authors),
      source_type: page.source_type || null,
      evidence_tier: page.evidence_tier || null,
      review_state: page.review_state || null,
      license: page.license || null,
      metals: asArray(page.metals),
      matrices: asArray(page.matrices),
      jurisdictions: asArray(page.jurisdictions),
    },
    license: LICENSE_ENVELOPE,
  }
}

async function regulationHistory({ metal, matrix, jurisdiction }, req) {
  if (metal && !ALLOWED_METALS.has(metal)) {
    return { error: `Unknown metal: ${metal}`, allowed_metals: [...ALLOWED_METALS], license: LICENSE_ENVELOPE }
  }
  const regs = [...await filterRegulations({ jurisdiction, metal, matrix }, req)]
  const FAR_FUTURE = "9999-12-31"
  regs.sort((a, b) => {
    const ad = a.effective_date || FAR_FUTURE
    const bd = b.effective_date || FAR_FUTURE
    return String(ad).localeCompare(String(bd))
  })
  return {
    query: { metal: metal || null, matrix: matrix || null, jurisdiction: jurisdiction || null },
    matched_regulations: regs.length,
    timeline: regs.map((r) => ({
      slug: r.slug,
      rule_id: r.rule_id,
      title: r.title,
      jurisdictions: r.jurisdictions,
      agency: r.agency,
      metals: r.metals,
      matrices: r.matrices,
      limit_value: r.limit_value,
      limit_unit: r.limit_unit,
      status: r.status,
      effective_date: r.effective_date,
      page_url: r.page_url,
      wiki_doi: r.wiki_doi,
    })),
    license: LICENSE_ENVELOPE,
  }
}

async function productCategoryLookup({ slug, hmtc_category, hmtc_row }, req) {
  const contentIndex = await loadJson("/static/contentIndex.json", "../public/static/contentIndex.json", req)
  let matches = []
  if (slug) {
    const target = slug.startsWith("products/") ? slug : `products/${slug}`
    const page = contentIndex[target]
    if (page) matches.push({ slug: target, page })
  } else if (hmtc_category !== undefined && hmtc_category !== null) {
    const cat = String(hmtc_category)
    const row = hmtc_row !== undefined && hmtc_row !== null ? String(hmtc_row) : null
    for (const [s, p] of Object.entries(contentIndex)) {
      if (!s.startsWith("products/") || s === "products/index") continue
      if (String(p.hmtc_category ?? "") !== cat) continue
      if (row && String(p.hmtc_row ?? "") !== row) continue
      matches.push({ slug: s, page: p })
    }
  } else {
    return {
      error: "Provide either slug, or hmtc_category (optionally with hmtc_row).",
      license: LICENSE_ENVELOPE,
    }
  }
  if (matches.length === 0) {
    return {
      query: { slug: slug || null, hmtc_category: hmtc_category ?? null, hmtc_row: hmtc_row ?? null },
      matched_rows: 0,
      note: "No matching product-category page found.",
      license: LICENSE_ENVELOPE,
    }
  }
  return {
    query: { slug: slug || null, hmtc_category: hmtc_category ?? null, hmtc_row: hmtc_row ?? null },
    matched_rows: matches.length,
    records: matches.map(({ slug: s, page }) => ({
      slug: s,
      title: page.title || s,
      page_url: `https://heavymetalindex.com/${s}`,
      wiki_doi: page.wiki_doi || null,
      hmtc_category: page.hmtc_category ?? null,
      hmtc_row: page.hmtc_row ?? null,
      variant_type: page.variant_type || null,
      pair: page.pair || null,
      platform_metals: asArray(page.platform_metals),
      provisional_scaffold: page.provisional_scaffold ?? page.pending_category_lock ?? null,
      sources_count: page.sources ?? page.sources_count ?? null,
    })),
    license: LICENSE_ENVELOPE,
  }
}

// ---------- corpus loader (regulations + synthesis) ----------

async function loadCorpus(req) {
  const now = Date.now()
  if (cached && (now - cachedAt) < CACHE_TTL_MS) return cached

  const contentIndex = await loadJson("/static/contentIndex.json", "../public/static/contentIndex.json", req)

  const regulations = []
  const synthesis = []
  for (const [slug, page] of Object.entries(contentIndex)) {
    if (slug.startsWith("regulations/") && !["regulations/index", "regulations/by-jurisdiction", "regulations/timeline"].includes(slug)) {
      regulations.push({
        slug,
        title: page.title || slug,
        page_url: `https://heavymetalindex.com/${slug}`,
        wiki_doi: page.wiki_doi || null,
        jurisdictions: asArray(page.jurisdiction || page.jurisdictions),
        agency: page.agency || page.authority || null,
        metals: asArray(page.metals || page.metal),
        matrices: asArray(page.matrix || page.matrices),
        limit_value: page.limit_value ?? null,
        limit_unit: page.limit_unit || null,
        status: page.status || null,
        effective_date: page.effective_date || null,
      })
    }
    if (slug.startsWith("synthesis/") && slug !== "synthesis/index") {
      synthesis.push({
        slug,
        title: page.title || slug,
        page_url: `https://heavymetalindex.com/${slug}`,
        wiki_doi: page.wiki_doi || null,
        claim: page.claim || null,
        confidence: page.confidence || null,
        contributing_sources: asArray(page.contributing_sources),
        dissenting_sources: asArray(page.dissenting_sources),
      })
    }
  }

  cached = { regulations, synthesis }
  cachedAt = now
  return cached
}

async function loadJson(publicPath, localPath, req) {
  const baseUrl = getBaseUrl(req)
  try {
    const r = await fetch(new URL(publicPath, baseUrl), { headers: { accept: "application/json" } })
    if (r.ok) return await r.json()
  } catch { /* fall through */ }
  const text = await fs.readFile(new URL(localPath, import.meta.url), "utf8")
  return JSON.parse(text)
}

function asArray(value) {
  if (Array.isArray(value)) return value
  if (value === null || value === undefined || value === "") return []
  return [value]
}

function isPublicSlug(slug) {
  const PRIVATE_PREFIXES = ["app/", "certification/", "courses/", "lint/", "log", "queries/", "tags/"]
  return !PRIVATE_PREFIXES.some((p) => slug === p.replace("/", "") || slug.startsWith(p))
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// ---------- JSON-RPC helpers ----------

function rpcResult(id, result) { return { jsonrpc: "2.0", id: id ?? null, result } }
function rpcError(id, code, message) { return { jsonrpc: "2.0", id: id ?? null, error: { code, message } } }

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body
  if (typeof req.body === "string") return JSON.parse(req.body || "{}")
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString("utf8")
  return raw ? JSON.parse(raw) : {}
}

function getBaseUrl(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "heavymetalindex.com"
  const proto = req.headers["x-forwarded-proto"] || "https"
  return `${proto}://${host}`
}

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, MCP-Protocol-Version")
  res.setHeader("Content-Type", "application/json; charset=utf-8")
  res.setHeader("Cache-Control", "no-store")
}
