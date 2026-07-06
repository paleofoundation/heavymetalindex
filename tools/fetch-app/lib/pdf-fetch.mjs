// PDF download with the full rescue chain ported from
// tools/wishlist/find-candidates.mjs: primary fetch -> body magic-byte
// validation -> Unpaywall direct-PDF fallback -> Europe PMC getPdf rescue.
// Every path validates the actual bytes (a %PDF- signature in the first 1 KB)
// so bot-check / landing-page HTML never lands in staging as a .pdf.

import fs from "node:fs"
import { USER_AGENT, normalizeDoi, normalizeTitle } from "./util.mjs"

const EUROPEPMC_GETPDF = "https://europepmc.org/api/getPdf"
const EUROPEPMC_SEARCH = "https://www.ebi.ac.uk/europepmc/webservices/rest/search"

export function looksLikePdf(buffer) {
  if (!buffer || buffer.length < 5) return false
  return buffer.subarray(0, 1024).toString("latin1").includes("%PDF-")
}

function pmcidFromUrl(url) {
  const m = String(url || "").match(/PMC(\d+)/i)
  return m ? `PMC${m[1]}` : ""
}

// Fetch one URL and write to `target` if it is a real PDF. Returns
// { saved:true, bytes } or { saved:false, decision, kind } where
// kind ∈ {http, not-pdf, error}.
export async function attemptDownload(url, target, timeoutMs = 25000) {
  try {
    const response = await Promise.race([
      fetch(url, { headers: { "User-Agent": USER_AGENT }, redirect: "follow" }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("hard-timeout")), timeoutMs)),
    ])
    if (!response.ok) return { saved: false, decision: `fail:http-${response.status}`, kind: "http" }
    const contentType = response.headers.get("content-type") || ""
    if (!contentType.includes("pdf") && !contentType.includes("octet-stream")) {
      return { saved: false, decision: `skip:not-pdf:${contentType.slice(0, 40)}`, kind: "not-pdf" }
    }
    const buffer = Buffer.from(
      await Promise.race([
        response.arrayBuffer(),
        new Promise((_, rej) => setTimeout(() => rej(new Error("body-timeout")), timeoutMs)),
      ]),
    )
    if (!looksLikePdf(buffer)) {
      return { saved: false, decision: "skip:not-pdf:body-not-pdf", kind: "not-pdf" }
    }
    fs.writeFileSync(target, buffer)
    return { saved: true, bytes: buffer.length }
  } catch (err) {
    return { saved: false, decision: `fail:${String(err.message).slice(0, 40)}`, kind: "error" }
  }
}

async function resolveUnpaywallPdf(doi, email) {
  const clean = normalizeDoi(doi)
  if (!clean) return ""
  const url = `https://api.unpaywall.org/v2/${encodeURIComponent(clean)}?email=${encodeURIComponent(email)}`
  try {
    const res = await Promise.race([
      fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("unpaywall-timeout")), 15000)),
    ])
    if (!res.ok) return ""
    const data = await res.json()
    const locs = []
    if (data.best_oa_location) locs.push(data.best_oa_location)
    if (Array.isArray(data.oa_locations)) locs.push(...data.oa_locations)
    for (const l of locs) {
      if (!l) continue
      if (l.url_for_pdf) return l.url_for_pdf
      if (typeof l.url === "string" && /\.pdf($|\?)/i.test(l.url)) return l.url
    }
    return ""
  } catch {
    return ""
  }
}

async function resolveEuropePmcId(doi) {
  const clean = normalizeDoi(doi)
  if (!clean) return ""
  const url = `${EUROPEPMC_SEARCH}?query=DOI:%22${encodeURIComponent(clean)}%22&format=json&resultType=lite`
  try {
    const res = await Promise.race([
      fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("epmc-search-timeout")), 12000)),
    ])
    if (!res.ok) return ""
    const data = await res.json()
    const r = data.resultList?.result?.[0]
    return r && r.pmcid ? r.pmcid : ""
  } catch {
    return ""
  }
}

async function attemptEpmcDownload(epmcUrl, target) {
  const first = await attemptDownload(epmcUrl, target, 40000)
  if (first.saved || first.kind === "not-pdf") return first
  await new Promise((r) => setTimeout(r, 2500))
  return attemptDownload(epmcUrl, target, 40000)
}

// Fraction of the shorter title's significant words that appear in the other —
// a cheap guard against Crossref returning a wrong paper for a title query.
function titleOverlap(a, b) {
  const words = (s) => new Set(String(s).split(" ").filter((w) => w.length > 3))
  const aw = words(a), bw = words(b)
  if (!aw.size || !bw.size) return 0
  const [small, big] = aw.size <= bw.size ? [aw, bw] : [bw, aw]
  let hit = 0
  for (const w of small) if (big.has(w)) hit++
  return hit / small.size
}

// Title → Crossref → DOI. For a candidate with a real title but no DOI (Google
// Scholar / Serper hits), resolve a DOI via a Crossref bibliographic query so
// the DOI-keyed rescues (Unpaywall / Europe PMC) can then find an OA PDF.
// Requires a decent title overlap so a loose Crossref match can't mis-attribute.
async function resolveCrossrefDoiByTitle(title, email) {
  const t = String(title || "").trim()
  if (t.length < 12) return ""
  const url =
    `https://api.crossref.org/works?query.bibliographic=${encodeURIComponent(t)}` +
    `&rows=1&select=DOI,title&mailto=${encodeURIComponent(email)}`
  try {
    const res = await Promise.race([
      fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("crossref-title-timeout")), 12000)),
    ])
    if (!res.ok) return ""
    const item = (await res.json()).message?.items?.[0]
    if (!item?.DOI) return ""
    const got = normalizeTitle(Array.isArray(item.title) ? item.title[0] : item.title || "")
    return got && titleOverlap(got, normalizeTitle(t)) >= 0.6 ? normalizeDoi(item.DOI) : ""
  } catch {
    return ""
  }
}

// Full download with fallbacks. `candidate` carries { oaUrl, doi }. Returns the
// final result object plus a `via` field describing which path succeeded.
export async function downloadWithRescue(candidate, target, email) {
  const { oaUrl, doi } = candidate
  let r = oaUrl
    ? await attemptDownload(oaUrl, target)
    : { saved: false, decision: "skip:no-oa-url", kind: "not-pdf" }
  if (r.saved) return { ...r, via: "primary" }

  // Unpaywall direct-PDF fallback.
  if (doi && (r.kind === "not-pdf" || r.kind === "http")) {
    const upUrl = await resolveUnpaywallPdf(doi, email)
    if (upUrl && upUrl !== oaUrl) {
      const r2 = await attemptDownload(upUrl, target)
      if (r2.saved) return { ...r2, via: "unpaywall", oaUrl: upUrl }
    }
  }

  // Europe PMC getPdf rescue (recovers PMC-interstitial + MDPI losses).
  if (r.kind === "not-pdf" || r.kind === "http") {
    let pmcid = pmcidFromUrl(oaUrl)
    if (!pmcid && doi) pmcid = await resolveEuropePmcId(doi)
    if (pmcid) {
      const epmcUrl = `${EUROPEPMC_GETPDF}?pmcid=${pmcid}`
      const r3 = await attemptEpmcDownload(epmcUrl, target)
      if (r3.saved) return { ...r3, via: "europepmc", oaUrl: epmcUrl }
      r = r3
    }
  }

  // Last resort: recover a DOI from the title via Crossref, then retry the
  // DOI-keyed rescues. This is what converts Google Scholar hits (no DOI) into
  // actual downloads instead of losing them at the publisher landing page.
  if (!doi && candidate.title && !r.saved) {
    const recovered = await resolveCrossrefDoiByTitle(candidate.title, email)
    if (recovered) {
      const upUrl = await resolveUnpaywallPdf(recovered, email)
      if (upUrl && upUrl !== oaUrl) {
        const r4 = await attemptDownload(upUrl, target)
        if (r4.saved) return { ...r4, via: "crossref-title+unpaywall", oaUrl: upUrl, doi: recovered }
      }
      const pmcid = await resolveEuropePmcId(recovered)
      if (pmcid) {
        const epmcUrl = `${EUROPEPMC_GETPDF}?pmcid=${pmcid}`
        const r5 = await attemptEpmcDownload(epmcUrl, target)
        if (r5.saved) return { ...r5, via: "crossref-title+europepmc", oaUrl: epmcUrl, doi: recovered }
        r = r5
      }
    }
  }

  return { ...r, via: "failed" }
}
