#!/usr/bin/env node
// Render icon.svg into a macOS .iconset of PNGs using sharp (already a repo
// dependency). The build script then runs `iconutil -c icns` on the output.
// Degrades cleanly: if sharp or the SVG is unavailable, exits non-zero and the
// build script proceeds without a custom icon.

import path from "node:path"
import fs from "node:fs"
import { fileURLToPath } from "node:url"

const here = path.dirname(fileURLToPath(import.meta.url))
const svgPath = path.join(here, "icon.svg")
const outDir = process.argv[2] || path.join(here, "AppIcon.iconset")

const SIZES = [
  ["icon_16x16.png", 16], ["icon_16x16@2x.png", 32],
  ["icon_32x32.png", 32], ["icon_32x32@2x.png", 64],
  ["icon_128x128.png", 128], ["icon_128x128@2x.png", 256],
  ["icon_256x256.png", 256], ["icon_256x256@2x.png", 512],
  ["icon_512x512.png", 512], ["icon_512x512@2x.png", 1024],
]

let sharp
try {
  sharp = (await import("sharp")).default
} catch {
  console.error("sharp not available; skipping custom icon")
  process.exit(2)
}

if (!fs.existsSync(svgPath)) {
  console.error("icon.svg not found; skipping custom icon")
  process.exit(2)
}

fs.mkdirSync(outDir, { recursive: true })
const svg = fs.readFileSync(svgPath)
for (const [name, size] of SIZES) {
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(path.join(outDir, name))
}
console.log(`wrote ${SIZES.length} PNGs to ${outDir}`)
