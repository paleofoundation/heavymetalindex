import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const script = fileURLToPath(new URL("./audit-link-integrity.mjs", import.meta.url))

test("missing-link ledger is complete, deterministic, deduplicated and clears resolved destinations", (t) => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-link-audit-"))
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }))
  const write = (slug, content) => {
    const file = path.join(cwd, "wiki", `${slug}.md`)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, content)
  }
  const run = () => {
    const result = spawnSync(process.execPath, [script], { cwd, encoding: "utf8" })
    assert.equal(result.status, 0, result.stderr)
    return fs.readFileSync(path.join(cwd, "data/evidence/link-integrity-gaps.csv"), "utf8")
  }
  const missing = Array.from({ length: 45 }, (_, i) => `health/missing-${String(i).padStart(2, "0")}`)
  write("sources/z", `---\ntype: source\n---\n${missing.map((slug) => `[[${slug}]]`).reverse().join("\n")}\n[[health/missing-00|Repeat]]\n[[health/with,comma]]\n[[health/existing]]\n[[health/alias]]\n[[docs/internal-policy]]\n`)
  write("sources/a", "---\ntype: source\n---\n[[health/missing-00]]\n")
  write("health/existing", "---\naliases: [health/alias]\n---\nExisting page.\n")
  const first = run()
  const rows = first.trimEnd().split("\n").slice(1)
  assert.equal(rows.length, 47)
  assert.deepEqual(rows.slice(0, 2), [
    "wiki/sources/a.md,health/missing-00,sources,health,source,missing_body_wikilink_target",
    "wiki/sources/z.md,health/missing-00,sources,health,source,missing_body_wikilink_target",
  ])
  assert.ok(rows.includes('wiki/sources/z.md,"health/with,comma",sources,health,source,missing_body_wikilink_target'))
  assert.ok(rows.every((row) => row.endsWith(",source,missing_body_wikilink_target")))
  for (const target of ["health/existing", "health/alias", "docs/internal-policy"]) assert.ok(!first.includes(target))
  assert.equal(run(), first)
  write("health/missing-00", "---\ntitle: Resolved concept\n---\nNow exists.\n")
  const resolved = run()
  const resolvedRows = resolved.trimEnd().split("\n").slice(1)
  assert.equal(resolvedRows.length, 45)
  assert.ok(!resolved.includes("health/missing-00"))
})
