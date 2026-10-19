// Sitemap URLs must be the paths that return 200. Vercel serves this site with
// cleanUrls and trailingSlash: false, so a folder index is /sources, while
// /sources/ is a 308. Quartz's simplifySlug keeps the folder slash, which put
// the redirect in sitemap.xml and left the indexable page out.
//
// Indexable means the rendered document has no robots noindex. The low-value
// noindex policy is unchanged; this module only checks that the sitemap and
// that policy describe the same set of successful pages.

import fs from "node:fs"
import path from "node:path"
import { metalPageOwnsFolder } from "./metal-evidence.mjs"
import { isLowValuePage, isNoindex } from "./low-value-page.mjs"

export const SITEMAP_ORIGIN = "https://heavymetalindex.com"

const ERROR_DOCUMENTS = new Set(["404.html"])

function sluggifySegment(segment) {
  return segment
    .replace(/\s/g, "-")
    .replace(/&/g, "-and-")
    .replace(/%/g, "-percent")
    .replace(/\?/g, "")
    .replace(/#/g, "")
}

function slugTag(tag) {
  return String(tag)
    .split("/")
    .map((segment) => sluggifySegment(segment))
    .join("/")
    .replace(/\/$/, "")
}

function tagPrefixes(tag) {
  const parts = slugTag(tag).split("/").filter(Boolean)
  const prefixes = []
  for (let i = 1; i <= parts.length; i++) prefixes.push(parts.slice(0, i).join("/"))
  return prefixes
}

export function publicPathForContentSlug(slug) {
  let value = String(slug ?? "").replace(/^\/+|\/+$/g, "")
  if (value === "" || value === "index") return "/"
  if (value.endsWith("/index")) value = value.slice(0, -"/index".length)
  return `/${value}`
}

export function locForPublicPath(publicPath, origin = SITEMAP_ORIGIN) {
  if (publicPath !== "/" && (!publicPath.startsWith("/") || publicPath.endsWith("/"))) {
    throw new Error(`Not an indexable public path: ${publicPath}`)
  }
  return `${origin}${encodeURI(publicPath)}`
}

export function normalizeBlockedPath(pathname) {
  let value = String(pathname ?? "")
  try {
    value = decodeURIComponent(value)
  } catch {
    // Keep a malformed path out of the indexable set by preserving it.
  }
  if (!value.startsWith("/")) value = `/${value}`
  if (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1)
  return value
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

export function loadBlockedPublicPaths(repoRoot) {
  const blocked = new Set()
  const vercel = readJson(path.join(repoRoot, "vercel.json"))
  for (const entry of vercel.redirects ?? []) {
    if (entry?.source) blocked.add(normalizeBlockedPath(entry.source))
  }
  for (const key of Object.keys(vercel.functions ?? {})) {
    blocked.add(normalizeBlockedPath(`/${key.replace(/\.(mjs|js|ts)$/u, "")}`))
  }
  const gone = readJson(path.join(repoRoot, "data/redirects/gone-410.json"))
  for (const entry of gone.paths ?? []) blocked.add(normalizeBlockedPath(entry))
  const aliases = readJson(path.join(repoRoot, "data/redirects/aliases-301.json"))
  for (const source of Object.keys(aliases.linkTargets ?? {})) {
    blocked.add(normalizeBlockedPath(source))
  }
  return blocked
}

export function pathDoesNotReturn200(publicPath, blocked) {
  return (
    blocked.has(publicPath) ||
    publicPath === "/dossiers" ||
    publicPath.startsWith("/dossiers/")
  )
}

function parentFolders(slug) {
  const folders = []
  let dir = path.posix.dirname(String(slug ?? ""))
  while (dir && dir !== "." && dir !== "/") {
    if (dir !== "tags") folders.push(dir)
    dir = path.posix.dirname(dir)
  }
  return folders
}

// Folder indexes and tag pages are emitted as HTML without a markdown source
// of their own. ContentIndex never saw them, so they were absent from the sitemap.
export function extraIndexablePublicPaths(pages, options = {}) {
  const blocked = options.blockedPaths ?? loadBlockedPublicPaths(options.repoRoot ?? process.cwd())
  const byPath = new Map()
  for (const page of pages) {
    if (!page?.slug) continue
    const publicPath = publicPathForContentSlug(page.slug)
    if (!byPath.has(publicPath)) byPath.set(publicPath, page)
  }

  const paths = new Set()
  const folders = new Set(pages.flatMap((page) => parentFolders(page?.slug)))
  for (const folder of folders) {
    const publicPath = `/${folder}`
    if (byPath.has(publicPath)) continue
    if (pages.some((page) => metalPageOwnsFolder(page?.frontmatter?.type, page?.slug, folder))) continue
    const slug = `${folder}/index`
    const frontmatter = { title: `Folder: ${folder}`, tags: [] }
    if (isNoindex(frontmatter.noindex) || isLowValuePage(frontmatter, slug, {})) continue
    if (pathDoesNotReturn200(publicPath, blocked)) continue
    paths.add(publicPath)
  }

  const tags = new Set(["index"])
  for (const page of pages) {
    const list = page?.frontmatter?.tags
    if (!Array.isArray(list)) continue
    for (const tag of list) {
      if (typeof tag !== "string" || !tag.trim()) continue
      for (const prefix of tagPrefixes(tag)) tags.add(prefix)
    }
  }
  for (const tag of tags) {
    const publicPath = tag === "index" ? "/tags" : `/tags/${tag}`
    const slug = tag === "index" ? "tags/index" : `tags/${tag}`
    if (byPath.has(publicPath)) continue
    const frontmatter = { title: tag === "index" ? "Tag Index" : `Tag: ${tag}`, tags: [] }
    if (isNoValue(frontmatter, slug)) continue
    if (pathDoesNotReturn200(publicPath, blocked)) continue
    paths.add(publicPath)
  }
  return [...paths]
}

function isNoValue(frontmatter, slug) {
  return isNoindex(frontmatter.noindex) || isLowValuePage(frontmatter, slug, {})
}

export function publicPathForHtmlRel(rel) {
  const normalized = String(rel).split(path.sep).join("/")
  if (ERROR_DOCUMENTS.has(normalized)) return null
  if (normalized === "index.html") return "/"
  if (normalized.endsWith("/index.html")) return `/${normalized.slice(0, -"/index.html".length)}`
  if (normalized.endsWith(".html")) return `/${normalized.slice(0, -".html".length)}`
  return null
}

function preferredHtmlRel(publicPath, rels) {
  if (publicPath === "/") return rels.includes("index.html") ? "index.html" : rels[0]
  const flat = `${publicPath.slice(1)}.html`
  if (rels.includes(flat)) return flat
  const nested = `${publicPath.slice(1)}/index.html`
  if (rels.includes(nested)) return nested
  return rels[0]
}

export function htmlHasNoindex(html) {
  const headEnd = html.search(/<\/head>/i)
  const head = headEnd >= 0 ? html.slice(0, headEnd) : html.slice(0, 200_000)
  for (const tag of head.match(/<meta\b[^>]*>/gi) ?? []) {
    if (!/\bname\s*=\s*["']robots["']/i.test(tag)) continue
    const content = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1] ?? ""
    if (/(?:^|[\s,])noindex(?:$|[\s,])/i.test(content)) return true
  }
  return false
}

function isHtmlDocument(html) {
  return /<html[\s>]/i.test(html.slice(0, 4000))
}

function isRedirectDocument(html) {
  return /<meta\b[^>]*http-equiv\s*=\s*["']refresh["']/i.test(html.slice(0, 4000))
}

function walkHtml(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkHtml(full, out)
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(full)
  }
  return out
}

export function collectPublishedPages(publicDir, blocked) {
  const grouped = new Map()
  for (const file of walkHtml(publicDir)) {
    const rel = path.relative(publicDir, file).split(path.sep).join("/")
    const publicPath = publicPathForHtmlRel(rel)
    if (!publicPath) continue
    const html = fs.readFileSync(file, "utf8")
    if (!isHtmlDocument(html)) continue
    const bucket = grouped.get(publicPath) ?? []
    bucket.push({ rel, html })
    grouped.set(publicPath, bucket)
  }

  const indexable = new Set()
  const noindex = new Set()
  for (const [publicPath, files] of grouped) {
    if (pathDoesNotReturn200(publicPath, blocked)) continue
    const preferred = preferredHtmlRel(publicPath, files.map((file) => file.rel))
    const html = files.find((file) => file.rel === preferred)?.html ?? files[0].html
    if (isRedirectDocument(html)) continue
    if (htmlHasNoindex(html)) noindex.add(publicPath)
    else indexable.add(publicPath)
  }
  return { indexable, noindex }
}

function unescapeXml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}

export function sitemapLocPaths(xml, origin = SITEMAP_ORIGIN) {
  const locs = []
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/gi)) {
    const loc = unescapeXml(match[1].trim())
    let url
    try {
      url = new URL(loc)
    } catch {
      locs.push({ loc, path: null })
      continue
    }
    const originUrl = new URL(origin.endsWith("/") ? origin : `${origin}/`)
    if (url.host !== originUrl.host) {
      locs.push({ loc, path: null })
      continue
    }
    let pathname = url.pathname
    try {
      pathname = decodeURIComponent(pathname)
    } catch {
      // Compare the raw pathname when decoding fails.
    }
    locs.push({ loc, path: pathname || "/" })
  }
  return locs
}

export function auditSitemapXml(xml, { indexable, noindex, origin = SITEMAP_ORIGIN, requireComplete = false }) {
  const listed = sitemapLocPaths(xml, origin)
  const listedPaths = new Set()
  const noindexListed = []
  const notIndexable = []
  for (const entry of listed) {
    if (!entry.path || !indexable.has(entry.path)) {
      if (entry.path && noindex.has(entry.path)) noindexListed.push(entry.loc)
      else notIndexable.push(entry.loc)
      continue
    }
    listedPaths.add(entry.path)
  }
  const missing = requireComplete ? [...indexable].filter((publicPath) => !listedPaths.has(publicPath)).sort() : []
  return {
    count: listed.length,
    noindexListed,
    notIndexable,
    missing,
  }
}

export function auditPublicSitemaps(publicDir, repoRoot = process.cwd()) {
  const blocked = loadBlockedPublicPaths(repoRoot)
  const { indexable, noindex } = collectPublishedPages(publicDir, blocked)
  const mainFile = path.join(publicDir, "sitemap.xml")
  const scholarlyFile = path.join(publicDir, "sitemap-scholarly.xml")
  const mainXml = fs.existsSync(mainFile) ? fs.readFileSync(mainFile, "utf8") : null
  const scholarlyXml = fs.existsSync(scholarlyFile) ? fs.readFileSync(scholarlyFile, "utf8") : null
  return {
    indexableCount: indexable.size,
    noindexCount: noindex.size,
    main: mainXml
      ? auditSitemapXml(mainXml, { indexable, noindex, requireComplete: true })
      : { count: 0, noindexListed: [], notIndexable: ["missing sitemap.xml"], missing: [...indexable].sort() },
    scholarly: scholarlyXml
      ? auditSitemapXml(scholarlyXml, { indexable, noindex, requireComplete: false })
      : { count: 0, noindexListed: [], notIndexable: ["missing sitemap-scholarly.xml"], missing: [] },
  }
}
