// The wishlist store — papers the fetch tools WANTED but could not download
// (paywalled / no open-access copy / fetch-failed), so Karen can acquire them
// herself. Append-friendly JSONL (git-per-date) keyed by paper identity, with a
// derived CSV for the UI. See docs/architecture/library-fetch-sync-plan.md §3.
//
// Identity key = normalizeDoi(doi) else normalizeTitle(title) — the SAME key the
// corpus index and dedup engine use, so a wishlist entry is auto-detected the
// moment its paper gets ingested (fulfillment) and never duplicated across runs.

import fs from "node:fs"
import path from "node:path"
import { normalizeDoi, normalizeTitle } from "../../fetch-app/lib/util.mjs"

const repoRoot = process.cwd()
export const WISHLIST_DIR = path.join(repoRoot, "data/evidence/wishlist")
export const WISHLIST_JSONL = path.join(WISHLIST_DIR, "wishlist.jsonl")
export const WISHLIST_CSV = path.join(WISHLIST_DIR, "wishlist.csv")

export function keyOf({ doi, title }) {
  const d = normalizeDoi(doi || "")
  if (d) return `doi:${d}`
  const t = normalizeTitle(title || "")
  return t ? `title:${t}` : ""
}

export function loadWishlist() {
  const byKey = new Map()
  try {
    const text = fs.readFileSync(WISHLIST_JSONL, "utf8")
    for (const line of text.split("\n")) {
      const s = line.trim()
      if (!s) continue
      try {
        const e = JSON.parse(s)
        if (e.wishlist_id) byKey.set(e.wishlist_id, e)
      } catch {}
    }
  } catch {}
  return byKey
}

// Merge a freshly-observed candidate into the map. Returns the entry.
// `sighting` = {query, preset_group, run_id, decision, source, build, seen_at}
export function upsertEntry(byKey, cand, sighting) {
  const id = keyOf(cand)
  if (!id) return null
  const now = sighting.seen_at || new Date().toISOString()
  let e = byKey.get(id)
  if (!e) {
    e = {
      wishlist_id: id,
      doi: normalizeDoi(cand.doi || "") || null,
      title: cand.title || null,
      year: Number(cand.year) || null,
      journal: cand.journal || null,
      publisher_url: cand.oa_url || cand.url || null,
      cited_by_count: Number(cand.cited_by_count) || 0,
      builds: [],
      surfacing: [],
      first_seen: now,
      last_seen: now,
      times_seen: 0,
      status: "open", // open | have | have-pending-confirm | dismissed
      starred: false,
      relevance_score: 0,
      relevance_components: {},
      fulfilled_via: null,
      fulfilled_at: null,
      cite_key: null,
    }
    byKey.set(id, e)
  }
  // fill sparse fields from a richer sighting without clobbering existing values
  if (!e.title && cand.title) e.title = cand.title
  if (!e.year && Number(cand.year)) e.year = Number(cand.year)
  if (!e.journal && cand.journal) e.journal = cand.journal
  if (!e.publisher_url && (cand.oa_url || cand.url)) e.publisher_url = cand.oa_url || cand.url
  if (Number(cand.cited_by_count) > (e.cited_by_count || 0)) e.cited_by_count = Number(cand.cited_by_count)
  if (sighting.build && !e.builds.includes(sighting.build)) e.builds.push(sighting.build)
  e.times_seen++
  e.last_seen = now
  // keep surfacing history bounded but representative (dedup identical sightings)
  const sigKey = `${sighting.source}|${sighting.query}|${sighting.decision}`
  if (!e.surfacing.some((s) => `${s.source}|${s.query}|${s.decision}` === sigKey)) {
    e.surfacing.push({
      query: sighting.query || null,
      preset_group: sighting.preset_group || null,
      run_id: sighting.run_id || null,
      decision: sighting.decision || null,
      source: sighting.source || null,
      seen_at: now,
    })
    if (e.surfacing.length > 25) e.surfacing = e.surfacing.slice(-25)
  }
  return e
}

// Patch one entry by id (e.g. mark-as-have from the UI) and persist. Returns the
// updated entry, or null if not found.
export function updateEntry(id, patch) {
  const byKey = loadWishlist()
  const e = byKey.get(id)
  if (!e) return null
  Object.assign(e, patch)
  saveWishlist(byKey)
  return e
}

// Write JSONL sorted by id (stable diffs) + a derived CSV sorted by relevance.
export function saveWishlist(byKey) {
  fs.mkdirSync(WISHLIST_DIR, { recursive: true })
  const entries = [...byKey.values()]
  const jsonl = entries
    .slice()
    .sort((a, b) => a.wishlist_id.localeCompare(b.wishlist_id))
    .map((e) => JSON.stringify(e))
    .join("\n")
  fs.writeFileSync(WISHLIST_JSONL, jsonl + (entries.length ? "\n" : ""))
  writeCsv(entries)
}

function csvCell(v) {
  const s = String(v ?? "")
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

export function writeCsv(entries) {
  const cols = [
    "relevance_score", "status", "starred", "builds", "doi", "title", "year",
    "journal", "times_seen", "cited_by_count", "publisher_url", "cite_key",
  ]
  const open = entries.filter((e) => e.status === "open" || e.status === "have-pending-confirm")
  open.sort((a, b) => (b.relevance_score || 0) - (a.relevance_score || 0) || a.wishlist_id.localeCompare(b.wishlist_id))
  const rows = [cols.join(",")]
  for (const e of open) {
    rows.push(
      cols
        .map((c) => (c === "builds" ? csvCell((e.builds || []).join("|")) : csvCell(e[c])))
        .join(","),
    )
  }
  fs.writeFileSync(WISHLIST_CSV, rows.join("\n") + "\n")
}
