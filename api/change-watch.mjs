// /api/change-watch — the brand-facing early-warning feed. "What moved in the
// regulation or the cited literature that touches your products."
//
// Backed by public/static/change-watch-index.json, rebuilt every daemon tick
// and every deploy by tools/build-change-watch.mjs. The watcher is stateful:
// it snapshots the structured corpus and appends material changes to a durable
// feed, so this endpoint serves an accumulating changelog, not a one-shot view.
//
// Method: GET
// Query parameters:
//   category — product slug ("products/<x>" or "<x>"); returns that category's
//              recent change events (most recent first).
//   since    — ISO date (YYYY-MM-DD); returns all global events on/after it.
//   (none)   — returns the 50 most recent global events + summary counts.

import fs from "node:fs/promises"

const CACHE_TTL_MS = 5 * 60 * 1000
let cached
let cachedAt = 0

export default async function handler(req, res) {
  setCors(res)
  if (req.method === "OPTIONS") {
    res.status(204).end()
    return
  }
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET, OPTIONS")
    res.status(405).json({ error: "Method not allowed. Use GET." })
    return
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host || "heavymetalindex.com"}`)
    let category = (url.searchParams.get("category") || "").trim().replace(/^\/+|\/+$/g, "")
    const since = (url.searchParams.get("since") || "").trim()

    const dataset = await loadDataset(req)

    if (category) {
      if (!category.startsWith("products/")) category = `products/${category}`
      const bucket = (dataset.by_category || {})[category]
      if (!bucket) {
        res.status(404).json({
          error: `No change-watch bucket for "${category}". Covered categories are locked HMTc product rows.`,
        })
        return
      }
      res.status(200).json({
        schema_version: dataset.schema_version,
        retrieval_timestamp: new Date().toISOString(),
        generated_at: dataset.generated_at,
        category: bucket,
      })
      return
    }

    if (since) {
      const events = (dataset.recent_global || []).filter((e) => e.date >= since)
      res.status(200).json({
        schema_version: dataset.schema_version,
        retrieval_timestamp: new Date().toISOString(),
        since,
        event_count: events.length,
        events,
      })
      return
    }

    res.status(200).json({
      schema_version: dataset.schema_version,
      retrieval_timestamp: new Date().toISOString(),
      generated_at: dataset.generated_at,
      total_events: dataset.total_events,
      categories_touched: dataset.categories_touched,
      recent_global: dataset.recent_global,
    })
  } catch (error) {
    console.error(error)
    if (!res.headersSent) {
      res.status(500).json({ error: "Change-watch feed could not be assembled." })
    }
  }
}

async function loadDataset(req) {
  const now = Date.now()
  if (cached && now - cachedAt < CACHE_TTL_MS) return cached

  const baseUrl = getBaseUrl(req)
  try {
    const response = await fetch(new URL("/static/change-watch-index.json", baseUrl), {
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

  const text = await fs.readFile(
    new URL("../wiki/static/change-watch-index.json", import.meta.url),
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
}
