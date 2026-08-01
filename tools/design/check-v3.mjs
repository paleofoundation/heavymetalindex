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
  { screen: "isMetal", url: "/metals/lead.html", rail: true },
  { screen: "isIngredient", url: "/ingredients/almond.html", rail: true },
  { screen: "isProduct", url: "/products/aas-injectable.html", rail: true },
  { screen: "isRegulation", url: "/regulations/atsdr-aluminum-mrls.html", rail: true },
  { screen: "isSource", url: "/sources/ab-manan2018-oil-palm-soil-metals.html", rail: true },
]

const ABSENT = [
  ".hero-glyph",
  ".hero-pill",
  ".hero-right",
  ".hmi-pill",
  ".hmi-pill-row",
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
  { on: SNAPSHOT_SCREENS, sel: ".hero-snapshot", prop: "borderRadius", want: "0px", v3: 2012 },

  { on: DETAIL, sel: ".snav .grp > a.sec", prop: "fontSize", want: "13px", v3: 414 },
  { on: DETAIL, sel: ".snav .grp > a.sec", prop: "fontWeight", want: "400", v3: 29 },

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
      (f16Blocks, chromeBlocks, absent, styles, burgundy) => {
        const text = (document.body.innerText || "").toLowerCase()
        const missing = (list) => list.filter((b) => !text.includes(b.toLowerCase()))
        const presentOld = absent.filter((s) => document.querySelector(s) !== null)
        const styleResults = styles.map((a) => {
          const el = document.querySelector(a.sel)
          return { ...a, got: el ? getComputedStyle(el)[a.prop] : "NO SUCH ELEMENT" }
        })

        const neg = { shadow: [], gradient: [], burgundy: [], radius: [] }
        const MODAL = ".search-container, [role='dialog'], .popover, .rail-ld, .cite-drawer"
        const toHex = (v) => {
          const m = String(v).match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
          if (!m) return null
          if (m[4] !== undefined && Number(m[4]) === 0) return null
          return "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("")
        }
        const nearBurgundy = (h) => {
          const r = parseInt(h.slice(1, 3), 16),
            g = parseInt(h.slice(3, 5), 16),
            b = parseInt(h.slice(5, 7), 16)
          return burgundy.some((k) => {
            const kr = parseInt(k.slice(1, 3), 16),
              kg = parseInt(k.slice(3, 5), 16),
              kb = parseInt(k.slice(5, 7), 16)
            return Math.hypot(r - kr, g - kg, b - kb) < 55
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
          neg,
        }
      },
      f16Blocks,
      chromeBlocks,
      ABSENT,
      styleSet,
      V3_BURGUNDY,
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
  for (const [name, hits] of [
    ["no box-shadow outside modal/drawer", res.neg.shadow],
    ["no gradient anywhere", res.neg.gradient],
    ["no burgundy outside the four hexes", res.neg.burgundy],
    ["no border-radius >3px (50% on <=16px exempt)", res.neg.radius],
  ]) {
    record("chrome", hits.length === 0, {
      page: p.url, kind: "negative", sel: name, prop: "count", want: "0",
      got: `${hits.length}` + (hits.length ? ` → ${hits.slice(0, 5).join(", ")}${hits.length > 5 ? " …" : ""}` : ""),
    })
  }
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
