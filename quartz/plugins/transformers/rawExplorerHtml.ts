import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit } from "unist-util-visit"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import { toHtml } from "hast-util-to-html"
import { VFile } from "vfile"
import type { FullSlug } from "../../util/path"
import { extractExplorerSidecars, type ExplorerSidecar } from "./explorerSidecars"

// Compiled ingredient pages inline multi-megabyte explorer markup. rehype-raw
// turns every cell into a hast node and the build runs out of memory. Lift
// those blocks out before Markdown parsing and put the original markup back
// as one raw HTML node afterwards. The page bytes are unchanged.

const stash = new Map<string, string>()
let seq = 0

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
    stash.set(id, markdown.slice(match.index, end))
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

export function restoreExplorerHtml(tree: Root, file?: VFile) {
  visit(tree, "element", (node, index, parent) => {
    const id = String(node.properties?.dataHmiRaw ?? "")
    if (!id || !stash.has(id) || !parent || index === undefined) return
    const original = stash.get(id)!
    stash.delete(id)
    const slug = (file?.data?.slug ?? "page") as FullSlug
    // Rice findings are split by the postbuild asset step, which needs the
    // inline explorer. Every other page moves payload and drawers to sidecars
    // so the published HTML stays within the page-weight gate.
    let html = original
    if (slug !== "ingredients/rice") {
      const externalized = externalizeExplorerHtml(original, slug)
      html = externalized.html
      const sidecars: ExplorerSidecar[] = file?.data?.explorerSidecars ?? []
      if (file) file.data.explorerSidecars = sidecars.concat(externalized.sidecars)
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
