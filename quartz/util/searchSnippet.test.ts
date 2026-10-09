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
    assert.ok(fields.title.length > frontmatterLength(slug), `${slug} title stayed bare: ${fields.title}`)
    assert.ok(
      fields.description.length >= META_DESCRIPTION_MIN && fields.description.length <= META_DESCRIPTION_MAX,
      `${slug} description ${fields.description.length}: ${fields.description}`,
    )
    assert.equal(/[—–]/.test(fields.title + fields.description), false, slug)
    assert.equal(/\([^)]*\b(?:19|20)\d{2}/.test(fields.title), false, fields.title)
    assert.equal(/\b(?:comprehensive|essential guide|dangerous|alarming|shocking)\b/i.test(fields.title + fields.description), false, slug)
  }
})

function frontmatterLength(slug: string): number {
  const markdown = fs.readFileSync(path.join(root, "metals", `${slug}.md`), "utf8")
  return frontmatterValue(markdown, "title").length
}

test("named metal pages lead with the element and a clause from the overview", () => {
  const fields = (slug: string) => {
    const generated = metalFields(slug)
    if (!generated) throw new Error(`missing fields for ${slug}`)
    return generated
  }
  const arsenic = fields("arsenic")
  assert.match(arsenic.title, /^Arsenic \(As\): /)
  assert.match(arsenic.description, /^Arsenic is a metalloid/)
  const nickel = fields("nickel")
  assert.match(nickel.title, /^Nickel \(Ni\): /)
  assert.match(nickel.description, /nickel/i)
  const tin = fields("tin")
  assert.match(tin.title, /^Tin \(Sn\): /)
  assert.match(tin.description, /tinplated steel cans/)
  const chromium = fields("chromium")
  assert.match(chromium.title, /^Chromium \(Cr\): /)
  const antimony = fields("antimony")
  assert.match(antimony.title, /^Antimony \(Sb\): /)
  assert.match(antimony.description, /oxidation states/)
  const methylmercury = fields("mercury-methyl")
  assert.match(methylmercury.title, /^Methylmercury \(MeHg\): /)
  assert.match(methylmercury.description, /fish/)
  const tellurium = fields("tellurium")
  assert.match(tellurium.title, /^Tellurium \(Te\): /)
  assert.match(tellurium.description, /source-map context only/)
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
