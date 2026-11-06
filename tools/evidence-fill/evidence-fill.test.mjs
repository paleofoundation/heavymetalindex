import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { CHECKS } from "../audit-page-structure.mjs"
import { baselineScopeErrors, violationsInDiff } from "./diff-gate.mjs"
import { recordFilledPage } from "./record-filled-page.mjs"
import { describeSelection, selectNextUnit } from "./select-next-unit.mjs"

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

test("a bare directory mark keeps the ledger slug, and a later status wins", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "deposits-"))
  try {
    fs.mkdirSync(path.join(root, "deposits", "HMI-FILL-0004"), { recursive: true })
    fs.mkdirSync(path.join(root, "deposits", "HMI-FILL-0006"), { recursive: true })
    fs.writeFileSync(path.join(root, "deposits", "HMI-FILL-0004", "STATUS"), "DEPOSITED\n")
    fs.writeFileSync(path.join(root, "deposits", "HMI-FILL-0006", "STATUS"), "PR_OPEN\n")
    fs.writeFileSync(
      path.join(root, "deposits", "ledger.csv"),
      [
        "Unit ID,Status,Page type,Page URL",
        "HMI-FILL-0001,DEPOSITED,product,https://heavymetalindex.com/products/ready-to-feed-formula",
        "HMI-FILL-0004,DEPOSITED,ingredient,https://heavymetalindex.com/ingredients/high-fructose-corn-syrup",
        "HMI-FILL-0006,DEPOSITED,ingredient,https://heavymetalindex.com/ingredients/cod",
        "",
      ].join("\n"),
    )
    const next = selectNextUnit(root)
    assert.equal(next.id, "HMI-FILL-0001")
    assert.equal(next.kind, "product")
    assert.equal(next.slug, "ready-to-feed-formula")
    const ingredient = selectNextUnit(root, { skip: ["HMI-FILL-0001"] })
    assert.equal(ingredient.id, "HMI-FILL-0004")
    assert.equal(ingredient.slug, "high-fructose-corn-syrup")
    assert.equal(ingredient.dir, "deposits/HMI-FILL-0004")
    assert.equal(selectNextUnit(root, { skip: ["HMI-FILL-0001", "HMI-FILL-0004"] }), null)
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})

test("a queue object and a Notion markdown table are ledgers", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "deposits-"))
  try {
    fs.writeFileSync(
      path.join(root, "queue.json"),
      JSON.stringify({
        queue: [
          {
            "Unit ID": "HMI-FILL-0020",
            Status: "DEPOSITED",
            "Page type": "ingredient",
            "Page URL": "https://heavymetalindex.com/ingredients/cashews",
          },
        ],
      }),
    )
    fs.mkdirSync(path.join(root, "ledger"), { recursive: true })
    fs.writeFileSync(
      path.join(root, "ledger", "units.md"),
      ["| Unit ID | Status | Page URL |", "| --- | --- | --- |", "| HMI-FILL-0012 | DEPOSITED | /ingredients/soft-drink-bases |", ""].join("\n"),
    )
    const next = selectNextUnit(root)
    assert.equal(next.id, "HMI-FILL-0012")
    assert.equal(next.slug, "soft-drink-bases")
    const hinted = fs.mkdtempSync(path.join(os.tmpdir(), "deposits-hint-"))
    fs.mkdirSync(path.join(hinted, "deposits", "HMI-FILL-0030"), { recursive: true })
    fs.writeFileSync(path.join(hinted, "deposits", "HMI-FILL-0030", "STATUS"), "DEPOSITED\n")
    fs.writeFileSync(path.join(hinted, "deposits", "HMI-FILL-0030", "page"), "wiki/ingredients/fromage-frais.md\n")
    const fromHint = selectNextUnit(hinted)
    assert.equal(fromHint.id, "HMI-FILL-0030")
    assert.equal(fromHint.slug, "fromage-frais")
    fs.rmSync(hinted, { recursive: true, force: true })
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})

test("graph/next_work.json wins, then the deposited ledger is the fallback", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "deposits-graph-"))
  try {
    fs.mkdirSync(path.join(root, "graph"), { recursive: true })
    fs.writeFileSync(
      path.join(root, "ledger.json"),
      JSON.stringify([{ id: "HMI-FILL-0001", status: "DEPOSITED", kind: "ingredient", slug: "rice" }]),
    )
    fs.writeFileSync(
      path.join(root, "graph", "next_work.json"),
      JSON.stringify({
        items: [
          { id: "HMI-FILL-0008", builder: "hmi-evidence-fill", blocked_by: ["HMI-FILL-0001"], kind: "ingredient", slug: "cod" },
          { id: "HMI-FILL-0003", builder: "catalog", blocked_by: [], kind: "ingredient", slug: "salt" },
          { id: "HMI-FILL-0009", builder: "hmi-evidence-fill", blocked_by: [], kind: "product", slug: "vegetable-juices", dir: "deposits/HMI-FILL-0009" },
          { id: "HMI-FILL-0004", builder: "hmi-evidence-fill", blocked_by: [], kind: "ingredient", slug: "tofu" },
        ],
      }),
    )
    const next = selectNextUnit(root)
    assert.equal(next.id, "HMI-FILL-0009")
    assert.equal(next.kind, "product")
    assert.equal(next.slug, "vegetable-juices")
    assert.equal(next.dir, "deposits/HMI-FILL-0009")
    const skipped = selectNextUnit(root, { skip: ["hmi-fill-0009"] })
    assert.equal(skipped.id, "HMI-FILL-0004")
    assert.equal(skipped.slug, "tofu")
    fs.writeFileSync(
      path.join(root, "graph", "next_work.json"),
      JSON.stringify([{ id: "HMI-FILL-0008", builder: "hmi-evidence-fill", blocked_by: ["HMI-FILL-0002"] }]),
    )
    const fallback = selectNextUnit(root)
    assert.equal(fallback.id, "HMI-FILL-0001")
    assert.equal(fallback.slug, "rice")
    fs.writeFileSync(
      path.join(root, "graph", "next_work.json"),
      JSON.stringify([{ id: "HMI-FILL-0001", builder: "hmi-evidence-fill", blocked_by: [] }]),
    )
    const fromLedger = selectNextUnit(root)
    assert.equal(fromLedger.id, "HMI-FILL-0001")
    assert.equal(fromLedger.slug, "rice")
    assert.equal(fromLedger.kind, "ingredient")
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})

test("a nested graph work list reports visible items and skips the blocked ones", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "deposits-graph-meta-"))
  try {
    fs.mkdirSync(path.join(root, "graph"), { recursive: true })
    fs.writeFileSync(
      path.join(root, "graph", "next_work.json"),
      JSON.stringify({
        meta: {
          count: 4,
          items: [
            { id: "HMI-FILL-0002", builder: "hmi-evidence-fill", blocked_by: 2, kind: "ingredient", slug: "salt" },
            { id: "HMI-FILL-0007", properties: { builder: "hmi-evidence-fill", blocked_by: 0, kind: "ingredient", slug: "oats" } },
            { id: "HMI-FILL-0008", builder: "catalog", blocked_by: [], kind: "ingredient", slug: "rye" },
            { id: "HMI-FILL-0011", builder: "hmi-evidence-fill", blocked_by: false, kind: "ingredient" },
          ],
        },
      }),
    )
    const next = selectNextUnit(root)
    assert.equal(next.id, "HMI-FILL-0007")
    assert.equal(next.slug, "oats")
    const detail = describeSelection(root, { skip: ["HMI-FILL-0007"] })
    assert.equal(detail.graph.items, 4)
    assert.equal(detail.graph.via, "meta.items")
    assert.equal(detail.graph.eligible, 0)
    assert.equal(detail.graph.skipped.blocked, 1)
    assert.equal(detail.graph.skipped.other_builder, 1)
    assert.equal(detail.graph.skipped.skip_list, 1)
    assert.equal(detail.graph.skipped.no_slug, 1)
    assert.equal(detail.unit, null)
    assert.match(detail.report, /Graph items visible: 4/)
    assert.match(detail.report, /Eligible: 0/)
    assert.match(detail.report, /No deposited ingredient or product to fill/)
    fs.writeFileSync(
      path.join(root, "graph", "next_work.json"),
      JSON.stringify({
        meta: { count: 1 },
        items: {
          "HMI-FILL-0014": { builder: "hmi-evidence-fill", blocked_by: [], kind: "product", slug: "tea" },
        },
      }),
    )
    const mapped = selectNextUnit(root)
    assert.equal(mapped.id, "HMI-FILL-0014")
    assert.equal(mapped.kind, "product")
    assert.equal(mapped.slug, "tea")
    fs.writeFileSync(
      path.join(root, "graph", "next_work.json"),
      JSON.stringify({
        meta: { count: 2 },
        nodes: [{ id: "HMI-NODE-1", kind: "source" }],
        ready: [{ id: "HMI-FILL-0020", builder: "hmi-evidence-fill", blocked_by: [], kind: "ingredient", slug: "barley" }],
      }),
    )
    const ready = describeSelection(root)
    assert.equal(ready.graph.via, "ready")
    assert.equal(ready.unit.id, "HMI-FILL-0020")
    assert.equal(ready.unit.slug, "barley")
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
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
  assert.deepEqual(baselineScopeErrors(before, before, "ingredients/cocoa"), [])
  assert.ok(baselineScopeErrors(before, before + "ingredients/pea\n", "ingredients/cocoa").some((line) => line.includes("gained")))
  assert.ok(baselineScopeErrors(before, "# note\n", "ingredients/cocoa").some((line) => line.includes("unrelated")))
})

test("the scheduled workflow carries the Claude fill contract", () => {
  const yml = fs.readFileSync(new URL("../../.github/workflows/claude-evidence-fill.yml", import.meta.url), "utf8")
  assert.match(yml, /cron: "17 \*\/2 \* \* \*"/)
  assert.doesNotMatch(yml, /cron: "0 5 \* \* \*"/)
  assert.match(yml, /GH_TOKEN: \$\{\{ github\.token \}\}/)
  assert.match(yml, /GITHUB_OUTPUT/)
  assert.match(yml, /--filter=blob:none/)
  assert.match(yml, /sparse-checkout set --no-cone/)
  assert.match(yml, /sparse-checkout add/)
  assert.match(yml, /workflow_dispatch:/)
  assert.match(yml, /dry_run:/)
  assert.match(yml, /DRY_RUN/)
  assert.match(yml, /anthropics\/claude-code-action@v1/)
  assert.match(
    yml,
    /github_token: "\$\{\{ \(github\.event_name == 'schedule' \|\| endsWith\(github\.actor, '\[bot\]'\)\) && github\.token \|\| '' \}\}"/,
  )
  assert.match(yml, /\[ "\$\{GITHUB_EVENT_NAME\}" = "schedule" \] \|\| \[\[ "\$\{ACTOR\}" == \*'\[bot\]' \]\]/)
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
  assert.doesNotMatch(yml, /^\s*(?:node|npm)\b.*--write-baseline/m)
  assert.match(yml, /does not run --write-baseline/)
  assert.match(yml, /git merge --no-edit origin\/main/)
  assert.doesNotMatch(yml, /record-filled-page\.mjs/)
  assert.match(yml, /does not edit the structure, openings, or thin-with-evidence baselines/)
  assert.match(yml, /kind == "product"/)
  const prompt = fs.readFileSync(new URL("./prompt.md", import.meta.url), "utf8")
  assert.match(prompt, /audit-page-structure\.mjs --write-baseline/)
  assert.match(prompt, /Do not pass `--write-baseline`/)
  assert.match(prompt, /page-structure-baseline\.json/)
  assert.match(prompt, /page-openings-baseline\.json/)
  assert.match(prompt, /thin-with-evidence-baseline\.txt/)
  assert.match(prompt, /latest main/)
  assert.match(prompt, /__PAGE__/)
})

test("baseline files change only the filled page path", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "fill-baseline-"))
  try {
    const page = "wiki/ingredients/cocoa.md"
    const product = "wiki/products/tea.md"
    fs.mkdirSync(path.join(root, "wiki/ingredients"), { recursive: true })
    fs.mkdirSync(path.join(root, "wiki/products"), { recursive: true })
    fs.mkdirSync(path.join(root, "data/evidence"), { recursive: true })
    fs.mkdirSync(path.join(root, "data/fanout"), { recursive: true })
    fs.writeFileSync(
      path.join(root, page),
      "---\ntitle: Cocoa\nstatus: populated\n---\n\n# Cocoa\n\n## Direct answer\n\nLead was 2 µg/kg.\n",
    )
    fs.writeFileSync(path.join(root, product), "---\ntitle: Tea\n---\n\n# Tea\n\nTea is a brewed drink.\n")
    const structure = {
      order: "HMI-STRUCTURE-SPEC-1",
      checks: Object.fromEntries(CHECKS.map((check) => [check, { pages: 1, paths: ["wiki/ingredients/rice.md"] }])),
    }
    const structurePath = path.join(root, "data/evidence/page-structure-baseline.json")
    fs.writeFileSync(structurePath, `${JSON.stringify(structure, null, 2)}\n`)
    const openingsPath = path.join(root, "data/evidence/page-openings-baseline.json")
    const openingsBefore = '{\n "note": "keep",\n "pages": [\n  "wiki/ingredients/rice.md",\n  "wiki/products/tea.md"\n ]\n}\n'
    fs.writeFileSync(openingsPath, openingsBefore)
    const thinPath = path.join(root, "data/fanout/thin-with-evidence-baseline.txt")
    fs.writeFileSync(thinPath, "# note\ningredients/rice\ningredients/cocoa\nproducts/tea\n")
    recordFilledPage(root, page)
    assert.equal(fs.readFileSync(openingsPath, "utf8"), openingsBefore)
    const after = JSON.parse(fs.readFileSync(structurePath, "utf8"))
    for (const check of CHECKS) {
      assert.deepEqual(
        after.checks[check].paths.filter((rel) => rel !== page),
        ["wiki/ingredients/rice.md"],
      )
    }
    assert.ok(after.checks.uncertainty_note.paths.includes(page))
    assert.equal(fs.readFileSync(openingsPath, "utf8").includes("wiki/ingredients/rice.md"), true)
    assert.equal(fs.readFileSync(openingsPath, "utf8").includes("wiki/products/tea.md"), true)
    const thin = fs.readFileSync(thinPath, "utf8")
    assert.match(thin, /ingredients\/rice/)
    assert.match(thin, /products\/tea/)
    assert.doesNotMatch(thin, /ingredients\/cocoa/)
    recordFilledPage(root, product)
    const openings = JSON.parse(fs.readFileSync(openingsPath, "utf8"))
    assert.deepEqual(openings.pages, ["wiki/ingredients/rice.md"])
    const thinAfter = fs.readFileSync(thinPath, "utf8")
    assert.match(thinAfter, /ingredients\/rice/)
    assert.doesNotMatch(thinAfter, /products\/tea/)
    const structureAfter = JSON.parse(fs.readFileSync(structurePath, "utf8"))
    for (const check of CHECKS) {
      assert.deepEqual(
        structureAfter.checks[check].paths.filter((rel) => rel !== page && rel !== product),
        ["wiki/ingredients/rice.md"],
      )
    }
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})
