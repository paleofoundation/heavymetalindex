#!/usr/bin/env node
// Fail the build when a published HTML page links to an internal path that
// is missing, aliased or gone, even if a static stub exists. Sitemap locs
// must not advertise a redirect source, alias or removed path.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { canonicalLink, normalizeLinkPath } from "./lib/canonical-links.mjs"

const SITE = "https://heavymetalindex.com"
const SITE_HOSTS = new Set(["heavymetalindex.com", "www.heavymetalindex.com"])

export function normalizePublicPath(pathname) {
  const hash = pathname.indexOf("#")
  const query = pathname.indexOf("?")
  let end = pathname.length
  if (hash >= 0) end = Math.min(end, hash)
  if (query >= 0) end = Math.min(end, query)
  let value = pathname.slice(0, end)
  try {
    value = decodeURIComponent(value)
  } catch {
    // Keep the raw path when percent-encoding is malformed.
  }
  if (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1)
  if (!value.startsWith("/")) value = `/${value}`
  return value
}

function loadVercel(repoRoot) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, "vercel.json"), "utf8"))
}

function loadRedirectSources(vercel) {
  return new Set(vercel.redirects.map((entry) => normalizePublicPath(entry.source)))
}

function loadFunctionPaths(vercel) {
  const paths = new Set()
  for (const key of Object.keys(vercel.functions ?? {})) {
    paths.add(`/${key.replace(/\.(mjs|js|ts)$/u, "")}`)
  }
  return paths
}

function loadGonePaths(repoRoot) {
  const gone = JSON.parse(
    fs.readFileSync(path.join(repoRoot, "data/redirects/gone-410.json"), "utf8"),
  )
  return new Set(gone.paths.map((entry) => normalizePublicPath(entry)))
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

function pagePathForHtml(publicDir, file) {
  const rel = path.relative(publicDir, file).split(path.sep).join("/")
  if (rel === "index.html") return "/"
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"/index.html".length)}`
  if (rel.endsWith(".html")) return `/${rel.slice(0, -".html".length)}`
  return `/${rel}`
}

function stripNonContent(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
}

function hrefsIn(html) {
  const found = []
  const re = /\shref\s*=\s*(?:"([^"]*)"|'([^']*)')/gi
  for (const match of html.matchAll(re)) found.push(decodeEntities(match[1] ?? match[2] ?? ""))
  return found
}

function internalPath(href, pagePath) {
  if (!href || href.startsWith("#")) return null
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) && !/^https?:/i.test(href)) return null
  let url
  try {
    url = new URL(href, `${SITE}${pagePath === "/" ? "/" : pagePath}`)
  } catch {
    return null
  }
  if (!SITE_HOSTS.has(url.hostname.toLowerCase())) return null
  return normalizePublicPath(`${url.pathname}${url.search}${url.hash}`)
}

function fileInside(publicDir, rel) {
  const root = path.resolve(publicDir)
  const abs = path.resolve(root, rel)
  if (abs !== root && !abs.startsWith(`${root}${path.sep}`)) return false
  return fs.existsSync(abs) && fs.statSync(abs).isFile()
}

export function pathIsServed(publicDir, publicPath, redirectSources, functionPaths = new Set()) {
  const normalized = normalizePublicPath(publicPath)
  if (redirectSources.has(normalized) || functionPaths.has(normalized)) return true
  const rel = normalized === "/" ? "" : normalized.slice(1)
  const candidates = rel === "" ? ["index.html"] : [`${rel}.html`, `${rel}/index.html`, rel]
  return candidates.some((candidate) => fileInside(publicDir, candidate))
}

function sitemapLocs(file) {
  if (!fs.existsSync(file)) return null
  const xml = fs.readFileSync(file, "utf8")
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1].trim())
}

function sitemapProblems(locs, redirectSources, gonePaths, aliasPaths) {
  const problems = []
  for (const loc of locs) {
    let pathname
    try {
      pathname = normalizePublicPath(new URL(loc).pathname)
    } catch {
      problems.push(loc)
      continue
    }
    if (
      redirectSources.has(pathname) ||
      aliasPaths.has(normalizeLinkPath(pathname)) ||
      gonePaths.has(pathname) ||
      pathname === "/dossiers" ||
      pathname.startsWith("/dossiers/")
    ) {
      problems.push(pathname)
    }
  }
  return problems
}

export function auditDeadInternalHrefs({
  publicDir,
  repoRoot,
  requireSitemap = true,
}) {
  const vercel = loadVercel(repoRoot)
  const redirectSources = loadRedirectSources(vercel)
  const functionPaths = loadFunctionPaths(vercel)
  const gonePaths = loadGonePaths(repoRoot)
  const registry = JSON.parse(fs.readFileSync(path.join(repoRoot, "data/redirects/aliases-301.json"), "utf8"))
  const aliasPaths = new Set(Object.keys(registry.linkTargets))
  const dead = []
  const alias = []
  const gone = []
  for (const file of walkHtml(publicDir)) {
    const pagePath = pagePathForHtml(publicDir, file)
    const html = stripNonContent(fs.readFileSync(file, "utf8"))
    for (const href of hrefsIn(html)) {
      const target = internalPath(href, pagePath)
      if (!target) continue
      const resolution = canonicalLink(href, pagePath, registry, gonePaths)
      if (resolution) (resolution.kind === "gone" ? gone : alias).push({ page: pagePath, href, target })
      if (!pathIsServed(publicDir, target, redirectSources, functionPaths)) {
        dead.push({ page: pagePath, href, target })
      }
    }
  }

  const sitemapFiles = [path.join(publicDir, "sitemap.xml")]
  const scholarly = path.join(publicDir, "sitemap-scholarly.xml")
  if (fs.existsSync(scholarly)) sitemapFiles.push(scholarly)
  const sitemap = []
  for (const file of sitemapFiles) {
    const locs = sitemapLocs(file)
    if (locs === null) {
      if (requireSitemap && path.basename(file) === "sitemap.xml") {
        sitemap.push("missing sitemap.xml")
      }
      continue
    }
    sitemap.push(...sitemapProblems(locs, redirectSources, gonePaths, aliasPaths))
  }

  return { dead, alias, gone, sitemap }
}

function isCli() {
  const entry = process.argv[1]
  if (!entry) return false
  return path.resolve(entry) === fileURLToPath(import.meta.url)
}

if (isCli()) {
  const repoRoot = process.cwd()
  const publicDir = process.env.HMI_PUBLIC_DIR
    ? path.resolve(process.env.HMI_PUBLIC_DIR)
    : path.join(repoRoot, "public")
  const { dead, alias, gone, sitemap } = auditDeadInternalHrefs({ publicDir, repoRoot })
  if (dead.length === 0 && alias.length === 0 && gone.length === 0 && sitemap.length === 0) {
    console.log(
      "audit-dead-internal-hrefs: PASS (0 dead, alias or gone internal hrefs; 0 invalid sitemap locs)",
    )
  } else {
    console.error(
      `audit-dead-internal-hrefs: FAIL (${dead.length} dead, ${alias.length} alias, ${gone.length} gone internal hrefs; ${sitemap.length} sitemap problems)`,
    )
    for (const item of [...dead, ...alias, ...gone].slice(0, 40)) {
      console.error(`  ${item.page} -> ${item.href} (${item.target})`)
    }
    for (const item of sitemap.slice(0, 20)) console.error(`  sitemap ${item}`)
    process.exit(1)
  }
}
