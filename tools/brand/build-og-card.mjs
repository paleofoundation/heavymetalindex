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
 * Brand tokens follow docs/design/METHOD.md: burgundy, warm white, blush,
 * Lora display type, Inter body, and IBM Plex Mono labels. The shared card
 * represents the public reference; page-specific titles live in link metadata.
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

// --- Brand tokens (docs/design/METHOD.md) -----------------------------------
const C = {
  burgundy: "#8b2a4a",
  deep: "#6f2139",
  white: "#fffdfb",
  blush: "#f6ecf0",
  pink: "#eddfe4",
}

// Representative elements covered by the public index. Tiles identify elements
// and atomic numbers only; they do not imply species equivalence or thresholds.
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
    ["Lora", 400],
    ["Inter", 400],
    ["Inter", 600],
    ["IBM Plex Mono", 500],
    ["IBM Plex Mono", 600],
  ]
  const data = await Promise.all(specs.map(([n, w]) => fetchTtf(n, w)))
  return specs.map(([name, weight], i) => ({ name, weight, style: "normal", data: data[i] }))
}

// --- tiny hyperscript helper for satori vnodes ------------------------------
const h = (type, style, children) => ({ type, props: { style, children } })

function metalTile([num, sym, name], index) {
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 125,
      height: 126,
      padding: "12px 15px 13px",
      borderRadius: 3,
      backgroundColor: index % 2 === 0 ? C.white : C.pink,
      color: C.deep,
    },
    [
      h("div", { display: "flex", fontFamily: "IBM Plex Mono", fontWeight: 500, fontSize: 14 }, num),
      h(
        "div",
        { display: "flex", flex: 1, alignItems: "center", fontFamily: "IBM Plex Mono", fontWeight: 600, fontSize: 43 },
        sym,
      ),
      h("div", { display: "flex", fontFamily: "Inter", fontWeight: 600, fontSize: 11, letterSpacing: 0.8 }, name),
    ],
  )
}

function card() {
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      width: 1200,
      height: 630,
      backgroundColor: C.burgundy,
      color: C.white,
    },
    [
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          height: 390,
          padding: "52px 64px 40px",
        },
        [
          h("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [
            h("div", { display: "flex", alignItems: "center" }, [
              h("div", { display: "flex", width: 9, height: 9, backgroundColor: C.pink, marginRight: 13 }, []),
              h("div", { display: "flex", fontFamily: "IBM Plex Mono", fontWeight: 500, fontSize: 18, letterSpacing: 2.5, color: C.pink }, "PUBLIC EVIDENCE INDEX"),
            ]),
            h("div", { display: "flex", fontFamily: "Inter", fontWeight: 600, fontSize: 21 }, "heavymetalindex.com"),
          ]),
          h("div", { display: "flex", fontFamily: "Lora", fontWeight: 400, fontSize: 105, letterSpacing: -2.8, marginTop: 46, lineHeight: 1.12 }, "Heavy Metal Index"),
          h("div", { display: "flex", fontFamily: "Inter", fontWeight: 400, fontSize: 31, color: C.blush, marginTop: 24, lineHeight: 1.4 }, "Trace heavy-metal evidence from food to source."),
        ],
      ),
      h("div", { display: "flex", flexDirection: "column", height: 240, padding: "31px 64px 28px", backgroundColor: C.deep }, [
        h("div", { display: "flex", justifyContent: "space-between" }, METALS.map(metalTile)),
        h("div", { display: "flex", fontFamily: "Inter", fontWeight: 400, fontSize: 17, color: C.pink, marginTop: 29 }, "Operated by the Institute of Contaminant Standards"),
      ]),
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
