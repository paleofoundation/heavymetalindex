import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"
import ts from "typescript"
import { globbySync } from "globby"
import { aliasToSlug, coerceToArray } from "../quartz/util/aliasSlugs"
import { FilePath, FullSlug, isRelativeURL, simplifySlug, slugifyFilePath } from "../quartz/util/path"
import { isPublicWikiRecord } from "./lib/source-publication.mjs"
import { isIntentionallyGone, normalizePublicPath } from "../lib/gone-410"

type RecordPage = { slug: string; aliases: string[] }
type Collision = { source: string; targets: string[]; reason: string; destination?: string }

// Use the same path and relative-alias rules as Quartz's frontmatter and emitter.
export function aliasPath(alias: string, slug: string): string {
  return normalizePublicPath(isRelativeURL(alias)
    ? path.posix.normalize(path.posix.join(simplifySlug(slug as FullSlug), "..", alias))
    : alias)
}

export function buildAliasRegistry(pages: RecordPage[], legacy: { source: string; destination: string }[], gone: string[]) {
  const goneSet = new Set(gone.map(normalizePublicPath))
  const real = new Set<string>(["/", "/index"])
  for (const page of pages) {
    const canonical = normalizePublicPath(simplifySlug(page.slug as FullSlug))
    real.add(canonical)
    real.add(normalizePublicPath(page.slug))
    // Quartz also emits folder hubs, even without a Markdown index.
    for (let parent = path.posix.dirname(canonical); parent !== "/"; parent = path.posix.dirname(parent)) {
      real.add(parent)
      real.add(`${parent}/index`)
    }
  }
  // Pattern rules (/metals/sources/:id, regex groups) match many paths and name no page, so they
  // are not aliases; only literal redirect sources enter the registry.
  const literal = legacy.filter(({ source }) => !/[:(*]/.test(source))
  const legacyMap = new Map(literal.map(({ source, destination }) => [normalizePublicPath(source), normalizePublicPath(destination)]))
  const claims = new Map<string, Set<string>>()
  for (const page of pages) for (const alias of page.aliases) {
    const source = aliasPath(alias, page.slug)
    const target = normalizePublicPath(simplifySlug(page.slug as FullSlug))
    if (!claims.has(source)) claims.set(source, new Set())
    claims.get(source)!.add(target)
  }
  const redirects: Record<string, string> = {}
  const linkTargets: Record<string, string | null> = {}
  const collisions: Collision[] = []
  const clearTarget = (target: string) => real.has(target) && !isIntentionallyGone(target, goneSet)
  // Existing redirects remain authoritative, including when frontmatter disagrees.
  for (const [source, destination] of legacyMap) {
    let target = destination
    const seen = new Set([source])
    while (legacyMap.has(target) && !seen.has(target)) {
      seen.add(target)
      target = legacyMap.get(target)!
    }
    linkTargets[source] = clearTarget(target) && !seen.has(target) ? target : null
  }
  for (const [source, owners] of [...claims].sort(([a], [b]) => a.localeCompare(b, "en"))) {
    const targets = [...owners].sort()
    const target = targets.length === 1 && clearTarget(targets[0]) ? targets[0] : null
    let reason = ""
    if (legacyMap.has(source)) reason = "existing vercel redirect"
    else if (isIntentionallyGone(source, goneSet)) reason = "gone path"
    else if (real.has(source)) reason = "real page"
    else if (/^\/(?:api|static|_next|staff|admin|workbench|standards-workbench)(?:\/|$)/.test(source) || source.startsWith("//") || source.includes("\\")) reason = "reserved route"
    else if (targets.length > 1) reason = "ambiguous alias"
    else if (!target) reason = "unavailable canonical page"
    if (reason) {
      collisions.push({ source, targets, reason, ...(legacyMap.has(source) ? { destination: legacyMap.get(source)! } : {}) })
    } else {
      redirects[source] = target!
    }
    // A real page wins over an alias. Gone paths can be retargeted only when
    // the frontmatter establishes one clear, published canonical page.
    if (!legacyMap.has(source) && reason !== "real page" && reason !== "reserved route") linkTargets[source] = target
  }
  return { redirects, linkTargets, collisions }
}

export function generateAliasRegistry(repoRoot: string) {
  const wiki = path.join(repoRoot, "wiki")
  const pages: RecordPage[] = []
  // Read the literal build exclusions without importing layout components
  // (which require Quartz's SCSS loader). Fail if config becomes dynamic.
  const config = ts.createSourceFile("quartz.config.ts", fs.readFileSync(path.join(repoRoot, "quartz.config.ts"), "utf8"), ts.ScriptTarget.Latest, true)
  let ignore: string[] | undefined
  function visit(node: ts.Node) {
    if (ts.isPropertyAssignment(node) && node.name.getText(config) === "ignorePatterns") {
      if (!ts.isArrayLiteralExpression(node.initializer) || !node.initializer.elements.every(ts.isStringLiteral)) {
        throw new Error("Alias generator requires literal Quartz ignorePatterns")
      }
      ignore = node.initializer.elements.map((item) => (item as ts.StringLiteral).text)
    }
    ts.forEachChild(node, visit)
  }
  visit(config)
  if (!ignore) throw new Error("Quartz ignorePatterns missing")
  for (const relative of globbySync("**/*.md", { cwd: wiki, ignore, gitignore: true }).sort()) {
    const slug = slugifyFilePath(relative as FilePath)
    const { data } = matter(fs.readFileSync(path.join(wiki, relative), "utf8"))
    if (!isPublicWikiRecord(data, slug)) continue
    const aliases = coerceToArray(data.aliases ?? data.alias).map(aliasToSlug)
    if (data.permalink != null && String(data.permalink) !== "") aliases.push(String(data.permalink) as FullSlug)
    pages.push({ slug, aliases })
  }
  const { redirects } = JSON.parse(fs.readFileSync(path.join(repoRoot, "vercel.json"), "utf8"))
  const { paths } = JSON.parse(fs.readFileSync(path.join(repoRoot, "data/redirects/gone-410.json"), "utf8"))
  return buildAliasRegistry(pages, redirects, paths)
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const registry = generateAliasRegistry(process.cwd())
  fs.writeFileSync("data/redirects/aliases-301.json", JSON.stringify(registry, null, 2) + "\n")
  console.log(`alias redirects: ${Object.keys(registry.redirects).length}; collisions skipped: ${registry.collisions.length}`)
}
