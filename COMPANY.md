---
name: Heavy Metal Index
agent_context: cto
sources:
  - path: docs/governance/hmtc-governing-principles.md
    why: HMTc Principle 4 (defensibility under public scrutiny) governs every architecture and engineering decision in this repo. Load every heartbeat.
  - path: CLAUDE.md
    why: Operating manual for wiki sessions; defines the wiki/HMT&C epistemic firewall and the routing/synthesis architecture the engineering work must respect.
  - path: docs/continuous-ingest-architecture.md
    why: Canonical architecture for the continuous gap-fill ingest system (HMI-9). Board-resolved decisions on runtime, model role, audit-row barrier, and cost backstop.
updated: 2026-05-27
---

# COMPANY.md — Heavy Metal Index

This file is the agent-context root for engineering work in `paleofoundation/heavymetalindex`. The CTO heartbeat reads it every wake. The `sources:` frontmatter is the durable list of files that must be loaded into context for every heartbeat in this repo.

## Why this file exists

Heavy Metal Index is a Cochrane-style scientific library for heavy metal contamination, plus a certification program (HMTc) that brands pay to participate in. The Index is the moat. Every engineering decision in this repo must reason under the [HMTc Governing Principles](./docs/governance/hmtc-governing-principles.md), especially **Principle 4 (defensibility under public scrutiny)** — the wiki must survive a hostile expert, a regulator, or a plaintiff's attorney reading every line.

The `sources:` array above is enforced as a load-time dependency by the CTO heartbeat. Adding or removing entries is a governance change; it goes through the CEO, not an inline edit during a code task.

## How to use this file

- **CTO heartbeat:** reads `sources:` and loads each listed file before doing repo work. Principle 4 is the constraint to check every architecture and methodology decision against.
- **New hires (engineers, QA, scientific advisors):** the `sources:` list is the minimum reading set. Anything beyond is task-specific.
- **Anyone editing this file:** the `sources:` array is governance-binding. Do not add a source as a side effect of a feature task; open a separate governance ticket and route it to the CEO.

## Related

- HMTc Program governance: [docs/governance/hmtc-governing-principles.md](./docs/governance/hmtc-governing-principles.md)
- Wiki operating manual: [CLAUDE.md](./CLAUDE.md)
- Codex operating rules for this repo: [AGENTS.md](./AGENTS.md)
- Continuous ingest architecture (HMI-9): [docs/continuous-ingest-architecture.md](./docs/continuous-ingest-architecture.md)
