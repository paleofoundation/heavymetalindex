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
// Future tools (named so the gap is visible): coverage_status, source_lookup
// by cite_key, regulation_history (timeline view), product_category_lookup,
// sub_national_geographic_query (when sampling_locations populates).

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
    case "contamination_lookup": return await contaminationLookup(args, req)
    case "regulation_lookup":    return await regulationLookup(args, req)
    case "synthesis_lookup":     return await synthesisLookup(args, req)
    case "search_evidence":      return await searchEvidence(args, req)
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
  const corpus = await loadCorpus(req)
  let regs = corpus.regulations
  if (jurisdiction) {
    const j = jurisdiction.toLowerCase()
    regs = regs.filter((r) => (r.jurisdictions || []).some((x) => String(x).toLowerCase() === j))
  }
  if (metal) {
    regs = regs.filter((r) => (r.metals || []).includes(metal))
  }
  if (matrix) {
    const m = matrix.toLowerCase()
    regs = regs.filter((r) => (r.matrices || []).some((x) => String(x).toLowerCase().includes(m)))
  }
  return {
    query: { jurisdiction: jurisdiction || null, metal: metal || null, matrix: matrix || null },
    matched_regulations: regs.length,
    records: regs.slice(0, 50),
    license: LICENSE_ENVELOPE,
  }
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
