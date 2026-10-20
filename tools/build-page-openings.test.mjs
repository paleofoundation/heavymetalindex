import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { test } from "node:test"
import { inScope, LABELS } from "./build-page-openings.mjs"

const tool = fileURLToPath(new URL("./build-page-openings.mjs", import.meta.url))

test("extra scope requires an explicit directory and uses frontmatter type", () => {
  assert.equal(inScope("wiki/pilot/lead.md", { type: "metal" }), null)
  for (const [type, section] of [["metal", "metals"], ["ingredient", "ingredients"], ["product", "products"], ["product-category", "products"]]) {
    assert.equal(inScope("wiki/pilot/nested/page.md", { type }, "wiki/pilot"), section)
  }
  for (const rel of ["wiki/pilot-other/page.md", "wiki/pilot/../elsewhere/page.md", "wiki/pilot/index.md"]) {
    assert.equal(inScope(rel, { type: "metal" }, "wiki/pilot"), null)
  }
  for (const type of [undefined, "source", "toString"]) {
    assert.equal(inScope("wiki/pilot/page.md", { type }, "wiki/pilot"), null)
  }
  assert.equal(inScope("wiki/metals/lead.md", { type: "ingredient" }), "metals")
  assert.equal(inScope("wiki/metals/nested/lead.md"), null)
  assert.equal(inScope("wiki/metals/index.md"), null)
})

test("CLI applies and checks nested pilot openings without changing default scope", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-openings-"))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const write = (rel, content) => {
    const file = path.join(root, rel)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, content)
  }
  for (const section of Object.keys(LABELS)) fs.mkdirSync(path.join(root, "wiki", section), { recursive: true })
  const run = (...args) => spawnSync(process.execPath, [tool, ...args], { cwd: root, encoding: "utf8" })
  const page = (type, section) => `---\ntitle: Fixture\ntype: ${type}\nquick_read:\n  summary: A bounded evidence summary.\n  points:\n${LABELS[section].map((label) => `    - label: ${label}\n      text: Reviewed scope.`).join("\n")}\n---\n\n# Fixture\n\n## Evidence\n\nReviewed evidence.\n`
  const pilots = [
    ["wiki/pilot/metal.md", "metal", "metals"],
    ["wiki/pilot/nested/ingredient.md", "ingredient", "ingredients"],
    ["wiki/pilot/product.md", "product", "products"],
    ["wiki/pilot/category.md", "product-category", "products"],
  ]
  for (const [rel, type, section] of pilots) write(rel, page(type, section))
  const excluded = ["wiki/pilot/index.md", "wiki/pilot/source.md", "wiki/pilot/draft.md", "wiki/pilot-other/metal.md"]
  write(excluded[0], page("metal", "metals"))
  write(excluded[1], page("source", "metals"))
  write(excluded[2], page("metal", "metals").replace("type: metal", "type: metal\ndraft: true"))
  write(excluded[3], page("metal", "metals"))
  const originals = excluded.map((rel) => fs.readFileSync(path.join(root, rel), "utf8"))

  let result = run("--apply", pilots[0][0])
  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /0 written/)
  result = run("--allow-dir", "wiki/pilot", "--check", pilots[0][0])
  assert.equal(result.status, 1, result.stderr)
  assert.match(result.stdout, /opening block missing or out of sync/)
  result = run("--allow-dir", "wiki/pilot", "--apply")
  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /4 written/)
  for (const [rel] of pilots) assert.match(fs.readFileSync(path.join(root, rel), "utf8"), /<!-- BEGIN: hmi-opening -->/)
  assert.deepEqual(excluded.map((rel) => fs.readFileSync(path.join(root, rel), "utf8")), originals)
  result = run("--allow-dir", "wiki/pilot", "--check")
  assert.equal(result.status, 0, result.stdout + result.stderr)
  assert.match(result.stdout, /4 compliant/)
  result = run("--check")
  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /0 compliant/)
  result = run("--allow-dir", "wiki/pilot", "--apply", pilots[0][0])
  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /0 written/)
})

test("CLI rejects --allow-dir without a directory argument", () => {
  const result = spawnSync(process.execPath, [tool, "--allow-dir", "--check"], { encoding: "utf8" })
  assert.equal(result.status, 1)
  assert.match(result.stderr, /--allow-dir requires a directory/)
})
