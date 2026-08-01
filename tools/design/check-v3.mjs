#!/usr/bin/env node
// npm run check:v3 — fidelity as a failing test, not an opinion.
//
// THE DEFECT THIS REPLACES. The previous gate asserted computed styles on
// elements that already existed, so it could not fail for something absent. It
// reported "detail 25/25 passed" while the page was missing `Connections`,
// `Reuse this page`, `Found an error?`, seven body sections and five of nine
// rails. Same shape as the DOI gate's `--diff-filter=AM` predicate: the check
// described something narrower than the invariant it claimed to enforce.
//
// THREE ASSERTION KINDS, and the last two are the ones that bite:
//
//   present  a section v3 renders must exist, matched by heading text.
//            Fails BY NAME. This is what makes an absence loud.
//   absent   old-build markup must not exist in the DOM AT ALL. Adding v3's
//            markup while leaving the old markup live produces a diff that
//            looks complete and a page that renders as the old build. These
//            selectors are not in the artifact by definition — they are what
//            the artifact replaced.
//   style    computed value on the RENDERED page, never read from source.
//            Verification by source-reading cannot catch a losing rule: the
//            source is correct, the render is wrong.
//
// RULE FOR FIXING FAILURES: do not raise specificity to make an assertion
// pass. Out-specifying leaves both rules alive and the next component
// stylesheet Quartz emits wins again. Find the losing rule and DELETE it.
//
//   npm run check:v3                     # against http://localhost:8099
//   npm run check:v3 -- http://host:port
//
// THIS IS THE ONLY GATE. `v3-conformance.mjs` still holds ~75 homepage geometry
// assertions worth folding into STYLES below, but its `v3:gate` npm script was
// REMOVED rather than left alongside this one: it is the check that reported
// "detail 25/25 passed" on a page missing three rail blocks, and a second entry
// point is a second chance to cite a false green. Fold, then delete it.

import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const HERE = dirname(fileURLToPath(import.meta.url))
const SPEC = JSON.parse(readFileSync(join(HERE, "v3-acceptance.json"), "utf8"))

// One representative page per v3 screen. `screen` keys into SPEC.screens.
const PAGES = [
  { screen: "isHomeA", url: "/index.html", rail: false },
  { screen: "isMetal", url: "/metals/lead.html", rail: true },
  { screen: "isIngredient", url: "/ingredients/almond.html", rail: true },
  { screen: "isProduct", url: "/products/aas-injectable.html", rail: true },
  { screen: "isRegulation", url: "/regulations/atsdr-aluminum-mrls.html", rail: true },
  { screen: "isSource", url: "/sources/ab-manan2018-oil-palm-soil-metals.html", rail: true },
]

// Old-build markup. Cited in FIDELITY.md as the assertions that reveal whether
// a redesign landed or merely accumulated. NOT artifact-derived — these are
// precisely the selectors the artifact has no equivalent for.
const ABSENT = [".hero-glyph", ".hero-pill", ".hero-right"]

// Computed-style assertions, each with the artifact line it was read from.
//
// `on` scopes an assertion to the screens that actually render the element.
// Without it the homepage reports NO SUCH ELEMENT for `.hero-grid` and
// `.proof-layout`'s max-width — HOME A is full-bleed and has no detail shell by
// design (artifact 100-262), so those would be false failures. A gate that
// cries wolf gets ignored, which is how the last one stopped being read.
// Screens v3 gives a Page snapshot panel, read off the artifact.
const SNAPSHOT_SCREENS = Object.entries(SPEC.hasSnapshot ?? {})
  .filter(([, v]) => v)
  .map(([k]) => "is" + k.charAt(0).toUpperCase() + k.slice(1))

const CHROME = "*" // every screen
const DETAIL = "detail" // every screen except HOME A
// A screen list scopes an assertion to the screens whose v3 spec actually
// contains the element. `.qa` is scoped to isMetal because "Questions this page
// answers" appears only on v3's metal screen — asserting it on a source page
// reports NO SUCH ELEMENT for something v3 never put there, and a gate that
// cries wolf stops being read. This is scoping to the SPEC, not scoping away an
// inconvenient failure: if the metal screen loses its FAQ, this still fails.

const STYLES = [
  // FIDELITY.md tells — these read the OLD values if the old pill and card
  // rules are still winning in the cascade.
  { on: DETAIL, sel: ".hero-act", prop: "borderRadius", want: "2px", why: "FIDELITY.md: 7px/999px means old pills live" },
  {
    // Scoped from the artifact's own data, not a guess: SPEC.hasSnapshot records
    // which screens carry a `snapshot:` block. v3 gives metal, ingredient,
    // regulation and source a Page snapshot and gives PRODUCT none — the
    // opposite of what F-19 assumed before the data was read.
    on: SNAPSHOT_SCREENS,
    sel: ".hero-snapshot",
    prop: "borderRadius",
    want: "0px",
    why: "FIDELITY.md: old card was 12px",
  },

  // site chrome — present on every screen (artifact 37-38, 1482-1483)
  { on: CHROME, sel: ".hmi-topnav-inner", prop: "maxWidth", want: "1760px", why: "artifact 38 header" },
  { on: CHROME, sel: ".hmi-topnav-inner", prop: "height", want: "68px", why: "artifact 38 header" },
  { on: CHROME, sel: "footer.site-footer", prop: "backgroundColor", want: "#4a1526", why: "artifact 1482" },
  { on: CHROME, sel: ".site-footer-inner", prop: "padding", want: "76px 56px 40px", why: "artifact 1483" },

  // detail shell (artifact 2007) and detail hero (2012)
  { on: DETAIL, sel: ".proof-layout", prop: "gap", want: "56px", why: "artifact 2007 shellSt" },
  { on: DETAIL, sel: ".proof-layout", prop: "maxWidth", want: "1760px", why: "artifact 2007 shellSt" },
  { on: DETAIL, sel: ".hero-grid", prop: "gap", want: "72px", why: "artifact 2012 heroDetailSt" },
  { on: DETAIL, sel: ".hero-grid", prop: "padding", want: "34px 48px 40px", why: "artifact 2012 heroDetailSt" },
  { on: DETAIL, sel: ".hero-band", prop: "backgroundColor", want: "#8b2a4a", why: "artifact 364" },

  // rail items, artifact 413-417 — text on a hairline, never a filled pill
  { on: DETAIL, sel: ".snav .grp > a.sec", prop: "fontSize", want: "13px", why: "artifact 414" },
  { on: DETAIL, sel: ".snav .grp > a.sec", prop: "fontWeight", want: "400", why: "artifact 414" },

  // ── body typography ────────────────────────────────────────────────────
  // These are the assertions that would have caught the drift Karen could see
  // in the FAQ section. Every one of them was wrong on every detail page while
  // the previous gate reported 25/25, because none of it was being measured.

  // section heading, artifact 460. Was 24px semibold over a DOTTED #cfcabf rule.
  { on: DETAIL, sel: ".wiki-content h2", prop: "fontSize", want: "30px", why: "artifact 460" },
  { on: DETAIL, sel: ".wiki-content h2", prop: "fontWeight", want: "400", why: "artifact 460" },
  { on: DETAIL, sel: ".wiki-content h2", prop: "borderBottomColor", want: "#e8e1db", why: "artifact 460" },
  { on: DETAIL, sel: ".wiki-content h2", prop: "borderBottomStyle", want: "solid", why: "artifact 460 (was dotted)" },

  // body copy, artifact 476. `article` set these directly, so .wiki-content's
  // inherited values could never win.
  { on: DETAIL, sel: "article > p", prop: "fontSize", want: "16.5px", why: "artifact 476" },
  { on: DETAIL, sel: "article > p", prop: "lineHeight", want: "29.37px", why: "artifact 476 (1.78)" },
  { on: DETAIL, sel: "article > p", prop: "color", want: "#3f3a3f", why: "artifact 476" },

  // the FAQ, artifact 174-178 — question in burgundy REGULAR, marker a bare
  // mono glyph, answer indented behind a 2px #e0c9d1 rule.
  { on: ["isMetal"], sel: ".qa summary", prop: "fontSize", want: "21px", why: "artifact 175" },
  { on: ["isMetal"], sel: ".qa summary", prop: "fontWeight", want: "400", why: "artifact 175 (was 600)" },
  { on: ["isMetal"], sel: ".qa summary", prop: "color", want: "#8b2a4a", why: "artifact 175 (was near-black)" },
  { on: ["isMetal"], sel: ".qa summary .mk", prop: "borderRadius", want: "0px", why: "artifact 174 (was a 50% ring)" },
  { on: ["isMetal"], sel: ".qa .ans", prop: "borderLeftColor", want: "#e0c9d1", why: "artifact 178" },

  // ── nav bar + mega menu (artifact 45/1993, 72-93) ──────────────────────
  { on: CHROME, sel: ".hmi-topnav-wordmark", prop: "fontSize", want: "22px", why: "artifact 40" },
  { on: CHROME, sel: ".hmi-nav-top", prop: "fontSize", want: "13.5px", why: "artifact 1993 (was 15px)" },
  { on: CHROME, sel: ".hmi-nav-top", prop: "backgroundColor", want: "rgba(0, 0, 0, 0)", why: "artifact 1993 declares no background" },
  { on: CHROME, sel: ".hmi-nav-top", prop: "borderBottomWidth", want: "2px", why: "artifact 1993 reserves 2px transparent" },
  { on: CHROME, sel: ".hmi-nav-panel-inner", prop: "gap", want: "56px", why: "artifact 73" },
  { on: CHROME, sel: ".hmi-nav-panel-inner", prop: "padding", want: "32px 48px 38px", why: "artifact 73" },
  { on: CHROME, sel: ".hmi-nav-cols", prop: "gap", want: "40px", why: "artifact 79" },
  { on: CHROME, sel: ".hmi-nav-colhead", prop: "fontSize", want: "9.5px", why: "artifact 82" },
  { on: CHROME, sel: ".hmi-nav-col ul > li > a", prop: "fontSize", want: "13.5px", why: "artifact 86" },

  // ── quick read (artifact 440-457) ──────────────────────────────────────
  // Was a rounded left-bar callout with an Inter semibold label and the three
  // facets as a BULLETED LIST. v3 is a plain box with a mono label and a
  // 3-column card grid under 2px burgundy rules.
  { on: ["isMetal"], sel: ".hmi-quick-read", prop: "padding", want: "22px 24px", why: "artifact 440" },
  { on: ["isMetal"], sel: ".hmi-quick-read", prop: "borderRadius", want: "0px", why: "artifact 440 (was 0 12px 12px 0)" },
  { on: ["isMetal"], sel: ".hmi-quick-read-label", prop: "fontSize", want: "9.5px", why: "artifact 441 (was Inter 11.5px)" },
  { on: ["isMetal"], sel: ".hmi-quick-read ul", prop: "display", want: "grid", why: "artifact 443 (was a bulleted list)" },
  { on: ["isMetal"], sel: ".hmi-quick-read ul", prop: "gap", want: "24px", why: "artifact 443" },
  { on: ["isMetal"], sel: ".hmi-quick-read ul > li", prop: "borderTopColor", want: "#8b2a4a", why: "artifact 444" },
  { on: ["isMetal"], sel: ".hmi-quick-read ul > li", prop: "fontSize", want: "13.5px", why: "artifact 446" },

  // ── the global weight floor (artifact 25, 29, 1366) ────────────────────
  // v3 declares font-weight 7 times in 2,400 lines and all 7 are 400; it has
  // zero <strong> and zero <b>. Assert on elements that were measured at 500,
  // 600 or 700 before v3-type.scss stated the floor once.
  { on: ["isMetal"], sel: "th", prop: "fontWeight", want: "400", why: "artifact 1366 (was 600). Scoped: not every screen renders a table." },
  { on: DETAIL, sel: ".snav .grp > a.sec", prop: "fontWeight", want: "400", why: "rail was 500/600" },
]

// rgb() -> hex so expectations can be written the way the artifact writes them.
// Alpha is preserved rather than discarded: an earlier version folded
// `rgba(0, 0, 0, 0)` (transparent) into `#000000`, which reported a correctly
// transparent nav trigger as solid black. A normaliser that loses information
// manufactures failures, and a gate that manufactures failures stops being read.
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

for (const p of PAGES) {
  // sharedTail = References / Sources / Update history. v3 renders all three as
  // body sections (artifact 1347, 1389, 1427) AND as numbered rails 07/08/09
  // anchored to them (artifact 1795). They were previously stripped from the
  // rail and re-rendered as icon links, with Sources pointing at the global
  // archive — v3's Sources section is topic-scoped ("every document in the
  // corpus that reports on {{ page.topic }}", artifact 1391), so it must be an
  // in-page anchor.
  const blocks = SPEC.screens[p.screen] ?? []
  const dataKey = p.screen.replace(/^is/, "").toLowerCase()
  const suppressed = new Set(SPEC.tailSuppressed?.[dataKey] ?? [])
  const tail = p.rail ? SPEC.sharedTail.filter((t) => !suppressed.has(t)) : []
  const want = [...blocks, ...(p.rail ? SPEC.railBlocks : []), ...tail]

  let res
  try {
    await page.goto(base + p.url, { waitUntil: "networkidle0", timeout: 30000 })
    res = await page.evaluate(
      (want, absent, styles) => {
        // Presence is matched on VISIBLE TEXT, not on a class, because the
        // point is whether the reader can see the block — not whether some
        // element with the right name exists somewhere.
        const text = (document.body.innerText || "").toLowerCase()
        const missing = want.filter((b) => !text.includes(b.toLowerCase()))

        const present = absent.filter((s) => document.querySelector(s) !== null)

        const styleFails = []
        for (const a of styles) {
          const el = document.querySelector(a.sel)
          if (!el) {
            styleFails.push({ ...a, got: "NO SUCH ELEMENT" })
            continue
          }
          styleFails.push({ ...a, got: getComputedStyle(el)[a.prop] })
        }
        return { missing, present, styleFails }
      },
      want,
      ABSENT,
      STYLES.filter((s) => s.on === "*" || (s.on === "detail" && p.rail) || (Array.isArray(s.on) && s.on.includes(p.screen))),
    )
  } catch (e) {
    failures.push({ page: p.url, kind: "load", sel: p.url, prop: "-", want: "200", got: String(e.message).slice(0, 60) })
    continue
  }

  for (const b of res.missing) {
    failures.push({ page: p.url, kind: "present", sel: `block "${b}"`, prop: "exists", want: "yes", got: "MISSING" })
  }
  for (const s of res.present) {
    failures.push({ page: p.url, kind: "absent", sel: s, prop: "exists", want: "no", got: "PRESENT (old markup)" })
  }
  for (const f of res.styleFails) {
    const got = NORM(f.got)
    if (got !== f.want) {
      failures.push({ page: p.url, kind: "style", sel: f.sel, prop: f.prop, want: f.want, got, why: f.why })
    }
  }
}

await browser.close()

if (!failures.length) {
  console.log("check:v3 — all assertions pass")
  process.exit(0)
}

let lastPage = null
let lastKind = null
for (const f of failures) {
  if (f.page !== lastPage) {
    console.log(`\n${f.page}`)
    lastPage = f.page
    lastKind = null
  }
  if (f.kind !== lastKind) {
    console.log(`  [${f.kind}]`)
    lastKind = f.kind
  }
  console.log(`    ${f.sel} · ${f.prop} · want ${f.want} · got ${f.got}`)
}

const by = (k) => failures.filter((f) => f.kind === k).length
console.log(
  `\ncheck:v3 FAILED — ${failures.length} (present ${by("present")}, absent ${by("absent")}, style ${by("style")}, load ${by("load")})`,
)
process.exit(1)
