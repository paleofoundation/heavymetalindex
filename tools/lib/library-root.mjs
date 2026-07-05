// Resolves the physical location of the PDF library (the raw/ corpus + research
// pulls). The library lives on an external APFS drive named "HMI-Library"; the
// repo's raw/ is a symlink to it. Bulk-PDF tools (fetch, ingest, research pulls)
// use this so they fail with a clear "plug the drive in" message instead of
// silently writing to the wrong place when the drive is unplugged.

import fs from "node:fs"
import path from "node:path"

export const LIBRARY_VOLUME = process.env.HMI_LIBRARY_VOLUME || "HMI-Library"
export const LIBRARY_MOUNT = `/Volumes/${LIBRARY_VOLUME}`

export function isLibraryDriveMounted() {
  try {
    return fs.statSync(LIBRARY_MOUNT).isDirectory()
  } catch {
    return false
  }
}

// The library root. Priority: explicit env override → the mounted drive → null
// (drive not available). Callers treat null as "library offline".
export function libraryRoot() {
  if (process.env.HMI_LIBRARY_ROOT) return process.env.HMI_LIBRARY_ROOT
  if (isLibraryDriveMounted()) return LIBRARY_MOUNT
  return null
}

// The raw/ corpus location on the drive (what the repo's raw/ symlinks to).
export function rawLibraryDir() {
  const root = libraryRoot()
  return root ? path.join(root, "heavy-metal-index-raw") : null
}

// Where the research tool's per-condition pulls land, when the drive is present.
export function researchPullsDir() {
  const root = libraryRoot()
  return root ? path.join(root, "research-pulls") : null
}

export function driveStatus() {
  return {
    volume: LIBRARY_VOLUME,
    mount: LIBRARY_MOUNT,
    mounted: isLibraryDriveMounted(),
    root: libraryRoot(),
    rawDir: rawLibraryDir(),
    researchPullsDir: researchPullsDir(),
  }
}
