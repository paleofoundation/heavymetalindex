import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/relatedPages.scss"
import { resolveRelative } from "../util/path"
import { GROUPS, relatedByCategory } from "./relatedGraph"

// "See also" — the bidirectional concept graph for a page.
//
// Audit finding: the corpus links "upward" richly (a page cites its sources
// and names its metal/regulation) but barely "laterally/downward" — only 10%
// of metal pages linked to any ingredient and 5% to any product, even though
// dozens of ingredient/product pages point AT each metal. Metal pages, the
// most-referenced hubs, were navigational dead-ends.
//
// This surfaces BOTH directions of the graph (pages this one links to, AND
// pages that link to this one), grouped by concept type, so every page
// becomes traversable in both directions. It is computed from the build's
// link graph — no hand-maintained "related" lists — which keeps it correct as
// the corpus grows (the routing/linking layer is a system responsibility,
// CLAUDE.md Part 5b). Sources are excluded: they are the evidence (surfaced
// via inline citations + the citation card), not lateral navigation.

// See-also is kept (it is the only page-specific INBOUND-graph affordance), but
// scoped: on hub pages like metals/lead the 18-cap rendered ~60 links, a wall.
// Cap at 6 per group so the block stays a curated lateral-nav, not a dump. The
// Rail's Connections (cap 3) and this block share the relatedByCategory graph.
const PER_GROUP_CAP = 6

export default (() => {
  const RelatedPages: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const mySlug = fileData.slug
    if (!mySlug) return null

    // Shared with the right rail's Connections block — see ./relatedGraph.
    const buckets = relatedByCategory({ fileData, allFiles })

    const groups = GROUPS.map((g) => {
      const items = buckets.get(g.key) ?? []
      const shown = items.slice(0, PER_GROUP_CAP)
      return { ...g, shown, overflow: items.length - shown.length, indexHref: `/${g.key}` }
    }).filter((g) => g.shown.length > 0)

    if (groups.length === 0) return null

    return (
      <nav class="hmi-related" aria-label="See also">
        <h2 class="hmi-related-title">See also</h2>
        <div class="hmi-related-grid">
          {groups.map((g) => (
            <div class="hmi-related-group">
              <span class="hmi-related-group-label">{g.label}</span>
              <ul>
                {g.shown.map((l) => (
                  <li>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
              {g.overflow > 0 ? (
                <a class="hmi-related-more" href={resolveRelative(mySlug, g.indexHref as never)}>
                  + {g.overflow} more {g.label.toLowerCase()} →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
    )
  }

  RelatedPages.css = style
  return RelatedPages
}) satisfies QuartzComponentConstructor
