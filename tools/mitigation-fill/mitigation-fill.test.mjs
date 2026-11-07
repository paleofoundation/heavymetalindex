import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { citationParts, nextCitationNumber } from "./cite.mjs"
import {
  DEFAULT_LIMIT,
  mitigationCitations,
  namePattern,
  pageEditAllowed,
  searchNames,
  selectPages,
} from "./pages.mjs"
import { addMapping, buildCoverage, readMap, writeMap } from "./record.mjs"
import {
  classifyCandidate,
  europePmcQuery,
  quoteInText,
  rankCandidates,
  searchFood,
  unitAmbiguous,
} from "./search.mjs"
import { BASIS_SENTENCE, repairPage } from "./repair.mjs"
import { fanoutPages, verifyTree } from "./verify.mjs"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const EM = "\u2014"
const EN = "\u2013"

function page(body, extra = "") {
  return `---\ntitle: Sample\n${extra}---\n# Sample\n\n## Overview\n\nLevel.\n\n${body}\n\n## Trade-offs\n\nNone.\n`
}

test("zero citations come first and olive oil leads that tie", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mitigation-pages-"))
  fs.mkdirSync(path.join(dir, "wiki/ingredients"), { recursive: true })
  fs.mkdirSync(path.join(dir, "wiki/products"), { recursive: true })
  const zero = (family, slug, title) => {
    fs.writeFileSync(
      path.join(dir, "wiki", family, `${slug}.md`),
      page(`## Mitigation for ${title}\n\n<p class="hmi-mitigation-gap" data-mitigation-gap>None yet.</p>`, `title: ${title}\n`),
    )
  }
  zero("ingredients", "almond", "Almond")
  zero("ingredients", "olive-oil", "Olive Oil")
  fs.writeFileSync(
    path.join(dir, "wiki/ingredients/rice.md"),
    page("## Mitigation for rice\n\nWashing lowered lead. [[sources/rice-wash|1]]\n\nAnd cadmium. [[sources/rice-wash|1]]"),
  )
  fs.writeFileSync(
    path.join(dir, "wiki/products/soup.md"),
    page("## Levers to reduce contamination\n\nNo citation here.\n\n## Other\n\n[[sources/not-mitigation|2]]"),
  )
  const chosen = selectPages(dir, { limit: 3 })
  assert.deepEqual(chosen.map((item) => item.page), [
    "ingredients/olive-oil",
    "ingredients/almond",
    "products/soup",
  ])
  assert.equal(chosen[0].citations, 0)
  assert.equal(chosen[2].citations, 0)
  const skipped = selectPages(dir, { limit: 2, skip: ["olive-oil"] })
  assert.equal(skipped[0].page, "ingredients/almond")
  assert.equal(DEFAULT_LIMIT, 8)
  assert.equal(selectPages(dir).length, 4)
  fs.rmSync(dir, { recursive: true, force: true })
})

test("citations outside the mitigation section do not count", () => {
  const text = page("## Mitigation options\n\nNo study yet.\n", "") + "\n[[sources/later|3]]\n"
  const cited = mitigationCitations(text)
  assert.equal(cited.citations, 0)
  assert.equal(cited.title, "Mitigation options")
})

test("this repository still queues olive oil first", () => {
  const [first] = selectPages(root, { limit: 1 })
  assert.equal(first.page, "ingredients/olive-oil")
  assert.equal(first.citations, 0)
  assert.ok(searchNames(first).includes("olive oil"))
})

test("class-level, closed, and mechanism-only papers are dropped", () => {
  const names = ["olive oil"]
  assert.equal(classifyCandidate({
    doi: "10.1000/class",
    title: "Heavy metals in vegetable oils",
    abstract: "Oils vary widely.",
    open_access: true,
  }, names).reason, "class_level_name_absent")
  assert.equal(classifyCandidate({
    doi: "10.1000/closed",
    title: "Refining olive oil",
    abstract: "Lead fell 40%.",
    open_access: false,
  }, names).reason, "not_open_access")
  assert.equal(classifyCandidate({
    doi: "10.1000/mech",
    title: "Mechanism of cadmium transport in olive oil",
    abstract: "Olive oil activates a pathway.",
    open_access: true,
  }, names).reason, "mechanism_only")
  assert.equal(classifyCandidate({
    doi: "10.1000/keep",
    title: "Refining olive oil",
    abstract: "Lead fell from 12.5 mg/kg.",
    open_access: true,
  }, names).keep, true)
  assert.equal(classifyCandidate({
    doi: "10.1000/diet",
    title: "Olive oil and cardiovascular risk",
    abstract: "Olive oil reduced cardiovascular risk in adults.",
    open_access: true,
  }, names).reason, "no_measured_reduction_context")
  assert.match(europePmcQuery(names), /OPEN_ACCESS:Y/)
  assert.match(europePmcQuery(names), /olive oil/)
})

test("a review that names many foods sorts ahead of a single-food paper", () => {
  const index = ["rice", "olive oil", "spinach"].map((name) => ({
    page: `ingredients/${name.replace(/ /g, "-")}`,
    patterns: [namePattern(name)],
  }))
  const review = {
    doi: "10.1000/review",
    title: "A review of washing to reduce cadmium in rice, olive oil, and spinach",
    abstract: "Washing reduced cadmium in rice, olive oil, and spinach.",
    year: 2018,
    open_access: true,
  }
  const single = {
    doi: "10.1000/single",
    title: "Washing rice",
    abstract: "Washing reduced cadmium in rice from 10 µg/kg dry weight.",
    year: 2024,
    open_access: true,
  }
  const ranked = rankCandidates([single, review], ["rice"], index)
  assert.equal(ranked[0].doi, "10.1000/review")
})

test("search keeps an open-access full text that names the food", async () => {
  const sentence = "Refining lowered lead from 12.5 mg/kg to 3.1 mg/kg in olive oil."
  const xml = `<?xml version="1.0"?><article><body><p>${sentence}</p><p>${"background ".repeat(40)}</p></body></article>`
  const fetchImpl = async (url) => {
    if (String(url).includes("fullTextXML")) {
      return { ok: true, status: 200, text: async () => xml, json: async () => ({}) }
    }
    if (String(url).includes("europepmc")) {
      return {
        ok: true,
        status: 200,
        json: async () => ({
          resultList: {
            result: [
              {
                doi: "10.1000/olive",
                title: "Refining of olive oil",
                abstractText: "Lead fell from 12.5 mg/kg in olive oil.",
                pubYear: "2020",
                isOpenAccess: "Y",
                pmcid: "PMC1",
                authorString: "Ada",
                journalTitle: "Foods",
              },
              {
                doi: "10.1000/class",
                title: "Heavy metals in vegetable oils",
                abstractText: "Oils vary.",
                pubYear: "2021",
                isOpenAccess: "Y",
                pmcid: "PMC2",
              },
            ],
          },
        }),
        text: async () => "",
      }
    }
    return { ok: true, status: 200, json: async () => ({ results: [] }), text: async () => "" }
  }
  const result = await searchFood({
    page: "ingredients/olive-oil",
    title: "Olive Oil",
    label: "Olive Oil",
    slug: "olive-oil",
    aliases: ["extra-virgin-olive-oil"],
  }, { fetchImpl, perPage: 5, index: [] })
  assert.equal(result.papers.length, 1)
  assert.equal(result.papers[0].doi, "10.1000/olive")
  assert.ok(quoteInText(sentence, result.papers[0].fulltext))
  assert.equal(quoteInText("lead fell from 1 mg/kg to 0 mg/kg", result.papers[0].fulltext), false)
  assert.ok(result.excluded.some((item) => item.reason === "class_level_name_absent"))
})

test("a mapping stores the printed effect and rejects an invented one", () => {
  const fullText = "Washing cut cadmium from 8.0 µg/kg dry weight to 3.0 µg/kg dry weight."
  const map = { version: 1, papers: {} }
  const stored = addMapping(map, {
    doi: "https://doi.org/10.1000/Wash",
    title: "Washing olives",
    year: "2019",
    ingredients: "olive-oil, sunflower-oil",
    products: "",
    metals: "Cd, aluminium",
    intervention: "washing",
    effect: "cadmium from 8.0 µg/kg dry weight to 3.0 µg/kg dry weight",
    source: "sources/ada2019-washing-olives",
    fullText,
  })
  assert.equal(stored.doi, "10.1000/wash")
  assert.deepEqual(stored.mapping.ingredients, ["olive-oil", "sunflower-oil"])
  assert.deepEqual(stored.mapping.metals, ["cadmium", "aluminum"])
  assert.equal(stored.mapping.unit_ambiguous, false)
  const parent = addMapping(map, {
    doi: "10.1000/wash",
    title: "Washing olives",
    year: 2019,
    ingredients: "sunflower-oil",
    metals: "lead",
    intervention: "refining",
    effect: "cadmium from 8.0 µg/kg dry weight to 3.0 µg/kg dry weight",
    source: "sources/ada2019-washing-olives",
    fullText,
    evidence_scope: "parent-matrix",
    parent_matrix: "edible oil",
  })
  assert.equal(parent.mapping.evidence_scope, "parent-matrix")
  assert.equal(parent.mapping.display_note, "Evidence from edible oil, not measured in this product.")
  assert.throws(() => addMapping(map, {
    ...stored.mapping,
    doi: "10.1000/invented",
    metals: "lead",
    ingredients: "olive-oil",
    effect: "lead fell from 9 mg/kg to 1 mg/kg",
    source: "sources/invented",
    fullText,
  }), /quotation/)
  assert.equal(unitAmbiguous("about 4.0 mg/kg after soaking"), true)
  assert.equal(unitAmbiguous("fell by 40 percent"), false)
})

test("coverage counts mitigation citations and mapped metals", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mitigation-coverage-"))
  fs.mkdirSync(path.join(dir, "wiki/ingredients"), { recursive: true })
  fs.mkdirSync(path.join(dir, "data"), { recursive: true })
  fs.writeFileSync(
    path.join(dir, "wiki/ingredients/olive-oil.md"),
    page("## Mitigation for olive\n\nRefining lowered lead. [[sources/ada2019-washing-olives|4]]"),
  )
  const map = { version: 1, papers: {} }
  addMapping(map, {
    doi: "10.1000/wash",
    title: "Washing",
    year: 2019,
    ingredients: "olive-oil",
    metals: "lead",
    intervention: "refining",
    effect: "cadmium from 8.0 µg/kg dry weight to 3.0 µg/kg dry weight",
    source: "sources/ada2019-washing-olives",
    fullText: "cadmium from 8.0 µg/kg dry weight to 3.0 µg/kg dry weight in the lot",
  })
  writeMap(path.join(dir, "data/mitigation-map.json"), map)
  const report = buildCoverage(dir, readMap(path.join(dir, "data/mitigation-map.json")), null)
  assert.equal(report.pages[0].page, "ingredients/olive-oil")
  assert.equal(report.pages[0].mitigation_papers, 1)
  assert.deepEqual(report.pages[0].metals_covered, ["lead"])
  fs.rmSync(dir, { recursive: true, force: true })
})

test("page edits stay in the mitigation section", () => {
  const before = [
    "---",
    "title: Olive",
    "hero_image: /static/heroes/olive.webp",
    "---",
    "# Olive",
    "",
    "## Overview",
    "",
    "Level.",
    "",
    "## Mitigation for olive",
    "",
    '<a id="keep"></a>',
    "<p>Gap.</p>",
    "",
    "## Trade-offs",
    "",
    "None.",
    "",
    "<!-- BEGIN: hmi-page-references -->",
    "## References",
    "",
    "1. [[sources/old|Old]]",
    "<!-- END: hmi-page-references -->",
    "",
  ].join("\n")
  const after = before
    .replace("<p>Gap.</p>", "Refining lowered lead. [[sources/new|2]]")
    .replace("<!-- END: hmi-page-references -->", "2. [[sources/new|New]]\n<!-- END: hmi-page-references -->")
  assert.equal(pageEditAllowed(before, after).ok, true)
  assert.equal(pageEditAllowed(before, before.replace("olive.webp", "other.webp")).ok, false)
  assert.equal(pageEditAllowed(before, before.replace("None.", "Changed.")).ok, false)
  const contract = page('## Heavy metal mitigation and remediation for seaweed\n\n<a id="keep"></a>\nGap.')
  const contractAfter = contract.replace("Gap.", "Washing lowered cadmium. [[sources/cui2026|1]]")
  assert.equal(pageEditAllowed(contract, contractAfter).ok, true)
  assert.equal(pageEditAllowed(contract, contract.replace("Level.", "Changed.")).ok, false)
})

test("citation markup drops unicode dashes and keeps the next number", () => {
  const pageText = 'class="cite"\n[[sources/old|2]]'
  assert.equal(nextCitationNumber(pageText), 3)
  const parts = citationParts({
    citeKey: "ada2019-olive",
    pageText,
    meta: { title: `Lead ${EN} cadmium`, authors: ["Ada"], year: 2019, publication: "Foods", doi: "10.1000/olive" },
  })
  assert.equal(parts.number, 3)
  assert.equal(parts.sup.includes(EN), false)
  assert.equal(parts.sup.includes(EM), false)
  assert.match(parts.sup, /\[\[sources\/ada2019-olive\|3\]\]/)
  assert.match(parts.reference, /\[\[sources\/ada2019-olive\|Lead - cadmium\]\]/)
})

test("a new paper fans out to every mapped food", () => {
  const pages = fanoutPages(
    { papers: {} },
    { papers: { "10.1/x": { doi: "10.1/x", mappings: [{ ingredients: ["olive-oil", "rice"], products: ["soup"], effect_as_printed: "a" }] } } },
  )
  assert.deepEqual(pages, ["ingredients/olive-oil", "ingredients/rice", "products/soup"])
})

test("verify accepts a quoted mitigation edit and rejects a side edit", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mitigation-verify-"))
  const full = path.join(dir, "full")
  fs.mkdirSync(path.join(dir, "wiki/ingredients"), { recursive: true })
  fs.mkdirSync(path.join(dir, "wiki/sources"), { recursive: true })
  fs.mkdirSync(path.join(dir, "data"), { recursive: true })
  fs.mkdirSync(full, { recursive: true })
  const effect = "Refining lowered lead from 12.5 mg/kg dry weight to 3.1 mg/kg dry weight."
  fs.writeFileSync(path.join(full, "10.1000_olive.txt"), effect)
  const before = [
    "---",
    "title: Olive",
    "---",
    "# Olive",
    "",
    "## Overview",
    "",
    "Level.",
    "",
    "## Mitigation for olive",
    "",
    '<a id="keep"></a>',
    '<p class="hmi-mitigation-gap" data-mitigation-gap>None.</p>',
    "",
    "## Trade-offs",
    "",
    "None.",
    "",
  ].join("\n")
  const after = before.replace(
    '<p class="hmi-mitigation-gap" data-mitigation-gap>None.</p>',
    `Refining lowered lead, as printed. The paper does not state a second basis. [[sources/ada2019-olive|1]] ${effect}`,
  )
  fs.writeFileSync(path.join(dir, "wiki/ingredients/olive-oil.md"), after)
  fs.writeFileSync(path.join(dir, "wiki/sources/ada2019-olive.md"), "---\ntype: source\n---\n# Ada\n")
  fs.writeFileSync(path.join(dir, "wiki/log.md"), `---\ntitle: Log\n---\n\n## [2026-11-04] ingest | mitigation evidence for olive oil\n\nPages touched: [[ingredients/olive-oil]]\nNotes: Direction: toward the literature.\n\n## [2026-11-01] ingest | older\n`)
  const map = { version: 1, papers: {} }
  addMapping(map, {
    doi: "10.1000/olive",
    title: "Refining",
    year: 2019,
    ingredients: "olive-oil",
    metals: "lead",
    intervention: "refining",
    effect,
    source: "sources/ada2019-olive",
    fullText: effect,
  })
  writeMap(path.join(dir, "data/mitigation-map.json"), map)
  const files = {
    "wiki/ingredients/olive-oil.md": before,
    "wiki/log.md": "---\ntitle: Log\n---\n\n## [2026-11-01] ingest | older\n",
    "data/mitigation-map.json": null,
    "wiki/sources/ada2019-olive.md": null,
  }
  const status = [
    " M wiki/ingredients/olive-oil.md",
    " M wiki/log.md",
    "?? data/mitigation-map.json",
    "?? wiki/sources/ada2019-olive.md",
  ].join("\n")
  const errors = verifyTree({
    root: dir,
    pages: ["ingredients/olive-oil"],
    fulltextDir: full,
    status,
    diff: "",
    readBase: (file) => files[file] ?? null,
  })
  assert.deepEqual(errors, [])
  const blocked = verifyTree({
    root: dir,
    pages: ["ingredients/olive-oil"],
    fulltextDir: full,
    status: " M wiki/ingredients/olive-oil.md\n M wiki/log.md\n",
    diff: "",
    readBase: (file) => file.endsWith("olive-oil.md") ? before.replace("Level.", "Changed.") : (files[file] ?? null),
  })
  assert.ok(blocked.some((line) => line.includes("section changed")))
  fs.rmSync(dir, { recursive: true, force: true })
})

test("repair drops a new em dash and states an ambiguous basis", () => {
  const before = page('## Mitigation for apple juice\n\n<a id="keep"></a>\nGap.')
  const quote = "The beads were able to reduce the lead content in juice containing 10 ppm by up to 30%."
  const after = before.replace("Gap.", `Beads cut lead ${EM} 30 percent. ${quote}`)
  const map = {
    papers: {
      "10.1/x": {
        doi: "10.1/x",
        mappings: [{ ingredients: ["apple-juice"], products: [], effect_as_printed: quote, unit_ambiguous: true }],
      },
    },
  }
  const repaired = repairPage({
    before,
    after,
    pageId: "ingredients/apple-juice",
    beforeMap: { papers: {} },
    afterMap: map,
  })
  assert.equal(repaired.includes(EM), false)
  assert.match(repaired, /Beads cut lead - 30 percent/)
  assert.match(repaired, new RegExp(BASIS_SENTENCE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
  assert.match(repaired, /<a id="keep"><\/a>/)
  assert.match(repaired, /## Trade-offs\n\nNone\./)
  const already = repairPage({
    before,
    after: before.replace("Gap.", `${quote} The paper does not state the weight basis. The concentration is as printed.`),
    pageId: "ingredients/apple-juice",
    beforeMap: { papers: {} },
    afterMap: map,
  })
  assert.equal(already.split(BASIS_SENTENCE).length - 1, 1)
})

test("the scheduled workflow carries the mitigation fill contract", () => {
  const yml = fs.readFileSync(path.join(root, ".github/workflows/claude-mitigation-fill.yml"), "utf8")
  assert.match(yml, /cron: "0 1 \* \* \*"/)
  assert.match(yml, /cron: "0 7 \* \* \*"/)
  assert.match(yml, /cron: "0 13 \* \* \*"/)
  assert.match(yml, /cron: "0 19 \* \* \*"/)
  assert.match(yml, /default: "8"/)
  assert.equal(/cron: "0 3 \* \* \*"/.test(yml), false)
  assert.match(yml, /workflow_dispatch:/)
  assert.match(yml, /anthropics\/claude-code-action@v1/)
  assert.match(yml, /claude_code_oauth_token: \$\{\{ secrets\.CLAUDE_CODE_OAUTH_TOKEN \}\}/)
  assert.match(yml, /DEPOSITS_READ_TOKEN: \$\{\{ secrets\.DEPOSITS_READ_TOKEN \}\}/)
  assert.match(yml, /show_full_output: "true"/)
  assert.match(yml, /--allowedTools "Bash,Read,Edit,Write,Grep,Glob"/)
  assert.match(yml, /gh pr merge --auto --squash/)
  assert.match(yml, /evidence-fill\/mitigation-/)
  assert.match(yml, /npm test/)
  assert.match(yml, /lint:page-structure/)
  assert.match(yml, /lint:page-openings/)
  assert.match(yml, /lint:thin-with-evidence/)
  assert.match(yml, /npm run check/)
  assert.match(yml, /tools\/mitigation-fill\/pages\.mjs/)
  assert.match(yml, /tools\/mitigation-fill\/search\.mjs/)
  assert.match(yml, /tools\/mitigation-fill\/repair\.mjs/)
  assert.match(yml, /PUPPETEER_SKIP_CHROME_HEADLESS_SHELL_DOWNLOAD/)
  assert.match(yml, /europepmc|search\.mjs/)
})
