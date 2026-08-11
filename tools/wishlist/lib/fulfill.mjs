// Shared fulfillment logic — match a dropped/uploaded PDF to the wishlist, check
// it off, file it into the library, and index it as owned. Used by BOTH the
// filesystem watcher (fulfillment-watcher.mjs) and the in-app drop zone
// (POST /api/wishlist/fulfill), so the behavior is identical either way.

import fs from "node:fs"
import path from "node:path"
import { libraryRoot, rawLibraryDir, isLibraryDriveMounted } from "../../lib/library-root.mjs"
import { loadWishlist, saveWishlist } from "./wishlist-store.mjs"
import { openIndex } from "../../library/lib/index-db.mjs"
import {
  extractText, extractDoi, guessTitle, sha256File,
  normalizeDoi, normalizeTitle, doiSlug,
} from "../../library/lib/extract.mjs"

export const FUZZY_THRESHOLD = 0.85

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
  while (fs.existsSync(dest)) dest = path.join(dir, base.replace(/\.pdf$/i, `-${n++}.pdf`))
  return dest
}
// Desktop (internal disk) → library (external drive) crosses filesystems, so a
// plain rename throws EXDEV; fall back to copy + unlink.
function move(src, dest) {
  try { fs.renameSync(src, dest) }
  catch (e) { if (e.code === "EXDEV") { fs.copyFileSync(src, dest); fs.unlinkSync(src) } else throw e }
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
  } catch { /* index update is best-effort */ }
}

// Process one PDF at `filePath`. Returns a structured result; never throws for
// the normal outcomes. `via` labels the source (watcher:<dir> / upload).
export async function fulfillFile(filePath, { via = "upload" } = {}) {
  if (!isLibraryDriveMounted()) {
    return { outcome: "error", message: "HMI-Library drive is not mounted — plug it in to file fulfilled PDFs." }
  }
  const root = libraryRoot()
  const fulfilledDir = path.join(rawLibraryDir(), "wishlist-fulfilled")
  const pendingDir = path.join(rawLibraryDir(), "wishlist-pending-confirm")
  const inbox = path.join(root, "_inbox")
  for (const d of [fulfilledDir, pendingDir, inbox]) fs.mkdirSync(d, { recursive: true })

  const base = path.basename(filePath)
  const text = extractText(filePath, 3)
  const doi = extractDoi(text)
  const title = guessTitle(text, base.replace(/\.pdf$/i, ""))
  const sha = await sha256File(filePath)

  const byKey = loadWishlist()
  const open = [...byKey.values()].filter((e) => e.status === "open" || e.status === "have-pending-confirm")

  // 1) DOI-exact → auto check-off
  let match = null
  if (doi) {
    const nd = normalizeDoi(doi)
    match = open.find((e) => e.doi && normalizeDoi(e.doi) === nd) || null
  }
  if (match) {
    const dest = uniqueDest(fulfilledDir, doi ? `${doiSlug(doi)}.pdf` : base)
    move(filePath, dest)
    match.status = "have"
    match.fulfilled_via = `${via}:doi-exact`
    match.fulfilled_at = new Date().toISOString()
    saveWishlist(byKey)
    indexAsHave({ sha, doi, title, dest })
    return { outcome: "checked-off", kind: "doi-exact", doi, title: match.title, filed: path.relative(root, dest), entry: match }
  }

  // 2) title-fuzzy → pending confirm (never silently checks off the wrong paper)
  if (title) {
    let best = null, bestScore = 0
    for (const e of open) { const s = jaccard(title, e.title || ""); if (s > bestScore) { bestScore = s; best = e } }
    if (best && bestScore >= FUZZY_THRESHOLD) {
      const dest = uniqueDest(pendingDir, base)
      move(filePath, dest)
      best.status = "have-pending-confirm"
      best.pending_match = { extracted_title: title, extracted_doi: doi || null, dropped_file: path.relative(root, dest), score: Number(bestScore.toFixed(2)) }
      saveWishlist(byKey)
      return { outcome: "pending-confirm", kind: `title-fuzzy(${bestScore.toFixed(2)})`, droppedTitle: title, wishlistTitle: best.title, entry: best }
    }
  }

  // 3) no match → novel paper. Still make it OWNED (index it as have + move to
  // the inbox for the sorter), so "drop a PDF → it's in my library" holds true
  // even when the paper wasn't on the wishlist.
  const dest = uniqueDest(inbox, base)
  move(filePath, dest)
  indexAsHave({ sha, doi, title, dest })
  return { outcome: "novel", title, doi, filed: path.relative(root, dest) }
}
