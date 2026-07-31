import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

const footerSections = [
  {
    title: "Explore",
    links: [
      ["Products", "/products"],
      ["Ingredients", "/ingredients"],
      ["Metals", "/metals"],
      ["Regulations", "/regulations"],
      ["Sources", "/sources"],
    ],
  },
  {
    title: "Evidence",
    links: [
      ["Trust Center", "/trust"],
      ["Coverage (PRISMA)", "/coverage"],
      ["Audit dashboard", "/audits"],
      ["Methodology", "/methodology"],
      ["Editorial Standards", "/editorial-standards"],
      ["Testing", "/testing"],
      ["Update History", "/log"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Foundation",
    links: [
      ["About", "/about"],
      ["Paleo Foundation", "https://paleofoundation.com"],
      ["WikiBiome", "https://wikibiome.com"],
      ["Heavy Metal Tested", "https://heavymetaltested.com"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Notice", "/privacy"],
      ["Terms", "/terms"],
      ["Licensing", "/licensing"],
      // /staff is a middleware 302 to /staff/login for anyone without a session
      // (middleware.ts), so link the destination directly and skip the hop.
      ["Staff", "/staff/login"],
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
            <button type="button" class="site-footer-ask" data-ask-index-trigger>
              Ask the Index
            </button>
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
