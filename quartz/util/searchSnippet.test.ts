import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import {
  HTML_TITLE_MAX,
  META_DESCRIPTION_MAX,
  META_DESCRIPTION_MIN,
  capHtmlTitle,
  citationDoi,
  extractOverview,
  isRegulationArticle,
  metalSearchFields,
} from "../../tools/lib/search-snippet.mjs"

const root = path.resolve("wiki")

function frontmatterValue(markdown: string, key: string): string {
  const block = markdown.slice(3, markdown.indexOf("\n---", 3))
  const match = block.match(new RegExp(`^${key}:\\s*(.*)$`, "m"))
  return match ? match[1].trim().replace(/^"|"$/g, "") : ""
}

function metalFields(slug: string) {
  const markdown = fs.readFileSync(path.join(root, "metals", `${slug}.md`), "utf8")
  return metalSearchFields({
    title: frontmatterValue(markdown, "title"),
    symbol: frontmatterValue(markdown, "symbol"),
    name: frontmatterValue(markdown, "name"),
    overview: extractOverview(markdown),
  })
}

test("document titles cut on a word boundary at about 70 characters", () => {
  const markdown = fs.readFileSync(path.join(root, "sources", "efsa2004-organotins-foodstuffs.md"), "utf8")
  const full = frontmatterValue(markdown, "title")
  const capped = capHtmlTitle(full)
  assert.ok(full.length > HTML_TITLE_MAX)
  assert.ok(capped.length <= HTML_TITLE_MAX)
  assert.ok(capped.length >= 45)
  assert.equal(capped, "Opinion of the Scientific Panel on Contaminants in the Food Chain")
  assert.equal(full.startsWith(capped + " ") || full === capped, true)
  assert.equal(/[—–]/.test(capped), false)
})

test("spaced dashes in titles become a colon", () => {
  const capped = capHtmlTitle("EFSA — Tolerable Weekly Intake for Cadmium, 2.5 µg/kg b.w./week")
  assert.equal(capped, "EFSA: Tolerable Weekly Intake for Cadmium, 2.5 µg/kg b.w./week")
  assert.equal(/[—–]/.test(capped), false)
  assert.ok(capped.length <= HTML_TITLE_MAX)
})

test("short titles are left unchanged", () => {
  assert.equal(capHtmlTitle("Lead"), "Lead")
  assert.equal(capHtmlTitle("Methylmercury"), "Methylmercury")
})

test("every metal page gets a descriptive title and a 120 to 160 character description", () => {
  const slugs = fs.readdirSync(path.join(root, "metals"))
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .map((file) => file.replace(/\.md$/, ""))
  assert.ok(slugs.length >= 30)
  for (const slug of slugs) {
    const fields = metalFields(slug)
    assert.ok(fields, slug)
    assert.ok(fields.title.length <= HTML_TITLE_MAX, `${slug} title ${fields.title.length}: ${fields.title}`)
    assert.match(fields.title, / in Food: (?:Sources, Limits and Evidence|Form and Evidence|Measurement and Evidence)(?: \| Heavy Metal Index)?$/, fields.title)
    assert.ok(
      fields.description.length >= META_DESCRIPTION_MIN && fields.description.length <= META_DESCRIPTION_MAX,
      `${slug} description ${fields.description.length}: ${fields.description}`,
    )
    for (const sentence of fields.description.split(/(?<=[.!?])\s+/)) {
      assert.match(sentence, /^[A-Z].*[.!?]$/, `${slug} ${sentence}`)
      assert.doesNotMatch(sentence, /^(?:It|This|These|Those|They|That)\b/, sentence)
    }
    assert.equal(/[—–]/.test(fields.title + fields.description), false, slug)
    assert.equal(/\b(?:19|20)\d{2}\b/.test(fields.title + fields.description), false, fields.description)
    assert.equal(/\[\d/.test(fields.description), false, fields.description)
    assert.equal(/\b(?:source-map|this node|this wiki|species pages)\b/i.test(fields.description), false, fields.description)
    assert.equal(/\b(?:comprehensive|essential guide|dangerous|alarming|shocking)\b/i.test(fields.title + fields.description), false, slug)
  }
})

test("named metal pages use a complete title phrase and a whole-sentence description", () => {
  const fields = (slug: string) => {
    const generated = metalFields(slug)
    if (!generated) throw new Error(`missing fields for ${slug}`)
    return generated
  }
  const arsenic = fields("arsenic")
  assert.equal(arsenic.title, "Arsenic (As) in Food: Sources, Limits and Evidence | Heavy Metal Index")
  assert.match(arsenic.description, /^Arsenic is a metalloid/)
  const nickel = fields("nickel")
  assert.match(nickel.title, /^Nickel \(Ni\) in Food: Sources, Limits and Evidence/)
  assert.match(nickel.description, /splits sharply by route\./)
  const tin = fields("tin")
  assert.match(tin.title, /^Tin \(Sn\) in Food: Sources, Limits and Evidence/)
  assert.match(tin.description, /tinplated steel cans\./)
  const chromium = fields("chromium")
  assert.match(chromium.title, /^Chromium \(Cr\) in Food: Sources, Limits and Evidence/)
  const antimony = fields("antimony")
  assert.match(antimony.title, /^Antimony \(Sb\) in Food: Sources, Limits and Evidence/)
  assert.match(antimony.description, /oxidation states/)
  const methylmercury = fields("mercury-methyl")
  assert.match(methylmercury.title, /^Methylmercury \(MeHg\) in Food: Form and Evidence/)
  assert.match(methylmercury.description, /fish\./)
  const tellurium = fields("tellurium")
  assert.match(tellurium.title, /^Tellurium \(Te\) in Food: Sources, Limits and Evidence/)
  assert.match(tellurium.description, /minor toxic metals/)
  assert.doesNotMatch(tellurium.description, /Ufelle|source-map/)
})

test("regulation pages are citation targets and a DOI is emitted only when one exists", () => {
  assert.equal(isRegulationArticle("regulations/efsa-cadmium-twi", "regulation"), true)
  assert.equal(isRegulationArticle("regulations/fda-closer-to-zero", "regulation-program"), true)
  assert.equal(isRegulationArticle("regulations/index", "regulation"), false)
  assert.equal(isRegulationArticle("regulations/by-jurisdiction", undefined), false)
  assert.equal(citationDoi({ wiki_doi: null, doi: "10.2903/j.efsa.2004.102" }), "10.2903/j.efsa.2004.102")
  assert.equal(citationDoi({ wiki_doi: "null" }), undefined)
  assert.equal(citationDoi({ wiki_doi: "https://doi.org/10.1234/example" }), "10.1234/example")
})
