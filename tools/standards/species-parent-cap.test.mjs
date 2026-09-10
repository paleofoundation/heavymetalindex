// species-parent-cap.test.mjs — ORDER S-DOI-IAS-CAP-1
// All three pairs. Compiler apply + freeze/lint fail-closed.
import { test } from "node:test"
import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { writeFileSync, mkdtempSync, mkdirSync, readFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import {
  applySpeciesParentCap,
  findSpeciesParentViolations,
  assertSpeciesLeqParent,
  assertStandardSpeciesLeqParent,
} from "./species-parent-cap.mjs"

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, "../..")
const LINT = join(HERE, "species-parent-cap.mjs")
const FREEZE = join(HERE, "freeze-standard-version.mjs")

test("iAs 100 beside tAs 50 is capped to 50 with disclosed provenance", () => {
  const cells = {
    tAs: { type: "gov", value: 50, value_exact: 50, binding_jurisdiction: "IN", binding_id: "in_tas_infant-milk-substitute-and-infant-foods_50" },
    iAs: { type: "gov", value: 100, value_exact: 100, binding_jurisdiction: "US", binding_id: "fda2020_ias_infant_rice_cereal_100" },
  }
  const events = applySpeciesParentCap(cells)
  assert.equal(events.length, 1)
  assert.equal(cells.iAs.value, 50)
  assert.equal(cells.iAs.value_exact, 50)
  assert.equal(cells.iAs.uncapped_species_value, 100)
  assert.equal(cells.iAs.capped_by_parent, true)
  assert.match(cells.iAs.cap_note, /FDA|fda2020|US/i)
  assert.match(cells.iAs.cap_note, /iAs≤tAs/)
  assert.match(cells.iAs.cap_note, /50/)
  assert.equal(findSpeciesParentViolations(cells).length, 0)
})

test("MeHg ≤ tHg cap is the same rule, not arsenic-only", () => {
  const cells = {
    tHg: { type: "read_across", value: 8, value_exact: 8, source_jurisdiction: "IL", source_id: "il_fcs2016_thg_8" },
    MeHg: { type: "gov", value: 20, value_exact: 20, binding_jurisdiction: "EU", binding_id: "eu_mehg_dummy_20" },
  }
  applySpeciesParentCap(cells)
  assert.equal(cells.MeHg.value, 8)
  assert.equal(cells.MeHg.uncapped_species_value, 20)
  assert.match(cells.MeHg.cap_note, /MeHg≤tHg/)
})

test("Cr-VI ≤ total Cr cap is the same rule", () => {
  const cells = {
    Cr: { type: "read_across", value: 40, value_exact: 40, source_jurisdiction: "HK", source_id: "hk_cr_40" },
    "Cr-VI": { type: "gov", value: 50, value_exact: 50, binding_jurisdiction: "US", binding_id: "us_crvi_50" },
  }
  applySpeciesParentCap(cells)
  assert.equal(cells["Cr-VI"].value, 40)
  assert.equal(cells["Cr-VI"].uncapped_species_value, 50)
  assert.match(cells["Cr-VI"].cap_note, /Cr-VI≤Cr/)
})

test("species already ≤ parent is unchanged", () => {
  const cells = {
    tAs: { type: "gov", value: 100, value_exact: 100 },
    iAs: { type: "gov", value: 80, value_exact: 80 },
  }
  const events = applySpeciesParentCap(cells)
  assert.equal(events.length, 0)
  assert.equal(cells.iAs.value, 80)
  assert.equal(cells.iAs.capped_by_parent, undefined)
})

test("missing or non-numeric partner is not a violation", () => {
  assert.equal(findSpeciesParentViolations({ iAs: { type: "gov", value: 100 } }).length, 0)
  assert.equal(findSpeciesParentViolations({ tAs: { type: "gov", value: 50 } }).length, 0)
  assert.equal(findSpeciesParentViolations({ iAs: { type: "subsumed", value: null }, tAs: { type: "gov", value: 50 } }).length, 0)
})

test("assert throws when species exceeds parent (compiler/freeze kill-gate)", () => {
  const cells = {
    tAs: { type: "gov", value: 50, value_exact: 50 },
    iAs: { type: "gov", value: 100, value_exact: 100 },
  }
  assert.throws(() => assertSpeciesLeqParent(cells, { slug: "canary" }), /species-parent-cap FAIL/)
  const std = { slug: "canary", variants: { both: cells } }
  assert.throws(() => assertStandardSpeciesLeqParent(std), /iAs 100 > tAs 50/)
})

test("lint --check FAILS a compiled tree with iAs > tAs", () => {
  const tmp = mkdtempSync(join(tmpdir(), "spc-"))
  const compiled = join(tmp, "cat1-compiled")
  mkdirSync(compiled, { recursive: true })
  writeFileSync(join(compiled, "canary.json"), JSON.stringify({
    slug: "canary",
    variants: {
      both: {
        tAs: { type: "gov", value: 50, value_exact: 50 },
        iAs: { type: "gov", value: 100, value_exact: 100 },
      },
    },
  }))
  const r = spawnSync("node", [LINT, "--check", "--compiled-dir", tmp], { cwd: REPO, encoding: "utf8" })
  assert.equal(r.status, 1, r.stderr || r.stdout)
  assert.match((r.stderr || "") + (r.stdout || ""), /iAs 100 > tAs 50/)
})

test("lint --check PASSES when species ≤ parent", () => {
  const tmp = mkdtempSync(join(tmpdir(), "spc-ok-"))
  const compiled = join(tmp, "cat1-compiled")
  mkdirSync(compiled, { recursive: true })
  writeFileSync(join(compiled, "canary.json"), JSON.stringify({
    slug: "canary",
    variants: {
      both: {
        tAs: { type: "gov", value: 50, value_exact: 50 },
        iAs: { type: "gov", value: 50, value_exact: 50, capped_by_parent: true },
        tHg: { type: "read_across", value: 8, value_exact: 8 },
        MeHg: { type: "subsumed", value: null },
        Cr: { type: "read_across", value: 1000, value_exact: 1000 },
        "Cr-VI": { type: "subsumed", value: null },
      },
    },
  }))
  const r = spawnSync("node", [LINT, "--check", "--compiled-dir", tmp], { cwd: REPO, encoding: "utf8" })
  assert.equal(r.status, 0, r.stderr || r.stdout)
})

test("live canary compiled JSON publishes iAs ≤ tAs (50 capped, not 100)", () => {
  const compiled = JSON.parse(readFileSync(join(REPO, "data/workbench/standards/cat1-compiled/baby-cereals-dry-rice-based.json"), "utf8"))
  const cells = compiled.variants.both
  assert.equal(cells.tAs.value, 50)
  assert.equal(cells.iAs.value, 50)
  assert.ok(cells.iAs.value <= cells.tAs.value)
  assert.equal(cells.iAs.uncapped_species_value, 100)
  assert.equal(cells.iAs.capped_by_parent, true)
  assert.match(cells.iAs.cap_note, /iAs≤tAs/)
  assert.equal(cells.MeHg.value, null)
  assert.equal(cells["Cr-VI"].value, null)
  assert.equal(findSpeciesParentViolations(cells).length, 0)
})

test("freeze FAILS before render when compiled iAs > tAs", () => {
  const tmp = mkdtempSync(join(tmpdir(), "spc-freeze-"))
  const compiled = join(tmp, "compiled")
  const out = join(tmp, "out")
  mkdirSync(compiled, { recursive: true })
  writeFileSync(join(compiled, "canary.json"), JSON.stringify({
    slug: "canary",
    name: "Canary",
    native_basis: "as_sold",
    method: "test",
    generated_from: "test",
    variants: {
      both: {
        Pb: { type: "gov", value: 20, binding_jurisdiction: "EU" },
        Cd: { type: "gov", value: 40, binding_jurisdiction: "EU" },
        tAs: { type: "gov", value: 50, binding_jurisdiction: "IN" },
        iAs: { type: "gov", value: 100, binding_jurisdiction: "US" },
        tHg: { type: "read_across", value: 8, source_jurisdiction: "IL" },
        Ni: { type: "gov", value: 3000, binding_jurisdiction: "EU" },
        Sn: { type: "gov", value: 5000, binding_jurisdiction: "IN" },
        Al: { type: "read_across", value: 500, source_jurisdiction: "AU" },
        Cr: { type: "read_across", value: 1000, source_jurisdiction: "HK" },
      },
    },
  }))
  const r = spawnSync("node", [FREEZE, "canary", "--version", "9.9", "--compiled-dir", compiled, "--out-dir", out, "--offline"], {
    cwd: REPO, encoding: "utf8",
  })
  assert.notEqual(r.status, 0, "freeze must fail-closed on iAs > tAs")
  assert.match((r.stderr || "") + (r.stdout || ""), /species-parent-cap FAIL|iAs 100 > tAs 50/)
})
