import test from "node:test"
import assert from "node:assert/strict"
import { unified } from "unified"
import { VFile } from "vfile"
import type { Element, ElementContent, Root } from "hast"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"
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
    .use(AutoLink().htmlPlugins!(ctx))
    .use(CrawlLinks({ markdownLinkResolution: "shortest" }).htmlPlugins!(ctx))
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
