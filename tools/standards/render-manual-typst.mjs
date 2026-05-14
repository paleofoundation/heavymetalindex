#!/usr/bin/env node
/**
 * render-manual-typst.mjs
 *
 * Converts the master Program Manual markdown to a Typst document, then
 * compiles it to publication-quality PDF using the typst-template.typ
 * book template.
 *
 * The converter walks the marked tokenizer's AST and emits Typst syntax.
 * Typst's strengths over a CSS-based renderer: real paragraph justification
 * with hyphenation, proper widow/orphan control, page-break-aware chapter
 * starts, running heads and page numbers in margins, footnote positioning,
 * and a typesetting engine that produces output the reader recognizes as
 * a serious published book rather than a long PDF.
 *
 * Usage:
 *   node tools/standards/render-manual-typst.mjs           # writes .typ
 *   node tools/standards/render-manual-typst.mjs --pdf     # writes .typ + .pdf
 *
 * Output:
 *   data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.typ
 *   data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.pdf (with --pdf)
 */

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { marked } from "marked"

const REPO_ROOT = process.cwd()
const MASTER_MD = path.join(REPO_ROOT, "data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.md")
const TEMPLATE_PATH = path.join(REPO_ROOT, "tools/standards/typst-template.typ")
const OUTPUT_TYP = path.join(REPO_ROOT, "data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.typ")
const OUTPUT_PDF = path.join(REPO_ROOT, "data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.pdf")
const FONT_PATH = path.join(process.env.HOME, "Desktop/reportify/fonts")

// Characters in markdown text that need Typst escaping.
// Typst reserves: # @ $ ` < > = / \ * _ [ ] { } ~ ' " - . + : ; |
// In text mode, most of these are fine. Escape the ones that introduce
// Typst syntax in the contexts we generate.
function escapeTypst(s) {
  if (typeof s !== "string") return s
  return s
    .replace(/\\/g, "\\\\")
    .replace(/#/g, "\\#")
    .replace(/\$/g, "\\$")
    .replace(/`/g, "\\`")
    .replace(/\*/g, "\\*")
    .replace(/_/g, "\\_")
    .replace(/@/g, "\\@")
    .replace(/</g, "\\<")
    .replace(/>/g, "\\>")
}

// Walk a marked token and emit Typst syntax.
function renderToken(token) {
  switch (token.type) {
    case "space":
      return "\n"
    case "heading": {
      // Skip h1 inside body — title page already has it. Reformat to
      // Typst heading syntax with appropriate level.
      const text = renderInline(token.tokens)
      const prefix = "=".repeat(Math.min(token.depth, 5))
      return `\n${prefix} ${text}\n\n`
    }
    case "paragraph": {
      const text = renderInline(token.tokens)
      return `${text}\n\n`
    }
    case "blockquote": {
      const inner = token.tokens.map(renderToken).join("").trim()
      return `#quote(block: true)[${inner}]\n\n`
    }
    case "list": {
      const items = token.items
        .map((item) => {
          const inner = item.tokens
            .map(renderToken)
            .join("")
            .trim()
            .replace(/\n+/g, " ")
          const marker = token.ordered ? "+" : "-"
          return `${marker} ${inner}`
        })
        .join("\n")
      return `${items}\n\n`
    }
    case "list_item": {
      // Items typically rendered by the list case above; this is a fallback.
      return token.tokens.map(renderToken).join("")
    }
    case "code": {
      // Raw block. Strip language hint (Typst raw doesn't need it for our
      // purposes; the template handles styling).
      return `\`\`\`\n${token.text}\n\`\`\`\n\n`
    }
    case "hr":
      return "\n#line(length: 100%, stroke: 0.4pt + rgb(\"#bbb\"))\n\n"
    case "table":
      return renderTable(token)
    case "html":
      // Skip raw HTML comments and tags. Manual sometimes has marker
      // comments inside markdown that should not surface in print.
      return ""
    case "text":
      return renderInline(token.tokens || [{ type: "text", text: token.text }])
    default:
      // Inline tokens may arrive here from nested structures.
      if (token.tokens) return renderInline(token.tokens)
      if (token.raw) return escapeTypst(token.raw)
      return ""
  }
}

function renderInline(tokens) {
  if (!tokens) return ""
  let out = ""
  for (const t of tokens) {
    switch (t.type) {
      case "text":
        out += escapeTypst(t.text)
        break
      case "strong":
        out += `*${renderInline(t.tokens)}*`
        break
      case "em":
        out += `_${renderInline(t.tokens)}_`
        break
      case "codespan":
        out += `\`${t.text}\``
        break
      case "link": {
        const text = renderInline(t.tokens)
        const href = t.href
        // Escape special chars in URL.
        const safeHref = href.replace(/"/g, "%22")
        out += `#link("${safeHref}")[${text}]`
        break
      }
      case "br":
        out += " \\\n"
        break
      case "del":
        out += `#strike[${renderInline(t.tokens)}]`
        break
      case "html":
        // Skip inline HTML in the manual prose.
        break
      default:
        if (t.text) out += escapeTypst(t.text)
        break
    }
  }
  return out
}

function renderTable(token) {
  const header = token.header
  const rows = token.rows
  const cols = header.length

  // Build a Typst table.
  let out = `#table(\n  columns: ${cols},\n  align: (col, row) => left,\n`
  out += `  table.header(\n`
  out += header
    .map((cell) => {
      const text = renderInline(cell.tokens).replace(/\n+/g, " ").trim()
      return `    [${text}]`
    })
    .join(",\n")
  out += `\n  ),\n`
  for (const row of rows) {
    for (const cell of row) {
      const text = renderInline(cell.tokens).replace(/\n+/g, " ").trim()
      out += `  [${text}],\n`
    }
  }
  out += `)\n\n`
  return out
}

function convertMarkdownToTypst(md) {
  marked.setOptions({
    gfm: true,
    breaks: false,
  })
  const tokens = marked.lexer(md)
  return tokens.map(renderToken).join("")
}

function main() {
  if (!fs.existsSync(MASTER_MD)) {
    console.error(`[render-manual-typst] master markdown not found: ${MASTER_MD}`)
    console.error("[render-manual-typst] run 'node tools/standards/build-program-manual.mjs' first.")
    process.exit(2)
  }
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`[render-manual-typst] template not found: ${TEMPLATE_PATH}`)
    process.exit(2)
  }

  const md = fs.readFileSync(MASTER_MD, "utf8")
  console.log(`[render-manual-typst] read ${md.length} bytes of master markdown.`)

  // The master markdown begins with HTML comments and the front-matter
  // title page. We strip the HTML comments because the Typst converter
  // doesn't pass through HTML, but the title page's "# Heavy Metal Tested
  // & Certified" h1 would compete with the template's title page. We
  // remove the title-page h1 and the manual's own table-of-contents page
  // entries because Typst's template provides both natively.
  let content = md

  // Remove HTML comments.
  content = content.replace(/<!--[\s\S]*?-->/g, "")

  // Convert.
  console.log("[render-manual-typst] converting markdown to Typst...")
  const typstBody = convertMarkdownToTypst(content)

  // Assemble the full Typst document.
  const templateRel = path.relative(path.dirname(OUTPUT_TYP), TEMPLATE_PATH)
  const fullDoc = `// HMTc Program Manual, generated by render-manual-typst.mjs
// Source: ${path.relative(REPO_ROOT, MASTER_MD)}
// Template: ${path.relative(REPO_ROOT, TEMPLATE_PATH)}

#import "${templateRel}": book

#show: book.with(
  title: [Heavy Metal Tested & Certified],
  subtitle: [Infant and Child Foods Program Manual],
  author: "Karen Pendergrass",
  edition: "2026 Edition",
  publisher: "Paleo Certified, Inc. dba The Paleo Foundation",
)

${typstBody}
`

  fs.mkdirSync(path.dirname(OUTPUT_TYP), { recursive: true })
  fs.writeFileSync(OUTPUT_TYP, fullDoc, "utf8")
  console.log(`[render-manual-typst] wrote ${path.relative(REPO_ROOT, OUTPUT_TYP)}`)
  console.log(`[render-manual-typst] size: ${fullDoc.length} bytes, ${fullDoc.split("\n").length} lines.`)

  if (process.argv.includes("--pdf")) {
    console.log("[render-manual-typst] compiling to PDF via Typst...")
    const cmd = `typst compile --root "${REPO_ROOT}" --font-path "${FONT_PATH}" "${OUTPUT_TYP}" "${OUTPUT_PDF}"`
    try {
      execSync(cmd, { stdio: "inherit" })
      console.log(`[render-manual-typst] wrote ${path.relative(REPO_ROOT, OUTPUT_PDF)}`)
    } catch (e) {
      console.error("[render-manual-typst] Typst compile failed.")
      console.error("[render-manual-typst] the .typ source is still available for inspection at " + path.relative(REPO_ROOT, OUTPUT_TYP))
      process.exit(3)
    }
  }
}

main()
