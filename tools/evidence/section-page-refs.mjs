import fs from "node:fs"
import path from "node:path"

// Leaf slugs surfaced on the generated category SECTION pages
// (wiki/<vertical>/categories/*.md). The v3 top index renders a card grid whose
// cards link OUT to these section pages, and each section page lists its member
// rows — so a leaf surfaced there is genuinely reachable and navigable even
// though it no longer appears in the (deliberately de-duplicated) flat body of
// wiki/<vertical>/index.md.
//
// The orphan / routing / auto-stub checks all keyed their "surfaced" sets off
// wiki/<vertical>/index.md only. Removing the redundant flat lists from the index
// therefore made every carded row look orphaned/unsurfaced and let
// link-orphans.mjs re-append them to the auto-stub block — a self-healing flat
// list, the same regression build-homepage.mjs caused on the homepage. This
// shared helper is the single source of truth those consumers union in so the
// card grid counts as real surfacing.
export function sectionPageRefs(vertical, wikiDir) {
  const dir = path.join(wikiDir ?? "wiki", vertical, "categories")
  const out = new Set()
  if (!fs.existsSync(dir)) return out
  const re = new RegExp(`\\[\\[${vertical}/([a-z0-9][a-z0-9_-]*)`, "g")
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".md") || f === "index.md") continue
    const t = fs.readFileSync(path.join(dir, f), "utf8")
    let m
    while ((m = re.exec(t)) !== null) out.add(m[1])
  }
  return out
}
