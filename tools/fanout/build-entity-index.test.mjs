import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import {
  buildPaperEntityIndex,
  normalizeDoi,
  paperHasValues,
  phrasesFromHeading,
} from "./build-entity-index.mjs"

const script = fileURLToPath(new URL("./build-entity-index.mjs", import.meta.url))
const repoRoot = path.resolve(path.dirname(script), "../..")

function write(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, text)
}

function page(title, extra = "") {
  return `---\ntitle: ${JSON.stringify(title)}\n${extra}---\n\n# ${title}\n`
}

function note(fields, body = "") {
  const lines = ["---"]
  for (const [key, value] of Object.entries(fields)) {
    lines.push(`${key}: ${value}`)
  }
  lines.push("---", "", body)
  return `${lines.join("\n")}\n`
}

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-entity-index-"))
  const wiki = path.join(root, "wiki")
  write(path.join(wiki, "products/dairy-milk-camel.md"), page("Camel milk", 'hmtc_subcategory_name: "Camel milk"\n'))
  write(path.join(wiki, "products/tea.md"), page("Tea"))
  write(path.join(wiki, "products/toothpaste.md"), page("Toothpaste (Cat 2)"))
  write(path.join(wiki, "products/pasta-rice-based.md"), page("Pasta (rice-based)"))
  write(path.join(wiki, "products/pasta-wheat-based.md"), page("Pasta (wheat-based)"))
  write(path.join(wiki, "products/pet-supplements-oils.md"), page("Oils (omega-3, fish oil, coconut oil)"))
  write(path.join(wiki, "products/categories/tea.md"), `---\ntitle: "Tea"\ntype: category-index\n---\n\n# Tea\n`)
  write(path.join(wiki, "ingredients/milk-and-dairy.md"), page("Milk and Dairy", "aliases: [\"cow milk\"]\n"))
  write(path.join(wiki, "ingredients/rice.md"), page("Rice"))
  write(path.join(wiki, "ingredients/pasta.md"), page("Pasta"))
  write(path.join(wiki, "ingredients/pear.md"), page("Pear"))
  write(path.join(wiki, "ingredients/cola.md"), page("Cola"))
  write(path.join(wiki, "ingredients/tea.md"), page("Tea"))
  write(path.join(wiki, "metals/lead.md"), page("Lead", "symbol: Pb\n"))
  write(path.join(wiki, "metals/arsenic.md"), page("Arsenic", "symbol: As\n"))
  write(path.join(wiki, "metals/arsenic-inorganic.md"), page("Arsenic, Inorganic", "symbol: iAs\n"))
  write(path.join(wiki, "metals/arsenic-total.md"), page("Arsenic, Total", "symbol: tAs\n"))
  write(path.join(root, "data/fanout/matrix-aliases.json"), JSON.stringify({
    "camel-milk": ["products/dairy-milk-camel", "ingredients/camel-milk"],
  }, null, 2))
  write(path.join(root, "data/nav/ingredient-index-source.json"), JSON.stringify([
    { label: "Grains", slugs: ["rice", "ghost-grain"] },
  ]))
  write(path.join(root, "data/taxonomy/hmtc-v2.json"), JSON.stringify({
    categories: [{
      subcategories: [
        { slug: "dairy-milk-camel", name: "Dromedary milk" },
        { slug: "ghost-product", name: "Ghost product" },
      ],
    }],
  }))
  write(path.join(wiki, "sources/camel-study.md"), note({
    cite_key: "camel-study",
    doi: "10.1000/camel",
    title: JSON.stringify("Pollution of Camel Milk by Heavy Metals"),
    "sample_n": 10,
    metals: "[Pb, iAs]",
    products: "[\"[[products/missing-leaf]]\"]",
    ingredients: "[\"[[ingredients/milk-and-dairy]]\"]",
    matrices: "[camel-milk]",
  }, "Mean lead was 25 ppb."))
  write(path.join(wiki, "sources/tea-routed.md"), note({
    cite_key: "tea-routed",
    doi: "10.1000/tea",
    title: JSON.stringify("Tea survey"),
    products: "[\"[[products/tea]]\"]",
    metals: "[]",
    matrices: "[]",
  }, "No concentrations in this note."))
  write(path.join(wiki, "sources/toothpaste-title.md"), note({
    cite_key: "toothpaste-title",
    doi: "10.1000/toothpaste",
    title: JSON.stringify("Lead in toothpaste"),
    metals: "[]",
  }, "No concentrations in this note."))
  write(path.join(wiki, "sources/pasta-title.md"), note({
    cite_key: "pasta-title",
    doi: "10.1000/pasta",
    title: JSON.stringify("Rice-based pasta survey"),
    metals: "[]",
  }, "The word spear appears, and so does chocolate."))
  write(path.join(wiki, "sources/oils-title.md"), note({
    cite_key: "oils-title",
    doi: "10.1000/oils",
    title: JSON.stringify("Fish oil capsules"),
    metals: "[]",
  }))
  write(path.join(wiki, "sources/false-friends.md"), note({
    cite_key: "false-friends",
    doi: "10.1000/friends",
    title: JSON.stringify("Appearance of a spear beside chocolate"),
    metals: "[]",
  }))
  write(path.join(wiki, "sources/body-rice.md"), note({
    cite_key: "body-rice",
    doi: "10.1000/body",
    title: JSON.stringify("A methods note"),
    metals: "[Cd]",
    matrices: "[ghost-grain]",
  }, "The discussion mentions rice once. Cadmium was 4 µg/kg."))
  write(path.join(wiki, "sources/cow-matrix.md"), note({
    cite_key: "cow-matrix",
    doi: "10.1000/cow",
    title: JSON.stringify("A matrix token note"),
    metals: "[]",
    matrices: "[cow-milk]",
  }))
  write(path.join(wiki, "sources/species.md"), note({
    cite_key: "species",
    doi: "10.1000/species",
    title: JSON.stringify("Inorganic arsenic in rice cereal"),
    metals: "[As, tAs]",
  }, "Total arsenic was not the measured fraction."))
  write(path.join(wiki, "sources/dromedary.md"), note({
    cite_key: "dromedary",
    doi: "10.1000/dromedary",
    title: JSON.stringify("Dromedary milk metals"),
    metals: "[]",
  }))
  write(path.join(wiki, "sources/ghost-title.md"), note({
    cite_key: "ghost-title",
    doi: "10.1000/ghost",
    title: JSON.stringify("Ghost product survey"),
    metals: "[]",
  }))
  write(path.join(wiki, "sources/hmi-dup.md"), note({
    cite_key: "hmi-dup",
    doi: "10.1000/dup",
    status: "duplicate",
    title: JSON.stringify("Duplicate tea note"),
    metals: "[]",
  }))
  write(path.join(root, "wb/sources/wb-camel.md"), note({
    cite_key: "wb-camel",
    doi: "10.1000/camel",
    title: JSON.stringify("Camel milk and cola"),
    metals_discussed: "[lead]",
  }, "No concentration unit here."))
  write(path.join(root, "wb/sources/wb-eggs.md"), note({
    cite_key: "wb-eggs",
    doi: "10.1000/eggs",
    title: JSON.stringify("Hen eggs"),
    metals_discussed: "[arsenic]",
  }, "Mean arsenic 0.79 µg/kg."))
  write(path.join(root, "wb/sources/wb-dup-short.md"), note({
    cite_key: "wb-aaa",
    doi: "10.1000/same",
    title: JSON.stringify("Tea without numbers"),
    metals_discussed: "[]",
  }, "Tea is mentioned."))
  write(path.join(root, "wb/sources/wb-dup-values.md"), note({
    cite_key: "wb-zzz",
    doi: "10.1000/same",
    title: JSON.stringify("Tea with a measurement"),
    metals_discussed: "[lead]",
  }, "Lead in tea was 3 ppb."))
  write(path.join(root, "wb/sources/wb-placeholder-a.md"), note({
    cite_key: "wb-placeholder-a",
    doi: JSON.stringify("not yet verified"),
    title: JSON.stringify("Pear review"),
    metals_discussed: "[]",
  }))
  write(path.join(root, "wb/sources/wb-placeholder-b.md"), note({
    cite_key: "wb-placeholder-b",
    doi: JSON.stringify("not yet verified"),
    title: JSON.stringify("Cola review"),
    metals_discussed: "[]",
  }))
  write(path.join(wiki, "sources/cite-key-only.md"), note({
    cite_key: "cite-key-only",
    doi: "10.1000/citekey",
    title: JSON.stringify("A cross reference"),
    metals: "[]",
  }, "See [[sources/akhmetsadykova2013-camel-milk-lab-lead]] and `camel-milk-heavy-metals.pdf`."))
  write(path.join(wiki, "sources/prose-camel.md"), note({
    cite_key: "prose-camel",
    doi: "10.1000/prose",
    title: JSON.stringify("A sampling note"),
    metals: "[]",
  }, "Raw camel milk was sampled."))
  write(path.join(wiki, "sources/categories/rollups.md"), `---\ntitle: "Tea and rice rollup"\ntype: category-index\n---\n\n- [[sources/tea-routed|Tea survey]]\n- Rice papers\n`)
  write(path.join(root, "wb/sources/wb-blocked.md"), note({
    cite_key: "wb-blocked",
    doi: "10.1000/dup",
    title: JSON.stringify("Tea from the other corpus"),
    metals_discussed: "[]",
  }))
  return root
}

function optionsFor(root) {
  return {
    wikiRoot: path.join(root, "wiki"),
    hmiSourcesDir: path.join(root, "wiki/sources"),
    wikibiomeSourcesDir: path.join(root, "wb/sources"),
    matrixAliasesPath: path.join(root, "data/fanout/matrix-aliases.json"),
    ingredientIndexPath: path.join(root, "data/nav/ingredient-index-source.json"),
    taxonomyPath: path.join(root, "data/taxonomy/hmtc-v2.json"),
  }
}

function rowMap(rows) {
  const map = new Map()
  for (const row of rows) map.set(`${row.corpus}|${row.cite_key}|${row.entity}`, row)
  return map
}

test("doi normalization rejects placeholders and keeps a real DOI", () => {
  assert.equal(normalizeDoi("https://doi.org/10.1000/AbC"), "10.1000/abc")
  assert.equal(normalizeDoi("doi: 10.1000/abc"), "10.1000/abc")
  assert.equal(normalizeDoi("not yet verified"), null)
  assert.equal(normalizeDoi(10.2174), null)
  assert.equal(normalizeDoi(""), null)
})

test("concentration units set has_values and bare numbers do not", () => {
  assert.equal(paperHasValues({ sample_n: 3 }, "no unit"), true)
  assert.equal(paperHasValues({ sample_n: 0 }, "10.1000/abc"), false)
  assert.equal(paperHasValues({}, "Cadmium was 4 µg/kg."), true)
  assert.equal(paperHasValues({}, "Cadmium was 4 ug kg-1."), true)
  assert.equal(paperHasValues({}, "p = 0.05 and n=84"), false)
  assert.equal(paperHasValues({}, "version 2 ppmol"), false)
})

test("category labels strip, subtype parentheticals do not collapse to the bare word", () => {
  assert.ok(phrasesFromHeading("Toothpaste (Cat 2)").includes("toothpaste"))
  assert.equal(phrasesFromHeading("Pasta (rice-based)").includes("pasta"), false)
  assert.ok(phrasesFromHeading("Pasta (rice-based)").includes("rice based pasta"))
  assert.ok(phrasesFromHeading("Arsenic, Inorganic").includes("inorganic arsenic"))
  assert.equal(phrasesFromHeading("Oils (omega-3, fish oil, coconut oil)").includes("oils"), false)
})

test("fixture index rows follow basis priority, aliases, and DOI dedupe", () => {
  const root = fixture()
  const { rows } = buildPaperEntityIndex(optionsFor(root))
  const got = rowMap(rows)
  const keys = [...got.keys()].sort()

  assert.deepEqual(Object.keys(got.get("hmi|camel-study|products/dairy-milk-camel")), [
    "corpus", "cite_key", "doi", "entity", "basis", "metals", "has_values", "locator",
  ])

  const camelProduct = got.get("hmi|camel-study|products/dairy-milk-camel")
  assert.equal(camelProduct.basis, "matrices")
  assert.equal(camelProduct.locator, "frontmatter.matrices:camel-milk")
  assert.equal(camelProduct.has_values, true)
  assert.equal(camelProduct.doi, "10.1000/camel")
  assert.deepEqual(camelProduct.metals, ["Pb", "iAs"])

  const camelIngredient = got.get("hmi|camel-study|ingredients/camel-milk")
  assert.equal(camelIngredient.basis, "matrices")
  assert.equal(got.get("hmi|camel-study|ingredients/milk-and-dairy").basis, "frontmatter-route")
  assert.equal(got.get("hmi|camel-study|ingredients/milk-and-dairy").locator, "frontmatter.ingredients")
  assert.equal(got.get("hmi|camel-study|metals/lead").basis, "frontmatter-route")
  assert.equal(got.get("hmi|camel-study|metals/arsenic-inorganic").basis, "frontmatter-route")
  assert.equal(got.get("hmi|camel-study|metals/arsenic"), undefined)
  assert.equal(got.get("hmi|camel-study|products/missing-leaf"), undefined)

  const tea = got.get("hmi|tea-routed|products/tea")
  assert.equal(tea.basis, "frontmatter-route")
  assert.equal(tea.locator, "frontmatter.products")
  assert.equal(tea.has_values, false)
  assert.equal(got.get("hmi|tea-routed|products/categories/tea"), undefined)
  assert.equal(got.get("hmi|tea-routed|ingredients/tea").basis, "title-match")

  assert.equal(got.get("hmi|toothpaste-title|products/toothpaste").basis, "title-match")
  assert.equal(got.get("hmi|toothpaste-title|metals/lead").basis, "title-match")

  assert.equal(got.get("hmi|pasta-title|products/pasta-rice-based").basis, "title-match")
  assert.equal(got.get("hmi|pasta-title|products/pasta-wheat-based"), undefined)
  assert.equal(got.get("hmi|pasta-title|ingredients/pasta").basis, "title-match")
  assert.equal(got.get("hmi|pasta-title|ingredients/rice").basis, "title-match")
  assert.equal(got.get("hmi|pasta-title|ingredients/pear"), undefined)
  assert.equal(got.get("hmi|pasta-title|ingredients/cola"), undefined)
  assert.equal(got.get("hmi|false-friends|ingredients/pear"), undefined)
  assert.equal(got.get("hmi|false-friends|ingredients/cola"), undefined)
  assert.equal(got.get("hmi|oils-title|products/pet-supplements-oils"), undefined)

  assert.equal(got.get("hmi|body-rice|ingredients/rice").basis, "body-match")
  assert.equal(got.get("hmi|body-rice|ingredients/rice").locator, "body")
  assert.equal(got.get("hmi|body-rice|ingredients/rice").has_values, true)
  assert.equal(got.get("hmi|body-rice|ingredients/ghost-grain"), undefined)
  assert.equal([...got.keys()].some((key) => key.includes("ghost")), false)

  assert.equal(got.get("hmi|cow-matrix|ingredients/milk-and-dairy").basis, "matrices")
  assert.equal(got.get("hmi|cow-matrix|ingredients/milk-and-dairy").locator, "frontmatter.matrices:cow-milk")

  assert.equal(got.get("hmi|species|metals/arsenic-inorganic").basis, "title-match")
  assert.equal(got.get("hmi|species|metals/arsenic").basis, "frontmatter-route")
  assert.equal(got.get("hmi|species|metals/arsenic").locator, "frontmatter.metals")
  assert.equal(got.get("hmi|species|metals/arsenic-total").basis, "frontmatter-route")
  assert.equal(got.get("hmi|species|ingredients/rice").basis, "title-match")

  assert.equal(got.get("hmi|dromedary|products/dairy-milk-camel").basis, "title-match")
  assert.equal(got.get("hmi|ghost-title|products/ghost-product"), undefined)

  assert.equal([...got.keys()].some((key) => key.includes("10.1000/camel") && key.startsWith("wikibiome")), false)
  assert.equal(got.get("wikibiome|wb-camel|ingredients/cola"), undefined)
  assert.equal(got.get("wikibiome|wb-eggs|metals/arsenic").basis, "frontmatter-route")
  assert.equal(got.get("wikibiome|wb-eggs|metals/arsenic").locator, "frontmatter.metals_discussed")
  assert.equal(got.get("wikibiome|wb-eggs|metals/arsenic").has_values, true)
  assert.equal(got.get("wikibiome|wb-eggs|metals/arsenic-inorganic"), undefined)
  assert.equal(got.get("wikibiome|wb-zzz|products/tea").has_values, true)
  assert.equal(got.get("wikibiome|wb-aaa|products/tea"), undefined)
  assert.equal(got.get("wikibiome|wb-placeholder-a|ingredients/pear").doi, null)
  assert.equal(got.get("wikibiome|wb-placeholder-b|ingredients/cola").doi, null)
  assert.equal(got.get("wikibiome|wb-blocked|products/tea"), undefined)
  assert.equal(got.get("hmi|hmi-dup|products/tea"), undefined)
  assert.equal(got.get("hmi|cite-key-only|products/dairy-milk-camel"), undefined)
  assert.equal(got.get("hmi|cite-key-only|ingredients/camel-milk"), undefined)
  assert.equal(got.get("hmi|prose-camel|products/dairy-milk-camel").basis, "body-match")
  assert.equal(got.get("hmi|prose-camel|ingredients/camel-milk").basis, "body-match")
  assert.equal([...got.keys()].some((key) => key.includes("rollups")), false)

  const entities = new Set(rows.map((row) => row.entity))
  assert.equal(entities.has("products/categories/tea"), false)
  assert.ok(keys.length > 0)
  fs.rmSync(root, { recursive: true, force: true })
})

test("builder requires the ingredient index and the taxonomy file", () => {
  const root = fixture()
  const options = optionsFor(root)
  assert.throws(() => buildPaperEntityIndex({ ...options, ingredientIndexPath: path.join(root, "missing.json") }))
  assert.throws(() => buildPaperEntityIndex({ ...options, taxonomyPath: path.join(root, "missing.json") }))
  fs.rmSync(root, { recursive: true, force: true })
})

test("cli writes jsonl and prints counts", () => {
  const root = fixture()
  const out = path.join(root, "out.jsonl")
  const options = optionsFor(root)
  const run = spawnSync(process.execPath, [
    script,
    "--wiki-root", options.wikiRoot,
    "--hmi-sources", options.hmiSourcesDir,
    "--wikibiome-sources", options.wikibiomeSourcesDir,
    "--aliases", options.matrixAliasesPath,
    "--ingredient-index", options.ingredientIndexPath,
    "--taxonomy", options.taxonomyPath,
    "--out", out,
  ], { encoding: "utf8" })
  assert.equal(run.status, 0, run.stderr)
  const lines = fs.readFileSync(out, "utf8").trim().split("\n")
  assert.ok(lines.length > 5)
  const summary = JSON.parse(run.stdout)
  assert.equal(summary.rows, lines.length)
  assert.equal(summary.by_corpus.hmi + summary.by_corpus.wikibiome, summary.rows)
  assert.ok(summary.unique_dois >= 1)
  assert.ok(summary.entities_with_at_least_1_paper >= 1)
  fs.rmSync(root, { recursive: true, force: true })
})

test("committed camel-milk aliases name the product row and the ingredient slug", () => {
  const raw = JSON.parse(fs.readFileSync(path.join(repoRoot, "data/fanout/matrix-aliases.json"), "utf8"))
  assert.deepEqual(raw["camel-milk"], [
    "products/dairy-milk-camel",
    "ingredients/camel-milk",
  ])
})
