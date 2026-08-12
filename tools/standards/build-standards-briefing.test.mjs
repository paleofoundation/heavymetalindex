import test from "node:test"
import assert from "node:assert"
import { spawnSync } from "node:child_process"
import { join } from "node:path"

const repoRoot = process.cwd()
const generator = join(repoRoot, "tools/standards/build-standards-briefing.mjs")

test("retired occurrence-selected briefing generator fails closed", () => {
  const result = spawnSync("node", [generator, "--product=infant-formula-powder-non-soy"], {
    cwd: repoRoot,
    encoding: "utf8",
  })

  assert.strictEqual(result.status, 2)
  assert.match(result.stderr, /RETIRED/)
  assert.match(result.stderr, /superseded P45\/P97 method/)
})
