import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/listPage.scss"
import { PageList, SortFn } from "../PageList"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { QuartzPluginData } from "../../plugins/vfile"
import { ComponentChildren } from "preact"
import { concatenateResources } from "../../util/resources"
import { trieFromAllFiles } from "../../util/ctx"
import { resolveRelative, FullSlug, SimpleSlug } from "../../util/path"

// Examine-style category directory for the taxonomy list pages (Products,
// Ingredients, Metals). Reuses FolderContent's page-gathering (trie over the
// folder's children) but groups the pages into category CARDS instead of one
// flat list. Folders whose pages have no resolvable grouping fall back to the
// plain PageList, so this is safe as the shared folder-page body.

// Ingredient fine-category -> broad food group. The `category` frontmatter is
// granular/noisy (grain vs grain-product, many placeholders), so roll up.
const ING_GROUP: Record<string, string> = {
  fruit: "Fruits", "fruit-product": "Fruits", "vegetable-fruit": "Fruits",
  vegetable: "Vegetables", "root-vegetable": "Vegetables", "leafy-vegetable": "Vegetables",
  "leafy-green": "Vegetables", "vegetable-preparation": "Vegetables", "vegetable-grain": "Vegetables",
  fungi: "Vegetables",
  grain: "Grains & cereals", "grain-product": "Grains & cereals", "breakfast-cereal": "Grains & cereals",
  legume: "Legumes & pulses", "legume-composite": "Legumes & pulses",
  nut: "Nuts & seeds", "nut-seed": "Nuts & seeds", seed: "Nuts & seeds",
  oil: "Oils & fats", "fat-oil": "Oils & fats",
  "herb-spice": "Herbs, spices & botanicals", botanical: "Herbs, spices & botanicals",
  meat: "Meat & poultry", "animal-food": "Meat & poultry",
  seafood: "Fish & seafood", "seafood-composite": "Fish & seafood", "aquatic-protein": "Fish & seafood",
  dairy: "Dairy & eggs",
  "beverage-ingredient": "Beverages & water", "juice-composite": "Beverages & water",
  water: "Beverages & water", vinegar: "Beverages & water",
  sweetener: "Sweeteners & condiments", condiment: "Sweeteners & condiments",
  "mixed-food": "Prepared & composite foods", soup: "Prepared & composite foods",
  dessert: "Prepared & composite foods",
}
const ING_ORDER = [
  "Fruits", "Vegetables", "Grains & cereals", "Legumes & pulses", "Nuts & seeds", "Oils & fats",
  "Herbs, spices & botanicals", "Meat & poultry", "Fish & seafood", "Dairy & eggs",
  "Beverages & water", "Sweeteners & condiments", "Prepared & composite foods", "Other",
]
const HMTC = new Set(["Pb", "As", "iAs", "tAs", "Cd", "Hg", "tHg", "MeHg", "Ni", "Al", "Cr", "Cr-VI", "Sn"])

type Group = { key: string; label: string; order: number }
function groupOf(page: QuartzPluginData): Group | null {
  const fm = (page.frontmatter ?? {}) as Record<string, unknown>
  const type = fm.type
  if (type === "product-category") {
    const l = (typeof fm.category_label === "string" && fm.category_label) || "Other products"
    const row = typeof fm.hmtc_category === "number" ? fm.hmtc_category : 99
    return { key: l, label: l, order: row }
  }
  if (type === "ingredient") {
    const g = ING_GROUP[String(fm.category ?? "").toLowerCase()] ?? "Other"
    return { key: g, label: g, order: ING_ORDER.indexOf(g) < 0 ? 99 : ING_ORDER.indexOf(g) }
  }
  if (type === "metal") {
    const pri = HMTC.has(String(fm.symbol ?? ""))
    return pri
      ? { key: "hmtc", label: "HMTc priority analytes", order: 0 }
      : { key: "other", label: "Other metals tracked", order: 1 }
  }
  return null
}

const VISIBLE = 12 // members shown before "show all"

export default ((opts?: { sort?: SortFn }) => {
  const CategoryContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles } = props
    const trie = (props.ctx.trie ??= trieFromAllFiles(allFiles))
    const folder = trie.findNode(fileData.slug!.split("/"))
    if (!folder) return null

    const pages: QuartzPluginData[] = folder.children
      .map((n) => n.data)
      .filter((d): d is QuartzPluginData => !!d && !String(d.slug).endsWith("/index"))

    // Bucket by group; bail to the flat list if nothing groups.
    const buckets = new Map<string, { g: Group; items: QuartzPluginData[] }>()
    for (const p of pages) {
      const g = groupOf(p)
      if (!g) continue
      const b = buckets.get(g.key) ?? { g, items: [] }
      b.items.push(p)
      buckets.set(g.key, b)
    }

    const root = tree as Root
    const mk = (t: Root) =>
      (t.children.length === 0 ? fileData.description : htmlToJsx(fileData.filePath!, t)) as ComponentChildren

    if (buckets.size === 0) {
      // uncategorized folder -> original behavior (full content + flat list)
      const listProps = { ...props, sort: opts?.sort, allFiles: pages }
      return (
        <div class="popover-hint">
          <article>{mk(root)}</article>
          <div class="page-listing">
            <PageList {...listProps} />
          </div>
        </div>
      )
    }

    const here = fileData.slug! as FullSlug
    const groups = [...buckets.values()].sort((a, b) => a.g.order - b.g.order || a.g.label.localeCompare(b.g.label))
    // Keep only the intro (content before the first H2); the single-column
    // category list that follows is superseded by the grid below.
    const cut = root.children.findIndex((n) => (n as any).type === "element" && (n as any).tagName === "h2")
    const introTree = { ...root, children: cut >= 0 ? root.children.slice(0, cut) : root.children } as Root

    return (
      <div class="popover-hint">
        <article>{mk(introTree)}</article>
        <div class="cat-grid">
          {groups.map(({ g, items }) => {
            const sorted = items.sort((a, b) =>
              String(a.frontmatter?.title ?? a.slug).localeCompare(String(b.frontmatter?.title ?? b.slug)),
            )
            const head = sorted.slice(0, VISIBLE)
            const rest = sorted.slice(VISIBLE)
            const link = (p: QuartzPluginData) => {
              const sym = p.frontmatter?.type === "metal" ? String(p.frontmatter?.symbol ?? "") : ""
              return (
                <li class="cat-item">
                  <a class="internal" href={resolveRelative(here, p.slug as SimpleSlug)}>
                    {sym ? <span class="cat-sym">{sym}</span> : null}
                    {String(p.frontmatter?.title ?? p.slug)}
                  </a>
                </li>
              )
            }
            return (
              <section class="cat-card">
                <h3 class="cat-title">{g.label}</h3>
                <ul class="cat-list">{head.map(link)}</ul>
                {rest.length > 0 ? (
                  <details class="cat-more">
                    <summary>Show all {sorted.length} →</summary>
                    <ul class="cat-list">{rest.map(link)}</ul>
                  </details>
                ) : null}
              </section>
            )
          })}
        </div>
      </div>
    )
  }

  CategoryContent.css = concatenateResources(style, PageList.css)
  return CategoryContent
}) satisfies QuartzComponentConstructor
