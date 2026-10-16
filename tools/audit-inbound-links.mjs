#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { categoryNavigation } from "./lib/category-navigation.mjs"
import { fromHtml } from "hast-util-from-html"
import { readDescriptionPage } from "./audit-meta-descriptions.mjs"
import { normalizeLinkPath, canonicalLink } from "./lib/canonical-links.mjs"

const SITE = "https://heavymetalindex.com"
export const COUNTING =
  "Distinct canonical source documents containing a navigable HTML a[href] to a different canonical document. Repeated anchors, query strings, fragments and equivalent index.html paths count once per source. Published noindex,follow pages can contribute; nofollow documents, refresh/alias/gone pages, 404 and verification payloads cannot. Structurally hidden, inert, inline-hidden, permanently hidden home/Ask layout containers and template anchors, metadata, scripts and graph data do not count. Alias/gone hrefs are rejected, not credited."

export function readLinkPage(html, file) {
  const tree = fromHtml(html)
  const identity = readDescriptionPage(html, file, tree)
  const verification = html.match(
    /^\s*google-site-verification:\s*(google[a-f0-9]+\.html)(?:\s*<script\b[\s\S]*)?\s*$/i,
  )
  const ownership = Boolean(verification && path.basename(file) === verification[1])
  if (ownership) identity.indexable = false
  const servedPath = "/" + file.replace(/\.html$/, "").replace(/(?:^|\/)index$/, "")
  let canonical = normalizeLinkPath(servedPath)
  let nofollow = false
  let refresh = false
  const hrefs = []
  const related = []
  let relatedBlock = false
  function walk(node, hidden = false, inRelated = false, layout = "") {
    const p = node.properties ?? {}
    const classes = p.className ?? []
    if (classes.includes("proof-home")) layout = "home"
    if (classes.includes("proof-ask")) layout = "ask"
    // Permanent layout exclusions in proof-design.scss, home-v3.scss and
    // v3-chrome.scss. Collapsible menus and responsive navigation still count.
    hidden ||=
      (layout === "home" &&
        ["snav", "rail", "page-header", "hmi-related"].some((c) => classes.includes(c))) ||
      (layout === "ask" &&
        ["snav", "rail", "page-header", "page-footer"].some((c) => classes.includes(c)))
    hidden ||=
      ["script", "style", "template", "noscript"].includes(node.tagName) ||
      p.hidden === true ||
      Object.hasOwn(p, "inert") ||
      String(p.ariaHidden) === "true" ||
      /(?:display\s*:\s*none|visibility\s*:\s*hidden)/i.test(String(p.style ?? ""))
    if (node.tagName === "link" && (p.rel ?? []).includes("canonical")) {
      try {
        const url = new URL(p.href, SITE)
        if (url.origin === SITE) canonical = normalizeLinkPath(url.pathname)
      } catch {
        /* Invalid canonical is not an edge. */
      }
    }
    if (node.tagName === "meta") {
      if (
        ["robots", "googlebot"].includes(String(p.name).toLowerCase()) &&
        /\b(?:nofollow|none)\b/i.test(String(p.content))
      )
        nofollow = true
      if (String(p.httpEquiv).toLowerCase() === "refresh") refresh = true
    }
    if ((p.className ?? []).includes("related-ingredients")) relatedBlock = true
    inRelated ||= (p.className ?? []).includes("related-ingredients")
    if (!hidden && node.tagName === "a" && typeof p.href === "string") {
      hrefs.push(p.href)
      if (inRelated) related.push(p.href)
    }
    for (const child of node.children ?? []) walk(child, hidden, inRelated, layout)
  }
  walk(tree)
  return {
    ...identity,
    servedPath,
    canonical,
    nofollow,
    refresh,
    ownership,
    hrefs,
    related,
    relatedBlock,
  }
}

export function summarizeInbound(pages, registry = { linkTargets: {} }, gonePaths = new Set()) {
  const blocked = (p) =>
    gonePaths.has(p) ||
    p === "/dossiers" ||
    p.startsWith("/dossiers/") ||
    Object.hasOwn(registry.linkTargets, p)
  const documents = new Map()
  for (const page of pages) {
    if (
      page.refresh ||
      blocked(normalizeLinkPath(page.servedPath)) ||
      page.file === "404.html" ||
      page.ownership
    )
      continue
    const doc = documents.get(page.canonical) ?? {
      path: page.canonical,
      indexable: false,
      inbound: new Set(),
      outbound: new Set(),
      related: new Set(),
      related_block: false,
    }
    doc.indexable ||= page.indexable
    doc.related_block ||= page.relatedBlock
    documents.set(page.canonical, doc)
  }
  const invalid = []
  for (const page of pages) {
    if (
      page.refresh ||
      blocked(normalizeLinkPath(page.servedPath)) ||
      page.file === "404.html" ||
      page.ownership
    )
      continue
    const source = documents.get(page.canonical)
    if (!source) continue
    for (const href of page.hrefs) {
      let url
      try {
        url = new URL(href, SITE + page.servedPath)
      } catch {
        continue
      }
      if (
        !/^https?:$/.test(url.protocol) ||
        !["heavymetalindex.com", "www.heavymetalindex.com"].includes(url.hostname)
      )
        continue
      const targetPath = normalizeLinkPath(url.pathname)
      if (canonicalLink(href, page.servedPath, registry, gonePaths) || blocked(targetPath)) {
        invalid.push({ source: page.canonical, href })
        continue
      }
      const target = documents.get(targetPath)
      if (!target || source === target) continue
      if (!page.nofollow) {
        source.outbound.add(target.path)
        target.inbound.add(source.path)
      }
      if (page.related?.includes(href)) source.related.add(target.path)
    }
  }
  const rows = [...documents.values()]
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((p) => ({
      ...p,
      inbound: [...p.inbound].sort(),
      outbound: [...p.outbound].sort(),
      related: [...p.related].sort(),
      inbound_count: p.inbound.size,
    }))
  const indexed = rows.filter((p) => p.indexable)
  return {
    counting: COUNTING,
    scanned_files: pages.length,
    indexable_pages: indexed.length,
    zero: indexed.filter((p) => p.inbound_count === 0),
    one: indexed.filter((p) => p.inbound_count === 1),
    invalid,
    pages: rows,
  }
}

export function auditInbound(directory, repoRoot = process.cwd()) {
  const pages = []
  function walk(dir) {
    for (const entry of fs
      .readdirSync(dir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(file)
      else if (entry.isFile() && file.endsWith(".html"))
        pages.push(readLinkPage(fs.readFileSync(file, "utf8"), path.relative(directory, file)))
    }
  }
  walk(directory)
  if (!pages.length) throw new Error(`No built HTML in ${directory}`)
  const registry = JSON.parse(
    fs.readFileSync(path.join(repoRoot, "data/redirects/aliases-301.json"), "utf8"),
  )
  const gone = JSON.parse(
    fs.readFileSync(path.join(repoRoot, "data/redirects/gone-410.json"), "utf8"),
  )
  return summarizeInbound(pages, registry, new Set(gone.paths.map(normalizeLinkPath)))
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  try {
    const report = auditInbound(
      process.argv.find((arg) => arg.startsWith("--dir="))?.slice(6) ?? "public",
    )
    report.navigation = categoryNavigation(report)
    const failed =
      report.zero.length ||
      report.invalid.length ||
      report.navigation.missing.length ||
      report.navigation.related_problems.length
    if (process.argv.includes("--json")) console.log(JSON.stringify(report, null, 2))
    else {
      console.log(
        `audit-inbound-links: ${failed ? "FAIL" : "PASS"} (${report.indexable_pages} indexable canonical pages; ${report.zero.length} zero inbound; ${report.one.length} one inbound)`,
      )
      console.log(report.counting)
      for (const p of [...report.zero, ...report.one])
        console.log(
          `  ${p.inbound_count}: ${p.path}${p.inbound.length ? ` <- ${p.inbound.join(", ")}` : ""}`,
        )
    }
    if (!process.argv.includes("--json")) {
      const { missing, related_problems, ...counts } = report.navigation
      console.log(
        "category-navigation:",
        JSON.stringify({
          ...counts,
          missing: missing.length,
          related_problems: related_problems.length,
        }),
      )
      for (const issue of missing)
        console.log(`  missing navigation: ${issue.from} -> ${issue.page}`)
      for (const issue of related_problems)
        console.log(`  related ingredients mismatch: ${issue.page}`)
    }
    process.exitCode = failed ? 1 : 0
  } catch (error) {
    console.error(`audit-inbound-links: ${error.message}`)
    process.exitCode = 1
  }
}
