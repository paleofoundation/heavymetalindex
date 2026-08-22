#!/usr/bin/env node
/**
 * build.mjs — assemble the Heavy Metal Tested & Certified Program Manual.
 *
 * Concatenates the program-manual content files (this directory) into a single
 * master markdown for the requested edition, then leaves rendering to
 * tools/standards/render-program-manual.mjs.
 *
 * Two editions are produced from one content set:
 *   internal  — the complete manual, including Part 6 (Program Operations) and
 *               the internal-use notice. For ICS staff.
 *   public    — the external edition: Part 6 and the internal notice are
 *               dropped, and the external "How to read" front-matter is used.
 *               Everything retained is already firewall-safe (no brand-level
 *               data; the methodology it describes is published on
 *               heavymetalcertified.com).
 *
 * Usage:
 *   node data/workbench/program-manual/build.mjs --edition=internal
 *   node data/workbench/program-manual/build.mjs --edition=public
 *   node data/workbench/program-manual/build.mjs --edition=both   (default)
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const HERE = path.dirname(fileURLToPath(import.meta.url))
const BUILD = path.join(HERE, "build")

// Document order. `editions` restricts a file to specific editions.
const MANIFEST = [
  { file: "00-internal-notice.md",       editions: ["internal"] },
  { file: "07-primer-intro.md",          editions: ["primer"] },
  { file: "01-edition.md",               editions: ["internal", "public"] },
  { file: "02-toc.md",                   editions: ["internal", "public"] },
  { file: "03-how-to-read-internal.md",  editions: ["internal"] },
  { file: "03-how-to-read-public.md",    editions: ["public"] },
  { file: "05-orientation.md",           editions: ["internal", "public", "primer"] },
  { file: "10-part1-why.md",             editions: ["internal", "public"] },
  { file: "20-part2-program.md",         editions: ["internal", "public"] },
  { file: "30-part3-standards.md",       editions: ["internal", "public"] },
  { file: "40-part4-testing.md",         editions: ["internal", "public"] },
  { file: "50-part5-methodology.md",     editions: ["internal", "public"] },
  { file: "60-part6-operations.md",      editions: ["internal"] },
  { file: "90-colophon.md",              editions: ["internal", "public"] },
  { file: "95-references.md",            editions: ["internal", "public"] },
  { file: "08-primer-next.md",           editions: ["primer"] },
]

// Engine-implementation shibboleths that must never appear in either edition
// (the wiki/HMTc firewall keeps the pooling engine's code workbench-side).
const FORBIDDEN = ["MAX_SOURCE_SHARE", "subcategory-roles.json", "bootstrap CI"]

function assemble(edition) {
  const parts = [`<!--\nHeavy Metal Tested and Certified, Program Manual\nEdition: ${edition}\nGenerated: build stamp omitted for reproducibility\nSource: data/workbench/program-manual/\n-->\n`]
  for (const entry of MANIFEST) {
    if (!entry.editions.includes(edition)) continue
    const p = path.join(HERE, entry.file)
    if (!fs.existsSync(p)) {
      console.error(`[build] MISSING content file: ${entry.file}`)
      process.exit(2)
    }
    parts.push(`\n<!-- ${entry.file} -->\n`)
    parts.push(fs.readFileSync(p, "utf8").trimEnd())
    parts.push("\n")
  }
  const master = parts.join("\n")

  const hits = FORBIDDEN.filter((t) => master.toLowerCase().includes(t.toLowerCase()))
  if (hits.length) {
    console.warn(`[build] FIREWALL WARNING (${edition}): forbidden token(s) present: ${hits.join(", ")}`)
  } else {
    console.log(`[build] firewall check clean (${edition}).`)
  }

  // Em-dash guard (cert house style forbids em dashes in prose).
  const emdashes = (master.match(/—/g) || []).length
  if (emdashes) console.warn(`[build] STYLE WARNING (${edition}): ${emdashes} em dash(es) present.`)

  fs.mkdirSync(BUILD, { recursive: true })
  const outName = edition === "internal"
    ? "HMTc-Program-Manual-Internal-2026.md"
    : edition === "primer"
      ? "HMTc-Program-Team-Primer-2026.md"
      : "HMTc-Program-Manual-Public-2026.md"
  const out = path.join(BUILD, outName)
  fs.writeFileSync(out, master, "utf8")
  const words = master.split(/\s+/).length
  console.log(`[build] wrote ${path.relative(process.cwd(), out)} (${master.length} bytes, ~${words} words)`)
  return out
}

const editionArg = (process.argv.find((a) => a.startsWith("--edition=")) || "--edition=all").split("=")[1]
const editions = editionArg === "both"
  ? ["internal", "public"]
  : editionArg === "all"
    ? ["internal", "public", "primer"]
    : [editionArg]
for (const e of editions) assemble(e)
