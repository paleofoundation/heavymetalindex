// Decide whether a Vercel production build should run.
//
// Exit-code contract used by vercel.json ignoreCommand:
//   build -> exit 1 (Vercel continues)
//   skip  -> exit 0 (Vercel cancels before the build)
//
// The diff base is the last successful deployment for the branch
// (VERCEL_GIT_PREVIOUS_SHA). A parent-commit diff is the wrong base: a
// docs-only tip would hide content merged after the previous success.

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

const IN_PROGRESS = new Set(["BUILDING", "QUEUED", "INITIALIZING", "ANALYZING", "PENDING"])
const FAILED = new Set(["ERROR", "CANCELED", "BLOCKED", "FAILED"])

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

function statesForHead(input) {
  if (!Array.isArray(input.deploymentStates)) return null
  const sha = String(input.headSha || "").toLowerCase()
  return input.deploymentStates.filter((item) => {
    if (!item?.state) return false
    if (!item.sha || !sha) return true
    return String(item.sha).toLowerCase() === sha
  })
}

export function decideProductionBuild(input = {}) {
  const states = statesForHead(input)
  if (states) {
    if (states.some((item) => item.state === "READY")) {
      return { action: "skip", reason: "sha_already_ready" }
    }
    if (states.some((item) => IN_PROGRESS.has(item.state))) {
      return { action: "skip", reason: "sha_already_in_progress" }
    }
    if (input.onFailedSha === "suppress" && states.some((item) => FAILED.has(item.state))) {
      return { action: "skip", reason: "sha_failed_no_automatic_retry" }
    }
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
