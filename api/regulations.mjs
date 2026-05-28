// /api/regulations — read-only regulatory-threshold query surface.
//
// Second public-API endpoint after /api/contamination. Reads
// public/static/regulations.json (built at prebuild by
// tools/build-regulations-dataset.mjs) and serves filtered JSON responses.
//
// Query parameters (all optional, all narrow the result set):
//   jurisdiction  — single-jurisdiction filter (ISO-style code, e.g. "US",
//                   "EU", "US-CA", or "international" for Codex/JECFA/WHO)
//   metal         — HMTc analyte code (Pb, Cd, iAs, tAs, MeHg, tHg, iHg, Ni,
//                   Al, Cr, Cr-VI, Sn, Sb, U)
//   matrix        — case-insensitive substring matched against matrices and
//                   the single-valued matrix field (e.g. "rice", "infant",
//                   "fish")
//   agency        — case-insensitive substring (e.g. "FDA", "EFSA", "Codex")
//   status        — exact match against frontmatter status ("finalized",
//                   "draft", "superseded", "interim")
//   format        — "json" (default) or "compact" (one record per matrix x
//                   metal pair, flattened)
//
// Response envelope mirrors /api/contamination: { generated_at, schema_version,
// license, attribution, query, record_count, records }.

import fs from "node:fs/promises"

const ALLOWED_METALS = new Set([
  "Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "iHg", "Ni", "Al", "Cr", "Cr-VI", "Sn", "Sb", "U",
])
const ALLOWED_STATUSES = new Set([
  "finalized",
  "draft",
  "proposed",
  "superseded",
  "interim",
  "guidance",
])

let cached
let cachedAt = 0
const CACHE_TTL_MS = 5 * 60 * 1000

export default async function handler(req, res) {
  setCors(res)
  if (req.method === "OPTIONS") { res.status(204).end(); return }
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET, OPTIONS")
    res.status(405).json({ error: "Method not allowed. Use GET." })
    return
  }

  try {
    const dataset = await loadDataset(req)
    const params = parseQuery(req)
    if (params.error) {
      res.status(400).json({ error: params.error })
      return
    }

    let records = dataset.records || []
    if (params.jurisdiction) {
      const j = params.jurisdiction.toLowerCase()
      records = records.filter((r) =>
        (r.jurisdictions || []).some((x) => String(x).toLowerCase() === j),
      )
    }
    if (params.metal) {
      records = records.filter((r) => (r.metals || []).includes(params.metal))
    }
    if (params.matrix) {
      const needle = params.matrix.toLowerCase()
      records = records.filter((r) =>
        (r.matrices || []).some((x) => String(x).toLowerCase().includes(needle)) ||
        (r.matrix && String(r.matrix).toLowerCase().includes(needle)),
      )
    }
    if (params.agency) {
      const needle = params.agency.toLowerCase()
      records = records.filter((r) => (r.agency || "").toLowerCase().includes(needle))
    }
    if (params.status) {
      records = records.filter((r) => (r.status || "").toLowerCase() === params.status)
    }

    if (params.format === "compact") {
      records = records.flatMap((r) => {
        const metals = (r.metals && r.metals.length) ? r.metals : [r.metal].filter(Boolean)
        const matrices = (r.matrices && r.matrices.length) ? r.matrices : [r.matrix].filter(Boolean)
        const rows = []
        for (const metal of metals.length ? metals : [null]) {
          for (const matrix of matrices.length ? matrices : [null]) {
            rows.push({
              slug: r.slug,
              rule_id: r.rule_id,
              title: r.title,
              jurisdiction: r.jurisdiction,
              agency: r.agency,
              metal,
              matrix,
              limit_value: r.limit_value,
              limit_unit: r.limit_unit,
              status: r.status,
              effective_date: r.effective_date,
              page_url: r.page_url,
              wiki_doi: r.wiki_doi,
            })
          }
        }
        return rows
      })
    }

    res.status(200).json({
      generated_at: dataset.generated_at,
      schema_version: dataset.schema_version,
      license: dataset.license,
      attribution: dataset.attribution,
      query: {
        jurisdiction: params.jurisdiction || null,
        metal: params.metal || null,
        matrix: params.matrix || null,
        agency: params.agency || null,
        status: params.status || null,
        format: params.format,
      },
      record_count: records.length,
      records,
    })
  } catch (error) {
    console.error(error)
    if (!res.headersSent) {
      res.status(500).json({ error: "Regulations API could not complete the request." })
    }
  }
}

function parseQuery(req) {
  const url = new URL(req.url, `http://${req.headers.host || "heavymetalindex.com"}`)
  const jurisdiction = (url.searchParams.get("jurisdiction") || "").trim()
  const metal = (url.searchParams.get("metal") || "").trim()
  const matrix = (url.searchParams.get("matrix") || "").trim()
  const agency = (url.searchParams.get("agency") || "").trim()
  const status = (url.searchParams.get("status") || "").trim().toLowerCase()
  const format = (url.searchParams.get("format") || "json").trim().toLowerCase()

  if (metal && !ALLOWED_METALS.has(metal)) {
    return { error: `Unknown metal "${metal}". Allowed values: ${[...ALLOWED_METALS].join(", ")}.` }
  }
  if (status && !ALLOWED_STATUSES.has(status)) {
    return { error: `Unknown status "${status}". Allowed values: ${[...ALLOWED_STATUSES].join(", ")}.` }
  }
  if (format !== "json" && format !== "compact") {
    return { error: `Unknown format "${format}". Use json or compact.` }
  }
  return { jurisdiction, metal, matrix, agency, status, format }
}

async function loadDataset(req) {
  const now = Date.now()
  if (cached && (now - cachedAt) < CACHE_TTL_MS) return cached

  const baseUrl = getBaseUrl(req)
  try {
    const response = await fetch(new URL("/static/regulations.json", baseUrl), {
      headers: { accept: "application/json" },
    })
    if (response.ok) {
      cached = await response.json()
      cachedAt = now
      return cached
    }
  } catch {
    // fall through
  }

  const text = await fs.readFile(
    new URL("../wiki/static/regulations.json", import.meta.url),
    "utf8",
  )
  cached = JSON.parse(text)
  cachedAt = now
  return cached
}

function getBaseUrl(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "heavymetalindex.com"
  const proto = req.headers["x-forwarded-proto"] || "https"
  return `${proto}://${host}`
}

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600")
  res.setHeader("Content-Type", "application/json; charset=utf-8")
}
