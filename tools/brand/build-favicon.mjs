#!/usr/bin/env node
/**
 * build-favicon.mjs — Heavy Metal Index favicon / site icon.
 *
 * Replaces the default Quartz crystal (quartz/static/icon.png) with a
 * coordinated mark that pairs with the share card: a burgundy periodic tile,
 * white "Pb 82" (the flagship toxic metal — the only legible option for a
 * mark that has to survive 16px). Chosen over a 2x2 abstract grid, which read
 * like a generic app-launcher glyph at tab size; gridEmblem() is kept below as
 * the documented alternate.
 *
 * Writes the canonical quartz/static/icon.png (the Static emitter copies it to
 * public/static, Head uses it as <link rel="icon">, and the Favicon emitter
 * downsizes it to favicon.ico). Also writes public/static directly so a local
 * preview updates without a rebuild.
 *
 * Run: node tools/brand/build-favicon.mjs
 */
import satori from "satori"
import sharp from "sharp"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..", "..")
const FONT_CACHE = path.join(ROOT, "quartz", ".quartz-cache", "fonts")

const BURGUNDY = "#8B2A4A"
const SIZE = 512 // canonical icon size; emitters downscale (favicon.ico → 48px)
const h = (type, style, children) => ({ type, props: { style, children } })

async function fetchTtf(rawName, weight) {
  const family = rawName.replaceAll(" ", "+")
  const cachePath = path.join(FONT_CACHE, `${family}-${weight}`)
  try {
    return await fs.readFile(cachePath)
  } catch {
    /* miss → fetch */
  }
  const cssRes = await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`, {
    headers: { "User-Agent": "Mozilla/5.0" },
  })
  const match = /url\((https:\/\/fonts\.gstatic\.com\/s\/.*?\.ttf)\)/.exec(await cssRes.text())
  if (!match) throw new Error(`Could not resolve TTF for ${rawName} ${weight}`)
  const ttf = Buffer.from(await (await fetch(match[1])).arrayBuffer())
  await fs.mkdir(FONT_CACHE, { recursive: true })
  await fs.writeFile(cachePath, ttf)
  return ttf
}

function tileEmblem() {
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: SIZE,
      height: SIZE,
      backgroundColor: BURGUNDY,
      borderRadius: 112, // squircle; transparent corners survive favicon.ico
      padding: "64px 60px 58px",
    },
    [
      h("div", { display: "flex", fontFamily: "IBM Plex Mono", fontWeight: 500, fontSize: 92, color: "#ffffff", opacity: 0.85 }, "82"),
      h(
        "div",
        { display: "flex", justifyContent: "flex-end", fontFamily: "IBM Plex Mono", fontWeight: 600, fontSize: 248, color: "#ffffff", lineHeight: 1 },
        "Pb",
      ),
    ],
  )
}

// Alternate, not used: burgundy squircle with a 2x2 block of white cells.
function gridEmblem() {
  const cell = () =>
    h("div", { display: "flex", backgroundColor: "#ffffff", borderRadius: 26, width: 150, height: 150 }, [])
  return h(
    "div",
    {
      display: "flex",
      flexWrap: "wrap",
      width: SIZE,
      height: SIZE,
      backgroundColor: BURGUNDY,
      borderRadius: 112,
      alignContent: "center",
      justifyContent: "center",
      gap: 28,
      padding: 28,
    },
    [cell(), cell(), cell(), cell()],
  )
}

async function main() {
  const fonts = [
    { name: "IBM Plex Mono", weight: 500, style: "normal", data: await fetchTtf("IBM Plex Mono", 500) },
    { name: "IBM Plex Mono", weight: 600, style: "normal", data: await fetchTtf("IBM Plex Mono", 600) },
  ]
  const svg = await satori(tileEmblem(), { width: SIZE, height: SIZE, fonts })
  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  const targets = [
    path.join(ROOT, "quartz", "static", "icon.png"), // canonical source (committed)
    path.join(ROOT, "public", "static", "icon.png"), // current build output (gitignored)
  ]
  for (const t of targets) {
    await fs.mkdir(path.dirname(t), { recursive: true })
    await fs.writeFile(t, png)
    console.log(`wrote ${path.relative(ROOT, t)} (${(png.length / 1024).toFixed(1)} KB)`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
