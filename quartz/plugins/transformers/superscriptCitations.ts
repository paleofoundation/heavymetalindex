import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Root, Element, Text, ElementContent } from "hast"

/**
 * SuperscriptCitations — render-time citation numbering for Heavy Metal Index.
 *
 * Runs as an htmlPlugin AFTER CrawlLinks. By the time this sees the tree,
 * CrawlLinks has already turned every prose `([[sources/cite-key|Author Year]])`
 * into an <a> with:
 *   - className containing "internal" (and usually "alias")
 *   - data-slug = "sources/cite-key" (a FullSlug)
 *   - href      = resolved relative URL to the source page
 *   - a single text child whose value is the alias ("Author Year")
 *
 * This plugin, for METAL pages only (frontmatter type === "metal"):
 *   1. Walks the tree tracking ancestry. Inline source anchors whose nearest
 *      meaningful block ancestor is PROSE (p / li) get their author-year text
 *      replaced by a superscript number:
 *        <sup class="hmi-cite"><a href=… data-slug=… data-source=cite-key>N</a></sup>
 *      Anchors inside a table cell (td/th), a heading (h1–h6), the Sources
 *      table, or the Page-history table are LEFT UNTOUCHED (no information loss;
 *      the full citation table keeps its author-year links).
 *   2. Per-page first-appearance numbering: the first cite-key seen gets 1, the
 *      next NEW key gets 2, etc. Repeat cites of the SAME key reuse their number.
 *      Different keys never share a number (Map<cite-key, number>).
 *   3. Locates the rendered "Sources" <h2> and wraps that section (the h2 plus
 *      everything up to the next h2/h1) in <details class="hmi-references"> with a
 *      <summary>, and stamps each citation-table row anchor with id="ref-<key>"
 *      and a back-reference target so superscripts can deep-link to their row.
 *
 * On-disk markdown is never modified — this is purely a hast transform.
 * The dedupe map is per-file (declared fresh inside the returned transformer),
 * so numbering is page-local, exactly as required.
 */

// --- helpers -------------------------------------------------------------

const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"])
const TABLE_CELL_TAGS = new Set(["td", "th"])
// Block ancestors that count as "prose" for superscripting. Citations whose
// nearest of these is one of these tags are eligible.
const PROSE_BLOCK_TAGS = new Set(["p", "li"])

function classList(node: Element): string[] {
  const c = node.properties?.className
  if (Array.isArray(c)) return c as string[]
  if (typeof c === "string") return c.split(/\s+/).filter(Boolean)
  return []
}

/** Is this the prose source-citation anchor CrawlLinks produced? */
function isSourceAnchor(node: Element): boolean {
  if (node.tagName !== "a") return false
  const slug = node.properties?.["data-slug"]
  if (typeof slug !== "string") return false
  if (!slug.startsWith("sources/")) return false
  return classList(node).includes("internal")
}

/** "sources/foo2020-bar" -> "foo2020-bar" (strip any anchor too). */
function citeKeyFromSlug(slug: string): string {
  const noAnchor = slug.split("#", 1)[0]
  const seg = noAnchor.split("/")
  return seg[seg.length - 1] ?? noAnchor
}

function getFrontmatterType(file: any): string | undefined {
  const t = file?.data?.frontmatter?.type
  return typeof t === "string" ? t : undefined
}

/** Visible text of an h2's children, for matching the Sources heading. */
function headingText(node: Element): string {
  let out = ""
  visit(node, "text", (t: Text) => {
    out += t.value
  })
  return out.trim().toLowerCase()
}

// --- plugin --------------------------------------------------------------

export const SuperscriptCitations: QuartzTransformerPlugin = () => {
  return {
    name: "SuperscriptCitations",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root, file) => {
            // GATE: metal pages first.
            if (getFrontmatterType(file) !== "metal") return

            // ---- Pass 1: number prose citations -----------------------------
            // Page-local dedupe: cite-key -> assigned number. First appearance
            // (in document order, prose only) mints the next integer; repeats of
            // the same key reuse it; distinct keys never collide.
            const numbering = new Map<string, number>()
            let nextNum = 1

            // Track the nearest disqualifying / qualifying block ancestor by
            // walking with an explicit ancestor stack (visit gives us ancestors).
            visit(
              tree,
              "element",
              (node: Element, _index, _parent, ancestors: Element[] = []) => {
                if (!isSourceAnchor(node)) return

                // Prose-ancestry guard. Scan ancestors from nearest outward.
                // Disqualify if inside a heading or a table cell. Require that
                // the FIRST block-level ancestor we hit is a prose block (p/li).
                let eligible = false
                for (let i = ancestors.length - 1; i >= 0; i--) {
                  const tag = ancestors[i].tagName
                  if (HEADING_TAGS.has(tag) || TABLE_CELL_TAGS.has(tag)) {
                    eligible = false
                    break
                  }
                  if (PROSE_BLOCK_TAGS.has(tag)) {
                    eligible = true
                    break
                  }
                  // keep climbing through inline wrappers (em, strong, span…)
                }
                if (!eligible) return

                const slug = node.properties!["data-slug"] as string
                const key = citeKeyFromSlug(slug)

                let num = numbering.get(key)
                if (num === undefined) {
                  num = nextNum++
                  numbering.set(key, num)
                }

                // Preserve href + data-slug (popovers + navigation), add
                // data-source = cite-key, replace children with the number.
                const anchor: Element = {
                  type: "element",
                  tagName: "a",
                  properties: {
                    href: node.properties!.href,
                    "data-slug": slug,
                    "data-source": key,
                    className: ["hmi-cite-link"],
                  },
                  children: [{ type: "text", value: String(num) } as Text],
                }

                // Convert the existing anchor node IN PLACE into the <sup>
                // wrapper so we don't need parent/index splicing.
                node.tagName = "sup"
                node.properties = { className: ["hmi-cite"], id: `cite-${key}` }
                node.children = [anchor as ElementContent]
              },
            )

            // ---- Pass 2: wrap the Sources section in <details> --------------
            // Find the "Sources" h2, collect it + following siblings up to the
            // next h1/h2, replace them with a single <details class=hmi-references>.
            const body = tree
            const children = body.children as ElementContent[]

            let startIdx = -1
            for (let i = 0; i < children.length; i++) {
              const c = children[i]
              if (
                c.type === "element" &&
                c.tagName === "h2" &&
                headingText(c) === "sources"
              ) {
                startIdx = i
                break
              }
            }

            if (startIdx !== -1) {
              // Find end: next h1/h2 after startIdx (exclusive).
              let endIdx = children.length
              for (let i = startIdx + 1; i < children.length; i++) {
                const c = children[i]
                if (
                  c.type === "element" &&
                  (c.tagName === "h1" || c.tagName === "h2")
                ) {
                  endIdx = i
                  break
                }
              }

              const sectionNodes = children.slice(startIdx, endIdx)
              const h2 = sectionNodes[0] as Element

              // Per-row ref anchors: stamp id="ref-<key>" on each citation-table
              // row's source anchor inside this section, so superscripts have a
              // stable deep-link target without rewriting on-disk markdown.
              for (const n of sectionNodes) {
                if (n.type !== "element") continue
                visit(n, "element", (a: Element) => {
                  if (!isSourceAnchor(a)) return
                  const slug = a.properties!["data-slug"] as string
                  const key = citeKeyFromSlug(slug)
                  // Put the id on the enclosing row via the anchor; CSS :target
                  // and same-page hash both resolve to this anchor.
                  if (!a.properties!.id) a.properties!.id = `ref-${key}`
                  a.properties!["data-source"] = key
                })
              }

              // Build <summary> from the original h2's inline children so the
              // heading text ("Sources") is preserved and styleable.
              const summary: Element = {
                type: "element",
                tagName: "summary",
                properties: { className: ["hmi-references-summary"] },
                children: h2.children as ElementContent[],
              }

              const details: Element = {
                type: "element",
                tagName: "details",
                properties: { className: ["hmi-references"], open: true },
                children: [summary, ...(sectionNodes.slice(1) as ElementContent[])],
              }

              // Splice the section out, insert the <details> in its place.
              children.splice(startIdx, endIdx - startIdx, details as ElementContent)
            }
          }
        },
      ]
    },
  }
}
