import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { baselineScopeErrors, violationsInDiff } from "./diff-gate.mjs"
import { selectNextUnit } from "./select-next-unit.mjs"

const EM = "\u2014"
const EN = "\u2013"

test("selects the lowest DEPOSITED ingredient and skips LIVE, BUILT, and metals", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "deposits-"))
  fs.mkdirSync(path.join(root, "deposits", "HMI-ING-CASSAVA-1"), { recursive: true })
  fs.mkdirSync(path.join(root, "deposits", "HMI-FILL-0002"), { recursive: true })
  fs.writeFileSync(path.join(root, "deposits", "HMI-ING-CASSAVA-1", "STATUS"), "DEPOSITED\n")
  fs.writeFileSync(path.join(root, "deposits", "HMI-FILL-0002", "STATUS"), "LIVE\n")
  fs.writeFileSync(
    path.join(root, "ledger.json"),
    JSON.stringify([
      { id: "HMI-FILL-0002", status: "DEPOSITED", kind: "ingredient", slug: "pea-protein" },
      { id: "HMI-FILL-0001", status: "LIVE", kind: "ingredient", slug: "salted-fish" },
      { id: "HMI-METAL-COPPER-1", status: "DEPOSITED", kind: "metal", slug: "copper" },
      { id: "HMI-ING-RICE-PROTEIN-1", status: "BUILT", slug: "rice-protein" },
      { id: "HMI-FILL-0010", status: "DEPOSITED", type: "ingredient", ingredient: "cocoa" },
    ]),
  )
  const next = selectNextUnit(root)
  assert.equal(next.id, "HMI-FILL-0010")
  assert.equal(next.slug, "cocoa")
  const afterSkip = selectNextUnit(root, { skip: ["HMI-FILL-0010"] })
  assert.equal(afterSkip.id, "HMI-ING-CASSAVA-1")
  assert.equal(afterSkip.slug, "cassava")
  fs.rmSync(root, { recursive: true, force: true })
})

test("a directory status overrides the ledger, and a markdown table is a ledger", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "deposits-"))
  fs.mkdirSync(path.join(root, "deposits", "HMI-ING-PEA-PROTEIN-1"), { recursive: true })
  fs.writeFileSync(
    path.join(root, "deposits", "HMI-ING-PEA-PROTEIN-1", "README.md"),
    "---\nstatus: DEPOSITED\ntype: ingredient\nslug: pea-protein\n---\n",
  )
  fs.writeFileSync(
    path.join(root, "README.md"),
    ["| id | status | slug |", "| --- | --- | --- |", "| HMI-FILL-0003 | DEPOSITED | salted-fish |", ""].join("\n"),
  )
  const next = selectNextUnit(root)
  assert.equal(next.id, "HMI-FILL-0003")
  assert.equal(next.slug, "salted-fish")
  fs.rmSync(root, { recursive: true, force: true })
})

test("diff gate flags supplier data, dashes in new wiki prose, and placeholder images", () => {
  const supplier = ["Oryz", "atein"].join("")
  const diff = [
    "diff --git a/wiki/ingredients/cocoa.md b/wiki/ingredients/cocoa.md",
    "--- a/wiki/ingredients/cocoa.md",
    "+++ b/wiki/ingredients/cocoa.md",
    `+Cadmium ran from 1 ${EN} 4 µg/kg.`,
    `+The note uses an ${EM} in prose.`,
    `+Supplier pack ${supplier} under GRN 609.`,
    "+hero_image: /static/heroes/section-ingredients.webp",
    " context stays",
    "-removed " + EM,
    "diff --git a/tools/evidence-fill/note.md b/tools/evidence-fill/note.md",
    "+++ b/tools/evidence-fill/note.md",
    `+${supplier} in a tool file is not a wiki page`,
    "diff --git a/quartz/static/heroes/section-cocoa.webp b/quartz/static/heroes/section-cocoa.webp",
    "new file mode 100644",
    "+++ b/quartz/static/heroes/section-cocoa.webp",
    "diff --git a/wiki/ingredients/pea-protein.md b/wiki/ingredients/pea-protein.md",
    "+++ b/wiki/ingredients/pea-protein.md",
    "+hero_image: /static/heroes/pea-protein-split-peas-powder.webp",
    "+Lead was 2 to 5 µg/kg.",
    "",
  ].join("\n")
  const violations = violationsInDiff(diff)
  assert.ok(violations.some((line) => line.includes("em dash or en dash")))
  assert.ok(violations.some((line) => line.includes("supplier")))
  assert.ok(violations.some((line) => line.includes("section placeholder")))
  assert.ok(violations.some((line) => line.startsWith("quartz/static/heroes/section-cocoa.webp")))
  assert.equal(violations.some((line) => line.includes("pea-protein")), false)
  assert.equal(violations.some((line) => line.includes("tools/evidence-fill")), false)
})

test("baseline rewrite may drop only the filled page", () => {
  const before = "# note\ningredients/cocoa\ningredients/rice\n"
  assert.deepEqual(baselineScopeErrors(before, "# note\ningredients/rice\n", "ingredients/cocoa"), [])
  assert.ok(baselineScopeErrors(before, before, "ingredients/cocoa").length)
  assert.ok(baselineScopeErrors(before, before + "ingredients/pea\n", "ingredients/cocoa").some((line) => line.includes("gained")))
  assert.ok(baselineScopeErrors(before, "# note\n", "ingredients/cocoa").some((line) => line.includes("unrelated")))
})

test("the fill prompt requires the nine sidebar rails", () => {
  const prompt = fs.readFileSync(new URL("./prompt.md", import.meta.url), "utf8")
  for (const label of ["Overview", "Contamination", "Mitigation", "Details", "Review", "FAQs", "References", "Sources", "Update history"]) {
    assert.match(prompt, new RegExp(label))
  }
  assert.match(prompt, /No measured data yet in our corpus\./)
  assert.match(prompt, /audit-canonical-rails/)
})

test("the scheduled workflow carries the Claude fill contract", () => {
  const yml = fs.readFileSync(new URL("../../.github/workflows/claude-evidence-fill.yml", import.meta.url), "utf8")
  assert.match(yml, /cron: "0 5 \* \* \*"/)
  assert.match(yml, /cron: "0 15 \* \* \*"/)
  assert.match(yml, /workflow_dispatch:/)
  assert.match(yml, /anthropics\/claude-code-action@v1/)
  assert.match(yml, /claude_code_oauth_token: \$\{\{ secrets\.CLAUDE_CODE_OAUTH_TOKEN \}\}/)
  assert.match(yml, /DEPOSITS_READ_TOKEN: \$\{\{ secrets\.DEPOSITS_READ_TOKEN \}\}/)
  assert.match(yml, /show_full_output: "true"/)
  assert.match(yml, /--allowedTools "Bash,Read,Edit,Write,Grep,Glob"/)
  assert.match(yml, /gh pr merge --auto --squash/)
  assert.match(yml, /evidence-fill\//)
  assert.match(yml, /npm test/)
  assert.match(yml, /lint:page-structure/)
  assert.match(yml, /lint:page-openings/)
  assert.match(yml, /lint:thin-with-evidence/)
  assert.match(yml, /npm run check/)
  assert.match(yml, /build-alias-redirects\.ts/)
  assert.match(yml, /--write-baseline/)
})
