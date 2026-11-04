// Bring open evidence-fill branches onto latest main and re-record only the
// pages those branches fill. Sibling fills each rewrite the same baseline
// files. A clean git merge of those files drops page entries or leaves the
// scanned-page count behind, and the pull request then fails CI.
//
//   node tools/evidence-fill/refresh-open-prs.mjs
//   node tools/evidence-fill/refresh-open-prs.mjs --branch evidence-fill/HMI-FILL-0009
//   node tools/evidence-fill/refresh-open-prs.mjs --branch evidence-fill/HMI-FILL-0009 --no-push --no-dispatch
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { recordFilledPage } from "./record-filled-page.mjs"

const BASELINES = [
  "data/evidence/page-structure-baseline.json",
  "data/evidence/page-openings-baseline.json",
  "data/fanout/thin-with-evidence-baseline.txt",
]

function git(args, cwd, opts = {}) {
  return execFileSync("git", args, { cwd, encoding: "utf8", ...opts })
}

function flag(name) {
  const index = process.argv.indexOf(name)
  return index >= 0 ? process.argv[index + 1] : ""
}

export function pagePaths(root) {
  const diff = git(["diff", "--name-only", "origin/main", "--", "wiki/ingredients", "wiki/products"], root)
  return diff
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^wiki\/(ingredients|products)\/[^/]+\.md$/.test(line))
    .filter((line) => !line.endsWith("/index.md"))
}

export function tryMerge(work) {
  try {
    git(["merge", "--no-edit", "origin/main"], work)
    return true
  } catch (error) {
    const stderr = `${error.stderr || ""}${error.stdout || ""}${error.message || ""}`
    if (!/CONFLICT|not something we can merge|unmerged/.test(stderr) && error.status !== 1) throw error
    execFileSync("node", [fileURLToPath(new URL("./resolve-merge-conflicts.mjs", import.meta.url))], {
      cwd: work,
      stdio: "inherit",
    })
    const left = git(["diff", "--name-only", "--diff-filter=U"], work).trim()
    if (left) {
      process.stderr.write(`unresolved conflicts on ${work}:\n${left}\n`)
      return false
    }
    git(["commit", "--no-edit"], work)
    return true
  }
}

export function recordPages(work) {
  git(["checkout", "origin/main", "--", ...BASELINES], work)
  const pages = pagePaths(work)
  for (const page of pages) recordFilledPage(work, page)
  execFileSync("node", ["--import", "tsx", "tools/build-alias-redirects.ts"], {
    cwd: work,
    stdio: "inherit",
    env: { ...process.env, NODE_OPTIONS: process.env.NODE_OPTIONS || "--max-old-space-size=6144" },
  })
  const add = [...BASELINES, "data/redirects/aliases-301.json"]
  git(["add", "--", ...add], work)
  const cached = git(["diff", "--cached", "--name-only"], work).trim()
  if (!cached) return pages
  git(
    ["commit", "-m", "Evidence fill: record filled pages on latest main baselines"],
    work,
  )
  return pages
}

function main() {
  const repo = process.cwd()
  const only = flag("--branch")
  const push = !process.argv.includes("--no-push")
  const dispatch = !process.argv.includes("--no-dispatch")
  git(["fetch", "--no-tags", "origin", "main"], repo)
  let branches = []
  if (only) {
    git(["fetch", "--no-tags", "origin", only], repo)
    branches = [only]
  } else {
    const json = execFileSync(
      "gh",
      ["pr", "list", "--state", "open", "--limit", "200", "--json", "headRefName,number"],
      { cwd: repo, encoding: "utf8" },
    )
    const rows = JSON.parse(json).filter((row) => /^evidence-fill\/HMI-FILL-\d+$/.test(row.headRefName))
    for (const row of rows) git(["fetch", "--no-tags", "origin", row.headRefName], repo)
    branches = rows.map((row) => row.headRefName)
  }
  const failed = []
  for (const branch of branches) {
    const work = fs.mkdtempSync(path.join(os.tmpdir(), "fill-refresh-"))
    console.log(`refresh ${branch} in ${work}`)
    try {
      git(["worktree", "add", "--detach", work, `origin/${branch}`], repo)
      if (!fs.existsSync(path.join(work, "node_modules"))) {
        fs.symlinkSync(path.join(repo, "node_modules"), path.join(work, "node_modules"))
      }
      git(["checkout", "-B", branch], work)
      try {
        git(["config", "user.email"], work)
      } catch {
        git(["config", "user.email", "41898282+claude[bot]@users.noreply.github.com"], work)
        git(["config", "user.name", "claude[bot]"], work)
      }
      if (!tryMerge(work)) {
        failed.push(branch)
        continue
      }
      const pages = recordPages(work)
      console.log(`  pages: ${pages.join(", ") || "(none)"}`)
      const ahead = git(["rev-list", "--count", `origin/${branch}..HEAD`], work).trim()
      if (ahead === "0") {
        console.log("  already current")
        continue
      }
      if (push) {
        git(["push", "origin", `HEAD:${branch}`], work, { stdio: "inherit" })
        if (dispatch) {
          try {
            execFileSync("gh", ["workflow", "run", "ci.yml", "--ref", branch], { cwd: repo, stdio: "inherit" })
          } catch (error) {
            process.stderr.write(`dispatch skipped for ${branch}: ${error.message}\n`)
          }
        }
      } else {
        console.log(`  ${ahead} commit(s) not pushed (--no-push)`)
      }
    } catch (error) {
      process.stderr.write(`refresh failed for ${branch}: ${error.message}\n`)
      failed.push(branch)
    } finally {
      try {
        git(["worktree", "remove", "--force", work], repo)
      } catch {
        // leave the directory if remove fails
      }
    }
  }
  if (failed.length) {
    process.stderr.write(`could not refresh: ${failed.join(", ")}\n`)
    process.exit(1)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
