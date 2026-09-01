// Reconcile the DataCite `types` of already-minted Index DOIs to what the repo
// tooling declares (mint-dois.mjs `pageTypeToDataCite`). Use when a batch was
// minted out-of-band (e.g. in Fabrica) with a different resourceType than the
// canonical one — as happened with the 24 synthesis DOIs, minted as "Preprint"
// when the Index reports institutional Technical Reports (no journal version is
// coming; the Journal of Food Metallomics is not currently publishing).
//
// SAFE BY DEFAULT: dry-run unless `--apply`. Only touches records whose current
// types differ from the desired types. Updates ONLY the `types` object (PUT with
// just attributes.types) — title, creators, url, dates, DOI are untouched, so
// the DOI keeps resolving and nothing else changes. Never creates or deletes.
//
// Credentials (PRODUCTION — these are live 10.83376 DOIs):
//   DATACITE_USER, DATACITE_PASSWORD  — the repository account that owns the prefix
// Run:
//   node --env-file=.env.local tools/datacite-reconcile-types.mjs            # dry-run
//   node --env-file=.env.local tools/datacite-reconcile-types.mjs --apply    # write
//
// The prefix and API host are fixed to production on purpose: this fixes live
// records, not sandbox ones.

const PREFIX = "10.83376"
const API = "https://api.datacite.org/dois"
const BASE = "https://heavymetalindex.com/"
const apply = process.argv.includes("--apply")

const USER = process.env.DATACITE_USER
const PASSWORD = process.env.DATACITE_PASSWORD
const credsReady =
  USER && PASSWORD && !/PENDING/i.test(USER) && !/PENDING/i.test(PASSWORD)

// Same classification as tools/mint-dois.mjs `pageTypeToDataCite`, keyed by the
// page's wiki directory (derived from the DOI's target URL). Keep in sync.
const AUTHORED_DIRS = new Set(["synthesis", "metals"])
function desiredTypes(dir) {
  if (dir === "sources") return { resourceTypeGeneral: "Other" }
  if (AUTHORED_DIRS.has(dir)) return { resourceTypeGeneral: "Report", resourceType: "Technical Report" }
  return { resourceTypeGeneral: "Text" }
}

if (apply && !credsReady) {
  console.error(`datacite-reconcile-types: --apply requires real DATACITE_USER/DATACITE_PASSWORD (the repo account that owns ${PREFIX}); found missing or PENDING. Aborting before any write.`)
  process.exit(2)
}

const authHeader = () => `Basic ${Buffer.from(`${USER}:${PASSWORD}`).toString("base64")}`

async function listAll() {
  const out = []
  let url = `${API}?prefix=${PREFIX}&page%5Bsize%5D=1000`
  const r = await fetch(url, { headers: { Accept: "application/vnd.api+json" } })
  if (!r.ok) throw new Error(`list failed: ${r.status} ${await r.text()}`)
  const j = await r.json()
  for (const d of j.data) out.push(d)
  return out
}

const dirOf = (recUrl) => {
  if (!recUrl || !recUrl.startsWith(BASE)) return null
  const slug = recUrl.slice(BASE.length).replace(/\/$/, "")
  return slug.includes("/") ? slug.split("/")[0] : "" // top-level dir
}

const sameTypes = (a, b) =>
  (a?.resourceTypeGeneral || "") === (b?.resourceTypeGeneral || "") &&
  (a?.resourceType || "") === (b?.resourceType || "")

async function patchTypes(doi, types) {
  const r = await fetch(`${API}/${encodeURIComponent(doi)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/vnd.api+json", Authorization: authHeader() },
    body: JSON.stringify({ data: { type: "dois", attributes: { types } } }),
  })
  if (!r.ok) throw new Error(`${r.status} ${(await r.text()).slice(0, 200)}`)
  const j = await r.json()
  return j.data.attributes.types
}

const records = await listAll()
console.log(`datacite-reconcile-types: ${apply ? "APPLY" : "DRY-RUN"} — ${records.length} DOIs under ${PREFIX}\n`)

let toChange = 0, changed = 0, skipped = 0, failed = 0
for (const rec of records) {
  const doi = rec.attributes.doi
  const state = rec.attributes.state
  const dir = dirOf(rec.attributes.url)
  if (dir === null) { console.error(`  ? ${doi}: non-index url ${rec.attributes.url} — skipping`); skipped++; continue }
  const cur = rec.attributes.types || {}
  const want = desiredTypes(dir)
  if (sameTypes(cur, want)) { skipped++; continue }
  toChange++
  const line = `${doi}\n     ${cur.resourceTypeGeneral || "?"}/${cur.resourceType || "-"}  ->  ${want.resourceTypeGeneral}/${want.resourceType || "-"}  [${state}]`
  if (!apply) { console.log(`  ~ ${line}`); continue }
  try {
    const after = await patchTypes(doi, want)
    console.log(`  ✓ ${doi}: now ${after.resourceTypeGeneral}/${after.resourceType || "-"}`)
    changed++
  } catch (e) {
    console.error(`  ✗ ${doi}: ${e.message}`)
    failed++
  }
}

console.log(`\n  need-change=${toChange} ${apply ? `applied=${changed} failed=${failed}` : "(dry-run)"} already-correct=${skipped}`)
if (!apply && toChange > 0) {
  if (!credsReady) console.log(`\n  To apply: put the real DATACITE_USER/DATACITE_PASSWORD (the repo account that owns ${PREFIX}) in .env.local, then re-run with --apply.`)
  else console.log(`\n  Credentials look present. Re-run with --apply to write.`)
}
