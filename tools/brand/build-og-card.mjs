#!/usr/bin/env node
/**
 * build-og-card.mjs — generates the Heavy Metal Index social-share card.
 *
 * Why this exists: Quartz ships a default Open Graph image (quartz/static/
 * og-image.png — the "Quartz 4 / quartz.jzhao.xyz" crystal card). With no
 * CustomOgImages emitter enabled, Head.tsx falls back to that file for EVERY
 * shared page, so links to heavymetalindex.com previewed as the Quartz logo.
 *
 * Per-page build-time cards (Quartz's CustomOgImages) were rejected on purpose:
 * the corpus is heading to ~23k pages and rendering one webp per page would add
 * tens of minutes to an already-heavy Vercel build. A single, well-branded
 * static card fixes the off-brand preview, scales infinitely, and costs nothing
 * at build time. If topic-specific cards are ever wanted, do them on-demand via
 * a Vercel OG function (request-time, edge-cached), not at build time.
 *
 * Output: quartz/static/og-image.png (the canonical 1200x630 card). The Static
 * emitter copies it to public/static/og-image.png on build; this script also
 * writes public/static directly so a local preview updates without a rebuild.
 *
 * Brand tokens are mirrored from quartz.config.ts (answerthis-derived palette,
 * Inter + IBM Plex Mono). Copy is the site's own voice (wiki/index.md hero), not
 * invented marketing language — per CLAUDE.md Part 15 register.
 *
 * Run: node tools/brand/build-og-card.mjs
 */
import satori from "satori"
import sharp from "sharp"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..", "..")
const FONT_CACHE = path.join(ROOT, "quartz", ".quartz-cache", "fonts")

// --- Brand tokens (mirror quartz.config.ts lightMode) -----------------------
const C = {
  bg: "#fdfdfc", // --light
  panel: "#ffffff", // tile fill
  ink: "#1a1d24", // --dark (wordmark)
  body: "#3f4249", // tagline (between --darkgray and --gray, AA on bg)
  gray: "#767067", // --gray (AA secondary text)
  hairline: "#e6e3dd", // ~ --lightgray, tile + frame borders
  burgundy: "#8B2A4A", // --secondary, used sparingly
}

// The eight metals behind the HMT&C analyte list (number, symbol, name) —
// Pb, Cd, As, Hg + Ni, Al, Sn, Cr. Rendered as a periodic strip so the card
// mirrors the full certification roster, not just the headline four.
// (The analyte list splits As→tAs/iAs, Hg→tHg/MeHg, Cr→Cr-VI; tiles show the
// parent element + atomic number, which is the legible motif here.)
const METALS = [
  ["82", "Pb", "LEAD"],
  ["48", "Cd", "CADMIUM"],
  ["33", "As", "ARSENIC"],
  ["80", "Hg", "MERCURY"],
  ["28", "Ni", "NICKEL"],
  ["13", "Al", "ALUMINUM"],
  ["50", "Sn", "TIN"],
  ["24", "Cr", "CHROMIUM"],
]

// --- Minimal Google-fonts TTF fetcher (mirrors quartz/util/og.tsx) ----------
async function fetchTtf(rawName, weight) {
  const family = rawName.replaceAll(" ", "+")
  const cachePath = path.join(FONT_CACHE, `${family}-${weight}`)
  try {
    return await fs.readFile(cachePath)
  } catch {
    /* miss → fetch below */
  }
  const cssRes = await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`, {
    // A real UA makes Google serve TTF (woff2 otherwise), matching Quartz.
    headers: { "User-Agent": "Mozilla/5.0" },
  })
  const css = await cssRes.text()
  const match = /url\((https:\/\/fonts\.gstatic\.com\/s\/.*?\.ttf)\)/.exec(css)
  if (!match) throw new Error(`Could not resolve TTF for ${rawName} ${weight}: ${cssRes.statusText}`)
  const ttf = Buffer.from(await (await fetch(match[1])).arrayBuffer())
  await fs.mkdir(FONT_CACHE, { recursive: true })
  await fs.writeFile(cachePath, ttf)
  return ttf
}

async function loadFonts() {
  const specs = [
    ["Inter", 400],
    ["Inter", 600],
    ["Inter", 800],
    ["IBM Plex Mono", 500],
    ["IBM Plex Mono", 600],
  ]
  const data = await Promise.all(specs.map(([n, w]) => fetchTtf(n, w)))
  return specs.map(([name, weight], i) => ({ name, weight, style: "normal", data: data[i] }))
}

// --- tiny hyperscript helper for satori vnodes ------------------------------
const h = (type, style, children) => ({ type, props: { style, children } })

function metalTile([num, sym, name]) {
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 114,
      height: 114,
      padding: "11px 11px 10px",
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      backgroundColor: C.panel,
    },
    [
      h("div", { display: "flex", fontFamily: "IBM Plex Mono", fontWeight: 500, fontSize: 14, color: C.gray }, num),
      h(
        "div",
        { display: "flex", flex: 1, alignItems: "center", fontFamily: "IBM Plex Mono", fontWeight: 600, fontSize: 34, color: C.ink },
        sym,
      ),
      h("div", { display: "flex", fontFamily: "Inter", fontWeight: 600, fontSize: 10.5, letterSpacing: 0.5, color: C.gray }, name),
    ],
  )
}

function card() {
  return h(
    "div",
    {
      display: "flex",
      width: 1200,
      height: 630,
      backgroundColor: C.bg,
      border: `1px solid ${C.hairline}`,
    },
    [
      // Burgundy spine — the one sparing use of the accent, frames the card in-feed.
      h("div", { display: "flex", width: 10, height: 630, backgroundColor: C.burgundy }, []),
      // Content column
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: "74px 80px 70px",
        },
        [
          // Top: header row (kicker left, domain/attribution right) + wordmark + tagline
          h("div", { display: "flex", flexDirection: "column" }, [
            h("div", { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, [
              h("div", { display: "flex", alignItems: "center", marginTop: 4 }, [
                h("div", { display: "flex", width: 13, height: 13, backgroundColor: C.burgundy, marginRight: 14 }, []),
                h(
                  "div",
                  { display: "flex", fontFamily: "IBM Plex Mono", fontWeight: 500, fontSize: 23, letterSpacing: 3, color: C.gray },
                  "PUBLIC EVIDENCE INDEX",
                ),
              ]),
              h("div", { display: "flex", flexDirection: "column", alignItems: "flex-end" }, [
                h("div", { display: "flex", fontFamily: "Inter", fontWeight: 600, fontSize: 25, color: C.ink }, "heavymetalindex.com"),
                h(
                  "div",
                  { display: "flex", fontFamily: "Inter", fontWeight: 400, fontSize: 17, color: C.gray, marginTop: 7 },
                  "Operated by the Institute of Contaminant Standards (ICS)",
                ),
              ]),
            ]),
            h(
              "div",
              { display: "flex", fontFamily: "Inter", fontWeight: 800, fontSize: 96, letterSpacing: -2, color: C.ink, marginTop: 26, lineHeight: 1.02 },
              "Heavy Metal Index",
            ),
            h(
              "div",
              { display: "flex", fontFamily: "Inter", fontWeight: 400, fontSize: 35, color: C.body, marginTop: 24, maxWidth: 880, lineHeight: 1.32 },
              "Trace heavy-metal evidence from food to source.",
            ),
          ]),
          // Bottom band: ruled divider, then the eight HMT&C metals as a full-width strip
          h("div", { display: "flex", flexDirection: "column" }, [
            h("div", { display: "flex", height: 1, backgroundColor: C.hairline, marginBottom: 32 }, []),
            h("div", { display: "flex", justifyContent: "space-between" }, METALS.map(metalTile)),
          ]),
        ],
      ),
    ],
  )
}

async function main() {
  const fonts = await loadFonts()
  const svg = await satori(card(), { width: 1200, height: 630, fonts })
  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  const targets = [
    path.join(ROOT, "quartz", "static", "og-image.png"), // canonical source (committed)
    path.join(ROOT, "public", "static", "og-image.png"), // current build output (gitignored)
  ]
  for (const t of targets) {
    try {
      await fs.mkdir(path.dirname(t), { recursive: true })
      await fs.writeFile(t, png)
      console.log(`wrote ${path.relative(ROOT, t)} (${(png.length / 1024).toFixed(1)} KB)`)
    } catch (err) {
      console.warn(`skip ${path.relative(ROOT, t)}: ${err.message}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
