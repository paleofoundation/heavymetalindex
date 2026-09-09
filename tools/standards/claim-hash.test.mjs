// claim-hash.test.mjs — proves the S-DOI-1c invariant: a SILENT numeric change to a
// published standard cannot pass the build. Run: node --test tools/standards/claim-hash.test.mjs
import { test } from "node:test"
import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { readFileSync, writeFileSync, mkdtempSync, mkdirSync, cpSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { claimHash, canonicalClaim } from "./claim-hash.mjs"

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, "../..")
const SLUG = "baby-cereals-dry-rice-based"
const COMPILED = join(REPO, "data/workbench/standards/cat1-compiled", `${SLUG}.json`)
const HISTORY = join(REPO, "data/standards/version-history")
const TOOL = join(HERE, "claim-hash.mjs")

const std = () => JSON.parse(readFileSync(COMPILED, "utf8"))

test("claim hash is deterministic and stable for the canary standard", () => {
  const a = claimHash(std())
  const b = claimHash(std())
  assert.equal(a, b)
  assert.match(a, /^sha256:[0-9a-f]{64}$/)
})

test("the recorded version-history claim_hash matches the compiled standard (guard passes clean)", () => {
  const r = spawnSync("node", [TOOL, "--check", SLUG], { cwd: REPO, encoding: "utf8" })
  assert.equal(r.status, 0, r.stderr || r.stdout)
})

test("a SILENT numeric change moves the claim hash", () => {
  const before = claimHash(std())
  const mutated = std()
  // tamper: loosen the Pb limit from 20 to 40 without any version bump / change note
  mutated.variants.both.Pb.value = 40
  const after = claimHash(mutated)
  assert.notEqual(after, before, "mutating a limit value must change the claim hash")
})

test("changing only prose / labels does NOT move the claim hash (typo-safe)", () => {
  const before = claimHash(std())
  const cosmetic = std()
  cosmetic.method = "totally different prose string"
  cosmetic.variants.both.Pb.label = "reworded label"
  // note: Cr.label / rationale are cosmetic; value/type/anchors unchanged
  const after = claimHash(cosmetic)
  assert.equal(after, before, "cosmetic-only edits must not force a version bump")
})

test("the --check guard FAILS the build on a silent numeric change (fail-closed)", () => {
  // Build a throwaway compiled dir whose JSON is tampered, point --check at it while
  // keeping the real (untampered) version-history record. The recorded hash then no
  // longer matches → the guard must exit non-zero.
  const tmp = mkdtempSync(join(tmpdir(), "claimhash-"))
  const compiledDir = join(tmp, "compiled")
  mkdirSync(compiledDir, { recursive: true })
  const mutated = std()
  mutated.variants.both.Cd.value = 999 // silent loosening
  writeFileSync(join(compiledDir, `${SLUG}.json`), JSON.stringify(mutated))

  const r = spawnSync("node", [TOOL, "--check", SLUG, "--compiled-dir", compiledDir, "--history-dir", HISTORY], {
    cwd: REPO, encoding: "utf8",
  })
  assert.equal(r.status, 1, "guard must exit 1 on drift")
  assert.match((r.stderr || "") + (r.stdout || ""), /DRIFT/i)
})

test("canonical claim includes panel membership, scope, and per-country anchors", () => {
  const c = canonicalClaim(std())
  assert.ok(c.panel.both.includes("Pb"))
  assert.equal(c.scope.native_basis, "as_sold")
  assert.ok(c.variants.both.Pb.per_country.EU.id, "per-country sovereign ids are part of the claim")
})
