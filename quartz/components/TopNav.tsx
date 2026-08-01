import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot, resolveRelative, type SimpleSlug, type FullSlug } from "../util/path"
import { i18n } from "../i18n"
import { utilityLinks } from "./topNavLinks"
import { MegaMenu } from "./MegaMenu"
import style from "./styles/topNav.scss"
// @ts-ignore — inline script, resolved by Quartz's esbuild loader
import script from "./scripts/topNav.inline"
import searchStyle from "./styles/search.scss"
// @ts-ignore — inline script, resolved by Quartz's esbuild loader
import searchScript from "./scripts/search.inline"
import askStyle from "./styles/askindex.scss"
// @ts-ignore — inline script, resolved by Quartz's esbuild loader
import askScript from "./scripts/askindex.inline"

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


// The reference plane's single outbound handoff to the member application.
// Set to null to remove it in one edit: the apex is not serving yet (404 as of
// 2026-07-31, see docs/findings.md F-13), so this must not reach production
// until the Pro app lands or this is nulled.
const INDEX_PRO_URL: string | null = "https://pro.contaminantstandards.com"

export interface TopNavOptions {}

export default ((_userOpts?: Partial<TopNavOptions>) => {
  const TopNav: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, cfg, displayClass } = props
    const slug = (fileData.slug ?? "index") as FullSlug
    const baseDir = pathToRoot(slug)
    const wordmark = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const searchPlaceholder = i18n(cfg.locale).components.search.searchBarPlaceholder


    return (
      <div class={classNames(displayClass, "hmi-topnav")}>
        <div class="hmi-topnav-inner">
          {/*
            The operator attribution used to sit here as a sub-line under the
            wordmark. It now lives in the footer's bottom bar (Footer.tsx): it is
            a provenance statement, not navigation, and putting it in the masthead
            gave a permanent second line of small print to every page while
            eating horizontal room in an already-dense bar.
          */}
          <a class="hmi-topnav-brand" href={baseDir} aria-label={`${wordmark} — home`}>
            <span class="hmi-topnav-wordmark">{wordmark}</span>
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
              {/*
                Quartz's Search markup, rendered inline in the bar. It is NOT a
                nested <Search/> component call: Quartz collects css/afterDOMLoaded
                by walking the layout arrays, so a nested component's resources
                would never be emitted. The DOM shape has to match search.inline.ts
                (`.search` > `.search-button` + `.search-container .search-bar`
                + `.search-layout`), which is what wires this up; the script
                iterates every `.search` element on the page, so the homepage
                hero's own search block is wired by the same bundle.
              */}
              <div class="search hmi-topnav-search" role="search">
                <button class="search-button" type="button" aria-label={searchPlaceholder}>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.9 19.7"
                    width="16"
                    height="16"
                  >
                    <g class="search-path" fill="none">
                      <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                      <circle cx="8" cy="8" r="7" />
                    </g>
                  </svg>
                  {/* v3's search box reads "Search the index" (artifact 55), not the
                      generic i18n search title. Scoped to the top bar rather than
                      changed in i18n, because `components.search.title` also labels
                      the search modal, where "Search" is correct. */}
                  <p>Search the index</p>
                  {/* v3 line 56: the "/" affordance sits inside the box, pushed
                      right by an auto margin. Hidden below 1150px, where the
                      whole box collapses to a 36px icon square. */}
                  <span class="hmi-topnav-kbd" aria-hidden="true">
                    /
                  </span>
                </button>
                <div class="search-container">
                  <div class="search-space">
                    <input
                      autocomplete="off"
                      class="search-bar"
                      name="search"
                      type="text"
                      aria-label={searchPlaceholder}
                      placeholder={searchPlaceholder}
                    />
                    <div class="search-layout" data-preview="true"></div>
                  </div>
                </div>
              </div>
              {/* v3 line 60: a plain 12.5px text link, not a filled pill. The
                  header carries exactly one filled control, Index Pro; a second
                  filled button competes with it. */}
              <a class="hmi-topnav-ask" href={resolveRelative(slug, "ask" as SimpleSlug)}>
                Ask the Index
              </a>
              {utilityLinks.map((link) => (
                <a class="hmi-topnav-utility" href={resolveRelative(slug, link.slug as SimpleSlug)}>
                  {link.label}
                </a>
              ))}
              {/* Account / log in. Placeholder for the future auth app (member
                  accounts live in the separate application, not the static wiki);
                  the icon points at the login route so it can light up later. */}
              {/* v3 line 61: "Log in" is a text link at the same weight as Ask,
                  not an avatar icon. */}
              <a class="hmi-topnav-login" href={resolveRelative(slug, "login" as SimpleSlug)}>
                Log in
              </a>
            </div>
          </nav>

          {/*
            Index Pro sits OUTSIDE .hmi-topnav-menu deliberately. In the v3
            design (line 63) it is the one right-hand control not wrapped in the
            wide-only block: search collapses to an icon and Ask / Log in are
            removed outright below 1150px, but Index Pro survives at every
            width. Inside the menu it would disappear into the burger drawer
            with everything else, which inverts that rule.
          */}
          {INDEX_PRO_URL && (
            <a class="hmi-topnav-pro" href={INDEX_PRO_URL} rel="noopener">
              Index Pro
            </a>
          )}
        </div>
      </div>
    )
  }

  // TopNav owns the site's two global interactive affordances, so it carries
  // their bundles. Quartz only emits css/afterDOMLoaded for components that
  // appear in a quartz.layout.ts slot; the standalone Search and AskIndex
  // components were dropped from the layout during the proof port, which
  // silently un-shipped search.inline.ts and askindex.inline.ts and left the
  // homepage search box and the /ask form with no handler at all.
  TopNav.css = [style, searchStyle, askStyle]
  TopNav.afterDOMLoaded = [script, searchScript, askScript]
  return TopNav
}) satisfies QuartzComponentConstructor<TopNavOptions>
