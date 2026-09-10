// Locks PANEL-CLAIM-1 on the rice-cereal canary: iAs stays a published number.
import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..")
const COMPILED = join(REPO, "data/workbench/standards/cat1-compiled/baby-cereals-dry-rice-based.json")

test("canary rice cereal iAs is numeric gov_floor, not subsumed/blank", () => {
  const std = JSON.parse(readFileSync(COMPILED, "utf8"))
  const iAs = std.variants.both.iAs
  assert.equal(iAs.type, "gov")
  assert.equal(iAs.value, 100)
  assert.equal(iAs.binding_id, "fda2020_ias_infant_rice_cereal_100")
  assert.notEqual(iAs.type, "subsumed")
  assert.ok(iAs.value != null)
})

test("canary claim-surface eight totals + iAs are numeric", () => {
  const std = JSON.parse(readFileSync(COMPILED, "utf8"))
  const cells = std.variants.both
  for (const key of ["Pb", "Cd", "tAs", "iAs", "tHg", "Ni", "Sn", "Al", "Cr"]) {
    assert.equal(typeof cells[key].value, "number", `${key} must be numeric on the claim surface`)
    assert.notEqual(cells[key].type, "subsumed", `${key} must not be subsumed-as-blank`)
  }
})
