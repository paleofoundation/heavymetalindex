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

The build is skipped when every path is non-production:

- `docs/`, `.github/`, `prompts/`, `copilot/`, `tests/`
- `data/evidence/codex-runs/`, `data/evidence/outstanding/`
- unpublished wiki records already excluded by `quartz.config.ts`: `wiki/log.md`, `wiki/briefings/`, `wiki/queries/`, `wiki/batch-reports/`, `wiki/lint/`, `wiki/private/`, `wiki/templates/`, `wiki/raw/`, `_TEMPLATE.md`
- root instruction files (`AGENTS.md`, `CLAUDE.md`, `OPERATING.md`, `RECONCILE.md`, `COMPANY.md`, license files)
- `*.test.mjs`, `*.test.js`, `*.test.ts`

An empty range skips. The same SHA skips when the public GitHub commit status for context `Vercel` is already `success`.

## Not enforced here

No Vercel system environment variable distinguishes a Git push, a Deploy Hook, and a CLI deploy. Because of that:

- Failed, canceled, or blocked SHAs are not suppressed. Suppressing them would also block a manual rebuild of that SHA. The decision function can suppress them (`onFailedSha: "suppress"`), and the tests cover that, but the ignore command keeps `allow`.
- A pending Vercel status is not treated as another in-progress build. GitHub keeps one status per context, and it can be this deployment's own check. Two builds of one SHA that both start before a success status exists can both proceed. Deploy Hooks may cancel an earlier request for the same version; this command does not add a second lock.
- This command does not fire, delay, or batch the conductor's hook. If a hook is called for every content merge, each new successful SHA can still build.

## Rollback

Remove `ignoreCommand` from `vercel.json`. The dashboard Ignored Build Step, if one is still saved, applies again. Leave `git.deploymentEnabled` false. Do not set `github.enabled` false.
