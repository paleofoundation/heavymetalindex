import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot, resolveRelative, type SimpleSlug, type FullSlug } from "../util/path"
import { i18n } from "../i18n"
import { utilityLinks } from "./topNavLinks"
import { MegaMenu } from "./MegaMenu"
import style from "./styles/topNav.scss"
// @ts-ignore — inline script, resolved by Quartz's esbuild loader
import script from "./scripts/topNav.inline"
// @ts-ignore — homepage hero search (?q= handling + example-query chips)
import homeSearchScript from "./scripts/homeSearch.inline"

// Global, full-width, white sticky top bar. Rendered ONCE per page as the
// shared `header` (quartz.layout.ts `sharedPageComponents.header = [TopNav()]`)
// and lifted OUT of `#quartz-body` into a full-bleed <header> element by
// renderPage.tsx, so it spans the viewport rather than the centered grid.
//
// Contents, left → right:
//   1. Wordmark: "Heavy Metal Index" + an "Operated by the Institute of
//      Contaminant Standards" sub-line (the one-way operator attribution; the
//      wiki remains the independent reference per CLAUDE.md Part 1/Part 2 — this
//      is attribution, not an HMT&C endorsement, and names no certified brand).
//   2. Taxonomy links (Metals first) + utility links (About).
//   3. Interactive controls: Search (existing modal component) and a compact
//      "Ask the Index" launcher.
//
// All hrefs resolve relative to the current page so the bar is correct at any
// directory depth. Active state is computed server-side from the current slug.


export interface TopNavOptions {
  /** Override the operator sub-line if the attribution wording changes. */
  operatorLine?: string
}

const defaultOptions: TopNavOptions = {
  operatorLine: "Operated by the Institute of Contaminant Standards",
}

export default ((userOpts?: Partial<TopNavOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const TopNav: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, cfg, displayClass } = props
    const slug = (fileData.slug ?? "index") as FullSlug
    const baseDir = pathToRoot(slug)
    const wordmark = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title


    return (
      <div class={classNames(displayClass, "hmi-topnav")}>
        <div class="hmi-topnav-inner">
          <a class="hmi-topnav-brand" href={baseDir} aria-label={`${wordmark} — home`}>
            <span class="hmi-topnav-wordmark">{wordmark}</span>
            <span class="hmi-topnav-operator">{opts.operatorLine}</span>
          </a>

          <button
            type="button"
            class="hmi-topnav-burger"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <nav id="hmi-topnav-menu" class="hmi-topnav-menu hmi-nav" aria-label="Primary">
            <MegaMenu slug={slug} />
            <div class="hmi-topnav-controls">
              <a class="hmi-topnav-ask" href={resolveRelative(slug, "ask" as SimpleSlug)}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  <path d="M8 9h8" />
                  <path d="M8 13h5" />
                </svg>
                <span>Ask the Index</span>
              </a>
              {utilityLinks.map((link) => (
                <a class="hmi-topnav-utility" href={resolveRelative(slug, link.slug as SimpleSlug)}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    )
  }

  TopNav.css = style
  // TopNav is the one component on every page, so it carries the homepage hero
  // search wiring too; the script no-ops off the index slug.
  TopNav.afterDOMLoaded = `${script}\n${homeSearchScript}`
  return TopNav
}) satisfies QuartzComponentConstructor<TopNavOptions>
