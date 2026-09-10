// /api/evidence-packet — brand-legal / regulatory evidence manifest for a
// single Heavy Metal Index page.
//
// Closes the roadmap Shift 3 gap ("On-demand PDFs and signed manifests with
// DOI-pinned page versions, suitable for filing as litigation exhibits").
// This first version emits a deterministic JSON manifest; a PDF rendering
// surface is a future enhancement.
//
// Method: GET
// Query parameters:
//   slug        — page slug (required), e.g. "ingredients/turmeric"
//   download=1  — sets Content-Disposition: attachment so the browser
//                 downloads the manifest as <slug>.evidence-packet.json
//   format      — "json" (default). PDF reserved for future use.
//
// The manifest carries:
//   - retrieval_timestamp: ISO 8601 UTC, set per request
//   - canonical_url, title, page_type, wiki_doi, audience
//   - canonical authored-body and metadata hashes, with a reproducible verifier
//   - separate exact published-body / full-Markdown checksums
//   - last_commit_sha + last_commit_date — the git pin
//   - contributing_sources — the source pages this page derives from
//   - license envelope (CC BY 4.0 prose, EU database rights structured)
//   - conditional attestation: never asserts a Git pin without verified content
//
// The endpoint reads from public/static/evidence-packet-index.json, built at
// prebuild by tools/build-evidence-packet-index.mjs. Both files are tagged
// with the same schema_version.

import fs from "node:fs/promises"
import { EVIDENCE_PACKET_SCHEMA, isVerifiedPin, manifestContentPin } from "../tools/lib/evidence-packet.mjs"

const CACHE_TTL_MS = 5 * 60 * 1000
let cached
let cachedAt = 0

const LICENSE_ENVELOPE = {
  prose: "CC BY 4.0",
  structured_data: "EU database rights reserved — see https://heavymetalindex.com/licensing",
  attribution:
    "Heavy Metal Index (heavymetalindex.com), Institute of Contaminant Standards. Cite canonical_url or wiki_doi.",
  contact: "karen@paleofoundation.com",
}

export function evidencePacketManifest(record, dataset, retrievalTimestamp = new Date().toISOString()) {
  const verified = isVerifiedPin(record)
  return {
    schema_version: EVIDENCE_PACKET_SCHEMA,
    source_index_schema_version: dataset.schema_version,
    manifest_kind: "heavy_metal_index_evidence_packet",
    retrieval_timestamp: retrievalTimestamp,
    page: { slug: record.slug, title: record.title, description: record.description,
      page_type: record.page_type, audience: record.audience,
      canonical_url: record.canonical_url, wiki_doi: record.wiki_doi },
    content_pin: manifestContentPin(record),
    contributing_sources: record.contributing_sources,
    data_downloads: record.data_downloads || [],
    ingest_contract: record.ingest_contract || null,
    license: LICENSE_ENVELOPE,
    attestation: {
      for_use: "Citation, regulatory submission, or peer-review supplementary record.",
      verifiable_by: verified
        ? "The verify_command checks the authored Markdown and semantic frontmatter against the named Git revision using the documented canonical hash scheme. Generated history and reference blocks are excluded from that pin; separate published checksums include them."
        : "This manifest reports build-input checksums but has no verified Git pin. It cannot establish that these page bytes correspond to a named Git revision.",
      not_a_certification: "This manifest records publication provenance. It does not certify products or independently validate the page's scientific claims.",
      license_terms: "https://heavymetalindex.com/licensing",
    },
    generated_at: dataset.generated_at,
  }
}

export function createEvidencePacketHandler({ load = loadDataset } = {}) {
 return async function handler(req, res) {
  setCors(res)
  if (req.method === "OPTIONS") { res.status(204).end(); return }
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET, OPTIONS")
    res.status(405).json({ error: "Method not allowed. Use GET." })
    return
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host || "heavymetalindex.com"}`)
    const slug = (url.searchParams.get("slug") || "").trim().replace(/^\/+|\/+$/g, "")
    const download = url.searchParams.get("download") === "1"
    const format = (url.searchParams.get("format") || "json").trim().toLowerCase()

    if (!slug) {
      res.status(400).json({ error: "slug is required, e.g. ?slug=ingredients/turmeric" })
      return
    }
    if (format !== "json") {
      res.status(400).json({
        error: "Only format=json is currently supported. PDF manifests are tracked as future work.",
      })
      return
    }

    const dataset = await load(req)
    const record = (dataset.records || []).find((r) => r.slug === slug)
    if (!record) {
      res.status(404).json({
        error: `No public page found for slug "${slug}". The evidence-packet index covers public reference pages only; internal pages (workbench, lint, log, queries) are excluded by design.`,
        license: LICENSE_ENVELOPE,
      })
      return
    }

    const manifest = evidencePacketManifest(record, dataset)

    res.setHeader("Content-Type", "application/json; charset=utf-8")
    if (download) {
      const filename = `${record.slug.replace(/\//g, "_")}.evidence-packet.json`
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`)
    }
    res.status(200).end(JSON.stringify(manifest, null, 2))
  } catch (error) {
    console.error(error)
    if (!res.headersSent) {
      res.status(500).json({ error: "Evidence packet could not be assembled." })
    }
  }
}

}

export default createEvidencePacketHandler()

async function loadDataset(req) {
  const now = Date.now()
  if (cached && (now - cachedAt) < CACHE_TTL_MS) return cached

  // Prefer the artifact bundled with this deployment. A preview must not fetch
  // the production site's index and attest to a different build's content.
  try {
    cached = JSON.parse(await fs.readFile(new URL("../wiki/static/evidence-packet-index.json", import.meta.url), "utf8"))
  } catch {
    const baseUrl = getBaseUrl(req)
    const response = await fetch(new URL("/static/evidence-packet-index.json", baseUrl), { headers: { accept: "application/json" } })
    if (!response.ok) throw new Error("Evidence packet index is unavailable")
    cached = await response.json()
  }
  if (!Array.isArray(cached?.records)) { cached = undefined; throw new Error("Invalid evidence packet index") }
  cachedAt = now
  return cached
}

function getBaseUrl(req) {
  const host = String(req.headers.host || "heavymetalindex.com").toLowerCase()
  if (host === "heavymetalindex.com" || host === "www.heavymetalindex.com" || /^[a-z0-9-]+\.vercel\.app$/.test(host)) return `https://${host}`
  throw new Error("No trusted deployment origin for evidence packet fallback")
}

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600")
}
