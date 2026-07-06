// Source adapters. Each adapter takes (job, keys, opts) and returns an array of
// normalized candidate objects:
//   { source, external_id, title, abstract, doi, year, author, oaUrl, url }
// All adapters are best-effort and never throw out of the runner — on any API
// error they log and return []. Open sources (OpenAlex, PubMed, Crossref,
// Semantic Scholar) work with no key; keyed sources (CORE, SerpAPI, Serper) are
// skipped with a note when their key is absent.

import { USER_AGENT, normalizeDoi } from "./util.mjs"

const PER_QUERY = 25

function reconstructAbstract(inverted) {
  if (!inverted || typeof inverted !== "object") return ""
  const positions = []
  for (const [word, idxs] of Object.entries(inverted)) for (const i of idxs) positions.push([i, word])
  positions.sort((a, b) => a[0] - b[0])
  return positions.map(([, w]) => w).join(" ")
}

async function getJson(url, timeoutMs = 20000, extraHeaders = {}) {
  const res = await Promise.race([
    fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json", ...extraHeaders } }),
    new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), timeoutMs)),
  ])
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

// ─── OpenAlex ──────────────────────────────────────────────────────────────
export async function openalex(job, keys, log) {
  const email = keys.contact_email
  const url =
    `https://api.openalex.org/works?filter=` +
    `title_and_abstract.search:${encodeURIComponent(job.query)},is_oa:true,` +
    `from_publication_date:${job.fromYear}-01-01,to_publication_date:${job.toYear}-12-31` +
    `&per-page=${PER_QUERY}&mailto=${encodeURIComponent(email)}`
  try {
    const data = await getJson(url)
    return (data.results || []).map((w) => ({
      source: "openalex",
      external_id: w.id || "",
      title: w.title || "",
      abstract: reconstructAbstract(w.abstract_inverted_index),
      doi: normalizeDoi(w.doi || ""),
      year: w.publication_year || "",
      author: w.authorships?.[0]?.author?.display_name || "",
      oaUrl: w.open_access?.oa_url || w.primary_location?.pdf_url || "",
      url: w.doi || w.id || "",
    }))
  } catch (err) {
    log(`openalex error: ${err.message}`)
    return []
  }
}

// ─── PubMed / PMC (NCBI E-utilities) ─────────────────────────────────────────
function xmlAll(xml, tag) {
  const out = []
  const re = new RegExp(`<${tag}(?:[^>]*)>([\\s\\S]*?)</${tag}>`, "g")
  let m
  while ((m = re.exec(xml)) !== null) out.push(m[1].replace(/<[^>]+>/g, "").trim())
  return out
}
function xmlFirst(xml, tag) {
  const a = xmlAll(xml, tag)
  return a.length ? a[0] : null
}

export async function pubmed(job, keys, log) {
  const key = keys.ncbi_key ? `&api_key=${encodeURIComponent(keys.ncbi_key)}` : ""
  const term = encodeURIComponent(
    `${job.query} AND pubmed pmc open access[filter] AND ${job.fromYear}:${job.toYear}[dp]`,
  )
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${term}&retmax=${PER_QUERY}&retmode=json${key}`
  let pmids = []
  try {
    const data = await getJson(searchUrl)
    pmids = data.esearchresult?.idlist ?? []
  } catch (err) {
    log(`pubmed esearch error: ${err.message}`)
    return []
  }
  if (!pmids.length) return []
  const fetchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${pmids.join(",")}&rettype=xml&retmode=xml${key}`
  let xmlText
  try {
    const res = await Promise.race([
      fetch(fetchUrl, { headers: { "User-Agent": USER_AGENT } }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 25000)),
    ])
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    xmlText = await res.text()
  } catch (err) {
    log(`pubmed efetch error: ${err.message}`)
    return []
  }
  const blocks = xmlText.match(/<PubmedArticle>[\s\S]*?<\/PubmedArticle>/g) ?? []
  const out = []
  for (const b of blocks) {
    const pmid = xmlFirst(b, "PMID")
    if (!pmid) continue
    const doiMatch = b.match(/<ArticleId\s+IdType="doi">([^<]+)<\/ArticleId>/)
    const pmcMatch = b.match(/<ArticleId\s+IdType="pmc">PMC([0-9]+)<\/ArticleId>/)
    const pmcId = pmcMatch ? pmcMatch[1] : ""
    out.push({
      source: "pubmed",
      external_id: `PMID:${pmid}`,
      title: xmlFirst(b, "ArticleTitle") || `PubMed ${pmid}`,
      abstract: xmlAll(b, "AbstractText").join(" "),
      doi: doiMatch ? normalizeDoi(doiMatch[1]) : "",
      year: xmlFirst(b, "Year") || "",
      author: xmlFirst(b, "LastName") || "",
      oaUrl: pmcId ? `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC${pmcId}/pdf/` : "",
      url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
    })
  }
  return out
}

// ─── Crossref (metadata; OA PDF resolved later via Unpaywall) ────────────────
export async function crossref(job, keys, log) {
  const email = keys.contact_email
  const url =
    `https://api.crossref.org/works?query=${encodeURIComponent(job.query)}` +
    `&filter=from-pub-date:${job.fromYear}-01-01,until-pub-date:${job.toYear}-12-31` +
    `&rows=${PER_QUERY}&mailto=${encodeURIComponent(email)}`
  try {
    const data = await getJson(url)
    return (data.message?.items || []).map((it) => ({
      source: "crossref",
      external_id: it.DOI || "",
      title: Array.isArray(it.title) ? it.title[0] : it.title || "",
      abstract: (it.abstract || "").replace(/<[^>]+>/g, " ").trim(),
      doi: normalizeDoi(it.DOI || ""),
      year: it.issued?.["date-parts"]?.[0]?.[0] || "",
      author: it.author?.[0]?.family || "",
      // Crossref rarely gives a direct PDF; leave oaUrl empty so the download
      // step resolves it through Unpaywall/Europe PMC by DOI.
      oaUrl: (it.link || []).find((l) => l["content-type"] === "application/pdf")?.URL || "",
      url: it.URL || (it.DOI ? `https://doi.org/${it.DOI}` : ""),
    }))
  } catch (err) {
    log(`crossref error: ${err.message}`)
    return []
  }
}

// ─── Semantic Scholar ────────────────────────────────────────────────────────
export async function semanticscholar(job, keys, log) {
  const headers = keys.s2_key ? { "x-api-key": keys.s2_key } : {}
  const fields = "title,abstract,year,externalIds,openAccessPdf,authors"
  const url =
    `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(job.query)}` +
    `&year=${job.fromYear}-${job.toYear}&openAccessPdf&limit=${PER_QUERY}&fields=${fields}`
  try {
    const data = await getJson(url, 25000, headers)
    return (data.data || []).map((p) => ({
      source: "semanticscholar",
      external_id: p.paperId || "",
      title: p.title || "",
      abstract: p.abstract || "",
      doi: normalizeDoi(p.externalIds?.DOI || ""),
      year: p.year || "",
      author: p.authors?.[0]?.name?.split(/\s+/).slice(-1)[0] || "",
      oaUrl: p.openAccessPdf?.url || "",
      url: p.externalIds?.DOI ? `https://doi.org/${p.externalIds.DOI}` : "",
    }))
  } catch (err) {
    log(`semanticscholar error: ${err.message}`)
    return []
  }
}

// ─── CORE (key required) ─────────────────────────────────────────────────────
export async function core(job, keys, log) {
  if (!keys.core_key) {
    log("core skipped: no CORE_API_KEY set")
    return []
  }
  const url = `https://api.core.ac.uk/v3/search/works`
  const body = {
    q: `${job.query} AND yearPublished>=${job.fromYear} AND yearPublished<=${job.toYear}`,
    limit: PER_QUERY,
  }
  try {
    const res = await Promise.race([
      fetch(url, {
        method: "POST",
        headers: {
          "User-Agent": USER_AGENT,
          Authorization: `Bearer ${keys.core_key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 25000)),
    ])
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return (data.results || []).map((w) => ({
      source: "core",
      external_id: String(w.id || ""),
      title: w.title || "",
      abstract: w.abstract || "",
      doi: normalizeDoi(w.doi || ""),
      year: w.yearPublished || "",
      author: w.authors?.[0]?.name?.split(/[,\s]+/)[0] || "",
      oaUrl: w.downloadUrl || w.sourceFulltextUrls?.[0] || "",
      url: w.doi ? `https://doi.org/${w.doi}` : w.downloadUrl || "",
    }))
  } catch (err) {
    log(`core error: ${err.message}`)
    return []
  }
}

// ─── SerpAPI (Google Scholar engine) ─────────────────────────────────────────
// Best-effort DOI extraction from arbitrary text. SerpAPI / Serper results carry
// no DOI field, but a DOI is frequently embedded in the result link, a resource
// URL, the citation summary, or the snippet. Recovering it lets the download
// rescue chain (Unpaywall / Europe PMC, both DOI-keyed) resolve a real OA PDF for
// Google Scholar hits that would otherwise be lost to publisher landing pages.
function extractDoi(text) {
  const m = String(text || "").match(/\b10\.\d{4,9}\/[-._;()/:a-z0-9]+/i)
  return m ? normalizeDoi(m[0].replace(/[).,;]+$/, "")) : ""
}

export async function serpapi(job, keys, log) {
  if (!keys.serpapi_key) {
    log("serpapi skipped: no SERPAPI_KEY set")
    return []
  }
  const url =
    `https://serpapi.com/search.json?engine=google_scholar&q=${encodeURIComponent(job.query)}` +
    `&as_ylo=${job.fromYear}&as_yhi=${job.toYear}&num=20&api_key=${encodeURIComponent(keys.serpapi_key)}`
  try {
    const data = await getJson(url, 30000)
    return (data.organic_results || []).map((r) => {
      const resources = r.resources || []
      const pdfRes = resources.find((x) => x.file_format === "PDF")
      const doi = extractDoi(
        [r.link, pdfRes?.link, ...resources.map((x) => x.link), r.publication_info?.summary, r.snippet]
          .filter(Boolean)
          .join(" "),
      )
      return {
        source: "serpapi",
        external_id: r.result_id || "",
        title: r.title || "",
        abstract: r.snippet || "",
        doi, // recovered — unlocks the Unpaywall/Europe PMC rescue for Scholar hits
        year: (r.publication_info?.summary || "").match(/\b(19|20)\d{2}\b/)?.[0] || "",
        author: (r.publication_info?.authors || [])[0]?.name?.split(/\s+/).slice(-1)[0] || "",
        // Prefer a real PDF resource link; the Scholar landing page (r.link) is
        // only a last resort (the rescue chain handles it via the recovered DOI).
        oaUrl: pdfRes?.link || r.link || "",
        url: r.link || "",
      }
    })
  } catch (err) {
    log(`serpapi error: ${err.message}`)
    return []
  }
}

// ─── Serper.dev (Google web search, filetype:pdf) ────────────────────────────
export async function serper(job, keys, log) {
  if (!keys.serper_key) {
    log("serper skipped: no SERPER_API_KEY set")
    return []
  }
  try {
    const res = await Promise.race([
      fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: { "X-API-KEY": keys.serper_key, "Content-Type": "application/json" },
        body: JSON.stringify({ q: `${job.query} filetype:pdf`, num: 20 }),
      }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 30000)),
    ])
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return (data.organic || [])
      .filter((r) => /\.pdf($|\?)/i.test(r.link || ""))
      .map((r) => ({
        source: "serper",
        external_id: r.link || "",
        title: r.title || "",
        abstract: r.snippet || "",
        doi: extractDoi([r.link, r.snippet].filter(Boolean).join(" ")),
        year: (r.snippet || "").match(/\b(19|20)\d{2}\b/)?.[0] || "",
        author: "",
        oaUrl: r.link || "",
        url: r.link || "",
      }))
  } catch (err) {
    log(`serper error: ${err.message}`)
    return []
  }
}

export const ADAPTERS = {
  openalex,
  pubmed,
  crossref,
  semanticscholar,
  core,
  serpapi,
  serper,
}

// Which key each adapter can use (null = fully open). Surfaced in the UI so
// Karen knows what to fill in.
export const ADAPTER_KEY = {
  openalex: null,
  pubmed: "ncbi_key",
  crossref: null,
  semanticscholar: "s2_key",
  core: "core_key",
  serpapi: "serpapi_key",
  serper: "serper_key",
}

// Adapters that CANNOT run without their key (vs. those where the key only
// raises the rate limit — PubMed and Semantic Scholar work key-less).
export const KEY_REQUIRED = new Set(["core", "serpapi", "serper"])
