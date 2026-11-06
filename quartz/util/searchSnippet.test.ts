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
  explicitSearchTitle,
  extractOverview,
  isMetalArticle,
  isRegulationArticle,
  metalSearchFields,
} from "../../tools/lib/search-snippet.mjs"

const root = path.resolve("wiki")

test("metal evidence children retain their own document titles and descriptions", () => {
  assert.equal(isMetalArticle("metals/lead/evidence", "metal-evidence"), false)
  assert.equal(isMetalArticle("metals/lead/evidence/page-2", "metal-evidence"), false)
  assert.equal(isMetalArticle("metals/lead", "metal"), true)
})

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
    searchTitle: frontmatterValue(markdown, "search_title"),
    searchDescription: frontmatterValue(markdown, "search_description"),
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

test("an authored search title stays a complete phrase inside the document-title budget", () => {
  const phrase = "Organic certification is not protective against heavy metals"
  const title = explicitSearchTitle({ search_title: phrase })
  assert.equal(title, phrase)
  assert.ok(title.length <= HTML_TITLE_MAX)
  assert.equal(/[—–]/.test(title), false)
  const branded = `${phrase} | Heavy Metal Index`
  assert.ok(branded.length > HTML_TITLE_MAX)
  const chopped = capHtmlTitle(
    "Organic certification is not protective against heavy-metal contamination, and in some food matrices is associated with higher loads",
  )
  assert.equal(chopped.endsWith("heavy-metal"), true)
  assert.notEqual(chopped, title)
  const page = fs.readFileSync(
    path.join(root, "synthesis", "organic-certification-not-protective.md"),
    "utf8",
  )
  assert.match(page, new RegExp(`search_title: "${phrase}"`))
})

test("every metal page gets a descriptive title and a 120 to 155 character description", () => {
  const slugs = fs.readdirSync(path.join(root, "metals"))
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .map((file) => file.replace(/\.md$/, ""))
  assert.ok(slugs.length >= 30)
  for (const slug of slugs) {
    const fields = metalFields(slug)
    assert.ok(fields, slug)
    assert.ok(fields.title.length <= HTML_TITLE_MAX, `${slug} title ${fields.title.length}: ${fields.title}`)
    assert.ok(fields.title.length >= 30, `${slug} title is too generic: ${fields.title}`)
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
  assert.match(methylmercury.title, /^Methylmercury in Fish: Exposure and Evidence/)
  assert.match(methylmercury.description, /aquatic food webs/)
  const tellurium = fields("tellurium")
  assert.match(tellurium.title, /^Tellurium \(Te\) in Food: Sources, Limits and Evidence/)
  assert.match(tellurium.description, /wild mushrooms/)
  assert.doesNotMatch(tellurium.description, /Ufelle|source-map/)
})

test("profile search intent keeps source-map and species claims distinct", () => {
  const barium = metalFields("barium")!
  assert.match(barium.title, /^Barium Toxicology:/)
  assert.doesNotMatch(barium.title + barium.description, /in food|food occurrence|regulatory limits/i)
  assert.match(barium.description, /limited|limits|developing/i)
  const lithium = metalFields("lithium")!
  assert.match(lithium.title, /Medical-Therapy/)
  assert.doesNotMatch(lithium.title + lithium.description, /lithium in food/i)
  const totalArsenic = metalFields("arsenic-total")!
  assert.match(totalArsenic.title, /Total Arsenic vs Inorganic Arsenic/)
  assert.match(totalArsenic.description, /cannot establish inorganic-arsenic exposure/)
  const chromium = metalFields("chromium-hexavalent")!
  assert.match(chromium.title, /Hexavalent Chromium in Water/)
  assert.match(chromium.description, /cannot establish the hexavalent fraction/)
})

test("reviewed search overrides fail on truncation and fall back when absent", () => {
  const original = metalSearchFields({ title: "Lead", symbol: "Pb" })!
  assert.equal(metalSearchFields({ title: "Lead", symbol: "Pb", searchTitle: 42 })?.title, original.title)
  assert.throws(() => metalSearchFields({ title: "Lead", searchTitle: "word ".repeat(20) }), /exceeds/)
  assert.throws(() => metalSearchFields({ title: "Lead", searchDescription: "Too short." }), /120 to 155/)
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

// HMI-SEO-6: actual long source topics keep their attribution and a complete
// main phrase, rather than a word-boundary fragment of the paper title.
test("source titles preserve complete main phrases and first-author spelling", async () => {
  const { sourceSearchTitle } =
    await import("../../tools/lib/search-snippet.mjs");
  const source = {
    type: "source",
    title:
      "Exposure assessment of dietary cadmium: findings from shanghainese over 40 years, China",
    authors: ["He P", "Lu Y"],
    year: 2013,
  };
  assert.equal(
    sourceSearchTitle(source),
    "Exposure assessment of dietary cadmium: He P 2013",
  );
  assert.equal(
    sourceSearchTitle({
      ...source,
      title: "Pb in rice",
      authors: ["G. A. Smith"],
    }),
    "Lead in rice: G. A. Smith 2013",
  );
  assert.equal(
    sourceSearchTitle({ ...source, search_topic: "Dietary cadmium exposure" }),
    "Dietary cadmium exposure: He P 2013",
  );
});

test("source titles fall back when topic, first author or year is unavailable", async () => {
  const { sourceSearchTitle } =
    await import("../../tools/lib/search-snippet.mjs");
  const source = {
    type: "source",
    title: "Cadmium in rice",
    authors: ["He P"],
    year: 2013,
  };
  for (const overrides of [
    { title: "" },
    { authors: [] },
    { authors: ["Unknown authors"] },
    { year: null },
    { year: "forthcoming" },
    { type: "ingredient" },
  ])
    assert.equal(sourceSearchTitle({ ...source, ...overrides }), undefined);
});

test("a long indivisible source topic is retained whole instead of cut mid-phrase", async () => {
  const { sourceSearchTitle } =
    await import("../../tools/lib/search-snippet.mjs");
  const title =
    "Cadmium-associated mitochondrial biochemical histopathological toxicological responses";
  assert.equal(
    sourceSearchTitle({ type: "source", title, authors: ["He P"], year: 2013 }),
    `${title}: He P 2013`,
  );
});

test("baseline title dates are unique and the hub is unchanged", async () => {
  const { auditSearchTitle } =
    await import("../../tools/lib/search-snippet.mjs");
  assert.equal(
    auditSearchTitle("audits/2026-05-17-baseline", "Audit dashboard"),
    "Audit dashboard: 2026-05-17",
  );
  assert.equal(
    auditSearchTitle("audits/2026-08-11-baseline", "Audit dashboard"),
    "Audit dashboard: 2026-08-11",
  );
  assert.equal(
    auditSearchTitle(
      "audits/2026-08-11-baseline",
      "Audit dashboard: 2026-08-11",
    ),
    "Audit dashboard: 2026-08-11",
  );
  assert.equal(auditSearchTitle("audits/index", "Audit dashboard"), undefined);
});


test("different source papers with colliding short topics keep their fuller supplied topics", async () => {
  const { sourceSearchTitle } = await import("../../tools/lib/search-snippet.mjs")
  const a = { type: "source", title: "Quality Assurance Project Plan: Parabens and Metals in Children’s Cosmetic and Personal Care Products", authors: ["Stone A"], year: 2012 }
  const b = { ...a, title: "Quality Assurance Project Plan: Phthalates in Children's Products" }
  const pages = [{ frontmatter: a }, { frontmatter: b }]
  assert.equal(sourceSearchTitle(a), sourceSearchTitle(b))
  assert.equal(sourceSearchTitle(a, pages), `${a.title}: Stone A 2012`)
  assert.equal(sourceSearchTitle(b, pages), `${b.title}: Stone A 2012`)
  // Cached lookup preserves the same result across all rendered pages.
  assert.equal(sourceSearchTitle(a, pages), `${a.title}: Stone A 2012`)
})
