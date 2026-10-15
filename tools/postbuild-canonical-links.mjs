import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { fromHtml } from "hast-util-from-html"
import { visit } from "unist-util-visit"
import { canonicalLink } from "./lib/canonical-links.mjs"

const escapeAttribute = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;")

// Apply source-offset edits to anchors only. Scripts, JSON-LD, display text,
// formatting and all other HTML bytes survive without reserialization.
export function rewriteCanonicalLinks(html, pagePath, registry, gonePaths) {
  const tree = fromHtml(html)
  const edits = []
  const counts = { alias: 0, gone: 0, unlinked: 0 }
  visit(tree, "element", (node) => {
    if (node.tagName !== "a" || typeof node.properties?.href !== "string") return
    const resolution = canonicalLink(node.properties.href, pagePath, registry, gonePaths)
    if (!resolution) return
    const start = node.position?.start.offset
    const end = node.position?.end.offset
    if (start === undefined || end === undefined) throw new Error("Anchor without source offsets")
    const original = html.slice(start, end)
    const opening = original.match(/^<a\b(?:[^>"']|"[^"]*"|'[^']*')*>/i)?.[0]
    const closing = original.match(/<\/a\s*>$/i)?.[0]
    if (!opening || !closing) throw new Error(`Cannot safely edit anchor on ${pagePath}`)
    counts[resolution.kind]++
    if (resolution.href) {
      let replacement = opening.replace(/\shref\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/i, () => ` href="${escapeAttribute(resolution.href)}"`)
      replacement = replacement.replace(/\sdata-slug\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/i, "")
      edits.push({ start, end: start + opening.length, replacement })
    } else {
      counts.unlinked++
      edits.push({ start, end: start + opening.length, replacement: "" })
      edits.push({ start: end - closing.length, end, replacement: "" })
    }
  })
  for (const edit of edits.sort((a, b) => b.start - a.start)) html = html.slice(0, edit.start) + edit.replacement + html.slice(edit.end)
  return { html, counts }
}

export function canonicalizePublic(publicDir, registry, gonePaths) {
  const totals = { alias: 0, gone: 0, unlinked: 0, files: 0 }
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(file)
      else if (entry.isFile() && entry.name.endsWith(".html")) {
        const rel = path.relative(publicDir, file).split(path.sep).join("/")
        const pagePath = "/" + rel.replace(/\.html$/, "").replace(/(?:^|\/)index$/, "")
        const original = fs.readFileSync(file, "utf8")
        const { html, counts } = rewriteCanonicalLinks(original, pagePath, registry, gonePaths)
        for (const key of ["alias", "gone", "unlinked"]) totals[key] += counts[key]
        if (html !== original) { fs.writeFileSync(file, html); totals.files++ }
      }
    }
  }
  walk(publicDir)
  return totals
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const registry = JSON.parse(fs.readFileSync("data/redirects/aliases-301.json", "utf8"))
  const gone = JSON.parse(fs.readFileSync("data/redirects/gone-410.json", "utf8"))
  console.log("canonical internal links:", canonicalizePublic(process.env.HMI_PUBLIC_DIR ?? "public", registry, new Set(gone.paths)))
}
