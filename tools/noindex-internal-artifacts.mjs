#!/usr/bin/env node
// noindex-internal-artifacts.mjs — stamp `noindex: true` into the frontmatter of
// internal build artifacts that must never enter Google's index, the sitemap, or
// the answer-engine surface.
//
// WHY THIS EXISTS
// ---------------
// Per CLAUDE.md Parts 8/17/18, batch-ingest reports, lint reports, and the change
// log are internal curator artifacts, not public wiki pages. They are still built
// (and linked from log.md via `[[batch-reports/…]]` wikilinks, and log.md is
// linked from the public overview page), so they cannot simply be dropped from the
// build via quartz.config `ignorePatterns` without breaking those internal links.
// The correct treatment is therefore `noindex, nofollow` (Head.tsx honors the
// `noindex:` frontmatter flag), which keeps the pages reachable for a human
// following an internal link but keeps them out of the index and out of the
// authority signal on the rest of the corpus.
//
// New batch-report and lint files are created continuously by ingest and lint
// runs, and older ones predate the noindex convention, so a one-time stamp would
// silently rot. This generator runs in prebuild and re-asserts the flag every
// build. It is idempotent: a file that already declares `noindex:` is left
// untouched (its value is respected), and diffs are minimal — only files that
// lack the flag are rewritten.
//
// WIRING: prebuild, early (before the emitters/sitemap run so the flag is present
// when Head.tsx and the sitemap emitter read frontmatter).

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()

// Directories whose every markdown file is an internal artifact, plus explicit
// single-file artifacts. Kept deliberately narrow: corpus/ and audits/ carry
// public-facing aggregate content and are intentionally excluded.
const ARTIFACT_DIRS = ["wiki/batch-reports", "wiki/lint"]
const ARTIFACT_FILES = ["wiki/log.md"]

function targets() {
  const out = []
  for (const dir of ARTIFACT_DIRS) {
    const abs = path.join(repoRoot, dir)
    if (!fs.existsSync(abs)) continue
    for (const name of fs.readdirSync(abs)) {
      if (name.endsWith(".md")) out.push(path.join(abs, name))
    }
  }
  for (const rel of ARTIFACT_FILES) {
    const abs = path.join(repoRoot, rel)
    if (fs.existsSync(abs)) out.push(abs)
  }
  return out
}

// Split a file into its frontmatter block (between the first two `---` fences)
// and the rest. Returns null when there is no leading frontmatter.
function splitFrontmatter(raw) {
  if (!raw.startsWith("---\n") && !raw.startsWith("---\r\n")) return null
  const rest = raw.slice(4)
  const close = rest.search(/\r?\n---\r?\n/)
  if (close === -1) return null
  const fm = rest.slice(0, close)
  const after = rest.slice(close).replace(/^\r?\n---\r?\n/, "")
  return { fm, after }
}

function stampOne(abs) {
  const raw = fs.readFileSync(abs, "utf8")
  const parts = splitFrontmatter(raw)

  if (parts) {
    // Already declares noindex (any value)? Respect it, do nothing.
    if (/^\s*noindex\s*:/m.test(parts.fm)) return false
    const nextFm = parts.fm.replace(/\s*$/, "") + "\nnoindex: true"
    const next = `---\n${nextFm}\n---\n${parts.after}`
    if (next === raw) return false
    fs.writeFileSync(abs, next, "utf8")
    return true
  }

  // No frontmatter at all — prepend a minimal block.
  const next = `---\nnoindex: true\n---\n\n${raw.replace(/^﻿/, "")}`
  fs.writeFileSync(abs, next, "utf8")
  return true
}

let stamped = 0
let total = 0
for (const abs of targets()) {
  total += 1
  if (stampOne(abs)) stamped += 1
}

console.log(
  `noindex-internal-artifacts: ${stamped} file(s) stamped noindex, ${total - stamped} already compliant (${total} internal artifacts total).`,
)
