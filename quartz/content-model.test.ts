import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { modelForType } from "./content-model"
import { getMetalTocLabel, getTocLabel } from "./util/tocLabels"

test("every published metal article resolves to the same sidebar model", () => {
  const shared = modelForType("metal", "metals/lead")
  assert.ok(shared)
  const directory = path.resolve("wiki/metals")
  const articles = fs.readdirSync(directory).filter((file) => file.endsWith(".md"))
  let checked = 0
  for (const file of articles) {
    const { data, content } = matter(fs.readFileSync(path.join(directory, file), "utf8"))
    if (data.type !== "metal") continue
    const model = modelForType(data.type, `metals/${file.slice(0, -3)}`)
    assert.equal(model, shared, file)
    for (const parent of model.parents) assert.ok(parent.label.split(/\s+/).length <= 2)
    for (const match of content.matchAll(/^## (.+)$/gm)) {
      const heading = match[1]
      const preferred = model.labelOverrides?.find((rule) => rule.pattern.test(heading))?.label({ pageTitle: String(data.title) }) ?? heading
      const label = getMetalTocLabel(getTocLabel(heading, "", data.toc_labels, preferred))
      assert.ok(label.length > 0 && label.split(/\s+/).length <= 2, `${file}: ${heading}`)
    }
    checked++
  }
  assert.ok(checked > 1, "the universal rule must cover sibling metal pages")
})

test("metal labels identify common sections without truncating their meaning", () => {
  const model = modelForType("metal", "metals/lead")!
  for (const [heading, expected] of [
    ["At a glance", "Essentials"], ["Typical exposure routes", "Exposure"],
    ["Food sources", "Foods"], ["Regulatory limits", "Limits"],
    ["Microbiome context", "Microbiome"], ["Historical context", "History"],
  ]) {
    const rule = model.labelOverrides!.find((entry) => entry.pattern.test(heading))!
    assert.equal(rule.label({ pageTitle: "lead" }), expected)
  }
  assert.ok(model.parents.find((parent) => parent.id === "mitigation")!.children.some(
    (child) => child.patterns.some((pattern) => pattern.test("Mitigation evidence")),
  ))
  assert.equal(modelForType("metal", "ingredients/lead"), undefined)
})
