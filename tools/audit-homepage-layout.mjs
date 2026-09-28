#!/usr/bin/env node
// Homepage layout guard.
//
// wiki/index.md is the public homepage. Its body is one designed HTML layout
// (div.hmi-v3-home and the sections inside it). Ingest sessions twice appended
// a markdown heading and a "recently added / added on <date>" paragraph after
// that layout, and those paragraphs shipped on heavymetalindex.com.
//
// This audit fails when the file contains a markdown heading, or any prose
// that is not inside a designed block. Designed blocks are the YAML
// frontmatter, HTML comments, and the allowlisted sections of the homepage
// wrapper. Ledger counts and the other homepage generators write only inside
// their marker blocks; they do not get a pass to append free prose.
//
// Wired into npm test, .husky/pre-commit, and prebuild. Exit 1 on any finding.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
])

// Direct children of div.hmi-v3-home. A new section is a design change and
// has to be added here in the same commit. A batch-log section is not.
const HOME_CHILD_CLASSES = new Set([
  "hmi-v3-hero",
  "hmi-v3-start",
  "hmi-v3-split",
  "hmi-v3-registries",
  "hmi-home-metals",
  "hmi-v3-trust",
  "hmi-v3-rev",
])

/**
 * @param {string} markdown
 * @returns {{line: number, message: string}[]}
 */
export function homepageLayoutViolations(markdown) {
  const violations = []
  const fm = String(markdown).match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/)
  if (!fm) {
    violations.push({ line: 1, message: "Homepage is missing YAML frontmatter." })
    return violations
  }

  const base = fm[0].length
  const body = markdown.slice(base)
  const lineAt = (bodyIndex) => {
    let n = 1
    const stop = Math.min(base + bodyIndex, markdown.length)
    for (let k = 0; k < stop; k++) if (markdown[k] === "\n") n += 1
    return n
  }

  const stack = []
  let i = 0
  let text = ""
  let textAt = 0
  let textStarted = false
  let rootClosed = false

  function flushText() {
    const visible = text.replace(/\s+/g, " ").trim()
    text = ""
    textStarted = false
    if (!visible) return
    const heading = /^#{1,6}\s+\S/.test(visible)
    const inDesignedSection = stack.some((el) => el.classes.some((c) => HOME_CHILD_CLASSES.has(c)))
    if (heading || !inDesignedSection) {
      const kind = heading ? "Markdown heading" : "Prose"
      violations.push({
        line: lineAt(textAt),
        message: `${kind} outside the designed homepage blocks: ${visible.slice(0, 140)}`,
      })
    }
  }

  while (i < body.length) {
    if (body.startsWith("<!--", i)) {
      flushText()
      const end = body.indexOf("-->", i + 4)
      i = end === -1 ? body.length : end + 3
      continue
    }

    if (body[i] === "<") {
      flushText()
      const tag = readTag(body, i)
      const tagLine = lineAt(i)
      i = tag.next
      if (!tag.name) {
        violations.push({ line: tagLine, message: "Unparsed HTML tag in the homepage." })
        continue
      }
      if (tag.closing) {
        if (!stack.length || stack[stack.length - 1].name !== tag.name) {
          violations.push({
            line: tagLine,
            message: `Closing tag </${tag.name}> does not match the open homepage markup.`,
          })
        } else {
          const closed = stack.pop()
          if (!stack.length && closed.classes.includes("hmi-v3-home")) rootClosed = true
        }
        continue
      }
      if (stack.length === 0) {
        if (rootClosed || tag.name !== "div" || !tag.classes.includes("hmi-v3-home")) {
          violations.push({
            line: tagLine,
            message: `Element <${tag.name}> sits outside the designed homepage wrapper.`,
          })
        }
      } else if (stack.length === 1 && stack[0].classes.includes("hmi-v3-home")) {
        const allowed = tag.classes.some((c) => HOME_CHILD_CLASSES.has(c))
        if (tag.name !== "section" || !allowed) {
          violations.push({
            line: tagLine,
            message: `Element <${tag.name}> is not one of the designed homepage sections.`,
          })
        }
      }
      if (!tag.selfClosing && !VOID_TAGS.has(tag.name)) {
        stack.push({ name: tag.name, classes: tag.classes })
      }
      continue
    }

    if (!textStarted && !/\s/.test(body[i])) {
      textAt = i
      textStarted = true
    }
    text += body[i]
    i += 1
  }
  flushText()

  if (!rootClosed) {
    violations.push({
      line: lineAt(body.length),
      message: "Homepage is missing the closing tag of div.hmi-v3-home.",
    })
  }
  if (stack.length) {
    violations.push({
      line: lineAt(body.length),
      message: `Homepage leaves <${stack[stack.length - 1].name}> unclosed.`,
    })
  }
  return violations
}

function readTag(s, i) {
  let j = i + 1
  let quote = null
  while (j < s.length) {
    const c = s[j]
    if (quote) {
      if (c === quote) quote = null
    } else if (c === '"' || c === "'") {
      quote = c
    } else if (c === ">") {
      break
    }
    j += 1
  }
  const raw = s.slice(i, Math.min(j + 1, s.length))
  const named = raw.match(/^<\/?([A-Za-z][A-Za-z0-9-]*)/)
  const classMatch = raw.match(/\sclass\s*=\s*("([^"]*)"|'([^']*)')/i)
  const classValue = classMatch ? (classMatch[2] ?? classMatch[3] ?? "") : ""
  return {
    raw,
    next: Math.min(j + 1, s.length),
    name: named ? named[1].toLowerCase() : "",
    closing: raw.startsWith("</"),
    selfClosing: /\/\s*>$/.test(raw),
    classes: classValue.split(/\s+/).filter(Boolean),
  }
}

function main() {
  const file = path.resolve(process.argv[2] || "wiki/index.md")
  if (!fs.existsSync(file)) {
    console.error(`audit-homepage-layout: ${file} does not exist`)
    process.exit(1)
  }
  const violations = homepageLayoutViolations(fs.readFileSync(file, "utf8"))
  if (violations.length) {
    const rel = path.relative(process.cwd(), file)
    for (const v of violations) console.error(`  ${rel}:${v.line}: ${v.message}`)
    console.error(`audit-homepage-layout: FAIL (${violations.length} finding(s))`)
    process.exit(1)
  }
  console.log("audit-homepage-layout: PASS")
}

const thisFile = fileURLToPath(import.meta.url)
if (process.argv[1] && path.resolve(process.argv[1]) === thisFile) main()
