#!/usr/bin/env node
// Fulfillment watcher — "drop a PDF, it checks itself off."
//
// Watches two folders for dropped PDFs:
//   <HMI-Library>/_inbox                     (the library inbox)
//   ~/Desktop/HMI Wishlist Dropbox/          (a convenient desktop dropbox;
//                                             override with HMI_WISHLIST_DROPBOX)
//
// For each settled PDF it reads the DOI/title and matches OPEN wishlist entries:
//   • DOI-exact (or sha256 already known) → auto check-off (status: have), file
//     the PDF into the library, and index it as owned.
//   • title-fuzzy (Jaccard ≥ 0.85)        → status: have-pending-confirm; the UI
//     shows it for a one-click confirm. NEVER auto-checks off the wrong paper.
//   • no match                            → moved to the library _inbox for the
//     normal sorter (npm run library:sort). A novel paper, not a fulfillment.
//
//   npm run wishlist:watch
//
// Runs until stopped (Ctrl-C). Safe to leave running.

import fs from "node:fs"
import path from "node:path"
import chokidar from "chokidar"
import { libraryRoot, rawLibraryDir, isLibraryDriveMounted } from "../lib/library-root.mjs"
import { loadWishlist, saveWishlist } from "./lib/wishlist-store.mjs"
import { openIndex } from "../library/lib/index-db.mjs"
import {
  extractText, extractDoi, guessTitle, sha256File,
  normalizeDoi, normalizeTitle, doiSlug,
} from "../library/lib/extract.mjs"

const HOME = process.env.HOME || ""
const DROPBOX = process.env.HMI_WISHLIST_DROPBOX || path.join(HOME, "Desktop", "HMI Wishlist Dropbox")
const FUZZY_THRESHOLD = 0.85

if (!isLibraryDriveMounted()) {
  console.error("✗ HMI-Library drive is not mounted — plug it in so fulfilled PDFs can be filed into the library.")
  process.exit(1)
}
const root = libraryRoot()
const inbox = path.join(root, "_inbox")
const fulfilledDir = path.join(rawLibraryDir(), "wishlist-fulfilled")
const pendingDir = path.join(rawLibraryDir(), "wishlist-pending-confirm")
for (const d of [DROPBOX, inbox, fulfilledDir, pendingDir]) fs.mkdirSync(d, { recursive: true })

// ── title similarity (Jaccard over >3-char word tokens) ──────────────────────
function tokens(t) {
  return new Set(normalizeTitle(t).split(" ").filter((w) => w.length > 3))
}
function jaccard(a, b) {
  const A = tokens(a), B = tokens(b)
  if (!A.size || !B.size) return 0
  let inter = 0
  for (const w of A) if (B.has(w)) inter++
  return inter / (A.size + B.size - inter)
}

function uniqueDest(dir, base) {
  let dest = path.join(dir, base)
  let n = 1
  while (fs.existsSync(dest)) { dest = path.join(dir, base.replace(/\.pdf$/i, `-${n++}.pdf`)); }
  return dest
}

// The dropbox is on the internal disk and the library is on the external drive,
// so a plain rename() throws EXDEV — fall back to copy + unlink across devices.
function move(src, dest) {
  try {
    fs.renameSync(src, dest)
  } catch (e) {
    if (e.code === "EXDEV") { fs.copyFileSync(src, dest); fs.unlinkSync(src) }
    else throw e
  }
}

// ── process one dropped PDF ──────────────────────────────────────────────────
let busy = Promise.resolve()
function enqueue(file) {
  busy = busy.then(() => handle(file)).catch((e) => console.error(`  ! ${path.basename(file)}: ${e.message}`))
}

async function handle(file) {
  if (!fs.existsSync(file)) return
  const base = path.basename(file)
  const text = extractText(file, 3)
  const doi = extractDoi(text)
  const title = guessTitle(text, base.replace(/\.pdf$/i, ""))
  const sha = await sha256File(file)

  const byKey = loadWishlist()
  const open = [...byKey.values()].filter((e) => e.status === "open" || e.status === "have-pending-confirm")

  // 1) DOI-exact
  let match = null, kind = null
  if (doi) {
    const nd = normalizeDoi(doi)
    match = open.find((e) => e.doi && normalizeDoi(e.doi) === nd) || null
    if (match) kind = "doi-exact"
  }
  // 2) title-fuzzy (only if no DOI match)
  if (!match && title) {
    let best = null, bestScore = 0
    for (const e of open) {
      const s = jaccard(title, e.title || "")
      if (s > bestScore) { bestScore = s; best = e }
    }
    if (best && bestScore >= FUZZY_THRESHOLD) { match = best; kind = `title-fuzzy(${bestScore.toFixed(2)})` }
  }

  if (match && kind === "doi-exact") {
    // auto check-off + file + index
    const fname = doi ? `${doiSlug(doi)}.pdf` : base
    const dest = uniqueDest(fulfilledDir, fname)
    move(file, dest)
    match.status = "have"
    match.fulfilled_via = "watcher:doi-exact"
    match.fulfilled_at = new Date().toISOString()
    saveWishlist(byKey)
    indexAsHave({ sha, doi, title, dest })
    console.log(`  ✓ CHECKED OFF (doi-exact)  ${doi}\n      ${String(match.title || "").slice(0, 70)}\n      filed: ${path.relative(root, dest)}`)
    return
  }
  if (match) {
    // title-fuzzy → pending confirm (never silently wrong)
    const dest = uniqueDest(pendingDir, base)
    move(file, dest)
    match.status = "have-pending-confirm"
    match.pending_match = { extracted_title: title, extracted_doi: doi || null, dropped_file: path.relative(root, dest), matched_by: kind }
    saveWishlist(byKey)
    console.log(`  ? PENDING CONFIRM (${kind})\n      dropped: "${title.slice(0, 60)}"\n      wishlist: "${String(match.title || "").slice(0, 60)}"\n      confirm in the Wishlist tab (✓ I have it) or it stays pending.`)
    return
  }

  // no match → novel paper, hand to the normal sorter
  const dest = uniqueDest(inbox, base)
  move(file, dest)
  console.log(`  · NOVEL (no wishlist match) → ${path.relative(root, dest)}\n      run: npm run library:sort   (to file + tag it)`)
}

function indexAsHave({ sha, doi, title, dest }) {
  try {
    const ix = openIndex()
    ix.upsertPaper({
      sha256: sha,
      doi: doi ? normalizeDoi(doi) : null,
      doi_slug: doi ? doiSlug(doi) : null,
      normalized_title: title ? normalizeTitle(title) : null,
      title: title || null,
      raw_path: path.relative(rawLibraryDir(), dest),
      status: "have",
      acquisition_source: "wishlist-fulfilled",
    })
    ix.close()
  } catch (e) {
    console.error(`    (index update skipped: ${e.message})`)
  }
}

// ── watch ─────────────────────────────────────────────────────────────────────
console.log(`Fulfillment watcher running. Drop fetched PDFs into either:`)
console.log(`   ${DROPBOX}`)
console.log(`   ${inbox}`)
console.log(`They'll be checked off the wishlist + filed automatically. Ctrl-C to stop.\n`)

chokidar
  .watch([DROPBOX, inbox], {
    ignoreInitial: true,
    depth: 0,
    awaitWriteFinish: { stabilityThreshold: 1200, pollInterval: 200 },
  })
  .on("add", (file) => {
    if (/\.pdf$/i.test(file)) { console.log(`↓ dropped: ${path.basename(file)}`); enqueue(file) }
  })
  .on("error", (e) => console.error(`watcher error: ${e.message}`))
