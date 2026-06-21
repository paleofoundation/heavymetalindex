// Tests for the dead provenance-wikilink detector.
//
// Coverage:
//   - a link to an existing slug passes (not flagged)
//   - a link to a missing slug is flagged
//   - an alias/cite_key-backed link passes
//   - escaped-pipe, heading, and frontmatter-list link forms parse
//   - --strict exits non-zero when a dead link exists; exits 0 otherwise
//
// Run: node --test tools/audit-source-wikilinks.test.mjs

import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"

import {
  buildResolvableSet,
  normalizeSlug,
  LINK_REGEX,
  stripCodeBlocks,
  stripHtmlComments,
} from "./audit-source-wikilinks.mjs"

const toolPath = fileURLToPath(new URL("./audit-source-wikilinks.mjs", import.meta.url))

function mkRepo() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "wl-audit-"))
  fs.mkdirSync(path.join(root, "wiki", "sources"), { recursive: true })
  fs.mkdirSync(path.join(root, "wiki", "regulations"), { recursive: true })
  fs.mkdirSync(path.join(root, "wiki", "testing"), { recursive: true })
  fs.mkdirSync(path.join(root, "wiki", "products"), { recursive: true })
  fs.mkdirSync(path.join(root, "data", "evidence"), { recursive: true })
  return root
}

function write(root, rel, content) {
  const full = path.join(root, rel)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, content)
}

// --- helper-level unit tests ---

test("normalizeSlug strips comments, .md suffix, and kind prefix", () => {
  assert.equal(normalizeSlug("foo2024-bar   # a note"), "foo2024-bar")
  assert.equal(normalizeSlug("raab2024-x.md"), "raab2024-x")
  assert.equal(normalizeSlug("sources/foo2024-bar"), "foo2024-bar")
  assert.equal(normalizeSlug(""), null)
  assert.equal(normalizeSlug(null), null)
})

test("LINK_REGEX parses plain, escaped-pipe, alias, and heading forms", () => {
  const text = [
    "[[sources/foo]]",
    "[[sources/bar\\|Bar et al. 2024]]",
    "[[sources/baz|Baz 2024]]",
    "[[sources/qux#results]]",
    "[[regulations/eu-2023#annex|EU]]",
    "[[testing/icp-ms]]",
  ].join("\n")
  const found = []
  LINK_REGEX.lastIndex = 0
  let m
  while ((m = LINK_REGEX.exec(text)) !== null) found.push(`${m[1]}/${m[2].trim()}`)
  assert.deepEqual(found, [
    "sources/foo",
    "sources/bar",
    "sources/baz",
    "sources/qux",
    "regulations/eu-2023",
    "testing/icp-ms",
  ])
})

test("stripCodeBlocks and stripHtmlComments remove example links", () => {
  assert.ok(!stripCodeBlocks("a\n```\n[[sources/x]]\n```\nb").includes("sources/x"))
  assert.ok(!stripHtmlComments("a <!-- [[sources/x]] --> b").includes("sources/x"))
})

test("buildResolvableSet admits filenames, cite_key, and aliases", () => {
  const root = mkRepo()
  write(root, "wiki/sources/real2024-paper.md", "---\ncite_key: real2024-paper\n---\nbody")
  write(
    root,
    "wiki/sources/canonical2024-paper.md",
    "---\ncite_key: canonical2024-paper\naliases: [oldslug2024-paper, oldslug2024-paper-v2]\n---\nbody",
  )
  write(root, "wiki/sources/_TEMPLATE.md", "---\ncite_key: firstauthor2024-short-slug\n---\ntemplate")
  const set = buildResolvableSet(path.join(root, "wiki", "sources"))
  assert.ok(set.has("real2024-paper"))
  assert.ok(set.has("canonical2024-paper"))
  assert.ok(set.has("oldslug2024-paper"))
  assert.ok(set.has("oldslug2024-paper-v2"))
  // template filename must NOT become a resolvable target
  assert.ok(!set.has("_TEMPLATE"))
})

// --- end-to-end CLI tests ---

function runAudit(root, extraArgs = []) {
  try {
    const stdout = execFileSync("node", [toolPath, ...extraArgs], {
      cwd: root,
      encoding: "utf8",
    })
    return { code: 0, stdout }
  } catch (e) {
    return { code: e.status ?? 1, stdout: e.stdout?.toString() ?? "" }
  }
}

test("existing slug passes; missing slug is flagged; alias passes", () => {
  const root = mkRepo()
  write(root, "wiki/sources/gardener2019-pb-cd-us-infant-formula-baby-foods.md",
    "---\ncite_key: gardener2019-pb-cd-us-infant-formula-baby-foods\n---\nbody")
  write(root, "wiki/sources/aliased2020-paper.md",
    "---\ncite_key: aliased2020-paper\naliases: [legacy2020-paper]\n---\nbody")
  // A page citing: one good link, one alias-backed link, one dead variant.
  write(root, "wiki/products/infant-formula.md", [
    "---", "type: product", "---",
    "Good: [[sources/gardener2019-pb-cd-us-infant-formula-baby-foods|Gardener 2019]]",
    "Alias: [[sources/legacy2020-paper|Legacy 2020]]",
    "Dead: [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|Gardener 2019]]",
  ].join("\n"))

  const res = runAudit(root)
  assert.equal(res.code, 0, "report-only run exits 0")
  const csv = fs.readFileSync(path.join(root, "data/evidence/dead-wikilinks-audit.csv"), "utf8")
  // dead variant flagged
  assert.ok(csv.includes("sources/gardener2019-lead-cadmium-infant-formula-baby-food"))
  // good + alias not flagged
  assert.ok(!csv.includes("sources/gardener2019-pb-cd-us-infant-formula-baby-foods"))
  assert.ok(!csv.includes("sources/legacy2020-paper"))
})

test("--strict exits non-zero when a dead link exists", () => {
  const root = mkRepo()
  write(root, "wiki/sources/real2024-paper.md", "---\ncite_key: real2024-paper\n---\nbody")
  write(root, "wiki/products/p.md", "Dead: [[sources/missing2024-nope]]")
  const res = runAudit(root, ["--strict"])
  assert.equal(res.code, 1, "--strict with dead link exits 1")
})

test("--strict exits zero when all links resolve", () => {
  const root = mkRepo()
  write(root, "wiki/sources/real2024-paper.md", "---\ncite_key: real2024-paper\n---\nbody")
  write(root, "wiki/regulations/eu-2023.md", "---\ncite_key: eu-2023\n---\nbody")
  write(root, "wiki/products/p.md", [
    "Good: [[sources/real2024-paper|R 2024]]",
    "Reg: [[regulations/eu-2023#annex|EU]]",
  ].join("\n"))
  const res = runAudit(root, ["--strict"])
  assert.equal(res.code, 0, "--strict with no dead links exits 0")
})

test("frontmatter-list and code-block links are handled correctly", () => {
  const root = mkRepo()
  write(root, "wiki/sources/real2024-paper.md", "---\ncite_key: real2024-paper\n---\nbody")
  // Dead link inside a fenced code block must NOT be flagged.
  write(root, "wiki/products/p.md", [
    "---", "type: product", "---",
    "Body cites [[sources/real2024-paper]].",
    "```",
    "Example: [[sources/example2024-template-only]]",
    "```",
  ].join("\n"))
  const res = runAudit(root)
  assert.equal(res.code, 0)
  const csv = fs.readFileSync(path.join(root, "data/evidence/dead-wikilinks-audit.csv"), "utf8")
  assert.ok(!csv.includes("example2024-template-only"), "code-block link not flagged")
})
