#!/usr/bin/env node
// Emits Examine-style category SECTION pages + a directory index.
//
// For products and ingredients (too many to list on one page), each category
// becomes its own normal content page under wiki/<vertical>/categories/<slug>.md
// (a member list). The directory (/products, /ingredients) then shows a lean grid
// of cards linking to those pages — rendered by the CategoryDirectory component
// from the data/category-index.json this script also writes. Metals is small, so
// it gets no sub-pages: category-index.json carries its two groups and the
// directory renders them as a plain list.
//
// Idempotent: the member pages are fully generated (safe to overwrite); the JSON
// is the single source of grouping shared with the component.

import fs from "fs"
import path from "path"
import matter from "gray-matter"

const ROOT = process.cwd()
const WIKI = path.join(ROOT, "wiki")

// Ingredient fine-category -> broad food group (the `category` field is noisy).
const ING_GROUP = {
  fruit: "Fruits", "fruit-product": "Fruits", "vegetable-fruit": "Fruits",
  vegetable: "Vegetables", "root-vegetable": "Vegetables", "leafy-vegetable": "Vegetables",
  "leafy-green": "Vegetables", "vegetable-preparation": "Vegetables", "vegetable-grain": "Vegetables",
  fungi: "Vegetables",
  grain: "Grains & cereals", "grain-product": "Grains & cereals", "breakfast-cereal": "Grains & cereals",
  legume: "Legumes & pulses", "legume-composite": "Legumes & pulses",
  nut: "Nuts & seeds", "nut-seed": "Nuts & seeds", seed: "Nuts & seeds",
  oil: "Oils & fats", "fat-oil": "Oils & fats",
  "herb-spice": "Herbs, spices & botanicals", botanical: "Herbs, spices & botanicals",
  meat: "Meat & poultry", "animal-food": "Meat & poultry",
  seafood: "Fish & seafood", "seafood-composite": "Fish & seafood", "aquatic-protein": "Fish & seafood",
  dairy: "Dairy & eggs",
  "beverage-ingredient": "Beverages & water", "juice-composite": "Beverages & water",
  water: "Beverages & water", vinegar: "Beverages & water",
  sweetener: "Sweeteners & condiments", condiment: "Sweeteners & condiments",
  "mixed-food": "Prepared & composite foods", soup: "Prepared & composite foods",
  dessert: "Prepared & composite foods",
}
const ING_ORDER = [
  "Fruits", "Vegetables", "Grains & cereals", "Legumes & pulses", "Nuts & seeds", "Oils & fats",
  "Herbs, spices & botanicals", "Meat & poultry", "Fish & seafood", "Dairy & eggs",
  "Beverages & water", "Sweeteners & condiments", "Prepared & composite foods", "Other",
]
const HMTC = new Set(["Pb", "As", "iAs", "tAs", "Cd", "Hg", "tHg", "MeHg", "Ni", "Al", "Cr", "Cr-VI", "Sn"])

const slugify = (s) =>
  String(s).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")

function readPages(dir, type) {
  const out = []
  const abs = path.join(WIKI, dir)
  if (!fs.existsSync(abs)) return out
  for (const name of fs.readdirSync(abs)) {
    if (!name.endsWith(".md") || name === "index.md") continue
    try {
      const { data } = matter(fs.readFileSync(path.join(abs, name), "utf8"))
      if (data?.type !== type) continue
      out.push({
        slug: `${dir}/${name.replace(/\.md$/, "")}`,
        title: String(data.title ?? name.replace(/\.md$/, "")),
        fm: data,
      })
    } catch {
      /* skip unreadable */
    }
  }
  return out
}

function group(pages, keyFn, orderFn) {
  const m = new Map()
  for (const p of pages) {
    const { key, label } = keyFn(p)
    if (!key) continue
    const b = m.get(key) ?? { slug: slugify(label), label, order: orderFn(key, label), members: [] }
    b.members.push({ slug: p.slug, title: p.title })
    m.set(key, b)
  }
  const groups = [...m.values()]
  for (const g of groups) g.members.sort((a, b) => a.title.localeCompare(b.title))
  groups.sort((a, b) => a.order - b.order || a.label.localeCompare(b.label))
  return groups
}

// ---- gather ----
const productGroups = group(
  readPages("products", "product-category"),
  (p) => {
    const label = String(p.fm.category_label ?? "Other products")
    return { key: label, label }
  },
  (_k, label) => 99, // ordered by hmtc row below
)
// re-sort products by hmtc_category where available
{
  const rowByLabel = new Map()
  for (const p of readPages("products", "product-category")) {
    const label = String(p.fm.category_label ?? "Other products")
    const row = typeof p.fm.hmtc_category === "number" ? p.fm.hmtc_category : 99
    if (!rowByLabel.has(label) || row < rowByLabel.get(label)) rowByLabel.set(label, row)
  }
  for (const g of productGroups) g.order = rowByLabel.get(g.label) ?? 99
  productGroups.sort((a, b) => a.order - b.order || a.label.localeCompare(b.label))
}

const ingredientGroups = group(
  readPages("ingredients", "ingredient"),
  (p) => {
    const label = ING_GROUP[String(p.fm.category ?? "").toLowerCase()] ?? "Other"
    return { key: label, label }
  },
  (_k, label) => (ING_ORDER.indexOf(label) < 0 ? 99 : ING_ORDER.indexOf(label)),
)

const metalGroups = group(
  readPages("metals", "metal"),
  (p) => {
    const pri = HMTC.has(String(p.fm.symbol ?? ""))
    return pri
      ? { key: "hmtc", label: "HMTc priority analytes" }
      : { key: "other", label: "Other metals tracked" }
  },
  (key) => (key === "hmtc" ? 0 : 1),
)
// attach metal symbols to members for the list rendering
{
  const symBySlug = new Map(readPages("metals", "metal").map((p) => [p.slug, String(p.fm.symbol ?? "")]))
  for (const g of metalGroups) for (const m of g.members) m.symbol = symBySlug.get(m.slug) ?? ""
}

// ---- write category SECTION pages for products + ingredients ----
function writeCategoryPages(vertical, groups, nounSingular) {
  const dir = path.join(WIKI, vertical, "categories")
  fs.mkdirSync(dir, { recursive: true })
  let written = 0
  for (const g of groups) {
    const body =
      `---\n` +
      `title: ${g.label}\n` +
      `type: category-index\n` +
      `parent_vertical: ${vertical}\n` +
      `description: ${nounSingular} pages in the ${g.label} category (${g.members.length}).\n` +
      `---\n\n` +
      `<!-- generated by tools/build-category-pages.mjs -->\n` +
      `The ${nounSingular} pages grouped under **${g.label}**.\n\n` +
      `## All ${g.label}\n\n` +
      g.members.map((m) => `- [[${m.slug}|${m.title}]]`).join("\n") +
      `\n`
    fs.writeFileSync(path.join(dir, `${g.slug}.md`), body)
    written++
  }
  return written
}

const pWritten = writeCategoryPages("products", productGroups, "product-category")
const iWritten = writeCategoryPages("ingredients", ingredientGroups, "ingredient")

// ---- write the shared index JSON (grouping + samples) ----
const strip = (groups, opts = {}) =>
  groups.map((g) => ({
    slug: g.slug,
    label: g.label,
    count: g.members.length,
    samples: g.members.slice(0, 4).map((m) => m.title),
    members: opts.withMembers ? g.members.map((m) => ({ slug: m.slug, title: m.title, symbol: m.symbol })) : undefined,
  }))

const out = {
  generatedFrom: "tools/build-category-pages.mjs",
  products: strip(productGroups),
  ingredients: strip(ingredientGroups),
  metals: strip(metalGroups, { withMembers: true }), // metals rendered as a list, needs members
}
fs.mkdirSync(path.join(ROOT, "data"), { recursive: true })
fs.writeFileSync(path.join(ROOT, "data", "category-index.json"), JSON.stringify(out, null, 2) + "\n")

console.log(
  `category-pages: products ${pWritten} pages / ${productGroups.length} groups; ` +
    `ingredients ${iWritten} pages / ${ingredientGroups.length} groups; ` +
    `metals ${metalGroups.length} groups (list). Wrote data/category-index.json`,
)
