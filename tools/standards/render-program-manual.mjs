#!/usr/bin/env node
/**
 * render-program-manual.mjs
 *
 * Renders the program-level "Heavy Metal Tested & Certified — Program Manual"
 * master markdown to a publication-quality PDF via the shared Typst book
 * template (tools/standards/typst-template.typ).
 *
 * This is a sibling of render-manual-typst.mjs (which renders the per-category
 * standards manuals). The conversion logic (marked AST -> Typst, auto-TOC,
 * superscript inline citations) is identical and proven; the difference is that
 * the cover/running-head metadata (title, subtitle, edition, author, publisher)
 * is passed on the command line so the same source can be stamped as the
 * Internal Edition or the Public Edition without editing the script.
 *
 * Usage:
 *   node tools/standards/render-program-manual.mjs \
 *     --input=data/workbench/program-manual/build/HMTc-Program-Manual-Internal-2026.md \
 *     --subtitle="Program Manual" --edition="2026 Edition · Internal" --pdf
 *
 * Metadata flags (all optional; sensible program-level defaults):
 *   --title=      cover title            (default "Heavy Metal Tested & Certified")
 *   --subtitle=   cover subtitle         (default "Program Manual")
 *   --edition=    edition string         (default "2026 Edition")
 *   --author=     author line            (default "Karen Pendergrass")
 *   --publisher=  publisher line         (default ICS long form)
 *   --running=    running-head title     (default "HMTc Program Manual")
 */

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { marked } from "marked"

const REPO_ROOT = process.cwd()

function flag(name, fallback) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.split("=").slice(1).join("=") : fallback
}

const inputArg = flag("input", "")
if (!inputArg) {
  console.error("[render-program-manual] --input=<master.md> is required.")
  process.exit(2)
}
const MASTER_MD = path.resolve(REPO_ROOT, inputArg)
const TEMPLATE_PATH = path.join(REPO_ROOT, "tools/standards/typst-template.typ")
const OUTPUT_TYP = MASTER_MD.replace(/\.md$/, ".typ")
const OUTPUT_PDF = MASTER_MD.replace(/\.md$/, ".pdf")
const FONT_PATH = process.env.TYPST_FONT_PATH || path.join(process.env.HOME, "Desktop/reportify/fonts")

const META = {
  title: flag("title", "Heavy Metal Tested & Certified"),
  subtitle: flag("subtitle", "Program Manual"),
  edition: flag("edition", "2026 Edition"),
  author: flag("author", "Karen Pendergrass"),
  publisher: flag("publisher", "Paleo Certified, Inc., operating as the Institute of Contaminant Standards (ICS)"),
  running: flag("running", "HMTc Program Manual"),
}

// Characters in markdown text that need Typst escaping.
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

function renderToken(token) {
  switch (token.type) {
    case "space":
      return "\n"
    case "heading": {
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
      return token.tokens.map(renderToken).join("")
    }
    case "code": {
      return `\`\`\`\n${token.text}\n\`\`\`\n\n`
    }
    case "hr":
      return "\n#line(length: 100%, stroke: 0.4pt + rgb(\"#bbb\"))\n\n"
    case "table":
      return renderTable(token)
    case "html":
      return ""
    case "text":
      return renderInline(token.tokens || [{ type: "text", text: token.text }])
    default:
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
  const colSpec = `(${Array(cols).fill("1fr").join(", ")})`
  const allowBreaks = (s) => s.replace(/_/g, "_​").replace(/-(?=[A-Za-z])/g, "-​")

  let out = `#table(\n  columns: ${colSpec},\n  align: (col, row) => left + top,\n`
  out += `  table.header(\n`
  out += header
    .map((cell) => {
      const text = allowBreaks(renderInline(cell.tokens).replace(/\n+/g, " ").trim())
      return `    [${text}]`
    })
    .join(",\n")
  out += `\n  ),\n`
  for (const row of rows) {
    for (const cell of row) {
      const text = allowBreaks(renderInline(cell.tokens).replace(/\n+/g, " ").trim())
      out += `  [${text}],\n`
    }
  }
  out += `)\n\n`
  return out
}

function convertMarkdownToTypst(md) {
  marked.setOptions({ gfm: true, breaks: false })
  const tokens = marked.lexer(md)
  return tokens.map(renderToken).join("")
}

function main() {
  if (!fs.existsSync(MASTER_MD)) {
    console.error(`[render-program-manual] master markdown not found: ${MASTER_MD}`)
    process.exit(2)
  }
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`[render-program-manual] template not found: ${TEMPLATE_PATH}`)
    process.exit(2)
  }

  const md = fs.readFileSync(MASTER_MD, "utf8")
  console.log(`[render-program-manual] read ${md.length} bytes of master markdown.`)

  let content = md
  content = content.replace(/<!--[\s\S]*?-->/g, "")
  content = content.replace(
    /^# Table of Contents[\s\S]*?(?=^# )/m,
    "# Table of Contents\n\nTYPSTOUTLINEPLACEHOLDER\n\n"
  )

  console.log("[render-program-manual] converting markdown to Typst...")
  let typstBody = convertMarkdownToTypst(content)

  // Superscript inline citations [N] / [N, M] in prose (leave reference-list
  // and table-cell bracketed values full-size).
  typstBody = typstBody.replace(
    /([A-Za-z0-9\.\)\"’”])\s?\[([1-9]\d*(?:\s*,\s*[1-9]\d*)*)\]/g,
    (match, before, nums) => `${before}#super[\\[${nums}\\]]`,
  )

  const typstOutline = `
#show outline.entry: it => {
  set text(font: ("FreightTextProBook", "Georgia", "Times New Roman"), size: 10.5pt)
  it
}

#show outline.entry.where(level: 1): it => {
  v(0.9em, weak: true)
  set text(font: ("FreightTextProBook", "Georgia", "Times New Roman"), size: 11pt, weight: "semibold")
  it
}

#outline(
  title: none,
  target: heading.where(level: 1).or(heading.where(level: 2)),
  indent: auto,
  depth: 2,
)

`
  typstBody = typstBody.replace(/TYPSTOUTLINEPLACEHOLDER/g, typstOutline)

  const templateRel = path.relative(path.dirname(OUTPUT_TYP), TEMPLATE_PATH)
  const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')
  const fullDoc = `// Heavy Metal Tested & Certified — Program Manual
// Generated by render-program-manual.mjs
// Source: ${path.relative(REPO_ROOT, MASTER_MD)}

#import "${templateRel}": book

#show: book.with(
  title: [${META.title}],
  subtitle: [${META.subtitle}],
  author: "${esc(META.author)}",
  edition: "${esc(META.edition)}",
  publisher: "${esc(META.publisher)}",
)

${typstBody}
`

  fs.mkdirSync(path.dirname(OUTPUT_TYP), { recursive: true })
  fs.writeFileSync(OUTPUT_TYP, fullDoc, "utf8")
  console.log(`[render-program-manual] wrote ${path.relative(REPO_ROOT, OUTPUT_TYP)}`)

  if (process.argv.includes("--pdf")) {
    console.log("[render-program-manual] compiling to PDF via Typst...")
    const cmd = `typst compile --root "${REPO_ROOT}" --font-path "${FONT_PATH}" "${OUTPUT_TYP}" "${OUTPUT_PDF}"`
    try {
      execSync(cmd, { stdio: "inherit" })
      console.log(`[render-program-manual] wrote ${path.relative(REPO_ROOT, OUTPUT_PDF)}`)
    } catch (e) {
      console.error("[render-program-manual] Typst compile failed. The .typ source is at " + path.relative(REPO_ROOT, OUTPUT_TYP))
      process.exit(3)
    }
  }
}

main()
