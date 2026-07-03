import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/listPage.scss"
import { PageList, SortFn } from "../PageList"
import { Root } from "hast"
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

type Member = { slug: string; title: string; symbol?: string }
type Cat = { slug: string; label: string; count: number; samples?: string[]; members?: Member[] }
const INDEX = categoryIndex as unknown as Record<string, Cat[]>

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

    if (!Array.isArray(cats) || cats.length === 0 || !isTopIndex) {
      return <FolderContent {...props} />
    }

    // Overview = the full page content (a prose "## Overview" section with
    // internal links). The card grid / metal list is appended below it. The page
    // body carries only the Overview, so its single H2 keeps the left section-nav
    // minimal (Overview + the apparatus links) instead of dumping every heading.
    const root = tree as Root
    const intro = (
      root.children.length === 0 ? fileData.description : htmlToJsx(fileData.filePath!, root)
    ) as ComponentChildren

    if (vertical === "metals") {
      // Small enough for no sub-pages: two grouped columns of metal tiles.
      return (
        <div class="popover-hint">
          <article>{intro}</article>
          {cats.map((g) => (
            <section class="cat-sec">
              <h2 class="cat-sec-title">{g.label}</h2>
              <ul class="cat-sec-list">
                {(g.members ?? []).map((m) => (
                  <li>
                    <a class="internal" href={resolveRelative(slug, m.slug as SimpleSlug)}>
                      {m.symbol ? <span class="cat-sym">{m.symbol}</span> : null}
                      {m.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )
    }

    // products / ingredients: a grid of cards linking to the category pages.
    return (
      <div class="popover-hint">
        <article>{intro}</article>
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
      </div>
    )
  }

  CategoryDirectory.css = concatenateResources(style, PageList.css)
  return CategoryDirectory
}) satisfies QuartzComponentConstructor
