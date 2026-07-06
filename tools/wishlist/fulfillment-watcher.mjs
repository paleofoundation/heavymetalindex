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
import { libraryRoot, isLibraryDriveMounted } from "../lib/library-root.mjs"
import { fulfillFile } from "./lib/fulfill.mjs"

const HOME = process.env.HOME || ""
const DROPBOX = process.env.HMI_WISHLIST_DROPBOX || path.join(HOME, "Desktop", "HMI Wishlist Dropbox")

if (!isLibraryDriveMounted()) {
  console.error("✗ HMI-Library drive is not mounted — plug it in so fulfilled PDFs can be filed into the library.")
  process.exit(1)
}
const root = libraryRoot()
const inbox = path.join(root, "_inbox")
for (const d of [DROPBOX, inbox]) fs.mkdirSync(d, { recursive: true })

// Process dropped PDFs one at a time (avoid racing the wishlist file writes).
let busy = Promise.resolve()
function enqueue(file) {
  busy = busy.then(async () => {
    if (!fs.existsSync(file)) return
    const r = await fulfillFile(file, { via: "watcher" })
    if (r.outcome === "checked-off") console.log(`  ✓ CHECKED OFF (${r.kind})  ${r.doi}\n      ${String(r.title || "").slice(0, 70)}\n      filed: ${r.filed}`)
    else if (r.outcome === "pending-confirm") console.log(`  ? PENDING CONFIRM (${r.kind})\n      dropped:  "${String(r.droppedTitle || "").slice(0, 60)}"\n      wishlist: "${String(r.wishlistTitle || "").slice(0, 60)}"\n      confirm in the Wishlist tab (✓ I have it).`)
    else if (r.outcome === "novel") console.log(`  · NOVEL (no wishlist match) → ${r.filed}\n      run: npm run library:sort`)
    else console.error(`  ! ${path.basename(file)}: ${r.message}`)
  }).catch((e) => console.error(`  ! ${path.basename(file)}: ${e.message}`))
}

console.log(`Fulfillment watcher running. Drop fetched PDFs into either:`)
console.log(`   ${DROPBOX}`)
console.log(`   ${inbox}`)
console.log(`(Or just drop them onto the Wishlist tab.) Checked off + filed automatically. Ctrl-C to stop.\n`)

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
