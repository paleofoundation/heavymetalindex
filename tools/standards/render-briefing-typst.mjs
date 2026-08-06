#!/usr/bin/env node
/**
 * render-briefing-typst.mjs
 *
 * Renders a Standards Briefing markdown document into a publication-quality
 * PDF using the same Typst typographic family as the HMTc Program Manual
 * (FreightText Pro body, Avenir Next display, red Institute of Contaminant Standards (ICS) accent),
 * sized for a standalone communication piece rather than a bound volume.
 *
 * Input markdown should carry a YAML frontmatter block with:
 *   - title
 *   - subtitle    (optional)
 *   - overline    (optional, defaults to "A Standards Briefing · The Institute of Contaminant Standards (ICS)")
 *   - author      (defaults to "Karen Pendergrass")
 *   - author_title (defaults to "Standards Architect, The Institute of Contaminant Standards (ICS)")
 *   - date        (optional)
 *   - slug        (used for output filename)
 *
 * Usage:
 *   node tools/standards/render-briefing-typst.mjs --input=<path.md>
 *   node tools/standards/render-briefing-typst.mjs --input=<path.md> --pdf
 *   node tools/standards/render-briefing-typst.mjs --input=<path.md> --pdf --output=<path.pdf>
 *
 * Default output paths derive from the input slug:
 *   data/workbench/public-briefings/build/<slug>.typ
 *   data/workbench/public-briefings/build/<slug>.pdf
 */

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { marked } from "marked"

const REPO_ROOT = process.cwd()
const TEMPLATE_PATH = path.join(REPO_ROOT, "tools/standards/typst-template-briefing.typ")
const DEFAULT_BUILD_DIR = path.join(REPO_ROOT, "data/workbench/public-briefings/build")
const FONT_PATH = path.join(process.env.HOME, "Desktop/reportify/fonts")

function parseArgs() {
  const args = process.argv.slice(2)
  const opts = { pdf: false }
  for (const a of args) {
    if (a === "--pdf") opts.pdf = true
    else if (a.startsWith("--input=")) opts.input = a.slice("--input=".length)
    else if (a.startsWith("--output=")) opts.output = a.slice("--output=".length)
  }
  if (!opts.input) {
    console.error("[render-briefing-typst] --input=<path.md> is required.")
    process.exit(2)
  }
  return opts
}

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/)
  if (!m) return { frontmatter: {}, body: md }
  const fmText = m[1]
  const body = m[2]
  const fm = {}
  for (const line of fmText.split("\n")) {
    const km = line.match(/^([A-Za-z0-9_]+):\s*(.+)$/)
    if (!km) continue
    let value = km[2].trim()
    // Strip quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    // YAML arrays: simple [a, b, c] form
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value.slice(1, -1).split(",").map((v) => v.trim())
    }
    fm[km[1]] = value
  }
  return { frontmatter: fm, body }
}

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
    case "code":
      return `\`\`\`\n${token.text}\n\`\`\`\n\n`
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
        const safeHref = t.href.replace(/"/g, "%22")
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
  const opts = parseArgs()
  const inputPath = path.isAbsolute(opts.input) ? opts.input : path.join(REPO_ROOT, opts.input)
  if (!fs.existsSync(inputPath)) {
    console.error(`[render-briefing-typst] input not found: ${inputPath}`)
    process.exit(2)
  }
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`[render-briefing-typst] template not found: ${TEMPLATE_PATH}`)
    process.exit(2)
  }

  const raw = fs.readFileSync(inputPath, "utf8")
  const { frontmatter: fm, body } = parseFrontmatter(raw)
  const slug = fm.slug || path.basename(inputPath, ".md")

  console.log(`[render-briefing-typst] briefing: ${slug}`)
  console.log(`[render-briefing-typst] title: ${fm.title || "(no title)"}`)

  // Convert
  let typstBody = convertMarkdownToTypst(body)

  // Superscript inline citations (Cochrane / Vancouver style)
  typstBody = typstBody.replace(
    /([A-Za-z0-9\.\)\"’”])\s?\[([1-9]\d*(?:\s*,\s*[1-9]\d*)*)\]/g,
    (match, before, nums) => `${before}#super[\\[${nums}\\]]`,
  )

  // Build the Typst doc
  const buildDir = DEFAULT_BUILD_DIR
  fs.mkdirSync(buildDir, { recursive: true })
  const outTypPath = path.join(buildDir, `${slug}.typ`)
  const outPdfPath = opts.output ? (path.isAbsolute(opts.output) ? opts.output : path.join(REPO_ROOT, opts.output)) : path.join(buildDir, `${slug}.pdf`)

  const templateRel = path.relative(path.dirname(outTypPath), TEMPLATE_PATH)
  const escapeStr = (s) => (s || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"')

  const fullDoc = `// HMTc Standards Briefing — ${slug}
// Generated by render-briefing-typst.mjs
// Source: ${path.relative(REPO_ROOT, inputPath)}
// Template: ${path.relative(REPO_ROOT, TEMPLATE_PATH)}

#import "${templateRel}": briefing

#show: briefing.with(
  overline: "${escapeStr(fm.overline || "A Standards Briefing · The Institute of Contaminant Standards (ICS)")}",
  title: [${fm.title || "Briefing"}],
  ${fm.subtitle ? `subtitle: [${fm.subtitle}],` : ""}
  author: "${escapeStr(fm.author || "Karen Pendergrass")}",
  author-title: "${escapeStr(fm.author_title || "Standards Architect, The Institute of Contaminant Standards (ICS)")}",
  ${fm.date ? `date: "${escapeStr(fm.date)}",` : ""}
)

${typstBody}
`

  fs.writeFileSync(outTypPath, fullDoc, "utf8")
  console.log(`[render-briefing-typst] wrote ${path.relative(REPO_ROOT, outTypPath)}`)

  if (opts.pdf) {
    console.log("[render-briefing-typst] compiling to PDF via Typst...")
    const cmd = `typst compile --root "${REPO_ROOT}" --font-path "${FONT_PATH}" "${outTypPath}" "${outPdfPath}"`
    try {
      execSync(cmd, { stdio: "inherit" })
      console.log(`[render-briefing-typst] wrote ${path.relative(REPO_ROOT, outPdfPath)}`)
    } catch (e) {
      console.error("[render-briefing-typst] Typst compile failed.")
      process.exit(3)
    }
  }
}

main()
