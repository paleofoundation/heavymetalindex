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
//   - content_sha256 + content_bytes (over the markdown body, frontmatter
//     stripped) — what an exhibit author hashes to prove the cited version
//   - last_commit_sha + last_commit_date — the git pin
//   - contributing_sources — the source pages this page derives from
//   - license envelope (CC BY 4.0 prose, EU database rights structured)
//   - attestation block — the verbatim language an exhibit author can paste
//     into a Daubert affidavit
//
// The endpoint reads from public/static/evidence-packet-index.json, built at
// prebuild by tools/build-evidence-packet-index.mjs. Both files are tagged
// with the same schema_version.

import fs from "node:fs/promises"

const CACHE_TTL_MS = 5 * 60 * 1000
let cached
let cachedAt = 0

const LICENSE_ENVELOPE = {
  prose: "CC BY 4.0",
  structured_data: "EU database rights reserved — see https://heavymetalindex.com/licensing",
  attribution:
    "Heavy Metal Index (heavymetalindex.com), Paleo Foundation. Cite page_url or wiki_doi.",
  contact: "karen@paleofoundation.com",
}

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

    const dataset = await loadDataset(req)
    const record = (dataset.records || []).find((r) => r.slug === slug)
    if (!record) {
      res.status(404).json({
        error: `No public page found for slug "${slug}". The evidence-packet index covers public reference pages only; internal pages (workbench, lint, log, queries) are excluded by design.`,
        license: LICENSE_ENVELOPE,
      })
      return
    }

    const manifest = {
      schema_version: dataset.schema_version,
      manifest_kind: "heavy_metal_index_evidence_packet",
      retrieval_timestamp: new Date().toISOString(),
      page: {
        slug: record.slug,
        title: record.title,
        description: record.description,
        page_type: record.page_type,
        audience: record.audience,
        canonical_url: record.canonical_url,
        wiki_doi: record.wiki_doi,
      },
      content_pin: {
        content_sha256: record.content_sha256,
        content_bytes: record.content_bytes,
        last_commit_sha: record.last_commit_sha,
        last_commit_date: record.last_commit_date,
        git_remote: "https://github.com/paleofoundation/heavymetalindex",
        verify_command: record.last_commit_sha
          ? `git show ${record.last_commit_sha}:wiki/${record.slug}.md | sha256sum`
          : null,
      },
      contributing_sources: record.contributing_sources,
      license: LICENSE_ENVELOPE,
      attestation: {
        for_use: "Litigation exhibit, regulatory submission, peer-review supplementary record.",
        verifiable_by:
          "Any party can clone https://github.com/paleofoundation/heavymetalindex at the named commit, hash the body of the named wiki page, and confirm the content_sha256 above matches.",
        not_a_certification:
          "This manifest pins the Heavy Metal Index's published text at a specific git commit. It does not endorse or warrant the cited claim beyond the editorial methodology at /methodology and the correction process at /errata.",
        license_terms: "https://heavymetalindex.com/licensing",
      },
      generated_at: dataset.generated_at,
    }

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

async function loadDataset(req) {
  const now = Date.now()
  if (cached && (now - cachedAt) < CACHE_TTL_MS) return cached

  const baseUrl = getBaseUrl(req)
  try {
    const response = await fetch(new URL("/static/evidence-packet-index.json", baseUrl), {
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
    new URL("../public/static/evidence-packet-index.json", import.meta.url),
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
