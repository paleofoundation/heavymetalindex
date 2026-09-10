import test from "node:test"
import assert from "node:assert/strict"
import { HMI_ORGANIZATION_ID, HMI_WEBSITE_ID, karenEntity, organizationEntity } from "./entity-graph.mjs"
import { buildAboutPageGraph, citationEdgesFromHtml, stripSourceLegendHtml, toIsoDate } from "./jsonld-pages.mjs"

const publisher = organizationEntity()
const author = karenEntity()

test("about graph is AboutPage + homepage Organization/WebSite @ids, not BreadcrumbList-only", () => {
  const objects = buildAboutPageGraph({
    title: "About",
    description: "About the Heavy Metal Index and the Institute of Contaminant Standards.",
    dateModified: "2026-04-24",
    publisher,
    author,
  })
  assert.deepEqual(
    objects.map((o) => o["@type"]),
    ["Organization", "WebSite", "AboutPage"],
  )
  const [organization, website, about] = objects
  assert.equal(organization["@id"], HMI_ORGANIZATION_ID)
  assert.equal(organization.name, "Heavy Metal Index")
  assert.equal(website["@id"], HMI_WEBSITE_ID)
  assert.equal(about.url, "https://heavymetalindex.com/about")
  assert.equal(about.isPartOf["@id"], HMI_WEBSITE_ID)
  assert.equal(about.about["@id"], HMI_ORGANIZATION_ID)
  assert.equal(about.publisher, publisher)
  const serialized = JSON.stringify(objects)
  assert.equal(/parentOrganization|subOrganization|memberOf/.test(serialized), false)
  assert.equal(about.dateModified, "2026-04-24")
})

test("AboutPage dateModified normalizes gray-matter Date values to ISO-8601", () => {
  const parsed = new Date("2026-04-24T00:00:00.000Z")
  assert.equal(toIsoDate(parsed), "2026-04-24")
  assert.notEqual(String(parsed), "2026-04-24")
  const [, , about] = buildAboutPageGraph({
    title: "About",
    dateModified: parsed,
    publisher,
    author,
  })
  assert.equal(about.dateModified, "2026-04-24")
})

test("citation edges skip the source-legend inventory and keep in-prose ScholarlyArticle cites", () => {
  const html = `
    <p>See <a href="/sources/efsa-lead-contam-2010">EFSA 2010</a>.</p>
    <!-- BEGIN: hmi-source-legend -->
    <h2>Sources</h2>
    <table>
      <tr><td><a href="/sources/efsa-lead-contam-2010">EFSA</a></td></tr>
      <tr><td><a href="/sources/atsdr-lead-toxprofile-2020">ATSDR</a></td></tr>
    </table>
    <!-- END: hmi-source-legend -->
    <h2>Update history</h2>
  `
  assert.equal(stripSourceLegendHtml(html).includes("atsdr-lead-toxprofile-2020"), false)
  assert.deepEqual(citationEdgesFromHtml(html), [
    {
      "@type": "ScholarlyArticle",
      "@id": "https://heavymetalindex.com/sources/efsa-lead-contam-2010",
      url: "https://heavymetalindex.com/sources/efsa-lead-contam-2010",
    },
  ])
})

test("citation-edge fallback drops an unmarked Sources heading table", () => {
  const html = `
    <p><a href="../sources/cdc-blood-lead-reference-value">CDC</a></p>
    <h2 id="sources">Sources</h2>
    <table><tr><td><a href="/sources/inventory-only-paper">inventory</a></td></tr></table>
    <h2 id="update-history">Update history</h2>
  `
  const cites = citationEdgesFromHtml(html)
  assert.deepEqual(
    cites.map((c) => c.url),
    ["https://heavymetalindex.com/sources/cdc-blood-lead-reference-value"],
  )
})
