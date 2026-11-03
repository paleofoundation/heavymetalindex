import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import test from "node:test"
import { contractOwnsPage } from "../contracts/page-owner.mjs"

const dir = "wiki/ingredients"
// Supplier and manufacturer notices that must not re-enter public ingredient pages.
const banned = [/Oryzatein/i, /RPN2026/, /GRN\s*609\b/, /GRN\s*788\b/, /GRN\s*804\b/, /GRN\s*851\b/]

test("compiled ingredient pages keep the canonical explorer and do not regress to the pre-canonical article", () => {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "index.md")
  let contract = 0
  for (const file of files) {
    const text = fs.readFileSync(path.join(dir, file), "utf8")
    for (const re of banned) assert.doesNotMatch(text, re, file)
    const header = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ""
    if (!/^page_contract_version:\s*['"]?1\.0\.0['"]?\s*$/m.test(header)) continue
    contract++
    assert.equal(contractOwnsPage(text), true, file)
    assert.match(text, /class="hmi-analyte-explorer"/, `${file} lost the findings explorer`)
    assert.match(text, /data-hmi-quick-read/, `${file} lost the compiled Quick read`)
    assert.match(text, /<details class="qa"/, `${file} lost accordion questions`)
  }
  assert.ok(contract >= 269, `compiled ingredient pages fell to ${contract}`)
  const cocoa = fs.readFileSync(path.join(dir, "cocoa.md"), "utf8")
  assert.match(cocoa, /ingredient_presentation: rice-shared-v1/)
  assert.match(cocoa, /synthesis_record: data\/evidence\/syntheses\/ingredient-cocoa-v1\.json/)
  assert.doesNotMatch(cocoa, /Per-analyte snapshot derived from the machine-readable/)
  for (const keep of ["rice.md", "rice-protein.md", "pea-protein.md"]) {
    const text = fs.readFileSync(path.join(dir, keep), "utf8")
    assert.match(text, /page_contract_version:\s*['"]?1\.0\.0/, `${keep} lost its compiled page`)
  }
})
