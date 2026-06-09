#!/usr/bin/env node
// Isolated headless renderer for the wishlist fetcher's LAST-RESORT MDPI path.
//
// Why this exists, and why it is a separate process:
//   MDPI (10.3390/*) publisher PDFs sit behind a Cloudflare JS challenge that
//   no User-Agent / header set clears from a plain fetch — verified 403/HTML
//   against real DOIs. The deterministic rescue in find-candidates.mjs is
//   Europe PMC's getPdf endpoint, which covers every MDPI paper that has a PMC
//   deposit (≈all of the in-scope, food/metals-occurrence MDPI corpus, since
//   those cluster in PMC-indexed journals: IJERPH, Nutrients, Foods, Toxics,
//   Molecules…). The ONLY residual is an MDPI paper with no PMC copy at all —
//   ~0% of observed losses. For that sliver a real browser is the only route.
//
//   A browser can hang, leak a Chromium process, or blow past the fetch stage's
//   wall-clock budget. So it must never run inside find-candidates.mjs's event
//   loop. The parent spawns THIS script as a child process and hard-kills it
//   (SIGKILL) on timeout; a hung browser dies with the child and can't stall
//   FRANK's time-boxed tick. Playwright is loaded by dynamic import HERE only,
//   so it is never a hard dependency of the pipeline: if it isn't installed we
//   exit 66 and the parent degrades to a clean, logged skip.
//
// Contract with the parent (find-candidates.mjs → fetchMdpiHeadless):
//   argv:  node mdpi-headless.mjs <doi> <absolute-target-path>
//   exit 0  → a valid %PDF was written to <target>
//   exit 66 → Playwright not installed (EX_NOINPUT-ish): "unavailable", not a
//             real failure — install with `npm i -D playwright && npx playwright
//             install chromium` and set HMI_MDPI_HEADLESS=1 to enable.
//   exit 1  → reached a browser but could not obtain a PDF (challenge held,
//             paper genuinely not OA at the publisher, network error, timeout).
//
// This file is dormant unless HMI_MDPI_HEADLESS=1; find-candidates.mjs never
// even spawns it otherwise.

import fs from "node:fs"

const [doi, target] = process.argv.slice(2)
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
// Internal self-timeout, defensive only — the parent's SIGKILL is the real
// guarantee. Kept under the parent's MDPI_HEADLESS_TIMEOUT_MS default (45s).
const SELF_TIMEOUT_MS = parseInt(process.env.HMI_MDPI_HEADLESS_TIMEOUT_MS || "40000", 10)

function looksLikePdf(buffer) {
  if (!buffer || buffer.length < 5) return false
  return buffer.subarray(0, 1024).toString("latin1").includes("%PDF-")
}

if (!doi || !target) {
  process.stderr.write("usage: mdpi-headless.mjs <doi> <target>\n")
  process.exit(1)
}

// Self-destruct so a wedged browser launch can't outlive its usefulness even if
// the parent's kill were somehow missed.
const selfKill = setTimeout(() => process.exit(1), SELF_TIMEOUT_MS)
selfKill.unref?.()

let chromium
try {
  ;({ chromium } = await import("playwright"))
} catch {
  process.exit(66) // Playwright not installed → "unavailable", handled by parent
}

let browser
try {
  browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ userAgent: UA, acceptDownloads: false })
  const page = await context.newPage()

  // Resolve the DOI to the MDPI article landing page and let Cloudflare clear.
  const landingResp = await page.goto(`https://doi.org/${doi}`, {
    waitUntil: "domcontentloaded",
    timeout: 25000,
  })
  const landingUrl = page.url()
  if (!/mdpi\.com/i.test(landingUrl)) throw new Error(`not an MDPI landing page: ${landingUrl}`)
  // Give any interstitial / challenge a moment to settle before requesting the
  // binary. networkidle is best-effort; ignore its timeout.
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {})
  void landingResp

  // The PDF lives at <article-url>/pdf. Fetch it through the browser context's
  // request API so it carries the cookies/clearance the page just established —
  // a bare fetch with the same URL still 403s.
  const pdfUrl = `${landingUrl.replace(/\/+$/, "")}/pdf`
  const resp = await context.request.get(pdfUrl, {
    headers: { Accept: "application/pdf", Referer: landingUrl },
    timeout: 25000,
  })
  if (!resp.ok()) throw new Error(`pdf http ${resp.status()}`)
  const body = Buffer.from(await resp.body())
  if (!looksLikePdf(body)) throw new Error("body not pdf (challenge held)")

  fs.writeFileSync(target, body)
  await browser.close().catch(() => {})
  clearTimeout(selfKill)
  process.exit(0)
} catch (err) {
  process.stderr.write(`mdpi-headless: ${err?.message || err}\n`)
  try { await browser?.close() } catch {}
  clearTimeout(selfKill)
  process.exit(1)
}
