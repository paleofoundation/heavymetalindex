// Fixture test for the baseline-screen contract (docs/tasks/standards-95-confidence-completion-brief.md,
// Phase A step 7). Uses a TEMP method register so no LOQ is ever written into
// data/evidence/analytical_methods.csv by a test; the real register only ever gains rows read from a
// published standard-method document.
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"

const REPO = process.cwd()
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "hmtc-baseline-"))
const methods = path.join(tmp, "methods.csv")
fs.writeFileSync(methods, [
  "method_id,analyte,matrix_class,basis,loq_ug_kg,reference_method,source_doc,url,status,notes",
  "fixture_method_al_food,Al,food,product as placed on market,50,FIXTURE METHOD 1:2026,raw/fixture.pdf,,published,fixture only",
  "fixture_method_al_gated,Al,food,product as placed on market,50,FIXTURE METHOD 2:2026,raw/fixture.pdf,,withdrawn,fixture only",
  "fixture_method_pb_food,Pb,food,product as placed on market,5,FIXTURE METHOD 3:2026,raw/fixture.pdf,,published,fixture only",
].join("\n") + "\n")

const control = { control: { rationale: "fixture control", reference_method: "ICP-MS" } }
function config(alSpec) {
  return {
    _category: { number: 99, name: "Fixture", anchor: "fixture", basis_family: "dietary content" },
    subcategories: { "fixture-row": {
      name: "Fixture row", native_basis: "as_sold", native_basis_label: "as sold", basis_guard: "placed on market|as sold",
      cells: { Pb: control, Cd: control, tAs: control, iAs: control, tHg: control, MeHg: control, Ni: control, Sn: control, Al: alSpec, Cr: control, "Cr-VI": control },
    } },
  }
}
function compile(alSpec, name) {
  const cfg = path.join(tmp, `${name}.json`); fs.writeFileSync(cfg, JSON.stringify(config(alSpec)))
  const out = path.join(tmp, name)
  const r = spawnSync("node", ["tools/standards/compile-category.mjs", `--config=${cfg}`, `--outdir=${out}`, `--methods=${methods}`, "--quiet"], { cwd: REPO, encoding: "utf8" })
  const rec = fs.existsSync(path.join(out, "fixture-row.json")) ? JSON.parse(fs.readFileSync(path.join(out, "fixture-row.json"), "utf8")) : null
  return { status: r.status, stderr: r.stderr, cell: rec && rec.cells.Al, out }
}
function audit(out) {
  const r = spawnSync("node", ["tools/standards/audit-compiled-standards.mjs", `--dir=${out}`, "--json"], { cwd: REPO, encoding: "utf8", env: { ...process.env, HMTC_METHODS: methods } })
  const fails = JSON.parse(r.stdout)[0].records.flatMap((x) => x.fails)
  return fails
}
const full = { baseline_screen: { loq_source_id: "fixture_method_al_food", no_ml_checked: "EU, Codex, US, AU-NZ, CA, UK: no aluminium ML for this form", no_analog_checked: "no same-basis analog instrument in the register", no_pathway_rationale: "fixture: no aluminium-bearing input in this matrix" } }

test("a complete baseline_screen resolves to the published LOQ with the baseline-screen tag", () => {
  const { status, cell } = compile(full, "ok")
  assert.equal(status, 0)
  assert.equal(cell.type, "baseline_screen")
  assert.equal(cell.provenance, "baseline-screen")
  assert.equal(cell.value, 50)
  assert.equal(cell.reference_method, "FIXTURE METHOD 1:2026")
  assert.equal(cell.loq_source_id, "fixture_method_al_food")
  assert.equal(cell.basis, "product as placed on market")
  const fails = audit(path.join(tmp, "ok"))
  assert.deepEqual(fails.filter((f) => f.code === "C12"), [])
  assert.deepEqual(fails.filter((f) => f.code === "C9" || f.code === "C11"), [])
})

test("a baseline_screen without a resolvable method, with a gated method, with the wrong analyte, or missing its disclosures is a GAP", () => {
  for (const [name, spec] of [
    ["nomethod", { baseline_screen: { ...full.baseline_screen, loq_source_id: "does_not_exist" } }],
    ["gated", { baseline_screen: { ...full.baseline_screen, loq_source_id: "fixture_method_al_gated" } }],
    ["wrong-analyte", { baseline_screen: { ...full.baseline_screen, loq_source_id: "fixture_method_pb_food" } }],
    ["no-pathway", { baseline_screen: { ...full.baseline_screen, no_pathway_rationale: "" } }],
    ["no-ml-checked", { baseline_screen: { loq_source_id: "fixture_method_al_food", no_analog_checked: "x", no_pathway_rationale: "y" } }],
  ]) {
    const { status, cell } = compile(spec, name)
    assert.equal(status, 1, `${name}: compiler must exit 1`)
    assert.equal(cell.type, "gap", `${name}: cell must be a gap`)
  }
})

test("the audit refuses a baseline screen whose LOQ, method or tag drifted from the register", () => {
  const { out } = compile(full, "drift")
  const p = path.join(out, "fixture-row.json"); const rec = JSON.parse(fs.readFileSync(p, "utf8"))
  rec.cells.Al.value = 40; fs.writeFileSync(p, JSON.stringify(rec))
  assert.ok(audit(out).some((f) => f.code === "C12" && /LOQ is 50/.test(f.msg)))
  rec.cells.Al.value = 50; rec.cells.Al.provenance = "regulatory-alignment"; fs.writeFileSync(p, JSON.stringify(rec))
  assert.ok(audit(out).some((f) => f.code === "C11"))
  rec.cells.Al.provenance = "baseline-screen"; delete rec.cells.Al.no_pathway_rationale; fs.writeFileSync(p, JSON.stringify(rec))
  assert.ok(audit(out).some((f) => f.code === "C12" && /no_pathway_rationale/.test(f.msg)))
})
