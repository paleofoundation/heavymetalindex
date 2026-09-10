import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { regenerate } from "../build-ingredient-contamination-tables.mjs"
import { FDA_SOURCE, WHO_SOURCE, fdaObservation, whoObservation, renderNonDetect, validateProfileEvidence } from "./lib/ingredient-profile-evidence.mjs"

const fda = {
  source_id: FDA_SOURCE, tds_food_number: "1", tds_food_description: "Milk, whole, fluid", ingredient_slug: "whole-milk",
  analyte_slug: "arsenic-total", metal_species: "tAs", basis: "as_consumed", n: "1", non_detect_n: "1",
  reporting_limit_min_ppb_equivalent: "1", reporting_limit_max_ppb_equivalent: "1", min_ppb_equivalent: "0", max_ppb_equivalent: "0",
}
const ndCell = { status: "populated", typical_ppb: [null, null], p95_ppb: null, confidence: "low", n_studies: 1, value_kind: "source_non_detect", evidence: [fdaObservation(fda)] }
const who = { source_id: WHO_SOURCE, food_code: "FB0275", food_name: "Strawberry", metal_species: "iAs", region_name: "EURO", food_state: "Raw", basis: "dry_weight", year_min: "2010", year_max: "2010", n_rows: "5", p10_lower_bound_ug_kg: "21.4", p90_lower_bound_ug_kg: "66.32", p95_lower_bound_ug_kg: "75.36" }

test("one low-confidence ND observation retains its positive reporting limit", () => {
  assert.equal(ndCell.evidence[0].period_scope, "dataset_collection_window")
  assert.equal(renderNonDetect(ndCell), "ND (<1; source reporting limit)")
  assert.deepEqual(validateProfileEvidence(ndCell, "whole-milk", "tAs", { fda: [fda], who: [] }), [])
  const stale = structuredClone(ndCell); stale.evidence[0].reporting_limit_max_ppb = 0.1
  assert.ok(validateProfileEvidence(stale, "whole-milk", "tAs", { fda: [fda], who: [] }).includes("stale-non-detect-evidence"))
})

test("a correct source ID cannot support an unmeasured food/species pair", () => {
  const wrong = structuredClone(ndCell); wrong.evidence[0].metal_species = "iAs"
  assert.ok(validateProfileEvidence(wrong, "cucumber", "iAs", { fda: [fda], who: [] }).includes("unsupported-fda-food-species"))
})

test("basis metadata is verified against the referenced row, not just its presence", () => {
  const cell = { value_kind: "source_summary", typical_ppb: [21.4, 66.3], p95_ppb: 75.4, evidence: [whoObservation(who, "value")] }
  assert.deepEqual(validateProfileEvidence(cell, "strawberries", "iAs", { fda: [], who: [who] }), [])
  cell.evidence[0].basis = "as_consumed"
  assert.ok(validateProfileEvidence(cell, "strawberries", "iAs", { fda: [], who: [who] }).includes("evidence-basis-mismatch"))
  cell.evidence[0].basis = "dry_weight"; cell.typical_ppb = [0, 1]
  assert.ok(validateProfileEvidence(cell, "strawberries", "iAs", { fda: [], who: [who] }).includes("source-summary-value-mismatch"))
})

test("table regeneration replaces stale FDA attribution with the owner of the value", () => {
  const cell = { status: "populated", n_studies: 1, confidence: "low", value_kind: "source_summary", typical_ppb: [21.4, 66.3], p95_ppb: 75.4, evidence: [whoObservation(who, "value")] }
  const source = `---\ncontamination_profile:\n  iAs: ${JSON.stringify(cell)}\n---\n\n## Heavy metal contamination profile\n\n| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |\n| --- | --- | --- | --- | --- |\n| iAs | n=1 | 21.4–66.3 | low | [[sources/${FDA_SOURCE}\\|1]] |\n`
  const result = regenerate(source)
  const row = result.split("\n").find((s) => s.startsWith("| iAs |"))
  assert.ok(row.includes(WHO_SOURCE)); assert.ok(!row.includes(FDA_SOURCE)); assert.ok(row.includes("source LB"))
  assert.equal(regenerate(result), result)
})

test("a missing profile table cannot consume a later Sources or occurrence table", () => {
  const source = `---\ncontamination_profile:\n  Pb: {status: pending, typical_ppb: [null, null], n_studies: 0}\n---\n\n## Heavy metal contamination profile\n\nPending synthesis.\n\n## FDA observations\n\n| Food | Concentration |\n| --- | --- |\n| Salt | ND |\n`
  const result = regenerate(source)
  assert.ok(result.includes("| Salt | ND |"))
  assert.ok(result.indexOf("| Pb | pending") < result.indexOf("## FDA observations"))
  assert.equal(regenerate(result), result)
})

test("integrity CLI rejects low-count low-confidence measured-zero claims", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "tds-zero-regression-"))
  fs.mkdirSync(path.join(tmp, "wiki/ingredients"), { recursive: true })
  fs.writeFileSync(path.join(tmp, "wiki/ingredients/example.md"), "---\ncontamination_profile:\n  Pb: {status: populated, typical_ppb: [0, 0], p95_ppb: 0, confidence: low, n_studies: 1}\n---\n")
  const run = spawnSync(process.execPath, [path.resolve("tools/audit-contamination-profile-integrity.mjs"), "--json"], { cwd: tmp, encoding: "utf8" })
  assert.equal(run.status, 1, run.stderr)
  assert.equal(JSON.parse(run.stdout).failures[0].signature, "censored-zero")
  fs.rmSync(tmp, { recursive: true, force: true })
})

test("both public export layers retain ND provenance and reject a forged display", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "tds-export-regression-"))
  for (const dir of ["wiki/ingredients", "wiki/sources", "wiki/static"]) fs.mkdirSync(path.join(tmp, dir), { recursive: true })
  const page = path.join(tmp, "wiki/ingredients/whole-milk.md")
  fs.writeFileSync(page, regenerate(`---\ntitle: Whole milk\ncontamination_profile:\n  tAs: ${JSON.stringify(ndCell)}\n---\n\n## Heavy metal contamination profile\n\nSource observation.\n`))
  fs.writeFileSync(path.join(tmp, `wiki/sources/${FDA_SOURCE}.md`), `---\ntype: source\ncite_key: ${FDA_SOURCE}\ntitle: FDA TDS\n---\n`)
  fs.writeFileSync(path.join(tmp, "wiki/static/regulations.json"), JSON.stringify({ records: [] }))
  const run = (script, ...args) => spawnSync(process.execPath, [path.resolve(`tools/${script}`), ...args], { cwd: tmp, encoding: "utf8" })
  const first = run("build-contamination-dataset.mjs"); assert.equal(first.status, 0, first.stderr)
  const second = run("build-open-data.mjs"); assert.equal(second.status, 0, second.stderr)
  const base = JSON.parse(fs.readFileSync(path.join(tmp, "wiki/static/contamination.json"), "utf8")).records[0].metals.tAs
  const open = JSON.parse(fs.readFileSync(path.join(tmp, "wiki/static/data/occurrence.json"), "utf8")).records[0].analytes.tAs
  for (const c of [base, open]) {
    assert.equal(c.value_kind, "source_non_detect")
    assert.deepEqual(c.typical_ppb, [null, null])
    assert.equal(c.evidence[0].reporting_limit_max_ppb, 1)
    assert.equal(c.evidence[0].row_key, fdaObservation(fda).row_key)
    assert.equal(c.evidence[0].period_scope, "dataset_collection_window")
  }
  assert.ok(fs.readFileSync(path.join(tmp, "wiki/static/data/occurrence.csv"), "utf8").includes("evidence_json"))
  fs.writeFileSync(page, fs.readFileSync(page, "utf8").replace("ND (<1;", "ND (<0.1;"))
  const forged = run("build-open-data.mjs", "--check")
  assert.equal(forged.status, 1)
  assert.match(forged.stderr, /reporting-limit display disagrees/)
  fs.rmSync(tmp, { recursive: true, force: true })
})

test("public exports exclude pending sources and quoted drafts but retain ingredient recovery destinations", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "tds-publication-regression-"))
  for (const dir of ["wiki/ingredients", "wiki/sources", "wiki/static"]) fs.mkdirSync(path.join(tmp, dir), { recursive: true })
  const sourceCases = [
    ["published", "type: source\nevidence_tier: A", "10.1000/published"],
    ["pending", "evidence_tier: 'pending'", "10.1000/pending"],
    ["tier1", "type: source\nstatus: 'tier1-stub'", "10.1000/tier1"],
    ["draft", 'type: source\ndraft: "true"', "10.1000/draft"],
  ]
  for (const [slug, metadata, doi] of sourceCases) fs.writeFileSync(path.join(tmp, `wiki/sources/${slug}.md`), `---\n${metadata}\ndoi: ${doi}\ntitle: ${slug}\n---\n`)
  for (const [slug, metadata] of [["visible", "status: pending"], ["draft", 'draft: "true"']]) {
    fs.writeFileSync(path.join(tmp, `wiki/ingredients/${slug}.md`), regenerate(`---\ntype: ingredient\n${metadata}\ncontamination_profile:\n  Pb: {status: populated, typical_ppb: [1, 2], p95_ppb: 3, n_studies: 1, confidence: low}\n---\n\n## Heavy metal contamination profile\n`))
  }
  fs.writeFileSync(path.join(tmp, "wiki/static/regulations.json"), JSON.stringify({ records: [] }))
  for (const script of ["build-contamination-dataset.mjs", "build-open-data.mjs"]) {
    const result = spawnSync(process.execPath, [path.resolve(`tools/${script}`)], { cwd: tmp, encoding: "utf8" })
    assert.equal(result.status, 0, result.stderr)
  }
  const contamination = JSON.parse(fs.readFileSync(path.join(tmp, "wiki/static/contamination.json"), "utf8"))
  assert.deepEqual(contamination.records.map(row => row.ingredient), ["visible"])
  const sources = fs.readFileSync(path.join(tmp, "wiki/static/data/sources.json"), "utf8")
  const csv = fs.readFileSync(path.join(tmp, "wiki/static/data/sources.csv"), "utf8")
  for (const output of [sources, csv]) {
    assert.ok(output.includes("10.1000/published"))
    for (const excluded of ["pending", "tier1", "draft"]) assert.ok(!output.includes(`10.1000/${excluded}`))
  }
  fs.rmSync(tmp, { recursive: true, force: true })
})
