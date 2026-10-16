import test from "node:test"
import assert from "node:assert/strict"
import { mkdtempSync, writeFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { listDir } from "./postbuild-llms-txt.mjs"

test("LLM index spells out species and excludes noindex, draft and active low-value templates", () => {
  const dir = mkdtempSync(join(tmpdir(), "hmi-llms-"))
  const page = (file, fm, body = "A reviewed reference.") =>
    writeFileSync(join(dir, file + ".md"), `---\n${fm}\n---\n\n${body}`)
  try {
    page("arsenic", "title: iAs\nsymbol: iAs\ntype: metal")
    page("lead", "title: Pb\nsymbol: Pb\ntype: metal")
    page("mercury", "title: MeHg\nsymbol: MeHg\ntype: metal")
    page("excluded", "title: Cd\nsymbol: Cd\ntype: metal\nnoindex: true")
    page("draft", "title: Ni\nsymbol: Ni\ntype: metal\ndraft: true")
    page(
      "unfinished",
      "title: Al\nsymbol: Al\ntype: metal",
      "Step Zero scaffold.",
    )
    page("index", "title: Metals")
    assert.deepEqual(listDir(dir, { section: "metals" }), [
      { slug: "arsenic", title: "Inorganic arsenic" },
      { slug: "lead", title: "Lead" },
      { slug: "mercury", title: "Methylmercury" },
    ])
    assert.equal(listDir(dir, { section: "metals", limit: 1 }).length, 1)
  } finally {
    rmSync(dir, { recursive: true })
  }
})
