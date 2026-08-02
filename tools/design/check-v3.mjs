#!/usr/bin/env node
// npm run check:v3 — fidelity as a failing test, not an opinion.
//
// SITEWIDE.md move 2. The gate used to be hero-shaped: a handful of selectors on
// one or two pages, so "conforms to v3" went back to being an opinion on every
// other surface. It now runs one route per screen in the map and asserts the
// chrome that must be IDENTICAL everywhere — which is exactly where drift is
// invisible today.
//
// FOUR ASSERTION KINDS, and the last three are the ones that bite:
//
//   present   a section v3 renders must exist, matched by heading text. Fails
//             BY NAME, so an absence is loud.
//   absent    old-build markup must not exist in the DOM AT ALL. Adding v3's
//             markup while leaving the old markup live produces a diff that
//             looks complete and a page that renders as the old build.
//   style     computed value on the RENDERED page, never read from source.
//             Source-reading cannot detect a cascade loss: the source is
//             correct, the render is wrong.
//   negative  four properties asserted across every element on every surface.
//             They catch the regression class that specificity patches produce.
//
// SCOPE — and what the exit code is allowed to mean.
//
// Assertions covering the ~32 emitted body sections are real and stay in this
// file, but they are F-16 and this project cannot fix them, so they must not
// gate.
//
// They are NOT hidden behind a boolean. A flag that removes a failure from the
// report recreates the exact thing this gate exists to catch: something that
// looks complete and isn't. Instead every assertion carries a `scope`, BOTH
// BUCKETS ALWAYS PRINT, and the exit code reflects `chrome` only. A green run
// therefore reads as "the chrome is right and N body sections are still
// missing" — never as "v3 landed" — and that N is the F-16 backlog, burning
// down in public.
//
// An assertion may not move from `f16` to `chrome` except by F-16 landing it.
// Moving one between scopes follows the same rule as loosening one: separate
// commit, with justification (METHOD.md §2).
//
// RULE FOR FIXING FAILURES: never raise specificity to make an assertion pass.
// Out-specifying leaves both rules alive and the next component stylesheet wins
// again. Find the losing rule and delete it — but CONFIRM it is genuinely the
// predecessor first. `_legacy-all.scss:242-258` looks like the claim
// underline's predecessor and is not; it styles the citation <a>, live on 1,494
// anchors in metals/lead alone (METHOD.md §1).
//
//   npm run check:v3                     # against http://localhost:8099
//   npm run check:v3 -- http://host:port

import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const HERE = dirname(fileURLToPath(import.meta.url))
const SPEC = JSON.parse(readFileSync(join(HERE, "v3-acceptance.json"), "utf8"))

// One route per surface in the screen map.
//
// `/search` is in the map but has NO route in this build: search is a modal
// overlay mounted into the top bar, not a page. Recorded rather than silently
// dropped — if it becomes a route it belongs in this list.
const PAGES = [
  { screen: "isHomeA", url: "/index.html", rail: false },
  { screen: "isMetal", url: "/metals/lead.html", rail: true, badge: "METAL", crumb: "Metals" },
  { screen: "isIngredient", url: "/ingredients/almond.html", rail: true, badge: "INGREDIENT", crumb: "Ingredients" },
  { screen: "isProduct", url: "/products/aas-injectable.html", rail: true, badge: "PRODUCT-CATEGORY", crumb: "Products" },
  { screen: "isRegulation", url: "/regulations/atsdr-aluminum-mrls.html", rail: true, badge: "REGULATION", crumb: "Regulations" },
  { screen: "isSource", url: "/sources/ab-manan2018-oil-palm-soil-metals.html", rail: true, badge: "SOURCE", crumb: "Sources" },

  // THE THREE INDEX SCREENS. They extract (SPEC.screens has isMetalsIdx and its
  // siblings) but had no ROUTE here, which is why Chrome found
  // `Index / Metals / Metals` and a METAL PROFILE badge on a registry while the
  // gate reported nothing. A screen the gate cannot visit is a screen the gate
  // cannot defend.
  //
  // `rail: false` deliberately: the shell, the negatives, the absent list, the
  // mega menu and the hero all still run here. What it skips is the rail-block
  // and shared-tail PRESENCE list, which is commit 5's and §3's work — and §3
  // already says these three cite nothing, so demanding a References section on
  // them would be asserting a section that should not exist.
  { screen: "isMetalsIdx", url: "/metals/index.html", rail: false, badge: "REFERENCE LAYER", crumb: "Metals", leaf: "All metals" },
  { screen: "isProductsIdx", url: "/products/index.html", rail: false, badge: "CATALOGUE", crumb: "Products", leaf: "All categories" },
  { screen: "isRegulationsIdx", url: "/regulations/index.html", rail: false, badge: "REGISTER", crumb: "Regulations", leaf: "All instruments" },
]

const ABSENT = [
  ".hero-glyph",
  ".hero-pill",
  ".hero-right",
  ".hmi-pill",
  ".hmi-pill-row",

  // CHROME-SPEC §5, header: "zero <svg> inside the nav" — the chevron check.
  // It passes on arrival (the chevrons went in c22cd3bc1 and the search icon
  // left the nav with the actions group), and it is written anyway, because an
  // assertion that passes on arrival is how a fix stops being undoable. The
  // burger is a SIBLING of the nav, so its three lines are not caught here.
  "#hmi-topnav-menu svg",
  // The nav holds the five triggers and nothing else. Asserted separately from
  // the svg count: a control could return to the nav without bringing an icon.
  "#hmi-topnav-menu .search",
  "#hmi-topnav-menu .hmi-topnav-actions",
  // The old container class. Adding `.hmi-topnav-actions` while leaving
  // `.hmi-topnav-controls` alive produces a diff that looks complete and a bar
  // that still lays out the old way.
  ".hmi-topnav-controls",

  // CHROME-SPEC §1.5 / §5: the right rail REPLACES the three provenance cards
  // ("Researched by", "Page Snapshot", "Page provenance"), it does not
  // supplement them. The deletion landed earlier (0f0b1cd7c); this asserts the
  // absence so a future rail edit cannot quietly bring the card back beside the
  // Connections/Reuse/Found-an-error blocks that now carry its information.
  ".hmi-provenance-card",
]

const CHROME = "*"
const DETAIL = "detail"

const SNAPSHOT_SCREENS = Object.entries(SPEC.hasSnapshot ?? {})
  .filter(([, v]) => v)
  .map(([k]) => "is" + k.charAt(0).toUpperCase() + k.slice(1))

// Every value carries the v3 artifact line it was read from.
const STYLES = [
  { on: CHROME, sel: ".hmi-topnav-shell", prop: "backgroundColor", want: "#fffdfb", v3: 37 },
  { on: CHROME, sel: ".hmi-topnav-shell", prop: "borderBottomColor", want: "#e8e1db", v3: 37 },
  { on: CHROME, sel: ".hmi-topnav-inner", prop: "height", want: "68px", v3: 38 },
  { on: CHROME, sel: ".hmi-topnav-inner", prop: "maxWidth", want: "1760px", v3: 38 },
  { on: CHROME, sel: ".hmi-topnav-inner", prop: "padding", want: "0px 48px", v3: 38 },

  { on: CHROME, sel: ".hmi-topnav-wordmark", prop: "fontSize", want: "22px", v3: 40 },
  { on: CHROME, sel: ".hmi-topnav-wordmark", prop: "color", want: "#8b2a4a", v3: 40 },
  { on: CHROME, sel: ".hmi-topnav-wordmark", prop: "letterSpacing", want: "-0.33px", v3: 40 },

  // Actions group and the spacer (v3:56-58). `flexGrow: 1` on the spacer is the
  // assertion that a later `margin-left: auto` cannot satisfy — which is the
  // substitution §1.1 warns against, and the one that reintroduces an unshrinkable
  // row.
  { on: CHROME, sel: ".hmi-topnav-spacer", prop: "flexGrow", want: "1", v3: 57 },
  { on: CHROME, sel: ".hmi-topnav-actions", prop: "display", want: "flex", v3: 58 },
  { on: CHROME, sel: ".hmi-topnav-actions", prop: "gap", want: "12px", v3: 58 },
  { on: CHROME, sel: ".hmi-topnav-actions", prop: "minWidth", want: "0px", v3: 58 },

  // Search box, wide branch — the viewport is 1440, above v3's 1150 flag.
  // WIDTH, not just the box's own properties. A flex item can have every
  // declared value correct and still be laid out at 65% of its basis, because
  // the basis is what it ASKS for and the container decides. That happened here:
  // 168px against 260 with 214px of slack next to it. Height, radius and colour
  // all passed throughout.
  { on: CHROME, sel: ".hmi-topnav-search", prop: "width", want: "260px", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-search > .search-button", prop: "height", want: "36px", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-search > .search-button", prop: "borderRadius", want: "3px", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-search > .search-button", prop: "backgroundColor", want: "#fbf8f5", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-search > .search-button", prop: "borderTopColor", want: "#e6ded8", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-search > .search-button", prop: "boxShadow", want: "none", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-search > .search-button > p", prop: "fontSize", want: "12.5px", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-glyph", prop: "color", want: "#b7aeb0", v3: 55 },
  { on: CHROME, sel: ".hmi-topnav-pro", prop: "backgroundColor", want: "#8b2a4a", v3: 63 },

  // THE TRIGGER ROW'S COMPOSITION, not its values. Every value on `.hmi-nav-top`
  // was already correct while the row rendered 128px too wide with its underline
  // floating mid-bar. `gap` is asserted on the <ul>, which is the element that
  // actually lays the triggers out; `height` catches the broken stretch chain,
  // because a 2px bottom border only reads as a tab underline when it is ON the
  // bar's bottom edge.
  { on: CHROME, sel: ".hmi-nav-list", prop: "gap", want: "2px", v3: 43 },
  { on: CHROME, sel: ".hmi-nav-list", prop: "alignItems", want: "stretch", v3: 43 },
  { on: CHROME, sel: ".hmi-nav-top", prop: "height", want: "68px", v3: 45 },
  { on: CHROME, sel: ".hmi-nav-top", prop: "fontSize", want: "13.5px", v3: 1993 },
  { on: CHROME, sel: ".hmi-nav-top", prop: "backgroundColor", want: "rgba(0, 0, 0, 0)", v3: 1993 },
  { on: CHROME, sel: ".hmi-nav-top", prop: "borderBottomWidth", want: "2px", v3: 1993 },

  { on: CHROME, sel: "footer.site-footer", prop: "backgroundColor", want: "#4a1526", v3: 1482 },
  { on: CHROME, sel: "footer.site-footer", prop: "color", want: "rgba(255, 255, 255, 0.76)", v3: 1482 },
  { on: CHROME, sel: ".site-footer-inner", prop: "padding", want: "76px 56px 40px", v3: 1483 },
  { on: CHROME, sel: ".site-footer-inner", prop: "maxWidth", want: "1900px", v3: 1483 },

  { on: DETAIL, sel: ".wiki-content h2", prop: "fontSize", want: "30px", v3: 460 },
  { on: DETAIL, sel: ".wiki-content h2", prop: "fontWeight", want: "400", v3: 29 },
  { on: DETAIL, sel: ".wiki-content h2", prop: "borderBottomColor", want: "#e8e1db", v3: 460 },
  { on: DETAIL, sel: ".wiki-content h2", prop: "borderBottomStyle", want: "solid", v3: 460 },
  { on: DETAIL, sel: ".wiki-content h2", prop: "paddingBottom", want: "10px", v3: 460 },

  { on: DETAIL, sel: "article > p", prop: "fontSize", want: "16.5px", v3: 476 },
  { on: DETAIL, sel: "article > p", prop: "lineHeight", want: "29.37px", v3: 476 },
  { on: DETAIL, sel: "article > p", prop: "color", want: "#3f3a3f", v3: 476 },

  { on: DETAIL, sel: ".proof-main", prop: "padding", want: "38px 0px 88px", v3: 436 },
  { on: DETAIL, sel: ".proof-layout", prop: "gap", want: "56px", v3: 2007 },
  { on: DETAIL, sel: ".proof-layout", prop: "maxWidth", want: "1760px", v3: 2007 },
  { on: DETAIL, sel: ".hero-band", prop: "backgroundColor", want: "#8b2a4a", v3: 364 },
  { on: DETAIL, sel: ".hero-grid", prop: "gap", want: "72px", v3: 2012 },
  { on: DETAIL, sel: ".hero-grid", prop: "padding", want: "34px 48px 40px", v3: 2012 },
  { on: DETAIL, sel: ".hero-act", prop: "borderRadius", want: "2px", v3: 1420 },
  { on: DETAIL, sel: ".hero-kind", prop: "textTransform", want: "uppercase", v3: 373 },
  { on: SNAPSHOT_SCREENS, sel: ".hero-snapshot", prop: "borderRadius", want: "0px", v3: 2012 },

  { on: DETAIL, sel: ".snav .grp > a.sec", prop: "fontSize", want: "13px", v3: 414 },
  { on: DETAIL, sel: ".snav .grp > a.sec", prop: "fontWeight", want: "400", v3: 29 },

  // Right rail (CHROME-SPEC §1.5). Connections head, the #1c43ad rail links, the
  // Reuse box's burgundy header on a blush ground, and the Found-an-error box
  // and its solid-burgundy CTA — the three blocks that replaced the provenance
  // card.
  { on: DETAIL, sel: ".rail-connections-title", prop: "color", want: "#a9a1a2", v3: 1453 },
  { on: DETAIL, sel: ".rail-connections-title", prop: "fontSize", want: "9.5px", v3: 1453 },
  { on: DETAIL, sel: ".rail-connections-list a", prop: "color", want: "#1c43ad", v3: 1456 },
  { on: DETAIL, sel: ".rail-reuse-title", prop: "color", want: "#8b2a4a", v3: 1461 },
  { on: DETAIL, sel: ".rail-reuse-title", prop: "backgroundColor", want: "#fbf5f7", v3: 1461 },
  { on: DETAIL, sel: ".rail-correction", prop: "backgroundColor", want: "#f6ecf0", v3: 1471 },
  { on: DETAIL, sel: ".rail-correction-cta", prop: "backgroundColor", want: "#8b2a4a", v3: 1476 },
  { on: DETAIL, sel: ".rail-correction-cta", prop: "color", want: "#ffffff", v3: 1476 },

  { on: ["isMetal"], sel: ".wiki-content table", prop: "fontSize", want: "13.5px", v3: 502 },
  { on: ["isMetal"], sel: ".wiki-content thead th", prop: "fontSize", want: "10px", v3: 505 },
  { on: ["isMetal"], sel: ".wiki-content thead th", prop: "padding", want: "11px 15px", v3: 505 },
  { on: ["isMetal"], sel: ".wiki-content tbody td", prop: "padding", want: "13px 15px", v3: 510 },
  { on: ["isMetal"], sel: "th", prop: "fontWeight", want: "400", v3: 1366 },

  { on: ["isMetal"], sel: ".hmi-quick-read", prop: "padding", want: "22px 24px", v3: 440 },
  { on: ["isMetal"], sel: ".hmi-quick-read", prop: "borderRadius", want: "0px", v3: 440 },
  { on: ["isMetal"], sel: ".hmi-quick-read ul", prop: "display", want: "grid", v3: 443 },

  { on: ["isMetal"], sel: ".qa summary", prop: "fontSize", want: "21px", v3: 175 },
  { on: ["isMetal"], sel: ".qa summary", prop: "color", want: "#8b2a4a", v3: 175 },
]

const V3_BURGUNDY = ["#8b2a4a", "#6f2139", "#571a2c", "#4a1526"]

// Alpha is preserved rather than discarded: an earlier version folded
// `rgba(0, 0, 0, 0)` into `#000000` and reported a correctly transparent nav
// trigger as solid black. A normaliser that loses information manufactures
// failures, and a gate that manufactures failures stops being read.
const NORM = (v) => {
  const s = String(v)
  const m = s.match(/^rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/)
  if (!m) return s
  if (m[4] !== undefined && Number(m[4]) < 1) return s
  return "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("")
}

const base = (process.argv[2] ?? "http://localhost:8099").replace(/\/+$/, "")

let puppeteer
try {
  puppeteer = (await import("puppeteer")).default
} catch {
  console.error("check:v3 needs a headless browser: npm i -D puppeteer")
  process.exit(2)
}

const browser = await puppeteer.launch({ headless: "new" })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 1200 })

const failures = []
const counts = { chrome: { pass: 0, fail: 0 }, f16: { pass: 0, fail: 0 } }
const record = (scope, ok, f) => {
  counts[scope][ok ? "pass" : "fail"]++
  if (!ok) failures.push({ ...f, scope })
}

for (const p of PAGES) {
  const dataKey = p.screen.replace(/^is/, "").toLowerCase()
  const suppressed = new Set(SPEC.tailSuppressed?.[dataKey] ?? [])
  const tail = p.rail ? SPEC.sharedTail.filter((t) => !suppressed.has(t)) : []
  // The emitted body sections are F-16. The rail blocks and the shared tail are
  // component work and therefore gate.
  const f16Blocks = SPEC.screens[p.screen] ?? []
  const chromeBlocks = [...(p.rail ? SPEC.railBlocks : []), ...tail]
  const styleSet = STYLES.filter(
    (s) =>
      s.on === "*" ||
      (s.on === "detail" && p.rail) ||
      (Array.isArray(s.on) && s.on.includes(p.screen)),
  )

  let res
  try {
    await page.goto(base + p.url, { waitUntil: "networkidle0", timeout: 45000 })
    res = await page.evaluate(
      (f16Blocks, chromeBlocks, absent, styles, burgundy, shadowExempt) => {
        const text = (document.body.innerText || "").toLowerCase()
        // A page that cites nothing should render NO References section, not an
        // empty one — so the References expectation is conditional on the page
        // actually having citations. Verified on products/aas-injectable:
        // `sources: 0` in frontmatter, zero inline [[sources/...]], and 327 of
        // 414 product pages have no References section at all. Asserting it
        // unconditionally demanded a section with nothing to put in it.
        const citesSomething =
          document.querySelector('a[data-slug^="sources/"], sup.cite, .hmi-page-references') !== null
        const missing = (list) =>
          list
            .filter((b) => citesSomething || !/^references$/i.test(b))
            .filter((b) => !text.includes(b.toLowerCase()))
        const presentOld = absent.filter((s) => document.querySelector(s) !== null)

        // MEGA MENU, structural (CHROME-SPEC §1.2 / §5). Three facts per panel,
        // each of which a computed-style check cannot see:
        //
        //   populated  A three-column grid with TWO populated columns computes
        //              to `repeat(3, 1fr)` and passes a geometry assertion while
        //              rendering a third of the panel empty. That is exactly
        //              what shipped. So count columns that actually have a head
        //              AND at least one link — and key on `.hmi-nav-colhead`,
        //              because the heads are <p>, so anything keyed to h3/h4
        //              reports zero columns on a correct panel.
        //   rail       The 280px column is title, blurb, all-link, IN THAT
        //              ORDER and all three in flow. The all-link used to be a
        //              sibling of `.hmi-nav-cols` and landed in the wrong grid
        //              cell.
        //   grid       The panel's own 280px + remainder split.
        const navItems = [...document.querySelectorAll(".hmi-nav-item")].map((li) => {
          const top = li.querySelector(".hmi-nav-top")
          const slack = top ? Math.round(li.getBoundingClientRect().width - top.getBoundingClientRect().width) : -1
          return { label: top?.textContent.trim() ?? "?", slack }
        })
        const worst = navItems.reduce((a, b) => (b.slack > a.slack ? b : a), { label: "-", slack: 0 })
        const navRow = { slack: worst.slack, widest: worst.label }

        // The wordmark must be VERTICALLY CENTRED in the bar. `align-items:
        // center` is necessary but not sufficient: a stray `flex-direction:
        // column` on the brand made that centre HORIZONTAL and pinned the
        // wordmark to the top, 21px above the bar's midline while the nav items
        // sat on it. No property is wrong — only the relationship between the
        // wordmark's midline and the inner's.
        const innerEl = document.querySelector(".hmi-topnav-inner")
        const wm = document.querySelector(".hmi-topnav-wordmark")
        let wordmarkOffCentre = -1
        if (innerEl && wm) {
          const ir = innerEl.getBoundingClientRect()
          const wr = wm.getBoundingClientRect()
          wordmarkOffCentre = Math.round(Math.abs((wr.top + wr.bottom) / 2 - (ir.top + ir.bottom) / 2))
        }

        // The panel drops below the bar as `position: absolute; left:0; right:0`,
        // so it spans its CONTAINING BLOCK. That block must be `.hmi-topnav-inner`
        // (full width) — never a `.hmi-nav-item`, which is 71px and lives inside
        // the nav's `overflow: hidden`. A stray `position: relative` on the item
        // once sized every panel to its trigger and let the nav clip it to
        // nothing, with every §1.2 style assertion still green. Measured against
        // the inner's width so the check is width-independent.
        const innerW = Math.round(
          (document.querySelector(".hmi-topnav-inner")?.getBoundingClientRect().width) ?? 0,
        )
        const megaPanels = [...document.querySelectorAll(".hmi-nav-panel")].map((panel) => {
          const populated = [...panel.querySelectorAll(".hmi-nav-col")].filter(
            (c) => c.querySelector(".hmi-nav-colhead") && c.querySelector("ul > li > a"),
          ).length
          const rail = panel.querySelector(".hmi-nav-rail")
          const inner = panel.querySelector(".hmi-nav-panel-inner")
          return {
            id: panel.id || "(unnamed panel)",
            populated,
            railKids: rail
              ? [...rail.children]
                  .map((c) => (typeof c.className === "string" ? c.className.split(" ")[0] : "?"))
                  .join(" · ")
              : "NO RAIL",
            gridFirst: inner ? getComputedStyle(inner).gridTemplateColumns.split(" ")[0] : "NO INNER",
            widthShortfall: innerW - Math.round(panel.getBoundingClientRect().width),
          }
        })

        // SHELL AND LEFT RAIL (CHROME-SPEC §1.4). The triad's outer tracks are
        // fixed (236 / … / 312); the middle is minmax(0,1fr) so it is
        // viewport-dependent and only the ends are asserted. The rail's active
        // indicator is the left border going burgundy — measured by forcing
        // `.active`, because at rest no item is active on a freshly-loaded page.
        const shellEl = document.querySelector(".proof-layout")
        const shellCols = shellEl ? getComputedStyle(shellEl).gridTemplateColumns.split(" ") : []
        const shell = {
          first: shellCols[0] ?? "",
          last: shellCols[shellCols.length - 1] ?? "",
          n: shellCols.length,
        }
        // The rail's active border comes from THREE signals (proof-design 470):
        // `.active`, a group that `:has(.in-view)` (scroll-spy), or an open
        // `.snav-further`. On a short page every group has an in-view child, so
        // there is no naturally-inactive item to read. Force both states on ONE
        // item instead: strip `.active` and every `.in-view` in its group to read
        // inactive, then add `.active` to read active, then restore.
        const secs = [...document.querySelectorAll(".snav .grp > a.sec")]
        let railInactive = "",
          railActive = ""
        const t = secs[0]
        if (t) {
          const grp = t.closest(".grp")
          const inview = grp ? [...grp.querySelectorAll(".in-view")] : []
          const wasActive = t.classList.contains("active")
          inview.forEach((e) => e.classList.remove("in-view"))
          t.classList.remove("active")
          railInactive = getComputedStyle(t).borderLeftColor
          t.classList.add("active")
          railActive = getComputedStyle(t).borderLeftColor
          if (!wasActive) t.classList.remove("active")
          inview.forEach((e) => e.classList.add("in-view"))
        }
        const railBorder = { inactive: railInactive, active: railActive }

        // FOOTER (CHROME-SPEC §1.6 / §5): four column heads, and a bottom bar
        // that names the REPO's entities, not v3's "Institute of Contamination
        // Standards" typo. The copyright belongs to the corporation and the
        // operator attribution to the Institute — two lines, two jobs. This is
        // the one string on the site where being wrong is a checkable untruth
        // about corporate form, so it is asserted by content, not just style.
        const footerEl = document.querySelector("footer.site-footer")
        const footer = footerEl
          ? {
              colHeads: footerEl.querySelectorAll(
                ".site-footer-column h2, .site-footer-column h3, .site-footer-column .site-footer-column-title",
              ).length,
              bottom: (footerEl.querySelector(".site-footer-bottom")?.innerText ?? "").replace(/\s+/g, " "),
            }
          : { colHeads: 0, bottom: "" }

        // HERO BREADCRUMB AND BADGE (CHROME-SPEC §1.3 / §3). Both are strings
        // rather than computed styles, and both were wrong on three screens
        // while every style assertion on the hero passed.
        const crumbEl = document.querySelector(".hero-crumb")
        const crumbLinks = crumbEl ? [...crumbEl.querySelectorAll("a")].map((a) => a.textContent.trim()) : []
        const hero = {
          crumb: crumbLinks.length > 1 ? crumbLinks[1] : "",
          leaf: crumbEl?.querySelector(".cur")?.textContent.trim() ?? "",
          badge: document.querySelector(".hero-kind")?.textContent.trim() ?? "",
        }
        const styleResults = styles.map((a) => {
          const el = document.querySelector(a.sel)
          return { ...a, got: el ? getComputedStyle(el)[a.prop] : "NO SUCH ELEMENT" }
        })

        const neg = { shadow: [], gradient: [], burgundy: [], radius: [], overflow: [] }

        // LAYOUT CONTAINMENT. Every computed property on this page can be
        // correct while the document still scrolls sideways — which is exactly
        // what happened: .hmi-topnav-menu had no min-width, so its 1113px
        // intrinsic width pushed scrollWidth to 1474 against a 1220 clientWidth
        // on every page, clipping "Ask the Index". No property assertion can
        // see that, because it is a relationship between elements, not a value
        // on one. Checked here instead.
        const de = document.documentElement
        if (de.scrollWidth > de.clientWidth) {
          const wide = [...document.querySelectorAll("*")]
            .filter((e) => e.getBoundingClientRect().right > de.clientWidth + 1)
            .slice(0, 3)
            .map((e) => e.tagName.toLowerCase() + "." + (typeof e.className === "string" ? e.className.split(" ")[0] : ""))
          neg.overflow.push(`${de.scrollWidth} > ${de.clientWidth} (+${de.scrollWidth - de.clientWidth}px) :: ${wide.join(", ")}`)
        }
        // CHROME-SPEC §2: the mega-menu panel's drop shadow is a LEGITIMATE
        // exception to the no-box-shadow assertion, alongside modals and the
        // source drawer. The list is passed in from v3-acceptance.json's
        // `shadowExempt` (§1.2) so the exemption is spec data a reader can audit,
        // not a string literal inside the checker.
        const MODAL = shadowExempt.join(", ")
        const toHex = (v) => {
          const m = String(v).match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
          if (!m) return null
          if (m[4] !== undefined && Number(m[4]) === 0) return null
          return "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("")
        }
        // A colour is "burgundy-family" if it is genuinely RED-DOMINANT, not
        // merely dark. The first version used Euclidean RGB distance < 55 from
        // the approved hexes, which caught the approved INK colours — #3f3a3f
        // (body) sits 46 away from #4a1526 — and reported 76-88 false hits per
        // surface. A gate that manufactures failures stops being read.
        //
        // The target is #9a2852, which shipped in middleware.ts for months:
        // R 154 vs G 40 / B 82 — red clearly dominant and saturated. #3f3a3f is
        // R 63 / G 58 / B 63, effectively neutral. So: red must lead green by a
        // real margin AND lead blue, which is what separates a burgundy from a
        // warm grey.
        const nearBurgundy = (h) => {
          const r = parseInt(h.slice(1, 3), 16),
            g = parseInt(h.slice(3, 5), 16),
            b = parseInt(h.slice(5, 7), 16)
          if (r - g < 30 || r <= b) return false
          return burgundy.some((k) => {
            const kr = parseInt(k.slice(1, 3), 16),
              kg = parseInt(k.slice(3, 5), 16),
              kb = parseInt(k.slice(5, 7), 16)
            return Math.hypot(r - kr, g - kg, b - kb) < 70
          })
        }
        const label = (e) =>
          e.tagName.toLowerCase() +
          (typeof e.className === "string" && e.className
            ? "." + e.className.split(" ").filter(Boolean).slice(0, 2).join(".")
            : "")

        for (const e of document.querySelectorAll("*")) {
          const c = getComputedStyle(e)
          if (c.boxShadow && c.boxShadow !== "none" && !e.closest(MODAL))
            neg.shadow.push(label(e))
          if (/gradient\(/.test(c.backgroundImage)) neg.gradient.push(label(e))
          for (const prop of ["color", "backgroundColor"]) {
            const h = toHex(c[prop])
            if (h && nearBurgundy(h) && !burgundy.includes(h))
              neg.burgundy.push(label(e) + "{" + prop + "}" + h)
          }
          // 50% on an element <=16px wide is the timeline dot (COMPONENTS.md §5).
          const r = c.borderTopLeftRadius
          if (r && r !== "0px") {
            const w = e.getBoundingClientRect().width
            if (r.includes("%")) {
              if (w > 16) neg.radius.push(label(e) + "::" + r + "(w" + Math.round(w) + ")")
            } else if (parseFloat(r) > 3) {
              neg.radius.push(label(e) + "::" + r)
            }
          }
        }
        for (const k of Object.keys(neg)) neg[k] = [...new Set(neg[k])]
        return {
          f16Missing: missing(f16Blocks),
          chromeMissing: missing(chromeBlocks),
          presentOld,
          styleResults,
          megaPanels,
          shell,
          railBorder,
          footer,
          navRow,
          wordmarkOffCentre,
          hero,
          neg,
        }
      },
      f16Blocks,
      chromeBlocks,
      ABSENT,
      styleSet,
      V3_BURGUNDY,
      SPEC.shadowExempt ?? [".search-container", "[role='dialog']", ".popover", ".rail-ld", ".cite-drawer", ".hmi-nav-panel"],
    )
  } catch (e) {
    record("chrome", false, {
      page: p.url, kind: "load", sel: p.url, prop: "-", want: "200", got: String(e.message).slice(0, 60),
    })
    continue
  }

  for (const b of chromeBlocks)
    record("chrome", !res.chromeMissing.includes(b), {
      page: p.url, kind: "present", sel: `block "${b}"`, prop: "exists", want: "yes", got: "MISSING",
    })
  for (const b of f16Blocks)
    record("f16", !res.f16Missing.includes(b), {
      page: p.url, kind: "present", sel: `block "${b}"`, prop: "exists", want: "yes", got: "MISSING",
    })
  for (const s of ABSENT)
    record("chrome", !res.presentOld.includes(s), {
      page: p.url, kind: "absent", sel: s, prop: "exists", want: "no", got: "PRESENT (old markup)",
    })
  for (const r of res.styleResults) {
    const got = NORM(r.got)
    record("chrome", got === r.want, {
      page: p.url, kind: "style", sel: r.sel, prop: r.prop, want: r.want, got, v3: r.v3,
    })
  }
  // §5: "breadcrumb leaf !== breadcrumb crumb" — the duplication check. It runs
  // on every surface, not only where the §3 table is transcribed below, because
  // the defect is structural: any screen whose leaf falls back to the section
  // name reproduces it.
  if (p.badge !== undefined) {
    // §3's badges are "the KIND map at v3:2680, UPPERCASED", and the uppercasing
    // is presentational — heroBand.scss does it, the DOM carries "Metal".
    // Compared case-insensitively here, with the transform asserted separately
    // in STYLES, so the two facts fail independently: a badge that says the
    // wrong thing and a badge that stopped being uppercase are different bugs.
    record("chrome", res.hero.badge.toUpperCase() === p.badge, {
      page: p.url, kind: "hero", sel: ".hero-kind", prop: "badge", want: p.badge,
      got: (res.hero.badge || "(none)").toUpperCase(),
    })
  }
  if (p.crumb !== undefined) {
    record("chrome", res.hero.crumb === p.crumb, {
      page: p.url, kind: "hero", sel: ".hero-crumb", prop: "crumb", want: p.crumb, got: res.hero.crumb || "(none)",
    })
  }
  if (p.leaf !== undefined) {
    record("chrome", res.hero.leaf === p.leaf, {
      page: p.url, kind: "hero", sel: ".hero-crumb .cur", prop: "leaf", want: p.leaf, got: res.hero.leaf || "(none)",
    })
  }
  if (res.hero.crumb) {
    record("chrome", res.hero.leaf !== res.hero.crumb, {
      page: p.url, kind: "hero", sel: ".hero-crumb", prop: "leaf !== crumb", want: "different", got: `both "${res.hero.crumb}"`,
    })
  }
  // NO DEAD BOX IN THE TRIGGER ROW. An element that renders nothing and still
  // occupies flow is invisible to every property assertion — it has no property
  // that is wrong. It is only detectable as a RELATIONSHIP: the item is wider
  // than the trigger inside it. That is what the deglyphed chevron button was,
  // 8px × 5, and this is the general check for its whole class.
  record("chrome", res.navRow.slack === 0, {
    page: p.url, kind: "structure", sel: ".hmi-nav-item", prop: "width beyond its trigger",
    want: "0px", got: `${res.navRow.slack}px` + (res.navRow.slack ? ` (${res.navRow.widest})` : ""),
  })
  record("chrome", res.wordmarkOffCentre >= 0 && res.wordmarkOffCentre <= 2, {
    page: p.url, kind: "structure", sel: ".hmi-topnav-wordmark", prop: "vertical centre vs bar",
    want: "≤ 2px off", got: `${res.wordmarkOffCentre}px off`,
  })
  if (p.rail) {
    // §1.4 shell triad — the two fixed outer tracks.
    record("chrome", res.shell.first === "236px", {
      page: p.url, kind: "style", sel: ".proof-layout", prop: "grid col 1", want: "236px", got: res.shell.first || "(none)", v3: 405,
    })
    record("chrome", res.shell.last === "312px", {
      page: p.url, kind: "style", sel: ".proof-layout", prop: "grid col 3", want: "312px", got: res.shell.last || "(none)", v3: 405,
    })
    // §1.4 left-rail indicator — the left border, inactive vs active.
    record("chrome", NORM(res.railBorder.inactive) === "#e8e1db", {
      page: p.url, kind: "style", sel: ".snav a.sec", prop: "border-left (inactive)", want: "#e8e1db", got: NORM(res.railBorder.inactive), v3: 414,
    })
    record("chrome", NORM(res.railBorder.active) === "#8b2a4a", {
      page: p.url, kind: "style", sel: ".snav a.sec.active", prop: "border-left (active)", want: "#8b2a4a", got: NORM(res.railBorder.active), v3: 414,
    })
  }
  // §1.6 footer — on every surface (the footer is shared chrome).
  record("chrome", res.footer.colHeads === 4, {
    page: p.url, kind: "structure", sel: ".site-footer-column", prop: "column heads", want: "4", got: String(res.footer.colHeads),
  })
  {
    // innerText returns the CSS-transformed (uppercased) text, so match
    // case-insensitively; the entity NAMES are what matter, not their casing.
    const b = res.footer.bottom
    const ok =
      /Paleo Certified, Inc\./i.test(b) &&
      /Institute of Contaminant Standards/i.test(b) &&
      !/Contamination Standards/i.test(b)
    record("chrome", ok, {
      page: p.url, kind: "content", sel: ".site-footer-bottom", prop: "repo legal line (not v3 typo)",
      want: "Paleo Certified, Inc. + Institute of Contaminant Standards, no 'Contamination'",
      got: b.slice(0, 90) || "(empty)",
    })
  }
  record("chrome", res.megaPanels.length === 5, {
    page: p.url, kind: "structure", sel: ".hmi-nav-panel", prop: "count", want: "5", got: String(res.megaPanels.length),
  })
  for (const m of res.megaPanels) {
    record("chrome", m.populated === 3, {
      page: p.url, kind: "structure", sel: m.id, prop: "populated columns", want: "3", got: String(m.populated),
    })
    record("chrome", m.railKids === "hmi-nav-title · hmi-nav-blurb · hmi-nav-all", {
      page: p.url, kind: "structure", sel: m.id, prop: "rail children", want: "hmi-nav-title · hmi-nav-blurb · hmi-nav-all", got: m.railKids,
    })
    record("chrome", m.gridFirst === "280px", {
      page: p.url, kind: "structure", sel: m.id, prop: "grid col 1", want: "280px", got: m.gridFirst,
    })
    // The panel spans the header inner (containing block = .hmi-topnav-inner, not
    // a 71px .hmi-nav-item). A shortfall means the panel was sized to a trigger
    // and clipped by the nav's overflow — invisible to every style assertion. A
    // few px of rounding is tolerated; a collapse to trigger width is ~1300px.
    record("chrome", m.widthShortfall <= 2, {
      page: p.url, kind: "structure", sel: m.id, prop: "panel width vs header inner",
      want: "full (shortfall ≤ 2px)", got: `shortfall ${m.widthShortfall}px`,
    })
  }
  for (const [name, hits] of [
    ["no box-shadow outside modal/drawer", res.neg.shadow],
    ["no gradient anywhere", res.neg.gradient],
    ["no burgundy outside the four hexes", res.neg.burgundy],
    ["no border-radius >3px (50% on <=16px exempt)", res.neg.radius],
    ["no horizontal overflow (scrollWidth <= clientWidth)", res.neg.overflow],
  ]) {
    record("chrome", hits.length === 0, {
      page: p.url, kind: "negative", sel: name, prop: "count", want: "0",
      got: `${hits.length}` + (hits.length ? ` → ${hits.slice(0, 5).join(", ")}${hits.length > 5 ? " …" : ""}` : ""),
    })
  }
}

// ── NARROW PASS (v3's 1150 flag) ──────────────────────────────────────────
//
// THE GATE ONLY EVER RAN AT 1440, and §1.1's narrow branch is not a smaller
// version of the wide one — v3 REMOVES chrome below the flag rather than
// scaling it. Three defects shipped through this hole in one sitting: a search
// box laid out at 168px against a 260px basis, a "36px square" that measured 60
// because a min-width floor outranks a width, and a burger drawer that rendered
// permanently open. All three were declared correctly and laid out wrong, and
// none of them is visible at 1440.
//
// One page is enough: the header and footer are identical on all fifteen
// screens, which is the whole leverage argument in §0.
await page.setViewport({ width: 1100, height: 900 })
await page.goto(base + "/metals/lead.html", { waitUntil: "networkidle0", timeout: 45000 })
const narrow = await page.evaluate(() => {
  const box = (sel) => {
    const el = document.querySelector(sel)
    if (!el) return { display: "NO SUCH ELEMENT", width: -1 }
    return { display: getComputedStyle(el).display, width: Math.round(el.getBoundingClientRect().width) }
  }
  return {
    nav: box("#hmi-topnav-menu"),
    burger: box(".hmi-topnav-burger"),
    search: box(".hmi-topnav-search"),
    ask: box(".hmi-topnav-ask"),
    login: box(".hmi-topnav-login"),
    pro: box(".hmi-topnav-pro"),
    heroCols: getComputedStyle(document.querySelector(".hero-grid") ?? document.body).gridTemplateColumns.split(" ").length,
    shellCols: getComputedStyle(document.querySelector(".proof-layout") ?? document.body).gridTemplateColumns.split(" ").length,
  }
})
const NARROW_WANT = [
  ["#hmi-topnav-menu display", narrow.nav.display, "none", "the drawer is closed until the burger opens it"],
  [".hmi-topnav-burger display", narrow.burger.display, "flex", "and the burger is the control that opens it"],
  [".hmi-topnav-search width", String(narrow.search.width), "36", "v3 collapses the box to a square, it does not shrink it"],
  [".hmi-topnav-ask display", narrow.ask.display, "none", "wide-only"],
  [".hmi-topnav-login display", narrow.login.display, "none", "wide-only"],
  [".hmi-topnav-pro display", narrow.pro.display, "block", "Index Pro survives at every width"],
  [".hero-grid columns", String(narrow.heroCols), "1", "v3 collapses below 1150"],
  [".proof-layout columns", String(narrow.shellCols), "1", "same flag as the hero"],
]
for (const [sel, got, want, why] of NARROW_WANT) {
  record("chrome", got === want, {
    page: "/metals/lead.html @1100", kind: "narrow", sel, prop: why, want, got,
  })
}

// ── 1280 CONTAINMENT (CHROME-SPEC §5, shell) ──────────────────────────────
// §5 asks for `scrollWidth <= clientWidth` at 1280 AND 1440. 1440 is the main
// loop; 1100 is the narrow pass. 1280 is the band where the three-column shell
// is still live (> 1150) but the viewport is tighter than the 1760 cap — the
// width most likely to overflow if a track or the hero mis-sizes. Checked here
// on a detail page (shell) and the metals index (hero A / registry).
for (const url of ["/metals/lead.html", "/metals/index.html"]) {
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(base + url, { waitUntil: "networkidle0", timeout: 45000 })
  const over = await page.evaluate(() => {
    const de = document.documentElement
    if (de.scrollWidth <= de.clientWidth) return ""
    const wide = [...document.querySelectorAll("*")]
      .filter((e) => e.getBoundingClientRect().right > de.clientWidth + 1)
      .slice(0, 3)
      .map((e) => e.tagName.toLowerCase() + "." + (typeof e.className === "string" ? e.className.split(" ")[0] : ""))
    return `${de.scrollWidth} > ${de.clientWidth} (+${de.scrollWidth - de.clientWidth}px) :: ${wide.join(", ")}`
  })
  record("chrome", over === "", {
    page: `${url} @1280`, kind: "negative", sel: "no horizontal overflow (scrollWidth <= clientWidth)",
    prop: "count", want: "0", got: over ? `1 → ${over}` : "0",
  })
}

await browser.close()

let lastPage = null
let lastKey = null
for (const f of failures) {
  if (f.page !== lastPage) {
    console.log(`\n${f.page}`)
    lastPage = f.page
    lastKey = null
  }
  const key = `${f.scope}/${f.kind}`
  if (key !== lastKey) {
    console.log(`  [${f.scope} · ${f.kind}]`)
    lastKey = key
  }
  console.log(`    ${f.sel} · ${f.prop} · want ${f.want} · got ${f.got}`)
}

const tot = (s) => counts[s].pass + counts[s].fail
console.log("")
console.log(
  `chrome  ${counts.chrome.pass}/${tot("chrome")} pass   ` +
    (counts.chrome.fail === 0 ? "✓ gating" : `✗ gating — ${counts.chrome.fail} failing`),
)
console.log(
  `f16     ${counts.f16.pass}/${tot("f16")} pass   ` +
    (counts.f16.fail === 0 ? "✓ not gating" : `✗ not gating — ${counts.f16.fail} known gaps`),
)

process.exit(counts.chrome.fail ? 1 : 0)
