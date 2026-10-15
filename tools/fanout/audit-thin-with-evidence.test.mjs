import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import {
  auditThinWithEvidence,
  citedBlockValid,
  microbiomeSectionIssue,
  MICROBIOME_PAGES,
  NO_MICROBIOME_EVIDENCE,
  pageStillThin,
  readBaseline,
} from "./audit-thin-with-evidence.mjs"

const script = fileURLToPath(new URL("./audit-thin-with-evidence.mjs", import.meta.url))
const repoRoot = path.resolve(path.dirname(script), "../..")

const FILLED = [
  "products/dairy-milk-camel",
  "ingredients/palm-oil",
  "ingredients/rice-milk",
  "products/rice-noodles",
  "products/wild-mushrooms",
  "ingredients/shrimp",
  "ingredients/pineapple-juice",
  "ingredients/tomato-sauce",
  "products/food-packaging-foils-wraps",
  "products/permanent-hair-dyes-tints",
  "ingredients/cumin",
  "ingredients/soy-milk",
  "ingredients/infant-rice-cereal",
  "products/infant-formula",
  "products/baby-food",
  "ingredients/protein-powder",
  "ingredients/swordfish",
  "products/supplements-algae-seaweed-based",
  "ingredients/pear-juice",
  "products/pasta-rice-based",
  "ingredients/garlic",
]

function write(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, text)
}

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-thin-gate-"))
  write(
    path.join(root, "wiki/products/tea.md"),
    `---\nliterature_scope: thin\ncategory: tea\n---\n\n# Tea\n\nNo measurements.\n`,
  )
  write(
    path.join(root, "wiki/products/filled.md"),
    `---\nliterature_scope: cited\ncategory: filled\n---\n\n<!-- BEGIN: hmi-cited-measurements -->\nLead was 18.2 ng/g in [[sources/example-paper]].\n<!-- END: hmi-cited-measurements -->\n`,
  )
  write(
    path.join(root, "wiki/ingredients/salt.md"),
    `---\nprovisional_scaffold: true\ncommodity: salt\n---\n\n# Salt\n`,
  )
  write(
    path.join(root, "wiki/products/empty.md"),
    `---\nliterature_scope: none\n---\n\n# Empty\n`,
  )
  write(
    path.join(root, "data/fanout/paper-entity-index.jsonl"),
    [
      JSON.stringify({ entity: "products/tea", has_values: true, cite_key: "example-paper" }),
      JSON.stringify({ entity: "products/filled", has_values: true, cite_key: "example-paper" }),
      JSON.stringify({ entity: "ingredients/salt", has_values: false, cite_key: "no-values" }),
      JSON.stringify({ entity: "products/empty", has_values: false, cite_key: "context-only" }),
      "",
    ].join("\n"),
  )
  write(
    path.join(root, "data/evidence/product_source_routing_audit.csv"),
    [
      "product_slug,value_record_count,source_title",
      'salt,3,"Salt, iodized"',
      "empty,0,Context only",
      "",
    ].join("\n"),
  )
  write(
    path.join(root, "data/fanout/thin-with-evidence-baseline.txt"),
    "# comment\nproducts/tea\n",
  )
  return root
}

test("a cited block needs a source link and a concentration", () => {
  assert.equal(citedBlockValid("no block"), false)
  assert.equal(
    citedBlockValid(
      "<!-- BEGIN: hmi-cited-measurements -->\n[[sources/example-paper]]\n<!-- END: hmi-cited-measurements -->",
    ),
    false,
  )
  assert.equal(
    citedBlockValid(
      "<!-- BEGIN: hmi-cited-measurements -->\nLead was 4.2 ppb. [[sources/example-paper]]\n<!-- END: hmi-cited-measurements -->",
    ),
    true,
  )
})

test("cited scope without a block stays thin", () => {
  assert.equal(pageStillThin({ literature_scope: "cited" }, "plain"), true)
  assert.equal(pageStillThin({ literature_scope: "populated" }, "plain"), false)
})

test("fixture fails thin-with-evidence and clears a valid block", () => {
  const root = fixture()
  const report = auditThinWithEvidence(root)
  assert.deepEqual(report.failures, ["products/tea"])
  assert.deepEqual(readBaseline(fs.readFileSync(path.join(root, "data/fanout/thin-with-evidence-baseline.txt"), "utf8")), ["products/tea"])
})

test("routing values count when the index has no values", () => {
  const root = fixture()
  const index = path.join(root, "data/fanout/paper-entity-index.jsonl")
  fs.appendFileSync(index, JSON.stringify({ entity: "products/salt", has_values: false }) + "\n")
  write(
    path.join(root, "wiki/products/salt.md"),
    `---\nliterature_scope: thin\ncategory: salt\n---\n\n# Salt\n`,
  )
  const report = auditThinWithEvidence(root)
  assert.ok(report.failures.includes("products/salt"))
})

test("cli fails when the baseline does not match", () => {
  const root = fixture()
  fs.writeFileSync(path.join(root, "data/fanout/thin-with-evidence-baseline.txt"), "products/other\n")
  const result = spawnSync(process.execPath, [script, `--root=${root}`], { encoding: "utf8" })
  assert.equal(result.status, 1)
  assert.match(result.stderr, /products\/tea/)
  assert.match(result.stderr, /products\/other/)
})

test("cli strict fails every thin-with-evidence page", () => {
  const root = fixture()
  const result = spawnSync(process.execPath, [script, `--root=${root}`, "--strict"], { encoding: "utf8" })
  assert.equal(result.status, 1)
  assert.match(result.stdout, /strict/)
})

test("microbiome section fails when missing, empty, or uncited", () => {
  assert.equal(microbiomeSectionIssue("# Page\n\n## Other\n"), "missing")
  assert.equal(microbiomeSectionIssue("## Microbiome implications\n\n\n## Sources\n"), "empty")
  assert.equal(
    microbiomeSectionIssue("## Microbiome implications\n\nCamel milk changes the gut.\n"),
    "uncited",
  )
  assert.equal(
    microbiomeSectionIssue(`## Microbiome implications\n\n${NO_MICROBIOME_EVIDENCE}\n`),
    null,
  )
  assert.equal(
    microbiomeSectionIssue(
      `## Microbiome implications\n\n${NO_MICROBIOME_EVIDENCE}\n\n<!-- BEGIN: hmi-source-legend -->\n## Sources\n`,
    ),
    null,
  )
  assert.equal(
    microbiomeSectionIssue(
      "## Microbiome implications\n\nLeben starters are named. [[sources/mirmahdi2021-dairy-decontamination-probiotics-review]]\n",
    ),
    null,
  )
})

test("live ratchet matches the baseline and this chunk is clear", () => {
  const report = auditThinWithEvidence(repoRoot)
  assert.deepEqual(report.failures, report.baseline)
  for (const entity of FILLED) {
    assert.equal(report.failures.includes(entity), false, entity)
  }
  for (const id of MICROBIOME_PAGES) assert.equal(FILLED.includes(id), true, id)
  assert.deepEqual(report.microbiome, [])
  for (const id of MICROBIOME_PAGES) {
    const markdown = fs.readFileSync(path.join(repoRoot, "wiki", `${id}.md`), "utf8")
    assert.equal(microbiomeSectionIssue(markdown), null, id)
  }
  const camel = fs.readFileSync(path.join(repoRoot, "wiki/products/dairy-milk-camel.md"), "utf8")
  for (const key of [
    "amadi-2022-dietary-interventions-asd-systematic-review",
    "ozler-2025-nutritional-approaches-asd-scoping-review",
  ]) {
    assert.match(camel, new RegExp(`\\[\\[sources/${key}\\]\\]`))
    const stub = fs.readFileSync(path.join(repoRoot, "wiki/sources", `${key}.md`), "utf8")
    assert.match(stub, /^origin:\s*wikibiome\s*$/m)
  }
})
