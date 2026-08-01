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

// [selector|cssProperty, expected] — or a __count / __hidden pseudo-check.
// A `~` prefix on the expected value means "starts with".
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
  [".hmi-v3-start-row|gridTemplateColumns", "340px 758px 150px"],
  [".hmi-v3-start-t|fontSize", "26px"],
  [".hmi-v3-start-t|fontWeight", "400"],

  // ── split bands (v3 149-161, 222-242, 2018) ──
  [".hmi-v3-split-inner|gridTemplateColumns", "300px 948px"],
  [".hmi-v3-split-inner|gap", "96px"],
  [".hmi-v3-split-head h2|fontSize", "34px"],
  [".hmi-v3-split-head h2|fontWeight", "400"],
  [".hmi-v3-split-body > p|fontSize", "17px"],
  [".hmi-v3-rule|backgroundColor", "rgb(139, 42, 74)"],

  // ── registries (v3 163-175, 2022) ──
  [".hmi-v3-registries|gap", "40px"],
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
  [".hmi-v3-trust-col h3|fontSize", "23px"],
  [".hmi-v3-trust-col h3|fontWeight", "400"],

  // ── questions (v3 229-239) ──
  [".hmi-v3-q > summary|fontSize", "23px"],
  [".hmi-v3-q > summary|fontWeight", "400"],

  // ── recently revised (v3 244-259, 2024) ──
  [".hmi-v3-rev-row|gridTemplateColumns", "~92px"],
  [".hmi-v3-rev-d|fontSize", "10.5px"],
  [".hmi-v3-rev-t|color", "rgb(28, 67, 173)"],

  // ── footer (v3 1482-1506) ──
  ["footer.site-footer|backgroundColor", "rgb(74, 21, 38)"],
  [".site-footer-inner|padding", "76px 56px 40px"],
  [".site-footer-inner|gap", "72px"],
  [".site-footer-logo|fontSize", "24px"],
]

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
    const parts = k.split("|"), sel = parts[0], prop = parts[1]
    const el = document.querySelector(sel)
    if (!el) { fails.push(sel + " MISSING"); continue }
    const got = getComputedStyle(el)[prop]
    const ok = exp.charAt(0) === "~" ? got.indexOf(exp.slice(1)) === 0 : got === exp
    if (!ok) fails.push(sel + " {" + prop + "} -> " + got + " (want " + exp + ")")
  }
  return { viewport: innerWidth, checked: E.length, passed: E.length - fails.length, fails: fails }
})()`

function snippet() {
  return RUNNER_BODY.replace("__TABLE__", JSON.stringify(V3_HOME_EXPECTATIONS))
}

const headlessIdx = process.argv.indexOf("--headless")

if (headlessIdx === -1) {
  console.log("v3 conformance — paste this into DevTools on the page under test.")
  console.log(`(${V3_HOME_EXPECTATIONS.length} assertions, every one read from the v3 artifact)\n`)
  console.log(snippet())
  console.log("\nBuild gate: npm i -D puppeteer && node tools/design/v3-conformance.mjs --headless <url>")
  process.exit(0)
}

const url = process.argv[headlessIdx + 1] ?? "http://localhost:8099/index.html"
const width = Number(process.env.V3_WIDTH ?? 1440)

let puppeteer
try {
  puppeteer = (await import("puppeteer")).default
} catch {
  console.error("--headless needs puppeteer: npm i -D puppeteer")
  process.exit(2)
}

const browser = await puppeteer.launch({ headless: "new" })
const page = await browser.newPage()
await page.setViewport({ width, height: 1200 })
await page.goto(url, { waitUntil: "networkidle0" })
const result = await page.evaluate(snippet())
await browser.close()

for (const f of result.fails) console.log(`  FAIL  ${f}`)
console.log(`\nv3 conformance @${width}px: ${result.passed}/${result.checked} passed`)
process.exit(result.fails.length ? 1 : 0)
