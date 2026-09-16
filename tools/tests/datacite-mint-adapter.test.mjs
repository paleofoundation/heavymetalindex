import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const root = fileURLToPath(new URL("../../", import.meta.url))
test("real HMI adapter preserves coauthors, institution defaults, and the third-party source boundary", async (t) => {
  const cwd = await fs.mkdtemp(path.join(os.tmpdir(), "hmi-mint-adapter-"))
  t.after(() => fs.rm(cwd, { recursive: true, force: true }))
  await fs.mkdir(path.join(cwd, "data"))
  for (const name of ["researcher-identity.json", "datacite-creator.json"]) await fs.copyFile(path.join(root, "data", name), path.join(cwd, "data", name))
  for (const [dir, author] of [["synthesis", 'established: 2024-02-29\nauthors:\n  - name: "Garcia, Sofia"\n    nameType: Personal\n  - Karen Pendergrass\n'], ["products", 'published: "2023"\n'], ["metals", 'published: "2024-02-31"\n'], ["sources", "authors: []\n"]]) {
    await fs.mkdir(path.join(cwd, "wiki", dir), { recursive: true })
    await fs.writeFile(path.join(cwd, "wiki", dir, `${dir}-fixture.md`), `---\ntitle: Fixture ${dir}\nupdated: 2026-01-01\nwiki_doi: null\n${author}---\nFixture.\n`)
  }
  // Intercept every fetch in the child. Fixture failures ensure no DOI is written to a page.
  const intercept = path.join(cwd, "intercept.mjs")
  await fs.writeFile(intercept, `import fs from 'node:fs'; globalThis.fetch = async (url, options) => { if(options?.method !== 'POST') throw new Error('Unexpected request'); fs.appendFileSync('captured.jsonl', options.body+'\\n'); return {ok:false,status:422,text:async()=> 'fixture rejection'}; };`)
  const env = { PATH: process.env.PATH, DATACITE_USER: "fixture.repo", DATACITE_PASSWORD: "fixture-password", DATACITE_PREFIX: "10.99999", DATACITE_MODE: "test" }
  const result = spawnSync(process.execPath, ["--import", intercept, path.join(root, "tools/mint-dois.mjs"), "--priority=6"], { cwd, env, encoding: "utf8" })
  const payloads = (await fs.readFile(path.join(cwd, "captured.jsonl"), "utf8")).trim().split("\n").map(JSON.parse)
  assert.equal(payloads.length, 2, result.stdout + result.stderr)
  assert.match(result.stderr, /missing valid established\/published publication date/)
  assert.equal(payloads.find((p) => p.data.attributes.titles[0].title === "Fixture synthesis").data.attributes.publicationYear, 2024)
  assert.equal(payloads.find((p) => p.data.attributes.titles[0].title === "Fixture products").data.attributes.publicationYear, 2023)
  const authored = payloads.find((p) => p.data.attributes.titles[0].title === "Fixture synthesis").data.attributes.creators
  assert.deepEqual(authored[0], { name: "Garcia, Sofia", nameType: "Personal" })
  assert.equal(authored[1].nameIdentifiers[0].nameIdentifier, "https://orcid.org/0000-0002-2348-7259")
  assert.deepEqual(authored[1].affiliation, [{ name: "Institute of Contaminant Standards" }, { name: "The Paleo Foundation" }])
  assert.deepEqual(payloads.find((p) => p.data.attributes.titles[0].title === "Fixture products").data.attributes.creators, [{ name: "Institute of Contaminant Standards", nameType: "Organizational" }])
  const blocked = spawnSync(process.execPath, [path.join(root, "tools/mint-dois.mjs"), "--dry-run", "--include-sources"], { cwd, env: { PATH: process.env.PATH }, encoding: "utf8" })
  assert.notEqual(blocked.status, 0)
  assert.match(blocked.stderr, /Source pages cannot be minted/)
})
