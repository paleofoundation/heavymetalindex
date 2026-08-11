#!/usr/bin/env node
// Score the wishlist so Karen fetches the most valuable paywalled papers first.
//
// Deterministic (no LLM): every component is reproducible from the entry + git-
// visible weights (tools/wishlist/weights.json), so the ranking is auditable.
// Writes relevance_score + relevance_components back into wishlist.jsonl and
// re-derives wishlist.csv sorted by score.
//
//   npm run wishlist:score
//   node tools/wishlist/score-wishlist.mjs --enrich   # backfill year/citations via Crossref
//
// Flag: --enrich  (Crossref lookup by DOI for entries missing year or citations)

import fs from "node:fs"
import path from "node:path"
import { loadWishlist, saveWishlist } from "./lib/wishlist-store.mjs"
import { USER_AGENT, sleep } from "../fetch-app/lib/util.mjs"

const repoRoot = process.cwd()
const ENRICH = process.argv.includes("--enrich")
const W = JSON.parse(fs.readFileSync(path.join(repoRoot, "tools/wishlist/weights.json"), "utf8"))
const w = W.weights

const METALS = [
  "lead", "cadmium", "arsenic", "mercury", "nickel", "chromium", "aluminum",
  "aluminium", "antimony", "tin", "methylmercury", "inorganic arsenic",
  "arsenite", "arsenate", "cr(vi)", "hexavalent chromium", "uranium",
]
const DOMAIN = [
  "rice", "cereal", "infant", "formula", "baby", "food", "diet", "contaminat",
  "heavy metal", "trace element", "trace metal", "exposure", "icp-ms", "µg/kg",
  "mg/kg", "ppb", "concentration", "toxic", "residue", "bioaccess", "dietary intake",
]
const REVIEW_RE = /\b(review|meta-?analysis|systematic|survey|scoping)\b/i

function countHits(hay, terms) {
  let n = 0
  for (const t of terms) if (hay.includes(t)) n++
  return n
}

function topicality(e) {
  const hay = String(e.title || "").toLowerCase()
  if (!hay) return 0
  const metalHits = countHits(hay, METALS)
  const domainHits = countHits(hay, DOMAIN)
  return Math.min(1, metalHits * 0.5 + domainHits * 0.2)
}
function citations(e) {
  const c = Number(e.cited_by_count) || 0
  return Math.min(1, Math.log10(c + 1) / Math.log10(W.citation_saturation + 1))
}
function recency(e) {
  const y = Number(e.year)
  if (!y) return W.recency_unknown
  if (y >= W.recency_full_year) return 1
  if (y <= W.recency_zero_year) return 0
  return (y - W.recency_zero_year) / (W.recency_full_year - W.recency_zero_year)
}
function reviewBonus(e) {
  return REVIEW_RE.test(String(e.title || "")) ? 1 : 0
}
function demand(e) {
  const builds = (e.builds || []).length
  const seen = Math.min(5, e.times_seen || 0)
  return Math.min(1, (builds - 1) * 0.5 + seen / 5) // 1 build+1 sighting → 0.2; multi-build/oft-seen → 1
}

function score(e) {
  const comp = {
    topicality: topicality(e),
    citations: citations(e),
    demand: demand(e),
    recency: recency(e),
    review_bonus: reviewBonus(e),
    pool_impact: 0, // v2: join to ingredient-synthesis-backlog.csv
  }
  let s = 0
  for (const k of Object.keys(w)) s += (w[k] || 0) * (comp[k] || 0)
  return { relevance_score: Math.round(s * 1000) / 10, relevance_components: comp } // 0..100, 1 decimal
}

// ── optional Crossref enrichment for missing year / citation count ───────────
async function enrich(entries) {
  const need = entries.filter((e) => e.doi && (!e.year || !e.cited_by_count))
  if (!need.length) return
  console.log(`  enriching ${need.length} entries via Crossref…`)
  let done = 0
  for (const e of need) {
    try {
      const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(e.doi)}`, {
        headers: { "User-Agent": USER_AGENT },
      })
      if (res.ok) {
        const j = await res.json()
        const m = j.message || {}
        if (!e.year) e.year = (m.issued?.["date-parts"]?.[0]?.[0]) || (m.published?.["date-parts"]?.[0]?.[0]) || null
        if (!e.cited_by_count) e.cited_by_count = Number(m["is-referenced-by-count"]) || 0
        if (!e.journal && m["container-title"]?.[0]) e.journal = m["container-title"][0]
        if (REVIEW_RE.test(m.type || "")) e._crossref_review = true
      }
    } catch {}
    if (++done % 20 === 0) console.log(`    …${done}/${need.length}`)
    await sleep(250) // polite
  }
}

const byKey = loadWishlist()
const entries = [...byKey.values()]
if (!entries.length) {
  console.log("wishlist is empty — run: npm run wishlist:harvest")
  process.exit(0)
}

if (ENRICH) await enrich(entries)

for (const e of entries) {
  const { relevance_score, relevance_components } = score(e)
  e.relevance_score = relevance_score
  e.relevance_components = relevance_components
}
saveWishlist(byKey)

const open = entries.filter((e) => e.status === "open").sort((a, b) => b.relevance_score - a.relevance_score)
console.log(`\n✓ scored ${entries.length} wishlist entries (weights: ${Object.entries(w).map(([k, v]) => `${k} ${v}`).join(", ")})`)
console.log(`  top 8 open by relevance:`)
for (const e of open.slice(0, 8)) {
  console.log(`   ${String(e.relevance_score).padStart(5)}  ${(e.doi || e.wishlist_id).padEnd(30).slice(0, 30)}  ${String(e.title || "").slice(0, 60)}`)
}
console.log(`  → data/evidence/wishlist/wishlist.csv (sorted by relevance)`)
