// /api/risk-map — the supply-chain "your formula -> your risk" map. Given a
// bill of materials, it ranks which ingredients drive each metal's risk and
// cites the ingredient evidence behind each rank. A defensive-sourcing tool for
// brand QA and procurement; it sets no threshold and makes no pass/fail call.
//
// Method: GET
// Query parameters (one of):
//   ingredients — comma-separated ingredient slugs / names / aliases, e.g.
//                 ?ingredients=rice,cocoa,spinach,sunflower-seeds
//   category    — a locked product slug; uses that category's ingredient
//                 targets from the precomputed per-category map.
//
// Backed by /static/contamination.json (arbitrary lists, computed per request)
// and /static/category-risk-maps.json (precomputed per locked category), both
// rebuilt at prebuild and on every daemon tick.

import fs from "node:fs/promises"
import { buildContaminationIndex, buildRiskMap } from "../tools/lib/risk-map.mjs"

const CANONICAL_BASE = "https://heavymetalindex.com"
const CACHE_TTL_MS = 5 * 60 * 1000
const cache = {}

export default async function handler(req, res) {
  setCors(res)
  if (req.method === "OPTIONS") { res.status(204).end(); return }
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET, OPTIONS")
    res.status(405).json({ error: "Method not allowed. Use GET." })
    return
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host || "heavymetalindex.com"}`)
    const ingredientsParam = (url.searchParams.get("ingredients") || "").trim()
    let category = (url.searchParams.get("category") || "").trim().replace(/^\/+|\/+$/g, "")

    if (category) {
      if (!category.startsWith("products/")) category = `products/${category}`
      const maps = await loadJson(req, "category-risk-maps.json")
      const record = (maps.records || []).find((r) => r.category === category)
      if (!record) {
        res.status(404).json({
          error: `No precomputed risk map for "${category}". It must be a locked HMTc product row. For an arbitrary bill of materials use ?ingredients=a,b,c.`,
        })
        return
      }
      res.status(200).json({
        schema_version: maps.schema_version,
        retrieval_timestamp: new Date().toISOString(),
        generated_at: maps.generated_at,
        ...record,
      })
      return
    }

    if (!ingredientsParam) {
      res.status(400).json({
        error: "Provide ?ingredients=rice,cocoa,spinach (comma-separated) or ?category=<locked-product-slug>.",
      })
      return
    }

    const queries = ingredientsParam.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 80)
    const contamination = await loadJson(req, "contamination.json")
    const index = buildContaminationIndex(contamination.records || contamination)
    const map = buildRiskMap(queries, index, { canonicalBase: CANONICAL_BASE })

    res.status(200).json({
      schema_version: "hmi.risk-map.v1",
      retrieval_timestamp: new Date().toISOString(),
      disclaimer:
        "Ranks where heavy-metal exposure originates in the supplied ingredient list, by the literature-reported concentration for each ingredient. Ingredient-level evidence, not finished-product measurement, and not a certification threshold.",
      ...map,
    })
  } catch (error) {
    console.error(error)
    if (!res.headersSent) res.status(500).json({ error: "Risk map could not be assembled." })
  }
}

async function loadJson(req, name) {
  const now = Date.now()
  if (cache[name] && now - cache[name].at < CACHE_TTL_MS) return cache[name].data

  const baseUrl = getBaseUrl(req)
  try {
    const response = await fetch(new URL(`/static/${name}`, baseUrl), { headers: { accept: "application/json" } })
    if (response.ok) {
      const data = await response.json()
      cache[name] = { data, at: now }
      return data
    }
  } catch {
    // fall through to local file
  }
  const text = await fs.readFile(new URL(`../wiki/static/${name}`, import.meta.url), "utf8")
  const data = JSON.parse(text)
  cache[name] = { data, at: now }
  return data
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
}
