import { test } from "node:test"
import assert from "node:assert/strict"
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import {
  decideProductionBuild,
  pathAffectsProduction,
} from "./production-build-decision.mjs"
import {
  diffNames,
  evaluateIgnore,
  exitCodeFor,
  deploymentStatesFromGithubStatus,
} from "./vercel-ignore-command.mjs"

const HERE = dirname(fileURLToPath(import.meta.url))
const HEAD = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
const BASE = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

function git(cwd, args) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8" })
  assert.equal(result.status, 0, result.stderr)
  return result.stdout.trim()
}

function commitFile(cwd, path, body) {
  const full = join(cwd, path)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, body)
  git(cwd, ["add", path])
  git(cwd, ["commit", "-m", path])
  return git(cwd, ["rev-parse", "HEAD"])
}

test("docs, status, and tracking paths do not affect production", () => {
  assert.equal(pathAffectsProduction("docs/ops/last-tip-deploy-trigger.txt"), false)
  assert.equal(pathAffectsProduction("wiki/log.md"), false)
  assert.equal(pathAffectsProduction("data/evidence/codex-runs/note.md"), false)
  assert.equal(pathAffectsProduction(".github/workflows/ci.yml"), false)
  assert.equal(pathAffectsProduction("tools/deploy/production-build-decision.test.mjs"), false)
})

test("wiki content and build code affect production", () => {
  assert.equal(pathAffectsProduction("wiki/ingredients/rice.md"), true)
  assert.equal(pathAffectsProduction("wiki/sources/example.md"), true)
  assert.equal(pathAffectsProduction("data/evidence/regulatory_limits.csv"), true)
  assert.equal(pathAffectsProduction("tools/deploy/vercel-ignore-command.mjs"), true)
  assert.equal(pathAffectsProduction("quartz.config.ts"), true)
  assert.equal(pathAffectsProduction("vercel.json"), true)
})

test("no change since the last ready deployment skips", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: [],
    deploymentStates: [],
  })
  assert.deepEqual(decision, { action: "skip", reason: "no_change_since_last_ready" })
})

test("docs-only since the last ready deployment skips", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: ["docs/ops/last-tip-deploy-trigger.txt", "wiki/log.md"],
    deploymentStates: [],
  })
  assert.equal(decision.action, "skip")
  assert.equal(decision.reason, "docs_status_tracking_only")
})

test("content or code since the last ready deployment builds", () => {
  const content = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: ["wiki/sources/example.md"],
    deploymentStates: [],
  })
  const code = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: ["api/ask.js"],
    deploymentStates: [],
  })
  assert.equal(content.reason, "production_inputs_changed")
  assert.equal(code.reason, "production_inputs_changed")
  assert.equal(exitCodeFor(content), 1)
  assert.equal(exitCodeFor({ action: "skip" }), 0)
})

test("a docs tip still builds when earlier undeployed content is in the range", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: [
      "wiki/ingredients/rice.md",
      "docs/ops/last-tip-deploy-trigger.txt",
    ],
    deploymentStates: [],
  })
  assert.equal(decision.action, "build")
  assert.equal(decision.reason, "production_inputs_changed")
})

test("an unresolved range builds instead of using a parent diff", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: false,
    paths: null,
  })
  assert.equal(decision.action, "build")
  assert.equal(decision.reason, "range_unresolved_build")
})

test("a ready SHA is skipped and an in-progress sibling is skipped", () => {
  const ready = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: ["wiki/ingredients/rice.md"],
    deploymentStates: [{ sha: HEAD, state: "READY" }],
  })
  assert.equal(ready.reason, "sha_already_ready")

  const seen = []
  function attempt() {
    const decision = decideProductionBuild({
      headSha: HEAD,
      baseAvailable: true,
      paths: ["wiki/ingredients/rice.md"],
      deploymentStates: seen.filter((item) => item.sha === HEAD),
    })
    if (decision.action === "build") seen.push({ sha: HEAD, state: "BUILDING" })
    return decision
  }
  assert.equal(attempt().reason, "production_inputs_changed")
  assert.equal(attempt().reason, "sha_already_in_progress")
})

test("a failed SHA is not retried when suppression is on, and still builds when the trigger is unknown", () => {
  const shared = {
    headSha: HEAD,
    baseAvailable: true,
    paths: ["wiki/ingredients/rice.md"],
    deploymentStates: [{ sha: HEAD, state: "ERROR" }],
  }
  assert.equal(
    decideProductionBuild({ ...shared, onFailedSha: "suppress" }).reason,
    "sha_failed_no_automatic_retry",
  )
  assert.equal(
    decideProductionBuild({ ...shared, onFailedSha: "allow" }).reason,
    "production_inputs_changed",
  )
})

test("the ignore command diffs the last ready SHA and builds a docs tip that still contains content", async () => {
  const cwd = mkdtempSync(join(tmpdir(), "hmi-deploy-guard-"))
  git(cwd, ["init", "-q"])
  git(cwd, ["config", "user.email", "guard@example.com"])
  git(cwd, ["config", "user.name", "guard"])
  const ready = commitFile(cwd, "wiki/log.md", "log\n")
  commitFile(cwd, "wiki/ingredients/rice.md", "rice\n")
  const tip = commitFile(cwd, "docs/ops/last-tip-deploy-trigger.txt", "tip\n")
  const names = diffNames(ready, tip, cwd)
  assert.ok(names.includes("wiki/ingredients/rice.md"))
  assert.ok(names.includes("docs/ops/last-tip-deploy-trigger.txt"))

  const decision = await evaluateIgnore(
    {
      VERCEL_GIT_COMMIT_SHA: tip,
      VERCEL_GIT_PREVIOUS_SHA: ready,
      VERCEL_GIT_REPO_OWNER: "paleofoundation",
      VERCEL_GIT_REPO_SLUG: "heavymetalindex",
    },
    {
      commitExists: (sha) => commitExistsIn(cwd, sha),
      diffNames: (base, head) => diffNames(base, head, cwd),
      fetchStatus: async () => ({ sha: tip, statuses: [] }),
    },
  )
  assert.equal(decision.action, "build")
  assert.equal(decision.reason, "production_inputs_changed")
})

test("the ignore command skips a docs-only range and a SHA that is already ready", async () => {
  const cwd = mkdtempSync(join(tmpdir(), "hmi-deploy-guard-"))
  git(cwd, ["init", "-q"])
  git(cwd, ["config", "user.email", "guard@example.com"])
  git(cwd, ["config", "user.name", "guard"])
  const ready = commitFile(cwd, "wiki/ingredients/rice.md", "rice\n")
  const tip = commitFile(cwd, "docs/status.md", "status\n")

  const docsOnly = await evaluateIgnore(
    {
      VERCEL_GIT_COMMIT_SHA: tip,
      VERCEL_GIT_PREVIOUS_SHA: ready,
    },
    {
      commitExists: (sha) => commitExistsIn(cwd, sha),
      diffNames: (base, head) => diffNames(base, head, cwd),
      fetchStatus: async () => null,
    },
  )
  assert.equal(docsOnly.reason, "docs_status_tracking_only")

  const duplicate = await evaluateIgnore(
    {
      VERCEL_GIT_COMMIT_SHA: tip,
      VERCEL_GIT_PREVIOUS_SHA: ready,
      VERCEL_GIT_REPO_OWNER: "paleofoundation",
      VERCEL_GIT_REPO_SLUG: "heavymetalindex",
    },
    {
      commitExists: () => {
        throw new Error("status is enough")
      },
      diffNames: () => {
        throw new Error("status is enough")
      },
      fetchStatus: async () => ({
        sha: tip,
        statuses: [{ context: "Vercel", state: "success" }],
      }),
    },
  )
  assert.equal(duplicate.reason, "sha_already_ready")
})

test("a pending or failed Vercel status does not by itself skip the build", async () => {
  for (const state of ["pending", "failure"]) {
    const decision = await evaluateIgnore(
      {
        VERCEL_GIT_COMMIT_SHA: HEAD,
        VERCEL_GIT_PREVIOUS_SHA: BASE,
        VERCEL_GIT_REPO_OWNER: "paleofoundation",
        VERCEL_GIT_REPO_SLUG: "heavymetalindex",
      },
      {
        commitExists: () => true,
        diffNames: () => ["wiki/ingredients/rice.md"],
        fetchStatus: async () => ({
          sha: HEAD,
          statuses: [{ context: "Vercel", state }],
        }),
      },
    )
    assert.equal(decision.action, "build", state)
    assert.equal(decision.reason, "production_inputs_changed")
  }
})

test("a missing last-ready SHA builds", async () => {
  const decision = await evaluateIgnore(
    { VERCEL_GIT_COMMIT_SHA: HEAD },
    {
      commitExists: () => false,
      diffNames: () => {
        throw new Error("must not diff")
      },
      fetchStatus: async () => null,
    },
  )
  assert.equal(decision.reason, "range_unresolved_build")
})

test("the ignore command does not diff HEAD^", () => {
  const source = readFileSync(join(HERE, "vercel-ignore-command.mjs"), "utf8")
  assert.equal(source.includes("HEAD^"), false)
  assert.match(source, /VERCEL_GIT_PREVIOUS_SHA/)
  const mapped = deploymentStatesFromGithubStatus({
    sha: HEAD,
    statuses: [
      { context: "Vercel", state: "success" },
      { context: "ci", state: "failure" },
    ],
  })
  assert.deepEqual(mapped, [{ sha: HEAD, state: "READY" }])
})

function commitExistsIn(cwd, sha) {
  return spawnSync("git", ["cat-file", "-e", `${sha}^{commit}`], { cwd }).status === 0
}
