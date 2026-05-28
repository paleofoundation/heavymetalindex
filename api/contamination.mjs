// /api/contamination — read-only contamination-profile query surface.
// First skeleton of api.heavymetalindex.com (see wiki/roadmap.md § Shift 3).
//
// Reads public/static/contamination.json (built at prebuild by
// tools/build-contamination-dataset.mjs) and serves filtered JSON responses.
//
// Query parameters (all optional, all narrow the result set):
//   ingredient — slug or alias (e.g. "rice", "brown-rice", "rice flour")
//   metal      — HMTc analyte code (Pb, Cd, iAs, tAs, MeHg, tHg, iHg, Ni, Al, Cr, Sn, U)
//   confidence — minimum confidence ("low", "medium", "high")
//   category   — ingredient category ("grain", "seafood", "spices", etc.)
//   format     — "json" (default) or "compact" (single-level cells flattened)
//
// Examples:
//   GET /api/contamination?ingredient=rice
//   GET /api/contamination?ingredient=rice&metal=iAs
//   GET /api/contamination?metal=Cd&confidence=high&format=compact
//
// Response envelope is stable: changes are additive only. The schema is
// documented at https://heavymetalindex.com/licensing and the underlying
// dataset's machine-readable version is the `schema_version` field in the
// response body.

import fs from "node:fs/promises"

const CONFIDENCE_RANK = { low: 1, medium: 2, high: 3 }
const ALLOWED_METALS = new Set([
  "Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "iHg", "Ni", "Al", "Cr", "Cr-VI", "Sn", "Sb", "U",
])

let cached
let cachedAt = 0
const CACHE_TTL_MS = 5 * 60 * 1000

export default async function handler(req, res) {
  setCorsAndCache(res)

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

    let records = dataset.records
    if (params.ingredient) {
      const needle = params.ingredient.toLowerCase()
      records = records.filter((r) => {
        if (r.ingredient.toLowerCase() === needle) return true
        if (r.commodity && r.commodity.toLowerCase() === needle) return true
        if (Array.isArray(r.aliases) && r.aliases.some((a) => a.toLowerCase() === needle)) return true
        // Allow slug-with-hyphens to match space-separated alias
        if (Array.isArray(r.aliases) && r.aliases.some((a) => a.toLowerCase().replace(/\s+/g, "-") === needle)) return true
        return false
      })
    }
    if (params.category) {
      records = records.filter((r) => (r.category || "").toLowerCase() === params.category.toLowerCase())
    }

    // Apply metal/confidence filters to the metals sub-blocks; drop records
    // that have no matching cells after filtering.
    if (params.metal || params.minConfidence) {
      records = records
        .map((r) => {
          const filteredMetals = {}
          for (const [metal, cell] of Object.entries(r.metals || {})) {
            if (params.metal && metal !== params.metal) continue
            if (params.minConfidence) {
              const rank = CONFIDENCE_RANK[(cell.confidence || "").toLowerCase()] || 0
              if (rank < CONFIDENCE_RANK[params.minConfidence]) continue
            }
            filteredMetals[metal] = cell
          }
          return { ...r, metals: filteredMetals }
        })
        .filter((r) => Object.keys(r.metals).length > 0)
    }

    if (params.format === "compact") {
      records = records.flatMap((r) =>
        Object.entries(r.metals).map(([metal, cell]) => ({
          ingredient: r.ingredient,
          title: r.title,
          metal,
          ...cell,
          page_url: r.page_url,
          wiki_doi: r.wiki_doi,
        })),
      )
    }

    res.status(200).json({
      generated_at: dataset.generated_at,
      schema_version: dataset.schema_version,
      license: dataset.license,
      attribution: dataset.attribution,
      query: {
        ingredient: params.ingredient || null,
        metal: params.metal || null,
        category: params.category || null,
        min_confidence: params.minConfidence || null,
        format: params.format,
      },
      record_count: records.length,
      records,
    })
  } catch (error) {
    console.error(error)
    if (!res.headersSent) {
      res.status(500).json({ error: "Contamination API could not complete the request." })
    }
  }
}

function parseQuery(req) {
  const url = new URL(req.url, `http://${req.headers.host || "heavymetalindex.com"}`)
  const ingredient = (url.searchParams.get("ingredient") || "").trim()
  const metal = (url.searchParams.get("metal") || "").trim()
  const category = (url.searchParams.get("category") || "").trim()
  const minConfidence = (url.searchParams.get("confidence") || "").trim().toLowerCase()
  const format = (url.searchParams.get("format") || "json").trim().toLowerCase()

  if (metal && !ALLOWED_METALS.has(metal)) {
    return { error: `Unknown metal "${metal}". Allowed values: ${[...ALLOWED_METALS].join(", ")}.` }
  }
  if (minConfidence && !CONFIDENCE_RANK[minConfidence]) {
    return { error: `Unknown confidence "${minConfidence}". Use low, medium, or high.` }
  }
  if (format !== "json" && format !== "compact") {
    return { error: `Unknown format "${format}". Use json or compact.` }
  }

  return { ingredient, metal, category, minConfidence, format }
}

async function loadDataset(req) {
  const now = Date.now()
  if (cached && (now - cachedAt) < CACHE_TTL_MS) return cached

  // Prefer fetching the deployed artifact so the function always serves the
  // version that matches the current site. Falls back to the local bundled
  // copy in dev / preview deployments where the artifact may not be public yet.
  const baseUrl = getBaseUrl(req)
  try {
    const response = await fetch(new URL("/static/contamination.json", baseUrl), {
      headers: { accept: "application/json" },
    })
    if (response.ok) {
      cached = await response.json()
      cachedAt = now
      return cached
    }
  } catch {
    // fall through to local file
  }

  const text = await fs.readFile(new URL("../wiki/static/contamination.json", import.meta.url), "utf8")
  cached = JSON.parse(text)
  cachedAt = now
  return cached
}

function getBaseUrl(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "heavymetalindex.com"
  const proto = req.headers["x-forwarded-proto"] || "https"
  return `${proto}://${host}`
}

function setCorsAndCache(res) {
  // CORS: allow public read from any origin. The structured-data license
  // posture is enforced at the usage level (see /licensing), not at the
  // network level — bulk extraction protections are commercial-license terms,
  // not network blocks.
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  // Edge cache the artifact for 5 minutes — refresh on the cadence the
  // underlying dataset can plausibly change (one prebuild per push).
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600")
  res.setHeader("Content-Type", "application/json; charset=utf-8")
}
