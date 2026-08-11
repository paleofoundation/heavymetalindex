// Regenerate styles/hmi-v3.css — the DS stylesheet shipped to Claude Design.
//
// It is the compiled Quartz v3 stylesheet (public/index.css, the REAL styling
// the live site serves) with the Google-Fonts @import prepended. The compiled
// CSS itself carries no @font-face/@import because Quartz injects the font
// stylesheet into the HTML <head> separately (fontOrigin: "googleFonts"); a
// design built in Claude Design receives only the styles.css @import closure,
// so the fonts have to travel inside the shipped CSS. This mirrors exactly how
// the live site loads Lora / Inter / IBM Plex Mono (see quartz.config.ts).
//
// Reproducible: buildCmd runs this before tsc, so a re-sync re-derives the
// stylesheet from the current public/index.css automatically.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, "..", "..")
const src = join(repoRoot, "public", "index.css")
const outDir = join(here, "styles")
const out = join(outDir, "hmi-v3.css")

// The exact families + weights from quartz.config.ts typography.
const FONT_IMPORT =
  '@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap");\n'

const css = readFileSync(src, "utf8")
mkdirSync(outDir, { recursive: true })
writeFileSync(out, FONT_IMPORT + css)
console.log(
  `build-css: wrote ${out} (${FONT_IMPORT.length + css.length} bytes; Google-Fonts @import prepended)`,
)
