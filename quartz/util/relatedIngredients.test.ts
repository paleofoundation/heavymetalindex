import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import matter from "gray-matter"
import { QuartzPluginData } from "../plugins/vfile"
import { FullSlug } from "./path"
import { relatedIngredients } from "./relatedIngredients"

function ingredient(
  slug: string,
  category = "grain",
  extra: Record<string, unknown> = {},
): QuartzPluginData {
  return {
    slug: `ingredients/${slug}` as FullSlug,
    frontmatter: {
      title: slug,
      tags: [],
      type: "ingredient",
      category,
      contamination_profile: { Pb: { status: "populated", n_studies: 1 } },
      ...extra,
    },
  }
}

test("related ingredients use exact existing category, canonical indexable targets, deterministic cap and no self link", () => {
  const self = ingredient("self")
  const peers = Array.from({ length: 12 }, (_, i) =>
    ingredient(`grain-${String(i).padStart(2, "0")}`),
  )
  const excluded = [
    ingredient("other", "grain-product"),
    ingredient("noindex", "grain", { noindex: true }),
    ingredient("draft", "grain", { draft: true }),
    ingredient("empty", "grain", { contamination_profile: {} }),
    ingredient("human-milk"),
    ingredient("maize"),
  ]
  const first = relatedIngredients(self, [self, ...excluded, ...peers].reverse())
  assert.deepEqual(
    first.map((p) => p.slug),
    peers.slice(0, 8).map((p) => p.slug),
  )
  assert.deepEqual(relatedIngredients(ingredient("unknown", ""), peers), [])
})

test("real rice has only same-category peers that pass the existing evidence policy", () => {
  const pages = fs
    .readdirSync("wiki/ingredients")
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(`wiki/ingredients/${file}`, "utf8"))
      return {
        slug: `ingredients/${file.slice(0, -3)}` as FullSlug,
        frontmatter: data,
        indexingBody: content,
      } as QuartzPluginData
    })
  const rice = pages.find((p) => p.slug === "ingredients/rice")!
  const peers = relatedIngredients(rice, pages)
  assert.ok(peers.length > 0 && peers.length <= 8)
  assert.ok(
    peers.every(
      (p) => p.frontmatter?.category === rice.frontmatter?.category && p.slug !== rice.slug,
    ),
  )
})

test("an ingredient without eligible peers still has the requested block and an honest empty state", async () => {
  const { default: RelatedIngredients } = await import("../components/RelatedIngredients")
  const { h } = await import("preact")
  const { default: renderToString } = await import("preact-render-to-string")
  const only = ingredient("only", "unique")
  const Component = RelatedIngredients()
  const props = {
    fileData: only,
    allFiles: [only],
  } as import("../components/types").QuartzComponentProps
  const html = renderToString(h(Component, props))
  assert.match(html, /Related ingredients/)
  assert.match(html, /No related ingredient links are listed/)
  assert.ok(!html.includes("<a "))
})
