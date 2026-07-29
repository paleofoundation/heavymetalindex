#!/usr/bin/env node
// Server for the Central Library UI (tools/central-library/public) + the real
// condition research runner. Node built-in http only — mirrors
// tools/fetch-app/server.mjs (static serving + an SSE run endpoint).
//
//   npm run central-library      # then open http://127.0.0.1:8092
//
// API:
//   GET  /api/presets            list preset sets + their groups/queries
//   GET  /api/library            the real corpus from the canonical identity
//                                index (drive SQLite; falls back to the
//                                committed snapshot when the drive is away)
//   POST /api/run                { presetId, subject, sources?, fromYear?,
//                                  toYear?, maxPerQuery?, groups?, limitQueries?,
//                                  dryRun?, outRoot? } → { runId }
//   GET  /api/run/stream?runId   Server-Sent Events of the run's progress

import http from "node:http"
import fs from "node:fs"
import { createReadStream } from "node:fs"
import { stat } from "node:fs/promises"
import { basename, extname, join, normalize, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import os from "node:os"
import { writeFile, mkdtemp, rm } from "node:fs/promises"
import { runCondition, listPresets, loadPreset } from "./lib/run-condition.mjs"
import { loadWishlist, updateEntry } from "../wishlist/lib/wishlist-store.mjs"
import { fulfillFile } from "../wishlist/lib/fulfill.mjs"
import { openIndex, indexDbPath } from "../library/lib/index-db.mjs"
import { driveStatus } from "../lib/library-root.mjs"

const publicRoot = resolve(fileURLToPath(new URL("./public", import.meta.url)))
const port = Number(process.env.HMI_CENTRAL_LIBRARY_PORT ?? 8092)
const host = process.env.HMI_CENTRAL_LIBRARY_HOST ?? "127.0.0.1"

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
}

const runs = new Map() // runId -> { _id, listeners:Set, events:[], done }

function emitTo(runId, event) {
  const run = runs.get(runId)
  if (!run) return
  run.events.push(event)
  for (const res of run.listeners) res.write(`data: ${JSON.stringify(event)}\n\n`)
  if (event.type === "done" || event.type === "error") {
    run.done = true
    if (run.expiry) clearTimeout(run.expiry)
    for (const res of run.listeners) res.end()
    run.listeners.clear()
    setTimeout(() => runs.delete(runId), 120_000)
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host}`)

    if (url.pathname === "/api/presets" && request.method === "GET") {
      // Per-item guard: one malformed/unreadable preset must not 404 the list.
      const sets = []
      for (const meta of listPresets()) {
        try { sets.push({ ...loadPreset(meta.id), ...meta }) } catch {}
      }
      sendJson(response, { presets: sets })
      return
    }

    // The HMTc product-category catalog (35 categories → 356 subcategories),
    // so the Product Sweep can be run one product category at a time.
    if (url.pathname === "/api/matrices" && request.method === "GET") {
      sendJson(response, loadMatrices())
      return
    }

    // ── Library: the real corpus from the canonical identity index ────────────
    if (url.pathname === "/api/library" && request.method === "GET") {
      sendJson(response, loadLibrary())
      return
    }

    // ── Wishlist: papers the fetch tools wanted but couldn't download ─────────
    if (url.pathname === "/api/wishlist" && request.method === "GET") {
      const build = url.searchParams.get("build") || "all"
      const q = (url.searchParams.get("q") || "").toLowerCase().trim()
      const limit = Number(url.searchParams.get("limit")) || 500
      const all = [...loadWishlist().values()].filter(
        (e) => e.status === "open" || e.status === "have-pending-confirm",
      )
      let rows = all
      if (build !== "all") rows = rows.filter((e) => (e.builds || []).includes(build))
      if (q) rows = rows.filter((e) => `${e.title || ""} ${e.doi || ""} ${e.journal || ""}`.toLowerCase().includes(q))
      rows.sort((a, b) => (b.relevance_score || 0) - (a.relevance_score || 0) || a.wishlist_id.localeCompare(b.wishlist_id))
      sendJson(response, {
        total: all.length,
        shown: Math.min(rows.length, limit),
        builds: [...new Set(all.flatMap((e) => e.builds || []))].sort(),
        entries: rows.slice(0, limit),
      })
      return
    }

    // Drop a fetched PDF right in the UI → same matching as the watcher.
    if (url.pathname === "/api/wishlist/fulfill" && request.method === "POST") {
      const buf = await readRawBody(request, 80 * 1024 * 1024)
      if (!buf.length || buf.subarray(0, 5).toString("latin1") !== "%PDF-") {
        response.writeHead(400, { "content-type": "text/plain" })
        response.end("not a PDF (missing %PDF- header)")
        return
      }
      const rawName = (request.headers["x-filename"] || "dropped.pdf").toString()
      const safe = basename(rawName).replace(/[^\w.\- ]+/g, "_").replace(/\.+/g, ".")
      const base = /\.pdf$/i.test(safe) ? safe : `${safe}.pdf`
      // Unique temp DIR so the file keeps its clean original name (fulfillFile
      // derives the filed name from basename); dir is removed afterward.
      const dir = await mkdtemp(join(os.tmpdir(), "hmi-fulfill-"))
      const tmp = join(dir, base)
      await writeFile(tmp, buf)
      let result
      try { result = await fulfillFile(tmp, { via: "upload" }) }
      finally { try { await rm(dir, { recursive: true, force: true }) } catch {} }
      sendJson(response, result)
      return
    }

    if (
      (url.pathname === "/api/wishlist/mark-have" || url.pathname === "/api/wishlist/dismiss") &&
      request.method === "POST"
    ) {
      const payload = await readJsonBody(request)
      const id = payload.wishlist_id
      if (!id) { response.writeHead(400, { "content-type": "text/plain" }); response.end("wishlist_id required"); return }
      const patch =
        url.pathname === "/api/wishlist/dismiss"
          ? { status: "dismissed" }
          : { status: "have", fulfilled_via: "manual-ui", fulfilled_at: new Date().toISOString() }
      const e = updateEntry(id, patch)
      if (!e) { response.writeHead(404, { "content-type": "text/plain" }); response.end("unknown wishlist_id"); return }
      sendJson(response, { ok: true, entry: e })
      return
    }

    if (url.pathname === "/api/run" && request.method === "POST") {
      const payload = await readJsonBody(request)
      if (!payload.subject || !String(payload.subject).trim()) {
        response.writeHead(400, { "content-type": "text/plain" })
        response.end("subject (condition) is required")
        return
      }
      // One condition run at a time — a full pull is 74 queries × 4 sources;
      // concurrent/double-fired runs would multiply rate-limit pressure.
      for (const r of runs.values()) {
        if (!r.done) {
          response.writeHead(429, { "content-type": "text/plain" })
          response.end("a run is already in progress")
          return
        }
      }
      const runId = `cond-${Date.now()}`
      const run = { _id: runId, listeners: new Set(), events: [], done: false }
      runs.set(runId, run)
      // Absolute expiry so a run that never settles can't leak its Map entry.
      run.expiry = setTimeout(() => runs.delete(runId), 60 * 60 * 1000)
      runCondition({
        subject: payload.subject,
        presetId: payload.presetId || "microbiome-medicine",
        sources: payload.sources,
        fromYear: payload.fromYear ? Number(payload.fromYear) : undefined,
        toYear: payload.toYear ? Number(payload.toYear) : undefined,
        maxPerQuery: payload.maxPerQuery != null ? Number(payload.maxPerQuery) : undefined,
        groups: payload.groups || null,
        limitQueries: payload.limitQueries ? Number(payload.limitQueries) : 0,
        dryRun: Boolean(payload.dryRun),
        outRoot: payload.outRoot,
        runId,
        onEvent: (ev) => emitTo(runId, ev),
      }).catch((err) => {
        emitTo(runId, { type: "error", msg: String(err?.message || err) })
      })
      sendJson(response, { ok: true, runId })
      return
    }

    if (url.pathname === "/api/run/stream" && request.method === "GET") {
      const runId = url.searchParams.get("runId")
      const run = runs.get(runId)
      if (!run) {
        response.writeHead(404, { "content-type": "text/plain" })
        response.end("unknown runId")
        return
      }
      response.writeHead(200, {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-store",
        connection: "keep-alive",
      })
      response.on("error", () => run.listeners.delete(response))
      for (const ev of run.events) response.write(`data: ${JSON.stringify(ev)}\n\n`)
      if (run.done) { response.end(); return }
      run.listeners.add(response)
      request.on("close", () => run.listeners.delete(response))
      return
    }

    // static
    const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname
    const filePath = normalize(join(publicRoot, requestedPath))
    if (!filePath.startsWith(publicRoot)) {
      response.writeHead(403)
      response.end("Forbidden")
      return
    }
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) throw new Error("Not a file")
    response.writeHead(200, {
      "content-type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
    })
    createReadStream(filePath).pipe(response)
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
    response.end("Not found")
  }
})

server.listen(port, host, () => {
  console.log(`Central Library listening at http://${host}:${port}`)
  console.log("Local-only tool: do not expose this port publicly.")
})

function sendJson(response, value) {
  response.writeHead(200, { "cache-control": "no-store", "content-type": "application/json; charset=utf-8" })
  response.end(JSON.stringify(value))
}

// Read the HMTc taxonomy → a compact catalog for the UI's category picker. A
// searchTerm is derived from each subcategory name (parentheticals / dashes
// stripped) so it drops cleanly into the [Matrix] query slot; the full name is
// kept for display. Cached after first read.
let _matrices = null
function loadMatrices() {
  if (_matrices) return _matrices
  try {
    const raw = JSON.parse(fs.readFileSync(resolve("data/taxonomy/hmtc-v2.json"), "utf8"))
    // Keep the words inside parentheses (powder / liquid / dry are meaningful
    // distinctions for standards) — just drop the punctuation and the noise word
    // "general", so "Infant formula (powder)" → "Infant formula powder".
    const clean = (name) =>
      String(name)
        .replace(/[()[\]—–/,]/g, " ")
        .replace(/\bgeneral\b/gi, " ")
        .replace(/\s+/g, " ")
        .trim()
    const categories = (raw.categories || []).map((c) => ({
      n: c.n,
      name: c.name,
      subcategories: (c.subcategories || []).map((s) => {
        const name = typeof s === "string" ? s : s.name
        const slug = typeof s === "string" ? "" : s.slug || ""
        const searchTerm = clean(name) || (slug ? slug.replace(/-/g, " ") : name)
        return { name, slug, searchTerm }
      }),
    }))
    const subTotal = categories.reduce((a, c) => a + c.subcategories.length, 0)
    _matrices = { version: raw.version, categoryCount: categories.length, subcategoryCount: subTotal, categories }
  } catch (e) {
    _matrices = { error: String(e.message), categories: [] }
  }
  return _matrices
}

// ── /api/library — the real corpus from the canonical identity index ─────────
// Source chain: drive SQLite (rich: journal, raw_path, source) → committed
// snapshot data/evidence/library/index-snapshot.jsonl (identity only) → an
// honest { available:false }. Compact array rows keep 29k+ papers to a few MB.
// Cached against the source file's mtime so tab switches don't re-query.
const LIB_FIELDS = ["label", "cite", "doi", "year", "journal", "ing", "pdf", "src", "path"]
const SNAPSHOT_PATH = "data/evidence/library/index-snapshot.jsonl"
let _library = null // { key, value }

function loadLibrary() {
  const dbPath = safeIndexDbPath()
  try {
    if (dbPath && fs.existsSync(dbPath)) {
      const key = `db:${dbPath}:${fs.statSync(dbPath).mtimeMs}`
      if (_library?.key === key) return _library.value
      _library = { key, value: libraryFromDb(dbPath) }
      return _library.value
    }
  } catch (e) {
    console.error(`/api/library: index read failed (${e.message}); trying snapshot`)
  }
  try {
    const snap = resolve(SNAPSHOT_PATH)
    if (fs.existsSync(snap)) {
      const key = `snap:${fs.statSync(snap).mtimeMs}`
      if (_library?.key === key) return _library.value
      _library = { key, value: libraryFromSnapshot(snap) }
      return _library.value
    }
  } catch (e) {
    console.error(`/api/library: snapshot read failed (${e.message})`)
  }
  const drive = driveStatus()
  return {
    available: false,
    driveMounted: drive.mounted,
    reason: drive.mounted
      ? "No library index found on the drive and no committed snapshot in the repo. Run: npm run library:index"
      : "HMI-Library drive is not mounted and no committed snapshot exists in the repo.",
  }
}

function safeIndexDbPath() {
  try { return indexDbPath() } catch { return null }
}

// The index carries a little upstream junk ("[]", "unknown") in doi/slug
// columns; a real DOI always starts "10.". Sanitize at the boundary so the UI
// never renders junk identity.
function cleanDoi(d) {
  return typeof d === "string" && /^10\.\S+$/.test(d) ? d : null
}
function cleanSlug(s) {
  return typeof s === "string" && s.length > 3 ? s : null
}

function libraryFromDb(dbPath) {
  const ix = openIndex({ readonly: true })
  try {
    const rows = ix.db
      .prepare(
        `SELECT normalized_title, cite_key, doi, doi_slug, year, journal,
                ingested, raw_path, acquisition_source
         FROM papers WHERE status = 'have' ORDER BY id DESC`,
      )
      .all()
    const counts = { total: rows.length, ingested: 0, withDoi: 0, pdf: 0, bySource: {} }
    const papers = rows.map((r) => {
      const doi = cleanDoi(r.doi)
      const label = r.normalized_title || r.cite_key || doi || cleanSlug(r.doi_slug) || "(unkeyed)"
      if (r.ingested) counts.ingested++
      if (doi) counts.withDoi++
      if (r.raw_path) counts.pdf++
      const src = r.acquisition_source || "unknown"
      counts.bySource[src] = (counts.bySource[src] || 0) + 1
      return [
        label, r.cite_key || null, doi, r.year || null, r.journal || null,
        r.ingested ? 1 : 0, r.raw_path ? 1 : 0, src, r.raw_path || null,
      ]
    })
    return {
      available: true,
      mode: "index",
      dbPath,
      builtAt: ix.getMeta("identity_built_at"),
      driveScanned: Number(ix.getMeta("drive_pdf_scanned")) || null,
      updatedAt: new Date(fs.statSync(dbPath).mtimeMs).toISOString(),
      counts,
      fields: LIB_FIELDS,
      papers,
    }
  } finally {
    ix.close()
  }
}

function libraryFromSnapshot(snapPath) {
  const lines = fs.readFileSync(snapPath, "utf8").split("\n").filter(Boolean)
  const counts = { total: 0, ingested: 0, withDoi: 0, pdf: null, bySource: {} }
  const papers = []
  for (const line of lines) {
    let r
    try { r = JSON.parse(line) } catch { continue }
    if (r.status && r.status !== "have") continue
    counts.total++
    if (r.ingested) counts.ingested++
    const doi = cleanDoi(r.doi)
    if (doi) counts.withDoi++
    const label = r.title_key || r.cite_key || doi || cleanSlug(r.doi_slug) || "(unkeyed)"
    // Snapshot is identity-only: journal/raw_path/source are not in the
    // allowlist, so pdf presence is unknown (null), not zero.
    papers.push([label, r.cite_key || null, doi, r.year || null, null, r.ingested ? 1 : 0, null, null, null])
  }
  return {
    available: true,
    mode: "snapshot",
    snapshotAt: new Date(fs.statSync(snapPath).mtimeMs).toISOString(),
    counts,
    fields: LIB_FIELDS,
    papers,
  }
}

function readRawBody(request, maxBytes) {
  return new Promise((res, rej) => {
    const chunks = []
    let size = 0
    request.on("data", (c) => {
      size += c.length
      if (size > maxBytes) { rej(new Error("body too large")); request.destroy() }
      else chunks.push(c)
    })
    request.on("end", () => res(Buffer.concat(chunks)))
    request.on("error", rej)
  })
}

function readJsonBody(request) {
  return new Promise((res, rej) => {
    let body = ""
    request.on("data", (c) => {
      body += c
      if (body.length > 2_000_000) rej(new Error("body too large"))
    })
    request.on("end", () => {
      try { res(body ? JSON.parse(body) : {}) } catch { rej(new Error("invalid JSON body")) }
    })
    request.on("error", rej)
  })
}
