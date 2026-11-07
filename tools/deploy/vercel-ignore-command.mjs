// Vercel Ignored Build Step for heavymetalindex.
//
// vercel.json ignoreCommand runs this before install and build. Exit 0 skips.
// Exit 1 builds. Any uncertainty builds.
//
// Callers that actually reach this process:
//   - Vercel, for Git-connected builds of the root project, including a
//     Deploy Hook of branch main. ignoreCommand overrides the dashboard
//     Ignored Build Step.
// Repo workflows do not invoke this file. manual-production-deploy only
// POSTs the existing hook. The Evidence Fill conductor is outside this repo.

import { spawnSync } from "node:child_process"
import { decideProductionBuild } from "./production-build-decision.mjs"

export function isCommitSha(value) {
  return /^[0-9a-f]{7,40}$/i.test(String(value || ""))
}

export function githubStatusUrl(env) {
  const owner = env.VERCEL_GIT_REPO_OWNER || ""
  const repo = env.VERCEL_GIT_REPO_SLUG || ""
  const sha = env.VERCEL_GIT_COMMIT_SHA || ""
  if (!/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo)) return null
  if (!isCommitSha(sha)) return null
  return `https://api.github.com/repos/${owner}/${repo}/commits/${sha}/status`
}

export function deploymentStatesFromGithubStatus(payload) {
  const statuses = Array.isArray(payload?.statuses) ? payload.statuses : []
  const sha = payload?.sha || ""
  const states = []
  for (const status of statuses) {
    const context = String(status?.context || "")
    if (!context.toLowerCase().includes("vercel")) continue
    const value = String(status?.state || "").toLowerCase()
    if (value === "success") states.push({ sha, state: "READY" })
    else if (value === "pending") states.push({ sha, state: "PENDING" })
    else if (value === "failure" || value === "error") states.push({ sha, state: "ERROR" })
  }
  return states
}

export function commitExists(sha, cwd = process.cwd()) {
  if (!isCommitSha(sha)) return false
  const result = spawnSync("git", ["cat-file", "-e", `${sha}^{commit}`], {
    cwd,
    encoding: "utf8",
  })
  return result.status === 0
}

export function diffNames(base, head, cwd = process.cwd()) {
  if (!isCommitSha(base) || !isCommitSha(head)) {
    throw new Error("refused non-sha diff")
  }
  const result = spawnSync("git", ["diff", "--name-only", base, head], {
    cwd,
    encoding: "utf8",
  })
  if (result.status !== 0) throw new Error("git diff failed")
  return result.stdout.split("\n").map((line) => line.trim()).filter(Boolean)
}

export async function fetchGithubStatus(env, fetchImpl = globalThis.fetch) {
  const url = githubStatusUrl(env)
  if (!url || typeof fetchImpl !== "function") return null
  const response = await fetchImpl(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "hmi-production-build-guard",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    signal: AbortSignal.timeout(5000),
  })
  if (!response.ok) return null
  return response.json()
}

export async function evaluateIgnore(env, deps = {}) {
  const head = String(env.VERCEL_GIT_COMMIT_SHA || "").trim()
  const base = String(env.VERCEL_GIT_PREVIOUS_SHA || "").trim()
  const exists = deps.commitExists || commitExists
  const names = deps.diffNames || diffNames
  const fetchStatus = deps.fetchStatus || fetchGithubStatus

  let deploymentStates = null
  try {
    const payload = await fetchStatus(env)
    if (payload) {
      // A pending Vercel status can be this deployment's own check, posted
      // before the ignore step. Pending is not evidence of a sibling build.
      // Failure is not a skip either: hook and Git builds share these
      // variables, so suppressing a failed SHA would also block a manual
      // rebuild of that SHA.
      deploymentStates = deploymentStatesFromGithubStatus(payload).filter((item) => item.state === "READY")
    }
  } catch {
    deploymentStates = null
  }

  let baseAvailable = false
  let paths = null
  if (isCommitSha(base) && isCommitSha(head)) {
    if (base.toLowerCase() === head.toLowerCase()) {
      baseAvailable = true
      paths = []
    } else {
      try {
        if (exists(base)) {
          baseAvailable = true
          paths = names(base, head)
        }
      } catch {
        baseAvailable = false
        paths = null
      }
    }
  }

  return decideProductionBuild({
    headSha: head,
    baseAvailable,
    paths,
    deploymentStates,
    onFailedSha: "allow",
  })
}

export function exitCodeFor(decision) {
  return decision?.action === "skip" ? 0 : 1
}

async function main() {
  try {
    const decision = await evaluateIgnore(process.env)
    process.stdout.write(`${decision.action}: ${decision.reason}\n`)
    process.exit(exitCodeFor(decision))
  } catch {
    process.stdout.write("build: guard_error\n")
    process.exit(1)
  }
}

const invokedPath = process.argv[1] || ""
if (invokedPath.endsWith("vercel-ignore-command.mjs")) {
  await main()
}
