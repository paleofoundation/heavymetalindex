// Resolve the shared files an evidence fill conflicts on when main has moved.
// Baselines and the alias registry take main. wiki/log.md keeps both sides.
// The caller re-records the filled page and regenerates aliases afterwards.
//
//   node tools/evidence-fill/resolve-merge-conflicts.mjs
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import { pathToFileURL } from "node:url"

export const THEIRS_PATHS = [
  "data/evidence/page-structure-baseline.json",
  "data/evidence/page-openings-baseline.json",
  "data/fanout/thin-with-evidence-baseline.txt",
  "data/redirects/aliases-301.json",
]

export function resolveConflictText(text) {
  if (!text.includes("<<<<<<<")) return text
  const eol = text.includes("\r\n") ? "\r\n" : "\n"
  const endsWithNl = text.endsWith("\n")
  const lines = text.split(/\r?\n/)
  const out = []
  let mode = "keep"
  let ours = []
  let theirs = []
  const flush = () => {
    const seen = new Set()
    for (const line of [...ours, ...theirs]) {
      if (seen.has(line)) continue
      seen.add(line)
      out.push(line)
    }
    ours = []
    theirs = []
  }
  for (const line of lines) {
    if (line.startsWith("<<<<<<<")) {
      mode = "ours"
      continue
    }
    if (line.startsWith("=======") && mode === "ours") {
      mode = "theirs"
      continue
    }
    if (line.startsWith(">>>>>>>") && mode === "theirs") {
      flush()
      mode = "keep"
      continue
    }
    if (mode === "ours") ours.push(line)
    else if (mode === "theirs") theirs.push(line)
    else out.push(line)
  }
  if (mode !== "keep") {
    flush()
  }
  let joined = out.join(eol)
  if (endsWithNl && !joined.endsWith("\n")) joined += eol
  return joined
}

function git(args) {
  execFileSync("git", args, { stdio: "inherit" })
}

function main() {
  const unmerged = execFileSync("git", ["diff", "--name-only", "--diff-filter=U"], { encoding: "utf8" })
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
  const takeTheirs = THEIRS_PATHS.filter((file) => unmerged.includes(file))
  if (takeTheirs.length) {
    git(["checkout", "--theirs", "--", ...takeTheirs])
    git(["add", "--", ...takeTheirs])
  }
  if (unmerged.includes("wiki/log.md")) {
    const raw = fs.readFileSync("wiki/log.md", "utf8")
    fs.writeFileSync("wiki/log.md", resolveConflictText(raw))
    git(["add", "--", "wiki/log.md"])
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
