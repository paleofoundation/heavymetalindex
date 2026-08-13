import * as React from "react"

// Site footer. Source of truth: quartz/components/Footer.tsx + styles/footer.scss.
// The default columns, operator line, and copyright are the live site's real
// content. Entity naming is load-bearing (CLAUDE.md Part 14): the operator is
// the "Institute of Contaminant Standards"; the copyright holder is "Paleo
// Certified, Inc." Do not rename either — they are different legal roles.

export interface FooterLink {
  label: string
  href: string
  /** Renders the external-link icon + opens in a new tab. */
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  brandName?: string
  blurb?: string
  askHref?: string
  /** Navigation columns. Defaults to the live site's four columns. */
  sections?: FooterSection[]
  /** Operator attribution (provenance, not an HMT&C endorsement). */
  operator?: string
  copyright?: string
  disclaimer?: string
}

const DEFAULT_SECTIONS: FooterSection[] = [
  {
    title: "Explore",
    links: [
      { label: "Products", href: "#/products" },
      { label: "Ingredients", href: "#/ingredients" },
      { label: "Metals", href: "#/metals" },
      { label: "Regulations", href: "#/regulations" },
      { label: "Sources", href: "#/sources" },
      { label: "Synthesis findings", href: "#/synthesis" },
    ],
  },
  {
    title: "Evidence",
    links: [
      { label: "Trust center", href: "#/trust" },
      { label: "Coverage (PRISMA)", href: "#/coverage" },
      { label: "Audit dashboard", href: "#/audits" },
      { label: "Methodology", href: "#/methodology" },
      { label: "Editorial standards", href: "#/editorial-standards" },
      { label: "Update history", href: "#/log" },
    ],
  },
  {
    title: "Professional",
    links: [
      { label: "Structured exports", href: "#/licensing" },
      { label: "Regulatory diff alerts", href: "#/log" },
      { label: "Licensing and reuse", href: "#/licensing" },
      { label: "Contact", href: "#/contact" },
    ],
  },
  {
    title: "Institute",
    links: [
      { label: "About", href: "#/about" },
      { label: "Editorial standards", href: "#/editorial-standards" },
      { label: "Errata and revisions", href: "#/errata" },
      { label: "Heavy Metal Tested", href: "https://heavymetalcertified.com", external: true },
      { label: "Privacy notice", href: "#/privacy" },
      { label: "Terms", href: "#/terms" },
    ],
  },
]

export function Footer({
  brandName = "Heavy Metal Index",
  blurb = "Public evidence index for heavy metals in foods, ingredients, regulations, and source literature.",
  askHref = "#/ask",
  sections = DEFAULT_SECTIONS,
  operator = "Operated by the Institute of Contaminant Standards.",
  copyright = "© 2026 Paleo Certified, Inc. Heavy Metal Index is a public reference project.",
  disclaimer = "Reference only. Not medical, legal, regulatory, or product-certification advice.",
}: FooterProps) {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="site-footer-inner">
        <section className="site-footer-brand" aria-label={brandName}>
          <a className="site-footer-logo" href="#/">
            {brandName}
          </a>
          <p>{blurb}</p>
          <a className="site-footer-ask" href={askHref}>
            Ask the Index
          </a>
        </section>
        <nav className="site-footer-nav" aria-label="Footer">
          {sections.map((section, i) => (
            <section className="site-footer-column" key={i}>
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "site-footer-external",
                          }
                        : {})}
                    >
                      {link.label}
                      {link.external ? (
                        <svg
                          className="site-footer-external-icon"
                          aria-hidden="true"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
      <div className="site-footer-bottom">
        <p className="site-footer-operator">{operator}</p>
        <p>{copyright}</p>
        <p>{disclaimer}</p>
      </div>
    </footer>
  )
}
