import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { test } from "node:test"
import { h } from "preact"
import render from "preact-render-to-string"
import matter from "gray-matter"
import yaml from "js-yaml"
import Head, { CitationMetadata } from "../quartz/components/Head"
import { authorProfileGraph } from "../quartz/components/authorIdentity"
import identity from "../data/researcher-identity.json"
import { citationDate, publicationAuthors } from "../tools/lib/publication-metadata.mjs"
import { karenEntity, paleoFoundationEntity } from "../tools/lib/entity-graph.mjs"
import type { FullSlug } from "../quartz/util/path"
import type { QuartzComponentProps } from "../quartz/components/types"

function citation(fm: Record<string, unknown>, slug = "synthesis/example", hasPdf = true) {
  return render(h(CitationMetadata, { frontmatter: fm, slug: slug as FullSlug, title: String(fm.title ?? "Example"), socialUrl: `https://heavymetalindex.com/${slug}`, hasPdf }))
}
const parse = (file: string) => matter(fs.readFileSync(file, "utf8"), { engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object } }).data
const jsonScripts = (html: string) => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))

test("canonical person, affiliations, founder and HMI firewall agree", () => {
  const person = karenEntity() as any
  assert.equal(person["@id"], identity.personId)
  assert.equal(person.worksFor["@id"], identity.affiliations[0].id)
  assert.deepEqual(person.affiliation.map((a: any) => a["@id"]), identity.affiliations.map((a) => a.id))
  assert.ok(person.sameAs.includes(identity.profiles.scholar))
  assert.ok(person.sameAs.includes(identity.profiles.linkedin))
  assert.ok(!person.sameAs.includes(identity.profiles.heavyMetalCertified))
  assert.equal((paleoFoundationEntity().founder as any)["@id"], identity.personId)
  assert.ok(!("alumniOf" in person))
  const profile = authorProfileGraph("heavymetalindex.com")["@graph"] as any[]
  assert.equal(profile[0].mainEntity["@id"], identity.personId)
  assert.equal(profile.find((x) => x["@type"] === "Person").affiliation.length, 4)
})

test("all actual DOI report tags preserve their own titles, DOI and publication precision", () => {
  let checked = 0
  for (const file of fs.readdirSync("wiki/synthesis").filter((f) => f.endsWith(".md"))) {
    const fm = parse(`wiki/synthesis/${file}`)
    if (!fm.wiki_doi) continue
    const output = citation(fm, `synthesis/${file.replace(/\.md$/, "")}`)
    assert.ok(output.includes(render(h("meta", { name: "citation_title", content: fm.title }))), file)
    assert.ok(output.includes(`name="citation_doi" content="${fm.wiki_doi}"`), file)
    assert.ok(output.includes('name="citation_author" content="Pendergrass, Karen"'), file)
    assert.ok(output.includes(`name="citation_author_orcid" content="${identity.profiles.orcid}"`), file)
    assert.ok(output.includes('name="citation_publication_date"'), file)
    assert.ok(!output.includes("citation_journal_title"), file)
    assert.ok(!output.includes("heavymetalcertified.com"), file)
    checked++
  }
  assert.ok(checked > 0)
  assert.ok(citation(parse("wiki/synthesis/spice-adulteration-lead-infants.md")).includes('name="citation_publication_date" content="2026"'))
})

test("foreign sources keep original authors and DOI without Karen identifiers or our PDF", () => {
  const output = citation({ type: "source", title: "External paper", authors: ["Doe, Jane", "Smith, Alex"], year: 2024, publication: "Original Journal", doi: "10.1234/original", wiki_doi: "10.83376/not-the-paper" }, "sources/external")
  for (const name of ["Doe, Jane", "Smith, Alex"]) assert.ok(output.includes(`name="citation_author" content="${name}"`))
  assert.ok(output.includes('name="citation_doi" content="10.1234/original"'))
  assert.ok(!output.includes("Karen") && !output.includes(identity.orcid))
  assert.ok(!output.includes("citation_pdf_url"))
  assert.ok(!output.includes("10.83376/not-the-paper"))
})

test("declared coauthors survive; foreign authors cannot inherit Karen ORCID or affiliations", () => {
  const mixed = citation({ type: "synthesis", authors: [identity.name, "Jane Doe"], published: "2026-01-02" })
  assert.equal((mixed.match(/name="citation_author"/g) ?? []).length, 2)
  assert.equal((mixed.match(/citation_author_orcid/g) ?? []).length, 1)
  const foreign = citation({ type: "synthesis", author: "Jane Doe", published: "2026-01-02" })
  assert.ok(!foreign.includes("Karen") && !foreign.includes(identity.orcid))
  assert.ok(!foreign.includes("citation_author_institution"))
  assert.throws(() => publicationAuthors({ author: "Jane Doe", author_orcid: identity.orcid }), /cannot inherit/)
  assert.throws(() => publicationAuthors({ author: identity.name, author_orcid: "0000-0000-0000-0000" }), /conflicting/)
})

test("dates are real publication fields; no timestamps are relabeled as publication", () => {
  assert.equal(citationDate("2024-02-29"), "2024/02/29")
  for (const value of ["2025-02-29", "2026-13-01", "2026-04-31", false, "today"]) assert.equal(citationDate(value), undefined)
  assert.ok(!citation({ type: "synthesis", created: "2025-01-01", updated: "2026-01-01" }).includes("citation_publication_date"))
  assert.ok(!citation({ type: "synthesis", published: "2026-02-30" }).includes("citation_publication_date"))
  assert.equal(citation({ type: "metal" }, "metals/stub", false), "")
  assert.equal(citation({ type: "synthesis-index" }, "synthesis/index"), "")
})

test("false noindex stays indexable; canonical and PDF target same original landing page", () => {
  const props = (noindex: unknown) => ({
    cfg: { baseUrl: "heavymetalindex.com", pageTitle: "Heavy Metal Index", locale: "en-US", theme: { cdnCaching: false } },
    ctx: { cfg: { plugins: { emitters: [] } } },
    fileData: { slug: "synthesis/example", frontmatter: { title: "Example", type: "synthesis", published: "2026-01-02", noindex } },
    externalResources: { css: [], js: [], additionalHead: [] },
  }) as unknown as QuartzComponentProps
  for (const noindex of [false, "false", undefined]) {
    const output = render(h(Head(), props(noindex)))
    assert.ok(!output.includes('name="robots"'))
    assert.ok(output.includes('rel="canonical" href="https://heavymetalindex.com/synthesis/example"'))
    assert.ok(output.includes('name="citation_pdf_url" content="https://heavymetalindex.com/synthesis/example.pdf"'))
  }
  assert.ok(render(h(Head(), props(true))).includes('name="robots" content="noindex, nofollow"'))
})

test("postbuild homepage, authored report, foreign source and dataset graphs use correct identities", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-identity-test-"))
  const write = (rel: string, body: string) => { fs.mkdirSync(path.dirname(path.join(tmp, rel)), { recursive: true }); fs.writeFileSync(path.join(tmp, rel), body) }
  try {
    for (const slug of ["index", "synthesis/own", "synthesis/foreign", "sources/external", "data"]) write(`public/${slug}.html`, "<html><head></head><body></body></html>")
    write("wiki/index.md", "---\ntitle: Heavy Metal Index\n---\n")
    write("wiki/synthesis/own.md", '---\ntitle: Own report\npublished: "2026"\nwiki_doi: 10.83376/hmi.own\n---\n')
    write("wiki/synthesis/foreign.md", '---\ntitle: Hosted report\nauthors: [Jane Doe, Alex Smith]\npublished: "2026-01-02"\n---\n')
    write("wiki/sources/external.md", '---\ntitle: Original paper\nauthors: [Jane Doe, Alex Smith]\ndoi: 10.1234/paper\n---\n')
    write("wiki/static/data/catalog.json", JSON.stringify({ name: "Index data", datasets: [{ id: "example", name: "Example dataset", distributions: [] }] }))
    for (const script of ["tools/postbuild-inject-jsonld.mjs", "tools/postbuild-open-data.mjs"]) {
      const result = spawnSync(process.execPath, [path.resolve(script)], { cwd: tmp, encoding: "utf8" })
      assert.equal(result.status, 0, result.stderr)
    }
    const read = (slug: string) => jsonScripts(fs.readFileSync(path.join(tmp, `public/${slug}.html`), "utf8"))
    const home = read("index")
    assert.equal(home.find((x) => x["@type"] === "Person")["@id"], identity.personId)
    const hmi = home.find((x) => x["@id"] === "https://heavymetalindex.com/#organization")
    for (const prop of ["parentOrganization", "subOrganization", "memberOf"]) assert.ok(!(prop in hmi))
    assert.ok(!JSON.stringify(home).includes(identity.profiles.heavyMetalCertified))
    assert.equal(read("synthesis/own")[0].creator["@id"], identity.personId)
    assert.equal(read("synthesis/own")[0].datePublished, "2026")
    const foreign = read("synthesis/foreign")[0]
    assert.deepEqual(foreign.author.map((a: any) => a.name), ["Jane Doe", "Alex Smith"])
    assert.ok(!JSON.stringify(foreign).includes(identity.orcid))
    const external = read("sources/external")[0]
    assert.deepEqual(external.about.author.map((a: any) => a.name), ["Jane Doe", "Alex Smith"])
    assert.ok(!JSON.stringify(external).includes(identity.orcid))
    assert.equal(read("data")[0].creator["@id"], identity.personId)
  } finally { fs.rmSync(tmp, { recursive: true, force: true }) }
})
