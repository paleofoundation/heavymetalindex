#!/usr/bin/env node
// F11 — make missing git hooks LOUD instead of silent.
//
// The hazard (standing rule 14, found 2026-07-31): husky v9 sets
// core.hooksPath=.husky/_ , and that directory is UNTRACKED — `husky` creates it
// during npm install's prepare step. In a worktree or clone where install has
// not run, the directory does not exist, git finds no hooks, and every gate is
// silently absent. Commits succeed with no output. Five probe commits landed
// that way before anyone noticed.
//
// WHAT THIS CANNOT DO, stated plainly so nobody re-attempts it: a guard placed
// inside .husky/ cannot fire when .husky/_ is missing, because .husky/ is not
// where git looks. And a fresh clone has core.hooksPath unset entirely. Git
// deliberately will not run repo-supplied hooks without local config — that is a
// security boundary, not an oversight. No committed file can force hooks on.
//
// WHAT IT DOES DO: catches the state that actually caused the incident — a tree
// where node_modules is present (so tooling runs and everything looks healthy)
// but .husky/_ is absent, because node_modules was symlinked or copied from
// another checkout rather than installed. That combination is always wrong and
// is exactly what a session hits when it sets up a new worktree by hand.
//
// Run directly (`npm run hooks:check`) at the start of work in any new worktree,
// per rule 14. Also wired into `prebuild`, so a build in a hook-less tree fails
// with this message rather than quietly producing output nobody gated.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const root = process.cwd()
const huskyDir = path.join(root, ".husky", "_")
const nodeModules = path.join(root, "node_modules")

let hooksPath = ""
try {
  hooksPath = execFileSync("git", ["config", "core.hooksPath"], { encoding: "utf8" }).trim()
} catch {
  hooksPath = ""
}

const problems = []

if (!fs.existsSync(huskyDir)) {
  problems.push(`.husky/_ does not exist — git is running NO hooks in this tree.`)
}
if (!hooksPath) {
  problems.push(`core.hooksPath is unset — git is using .git/hooks/, which holds only samples.`)
} else if (!hooksPath.startsWith(".husky")) {
  problems.push(`core.hooksPath is "${hooksPath}", not .husky/_ — the repo's hooks are not wired up.`)
}

if (problems.length === 0) {
  process.exit(0)
}

const symlinked = fs.existsSync(nodeModules) && fs.lstatSync(nodeModules).isSymbolicLink()

console.error("")
console.error("  hooks not installed — run `npm ci`")
console.error("")
for (const p of problems) console.error(`    · ${p}`)
if (symlinked) {
  console.error("")
  console.error("    node_modules is a SYMLINK to another checkout. That is how this happens:")
  console.error("    the tooling runs, so the tree looks healthy, but npm's prepare step never")
  console.error("    executed here, so husky never created .husky/_ . Install properly instead.")
}
console.error("")
console.error("  Until this is fixed, every commit in this tree bypasses every gate — the DOI")
console.error("  gate, the wiki-edit audit barrier and the routing audit — and succeeds silently.")
console.error("  See RECONCILE.md standing rule 14.")
console.error("")
process.exit(1)
