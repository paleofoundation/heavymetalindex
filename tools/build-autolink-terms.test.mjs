import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const script = fileURLToPath(new URL("./build-autolink-terms.mjs", import.meta.url))

function fixture(t) {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-autolink-"))
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }))
  const output = path.join(cwd, "quartz/plugins/transformers/autolink-terms.generated.ts")
  fs.mkdirSync(path.dirname(output), { recursive: true })
  return {
    write(slug, content) {
      const file = path.join(cwd, "wiki", `${slug}.md`)
      fs.mkdirSync(path.dirname(file), { recursive: true })
      fs.writeFileSync(file, content)
    },
    run(...args) { return spawnSync(process.execPath, [script, ...args], { cwd, encoding: "utf8" }) },
    reviewed(terms) {
      fs.mkdirSync(path.join(cwd, "data/reference"), { recursive: true })
      fs.writeFileSync(path.join(cwd, "data/reference/wiki-link-aliases.json"), JSON.stringify(terms))
    },
    terms() {
      const content = fs.readFileSync(output, "utf8")
      return Object.fromEntries([...content.matchAll(/^  (".*?"): (".*?"),$/gm)].map((match) => [JSON.parse(match[1]), JSON.parse(match[2])]))
    },
  }
}

test("new topical pages, nested pages, aliases and H1 titles join the next build automatically", (t) => {
  const f = fixture(t)
  f.write("microbiome/nickel", "---\ntype: microbiome\n---\n\n# Nickel in microbial pathogenesis\n")
  f.write("health/pathways/barrier", "---\ntitle: Intestinal barrier injury\naliases: [epithelial barrier disruption]\n---\n")
  f.write("testing/metal-assay", "---\ntitle: Metal speciation assay\n---\n")
  assert.equal(f.run().status, 0)
  assert.equal(f.terms()["nickel in microbial pathogenesis"], "microbiome/nickel")
  assert.equal(f.terms()["epithelial barrier disruption"], "health/pathways/barrier")
  assert.equal(f.terms()["metal speciation assay"], "testing/metal-assay")
  assert.equal(f.run("--check").status, 0)
  f.write("mitigation/new", "---\ntitle: Exposure source reduction\n---\n")
  assert.equal(f.run("--check").status, 1)
  assert.equal(f.run().status, 0)
  assert.equal(f.terms()["exposure source reduction"], "mitigation/new")
  assert.equal(f.run("--check").status, 0)
})

test("draft, retired, pending and provisional pages never become automatic evidence destinations", (t) => {
  const f = fixture(t)
  for (const [index, flag] of ["draft: true", 'draft: "true"', "status: tier1-stub", "evidence_tier: pending", "provisional_scaffold: true", "retired: true"].entries()) {
    f.write(`health/pending-${index}`, `---\ntitle: Pending destination ${index}\n${flag}\n---\n`)
  }
  f.write("regulations/draft", "---\ntype: regulation\ntitle: Draft Regulation 123\ndraft: true\n---\n")
  f.write("regulators/draft", "---\ntype: regulator\nabbreviation: XYZ\ndraft: true\n---\n")
  assert.equal(f.run().status, 0)
  assert.deepEqual(f.terms(), {})
})

test("ambiguous shared terms and common single words remain excluded; exact titles beat broad aliases", (t) => {
  const f = fixture(t)
  f.write("health/a", "---\ntitle: Barrier function\naliases: [shared pathway, lead, water, nickel]\n---\n")
  f.write("microbiome/b", "---\ntitle: Microbial function\naliases: [shared pathway, barrier function]\n---\n")
  f.write("ingredients/broccoli", "---\ntitle: Broccoli\n---\n")
  f.write("products/broccoli", "---\ntitle: Broccoli\n---\n")
  assert.equal(f.run().status, 0)
  const terms = f.terms()
  assert.equal(terms["barrier function"], "health/a")
  assert.equal(terms.broccoli, "ingredients/broccoli")
  for (const term of ["shared pathway", "lead", "water", "nickel"]) assert.equal(terms[term], undefined)
})

test("unavailable exact concepts cannot fall through to a narrower alias owner", (t) => {
  const f = fixture(t)
  f.write("ingredients/mushrooms", "---\ntitle: Mushrooms\nprovisional_scaffold: true\n---\n")
  f.write("ingredients/canned-mushrooms", "---\ntitle: Canned mushrooms\naliases: [mushrooms]\n---\n")
  f.write("supply-chain/aluminum-packaging", "---\ntitle: Aluminum-based packaging\naliases: [formula packaging, foil pouch, aluminum foil seal]\n---\n")
  assert.equal(f.run().status, 0)
  const terms = f.terms()
  assert.equal(terms.mushrooms, undefined)
  assert.equal(terms["canned mushrooms"], "ingredients/canned-mushrooms")
  assert.equal(terms["formula packaging"], undefined)
  assert.equal(terms["foil pouch"], undefined)
  assert.equal(terms["aluminum foil seal"], "supply-chain/aluminum-packaging")
})

test("common foods require their own eligible title, including three-letter tea", (t) => {
  const f = fixture(t)
  f.write("ingredients/rice", "---\ntitle: Rice\n---\n")
  f.write("ingredients/tea", "---\ntitle: Tea\n---\n")
  f.write("ingredients/other", "---\ntitle: Other food\naliases: [honey, coffee, water, salt]\n---\n")
  assert.equal(f.run().status, 0)
  assert.equal(f.terms().rice, "ingredients/rice")
  assert.equal(f.terms().tea, "ingredients/tea")
  for (const term of ["honey", "coffee", "water", "salt"]) assert.equal(f.terms()[term], undefined)
})

test("reviewed short names validate destinations and never publish pending concepts", (t) => {
  const f = fixture(t)
  f.write("testing/icp-ms", "---\ntitle: Mass spectrometry\n---\n")
  f.write("ingredients/tomato", "---\ntitle: Tomato\nprovisional_scaffold: true\n---\n")
  f.reviewed({ "ICP-MS": "testing/icp-ms", tomatoes: "ingredients/tomato" })
  assert.equal(f.run().status, 0)
  assert.equal(f.terms()["icp-ms"], "testing/icp-ms")
  assert.equal(f.terms().tomatoes, undefined)
  f.reviewed({ missing: "testing/missing" })
  assert.notEqual(f.run().status, 0)
})
