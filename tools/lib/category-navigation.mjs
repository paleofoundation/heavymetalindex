import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { ingredientGroup } from "./ingredient-categories.mjs"

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

export function categoryIntro(members, kind) {
  const first = `This category contains ${members.length} ${kind} ${members.length === 1 ? "page" : "pages"}.`
  if (kind === "source")
    return `${first} The entries below are grouped by the jurisdictions recorded on those pages.`
  const examples = members.slice(0, 3).map((p) =>
    String(p.title)
      .replace(/\n/g, " ")
      .replace(/\u2014/g, ",")
      .replace(/[\\`*_[\]<>|]/g, "\\$&"),
  )
  return (
    `${first} ` +
    (examples.length
      ? `Entries include ${examples.join("; ")}.`
      : "There are no published entries in this category.")
  )
}

// Coverage comes from the final rendered anchor graph. Frontmatter supplies only
// existing category assignments, never an inferred edge or a new classification.
export function categoryNavigation(report, repoRoot = process.cwd()) {
  const byPath = new Map(report.pages.map((p) => [p.path, p]))
  const taxonomy = JSON.parse(
    fs.readFileSync(path.join(repoRoot, "data/taxonomy/hmtc-v2.json"), "utf8"),
  )
  const categories = new Map(
    taxonomy.categories.map((c) => [
      c.n,
      String(c.name)
        .replace(/\s*\(Ages[^)]*\)/i, "")
        .trim(),
    ]),
  )
  const children = new Map()
  for (const section of ["ingredients", "products"]) {
    for (const file of fs
      .readdirSync(path.join(repoRoot, "wiki", section))
      .filter((f) => f.endsWith(".md") && f !== "index.md")) {
      const { data } = matter(fs.readFileSync(path.join(repoRoot, "wiki", section, file), "utf8"))
      const childPath = `/${section}/${file.slice(0, -3)}`
      if (byPath.has(childPath)) children.set(childPath, data)
    }
  }
  const missing = []
  let ingredients = 0,
    ingredientHubLinks = 0,
    ingredientIndexLinks = 0,
    products = 0,
    productHubLinks = 0
  let relatedBlocks = 0,
    relatedPages = 0,
    relatedLinks = 0,
    eligibleRelatedPages = 0,
    relatedIndexablePages = 0
  const relatedProblems = []
  for (const [childPath, fm] of children) {
    const page = byPath.get(childPath)
    if (page.indexable && childPath.startsWith("/ingredients/")) {
      ingredients++
      const hub = `/ingredients/categories/${slugify(ingredientGroup(fm.category))}`
      if (byPath.get(hub)?.outbound.includes(childPath)) ingredientHubLinks++
      else missing.push({ page: childPath, from: hub })
      if (byPath.get("/ingredients")?.outbound.includes(childPath)) ingredientIndexLinks++
      else missing.push({ page: childPath, from: "/ingredients" })
    }
    if (page.indexable && childPath.startsWith("/products/")) {
      products++
      const category = categories.get(fm.hmtc_category)
      const hub = category ? `/products/categories/${slugify(category)}` : null
      if (hub && byPath.get(hub)?.outbound.includes(childPath)) productHubLinks++
      else missing.push({ page: childPath, from: hub ?? "missing existing taxonomy category" })
    }
    if (fm.type !== "ingredient") continue
    if (page.related_block) relatedBlocks++
    const category = String(fm.category ?? "")
      .trim()
      .toLowerCase()
    const expected = [...children]
      .filter(
        ([target, data]) =>
          target !== childPath &&
          data.type === "ingredient" &&
          byPath.get(target)?.indexable &&
          category &&
          String(data.category ?? "")
            .trim()
            .toLowerCase() === category,
      )
      .map(([target]) => target)
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 8)
    if (expected.length) eligibleRelatedPages++
    const actual = page.related ?? []
    if (actual.length) {
      relatedPages++
      relatedLinks += actual.length
      if (page.indexable) relatedIndexablePages++
    }
    if (!page.related_block || actual.join("\n") !== [...expected].sort().join("\n"))
      relatedProblems.push({ page: childPath, expected, actual })
  }
  return {
    ingredients,
    ingredient_hub_links: ingredientHubLinks,
    ingredient_index_links: ingredientIndexLinks,
    products,
    product_hub_links: productHubLinks,
    missing,
    related_blocks: relatedBlocks,
    related_pages: relatedPages,
    related_indexable_pages: relatedIndexablePages,
    related_links: relatedLinks,
    eligible_related_pages: eligibleRelatedPages,
    related_problems: relatedProblems,
  }
}
