// Resolves the physical location of the PDF library (the raw/ corpus + research
// pulls). The library lives on an external APFS drive named "HMI-Library"; the
// repo's raw/ is a symlink to it. Bulk-PDF tools (fetch, ingest, research pulls)
// use this so they fail with a clear "plug the drive in" message instead of
// silently writing to the wrong place when the drive is unplugged.

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import crypto from "node:crypto"

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

// Read-side recovery only. Never change libraryRoot()/rawLibraryDir() to point
// writers at a backup: immutable source access and ingest destinations differ.
export const LIBRARY_BACKUP = process.env.HMI_LIBRARY_BACKUP_ROOT || path.join(os.homedir(), 'HMI-Library-backup')
const under = (file, root) => file === root || file.startsWith(root + path.sep)
export function resolveLibrarySource(declaredPath, options = {}) {
  const repoRoot = path.resolve(options.repoRoot || process.cwd())
  const mount = path.resolve(options.libraryMount || LIBRARY_MOUNT)
  const backup = path.resolve(options.backupRoot || LIBRARY_BACKUP)
  const mounted = fs.existsSync(mount) && fs.statSync(mount).isDirectory()
  const declared = String(declaredPath || '').trim()
  const candidates = []
  const add = (file, root_used, fallback_used = false) => {
    if (!file || candidates.some(c => c.path === file)) return
    candidates.push({ path: file, root_used, fallback_used })
  }
  if (declared) {
    const absolute = path.resolve(repoRoot, declared)
    add(absolute, under(absolute, mount) ? 'mounted_library' : under(absolute, backup) ? 'backup_library' : under(absolute, path.join(repoRoot, 'raw')) ? 'repository_raw' : 'declared', under(absolute, backup))
    { // Retry a missing declared file in the backup even if the volume is online.
      let suffix = null
      if (under(absolute, mount)) suffix = path.relative(mount, absolute)
      else if (declared.replaceAll('\\', '/').startsWith('raw/')) suffix = path.join('heavy-metal-index-raw', declared.slice(4))
      else if (under(absolute, path.join(repoRoot, 'raw'))) suffix = path.join('heavy-metal-index-raw', path.relative(path.join(repoRoot, 'raw'), absolute))
      else if (!path.isAbsolute(declared) && declared.startsWith('heavy-metal-index-raw/')) suffix = declared
      if (suffix !== null) {
        const mapped = path.resolve(backup, suffix)
        if (under(mapped, backup)) add(mapped, 'backup_library', true)
      }
    }
  }
  const attempts = candidates.map(candidate => {
    try { const stat = fs.statSync(candidate.path); if (stat.isFile()) fs.accessSync(candidate.path, fs.constants.R_OK); const physical_path = fs.realpathSync(candidate.path); const actual_root = under(physical_path, backup) ? 'backup_library' : under(physical_path, mount) ? 'mounted_library' : candidate.root_used; return { ...candidate, physical_path, root_used: actual_root, fallback_used: actual_root === 'backup_library', exists: stat.isFile() || (options.allowDirectories === true && stat.isDirectory()), bytes: stat.size, resource_kind: stat.isDirectory() ? 'directory' : 'file', outcome: stat.isFile() ? 'readable_file_candidate' : stat.isDirectory() ? 'directory' : 'not_a_file' } }
    catch (error) { return { ...candidate, exists: false, bytes: 0, outcome: error.code || 'unreadable' } }
  })
  const selected = attempts.find(a => a.exists && a.bytes > 0)
  return { declared_path: declared, resolved_path: selected?.path || null, root_used: selected?.root_used || null, fallback_used: selected?.fallback_used || false, mounted_library: { path: mount, mounted }, backup_root: backup, attempts,
    identity_verified: false, completeness_verified: false }
}

export function auditSourceAccess(declaredPaths, options = {}) {
  const paths = Array.isArray(declaredPaths) ? declaredPaths : [declaredPaths]
  const resolutions = paths.filter(p => typeof p === 'string' && p.trim()).map(p => resolveLibrarySource(p, options))
  const selected = resolutions.find(r => r.resolved_path)
  const result = { checked_at: new Date().toISOString(), raw_access: Boolean(selected), root_used: selected?.root_used || null, resolved_path: selected?.resolved_path || null, fallback_used: selected?.fallback_used || false, resolutions, identity_verified: false, completeness_verified: false }
  if (selected && options.hash !== false) result.sha256 = crypto.createHash('sha256').update(fs.readFileSync(selected.resolved_path)).digest('hex')
  return result
}
