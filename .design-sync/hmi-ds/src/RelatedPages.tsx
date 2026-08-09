import * as React from "react"

// RelatedPages — the in-body "See also" band of lateral links.
//
// Source of truth: quartz/components/RelatedPages.tsx +
// quartz/components/styles/relatedPages.scss (the concept graph: pages this one
// links to, plus pages that link to it, minus sources). The Quartz component
// derives the links from the build's link graph (fileData/allFiles); this
// wrapper takes the already-resolved links as a prop.
//
// MARKUP NOTE: the v3 redesign flattened this band. The shipping stylesheet
// (public/index.css, from quartz/styles/proof-design.scss) styles
// `nav.hmi-related > .hmi-related-title + ul > li > a` as a single wrap-flowed
// list of links. The pre-v3 grid/group/"+ N more" classes
// (hmi-related-grid, hmi-related-group, hmi-related-group-label,
// hmi-related-more) are legacy and are NOT in the shipping sheet, so this
// wrapper emits the flat v3 structure the real CSS actually styles. The root
// `.hmi-related` and `.hmi-related-title` classes are unchanged.

export interface RelatedLink {
  /** Destination href. */
  href: string
  /** Link text — the related page's title, e.g. "Cadmium (Cd)". */
  label: string
}

export interface RelatedPagesProps {
  /** Section heading, also used as the nav's accessible name. */
  title?: string
  /**
   * The related pages, in the order to render them. The live graph sorts these
   * alphabetically (a browse aid); the wrapper renders whatever order it is given.
   */
  links?: RelatedLink[]
}

// A realistic default: the lateral neighbours of a metal page (here Lead),
// spanning other metals, ingredients, a product and two regulations.
const DEFAULT_LINKS: RelatedLink[] = [
  { href: "#/metals/cadmium", label: "Cadmium (Cd)" },
  { href: "#/metals/inorganic-arsenic", label: "Inorganic arsenic (iAs)" },
  { href: "#/metals/total-mercury", label: "Total mercury (tHg)" },
  { href: "#/ingredients/rice-flour", label: "Rice flour" },
  { href: "#/ingredients/cocoa", label: "Cocoa" },
  { href: "#/products/infant-formula", label: "Infant formula" },
  { href: "#/regulations/eu-2023-915", label: "EU 2023/915" },
]

export function RelatedPages({ title = "See also", links = DEFAULT_LINKS }: RelatedPagesProps) {
  return (
    <nav className="hmi-related" aria-label={title}>
      <h2 className="hmi-related-title">{title}</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
