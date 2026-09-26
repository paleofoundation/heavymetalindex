import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot, resolveRelative, type SimpleSlug, type FullSlug } from "../util/path"
import { i18n } from "../i18n"
import { utilityLinks } from "./topNavLinks"
import { MegaMenu } from "./MegaMenu"
import { SearchField } from "./SearchField"
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
// Contents, left → right — CHROME-SPEC §1.1's child order:
//   1. Wordmark: "Heavy Metal Index" (the operator attribution moved to the
//      footer's bottom bar; the wiki remains the independent reference per
//      CLAUDE.md Part 1/Part 2 and names no certified brand).
//   2. Nav: the five mega-menu triggers, plus utilities on mobile.
//   3. Spacer: a flex item, not an auto margin. See the comment at its site.
//   4. Actions: search box · Ask the Index · About · Log in · Index Pro.
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
            aria-label="Open navigation"
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

          {/*
            CHROME-SPEC §1.1 children, in order: wordmark · nav · spacer ·
            actions · (progress). Utilities appear inside the disclosure on
            mobile, where the desktop action links are hidden.
          */}
          <nav id="hmi-topnav-menu" class="hmi-topnav-menu hmi-nav" aria-label="Primary">
            <MegaMenu slug={slug} />
            <div class="hmi-mobile-utilities">
              <a href={resolveRelative(slug, "ask" as SimpleSlug)}>Ask the Index</a>
              {utilityLinks.map((link) => (
                <a href={resolveRelative(slug, link.slug as SimpleSlug)}>{link.label}</a>
              ))}
              <a href={resolveRelative(slug, "login" as SimpleSlug)}>Log in</a>
              {INDEX_PRO_URL && <a href={INDEX_PRO_URL} rel="noopener">Index Pro</a>}
            </div>
          </nav>

          {/*
            The flex spacer, child 3. Load-bearing: CHROME-SPEC §1.1 says not to
            replace it with `margin-left: auto` on the actions group. An auto
            margin makes the gap the actions group's property, so the nav keeps
            its intrinsic width and the spacer cannot absorb the shrink — which
            is the shape of the 254px overflow this bar already had once.
          */}
          <div class="hmi-topnav-spacer" aria-hidden="true"></div>

          <div class="hmi-topnav-actions">
            <div class="search hmi-topnav-search hmi-inline-search">
              <SearchField shortcut />
            </div>
            {/* v3 line 60: a plain 12.5px text link, not a filled pill. The
                header carries exactly one filled control, Index Pro; a second
                filled button competes with it. */}
            <a class="hmi-topnav-ask" href={resolveRelative(slug, "ask" as SimpleSlug)}>
              Ask the Index
            </a>
            {/* About is repo navigation, not a v3 control — §1.1's actions group
                is search · Ask · Log in · Index Pro. It is kept because deleting
                a live destination is a content decision, not chrome geometry,
                and it takes the wide-only treatment with its neighbours. */}
            {utilityLinks.map((link) => (
              <a class="hmi-topnav-utility" href={resolveRelative(slug, link.slug as SimpleSlug)}>
                {link.label}
              </a>
            ))}
            {/* Account / log in. Placeholder for the future auth app (member
                accounts live in the separate application, not the static wiki).
                v3 line 61: "Log in" is a text link at the same weight as Ask,
                not an avatar icon. */}
            <a class="hmi-topnav-login" href={resolveRelative(slug, "login" as SimpleSlug)}>
              Log in
            </a>
            {/*
              Index Pro is the last item in the actions group and the only one
              that survives below 1150px: search collapses to a 36px square and
              Ask / About / Log in are removed outright. It used to sit outside
              the nav specifically so the burger drawer could not swallow it —
              now that the whole actions group is a sibling of the nav, that
              hazard is gone and it can sit with the controls it belongs to.
            */}
            {INDEX_PRO_URL && (
              <a class="hmi-topnav-pro" href={INDEX_PRO_URL} rel="noopener">
                Index Pro
              </a>
            )}
          </div>
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
