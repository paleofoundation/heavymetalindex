import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

// Columns and labels from "Heavy Metal Index v3.dc.html" footerCols (line 2389).
// Every href is checked to resolve: v3 lists a few surfaces that have no page in
// this build ("Structured exports", "Regulatory diff alerts", "Governance"), and
// those are pointed at the nearest real page rather than shipped as 404s.
//
// Two corrections to the artifact, both per the settled naming rule: v3's
// "Institute of Contamination Standards" is the wrong form, and its bottom bar
// puts copyright on the Institute where the corporation holds it.
const footerSections = [
  {
    title: "Explore",
    links: [
      ["Products", "/products"],
      ["Ingredients", "/ingredients"],
      ["Metals", "/metals"],
      ["Regulations", "/regulations"],
      ["Sources", "/sources"],
      ["Synthesis findings", "/synthesis"],
    ],
  },
  {
    title: "Evidence",
    links: [
      ["Trust center", "/trust"],
      ["Coverage (PRISMA)", "/coverage"],
      ["Audit dashboard", "/audits"],
      ["Methodology", "/methodology"],
      ["Editorial standards", "/editorial-standards"],
      ["Update history", "/log"],
    ],
  },
  {
    title: "Professional",
    links: [
      ["Structured exports", "/licensing"],
      ["Regulatory diff alerts", "/log"],
      ["Licensing and reuse", "/licensing"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Institute",
    links: [
      ["About", "/about"],
      ["Editorial standards", "/editorial-standards"],
      ["Errata and revisions", "/errata"],
      ["Heavy Metal Tested", "https://heavymetaltested.com"],
      ["Privacy notice", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
]

export default (() => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer id="site-footer" class={`site-footer ${displayClass ?? ""}`}>
        <div class="site-footer-inner">
          <section class="site-footer-brand" aria-label="Heavy Metal Index">
            <a class="site-footer-logo" href="/">
              Heavy Metal Index
            </a>
            <p>
              Public evidence index for heavy metals in foods, ingredients, regulations, and
              source literature.
            </p>
            {/* Was a `data-ask-index-trigger` button, which askIndex.inline.ts
                forwards to `.ask-index-button` — a control the AskIndex
                component would render, except AskIndex is not in any layout. It
                had been a no-op. /ask is the working surface. */}
            <a class="site-footer-ask" href="/ask">
              Ask the Index
            </a>
          </section>
          <nav class="site-footer-nav" aria-label="Footer">
            {footerSections.map((section) => (
              <section class="site-footer-column">
                <h2>{section.title}</h2>
                <ul>
                  {section.links.map(([text, link]) => {
                    const isExternal = /^https?:\/\//.test(link)
                    return (
                      <li>
                        <a
                          href={link}
                          {...(isExternal
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                class: "site-footer-external",
                              }
                            : {})}
                        >
                          {text}
                          {isExternal && (
                            <svg
                              class="site-footer-external-icon"
                              aria-hidden="true"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          )}
                          {isExternal && <span class="sr-only"> (opens in a new tab)</span>}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
          </nav>
        </div>
        <div class="site-footer-bottom">
          {/*
            Operator attribution, moved here from the TopNav masthead sub-line
            (2026-07-27). This is the one-way operator statement per CLAUDE.md
            Part 1/Part 2: attribution for who runs the Index, NOT an HMT&C
            endorsement, and it names no certified brand. The footer is where a
            reader looks for provenance; the masthead is for navigation.
          */}
          <p class="site-footer-operator">
            Operated by the Institute of Contaminant Standards.
          </p>
          <p>© {year} Paleo Certified, Inc. Heavy Metal Index is a public reference project.</p>
          <p>Reference only. Not medical, legal, regulatory, or product-certification advice.</p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
