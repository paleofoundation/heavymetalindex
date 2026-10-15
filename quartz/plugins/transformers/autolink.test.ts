import test from "node:test"
import assert from "node:assert/strict"
import { unified } from "unified"
import { VFile } from "vfile"
import type { Element, ElementContent, Root } from "hast"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"
import fs from "node:fs"
import { PlainMetalNames } from "./plainMetalNames"
import { AutoLink } from "./autolink"
import { CrawlLinks } from "./links"

function element(tagName: string, children: string | ElementContent[], href?: string): Element {
  return {
    type: "element", tagName, properties: href ? { href } : {},
    children: typeof children === "string" ? [{ type: "text", value: children }] : children,
  }
}

async function render(children: Element[], slugs: string[], options: { slug?: string; autolink?: boolean } = {}) {
  const ctx = { allSlugs: slugs } as BuildCtx
  const file = new VFile("")
  file.data.slug = (options.slug ?? "synthesis/review") as FullSlug
  file.data.frontmatter = { title: "Review", tags: [], autolink: options.autolink }
  const processor = unified()
    .use(CrawlLinks({ markdownLinkResolution: "shortest" }).htmlPlugins!(ctx))
    .use(PlainMetalNames().htmlPlugins!(ctx))
    .use(AutoLink().htmlPlugins!(ctx))
  const tree = await processor.run({ type: "root", children } as Root, file)
  const links: Element[] = []
  const collect = (node: any) => {
    if (node.type === "element" && node.tagName === "a") links.push(node)
    for (const child of node.children ?? []) collect(child)
  }
  collect(tree)
  return { tree, file, links, automatic: links.filter((link) => (link.properties.className as string[]).includes("hmi-autolink")) }
}

test("first prose mention links once and enters the outgoing wiki graph", async () => {
  const result = await render([element("p", "Cadmium exposure and cadmium transport.")], ["metals/cadmium"])
  assert.equal(result.automatic.length, 1)
  assert.equal(result.automatic[0].properties.href, "../metals/cadmium")
  assert.deepEqual(result.file.data.links, ["metals/cadmium"])
})

test("explicit links under the HAST root suppress duplicate links regardless of link spelling", async () => {
  for (const href of ["/metals/cadmium", "metals/cadmium.md", "../metals/cadmium#toxicity", "cadmium"]) {
    const result = await render([
      element("p", [element("a", "Cadmium", href)]),
      element("p", "Cadmium exposure."),
    ], ["metals/cadmium"])
    assert.equal(result.automatic.length, 0, href)
    assert.deepEqual(result.file.data.links, ["metals/cadmium"])
  }
})

test("lead introduction links regulators before their later authored table links", async () => {
  const slugs = ["regulators/atsdr", "regulators/efsa", "regulators/jecfa", "regulators/us-cdc"]
  const result = await render([
    element("p", "This synthesis draws on ATSDR, EFSA, JECFA and CDC."),
    element("h2", "Regulatory limits"),
    element("table", [element("tbody", [element("tr", slugs.map((slug) =>
      element("td", [element("a", slug.split("/").at(-1)!, `/${slug}`)]),
    ))])]),
    element("p", "JECFA withdrew its PTWI. EFSA reports BMDLs."),
  ], slugs, { slug: "metals/lead" })
  assert.equal(result.automatic.length, 4)
  assert.equal(result.links.length, 8)
  assert.deepEqual(new Set(result.file.data.links), new Set(slugs))
  assert.equal(result.automatic[2].properties.href, "../regulators/jecfa")
})

test("bibliography links do not suppress a concept's first prose mention", async () => {
  const result = await render([
    element("p", "Cadmium exposure."),
    element("h2", "References"),
    element("p", [element("a", "Cadmium", "/metals/cadmium")]),
    element("p", "Arsenic citation title."),
  ], ["metals/cadmium", "metals/arsenic"])
  assert.equal(result.automatic.length, 1)
  assert.equal(result.links.length, 2)
})

test("specific species stay distinct, including parenthetical notation and nonbreaking spaces", async () => {
  const slugs = ["metals/arsenic", "metals/arsenic-inorganic", "metals/arsenic-total", "metals/mercury-methyl", "metals/mercury-total", "metals/chromium", "metals/chromium-hexavalent"]
  const result = await render([element("p", "Inorganic\u00a0arsenic, total arsenic, methylmercury, total mercury and chromium(VI).")], slugs)
  assert.deepEqual(new Set(result.file.data.links), new Set(slugs.filter((slug) => !["metals/arsenic", "metals/chromium"].includes(slug))))
  assert.equal(result.automatic.at(-1)?.children[0].type, "text")
  assert.deepEqual(result.automatic.at(-1)?.children[0], { type: "text", value: "chromium(VI)" })
})

test("missing species destinations never fall back to the parent metal", async () => {
  const result = await render([element("p", "Inorganic arsenic and chromium(VI).")], ["metals/arsenic", "metals/chromium"])
  assert.equal(result.automatic.length, 0)
})

test("no links inside existing links, headings, code, controls, bibliography or word fragments", async () => {
  const result = await render([
    element("h2", "Cadmium"), element("pre", [element("code", "Cadmium")]),
    element("button", "Cadmium"), element("p", [element("a", "Cadmium", "https://example.org/paper")]),
    element("p", "arsenicase and αcadmium do not name metals. A result may lead to discussion."),
    element("h2", "Works cited"), element("p", "Cadmium study."),
    element("h2", "Discussion"), element("p", "Cadmium exposure."),
  ], ["metals/cadmium", "metals/arsenic", "metals/lead"])
  assert.equal(result.automatic.length, 1)
  assert.equal(result.links.length, 2)
})

test("self links, page opt-out and missing targets remain disabled", async () => {
  assert.equal((await render([element("p", "Cadmium")], ["metals/cadmium"], { slug: "metals/cadmium" })).automatic.length, 0)
  assert.equal((await render([element("p", "Cadmium")], ["metals/cadmium"], { autolink: false })).automatic.length, 0)
  assert.equal((await render([element("p", "Cadmium")], [])).automatic.length, 0)
})

test("microbiome concepts join contextual links and backlinks through the generated dictionary", async () => {
  const slug = "microbiome/nickel-microbial-pathogenesis"
  const result = await render([element("p", "Nickel in microbial pathogenesis requires attention.")], [slug])
  assert.deepEqual(result.file.data.links, [slug])
  assert.equal(result.automatic.length, 1)
})

test("each section and FAQ answer gets a first mention without repeating links inside the section", async () => {
  const result = await render([
    element("p", "JECFA and JECFA."),
    element("h2", "Regulatory context"), element("p", "JECFA and JECFA."),
    element("h3", "What changed?"), element("p", "JECFA and JECFA."),
    element("h2", "References"), element("h3", "JECFA documents"), element("p", "JECFA."),
  ], ["regulators/jecfa"])
  assert.equal(result.automatic.length, 3)
  assert.deepEqual(result.file.data.links, ["regulators/jecfa"])
})

test("obsolete authored links recover a clear concept after link resolution", async () => {
  const result = await render([element("p", [element("a", "ICP-MS", "/testing/obsolete-method")])], ["testing/icp-ms"])
  assert.equal(result.automatic.length, 1)
  assert.equal(result.automatic[0].properties.href, "../testing/icp-ms")
  assert.deepEqual(result.file.data.links, ["testing/icp-ms"])
})

test("foods, short methods and qualified metal names link without inventing links for ordinary words", async () => {
  const slugs = ["ingredients/rice", "ingredients/honey", "ingredients/tea", "testing/icp-ms", "metals/lead", "metals/mercury", "metals/iron"]
  const result = await render([element("p", "Rice, honey and tea were tested by ICP-MS for lead contamination and mercury exposure. Iron deficiency was discussed. Results can lead to further tests; use water and salt as reagents.")], slugs)
  assert.equal(result.automatic.length, 7)
  assert.deepEqual(new Set(result.file.data.links), new Set(slugs))
  assert.deepEqual(result.automatic.find((node) => node.properties["data-slug"] === "metals/lead")?.children,
    [{ type: "text", value: "lead contamination" }])
})

test("long pages keep linking later sections after 25 earlier destinations", async () => {
  const metalSlugs = ["molybdenum", "manganese", "aluminum", "tellurium", "palladium", "beryllium", "vanadium", "chromium", "antimony", "thallium", "cadmium", "arsenic", "uranium", "barium", "cesium"].map((metal) => `metals/${metal}`)
  const agencySlugs = ["atsdr", "efsa", "jecfa", "us-cdc", "oehha", "us-fda"].map((agency) => `regulators/${agency}`)
  const slugs = [...metalSlugs, ...agencySlugs, "ingredients/rice", "ingredients/honey", "ingredients/tea", "testing/icp-ms", "metals/lead"]
  const result = await render([
    element("p", "Molybdenum, manganese, aluminum, tellurium, palladium, beryllium, vanadium, chromium, antimony, thallium, cadmium, arsenic, uranium, barium, cesium. ATSDR EFSA JECFA CDC OEHHA FDA. Rice honey tea ICP-MS."),
    element("h2", "Later exposure section"), element("p", "Lead exposure."),
  ], slugs)
  assert.equal(result.automatic.length, 26)
  assert.equal(result.automatic.at(-1)?.properties["data-slug"], "metals/lead")
})


test("expanded metal symbols link in the configured reading-order pipeline", async () => {
  const config = fs.readFileSync("quartz.config.ts", "utf8")
  assert.ok(config.indexOf("Plugin.PlainMetalNames()") < config.indexOf("Plugin.AutoLink()"))
  const result = await render([element("p", "Metals: Cd, tAs, tHg, Al.")],
    ["metals/cadmium", "metals/arsenic-total", "metals/mercury-total", "metals/aluminum"])
  assert.equal(result.automatic.length, 4)
  assert.deepEqual(new Set(result.file.data.links), new Set([
    "metals/cadmium", "metals/arsenic-total", "metals/mercury-total", "metals/aluminum",
  ]))
})
