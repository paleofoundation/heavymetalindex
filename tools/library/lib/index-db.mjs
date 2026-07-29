// Canonical library index — one row per paper — as SQLite (node:sqlite, built
// into Node 22). The DB is a REBUILDABLE CACHE that lives on the HMI-Library
// drive (never committed); the committed, diffable record is the metadata
// snapshot (tools/library/snapshot.mjs). See docs/architecture/library-fetch-sync-plan.md.
//
// Identity model (per the adversarial review): sha256 is the authoritative
// identity for a physical PDF; doi / doi_slug / normalized_title are secondary
// lookups that all resolve to the same row. Human signal (tags_manual,
// star_manual) is NEVER overwritten by machine passes.

import fs from "node:fs"
import path from "node:path"
import { DatabaseSync } from "node:sqlite"
import { libraryRoot } from "../../lib/library-root.mjs"

// DB path: explicit override → drive → throw. Tests set HMI_LIBRARY_INDEX_DB.
export function indexDbPath() {
  if (process.env.HMI_LIBRARY_INDEX_DB) return process.env.HMI_LIBRARY_INDEX_DB
  const root = libraryRoot()
  if (!root) return null
  return path.join(root, "library-index.sqlite")
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS papers (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT,
  sha256              TEXT UNIQUE,
  doi                 TEXT,
  doi_slug            TEXT,
  normalized_title    TEXT,
  cite_key            TEXT,
  title               TEXT,
  year                INTEGER,
  journal             TEXT,
  raw_path            TEXT,
  extracted_text_path TEXT,
  status              TEXT NOT NULL DEFAULT 'have',   -- have | wishlist | failed
  acquisition_source  TEXT,
  ingested            INTEGER NOT NULL DEFAULT 0,
  tags_auto           TEXT,                           -- JSON, machine (Phase 3)
  tags_manual         TEXT,                           -- JSON, human/import (never machine-written)
  star_manual         INTEGER NOT NULL DEFAULT 0,     -- human/import only
  builds              TEXT,                           -- JSON (Phase 4)
  first_seen          TEXT,
  updated_at          TEXT
);
CREATE INDEX IF NOT EXISTS idx_papers_doi      ON papers(doi)              WHERE doi IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_papers_doislug  ON papers(doi_slug)         WHERE doi_slug IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_papers_ntitle   ON papers(normalized_title) WHERE normalized_title IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_papers_status   ON papers(status);
CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT);
`

export function openIndex({ readonly = false } = {}) {
  const dbPath = indexDbPath()
  if (!dbPath) {
    throw new Error(
      "HMI-Library drive is not mounted — plug it in to open the library index (or set HMI_LIBRARY_INDEX_DB).",
    )
  }
  if (readonly && !fs.existsSync(dbPath)) {
    throw new Error(`Library index not found at ${dbPath}. Run: npm run library:index`)
  }
  fs.mkdirSync(path.dirname(dbPath), { recursive: true })
  const db = new DatabaseSync(dbPath)
  db.exec("PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000;")
  if (!readonly) db.exec(SCHEMA)
  return new LibraryIndex(db, dbPath)
}

class LibraryIndex {
  constructor(db, dbPath) {
    this.db = db
    this.dbPath = dbPath
    this._find = {
      sha: db.prepare("SELECT id FROM papers WHERE sha256 = ?"),
      doi: db.prepare("SELECT id FROM papers WHERE doi = ?"),
      slug: db.prepare("SELECT id FROM papers WHERE doi_slug = ?"),
      title: db.prepare("SELECT id FROM papers WHERE normalized_title = ?"),
      cite: db.prepare("SELECT id FROM papers WHERE cite_key = ?"),
    }
  }

  // Identity resolution order: sha256 (authoritative) → doi → doi_slug →
  // cite_key → normalized_title. All secondary keys resolve to the same row.
  _resolveId({ sha256, doi, doi_slug, cite_key, normalized_title }) {
    if (sha256) { const r = this._find.sha.get(sha256); if (r) return r.id }
    if (doi) { const r = this._find.doi.get(doi); if (r) return r.id }
    if (doi_slug) { const r = this._find.slug.get(doi_slug); if (r) return r.id }
    if (cite_key) { const r = this._find.cite.get(cite_key); if (r) return r.id }
    if (normalized_title) { const r = this._find.title.get(normalized_title); if (r) return r.id }
    return null
  }

  // Insert-or-fill. Machine fields are filled via COALESCE(new, old) so a later,
  // richer pass completes a sparse row; tags_manual/star_manual are untouched.
  upsertPaper(rec, now = new Date().toISOString().slice(0, 10)) {
    const r = {
      sha256: rec.sha256 || null,
      doi: rec.doi || null,
      doi_slug: rec.doi_slug || null,
      normalized_title: rec.normalized_title || null,
      cite_key: rec.cite_key || null,
      title: rec.title || null,
      year: Number.isFinite(rec.year) ? rec.year : null,
      journal: rec.journal || null,
      raw_path: rec.raw_path || null,
      extracted_text_path: rec.extracted_text_path || null,
      status: rec.status || "have",
      acquisition_source: rec.acquisition_source || null,
      ingested: rec.ingested ? 1 : 0,
    }
    const id = this._resolveId(r)
    if (id) {
      this.db
        .prepare(
          `UPDATE papers SET
             sha256 = COALESCE(?, sha256),
             doi = COALESCE(?, doi),
             doi_slug = COALESCE(?, doi_slug),
             normalized_title = COALESCE(?, normalized_title),
             cite_key = COALESCE(?, cite_key),
             title = COALESCE(?, title),
             year = COALESCE(?, year),
             journal = COALESCE(?, journal),
             raw_path = COALESCE(?, raw_path),
             extracted_text_path = COALESCE(?, extracted_text_path),
             acquisition_source = COALESCE(?, acquisition_source),
             ingested = MAX(ingested, ?),
             updated_at = ?
           WHERE id = ?`,
        )
        .run(
          r.sha256, r.doi, r.doi_slug, r.normalized_title, r.cite_key, r.title,
          r.year, r.journal, r.raw_path, r.extracted_text_path, r.acquisition_source,
          r.ingested, now, id,
        )
      return { id, inserted: false }
    }
    const info = this.db
      .prepare(
        `INSERT INTO papers
           (sha256, doi, doi_slug, normalized_title, cite_key, title, year, journal,
            raw_path, extracted_text_path, status, acquisition_source, ingested,
            first_seen, updated_at)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      )
      .run(
        r.sha256, r.doi, r.doi_slug, r.normalized_title, r.cite_key, r.title,
        r.year, r.journal, r.raw_path, r.extracted_text_path, r.status,
        r.acquisition_source, r.ingested, now, now,
      )
    return { id: Number(info.lastInsertRowid), inserted: true }
  }

  // Fast have-set membership sets for wishlist dedup (load once per run).
  haveKeys() {
    const doiSlugs = new Set()
    const titles = new Set()
    const dois = new Set()
    for (const row of this.db
      .prepare("SELECT doi, doi_slug, normalized_title FROM papers WHERE status = 'have'")
      .all()) {
      if (row.doi) dois.add(row.doi)
      if (row.doi_slug) doiSlugs.add(row.doi_slug)
      if (row.normalized_title) titles.add(row.normalized_title)
    }
    return { doiSlugs, titles, dois }
  }

  setMeta(k, v) {
    this.db
      .prepare("INSERT INTO meta(k,v) VALUES(?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v")
      .run(k, String(v))
  }
  getMeta(k) {
    const r = this.db.prepare("SELECT v FROM meta WHERE k = ?").get(k)
    return r ? r.v : null
  }

  stats() {
    const byStatus = {}
    for (const r of this.db.prepare("SELECT status, COUNT(*) n FROM papers GROUP BY status").all()) {
      byStatus[r.status] = r.n
    }
    const total = this.db.prepare("SELECT COUNT(*) n FROM papers").get().n
    const withDoi = this.db.prepare("SELECT COUNT(*) n FROM papers WHERE doi IS NOT NULL").get().n
    const withSha = this.db.prepare("SELECT COUNT(*) n FROM papers WHERE sha256 IS NOT NULL").get().n
    const ingested = this.db.prepare("SELECT COUNT(*) n FROM papers WHERE ingested = 1").get().n
    return { total, byStatus, withDoi, withSha, ingested }
  }

  // Ordered rows for the committed snapshot (metadata only; no fulltext/abstract).
  *snapshotRows() {
    for (const row of this.db
      .prepare(
        `SELECT sha256, cite_key, doi, doi_slug, normalized_title, year, status,
                ingested, star_manual, builds, tags_auto, tags_manual
         FROM papers
         ORDER BY sha256 IS NULL, sha256,
                  doi_slug IS NULL, doi_slug,
                  normalized_title IS NULL, normalized_title,
                  cite_key IS NULL, cite_key, id`,
      )
      .iterate()) {
      yield row
    }
  }

  close() {
    this.db.close()
  }
}
