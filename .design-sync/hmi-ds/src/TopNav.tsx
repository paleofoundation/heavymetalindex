import * as React from "react"

// Global top navigation — the full-width white sticky bar. Source of truth:
// quartz/components/TopNav.tsx (+ MegaMenu.tsx) and styles/topNav.scss. On the
// live site renderPage wraps the bar in <header class="hmi-topnav-shell">; this
// component includes that shell so the sticky/border styling applies standalone.
//
// The five mega-menu triggers (Metals, Foods, Products, Regulations, Evidence)
// render as the visible bar; their disclosure panels are visibility-hidden at
// rest, so the resting bar is the faithful static view. CHROME-SPEC §1: the
// active affordance is the 2px bottom border on the active trigger — no chevron.

export interface TopNavTrigger {
  label: string
  href?: string
  /** Panel key (data-panel); used for the mega-menu association. */
  key?: string
  /** Renders the active bottom-border affordance. */
  active?: boolean
}

export interface TopNavAction {
  label: string
  href?: string
}

export interface TopNavProps {
  wordmark?: string
  /** The five mega-menu triggers. */
  triggers?: TopNavTrigger[]
  searchLabel?: string
  askLabel?: string
  askHref?: string
  /** Secondary text links (e.g. About). */
  utilityLinks?: TopNavAction[]
  loginLabel?: string
  loginHref?: string
  /** The single filled action. */
  proLabel?: string
  proHref?: string
}

const DEFAULT_TRIGGERS: TopNavTrigger[] = [
  { label: "Metals", href: "#/metals", key: "metals" },
  { label: "Foods", href: "#/ingredients", key: "ingredients" },
  { label: "Products", href: "#/products", key: "products" },
  { label: "Regulations", href: "#/regulations", key: "regulations" },
  { label: "Evidence", href: "#/evidence", key: "evidence" },
]

export function TopNav({
  wordmark = "Heavy Metal Index",
  triggers = DEFAULT_TRIGGERS,
  searchLabel = "Search the index",
  askLabel = "Ask the Index",
  askHref = "#/ask",
  utilityLinks = [{ label: "About", href: "#/about" }],
  loginLabel = "Log in",
  loginHref = "#/login",
  proLabel = "Index Pro",
  proHref = "#",
}: TopNavProps) {
  return (
    <header className="hmi-topnav-shell">
      <div className="hmi-topnav">
        <div className="hmi-topnav-inner">
          <a className="hmi-topnav-brand" href="#/" aria-label={`${wordmark} — home`}>
            <span className="hmi-topnav-wordmark">{wordmark}</span>
          </a>

          <button
            type="button"
            className="hmi-topnav-burger"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="hmi-topnav-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <nav id="hmi-topnav-menu" className="hmi-topnav-menu hmi-nav" aria-label="Primary">
            <ul className="hmi-nav-list">
              {triggers.map((t, i) => (
                <li className="hmi-nav-item" data-panel={t.key} key={i}>
                  <a
                    className={t.active ? "hmi-nav-top active" : "hmi-nav-top"}
                    href={t.href}
                    aria-current={t.active ? "page" : undefined}
                  >
                    {t.label}
                  </a>
                  <button
                    type="button"
                    className="hmi-nav-toggle"
                    aria-expanded="false"
                    aria-controls={`hmi-panel-${t.key}`}
                  >
                    <span className="hmi-sr-only">{`Show ${t.label} menu`}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hmi-topnav-spacer" aria-hidden="true"></div>

          <div className="hmi-topnav-actions">
            <div className="search hmi-topnav-search" role="search">
              <button className="search-button" type="button" aria-label={searchLabel}>
                <span className="hmi-topnav-glyph" aria-hidden="true">
                  ⌕
                </span>
                <p>{searchLabel}</p>
                <span className="hmi-topnav-kbd" aria-hidden="true">
                  /
                </span>
              </button>
            </div>
            <a className="hmi-topnav-ask" href={askHref}>
              {askLabel}
            </a>
            {utilityLinks.map((link, i) => (
              <a className="hmi-topnav-utility" href={link.href} key={i}>
                {link.label}
              </a>
            ))}
            <a className="hmi-topnav-login" href={loginHref}>
              {loginLabel}
            </a>
            {proLabel ? (
              <a className="hmi-topnav-pro" href={proHref} rel="noopener">
                {proLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
