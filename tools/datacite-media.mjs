// Shared DataCite PDF-association helpers (media + formats).
//
// A DataCite record's `contentUrl` (the direct link to the full-text file) is
// NOT set by the ordinary REST mint in tools/mint-dois.mjs — the REST API's
// `contentUrl` is read-only and is populated only by the separate MDS **Media
// API**. Until media is registered a record reports `contentUrl: null` and
// `formats: []`, even when the page correctly advertises `citation_pdf_url` and
// serves a real PDF. That is why the 24 live 10.83376 synthesis DOIs showed no
// PDF to tools that content-negotiate (ReadCube's sidebar first-page preview,
// PDF-preferring crawlers): the record never told them where the PDF was.
//
// How contentUrl is actually populated (verified 2026-09-01 against the live
// 10.83376 records): a REST **PUT of attributes.contentUrl** sets the field and
// it sticks. The legacy **MDS Media API does NOT populate `contentUrl`** for
// DOIs created through the REST/Fabrica backend — media POSTed there returns
// "OK" and is retrievable at GET /media/{doi}, but `contentUrl` stayed null for
// 4h+ and content negotiation never switched to the PDF. So the REST PUT is the
// mechanism that matters; the MDS registration is kept only as belt-and-suspenders
// (some aggregators read /media). NOTE: DataCite does not proxy full-text PDFs via
// content negotiation at all — `Accept: application/pdf` resolves to the landing
// page by design; `contentUrl` is the machine-readable pointer PDF-aware tools read.
//
// Three DataCite surfaces, one purpose:
//   - REST contentUrl (api.datacite.org/dois/{doi}) — PUT attributes.contentUrl
//     ["<pdf>"]. THE populator of the record's contentUrl. Primary.
//   - REST formats    (api.datacite.org/dois/{doi}) — PUT attributes.formats
//     ["application/pdf"] so the record also declares the format.
//   - MDS Media API   (mds.datacite.org/media/{doi}) — POST text/plain
//     "application/pdf=<url>" pairs. Supplementary; DOI raw in path (slash not
//     percent-encoded), per DataCite's docs. Does not by itself set contentUrl.
//
// Both authenticate with the same repository credentials (repo id + password)
// that the REST mint uses. These helpers do the network work only; the callers
// (tools/datacite-reconcile-media.mjs and tools/mint-dois.mjs) own the dry-run
// gating, credential checks, and idempotency decisions.

export const REST_API = "https://api.datacite.org/dois"
export const MDS_MEDIA_LIVE = "https://mds.datacite.org/media"
export const MDS_MEDIA_TEST = "https://mds.test.datacite.org/media"

// The PDF for a scholarly Index page is served next to its landing page at
// <url>.pdf — the exact string Head.tsx emits as citation_pdf_url
// (`${socialUrl}.pdf`) and postbuild-synthesis-pdf.mjs writes to
// public/<section>/<slug>.pdf. Strip a trailing slash first so an out-of-band
// mint that registered the landing URL with one still yields a clean .pdf URL.
export function pdfUrlFor(landingUrl) {
  return String(landingUrl).replace(/\/+$/, "") + ".pdf"
}

// Confirm a URL actually serves a PDF before we register it as media. Registering
// a contentUrl that 404s or serves HTML is worse than registering nothing — a
// content-negotiating client would follow it into a dead end. Callers use this
// to stay correct whether or not a page (and thus its PDF) is deployed yet.
export async function headIsPdf(url) {
  try {
    const r = await fetch(url, { method: "HEAD", redirect: "follow" })
    const ct = r.headers.get("content-type") || ""
    return { ok: r.ok && /application\/pdf/i.test(ct), status: r.status, contentType: ct }
  } catch (err) {
    return { ok: false, status: 0, contentType: String(err?.message || err) }
  }
}

export function authHeader(user, password) {
  return `Basic ${Buffer.from(`${user}:${password}`).toString("base64")}`
}

// Register (or update) the PDF media mapping for a DOI via the MDS Media API.
// Returns the response body ("OK" on success). Throws on a non-2xx so the caller
// can count it as a failure without silently continuing. `live` selects the
// production vs sandbox MDS host; production is correct for the live 10.83376
// records.
export async function registerPdfMedia({ doi, pdfUrl, user, password, live = true }) {
  const base = live ? MDS_MEDIA_LIVE : MDS_MEDIA_TEST
  // DOI raw in the path (10.xxxx/suffix) — the MDS Media API expects the slash
  // unencoded, matching DataCite's documented `POST /media/{doi}` examples.
  const r = await fetch(`${base}/${doi}`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
      Authorization: authHeader(user, password),
    },
    body: `application/pdf=${pdfUrl}`,
  })
  const text = await r.text()
  if (!r.ok) throw new Error(`media POST ${r.status}: ${text.slice(0, 200)}`)
  return text.trim()
}

// Ensure attributes.formats contains "application/pdf" (REST PUT of just the
// formats array — nothing else on the record is touched, so the DOI keeps
// resolving). Idempotent: a no-op (no write) when it is already present.
export async function ensurePdfFormat({ doi, current = [], user, password }) {
  const have = Array.isArray(current) ? current : []
  if (have.includes("application/pdf")) return { changed: false, formats: have }
  const formats = Array.from(new Set([...have, "application/pdf"]))
  const r = await fetch(`${REST_API}/${encodeURIComponent(doi)}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Authorization: authHeader(user, password),
    },
    body: JSON.stringify({ data: { type: "dois", attributes: { formats } } }),
  })
  if (!r.ok) throw new Error(`formats PUT ${r.status}: ${(await r.text()).slice(0, 200)}`)
  const j = await r.json()
  return { changed: true, formats: j.data.attributes.formats }
}

// Ensure attributes.contentUrl contains the PDF (REST PUT). This is the field
// PDF-aware clients (ReadCube, crawlers) read off the record to locate full text,
// and — unlike the MDS Media API — a REST PUT actually populates it. Idempotent:
// a no-op when the URL is already present.
export async function ensureContentUrl({ doi, pdfUrl, current = null, user, password }) {
  const have = Array.isArray(current) ? current : []
  if (have.includes(pdfUrl)) return { changed: false, contentUrl: have }
  const contentUrl = Array.from(new Set([...have, pdfUrl]))
  const r = await fetch(`${REST_API}/${encodeURIComponent(doi)}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Authorization: authHeader(user, password),
    },
    body: JSON.stringify({ data: { type: "dois", attributes: { contentUrl } } }),
  })
  if (!r.ok) throw new Error(`contentUrl PUT ${r.status}: ${(await r.text()).slice(0, 200)}`)
  const j = await r.json()
  return { changed: true, contentUrl: j.data.attributes.contentUrl }
}
