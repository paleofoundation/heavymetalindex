import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import matter from "gray-matter"
import { foodHeading, foodSearchTitle } from "./foodSearchTitle"
import { buildMetaDescription } from "./metaDescription"
import { MANDATORY_SECTIONS } from "../../tools/evidence/lib/ingredient-sections.mjs"

const raw = fs.readFileSync("wiki/ingredients/spinach.md", "utf8")
const { data: fm, content } = matter(raw)
const metals = ["lead", "cadmium", "arsenic", "mercury", "nickel", "aluminum", "chromium", "tin", "uranium"]

test("spinach search and hero retain the whole-metal scope", () => {
  assert.equal(foodSearchTitle(fm), "Heavy Metals in Spinach: Limits and Testing")
  assert.equal(foodHeading(fm), "Heavy metals in Spinach")
  const description = buildMetaDescription(undefined, fm, "ingredients/spinach")
  assert.equal(description, fm.description)
  assert.ok(description.length <= 155)
  for (const name of metals) {
    assert.match(description, new RegExp(`\\b${name}\\b`, "i"))
    assert.match(fm.dek, new RegExp(`\\b${name}\\b`, "i"))
    assert.match(JSON.stringify(fm.rail_highlights), new RegExp(`\\b${name}\\b`, "i"))
  }
})

test("spinach follows the procurement reading order and closes with uncertainty", () => {
  const headings = ["Supply-chain bottom line", "Regulatory limits by jurisdiction", "Concentration ranges per metal", "Why spinach accumulates metals", "Mitigation through", "Testing metals", "Evidence strength per metal", "Health basis", "Sources and review scope", "References", "Sources\n", "Update history", "What remains uncertain"]
  let previous = -1
  for (const heading of headings) {
    const position = content.indexOf(`## ${heading}`)
    assert.ok(position > previous, `Missing or misplaced ${heading}`)
    previous = position
  }
  for (const section of MANDATORY_SECTIONS)
    assert.ok(section.patterns.some((pattern: RegExp) => pattern.test(content)), section.key)
  assert.doesNotMatch(content, /^#{2,3}\s+(?:Additional|Other metals)/im)
  assert.doesNotMatch(content, /\u2014|\bpartners\b/i)
})

test("spinach does not substitute zero, a chemical species or an excluded limit", () => {
  assert.match(content, /leafy-vegetable lead entry excludes spinach/)
  assert.match(content, /current spinach scope under GB 2762-2025: Data gap/i)
  assert.match(content, /Hexavalent chromium is not established by this total/)
  assert.match(content, /Inorganic arsenic is not established by this total/)
  assert.match(content, /\| Uranium \| 1\.1 to 12 \| 27 \/ 27 \|/)
  assert.match(content, /Data gap for reviewed fresh-spinach concentrations/)
  assert.equal(fm.contamination_profile.U.evidence[0].n, 27)
  assert.equal(fm.contamination_profile.U.value_kind, "source_summary")
  assert.equal(fm.contamination_profile.Sn.typical_ppb[0], null)
})

test("spinach source citations resolve and reference numbers remain sequential", () => {
  for (const key of new Set([...content.matchAll(/\[\[sources\/([^\]|\\]+)/g)].map((match) => match[1])))
    assert.ok(fs.existsSync(`wiki/sources/${key}.md`), key)
  const references = content.match(/<!-- BEGIN: hmi-page-references -->([\s\S]*?)<!-- END: hmi-page-references -->/)![1]
  const numbers = [...references.matchAll(/^(\d+)\. /gm)].map((match) => Number(match[1]))
  assert.ok(numbers.length > 10)
  assert.deepEqual(numbers, numbers.map((_, i) => i + 1))
})
