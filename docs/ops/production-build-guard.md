# Production build guard

Vercel reads the repository root `vercel.json`. The connected project has no separate root directory. `vercel.rice.json` is a manual `--local-config` file and is not the Git build entrypoint.

## What runs a production build

`git.deploymentEnabled: false` is the documented switch that turns off automatic deployments for every branch. Deploy Hooks still create deployments. Setting `github.enabled: false` would block those hooks, so this repo does not set it.

Observed production deployments after that switch still carry Git metadata (`source: git`, `githubCommitRef: main`). A Deploy Hook of `main` deploys a Git SHA, so that metadata does not prove the push itself created the deployment. Pull request #583 did not stop those production starts. The deployment-policy API that would change the project setting returned 404 and was not applied.

Callers:

- Vercel runs `ignoreCommand` (`node tools/deploy/vercel-ignore-command.mjs`) before install for a Git-connected build, including a Deploy Hook. That command overrides the dashboard Ignored Build Step. Exit 1 builds. Exit 0 cancels.
- `.github/workflows/scheduled-deploy.yml` (`manual-production-deploy`) is manual `workflow_dispatch` only. It POSTs the existing Deploy Hook and does not run on merge.
- `npm run publish:wiki` is the CLI publish script. This guard does not add a call to it.
- The Evidence Fill conductor lives outside this repository. Commit messages and `docs/ops/last-tip-deploy-trigger.txt` show it asking for a tip deploy. Nothing in this repository invokes that conductor. One build per content batch is its hook cadence, not something this command can see.

Pull-request CI is unchanged.

## Skip and build rules

The diff base is `VERCEL_GIT_PREVIOUS_SHA`: the last successful deployment of that branch. Vercel sets it only when an Ignored Build Step exists. The command does not diff `HEAD^`. If the base is missing or not in the clone, the build proceeds.

A build proceeds when any path since that success is site content or build code (`wiki/` pages, evidence data, `quartz/`, `tools/`, `api/`, `vercel.json`, and anything else not listed below). A docs-only tip still builds when earlier undeployed content is inside that range.

The skip list is the trees the production build does not read. Quartz publishes `wiki/`. On Vercel, `tools/build/pipeline.mjs` runs the non-audit generators and skips the read-only audits. Those generators, `tools/build/quartz-build.mjs`, and `api/` do not reference `codex-runs`, `evidence/outstanding`, or `docs/briefs`. A test fails if one of them starts to. Other `docs/` mentions in those generators are comments or a sentence in dashboard prose, not file reads. Offline tools do read `docs/briefs/` and `data/evidence/codex-runs/`, and `tools/outstanding/` reads its ledger, but those tools are not in the production build. Unpublished wiki paths match `quartz.config.ts` `ignorePatterns`.

Skipped when every changed path is in this set:

- `docs/`, `.github/`, `prompts/`, `copilot/`, `tests/`
- `data/evidence/codex-runs/`, `data/evidence/outstanding/`
- `wiki/log.md`, `wiki/briefings/`, `wiki/queries/`, `wiki/batch-reports/`, `wiki/lint/`, `wiki/private/`, `wiki/templates/`, `wiki/raw/`, `_TEMPLATE.md`
- root instruction files (`AGENTS.md`, `CLAUDE.md`, `OPERATING.md`, `RECONCILE.md`, `COMPANY.md`, license files)
- `*.test.mjs`, `*.test.js`, `*.test.ts`

An empty file range skips. That includes a Deploy Hook or Redeploy of the SHA that is already the last successful deployment (`VERCEL_GIT_PREVIOUS_SHA` equals the commit). Git cannot see an environment-variable change or other external input, so that refresh would be skipped.

Explicit rebuild, either one is enough:

- The commit message contains `[production rebuild]`. Vercel exposes it as `VERCEL_GIT_COMMIT_MESSAGE`. An empty commit with that token builds even when the file diff is empty.
- `HMI_FORCE_PRODUCTION_BUILD=1` in the ignore process environment. The value must be exactly `1`. It is not a secret. While it is set, every deployment builds, including docs-only ranges. Remove it after the refresh.

Public GitHub commit statuses are not consulted. A success whose context contains `Vercel` does not prove this project, production, or that the success is current.

## Not enforced here

No Vercel system environment variable distinguishes a Git push, a Deploy Hook, and a CLI deploy. Because of that:

- This command does not dedupe from deployment records. Another project, a preview, or a stale success must not cancel a needed build, and the public status payload cannot separate those cases. Two builds of one SHA can both run. Deploy Hooks may cancel an earlier request for the same version; this command does not add a lock.
- A failed SHA is not given a special retry block. This repo also does not add a retry.
- This command does not fire, delay, or batch the conductor's hook. If a hook is called for every content merge, each new SHA whose files changed since the last success can still build.

## Rollback

Remove `ignoreCommand` from `vercel.json`. The dashboard Ignored Build Step, if one is still saved, applies again. Leave `git.deploymentEnabled` false. Do not set `github.enabled` false.
