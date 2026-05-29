# Grants Workbench — Reading Guide

**Purpose:** Staff-side workspace for grant-writing *assistance to external, unaffiliated applicants*, leveraging the Heavy Metal Index corpus, the Journal of Food Metallomics preprints, and the HMTc Program Manual. The Paleo Foundation supplies the scientific spine; the applicant supplies their product, team, facilities, and budget.

**This is not public wiki content.** It lives under `data/workbench/`, never in `wiki/`, and is excluded from the public build at heavymetalindex.com.

## Governance guardrails (binding)

1. **Brand firewall (CLAUDE.md Part 12).** An applicant company's product composition, COAs, and brand-level test data are handled *here* (or in the future private brand-intelligence build, Part 26), **never** in the public wiki. Sample artifacts in this directory use a generic, unnamed applicant.
2. **Arms-length + disclosed.** The Foundation may help an unaffiliated applicant author the scientific case. The assistance is disclosed in the application. Any future HMTc certification of that applicant's product still runs the standard's normal independent process — the "external third party" posture (see [after-palmquist.md](../public-briefings/after-palmquist.md)) is preserved.
3. **Wiki honesty is not negotiable for the grant's benefit (CLAUDE.md Part 2).** We draw claims *from* the corpus into a grant; we never strengthen a wiki claim to serve a grant.

## Division of labor (applicant grant)

| Bucket | Owner | Examples |
|---|---|---|
| Scientific spine | **Foundation/corpus** | Specific Aims, Significance, Innovation, methodology, literature synthesis |
| Approach + preliminary data | **Shared** | Analytical methods (ICP-MS, HMTc lot-testing rigor) + applicant's product/samples |
| Team / facilities / budget / commercialization | **Applicant only** | Investigators, environment, costs, market plan |

## Contents

- `sample-specific-aims-camel-milk-formula.md` — demonstration Specific Aims page + Significance outline (generic applicant), proving what the corpus + the Pendergrass NEC preprint can generate.
- `prompt-catalog.md` — funder-agnostic grant-writing prompts, adapted from [eseckel/ai-for-grant-writing](https://github.com/eseckel/ai-for-grant-writing) (CC-BY-4.0), tuned to the HMI domain. Mirrors the role of [docs/prompt-catalog.md](../../../docs/prompt-catalog.md) for the standards build.
