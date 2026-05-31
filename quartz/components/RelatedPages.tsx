import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/relatedPages.scss"

// "See also" block at the foot of reference pages. Surfaces the cross-
// references already declared in frontmatter (products, ingredients,
// regulations the page touches) as navigable links, which keeps readers
// moving through the corpus instead of bouncing and strengthens the internal
// link graph for search/AI crawlers. Renders nothing when no cross-references
// are declared.

function asString(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined
  const s = String(value).trim()
  return s && s.toLowerCase() !== "null" ? s : undefined
}

function asList(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap((v) => (asString(v) ? [asString(v)!] : []))
  const s = asString(value)
  return s ? [s] : []
}

function parseWikilink(raw: string): { href: string; label: string } | null {
  const m = raw.match(/^\[\[([^\]]+)\]\]$/)
  const inner = m ? m[1] : raw
  const [target, alias] = inner.split("|")
  const path = target.trim().replace(/^\/+/, "")
  // Only link to internal reference paths, not bare strings.
  if (!path || !path.includes("/")) return null
  const label = (alias ?? path.split("/").pop() ?? path).trim().replace(/-/g, " ")
  return { href: `/${path}`, label }
}

const GROUPS: { key: string; label: string }[] = [
  { key: "products", label: "Products" },
  { key: "ingredients", label: "Ingredients" },
  { key: "regulations", label: "Regulations" },
]

export default (() => {
  const RelatedPages: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const fm = fileData.frontmatter as Record<string, unknown> | undefined
    if (!fm) return null

    const groups = GROUPS.map((g) => {
      const seen = new Set<string>()
      const links = asList(fm[g.key])
        .map(parseWikilink)
        .filter((x): x is { href: string; label: string } => x !== null)
        .filter((x) => (seen.has(x.href) ? false : (seen.add(x.href), true)))
        .slice(0, 10)
      return { ...g, links }
    }).filter((g) => g.links.length > 0)

    if (groups.length === 0) return null

    return (
      <nav class="hmi-related" aria-label="See also">
        <h2 class="hmi-related-title">See also</h2>
        <div class="hmi-related-grid">
          {groups.map((g) => (
            <div class="hmi-related-group">
              <span class="hmi-related-group-label">{g.label}</span>
              <ul>
                {g.links.map((l) => (
                  <li>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    )
  }

  RelatedPages.css = style
  return RelatedPages
}) satisfies QuartzComponentConstructor
