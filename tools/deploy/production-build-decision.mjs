// Decide whether a Vercel production build should run.
//
// Exit-code contract used by vercel.json ignoreCommand:
//   build -> exit 1 (Vercel continues)
//   skip  -> exit 0 (Vercel cancels before the build)
//
// The diff base is the last successful deployment for the branch
// (VERCEL_GIT_PREVIOUS_SHA). A parent-commit diff is the wrong base: a
// docs-only tip would hide content merged after the previous success.
//
// Public GitHub commit statuses are not an input. A success whose context
// contains "vercel" can belong to another project, a preview, or an older
// deployment. None of those may cancel this production build.

export const PRODUCTION_REBUILD_TOKEN = "[production rebuild]"

const SKIP_PREFIXES = [
  "docs/",
  ".github/",
  "prompts/",
  "copilot/",
  "tests/",
  "data/evidence/codex-runs/",
  "data/evidence/outstanding/",
  "wiki/briefings/",
  "wiki/queries/",
  "wiki/batch-reports/",
  "wiki/lint/",
  "wiki/private/",
  "wiki/templates/",
  "wiki/raw/",
]

const SKIP_EXACT = new Set([
  "AGENTS.md",
  "CLAUDE.md",
  "OPERATING.md",
  "RECONCILE.md",
  "COMPANY.md",
  "LICENSE",
  "LICENSE-CONTENT.md",
  "LICENSE-quartz.txt",
  "seo-indexing-chrome-prompt.md",
  "wiki/log.md",
])

export function normalizeRepoPath(filePath) {
  return String(filePath || "")
    .replaceAll("\\", "/")
    .replace(/^\.\//, "")
    .replace(/^\/+/, "")
    .trim()
}

export function pathAffectsProduction(filePath) {
  const path = normalizeRepoPath(filePath)
  if (!path) return true
  if (SKIP_EXACT.has(path)) return false
  if (path.endsWith("/_TEMPLATE.md")) return false
  if (path.endsWith(".test.mjs") || path.endsWith(".test.js") || path.endsWith(".test.ts")) return false
  if (path.startsWith("wiki/") && path.includes("/raw/")) return false
  for (const prefix of SKIP_PREFIXES) {
    if (path.startsWith(prefix)) return false
  }
  return true
}

// Commit message token, or the non-secret process flag HMI_FORCE_PRODUCTION_BUILD=1.
// Any other flag value is ignored. The flag forces every build while it is set.
export function explicitRebuildRequested(source = {}) {
  const message = String(source.VERCEL_GIT_COMMIT_MESSAGE || source.message || "")
  if (message.includes(PRODUCTION_REBUILD_TOKEN)) return true
  return source.HMI_FORCE_PRODUCTION_BUILD === "1"
}

export function decideProductionBuild(input = {}) {
  if (input.forceRebuild === true) {
    return { action: "build", reason: "explicit_rebuild_override" }
  }

  if (input.baseAvailable !== true || !Array.isArray(input.paths)) {
    return { action: "build", reason: "range_unresolved_build" }
  }
  if (input.paths.length === 0) {
    return { action: "skip", reason: "no_change_since_last_ready" }
  }
  const relevant = input.paths.map(normalizeRepoPath).filter(pathAffectsProduction)
  if (relevant.length === 0) {
    return { action: "skip", reason: "docs_status_tracking_only" }
  }
  return { action: "build", reason: "production_inputs_changed" }
}
