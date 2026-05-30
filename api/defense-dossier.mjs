// /api/defense-dossier — the Certification Defense Dossier for a single locked
// HMTc product row, served as a filing-ready JSON package for brand-legal,
// Daubert-support, and retailer-compliance readers.
//
// Where /api/evidence-packet pins ONE page, this endpoint assembles the whole
// defense package for a certification row: the product page pin, every
// contributing literature source (each pinned), the declared regulatory caps,
// and the claim-by-claim provenance summary. The deterministic core is built
// at prebuild by tools/build-defense-dossier.mjs into
// public/static/defense-dossier-index.json; this endpoint adds the per-request
// retrieval timestamp and echoes the license + attestation envelope.
//
// Method: GET
// Query parameters:
//   slug        — product slug (required). Accepts "products/<x>", "<x>", or a
//                 leading slash; all normalize to "products/<x>".
//   download=1  — sets Content-Disposition so the browser saves the dossier as
//                 <slug>.defense-dossier.json
//   format      — "json" (default). PDF reserved for future work.

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
    let slug = (url.searchParams.get("slug") || "").trim().replace(/^\/+|\/+$/g, "")
    const download = url.searchParams.get("download") === "1"
    const format = (url.searchParams.get("format") || "json").trim().toLowerCase()

    if (!slug) {
      res.status(400).json({
        error: "slug is required, e.g. ?slug=infant-formula-powder-non-soy",
      })
      return
    }
    if (!slug.startsWith("products/")) slug = `products/${slug}`
    if (format !== "json") {
      res.status(400).json({
        error: "Only format=json is currently supported. PDF dossiers are tracked as future work.",
      })
      return
    }

    const dataset = await loadDataset(req)
    const record = (dataset.records || []).find((r) => r.product?.slug === slug)
    if (!record) {
      res.status(404).json({
        error: `No defense dossier for slug "${slug}". Dossiers cover locked HMTc product rows only; provisional scaffolds and non-product pages are excluded by design. List available rows at /static/defense-dossier-index.json.`,
        license: dataset.license,
      })
      return
    }

    const manifest = {
      schema_version: dataset.schema_version,
      manifest_kind: record.manifest_kind,
      retrieval_timestamp: new Date().toISOString(),
      generated_at: dataset.generated_at,
      git_remote: dataset.git_remote,
      ...record,
      license: dataset.license,
      attestation: dataset.attestation,
    }

    res.setHeader("Content-Type", "application/json; charset=utf-8")
    if (download) {
      const filename = `${slug.replace(/\//g, "_")}.defense-dossier.json`
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`)
    }
    res.status(200).end(JSON.stringify(manifest, null, 2))
  } catch (error) {
    console.error(error)
    if (!res.headersSent) {
      res.status(500).json({ error: "Defense dossier could not be assembled." })
    }
  }
}

async function loadDataset(req) {
  const now = Date.now()
  if (cached && now - cachedAt < CACHE_TTL_MS) return cached

  const baseUrl = getBaseUrl(req)
  try {
    const response = await fetch(new URL("/static/defense-dossier-index.json", baseUrl), {
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
    new URL("../wiki/static/defense-dossier-index.json", import.meta.url),
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
