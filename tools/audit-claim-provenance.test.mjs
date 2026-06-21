// Tests for the claim-provenance audit's counting + strict-gating contract.
//
// The audit's job is to count numeric claims that lack a nearby provenance
// wikilink. The strict mode must never regress CI silently: it fails only when
// the current uncited count EXCEEDS a committed baseline. These tests pin the
// presence-check semantics (a cited claim passes, an uncited one is counted)
// and the regression-gate arithmetic (uncited > baseline of 0 -> non-zero).
//
// Run: node --test tools/audit-claim-provenance.test.mjs

import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"

import { createRequire } from "node:module"

import { auditAll } from "./audit-claim-provenance.mjs"

const { spawnSync } = createRequire(import.meta.url)("node:child_process")

// Body must exceed the 500-char skip threshold in auditPage().
const FILLER = "Lorem ipsum context prose to push this page past the minimum length threshold so the auditor does not skip it as a scaffold placeholder. ".repeat(6)

function makeFixture({ ingredient = "", product = "" } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "claim-prov-"))
  fs.mkdirSync(path.join(root, "wiki/ingredients"), { recursive: true })
  fs.mkdirSync(path.join(root, "wiki/products"), { recursive: true })
  if (ingredient) fs.writeFileSync(path.join(root, "wiki/ingredients/test.md"), ingredient)
  if (product) fs.writeFileSync(path.join(root, "wiki/products/test.md"), product)
  return root
}

const CITED_PAGE = `---
title: Test
---

## Contamination

${FILLER}

The typical lead concentration is 92 ppb in this matrix, per [[sources/smith-2024]].
`

const UNCITED_PAGE = `---
title: Test
---

## Contamination

${FILLER}

The typical lead concentration is 92 ppb in this matrix, with no citation anywhere.
`

test("a cited numeric claim is counted as supported", () => {
  const root = makeFixture({ ingredient: CITED_PAGE })
  const r = auditAll({ root })
  assert.equal(r.total, 1)
  assert.equal(r.supported, 1)
  assert.equal(r.unsupported, 0)
})

test("an uncited numeric claim is counted as unsupported", () => {
  const root = makeFixture({ ingredient: UNCITED_PAGE })
  const r = auditAll({ root })
  assert.equal(r.total, 1)
  assert.equal(r.supported, 0)
  assert.equal(r.unsupported, 1)
})

test("default (report-only) mode: a corpus with uncited claims still exits 0", () => {
  // The prebuild path invokes the CLI with no flags. It must exit 0 even when
  // uncited claims exist, so CI stays green. We assert the CLI process exit.
  const root = makeFixture({ ingredient: UNCITED_PAGE, product: CITED_PAGE })
  const res = runCli([], root)
  assert.equal(res.status, 0, res.stderr)
})

test("strict mode fails when uncited count EXCEEDS a baseline of 0", () => {
  // Baseline of 0 + a corpus containing an uncited claim => regression => exit 1.
  const root = makeFixture({ ingredient: UNCITED_PAGE })
  writeBaseline(root, 0)
  const res = runCli(["--strict"], root)
  assert.equal(res.status, 1, "expected non-zero exit on regression")
  assert.match(res.stderr + res.stdout, /FAIL/)
})

test("strict mode passes when uncited count does not exceed the baseline", () => {
  // Grandfathering: baseline already accounts for the one uncited claim.
  const root = makeFixture({ ingredient: UNCITED_PAGE })
  writeBaseline(root, 1)
  const res = runCli(["--strict"], root)
  assert.equal(res.status, 0, res.stderr)
  assert.match(res.stdout, /strict: PASS/)
})

// --- helpers -------------------------------------------------------------

function writeBaseline(root, unsupported_claims) {
  fs.mkdirSync(path.join(root, "data/evidence"), { recursive: true })
  fs.writeFileSync(
    path.join(root, "data/evidence/claim-provenance-baseline.json"),
    JSON.stringify({ unsupported_claims, total_claims: 0, uncited_claim_ids: [] }, null, 2) + "\n",
  )
}

function runCli(extraArgs, root) {
  // The script resolves all paths against process.cwd(), so run it with cwd
  // set to the fixture root. data/evidence must exist for the writes.
  const scriptPath = path.join(import.meta.dirname, "audit-claim-provenance.mjs")
  fs.mkdirSync(path.join(root, "data/evidence"), { recursive: true })
  return spawnSync(process.execPath, [scriptPath, ...extraArgs], {
    cwd: root,
    encoding: "utf8",
  })
}
