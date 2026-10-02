import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"

test("public legends retain usable summary evidence and log unresolved citations without deleting records", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-citations-"))
  try {
    fs.mkdirSync(path.join(root, "wiki/sources"), { recursive: true })
    fs.mkdirSync(path.join(root, "wiki/ingredients"), { recursive: true })
    for (const [key, author, tier] of [["usable", "Food Agency", "A"], ["unknown", "Unknown authors", "B"], ["pending", "Food Agency", "pending"]]) {
      fs.writeFileSync(path.join(root, `wiki/sources/${key}.md`), `---\ntitle: Food survey\nauthors: ["${author}"]\nyear: 2024\nevidence_tier: ${tier}\ningredients: ["[[ingredients/test]]"]\nsample_n: null\n---\nSummary-only source.\n`)
    }
    fs.writeFileSync(path.join(root, "wiki/ingredients/test.md"), "---\ntitle: Test\n---\n\n# Test\n")
    const script = fileURLToPath(new URL("./build-source-legend.mjs", import.meta.url))
    execFileSync(process.execPath, [script], { cwd: root, stdio: "pipe" })
    const page = fs.readFileSync(path.join(root, "wiki/ingredients/test.md"), "utf8")
    assert.ok(page.includes("sources/usable"))
    assert.ok(!page.includes("sources/unknown"))
    assert.ok(!page.includes("sources/pending"))
    const audit = JSON.parse(fs.readFileSync(path.join(root, "data/audits/public-source-citations.json"), "utf8"))
    assert.equal(audit.length, 2)
    assert.ok(fs.existsSync(path.join(root, "wiki/sources/unknown.md")))
    execFileSync(process.execPath, [script], { cwd: root, stdio: "pipe" })
    assert.equal(fs.readFileSync(path.join(root, "wiki/ingredients/test.md"), "utf8"), page)
  } finally { fs.rmSync(root, { recursive: true, force: true }) }
})
