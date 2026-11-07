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
//
// This process does not read GitHub commit statuses or the Vercel API.
// Those records cannot prove that a success is this project's current
// production deployment.

import { spawnSync } from "node:child_process"
import {
  decideProductionBuild,
  explicitRebuildRequested,
} from "./production-build-decision.mjs"

export function isCommitSha(value) {
  return /^[0-9a-f]{7,40}$/i.test(String(value || ""))
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

export async function evaluateIgnore(env, deps = {}) {
  const head = String(env.VERCEL_GIT_COMMIT_SHA || "").trim()
  const base = String(env.VERCEL_GIT_PREVIOUS_SHA || "").trim()
  const exists = deps.commitExists || commitExists
  const names = deps.diffNames || diffNames
  const forceRebuild = explicitRebuildRequested(env)

  let baseAvailable = false
  let paths = null
  if (isCommitSha(base) && isCommitSha(head)) {
    if (base.toLowerCase() === head.toLowerCase()) {
      // Last successful deployment is this commit. The file range is empty,
      // so a hook or Redeploy of the same SHA skips unless an explicit
      // rebuild override is set. Git history cannot see env or external inputs.
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
    forceRebuild,
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
