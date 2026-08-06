#!/usr/bin/env node
/**
 * render-manual-html.mjs
 *
 * Converts the master Program Manual markdown to a single self-contained
 * HTML file ready for browser-based PDF export (Safari File > Export as PDF,
 * Chrome Print > Save as PDF). The HTML is styled to read as a serious
 * professional document with a serif body, sans-serif headings, generous
 * margins, and consistent spacing throughout.
 *
 * Why HTML rather than direct PDF: PDF rendering on this machine requires
 * either pandoc + a LaTeX engine (not installed) or a headless browser
 * pipeline (puppeteer with platform-specific Chromium). The HTML path
 * works with any browser already installed on macOS, produces a
 * professional-looking PDF on export, and keeps the build pipeline
 * dependency-free beyond the `marked` library.
 *
 * Usage:
 *   node tools/standards/render-manual-html.mjs
 *
 * Output:
 *   data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.html
 */

import fs from "node:fs"
import path from "node:path"
import { marked } from "marked"

const REPO_ROOT = process.cwd()
const MASTER_MD = path.join(REPO_ROOT, "data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.md")
const OUTPUT_HTML = path.join(REPO_ROOT, "data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.html")

// Inline CSS designed to produce a professional, readable document when
// printed via a browser. Page breaks are encouraged at H1 (chapter starts).
// Margins, font sizes, and spacing tuned for letter-size paper.
const CSS = `
@page {
  size: letter;
  margin: 0.85in 0.85in 0.85in 0.85in;
}

@media print {
  html { font-size: 11pt; }
  h1 { page-break-before: always; }
  h1:first-of-type { page-break-before: avoid; }
  h2, h3 { page-break-after: avoid; }
  table, blockquote { page-break-inside: avoid; }
}

html {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 11.5pt;
  line-height: 1.55;
  color: #111;
  background: #fff;
  -webkit-font-smoothing: antialiased;
}

body {
  max-width: 7in;
  margin: 0 auto;
  padding: 0 1em;
}

h1, h2, h3, h4, h5, h6 {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  line-height: 1.25;
  color: #000;
  margin-top: 1.8em;
  margin-bottom: 0.6em;
}

h1 {
  font-size: 2.0em;
  border-bottom: 2px solid #9c1b1b;
  padding-bottom: 0.3em;
  margin-top: 2.2em;
  color: #9c1b1b;
}

h2 {
  font-size: 1.45em;
  color: #9c1b1b;
  margin-top: 2em;
}

h3 {
  font-size: 1.2em;
  color: #333;
}

h4 {
  font-size: 1.05em;
  color: #333;
  font-style: italic;
}

p {
  margin: 0.5em 0 0.9em 0;
  text-align: justify;
}

a {
  color: #9c1b1b;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

strong { font-weight: 700; }
em { font-style: italic; }

blockquote {
  margin: 1.2em 0;
  padding: 0.5em 1.2em;
  border-left: 3px solid #9c1b1b;
  background: #fafafa;
  font-style: normal;
}

blockquote p {
  margin: 0.4em 0;
}

ul, ol {
  padding-left: 1.4em;
  margin: 0.5em 0 0.9em 0;
}

li {
  margin: 0.25em 0;
}

li > p {
  margin: 0.15em 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.2em 0;
  font-size: 0.95em;
}

th, td {
  border: 1px solid #ccc;
  padding: 0.5em 0.7em;
  text-align: left;
  vertical-align: top;
}

th {
  background: #f1ece8;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  color: #000;
}

tr:nth-child(even) td {
  background: #fafafa;
}

code {
  font-family: "SF Mono", "Menlo", "Courier New", monospace;
  font-size: 0.9em;
  background: #f4f4f4;
  padding: 0.1em 0.3em;
  border-radius: 2px;
}

pre {
  background: #f7f7f7;
  border: 1px solid #ddd;
  padding: 0.8em 1em;
  overflow-x: auto;
  font-size: 0.9em;
  line-height: 1.4;
}

pre code {
  background: transparent;
  padding: 0;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 2em 0;
}

/* Front matter title page has special styling */
h1:first-of-type {
  text-align: center;
  font-size: 2.4em;
  border-bottom: none;
  margin-top: 0.5em;
}

/* Table of Contents heading hierarchy is dense */
nav ul, .toc ul { margin: 0.3em 0; }
`

function buildHtml(markdown) {
  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false,
  })

  const bodyHtml = marked.parse(markdown)

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>HMTc Infant and Child Foods Program Manual, 2026 Edition</title>
<meta name="author" content="Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)">
<style>${CSS}</style>
</head>
<body>
${bodyHtml}
</body>
</html>
`
}

function main() {
  if (!fs.existsSync(MASTER_MD)) {
    console.error(`[render-manual-html] master markdown not found: ${MASTER_MD}`)
    console.error("[render-manual-html] run 'node tools/standards/build-program-manual.mjs' first.")
    process.exit(2)
  }

  const md = fs.readFileSync(MASTER_MD, "utf8")
  console.log(`[render-manual-html] read ${md.length} bytes of master markdown.`)

  const html = buildHtml(md)
  fs.writeFileSync(OUTPUT_HTML, html, "utf8")
  console.log(`[render-manual-html] wrote ${path.relative(REPO_ROOT, OUTPUT_HTML)}`)
  console.log(`[render-manual-html] size: ${html.length} bytes.`)
  console.log("")
  console.log("Next step: open the HTML file in Safari (or any browser),")
  console.log("then File > Export as PDF (Safari) or Print > Save as PDF (Chrome).")
}

main()
