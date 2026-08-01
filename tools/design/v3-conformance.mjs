#!/usr/bin/env node
// v3 conformance check — makes "identical to the design" an assertion instead
// of an opinion.
//
// Every expectation is a value read out of "Heavy Metal Index v3.dc.html": the
// global type rules (lines 23-32), HOME A markup (99-262), the data arrays
// (2140-2191), the grid constants (2013-2028) and the footer (1482-1506).
//
// WHY THIS EXISTS. The homepage was reported as done twice on spot checks and
// was wrong both times, because a spot check only inspects elements you already
// expect to be there. It cannot see a "See also" band the design never had, and
// it cannot see a property the v3 rules are silent about — the metal table's
// header rendered as a solid burgundy bar for exactly that reason, since no v3
// rule declared `background` and the legacy `th` fill kept applying underneath.
//
// HOW TO RUN.
//   node tools/design/v3-conformance.mjs                 # prints a console snippet
//   node tools/design/v3-conformance.mjs --headless URL  # needs puppeteer
//
// The repo has no headless browser today, so the default path prints a
// self-contained snippet to paste into DevTools on the page under test. Install
// puppeteer and the same table becomes a build gate.

// [selector|cssProperty, expected] — or a __count / __hidden / __cols pseudo-check.
// A `~` prefix on the expected value means "starts with".
//
// __cols counts grid tracks rather than asserting their pixel widths, because
// resolved track widths depend on the viewport: the registry grid is five
// 236.8px tracks at 1440 and would be some other arithmetic at 1200. The track
// COUNT is the thing v3 actually specifies (`repeat(w ? 5 : 2, …)`), and it is
// what catches a collapse that fails to happen at the 1150px breakpoint.
export const V3_HOME_EXPECTATIONS = [
  // ── structure: HOME A is eight sections, and nothing else ──
  ["__count .hmi-v3-ledger-row", "6"],
  ["__count .hmi-v3-start-row", "5"],
  ["__count .hmi-v3-registry", "5"],
  ["__count .hmi-metal-table tbody tr", "8"],
  ["__count .hmi-v3-trust-col", "3"],
  ["__count .hmi-v3-q", "6"],
  ["__count .hmi-v3-rev-row", "9"],
  ["__hidden .page-header", "true"],
  ["__hidden .hmi-related", "true"],

  // ── hero (v3 102-131, 2013-2015) ──
  [".hmi-v3-hero|backgroundColor", "rgb(139, 42, 74)"],
  ["__cols .hmi-v3-hero-inner", "2"],
  [".hmi-v3-hero-inner|gridTemplateColumns", "848px 400px"],
  [".hmi-v3-hero-inner|padding", "96px 48px 88px"],
  [".hmi-v3-hero-inner|gap", "96px"],
  [".hmi-v3-hero-copy h1|fontSize", "58px"],
  [".hmi-v3-hero-copy h1|fontWeight", "400"],
  [".hmi-v3-hero-dek|fontSize", "17px"],
  [".hmi-v3-hero-search > .search-button|height", "56px"],
  [".hmi-v3-hero-search > .search-button|borderRadius", "3px"],
  [".hmi-v3-hero-search-go|backgroundColor", "rgb(111, 33, 57)"],

  // ── corpus ledger (v3 116-129) ──
  [".hmi-v3-ledger-title|fontSize", "16px"],
  [".hmi-v3-ledger-refresh|fontSize", "9.5px"],
  [".hmi-v3-ledger-k|fontSize", "12.5px"],
  [".hmi-v3-ledger-v|fontSize", "15px"],

  // ── start here (v3 134-147, 2016) ──
  [".hmi-v3-start|backgroundColor", "rgb(255, 253, 251)"],
  [".hmi-v3-start-inner|padding", "64px 48px 72px"],
  ["__cols .hmi-v3-start-row", "3"],
  [".hmi-v3-start-row|gridTemplateColumns", "340px 750px 150px"],
  [".hmi-v3-start-row|padding", "26px 4px"],
  [".hmi-v3-start-row|gap", "48px"],
  [".hmi-v3-start-n|textAlign", "right"],
  [".hmi-v3-start-t|fontSize", "26px"],
  [".hmi-v3-start-t|fontWeight", "400"],

  // ── split bands (v3 149-161, 222-242, 2018) ──
  ["__cols .hmi-v3-split-inner", "2"],
  [".hmi-v3-split-inner|gridTemplateColumns", "300px 948px"],
  [".hmi-v3-split-inner|gap", "96px"],
  [".hmi-v3-split-inner|padding", "96px 48px"],
  [".hmi-v3-split-head h2|fontSize", "34px"],
  [".hmi-v3-split-head h2|fontWeight", "400"],
  [".hmi-v3-split-body > p|fontSize", "17px"],
  [".hmi-v3-rule|backgroundColor", "rgb(139, 42, 74)"],

  // ── registries (v3 163-175, 2022) ──
  // The grid is `.hmi-v3-registries-inner`; `.hmi-v3-registries` is the outer
  // section wrapper and is display:block. An earlier version of this table
  // asserted the gap on the wrapper, where `gap` computes to `normal` on any
  // non-grid element — a failure that looked like a CSS defect and was not.
  ["__cols .hmi-v3-registries-inner", "5"],
  [".hmi-v3-registries-inner|gap", "40px"],
  [".hmi-v3-registries-inner|padding", "72px 48px 80px"],
  [".hmi-v3-registry-n|fontSize", "22px"],
  [".hmi-v3-registry-t|fontSize", "22px"],
  [".hmi-v3-registry-t|fontWeight", "400"],

  // ── metal registry (v3 177-204). Text on a hairline, never a filled bar.
  //    These exist because layers only win where v3 speaks. ──
  [".hmi-metal-table th|backgroundColor", "rgba(0, 0, 0, 0)"],
  [".hmi-metal-table td|backgroundColor", "rgba(0, 0, 0, 0)"],
  [".hmi-metal-table th|fontSize", "9.5px"],
  [".hmi-metal-table th|color", "rgb(169, 161, 162)"],
  [".hmi-metal-table th|borderBottomColor", "rgb(207, 196, 198)"],
  [".hmi-metal-name a|fontSize", "19px"],
  [".hmi-metal-name a|fontWeight", "400"],

  // ── trust (v3 206-220, 2023) ──
  [".hmi-v3-trust|backgroundColor", "rgb(251, 245, 247)"],
  ["__cols .hmi-v3-trust-grid", "3"],
  [".hmi-v3-trust-grid|gap", "64px"],
  [".hmi-v3-trust-col h3|fontSize", "23px"],
  [".hmi-v3-trust-col h3|fontWeight", "400"],

  // ── questions (v3 229-239) ──
  [".hmi-v3-q > summary|fontSize", "23px"],
  [".hmi-v3-q > summary|fontWeight", "400"],

  // ── recently revised (v3 244-259, 2024) ──
  ["__cols .hmi-v3-rev-grid", "3"],
  [".hmi-v3-rev-grid|gap", "0px 64px"],
  [".hmi-v3-rev-row|gridTemplateColumns", "~92px"],
  [".hmi-v3-rev-d|fontSize", "10.5px"],
  [".hmi-v3-rev-t|color", "rgb(28, 67, 173)"],

  // ── footer (v3 1482-1506) ──
  // Deliberately absent from V3_NARROW_OVERRIDES: v3's footer has no ternary,
  // so every one of these must hold at 1100 too.
  ["footer.site-footer|backgroundColor", "rgb(74, 21, 38)"],
  ["__cols .site-footer-inner", "5"],
  [".site-footer-inner|padding", "76px 56px 40px"],
  [".site-footer-inner|gap", "72px"],
  [".site-footer-inner|maxWidth", "1900px"],
  [".site-footer-bottom|padding", "22px 56px 40px"],
  [".site-footer-bottom|gap", "12px 40px"],
  [".site-footer-logo|fontSize", "24px"],
]

// ── the narrow branch (< 1150px) ────────────────────────────────────────────
//
// v3's breakpoint is a single boolean: `const w = this.state.vw >= 1150`
// (artifact 1976). Everything that changes below it is a `w ? … : …` ternary in
// the style block at 2008-2030, and NOTHING ELSE CHANGES. That is the whole
// responsive contract, and it is why this is an override map rather than a
// second list: every wide assertion still holds at 1100 unless it appears here.
//
// A separate narrow list was the previous design and it was the weaker one — it
// re-asserted 14 values and left the other 60 untested below the breakpoint,
// which is exactly the region where every defect of the last round lived.
//
// The five HOME A section wrappers (artifact 135, 164, 178, 207, 245) are plain
// inline styles with no ternary, so their 48px padding is LITERAL at every
// width. They are deliberately absent from this map. An earlier pass invented
// responsive padding for them and shrank all five to 24px; the entries below
// are only those the artifact actually varies.
export const V3_NARROW_OVERRIDES = new Map([
  // heroASt (2014-2015)
  ["__cols .hmi-v3-hero-inner", "1"],
  [".hmi-v3-hero-inner|padding", "56px 24px"],
  [".hmi-v3-hero-inner|gap", "44px"],
  // h1ASt (2016)
  [".hmi-v3-hero-copy h1|fontSize", "36px"],
  // startRowSt (2017-2018)
  ["__cols .hmi-v3-start-row", "1"],
  [".hmi-v3-start-row|gap", "8px"],
  [".hmi-v3-start-row|padding", "20px 2px"],
  // splitSt (2019-2020)
  ["__cols .hmi-v3-split-inner", "1"],
  [".hmi-v3-split-inner|gap", "28px"],
  [".hmi-v3-split-inner|padding", "56px 24px"],
  // registriesSt (2022)
  ["__cols .hmi-v3-registries-inner", "2"],
  [".hmi-v3-registries-inner|gap", "32px 28px"],
  // trustSt (2023)
  ["__cols .hmi-v3-trust-grid", "1"],
  [".hmi-v3-trust-grid|gap", "36px"],
  // revlogSt (2024) — collapses to one column but keeps its 0 64px gap
  ["__cols .hmi-v3-rev-grid", "1"],
])

// Track-width assertions are meaningless once a grid collapses to one column
// (the single track is whatever the viewport leaves), so they are dropped at
// narrow rather than given a fabricated expected value. __cols covers them.
const NARROW_DROP = new Set([
  ".hmi-v3-hero-inner|gridTemplateColumns",
  ".hmi-v3-start-row|gridTemplateColumns",
  ".hmi-v3-split-inner|gridTemplateColumns",
])

export function expectationsFor(width) {
  if (width >= 1150) return V3_HOME_EXPECTATIONS
  return V3_HOME_EXPECTATIONS.filter(([k]) => !NARROW_DROP.has(k)).map(([k, v]) => [
    k,
    V3_NARROW_OVERRIDES.get(k) ?? v,
  ])
}

// The runner is a string so the same implementation serves both execution
// paths: pasted into DevTools verbatim, or handed to page.evaluate() unchanged.
const RUNNER_BODY = `(() => {
  const E = __TABLE__
  const fails = []
  for (const pair of E) {
    const k = pair[0], exp = pair[1]
    if (k.indexOf("__count ") === 0) {
      const got = String(document.querySelectorAll(k.slice(8)).length)
      if (got !== exp) fails.push(k + " -> " + got + " (want " + exp + ")")
      continue
    }
    if (k.indexOf("__hidden ") === 0) {
      const el = document.querySelector(k.slice(9))
      const got = String(!el || getComputedStyle(el).display === "none")
      if (got !== exp) fails.push(k + " -> " + got + " (want " + exp + ")")
      continue
    }
    if (k.indexOf("__cols ") === 0) {
      const el = document.querySelector(k.slice(7))
      if (!el) { fails.push(k + " MISSING"); continue }
      const t = getComputedStyle(el).gridTemplateColumns
      const got = String(t === "none" || !t ? 0 : t.split(/\\s+/).length)
      if (got !== exp) fails.push(k + " -> " + got + " tracks (want " + exp + ")")
      continue
    }
    const parts = k.split("|"), sel = parts[0], prop = parts[1]
    const el = document.querySelector(sel)
    if (!el) { fails.push(sel + " MISSING"); continue }
    const got = getComputedStyle(el)[prop]
    const ok = exp.charAt(0) === "~" ? got.indexOf(exp.slice(1)) === 0 : got === exp
    if (!ok) fails.push(sel + " {" + prop + "} -> " + got + " (want " + exp + ")")
  }
  return { viewport: innerWidth, checked: E.length, passed: E.length - fails.length, fails: fails }
})()`

function snippet(width) {
  return RUNNER_BODY.replace("__TABLE__", JSON.stringify(expectationsFor(width)))
}

// An override whose key is absent from the base table is dead weight that
// silently tests nothing. Catch it here rather than discovering it as a missed
// regression at 1100.
const baseKeys = new Set(V3_HOME_EXPECTATIONS.map(([k]) => k))
const orphans = [...V3_NARROW_OVERRIDES.keys(), ...NARROW_DROP].filter((k) => !baseKeys.has(k))
if (orphans.length) {
  console.error("narrow override keys not present in the wide table:")
  for (const o of orphans) console.error(`  ${o}`)
  process.exit(2)
}

// Both sides of v3's single breakpoint (artifact 1976: vw >= 1150).
const VIEWPORTS = [1440, 1100]

const headlessIdx = process.argv.indexOf("--headless")

if (headlessIdx === -1) {
  const w = Number(process.env.V3_WIDTH ?? 1440)
  console.log("v3 conformance — paste this into DevTools on the page under test.")
  console.log(`(${expectationsFor(w).length} assertions @${w}px, every one read from the v3 artifact)\n`)
  console.log(snippet(w))
  console.log("\nBuild gate: node tools/design/v3-conformance.mjs --headless <url>")
  process.exit(0)
}

const url = process.argv[headlessIdx + 1] ?? "http://localhost:8099/index.html"

let puppeteer
try {
  puppeteer = (await import("puppeteer")).default
} catch {
  console.error("--headless needs puppeteer: npm i -D puppeteer")
  process.exit(2)
}

const browser = await puppeteer.launch({ headless: "new" })
const page = await browser.newPage()
let failed = 0

for (const width of VIEWPORTS) {
  await page.setViewport({ width, height: 1200 })
  await page.goto(url, { waitUntil: "networkidle0" })
  // Re-goto per viewport rather than resizing in place: the page's own inline
  // scripts read the width at load, so a resize alone leaves JS-driven state
  // reporting the previous branch.
  const result = await page.evaluate(snippet(width))
  for (const f of result.fails) console.log(`  FAIL @${width}  ${f}`)
  console.log(`v3 conformance @${width}px: ${result.passed}/${result.checked} passed`)
  failed += result.fails.length
}

await browser.close()
process.exit(failed ? 1 : 0)
