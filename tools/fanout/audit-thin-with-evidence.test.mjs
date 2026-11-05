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
  contaminantMetalsInMeasurements,
  loadMetalMicrobiomeCorpus,
  microbiomeCorpusIssues,
  microbiomeSectionIssue,
  MICROBIOME_PAGES,
  NO_MICROBIOME_EVIDENCE,
  pageStillThin,
  readBaseline,
} from "./audit-thin-with-evidence.mjs"

const script = fileURLToPath(new URL("./audit-thin-with-evidence.mjs", import.meta.url))
const repoRoot = path.resolve(path.dirname(script), "../..")

const FILLED = [
  "ingredients/bagel",
  "ingredients/english-muffin",
  "ingredients/monterey-jack-cheese",
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
  "products/olive-oil",
  "products/lipstick",
  "products/dairy-milk-cow",
  "products/salt",
  "products/sports-energy-drinks",
  "ingredients/tilapia",
  "products/mineral-water",
  "ingredients/mushrooms",
  "products/eye-makeup",
  "products/supplements-protein-collagen-powders",
  "products/canned-seafood",
  "products/menstrual-tampons",
  "products/menstrual-pads",
  "products/cookware-metal-alloy",
  "products/deodorants",
  "products/tattoo-inks",
  "products/sun-suntan-products",
  "products/dairy-cheese",
  "products/makeup-foundation-powders-blush",
  "products/childrens-jewelry",
  "products/menstrual-cups",
  "products/pet-food-canned-wet",
  "products/toys-painted",
  "products/diapers-and-components",
  "products/dusting-talc-powders-adult",
  "products/shampoo-adult",
  "products/manicuring-preparations-leave-on",
  "products/infant-formula-dairy",
  "products/fish-sauce",
  "products/baby-powder-cornstarch",
  "products/sun-suntan-mineral",
  "products/infant-clothing",
  "products/tableware-glassware",
  "products/dairy-cream",
  "products/body-hand-leave-on-skin-care",
  "products/baby-oil",
  "products/laundry-detergents",
  "products/dish-soaps-manual",
  "products/leave-on-hair-preparations",
  "products/utensils-metal",
  "products/bathing-soaps",
  "products/facial-cleansers",
  "products/sippy-cups-toddler-drinkware",
  "products/cookware-nonstick-coated",
  "products/infant-food-general",
  "products/pacifiers-and-sucking-teething-aids",
  "products/toys-substrate-materials",
  "products/bibs",
  "products/conditioner-adult-rinse-out",
  "products/fabric-softeners",
  "products/toys-squeeze",
  "products/toys-rattles",
  "products/toys-stuffed-bean-bag",
  "products/infant-bottle-nipples",
  "products/art-craft-materials",
  "products/shaving-cream-gel-foam",
  "products/body-wash-shower-gel",
  "products/mouthwash-oral-rinse",
  "products/automatic-dishwasher-detergents",
  "products/floor-cleaners-hard-surface",
  "products/biscuits",
  "products/cultivated-mushrooms",
  "products/canned-foods-general",
  "products/lamb-mutton",
  "products/snack-bars-energy-bars",
  "products/mixed-meals-prepared-foods",
  "products/infant-formula-dairy-free",
  "products/supplements-oil-based",
  "products/dairy-milk-powders",
  "products/dairy-milk-goat-sheep",
  "products/face-neck-leave-on-skin-care",
  "products/cereal-meals",
  "products/infant-formula-powder-soy",
  "products/breakfast-cereal-rice-based",
  "products/infant-porridges-dairy-free",
  "products/snacks-general",
  "products/pickled-fermented-vegetables",
  "products/tableware-ceramicware",
  "products/food-packaging-cans-lids",
  "products/makeup-body-paints-bases-fixatives",
  "products/laundry-detergent-boosters-additives",
  "products/tableware-decorative-decals-coatings",
  "products/fabric-contact-products-other",
  "products/menstrual-intimate-products-other",
  "products/bakeware",
  "products/bleaching-whitening-additives",
  "products/high-chairs-and-booster-seats",
  "products/toys-projectile-guns",
  "products/food-packaging-caps-closures",
  "products/food-storage-glass-containers",
  "ingredients/salmon",
  "ingredients/salt",
  "ingredients/beer",
  "ingredients/rice-noodles",
  "ingredients/soy-sauce",
  "ingredients/ice-cream",
  "ingredients/wheat-flour",
  "ingredients/biscuits",
  "ingredients/popcorn",
  "ingredients/mozzarella",
  "ingredients/pineapple",
  "ingredients/marlin",
  "ingredients/mustard",
  "ingredients/cottage-cheese",
  "ingredients/cream-cheese",
  "ingredients/chitosan",
  "ingredients/milk-based-infant-formula",
  "ingredients/cereal-bars",
  "ingredients/eggplant",
  "ingredients/red-wine",
  "ingredients/niger-seed-oil",
  "ingredients/pinto-beans",
  "ingredients/zucchini",
  "ingredients/chickpeas",
  "ingredients/kidney-beans",
  "ingredients/french-fries",
  "ingredients/salami",
  "ingredients/white-beans",
  "ingredients/cereal-based-infant-formula",
  "ingredients/cosmetic-clay",
  "ingredients/sage",
  "ingredients/nectarine",
  "ingredients/almond-beverage",
  "ingredients/black-beans",
  "ingredients/breadcrumbs",
  "ingredients/granola",
  "ingredients/infant-mixed-grain-cereal",
  "ingredients/meal-replacement-drink",
  "ingredients/brussels-sprouts",
  "ingredients/chicken-broth",
  "ingredients/chicken-nuggets",
  "ingredients/coconut-water",
  "ingredients/corn-tortilla",
  "ingredients/cow-milk-infant-formula",
  "ingredients/doughnut",
  "ingredients/hard-candy",
  "ingredients/infant-oat-cereal",
  "ingredients/jujube-fruit",
  "ingredients/lemon-lime-soft-drink",
  "ingredients/pancakes",
  "ingredients/ramen-soup",
  "ingredients/sea-salt",
  "ingredients/whey",
  "ingredients/whiskey",
  "ingredients/white-wine",
  "products/plant-based-beverages",
]

// Chunk 16 left these baseline ingredients unfilled. Later cited fills removed
// chicken nuggets, corn tortilla, doughnut, lemon-lime soft drink, and ramen soup.
const CHUNK16_LEFT = [
  "products/barbecue-sauce",
  "products/broccoli-cheese-soup",
  "products/butter-crackers",
  "products/cheese-crackers",
  "products/cheese-pizza",
  "products/chocolate-nut-candy",
  "products/chocolate-syrup",
  "products/cinnamon-roll",
  "products/clam-chowder",
  "products/cranberry-juice-cocktail",
  "products/cream-of-mushroom-soup",
  "products/cream-of-potato-soup",
  "ingredients/diet-cola",
  "ingredients/fruit-ice-pop",
  "ingredients/fruit-snack-candy",
  "ingredients/gelatin-dessert",
  "products/graham-crackers",
  "ingredients/italian-dressing",
  "ingredients/pasta-sauce",
  "ingredients/pie-crust",
  "products/pumpkin-pie",
  "products/ranch-dressing",
  "ingredients/ranch-dressing-low-calorie",
  "products/sandwich-cookies",
  "ingredients/sorbet",
  "ingredients/sugar-cookies",
  "ingredients/swiss-cheese",
  "products/toaster-pastry",
  "products/vegetable-beef-soup",
  "products/veggie-burger",
  "products/white-cake",
  "ingredients/whole-wheat-pasta",
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
  assert.equal(
    citedBlockValid(
      "<!-- BEGIN: hmi-cited-measurements -->\nAluminum was 0.03 mg/g. [[sources/example-paper]]\n<!-- END: hmi-cited-measurements -->",
    ),
    true,
  )
  assert.equal(
    citedBlockValid(
      "<!-- BEGIN: hmi-cited-measurements -->\nAluminum was 0.15 to 0.31 mg per 30 gram serving. [[sources/example-paper]]\n<!-- END: hmi-cited-measurements -->",
    ),
    true,
  )
})

test("cited scope without a block stays thin", () => {
  assert.equal(pageStillThin({ literature_scope: "cited" }, "plain"), true)
  assert.equal(pageStillThin({ literature_scope: "populated" }, "plain"), false)
  assert.equal(pageStillThin({ page_contract_version: "1.0.0", literature_scope: "thin" }, '<div class="hmi-analyte-explorer"></div>'), false)
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

test("no-evidence line fails when a measured metal has a microbiome paper", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-microbiome-gate-"))
  const page = `---
literature_scope: cited
---

<!-- BEGIN: hmi-cited-measurements -->
Lead was 4.2 ppb. [[sources/lead-food]]
<!-- END: hmi-cited-measurements -->

## Microbiome implications

${NO_MICROBIOME_EVIDENCE}
`
  write(path.join(root, "wiki/products/dairy-milk-camel.md"), page)
  write(
    path.join(root, "wiki/sources/lead-gut.md"),
    `---
cite_key: lead-gut
title: "Lead and the gut microbiome"
metals: [Pb]
---

Lead exposure changed the gut microbiome in mice.
`,
  )
  const corpus = loadMetalMicrobiomeCorpus(root)
  assert.deepEqual(contaminantMetalsInMeasurements(page), ["lead"])
  assert.deepEqual(microbiomeCorpusIssues(page, corpus), ["no-evidence-despite-corpus (lead)"])
  const cited = page.replace(
    NO_MICROBIOME_EVIDENCE,
    "Lead, measured in this item, has been linked in a mouse study to a gut microbiome change. [[sources/lead-gut]]",
  )
  assert.deepEqual(microbiomeCorpusIssues(cited, corpus), [])
  const onlyZinc = page.replace("Lead was 4.2 ppb.", "Zinc was 4.2 ppb.")
  assert.deepEqual(microbiomeCorpusIssues(onlyZinc, corpus), [])
})

test("a panel symbol with no metal-specific microbiota result does not force a citation", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-microbiome-panel-"))
  const page = `---
literature_scope: cited
---

<!-- BEGIN: hmi-cited-measurements -->
Tin was 50.6 ng/g. [[sources/tin-food]]
<!-- END: hmi-cited-measurements -->

## Microbiome implications

${NO_MICROBIOME_EVIDENCE}
`
  write(path.join(root, "wiki/products/dairy-milk-camel.md"), page)
  write(
    path.join(root, "wiki/sources/panel-gut.md"),
    `---
cite_key: panel-gut
title: "Infant serum metals and gut microbiota"
metals: [Sn]
---

The 26-metal panel includes Sn. The gut microbiome was sequenced.
`,
  )
  const corpus = loadMetalMicrobiomeCorpus(root)
  assert.equal(corpus.get("tin").size, 0)
  assert.deepEqual(microbiomeCorpusIssues(page, corpus), [])
  write(
    path.join(root, "wiki/sources/tin-gut.md"),
    `---
cite_key: tin-gut
title: "Tin and the gut microbiome"
metals: [Sn]
---

Tin exposure changed the gut microbiome in mice.
`,
  )
  const named = loadMetalMicrobiomeCorpus(root)
  assert.ok(named.get("tin").has("tin-gut"))
  assert.deepEqual(microbiomeCorpusIssues(page, named), ["no-evidence-despite-corpus (tin)"])
})

test("the source catalogue cannot masquerade as a microbiome study", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-catalogue-not-study-"))
  write(path.join(root, "wiki/sources/index.md"), `---\ntitle: Sources\nsource_catalogue: true\n---\nTin and the gut microbiome are search terms in this catalogue.\n`)
  assert.equal(loadMetalMicrobiomeCorpus(root).get("tin").size, 0)
  fs.rmSync(root, { recursive: true, force: true })
})

test("live ratchet matches the baseline and this chunk is clear", () => {
  const report = auditThinWithEvidence(repoRoot)
  assert.deepEqual(report.failures, report.baseline)
  for (const entity of FILLED) {
    assert.equal(report.failures.includes(entity), false, entity)
  }
  for (const entity of CHUNK16_LEFT) {
    assert.equal(report.failures.includes(entity), true, entity)
  }
  for (const id of MICROBIOME_PAGES) assert.equal(FILLED.includes(id), true, id)
  assert.deepEqual(report.microbiome, [])
  const corpus = loadMetalMicrobiomeCorpus(repoRoot)
  for (const id of MICROBIOME_PAGES) {
    const markdown = fs.readFileSync(path.join(repoRoot, "wiki", `${id}.md`), "utf8")
    if (/^page_contract_version:\s*['"]?1\.0\.0['"]?\s*$/m.test(markdown) && markdown.includes("hmi-analyte-explorer")) continue
    assert.equal(microbiomeSectionIssue(markdown), null, id)
    assert.deepEqual(microbiomeCorpusIssues(markdown, corpus), [], id)
    assert.equal(markdown.includes(NO_MICROBIOME_EVIDENCE), false, id)
    assert.equal(markdown.includes("does not state a tin-specific microbiota result"), false, id)
  }
  const camel = fs.readFileSync(path.join(repoRoot, "wiki/products/dairy-milk-camel.md"), "utf8")
  for (const key of [
    "eggers-2023-prenatal-lead-gut-microbiome-childhood",
    "zhang-2015-cadmium-hepatic-energy-gut-microbiome",
    "lu-2014-arsenic-gut-microbiome-metabolomics",
    "coryell-2018-gut-microbiome-arsenic-toxicity-protection",
    "xiong-2025-prenatal-trace-elements-infant-gut-microbiome",
  ]) {
    assert.match(camel, new RegExp(`\\[\\[sources/${key}\\]\\]`))
    const stub = fs.readFileSync(path.join(repoRoot, "wiki/sources", `${key}.md`), "utf8")
    assert.match(stub, /^origin:\s*wikibiome\s*$/m)
  }
})
