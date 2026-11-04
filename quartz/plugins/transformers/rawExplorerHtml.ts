import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit } from "unist-util-visit"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import { toHtml } from "hast-util-to-html"
import { VFile } from "vfile"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import type { FullSlug } from "../../util/path"
import { sourceCiteMetaFor } from "./sourceCiteMeta"
import { extractExplorerSidecars, type ExplorerSidecar } from "./explorerSidecars"

// Compiled ingredient pages inline multi-megabyte explorer markup. rehype-raw
// turns every cell into a hast node and the build runs out of memory. Lift
// those blocks out before Markdown parsing and put the original markup back
// as one raw HTML node afterwards. The page bytes are unchanged.
//
// Markdown for the whole corpus is parsed before any HTML pass, so the lifted
// blocks would otherwise sit in the heap together. They are spilled to temp
// files and read back one page at a time. The sidecar JSON is spilled the
// same way so the parsed corpus does not retain every drawer payload.

const stash = new Map<string, string>()
let seq = 0
const spillDir = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-explorer-"))

const OPEN = /<div\b[^>]*\bclass="[^"]*\bhmi-analyte-explorer\b[^"]*"[^>]*>/g

function matchingDivEnd(text: string, openIndex: number) {
  const tag = /<\/?div\b[^>]*>/g
  tag.lastIndex = openIndex
  let depth = 0
  let match: RegExpExecArray | null
  while ((match = tag.exec(text)) !== null) {
    depth += match[0].startsWith("</") ? -1 : 1
    if (depth === 0) return match.index + match[0].length
  }
  return -1
}

function spill(id: string, body: string) {
  const file = path.join(spillDir, id)
  fs.writeFileSync(file, body)
  return file
}

function take(id: string) {
  const file = stash.get(id)
  if (!file) return undefined
  stash.delete(id)
  const body = fs.readFileSync(file, "utf8")
  fs.unlinkSync(file)
  return body
}

export function liftExplorerHtml(markdown: string) {
  if (!markdown.includes("hmi-analyte-explorer")) return markdown
  let out = ""
  let cursor = 0
  OPEN.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = OPEN.exec(markdown)) !== null) {
    if (match.index < cursor) continue
    const end = matchingDivEnd(markdown, match.index)
    if (end < 0) break
    const id = `HMIRAW${seq++}`
    stash.set(id, spill(id, markdown.slice(match.index, end)))
    out += markdown.slice(cursor, match.index) + `\n\n<p data-hmi-raw="${id}">${id}</p>\n\n`
    cursor = end
    OPEN.lastIndex = end
  }
  return out + markdown.slice(cursor)
}

// Parse one explorer at a time, move its filter payload and drawers into the
// sidecar list, and keep only the stripped shell in the page.
export function externalizeExplorerHtml(html: string, slug: FullSlug) {
  const processor = unified().use(remarkParse).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw)
  const tree = processor.runSync(processor.parse(html)) as Root
  const file = new VFile()
  file.data.slug = slug
  const sidecars = extractExplorerSidecars(tree, slug)
  return { html: toHtml(tree, { allowDangerousHtml: true }), sidecars }
}

function spillSidecars(sidecars: ExplorerSidecar[], id: string): ExplorerSidecar[] {
  return sidecars.map((sidecar, index) => ({
    slug: sidecar.slug,
    content: "",
    spill: spill(`${id}-${index}`, sidecar.content),
  }))
}

// Lifted explorer markup skips Markdown parsing, so wiki citations such as
// [[sources/x]] and in-page links such as [label](#anchor) inside its cells
// would reach readers as literal text. Render them as the same anchors the
// Markdown pipeline emits, so the citation script numbers them in place.
const escAttr = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const WIKI_SOURCE = /\[\[(sources\/[^\]|#]+)(?:\|([^\]]+))?\]\]/g
const HASH_LINK = /\[([^\[\]\n]+)\]\((#[^)\s"]+)\)/g

export function renderExplorerTokens(html: string, slug: string) {
  if (!html.includes("[")) return html
  const up = "../".repeat(Math.max(0, slug.split("/").length - 1)) || "./"
  return html
    .replace(WIKI_SOURCE, (_m, target: string, label?: string) => {
      const s = target.trim().replace(/\.md$/, "")
      const m = sourceCiteMetaFor(s)
      const text = (label ?? m?.authors ?? s.split("/").pop() ?? s).trim()
      const meta = m
        ? [["data-authors", m.authors], ["data-title", m.title], ["data-journal", m.journal], ["data-review-link", m.reviewLink]]
            .filter(([, v]) => v)
            .map(([k, v]) => ` ${k}="${escAttr(String(v))}"`)
            .join("")
        : ""
      return `<a href="${escAttr(up + s)}" class="internal" data-slug="${escAttr(s)}"${meta}>${escAttr(text)}</a>`
    })
    .replace(HASH_LINK, (_m, text: string, href: string) =>
      `<a href="${escAttr(href)}" data-no-popover="true">${text}</a>`)
}

export function restoreExplorerHtml(tree: Root, file?: VFile) {
  visit(tree, "element", (node, index, parent) => {
    const id = String(node.properties?.dataHmiRaw ?? "")
    if (!id || !stash.has(id) || !parent || index === undefined) return
    const original = take(id)
    if (original === undefined) return
    const slug = (file?.data?.slug ?? "page") as FullSlug
    // Rice findings are split by the postbuild asset step, which needs the
    // inline explorer. Every other page moves payload and drawers to sidecars
    // so the published HTML stays within the page-weight gate.
    let html = renderExplorerTokens(original, slug)
    let sidecars: ExplorerSidecar[] = []
    if (slug !== "ingredients/rice") {
      const externalized = externalizeExplorerHtml(html, slug)
      html = externalized.html
      sidecars = spillSidecars(externalized.sidecars, id)
    }
    if (file && sidecars.length) {
      const existing: ExplorerSidecar[] = file.data.explorerSidecars ?? []
      file.data.explorerSidecars = existing.concat(sidecars)
    }
    parent.children[index] = {
      type: "element",
      tagName: "hmi-raw",
      properties: { html },
      children: [],
    }
  })
}

export const RawExplorerHtml: QuartzTransformerPlugin = () => ({
  name: "RawExplorerHtml",
  textTransform(_ctx, src) {
    return liftExplorerHtml(src)
  },
  htmlPlugins() {
    return [() => (tree: Root, file: VFile) => {
      restoreExplorerHtml(tree, file)
    }]
  },
})
