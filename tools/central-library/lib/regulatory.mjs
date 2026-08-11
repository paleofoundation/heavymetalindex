// Regulatory-document fetch engine — the "government pathway" for the Central
// Library. It is deliberately NOT the literature stack.
//
// OpenAlex / PubMed / Crossref / Semantic Scholar index peer-reviewed papers
// with DOIs. The maximum-level instruments the HMTc program actually certifies
// against — Codex CXS 193, EU 2023/915, China GB 2762-2022, FSSAI Contaminants
// Regulations, ANVISA RDC 722, FDA Closer-to-Zero action levels — are not
// papers and have no DOI. They live as PDFs on sovereign government and
// standards-body websites. Searching a literature API for them returns nothing.
//
// So this engine reads a curated registry of the world's heavy-metal-limit
// instruments (data/regulatory/registry.json) and fetches each one directly:
//
//   1. the registry's canonical pdf_url (and any mirror_urls), fetched with a
//      real browser User-Agent because most gov servers 403 a bot UA;
//   2. failing that, the landing_url is fetched and its first plausible PDF
//      link is followed (many agencies wrap the PDF behind a record page);
//   3. failing that, and only if a SerpAPI key is present, a plain-Google
//      `<instrument> <reference> filetype:pdf` search scoped to the official
//      domain supplies fallback URLs.
//
// Every candidate is validated on the actual bytes (a %PDF- signature in the
// first kilobyte) so a bot-check page, an HTML landing page, or a "standard is
// sold" storefront never lands on disk as a .pdf. Instruments that are sold and
// have no free copy (some GB / GSO standards) are reported as `manual`, not
// `failed`: the pathway's job is to be honest about what can and cannot be
// pulled, so a human retrieval queue is a real outcome, not an error.

import fs from "node:fs"
import path from "node:path"

import { slugify, sleep, toCsv } from "../../fetch-app/lib/util.mjs"

const repoRoot = process.cwd()
const REGISTRY_PATH = path.join(repoRoot, "data/regulatory/registry.json")

// A real desktop-Chrome UA. Government document servers (EUR-Lex, fao.org,
// fssai.gov.in, anvisa.gov.br, legislation.gov.au…) frequently return 403 or a
// challenge page to the fetch-app's crawler UA but serve the PDF to a browser
// string. This is not evasion of a paywall — these are free public documents;
// it is only getting past a generic-bot filter on an open resource.
const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

export const ANALYTE_VOCABULARY = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Al", "Cr", "Cr-VI", "Sn"]

// ── registry ─────────────────────────────────────────────────────────────────
let _registry = null
export function loadRegistry() {
  const key = (() => {
    try { return fs.statSync(REGISTRY_PATH).mtimeMs } catch { return 0 }
  })()
  if (_registry && _registry.key === key) return _registry.value
  let value
  try {
    const raw = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"))
    const instruments = Array.isArray(raw.instruments) ? raw.instruments : []
    value = {
      schema_version: raw.schema_version || "",
      description: raw.description || "",
      analyte_vocabulary: raw.analyte_vocabulary || ANALYTE_VOCABULARY,
      jurisdictions: raw.jurisdictions || deriveJurisdictions(instruments),
      instruments,
    }
  } catch (e) {
    value = { error: String(e.message), instruments: [], jurisdictions: [], analyte_vocabulary: ANALYTE_VOCABULARY }
  }
  _registry = { key, value }
  return value
}

function deriveJurisdictions(instruments) {
  const seen = new Map()
  for (const e of instruments) {
    if (!seen.has(e.jurisdiction_code)) {
      seen.set(e.jurisdiction_code, { code: e.jurisdiction_code, name: e.jurisdiction, region: e.region || "" })
    }
  }
  return [...seen.values()]
}

// ── selection ────────────────────────────────────────────────────────────────
// An instrument is relevant to a request when it clears every filter that was
// actually supplied. A horizontal contaminant standard (Codex 193, EU 915,
// GB 2762, FSANZ 1.4.1, FSSAI Contaminants, ANVISA 722) sets limits across ALL
// food categories, so it is relevant to any category the user picks; a
// category-specific instrument (FDA infant-rice-cereal iAs guidance) is relevant
// only when its own category is asked for.
export function relevantTo(entry, filter = {}) {
  const { jurisdictions, analytes, category } = filter
  if (jurisdictions && jurisdictions.length && !jurisdictions.includes(entry.jurisdiction_code)) return false
  if (analytes && analytes.length) {
    const have = new Set(entry.analytes || [])
    if (!analytes.some((a) => have.has(a))) return false
  }
  if (category) {
    const horizontal = entry.scope_type === "horizontal"
    const cats = new Set([...(entry.categories || []), ...(entry.infant_child_scope || [])])
    if (!horizontal && !cats.has(category)) return false
  }
  return true
}

export function selectInstruments(filter = {}) {
  return loadRegistry().instruments.filter((e) => relevantTo(e, filter))
}

// ── low-level PDF fetch ──────────────────────────────────────────────────────
function looksLikePdf(buffer) {
  return buffer && buffer.length >= 5 && buffer.subarray(0, 1024).toString("latin1").includes("%PDF-")
}

// Fetch one URL with a browser UA and save it to `target` only if the bytes are
// a real PDF. Content-type is advisory only — some gov servers send
// application/octet-stream, application/force-download, or even text/html for a
// genuine PDF — so the magic-byte check is what actually gates the write.
async function fetchPdf(url, target, timeoutMs = 45000) {
  try {
    const res = await Promise.race([
      fetch(url, {
        headers: {
          "User-Agent": BROWSER_UA,
          Accept: "application/pdf,application/octet-stream,*/*",
          "Accept-Language": "en-US,en;q=0.9",
        },
        redirect: "follow",
      }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("hard-timeout")), timeoutMs)),
    ])
    if (!res.ok) return { saved: false, decision: `fail:http-${res.status}` }
    const buffer = Buffer.from(
      await Promise.race([
        res.arrayBuffer(),
        new Promise((_, rej) => setTimeout(() => rej(new Error("body-timeout")), timeoutMs)),
      ]),
    )
    if (!looksLikePdf(buffer)) {
      const ct = (res.headers.get("content-type") || "").slice(0, 40)
      return { saved: false, decision: `skip:not-pdf${ct ? ":" + ct : ""}` }
    }
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, buffer)
    return { saved: true, bytes: buffer.length, finalUrl: res.url || url }
  } catch (err) {
    return { saved: false, decision: `fail:${String(err.message).slice(0, 40)}` }
  }
}

// Pull the landing page's HTML and return absolute URLs of PDF links found on
// it, best-first (links whose text/href mention the instrument reference float
// up). This recovers instruments where the registry only has a record page.
async function pdfLinksFromLanding(landingUrl, hintTerms = []) {
  try {
    const res = await Promise.race([
      fetch(landingUrl, { headers: { "User-Agent": BROWSER_UA, Accept: "text/html,*/*" }, redirect: "follow" }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 25000)),
    ])
    if (!res.ok) return []
    const html = await res.text()
    const base = res.url || landingUrl
    const hrefs = new Set()
    const re = /href\s*=\s*["']([^"']+\.pdf(?:\?[^"']*)?)["']/gi
    let m
    while ((m = re.exec(html)) !== null) {
      try { hrefs.add(new URL(m[1], base).href) } catch {}
    }
    const hints = hintTerms.map((t) => String(t).toLowerCase()).filter(Boolean)
    return [...hrefs].sort((a, b) => scoreHint(b, hints) - scoreHint(a, hints))
  } catch {
    return []
  }
}

function scoreHint(url, hints) {
  const u = url.toLowerCase()
  return hints.reduce((n, h) => n + (u.includes(h) ? 1 : 0), 0)
}

// Plain-Google filetype:pdf via SerpAPI, scoped to the instrument's official
// domain when one is derivable. Only invoked when a SerpAPI key is configured.
// (The literature stack's serpapi adapter uses the google_scholar engine, which
// does not index government PDFs — this uses the plain google engine.)
async function serpapiWebPdf(query, key, domain) {
  const q = domain ? `${query} site:${domain}` : query
  const url =
    `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(q + " filetype:pdf")}` +
    `&num=10&api_key=${encodeURIComponent(key)}`
  try {
    const res = await Promise.race([
      fetch(url, { headers: { "User-Agent": BROWSER_UA, Accept: "application/json" } }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 30000)),
    ])
    if (!res.ok) return []
    const data = await res.json()
    return (data.organic_results || [])
      .map((r) => r.link)
      .filter((l) => /\.pdf($|\?)/i.test(l || ""))
  } catch {
    return []
  }
}

function officialDomain(entry) {
  const src = entry.landing_url || entry.pdf_url || ""
  try { return new URL(src).hostname.replace(/^www\./, "") } catch { return "" }
}

// Distinctive lowercase tokens from an instrument's reference and title, used to
// sanity-check a SerpAPI candidate URL against the document it claims to be.
// Common words that would match almost any food-law PDF are excluded.
const HINT_STOPWORDS = new Set([
  "the", "and", "for", "food", "foods", "feed", "standard", "standards", "regulation",
  "regulations", "commission", "national", "general", "certain", "act", "law", "no",
  "of", "on", "in", "as", "amended", "safety", "list", "guidance", "document",
])
function hintTokens(entry) {
  const raw = `${entry.reference || ""} ${entry.instrument || ""} ${entry.id || ""}`.toLowerCase()
  const words = raw.split(/[^a-z0-9]+/).filter((w) => w.length >= 4 && !HINT_STOPWORDS.has(w))
  // Reference codes (gb, cxs, rdc, fssai, 2762, 193…) are the strongest signal —
  // keep short alphanumeric ref fragments too.
  const refBits = String(entry.reference || "").toLowerCase().match(/[a-z]{2,}|\d{3,}/g) || []
  return [...new Set([...words, ...refBits])]
}

// ── fetch one instrument ─────────────────────────────────────────────────────
// Returns a manifest-ready record. `decision` is one of:
//   downloaded | skip:exists | dry-run | manual:paid | manual:no-free-source |
//   failed
export async function fetchInstrument(entry, destRoot, opts = {}) {
  const { keys = {}, dryRun = false, onEvent = () => {} } = opts
  const destDir = path.join(destRoot, entry.jurisdiction_code)
  const filename = `${slugify(entry.id, 90)}.pdf`
  const target = path.join(destDir, filename)
  const rel = path.relative(destRoot, target)
  const rec = {
    id: entry.id,
    jurisdiction: entry.jurisdiction,
    jurisdiction_code: entry.jurisdiction_code,
    reference: entry.reference || "",
    access: entry.access || "unknown",
    analytes: (entry.analytes || []).join(" "),
    speciation: (entry.speciation || []).join(" "),
    decision: "",
    via: "",
    bytes: "",
    url: "",
    file: "",
    note: "",
  }

  if (dryRun) {
    rec.decision = "dry-run"
    rec.url = entry.pdf_url || entry.landing_url || ""
    return rec
  }

  if (fs.existsSync(target) && fs.statSync(target).size > 0) {
    rec.decision = "skip:exists"
    rec.file = rel
    rec.bytes = fs.statSync(target).size
    return rec
  }

  // A sold standard with no free copy in the registry is a manual-retrieval
  // outcome, surfaced honestly rather than hammered as a failed download.
  const candidates = [entry.pdf_url, ...(entry.mirror_urls || [])].filter(Boolean)
  if (!candidates.length && entry.access === "paid-official") {
    rec.decision = "manual:paid"
    rec.url = entry.landing_url || ""
    rec.note = "sold standard — retrieve manually via landing_url"
    return rec
  }

  const hints = [entry.reference, entry.id, entry.jurisdiction_code].filter(Boolean)

  // 1) registry's own direct URL(s)
  for (const url of candidates) {
    const r = await fetchPdf(url, target)
    if (r.saved) {
      Object.assign(rec, { decision: "downloaded", via: "direct", bytes: r.bytes, url, file: rel })
      onEvent({ type: "download", file: rel, title: `${entry.jurisdiction} — ${entry.reference || entry.instrument}`, source: entry.jurisdiction_code, via: "direct", bytes: r.bytes })
      return rec
    }
    rec.note = r.decision
  }

  // 2) PDF link discovered on the official landing page
  if (entry.landing_url) {
    const links = await pdfLinksFromLanding(entry.landing_url, hints)
    for (const url of links.slice(0, 4)) {
      const r = await fetchPdf(url, target)
      if (r.saved) {
        Object.assign(rec, { decision: "downloaded", via: "landing", bytes: r.bytes, url, file: rel })
        onEvent({ type: "download", file: rel, title: `${entry.jurisdiction} — ${entry.reference || entry.instrument}`, source: entry.jurisdiction_code, via: "landing", bytes: r.bytes })
        return rec
      }
    }
  }

  // 3) SerpAPI plain-Google filetype:pdf, scoped to the official domain.
  //    Guard: a domain-scoped filetype:pdf search returns the top hit for the
  //    instrument NAME, which on a big gov site can be an unrelated document
  //    (a Health Canada search for the contaminants list once returned a
  //    natural-health-products guidance PDF). Only accept a candidate whose URL
  //    shares a distinctive token with the instrument, so a plausible-but-wrong
  //    document is rejected rather than filed as a national standard.
  if (keys.serpapi_key) {
    const urls = await serpapiWebPdf(
      `${entry.instrument} ${entry.reference || ""}`.trim(),
      keys.serpapi_key,
      officialDomain(entry),
    )
    const hints = hintTokens(entry)
    const guarded = urls.filter((u) => { const lu = u.toLowerCase(); return hints.some((h) => lu.includes(h)) })
    for (const url of guarded.slice(0, 5)) {
      const r = await fetchPdf(url, target)
      if (r.saved) {
        Object.assign(rec, { decision: "downloaded", via: "serpapi", bytes: r.bytes, url, file: rel })
        onEvent({ type: "download", file: rel, title: `${entry.jurisdiction} — ${entry.reference || entry.instrument}`, source: entry.jurisdiction_code, via: "serpapi", bytes: r.bytes })
        return rec
      }
    }
  }

  rec.decision = candidates.length || entry.landing_url ? "failed" : "manual:no-free-source"
  rec.url = entry.pdf_url || entry.landing_url || ""
  return rec
}

// ── default destination ──────────────────────────────────────────────────────
// Regulatory instruments are the source documents behind the government-limit
// default (Method v2.0), so they belong with the corpus in raw/. raw/ is a
// symlink to the HMI-Library drive; existsSync follows it, so a broken link
// (drive unplugged) falls through to a plainly-named Desktop folder rather than
// erroring — these are few and Karen wants them in hand.
export function defaultRegulatoryRoot() {
  const rawReg = path.join(repoRoot, "raw", "regulatory")
  try {
    if (fs.existsSync(path.join(repoRoot, "raw"))) return rawReg
  } catch {}
  return path.join(process.env.HOME || repoRoot, "Desktop", "HMI Regulatory Pull")
}

// ── run a full regulatory pull ───────────────────────────────────────────────
//   opts = { jurisdictions?, analytes?, category?, categoryLabel?, outRoot?,
//            dryRun?, keys, onEvent, runId }
export async function runRegulatoryFetch(opts = {}) {
  const {
    jurisdictions = null,
    analytes = null,
    category = null,
    categoryLabel = null,
    dryRun = false,
    keys = {},
    onEvent = () => {},
    runId = `reg-${slugify(String(category || "all"), 20)}`,
  } = opts

  const registry = loadRegistry()
  if (registry.error) throw new Error(`registry unreadable: ${registry.error}`)

  const selection = registry.instruments.filter((e) => relevantTo(e, { jurisdictions, analytes, category }))
  const destRoot = opts.outRoot ? path.resolve(opts.outRoot) : defaultRegulatoryRoot()
  const label = categoryLabel || category || "all categories"

  onEvent({
    type: "start",
    runId,
    mode: "regulatory",
    subject: `Regulatory — ${label}`,
    queryCount: selection.length,
    sources: [...new Set(selection.map((e) => e.jurisdiction_code))],
    outDir: destRoot,
    dryRun,
  })

  if (!selection.length) {
    onEvent({ type: "log", msg: "no instruments in the registry match this filter" })
  }

  const manifest = []
  const stats = { instruments: selection.length, downloaded: 0, skipped: 0, manual: 0, failed: 0, listed: 0 }

  for (let i = 0; i < selection.length; i++) {
    const entry = selection[i]
    onEvent({ type: "query-start", index: i, total: selection.length, query: `${entry.jurisdiction} — ${entry.reference || entry.instrument}`, scope: "matrix" })
    let rec
    try {
      rec = await fetchInstrument(entry, destRoot, { keys, dryRun, onEvent })
    } catch (err) {
      rec = { id: entry.id, jurisdiction: entry.jurisdiction, reference: entry.reference || "", decision: `error:${String(err.message).slice(0, 40)}`, note: "" }
    }
    manifest.push(rec)
    if (rec.decision === "downloaded") stats.downloaded++
    else if (rec.decision === "skip:exists") stats.skipped++
    else if (rec.decision === "dry-run") stats.listed++
    else if (String(rec.decision).startsWith("manual")) { stats.manual++; onEvent({ type: "log", msg: `manual: ${entry.jurisdiction} ${entry.reference || ""} — ${rec.note || rec.decision}` }) }
    else { stats.failed++; onEvent({ type: "log", msg: `could not fetch ${entry.jurisdiction} ${entry.reference || ""} (${rec.decision})` }) }
    onEvent({ type: "query-done", index: i, total: selection.length, query: `${entry.jurisdiction} — ${entry.reference || ""}`, scope: "matrix", downloaded: stats.downloaded })
    await sleep(150)
  }

  let manifestPath = ""
  if (!dryRun && selection.length) {
    fs.mkdirSync(destRoot, { recursive: true })
    // Timestamp the manifest so successive runs don't overwrite each other — the
    // `via` column (direct / landing / serpapi) is the audit trail for how each
    // document was found, and a serpapi-sourced fetch is the one to re-check.
    manifestPath = path.join(destRoot, `_manifest-${runId}-${Date.now()}.csv`)
    fs.writeFileSync(
      manifestPath,
      toCsv(manifest, ["id", "jurisdiction", "jurisdiction_code", "reference", "access", "analytes", "speciation", "decision", "via", "bytes", "url", "file", "note"]),
    )
  }

  const summary = { runId, mode: "regulatory", label, stats, outDir: destRoot, manifestPath, dryRun }
  onEvent({ type: "done", ...summary })
  return summary
}
