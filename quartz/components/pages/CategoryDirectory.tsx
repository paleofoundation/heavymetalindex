import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/listPage.scss"
import { PageList, SortFn } from "../PageList"
import { Root, ElementContent } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { ComponentChildren } from "preact"
import { concatenateResources } from "../../util/resources"
import { resolveRelative, FullSlug, SimpleSlug } from "../../util/path"
import FolderContentConstructor from "./FolderContent"
import categoryIndex from "../../../data/category-index.json"

// The directory page for the taxonomy list pages. For products & ingredients it
// renders a lean grid of category CARDS that each link OUT to a generated
// category section page (wiki/<vertical>/categories/<slug>.md). For metals it
// renders the two groups as a clean list. Every other folder falls through to the
// original FolderContent, so nothing else changes. Grouping comes from
// data/category-index.json (written by tools/build-category-pages.mjs).

type Member = { slug: string; title: string; symbol?: string; count?: number }
type Cat = { slug: string; label: string; count: number; samples?: string[]; members?: Member[] }
const INDEX = categoryIndex as unknown as Record<string, Cat[]>


// The marker-managed "Additional indexed pages" section (tools/autonomy/link-orphans.mjs)
// repeats, as a long bullet list, pages the designed directory already points to.
// Keep every link (some pages are reachable only from here) but show them as one
// compact, collapsed "Other pages" list after the directory instead of a second index.
const isH2 = (n: ElementContent | undefined, id: string) =>
  n?.type === "element" &&
  n.tagName === "h2" &&
  (n.properties as Record<string, unknown> | undefined)?.id === id
function splitExtraPages(root: Root): { main: Root; extra: ElementContent[] } {
  const kids = (root.children ?? []) as ElementContent[]
  const start = kids.findIndex((n) => isH2(n, "additional-indexed-pages"))
  if (start < 0) return { main: root, extra: [] }
  let end = kids.length
  for (let i = start + 1; i < kids.length; i++) {
    const n = kids[i]
    if (n.type === "element" && n.tagName === "h2") { end = i; break }
  }
  const section = kids.slice(start + 1, end)
  const lists = section.filter((n) => n.type === "element" && (n.tagName === "ul" || n.tagName === "ol"))
  return { main: { ...root, children: [...kids.slice(0, start), ...kids.slice(end)] } as Root, extra: lists }
}
const countLinks = (nodes: ElementContent[]): number => {
  let n = 0
  const walk = (x: any) => { if (x?.type === "element" && x.tagName === "li") n++; (x?.children ?? []).forEach(walk) }
  nodes.forEach(walk)
  return n
}

export default ((opts?: { sort?: SortFn }) => {
  const FolderContent = FolderContentConstructor({ sort: opts?.sort })

  const CategoryDirectory: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData } = props
    const slug = (fileData.slug ?? "") as FullSlug
    const vertical = String(slug).split("/")[0]
    const cats = INDEX[vertical]
    // Only the TOP vertical index becomes a directory; sub-folders like
    // products/categories/index and every other folder keep the normal listing.
    const isTopIndex = String(slug) === `${vertical}/index`

    // Content-only folder indexes: the page's own markdown already organizes its
    // subpages (e.g. the synthesis findings table), so render the page content and
    // suppress FolderContent's redundant auto-listing that otherwise dumps every
    // subpage beneath the last section with no heading.
    const CONTENT_ONLY = new Set(["synthesis", "regulations"])
    const { main: mainTree, extra } = splitExtraPages(tree as Root)
    const extraLabel = vertical === "products" ? "Other product pages" : `Other ${vertical} pages`
    const extraPages =
      isTopIndex && extra.length > 0 ? (
        <details class="hmi-extra-pages">
          <summary>
            {extraLabel} ({countLinks(extra)})
          </summary>
          {htmlToJsx(fileData.filePath!, { type: "root", children: extra } as Root)}
        </details>
      ) : null
    if (isTopIndex && CONTENT_ONLY.has(vertical)) {
      const mk = (mainTree.children ?? []) as ElementContent[]
      const hi = mk.findIndex((n) => isH2(n, "update-history"))
      const before = { ...mainTree, children: hi >= 0 ? mk.slice(0, hi) : mk } as Root
      const after = hi >= 0 ? ({ ...mainTree, children: mk.slice(hi) } as Root) : null
      return (
        <div class="popover-hint">
          {htmlToJsx(fileData.filePath!, before)}
          {extraPages}
          {after && htmlToJsx(fileData.filePath!, after)}
        </div>
      )
    }

    if (!Array.isArray(cats) || cats.length === 0 || !isTopIndex) {
      return <FolderContent {...props} />
    }

    // The page body carries the prose sections (Overview, "Full index" lead-in,
    // …) and a generated "## Update history" block at the very end. The appended
    // directory — metal groups or category cards — belongs UNDER the "Full
    // index" heading, so it must render BEFORE Update history, not after the
    // whole article (which stranded the heading with nothing under it and left
    // two grids floating past the changelog). Split the tree at the Update
    // history H2, render the body, then the directory, then Update history last.
    const root = mainTree
    const kids = (root.children ?? []) as ElementContent[]
    const histIdx = kids.findIndex(
      (n) =>
        n.type === "element" &&
        n.tagName === "h2" &&
        typeof (n.properties as Record<string, unknown> | undefined)?.id === "string" &&
        (n.properties as Record<string, unknown>).id === "update-history",
    )
    const bodyTree = { ...root, children: histIdx >= 0 ? kids.slice(0, histIdx) : kids } as Root
    const histTree =
      histIdx >= 0 ? ({ ...root, children: kids.slice(histIdx) } as Root) : null
    const renderTree = (t: Root): ComponentChildren =>
      (t.children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, t)) as ComponentChildren

    const directory =
      vertical === "metals" ? (
        // v3 "Full index": grouped grid-of-records — core toxic metals (4-col,
        // with source counts) then also-tracked stubs (5-col, no count).
        cats.map((g) => {
          const isCore = /core/i.test(g.label)
          return (
            <section class={`mx-index${isCore ? "" : " mx-index--also"}`}>
              <div class="mx-group-head">
                <span class="mx-group-label">{g.label}</span>
                <span class="mx-group-count">
                  {g.count} {isCore ? "pages" : "stubs"}
                </span>
              </div>
              <div class={`mx-grid ${isCore ? "mx-grid-4" : "mx-grid-5"}`}>
                {(g.members ?? []).map((m) => (
                  <a class="mx-cell" href={resolveRelative(slug, m.slug as SimpleSlug)}>
                    <span class="mx-cell-sym">{m.symbol}</span>
                    <span class="mx-cell-name">{m.title}</span>
                    {isCore && m.count ? (
                      <span class="mx-cell-count">{m.count.toLocaleString()}</span>
                    ) : null}
                  </a>
                ))}
              </div>
            </section>
          )
        })
      ) : (
        // products / ingredients: a grid of cards linking to the category pages.
        <div class="cat-dir">
          {cats.map((g) => (
            <a
              class="cat-dir-card"
              href={resolveRelative(slug, `${vertical}/categories/${g.slug}` as SimpleSlug)}
            >
              <span class="cat-dir-head">
                <span class="cat-dir-name">{g.label}</span>
                <span class="cat-dir-count">{g.count}</span>
              </span>
              <ul class="cat-dir-samples">
                {(g.samples ?? []).map((s) => (
                  <li>{s}</li>
                ))}
              </ul>
              <span class="cat-dir-more">See all {g.count} →</span>
            </a>
          ))}
        </div>
      )

    return (
      <div class="popover-hint">
        <article>{renderTree(bodyTree)}</article>
        {vertical !== "metals" && (
          <p class="category-navigation">
            <a class="internal" href={resolveRelative(slug, `${vertical}/categories/index` as FullSlug)}>
              Browse all {vertical === "sources" ? "source regions" : `${vertical} categories`}
            </a>
          </p>
        )}
        {directory}
        {extraPages}
        {histTree && <article>{renderTree(histTree)}</article>}
      </div>
    )
  }

  CategoryDirectory.css = concatenateResources(style, PageList.css)
  return CategoryDirectory
}) satisfies QuartzComponentConstructor
